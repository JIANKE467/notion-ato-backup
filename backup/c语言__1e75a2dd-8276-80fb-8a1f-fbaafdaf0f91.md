
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHJALPG%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPr5BeFkXbWUxWAHpxqkdSRm3bFvndBvk29tA86htasgIhAKxCFKiKe7j6%2FJN5GxKmQQnyzeFO%2BO%2BbDT6P15h4LAhQKv8DCGUQABoMNjM3NDIzMTgzODA1IgzsrIoFbDSuK4Aa6fkq3AOiARIEZ7%2BMqGYuVB3Lp7PunHAL463LQY6oOBdcq4A5G%2FQ%2Bnp7%2B25lXK61O9nl9Yu6X7puapBcBy672XnpcPdzcSBp9yRZvDQyX8qVnokR%2Bd5UNvFtFoh0Dv4rkQOC8h5m3WJJCHxdw9Jx6tA6AtKUi0d1m7atiKG%2FaHWCnXyxn65NVfrr0Gr0LKM1el8RU15Zcv1LxayxiJaewt%2BUClZuczrKkQivmp7i0%2FqE2CFyNYGA8GCmlPVFFD41vFyYRMCEjBjqQMO5xJluFf%2FcBofVRwZjG%2Fsk5ZHKPQI5hPC4F4qMdj28z1JzvZhWA4V1qXLy8bQUcjoSdEmFk7RLR39spUTztkfOxVDcu86s1EfOTNS20zNZy7bIC2gsngrpAoKeq%2ByWO0mH2utWjXwClCZ6nEpH6ocyj74Gvd9RPrtPCJrqSRyCLdT%2B3MvZaBedK%2BETMRfiSsAolZrnFAulA%2FMC7%2F6UajVC1gQs4EfFnfXV0C18WWx3DtHv5zh15TcpLl%2FF9s5sZ0kF0lzmOvFchsor5kR6oYTzZWYqKYdjpzjo%2BpdVlD5k%2FCWLyDM56Mvu1CrrrSumoZC04xyKIAfAtSJiwDnqrwzJih2VFEYCeoBvCn%2FfBe9tYU%2B8d%2BqFh%2FzCvmebLBjqkAb5VFTQahh%2FQCIRKBzdgf5iiqSGn8e4qKQo%2FKJA0I4e1Tnj59EPlS181O0ukV4VB3mcIoHofrjNQEvB7Yti9rrHWttFUWztHlvp5xriMmDjKQ2%2FIccG1WcL%2BsTIRNkZlpuKGBiRpv0x7d%2BgaSXlgcEEM7g%2F3gqHEo1Tdjas%2BQejp1iGUjX4pfxsswFBhB4nDwLhM6g5iMkXFtqJSjfSq6yR4EQN0&X-Amz-Signature=49ce8c3a8039d56eac658755b4aea8b183283b2fc5c223b51fc7354cba52dd25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNKJZOXH%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIQcD%2B0sai1rSBwEAHDlJE2mM7XLKHqZlf6gJE0WIyzAIhAN3V9MbMYWWug86qNqL48Ynj8%2FmZa9T81rycsZ%2BDdGKLKv8DCGUQABoMNjM3NDIzMTgzODA1IgwC%2F79QUZMCuQKHpAUq3AMyiMr%2BuyioCh1DV%2FA2RVF9mn%2Fdc3GJZLt8lHHK8LKWuW0sphzhSEeXaSDpxdVYq1xcsvo%2FHdBmi4ahh5fZtV6slWMw3EPaI4YdUlJmFKUpYIvRcx55o%2FeXjGDwhoLfuVi%2FHvc%2FpnEEZYfjgmq40Fdpo9KCxV%2FRxoHeKvFPwRYCCz9SANoJgFMPUxPI2HS3yoMRAEhZOlA9RgZW37odI9iQvnNUegZSKY2FdfExc%2Bg0oL%2FhYqNm6%2F4%2Bul0sKTsFtIFApScU4X7loSI4svdKDtayhgbUkb%2BH4qWzBZBLJ4LFMGqz3T7kfHcxQzlePEL0xeJ9v79VeSURY7bAQFicrhbxtWTFi3%2FfazZyGV%2FAB2yIGgHLgFZeWMwvuljBN7j9YgmkllzemfTgImWJgHwW2yHTgQnmNBpJam%2Bt1GixxvpuEGNsDYTLmoctnrM2MYpyN9YTMWIFjv3UArc7c2vyJ3ErudUOxmwYSpTPm5rgu30c9nncBMbdul3aI44nhdRgJUspFBajttvpEBXgKBQKwf0fnr4fKIbpcwHXxfMvOPC3VGcYtVvMvko7L9jH6WA71QhWcmrw8%2FQQwHEjm3zIIxu385x7nFU4uPXq0x2xiGWHnrqqzrJ04anfTY1m5DCemObLBjqkAdtVh%2BysM0SooCWNgNhpimbr3OkzON4BG9c%2FLJxPpNY5bc0hUe4E6M%2FbtUcsWz1WFmeDdYShioyVPfTJrckIHgMH6RsynCEoi9dd%2FkL1ylaeTnnmkIRBltjlcu0rjOVPPBwkAfRvcIBRKnmvXLn5LgeoUrFwwmbgXBLWLYxvLp%2BY9JnglOtZ7d%2BFKZAYzjwUuv5nnFlpbjimX0fH%2BmrLD1wb1kDA&X-Amz-Signature=73304b9eb00af6323a3eec6baf06216564f5e25d6a2b4f852ca6257ea4387c35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNKJZOXH%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIQcD%2B0sai1rSBwEAHDlJE2mM7XLKHqZlf6gJE0WIyzAIhAN3V9MbMYWWug86qNqL48Ynj8%2FmZa9T81rycsZ%2BDdGKLKv8DCGUQABoMNjM3NDIzMTgzODA1IgwC%2F79QUZMCuQKHpAUq3AMyiMr%2BuyioCh1DV%2FA2RVF9mn%2Fdc3GJZLt8lHHK8LKWuW0sphzhSEeXaSDpxdVYq1xcsvo%2FHdBmi4ahh5fZtV6slWMw3EPaI4YdUlJmFKUpYIvRcx55o%2FeXjGDwhoLfuVi%2FHvc%2FpnEEZYfjgmq40Fdpo9KCxV%2FRxoHeKvFPwRYCCz9SANoJgFMPUxPI2HS3yoMRAEhZOlA9RgZW37odI9iQvnNUegZSKY2FdfExc%2Bg0oL%2FhYqNm6%2F4%2Bul0sKTsFtIFApScU4X7loSI4svdKDtayhgbUkb%2BH4qWzBZBLJ4LFMGqz3T7kfHcxQzlePEL0xeJ9v79VeSURY7bAQFicrhbxtWTFi3%2FfazZyGV%2FAB2yIGgHLgFZeWMwvuljBN7j9YgmkllzemfTgImWJgHwW2yHTgQnmNBpJam%2Bt1GixxvpuEGNsDYTLmoctnrM2MYpyN9YTMWIFjv3UArc7c2vyJ3ErudUOxmwYSpTPm5rgu30c9nncBMbdul3aI44nhdRgJUspFBajttvpEBXgKBQKwf0fnr4fKIbpcwHXxfMvOPC3VGcYtVvMvko7L9jH6WA71QhWcmrw8%2FQQwHEjm3zIIxu385x7nFU4uPXq0x2xiGWHnrqqzrJ04anfTY1m5DCemObLBjqkAdtVh%2BysM0SooCWNgNhpimbr3OkzON4BG9c%2FLJxPpNY5bc0hUe4E6M%2FbtUcsWz1WFmeDdYShioyVPfTJrckIHgMH6RsynCEoi9dd%2FkL1ylaeTnnmkIRBltjlcu0rjOVPPBwkAfRvcIBRKnmvXLn5LgeoUrFwwmbgXBLWLYxvLp%2BY9JnglOtZ7d%2BFKZAYzjwUuv5nnFlpbjimX0fH%2BmrLD1wb1kDA&X-Amz-Signature=277b578eaec34244180bfe104c87ea149d0faa7828262ddb1e03fb6413d371a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4EMMFIM%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAU2eRt9UOU5K5uVvxuYFPKLFVQwc0XLgbaIR03Q2T4YAiARns2qqcQhRq1lmSEic2WS4BIiDinHnwboQd6osjz5%2Bir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMJ3XIAGll1p5vyPxMKtwD7qkjBIiHXQpDy14ohm1hV60d%2FviYJatVIBlbpdJ5ABc%2BDS9xbY1zaKVVB3SwKmRfxEgpONirIz1RDLoew2K8kMBO9O8R0sOyUIF6DPZf8HMd%2F%2FHdLWA0xSskxkAK3WZSsAQCLy77Y0Az0Vr1oKQrJvACG2vwbhLJdpOQGDo5lMBZfurIrGfHLgtWPQHexr%2FWUTDcneFvHI6ufJ7cmQka%2B4%2BA9SEo7UO9VePudKLIGADIiNufCV222xbVhh5ZUzmQICV6x4gus8%2B9OeyiR5XjdCyZOi0BqaBu6s9u94F8Sh4nE%2FCbkcJM98mV0mqjFaDKRY4JpSK17PrpHPjoFdNcnNbcPQ%2BRd7MczjfcsX2ueU4SghafI83O4g%2F7lzX%2B9UI9WDeM%2BQvTgC5RFelY29JFyl%2BLUDP1y0zgbcjy0y20fviGWrDRfnjqTfEhCUwzPayJGexriNUaT%2F8U5jbiy0eXJXBfqntx%2FIODJ5R2bGSJJRvl%2BYekRFFLAT5Cp3MUIMlOrlNikvRAEdILcCNaQYP6dxjFdZJH0FCIY3Qr7sPOaxVYCsIFWW4D%2BfsZnMrR49DCnoVEP%2F4DH9g0BV2pD3EpYs3n8SWglSoYZYunuiGDbVPkyz2rpBi7OpFPE%2B4w4pjmywY6pgHmMxXCNc2TzVjedkaOi62DiUq%2Fd%2BxIRNVDqjhm%2FDGndcZR%2Fh8jwcfnr33wH7watVsgS8O9AScVwjZFoYxvI60ZTHvP%2BkOyzUSWYRwB6TdmGoNva9K9aQeJJjIp7NBmiNZk%2FIEA3sVsmqQdUt%2BzBJxFrMca7m5yDBFSkeFBAiMdOpqIDbATCCL9hgtLL67VjyGU3Kuq6IdTb%2Fl4jIZzqE9NN9J3WOwp&X-Amz-Signature=f9dc3fcb640fa717be13de827a7aaced523a9361aca52f4cd7509a43991853a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4EMMFIM%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAU2eRt9UOU5K5uVvxuYFPKLFVQwc0XLgbaIR03Q2T4YAiARns2qqcQhRq1lmSEic2WS4BIiDinHnwboQd6osjz5%2Bir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMJ3XIAGll1p5vyPxMKtwD7qkjBIiHXQpDy14ohm1hV60d%2FviYJatVIBlbpdJ5ABc%2BDS9xbY1zaKVVB3SwKmRfxEgpONirIz1RDLoew2K8kMBO9O8R0sOyUIF6DPZf8HMd%2F%2FHdLWA0xSskxkAK3WZSsAQCLy77Y0Az0Vr1oKQrJvACG2vwbhLJdpOQGDo5lMBZfurIrGfHLgtWPQHexr%2FWUTDcneFvHI6ufJ7cmQka%2B4%2BA9SEo7UO9VePudKLIGADIiNufCV222xbVhh5ZUzmQICV6x4gus8%2B9OeyiR5XjdCyZOi0BqaBu6s9u94F8Sh4nE%2FCbkcJM98mV0mqjFaDKRY4JpSK17PrpHPjoFdNcnNbcPQ%2BRd7MczjfcsX2ueU4SghafI83O4g%2F7lzX%2B9UI9WDeM%2BQvTgC5RFelY29JFyl%2BLUDP1y0zgbcjy0y20fviGWrDRfnjqTfEhCUwzPayJGexriNUaT%2F8U5jbiy0eXJXBfqntx%2FIODJ5R2bGSJJRvl%2BYekRFFLAT5Cp3MUIMlOrlNikvRAEdILcCNaQYP6dxjFdZJH0FCIY3Qr7sPOaxVYCsIFWW4D%2BfsZnMrR49DCnoVEP%2F4DH9g0BV2pD3EpYs3n8SWglSoYZYunuiGDbVPkyz2rpBi7OpFPE%2B4w4pjmywY6pgHmMxXCNc2TzVjedkaOi62DiUq%2Fd%2BxIRNVDqjhm%2FDGndcZR%2Fh8jwcfnr33wH7watVsgS8O9AScVwjZFoYxvI60ZTHvP%2BkOyzUSWYRwB6TdmGoNva9K9aQeJJjIp7NBmiNZk%2FIEA3sVsmqQdUt%2BzBJxFrMca7m5yDBFSkeFBAiMdOpqIDbATCCL9hgtLL67VjyGU3Kuq6IdTb%2Fl4jIZzqE9NN9J3WOwp&X-Amz-Signature=164008b1998018920c792940f08547c1d408ad40cf14737dc14e7b3ae68e0d8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4EMMFIM%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAU2eRt9UOU5K5uVvxuYFPKLFVQwc0XLgbaIR03Q2T4YAiARns2qqcQhRq1lmSEic2WS4BIiDinHnwboQd6osjz5%2Bir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMJ3XIAGll1p5vyPxMKtwD7qkjBIiHXQpDy14ohm1hV60d%2FviYJatVIBlbpdJ5ABc%2BDS9xbY1zaKVVB3SwKmRfxEgpONirIz1RDLoew2K8kMBO9O8R0sOyUIF6DPZf8HMd%2F%2FHdLWA0xSskxkAK3WZSsAQCLy77Y0Az0Vr1oKQrJvACG2vwbhLJdpOQGDo5lMBZfurIrGfHLgtWPQHexr%2FWUTDcneFvHI6ufJ7cmQka%2B4%2BA9SEo7UO9VePudKLIGADIiNufCV222xbVhh5ZUzmQICV6x4gus8%2B9OeyiR5XjdCyZOi0BqaBu6s9u94F8Sh4nE%2FCbkcJM98mV0mqjFaDKRY4JpSK17PrpHPjoFdNcnNbcPQ%2BRd7MczjfcsX2ueU4SghafI83O4g%2F7lzX%2B9UI9WDeM%2BQvTgC5RFelY29JFyl%2BLUDP1y0zgbcjy0y20fviGWrDRfnjqTfEhCUwzPayJGexriNUaT%2F8U5jbiy0eXJXBfqntx%2FIODJ5R2bGSJJRvl%2BYekRFFLAT5Cp3MUIMlOrlNikvRAEdILcCNaQYP6dxjFdZJH0FCIY3Qr7sPOaxVYCsIFWW4D%2BfsZnMrR49DCnoVEP%2F4DH9g0BV2pD3EpYs3n8SWglSoYZYunuiGDbVPkyz2rpBi7OpFPE%2B4w4pjmywY6pgHmMxXCNc2TzVjedkaOi62DiUq%2Fd%2BxIRNVDqjhm%2FDGndcZR%2Fh8jwcfnr33wH7watVsgS8O9AScVwjZFoYxvI60ZTHvP%2BkOyzUSWYRwB6TdmGoNva9K9aQeJJjIp7NBmiNZk%2FIEA3sVsmqQdUt%2BzBJxFrMca7m5yDBFSkeFBAiMdOpqIDbATCCL9hgtLL67VjyGU3Kuq6IdTb%2Fl4jIZzqE9NN9J3WOwp&X-Amz-Signature=703fb287ff0f268b3e068e10ba26a2bbd0a7b8f6a3bcf71b1073e2cfad882785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4EMMFIM%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAU2eRt9UOU5K5uVvxuYFPKLFVQwc0XLgbaIR03Q2T4YAiARns2qqcQhRq1lmSEic2WS4BIiDinHnwboQd6osjz5%2Bir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMJ3XIAGll1p5vyPxMKtwD7qkjBIiHXQpDy14ohm1hV60d%2FviYJatVIBlbpdJ5ABc%2BDS9xbY1zaKVVB3SwKmRfxEgpONirIz1RDLoew2K8kMBO9O8R0sOyUIF6DPZf8HMd%2F%2FHdLWA0xSskxkAK3WZSsAQCLy77Y0Az0Vr1oKQrJvACG2vwbhLJdpOQGDo5lMBZfurIrGfHLgtWPQHexr%2FWUTDcneFvHI6ufJ7cmQka%2B4%2BA9SEo7UO9VePudKLIGADIiNufCV222xbVhh5ZUzmQICV6x4gus8%2B9OeyiR5XjdCyZOi0BqaBu6s9u94F8Sh4nE%2FCbkcJM98mV0mqjFaDKRY4JpSK17PrpHPjoFdNcnNbcPQ%2BRd7MczjfcsX2ueU4SghafI83O4g%2F7lzX%2B9UI9WDeM%2BQvTgC5RFelY29JFyl%2BLUDP1y0zgbcjy0y20fviGWrDRfnjqTfEhCUwzPayJGexriNUaT%2F8U5jbiy0eXJXBfqntx%2FIODJ5R2bGSJJRvl%2BYekRFFLAT5Cp3MUIMlOrlNikvRAEdILcCNaQYP6dxjFdZJH0FCIY3Qr7sPOaxVYCsIFWW4D%2BfsZnMrR49DCnoVEP%2F4DH9g0BV2pD3EpYs3n8SWglSoYZYunuiGDbVPkyz2rpBi7OpFPE%2B4w4pjmywY6pgHmMxXCNc2TzVjedkaOi62DiUq%2Fd%2BxIRNVDqjhm%2FDGndcZR%2Fh8jwcfnr33wH7watVsgS8O9AScVwjZFoYxvI60ZTHvP%2BkOyzUSWYRwB6TdmGoNva9K9aQeJJjIp7NBmiNZk%2FIEA3sVsmqQdUt%2BzBJxFrMca7m5yDBFSkeFBAiMdOpqIDbATCCL9hgtLL67VjyGU3Kuq6IdTb%2Fl4jIZzqE9NN9J3WOwp&X-Amz-Signature=585adfb9b6c2ee8b15ae8025b814ba3aa53ee5a466cb87945803ca7ac5c8f4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4EMMFIM%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAU2eRt9UOU5K5uVvxuYFPKLFVQwc0XLgbaIR03Q2T4YAiARns2qqcQhRq1lmSEic2WS4BIiDinHnwboQd6osjz5%2Bir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMJ3XIAGll1p5vyPxMKtwD7qkjBIiHXQpDy14ohm1hV60d%2FviYJatVIBlbpdJ5ABc%2BDS9xbY1zaKVVB3SwKmRfxEgpONirIz1RDLoew2K8kMBO9O8R0sOyUIF6DPZf8HMd%2F%2FHdLWA0xSskxkAK3WZSsAQCLy77Y0Az0Vr1oKQrJvACG2vwbhLJdpOQGDo5lMBZfurIrGfHLgtWPQHexr%2FWUTDcneFvHI6ufJ7cmQka%2B4%2BA9SEo7UO9VePudKLIGADIiNufCV222xbVhh5ZUzmQICV6x4gus8%2B9OeyiR5XjdCyZOi0BqaBu6s9u94F8Sh4nE%2FCbkcJM98mV0mqjFaDKRY4JpSK17PrpHPjoFdNcnNbcPQ%2BRd7MczjfcsX2ueU4SghafI83O4g%2F7lzX%2B9UI9WDeM%2BQvTgC5RFelY29JFyl%2BLUDP1y0zgbcjy0y20fviGWrDRfnjqTfEhCUwzPayJGexriNUaT%2F8U5jbiy0eXJXBfqntx%2FIODJ5R2bGSJJRvl%2BYekRFFLAT5Cp3MUIMlOrlNikvRAEdILcCNaQYP6dxjFdZJH0FCIY3Qr7sPOaxVYCsIFWW4D%2BfsZnMrR49DCnoVEP%2F4DH9g0BV2pD3EpYs3n8SWglSoYZYunuiGDbVPkyz2rpBi7OpFPE%2B4w4pjmywY6pgHmMxXCNc2TzVjedkaOi62DiUq%2Fd%2BxIRNVDqjhm%2FDGndcZR%2Fh8jwcfnr33wH7watVsgS8O9AScVwjZFoYxvI60ZTHvP%2BkOyzUSWYRwB6TdmGoNva9K9aQeJJjIp7NBmiNZk%2FIEA3sVsmqQdUt%2BzBJxFrMca7m5yDBFSkeFBAiMdOpqIDbATCCL9hgtLL67VjyGU3Kuq6IdTb%2Fl4jIZzqE9NN9J3WOwp&X-Amz-Signature=bc70d02fe75fa1fd17305ae925959c70aae0ff9555354efd6f4e09bdc3a836e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4EMMFIM%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAU2eRt9UOU5K5uVvxuYFPKLFVQwc0XLgbaIR03Q2T4YAiARns2qqcQhRq1lmSEic2WS4BIiDinHnwboQd6osjz5%2Bir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMJ3XIAGll1p5vyPxMKtwD7qkjBIiHXQpDy14ohm1hV60d%2FviYJatVIBlbpdJ5ABc%2BDS9xbY1zaKVVB3SwKmRfxEgpONirIz1RDLoew2K8kMBO9O8R0sOyUIF6DPZf8HMd%2F%2FHdLWA0xSskxkAK3WZSsAQCLy77Y0Az0Vr1oKQrJvACG2vwbhLJdpOQGDo5lMBZfurIrGfHLgtWPQHexr%2FWUTDcneFvHI6ufJ7cmQka%2B4%2BA9SEo7UO9VePudKLIGADIiNufCV222xbVhh5ZUzmQICV6x4gus8%2B9OeyiR5XjdCyZOi0BqaBu6s9u94F8Sh4nE%2FCbkcJM98mV0mqjFaDKRY4JpSK17PrpHPjoFdNcnNbcPQ%2BRd7MczjfcsX2ueU4SghafI83O4g%2F7lzX%2B9UI9WDeM%2BQvTgC5RFelY29JFyl%2BLUDP1y0zgbcjy0y20fviGWrDRfnjqTfEhCUwzPayJGexriNUaT%2F8U5jbiy0eXJXBfqntx%2FIODJ5R2bGSJJRvl%2BYekRFFLAT5Cp3MUIMlOrlNikvRAEdILcCNaQYP6dxjFdZJH0FCIY3Qr7sPOaxVYCsIFWW4D%2BfsZnMrR49DCnoVEP%2F4DH9g0BV2pD3EpYs3n8SWglSoYZYunuiGDbVPkyz2rpBi7OpFPE%2B4w4pjmywY6pgHmMxXCNc2TzVjedkaOi62DiUq%2Fd%2BxIRNVDqjhm%2FDGndcZR%2Fh8jwcfnr33wH7watVsgS8O9AScVwjZFoYxvI60ZTHvP%2BkOyzUSWYRwB6TdmGoNva9K9aQeJJjIp7NBmiNZk%2FIEA3sVsmqQdUt%2BzBJxFrMca7m5yDBFSkeFBAiMdOpqIDbATCCL9hgtLL67VjyGU3Kuq6IdTb%2Fl4jIZzqE9NN9J3WOwp&X-Amz-Signature=ecb4906dfeb01067db0ff304b5d3f72e55f8a42b5ce6c5fdf3c09b20c6a57a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4EMMFIM%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAU2eRt9UOU5K5uVvxuYFPKLFVQwc0XLgbaIR03Q2T4YAiARns2qqcQhRq1lmSEic2WS4BIiDinHnwboQd6osjz5%2Bir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMJ3XIAGll1p5vyPxMKtwD7qkjBIiHXQpDy14ohm1hV60d%2FviYJatVIBlbpdJ5ABc%2BDS9xbY1zaKVVB3SwKmRfxEgpONirIz1RDLoew2K8kMBO9O8R0sOyUIF6DPZf8HMd%2F%2FHdLWA0xSskxkAK3WZSsAQCLy77Y0Az0Vr1oKQrJvACG2vwbhLJdpOQGDo5lMBZfurIrGfHLgtWPQHexr%2FWUTDcneFvHI6ufJ7cmQka%2B4%2BA9SEo7UO9VePudKLIGADIiNufCV222xbVhh5ZUzmQICV6x4gus8%2B9OeyiR5XjdCyZOi0BqaBu6s9u94F8Sh4nE%2FCbkcJM98mV0mqjFaDKRY4JpSK17PrpHPjoFdNcnNbcPQ%2BRd7MczjfcsX2ueU4SghafI83O4g%2F7lzX%2B9UI9WDeM%2BQvTgC5RFelY29JFyl%2BLUDP1y0zgbcjy0y20fviGWrDRfnjqTfEhCUwzPayJGexriNUaT%2F8U5jbiy0eXJXBfqntx%2FIODJ5R2bGSJJRvl%2BYekRFFLAT5Cp3MUIMlOrlNikvRAEdILcCNaQYP6dxjFdZJH0FCIY3Qr7sPOaxVYCsIFWW4D%2BfsZnMrR49DCnoVEP%2F4DH9g0BV2pD3EpYs3n8SWglSoYZYunuiGDbVPkyz2rpBi7OpFPE%2B4w4pjmywY6pgHmMxXCNc2TzVjedkaOi62DiUq%2Fd%2BxIRNVDqjhm%2FDGndcZR%2Fh8jwcfnr33wH7watVsgS8O9AScVwjZFoYxvI60ZTHvP%2BkOyzUSWYRwB6TdmGoNva9K9aQeJJjIp7NBmiNZk%2FIEA3sVsmqQdUt%2BzBJxFrMca7m5yDBFSkeFBAiMdOpqIDbATCCL9hgtLL67VjyGU3Kuq6IdTb%2Fl4jIZzqE9NN9J3WOwp&X-Amz-Signature=67e7494e99f1faa222385f914217f181c7dc7b2f0ebb66dfef0ccfa252b036d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7CMHOPM%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5zB2y7kXt3ZTg9FTJnK%2BeG5QxKome1x%2BmZIrQYtSspwIhAJMtUb9gYqldQke0h21GwpigImiKiyD9Dh%2BvgJdpIGKxKv8DCGUQABoMNjM3NDIzMTgzODA1IgzKy43PxTrTPiqqRbIq3AP8MEdZ5nEUutKp02VFC5CSpZ98lgS4aNBfH9JIPrVBYeJWHoHDkqK1f%2F4z9QDEumJPJgP%2BFE0fTknv7O0wezYdKnQbSjs7m2UimUmNzKxgjBju1oGUKcBACtOidQO5d3KRrXAreXNKlqi94hb6EeSpIIaAJMjWHB7A%2F64dWrJkYDBSFGsW5DnjUZacHRnrQRQzLBfss%2B3MYtgplIN97WAe0dzz2QtUPSDv6AcV573sN2Ik9zUXsYmtCMzVjbFimv3LT5%2F9Om4Vt9CHahb0BzsVOBFEopYc6RG7id%2FUHMpB11jFZEKVORNvu0SuGF%2Bv3OctKuDRafS39PLU1rsF5NMm8pk0mfKKjarapijQCf%2F2cH0mQOhPFFCIrhaXuskL6sTZsZ9Xvi5LGBpfTEEsyhq7OaI7o8%2FOplIlI1O7bII6VOeun%2F3e6%2FBcMhY13Yrki1vClyLXxxErxz2M6xFQUwbVW6dsIsow4vFFxsODvhAKMP%2BKLKCPbowzf%2BTDEx%2BDGY9Gx0vW60D288S6ZHDS62ABzHRbhFt4Hex3zd8%2FJxxrykPod6UOLj%2BK%2BiTdk%2FFQIzLNmOYxeIofsHRJxPCTAVumycYb2cq2rsHpkkZtALouolLj2gfEOnbUXC0PrTDLmebLBjqkARQReTmz%2Bw3MICM28C%2Bvn95L7meD0p5omuI4fLIRlGGNyKbHDW76wL748TlW1kCRnzIfKWsIucLAp%2F9%2B%2B5MJKayhxIMYHUXUpiQMbtd1Nd8q4wvSaEKEiz9iBWAwg%2FzB6kaEc2kl6xBqHE900dkd7YcxzTpCjdlL8oCXmjQkfuAdp37sIwzkqf0CNxdMY0qV6VIImfgIKE4Ij6dr5xX9dOq9af67&X-Amz-Signature=2bd0dd58a3bac1b77e2c14f5f8928637b25a52a4296abce19981248cae48f42c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7CMHOPM%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5zB2y7kXt3ZTg9FTJnK%2BeG5QxKome1x%2BmZIrQYtSspwIhAJMtUb9gYqldQke0h21GwpigImiKiyD9Dh%2BvgJdpIGKxKv8DCGUQABoMNjM3NDIzMTgzODA1IgzKy43PxTrTPiqqRbIq3AP8MEdZ5nEUutKp02VFC5CSpZ98lgS4aNBfH9JIPrVBYeJWHoHDkqK1f%2F4z9QDEumJPJgP%2BFE0fTknv7O0wezYdKnQbSjs7m2UimUmNzKxgjBju1oGUKcBACtOidQO5d3KRrXAreXNKlqi94hb6EeSpIIaAJMjWHB7A%2F64dWrJkYDBSFGsW5DnjUZacHRnrQRQzLBfss%2B3MYtgplIN97WAe0dzz2QtUPSDv6AcV573sN2Ik9zUXsYmtCMzVjbFimv3LT5%2F9Om4Vt9CHahb0BzsVOBFEopYc6RG7id%2FUHMpB11jFZEKVORNvu0SuGF%2Bv3OctKuDRafS39PLU1rsF5NMm8pk0mfKKjarapijQCf%2F2cH0mQOhPFFCIrhaXuskL6sTZsZ9Xvi5LGBpfTEEsyhq7OaI7o8%2FOplIlI1O7bII6VOeun%2F3e6%2FBcMhY13Yrki1vClyLXxxErxz2M6xFQUwbVW6dsIsow4vFFxsODvhAKMP%2BKLKCPbowzf%2BTDEx%2BDGY9Gx0vW60D288S6ZHDS62ABzHRbhFt4Hex3zd8%2FJxxrykPod6UOLj%2BK%2BiTdk%2FFQIzLNmOYxeIofsHRJxPCTAVumycYb2cq2rsHpkkZtALouolLj2gfEOnbUXC0PrTDLmebLBjqkARQReTmz%2Bw3MICM28C%2Bvn95L7meD0p5omuI4fLIRlGGNyKbHDW76wL748TlW1kCRnzIfKWsIucLAp%2F9%2B%2B5MJKayhxIMYHUXUpiQMbtd1Nd8q4wvSaEKEiz9iBWAwg%2FzB6kaEc2kl6xBqHE900dkd7YcxzTpCjdlL8oCXmjQkfuAdp37sIwzkqf0CNxdMY0qV6VIImfgIKE4Ij6dr5xX9dOq9af67&X-Amz-Signature=6a727f160af8be319781c03ae6aa6b65e2ee50ef8822e863a915814a61fd4574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7CMHOPM%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5zB2y7kXt3ZTg9FTJnK%2BeG5QxKome1x%2BmZIrQYtSspwIhAJMtUb9gYqldQke0h21GwpigImiKiyD9Dh%2BvgJdpIGKxKv8DCGUQABoMNjM3NDIzMTgzODA1IgzKy43PxTrTPiqqRbIq3AP8MEdZ5nEUutKp02VFC5CSpZ98lgS4aNBfH9JIPrVBYeJWHoHDkqK1f%2F4z9QDEumJPJgP%2BFE0fTknv7O0wezYdKnQbSjs7m2UimUmNzKxgjBju1oGUKcBACtOidQO5d3KRrXAreXNKlqi94hb6EeSpIIaAJMjWHB7A%2F64dWrJkYDBSFGsW5DnjUZacHRnrQRQzLBfss%2B3MYtgplIN97WAe0dzz2QtUPSDv6AcV573sN2Ik9zUXsYmtCMzVjbFimv3LT5%2F9Om4Vt9CHahb0BzsVOBFEopYc6RG7id%2FUHMpB11jFZEKVORNvu0SuGF%2Bv3OctKuDRafS39PLU1rsF5NMm8pk0mfKKjarapijQCf%2F2cH0mQOhPFFCIrhaXuskL6sTZsZ9Xvi5LGBpfTEEsyhq7OaI7o8%2FOplIlI1O7bII6VOeun%2F3e6%2FBcMhY13Yrki1vClyLXxxErxz2M6xFQUwbVW6dsIsow4vFFxsODvhAKMP%2BKLKCPbowzf%2BTDEx%2BDGY9Gx0vW60D288S6ZHDS62ABzHRbhFt4Hex3zd8%2FJxxrykPod6UOLj%2BK%2BiTdk%2FFQIzLNmOYxeIofsHRJxPCTAVumycYb2cq2rsHpkkZtALouolLj2gfEOnbUXC0PrTDLmebLBjqkARQReTmz%2Bw3MICM28C%2Bvn95L7meD0p5omuI4fLIRlGGNyKbHDW76wL748TlW1kCRnzIfKWsIucLAp%2F9%2B%2B5MJKayhxIMYHUXUpiQMbtd1Nd8q4wvSaEKEiz9iBWAwg%2FzB6kaEc2kl6xBqHE900dkd7YcxzTpCjdlL8oCXmjQkfuAdp37sIwzkqf0CNxdMY0qV6VIImfgIKE4Ij6dr5xX9dOq9af67&X-Amz-Signature=8e561d1da83c4efd49bbf88222bf01f53bb732e531c534c19d2c64a1411cc7f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7CMHOPM%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5zB2y7kXt3ZTg9FTJnK%2BeG5QxKome1x%2BmZIrQYtSspwIhAJMtUb9gYqldQke0h21GwpigImiKiyD9Dh%2BvgJdpIGKxKv8DCGUQABoMNjM3NDIzMTgzODA1IgzKy43PxTrTPiqqRbIq3AP8MEdZ5nEUutKp02VFC5CSpZ98lgS4aNBfH9JIPrVBYeJWHoHDkqK1f%2F4z9QDEumJPJgP%2BFE0fTknv7O0wezYdKnQbSjs7m2UimUmNzKxgjBju1oGUKcBACtOidQO5d3KRrXAreXNKlqi94hb6EeSpIIaAJMjWHB7A%2F64dWrJkYDBSFGsW5DnjUZacHRnrQRQzLBfss%2B3MYtgplIN97WAe0dzz2QtUPSDv6AcV573sN2Ik9zUXsYmtCMzVjbFimv3LT5%2F9Om4Vt9CHahb0BzsVOBFEopYc6RG7id%2FUHMpB11jFZEKVORNvu0SuGF%2Bv3OctKuDRafS39PLU1rsF5NMm8pk0mfKKjarapijQCf%2F2cH0mQOhPFFCIrhaXuskL6sTZsZ9Xvi5LGBpfTEEsyhq7OaI7o8%2FOplIlI1O7bII6VOeun%2F3e6%2FBcMhY13Yrki1vClyLXxxErxz2M6xFQUwbVW6dsIsow4vFFxsODvhAKMP%2BKLKCPbowzf%2BTDEx%2BDGY9Gx0vW60D288S6ZHDS62ABzHRbhFt4Hex3zd8%2FJxxrykPod6UOLj%2BK%2BiTdk%2FFQIzLNmOYxeIofsHRJxPCTAVumycYb2cq2rsHpkkZtALouolLj2gfEOnbUXC0PrTDLmebLBjqkARQReTmz%2Bw3MICM28C%2Bvn95L7meD0p5omuI4fLIRlGGNyKbHDW76wL748TlW1kCRnzIfKWsIucLAp%2F9%2B%2B5MJKayhxIMYHUXUpiQMbtd1Nd8q4wvSaEKEiz9iBWAwg%2FzB6kaEc2kl6xBqHE900dkd7YcxzTpCjdlL8oCXmjQkfuAdp37sIwzkqf0CNxdMY0qV6VIImfgIKE4Ij6dr5xX9dOq9af67&X-Amz-Signature=a6507593cf66fca2790978bb160d063a41726e547344a7a7b577d5072fbe3987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7CMHOPM%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5zB2y7kXt3ZTg9FTJnK%2BeG5QxKome1x%2BmZIrQYtSspwIhAJMtUb9gYqldQke0h21GwpigImiKiyD9Dh%2BvgJdpIGKxKv8DCGUQABoMNjM3NDIzMTgzODA1IgzKy43PxTrTPiqqRbIq3AP8MEdZ5nEUutKp02VFC5CSpZ98lgS4aNBfH9JIPrVBYeJWHoHDkqK1f%2F4z9QDEumJPJgP%2BFE0fTknv7O0wezYdKnQbSjs7m2UimUmNzKxgjBju1oGUKcBACtOidQO5d3KRrXAreXNKlqi94hb6EeSpIIaAJMjWHB7A%2F64dWrJkYDBSFGsW5DnjUZacHRnrQRQzLBfss%2B3MYtgplIN97WAe0dzz2QtUPSDv6AcV573sN2Ik9zUXsYmtCMzVjbFimv3LT5%2F9Om4Vt9CHahb0BzsVOBFEopYc6RG7id%2FUHMpB11jFZEKVORNvu0SuGF%2Bv3OctKuDRafS39PLU1rsF5NMm8pk0mfKKjarapijQCf%2F2cH0mQOhPFFCIrhaXuskL6sTZsZ9Xvi5LGBpfTEEsyhq7OaI7o8%2FOplIlI1O7bII6VOeun%2F3e6%2FBcMhY13Yrki1vClyLXxxErxz2M6xFQUwbVW6dsIsow4vFFxsODvhAKMP%2BKLKCPbowzf%2BTDEx%2BDGY9Gx0vW60D288S6ZHDS62ABzHRbhFt4Hex3zd8%2FJxxrykPod6UOLj%2BK%2BiTdk%2FFQIzLNmOYxeIofsHRJxPCTAVumycYb2cq2rsHpkkZtALouolLj2gfEOnbUXC0PrTDLmebLBjqkARQReTmz%2Bw3MICM28C%2Bvn95L7meD0p5omuI4fLIRlGGNyKbHDW76wL748TlW1kCRnzIfKWsIucLAp%2F9%2B%2B5MJKayhxIMYHUXUpiQMbtd1Nd8q4wvSaEKEiz9iBWAwg%2FzB6kaEc2kl6xBqHE900dkd7YcxzTpCjdlL8oCXmjQkfuAdp37sIwzkqf0CNxdMY0qV6VIImfgIKE4Ij6dr5xX9dOq9af67&X-Amz-Signature=2540991801baedd95d6f71d3a5817aa3a5328ff17b11869d739f7f27ac638e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCADVHHX%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrgzgARNdsivkxGnBpS6KYnUF7ZUl%2B5K0lhoV8X70dLwIgezOxl8ba4zStkkiNz3wmsk4VrU9qUF5RktMDldDDdsoq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDA8JcWllBMrVN1VxPyrcA8SZt8cS0K93HMYDQc%2FJtA91a4NC4uDx02XnngLbBrW%2BMQRwQPPrDuL%2BY6dPG0PmRq278hNLoF%2FgpMoXYoofh5gZ5leCtO5LTURSCfJkk8lFePVERCLSpi%2BeZBkMVYS%2BcQbWNAzCIrdA1l350C04l55xuDQygKeuKzcS%2Bdf3rzhc50poLD5WJ9XvwPAonJkUgqVACMFxCz7Ze1oKYjBHHNXzybIf2wOM6Tjvvtura8e8%2B8X%2BXuvTtqdnngzfjAsvIkB4Z3sZ0AY2UoIWl37DwIIVSpgOx%2FAeaWUz3%2F3ziuHUzYJ9x08bHarqx8Zf9v%2Bnxizb%2BubOVrR7XoNFM0wRP9U7K6kxQsI4nrkEmhOKhpxQDRszmy5NYyc8fdoxZbou3NR3VsI06zGUzuqocWlekB3KATq173TN5R18Y5voe3BMhIV1r%2FOSGEdj%2FJWxrcN%2FnnL0e4nP%2BPRx0vzUhiu9up05JeEkQmugBf2d38JbEiNPfElfx3ckr75I157GOP2Cn5fLfmF%2FHfzc%2FNSANKSKvrPeM%2BEyc1BMnIjSxYu9oS2%2BN6%2FnpyvDwTiBJ%2Bvq1jfgTIa4AThjgO58JKR0epK%2FCyp96yfMAwou4FBga5B1NKx8m3nFHDb1cuu16uv0MOKZ5ssGOqUB6QMCj4MONwz9Me4%2FIjDUwnI3kWKF8Wrwb7FWEoTwOrMdI3lnopQ3cYczfxOp51JCt57ZABeW6WHR02j17ISb0mW9Rafji%2FA%2B%2BMjaFNyG193ib3qQ8pduE3BTahXRK06pCwedVAPwxt8hiVVdV9WBUuwzLMzawWO%2Fr4ZF3tYbKgABkv0CoJ6MBu%2BJE%2FYaEbr2ehp9Ks4%2FHE5yPlU6yckPV6u7h5fF&X-Amz-Signature=06c1166879154d8f58153b386fa21ddff21da58065681dfbb2b75d9dc8134925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCADVHHX%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrgzgARNdsivkxGnBpS6KYnUF7ZUl%2B5K0lhoV8X70dLwIgezOxl8ba4zStkkiNz3wmsk4VrU9qUF5RktMDldDDdsoq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDA8JcWllBMrVN1VxPyrcA8SZt8cS0K93HMYDQc%2FJtA91a4NC4uDx02XnngLbBrW%2BMQRwQPPrDuL%2BY6dPG0PmRq278hNLoF%2FgpMoXYoofh5gZ5leCtO5LTURSCfJkk8lFePVERCLSpi%2BeZBkMVYS%2BcQbWNAzCIrdA1l350C04l55xuDQygKeuKzcS%2Bdf3rzhc50poLD5WJ9XvwPAonJkUgqVACMFxCz7Ze1oKYjBHHNXzybIf2wOM6Tjvvtura8e8%2B8X%2BXuvTtqdnngzfjAsvIkB4Z3sZ0AY2UoIWl37DwIIVSpgOx%2FAeaWUz3%2F3ziuHUzYJ9x08bHarqx8Zf9v%2Bnxizb%2BubOVrR7XoNFM0wRP9U7K6kxQsI4nrkEmhOKhpxQDRszmy5NYyc8fdoxZbou3NR3VsI06zGUzuqocWlekB3KATq173TN5R18Y5voe3BMhIV1r%2FOSGEdj%2FJWxrcN%2FnnL0e4nP%2BPRx0vzUhiu9up05JeEkQmugBf2d38JbEiNPfElfx3ckr75I157GOP2Cn5fLfmF%2FHfzc%2FNSANKSKvrPeM%2BEyc1BMnIjSxYu9oS2%2BN6%2FnpyvDwTiBJ%2Bvq1jfgTIa4AThjgO58JKR0epK%2FCyp96yfMAwou4FBga5B1NKx8m3nFHDb1cuu16uv0MOKZ5ssGOqUB6QMCj4MONwz9Me4%2FIjDUwnI3kWKF8Wrwb7FWEoTwOrMdI3lnopQ3cYczfxOp51JCt57ZABeW6WHR02j17ISb0mW9Rafji%2FA%2B%2BMjaFNyG193ib3qQ8pduE3BTahXRK06pCwedVAPwxt8hiVVdV9WBUuwzLMzawWO%2Fr4ZF3tYbKgABkv0CoJ6MBu%2BJE%2FYaEbr2ehp9Ks4%2FHE5yPlU6yckPV6u7h5fF&X-Amz-Signature=ce8540a29f743603f97ebd19418e79560ed5ce022db196706a9c550974fe2a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCADVHHX%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrgzgARNdsivkxGnBpS6KYnUF7ZUl%2B5K0lhoV8X70dLwIgezOxl8ba4zStkkiNz3wmsk4VrU9qUF5RktMDldDDdsoq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDA8JcWllBMrVN1VxPyrcA8SZt8cS0K93HMYDQc%2FJtA91a4NC4uDx02XnngLbBrW%2BMQRwQPPrDuL%2BY6dPG0PmRq278hNLoF%2FgpMoXYoofh5gZ5leCtO5LTURSCfJkk8lFePVERCLSpi%2BeZBkMVYS%2BcQbWNAzCIrdA1l350C04l55xuDQygKeuKzcS%2Bdf3rzhc50poLD5WJ9XvwPAonJkUgqVACMFxCz7Ze1oKYjBHHNXzybIf2wOM6Tjvvtura8e8%2B8X%2BXuvTtqdnngzfjAsvIkB4Z3sZ0AY2UoIWl37DwIIVSpgOx%2FAeaWUz3%2F3ziuHUzYJ9x08bHarqx8Zf9v%2Bnxizb%2BubOVrR7XoNFM0wRP9U7K6kxQsI4nrkEmhOKhpxQDRszmy5NYyc8fdoxZbou3NR3VsI06zGUzuqocWlekB3KATq173TN5R18Y5voe3BMhIV1r%2FOSGEdj%2FJWxrcN%2FnnL0e4nP%2BPRx0vzUhiu9up05JeEkQmugBf2d38JbEiNPfElfx3ckr75I157GOP2Cn5fLfmF%2FHfzc%2FNSANKSKvrPeM%2BEyc1BMnIjSxYu9oS2%2BN6%2FnpyvDwTiBJ%2Bvq1jfgTIa4AThjgO58JKR0epK%2FCyp96yfMAwou4FBga5B1NKx8m3nFHDb1cuu16uv0MOKZ5ssGOqUB6QMCj4MONwz9Me4%2FIjDUwnI3kWKF8Wrwb7FWEoTwOrMdI3lnopQ3cYczfxOp51JCt57ZABeW6WHR02j17ISb0mW9Rafji%2FA%2B%2BMjaFNyG193ib3qQ8pduE3BTahXRK06pCwedVAPwxt8hiVVdV9WBUuwzLMzawWO%2Fr4ZF3tYbKgABkv0CoJ6MBu%2BJE%2FYaEbr2ehp9Ks4%2FHE5yPlU6yckPV6u7h5fF&X-Amz-Signature=181f3a727160953e3f8cdb0b439c8cc7aeb47fe41d1d1c02ceb4be4dab529888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647IBVDBZ%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdMJcrzevVwV%2FJVY9AyVjZ%2B%2FFfk65sFmg%2BBzTNq3fBPQIgWDFvUKQwMURJPlFq4BVCZPAbP27oVhp6rcAnyH%2FGKbYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDL%2FVkvILuyhuoAGhgSrcA62i%2Fqs1fsAl3dHRLlOoWEL1t%2BBnHBLDSyNGmRkTxgm2U4rq6FIUb9JAQ9p5nM5JEb9POKL3BOlVnR2RZXwqy9Gg8KJ8tdRMkbuUOKBKM6%2FJQ9oBGoRllGzud5Unb%2BRSvz7bu7QhBmwLbnvsrCLWQrpxrbCadKImM6lzt8Gw4ddG3PTboyN2ThM6618ux48vDZ00wqxlSX7uVkBrEeNsUlrMLWE8Zq5eTxusfZeg7wRA88iLUJIIncySioYH%2B8U3TYRWD%2FP%2BfPsXSQsOHgfTxJpgnYZlxnOH1IAXwIl87skZqCI2hhCNuiFyCHKxZhXRco2%2FxVKgxjqh1%2FcmqiAxvR%2Ftjju0hC7d5rBhU3farg6nU4lue6lA%2Bc0APeTfeRS2rHCAwvGZq2pfyoLXc26Lvp3cMQY2BkR8XkSr6cR%2FNoXrD5W9j3R3D1SJbTI%2BgtJ2%2F3D%2BIzT1e1dbyOb6pyo9hoxYxy87CBoPbArjbCnTOaQghaJEaDaqqTtVB3fl0LdVE%2Bb5NhcTWoQsD6RuzNK%2FvCyFeuAvs4PTbNvPjSx9TfjebnwURWV1tjV60cflyc51kv%2Fd3zEEf1nuW%2F7T0KmorDFusG10MAN2kyTumphH6UNRZFvXfwj%2F36Zn324YMP%2BY5ssGOqUB7uOrkN0iMntx2IuI3L3NwzZM8czkONKsoXxAqh8tMjM9oqi%2Fc0VrYxtLGfcpePx3%2F8DTKL3kBOEEjJ%2FjoWlDLVaddQTjcnz%2Bi69KePRyUKfijVTXRKutmRRe6rPonB%2BxKuQT1FdVpusxNbQsdtbTVF1DCmHIfgrhKD%2Bb%2BjVgBS7RCfvqyUx9Vph3TvNa7NPvgLogp8%2BvjEfO5tK0XN%2BnkUoOaMpZ&X-Amz-Signature=d2648f8483d0a85f98e28a68f9bf5cf8c7fbd3ce674856a703fa027d6459e0c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647IBVDBZ%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdMJcrzevVwV%2FJVY9AyVjZ%2B%2FFfk65sFmg%2BBzTNq3fBPQIgWDFvUKQwMURJPlFq4BVCZPAbP27oVhp6rcAnyH%2FGKbYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDL%2FVkvILuyhuoAGhgSrcA62i%2Fqs1fsAl3dHRLlOoWEL1t%2BBnHBLDSyNGmRkTxgm2U4rq6FIUb9JAQ9p5nM5JEb9POKL3BOlVnR2RZXwqy9Gg8KJ8tdRMkbuUOKBKM6%2FJQ9oBGoRllGzud5Unb%2BRSvz7bu7QhBmwLbnvsrCLWQrpxrbCadKImM6lzt8Gw4ddG3PTboyN2ThM6618ux48vDZ00wqxlSX7uVkBrEeNsUlrMLWE8Zq5eTxusfZeg7wRA88iLUJIIncySioYH%2B8U3TYRWD%2FP%2BfPsXSQsOHgfTxJpgnYZlxnOH1IAXwIl87skZqCI2hhCNuiFyCHKxZhXRco2%2FxVKgxjqh1%2FcmqiAxvR%2Ftjju0hC7d5rBhU3farg6nU4lue6lA%2Bc0APeTfeRS2rHCAwvGZq2pfyoLXc26Lvp3cMQY2BkR8XkSr6cR%2FNoXrD5W9j3R3D1SJbTI%2BgtJ2%2F3D%2BIzT1e1dbyOb6pyo9hoxYxy87CBoPbArjbCnTOaQghaJEaDaqqTtVB3fl0LdVE%2Bb5NhcTWoQsD6RuzNK%2FvCyFeuAvs4PTbNvPjSx9TfjebnwURWV1tjV60cflyc51kv%2Fd3zEEf1nuW%2F7T0KmorDFusG10MAN2kyTumphH6UNRZFvXfwj%2F36Zn324YMP%2BY5ssGOqUB7uOrkN0iMntx2IuI3L3NwzZM8czkONKsoXxAqh8tMjM9oqi%2Fc0VrYxtLGfcpePx3%2F8DTKL3kBOEEjJ%2FjoWlDLVaddQTjcnz%2Bi69KePRyUKfijVTXRKutmRRe6rPonB%2BxKuQT1FdVpusxNbQsdtbTVF1DCmHIfgrhKD%2Bb%2BjVgBS7RCfvqyUx9Vph3TvNa7NPvgLogp8%2BvjEfO5tK0XN%2BnkUoOaMpZ&X-Amz-Signature=614480786e62b5f91ddd279a03c5af2227c6288319cb9d501118e728b6a7affd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4D7AF2%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUgTIcKM9yKuPyzjCo69dWx27Kz7A6hxD1ZEzLeLGrFQIgS9S9rrLuvVCL7xDKZ4rR4ZuOio6lf8YZa8vY9zBjI4Yq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFPkPS3p3yQ5bbtCOSrcA%2BFUQjxHDpjktku9Xnv%2BpTtKH0pzafJ16GuU92bHL6ABWEpYKxVGIp3w0fQNWbcQwRTv4jxxV5mtt1bC0IdGBH0a2Hy%2BdN6c5ePmI4q6eeO85si7H4SB5eUtwDDdHZdXaAH924FRwsapD3GslVn%2FObx1%2FuT4Si4IaHunTY6N%2FQHVALOnoRb%2BqpyDGqEvo9dLujcugBVf5HS5CqXkJBGNeCQCLA73xB5WZbYY%2B7xhIFy3ToPs8rOEv5NkyUp%2FgsUoIBrvGJBcFVlxHvTGXzWFWSh%2FiUeKBoxy%2FqRttLdW1JIXVpcpOwHDpXhfz5B9fxe%2FG83NRf8EOZ78aavBLcyULBBjw8oEjrtW6Tp8AnpUNCwt%2FJY3fYXxXmWX4N4OW1UobA%2BInTL%2BJOVhcoXxuQvRjbr2DY8qMWYvTyAZem5Y0DIeNQWEvlni%2BgdZ%2FsHaOYvySYFPW3dbZK9VeDmX88HFIrGh5Z%2F%2FQUrJCRxq5fvNdKcLVZShb4MfzPkPZ5cIc9zF5AjDp6MWx3Q5OKCPox57Q4tIUS7JXqeousnNkRFwvaDaO5Yx0o8muUTJ%2FNBWnyS6poOpDFMdyH2Y7jdUd1Z0ta%2BJuQGT8Pplc%2BX5kxSsEiXQzXH66Sv%2B55W2Q6SyMP6X5ssGOqUBHSxtns%2F0gn3jYLTJq7RpsFhPZtgDnztty5eOBI7ICLQaVTKxLUAIdhhbeYp74HGNsZz0AYr0mKfUS9YaqwpRJ8DzRrYDXBN8tLqzLqStSfNOf45i9AAkLXj0KQbRPTiXE6hQOaMkJjd%2BZ2%2FsJAK2ouTtRy9jzjHavBQ4m%2B%2FIrD6WnodQCb%2BOdn%2Bjdt1g%2BmxUr5QC5dKy8SseX17rwHR1XksCbm%2F6&X-Amz-Signature=766604d400c39aa75b640056da7a4d7f756283bf95b61f3a7a663da96fda7dac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4D7AF2%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUgTIcKM9yKuPyzjCo69dWx27Kz7A6hxD1ZEzLeLGrFQIgS9S9rrLuvVCL7xDKZ4rR4ZuOio6lf8YZa8vY9zBjI4Yq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFPkPS3p3yQ5bbtCOSrcA%2BFUQjxHDpjktku9Xnv%2BpTtKH0pzafJ16GuU92bHL6ABWEpYKxVGIp3w0fQNWbcQwRTv4jxxV5mtt1bC0IdGBH0a2Hy%2BdN6c5ePmI4q6eeO85si7H4SB5eUtwDDdHZdXaAH924FRwsapD3GslVn%2FObx1%2FuT4Si4IaHunTY6N%2FQHVALOnoRb%2BqpyDGqEvo9dLujcugBVf5HS5CqXkJBGNeCQCLA73xB5WZbYY%2B7xhIFy3ToPs8rOEv5NkyUp%2FgsUoIBrvGJBcFVlxHvTGXzWFWSh%2FiUeKBoxy%2FqRttLdW1JIXVpcpOwHDpXhfz5B9fxe%2FG83NRf8EOZ78aavBLcyULBBjw8oEjrtW6Tp8AnpUNCwt%2FJY3fYXxXmWX4N4OW1UobA%2BInTL%2BJOVhcoXxuQvRjbr2DY8qMWYvTyAZem5Y0DIeNQWEvlni%2BgdZ%2FsHaOYvySYFPW3dbZK9VeDmX88HFIrGh5Z%2F%2FQUrJCRxq5fvNdKcLVZShb4MfzPkPZ5cIc9zF5AjDp6MWx3Q5OKCPox57Q4tIUS7JXqeousnNkRFwvaDaO5Yx0o8muUTJ%2FNBWnyS6poOpDFMdyH2Y7jdUd1Z0ta%2BJuQGT8Pplc%2BX5kxSsEiXQzXH66Sv%2B55W2Q6SyMP6X5ssGOqUBHSxtns%2F0gn3jYLTJq7RpsFhPZtgDnztty5eOBI7ICLQaVTKxLUAIdhhbeYp74HGNsZz0AYr0mKfUS9YaqwpRJ8DzRrYDXBN8tLqzLqStSfNOf45i9AAkLXj0KQbRPTiXE6hQOaMkJjd%2BZ2%2FsJAK2ouTtRy9jzjHavBQ4m%2B%2FIrD6WnodQCb%2BOdn%2Bjdt1g%2BmxUr5QC5dKy8SseX17rwHR1XksCbm%2F6&X-Amz-Signature=fff49d20724b8f2043a7ea4f0e9054d413f6fd1328f1fee72e3be30a12f0cb61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4D7AF2%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUgTIcKM9yKuPyzjCo69dWx27Kz7A6hxD1ZEzLeLGrFQIgS9S9rrLuvVCL7xDKZ4rR4ZuOio6lf8YZa8vY9zBjI4Yq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFPkPS3p3yQ5bbtCOSrcA%2BFUQjxHDpjktku9Xnv%2BpTtKH0pzafJ16GuU92bHL6ABWEpYKxVGIp3w0fQNWbcQwRTv4jxxV5mtt1bC0IdGBH0a2Hy%2BdN6c5ePmI4q6eeO85si7H4SB5eUtwDDdHZdXaAH924FRwsapD3GslVn%2FObx1%2FuT4Si4IaHunTY6N%2FQHVALOnoRb%2BqpyDGqEvo9dLujcugBVf5HS5CqXkJBGNeCQCLA73xB5WZbYY%2B7xhIFy3ToPs8rOEv5NkyUp%2FgsUoIBrvGJBcFVlxHvTGXzWFWSh%2FiUeKBoxy%2FqRttLdW1JIXVpcpOwHDpXhfz5B9fxe%2FG83NRf8EOZ78aavBLcyULBBjw8oEjrtW6Tp8AnpUNCwt%2FJY3fYXxXmWX4N4OW1UobA%2BInTL%2BJOVhcoXxuQvRjbr2DY8qMWYvTyAZem5Y0DIeNQWEvlni%2BgdZ%2FsHaOYvySYFPW3dbZK9VeDmX88HFIrGh5Z%2F%2FQUrJCRxq5fvNdKcLVZShb4MfzPkPZ5cIc9zF5AjDp6MWx3Q5OKCPox57Q4tIUS7JXqeousnNkRFwvaDaO5Yx0o8muUTJ%2FNBWnyS6poOpDFMdyH2Y7jdUd1Z0ta%2BJuQGT8Pplc%2BX5kxSsEiXQzXH66Sv%2B55W2Q6SyMP6X5ssGOqUBHSxtns%2F0gn3jYLTJq7RpsFhPZtgDnztty5eOBI7ICLQaVTKxLUAIdhhbeYp74HGNsZz0AYr0mKfUS9YaqwpRJ8DzRrYDXBN8tLqzLqStSfNOf45i9AAkLXj0KQbRPTiXE6hQOaMkJjd%2BZ2%2FsJAK2ouTtRy9jzjHavBQ4m%2B%2FIrD6WnodQCb%2BOdn%2Bjdt1g%2BmxUr5QC5dKy8SseX17rwHR1XksCbm%2F6&X-Amz-Signature=7f580036cc87a49ad63f46a02a39c3209b7468efceb0b0492a0212e41f67d879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4D7AF2%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUgTIcKM9yKuPyzjCo69dWx27Kz7A6hxD1ZEzLeLGrFQIgS9S9rrLuvVCL7xDKZ4rR4ZuOio6lf8YZa8vY9zBjI4Yq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFPkPS3p3yQ5bbtCOSrcA%2BFUQjxHDpjktku9Xnv%2BpTtKH0pzafJ16GuU92bHL6ABWEpYKxVGIp3w0fQNWbcQwRTv4jxxV5mtt1bC0IdGBH0a2Hy%2BdN6c5ePmI4q6eeO85si7H4SB5eUtwDDdHZdXaAH924FRwsapD3GslVn%2FObx1%2FuT4Si4IaHunTY6N%2FQHVALOnoRb%2BqpyDGqEvo9dLujcugBVf5HS5CqXkJBGNeCQCLA73xB5WZbYY%2B7xhIFy3ToPs8rOEv5NkyUp%2FgsUoIBrvGJBcFVlxHvTGXzWFWSh%2FiUeKBoxy%2FqRttLdW1JIXVpcpOwHDpXhfz5B9fxe%2FG83NRf8EOZ78aavBLcyULBBjw8oEjrtW6Tp8AnpUNCwt%2FJY3fYXxXmWX4N4OW1UobA%2BInTL%2BJOVhcoXxuQvRjbr2DY8qMWYvTyAZem5Y0DIeNQWEvlni%2BgdZ%2FsHaOYvySYFPW3dbZK9VeDmX88HFIrGh5Z%2F%2FQUrJCRxq5fvNdKcLVZShb4MfzPkPZ5cIc9zF5AjDp6MWx3Q5OKCPox57Q4tIUS7JXqeousnNkRFwvaDaO5Yx0o8muUTJ%2FNBWnyS6poOpDFMdyH2Y7jdUd1Z0ta%2BJuQGT8Pplc%2BX5kxSsEiXQzXH66Sv%2B55W2Q6SyMP6X5ssGOqUBHSxtns%2F0gn3jYLTJq7RpsFhPZtgDnztty5eOBI7ICLQaVTKxLUAIdhhbeYp74HGNsZz0AYr0mKfUS9YaqwpRJ8DzRrYDXBN8tLqzLqStSfNOf45i9AAkLXj0KQbRPTiXE6hQOaMkJjd%2BZ2%2FsJAK2ouTtRy9jzjHavBQ4m%2B%2FIrD6WnodQCb%2BOdn%2Bjdt1g%2BmxUr5QC5dKy8SseX17rwHR1XksCbm%2F6&X-Amz-Signature=e6606b82d1f30dec3d094adb035573d8cb9a87141bb2a515a2af4cebd1bf5089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4D7AF2%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUgTIcKM9yKuPyzjCo69dWx27Kz7A6hxD1ZEzLeLGrFQIgS9S9rrLuvVCL7xDKZ4rR4ZuOio6lf8YZa8vY9zBjI4Yq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFPkPS3p3yQ5bbtCOSrcA%2BFUQjxHDpjktku9Xnv%2BpTtKH0pzafJ16GuU92bHL6ABWEpYKxVGIp3w0fQNWbcQwRTv4jxxV5mtt1bC0IdGBH0a2Hy%2BdN6c5ePmI4q6eeO85si7H4SB5eUtwDDdHZdXaAH924FRwsapD3GslVn%2FObx1%2FuT4Si4IaHunTY6N%2FQHVALOnoRb%2BqpyDGqEvo9dLujcugBVf5HS5CqXkJBGNeCQCLA73xB5WZbYY%2B7xhIFy3ToPs8rOEv5NkyUp%2FgsUoIBrvGJBcFVlxHvTGXzWFWSh%2FiUeKBoxy%2FqRttLdW1JIXVpcpOwHDpXhfz5B9fxe%2FG83NRf8EOZ78aavBLcyULBBjw8oEjrtW6Tp8AnpUNCwt%2FJY3fYXxXmWX4N4OW1UobA%2BInTL%2BJOVhcoXxuQvRjbr2DY8qMWYvTyAZem5Y0DIeNQWEvlni%2BgdZ%2FsHaOYvySYFPW3dbZK9VeDmX88HFIrGh5Z%2F%2FQUrJCRxq5fvNdKcLVZShb4MfzPkPZ5cIc9zF5AjDp6MWx3Q5OKCPox57Q4tIUS7JXqeousnNkRFwvaDaO5Yx0o8muUTJ%2FNBWnyS6poOpDFMdyH2Y7jdUd1Z0ta%2BJuQGT8Pplc%2BX5kxSsEiXQzXH66Sv%2B55W2Q6SyMP6X5ssGOqUBHSxtns%2F0gn3jYLTJq7RpsFhPZtgDnztty5eOBI7ICLQaVTKxLUAIdhhbeYp74HGNsZz0AYr0mKfUS9YaqwpRJ8DzRrYDXBN8tLqzLqStSfNOf45i9AAkLXj0KQbRPTiXE6hQOaMkJjd%2BZ2%2FsJAK2ouTtRy9jzjHavBQ4m%2B%2FIrD6WnodQCb%2BOdn%2Bjdt1g%2BmxUr5QC5dKy8SseX17rwHR1XksCbm%2F6&X-Amz-Signature=69835d3f3448a2ba24235528eea81b4ca204c34340ddff553c3b6db775c1d358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHJWTFI%2F20260128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260128T041648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdlYVErN7Hi4OAOoXcM6OVzdCYFKUqs2VIur58%2Bds5wAiEA1GdiUhpd%2F41uoLGIuZtq41KupFE4Da6vacsBz46KjDUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFDAvvkAFpad44pZYyrcA4YsRWIsw4uBuWLGuCnhm7QlcJYI9Gg9Svpba9jludtKh%2BK3SktafUFjR0CKE4nGHsyX7VsiDXUiFsTydlB56of%2F%2BSf79S4RsnucLh0WiXo%2B9nCnTOue8AttsQ9k7YlrQ18eoxXO7I%2FO9453cZGdN01Oz%2BzndyxGOHEiCIHJ54sM1tLdTdHRbuUaoB5tTP10NISoQfXmAuBCUdj4uZdFOOXXe987GH%2BzE35csk5jkhUOY8n78J3u%2BgmDR4oyVagE57F2fvMSHXSH4DBiEHAx%2BnYHw%2BfnCOs6vLoN6q6%2Bbf5AtvuqjqYQF0wDEweg6VeNkSsLJ9PhwnxDiLIpWj7kBwXZg%2BaOkHA0tGGfWxcNvpCzAkg5I%2BOGvBJpBA%2FwFNtF4escBSkY19POEYK8AZ%2B1hBG6YxV28pBJSJr965T%2BhVtUkjFG9YdOhcoPXVRMo47%2BdTVKkIge1mC7Mb6koy4cPSjp%2FaPiHeYYLrhYje2Ar36EI3w0GJB3Plvq1veWh4HkUEVHcVUS2kUB4zoS46XQIRnfg4JvU%2Fn%2F8RC5%2F773xfl03jSqW2BOZ6x%2BIPAiVZdaptSnoO6w2xLRoAPkplXfBfEnsPSbF3s%2BH8VVTBRr6JNru%2Ba8dEJIhWANpKhRMMiY5ssGOqUB9lhELc5cJmYYj6ZHuS%2FQ%2FSk5BgCB1mTrwhpitRdUHe6%2FWCATznYBwwrIatUa6k1yV518CmF7K4%2BIe3WbFqEP40AMOorvG8A7rnwajunxmCsf9BkTNPVgrUB7mD5B8uUCNC2XAE%2BhylqZtKJR7pwPQVurIlV7e2uU8%2BOQh1cr55%2FG4iqIJuJhHTKWvlstMcfCKEuSBBU%2BaAhIc4qj6XLWeDSlGY5U&X-Amz-Signature=165a01fe70a3f3115bfab5c1a7c1a1986517783cc157c69a4f32b39e27dce27f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

