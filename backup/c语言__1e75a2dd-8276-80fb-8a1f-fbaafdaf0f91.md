
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNKFR5C%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkpHaszCn8r4yabJhN9ufuZdbY4mZ7QWGfUQHD5P130AIga4iyCFHejTMZFLxwGbqLC0mVF8OWhwywHCFCgit8R6Iq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLHDfOnYQ14DTipQEircAxnGvZmBLb9UqTrUC1ijRNcD3UGjf7b6CHngpoHOd%2B%2B%2BKfD9efnLGxkUrgrxj2YQUtgYFTw5F7ZF7AnwDAAnC%2Bzq4E202zvgZFbMvsLwuyS%2BspIuaA8jGceUYb8itoRepYaKett96ms1C32CxzxfZTYTCE%2BeGduV7XwyAEfJWt0ONj5Tl8UoekgWxllv40o0%2FDufHl05i4Ab0VAcvwbEaVM6CgJbm0nMX2S0tzFSuOlx2pZ5TfYSOERod%2BhmuUPl5cAeI0dEe9dHwVyqNSNredlDEN2SP05sEok7JynNSbMZfIWJ%2BMzhyAC4Ca7QGYvAvRkmnS92qIIZXJnfI2S%2FdE%2FqX8nXhtpJlrowDOR1g%2FH2%2BTGXuj%2BhLIqyyvmv5qd0xX%2FJw3UCbLYk8dCEOeSmhUjtGF7jald%2BoRG7roW0fCmnWrYL%2F1CBUXT4Wu1ATTByR2hp6KNlOipw9WKAjILZ2bC%2FiDKo9xmXC%2BfAIujF%2FljvMc2y6BLizVO9NRuVqggn6WaPGPh75GSZEq84nr9Fjey57TfrNBmg3FM%2BP9LLsDSuycAs78W%2Fhau8Tl45cw3uEOb4GinTNiR2BTLXVcWz%2BTR3F%2F5GoeKKtGwZiluBC1DvGeJKGyH5BEU%2BB4%2FtMMK7t8oGOqUB2HmM8X%2FHlOLtTQyUePX%2BALVZ4UaQpwhPGuZzCrkZYaV7V1Pv%2FG4AI7zg5m2maHGYK4TIozaDXxPG1RVJMLmkxZ27WtuYOIaQkYh5bEhwtssihXJAjHfisPI9Djzmvz54Xq9zeGeRyUeWAdXgitnJZpuVEBPHFWLWGbOduShsRE57NVaWaO6bgM2xeyeMbCKGlNCja0BRSWWjkk6V53jnUNqVYQS8&X-Amz-Signature=4daf4efd955917579a23332d1a349bb1c964a6c2004bfe624c81c6c3adf73e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6YQHYR%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzLnE3Y5kQ%2Fb4vTWqace1rD3E%2FykCOdbUpRpnmyoXiQQIhAIzeTI9rShakGERAEdthfrgCu6Ocicywm0e9l5SrQTDfKv8DCEoQABoMNjM3NDIzMTgzODA1IgzpdwA9I%2Bdejb8yXH8q3APy98hxvch%2Bfu%2FBGcGDKX9iNs1Rahc1Sv7%2B4lUjr61Ko1Yc%2BVIEAN%2F0LC3HisS%2FB%2FC8NVm%2BzdHZk5QYaH%2F%2FeSb0Di9IuqfDZhBwPw9hwSrFPh%2FLYr0rDJNwsD6Q0L%2Bt1UWwO7Xh0oREPIkFnKyY4QKH6u%2FaSnApu4PfktU%2FnwEIUhTqRUAyoBWwMj%2FUPXEmE0rHJG5cLZpSYf5V2zQM2%2FHHanC289Ye6XMJKcrgogcHaTftWTdyFbu%2BkPhlfHjCt1N6yF234pJ%2FCE%2BHswL%2FzH3nadmBgTRBQbMJpcYoPHZRGTPf8pvAhLwg5GcBlyy6PmXHv0mU6gvjh4JbHQXi8ua1V3cDC5n3aLeKwUK7JHanX%2Fbvx4OsS5D2H8tU4qS2%2Fa2BmimwQrc2DTXOtv9W1dS2L8xFMvf%2BH%2FlCGaa1kooWgfPxUC75kAl2naHbYILXohLMx%2F4jrtO03m%2BYgAhsAzTJ6hIvLb01wTG98nc7TnZbPosxbtEKsWvlJ6JwdvwhNhRvbYcIcUklb0MIpDJ2xhsFgfpHuexUarEkunEErgBF1BC8OUHbIw0mAGWMGuyhw5iRgH8ioOavhjOBX69FR4chfhPgN1Z7F2WsQ1fe%2B%2FkCigYAP0yqU9zyHXjP1zCXurfKBjqkAWYPQ%2FFA2JHsY21ifwkDqPj%2BSJsBCf2D3xETVT%2BNWHQUaJVUnLrkppmRjpnYc1kcxHS%2B2Q72yVrDB1Y2Sm3ti5TGaxtAZcQu%2FGaT47J8%2FrwkmCSFy86S8KAf9Lm4GK3QfzxLylsyq%2BvIoxXk4z9%2FM36Y6T5oBVX5f4XRM6hjGs11xfvHXMmIFKbmc%2FafV7CsSnTQ%2BAtgK16jjmRS56cDRzKYmb5T&X-Amz-Signature=40d199768a08ed84c9d2c6ea575a583c77d544d298a32b82052270bead26ca16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6YQHYR%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzLnE3Y5kQ%2Fb4vTWqace1rD3E%2FykCOdbUpRpnmyoXiQQIhAIzeTI9rShakGERAEdthfrgCu6Ocicywm0e9l5SrQTDfKv8DCEoQABoMNjM3NDIzMTgzODA1IgzpdwA9I%2Bdejb8yXH8q3APy98hxvch%2Bfu%2FBGcGDKX9iNs1Rahc1Sv7%2B4lUjr61Ko1Yc%2BVIEAN%2F0LC3HisS%2FB%2FC8NVm%2BzdHZk5QYaH%2F%2FeSb0Di9IuqfDZhBwPw9hwSrFPh%2FLYr0rDJNwsD6Q0L%2Bt1UWwO7Xh0oREPIkFnKyY4QKH6u%2FaSnApu4PfktU%2FnwEIUhTqRUAyoBWwMj%2FUPXEmE0rHJG5cLZpSYf5V2zQM2%2FHHanC289Ye6XMJKcrgogcHaTftWTdyFbu%2BkPhlfHjCt1N6yF234pJ%2FCE%2BHswL%2FzH3nadmBgTRBQbMJpcYoPHZRGTPf8pvAhLwg5GcBlyy6PmXHv0mU6gvjh4JbHQXi8ua1V3cDC5n3aLeKwUK7JHanX%2Fbvx4OsS5D2H8tU4qS2%2Fa2BmimwQrc2DTXOtv9W1dS2L8xFMvf%2BH%2FlCGaa1kooWgfPxUC75kAl2naHbYILXohLMx%2F4jrtO03m%2BYgAhsAzTJ6hIvLb01wTG98nc7TnZbPosxbtEKsWvlJ6JwdvwhNhRvbYcIcUklb0MIpDJ2xhsFgfpHuexUarEkunEErgBF1BC8OUHbIw0mAGWMGuyhw5iRgH8ioOavhjOBX69FR4chfhPgN1Z7F2WsQ1fe%2B%2FkCigYAP0yqU9zyHXjP1zCXurfKBjqkAWYPQ%2FFA2JHsY21ifwkDqPj%2BSJsBCf2D3xETVT%2BNWHQUaJVUnLrkppmRjpnYc1kcxHS%2B2Q72yVrDB1Y2Sm3ti5TGaxtAZcQu%2FGaT47J8%2FrwkmCSFy86S8KAf9Lm4GK3QfzxLylsyq%2BvIoxXk4z9%2FM36Y6T5oBVX5f4XRM6hjGs11xfvHXMmIFKbmc%2FafV7CsSnTQ%2BAtgK16jjmRS56cDRzKYmb5T&X-Amz-Signature=694eb806048ace04c96c253e50288adaaae517cd91624cc6e02e0070bf40e5f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45J7KEQ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoeLS%2FLUO2rc%2BnZilqsi9dONvC0AAucu9cbsO9nVHyqAIhAMZ95LKSl9yN9fP%2B7cqlHd7HHQ9HCBru00PxP2CFXEH6Kv8DCEoQABoMNjM3NDIzMTgzODA1Igx39cxtcxnlWjO6sr8q3ANf%2FwWPQZFcdxdRIc4%2Bd%2Bpz8N8PekEVcY54Na%2F08TmGiM7I%2FyD8Gm8bp2fjHYCyui5Igfmfs1LPiRJcy7vEsp44lk194NMbY%2B6Pgbf8Ivx2Uiejf%2BWe4NWpGSMnH3Pje0CjY5mOLX26dAN5UKI7%2Fi%2FM%2FDLZpSkJkaRpBrFMLNffXpEBLkTYF6nWqAKPZygzGO7JIPE4BnTopywNGrGygbfQztycrdEc8pg1MrU6J22Rt0KR5s7lcCZgYDLcDj8DfA1LBuUmTM4aduf0Uqnhj6OMBiTHtSzhoHGI3AQ7puEt3IP5NtBIHglJm2C60pT0INGaSDaqkUYiWWNvqRgXSotsl%2FwjKJdbyz2F9k6OZkL5c0nt7yJEjGN9OFdZJcRU44W%2BhZhRbfg%2BuiFSRC7IBQTmOPt%2BGHctwnt%2B47ES0fv8tYELjW2E6GWkga8QnonLEEcI9YeQYhLrvIBO%2B%2F7fYwtmATU9oHGlYBTb7fF%2FAQ%2BmHqr0iqUzFjMKKtYJ567XWfTRhNt0t1QXurw%2Fl4830KjOKKI2JoKu8NIMQCJO7vuKpNDEQpTWI6FgDtgeY3DcKIEpqkLE3KuiYnPQPRHiHqokhyvoUS%2Fvv7e4RYYhV%2BdnfzEHQev99WzUXGOm0DCtwbfKBjqkAQ4x9W1VmK6lWe7UXxuSi2LCbx%2BC1WQ9Nym82pkRjYYIO40zEWSpgXJAbcz3nCiM3YjZHgBv7SqOa2FVRNILIJwebdfCT9W%2BnKkxPpr1CqHn7xcC2gz9%2Bng5a21vq7eSf%2B0OLFnG1hcmWdSjYYRffTNRo7w3pR8QYuAtd8C2LGOrKUwA7w9kUEcJwnO6oBJIlE6a77S%2By7DkazNjradgF5reJESf&X-Amz-Signature=2e3429008043b074e961e2e4a67f267b421f14830e8bd374d5d0df1308068317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45J7KEQ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoeLS%2FLUO2rc%2BnZilqsi9dONvC0AAucu9cbsO9nVHyqAIhAMZ95LKSl9yN9fP%2B7cqlHd7HHQ9HCBru00PxP2CFXEH6Kv8DCEoQABoMNjM3NDIzMTgzODA1Igx39cxtcxnlWjO6sr8q3ANf%2FwWPQZFcdxdRIc4%2Bd%2Bpz8N8PekEVcY54Na%2F08TmGiM7I%2FyD8Gm8bp2fjHYCyui5Igfmfs1LPiRJcy7vEsp44lk194NMbY%2B6Pgbf8Ivx2Uiejf%2BWe4NWpGSMnH3Pje0CjY5mOLX26dAN5UKI7%2Fi%2FM%2FDLZpSkJkaRpBrFMLNffXpEBLkTYF6nWqAKPZygzGO7JIPE4BnTopywNGrGygbfQztycrdEc8pg1MrU6J22Rt0KR5s7lcCZgYDLcDj8DfA1LBuUmTM4aduf0Uqnhj6OMBiTHtSzhoHGI3AQ7puEt3IP5NtBIHglJm2C60pT0INGaSDaqkUYiWWNvqRgXSotsl%2FwjKJdbyz2F9k6OZkL5c0nt7yJEjGN9OFdZJcRU44W%2BhZhRbfg%2BuiFSRC7IBQTmOPt%2BGHctwnt%2B47ES0fv8tYELjW2E6GWkga8QnonLEEcI9YeQYhLrvIBO%2B%2F7fYwtmATU9oHGlYBTb7fF%2FAQ%2BmHqr0iqUzFjMKKtYJ567XWfTRhNt0t1QXurw%2Fl4830KjOKKI2JoKu8NIMQCJO7vuKpNDEQpTWI6FgDtgeY3DcKIEpqkLE3KuiYnPQPRHiHqokhyvoUS%2Fvv7e4RYYhV%2BdnfzEHQev99WzUXGOm0DCtwbfKBjqkAQ4x9W1VmK6lWe7UXxuSi2LCbx%2BC1WQ9Nym82pkRjYYIO40zEWSpgXJAbcz3nCiM3YjZHgBv7SqOa2FVRNILIJwebdfCT9W%2BnKkxPpr1CqHn7xcC2gz9%2Bng5a21vq7eSf%2B0OLFnG1hcmWdSjYYRffTNRo7w3pR8QYuAtd8C2LGOrKUwA7w9kUEcJwnO6oBJIlE6a77S%2By7DkazNjradgF5reJESf&X-Amz-Signature=ab4dd63ae59fa6166dbb91db4470fb0df20d5fbb3f1cc38190541ba655643f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45J7KEQ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoeLS%2FLUO2rc%2BnZilqsi9dONvC0AAucu9cbsO9nVHyqAIhAMZ95LKSl9yN9fP%2B7cqlHd7HHQ9HCBru00PxP2CFXEH6Kv8DCEoQABoMNjM3NDIzMTgzODA1Igx39cxtcxnlWjO6sr8q3ANf%2FwWPQZFcdxdRIc4%2Bd%2Bpz8N8PekEVcY54Na%2F08TmGiM7I%2FyD8Gm8bp2fjHYCyui5Igfmfs1LPiRJcy7vEsp44lk194NMbY%2B6Pgbf8Ivx2Uiejf%2BWe4NWpGSMnH3Pje0CjY5mOLX26dAN5UKI7%2Fi%2FM%2FDLZpSkJkaRpBrFMLNffXpEBLkTYF6nWqAKPZygzGO7JIPE4BnTopywNGrGygbfQztycrdEc8pg1MrU6J22Rt0KR5s7lcCZgYDLcDj8DfA1LBuUmTM4aduf0Uqnhj6OMBiTHtSzhoHGI3AQ7puEt3IP5NtBIHglJm2C60pT0INGaSDaqkUYiWWNvqRgXSotsl%2FwjKJdbyz2F9k6OZkL5c0nt7yJEjGN9OFdZJcRU44W%2BhZhRbfg%2BuiFSRC7IBQTmOPt%2BGHctwnt%2B47ES0fv8tYELjW2E6GWkga8QnonLEEcI9YeQYhLrvIBO%2B%2F7fYwtmATU9oHGlYBTb7fF%2FAQ%2BmHqr0iqUzFjMKKtYJ567XWfTRhNt0t1QXurw%2Fl4830KjOKKI2JoKu8NIMQCJO7vuKpNDEQpTWI6FgDtgeY3DcKIEpqkLE3KuiYnPQPRHiHqokhyvoUS%2Fvv7e4RYYhV%2BdnfzEHQev99WzUXGOm0DCtwbfKBjqkAQ4x9W1VmK6lWe7UXxuSi2LCbx%2BC1WQ9Nym82pkRjYYIO40zEWSpgXJAbcz3nCiM3YjZHgBv7SqOa2FVRNILIJwebdfCT9W%2BnKkxPpr1CqHn7xcC2gz9%2Bng5a21vq7eSf%2B0OLFnG1hcmWdSjYYRffTNRo7w3pR8QYuAtd8C2LGOrKUwA7w9kUEcJwnO6oBJIlE6a77S%2By7DkazNjradgF5reJESf&X-Amz-Signature=06c3ab87734b2d662c6f055afa39b62ffe8168c0e3480058ff07a6e3ca965582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45J7KEQ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoeLS%2FLUO2rc%2BnZilqsi9dONvC0AAucu9cbsO9nVHyqAIhAMZ95LKSl9yN9fP%2B7cqlHd7HHQ9HCBru00PxP2CFXEH6Kv8DCEoQABoMNjM3NDIzMTgzODA1Igx39cxtcxnlWjO6sr8q3ANf%2FwWPQZFcdxdRIc4%2Bd%2Bpz8N8PekEVcY54Na%2F08TmGiM7I%2FyD8Gm8bp2fjHYCyui5Igfmfs1LPiRJcy7vEsp44lk194NMbY%2B6Pgbf8Ivx2Uiejf%2BWe4NWpGSMnH3Pje0CjY5mOLX26dAN5UKI7%2Fi%2FM%2FDLZpSkJkaRpBrFMLNffXpEBLkTYF6nWqAKPZygzGO7JIPE4BnTopywNGrGygbfQztycrdEc8pg1MrU6J22Rt0KR5s7lcCZgYDLcDj8DfA1LBuUmTM4aduf0Uqnhj6OMBiTHtSzhoHGI3AQ7puEt3IP5NtBIHglJm2C60pT0INGaSDaqkUYiWWNvqRgXSotsl%2FwjKJdbyz2F9k6OZkL5c0nt7yJEjGN9OFdZJcRU44W%2BhZhRbfg%2BuiFSRC7IBQTmOPt%2BGHctwnt%2B47ES0fv8tYELjW2E6GWkga8QnonLEEcI9YeQYhLrvIBO%2B%2F7fYwtmATU9oHGlYBTb7fF%2FAQ%2BmHqr0iqUzFjMKKtYJ567XWfTRhNt0t1QXurw%2Fl4830KjOKKI2JoKu8NIMQCJO7vuKpNDEQpTWI6FgDtgeY3DcKIEpqkLE3KuiYnPQPRHiHqokhyvoUS%2Fvv7e4RYYhV%2BdnfzEHQev99WzUXGOm0DCtwbfKBjqkAQ4x9W1VmK6lWe7UXxuSi2LCbx%2BC1WQ9Nym82pkRjYYIO40zEWSpgXJAbcz3nCiM3YjZHgBv7SqOa2FVRNILIJwebdfCT9W%2BnKkxPpr1CqHn7xcC2gz9%2Bng5a21vq7eSf%2B0OLFnG1hcmWdSjYYRffTNRo7w3pR8QYuAtd8C2LGOrKUwA7w9kUEcJwnO6oBJIlE6a77S%2By7DkazNjradgF5reJESf&X-Amz-Signature=b7f1150f1dae8b2f5809834ab88f808415d9ae7158e851731b9babffe50beacb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45J7KEQ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoeLS%2FLUO2rc%2BnZilqsi9dONvC0AAucu9cbsO9nVHyqAIhAMZ95LKSl9yN9fP%2B7cqlHd7HHQ9HCBru00PxP2CFXEH6Kv8DCEoQABoMNjM3NDIzMTgzODA1Igx39cxtcxnlWjO6sr8q3ANf%2FwWPQZFcdxdRIc4%2Bd%2Bpz8N8PekEVcY54Na%2F08TmGiM7I%2FyD8Gm8bp2fjHYCyui5Igfmfs1LPiRJcy7vEsp44lk194NMbY%2B6Pgbf8Ivx2Uiejf%2BWe4NWpGSMnH3Pje0CjY5mOLX26dAN5UKI7%2Fi%2FM%2FDLZpSkJkaRpBrFMLNffXpEBLkTYF6nWqAKPZygzGO7JIPE4BnTopywNGrGygbfQztycrdEc8pg1MrU6J22Rt0KR5s7lcCZgYDLcDj8DfA1LBuUmTM4aduf0Uqnhj6OMBiTHtSzhoHGI3AQ7puEt3IP5NtBIHglJm2C60pT0INGaSDaqkUYiWWNvqRgXSotsl%2FwjKJdbyz2F9k6OZkL5c0nt7yJEjGN9OFdZJcRU44W%2BhZhRbfg%2BuiFSRC7IBQTmOPt%2BGHctwnt%2B47ES0fv8tYELjW2E6GWkga8QnonLEEcI9YeQYhLrvIBO%2B%2F7fYwtmATU9oHGlYBTb7fF%2FAQ%2BmHqr0iqUzFjMKKtYJ567XWfTRhNt0t1QXurw%2Fl4830KjOKKI2JoKu8NIMQCJO7vuKpNDEQpTWI6FgDtgeY3DcKIEpqkLE3KuiYnPQPRHiHqokhyvoUS%2Fvv7e4RYYhV%2BdnfzEHQev99WzUXGOm0DCtwbfKBjqkAQ4x9W1VmK6lWe7UXxuSi2LCbx%2BC1WQ9Nym82pkRjYYIO40zEWSpgXJAbcz3nCiM3YjZHgBv7SqOa2FVRNILIJwebdfCT9W%2BnKkxPpr1CqHn7xcC2gz9%2Bng5a21vq7eSf%2B0OLFnG1hcmWdSjYYRffTNRo7w3pR8QYuAtd8C2LGOrKUwA7w9kUEcJwnO6oBJIlE6a77S%2By7DkazNjradgF5reJESf&X-Amz-Signature=bc9fb550b7d4648526474ebbc5ebf175ca95423d388a303ddd902d2ea082ef20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45J7KEQ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoeLS%2FLUO2rc%2BnZilqsi9dONvC0AAucu9cbsO9nVHyqAIhAMZ95LKSl9yN9fP%2B7cqlHd7HHQ9HCBru00PxP2CFXEH6Kv8DCEoQABoMNjM3NDIzMTgzODA1Igx39cxtcxnlWjO6sr8q3ANf%2FwWPQZFcdxdRIc4%2Bd%2Bpz8N8PekEVcY54Na%2F08TmGiM7I%2FyD8Gm8bp2fjHYCyui5Igfmfs1LPiRJcy7vEsp44lk194NMbY%2B6Pgbf8Ivx2Uiejf%2BWe4NWpGSMnH3Pje0CjY5mOLX26dAN5UKI7%2Fi%2FM%2FDLZpSkJkaRpBrFMLNffXpEBLkTYF6nWqAKPZygzGO7JIPE4BnTopywNGrGygbfQztycrdEc8pg1MrU6J22Rt0KR5s7lcCZgYDLcDj8DfA1LBuUmTM4aduf0Uqnhj6OMBiTHtSzhoHGI3AQ7puEt3IP5NtBIHglJm2C60pT0INGaSDaqkUYiWWNvqRgXSotsl%2FwjKJdbyz2F9k6OZkL5c0nt7yJEjGN9OFdZJcRU44W%2BhZhRbfg%2BuiFSRC7IBQTmOPt%2BGHctwnt%2B47ES0fv8tYELjW2E6GWkga8QnonLEEcI9YeQYhLrvIBO%2B%2F7fYwtmATU9oHGlYBTb7fF%2FAQ%2BmHqr0iqUzFjMKKtYJ567XWfTRhNt0t1QXurw%2Fl4830KjOKKI2JoKu8NIMQCJO7vuKpNDEQpTWI6FgDtgeY3DcKIEpqkLE3KuiYnPQPRHiHqokhyvoUS%2Fvv7e4RYYhV%2BdnfzEHQev99WzUXGOm0DCtwbfKBjqkAQ4x9W1VmK6lWe7UXxuSi2LCbx%2BC1WQ9Nym82pkRjYYIO40zEWSpgXJAbcz3nCiM3YjZHgBv7SqOa2FVRNILIJwebdfCT9W%2BnKkxPpr1CqHn7xcC2gz9%2Bng5a21vq7eSf%2B0OLFnG1hcmWdSjYYRffTNRo7w3pR8QYuAtd8C2LGOrKUwA7w9kUEcJwnO6oBJIlE6a77S%2By7DkazNjradgF5reJESf&X-Amz-Signature=b1c4bd0ea17a05cd290a27009010aac77b9a8bbc1978a86d80be47d42afa2e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45J7KEQ%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoeLS%2FLUO2rc%2BnZilqsi9dONvC0AAucu9cbsO9nVHyqAIhAMZ95LKSl9yN9fP%2B7cqlHd7HHQ9HCBru00PxP2CFXEH6Kv8DCEoQABoMNjM3NDIzMTgzODA1Igx39cxtcxnlWjO6sr8q3ANf%2FwWPQZFcdxdRIc4%2Bd%2Bpz8N8PekEVcY54Na%2F08TmGiM7I%2FyD8Gm8bp2fjHYCyui5Igfmfs1LPiRJcy7vEsp44lk194NMbY%2B6Pgbf8Ivx2Uiejf%2BWe4NWpGSMnH3Pje0CjY5mOLX26dAN5UKI7%2Fi%2FM%2FDLZpSkJkaRpBrFMLNffXpEBLkTYF6nWqAKPZygzGO7JIPE4BnTopywNGrGygbfQztycrdEc8pg1MrU6J22Rt0KR5s7lcCZgYDLcDj8DfA1LBuUmTM4aduf0Uqnhj6OMBiTHtSzhoHGI3AQ7puEt3IP5NtBIHglJm2C60pT0INGaSDaqkUYiWWNvqRgXSotsl%2FwjKJdbyz2F9k6OZkL5c0nt7yJEjGN9OFdZJcRU44W%2BhZhRbfg%2BuiFSRC7IBQTmOPt%2BGHctwnt%2B47ES0fv8tYELjW2E6GWkga8QnonLEEcI9YeQYhLrvIBO%2B%2F7fYwtmATU9oHGlYBTb7fF%2FAQ%2BmHqr0iqUzFjMKKtYJ567XWfTRhNt0t1QXurw%2Fl4830KjOKKI2JoKu8NIMQCJO7vuKpNDEQpTWI6FgDtgeY3DcKIEpqkLE3KuiYnPQPRHiHqokhyvoUS%2Fvv7e4RYYhV%2BdnfzEHQev99WzUXGOm0DCtwbfKBjqkAQ4x9W1VmK6lWe7UXxuSi2LCbx%2BC1WQ9Nym82pkRjYYIO40zEWSpgXJAbcz3nCiM3YjZHgBv7SqOa2FVRNILIJwebdfCT9W%2BnKkxPpr1CqHn7xcC2gz9%2Bng5a21vq7eSf%2B0OLFnG1hcmWdSjYYRffTNRo7w3pR8QYuAtd8C2LGOrKUwA7w9kUEcJwnO6oBJIlE6a77S%2By7DkazNjradgF5reJESf&X-Amz-Signature=8c2cea636218fa6a7d61f895a92b6297da3ebd55d4275b9a46d0c123dec746e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDETRN5A%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BQldW5ot9eMAT2lm0dKTS9zftmq4OL%2B8%2F%2FRUbVVcL3AiEAhSb20CGI%2BcZqhwijP7h0re4Jmu1kJxWRuMF3JXcQcaEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOzuoa94pKqoA6SHIircA5rVLuQALcCbdRbMancl5bd5THrayD%2BEZzOlIm4EQPSY58fsURTD0QZVzSk8SqzFm76%2BRv%2BEF%2BzS1aw2DkwArgmRoaqwEYEOCycI60s%2FgFE0T%2FElbOhZRnp2ERdIZIfHG23MiU5nE%2B10h9NR7AalJI%2Fhmai%2B5SLyQ90sCmjkX0PyzQwbcsCLwFbBzY%2Bc%2BuBnu85wFpbYEd1V%2Faui8p1L98%2BjyoGkjkcGyFmNrkESv7FfcuypUpk76RinWV8hcbl4jB3g2IOl%2BJ8p4NfHg3uPjJePKq5DtrCmp7u259R4ZjTIMwDn1aKEKoP3%2FyC8Sv7TvHgLoqq5WVQsC5TwoSzavAiojqvHi9cOQ3Kh0mMXWo0B9rZBk8%2BzRvH1yNxs53bhbaxwzQjt%2FIGYAICJT0m5awhx75EPblUwUI9rLVdG1dsmBThMW86VfQnjb6ruHKBmB9%2BVDG8ZWNyIJkYXzAZtizBH%2F%2BKRC4x6UtDgUOZwh1OdoOU5XAJMnnIXD9xnfgHjxDNwDph9hCVQgvWCHQgrFcr%2FBFs%2BOmXYfCPy8etCKh%2FSwI3a%2Ba3BPmvn8tLrlNMtA5lYy1pfmNkh1EejAHm0nAbS9JiHMwwlXepGnqmBMk5EXd2Hzyzx3HvRsEeJMO7Et8oGOqUBJjZTBOw8sObFkfUdokFrf4uTeoXR2uFv3xQ7Sq0YjwD7MfkMmwlrQItorWvG1QDIsmOLCDTROBkt5yt%2FS4gSGwjixJQ%2FvudRfHzYU1DseBSo0wHekcpUpsAPYA3IImQKjOlwk%2F7Wzu9FVYs7RERYWGaZLbVeVUOlv6fmoCpXOpWyt4y765MoDKAr%2Fp6qQuG795%2BPxMzjG9ZD3Ch7nb9HTPvIFq1I&X-Amz-Signature=4cf17e0a52480b9a84eb9ae6e9f2070d0a98313cc38a9cf88cba499e0b6fd3a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDETRN5A%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BQldW5ot9eMAT2lm0dKTS9zftmq4OL%2B8%2F%2FRUbVVcL3AiEAhSb20CGI%2BcZqhwijP7h0re4Jmu1kJxWRuMF3JXcQcaEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOzuoa94pKqoA6SHIircA5rVLuQALcCbdRbMancl5bd5THrayD%2BEZzOlIm4EQPSY58fsURTD0QZVzSk8SqzFm76%2BRv%2BEF%2BzS1aw2DkwArgmRoaqwEYEOCycI60s%2FgFE0T%2FElbOhZRnp2ERdIZIfHG23MiU5nE%2B10h9NR7AalJI%2Fhmai%2B5SLyQ90sCmjkX0PyzQwbcsCLwFbBzY%2Bc%2BuBnu85wFpbYEd1V%2Faui8p1L98%2BjyoGkjkcGyFmNrkESv7FfcuypUpk76RinWV8hcbl4jB3g2IOl%2BJ8p4NfHg3uPjJePKq5DtrCmp7u259R4ZjTIMwDn1aKEKoP3%2FyC8Sv7TvHgLoqq5WVQsC5TwoSzavAiojqvHi9cOQ3Kh0mMXWo0B9rZBk8%2BzRvH1yNxs53bhbaxwzQjt%2FIGYAICJT0m5awhx75EPblUwUI9rLVdG1dsmBThMW86VfQnjb6ruHKBmB9%2BVDG8ZWNyIJkYXzAZtizBH%2F%2BKRC4x6UtDgUOZwh1OdoOU5XAJMnnIXD9xnfgHjxDNwDph9hCVQgvWCHQgrFcr%2FBFs%2BOmXYfCPy8etCKh%2FSwI3a%2Ba3BPmvn8tLrlNMtA5lYy1pfmNkh1EejAHm0nAbS9JiHMwwlXepGnqmBMk5EXd2Hzyzx3HvRsEeJMO7Et8oGOqUBJjZTBOw8sObFkfUdokFrf4uTeoXR2uFv3xQ7Sq0YjwD7MfkMmwlrQItorWvG1QDIsmOLCDTROBkt5yt%2FS4gSGwjixJQ%2FvudRfHzYU1DseBSo0wHekcpUpsAPYA3IImQKjOlwk%2F7Wzu9FVYs7RERYWGaZLbVeVUOlv6fmoCpXOpWyt4y765MoDKAr%2Fp6qQuG795%2BPxMzjG9ZD3Ch7nb9HTPvIFq1I&X-Amz-Signature=f8aa76427be1229496cff3425ed6fd95156942c378961fe90939f5fa26da9993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDETRN5A%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BQldW5ot9eMAT2lm0dKTS9zftmq4OL%2B8%2F%2FRUbVVcL3AiEAhSb20CGI%2BcZqhwijP7h0re4Jmu1kJxWRuMF3JXcQcaEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOzuoa94pKqoA6SHIircA5rVLuQALcCbdRbMancl5bd5THrayD%2BEZzOlIm4EQPSY58fsURTD0QZVzSk8SqzFm76%2BRv%2BEF%2BzS1aw2DkwArgmRoaqwEYEOCycI60s%2FgFE0T%2FElbOhZRnp2ERdIZIfHG23MiU5nE%2B10h9NR7AalJI%2Fhmai%2B5SLyQ90sCmjkX0PyzQwbcsCLwFbBzY%2Bc%2BuBnu85wFpbYEd1V%2Faui8p1L98%2BjyoGkjkcGyFmNrkESv7FfcuypUpk76RinWV8hcbl4jB3g2IOl%2BJ8p4NfHg3uPjJePKq5DtrCmp7u259R4ZjTIMwDn1aKEKoP3%2FyC8Sv7TvHgLoqq5WVQsC5TwoSzavAiojqvHi9cOQ3Kh0mMXWo0B9rZBk8%2BzRvH1yNxs53bhbaxwzQjt%2FIGYAICJT0m5awhx75EPblUwUI9rLVdG1dsmBThMW86VfQnjb6ruHKBmB9%2BVDG8ZWNyIJkYXzAZtizBH%2F%2BKRC4x6UtDgUOZwh1OdoOU5XAJMnnIXD9xnfgHjxDNwDph9hCVQgvWCHQgrFcr%2FBFs%2BOmXYfCPy8etCKh%2FSwI3a%2Ba3BPmvn8tLrlNMtA5lYy1pfmNkh1EejAHm0nAbS9JiHMwwlXepGnqmBMk5EXd2Hzyzx3HvRsEeJMO7Et8oGOqUBJjZTBOw8sObFkfUdokFrf4uTeoXR2uFv3xQ7Sq0YjwD7MfkMmwlrQItorWvG1QDIsmOLCDTROBkt5yt%2FS4gSGwjixJQ%2FvudRfHzYU1DseBSo0wHekcpUpsAPYA3IImQKjOlwk%2F7Wzu9FVYs7RERYWGaZLbVeVUOlv6fmoCpXOpWyt4y765MoDKAr%2Fp6qQuG795%2BPxMzjG9ZD3Ch7nb9HTPvIFq1I&X-Amz-Signature=a479c3b3fced74843aefb18f09e93e7325678c64289aa9cf4ab2925fc972d29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDETRN5A%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BQldW5ot9eMAT2lm0dKTS9zftmq4OL%2B8%2F%2FRUbVVcL3AiEAhSb20CGI%2BcZqhwijP7h0re4Jmu1kJxWRuMF3JXcQcaEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOzuoa94pKqoA6SHIircA5rVLuQALcCbdRbMancl5bd5THrayD%2BEZzOlIm4EQPSY58fsURTD0QZVzSk8SqzFm76%2BRv%2BEF%2BzS1aw2DkwArgmRoaqwEYEOCycI60s%2FgFE0T%2FElbOhZRnp2ERdIZIfHG23MiU5nE%2B10h9NR7AalJI%2Fhmai%2B5SLyQ90sCmjkX0PyzQwbcsCLwFbBzY%2Bc%2BuBnu85wFpbYEd1V%2Faui8p1L98%2BjyoGkjkcGyFmNrkESv7FfcuypUpk76RinWV8hcbl4jB3g2IOl%2BJ8p4NfHg3uPjJePKq5DtrCmp7u259R4ZjTIMwDn1aKEKoP3%2FyC8Sv7TvHgLoqq5WVQsC5TwoSzavAiojqvHi9cOQ3Kh0mMXWo0B9rZBk8%2BzRvH1yNxs53bhbaxwzQjt%2FIGYAICJT0m5awhx75EPblUwUI9rLVdG1dsmBThMW86VfQnjb6ruHKBmB9%2BVDG8ZWNyIJkYXzAZtizBH%2F%2BKRC4x6UtDgUOZwh1OdoOU5XAJMnnIXD9xnfgHjxDNwDph9hCVQgvWCHQgrFcr%2FBFs%2BOmXYfCPy8etCKh%2FSwI3a%2Ba3BPmvn8tLrlNMtA5lYy1pfmNkh1EejAHm0nAbS9JiHMwwlXepGnqmBMk5EXd2Hzyzx3HvRsEeJMO7Et8oGOqUBJjZTBOw8sObFkfUdokFrf4uTeoXR2uFv3xQ7Sq0YjwD7MfkMmwlrQItorWvG1QDIsmOLCDTROBkt5yt%2FS4gSGwjixJQ%2FvudRfHzYU1DseBSo0wHekcpUpsAPYA3IImQKjOlwk%2F7Wzu9FVYs7RERYWGaZLbVeVUOlv6fmoCpXOpWyt4y765MoDKAr%2Fp6qQuG795%2BPxMzjG9ZD3Ch7nb9HTPvIFq1I&X-Amz-Signature=374716c82cfd9fbe76ab40914653beb60e5cae468a927b01517a07c46a70ef26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDETRN5A%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BQldW5ot9eMAT2lm0dKTS9zftmq4OL%2B8%2F%2FRUbVVcL3AiEAhSb20CGI%2BcZqhwijP7h0re4Jmu1kJxWRuMF3JXcQcaEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOzuoa94pKqoA6SHIircA5rVLuQALcCbdRbMancl5bd5THrayD%2BEZzOlIm4EQPSY58fsURTD0QZVzSk8SqzFm76%2BRv%2BEF%2BzS1aw2DkwArgmRoaqwEYEOCycI60s%2FgFE0T%2FElbOhZRnp2ERdIZIfHG23MiU5nE%2B10h9NR7AalJI%2Fhmai%2B5SLyQ90sCmjkX0PyzQwbcsCLwFbBzY%2Bc%2BuBnu85wFpbYEd1V%2Faui8p1L98%2BjyoGkjkcGyFmNrkESv7FfcuypUpk76RinWV8hcbl4jB3g2IOl%2BJ8p4NfHg3uPjJePKq5DtrCmp7u259R4ZjTIMwDn1aKEKoP3%2FyC8Sv7TvHgLoqq5WVQsC5TwoSzavAiojqvHi9cOQ3Kh0mMXWo0B9rZBk8%2BzRvH1yNxs53bhbaxwzQjt%2FIGYAICJT0m5awhx75EPblUwUI9rLVdG1dsmBThMW86VfQnjb6ruHKBmB9%2BVDG8ZWNyIJkYXzAZtizBH%2F%2BKRC4x6UtDgUOZwh1OdoOU5XAJMnnIXD9xnfgHjxDNwDph9hCVQgvWCHQgrFcr%2FBFs%2BOmXYfCPy8etCKh%2FSwI3a%2Ba3BPmvn8tLrlNMtA5lYy1pfmNkh1EejAHm0nAbS9JiHMwwlXepGnqmBMk5EXd2Hzyzx3HvRsEeJMO7Et8oGOqUBJjZTBOw8sObFkfUdokFrf4uTeoXR2uFv3xQ7Sq0YjwD7MfkMmwlrQItorWvG1QDIsmOLCDTROBkt5yt%2FS4gSGwjixJQ%2FvudRfHzYU1DseBSo0wHekcpUpsAPYA3IImQKjOlwk%2F7Wzu9FVYs7RERYWGaZLbVeVUOlv6fmoCpXOpWyt4y765MoDKAr%2Fp6qQuG795%2BPxMzjG9ZD3Ch7nb9HTPvIFq1I&X-Amz-Signature=cdf93abeb1b6fb245e942a85f245509e67a23122fea12b420314bbf97074c2d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLR5XANU%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvA3hoHTSuQR1hr%2Fpib6RLXZ6M4QbV7jfGpMWmlZzlwAiA9ADL3FMwtjIprkUROpl2y49hT3J9DgSpVRB8%2F8pw5Lyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM1fuOX2aR%2BvJ2LouvKtwDpK3Fgb0oahythvlbsYFOpIK7SUsaL57x0NGwleaevJ7VhGzj9JHk%2Bd9jHiryFn61fdY%2BhIktjB6lplj17sHVVqno6gVfD5iEt%2BCFBtJ%2BEgz9Xt5rfC5jJpxtlT0OlVbCDNn728Q0JgNI01FA4ac2NtprPTpfzA8ydyWzhAEM8Xm%2FAch%2FxFEbKea6%2FVkmQSXvowvdtSKb1%2Fd%2F14zRrA5HFdoa9APCTE5xcKwKBNgsY1iwiq11%2BQx1GixdDcije1xADXkdIWiPTcvYCGzD7E9lczAy%2FiVfiKmcqsWi9Y366FJMetQefKkmuwAzxQ0qxmdgayRvmT4V55wiyIyuN7YNT6f6lpLSFc6ZVYxsxGUduJlzT1vhEnwc1BTsxn0E1OzBrOB7K10j8NcLO6OCUGqinOHlzSJQRLuF24nWn7KIZF6GhSaf%2FSX2KOGYq8QTFHsqb0nfuxVHcnpyOJuUY7bSD1ROELIa0CLKhkqlB1pDO2QsOmpV%2Ff%2FlxBIeO0Qd%2FKEPjBIAgLsRSy25TgRAWElNrXsP%2BchF8R4HY6EyXGPe7SVW%2B16kXkj09xR93dIi6ZyYzL3t09vHDAj%2Bj8crmpjcVvz7INdVAKRe6A9T7uH3EZ7OnjfK46dzI4HbME0w6by3ygY6pgHBIOvUNV4hm6KEwyrPCDX%2ByvWMpoIh%2F0aKV58OEQwJxYEj2ATBp8lucZ3JOOBWDjwZaxb3CeiZ576iOusbJEOv3rCadwHOBbycAU4EwvagtM4%2B%2FMRjsuU8ljCoIkKu9a9oOad%2BqQLN7n7EOFBxjLMfA4Z3XiBlnUOOMIILsdXVfQ1lMvhDiSVptt0b2mC6E58Ue5hU%2Bvx%2FkSQe%2FKriALKrpECwRHQd&X-Amz-Signature=52107056393e9c28659724fb66ef41de5156566be5045c8559aaa34e1ec4b658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLR5XANU%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvA3hoHTSuQR1hr%2Fpib6RLXZ6M4QbV7jfGpMWmlZzlwAiA9ADL3FMwtjIprkUROpl2y49hT3J9DgSpVRB8%2F8pw5Lyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM1fuOX2aR%2BvJ2LouvKtwDpK3Fgb0oahythvlbsYFOpIK7SUsaL57x0NGwleaevJ7VhGzj9JHk%2Bd9jHiryFn61fdY%2BhIktjB6lplj17sHVVqno6gVfD5iEt%2BCFBtJ%2BEgz9Xt5rfC5jJpxtlT0OlVbCDNn728Q0JgNI01FA4ac2NtprPTpfzA8ydyWzhAEM8Xm%2FAch%2FxFEbKea6%2FVkmQSXvowvdtSKb1%2Fd%2F14zRrA5HFdoa9APCTE5xcKwKBNgsY1iwiq11%2BQx1GixdDcije1xADXkdIWiPTcvYCGzD7E9lczAy%2FiVfiKmcqsWi9Y366FJMetQefKkmuwAzxQ0qxmdgayRvmT4V55wiyIyuN7YNT6f6lpLSFc6ZVYxsxGUduJlzT1vhEnwc1BTsxn0E1OzBrOB7K10j8NcLO6OCUGqinOHlzSJQRLuF24nWn7KIZF6GhSaf%2FSX2KOGYq8QTFHsqb0nfuxVHcnpyOJuUY7bSD1ROELIa0CLKhkqlB1pDO2QsOmpV%2Ff%2FlxBIeO0Qd%2FKEPjBIAgLsRSy25TgRAWElNrXsP%2BchF8R4HY6EyXGPe7SVW%2B16kXkj09xR93dIi6ZyYzL3t09vHDAj%2Bj8crmpjcVvz7INdVAKRe6A9T7uH3EZ7OnjfK46dzI4HbME0w6by3ygY6pgHBIOvUNV4hm6KEwyrPCDX%2ByvWMpoIh%2F0aKV58OEQwJxYEj2ATBp8lucZ3JOOBWDjwZaxb3CeiZ576iOusbJEOv3rCadwHOBbycAU4EwvagtM4%2B%2FMRjsuU8ljCoIkKu9a9oOad%2BqQLN7n7EOFBxjLMfA4Z3XiBlnUOOMIILsdXVfQ1lMvhDiSVptt0b2mC6E58Ue5hU%2Bvx%2FkSQe%2FKriALKrpECwRHQd&X-Amz-Signature=a6648fdf028155e6b8e1f8756c1dca3f4ab2cbd68d753115268b219408f2a6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLR5XANU%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvA3hoHTSuQR1hr%2Fpib6RLXZ6M4QbV7jfGpMWmlZzlwAiA9ADL3FMwtjIprkUROpl2y49hT3J9DgSpVRB8%2F8pw5Lyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM1fuOX2aR%2BvJ2LouvKtwDpK3Fgb0oahythvlbsYFOpIK7SUsaL57x0NGwleaevJ7VhGzj9JHk%2Bd9jHiryFn61fdY%2BhIktjB6lplj17sHVVqno6gVfD5iEt%2BCFBtJ%2BEgz9Xt5rfC5jJpxtlT0OlVbCDNn728Q0JgNI01FA4ac2NtprPTpfzA8ydyWzhAEM8Xm%2FAch%2FxFEbKea6%2FVkmQSXvowvdtSKb1%2Fd%2F14zRrA5HFdoa9APCTE5xcKwKBNgsY1iwiq11%2BQx1GixdDcije1xADXkdIWiPTcvYCGzD7E9lczAy%2FiVfiKmcqsWi9Y366FJMetQefKkmuwAzxQ0qxmdgayRvmT4V55wiyIyuN7YNT6f6lpLSFc6ZVYxsxGUduJlzT1vhEnwc1BTsxn0E1OzBrOB7K10j8NcLO6OCUGqinOHlzSJQRLuF24nWn7KIZF6GhSaf%2FSX2KOGYq8QTFHsqb0nfuxVHcnpyOJuUY7bSD1ROELIa0CLKhkqlB1pDO2QsOmpV%2Ff%2FlxBIeO0Qd%2FKEPjBIAgLsRSy25TgRAWElNrXsP%2BchF8R4HY6EyXGPe7SVW%2B16kXkj09xR93dIi6ZyYzL3t09vHDAj%2Bj8crmpjcVvz7INdVAKRe6A9T7uH3EZ7OnjfK46dzI4HbME0w6by3ygY6pgHBIOvUNV4hm6KEwyrPCDX%2ByvWMpoIh%2F0aKV58OEQwJxYEj2ATBp8lucZ3JOOBWDjwZaxb3CeiZ576iOusbJEOv3rCadwHOBbycAU4EwvagtM4%2B%2FMRjsuU8ljCoIkKu9a9oOad%2BqQLN7n7EOFBxjLMfA4Z3XiBlnUOOMIILsdXVfQ1lMvhDiSVptt0b2mC6E58Ue5hU%2Bvx%2FkSQe%2FKriALKrpECwRHQd&X-Amz-Signature=139d32661863eb139d28c7092a515db064679721732893606d6bc51f879b6b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWW6MFWS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuypNtytGbvJ2FHXiM3anHMY%2FJnM90ErdnduV%2FEDnS5AiA%2BN5o0PUmS1grSG19Km41twB5X3OKPH%2FJ1wiK3lCNs2yr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM0zTAHTLS8F98mobhKtwDGGpZxZHhkji3yXfer7Ei7VThA6z4AZwxSINxe6heltMzSl8RfP86NCf52tuOX6QkyGOQ73l5GAoSHugkXeM1jK2sJsvN%2BQTzkX%2FReRfu9YudH0xJb3EWrh2D4%2F0hto7Nd4jdGY7vcmcXWpKiBfT7sBfVejGM5IrpmmI7RM96oLonKpH1uRf8SO8Hx9%2BuR174soK2QPjz5LfpWF8D5%2FjCSp%2FuKp4pvV0FKcdrTQHidJagMe93Ed5XgyBgGW15M%2Fn22rk0VM556xeqTrhoJpVv087hnmntmAnY6uSalgGzNzNCza73D%2FgHZ%2FhJ9JAhJcswOq0waN4RDfygpMmIk62MQMNLhp1qETRmWX%2Fc6jM73sAbF7XBLHwk6jgjZ0PFxZQxsmlz1DaoFDArSIdA7u8Bil2t%2BrydyHL21n6nk6RJPEsrW8IpZ8bEVSjeab5HUgyTvQWaaJnQVuRdarCYE03yZTkX2Uvk%2F76EC8Lyon%2FwSfFwT3gEBdaFB8Pq%2FkSJQYkSaRiLWx1f%2FQ2at%2Bp18PKdQSfExlZlJuscTiXBSOnx7RQ3g1UKz5KPhF3GY%2B1DVM3LTskS7yOP5TsS%2FdmPRzRRIZShz77okxB52QnHnhvPNMdKCJc%2FZqRBwQrtk4Mwz8K3ygY6pgEMfdKO9Q7PAEHrMBcxqoKNcqeT5VJei%2ByCztiwuPOkPznpNtDu1FFyX9Nqw0%2BAM3i5iZSS9mAnjGTtMjnd1rROVYbAly63f73F%2BlaizS%2BDD3ZVHdjIo%2Bo1X8vXbm7rrd%2BjYMdxW%2Fw%2BkTpY7v4sjfHhxcgqSJd2WmZOxGdOMMkmHcu6%2F0hCXPrnOEC3NhI6m%2Frd6NBSaPT5w21rz0jye4AeAjE3IWB8&X-Amz-Signature=3c8ed503bb1cbdb95f6a4203d99c8dad8757cf0bce33751077f3d969fc54a62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWW6MFWS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuypNtytGbvJ2FHXiM3anHMY%2FJnM90ErdnduV%2FEDnS5AiA%2BN5o0PUmS1grSG19Km41twB5X3OKPH%2FJ1wiK3lCNs2yr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM0zTAHTLS8F98mobhKtwDGGpZxZHhkji3yXfer7Ei7VThA6z4AZwxSINxe6heltMzSl8RfP86NCf52tuOX6QkyGOQ73l5GAoSHugkXeM1jK2sJsvN%2BQTzkX%2FReRfu9YudH0xJb3EWrh2D4%2F0hto7Nd4jdGY7vcmcXWpKiBfT7sBfVejGM5IrpmmI7RM96oLonKpH1uRf8SO8Hx9%2BuR174soK2QPjz5LfpWF8D5%2FjCSp%2FuKp4pvV0FKcdrTQHidJagMe93Ed5XgyBgGW15M%2Fn22rk0VM556xeqTrhoJpVv087hnmntmAnY6uSalgGzNzNCza73D%2FgHZ%2FhJ9JAhJcswOq0waN4RDfygpMmIk62MQMNLhp1qETRmWX%2Fc6jM73sAbF7XBLHwk6jgjZ0PFxZQxsmlz1DaoFDArSIdA7u8Bil2t%2BrydyHL21n6nk6RJPEsrW8IpZ8bEVSjeab5HUgyTvQWaaJnQVuRdarCYE03yZTkX2Uvk%2F76EC8Lyon%2FwSfFwT3gEBdaFB8Pq%2FkSJQYkSaRiLWx1f%2FQ2at%2Bp18PKdQSfExlZlJuscTiXBSOnx7RQ3g1UKz5KPhF3GY%2B1DVM3LTskS7yOP5TsS%2FdmPRzRRIZShz77okxB52QnHnhvPNMdKCJc%2FZqRBwQrtk4Mwz8K3ygY6pgEMfdKO9Q7PAEHrMBcxqoKNcqeT5VJei%2ByCztiwuPOkPznpNtDu1FFyX9Nqw0%2BAM3i5iZSS9mAnjGTtMjnd1rROVYbAly63f73F%2BlaizS%2BDD3ZVHdjIo%2Bo1X8vXbm7rrd%2BjYMdxW%2Fw%2BkTpY7v4sjfHhxcgqSJd2WmZOxGdOMMkmHcu6%2F0hCXPrnOEC3NhI6m%2Frd6NBSaPT5w21rz0jye4AeAjE3IWB8&X-Amz-Signature=1c9c2f0e349fccf73fddc4154ff79e76f6d045c726723095e07bac7e50a6d69d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOEVCDE%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWL13nM0sq4w5YlQE%2FYbX7EitNSlzdP1jkodDioUXaWAiEA%2BFZosqUgs6KtR4D6I%2B2ba9TpA8JokGTpm3IMO4zG3YQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEmvOvFdTPrHo%2BdukSrcA6upjue%2F54xonVrkJjb1CWSUM%2B6XV0FC%2FGqAa8S7XqaL%2FoO9j337yNqL7S7Lfx9l%2BnF%2Fkfw82WHbz6sRS6xLLP2F8xEH03G%2Fte99RQS%2BE6pmELCFmCKXOZwdu8N33apWEiC%2BijerDoSKRnD4kgMMUT6%2BE3grQk7jZlSI9VmiFHTh%2FEjykaTyhzy9S%2FHESvdXYFvzufKLtnzxFboDNNvdzgeUVilKcs4bJtUYwENm%2B68uwUgccUlrcKwV5Kn03KRSAP7n6KjxBHM4mCUVJdi9SoUo%2BiNsG5NJLOfNlv7V0PX9G8PFu6hL4p%2FfO0Q8l9SzyianMqEamfLvQ5SZhjYZF8FTEn5tfGtBhRutH0ekElB55xIjRb86g5eJS15O5kdWLOvrlIxiPx8GNryGTOxIFND1euF1XKFDxc8Ot4wiTTrDdI%2Feb652EqPVXkin7dQfBxxKVJoia937tLq%2BeKdrWaga2obsnh%2FTj%2B7PZmeDprK84l3joSFvPC8%2FXsb414IKWRxNfZRLvb0AhxLhf2ca3xRjnHmQGhpbeVhzRK%2FmYQ4YbEZvcARSxr9dHkmR2QZaOhcN1Tevey54idpI91B7xd6m9RPTuOLYcS8KXW0FndOXo9%2F6cU2%2BjQAih4NJMOi%2Bt8oGOqUBW4ofOh05IXBn2PaqTwDJ0FTdEzYDE1GbRLMcFBkE3%2F2KDWnqsNW%2FskP2ZGQUCTrSxpaEXHgfA6j1GqopgjZTGT2sA%2Fsc1c5Va%2Bby5MBxaBuEfbKRGL1e8IUDHHXMyShfB4JcRdydsi%2B%2FGu6t%2B8VoBnC0WlOrtwHO6%2F%2FizN3MtnuWtzEBIgmpP8QuSRfX6YhgRcl0ssOANQIz%2BwF8A8eiQnibWDZr&X-Amz-Signature=6da304640d44763c21c8dbf6fb1f6dbe7d7877abc629c4eb6bbb45c406f8ecb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOEVCDE%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWL13nM0sq4w5YlQE%2FYbX7EitNSlzdP1jkodDioUXaWAiEA%2BFZosqUgs6KtR4D6I%2B2ba9TpA8JokGTpm3IMO4zG3YQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEmvOvFdTPrHo%2BdukSrcA6upjue%2F54xonVrkJjb1CWSUM%2B6XV0FC%2FGqAa8S7XqaL%2FoO9j337yNqL7S7Lfx9l%2BnF%2Fkfw82WHbz6sRS6xLLP2F8xEH03G%2Fte99RQS%2BE6pmELCFmCKXOZwdu8N33apWEiC%2BijerDoSKRnD4kgMMUT6%2BE3grQk7jZlSI9VmiFHTh%2FEjykaTyhzy9S%2FHESvdXYFvzufKLtnzxFboDNNvdzgeUVilKcs4bJtUYwENm%2B68uwUgccUlrcKwV5Kn03KRSAP7n6KjxBHM4mCUVJdi9SoUo%2BiNsG5NJLOfNlv7V0PX9G8PFu6hL4p%2FfO0Q8l9SzyianMqEamfLvQ5SZhjYZF8FTEn5tfGtBhRutH0ekElB55xIjRb86g5eJS15O5kdWLOvrlIxiPx8GNryGTOxIFND1euF1XKFDxc8Ot4wiTTrDdI%2Feb652EqPVXkin7dQfBxxKVJoia937tLq%2BeKdrWaga2obsnh%2FTj%2B7PZmeDprK84l3joSFvPC8%2FXsb414IKWRxNfZRLvb0AhxLhf2ca3xRjnHmQGhpbeVhzRK%2FmYQ4YbEZvcARSxr9dHkmR2QZaOhcN1Tevey54idpI91B7xd6m9RPTuOLYcS8KXW0FndOXo9%2F6cU2%2BjQAih4NJMOi%2Bt8oGOqUBW4ofOh05IXBn2PaqTwDJ0FTdEzYDE1GbRLMcFBkE3%2F2KDWnqsNW%2FskP2ZGQUCTrSxpaEXHgfA6j1GqopgjZTGT2sA%2Fsc1c5Va%2Bby5MBxaBuEfbKRGL1e8IUDHHXMyShfB4JcRdydsi%2B%2FGu6t%2B8VoBnC0WlOrtwHO6%2F%2FizN3MtnuWtzEBIgmpP8QuSRfX6YhgRcl0ssOANQIz%2BwF8A8eiQnibWDZr&X-Amz-Signature=e2b4ff43c24e0055dd42350693919a881ab665c3e7f6db3b0e80a02a6b0a2dd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOEVCDE%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWL13nM0sq4w5YlQE%2FYbX7EitNSlzdP1jkodDioUXaWAiEA%2BFZosqUgs6KtR4D6I%2B2ba9TpA8JokGTpm3IMO4zG3YQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEmvOvFdTPrHo%2BdukSrcA6upjue%2F54xonVrkJjb1CWSUM%2B6XV0FC%2FGqAa8S7XqaL%2FoO9j337yNqL7S7Lfx9l%2BnF%2Fkfw82WHbz6sRS6xLLP2F8xEH03G%2Fte99RQS%2BE6pmELCFmCKXOZwdu8N33apWEiC%2BijerDoSKRnD4kgMMUT6%2BE3grQk7jZlSI9VmiFHTh%2FEjykaTyhzy9S%2FHESvdXYFvzufKLtnzxFboDNNvdzgeUVilKcs4bJtUYwENm%2B68uwUgccUlrcKwV5Kn03KRSAP7n6KjxBHM4mCUVJdi9SoUo%2BiNsG5NJLOfNlv7V0PX9G8PFu6hL4p%2FfO0Q8l9SzyianMqEamfLvQ5SZhjYZF8FTEn5tfGtBhRutH0ekElB55xIjRb86g5eJS15O5kdWLOvrlIxiPx8GNryGTOxIFND1euF1XKFDxc8Ot4wiTTrDdI%2Feb652EqPVXkin7dQfBxxKVJoia937tLq%2BeKdrWaga2obsnh%2FTj%2B7PZmeDprK84l3joSFvPC8%2FXsb414IKWRxNfZRLvb0AhxLhf2ca3xRjnHmQGhpbeVhzRK%2FmYQ4YbEZvcARSxr9dHkmR2QZaOhcN1Tevey54idpI91B7xd6m9RPTuOLYcS8KXW0FndOXo9%2F6cU2%2BjQAih4NJMOi%2Bt8oGOqUBW4ofOh05IXBn2PaqTwDJ0FTdEzYDE1GbRLMcFBkE3%2F2KDWnqsNW%2FskP2ZGQUCTrSxpaEXHgfA6j1GqopgjZTGT2sA%2Fsc1c5Va%2Bby5MBxaBuEfbKRGL1e8IUDHHXMyShfB4JcRdydsi%2B%2FGu6t%2B8VoBnC0WlOrtwHO6%2F%2FizN3MtnuWtzEBIgmpP8QuSRfX6YhgRcl0ssOANQIz%2BwF8A8eiQnibWDZr&X-Amz-Signature=38e319f5b557425c8625b13f7c0cba29fb5cd11724a0674f2a844b34303d38bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOEVCDE%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWL13nM0sq4w5YlQE%2FYbX7EitNSlzdP1jkodDioUXaWAiEA%2BFZosqUgs6KtR4D6I%2B2ba9TpA8JokGTpm3IMO4zG3YQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEmvOvFdTPrHo%2BdukSrcA6upjue%2F54xonVrkJjb1CWSUM%2B6XV0FC%2FGqAa8S7XqaL%2FoO9j337yNqL7S7Lfx9l%2BnF%2Fkfw82WHbz6sRS6xLLP2F8xEH03G%2Fte99RQS%2BE6pmELCFmCKXOZwdu8N33apWEiC%2BijerDoSKRnD4kgMMUT6%2BE3grQk7jZlSI9VmiFHTh%2FEjykaTyhzy9S%2FHESvdXYFvzufKLtnzxFboDNNvdzgeUVilKcs4bJtUYwENm%2B68uwUgccUlrcKwV5Kn03KRSAP7n6KjxBHM4mCUVJdi9SoUo%2BiNsG5NJLOfNlv7V0PX9G8PFu6hL4p%2FfO0Q8l9SzyianMqEamfLvQ5SZhjYZF8FTEn5tfGtBhRutH0ekElB55xIjRb86g5eJS15O5kdWLOvrlIxiPx8GNryGTOxIFND1euF1XKFDxc8Ot4wiTTrDdI%2Feb652EqPVXkin7dQfBxxKVJoia937tLq%2BeKdrWaga2obsnh%2FTj%2B7PZmeDprK84l3joSFvPC8%2FXsb414IKWRxNfZRLvb0AhxLhf2ca3xRjnHmQGhpbeVhzRK%2FmYQ4YbEZvcARSxr9dHkmR2QZaOhcN1Tevey54idpI91B7xd6m9RPTuOLYcS8KXW0FndOXo9%2F6cU2%2BjQAih4NJMOi%2Bt8oGOqUBW4ofOh05IXBn2PaqTwDJ0FTdEzYDE1GbRLMcFBkE3%2F2KDWnqsNW%2FskP2ZGQUCTrSxpaEXHgfA6j1GqopgjZTGT2sA%2Fsc1c5Va%2Bby5MBxaBuEfbKRGL1e8IUDHHXMyShfB4JcRdydsi%2B%2FGu6t%2B8VoBnC0WlOrtwHO6%2F%2FizN3MtnuWtzEBIgmpP8QuSRfX6YhgRcl0ssOANQIz%2BwF8A8eiQnibWDZr&X-Amz-Signature=9d42a3ab48f21dca644a5c49db31a2b541140f193035c82dda6b52da7c4394ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOEVCDE%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWL13nM0sq4w5YlQE%2FYbX7EitNSlzdP1jkodDioUXaWAiEA%2BFZosqUgs6KtR4D6I%2B2ba9TpA8JokGTpm3IMO4zG3YQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEmvOvFdTPrHo%2BdukSrcA6upjue%2F54xonVrkJjb1CWSUM%2B6XV0FC%2FGqAa8S7XqaL%2FoO9j337yNqL7S7Lfx9l%2BnF%2Fkfw82WHbz6sRS6xLLP2F8xEH03G%2Fte99RQS%2BE6pmELCFmCKXOZwdu8N33apWEiC%2BijerDoSKRnD4kgMMUT6%2BE3grQk7jZlSI9VmiFHTh%2FEjykaTyhzy9S%2FHESvdXYFvzufKLtnzxFboDNNvdzgeUVilKcs4bJtUYwENm%2B68uwUgccUlrcKwV5Kn03KRSAP7n6KjxBHM4mCUVJdi9SoUo%2BiNsG5NJLOfNlv7V0PX9G8PFu6hL4p%2FfO0Q8l9SzyianMqEamfLvQ5SZhjYZF8FTEn5tfGtBhRutH0ekElB55xIjRb86g5eJS15O5kdWLOvrlIxiPx8GNryGTOxIFND1euF1XKFDxc8Ot4wiTTrDdI%2Feb652EqPVXkin7dQfBxxKVJoia937tLq%2BeKdrWaga2obsnh%2FTj%2B7PZmeDprK84l3joSFvPC8%2FXsb414IKWRxNfZRLvb0AhxLhf2ca3xRjnHmQGhpbeVhzRK%2FmYQ4YbEZvcARSxr9dHkmR2QZaOhcN1Tevey54idpI91B7xd6m9RPTuOLYcS8KXW0FndOXo9%2F6cU2%2BjQAih4NJMOi%2Bt8oGOqUBW4ofOh05IXBn2PaqTwDJ0FTdEzYDE1GbRLMcFBkE3%2F2KDWnqsNW%2FskP2ZGQUCTrSxpaEXHgfA6j1GqopgjZTGT2sA%2Fsc1c5Va%2Bby5MBxaBuEfbKRGL1e8IUDHHXMyShfB4JcRdydsi%2B%2FGu6t%2B8VoBnC0WlOrtwHO6%2F%2FizN3MtnuWtzEBIgmpP8QuSRfX6YhgRcl0ssOANQIz%2BwF8A8eiQnibWDZr&X-Amz-Signature=83872df19678f9df681cabc82ad0c45ef024fd8b95ca3d250db96918f962d580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UACLLTMT%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T040525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIAMPddeFXq5VthEOhz5NT%2FXHUbNH3yfTuADyIAdemJGYAh8%2FoR75o4yrdCsOzjQ5omsUtpPAy%2BcrSR8pS%2FZ2kDNnKv8DCEoQABoMNjM3NDIzMTgzODA1IgzmiReONu3OuMGraNMq3ANy6KOGjdrlQd2rUNU3FTg%2B4XY8E1Do59uLsLVwrjzui0Py1JEw%2FLj%2FdVi3H3F8qkZ6XdUEYnyq3hXESO80IgJSFNZKaTgchzQ3HkYrO0El9Cls6n%2BXPjY5He%2FmHS2vBwz%2BOJnVUp6swM4%2BRejxgaFzzQjZkEsjYCQBhzSq3olT8HuDPEzuBzLsMqZxzgmAI2YozW65fE4o%2FFz1%2FOAMMkzwY4N70KTF814c8FsVV4Mf7APh%2BkYuqDQw6b1G1nzSlt02%2FeVFi52zCAUdyjy3ihCr9X34LjOjW04E7jum%2Bg0OxP1y%2FSY5qoQNwFzvJAUBdbUVRDo1d%2FtzH8Y8qiGDyjCV4%2BDOrS3A%2BdXjdP0z%2F2R4HmR7Xaf8yI2HGvpi7XFgCDaK0w4%2BOLhHmwymieSVD4yfEe%2FQms3MkR1xeFOSBYA803Z7c%2FOu88PCgF1jWww7nkzTP4fk%2BMbLp5AfwndgAIDwLd8KxYgCOuAo1sDoFLvr6Dbq7fLfQNt5aYxIp9NZ49dKPiatGozhb2oqVGgVt66KlrzeoeuJmN1m%2BbtGNn2mRg7PeALccoR%2FljIJE9tQWMugibt3B3xbNVD4lp131PFmW7eRiuZPLkoFzHHNmoDmvSTKg3qQ1ML3niqEsTCgxbfKBjqnAd8mM5TVwKUmP0gOQ5gwBMgG1v4i3Dw7g%2B1CbG0LPfD32IaaDpd9MinJPjait3CQODTZx%2FIMl3uF02L4rihtNnsSSgKNlHkMygrJe24yWsRO20Hg8Pd6BZeJUiJ%2Fd2ZEhrp7C708AP2rAmQ07H7sgTz3M9XtS0aLmW8D5ZT0EUGx29zIOcZOFAVOAYQa9L%2BMP3odJoE5dpwO%2FPOgkx5TJjc6lDzBW63z&X-Amz-Signature=adcf5f70d41fb9697e3993f5caf920234c6c7528734da3aaf943c7516c8f006b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

