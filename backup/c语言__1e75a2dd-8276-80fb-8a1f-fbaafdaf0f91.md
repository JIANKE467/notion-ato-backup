
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466226C5MC7%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIDblalfAJMxOGUmzRxiJzMS0sOTw%2BRbLJgyWwd4dIkwzAiEA7t8uvYQllKdkUz%2B%2B%2FKqGPjfL3b%2F3bxEx7m8yHmr2vJAq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDJ9ukPiafQJTcfUC%2ByrcAy19I8u0bawcEN7FLln4b3IeTRa88ZSzUCaCHBmprq6WR4kqbjtcqkl9SyGUUnG6LOHlMD3ZuF%2B7rSEFYVsURV61mpCkzlWaZeMiCYI4zFHInEbA14SptGQsOJdd4m%2Fj%2BPCVH99qxhjGrtgsIKdXMgsTJIGEZZNUGVOFeHCkjiRzbgd1SFKk7zYOnTLB9kvLYZLxFW5%2F55shZG8y95G7dC5g1HKB%2BC%2FcAYBQhi1stUmIrA9fxLoFDpxyBqeWxXnOAfX8sClyHtv0k7WMhHOVI2VKgfBr2IBeMLdhwCf3C0fFVjjt9OS%2B9oY7QiniISK2ncj4u8QAczO2GqgSd9p6n%2BpGkPQJqf7gPobWQAPlHQw9lMfnYeifxiFLdnW47myA8UInOKIU8RuhOpXdjUJ%2BqeoWau3iUh7WZJfSvJtBMCUMeenG7fRiLiJYTMFr3jmhG3V9H4sKJTZLj93%2B1JaQyH23LPuA8wlCGu0IkeZhrwYT8fAI3XsfCi2HkfbrTs8EbtyjMQ89zinYnTdEqb9gNBGDnfXV0lNLbMsqoy6iikIr3BrsojeZUCzl7cnsmHKw0MEyHCiqU4t2NI9TqqFPQhGMFo58sXhyLFAmAG%2B4lfEp2516LimDR0nbd744MKHLrcoGOqUBfrMK5avWDE0ybsXr94KenvawV5AfTlYItK%2Fv%2FlZ44HM7XGt5d%2F82SsgC9WSO9s0AfVlXdh0QMEIsK0EY%2BAtdSHXfR%2FDYmHM0veYmwHweMnvlCwk3IkotJLwUBoPexfy9tN2TTMr5b4Toz9Pqw4m1db%2F8vzeWf2rF8yZubk3WLWTcRITfnH1pHsQ%2B3xtsRJ46apmG8mV8IgaPF9A5cOPHcm7F7Q%2Fa&X-Amz-Signature=74427bc916e5246fb2cda350e805c5ca1159ea580a96891aba4e43592f423ab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPAYQMJ%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIGZInpA8kVroe1uOx4jsjlFgD0KpJXmBdzZz6kmcTnQ9AiEAiEgUX%2Bo%2BvvpckFxpouFprgtRFiCPdyDi6fd2pRpdpU0q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDB6areWpseXfyA%2Fv9CrcA%2FjQgYoZpgQjuoTzGCE0X%2Bx2kLycbQKg6IebvRQ1SJqkhvriiVtZzSNShq8sGwI97UKAusdMb0P89lB9pC0kkqm3QKJbSnvrrTQbsWXDPfYwXiRfHRgwcjVcnkitxwGTftHrRwyZpmWOlmBlVgNV4V4%2FoDZiaBGNsJGOBQ3eIPaPMeUty6wI1e0tKliwVeYleXPwqwQGEMfHHN7uq9YkMkg22wa%2B5m7qKFn%2FqYxWIM5g1WgPjZtIQ2EUdDMfKiHWSXST0YKHNE4NqbkFgHBuC6D0bwoyd9sydSHe5zAQ0zIuaOe8ZC8U6SMH9viIiWrtOtl2%2BdBZgUzbIm50%2FgIYScbxQWRJ4bIgDaDQEZUQtkkXiUaADHTvgVbtck0xC3vrj7%2B8Amu5e8dksl%2BcKx7NDELuT8tX8umgHcTuZpoQLUThmv37epPw8INHEZNMDhLAjXcJ8OI4uNh3r5npJ1w4bwLgX0lf%2F24NZXr1F5FlTFbHarrDt2PJWTl4YYVEXaaeUOjhhmGgjl1sd1NouUOEFBl6JKj3mlaINxZ7GcKFCeezQ9WOtjzF3HpxuKzwJz20csausbUYQG0syFuLw82hcXzzocFVe8VqvMPSPcbiaBiMe5kTq%2FVQZ5aLv%2BNEMNWircoGOqUBdF5Bp2Vc5H%2B1l27cqBuaSob%2BNu3WyZWxdnSdtCOjyjwWgWM5sRIxj1srvznlU56%2Fp464jo2lAPPZ6Q8TPIP9OuB7JnbG%2F%2F5FfJk%2F9pj6RLuBkq%2BtnOgCrWjPxkR9XUcz8JxmdWZ%2F88pxbSgMJnGpEtozROLvQU4YhWLA%2BcFxJYru%2Fj1GmA7SEaKEqQk2aMvg89lxTThwpJN61E%2FqynFE2du38i1a&X-Amz-Signature=e235acd6e34e5c8ed511f1bfd98ac2f3f12648d73577e50b9dab2f74353105a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPAYQMJ%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIGZInpA8kVroe1uOx4jsjlFgD0KpJXmBdzZz6kmcTnQ9AiEAiEgUX%2Bo%2BvvpckFxpouFprgtRFiCPdyDi6fd2pRpdpU0q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDB6areWpseXfyA%2Fv9CrcA%2FjQgYoZpgQjuoTzGCE0X%2Bx2kLycbQKg6IebvRQ1SJqkhvriiVtZzSNShq8sGwI97UKAusdMb0P89lB9pC0kkqm3QKJbSnvrrTQbsWXDPfYwXiRfHRgwcjVcnkitxwGTftHrRwyZpmWOlmBlVgNV4V4%2FoDZiaBGNsJGOBQ3eIPaPMeUty6wI1e0tKliwVeYleXPwqwQGEMfHHN7uq9YkMkg22wa%2B5m7qKFn%2FqYxWIM5g1WgPjZtIQ2EUdDMfKiHWSXST0YKHNE4NqbkFgHBuC6D0bwoyd9sydSHe5zAQ0zIuaOe8ZC8U6SMH9viIiWrtOtl2%2BdBZgUzbIm50%2FgIYScbxQWRJ4bIgDaDQEZUQtkkXiUaADHTvgVbtck0xC3vrj7%2B8Amu5e8dksl%2BcKx7NDELuT8tX8umgHcTuZpoQLUThmv37epPw8INHEZNMDhLAjXcJ8OI4uNh3r5npJ1w4bwLgX0lf%2F24NZXr1F5FlTFbHarrDt2PJWTl4YYVEXaaeUOjhhmGgjl1sd1NouUOEFBl6JKj3mlaINxZ7GcKFCeezQ9WOtjzF3HpxuKzwJz20csausbUYQG0syFuLw82hcXzzocFVe8VqvMPSPcbiaBiMe5kTq%2FVQZ5aLv%2BNEMNWircoGOqUBdF5Bp2Vc5H%2B1l27cqBuaSob%2BNu3WyZWxdnSdtCOjyjwWgWM5sRIxj1srvznlU56%2Fp464jo2lAPPZ6Q8TPIP9OuB7JnbG%2F%2F5FfJk%2F9pj6RLuBkq%2BtnOgCrWjPxkR9XUcz8JxmdWZ%2F88pxbSgMJnGpEtozROLvQU4YhWLA%2BcFxJYru%2Fj1GmA7SEaKEqQk2aMvg89lxTThwpJN61E%2FqynFE2du38i1a&X-Amz-Signature=72dff43c816bf2cc7bf7389497f365eb596ccd2931e2e4bf8bb3a6ee92b86208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XWG5VGU%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDip6SXiQaUXX0UJb6jSD52EHJAG0rp6TjNb09GXHFZVQIgcKerysFRHcf1ktmH9yQ0vkUWKcShmTvbJdSRqH6FvrYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDB7qJvM9C7%2FQ47mzYSrcA%2BKIhbGHC2mwp7jo%2BzVGfv%2B79HzmAlJzRULA2n3yKRvcDlyeiXlThOoJBBCW3ZfqnbswZFn8zHvHiGMX0pq5%2FjaqoWtYMyoGyDhQdXOfJYAHdl6ghpS%2F4%2B4LxWnVa%2BHEd3aWFDZH6AybWhuxbWa9z3nbSl5QyFi%2BFsi4LsxVFM3y7oE0KXH6axQpo4%2FPXHnq%2B%2BkgmTOF9nnwBW0%2B45%2FuONyu%2FHaCS4N9InU%2FYq33nL804dI4VJhbUCRAaB9oUBw5Eb1wos%2FnD0adtJ5Vz%2B8IPvD03VOREpHuOhk%2FIIpVej86bS7Dt6%2BcQ6AQLCNTEDB9J67Vs8feSsXvFMz5nH%2BNVjyvj%2BMzg9cntrdkAnghj3VYOWq%2BZbTqW4MZpOcx%2BShVZv3bRyzIF1dyb2EenJOLONR%2BQs2evEHJP7Ekxkj1AJCvmr2ep%2FnxPuxJpkZ%2FOFp1Q1GrONHeSu%2Fug%2BZIM7yc44zZLweQnfBzT%2FcLdo1CAFnB4n59XXhebs29XidbExhcL%2BR%2BBY9mMfZtquBy0%2FbE1C8SIRyvfTfxRZMV7pbvTUUxwHtQQe96NV8varu40dJHtr25SNW7nkdQfvvBy9X0aPvhBs0vh0elu0EqIZEeESnMwA3SS5hDtG2gRSSBMLKjrcoGOqUB6dbmr1ltZV3WBmD%2BWDjFDffhre160LI9gKfYIUcOARLg3RPPJgETT01arOY2f6Er%2FR2pHnVZpdUP5VQ2AaVX2g%2Fb1wF%2BevkQUy%2FRrW4h71%2FxQFSEaqs3m5G3oVZldye2j4OBF3zpf%2Fjj2Q1k9W3S7cH%2Bh5j5b0xHl6xThVPH%2FzCHefwkOJeTYjsLYHTbwRSAFKIIKYJN2qzWCzp1kNbMMARCUAck&X-Amz-Signature=d093ba4095bc507043a26ca970d149681af347af252fe1a2f736c5a6ec9fded6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XWG5VGU%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDip6SXiQaUXX0UJb6jSD52EHJAG0rp6TjNb09GXHFZVQIgcKerysFRHcf1ktmH9yQ0vkUWKcShmTvbJdSRqH6FvrYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDB7qJvM9C7%2FQ47mzYSrcA%2BKIhbGHC2mwp7jo%2BzVGfv%2B79HzmAlJzRULA2n3yKRvcDlyeiXlThOoJBBCW3ZfqnbswZFn8zHvHiGMX0pq5%2FjaqoWtYMyoGyDhQdXOfJYAHdl6ghpS%2F4%2B4LxWnVa%2BHEd3aWFDZH6AybWhuxbWa9z3nbSl5QyFi%2BFsi4LsxVFM3y7oE0KXH6axQpo4%2FPXHnq%2B%2BkgmTOF9nnwBW0%2B45%2FuONyu%2FHaCS4N9InU%2FYq33nL804dI4VJhbUCRAaB9oUBw5Eb1wos%2FnD0adtJ5Vz%2B8IPvD03VOREpHuOhk%2FIIpVej86bS7Dt6%2BcQ6AQLCNTEDB9J67Vs8feSsXvFMz5nH%2BNVjyvj%2BMzg9cntrdkAnghj3VYOWq%2BZbTqW4MZpOcx%2BShVZv3bRyzIF1dyb2EenJOLONR%2BQs2evEHJP7Ekxkj1AJCvmr2ep%2FnxPuxJpkZ%2FOFp1Q1GrONHeSu%2Fug%2BZIM7yc44zZLweQnfBzT%2FcLdo1CAFnB4n59XXhebs29XidbExhcL%2BR%2BBY9mMfZtquBy0%2FbE1C8SIRyvfTfxRZMV7pbvTUUxwHtQQe96NV8varu40dJHtr25SNW7nkdQfvvBy9X0aPvhBs0vh0elu0EqIZEeESnMwA3SS5hDtG2gRSSBMLKjrcoGOqUB6dbmr1ltZV3WBmD%2BWDjFDffhre160LI9gKfYIUcOARLg3RPPJgETT01arOY2f6Er%2FR2pHnVZpdUP5VQ2AaVX2g%2Fb1wF%2BevkQUy%2FRrW4h71%2FxQFSEaqs3m5G3oVZldye2j4OBF3zpf%2Fjj2Q1k9W3S7cH%2Bh5j5b0xHl6xThVPH%2FzCHefwkOJeTYjsLYHTbwRSAFKIIKYJN2qzWCzp1kNbMMARCUAck&X-Amz-Signature=59c3df7a74d016fc38f5bdb5824d5abebf090d03678789ef29c1256f803b4f11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XWG5VGU%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDip6SXiQaUXX0UJb6jSD52EHJAG0rp6TjNb09GXHFZVQIgcKerysFRHcf1ktmH9yQ0vkUWKcShmTvbJdSRqH6FvrYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDB7qJvM9C7%2FQ47mzYSrcA%2BKIhbGHC2mwp7jo%2BzVGfv%2B79HzmAlJzRULA2n3yKRvcDlyeiXlThOoJBBCW3ZfqnbswZFn8zHvHiGMX0pq5%2FjaqoWtYMyoGyDhQdXOfJYAHdl6ghpS%2F4%2B4LxWnVa%2BHEd3aWFDZH6AybWhuxbWa9z3nbSl5QyFi%2BFsi4LsxVFM3y7oE0KXH6axQpo4%2FPXHnq%2B%2BkgmTOF9nnwBW0%2B45%2FuONyu%2FHaCS4N9InU%2FYq33nL804dI4VJhbUCRAaB9oUBw5Eb1wos%2FnD0adtJ5Vz%2B8IPvD03VOREpHuOhk%2FIIpVej86bS7Dt6%2BcQ6AQLCNTEDB9J67Vs8feSsXvFMz5nH%2BNVjyvj%2BMzg9cntrdkAnghj3VYOWq%2BZbTqW4MZpOcx%2BShVZv3bRyzIF1dyb2EenJOLONR%2BQs2evEHJP7Ekxkj1AJCvmr2ep%2FnxPuxJpkZ%2FOFp1Q1GrONHeSu%2Fug%2BZIM7yc44zZLweQnfBzT%2FcLdo1CAFnB4n59XXhebs29XidbExhcL%2BR%2BBY9mMfZtquBy0%2FbE1C8SIRyvfTfxRZMV7pbvTUUxwHtQQe96NV8varu40dJHtr25SNW7nkdQfvvBy9X0aPvhBs0vh0elu0EqIZEeESnMwA3SS5hDtG2gRSSBMLKjrcoGOqUB6dbmr1ltZV3WBmD%2BWDjFDffhre160LI9gKfYIUcOARLg3RPPJgETT01arOY2f6Er%2FR2pHnVZpdUP5VQ2AaVX2g%2Fb1wF%2BevkQUy%2FRrW4h71%2FxQFSEaqs3m5G3oVZldye2j4OBF3zpf%2Fjj2Q1k9W3S7cH%2Bh5j5b0xHl6xThVPH%2FzCHefwkOJeTYjsLYHTbwRSAFKIIKYJN2qzWCzp1kNbMMARCUAck&X-Amz-Signature=fbf36f9d9ff3dbebf1e7ef2d8869ee161c0e98cb11a34f66ead8d8924bb3e1ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XWG5VGU%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDip6SXiQaUXX0UJb6jSD52EHJAG0rp6TjNb09GXHFZVQIgcKerysFRHcf1ktmH9yQ0vkUWKcShmTvbJdSRqH6FvrYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDB7qJvM9C7%2FQ47mzYSrcA%2BKIhbGHC2mwp7jo%2BzVGfv%2B79HzmAlJzRULA2n3yKRvcDlyeiXlThOoJBBCW3ZfqnbswZFn8zHvHiGMX0pq5%2FjaqoWtYMyoGyDhQdXOfJYAHdl6ghpS%2F4%2B4LxWnVa%2BHEd3aWFDZH6AybWhuxbWa9z3nbSl5QyFi%2BFsi4LsxVFM3y7oE0KXH6axQpo4%2FPXHnq%2B%2BkgmTOF9nnwBW0%2B45%2FuONyu%2FHaCS4N9InU%2FYq33nL804dI4VJhbUCRAaB9oUBw5Eb1wos%2FnD0adtJ5Vz%2B8IPvD03VOREpHuOhk%2FIIpVej86bS7Dt6%2BcQ6AQLCNTEDB9J67Vs8feSsXvFMz5nH%2BNVjyvj%2BMzg9cntrdkAnghj3VYOWq%2BZbTqW4MZpOcx%2BShVZv3bRyzIF1dyb2EenJOLONR%2BQs2evEHJP7Ekxkj1AJCvmr2ep%2FnxPuxJpkZ%2FOFp1Q1GrONHeSu%2Fug%2BZIM7yc44zZLweQnfBzT%2FcLdo1CAFnB4n59XXhebs29XidbExhcL%2BR%2BBY9mMfZtquBy0%2FbE1C8SIRyvfTfxRZMV7pbvTUUxwHtQQe96NV8varu40dJHtr25SNW7nkdQfvvBy9X0aPvhBs0vh0elu0EqIZEeESnMwA3SS5hDtG2gRSSBMLKjrcoGOqUB6dbmr1ltZV3WBmD%2BWDjFDffhre160LI9gKfYIUcOARLg3RPPJgETT01arOY2f6Er%2FR2pHnVZpdUP5VQ2AaVX2g%2Fb1wF%2BevkQUy%2FRrW4h71%2FxQFSEaqs3m5G3oVZldye2j4OBF3zpf%2Fjj2Q1k9W3S7cH%2Bh5j5b0xHl6xThVPH%2FzCHefwkOJeTYjsLYHTbwRSAFKIIKYJN2qzWCzp1kNbMMARCUAck&X-Amz-Signature=8f255267fb8a6cb26cd61503cd8409f7b198793a46861c041b5c2c20b7455cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XWG5VGU%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDip6SXiQaUXX0UJb6jSD52EHJAG0rp6TjNb09GXHFZVQIgcKerysFRHcf1ktmH9yQ0vkUWKcShmTvbJdSRqH6FvrYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDB7qJvM9C7%2FQ47mzYSrcA%2BKIhbGHC2mwp7jo%2BzVGfv%2B79HzmAlJzRULA2n3yKRvcDlyeiXlThOoJBBCW3ZfqnbswZFn8zHvHiGMX0pq5%2FjaqoWtYMyoGyDhQdXOfJYAHdl6ghpS%2F4%2B4LxWnVa%2BHEd3aWFDZH6AybWhuxbWa9z3nbSl5QyFi%2BFsi4LsxVFM3y7oE0KXH6axQpo4%2FPXHnq%2B%2BkgmTOF9nnwBW0%2B45%2FuONyu%2FHaCS4N9InU%2FYq33nL804dI4VJhbUCRAaB9oUBw5Eb1wos%2FnD0adtJ5Vz%2B8IPvD03VOREpHuOhk%2FIIpVej86bS7Dt6%2BcQ6AQLCNTEDB9J67Vs8feSsXvFMz5nH%2BNVjyvj%2BMzg9cntrdkAnghj3VYOWq%2BZbTqW4MZpOcx%2BShVZv3bRyzIF1dyb2EenJOLONR%2BQs2evEHJP7Ekxkj1AJCvmr2ep%2FnxPuxJpkZ%2FOFp1Q1GrONHeSu%2Fug%2BZIM7yc44zZLweQnfBzT%2FcLdo1CAFnB4n59XXhebs29XidbExhcL%2BR%2BBY9mMfZtquBy0%2FbE1C8SIRyvfTfxRZMV7pbvTUUxwHtQQe96NV8varu40dJHtr25SNW7nkdQfvvBy9X0aPvhBs0vh0elu0EqIZEeESnMwA3SS5hDtG2gRSSBMLKjrcoGOqUB6dbmr1ltZV3WBmD%2BWDjFDffhre160LI9gKfYIUcOARLg3RPPJgETT01arOY2f6Er%2FR2pHnVZpdUP5VQ2AaVX2g%2Fb1wF%2BevkQUy%2FRrW4h71%2FxQFSEaqs3m5G3oVZldye2j4OBF3zpf%2Fjj2Q1k9W3S7cH%2Bh5j5b0xHl6xThVPH%2FzCHefwkOJeTYjsLYHTbwRSAFKIIKYJN2qzWCzp1kNbMMARCUAck&X-Amz-Signature=c45ee3da65df610626d6e4cb51b7693fcb6acc5142215b5b2030e8ef08e9b884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XWG5VGU%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDip6SXiQaUXX0UJb6jSD52EHJAG0rp6TjNb09GXHFZVQIgcKerysFRHcf1ktmH9yQ0vkUWKcShmTvbJdSRqH6FvrYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDB7qJvM9C7%2FQ47mzYSrcA%2BKIhbGHC2mwp7jo%2BzVGfv%2B79HzmAlJzRULA2n3yKRvcDlyeiXlThOoJBBCW3ZfqnbswZFn8zHvHiGMX0pq5%2FjaqoWtYMyoGyDhQdXOfJYAHdl6ghpS%2F4%2B4LxWnVa%2BHEd3aWFDZH6AybWhuxbWa9z3nbSl5QyFi%2BFsi4LsxVFM3y7oE0KXH6axQpo4%2FPXHnq%2B%2BkgmTOF9nnwBW0%2B45%2FuONyu%2FHaCS4N9InU%2FYq33nL804dI4VJhbUCRAaB9oUBw5Eb1wos%2FnD0adtJ5Vz%2B8IPvD03VOREpHuOhk%2FIIpVej86bS7Dt6%2BcQ6AQLCNTEDB9J67Vs8feSsXvFMz5nH%2BNVjyvj%2BMzg9cntrdkAnghj3VYOWq%2BZbTqW4MZpOcx%2BShVZv3bRyzIF1dyb2EenJOLONR%2BQs2evEHJP7Ekxkj1AJCvmr2ep%2FnxPuxJpkZ%2FOFp1Q1GrONHeSu%2Fug%2BZIM7yc44zZLweQnfBzT%2FcLdo1CAFnB4n59XXhebs29XidbExhcL%2BR%2BBY9mMfZtquBy0%2FbE1C8SIRyvfTfxRZMV7pbvTUUxwHtQQe96NV8varu40dJHtr25SNW7nkdQfvvBy9X0aPvhBs0vh0elu0EqIZEeESnMwA3SS5hDtG2gRSSBMLKjrcoGOqUB6dbmr1ltZV3WBmD%2BWDjFDffhre160LI9gKfYIUcOARLg3RPPJgETT01arOY2f6Er%2FR2pHnVZpdUP5VQ2AaVX2g%2Fb1wF%2BevkQUy%2FRrW4h71%2FxQFSEaqs3m5G3oVZldye2j4OBF3zpf%2Fjj2Q1k9W3S7cH%2Bh5j5b0xHl6xThVPH%2FzCHefwkOJeTYjsLYHTbwRSAFKIIKYJN2qzWCzp1kNbMMARCUAck&X-Amz-Signature=5c2ce338ef6766f09b5a5c1264beeb5104167660642ae91f80502ba3eee38230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XWG5VGU%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDip6SXiQaUXX0UJb6jSD52EHJAG0rp6TjNb09GXHFZVQIgcKerysFRHcf1ktmH9yQ0vkUWKcShmTvbJdSRqH6FvrYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDB7qJvM9C7%2FQ47mzYSrcA%2BKIhbGHC2mwp7jo%2BzVGfv%2B79HzmAlJzRULA2n3yKRvcDlyeiXlThOoJBBCW3ZfqnbswZFn8zHvHiGMX0pq5%2FjaqoWtYMyoGyDhQdXOfJYAHdl6ghpS%2F4%2B4LxWnVa%2BHEd3aWFDZH6AybWhuxbWa9z3nbSl5QyFi%2BFsi4LsxVFM3y7oE0KXH6axQpo4%2FPXHnq%2B%2BkgmTOF9nnwBW0%2B45%2FuONyu%2FHaCS4N9InU%2FYq33nL804dI4VJhbUCRAaB9oUBw5Eb1wos%2FnD0adtJ5Vz%2B8IPvD03VOREpHuOhk%2FIIpVej86bS7Dt6%2BcQ6AQLCNTEDB9J67Vs8feSsXvFMz5nH%2BNVjyvj%2BMzg9cntrdkAnghj3VYOWq%2BZbTqW4MZpOcx%2BShVZv3bRyzIF1dyb2EenJOLONR%2BQs2evEHJP7Ekxkj1AJCvmr2ep%2FnxPuxJpkZ%2FOFp1Q1GrONHeSu%2Fug%2BZIM7yc44zZLweQnfBzT%2FcLdo1CAFnB4n59XXhebs29XidbExhcL%2BR%2BBY9mMfZtquBy0%2FbE1C8SIRyvfTfxRZMV7pbvTUUxwHtQQe96NV8varu40dJHtr25SNW7nkdQfvvBy9X0aPvhBs0vh0elu0EqIZEeESnMwA3SS5hDtG2gRSSBMLKjrcoGOqUB6dbmr1ltZV3WBmD%2BWDjFDffhre160LI9gKfYIUcOARLg3RPPJgETT01arOY2f6Er%2FR2pHnVZpdUP5VQ2AaVX2g%2Fb1wF%2BevkQUy%2FRrW4h71%2FxQFSEaqs3m5G3oVZldye2j4OBF3zpf%2Fjj2Q1k9W3S7cH%2Bh5j5b0xHl6xThVPH%2FzCHefwkOJeTYjsLYHTbwRSAFKIIKYJN2qzWCzp1kNbMMARCUAck&X-Amz-Signature=96c22d32502cd5c8a928f1230ac8b493b267e34e57ba0f919f1025674c2c0079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLTEKBS%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCORxCbRYWEBnhk79%2F%2Ff1tGlgoYwbyW38Ln64XHFdGJPgIhAPtmdV7Q%2FDZYL%2FFoMoRdJuYhnXdHTYy9obwXkxAGcnYtKv8DCB0QABoMNjM3NDIzMTgzODA1IgyET8jh4jZPKLGRVwMq3ANiAyyiuT%2BRHyVR5evC71%2B5HVU0SqJwGvWJQr%2F66AFyQTzPZsk6g%2FzzvdvyzAV4gAGejhgTlElV5MNy2ftELa%2Bn1TvW3KUxibMdYSNmDJN0RVlSC5fj6uHhEZKXLAu6FUj2f9BRHLThDq4oaD9ySi63n%2BwYoefjK%2BJnz07j%2FZy0Bv4I27Jtt8RiJeKxW1BlNg%2BRJvEhATxB5hUWXuXCMfLL85ZWW8qHt87kqZGPG%2BX0A9Wj%2BHvMxMu4NMUZBbs0vwTKyT8NU8EWznovxnkTNnkwuHY1MLUKoKkpd9N6nJAEyY2a2EqFoStBXrehwpRtENeoiYjLm0MjtxrCceomFfS0GAc0XgepIQVNugRxySrWIiUtUa3BqttTsFGJGvyDPeGOT6GEqlKia6PIaTKpK7nN1FAyJ705jQWIPQdo%2FqWsss1evjx92xaIoX4x1RWQegMKpRwStj3JPImrqkmlHdKwl%2BcWQlpUfI3Bnl92O%2FotJwqSVKfXsmB49oBz3o%2FIUiWWmkY%2FnVmr971crGMlDwQOYxk6Srrd2TEoD4oKStjIi%2BiOUh2eYRUnddXHGsaiKe0BdHdwvWP2JiWT5gWJHMor4xJqJfB79w3f9mAOX2zLO3yS7t8WAiGxjanMmjDgy63KBjqkAWVLFhMjTJxhpaZKahBwbQAe4VOo7R5q92sQR2iRboh1FGF2hTSRF4oYcb9BMTDydTwE%2FSUo2%2FpV2AgNEqfEL3U1vdmDpx%2BWrGvhGIh07ssu4c6%2B70AvVdmKOCQZdb3CrtvLZ%2Bga7eg57eGBhnPe%2F0%2B9aAYKO2Pl%2BrZNkOYW4Ps1UWjo9yViG6AzsduKkgtSxq7Yb2wtF4Phg6Mq0Q4E1H4YtKXU&X-Amz-Signature=3d4c9bd16ce088f177008355df38e32262f2990d8b1ffb550333c598a65b40b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLTEKBS%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCORxCbRYWEBnhk79%2F%2Ff1tGlgoYwbyW38Ln64XHFdGJPgIhAPtmdV7Q%2FDZYL%2FFoMoRdJuYhnXdHTYy9obwXkxAGcnYtKv8DCB0QABoMNjM3NDIzMTgzODA1IgyET8jh4jZPKLGRVwMq3ANiAyyiuT%2BRHyVR5evC71%2B5HVU0SqJwGvWJQr%2F66AFyQTzPZsk6g%2FzzvdvyzAV4gAGejhgTlElV5MNy2ftELa%2Bn1TvW3KUxibMdYSNmDJN0RVlSC5fj6uHhEZKXLAu6FUj2f9BRHLThDq4oaD9ySi63n%2BwYoefjK%2BJnz07j%2FZy0Bv4I27Jtt8RiJeKxW1BlNg%2BRJvEhATxB5hUWXuXCMfLL85ZWW8qHt87kqZGPG%2BX0A9Wj%2BHvMxMu4NMUZBbs0vwTKyT8NU8EWznovxnkTNnkwuHY1MLUKoKkpd9N6nJAEyY2a2EqFoStBXrehwpRtENeoiYjLm0MjtxrCceomFfS0GAc0XgepIQVNugRxySrWIiUtUa3BqttTsFGJGvyDPeGOT6GEqlKia6PIaTKpK7nN1FAyJ705jQWIPQdo%2FqWsss1evjx92xaIoX4x1RWQegMKpRwStj3JPImrqkmlHdKwl%2BcWQlpUfI3Bnl92O%2FotJwqSVKfXsmB49oBz3o%2FIUiWWmkY%2FnVmr971crGMlDwQOYxk6Srrd2TEoD4oKStjIi%2BiOUh2eYRUnddXHGsaiKe0BdHdwvWP2JiWT5gWJHMor4xJqJfB79w3f9mAOX2zLO3yS7t8WAiGxjanMmjDgy63KBjqkAWVLFhMjTJxhpaZKahBwbQAe4VOo7R5q92sQR2iRboh1FGF2hTSRF4oYcb9BMTDydTwE%2FSUo2%2FpV2AgNEqfEL3U1vdmDpx%2BWrGvhGIh07ssu4c6%2B70AvVdmKOCQZdb3CrtvLZ%2Bga7eg57eGBhnPe%2F0%2B9aAYKO2Pl%2BrZNkOYW4Ps1UWjo9yViG6AzsduKkgtSxq7Yb2wtF4Phg6Mq0Q4E1H4YtKXU&X-Amz-Signature=9fe0330f763b85ae6ec9c2261cf52849b8018eea32339a201c5a65b812b72814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLTEKBS%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCORxCbRYWEBnhk79%2F%2Ff1tGlgoYwbyW38Ln64XHFdGJPgIhAPtmdV7Q%2FDZYL%2FFoMoRdJuYhnXdHTYy9obwXkxAGcnYtKv8DCB0QABoMNjM3NDIzMTgzODA1IgyET8jh4jZPKLGRVwMq3ANiAyyiuT%2BRHyVR5evC71%2B5HVU0SqJwGvWJQr%2F66AFyQTzPZsk6g%2FzzvdvyzAV4gAGejhgTlElV5MNy2ftELa%2Bn1TvW3KUxibMdYSNmDJN0RVlSC5fj6uHhEZKXLAu6FUj2f9BRHLThDq4oaD9ySi63n%2BwYoefjK%2BJnz07j%2FZy0Bv4I27Jtt8RiJeKxW1BlNg%2BRJvEhATxB5hUWXuXCMfLL85ZWW8qHt87kqZGPG%2BX0A9Wj%2BHvMxMu4NMUZBbs0vwTKyT8NU8EWznovxnkTNnkwuHY1MLUKoKkpd9N6nJAEyY2a2EqFoStBXrehwpRtENeoiYjLm0MjtxrCceomFfS0GAc0XgepIQVNugRxySrWIiUtUa3BqttTsFGJGvyDPeGOT6GEqlKia6PIaTKpK7nN1FAyJ705jQWIPQdo%2FqWsss1evjx92xaIoX4x1RWQegMKpRwStj3JPImrqkmlHdKwl%2BcWQlpUfI3Bnl92O%2FotJwqSVKfXsmB49oBz3o%2FIUiWWmkY%2FnVmr971crGMlDwQOYxk6Srrd2TEoD4oKStjIi%2BiOUh2eYRUnddXHGsaiKe0BdHdwvWP2JiWT5gWJHMor4xJqJfB79w3f9mAOX2zLO3yS7t8WAiGxjanMmjDgy63KBjqkAWVLFhMjTJxhpaZKahBwbQAe4VOo7R5q92sQR2iRboh1FGF2hTSRF4oYcb9BMTDydTwE%2FSUo2%2FpV2AgNEqfEL3U1vdmDpx%2BWrGvhGIh07ssu4c6%2B70AvVdmKOCQZdb3CrtvLZ%2Bga7eg57eGBhnPe%2F0%2B9aAYKO2Pl%2BrZNkOYW4Ps1UWjo9yViG6AzsduKkgtSxq7Yb2wtF4Phg6Mq0Q4E1H4YtKXU&X-Amz-Signature=c34ef00013ae254a0c2a0e05b86c4c4c400d8a1d836d0ab4a590d3e68120c7e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLTEKBS%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCORxCbRYWEBnhk79%2F%2Ff1tGlgoYwbyW38Ln64XHFdGJPgIhAPtmdV7Q%2FDZYL%2FFoMoRdJuYhnXdHTYy9obwXkxAGcnYtKv8DCB0QABoMNjM3NDIzMTgzODA1IgyET8jh4jZPKLGRVwMq3ANiAyyiuT%2BRHyVR5evC71%2B5HVU0SqJwGvWJQr%2F66AFyQTzPZsk6g%2FzzvdvyzAV4gAGejhgTlElV5MNy2ftELa%2Bn1TvW3KUxibMdYSNmDJN0RVlSC5fj6uHhEZKXLAu6FUj2f9BRHLThDq4oaD9ySi63n%2BwYoefjK%2BJnz07j%2FZy0Bv4I27Jtt8RiJeKxW1BlNg%2BRJvEhATxB5hUWXuXCMfLL85ZWW8qHt87kqZGPG%2BX0A9Wj%2BHvMxMu4NMUZBbs0vwTKyT8NU8EWznovxnkTNnkwuHY1MLUKoKkpd9N6nJAEyY2a2EqFoStBXrehwpRtENeoiYjLm0MjtxrCceomFfS0GAc0XgepIQVNugRxySrWIiUtUa3BqttTsFGJGvyDPeGOT6GEqlKia6PIaTKpK7nN1FAyJ705jQWIPQdo%2FqWsss1evjx92xaIoX4x1RWQegMKpRwStj3JPImrqkmlHdKwl%2BcWQlpUfI3Bnl92O%2FotJwqSVKfXsmB49oBz3o%2FIUiWWmkY%2FnVmr971crGMlDwQOYxk6Srrd2TEoD4oKStjIi%2BiOUh2eYRUnddXHGsaiKe0BdHdwvWP2JiWT5gWJHMor4xJqJfB79w3f9mAOX2zLO3yS7t8WAiGxjanMmjDgy63KBjqkAWVLFhMjTJxhpaZKahBwbQAe4VOo7R5q92sQR2iRboh1FGF2hTSRF4oYcb9BMTDydTwE%2FSUo2%2FpV2AgNEqfEL3U1vdmDpx%2BWrGvhGIh07ssu4c6%2B70AvVdmKOCQZdb3CrtvLZ%2Bga7eg57eGBhnPe%2F0%2B9aAYKO2Pl%2BrZNkOYW4Ps1UWjo9yViG6AzsduKkgtSxq7Yb2wtF4Phg6Mq0Q4E1H4YtKXU&X-Amz-Signature=df786bbe0fcafa6779ba4f03cf9857ca3380e246abece81cac10f54cd1205e5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLTEKBS%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCORxCbRYWEBnhk79%2F%2Ff1tGlgoYwbyW38Ln64XHFdGJPgIhAPtmdV7Q%2FDZYL%2FFoMoRdJuYhnXdHTYy9obwXkxAGcnYtKv8DCB0QABoMNjM3NDIzMTgzODA1IgyET8jh4jZPKLGRVwMq3ANiAyyiuT%2BRHyVR5evC71%2B5HVU0SqJwGvWJQr%2F66AFyQTzPZsk6g%2FzzvdvyzAV4gAGejhgTlElV5MNy2ftELa%2Bn1TvW3KUxibMdYSNmDJN0RVlSC5fj6uHhEZKXLAu6FUj2f9BRHLThDq4oaD9ySi63n%2BwYoefjK%2BJnz07j%2FZy0Bv4I27Jtt8RiJeKxW1BlNg%2BRJvEhATxB5hUWXuXCMfLL85ZWW8qHt87kqZGPG%2BX0A9Wj%2BHvMxMu4NMUZBbs0vwTKyT8NU8EWznovxnkTNnkwuHY1MLUKoKkpd9N6nJAEyY2a2EqFoStBXrehwpRtENeoiYjLm0MjtxrCceomFfS0GAc0XgepIQVNugRxySrWIiUtUa3BqttTsFGJGvyDPeGOT6GEqlKia6PIaTKpK7nN1FAyJ705jQWIPQdo%2FqWsss1evjx92xaIoX4x1RWQegMKpRwStj3JPImrqkmlHdKwl%2BcWQlpUfI3Bnl92O%2FotJwqSVKfXsmB49oBz3o%2FIUiWWmkY%2FnVmr971crGMlDwQOYxk6Srrd2TEoD4oKStjIi%2BiOUh2eYRUnddXHGsaiKe0BdHdwvWP2JiWT5gWJHMor4xJqJfB79w3f9mAOX2zLO3yS7t8WAiGxjanMmjDgy63KBjqkAWVLFhMjTJxhpaZKahBwbQAe4VOo7R5q92sQR2iRboh1FGF2hTSRF4oYcb9BMTDydTwE%2FSUo2%2FpV2AgNEqfEL3U1vdmDpx%2BWrGvhGIh07ssu4c6%2B70AvVdmKOCQZdb3CrtvLZ%2Bga7eg57eGBhnPe%2F0%2B9aAYKO2Pl%2BrZNkOYW4Ps1UWjo9yViG6AzsduKkgtSxq7Yb2wtF4Phg6Mq0Q4E1H4YtKXU&X-Amz-Signature=35542ef83a316477c8fc147061ff52b50d2087d79cbe92b0245e8fbe5ee8c3e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMMWCITZ%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIF6wNQD1P2aJ1HA54ilLe%2BrAnfmeZESet%2F2OnwrqM3wpAiBQYxWfW5X4I4S1O5zxBev6ISDGQdD3ZnLwprXSpJQY9yr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMg4C6q2YiSfV58W0HKtwDuFfxGOMfmy6%2BNxOEu6FfTZwAmqgNLZUChd5huBsOSMLwMkpzRChNAbYBWqnBFVqoe73uV%2Fe2txOuDV1pONSVhoFZVShSjcjcAaCv16o8wMEHNCxw6wTTSy3vTvmsYvfZvYrkE%2BgSgpZrsIXaMS8%2FNFMlxtJ5CrvrlYkT23MTTEk5QkwPX6V1zGLBRVxAJ4T9XQUPY2QLcL4S%2FqmbdWZ4687hVU%2BjWZiOLKLibsL%2BJg5Mb2tR8%2FnILJEapRzkRMmGPIjxR5I3%2FK0CeRuf6FoDUNP%2B1TfZAnI81Y39Ac0aGlTWP0pkk4JRlgOt%2BNncSqHq0ABpamsRnuzhIv47%2BTKpUw%2BU9jiyVl3KNmsYz7s1gglqUl9LxfUddROCQj9r969hLqg6M4isbvp3cOzlJumvhf0J4zB3L%2F3Aj45qnzJ9%2FeEvSFJE%2FMP2hRhNl4sfNRgkAu2fc4uzpuaOV2YSJFT4TU%2BBixlKa%2BVpgX%2F%2By509juZ30vq3U8y82y1GB01mvjwWsfOgi%2BN5%2Bbk4IX1%2BWO5mE8%2FhbNEQ189GbMTFRZhEr%2BvvLS717nf%2Fzi3y3N1LhQ97DlojtmlahUUJH0VsIvEIavpSHYwWzWwYMf6Ob6RXKWRvZRzfpltuDUpUtVcwtMutygY6pgH1sdCd5JatFRbttYrXY1qeHw7RamNBG2PQ4Oh7SXndPOFdM72J0d%2F4AqCTPLyamsJVYeTO1iHv7wi%2FyDmimWhOv8VrZlj0IDYZbe2OIGY4VQ6doo4Dyg0EnW5rNxf70lcDKlwTkiQhpjnKm2XGUQ0wHZih2rlRmzrZFQ%2BcfHuznw0zeRePJbqO0V9QZziucw1cT7BzwuKDZt6yMtnBGWXtdBeDpedD&X-Amz-Signature=4056971367399223baeec00bdeccd44c2f2848abc82142636aeb96aa38075cf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMMWCITZ%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIF6wNQD1P2aJ1HA54ilLe%2BrAnfmeZESet%2F2OnwrqM3wpAiBQYxWfW5X4I4S1O5zxBev6ISDGQdD3ZnLwprXSpJQY9yr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMg4C6q2YiSfV58W0HKtwDuFfxGOMfmy6%2BNxOEu6FfTZwAmqgNLZUChd5huBsOSMLwMkpzRChNAbYBWqnBFVqoe73uV%2Fe2txOuDV1pONSVhoFZVShSjcjcAaCv16o8wMEHNCxw6wTTSy3vTvmsYvfZvYrkE%2BgSgpZrsIXaMS8%2FNFMlxtJ5CrvrlYkT23MTTEk5QkwPX6V1zGLBRVxAJ4T9XQUPY2QLcL4S%2FqmbdWZ4687hVU%2BjWZiOLKLibsL%2BJg5Mb2tR8%2FnILJEapRzkRMmGPIjxR5I3%2FK0CeRuf6FoDUNP%2B1TfZAnI81Y39Ac0aGlTWP0pkk4JRlgOt%2BNncSqHq0ABpamsRnuzhIv47%2BTKpUw%2BU9jiyVl3KNmsYz7s1gglqUl9LxfUddROCQj9r969hLqg6M4isbvp3cOzlJumvhf0J4zB3L%2F3Aj45qnzJ9%2FeEvSFJE%2FMP2hRhNl4sfNRgkAu2fc4uzpuaOV2YSJFT4TU%2BBixlKa%2BVpgX%2F%2By509juZ30vq3U8y82y1GB01mvjwWsfOgi%2BN5%2Bbk4IX1%2BWO5mE8%2FhbNEQ189GbMTFRZhEr%2BvvLS717nf%2Fzi3y3N1LhQ97DlojtmlahUUJH0VsIvEIavpSHYwWzWwYMf6Ob6RXKWRvZRzfpltuDUpUtVcwtMutygY6pgH1sdCd5JatFRbttYrXY1qeHw7RamNBG2PQ4Oh7SXndPOFdM72J0d%2F4AqCTPLyamsJVYeTO1iHv7wi%2FyDmimWhOv8VrZlj0IDYZbe2OIGY4VQ6doo4Dyg0EnW5rNxf70lcDKlwTkiQhpjnKm2XGUQ0wHZih2rlRmzrZFQ%2BcfHuznw0zeRePJbqO0V9QZziucw1cT7BzwuKDZt6yMtnBGWXtdBeDpedD&X-Amz-Signature=f4ff6cbb4a5188118c8b1284afae665183e208dfa04ae05782c47384fe57f1ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMMWCITZ%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIF6wNQD1P2aJ1HA54ilLe%2BrAnfmeZESet%2F2OnwrqM3wpAiBQYxWfW5X4I4S1O5zxBev6ISDGQdD3ZnLwprXSpJQY9yr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMg4C6q2YiSfV58W0HKtwDuFfxGOMfmy6%2BNxOEu6FfTZwAmqgNLZUChd5huBsOSMLwMkpzRChNAbYBWqnBFVqoe73uV%2Fe2txOuDV1pONSVhoFZVShSjcjcAaCv16o8wMEHNCxw6wTTSy3vTvmsYvfZvYrkE%2BgSgpZrsIXaMS8%2FNFMlxtJ5CrvrlYkT23MTTEk5QkwPX6V1zGLBRVxAJ4T9XQUPY2QLcL4S%2FqmbdWZ4687hVU%2BjWZiOLKLibsL%2BJg5Mb2tR8%2FnILJEapRzkRMmGPIjxR5I3%2FK0CeRuf6FoDUNP%2B1TfZAnI81Y39Ac0aGlTWP0pkk4JRlgOt%2BNncSqHq0ABpamsRnuzhIv47%2BTKpUw%2BU9jiyVl3KNmsYz7s1gglqUl9LxfUddROCQj9r969hLqg6M4isbvp3cOzlJumvhf0J4zB3L%2F3Aj45qnzJ9%2FeEvSFJE%2FMP2hRhNl4sfNRgkAu2fc4uzpuaOV2YSJFT4TU%2BBixlKa%2BVpgX%2F%2By509juZ30vq3U8y82y1GB01mvjwWsfOgi%2BN5%2Bbk4IX1%2BWO5mE8%2FhbNEQ189GbMTFRZhEr%2BvvLS717nf%2Fzi3y3N1LhQ97DlojtmlahUUJH0VsIvEIavpSHYwWzWwYMf6Ob6RXKWRvZRzfpltuDUpUtVcwtMutygY6pgH1sdCd5JatFRbttYrXY1qeHw7RamNBG2PQ4Oh7SXndPOFdM72J0d%2F4AqCTPLyamsJVYeTO1iHv7wi%2FyDmimWhOv8VrZlj0IDYZbe2OIGY4VQ6doo4Dyg0EnW5rNxf70lcDKlwTkiQhpjnKm2XGUQ0wHZih2rlRmzrZFQ%2BcfHuznw0zeRePJbqO0V9QZziucw1cT7BzwuKDZt6yMtnBGWXtdBeDpedD&X-Amz-Signature=5a2693295c5c14615b1e610208dc2d96c1f35ae0dc8935e2a83fd57bfe7764c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6VPSLM%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDVv19CBXTOCljIdrBK91LCRFfu%2B%2F9aMdGT5H3GwnfcigIgKpCu5M%2FFYeZThU4B%2FKjsHX7Z1QDzg9ltBqfeVwga14sq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDJUrxnuc1cLz1jwTuyrcAwZNYsO35%2FukMCxvIWUtqooGrBHCgIqNQQmOGMUQfFvqZZ%2BgOsUvwP2u4roLG0mZ%2B7UFtZyjyPCl6Ai8yVTG0hrHKb8w%2BoCNyMA4VE0QpylpKOuYFrZVt4EpcaWxNmP34d7FHL7bJtWkYFLsOifNjawLoeNLbrtxUCho7DH9hK%2FZLs9Ps0a6yQx6clEtUONEVaVElPeUGRi4aPQlOLe3uVG2w%2BSYx0EfO%2FZwh6XI3Ps%2Fkmofo16NTIrZE4PT3PBYG%2BL9OYL5ZfShUR8iv8ojDMO6gxZWcQpiLR247FpcJU60LAf1Mx5cXDHmWEeq1%2BUntvyS2EMp%2BAFalkZe02f7RISQEn4oQVg64JKGXpxZOrWupz2Cc4I2PHqnAtqRClPHk2IBHRVObxX8wMOZwA59DLBUs2WvRUymizdrcu7c7V5E9SN9PlbpBo6d1dotPHuOujCtHvys0270DK45Rdy1hCh1t6lfk2dpLqO1jXolWaN5%2BV3j5nABBEuDNlVrOpkpFv4OVx8duzNFnWvv72KHK7IZ42Fl4wrRngM7QG47yB2EdGM6bR57joS5MNtUzNr%2FN6Q5BjF13UnnPecE3wpccGIm7%2FXRqQ9OVXG66QqiY8T8Fdhnuz47qpp%2FO409MKTLrcoGOqUBkTDu4knTt0Ijwd2RumsfzBk9GhQWGcvYLc8G4dfdNCuKTBblKRmKIDCcopVXqpBzrjejpBR0ecMAAYeNwESed6p56mSrQSlmALnZ80uJNIJgVYPzP3ifPprp6I%2FhJr4mu3NtDbMSyxHtACGg8i0cRuqQAEKosfsLwtnVePvheFnTc8XQWufjOewt0Nz6meN5v6D6BR%2B2D%2BQC13M1FEmXXMjG4mRp&X-Amz-Signature=449c55ea79097d5fc778b4e6cf6734cb7e284284f66fe94beaeab258d15aac16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6VPSLM%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDVv19CBXTOCljIdrBK91LCRFfu%2B%2F9aMdGT5H3GwnfcigIgKpCu5M%2FFYeZThU4B%2FKjsHX7Z1QDzg9ltBqfeVwga14sq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDJUrxnuc1cLz1jwTuyrcAwZNYsO35%2FukMCxvIWUtqooGrBHCgIqNQQmOGMUQfFvqZZ%2BgOsUvwP2u4roLG0mZ%2B7UFtZyjyPCl6Ai8yVTG0hrHKb8w%2BoCNyMA4VE0QpylpKOuYFrZVt4EpcaWxNmP34d7FHL7bJtWkYFLsOifNjawLoeNLbrtxUCho7DH9hK%2FZLs9Ps0a6yQx6clEtUONEVaVElPeUGRi4aPQlOLe3uVG2w%2BSYx0EfO%2FZwh6XI3Ps%2Fkmofo16NTIrZE4PT3PBYG%2BL9OYL5ZfShUR8iv8ojDMO6gxZWcQpiLR247FpcJU60LAf1Mx5cXDHmWEeq1%2BUntvyS2EMp%2BAFalkZe02f7RISQEn4oQVg64JKGXpxZOrWupz2Cc4I2PHqnAtqRClPHk2IBHRVObxX8wMOZwA59DLBUs2WvRUymizdrcu7c7V5E9SN9PlbpBo6d1dotPHuOujCtHvys0270DK45Rdy1hCh1t6lfk2dpLqO1jXolWaN5%2BV3j5nABBEuDNlVrOpkpFv4OVx8duzNFnWvv72KHK7IZ42Fl4wrRngM7QG47yB2EdGM6bR57joS5MNtUzNr%2FN6Q5BjF13UnnPecE3wpccGIm7%2FXRqQ9OVXG66QqiY8T8Fdhnuz47qpp%2FO409MKTLrcoGOqUBkTDu4knTt0Ijwd2RumsfzBk9GhQWGcvYLc8G4dfdNCuKTBblKRmKIDCcopVXqpBzrjejpBR0ecMAAYeNwESed6p56mSrQSlmALnZ80uJNIJgVYPzP3ifPprp6I%2FhJr4mu3NtDbMSyxHtACGg8i0cRuqQAEKosfsLwtnVePvheFnTc8XQWufjOewt0Nz6meN5v6D6BR%2B2D%2BQC13M1FEmXXMjG4mRp&X-Amz-Signature=2a7fec0d28e9fffc93fbbe35d68876289c37dda60f947d3b8f62b8452e57d9da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH26BMF2%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICU%2FC7fIcUVVowYnyqCYwkTAGDKitc90jotz8CEDzh79AiAtJD4bfD0tKc73FqgoitfXbRphryf79UcsIzMmRHDhkyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMDs3O6CG1VT0fpsYVKtwDQGQwRe%2FwRQ7F4RAhlFllqOl22y%2BPlCdwS3JSUe8Db9TMZm4rGzYqp9FeetLKbShPJJVTp%2BlmEjjonbdTAf9WhZS%2Bp%2BU5oAy6oINA8XiQp2VIACIKK9q7IETlLoF4VDFM8ckq9ZjYvKFT1Ki7m483zDmDedpG%2F0jBXwoSAOQPX6HsrA%2B7%2BIlfccCrQ0PslytW8qH6rPiaxiw3lJNuEha%2FdtyaW8yGsbKGeCFF%2BbeYyDswMmywfgXzuZ%2FhobmpBUlWXNfBjDZmvdstqCZWKdTBN6Zk%2Fz94f9GNXo%2BNQarjjrA%2FXQWbGu7L5frw85vaQlLnF0Opp7%2Bw9cLXUnffaPmmB1MzugD7x3RATOuwadVwmJB1iirpEMZQ%2F%2BY0Hkl2y2pbbiSC9S9E6%2FXqrVVLY4UJviKJs8RR2s7VQwShTjlSCThp4ZqnMVGcQfIdzBt%2BN9XPABxij9d42e%2Fhhk0zA2m%2FQXqteUwLuGmQHGDYgdwR%2FZAvC6szsKTwUwS8io0d7cq6u3Sh%2BakMTuv12N0Rh05x%2BhkbF0g8%2BhPdY96xcKB9hAJRgO5axuaX8AsDfZRqEwpKcZ4npHKAD7gjXXzNcGQCN11nJvdQKMwR3g%2F55DrTsZA3mVj3iyYPriE%2FqUEwvMutygY6pgHBC1IoIaNxTJOh5ATqNlW058s4ix9%2BOBpLyPtFDdvmvuU5HJgDOFylpOWN71wnWbwIXX%2FkSbRwq1qJF9NRnY3AjOlVsQkoUzflRrv2LUnT7MFZ0%2BAZYtfUpIb8i1yDl97Dob03e9MGKNq8WVNO0wBbjhNP61lrAhbF8SxjcSxALTJ9H8KeoKmZyDPBtu%2Bd7HpU%2Bx1XowGumY2XfXR2CpTlEj4xhrk2&X-Amz-Signature=3d2b4c7d749b3b8888410f39a7a681c136d817bb9c1c6320d3f7bca09f057a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH26BMF2%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICU%2FC7fIcUVVowYnyqCYwkTAGDKitc90jotz8CEDzh79AiAtJD4bfD0tKc73FqgoitfXbRphryf79UcsIzMmRHDhkyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMDs3O6CG1VT0fpsYVKtwDQGQwRe%2FwRQ7F4RAhlFllqOl22y%2BPlCdwS3JSUe8Db9TMZm4rGzYqp9FeetLKbShPJJVTp%2BlmEjjonbdTAf9WhZS%2Bp%2BU5oAy6oINA8XiQp2VIACIKK9q7IETlLoF4VDFM8ckq9ZjYvKFT1Ki7m483zDmDedpG%2F0jBXwoSAOQPX6HsrA%2B7%2BIlfccCrQ0PslytW8qH6rPiaxiw3lJNuEha%2FdtyaW8yGsbKGeCFF%2BbeYyDswMmywfgXzuZ%2FhobmpBUlWXNfBjDZmvdstqCZWKdTBN6Zk%2Fz94f9GNXo%2BNQarjjrA%2FXQWbGu7L5frw85vaQlLnF0Opp7%2Bw9cLXUnffaPmmB1MzugD7x3RATOuwadVwmJB1iirpEMZQ%2F%2BY0Hkl2y2pbbiSC9S9E6%2FXqrVVLY4UJviKJs8RR2s7VQwShTjlSCThp4ZqnMVGcQfIdzBt%2BN9XPABxij9d42e%2Fhhk0zA2m%2FQXqteUwLuGmQHGDYgdwR%2FZAvC6szsKTwUwS8io0d7cq6u3Sh%2BakMTuv12N0Rh05x%2BhkbF0g8%2BhPdY96xcKB9hAJRgO5axuaX8AsDfZRqEwpKcZ4npHKAD7gjXXzNcGQCN11nJvdQKMwR3g%2F55DrTsZA3mVj3iyYPriE%2FqUEwvMutygY6pgHBC1IoIaNxTJOh5ATqNlW058s4ix9%2BOBpLyPtFDdvmvuU5HJgDOFylpOWN71wnWbwIXX%2FkSbRwq1qJF9NRnY3AjOlVsQkoUzflRrv2LUnT7MFZ0%2BAZYtfUpIb8i1yDl97Dob03e9MGKNq8WVNO0wBbjhNP61lrAhbF8SxjcSxALTJ9H8KeoKmZyDPBtu%2Bd7HpU%2Bx1XowGumY2XfXR2CpTlEj4xhrk2&X-Amz-Signature=f7c9e235cb5129e82dc347f74b2c31bdd9528d4406c0b9c35c2cd9b6f6b63600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH26BMF2%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICU%2FC7fIcUVVowYnyqCYwkTAGDKitc90jotz8CEDzh79AiAtJD4bfD0tKc73FqgoitfXbRphryf79UcsIzMmRHDhkyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMDs3O6CG1VT0fpsYVKtwDQGQwRe%2FwRQ7F4RAhlFllqOl22y%2BPlCdwS3JSUe8Db9TMZm4rGzYqp9FeetLKbShPJJVTp%2BlmEjjonbdTAf9WhZS%2Bp%2BU5oAy6oINA8XiQp2VIACIKK9q7IETlLoF4VDFM8ckq9ZjYvKFT1Ki7m483zDmDedpG%2F0jBXwoSAOQPX6HsrA%2B7%2BIlfccCrQ0PslytW8qH6rPiaxiw3lJNuEha%2FdtyaW8yGsbKGeCFF%2BbeYyDswMmywfgXzuZ%2FhobmpBUlWXNfBjDZmvdstqCZWKdTBN6Zk%2Fz94f9GNXo%2BNQarjjrA%2FXQWbGu7L5frw85vaQlLnF0Opp7%2Bw9cLXUnffaPmmB1MzugD7x3RATOuwadVwmJB1iirpEMZQ%2F%2BY0Hkl2y2pbbiSC9S9E6%2FXqrVVLY4UJviKJs8RR2s7VQwShTjlSCThp4ZqnMVGcQfIdzBt%2BN9XPABxij9d42e%2Fhhk0zA2m%2FQXqteUwLuGmQHGDYgdwR%2FZAvC6szsKTwUwS8io0d7cq6u3Sh%2BakMTuv12N0Rh05x%2BhkbF0g8%2BhPdY96xcKB9hAJRgO5axuaX8AsDfZRqEwpKcZ4npHKAD7gjXXzNcGQCN11nJvdQKMwR3g%2F55DrTsZA3mVj3iyYPriE%2FqUEwvMutygY6pgHBC1IoIaNxTJOh5ATqNlW058s4ix9%2BOBpLyPtFDdvmvuU5HJgDOFylpOWN71wnWbwIXX%2FkSbRwq1qJF9NRnY3AjOlVsQkoUzflRrv2LUnT7MFZ0%2BAZYtfUpIb8i1yDl97Dob03e9MGKNq8WVNO0wBbjhNP61lrAhbF8SxjcSxALTJ9H8KeoKmZyDPBtu%2Bd7HpU%2Bx1XowGumY2XfXR2CpTlEj4xhrk2&X-Amz-Signature=1c111dd785218bbf7dae572ef7d9dba4c7d22e6a75c0cc4fa3d9c2fdd1169a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH26BMF2%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICU%2FC7fIcUVVowYnyqCYwkTAGDKitc90jotz8CEDzh79AiAtJD4bfD0tKc73FqgoitfXbRphryf79UcsIzMmRHDhkyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMDs3O6CG1VT0fpsYVKtwDQGQwRe%2FwRQ7F4RAhlFllqOl22y%2BPlCdwS3JSUe8Db9TMZm4rGzYqp9FeetLKbShPJJVTp%2BlmEjjonbdTAf9WhZS%2Bp%2BU5oAy6oINA8XiQp2VIACIKK9q7IETlLoF4VDFM8ckq9ZjYvKFT1Ki7m483zDmDedpG%2F0jBXwoSAOQPX6HsrA%2B7%2BIlfccCrQ0PslytW8qH6rPiaxiw3lJNuEha%2FdtyaW8yGsbKGeCFF%2BbeYyDswMmywfgXzuZ%2FhobmpBUlWXNfBjDZmvdstqCZWKdTBN6Zk%2Fz94f9GNXo%2BNQarjjrA%2FXQWbGu7L5frw85vaQlLnF0Opp7%2Bw9cLXUnffaPmmB1MzugD7x3RATOuwadVwmJB1iirpEMZQ%2F%2BY0Hkl2y2pbbiSC9S9E6%2FXqrVVLY4UJviKJs8RR2s7VQwShTjlSCThp4ZqnMVGcQfIdzBt%2BN9XPABxij9d42e%2Fhhk0zA2m%2FQXqteUwLuGmQHGDYgdwR%2FZAvC6szsKTwUwS8io0d7cq6u3Sh%2BakMTuv12N0Rh05x%2BhkbF0g8%2BhPdY96xcKB9hAJRgO5axuaX8AsDfZRqEwpKcZ4npHKAD7gjXXzNcGQCN11nJvdQKMwR3g%2F55DrTsZA3mVj3iyYPriE%2FqUEwvMutygY6pgHBC1IoIaNxTJOh5ATqNlW058s4ix9%2BOBpLyPtFDdvmvuU5HJgDOFylpOWN71wnWbwIXX%2FkSbRwq1qJF9NRnY3AjOlVsQkoUzflRrv2LUnT7MFZ0%2BAZYtfUpIb8i1yDl97Dob03e9MGKNq8WVNO0wBbjhNP61lrAhbF8SxjcSxALTJ9H8KeoKmZyDPBtu%2Bd7HpU%2Bx1XowGumY2XfXR2CpTlEj4xhrk2&X-Amz-Signature=872fbf172798a7663b586ebd207b14866ab494d459903ba703396498aaa6644f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH26BMF2%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICU%2FC7fIcUVVowYnyqCYwkTAGDKitc90jotz8CEDzh79AiAtJD4bfD0tKc73FqgoitfXbRphryf79UcsIzMmRHDhkyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMDs3O6CG1VT0fpsYVKtwDQGQwRe%2FwRQ7F4RAhlFllqOl22y%2BPlCdwS3JSUe8Db9TMZm4rGzYqp9FeetLKbShPJJVTp%2BlmEjjonbdTAf9WhZS%2Bp%2BU5oAy6oINA8XiQp2VIACIKK9q7IETlLoF4VDFM8ckq9ZjYvKFT1Ki7m483zDmDedpG%2F0jBXwoSAOQPX6HsrA%2B7%2BIlfccCrQ0PslytW8qH6rPiaxiw3lJNuEha%2FdtyaW8yGsbKGeCFF%2BbeYyDswMmywfgXzuZ%2FhobmpBUlWXNfBjDZmvdstqCZWKdTBN6Zk%2Fz94f9GNXo%2BNQarjjrA%2FXQWbGu7L5frw85vaQlLnF0Opp7%2Bw9cLXUnffaPmmB1MzugD7x3RATOuwadVwmJB1iirpEMZQ%2F%2BY0Hkl2y2pbbiSC9S9E6%2FXqrVVLY4UJviKJs8RR2s7VQwShTjlSCThp4ZqnMVGcQfIdzBt%2BN9XPABxij9d42e%2Fhhk0zA2m%2FQXqteUwLuGmQHGDYgdwR%2FZAvC6szsKTwUwS8io0d7cq6u3Sh%2BakMTuv12N0Rh05x%2BhkbF0g8%2BhPdY96xcKB9hAJRgO5axuaX8AsDfZRqEwpKcZ4npHKAD7gjXXzNcGQCN11nJvdQKMwR3g%2F55DrTsZA3mVj3iyYPriE%2FqUEwvMutygY6pgHBC1IoIaNxTJOh5ATqNlW058s4ix9%2BOBpLyPtFDdvmvuU5HJgDOFylpOWN71wnWbwIXX%2FkSbRwq1qJF9NRnY3AjOlVsQkoUzflRrv2LUnT7MFZ0%2BAZYtfUpIb8i1yDl97Dob03e9MGKNq8WVNO0wBbjhNP61lrAhbF8SxjcSxALTJ9H8KeoKmZyDPBtu%2Bd7HpU%2Bx1XowGumY2XfXR2CpTlEj4xhrk2&X-Amz-Signature=81659997c90002e32f99c222ba037fa739f107c9cb2e2a8066d4b0b99fa1ff7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQWZVIOD%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T040537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDXax3NU5WEu4IYE9krAdBvhWdisya60WKVhjVsMTv3igIhAOB2C6DggWV7F6BsA1sKmFXymAFDJYhACL68tZtpyVN3Kv8DCB0QABoMNjM3NDIzMTgzODA1IgyiPe%2Fl6NfYXaE1w1oq3APq%2Bj90lfPGlaiW3fGejayfzAaHWuv0oIPpoatarMSc62JGn0BJKe96X4p4VVKfBxU02Qjn8fw0VxysUlPmbN3c8rdW%2BOi4Hn7ojOkyV4t3rrJer%2BfIAlbABD24Rs1m2VpYKWg9VsK2lf9h7aCg28%2Fm2pxzSpPx2roC3njoukYHIh7SexbHHtW4dRia419YVyi1Uao3q7nEBSCUCpQ7crltLNC5f%2Baer98kWah39RdPdjwih%2BpmfWvW94Kj7L0Dz9hL2qq0tdSVmb56go6GXzj7lSiEPfSnovZanq20e%2BnuywjhijupBrU21HTHJWybfwEE3UVMfnyZdgK%2BLSg%2Bz8lPQCAacSfUnOIczgKdDk2RHOpMIqvVydsyqFTKhj32zTfpM00ss5Rgg1mgkYXkhCSct3hdiwgxoUZSNz9FTRy6OzeDy0cDBTISWxJRZGLHmnBXFgadvRpAkNG05hwvkNXHPQIaP%2Ft4dWXbLDAanFoKdjbl7HHSesZffrFwrIuLC2LzeL741MFCla4dr8IFVi4kPVXrWbmNDyzwMRh7bgcsQ4tyGxyk8Da8IuuLJXVgEeYa1zke6O1AYJazzIsBa2VYhQPTfeHKV0ZRDAPm6TgMf%2BzjWgTzyyVTiSKdUzCfzK3KBjqkAYr%2BdLg%2BeHe900xxm1OtRWfdJ0ZADpXApvWW6ZJsJlY7c4VCLYTQrUP2tAny5HyeoXz%2BsjZBdXDU1wS4VuRAFkLHGratU2vhzDKLEdhOsBAbSTDOVHQqAils8J6dRssJY7H6QIU8PmmVhCRqkdBPLjfvclcIDy%2BdfSXW5Kj4AIZ1PAE5PhyYsBHvroREkKOrf5LYN6ygQOWcnZxbPY%2FKgGuZG9zD&X-Amz-Signature=535eff453860971dbc340de7ed504bfea93b5ecb78803fea7fa618a03d8471a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

