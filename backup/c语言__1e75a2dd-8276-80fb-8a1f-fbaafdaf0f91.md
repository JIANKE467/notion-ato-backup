
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5DGWT6T%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDdwRwrcZslC%2FdDJWixA5SeCW%2FV9t8WFrKhwHXaNGMypgIgMjcjWQ2%2FYrwnZYSXmeWevMmyjyteXIt%2F1wCg83aPksMq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDPPokfNFtWZ%2FpDeguCrcA1OuniZJvspDbpUDVDaR3JBBxkqN%2Bb5qAIvTPP7s0ZLjCK%2BSNbAN%2B%2FPqRGALhyjHfDQnaHPdxjHrinbty39kH3eZuVCQOQPoH%2Bm%2FQ2fA8gnBYkgfjRqZ3DRnqAl7atqPJ%2FYs0gnu0QknMnT3naezTxxrvhZM0SkHdwpDiuiyXHUdi0YbnmP9KqJfVcS1BeX5i6OMWGVBTgyhmeMNJDvXZJKrSBLTruQTsrZi8PuENNnDIucvqoahmninowkN0PbcteT95AxhHFtz4ro6dM2vweTI5xqDRV397BHS1u%2B%2FKEadNPPWOdvzRxH67lUji9N%2FsviDbfmhsvA5owGmI5ZSIWGLC%2B6dya6xJvOvlNV80RJrapJas88E5vsjZ%2FhKpF01tWsqJoUOxqcpRmrcU2VGpB4dP3wNwf1SnLk1JxyJYY9o3nU99lQzG34YDLGQdb5CaZyZrxSjiJCpJu1Nf1BV%2FA0iHQFYw6cfW%2BLofxc%2F62uiqCbE7kBHRe9KoecKWekqceAW%2FccQASqBrsCvVyrxg1ynaMJIUzI%2B6dc7VImoyCzJJJ03Fooiedee7ypxjm2BywFrjm9ZNe%2BQ3DnQia3rntZV7urIQLSYPk7cOQPBvSe%2FDJq9DkJfrmKbti8xMOXE28sGOqUBRWtHn53dFYSoiMRsFPSXLvnf2Rzt8LIgKp4EgcbjSXDdU2TKT%2FZ2JESWj4ZLHvetUEtgFR961ZBL9tZFAJef%2B8AjXIVOTglb6w7PHggk9Y%2FfEmYC38%2Bmncs5vQ13%2Fkbn6YFzUmvKuBMpktypFzIe6xDsZB53gywol7uq%2BV5UA4GI3djiqEy72DuveQsVdfwG0QmgRdHiq9%2B2dK%2FpMXX%2FVVE%2FT%2F8s&X-Amz-Signature=ec7b11eb63c7e7db87ef52b49dc7069000ae62a8c577c181bda54258a3cf4697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q47V7U7I%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDF0P96DPCeQgtUePlu%2B01GV6t5KhynYePBnjew5MkCmwIgN0SuoMCCO0Xjg5iZG6olGWuzUsDx29ejCQus5ZExAXUq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDJSU54C1ITjUANEVqCrcAyWvwAXMgcpCNA5cxgNS3hTrYs%2FeS3CkDClFCDf%2BwTYk8WtGkMb5xb9%2FCeO3Yjgqkhrs58z8ySjoRcBp1euNdaT8pIqzzJZZbq9GUb1cYdQBw5n5epvPMfgGQiyuzK7bLfpSVxCVvk4hacCvrk6%2FImBiY3ZKjUEjhVt38Xdom%2FhafJLAc%2FcaOvjUYQ6Qlsm5yHDLklOUa%2FknMYohvnbexntcCNg6%2F1q7vl31FT13WoV2s3ce86%2Fy0HsW4VwMtwMkHEyARE%2BNUSJtnrc0XX9VtschUI%2F89cek72qPUvLnDraZ3Ib8eRarZcnhzAIvmKbT3Q3kyB5PqnhGoqxfBpLba5AUlQN5pxD%2Ft%2Fmrz9uDcigt7jpxVWyfbRmKTCwoU0I3pB8lVz7fzRYFUfLsS0SROB6UBdp6paoONyAm1GhuTvmIJqeO5h42J2zB%2BWKr21e1HaPqSQs53HAzysoVIbrb9Gn1ibsecT5lPwqcTbEJKTcfeYxMG6xfaG05NjG4RGH0d6DWuU38q0sFHN8wGtavhvnS%2FZHIccxxuj1%2FgnkEKHAtJPjg2tM89R1vq12D3SdAIHK3W9xbyAOm3YmxoInNu%2B3I0wCsV4eYUig%2FfL8JAqd228mdcMfvGZwLzpuTMPC%2F28sGOqUByb54MVYoVIyUcwIN1mv4HZor7na%2BRuOHMNNDieasW4cwFGHUNmsTE9MFIxSoYPToLrEdQRYVziMUh1EKH9Jsy0to0KURg6rmpRzjZEeE82o6wH8rS%2FTTGrIrJqVOj5kK5IEuXQMSzFSzMytRe7YqSJ9CBKuWHYorUSoMPQcgMxfkos%2BbmrIkfLPpv0puxWjWGHn%2FdSKFwf4BjW%2BwB5eztvAKwnir&X-Amz-Signature=67f7d99c7d4cd5dd9b7cec14398653ee6e9c172f00d9f186a2416da0ff474453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q47V7U7I%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDF0P96DPCeQgtUePlu%2B01GV6t5KhynYePBnjew5MkCmwIgN0SuoMCCO0Xjg5iZG6olGWuzUsDx29ejCQus5ZExAXUq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDJSU54C1ITjUANEVqCrcAyWvwAXMgcpCNA5cxgNS3hTrYs%2FeS3CkDClFCDf%2BwTYk8WtGkMb5xb9%2FCeO3Yjgqkhrs58z8ySjoRcBp1euNdaT8pIqzzJZZbq9GUb1cYdQBw5n5epvPMfgGQiyuzK7bLfpSVxCVvk4hacCvrk6%2FImBiY3ZKjUEjhVt38Xdom%2FhafJLAc%2FcaOvjUYQ6Qlsm5yHDLklOUa%2FknMYohvnbexntcCNg6%2F1q7vl31FT13WoV2s3ce86%2Fy0HsW4VwMtwMkHEyARE%2BNUSJtnrc0XX9VtschUI%2F89cek72qPUvLnDraZ3Ib8eRarZcnhzAIvmKbT3Q3kyB5PqnhGoqxfBpLba5AUlQN5pxD%2Ft%2Fmrz9uDcigt7jpxVWyfbRmKTCwoU0I3pB8lVz7fzRYFUfLsS0SROB6UBdp6paoONyAm1GhuTvmIJqeO5h42J2zB%2BWKr21e1HaPqSQs53HAzysoVIbrb9Gn1ibsecT5lPwqcTbEJKTcfeYxMG6xfaG05NjG4RGH0d6DWuU38q0sFHN8wGtavhvnS%2FZHIccxxuj1%2FgnkEKHAtJPjg2tM89R1vq12D3SdAIHK3W9xbyAOm3YmxoInNu%2B3I0wCsV4eYUig%2FfL8JAqd228mdcMfvGZwLzpuTMPC%2F28sGOqUByb54MVYoVIyUcwIN1mv4HZor7na%2BRuOHMNNDieasW4cwFGHUNmsTE9MFIxSoYPToLrEdQRYVziMUh1EKH9Jsy0to0KURg6rmpRzjZEeE82o6wH8rS%2FTTGrIrJqVOj5kK5IEuXQMSzFSzMytRe7YqSJ9CBKuWHYorUSoMPQcgMxfkos%2BbmrIkfLPpv0puxWjWGHn%2FdSKFwf4BjW%2BwB5eztvAKwnir&X-Amz-Signature=6646a29d5abbed05cf7d755736bc5828de519d60e19e8b0f24057fb87a699ccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6MN6ZKC%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD7G0SrDkeQNerh4DhRO9URlemOKBtZ8phQqX%2Boqcat8gIgC%2Ba9%2BvLTc4fe0a6z8Cm1kJmeDMH7aHRnfGWYQ6z4AOgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMbdyw2FH8i8xbmrvircA4XqgI%2B5t1w5yXhEA0a%2BHAOctH4MEcDGk6GPDw3bM00TsuvLYUCp67IKl%2FHE9Mw%2BxaLhv1SGlsdUfgSAEsu8aXWqZ2HUoWvyMrwKf2KySUVZubN0RpgZXTHt9AngjOFKjGJgHTJzcc2HeCleWnbusqbgL7FfV0a8qtfpsfDJLtQWzKdVxNSFxsnPOBuGv8rys3evl8VxWFp2HmrT6cbwyeegrnrNS5FVjiO4K4xCKVSz5dtppKrmfhkgCTHQAhBjkOid%2BerVrqGIyk7vPYbuQNOE5DqWUxncBE%2BVQVtAcsT8quTY4YT5DBFWcBtAyfOx9l8Zxvqzar19IDKSA7S%2Fqyo096l%2Fu%2BY0kbeQZOFq5diLfGfwRYkfL3%2BwL4kMjtTLIlZ0jhbaVfwVLmvNMZgkQYb1vorFu2iaJpGOhnjA5%2Ft8HDVS0Lzd8j900TW5lbSc2sJMg4zhcTTpuUW4N8ldQz21g%2BzKVOYCufQA3tBwo5evWNxPimIiUQIyRGAG5RBeX%2FOr2ALO9SlAGcJTCuUXGI7GDQfEx8%2Bh8YYHEA6MoZCYA9Bj%2BIJcFWgbr47ojZJRbO1CW8dz8dac8PI3XT1dA1gy8LClUxjXRcR9Zhrq6FY4srp7SG7MrDejl%2FvbMOHB28sGOqUBgzyqdm9IOMEXByNmj%2Fgk893HLLZ%2B%2BLmG1YcBM%2BIQA%2F97%2BgREjWQMm%2B%2B6UjRRbp%2Bbppr6ClgoTy31LkyNVXvRUvF77Daogq5F1bFog%2BYrcdusnpJfdbkkCcgIzmA8U7yrwDJoKE%2F1Kp6H%2BeWmTJPQwKLK9iBz%2BQCYNkjOvX%2F%2B3hN8RbnfYUujMkAq8eJpa5%2Fw%2F5uTsMyqLLOSY%2BanB%2BEjzlp1k5%2Fh&X-Amz-Signature=0a3a735bcaeab51885b5a03581dfbe0a312731d79cf3bb518b9e83341b32ec73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6MN6ZKC%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD7G0SrDkeQNerh4DhRO9URlemOKBtZ8phQqX%2Boqcat8gIgC%2Ba9%2BvLTc4fe0a6z8Cm1kJmeDMH7aHRnfGWYQ6z4AOgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMbdyw2FH8i8xbmrvircA4XqgI%2B5t1w5yXhEA0a%2BHAOctH4MEcDGk6GPDw3bM00TsuvLYUCp67IKl%2FHE9Mw%2BxaLhv1SGlsdUfgSAEsu8aXWqZ2HUoWvyMrwKf2KySUVZubN0RpgZXTHt9AngjOFKjGJgHTJzcc2HeCleWnbusqbgL7FfV0a8qtfpsfDJLtQWzKdVxNSFxsnPOBuGv8rys3evl8VxWFp2HmrT6cbwyeegrnrNS5FVjiO4K4xCKVSz5dtppKrmfhkgCTHQAhBjkOid%2BerVrqGIyk7vPYbuQNOE5DqWUxncBE%2BVQVtAcsT8quTY4YT5DBFWcBtAyfOx9l8Zxvqzar19IDKSA7S%2Fqyo096l%2Fu%2BY0kbeQZOFq5diLfGfwRYkfL3%2BwL4kMjtTLIlZ0jhbaVfwVLmvNMZgkQYb1vorFu2iaJpGOhnjA5%2Ft8HDVS0Lzd8j900TW5lbSc2sJMg4zhcTTpuUW4N8ldQz21g%2BzKVOYCufQA3tBwo5evWNxPimIiUQIyRGAG5RBeX%2FOr2ALO9SlAGcJTCuUXGI7GDQfEx8%2Bh8YYHEA6MoZCYA9Bj%2BIJcFWgbr47ojZJRbO1CW8dz8dac8PI3XT1dA1gy8LClUxjXRcR9Zhrq6FY4srp7SG7MrDejl%2FvbMOHB28sGOqUBgzyqdm9IOMEXByNmj%2Fgk893HLLZ%2B%2BLmG1YcBM%2BIQA%2F97%2BgREjWQMm%2B%2B6UjRRbp%2Bbppr6ClgoTy31LkyNVXvRUvF77Daogq5F1bFog%2BYrcdusnpJfdbkkCcgIzmA8U7yrwDJoKE%2F1Kp6H%2BeWmTJPQwKLK9iBz%2BQCYNkjOvX%2F%2B3hN8RbnfYUujMkAq8eJpa5%2Fw%2F5uTsMyqLLOSY%2BanB%2BEjzlp1k5%2Fh&X-Amz-Signature=cffc11ccf887d61a9e333ea3381b88b5de0a74c26d70cd119075bcd609c87e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6MN6ZKC%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD7G0SrDkeQNerh4DhRO9URlemOKBtZ8phQqX%2Boqcat8gIgC%2Ba9%2BvLTc4fe0a6z8Cm1kJmeDMH7aHRnfGWYQ6z4AOgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMbdyw2FH8i8xbmrvircA4XqgI%2B5t1w5yXhEA0a%2BHAOctH4MEcDGk6GPDw3bM00TsuvLYUCp67IKl%2FHE9Mw%2BxaLhv1SGlsdUfgSAEsu8aXWqZ2HUoWvyMrwKf2KySUVZubN0RpgZXTHt9AngjOFKjGJgHTJzcc2HeCleWnbusqbgL7FfV0a8qtfpsfDJLtQWzKdVxNSFxsnPOBuGv8rys3evl8VxWFp2HmrT6cbwyeegrnrNS5FVjiO4K4xCKVSz5dtppKrmfhkgCTHQAhBjkOid%2BerVrqGIyk7vPYbuQNOE5DqWUxncBE%2BVQVtAcsT8quTY4YT5DBFWcBtAyfOx9l8Zxvqzar19IDKSA7S%2Fqyo096l%2Fu%2BY0kbeQZOFq5diLfGfwRYkfL3%2BwL4kMjtTLIlZ0jhbaVfwVLmvNMZgkQYb1vorFu2iaJpGOhnjA5%2Ft8HDVS0Lzd8j900TW5lbSc2sJMg4zhcTTpuUW4N8ldQz21g%2BzKVOYCufQA3tBwo5evWNxPimIiUQIyRGAG5RBeX%2FOr2ALO9SlAGcJTCuUXGI7GDQfEx8%2Bh8YYHEA6MoZCYA9Bj%2BIJcFWgbr47ojZJRbO1CW8dz8dac8PI3XT1dA1gy8LClUxjXRcR9Zhrq6FY4srp7SG7MrDejl%2FvbMOHB28sGOqUBgzyqdm9IOMEXByNmj%2Fgk893HLLZ%2B%2BLmG1YcBM%2BIQA%2F97%2BgREjWQMm%2B%2B6UjRRbp%2Bbppr6ClgoTy31LkyNVXvRUvF77Daogq5F1bFog%2BYrcdusnpJfdbkkCcgIzmA8U7yrwDJoKE%2F1Kp6H%2BeWmTJPQwKLK9iBz%2BQCYNkjOvX%2F%2B3hN8RbnfYUujMkAq8eJpa5%2Fw%2F5uTsMyqLLOSY%2BanB%2BEjzlp1k5%2Fh&X-Amz-Signature=5958c11985f72849bb7f79e21f1a8df5ced1642ffb1ffc3a69d5ea478de99463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6MN6ZKC%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD7G0SrDkeQNerh4DhRO9URlemOKBtZ8phQqX%2Boqcat8gIgC%2Ba9%2BvLTc4fe0a6z8Cm1kJmeDMH7aHRnfGWYQ6z4AOgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMbdyw2FH8i8xbmrvircA4XqgI%2B5t1w5yXhEA0a%2BHAOctH4MEcDGk6GPDw3bM00TsuvLYUCp67IKl%2FHE9Mw%2BxaLhv1SGlsdUfgSAEsu8aXWqZ2HUoWvyMrwKf2KySUVZubN0RpgZXTHt9AngjOFKjGJgHTJzcc2HeCleWnbusqbgL7FfV0a8qtfpsfDJLtQWzKdVxNSFxsnPOBuGv8rys3evl8VxWFp2HmrT6cbwyeegrnrNS5FVjiO4K4xCKVSz5dtppKrmfhkgCTHQAhBjkOid%2BerVrqGIyk7vPYbuQNOE5DqWUxncBE%2BVQVtAcsT8quTY4YT5DBFWcBtAyfOx9l8Zxvqzar19IDKSA7S%2Fqyo096l%2Fu%2BY0kbeQZOFq5diLfGfwRYkfL3%2BwL4kMjtTLIlZ0jhbaVfwVLmvNMZgkQYb1vorFu2iaJpGOhnjA5%2Ft8HDVS0Lzd8j900TW5lbSc2sJMg4zhcTTpuUW4N8ldQz21g%2BzKVOYCufQA3tBwo5evWNxPimIiUQIyRGAG5RBeX%2FOr2ALO9SlAGcJTCuUXGI7GDQfEx8%2Bh8YYHEA6MoZCYA9Bj%2BIJcFWgbr47ojZJRbO1CW8dz8dac8PI3XT1dA1gy8LClUxjXRcR9Zhrq6FY4srp7SG7MrDejl%2FvbMOHB28sGOqUBgzyqdm9IOMEXByNmj%2Fgk893HLLZ%2B%2BLmG1YcBM%2BIQA%2F97%2BgREjWQMm%2B%2B6UjRRbp%2Bbppr6ClgoTy31LkyNVXvRUvF77Daogq5F1bFog%2BYrcdusnpJfdbkkCcgIzmA8U7yrwDJoKE%2F1Kp6H%2BeWmTJPQwKLK9iBz%2BQCYNkjOvX%2F%2B3hN8RbnfYUujMkAq8eJpa5%2Fw%2F5uTsMyqLLOSY%2BanB%2BEjzlp1k5%2Fh&X-Amz-Signature=4097a3e2fe459e79e5255f92cb3415f4768a3b0ceb1c4b29b48f793ad0718df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6MN6ZKC%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD7G0SrDkeQNerh4DhRO9URlemOKBtZ8phQqX%2Boqcat8gIgC%2Ba9%2BvLTc4fe0a6z8Cm1kJmeDMH7aHRnfGWYQ6z4AOgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMbdyw2FH8i8xbmrvircA4XqgI%2B5t1w5yXhEA0a%2BHAOctH4MEcDGk6GPDw3bM00TsuvLYUCp67IKl%2FHE9Mw%2BxaLhv1SGlsdUfgSAEsu8aXWqZ2HUoWvyMrwKf2KySUVZubN0RpgZXTHt9AngjOFKjGJgHTJzcc2HeCleWnbusqbgL7FfV0a8qtfpsfDJLtQWzKdVxNSFxsnPOBuGv8rys3evl8VxWFp2HmrT6cbwyeegrnrNS5FVjiO4K4xCKVSz5dtppKrmfhkgCTHQAhBjkOid%2BerVrqGIyk7vPYbuQNOE5DqWUxncBE%2BVQVtAcsT8quTY4YT5DBFWcBtAyfOx9l8Zxvqzar19IDKSA7S%2Fqyo096l%2Fu%2BY0kbeQZOFq5diLfGfwRYkfL3%2BwL4kMjtTLIlZ0jhbaVfwVLmvNMZgkQYb1vorFu2iaJpGOhnjA5%2Ft8HDVS0Lzd8j900TW5lbSc2sJMg4zhcTTpuUW4N8ldQz21g%2BzKVOYCufQA3tBwo5evWNxPimIiUQIyRGAG5RBeX%2FOr2ALO9SlAGcJTCuUXGI7GDQfEx8%2Bh8YYHEA6MoZCYA9Bj%2BIJcFWgbr47ojZJRbO1CW8dz8dac8PI3XT1dA1gy8LClUxjXRcR9Zhrq6FY4srp7SG7MrDejl%2FvbMOHB28sGOqUBgzyqdm9IOMEXByNmj%2Fgk893HLLZ%2B%2BLmG1YcBM%2BIQA%2F97%2BgREjWQMm%2B%2B6UjRRbp%2Bbppr6ClgoTy31LkyNVXvRUvF77Daogq5F1bFog%2BYrcdusnpJfdbkkCcgIzmA8U7yrwDJoKE%2F1Kp6H%2BeWmTJPQwKLK9iBz%2BQCYNkjOvX%2F%2B3hN8RbnfYUujMkAq8eJpa5%2Fw%2F5uTsMyqLLOSY%2BanB%2BEjzlp1k5%2Fh&X-Amz-Signature=b2e00b4941864a78a1006b29bb4bf6bd18ed557cd4a32d6160b28a1f56620a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6MN6ZKC%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD7G0SrDkeQNerh4DhRO9URlemOKBtZ8phQqX%2Boqcat8gIgC%2Ba9%2BvLTc4fe0a6z8Cm1kJmeDMH7aHRnfGWYQ6z4AOgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMbdyw2FH8i8xbmrvircA4XqgI%2B5t1w5yXhEA0a%2BHAOctH4MEcDGk6GPDw3bM00TsuvLYUCp67IKl%2FHE9Mw%2BxaLhv1SGlsdUfgSAEsu8aXWqZ2HUoWvyMrwKf2KySUVZubN0RpgZXTHt9AngjOFKjGJgHTJzcc2HeCleWnbusqbgL7FfV0a8qtfpsfDJLtQWzKdVxNSFxsnPOBuGv8rys3evl8VxWFp2HmrT6cbwyeegrnrNS5FVjiO4K4xCKVSz5dtppKrmfhkgCTHQAhBjkOid%2BerVrqGIyk7vPYbuQNOE5DqWUxncBE%2BVQVtAcsT8quTY4YT5DBFWcBtAyfOx9l8Zxvqzar19IDKSA7S%2Fqyo096l%2Fu%2BY0kbeQZOFq5diLfGfwRYkfL3%2BwL4kMjtTLIlZ0jhbaVfwVLmvNMZgkQYb1vorFu2iaJpGOhnjA5%2Ft8HDVS0Lzd8j900TW5lbSc2sJMg4zhcTTpuUW4N8ldQz21g%2BzKVOYCufQA3tBwo5evWNxPimIiUQIyRGAG5RBeX%2FOr2ALO9SlAGcJTCuUXGI7GDQfEx8%2Bh8YYHEA6MoZCYA9Bj%2BIJcFWgbr47ojZJRbO1CW8dz8dac8PI3XT1dA1gy8LClUxjXRcR9Zhrq6FY4srp7SG7MrDejl%2FvbMOHB28sGOqUBgzyqdm9IOMEXByNmj%2Fgk893HLLZ%2B%2BLmG1YcBM%2BIQA%2F97%2BgREjWQMm%2B%2B6UjRRbp%2Bbppr6ClgoTy31LkyNVXvRUvF77Daogq5F1bFog%2BYrcdusnpJfdbkkCcgIzmA8U7yrwDJoKE%2F1Kp6H%2BeWmTJPQwKLK9iBz%2BQCYNkjOvX%2F%2B3hN8RbnfYUujMkAq8eJpa5%2Fw%2F5uTsMyqLLOSY%2BanB%2BEjzlp1k5%2Fh&X-Amz-Signature=c208e0521bf216427f726a596983f8d131644654884b112a6222d708bed9225f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6MN6ZKC%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD7G0SrDkeQNerh4DhRO9URlemOKBtZ8phQqX%2Boqcat8gIgC%2Ba9%2BvLTc4fe0a6z8Cm1kJmeDMH7aHRnfGWYQ6z4AOgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDMbdyw2FH8i8xbmrvircA4XqgI%2B5t1w5yXhEA0a%2BHAOctH4MEcDGk6GPDw3bM00TsuvLYUCp67IKl%2FHE9Mw%2BxaLhv1SGlsdUfgSAEsu8aXWqZ2HUoWvyMrwKf2KySUVZubN0RpgZXTHt9AngjOFKjGJgHTJzcc2HeCleWnbusqbgL7FfV0a8qtfpsfDJLtQWzKdVxNSFxsnPOBuGv8rys3evl8VxWFp2HmrT6cbwyeegrnrNS5FVjiO4K4xCKVSz5dtppKrmfhkgCTHQAhBjkOid%2BerVrqGIyk7vPYbuQNOE5DqWUxncBE%2BVQVtAcsT8quTY4YT5DBFWcBtAyfOx9l8Zxvqzar19IDKSA7S%2Fqyo096l%2Fu%2BY0kbeQZOFq5diLfGfwRYkfL3%2BwL4kMjtTLIlZ0jhbaVfwVLmvNMZgkQYb1vorFu2iaJpGOhnjA5%2Ft8HDVS0Lzd8j900TW5lbSc2sJMg4zhcTTpuUW4N8ldQz21g%2BzKVOYCufQA3tBwo5evWNxPimIiUQIyRGAG5RBeX%2FOr2ALO9SlAGcJTCuUXGI7GDQfEx8%2Bh8YYHEA6MoZCYA9Bj%2BIJcFWgbr47ojZJRbO1CW8dz8dac8PI3XT1dA1gy8LClUxjXRcR9Zhrq6FY4srp7SG7MrDejl%2FvbMOHB28sGOqUBgzyqdm9IOMEXByNmj%2Fgk893HLLZ%2B%2BLmG1YcBM%2BIQA%2F97%2BgREjWQMm%2B%2B6UjRRbp%2Bbppr6ClgoTy31LkyNVXvRUvF77Daogq5F1bFog%2BYrcdusnpJfdbkkCcgIzmA8U7yrwDJoKE%2F1Kp6H%2BeWmTJPQwKLK9iBz%2BQCYNkjOvX%2F%2B3hN8RbnfYUujMkAq8eJpa5%2Fw%2F5uTsMyqLLOSY%2BanB%2BEjzlp1k5%2Fh&X-Amz-Signature=02e612b7d5ce910ebb5f72cdb178fd6d4ca2320df93610b3ba9bc4ec4f8fb8a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFVLLIXV%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIBKpOcVRXDBz84wXBcBC88qypC5%2FI%2BrNNSE%2FNCqWIo%2FjAiBeE64uu8M4%2Bb5G3EXJhMY4raRb5ntQF6XshQ75h9%2BlICr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMfqH5NNZAqHiWZlmEKtwDTuM2YY1nWr%2B%2FSXpGiJlPWESW3BllXsK%2B7DDsE7BOaPKAluTPXTLGbsyhpmIKZTEnhLfd4GAHgYRqpZ1fkgZiEWzq%2FbfB%2Boroj8A0DJjGu2pNc0kZ%2FNCFJXF6wUivQi1ry2LWRWG2gzOPz5NVRBa1SyPfmjnpzPLNIosyaL2AaYus2Y99ZchkxWruVmL2eQGDCWAICzu4WSW%2FQgigVH7dMgo61TUVp93xaw32iJ4dqkE3TEerYnah3mGKOWZo7j3%2FI%2B5aJ6JTWoLCm%2Fr4gL64f%2FJuyFFIm%2BNW1xyPQK25wk8L%2FdWOOvUcob6x0TwftTGPsniDqebU%2FDTb0EDX1%2Fj5zUZZ0XqKJ96nhuU%2BuyrmFUoRVXpU7Lf3Y4lXrvhiPkISjjpy7MOXl%2F61NvTQEOFHHxn3fLhPwyYamsnBeawUd9jaYV%2FkLxkJv6o821nvA6O%2BxkKsWs%2Bxu5xRVRJVcVQnn5%2Fw5aJS8Fo7Jw9FQMGaqUD0xshgJUwIoIIwiLxi3LkSnQvrQ7utlH4MPXtd%2F7SnDBY50%2F4jepPD82WnSr%2F7WOEhzU9H9%2B5s1UOivWrTuTCGuSRs%2BdKO%2FdRyM0wun9dbWXGUklNZdJrX5IGFnUT2wwDNne%2FbKqhDBF9s6M0w%2FcPbywY6pgFMX235QH7caiDOusz9jyEJzTgcaljAkJLRMiD%2Bmccqwn4bMvKdHWJJve0lqqHSjbN2c5eCBtnijYjiWP1DBM2AnmY7GDVOQlP5I0yeCte9dkgFDqXoxTxxn6TLIbDw9l6HavyZLYVymTosAYL13IJQBN%2B9QJXsgMrlZ8xx4iWw5366doIsxQtu0DL23Mz9Pge0646py2S17FNM2RBgbbhYVtMEwO7H&X-Amz-Signature=698cc087e3fedc66bd46b44c9df20d427feda35c4ebd2759aff2e958b3f09d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFVLLIXV%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIBKpOcVRXDBz84wXBcBC88qypC5%2FI%2BrNNSE%2FNCqWIo%2FjAiBeE64uu8M4%2Bb5G3EXJhMY4raRb5ntQF6XshQ75h9%2BlICr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMfqH5NNZAqHiWZlmEKtwDTuM2YY1nWr%2B%2FSXpGiJlPWESW3BllXsK%2B7DDsE7BOaPKAluTPXTLGbsyhpmIKZTEnhLfd4GAHgYRqpZ1fkgZiEWzq%2FbfB%2Boroj8A0DJjGu2pNc0kZ%2FNCFJXF6wUivQi1ry2LWRWG2gzOPz5NVRBa1SyPfmjnpzPLNIosyaL2AaYus2Y99ZchkxWruVmL2eQGDCWAICzu4WSW%2FQgigVH7dMgo61TUVp93xaw32iJ4dqkE3TEerYnah3mGKOWZo7j3%2FI%2B5aJ6JTWoLCm%2Fr4gL64f%2FJuyFFIm%2BNW1xyPQK25wk8L%2FdWOOvUcob6x0TwftTGPsniDqebU%2FDTb0EDX1%2Fj5zUZZ0XqKJ96nhuU%2BuyrmFUoRVXpU7Lf3Y4lXrvhiPkISjjpy7MOXl%2F61NvTQEOFHHxn3fLhPwyYamsnBeawUd9jaYV%2FkLxkJv6o821nvA6O%2BxkKsWs%2Bxu5xRVRJVcVQnn5%2Fw5aJS8Fo7Jw9FQMGaqUD0xshgJUwIoIIwiLxi3LkSnQvrQ7utlH4MPXtd%2F7SnDBY50%2F4jepPD82WnSr%2F7WOEhzU9H9%2B5s1UOivWrTuTCGuSRs%2BdKO%2FdRyM0wun9dbWXGUklNZdJrX5IGFnUT2wwDNne%2FbKqhDBF9s6M0w%2FcPbywY6pgFMX235QH7caiDOusz9jyEJzTgcaljAkJLRMiD%2Bmccqwn4bMvKdHWJJve0lqqHSjbN2c5eCBtnijYjiWP1DBM2AnmY7GDVOQlP5I0yeCte9dkgFDqXoxTxxn6TLIbDw9l6HavyZLYVymTosAYL13IJQBN%2B9QJXsgMrlZ8xx4iWw5366doIsxQtu0DL23Mz9Pge0646py2S17FNM2RBgbbhYVtMEwO7H&X-Amz-Signature=3caf9bda2a9311be8643f25737a19339bfae2da61b2e5ede854bf8a247cfb484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFVLLIXV%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIBKpOcVRXDBz84wXBcBC88qypC5%2FI%2BrNNSE%2FNCqWIo%2FjAiBeE64uu8M4%2Bb5G3EXJhMY4raRb5ntQF6XshQ75h9%2BlICr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMfqH5NNZAqHiWZlmEKtwDTuM2YY1nWr%2B%2FSXpGiJlPWESW3BllXsK%2B7DDsE7BOaPKAluTPXTLGbsyhpmIKZTEnhLfd4GAHgYRqpZ1fkgZiEWzq%2FbfB%2Boroj8A0DJjGu2pNc0kZ%2FNCFJXF6wUivQi1ry2LWRWG2gzOPz5NVRBa1SyPfmjnpzPLNIosyaL2AaYus2Y99ZchkxWruVmL2eQGDCWAICzu4WSW%2FQgigVH7dMgo61TUVp93xaw32iJ4dqkE3TEerYnah3mGKOWZo7j3%2FI%2B5aJ6JTWoLCm%2Fr4gL64f%2FJuyFFIm%2BNW1xyPQK25wk8L%2FdWOOvUcob6x0TwftTGPsniDqebU%2FDTb0EDX1%2Fj5zUZZ0XqKJ96nhuU%2BuyrmFUoRVXpU7Lf3Y4lXrvhiPkISjjpy7MOXl%2F61NvTQEOFHHxn3fLhPwyYamsnBeawUd9jaYV%2FkLxkJv6o821nvA6O%2BxkKsWs%2Bxu5xRVRJVcVQnn5%2Fw5aJS8Fo7Jw9FQMGaqUD0xshgJUwIoIIwiLxi3LkSnQvrQ7utlH4MPXtd%2F7SnDBY50%2F4jepPD82WnSr%2F7WOEhzU9H9%2B5s1UOivWrTuTCGuSRs%2BdKO%2FdRyM0wun9dbWXGUklNZdJrX5IGFnUT2wwDNne%2FbKqhDBF9s6M0w%2FcPbywY6pgFMX235QH7caiDOusz9jyEJzTgcaljAkJLRMiD%2Bmccqwn4bMvKdHWJJve0lqqHSjbN2c5eCBtnijYjiWP1DBM2AnmY7GDVOQlP5I0yeCte9dkgFDqXoxTxxn6TLIbDw9l6HavyZLYVymTosAYL13IJQBN%2B9QJXsgMrlZ8xx4iWw5366doIsxQtu0DL23Mz9Pge0646py2S17FNM2RBgbbhYVtMEwO7H&X-Amz-Signature=6c1a08972265de6b5579a20bff3f3ab6b1f06c52480882eaec03064710ac4f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFVLLIXV%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIBKpOcVRXDBz84wXBcBC88qypC5%2FI%2BrNNSE%2FNCqWIo%2FjAiBeE64uu8M4%2Bb5G3EXJhMY4raRb5ntQF6XshQ75h9%2BlICr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMfqH5NNZAqHiWZlmEKtwDTuM2YY1nWr%2B%2FSXpGiJlPWESW3BllXsK%2B7DDsE7BOaPKAluTPXTLGbsyhpmIKZTEnhLfd4GAHgYRqpZ1fkgZiEWzq%2FbfB%2Boroj8A0DJjGu2pNc0kZ%2FNCFJXF6wUivQi1ry2LWRWG2gzOPz5NVRBa1SyPfmjnpzPLNIosyaL2AaYus2Y99ZchkxWruVmL2eQGDCWAICzu4WSW%2FQgigVH7dMgo61TUVp93xaw32iJ4dqkE3TEerYnah3mGKOWZo7j3%2FI%2B5aJ6JTWoLCm%2Fr4gL64f%2FJuyFFIm%2BNW1xyPQK25wk8L%2FdWOOvUcob6x0TwftTGPsniDqebU%2FDTb0EDX1%2Fj5zUZZ0XqKJ96nhuU%2BuyrmFUoRVXpU7Lf3Y4lXrvhiPkISjjpy7MOXl%2F61NvTQEOFHHxn3fLhPwyYamsnBeawUd9jaYV%2FkLxkJv6o821nvA6O%2BxkKsWs%2Bxu5xRVRJVcVQnn5%2Fw5aJS8Fo7Jw9FQMGaqUD0xshgJUwIoIIwiLxi3LkSnQvrQ7utlH4MPXtd%2F7SnDBY50%2F4jepPD82WnSr%2F7WOEhzU9H9%2B5s1UOivWrTuTCGuSRs%2BdKO%2FdRyM0wun9dbWXGUklNZdJrX5IGFnUT2wwDNne%2FbKqhDBF9s6M0w%2FcPbywY6pgFMX235QH7caiDOusz9jyEJzTgcaljAkJLRMiD%2Bmccqwn4bMvKdHWJJve0lqqHSjbN2c5eCBtnijYjiWP1DBM2AnmY7GDVOQlP5I0yeCte9dkgFDqXoxTxxn6TLIbDw9l6HavyZLYVymTosAYL13IJQBN%2B9QJXsgMrlZ8xx4iWw5366doIsxQtu0DL23Mz9Pge0646py2S17FNM2RBgbbhYVtMEwO7H&X-Amz-Signature=5fb0cc8eb3f389c847921fb69390c7634fcbd5da69881fadf49dc8451f85f159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFVLLIXV%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIBKpOcVRXDBz84wXBcBC88qypC5%2FI%2BrNNSE%2FNCqWIo%2FjAiBeE64uu8M4%2Bb5G3EXJhMY4raRb5ntQF6XshQ75h9%2BlICr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMfqH5NNZAqHiWZlmEKtwDTuM2YY1nWr%2B%2FSXpGiJlPWESW3BllXsK%2B7DDsE7BOaPKAluTPXTLGbsyhpmIKZTEnhLfd4GAHgYRqpZ1fkgZiEWzq%2FbfB%2Boroj8A0DJjGu2pNc0kZ%2FNCFJXF6wUivQi1ry2LWRWG2gzOPz5NVRBa1SyPfmjnpzPLNIosyaL2AaYus2Y99ZchkxWruVmL2eQGDCWAICzu4WSW%2FQgigVH7dMgo61TUVp93xaw32iJ4dqkE3TEerYnah3mGKOWZo7j3%2FI%2B5aJ6JTWoLCm%2Fr4gL64f%2FJuyFFIm%2BNW1xyPQK25wk8L%2FdWOOvUcob6x0TwftTGPsniDqebU%2FDTb0EDX1%2Fj5zUZZ0XqKJ96nhuU%2BuyrmFUoRVXpU7Lf3Y4lXrvhiPkISjjpy7MOXl%2F61NvTQEOFHHxn3fLhPwyYamsnBeawUd9jaYV%2FkLxkJv6o821nvA6O%2BxkKsWs%2Bxu5xRVRJVcVQnn5%2Fw5aJS8Fo7Jw9FQMGaqUD0xshgJUwIoIIwiLxi3LkSnQvrQ7utlH4MPXtd%2F7SnDBY50%2F4jepPD82WnSr%2F7WOEhzU9H9%2B5s1UOivWrTuTCGuSRs%2BdKO%2FdRyM0wun9dbWXGUklNZdJrX5IGFnUT2wwDNne%2FbKqhDBF9s6M0w%2FcPbywY6pgFMX235QH7caiDOusz9jyEJzTgcaljAkJLRMiD%2Bmccqwn4bMvKdHWJJve0lqqHSjbN2c5eCBtnijYjiWP1DBM2AnmY7GDVOQlP5I0yeCte9dkgFDqXoxTxxn6TLIbDw9l6HavyZLYVymTosAYL13IJQBN%2B9QJXsgMrlZ8xx4iWw5366doIsxQtu0DL23Mz9Pge0646py2S17FNM2RBgbbhYVtMEwO7H&X-Amz-Signature=3110a4eafcb18d4418b2d94b7c55c9e0a600b919f9dd9e4b828661b1e16a6d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOYE2JK%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIDVC8qWqomz%2FgffvlAbkkDc7Rvf75FDPGx2Z0gFrMlxsAiEA5fI02mI67kh1uN16jChAi4kAyiD9uH2DF2yyuiHV5p4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDeBY64m2ZpbOLtM7SrcA5RArssnq5OMNtLKVNQHgcfk5blBZAR3TWXv42VmAHFjR6cz1HQ10SffQ152mlNdyQky62ycCVqTpxj733u3Zkb6MhSFXRBk1oWnfVnPt9O0ot8q0QgS4iZdOJKOkHk6edfmHstp5NGU4qxkkpAmLqDZX%2BpaiKlECx%2FFinZaPqaMS%2BnLhbIActuI8qvSXriu5jYiZt6dsPpohy%2BGpies%2FpMx3o%2F%2FB3IpW541w7mq7O%2FusweVQSFK7NTlCt%2BYQLhX0OP4%2Fq79Vu8FKt7jxrZ8%2B5ZMG1JRg4NHFe99vF%2FwJfi0XAnzR5wSVBubEUykE07JJkaClYV1jWrLNREpdqDCyrL7TSujBEIn4ys7mlgbwHnBWCFFdL6Gz3QdyU%2FIfr4xi1pHrTRwBj3uw4WjQeBA8XFCgTRXVU9sfRmKdgE7zO7pbOTHiaf9IElWAISyn1ZUM1ut0nH9808xb9dQ%2FRMQuofgMy9sPjVvbb2r%2B9jArNdTADoW9XeoXhGRA8ei0v7hrzn7KSKC1GkORibCc3z5SW%2F%2BEt%2F7TnwoP3diXNm4XWamA7LmnRnkArMUQhYz0XSGZ5vu01%2FuXI83b%2Flk8dw%2FeuiGFIdx5GZ%2FAKZRlRC6%2BKgQfkbP4OQ%2FIhYyMk5zMMrf2ssGOqUBAUs0g2mGbVp7WP3bNZ%2FQajPKmn%2Fdf4%2FuO4pgSEPWufFEs2i5e99%2F8vPhIsjMFMwyzhK0LTCIXumi9jOpbMEoZF5XyAYk%2B%2B0EAfnpQIyG2dxiRWr6h7t6e%2FvwpJRPxnY57G6E8OJUZGghjbq8F0tyznN8pfbYeaTAkurPOfarMFDyIwdEf4h7twWzLz1CRrNyb9billAP3bSuKyVZJj2vrtM4Bg5d&X-Amz-Signature=3be5d678c3288e114e07d5f0e58f27d216d35d4d345a45f1872220e0e130fe45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOYE2JK%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIDVC8qWqomz%2FgffvlAbkkDc7Rvf75FDPGx2Z0gFrMlxsAiEA5fI02mI67kh1uN16jChAi4kAyiD9uH2DF2yyuiHV5p4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDeBY64m2ZpbOLtM7SrcA5RArssnq5OMNtLKVNQHgcfk5blBZAR3TWXv42VmAHFjR6cz1HQ10SffQ152mlNdyQky62ycCVqTpxj733u3Zkb6MhSFXRBk1oWnfVnPt9O0ot8q0QgS4iZdOJKOkHk6edfmHstp5NGU4qxkkpAmLqDZX%2BpaiKlECx%2FFinZaPqaMS%2BnLhbIActuI8qvSXriu5jYiZt6dsPpohy%2BGpies%2FpMx3o%2F%2FB3IpW541w7mq7O%2FusweVQSFK7NTlCt%2BYQLhX0OP4%2Fq79Vu8FKt7jxrZ8%2B5ZMG1JRg4NHFe99vF%2FwJfi0XAnzR5wSVBubEUykE07JJkaClYV1jWrLNREpdqDCyrL7TSujBEIn4ys7mlgbwHnBWCFFdL6Gz3QdyU%2FIfr4xi1pHrTRwBj3uw4WjQeBA8XFCgTRXVU9sfRmKdgE7zO7pbOTHiaf9IElWAISyn1ZUM1ut0nH9808xb9dQ%2FRMQuofgMy9sPjVvbb2r%2B9jArNdTADoW9XeoXhGRA8ei0v7hrzn7KSKC1GkORibCc3z5SW%2F%2BEt%2F7TnwoP3diXNm4XWamA7LmnRnkArMUQhYz0XSGZ5vu01%2FuXI83b%2Flk8dw%2FeuiGFIdx5GZ%2FAKZRlRC6%2BKgQfkbP4OQ%2FIhYyMk5zMMrf2ssGOqUBAUs0g2mGbVp7WP3bNZ%2FQajPKmn%2Fdf4%2FuO4pgSEPWufFEs2i5e99%2F8vPhIsjMFMwyzhK0LTCIXumi9jOpbMEoZF5XyAYk%2B%2B0EAfnpQIyG2dxiRWr6h7t6e%2FvwpJRPxnY57G6E8OJUZGghjbq8F0tyznN8pfbYeaTAkurPOfarMFDyIwdEf4h7twWzLz1CRrNyb9billAP3bSuKyVZJj2vrtM4Bg5d&X-Amz-Signature=e827242138b1b2ce3b55337118213ca2efbb75bd1bc3163bc56e01f46113070c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOYE2JK%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIDVC8qWqomz%2FgffvlAbkkDc7Rvf75FDPGx2Z0gFrMlxsAiEA5fI02mI67kh1uN16jChAi4kAyiD9uH2DF2yyuiHV5p4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDeBY64m2ZpbOLtM7SrcA5RArssnq5OMNtLKVNQHgcfk5blBZAR3TWXv42VmAHFjR6cz1HQ10SffQ152mlNdyQky62ycCVqTpxj733u3Zkb6MhSFXRBk1oWnfVnPt9O0ot8q0QgS4iZdOJKOkHk6edfmHstp5NGU4qxkkpAmLqDZX%2BpaiKlECx%2FFinZaPqaMS%2BnLhbIActuI8qvSXriu5jYiZt6dsPpohy%2BGpies%2FpMx3o%2F%2FB3IpW541w7mq7O%2FusweVQSFK7NTlCt%2BYQLhX0OP4%2Fq79Vu8FKt7jxrZ8%2B5ZMG1JRg4NHFe99vF%2FwJfi0XAnzR5wSVBubEUykE07JJkaClYV1jWrLNREpdqDCyrL7TSujBEIn4ys7mlgbwHnBWCFFdL6Gz3QdyU%2FIfr4xi1pHrTRwBj3uw4WjQeBA8XFCgTRXVU9sfRmKdgE7zO7pbOTHiaf9IElWAISyn1ZUM1ut0nH9808xb9dQ%2FRMQuofgMy9sPjVvbb2r%2B9jArNdTADoW9XeoXhGRA8ei0v7hrzn7KSKC1GkORibCc3z5SW%2F%2BEt%2F7TnwoP3diXNm4XWamA7LmnRnkArMUQhYz0XSGZ5vu01%2FuXI83b%2Flk8dw%2FeuiGFIdx5GZ%2FAKZRlRC6%2BKgQfkbP4OQ%2FIhYyMk5zMMrf2ssGOqUBAUs0g2mGbVp7WP3bNZ%2FQajPKmn%2Fdf4%2FuO4pgSEPWufFEs2i5e99%2F8vPhIsjMFMwyzhK0LTCIXumi9jOpbMEoZF5XyAYk%2B%2B0EAfnpQIyG2dxiRWr6h7t6e%2FvwpJRPxnY57G6E8OJUZGghjbq8F0tyznN8pfbYeaTAkurPOfarMFDyIwdEf4h7twWzLz1CRrNyb9billAP3bSuKyVZJj2vrtM4Bg5d&X-Amz-Signature=a01dddbc092762a1bc8974fdd0de1a7315929bbcad4bd7d871abe480578bfb2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FOTB4MA%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCwqMNjp4J%2FGqn0ZjANMwnBPiMZlrd5EfhuUNrb5X2wZwIhAID5OrM%2FQddyq%2BcY4Zdsu8quRyIcdZQzBj7bAePIScVJKv8DCDUQABoMNjM3NDIzMTgzODA1IgziPbRpV%2F37jQLw%2FEoq3ANkctypLTkwBQWbBdky8DRjYLkBHQ4VyY33TZz5hQ9cT0qAstxfJl2gdslT2B3ooowCRa2%2FKcombo6yR8oxS10TCgzUQPywhNPiqxMuHS3AJF1vSS9phwZofZbJN0iMhn7hmwzO6TOQWsAJKHkLTc37BZiHJPocOKLSCHlb3kGbVYEmDcmprrDFMAfaqyTPbHTIykA0A8wfXbgGtyCY82RQaFt33ItK%2BDrjVElOGGWG%2BF0G96HZ7MkCVru%2FleaRyMsekg8d3mjhoo%2BFaw%2F6VkoGeBYmVvvJm0qhDiM4F1ai%2Fg83TK65VAN11gWy7fy26hMPmfsxvenTVZPRGrNm3%2BngLDkw3TaU7eWCK15lGUlcj5zMEWgdTaF1Gg3W6cN5GkzJjC71AtqNvfgRYus7Y3ff8CxUEPi%2FpEIpnZ7IvXRMtGFzTslsAhoNuu8M8dDA6%2FZtX0Wji0jYfqdrRuUiNM2Csg2mB4oTVghSTZgdRy5xuyOFJ3GdoGoeFjnv7zMzn%2B85gMrlDotPYVUfUbfwXKgtzQ%2Fdh960EzutL2IRZ0z0FG2BP5LLFJ7y5K2hwiePJEgTO3nJBDA%2F0Y%2BZa72RSdq1eAeEzsEITitrzEsEWQlHtwLFPaPFO9vcEHD%2BOzC5v9vLBjqkAaotu5mj0lDSy7aLJMdoEGh97TLRnKRzhor7M91G7v2qAZ4AAaQcjs8B0yE0IMrQO0rkk8hQwbR863pTUzHr%2BTM2wluet40BfAzsneWpTgtgBdgWYh8fuT%2F0bttvfNr0yp%2BO3Ht6leAeKwyyuUywE0qSCK3BKJDlzsit3l3FxLR72nfwxNr%2FS7DJS4%2Fo%2FNjB6JZjdQhj%2F5a69Ote8BE2IbzUD36L&X-Amz-Signature=8ddb84ad5368b5a4734c6a6eba0a9aed200023cbd9056637a81af0decd29e6a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FOTB4MA%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCwqMNjp4J%2FGqn0ZjANMwnBPiMZlrd5EfhuUNrb5X2wZwIhAID5OrM%2FQddyq%2BcY4Zdsu8quRyIcdZQzBj7bAePIScVJKv8DCDUQABoMNjM3NDIzMTgzODA1IgziPbRpV%2F37jQLw%2FEoq3ANkctypLTkwBQWbBdky8DRjYLkBHQ4VyY33TZz5hQ9cT0qAstxfJl2gdslT2B3ooowCRa2%2FKcombo6yR8oxS10TCgzUQPywhNPiqxMuHS3AJF1vSS9phwZofZbJN0iMhn7hmwzO6TOQWsAJKHkLTc37BZiHJPocOKLSCHlb3kGbVYEmDcmprrDFMAfaqyTPbHTIykA0A8wfXbgGtyCY82RQaFt33ItK%2BDrjVElOGGWG%2BF0G96HZ7MkCVru%2FleaRyMsekg8d3mjhoo%2BFaw%2F6VkoGeBYmVvvJm0qhDiM4F1ai%2Fg83TK65VAN11gWy7fy26hMPmfsxvenTVZPRGrNm3%2BngLDkw3TaU7eWCK15lGUlcj5zMEWgdTaF1Gg3W6cN5GkzJjC71AtqNvfgRYus7Y3ff8CxUEPi%2FpEIpnZ7IvXRMtGFzTslsAhoNuu8M8dDA6%2FZtX0Wji0jYfqdrRuUiNM2Csg2mB4oTVghSTZgdRy5xuyOFJ3GdoGoeFjnv7zMzn%2B85gMrlDotPYVUfUbfwXKgtzQ%2Fdh960EzutL2IRZ0z0FG2BP5LLFJ7y5K2hwiePJEgTO3nJBDA%2F0Y%2BZa72RSdq1eAeEzsEITitrzEsEWQlHtwLFPaPFO9vcEHD%2BOzC5v9vLBjqkAaotu5mj0lDSy7aLJMdoEGh97TLRnKRzhor7M91G7v2qAZ4AAaQcjs8B0yE0IMrQO0rkk8hQwbR863pTUzHr%2BTM2wluet40BfAzsneWpTgtgBdgWYh8fuT%2F0bttvfNr0yp%2BO3Ht6leAeKwyyuUywE0qSCK3BKJDlzsit3l3FxLR72nfwxNr%2FS7DJS4%2Fo%2FNjB6JZjdQhj%2F5a69Ote8BE2IbzUD36L&X-Amz-Signature=de94fa22d57422e1072f8ea15ab992e41674bd106cbe23199a8495707eb67a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRG2PHD4%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC8g6Tdg8wNrv3i17XzaISFQqeeIqCzAnOL9RjjByTdJAIhALEy44pXicavuXVnOymHD2%2B7gsI6I0aCAu%2FPz6wnrZWCKv8DCDQQABoMNjM3NDIzMTgzODA1IgxnSkwiRB0D3%2Fgx6oEq3AM2DVuHwhCmWz4ZfrHt5JBnejlw8W21asjkKXAujW%2Fyjz1kSEI%2BdByDPKkVRmmiyF0pz4NKlmNk94kQlqhT4X94GTjkspgHAeTsxGjsnCbboghTxi2be5j6erzqMn2ju0qFKAONiUFz4k5rv49zD15NAqVKkuDGRdD7eGIx4YiUN%2BCzI2K8sapvux%2BZtj81pTLp4ZqBFSP%2BapapnNUCl%2FEcJdqFBj4ErQXUBPAEB7SdhvR1G%2B5dHFy0coaXyWx4HJTj5olp74VXz3Vzu2Amjs9C0NlszvVYGzMAKA8rZbWNWdczTOyNfiLTHx8uWo0wBHv72cqOiBC5GrmBMvmlP%2BSPYVmmEJ5IdFXoWGDNBs%2FPmf2aZ3oVRfwVStVBrkcO8%2F%2BKSnT8LGAUmS1wRjbxLkDYzeDbSzohZwOcLjaA83ztRX7aDPgbPMuTdKVArBTAdNNGG9RbpgwPupL6ym29NDgJNT87NUdpCZoLljfLJpkuLOf05JHcSr3K4QlUBOcZ0nZys%2BlMaRbrxE6bEyt0zH4H45kxuhgl1OqEjqG%2BI2xlehaHkq9K8Gm5%2FKBeoKNB%2B8Nfu2FoQpARtBh0vMTgVOHJ7QHGMM3VDU3uRBYqwDZql6HzC%2BilepKGCJL8VjDrutvLBjqkASr5O2zRQAejDVKKu%2FmdHWQHZIk8heeG1ZVMVw9ZtjbCb8gCv0zBor4TRXkYalE2NVeyOPeuW6qI8TT3fiTUb4TJKBHp0Nt7PDzyd5yDxZIb568ehKtzh0iP2MygVtB22Lq2suaeviAM9SyyVmiZeJWZcv%2B5GTRg5kdeMkawVOVaUMx6%2FyuUuoYUwDx5qtdDMOQ%2B%2F%2FOa3zjm4zyoR06K9UH1%2BseT&X-Amz-Signature=832cafa7bd6f2e259a0b6eaf3ae9d76712cb86b9a46ea6ae38f8dbaf5cf0292f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRG2PHD4%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC8g6Tdg8wNrv3i17XzaISFQqeeIqCzAnOL9RjjByTdJAIhALEy44pXicavuXVnOymHD2%2B7gsI6I0aCAu%2FPz6wnrZWCKv8DCDQQABoMNjM3NDIzMTgzODA1IgxnSkwiRB0D3%2Fgx6oEq3AM2DVuHwhCmWz4ZfrHt5JBnejlw8W21asjkKXAujW%2Fyjz1kSEI%2BdByDPKkVRmmiyF0pz4NKlmNk94kQlqhT4X94GTjkspgHAeTsxGjsnCbboghTxi2be5j6erzqMn2ju0qFKAONiUFz4k5rv49zD15NAqVKkuDGRdD7eGIx4YiUN%2BCzI2K8sapvux%2BZtj81pTLp4ZqBFSP%2BapapnNUCl%2FEcJdqFBj4ErQXUBPAEB7SdhvR1G%2B5dHFy0coaXyWx4HJTj5olp74VXz3Vzu2Amjs9C0NlszvVYGzMAKA8rZbWNWdczTOyNfiLTHx8uWo0wBHv72cqOiBC5GrmBMvmlP%2BSPYVmmEJ5IdFXoWGDNBs%2FPmf2aZ3oVRfwVStVBrkcO8%2F%2BKSnT8LGAUmS1wRjbxLkDYzeDbSzohZwOcLjaA83ztRX7aDPgbPMuTdKVArBTAdNNGG9RbpgwPupL6ym29NDgJNT87NUdpCZoLljfLJpkuLOf05JHcSr3K4QlUBOcZ0nZys%2BlMaRbrxE6bEyt0zH4H45kxuhgl1OqEjqG%2BI2xlehaHkq9K8Gm5%2FKBeoKNB%2B8Nfu2FoQpARtBh0vMTgVOHJ7QHGMM3VDU3uRBYqwDZql6HzC%2BilepKGCJL8VjDrutvLBjqkASr5O2zRQAejDVKKu%2FmdHWQHZIk8heeG1ZVMVw9ZtjbCb8gCv0zBor4TRXkYalE2NVeyOPeuW6qI8TT3fiTUb4TJKBHp0Nt7PDzyd5yDxZIb568ehKtzh0iP2MygVtB22Lq2suaeviAM9SyyVmiZeJWZcv%2B5GTRg5kdeMkawVOVaUMx6%2FyuUuoYUwDx5qtdDMOQ%2B%2F%2FOa3zjm4zyoR06K9UH1%2BseT&X-Amz-Signature=406e4dd824c6aaa6001a7fa8fe382b5fe6c93ba4af307199a515a70cc1428f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRG2PHD4%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC8g6Tdg8wNrv3i17XzaISFQqeeIqCzAnOL9RjjByTdJAIhALEy44pXicavuXVnOymHD2%2B7gsI6I0aCAu%2FPz6wnrZWCKv8DCDQQABoMNjM3NDIzMTgzODA1IgxnSkwiRB0D3%2Fgx6oEq3AM2DVuHwhCmWz4ZfrHt5JBnejlw8W21asjkKXAujW%2Fyjz1kSEI%2BdByDPKkVRmmiyF0pz4NKlmNk94kQlqhT4X94GTjkspgHAeTsxGjsnCbboghTxi2be5j6erzqMn2ju0qFKAONiUFz4k5rv49zD15NAqVKkuDGRdD7eGIx4YiUN%2BCzI2K8sapvux%2BZtj81pTLp4ZqBFSP%2BapapnNUCl%2FEcJdqFBj4ErQXUBPAEB7SdhvR1G%2B5dHFy0coaXyWx4HJTj5olp74VXz3Vzu2Amjs9C0NlszvVYGzMAKA8rZbWNWdczTOyNfiLTHx8uWo0wBHv72cqOiBC5GrmBMvmlP%2BSPYVmmEJ5IdFXoWGDNBs%2FPmf2aZ3oVRfwVStVBrkcO8%2F%2BKSnT8LGAUmS1wRjbxLkDYzeDbSzohZwOcLjaA83ztRX7aDPgbPMuTdKVArBTAdNNGG9RbpgwPupL6ym29NDgJNT87NUdpCZoLljfLJpkuLOf05JHcSr3K4QlUBOcZ0nZys%2BlMaRbrxE6bEyt0zH4H45kxuhgl1OqEjqG%2BI2xlehaHkq9K8Gm5%2FKBeoKNB%2B8Nfu2FoQpARtBh0vMTgVOHJ7QHGMM3VDU3uRBYqwDZql6HzC%2BilepKGCJL8VjDrutvLBjqkASr5O2zRQAejDVKKu%2FmdHWQHZIk8heeG1ZVMVw9ZtjbCb8gCv0zBor4TRXkYalE2NVeyOPeuW6qI8TT3fiTUb4TJKBHp0Nt7PDzyd5yDxZIb568ehKtzh0iP2MygVtB22Lq2suaeviAM9SyyVmiZeJWZcv%2B5GTRg5kdeMkawVOVaUMx6%2FyuUuoYUwDx5qtdDMOQ%2B%2F%2FOa3zjm4zyoR06K9UH1%2BseT&X-Amz-Signature=fc9eb814b0702c537678f7e9b8f023437539c7a0eb4c84761ae48cc91a1e2ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRG2PHD4%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC8g6Tdg8wNrv3i17XzaISFQqeeIqCzAnOL9RjjByTdJAIhALEy44pXicavuXVnOymHD2%2B7gsI6I0aCAu%2FPz6wnrZWCKv8DCDQQABoMNjM3NDIzMTgzODA1IgxnSkwiRB0D3%2Fgx6oEq3AM2DVuHwhCmWz4ZfrHt5JBnejlw8W21asjkKXAujW%2Fyjz1kSEI%2BdByDPKkVRmmiyF0pz4NKlmNk94kQlqhT4X94GTjkspgHAeTsxGjsnCbboghTxi2be5j6erzqMn2ju0qFKAONiUFz4k5rv49zD15NAqVKkuDGRdD7eGIx4YiUN%2BCzI2K8sapvux%2BZtj81pTLp4ZqBFSP%2BapapnNUCl%2FEcJdqFBj4ErQXUBPAEB7SdhvR1G%2B5dHFy0coaXyWx4HJTj5olp74VXz3Vzu2Amjs9C0NlszvVYGzMAKA8rZbWNWdczTOyNfiLTHx8uWo0wBHv72cqOiBC5GrmBMvmlP%2BSPYVmmEJ5IdFXoWGDNBs%2FPmf2aZ3oVRfwVStVBrkcO8%2F%2BKSnT8LGAUmS1wRjbxLkDYzeDbSzohZwOcLjaA83ztRX7aDPgbPMuTdKVArBTAdNNGG9RbpgwPupL6ym29NDgJNT87NUdpCZoLljfLJpkuLOf05JHcSr3K4QlUBOcZ0nZys%2BlMaRbrxE6bEyt0zH4H45kxuhgl1OqEjqG%2BI2xlehaHkq9K8Gm5%2FKBeoKNB%2B8Nfu2FoQpARtBh0vMTgVOHJ7QHGMM3VDU3uRBYqwDZql6HzC%2BilepKGCJL8VjDrutvLBjqkASr5O2zRQAejDVKKu%2FmdHWQHZIk8heeG1ZVMVw9ZtjbCb8gCv0zBor4TRXkYalE2NVeyOPeuW6qI8TT3fiTUb4TJKBHp0Nt7PDzyd5yDxZIb568ehKtzh0iP2MygVtB22Lq2suaeviAM9SyyVmiZeJWZcv%2B5GTRg5kdeMkawVOVaUMx6%2FyuUuoYUwDx5qtdDMOQ%2B%2F%2FOa3zjm4zyoR06K9UH1%2BseT&X-Amz-Signature=faad001fd56bcb7defeea41249a218712121ce169558d9611cf44b906414e6d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRG2PHD4%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQC8g6Tdg8wNrv3i17XzaISFQqeeIqCzAnOL9RjjByTdJAIhALEy44pXicavuXVnOymHD2%2B7gsI6I0aCAu%2FPz6wnrZWCKv8DCDQQABoMNjM3NDIzMTgzODA1IgxnSkwiRB0D3%2Fgx6oEq3AM2DVuHwhCmWz4ZfrHt5JBnejlw8W21asjkKXAujW%2Fyjz1kSEI%2BdByDPKkVRmmiyF0pz4NKlmNk94kQlqhT4X94GTjkspgHAeTsxGjsnCbboghTxi2be5j6erzqMn2ju0qFKAONiUFz4k5rv49zD15NAqVKkuDGRdD7eGIx4YiUN%2BCzI2K8sapvux%2BZtj81pTLp4ZqBFSP%2BapapnNUCl%2FEcJdqFBj4ErQXUBPAEB7SdhvR1G%2B5dHFy0coaXyWx4HJTj5olp74VXz3Vzu2Amjs9C0NlszvVYGzMAKA8rZbWNWdczTOyNfiLTHx8uWo0wBHv72cqOiBC5GrmBMvmlP%2BSPYVmmEJ5IdFXoWGDNBs%2FPmf2aZ3oVRfwVStVBrkcO8%2F%2BKSnT8LGAUmS1wRjbxLkDYzeDbSzohZwOcLjaA83ztRX7aDPgbPMuTdKVArBTAdNNGG9RbpgwPupL6ym29NDgJNT87NUdpCZoLljfLJpkuLOf05JHcSr3K4QlUBOcZ0nZys%2BlMaRbrxE6bEyt0zH4H45kxuhgl1OqEjqG%2BI2xlehaHkq9K8Gm5%2FKBeoKNB%2B8Nfu2FoQpARtBh0vMTgVOHJ7QHGMM3VDU3uRBYqwDZql6HzC%2BilepKGCJL8VjDrutvLBjqkASr5O2zRQAejDVKKu%2FmdHWQHZIk8heeG1ZVMVw9ZtjbCb8gCv0zBor4TRXkYalE2NVeyOPeuW6qI8TT3fiTUb4TJKBHp0Nt7PDzyd5yDxZIb568ehKtzh0iP2MygVtB22Lq2suaeviAM9SyyVmiZeJWZcv%2B5GTRg5kdeMkawVOVaUMx6%2FyuUuoYUwDx5qtdDMOQ%2B%2F%2FOa3zjm4zyoR06K9UH1%2BseT&X-Amz-Signature=082156d76902f43b1b7ac9d31907957348327b052da941b267a32612e4287e61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLIZJGI%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T042754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIC3NBEaVQ7yN2G8TMKk95TBwdwJZgiLjDp4SkURDPHlpAiBliJzheo4I9YD2SlRV5adXgSG6U53JsQT766YFSMR5uyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMXx7VCw6vu5B1iF78KtwDTIySR7%2BQeWdUJlXNSz5j22JZkFcaYSrhUgZjKuhYNZUy4u%2B3lxVtEeaDWMvKWlPF%2B9828iTbbg2ZvRg%2F8vkclDTRR%2B7mnHe6RlM9IJ3eAJZPJLkkZoMYra8yAhmx5xBF20sCBWJnvXHyQ%2BnIkJf9pSnkk9Lwolv4D8aeMbP8u6kMeFXMrQLodOxLm3ZSmHIOvbtfanHiEgcjQ0JyzqB5vy4bSVo3xrLgKdQyXgIYni0CJdTdF2uKpj9%2Fm7JHiDXvn%2FcPZQiE2ILwaDwLpsrWkcrsAGidfWDUDWEbfnGIUE4sI4f%2Fr02fie6Vrow9%2Bbq%2Fn%2FSRotoc5GNpbYPHxKjLJvycXsvRGWXxNqVo5zMRdH77qL1k6QtdLXwvjAW5yhVepBoB2HQ0zjFkw7KXQ2rKtod9inoXO%2FIX8C7QrdgfCkOiz%2B6NkHu7VbU0g2aqIo7vOyKkoo0Zx87fbfCJoUUJ2z5pouaCUP38tN0eY0lznxy8oZ4HuoaCFECWkngCgL0Q8kIeboalxHoXBabgCPHTyugvQ6gnV3EwZ218MrVOxsvFwun33vTSBMf0P%2FSbm2N5OT47DL%2FDl0crkZFP08ou6V%2BXX6Ba9O%2FS5QGF9fk%2B%2FDbrjnwmtwyvEp4mNbww28TbywY6pgGEyBATCw%2FVMe0FCmyd8bbKwqunlhJLIctWGnf8e2AzF8LegWrh83ud4WQ2C0WWHQBmfqNJG7FqDy9B0cXIUlwioMe4z6tEUBxT4sG3%2F5WMR4dVD5bDfzn01yB%2BhsYrNR65DLOpW%2FchGxPCn1r6mTfgsffZvcxPb43yBumGgBimzrCrs4xvUKiqTaZzW6tKPzVuO3RFJupPUQuMqPhnNpzTv4Ic5D8U&X-Amz-Signature=b0da39abcb9aa1091b9077652a4e3d6083a44da32c65753ba8ffa54765b3d820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

