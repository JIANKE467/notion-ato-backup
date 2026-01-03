
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666CBSPIB%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEyD%2BFDSP%2BQ3XM6GIY2UMFJYhJJl2Q%2Bb6QuvsNJNSVmOAiEA77mWTV8%2B3G2%2FxI77Qx%2FK8w3d3g5bhEh2c9Cxoz1dhzsq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDCLuWaAN9pjyEucMNCrcA44Eryc4u%2FAijlstWWUfCNQEHCZI87PXdbzrsTqGKVEazocBCLMyyZBWsTIOBlLdwmer%2BDLFaLgG3iw%2BaavhpfPSlIygBdWewha1ycCmmcQgTaMVtawe8rJmk52xd62TS4fPNJU%2BD7E1YOukI%2FppfGM3WSEG4uMP5UZiHAgPPz4vmbORk3zoFRW4CNMsr%2FI%2FNnLQijIHJ7AWM%2BLDLvhA9OLIG6JVSsXXgdZI0XxOo%2B7b1vgpPrGNNiJlZSZtpyMQABrKeOelxrIbxpmOs7LpuIZ34cnqgG%2BrF1QmOz9z1F3wt7fFllGt%2BNu4ZsqfwuXIC%2FjakDpdsQcoKObXtVa%2F%2BPso0%2BSmD5WJiuOu3JoEcK5n9ZWV4dXDfJqdmfuF%2FP5BAqE1lu5xTyqJvBbTMLJhAZlTpbmQ2sFzcDtCJQXNYGxCjIOKfnIX%2FaBsSHTLIKYz1N8yYAO8RE6NFrHIHJRMy%2B%2B3qV%2BYS%2FO17kJRA%2Ba4KIdqLYiGaepDEza9MBOUBuY6HXPcbxpzXsfFiSqmH7IEPgKd%2FF1x3f6HrmdsYOrl8XUsmaT9YVWKWlij07yJpQBcr8hxG2DlEqgBkVpMHDccPTJOZ%2BDaqBV7ISMkUJzyh9rSRO0kOkr7WPvBc2byMJao4soGOqUB43w8Mja2dnKP8rSyiTWtzrLATcNZTvCugQqhH0DbCq9h0kIn1f7ClFnJIcSJF%2FpmgAaG18g0PNVSsC%2FkMRm0FpC09Z1sCvhgOhA8pH0b2iQ1gpC1TpdNhvUGZQpcnF2nXqXbhyFh0Gf1MeWGFvVeozS6DKpbGdVRHo6iu0ZAxwh84rKL263TweD2AzjR9z8KlzeuZdSVfpY6cM%2F%2BMNDIQsWFNjiJ&X-Amz-Signature=acce9fd008124c36333c0afd038e7701da7b04c80b6b0006433b9c6875ce95cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD3ARHLC%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBNAH7xGhPiuR1RPE%2FkWi77nyjgRzY%2FcGGGhkih6jhi4AiBn4veX7PRWwVncXeewo5NXX7c9qHESkC8rkETaMlfjLCr%2FAwgNEAAaDDYzNzQyMzE4MzgwNSIMMNu46NMMqlFn2Sp6KtwDqf72JEIPU6SPYjbtXOqzimEyeuNdXSZitOovVlVRq5GLJ4siv0pegaygBCfSPxKV6A48rx2UqC3PPEvjX8BL1iRKRbyabOwUVABY6CjoGl6W4QJxLjG11IbuT2KtHfhLOK1Gxl4pcO73rYID9qdNgYHfznaUlG37IhV%2F%2Bh2B%2BXy6ey4iAAZ56a7yez3Vp%2Bcz9heUZVvSkWlmQTQ9Cm%2BetdqQ0z1gJZdafAjtVrKrSY8Hd6H0urAQsDRm4K7LEG2c%2FJcnSG6gPtK57lNT0jtVcXn8qlcCkHxsm2k74W4Q1s65HH0uYkE6faYfQYkxTGEdAVfHxMobtsJMVNoDJwftkQdwNgIoxjDf4e4ZdNrB6ywZPcb%2FmTzdL9PAa0lTTZfXvJ7gpN%2BmENnEzl%2FBzNZQk0kgXOUnko%2FzsaNUFPanlo5wgWknZ75eZbZGLCOkNUDx7eH%2Bu%2FHUVpXl%2B6bxJuuwcytF51u9MVIg8pSITukIWLsJih34Vto2SEG0IGyUSuY%2B7xvHO%2F%2B7%2Bahu%2Bip38nHFQGGgaH1Cjb%2F%2FXvZZyK1HppsEHIMQ0oSRSEXd5fP%2BkRqYvUqXE9To31pv2PQApaBTKvGqT9gdfmCJ%2BLQcLlfphqm4mRSqHpCJ5ZxB7IIww6jiygY6pgEheQLD7SQDUQA9TBQlSkkOnPOu0KaQdELzPfyDyD%2BIkgMaZtQ2QXJuV61a2rU0mWgcKTLnBSW30upFJNXHceWJ1%2F240H2er%2BFrtETzKnKmdB6OctyDzeb4Rc%2FuPWFBjzUkpvrBVeGz00qlHb2Obx%2B%2BhaEJkKYVeDYw%2ByW%2FRlmI5yz27Z7JqYCMdJ54JBq2LpJZVcmSjuWEPHfdHwmH76rbzQx5u3zr&X-Amz-Signature=11bbe706601431b96dda1b006d205ceccf899af8a0eb78ee992969d63abeb036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD3ARHLC%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBNAH7xGhPiuR1RPE%2FkWi77nyjgRzY%2FcGGGhkih6jhi4AiBn4veX7PRWwVncXeewo5NXX7c9qHESkC8rkETaMlfjLCr%2FAwgNEAAaDDYzNzQyMzE4MzgwNSIMMNu46NMMqlFn2Sp6KtwDqf72JEIPU6SPYjbtXOqzimEyeuNdXSZitOovVlVRq5GLJ4siv0pegaygBCfSPxKV6A48rx2UqC3PPEvjX8BL1iRKRbyabOwUVABY6CjoGl6W4QJxLjG11IbuT2KtHfhLOK1Gxl4pcO73rYID9qdNgYHfznaUlG37IhV%2F%2Bh2B%2BXy6ey4iAAZ56a7yez3Vp%2Bcz9heUZVvSkWlmQTQ9Cm%2BetdqQ0z1gJZdafAjtVrKrSY8Hd6H0urAQsDRm4K7LEG2c%2FJcnSG6gPtK57lNT0jtVcXn8qlcCkHxsm2k74W4Q1s65HH0uYkE6faYfQYkxTGEdAVfHxMobtsJMVNoDJwftkQdwNgIoxjDf4e4ZdNrB6ywZPcb%2FmTzdL9PAa0lTTZfXvJ7gpN%2BmENnEzl%2FBzNZQk0kgXOUnko%2FzsaNUFPanlo5wgWknZ75eZbZGLCOkNUDx7eH%2Bu%2FHUVpXl%2B6bxJuuwcytF51u9MVIg8pSITukIWLsJih34Vto2SEG0IGyUSuY%2B7xvHO%2F%2B7%2Bahu%2Bip38nHFQGGgaH1Cjb%2F%2FXvZZyK1HppsEHIMQ0oSRSEXd5fP%2BkRqYvUqXE9To31pv2PQApaBTKvGqT9gdfmCJ%2BLQcLlfphqm4mRSqHpCJ5ZxB7IIww6jiygY6pgEheQLD7SQDUQA9TBQlSkkOnPOu0KaQdELzPfyDyD%2BIkgMaZtQ2QXJuV61a2rU0mWgcKTLnBSW30upFJNXHceWJ1%2F240H2er%2BFrtETzKnKmdB6OctyDzeb4Rc%2FuPWFBjzUkpvrBVeGz00qlHb2Obx%2B%2BhaEJkKYVeDYw%2ByW%2FRlmI5yz27Z7JqYCMdJ54JBq2LpJZVcmSjuWEPHfdHwmH76rbzQx5u3zr&X-Amz-Signature=82e667ead24c7ad41ce7024a8572f6b5e8ac330f84b4af3cf06d7a814ed93122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WYMLB4%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBVQiU9elI2%2B47sVknAgXxTB3L4aUpA5rTICCEzIbSBwAiBIvPxIjLuLhKKrFCAjcmAursL%2Fq0NAtw7JRdMu66DOQCr%2FAwgNEAAaDDYzNzQyMzE4MzgwNSIMqQiW4z%2FQHWdwxidpKtwDMxjYoDgX41vDgFr1r7A0oVqOCbMHeCUt%2FzWeEl%2FtIUrgHb0lEeA2BdFyPd4FVoDNXMHIvckEpn4TYc73lv9gWQj8y4jNZtwhBee6i%2BQRcH3yvEs3BEEPdln%2FhSKuq9gB84zAzLbJJnRsjr4TqbXzVpKc0jR%2FLV28dfoVyOaoFnwcLItMqPwt82iA6LAq%2BD%2B74U0Yanal4JgVvRB71%2F%2FwBsWMKUag2bOAnGe6DyM9vLl3mR%2FLMOJ2eg7p0qKuzywLSQ5crb6Neu%2B8W8zM4%2FKpqIELwdOKL9YRI272%2F2OlRsHIqJ3GwfzU8XaosnlsEsEvk6kQC3etGOjrOG7NJJZ3dez5C4CDvh%2B%2BPaU1pp5awFiU8jpkFVmFsyG%2BB4cuz%2BrwaFSf9kZwYUxMwfpThMtuVFBhnDLxFlWFNqu7EcuTLHolGiGCy%2FmeQ8a3hJc2KY6Wz%2Fv4g04l2Tpt18WtAqNlI%2B6I0qVz06flmdgOuG6v6IETXYWNq9%2BbXQ%2FySYOFCTWotT9vgIMuDy03vsVM%2FngxSqcKep%2F869xnd36dVFlaiXyMSHU8dHA%2BTrRRQuxcRL7ekzkVGiqIzEB5fmUcmXGlkgjOSmUJh4IB%2BUwaNIsQKfAsQ6VJtDYGUmAUGbUwlKjiygY6pgH%2FIScGqfLCgwcj2xJI%2FRIidfteZIY1LZRW1KN%2FZYUVAxt1RT0KhMLc2S10sQNdHrHUlbLkq3AZPr0CnLDZNt625SS0SS%2F%2Few6i9mtn5wi7%2F6OaRKIK9k2FUaK59yGiBSRe%2BWXhXGt5WS4duSw9JFkG0tRyAtH9M7VcEIngBCwFMZqUneD9d1NB%2FV1%2BFx6rqXruLPHwpGDbfIBA%2BmHB7JhDMIw1CadH&X-Amz-Signature=bee0d92daf4c845e8f7e48b01071de9b468ba7bd453d4077330d2e3160b90200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WYMLB4%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBVQiU9elI2%2B47sVknAgXxTB3L4aUpA5rTICCEzIbSBwAiBIvPxIjLuLhKKrFCAjcmAursL%2Fq0NAtw7JRdMu66DOQCr%2FAwgNEAAaDDYzNzQyMzE4MzgwNSIMqQiW4z%2FQHWdwxidpKtwDMxjYoDgX41vDgFr1r7A0oVqOCbMHeCUt%2FzWeEl%2FtIUrgHb0lEeA2BdFyPd4FVoDNXMHIvckEpn4TYc73lv9gWQj8y4jNZtwhBee6i%2BQRcH3yvEs3BEEPdln%2FhSKuq9gB84zAzLbJJnRsjr4TqbXzVpKc0jR%2FLV28dfoVyOaoFnwcLItMqPwt82iA6LAq%2BD%2B74U0Yanal4JgVvRB71%2F%2FwBsWMKUag2bOAnGe6DyM9vLl3mR%2FLMOJ2eg7p0qKuzywLSQ5crb6Neu%2B8W8zM4%2FKpqIELwdOKL9YRI272%2F2OlRsHIqJ3GwfzU8XaosnlsEsEvk6kQC3etGOjrOG7NJJZ3dez5C4CDvh%2B%2BPaU1pp5awFiU8jpkFVmFsyG%2BB4cuz%2BrwaFSf9kZwYUxMwfpThMtuVFBhnDLxFlWFNqu7EcuTLHolGiGCy%2FmeQ8a3hJc2KY6Wz%2Fv4g04l2Tpt18WtAqNlI%2B6I0qVz06flmdgOuG6v6IETXYWNq9%2BbXQ%2FySYOFCTWotT9vgIMuDy03vsVM%2FngxSqcKep%2F869xnd36dVFlaiXyMSHU8dHA%2BTrRRQuxcRL7ekzkVGiqIzEB5fmUcmXGlkgjOSmUJh4IB%2BUwaNIsQKfAsQ6VJtDYGUmAUGbUwlKjiygY6pgH%2FIScGqfLCgwcj2xJI%2FRIidfteZIY1LZRW1KN%2FZYUVAxt1RT0KhMLc2S10sQNdHrHUlbLkq3AZPr0CnLDZNt625SS0SS%2F%2Few6i9mtn5wi7%2F6OaRKIK9k2FUaK59yGiBSRe%2BWXhXGt5WS4duSw9JFkG0tRyAtH9M7VcEIngBCwFMZqUneD9d1NB%2FV1%2BFx6rqXruLPHwpGDbfIBA%2BmHB7JhDMIw1CadH&X-Amz-Signature=74df2ef0556f81812ede22a224c424505a2e305c603abb546984d80bb20589fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WYMLB4%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBVQiU9elI2%2B47sVknAgXxTB3L4aUpA5rTICCEzIbSBwAiBIvPxIjLuLhKKrFCAjcmAursL%2Fq0NAtw7JRdMu66DOQCr%2FAwgNEAAaDDYzNzQyMzE4MzgwNSIMqQiW4z%2FQHWdwxidpKtwDMxjYoDgX41vDgFr1r7A0oVqOCbMHeCUt%2FzWeEl%2FtIUrgHb0lEeA2BdFyPd4FVoDNXMHIvckEpn4TYc73lv9gWQj8y4jNZtwhBee6i%2BQRcH3yvEs3BEEPdln%2FhSKuq9gB84zAzLbJJnRsjr4TqbXzVpKc0jR%2FLV28dfoVyOaoFnwcLItMqPwt82iA6LAq%2BD%2B74U0Yanal4JgVvRB71%2F%2FwBsWMKUag2bOAnGe6DyM9vLl3mR%2FLMOJ2eg7p0qKuzywLSQ5crb6Neu%2B8W8zM4%2FKpqIELwdOKL9YRI272%2F2OlRsHIqJ3GwfzU8XaosnlsEsEvk6kQC3etGOjrOG7NJJZ3dez5C4CDvh%2B%2BPaU1pp5awFiU8jpkFVmFsyG%2BB4cuz%2BrwaFSf9kZwYUxMwfpThMtuVFBhnDLxFlWFNqu7EcuTLHolGiGCy%2FmeQ8a3hJc2KY6Wz%2Fv4g04l2Tpt18WtAqNlI%2B6I0qVz06flmdgOuG6v6IETXYWNq9%2BbXQ%2FySYOFCTWotT9vgIMuDy03vsVM%2FngxSqcKep%2F869xnd36dVFlaiXyMSHU8dHA%2BTrRRQuxcRL7ekzkVGiqIzEB5fmUcmXGlkgjOSmUJh4IB%2BUwaNIsQKfAsQ6VJtDYGUmAUGbUwlKjiygY6pgH%2FIScGqfLCgwcj2xJI%2FRIidfteZIY1LZRW1KN%2FZYUVAxt1RT0KhMLc2S10sQNdHrHUlbLkq3AZPr0CnLDZNt625SS0SS%2F%2Few6i9mtn5wi7%2F6OaRKIK9k2FUaK59yGiBSRe%2BWXhXGt5WS4duSw9JFkG0tRyAtH9M7VcEIngBCwFMZqUneD9d1NB%2FV1%2BFx6rqXruLPHwpGDbfIBA%2BmHB7JhDMIw1CadH&X-Amz-Signature=31db87299554ff0d62b178044d8e67e8c0064759ede2e695400fb78fb6cac742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WYMLB4%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBVQiU9elI2%2B47sVknAgXxTB3L4aUpA5rTICCEzIbSBwAiBIvPxIjLuLhKKrFCAjcmAursL%2Fq0NAtw7JRdMu66DOQCr%2FAwgNEAAaDDYzNzQyMzE4MzgwNSIMqQiW4z%2FQHWdwxidpKtwDMxjYoDgX41vDgFr1r7A0oVqOCbMHeCUt%2FzWeEl%2FtIUrgHb0lEeA2BdFyPd4FVoDNXMHIvckEpn4TYc73lv9gWQj8y4jNZtwhBee6i%2BQRcH3yvEs3BEEPdln%2FhSKuq9gB84zAzLbJJnRsjr4TqbXzVpKc0jR%2FLV28dfoVyOaoFnwcLItMqPwt82iA6LAq%2BD%2B74U0Yanal4JgVvRB71%2F%2FwBsWMKUag2bOAnGe6DyM9vLl3mR%2FLMOJ2eg7p0qKuzywLSQ5crb6Neu%2B8W8zM4%2FKpqIELwdOKL9YRI272%2F2OlRsHIqJ3GwfzU8XaosnlsEsEvk6kQC3etGOjrOG7NJJZ3dez5C4CDvh%2B%2BPaU1pp5awFiU8jpkFVmFsyG%2BB4cuz%2BrwaFSf9kZwYUxMwfpThMtuVFBhnDLxFlWFNqu7EcuTLHolGiGCy%2FmeQ8a3hJc2KY6Wz%2Fv4g04l2Tpt18WtAqNlI%2B6I0qVz06flmdgOuG6v6IETXYWNq9%2BbXQ%2FySYOFCTWotT9vgIMuDy03vsVM%2FngxSqcKep%2F869xnd36dVFlaiXyMSHU8dHA%2BTrRRQuxcRL7ekzkVGiqIzEB5fmUcmXGlkgjOSmUJh4IB%2BUwaNIsQKfAsQ6VJtDYGUmAUGbUwlKjiygY6pgH%2FIScGqfLCgwcj2xJI%2FRIidfteZIY1LZRW1KN%2FZYUVAxt1RT0KhMLc2S10sQNdHrHUlbLkq3AZPr0CnLDZNt625SS0SS%2F%2Few6i9mtn5wi7%2F6OaRKIK9k2FUaK59yGiBSRe%2BWXhXGt5WS4duSw9JFkG0tRyAtH9M7VcEIngBCwFMZqUneD9d1NB%2FV1%2BFx6rqXruLPHwpGDbfIBA%2BmHB7JhDMIw1CadH&X-Amz-Signature=e859402eb62fd8958c5867799a6f980d143299c488c51a3c282543c7a498750e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WYMLB4%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBVQiU9elI2%2B47sVknAgXxTB3L4aUpA5rTICCEzIbSBwAiBIvPxIjLuLhKKrFCAjcmAursL%2Fq0NAtw7JRdMu66DOQCr%2FAwgNEAAaDDYzNzQyMzE4MzgwNSIMqQiW4z%2FQHWdwxidpKtwDMxjYoDgX41vDgFr1r7A0oVqOCbMHeCUt%2FzWeEl%2FtIUrgHb0lEeA2BdFyPd4FVoDNXMHIvckEpn4TYc73lv9gWQj8y4jNZtwhBee6i%2BQRcH3yvEs3BEEPdln%2FhSKuq9gB84zAzLbJJnRsjr4TqbXzVpKc0jR%2FLV28dfoVyOaoFnwcLItMqPwt82iA6LAq%2BD%2B74U0Yanal4JgVvRB71%2F%2FwBsWMKUag2bOAnGe6DyM9vLl3mR%2FLMOJ2eg7p0qKuzywLSQ5crb6Neu%2B8W8zM4%2FKpqIELwdOKL9YRI272%2F2OlRsHIqJ3GwfzU8XaosnlsEsEvk6kQC3etGOjrOG7NJJZ3dez5C4CDvh%2B%2BPaU1pp5awFiU8jpkFVmFsyG%2BB4cuz%2BrwaFSf9kZwYUxMwfpThMtuVFBhnDLxFlWFNqu7EcuTLHolGiGCy%2FmeQ8a3hJc2KY6Wz%2Fv4g04l2Tpt18WtAqNlI%2B6I0qVz06flmdgOuG6v6IETXYWNq9%2BbXQ%2FySYOFCTWotT9vgIMuDy03vsVM%2FngxSqcKep%2F869xnd36dVFlaiXyMSHU8dHA%2BTrRRQuxcRL7ekzkVGiqIzEB5fmUcmXGlkgjOSmUJh4IB%2BUwaNIsQKfAsQ6VJtDYGUmAUGbUwlKjiygY6pgH%2FIScGqfLCgwcj2xJI%2FRIidfteZIY1LZRW1KN%2FZYUVAxt1RT0KhMLc2S10sQNdHrHUlbLkq3AZPr0CnLDZNt625SS0SS%2F%2Few6i9mtn5wi7%2F6OaRKIK9k2FUaK59yGiBSRe%2BWXhXGt5WS4duSw9JFkG0tRyAtH9M7VcEIngBCwFMZqUneD9d1NB%2FV1%2BFx6rqXruLPHwpGDbfIBA%2BmHB7JhDMIw1CadH&X-Amz-Signature=0221ddd3906e46c01233ba505b7d5a4b4bfcd4e90928d3e756bdfa45cbdc8bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WYMLB4%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBVQiU9elI2%2B47sVknAgXxTB3L4aUpA5rTICCEzIbSBwAiBIvPxIjLuLhKKrFCAjcmAursL%2Fq0NAtw7JRdMu66DOQCr%2FAwgNEAAaDDYzNzQyMzE4MzgwNSIMqQiW4z%2FQHWdwxidpKtwDMxjYoDgX41vDgFr1r7A0oVqOCbMHeCUt%2FzWeEl%2FtIUrgHb0lEeA2BdFyPd4FVoDNXMHIvckEpn4TYc73lv9gWQj8y4jNZtwhBee6i%2BQRcH3yvEs3BEEPdln%2FhSKuq9gB84zAzLbJJnRsjr4TqbXzVpKc0jR%2FLV28dfoVyOaoFnwcLItMqPwt82iA6LAq%2BD%2B74U0Yanal4JgVvRB71%2F%2FwBsWMKUag2bOAnGe6DyM9vLl3mR%2FLMOJ2eg7p0qKuzywLSQ5crb6Neu%2B8W8zM4%2FKpqIELwdOKL9YRI272%2F2OlRsHIqJ3GwfzU8XaosnlsEsEvk6kQC3etGOjrOG7NJJZ3dez5C4CDvh%2B%2BPaU1pp5awFiU8jpkFVmFsyG%2BB4cuz%2BrwaFSf9kZwYUxMwfpThMtuVFBhnDLxFlWFNqu7EcuTLHolGiGCy%2FmeQ8a3hJc2KY6Wz%2Fv4g04l2Tpt18WtAqNlI%2B6I0qVz06flmdgOuG6v6IETXYWNq9%2BbXQ%2FySYOFCTWotT9vgIMuDy03vsVM%2FngxSqcKep%2F869xnd36dVFlaiXyMSHU8dHA%2BTrRRQuxcRL7ekzkVGiqIzEB5fmUcmXGlkgjOSmUJh4IB%2BUwaNIsQKfAsQ6VJtDYGUmAUGbUwlKjiygY6pgH%2FIScGqfLCgwcj2xJI%2FRIidfteZIY1LZRW1KN%2FZYUVAxt1RT0KhMLc2S10sQNdHrHUlbLkq3AZPr0CnLDZNt625SS0SS%2F%2Few6i9mtn5wi7%2F6OaRKIK9k2FUaK59yGiBSRe%2BWXhXGt5WS4duSw9JFkG0tRyAtH9M7VcEIngBCwFMZqUneD9d1NB%2FV1%2BFx6rqXruLPHwpGDbfIBA%2BmHB7JhDMIw1CadH&X-Amz-Signature=14c9a0843e49074751684100fb79c992fe95143a64868159dc73fa393fc65003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WYMLB4%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBVQiU9elI2%2B47sVknAgXxTB3L4aUpA5rTICCEzIbSBwAiBIvPxIjLuLhKKrFCAjcmAursL%2Fq0NAtw7JRdMu66DOQCr%2FAwgNEAAaDDYzNzQyMzE4MzgwNSIMqQiW4z%2FQHWdwxidpKtwDMxjYoDgX41vDgFr1r7A0oVqOCbMHeCUt%2FzWeEl%2FtIUrgHb0lEeA2BdFyPd4FVoDNXMHIvckEpn4TYc73lv9gWQj8y4jNZtwhBee6i%2BQRcH3yvEs3BEEPdln%2FhSKuq9gB84zAzLbJJnRsjr4TqbXzVpKc0jR%2FLV28dfoVyOaoFnwcLItMqPwt82iA6LAq%2BD%2B74U0Yanal4JgVvRB71%2F%2FwBsWMKUag2bOAnGe6DyM9vLl3mR%2FLMOJ2eg7p0qKuzywLSQ5crb6Neu%2B8W8zM4%2FKpqIELwdOKL9YRI272%2F2OlRsHIqJ3GwfzU8XaosnlsEsEvk6kQC3etGOjrOG7NJJZ3dez5C4CDvh%2B%2BPaU1pp5awFiU8jpkFVmFsyG%2BB4cuz%2BrwaFSf9kZwYUxMwfpThMtuVFBhnDLxFlWFNqu7EcuTLHolGiGCy%2FmeQ8a3hJc2KY6Wz%2Fv4g04l2Tpt18WtAqNlI%2B6I0qVz06flmdgOuG6v6IETXYWNq9%2BbXQ%2FySYOFCTWotT9vgIMuDy03vsVM%2FngxSqcKep%2F869xnd36dVFlaiXyMSHU8dHA%2BTrRRQuxcRL7ekzkVGiqIzEB5fmUcmXGlkgjOSmUJh4IB%2BUwaNIsQKfAsQ6VJtDYGUmAUGbUwlKjiygY6pgH%2FIScGqfLCgwcj2xJI%2FRIidfteZIY1LZRW1KN%2FZYUVAxt1RT0KhMLc2S10sQNdHrHUlbLkq3AZPr0CnLDZNt625SS0SS%2F%2Few6i9mtn5wi7%2F6OaRKIK9k2FUaK59yGiBSRe%2BWXhXGt5WS4duSw9JFkG0tRyAtH9M7VcEIngBCwFMZqUneD9d1NB%2FV1%2BFx6rqXruLPHwpGDbfIBA%2BmHB7JhDMIw1CadH&X-Amz-Signature=a356913a8c01523daf90a3e93e8289c15a06fae5e2c09dfa25ea65dc663f3d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVBKJ3O%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCsu5Vs6srwDZcNKL1Nkmt6fPBb%2BbaB3ltFX%2BJ9ii%2BmjgIhAPLUwIv40xgdUt0RDrgF%2Ffh3TFqHhsvyYWN78ZJ2kgDYKv8DCA0QABoMNjM3NDIzMTgzODA1IgymzYfo6C1CsXiflskq3AMXafKiE5GDD3Qs%2BY75RYrhWwr97OPUnQB5T8oxza0kFhE8AEbqdj2ZsZmvBOKeIKGQg9wIu77jPgyJ95Exs%2BhFlbsBlXHUMxzL262wURV9z0aUb3%2Fk0tMAclFccsR0tp6ZWO4WYBZr6fOTIkyujuptwb9W3Fx0%2FbR2JMzK5RiaB1%2F3pPMZr7mZjAeHG5CPx17sX0Y1vFBzn31QtqHfMa%2By5zyRJ9h%2FaVe8ldxM0X9WU3Y%2FS7Snj8OSHs58PTzZYueF4iuqRqFXULmExlszyuXgsWNmNjWfNo3rN3n1nvV%2BfUgbzVqIwDVquM0hs1fcg32sqH8DhGmGhXgiWtdwC%2FpGVY2PlKYr1hKW%2BcNdgpIQ5roP%2FUFfj1u7Dc4gStShjSqgotef2W3K8Ff%2FaCYA%2BiGG2XbKxHOeFArK%2FcJFjZjlN0mW9d4djtoIFkHUKz6TkCT9CjkznRwQFUO3kUjf94RZFFrafiADw%2BG%2BIZhBIybRswKiHY4kc%2FSjmohDr8IYoSKBnieLHzsmM52LTeyKEWoNhYd7jMyCARnWmkS9N2zAyGupBOwXTsgqVWGCNBlorVuWDJ4S1vnBvgMRcCQoyo6SSd4v5DCt4zGKPH7tO%2FHWozNnXBwz8Pc8rxf49DCAqOLKBjqkAXKauszPaaLRmGpzTlpmohYWkTZf8ZUFs9ruT2du0DIjrzi5ftcxwFiJuk%2FG2%2BoVdFXeQLHsozmC8G%2BPi5e0fw%2B8osDPElOym8VG13WQbMVzhYjAHEqzyKfZAnJfa6u1W%2Bfq6L7Pgw%2FgDfcG4gGGy%2FbBXu9vaPU41w8Vsa8hmIFmfiUgT0xSna%2FG3LRainQ60LYAvCLnWUXV78QSzvMauo36m8hW&X-Amz-Signature=2cf2667845267dfa67f179f50bc5e341986745245751d8d377fc982c6729cc87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVBKJ3O%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCsu5Vs6srwDZcNKL1Nkmt6fPBb%2BbaB3ltFX%2BJ9ii%2BmjgIhAPLUwIv40xgdUt0RDrgF%2Ffh3TFqHhsvyYWN78ZJ2kgDYKv8DCA0QABoMNjM3NDIzMTgzODA1IgymzYfo6C1CsXiflskq3AMXafKiE5GDD3Qs%2BY75RYrhWwr97OPUnQB5T8oxza0kFhE8AEbqdj2ZsZmvBOKeIKGQg9wIu77jPgyJ95Exs%2BhFlbsBlXHUMxzL262wURV9z0aUb3%2Fk0tMAclFccsR0tp6ZWO4WYBZr6fOTIkyujuptwb9W3Fx0%2FbR2JMzK5RiaB1%2F3pPMZr7mZjAeHG5CPx17sX0Y1vFBzn31QtqHfMa%2By5zyRJ9h%2FaVe8ldxM0X9WU3Y%2FS7Snj8OSHs58PTzZYueF4iuqRqFXULmExlszyuXgsWNmNjWfNo3rN3n1nvV%2BfUgbzVqIwDVquM0hs1fcg32sqH8DhGmGhXgiWtdwC%2FpGVY2PlKYr1hKW%2BcNdgpIQ5roP%2FUFfj1u7Dc4gStShjSqgotef2W3K8Ff%2FaCYA%2BiGG2XbKxHOeFArK%2FcJFjZjlN0mW9d4djtoIFkHUKz6TkCT9CjkznRwQFUO3kUjf94RZFFrafiADw%2BG%2BIZhBIybRswKiHY4kc%2FSjmohDr8IYoSKBnieLHzsmM52LTeyKEWoNhYd7jMyCARnWmkS9N2zAyGupBOwXTsgqVWGCNBlorVuWDJ4S1vnBvgMRcCQoyo6SSd4v5DCt4zGKPH7tO%2FHWozNnXBwz8Pc8rxf49DCAqOLKBjqkAXKauszPaaLRmGpzTlpmohYWkTZf8ZUFs9ruT2du0DIjrzi5ftcxwFiJuk%2FG2%2BoVdFXeQLHsozmC8G%2BPi5e0fw%2B8osDPElOym8VG13WQbMVzhYjAHEqzyKfZAnJfa6u1W%2Bfq6L7Pgw%2FgDfcG4gGGy%2FbBXu9vaPU41w8Vsa8hmIFmfiUgT0xSna%2FG3LRainQ60LYAvCLnWUXV78QSzvMauo36m8hW&X-Amz-Signature=566c4c066a3a3d28a2a94fa4c0ec18313483238e1bad8c0719d84779a82ac0c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVBKJ3O%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCsu5Vs6srwDZcNKL1Nkmt6fPBb%2BbaB3ltFX%2BJ9ii%2BmjgIhAPLUwIv40xgdUt0RDrgF%2Ffh3TFqHhsvyYWN78ZJ2kgDYKv8DCA0QABoMNjM3NDIzMTgzODA1IgymzYfo6C1CsXiflskq3AMXafKiE5GDD3Qs%2BY75RYrhWwr97OPUnQB5T8oxza0kFhE8AEbqdj2ZsZmvBOKeIKGQg9wIu77jPgyJ95Exs%2BhFlbsBlXHUMxzL262wURV9z0aUb3%2Fk0tMAclFccsR0tp6ZWO4WYBZr6fOTIkyujuptwb9W3Fx0%2FbR2JMzK5RiaB1%2F3pPMZr7mZjAeHG5CPx17sX0Y1vFBzn31QtqHfMa%2By5zyRJ9h%2FaVe8ldxM0X9WU3Y%2FS7Snj8OSHs58PTzZYueF4iuqRqFXULmExlszyuXgsWNmNjWfNo3rN3n1nvV%2BfUgbzVqIwDVquM0hs1fcg32sqH8DhGmGhXgiWtdwC%2FpGVY2PlKYr1hKW%2BcNdgpIQ5roP%2FUFfj1u7Dc4gStShjSqgotef2W3K8Ff%2FaCYA%2BiGG2XbKxHOeFArK%2FcJFjZjlN0mW9d4djtoIFkHUKz6TkCT9CjkznRwQFUO3kUjf94RZFFrafiADw%2BG%2BIZhBIybRswKiHY4kc%2FSjmohDr8IYoSKBnieLHzsmM52LTeyKEWoNhYd7jMyCARnWmkS9N2zAyGupBOwXTsgqVWGCNBlorVuWDJ4S1vnBvgMRcCQoyo6SSd4v5DCt4zGKPH7tO%2FHWozNnXBwz8Pc8rxf49DCAqOLKBjqkAXKauszPaaLRmGpzTlpmohYWkTZf8ZUFs9ruT2du0DIjrzi5ftcxwFiJuk%2FG2%2BoVdFXeQLHsozmC8G%2BPi5e0fw%2B8osDPElOym8VG13WQbMVzhYjAHEqzyKfZAnJfa6u1W%2Bfq6L7Pgw%2FgDfcG4gGGy%2FbBXu9vaPU41w8Vsa8hmIFmfiUgT0xSna%2FG3LRainQ60LYAvCLnWUXV78QSzvMauo36m8hW&X-Amz-Signature=c25f8909db4c2c7b8f49ad537efe64eeac1ae96b568d15808c8eae35786e23ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVBKJ3O%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCsu5Vs6srwDZcNKL1Nkmt6fPBb%2BbaB3ltFX%2BJ9ii%2BmjgIhAPLUwIv40xgdUt0RDrgF%2Ffh3TFqHhsvyYWN78ZJ2kgDYKv8DCA0QABoMNjM3NDIzMTgzODA1IgymzYfo6C1CsXiflskq3AMXafKiE5GDD3Qs%2BY75RYrhWwr97OPUnQB5T8oxza0kFhE8AEbqdj2ZsZmvBOKeIKGQg9wIu77jPgyJ95Exs%2BhFlbsBlXHUMxzL262wURV9z0aUb3%2Fk0tMAclFccsR0tp6ZWO4WYBZr6fOTIkyujuptwb9W3Fx0%2FbR2JMzK5RiaB1%2F3pPMZr7mZjAeHG5CPx17sX0Y1vFBzn31QtqHfMa%2By5zyRJ9h%2FaVe8ldxM0X9WU3Y%2FS7Snj8OSHs58PTzZYueF4iuqRqFXULmExlszyuXgsWNmNjWfNo3rN3n1nvV%2BfUgbzVqIwDVquM0hs1fcg32sqH8DhGmGhXgiWtdwC%2FpGVY2PlKYr1hKW%2BcNdgpIQ5roP%2FUFfj1u7Dc4gStShjSqgotef2W3K8Ff%2FaCYA%2BiGG2XbKxHOeFArK%2FcJFjZjlN0mW9d4djtoIFkHUKz6TkCT9CjkznRwQFUO3kUjf94RZFFrafiADw%2BG%2BIZhBIybRswKiHY4kc%2FSjmohDr8IYoSKBnieLHzsmM52LTeyKEWoNhYd7jMyCARnWmkS9N2zAyGupBOwXTsgqVWGCNBlorVuWDJ4S1vnBvgMRcCQoyo6SSd4v5DCt4zGKPH7tO%2FHWozNnXBwz8Pc8rxf49DCAqOLKBjqkAXKauszPaaLRmGpzTlpmohYWkTZf8ZUFs9ruT2du0DIjrzi5ftcxwFiJuk%2FG2%2BoVdFXeQLHsozmC8G%2BPi5e0fw%2B8osDPElOym8VG13WQbMVzhYjAHEqzyKfZAnJfa6u1W%2Bfq6L7Pgw%2FgDfcG4gGGy%2FbBXu9vaPU41w8Vsa8hmIFmfiUgT0xSna%2FG3LRainQ60LYAvCLnWUXV78QSzvMauo36m8hW&X-Amz-Signature=65119db3d74def2b94b0c677d02faa898658ed5c80ebcd4d02d89ecd2b6eaa54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVBKJ3O%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCsu5Vs6srwDZcNKL1Nkmt6fPBb%2BbaB3ltFX%2BJ9ii%2BmjgIhAPLUwIv40xgdUt0RDrgF%2Ffh3TFqHhsvyYWN78ZJ2kgDYKv8DCA0QABoMNjM3NDIzMTgzODA1IgymzYfo6C1CsXiflskq3AMXafKiE5GDD3Qs%2BY75RYrhWwr97OPUnQB5T8oxza0kFhE8AEbqdj2ZsZmvBOKeIKGQg9wIu77jPgyJ95Exs%2BhFlbsBlXHUMxzL262wURV9z0aUb3%2Fk0tMAclFccsR0tp6ZWO4WYBZr6fOTIkyujuptwb9W3Fx0%2FbR2JMzK5RiaB1%2F3pPMZr7mZjAeHG5CPx17sX0Y1vFBzn31QtqHfMa%2By5zyRJ9h%2FaVe8ldxM0X9WU3Y%2FS7Snj8OSHs58PTzZYueF4iuqRqFXULmExlszyuXgsWNmNjWfNo3rN3n1nvV%2BfUgbzVqIwDVquM0hs1fcg32sqH8DhGmGhXgiWtdwC%2FpGVY2PlKYr1hKW%2BcNdgpIQ5roP%2FUFfj1u7Dc4gStShjSqgotef2W3K8Ff%2FaCYA%2BiGG2XbKxHOeFArK%2FcJFjZjlN0mW9d4djtoIFkHUKz6TkCT9CjkznRwQFUO3kUjf94RZFFrafiADw%2BG%2BIZhBIybRswKiHY4kc%2FSjmohDr8IYoSKBnieLHzsmM52LTeyKEWoNhYd7jMyCARnWmkS9N2zAyGupBOwXTsgqVWGCNBlorVuWDJ4S1vnBvgMRcCQoyo6SSd4v5DCt4zGKPH7tO%2FHWozNnXBwz8Pc8rxf49DCAqOLKBjqkAXKauszPaaLRmGpzTlpmohYWkTZf8ZUFs9ruT2du0DIjrzi5ftcxwFiJuk%2FG2%2BoVdFXeQLHsozmC8G%2BPi5e0fw%2B8osDPElOym8VG13WQbMVzhYjAHEqzyKfZAnJfa6u1W%2Bfq6L7Pgw%2FgDfcG4gGGy%2FbBXu9vaPU41w8Vsa8hmIFmfiUgT0xSna%2FG3LRainQ60LYAvCLnWUXV78QSzvMauo36m8hW&X-Amz-Signature=bede650cd33acc6c3d0c705d4dc3cbdd427c55f787795a2d9e97ad84f59f3cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SPER3RG%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIAzpdoREO6t2%2FgL17MpNQVFUmBpMgwBFGv80lzXlSUHHAiEAzKjsNttEcbAqQoXX%2BaAFgEZn2sKn%2FmodEISfqKNd%2FmYq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDIbaXPXaJGeimeLxmyrcA0bXi41jmP5KN%2B8uiNxZ9%2FuEnKMcK4tg2R7zjyXyBsw7bQBHhcxo6o4NzjqS41TlMnIaFAdy%2F%2ByuA9wxmRQBYWfEtIaeB5KSbLCQyw7%2FPobC%2FHaEqKnQUg1pe6OXFoL5WEcX0LXGkLdD1bv3ufOiW7M%2FqzwiQtKsv0D9QQ5f6KJ8OzXsdXt8AhuXe2M0vA7ddX51sjY1uiYedgpAdHhfZgOFbIKQOrbRwsIdl8nb%2BVXt84hW2IZVXsN2%2BkmyWU6C5aIMzD%2BU4bRHZivWctori6KJ2xPk7UEdF9e5sj2fGPCqIVzxBHiaTyAEiOGHKvZisIMrRdA0JmbxzN2hJZEG0oDwdaT9WWrsKixytmVan95FlyOwxzL386l9dh3Dnmxe6n0f7717xOBFbAIlrZ%2BQdXz61tYfF927ltDnnEBWNU5tI31RDB6rf1YJdeyoFqsrzLnu8b77N2GfBGzVqMnwUpvHxv4CFx%2Bllt0MTqzG%2F7rhddn09FV%2BP14a6nd6bKbA6obARqtPF%2BdDgnDeryGOiQxGqD24MC3oYsSkI4jYBp9LsilYeHZw9raNtDH%2BKjsz8oX8R1ZiOxTL0oErRU%2FlvK9jsr%2B7M65Uh4pAoJMrpR1DWPaZ1%2BmeTuQ7sr01MMmn4soGOqUBopfj7o5NMfVv2oiNpecdVdG4IrvBTWRpUV3gytGGUcHHXraAv2mAAm2MCvz9xfUdzrZ52zXj%2B3RminziJq3y7lg%2FBOHIwaZQa1uVGQqZQoDM6SKMo1hI213i0yHWig6DTUD77Y407n%2FBcwfVRswIoY2KR44XWuVdVd5LO08I%2FLGToKoJB0Qa4uwqM63Cylz3KdrgieUoVMl8zgg%2FrBCrJjAH%2F0tv&X-Amz-Signature=9610719c5d291ffb5e3c882016689cde91b42565b7131b8778386209890b5eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SPER3RG%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIAzpdoREO6t2%2FgL17MpNQVFUmBpMgwBFGv80lzXlSUHHAiEAzKjsNttEcbAqQoXX%2BaAFgEZn2sKn%2FmodEISfqKNd%2FmYq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDIbaXPXaJGeimeLxmyrcA0bXi41jmP5KN%2B8uiNxZ9%2FuEnKMcK4tg2R7zjyXyBsw7bQBHhcxo6o4NzjqS41TlMnIaFAdy%2F%2ByuA9wxmRQBYWfEtIaeB5KSbLCQyw7%2FPobC%2FHaEqKnQUg1pe6OXFoL5WEcX0LXGkLdD1bv3ufOiW7M%2FqzwiQtKsv0D9QQ5f6KJ8OzXsdXt8AhuXe2M0vA7ddX51sjY1uiYedgpAdHhfZgOFbIKQOrbRwsIdl8nb%2BVXt84hW2IZVXsN2%2BkmyWU6C5aIMzD%2BU4bRHZivWctori6KJ2xPk7UEdF9e5sj2fGPCqIVzxBHiaTyAEiOGHKvZisIMrRdA0JmbxzN2hJZEG0oDwdaT9WWrsKixytmVan95FlyOwxzL386l9dh3Dnmxe6n0f7717xOBFbAIlrZ%2BQdXz61tYfF927ltDnnEBWNU5tI31RDB6rf1YJdeyoFqsrzLnu8b77N2GfBGzVqMnwUpvHxv4CFx%2Bllt0MTqzG%2F7rhddn09FV%2BP14a6nd6bKbA6obARqtPF%2BdDgnDeryGOiQxGqD24MC3oYsSkI4jYBp9LsilYeHZw9raNtDH%2BKjsz8oX8R1ZiOxTL0oErRU%2FlvK9jsr%2B7M65Uh4pAoJMrpR1DWPaZ1%2BmeTuQ7sr01MMmn4soGOqUBopfj7o5NMfVv2oiNpecdVdG4IrvBTWRpUV3gytGGUcHHXraAv2mAAm2MCvz9xfUdzrZ52zXj%2B3RminziJq3y7lg%2FBOHIwaZQa1uVGQqZQoDM6SKMo1hI213i0yHWig6DTUD77Y407n%2FBcwfVRswIoY2KR44XWuVdVd5LO08I%2FLGToKoJB0Qa4uwqM63Cylz3KdrgieUoVMl8zgg%2FrBCrJjAH%2F0tv&X-Amz-Signature=057e2c2375ad5deb3339135c7709a6b4fc0119f900cfa275814fcfa1bee73d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SPER3RG%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIAzpdoREO6t2%2FgL17MpNQVFUmBpMgwBFGv80lzXlSUHHAiEAzKjsNttEcbAqQoXX%2BaAFgEZn2sKn%2FmodEISfqKNd%2FmYq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDIbaXPXaJGeimeLxmyrcA0bXi41jmP5KN%2B8uiNxZ9%2FuEnKMcK4tg2R7zjyXyBsw7bQBHhcxo6o4NzjqS41TlMnIaFAdy%2F%2ByuA9wxmRQBYWfEtIaeB5KSbLCQyw7%2FPobC%2FHaEqKnQUg1pe6OXFoL5WEcX0LXGkLdD1bv3ufOiW7M%2FqzwiQtKsv0D9QQ5f6KJ8OzXsdXt8AhuXe2M0vA7ddX51sjY1uiYedgpAdHhfZgOFbIKQOrbRwsIdl8nb%2BVXt84hW2IZVXsN2%2BkmyWU6C5aIMzD%2BU4bRHZivWctori6KJ2xPk7UEdF9e5sj2fGPCqIVzxBHiaTyAEiOGHKvZisIMrRdA0JmbxzN2hJZEG0oDwdaT9WWrsKixytmVan95FlyOwxzL386l9dh3Dnmxe6n0f7717xOBFbAIlrZ%2BQdXz61tYfF927ltDnnEBWNU5tI31RDB6rf1YJdeyoFqsrzLnu8b77N2GfBGzVqMnwUpvHxv4CFx%2Bllt0MTqzG%2F7rhddn09FV%2BP14a6nd6bKbA6obARqtPF%2BdDgnDeryGOiQxGqD24MC3oYsSkI4jYBp9LsilYeHZw9raNtDH%2BKjsz8oX8R1ZiOxTL0oErRU%2FlvK9jsr%2B7M65Uh4pAoJMrpR1DWPaZ1%2BmeTuQ7sr01MMmn4soGOqUBopfj7o5NMfVv2oiNpecdVdG4IrvBTWRpUV3gytGGUcHHXraAv2mAAm2MCvz9xfUdzrZ52zXj%2B3RminziJq3y7lg%2FBOHIwaZQa1uVGQqZQoDM6SKMo1hI213i0yHWig6DTUD77Y407n%2FBcwfVRswIoY2KR44XWuVdVd5LO08I%2FLGToKoJB0Qa4uwqM63Cylz3KdrgieUoVMl8zgg%2FrBCrJjAH%2F0tv&X-Amz-Signature=e555183c96c4a722d3d676fe3ebca93c1d0fafcbcac6a8a7c580793a7e7080c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ASG2PGP%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIF8C1uiu2kVoQyG8k%2Bkw4n7JnbpbBr%2BhpYI5mKaTGs4RAiBHPHKnpWjNlLOd62Ed66kco%2Fzl8LakA7Apo6ig9OFoNSr%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIM4wTPI6R40tYdusy6KtwDvx42wZqugRVH%2FR8PzS7jFyYb%2FQaNZ9zUlTRMXOhq4XLu2lKp2mUMwd6sBMgMpPT%2FDMukWphSem6s3aZbE8WvmxQBTL7DScOUG8A0QfxdhgCf8N6nWGZh7t5KgLXMqyL%2BSAEUbDk6Ii3Hl%2BpjiWyHNwl3S8plmh%2F1boiN2U1ZnivItSfix2kBlCbzxNKGvgEt%2FJ0mPpQteZSMiKoNkwzeYS9Ab7w4VOaLuvsLs15eNHijYgxTxuZyvHMsdjam4JaapVYumotiaYPOZtKTyqI72R3QiJJv5NfFPCbMYCozePwB8IqxIYcejdelnPsZAlC5eTSHgDmjJBS7YKvjiR4Y1QQJZCNvVzJyiiATYug%2FUEP7vLECUDfn2LCufYJyUqAihE%2FrXKNNQ5qewyH4pl0tMVKXJk%2FyQgXO4rJ4BAQcI5g%2FlakZxHVnsYi7ALCr55KzRMEGCx3HgiJnrc344gfmW%2BkHIGOhCTVIjbaNd%2BFFajh5IB5mBUIn%2Fr37zJ7JL%2BCXIuKkYEAmFHtvhSMxuzRU2zoDxwSOWoBscEDgRSn3xrV0FaR0eqoYnQ89qVm75QAstKe9RduazPSwmhbksAKx7H1JTN8vwZ9s%2FjpRUThBFSACf%2F1CbMDgPiQByPkwkuLhygY6pgFOOp%2BJhAbZ68y3sueQl9TRAr%2BUSPJrXf2KxaOJ7r0b1QykPBDqh3sst%2FkEBjMuTZ6JVzbiuKpm6rFjxvqbbyZQnnF552EETR8FrjjzKOhby2e1%2FVu%2Bwp4t6ANrvD6VNsi1zjhGUIdci65WMvilmybRxp7pSOVuGeVtn%2F99wLd5vkXWAk9x1JVc3sSnuFKV69ZWyiT%2BGn8Ey%2Bs3K%2BkFKCoE4yR9xHhR&X-Amz-Signature=b81ab0f2ccbef2dc1e908d11a3b4736839999ae060bb9c3d3b4bbc7ec84b46a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ASG2PGP%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIF8C1uiu2kVoQyG8k%2Bkw4n7JnbpbBr%2BhpYI5mKaTGs4RAiBHPHKnpWjNlLOd62Ed66kco%2Fzl8LakA7Apo6ig9OFoNSr%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIM4wTPI6R40tYdusy6KtwDvx42wZqugRVH%2FR8PzS7jFyYb%2FQaNZ9zUlTRMXOhq4XLu2lKp2mUMwd6sBMgMpPT%2FDMukWphSem6s3aZbE8WvmxQBTL7DScOUG8A0QfxdhgCf8N6nWGZh7t5KgLXMqyL%2BSAEUbDk6Ii3Hl%2BpjiWyHNwl3S8plmh%2F1boiN2U1ZnivItSfix2kBlCbzxNKGvgEt%2FJ0mPpQteZSMiKoNkwzeYS9Ab7w4VOaLuvsLs15eNHijYgxTxuZyvHMsdjam4JaapVYumotiaYPOZtKTyqI72R3QiJJv5NfFPCbMYCozePwB8IqxIYcejdelnPsZAlC5eTSHgDmjJBS7YKvjiR4Y1QQJZCNvVzJyiiATYug%2FUEP7vLECUDfn2LCufYJyUqAihE%2FrXKNNQ5qewyH4pl0tMVKXJk%2FyQgXO4rJ4BAQcI5g%2FlakZxHVnsYi7ALCr55KzRMEGCx3HgiJnrc344gfmW%2BkHIGOhCTVIjbaNd%2BFFajh5IB5mBUIn%2Fr37zJ7JL%2BCXIuKkYEAmFHtvhSMxuzRU2zoDxwSOWoBscEDgRSn3xrV0FaR0eqoYnQ89qVm75QAstKe9RduazPSwmhbksAKx7H1JTN8vwZ9s%2FjpRUThBFSACf%2F1CbMDgPiQByPkwkuLhygY6pgFOOp%2BJhAbZ68y3sueQl9TRAr%2BUSPJrXf2KxaOJ7r0b1QykPBDqh3sst%2FkEBjMuTZ6JVzbiuKpm6rFjxvqbbyZQnnF552EETR8FrjjzKOhby2e1%2FVu%2Bwp4t6ANrvD6VNsi1zjhGUIdci65WMvilmybRxp7pSOVuGeVtn%2F99wLd5vkXWAk9x1JVc3sSnuFKV69ZWyiT%2BGn8Ey%2Bs3K%2BkFKCoE4yR9xHhR&X-Amz-Signature=9a02cf3d4abec59adb0513163823b16db0785be24e25a9926763a649f09ddfcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQZ375Q%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDwjCrTwMoUgTai5d4bJNZHiIJHQvrMubMzh8I8FIU1WwIgRGr2WYh5L9lgvzMxdXmchyVc9CJJKAa9vpIz0fg3tssq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDE1Iy5OFL%2FCS8sybrSrcA8bizlGsrSK3GAJZdU1cpyNuujbl2%2FpRtDQmpkGzVnflZWfLuEMdKfzV8RVOpTB%2BvlbIfmkEElF%2BANrTXNahH7ppogZxCij2UJGLBYm72U2mPp82xi1xaigO1wwYu6Lw4wXUOe8S%2FnVNTFtlFOt%2BhsVKIZkOsHXbVPVYW6evJy5gouQi2kZze3KU9LvWoHhmbxsuC%2FRyYHoH9QWuVAz%2B6ijrYPnvhQTTEJDUe2sb4TamKADKcJqaRU7xD%2Figosvce1hPFoHPN%2Fya5dEStqrErrjoyg%2BsvgC24o9obRhcGCnTx4xH496oNKTddx%2FGa%2FrPMalgrmC59BRrsWMHw7Ni9Zb%2BIUKALeCB7jWo3698Yg0E1Rp2Qdtw0mncgyB1zOhq4qwdwkOky6nWbNiSodbgEbtSnHJeKi6MLqdCDJOTv34T7gOgTqmH8JDPk4pmri%2BBaNGBsUexwjXx1GA3tEk31JFe%2B5%2B91r6Hs8zFp16ADm%2F7siHx2InNtnUmjC6Eah9R0iBCOgz448UdqlcA83vrjziQEhSQBAR4lam%2FZeY60oUcyg6GuSxJ0%2F8vsjoLJNkkF6pdBOjmNjCki7cL5GtvBqt2Ws9nMISptEA%2BURfIJfwq%2BkLEFhc78SF0zOuLMMan4soGOqUB7njDHL2D%2Fq22ZmotsJs3j7TxMcTNMmlKCx9b%2FmAWtVtVlZUySsDAV8rK86wNTAZAtTUqs07n3s2THlkcn9xSed8%2BZbA31mkfEQdSYouHIgIj%2FkP1IURGj7s8YqJMeQngm79kGRJuP6ZHpGww47iLNDK9U9Ki2KUG3JFMWm%2Bbnb87jcW77PowVykbOw%2B8gtcfL9N%2BIQcL40MSrCsUgDYASn6eRp65&X-Amz-Signature=3ab68028657590c43077c2035e9e358b4802e36bc58596621c4badd085e3d6b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQZ375Q%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDwjCrTwMoUgTai5d4bJNZHiIJHQvrMubMzh8I8FIU1WwIgRGr2WYh5L9lgvzMxdXmchyVc9CJJKAa9vpIz0fg3tssq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDE1Iy5OFL%2FCS8sybrSrcA8bizlGsrSK3GAJZdU1cpyNuujbl2%2FpRtDQmpkGzVnflZWfLuEMdKfzV8RVOpTB%2BvlbIfmkEElF%2BANrTXNahH7ppogZxCij2UJGLBYm72U2mPp82xi1xaigO1wwYu6Lw4wXUOe8S%2FnVNTFtlFOt%2BhsVKIZkOsHXbVPVYW6evJy5gouQi2kZze3KU9LvWoHhmbxsuC%2FRyYHoH9QWuVAz%2B6ijrYPnvhQTTEJDUe2sb4TamKADKcJqaRU7xD%2Figosvce1hPFoHPN%2Fya5dEStqrErrjoyg%2BsvgC24o9obRhcGCnTx4xH496oNKTddx%2FGa%2FrPMalgrmC59BRrsWMHw7Ni9Zb%2BIUKALeCB7jWo3698Yg0E1Rp2Qdtw0mncgyB1zOhq4qwdwkOky6nWbNiSodbgEbtSnHJeKi6MLqdCDJOTv34T7gOgTqmH8JDPk4pmri%2BBaNGBsUexwjXx1GA3tEk31JFe%2B5%2B91r6Hs8zFp16ADm%2F7siHx2InNtnUmjC6Eah9R0iBCOgz448UdqlcA83vrjziQEhSQBAR4lam%2FZeY60oUcyg6GuSxJ0%2F8vsjoLJNkkF6pdBOjmNjCki7cL5GtvBqt2Ws9nMISptEA%2BURfIJfwq%2BkLEFhc78SF0zOuLMMan4soGOqUB7njDHL2D%2Fq22ZmotsJs3j7TxMcTNMmlKCx9b%2FmAWtVtVlZUySsDAV8rK86wNTAZAtTUqs07n3s2THlkcn9xSed8%2BZbA31mkfEQdSYouHIgIj%2FkP1IURGj7s8YqJMeQngm79kGRJuP6ZHpGww47iLNDK9U9Ki2KUG3JFMWm%2Bbnb87jcW77PowVykbOw%2B8gtcfL9N%2BIQcL40MSrCsUgDYASn6eRp65&X-Amz-Signature=0716bb91f10e1429e3f4f910b9ae9394f546479038e9fd8f0224123bd6722d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQZ375Q%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDwjCrTwMoUgTai5d4bJNZHiIJHQvrMubMzh8I8FIU1WwIgRGr2WYh5L9lgvzMxdXmchyVc9CJJKAa9vpIz0fg3tssq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDE1Iy5OFL%2FCS8sybrSrcA8bizlGsrSK3GAJZdU1cpyNuujbl2%2FpRtDQmpkGzVnflZWfLuEMdKfzV8RVOpTB%2BvlbIfmkEElF%2BANrTXNahH7ppogZxCij2UJGLBYm72U2mPp82xi1xaigO1wwYu6Lw4wXUOe8S%2FnVNTFtlFOt%2BhsVKIZkOsHXbVPVYW6evJy5gouQi2kZze3KU9LvWoHhmbxsuC%2FRyYHoH9QWuVAz%2B6ijrYPnvhQTTEJDUe2sb4TamKADKcJqaRU7xD%2Figosvce1hPFoHPN%2Fya5dEStqrErrjoyg%2BsvgC24o9obRhcGCnTx4xH496oNKTddx%2FGa%2FrPMalgrmC59BRrsWMHw7Ni9Zb%2BIUKALeCB7jWo3698Yg0E1Rp2Qdtw0mncgyB1zOhq4qwdwkOky6nWbNiSodbgEbtSnHJeKi6MLqdCDJOTv34T7gOgTqmH8JDPk4pmri%2BBaNGBsUexwjXx1GA3tEk31JFe%2B5%2B91r6Hs8zFp16ADm%2F7siHx2InNtnUmjC6Eah9R0iBCOgz448UdqlcA83vrjziQEhSQBAR4lam%2FZeY60oUcyg6GuSxJ0%2F8vsjoLJNkkF6pdBOjmNjCki7cL5GtvBqt2Ws9nMISptEA%2BURfIJfwq%2BkLEFhc78SF0zOuLMMan4soGOqUB7njDHL2D%2Fq22ZmotsJs3j7TxMcTNMmlKCx9b%2FmAWtVtVlZUySsDAV8rK86wNTAZAtTUqs07n3s2THlkcn9xSed8%2BZbA31mkfEQdSYouHIgIj%2FkP1IURGj7s8YqJMeQngm79kGRJuP6ZHpGww47iLNDK9U9Ki2KUG3JFMWm%2Bbnb87jcW77PowVykbOw%2B8gtcfL9N%2BIQcL40MSrCsUgDYASn6eRp65&X-Amz-Signature=0456db23ae4e8ac59d3996f5169345d2b7056e327675f9c8dd2f063a849433d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQZ375Q%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDwjCrTwMoUgTai5d4bJNZHiIJHQvrMubMzh8I8FIU1WwIgRGr2WYh5L9lgvzMxdXmchyVc9CJJKAa9vpIz0fg3tssq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDE1Iy5OFL%2FCS8sybrSrcA8bizlGsrSK3GAJZdU1cpyNuujbl2%2FpRtDQmpkGzVnflZWfLuEMdKfzV8RVOpTB%2BvlbIfmkEElF%2BANrTXNahH7ppogZxCij2UJGLBYm72U2mPp82xi1xaigO1wwYu6Lw4wXUOe8S%2FnVNTFtlFOt%2BhsVKIZkOsHXbVPVYW6evJy5gouQi2kZze3KU9LvWoHhmbxsuC%2FRyYHoH9QWuVAz%2B6ijrYPnvhQTTEJDUe2sb4TamKADKcJqaRU7xD%2Figosvce1hPFoHPN%2Fya5dEStqrErrjoyg%2BsvgC24o9obRhcGCnTx4xH496oNKTddx%2FGa%2FrPMalgrmC59BRrsWMHw7Ni9Zb%2BIUKALeCB7jWo3698Yg0E1Rp2Qdtw0mncgyB1zOhq4qwdwkOky6nWbNiSodbgEbtSnHJeKi6MLqdCDJOTv34T7gOgTqmH8JDPk4pmri%2BBaNGBsUexwjXx1GA3tEk31JFe%2B5%2B91r6Hs8zFp16ADm%2F7siHx2InNtnUmjC6Eah9R0iBCOgz448UdqlcA83vrjziQEhSQBAR4lam%2FZeY60oUcyg6GuSxJ0%2F8vsjoLJNkkF6pdBOjmNjCki7cL5GtvBqt2Ws9nMISptEA%2BURfIJfwq%2BkLEFhc78SF0zOuLMMan4soGOqUB7njDHL2D%2Fq22ZmotsJs3j7TxMcTNMmlKCx9b%2FmAWtVtVlZUySsDAV8rK86wNTAZAtTUqs07n3s2THlkcn9xSed8%2BZbA31mkfEQdSYouHIgIj%2FkP1IURGj7s8YqJMeQngm79kGRJuP6ZHpGww47iLNDK9U9Ki2KUG3JFMWm%2Bbnb87jcW77PowVykbOw%2B8gtcfL9N%2BIQcL40MSrCsUgDYASn6eRp65&X-Amz-Signature=dbe7930c8f84276eff75d71d5bdf8b5801de45cf40f9a20401486c4df30a497e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQZ375Q%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDwjCrTwMoUgTai5d4bJNZHiIJHQvrMubMzh8I8FIU1WwIgRGr2WYh5L9lgvzMxdXmchyVc9CJJKAa9vpIz0fg3tssq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDE1Iy5OFL%2FCS8sybrSrcA8bizlGsrSK3GAJZdU1cpyNuujbl2%2FpRtDQmpkGzVnflZWfLuEMdKfzV8RVOpTB%2BvlbIfmkEElF%2BANrTXNahH7ppogZxCij2UJGLBYm72U2mPp82xi1xaigO1wwYu6Lw4wXUOe8S%2FnVNTFtlFOt%2BhsVKIZkOsHXbVPVYW6evJy5gouQi2kZze3KU9LvWoHhmbxsuC%2FRyYHoH9QWuVAz%2B6ijrYPnvhQTTEJDUe2sb4TamKADKcJqaRU7xD%2Figosvce1hPFoHPN%2Fya5dEStqrErrjoyg%2BsvgC24o9obRhcGCnTx4xH496oNKTddx%2FGa%2FrPMalgrmC59BRrsWMHw7Ni9Zb%2BIUKALeCB7jWo3698Yg0E1Rp2Qdtw0mncgyB1zOhq4qwdwkOky6nWbNiSodbgEbtSnHJeKi6MLqdCDJOTv34T7gOgTqmH8JDPk4pmri%2BBaNGBsUexwjXx1GA3tEk31JFe%2B5%2B91r6Hs8zFp16ADm%2F7siHx2InNtnUmjC6Eah9R0iBCOgz448UdqlcA83vrjziQEhSQBAR4lam%2FZeY60oUcyg6GuSxJ0%2F8vsjoLJNkkF6pdBOjmNjCki7cL5GtvBqt2Ws9nMISptEA%2BURfIJfwq%2BkLEFhc78SF0zOuLMMan4soGOqUB7njDHL2D%2Fq22ZmotsJs3j7TxMcTNMmlKCx9b%2FmAWtVtVlZUySsDAV8rK86wNTAZAtTUqs07n3s2THlkcn9xSed8%2BZbA31mkfEQdSYouHIgIj%2FkP1IURGj7s8YqJMeQngm79kGRJuP6ZHpGww47iLNDK9U9Ki2KUG3JFMWm%2Bbnb87jcW77PowVykbOw%2B8gtcfL9N%2BIQcL40MSrCsUgDYASn6eRp65&X-Amz-Signature=d26749742bfcb853b67665c25a2c0dc1f21b50644a9b98946ac10bd84d5e1672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD3IPZ4J%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T040200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIHXUltpCGRVlPdLkg0NFzjFEATBDCZRAk%2FnHpZ5x9KKcAiEAllOqQT%2BHhaCuKugVk%2B3%2B11hTcJVYtLkzRU8cSwCzzv4q%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDLPG54WT1fgVQHEonSrcAw6OkCfj3RQpXXHwTUBdVPCWkLYkS2VUd7kn70Z4ZpPjhM3laAEqGsPbwvbINSiV0N0RI3odyZ3SLMaAUD3cenVb7Pdzn5aUpf3Pd%2FMvnx44LUTN%2FZDdeAE2Rr3ZeaPSx383TpjiSchFl2Sb6QMoq09E6uTTIeEw4kjr9IeunTz%2BA5PQTv%2BCq%2BbkxDBStb0dM28ojaHSTC1ztFFJtvNORMZVBJWrDRcQJRidxluwcRUIBE%2FduKzWiAxevotEDgI%2FvR56MQwpR2XuuDnbsnQCQH7fZB6PkbPfaEQTfim8rpLca%2FfvcI0fNcnL7aB%2FbI4YwLx%2FDLve5HEwb7emGWgJzTN5yk44XCBGbI5aO8HZNAhLNFs3QJWvdeoHygNrREK7vCzNlygGZ4DzSxQcl8KyJxLDq8gxNHVTRzCK1ijnyMbDanN3RVPgMmMxqX42Yli4sbiPPvciWW51uMSNnGY9ZGyqnU4cVYMziPba%2FO8ASuOr3%2B7ajwb6mz%2FuMFWrZwZ3SPJfdmwjVqfs6r0qZJidNkPxvrpjQ%2BgyBs2HCi49Svt4kE5Vk7oA529Ok8NSvuP6xIViLTEXIH4hQ7TvJlJdV6ZnGzzJUzSbkvWeJLhsR9SSHSd61NUGEp2FMjXMMOKn4soGOqUB9Ssmd6jT4o9wFtvnafIuFzAUutAOjk5mF%2Bor9QetIJLOjAwW%2FLehaw74s062Y87G%2BXPiZ9VGU%2B19Sit2XyaTZsVDICGjTZcFW%2FQdqYDeqU97qXuKCBiRFW2%2FVPJzCw%2BaGX6uA%2FQgV3axcqVvDFzLaEWIPZVaK%2BfaB9%2F7nUAmX9lJ%2BDBK%2BpMsfGhrYR5ubwcSqbHO0jk7ypums3H0ototyC5JIkWb&X-Amz-Signature=02ae914456b170af80fe88908887d7ffdf355f479d59e5a22541c98cdda61f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

