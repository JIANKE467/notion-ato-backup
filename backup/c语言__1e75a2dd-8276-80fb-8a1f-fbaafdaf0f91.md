
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LISBNMG%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDbErto380LwAhVULA12SKUbNYNU4IDGcmsO9eN19l2tgIgBqTXbayyuP48Su6HruyMG7El%2Ft5TuNY7tg%2Bp6J%2FoipQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzx1n2cH6l1ZllHpircA24t1oIXZes%2B%2FX1fWD0Zdsf74NlH322KZD2XsLOFYCsk9DiJ1YUO02dgSKrOe8mJSNBAzwg99LEEFKZ8ZM32S%2Fz3LifutGi2DhszkT7tk6U6fXl6P%2BMjpYAfnpKLWBN%2FU3XYHaXC4oO7wdZ2Q3fr2Q%2BVWx%2FvGQ5UnAgfZQGzviPbU7A0OkpEQInacKeWhZ153FXz4jimETp0tfSZXbOKjK1Q%2Fi8R%2FRo%2BrDz7B4q41JdLqWRB3rty7bIRS4q9dpWD1h1%2By8uSWbvfYOOJ3DkMmH%2Bgc84P3yk5QEq8SRoE9Rt%2FDDJRBqWTXoBBLcsNTZt4ueWxyIvnn%2FPyTObuOgFwawiV45WlopTCVjulqklaPfMGSA0SHhcFVLzoQUz4iX0VcBz4GEmi%2BAyg4RI236WCvqm6nHXPTHQYZDQiXGgDwcdeA0YagTVKCDI%2F%2BY8E%2BN3wfWJI8ztY7vabqg4ObhELgaRGIfOJ1d2GW8Fqw9jI7RHO8GRtCzcOaYIanZF4NWxqypt0tK3QkxVbHoR0MUX4vAjHl%2FZLAi5l%2BAWKYTQwdsKJTEzxbT3UpuFbdHHjJNgrECax6rw78NciGMUUGo0OZt9NUbZGbLuwIb2s0fxaGGWbH07DFBg5xpi%2BTgrGMMuFl8sGOqUBe8lWAH8cnfpxHwsaEscfavKdJIqqrw7N5eI0o9MR6mfUpyqT%2FNBzI3Xr1UhpGBUjM2HKc00fX5IosNR%2BWyf0m7O185a8WDOAlFA9MO%2BQApxGneDCCRmJnj%2Bo8x9ps%2Fbpu0aL1HVSxSG8zN7GWUE5HpMXVRm6l6kY7oj5gy1VNKbdEF2RtO47CGletH%2FE%2FEZaoSYUMa2jsuoHRZMTyevlGbqloAFk&X-Amz-Signature=3e9b0a8c8c7ebe1c47405b71c94e765d585b38b8dba58b60edc9fb5755f33377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4O34XPK%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDp0jZtN8bArxsUEksKUCmxEn8fPrCG4MbC869V0lvZsQIhAPbPVSWxKsAgMHLk3wOCO3PNddCNT0I30gGpmpMzsWy3KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUDNSWBLmkoW%2BTpHoq3APWNxBq1Pq%2FlIdC07ieaWj8VmlSGkJEIEwf5HJoPissbxxvDvCApViSN0abDHuKKPMWiDIpIIkVOK%2BxolGvCBarZcq%2BBKPXE7gClLM74P0tCpkFitKf69vyZDbr1EqUy81zHmH74tNQK6XSXmbegd9dJb63N3zrAHfduID7B7MSa0tom6orc6%2Fe2u5%2FQf3MQZA9Gn3uzfLEgI%2F2bQi4oCI4DDRspdjWY3470evZv4oPZUcj42TjwOYJaoqgImICyj2tc1tWj%2BAZKt57UgBgMDfFqdrfbyZKPq5E9bmoqI6nz%2BjCT8fJZ4y040SIR6PiqKLFV6GYnEMsIYf3xJfuBt7LtiEvlJXwsq9nG65Dso2p7LPBZ1gAZvMJmKKhkpyllMhZkpaCASrsHQ8x1akcErra0xcb62mqRLfsCoyohUXX%2FhpX3lA9tCvPoA%2BYKUdMML0x6LfaLjFpf9GJReMgZxGPoE9l5XqHDIch4TqNeq%2BREx2IiOPLFnyJpynxmLo2HzrRLZzGAyAR6m6w4gu3gFjGQyMH4TIwGP%2FiFHxveRkt2AefDhLBxFgJaodJLccx2D8dWKS8V9923XlUSEqQVPNvk40BP2spQ38nieQSIghTiWQgWoUdJBNgMdI5WjDkhpfLBjqkAV5tRU1lFKE3adqZKHC2RpoYqxsNLNnnjGJiiDVVSCcEr1jkI8uXphGfkv64vH4pnMn6lDB8g1d%2BF3TFjduCWA2IftSryJcneOW0LFQuI0NPzHjqaYLo2iPirdEthNcrOiIiL6JEP2b4PbKuDLRUCwTyNb2%2FYGrm%2FtLYk6DWAiTxnwshU288Honbeoj4XCubklNb8hGG3kXpTm3JAmsOS82OyDfi&X-Amz-Signature=f6dc655d6d76616714019b42a8b856d5699a7772cf10e9dc4f35c4c5f150c42b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4O34XPK%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDp0jZtN8bArxsUEksKUCmxEn8fPrCG4MbC869V0lvZsQIhAPbPVSWxKsAgMHLk3wOCO3PNddCNT0I30gGpmpMzsWy3KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUDNSWBLmkoW%2BTpHoq3APWNxBq1Pq%2FlIdC07ieaWj8VmlSGkJEIEwf5HJoPissbxxvDvCApViSN0abDHuKKPMWiDIpIIkVOK%2BxolGvCBarZcq%2BBKPXE7gClLM74P0tCpkFitKf69vyZDbr1EqUy81zHmH74tNQK6XSXmbegd9dJb63N3zrAHfduID7B7MSa0tom6orc6%2Fe2u5%2FQf3MQZA9Gn3uzfLEgI%2F2bQi4oCI4DDRspdjWY3470evZv4oPZUcj42TjwOYJaoqgImICyj2tc1tWj%2BAZKt57UgBgMDfFqdrfbyZKPq5E9bmoqI6nz%2BjCT8fJZ4y040SIR6PiqKLFV6GYnEMsIYf3xJfuBt7LtiEvlJXwsq9nG65Dso2p7LPBZ1gAZvMJmKKhkpyllMhZkpaCASrsHQ8x1akcErra0xcb62mqRLfsCoyohUXX%2FhpX3lA9tCvPoA%2BYKUdMML0x6LfaLjFpf9GJReMgZxGPoE9l5XqHDIch4TqNeq%2BREx2IiOPLFnyJpynxmLo2HzrRLZzGAyAR6m6w4gu3gFjGQyMH4TIwGP%2FiFHxveRkt2AefDhLBxFgJaodJLccx2D8dWKS8V9923XlUSEqQVPNvk40BP2spQ38nieQSIghTiWQgWoUdJBNgMdI5WjDkhpfLBjqkAV5tRU1lFKE3adqZKHC2RpoYqxsNLNnnjGJiiDVVSCcEr1jkI8uXphGfkv64vH4pnMn6lDB8g1d%2BF3TFjduCWA2IftSryJcneOW0LFQuI0NPzHjqaYLo2iPirdEthNcrOiIiL6JEP2b4PbKuDLRUCwTyNb2%2FYGrm%2FtLYk6DWAiTxnwshU288Honbeoj4XCubklNb8hGG3kXpTm3JAmsOS82OyDfi&X-Amz-Signature=1e3d36bf34a10e9e7102ce2b7cf7c791dfa6faddb7307bf7543246ba97c8ffc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5VUG7FF%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFlVbJRYCfldZvgVrLhhSu3Y6gxyDZZ%2FtRUHbF0RE%2Bc5AiEA7Sfac3r23auTAlE8%2FSUcMsAz9Qcn%2FsStBRirsS9ZQrgqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE78zF4kUY8hccWBSrcA7z2X6iC3AQ4bfoTnzwQ9pGG9WIybmVRXRKWE8xETyGIrh2Qm4MOyrIElu6XJHj4ti1KiqNkOcQcRV%2BQpEPZYbuQddiMee9uu0VWUvTPgvSxS2QM7%2B1HlnzPvRAVTUva6%2BRNd3adi0l%2F7UG%2Fjfq5yFBAp6AeCcSHQhQsOi8FSGaR13%2FgZM6l2E1tEyA%2B9vN58GylpdIBPvlJFNmDroGjUmeFgzvUeLoj%2BP7BG2DqrcKXXETCZEaqUim0abNlvfSVM48%2FMbku2%2BN1D6B2hHMUx1c5nmUId4cb5PZH%2FpwnCAx0jph4D%2BjF9RYxjUE3kUdk5pAQ1SHI0c%2Bsbp98hNxeAQruMaSJZZiXeR%2FYNK3adRYQ6gZZvc94sifFz6KnRZ7woRPcm5PznIAuDCtIDw%2BhLWCJc9u9Jjsr2Cf87uJko6lvGHXSrE2syY9l%2BXq16o4xDeIP7u1bPaAnyHHjKm4DonoMdVG%2BtqVZ%2FXTvC%2F7uagL%2FhhVY0Bm9NE1r6sCELyLtB53VsCPlxP%2FIIpsSP8G9uTiINHnbyVigvEZR8Auu0HvdWB1aj7vbvg%2B3sK6%2FMeuCuEXgVWEy6Vy2nEgD0%2Bm9aBT41OlbUC0WX2AOs7GtBuoEVNMIC5VQzWy5tNi0MMOHl8sGOqUB5u0KQqPTFrcNnn5J0yVnKEEL2KuO5DfyjSSMQas6OXGEsaRtD9sgqZ19%2BZR3R4MaczRpgIF9RcrUX2nIq8Mxu9pCv6j6YnpMAg6FPvslLh20gPnlk4BC1%2BPuaijeNWH10sMa8VlRiaFId9eDHMjjsq0dRECsBM0RoJrby%2FjpBBmsqyhUbYi7d25ZhKFMMo8jqRIoEICJhdmeMBo7CP8VlUHP9cbf&X-Amz-Signature=e37ec25f4f08e391add3b6cf0b88909d796601b161d7c092c99a389d3e5edc7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5VUG7FF%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFlVbJRYCfldZvgVrLhhSu3Y6gxyDZZ%2FtRUHbF0RE%2Bc5AiEA7Sfac3r23auTAlE8%2FSUcMsAz9Qcn%2FsStBRirsS9ZQrgqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE78zF4kUY8hccWBSrcA7z2X6iC3AQ4bfoTnzwQ9pGG9WIybmVRXRKWE8xETyGIrh2Qm4MOyrIElu6XJHj4ti1KiqNkOcQcRV%2BQpEPZYbuQddiMee9uu0VWUvTPgvSxS2QM7%2B1HlnzPvRAVTUva6%2BRNd3adi0l%2F7UG%2Fjfq5yFBAp6AeCcSHQhQsOi8FSGaR13%2FgZM6l2E1tEyA%2B9vN58GylpdIBPvlJFNmDroGjUmeFgzvUeLoj%2BP7BG2DqrcKXXETCZEaqUim0abNlvfSVM48%2FMbku2%2BN1D6B2hHMUx1c5nmUId4cb5PZH%2FpwnCAx0jph4D%2BjF9RYxjUE3kUdk5pAQ1SHI0c%2Bsbp98hNxeAQruMaSJZZiXeR%2FYNK3adRYQ6gZZvc94sifFz6KnRZ7woRPcm5PznIAuDCtIDw%2BhLWCJc9u9Jjsr2Cf87uJko6lvGHXSrE2syY9l%2BXq16o4xDeIP7u1bPaAnyHHjKm4DonoMdVG%2BtqVZ%2FXTvC%2F7uagL%2FhhVY0Bm9NE1r6sCELyLtB53VsCPlxP%2FIIpsSP8G9uTiINHnbyVigvEZR8Auu0HvdWB1aj7vbvg%2B3sK6%2FMeuCuEXgVWEy6Vy2nEgD0%2Bm9aBT41OlbUC0WX2AOs7GtBuoEVNMIC5VQzWy5tNi0MMOHl8sGOqUB5u0KQqPTFrcNnn5J0yVnKEEL2KuO5DfyjSSMQas6OXGEsaRtD9sgqZ19%2BZR3R4MaczRpgIF9RcrUX2nIq8Mxu9pCv6j6YnpMAg6FPvslLh20gPnlk4BC1%2BPuaijeNWH10sMa8VlRiaFId9eDHMjjsq0dRECsBM0RoJrby%2FjpBBmsqyhUbYi7d25ZhKFMMo8jqRIoEICJhdmeMBo7CP8VlUHP9cbf&X-Amz-Signature=166f0e7dcc684c82a50d597d8a834a8f0169a45a499f969f16a883e243ba1ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5VUG7FF%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFlVbJRYCfldZvgVrLhhSu3Y6gxyDZZ%2FtRUHbF0RE%2Bc5AiEA7Sfac3r23auTAlE8%2FSUcMsAz9Qcn%2FsStBRirsS9ZQrgqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE78zF4kUY8hccWBSrcA7z2X6iC3AQ4bfoTnzwQ9pGG9WIybmVRXRKWE8xETyGIrh2Qm4MOyrIElu6XJHj4ti1KiqNkOcQcRV%2BQpEPZYbuQddiMee9uu0VWUvTPgvSxS2QM7%2B1HlnzPvRAVTUva6%2BRNd3adi0l%2F7UG%2Fjfq5yFBAp6AeCcSHQhQsOi8FSGaR13%2FgZM6l2E1tEyA%2B9vN58GylpdIBPvlJFNmDroGjUmeFgzvUeLoj%2BP7BG2DqrcKXXETCZEaqUim0abNlvfSVM48%2FMbku2%2BN1D6B2hHMUx1c5nmUId4cb5PZH%2FpwnCAx0jph4D%2BjF9RYxjUE3kUdk5pAQ1SHI0c%2Bsbp98hNxeAQruMaSJZZiXeR%2FYNK3adRYQ6gZZvc94sifFz6KnRZ7woRPcm5PznIAuDCtIDw%2BhLWCJc9u9Jjsr2Cf87uJko6lvGHXSrE2syY9l%2BXq16o4xDeIP7u1bPaAnyHHjKm4DonoMdVG%2BtqVZ%2FXTvC%2F7uagL%2FhhVY0Bm9NE1r6sCELyLtB53VsCPlxP%2FIIpsSP8G9uTiINHnbyVigvEZR8Auu0HvdWB1aj7vbvg%2B3sK6%2FMeuCuEXgVWEy6Vy2nEgD0%2Bm9aBT41OlbUC0WX2AOs7GtBuoEVNMIC5VQzWy5tNi0MMOHl8sGOqUB5u0KQqPTFrcNnn5J0yVnKEEL2KuO5DfyjSSMQas6OXGEsaRtD9sgqZ19%2BZR3R4MaczRpgIF9RcrUX2nIq8Mxu9pCv6j6YnpMAg6FPvslLh20gPnlk4BC1%2BPuaijeNWH10sMa8VlRiaFId9eDHMjjsq0dRECsBM0RoJrby%2FjpBBmsqyhUbYi7d25ZhKFMMo8jqRIoEICJhdmeMBo7CP8VlUHP9cbf&X-Amz-Signature=467b67bfbba36ff269b4e3a09369d2f26a82aef4b431e139f1dbbc55d228674e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5VUG7FF%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFlVbJRYCfldZvgVrLhhSu3Y6gxyDZZ%2FtRUHbF0RE%2Bc5AiEA7Sfac3r23auTAlE8%2FSUcMsAz9Qcn%2FsStBRirsS9ZQrgqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE78zF4kUY8hccWBSrcA7z2X6iC3AQ4bfoTnzwQ9pGG9WIybmVRXRKWE8xETyGIrh2Qm4MOyrIElu6XJHj4ti1KiqNkOcQcRV%2BQpEPZYbuQddiMee9uu0VWUvTPgvSxS2QM7%2B1HlnzPvRAVTUva6%2BRNd3adi0l%2F7UG%2Fjfq5yFBAp6AeCcSHQhQsOi8FSGaR13%2FgZM6l2E1tEyA%2B9vN58GylpdIBPvlJFNmDroGjUmeFgzvUeLoj%2BP7BG2DqrcKXXETCZEaqUim0abNlvfSVM48%2FMbku2%2BN1D6B2hHMUx1c5nmUId4cb5PZH%2FpwnCAx0jph4D%2BjF9RYxjUE3kUdk5pAQ1SHI0c%2Bsbp98hNxeAQruMaSJZZiXeR%2FYNK3adRYQ6gZZvc94sifFz6KnRZ7woRPcm5PznIAuDCtIDw%2BhLWCJc9u9Jjsr2Cf87uJko6lvGHXSrE2syY9l%2BXq16o4xDeIP7u1bPaAnyHHjKm4DonoMdVG%2BtqVZ%2FXTvC%2F7uagL%2FhhVY0Bm9NE1r6sCELyLtB53VsCPlxP%2FIIpsSP8G9uTiINHnbyVigvEZR8Auu0HvdWB1aj7vbvg%2B3sK6%2FMeuCuEXgVWEy6Vy2nEgD0%2Bm9aBT41OlbUC0WX2AOs7GtBuoEVNMIC5VQzWy5tNi0MMOHl8sGOqUB5u0KQqPTFrcNnn5J0yVnKEEL2KuO5DfyjSSMQas6OXGEsaRtD9sgqZ19%2BZR3R4MaczRpgIF9RcrUX2nIq8Mxu9pCv6j6YnpMAg6FPvslLh20gPnlk4BC1%2BPuaijeNWH10sMa8VlRiaFId9eDHMjjsq0dRECsBM0RoJrby%2FjpBBmsqyhUbYi7d25ZhKFMMo8jqRIoEICJhdmeMBo7CP8VlUHP9cbf&X-Amz-Signature=cc043b1bca5d94a59429134fd18e1c751aae62bfc7d63dafbacdd6e30a894ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5VUG7FF%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFlVbJRYCfldZvgVrLhhSu3Y6gxyDZZ%2FtRUHbF0RE%2Bc5AiEA7Sfac3r23auTAlE8%2FSUcMsAz9Qcn%2FsStBRirsS9ZQrgqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE78zF4kUY8hccWBSrcA7z2X6iC3AQ4bfoTnzwQ9pGG9WIybmVRXRKWE8xETyGIrh2Qm4MOyrIElu6XJHj4ti1KiqNkOcQcRV%2BQpEPZYbuQddiMee9uu0VWUvTPgvSxS2QM7%2B1HlnzPvRAVTUva6%2BRNd3adi0l%2F7UG%2Fjfq5yFBAp6AeCcSHQhQsOi8FSGaR13%2FgZM6l2E1tEyA%2B9vN58GylpdIBPvlJFNmDroGjUmeFgzvUeLoj%2BP7BG2DqrcKXXETCZEaqUim0abNlvfSVM48%2FMbku2%2BN1D6B2hHMUx1c5nmUId4cb5PZH%2FpwnCAx0jph4D%2BjF9RYxjUE3kUdk5pAQ1SHI0c%2Bsbp98hNxeAQruMaSJZZiXeR%2FYNK3adRYQ6gZZvc94sifFz6KnRZ7woRPcm5PznIAuDCtIDw%2BhLWCJc9u9Jjsr2Cf87uJko6lvGHXSrE2syY9l%2BXq16o4xDeIP7u1bPaAnyHHjKm4DonoMdVG%2BtqVZ%2FXTvC%2F7uagL%2FhhVY0Bm9NE1r6sCELyLtB53VsCPlxP%2FIIpsSP8G9uTiINHnbyVigvEZR8Auu0HvdWB1aj7vbvg%2B3sK6%2FMeuCuEXgVWEy6Vy2nEgD0%2Bm9aBT41OlbUC0WX2AOs7GtBuoEVNMIC5VQzWy5tNi0MMOHl8sGOqUB5u0KQqPTFrcNnn5J0yVnKEEL2KuO5DfyjSSMQas6OXGEsaRtD9sgqZ19%2BZR3R4MaczRpgIF9RcrUX2nIq8Mxu9pCv6j6YnpMAg6FPvslLh20gPnlk4BC1%2BPuaijeNWH10sMa8VlRiaFId9eDHMjjsq0dRECsBM0RoJrby%2FjpBBmsqyhUbYi7d25ZhKFMMo8jqRIoEICJhdmeMBo7CP8VlUHP9cbf&X-Amz-Signature=ee34d36b3a7792ccb521a319b3f3d3662eaf15f9cdfcb7920351bd39c38dbada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5VUG7FF%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFlVbJRYCfldZvgVrLhhSu3Y6gxyDZZ%2FtRUHbF0RE%2Bc5AiEA7Sfac3r23auTAlE8%2FSUcMsAz9Qcn%2FsStBRirsS9ZQrgqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE78zF4kUY8hccWBSrcA7z2X6iC3AQ4bfoTnzwQ9pGG9WIybmVRXRKWE8xETyGIrh2Qm4MOyrIElu6XJHj4ti1KiqNkOcQcRV%2BQpEPZYbuQddiMee9uu0VWUvTPgvSxS2QM7%2B1HlnzPvRAVTUva6%2BRNd3adi0l%2F7UG%2Fjfq5yFBAp6AeCcSHQhQsOi8FSGaR13%2FgZM6l2E1tEyA%2B9vN58GylpdIBPvlJFNmDroGjUmeFgzvUeLoj%2BP7BG2DqrcKXXETCZEaqUim0abNlvfSVM48%2FMbku2%2BN1D6B2hHMUx1c5nmUId4cb5PZH%2FpwnCAx0jph4D%2BjF9RYxjUE3kUdk5pAQ1SHI0c%2Bsbp98hNxeAQruMaSJZZiXeR%2FYNK3adRYQ6gZZvc94sifFz6KnRZ7woRPcm5PznIAuDCtIDw%2BhLWCJc9u9Jjsr2Cf87uJko6lvGHXSrE2syY9l%2BXq16o4xDeIP7u1bPaAnyHHjKm4DonoMdVG%2BtqVZ%2FXTvC%2F7uagL%2FhhVY0Bm9NE1r6sCELyLtB53VsCPlxP%2FIIpsSP8G9uTiINHnbyVigvEZR8Auu0HvdWB1aj7vbvg%2B3sK6%2FMeuCuEXgVWEy6Vy2nEgD0%2Bm9aBT41OlbUC0WX2AOs7GtBuoEVNMIC5VQzWy5tNi0MMOHl8sGOqUB5u0KQqPTFrcNnn5J0yVnKEEL2KuO5DfyjSSMQas6OXGEsaRtD9sgqZ19%2BZR3R4MaczRpgIF9RcrUX2nIq8Mxu9pCv6j6YnpMAg6FPvslLh20gPnlk4BC1%2BPuaijeNWH10sMa8VlRiaFId9eDHMjjsq0dRECsBM0RoJrby%2FjpBBmsqyhUbYi7d25ZhKFMMo8jqRIoEICJhdmeMBo7CP8VlUHP9cbf&X-Amz-Signature=44fd16c594b147d0daf5b59fdb180a13126190ecb735d3fd42a799cd606a07f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5VUG7FF%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFlVbJRYCfldZvgVrLhhSu3Y6gxyDZZ%2FtRUHbF0RE%2Bc5AiEA7Sfac3r23auTAlE8%2FSUcMsAz9Qcn%2FsStBRirsS9ZQrgqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE78zF4kUY8hccWBSrcA7z2X6iC3AQ4bfoTnzwQ9pGG9WIybmVRXRKWE8xETyGIrh2Qm4MOyrIElu6XJHj4ti1KiqNkOcQcRV%2BQpEPZYbuQddiMee9uu0VWUvTPgvSxS2QM7%2B1HlnzPvRAVTUva6%2BRNd3adi0l%2F7UG%2Fjfq5yFBAp6AeCcSHQhQsOi8FSGaR13%2FgZM6l2E1tEyA%2B9vN58GylpdIBPvlJFNmDroGjUmeFgzvUeLoj%2BP7BG2DqrcKXXETCZEaqUim0abNlvfSVM48%2FMbku2%2BN1D6B2hHMUx1c5nmUId4cb5PZH%2FpwnCAx0jph4D%2BjF9RYxjUE3kUdk5pAQ1SHI0c%2Bsbp98hNxeAQruMaSJZZiXeR%2FYNK3adRYQ6gZZvc94sifFz6KnRZ7woRPcm5PznIAuDCtIDw%2BhLWCJc9u9Jjsr2Cf87uJko6lvGHXSrE2syY9l%2BXq16o4xDeIP7u1bPaAnyHHjKm4DonoMdVG%2BtqVZ%2FXTvC%2F7uagL%2FhhVY0Bm9NE1r6sCELyLtB53VsCPlxP%2FIIpsSP8G9uTiINHnbyVigvEZR8Auu0HvdWB1aj7vbvg%2B3sK6%2FMeuCuEXgVWEy6Vy2nEgD0%2Bm9aBT41OlbUC0WX2AOs7GtBuoEVNMIC5VQzWy5tNi0MMOHl8sGOqUB5u0KQqPTFrcNnn5J0yVnKEEL2KuO5DfyjSSMQas6OXGEsaRtD9sgqZ19%2BZR3R4MaczRpgIF9RcrUX2nIq8Mxu9pCv6j6YnpMAg6FPvslLh20gPnlk4BC1%2BPuaijeNWH10sMa8VlRiaFId9eDHMjjsq0dRECsBM0RoJrby%2FjpBBmsqyhUbYi7d25ZhKFMMo8jqRIoEICJhdmeMBo7CP8VlUHP9cbf&X-Amz-Signature=60156d52a577be0500ec69038b3f4d735ba92edb0e86428574e771136eef5675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM6U2CYK%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHVwDwb5b3msGdh156gLcPLpBfWxmimJYTf%2FHdSQBtqUAiBr24PdTG4DzDcfrC01b4JdBNB6NxXNtL0knkmeV1oDZiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9E9dUsx%2BimQbf7InKtwDm7tFoLNJKv0XCRTudcF7lvemz%2FCrAl229XllEdCvsh5fJkBycbKyCxrYCB31i5d5xJkb9j%2BGDov0fFaFzCVxtJliED1nuq%2FqOQMFsrh%2Fi2C2NwjNM1khEU6ScxBQrx96A%2FQrjVodNlrcBwx3UqUupKDioi09fcg3O8%2BSbrABN1DlKPxWFJ89J7TveRGc79GTX5lSWzwppTv5y2WTMYfyUNNIVdTRnKG0mBdYfoXK4eMVdNY9w1jtaVA7N%2FPAQOycPQqaNfmAQrOYdTyBmXH7SwwdFJPbZzPd0O%2Fh6ScZbdbe8gAw6hlVDjhhGr3YiFqiYbo3liFXqzdUqI4Z9MPOTp6J7YzKQdGBZD1MJ5c5%2Fv4RL5dw0PMOM8JOFfXIm7s1OCXDyUhWzPSWa6y9kevGASMeziIWXlQb27iHO3499ru2Pud87QJjAS%2Fu7k2E6u176SH67sNb6iptUqWozFj1DDYYo4NEMVtr4KN4cu9njtI0QmIRMoxc%2Fn2l41oUu2dRlQ2TwJBy%2BYnAObeYr7DxNKg5aUzqeYfz5iV9wQbz9%2FdQJD%2FGrhyveWdBgfVczirBZPdP20q8I3gcOMg76bYJWRKij8OTf94Ku2R0dwjmoMxP%2Ff3qnYXKTwtLwmcwy4eXywY6pgGnMZFbeqNjKp8E9s3Eg%2FxHeNpyLW4yx8zt%2FKOKd0m3SwoxTcBEAulqRtGp8087nMlG35O07SPgbww4NMEwPIVJDf%2Bw%2F%2BBIp2%2FBDHbXHiFjWPGeJAQR%2BjC%2FgB03mRCJClHoLlY7MzzPFSAT3DDWofc5Yx%2BcpqgQoeUmICGnQOCriFD018rhLCONQKkdh4WpINhOruL41AD4tj7QC8Hw2Jjy9ImpCnHZ&X-Amz-Signature=7703b9e8307b9d254862583cd51cc48b8191c913f529302423d828442ddf8f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM6U2CYK%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHVwDwb5b3msGdh156gLcPLpBfWxmimJYTf%2FHdSQBtqUAiBr24PdTG4DzDcfrC01b4JdBNB6NxXNtL0knkmeV1oDZiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9E9dUsx%2BimQbf7InKtwDm7tFoLNJKv0XCRTudcF7lvemz%2FCrAl229XllEdCvsh5fJkBycbKyCxrYCB31i5d5xJkb9j%2BGDov0fFaFzCVxtJliED1nuq%2FqOQMFsrh%2Fi2C2NwjNM1khEU6ScxBQrx96A%2FQrjVodNlrcBwx3UqUupKDioi09fcg3O8%2BSbrABN1DlKPxWFJ89J7TveRGc79GTX5lSWzwppTv5y2WTMYfyUNNIVdTRnKG0mBdYfoXK4eMVdNY9w1jtaVA7N%2FPAQOycPQqaNfmAQrOYdTyBmXH7SwwdFJPbZzPd0O%2Fh6ScZbdbe8gAw6hlVDjhhGr3YiFqiYbo3liFXqzdUqI4Z9MPOTp6J7YzKQdGBZD1MJ5c5%2Fv4RL5dw0PMOM8JOFfXIm7s1OCXDyUhWzPSWa6y9kevGASMeziIWXlQb27iHO3499ru2Pud87QJjAS%2Fu7k2E6u176SH67sNb6iptUqWozFj1DDYYo4NEMVtr4KN4cu9njtI0QmIRMoxc%2Fn2l41oUu2dRlQ2TwJBy%2BYnAObeYr7DxNKg5aUzqeYfz5iV9wQbz9%2FdQJD%2FGrhyveWdBgfVczirBZPdP20q8I3gcOMg76bYJWRKij8OTf94Ku2R0dwjmoMxP%2Ff3qnYXKTwtLwmcwy4eXywY6pgGnMZFbeqNjKp8E9s3Eg%2FxHeNpyLW4yx8zt%2FKOKd0m3SwoxTcBEAulqRtGp8087nMlG35O07SPgbww4NMEwPIVJDf%2Bw%2F%2BBIp2%2FBDHbXHiFjWPGeJAQR%2BjC%2FgB03mRCJClHoLlY7MzzPFSAT3DDWofc5Yx%2BcpqgQoeUmICGnQOCriFD018rhLCONQKkdh4WpINhOruL41AD4tj7QC8Hw2Jjy9ImpCnHZ&X-Amz-Signature=6e2a9e60f7a28b84b27966c0c64319bc07b724e5300318de682cadfa347c9211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM6U2CYK%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHVwDwb5b3msGdh156gLcPLpBfWxmimJYTf%2FHdSQBtqUAiBr24PdTG4DzDcfrC01b4JdBNB6NxXNtL0knkmeV1oDZiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9E9dUsx%2BimQbf7InKtwDm7tFoLNJKv0XCRTudcF7lvemz%2FCrAl229XllEdCvsh5fJkBycbKyCxrYCB31i5d5xJkb9j%2BGDov0fFaFzCVxtJliED1nuq%2FqOQMFsrh%2Fi2C2NwjNM1khEU6ScxBQrx96A%2FQrjVodNlrcBwx3UqUupKDioi09fcg3O8%2BSbrABN1DlKPxWFJ89J7TveRGc79GTX5lSWzwppTv5y2WTMYfyUNNIVdTRnKG0mBdYfoXK4eMVdNY9w1jtaVA7N%2FPAQOycPQqaNfmAQrOYdTyBmXH7SwwdFJPbZzPd0O%2Fh6ScZbdbe8gAw6hlVDjhhGr3YiFqiYbo3liFXqzdUqI4Z9MPOTp6J7YzKQdGBZD1MJ5c5%2Fv4RL5dw0PMOM8JOFfXIm7s1OCXDyUhWzPSWa6y9kevGASMeziIWXlQb27iHO3499ru2Pud87QJjAS%2Fu7k2E6u176SH67sNb6iptUqWozFj1DDYYo4NEMVtr4KN4cu9njtI0QmIRMoxc%2Fn2l41oUu2dRlQ2TwJBy%2BYnAObeYr7DxNKg5aUzqeYfz5iV9wQbz9%2FdQJD%2FGrhyveWdBgfVczirBZPdP20q8I3gcOMg76bYJWRKij8OTf94Ku2R0dwjmoMxP%2Ff3qnYXKTwtLwmcwy4eXywY6pgGnMZFbeqNjKp8E9s3Eg%2FxHeNpyLW4yx8zt%2FKOKd0m3SwoxTcBEAulqRtGp8087nMlG35O07SPgbww4NMEwPIVJDf%2Bw%2F%2BBIp2%2FBDHbXHiFjWPGeJAQR%2BjC%2FgB03mRCJClHoLlY7MzzPFSAT3DDWofc5Yx%2BcpqgQoeUmICGnQOCriFD018rhLCONQKkdh4WpINhOruL41AD4tj7QC8Hw2Jjy9ImpCnHZ&X-Amz-Signature=fc52bbb16cf7f796aaa71fb48f9a8fe08f66fdfa3f4efe1fae3b714e23119d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM6U2CYK%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHVwDwb5b3msGdh156gLcPLpBfWxmimJYTf%2FHdSQBtqUAiBr24PdTG4DzDcfrC01b4JdBNB6NxXNtL0knkmeV1oDZiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9E9dUsx%2BimQbf7InKtwDm7tFoLNJKv0XCRTudcF7lvemz%2FCrAl229XllEdCvsh5fJkBycbKyCxrYCB31i5d5xJkb9j%2BGDov0fFaFzCVxtJliED1nuq%2FqOQMFsrh%2Fi2C2NwjNM1khEU6ScxBQrx96A%2FQrjVodNlrcBwx3UqUupKDioi09fcg3O8%2BSbrABN1DlKPxWFJ89J7TveRGc79GTX5lSWzwppTv5y2WTMYfyUNNIVdTRnKG0mBdYfoXK4eMVdNY9w1jtaVA7N%2FPAQOycPQqaNfmAQrOYdTyBmXH7SwwdFJPbZzPd0O%2Fh6ScZbdbe8gAw6hlVDjhhGr3YiFqiYbo3liFXqzdUqI4Z9MPOTp6J7YzKQdGBZD1MJ5c5%2Fv4RL5dw0PMOM8JOFfXIm7s1OCXDyUhWzPSWa6y9kevGASMeziIWXlQb27iHO3499ru2Pud87QJjAS%2Fu7k2E6u176SH67sNb6iptUqWozFj1DDYYo4NEMVtr4KN4cu9njtI0QmIRMoxc%2Fn2l41oUu2dRlQ2TwJBy%2BYnAObeYr7DxNKg5aUzqeYfz5iV9wQbz9%2FdQJD%2FGrhyveWdBgfVczirBZPdP20q8I3gcOMg76bYJWRKij8OTf94Ku2R0dwjmoMxP%2Ff3qnYXKTwtLwmcwy4eXywY6pgGnMZFbeqNjKp8E9s3Eg%2FxHeNpyLW4yx8zt%2FKOKd0m3SwoxTcBEAulqRtGp8087nMlG35O07SPgbww4NMEwPIVJDf%2Bw%2F%2BBIp2%2FBDHbXHiFjWPGeJAQR%2BjC%2FgB03mRCJClHoLlY7MzzPFSAT3DDWofc5Yx%2BcpqgQoeUmICGnQOCriFD018rhLCONQKkdh4WpINhOruL41AD4tj7QC8Hw2Jjy9ImpCnHZ&X-Amz-Signature=6fe9a21c2fc658cdf3d0ead709469d7f2c9795f07768047a0ce07e7f7cb5093e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM6U2CYK%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHVwDwb5b3msGdh156gLcPLpBfWxmimJYTf%2FHdSQBtqUAiBr24PdTG4DzDcfrC01b4JdBNB6NxXNtL0knkmeV1oDZiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9E9dUsx%2BimQbf7InKtwDm7tFoLNJKv0XCRTudcF7lvemz%2FCrAl229XllEdCvsh5fJkBycbKyCxrYCB31i5d5xJkb9j%2BGDov0fFaFzCVxtJliED1nuq%2FqOQMFsrh%2Fi2C2NwjNM1khEU6ScxBQrx96A%2FQrjVodNlrcBwx3UqUupKDioi09fcg3O8%2BSbrABN1DlKPxWFJ89J7TveRGc79GTX5lSWzwppTv5y2WTMYfyUNNIVdTRnKG0mBdYfoXK4eMVdNY9w1jtaVA7N%2FPAQOycPQqaNfmAQrOYdTyBmXH7SwwdFJPbZzPd0O%2Fh6ScZbdbe8gAw6hlVDjhhGr3YiFqiYbo3liFXqzdUqI4Z9MPOTp6J7YzKQdGBZD1MJ5c5%2Fv4RL5dw0PMOM8JOFfXIm7s1OCXDyUhWzPSWa6y9kevGASMeziIWXlQb27iHO3499ru2Pud87QJjAS%2Fu7k2E6u176SH67sNb6iptUqWozFj1DDYYo4NEMVtr4KN4cu9njtI0QmIRMoxc%2Fn2l41oUu2dRlQ2TwJBy%2BYnAObeYr7DxNKg5aUzqeYfz5iV9wQbz9%2FdQJD%2FGrhyveWdBgfVczirBZPdP20q8I3gcOMg76bYJWRKij8OTf94Ku2R0dwjmoMxP%2Ff3qnYXKTwtLwmcwy4eXywY6pgGnMZFbeqNjKp8E9s3Eg%2FxHeNpyLW4yx8zt%2FKOKd0m3SwoxTcBEAulqRtGp8087nMlG35O07SPgbww4NMEwPIVJDf%2Bw%2F%2BBIp2%2FBDHbXHiFjWPGeJAQR%2BjC%2FgB03mRCJClHoLlY7MzzPFSAT3DDWofc5Yx%2BcpqgQoeUmICGnQOCriFD018rhLCONQKkdh4WpINhOruL41AD4tj7QC8Hw2Jjy9ImpCnHZ&X-Amz-Signature=b545e255d9156209a5c071325549e82d176bf8b89a292a713df4495be04f4202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJND4RKW%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHCvjHro1uH1iKbSYdwyvTcYFVzoj30O%2FjbyqMUSdE0cAiEAu1JurSJTm95oW2Gya2a%2FcXv1oHlWukIaWpdQas%2BQEd4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjZhJGDlS4sAHgXvyrcA71kFw4hoXDvooN9pKKnhdUFHkuUt0wSml6oZ940njuK01bN1QQ9LmQAYqQDwwypoN5n245oD%2BTgcIiQ5Qka1F5yeV9tZVn1GUAihlAMdHg3TNfiDWW9ew740AWtI7O9BRdDQYmr9BNqD%2F8ehGOaCCvb0iMPea%2BDKgKZ%2Fz7%2B5c1PWSjQmO%2Bj6WRiWeP9xWKBu8yH6%2FcZnvDBmjRk%2FhLVXFs1TXIkeFndwRBQtuzRWuNeMrrnpg%2BBOu4hoDgHNU2Lb2%2Bh%2FR1zekaPY%2FG9cOGNrbe3xAP2fsgAhX%2Fr7lGIG1QcnRDa0PfhBb2MuHJ9L9rgKmQ2i5ztilxEptSznjG90rton%2BU5tZc3aKmcqrtfjdW8k6keAF083z6KxvubxvG%2FY30yaxiTXylCNgua7uOptSKdM%2BfFxzSYnEsAfGp640yf8x0D3vb%2FBoZ4Tnj9wac27L20jkeoFJcJWFBvSvSEn5KXRNGjAN%2BPEwMUsgzfn0shxLPOnhHA%2B44hxEmxX8Wal9H7JCuKn6pkb4brGDHTLFT1LZ%2BLNLw1yqw3iyuxqxiZLil5Opl%2BN6%2BH%2FNa4lA0gPk9Zlf93xG18w45UEgT8ZeYqTZDa8eMO3K1t8ZsWQG13aw68NaJn9BMgAnuIMJ2Fl8sGOqUBYcGw3k3NzcLoajv%2FblUZekSyCkULOFI72E0JLFhU2RSdpcM45gQxywaltIEl6BpN137EOsklmcm1%2BrmHZUsZWqbGYbWC0k%2B44q6HGhjZdcMRnOyltcS%2BntfIvmUTdyJKX4MWP9whqCqJiozx6lE9gjyGFtQb4%2FUdfInWnubYfaeYUXI6kOYBqZbQx8vMU5pN%2FOIWWxwrBbuMzRtEU%2FGGrLNURv46&X-Amz-Signature=d6e0dba4d930d63ae37f461c8bfef0732db3c044745432564ef886fdc2594a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJND4RKW%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHCvjHro1uH1iKbSYdwyvTcYFVzoj30O%2FjbyqMUSdE0cAiEAu1JurSJTm95oW2Gya2a%2FcXv1oHlWukIaWpdQas%2BQEd4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjZhJGDlS4sAHgXvyrcA71kFw4hoXDvooN9pKKnhdUFHkuUt0wSml6oZ940njuK01bN1QQ9LmQAYqQDwwypoN5n245oD%2BTgcIiQ5Qka1F5yeV9tZVn1GUAihlAMdHg3TNfiDWW9ew740AWtI7O9BRdDQYmr9BNqD%2F8ehGOaCCvb0iMPea%2BDKgKZ%2Fz7%2B5c1PWSjQmO%2Bj6WRiWeP9xWKBu8yH6%2FcZnvDBmjRk%2FhLVXFs1TXIkeFndwRBQtuzRWuNeMrrnpg%2BBOu4hoDgHNU2Lb2%2Bh%2FR1zekaPY%2FG9cOGNrbe3xAP2fsgAhX%2Fr7lGIG1QcnRDa0PfhBb2MuHJ9L9rgKmQ2i5ztilxEptSznjG90rton%2BU5tZc3aKmcqrtfjdW8k6keAF083z6KxvubxvG%2FY30yaxiTXylCNgua7uOptSKdM%2BfFxzSYnEsAfGp640yf8x0D3vb%2FBoZ4Tnj9wac27L20jkeoFJcJWFBvSvSEn5KXRNGjAN%2BPEwMUsgzfn0shxLPOnhHA%2B44hxEmxX8Wal9H7JCuKn6pkb4brGDHTLFT1LZ%2BLNLw1yqw3iyuxqxiZLil5Opl%2BN6%2BH%2FNa4lA0gPk9Zlf93xG18w45UEgT8ZeYqTZDa8eMO3K1t8ZsWQG13aw68NaJn9BMgAnuIMJ2Fl8sGOqUBYcGw3k3NzcLoajv%2FblUZekSyCkULOFI72E0JLFhU2RSdpcM45gQxywaltIEl6BpN137EOsklmcm1%2BrmHZUsZWqbGYbWC0k%2B44q6HGhjZdcMRnOyltcS%2BntfIvmUTdyJKX4MWP9whqCqJiozx6lE9gjyGFtQb4%2FUdfInWnubYfaeYUXI6kOYBqZbQx8vMU5pN%2FOIWWxwrBbuMzRtEU%2FGGrLNURv46&X-Amz-Signature=97329ad4e1ca872e641f349154969f649441182640481e5adbb21af3418551b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJND4RKW%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHCvjHro1uH1iKbSYdwyvTcYFVzoj30O%2FjbyqMUSdE0cAiEAu1JurSJTm95oW2Gya2a%2FcXv1oHlWukIaWpdQas%2BQEd4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjZhJGDlS4sAHgXvyrcA71kFw4hoXDvooN9pKKnhdUFHkuUt0wSml6oZ940njuK01bN1QQ9LmQAYqQDwwypoN5n245oD%2BTgcIiQ5Qka1F5yeV9tZVn1GUAihlAMdHg3TNfiDWW9ew740AWtI7O9BRdDQYmr9BNqD%2F8ehGOaCCvb0iMPea%2BDKgKZ%2Fz7%2B5c1PWSjQmO%2Bj6WRiWeP9xWKBu8yH6%2FcZnvDBmjRk%2FhLVXFs1TXIkeFndwRBQtuzRWuNeMrrnpg%2BBOu4hoDgHNU2Lb2%2Bh%2FR1zekaPY%2FG9cOGNrbe3xAP2fsgAhX%2Fr7lGIG1QcnRDa0PfhBb2MuHJ9L9rgKmQ2i5ztilxEptSznjG90rton%2BU5tZc3aKmcqrtfjdW8k6keAF083z6KxvubxvG%2FY30yaxiTXylCNgua7uOptSKdM%2BfFxzSYnEsAfGp640yf8x0D3vb%2FBoZ4Tnj9wac27L20jkeoFJcJWFBvSvSEn5KXRNGjAN%2BPEwMUsgzfn0shxLPOnhHA%2B44hxEmxX8Wal9H7JCuKn6pkb4brGDHTLFT1LZ%2BLNLw1yqw3iyuxqxiZLil5Opl%2BN6%2BH%2FNa4lA0gPk9Zlf93xG18w45UEgT8ZeYqTZDa8eMO3K1t8ZsWQG13aw68NaJn9BMgAnuIMJ2Fl8sGOqUBYcGw3k3NzcLoajv%2FblUZekSyCkULOFI72E0JLFhU2RSdpcM45gQxywaltIEl6BpN137EOsklmcm1%2BrmHZUsZWqbGYbWC0k%2B44q6HGhjZdcMRnOyltcS%2BntfIvmUTdyJKX4MWP9whqCqJiozx6lE9gjyGFtQb4%2FUdfInWnubYfaeYUXI6kOYBqZbQx8vMU5pN%2FOIWWxwrBbuMzRtEU%2FGGrLNURv46&X-Amz-Signature=8818b6c404787899af7e74580abcc213d6808f4fafb51728418be38c99d838b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGJNBOXE%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGGFB2hLsSrRH%2BYj6uq56XDufJGMCp3SOPGRddiYZTicAiEApZqAdp8GNlBylySXr1%2BNEy5YiHUc%2FsygfAw8G%2BPRoRsqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYhMnXIY7xigNi9ACrcAzZqZuUh1h6bwePm1AM2p4v93VElR0zvl%2FOgL8%2By8rcUWFER0DkA0%2FzoLaQkWg5mSNX3QcqVlNJVzDbRjgWytDDGanMjh7aKRIFUDZrT3dXA%2B2LQwxYe4ZiOP9twC8Q4XQVKuic3sU9EBbIAC9r1XBfJgK2H%2Bzh%2FHqKZjJbMhhuF6JiR1oIiQNM38rWlp06GoyaFZ9LyyKrbaaT66r2Qjy1rzwcYGEj7Urm5vKqVrgQGzJzqVPx2EnNzy%2BQPVuTbI%2FsLTuB29TAQ6TdTVuJpHu9VHEmqm2UyKdY0Ikw6tOqQT3OLYjD%2FmDYBfLbHMeWxSU1YMASXcrP9iFz0x30Wd24IFOvWO54Fx1jCi1ebhX%2BSV7vKe5n24zf8zxEc0fggY9ooa46sYDkfaOHyXLFfc8nF%2BsNX%2F0%2FWLBsfxbyX3jUyT6rL3RfVkq4qslpFaHo5m4Vl9FohdLAE%2FlNyAM%2Fy6TFV4lJzJh%2FUdGF%2BtnR6f2hAjtxprfxp%2FivW74VUs%2B5gnBjMW5SyTdnkL13gXeV1MZF%2BZA%2BKEmFVfIzkTb4RcuOytzjd6a1l96e9OZmHVkTYYZgPCM6RWrd98nAffFKpHBcHF6nav6f9KnY2Vw%2FZ1xCoxI7JfvIC0pFFjeoDMP2Jl8sGOqUBIvgI%2B9EwfhpHS6laY%2BedHAgQefURoSo4xAmK2tVLe6SOcWSReb%2FJhI01vzbVFob%2FZ4srWJamgdBK4yO94f3ENhztD04GIPpfOwFCH9sJqC9mGT0CTDgPGhFRAEyvjNGVmWBLGUKpEezVjuRoyNUEjs7EmfQ0NN0gJKvttb1XcH0Ez6FJ3QRJ8M5vQWdGoCt%2FIOULrR%2Fd7yZSWvXMo8KhF5AGmu23&X-Amz-Signature=eb9e94709fa97fba19b651a39bde9d7bc33a18b2efe191da29959a091da85e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGJNBOXE%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIGGFB2hLsSrRH%2BYj6uq56XDufJGMCp3SOPGRddiYZTicAiEApZqAdp8GNlBylySXr1%2BNEy5YiHUc%2FsygfAw8G%2BPRoRsqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYhMnXIY7xigNi9ACrcAzZqZuUh1h6bwePm1AM2p4v93VElR0zvl%2FOgL8%2By8rcUWFER0DkA0%2FzoLaQkWg5mSNX3QcqVlNJVzDbRjgWytDDGanMjh7aKRIFUDZrT3dXA%2B2LQwxYe4ZiOP9twC8Q4XQVKuic3sU9EBbIAC9r1XBfJgK2H%2Bzh%2FHqKZjJbMhhuF6JiR1oIiQNM38rWlp06GoyaFZ9LyyKrbaaT66r2Qjy1rzwcYGEj7Urm5vKqVrgQGzJzqVPx2EnNzy%2BQPVuTbI%2FsLTuB29TAQ6TdTVuJpHu9VHEmqm2UyKdY0Ikw6tOqQT3OLYjD%2FmDYBfLbHMeWxSU1YMASXcrP9iFz0x30Wd24IFOvWO54Fx1jCi1ebhX%2BSV7vKe5n24zf8zxEc0fggY9ooa46sYDkfaOHyXLFfc8nF%2BsNX%2F0%2FWLBsfxbyX3jUyT6rL3RfVkq4qslpFaHo5m4Vl9FohdLAE%2FlNyAM%2Fy6TFV4lJzJh%2FUdGF%2BtnR6f2hAjtxprfxp%2FivW74VUs%2B5gnBjMW5SyTdnkL13gXeV1MZF%2BZA%2BKEmFVfIzkTb4RcuOytzjd6a1l96e9OZmHVkTYYZgPCM6RWrd98nAffFKpHBcHF6nav6f9KnY2Vw%2FZ1xCoxI7JfvIC0pFFjeoDMP2Jl8sGOqUBIvgI%2B9EwfhpHS6laY%2BedHAgQefURoSo4xAmK2tVLe6SOcWSReb%2FJhI01vzbVFob%2FZ4srWJamgdBK4yO94f3ENhztD04GIPpfOwFCH9sJqC9mGT0CTDgPGhFRAEyvjNGVmWBLGUKpEezVjuRoyNUEjs7EmfQ0NN0gJKvttb1XcH0Ez6FJ3QRJ8M5vQWdGoCt%2FIOULrR%2Fd7yZSWvXMo8KhF5AGmu23&X-Amz-Signature=6509ae7ab3974eb7ea845c1851e54717dd6ddfbbdb83244b692d2ab2238079a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF5LSN4I%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCsaNkHKiiAvlHks0iUkZdOHEkG0nLeAcTBLr1mSDkWmQIgfPpR6L36ZRUUPMJeFtYF8OfDCVExzSkE5ymiiBJakP4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKavMl%2FrPFHVzgsGircA4l8PZL6TrfesUMC3QfF1cN24r5VSHroasjM%2BNYRY3dGnMYaYIrRNIEybnMg3XxWWhpAEI2ablTrEIT04%2Bh%2FV8LBqlOeprP4xS1SUSXBUXWSPrNHfpkC9w6SbQgYTLCgbD7upMp5n2V%2BQZ3tTbsbpvfgzOr6GCavyDKfGCHUsCjk2NmOgpRpEaNX8JZ6zFpLxNIcdwLvrypRe7b0glRAnNIa8XaPNOyuqnzclQ%2FsncnL%2FQOeAFNauJQCUvcVRndAuYZFzldLgm2Lm36zivF6Lrm%2BrEYQIveZMK56miOoTan03wZoiydRNYDkNhZJ804kV5TnrhTH2B2Ests12H34%2FFf%2Fgs%2BnLRbPgctGb%2BJjaKIX%2BjmnVxnqU7DkfwW1yiqspVvIor7YcANpWYzaiz6WQ8aYVRRCWZEmnInnbwQCMC4ZCyCZfYkm1ANyX95NgzghnANjECtAEA6E1AOuy7Rd1nIQLma4bCBHeoquZGjlENGb8XYS05PzP8BD3KXm8Ubsp2TGYctVmzpGtq3Iig%2BxByRilLPy%2FYqk%2BAL1MOhYHxWXVmnE1KbcJdkKO2EILnDXuSBJTqTVdpk%2FgBEMWAH%2BzwibRPth9I3gmr7HZLXr95iNLSbRXEmOh4%2FI83GwMLaHl8sGOqUByvY48qCJd2DD%2FpTX6ZQJkUsRdKOn%2BqcIurEC%2BM7RmzNI6AhWDHRsVdEnbT8MoX1asbrbYzrdFr5LNQa%2BaCZR7TS23GYyryxAHmzs5Aq5X4UG8XXPLhzWNRhagfM8TgEtN35Pioo52Vall%2Bd9in0ZQnkiMQ22NfV3nDf9ZyfqxlePq02ZWaW7AdCKn3WpPrkHHJMBlAkWYkLL60WpOmiK%2FWpzG%2FW4&X-Amz-Signature=ed932db0316b5ba0d59819c25ad2688565c07130cafce40577b16de3de457eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF5LSN4I%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCsaNkHKiiAvlHks0iUkZdOHEkG0nLeAcTBLr1mSDkWmQIgfPpR6L36ZRUUPMJeFtYF8OfDCVExzSkE5ymiiBJakP4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKavMl%2FrPFHVzgsGircA4l8PZL6TrfesUMC3QfF1cN24r5VSHroasjM%2BNYRY3dGnMYaYIrRNIEybnMg3XxWWhpAEI2ablTrEIT04%2Bh%2FV8LBqlOeprP4xS1SUSXBUXWSPrNHfpkC9w6SbQgYTLCgbD7upMp5n2V%2BQZ3tTbsbpvfgzOr6GCavyDKfGCHUsCjk2NmOgpRpEaNX8JZ6zFpLxNIcdwLvrypRe7b0glRAnNIa8XaPNOyuqnzclQ%2FsncnL%2FQOeAFNauJQCUvcVRndAuYZFzldLgm2Lm36zivF6Lrm%2BrEYQIveZMK56miOoTan03wZoiydRNYDkNhZJ804kV5TnrhTH2B2Ests12H34%2FFf%2Fgs%2BnLRbPgctGb%2BJjaKIX%2BjmnVxnqU7DkfwW1yiqspVvIor7YcANpWYzaiz6WQ8aYVRRCWZEmnInnbwQCMC4ZCyCZfYkm1ANyX95NgzghnANjECtAEA6E1AOuy7Rd1nIQLma4bCBHeoquZGjlENGb8XYS05PzP8BD3KXm8Ubsp2TGYctVmzpGtq3Iig%2BxByRilLPy%2FYqk%2BAL1MOhYHxWXVmnE1KbcJdkKO2EILnDXuSBJTqTVdpk%2FgBEMWAH%2BzwibRPth9I3gmr7HZLXr95iNLSbRXEmOh4%2FI83GwMLaHl8sGOqUByvY48qCJd2DD%2FpTX6ZQJkUsRdKOn%2BqcIurEC%2BM7RmzNI6AhWDHRsVdEnbT8MoX1asbrbYzrdFr5LNQa%2BaCZR7TS23GYyryxAHmzs5Aq5X4UG8XXPLhzWNRhagfM8TgEtN35Pioo52Vall%2Bd9in0ZQnkiMQ22NfV3nDf9ZyfqxlePq02ZWaW7AdCKn3WpPrkHHJMBlAkWYkLL60WpOmiK%2FWpzG%2FW4&X-Amz-Signature=2c7b1fc9bd4d0aac34f86e7a20ca1ed21a8cc104b01fdb9ff94e64092c049891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF5LSN4I%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCsaNkHKiiAvlHks0iUkZdOHEkG0nLeAcTBLr1mSDkWmQIgfPpR6L36ZRUUPMJeFtYF8OfDCVExzSkE5ymiiBJakP4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKavMl%2FrPFHVzgsGircA4l8PZL6TrfesUMC3QfF1cN24r5VSHroasjM%2BNYRY3dGnMYaYIrRNIEybnMg3XxWWhpAEI2ablTrEIT04%2Bh%2FV8LBqlOeprP4xS1SUSXBUXWSPrNHfpkC9w6SbQgYTLCgbD7upMp5n2V%2BQZ3tTbsbpvfgzOr6GCavyDKfGCHUsCjk2NmOgpRpEaNX8JZ6zFpLxNIcdwLvrypRe7b0glRAnNIa8XaPNOyuqnzclQ%2FsncnL%2FQOeAFNauJQCUvcVRndAuYZFzldLgm2Lm36zivF6Lrm%2BrEYQIveZMK56miOoTan03wZoiydRNYDkNhZJ804kV5TnrhTH2B2Ests12H34%2FFf%2Fgs%2BnLRbPgctGb%2BJjaKIX%2BjmnVxnqU7DkfwW1yiqspVvIor7YcANpWYzaiz6WQ8aYVRRCWZEmnInnbwQCMC4ZCyCZfYkm1ANyX95NgzghnANjECtAEA6E1AOuy7Rd1nIQLma4bCBHeoquZGjlENGb8XYS05PzP8BD3KXm8Ubsp2TGYctVmzpGtq3Iig%2BxByRilLPy%2FYqk%2BAL1MOhYHxWXVmnE1KbcJdkKO2EILnDXuSBJTqTVdpk%2FgBEMWAH%2BzwibRPth9I3gmr7HZLXr95iNLSbRXEmOh4%2FI83GwMLaHl8sGOqUByvY48qCJd2DD%2FpTX6ZQJkUsRdKOn%2BqcIurEC%2BM7RmzNI6AhWDHRsVdEnbT8MoX1asbrbYzrdFr5LNQa%2BaCZR7TS23GYyryxAHmzs5Aq5X4UG8XXPLhzWNRhagfM8TgEtN35Pioo52Vall%2Bd9in0ZQnkiMQ22NfV3nDf9ZyfqxlePq02ZWaW7AdCKn3WpPrkHHJMBlAkWYkLL60WpOmiK%2FWpzG%2FW4&X-Amz-Signature=9ffa21e4588be3063c2d9c7053af01ff9de6cb2da204d5dfd834629af060d31f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF5LSN4I%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCsaNkHKiiAvlHks0iUkZdOHEkG0nLeAcTBLr1mSDkWmQIgfPpR6L36ZRUUPMJeFtYF8OfDCVExzSkE5ymiiBJakP4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKavMl%2FrPFHVzgsGircA4l8PZL6TrfesUMC3QfF1cN24r5VSHroasjM%2BNYRY3dGnMYaYIrRNIEybnMg3XxWWhpAEI2ablTrEIT04%2Bh%2FV8LBqlOeprP4xS1SUSXBUXWSPrNHfpkC9w6SbQgYTLCgbD7upMp5n2V%2BQZ3tTbsbpvfgzOr6GCavyDKfGCHUsCjk2NmOgpRpEaNX8JZ6zFpLxNIcdwLvrypRe7b0glRAnNIa8XaPNOyuqnzclQ%2FsncnL%2FQOeAFNauJQCUvcVRndAuYZFzldLgm2Lm36zivF6Lrm%2BrEYQIveZMK56miOoTan03wZoiydRNYDkNhZJ804kV5TnrhTH2B2Ests12H34%2FFf%2Fgs%2BnLRbPgctGb%2BJjaKIX%2BjmnVxnqU7DkfwW1yiqspVvIor7YcANpWYzaiz6WQ8aYVRRCWZEmnInnbwQCMC4ZCyCZfYkm1ANyX95NgzghnANjECtAEA6E1AOuy7Rd1nIQLma4bCBHeoquZGjlENGb8XYS05PzP8BD3KXm8Ubsp2TGYctVmzpGtq3Iig%2BxByRilLPy%2FYqk%2BAL1MOhYHxWXVmnE1KbcJdkKO2EILnDXuSBJTqTVdpk%2FgBEMWAH%2BzwibRPth9I3gmr7HZLXr95iNLSbRXEmOh4%2FI83GwMLaHl8sGOqUByvY48qCJd2DD%2FpTX6ZQJkUsRdKOn%2BqcIurEC%2BM7RmzNI6AhWDHRsVdEnbT8MoX1asbrbYzrdFr5LNQa%2BaCZR7TS23GYyryxAHmzs5Aq5X4UG8XXPLhzWNRhagfM8TgEtN35Pioo52Vall%2Bd9in0ZQnkiMQ22NfV3nDf9ZyfqxlePq02ZWaW7AdCKn3WpPrkHHJMBlAkWYkLL60WpOmiK%2FWpzG%2FW4&X-Amz-Signature=ef67025d13d2248b05cd782517ef24a04f82c0d401c909f4841dc55bb8d12ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF5LSN4I%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCsaNkHKiiAvlHks0iUkZdOHEkG0nLeAcTBLr1mSDkWmQIgfPpR6L36ZRUUPMJeFtYF8OfDCVExzSkE5ymiiBJakP4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCKavMl%2FrPFHVzgsGircA4l8PZL6TrfesUMC3QfF1cN24r5VSHroasjM%2BNYRY3dGnMYaYIrRNIEybnMg3XxWWhpAEI2ablTrEIT04%2Bh%2FV8LBqlOeprP4xS1SUSXBUXWSPrNHfpkC9w6SbQgYTLCgbD7upMp5n2V%2BQZ3tTbsbpvfgzOr6GCavyDKfGCHUsCjk2NmOgpRpEaNX8JZ6zFpLxNIcdwLvrypRe7b0glRAnNIa8XaPNOyuqnzclQ%2FsncnL%2FQOeAFNauJQCUvcVRndAuYZFzldLgm2Lm36zivF6Lrm%2BrEYQIveZMK56miOoTan03wZoiydRNYDkNhZJ804kV5TnrhTH2B2Ests12H34%2FFf%2Fgs%2BnLRbPgctGb%2BJjaKIX%2BjmnVxnqU7DkfwW1yiqspVvIor7YcANpWYzaiz6WQ8aYVRRCWZEmnInnbwQCMC4ZCyCZfYkm1ANyX95NgzghnANjECtAEA6E1AOuy7Rd1nIQLma4bCBHeoquZGjlENGb8XYS05PzP8BD3KXm8Ubsp2TGYctVmzpGtq3Iig%2BxByRilLPy%2FYqk%2BAL1MOhYHxWXVmnE1KbcJdkKO2EILnDXuSBJTqTVdpk%2FgBEMWAH%2BzwibRPth9I3gmr7HZLXr95iNLSbRXEmOh4%2FI83GwMLaHl8sGOqUByvY48qCJd2DD%2FpTX6ZQJkUsRdKOn%2BqcIurEC%2BM7RmzNI6AhWDHRsVdEnbT8MoX1asbrbYzrdFr5LNQa%2BaCZR7TS23GYyryxAHmzs5Aq5X4UG8XXPLhzWNRhagfM8TgEtN35Pioo52Vall%2Bd9in0ZQnkiMQ22NfV3nDf9ZyfqxlePq02ZWaW7AdCKn3WpPrkHHJMBlAkWYkLL60WpOmiK%2FWpzG%2FW4&X-Amz-Signature=3e9af2716b7245fc4ee4137ea5fe24719647857a9b168d1e904fd0b63528117a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DU62LUZ%2F20260113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260113T040944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAeGY4JGKcKnRRtLH6m7HA3FX8ba2E9r49XFTTTHf9CWAiBGp6%2FVtoFnTbXcjYOFF8%2B6Ju36bhvEgWdQx0FiYrQfGSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBj9%2BFkXEdAPkKaw%2FKtwD2XVTQK4HQD0JTFvukyGfv5SYKRSmr8WM8txV336gowisSmQaErW95eGdfvz%2FGzwK1bLjEVAqLVFY6RtVwOSI85VNikxfX%2BKaTziYUdbA9vmWsikgYVbvk4ND6yfF9MNIKVwEurRdA%2B21smTMbqrAtRenJvg%2F8Vzk6gqo5S6yIchXXAg%2BtQWaj2sjyL33zAhnHeddQ13YIJFsORXHc0Oejq8RfUVrPnU5RuUphLqMWjF0y1UDPbL4o%2BJ30wlgvxFOQU7dqojGh5z83lbP%2BNDr4AxjM4HG%2F%2FJoAM2FetUzeW1N43pP9PCIMuJdL7thypJRa3gwOHeqHJwe4afjyxV42BcHYDEGgeAlo6VNrhfyV4kYczqO0Wh0Ps%2FiQL8K%2BMnF8I1rCLXD0hFtrgt0rJDtWNQsOFBi2KGxwj0tPO5oODDhiM0oWual6ypbqAFDgrbBrbh6IW767nia0HNpJeWCJQHzXeIIxubxbuFDckhG2Tooe6UXNJlaMNBB4swxJhJ2XikEmDL6wfbK6xxfNIjFoUrZNVkznsrZF4JrvUKmGGhQcu36BzBZKUcYsXsII3Dv%2Brn3UQsPyiRXo0Q6thHvFp8THK4OhcsdAzszPaACu4kx1PJAK8t3lAvxV1gwsoWXywY6pgGQBuE1m9c90LAXiMxIk3CBhIAaDGEFpQGf8otl6YrNgN4UpLZubRfYi6KLYFlyW4aL43Yp4ZWqwGxWZucnrOD%2BCQ2GgEx2N5isUOc5Q8vlmIvCrBob%2F0iezNbHJJQYjPj3Pn3hDU5qg7NRhqVxqdzft%2BMgV3p48b5qHu1ZjtDXzEMrePPIrAHPR4dtla9ZuimjJJIti08cu0kOsjIX%2BOgxpEB7ADwE&X-Amz-Signature=734ae26c934211c309e4db07ca0c10392952abd523a50a6963a1eb4998719288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

