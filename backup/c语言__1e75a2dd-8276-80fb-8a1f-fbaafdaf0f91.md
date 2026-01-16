
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEMGBV4B%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCDT8y7BBJGRUp2pl9gb7sdpxk6WtYwJbTjaXIYZ9ehYQIhAJPzngF9dqmZhir18eDpk3pQvNy%2Fa00MHJogddY5l6zIKv8DCEUQABoMNjM3NDIzMTgzODA1IgyegqZIkRRN1%2Fpo4v0q3APELVZDtRl3rRY%2B%2F2yIT0n8KnH%2BYsYph6OqhSvc8bWNxbOza6jABKUKJ5ncawKHH19nxC2GE0x6IWOLjExcIXsQaD6tYAY2KZ5YNUjwYGbq8bPhUiCHdRj%2FQAL5%2Fop6fQJbgy6RDetiScZ5VV%2BJ%2F%2BBLXGjZIijwe90NVDCRbzxF1KrAsXxAECUkPk5ntYLXcNwfngEOl702CzkaGNo4yFXydz4OPKhY%2B18NitMVfc1Jkf%2F8tWgj3%2BfEWZoF8Z7X96Zk7flFRrEKIZdEv7gDX%2Flq42OtPkjCIskmLZTTWd1fEWdV1d0hr20%2FMhByzYCmZalYx%2B%2F9%2Bu28I%2B1l77MzdM3hyWN2%2FdA0HGYVwgqedsOWEfCDRYscTnFTju%2FcIUshT%2Bt2cw41oPohhtVx26xnqq0RcbqChPD5kQXhKcVSNiBh6noUeTS2rsUKCkhp7246%2B1xyL76u2ad0QW3pw4xdrsbDnkSOnTKDsp151PxhjPQ4cbz353LymIRBO9zl0q3i%2Fli3nHtsOiEHlo32uFRaXU98ddzzrumzy4vmlbB9SlmGb8bA8yPX08BjLg0iL8c7pbm0sHbs4P6FVpAKn6Ix5ckQ%2B2CmKbbSLuUwzxguxOhuYC3S%2BvD18GoEJyZvnTCO7qbLBjqkAWflpdnSEnro%2FvqEBJyr52RrmBqMykHo41Lssh3kICJzYqCCtQsR67gY0OOK3lTZrgj%2FfQY6xyoCBh24QkH76kEaV2V09Q%2Bhu%2BgLOqvXPmIv%2FiW%2BRvxiMmJw1p9fP21pebmvHD4gw%2FsRUMlCmJNRDjkZPGdLGGjo8bdk%2BgNwhfQypB7dUn4100HViDd7Hv92C3UJVQUajWU3qNidVrAo9hIrKMB6&X-Amz-Signature=538171bef9a0baf97c216ab7f30dedc499120d9b1fa5c10f97beb32450f66f7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2HWIWO5%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDXSWezgWD4OY9Mg9H6gfssBIo0bGrOxHwHflic8qnrIAiArarLpm44D27PULvtbnRmMa4qcwHDTS%2Fb5KxzW7PCOzir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMd642%2BfDa3bv5oe%2BBKtwDgJ3z27rcpnafGdnz%2FMO2GmbpaeXFZK8kwtBXakQ%2BA8POoxnNJesPGSHlbkxM1fzz2wNOF4lRCdey8Od%2B7cgxj0ibeY6R76PVz4CTmNRFf3GGmgsz9hESnZhLj4wlxtRiGoHqGnyT3yxCFoweUH9qokfcvFnSo8qEfeuvBI2FF8KdN9xQMvdYMBXRRgjaR%2Fm%2BowlBZAT%2B6PwTGTt29hZaH8I1vJo8maRZkBdGBxbU%2FFQigZm26fgNSC5KZ2v8BMzlqs2otSDG9Wjkgw2FTRS21IQKfUx0RtygoCunWjqd56LCk%2BYfR6bfWdWnaR0S11y%2F1JjOFxlBPeE9RfNXaMRuM9N8%2F2SOa%2FiO8EPv0yyV2UuIOEKP7oO2NgtcNwSzLJ6DO0EUbAbJzYnDwyu%2BY%2FdV6MAe2JPsRTyXXgDGO5pMmETv9LKCdxQSgelvF0vinpY1nHdbvnNCXZ3hW6EX4vK1dgkikKQYixTortQ2q4nhR08bMwCxHpZNVm6cse7hOCQgrOIjxp50q%2BgnfGugpqZcq230UI1WRLi8EuLaDV%2BhlCdiSuv9NAvewZECT6d6NkOe1snbQ%2F1%2BOUxJhZsJcl31H%2FTfEGtETRKWXQKRXnb%2FyHZ1GWhzwbvbsFNxs78wjO2mywY6pgHmvcQd1J0w6gEIfmHQk4S4NOZkob3H22ftg1fj224GzpRBv1sMzd5%2F8TGGI2I%2BWhYX9fWvQhGRYj9g%2FzzD3LpYE%2BtsJyvzHALmzCJUmrdq8kB7jbQ3pRFqCzJ1H%2FNbzRzGHMgourV05em5ADk7scQ48r3N0E2CzJpPHvK4fve607ELaQKkRrsnaCG2BxOSGR%2B8FYUDsAwMU9I%2Bv%2FDYqcWUILtx6FRE&X-Amz-Signature=a60d233355718185bea6530554406b8b4a23f2282059d3daef798127661d862c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2HWIWO5%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDXSWezgWD4OY9Mg9H6gfssBIo0bGrOxHwHflic8qnrIAiArarLpm44D27PULvtbnRmMa4qcwHDTS%2Fb5KxzW7PCOzir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMd642%2BfDa3bv5oe%2BBKtwDgJ3z27rcpnafGdnz%2FMO2GmbpaeXFZK8kwtBXakQ%2BA8POoxnNJesPGSHlbkxM1fzz2wNOF4lRCdey8Od%2B7cgxj0ibeY6R76PVz4CTmNRFf3GGmgsz9hESnZhLj4wlxtRiGoHqGnyT3yxCFoweUH9qokfcvFnSo8qEfeuvBI2FF8KdN9xQMvdYMBXRRgjaR%2Fm%2BowlBZAT%2B6PwTGTt29hZaH8I1vJo8maRZkBdGBxbU%2FFQigZm26fgNSC5KZ2v8BMzlqs2otSDG9Wjkgw2FTRS21IQKfUx0RtygoCunWjqd56LCk%2BYfR6bfWdWnaR0S11y%2F1JjOFxlBPeE9RfNXaMRuM9N8%2F2SOa%2FiO8EPv0yyV2UuIOEKP7oO2NgtcNwSzLJ6DO0EUbAbJzYnDwyu%2BY%2FdV6MAe2JPsRTyXXgDGO5pMmETv9LKCdxQSgelvF0vinpY1nHdbvnNCXZ3hW6EX4vK1dgkikKQYixTortQ2q4nhR08bMwCxHpZNVm6cse7hOCQgrOIjxp50q%2BgnfGugpqZcq230UI1WRLi8EuLaDV%2BhlCdiSuv9NAvewZECT6d6NkOe1snbQ%2F1%2BOUxJhZsJcl31H%2FTfEGtETRKWXQKRXnb%2FyHZ1GWhzwbvbsFNxs78wjO2mywY6pgHmvcQd1J0w6gEIfmHQk4S4NOZkob3H22ftg1fj224GzpRBv1sMzd5%2F8TGGI2I%2BWhYX9fWvQhGRYj9g%2FzzD3LpYE%2BtsJyvzHALmzCJUmrdq8kB7jbQ3pRFqCzJ1H%2FNbzRzGHMgourV05em5ADk7scQ48r3N0E2CzJpPHvK4fve607ELaQKkRrsnaCG2BxOSGR%2B8FYUDsAwMU9I%2Bv%2FDYqcWUILtx6FRE&X-Amz-Signature=a8e38c775e6e197752fce003c2d9613f30c3c485ac02290eb71ed3d77f3e2f81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPIDYUY%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGjHyJUFraatE2%2FmNdfblLAWvEf2aQ%2Ba5c0Du1e%2FM%2F1MAiEAwcPiOkOHI2Uo8EDH%2FQEAUrb2HcmgeFCNIWoTVIixrtcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEsFxWpWhhbXeb1w3CrcAxCHbS9H%2BMLYIqtNEkeLTLeQ%2FAB6BT6qVEKBvRa%2FFHIRL%2B4ZIaGOswu9TczZEfSddZS0lL8H1ZoIiarOOJjKhrHlHeV3nYIXIyGM6SEhnLe8gVZw4qoS%2FaytqlaGbbUC4NB5N2k%2FRrkLEqO3y7M%2BnXUzACBSyLCrsbeXfp4sv06VsoBbnElKgOFudS5ZPbO8b2m2ologKrFGAco%2BeJdHm6xv9oVzERUzps6lz7Q8R%2FaHbF2A7hJMf0z13JTYwknsNBFW1vWTM9Vj3fBOjLuz7QqBD7f%2FWJkk0xL8O3eBSUtm%2BbpLXm9Vqle6iAdzn7lZY%2BRC%2BlT%2BcokPCzgDonzBNXtsok0qTmyP8TCRqbm8DWUEBT71XS2p6X2IiNztIh8lomOymlaQFsl6ZHTNkNkXOh6uG5kqTOHbV9ZUq8QmYIjpXQuwHUK1kNdy5ApNb%2F3QwN6iEN%2B8eocJWRa%2F5FrNXKvvsBTPT5TsjFlK%2FoeyE54EcVoBkKBOy3yT0MRDpZIgXUqOpU%2FZXaZPwVwU5bM%2FgaamQndV7rQ8kWv87Ho7ZzkzsJVya0a%2BclYHCYMLPsd2%2By6rwzJPjaMg0%2BpvQ9SUayEYU48cLa944NurYJGTD2zRYz6jNB7qFtnZa8BwMLDupssGOqUBLBurz%2B3cXhgOOOk%2FxEX2wY0bDHnOd8kBpn%2FmaHcyqCOR2rf4AOTFFdtu4ysHkf%2BA0sYiYFZaUJgLo064Hduvl4iglsFww9tMiOBzyL79nMCTGjfiYmjd7JnSX6LuzViagT%2FIlW4sEt7clexRgrJkYvTTPcmgdfXNJlbCkCFxTV78zKduwxBPoxksTEQXL2tY90VtaGj0zrPbSZjsyilfyg19CXlD&X-Amz-Signature=bbb4d25524385c53b99a3802de09f9b3f7c92b470e014bff4e4e5743dce7aae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPIDYUY%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGjHyJUFraatE2%2FmNdfblLAWvEf2aQ%2Ba5c0Du1e%2FM%2F1MAiEAwcPiOkOHI2Uo8EDH%2FQEAUrb2HcmgeFCNIWoTVIixrtcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEsFxWpWhhbXeb1w3CrcAxCHbS9H%2BMLYIqtNEkeLTLeQ%2FAB6BT6qVEKBvRa%2FFHIRL%2B4ZIaGOswu9TczZEfSddZS0lL8H1ZoIiarOOJjKhrHlHeV3nYIXIyGM6SEhnLe8gVZw4qoS%2FaytqlaGbbUC4NB5N2k%2FRrkLEqO3y7M%2BnXUzACBSyLCrsbeXfp4sv06VsoBbnElKgOFudS5ZPbO8b2m2ologKrFGAco%2BeJdHm6xv9oVzERUzps6lz7Q8R%2FaHbF2A7hJMf0z13JTYwknsNBFW1vWTM9Vj3fBOjLuz7QqBD7f%2FWJkk0xL8O3eBSUtm%2BbpLXm9Vqle6iAdzn7lZY%2BRC%2BlT%2BcokPCzgDonzBNXtsok0qTmyP8TCRqbm8DWUEBT71XS2p6X2IiNztIh8lomOymlaQFsl6ZHTNkNkXOh6uG5kqTOHbV9ZUq8QmYIjpXQuwHUK1kNdy5ApNb%2F3QwN6iEN%2B8eocJWRa%2F5FrNXKvvsBTPT5TsjFlK%2FoeyE54EcVoBkKBOy3yT0MRDpZIgXUqOpU%2FZXaZPwVwU5bM%2FgaamQndV7rQ8kWv87Ho7ZzkzsJVya0a%2BclYHCYMLPsd2%2By6rwzJPjaMg0%2BpvQ9SUayEYU48cLa944NurYJGTD2zRYz6jNB7qFtnZa8BwMLDupssGOqUBLBurz%2B3cXhgOOOk%2FxEX2wY0bDHnOd8kBpn%2FmaHcyqCOR2rf4AOTFFdtu4ysHkf%2BA0sYiYFZaUJgLo064Hduvl4iglsFww9tMiOBzyL79nMCTGjfiYmjd7JnSX6LuzViagT%2FIlW4sEt7clexRgrJkYvTTPcmgdfXNJlbCkCFxTV78zKduwxBPoxksTEQXL2tY90VtaGj0zrPbSZjsyilfyg19CXlD&X-Amz-Signature=4ec47117a0f05b3d1ea789948b73530e07b2a4793b3874c1029f7be24840c8a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPIDYUY%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGjHyJUFraatE2%2FmNdfblLAWvEf2aQ%2Ba5c0Du1e%2FM%2F1MAiEAwcPiOkOHI2Uo8EDH%2FQEAUrb2HcmgeFCNIWoTVIixrtcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEsFxWpWhhbXeb1w3CrcAxCHbS9H%2BMLYIqtNEkeLTLeQ%2FAB6BT6qVEKBvRa%2FFHIRL%2B4ZIaGOswu9TczZEfSddZS0lL8H1ZoIiarOOJjKhrHlHeV3nYIXIyGM6SEhnLe8gVZw4qoS%2FaytqlaGbbUC4NB5N2k%2FRrkLEqO3y7M%2BnXUzACBSyLCrsbeXfp4sv06VsoBbnElKgOFudS5ZPbO8b2m2ologKrFGAco%2BeJdHm6xv9oVzERUzps6lz7Q8R%2FaHbF2A7hJMf0z13JTYwknsNBFW1vWTM9Vj3fBOjLuz7QqBD7f%2FWJkk0xL8O3eBSUtm%2BbpLXm9Vqle6iAdzn7lZY%2BRC%2BlT%2BcokPCzgDonzBNXtsok0qTmyP8TCRqbm8DWUEBT71XS2p6X2IiNztIh8lomOymlaQFsl6ZHTNkNkXOh6uG5kqTOHbV9ZUq8QmYIjpXQuwHUK1kNdy5ApNb%2F3QwN6iEN%2B8eocJWRa%2F5FrNXKvvsBTPT5TsjFlK%2FoeyE54EcVoBkKBOy3yT0MRDpZIgXUqOpU%2FZXaZPwVwU5bM%2FgaamQndV7rQ8kWv87Ho7ZzkzsJVya0a%2BclYHCYMLPsd2%2By6rwzJPjaMg0%2BpvQ9SUayEYU48cLa944NurYJGTD2zRYz6jNB7qFtnZa8BwMLDupssGOqUBLBurz%2B3cXhgOOOk%2FxEX2wY0bDHnOd8kBpn%2FmaHcyqCOR2rf4AOTFFdtu4ysHkf%2BA0sYiYFZaUJgLo064Hduvl4iglsFww9tMiOBzyL79nMCTGjfiYmjd7JnSX6LuzViagT%2FIlW4sEt7clexRgrJkYvTTPcmgdfXNJlbCkCFxTV78zKduwxBPoxksTEQXL2tY90VtaGj0zrPbSZjsyilfyg19CXlD&X-Amz-Signature=da9734a49d3fda9b361280bd83987ec414ab1775ddbfe31e9f0812bbfbdcff2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPIDYUY%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGjHyJUFraatE2%2FmNdfblLAWvEf2aQ%2Ba5c0Du1e%2FM%2F1MAiEAwcPiOkOHI2Uo8EDH%2FQEAUrb2HcmgeFCNIWoTVIixrtcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEsFxWpWhhbXeb1w3CrcAxCHbS9H%2BMLYIqtNEkeLTLeQ%2FAB6BT6qVEKBvRa%2FFHIRL%2B4ZIaGOswu9TczZEfSddZS0lL8H1ZoIiarOOJjKhrHlHeV3nYIXIyGM6SEhnLe8gVZw4qoS%2FaytqlaGbbUC4NB5N2k%2FRrkLEqO3y7M%2BnXUzACBSyLCrsbeXfp4sv06VsoBbnElKgOFudS5ZPbO8b2m2ologKrFGAco%2BeJdHm6xv9oVzERUzps6lz7Q8R%2FaHbF2A7hJMf0z13JTYwknsNBFW1vWTM9Vj3fBOjLuz7QqBD7f%2FWJkk0xL8O3eBSUtm%2BbpLXm9Vqle6iAdzn7lZY%2BRC%2BlT%2BcokPCzgDonzBNXtsok0qTmyP8TCRqbm8DWUEBT71XS2p6X2IiNztIh8lomOymlaQFsl6ZHTNkNkXOh6uG5kqTOHbV9ZUq8QmYIjpXQuwHUK1kNdy5ApNb%2F3QwN6iEN%2B8eocJWRa%2F5FrNXKvvsBTPT5TsjFlK%2FoeyE54EcVoBkKBOy3yT0MRDpZIgXUqOpU%2FZXaZPwVwU5bM%2FgaamQndV7rQ8kWv87Ho7ZzkzsJVya0a%2BclYHCYMLPsd2%2By6rwzJPjaMg0%2BpvQ9SUayEYU48cLa944NurYJGTD2zRYz6jNB7qFtnZa8BwMLDupssGOqUBLBurz%2B3cXhgOOOk%2FxEX2wY0bDHnOd8kBpn%2FmaHcyqCOR2rf4AOTFFdtu4ysHkf%2BA0sYiYFZaUJgLo064Hduvl4iglsFww9tMiOBzyL79nMCTGjfiYmjd7JnSX6LuzViagT%2FIlW4sEt7clexRgrJkYvTTPcmgdfXNJlbCkCFxTV78zKduwxBPoxksTEQXL2tY90VtaGj0zrPbSZjsyilfyg19CXlD&X-Amz-Signature=ff5fc21e4fbfd855687a46844fff8c194ea8d12637c03eb46af1a9065858f94f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPIDYUY%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGjHyJUFraatE2%2FmNdfblLAWvEf2aQ%2Ba5c0Du1e%2FM%2F1MAiEAwcPiOkOHI2Uo8EDH%2FQEAUrb2HcmgeFCNIWoTVIixrtcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEsFxWpWhhbXeb1w3CrcAxCHbS9H%2BMLYIqtNEkeLTLeQ%2FAB6BT6qVEKBvRa%2FFHIRL%2B4ZIaGOswu9TczZEfSddZS0lL8H1ZoIiarOOJjKhrHlHeV3nYIXIyGM6SEhnLe8gVZw4qoS%2FaytqlaGbbUC4NB5N2k%2FRrkLEqO3y7M%2BnXUzACBSyLCrsbeXfp4sv06VsoBbnElKgOFudS5ZPbO8b2m2ologKrFGAco%2BeJdHm6xv9oVzERUzps6lz7Q8R%2FaHbF2A7hJMf0z13JTYwknsNBFW1vWTM9Vj3fBOjLuz7QqBD7f%2FWJkk0xL8O3eBSUtm%2BbpLXm9Vqle6iAdzn7lZY%2BRC%2BlT%2BcokPCzgDonzBNXtsok0qTmyP8TCRqbm8DWUEBT71XS2p6X2IiNztIh8lomOymlaQFsl6ZHTNkNkXOh6uG5kqTOHbV9ZUq8QmYIjpXQuwHUK1kNdy5ApNb%2F3QwN6iEN%2B8eocJWRa%2F5FrNXKvvsBTPT5TsjFlK%2FoeyE54EcVoBkKBOy3yT0MRDpZIgXUqOpU%2FZXaZPwVwU5bM%2FgaamQndV7rQ8kWv87Ho7ZzkzsJVya0a%2BclYHCYMLPsd2%2By6rwzJPjaMg0%2BpvQ9SUayEYU48cLa944NurYJGTD2zRYz6jNB7qFtnZa8BwMLDupssGOqUBLBurz%2B3cXhgOOOk%2FxEX2wY0bDHnOd8kBpn%2FmaHcyqCOR2rf4AOTFFdtu4ysHkf%2BA0sYiYFZaUJgLo064Hduvl4iglsFww9tMiOBzyL79nMCTGjfiYmjd7JnSX6LuzViagT%2FIlW4sEt7clexRgrJkYvTTPcmgdfXNJlbCkCFxTV78zKduwxBPoxksTEQXL2tY90VtaGj0zrPbSZjsyilfyg19CXlD&X-Amz-Signature=d696ba5037be159a022f9012ec4097d762c9d55c8045568ee5cb9aa2016cccee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPIDYUY%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGjHyJUFraatE2%2FmNdfblLAWvEf2aQ%2Ba5c0Du1e%2FM%2F1MAiEAwcPiOkOHI2Uo8EDH%2FQEAUrb2HcmgeFCNIWoTVIixrtcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEsFxWpWhhbXeb1w3CrcAxCHbS9H%2BMLYIqtNEkeLTLeQ%2FAB6BT6qVEKBvRa%2FFHIRL%2B4ZIaGOswu9TczZEfSddZS0lL8H1ZoIiarOOJjKhrHlHeV3nYIXIyGM6SEhnLe8gVZw4qoS%2FaytqlaGbbUC4NB5N2k%2FRrkLEqO3y7M%2BnXUzACBSyLCrsbeXfp4sv06VsoBbnElKgOFudS5ZPbO8b2m2ologKrFGAco%2BeJdHm6xv9oVzERUzps6lz7Q8R%2FaHbF2A7hJMf0z13JTYwknsNBFW1vWTM9Vj3fBOjLuz7QqBD7f%2FWJkk0xL8O3eBSUtm%2BbpLXm9Vqle6iAdzn7lZY%2BRC%2BlT%2BcokPCzgDonzBNXtsok0qTmyP8TCRqbm8DWUEBT71XS2p6X2IiNztIh8lomOymlaQFsl6ZHTNkNkXOh6uG5kqTOHbV9ZUq8QmYIjpXQuwHUK1kNdy5ApNb%2F3QwN6iEN%2B8eocJWRa%2F5FrNXKvvsBTPT5TsjFlK%2FoeyE54EcVoBkKBOy3yT0MRDpZIgXUqOpU%2FZXaZPwVwU5bM%2FgaamQndV7rQ8kWv87Ho7ZzkzsJVya0a%2BclYHCYMLPsd2%2By6rwzJPjaMg0%2BpvQ9SUayEYU48cLa944NurYJGTD2zRYz6jNB7qFtnZa8BwMLDupssGOqUBLBurz%2B3cXhgOOOk%2FxEX2wY0bDHnOd8kBpn%2FmaHcyqCOR2rf4AOTFFdtu4ysHkf%2BA0sYiYFZaUJgLo064Hduvl4iglsFww9tMiOBzyL79nMCTGjfiYmjd7JnSX6LuzViagT%2FIlW4sEt7clexRgrJkYvTTPcmgdfXNJlbCkCFxTV78zKduwxBPoxksTEQXL2tY90VtaGj0zrPbSZjsyilfyg19CXlD&X-Amz-Signature=c73cc4cb97be023c296929877de153eb99b59a8868a0aa7fdc1e3b933701132a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPIDYUY%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGjHyJUFraatE2%2FmNdfblLAWvEf2aQ%2Ba5c0Du1e%2FM%2F1MAiEAwcPiOkOHI2Uo8EDH%2FQEAUrb2HcmgeFCNIWoTVIixrtcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEsFxWpWhhbXeb1w3CrcAxCHbS9H%2BMLYIqtNEkeLTLeQ%2FAB6BT6qVEKBvRa%2FFHIRL%2B4ZIaGOswu9TczZEfSddZS0lL8H1ZoIiarOOJjKhrHlHeV3nYIXIyGM6SEhnLe8gVZw4qoS%2FaytqlaGbbUC4NB5N2k%2FRrkLEqO3y7M%2BnXUzACBSyLCrsbeXfp4sv06VsoBbnElKgOFudS5ZPbO8b2m2ologKrFGAco%2BeJdHm6xv9oVzERUzps6lz7Q8R%2FaHbF2A7hJMf0z13JTYwknsNBFW1vWTM9Vj3fBOjLuz7QqBD7f%2FWJkk0xL8O3eBSUtm%2BbpLXm9Vqle6iAdzn7lZY%2BRC%2BlT%2BcokPCzgDonzBNXtsok0qTmyP8TCRqbm8DWUEBT71XS2p6X2IiNztIh8lomOymlaQFsl6ZHTNkNkXOh6uG5kqTOHbV9ZUq8QmYIjpXQuwHUK1kNdy5ApNb%2F3QwN6iEN%2B8eocJWRa%2F5FrNXKvvsBTPT5TsjFlK%2FoeyE54EcVoBkKBOy3yT0MRDpZIgXUqOpU%2FZXaZPwVwU5bM%2FgaamQndV7rQ8kWv87Ho7ZzkzsJVya0a%2BclYHCYMLPsd2%2By6rwzJPjaMg0%2BpvQ9SUayEYU48cLa944NurYJGTD2zRYz6jNB7qFtnZa8BwMLDupssGOqUBLBurz%2B3cXhgOOOk%2FxEX2wY0bDHnOd8kBpn%2FmaHcyqCOR2rf4AOTFFdtu4ysHkf%2BA0sYiYFZaUJgLo064Hduvl4iglsFww9tMiOBzyL79nMCTGjfiYmjd7JnSX6LuzViagT%2FIlW4sEt7clexRgrJkYvTTPcmgdfXNJlbCkCFxTV78zKduwxBPoxksTEQXL2tY90VtaGj0zrPbSZjsyilfyg19CXlD&X-Amz-Signature=b1301b44d2eb2363dc0cbbe98b06898509f1567c1dae48a9da1985987b29fb6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ULUZJ3%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIENZ0jcbKfXjDhd8a%2FA1XPyDvZ0J2ETBTMtH0qI0IXljAiEAt%2B9HsXbK8C6wiMVXfo50C%2B3zA5Vi%2BVCFkg5mQiL5hQQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDIO2Wl6HWlyjxY3e2SrcA0bp0B9EvNRbz3oOh1ekJ4bTy2c8H%2FwBTH%2FW0Yi2OD0ksmzC83nWveSLNxCo1AyRd4vqwb9FbYpJeZIDIjb29UoMI22olV%2BHzP0CdXlq29giE8dVf5YxVU%2B521CQ57RnGugXH2jRjYJMUT4%2BKRfPF4ztH8o%2B%2FCKOVtiUyWd1wL5%2BLHY%2BXJpGJbcBo%2BjNYrCVEMfF0HJ8jpZDoRGiRLmX0phUGVWOmux6VS0jEDX%2B3%2BG%2FiH%2FyoAgKa%2FdllgaLZB1wWTCLQa1ghqBIgUFaqksYjKmNLDkfiPD%2FXzHCzyVMUzn1Rm7vbZcVr%2B6aqH7X5s7lEKvRMNNKtQIyV%2BPl7Hf487fS0%2BP8a2InZsKiNIQOe8PYRJvMdxH6OnsSzyG1lD18miRkZdtTRcBhx1ulSbfWmilQoPLu0nUE9zJsAU4zzRf0pBLSAmsvi7T%2B28gHG2t5p86wZV0iUbV%2FLwu8OiwNOqBoCeTsKtUJRoGf1Fwy07mPkjjlX76yFAe0THDdd9jAbLlX1qfYwPAJk0ZGv5dCMTluuM0V8egZ%2Fhg%2Fao%2BqyB%2BLIB9DakH8UZZiowG6SUCZfq13SaPD5DMjMvrbEn46aRbVB4dJCak%2BDLySNkO6pzuLyroPxuHdaGO0ohSKMMTtpssGOqUBK7nUmsdhl8n2BnEVinBx4it1%2BgYpnANAGOrbZxqbbuRDWIRfgmwA59ZY6X24ygE2nBnbgrG6GxjRw9xEiSMHiQUZX5vmgj7TRXWbldcOnPXSfNBGJ4JGygPRKgUNnuQMWrKefpgBYVEXPSYRRV6WTQqmR7L8VvM7GTJTzk2hm%2F9%2F4H1cW5EYcrz%2Fjac6VW4MAQpPtRMc%2FoKnHqnUtjRT1cr4CWvm&X-Amz-Signature=b4ecbb8c7729d622be2b65fdea39c3a7eb28e6e66aa41d11c8dae37077986573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ULUZJ3%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIENZ0jcbKfXjDhd8a%2FA1XPyDvZ0J2ETBTMtH0qI0IXljAiEAt%2B9HsXbK8C6wiMVXfo50C%2B3zA5Vi%2BVCFkg5mQiL5hQQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDIO2Wl6HWlyjxY3e2SrcA0bp0B9EvNRbz3oOh1ekJ4bTy2c8H%2FwBTH%2FW0Yi2OD0ksmzC83nWveSLNxCo1AyRd4vqwb9FbYpJeZIDIjb29UoMI22olV%2BHzP0CdXlq29giE8dVf5YxVU%2B521CQ57RnGugXH2jRjYJMUT4%2BKRfPF4ztH8o%2B%2FCKOVtiUyWd1wL5%2BLHY%2BXJpGJbcBo%2BjNYrCVEMfF0HJ8jpZDoRGiRLmX0phUGVWOmux6VS0jEDX%2B3%2BG%2FiH%2FyoAgKa%2FdllgaLZB1wWTCLQa1ghqBIgUFaqksYjKmNLDkfiPD%2FXzHCzyVMUzn1Rm7vbZcVr%2B6aqH7X5s7lEKvRMNNKtQIyV%2BPl7Hf487fS0%2BP8a2InZsKiNIQOe8PYRJvMdxH6OnsSzyG1lD18miRkZdtTRcBhx1ulSbfWmilQoPLu0nUE9zJsAU4zzRf0pBLSAmsvi7T%2B28gHG2t5p86wZV0iUbV%2FLwu8OiwNOqBoCeTsKtUJRoGf1Fwy07mPkjjlX76yFAe0THDdd9jAbLlX1qfYwPAJk0ZGv5dCMTluuM0V8egZ%2Fhg%2Fao%2BqyB%2BLIB9DakH8UZZiowG6SUCZfq13SaPD5DMjMvrbEn46aRbVB4dJCak%2BDLySNkO6pzuLyroPxuHdaGO0ohSKMMTtpssGOqUBK7nUmsdhl8n2BnEVinBx4it1%2BgYpnANAGOrbZxqbbuRDWIRfgmwA59ZY6X24ygE2nBnbgrG6GxjRw9xEiSMHiQUZX5vmgj7TRXWbldcOnPXSfNBGJ4JGygPRKgUNnuQMWrKefpgBYVEXPSYRRV6WTQqmR7L8VvM7GTJTzk2hm%2F9%2F4H1cW5EYcrz%2Fjac6VW4MAQpPtRMc%2FoKnHqnUtjRT1cr4CWvm&X-Amz-Signature=c853ee81f8cba198bce6a643a83f7608f8ecc21704837133aeb2445216500c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ULUZJ3%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIENZ0jcbKfXjDhd8a%2FA1XPyDvZ0J2ETBTMtH0qI0IXljAiEAt%2B9HsXbK8C6wiMVXfo50C%2B3zA5Vi%2BVCFkg5mQiL5hQQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDIO2Wl6HWlyjxY3e2SrcA0bp0B9EvNRbz3oOh1ekJ4bTy2c8H%2FwBTH%2FW0Yi2OD0ksmzC83nWveSLNxCo1AyRd4vqwb9FbYpJeZIDIjb29UoMI22olV%2BHzP0CdXlq29giE8dVf5YxVU%2B521CQ57RnGugXH2jRjYJMUT4%2BKRfPF4ztH8o%2B%2FCKOVtiUyWd1wL5%2BLHY%2BXJpGJbcBo%2BjNYrCVEMfF0HJ8jpZDoRGiRLmX0phUGVWOmux6VS0jEDX%2B3%2BG%2FiH%2FyoAgKa%2FdllgaLZB1wWTCLQa1ghqBIgUFaqksYjKmNLDkfiPD%2FXzHCzyVMUzn1Rm7vbZcVr%2B6aqH7X5s7lEKvRMNNKtQIyV%2BPl7Hf487fS0%2BP8a2InZsKiNIQOe8PYRJvMdxH6OnsSzyG1lD18miRkZdtTRcBhx1ulSbfWmilQoPLu0nUE9zJsAU4zzRf0pBLSAmsvi7T%2B28gHG2t5p86wZV0iUbV%2FLwu8OiwNOqBoCeTsKtUJRoGf1Fwy07mPkjjlX76yFAe0THDdd9jAbLlX1qfYwPAJk0ZGv5dCMTluuM0V8egZ%2Fhg%2Fao%2BqyB%2BLIB9DakH8UZZiowG6SUCZfq13SaPD5DMjMvrbEn46aRbVB4dJCak%2BDLySNkO6pzuLyroPxuHdaGO0ohSKMMTtpssGOqUBK7nUmsdhl8n2BnEVinBx4it1%2BgYpnANAGOrbZxqbbuRDWIRfgmwA59ZY6X24ygE2nBnbgrG6GxjRw9xEiSMHiQUZX5vmgj7TRXWbldcOnPXSfNBGJ4JGygPRKgUNnuQMWrKefpgBYVEXPSYRRV6WTQqmR7L8VvM7GTJTzk2hm%2F9%2F4H1cW5EYcrz%2Fjac6VW4MAQpPtRMc%2FoKnHqnUtjRT1cr4CWvm&X-Amz-Signature=c02467f3ce8cc637cf06e6a6f6a47786a3cfdf826d0fb0ca3e96adf3110b7b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ULUZJ3%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIENZ0jcbKfXjDhd8a%2FA1XPyDvZ0J2ETBTMtH0qI0IXljAiEAt%2B9HsXbK8C6wiMVXfo50C%2B3zA5Vi%2BVCFkg5mQiL5hQQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDIO2Wl6HWlyjxY3e2SrcA0bp0B9EvNRbz3oOh1ekJ4bTy2c8H%2FwBTH%2FW0Yi2OD0ksmzC83nWveSLNxCo1AyRd4vqwb9FbYpJeZIDIjb29UoMI22olV%2BHzP0CdXlq29giE8dVf5YxVU%2B521CQ57RnGugXH2jRjYJMUT4%2BKRfPF4ztH8o%2B%2FCKOVtiUyWd1wL5%2BLHY%2BXJpGJbcBo%2BjNYrCVEMfF0HJ8jpZDoRGiRLmX0phUGVWOmux6VS0jEDX%2B3%2BG%2FiH%2FyoAgKa%2FdllgaLZB1wWTCLQa1ghqBIgUFaqksYjKmNLDkfiPD%2FXzHCzyVMUzn1Rm7vbZcVr%2B6aqH7X5s7lEKvRMNNKtQIyV%2BPl7Hf487fS0%2BP8a2InZsKiNIQOe8PYRJvMdxH6OnsSzyG1lD18miRkZdtTRcBhx1ulSbfWmilQoPLu0nUE9zJsAU4zzRf0pBLSAmsvi7T%2B28gHG2t5p86wZV0iUbV%2FLwu8OiwNOqBoCeTsKtUJRoGf1Fwy07mPkjjlX76yFAe0THDdd9jAbLlX1qfYwPAJk0ZGv5dCMTluuM0V8egZ%2Fhg%2Fao%2BqyB%2BLIB9DakH8UZZiowG6SUCZfq13SaPD5DMjMvrbEn46aRbVB4dJCak%2BDLySNkO6pzuLyroPxuHdaGO0ohSKMMTtpssGOqUBK7nUmsdhl8n2BnEVinBx4it1%2BgYpnANAGOrbZxqbbuRDWIRfgmwA59ZY6X24ygE2nBnbgrG6GxjRw9xEiSMHiQUZX5vmgj7TRXWbldcOnPXSfNBGJ4JGygPRKgUNnuQMWrKefpgBYVEXPSYRRV6WTQqmR7L8VvM7GTJTzk2hm%2F9%2F4H1cW5EYcrz%2Fjac6VW4MAQpPtRMc%2FoKnHqnUtjRT1cr4CWvm&X-Amz-Signature=e84a807ecebe69b26604f15320ab1d6275c4f793dbb540e482f134520ece00ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ULUZJ3%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIENZ0jcbKfXjDhd8a%2FA1XPyDvZ0J2ETBTMtH0qI0IXljAiEAt%2B9HsXbK8C6wiMVXfo50C%2B3zA5Vi%2BVCFkg5mQiL5hQQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDIO2Wl6HWlyjxY3e2SrcA0bp0B9EvNRbz3oOh1ekJ4bTy2c8H%2FwBTH%2FW0Yi2OD0ksmzC83nWveSLNxCo1AyRd4vqwb9FbYpJeZIDIjb29UoMI22olV%2BHzP0CdXlq29giE8dVf5YxVU%2B521CQ57RnGugXH2jRjYJMUT4%2BKRfPF4ztH8o%2B%2FCKOVtiUyWd1wL5%2BLHY%2BXJpGJbcBo%2BjNYrCVEMfF0HJ8jpZDoRGiRLmX0phUGVWOmux6VS0jEDX%2B3%2BG%2FiH%2FyoAgKa%2FdllgaLZB1wWTCLQa1ghqBIgUFaqksYjKmNLDkfiPD%2FXzHCzyVMUzn1Rm7vbZcVr%2B6aqH7X5s7lEKvRMNNKtQIyV%2BPl7Hf487fS0%2BP8a2InZsKiNIQOe8PYRJvMdxH6OnsSzyG1lD18miRkZdtTRcBhx1ulSbfWmilQoPLu0nUE9zJsAU4zzRf0pBLSAmsvi7T%2B28gHG2t5p86wZV0iUbV%2FLwu8OiwNOqBoCeTsKtUJRoGf1Fwy07mPkjjlX76yFAe0THDdd9jAbLlX1qfYwPAJk0ZGv5dCMTluuM0V8egZ%2Fhg%2Fao%2BqyB%2BLIB9DakH8UZZiowG6SUCZfq13SaPD5DMjMvrbEn46aRbVB4dJCak%2BDLySNkO6pzuLyroPxuHdaGO0ohSKMMTtpssGOqUBK7nUmsdhl8n2BnEVinBx4it1%2BgYpnANAGOrbZxqbbuRDWIRfgmwA59ZY6X24ygE2nBnbgrG6GxjRw9xEiSMHiQUZX5vmgj7TRXWbldcOnPXSfNBGJ4JGygPRKgUNnuQMWrKefpgBYVEXPSYRRV6WTQqmR7L8VvM7GTJTzk2hm%2F9%2F4H1cW5EYcrz%2Fjac6VW4MAQpPtRMc%2FoKnHqnUtjRT1cr4CWvm&X-Amz-Signature=c73479b4640a67a1dbb4c07b1e03780e5aa00557064e424f3be9161dd785241b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBQNZO4E%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDPAFh%2B9IpyKIwYPNjSuIETR7Fs9SMQM83i1Up8RAUPWgIhALU3ldQrx4wIa45xeRPOPX12VLhnu%2BL6kgJlCrAMWfdzKv8DCEUQABoMNjM3NDIzMTgzODA1IgweYqlbHk4I%2BIgn9HIq3ANVLG7A4%2FrXnUxy%2BBHw19nCyjwEhxQvpHo%2FUc0LfNrWV%2FRYhHbRPdbhtCOuwqBFKFTWv%2F91PgQRAL7qU%2F4renkCAXqu30mBTekUmxMSSzetvsAHH2LAETZObqdnhUKrW%2BhLAmqYsQVNx8918%2FxMaNfBIz201lcP1PQRfaZsKID2hEe3YZ7QUA2vS273npkzGMaxk5YNC7B51zqCY5tTC8E6PpBbajRqjFxnmrK1ZLcBedB1oNJxdqMa%2FEeGUNOh5pi0eLjxEZ%2BRbSi999EcjJHpQQzGJfDhaUfyLpvLjDGnsAwi3LZAPymUdy0icaRXbaM%2F9AWXznbWKJ7AihKoO%2FZO5pR7Eg3uCOwJ3WqWwuYBFfcO3IpoFpOGbO4wA7eThyyOP1rMr%2Fd0KyLTOjQBpbOV7ZJhV3DaBFm27tQpWuM2siAXzQv5bTr2QUzBzFB9dYF5VvOiM7G5zwQAYIbtTyH9Ps6YK77FW8MgXhZia0AfZmbSKbM6SdGjx5vXGZ9AMJlThos0lA0UTH6b0OkEl7W5Kp60rIhpuDbrt2aeXmWFtW7KZYiMiO6r4LKyWN8SeFb7tpPdNufvpxR2OqtOPTtIqFJOi27hPVdCDCfrUeW6EPugp%2FrBj4kKYc3t0zCv7qbLBjqkATuni4YO9L%2Bxpg%2Fb2Uj6NE%2F9PumrV6PMLIVKtWEomoTIev4yvxNGEdyO4kTDx%2F2qNjxT5Kp8EVVbDNj2piVqH%2BB0YD2sEjzULjumjeHat5aYQCpp3iUvYMyuO4gM0QP2jKBuv5O954k65R%2FIxLAfZa6neKWSqOaDlxSv8cfHaz9BF5ObivKSHSMUXL5VWi9E7PvrhD6exDz8yjig0tHot4oNW86Z&X-Amz-Signature=3cb5c57c1b2856fe662cc38b4fcff8c540d6051f97badeef7521e334ecc17242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBQNZO4E%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDPAFh%2B9IpyKIwYPNjSuIETR7Fs9SMQM83i1Up8RAUPWgIhALU3ldQrx4wIa45xeRPOPX12VLhnu%2BL6kgJlCrAMWfdzKv8DCEUQABoMNjM3NDIzMTgzODA1IgweYqlbHk4I%2BIgn9HIq3ANVLG7A4%2FrXnUxy%2BBHw19nCyjwEhxQvpHo%2FUc0LfNrWV%2FRYhHbRPdbhtCOuwqBFKFTWv%2F91PgQRAL7qU%2F4renkCAXqu30mBTekUmxMSSzetvsAHH2LAETZObqdnhUKrW%2BhLAmqYsQVNx8918%2FxMaNfBIz201lcP1PQRfaZsKID2hEe3YZ7QUA2vS273npkzGMaxk5YNC7B51zqCY5tTC8E6PpBbajRqjFxnmrK1ZLcBedB1oNJxdqMa%2FEeGUNOh5pi0eLjxEZ%2BRbSi999EcjJHpQQzGJfDhaUfyLpvLjDGnsAwi3LZAPymUdy0icaRXbaM%2F9AWXznbWKJ7AihKoO%2FZO5pR7Eg3uCOwJ3WqWwuYBFfcO3IpoFpOGbO4wA7eThyyOP1rMr%2Fd0KyLTOjQBpbOV7ZJhV3DaBFm27tQpWuM2siAXzQv5bTr2QUzBzFB9dYF5VvOiM7G5zwQAYIbtTyH9Ps6YK77FW8MgXhZia0AfZmbSKbM6SdGjx5vXGZ9AMJlThos0lA0UTH6b0OkEl7W5Kp60rIhpuDbrt2aeXmWFtW7KZYiMiO6r4LKyWN8SeFb7tpPdNufvpxR2OqtOPTtIqFJOi27hPVdCDCfrUeW6EPugp%2FrBj4kKYc3t0zCv7qbLBjqkATuni4YO9L%2Bxpg%2Fb2Uj6NE%2F9PumrV6PMLIVKtWEomoTIev4yvxNGEdyO4kTDx%2F2qNjxT5Kp8EVVbDNj2piVqH%2BB0YD2sEjzULjumjeHat5aYQCpp3iUvYMyuO4gM0QP2jKBuv5O954k65R%2FIxLAfZa6neKWSqOaDlxSv8cfHaz9BF5ObivKSHSMUXL5VWi9E7PvrhD6exDz8yjig0tHot4oNW86Z&X-Amz-Signature=a7295c19fd46ec8c4ea22bdb08f01daaa3ce3ae26f10c25f56f301dfafc2e396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBQNZO4E%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDPAFh%2B9IpyKIwYPNjSuIETR7Fs9SMQM83i1Up8RAUPWgIhALU3ldQrx4wIa45xeRPOPX12VLhnu%2BL6kgJlCrAMWfdzKv8DCEUQABoMNjM3NDIzMTgzODA1IgweYqlbHk4I%2BIgn9HIq3ANVLG7A4%2FrXnUxy%2BBHw19nCyjwEhxQvpHo%2FUc0LfNrWV%2FRYhHbRPdbhtCOuwqBFKFTWv%2F91PgQRAL7qU%2F4renkCAXqu30mBTekUmxMSSzetvsAHH2LAETZObqdnhUKrW%2BhLAmqYsQVNx8918%2FxMaNfBIz201lcP1PQRfaZsKID2hEe3YZ7QUA2vS273npkzGMaxk5YNC7B51zqCY5tTC8E6PpBbajRqjFxnmrK1ZLcBedB1oNJxdqMa%2FEeGUNOh5pi0eLjxEZ%2BRbSi999EcjJHpQQzGJfDhaUfyLpvLjDGnsAwi3LZAPymUdy0icaRXbaM%2F9AWXznbWKJ7AihKoO%2FZO5pR7Eg3uCOwJ3WqWwuYBFfcO3IpoFpOGbO4wA7eThyyOP1rMr%2Fd0KyLTOjQBpbOV7ZJhV3DaBFm27tQpWuM2siAXzQv5bTr2QUzBzFB9dYF5VvOiM7G5zwQAYIbtTyH9Ps6YK77FW8MgXhZia0AfZmbSKbM6SdGjx5vXGZ9AMJlThos0lA0UTH6b0OkEl7W5Kp60rIhpuDbrt2aeXmWFtW7KZYiMiO6r4LKyWN8SeFb7tpPdNufvpxR2OqtOPTtIqFJOi27hPVdCDCfrUeW6EPugp%2FrBj4kKYc3t0zCv7qbLBjqkATuni4YO9L%2Bxpg%2Fb2Uj6NE%2F9PumrV6PMLIVKtWEomoTIev4yvxNGEdyO4kTDx%2F2qNjxT5Kp8EVVbDNj2piVqH%2BB0YD2sEjzULjumjeHat5aYQCpp3iUvYMyuO4gM0QP2jKBuv5O954k65R%2FIxLAfZa6neKWSqOaDlxSv8cfHaz9BF5ObivKSHSMUXL5VWi9E7PvrhD6exDz8yjig0tHot4oNW86Z&X-Amz-Signature=6fdcfae14df090854e946456e39adc6a3e822abeee7b139b85d8144b71333a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6DJ7YVQ%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQKZODW7%2BC79s6jwgm5X4PbKO%2BjpjJEFuopiiwNTeMQAIhALHsn7W9qK0tRjap%2F6foodojh3%2Fj3OzfUicD%2FLvGWLAFKv8DCEUQABoMNjM3NDIzMTgzODA1IgzcpWlTqJu4IdzFu%2FUq3APJQHpLfd0BCtH%2FPsVLO5zUaijQYwzBM8knlf9o6fxIzEICdVYX8Uq%2FoLEKtYbHzpv4gRBO0t0OWShZ3YUlUPY3XUyN3JkYSif9Hy3FQl4RZ%2BS4w6BNaKzWfg45uJpL7A7noD7leWly4vxhI9T7qSX6YSmgt%2FJHr468gmxd5wZL4kSaziXbw9kIddrBRE8%2BI5WdLBfTZLSps9YoHkMwEztejgmzAEkh40TTplyrPUAd%2FHQb68twpzdIwMPKfcvYAhPxunZ8sJ8lHuMOvNvgFadqXvx2ogmnbjtXwnqTyEA9glyWOY8zVxLLzv4y%2BjyfSbbZnVDKK6iBLIK%2B7xVoD3pFIfudREq%2FmUFkIMdaO7SvFb6dtDJgehCUsGdMREA%2Fg9yGELdSzk%2FN8r8j%2FHwR%2FXfwZqTjUZr3ve32qFkFHsrUGm9SzSj5%2Frr6kF5ynWw6XiR2PhHKKW30BG7aWdBaQKT9qk2pg2LfNLs1zP5eHGga4wP4FXPFKxtJBDEickHBGV3cuvJQeecG7WClzrgPe%2BnKcQlcxoB%2Bg8sO0eNB%2FwGwonRk%2FFvzUQu3C8SnagLuLPKbklVPaLaurqLZkVtxM4Ss%2BAF2NOaZRdHuErRUmWvSOFcq1VO%2F1dnniQHiZTDM7abLBjqkAdtYTNzlWfqN0ReFBk4QJNjZ%2BecPItKho7mzX4rxRyLCn%2BSivh2e9L1FHlwvPRjyyKMxrjgfkwL1d1HP3Js93dvSpDbPtcFu88nEiUAX0fQ0l%2BfD0Vy5HnuOcy7fvE12sxuo0vHTsZNiO%2BlT79MDX2nRsdNdqU1ARmZghzH6vQv4MCQoMyk7uVhhCu%2F9g51gxgD7ZVDVzX1dAZmBhtu9M56RH3rT&X-Amz-Signature=881915072d65e574bef7c6acd262944d09bfaaf6b0b837ad9daaa213f8ef142a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6DJ7YVQ%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQKZODW7%2BC79s6jwgm5X4PbKO%2BjpjJEFuopiiwNTeMQAIhALHsn7W9qK0tRjap%2F6foodojh3%2Fj3OzfUicD%2FLvGWLAFKv8DCEUQABoMNjM3NDIzMTgzODA1IgzcpWlTqJu4IdzFu%2FUq3APJQHpLfd0BCtH%2FPsVLO5zUaijQYwzBM8knlf9o6fxIzEICdVYX8Uq%2FoLEKtYbHzpv4gRBO0t0OWShZ3YUlUPY3XUyN3JkYSif9Hy3FQl4RZ%2BS4w6BNaKzWfg45uJpL7A7noD7leWly4vxhI9T7qSX6YSmgt%2FJHr468gmxd5wZL4kSaziXbw9kIddrBRE8%2BI5WdLBfTZLSps9YoHkMwEztejgmzAEkh40TTplyrPUAd%2FHQb68twpzdIwMPKfcvYAhPxunZ8sJ8lHuMOvNvgFadqXvx2ogmnbjtXwnqTyEA9glyWOY8zVxLLzv4y%2BjyfSbbZnVDKK6iBLIK%2B7xVoD3pFIfudREq%2FmUFkIMdaO7SvFb6dtDJgehCUsGdMREA%2Fg9yGELdSzk%2FN8r8j%2FHwR%2FXfwZqTjUZr3ve32qFkFHsrUGm9SzSj5%2Frr6kF5ynWw6XiR2PhHKKW30BG7aWdBaQKT9qk2pg2LfNLs1zP5eHGga4wP4FXPFKxtJBDEickHBGV3cuvJQeecG7WClzrgPe%2BnKcQlcxoB%2Bg8sO0eNB%2FwGwonRk%2FFvzUQu3C8SnagLuLPKbklVPaLaurqLZkVtxM4Ss%2BAF2NOaZRdHuErRUmWvSOFcq1VO%2F1dnniQHiZTDM7abLBjqkAdtYTNzlWfqN0ReFBk4QJNjZ%2BecPItKho7mzX4rxRyLCn%2BSivh2e9L1FHlwvPRjyyKMxrjgfkwL1d1HP3Js93dvSpDbPtcFu88nEiUAX0fQ0l%2BfD0Vy5HnuOcy7fvE12sxuo0vHTsZNiO%2BlT79MDX2nRsdNdqU1ARmZghzH6vQv4MCQoMyk7uVhhCu%2F9g51gxgD7ZVDVzX1dAZmBhtu9M56RH3rT&X-Amz-Signature=581b0cfa0f6dd832a89b2f8410f8b2f48ce936567ef42a730d758efcc29871a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZ42TQI%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIG90uY%2B5EUIvHin4wTNxBHd%2B4MmkdxZ0ZCS0%2BflBsCsmAiEA5tRCLD2vpeB9ZaslIx4FnmqERrb8iDT1ZMB77UJcghMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDxrHQ29rCvC%2Bi7C6ircAzmN0xCucs8mW70aSshn8DXs5X2qjv9AKxmqlWAnVxqvhX5BNHGLQiulJDm3spnxny8OtjNBMm4QaaQtvVb7786A1I%2BI596eEUPcITDWczUj%2Ft1iwk0hrmoOiusSOyDR%2FdOysy329UfoB8E2L9hqpgObU6PgZe1TLIyaqQtTWsWUjB5hyRDFaFL9M5RGJarHT6vTkNckNMXNq1KfxPBoIxIhMKew0%2BhPmle0X58sP%2Fq5d2F2GmS%2FnuVOO%2FV%2Bm6XTSw0BthrYrvkpUD4RSX2isVVz1ILfUxom9%2FJPkg8NRWl9TU2bt5bqTL2yEnR95X0zN4GS1LK1y0edrArSlQ6O4m6Es%2Fad3k7s8LjKohHH6VJGsFVw6bdZGbt1x37gBDcuy5h4df%2FsTAQk%2Bk989L54Wi5C%2Fo6SZRt79BBnRO2%2B54my4PMCSJSemu%2BgQGa7S6vDDGEf0JfIhwIjyMU7Dl6cUZdVH7kVaUM74cf8gAacVIpy%2BUwxZ%2FH0Ffqtv%2FYsDaX4oCGknCJbvBKDngtqkrN0T8Z9wwwNXi0LIIrVYXZfA4u75bZwZk8H4Smic%2BSOQVWKc2QKjcFAd5iepk%2BtKxsaUjfL24GWRfS3jtrgYP%2F62VVOTEJT6G9AxAHc%2FCwjMNjtpssGOqUB%2BuVaPkU44Sc1LOA4Ptr4v9qlEBni5Xv8qXdnl0s4gqWnXDbusGc6DCHNsWoG5MjYw4GdVLB4Cmt852w1572mj4Y3ggJDYR0Lgg6o%2F8AXPVdvtX1p3eQMh5SHUKAztdOqv13Ex2%2BKOaOyC3vorqB4XxlETYz9EXNbsuEuyGxMqDMgGFC%2BWyhHjp2OioL428nxfozRjp6emTlC%2B0nDtxcbD3fX%2Fb%2Fq&X-Amz-Signature=909233de9aa8682931941ae05cc3cddd73ba008f738f27377e8dcada08f41ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZ42TQI%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIG90uY%2B5EUIvHin4wTNxBHd%2B4MmkdxZ0ZCS0%2BflBsCsmAiEA5tRCLD2vpeB9ZaslIx4FnmqERrb8iDT1ZMB77UJcghMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDxrHQ29rCvC%2Bi7C6ircAzmN0xCucs8mW70aSshn8DXs5X2qjv9AKxmqlWAnVxqvhX5BNHGLQiulJDm3spnxny8OtjNBMm4QaaQtvVb7786A1I%2BI596eEUPcITDWczUj%2Ft1iwk0hrmoOiusSOyDR%2FdOysy329UfoB8E2L9hqpgObU6PgZe1TLIyaqQtTWsWUjB5hyRDFaFL9M5RGJarHT6vTkNckNMXNq1KfxPBoIxIhMKew0%2BhPmle0X58sP%2Fq5d2F2GmS%2FnuVOO%2FV%2Bm6XTSw0BthrYrvkpUD4RSX2isVVz1ILfUxom9%2FJPkg8NRWl9TU2bt5bqTL2yEnR95X0zN4GS1LK1y0edrArSlQ6O4m6Es%2Fad3k7s8LjKohHH6VJGsFVw6bdZGbt1x37gBDcuy5h4df%2FsTAQk%2Bk989L54Wi5C%2Fo6SZRt79BBnRO2%2B54my4PMCSJSemu%2BgQGa7S6vDDGEf0JfIhwIjyMU7Dl6cUZdVH7kVaUM74cf8gAacVIpy%2BUwxZ%2FH0Ffqtv%2FYsDaX4oCGknCJbvBKDngtqkrN0T8Z9wwwNXi0LIIrVYXZfA4u75bZwZk8H4Smic%2BSOQVWKc2QKjcFAd5iepk%2BtKxsaUjfL24GWRfS3jtrgYP%2F62VVOTEJT6G9AxAHc%2FCwjMNjtpssGOqUB%2BuVaPkU44Sc1LOA4Ptr4v9qlEBni5Xv8qXdnl0s4gqWnXDbusGc6DCHNsWoG5MjYw4GdVLB4Cmt852w1572mj4Y3ggJDYR0Lgg6o%2F8AXPVdvtX1p3eQMh5SHUKAztdOqv13Ex2%2BKOaOyC3vorqB4XxlETYz9EXNbsuEuyGxMqDMgGFC%2BWyhHjp2OioL428nxfozRjp6emTlC%2B0nDtxcbD3fX%2Fb%2Fq&X-Amz-Signature=37c2a244ab83cf4459e4e384e095648dcaf56a71daac114c198a0c3722ed67d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZ42TQI%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIG90uY%2B5EUIvHin4wTNxBHd%2B4MmkdxZ0ZCS0%2BflBsCsmAiEA5tRCLD2vpeB9ZaslIx4FnmqERrb8iDT1ZMB77UJcghMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDxrHQ29rCvC%2Bi7C6ircAzmN0xCucs8mW70aSshn8DXs5X2qjv9AKxmqlWAnVxqvhX5BNHGLQiulJDm3spnxny8OtjNBMm4QaaQtvVb7786A1I%2BI596eEUPcITDWczUj%2Ft1iwk0hrmoOiusSOyDR%2FdOysy329UfoB8E2L9hqpgObU6PgZe1TLIyaqQtTWsWUjB5hyRDFaFL9M5RGJarHT6vTkNckNMXNq1KfxPBoIxIhMKew0%2BhPmle0X58sP%2Fq5d2F2GmS%2FnuVOO%2FV%2Bm6XTSw0BthrYrvkpUD4RSX2isVVz1ILfUxom9%2FJPkg8NRWl9TU2bt5bqTL2yEnR95X0zN4GS1LK1y0edrArSlQ6O4m6Es%2Fad3k7s8LjKohHH6VJGsFVw6bdZGbt1x37gBDcuy5h4df%2FsTAQk%2Bk989L54Wi5C%2Fo6SZRt79BBnRO2%2B54my4PMCSJSemu%2BgQGa7S6vDDGEf0JfIhwIjyMU7Dl6cUZdVH7kVaUM74cf8gAacVIpy%2BUwxZ%2FH0Ffqtv%2FYsDaX4oCGknCJbvBKDngtqkrN0T8Z9wwwNXi0LIIrVYXZfA4u75bZwZk8H4Smic%2BSOQVWKc2QKjcFAd5iepk%2BtKxsaUjfL24GWRfS3jtrgYP%2F62VVOTEJT6G9AxAHc%2FCwjMNjtpssGOqUB%2BuVaPkU44Sc1LOA4Ptr4v9qlEBni5Xv8qXdnl0s4gqWnXDbusGc6DCHNsWoG5MjYw4GdVLB4Cmt852w1572mj4Y3ggJDYR0Lgg6o%2F8AXPVdvtX1p3eQMh5SHUKAztdOqv13Ex2%2BKOaOyC3vorqB4XxlETYz9EXNbsuEuyGxMqDMgGFC%2BWyhHjp2OioL428nxfozRjp6emTlC%2B0nDtxcbD3fX%2Fb%2Fq&X-Amz-Signature=48096f647367b353c7daa81f62e53622c68a0bb674f616cf97aa4d68fb5ffa0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZ42TQI%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIG90uY%2B5EUIvHin4wTNxBHd%2B4MmkdxZ0ZCS0%2BflBsCsmAiEA5tRCLD2vpeB9ZaslIx4FnmqERrb8iDT1ZMB77UJcghMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDxrHQ29rCvC%2Bi7C6ircAzmN0xCucs8mW70aSshn8DXs5X2qjv9AKxmqlWAnVxqvhX5BNHGLQiulJDm3spnxny8OtjNBMm4QaaQtvVb7786A1I%2BI596eEUPcITDWczUj%2Ft1iwk0hrmoOiusSOyDR%2FdOysy329UfoB8E2L9hqpgObU6PgZe1TLIyaqQtTWsWUjB5hyRDFaFL9M5RGJarHT6vTkNckNMXNq1KfxPBoIxIhMKew0%2BhPmle0X58sP%2Fq5d2F2GmS%2FnuVOO%2FV%2Bm6XTSw0BthrYrvkpUD4RSX2isVVz1ILfUxom9%2FJPkg8NRWl9TU2bt5bqTL2yEnR95X0zN4GS1LK1y0edrArSlQ6O4m6Es%2Fad3k7s8LjKohHH6VJGsFVw6bdZGbt1x37gBDcuy5h4df%2FsTAQk%2Bk989L54Wi5C%2Fo6SZRt79BBnRO2%2B54my4PMCSJSemu%2BgQGa7S6vDDGEf0JfIhwIjyMU7Dl6cUZdVH7kVaUM74cf8gAacVIpy%2BUwxZ%2FH0Ffqtv%2FYsDaX4oCGknCJbvBKDngtqkrN0T8Z9wwwNXi0LIIrVYXZfA4u75bZwZk8H4Smic%2BSOQVWKc2QKjcFAd5iepk%2BtKxsaUjfL24GWRfS3jtrgYP%2F62VVOTEJT6G9AxAHc%2FCwjMNjtpssGOqUB%2BuVaPkU44Sc1LOA4Ptr4v9qlEBni5Xv8qXdnl0s4gqWnXDbusGc6DCHNsWoG5MjYw4GdVLB4Cmt852w1572mj4Y3ggJDYR0Lgg6o%2F8AXPVdvtX1p3eQMh5SHUKAztdOqv13Ex2%2BKOaOyC3vorqB4XxlETYz9EXNbsuEuyGxMqDMgGFC%2BWyhHjp2OioL428nxfozRjp6emTlC%2B0nDtxcbD3fX%2Fb%2Fq&X-Amz-Signature=367da03d1deb435cf7cf2ff007b17d32d7013597addfc558a1472c6983254489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLZ42TQI%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIG90uY%2B5EUIvHin4wTNxBHd%2B4MmkdxZ0ZCS0%2BflBsCsmAiEA5tRCLD2vpeB9ZaslIx4FnmqERrb8iDT1ZMB77UJcghMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDxrHQ29rCvC%2Bi7C6ircAzmN0xCucs8mW70aSshn8DXs5X2qjv9AKxmqlWAnVxqvhX5BNHGLQiulJDm3spnxny8OtjNBMm4QaaQtvVb7786A1I%2BI596eEUPcITDWczUj%2Ft1iwk0hrmoOiusSOyDR%2FdOysy329UfoB8E2L9hqpgObU6PgZe1TLIyaqQtTWsWUjB5hyRDFaFL9M5RGJarHT6vTkNckNMXNq1KfxPBoIxIhMKew0%2BhPmle0X58sP%2Fq5d2F2GmS%2FnuVOO%2FV%2Bm6XTSw0BthrYrvkpUD4RSX2isVVz1ILfUxom9%2FJPkg8NRWl9TU2bt5bqTL2yEnR95X0zN4GS1LK1y0edrArSlQ6O4m6Es%2Fad3k7s8LjKohHH6VJGsFVw6bdZGbt1x37gBDcuy5h4df%2FsTAQk%2Bk989L54Wi5C%2Fo6SZRt79BBnRO2%2B54my4PMCSJSemu%2BgQGa7S6vDDGEf0JfIhwIjyMU7Dl6cUZdVH7kVaUM74cf8gAacVIpy%2BUwxZ%2FH0Ffqtv%2FYsDaX4oCGknCJbvBKDngtqkrN0T8Z9wwwNXi0LIIrVYXZfA4u75bZwZk8H4Smic%2BSOQVWKc2QKjcFAd5iepk%2BtKxsaUjfL24GWRfS3jtrgYP%2F62VVOTEJT6G9AxAHc%2FCwjMNjtpssGOqUB%2BuVaPkU44Sc1LOA4Ptr4v9qlEBni5Xv8qXdnl0s4gqWnXDbusGc6DCHNsWoG5MjYw4GdVLB4Cmt852w1572mj4Y3ggJDYR0Lgg6o%2F8AXPVdvtX1p3eQMh5SHUKAztdOqv13Ex2%2BKOaOyC3vorqB4XxlETYz9EXNbsuEuyGxMqDMgGFC%2BWyhHjp2OioL428nxfozRjp6emTlC%2B0nDtxcbD3fX%2Fb%2Fq&X-Amz-Signature=94018b107a0c96313033184111c401bb77e3cdc568ed5368acfadf3c3a415338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTN3LETN%2F20260116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260116T041029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD%2BkPeA%2FQHVintIzqy4oiXxUmOaOMB7ewQ75X6gdB5yhwIhALmwUIvNrff27TAojsnhSGhA5QvlUq%2F2Ql6WIYMi05YXKv8DCEUQABoMNjM3NDIzMTgzODA1IgypVjaNu9ePgnwexVIq3AMmfDhFJw0kaPrIRpnPxBeEHI%2BAwYGNOXJbWVECNZGBVapAmySTxR1%2FoRX5mRRKW3UYMWQscX3kJLLhxlJoEUlyywMp3%2BRbkOO%2Fc3s043HDSritSn5dNEXtP7HBj9AfmXrVRUCTHB%2BEXQ%2FT5LBABr1u%2FfgXWr3Biz8GSATedbFEeVxvqIDnDuSXpOLpeto3nlzJ3txL6HPoHFyKmc4y2445jkMwF5VzOvMqK54QfRE3PJ%2BD31GeLm3wEt9FQKK8EIFBpULKdn0UeF7FOh7%2BXiDZWn0%2FbYwLeSnhX3WyvdkECl%2BKXZp61Vc%2Fyla6B9Y0%2FeVeeVHeuIrNdtT22y9WfCEKxkm0oP3oj%2BLVI73GpJ1wDUgExI5YV967R9W7%2B6i7JpJLrMhgIGdcYsQhkIlxeXPIXY8u%2BXposFnHmnqC099nYhGl1l3KGG4vxWxKJG4jglQV60MyD%2BjF8AnBtDPJQYsuMsfY%2Fbh3fpH7T3pPK%2Bc%2F743P%2FAmw3nSNZebgW4Yz2BlRBnQTraRwnkB4w%2FZSz7aClcrFRI7eo22LBx4IctaFaEncC3wpKLLDZbDJ7lv%2B1vy3%2FgWN2xdq2Mqufdu8PD4n9A3G8EB5NSrUQuTVNiCXLGi%2BN3x3k9zxfTDpSzDU7abLBjqkASRNZsZc%2BYXWq%2Fqw4mS41HcKgnGjPhUPCW5OrRAfVRvZZ2kRtiwc%2B2NR3oOPlFsauCujJNWl1B3Ik%2BXyuR0SFAMPIuhFRYX2Ub6B4Fv%2FZq0EE1WXwa1CIjRkqgg5oLrU2c4y9fiTubExEnDq1Le2YlLrWris5tDEiUpJ2Arwvthl%2FFGSkec9ZSG1RJfZIaPUyW%2BObHNhuQCSXq9IgtA17wGGS%2BC5&X-Amz-Signature=8596b00909566bdfb814fb8460b5dbecc1b3a3646b96142d793fbe091df06c8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

