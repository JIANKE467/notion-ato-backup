
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7KBCOZ%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7nrdtGCNQmxNcBLzsI6aVJMYiNTUscOUN7kLIoSKrkAiEA2H8eVxdFRrZFogwRclQWBitJHTdwmzkFbsdNVEk28i0q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDLb2VXKAdB5fvdbPASrcA%2BitZD6aI4y%2FC9%2BaiH0FgbkL5fFVZzBsF7wI08TEYfTsouUEmQq%2FJz%2F0zFx39lYJN8glp8Y36T7ZTdLZlIbs8eHdMMakDQXn6RpXdX2yMEwvWFOVpaz8CPJmA21pqgejD6DiFifnIwdoKq0swabir07POGQboJxBkfyFlvvDz6ahF4uIPPpasX%2FVw12UB9N1k9515Zc%2FPYkFbZ%2FrEHv5Nnju91sjQRflvadJcKlQ%2BEEev%2BRMlm%2B4aLxiHIBk8DZlC6iEg6UyI2JwQZa%2FRdbV3JY9QUNUZx0szlF3cnW7I%2BJGHY4belZ6Ik3x%2FLlTEgSAKAexetZ8xoeCz8RPrQDDkqGeTkp495%2Fmnogv75jPiQ%2BMfPuY%2Bec60lenNYZ3FeWRkZ6Xp2mHzoBgnXfpSVe9dv6XX2puHim5knAigHZA3XkRT%2B4sHhvKOWuzrAfmHJZCElN%2Bd8%2F8qGW34a2iBon%2F7esRW1D7pc5UzngbP%2BY5x2EObp83CxBluON%2BrW%2FRSwlm3XhLzs6BRkxL8uIijxxMrcUomadguakzqFXO%2Bgu78DwDM04P3EIayZf7NBDYuJphogVWrql4duusNlKCNrqZmgSfcYO1EtJwafeYoZAeMW6htS%2Bm3Qt5LFgo3srJMIaYg8oGOqUBSKDG6V%2B06b%2Fd8u1SCbnavLpD83wAYp0ICqdkTjX5FUVh5j%2FXd%2FQLUZFmZNxlp1kCtTpRK86rXYuwF5ostIkVniiYkGMKfxH4N3sCGGVKsHFrVvYfaCAhtSpq4eV4OH%2BnnIp8pXCOnbu3xmW6ksOrstlJSk9q0WaB0VFTMxZ2Slb%2B%2BTa98aCf2ei7Qu%2FWpD1wcOYm6p5e0QOZ8Wnzk5aYKgBe8ogx&X-Amz-Signature=33172d82de1c83fd8b4e06c5e32ba8ed042477674a3471fef4abafaa84fb2a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XWBEM6%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTVg0dsEwUcpOeb4qMjfQrJBUuwKXAzAXPOJfcsIW7iAiBMVU%2FU%2FCo%2FfW37sZZnhuzuWrZQjneTxqffthYejnanmir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM1QccMHWlVlLaQ41eKtwDc%2BymmKM0KFCEoz56An1UqjwsQoxz4YqHPKcNZA68u6AQadN3hzTMPuQScTyysNfS4J7DIMwhRrR8tPkMxL3QmKV3vTAuPRomVjyb7gy%2Fhn1UPsNiIV%2FBgch%2Fs%2FlOTQNd6lWJrGxN2P3tzL9w01yGvGw1hEFcSbJqfHbvy5GyCTmSKxQRcw48W9DvR9L4vxtNvwN4wvJm1xpaCy5P7XM99mx%2F6jpP9bjdQOgXCONYpzMrGUe5gxLZUj4sRivlaP77Bh2FaFMI8i7wKxavWkhtTgQQO6pxtDDghp3MskAWU33BgjCNJmBfwXKh87%2BOn93vNDnZGE%2FT%2FMT4JJd3HLEVVldEmpG%2Ffv%2BVWr%2Bqe0qnu%2Fct4yGMBVOkMoCZtkxN2QNF9ne%2F58w6AOS6fqogEz%2FZqJZ9PdjgMWD3tU0UZ%2Bhdf7HZp120Ah%2Byorqgcm8DTPAaTt15qkfPfg0AcaP3WKkjFF0LAo5eva5pUBwpAueGzHRKmPcoSfcc6LfuE4oLynJzonCEjb8cWfIjziRF5WrgZ%2FbDd97s80X2mTc0g222%2B%2BbCSn3hdCMh0oJM8Ufj7fNrhLICzZ3wu99bnchX8CRUUlwyavW89t%2FTvU2KDSvc3818T3%2F4e4SVjs8TTZkwrpiDygY6pgFyEa%2B7%2Fu79mSRBUxZmFY0XfdPcDXQ5o5qGaVrGB1ofbcSbro6ax7z4ClWyBVMKZ%2B8I7GbZgPwLCLL9FGvaYkIRHXwJ9XE8Tu1xfOQkifCW%2F%2FJogPzzCwusFCTx5201Mf7iNO%2FIDbzRj007n59qrv0%2FC1EKiFpEjTQikI8nlInx5U3EkEcS1%2FwbR56g40Z53CbRvxz5BQnvZNtvzuI6%2BeD3UueEKDRV&X-Amz-Signature=906d4b21f9789d2d28f070e7e15a95aa2181eb17da7d9a0533809e91f45eaffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6XWBEM6%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTVg0dsEwUcpOeb4qMjfQrJBUuwKXAzAXPOJfcsIW7iAiBMVU%2FU%2FCo%2FfW37sZZnhuzuWrZQjneTxqffthYejnanmir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM1QccMHWlVlLaQ41eKtwDc%2BymmKM0KFCEoz56An1UqjwsQoxz4YqHPKcNZA68u6AQadN3hzTMPuQScTyysNfS4J7DIMwhRrR8tPkMxL3QmKV3vTAuPRomVjyb7gy%2Fhn1UPsNiIV%2FBgch%2Fs%2FlOTQNd6lWJrGxN2P3tzL9w01yGvGw1hEFcSbJqfHbvy5GyCTmSKxQRcw48W9DvR9L4vxtNvwN4wvJm1xpaCy5P7XM99mx%2F6jpP9bjdQOgXCONYpzMrGUe5gxLZUj4sRivlaP77Bh2FaFMI8i7wKxavWkhtTgQQO6pxtDDghp3MskAWU33BgjCNJmBfwXKh87%2BOn93vNDnZGE%2FT%2FMT4JJd3HLEVVldEmpG%2Ffv%2BVWr%2Bqe0qnu%2Fct4yGMBVOkMoCZtkxN2QNF9ne%2F58w6AOS6fqogEz%2FZqJZ9PdjgMWD3tU0UZ%2Bhdf7HZp120Ah%2Byorqgcm8DTPAaTt15qkfPfg0AcaP3WKkjFF0LAo5eva5pUBwpAueGzHRKmPcoSfcc6LfuE4oLynJzonCEjb8cWfIjziRF5WrgZ%2FbDd97s80X2mTc0g222%2B%2BbCSn3hdCMh0oJM8Ufj7fNrhLICzZ3wu99bnchX8CRUUlwyavW89t%2FTvU2KDSvc3818T3%2F4e4SVjs8TTZkwrpiDygY6pgFyEa%2B7%2Fu79mSRBUxZmFY0XfdPcDXQ5o5qGaVrGB1ofbcSbro6ax7z4ClWyBVMKZ%2B8I7GbZgPwLCLL9FGvaYkIRHXwJ9XE8Tu1xfOQkifCW%2F%2FJogPzzCwusFCTx5201Mf7iNO%2FIDbzRj007n59qrv0%2FC1EKiFpEjTQikI8nlInx5U3EkEcS1%2FwbR56g40Z53CbRvxz5BQnvZNtvzuI6%2BeD3UueEKDRV&X-Amz-Signature=36de3a9a03454938516640b65248d0bff5b857c6cb12099a66804410e7706c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367GG372%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDooGVpqUJLQwEVwzwdyjcRHNjQ0Dogty33Z6%2F%2F8abO0AIhAL1qAdjmViwuSv723kDZYSz37l50GC271h017SRK%2Fp3cKv8DCFwQABoMNjM3NDIzMTgzODA1IgyMrrEUsSQZ%2Febd39Iq3AMAcvQuDTU9yPic2xnrev86lJJrHd3yqqIPZMrBke7pvce8gSIaWg7qn%2B2XAHotCLy7jicCk0kyJ2Wy%2Fo5iFzxw7JQB9%2BfpmmvAXSHCYmQkh7kKp5MB%2Fp2TcbnwpPvEHGHQPxsYpB3hp1aSvjeNEb7jpVaNrE5FOvwexcrR2lOnnKtI1KOCKM948z%2FaQCd6SOk2O7UUi12ocOQsOMx4cfGiCacjghcAHtoe%2BSbsk2JysxVb5M9XNJ1vhNO0XVHaaOT2%2BFuvm1b5hozIly%2F4s9bt3JHNd1BZFMmQTzXV%2BhFiDixmZvDY29%2FT8NMd29das0uOLWuCAm5NpWw5P%2Bs%2Fad8fSPA0vo%2BvneFowiUBDCMIqRzWHqS41pPVL%2BMzMhQjsqW4v%2BJT2jxWDZbPVdwmHsOTdmsTQWVkdHW140rN7P9lVCj6dMeWLm3UXlgkyu2FtOcjsTPbz1uyOfP9BLzfBceZSRwImP7XSd14taLQIZ114yOPHmT6HlWVEGEvM%2BN6lt381FcGeZbL05GaCv7MIm6rLBMIuBq0eKVVPANcFBM2Q%2FNrBPuy67j3X2%2B%2FzUC2pGIziM%2FEbzinhjxmfOxVh9ZnXdrKj%2FxKqk25mRvEX6iSAqzXgAjJ1F2YyjKp0TCrmIPKBjqkAWllaba0PaaE9SAJ3E2N5qBSyxhHkpWYmlQZgh%2BmA6e2LjLkN%2FevQM8Ep2NZDYpOwdGNLT7QcER63rbGK1AwURuSBWyxZI6jNXkgt8m0unXlzz4zRlIFwx4N9cHywMomHXnik7ODDfH1DQ52bvomSPhO0hxUbqiDGO5XXumlKm2lGb2%2BBMd0WM4y%2BvAsu%2B9xxGmim7zFu%2FHGqtnRjmDzHCXIjbc%2F&X-Amz-Signature=63ca8287b3197c5424b3159f5f0f838103112dd00e82ab6058745479c2de7c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367GG372%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDooGVpqUJLQwEVwzwdyjcRHNjQ0Dogty33Z6%2F%2F8abO0AIhAL1qAdjmViwuSv723kDZYSz37l50GC271h017SRK%2Fp3cKv8DCFwQABoMNjM3NDIzMTgzODA1IgyMrrEUsSQZ%2Febd39Iq3AMAcvQuDTU9yPic2xnrev86lJJrHd3yqqIPZMrBke7pvce8gSIaWg7qn%2B2XAHotCLy7jicCk0kyJ2Wy%2Fo5iFzxw7JQB9%2BfpmmvAXSHCYmQkh7kKp5MB%2Fp2TcbnwpPvEHGHQPxsYpB3hp1aSvjeNEb7jpVaNrE5FOvwexcrR2lOnnKtI1KOCKM948z%2FaQCd6SOk2O7UUi12ocOQsOMx4cfGiCacjghcAHtoe%2BSbsk2JysxVb5M9XNJ1vhNO0XVHaaOT2%2BFuvm1b5hozIly%2F4s9bt3JHNd1BZFMmQTzXV%2BhFiDixmZvDY29%2FT8NMd29das0uOLWuCAm5NpWw5P%2Bs%2Fad8fSPA0vo%2BvneFowiUBDCMIqRzWHqS41pPVL%2BMzMhQjsqW4v%2BJT2jxWDZbPVdwmHsOTdmsTQWVkdHW140rN7P9lVCj6dMeWLm3UXlgkyu2FtOcjsTPbz1uyOfP9BLzfBceZSRwImP7XSd14taLQIZ114yOPHmT6HlWVEGEvM%2BN6lt381FcGeZbL05GaCv7MIm6rLBMIuBq0eKVVPANcFBM2Q%2FNrBPuy67j3X2%2B%2FzUC2pGIziM%2FEbzinhjxmfOxVh9ZnXdrKj%2FxKqk25mRvEX6iSAqzXgAjJ1F2YyjKp0TCrmIPKBjqkAWllaba0PaaE9SAJ3E2N5qBSyxhHkpWYmlQZgh%2BmA6e2LjLkN%2FevQM8Ep2NZDYpOwdGNLT7QcER63rbGK1AwURuSBWyxZI6jNXkgt8m0unXlzz4zRlIFwx4N9cHywMomHXnik7ODDfH1DQ52bvomSPhO0hxUbqiDGO5XXumlKm2lGb2%2BBMd0WM4y%2BvAsu%2B9xxGmim7zFu%2FHGqtnRjmDzHCXIjbc%2F&X-Amz-Signature=d6caa634e97f425b370cb295d86cea3901cf24a39ae5d5526e431e93bf633777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367GG372%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDooGVpqUJLQwEVwzwdyjcRHNjQ0Dogty33Z6%2F%2F8abO0AIhAL1qAdjmViwuSv723kDZYSz37l50GC271h017SRK%2Fp3cKv8DCFwQABoMNjM3NDIzMTgzODA1IgyMrrEUsSQZ%2Febd39Iq3AMAcvQuDTU9yPic2xnrev86lJJrHd3yqqIPZMrBke7pvce8gSIaWg7qn%2B2XAHotCLy7jicCk0kyJ2Wy%2Fo5iFzxw7JQB9%2BfpmmvAXSHCYmQkh7kKp5MB%2Fp2TcbnwpPvEHGHQPxsYpB3hp1aSvjeNEb7jpVaNrE5FOvwexcrR2lOnnKtI1KOCKM948z%2FaQCd6SOk2O7UUi12ocOQsOMx4cfGiCacjghcAHtoe%2BSbsk2JysxVb5M9XNJ1vhNO0XVHaaOT2%2BFuvm1b5hozIly%2F4s9bt3JHNd1BZFMmQTzXV%2BhFiDixmZvDY29%2FT8NMd29das0uOLWuCAm5NpWw5P%2Bs%2Fad8fSPA0vo%2BvneFowiUBDCMIqRzWHqS41pPVL%2BMzMhQjsqW4v%2BJT2jxWDZbPVdwmHsOTdmsTQWVkdHW140rN7P9lVCj6dMeWLm3UXlgkyu2FtOcjsTPbz1uyOfP9BLzfBceZSRwImP7XSd14taLQIZ114yOPHmT6HlWVEGEvM%2BN6lt381FcGeZbL05GaCv7MIm6rLBMIuBq0eKVVPANcFBM2Q%2FNrBPuy67j3X2%2B%2FzUC2pGIziM%2FEbzinhjxmfOxVh9ZnXdrKj%2FxKqk25mRvEX6iSAqzXgAjJ1F2YyjKp0TCrmIPKBjqkAWllaba0PaaE9SAJ3E2N5qBSyxhHkpWYmlQZgh%2BmA6e2LjLkN%2FevQM8Ep2NZDYpOwdGNLT7QcER63rbGK1AwURuSBWyxZI6jNXkgt8m0unXlzz4zRlIFwx4N9cHywMomHXnik7ODDfH1DQ52bvomSPhO0hxUbqiDGO5XXumlKm2lGb2%2BBMd0WM4y%2BvAsu%2B9xxGmim7zFu%2FHGqtnRjmDzHCXIjbc%2F&X-Amz-Signature=51c84bbb91850c5321318ef5f8f1202b7611bc23075c3c06c44c5fdc0a404263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367GG372%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDooGVpqUJLQwEVwzwdyjcRHNjQ0Dogty33Z6%2F%2F8abO0AIhAL1qAdjmViwuSv723kDZYSz37l50GC271h017SRK%2Fp3cKv8DCFwQABoMNjM3NDIzMTgzODA1IgyMrrEUsSQZ%2Febd39Iq3AMAcvQuDTU9yPic2xnrev86lJJrHd3yqqIPZMrBke7pvce8gSIaWg7qn%2B2XAHotCLy7jicCk0kyJ2Wy%2Fo5iFzxw7JQB9%2BfpmmvAXSHCYmQkh7kKp5MB%2Fp2TcbnwpPvEHGHQPxsYpB3hp1aSvjeNEb7jpVaNrE5FOvwexcrR2lOnnKtI1KOCKM948z%2FaQCd6SOk2O7UUi12ocOQsOMx4cfGiCacjghcAHtoe%2BSbsk2JysxVb5M9XNJ1vhNO0XVHaaOT2%2BFuvm1b5hozIly%2F4s9bt3JHNd1BZFMmQTzXV%2BhFiDixmZvDY29%2FT8NMd29das0uOLWuCAm5NpWw5P%2Bs%2Fad8fSPA0vo%2BvneFowiUBDCMIqRzWHqS41pPVL%2BMzMhQjsqW4v%2BJT2jxWDZbPVdwmHsOTdmsTQWVkdHW140rN7P9lVCj6dMeWLm3UXlgkyu2FtOcjsTPbz1uyOfP9BLzfBceZSRwImP7XSd14taLQIZ114yOPHmT6HlWVEGEvM%2BN6lt381FcGeZbL05GaCv7MIm6rLBMIuBq0eKVVPANcFBM2Q%2FNrBPuy67j3X2%2B%2FzUC2pGIziM%2FEbzinhjxmfOxVh9ZnXdrKj%2FxKqk25mRvEX6iSAqzXgAjJ1F2YyjKp0TCrmIPKBjqkAWllaba0PaaE9SAJ3E2N5qBSyxhHkpWYmlQZgh%2BmA6e2LjLkN%2FevQM8Ep2NZDYpOwdGNLT7QcER63rbGK1AwURuSBWyxZI6jNXkgt8m0unXlzz4zRlIFwx4N9cHywMomHXnik7ODDfH1DQ52bvomSPhO0hxUbqiDGO5XXumlKm2lGb2%2BBMd0WM4y%2BvAsu%2B9xxGmim7zFu%2FHGqtnRjmDzHCXIjbc%2F&X-Amz-Signature=fd92bc7a7126d969d95024f25629fcc869d08c672edb3c5825f6c1d69fd16c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367GG372%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDooGVpqUJLQwEVwzwdyjcRHNjQ0Dogty33Z6%2F%2F8abO0AIhAL1qAdjmViwuSv723kDZYSz37l50GC271h017SRK%2Fp3cKv8DCFwQABoMNjM3NDIzMTgzODA1IgyMrrEUsSQZ%2Febd39Iq3AMAcvQuDTU9yPic2xnrev86lJJrHd3yqqIPZMrBke7pvce8gSIaWg7qn%2B2XAHotCLy7jicCk0kyJ2Wy%2Fo5iFzxw7JQB9%2BfpmmvAXSHCYmQkh7kKp5MB%2Fp2TcbnwpPvEHGHQPxsYpB3hp1aSvjeNEb7jpVaNrE5FOvwexcrR2lOnnKtI1KOCKM948z%2FaQCd6SOk2O7UUi12ocOQsOMx4cfGiCacjghcAHtoe%2BSbsk2JysxVb5M9XNJ1vhNO0XVHaaOT2%2BFuvm1b5hozIly%2F4s9bt3JHNd1BZFMmQTzXV%2BhFiDixmZvDY29%2FT8NMd29das0uOLWuCAm5NpWw5P%2Bs%2Fad8fSPA0vo%2BvneFowiUBDCMIqRzWHqS41pPVL%2BMzMhQjsqW4v%2BJT2jxWDZbPVdwmHsOTdmsTQWVkdHW140rN7P9lVCj6dMeWLm3UXlgkyu2FtOcjsTPbz1uyOfP9BLzfBceZSRwImP7XSd14taLQIZ114yOPHmT6HlWVEGEvM%2BN6lt381FcGeZbL05GaCv7MIm6rLBMIuBq0eKVVPANcFBM2Q%2FNrBPuy67j3X2%2B%2FzUC2pGIziM%2FEbzinhjxmfOxVh9ZnXdrKj%2FxKqk25mRvEX6iSAqzXgAjJ1F2YyjKp0TCrmIPKBjqkAWllaba0PaaE9SAJ3E2N5qBSyxhHkpWYmlQZgh%2BmA6e2LjLkN%2FevQM8Ep2NZDYpOwdGNLT7QcER63rbGK1AwURuSBWyxZI6jNXkgt8m0unXlzz4zRlIFwx4N9cHywMomHXnik7ODDfH1DQ52bvomSPhO0hxUbqiDGO5XXumlKm2lGb2%2BBMd0WM4y%2BvAsu%2B9xxGmim7zFu%2FHGqtnRjmDzHCXIjbc%2F&X-Amz-Signature=2ffd7d524f4844dfc89ec51143a020b93a472e7a1ece84156d126135a6bf7ce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367GG372%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDooGVpqUJLQwEVwzwdyjcRHNjQ0Dogty33Z6%2F%2F8abO0AIhAL1qAdjmViwuSv723kDZYSz37l50GC271h017SRK%2Fp3cKv8DCFwQABoMNjM3NDIzMTgzODA1IgyMrrEUsSQZ%2Febd39Iq3AMAcvQuDTU9yPic2xnrev86lJJrHd3yqqIPZMrBke7pvce8gSIaWg7qn%2B2XAHotCLy7jicCk0kyJ2Wy%2Fo5iFzxw7JQB9%2BfpmmvAXSHCYmQkh7kKp5MB%2Fp2TcbnwpPvEHGHQPxsYpB3hp1aSvjeNEb7jpVaNrE5FOvwexcrR2lOnnKtI1KOCKM948z%2FaQCd6SOk2O7UUi12ocOQsOMx4cfGiCacjghcAHtoe%2BSbsk2JysxVb5M9XNJ1vhNO0XVHaaOT2%2BFuvm1b5hozIly%2F4s9bt3JHNd1BZFMmQTzXV%2BhFiDixmZvDY29%2FT8NMd29das0uOLWuCAm5NpWw5P%2Bs%2Fad8fSPA0vo%2BvneFowiUBDCMIqRzWHqS41pPVL%2BMzMhQjsqW4v%2BJT2jxWDZbPVdwmHsOTdmsTQWVkdHW140rN7P9lVCj6dMeWLm3UXlgkyu2FtOcjsTPbz1uyOfP9BLzfBceZSRwImP7XSd14taLQIZ114yOPHmT6HlWVEGEvM%2BN6lt381FcGeZbL05GaCv7MIm6rLBMIuBq0eKVVPANcFBM2Q%2FNrBPuy67j3X2%2B%2FzUC2pGIziM%2FEbzinhjxmfOxVh9ZnXdrKj%2FxKqk25mRvEX6iSAqzXgAjJ1F2YyjKp0TCrmIPKBjqkAWllaba0PaaE9SAJ3E2N5qBSyxhHkpWYmlQZgh%2BmA6e2LjLkN%2FevQM8Ep2NZDYpOwdGNLT7QcER63rbGK1AwURuSBWyxZI6jNXkgt8m0unXlzz4zRlIFwx4N9cHywMomHXnik7ODDfH1DQ52bvomSPhO0hxUbqiDGO5XXumlKm2lGb2%2BBMd0WM4y%2BvAsu%2B9xxGmim7zFu%2FHGqtnRjmDzHCXIjbc%2F&X-Amz-Signature=e0071d8603d41f45c014d513f22cfd0b7339240b66de072445596f668fa93a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367GG372%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDooGVpqUJLQwEVwzwdyjcRHNjQ0Dogty33Z6%2F%2F8abO0AIhAL1qAdjmViwuSv723kDZYSz37l50GC271h017SRK%2Fp3cKv8DCFwQABoMNjM3NDIzMTgzODA1IgyMrrEUsSQZ%2Febd39Iq3AMAcvQuDTU9yPic2xnrev86lJJrHd3yqqIPZMrBke7pvce8gSIaWg7qn%2B2XAHotCLy7jicCk0kyJ2Wy%2Fo5iFzxw7JQB9%2BfpmmvAXSHCYmQkh7kKp5MB%2Fp2TcbnwpPvEHGHQPxsYpB3hp1aSvjeNEb7jpVaNrE5FOvwexcrR2lOnnKtI1KOCKM948z%2FaQCd6SOk2O7UUi12ocOQsOMx4cfGiCacjghcAHtoe%2BSbsk2JysxVb5M9XNJ1vhNO0XVHaaOT2%2BFuvm1b5hozIly%2F4s9bt3JHNd1BZFMmQTzXV%2BhFiDixmZvDY29%2FT8NMd29das0uOLWuCAm5NpWw5P%2Bs%2Fad8fSPA0vo%2BvneFowiUBDCMIqRzWHqS41pPVL%2BMzMhQjsqW4v%2BJT2jxWDZbPVdwmHsOTdmsTQWVkdHW140rN7P9lVCj6dMeWLm3UXlgkyu2FtOcjsTPbz1uyOfP9BLzfBceZSRwImP7XSd14taLQIZ114yOPHmT6HlWVEGEvM%2BN6lt381FcGeZbL05GaCv7MIm6rLBMIuBq0eKVVPANcFBM2Q%2FNrBPuy67j3X2%2B%2FzUC2pGIziM%2FEbzinhjxmfOxVh9ZnXdrKj%2FxKqk25mRvEX6iSAqzXgAjJ1F2YyjKp0TCrmIPKBjqkAWllaba0PaaE9SAJ3E2N5qBSyxhHkpWYmlQZgh%2BmA6e2LjLkN%2FevQM8Ep2NZDYpOwdGNLT7QcER63rbGK1AwURuSBWyxZI6jNXkgt8m0unXlzz4zRlIFwx4N9cHywMomHXnik7ODDfH1DQ52bvomSPhO0hxUbqiDGO5XXumlKm2lGb2%2BBMd0WM4y%2BvAsu%2B9xxGmim7zFu%2FHGqtnRjmDzHCXIjbc%2F&X-Amz-Signature=7484acb0c46dd09d44e1274b406962417a4d3288539a9c3a01d95971c5b07cf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YBRVQOE%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELq5UsBYsE3l9j6g0u9xdLBVJpfq7HW7r8eKFOQu3dWAiAhYD4hHhWUFZjfBEa7nwk9TMMpAilxGRuN%2FByMHYfAwir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMsUSYdP8FX2IBNJCdKtwDMdyMddi4ixD9rtwDV2A%2BgxZ4VqnB7OCKazfhHURTdEQpD8Vbp52a4fqzwajcK95MdbPaoUsNh%2F9PRjcHtvfow7f5kF3Q3F%2BdtG8Z69IDqwZXeHpZJLDQcdMF2nqc8iBJEJKksnYYuU6%2FqIR6WX7ZXFyAR4AXPLZxs%2BD9TUKSJ7r3EV4sbCl4kLgtLHF5pGdEaE4Tt8h8WDB6Oc8SS%2F7lzvmBZQF68jFdnhwcgHQbHKB8qXHLeMWLzkZ3rIE716ifHtHkGEIKA7Ll2J9Wi7z0RfzilUBr4%2FtKiXvpBc7STbdylk0dE7zeAex017mgI15xcAeAda%2FJALLc%2FA4GsiRWwnb%2Bv4nQy8RzG2vqNubjROpcUEQLmo0km3TrdPO8gJjJTNCkKB4hTt2xsqzIulpLuLXA1WS%2FobzCYs1LBAfDBBZiYOQZtqRQVuV6YIhErXGo9UpBOW%2BVkwKQo3p0SlGYccKUorAkhASbDSHDO38fR%2FwOE2sdszMcIefEEozkPaEVY6%2FfJ4LEVpWZKJJ9keKEVwSqFzJ8OmLbsy6KCHOH9XGjcWfh2qd7j8CaaW46c3bZM%2BX24VGoOhcKWJ8gswhcrkEOREoBbFLTTsgG0fj5iCLrIWCOpez7fRwYcaMw%2FZeDygY6pgGlkxmRjeeDRkMvkkioA60BhuBzHQvh3ysMYw2RaNC%2FiI7xzCp2TupENcYdE6XwIo%2BkFyyupGSoifQpFiRcXRbk6pZ0YkiEBH0%2BJowAETvzk5ub8TaEZ%2BvByeO8yK8Mm2LKFO%2FMfhYpvwkCqPE92%2BEb7LMZIUtwTZR0DI4Vi%2FMUeF7MhZghF3xz4JKWH2YEcJi%2FZthGPWUCkeAP23zQ4zv8lPLegP7W&X-Amz-Signature=00883fe0c1493454be537bc51fc9e8b247853bfe127f3405ba67299d8d249684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YBRVQOE%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELq5UsBYsE3l9j6g0u9xdLBVJpfq7HW7r8eKFOQu3dWAiAhYD4hHhWUFZjfBEa7nwk9TMMpAilxGRuN%2FByMHYfAwir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMsUSYdP8FX2IBNJCdKtwDMdyMddi4ixD9rtwDV2A%2BgxZ4VqnB7OCKazfhHURTdEQpD8Vbp52a4fqzwajcK95MdbPaoUsNh%2F9PRjcHtvfow7f5kF3Q3F%2BdtG8Z69IDqwZXeHpZJLDQcdMF2nqc8iBJEJKksnYYuU6%2FqIR6WX7ZXFyAR4AXPLZxs%2BD9TUKSJ7r3EV4sbCl4kLgtLHF5pGdEaE4Tt8h8WDB6Oc8SS%2F7lzvmBZQF68jFdnhwcgHQbHKB8qXHLeMWLzkZ3rIE716ifHtHkGEIKA7Ll2J9Wi7z0RfzilUBr4%2FtKiXvpBc7STbdylk0dE7zeAex017mgI15xcAeAda%2FJALLc%2FA4GsiRWwnb%2Bv4nQy8RzG2vqNubjROpcUEQLmo0km3TrdPO8gJjJTNCkKB4hTt2xsqzIulpLuLXA1WS%2FobzCYs1LBAfDBBZiYOQZtqRQVuV6YIhErXGo9UpBOW%2BVkwKQo3p0SlGYccKUorAkhASbDSHDO38fR%2FwOE2sdszMcIefEEozkPaEVY6%2FfJ4LEVpWZKJJ9keKEVwSqFzJ8OmLbsy6KCHOH9XGjcWfh2qd7j8CaaW46c3bZM%2BX24VGoOhcKWJ8gswhcrkEOREoBbFLTTsgG0fj5iCLrIWCOpez7fRwYcaMw%2FZeDygY6pgGlkxmRjeeDRkMvkkioA60BhuBzHQvh3ysMYw2RaNC%2FiI7xzCp2TupENcYdE6XwIo%2BkFyyupGSoifQpFiRcXRbk6pZ0YkiEBH0%2BJowAETvzk5ub8TaEZ%2BvByeO8yK8Mm2LKFO%2FMfhYpvwkCqPE92%2BEb7LMZIUtwTZR0DI4Vi%2FMUeF7MhZghF3xz4JKWH2YEcJi%2FZthGPWUCkeAP23zQ4zv8lPLegP7W&X-Amz-Signature=2de3b1d2fab27d0ec7d4b585174e724d748cd8dc66997f3538a61908a3fedbc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YBRVQOE%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELq5UsBYsE3l9j6g0u9xdLBVJpfq7HW7r8eKFOQu3dWAiAhYD4hHhWUFZjfBEa7nwk9TMMpAilxGRuN%2FByMHYfAwir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMsUSYdP8FX2IBNJCdKtwDMdyMddi4ixD9rtwDV2A%2BgxZ4VqnB7OCKazfhHURTdEQpD8Vbp52a4fqzwajcK95MdbPaoUsNh%2F9PRjcHtvfow7f5kF3Q3F%2BdtG8Z69IDqwZXeHpZJLDQcdMF2nqc8iBJEJKksnYYuU6%2FqIR6WX7ZXFyAR4AXPLZxs%2BD9TUKSJ7r3EV4sbCl4kLgtLHF5pGdEaE4Tt8h8WDB6Oc8SS%2F7lzvmBZQF68jFdnhwcgHQbHKB8qXHLeMWLzkZ3rIE716ifHtHkGEIKA7Ll2J9Wi7z0RfzilUBr4%2FtKiXvpBc7STbdylk0dE7zeAex017mgI15xcAeAda%2FJALLc%2FA4GsiRWwnb%2Bv4nQy8RzG2vqNubjROpcUEQLmo0km3TrdPO8gJjJTNCkKB4hTt2xsqzIulpLuLXA1WS%2FobzCYs1LBAfDBBZiYOQZtqRQVuV6YIhErXGo9UpBOW%2BVkwKQo3p0SlGYccKUorAkhASbDSHDO38fR%2FwOE2sdszMcIefEEozkPaEVY6%2FfJ4LEVpWZKJJ9keKEVwSqFzJ8OmLbsy6KCHOH9XGjcWfh2qd7j8CaaW46c3bZM%2BX24VGoOhcKWJ8gswhcrkEOREoBbFLTTsgG0fj5iCLrIWCOpez7fRwYcaMw%2FZeDygY6pgGlkxmRjeeDRkMvkkioA60BhuBzHQvh3ysMYw2RaNC%2FiI7xzCp2TupENcYdE6XwIo%2BkFyyupGSoifQpFiRcXRbk6pZ0YkiEBH0%2BJowAETvzk5ub8TaEZ%2BvByeO8yK8Mm2LKFO%2FMfhYpvwkCqPE92%2BEb7LMZIUtwTZR0DI4Vi%2FMUeF7MhZghF3xz4JKWH2YEcJi%2FZthGPWUCkeAP23zQ4zv8lPLegP7W&X-Amz-Signature=7d578883aae7d5f00cf84f20ef475f907e23f33252b51c4df4395efa5ea93ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YBRVQOE%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELq5UsBYsE3l9j6g0u9xdLBVJpfq7HW7r8eKFOQu3dWAiAhYD4hHhWUFZjfBEa7nwk9TMMpAilxGRuN%2FByMHYfAwir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMsUSYdP8FX2IBNJCdKtwDMdyMddi4ixD9rtwDV2A%2BgxZ4VqnB7OCKazfhHURTdEQpD8Vbp52a4fqzwajcK95MdbPaoUsNh%2F9PRjcHtvfow7f5kF3Q3F%2BdtG8Z69IDqwZXeHpZJLDQcdMF2nqc8iBJEJKksnYYuU6%2FqIR6WX7ZXFyAR4AXPLZxs%2BD9TUKSJ7r3EV4sbCl4kLgtLHF5pGdEaE4Tt8h8WDB6Oc8SS%2F7lzvmBZQF68jFdnhwcgHQbHKB8qXHLeMWLzkZ3rIE716ifHtHkGEIKA7Ll2J9Wi7z0RfzilUBr4%2FtKiXvpBc7STbdylk0dE7zeAex017mgI15xcAeAda%2FJALLc%2FA4GsiRWwnb%2Bv4nQy8RzG2vqNubjROpcUEQLmo0km3TrdPO8gJjJTNCkKB4hTt2xsqzIulpLuLXA1WS%2FobzCYs1LBAfDBBZiYOQZtqRQVuV6YIhErXGo9UpBOW%2BVkwKQo3p0SlGYccKUorAkhASbDSHDO38fR%2FwOE2sdszMcIefEEozkPaEVY6%2FfJ4LEVpWZKJJ9keKEVwSqFzJ8OmLbsy6KCHOH9XGjcWfh2qd7j8CaaW46c3bZM%2BX24VGoOhcKWJ8gswhcrkEOREoBbFLTTsgG0fj5iCLrIWCOpez7fRwYcaMw%2FZeDygY6pgGlkxmRjeeDRkMvkkioA60BhuBzHQvh3ysMYw2RaNC%2FiI7xzCp2TupENcYdE6XwIo%2BkFyyupGSoifQpFiRcXRbk6pZ0YkiEBH0%2BJowAETvzk5ub8TaEZ%2BvByeO8yK8Mm2LKFO%2FMfhYpvwkCqPE92%2BEb7LMZIUtwTZR0DI4Vi%2FMUeF7MhZghF3xz4JKWH2YEcJi%2FZthGPWUCkeAP23zQ4zv8lPLegP7W&X-Amz-Signature=eb351ecbf98699404bc6c5c6a22610b7ff5f0d583f7d739d2d096f2046a05126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YBRVQOE%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELq5UsBYsE3l9j6g0u9xdLBVJpfq7HW7r8eKFOQu3dWAiAhYD4hHhWUFZjfBEa7nwk9TMMpAilxGRuN%2FByMHYfAwir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMsUSYdP8FX2IBNJCdKtwDMdyMddi4ixD9rtwDV2A%2BgxZ4VqnB7OCKazfhHURTdEQpD8Vbp52a4fqzwajcK95MdbPaoUsNh%2F9PRjcHtvfow7f5kF3Q3F%2BdtG8Z69IDqwZXeHpZJLDQcdMF2nqc8iBJEJKksnYYuU6%2FqIR6WX7ZXFyAR4AXPLZxs%2BD9TUKSJ7r3EV4sbCl4kLgtLHF5pGdEaE4Tt8h8WDB6Oc8SS%2F7lzvmBZQF68jFdnhwcgHQbHKB8qXHLeMWLzkZ3rIE716ifHtHkGEIKA7Ll2J9Wi7z0RfzilUBr4%2FtKiXvpBc7STbdylk0dE7zeAex017mgI15xcAeAda%2FJALLc%2FA4GsiRWwnb%2Bv4nQy8RzG2vqNubjROpcUEQLmo0km3TrdPO8gJjJTNCkKB4hTt2xsqzIulpLuLXA1WS%2FobzCYs1LBAfDBBZiYOQZtqRQVuV6YIhErXGo9UpBOW%2BVkwKQo3p0SlGYccKUorAkhASbDSHDO38fR%2FwOE2sdszMcIefEEozkPaEVY6%2FfJ4LEVpWZKJJ9keKEVwSqFzJ8OmLbsy6KCHOH9XGjcWfh2qd7j8CaaW46c3bZM%2BX24VGoOhcKWJ8gswhcrkEOREoBbFLTTsgG0fj5iCLrIWCOpez7fRwYcaMw%2FZeDygY6pgGlkxmRjeeDRkMvkkioA60BhuBzHQvh3ysMYw2RaNC%2FiI7xzCp2TupENcYdE6XwIo%2BkFyyupGSoifQpFiRcXRbk6pZ0YkiEBH0%2BJowAETvzk5ub8TaEZ%2BvByeO8yK8Mm2LKFO%2FMfhYpvwkCqPE92%2BEb7LMZIUtwTZR0DI4Vi%2FMUeF7MhZghF3xz4JKWH2YEcJi%2FZthGPWUCkeAP23zQ4zv8lPLegP7W&X-Amz-Signature=f935a3160e12aa5719bc786256707108d6c8603596bf830f4f1fe68138cfa289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYET57F%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7YXEWtvo69fFWH3hkdOheYvBgV0VEr6V9uS016UmqGAiEA7YkcbzfWKHCDo9Qwk6o5s1RAEc1BTfQKOyTQy21b3mUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDPhYgaJxQcUcdPWdMyrcA21h0qyixJIGyZaz2rOBVHdEP4ubzTraba1%2BW295JzhTi1FNtz7cai41Dr%2FOBEcM38hUKimg6z8%2FIqyXNlgVnRD7LOT75CfH8PmKpMyWqOnojD5xnrXVuoe2noK0k17x1Npr92Z4Pm7Bz3aiVMcNvOPboKuBTT0jCrMSvAoQjbF10PsGBnMmvh8J8oPh7pxT7NgHb5OccUY489gfajUpuaw4Wkrk3gadtzxv%2FGoZ2hZr0LGskvKlxb8ca7c6Ykp8p7c%2BJzf5te91EXU00EQh7EyZtPQyEM5hnetNEr%2BoxKQGqw%2BQTKI3BsuP44IAxt4O%2Fw4O2SseBZfbgbcSBxkMlIBYLkLZoW8eMAwnglhILQr22YTZVab%2FWI7BWZPahq2x%2BOzV%2Fc6ac%2FFFSZzP5mx9ORj3UXwqevUKW0wnbvGnaOmGAfw2mBYwPbHweOOww1hBT8fDBs%2BA5xQccyM2tQYn0OlZqqfYUzl4%2FBIYCfPRys5hpNwXRP9v2FSGsrRefd0K8YfFlSnXc3jDCkR3Dk%2BfwF8Gb4RwCIZCZTxtZlFkOaxjKoC3b%2FQGVRF8tP0Yt%2FAXNDb1C2O%2BSUzc75Z0TG4QVAJAZF2jcAdzTIAh8kIXs7M6KzloR18DjKVfT3u8MLCXg8oGOqUB7332RF%2Fi4CziiVyprZzuMqRnZFt%2BNdckH%2Fn3vJhuFHDNmKJQ4xbVykJFGFMpqSABzO44raAhATN86O1aZlwAgOKDi7uFCqVLvecDtbGUywtsz4U1OMRv0qx4MNXUw2YVCX303ZH%2BK%2BiYAE9GxJq7ih145hObumnMldGMiiQxCctyWM0mDHOrVIsWRfqmdOK0%2FWIjX%2FE%2BgpFKEE0Zz6WA2QwW7VMt&X-Amz-Signature=d8caff50177badc1729cf33927cd8dae1a6f70651689dda0d4576ad5a8cd9be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYET57F%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7YXEWtvo69fFWH3hkdOheYvBgV0VEr6V9uS016UmqGAiEA7YkcbzfWKHCDo9Qwk6o5s1RAEc1BTfQKOyTQy21b3mUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDPhYgaJxQcUcdPWdMyrcA21h0qyixJIGyZaz2rOBVHdEP4ubzTraba1%2BW295JzhTi1FNtz7cai41Dr%2FOBEcM38hUKimg6z8%2FIqyXNlgVnRD7LOT75CfH8PmKpMyWqOnojD5xnrXVuoe2noK0k17x1Npr92Z4Pm7Bz3aiVMcNvOPboKuBTT0jCrMSvAoQjbF10PsGBnMmvh8J8oPh7pxT7NgHb5OccUY489gfajUpuaw4Wkrk3gadtzxv%2FGoZ2hZr0LGskvKlxb8ca7c6Ykp8p7c%2BJzf5te91EXU00EQh7EyZtPQyEM5hnetNEr%2BoxKQGqw%2BQTKI3BsuP44IAxt4O%2Fw4O2SseBZfbgbcSBxkMlIBYLkLZoW8eMAwnglhILQr22YTZVab%2FWI7BWZPahq2x%2BOzV%2Fc6ac%2FFFSZzP5mx9ORj3UXwqevUKW0wnbvGnaOmGAfw2mBYwPbHweOOww1hBT8fDBs%2BA5xQccyM2tQYn0OlZqqfYUzl4%2FBIYCfPRys5hpNwXRP9v2FSGsrRefd0K8YfFlSnXc3jDCkR3Dk%2BfwF8Gb4RwCIZCZTxtZlFkOaxjKoC3b%2FQGVRF8tP0Yt%2FAXNDb1C2O%2BSUzc75Z0TG4QVAJAZF2jcAdzTIAh8kIXs7M6KzloR18DjKVfT3u8MLCXg8oGOqUB7332RF%2Fi4CziiVyprZzuMqRnZFt%2BNdckH%2Fn3vJhuFHDNmKJQ4xbVykJFGFMpqSABzO44raAhATN86O1aZlwAgOKDi7uFCqVLvecDtbGUywtsz4U1OMRv0qx4MNXUw2YVCX303ZH%2BK%2BiYAE9GxJq7ih145hObumnMldGMiiQxCctyWM0mDHOrVIsWRfqmdOK0%2FWIjX%2FE%2BgpFKEE0Zz6WA2QwW7VMt&X-Amz-Signature=30070690a9797d9ef3f306ee7fb014e3c04cec49d2673b1e94e61b81abc1cdc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYET57F%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7YXEWtvo69fFWH3hkdOheYvBgV0VEr6V9uS016UmqGAiEA7YkcbzfWKHCDo9Qwk6o5s1RAEc1BTfQKOyTQy21b3mUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDPhYgaJxQcUcdPWdMyrcA21h0qyixJIGyZaz2rOBVHdEP4ubzTraba1%2BW295JzhTi1FNtz7cai41Dr%2FOBEcM38hUKimg6z8%2FIqyXNlgVnRD7LOT75CfH8PmKpMyWqOnojD5xnrXVuoe2noK0k17x1Npr92Z4Pm7Bz3aiVMcNvOPboKuBTT0jCrMSvAoQjbF10PsGBnMmvh8J8oPh7pxT7NgHb5OccUY489gfajUpuaw4Wkrk3gadtzxv%2FGoZ2hZr0LGskvKlxb8ca7c6Ykp8p7c%2BJzf5te91EXU00EQh7EyZtPQyEM5hnetNEr%2BoxKQGqw%2BQTKI3BsuP44IAxt4O%2Fw4O2SseBZfbgbcSBxkMlIBYLkLZoW8eMAwnglhILQr22YTZVab%2FWI7BWZPahq2x%2BOzV%2Fc6ac%2FFFSZzP5mx9ORj3UXwqevUKW0wnbvGnaOmGAfw2mBYwPbHweOOww1hBT8fDBs%2BA5xQccyM2tQYn0OlZqqfYUzl4%2FBIYCfPRys5hpNwXRP9v2FSGsrRefd0K8YfFlSnXc3jDCkR3Dk%2BfwF8Gb4RwCIZCZTxtZlFkOaxjKoC3b%2FQGVRF8tP0Yt%2FAXNDb1C2O%2BSUzc75Z0TG4QVAJAZF2jcAdzTIAh8kIXs7M6KzloR18DjKVfT3u8MLCXg8oGOqUB7332RF%2Fi4CziiVyprZzuMqRnZFt%2BNdckH%2Fn3vJhuFHDNmKJQ4xbVykJFGFMpqSABzO44raAhATN86O1aZlwAgOKDi7uFCqVLvecDtbGUywtsz4U1OMRv0qx4MNXUw2YVCX303ZH%2BK%2BiYAE9GxJq7ih145hObumnMldGMiiQxCctyWM0mDHOrVIsWRfqmdOK0%2FWIjX%2FE%2BgpFKEE0Zz6WA2QwW7VMt&X-Amz-Signature=a65c3ac41fbfa9832f0214672afefb3c434d547f42c23c99b318a0e94a62ca18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3DYYYKJ%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHPzUf0g7iTpJtxInVbm8rMGFTasXh1YSSzLfBkT4BEAIhAK%2B1azdgHPyNjJkJUejFFje585SjhRYY5SMoTSpJ9%2F8eKv8DCFwQABoMNjM3NDIzMTgzODA1IgwrP15gZqAGbDBTtEcq3AOpbQo7sylLdTHDe8JwNlxg%2FrtAx9vV6vy0szPqXpZv9HTU6%2FLnPxvGfMHtNuiY1aY06AQ19ui82UJIO1rWq9SOUwoBVR6cRIqzlRqttyolBYkSqop7JjkkZEqW5XTnwoV5wWAEm7rPHRhVuL%2B2QIK1TPNkvaYIG9gTW9hAxW0e3Dt3%2FOvhhVWvTL%2BAM9uLtTLupCxUGnudeQTbYRUP0HduQVAmGZBqeRGMu5Q1yKLQ1YA9qz5k2wwIjBgS26GFoRGSEUXh3OZ5vIR5S1XbLblFDguZv9Yi464Ppj7taOrRxzK8R%2F7xFeoJZeR5J3KhoKDRATof1QGAPDNeodz4ytbyofq09rwKCBm9bTqwwmsLI5PgE7GfgU1e4PHrljY30nwM3W%2BC%2BwELBr3N%2BMI1LTtXtGyOUP05Y6%2Fx1B0f9ZQjskX9U4twiNqlzscZOE4zlgwghzSeBoBovK8h%2FzM%2BHvUq1KZB%2BBFbEHxk%2FGa62K2TtiPl5Jd2NrHQj%2B0Gha1ig6EGCIVoR2L2I%2F5pDiPvru9Q4VbEHH1fFlmcXt7oh8HFEBrb7g9QocotrbCGrxiYVkwnaYdYwJQG3zE4ccMDlhwllww3KVyKwvJglyjpFz5kg571Eu1063IaUnDRIDD9l4PKBjqkAUcMjzI7IkaZK6WhAWp6gXPU9vGNaRyCl3hQm%2FZF3yi3wag2M2nI06glzTaWL1ZTLlIUq1yEax8e9dmeCFROHpUKX2EyZzWqG5Ta%2FLWtyDOHQfqXB31%2FKsu9%2BYWULGJw4NgnCIhlmHbHha%2F7%2BIyAb76gC48W9kW0WEw6jvBw753juygBEyqGIEaT542hofLg3%2BRcwgOEcIsa3lNXteEOz%2BPduNQh&X-Amz-Signature=0bd352fc5416680cc9b43e43bc58e91897595e9d55f197fab03b95573c0a64e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3DYYYKJ%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHPzUf0g7iTpJtxInVbm8rMGFTasXh1YSSzLfBkT4BEAIhAK%2B1azdgHPyNjJkJUejFFje585SjhRYY5SMoTSpJ9%2F8eKv8DCFwQABoMNjM3NDIzMTgzODA1IgwrP15gZqAGbDBTtEcq3AOpbQo7sylLdTHDe8JwNlxg%2FrtAx9vV6vy0szPqXpZv9HTU6%2FLnPxvGfMHtNuiY1aY06AQ19ui82UJIO1rWq9SOUwoBVR6cRIqzlRqttyolBYkSqop7JjkkZEqW5XTnwoV5wWAEm7rPHRhVuL%2B2QIK1TPNkvaYIG9gTW9hAxW0e3Dt3%2FOvhhVWvTL%2BAM9uLtTLupCxUGnudeQTbYRUP0HduQVAmGZBqeRGMu5Q1yKLQ1YA9qz5k2wwIjBgS26GFoRGSEUXh3OZ5vIR5S1XbLblFDguZv9Yi464Ppj7taOrRxzK8R%2F7xFeoJZeR5J3KhoKDRATof1QGAPDNeodz4ytbyofq09rwKCBm9bTqwwmsLI5PgE7GfgU1e4PHrljY30nwM3W%2BC%2BwELBr3N%2BMI1LTtXtGyOUP05Y6%2Fx1B0f9ZQjskX9U4twiNqlzscZOE4zlgwghzSeBoBovK8h%2FzM%2BHvUq1KZB%2BBFbEHxk%2FGa62K2TtiPl5Jd2NrHQj%2B0Gha1ig6EGCIVoR2L2I%2F5pDiPvru9Q4VbEHH1fFlmcXt7oh8HFEBrb7g9QocotrbCGrxiYVkwnaYdYwJQG3zE4ccMDlhwllww3KVyKwvJglyjpFz5kg571Eu1063IaUnDRIDD9l4PKBjqkAUcMjzI7IkaZK6WhAWp6gXPU9vGNaRyCl3hQm%2FZF3yi3wag2M2nI06glzTaWL1ZTLlIUq1yEax8e9dmeCFROHpUKX2EyZzWqG5Ta%2FLWtyDOHQfqXB31%2FKsu9%2BYWULGJw4NgnCIhlmHbHha%2F7%2BIyAb76gC48W9kW0WEw6jvBw753juygBEyqGIEaT542hofLg3%2BRcwgOEcIsa3lNXteEOz%2BPduNQh&X-Amz-Signature=2dffc2be1b2df7a08251d0c2ac18e3a779021b87f5bcb08f605de897f89d6c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZWVV7EN%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJgFoLlxGGyeE4qbFNbSXRpXTJS7VbBm8LfRRA%2F1RYrwIhAKpxXECYSpzQWJOZ5dOOpW1ZezBP6P4WkcYJpv4eoGSbKv8DCFwQABoMNjM3NDIzMTgzODA1IgxzIqK%2BFQWrWE8wyJ4q3AO2gSCxq1WPDOBV%2B5McAUIOF4Z%2FMu7oG%2BeOeQmSBjAR0NGQiHseED%2FIFs3AL6ZEP5T30IiaMNU%2FkWeAHqiXN59Bv5aISi5loKt8qFgeV%2F3lI76QpWdX1rmZzrvqLL0FTPD7Yw1gdQLhxi6FdUtVmKIqi%2BKlUGZBe2nrC4rAZerefKCLVKoesixsSpOzl7aV5fZrmBg5ZKjJIr2UAAj1QdMKB0XfeTRnHAMJkTn1NEr%2FTjn4dzbdjDdObFIdmwgLR%2BfL2VMe9fph0eURZqmREnvBbPKJKqdeSBHlS9OHcU%2Bv7LIVyBVwSJFexyFf1aksbTpZNKZfs0Emm2snbFL28vfCjZ53%2F20%2BCFgrr1BMH1nzi4hi1ImtvEk4E5e%2FSpjwJvIktjGjg6QbEUK64REzHivYHrTat6i8PzArd9UFkQsLiRZDt%2F0blH8u%2FMHd2WNgXf3xu0qiUgho3PGmUPBPlWhH0a6phlRHlA2GxJIDMTr%2BJowVos0%2BJcOpN1ts3PR6oWR5zpt%2B93SViz3KQ50beHVT66MOvufNOz%2BIN6GFnG%2FE3iteudoV32b3xkjeUSVFKk%2FCau7gPrRICr5SHy%2FRDGtaRKPmBEwZlAOyWQQOjAjScFq1KYb2I9ihAWxEnjD%2Fl4PKBjqkAYwolhRUzUHNsyHOQ7JRn3nPjbn9JgEeVUGy4sAvBDRYwi2VRyeVBppLolVy6daphwzqN7L4Aujke%2FUxKKy7pOzlrjvS7ZMh%2FGZ%2B8Zc356di1ESkOjvbmGxn559r0Z2xE6ovjq7KIBZNQDaJNvg75LQlXyNqYGDIIzUNHp3HvLm3yVD7IDufnLkhDvlQDhYQLzVwWG9D3DcjRIiw7u9dq6MDXmIc&X-Amz-Signature=0e759ec20efddd3ddc147b3341318c854a57f46e5e613a09926fe7de2f39560a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZWVV7EN%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJgFoLlxGGyeE4qbFNbSXRpXTJS7VbBm8LfRRA%2F1RYrwIhAKpxXECYSpzQWJOZ5dOOpW1ZezBP6P4WkcYJpv4eoGSbKv8DCFwQABoMNjM3NDIzMTgzODA1IgxzIqK%2BFQWrWE8wyJ4q3AO2gSCxq1WPDOBV%2B5McAUIOF4Z%2FMu7oG%2BeOeQmSBjAR0NGQiHseED%2FIFs3AL6ZEP5T30IiaMNU%2FkWeAHqiXN59Bv5aISi5loKt8qFgeV%2F3lI76QpWdX1rmZzrvqLL0FTPD7Yw1gdQLhxi6FdUtVmKIqi%2BKlUGZBe2nrC4rAZerefKCLVKoesixsSpOzl7aV5fZrmBg5ZKjJIr2UAAj1QdMKB0XfeTRnHAMJkTn1NEr%2FTjn4dzbdjDdObFIdmwgLR%2BfL2VMe9fph0eURZqmREnvBbPKJKqdeSBHlS9OHcU%2Bv7LIVyBVwSJFexyFf1aksbTpZNKZfs0Emm2snbFL28vfCjZ53%2F20%2BCFgrr1BMH1nzi4hi1ImtvEk4E5e%2FSpjwJvIktjGjg6QbEUK64REzHivYHrTat6i8PzArd9UFkQsLiRZDt%2F0blH8u%2FMHd2WNgXf3xu0qiUgho3PGmUPBPlWhH0a6phlRHlA2GxJIDMTr%2BJowVos0%2BJcOpN1ts3PR6oWR5zpt%2B93SViz3KQ50beHVT66MOvufNOz%2BIN6GFnG%2FE3iteudoV32b3xkjeUSVFKk%2FCau7gPrRICr5SHy%2FRDGtaRKPmBEwZlAOyWQQOjAjScFq1KYb2I9ihAWxEnjD%2Fl4PKBjqkAYwolhRUzUHNsyHOQ7JRn3nPjbn9JgEeVUGy4sAvBDRYwi2VRyeVBppLolVy6daphwzqN7L4Aujke%2FUxKKy7pOzlrjvS7ZMh%2FGZ%2B8Zc356di1ESkOjvbmGxn559r0Z2xE6ovjq7KIBZNQDaJNvg75LQlXyNqYGDIIzUNHp3HvLm3yVD7IDufnLkhDvlQDhYQLzVwWG9D3DcjRIiw7u9dq6MDXmIc&X-Amz-Signature=20b1d0e8cef3f4ffcd45a76886bdb0529e10b3bc82c28fd6563b472e864c8aa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZWVV7EN%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJgFoLlxGGyeE4qbFNbSXRpXTJS7VbBm8LfRRA%2F1RYrwIhAKpxXECYSpzQWJOZ5dOOpW1ZezBP6P4WkcYJpv4eoGSbKv8DCFwQABoMNjM3NDIzMTgzODA1IgxzIqK%2BFQWrWE8wyJ4q3AO2gSCxq1WPDOBV%2B5McAUIOF4Z%2FMu7oG%2BeOeQmSBjAR0NGQiHseED%2FIFs3AL6ZEP5T30IiaMNU%2FkWeAHqiXN59Bv5aISi5loKt8qFgeV%2F3lI76QpWdX1rmZzrvqLL0FTPD7Yw1gdQLhxi6FdUtVmKIqi%2BKlUGZBe2nrC4rAZerefKCLVKoesixsSpOzl7aV5fZrmBg5ZKjJIr2UAAj1QdMKB0XfeTRnHAMJkTn1NEr%2FTjn4dzbdjDdObFIdmwgLR%2BfL2VMe9fph0eURZqmREnvBbPKJKqdeSBHlS9OHcU%2Bv7LIVyBVwSJFexyFf1aksbTpZNKZfs0Emm2snbFL28vfCjZ53%2F20%2BCFgrr1BMH1nzi4hi1ImtvEk4E5e%2FSpjwJvIktjGjg6QbEUK64REzHivYHrTat6i8PzArd9UFkQsLiRZDt%2F0blH8u%2FMHd2WNgXf3xu0qiUgho3PGmUPBPlWhH0a6phlRHlA2GxJIDMTr%2BJowVos0%2BJcOpN1ts3PR6oWR5zpt%2B93SViz3KQ50beHVT66MOvufNOz%2BIN6GFnG%2FE3iteudoV32b3xkjeUSVFKk%2FCau7gPrRICr5SHy%2FRDGtaRKPmBEwZlAOyWQQOjAjScFq1KYb2I9ihAWxEnjD%2Fl4PKBjqkAYwolhRUzUHNsyHOQ7JRn3nPjbn9JgEeVUGy4sAvBDRYwi2VRyeVBppLolVy6daphwzqN7L4Aujke%2FUxKKy7pOzlrjvS7ZMh%2FGZ%2B8Zc356di1ESkOjvbmGxn559r0Z2xE6ovjq7KIBZNQDaJNvg75LQlXyNqYGDIIzUNHp3HvLm3yVD7IDufnLkhDvlQDhYQLzVwWG9D3DcjRIiw7u9dq6MDXmIc&X-Amz-Signature=13de917bb843ff57d8c70629c44be504216a1be93bf644e2772fbc3514906a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZWVV7EN%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJgFoLlxGGyeE4qbFNbSXRpXTJS7VbBm8LfRRA%2F1RYrwIhAKpxXECYSpzQWJOZ5dOOpW1ZezBP6P4WkcYJpv4eoGSbKv8DCFwQABoMNjM3NDIzMTgzODA1IgxzIqK%2BFQWrWE8wyJ4q3AO2gSCxq1WPDOBV%2B5McAUIOF4Z%2FMu7oG%2BeOeQmSBjAR0NGQiHseED%2FIFs3AL6ZEP5T30IiaMNU%2FkWeAHqiXN59Bv5aISi5loKt8qFgeV%2F3lI76QpWdX1rmZzrvqLL0FTPD7Yw1gdQLhxi6FdUtVmKIqi%2BKlUGZBe2nrC4rAZerefKCLVKoesixsSpOzl7aV5fZrmBg5ZKjJIr2UAAj1QdMKB0XfeTRnHAMJkTn1NEr%2FTjn4dzbdjDdObFIdmwgLR%2BfL2VMe9fph0eURZqmREnvBbPKJKqdeSBHlS9OHcU%2Bv7LIVyBVwSJFexyFf1aksbTpZNKZfs0Emm2snbFL28vfCjZ53%2F20%2BCFgrr1BMH1nzi4hi1ImtvEk4E5e%2FSpjwJvIktjGjg6QbEUK64REzHivYHrTat6i8PzArd9UFkQsLiRZDt%2F0blH8u%2FMHd2WNgXf3xu0qiUgho3PGmUPBPlWhH0a6phlRHlA2GxJIDMTr%2BJowVos0%2BJcOpN1ts3PR6oWR5zpt%2B93SViz3KQ50beHVT66MOvufNOz%2BIN6GFnG%2FE3iteudoV32b3xkjeUSVFKk%2FCau7gPrRICr5SHy%2FRDGtaRKPmBEwZlAOyWQQOjAjScFq1KYb2I9ihAWxEnjD%2Fl4PKBjqkAYwolhRUzUHNsyHOQ7JRn3nPjbn9JgEeVUGy4sAvBDRYwi2VRyeVBppLolVy6daphwzqN7L4Aujke%2FUxKKy7pOzlrjvS7ZMh%2FGZ%2B8Zc356di1ESkOjvbmGxn559r0Z2xE6ovjq7KIBZNQDaJNvg75LQlXyNqYGDIIzUNHp3HvLm3yVD7IDufnLkhDvlQDhYQLzVwWG9D3DcjRIiw7u9dq6MDXmIc&X-Amz-Signature=8dfc7f0d8e2307835d2d59a2600c5775bd43f67cffd31ce543472cb18c00f719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZWVV7EN%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJgFoLlxGGyeE4qbFNbSXRpXTJS7VbBm8LfRRA%2F1RYrwIhAKpxXECYSpzQWJOZ5dOOpW1ZezBP6P4WkcYJpv4eoGSbKv8DCFwQABoMNjM3NDIzMTgzODA1IgxzIqK%2BFQWrWE8wyJ4q3AO2gSCxq1WPDOBV%2B5McAUIOF4Z%2FMu7oG%2BeOeQmSBjAR0NGQiHseED%2FIFs3AL6ZEP5T30IiaMNU%2FkWeAHqiXN59Bv5aISi5loKt8qFgeV%2F3lI76QpWdX1rmZzrvqLL0FTPD7Yw1gdQLhxi6FdUtVmKIqi%2BKlUGZBe2nrC4rAZerefKCLVKoesixsSpOzl7aV5fZrmBg5ZKjJIr2UAAj1QdMKB0XfeTRnHAMJkTn1NEr%2FTjn4dzbdjDdObFIdmwgLR%2BfL2VMe9fph0eURZqmREnvBbPKJKqdeSBHlS9OHcU%2Bv7LIVyBVwSJFexyFf1aksbTpZNKZfs0Emm2snbFL28vfCjZ53%2F20%2BCFgrr1BMH1nzi4hi1ImtvEk4E5e%2FSpjwJvIktjGjg6QbEUK64REzHivYHrTat6i8PzArd9UFkQsLiRZDt%2F0blH8u%2FMHd2WNgXf3xu0qiUgho3PGmUPBPlWhH0a6phlRHlA2GxJIDMTr%2BJowVos0%2BJcOpN1ts3PR6oWR5zpt%2B93SViz3KQ50beHVT66MOvufNOz%2BIN6GFnG%2FE3iteudoV32b3xkjeUSVFKk%2FCau7gPrRICr5SHy%2FRDGtaRKPmBEwZlAOyWQQOjAjScFq1KYb2I9ihAWxEnjD%2Fl4PKBjqkAYwolhRUzUHNsyHOQ7JRn3nPjbn9JgEeVUGy4sAvBDRYwi2VRyeVBppLolVy6daphwzqN7L4Aujke%2FUxKKy7pOzlrjvS7ZMh%2FGZ%2B8Zc356di1ESkOjvbmGxn559r0Z2xE6ovjq7KIBZNQDaJNvg75LQlXyNqYGDIIzUNHp3HvLm3yVD7IDufnLkhDvlQDhYQLzVwWG9D3DcjRIiw7u9dq6MDXmIc&X-Amz-Signature=4289ba087f59ab5bf9db60ced32454ffcc56227c30b96a739677661c866380d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LMCTJEH%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T040242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAYuBmlgybsgzpT1dbglAbiRm2ZhTFuoAk9ptISEh2XAIgDt3dZsKFNy5bJcYo5Jp6MI585XpHbtQJVwN5Ucu83Eoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDGSFQOBNFJ6Ro5elEyrcA6l0K5nT398rBpgrXO4nReLrdksh6Y2PAxpLp4ho2qcR09SusjnM6nw9kCIUwb7I%2BtYjDc1OSH%2F8WEcuIHQX2r8oBkJ4c6CpQKoKrGVroMSbDjPu0AsNaNOH5PTNR8utU5phVEyFLf%2FNeKuOkb2jrM14nk0oh%2Bti3sTWpo8euSCTGuVXQygQpqu%2BBjxVgMB6g1JDNTDMKcCLptg7oYP8342HQQ6dtMja2UxddK9TK7OJbSordMiRXvS%2FaPz2vZys0Z83grPuxJvEG91vjgHwz7Pt%2FMYKkoAOY3jDPJq%2BA8ANZH1oUNKf%2BDXmw5tqxJp3ew3cbqTXCsOiltXkfy%2FRNmgYiYGf4Mr%2Fu4MNZSU9fS2f7a2DlE%2B%2FxUJwr5OhZI0Zmhmlm967LiGhxHXwDg4t7fhMTal4Mp4tBKuwRns9DRXzLhdKU%2FDWMLWw50rlS7OVPFbpXgM8tw6g4BQAwYPKiTm7eijxzf0%2BKI0UDoco8LJj3afcovKuuFgKkxcg505h%2BvkAXUMLVYjxiM%2BpBs%2FiKlx8TVVlPSwDrP3bUX3810zf%2FXmjMuxiI4uW1XL89KUEKHXS8onOehEc5rZ%2B9m0PpJ%2B515HJDNIeEQ5HwNUk9j8%2FPHgS7m5pvFvpZa4bMN2Xg8oGOqUB1K3za8d6jVriXWnyUz5o%2BvcUIPxm4rzEduimqWXlidf1tAQhENTAFPY3fe%2F2qQhW68YACIk6QETvppxLvQNrqOV8Mtfxl%2FZ144hae9cpCj2pZy2AGxEWdBlENM9m4Pfk20ZSpBVpKtZq9iVw%2Bo0vWzbOCFwV1p9TbZ1P%2BqGqsDjUQxnIvMVoS9LOvu7CXZ8v5IGOn6xH3KdGO44jF%2BennjZ8EU0B&X-Amz-Signature=d75119a7f6a47f6399587e6a9777210d644040e48691a1a5c60cad07ad4278f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

