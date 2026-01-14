
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBMA7QJB%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCLuA91zJfeddbAxUZZKqZRWa%2Fr8tYsSX0SNp99NdoApwIgN7mekNs1gT6HScuJvfPpuFc%2Fcf5W%2B26Yn9iVJ3%2B4DsUq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHQTRtT9RzrwF2kPgyrcA7uoqDHZcbQHphJJJemwhLDmesd33xkfsCob0HySb5W6QOjzcWHGeyWenVbYplxW9nZZP8e5ZzHNcuGU%2BBWZxzyy2ALavDDaGVJ19GZSdOdLy3U9q0cBddyC3gaZg%2BIzD1qOZ819aXkNp4V8UIS%2FNWs4Wrv8nVo9o4DqTaF31sgPYalEl6SeRrCPHwrcM9Wl%2BId5JnqIjKRb2szWitQnKovTInLQKo%2FJOc%2BCL%2B%2BZlrXJ9k1X1H805Uab%2Fgo8vvmNCGJBIYE%2FoYQMYacWWZ2xjOXuSO4gmdheHGMJzkdI%2FYXgmdwHffSU2CrdIDCTYm%2FlnZYirupnk06em8TOipmE5IHTKmcAb4tzck%2BeETQPmbnHuQnvabWf9FDqSMi4BrfJHBlFXFeFsB4iHweGqqH1CPRA8Amd5EJuFj3NQMBBxTlWNvUNSdJVUksEfNn17xFaGx9EP6MF8gDHbFvPsuF%2FiiIls%2FimiZEZEnajtKV1cL%2FSfQP8QOOLY8H7S6rkNvLVjdDvKOHZWBpfUd6iRMoVFfe17cKf59vYRMK%2FtofH2f55YUyDnLeNGQ3%2BlM1cfYv8yknPDsr6NOQNhdic65ufUk1W%2FdCCphhQkXYwX8mKsk%2FpdGKR0n%2BF1B0g8%2FFrMMCbnMsGOqUBnwJ8yY8LfP9YYbslG1IopPnFK%2FcxIVLwiWG%2BDvAWTSurJ4TLgWGXhNgLEN%2B4DB%2B9c3KupHFqigUdZSv5vnbsGUOPr8yxqezpMnV%2FRbL%2Bt4JYYPfhDgDOzsDcHG08lOqiX3aQlfTi8jGMfqcIT1Ulb76ap6VREZ8TOjcwGx4rMjS5M4ur166VXRtriZNt%2Fb7uLMn%2FrOuhI8O4nw8%2FFh6Wpx%2FOsTAB&X-Amz-Signature=6f458649f3feef35f7cd610b49a2c6b0db1456351c3ac8d7cf2ad60ad44b25e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250409_162349


使用时用 宏体 替代 宏名 与 宏参


```c
#define 宏名(宏参) 宏体
```


注意：


宏名与宏参之间没有空格


宏只做字符的替换（原理），不会加任何括号（参见书p149－6.26）


宏的参数受括号保护


### 宏的使用


ps：


形参：定义宏时括号内的参数（被替换的参数）


实参：使用宏时括号内的参数（替换别人的参数）


宏展开：形参被替换的过程叫宏展开


```c
a=3+S(5,8)//其中S(5,8)是宏
```


### define定义常量


语法：


```c
#define 常量名 常量值
```


‍


## C 基础语法

# C 基础语法


在 C 语言中，令牌（Token）是程序的基本组成单位，编译器通过对源代码进行词法分析，将代码分解成一个个的令牌。C 语言的令牌主要包括以下几种类型：

1. 关键字（Keywords）
2. 标识符（Identifiers）
3. 常量（Constants）
4. 字符串字面量（String Literals）
5. 运算符（Operators）
6. 分隔符（Separators）

‍


## C语言关键字

# C语言关键字


## 以下关键字均为C语言内置


break：跳出循环/switch分支


const:常属性：


用于声明一个常量，即其值在初始化后不能被修改。const可以提高程序的可读性和维护性，同时还可以避免程序中的意外修改。


示例


```c
const int MAX_SIZE = 100;
```


continue：跳过本次循环


default：用于switch分支，表示当没有任何 case 匹配时，default 子句会被执行。


if 和else：分支


for：循环


do和 while：循环


enum：枚举


struct：结构体


union：联合体


void：空


typedef：创建类型别名


switch和case：多分支


goto：跳转


```c
goto 标识符;
// 其他语句
标识符:
// 跳转后要执行的语
```


‍sizeof：查看大小


char 字符


short 短整型


int 整形


double 浮点（双精度）


float 浮点（单精度）


‍return：返回值


## 函数

# 函数


‍


函数的定义语法：


```c
函数名（函数参数）
{
  函数体；
}
```


‍


注意：定义函数时，不需给函数头后加分号。


使用函数时，需要给函数后加分号


‍


## 注意：


函数的参数是函数的输入


函数的返回值“return”是函数的输出


**函数必须有输入必须有输出（非void类型的函数不定义返回值，会返回随机值）**


如果函数不需要输出，一定要将函数定义为void类型


函数不能嵌套定义，可以嵌套调用


函数传参问题看这个[函数参数的传递的问题](https://www.notion.so/2245a2dd827680b6be99fb13c540050f) 


## 分支

# 分支


# if语句


**注意⚠️if语句后不跟分号**


```c
**⚠️如果if后要跟多个语句，则需要                   将这些语句用花括号括成一个代                       码块**
```


示例


```c
#include <stdio.h>
int main()
{
    if (3 == 5)
    printf("字符串\n");
    return 0;
}
```


if只能执行一种情况（单分支）


### 格式


```c
if (表达式)
执行语句
```


或者


```c
if(表达式)
{
 执行语句1;
 执行语句2；
 ...
}
```


# if else语句


示例


```c
#include <stdio.h>
int main()
{

 if(3==5)
   { printf("字符串1\n");}
 else
   { printf ("字符串2\n";)
 return 0;
}
```


**注意⚠️if 与else后都不跟分号**


同理if else分支内只有一个语句则不需要大括号括起，有多个语句则需要用大括号括成一个代码块


我们建议不论有无多个语句都用大括号括起以提升可读性


if else 可以处理两种情况（双分支）


如果要用 if else语句 处理多分支需要嵌套使用


### 编译器处理if else嵌套规则

- 每个else语句都与最近的一个未配对的if语句配对（从内向外配对）
- 如果在if if else 嵌套语句中想实现第一个if与else配对，则需要用花括号括起第二个if语句，否则默认第二个if与else配对

### 格式


```c
if (表达式)
  {执行语句1;}
else
  {执行语句2;}
```


# switch 语句


示例


```c
#include <stdio.h>
int main ()
{
  /* 局部变量定义 */
  char grade = 'B';
  switch(grade)
  {
    case 'A' :
       printf("很棒！\n" );
    break;

    case 'B' :
    case 'C' :
       printf("做得好\n" );
    break;

    case 'D' :
       printf("您通过了\n" );
    break;

    case 'F' :
       printf("最好再试一下\n" );
    break;

    default :
       printf("无效的成绩\n" );
  }
printf("您的成绩是 %c\n", grade );
return 0;
}
```


**注意⚠️示例中第12-15行表示B与C分支共用一个代码块**


每个case后不加break即默认与下一个case一起执行


case（实例）：后跟一个常量值，当表达式的值与该值相匹配，执行该case后面的代码块。


break（终止）：终止Switch语句的执行。执行到break，程序会跳出Switch语句。


default（不匹配）：所有case都不匹配，执行default后面的代码块。


如果没有default且没有匹配的case：则不执行任何操作。


### 格式


```c
switch (整形表达式)
{
  语句项：
}
```


```c
语句项是：
//是一些case语句
//如下
case 整形常量表达式：
  语句；
```


注意⚠️：switch只能处理整形


由于字符也是用整形存储，因此这里的整形表达式也可以是字符


‍


## 各种函数汇总

# 各种函数汇总


```c
printf()//输出
```


可以输出任何字符，数字


```c
scanf()//输入
```


可以输入任何一个字符，数字


```c
gitchar()//输入单个字符
```


只能读取单个字符


```c
putchar()//输出单个字符
```


只能输出单个字符


## 循环

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TZMO6EH%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCID%2FSGKXjHFrbKubiOg6FYR1KECElx52LwkRCFkVW55TIAiBeV36Zs4KDJo2APhBbsOL19M9KfKwd8t%2BV6LC8LMpG1yr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIM5gAwqYzhzbwU99EmKtwDM4oLnPpgDm5hUxx8RfCH%2F%2BJsivAXn6%2F6CWSMVMEbjdZNOLUusIWmoDOnerPa9rQ0XUkKcFd3Y1psKewu3j5hhlDB%2FGyPQtSYjwJ5NUchu2wSL12NRdzDlwCeAEpnq3NJQtTHcUsyVC9K477loIB8IjN2284LT9iG3hL0M1m%2B2nn%2BAsjy6tvD8OmyrSq7iBWNYgbB0fvePrPnsJrFRDEejejKZl2C2sHd9d%2ByAlO0idtG7J%2FIA5qmaj6FYTEt1Q6S0A237%2BPuHU6Q5CmEpSmDT2%2B62XMhVUpFcrqNkqjQ%2FPpH1a9%2BiuXNLOziYqg85z1%2BG1AV7Fx8yBKKTmI4KRKySMZQ5sgvlr9wDVgXG8pJbZVaNGWRwI1ajsB5bYUD4rhoMQsQkXeRd8sjJQS1yxTJmfT%2Bo2PpAmdSxvY3Ciui%2F5lYmj01TuqjfQKeVsvc3mOqyWfChvcRSZYv%2F6QZNaZxipJXRjOSJo5T0hYOq2eUdJ7LJzxIV4h7g0fBvHYvySr4C4aIR3xzOe32X0rqpKplG4FQw0cIctKiTTfSLp765lNYVoLPVOcnuodfrvo7mu%2F2pWop1Zo0wvMjmpPcI%2BgBI8M6b2anpQpqqUbEKNj3SRNXx%2Bkf%2FOGoGOjl3cUw8ZucywY6pgFXV63ZcNG5%2Bdwloy55Jn2JcvhzUoZx2EPRLMEhjk6AfMpta8Yiz2%2FyOyCHhSVrEzRQYYHYfIDK5eMY3DSEgwCLEREyv9jnXn1EEaqNSsSvEH7pSgb36R7m0HuXm6H6%2FxvG%2FHyyCWuCG6dbyaC5ym2caAzOqn0ss76PrtigNZhFkrQjuCKQVrNmzc64y2ffo%2B3xDhGgHe%2BPST%2FHg%2F7d8wbwqK%2F%2Bt36K&X-Amz-Signature=ab9733ba138b6149053a3cf8fae2bfd01a71ea257d2d715f5edfa9a342f021ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TZMO6EH%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCID%2FSGKXjHFrbKubiOg6FYR1KECElx52LwkRCFkVW55TIAiBeV36Zs4KDJo2APhBbsOL19M9KfKwd8t%2BV6LC8LMpG1yr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIM5gAwqYzhzbwU99EmKtwDM4oLnPpgDm5hUxx8RfCH%2F%2BJsivAXn6%2F6CWSMVMEbjdZNOLUusIWmoDOnerPa9rQ0XUkKcFd3Y1psKewu3j5hhlDB%2FGyPQtSYjwJ5NUchu2wSL12NRdzDlwCeAEpnq3NJQtTHcUsyVC9K477loIB8IjN2284LT9iG3hL0M1m%2B2nn%2BAsjy6tvD8OmyrSq7iBWNYgbB0fvePrPnsJrFRDEejejKZl2C2sHd9d%2ByAlO0idtG7J%2FIA5qmaj6FYTEt1Q6S0A237%2BPuHU6Q5CmEpSmDT2%2B62XMhVUpFcrqNkqjQ%2FPpH1a9%2BiuXNLOziYqg85z1%2BG1AV7Fx8yBKKTmI4KRKySMZQ5sgvlr9wDVgXG8pJbZVaNGWRwI1ajsB5bYUD4rhoMQsQkXeRd8sjJQS1yxTJmfT%2Bo2PpAmdSxvY3Ciui%2F5lYmj01TuqjfQKeVsvc3mOqyWfChvcRSZYv%2F6QZNaZxipJXRjOSJo5T0hYOq2eUdJ7LJzxIV4h7g0fBvHYvySr4C4aIR3xzOe32X0rqpKplG4FQw0cIctKiTTfSLp765lNYVoLPVOcnuodfrvo7mu%2F2pWop1Zo0wvMjmpPcI%2BgBI8M6b2anpQpqqUbEKNj3SRNXx%2Bkf%2FOGoGOjl3cUw8ZucywY6pgFXV63ZcNG5%2Bdwloy55Jn2JcvhzUoZx2EPRLMEhjk6AfMpta8Yiz2%2FyOyCHhSVrEzRQYYHYfIDK5eMY3DSEgwCLEREyv9jnXn1EEaqNSsSvEH7pSgb36R7m0HuXm6H6%2FxvG%2FHyyCWuCG6dbyaC5ym2caAzOqn0ss76PrtigNZhFkrQjuCKQVrNmzc64y2ffo%2B3xDhGgHe%2BPST%2FHg%2F7d8wbwqK%2F%2Bt36K&X-Amz-Signature=d06204c702363742a7b417fe9e0235dfcc4dcea80f300990022fe9871224152d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


其他表示真假的方法：布尔变量


但需引入 stdbool.h 头文件才能使用


布尔变量使用true和false表示对和错（分别对应非0与0）


```c
#include <stdio.h>
#include <stdbool.h> // 引入布尔类型
int main()
{
  bool isHappy = true; // 定义布尔变量并初始化为true
  bool isSad = false;  // 定义布尔变量并初始化为false
  if (isHappy)
   {
     printf("I am happy!\n");
    }
  if (!isSad)
   {
     printf("I am not sad!\n");
    }
return 0;
}
```


## while循环（前置条件循环）


格式：


```c
while(表达式)   //表达式为真，执行循环，直到表达式不为真，退出循环
     循环语句;
```


先判断，后循环


## do while循环（后置条件循环）


‍


```c
do
{循环语句;}
while(判断条件);
```


## for循环（前置入口循环）


格式


```c
for(表达式1；表达式2；表达式3)
```


**表达式1:**


初始化部分，初始化循环变量


**表达式2**:


条件判断部分，判断循环何时终止


**表达式3**:


调整部分，定义循环变量如何变化


例子：


```c
int a=1;
for(a=2;a<10;a++)
   循环语句；
```


<u>**‍注意⚠️：for括号中是分号！分号！分号！不是逗号！！！**</u>


## break语句（停止）


break语句用于终止switch分支和循环


```c
break;
```


‍


## continue语句（跳过）


continue语句用于跳过本次循环后面的代码，直接去判断部分，进行下一次循环的判断


```c
continue;
```


continue与break一般有如下用法：


```c
if(5==i)
  break;
```


或


```c
if(5==i)
  contiue;
```


‍


## 数据结构（数据类型）

# 数据结构（数据类型）


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGFHNTW%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCti23cXSKWUEHEWr6iU53nJaBHtXBASFJnLqPFCvJSWgIhAMCMZVfokunaaNns%2F0RingCSmVHFaJ%2FYVTO10vcSvZG2Kv8DCBUQABoMNjM3NDIzMTgzODA1Igwxgnvgmi4MahSHs68q3AM63f38mXtmWdZgWr5O%2FSNhV6U1uU9%2BboFHMtBchgFI2X9FMn9uOSKMkGlHW3lTDRMOysnOd7l78nAFI0eCvUimVdNWpKoamVcSR8hy%2FT2iDsbCtkj59yZ79k6Q3IZxyYyDUesejRDMyX%2BmaXNunwMTPxOGaYs7AET1jVmC8gvLxVtJVBmhOO%2BBF2zB9iTEUL6TwaEpFg3a9kayNXYQqyNKN29%2BZF8Rv8MaXzDXaHsMG6HVioCVx2dOTSixfeC5mOBTK8OsTkiJQnqEOeAqZrLVB5SDsX0D%2BcPqPx6soyWF%2BCsLBEim1vQZbawTRlu1zClLccqmgLqUH%2FxKltNLlyXXqJp6icgt0l6yy7XTbYYpHAFNekIjYjTBhRKXmxCK4qElpAzv6vv01qWBe97RKEGIM9TH2dQ9p%2FlZy7z0uswGg7XLkJ6m8vGZYfGUNtempQMftnzv%2BXGy62iLJhUHqETDvkgLHvwvs5cofa5bQHYnCsuRXAAa9KjQgc%2BD82IWxUyTuJZ1D7U%2FGCoahX4YqyeVhozF5KmedcYxsRBGZ5c5CEuhFH8irM%2B2fpBM%2BedtpUA0%2Fdyjhm%2BUCFESOUrABjRsqitSHtvsR8aEa22ENvnGC29gSgqamIOecjBabTDGnJzLBjqkAfZY5m%2BquHyLsY1tACxOeKENy5SzpsnT1CFIjfbKuuCs2cQvkxQx%2BEx%2BVZUBUtyWfBS5tMT9SQboSnf1RzJUeE%2BIig%2By0tiG4lepq2YbYPKY%2BaeHZ4t%2BVqHpUv3NO4j4bscKrzzRDfrEmJUFCi7BFzd0kVLGlD8Tdafu5aLyFiG4i3vCyD61TXKd0bXzoRv9a1XFkCgVieI%2BN1WUHVkPYVuUL4Sg&X-Amz-Signature=62720f19f6e64cf3901da55dd1fcf7c3f8126742573f8464d6da13032c25896f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGFHNTW%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCti23cXSKWUEHEWr6iU53nJaBHtXBASFJnLqPFCvJSWgIhAMCMZVfokunaaNns%2F0RingCSmVHFaJ%2FYVTO10vcSvZG2Kv8DCBUQABoMNjM3NDIzMTgzODA1Igwxgnvgmi4MahSHs68q3AM63f38mXtmWdZgWr5O%2FSNhV6U1uU9%2BboFHMtBchgFI2X9FMn9uOSKMkGlHW3lTDRMOysnOd7l78nAFI0eCvUimVdNWpKoamVcSR8hy%2FT2iDsbCtkj59yZ79k6Q3IZxyYyDUesejRDMyX%2BmaXNunwMTPxOGaYs7AET1jVmC8gvLxVtJVBmhOO%2BBF2zB9iTEUL6TwaEpFg3a9kayNXYQqyNKN29%2BZF8Rv8MaXzDXaHsMG6HVioCVx2dOTSixfeC5mOBTK8OsTkiJQnqEOeAqZrLVB5SDsX0D%2BcPqPx6soyWF%2BCsLBEim1vQZbawTRlu1zClLccqmgLqUH%2FxKltNLlyXXqJp6icgt0l6yy7XTbYYpHAFNekIjYjTBhRKXmxCK4qElpAzv6vv01qWBe97RKEGIM9TH2dQ9p%2FlZy7z0uswGg7XLkJ6m8vGZYfGUNtempQMftnzv%2BXGy62iLJhUHqETDvkgLHvwvs5cofa5bQHYnCsuRXAAa9KjQgc%2BD82IWxUyTuJZ1D7U%2FGCoahX4YqyeVhozF5KmedcYxsRBGZ5c5CEuhFH8irM%2B2fpBM%2BedtpUA0%2Fdyjhm%2BUCFESOUrABjRsqitSHtvsR8aEa22ENvnGC29gSgqamIOecjBabTDGnJzLBjqkAfZY5m%2BquHyLsY1tACxOeKENy5SzpsnT1CFIjfbKuuCs2cQvkxQx%2BEx%2BVZUBUtyWfBS5tMT9SQboSnf1RzJUeE%2BIig%2By0tiG4lepq2YbYPKY%2BaeHZ4t%2BVqHpUv3NO4j4bscKrzzRDfrEmJUFCi7BFzd0kVLGlD8Tdafu5aLyFiG4i3vCyD61TXKd0bXzoRv9a1XFkCgVieI%2BN1WUHVkPYVuUL4Sg&X-Amz-Signature=4982bb625869d8fe66688bc31d6fa2a159d57513cc9aef189610888bd5130c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGFHNTW%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCti23cXSKWUEHEWr6iU53nJaBHtXBASFJnLqPFCvJSWgIhAMCMZVfokunaaNns%2F0RingCSmVHFaJ%2FYVTO10vcSvZG2Kv8DCBUQABoMNjM3NDIzMTgzODA1Igwxgnvgmi4MahSHs68q3AM63f38mXtmWdZgWr5O%2FSNhV6U1uU9%2BboFHMtBchgFI2X9FMn9uOSKMkGlHW3lTDRMOysnOd7l78nAFI0eCvUimVdNWpKoamVcSR8hy%2FT2iDsbCtkj59yZ79k6Q3IZxyYyDUesejRDMyX%2BmaXNunwMTPxOGaYs7AET1jVmC8gvLxVtJVBmhOO%2BBF2zB9iTEUL6TwaEpFg3a9kayNXYQqyNKN29%2BZF8Rv8MaXzDXaHsMG6HVioCVx2dOTSixfeC5mOBTK8OsTkiJQnqEOeAqZrLVB5SDsX0D%2BcPqPx6soyWF%2BCsLBEim1vQZbawTRlu1zClLccqmgLqUH%2FxKltNLlyXXqJp6icgt0l6yy7XTbYYpHAFNekIjYjTBhRKXmxCK4qElpAzv6vv01qWBe97RKEGIM9TH2dQ9p%2FlZy7z0uswGg7XLkJ6m8vGZYfGUNtempQMftnzv%2BXGy62iLJhUHqETDvkgLHvwvs5cofa5bQHYnCsuRXAAa9KjQgc%2BD82IWxUyTuJZ1D7U%2FGCoahX4YqyeVhozF5KmedcYxsRBGZ5c5CEuhFH8irM%2B2fpBM%2BedtpUA0%2Fdyjhm%2BUCFESOUrABjRsqitSHtvsR8aEa22ENvnGC29gSgqamIOecjBabTDGnJzLBjqkAfZY5m%2BquHyLsY1tACxOeKENy5SzpsnT1CFIjfbKuuCs2cQvkxQx%2BEx%2BVZUBUtyWfBS5tMT9SQboSnf1RzJUeE%2BIig%2By0tiG4lepq2YbYPKY%2BaeHZ4t%2BVqHpUv3NO4j4bscKrzzRDfrEmJUFCi7BFzd0kVLGlD8Tdafu5aLyFiG4i3vCyD61TXKd0bXzoRv9a1XFkCgVieI%2BN1WUHVkPYVuUL4Sg&X-Amz-Signature=c8892d39356849b550f043cc3c36ea284046c1d8fb095409e727d7fb683b0213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGFHNTW%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCti23cXSKWUEHEWr6iU53nJaBHtXBASFJnLqPFCvJSWgIhAMCMZVfokunaaNns%2F0RingCSmVHFaJ%2FYVTO10vcSvZG2Kv8DCBUQABoMNjM3NDIzMTgzODA1Igwxgnvgmi4MahSHs68q3AM63f38mXtmWdZgWr5O%2FSNhV6U1uU9%2BboFHMtBchgFI2X9FMn9uOSKMkGlHW3lTDRMOysnOd7l78nAFI0eCvUimVdNWpKoamVcSR8hy%2FT2iDsbCtkj59yZ79k6Q3IZxyYyDUesejRDMyX%2BmaXNunwMTPxOGaYs7AET1jVmC8gvLxVtJVBmhOO%2BBF2zB9iTEUL6TwaEpFg3a9kayNXYQqyNKN29%2BZF8Rv8MaXzDXaHsMG6HVioCVx2dOTSixfeC5mOBTK8OsTkiJQnqEOeAqZrLVB5SDsX0D%2BcPqPx6soyWF%2BCsLBEim1vQZbawTRlu1zClLccqmgLqUH%2FxKltNLlyXXqJp6icgt0l6yy7XTbYYpHAFNekIjYjTBhRKXmxCK4qElpAzv6vv01qWBe97RKEGIM9TH2dQ9p%2FlZy7z0uswGg7XLkJ6m8vGZYfGUNtempQMftnzv%2BXGy62iLJhUHqETDvkgLHvwvs5cofa5bQHYnCsuRXAAa9KjQgc%2BD82IWxUyTuJZ1D7U%2FGCoahX4YqyeVhozF5KmedcYxsRBGZ5c5CEuhFH8irM%2B2fpBM%2BedtpUA0%2Fdyjhm%2BUCFESOUrABjRsqitSHtvsR8aEa22ENvnGC29gSgqamIOecjBabTDGnJzLBjqkAfZY5m%2BquHyLsY1tACxOeKENy5SzpsnT1CFIjfbKuuCs2cQvkxQx%2BEx%2BVZUBUtyWfBS5tMT9SQboSnf1RzJUeE%2BIig%2By0tiG4lepq2YbYPKY%2BaeHZ4t%2BVqHpUv3NO4j4bscKrzzRDfrEmJUFCi7BFzd0kVLGlD8Tdafu5aLyFiG4i3vCyD61TXKd0bXzoRv9a1XFkCgVieI%2BN1WUHVkPYVuUL4Sg&X-Amz-Signature=f5f0df0f49ec2c993036962fa4d45b62851a50731eaa2e9a077355cf0ec6f1ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGFHNTW%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCti23cXSKWUEHEWr6iU53nJaBHtXBASFJnLqPFCvJSWgIhAMCMZVfokunaaNns%2F0RingCSmVHFaJ%2FYVTO10vcSvZG2Kv8DCBUQABoMNjM3NDIzMTgzODA1Igwxgnvgmi4MahSHs68q3AM63f38mXtmWdZgWr5O%2FSNhV6U1uU9%2BboFHMtBchgFI2X9FMn9uOSKMkGlHW3lTDRMOysnOd7l78nAFI0eCvUimVdNWpKoamVcSR8hy%2FT2iDsbCtkj59yZ79k6Q3IZxyYyDUesejRDMyX%2BmaXNunwMTPxOGaYs7AET1jVmC8gvLxVtJVBmhOO%2BBF2zB9iTEUL6TwaEpFg3a9kayNXYQqyNKN29%2BZF8Rv8MaXzDXaHsMG6HVioCVx2dOTSixfeC5mOBTK8OsTkiJQnqEOeAqZrLVB5SDsX0D%2BcPqPx6soyWF%2BCsLBEim1vQZbawTRlu1zClLccqmgLqUH%2FxKltNLlyXXqJp6icgt0l6yy7XTbYYpHAFNekIjYjTBhRKXmxCK4qElpAzv6vv01qWBe97RKEGIM9TH2dQ9p%2FlZy7z0uswGg7XLkJ6m8vGZYfGUNtempQMftnzv%2BXGy62iLJhUHqETDvkgLHvwvs5cofa5bQHYnCsuRXAAa9KjQgc%2BD82IWxUyTuJZ1D7U%2FGCoahX4YqyeVhozF5KmedcYxsRBGZ5c5CEuhFH8irM%2B2fpBM%2BedtpUA0%2Fdyjhm%2BUCFESOUrABjRsqitSHtvsR8aEa22ENvnGC29gSgqamIOecjBabTDGnJzLBjqkAfZY5m%2BquHyLsY1tACxOeKENy5SzpsnT1CFIjfbKuuCs2cQvkxQx%2BEx%2BVZUBUtyWfBS5tMT9SQboSnf1RzJUeE%2BIig%2By0tiG4lepq2YbYPKY%2BaeHZ4t%2BVqHpUv3NO4j4bscKrzzRDfrEmJUFCi7BFzd0kVLGlD8Tdafu5aLyFiG4i3vCyD61TXKd0bXzoRv9a1XFkCgVieI%2BN1WUHVkPYVuUL4Sg&X-Amz-Signature=fa98ec3378ac64ac57ba0b684613bd087c0b7834457b82bbd0046bb1d69e7922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGFHNTW%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCti23cXSKWUEHEWr6iU53nJaBHtXBASFJnLqPFCvJSWgIhAMCMZVfokunaaNns%2F0RingCSmVHFaJ%2FYVTO10vcSvZG2Kv8DCBUQABoMNjM3NDIzMTgzODA1Igwxgnvgmi4MahSHs68q3AM63f38mXtmWdZgWr5O%2FSNhV6U1uU9%2BboFHMtBchgFI2X9FMn9uOSKMkGlHW3lTDRMOysnOd7l78nAFI0eCvUimVdNWpKoamVcSR8hy%2FT2iDsbCtkj59yZ79k6Q3IZxyYyDUesejRDMyX%2BmaXNunwMTPxOGaYs7AET1jVmC8gvLxVtJVBmhOO%2BBF2zB9iTEUL6TwaEpFg3a9kayNXYQqyNKN29%2BZF8Rv8MaXzDXaHsMG6HVioCVx2dOTSixfeC5mOBTK8OsTkiJQnqEOeAqZrLVB5SDsX0D%2BcPqPx6soyWF%2BCsLBEim1vQZbawTRlu1zClLccqmgLqUH%2FxKltNLlyXXqJp6icgt0l6yy7XTbYYpHAFNekIjYjTBhRKXmxCK4qElpAzv6vv01qWBe97RKEGIM9TH2dQ9p%2FlZy7z0uswGg7XLkJ6m8vGZYfGUNtempQMftnzv%2BXGy62iLJhUHqETDvkgLHvwvs5cofa5bQHYnCsuRXAAa9KjQgc%2BD82IWxUyTuJZ1D7U%2FGCoahX4YqyeVhozF5KmedcYxsRBGZ5c5CEuhFH8irM%2B2fpBM%2BedtpUA0%2Fdyjhm%2BUCFESOUrABjRsqitSHtvsR8aEa22ENvnGC29gSgqamIOecjBabTDGnJzLBjqkAfZY5m%2BquHyLsY1tACxOeKENy5SzpsnT1CFIjfbKuuCs2cQvkxQx%2BEx%2BVZUBUtyWfBS5tMT9SQboSnf1RzJUeE%2BIig%2By0tiG4lepq2YbYPKY%2BaeHZ4t%2BVqHpUv3NO4j4bscKrzzRDfrEmJUFCi7BFzd0kVLGlD8Tdafu5aLyFiG4i3vCyD61TXKd0bXzoRv9a1XFkCgVieI%2BN1WUHVkPYVuUL4Sg&X-Amz-Signature=416ca97f3e97e749327f459f3ef79ba099ea9962761b8bc22075bbe0effbab34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


数字及字母只需将上一个字符的十进制ASCII码加一


## 类型转换


### 自动类型转换


‍


### 强制类型转换


强制类型转换的一般形式如下：


```c
（类型名） （表达式）
```


```c
int i = 10;
float f;
f = (float)i;// 强制转换int为float类型
```


‍


## 不同位数设备数据类型字节数


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGFHNTW%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCti23cXSKWUEHEWr6iU53nJaBHtXBASFJnLqPFCvJSWgIhAMCMZVfokunaaNns%2F0RingCSmVHFaJ%2FYVTO10vcSvZG2Kv8DCBUQABoMNjM3NDIzMTgzODA1Igwxgnvgmi4MahSHs68q3AM63f38mXtmWdZgWr5O%2FSNhV6U1uU9%2BboFHMtBchgFI2X9FMn9uOSKMkGlHW3lTDRMOysnOd7l78nAFI0eCvUimVdNWpKoamVcSR8hy%2FT2iDsbCtkj59yZ79k6Q3IZxyYyDUesejRDMyX%2BmaXNunwMTPxOGaYs7AET1jVmC8gvLxVtJVBmhOO%2BBF2zB9iTEUL6TwaEpFg3a9kayNXYQqyNKN29%2BZF8Rv8MaXzDXaHsMG6HVioCVx2dOTSixfeC5mOBTK8OsTkiJQnqEOeAqZrLVB5SDsX0D%2BcPqPx6soyWF%2BCsLBEim1vQZbawTRlu1zClLccqmgLqUH%2FxKltNLlyXXqJp6icgt0l6yy7XTbYYpHAFNekIjYjTBhRKXmxCK4qElpAzv6vv01qWBe97RKEGIM9TH2dQ9p%2FlZy7z0uswGg7XLkJ6m8vGZYfGUNtempQMftnzv%2BXGy62iLJhUHqETDvkgLHvwvs5cofa5bQHYnCsuRXAAa9KjQgc%2BD82IWxUyTuJZ1D7U%2FGCoahX4YqyeVhozF5KmedcYxsRBGZ5c5CEuhFH8irM%2B2fpBM%2BedtpUA0%2Fdyjhm%2BUCFESOUrABjRsqitSHtvsR8aEa22ENvnGC29gSgqamIOecjBabTDGnJzLBjqkAfZY5m%2BquHyLsY1tACxOeKENy5SzpsnT1CFIjfbKuuCs2cQvkxQx%2BEx%2BVZUBUtyWfBS5tMT9SQboSnf1RzJUeE%2BIig%2By0tiG4lepq2YbYPKY%2BaeHZ4t%2BVqHpUv3NO4j4bscKrzzRDfrEmJUFCi7BFzd0kVLGlD8Tdafu5aLyFiG4i3vCyD61TXKd0bXzoRv9a1XFkCgVieI%2BN1WUHVkPYVuUL4Sg&X-Amz-Signature=82928d40c14692b6a27eda845ebb5e0382bc26b8d1d69a88d0650af4aa84bc7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 数组

# 数组


## 定义数组


定义格式


```c
int 数组名[数组大小];
```


ps：int 可以换成其他数据类型


## 初始化数组


格式


```c
int 数组名[数组大小]={数1,数2,数三,...}
```


ps：int 可以换成其他数据类型


花括号中的数不能大于中括号中定义的数组大小


## 数组调用


数组通过下标调用


格式


```c
数组名[下标]
```


## 注意


数组也可以用字符串赋值（字符串本质是字符数组）


```c
char arr[]=＂字符串...＂;
```


## 格式控制符%d

# 格式控制符%d


## printf格式控制符


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4FENLVY%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICguh5H71upxwA3L8osmrDTxLvyT%2BX2BDwU90rniV2S9AiAojf9KR%2BE8d6NVbxz6O0W2dNgJei%2BDFEBuvLOavggyByr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIM9kgPS9bXLooWLVfcKtwDJh87XD8HakTvbeBWLrVVdDZaFmVci3QoAuFNa87x23Dw4GOmBybF0765%2BeY5o4TIJ6ZfcPXWzskmXDbE8khmcaB%2Bh6OMzmN2UzRCQhEDo0%2F7%2F7pPN%2FsRaWvsf9FiTTEcViRtA8f%2BYK9mMh1jb%2FQ94T0%2BSCZEdOauCJYOrblDK5NFIBqLXPfjhwkq1Gj8CEXFsmZQfAjUMrVXb8NyURn3N7cd5OGMCVLhd8tTVJBCTN9eZErbjElCXqONHt4hS1YmHrnT3oe3VQ8X0cfmdJignzjXUZq2K1MfItGDXY6Vp3KbVKhmA4bfvI0jef2G%2FKuh9KN5esMju4YIOJYCHIVaGs2uWtW0G1bXGLmNobi4a%2B99bHAA1zLycxKO2mqkskr0KL%2FVJxefiXd3mfBbmdCCoVp6ApXS0PgNiq9MaIVsDOEQ%2FtQHDkOkWL6tV58kxw%2Fne4m%2BHQXtAdWKU4c9Kl3HIkWRAk7CfqYHbgDeEalq%2FY6jVcdCZFNvYf8n%2B5w0u925BgPxonpk7tUAAK%2FQgHpICfEY2JcndnyaL%2FoLuCKEiqwAJqLozRhJi%2FgvfIOHSu9LKYMNOmTH3yiwNdLG2t3YIgT3JO9mEx1%2Fx5vRYXwW4K%2F%2F2GDl9dB7ZqgP%2BzYws5ycywY6pgFVdjOGWyyV0sHhN%2BQKpi2kzGX2RsDFGGE2%2F0hBEuNlFrHUSVYSonPLla4x7gax6vzS5hPCOC%2FRq9F0uecFto8ACRB%2FzeLS%2ByMqSxvcjXV7cw0Z9jl7ghRfbNVlEvBo5OkgkUjm%2BZioblYVaXBS%2ByvSftdLUh77mnd%2BhzbW1etiuu0CvxG2eCJuvF%2F3Sahxic7B%2B%2FGEIEMUvwH8MkMXuw5EK3IAT769&X-Amz-Signature=a55501a983a9d0601fbb881b64a0d9465c0b127144b6e1b9d8a46cf846b5f48a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4FENLVY%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICguh5H71upxwA3L8osmrDTxLvyT%2BX2BDwU90rniV2S9AiAojf9KR%2BE8d6NVbxz6O0W2dNgJei%2BDFEBuvLOavggyByr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIM9kgPS9bXLooWLVfcKtwDJh87XD8HakTvbeBWLrVVdDZaFmVci3QoAuFNa87x23Dw4GOmBybF0765%2BeY5o4TIJ6ZfcPXWzskmXDbE8khmcaB%2Bh6OMzmN2UzRCQhEDo0%2F7%2F7pPN%2FsRaWvsf9FiTTEcViRtA8f%2BYK9mMh1jb%2FQ94T0%2BSCZEdOauCJYOrblDK5NFIBqLXPfjhwkq1Gj8CEXFsmZQfAjUMrVXb8NyURn3N7cd5OGMCVLhd8tTVJBCTN9eZErbjElCXqONHt4hS1YmHrnT3oe3VQ8X0cfmdJignzjXUZq2K1MfItGDXY6Vp3KbVKhmA4bfvI0jef2G%2FKuh9KN5esMju4YIOJYCHIVaGs2uWtW0G1bXGLmNobi4a%2B99bHAA1zLycxKO2mqkskr0KL%2FVJxefiXd3mfBbmdCCoVp6ApXS0PgNiq9MaIVsDOEQ%2FtQHDkOkWL6tV58kxw%2Fne4m%2BHQXtAdWKU4c9Kl3HIkWRAk7CfqYHbgDeEalq%2FY6jVcdCZFNvYf8n%2B5w0u925BgPxonpk7tUAAK%2FQgHpICfEY2JcndnyaL%2FoLuCKEiqwAJqLozRhJi%2FgvfIOHSu9LKYMNOmTH3yiwNdLG2t3YIgT3JO9mEx1%2Fx5vRYXwW4K%2F%2F2GDl9dB7ZqgP%2BzYws5ycywY6pgFVdjOGWyyV0sHhN%2BQKpi2kzGX2RsDFGGE2%2F0hBEuNlFrHUSVYSonPLla4x7gax6vzS5hPCOC%2FRq9F0uecFto8ACRB%2FzeLS%2ByMqSxvcjXV7cw0Z9jl7ghRfbNVlEvBo5OkgkUjm%2BZioblYVaXBS%2ByvSftdLUh77mnd%2BhzbW1etiuu0CvxG2eCJuvF%2F3Sahxic7B%2B%2FGEIEMUvwH8MkMXuw5EK3IAT769&X-Amz-Signature=6ae84374247add74d1ad17f7dfd0139fabad83a9c1d0b919c0f5fe910361d6bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4FENLVY%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICguh5H71upxwA3L8osmrDTxLvyT%2BX2BDwU90rniV2S9AiAojf9KR%2BE8d6NVbxz6O0W2dNgJei%2BDFEBuvLOavggyByr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIM9kgPS9bXLooWLVfcKtwDJh87XD8HakTvbeBWLrVVdDZaFmVci3QoAuFNa87x23Dw4GOmBybF0765%2BeY5o4TIJ6ZfcPXWzskmXDbE8khmcaB%2Bh6OMzmN2UzRCQhEDo0%2F7%2F7pPN%2FsRaWvsf9FiTTEcViRtA8f%2BYK9mMh1jb%2FQ94T0%2BSCZEdOauCJYOrblDK5NFIBqLXPfjhwkq1Gj8CEXFsmZQfAjUMrVXb8NyURn3N7cd5OGMCVLhd8tTVJBCTN9eZErbjElCXqONHt4hS1YmHrnT3oe3VQ8X0cfmdJignzjXUZq2K1MfItGDXY6Vp3KbVKhmA4bfvI0jef2G%2FKuh9KN5esMju4YIOJYCHIVaGs2uWtW0G1bXGLmNobi4a%2B99bHAA1zLycxKO2mqkskr0KL%2FVJxefiXd3mfBbmdCCoVp6ApXS0PgNiq9MaIVsDOEQ%2FtQHDkOkWL6tV58kxw%2Fne4m%2BHQXtAdWKU4c9Kl3HIkWRAk7CfqYHbgDeEalq%2FY6jVcdCZFNvYf8n%2B5w0u925BgPxonpk7tUAAK%2FQgHpICfEY2JcndnyaL%2FoLuCKEiqwAJqLozRhJi%2FgvfIOHSu9LKYMNOmTH3yiwNdLG2t3YIgT3JO9mEx1%2Fx5vRYXwW4K%2F%2F2GDl9dB7ZqgP%2BzYws5ycywY6pgFVdjOGWyyV0sHhN%2BQKpi2kzGX2RsDFGGE2%2F0hBEuNlFrHUSVYSonPLla4x7gax6vzS5hPCOC%2FRq9F0uecFto8ACRB%2FzeLS%2ByMqSxvcjXV7cw0Z9jl7ghRfbNVlEvBo5OkgkUjm%2BZioblYVaXBS%2ByvSftdLUh77mnd%2BhzbW1etiuu0CvxG2eCJuvF%2F3Sahxic7B%2B%2FGEIEMUvwH8MkMXuw5EK3IAT769&X-Amz-Signature=5d69392a3b319cce222b098b671735187971a96c7bd4c7050fce5ffe00ba8fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4FENLVY%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICguh5H71upxwA3L8osmrDTxLvyT%2BX2BDwU90rniV2S9AiAojf9KR%2BE8d6NVbxz6O0W2dNgJei%2BDFEBuvLOavggyByr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIM9kgPS9bXLooWLVfcKtwDJh87XD8HakTvbeBWLrVVdDZaFmVci3QoAuFNa87x23Dw4GOmBybF0765%2BeY5o4TIJ6ZfcPXWzskmXDbE8khmcaB%2Bh6OMzmN2UzRCQhEDo0%2F7%2F7pPN%2FsRaWvsf9FiTTEcViRtA8f%2BYK9mMh1jb%2FQ94T0%2BSCZEdOauCJYOrblDK5NFIBqLXPfjhwkq1Gj8CEXFsmZQfAjUMrVXb8NyURn3N7cd5OGMCVLhd8tTVJBCTN9eZErbjElCXqONHt4hS1YmHrnT3oe3VQ8X0cfmdJignzjXUZq2K1MfItGDXY6Vp3KbVKhmA4bfvI0jef2G%2FKuh9KN5esMju4YIOJYCHIVaGs2uWtW0G1bXGLmNobi4a%2B99bHAA1zLycxKO2mqkskr0KL%2FVJxefiXd3mfBbmdCCoVp6ApXS0PgNiq9MaIVsDOEQ%2FtQHDkOkWL6tV58kxw%2Fne4m%2BHQXtAdWKU4c9Kl3HIkWRAk7CfqYHbgDeEalq%2FY6jVcdCZFNvYf8n%2B5w0u925BgPxonpk7tUAAK%2FQgHpICfEY2JcndnyaL%2FoLuCKEiqwAJqLozRhJi%2FgvfIOHSu9LKYMNOmTH3yiwNdLG2t3YIgT3JO9mEx1%2Fx5vRYXwW4K%2F%2F2GDl9dB7ZqgP%2BzYws5ycywY6pgFVdjOGWyyV0sHhN%2BQKpi2kzGX2RsDFGGE2%2F0hBEuNlFrHUSVYSonPLla4x7gax6vzS5hPCOC%2FRq9F0uecFto8ACRB%2FzeLS%2ByMqSxvcjXV7cw0Z9jl7ghRfbNVlEvBo5OkgkUjm%2BZioblYVaXBS%2ByvSftdLUh77mnd%2BhzbW1etiuu0CvxG2eCJuvF%2F3Sahxic7B%2B%2FGEIEMUvwH8MkMXuw5EK3IAT769&X-Amz-Signature=46e6bbfeeaf61f25a33d79cbb278d9b7294390279df9a6a22d946caca714c0e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4FENLVY%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICguh5H71upxwA3L8osmrDTxLvyT%2BX2BDwU90rniV2S9AiAojf9KR%2BE8d6NVbxz6O0W2dNgJei%2BDFEBuvLOavggyByr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIM9kgPS9bXLooWLVfcKtwDJh87XD8HakTvbeBWLrVVdDZaFmVci3QoAuFNa87x23Dw4GOmBybF0765%2BeY5o4TIJ6ZfcPXWzskmXDbE8khmcaB%2Bh6OMzmN2UzRCQhEDo0%2F7%2F7pPN%2FsRaWvsf9FiTTEcViRtA8f%2BYK9mMh1jb%2FQ94T0%2BSCZEdOauCJYOrblDK5NFIBqLXPfjhwkq1Gj8CEXFsmZQfAjUMrVXb8NyURn3N7cd5OGMCVLhd8tTVJBCTN9eZErbjElCXqONHt4hS1YmHrnT3oe3VQ8X0cfmdJignzjXUZq2K1MfItGDXY6Vp3KbVKhmA4bfvI0jef2G%2FKuh9KN5esMju4YIOJYCHIVaGs2uWtW0G1bXGLmNobi4a%2B99bHAA1zLycxKO2mqkskr0KL%2FVJxefiXd3mfBbmdCCoVp6ApXS0PgNiq9MaIVsDOEQ%2FtQHDkOkWL6tV58kxw%2Fne4m%2BHQXtAdWKU4c9Kl3HIkWRAk7CfqYHbgDeEalq%2FY6jVcdCZFNvYf8n%2B5w0u925BgPxonpk7tUAAK%2FQgHpICfEY2JcndnyaL%2FoLuCKEiqwAJqLozRhJi%2FgvfIOHSu9LKYMNOmTH3yiwNdLG2t3YIgT3JO9mEx1%2Fx5vRYXwW4K%2F%2F2GDl9dB7ZqgP%2BzYws5ycywY6pgFVdjOGWyyV0sHhN%2BQKpi2kzGX2RsDFGGE2%2F0hBEuNlFrHUSVYSonPLla4x7gax6vzS5hPCOC%2FRq9F0uecFto8ACRB%2FzeLS%2ByMqSxvcjXV7cw0Z9jl7ghRfbNVlEvBo5OkgkUjm%2BZioblYVaXBS%2ByvSftdLUh77mnd%2BhzbW1etiuu0CvxG2eCJuvF%2F3Sahxic7B%2B%2FGEIEMUvwH8MkMXuw5EK3IAT769&X-Amz-Signature=6b63aa0b72a1caa8bb154f1068daf774048dfedc07eb919cdae502feed9f8981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR5RQLDB%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDV7x8cmtfObZOPaowOpKcHKDfLGi%2FlNNRlMXU1PoTCpwIgJThdLSmthGX0bLszDRjQXeqyoEQzvUICxBNw8jRn8Fsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDI6eLizp9el7c%2BsBBCrcAzeRkDI2Dg78%2BqcZHYzQXQB%2BQEIWzXLAFo81CB3E1O31mv5iEsxFq8RiDghfNv%2FOhI7TiAZ9NoTBnUVVDn8YLPvDYp4ur%2B4Nh0qz6%2Fvs6SdAdhJS%2FN8lYAzWw0M0y87mNHg01WqAr03svADi0VBCGB76NJ9I52EuipNBrndHn%2FSynB5dul9%2BQ2QWI30GQ7ALTgivue7M1XncTuDOfGA6876kDTHs8uBDLDZJOsclGjO48l4aU8lczBxKL8J1gAAoxCh0wIG%2Bx%2FIdY%2F8kaconuNNsi2u%2Fh6O2tstOAn0JxAIxdINroTdwQSfObnLvt3dq%2F3Urg6lnpz8RhLuhODfvv8jnaVY9UY2PNd2EePtxbHiMtyWWVXm3wUfeV4%2BpJRjGxJkpKDcLTVsQvX7CaIk8Mt%2FuaSCdZP%2BSozhdH5FN30%2Fj4WcwxHJETrl0TD4S%2Fw9aYj5WyNJIBbuqmyu3hnjrgXfCLC2ezkbilSodoxk0CqOhq7FgCiNxjuEq7hTJ7GdTwEiIBgQxr9xlBk%2F67oX%2BJ4f4rDYIhI47ti5cn9bVAyrS%2FIuITPEPn8ZzfmfR4IN01jFURRVIKA9RiC5%2BElwCjpv5WGcXXLHKOK9BMBNkGry1%2FBYbL4joFlvUy3O3MIGcnMsGOqUBMfKG8b5qHH%2Bu3zAJnUse37M55s492eHEaZlU9Kp%2FBczR8ONXyjwRC%2BI3ZG78pcPJGk%2BjyQIPKQrfyMWA7l3aDE%2B2TTvN6JrxggLWuik%2BEyHoYfqrO1C5OvlZiYZbiAL5kcTFwycRNKH5GMYImet4LLwouDANzfX%2BpzIYypwOoZBC3jPKb2k45yalRsdi%2Bpte5aDkYKgOp3MBLWk7phbg6uVJEyVI&X-Amz-Signature=d52f1dcedc098ec9eb9f559244d8ee9c0b5489502f19fee5e3aac11f88dfd0bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR5RQLDB%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDV7x8cmtfObZOPaowOpKcHKDfLGi%2FlNNRlMXU1PoTCpwIgJThdLSmthGX0bLszDRjQXeqyoEQzvUICxBNw8jRn8Fsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDI6eLizp9el7c%2BsBBCrcAzeRkDI2Dg78%2BqcZHYzQXQB%2BQEIWzXLAFo81CB3E1O31mv5iEsxFq8RiDghfNv%2FOhI7TiAZ9NoTBnUVVDn8YLPvDYp4ur%2B4Nh0qz6%2Fvs6SdAdhJS%2FN8lYAzWw0M0y87mNHg01WqAr03svADi0VBCGB76NJ9I52EuipNBrndHn%2FSynB5dul9%2BQ2QWI30GQ7ALTgivue7M1XncTuDOfGA6876kDTHs8uBDLDZJOsclGjO48l4aU8lczBxKL8J1gAAoxCh0wIG%2Bx%2FIdY%2F8kaconuNNsi2u%2Fh6O2tstOAn0JxAIxdINroTdwQSfObnLvt3dq%2F3Urg6lnpz8RhLuhODfvv8jnaVY9UY2PNd2EePtxbHiMtyWWVXm3wUfeV4%2BpJRjGxJkpKDcLTVsQvX7CaIk8Mt%2FuaSCdZP%2BSozhdH5FN30%2Fj4WcwxHJETrl0TD4S%2Fw9aYj5WyNJIBbuqmyu3hnjrgXfCLC2ezkbilSodoxk0CqOhq7FgCiNxjuEq7hTJ7GdTwEiIBgQxr9xlBk%2F67oX%2BJ4f4rDYIhI47ti5cn9bVAyrS%2FIuITPEPn8ZzfmfR4IN01jFURRVIKA9RiC5%2BElwCjpv5WGcXXLHKOK9BMBNkGry1%2FBYbL4joFlvUy3O3MIGcnMsGOqUBMfKG8b5qHH%2Bu3zAJnUse37M55s492eHEaZlU9Kp%2FBczR8ONXyjwRC%2BI3ZG78pcPJGk%2BjyQIPKQrfyMWA7l3aDE%2B2TTvN6JrxggLWuik%2BEyHoYfqrO1C5OvlZiYZbiAL5kcTFwycRNKH5GMYImet4LLwouDANzfX%2BpzIYypwOoZBC3jPKb2k45yalRsdi%2Bpte5aDkYKgOp3MBLWk7phbg6uVJEyVI&X-Amz-Signature=a44aa579d93c9842d67a13781b9f8fbea5b779b11aadc9a6b891961516b2f619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


20250407211430127-1


```c
struct 结构体名
{
  int 成员名1；//成员1
  float 成员名2；//成员2
  数据类型 成员名3；//成员3
.....
};
```


## 在定义


定义结构体变量（定义结构体变量名）


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR5RQLDB%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDV7x8cmtfObZOPaowOpKcHKDfLGi%2FlNNRlMXU1PoTCpwIgJThdLSmthGX0bLszDRjQXeqyoEQzvUICxBNw8jRn8Fsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDI6eLizp9el7c%2BsBBCrcAzeRkDI2Dg78%2BqcZHYzQXQB%2BQEIWzXLAFo81CB3E1O31mv5iEsxFq8RiDghfNv%2FOhI7TiAZ9NoTBnUVVDn8YLPvDYp4ur%2B4Nh0qz6%2Fvs6SdAdhJS%2FN8lYAzWw0M0y87mNHg01WqAr03svADi0VBCGB76NJ9I52EuipNBrndHn%2FSynB5dul9%2BQ2QWI30GQ7ALTgivue7M1XncTuDOfGA6876kDTHs8uBDLDZJOsclGjO48l4aU8lczBxKL8J1gAAoxCh0wIG%2Bx%2FIdY%2F8kaconuNNsi2u%2Fh6O2tstOAn0JxAIxdINroTdwQSfObnLvt3dq%2F3Urg6lnpz8RhLuhODfvv8jnaVY9UY2PNd2EePtxbHiMtyWWVXm3wUfeV4%2BpJRjGxJkpKDcLTVsQvX7CaIk8Mt%2FuaSCdZP%2BSozhdH5FN30%2Fj4WcwxHJETrl0TD4S%2Fw9aYj5WyNJIBbuqmyu3hnjrgXfCLC2ezkbilSodoxk0CqOhq7FgCiNxjuEq7hTJ7GdTwEiIBgQxr9xlBk%2F67oX%2BJ4f4rDYIhI47ti5cn9bVAyrS%2FIuITPEPn8ZzfmfR4IN01jFURRVIKA9RiC5%2BElwCjpv5WGcXXLHKOK9BMBNkGry1%2FBYbL4joFlvUy3O3MIGcnMsGOqUBMfKG8b5qHH%2Bu3zAJnUse37M55s492eHEaZlU9Kp%2FBczR8ONXyjwRC%2BI3ZG78pcPJGk%2BjyQIPKQrfyMWA7l3aDE%2B2TTvN6JrxggLWuik%2BEyHoYfqrO1C5OvlZiYZbiAL5kcTFwycRNKH5GMYImet4LLwouDANzfX%2BpzIYypwOoZBC3jPKb2k45yalRsdi%2Bpte5aDkYKgOp3MBLWk7phbg6uVJEyVI&X-Amz-Signature=1baac54e64b286ade29f27a251b448b860407f2d58230a1cb566f1e4f4a16966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


20250407212847555


```c
struct 结构体名 结构体变量名;
```


## 输入值


为结构体变量输入值


```c
结构体变量名={值1,值2,值3};
```


也可以直接初始化结构体变量


```c
struct 结构体名 结构体变量名={值1,值2,.值3}
```


## 访问


访问结构体成员


使用点操作符 . 来访问结构体的成员


如：


```c
printf("%d%d%d",结构体变量名.成员名);
```


‍


## 转义字符\n

# 转义字符


‍


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D4KJFGY%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCe8sXGwl1GOpcGTjt7JWY2m7Yw%2FEIQ8OiyyEW64rinFwIgUGS0PGs0j5u0ph%2FiwcMj9XJJVBM3FVz6SVJgCwFNf6cq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDLivJDQ4ULBC98m33CrcA%2BbCe9qnOOLQXOMqRmWru5NVUq4a3COXYz0WnerMWkJnnAjRhA1muCMfgQ%2Bi%2Bju3r%2BbbjjgGNCbECofXq1GubvuYVbvwylMnf3Gm49BY%2B0WIsrvxXgzlJeCgVtdkdJoLhxoCku2FsjHFVh94KvgVFsext9pPcvN6ieala4OAnRKkAlQVQ5w8KXke8wRzYZ2wd2V%2Fmix8frg5WpCUGVM29scjqN9RvJffu5IGtICmTDb2UskdhrJ32%2F0Y8iVbcBjpzIiiZUNA3vcpfczuqNbHeQmwrABU4CscO6X37h05UK%2BYdYv5%2Bdizf3ZUFXL2Ac6mNNUp2X2gW9Pl4VYBPPXZYk8tx%2BO5OREErMiVsEvschNmBR%2BXVYRMY8VYfLiIdy%2FPHhrRc7XIhfAMMotgc4xa%2FCu%2FfFvNlHAi%2Fgc4iVp3jVyzeQk5EDqeyfZxjJuxlgGuqc58En8r%2BXztnHzQfKEE4UywzJw%2B6zCc1VqoUTuknHXsMdYbIiI0EixME9FKLO7YVxajC48maOJNoamEs9x4eXDBwpYmXD9krIuGDxMVdnRZtnPRpBNifyfi7e2c53oHEc%2FRiTz02qHMEpFEmRV6zGzwGNA25BlDkMarP6JI2OcFUVIfWuS2GrVKmd3kMKCcnMsGOqUBp%2FPEH8lrtJs80V%2FD0%2BEWyjtcCthaei7g6hPUVAg2neboGd07YqdXA5iFAylX3NGHfMrU%2BMs5%2B3Hwm1LuXvgMbEV5FgN%2Fz9UIhfYjR2h%2BwbMmyzDG4UwF3OwVRl7OlR7Dazzl3onJYZkXi%2B1VeqnG9TTabwocjy6S0gy2IHFh3%2F7ziledWDTk1i%2Fp%2FpG4qidfdwrj%2FjdFcu0aEhXaAdDtQxJkLjLE&X-Amz-Signature=2e7f75f62615d53aa1241dbf1de68d1ca324e00c88b49de209a53e9a6001c043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D4KJFGY%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCe8sXGwl1GOpcGTjt7JWY2m7Yw%2FEIQ8OiyyEW64rinFwIgUGS0PGs0j5u0ph%2FiwcMj9XJJVBM3FVz6SVJgCwFNf6cq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDLivJDQ4ULBC98m33CrcA%2BbCe9qnOOLQXOMqRmWru5NVUq4a3COXYz0WnerMWkJnnAjRhA1muCMfgQ%2Bi%2Bju3r%2BbbjjgGNCbECofXq1GubvuYVbvwylMnf3Gm49BY%2B0WIsrvxXgzlJeCgVtdkdJoLhxoCku2FsjHFVh94KvgVFsext9pPcvN6ieala4OAnRKkAlQVQ5w8KXke8wRzYZ2wd2V%2Fmix8frg5WpCUGVM29scjqN9RvJffu5IGtICmTDb2UskdhrJ32%2F0Y8iVbcBjpzIiiZUNA3vcpfczuqNbHeQmwrABU4CscO6X37h05UK%2BYdYv5%2Bdizf3ZUFXL2Ac6mNNUp2X2gW9Pl4VYBPPXZYk8tx%2BO5OREErMiVsEvschNmBR%2BXVYRMY8VYfLiIdy%2FPHhrRc7XIhfAMMotgc4xa%2FCu%2FfFvNlHAi%2Fgc4iVp3jVyzeQk5EDqeyfZxjJuxlgGuqc58En8r%2BXztnHzQfKEE4UywzJw%2B6zCc1VqoUTuknHXsMdYbIiI0EixME9FKLO7YVxajC48maOJNoamEs9x4eXDBwpYmXD9krIuGDxMVdnRZtnPRpBNifyfi7e2c53oHEc%2FRiTz02qHMEpFEmRV6zGzwGNA25BlDkMarP6JI2OcFUVIfWuS2GrVKmd3kMKCcnMsGOqUBp%2FPEH8lrtJs80V%2FD0%2BEWyjtcCthaei7g6hPUVAg2neboGd07YqdXA5iFAylX3NGHfMrU%2BMs5%2B3Hwm1LuXvgMbEV5FgN%2Fz9UIhfYjR2h%2BwbMmyzDG4UwF3OwVRl7OlR7Dazzl3onJYZkXi%2B1VeqnG9TTabwocjy6S0gy2IHFh3%2F7ziledWDTk1i%2Fp%2FpG4qidfdwrj%2FjdFcu0aEhXaAdDtQxJkLjLE&X-Amz-Signature=ba05e46ed724c5e2c70bd6df22586fc34b8f69e40c03ea3ebfd35982213d8e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVMJOFZB%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFTkUk8cGfOnMlpR29sqFqjIEZZ%2BoI%2F0caRAmvCEqavEAiEA5uHCVJ06JlAa2SAUHagZ1gz8QmZCQcY%2FRT4g%2Fr3CsL4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBM1qBE2EnCrcw8iFSrcAxctGBTlYCG0j91j5xHRsf4aguSe6QO%2B5FQOe1MMtWDqbu8nytYJrAZP9oTxY9ctjPjXhKVAYE0pXCAx17kGqdGk%2BiwaYQYtpenLfPX7TRwPU%2Fvpd1BGWy4YukfGhK1xSRNnrTjH0hbMbiUNWhyjnm7NsO9nh5vMtB5u%2FHK0rCo7Xy58U5lHfQaW6XsxSWkaYgUdz%2BubbcLVC02OK4nnNohhHR1j49thPNrx0BCQIKF1EW5SdzN7ziMLMWQCSXIaJykth83gWlSTzbfRzvyAaGp%2BIBoJR3wDNS3qPzJpF7JpiF4AOnFgLGvWmXQuw4y5qeOSYV2JTeGTrJmP6lgFuwDbk7E4CVDrpWA6XOkQZQy%2BLyW6zaYk4ycFekSDRHvJRZNLgbEBXQsFGMwnda9LH1v%2FOPYh2fPFCUiR8FrS7Q%2BFmSYPd6le4zSsuJ4VbjzWmlFPvdKJZT%2BawsETc10EE7UoLnC0Hn0WyE%2FvuALy9U1RO%2BJ6miVIUQOlJk7kk67vxzJ6vpLVPxyQUUGZlYs8Qqf3YKSH5hPuPicwPx20k52t7ZmeNJa26GbvvH%2BZ4mx8uN5MCoKW6dx8lKmFM0VSG5eE3RmlNISaJwgGKZXJQN1X512w9fjKp5vyDjlyMLCcnMsGOqUBOdfsqN39wzm9EWLnsHHlrai9AH8oPP8iVF8oEnnj7%2BGhvLlDtdycsiObAzjLVndKcCapXi7BqnKd%2BGGbn0UjH6AIKW9FK0%2BsYs1xcsGMtVPXi%2BhPrzx7yJ7xkh8Oyhnigx%2FQyf5ew216QYI0NixeELPyj%2BpbAmTOcmN3%2BgqV8LGcDmB6udx%2B0nJR9vCvjsdC2y8FGXfc2SVtPj8ao%2FOHhb8G7klq&X-Amz-Signature=c19dd2f99d162dacf306158224827cb6b10d918824f3c0b452408051917f8593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVMJOFZB%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFTkUk8cGfOnMlpR29sqFqjIEZZ%2BoI%2F0caRAmvCEqavEAiEA5uHCVJ06JlAa2SAUHagZ1gz8QmZCQcY%2FRT4g%2Fr3CsL4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBM1qBE2EnCrcw8iFSrcAxctGBTlYCG0j91j5xHRsf4aguSe6QO%2B5FQOe1MMtWDqbu8nytYJrAZP9oTxY9ctjPjXhKVAYE0pXCAx17kGqdGk%2BiwaYQYtpenLfPX7TRwPU%2Fvpd1BGWy4YukfGhK1xSRNnrTjH0hbMbiUNWhyjnm7NsO9nh5vMtB5u%2FHK0rCo7Xy58U5lHfQaW6XsxSWkaYgUdz%2BubbcLVC02OK4nnNohhHR1j49thPNrx0BCQIKF1EW5SdzN7ziMLMWQCSXIaJykth83gWlSTzbfRzvyAaGp%2BIBoJR3wDNS3qPzJpF7JpiF4AOnFgLGvWmXQuw4y5qeOSYV2JTeGTrJmP6lgFuwDbk7E4CVDrpWA6XOkQZQy%2BLyW6zaYk4ycFekSDRHvJRZNLgbEBXQsFGMwnda9LH1v%2FOPYh2fPFCUiR8FrS7Q%2BFmSYPd6le4zSsuJ4VbjzWmlFPvdKJZT%2BawsETc10EE7UoLnC0Hn0WyE%2FvuALy9U1RO%2BJ6miVIUQOlJk7kk67vxzJ6vpLVPxyQUUGZlYs8Qqf3YKSH5hPuPicwPx20k52t7ZmeNJa26GbvvH%2BZ4mx8uN5MCoKW6dx8lKmFM0VSG5eE3RmlNISaJwgGKZXJQN1X512w9fjKp5vyDjlyMLCcnMsGOqUBOdfsqN39wzm9EWLnsHHlrai9AH8oPP8iVF8oEnnj7%2BGhvLlDtdycsiObAzjLVndKcCapXi7BqnKd%2BGGbn0UjH6AIKW9FK0%2BsYs1xcsGMtVPXi%2BhPrzx7yJ7xkh8Oyhnigx%2FQyf5ew216QYI0NixeELPyj%2BpbAmTOcmN3%2BgqV8LGcDmB6udx%2B0nJR9vCvjsdC2y8FGXfc2SVtPj8ao%2FOHhb8G7klq&X-Amz-Signature=9cf9c52d42415b86fc8f990073b81dd1d590bda166c59b523452ac5939aca1e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVMJOFZB%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFTkUk8cGfOnMlpR29sqFqjIEZZ%2BoI%2F0caRAmvCEqavEAiEA5uHCVJ06JlAa2SAUHagZ1gz8QmZCQcY%2FRT4g%2Fr3CsL4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBM1qBE2EnCrcw8iFSrcAxctGBTlYCG0j91j5xHRsf4aguSe6QO%2B5FQOe1MMtWDqbu8nytYJrAZP9oTxY9ctjPjXhKVAYE0pXCAx17kGqdGk%2BiwaYQYtpenLfPX7TRwPU%2Fvpd1BGWy4YukfGhK1xSRNnrTjH0hbMbiUNWhyjnm7NsO9nh5vMtB5u%2FHK0rCo7Xy58U5lHfQaW6XsxSWkaYgUdz%2BubbcLVC02OK4nnNohhHR1j49thPNrx0BCQIKF1EW5SdzN7ziMLMWQCSXIaJykth83gWlSTzbfRzvyAaGp%2BIBoJR3wDNS3qPzJpF7JpiF4AOnFgLGvWmXQuw4y5qeOSYV2JTeGTrJmP6lgFuwDbk7E4CVDrpWA6XOkQZQy%2BLyW6zaYk4ycFekSDRHvJRZNLgbEBXQsFGMwnda9LH1v%2FOPYh2fPFCUiR8FrS7Q%2BFmSYPd6le4zSsuJ4VbjzWmlFPvdKJZT%2BawsETc10EE7UoLnC0Hn0WyE%2FvuALy9U1RO%2BJ6miVIUQOlJk7kk67vxzJ6vpLVPxyQUUGZlYs8Qqf3YKSH5hPuPicwPx20k52t7ZmeNJa26GbvvH%2BZ4mx8uN5MCoKW6dx8lKmFM0VSG5eE3RmlNISaJwgGKZXJQN1X512w9fjKp5vyDjlyMLCcnMsGOqUBOdfsqN39wzm9EWLnsHHlrai9AH8oPP8iVF8oEnnj7%2BGhvLlDtdycsiObAzjLVndKcCapXi7BqnKd%2BGGbn0UjH6AIKW9FK0%2BsYs1xcsGMtVPXi%2BhPrzx7yJ7xkh8Oyhnigx%2FQyf5ew216QYI0NixeELPyj%2BpbAmTOcmN3%2BgqV8LGcDmB6udx%2B0nJR9vCvjsdC2y8FGXfc2SVtPj8ao%2FOHhb8G7klq&X-Amz-Signature=934abb158ec47f3fc17fe7adcddedf257748705fbebd93afefb2c494007a305a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVMJOFZB%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFTkUk8cGfOnMlpR29sqFqjIEZZ%2BoI%2F0caRAmvCEqavEAiEA5uHCVJ06JlAa2SAUHagZ1gz8QmZCQcY%2FRT4g%2Fr3CsL4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBM1qBE2EnCrcw8iFSrcAxctGBTlYCG0j91j5xHRsf4aguSe6QO%2B5FQOe1MMtWDqbu8nytYJrAZP9oTxY9ctjPjXhKVAYE0pXCAx17kGqdGk%2BiwaYQYtpenLfPX7TRwPU%2Fvpd1BGWy4YukfGhK1xSRNnrTjH0hbMbiUNWhyjnm7NsO9nh5vMtB5u%2FHK0rCo7Xy58U5lHfQaW6XsxSWkaYgUdz%2BubbcLVC02OK4nnNohhHR1j49thPNrx0BCQIKF1EW5SdzN7ziMLMWQCSXIaJykth83gWlSTzbfRzvyAaGp%2BIBoJR3wDNS3qPzJpF7JpiF4AOnFgLGvWmXQuw4y5qeOSYV2JTeGTrJmP6lgFuwDbk7E4CVDrpWA6XOkQZQy%2BLyW6zaYk4ycFekSDRHvJRZNLgbEBXQsFGMwnda9LH1v%2FOPYh2fPFCUiR8FrS7Q%2BFmSYPd6le4zSsuJ4VbjzWmlFPvdKJZT%2BawsETc10EE7UoLnC0Hn0WyE%2FvuALy9U1RO%2BJ6miVIUQOlJk7kk67vxzJ6vpLVPxyQUUGZlYs8Qqf3YKSH5hPuPicwPx20k52t7ZmeNJa26GbvvH%2BZ4mx8uN5MCoKW6dx8lKmFM0VSG5eE3RmlNISaJwgGKZXJQN1X512w9fjKp5vyDjlyMLCcnMsGOqUBOdfsqN39wzm9EWLnsHHlrai9AH8oPP8iVF8oEnnj7%2BGhvLlDtdycsiObAzjLVndKcCapXi7BqnKd%2BGGbn0UjH6AIKW9FK0%2BsYs1xcsGMtVPXi%2BhPrzx7yJ7xkh8Oyhnigx%2FQyf5ew216QYI0NixeELPyj%2BpbAmTOcmN3%2BgqV8LGcDmB6udx%2B0nJR9vCvjsdC2y8FGXfc2SVtPj8ao%2FOHhb8G7klq&X-Amz-Signature=e38574a509ee2adcb9cddc8808c5341a6e466264393dfd76e57386838d9923a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVMJOFZB%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFTkUk8cGfOnMlpR29sqFqjIEZZ%2BoI%2F0caRAmvCEqavEAiEA5uHCVJ06JlAa2SAUHagZ1gz8QmZCQcY%2FRT4g%2Fr3CsL4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBM1qBE2EnCrcw8iFSrcAxctGBTlYCG0j91j5xHRsf4aguSe6QO%2B5FQOe1MMtWDqbu8nytYJrAZP9oTxY9ctjPjXhKVAYE0pXCAx17kGqdGk%2BiwaYQYtpenLfPX7TRwPU%2Fvpd1BGWy4YukfGhK1xSRNnrTjH0hbMbiUNWhyjnm7NsO9nh5vMtB5u%2FHK0rCo7Xy58U5lHfQaW6XsxSWkaYgUdz%2BubbcLVC02OK4nnNohhHR1j49thPNrx0BCQIKF1EW5SdzN7ziMLMWQCSXIaJykth83gWlSTzbfRzvyAaGp%2BIBoJR3wDNS3qPzJpF7JpiF4AOnFgLGvWmXQuw4y5qeOSYV2JTeGTrJmP6lgFuwDbk7E4CVDrpWA6XOkQZQy%2BLyW6zaYk4ycFekSDRHvJRZNLgbEBXQsFGMwnda9LH1v%2FOPYh2fPFCUiR8FrS7Q%2BFmSYPd6le4zSsuJ4VbjzWmlFPvdKJZT%2BawsETc10EE7UoLnC0Hn0WyE%2FvuALy9U1RO%2BJ6miVIUQOlJk7kk67vxzJ6vpLVPxyQUUGZlYs8Qqf3YKSH5hPuPicwPx20k52t7ZmeNJa26GbvvH%2BZ4mx8uN5MCoKW6dx8lKmFM0VSG5eE3RmlNISaJwgGKZXJQN1X512w9fjKp5vyDjlyMLCcnMsGOqUBOdfsqN39wzm9EWLnsHHlrai9AH8oPP8iVF8oEnnj7%2BGhvLlDtdycsiObAzjLVndKcCapXi7BqnKd%2BGGbn0UjH6AIKW9FK0%2BsYs1xcsGMtVPXi%2BhPrzx7yJ7xkh8Oyhnigx%2FQyf5ew216QYI0NixeELPyj%2BpbAmTOcmN3%2BgqV8LGcDmB6udx%2B0nJR9vCvjsdC2y8FGXfc2SVtPj8ao%2FOHhb8G7klq&X-Amz-Signature=8e73afec8017966216af6cb49ca01a0cfa189466e9f9870f2e519873e6ed9ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_171809


**说明**：


**同一优先级的运算符，运算次序由结合方向所决定。**


**简单记就是：括号＞！ > 算术运算符（加减乘除） > 关系运算符（两两比较） > &&（与） > ||（或） > 赋值运算符**


‍


**注意⚠️**


<u>**c语言中函数参数默认是从右向左计算的**</u>


如：


```c
int a=1
printf("%d %d",a,a++);
```


运行结果是：


```c
2 1
```


**先计算参数a++再计算参数a**


# 计算顺序汇总

1. **c语言在大多数编译器中函数参数从右向左计算**（但不是绝对，因为C语言标准未定义函数参数的计算方向，这取决于所使用的编译器）
2. c语言中表达式的运算顺序由优先级和结合性决定。**1.先按运算符优先级运算。2.如果相邻若干个运算符优先级相同，则按结合方向来运算。**

‍


# 错误总结

1. **警告⚠️如果想实现：a=b=c 或 a<b<c 这种连等**

    ```c
    不能这样写表达式！！！
    ```


```c
表达式：a<b<c
```


### **错误原因**


<u>**C语言不支持数学中的链式比较！！！**</u>


### 正确写法↓


```c
表达式：(a<b)&&(b<c)
```


必须将区间判断拆分为两个独立的条件，并用逻辑**与**（`&&`）连接：


‍


## 运算符详细

# 运算符详细


注：本页代码块中均为表达式


# 生僻的


### 按位左移


<<(按位左移)：左移几位就在左边去掉几个并在右边加几个0


```c
表达式：123456789<<2//按位左移两位
运算后为：345678900
```


### 按位右移


>>:与按位左移相反


### 与（两个数与）


与：两个都真结果为真


```c
表达式：1 && 0
运算后：0
```


### 按位与（多个数与）


按位与：前后两个字符串的每一位进行与运算


```c
表达式：111000 & 051000
运算后为：011000
```


### 或（两个数或）


或：有一个真就为真


```c
表达式：0||1
运算后：1
```


### 按位或 |


和按位与同理


### 按位异或^


异或：两数一样就是真，不一样就是假


按位异或：前后两个字符串每位进行异或运算


```c
表达式：1234^1230
运算后：1110
```


### 按位取反~


取反是逻辑取反


```c
表达式：~12110
运算后：00001
```


# 一般的


### 赋值运算符


```c
表达式：a=1
```


运算方向：右→左


注意⚠️：这样的表达式无效（等号左侧必须是变量名）


```c
错误的表达式：12=a
             或
           96=85
```


‍


### 逗号运算符


规则：从左到右计算各个表达式，最后一个表达式为整个表达式的结果


```c
表达式：
c=((a=2),(a++),(b=3),(a+b+5))
```


‍


### 自增运算符


‍


### 取地址运算符&


## 指针

## 声明


```c
数据类型*指针变量名;
```


ps：指针变量在内存中的全部空间存的都是别的变量的内存地址（指针是一个地址容器）


## 赋值


赋值为变量地址


```c
指针变量名=&变量名
```


ps：&是取地址符


不能将变量直接赋给指针变量（要先取地址再赋值）


## 初始化


```c
数据类型*指针变量名=&变量名
```


或初始化为空指针


## 调用


调用指针要带*号，


但要调用/修改指针所存的的地址则不带*号


```c
printf("%d",p);
```


其中p是指针变量


~~**指针的使用**~~~~看这个~~[给指针赋带取地址符（&）的表达式，就是修改指针存储的地址（相当于写入模式）](https://www.notion.so/2245a2dd82768015ab92c5491d573407#2245a2dd8276808c84d2efed69f657b3) 


[给指针直接赋值，就是修改指针指向元素的值（相当于只读模式）](https://www.notion.so/2245a2dd82768015ab92c5491d573407#2245a2dd827680ce883fc6c3393ee93f) 


**最新版，最精简版：**


[总结的总结](https://www.notion.so/2245a2dd82768015ab92c5491d573407#2785a2dd827680c3bd83f9440595cac7) 


## 二维数组

## 声明


```c
类型名 数组名 [行大小][列大小];
```


## 引用


```c
数组名 [行下标][列下标];
```


## 初始化


```c
int a [3][3]={1,2,3,4,5,6,7,8,9};
```


将所有数组所有元素排列到一行初始化


## 文件

FILE*是c语言的又一种数据类型


（文件指针型）（常见的有整形，浮点型…）


<u>**注意⚠️：由于文件的类型是“文件指针型”所以使用文件句柄时无需带***</u>


<u>**注意⚠️：虽然文件文件以指针定义，但文件的指针叫句柄，文件内的位置叫文件指针**</u>


## 文件的声明（c语言中所有东西都是先声明后使用）


c语言用指针指向文件以声明文件：（定义一个文件指针类型的指针）


```c
FILE *p;//类型名*指针名
```


其中FILE*是数据类型，p是指向文件的指针名


## 文件的操作1


**将文件的操作函数赋值给相应指针，**即可实现文件的操作


以下是文件的操作函数


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HYPVYLK%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T041754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDj5vwIZDt4t%2BZi1QA3wgV8Pngummz2stb%2B%2FCJiyQyghgIhAKMPH9zyUNSkeuzMW9TpOtWMhcBu9UxZFCG%2FS2%2BBKdJYKv8DCBUQABoMNjM3NDIzMTgzODA1Igz3kQACh1tgiu%2BEaEQq3AO%2BBobgsARfZJ8I%2FuHgOwK9rw9tzsK0J9tKX1W0fh6xBcyh2bD7DreobRl5D%2FtSQm75CkUTwre4BjuGwlX4bglu8qz5KpoRX86s2srInmeXaVhIx2FXTRRbc%2FchajK7ChkLS9FM%2FJHc1rIFbVNGVcapcbKDEmL7XIHeGpyAnczSe2Xm3nu1t%2BybHtx0WWwOltJx7cUtmWRJJHQ3qLB4focH2ncS6e1jdVmugZS8EAhsN8gg%2BWy3FNrGSwPouJdwO%2BDhZx2itWWQKYXq6VRMiOYU1QyhC3Q%2BYsSnECAIaBucytvQ2sxp6wqHT%2FNcmUROJU5haIB4YhQ2GfEYKlbYqDaItKSfUyc3enRIYiJzlikyW5Mz7JKO2D8ZcYs3gGUI9uyXYvMkISDK%2Bx4usBXqlN6dtJm9Ki8ijisVlfecVbeksuWVwO8VJwtrx6sxob2vDevJqL6ZhGq%2FAcYogQoyRKb6dvvFFEWI9Q2ZXjlqekyCsKWUlExTSADCvZup4rJkrccB7Y%2BHy5sATmlqT9GEKEfJWkhd6XxnS0cdIXRh4sU3QxX2tDfbaSO4mixbHz337lwEf55A1RH54zPY4qGCEVJRxx405Edv5P44oU1evEM9btoYpODMEg3%2FraiesTCnnJzLBjqkAQr0IA8w1qg7uS%2B9x0Gs9dGy2dVM%2B7VTbilerNxDsO4A4ueg8I9iVJfc0LHCUmCREvvGY2l92WGWmxbReGTvw7IxWDlhgw6nnYBNKW7d1XJ0hWeFkaJTcVCxZ%2FaB4%2FsVYuT%2FAFn7hmK9DXv8PHV3af4%2FKqOXjrDP5yuXI3oTz8%2BrOb7d3YXmt22zPamcp6YcH89XGmIyuHylcjd34tuHzcDZ53CC&X-Amz-Signature=49be48074289b313953f334673f7b63cfa08c8213a204910442d3243f633c0aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


例


```c
*p=fopen();
```


## 文件的操作2


以下说明了文件的操作函数的参数如何书写


### fopen 打开


```c
fopen("文件名","模式");
```


打开文件可写为


```c
FILE*fp=fopen("文件名","模式");
```


其中常用模式有:


r（读取）


w（写入）


a（追加）


这些只能操作文本文件


操作二进制文件需要在后面加b：


rb（读取）（如果文件不存在，返回NULL,存在，则返回相应文件的标识符）


wb（写入）（如果文件不存在，就创建,如果文件存在就清空文件中所有内容）


ab（追加）（如果文件不存在，就创建，如果文存在将文件指针偏移到最末尾）


ps：fopen返回的标识符就是指针


### fwrite 写入


```c
fwrite (写入内容,写入大小,写入次数,文件句柄);
```


其中：写入内容可以是指针，也可以是字符串（要带双引号）


文件位置是待写入文件句柄


### fclose 关闭


```c
fclose (文件句柄);
```


成功返回0


### fflush 清空文件写入缓冲区


当写入数据至文件时，数据不会被立刻写入，而是会等

1. 缓冲区满
2. 文件关闭
3. 进程结束

再写入，


使用fflush可手动写入当前缓冲区的内容至文件


格式：


```c
fflush(相应文件的句柄)
```


### fseek 文件指针偏移


```c
fseek(文件句柄,偏移量,偏移位置);
```


其中，

1. 偏移量为正往右偏移，为负往左偏
2. 偏移位置只有三个：SEEK_END(末尾），SEEK_SET(起始），SEEK_CUR(当前位置）

### ftell 计算文件指针偏移量


从文件起始开始计算当前文件指针偏移字节数


```c
ftell(文件句柄);
```


注意⚠️：函数参数中包含文件句柄的不需要将函数赋值给文件句柄，不包含则需要赋值给文件句柄（换言之只有fopen需要赋值给句柄）


## typedef 创建类型别名

```c
typedef 原类型名 新类型名；
```


type：类型


define：定义，简称def 


typedef：定义类型名


如：


```c
typedef int int1；
```


## const定义常量

const定义一个不可修改的变量


定义：


```c
const 数据类型 变量名=常量值；
```


相较于#define，const更便于调试（可在调试时当作变量追踪）


**不是函数不加括号**


## 递归

递归是啥？


**在某个函数定义中调用该函数（自己调用自己）**


举个例子：


这东西：


```c
int arr(a)
{
	b=arr(a)+1;
	return 0;
}
```


等于这东西：


```c
int arr(a)
{
	b={
			b={
	        b={
	            b=....
	              ....
	              ....+1;
	            return 0;
             }+1;
	       return 0;
         }+1;
			return 0;
		}+1
}
```


这是无限递归


无限递归没有任何意义（只会导致栈溢出，资源耗尽）


SO,**递归必须有终止条件**（基准情况）


正确例子：


```c
int arr(a)
{
	if(a<=0)
	{return 0;}
	return arr(a-1);
}
```


这是一个无论输入几都会减到0的函数（输负数直接返回0）


## 注意：


递归不能理解为循环，跟循环没关系


它更类似于公式展开


## 强制类型转换

C语言中乘号不能省略，因此当看到


这样


```c
c=（int）a+b；
```


这样


```c
c=a+((char)b)
```


这样


```c
（int）3.14
```


### 关键特征


看到一堆括号内有数据类型


## 数据类型之复数与虚数

复数需要包含<complex.h>头文件


该文件定义了三种复数精度：


double complex（双精度复数）
float complex（单精度复数）
long double complex（长双精度复数）


↑这三个都属于数据类型↑


### 声明


```c
float complex 变量名=值；
```


### 复数值表示


2+3.0*i 就是 2+3i


### 复数运算（需额外声明）


```c
float complex a=b+c；
//其中abc均为复数
```


### 单独取实部/虚部


```c
float
```

