
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667TCRA7P%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJJZspckn0%2Fl8x93leNMmV9LyV%2BfvIIuEDlUiLmVThbAiASmNmrOegWZIYb7%2Bck6B8tyPRmEbeoJ1ahuF895mLGHiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9S5hB9Aa5wKLklx%2FKtwDQX0mQeGgNdJUAYwTt1dnI1DBRau4usy5yhILPUTVJLUapO1QPuHxeE3pgTR5PnMlXdoV7cZsXxHxpMA63OrUxxeRUqE5ZxiYQr%2B%2F6m7dHooiYgOD1MFtlgoI1AC7HwCAhxDtKR5NGlWYyRA0irk7WquCorGS%2FAzYjHHC1dlngq8NkbyKtsJo7R6VieVd61flG6mJRf7Yv84anbiwaHccm5eBVg%2BDkB9mB6tPdFhjDpXgWndyLi1pLnQ%2FQN%2BjpQ%2Fd4yjfRsw29MBA6WVIzGaFqfqRupTgZDaCh38G6ELZ7MolQyZOZsvcoShMJF0XSzIujhGJVa6veTsmYePiKxevZYPQJHDsH6KL4KjPJGaprbZAWexhN2rnp%2F%2B9Law%2FVyocu1jtkrjMkn8esEgD0U0zDvj7vijWbHaCHOq7MS6IC5gLMjlmc%2BlC%2BQhO01eeOJcU6zmoULzQejNsPRH2nZTn0dkZ4%2Fc6TbOdNFSU5ZeGZIOFhsO0dvWERL%2BsjZ8vstbeMaD4NRj43K96wwqJxpA%2FVLw3EjwPjEwnw5GTT93mUXnSOxsnK8Z83gjvL9t4QvhNVFmCkVCLqUWPtHslk5RqoePETsqkMT6y054c301SOCQyW8VQN5YYbxuO2Ekwl%2F%2F6ywY6pgFoAEJRDnvf5X1nuTtqKSaS%2Fqu6FTjyzX5d%2Bvx%2BXtU2Vp153%2FjyNEv0m6rwGkFjLuogIEgaa%2F4O4AqDnzblqkKqOYbxEpal6VikmoGEd0sa4LXTtqtAjUIwniDI9VYQcfRy4u0w27VEAXi%2F9WKLG3wGrFjXzBOtpxzPz9%2FYOrh0CcgQO3U0KrfAirb6hfByDFdUoIX5GhEPtC1Z0Gx9Q%2BnIk7BHjHG7&X-Amz-Signature=17c971070729957fe7080fe89cb10b74341fb0b850d61cd56ec03ecd72d8c6d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNJHBNTG%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMf2h4nVzIrKmW9gymBbwfYp%2BQ56WYthZ6t3yXeZpzPAiBDfBqPsMIio4mb19g8qqVSxRBOvhQy4ijThrlrA6R7AiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcyvDQ5xNvuLp387BKtwD2%2B4aJZQpswcrM444RqdN2znX0YhsBV4oMGRZFUeX3dMl6hoFd6E5X9XXAfQgVrFnKkZZKsludsx0R6Ll%2BmArRSYImGnPXW4%2FxU9BzA6UpcY6s1lrf9hP5TdBMPVOew7OcYmNA3HybpsvfN8guSsXTfI29NaiFmoR5ot4%2FQhQhNlmtTYftir22szCSyOM3LhLswwYW7RTRBr5wNjESSa0N7VsHp0g%2F0TZLfev5ghkVWHwAa642DRuHQeNJnqGktvN5RCPQU%2Bne%2FXXNLX6Pblr%2B1h59QzgT%2F2%2BzqsbiE06dChGe12UKzBG%2BdRmC9A2vPnpHZzCfhwf2jbXv6pGSMQNtAqr6R4QLMxfauFaWRCdBWJhgnb8c4KKu5Mq6l2nlu%2FTQ6mkbEx1xL%2BhFdXTcsEMQQ33tOWlC54U1rP9iQe7wCzy7PL7xxl3AXYvSqJCoAJdJGC98iMpOL1ftuLL0G1YxIPk1ROWHgSr3EqJApC4%2BFRtWH12VFLp8D25jVSIVdz5jKbnyji5zwT0ExGtm0Ixa%2FI8NWNeoyF%2FWZurmsLslBULbs3ZF2TdjlT8h4Bqvr1E%2Fr%2Fbu8U%2Bfgr6aNeuRf0HLH3ispgUDnwwt8%2BMdwKmXu%2BvGkPpx4c8Op4SLT8wkvr6ywY6pgE2WlYuU9nouPmHfrcD110Z%2Bx9iW%2BxxRT1Jgv3R56zplA%2BNm7kXpB58qRWsJ5TCV7CjonnL%2FxMRM8qxUmFK1wu8EKadq1qKS54W4r9YPcLd1bNOF8X%2BhHxx6XCIbLKg%2BYLb1GKKuJ5qrmsivew2liFFHAA92wO58R8VMPdwCgo%2F6xNHPgMOopcQXXCKH9n3%2BRkcdWTU3wiTwt9zRAwr2lYLdlr1n6Kt&X-Amz-Signature=0ff7a9b8b7260d2187bdd0eb6616e1f005c8fd0fad718c3d4d5c47dadcc78733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNJHBNTG%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMf2h4nVzIrKmW9gymBbwfYp%2BQ56WYthZ6t3yXeZpzPAiBDfBqPsMIio4mb19g8qqVSxRBOvhQy4ijThrlrA6R7AiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcyvDQ5xNvuLp387BKtwD2%2B4aJZQpswcrM444RqdN2znX0YhsBV4oMGRZFUeX3dMl6hoFd6E5X9XXAfQgVrFnKkZZKsludsx0R6Ll%2BmArRSYImGnPXW4%2FxU9BzA6UpcY6s1lrf9hP5TdBMPVOew7OcYmNA3HybpsvfN8guSsXTfI29NaiFmoR5ot4%2FQhQhNlmtTYftir22szCSyOM3LhLswwYW7RTRBr5wNjESSa0N7VsHp0g%2F0TZLfev5ghkVWHwAa642DRuHQeNJnqGktvN5RCPQU%2Bne%2FXXNLX6Pblr%2B1h59QzgT%2F2%2BzqsbiE06dChGe12UKzBG%2BdRmC9A2vPnpHZzCfhwf2jbXv6pGSMQNtAqr6R4QLMxfauFaWRCdBWJhgnb8c4KKu5Mq6l2nlu%2FTQ6mkbEx1xL%2BhFdXTcsEMQQ33tOWlC54U1rP9iQe7wCzy7PL7xxl3AXYvSqJCoAJdJGC98iMpOL1ftuLL0G1YxIPk1ROWHgSr3EqJApC4%2BFRtWH12VFLp8D25jVSIVdz5jKbnyji5zwT0ExGtm0Ixa%2FI8NWNeoyF%2FWZurmsLslBULbs3ZF2TdjlT8h4Bqvr1E%2Fr%2Fbu8U%2Bfgr6aNeuRf0HLH3ispgUDnwwt8%2BMdwKmXu%2BvGkPpx4c8Op4SLT8wkvr6ywY6pgE2WlYuU9nouPmHfrcD110Z%2Bx9iW%2BxxRT1Jgv3R56zplA%2BNm7kXpB58qRWsJ5TCV7CjonnL%2FxMRM8qxUmFK1wu8EKadq1qKS54W4r9YPcLd1bNOF8X%2BhHxx6XCIbLKg%2BYLb1GKKuJ5qrmsivew2liFFHAA92wO58R8VMPdwCgo%2F6xNHPgMOopcQXXCKH9n3%2BRkcdWTU3wiTwt9zRAwr2lYLdlr1n6Kt&X-Amz-Signature=3f7f87f59767d59dc3dcd7b9d9e21e7d2f17e9bab6022c193cbbc0761cd26552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSOIHTS2%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCASLk%2B%2Brrbp6Y%2FmVCaCOfMzqHnforVFKQmSx1%2Bo64jBgIhAOhqBRZFjwjlQdPqM84YLqOQR0hpMhdZhqL6axMWBRSSKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGTsIF%2BDziw05Q8ssq3ANYVHzcJR%2FAr9oHQSjcdLGrAntUg%2B%2F6U%2Bze1s7xlDKlhy9zzYHWWKp2qLDwjO%2BOA%2BcudWXpvoGUFhMJ%2B1BJMkmSlM7ktE8DU751boB3ikz76glh2X86q6Dtn7nKY7FFjJW6XZfW%2FATGgW23N7xrRdUp48hYRzlv%2BywLNPMDkjgicML%2Btac2K4gmpVoC631%2Bm2Y3Js73gAWrJZbNlZHXWrXYgwOPa7xaWr%2B%2BeZfjDoCQtUSZf7%2FadfWfv39hUrkZT7ChGGKgGW1q9r7RcPORruopqTCLCwv2Bd6nMoEww0egbnyL1xPZIXw9Lhw36X48O7YAW3wJLV5uXot%2BojqbPZVauo23hZzrhK0F4xSe%2FZ8b9tVaF5DXvTHvv8wiA82bA5f6HckbqZepKgqpMnJYuHYULCo3hs9YHVHwIWVlDrTIt%2BkXyz69hWHvyWjuQek1u%2FQGQs1YzZ62DPQD4PVWjL6sLeKMs3qQ3RA9EebrPN3PV2XY0l4PjdXT5wnUHABqjjNn14S4WhOKmWfU2p2pYIf9%2FYrk8F6Cb1CHKgHT%2FZaRYRx9PlYHv1FpYTge%2FMAlrBXulg1JFljYFuY8YaascnjvqcoRzdSmLBZNEAtSLZuc5FyrCmmnPRJSAY4QbjDD%2FPrLBjqkAa77OC3aOGkUod3LmavBv%2Fo4%2F4lRrbIPOBRSCc06qDeL2a6PTw8eR%2FWteYNWAJf9xhXrUMTGy2ENLOfFNeNbe0UyuMJrk0NON3ATaLbt4WYV7%2FBen6%2Fa6J2cR9v67V4zQ%2Fv3db8YXnDgiy1JBI3DG8Kn14XNvTPRp7nNPBvP6kBFKXFAaBCACMoQ8Zc49K%2BEfkwN8upIi8Q0wZCBk%2FMWYEWXcnhn&X-Amz-Signature=1c32d948ef40f620cbd8eed8a56f6dabcc293318dd82f40ca4faa3786e4fc315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSOIHTS2%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCASLk%2B%2Brrbp6Y%2FmVCaCOfMzqHnforVFKQmSx1%2Bo64jBgIhAOhqBRZFjwjlQdPqM84YLqOQR0hpMhdZhqL6axMWBRSSKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGTsIF%2BDziw05Q8ssq3ANYVHzcJR%2FAr9oHQSjcdLGrAntUg%2B%2F6U%2Bze1s7xlDKlhy9zzYHWWKp2qLDwjO%2BOA%2BcudWXpvoGUFhMJ%2B1BJMkmSlM7ktE8DU751boB3ikz76glh2X86q6Dtn7nKY7FFjJW6XZfW%2FATGgW23N7xrRdUp48hYRzlv%2BywLNPMDkjgicML%2Btac2K4gmpVoC631%2Bm2Y3Js73gAWrJZbNlZHXWrXYgwOPa7xaWr%2B%2BeZfjDoCQtUSZf7%2FadfWfv39hUrkZT7ChGGKgGW1q9r7RcPORruopqTCLCwv2Bd6nMoEww0egbnyL1xPZIXw9Lhw36X48O7YAW3wJLV5uXot%2BojqbPZVauo23hZzrhK0F4xSe%2FZ8b9tVaF5DXvTHvv8wiA82bA5f6HckbqZepKgqpMnJYuHYULCo3hs9YHVHwIWVlDrTIt%2BkXyz69hWHvyWjuQek1u%2FQGQs1YzZ62DPQD4PVWjL6sLeKMs3qQ3RA9EebrPN3PV2XY0l4PjdXT5wnUHABqjjNn14S4WhOKmWfU2p2pYIf9%2FYrk8F6Cb1CHKgHT%2FZaRYRx9PlYHv1FpYTge%2FMAlrBXulg1JFljYFuY8YaascnjvqcoRzdSmLBZNEAtSLZuc5FyrCmmnPRJSAY4QbjDD%2FPrLBjqkAa77OC3aOGkUod3LmavBv%2Fo4%2F4lRrbIPOBRSCc06qDeL2a6PTw8eR%2FWteYNWAJf9xhXrUMTGy2ENLOfFNeNbe0UyuMJrk0NON3ATaLbt4WYV7%2FBen6%2Fa6J2cR9v67V4zQ%2Fv3db8YXnDgiy1JBI3DG8Kn14XNvTPRp7nNPBvP6kBFKXFAaBCACMoQ8Zc49K%2BEfkwN8upIi8Q0wZCBk%2FMWYEWXcnhn&X-Amz-Signature=6e933096dc3770c95d5af7c0b8f617c03631cfe5ecb7fc0e51caea160a3023e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSOIHTS2%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCASLk%2B%2Brrbp6Y%2FmVCaCOfMzqHnforVFKQmSx1%2Bo64jBgIhAOhqBRZFjwjlQdPqM84YLqOQR0hpMhdZhqL6axMWBRSSKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGTsIF%2BDziw05Q8ssq3ANYVHzcJR%2FAr9oHQSjcdLGrAntUg%2B%2F6U%2Bze1s7xlDKlhy9zzYHWWKp2qLDwjO%2BOA%2BcudWXpvoGUFhMJ%2B1BJMkmSlM7ktE8DU751boB3ikz76glh2X86q6Dtn7nKY7FFjJW6XZfW%2FATGgW23N7xrRdUp48hYRzlv%2BywLNPMDkjgicML%2Btac2K4gmpVoC631%2Bm2Y3Js73gAWrJZbNlZHXWrXYgwOPa7xaWr%2B%2BeZfjDoCQtUSZf7%2FadfWfv39hUrkZT7ChGGKgGW1q9r7RcPORruopqTCLCwv2Bd6nMoEww0egbnyL1xPZIXw9Lhw36X48O7YAW3wJLV5uXot%2BojqbPZVauo23hZzrhK0F4xSe%2FZ8b9tVaF5DXvTHvv8wiA82bA5f6HckbqZepKgqpMnJYuHYULCo3hs9YHVHwIWVlDrTIt%2BkXyz69hWHvyWjuQek1u%2FQGQs1YzZ62DPQD4PVWjL6sLeKMs3qQ3RA9EebrPN3PV2XY0l4PjdXT5wnUHABqjjNn14S4WhOKmWfU2p2pYIf9%2FYrk8F6Cb1CHKgHT%2FZaRYRx9PlYHv1FpYTge%2FMAlrBXulg1JFljYFuY8YaascnjvqcoRzdSmLBZNEAtSLZuc5FyrCmmnPRJSAY4QbjDD%2FPrLBjqkAa77OC3aOGkUod3LmavBv%2Fo4%2F4lRrbIPOBRSCc06qDeL2a6PTw8eR%2FWteYNWAJf9xhXrUMTGy2ENLOfFNeNbe0UyuMJrk0NON3ATaLbt4WYV7%2FBen6%2Fa6J2cR9v67V4zQ%2Fv3db8YXnDgiy1JBI3DG8Kn14XNvTPRp7nNPBvP6kBFKXFAaBCACMoQ8Zc49K%2BEfkwN8upIi8Q0wZCBk%2FMWYEWXcnhn&X-Amz-Signature=e62c8977dbe4611c678fe544ce8a23a66e279155e1af79913b5e5fac93074481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSOIHTS2%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCASLk%2B%2Brrbp6Y%2FmVCaCOfMzqHnforVFKQmSx1%2Bo64jBgIhAOhqBRZFjwjlQdPqM84YLqOQR0hpMhdZhqL6axMWBRSSKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGTsIF%2BDziw05Q8ssq3ANYVHzcJR%2FAr9oHQSjcdLGrAntUg%2B%2F6U%2Bze1s7xlDKlhy9zzYHWWKp2qLDwjO%2BOA%2BcudWXpvoGUFhMJ%2B1BJMkmSlM7ktE8DU751boB3ikz76glh2X86q6Dtn7nKY7FFjJW6XZfW%2FATGgW23N7xrRdUp48hYRzlv%2BywLNPMDkjgicML%2Btac2K4gmpVoC631%2Bm2Y3Js73gAWrJZbNlZHXWrXYgwOPa7xaWr%2B%2BeZfjDoCQtUSZf7%2FadfWfv39hUrkZT7ChGGKgGW1q9r7RcPORruopqTCLCwv2Bd6nMoEww0egbnyL1xPZIXw9Lhw36X48O7YAW3wJLV5uXot%2BojqbPZVauo23hZzrhK0F4xSe%2FZ8b9tVaF5DXvTHvv8wiA82bA5f6HckbqZepKgqpMnJYuHYULCo3hs9YHVHwIWVlDrTIt%2BkXyz69hWHvyWjuQek1u%2FQGQs1YzZ62DPQD4PVWjL6sLeKMs3qQ3RA9EebrPN3PV2XY0l4PjdXT5wnUHABqjjNn14S4WhOKmWfU2p2pYIf9%2FYrk8F6Cb1CHKgHT%2FZaRYRx9PlYHv1FpYTge%2FMAlrBXulg1JFljYFuY8YaascnjvqcoRzdSmLBZNEAtSLZuc5FyrCmmnPRJSAY4QbjDD%2FPrLBjqkAa77OC3aOGkUod3LmavBv%2Fo4%2F4lRrbIPOBRSCc06qDeL2a6PTw8eR%2FWteYNWAJf9xhXrUMTGy2ENLOfFNeNbe0UyuMJrk0NON3ATaLbt4WYV7%2FBen6%2Fa6J2cR9v67V4zQ%2Fv3db8YXnDgiy1JBI3DG8Kn14XNvTPRp7nNPBvP6kBFKXFAaBCACMoQ8Zc49K%2BEfkwN8upIi8Q0wZCBk%2FMWYEWXcnhn&X-Amz-Signature=fba5849616648757559438e1e719eab70ef86877075ea01f2e7029a9f5ac4301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSOIHTS2%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCASLk%2B%2Brrbp6Y%2FmVCaCOfMzqHnforVFKQmSx1%2Bo64jBgIhAOhqBRZFjwjlQdPqM84YLqOQR0hpMhdZhqL6axMWBRSSKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGTsIF%2BDziw05Q8ssq3ANYVHzcJR%2FAr9oHQSjcdLGrAntUg%2B%2F6U%2Bze1s7xlDKlhy9zzYHWWKp2qLDwjO%2BOA%2BcudWXpvoGUFhMJ%2B1BJMkmSlM7ktE8DU751boB3ikz76glh2X86q6Dtn7nKY7FFjJW6XZfW%2FATGgW23N7xrRdUp48hYRzlv%2BywLNPMDkjgicML%2Btac2K4gmpVoC631%2Bm2Y3Js73gAWrJZbNlZHXWrXYgwOPa7xaWr%2B%2BeZfjDoCQtUSZf7%2FadfWfv39hUrkZT7ChGGKgGW1q9r7RcPORruopqTCLCwv2Bd6nMoEww0egbnyL1xPZIXw9Lhw36X48O7YAW3wJLV5uXot%2BojqbPZVauo23hZzrhK0F4xSe%2FZ8b9tVaF5DXvTHvv8wiA82bA5f6HckbqZepKgqpMnJYuHYULCo3hs9YHVHwIWVlDrTIt%2BkXyz69hWHvyWjuQek1u%2FQGQs1YzZ62DPQD4PVWjL6sLeKMs3qQ3RA9EebrPN3PV2XY0l4PjdXT5wnUHABqjjNn14S4WhOKmWfU2p2pYIf9%2FYrk8F6Cb1CHKgHT%2FZaRYRx9PlYHv1FpYTge%2FMAlrBXulg1JFljYFuY8YaascnjvqcoRzdSmLBZNEAtSLZuc5FyrCmmnPRJSAY4QbjDD%2FPrLBjqkAa77OC3aOGkUod3LmavBv%2Fo4%2F4lRrbIPOBRSCc06qDeL2a6PTw8eR%2FWteYNWAJf9xhXrUMTGy2ENLOfFNeNbe0UyuMJrk0NON3ATaLbt4WYV7%2FBen6%2Fa6J2cR9v67V4zQ%2Fv3db8YXnDgiy1JBI3DG8Kn14XNvTPRp7nNPBvP6kBFKXFAaBCACMoQ8Zc49K%2BEfkwN8upIi8Q0wZCBk%2FMWYEWXcnhn&X-Amz-Signature=86013eebe5f64a66eb3c2b308479a9432f6c7f56ff01d047887358fe13be89b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSOIHTS2%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCASLk%2B%2Brrbp6Y%2FmVCaCOfMzqHnforVFKQmSx1%2Bo64jBgIhAOhqBRZFjwjlQdPqM84YLqOQR0hpMhdZhqL6axMWBRSSKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGTsIF%2BDziw05Q8ssq3ANYVHzcJR%2FAr9oHQSjcdLGrAntUg%2B%2F6U%2Bze1s7xlDKlhy9zzYHWWKp2qLDwjO%2BOA%2BcudWXpvoGUFhMJ%2B1BJMkmSlM7ktE8DU751boB3ikz76glh2X86q6Dtn7nKY7FFjJW6XZfW%2FATGgW23N7xrRdUp48hYRzlv%2BywLNPMDkjgicML%2Btac2K4gmpVoC631%2Bm2Y3Js73gAWrJZbNlZHXWrXYgwOPa7xaWr%2B%2BeZfjDoCQtUSZf7%2FadfWfv39hUrkZT7ChGGKgGW1q9r7RcPORruopqTCLCwv2Bd6nMoEww0egbnyL1xPZIXw9Lhw36X48O7YAW3wJLV5uXot%2BojqbPZVauo23hZzrhK0F4xSe%2FZ8b9tVaF5DXvTHvv8wiA82bA5f6HckbqZepKgqpMnJYuHYULCo3hs9YHVHwIWVlDrTIt%2BkXyz69hWHvyWjuQek1u%2FQGQs1YzZ62DPQD4PVWjL6sLeKMs3qQ3RA9EebrPN3PV2XY0l4PjdXT5wnUHABqjjNn14S4WhOKmWfU2p2pYIf9%2FYrk8F6Cb1CHKgHT%2FZaRYRx9PlYHv1FpYTge%2FMAlrBXulg1JFljYFuY8YaascnjvqcoRzdSmLBZNEAtSLZuc5FyrCmmnPRJSAY4QbjDD%2FPrLBjqkAa77OC3aOGkUod3LmavBv%2Fo4%2F4lRrbIPOBRSCc06qDeL2a6PTw8eR%2FWteYNWAJf9xhXrUMTGy2ENLOfFNeNbe0UyuMJrk0NON3ATaLbt4WYV7%2FBen6%2Fa6J2cR9v67V4zQ%2Fv3db8YXnDgiy1JBI3DG8Kn14XNvTPRp7nNPBvP6kBFKXFAaBCACMoQ8Zc49K%2BEfkwN8upIi8Q0wZCBk%2FMWYEWXcnhn&X-Amz-Signature=55a4b2c575484bfbb92fe46ff872903e87ec953f116dc99fb64069d6e2bc843c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSOIHTS2%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCASLk%2B%2Brrbp6Y%2FmVCaCOfMzqHnforVFKQmSx1%2Bo64jBgIhAOhqBRZFjwjlQdPqM84YLqOQR0hpMhdZhqL6axMWBRSSKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGTsIF%2BDziw05Q8ssq3ANYVHzcJR%2FAr9oHQSjcdLGrAntUg%2B%2F6U%2Bze1s7xlDKlhy9zzYHWWKp2qLDwjO%2BOA%2BcudWXpvoGUFhMJ%2B1BJMkmSlM7ktE8DU751boB3ikz76glh2X86q6Dtn7nKY7FFjJW6XZfW%2FATGgW23N7xrRdUp48hYRzlv%2BywLNPMDkjgicML%2Btac2K4gmpVoC631%2Bm2Y3Js73gAWrJZbNlZHXWrXYgwOPa7xaWr%2B%2BeZfjDoCQtUSZf7%2FadfWfv39hUrkZT7ChGGKgGW1q9r7RcPORruopqTCLCwv2Bd6nMoEww0egbnyL1xPZIXw9Lhw36X48O7YAW3wJLV5uXot%2BojqbPZVauo23hZzrhK0F4xSe%2FZ8b9tVaF5DXvTHvv8wiA82bA5f6HckbqZepKgqpMnJYuHYULCo3hs9YHVHwIWVlDrTIt%2BkXyz69hWHvyWjuQek1u%2FQGQs1YzZ62DPQD4PVWjL6sLeKMs3qQ3RA9EebrPN3PV2XY0l4PjdXT5wnUHABqjjNn14S4WhOKmWfU2p2pYIf9%2FYrk8F6Cb1CHKgHT%2FZaRYRx9PlYHv1FpYTge%2FMAlrBXulg1JFljYFuY8YaascnjvqcoRzdSmLBZNEAtSLZuc5FyrCmmnPRJSAY4QbjDD%2FPrLBjqkAa77OC3aOGkUod3LmavBv%2Fo4%2F4lRrbIPOBRSCc06qDeL2a6PTw8eR%2FWteYNWAJf9xhXrUMTGy2ENLOfFNeNbe0UyuMJrk0NON3ATaLbt4WYV7%2FBen6%2Fa6J2cR9v67V4zQ%2Fv3db8YXnDgiy1JBI3DG8Kn14XNvTPRp7nNPBvP6kBFKXFAaBCACMoQ8Zc49K%2BEfkwN8upIi8Q0wZCBk%2FMWYEWXcnhn&X-Amz-Signature=290889675fff6ce6000b869995c8aed83871150510718c930f3669afc003b777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFC26V6E%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo%2BfwUyvgsIul7X7p%2BzTEFtDt4si4YLu%2F3FkfO88DpUAIgKSDEmOdsYZ9W1rJ9xGjwlMQvIh8T7H4CuXxu53K13Y0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaf6%2FuCWfhXhh%2B1aSrcA%2FSFou7jvDANHUHoJD%2Bbti6fdoy5qAXetkg68Wee5OAQCNZhzfFkHghh5%2FzjxgZC0l3uEWlgUuglXhTjAzoUBJCL2j24iyMBUv5mvCqfQgTXtMNqmIJaAfuPMGf8QMzdu5etM1b6lHXE3YClVXtPSnR5SoQvU82r9YzTCoj%2BEHoNc2B%2FqQh3q1BScgrtOae7BQ4fPglUrSX3YFHgM%2FEDyVuggY4kfQjVOcMUvwMO5hZNtTIPDtL5lxCDTIb1xkTa2fKVSE%2BW9S19OpSY724CzeZ5gCDSF%2BaYDLA38dE7baz0mXoGDBnCS%2FLp73rGhlC06ovd52cte5P4yK9%2BmkeO9fvScRWz6lAPkjKl4TEh9SfBRzjcBsZWpvSpOaQmZvfHiWG8A8MR3eulF4Anr9W0LdhLzc6F4ErdNYdkH3HS9H1vjcqMDSmBwljeCw%2FhPe0CktqAhG6bMZEFkGviZNRgJsGoSfoDhknXrzprP92U%2B0eomXO50lmuatZsIhmtoTjCoxvDE%2FRiQy8XgkUVzMUm7EyHV5eenPrTHfCeN7Uzpp8Zv5FvqH%2B5ofEKym7csT9VkYQhn9fRS2GCPe48SQXHShBU%2BLCbxgiRllxIZ83lbjq5NpRDDE8wWB5ZAFl2MJT%2F%2BssGOqUB1%2FD%2BBtNNyynmUXqHrj6hWO9KwzSTg%2F7n%2FIi6CGoTYppOig34KMLMT2DoDsDBEt3bZCcTFV06RUdjxd24EbqSsz98f5Mp9GpGX6d8EAexPVawDQpFg%2Fa2jOkUZ%2FlwvsQB7xXrTl7DDg%2BbbK%2BR7BlVVXwoIH05v10AkDVf1HKRi1dtZpdEm1JgFbOAp0v9NAMZLk3J3E081ChD6x2iU5mmqDQEpLsZ&X-Amz-Signature=e84abb49b5bda5fd3bb9c03e91730746788fdbb51450b4c71fbcf508167d334c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFC26V6E%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo%2BfwUyvgsIul7X7p%2BzTEFtDt4si4YLu%2F3FkfO88DpUAIgKSDEmOdsYZ9W1rJ9xGjwlMQvIh8T7H4CuXxu53K13Y0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaf6%2FuCWfhXhh%2B1aSrcA%2FSFou7jvDANHUHoJD%2Bbti6fdoy5qAXetkg68Wee5OAQCNZhzfFkHghh5%2FzjxgZC0l3uEWlgUuglXhTjAzoUBJCL2j24iyMBUv5mvCqfQgTXtMNqmIJaAfuPMGf8QMzdu5etM1b6lHXE3YClVXtPSnR5SoQvU82r9YzTCoj%2BEHoNc2B%2FqQh3q1BScgrtOae7BQ4fPglUrSX3YFHgM%2FEDyVuggY4kfQjVOcMUvwMO5hZNtTIPDtL5lxCDTIb1xkTa2fKVSE%2BW9S19OpSY724CzeZ5gCDSF%2BaYDLA38dE7baz0mXoGDBnCS%2FLp73rGhlC06ovd52cte5P4yK9%2BmkeO9fvScRWz6lAPkjKl4TEh9SfBRzjcBsZWpvSpOaQmZvfHiWG8A8MR3eulF4Anr9W0LdhLzc6F4ErdNYdkH3HS9H1vjcqMDSmBwljeCw%2FhPe0CktqAhG6bMZEFkGviZNRgJsGoSfoDhknXrzprP92U%2B0eomXO50lmuatZsIhmtoTjCoxvDE%2FRiQy8XgkUVzMUm7EyHV5eenPrTHfCeN7Uzpp8Zv5FvqH%2B5ofEKym7csT9VkYQhn9fRS2GCPe48SQXHShBU%2BLCbxgiRllxIZ83lbjq5NpRDDE8wWB5ZAFl2MJT%2F%2BssGOqUB1%2FD%2BBtNNyynmUXqHrj6hWO9KwzSTg%2F7n%2FIi6CGoTYppOig34KMLMT2DoDsDBEt3bZCcTFV06RUdjxd24EbqSsz98f5Mp9GpGX6d8EAexPVawDQpFg%2Fa2jOkUZ%2FlwvsQB7xXrTl7DDg%2BbbK%2BR7BlVVXwoIH05v10AkDVf1HKRi1dtZpdEm1JgFbOAp0v9NAMZLk3J3E081ChD6x2iU5mmqDQEpLsZ&X-Amz-Signature=cbf27d659da421b6273fc5c4858006c20c38a0d47cec43bdffb3facc602b704d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFC26V6E%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo%2BfwUyvgsIul7X7p%2BzTEFtDt4si4YLu%2F3FkfO88DpUAIgKSDEmOdsYZ9W1rJ9xGjwlMQvIh8T7H4CuXxu53K13Y0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaf6%2FuCWfhXhh%2B1aSrcA%2FSFou7jvDANHUHoJD%2Bbti6fdoy5qAXetkg68Wee5OAQCNZhzfFkHghh5%2FzjxgZC0l3uEWlgUuglXhTjAzoUBJCL2j24iyMBUv5mvCqfQgTXtMNqmIJaAfuPMGf8QMzdu5etM1b6lHXE3YClVXtPSnR5SoQvU82r9YzTCoj%2BEHoNc2B%2FqQh3q1BScgrtOae7BQ4fPglUrSX3YFHgM%2FEDyVuggY4kfQjVOcMUvwMO5hZNtTIPDtL5lxCDTIb1xkTa2fKVSE%2BW9S19OpSY724CzeZ5gCDSF%2BaYDLA38dE7baz0mXoGDBnCS%2FLp73rGhlC06ovd52cte5P4yK9%2BmkeO9fvScRWz6lAPkjKl4TEh9SfBRzjcBsZWpvSpOaQmZvfHiWG8A8MR3eulF4Anr9W0LdhLzc6F4ErdNYdkH3HS9H1vjcqMDSmBwljeCw%2FhPe0CktqAhG6bMZEFkGviZNRgJsGoSfoDhknXrzprP92U%2B0eomXO50lmuatZsIhmtoTjCoxvDE%2FRiQy8XgkUVzMUm7EyHV5eenPrTHfCeN7Uzpp8Zv5FvqH%2B5ofEKym7csT9VkYQhn9fRS2GCPe48SQXHShBU%2BLCbxgiRllxIZ83lbjq5NpRDDE8wWB5ZAFl2MJT%2F%2BssGOqUB1%2FD%2BBtNNyynmUXqHrj6hWO9KwzSTg%2F7n%2FIi6CGoTYppOig34KMLMT2DoDsDBEt3bZCcTFV06RUdjxd24EbqSsz98f5Mp9GpGX6d8EAexPVawDQpFg%2Fa2jOkUZ%2FlwvsQB7xXrTl7DDg%2BbbK%2BR7BlVVXwoIH05v10AkDVf1HKRi1dtZpdEm1JgFbOAp0v9NAMZLk3J3E081ChD6x2iU5mmqDQEpLsZ&X-Amz-Signature=e28b550300400cdba48e7c1db472d625e2abb2fc06ec2baab815052a7af31ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFC26V6E%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo%2BfwUyvgsIul7X7p%2BzTEFtDt4si4YLu%2F3FkfO88DpUAIgKSDEmOdsYZ9W1rJ9xGjwlMQvIh8T7H4CuXxu53K13Y0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaf6%2FuCWfhXhh%2B1aSrcA%2FSFou7jvDANHUHoJD%2Bbti6fdoy5qAXetkg68Wee5OAQCNZhzfFkHghh5%2FzjxgZC0l3uEWlgUuglXhTjAzoUBJCL2j24iyMBUv5mvCqfQgTXtMNqmIJaAfuPMGf8QMzdu5etM1b6lHXE3YClVXtPSnR5SoQvU82r9YzTCoj%2BEHoNc2B%2FqQh3q1BScgrtOae7BQ4fPglUrSX3YFHgM%2FEDyVuggY4kfQjVOcMUvwMO5hZNtTIPDtL5lxCDTIb1xkTa2fKVSE%2BW9S19OpSY724CzeZ5gCDSF%2BaYDLA38dE7baz0mXoGDBnCS%2FLp73rGhlC06ovd52cte5P4yK9%2BmkeO9fvScRWz6lAPkjKl4TEh9SfBRzjcBsZWpvSpOaQmZvfHiWG8A8MR3eulF4Anr9W0LdhLzc6F4ErdNYdkH3HS9H1vjcqMDSmBwljeCw%2FhPe0CktqAhG6bMZEFkGviZNRgJsGoSfoDhknXrzprP92U%2B0eomXO50lmuatZsIhmtoTjCoxvDE%2FRiQy8XgkUVzMUm7EyHV5eenPrTHfCeN7Uzpp8Zv5FvqH%2B5ofEKym7csT9VkYQhn9fRS2GCPe48SQXHShBU%2BLCbxgiRllxIZ83lbjq5NpRDDE8wWB5ZAFl2MJT%2F%2BssGOqUB1%2FD%2BBtNNyynmUXqHrj6hWO9KwzSTg%2F7n%2FIi6CGoTYppOig34KMLMT2DoDsDBEt3bZCcTFV06RUdjxd24EbqSsz98f5Mp9GpGX6d8EAexPVawDQpFg%2Fa2jOkUZ%2FlwvsQB7xXrTl7DDg%2BbbK%2BR7BlVVXwoIH05v10AkDVf1HKRi1dtZpdEm1JgFbOAp0v9NAMZLk3J3E081ChD6x2iU5mmqDQEpLsZ&X-Amz-Signature=0d8deb371be99ecdb55630994b904c24af52c81f04fc70adb2437fd611f5cfd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFC26V6E%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo%2BfwUyvgsIul7X7p%2BzTEFtDt4si4YLu%2F3FkfO88DpUAIgKSDEmOdsYZ9W1rJ9xGjwlMQvIh8T7H4CuXxu53K13Y0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaf6%2FuCWfhXhh%2B1aSrcA%2FSFou7jvDANHUHoJD%2Bbti6fdoy5qAXetkg68Wee5OAQCNZhzfFkHghh5%2FzjxgZC0l3uEWlgUuglXhTjAzoUBJCL2j24iyMBUv5mvCqfQgTXtMNqmIJaAfuPMGf8QMzdu5etM1b6lHXE3YClVXtPSnR5SoQvU82r9YzTCoj%2BEHoNc2B%2FqQh3q1BScgrtOae7BQ4fPglUrSX3YFHgM%2FEDyVuggY4kfQjVOcMUvwMO5hZNtTIPDtL5lxCDTIb1xkTa2fKVSE%2BW9S19OpSY724CzeZ5gCDSF%2BaYDLA38dE7baz0mXoGDBnCS%2FLp73rGhlC06ovd52cte5P4yK9%2BmkeO9fvScRWz6lAPkjKl4TEh9SfBRzjcBsZWpvSpOaQmZvfHiWG8A8MR3eulF4Anr9W0LdhLzc6F4ErdNYdkH3HS9H1vjcqMDSmBwljeCw%2FhPe0CktqAhG6bMZEFkGviZNRgJsGoSfoDhknXrzprP92U%2B0eomXO50lmuatZsIhmtoTjCoxvDE%2FRiQy8XgkUVzMUm7EyHV5eenPrTHfCeN7Uzpp8Zv5FvqH%2B5ofEKym7csT9VkYQhn9fRS2GCPe48SQXHShBU%2BLCbxgiRllxIZ83lbjq5NpRDDE8wWB5ZAFl2MJT%2F%2BssGOqUB1%2FD%2BBtNNyynmUXqHrj6hWO9KwzSTg%2F7n%2FIi6CGoTYppOig34KMLMT2DoDsDBEt3bZCcTFV06RUdjxd24EbqSsz98f5Mp9GpGX6d8EAexPVawDQpFg%2Fa2jOkUZ%2FlwvsQB7xXrTl7DDg%2BbbK%2BR7BlVVXwoIH05v10AkDVf1HKRi1dtZpdEm1JgFbOAp0v9NAMZLk3J3E081ChD6x2iU5mmqDQEpLsZ&X-Amz-Signature=df2a07421e1ea62f51eac885b79c6da235e92c9e2a8eb7e08ba39e449972ab1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOJRJCS7%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwsfub5pi%2F7GsR%2FMxZWZTWvfs%2BIpu3FIrlTem43ET0sAiAfuZvmnjaSWyjdvFRD%2BDXcwxrz3CNN%2FLdAb00%2FC5WJNiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMApUfSxLFgiIEdCP9KtwDTOT2iIIZDoL8jUfmKysm4l1gHloOe8MNEBUMDNmxB6wIDFI7FLHDOSdCCkBIsR4zzLhnWLha1m85CsbMRMcGfUA%2BSpqsQAozoyXTNEH2k9HaYt7ehcOWcBaPHhJs6jHIeaCdRuRbLoKZx8%2FpKTHooaDYw%2FQJeZvyaGP8fxfCiVj41Qxk4xL0wgIVZlu5m4nXujJF%2BXbV9%2BlLyeKsZ%2FN73nT9OHDspsWSsYRo8tC1SBpHmGQaaP9MS37iKW0wlrBdwU4642t9WpiM2YGV7w%2FSkmlC0WgPSZEZgGhPF%2BhFHwkJt%2B4sSH5ms3y0VU7qbXsKF4SWoyWbjdzpjpCi55i%2B%2B5HDAy1KNUiC6WZK7fCoDJiQEXHrd9yi6Br5v0bxcVil2WrwzSTgtuAj3n4gnpfMyMF%2Brih3Ta4c86Kz8oS4p%2F6H2Dyzr6bzY84%2FSgrjDJdatB%2F8qIctcvG%2FCImhlfq17SejftrNke5bFWDFOz2SusFJLXr0sT7pUHUQLCMHAdxDJFB8ZhLL2ngXnV7U00c%2BSuzmL3Jup%2BL89bkOc1IovrftiIWSZKkkHz7slcvi5EZ5Fhda67nbbGw9XlZrvFni2DgkQDruf2T4pL6Tfzjotqoqa6tSPIZp8lJz%2BKMw0oD7ywY6pgHRTEmXslpiqNzTSo4S25rJ%2BTcEnH5NyzG2e2hua39GJRJyIsvAL1k38KYTu%2BFjRni4cc96vdy9QxoL%2BmryJwevvGNdrtQ%2BgiSn%2BGRaXC4aWZ5He6CJBrR1aiLnVAiY8fvet5XiliPhGjApUlC7A%2FiXvu33zwmREYqANo9NhLOSlEOpPkbZjq3yz4zuXY4XhQwynrdhSzx1Rl88w0qnMdl48RMkD3oA&X-Amz-Signature=110828166e3a77f9243b85ff879e1fdb0192540ec102004c7a2e1c9e3e8a87e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOJRJCS7%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwsfub5pi%2F7GsR%2FMxZWZTWvfs%2BIpu3FIrlTem43ET0sAiAfuZvmnjaSWyjdvFRD%2BDXcwxrz3CNN%2FLdAb00%2FC5WJNiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMApUfSxLFgiIEdCP9KtwDTOT2iIIZDoL8jUfmKysm4l1gHloOe8MNEBUMDNmxB6wIDFI7FLHDOSdCCkBIsR4zzLhnWLha1m85CsbMRMcGfUA%2BSpqsQAozoyXTNEH2k9HaYt7ehcOWcBaPHhJs6jHIeaCdRuRbLoKZx8%2FpKTHooaDYw%2FQJeZvyaGP8fxfCiVj41Qxk4xL0wgIVZlu5m4nXujJF%2BXbV9%2BlLyeKsZ%2FN73nT9OHDspsWSsYRo8tC1SBpHmGQaaP9MS37iKW0wlrBdwU4642t9WpiM2YGV7w%2FSkmlC0WgPSZEZgGhPF%2BhFHwkJt%2B4sSH5ms3y0VU7qbXsKF4SWoyWbjdzpjpCi55i%2B%2B5HDAy1KNUiC6WZK7fCoDJiQEXHrd9yi6Br5v0bxcVil2WrwzSTgtuAj3n4gnpfMyMF%2Brih3Ta4c86Kz8oS4p%2F6H2Dyzr6bzY84%2FSgrjDJdatB%2F8qIctcvG%2FCImhlfq17SejftrNke5bFWDFOz2SusFJLXr0sT7pUHUQLCMHAdxDJFB8ZhLL2ngXnV7U00c%2BSuzmL3Jup%2BL89bkOc1IovrftiIWSZKkkHz7slcvi5EZ5Fhda67nbbGw9XlZrvFni2DgkQDruf2T4pL6Tfzjotqoqa6tSPIZp8lJz%2BKMw0oD7ywY6pgHRTEmXslpiqNzTSo4S25rJ%2BTcEnH5NyzG2e2hua39GJRJyIsvAL1k38KYTu%2BFjRni4cc96vdy9QxoL%2BmryJwevvGNdrtQ%2BgiSn%2BGRaXC4aWZ5He6CJBrR1aiLnVAiY8fvet5XiliPhGjApUlC7A%2FiXvu33zwmREYqANo9NhLOSlEOpPkbZjq3yz4zuXY4XhQwynrdhSzx1Rl88w0qnMdl48RMkD3oA&X-Amz-Signature=929c17e9a5948c8cc0122fbe6a73d8b92b00dfb9133058385deebe58eaf285fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOJRJCS7%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwsfub5pi%2F7GsR%2FMxZWZTWvfs%2BIpu3FIrlTem43ET0sAiAfuZvmnjaSWyjdvFRD%2BDXcwxrz3CNN%2FLdAb00%2FC5WJNiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMApUfSxLFgiIEdCP9KtwDTOT2iIIZDoL8jUfmKysm4l1gHloOe8MNEBUMDNmxB6wIDFI7FLHDOSdCCkBIsR4zzLhnWLha1m85CsbMRMcGfUA%2BSpqsQAozoyXTNEH2k9HaYt7ehcOWcBaPHhJs6jHIeaCdRuRbLoKZx8%2FpKTHooaDYw%2FQJeZvyaGP8fxfCiVj41Qxk4xL0wgIVZlu5m4nXujJF%2BXbV9%2BlLyeKsZ%2FN73nT9OHDspsWSsYRo8tC1SBpHmGQaaP9MS37iKW0wlrBdwU4642t9WpiM2YGV7w%2FSkmlC0WgPSZEZgGhPF%2BhFHwkJt%2B4sSH5ms3y0VU7qbXsKF4SWoyWbjdzpjpCi55i%2B%2B5HDAy1KNUiC6WZK7fCoDJiQEXHrd9yi6Br5v0bxcVil2WrwzSTgtuAj3n4gnpfMyMF%2Brih3Ta4c86Kz8oS4p%2F6H2Dyzr6bzY84%2FSgrjDJdatB%2F8qIctcvG%2FCImhlfq17SejftrNke5bFWDFOz2SusFJLXr0sT7pUHUQLCMHAdxDJFB8ZhLL2ngXnV7U00c%2BSuzmL3Jup%2BL89bkOc1IovrftiIWSZKkkHz7slcvi5EZ5Fhda67nbbGw9XlZrvFni2DgkQDruf2T4pL6Tfzjotqoqa6tSPIZp8lJz%2BKMw0oD7ywY6pgHRTEmXslpiqNzTSo4S25rJ%2BTcEnH5NyzG2e2hua39GJRJyIsvAL1k38KYTu%2BFjRni4cc96vdy9QxoL%2BmryJwevvGNdrtQ%2BgiSn%2BGRaXC4aWZ5He6CJBrR1aiLnVAiY8fvet5XiliPhGjApUlC7A%2FiXvu33zwmREYqANo9NhLOSlEOpPkbZjq3yz4zuXY4XhQwynrdhSzx1Rl88w0qnMdl48RMkD3oA&X-Amz-Signature=069d57730fd6a3a4920e1ed84f972e6ec7333f26837c00a88ee99af69f6af8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2CTNQNG%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCALbF5YEXgbC%2Bhy0qjHEbmsLfxvpHuqUhMsy287LsI3gIhAM1cBPpdMQeEh21ReXr2zEVsBvfhFPTbMFRbsSiZu3t3KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjgN5a2wT4xiiJKjcq3AObDXpwgBl7IDrZtrpAlZjOzddZL6rmk7EbfCn0xhC%2F4d5OugSUM%2FvgXSevW4VZPrahfLapzCVtNM9XSSsg3huGOzb7N0sH9%2BOZxOGn2KBP8RO%2FngD0K67QVigHRyGk8UpGX8xWk3hA1fvhy1PTVrvzbqnnQYIZnP12YenCClWoOjYJZkMMO8%2F2tlqyCmUpfz3k2DolIVd8taHblZC0t51bVJFXn5GHn0AyBcXwJDSegVxXzfHroyQJpyc6rMsyDrAXkNRwcT3iijg9QAYW8VKQyxLFjFrIfMumBUfXYICD2lepVfdUsbXShZ7GhXRUj5Q1q1SPXS9DC5W5jtL0oZ0t%2BMMYjASGZg44%2B7k8WhLz4RG3koQQRQlgGdadLp2wsX5Sq%2Fuwre15obZ8Fz0fyUs6EwIWreYWZTBTWgLxmAaXHAEQt0joCHYjDORSaifZRLh7hZj5UmchTO6BbaVEe2169JsqgwFl1RLpbj5GRfuI9J4kP9J87ZMUv3k150jsb2CnmkM0Y%2FY52e1XYWSpnUlhU2FnD%2B%2Fmj9Crnd703K08EwRZVf96kxJYS0F9rU%2BDY%2B%2F2C3mEtcI6Lj9lewDsgiyVFOtU%2Bx0BAzv1GSJM5dJ%2BYzcTZUHNxm%2FJ9PbG5DCagfvLBjqkAfqfU%2FfGKEEp2Jus8%2F1J%2FFe48UIZLM1xCgqG4RZs8vQgK86Qe9SYwvYwlXxd9gPNJOi%2BNQ6JYJKpw0YCCFQbTYaNUirpzkzfYuAts7Aso7r%2FJx2ZjypWDXV%2FcZKWWu8QVFmurXA%2FeBbrAQATrLNULepc24yOOx%2Bx5L2UA5K%2BOC1JV9rUhTZlKS0dkfq3NNHPvuil2Sugzx3K5kP0wWdEQNoRKLCS&X-Amz-Signature=eae711502ab5c6e0305cc2ade316991b9397051cc5dcdc61e173aa856b9183c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2CTNQNG%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCALbF5YEXgbC%2Bhy0qjHEbmsLfxvpHuqUhMsy287LsI3gIhAM1cBPpdMQeEh21ReXr2zEVsBvfhFPTbMFRbsSiZu3t3KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjgN5a2wT4xiiJKjcq3AObDXpwgBl7IDrZtrpAlZjOzddZL6rmk7EbfCn0xhC%2F4d5OugSUM%2FvgXSevW4VZPrahfLapzCVtNM9XSSsg3huGOzb7N0sH9%2BOZxOGn2KBP8RO%2FngD0K67QVigHRyGk8UpGX8xWk3hA1fvhy1PTVrvzbqnnQYIZnP12YenCClWoOjYJZkMMO8%2F2tlqyCmUpfz3k2DolIVd8taHblZC0t51bVJFXn5GHn0AyBcXwJDSegVxXzfHroyQJpyc6rMsyDrAXkNRwcT3iijg9QAYW8VKQyxLFjFrIfMumBUfXYICD2lepVfdUsbXShZ7GhXRUj5Q1q1SPXS9DC5W5jtL0oZ0t%2BMMYjASGZg44%2B7k8WhLz4RG3koQQRQlgGdadLp2wsX5Sq%2Fuwre15obZ8Fz0fyUs6EwIWreYWZTBTWgLxmAaXHAEQt0joCHYjDORSaifZRLh7hZj5UmchTO6BbaVEe2169JsqgwFl1RLpbj5GRfuI9J4kP9J87ZMUv3k150jsb2CnmkM0Y%2FY52e1XYWSpnUlhU2FnD%2B%2Fmj9Crnd703K08EwRZVf96kxJYS0F9rU%2BDY%2B%2F2C3mEtcI6Lj9lewDsgiyVFOtU%2Bx0BAzv1GSJM5dJ%2BYzcTZUHNxm%2FJ9PbG5DCagfvLBjqkAfqfU%2FfGKEEp2Jus8%2F1J%2FFe48UIZLM1xCgqG4RZs8vQgK86Qe9SYwvYwlXxd9gPNJOi%2BNQ6JYJKpw0YCCFQbTYaNUirpzkzfYuAts7Aso7r%2FJx2ZjypWDXV%2FcZKWWu8QVFmurXA%2FeBbrAQATrLNULepc24yOOx%2Bx5L2UA5K%2BOC1JV9rUhTZlKS0dkfq3NNHPvuil2Sugzx3K5kP0wWdEQNoRKLCS&X-Amz-Signature=eb331686ed62075f200440f93aba500df370c93313a20c5005ae2f1eb0a3a066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27Q4OM7%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV1Hd%2FpX16M%2Fl9NkugnAfQClnwk5ZchjSFomyiMx79qQIhAKnrMg1chsSl5JGOEe8tmODkgHyf%2FXGj%2FkzZ%2FFpXNJ%2BSKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy25dztNoTnLVP%2BjM0q3ANOW5jlq%2FUm%2B7c6db7j22vj2WPbICwxo0p7%2FhsLFzhgENI8NN2aLrwTMOznfeLxdKjpVIYSOQHW1wRPPbWFX4ucSCX2YpLEHdOWaJ6H6usLK1kvDkgqD7lTRNS874tFMVFV3vAdUe879nWWHTbfcRKTkq7X91dBXLXFDm58z7nEs9J1W2FQdabfTN%2FEDTmeQu7MiBIom5phHkymxjZc5AAI1roS6udbtPCQSsJgSTKuTYio%2BNiaeljh2wMK1U6mD3lLjOIzcjI6LtWDq8t8B3FuEg7mXmzCttt%2B%2FwTRJsWMp3lzoOPMBupkrzyF99NgQbo0CB6SlPUtm%2FbpPAsugjbtBLmHqiGAwLUZBkAEfSR%2B6DZ4oJMafPP3OJ846m6u8HcVaw4SOEmqZwNQs9rQqD%2FvKK%2BWBTniYQW4tlIpEl4%2BiDicoUh66YP0mWwhNbIeLo4gjkosFKteDDJnIvyR0bu%2FilUwWnxVueoX33ux2LexpTY9rulUEks7TG4TwcX5zvns8pJ7V9x6Akb83fqMs%2F9ewq9iwTVVnJpEkGKgUfKk4GdIaHY4quvQqWySNv3xFl1rwyZfOZi3nLaIK%2BadFQUr9kNfWhGUUHELLbII7iHkBE0q34A6VvnFh9ovcDCcgvvLBjqkAcTY3nDKxOFyJ%2Bl%2F77T1xUQ00qY8ddgJzE%2BRt8P7APcFa%2F%2BqSFM237yC1Yk4f%2B6NBfin2Sb%2BpkEowi3AZdSYwziSitsxuGynvwlZK9yD1PlhViKdU%2B3v%2FnHNladgGhoMYhyF2wd7yO3YQqB0b13Psj5DWDEtRkCQSK%2FvWs5mwKVJMaO8W48kEcX5ZdDXos1aPEqpFLEwhklVonMfHdfnD6jh6XbA&X-Amz-Signature=485573d5d0e5dee77bd6440c659f296a00ecdc749d3104e5f5843028d114f4d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27Q4OM7%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV1Hd%2FpX16M%2Fl9NkugnAfQClnwk5ZchjSFomyiMx79qQIhAKnrMg1chsSl5JGOEe8tmODkgHyf%2FXGj%2FkzZ%2FFpXNJ%2BSKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy25dztNoTnLVP%2BjM0q3ANOW5jlq%2FUm%2B7c6db7j22vj2WPbICwxo0p7%2FhsLFzhgENI8NN2aLrwTMOznfeLxdKjpVIYSOQHW1wRPPbWFX4ucSCX2YpLEHdOWaJ6H6usLK1kvDkgqD7lTRNS874tFMVFV3vAdUe879nWWHTbfcRKTkq7X91dBXLXFDm58z7nEs9J1W2FQdabfTN%2FEDTmeQu7MiBIom5phHkymxjZc5AAI1roS6udbtPCQSsJgSTKuTYio%2BNiaeljh2wMK1U6mD3lLjOIzcjI6LtWDq8t8B3FuEg7mXmzCttt%2B%2FwTRJsWMp3lzoOPMBupkrzyF99NgQbo0CB6SlPUtm%2FbpPAsugjbtBLmHqiGAwLUZBkAEfSR%2B6DZ4oJMafPP3OJ846m6u8HcVaw4SOEmqZwNQs9rQqD%2FvKK%2BWBTniYQW4tlIpEl4%2BiDicoUh66YP0mWwhNbIeLo4gjkosFKteDDJnIvyR0bu%2FilUwWnxVueoX33ux2LexpTY9rulUEks7TG4TwcX5zvns8pJ7V9x6Akb83fqMs%2F9ewq9iwTVVnJpEkGKgUfKk4GdIaHY4quvQqWySNv3xFl1rwyZfOZi3nLaIK%2BadFQUr9kNfWhGUUHELLbII7iHkBE0q34A6VvnFh9ovcDCcgvvLBjqkAcTY3nDKxOFyJ%2Bl%2F77T1xUQ00qY8ddgJzE%2BRt8P7APcFa%2F%2BqSFM237yC1Yk4f%2B6NBfin2Sb%2BpkEowi3AZdSYwziSitsxuGynvwlZK9yD1PlhViKdU%2B3v%2FnHNladgGhoMYhyF2wd7yO3YQqB0b13Psj5DWDEtRkCQSK%2FvWs5mwKVJMaO8W48kEcX5ZdDXos1aPEqpFLEwhklVonMfHdfnD6jh6XbA&X-Amz-Signature=72fd4016f0425aa595f2979210caca5764dbbcc19a078a8f15a6853f1e260ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27Q4OM7%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV1Hd%2FpX16M%2Fl9NkugnAfQClnwk5ZchjSFomyiMx79qQIhAKnrMg1chsSl5JGOEe8tmODkgHyf%2FXGj%2FkzZ%2FFpXNJ%2BSKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy25dztNoTnLVP%2BjM0q3ANOW5jlq%2FUm%2B7c6db7j22vj2WPbICwxo0p7%2FhsLFzhgENI8NN2aLrwTMOznfeLxdKjpVIYSOQHW1wRPPbWFX4ucSCX2YpLEHdOWaJ6H6usLK1kvDkgqD7lTRNS874tFMVFV3vAdUe879nWWHTbfcRKTkq7X91dBXLXFDm58z7nEs9J1W2FQdabfTN%2FEDTmeQu7MiBIom5phHkymxjZc5AAI1roS6udbtPCQSsJgSTKuTYio%2BNiaeljh2wMK1U6mD3lLjOIzcjI6LtWDq8t8B3FuEg7mXmzCttt%2B%2FwTRJsWMp3lzoOPMBupkrzyF99NgQbo0CB6SlPUtm%2FbpPAsugjbtBLmHqiGAwLUZBkAEfSR%2B6DZ4oJMafPP3OJ846m6u8HcVaw4SOEmqZwNQs9rQqD%2FvKK%2BWBTniYQW4tlIpEl4%2BiDicoUh66YP0mWwhNbIeLo4gjkosFKteDDJnIvyR0bu%2FilUwWnxVueoX33ux2LexpTY9rulUEks7TG4TwcX5zvns8pJ7V9x6Akb83fqMs%2F9ewq9iwTVVnJpEkGKgUfKk4GdIaHY4quvQqWySNv3xFl1rwyZfOZi3nLaIK%2BadFQUr9kNfWhGUUHELLbII7iHkBE0q34A6VvnFh9ovcDCcgvvLBjqkAcTY3nDKxOFyJ%2Bl%2F77T1xUQ00qY8ddgJzE%2BRt8P7APcFa%2F%2BqSFM237yC1Yk4f%2B6NBfin2Sb%2BpkEowi3AZdSYwziSitsxuGynvwlZK9yD1PlhViKdU%2B3v%2FnHNladgGhoMYhyF2wd7yO3YQqB0b13Psj5DWDEtRkCQSK%2FvWs5mwKVJMaO8W48kEcX5ZdDXos1aPEqpFLEwhklVonMfHdfnD6jh6XbA&X-Amz-Signature=8f2befef7e1ea34e43b08933b7a76bfe81633c06f22b41e6e3ab3be3ff55ac7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27Q4OM7%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV1Hd%2FpX16M%2Fl9NkugnAfQClnwk5ZchjSFomyiMx79qQIhAKnrMg1chsSl5JGOEe8tmODkgHyf%2FXGj%2FkzZ%2FFpXNJ%2BSKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy25dztNoTnLVP%2BjM0q3ANOW5jlq%2FUm%2B7c6db7j22vj2WPbICwxo0p7%2FhsLFzhgENI8NN2aLrwTMOznfeLxdKjpVIYSOQHW1wRPPbWFX4ucSCX2YpLEHdOWaJ6H6usLK1kvDkgqD7lTRNS874tFMVFV3vAdUe879nWWHTbfcRKTkq7X91dBXLXFDm58z7nEs9J1W2FQdabfTN%2FEDTmeQu7MiBIom5phHkymxjZc5AAI1roS6udbtPCQSsJgSTKuTYio%2BNiaeljh2wMK1U6mD3lLjOIzcjI6LtWDq8t8B3FuEg7mXmzCttt%2B%2FwTRJsWMp3lzoOPMBupkrzyF99NgQbo0CB6SlPUtm%2FbpPAsugjbtBLmHqiGAwLUZBkAEfSR%2B6DZ4oJMafPP3OJ846m6u8HcVaw4SOEmqZwNQs9rQqD%2FvKK%2BWBTniYQW4tlIpEl4%2BiDicoUh66YP0mWwhNbIeLo4gjkosFKteDDJnIvyR0bu%2FilUwWnxVueoX33ux2LexpTY9rulUEks7TG4TwcX5zvns8pJ7V9x6Akb83fqMs%2F9ewq9iwTVVnJpEkGKgUfKk4GdIaHY4quvQqWySNv3xFl1rwyZfOZi3nLaIK%2BadFQUr9kNfWhGUUHELLbII7iHkBE0q34A6VvnFh9ovcDCcgvvLBjqkAcTY3nDKxOFyJ%2Bl%2F77T1xUQ00qY8ddgJzE%2BRt8P7APcFa%2F%2BqSFM237yC1Yk4f%2B6NBfin2Sb%2BpkEowi3AZdSYwziSitsxuGynvwlZK9yD1PlhViKdU%2B3v%2FnHNladgGhoMYhyF2wd7yO3YQqB0b13Psj5DWDEtRkCQSK%2FvWs5mwKVJMaO8W48kEcX5ZdDXos1aPEqpFLEwhklVonMfHdfnD6jh6XbA&X-Amz-Signature=7a17dbc80b0ac86d39fdaf68dccdc1b0aeb2880cbfe2991f57cbb7bc8ef7cd37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27Q4OM7%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV1Hd%2FpX16M%2Fl9NkugnAfQClnwk5ZchjSFomyiMx79qQIhAKnrMg1chsSl5JGOEe8tmODkgHyf%2FXGj%2FkzZ%2FFpXNJ%2BSKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy25dztNoTnLVP%2BjM0q3ANOW5jlq%2FUm%2B7c6db7j22vj2WPbICwxo0p7%2FhsLFzhgENI8NN2aLrwTMOznfeLxdKjpVIYSOQHW1wRPPbWFX4ucSCX2YpLEHdOWaJ6H6usLK1kvDkgqD7lTRNS874tFMVFV3vAdUe879nWWHTbfcRKTkq7X91dBXLXFDm58z7nEs9J1W2FQdabfTN%2FEDTmeQu7MiBIom5phHkymxjZc5AAI1roS6udbtPCQSsJgSTKuTYio%2BNiaeljh2wMK1U6mD3lLjOIzcjI6LtWDq8t8B3FuEg7mXmzCttt%2B%2FwTRJsWMp3lzoOPMBupkrzyF99NgQbo0CB6SlPUtm%2FbpPAsugjbtBLmHqiGAwLUZBkAEfSR%2B6DZ4oJMafPP3OJ846m6u8HcVaw4SOEmqZwNQs9rQqD%2FvKK%2BWBTniYQW4tlIpEl4%2BiDicoUh66YP0mWwhNbIeLo4gjkosFKteDDJnIvyR0bu%2FilUwWnxVueoX33ux2LexpTY9rulUEks7TG4TwcX5zvns8pJ7V9x6Akb83fqMs%2F9ewq9iwTVVnJpEkGKgUfKk4GdIaHY4quvQqWySNv3xFl1rwyZfOZi3nLaIK%2BadFQUr9kNfWhGUUHELLbII7iHkBE0q34A6VvnFh9ovcDCcgvvLBjqkAcTY3nDKxOFyJ%2Bl%2F77T1xUQ00qY8ddgJzE%2BRt8P7APcFa%2F%2BqSFM237yC1Yk4f%2B6NBfin2Sb%2BpkEowi3AZdSYwziSitsxuGynvwlZK9yD1PlhViKdU%2B3v%2FnHNladgGhoMYhyF2wd7yO3YQqB0b13Psj5DWDEtRkCQSK%2FvWs5mwKVJMaO8W48kEcX5ZdDXos1aPEqpFLEwhklVonMfHdfnD6jh6XbA&X-Amz-Signature=a197e9fe622d87ad869f0abfd7596b866beec341b9b233eae11134cc3da3b8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RSVOT4I%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T051149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnf1swal%2FrRxJK0iAgwPoc6v4F1oBansvmNO9oXvT66QIhAM45Twp60Hz1DK787q21NUvuqs8iDSyypQahdVgFZug0KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYzUznBYQymHd%2FR94q3AOXpwCHpDJu1ba2uMgdOUiG6laPN%2B2k7QBFH%2BNDoK02Ssq80%2BOdyHeAh6E%2FaMth3aS2PD1%2FHwO7ADx7ibHIgYiRlYenQDjUIfwb6t%2FFqhKzEtaQ7j4M19ibgJRuhpWikGG60xmCYZQKgjevm032V%2BxhIKjGWs%2FOAt5ValVs2zdzVxCZmPukkeaNdsYZXP7TV2w5k%2F6EJus5ZP2H5SpNOcoR2edr0jneB6IEprQyWxghcukKs4XEEeSkRxV6Eq%2Fkwt13mIPn0%2FB1fgdzmNTtF3tSsJjARekiLJjPt9jRuns5UDy8FeaRE2yFHcYigEpa7WNV%2Fw1DrnDvrPiHXyc2HVOXOsAOMUniCavE%2FA8LIJC0cBV1EOB09V4D9AmhrW1%2BtAi07bQtYSJYm%2B9NbDzGXs8k10rontXcdURyc6BmHK54cPdvge3ic3tbu8Nyg3a8UYntMHQ5WLCI%2BAxB5XDooMS8gx%2Bi4T7IPeP7B4wFCuFDdoZ1dsPvHE0yhJP4h%2F5R3CWkKg1k%2BYE%2B0t0KK2TRU5QRqQ6LwjDKiCCz8%2BbsBuC25JbhOe7PZi3G6KM3py1CptbaYWiIycfVBDG2ejHmGMknIwVoXlP61QIGkbVoLTrcrfQ31xW2nQNyHpHOTjDV%2BPrLBjqkAQi4OvNtPVxLZFvCN%2BeyRUP2QoPBBoLcmt1vUMEHf1wjRWlPJyv7P8ma0ZQxrSbed0O2FEjfoukyWl1RCdKLGw8aKJiekyeX8d4amSvhCU0r4H25GlkpkGfA1zuog8ijykvlvIc1W7HrsoBdqVJfVEz64WEO59KvJYuQqJKqHJioxkPcTNecJBR%2FBDotWCB%2FYIUpLNmCzwjADoGSAbGGhNrW6mTr&X-Amz-Signature=1e3ea36f8b4325cbce588a39656b4c9fa29cc7a0703bc779b1c2d4c7d8596bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

