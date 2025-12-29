
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BVJ6LR%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQQbX4dDZAV6uZWlGV3lSP2cGhnFPB0pnd4ujCb6kFMwIhAIQmYvOvWK2OhhrRL8%2B%2FgJayFlAbKs0PKQ%2Fh9QPCE8qIKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxVYx1V3V0x03RXEUq3AMTqmpMtHXg9fwH6%2FTAsumlT%2BEI2Jsam92jHUNqUKl2KChMZk4KLcbdAze2iYL7wTxDLOBlHt1a77uINMyfQqrL%2FFyEF0kCRA0rQIZruE40XyHD%2BPH0hiuU9rjyD0h%2BlguvQ9dFn68cBpOWAMMmX1%2F2%2FmyUrCbOp0HvJBksxCmj2K8SzJAf5%2BJn2nfjvDYxpDVFAvqfsVU6UdNbKgtQR94fnZrLwoPOUkxcQDS1xZehaG0m35DRBz5C3s9uNHnFa8FGEp2nHfxwlmYbK15hI5lYOAaVKmVndapfM5CoJqseVE%2F7hprs8BErp2APkqyeTljwZq%2FuDYTnSU0VDdChLPARH%2FptncbTEnVBBJkLw4XOONSdeowURjiWK7le1j%2FIvHsKr6NIoNxPrzyKqWal1YR1u6Z3ejhD2fD3CZrj%2F4DTN2241%2BNW%2FGCkq6bFRiG8SKy9U8%2FaA%2BnBGuoHbT8AneP7wJaoWR5JqqbzL0ZvAFVshqKCjT%2BoWJEtWe2pDcxsD7ffk9PhTJ4rB%2BmIgRYDUqP6klCpjRFMV6N%2F7EoFaXfJ4kc%2FrZye7tTZV4ZmqulFcYT9%2FVkngb9JR5vCAdKf64NHdsD2sCKNU0L8w%2FjwFANJiXuDWembrB8llI%2FvCjCzksfKBjqkAW7l0Bb5kn%2FkWII4QrqrKLyU2AWHl2%2BsRp8P%2FmA%2BTLqXb%2Bc6ESDzEUKnzJ8hFiinZQA4Au9W2RtBBBuAXGakheRAl4jTexmHj1j%2FhYk6taKgztqNnNLpKMMK3BSmPbg2FUTzPzn8FU%2FMUXg1Ogo3WFNKGIM4k9btnlRvPa8TvxP44OdkXruorxD1IqjWFfxRfCaMxT%2Fh3Il%2FPGehrOUkhmmszuwF&X-Amz-Signature=fc302a8586e5b70e54c1a593af4f6794cda2c2af3e4c7e7d0a831538f380a72f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGGHG4LB%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqSsrjDFyMg3%2FSJvZpyU1dY26xfo5jcTX4z52wzcgt%2BgIhALTFqllNfewk02p25%2BdtevXslf1kjGCMflkJSUjIN52%2BKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSKm7MA4qehbmM5Eoq3APwQJBy%2BDXzouDkrBTvYuYNeI8VQWVpoMoYYkC4bL4oYwthKxq3XwHX5anMENzlJKFYSVNy90jSNSNj4ESeVxSqLD3pWABJpd0MhVtZgIOnVJQbaQMwQmg%2FFajAzQhr041VIGP2EwdX7XMUE%2F7%2F1Ibv7OWz9hQbH6fnGnGocQkXvYR1%2BQ21tBadrtdl7mwZD4R%2BAl47GY%2Fy6QyFl4Yl0CafDraB0QTPjx9n7qVaiPO23Gfj4Z9ZHPzYAZSdSlmhdpAOkvAVFJdXHek%2BhVbydXF6s1SGdaw9SWkhiX4%2FBc%2BDrPERhBcsd8lKh1Z2hEh7d6kOQo7vEVp4YVHQarFS2ri3dSppfFyVdcl5S6CE07vF%2FvgB0tPWjpzaSv5OUJ8%2F28%2BZu0inSiTVl0AOfqeC51nOq0Zn1ebfV6DrJEPhFu6%2BqwOKHNKcN33U88CxBOHuQUV9Eg2XF8dTaSkp3XgD%2FwHvGo6fbDAy9k3aa754JLhebC4KQcfflaLdvaUVrw4vQbYB9SF1qW%2FvovA31u1PQ2YokOYpezujwv7%2Bwx5IWk4%2FDcGMzD8kCwEW8PUEeyQtJt%2Fmdt%2Bvq6N4iO4FY%2BvjhZArmWYFCG5TiEwY5bIZnL9fNfU%2FMvH3l%2F3c%2FXGdfDDMjcfKBjqkAZJcwFKt8HNf9T5RBLPvEMVBdFzpBTLtjheDSnwUZ18%2FuYo%2FAb8KMSzScL32vaC7FLfQ21LmaHTeSjbXxbNsPbFITq9SaGsypeBdpMxEcMkEbumTrXW5Na%2BhuCVhQ6TTCHfF1v9mZR5SmDWMHTrvtuHfO%2BjGYxLSYwgmkJbfxV9uKaIeSYW23ZkiFxRcczDGVdsPbiGS%2Bci69rzGXUAR6J6GhUh6&X-Amz-Signature=1813191269b9ad3d4e1cbfb55e4cb19aad4952e7105b6fb042013efd328eb2a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGGHG4LB%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqSsrjDFyMg3%2FSJvZpyU1dY26xfo5jcTX4z52wzcgt%2BgIhALTFqllNfewk02p25%2BdtevXslf1kjGCMflkJSUjIN52%2BKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSKm7MA4qehbmM5Eoq3APwQJBy%2BDXzouDkrBTvYuYNeI8VQWVpoMoYYkC4bL4oYwthKxq3XwHX5anMENzlJKFYSVNy90jSNSNj4ESeVxSqLD3pWABJpd0MhVtZgIOnVJQbaQMwQmg%2FFajAzQhr041VIGP2EwdX7XMUE%2F7%2F1Ibv7OWz9hQbH6fnGnGocQkXvYR1%2BQ21tBadrtdl7mwZD4R%2BAl47GY%2Fy6QyFl4Yl0CafDraB0QTPjx9n7qVaiPO23Gfj4Z9ZHPzYAZSdSlmhdpAOkvAVFJdXHek%2BhVbydXF6s1SGdaw9SWkhiX4%2FBc%2BDrPERhBcsd8lKh1Z2hEh7d6kOQo7vEVp4YVHQarFS2ri3dSppfFyVdcl5S6CE07vF%2FvgB0tPWjpzaSv5OUJ8%2F28%2BZu0inSiTVl0AOfqeC51nOq0Zn1ebfV6DrJEPhFu6%2BqwOKHNKcN33U88CxBOHuQUV9Eg2XF8dTaSkp3XgD%2FwHvGo6fbDAy9k3aa754JLhebC4KQcfflaLdvaUVrw4vQbYB9SF1qW%2FvovA31u1PQ2YokOYpezujwv7%2Bwx5IWk4%2FDcGMzD8kCwEW8PUEeyQtJt%2Fmdt%2Bvq6N4iO4FY%2BvjhZArmWYFCG5TiEwY5bIZnL9fNfU%2FMvH3l%2F3c%2FXGdfDDMjcfKBjqkAZJcwFKt8HNf9T5RBLPvEMVBdFzpBTLtjheDSnwUZ18%2FuYo%2FAb8KMSzScL32vaC7FLfQ21LmaHTeSjbXxbNsPbFITq9SaGsypeBdpMxEcMkEbumTrXW5Na%2BhuCVhQ6TTCHfF1v9mZR5SmDWMHTrvtuHfO%2BjGYxLSYwgmkJbfxV9uKaIeSYW23ZkiFxRcczDGVdsPbiGS%2Bci69rzGXUAR6J6GhUh6&X-Amz-Signature=c7bb55123f23d61c958b7e1039d7fb04c29bf87d1b5e37d4700099feaf635666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623GWAADB%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDA0U4nIUMRb4Qcq%2BNHtg4B23noVP5xcXAd9BHAcr1oHAiAtMjByQAZEccfbtg7nZWFJGnT1WxOmmvSnmT8HR6489yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8LWQCAv5EhcvG4B5KtwD4aIMB9Lc%2FGjWMv%2FoXBEQZV9MUfaViJJNfKZUWIC%2BUR6UHQuhDL1SWFQbsSvwZLWrDcDLj%2Fmr%2BMAeWFcKxxPAaEZrRNq%2FEo5OSjT3uFvkCSmBAhS5tjIQP%2FvFQUMKeLDvmRSQjfccbbrbNU7diArLeNamXIAWEXDpbJc6lSJc%2F6hMv7iSm1fuCc3f8cTvegs2ctfMDUNc2s87jnC52g7UnTEyaR6l%2FNY0RAlbizcnu1v9gQg3Z%2BXGhl%2FkaFZ5cGimVuquPkpCwOrDDqtWLzVBNvF4xgS%2BBldI2XACAqWP6JB9Ff2WfwR85SUFxOM1jCbvRWIaOzI%2FqmDTpGaickDKjQPVyFTkEXt%2BcopFYiMvjoznHQrbLgbenP1y4sgsGRJNPfLrs8YOmj7oi%2BR%2B0iAoBZUzM0PJ6pGH%2B15FhYjbq6%2BTsAxcPdJXUOSJBZ%2FX3aWJcfj41Qhr4vCbxpDnBScuNddzW9yyu5umhRo%2FxHdrrvR4bTk7iWWiZEX%2B8a9yI%2BdB8l3We3DQpx%2BM7h7GgP4bTSrbIn%2FDmfo6z7Psg%2FjdyhMy9O1Uy5uBre3R1Ys8KZvg4SFRhmD4h2XRywHjFYuPKcO9YgFZr6LNPkVXvTEYbKYu78c7Ksp7hBfKWogwj4%2FHygY6pgHNs0vP5VuADCNsMat49YaKLkMM1SSgk0%2FZoBsfGKhgixGFdCMJCUkgaxEgYGmHIcczoVYCmzPi2ZODLilo4ZbPcaYs1Y2OqVuT%2Fsncx05WvCdH7QqN02QQLYdmhTOf0wgmirA%2Fii1aWfLSgXJd4YTAyZYJGajfe%2Fs20azEsWRjxCLOKjubRPoUHbsJ0uDCilHXGuFcV1TRb2gXOI9Nuk3nDhk8M7q8&X-Amz-Signature=6af3f925c9fa995eace6c0c2cd044f0fc76ad6f4db4de5e38bd34258ebedc8f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623GWAADB%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDA0U4nIUMRb4Qcq%2BNHtg4B23noVP5xcXAd9BHAcr1oHAiAtMjByQAZEccfbtg7nZWFJGnT1WxOmmvSnmT8HR6489yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8LWQCAv5EhcvG4B5KtwD4aIMB9Lc%2FGjWMv%2FoXBEQZV9MUfaViJJNfKZUWIC%2BUR6UHQuhDL1SWFQbsSvwZLWrDcDLj%2Fmr%2BMAeWFcKxxPAaEZrRNq%2FEo5OSjT3uFvkCSmBAhS5tjIQP%2FvFQUMKeLDvmRSQjfccbbrbNU7diArLeNamXIAWEXDpbJc6lSJc%2F6hMv7iSm1fuCc3f8cTvegs2ctfMDUNc2s87jnC52g7UnTEyaR6l%2FNY0RAlbizcnu1v9gQg3Z%2BXGhl%2FkaFZ5cGimVuquPkpCwOrDDqtWLzVBNvF4xgS%2BBldI2XACAqWP6JB9Ff2WfwR85SUFxOM1jCbvRWIaOzI%2FqmDTpGaickDKjQPVyFTkEXt%2BcopFYiMvjoznHQrbLgbenP1y4sgsGRJNPfLrs8YOmj7oi%2BR%2B0iAoBZUzM0PJ6pGH%2B15FhYjbq6%2BTsAxcPdJXUOSJBZ%2FX3aWJcfj41Qhr4vCbxpDnBScuNddzW9yyu5umhRo%2FxHdrrvR4bTk7iWWiZEX%2B8a9yI%2BdB8l3We3DQpx%2BM7h7GgP4bTSrbIn%2FDmfo6z7Psg%2FjdyhMy9O1Uy5uBre3R1Ys8KZvg4SFRhmD4h2XRywHjFYuPKcO9YgFZr6LNPkVXvTEYbKYu78c7Ksp7hBfKWogwj4%2FHygY6pgHNs0vP5VuADCNsMat49YaKLkMM1SSgk0%2FZoBsfGKhgixGFdCMJCUkgaxEgYGmHIcczoVYCmzPi2ZODLilo4ZbPcaYs1Y2OqVuT%2Fsncx05WvCdH7QqN02QQLYdmhTOf0wgmirA%2Fii1aWfLSgXJd4YTAyZYJGajfe%2Fs20azEsWRjxCLOKjubRPoUHbsJ0uDCilHXGuFcV1TRb2gXOI9Nuk3nDhk8M7q8&X-Amz-Signature=1e2398b02eabc7d87d1845200000f1d54d5a65a439b37f413940e548009c4a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623GWAADB%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDA0U4nIUMRb4Qcq%2BNHtg4B23noVP5xcXAd9BHAcr1oHAiAtMjByQAZEccfbtg7nZWFJGnT1WxOmmvSnmT8HR6489yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8LWQCAv5EhcvG4B5KtwD4aIMB9Lc%2FGjWMv%2FoXBEQZV9MUfaViJJNfKZUWIC%2BUR6UHQuhDL1SWFQbsSvwZLWrDcDLj%2Fmr%2BMAeWFcKxxPAaEZrRNq%2FEo5OSjT3uFvkCSmBAhS5tjIQP%2FvFQUMKeLDvmRSQjfccbbrbNU7diArLeNamXIAWEXDpbJc6lSJc%2F6hMv7iSm1fuCc3f8cTvegs2ctfMDUNc2s87jnC52g7UnTEyaR6l%2FNY0RAlbizcnu1v9gQg3Z%2BXGhl%2FkaFZ5cGimVuquPkpCwOrDDqtWLzVBNvF4xgS%2BBldI2XACAqWP6JB9Ff2WfwR85SUFxOM1jCbvRWIaOzI%2FqmDTpGaickDKjQPVyFTkEXt%2BcopFYiMvjoznHQrbLgbenP1y4sgsGRJNPfLrs8YOmj7oi%2BR%2B0iAoBZUzM0PJ6pGH%2B15FhYjbq6%2BTsAxcPdJXUOSJBZ%2FX3aWJcfj41Qhr4vCbxpDnBScuNddzW9yyu5umhRo%2FxHdrrvR4bTk7iWWiZEX%2B8a9yI%2BdB8l3We3DQpx%2BM7h7GgP4bTSrbIn%2FDmfo6z7Psg%2FjdyhMy9O1Uy5uBre3R1Ys8KZvg4SFRhmD4h2XRywHjFYuPKcO9YgFZr6LNPkVXvTEYbKYu78c7Ksp7hBfKWogwj4%2FHygY6pgHNs0vP5VuADCNsMat49YaKLkMM1SSgk0%2FZoBsfGKhgixGFdCMJCUkgaxEgYGmHIcczoVYCmzPi2ZODLilo4ZbPcaYs1Y2OqVuT%2Fsncx05WvCdH7QqN02QQLYdmhTOf0wgmirA%2Fii1aWfLSgXJd4YTAyZYJGajfe%2Fs20azEsWRjxCLOKjubRPoUHbsJ0uDCilHXGuFcV1TRb2gXOI9Nuk3nDhk8M7q8&X-Amz-Signature=13a52f2a25bd4289e4fae497b2b2a0c8ef27b80e97f1c33537bfd06fca24fe2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623GWAADB%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDA0U4nIUMRb4Qcq%2BNHtg4B23noVP5xcXAd9BHAcr1oHAiAtMjByQAZEccfbtg7nZWFJGnT1WxOmmvSnmT8HR6489yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8LWQCAv5EhcvG4B5KtwD4aIMB9Lc%2FGjWMv%2FoXBEQZV9MUfaViJJNfKZUWIC%2BUR6UHQuhDL1SWFQbsSvwZLWrDcDLj%2Fmr%2BMAeWFcKxxPAaEZrRNq%2FEo5OSjT3uFvkCSmBAhS5tjIQP%2FvFQUMKeLDvmRSQjfccbbrbNU7diArLeNamXIAWEXDpbJc6lSJc%2F6hMv7iSm1fuCc3f8cTvegs2ctfMDUNc2s87jnC52g7UnTEyaR6l%2FNY0RAlbizcnu1v9gQg3Z%2BXGhl%2FkaFZ5cGimVuquPkpCwOrDDqtWLzVBNvF4xgS%2BBldI2XACAqWP6JB9Ff2WfwR85SUFxOM1jCbvRWIaOzI%2FqmDTpGaickDKjQPVyFTkEXt%2BcopFYiMvjoznHQrbLgbenP1y4sgsGRJNPfLrs8YOmj7oi%2BR%2B0iAoBZUzM0PJ6pGH%2B15FhYjbq6%2BTsAxcPdJXUOSJBZ%2FX3aWJcfj41Qhr4vCbxpDnBScuNddzW9yyu5umhRo%2FxHdrrvR4bTk7iWWiZEX%2B8a9yI%2BdB8l3We3DQpx%2BM7h7GgP4bTSrbIn%2FDmfo6z7Psg%2FjdyhMy9O1Uy5uBre3R1Ys8KZvg4SFRhmD4h2XRywHjFYuPKcO9YgFZr6LNPkVXvTEYbKYu78c7Ksp7hBfKWogwj4%2FHygY6pgHNs0vP5VuADCNsMat49YaKLkMM1SSgk0%2FZoBsfGKhgixGFdCMJCUkgaxEgYGmHIcczoVYCmzPi2ZODLilo4ZbPcaYs1Y2OqVuT%2Fsncx05WvCdH7QqN02QQLYdmhTOf0wgmirA%2Fii1aWfLSgXJd4YTAyZYJGajfe%2Fs20azEsWRjxCLOKjubRPoUHbsJ0uDCilHXGuFcV1TRb2gXOI9Nuk3nDhk8M7q8&X-Amz-Signature=a2cbc7955f7be47d22adcb39d2cb7eed23f6834973b6598a261c0a98e52ee85f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623GWAADB%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDA0U4nIUMRb4Qcq%2BNHtg4B23noVP5xcXAd9BHAcr1oHAiAtMjByQAZEccfbtg7nZWFJGnT1WxOmmvSnmT8HR6489yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8LWQCAv5EhcvG4B5KtwD4aIMB9Lc%2FGjWMv%2FoXBEQZV9MUfaViJJNfKZUWIC%2BUR6UHQuhDL1SWFQbsSvwZLWrDcDLj%2Fmr%2BMAeWFcKxxPAaEZrRNq%2FEo5OSjT3uFvkCSmBAhS5tjIQP%2FvFQUMKeLDvmRSQjfccbbrbNU7diArLeNamXIAWEXDpbJc6lSJc%2F6hMv7iSm1fuCc3f8cTvegs2ctfMDUNc2s87jnC52g7UnTEyaR6l%2FNY0RAlbizcnu1v9gQg3Z%2BXGhl%2FkaFZ5cGimVuquPkpCwOrDDqtWLzVBNvF4xgS%2BBldI2XACAqWP6JB9Ff2WfwR85SUFxOM1jCbvRWIaOzI%2FqmDTpGaickDKjQPVyFTkEXt%2BcopFYiMvjoznHQrbLgbenP1y4sgsGRJNPfLrs8YOmj7oi%2BR%2B0iAoBZUzM0PJ6pGH%2B15FhYjbq6%2BTsAxcPdJXUOSJBZ%2FX3aWJcfj41Qhr4vCbxpDnBScuNddzW9yyu5umhRo%2FxHdrrvR4bTk7iWWiZEX%2B8a9yI%2BdB8l3We3DQpx%2BM7h7GgP4bTSrbIn%2FDmfo6z7Psg%2FjdyhMy9O1Uy5uBre3R1Ys8KZvg4SFRhmD4h2XRywHjFYuPKcO9YgFZr6LNPkVXvTEYbKYu78c7Ksp7hBfKWogwj4%2FHygY6pgHNs0vP5VuADCNsMat49YaKLkMM1SSgk0%2FZoBsfGKhgixGFdCMJCUkgaxEgYGmHIcczoVYCmzPi2ZODLilo4ZbPcaYs1Y2OqVuT%2Fsncx05WvCdH7QqN02QQLYdmhTOf0wgmirA%2Fii1aWfLSgXJd4YTAyZYJGajfe%2Fs20azEsWRjxCLOKjubRPoUHbsJ0uDCilHXGuFcV1TRb2gXOI9Nuk3nDhk8M7q8&X-Amz-Signature=f815acb1af091e5322fd2a069714316ad50e56636319a6898d42d5f0832fd490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623GWAADB%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDA0U4nIUMRb4Qcq%2BNHtg4B23noVP5xcXAd9BHAcr1oHAiAtMjByQAZEccfbtg7nZWFJGnT1WxOmmvSnmT8HR6489yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8LWQCAv5EhcvG4B5KtwD4aIMB9Lc%2FGjWMv%2FoXBEQZV9MUfaViJJNfKZUWIC%2BUR6UHQuhDL1SWFQbsSvwZLWrDcDLj%2Fmr%2BMAeWFcKxxPAaEZrRNq%2FEo5OSjT3uFvkCSmBAhS5tjIQP%2FvFQUMKeLDvmRSQjfccbbrbNU7diArLeNamXIAWEXDpbJc6lSJc%2F6hMv7iSm1fuCc3f8cTvegs2ctfMDUNc2s87jnC52g7UnTEyaR6l%2FNY0RAlbizcnu1v9gQg3Z%2BXGhl%2FkaFZ5cGimVuquPkpCwOrDDqtWLzVBNvF4xgS%2BBldI2XACAqWP6JB9Ff2WfwR85SUFxOM1jCbvRWIaOzI%2FqmDTpGaickDKjQPVyFTkEXt%2BcopFYiMvjoznHQrbLgbenP1y4sgsGRJNPfLrs8YOmj7oi%2BR%2B0iAoBZUzM0PJ6pGH%2B15FhYjbq6%2BTsAxcPdJXUOSJBZ%2FX3aWJcfj41Qhr4vCbxpDnBScuNddzW9yyu5umhRo%2FxHdrrvR4bTk7iWWiZEX%2B8a9yI%2BdB8l3We3DQpx%2BM7h7GgP4bTSrbIn%2FDmfo6z7Psg%2FjdyhMy9O1Uy5uBre3R1Ys8KZvg4SFRhmD4h2XRywHjFYuPKcO9YgFZr6LNPkVXvTEYbKYu78c7Ksp7hBfKWogwj4%2FHygY6pgHNs0vP5VuADCNsMat49YaKLkMM1SSgk0%2FZoBsfGKhgixGFdCMJCUkgaxEgYGmHIcczoVYCmzPi2ZODLilo4ZbPcaYs1Y2OqVuT%2Fsncx05WvCdH7QqN02QQLYdmhTOf0wgmirA%2Fii1aWfLSgXJd4YTAyZYJGajfe%2Fs20azEsWRjxCLOKjubRPoUHbsJ0uDCilHXGuFcV1TRb2gXOI9Nuk3nDhk8M7q8&X-Amz-Signature=3ea791cd5832d7ce51e111574b2f060b4c9b8e455ef7f34f14d6d6ed32aabf50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623GWAADB%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDA0U4nIUMRb4Qcq%2BNHtg4B23noVP5xcXAd9BHAcr1oHAiAtMjByQAZEccfbtg7nZWFJGnT1WxOmmvSnmT8HR6489yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8LWQCAv5EhcvG4B5KtwD4aIMB9Lc%2FGjWMv%2FoXBEQZV9MUfaViJJNfKZUWIC%2BUR6UHQuhDL1SWFQbsSvwZLWrDcDLj%2Fmr%2BMAeWFcKxxPAaEZrRNq%2FEo5OSjT3uFvkCSmBAhS5tjIQP%2FvFQUMKeLDvmRSQjfccbbrbNU7diArLeNamXIAWEXDpbJc6lSJc%2F6hMv7iSm1fuCc3f8cTvegs2ctfMDUNc2s87jnC52g7UnTEyaR6l%2FNY0RAlbizcnu1v9gQg3Z%2BXGhl%2FkaFZ5cGimVuquPkpCwOrDDqtWLzVBNvF4xgS%2BBldI2XACAqWP6JB9Ff2WfwR85SUFxOM1jCbvRWIaOzI%2FqmDTpGaickDKjQPVyFTkEXt%2BcopFYiMvjoznHQrbLgbenP1y4sgsGRJNPfLrs8YOmj7oi%2BR%2B0iAoBZUzM0PJ6pGH%2B15FhYjbq6%2BTsAxcPdJXUOSJBZ%2FX3aWJcfj41Qhr4vCbxpDnBScuNddzW9yyu5umhRo%2FxHdrrvR4bTk7iWWiZEX%2B8a9yI%2BdB8l3We3DQpx%2BM7h7GgP4bTSrbIn%2FDmfo6z7Psg%2FjdyhMy9O1Uy5uBre3R1Ys8KZvg4SFRhmD4h2XRywHjFYuPKcO9YgFZr6LNPkVXvTEYbKYu78c7Ksp7hBfKWogwj4%2FHygY6pgHNs0vP5VuADCNsMat49YaKLkMM1SSgk0%2FZoBsfGKhgixGFdCMJCUkgaxEgYGmHIcczoVYCmzPi2ZODLilo4ZbPcaYs1Y2OqVuT%2Fsncx05WvCdH7QqN02QQLYdmhTOf0wgmirA%2Fii1aWfLSgXJd4YTAyZYJGajfe%2Fs20azEsWRjxCLOKjubRPoUHbsJ0uDCilHXGuFcV1TRb2gXOI9Nuk3nDhk8M7q8&X-Amz-Signature=b29deca6efecc56b61c9bf4dae47f58a255dac34345bb89dccd15eaa65a8e351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG5PNWAT%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaybRKMrznvNBU%2Fab3s1mpsZVtMxniwZ1HZYNylY%2F%2FIAiBcDQJS1XOrrlCsbFEmAQ5PdyyM18qz1nOrcj1VoqyEhSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlIaFMdISyC87XimHKtwDpVf1Vv5j1Lm9iKwqlP722%2F9wTv2YpsZRvXcPppnY7ZrXqNW0iGCMTwFhTJYfPrU0fnui5pXqYtuXluht9oQYRKaj4TZorTVIkHRMg4J4Pu9%2FjQduL8fMXp4or%2B7tmIDcqlAaVxQv%2BsM8%2BspXbG%2FLPKw4%2FqBK6YoLFBlfja59mGcX9kkMmUzA%2FQWQOj7z3eO5OvbsIgHxL0kX%2B1ZaMgRFWk0RIIkYGfBvSOfW7XoL02noeTs3S0aRnrPSHuSn7pmu2WaQ2Hk4%2BP6%2FqdtW78Rc9YZ94AkqsKdb5c9Jz0wlF3rLsKmVCQfjxU6U4bWs7vo6nw%2BjB0b3wJSd%2BIsmcw3jUoRTfjsE8hu9LK3Hb0ECseJf3TPTO0Dh78hYZaLXnCp2tz4rHRmmiE%2FLe9TjdGjgGyqpmQW2Vrev%2FhxAAg7YAtDUmgYLse2Nj4EB6qz3%2Bn4UEfFhMEoF%2BUFcFP7Xuk%2BdzKIfI1rplZjgXas6wnhJzerMcmHIbkb86Zp0iNkpI%2BAxLtVJcVUgbpVFsr3d9pXE1LyLAt5zheeSk5TobydjAa9fwR4ETX4rd%2BhaRcf56%2BQZDcfI4UzgbMVI849kFz7FhDGNJkhDhvPF47wp6ftL6DRv3OBCA5dwUuN4M2ww75LHygY6pgEyFW1EVkXmV%2B9kd9qyAdIZWrrvrZJ4lXspVlMMd0PqtgPFWiudqrGkv1pqHsoIIl1Kcbo5niVP11auypsoinZxVeWe9EMX94EVv8qYbcWilyVBdF7GobN6CZ35snX%2FnNTnN9Id78tq3AZrJOwLkvgBf%2BS7c5GPC8kU1ALYDtb0SXynDRrRO5SeTggPf%2FRTYlwPNzBSTWmU8VMlRq9HPL4adge9sZEC&X-Amz-Signature=ee47eb757886f10193d5ab778cc6cee4e64a427639a23f9465f95f639894e323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG5PNWAT%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaybRKMrznvNBU%2Fab3s1mpsZVtMxniwZ1HZYNylY%2F%2FIAiBcDQJS1XOrrlCsbFEmAQ5PdyyM18qz1nOrcj1VoqyEhSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlIaFMdISyC87XimHKtwDpVf1Vv5j1Lm9iKwqlP722%2F9wTv2YpsZRvXcPppnY7ZrXqNW0iGCMTwFhTJYfPrU0fnui5pXqYtuXluht9oQYRKaj4TZorTVIkHRMg4J4Pu9%2FjQduL8fMXp4or%2B7tmIDcqlAaVxQv%2BsM8%2BspXbG%2FLPKw4%2FqBK6YoLFBlfja59mGcX9kkMmUzA%2FQWQOj7z3eO5OvbsIgHxL0kX%2B1ZaMgRFWk0RIIkYGfBvSOfW7XoL02noeTs3S0aRnrPSHuSn7pmu2WaQ2Hk4%2BP6%2FqdtW78Rc9YZ94AkqsKdb5c9Jz0wlF3rLsKmVCQfjxU6U4bWs7vo6nw%2BjB0b3wJSd%2BIsmcw3jUoRTfjsE8hu9LK3Hb0ECseJf3TPTO0Dh78hYZaLXnCp2tz4rHRmmiE%2FLe9TjdGjgGyqpmQW2Vrev%2FhxAAg7YAtDUmgYLse2Nj4EB6qz3%2Bn4UEfFhMEoF%2BUFcFP7Xuk%2BdzKIfI1rplZjgXas6wnhJzerMcmHIbkb86Zp0iNkpI%2BAxLtVJcVUgbpVFsr3d9pXE1LyLAt5zheeSk5TobydjAa9fwR4ETX4rd%2BhaRcf56%2BQZDcfI4UzgbMVI849kFz7FhDGNJkhDhvPF47wp6ftL6DRv3OBCA5dwUuN4M2ww75LHygY6pgEyFW1EVkXmV%2B9kd9qyAdIZWrrvrZJ4lXspVlMMd0PqtgPFWiudqrGkv1pqHsoIIl1Kcbo5niVP11auypsoinZxVeWe9EMX94EVv8qYbcWilyVBdF7GobN6CZ35snX%2FnNTnN9Id78tq3AZrJOwLkvgBf%2BS7c5GPC8kU1ALYDtb0SXynDRrRO5SeTggPf%2FRTYlwPNzBSTWmU8VMlRq9HPL4adge9sZEC&X-Amz-Signature=90279d1884685ef84c8ea90c8935c78733ce48b7b8e4eaa42cc8252d249c6664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG5PNWAT%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaybRKMrznvNBU%2Fab3s1mpsZVtMxniwZ1HZYNylY%2F%2FIAiBcDQJS1XOrrlCsbFEmAQ5PdyyM18qz1nOrcj1VoqyEhSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlIaFMdISyC87XimHKtwDpVf1Vv5j1Lm9iKwqlP722%2F9wTv2YpsZRvXcPppnY7ZrXqNW0iGCMTwFhTJYfPrU0fnui5pXqYtuXluht9oQYRKaj4TZorTVIkHRMg4J4Pu9%2FjQduL8fMXp4or%2B7tmIDcqlAaVxQv%2BsM8%2BspXbG%2FLPKw4%2FqBK6YoLFBlfja59mGcX9kkMmUzA%2FQWQOj7z3eO5OvbsIgHxL0kX%2B1ZaMgRFWk0RIIkYGfBvSOfW7XoL02noeTs3S0aRnrPSHuSn7pmu2WaQ2Hk4%2BP6%2FqdtW78Rc9YZ94AkqsKdb5c9Jz0wlF3rLsKmVCQfjxU6U4bWs7vo6nw%2BjB0b3wJSd%2BIsmcw3jUoRTfjsE8hu9LK3Hb0ECseJf3TPTO0Dh78hYZaLXnCp2tz4rHRmmiE%2FLe9TjdGjgGyqpmQW2Vrev%2FhxAAg7YAtDUmgYLse2Nj4EB6qz3%2Bn4UEfFhMEoF%2BUFcFP7Xuk%2BdzKIfI1rplZjgXas6wnhJzerMcmHIbkb86Zp0iNkpI%2BAxLtVJcVUgbpVFsr3d9pXE1LyLAt5zheeSk5TobydjAa9fwR4ETX4rd%2BhaRcf56%2BQZDcfI4UzgbMVI849kFz7FhDGNJkhDhvPF47wp6ftL6DRv3OBCA5dwUuN4M2ww75LHygY6pgEyFW1EVkXmV%2B9kd9qyAdIZWrrvrZJ4lXspVlMMd0PqtgPFWiudqrGkv1pqHsoIIl1Kcbo5niVP11auypsoinZxVeWe9EMX94EVv8qYbcWilyVBdF7GobN6CZ35snX%2FnNTnN9Id78tq3AZrJOwLkvgBf%2BS7c5GPC8kU1ALYDtb0SXynDRrRO5SeTggPf%2FRTYlwPNzBSTWmU8VMlRq9HPL4adge9sZEC&X-Amz-Signature=bdb1cb547b9ac8bc08ecc2f3d1171cc4ae7fc2d55e3f83598503dbb71320f9e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG5PNWAT%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaybRKMrznvNBU%2Fab3s1mpsZVtMxniwZ1HZYNylY%2F%2FIAiBcDQJS1XOrrlCsbFEmAQ5PdyyM18qz1nOrcj1VoqyEhSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlIaFMdISyC87XimHKtwDpVf1Vv5j1Lm9iKwqlP722%2F9wTv2YpsZRvXcPppnY7ZrXqNW0iGCMTwFhTJYfPrU0fnui5pXqYtuXluht9oQYRKaj4TZorTVIkHRMg4J4Pu9%2FjQduL8fMXp4or%2B7tmIDcqlAaVxQv%2BsM8%2BspXbG%2FLPKw4%2FqBK6YoLFBlfja59mGcX9kkMmUzA%2FQWQOj7z3eO5OvbsIgHxL0kX%2B1ZaMgRFWk0RIIkYGfBvSOfW7XoL02noeTs3S0aRnrPSHuSn7pmu2WaQ2Hk4%2BP6%2FqdtW78Rc9YZ94AkqsKdb5c9Jz0wlF3rLsKmVCQfjxU6U4bWs7vo6nw%2BjB0b3wJSd%2BIsmcw3jUoRTfjsE8hu9LK3Hb0ECseJf3TPTO0Dh78hYZaLXnCp2tz4rHRmmiE%2FLe9TjdGjgGyqpmQW2Vrev%2FhxAAg7YAtDUmgYLse2Nj4EB6qz3%2Bn4UEfFhMEoF%2BUFcFP7Xuk%2BdzKIfI1rplZjgXas6wnhJzerMcmHIbkb86Zp0iNkpI%2BAxLtVJcVUgbpVFsr3d9pXE1LyLAt5zheeSk5TobydjAa9fwR4ETX4rd%2BhaRcf56%2BQZDcfI4UzgbMVI849kFz7FhDGNJkhDhvPF47wp6ftL6DRv3OBCA5dwUuN4M2ww75LHygY6pgEyFW1EVkXmV%2B9kd9qyAdIZWrrvrZJ4lXspVlMMd0PqtgPFWiudqrGkv1pqHsoIIl1Kcbo5niVP11auypsoinZxVeWe9EMX94EVv8qYbcWilyVBdF7GobN6CZ35snX%2FnNTnN9Id78tq3AZrJOwLkvgBf%2BS7c5GPC8kU1ALYDtb0SXynDRrRO5SeTggPf%2FRTYlwPNzBSTWmU8VMlRq9HPL4adge9sZEC&X-Amz-Signature=f23ad748717e6b9ac438472dec087976f80498b278285175a5969ce7377b1754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG5PNWAT%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaybRKMrznvNBU%2Fab3s1mpsZVtMxniwZ1HZYNylY%2F%2FIAiBcDQJS1XOrrlCsbFEmAQ5PdyyM18qz1nOrcj1VoqyEhSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlIaFMdISyC87XimHKtwDpVf1Vv5j1Lm9iKwqlP722%2F9wTv2YpsZRvXcPppnY7ZrXqNW0iGCMTwFhTJYfPrU0fnui5pXqYtuXluht9oQYRKaj4TZorTVIkHRMg4J4Pu9%2FjQduL8fMXp4or%2B7tmIDcqlAaVxQv%2BsM8%2BspXbG%2FLPKw4%2FqBK6YoLFBlfja59mGcX9kkMmUzA%2FQWQOj7z3eO5OvbsIgHxL0kX%2B1ZaMgRFWk0RIIkYGfBvSOfW7XoL02noeTs3S0aRnrPSHuSn7pmu2WaQ2Hk4%2BP6%2FqdtW78Rc9YZ94AkqsKdb5c9Jz0wlF3rLsKmVCQfjxU6U4bWs7vo6nw%2BjB0b3wJSd%2BIsmcw3jUoRTfjsE8hu9LK3Hb0ECseJf3TPTO0Dh78hYZaLXnCp2tz4rHRmmiE%2FLe9TjdGjgGyqpmQW2Vrev%2FhxAAg7YAtDUmgYLse2Nj4EB6qz3%2Bn4UEfFhMEoF%2BUFcFP7Xuk%2BdzKIfI1rplZjgXas6wnhJzerMcmHIbkb86Zp0iNkpI%2BAxLtVJcVUgbpVFsr3d9pXE1LyLAt5zheeSk5TobydjAa9fwR4ETX4rd%2BhaRcf56%2BQZDcfI4UzgbMVI849kFz7FhDGNJkhDhvPF47wp6ftL6DRv3OBCA5dwUuN4M2ww75LHygY6pgEyFW1EVkXmV%2B9kd9qyAdIZWrrvrZJ4lXspVlMMd0PqtgPFWiudqrGkv1pqHsoIIl1Kcbo5niVP11auypsoinZxVeWe9EMX94EVv8qYbcWilyVBdF7GobN6CZ35snX%2FnNTnN9Id78tq3AZrJOwLkvgBf%2BS7c5GPC8kU1ALYDtb0SXynDRrRO5SeTggPf%2FRTYlwPNzBSTWmU8VMlRq9HPL4adge9sZEC&X-Amz-Signature=a976b5ca34e442a81867a12e8236d36768f46d7f2d111091ff254b8263403f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKX6OIB3%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0WZNiGIA1p9eeQ%2FNHbix62KJ4PVY37QF2qEZmOpFlUAiA4woVKil5F0yIA32alhy%2FiKLl49D6syOna9t8HLZlYBiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNeG4p%2FW9xBRhC1rQKtwDnMProukzR8bNr%2Fyakk4M61hN3rjuQyy1Kg1konqjX5THk03vbQrPojh6q64wALnGyZsj%2BPXXILbIE9fQR1D9wIQedZdWoym%2BP6mp41JjE7eYD7NKJ6zhFdgqBEoVv%2FhdEGxZxJxl40jZXf8yLh1lkJeFfgprSix7nPQLApef7oK78DL6KzgNRAU%2BWLvcgvf3M0A092IY9paP0tKH7QqRsszMBW6sNrgisfWw7%2BkmHeSfk%2BG%2Fl4a%2FBGHuJ0fCvQbLwSCBmTWy%2BQ6hGXUgqnXdtCN4nfHWyfTRodXFrbO4qpWE4U8f7YDXlw%2Fg%2F%2BGnSaQBZ5YIVLX2A3GCGXbePbxLzhZTUutqGvLPmu20J91L1XGpJzqsbFijhaUOWPgOdOjeicfbE39lhHNU%2B1t0LpIj9NesNuvATg6aLM%2FS2NuxiHnCmVF2HrO4GmdIM9Um6ZMKT3ZSsuDxmt966eN8MXpwbaAVhPySpzi%2BS7IXme%2BsCAeFb7vOnBKngmzU0kV2uJN8syCPoGAn7B9S5Ixem1lhYEYqxOOOkn1MJesQ9i3HCyCeImV6nFnZ13wIEkPJa8DaFjd7oHi6hAsqgPxvQcuHPbv0x39%2B8VqxMuMkzJEPg1%2Beu75vhNS%2BuvKBDmkwkpHHygY6pgEtj4sFZ0miT7FfjeaID6RkyW1Hbe1owSgjJ9vYJzNLjjND7bKdFiPqAn8huPUVMGTWFNDZhSB7YxcDinbpfISHeJRbmnM6ei6XSNkEAaA3j8SutyEdQaGZfVq%2FQ8HR3IqBupyllmbHWrTo%2FYYjiOEB0a2t83d%2B%2BFUcC1Dj4VR3zaBHlYzFa%2FARQ6xiIAfUjX9u85k4U04jxQW5HEJFbTAgLEA1sVPy&X-Amz-Signature=d1c4ef42ff797fb9c7baaccdda9623602098767770376175844cab6c3c0614e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKX6OIB3%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0WZNiGIA1p9eeQ%2FNHbix62KJ4PVY37QF2qEZmOpFlUAiA4woVKil5F0yIA32alhy%2FiKLl49D6syOna9t8HLZlYBiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNeG4p%2FW9xBRhC1rQKtwDnMProukzR8bNr%2Fyakk4M61hN3rjuQyy1Kg1konqjX5THk03vbQrPojh6q64wALnGyZsj%2BPXXILbIE9fQR1D9wIQedZdWoym%2BP6mp41JjE7eYD7NKJ6zhFdgqBEoVv%2FhdEGxZxJxl40jZXf8yLh1lkJeFfgprSix7nPQLApef7oK78DL6KzgNRAU%2BWLvcgvf3M0A092IY9paP0tKH7QqRsszMBW6sNrgisfWw7%2BkmHeSfk%2BG%2Fl4a%2FBGHuJ0fCvQbLwSCBmTWy%2BQ6hGXUgqnXdtCN4nfHWyfTRodXFrbO4qpWE4U8f7YDXlw%2Fg%2F%2BGnSaQBZ5YIVLX2A3GCGXbePbxLzhZTUutqGvLPmu20J91L1XGpJzqsbFijhaUOWPgOdOjeicfbE39lhHNU%2B1t0LpIj9NesNuvATg6aLM%2FS2NuxiHnCmVF2HrO4GmdIM9Um6ZMKT3ZSsuDxmt966eN8MXpwbaAVhPySpzi%2BS7IXme%2BsCAeFb7vOnBKngmzU0kV2uJN8syCPoGAn7B9S5Ixem1lhYEYqxOOOkn1MJesQ9i3HCyCeImV6nFnZ13wIEkPJa8DaFjd7oHi6hAsqgPxvQcuHPbv0x39%2B8VqxMuMkzJEPg1%2Beu75vhNS%2BuvKBDmkwkpHHygY6pgEtj4sFZ0miT7FfjeaID6RkyW1Hbe1owSgjJ9vYJzNLjjND7bKdFiPqAn8huPUVMGTWFNDZhSB7YxcDinbpfISHeJRbmnM6ei6XSNkEAaA3j8SutyEdQaGZfVq%2FQ8HR3IqBupyllmbHWrTo%2FYYjiOEB0a2t83d%2B%2BFUcC1Dj4VR3zaBHlYzFa%2FARQ6xiIAfUjX9u85k4U04jxQW5HEJFbTAgLEA1sVPy&X-Amz-Signature=6b4cb4ff0032c3573dd79161084d5903252a81200020f9a21eedde693604f6f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKX6OIB3%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0WZNiGIA1p9eeQ%2FNHbix62KJ4PVY37QF2qEZmOpFlUAiA4woVKil5F0yIA32alhy%2FiKLl49D6syOna9t8HLZlYBiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNeG4p%2FW9xBRhC1rQKtwDnMProukzR8bNr%2Fyakk4M61hN3rjuQyy1Kg1konqjX5THk03vbQrPojh6q64wALnGyZsj%2BPXXILbIE9fQR1D9wIQedZdWoym%2BP6mp41JjE7eYD7NKJ6zhFdgqBEoVv%2FhdEGxZxJxl40jZXf8yLh1lkJeFfgprSix7nPQLApef7oK78DL6KzgNRAU%2BWLvcgvf3M0A092IY9paP0tKH7QqRsszMBW6sNrgisfWw7%2BkmHeSfk%2BG%2Fl4a%2FBGHuJ0fCvQbLwSCBmTWy%2BQ6hGXUgqnXdtCN4nfHWyfTRodXFrbO4qpWE4U8f7YDXlw%2Fg%2F%2BGnSaQBZ5YIVLX2A3GCGXbePbxLzhZTUutqGvLPmu20J91L1XGpJzqsbFijhaUOWPgOdOjeicfbE39lhHNU%2B1t0LpIj9NesNuvATg6aLM%2FS2NuxiHnCmVF2HrO4GmdIM9Um6ZMKT3ZSsuDxmt966eN8MXpwbaAVhPySpzi%2BS7IXme%2BsCAeFb7vOnBKngmzU0kV2uJN8syCPoGAn7B9S5Ixem1lhYEYqxOOOkn1MJesQ9i3HCyCeImV6nFnZ13wIEkPJa8DaFjd7oHi6hAsqgPxvQcuHPbv0x39%2B8VqxMuMkzJEPg1%2Beu75vhNS%2BuvKBDmkwkpHHygY6pgEtj4sFZ0miT7FfjeaID6RkyW1Hbe1owSgjJ9vYJzNLjjND7bKdFiPqAn8huPUVMGTWFNDZhSB7YxcDinbpfISHeJRbmnM6ei6XSNkEAaA3j8SutyEdQaGZfVq%2FQ8HR3IqBupyllmbHWrTo%2FYYjiOEB0a2t83d%2B%2BFUcC1Dj4VR3zaBHlYzFa%2FARQ6xiIAfUjX9u85k4U04jxQW5HEJFbTAgLEA1sVPy&X-Amz-Signature=2ed901cb69a3b724837c7ddbda81523db75ec0c7b58e352e65466320c7713cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP5XI2ZF%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHhnhUmup8KlPPwh2oRCZ46IbEIqKOvO1gvEEcqkY31wIhAOKFl9ufKZGfoRcXuHG27j64Z%2B5P9RXlM1S8%2FsSo9rOEKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV%2FQfU4ozTYO2aFqQq3AOH1YR5HeaxhYP3TNlQP9II5PtlnSTx4TmZGYz8RFQn41sFuPjWpV7juVkGh%2Bx0Ag9%2FyO3vEtPVyiNUse6D8LnwfvaPyR1EWgTyvKbGw6o2t4RndjjF2MUTDcn2y%2FPVutA965A%2Bz1VrXzKh8VdQTwetV7Jc%2FG36B0YELnMmRv7gv%2FIheiRor3rrOqHb6a4Hz8oiB2vlwRK9tqnmk2lz2QHx2pTx4c37qYUBfk1q1u6SLEC9oqona6Q6VN70Tfy%2FlIfpCMrWCEBV6fSEeW8eI%2BzRMU2rnZMD7XC0u9TX1jKad4TI8lWWbVNzKY4X8TJWhZrnAJvzzoD38EuhuznJ6sMbBCaRH%2FRjsXZBYOfJ83U7iIuuK1gDjP%2ByKMbxLw%2FcozGww9KOjtbMTtD7zC05voqdes5ZuZ5lDdMaVwHAFGGvOBfeUpROj6c8vIkEPOcgwwPcIBvaXDd%2BI3pw08CRR2rSj%2Bk7OjupAWGfe5rSYxPN6ky%2FcRS2%2FyqZHl38oPP01VvkVwyfEKS5v01T98AaTimtlczdPONkLKpvLBdJsHHtz5WmycioRikjsCX3ZujvC9yu%2F7WwfPWGlFSXoYNl5rhPoAr2QIwclq5xXYvBzegmVZH3WY20PnWSbwBX%2BTDcisfKBjqkASEBVwuVTKamYOuq90%2FYKsYKcD6tPvsZTUsKdpq9ZFXpEjZYn84HV%2BXqxMUpmSI8Wt4IVwCcaJtBTndSq%2BseRdz%2FWAmCPGdMnPYLuuitlGQKubmStNAXOmh9nUBk721MMPKpKGHOQeaH6Rz5%2BnZrkXcq8F5IoPOWxdsPxyogaBTYlrgvTPonp8WlGw%2BznGxbrfrWyyMUugz%2BKsimBI4e3jkyMnAP&X-Amz-Signature=d408be095e9e9c60f797ad54cc75a138cabc89f5acfce82fbadf067f4169e173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP5XI2ZF%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHhnhUmup8KlPPwh2oRCZ46IbEIqKOvO1gvEEcqkY31wIhAOKFl9ufKZGfoRcXuHG27j64Z%2B5P9RXlM1S8%2FsSo9rOEKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV%2FQfU4ozTYO2aFqQq3AOH1YR5HeaxhYP3TNlQP9II5PtlnSTx4TmZGYz8RFQn41sFuPjWpV7juVkGh%2Bx0Ag9%2FyO3vEtPVyiNUse6D8LnwfvaPyR1EWgTyvKbGw6o2t4RndjjF2MUTDcn2y%2FPVutA965A%2Bz1VrXzKh8VdQTwetV7Jc%2FG36B0YELnMmRv7gv%2FIheiRor3rrOqHb6a4Hz8oiB2vlwRK9tqnmk2lz2QHx2pTx4c37qYUBfk1q1u6SLEC9oqona6Q6VN70Tfy%2FlIfpCMrWCEBV6fSEeW8eI%2BzRMU2rnZMD7XC0u9TX1jKad4TI8lWWbVNzKY4X8TJWhZrnAJvzzoD38EuhuznJ6sMbBCaRH%2FRjsXZBYOfJ83U7iIuuK1gDjP%2ByKMbxLw%2FcozGww9KOjtbMTtD7zC05voqdes5ZuZ5lDdMaVwHAFGGvOBfeUpROj6c8vIkEPOcgwwPcIBvaXDd%2BI3pw08CRR2rSj%2Bk7OjupAWGfe5rSYxPN6ky%2FcRS2%2FyqZHl38oPP01VvkVwyfEKS5v01T98AaTimtlczdPONkLKpvLBdJsHHtz5WmycioRikjsCX3ZujvC9yu%2F7WwfPWGlFSXoYNl5rhPoAr2QIwclq5xXYvBzegmVZH3WY20PnWSbwBX%2BTDcisfKBjqkASEBVwuVTKamYOuq90%2FYKsYKcD6tPvsZTUsKdpq9ZFXpEjZYn84HV%2BXqxMUpmSI8Wt4IVwCcaJtBTndSq%2BseRdz%2FWAmCPGdMnPYLuuitlGQKubmStNAXOmh9nUBk721MMPKpKGHOQeaH6Rz5%2BnZrkXcq8F5IoPOWxdsPxyogaBTYlrgvTPonp8WlGw%2BznGxbrfrWyyMUugz%2BKsimBI4e3jkyMnAP&X-Amz-Signature=136b1af74cd04c40d97127d5ae258a86141bd1804d5f9ca56533bdaeefc27997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LSMWKCA%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7bXwzuLuizUoyRvElaAfpeTXlGeSxy3tslwCCCTvUuAiBMiOoeK5EmxXCuAzvropWnbQwyrgv1F78%2BjE4N1KGg3iqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrxhobNlA5lANv3%2BzKtwDzxLUXEM7zVgnjAWxm0TlZKW2FwV1FgabgXrM81vRRblh7lZme6Acz4HLBOz6wG8ybvgQi1gmQd2kb9Lfr6zmLfZ8DFPYExGrea4LO%2B%2F%2FgnZEy4uCUUr3yJ4CB%2FxNeOculdblvueYz44jrx2N6n68inkX14exjNQmRDV9qIT5PZg5gSP49hJ6EzltDIJvPJ4SgrlCPlWBWleDL2UHBPcDh8NuNeELUFxGOV819Bzz4jo%2B%2BjNhQ2EHaUFLoFL6Iix7jrC%2BtObr493a%2FhyBsdvQPFTyT%2BeUB2bwdxx8OAGCrgJaiM7BS%2FUr9M8J6eIFHNQdgJMKJtJjFJW%2FSMVtlzx1%2ByuvdlaYgyUBaH1zz7S6e%2FaGEtMkqm%2FRxyW7QJ0%2BKF8da2akN3QyzdeSqhx0W2sKPb0GlVb3GbyiHe8rHLDG%2FJ3F3OwwiAziDqcCzdFpW49SmjuuX6ddDvpqT0LW0kaDTHxzYMVm69Y4kOOVNKfpypiUs7yJ02dsgsOUskRuIXKQUNLX9%2F45lCiuewIhTMU34MONntJzQFEfNZ3HClOjcr1B5tqk%2FW%2FE8f20p9HCKRtJCX2F7OxF5H7k5KVnEJkZXmyBT9WIKAZUxZ%2FIcDEg1zcnnIhtgwEKs3z4BR4w24nHygY6pgHvg5oqfiimBgfCpXsNw1KF5qvEarncTSLYc5Temy7E5HgquzhQbh8klMQ3aJZeB5UTAlzxSOztw94f5yDejPXAvuB8VPqpoi4QiEe%2BVL5amPlayYzYZQc5TkyaaGmkRqtieuua9mlsfcooJVQO5BYhXl%2B1Ydf2%2FzOrg3YtK4L9tPs1ddvqZZlyCqHv5lnx%2BSz3zX4rLC1jS7O8jShN%2BIt3Hl8NrrhT&X-Amz-Signature=029a2261b57e564dbf65e3c8002eb4910c47e697b07d833da1ae6d99a9d5de08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LSMWKCA%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7bXwzuLuizUoyRvElaAfpeTXlGeSxy3tslwCCCTvUuAiBMiOoeK5EmxXCuAzvropWnbQwyrgv1F78%2BjE4N1KGg3iqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrxhobNlA5lANv3%2BzKtwDzxLUXEM7zVgnjAWxm0TlZKW2FwV1FgabgXrM81vRRblh7lZme6Acz4HLBOz6wG8ybvgQi1gmQd2kb9Lfr6zmLfZ8DFPYExGrea4LO%2B%2F%2FgnZEy4uCUUr3yJ4CB%2FxNeOculdblvueYz44jrx2N6n68inkX14exjNQmRDV9qIT5PZg5gSP49hJ6EzltDIJvPJ4SgrlCPlWBWleDL2UHBPcDh8NuNeELUFxGOV819Bzz4jo%2B%2BjNhQ2EHaUFLoFL6Iix7jrC%2BtObr493a%2FhyBsdvQPFTyT%2BeUB2bwdxx8OAGCrgJaiM7BS%2FUr9M8J6eIFHNQdgJMKJtJjFJW%2FSMVtlzx1%2ByuvdlaYgyUBaH1zz7S6e%2FaGEtMkqm%2FRxyW7QJ0%2BKF8da2akN3QyzdeSqhx0W2sKPb0GlVb3GbyiHe8rHLDG%2FJ3F3OwwiAziDqcCzdFpW49SmjuuX6ddDvpqT0LW0kaDTHxzYMVm69Y4kOOVNKfpypiUs7yJ02dsgsOUskRuIXKQUNLX9%2F45lCiuewIhTMU34MONntJzQFEfNZ3HClOjcr1B5tqk%2FW%2FE8f20p9HCKRtJCX2F7OxF5H7k5KVnEJkZXmyBT9WIKAZUxZ%2FIcDEg1zcnnIhtgwEKs3z4BR4w24nHygY6pgHvg5oqfiimBgfCpXsNw1KF5qvEarncTSLYc5Temy7E5HgquzhQbh8klMQ3aJZeB5UTAlzxSOztw94f5yDejPXAvuB8VPqpoi4QiEe%2BVL5amPlayYzYZQc5TkyaaGmkRqtieuua9mlsfcooJVQO5BYhXl%2B1Ydf2%2FzOrg3YtK4L9tPs1ddvqZZlyCqHv5lnx%2BSz3zX4rLC1jS7O8jShN%2BIt3Hl8NrrhT&X-Amz-Signature=0b16f1aab51b579f2d938eb2b0ae2c2d1e1bc6be099d7a5397bdcdf350786138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LSMWKCA%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7bXwzuLuizUoyRvElaAfpeTXlGeSxy3tslwCCCTvUuAiBMiOoeK5EmxXCuAzvropWnbQwyrgv1F78%2BjE4N1KGg3iqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrxhobNlA5lANv3%2BzKtwDzxLUXEM7zVgnjAWxm0TlZKW2FwV1FgabgXrM81vRRblh7lZme6Acz4HLBOz6wG8ybvgQi1gmQd2kb9Lfr6zmLfZ8DFPYExGrea4LO%2B%2F%2FgnZEy4uCUUr3yJ4CB%2FxNeOculdblvueYz44jrx2N6n68inkX14exjNQmRDV9qIT5PZg5gSP49hJ6EzltDIJvPJ4SgrlCPlWBWleDL2UHBPcDh8NuNeELUFxGOV819Bzz4jo%2B%2BjNhQ2EHaUFLoFL6Iix7jrC%2BtObr493a%2FhyBsdvQPFTyT%2BeUB2bwdxx8OAGCrgJaiM7BS%2FUr9M8J6eIFHNQdgJMKJtJjFJW%2FSMVtlzx1%2ByuvdlaYgyUBaH1zz7S6e%2FaGEtMkqm%2FRxyW7QJ0%2BKF8da2akN3QyzdeSqhx0W2sKPb0GlVb3GbyiHe8rHLDG%2FJ3F3OwwiAziDqcCzdFpW49SmjuuX6ddDvpqT0LW0kaDTHxzYMVm69Y4kOOVNKfpypiUs7yJ02dsgsOUskRuIXKQUNLX9%2F45lCiuewIhTMU34MONntJzQFEfNZ3HClOjcr1B5tqk%2FW%2FE8f20p9HCKRtJCX2F7OxF5H7k5KVnEJkZXmyBT9WIKAZUxZ%2FIcDEg1zcnnIhtgwEKs3z4BR4w24nHygY6pgHvg5oqfiimBgfCpXsNw1KF5qvEarncTSLYc5Temy7E5HgquzhQbh8klMQ3aJZeB5UTAlzxSOztw94f5yDejPXAvuB8VPqpoi4QiEe%2BVL5amPlayYzYZQc5TkyaaGmkRqtieuua9mlsfcooJVQO5BYhXl%2B1Ydf2%2FzOrg3YtK4L9tPs1ddvqZZlyCqHv5lnx%2BSz3zX4rLC1jS7O8jShN%2BIt3Hl8NrrhT&X-Amz-Signature=306719304bc8630bf1558283a09fe7dbc5db6b040c8b5804242abdbbc95397e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LSMWKCA%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7bXwzuLuizUoyRvElaAfpeTXlGeSxy3tslwCCCTvUuAiBMiOoeK5EmxXCuAzvropWnbQwyrgv1F78%2BjE4N1KGg3iqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrxhobNlA5lANv3%2BzKtwDzxLUXEM7zVgnjAWxm0TlZKW2FwV1FgabgXrM81vRRblh7lZme6Acz4HLBOz6wG8ybvgQi1gmQd2kb9Lfr6zmLfZ8DFPYExGrea4LO%2B%2F%2FgnZEy4uCUUr3yJ4CB%2FxNeOculdblvueYz44jrx2N6n68inkX14exjNQmRDV9qIT5PZg5gSP49hJ6EzltDIJvPJ4SgrlCPlWBWleDL2UHBPcDh8NuNeELUFxGOV819Bzz4jo%2B%2BjNhQ2EHaUFLoFL6Iix7jrC%2BtObr493a%2FhyBsdvQPFTyT%2BeUB2bwdxx8OAGCrgJaiM7BS%2FUr9M8J6eIFHNQdgJMKJtJjFJW%2FSMVtlzx1%2ByuvdlaYgyUBaH1zz7S6e%2FaGEtMkqm%2FRxyW7QJ0%2BKF8da2akN3QyzdeSqhx0W2sKPb0GlVb3GbyiHe8rHLDG%2FJ3F3OwwiAziDqcCzdFpW49SmjuuX6ddDvpqT0LW0kaDTHxzYMVm69Y4kOOVNKfpypiUs7yJ02dsgsOUskRuIXKQUNLX9%2F45lCiuewIhTMU34MONntJzQFEfNZ3HClOjcr1B5tqk%2FW%2FE8f20p9HCKRtJCX2F7OxF5H7k5KVnEJkZXmyBT9WIKAZUxZ%2FIcDEg1zcnnIhtgwEKs3z4BR4w24nHygY6pgHvg5oqfiimBgfCpXsNw1KF5qvEarncTSLYc5Temy7E5HgquzhQbh8klMQ3aJZeB5UTAlzxSOztw94f5yDejPXAvuB8VPqpoi4QiEe%2BVL5amPlayYzYZQc5TkyaaGmkRqtieuua9mlsfcooJVQO5BYhXl%2B1Ydf2%2FzOrg3YtK4L9tPs1ddvqZZlyCqHv5lnx%2BSz3zX4rLC1jS7O8jShN%2BIt3Hl8NrrhT&X-Amz-Signature=2d48ce60c6e87f62b0a0abe4f5a296a5e1449e6b3d012ebf4ce65e696703c02b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LSMWKCA%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7bXwzuLuizUoyRvElaAfpeTXlGeSxy3tslwCCCTvUuAiBMiOoeK5EmxXCuAzvropWnbQwyrgv1F78%2BjE4N1KGg3iqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrxhobNlA5lANv3%2BzKtwDzxLUXEM7zVgnjAWxm0TlZKW2FwV1FgabgXrM81vRRblh7lZme6Acz4HLBOz6wG8ybvgQi1gmQd2kb9Lfr6zmLfZ8DFPYExGrea4LO%2B%2F%2FgnZEy4uCUUr3yJ4CB%2FxNeOculdblvueYz44jrx2N6n68inkX14exjNQmRDV9qIT5PZg5gSP49hJ6EzltDIJvPJ4SgrlCPlWBWleDL2UHBPcDh8NuNeELUFxGOV819Bzz4jo%2B%2BjNhQ2EHaUFLoFL6Iix7jrC%2BtObr493a%2FhyBsdvQPFTyT%2BeUB2bwdxx8OAGCrgJaiM7BS%2FUr9M8J6eIFHNQdgJMKJtJjFJW%2FSMVtlzx1%2ByuvdlaYgyUBaH1zz7S6e%2FaGEtMkqm%2FRxyW7QJ0%2BKF8da2akN3QyzdeSqhx0W2sKPb0GlVb3GbyiHe8rHLDG%2FJ3F3OwwiAziDqcCzdFpW49SmjuuX6ddDvpqT0LW0kaDTHxzYMVm69Y4kOOVNKfpypiUs7yJ02dsgsOUskRuIXKQUNLX9%2F45lCiuewIhTMU34MONntJzQFEfNZ3HClOjcr1B5tqk%2FW%2FE8f20p9HCKRtJCX2F7OxF5H7k5KVnEJkZXmyBT9WIKAZUxZ%2FIcDEg1zcnnIhtgwEKs3z4BR4w24nHygY6pgHvg5oqfiimBgfCpXsNw1KF5qvEarncTSLYc5Temy7E5HgquzhQbh8klMQ3aJZeB5UTAlzxSOztw94f5yDejPXAvuB8VPqpoi4QiEe%2BVL5amPlayYzYZQc5TkyaaGmkRqtieuua9mlsfcooJVQO5BYhXl%2B1Ydf2%2FzOrg3YtK4L9tPs1ddvqZZlyCqHv5lnx%2BSz3zX4rLC1jS7O8jShN%2BIt3Hl8NrrhT&X-Amz-Signature=b9b5d72957a1f3584fc97c85feb256a38cc5d15576b651530084db7ac7eb1fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2KQALJ6%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T041642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFoIdMH%2FXEhCB%2FMeKNEeqNpVYzK9Hbda5lvURGqwgh7tAiEA93JaVZt45aDGIFsS7pe0XQiHV1lkmCWrKYxU1vynAyMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXo8rLNXo%2B7M%2BbpjCrcA7nkj%2B6wqWtUAEz7JaCvf1zeLijGlScMOd6jO0URDAapZkD52Qz4kztqiO9biIjfzfYjAr8eB0HQGq%2FcnAxCvpfxCUEM7d8c7bou%2FyyfezDAjWVyaQpQ6L9heeQ6D7Q6NzBZai%2FFQO15C0UNdlZwRqLLXUP80ueCJzmA2DeuMyaw%2BDopAUu3oU5tWcC5UStw5od9o7Ul23GrO%2B7mfdfQcuR7A9erf%2FSuObJ1xYfrSkE6bFt5WwOdvHgXTcwyJVuVI%2BoYZGRjdQUJNx%2FVaPkaD%2BaiJK7r24zmeYVBKvx6AKzYbdAyq3xyFsB9fPeQJahISIGGVfOidRpdT%2BzEoqSn25zct70YtZQt3QFLB%2BKQJOYn0PCHzD8%2BMGsWAQ42L%2FmECZ%2BpcU9zgwYaZZFPG5pfe10fnyRsvDGAEasIdyNCPZnme5iQUG6eFiRh%2FaYbi3ayz1yP7cy3xrBAwwJWQN0SnkXxsl7scXuosmNM9%2FvgbOGSy1HdFQDGATzbQkhJAOpPeNFM7XBAyoILnOmH2g76YHpyDdf3dz127oBypqyuxotdJ1zTjX9nj2k3ekBQeXOkzJUpMGOX%2BfHYHl0bpd8eAsCpOewARyNdscgLKvjSmpXxunEjjAWhy38NCoT0MMOOx8oGOqUBPBR3WfIJ3YWSYp4Ptl969G%2BMN7fGjvqCxj6VN%2BipJM092FBrM0yC23bybSmMS6MMEZaZT25tdigvyh3OfACRY%2FVgPtqxgoT6fWke4CHZpKHvLWoYDJShQ%2BSsdGxwVZjTkiYnuoCYYT%2F29FR0uWSsU75NPqyk1wafIAsYAIgj%2FgAsT8sj4dxGiGl9dVQug1%2BUTJzJgiYf3VrcstnlpoqWg4NdQtZV&X-Amz-Signature=6ec4d1c727a81a47d0ed83cb727a392959690435e53000f641bb345f7e9d04da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

