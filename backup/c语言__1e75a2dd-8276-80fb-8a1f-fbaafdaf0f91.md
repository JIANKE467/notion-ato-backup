
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOU3PEH%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnMu9tGtb5y6RtyWO8uoG8JkxymGDwSexrM476tTUqFAiEA5AMwytq1SuEHehecWOu8rVfm6VBeKRk3iAtZfhkRztcq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJkFpFASCb4CsnZJMyrcA53iihip0WzGlMv6EbRrE1NtIb4EEPF9jAPBFriVLVp%2BN0XtgA5uSmGceXFpa7Nihf%2BjNss6ZEzNo2iEzF6VQDOdD3QfaffNBEuLZwLU%2FHrlisdz4KQUr2CII4nUID53tNmU0FyBFusOWdbN6%2FNbCL5Ge%2BcOHZt8q0gaUFOgRQOErDd8tROtSAS5va9q3KdNGjFBjVnodWmHRWiLXsd1k%2FftVCcEbya8AohYpgACjOjxbkKBHa6Awhl8MxTRo4X%2Fm6Ax8N6Dy%2FqSo63GxZmsTgE011uAd47a73aE07Hkuo6%2Ff2phA8oOI6M87NDhSeJUhDiGkC4MtBVhhTztWhseRWmqeBunOq2t2lUekXt6f5VbUf%2BWoOHPHvBx4L72c1fKX6IftIjx2Zwi0Sj2pYYHLuFoybFQafyrEeKCsjWYB3y0sPLEBobHr4KHK5mx7xQIxjtUx1CKFQ78e%2F9J1q29iaKHmz3HrmtYC4mGIUy%2FlSMTDmXIMywAepQFc73CpsvlFnqyZ1Yj0jOxaIMl4GhmqvKFoxWrg7JTjprwnYNi6LfteloF443Y7rzAL45%2BMxnR6Od5tr9yLkExluYCXzXNu7XLLWXKKQ9MIIA8RwGYD8kR%2FVkt2WDyYgGGfH7PMKT8q8sGOqUBN5Uvkj6icu%2B8YfLv2WO3xv29KyGKbHM5bSoxJ%2F8rAEX8FAlAt0nT%2FpyCDyzPwz%2FUQKaFO9bfQFwZ6kFyaf0iiH0t7pogSDBWE5hoWDi8fri1Zdiwrr%2FwvcSM202%2BGu7mFGZROf1qapJCPbhLJZFHTNyH%2FNiYQ5nEJbs0Jcse6pXAe%2BWMEQI2LPiF%2FKdilpW06Sd7orp7vG6DsfTC%2B5AkL1E0cE8V&X-Amz-Signature=05e9c8b97da640b8af9519cb334ded0697ce18df91a1905c8ecc56e439f6e4d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF2IVNPR%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe%2BCgB8M0mppphWQi3nrIWWfvkSa68xXYtoramuKCh%2FQIhAMCHKFIPLlBGXzYLk9CB1NkA9hWtS3WuZr6nE4dWemfCKv8DCFwQABoMNjM3NDIzMTgzODA1IgzDouQfi2a%2Bx4LNlzgq3APt5c9eTEpY%2Bb725gf74YbevZzzZopP4LZ500TxGW1nHflPoL5PCx1bYP6h31ilXKi5F2ach5l%2FMwb2AwulHPPy246U9ABQD4jcoUGUcZfdFmZnuor%2Fkph4BdLWXLAqfsmyypBeBjOl4cCZJN%2FjqfqpBW6K2K8KXcJrZfL5pARHu%2FFP8leJWNQpbjkhNyigQyePA0srGN9qxd9gb%2BNFZW%2Bk%2Fzp9XCyCJPzZYF30hfNRpHWlBjjAomwjUh2nFbxNEwxjBgBTS0yMRF3E6yDCa6AgqDAUlUALMUiqrecTlraGXoma0I8Gqa6zlrzj7CmDt%2BM7478vD2Ih3tjPPcMGozlEeAm5hdfMZx57pVU4WNltTvslozcxLj0R9nlVXBhBEcNeTK%2Bacwh0k7oj0Gx6W4olN6%2FIaCQbMV9XDX2xqKzlPlk3UvCw3Cj%2F6sicZ69RSwRt6kRMfFJ%2FuntZmnDUM1%2Bd6gL1x8ZtsQBMcMPIkTXCjNZ%2F0p%2BGZqID6vB6%2FNaZn2PlHNECFgHBxg7Ip4jRdHnE1j%2BpdhXeIZV5jlpplrSOZoDy9ZRcnR9HxcmUI2xWBN1KMi7Ktl0qJBaC32jvNjPDB3Fy6tNFrJnBlTQZqcRI%2B0mhSa1W08cxq1MkCjC0%2FKvLBjqkAVNc2%2BWZjdsXHQVzvR1fYMcjIJUl628hXWtxm7Me9wNpYiS9PIXNlriTOcK22DWw3xS374zPgV9MsETd%2BvjcacM%2FFWQnwc8tB6MGLh3Txb3Np7aNdSv1aqJvEXdyy%2FDBI04wR0mAqIdPuEUAMWGAQB8PvzZVExy5ecf9e2DfI%2FFqKGvULMBapb%2FCNgBKjjbNUr4t0XULKdxbVTIi3ebDZEDMDZGJ&X-Amz-Signature=fbedf67c9099489b3425ca3bb834bdcc674cd83673922d400e1a2fb4e9752c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF2IVNPR%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe%2BCgB8M0mppphWQi3nrIWWfvkSa68xXYtoramuKCh%2FQIhAMCHKFIPLlBGXzYLk9CB1NkA9hWtS3WuZr6nE4dWemfCKv8DCFwQABoMNjM3NDIzMTgzODA1IgzDouQfi2a%2Bx4LNlzgq3APt5c9eTEpY%2Bb725gf74YbevZzzZopP4LZ500TxGW1nHflPoL5PCx1bYP6h31ilXKi5F2ach5l%2FMwb2AwulHPPy246U9ABQD4jcoUGUcZfdFmZnuor%2Fkph4BdLWXLAqfsmyypBeBjOl4cCZJN%2FjqfqpBW6K2K8KXcJrZfL5pARHu%2FFP8leJWNQpbjkhNyigQyePA0srGN9qxd9gb%2BNFZW%2Bk%2Fzp9XCyCJPzZYF30hfNRpHWlBjjAomwjUh2nFbxNEwxjBgBTS0yMRF3E6yDCa6AgqDAUlUALMUiqrecTlraGXoma0I8Gqa6zlrzj7CmDt%2BM7478vD2Ih3tjPPcMGozlEeAm5hdfMZx57pVU4WNltTvslozcxLj0R9nlVXBhBEcNeTK%2Bacwh0k7oj0Gx6W4olN6%2FIaCQbMV9XDX2xqKzlPlk3UvCw3Cj%2F6sicZ69RSwRt6kRMfFJ%2FuntZmnDUM1%2Bd6gL1x8ZtsQBMcMPIkTXCjNZ%2F0p%2BGZqID6vB6%2FNaZn2PlHNECFgHBxg7Ip4jRdHnE1j%2BpdhXeIZV5jlpplrSOZoDy9ZRcnR9HxcmUI2xWBN1KMi7Ktl0qJBaC32jvNjPDB3Fy6tNFrJnBlTQZqcRI%2B0mhSa1W08cxq1MkCjC0%2FKvLBjqkAVNc2%2BWZjdsXHQVzvR1fYMcjIJUl628hXWtxm7Me9wNpYiS9PIXNlriTOcK22DWw3xS374zPgV9MsETd%2BvjcacM%2FFWQnwc8tB6MGLh3Txb3Np7aNdSv1aqJvEXdyy%2FDBI04wR0mAqIdPuEUAMWGAQB8PvzZVExy5ecf9e2DfI%2FFqKGvULMBapb%2FCNgBKjjbNUr4t0XULKdxbVTIi3ebDZEDMDZGJ&X-Amz-Signature=1add833080358e2de10001bcffccee08038e9a230c048fd6a7769814b8099607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5DOI3DT%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk8YOW75mFmLNPGXTcZ33s5BjKVBA0CCSihWKJWoV1PwIhAJ52QcDMQQVVLzgNOoCo11qQWODmw2J9UpznkRBgZqgHKv8DCFwQABoMNjM3NDIzMTgzODA1IgzaArOrUOI%2BsbzJtu8q3AMunSyafVcOn8J48e%2BzkY81T8VSqaWPHApFGUPheQl%2BTC%2Bb4K7%2Ftrvw7BKZR4zi6sOZ%2B1hyqoCMXojp5rCsAo%2B5ovmDmz84XIJm6qrm6w8NBtZLWzeKXJspkT4brvAnWIH6NenjJ8hSgNGeH%2B%2B0M07wbWX7Hq1EEQgL53wvHOXxWDbgrWxmfqxVMitOkpgVOGlR7b90QBBuvBkUI%2BNJqsryHJ%2Flnc6rGrur8TfYj%2FKy9UPAy0ikWpgB%2B2egWJOUGKtvHWRRulFrRQbF6utm4QbUg001ufTu7WKCQJxlhHmypzoeMa5o0CkrH6f7OXLSrQ4RQ7JFbbSbxOjB7y3a3bkFgjU2oVLzsCRMib4A8jSpTUAO3Atg9mD34bJNOEzJNx4yJ8nEvGdoZYtid2gPPFrWVWJbhbE%2FU7h2VxK5su4IYVqhxjNbnSr%2Fx6jaIRy9tvDR0cKS0H9IkH4kMoeOfqTtqc%2BZNuNKl7F%2BW4GYWLncW9TeHo8W3ZJyE39n2pZtw3JLiiOqgcFR1B0%2FVePJXV%2BWoUtie0VcQEGpIn3BdgL6ZIo4zNft35wN2XOmUWiDvOiDe7ulFRQoja7twAzY2GSq40%2BAZ6GkAoUcI6Eqh2qnsjRvWI%2FEJAVyhPHbWjDr%2FKvLBjqkAYjwv89L9HmvquhhE1MJlIsVHv0ngs9dCO2rRnm%2FF%2FQ6uwn9P6rSSnngSdH6c%2BACmTkPjiGG1%2F07oKHvLXqpilaRTVDpgfAvfbUq%2Bj1i1Mav2UrGHfNFYMjri%2FrcetqYUOzejpAVjekQH7W0gCQG4Z3r9HHwq7NmuLdZs%2FpH9%2BVkgOAc6FB89AjRcrfRXxp%2F%2BG0u%2FRB19QdLvNwEoYRXKfOz4m6q&X-Amz-Signature=346f03e8aa1364c0a1a212ef91525bf42454a5070bd925e70780fe39dde2c5fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5DOI3DT%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk8YOW75mFmLNPGXTcZ33s5BjKVBA0CCSihWKJWoV1PwIhAJ52QcDMQQVVLzgNOoCo11qQWODmw2J9UpznkRBgZqgHKv8DCFwQABoMNjM3NDIzMTgzODA1IgzaArOrUOI%2BsbzJtu8q3AMunSyafVcOn8J48e%2BzkY81T8VSqaWPHApFGUPheQl%2BTC%2Bb4K7%2Ftrvw7BKZR4zi6sOZ%2B1hyqoCMXojp5rCsAo%2B5ovmDmz84XIJm6qrm6w8NBtZLWzeKXJspkT4brvAnWIH6NenjJ8hSgNGeH%2B%2B0M07wbWX7Hq1EEQgL53wvHOXxWDbgrWxmfqxVMitOkpgVOGlR7b90QBBuvBkUI%2BNJqsryHJ%2Flnc6rGrur8TfYj%2FKy9UPAy0ikWpgB%2B2egWJOUGKtvHWRRulFrRQbF6utm4QbUg001ufTu7WKCQJxlhHmypzoeMa5o0CkrH6f7OXLSrQ4RQ7JFbbSbxOjB7y3a3bkFgjU2oVLzsCRMib4A8jSpTUAO3Atg9mD34bJNOEzJNx4yJ8nEvGdoZYtid2gPPFrWVWJbhbE%2FU7h2VxK5su4IYVqhxjNbnSr%2Fx6jaIRy9tvDR0cKS0H9IkH4kMoeOfqTtqc%2BZNuNKl7F%2BW4GYWLncW9TeHo8W3ZJyE39n2pZtw3JLiiOqgcFR1B0%2FVePJXV%2BWoUtie0VcQEGpIn3BdgL6ZIo4zNft35wN2XOmUWiDvOiDe7ulFRQoja7twAzY2GSq40%2BAZ6GkAoUcI6Eqh2qnsjRvWI%2FEJAVyhPHbWjDr%2FKvLBjqkAYjwv89L9HmvquhhE1MJlIsVHv0ngs9dCO2rRnm%2FF%2FQ6uwn9P6rSSnngSdH6c%2BACmTkPjiGG1%2F07oKHvLXqpilaRTVDpgfAvfbUq%2Bj1i1Mav2UrGHfNFYMjri%2FrcetqYUOzejpAVjekQH7W0gCQG4Z3r9HHwq7NmuLdZs%2FpH9%2BVkgOAc6FB89AjRcrfRXxp%2F%2BG0u%2FRB19QdLvNwEoYRXKfOz4m6q&X-Amz-Signature=2172d5443f06d8c876a72a932ebed3a7d3d3d4c021962535f0ee2e6ad94d3637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5DOI3DT%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk8YOW75mFmLNPGXTcZ33s5BjKVBA0CCSihWKJWoV1PwIhAJ52QcDMQQVVLzgNOoCo11qQWODmw2J9UpznkRBgZqgHKv8DCFwQABoMNjM3NDIzMTgzODA1IgzaArOrUOI%2BsbzJtu8q3AMunSyafVcOn8J48e%2BzkY81T8VSqaWPHApFGUPheQl%2BTC%2Bb4K7%2Ftrvw7BKZR4zi6sOZ%2B1hyqoCMXojp5rCsAo%2B5ovmDmz84XIJm6qrm6w8NBtZLWzeKXJspkT4brvAnWIH6NenjJ8hSgNGeH%2B%2B0M07wbWX7Hq1EEQgL53wvHOXxWDbgrWxmfqxVMitOkpgVOGlR7b90QBBuvBkUI%2BNJqsryHJ%2Flnc6rGrur8TfYj%2FKy9UPAy0ikWpgB%2B2egWJOUGKtvHWRRulFrRQbF6utm4QbUg001ufTu7WKCQJxlhHmypzoeMa5o0CkrH6f7OXLSrQ4RQ7JFbbSbxOjB7y3a3bkFgjU2oVLzsCRMib4A8jSpTUAO3Atg9mD34bJNOEzJNx4yJ8nEvGdoZYtid2gPPFrWVWJbhbE%2FU7h2VxK5su4IYVqhxjNbnSr%2Fx6jaIRy9tvDR0cKS0H9IkH4kMoeOfqTtqc%2BZNuNKl7F%2BW4GYWLncW9TeHo8W3ZJyE39n2pZtw3JLiiOqgcFR1B0%2FVePJXV%2BWoUtie0VcQEGpIn3BdgL6ZIo4zNft35wN2XOmUWiDvOiDe7ulFRQoja7twAzY2GSq40%2BAZ6GkAoUcI6Eqh2qnsjRvWI%2FEJAVyhPHbWjDr%2FKvLBjqkAYjwv89L9HmvquhhE1MJlIsVHv0ngs9dCO2rRnm%2FF%2FQ6uwn9P6rSSnngSdH6c%2BACmTkPjiGG1%2F07oKHvLXqpilaRTVDpgfAvfbUq%2Bj1i1Mav2UrGHfNFYMjri%2FrcetqYUOzejpAVjekQH7W0gCQG4Z3r9HHwq7NmuLdZs%2FpH9%2BVkgOAc6FB89AjRcrfRXxp%2F%2BG0u%2FRB19QdLvNwEoYRXKfOz4m6q&X-Amz-Signature=e4e54220005d2c12383e44400c3e9f830e8ad052dfb3bcc1edd5cf2ffe2121f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5DOI3DT%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk8YOW75mFmLNPGXTcZ33s5BjKVBA0CCSihWKJWoV1PwIhAJ52QcDMQQVVLzgNOoCo11qQWODmw2J9UpznkRBgZqgHKv8DCFwQABoMNjM3NDIzMTgzODA1IgzaArOrUOI%2BsbzJtu8q3AMunSyafVcOn8J48e%2BzkY81T8VSqaWPHApFGUPheQl%2BTC%2Bb4K7%2Ftrvw7BKZR4zi6sOZ%2B1hyqoCMXojp5rCsAo%2B5ovmDmz84XIJm6qrm6w8NBtZLWzeKXJspkT4brvAnWIH6NenjJ8hSgNGeH%2B%2B0M07wbWX7Hq1EEQgL53wvHOXxWDbgrWxmfqxVMitOkpgVOGlR7b90QBBuvBkUI%2BNJqsryHJ%2Flnc6rGrur8TfYj%2FKy9UPAy0ikWpgB%2B2egWJOUGKtvHWRRulFrRQbF6utm4QbUg001ufTu7WKCQJxlhHmypzoeMa5o0CkrH6f7OXLSrQ4RQ7JFbbSbxOjB7y3a3bkFgjU2oVLzsCRMib4A8jSpTUAO3Atg9mD34bJNOEzJNx4yJ8nEvGdoZYtid2gPPFrWVWJbhbE%2FU7h2VxK5su4IYVqhxjNbnSr%2Fx6jaIRy9tvDR0cKS0H9IkH4kMoeOfqTtqc%2BZNuNKl7F%2BW4GYWLncW9TeHo8W3ZJyE39n2pZtw3JLiiOqgcFR1B0%2FVePJXV%2BWoUtie0VcQEGpIn3BdgL6ZIo4zNft35wN2XOmUWiDvOiDe7ulFRQoja7twAzY2GSq40%2BAZ6GkAoUcI6Eqh2qnsjRvWI%2FEJAVyhPHbWjDr%2FKvLBjqkAYjwv89L9HmvquhhE1MJlIsVHv0ngs9dCO2rRnm%2FF%2FQ6uwn9P6rSSnngSdH6c%2BACmTkPjiGG1%2F07oKHvLXqpilaRTVDpgfAvfbUq%2Bj1i1Mav2UrGHfNFYMjri%2FrcetqYUOzejpAVjekQH7W0gCQG4Z3r9HHwq7NmuLdZs%2FpH9%2BVkgOAc6FB89AjRcrfRXxp%2F%2BG0u%2FRB19QdLvNwEoYRXKfOz4m6q&X-Amz-Signature=cad84225a3b18c63a030b55c272181d9056393d2726982365b06ee5f6762d075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5DOI3DT%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk8YOW75mFmLNPGXTcZ33s5BjKVBA0CCSihWKJWoV1PwIhAJ52QcDMQQVVLzgNOoCo11qQWODmw2J9UpznkRBgZqgHKv8DCFwQABoMNjM3NDIzMTgzODA1IgzaArOrUOI%2BsbzJtu8q3AMunSyafVcOn8J48e%2BzkY81T8VSqaWPHApFGUPheQl%2BTC%2Bb4K7%2Ftrvw7BKZR4zi6sOZ%2B1hyqoCMXojp5rCsAo%2B5ovmDmz84XIJm6qrm6w8NBtZLWzeKXJspkT4brvAnWIH6NenjJ8hSgNGeH%2B%2B0M07wbWX7Hq1EEQgL53wvHOXxWDbgrWxmfqxVMitOkpgVOGlR7b90QBBuvBkUI%2BNJqsryHJ%2Flnc6rGrur8TfYj%2FKy9UPAy0ikWpgB%2B2egWJOUGKtvHWRRulFrRQbF6utm4QbUg001ufTu7WKCQJxlhHmypzoeMa5o0CkrH6f7OXLSrQ4RQ7JFbbSbxOjB7y3a3bkFgjU2oVLzsCRMib4A8jSpTUAO3Atg9mD34bJNOEzJNx4yJ8nEvGdoZYtid2gPPFrWVWJbhbE%2FU7h2VxK5su4IYVqhxjNbnSr%2Fx6jaIRy9tvDR0cKS0H9IkH4kMoeOfqTtqc%2BZNuNKl7F%2BW4GYWLncW9TeHo8W3ZJyE39n2pZtw3JLiiOqgcFR1B0%2FVePJXV%2BWoUtie0VcQEGpIn3BdgL6ZIo4zNft35wN2XOmUWiDvOiDe7ulFRQoja7twAzY2GSq40%2BAZ6GkAoUcI6Eqh2qnsjRvWI%2FEJAVyhPHbWjDr%2FKvLBjqkAYjwv89L9HmvquhhE1MJlIsVHv0ngs9dCO2rRnm%2FF%2FQ6uwn9P6rSSnngSdH6c%2BACmTkPjiGG1%2F07oKHvLXqpilaRTVDpgfAvfbUq%2Bj1i1Mav2UrGHfNFYMjri%2FrcetqYUOzejpAVjekQH7W0gCQG4Z3r9HHwq7NmuLdZs%2FpH9%2BVkgOAc6FB89AjRcrfRXxp%2F%2BG0u%2FRB19QdLvNwEoYRXKfOz4m6q&X-Amz-Signature=677d2c83b9b28b373f3e8863524ea621314bde34c18f7e2d7dce9e6cb6e786e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5DOI3DT%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk8YOW75mFmLNPGXTcZ33s5BjKVBA0CCSihWKJWoV1PwIhAJ52QcDMQQVVLzgNOoCo11qQWODmw2J9UpznkRBgZqgHKv8DCFwQABoMNjM3NDIzMTgzODA1IgzaArOrUOI%2BsbzJtu8q3AMunSyafVcOn8J48e%2BzkY81T8VSqaWPHApFGUPheQl%2BTC%2Bb4K7%2Ftrvw7BKZR4zi6sOZ%2B1hyqoCMXojp5rCsAo%2B5ovmDmz84XIJm6qrm6w8NBtZLWzeKXJspkT4brvAnWIH6NenjJ8hSgNGeH%2B%2B0M07wbWX7Hq1EEQgL53wvHOXxWDbgrWxmfqxVMitOkpgVOGlR7b90QBBuvBkUI%2BNJqsryHJ%2Flnc6rGrur8TfYj%2FKy9UPAy0ikWpgB%2B2egWJOUGKtvHWRRulFrRQbF6utm4QbUg001ufTu7WKCQJxlhHmypzoeMa5o0CkrH6f7OXLSrQ4RQ7JFbbSbxOjB7y3a3bkFgjU2oVLzsCRMib4A8jSpTUAO3Atg9mD34bJNOEzJNx4yJ8nEvGdoZYtid2gPPFrWVWJbhbE%2FU7h2VxK5su4IYVqhxjNbnSr%2Fx6jaIRy9tvDR0cKS0H9IkH4kMoeOfqTtqc%2BZNuNKl7F%2BW4GYWLncW9TeHo8W3ZJyE39n2pZtw3JLiiOqgcFR1B0%2FVePJXV%2BWoUtie0VcQEGpIn3BdgL6ZIo4zNft35wN2XOmUWiDvOiDe7ulFRQoja7twAzY2GSq40%2BAZ6GkAoUcI6Eqh2qnsjRvWI%2FEJAVyhPHbWjDr%2FKvLBjqkAYjwv89L9HmvquhhE1MJlIsVHv0ngs9dCO2rRnm%2FF%2FQ6uwn9P6rSSnngSdH6c%2BACmTkPjiGG1%2F07oKHvLXqpilaRTVDpgfAvfbUq%2Bj1i1Mav2UrGHfNFYMjri%2FrcetqYUOzejpAVjekQH7W0gCQG4Z3r9HHwq7NmuLdZs%2FpH9%2BVkgOAc6FB89AjRcrfRXxp%2F%2BG0u%2FRB19QdLvNwEoYRXKfOz4m6q&X-Amz-Signature=410a8bae3b1e3be128b6cb9977d6e60bcaa78c49d84978d369d099772b3bdf78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5DOI3DT%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk8YOW75mFmLNPGXTcZ33s5BjKVBA0CCSihWKJWoV1PwIhAJ52QcDMQQVVLzgNOoCo11qQWODmw2J9UpznkRBgZqgHKv8DCFwQABoMNjM3NDIzMTgzODA1IgzaArOrUOI%2BsbzJtu8q3AMunSyafVcOn8J48e%2BzkY81T8VSqaWPHApFGUPheQl%2BTC%2Bb4K7%2Ftrvw7BKZR4zi6sOZ%2B1hyqoCMXojp5rCsAo%2B5ovmDmz84XIJm6qrm6w8NBtZLWzeKXJspkT4brvAnWIH6NenjJ8hSgNGeH%2B%2B0M07wbWX7Hq1EEQgL53wvHOXxWDbgrWxmfqxVMitOkpgVOGlR7b90QBBuvBkUI%2BNJqsryHJ%2Flnc6rGrur8TfYj%2FKy9UPAy0ikWpgB%2B2egWJOUGKtvHWRRulFrRQbF6utm4QbUg001ufTu7WKCQJxlhHmypzoeMa5o0CkrH6f7OXLSrQ4RQ7JFbbSbxOjB7y3a3bkFgjU2oVLzsCRMib4A8jSpTUAO3Atg9mD34bJNOEzJNx4yJ8nEvGdoZYtid2gPPFrWVWJbhbE%2FU7h2VxK5su4IYVqhxjNbnSr%2Fx6jaIRy9tvDR0cKS0H9IkH4kMoeOfqTtqc%2BZNuNKl7F%2BW4GYWLncW9TeHo8W3ZJyE39n2pZtw3JLiiOqgcFR1B0%2FVePJXV%2BWoUtie0VcQEGpIn3BdgL6ZIo4zNft35wN2XOmUWiDvOiDe7ulFRQoja7twAzY2GSq40%2BAZ6GkAoUcI6Eqh2qnsjRvWI%2FEJAVyhPHbWjDr%2FKvLBjqkAYjwv89L9HmvquhhE1MJlIsVHv0ngs9dCO2rRnm%2FF%2FQ6uwn9P6rSSnngSdH6c%2BACmTkPjiGG1%2F07oKHvLXqpilaRTVDpgfAvfbUq%2Bj1i1Mav2UrGHfNFYMjri%2FrcetqYUOzejpAVjekQH7W0gCQG4Z3r9HHwq7NmuLdZs%2FpH9%2BVkgOAc6FB89AjRcrfRXxp%2F%2BG0u%2FRB19QdLvNwEoYRXKfOz4m6q&X-Amz-Signature=dd185cab6645587dc359491af3673c1f6607b7a915d2e7e7d860faa43499caf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVY7FYNR%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm%2BGjOQ9FmKEpRCxB%2BbqQ8HYRbb2IYqB2luAdwW3005QIhALZfmHPxtscJ4YxpBfo4GemicyDkrkQpQyBENMjj5DOgKv8DCFwQABoMNjM3NDIzMTgzODA1Igz0e2jcRj4WFrn1zmoq3APDAwgexWltdVrbLC97hwy%2BMTjbYgd1TTLkSaWgRQXhldaz69T5%2FbpG76MjnhpMuZylnlXD0oN9%2F28StsWzHswlbih%2Fp8UbkwLRY89ur4QRJjxycuKXUGqw6mz5Tebn8Ryd%2BnJgiKbw6upHQdhKwNMDFTTSBT%2BJZu4A2WVesPkvXvepx0yFcHzqUassUswQk21gA3%2FUxyaGFv8vu7AXCIDEkq3G91FhixXywHZuVkG5%2FoS19pMYhq1%2BVbz0DSVWCdcM5EvJKndZnqzYb5hcoHwO7l9Y0rub27TolVEOadOGcZALaGHpXgU1mSmlfb6aCSywper78WJErl7ViPnZlFOVov8yolEIx33%2FR3CQ47%2FJwo5erbh03sClAjJGaUXCS%2Btzn3oauPYMkpTFcDan7gqm4htYNS6k7dALGjIwFJz0kIpWpNftX8d1RBDPKGe%2F1EkcEX%2BH4PjPZ4tffFrEA5uUa%2FJHVnYHJDHdmLBkmnsh2nbWLbeayjsAPgpNhfvQV2F3zl81yqR3pdqTM6jkQDS8MVpcWiO5w6DitIK9qKXv8SC0Kf6cD%2FkC%2BcMs57dNy2spDhYBa%2Fes3NdtggcTD01v3aVx%2F3LYBuk%2Fi5lF%2Fs7ZyvMyMV0X2%2F42%2B1hRfDDP%2FKvLBjqkAWwyzIb%2FNBZuqCggZRvovjKl%2BdJ9tKGI8KtY2k4s1FV%2Fo5R15uop11NrylAR42JPledItrxhtQS%2BdkTPPnbZI29zhHpPweIruJ2aIjC877Q%2F2wWZMRSAF0LlnkXbi83DGUyuyV%2B5FSsFnLx6ECJW55hArgHAB1WoDtS%2FBZiWxcHhmc0Q%2FWEwV4Ur4y0U2qTqZP2CTH2Jh5BRQU%2BHSdOKanKSYOdR&X-Amz-Signature=3b150fcc4ee56d38c44a76a40f7a3f39f118037545c3b5e91b4f55cc3d576962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVY7FYNR%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm%2BGjOQ9FmKEpRCxB%2BbqQ8HYRbb2IYqB2luAdwW3005QIhALZfmHPxtscJ4YxpBfo4GemicyDkrkQpQyBENMjj5DOgKv8DCFwQABoMNjM3NDIzMTgzODA1Igz0e2jcRj4WFrn1zmoq3APDAwgexWltdVrbLC97hwy%2BMTjbYgd1TTLkSaWgRQXhldaz69T5%2FbpG76MjnhpMuZylnlXD0oN9%2F28StsWzHswlbih%2Fp8UbkwLRY89ur4QRJjxycuKXUGqw6mz5Tebn8Ryd%2BnJgiKbw6upHQdhKwNMDFTTSBT%2BJZu4A2WVesPkvXvepx0yFcHzqUassUswQk21gA3%2FUxyaGFv8vu7AXCIDEkq3G91FhixXywHZuVkG5%2FoS19pMYhq1%2BVbz0DSVWCdcM5EvJKndZnqzYb5hcoHwO7l9Y0rub27TolVEOadOGcZALaGHpXgU1mSmlfb6aCSywper78WJErl7ViPnZlFOVov8yolEIx33%2FR3CQ47%2FJwo5erbh03sClAjJGaUXCS%2Btzn3oauPYMkpTFcDan7gqm4htYNS6k7dALGjIwFJz0kIpWpNftX8d1RBDPKGe%2F1EkcEX%2BH4PjPZ4tffFrEA5uUa%2FJHVnYHJDHdmLBkmnsh2nbWLbeayjsAPgpNhfvQV2F3zl81yqR3pdqTM6jkQDS8MVpcWiO5w6DitIK9qKXv8SC0Kf6cD%2FkC%2BcMs57dNy2spDhYBa%2Fes3NdtggcTD01v3aVx%2F3LYBuk%2Fi5lF%2Fs7ZyvMyMV0X2%2F42%2B1hRfDDP%2FKvLBjqkAWwyzIb%2FNBZuqCggZRvovjKl%2BdJ9tKGI8KtY2k4s1FV%2Fo5R15uop11NrylAR42JPledItrxhtQS%2BdkTPPnbZI29zhHpPweIruJ2aIjC877Q%2F2wWZMRSAF0LlnkXbi83DGUyuyV%2B5FSsFnLx6ECJW55hArgHAB1WoDtS%2FBZiWxcHhmc0Q%2FWEwV4Ur4y0U2qTqZP2CTH2Jh5BRQU%2BHSdOKanKSYOdR&X-Amz-Signature=833fbff25f6a8f77cdd905fba446c61302d0d8393f19600b8d6ba06a38fb1e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVY7FYNR%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm%2BGjOQ9FmKEpRCxB%2BbqQ8HYRbb2IYqB2luAdwW3005QIhALZfmHPxtscJ4YxpBfo4GemicyDkrkQpQyBENMjj5DOgKv8DCFwQABoMNjM3NDIzMTgzODA1Igz0e2jcRj4WFrn1zmoq3APDAwgexWltdVrbLC97hwy%2BMTjbYgd1TTLkSaWgRQXhldaz69T5%2FbpG76MjnhpMuZylnlXD0oN9%2F28StsWzHswlbih%2Fp8UbkwLRY89ur4QRJjxycuKXUGqw6mz5Tebn8Ryd%2BnJgiKbw6upHQdhKwNMDFTTSBT%2BJZu4A2WVesPkvXvepx0yFcHzqUassUswQk21gA3%2FUxyaGFv8vu7AXCIDEkq3G91FhixXywHZuVkG5%2FoS19pMYhq1%2BVbz0DSVWCdcM5EvJKndZnqzYb5hcoHwO7l9Y0rub27TolVEOadOGcZALaGHpXgU1mSmlfb6aCSywper78WJErl7ViPnZlFOVov8yolEIx33%2FR3CQ47%2FJwo5erbh03sClAjJGaUXCS%2Btzn3oauPYMkpTFcDan7gqm4htYNS6k7dALGjIwFJz0kIpWpNftX8d1RBDPKGe%2F1EkcEX%2BH4PjPZ4tffFrEA5uUa%2FJHVnYHJDHdmLBkmnsh2nbWLbeayjsAPgpNhfvQV2F3zl81yqR3pdqTM6jkQDS8MVpcWiO5w6DitIK9qKXv8SC0Kf6cD%2FkC%2BcMs57dNy2spDhYBa%2Fes3NdtggcTD01v3aVx%2F3LYBuk%2Fi5lF%2Fs7ZyvMyMV0X2%2F42%2B1hRfDDP%2FKvLBjqkAWwyzIb%2FNBZuqCggZRvovjKl%2BdJ9tKGI8KtY2k4s1FV%2Fo5R15uop11NrylAR42JPledItrxhtQS%2BdkTPPnbZI29zhHpPweIruJ2aIjC877Q%2F2wWZMRSAF0LlnkXbi83DGUyuyV%2B5FSsFnLx6ECJW55hArgHAB1WoDtS%2FBZiWxcHhmc0Q%2FWEwV4Ur4y0U2qTqZP2CTH2Jh5BRQU%2BHSdOKanKSYOdR&X-Amz-Signature=a2a5dbc32c66138af49bd13fda451acc93dd34a9e37b9acef54b1f108b3b7aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVY7FYNR%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm%2BGjOQ9FmKEpRCxB%2BbqQ8HYRbb2IYqB2luAdwW3005QIhALZfmHPxtscJ4YxpBfo4GemicyDkrkQpQyBENMjj5DOgKv8DCFwQABoMNjM3NDIzMTgzODA1Igz0e2jcRj4WFrn1zmoq3APDAwgexWltdVrbLC97hwy%2BMTjbYgd1TTLkSaWgRQXhldaz69T5%2FbpG76MjnhpMuZylnlXD0oN9%2F28StsWzHswlbih%2Fp8UbkwLRY89ur4QRJjxycuKXUGqw6mz5Tebn8Ryd%2BnJgiKbw6upHQdhKwNMDFTTSBT%2BJZu4A2WVesPkvXvepx0yFcHzqUassUswQk21gA3%2FUxyaGFv8vu7AXCIDEkq3G91FhixXywHZuVkG5%2FoS19pMYhq1%2BVbz0DSVWCdcM5EvJKndZnqzYb5hcoHwO7l9Y0rub27TolVEOadOGcZALaGHpXgU1mSmlfb6aCSywper78WJErl7ViPnZlFOVov8yolEIx33%2FR3CQ47%2FJwo5erbh03sClAjJGaUXCS%2Btzn3oauPYMkpTFcDan7gqm4htYNS6k7dALGjIwFJz0kIpWpNftX8d1RBDPKGe%2F1EkcEX%2BH4PjPZ4tffFrEA5uUa%2FJHVnYHJDHdmLBkmnsh2nbWLbeayjsAPgpNhfvQV2F3zl81yqR3pdqTM6jkQDS8MVpcWiO5w6DitIK9qKXv8SC0Kf6cD%2FkC%2BcMs57dNy2spDhYBa%2Fes3NdtggcTD01v3aVx%2F3LYBuk%2Fi5lF%2Fs7ZyvMyMV0X2%2F42%2B1hRfDDP%2FKvLBjqkAWwyzIb%2FNBZuqCggZRvovjKl%2BdJ9tKGI8KtY2k4s1FV%2Fo5R15uop11NrylAR42JPledItrxhtQS%2BdkTPPnbZI29zhHpPweIruJ2aIjC877Q%2F2wWZMRSAF0LlnkXbi83DGUyuyV%2B5FSsFnLx6ECJW55hArgHAB1WoDtS%2FBZiWxcHhmc0Q%2FWEwV4Ur4y0U2qTqZP2CTH2Jh5BRQU%2BHSdOKanKSYOdR&X-Amz-Signature=3c2b6b5ec5949a4b84c94294f8e02a41eb556f9ea95e95cc38a2c30dea794df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVY7FYNR%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm%2BGjOQ9FmKEpRCxB%2BbqQ8HYRbb2IYqB2luAdwW3005QIhALZfmHPxtscJ4YxpBfo4GemicyDkrkQpQyBENMjj5DOgKv8DCFwQABoMNjM3NDIzMTgzODA1Igz0e2jcRj4WFrn1zmoq3APDAwgexWltdVrbLC97hwy%2BMTjbYgd1TTLkSaWgRQXhldaz69T5%2FbpG76MjnhpMuZylnlXD0oN9%2F28StsWzHswlbih%2Fp8UbkwLRY89ur4QRJjxycuKXUGqw6mz5Tebn8Ryd%2BnJgiKbw6upHQdhKwNMDFTTSBT%2BJZu4A2WVesPkvXvepx0yFcHzqUassUswQk21gA3%2FUxyaGFv8vu7AXCIDEkq3G91FhixXywHZuVkG5%2FoS19pMYhq1%2BVbz0DSVWCdcM5EvJKndZnqzYb5hcoHwO7l9Y0rub27TolVEOadOGcZALaGHpXgU1mSmlfb6aCSywper78WJErl7ViPnZlFOVov8yolEIx33%2FR3CQ47%2FJwo5erbh03sClAjJGaUXCS%2Btzn3oauPYMkpTFcDan7gqm4htYNS6k7dALGjIwFJz0kIpWpNftX8d1RBDPKGe%2F1EkcEX%2BH4PjPZ4tffFrEA5uUa%2FJHVnYHJDHdmLBkmnsh2nbWLbeayjsAPgpNhfvQV2F3zl81yqR3pdqTM6jkQDS8MVpcWiO5w6DitIK9qKXv8SC0Kf6cD%2FkC%2BcMs57dNy2spDhYBa%2Fes3NdtggcTD01v3aVx%2F3LYBuk%2Fi5lF%2Fs7ZyvMyMV0X2%2F42%2B1hRfDDP%2FKvLBjqkAWwyzIb%2FNBZuqCggZRvovjKl%2BdJ9tKGI8KtY2k4s1FV%2Fo5R15uop11NrylAR42JPledItrxhtQS%2BdkTPPnbZI29zhHpPweIruJ2aIjC877Q%2F2wWZMRSAF0LlnkXbi83DGUyuyV%2B5FSsFnLx6ECJW55hArgHAB1WoDtS%2FBZiWxcHhmc0Q%2FWEwV4Ur4y0U2qTqZP2CTH2Jh5BRQU%2BHSdOKanKSYOdR&X-Amz-Signature=d65405df96d24ee4c2d5e9f18ca602f641511cfde9296c13b9384f571eabf02c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXS2ZQ3J%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEMukD9N%2BEBmO9%2BB5yJv2OKC8FmAhiFIJSMYOi6Y6GOwIhAIeUzYoD7ExhuXDYxl7dnkkiRH%2FijueeHmjvK2ftqmEJKv8DCFwQABoMNjM3NDIzMTgzODA1IgwMsnMi10Esg4cMCRAq3AOrPz9353kDgMQ%2ByZ%2FhSzRS4YSUkCUpnELWLLSFDaUQvmp%2B3k6jaUjTNSnttOJ3JEdrZnkQw%2Fw8Q53Lni1LctLuQQkOQF6G5k8RhUM6BqY9t%2B3KnXwvMiBfQuQsBFSzqp2iPgYIRn5Oj8lCACqHpCPBPMcCy8UlJadZhyYGS6Bh7wV0uAg165Dh3tz0WYjQywW6eIBUBExjW%2BBosCwd9mj1RV1NmgXyCwGTSV7l3Ouff5zhIuSVEVnS3fRbpSaja3KK9RDb%2F%2Blj9rd5Tjt0ExbmFU6hfnenuutrTh%2BiEACewPyRzysUsm%2FYFCCOoEIoaMzhxVV9sHdG6v93kB9ZESSHXDaP6QA0ZROkPygSo08%2BGYCVl9ZnOR5gvnyT5x11s70CYm6AOfOvnEMLt918E%2BI8GSXGT47Ghm83YGgPM5ViSYK3n1lqIci0v%2BMLZpybas3vpkm5sZ4s0I4Tcxgs%2BLfFg%2BvOAUoGum%2FCX6c9fxDnwDVxlos8VeeepqZDksSNvOB2lm4KiImzisUQQreF3mUZ7Iy96aYBPl8R4abaQwTuggGG8%2Fcm0dUOWcm%2B2QiSXmxNddgW1SLVF%2BJl%2FGbyYznktclwZhw%2FGRFqo4njNhaXAetXxFAbBCasO6yInTDI%2FKvLBjqkAYRi0dPdHJ4S0TXFUaWWJb3R37pdhX%2F6UOTopBgPU478MOcEUiphL9Hjry%2F10KPM9EPOqiq3XZpVfGLdNZBz%2F3c3zmY60NzCrKN6%2FRMpXptPGOZhIjfGdlDUcnTdAHa7VX4%2FH92GNOvU6WxBr3lvze2jlWjOEwNXckIehwhd5oOiWVsUFQCCaHXEb436J8NjHTnyiNP85LArZdbriZohK6GFAtan&X-Amz-Signature=e7b4c46066da816d9a7bff4f05bbe657483ecffb4a06030e6f10c90dd1dffd5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXS2ZQ3J%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEMukD9N%2BEBmO9%2BB5yJv2OKC8FmAhiFIJSMYOi6Y6GOwIhAIeUzYoD7ExhuXDYxl7dnkkiRH%2FijueeHmjvK2ftqmEJKv8DCFwQABoMNjM3NDIzMTgzODA1IgwMsnMi10Esg4cMCRAq3AOrPz9353kDgMQ%2ByZ%2FhSzRS4YSUkCUpnELWLLSFDaUQvmp%2B3k6jaUjTNSnttOJ3JEdrZnkQw%2Fw8Q53Lni1LctLuQQkOQF6G5k8RhUM6BqY9t%2B3KnXwvMiBfQuQsBFSzqp2iPgYIRn5Oj8lCACqHpCPBPMcCy8UlJadZhyYGS6Bh7wV0uAg165Dh3tz0WYjQywW6eIBUBExjW%2BBosCwd9mj1RV1NmgXyCwGTSV7l3Ouff5zhIuSVEVnS3fRbpSaja3KK9RDb%2F%2Blj9rd5Tjt0ExbmFU6hfnenuutrTh%2BiEACewPyRzysUsm%2FYFCCOoEIoaMzhxVV9sHdG6v93kB9ZESSHXDaP6QA0ZROkPygSo08%2BGYCVl9ZnOR5gvnyT5x11s70CYm6AOfOvnEMLt918E%2BI8GSXGT47Ghm83YGgPM5ViSYK3n1lqIci0v%2BMLZpybas3vpkm5sZ4s0I4Tcxgs%2BLfFg%2BvOAUoGum%2FCX6c9fxDnwDVxlos8VeeepqZDksSNvOB2lm4KiImzisUQQreF3mUZ7Iy96aYBPl8R4abaQwTuggGG8%2Fcm0dUOWcm%2B2QiSXmxNddgW1SLVF%2BJl%2FGbyYznktclwZhw%2FGRFqo4njNhaXAetXxFAbBCasO6yInTDI%2FKvLBjqkAYRi0dPdHJ4S0TXFUaWWJb3R37pdhX%2F6UOTopBgPU478MOcEUiphL9Hjry%2F10KPM9EPOqiq3XZpVfGLdNZBz%2F3c3zmY60NzCrKN6%2FRMpXptPGOZhIjfGdlDUcnTdAHa7VX4%2FH92GNOvU6WxBr3lvze2jlWjOEwNXckIehwhd5oOiWVsUFQCCaHXEb436J8NjHTnyiNP85LArZdbriZohK6GFAtan&X-Amz-Signature=ca6850324b98cc515b88abc12cb5f7ee7067e14cb6199094422f98075568c0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXS2ZQ3J%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEMukD9N%2BEBmO9%2BB5yJv2OKC8FmAhiFIJSMYOi6Y6GOwIhAIeUzYoD7ExhuXDYxl7dnkkiRH%2FijueeHmjvK2ftqmEJKv8DCFwQABoMNjM3NDIzMTgzODA1IgwMsnMi10Esg4cMCRAq3AOrPz9353kDgMQ%2ByZ%2FhSzRS4YSUkCUpnELWLLSFDaUQvmp%2B3k6jaUjTNSnttOJ3JEdrZnkQw%2Fw8Q53Lni1LctLuQQkOQF6G5k8RhUM6BqY9t%2B3KnXwvMiBfQuQsBFSzqp2iPgYIRn5Oj8lCACqHpCPBPMcCy8UlJadZhyYGS6Bh7wV0uAg165Dh3tz0WYjQywW6eIBUBExjW%2BBosCwd9mj1RV1NmgXyCwGTSV7l3Ouff5zhIuSVEVnS3fRbpSaja3KK9RDb%2F%2Blj9rd5Tjt0ExbmFU6hfnenuutrTh%2BiEACewPyRzysUsm%2FYFCCOoEIoaMzhxVV9sHdG6v93kB9ZESSHXDaP6QA0ZROkPygSo08%2BGYCVl9ZnOR5gvnyT5x11s70CYm6AOfOvnEMLt918E%2BI8GSXGT47Ghm83YGgPM5ViSYK3n1lqIci0v%2BMLZpybas3vpkm5sZ4s0I4Tcxgs%2BLfFg%2BvOAUoGum%2FCX6c9fxDnwDVxlos8VeeepqZDksSNvOB2lm4KiImzisUQQreF3mUZ7Iy96aYBPl8R4abaQwTuggGG8%2Fcm0dUOWcm%2B2QiSXmxNddgW1SLVF%2BJl%2FGbyYznktclwZhw%2FGRFqo4njNhaXAetXxFAbBCasO6yInTDI%2FKvLBjqkAYRi0dPdHJ4S0TXFUaWWJb3R37pdhX%2F6UOTopBgPU478MOcEUiphL9Hjry%2F10KPM9EPOqiq3XZpVfGLdNZBz%2F3c3zmY60NzCrKN6%2FRMpXptPGOZhIjfGdlDUcnTdAHa7VX4%2FH92GNOvU6WxBr3lvze2jlWjOEwNXckIehwhd5oOiWVsUFQCCaHXEb436J8NjHTnyiNP85LArZdbriZohK6GFAtan&X-Amz-Signature=d4118bd17ee4f5f5ec2ba47130ce17758d11c3b7f14ef56e9b8cede0f2ac96c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UU6CVSA%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCBl02sbd16oeg1Al6%2BRjgD4HGG1xDMw7E%2FCDpPiggkwIhAKBvz1Crh%2BBeQENUmzfjryZ%2FFY6LP1VR3Ruf56CHal%2BfKv8DCFwQABoMNjM3NDIzMTgzODA1IgwIK1VN9afayaGFfwMq3ANA0d%2FjIqSw7q%2By3cvjii01E%2B3FGSNTYny59HeDQviyQsMT74beKs3s4yXqOw7qZqp5%2FptAJYzBeZnMEkIFqi%2BQZ6E5VfgbKqxRtHU0tff%2BvgfRdJa3eNpEBcPc9ECqZ7w3tIh1T%2Fld50OOcAyAUCBc2EVnJUuZjYYzMbaavyOnryzdGx2S827jQaUxfvmlhv8OPkA0fGIZhQmOuF1cACIEhDQ7RK1VjgMRSZIKaqpgVsozKyKNtrE21QjFShcaLswiVRKSnVMFld1uATYsqSVjdDLdqRJLr5mab804jchGdakxXIkImWwqg0Us9s3Jzu9QkFIkzlIc4kuA9Cq0KhOedUTXeYq8llm4IEQPP%2FKWpRDj5nVP%2FJPc6DdiWxkefiNvf41T0bvMoGlv2ZKAe4CaJZlIW%2FlVqAwD9OcF6thP8VTQOfMPECwt14flK4Ir%2BatBW9IQ%2FOAL5GtTTluBEYBe6wBQjPClbcVOB%2BKA7skV2MkbOGklatHwR7rg%2BtUc%2B59cs9HZDb%2FQlmorPJbN1U7THuqT9Gx46VrjUCInHfyCM4RMrWFXxw2C8aATj3KY1eW%2B%2FyI9OOHowMidskXh%2FUfgu8oH52k7H4SRIP%2FNpYOjp9X5a6oj%2BGXh0xOFizCf%2FKvLBjqkAQomgGkFsy4C2VhIFpVIQX20zPb%2BJiJOhvYcU7u1Y4WagvUnKSGUdeeDdcziWAr%2F9f3ntXl5CM2eXCaz0NYlUn2S6frHmMBz2xuLVa3NMsr4KOOhZCiCY8EDijdJpJFm8MeY6SMeLUyYSe8xUR6rtsguRXKYtjtlfsHfK19eYLeBURKVWDSNYftf%2F5hGQtlQjldX4IgC2YaPNvvSXgGJxC04eMd0&X-Amz-Signature=aeb290fc2b62344db74acd87c5b0e5829dcb15767ccc158ae17f080b15c905aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UU6CVSA%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCBl02sbd16oeg1Al6%2BRjgD4HGG1xDMw7E%2FCDpPiggkwIhAKBvz1Crh%2BBeQENUmzfjryZ%2FFY6LP1VR3Ruf56CHal%2BfKv8DCFwQABoMNjM3NDIzMTgzODA1IgwIK1VN9afayaGFfwMq3ANA0d%2FjIqSw7q%2By3cvjii01E%2B3FGSNTYny59HeDQviyQsMT74beKs3s4yXqOw7qZqp5%2FptAJYzBeZnMEkIFqi%2BQZ6E5VfgbKqxRtHU0tff%2BvgfRdJa3eNpEBcPc9ECqZ7w3tIh1T%2Fld50OOcAyAUCBc2EVnJUuZjYYzMbaavyOnryzdGx2S827jQaUxfvmlhv8OPkA0fGIZhQmOuF1cACIEhDQ7RK1VjgMRSZIKaqpgVsozKyKNtrE21QjFShcaLswiVRKSnVMFld1uATYsqSVjdDLdqRJLr5mab804jchGdakxXIkImWwqg0Us9s3Jzu9QkFIkzlIc4kuA9Cq0KhOedUTXeYq8llm4IEQPP%2FKWpRDj5nVP%2FJPc6DdiWxkefiNvf41T0bvMoGlv2ZKAe4CaJZlIW%2FlVqAwD9OcF6thP8VTQOfMPECwt14flK4Ir%2BatBW9IQ%2FOAL5GtTTluBEYBe6wBQjPClbcVOB%2BKA7skV2MkbOGklatHwR7rg%2BtUc%2B59cs9HZDb%2FQlmorPJbN1U7THuqT9Gx46VrjUCInHfyCM4RMrWFXxw2C8aATj3KY1eW%2B%2FyI9OOHowMidskXh%2FUfgu8oH52k7H4SRIP%2FNpYOjp9X5a6oj%2BGXh0xOFizCf%2FKvLBjqkAQomgGkFsy4C2VhIFpVIQX20zPb%2BJiJOhvYcU7u1Y4WagvUnKSGUdeeDdcziWAr%2F9f3ntXl5CM2eXCaz0NYlUn2S6frHmMBz2xuLVa3NMsr4KOOhZCiCY8EDijdJpJFm8MeY6SMeLUyYSe8xUR6rtsguRXKYtjtlfsHfK19eYLeBURKVWDSNYftf%2F5hGQtlQjldX4IgC2YaPNvvSXgGJxC04eMd0&X-Amz-Signature=4f858b24c4396e8728b46e0d6b245cb978602375a072b3a05624aae981960748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KG3FP5L%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNte%2Ff6hnrRAXvs%2FhPxE7tVLZN1zY5RH2ByEgmppsoQAiEA7ja7MNZb3r1jLpuFzUA3pzALXLRW%2BiBU1WYsYQ3kgP4q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE4WJJ3%2Bk%2BnOu5qTUircA%2BV%2B6GvydlhHzIZxM9TZboGDBVWXiMaYmc8rGxk1VqthdyAGnQncjWEaldO%2B%2BLasqbnqMulVhA%2BV4JZEKIHZi3wdr15jrgAmwQahw8Sr1muKlcTkETLxo%2Fvp0QH4ja3qB%2Fs4fSxSbSGVZU35Sk4tdo6qKw6aUUY7AFJw6zDyOMBpobCudg1c%2BHFPsNUjgvzuZjGf7Or3HbD2fi29II6gsVVDWVmIDMvvbbDVBVo0w%2BS8SkJ72O5phHhLoWqZySOjJBjWv0OKinAS08vaYwq6ON%2FO91FhIPmGSJNX1flgibihY772I6W9BjCQzhhJ6t8im84ahOxoLm%2FN8QA5%2BYkwdKH%2B9ALPcOqxYtaWrUrirCMHho8V%2BjAiubPJ0CeD32PUONU3b%2B8q7CBHaq3NI%2FC14uj%2FovHhq4%2FUiFdasQba4m4hp1OzPTjdUgwqjxztJWtO%2FSO1IU7dUZC9RTFzyp%2BWUM2Sv0qoB%2BhPQ4gjwqWrFt28QtkwdGz3Ahts09sa%2B19KaYLlSZiltNVjFi7KR6web0diXmiXBrrNRSNgYpgzjxDedsOV9Pzvn5t63WlOgmwU9U%2FlGBfzwwwOjw7waVFbVx%2B6RTjeynJqt%2BopLm0VfWIETg%2B0ZeFhUCRIgOzoMMT8q8sGOqUBwSCr7VS8c4tT3gYfQ7gt5zpvt3qN0yU9gOhGmvwQFt75IlRzcrjot35e7l1ThpehYbPhOnXVoEL4hTg5bP59p5E2eR%2BzzcGBXElRcCy%2FCZzcU7T6wyOQrvunfmM3vGKuuzrdqkRHdkTzSPXn43lKCg%2BqUahTsGHyPsBPff0sVjOBjYnN1I6zQecxFJiHbrZ1WVn593Y9xAimsgu%2BEcEWe9GTFPoO&X-Amz-Signature=a8fea3659f7f4b0956bb1d506a981d0bc97606d8fc7f1a76f1483dca4de5aa08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KG3FP5L%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNte%2Ff6hnrRAXvs%2FhPxE7tVLZN1zY5RH2ByEgmppsoQAiEA7ja7MNZb3r1jLpuFzUA3pzALXLRW%2BiBU1WYsYQ3kgP4q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE4WJJ3%2Bk%2BnOu5qTUircA%2BV%2B6GvydlhHzIZxM9TZboGDBVWXiMaYmc8rGxk1VqthdyAGnQncjWEaldO%2B%2BLasqbnqMulVhA%2BV4JZEKIHZi3wdr15jrgAmwQahw8Sr1muKlcTkETLxo%2Fvp0QH4ja3qB%2Fs4fSxSbSGVZU35Sk4tdo6qKw6aUUY7AFJw6zDyOMBpobCudg1c%2BHFPsNUjgvzuZjGf7Or3HbD2fi29II6gsVVDWVmIDMvvbbDVBVo0w%2BS8SkJ72O5phHhLoWqZySOjJBjWv0OKinAS08vaYwq6ON%2FO91FhIPmGSJNX1flgibihY772I6W9BjCQzhhJ6t8im84ahOxoLm%2FN8QA5%2BYkwdKH%2B9ALPcOqxYtaWrUrirCMHho8V%2BjAiubPJ0CeD32PUONU3b%2B8q7CBHaq3NI%2FC14uj%2FovHhq4%2FUiFdasQba4m4hp1OzPTjdUgwqjxztJWtO%2FSO1IU7dUZC9RTFzyp%2BWUM2Sv0qoB%2BhPQ4gjwqWrFt28QtkwdGz3Ahts09sa%2B19KaYLlSZiltNVjFi7KR6web0diXmiXBrrNRSNgYpgzjxDedsOV9Pzvn5t63WlOgmwU9U%2FlGBfzwwwOjw7waVFbVx%2B6RTjeynJqt%2BopLm0VfWIETg%2B0ZeFhUCRIgOzoMMT8q8sGOqUBwSCr7VS8c4tT3gYfQ7gt5zpvt3qN0yU9gOhGmvwQFt75IlRzcrjot35e7l1ThpehYbPhOnXVoEL4hTg5bP59p5E2eR%2BzzcGBXElRcCy%2FCZzcU7T6wyOQrvunfmM3vGKuuzrdqkRHdkTzSPXn43lKCg%2BqUahTsGHyPsBPff0sVjOBjYnN1I6zQecxFJiHbrZ1WVn593Y9xAimsgu%2BEcEWe9GTFPoO&X-Amz-Signature=3d13a3e4f436655e4e590bb0a4d0986db16e4a8900c0231c42b4f1d82a09b7fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KG3FP5L%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNte%2Ff6hnrRAXvs%2FhPxE7tVLZN1zY5RH2ByEgmppsoQAiEA7ja7MNZb3r1jLpuFzUA3pzALXLRW%2BiBU1WYsYQ3kgP4q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE4WJJ3%2Bk%2BnOu5qTUircA%2BV%2B6GvydlhHzIZxM9TZboGDBVWXiMaYmc8rGxk1VqthdyAGnQncjWEaldO%2B%2BLasqbnqMulVhA%2BV4JZEKIHZi3wdr15jrgAmwQahw8Sr1muKlcTkETLxo%2Fvp0QH4ja3qB%2Fs4fSxSbSGVZU35Sk4tdo6qKw6aUUY7AFJw6zDyOMBpobCudg1c%2BHFPsNUjgvzuZjGf7Or3HbD2fi29II6gsVVDWVmIDMvvbbDVBVo0w%2BS8SkJ72O5phHhLoWqZySOjJBjWv0OKinAS08vaYwq6ON%2FO91FhIPmGSJNX1flgibihY772I6W9BjCQzhhJ6t8im84ahOxoLm%2FN8QA5%2BYkwdKH%2B9ALPcOqxYtaWrUrirCMHho8V%2BjAiubPJ0CeD32PUONU3b%2B8q7CBHaq3NI%2FC14uj%2FovHhq4%2FUiFdasQba4m4hp1OzPTjdUgwqjxztJWtO%2FSO1IU7dUZC9RTFzyp%2BWUM2Sv0qoB%2BhPQ4gjwqWrFt28QtkwdGz3Ahts09sa%2B19KaYLlSZiltNVjFi7KR6web0diXmiXBrrNRSNgYpgzjxDedsOV9Pzvn5t63WlOgmwU9U%2FlGBfzwwwOjw7waVFbVx%2B6RTjeynJqt%2BopLm0VfWIETg%2B0ZeFhUCRIgOzoMMT8q8sGOqUBwSCr7VS8c4tT3gYfQ7gt5zpvt3qN0yU9gOhGmvwQFt75IlRzcrjot35e7l1ThpehYbPhOnXVoEL4hTg5bP59p5E2eR%2BzzcGBXElRcCy%2FCZzcU7T6wyOQrvunfmM3vGKuuzrdqkRHdkTzSPXn43lKCg%2BqUahTsGHyPsBPff0sVjOBjYnN1I6zQecxFJiHbrZ1WVn593Y9xAimsgu%2BEcEWe9GTFPoO&X-Amz-Signature=078a934221f1cfcccdd1b5150593cb125d3a63b7795f613b56f737aae40e5261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KG3FP5L%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNte%2Ff6hnrRAXvs%2FhPxE7tVLZN1zY5RH2ByEgmppsoQAiEA7ja7MNZb3r1jLpuFzUA3pzALXLRW%2BiBU1WYsYQ3kgP4q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE4WJJ3%2Bk%2BnOu5qTUircA%2BV%2B6GvydlhHzIZxM9TZboGDBVWXiMaYmc8rGxk1VqthdyAGnQncjWEaldO%2B%2BLasqbnqMulVhA%2BV4JZEKIHZi3wdr15jrgAmwQahw8Sr1muKlcTkETLxo%2Fvp0QH4ja3qB%2Fs4fSxSbSGVZU35Sk4tdo6qKw6aUUY7AFJw6zDyOMBpobCudg1c%2BHFPsNUjgvzuZjGf7Or3HbD2fi29II6gsVVDWVmIDMvvbbDVBVo0w%2BS8SkJ72O5phHhLoWqZySOjJBjWv0OKinAS08vaYwq6ON%2FO91FhIPmGSJNX1flgibihY772I6W9BjCQzhhJ6t8im84ahOxoLm%2FN8QA5%2BYkwdKH%2B9ALPcOqxYtaWrUrirCMHho8V%2BjAiubPJ0CeD32PUONU3b%2B8q7CBHaq3NI%2FC14uj%2FovHhq4%2FUiFdasQba4m4hp1OzPTjdUgwqjxztJWtO%2FSO1IU7dUZC9RTFzyp%2BWUM2Sv0qoB%2BhPQ4gjwqWrFt28QtkwdGz3Ahts09sa%2B19KaYLlSZiltNVjFi7KR6web0diXmiXBrrNRSNgYpgzjxDedsOV9Pzvn5t63WlOgmwU9U%2FlGBfzwwwOjw7waVFbVx%2B6RTjeynJqt%2BopLm0VfWIETg%2B0ZeFhUCRIgOzoMMT8q8sGOqUBwSCr7VS8c4tT3gYfQ7gt5zpvt3qN0yU9gOhGmvwQFt75IlRzcrjot35e7l1ThpehYbPhOnXVoEL4hTg5bP59p5E2eR%2BzzcGBXElRcCy%2FCZzcU7T6wyOQrvunfmM3vGKuuzrdqkRHdkTzSPXn43lKCg%2BqUahTsGHyPsBPff0sVjOBjYnN1I6zQecxFJiHbrZ1WVn593Y9xAimsgu%2BEcEWe9GTFPoO&X-Amz-Signature=4a2ff633fc06f9d4877b9b0653198e9295ce13ff8574d277ea6227c98ea14077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KG3FP5L%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNte%2Ff6hnrRAXvs%2FhPxE7tVLZN1zY5RH2ByEgmppsoQAiEA7ja7MNZb3r1jLpuFzUA3pzALXLRW%2BiBU1WYsYQ3kgP4q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDE4WJJ3%2Bk%2BnOu5qTUircA%2BV%2B6GvydlhHzIZxM9TZboGDBVWXiMaYmc8rGxk1VqthdyAGnQncjWEaldO%2B%2BLasqbnqMulVhA%2BV4JZEKIHZi3wdr15jrgAmwQahw8Sr1muKlcTkETLxo%2Fvp0QH4ja3qB%2Fs4fSxSbSGVZU35Sk4tdo6qKw6aUUY7AFJw6zDyOMBpobCudg1c%2BHFPsNUjgvzuZjGf7Or3HbD2fi29II6gsVVDWVmIDMvvbbDVBVo0w%2BS8SkJ72O5phHhLoWqZySOjJBjWv0OKinAS08vaYwq6ON%2FO91FhIPmGSJNX1flgibihY772I6W9BjCQzhhJ6t8im84ahOxoLm%2FN8QA5%2BYkwdKH%2B9ALPcOqxYtaWrUrirCMHho8V%2BjAiubPJ0CeD32PUONU3b%2B8q7CBHaq3NI%2FC14uj%2FovHhq4%2FUiFdasQba4m4hp1OzPTjdUgwqjxztJWtO%2FSO1IU7dUZC9RTFzyp%2BWUM2Sv0qoB%2BhPQ4gjwqWrFt28QtkwdGz3Ahts09sa%2B19KaYLlSZiltNVjFi7KR6web0diXmiXBrrNRSNgYpgzjxDedsOV9Pzvn5t63WlOgmwU9U%2FlGBfzwwwOjw7waVFbVx%2B6RTjeynJqt%2BopLm0VfWIETg%2B0ZeFhUCRIgOzoMMT8q8sGOqUBwSCr7VS8c4tT3gYfQ7gt5zpvt3qN0yU9gOhGmvwQFt75IlRzcrjot35e7l1ThpehYbPhOnXVoEL4hTg5bP59p5E2eR%2BzzcGBXElRcCy%2FCZzcU7T6wyOQrvunfmM3vGKuuzrdqkRHdkTzSPXn43lKCg%2BqUahTsGHyPsBPff0sVjOBjYnN1I6zQecxFJiHbrZ1WVn593Y9xAimsgu%2BEcEWe9GTFPoO&X-Amz-Signature=8dbe87e16c3cab398a663602e6188368f89a09b829a3da2b42504127d0e38124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZOH4DBB%2F20260117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260117T040322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOS7AzW5lvIBKtYEwiZWVBqfdx6QNSXqCZaT0shDPfsAIgOitRPhSzweTroekt8cJtOCltdgd3%2BbMGmfU%2FWlsxdAUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDI%2BicExBAxGE9RqdEyrcA4QcvP2FJfqeP9eaoy1xxihOM7nKGwK6jRMiUI2MtvkWOE%2FFiX7I2SvNmwnK2lwxg8WtyGsa5SwHKoQzCd7KqbtVZ6uURi4MaIGfiwj2lAgmOgsxD1rrwEW%2BrTeLLdxdFo23TmwWugYh3VC9fUI%2BYF7SfSt%2FULL7YGY4nA%2BfOE3ISX%2F0ChhYzCY6yCyptdcAjKCx7F2lDLAbKot7rEilcHrNaW7OMSA3p%2BBbVIleLBKr2ewOQc9CpDIWJG5ov39%2FTO4JEe4SO3rC4XPZFGnM063ribLyHhj%2FvSvBCrEihfQoU7LM5HeFioctG%2FmIHh3hCdZy3fLBSc9J%2Fs1rkKzosMI4XjKcjeecOKA1%2FfSvRCLDLqpRBX8Vq%2B7gdAoULFuoXnkFy%2FKHozGdd9BKa8x6w1cCcDd3RkHZJzAdeyhWRuVo%2FRHf7%2B%2BhN1MIahrgBEGCEc3%2Fh%2F2FrijYxSWL4IxTZ4kM7e4OuJRoZ1fhnYWR3bnDqaQiLk88CsTPtAN0xFdq4l88%2Fz9DQlo50%2Fip1eXaTr34axp9W1kRApMg9o8FF7EjWbHG0PhQOXjAZeDRbxmTK%2BNdwLY54b%2Fbwt%2B4JMIkSOhgivZIFbShDE97x2qj%2FyaiBcjEJyjTVGpuY8kDMMn8q8sGOqUBZT%2FZDdSTPLx3w0tvbiTQ5mPBgBU3r926b0v2k7BhTXhqe5dStw8vQA8Cbsbwk8eLqaXzMN%2Fywa3Uu3Rvtdix%2Fk%2Ba5qNdKv%2BcFZ2moB8na%2Fz%2FChG5leodcG8Uil14yroOGrps2VnCdLoCwEySYhp%2FQZAbl3H9KdyxIDpZiJLwWeoVLrfa7BiHVBpwq8gG%2FxVyAxBcbB1dHa3zidvfBDwQigd3FxG0&X-Amz-Signature=8c212054213e47f2e0ae8cdbf0877bd65e34c458de0644a297aebd6c25fdd2f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

