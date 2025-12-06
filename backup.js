import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import fs from "fs";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

async function fetchAllPages() {
  let hasMore = true;
  let cursor = undefined;
  let pages = [];

  while (hasMore) {
    const response = await notion.search({
      start_cursor: cursor,
      page_size: 100,
      filter: {
        property: "object",
        value: "page"
      }
    });

    pages = pages.concat(response.results);
    cursor = response.next_cursor;
    hasMore = response.has_more;
  }

  return pages;
}

function mdToString(md) {
  // notion-to-md v3+ 可能返回 array / object / string
  if (typeof md === "string") return md;
  if (Array.isArray(md)) {
    return md.map(m => (m.parent || "")).join("\n");
  }
  if (typeof md === "object" && md !== null) {
    return md.parent || "";
  }
  return "";
}

async function exportPage(page, index) {
  const pageId = page.id;

  const title =
    page.properties?.title?.title?.[0]?.plain_text ||
    page.url.split("-").slice(-1)[0] ||
    `untitled-${index}`;

  const safeTitle = title.replace(/[\/\\:*?"<>|]/g, "_");

  const mdBlocks = await n2m.pageToMarkdown(pageId);
  const mdObject = n2m.toMarkdownString(mdBlocks);
  const markdown = mdToString(mdObject);

  if (!fs.existsSync("backup")) fs.mkdirSync("backup");

  fs.writeFileSync(
    `./backup/${safeTitle}__${pageId}.md`,
    markdown,
    "utf8"
  );
  
  console.log(`Saved: ${safeTitle}`);
}

async function startBackup() {
  console.log("Fetching all pages…");
  const pages = await fetchAllPages();
  console.log(`Found ${pages.length} pages`);

  for (let i = 0; i < pages.length; i++) {
    await exportPage(pages[i], i);
  }

  console.log("Backup complete.");
}

startBackup();