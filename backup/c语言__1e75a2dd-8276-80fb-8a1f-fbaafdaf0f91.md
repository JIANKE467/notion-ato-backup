
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHVUCUSX%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDI4YSXfPzF%2BgIaBk%2BpeiG%2BWIIzJvFeVzc9KLa9VMJipAIgASamFg%2F%2BToqDT5Z3UyW4PbkDhp2uV7%2BmxhZMwPZvMPcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDH9xUL%2B8OLVDDofw5ircA7kb%2ByWV2LLtGHVRWIkZopS6NkL0CB1hrxzVnlSMIpglllg%2FjPQGoWjM8bGu%2Bf1LmNoqIShF4E%2Bji6R%2BKJxwzEXUYu8mzy%2BDf70ZGXpmBvHF%2FgIciWSh0GjQ7kiuyu0bMU%2BnD5deshy%2FM3%2BjTPOj%2Fi2Hs%2BmKSIwhaz8LYXptQXzlzzWLq65iKk7vXu2Ib0nXYCr3IoMgKWngbeaicATMhAzsa4tLOZr8UCo7zUukQodt7CE0kiIEkjHf2vwcXxp%2BoCmjhJUpbRx03JDQs7017Ist%2BWHwCTRYYnJyurIUJwAhOu%2FjA2KX9%2B00JWhbVumQReQViEjP5MEhXoQg%2FWoX4W2CEhcNqwtGfEcyFR15Dm4obFlpZHNgx4En8LOEtzpELfEOAheWJ1q9hxb5dpvqMlhAyO%2F7ARFGuR5ugKkPZB2XyH5AD5UBvu%2FLCPyjpA4p5undLid%2Fnuq%2FuyG0Qi8t7aIRWlUs9FFwdyTBm%2BPnGYBl6PcIs0DchC5hvaXKg1zRuNAVVtKfu%2Bj%2B5HawpD2lCm1C4wcfQbe3gls8hXK%2Bkth8LON%2FEkcvguVIgfGYx8sodYyAVuyBZEkwo67wumzYwjcuKIz1K38%2FDlQHS%2FFTk1IF9%2BqxXmFIJhLWfcNwMJfwssoGOqUBThzMLowWq2hR6sxUTuy%2FC%2BcI5EqduCY%2B8QBZt96pMYiU%2Bo%2FkLvWTfovCw4Z6Z35yp%2FiOsWP7gKTviLIGQtMhRTqr9dfj2suaDcL5Hmqk9GuK82Ew50ENQ8nQ8ximYunP3WYixbVZJxB94AKmcyqPsLP0zVCofjlwg6jFz8zBogai4ryiI7Hb5pISmRXbTsvGWvpmeZNeknh7TXd8ph5%2FFWailZ6Z&X-Amz-Signature=89ad2bfa34cc9863c4579974a2d04346ccb4713cfde17e7013487e9e162efb12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQHCL2F4%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIB4YwgKRIi8e%2Fb1uPGbk5qKnMSUhmQhFsIhzjUhS4%2FYtAiEA0TEOB70N5Kmj4KVFpsMFByjJmklR7eVW%2FiRpF3AZxvAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMYoCVjHwvtCumJWKSrcA7sXA7v4pzlVDwK77iBDuHytGt9RO95fxEeJcZ616Ilnw352xl6H3BWCIqNzffkOjqGE2rTjQw7ICJcctd6L890MkPt7xUvEz2YcLCbPqq2X9yIdpBxp3CCuRrD%2FELzONjwEcFSbzsMGFMjGqn0JHdgPbsRojJr%2Bs3B618RVNADogsfBXeaT4L%2F%2FhMQpWn8HJBUdJnGhsJicoeY8XCPrifbiJBh6RuF6LN2Nl%2BggWM%2BbKzUaemO6Z%2BpuHmbYtYTb5duTFXQ96ywEfGXhsWzINvbMqxG7A7L939KxB7ydtE1PfYB4fCMiAdrUi4OcqDrICvQeJV7NeEEPAC3beEFoY6VZ6X6mbeeiPccqzPcvz1v4rZbJ8uOUhiEcoELcXsRC6bu1hxddE3ytllbv8aK4C5LIH0BwQvVe8CH4nfByhBBvbXvO9MedCYiDfJ7FlGn7tK3oFBfbMWAQGlOh9scGYOmunOOjArjaFTo069c6iZiMlpEyurE0awbwp3OfofhX853v7j1M9BZBfCiOUmd5YARD4a93P%2Fh0uZRzix%2FqpYPuBb0xazaJ1saHPhRy9BzhFALmhQ0V7QantbO0fs1KUovDWegFTxO1XUOQewzUcXOc5dbkuvOFxxfz6Ff1MP3vssoGOqUBKn4YokzVS1JwBY3VTOIA0ww7cfJKEETXLjMgW8ggr3LVb0K0j1eC8Fys%2BOHdY3wzWLHcyxgaeQOfx4YllZV58ZEZSgPPg%2FL3Gu1%2By3iPJlPamV4ZUJzeXpzgfzZEU0oYiMXY1qETs4MnBLLVrMpjVSXc0PBJBkDRqzHS1U9Z68xzIQR4blE8o%2BZpEiZoKa6e3mFCiXYXb3HXIo3YogUeZEByKtLk&X-Amz-Signature=1d29f2b318651eff678ebf85d21eb4ea8e63758113d92a33c2d32e6bcf45a528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQHCL2F4%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIB4YwgKRIi8e%2Fb1uPGbk5qKnMSUhmQhFsIhzjUhS4%2FYtAiEA0TEOB70N5Kmj4KVFpsMFByjJmklR7eVW%2FiRpF3AZxvAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMYoCVjHwvtCumJWKSrcA7sXA7v4pzlVDwK77iBDuHytGt9RO95fxEeJcZ616Ilnw352xl6H3BWCIqNzffkOjqGE2rTjQw7ICJcctd6L890MkPt7xUvEz2YcLCbPqq2X9yIdpBxp3CCuRrD%2FELzONjwEcFSbzsMGFMjGqn0JHdgPbsRojJr%2Bs3B618RVNADogsfBXeaT4L%2F%2FhMQpWn8HJBUdJnGhsJicoeY8XCPrifbiJBh6RuF6LN2Nl%2BggWM%2BbKzUaemO6Z%2BpuHmbYtYTb5duTFXQ96ywEfGXhsWzINvbMqxG7A7L939KxB7ydtE1PfYB4fCMiAdrUi4OcqDrICvQeJV7NeEEPAC3beEFoY6VZ6X6mbeeiPccqzPcvz1v4rZbJ8uOUhiEcoELcXsRC6bu1hxddE3ytllbv8aK4C5LIH0BwQvVe8CH4nfByhBBvbXvO9MedCYiDfJ7FlGn7tK3oFBfbMWAQGlOh9scGYOmunOOjArjaFTo069c6iZiMlpEyurE0awbwp3OfofhX853v7j1M9BZBfCiOUmd5YARD4a93P%2Fh0uZRzix%2FqpYPuBb0xazaJ1saHPhRy9BzhFALmhQ0V7QantbO0fs1KUovDWegFTxO1XUOQewzUcXOc5dbkuvOFxxfz6Ff1MP3vssoGOqUBKn4YokzVS1JwBY3VTOIA0ww7cfJKEETXLjMgW8ggr3LVb0K0j1eC8Fys%2BOHdY3wzWLHcyxgaeQOfx4YllZV58ZEZSgPPg%2FL3Gu1%2By3iPJlPamV4ZUJzeXpzgfzZEU0oYiMXY1qETs4MnBLLVrMpjVSXc0PBJBkDRqzHS1U9Z68xzIQR4blE8o%2BZpEiZoKa6e3mFCiXYXb3HXIo3YogUeZEByKtLk&X-Amz-Signature=7b54f10140ff29e68f45a9e13f0d5d43dc0ac666e4d0cf52e37538c39a3e807d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLOVD5OE%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIFpIZJcNUhwoZYPrHPwmhB2gMkCjzfbizJRwAk6y8%2FX%2BAiA2mclHf%2B3TjYAE0estzFwJH%2FnKy7imh0QXC%2BC4WdMAuyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMkEKa%2FCQQBGg8ksh4KtwDh7wv2KeKbhfZLmz8Fo43TX%2BkS5amI2ahn2ApnE%2BR8zCGuZDmN2H89OrDxhIF2KCtvoG5XYvOZP%2FLhZ2Nv%2BIONGYVJxEAyXxSrCm69ceniBmTne1P8IHjYArv%2BYxe6WcF8WxYOwOWBvLqviymFFZBiZcAtfofjZBc26oBC8FzEdrDoQBSCncLWRvO8TAiZJyzUwm7XTLyPgDR782sRKwbhpvqt0nRiRlEFKyt%2FT5S1bAj8ah1aUQyHVyP1j8FJRq01kYWjl%2BQJjVZ%2BpygUChZNLpvK0N2mYw1R4xq7Whw%2FvrXsk2zMB%2BJln55tKBZGsD6T2fJG7%2FF5MkQy6Bi6D17y8eGHgQlnDVu1TQApvoRLNVbBKE4Lu8JUWcc6%2FvhZVAgu54rdXEqdDETVr2w%2BM5IvYU4ah%2Bi322iSoRob%2BNycpvuqK2xcgyDh4cGxezgEXR6WLPN1UmFb84HPvFzoyMezgucuwsjnGv66z%2FUtf9J5SjM%2BCcoT9%2F7C7qwJe3zrLo4h7etNapV1ppgWLRgWKextmYzbt6xLs7K0lDnj1xl7A26XjN%2F7TZV%2BbgbAtrVN6%2Bv6kQc4Hz2Ga8s7euZaDvTWng2Xe3q67gBHpALe6sQGl3LZeDSmAee7DcLHd8w7%2B%2ByygY6pgE8eLYSApbMVfwUhd7W%2BMkifxHg9yYdFF2Jb6WYj2ZVFDDL1fPO%2BIXA2tfPqokBTWggHUVW3%2FMeeEYPQDnXAF8O8vhaMPcvrd2bT8JDUX7bnZS1Wx8ZCav33Y8BhlrtbDeFUZEsNJgpUEwrOdkd1%2BnoiPw5YIadl5hGUJTj0GzVeWgs3pj4ARKlR16lgHHYf99RwMhIYsbhAFRj84bBFcHJLnOkXOzk&X-Amz-Signature=3aaf22e780dee678009e9b4bfb9a0a8dad0a5f2e54f5d4ec53ace5419d6b1621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLOVD5OE%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIFpIZJcNUhwoZYPrHPwmhB2gMkCjzfbizJRwAk6y8%2FX%2BAiA2mclHf%2B3TjYAE0estzFwJH%2FnKy7imh0QXC%2BC4WdMAuyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMkEKa%2FCQQBGg8ksh4KtwDh7wv2KeKbhfZLmz8Fo43TX%2BkS5amI2ahn2ApnE%2BR8zCGuZDmN2H89OrDxhIF2KCtvoG5XYvOZP%2FLhZ2Nv%2BIONGYVJxEAyXxSrCm69ceniBmTne1P8IHjYArv%2BYxe6WcF8WxYOwOWBvLqviymFFZBiZcAtfofjZBc26oBC8FzEdrDoQBSCncLWRvO8TAiZJyzUwm7XTLyPgDR782sRKwbhpvqt0nRiRlEFKyt%2FT5S1bAj8ah1aUQyHVyP1j8FJRq01kYWjl%2BQJjVZ%2BpygUChZNLpvK0N2mYw1R4xq7Whw%2FvrXsk2zMB%2BJln55tKBZGsD6T2fJG7%2FF5MkQy6Bi6D17y8eGHgQlnDVu1TQApvoRLNVbBKE4Lu8JUWcc6%2FvhZVAgu54rdXEqdDETVr2w%2BM5IvYU4ah%2Bi322iSoRob%2BNycpvuqK2xcgyDh4cGxezgEXR6WLPN1UmFb84HPvFzoyMezgucuwsjnGv66z%2FUtf9J5SjM%2BCcoT9%2F7C7qwJe3zrLo4h7etNapV1ppgWLRgWKextmYzbt6xLs7K0lDnj1xl7A26XjN%2F7TZV%2BbgbAtrVN6%2Bv6kQc4Hz2Ga8s7euZaDvTWng2Xe3q67gBHpALe6sQGl3LZeDSmAee7DcLHd8w7%2B%2ByygY6pgE8eLYSApbMVfwUhd7W%2BMkifxHg9yYdFF2Jb6WYj2ZVFDDL1fPO%2BIXA2tfPqokBTWggHUVW3%2FMeeEYPQDnXAF8O8vhaMPcvrd2bT8JDUX7bnZS1Wx8ZCav33Y8BhlrtbDeFUZEsNJgpUEwrOdkd1%2BnoiPw5YIadl5hGUJTj0GzVeWgs3pj4ARKlR16lgHHYf99RwMhIYsbhAFRj84bBFcHJLnOkXOzk&X-Amz-Signature=7e20971d912dc197f029f0fb1873cc0dc2644f3457b5295d3b1b74d3ccfd3f51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLOVD5OE%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIFpIZJcNUhwoZYPrHPwmhB2gMkCjzfbizJRwAk6y8%2FX%2BAiA2mclHf%2B3TjYAE0estzFwJH%2FnKy7imh0QXC%2BC4WdMAuyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMkEKa%2FCQQBGg8ksh4KtwDh7wv2KeKbhfZLmz8Fo43TX%2BkS5amI2ahn2ApnE%2BR8zCGuZDmN2H89OrDxhIF2KCtvoG5XYvOZP%2FLhZ2Nv%2BIONGYVJxEAyXxSrCm69ceniBmTne1P8IHjYArv%2BYxe6WcF8WxYOwOWBvLqviymFFZBiZcAtfofjZBc26oBC8FzEdrDoQBSCncLWRvO8TAiZJyzUwm7XTLyPgDR782sRKwbhpvqt0nRiRlEFKyt%2FT5S1bAj8ah1aUQyHVyP1j8FJRq01kYWjl%2BQJjVZ%2BpygUChZNLpvK0N2mYw1R4xq7Whw%2FvrXsk2zMB%2BJln55tKBZGsD6T2fJG7%2FF5MkQy6Bi6D17y8eGHgQlnDVu1TQApvoRLNVbBKE4Lu8JUWcc6%2FvhZVAgu54rdXEqdDETVr2w%2BM5IvYU4ah%2Bi322iSoRob%2BNycpvuqK2xcgyDh4cGxezgEXR6WLPN1UmFb84HPvFzoyMezgucuwsjnGv66z%2FUtf9J5SjM%2BCcoT9%2F7C7qwJe3zrLo4h7etNapV1ppgWLRgWKextmYzbt6xLs7K0lDnj1xl7A26XjN%2F7TZV%2BbgbAtrVN6%2Bv6kQc4Hz2Ga8s7euZaDvTWng2Xe3q67gBHpALe6sQGl3LZeDSmAee7DcLHd8w7%2B%2ByygY6pgE8eLYSApbMVfwUhd7W%2BMkifxHg9yYdFF2Jb6WYj2ZVFDDL1fPO%2BIXA2tfPqokBTWggHUVW3%2FMeeEYPQDnXAF8O8vhaMPcvrd2bT8JDUX7bnZS1Wx8ZCav33Y8BhlrtbDeFUZEsNJgpUEwrOdkd1%2BnoiPw5YIadl5hGUJTj0GzVeWgs3pj4ARKlR16lgHHYf99RwMhIYsbhAFRj84bBFcHJLnOkXOzk&X-Amz-Signature=a8d50c7dadaa775bce51d22c4c0fc7d795edf7e4a734aa5f8d1d033a8a214692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLOVD5OE%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIFpIZJcNUhwoZYPrHPwmhB2gMkCjzfbizJRwAk6y8%2FX%2BAiA2mclHf%2B3TjYAE0estzFwJH%2FnKy7imh0QXC%2BC4WdMAuyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMkEKa%2FCQQBGg8ksh4KtwDh7wv2KeKbhfZLmz8Fo43TX%2BkS5amI2ahn2ApnE%2BR8zCGuZDmN2H89OrDxhIF2KCtvoG5XYvOZP%2FLhZ2Nv%2BIONGYVJxEAyXxSrCm69ceniBmTne1P8IHjYArv%2BYxe6WcF8WxYOwOWBvLqviymFFZBiZcAtfofjZBc26oBC8FzEdrDoQBSCncLWRvO8TAiZJyzUwm7XTLyPgDR782sRKwbhpvqt0nRiRlEFKyt%2FT5S1bAj8ah1aUQyHVyP1j8FJRq01kYWjl%2BQJjVZ%2BpygUChZNLpvK0N2mYw1R4xq7Whw%2FvrXsk2zMB%2BJln55tKBZGsD6T2fJG7%2FF5MkQy6Bi6D17y8eGHgQlnDVu1TQApvoRLNVbBKE4Lu8JUWcc6%2FvhZVAgu54rdXEqdDETVr2w%2BM5IvYU4ah%2Bi322iSoRob%2BNycpvuqK2xcgyDh4cGxezgEXR6WLPN1UmFb84HPvFzoyMezgucuwsjnGv66z%2FUtf9J5SjM%2BCcoT9%2F7C7qwJe3zrLo4h7etNapV1ppgWLRgWKextmYzbt6xLs7K0lDnj1xl7A26XjN%2F7TZV%2BbgbAtrVN6%2Bv6kQc4Hz2Ga8s7euZaDvTWng2Xe3q67gBHpALe6sQGl3LZeDSmAee7DcLHd8w7%2B%2ByygY6pgE8eLYSApbMVfwUhd7W%2BMkifxHg9yYdFF2Jb6WYj2ZVFDDL1fPO%2BIXA2tfPqokBTWggHUVW3%2FMeeEYPQDnXAF8O8vhaMPcvrd2bT8JDUX7bnZS1Wx8ZCav33Y8BhlrtbDeFUZEsNJgpUEwrOdkd1%2BnoiPw5YIadl5hGUJTj0GzVeWgs3pj4ARKlR16lgHHYf99RwMhIYsbhAFRj84bBFcHJLnOkXOzk&X-Amz-Signature=ab6cc34fbacae546b433c944da1d5027ed0eacd645c6f446fd88215b72e259d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLOVD5OE%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIFpIZJcNUhwoZYPrHPwmhB2gMkCjzfbizJRwAk6y8%2FX%2BAiA2mclHf%2B3TjYAE0estzFwJH%2FnKy7imh0QXC%2BC4WdMAuyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMkEKa%2FCQQBGg8ksh4KtwDh7wv2KeKbhfZLmz8Fo43TX%2BkS5amI2ahn2ApnE%2BR8zCGuZDmN2H89OrDxhIF2KCtvoG5XYvOZP%2FLhZ2Nv%2BIONGYVJxEAyXxSrCm69ceniBmTne1P8IHjYArv%2BYxe6WcF8WxYOwOWBvLqviymFFZBiZcAtfofjZBc26oBC8FzEdrDoQBSCncLWRvO8TAiZJyzUwm7XTLyPgDR782sRKwbhpvqt0nRiRlEFKyt%2FT5S1bAj8ah1aUQyHVyP1j8FJRq01kYWjl%2BQJjVZ%2BpygUChZNLpvK0N2mYw1R4xq7Whw%2FvrXsk2zMB%2BJln55tKBZGsD6T2fJG7%2FF5MkQy6Bi6D17y8eGHgQlnDVu1TQApvoRLNVbBKE4Lu8JUWcc6%2FvhZVAgu54rdXEqdDETVr2w%2BM5IvYU4ah%2Bi322iSoRob%2BNycpvuqK2xcgyDh4cGxezgEXR6WLPN1UmFb84HPvFzoyMezgucuwsjnGv66z%2FUtf9J5SjM%2BCcoT9%2F7C7qwJe3zrLo4h7etNapV1ppgWLRgWKextmYzbt6xLs7K0lDnj1xl7A26XjN%2F7TZV%2BbgbAtrVN6%2Bv6kQc4Hz2Ga8s7euZaDvTWng2Xe3q67gBHpALe6sQGl3LZeDSmAee7DcLHd8w7%2B%2ByygY6pgE8eLYSApbMVfwUhd7W%2BMkifxHg9yYdFF2Jb6WYj2ZVFDDL1fPO%2BIXA2tfPqokBTWggHUVW3%2FMeeEYPQDnXAF8O8vhaMPcvrd2bT8JDUX7bnZS1Wx8ZCav33Y8BhlrtbDeFUZEsNJgpUEwrOdkd1%2BnoiPw5YIadl5hGUJTj0GzVeWgs3pj4ARKlR16lgHHYf99RwMhIYsbhAFRj84bBFcHJLnOkXOzk&X-Amz-Signature=20f4e445a24e7f39e0ba0f57a4718c970d3fa76be0b4b805669bc92670e69a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLOVD5OE%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIFpIZJcNUhwoZYPrHPwmhB2gMkCjzfbizJRwAk6y8%2FX%2BAiA2mclHf%2B3TjYAE0estzFwJH%2FnKy7imh0QXC%2BC4WdMAuyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMkEKa%2FCQQBGg8ksh4KtwDh7wv2KeKbhfZLmz8Fo43TX%2BkS5amI2ahn2ApnE%2BR8zCGuZDmN2H89OrDxhIF2KCtvoG5XYvOZP%2FLhZ2Nv%2BIONGYVJxEAyXxSrCm69ceniBmTne1P8IHjYArv%2BYxe6WcF8WxYOwOWBvLqviymFFZBiZcAtfofjZBc26oBC8FzEdrDoQBSCncLWRvO8TAiZJyzUwm7XTLyPgDR782sRKwbhpvqt0nRiRlEFKyt%2FT5S1bAj8ah1aUQyHVyP1j8FJRq01kYWjl%2BQJjVZ%2BpygUChZNLpvK0N2mYw1R4xq7Whw%2FvrXsk2zMB%2BJln55tKBZGsD6T2fJG7%2FF5MkQy6Bi6D17y8eGHgQlnDVu1TQApvoRLNVbBKE4Lu8JUWcc6%2FvhZVAgu54rdXEqdDETVr2w%2BM5IvYU4ah%2Bi322iSoRob%2BNycpvuqK2xcgyDh4cGxezgEXR6WLPN1UmFb84HPvFzoyMezgucuwsjnGv66z%2FUtf9J5SjM%2BCcoT9%2F7C7qwJe3zrLo4h7etNapV1ppgWLRgWKextmYzbt6xLs7K0lDnj1xl7A26XjN%2F7TZV%2BbgbAtrVN6%2Bv6kQc4Hz2Ga8s7euZaDvTWng2Xe3q67gBHpALe6sQGl3LZeDSmAee7DcLHd8w7%2B%2ByygY6pgE8eLYSApbMVfwUhd7W%2BMkifxHg9yYdFF2Jb6WYj2ZVFDDL1fPO%2BIXA2tfPqokBTWggHUVW3%2FMeeEYPQDnXAF8O8vhaMPcvrd2bT8JDUX7bnZS1Wx8ZCav33Y8BhlrtbDeFUZEsNJgpUEwrOdkd1%2BnoiPw5YIadl5hGUJTj0GzVeWgs3pj4ARKlR16lgHHYf99RwMhIYsbhAFRj84bBFcHJLnOkXOzk&X-Amz-Signature=189a150cc008fdce22fa31d12cffd89b7b54e8e4a0f5aa2de860004eaedebc7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLOVD5OE%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIFpIZJcNUhwoZYPrHPwmhB2gMkCjzfbizJRwAk6y8%2FX%2BAiA2mclHf%2B3TjYAE0estzFwJH%2FnKy7imh0QXC%2BC4WdMAuyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMkEKa%2FCQQBGg8ksh4KtwDh7wv2KeKbhfZLmz8Fo43TX%2BkS5amI2ahn2ApnE%2BR8zCGuZDmN2H89OrDxhIF2KCtvoG5XYvOZP%2FLhZ2Nv%2BIONGYVJxEAyXxSrCm69ceniBmTne1P8IHjYArv%2BYxe6WcF8WxYOwOWBvLqviymFFZBiZcAtfofjZBc26oBC8FzEdrDoQBSCncLWRvO8TAiZJyzUwm7XTLyPgDR782sRKwbhpvqt0nRiRlEFKyt%2FT5S1bAj8ah1aUQyHVyP1j8FJRq01kYWjl%2BQJjVZ%2BpygUChZNLpvK0N2mYw1R4xq7Whw%2FvrXsk2zMB%2BJln55tKBZGsD6T2fJG7%2FF5MkQy6Bi6D17y8eGHgQlnDVu1TQApvoRLNVbBKE4Lu8JUWcc6%2FvhZVAgu54rdXEqdDETVr2w%2BM5IvYU4ah%2Bi322iSoRob%2BNycpvuqK2xcgyDh4cGxezgEXR6WLPN1UmFb84HPvFzoyMezgucuwsjnGv66z%2FUtf9J5SjM%2BCcoT9%2F7C7qwJe3zrLo4h7etNapV1ppgWLRgWKextmYzbt6xLs7K0lDnj1xl7A26XjN%2F7TZV%2BbgbAtrVN6%2Bv6kQc4Hz2Ga8s7euZaDvTWng2Xe3q67gBHpALe6sQGl3LZeDSmAee7DcLHd8w7%2B%2ByygY6pgE8eLYSApbMVfwUhd7W%2BMkifxHg9yYdFF2Jb6WYj2ZVFDDL1fPO%2BIXA2tfPqokBTWggHUVW3%2FMeeEYPQDnXAF8O8vhaMPcvrd2bT8JDUX7bnZS1Wx8ZCav33Y8BhlrtbDeFUZEsNJgpUEwrOdkd1%2BnoiPw5YIadl5hGUJTj0GzVeWgs3pj4ARKlR16lgHHYf99RwMhIYsbhAFRj84bBFcHJLnOkXOzk&X-Amz-Signature=1a6acd2e21679ca844f4912a0777c9be74f0e839d569c6528c50b18e46202887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDG2FRML%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIC8AeTxgWtMfgWlGtRjPJRLj%2Fc8BvfhPoZfqNCaRHMkEAiBZkGrs%2BLXLAj61fVVRr2izyNQ2pNT9kFPkPqJ4TTFCGSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM1zD8WyaGD0%2B91y71KtwD2D5AvIjmb%2FLHjN5t2aIsQWG6nGHIYPlxgotUVa%2BKOTYtjKh%2FO1YX2NbT2uMvbWixjkJy0pySVI29Upnet2iqglf1JYikggTd7tFhRN2TG0DSUMu73USU9pvto0gA2wmqX3pLOtremKXvfUnZUSC9VUysG7KfsCU8%2BJ8k58lEzO1cPN8iAAtTZm4e12FZigPwYbXpnKzVTudZw%2BFN2%2FSUhWGYpHDrEjumaqmbLmilWIqV7A7egSmpkiiFzzwFbCh5TewnU60gkdu0guq3BGqWoNA2zAYirlygfNpC7xm5Vnazj6A9AQ2R22Wx7cKVskMQPCGw4nxJPaq9GA0%2F8SG26HLm2aoDdbb9IzVMt3SCFieNPEH9K%2Bcsvq1D2n4cu5Y8k9rhtTBacsmZ2dAbsky%2FF0Qnu23rK8%2Fj0tDN69xwbZMAjeedR9hEhnDfGOS2sLeJfCxO5OGpR7iTahFYbv%2FlDw3xZ3iiyCAr%2BjrJr0ZqZXXE3Z%2Fhv9kTnsf4cV%2F44R4D726fma5qOX9PoY69WGmSMAIbG89EPr7DDLGCNZBLBdezCCxLTc4ldVuAIVeJtzFQM8lpboPSHig7ZxlCZdMg0znqpydWiBCPglaK8bFOui8JEy%2FW4xqw33lNesgwvu%2ByygY6pgHc6C1PkxqqALYigEklw876tDdH35rQHdRk5rEaPbwig4lSxBnt0o79a092mGZkSRPGoXyTPzzIbD%2BUnQVqEXHJr4YyOzcC5LjhnchBK8YNsMXfkavY0LkaIfZhNmogyvEbgRxFz7eh0PjjlRQEKBPqVmg0Ee1NfmlMnV4RUSQ%2BfH%2FVb6OCvjzc1dKbqOGQ%2FuukK4rhiWabP0P%2BhN9MhBc%2BuxVBAXyp&X-Amz-Signature=bf8aacdd6194d76826d257a46ec36b117fe23b187942735e3a9473c1c3783e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDG2FRML%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIC8AeTxgWtMfgWlGtRjPJRLj%2Fc8BvfhPoZfqNCaRHMkEAiBZkGrs%2BLXLAj61fVVRr2izyNQ2pNT9kFPkPqJ4TTFCGSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM1zD8WyaGD0%2B91y71KtwD2D5AvIjmb%2FLHjN5t2aIsQWG6nGHIYPlxgotUVa%2BKOTYtjKh%2FO1YX2NbT2uMvbWixjkJy0pySVI29Upnet2iqglf1JYikggTd7tFhRN2TG0DSUMu73USU9pvto0gA2wmqX3pLOtremKXvfUnZUSC9VUysG7KfsCU8%2BJ8k58lEzO1cPN8iAAtTZm4e12FZigPwYbXpnKzVTudZw%2BFN2%2FSUhWGYpHDrEjumaqmbLmilWIqV7A7egSmpkiiFzzwFbCh5TewnU60gkdu0guq3BGqWoNA2zAYirlygfNpC7xm5Vnazj6A9AQ2R22Wx7cKVskMQPCGw4nxJPaq9GA0%2F8SG26HLm2aoDdbb9IzVMt3SCFieNPEH9K%2Bcsvq1D2n4cu5Y8k9rhtTBacsmZ2dAbsky%2FF0Qnu23rK8%2Fj0tDN69xwbZMAjeedR9hEhnDfGOS2sLeJfCxO5OGpR7iTahFYbv%2FlDw3xZ3iiyCAr%2BjrJr0ZqZXXE3Z%2Fhv9kTnsf4cV%2F44R4D726fma5qOX9PoY69WGmSMAIbG89EPr7DDLGCNZBLBdezCCxLTc4ldVuAIVeJtzFQM8lpboPSHig7ZxlCZdMg0znqpydWiBCPglaK8bFOui8JEy%2FW4xqw33lNesgwvu%2ByygY6pgHc6C1PkxqqALYigEklw876tDdH35rQHdRk5rEaPbwig4lSxBnt0o79a092mGZkSRPGoXyTPzzIbD%2BUnQVqEXHJr4YyOzcC5LjhnchBK8YNsMXfkavY0LkaIfZhNmogyvEbgRxFz7eh0PjjlRQEKBPqVmg0Ee1NfmlMnV4RUSQ%2BfH%2FVb6OCvjzc1dKbqOGQ%2FuukK4rhiWabP0P%2BhN9MhBc%2BuxVBAXyp&X-Amz-Signature=aae81b81d3a9ea9a5a82b45c5e0ae9130e456321926c11e7b602c50f79316491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDG2FRML%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIC8AeTxgWtMfgWlGtRjPJRLj%2Fc8BvfhPoZfqNCaRHMkEAiBZkGrs%2BLXLAj61fVVRr2izyNQ2pNT9kFPkPqJ4TTFCGSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM1zD8WyaGD0%2B91y71KtwD2D5AvIjmb%2FLHjN5t2aIsQWG6nGHIYPlxgotUVa%2BKOTYtjKh%2FO1YX2NbT2uMvbWixjkJy0pySVI29Upnet2iqglf1JYikggTd7tFhRN2TG0DSUMu73USU9pvto0gA2wmqX3pLOtremKXvfUnZUSC9VUysG7KfsCU8%2BJ8k58lEzO1cPN8iAAtTZm4e12FZigPwYbXpnKzVTudZw%2BFN2%2FSUhWGYpHDrEjumaqmbLmilWIqV7A7egSmpkiiFzzwFbCh5TewnU60gkdu0guq3BGqWoNA2zAYirlygfNpC7xm5Vnazj6A9AQ2R22Wx7cKVskMQPCGw4nxJPaq9GA0%2F8SG26HLm2aoDdbb9IzVMt3SCFieNPEH9K%2Bcsvq1D2n4cu5Y8k9rhtTBacsmZ2dAbsky%2FF0Qnu23rK8%2Fj0tDN69xwbZMAjeedR9hEhnDfGOS2sLeJfCxO5OGpR7iTahFYbv%2FlDw3xZ3iiyCAr%2BjrJr0ZqZXXE3Z%2Fhv9kTnsf4cV%2F44R4D726fma5qOX9PoY69WGmSMAIbG89EPr7DDLGCNZBLBdezCCxLTc4ldVuAIVeJtzFQM8lpboPSHig7ZxlCZdMg0znqpydWiBCPglaK8bFOui8JEy%2FW4xqw33lNesgwvu%2ByygY6pgHc6C1PkxqqALYigEklw876tDdH35rQHdRk5rEaPbwig4lSxBnt0o79a092mGZkSRPGoXyTPzzIbD%2BUnQVqEXHJr4YyOzcC5LjhnchBK8YNsMXfkavY0LkaIfZhNmogyvEbgRxFz7eh0PjjlRQEKBPqVmg0Ee1NfmlMnV4RUSQ%2BfH%2FVb6OCvjzc1dKbqOGQ%2FuukK4rhiWabP0P%2BhN9MhBc%2BuxVBAXyp&X-Amz-Signature=7d12aa25cbdc389e6db1df11297474fa4153a360dcbffa483a73f85480ad2c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDG2FRML%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIC8AeTxgWtMfgWlGtRjPJRLj%2Fc8BvfhPoZfqNCaRHMkEAiBZkGrs%2BLXLAj61fVVRr2izyNQ2pNT9kFPkPqJ4TTFCGSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM1zD8WyaGD0%2B91y71KtwD2D5AvIjmb%2FLHjN5t2aIsQWG6nGHIYPlxgotUVa%2BKOTYtjKh%2FO1YX2NbT2uMvbWixjkJy0pySVI29Upnet2iqglf1JYikggTd7tFhRN2TG0DSUMu73USU9pvto0gA2wmqX3pLOtremKXvfUnZUSC9VUysG7KfsCU8%2BJ8k58lEzO1cPN8iAAtTZm4e12FZigPwYbXpnKzVTudZw%2BFN2%2FSUhWGYpHDrEjumaqmbLmilWIqV7A7egSmpkiiFzzwFbCh5TewnU60gkdu0guq3BGqWoNA2zAYirlygfNpC7xm5Vnazj6A9AQ2R22Wx7cKVskMQPCGw4nxJPaq9GA0%2F8SG26HLm2aoDdbb9IzVMt3SCFieNPEH9K%2Bcsvq1D2n4cu5Y8k9rhtTBacsmZ2dAbsky%2FF0Qnu23rK8%2Fj0tDN69xwbZMAjeedR9hEhnDfGOS2sLeJfCxO5OGpR7iTahFYbv%2FlDw3xZ3iiyCAr%2BjrJr0ZqZXXE3Z%2Fhv9kTnsf4cV%2F44R4D726fma5qOX9PoY69WGmSMAIbG89EPr7DDLGCNZBLBdezCCxLTc4ldVuAIVeJtzFQM8lpboPSHig7ZxlCZdMg0znqpydWiBCPglaK8bFOui8JEy%2FW4xqw33lNesgwvu%2ByygY6pgHc6C1PkxqqALYigEklw876tDdH35rQHdRk5rEaPbwig4lSxBnt0o79a092mGZkSRPGoXyTPzzIbD%2BUnQVqEXHJr4YyOzcC5LjhnchBK8YNsMXfkavY0LkaIfZhNmogyvEbgRxFz7eh0PjjlRQEKBPqVmg0Ee1NfmlMnV4RUSQ%2BfH%2FVb6OCvjzc1dKbqOGQ%2FuukK4rhiWabP0P%2BhN9MhBc%2BuxVBAXyp&X-Amz-Signature=6e0610ac83736405837136b0dca44dc3e16fb240ac1150e117f244d1c58bb745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDG2FRML%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIC8AeTxgWtMfgWlGtRjPJRLj%2Fc8BvfhPoZfqNCaRHMkEAiBZkGrs%2BLXLAj61fVVRr2izyNQ2pNT9kFPkPqJ4TTFCGSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM1zD8WyaGD0%2B91y71KtwD2D5AvIjmb%2FLHjN5t2aIsQWG6nGHIYPlxgotUVa%2BKOTYtjKh%2FO1YX2NbT2uMvbWixjkJy0pySVI29Upnet2iqglf1JYikggTd7tFhRN2TG0DSUMu73USU9pvto0gA2wmqX3pLOtremKXvfUnZUSC9VUysG7KfsCU8%2BJ8k58lEzO1cPN8iAAtTZm4e12FZigPwYbXpnKzVTudZw%2BFN2%2FSUhWGYpHDrEjumaqmbLmilWIqV7A7egSmpkiiFzzwFbCh5TewnU60gkdu0guq3BGqWoNA2zAYirlygfNpC7xm5Vnazj6A9AQ2R22Wx7cKVskMQPCGw4nxJPaq9GA0%2F8SG26HLm2aoDdbb9IzVMt3SCFieNPEH9K%2Bcsvq1D2n4cu5Y8k9rhtTBacsmZ2dAbsky%2FF0Qnu23rK8%2Fj0tDN69xwbZMAjeedR9hEhnDfGOS2sLeJfCxO5OGpR7iTahFYbv%2FlDw3xZ3iiyCAr%2BjrJr0ZqZXXE3Z%2Fhv9kTnsf4cV%2F44R4D726fma5qOX9PoY69WGmSMAIbG89EPr7DDLGCNZBLBdezCCxLTc4ldVuAIVeJtzFQM8lpboPSHig7ZxlCZdMg0znqpydWiBCPglaK8bFOui8JEy%2FW4xqw33lNesgwvu%2ByygY6pgHc6C1PkxqqALYigEklw876tDdH35rQHdRk5rEaPbwig4lSxBnt0o79a092mGZkSRPGoXyTPzzIbD%2BUnQVqEXHJr4YyOzcC5LjhnchBK8YNsMXfkavY0LkaIfZhNmogyvEbgRxFz7eh0PjjlRQEKBPqVmg0Ee1NfmlMnV4RUSQ%2BfH%2FVb6OCvjzc1dKbqOGQ%2FuukK4rhiWabP0P%2BhN9MhBc%2BuxVBAXyp&X-Amz-Signature=1e513f30aa61c6222bcc6531dea5075752ac2d904487d8314edbb62fefef28f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ZDOXFY%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIF3VUoChU%2FUiMkc6wppSgJxXJRdLR0NZ3w8f1k%2BYiWkIAiBA%2BPkxjK2gwykDjlTNuU0dYIOlJKAkA6hpmOTNCmKiFir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMYxJJnAIafcSTlyLmKtwD4dQtL%2BXX4FBwop60HKfZM%2B4%2FwKQgp3rtLG70gGoMRJ2Z6dUFUKe7iTYGghiwSiHVsygH%2Fdlj2NSBBATPAqT%2BC656fMmPW9fH8ispGd7he9PqPE%2FpYscdMP1461FDMbcyL8S34m2MKbe7QGnUZybBfMHVZM2o6jn6FmlNdXqS0e%2F58ffHhPoGbR2y9xK4uB5Blag%2B3rm%2FhQaY%2FAVVcVFxyg6%2FHjSOgCim89vGxf8ci8%2FgBWee6mi94ZNXMDObOwz8svuLpraOhWciOY7%2FyUVrnRn%2B3q6%2BdNs3dLnDhPS1gM2tO9VKsQC%2Bm0eh3mEDfj3EU8EhYJFX7U%2FCmSQBbuQwoglyXoglksV4ClmQhb08DCVevBGD%2FPOVD74iIEL4N5H3wBfwJ26fc6dhQ8J9H%2FyXq%2FMICJ7tFZc5x%2FK%2Blpa1YueiEd9%2BVciiWX6RPshe0KNzzUnZBC1DvEI6CSpoUaZuZ40ViMTjvpnxjms3GLSOKYissFvbhw5yodVQlM5HiMr%2FP3eTKEdh4AVaE2KbEiiKzZPOPdQCl41uOZ7Uq2XDPbKTaxrsQBauZ7hKV2hX7uxVmayGjQFOEWJJ4DOtkJLSaVTtrYmO01xvwZ3twHNRUXY8WIVXb7OX4xlJjjUwou%2ByygY6pgH3TjyU8%2B3w4hbfh8GuIkLHBCgd8COSfvfTTpdmdp7RyebT83Lf8R6yaoWn2N7YUes6GFxB%2FPQc7QEUoPo7EbE6j1faWW4EVv6S47rm8a%2F1g0A4MoefV6J257xCr6k2Aufkd7vSAXQBazJDgNYcnbRNlkc0ps%2F0Ex7xkXxU2M3SLspx3CQABh%2Fv45pkrg%2F%2By4JaAg74yFNOPkWnt6By%2FnrZO1CGu7oj&X-Amz-Signature=7a81bf8723a8004817c2e6751b4a8802b7ea4692821508354cbcb91e83b5f413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ZDOXFY%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIF3VUoChU%2FUiMkc6wppSgJxXJRdLR0NZ3w8f1k%2BYiWkIAiBA%2BPkxjK2gwykDjlTNuU0dYIOlJKAkA6hpmOTNCmKiFir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMYxJJnAIafcSTlyLmKtwD4dQtL%2BXX4FBwop60HKfZM%2B4%2FwKQgp3rtLG70gGoMRJ2Z6dUFUKe7iTYGghiwSiHVsygH%2Fdlj2NSBBATPAqT%2BC656fMmPW9fH8ispGd7he9PqPE%2FpYscdMP1461FDMbcyL8S34m2MKbe7QGnUZybBfMHVZM2o6jn6FmlNdXqS0e%2F58ffHhPoGbR2y9xK4uB5Blag%2B3rm%2FhQaY%2FAVVcVFxyg6%2FHjSOgCim89vGxf8ci8%2FgBWee6mi94ZNXMDObOwz8svuLpraOhWciOY7%2FyUVrnRn%2B3q6%2BdNs3dLnDhPS1gM2tO9VKsQC%2Bm0eh3mEDfj3EU8EhYJFX7U%2FCmSQBbuQwoglyXoglksV4ClmQhb08DCVevBGD%2FPOVD74iIEL4N5H3wBfwJ26fc6dhQ8J9H%2FyXq%2FMICJ7tFZc5x%2FK%2Blpa1YueiEd9%2BVciiWX6RPshe0KNzzUnZBC1DvEI6CSpoUaZuZ40ViMTjvpnxjms3GLSOKYissFvbhw5yodVQlM5HiMr%2FP3eTKEdh4AVaE2KbEiiKzZPOPdQCl41uOZ7Uq2XDPbKTaxrsQBauZ7hKV2hX7uxVmayGjQFOEWJJ4DOtkJLSaVTtrYmO01xvwZ3twHNRUXY8WIVXb7OX4xlJjjUwou%2ByygY6pgH3TjyU8%2B3w4hbfh8GuIkLHBCgd8COSfvfTTpdmdp7RyebT83Lf8R6yaoWn2N7YUes6GFxB%2FPQc7QEUoPo7EbE6j1faWW4EVv6S47rm8a%2F1g0A4MoefV6J257xCr6k2Aufkd7vSAXQBazJDgNYcnbRNlkc0ps%2F0Ex7xkXxU2M3SLspx3CQABh%2Fv45pkrg%2F%2By4JaAg74yFNOPkWnt6By%2FnrZO1CGu7oj&X-Amz-Signature=769745f89f261d9018c43b019699f8d0d57b6690138cc15a9e8c8e4f6569e760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ZDOXFY%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIF3VUoChU%2FUiMkc6wppSgJxXJRdLR0NZ3w8f1k%2BYiWkIAiBA%2BPkxjK2gwykDjlTNuU0dYIOlJKAkA6hpmOTNCmKiFir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMYxJJnAIafcSTlyLmKtwD4dQtL%2BXX4FBwop60HKfZM%2B4%2FwKQgp3rtLG70gGoMRJ2Z6dUFUKe7iTYGghiwSiHVsygH%2Fdlj2NSBBATPAqT%2BC656fMmPW9fH8ispGd7he9PqPE%2FpYscdMP1461FDMbcyL8S34m2MKbe7QGnUZybBfMHVZM2o6jn6FmlNdXqS0e%2F58ffHhPoGbR2y9xK4uB5Blag%2B3rm%2FhQaY%2FAVVcVFxyg6%2FHjSOgCim89vGxf8ci8%2FgBWee6mi94ZNXMDObOwz8svuLpraOhWciOY7%2FyUVrnRn%2B3q6%2BdNs3dLnDhPS1gM2tO9VKsQC%2Bm0eh3mEDfj3EU8EhYJFX7U%2FCmSQBbuQwoglyXoglksV4ClmQhb08DCVevBGD%2FPOVD74iIEL4N5H3wBfwJ26fc6dhQ8J9H%2FyXq%2FMICJ7tFZc5x%2FK%2Blpa1YueiEd9%2BVciiWX6RPshe0KNzzUnZBC1DvEI6CSpoUaZuZ40ViMTjvpnxjms3GLSOKYissFvbhw5yodVQlM5HiMr%2FP3eTKEdh4AVaE2KbEiiKzZPOPdQCl41uOZ7Uq2XDPbKTaxrsQBauZ7hKV2hX7uxVmayGjQFOEWJJ4DOtkJLSaVTtrYmO01xvwZ3twHNRUXY8WIVXb7OX4xlJjjUwou%2ByygY6pgH3TjyU8%2B3w4hbfh8GuIkLHBCgd8COSfvfTTpdmdp7RyebT83Lf8R6yaoWn2N7YUes6GFxB%2FPQc7QEUoPo7EbE6j1faWW4EVv6S47rm8a%2F1g0A4MoefV6J257xCr6k2Aufkd7vSAXQBazJDgNYcnbRNlkc0ps%2F0Ex7xkXxU2M3SLspx3CQABh%2Fv45pkrg%2F%2By4JaAg74yFNOPkWnt6By%2FnrZO1CGu7oj&X-Amz-Signature=d610e28539ba130351360ecf249c343789cfd7c5428f0a663d985263a449c15e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXEHDGTJ%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIBos6MhMuD4XLvlSZB22%2B7bSKaoNtWG5ZK70098RsTbmAiAz75kQ2Vh7dob9iy2pdSypoh%2FudtbR1fuxktAzpgg5eSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMmTf7egFm07UDe2u%2FKtwD2YJgiYcJXBXxzZ5PSFlwC5nmRR%2FHiwSOdCHmzvxIHgNcOxATRKilCoEBnc3Ho6vqSOKSrrrshBmF7Z1FKZ%2BAZTq%2BfoQE43bdluTvBERBzfjRo5smfGH60Fx1GFRKhN8CJZawsepG7vV2Re4cdY%2F8G2qucqErjZoM%2BnDT%2BZgmQzeUgG%2BYxBBixLCYydGWNGpcVfZTZVoYFwZSCAVghi1bfG7LUhyXePfjmtAd%2FTZmJxhkxTdlnOsG4KavSealP6XpICbDM3KNs%2FhFCLNeWcCooFS0Rt4i658V8ARHPrSb4t2Wu4wZ96dqMExQ5ytGLnRxZggSgKb5Ww8UKWC%2B%2FQ5K9gA%2FSLrTqBaK6GVtsVnEtcmPhSGXkYHzPX3rjaJY8XqDGG%2F7hVISYj4XbzyyDAa95W85rGheAhcg2n6%2By7L3ZabQSbShCShkV8zwIgVc0XfnCRoXsUsJM12YRheuBK2qdZZ%2F09aWL1lAzxg0%2BR2OQXEdb1eOij37OJXSy9FAmJav0sn%2B807nsPRkmpt5zB9dRXzFgRs%2B9I96WNhZyu3AyZ8rzRTjGIFmrGX%2F8bnCh06hNtH3zSKffJTcRB%2FXHAZBLLLCNMbrYodx6MafpwgXXdICX%2FrhzNbmHeByh7Yw0u%2ByygY6pgGKDo1FveCRk7ibw7eS0ySvvfyPrJkwtrefUAAJmhV9gS4%2FNn%2Bg1ThGS7c8cpjNk3qggyGrx9z1%2FfqiYMafzYg1XbAZF30dynZ7sKBKuPnH0n2%2FsglzETpFceULtt2NbGB385VW7oG%2B0ORpBkD1yJTGbw1NR8Ivsjo%2F5xuCguVB5syn%2BO%2F6%2FBaN5Ecye0opcAvJ2n5aKyWvS5jIiYid9QOF8K8BwN6K&X-Amz-Signature=e395feb483933595fc844f57a921574b1134bdef53cb53433938bf7523e9f52e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXEHDGTJ%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIBos6MhMuD4XLvlSZB22%2B7bSKaoNtWG5ZK70098RsTbmAiAz75kQ2Vh7dob9iy2pdSypoh%2FudtbR1fuxktAzpgg5eSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMmTf7egFm07UDe2u%2FKtwD2YJgiYcJXBXxzZ5PSFlwC5nmRR%2FHiwSOdCHmzvxIHgNcOxATRKilCoEBnc3Ho6vqSOKSrrrshBmF7Z1FKZ%2BAZTq%2BfoQE43bdluTvBERBzfjRo5smfGH60Fx1GFRKhN8CJZawsepG7vV2Re4cdY%2F8G2qucqErjZoM%2BnDT%2BZgmQzeUgG%2BYxBBixLCYydGWNGpcVfZTZVoYFwZSCAVghi1bfG7LUhyXePfjmtAd%2FTZmJxhkxTdlnOsG4KavSealP6XpICbDM3KNs%2FhFCLNeWcCooFS0Rt4i658V8ARHPrSb4t2Wu4wZ96dqMExQ5ytGLnRxZggSgKb5Ww8UKWC%2B%2FQ5K9gA%2FSLrTqBaK6GVtsVnEtcmPhSGXkYHzPX3rjaJY8XqDGG%2F7hVISYj4XbzyyDAa95W85rGheAhcg2n6%2By7L3ZabQSbShCShkV8zwIgVc0XfnCRoXsUsJM12YRheuBK2qdZZ%2F09aWL1lAzxg0%2BR2OQXEdb1eOij37OJXSy9FAmJav0sn%2B807nsPRkmpt5zB9dRXzFgRs%2B9I96WNhZyu3AyZ8rzRTjGIFmrGX%2F8bnCh06hNtH3zSKffJTcRB%2FXHAZBLLLCNMbrYodx6MafpwgXXdICX%2FrhzNbmHeByh7Yw0u%2ByygY6pgGKDo1FveCRk7ibw7eS0ySvvfyPrJkwtrefUAAJmhV9gS4%2FNn%2Bg1ThGS7c8cpjNk3qggyGrx9z1%2FfqiYMafzYg1XbAZF30dynZ7sKBKuPnH0n2%2FsglzETpFceULtt2NbGB385VW7oG%2B0ORpBkD1yJTGbw1NR8Ivsjo%2F5xuCguVB5syn%2BO%2F6%2FBaN5Ecye0opcAvJ2n5aKyWvS5jIiYid9QOF8K8BwN6K&X-Amz-Signature=e29523d1bd54cc84b600d227792fbbfebe89749b15906c530e9abd2bf032589a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6UDCJ5%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDCSYTiwyTDOcmaZa9Hfn%2FzOkYjrAo7eWyqrl9C38hMwAIgXdbYRYnPDvVsmXsX1axnpaf%2FX%2FZBuxdH0EJXETgV1Tsq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFJF7HdJO2aJOJVibircA3gjAMyuNQSx%2F4EIpiiDxf%2FBMsYaZ3sH0ZJ6OfF0hchxlTy1aArPe%2FTctbGsK482FgeIoDyQ41SmnZvuCAWWQchJTlKgdZhb%2BZ%2FQj7bP2zaCJa2ZITFcf1jXaZ2994C0p4mnGi6xH4LvzZb48Bt6YMLnoVQcJz34jABocu%2BA5lH%2BXEARBsrn6jj%2BDesNUtU9VqODkdxZ84VYIHg8KN6xIAkgFXf2skdIsv7%2BbVUHIohigIep%2BPwGkaq4%2FpQdWmbBWFpI%2BXHutVRwsuqAHeTCwqnPR5ZA%2FoRme%2F6EVbbL%2BmvJfy0YVKHzKf0owSCciigg3vE0gpznBnhPCXhzT%2BsXHpS0lXNJ96HXnWdFpgbne3a5U4tgzs%2B6a94TAsVxWlWn3i%2BawULFAVaf2tblh7G9xOdUfNFZQCmWqTCmV6m37p0XWuPzu4JcnZSl9LavOjB4LN1xgdx5IKumqaJNQUDYkLPxtCl%2BSc4stgBC8c8hBS3oT0rt35UiB7OEWbnCHb6zuRujUJtibalZDZLCSmp6ZEBxtk9LUaejDZqcZgB6QfywEvI2hXQ1iMfyxSeDGpHWIUsS6uRn01i8YWP1WJ%2BDxzhNQoamymJ5XC73Fe1BMP5QBkNK71i%2BVounDEe4MI7wssoGOqUB8snA2qOBHRs2BBsfcKeEtWFRw0WAj7AE3Op%2BcgISnsW%2BM4NOSKSi7rFzZKPYpFWGRUTUIut1ZwVpoOOCqn6wlih%2F5vLZxdGZWPgje%2BS7GQ1qF0U49kL8lymlGYXd0jlQXvq3E7a%2FvlxnZhD%2BdXGaLYc0K8EBbrlMcaYYxJFbgp1Sp0kHHWpl%2BBUaFwCfEGWXOxq%2FUDAZ5DAJgBZaL0rR479uUTCT&X-Amz-Signature=42923fdd986700d275b5ce02e3a0b1bfd6421086cebfe537351028c7d104422c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6UDCJ5%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDCSYTiwyTDOcmaZa9Hfn%2FzOkYjrAo7eWyqrl9C38hMwAIgXdbYRYnPDvVsmXsX1axnpaf%2FX%2FZBuxdH0EJXETgV1Tsq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFJF7HdJO2aJOJVibircA3gjAMyuNQSx%2F4EIpiiDxf%2FBMsYaZ3sH0ZJ6OfF0hchxlTy1aArPe%2FTctbGsK482FgeIoDyQ41SmnZvuCAWWQchJTlKgdZhb%2BZ%2FQj7bP2zaCJa2ZITFcf1jXaZ2994C0p4mnGi6xH4LvzZb48Bt6YMLnoVQcJz34jABocu%2BA5lH%2BXEARBsrn6jj%2BDesNUtU9VqODkdxZ84VYIHg8KN6xIAkgFXf2skdIsv7%2BbVUHIohigIep%2BPwGkaq4%2FpQdWmbBWFpI%2BXHutVRwsuqAHeTCwqnPR5ZA%2FoRme%2F6EVbbL%2BmvJfy0YVKHzKf0owSCciigg3vE0gpznBnhPCXhzT%2BsXHpS0lXNJ96HXnWdFpgbne3a5U4tgzs%2B6a94TAsVxWlWn3i%2BawULFAVaf2tblh7G9xOdUfNFZQCmWqTCmV6m37p0XWuPzu4JcnZSl9LavOjB4LN1xgdx5IKumqaJNQUDYkLPxtCl%2BSc4stgBC8c8hBS3oT0rt35UiB7OEWbnCHb6zuRujUJtibalZDZLCSmp6ZEBxtk9LUaejDZqcZgB6QfywEvI2hXQ1iMfyxSeDGpHWIUsS6uRn01i8YWP1WJ%2BDxzhNQoamymJ5XC73Fe1BMP5QBkNK71i%2BVounDEe4MI7wssoGOqUB8snA2qOBHRs2BBsfcKeEtWFRw0WAj7AE3Op%2BcgISnsW%2BM4NOSKSi7rFzZKPYpFWGRUTUIut1ZwVpoOOCqn6wlih%2F5vLZxdGZWPgje%2BS7GQ1qF0U49kL8lymlGYXd0jlQXvq3E7a%2FvlxnZhD%2BdXGaLYc0K8EBbrlMcaYYxJFbgp1Sp0kHHWpl%2BBUaFwCfEGWXOxq%2FUDAZ5DAJgBZaL0rR479uUTCT&X-Amz-Signature=69c2e6409cac3cb401933426c63763154d12844b2a9bef029c2555224d4ecc7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6UDCJ5%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDCSYTiwyTDOcmaZa9Hfn%2FzOkYjrAo7eWyqrl9C38hMwAIgXdbYRYnPDvVsmXsX1axnpaf%2FX%2FZBuxdH0EJXETgV1Tsq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFJF7HdJO2aJOJVibircA3gjAMyuNQSx%2F4EIpiiDxf%2FBMsYaZ3sH0ZJ6OfF0hchxlTy1aArPe%2FTctbGsK482FgeIoDyQ41SmnZvuCAWWQchJTlKgdZhb%2BZ%2FQj7bP2zaCJa2ZITFcf1jXaZ2994C0p4mnGi6xH4LvzZb48Bt6YMLnoVQcJz34jABocu%2BA5lH%2BXEARBsrn6jj%2BDesNUtU9VqODkdxZ84VYIHg8KN6xIAkgFXf2skdIsv7%2BbVUHIohigIep%2BPwGkaq4%2FpQdWmbBWFpI%2BXHutVRwsuqAHeTCwqnPR5ZA%2FoRme%2F6EVbbL%2BmvJfy0YVKHzKf0owSCciigg3vE0gpznBnhPCXhzT%2BsXHpS0lXNJ96HXnWdFpgbne3a5U4tgzs%2B6a94TAsVxWlWn3i%2BawULFAVaf2tblh7G9xOdUfNFZQCmWqTCmV6m37p0XWuPzu4JcnZSl9LavOjB4LN1xgdx5IKumqaJNQUDYkLPxtCl%2BSc4stgBC8c8hBS3oT0rt35UiB7OEWbnCHb6zuRujUJtibalZDZLCSmp6ZEBxtk9LUaejDZqcZgB6QfywEvI2hXQ1iMfyxSeDGpHWIUsS6uRn01i8YWP1WJ%2BDxzhNQoamymJ5XC73Fe1BMP5QBkNK71i%2BVounDEe4MI7wssoGOqUB8snA2qOBHRs2BBsfcKeEtWFRw0WAj7AE3Op%2BcgISnsW%2BM4NOSKSi7rFzZKPYpFWGRUTUIut1ZwVpoOOCqn6wlih%2F5vLZxdGZWPgje%2BS7GQ1qF0U49kL8lymlGYXd0jlQXvq3E7a%2FvlxnZhD%2BdXGaLYc0K8EBbrlMcaYYxJFbgp1Sp0kHHWpl%2BBUaFwCfEGWXOxq%2FUDAZ5DAJgBZaL0rR479uUTCT&X-Amz-Signature=e41fc6fd9a42eb988493b6fce21b6b04812cdb7ce70ada2725f89c5e83e117af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6UDCJ5%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDCSYTiwyTDOcmaZa9Hfn%2FzOkYjrAo7eWyqrl9C38hMwAIgXdbYRYnPDvVsmXsX1axnpaf%2FX%2FZBuxdH0EJXETgV1Tsq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFJF7HdJO2aJOJVibircA3gjAMyuNQSx%2F4EIpiiDxf%2FBMsYaZ3sH0ZJ6OfF0hchxlTy1aArPe%2FTctbGsK482FgeIoDyQ41SmnZvuCAWWQchJTlKgdZhb%2BZ%2FQj7bP2zaCJa2ZITFcf1jXaZ2994C0p4mnGi6xH4LvzZb48Bt6YMLnoVQcJz34jABocu%2BA5lH%2BXEARBsrn6jj%2BDesNUtU9VqODkdxZ84VYIHg8KN6xIAkgFXf2skdIsv7%2BbVUHIohigIep%2BPwGkaq4%2FpQdWmbBWFpI%2BXHutVRwsuqAHeTCwqnPR5ZA%2FoRme%2F6EVbbL%2BmvJfy0YVKHzKf0owSCciigg3vE0gpznBnhPCXhzT%2BsXHpS0lXNJ96HXnWdFpgbne3a5U4tgzs%2B6a94TAsVxWlWn3i%2BawULFAVaf2tblh7G9xOdUfNFZQCmWqTCmV6m37p0XWuPzu4JcnZSl9LavOjB4LN1xgdx5IKumqaJNQUDYkLPxtCl%2BSc4stgBC8c8hBS3oT0rt35UiB7OEWbnCHb6zuRujUJtibalZDZLCSmp6ZEBxtk9LUaejDZqcZgB6QfywEvI2hXQ1iMfyxSeDGpHWIUsS6uRn01i8YWP1WJ%2BDxzhNQoamymJ5XC73Fe1BMP5QBkNK71i%2BVounDEe4MI7wssoGOqUB8snA2qOBHRs2BBsfcKeEtWFRw0WAj7AE3Op%2BcgISnsW%2BM4NOSKSi7rFzZKPYpFWGRUTUIut1ZwVpoOOCqn6wlih%2F5vLZxdGZWPgje%2BS7GQ1qF0U49kL8lymlGYXd0jlQXvq3E7a%2FvlxnZhD%2BdXGaLYc0K8EBbrlMcaYYxJFbgp1Sp0kHHWpl%2BBUaFwCfEGWXOxq%2FUDAZ5DAJgBZaL0rR479uUTCT&X-Amz-Signature=fa07a1f7acb4fed2e4ff03d6491e2d07035f200d930fea1bbc388f39feea1bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI6UDCJ5%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDCSYTiwyTDOcmaZa9Hfn%2FzOkYjrAo7eWyqrl9C38hMwAIgXdbYRYnPDvVsmXsX1axnpaf%2FX%2FZBuxdH0EJXETgV1Tsq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFJF7HdJO2aJOJVibircA3gjAMyuNQSx%2F4EIpiiDxf%2FBMsYaZ3sH0ZJ6OfF0hchxlTy1aArPe%2FTctbGsK482FgeIoDyQ41SmnZvuCAWWQchJTlKgdZhb%2BZ%2FQj7bP2zaCJa2ZITFcf1jXaZ2994C0p4mnGi6xH4LvzZb48Bt6YMLnoVQcJz34jABocu%2BA5lH%2BXEARBsrn6jj%2BDesNUtU9VqODkdxZ84VYIHg8KN6xIAkgFXf2skdIsv7%2BbVUHIohigIep%2BPwGkaq4%2FpQdWmbBWFpI%2BXHutVRwsuqAHeTCwqnPR5ZA%2FoRme%2F6EVbbL%2BmvJfy0YVKHzKf0owSCciigg3vE0gpznBnhPCXhzT%2BsXHpS0lXNJ96HXnWdFpgbne3a5U4tgzs%2B6a94TAsVxWlWn3i%2BawULFAVaf2tblh7G9xOdUfNFZQCmWqTCmV6m37p0XWuPzu4JcnZSl9LavOjB4LN1xgdx5IKumqaJNQUDYkLPxtCl%2BSc4stgBC8c8hBS3oT0rt35UiB7OEWbnCHb6zuRujUJtibalZDZLCSmp6ZEBxtk9LUaejDZqcZgB6QfywEvI2hXQ1iMfyxSeDGpHWIUsS6uRn01i8YWP1WJ%2BDxzhNQoamymJ5XC73Fe1BMP5QBkNK71i%2BVounDEe4MI7wssoGOqUB8snA2qOBHRs2BBsfcKeEtWFRw0WAj7AE3Op%2BcgISnsW%2BM4NOSKSi7rFzZKPYpFWGRUTUIut1ZwVpoOOCqn6wlih%2F5vLZxdGZWPgje%2BS7GQ1qF0U49kL8lymlGYXd0jlQXvq3E7a%2FvlxnZhD%2BdXGaLYc0K8EBbrlMcaYYxJFbgp1Sp0kHHWpl%2BBUaFwCfEGWXOxq%2FUDAZ5DAJgBZaL0rR479uUTCT&X-Amz-Signature=c500992ee878c6afe3994a2cb5d350658a82c617c892192e3b4b90f5f64e384f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJO7NWB%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T040757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCFiyq5VNUF7Ctue9ql96%2Fq6tfOURSwTsAuCEPvx%2FRb1wIhAMd87dNAm44JgEjtu41n2YS95V6WiaVxfJeBHtxOKSRDKv8DCDUQABoMNjM3NDIzMTgzODA1IgzfoF5Pvab5m4J720Yq3AOa4cyFWH7HouKQauknRSbFr1utmRyfz9tAyzGqqLKsC6EZKvAZ469547ceOU2CgpmT5jzqKZl5TEBG1mB%2FZHZdthw7LYTXFsEZ7IqsaSXXULL3h9KCi3lclcNyVRzc6BIugY4suvJw3hU%2FbHG88ufuVatslLKA9SXwLk4ck%2FVWYgeX2S1r1nhulkUnQ9UFtMvZDk3cdcP4QjI3FShLprtgMQb3Bg4cCc%2BGqHUJ7dodUh38D0nBb8gaAzf04jB%2B4eXP1x6zerHnKVQW7XBuU7NNGVBik8JOndt2fpMpT%2BYnXqNB%2F2epsaR8bX5KxVO512jyWrVGMVhyG059Q6sp%2BJUy384VWVsK816b08n2nv97HTtc8SD%2BNCMf3r59lk3D2%2FetQfRdYpszQ9SsVN07%2FzeIi%2FkUeuPaj31bHsk1Mb%2FVVIMenA1DcZ9VGR0ky7j016mYHeJLMXSogNl2a%2FThKCUQ6E%2B8oJoKdhARYbw5e8zFQ3ZPctEaMgXNieFfuA04YpFCFjDGGDUo0gRJrh8cbVkUKS%2F5v%2BUrzCN3UiIl0%2BsZSysg2JUcHv3dOEAxNFTkbVfOetCsc%2FxT96C01iPx8M88YhRuQ8NvIMgJLwaFqgQQ69l89YwNJ%2Bv3p4Z4MjDS77LKBjqkAXH5QuedoG%2FzUJrlWNgOTSAepy93iY%2F0xRb79fPZgBxPkQ5DsR1jbVkSFMF%2BpViK4FRUD5FqIetdelofYw1p5BRTp4fbj1%2FG0e0J%2BQrEWsU3KNvkg%2BJJMeguPnWe22nLbQ%2BHu8Q2%2FBLQxQc46X%2BIvmE4%2BfX1gRYjaXsWmElm5zH0po%2FjOCspO6c13tv7DeZSZ5LOwbYy7yGZiv3pj6s61a8Qfzrp&X-Amz-Signature=83a761b2859da57346dee118bb3e557bacf39cca9c13dab71f8928b2adf2acb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

