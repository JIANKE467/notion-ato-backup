
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WODUOMFU%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLt7F5kkbu0kjdJ75l2Zbg5y5jV26imzc%2BqN6Sx1gggAiEA9o%2BQlbwbKurxytwG43cQOrBEOltf2VkuztBRL%2F7IwmEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOqkq2bgJ4bIc2L2ZSrcA0e4%2FrJ8bRazURjDnAj67DUk26X6wuCaRDwjJg58jtOR2zSF53P9teCV%2BZQbrkeHV1YYFiEcUC3iZze2R7VW3FjmJ2iPEltcnJRfUcSnaQ9in0Md%2BnzbOYDetMbu2xulhgKMNyVmlwyzwKkRjh%2F5IcwFwPWDXO4yM5PFcmLrT85FuccPHsLwHbSHiqEhqE90xW7NA1IVLxNm2kbrJRf15E94WVd%2FAoE8WjAYm7tDK4wwF3dhgovWTQhfTjkm4fzCZRVaRqO1YBFoX5HG4Hl9XljIditSh%2ByyCuqHh03QYu9jWs%2BVIDbrqiKlELzKtnx2Yy7pefnSo8sktHgC2gIZK5Dn6ajcoG9Cw8QeHgRxTOaIaRfN5i37RPRkSW1bTGj6nOeAY4l1Pkm9J3IZ1x6jtDYWDIOMINagfKQhSd5Aw5LLFXva2DhVns7x6VVYvKPOdwASmvdNQFf9zWaHu%2FiZ3xxT%2F36uCAYSaVP5AYxK8Rmfp%2Bo46enrPde9WCCc5IXx%2BrfqRyj3yO7G3oD9P7stgiU42D3ZLGXv15877T30liUWkiJVEzzxkxk0bz1Hj5OrmHeBZts%2BAALWkILcbVcs%2F3ja7JmJGr%2FB34WUQPoWm29ukItyG5Sy5QrIXwzxMNHM68sGOqUB%2FDBh%2FbmoShCWPpU0iVEl4jSfOYnxs0fMU%2BocW3z6JnvfSL2FdChPh4mlzG9V9k0PpG3fvnrmGerwIxITDTMpLf7pIY11a7MnBl%2BGBYOWeGBJ9H99Ndg8F%2Blme7uTJwFOOJCaDCYiT7XELiMZCmgBa6B3CG9ML8FbRjd1nrQeVJsdz5AHUtqpkgS6m9MUGWqbQErRJh8aT1mU3P7DbP96MUtB3Mw3&X-Amz-Signature=540852218b217b6e4a65732094f83b68f2f3cfd4bc8f635303d7cc0cfe949342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BT57TAA%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlADi7bmcMR4B%2F0SqPD5BZ1NVa2OLq0Kusr33OD3570AiEAjDWR%2BhnUQ02ETp7BWbIJDGcVLICSjPQ4EFQpL%2BigwAwq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDP2du6LPz52h2FgDLSrcA3lp9drV1bJI%2Ftzl%2FXPRyKCu8Cu758w84RZ%2Bh%2Bk8VgppnDT5fyrSbEmJ6YQDykLn1SQeBo4d5rUxaNamhK%2FnBM0idfJH9Nnc5g3NhG0%2FjR56E1kfkvHgf4Uj9RsxF14CVMKjEGYcDQHuP%2FcCga9Kl%2Bj3kcJTpnjHYe%2Bo9%2FF8OjaLDBWhcBNwvmjOXc7%2BhrEEcA4BRmBzM1hNeYUvlUzPsACCJzkI5AjwyCuAt8iGtZH7MMdA7YY%2BTPMKkFHyjz0ETsJjVaX7yB2foouBuMEYyr466TBtmBVlLfX3zNFiTRR5%2FrNKcb0WGPODWc7aXr6zLNa4NxdRrpgOOzqIf4CJ26ZeiKJte0%2BDoN87pcFZVcd6TbyxUNdcbwW89NZpTpAwZqPGGhjjIscY5IO8jK3PZpezk0puZ2KTJ3oEh2F2teCi9bqOIfzvobkAJW%2F6WkY9LMYYyxin6WaeoG1lpMmmiarxNy0IP9HLYLUTO6rdt61UT5nXBSA1tVfoOf%2B59kA3y91gIIBe69p9FoxoixFHxfPFWjr2iEcvh5dTVCGq7Vcvlisk0jVZZwOsKEWWkenSo6lSIa%2FcR1MelboeKTpEP5yeFfD%2BCMAWFOJFRUJmO5IomlnI%2BgiYioIhogvtMOnM68sGOqUBiLJihJwB327cTAjYBuf6KyuzmDI0RtZwTRIL9YBWlxnQ9q8UNqUkNUNmTZA7nYBOq3LSQ0VsdYd4gbz5uOuRaTJnBPsjXPicnLi4BwVU9u8nrvZNETO29mnOYWJiz1xPNWTh6xq%2FFvHamipqfHCGlEOnbDWFNmUXO3YkIXggyR9DDXXX98ErMj%2BgH4KHvgLBCTmU62P6lMfr8mQi0jXOmxMCAtDX&X-Amz-Signature=502accd5c3d4f1c50188332c7c920c35becc2105a4a61a9f625ace74998c7911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BT57TAA%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlADi7bmcMR4B%2F0SqPD5BZ1NVa2OLq0Kusr33OD3570AiEAjDWR%2BhnUQ02ETp7BWbIJDGcVLICSjPQ4EFQpL%2BigwAwq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDP2du6LPz52h2FgDLSrcA3lp9drV1bJI%2Ftzl%2FXPRyKCu8Cu758w84RZ%2Bh%2Bk8VgppnDT5fyrSbEmJ6YQDykLn1SQeBo4d5rUxaNamhK%2FnBM0idfJH9Nnc5g3NhG0%2FjR56E1kfkvHgf4Uj9RsxF14CVMKjEGYcDQHuP%2FcCga9Kl%2Bj3kcJTpnjHYe%2Bo9%2FF8OjaLDBWhcBNwvmjOXc7%2BhrEEcA4BRmBzM1hNeYUvlUzPsACCJzkI5AjwyCuAt8iGtZH7MMdA7YY%2BTPMKkFHyjz0ETsJjVaX7yB2foouBuMEYyr466TBtmBVlLfX3zNFiTRR5%2FrNKcb0WGPODWc7aXr6zLNa4NxdRrpgOOzqIf4CJ26ZeiKJte0%2BDoN87pcFZVcd6TbyxUNdcbwW89NZpTpAwZqPGGhjjIscY5IO8jK3PZpezk0puZ2KTJ3oEh2F2teCi9bqOIfzvobkAJW%2F6WkY9LMYYyxin6WaeoG1lpMmmiarxNy0IP9HLYLUTO6rdt61UT5nXBSA1tVfoOf%2B59kA3y91gIIBe69p9FoxoixFHxfPFWjr2iEcvh5dTVCGq7Vcvlisk0jVZZwOsKEWWkenSo6lSIa%2FcR1MelboeKTpEP5yeFfD%2BCMAWFOJFRUJmO5IomlnI%2BgiYioIhogvtMOnM68sGOqUBiLJihJwB327cTAjYBuf6KyuzmDI0RtZwTRIL9YBWlxnQ9q8UNqUkNUNmTZA7nYBOq3LSQ0VsdYd4gbz5uOuRaTJnBPsjXPicnLi4BwVU9u8nrvZNETO29mnOYWJiz1xPNWTh6xq%2FFvHamipqfHCGlEOnbDWFNmUXO3YkIXggyR9DDXXX98ErMj%2BgH4KHvgLBCTmU62P6lMfr8mQi0jXOmxMCAtDX&X-Amz-Signature=190b592ef80a7d4d22e4ef84657eeb2ac358606f3a1fd86f6edb2e8915e38ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YKSGFSQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhJeUxgKlV%2FGdtsYI3WXIBg34i80rggivx2C%2FVXH0mwAiEAikl1yOIPhyx9oef0p0HPZC6798v%2BO8kptDjj81YdR4Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBW43SHLxXkW4MLqjCrcA6p%2BaOWnKXWyiBHni%2F%2F%2BBe53ieG1vd3BMOWudWJcbv3LrTItBGVIzW4bfhndRBHJ0J4DRyOy2kIk6z%2BJ0VXh9Sb0ET%2BUMBbBa%2B4Qtja%2FGY1sBk92Z0TyX9C%2BPlpy57nZwWsnkdqO5vyIHpFgyCAaV3mE1wVNVgtV%2BmLKanVdqBP44ojf4G2%2BQ8XfCiHvvd8U9VU27YPWt9VawuxnjDucTnpKBKypn910tb7TQq9V7yQaD10rS8%2BSaCbav%2FXE9JzN3AJjoy3Nb1mgxcRKG0ySmUWN6GHfdfUXddxUq9lI1CYiugbzavRWg6z4GUNMwxzH4Hep%2FsFz%2FeXSsel0GiCbnm41gJqD%2FpUNtkZEStWAK%2BZALEtGZCTfPsaqFyJJo3c1Bn3zcdjgZbJMtmhojYSZHN779mfXIwCMCo7Su7v4h%2FZTbJyVEfQPquvQO3AITKc6BUug1qFYvt00ereOh7Bty75wdZ1gGAbRg%2BsrghbISsiZXBxnBvqqqleWeTi58XAkR0aGa8h22kraThXQZH0OXihLioyl%2B4n15GH1YmIyEhiY%2FN4XV%2FeOFbz%2BSKvqvBNuLqiQyW2f2oQHu%2BGy5Sbd9a2hggZopO4vOXuhN3TZPJcwF6FD6tnPZqZ4EMxIMKzM68sGOqUBpB2TSV0wyJVYOroMbksk23tEBNd%2F1PiErFOe1849upLK%2FV4ar2NQuublXGEp3Z8ocmAg3HQuJHfQqDgle7peAwpVo6bZvbi%2BwIKrB%2Bts8bvfeNFetjgc%2FSy65SfogEXhMngI3TWmgpH7nd35iKsZZKmWCvzQwllaySZ%2Fmj7WbWKibJG685%2FsuY0VQzEBsHUQmCFh2ShWl1qgegVKPELoPVQM2Y7H&X-Amz-Signature=36909a7babc88e71cc8db123c3687026e5ba09196a7a8e878848402dd16835cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YKSGFSQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhJeUxgKlV%2FGdtsYI3WXIBg34i80rggivx2C%2FVXH0mwAiEAikl1yOIPhyx9oef0p0HPZC6798v%2BO8kptDjj81YdR4Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBW43SHLxXkW4MLqjCrcA6p%2BaOWnKXWyiBHni%2F%2F%2BBe53ieG1vd3BMOWudWJcbv3LrTItBGVIzW4bfhndRBHJ0J4DRyOy2kIk6z%2BJ0VXh9Sb0ET%2BUMBbBa%2B4Qtja%2FGY1sBk92Z0TyX9C%2BPlpy57nZwWsnkdqO5vyIHpFgyCAaV3mE1wVNVgtV%2BmLKanVdqBP44ojf4G2%2BQ8XfCiHvvd8U9VU27YPWt9VawuxnjDucTnpKBKypn910tb7TQq9V7yQaD10rS8%2BSaCbav%2FXE9JzN3AJjoy3Nb1mgxcRKG0ySmUWN6GHfdfUXddxUq9lI1CYiugbzavRWg6z4GUNMwxzH4Hep%2FsFz%2FeXSsel0GiCbnm41gJqD%2FpUNtkZEStWAK%2BZALEtGZCTfPsaqFyJJo3c1Bn3zcdjgZbJMtmhojYSZHN779mfXIwCMCo7Su7v4h%2FZTbJyVEfQPquvQO3AITKc6BUug1qFYvt00ereOh7Bty75wdZ1gGAbRg%2BsrghbISsiZXBxnBvqqqleWeTi58XAkR0aGa8h22kraThXQZH0OXihLioyl%2B4n15GH1YmIyEhiY%2FN4XV%2FeOFbz%2BSKvqvBNuLqiQyW2f2oQHu%2BGy5Sbd9a2hggZopO4vOXuhN3TZPJcwF6FD6tnPZqZ4EMxIMKzM68sGOqUBpB2TSV0wyJVYOroMbksk23tEBNd%2F1PiErFOe1849upLK%2FV4ar2NQuublXGEp3Z8ocmAg3HQuJHfQqDgle7peAwpVo6bZvbi%2BwIKrB%2Bts8bvfeNFetjgc%2FSy65SfogEXhMngI3TWmgpH7nd35iKsZZKmWCvzQwllaySZ%2Fmj7WbWKibJG685%2FsuY0VQzEBsHUQmCFh2ShWl1qgegVKPELoPVQM2Y7H&X-Amz-Signature=137131ecda0b5f324ee5095fd665a8f88ad48d3eaf391a345c0d79a58fb39dba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YKSGFSQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhJeUxgKlV%2FGdtsYI3WXIBg34i80rggivx2C%2FVXH0mwAiEAikl1yOIPhyx9oef0p0HPZC6798v%2BO8kptDjj81YdR4Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBW43SHLxXkW4MLqjCrcA6p%2BaOWnKXWyiBHni%2F%2F%2BBe53ieG1vd3BMOWudWJcbv3LrTItBGVIzW4bfhndRBHJ0J4DRyOy2kIk6z%2BJ0VXh9Sb0ET%2BUMBbBa%2B4Qtja%2FGY1sBk92Z0TyX9C%2BPlpy57nZwWsnkdqO5vyIHpFgyCAaV3mE1wVNVgtV%2BmLKanVdqBP44ojf4G2%2BQ8XfCiHvvd8U9VU27YPWt9VawuxnjDucTnpKBKypn910tb7TQq9V7yQaD10rS8%2BSaCbav%2FXE9JzN3AJjoy3Nb1mgxcRKG0ySmUWN6GHfdfUXddxUq9lI1CYiugbzavRWg6z4GUNMwxzH4Hep%2FsFz%2FeXSsel0GiCbnm41gJqD%2FpUNtkZEStWAK%2BZALEtGZCTfPsaqFyJJo3c1Bn3zcdjgZbJMtmhojYSZHN779mfXIwCMCo7Su7v4h%2FZTbJyVEfQPquvQO3AITKc6BUug1qFYvt00ereOh7Bty75wdZ1gGAbRg%2BsrghbISsiZXBxnBvqqqleWeTi58XAkR0aGa8h22kraThXQZH0OXihLioyl%2B4n15GH1YmIyEhiY%2FN4XV%2FeOFbz%2BSKvqvBNuLqiQyW2f2oQHu%2BGy5Sbd9a2hggZopO4vOXuhN3TZPJcwF6FD6tnPZqZ4EMxIMKzM68sGOqUBpB2TSV0wyJVYOroMbksk23tEBNd%2F1PiErFOe1849upLK%2FV4ar2NQuublXGEp3Z8ocmAg3HQuJHfQqDgle7peAwpVo6bZvbi%2BwIKrB%2Bts8bvfeNFetjgc%2FSy65SfogEXhMngI3TWmgpH7nd35iKsZZKmWCvzQwllaySZ%2Fmj7WbWKibJG685%2FsuY0VQzEBsHUQmCFh2ShWl1qgegVKPELoPVQM2Y7H&X-Amz-Signature=f23377ca08e3d998b5fb7118412e85e367d0b484efb50f426d3b5fe6c83f265d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YKSGFSQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhJeUxgKlV%2FGdtsYI3WXIBg34i80rggivx2C%2FVXH0mwAiEAikl1yOIPhyx9oef0p0HPZC6798v%2BO8kptDjj81YdR4Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBW43SHLxXkW4MLqjCrcA6p%2BaOWnKXWyiBHni%2F%2F%2BBe53ieG1vd3BMOWudWJcbv3LrTItBGVIzW4bfhndRBHJ0J4DRyOy2kIk6z%2BJ0VXh9Sb0ET%2BUMBbBa%2B4Qtja%2FGY1sBk92Z0TyX9C%2BPlpy57nZwWsnkdqO5vyIHpFgyCAaV3mE1wVNVgtV%2BmLKanVdqBP44ojf4G2%2BQ8XfCiHvvd8U9VU27YPWt9VawuxnjDucTnpKBKypn910tb7TQq9V7yQaD10rS8%2BSaCbav%2FXE9JzN3AJjoy3Nb1mgxcRKG0ySmUWN6GHfdfUXddxUq9lI1CYiugbzavRWg6z4GUNMwxzH4Hep%2FsFz%2FeXSsel0GiCbnm41gJqD%2FpUNtkZEStWAK%2BZALEtGZCTfPsaqFyJJo3c1Bn3zcdjgZbJMtmhojYSZHN779mfXIwCMCo7Su7v4h%2FZTbJyVEfQPquvQO3AITKc6BUug1qFYvt00ereOh7Bty75wdZ1gGAbRg%2BsrghbISsiZXBxnBvqqqleWeTi58XAkR0aGa8h22kraThXQZH0OXihLioyl%2B4n15GH1YmIyEhiY%2FN4XV%2FeOFbz%2BSKvqvBNuLqiQyW2f2oQHu%2BGy5Sbd9a2hggZopO4vOXuhN3TZPJcwF6FD6tnPZqZ4EMxIMKzM68sGOqUBpB2TSV0wyJVYOroMbksk23tEBNd%2F1PiErFOe1849upLK%2FV4ar2NQuublXGEp3Z8ocmAg3HQuJHfQqDgle7peAwpVo6bZvbi%2BwIKrB%2Bts8bvfeNFetjgc%2FSy65SfogEXhMngI3TWmgpH7nd35iKsZZKmWCvzQwllaySZ%2Fmj7WbWKibJG685%2FsuY0VQzEBsHUQmCFh2ShWl1qgegVKPELoPVQM2Y7H&X-Amz-Signature=c9e0635fb9849b832725c8593b5ecec838d0d7ae1579d87d803dac66407fbe9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YKSGFSQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhJeUxgKlV%2FGdtsYI3WXIBg34i80rggivx2C%2FVXH0mwAiEAikl1yOIPhyx9oef0p0HPZC6798v%2BO8kptDjj81YdR4Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBW43SHLxXkW4MLqjCrcA6p%2BaOWnKXWyiBHni%2F%2F%2BBe53ieG1vd3BMOWudWJcbv3LrTItBGVIzW4bfhndRBHJ0J4DRyOy2kIk6z%2BJ0VXh9Sb0ET%2BUMBbBa%2B4Qtja%2FGY1sBk92Z0TyX9C%2BPlpy57nZwWsnkdqO5vyIHpFgyCAaV3mE1wVNVgtV%2BmLKanVdqBP44ojf4G2%2BQ8XfCiHvvd8U9VU27YPWt9VawuxnjDucTnpKBKypn910tb7TQq9V7yQaD10rS8%2BSaCbav%2FXE9JzN3AJjoy3Nb1mgxcRKG0ySmUWN6GHfdfUXddxUq9lI1CYiugbzavRWg6z4GUNMwxzH4Hep%2FsFz%2FeXSsel0GiCbnm41gJqD%2FpUNtkZEStWAK%2BZALEtGZCTfPsaqFyJJo3c1Bn3zcdjgZbJMtmhojYSZHN779mfXIwCMCo7Su7v4h%2FZTbJyVEfQPquvQO3AITKc6BUug1qFYvt00ereOh7Bty75wdZ1gGAbRg%2BsrghbISsiZXBxnBvqqqleWeTi58XAkR0aGa8h22kraThXQZH0OXihLioyl%2B4n15GH1YmIyEhiY%2FN4XV%2FeOFbz%2BSKvqvBNuLqiQyW2f2oQHu%2BGy5Sbd9a2hggZopO4vOXuhN3TZPJcwF6FD6tnPZqZ4EMxIMKzM68sGOqUBpB2TSV0wyJVYOroMbksk23tEBNd%2F1PiErFOe1849upLK%2FV4ar2NQuublXGEp3Z8ocmAg3HQuJHfQqDgle7peAwpVo6bZvbi%2BwIKrB%2Bts8bvfeNFetjgc%2FSy65SfogEXhMngI3TWmgpH7nd35iKsZZKmWCvzQwllaySZ%2Fmj7WbWKibJG685%2FsuY0VQzEBsHUQmCFh2ShWl1qgegVKPELoPVQM2Y7H&X-Amz-Signature=f54f9b4091b711c81a896f300e843160fcc11d9b8c6bf52d1e17b3b967b5ce7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YKSGFSQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhJeUxgKlV%2FGdtsYI3WXIBg34i80rggivx2C%2FVXH0mwAiEAikl1yOIPhyx9oef0p0HPZC6798v%2BO8kptDjj81YdR4Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBW43SHLxXkW4MLqjCrcA6p%2BaOWnKXWyiBHni%2F%2F%2BBe53ieG1vd3BMOWudWJcbv3LrTItBGVIzW4bfhndRBHJ0J4DRyOy2kIk6z%2BJ0VXh9Sb0ET%2BUMBbBa%2B4Qtja%2FGY1sBk92Z0TyX9C%2BPlpy57nZwWsnkdqO5vyIHpFgyCAaV3mE1wVNVgtV%2BmLKanVdqBP44ojf4G2%2BQ8XfCiHvvd8U9VU27YPWt9VawuxnjDucTnpKBKypn910tb7TQq9V7yQaD10rS8%2BSaCbav%2FXE9JzN3AJjoy3Nb1mgxcRKG0ySmUWN6GHfdfUXddxUq9lI1CYiugbzavRWg6z4GUNMwxzH4Hep%2FsFz%2FeXSsel0GiCbnm41gJqD%2FpUNtkZEStWAK%2BZALEtGZCTfPsaqFyJJo3c1Bn3zcdjgZbJMtmhojYSZHN779mfXIwCMCo7Su7v4h%2FZTbJyVEfQPquvQO3AITKc6BUug1qFYvt00ereOh7Bty75wdZ1gGAbRg%2BsrghbISsiZXBxnBvqqqleWeTi58XAkR0aGa8h22kraThXQZH0OXihLioyl%2B4n15GH1YmIyEhiY%2FN4XV%2FeOFbz%2BSKvqvBNuLqiQyW2f2oQHu%2BGy5Sbd9a2hggZopO4vOXuhN3TZPJcwF6FD6tnPZqZ4EMxIMKzM68sGOqUBpB2TSV0wyJVYOroMbksk23tEBNd%2F1PiErFOe1849upLK%2FV4ar2NQuublXGEp3Z8ocmAg3HQuJHfQqDgle7peAwpVo6bZvbi%2BwIKrB%2Bts8bvfeNFetjgc%2FSy65SfogEXhMngI3TWmgpH7nd35iKsZZKmWCvzQwllaySZ%2Fmj7WbWKibJG685%2FsuY0VQzEBsHUQmCFh2ShWl1qgegVKPELoPVQM2Y7H&X-Amz-Signature=313e2ec0f2dbd8d92b7b6f64fa92cef241c5178dc19d87f8ed44f301d3661542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YKSGFSQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhJeUxgKlV%2FGdtsYI3WXIBg34i80rggivx2C%2FVXH0mwAiEAikl1yOIPhyx9oef0p0HPZC6798v%2BO8kptDjj81YdR4Qq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBW43SHLxXkW4MLqjCrcA6p%2BaOWnKXWyiBHni%2F%2F%2BBe53ieG1vd3BMOWudWJcbv3LrTItBGVIzW4bfhndRBHJ0J4DRyOy2kIk6z%2BJ0VXh9Sb0ET%2BUMBbBa%2B4Qtja%2FGY1sBk92Z0TyX9C%2BPlpy57nZwWsnkdqO5vyIHpFgyCAaV3mE1wVNVgtV%2BmLKanVdqBP44ojf4G2%2BQ8XfCiHvvd8U9VU27YPWt9VawuxnjDucTnpKBKypn910tb7TQq9V7yQaD10rS8%2BSaCbav%2FXE9JzN3AJjoy3Nb1mgxcRKG0ySmUWN6GHfdfUXddxUq9lI1CYiugbzavRWg6z4GUNMwxzH4Hep%2FsFz%2FeXSsel0GiCbnm41gJqD%2FpUNtkZEStWAK%2BZALEtGZCTfPsaqFyJJo3c1Bn3zcdjgZbJMtmhojYSZHN779mfXIwCMCo7Su7v4h%2FZTbJyVEfQPquvQO3AITKc6BUug1qFYvt00ereOh7Bty75wdZ1gGAbRg%2BsrghbISsiZXBxnBvqqqleWeTi58XAkR0aGa8h22kraThXQZH0OXihLioyl%2B4n15GH1YmIyEhiY%2FN4XV%2FeOFbz%2BSKvqvBNuLqiQyW2f2oQHu%2BGy5Sbd9a2hggZopO4vOXuhN3TZPJcwF6FD6tnPZqZ4EMxIMKzM68sGOqUBpB2TSV0wyJVYOroMbksk23tEBNd%2F1PiErFOe1849upLK%2FV4ar2NQuublXGEp3Z8ocmAg3HQuJHfQqDgle7peAwpVo6bZvbi%2BwIKrB%2Bts8bvfeNFetjgc%2FSy65SfogEXhMngI3TWmgpH7nd35iKsZZKmWCvzQwllaySZ%2Fmj7WbWKibJG685%2FsuY0VQzEBsHUQmCFh2ShWl1qgegVKPELoPVQM2Y7H&X-Amz-Signature=b38c5761a14709922688a5094184221e93e2da0262c75a5134aec053f8c250d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOIJ3SQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDokleXlx7xeuhA%2BEZX9AhrOEWCgbFZnyT%2BfyoMK1ur6AIgTRTn%2FxJuZRrSaVzfgbEoyrKIqbOH77kiqNM3mEklk4oq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOzh%2Bwc77w90Li8o2ircAy0oHcuYij77XFkPPuRj1tTHXpIpvk0s%2F2l%2Bz0z9wGS93mR74fDiSScSZYX1PtpPzyvR%2Br3IGQMXSuhMrNJHWGvITMNfDf0Y1iZ1tcucct4lZpUnTrkSVHQAXOu79SFP1w7uKcFOKvwzbvZUnyq4N5yuEbwyBvI1D1tT8JDihhPLBHxhSiwRj%2Fv49TkMaWAQMu7ZbUyXFY4%2FFmN4217krX%2F0PVXNi%2B6%2FJ%2B9uc%2BONrvOel4ue5GXJFSrTgUhYXr9IxdQNe1ZyRrvM2ox4Lst8Oz3KGu0N%2FVwmE5lOzn3mFSV3c4B2huFBvGrQym74YP8p3uQEdySzjQeycZ8vi1309mwEvnc7dt1qBQU6s0HcWdkGCBciefNgchaWn5MWXZEpb8JbRgWFYRY9xEoTI6FFMprK%2FCt1s82tHukJ0Q%2FrSjoXcDj%2BMszG2pQPR813pdGqmGb5F5ahjcA1O%2Ff7on%2F0t7AUqCKWb1ltI5QACZxBtNjtSxEzR%2Br8nYhnIzibCsQutDtRJxOqLTpub0saYoKQW5BsdazXFdxupK63hFFbyNbel34p7ULnxdJbpR%2B19CZzvbzr7zJ8UQDwRNgHRswMHtrfNSfD3l3aholF7PgkQ8HzzN57J8wyEupH5OGBMJTN68sGOqUBIVv5UJ%2BaEqfGVRaEcO1tLbvU%2BrPkKMv4p3Q%2BFX6wM3zb4CRI9AOIb8psLYJjM2LiHemF%2FuQxwfG%2Fn1tv9I8LJKZr%2FCbS0EQbCxi1UxGOjkUgNKdcPP0Qap0CKjSwoaPo%2FMR9Hci7mvcGStPFxRmuRmE9HXfSf4WkxDx3PBI5eRcT3Yg%2FD2xCTiZhf3tUr9Zgu%2FbFl7GBQDZGVvLbBNsAF%2FyOUrW9&X-Amz-Signature=c0c05f366ef660978f9ab947c89d2a8fd84f4c2db4104285dc052401b7182e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOIJ3SQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDokleXlx7xeuhA%2BEZX9AhrOEWCgbFZnyT%2BfyoMK1ur6AIgTRTn%2FxJuZRrSaVzfgbEoyrKIqbOH77kiqNM3mEklk4oq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOzh%2Bwc77w90Li8o2ircAy0oHcuYij77XFkPPuRj1tTHXpIpvk0s%2F2l%2Bz0z9wGS93mR74fDiSScSZYX1PtpPzyvR%2Br3IGQMXSuhMrNJHWGvITMNfDf0Y1iZ1tcucct4lZpUnTrkSVHQAXOu79SFP1w7uKcFOKvwzbvZUnyq4N5yuEbwyBvI1D1tT8JDihhPLBHxhSiwRj%2Fv49TkMaWAQMu7ZbUyXFY4%2FFmN4217krX%2F0PVXNi%2B6%2FJ%2B9uc%2BONrvOel4ue5GXJFSrTgUhYXr9IxdQNe1ZyRrvM2ox4Lst8Oz3KGu0N%2FVwmE5lOzn3mFSV3c4B2huFBvGrQym74YP8p3uQEdySzjQeycZ8vi1309mwEvnc7dt1qBQU6s0HcWdkGCBciefNgchaWn5MWXZEpb8JbRgWFYRY9xEoTI6FFMprK%2FCt1s82tHukJ0Q%2FrSjoXcDj%2BMszG2pQPR813pdGqmGb5F5ahjcA1O%2Ff7on%2F0t7AUqCKWb1ltI5QACZxBtNjtSxEzR%2Br8nYhnIzibCsQutDtRJxOqLTpub0saYoKQW5BsdazXFdxupK63hFFbyNbel34p7ULnxdJbpR%2B19CZzvbzr7zJ8UQDwRNgHRswMHtrfNSfD3l3aholF7PgkQ8HzzN57J8wyEupH5OGBMJTN68sGOqUBIVv5UJ%2BaEqfGVRaEcO1tLbvU%2BrPkKMv4p3Q%2BFX6wM3zb4CRI9AOIb8psLYJjM2LiHemF%2FuQxwfG%2Fn1tv9I8LJKZr%2FCbS0EQbCxi1UxGOjkUgNKdcPP0Qap0CKjSwoaPo%2FMR9Hci7mvcGStPFxRmuRmE9HXfSf4WkxDx3PBI5eRcT3Yg%2FD2xCTiZhf3tUr9Zgu%2FbFl7GBQDZGVvLbBNsAF%2FyOUrW9&X-Amz-Signature=ce77dede62577c149b7cf8cb8cb3a190772717fe0149a0f5866c2689626cce92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOIJ3SQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDokleXlx7xeuhA%2BEZX9AhrOEWCgbFZnyT%2BfyoMK1ur6AIgTRTn%2FxJuZRrSaVzfgbEoyrKIqbOH77kiqNM3mEklk4oq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOzh%2Bwc77w90Li8o2ircAy0oHcuYij77XFkPPuRj1tTHXpIpvk0s%2F2l%2Bz0z9wGS93mR74fDiSScSZYX1PtpPzyvR%2Br3IGQMXSuhMrNJHWGvITMNfDf0Y1iZ1tcucct4lZpUnTrkSVHQAXOu79SFP1w7uKcFOKvwzbvZUnyq4N5yuEbwyBvI1D1tT8JDihhPLBHxhSiwRj%2Fv49TkMaWAQMu7ZbUyXFY4%2FFmN4217krX%2F0PVXNi%2B6%2FJ%2B9uc%2BONrvOel4ue5GXJFSrTgUhYXr9IxdQNe1ZyRrvM2ox4Lst8Oz3KGu0N%2FVwmE5lOzn3mFSV3c4B2huFBvGrQym74YP8p3uQEdySzjQeycZ8vi1309mwEvnc7dt1qBQU6s0HcWdkGCBciefNgchaWn5MWXZEpb8JbRgWFYRY9xEoTI6FFMprK%2FCt1s82tHukJ0Q%2FrSjoXcDj%2BMszG2pQPR813pdGqmGb5F5ahjcA1O%2Ff7on%2F0t7AUqCKWb1ltI5QACZxBtNjtSxEzR%2Br8nYhnIzibCsQutDtRJxOqLTpub0saYoKQW5BsdazXFdxupK63hFFbyNbel34p7ULnxdJbpR%2B19CZzvbzr7zJ8UQDwRNgHRswMHtrfNSfD3l3aholF7PgkQ8HzzN57J8wyEupH5OGBMJTN68sGOqUBIVv5UJ%2BaEqfGVRaEcO1tLbvU%2BrPkKMv4p3Q%2BFX6wM3zb4CRI9AOIb8psLYJjM2LiHemF%2FuQxwfG%2Fn1tv9I8LJKZr%2FCbS0EQbCxi1UxGOjkUgNKdcPP0Qap0CKjSwoaPo%2FMR9Hci7mvcGStPFxRmuRmE9HXfSf4WkxDx3PBI5eRcT3Yg%2FD2xCTiZhf3tUr9Zgu%2FbFl7GBQDZGVvLbBNsAF%2FyOUrW9&X-Amz-Signature=a5eb7391e96a914548a20eea73eecc2a409c1bc8e5d42ef2685ac9bc7bc8b0c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOIJ3SQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDokleXlx7xeuhA%2BEZX9AhrOEWCgbFZnyT%2BfyoMK1ur6AIgTRTn%2FxJuZRrSaVzfgbEoyrKIqbOH77kiqNM3mEklk4oq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOzh%2Bwc77w90Li8o2ircAy0oHcuYij77XFkPPuRj1tTHXpIpvk0s%2F2l%2Bz0z9wGS93mR74fDiSScSZYX1PtpPzyvR%2Br3IGQMXSuhMrNJHWGvITMNfDf0Y1iZ1tcucct4lZpUnTrkSVHQAXOu79SFP1w7uKcFOKvwzbvZUnyq4N5yuEbwyBvI1D1tT8JDihhPLBHxhSiwRj%2Fv49TkMaWAQMu7ZbUyXFY4%2FFmN4217krX%2F0PVXNi%2B6%2FJ%2B9uc%2BONrvOel4ue5GXJFSrTgUhYXr9IxdQNe1ZyRrvM2ox4Lst8Oz3KGu0N%2FVwmE5lOzn3mFSV3c4B2huFBvGrQym74YP8p3uQEdySzjQeycZ8vi1309mwEvnc7dt1qBQU6s0HcWdkGCBciefNgchaWn5MWXZEpb8JbRgWFYRY9xEoTI6FFMprK%2FCt1s82tHukJ0Q%2FrSjoXcDj%2BMszG2pQPR813pdGqmGb5F5ahjcA1O%2Ff7on%2F0t7AUqCKWb1ltI5QACZxBtNjtSxEzR%2Br8nYhnIzibCsQutDtRJxOqLTpub0saYoKQW5BsdazXFdxupK63hFFbyNbel34p7ULnxdJbpR%2B19CZzvbzr7zJ8UQDwRNgHRswMHtrfNSfD3l3aholF7PgkQ8HzzN57J8wyEupH5OGBMJTN68sGOqUBIVv5UJ%2BaEqfGVRaEcO1tLbvU%2BrPkKMv4p3Q%2BFX6wM3zb4CRI9AOIb8psLYJjM2LiHemF%2FuQxwfG%2Fn1tv9I8LJKZr%2FCbS0EQbCxi1UxGOjkUgNKdcPP0Qap0CKjSwoaPo%2FMR9Hci7mvcGStPFxRmuRmE9HXfSf4WkxDx3PBI5eRcT3Yg%2FD2xCTiZhf3tUr9Zgu%2FbFl7GBQDZGVvLbBNsAF%2FyOUrW9&X-Amz-Signature=d1abbd6195771125ebaf46035f826a57a737de54bb2dd01eff2ba53bd18a727f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOIJ3SQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDokleXlx7xeuhA%2BEZX9AhrOEWCgbFZnyT%2BfyoMK1ur6AIgTRTn%2FxJuZRrSaVzfgbEoyrKIqbOH77kiqNM3mEklk4oq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOzh%2Bwc77w90Li8o2ircAy0oHcuYij77XFkPPuRj1tTHXpIpvk0s%2F2l%2Bz0z9wGS93mR74fDiSScSZYX1PtpPzyvR%2Br3IGQMXSuhMrNJHWGvITMNfDf0Y1iZ1tcucct4lZpUnTrkSVHQAXOu79SFP1w7uKcFOKvwzbvZUnyq4N5yuEbwyBvI1D1tT8JDihhPLBHxhSiwRj%2Fv49TkMaWAQMu7ZbUyXFY4%2FFmN4217krX%2F0PVXNi%2B6%2FJ%2B9uc%2BONrvOel4ue5GXJFSrTgUhYXr9IxdQNe1ZyRrvM2ox4Lst8Oz3KGu0N%2FVwmE5lOzn3mFSV3c4B2huFBvGrQym74YP8p3uQEdySzjQeycZ8vi1309mwEvnc7dt1qBQU6s0HcWdkGCBciefNgchaWn5MWXZEpb8JbRgWFYRY9xEoTI6FFMprK%2FCt1s82tHukJ0Q%2FrSjoXcDj%2BMszG2pQPR813pdGqmGb5F5ahjcA1O%2Ff7on%2F0t7AUqCKWb1ltI5QACZxBtNjtSxEzR%2Br8nYhnIzibCsQutDtRJxOqLTpub0saYoKQW5BsdazXFdxupK63hFFbyNbel34p7ULnxdJbpR%2B19CZzvbzr7zJ8UQDwRNgHRswMHtrfNSfD3l3aholF7PgkQ8HzzN57J8wyEupH5OGBMJTN68sGOqUBIVv5UJ%2BaEqfGVRaEcO1tLbvU%2BrPkKMv4p3Q%2BFX6wM3zb4CRI9AOIb8psLYJjM2LiHemF%2FuQxwfG%2Fn1tv9I8LJKZr%2FCbS0EQbCxi1UxGOjkUgNKdcPP0Qap0CKjSwoaPo%2FMR9Hci7mvcGStPFxRmuRmE9HXfSf4WkxDx3PBI5eRcT3Yg%2FD2xCTiZhf3tUr9Zgu%2FbFl7GBQDZGVvLbBNsAF%2FyOUrW9&X-Amz-Signature=758c088ffe5dcccdff6f9112835bf59610a228cd5f696820b1bb30e5c3e78b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTBG77K%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUQaYymW2PAjz6hzY4IjLjUJT3tIhE3j9BiOEen8CTqAiEA7EAlPyW8O6fy%2BgiQRn4jisCCkRUuCQvMTjwL%2FgGNZkwq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFpZI%2BYeWpYH0iDYwyrcA1V3Qn6owHqUbKGhSJWS2ENcMmwFeLEqRHEkdgb%2BsmHS7bOwe9ihiGbzVunLeiZQGkiZr3G%2BB33D29WiYuh0%2FsY%2FgXNBgzOoVJDShJfifA5PG1RSsTTG2uCHr5j28g6RwXEE3erNRW97TZL119a535YOr5WueWYRsQBqFO0wED8tLqH6ul3eYHkBvN4BCueKbrUALH7Z8krb2SwsKm1b5GG3e3c1gc6gMNkckxOERiJAH4N34%2Fp5lxIS1AqwS4xmCswJDqHPBtmFMjXIRpbRO%2Frk%2BWmxCSKgkXqmVcwsoW3%2Bn6NHos8D7UlabtLtyaYejLFJ5yEw4wYrZpXyZk2uQm3dZ0ugAvQT1n69eW5VafWCr0vLyfr5aoQJT5GiaPUTm4i054unvBK4L6YOjXLLam56ZikYEk52008SxVZKjVRSSg%2FuhgSuHMXyUdnYMt%2BhOfrwNnDV%2FrzUQZO4lpUeHQeuyqf%2BujJSQ5vJzNMm3qfRK88nbBGndKS8gspOj3qZDPrGoazE2dc7avBkuh0yqs%2FPwqskIIlvtCW4IFBd9wQc5T2Qau7zdt%2FdQGH98cc%2BS0rKlCD71gcsdNyVbHpwdonAPsV7RdSYj1puv%2BiJIBnsk73N1%2Bh5F%2BodZCpSMMDM68sGOqUBg0WIvcQFNCyDfbw15evjf3VsWrGLHpUuuMtwnSAaDzspEjApshwhiC331Uo%2BL%2BYkdB8tq2yEc502Ehxhpc2ZeWLbss3pcrQjMg8YgXsYUsH71fHwBzHOXEYJUiFkxj5esduI0flvzuXqisxcxf7J3BBrSQBxdE3fNpqx4e%2BktOXAsbHzyeqvHW3aocZCEZHDmNtLE%2FK7FPnfvRBANtRyHJqd3RBq&X-Amz-Signature=7f538891b641135e52ca885fcdc7af987fe525fb63a6855336117911ee195aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTBG77K%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUQaYymW2PAjz6hzY4IjLjUJT3tIhE3j9BiOEen8CTqAiEA7EAlPyW8O6fy%2BgiQRn4jisCCkRUuCQvMTjwL%2FgGNZkwq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFpZI%2BYeWpYH0iDYwyrcA1V3Qn6owHqUbKGhSJWS2ENcMmwFeLEqRHEkdgb%2BsmHS7bOwe9ihiGbzVunLeiZQGkiZr3G%2BB33D29WiYuh0%2FsY%2FgXNBgzOoVJDShJfifA5PG1RSsTTG2uCHr5j28g6RwXEE3erNRW97TZL119a535YOr5WueWYRsQBqFO0wED8tLqH6ul3eYHkBvN4BCueKbrUALH7Z8krb2SwsKm1b5GG3e3c1gc6gMNkckxOERiJAH4N34%2Fp5lxIS1AqwS4xmCswJDqHPBtmFMjXIRpbRO%2Frk%2BWmxCSKgkXqmVcwsoW3%2Bn6NHos8D7UlabtLtyaYejLFJ5yEw4wYrZpXyZk2uQm3dZ0ugAvQT1n69eW5VafWCr0vLyfr5aoQJT5GiaPUTm4i054unvBK4L6YOjXLLam56ZikYEk52008SxVZKjVRSSg%2FuhgSuHMXyUdnYMt%2BhOfrwNnDV%2FrzUQZO4lpUeHQeuyqf%2BujJSQ5vJzNMm3qfRK88nbBGndKS8gspOj3qZDPrGoazE2dc7avBkuh0yqs%2FPwqskIIlvtCW4IFBd9wQc5T2Qau7zdt%2FdQGH98cc%2BS0rKlCD71gcsdNyVbHpwdonAPsV7RdSYj1puv%2BiJIBnsk73N1%2Bh5F%2BodZCpSMMDM68sGOqUBg0WIvcQFNCyDfbw15evjf3VsWrGLHpUuuMtwnSAaDzspEjApshwhiC331Uo%2BL%2BYkdB8tq2yEc502Ehxhpc2ZeWLbss3pcrQjMg8YgXsYUsH71fHwBzHOXEYJUiFkxj5esduI0flvzuXqisxcxf7J3BBrSQBxdE3fNpqx4e%2BktOXAsbHzyeqvHW3aocZCEZHDmNtLE%2FK7FPnfvRBANtRyHJqd3RBq&X-Amz-Signature=51166bc7d88a316938dee548addd463844b0ee0d2b5624910e3d20893999e6f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTBG77K%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUQaYymW2PAjz6hzY4IjLjUJT3tIhE3j9BiOEen8CTqAiEA7EAlPyW8O6fy%2BgiQRn4jisCCkRUuCQvMTjwL%2FgGNZkwq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFpZI%2BYeWpYH0iDYwyrcA1V3Qn6owHqUbKGhSJWS2ENcMmwFeLEqRHEkdgb%2BsmHS7bOwe9ihiGbzVunLeiZQGkiZr3G%2BB33D29WiYuh0%2FsY%2FgXNBgzOoVJDShJfifA5PG1RSsTTG2uCHr5j28g6RwXEE3erNRW97TZL119a535YOr5WueWYRsQBqFO0wED8tLqH6ul3eYHkBvN4BCueKbrUALH7Z8krb2SwsKm1b5GG3e3c1gc6gMNkckxOERiJAH4N34%2Fp5lxIS1AqwS4xmCswJDqHPBtmFMjXIRpbRO%2Frk%2BWmxCSKgkXqmVcwsoW3%2Bn6NHos8D7UlabtLtyaYejLFJ5yEw4wYrZpXyZk2uQm3dZ0ugAvQT1n69eW5VafWCr0vLyfr5aoQJT5GiaPUTm4i054unvBK4L6YOjXLLam56ZikYEk52008SxVZKjVRSSg%2FuhgSuHMXyUdnYMt%2BhOfrwNnDV%2FrzUQZO4lpUeHQeuyqf%2BujJSQ5vJzNMm3qfRK88nbBGndKS8gspOj3qZDPrGoazE2dc7avBkuh0yqs%2FPwqskIIlvtCW4IFBd9wQc5T2Qau7zdt%2FdQGH98cc%2BS0rKlCD71gcsdNyVbHpwdonAPsV7RdSYj1puv%2BiJIBnsk73N1%2Bh5F%2BodZCpSMMDM68sGOqUBg0WIvcQFNCyDfbw15evjf3VsWrGLHpUuuMtwnSAaDzspEjApshwhiC331Uo%2BL%2BYkdB8tq2yEc502Ehxhpc2ZeWLbss3pcrQjMg8YgXsYUsH71fHwBzHOXEYJUiFkxj5esduI0flvzuXqisxcxf7J3BBrSQBxdE3fNpqx4e%2BktOXAsbHzyeqvHW3aocZCEZHDmNtLE%2FK7FPnfvRBANtRyHJqd3RBq&X-Amz-Signature=dfc31235d90548c5c633a862a5b35dc52004437fe423e849a5a5397493aee91c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UELRVR%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPyVrp%2BuoruG1Y0UWkGnfxqbmL0CrZk2j%2BOjfiNKPb%2BgIhAITM2RQKMXqD4mhKVlRHv5gJccg6cCWYp8oJifY5BD81Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwFDUBWxmPWjOR9XNIq3ANKVod%2BCrwC%2BeyDQbx0wUdB5hBE06wBhcJ3qO5FH9IL%2B3Jnw6LssWBOgi%2FqfjcJu2JHrmsQbu%2F8%2FxLO0x0sSKcKED2VRKUf9rn%2FsS0IX25WNUHsa73d9Hk8s4HFRK%2F3i6tF39edde03%2BY69%2BoO3ya6HHneDHTgihawirPef86UOW6EkM%2FAKHEW1jJ8JDuJfpe7ZjTgybA1WzUu2nwtiRqijGzkMd5WQt8fPPkcWNqdbPO8tKdTL3xHHNU5DrMlh%2BS1bn3KDl4znDLcZpPDZ3vaLSjNV7w%2FdmiUQ1mxjMSSxE%2BC77Flb8%2FjQO8yFeSY0CQubeYFN%2FYqWoJ%2FaY8yurFht%2Bpd8BsP2FUMCdEuEO8aut%2FzMJ0MFivA3uUe9Yj1FQNNQXp%2FFQPA4hSn7ZSInx%2BO8hE3lsFk%2F%2FjRVlXP4OhlF8BPcNy0zvI4Av81SoYpUl4TPRVRj2LUhC%2BAiaMhuw63BinuNCRyYXaoWN8sim42zDmg8FpcaB3ooAA%2BcCDjY%2BKfcb1WOoDSKLNf6kih48CaX1XiNCVbzv9Lpb03ic%2BiDkz%2Fyx3pacmZNOLfXU9%2FIAxJYz8GJhxH7dSXrDK3q7m1%2FsvBIPqF1E%2FvPc3DUgk657A%2B3kcXu69Y7c4NLdzDTzevLBjqkAf3olKu07uLcxMR%2Fgiuz94UP4tc%2Bma7SO75ZfLVO3JWuw0%2FBchJnQUqi1QAzphwRVQSvkENhirfkN3gXGmG%2BJmDytwhe8FVfZID%2FevcBVURoPkYgkMCdAIlA1FjQaDm4zI70Wkh%2FxYb%2Fkyuw5RTEX4Qgb3H8gZT0oxMY51lEfPolJFEU%2FBeQoSjvNLj8NoB7vFH5VN9NB3raAQWzmuqJ7BjQwa%2Bs&X-Amz-Signature=59d9c1e3d8eaa4113ed3aa6aabc245410abb07d9417d09b19018dae2c7e08c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UELRVR%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPyVrp%2BuoruG1Y0UWkGnfxqbmL0CrZk2j%2BOjfiNKPb%2BgIhAITM2RQKMXqD4mhKVlRHv5gJccg6cCWYp8oJifY5BD81Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwFDUBWxmPWjOR9XNIq3ANKVod%2BCrwC%2BeyDQbx0wUdB5hBE06wBhcJ3qO5FH9IL%2B3Jnw6LssWBOgi%2FqfjcJu2JHrmsQbu%2F8%2FxLO0x0sSKcKED2VRKUf9rn%2FsS0IX25WNUHsa73d9Hk8s4HFRK%2F3i6tF39edde03%2BY69%2BoO3ya6HHneDHTgihawirPef86UOW6EkM%2FAKHEW1jJ8JDuJfpe7ZjTgybA1WzUu2nwtiRqijGzkMd5WQt8fPPkcWNqdbPO8tKdTL3xHHNU5DrMlh%2BS1bn3KDl4znDLcZpPDZ3vaLSjNV7w%2FdmiUQ1mxjMSSxE%2BC77Flb8%2FjQO8yFeSY0CQubeYFN%2FYqWoJ%2FaY8yurFht%2Bpd8BsP2FUMCdEuEO8aut%2FzMJ0MFivA3uUe9Yj1FQNNQXp%2FFQPA4hSn7ZSInx%2BO8hE3lsFk%2F%2FjRVlXP4OhlF8BPcNy0zvI4Av81SoYpUl4TPRVRj2LUhC%2BAiaMhuw63BinuNCRyYXaoWN8sim42zDmg8FpcaB3ooAA%2BcCDjY%2BKfcb1WOoDSKLNf6kih48CaX1XiNCVbzv9Lpb03ic%2BiDkz%2Fyx3pacmZNOLfXU9%2FIAxJYz8GJhxH7dSXrDK3q7m1%2FsvBIPqF1E%2FvPc3DUgk657A%2B3kcXu69Y7c4NLdzDTzevLBjqkAf3olKu07uLcxMR%2Fgiuz94UP4tc%2Bma7SO75ZfLVO3JWuw0%2FBchJnQUqi1QAzphwRVQSvkENhirfkN3gXGmG%2BJmDytwhe8FVfZID%2FevcBVURoPkYgkMCdAIlA1FjQaDm4zI70Wkh%2FxYb%2Fkyuw5RTEX4Qgb3H8gZT0oxMY51lEfPolJFEU%2FBeQoSjvNLj8NoB7vFH5VN9NB3raAQWzmuqJ7BjQwa%2Bs&X-Amz-Signature=80930a43fe73fce863ba813cd3f9a84abb2ecf6436f47d9b6a14c86522eaebf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656KLAJT3%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLKK1LZ5gb6WYecJoIsew65sHgT8lqlSKBcYgzDDMvzAiBcWKpro9%2FFOrxBqz4cTG8Hpy%2FVTbxZPfzUQEf4BDWMtCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMMtWINYuTfl4liEZFKtwDXWU3Nj%2B3RKkWn0MbKLNlwly98vD8gOpt1fu4UhWNTjRz44EE2GbFNIGeGjft2nMFve9w3NoBZgbzkDEoUnE49dd7HyUq3ZFhuF3V16ge0GkW9xXRRvEWtAVllbCOjgVHksQFDBr8Ku1vp9MDN4oa1a5AkTBksJO%2FNon3WLEP0n7MXAzW17FMerAB1%2FbN2b10VS0t51CYfENPTcKzCTzP7%2Bx9TH6w7p4cqVMpOAkFrS8svtHpkrMiv52tmSZAT3Vf7zqHI%2FkYWBLYYFufy5v4C53xl6v%2B%2BCowq2L%2FhFgcH5YBn7HFWYeOmuU1Ed2HjEWEHHB6KLRRZHIpJLgb3%2ByADJx3i7CgdUaqKFupDUtc7%2BxFg3tELiNjgXKDq%2B7z9xyDEGS1szwgTCQe0RBfAGNxM%2FO7AYAH9IMWIK9WWbuyX7%2BKbnQeEFQZlvPIlderNxG8clfWoEhMx0jA48njpaP8h9vwmKf4qkPD51HUjDmh5vvuD9Iiil%2FqsFngEE26UM1wTOoLzVPT6ScGGS3USsOjEqcUxf1DX5SF5ySW2iLg2fUex04Bef3R64B10I0TUEc4ThxuLAxF9nXlrKA1D7SScHiDJT9OvAS4uYJM0frq72nMVgywZ%2BKdfLIsJo8wz83rywY6pgGz4DQaXl9h9%2FyKnQk%2FY%2BvuiTTxmDivep9zen0BvzdPgXsrlKkIEiGaGL1ynSGJF4Q2nNttPQfENMYw%2BTeUUIX0Z0Kk9YNtHzAhvch9U%2F50e20hs%2B%2BdJFXZcbMsxn3tbPPO8wCrtvpXpbEE4TTZRVt2Tm2sAXM%2FlSQT5M3d3LX9y1isYFuN1daK%2BgvO594rqgdB1b4wG1LqG5zqADzHtaWafkRk8GnS&X-Amz-Signature=23c9288f4689ab0513fc1361551251c8a3f5691b6e08a69e42975a73b3522d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656KLAJT3%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLKK1LZ5gb6WYecJoIsew65sHgT8lqlSKBcYgzDDMvzAiBcWKpro9%2FFOrxBqz4cTG8Hpy%2FVTbxZPfzUQEf4BDWMtCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMMtWINYuTfl4liEZFKtwDXWU3Nj%2B3RKkWn0MbKLNlwly98vD8gOpt1fu4UhWNTjRz44EE2GbFNIGeGjft2nMFve9w3NoBZgbzkDEoUnE49dd7HyUq3ZFhuF3V16ge0GkW9xXRRvEWtAVllbCOjgVHksQFDBr8Ku1vp9MDN4oa1a5AkTBksJO%2FNon3WLEP0n7MXAzW17FMerAB1%2FbN2b10VS0t51CYfENPTcKzCTzP7%2Bx9TH6w7p4cqVMpOAkFrS8svtHpkrMiv52tmSZAT3Vf7zqHI%2FkYWBLYYFufy5v4C53xl6v%2B%2BCowq2L%2FhFgcH5YBn7HFWYeOmuU1Ed2HjEWEHHB6KLRRZHIpJLgb3%2ByADJx3i7CgdUaqKFupDUtc7%2BxFg3tELiNjgXKDq%2B7z9xyDEGS1szwgTCQe0RBfAGNxM%2FO7AYAH9IMWIK9WWbuyX7%2BKbnQeEFQZlvPIlderNxG8clfWoEhMx0jA48njpaP8h9vwmKf4qkPD51HUjDmh5vvuD9Iiil%2FqsFngEE26UM1wTOoLzVPT6ScGGS3USsOjEqcUxf1DX5SF5ySW2iLg2fUex04Bef3R64B10I0TUEc4ThxuLAxF9nXlrKA1D7SScHiDJT9OvAS4uYJM0frq72nMVgywZ%2BKdfLIsJo8wz83rywY6pgGz4DQaXl9h9%2FyKnQk%2FY%2BvuiTTxmDivep9zen0BvzdPgXsrlKkIEiGaGL1ynSGJF4Q2nNttPQfENMYw%2BTeUUIX0Z0Kk9YNtHzAhvch9U%2F50e20hs%2B%2BdJFXZcbMsxn3tbPPO8wCrtvpXpbEE4TTZRVt2Tm2sAXM%2FlSQT5M3d3LX9y1isYFuN1daK%2BgvO594rqgdB1b4wG1LqG5zqADzHtaWafkRk8GnS&X-Amz-Signature=52019188cd9cec0ed5c19705bd0a678b4d994263b50f9186124a6789e1577eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656KLAJT3%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLKK1LZ5gb6WYecJoIsew65sHgT8lqlSKBcYgzDDMvzAiBcWKpro9%2FFOrxBqz4cTG8Hpy%2FVTbxZPfzUQEf4BDWMtCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMMtWINYuTfl4liEZFKtwDXWU3Nj%2B3RKkWn0MbKLNlwly98vD8gOpt1fu4UhWNTjRz44EE2GbFNIGeGjft2nMFve9w3NoBZgbzkDEoUnE49dd7HyUq3ZFhuF3V16ge0GkW9xXRRvEWtAVllbCOjgVHksQFDBr8Ku1vp9MDN4oa1a5AkTBksJO%2FNon3WLEP0n7MXAzW17FMerAB1%2FbN2b10VS0t51CYfENPTcKzCTzP7%2Bx9TH6w7p4cqVMpOAkFrS8svtHpkrMiv52tmSZAT3Vf7zqHI%2FkYWBLYYFufy5v4C53xl6v%2B%2BCowq2L%2FhFgcH5YBn7HFWYeOmuU1Ed2HjEWEHHB6KLRRZHIpJLgb3%2ByADJx3i7CgdUaqKFupDUtc7%2BxFg3tELiNjgXKDq%2B7z9xyDEGS1szwgTCQe0RBfAGNxM%2FO7AYAH9IMWIK9WWbuyX7%2BKbnQeEFQZlvPIlderNxG8clfWoEhMx0jA48njpaP8h9vwmKf4qkPD51HUjDmh5vvuD9Iiil%2FqsFngEE26UM1wTOoLzVPT6ScGGS3USsOjEqcUxf1DX5SF5ySW2iLg2fUex04Bef3R64B10I0TUEc4ThxuLAxF9nXlrKA1D7SScHiDJT9OvAS4uYJM0frq72nMVgywZ%2BKdfLIsJo8wz83rywY6pgGz4DQaXl9h9%2FyKnQk%2FY%2BvuiTTxmDivep9zen0BvzdPgXsrlKkIEiGaGL1ynSGJF4Q2nNttPQfENMYw%2BTeUUIX0Z0Kk9YNtHzAhvch9U%2F50e20hs%2B%2BdJFXZcbMsxn3tbPPO8wCrtvpXpbEE4TTZRVt2Tm2sAXM%2FlSQT5M3d3LX9y1isYFuN1daK%2BgvO594rqgdB1b4wG1LqG5zqADzHtaWafkRk8GnS&X-Amz-Signature=e356de43bad13baf2e9ff6925c7ba7da7438c84baa4a992a1276c9fc9dde10ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656KLAJT3%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLKK1LZ5gb6WYecJoIsew65sHgT8lqlSKBcYgzDDMvzAiBcWKpro9%2FFOrxBqz4cTG8Hpy%2FVTbxZPfzUQEf4BDWMtCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMMtWINYuTfl4liEZFKtwDXWU3Nj%2B3RKkWn0MbKLNlwly98vD8gOpt1fu4UhWNTjRz44EE2GbFNIGeGjft2nMFve9w3NoBZgbzkDEoUnE49dd7HyUq3ZFhuF3V16ge0GkW9xXRRvEWtAVllbCOjgVHksQFDBr8Ku1vp9MDN4oa1a5AkTBksJO%2FNon3WLEP0n7MXAzW17FMerAB1%2FbN2b10VS0t51CYfENPTcKzCTzP7%2Bx9TH6w7p4cqVMpOAkFrS8svtHpkrMiv52tmSZAT3Vf7zqHI%2FkYWBLYYFufy5v4C53xl6v%2B%2BCowq2L%2FhFgcH5YBn7HFWYeOmuU1Ed2HjEWEHHB6KLRRZHIpJLgb3%2ByADJx3i7CgdUaqKFupDUtc7%2BxFg3tELiNjgXKDq%2B7z9xyDEGS1szwgTCQe0RBfAGNxM%2FO7AYAH9IMWIK9WWbuyX7%2BKbnQeEFQZlvPIlderNxG8clfWoEhMx0jA48njpaP8h9vwmKf4qkPD51HUjDmh5vvuD9Iiil%2FqsFngEE26UM1wTOoLzVPT6ScGGS3USsOjEqcUxf1DX5SF5ySW2iLg2fUex04Bef3R64B10I0TUEc4ThxuLAxF9nXlrKA1D7SScHiDJT9OvAS4uYJM0frq72nMVgywZ%2BKdfLIsJo8wz83rywY6pgGz4DQaXl9h9%2FyKnQk%2FY%2BvuiTTxmDivep9zen0BvzdPgXsrlKkIEiGaGL1ynSGJF4Q2nNttPQfENMYw%2BTeUUIX0Z0Kk9YNtHzAhvch9U%2F50e20hs%2B%2BdJFXZcbMsxn3tbPPO8wCrtvpXpbEE4TTZRVt2Tm2sAXM%2FlSQT5M3d3LX9y1isYFuN1daK%2BgvO594rqgdB1b4wG1LqG5zqADzHtaWafkRk8GnS&X-Amz-Signature=53aeb0fdabb872a81fa362b161ff70382030958e565d888e1585b8e6b099f8f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656KLAJT3%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLKK1LZ5gb6WYecJoIsew65sHgT8lqlSKBcYgzDDMvzAiBcWKpro9%2FFOrxBqz4cTG8Hpy%2FVTbxZPfzUQEf4BDWMtCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMMtWINYuTfl4liEZFKtwDXWU3Nj%2B3RKkWn0MbKLNlwly98vD8gOpt1fu4UhWNTjRz44EE2GbFNIGeGjft2nMFve9w3NoBZgbzkDEoUnE49dd7HyUq3ZFhuF3V16ge0GkW9xXRRvEWtAVllbCOjgVHksQFDBr8Ku1vp9MDN4oa1a5AkTBksJO%2FNon3WLEP0n7MXAzW17FMerAB1%2FbN2b10VS0t51CYfENPTcKzCTzP7%2Bx9TH6w7p4cqVMpOAkFrS8svtHpkrMiv52tmSZAT3Vf7zqHI%2FkYWBLYYFufy5v4C53xl6v%2B%2BCowq2L%2FhFgcH5YBn7HFWYeOmuU1Ed2HjEWEHHB6KLRRZHIpJLgb3%2ByADJx3i7CgdUaqKFupDUtc7%2BxFg3tELiNjgXKDq%2B7z9xyDEGS1szwgTCQe0RBfAGNxM%2FO7AYAH9IMWIK9WWbuyX7%2BKbnQeEFQZlvPIlderNxG8clfWoEhMx0jA48njpaP8h9vwmKf4qkPD51HUjDmh5vvuD9Iiil%2FqsFngEE26UM1wTOoLzVPT6ScGGS3USsOjEqcUxf1DX5SF5ySW2iLg2fUex04Bef3R64B10I0TUEc4ThxuLAxF9nXlrKA1D7SScHiDJT9OvAS4uYJM0frq72nMVgywZ%2BKdfLIsJo8wz83rywY6pgGz4DQaXl9h9%2FyKnQk%2FY%2BvuiTTxmDivep9zen0BvzdPgXsrlKkIEiGaGL1ynSGJF4Q2nNttPQfENMYw%2BTeUUIX0Z0Kk9YNtHzAhvch9U%2F50e20hs%2B%2BdJFXZcbMsxn3tbPPO8wCrtvpXpbEE4TTZRVt2Tm2sAXM%2FlSQT5M3d3LX9y1isYFuN1daK%2BgvO594rqgdB1b4wG1LqG5zqADzHtaWafkRk8GnS&X-Amz-Signature=2fb7629eb737e0824b2a15a96c7d396954c834e3f00fe0992f9669d4eb0dbe16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSWVO3R%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T045204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB15qJjazI7NdH4JmttogBxrD03m%2FvBSy%2FgPghr1UO8qAiBn%2Fd2OQylmJOdgeGGBBoPBLCa1PlvXYKRstf2B7jYTiCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMV3nkTGHIlCzm52%2B1KtwDwVUwiJHd2sXs0kENQ2%2BIW6menW0ml%2BPpVwA6pjq%2BXIrdSAvUcg8nTqftEUxx%2Bqxbf%2FguQmImBpZgqjdtL1wmxYjRClJc4SZFpFbtDXux2zM1E99ahzwKJY0rJOhUVQ5dyPNtmepdPZN480Ie8DUumySht3zvjAJOAIAaYeTm4scdlkkTNPTZeUzuPUj8LYmvmnDc5eWkPWyK26DtSQwrlss9RLybpYacmyNY7nGdazeZDbRpW%2FNYgdg8%2F49AJYpqYxQzZbG9gGWRCgv0Ak43tyISRyLVPzPcs363N8scEa1QIAqMr54L9KRYldkx6KQKpgCiWWCuBPml9y6hbiqh%2BhGUua2fYhtLMrQcXMUCuO3c2kmzsXw32KW%2BUZI%2BW7jcw5gRX6MSc0Xs4PEmzLaXbbakO40DpfzSn8lGrAbOhSxDoqcMIoVvAVm1iaIrpSFsZwb7S%2FO4FLej3GUqv0W6Z9eo%2BIRyXThAo7v0KNhb32H5Ad9hfSHB6r2YKe%2FqiJr%2BU95CwYbLRyCf3p4tB5uKhPRIjcP106yGI8NcSjrGdU%2FSUM2OVGHXFgO9o03QFwEa7iShHjy9ApR5zqv5QJrYLS4KYi33SD2drwDVZFO5Hx4nw5cTJwH%2BTIugIq8wtszrywY6pgGw%2Bi4tps2VW1ZNzif%2FFx3XAcfdGyOb7wze6kGjlAptAKBn703mr8gf%2BH8LJO02jJLtPnp0pcdD9qNG7IFgzQX6mK6v67a9jDu2znFxf1wMJnA1Vx9WOiVBEHD1ti6VVDIoubqc5il9RaPTqIoWKL043U2GgghiPTgY4%2BV7kR%2FpLjJpsOLvUAYguOBKricu98pZolqeM6GypFqqFKsfVPMPp7E%2BATuV&X-Amz-Signature=3a7340440c81e812b9d22b99cb2ffa133ff9be2d3bb65837c3a18dffd9722dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

