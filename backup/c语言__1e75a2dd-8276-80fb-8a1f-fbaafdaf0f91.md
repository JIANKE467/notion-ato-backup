
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664MATGD7%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBNo36kpgUa5PsEHAFry5ncHTpE6P%2BIgPtRX433uTVDgIhAIVvJ2dTLOdQiivjjH6oppa0g5zumaEwXzfdE9nwVj3nKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGPrqdzbN%2FARh2ieoq3AOn9rLNePEORDwJkO6lq8S4zUslwpWT5PgSdrUu17yi6IT8Iq1a8dwrmiQ1aZLyADyNh5DYYmN9FXDPqffZWMIw0BGI2KSrG2fDVV8qNlYAUfwK1tH47OWyOlPOwA1%2BqP%2F4LQfyPsSWi81sPRfltwd%2BNEUDTsMdNWjnwB62K0%2Bs%2B2OEjs1anErg08yjAVairoAiKNtBd%2BLZOVl7Do4jFb18emf6E1m4KfTp1NL0Zm3QC%2Fm7dD6BbgWrcyX4x5Pc6M2KHV446A1R9%2FnK4KS%2Bd5HSmyFzlPlNUBNWs1hTfUgpdtUb7M%2B%2FK0BQjiI3b6tU3OTxykcS5oXPsnXKx4tjKLx8NzIEM6gNAkQKCqHKK4duVaTin0oBBb1y4MX0akSRSu0y%2BV6MhVvKnXsWJZzHoyVq2bN7Hs11SRKyatrKMO7bLIc7aPPF9FMO%2BgarHYPAZJDJ4zdR7QcY05EtuWtiRMd%2BPaOiKltfCmQfqLaAqfDyTihMTci0h4Tbnr46pJWXtAhi8HxfbgMLJyqrKuF13juzB39l8j%2FmzWVWbYaGK63u%2FZE27ytu2b5jAw%2FPGG%2F9tcFWmJRsfKa8kekGYu1IeSDU6pqUMfAKVDKkkKEyrFAQkg65Ltj1mlRWcVV31jDJyszKBjqkASeRzhjqrH9lFRZvvznMY9c1aKykIxTUPDcyoH79b5ZOZ7N26VoiLpcB9Yx8Hrp2bpCgjS5GO2kAY7qr80wQ%2BWGNeAAA8sNKvbJC%2FXWK9rIp9RKiful82u0CL8DZ24iekVYTTnsJMzuLiQgy5xOJBawzelOV0%2B7pOqjO2h8Iljd6JRzkFWDnFvNmFShukFpbIzDWebdVTEeczGfWsgHFErcxwxLs&X-Amz-Signature=987f740a242cb182e09325e0fcb2ec5135b25c6e64e173c0cfa67ab383136192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W74XHFXU%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHY7fhyjR5sUE9wNyRJ3qWlzjsJNsoKgULzLgdojaIkQAiB4A5nzrgQm3ZOzD6EZcgQn1uij5cmBlM%2F8BUcwgJ%2FQoyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM83rkAEXcsVOnIkE%2BKtwDLJ%2F4O0lWXJ88JHZrfihYxV4MQodFFW0qc8k4gNUCaQ%2FvOiBmTiGuS9khIRC%2BkS6XCGxZpfCz81xn24qVIahTsF%2BOxlzp8iltkQIFU5%2BKow99ylaaCflv%2BRZLuQeEYxlq3X9UK7sHFLg8VMV4Pt9kVe1bZUNRnkCHGwpdmahQuvJRrr11tkNQeROuodFLTDOTvxTQfPpUxSesmflah9rMOCf5iTloMt%2BjuZp2cmU6YcqLdk10AJluap8y%2FBQuPh%2BrxdaZsPD7Kf1Ad1SR%2FSFkmEHhRMcdV5LM8oqdx6GbYW7%2BOt%2BZPbLcO8KvXxH20jnIukAL1xSbWSRC4OqcYvQyW3oeD6pSsk%2B%2FzS3jFkySUWvIdjwHJZOs4jvrBu%2B5cbO0w65D8QLPIM8SU33au9aIWXq4HWSt9Fx%2FXFaTMCk%2FQycorIA9q2ex22Y%2F0DE9hlv62WUIouV4byutoGB9L7Y2XtnLPIbDb%2FzB%2BtvxBQzR0XXznHmQi9ku%2FlWvWADPijJnL1C1xBdOlv%2Bmp7RJkPJ4ZSnCzg6LonAOcdbynqyGaVPGLgN5ToN8WYocQCJyR8UMQzMalfCa4KSZ0PZgHKumiy6x7hUv66ZQV%2BkiohHdk6GOIFBJ86LmI3gCQsUw78XMygY6pgEUH2lWcYYiS4%2FdTO4sUnI%2FqTi3%2B5XMfIIitsaVXgkJxs%2BvOPY8byrjwYpU2ydIKXhPOQQwtx5QcTr9Tj0su9CUBE9ovjX63W1ITZ1qMwKVlfMDm3mTgaS71bYDn%2B3yx3%2FAotaDwzgc%2Bgb0Z4GTRDfk4e4Gq0FT%2FKFz3b8vNDZetTpTNcJBy9gCQCUU8wn2voaMICQuhSMNVSt2YkDVgvHNdWabuAcG&X-Amz-Signature=59e3a841f7c541f5ffab1f4d4a6e336a4344dd92769232dc97ee91f898df3b55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W74XHFXU%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHY7fhyjR5sUE9wNyRJ3qWlzjsJNsoKgULzLgdojaIkQAiB4A5nzrgQm3ZOzD6EZcgQn1uij5cmBlM%2F8BUcwgJ%2FQoyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM83rkAEXcsVOnIkE%2BKtwDLJ%2F4O0lWXJ88JHZrfihYxV4MQodFFW0qc8k4gNUCaQ%2FvOiBmTiGuS9khIRC%2BkS6XCGxZpfCz81xn24qVIahTsF%2BOxlzp8iltkQIFU5%2BKow99ylaaCflv%2BRZLuQeEYxlq3X9UK7sHFLg8VMV4Pt9kVe1bZUNRnkCHGwpdmahQuvJRrr11tkNQeROuodFLTDOTvxTQfPpUxSesmflah9rMOCf5iTloMt%2BjuZp2cmU6YcqLdk10AJluap8y%2FBQuPh%2BrxdaZsPD7Kf1Ad1SR%2FSFkmEHhRMcdV5LM8oqdx6GbYW7%2BOt%2BZPbLcO8KvXxH20jnIukAL1xSbWSRC4OqcYvQyW3oeD6pSsk%2B%2FzS3jFkySUWvIdjwHJZOs4jvrBu%2B5cbO0w65D8QLPIM8SU33au9aIWXq4HWSt9Fx%2FXFaTMCk%2FQycorIA9q2ex22Y%2F0DE9hlv62WUIouV4byutoGB9L7Y2XtnLPIbDb%2FzB%2BtvxBQzR0XXznHmQi9ku%2FlWvWADPijJnL1C1xBdOlv%2Bmp7RJkPJ4ZSnCzg6LonAOcdbynqyGaVPGLgN5ToN8WYocQCJyR8UMQzMalfCa4KSZ0PZgHKumiy6x7hUv66ZQV%2BkiohHdk6GOIFBJ86LmI3gCQsUw78XMygY6pgEUH2lWcYYiS4%2FdTO4sUnI%2FqTi3%2B5XMfIIitsaVXgkJxs%2BvOPY8byrjwYpU2ydIKXhPOQQwtx5QcTr9Tj0su9CUBE9ovjX63W1ITZ1qMwKVlfMDm3mTgaS71bYDn%2B3yx3%2FAotaDwzgc%2Bgb0Z4GTRDfk4e4Gq0FT%2FKFz3b8vNDZetTpTNcJBy9gCQCUU8wn2voaMICQuhSMNVSt2YkDVgvHNdWabuAcG&X-Amz-Signature=cb4706f9a67a3c104cf417c8b10a2879800d4398beb7575d6173a62f67016b73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q7OPGSU%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfRCThgd%2FOjD6MiBQCWrfwF8ggX7GHc6D%2FagIuvz0DmAiEA8ELr1wttKDXg0sMLnvHJOoC9wBeRnUdKtJ9begkdv10qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGyxgDPjAp%2BPWPDxSrcA%2BW3pf0qTUd60qBA%2F1t4m4JXfKpgk2p5rlyA78%2BvJOJwSIT1xZ4WFYQbXxqcOUYZVGqaEZEadY3i8VQHftOlXB4c%2FIU78y4HR0SVwBsdOqrJUVnEno0S%2B0UZMfLJUnlWxS%2F66WnCVtYokyL1Q8VkwtI5W%2BnLu5fylccNicinUfPIsVfaAKw4amsLcrX%2FkVTbqe34tmwZclYKhldCKre%2BNSXBtrqmXH6fvyy%2Bx4V6t6CpviFLcDBGZRpnqX8Kx1DMnCIec7mXIf8SyRqMqQ0SnfrocIB0nu4zqSxkzuEl1RzqFHe3Gfe9ZeoQQSXwY%2By4SVSnDOzNjD%2BzNH7HSnISjHQuOA6WsAU9e8rISl7M00g79h3%2F2aOesPx571YNK9CeY64lJLWM5Xh0R10PQ5byVcOKE7lFz81BT0K3kJLF5nE70dJEHJ0iw9Xy5kGPcb0JNUSbtWE24kch3JmoIS%2FxbQx%2FzcAgmG6uvQ2L1HgCXotVPeTlz3A65IVgNDsJ9wIx6sGiDdX6mNTJnY7%2F31AfjmF9vB5IMNR%2BqhhhUJti1YTm7%2FE5T9rh%2BoIsiCBIc30YT8QyfG%2Bt5Cix4msgedPThXqvNZMjeJtG0CpT%2BG5UCEIU5Lv%2FmqGQRL5M%2FoHDMK3HzMoGOqUBbiRLMeoZFEYp5qVuBR6E2ImoARAHEk1%2FR9c2oXKDbvJGeoy3npbTReYTV0EyaWGXJh73dRC%2Fd%2F43IMniV6A9FUQwqAUnLsWwiZ4djMkKbNHyv5hNIhkA6TSPvENfKy%2F1k%2BpOcsVKhWgp1k0bBjFPkFNCrnX1dvkKSUC8b68olh94OEEQG6VdhL7B1FLxJSNb2T88vS3WGRFP5T%2FW0sachCIAGPEX&X-Amz-Signature=99d7a39b27b7127edefa70f9b5d06813c674f0ba611f983dbadade5a480643ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q7OPGSU%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfRCThgd%2FOjD6MiBQCWrfwF8ggX7GHc6D%2FagIuvz0DmAiEA8ELr1wttKDXg0sMLnvHJOoC9wBeRnUdKtJ9begkdv10qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGyxgDPjAp%2BPWPDxSrcA%2BW3pf0qTUd60qBA%2F1t4m4JXfKpgk2p5rlyA78%2BvJOJwSIT1xZ4WFYQbXxqcOUYZVGqaEZEadY3i8VQHftOlXB4c%2FIU78y4HR0SVwBsdOqrJUVnEno0S%2B0UZMfLJUnlWxS%2F66WnCVtYokyL1Q8VkwtI5W%2BnLu5fylccNicinUfPIsVfaAKw4amsLcrX%2FkVTbqe34tmwZclYKhldCKre%2BNSXBtrqmXH6fvyy%2Bx4V6t6CpviFLcDBGZRpnqX8Kx1DMnCIec7mXIf8SyRqMqQ0SnfrocIB0nu4zqSxkzuEl1RzqFHe3Gfe9ZeoQQSXwY%2By4SVSnDOzNjD%2BzNH7HSnISjHQuOA6WsAU9e8rISl7M00g79h3%2F2aOesPx571YNK9CeY64lJLWM5Xh0R10PQ5byVcOKE7lFz81BT0K3kJLF5nE70dJEHJ0iw9Xy5kGPcb0JNUSbtWE24kch3JmoIS%2FxbQx%2FzcAgmG6uvQ2L1HgCXotVPeTlz3A65IVgNDsJ9wIx6sGiDdX6mNTJnY7%2F31AfjmF9vB5IMNR%2BqhhhUJti1YTm7%2FE5T9rh%2BoIsiCBIc30YT8QyfG%2Bt5Cix4msgedPThXqvNZMjeJtG0CpT%2BG5UCEIU5Lv%2FmqGQRL5M%2FoHDMK3HzMoGOqUBbiRLMeoZFEYp5qVuBR6E2ImoARAHEk1%2FR9c2oXKDbvJGeoy3npbTReYTV0EyaWGXJh73dRC%2Fd%2F43IMniV6A9FUQwqAUnLsWwiZ4djMkKbNHyv5hNIhkA6TSPvENfKy%2F1k%2BpOcsVKhWgp1k0bBjFPkFNCrnX1dvkKSUC8b68olh94OEEQG6VdhL7B1FLxJSNb2T88vS3WGRFP5T%2FW0sachCIAGPEX&X-Amz-Signature=7c378a4ade915ee2f0806258d9dccf25e83fe4dbc3fff63e8821a362a70b2177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q7OPGSU%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfRCThgd%2FOjD6MiBQCWrfwF8ggX7GHc6D%2FagIuvz0DmAiEA8ELr1wttKDXg0sMLnvHJOoC9wBeRnUdKtJ9begkdv10qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGyxgDPjAp%2BPWPDxSrcA%2BW3pf0qTUd60qBA%2F1t4m4JXfKpgk2p5rlyA78%2BvJOJwSIT1xZ4WFYQbXxqcOUYZVGqaEZEadY3i8VQHftOlXB4c%2FIU78y4HR0SVwBsdOqrJUVnEno0S%2B0UZMfLJUnlWxS%2F66WnCVtYokyL1Q8VkwtI5W%2BnLu5fylccNicinUfPIsVfaAKw4amsLcrX%2FkVTbqe34tmwZclYKhldCKre%2BNSXBtrqmXH6fvyy%2Bx4V6t6CpviFLcDBGZRpnqX8Kx1DMnCIec7mXIf8SyRqMqQ0SnfrocIB0nu4zqSxkzuEl1RzqFHe3Gfe9ZeoQQSXwY%2By4SVSnDOzNjD%2BzNH7HSnISjHQuOA6WsAU9e8rISl7M00g79h3%2F2aOesPx571YNK9CeY64lJLWM5Xh0R10PQ5byVcOKE7lFz81BT0K3kJLF5nE70dJEHJ0iw9Xy5kGPcb0JNUSbtWE24kch3JmoIS%2FxbQx%2FzcAgmG6uvQ2L1HgCXotVPeTlz3A65IVgNDsJ9wIx6sGiDdX6mNTJnY7%2F31AfjmF9vB5IMNR%2BqhhhUJti1YTm7%2FE5T9rh%2BoIsiCBIc30YT8QyfG%2Bt5Cix4msgedPThXqvNZMjeJtG0CpT%2BG5UCEIU5Lv%2FmqGQRL5M%2FoHDMK3HzMoGOqUBbiRLMeoZFEYp5qVuBR6E2ImoARAHEk1%2FR9c2oXKDbvJGeoy3npbTReYTV0EyaWGXJh73dRC%2Fd%2F43IMniV6A9FUQwqAUnLsWwiZ4djMkKbNHyv5hNIhkA6TSPvENfKy%2F1k%2BpOcsVKhWgp1k0bBjFPkFNCrnX1dvkKSUC8b68olh94OEEQG6VdhL7B1FLxJSNb2T88vS3WGRFP5T%2FW0sachCIAGPEX&X-Amz-Signature=eb9e5c8836bdb9706c008c517b52382c9975518a65541fe6e28ca0114dab17af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q7OPGSU%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfRCThgd%2FOjD6MiBQCWrfwF8ggX7GHc6D%2FagIuvz0DmAiEA8ELr1wttKDXg0sMLnvHJOoC9wBeRnUdKtJ9begkdv10qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGyxgDPjAp%2BPWPDxSrcA%2BW3pf0qTUd60qBA%2F1t4m4JXfKpgk2p5rlyA78%2BvJOJwSIT1xZ4WFYQbXxqcOUYZVGqaEZEadY3i8VQHftOlXB4c%2FIU78y4HR0SVwBsdOqrJUVnEno0S%2B0UZMfLJUnlWxS%2F66WnCVtYokyL1Q8VkwtI5W%2BnLu5fylccNicinUfPIsVfaAKw4amsLcrX%2FkVTbqe34tmwZclYKhldCKre%2BNSXBtrqmXH6fvyy%2Bx4V6t6CpviFLcDBGZRpnqX8Kx1DMnCIec7mXIf8SyRqMqQ0SnfrocIB0nu4zqSxkzuEl1RzqFHe3Gfe9ZeoQQSXwY%2By4SVSnDOzNjD%2BzNH7HSnISjHQuOA6WsAU9e8rISl7M00g79h3%2F2aOesPx571YNK9CeY64lJLWM5Xh0R10PQ5byVcOKE7lFz81BT0K3kJLF5nE70dJEHJ0iw9Xy5kGPcb0JNUSbtWE24kch3JmoIS%2FxbQx%2FzcAgmG6uvQ2L1HgCXotVPeTlz3A65IVgNDsJ9wIx6sGiDdX6mNTJnY7%2F31AfjmF9vB5IMNR%2BqhhhUJti1YTm7%2FE5T9rh%2BoIsiCBIc30YT8QyfG%2Bt5Cix4msgedPThXqvNZMjeJtG0CpT%2BG5UCEIU5Lv%2FmqGQRL5M%2FoHDMK3HzMoGOqUBbiRLMeoZFEYp5qVuBR6E2ImoARAHEk1%2FR9c2oXKDbvJGeoy3npbTReYTV0EyaWGXJh73dRC%2Fd%2F43IMniV6A9FUQwqAUnLsWwiZ4djMkKbNHyv5hNIhkA6TSPvENfKy%2F1k%2BpOcsVKhWgp1k0bBjFPkFNCrnX1dvkKSUC8b68olh94OEEQG6VdhL7B1FLxJSNb2T88vS3WGRFP5T%2FW0sachCIAGPEX&X-Amz-Signature=1d8c5bbffbab89a481f0c097fedac9bb65c3a0d78eef445832aa95aea6ed3eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q7OPGSU%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfRCThgd%2FOjD6MiBQCWrfwF8ggX7GHc6D%2FagIuvz0DmAiEA8ELr1wttKDXg0sMLnvHJOoC9wBeRnUdKtJ9begkdv10qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGyxgDPjAp%2BPWPDxSrcA%2BW3pf0qTUd60qBA%2F1t4m4JXfKpgk2p5rlyA78%2BvJOJwSIT1xZ4WFYQbXxqcOUYZVGqaEZEadY3i8VQHftOlXB4c%2FIU78y4HR0SVwBsdOqrJUVnEno0S%2B0UZMfLJUnlWxS%2F66WnCVtYokyL1Q8VkwtI5W%2BnLu5fylccNicinUfPIsVfaAKw4amsLcrX%2FkVTbqe34tmwZclYKhldCKre%2BNSXBtrqmXH6fvyy%2Bx4V6t6CpviFLcDBGZRpnqX8Kx1DMnCIec7mXIf8SyRqMqQ0SnfrocIB0nu4zqSxkzuEl1RzqFHe3Gfe9ZeoQQSXwY%2By4SVSnDOzNjD%2BzNH7HSnISjHQuOA6WsAU9e8rISl7M00g79h3%2F2aOesPx571YNK9CeY64lJLWM5Xh0R10PQ5byVcOKE7lFz81BT0K3kJLF5nE70dJEHJ0iw9Xy5kGPcb0JNUSbtWE24kch3JmoIS%2FxbQx%2FzcAgmG6uvQ2L1HgCXotVPeTlz3A65IVgNDsJ9wIx6sGiDdX6mNTJnY7%2F31AfjmF9vB5IMNR%2BqhhhUJti1YTm7%2FE5T9rh%2BoIsiCBIc30YT8QyfG%2Bt5Cix4msgedPThXqvNZMjeJtG0CpT%2BG5UCEIU5Lv%2FmqGQRL5M%2FoHDMK3HzMoGOqUBbiRLMeoZFEYp5qVuBR6E2ImoARAHEk1%2FR9c2oXKDbvJGeoy3npbTReYTV0EyaWGXJh73dRC%2Fd%2F43IMniV6A9FUQwqAUnLsWwiZ4djMkKbNHyv5hNIhkA6TSPvENfKy%2F1k%2BpOcsVKhWgp1k0bBjFPkFNCrnX1dvkKSUC8b68olh94OEEQG6VdhL7B1FLxJSNb2T88vS3WGRFP5T%2FW0sachCIAGPEX&X-Amz-Signature=6c8246b452938652a3d7051673cea7becaa191f30756c06597ad3705e6c2c898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q7OPGSU%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfRCThgd%2FOjD6MiBQCWrfwF8ggX7GHc6D%2FagIuvz0DmAiEA8ELr1wttKDXg0sMLnvHJOoC9wBeRnUdKtJ9begkdv10qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGyxgDPjAp%2BPWPDxSrcA%2BW3pf0qTUd60qBA%2F1t4m4JXfKpgk2p5rlyA78%2BvJOJwSIT1xZ4WFYQbXxqcOUYZVGqaEZEadY3i8VQHftOlXB4c%2FIU78y4HR0SVwBsdOqrJUVnEno0S%2B0UZMfLJUnlWxS%2F66WnCVtYokyL1Q8VkwtI5W%2BnLu5fylccNicinUfPIsVfaAKw4amsLcrX%2FkVTbqe34tmwZclYKhldCKre%2BNSXBtrqmXH6fvyy%2Bx4V6t6CpviFLcDBGZRpnqX8Kx1DMnCIec7mXIf8SyRqMqQ0SnfrocIB0nu4zqSxkzuEl1RzqFHe3Gfe9ZeoQQSXwY%2By4SVSnDOzNjD%2BzNH7HSnISjHQuOA6WsAU9e8rISl7M00g79h3%2F2aOesPx571YNK9CeY64lJLWM5Xh0R10PQ5byVcOKE7lFz81BT0K3kJLF5nE70dJEHJ0iw9Xy5kGPcb0JNUSbtWE24kch3JmoIS%2FxbQx%2FzcAgmG6uvQ2L1HgCXotVPeTlz3A65IVgNDsJ9wIx6sGiDdX6mNTJnY7%2F31AfjmF9vB5IMNR%2BqhhhUJti1YTm7%2FE5T9rh%2BoIsiCBIc30YT8QyfG%2Bt5Cix4msgedPThXqvNZMjeJtG0CpT%2BG5UCEIU5Lv%2FmqGQRL5M%2FoHDMK3HzMoGOqUBbiRLMeoZFEYp5qVuBR6E2ImoARAHEk1%2FR9c2oXKDbvJGeoy3npbTReYTV0EyaWGXJh73dRC%2Fd%2F43IMniV6A9FUQwqAUnLsWwiZ4djMkKbNHyv5hNIhkA6TSPvENfKy%2F1k%2BpOcsVKhWgp1k0bBjFPkFNCrnX1dvkKSUC8b68olh94OEEQG6VdhL7B1FLxJSNb2T88vS3WGRFP5T%2FW0sachCIAGPEX&X-Amz-Signature=328a519bfaccc1c509ee7fcbdbd71d5512eab9173f1c9e1617e505288fdca9c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q7OPGSU%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfRCThgd%2FOjD6MiBQCWrfwF8ggX7GHc6D%2FagIuvz0DmAiEA8ELr1wttKDXg0sMLnvHJOoC9wBeRnUdKtJ9begkdv10qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGyxgDPjAp%2BPWPDxSrcA%2BW3pf0qTUd60qBA%2F1t4m4JXfKpgk2p5rlyA78%2BvJOJwSIT1xZ4WFYQbXxqcOUYZVGqaEZEadY3i8VQHftOlXB4c%2FIU78y4HR0SVwBsdOqrJUVnEno0S%2B0UZMfLJUnlWxS%2F66WnCVtYokyL1Q8VkwtI5W%2BnLu5fylccNicinUfPIsVfaAKw4amsLcrX%2FkVTbqe34tmwZclYKhldCKre%2BNSXBtrqmXH6fvyy%2Bx4V6t6CpviFLcDBGZRpnqX8Kx1DMnCIec7mXIf8SyRqMqQ0SnfrocIB0nu4zqSxkzuEl1RzqFHe3Gfe9ZeoQQSXwY%2By4SVSnDOzNjD%2BzNH7HSnISjHQuOA6WsAU9e8rISl7M00g79h3%2F2aOesPx571YNK9CeY64lJLWM5Xh0R10PQ5byVcOKE7lFz81BT0K3kJLF5nE70dJEHJ0iw9Xy5kGPcb0JNUSbtWE24kch3JmoIS%2FxbQx%2FzcAgmG6uvQ2L1HgCXotVPeTlz3A65IVgNDsJ9wIx6sGiDdX6mNTJnY7%2F31AfjmF9vB5IMNR%2BqhhhUJti1YTm7%2FE5T9rh%2BoIsiCBIc30YT8QyfG%2Bt5Cix4msgedPThXqvNZMjeJtG0CpT%2BG5UCEIU5Lv%2FmqGQRL5M%2FoHDMK3HzMoGOqUBbiRLMeoZFEYp5qVuBR6E2ImoARAHEk1%2FR9c2oXKDbvJGeoy3npbTReYTV0EyaWGXJh73dRC%2Fd%2F43IMniV6A9FUQwqAUnLsWwiZ4djMkKbNHyv5hNIhkA6TSPvENfKy%2F1k%2BpOcsVKhWgp1k0bBjFPkFNCrnX1dvkKSUC8b68olh94OEEQG6VdhL7B1FLxJSNb2T88vS3WGRFP5T%2FW0sachCIAGPEX&X-Amz-Signature=937886c6674406f470044e2da74840137e543f8476c9b68009a552e8e57b08a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NFTHPPQ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTni%2F8DScvZPQMYYdR4PIlcnD5CgBia1vNrkotTXiZbAiEAqwLatiSFGXSsPLV4TWios0jLz%2FPBLcdOVaT173tzPWMqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOt%2F7J4dJJHPnzqumyrcA7uDKTO8%2F7oteN8AiRUPmFKH5iuMZVSKq3pKyG7iidMygTZXFwiYqtNn%2FGqht9DpGCg8jZOOEPEATtNPpjgNfKLHdJU5u3C4hIegt4gZ88ZGGTl%2FJBwNRq3bcDGgjlR70dBuEwFSRcB2voHAvs7dhiY0dQUwL2K8q4Lw7N07RknnzpqG%2Bt%2FGSre8Ou6IKPG2WdcB%2B6PaJA7aWKwtrzI9%2BV7y4PBIdEY0pq5xhQWty5ypsygCvOrE8yyhFMlORMwMGRgZu1AHlSn3Kfk1%2BKvUYqVCL1xCjhr3MePoEqm1hBqHqKlJMUzmpvVD%2BlldMvg6%2BR5hRiTyPF7dRY%2B9jB%2BgHgyWhSdnFGW9MDxzYEIzsCTbFDKDDOhp%2BH7jyGwehhGcyVpnI9h0ek3Ut7iUrbKc%2BYaml8Dt4SgmMAgidqrBD%2FZpEEkEI87mv7%2F3TKyB1iKDYmyfnXJ4bumkVB9UcrajGcXsBATJ4u%2BupZmy%2FNSBCVCP0et%2BiDDPr3ucbqPhAYKs3BhJy1hWq%2BP6USU6pwkuVgEAwIRhGekOSI22N7BKWU8y%2Bp0YFdOl6cPizjGdOVqSI2U4v0Km9OTX5vfuL0Iuw1JQwcQYKZQAOYu67crbkTFw7ED38TGSol3dos50MNHAzMoGOqUBdSz0Bi4WaUcHDnxe5BkFP9IZmxzgmuP1GhKyuaF1noo%2BjBRQYKd1mwjgHOjLqzESHiHZZOQzTh6d%2BTN%2FMS2KXm%2FAjMPIXGNXcNttfC8EmwToKpiExVcoGvy5EJqhDDGeeYrYjfTVyp5ov6G4UpYeeF7gNQa3ZCghepEy7q6qHDw4QoZ8CSGhvz1fTsanol2j9In%2BMFUNGu1%2F5BWxXNNkvcUCVltH&X-Amz-Signature=0fc11c341ae6afa3fc56a719d329256c56bfe963a4212a2985e042f835f6e210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NFTHPPQ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTni%2F8DScvZPQMYYdR4PIlcnD5CgBia1vNrkotTXiZbAiEAqwLatiSFGXSsPLV4TWios0jLz%2FPBLcdOVaT173tzPWMqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOt%2F7J4dJJHPnzqumyrcA7uDKTO8%2F7oteN8AiRUPmFKH5iuMZVSKq3pKyG7iidMygTZXFwiYqtNn%2FGqht9DpGCg8jZOOEPEATtNPpjgNfKLHdJU5u3C4hIegt4gZ88ZGGTl%2FJBwNRq3bcDGgjlR70dBuEwFSRcB2voHAvs7dhiY0dQUwL2K8q4Lw7N07RknnzpqG%2Bt%2FGSre8Ou6IKPG2WdcB%2B6PaJA7aWKwtrzI9%2BV7y4PBIdEY0pq5xhQWty5ypsygCvOrE8yyhFMlORMwMGRgZu1AHlSn3Kfk1%2BKvUYqVCL1xCjhr3MePoEqm1hBqHqKlJMUzmpvVD%2BlldMvg6%2BR5hRiTyPF7dRY%2B9jB%2BgHgyWhSdnFGW9MDxzYEIzsCTbFDKDDOhp%2BH7jyGwehhGcyVpnI9h0ek3Ut7iUrbKc%2BYaml8Dt4SgmMAgidqrBD%2FZpEEkEI87mv7%2F3TKyB1iKDYmyfnXJ4bumkVB9UcrajGcXsBATJ4u%2BupZmy%2FNSBCVCP0et%2BiDDPr3ucbqPhAYKs3BhJy1hWq%2BP6USU6pwkuVgEAwIRhGekOSI22N7BKWU8y%2Bp0YFdOl6cPizjGdOVqSI2U4v0Km9OTX5vfuL0Iuw1JQwcQYKZQAOYu67crbkTFw7ED38TGSol3dos50MNHAzMoGOqUBdSz0Bi4WaUcHDnxe5BkFP9IZmxzgmuP1GhKyuaF1noo%2BjBRQYKd1mwjgHOjLqzESHiHZZOQzTh6d%2BTN%2FMS2KXm%2FAjMPIXGNXcNttfC8EmwToKpiExVcoGvy5EJqhDDGeeYrYjfTVyp5ov6G4UpYeeF7gNQa3ZCghepEy7q6qHDw4QoZ8CSGhvz1fTsanol2j9In%2BMFUNGu1%2F5BWxXNNkvcUCVltH&X-Amz-Signature=13d3b1eca457d6c549bf42b1279d75392e853f7ea9cef6debc7e9a5b60c2848b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NFTHPPQ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTni%2F8DScvZPQMYYdR4PIlcnD5CgBia1vNrkotTXiZbAiEAqwLatiSFGXSsPLV4TWios0jLz%2FPBLcdOVaT173tzPWMqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOt%2F7J4dJJHPnzqumyrcA7uDKTO8%2F7oteN8AiRUPmFKH5iuMZVSKq3pKyG7iidMygTZXFwiYqtNn%2FGqht9DpGCg8jZOOEPEATtNPpjgNfKLHdJU5u3C4hIegt4gZ88ZGGTl%2FJBwNRq3bcDGgjlR70dBuEwFSRcB2voHAvs7dhiY0dQUwL2K8q4Lw7N07RknnzpqG%2Bt%2FGSre8Ou6IKPG2WdcB%2B6PaJA7aWKwtrzI9%2BV7y4PBIdEY0pq5xhQWty5ypsygCvOrE8yyhFMlORMwMGRgZu1AHlSn3Kfk1%2BKvUYqVCL1xCjhr3MePoEqm1hBqHqKlJMUzmpvVD%2BlldMvg6%2BR5hRiTyPF7dRY%2B9jB%2BgHgyWhSdnFGW9MDxzYEIzsCTbFDKDDOhp%2BH7jyGwehhGcyVpnI9h0ek3Ut7iUrbKc%2BYaml8Dt4SgmMAgidqrBD%2FZpEEkEI87mv7%2F3TKyB1iKDYmyfnXJ4bumkVB9UcrajGcXsBATJ4u%2BupZmy%2FNSBCVCP0et%2BiDDPr3ucbqPhAYKs3BhJy1hWq%2BP6USU6pwkuVgEAwIRhGekOSI22N7BKWU8y%2Bp0YFdOl6cPizjGdOVqSI2U4v0Km9OTX5vfuL0Iuw1JQwcQYKZQAOYu67crbkTFw7ED38TGSol3dos50MNHAzMoGOqUBdSz0Bi4WaUcHDnxe5BkFP9IZmxzgmuP1GhKyuaF1noo%2BjBRQYKd1mwjgHOjLqzESHiHZZOQzTh6d%2BTN%2FMS2KXm%2FAjMPIXGNXcNttfC8EmwToKpiExVcoGvy5EJqhDDGeeYrYjfTVyp5ov6G4UpYeeF7gNQa3ZCghepEy7q6qHDw4QoZ8CSGhvz1fTsanol2j9In%2BMFUNGu1%2F5BWxXNNkvcUCVltH&X-Amz-Signature=63f9bbf513c0f3bc6cbd9d3afd908b15432bfd7234456df6884656aafe502279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NFTHPPQ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTni%2F8DScvZPQMYYdR4PIlcnD5CgBia1vNrkotTXiZbAiEAqwLatiSFGXSsPLV4TWios0jLz%2FPBLcdOVaT173tzPWMqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOt%2F7J4dJJHPnzqumyrcA7uDKTO8%2F7oteN8AiRUPmFKH5iuMZVSKq3pKyG7iidMygTZXFwiYqtNn%2FGqht9DpGCg8jZOOEPEATtNPpjgNfKLHdJU5u3C4hIegt4gZ88ZGGTl%2FJBwNRq3bcDGgjlR70dBuEwFSRcB2voHAvs7dhiY0dQUwL2K8q4Lw7N07RknnzpqG%2Bt%2FGSre8Ou6IKPG2WdcB%2B6PaJA7aWKwtrzI9%2BV7y4PBIdEY0pq5xhQWty5ypsygCvOrE8yyhFMlORMwMGRgZu1AHlSn3Kfk1%2BKvUYqVCL1xCjhr3MePoEqm1hBqHqKlJMUzmpvVD%2BlldMvg6%2BR5hRiTyPF7dRY%2B9jB%2BgHgyWhSdnFGW9MDxzYEIzsCTbFDKDDOhp%2BH7jyGwehhGcyVpnI9h0ek3Ut7iUrbKc%2BYaml8Dt4SgmMAgidqrBD%2FZpEEkEI87mv7%2F3TKyB1iKDYmyfnXJ4bumkVB9UcrajGcXsBATJ4u%2BupZmy%2FNSBCVCP0et%2BiDDPr3ucbqPhAYKs3BhJy1hWq%2BP6USU6pwkuVgEAwIRhGekOSI22N7BKWU8y%2Bp0YFdOl6cPizjGdOVqSI2U4v0Km9OTX5vfuL0Iuw1JQwcQYKZQAOYu67crbkTFw7ED38TGSol3dos50MNHAzMoGOqUBdSz0Bi4WaUcHDnxe5BkFP9IZmxzgmuP1GhKyuaF1noo%2BjBRQYKd1mwjgHOjLqzESHiHZZOQzTh6d%2BTN%2FMS2KXm%2FAjMPIXGNXcNttfC8EmwToKpiExVcoGvy5EJqhDDGeeYrYjfTVyp5ov6G4UpYeeF7gNQa3ZCghepEy7q6qHDw4QoZ8CSGhvz1fTsanol2j9In%2BMFUNGu1%2F5BWxXNNkvcUCVltH&X-Amz-Signature=8d71dfc51c09e0f3f47b6406f4606b0d68022d752f6e163031a09c5e24a6e985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NFTHPPQ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTni%2F8DScvZPQMYYdR4PIlcnD5CgBia1vNrkotTXiZbAiEAqwLatiSFGXSsPLV4TWios0jLz%2FPBLcdOVaT173tzPWMqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOt%2F7J4dJJHPnzqumyrcA7uDKTO8%2F7oteN8AiRUPmFKH5iuMZVSKq3pKyG7iidMygTZXFwiYqtNn%2FGqht9DpGCg8jZOOEPEATtNPpjgNfKLHdJU5u3C4hIegt4gZ88ZGGTl%2FJBwNRq3bcDGgjlR70dBuEwFSRcB2voHAvs7dhiY0dQUwL2K8q4Lw7N07RknnzpqG%2Bt%2FGSre8Ou6IKPG2WdcB%2B6PaJA7aWKwtrzI9%2BV7y4PBIdEY0pq5xhQWty5ypsygCvOrE8yyhFMlORMwMGRgZu1AHlSn3Kfk1%2BKvUYqVCL1xCjhr3MePoEqm1hBqHqKlJMUzmpvVD%2BlldMvg6%2BR5hRiTyPF7dRY%2B9jB%2BgHgyWhSdnFGW9MDxzYEIzsCTbFDKDDOhp%2BH7jyGwehhGcyVpnI9h0ek3Ut7iUrbKc%2BYaml8Dt4SgmMAgidqrBD%2FZpEEkEI87mv7%2F3TKyB1iKDYmyfnXJ4bumkVB9UcrajGcXsBATJ4u%2BupZmy%2FNSBCVCP0et%2BiDDPr3ucbqPhAYKs3BhJy1hWq%2BP6USU6pwkuVgEAwIRhGekOSI22N7BKWU8y%2Bp0YFdOl6cPizjGdOVqSI2U4v0Km9OTX5vfuL0Iuw1JQwcQYKZQAOYu67crbkTFw7ED38TGSol3dos50MNHAzMoGOqUBdSz0Bi4WaUcHDnxe5BkFP9IZmxzgmuP1GhKyuaF1noo%2BjBRQYKd1mwjgHOjLqzESHiHZZOQzTh6d%2BTN%2FMS2KXm%2FAjMPIXGNXcNttfC8EmwToKpiExVcoGvy5EJqhDDGeeYrYjfTVyp5ov6G4UpYeeF7gNQa3ZCghepEy7q6qHDw4QoZ8CSGhvz1fTsanol2j9In%2BMFUNGu1%2F5BWxXNNkvcUCVltH&X-Amz-Signature=f2014fd8e4772d73f5e3ef2057b0677d02bf7fcb7a49d812382d91ee01394e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7O5DTVO%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvGx22%2BWSBtXt5vOTUrrgfwyl842Y6FfYrH9weY4FBzwIgGrmGNPAKnZyPhUrMUbhOdDwojZOSBQ1g%2FwE%2BOG5kX0UqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpOFKzKBGiinJvfwyrcA0AAauuPXMDQEWSpVYes1m9Igs3nBavhZN3N4WYW0ocvbFJ0sbkQwvbi8of9%2FwA2vtrN5TwUMF3Pw4hhl1tjFPqxn4RypoZpGNTMrIQMCLyCOZpTUfrv7pPSgEfAD0Sdmt48cFpfMa4Pu2KL7euIAJfVrrT7NtwX7IP2Y%2BEisvSuMXnhBtt01VkMNWWO4YCWcdGeEv%2B4tJuApCpBUbGNIFEyrYI3DfMenj%2BbbLH%2BETyeao2%2Bsupzg0eK9mB1y2S5EnlR3%2Fd8B6VkEVWi%2BRgva3%2FkWxpNYbk6hYS9PjSk1u%2FeK4yhgakYN7DwL9UeENn8gMs%2F5gAa2fRpcx3AgaWShJukgPSF5mg626WTaZdSwC0D5XCgad5ApcFRRggIZMEJgp1ZpIlvjeLW%2FRzEi9sYWpA86wmvuiiHNCwJOZbj%2F5SxKpz3mGquJxinmCo0sPdqqd10rZ%2FzVzBG98VnmzfUz4YGTn8XwOjMgPraDWDv5%2B8t2Kzv6wgr03vLxyDc3dUotTxH%2FHkc9GWLzzjvIZ%2BplLmJjBuDvgdjsJQCkvjXcXVCQEb9Mch654ZUqIZrZ3GT%2FR4HuoLJyLZDsZoaYF8VK4Ff8xFsoXhOIjHj0brcYo0F%2F1c6Plz7J%2Fu%2BaWqkML%2FIzMoGOqUBht6PR15ghmTPisaBnfbQWR%2BOeK%2Fvo%2FgDb13DjoZKFJqhT7TuQyNcbOWoQPJRmf0%2FT2gPTd%2FBRlyGrqfzLoE7XtaaPRV5978U%2B8EeXydswvg%2FsmcRQHQwzkW1t%2BFnhtt56D6D9BPOpY7LTyweQ74zvue%2FYJZ1DTla97HIayfxSzJ%2FrfKdhvf9Kyb15xTtYjSPVUDvFQBRh6jOwj%2BFW3heKZfJrPbL&X-Amz-Signature=7b382b822e0cd3207f29819425c30f0185aec92b258d68bf22f80f44b645c42e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7O5DTVO%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvGx22%2BWSBtXt5vOTUrrgfwyl842Y6FfYrH9weY4FBzwIgGrmGNPAKnZyPhUrMUbhOdDwojZOSBQ1g%2FwE%2BOG5kX0UqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpOFKzKBGiinJvfwyrcA0AAauuPXMDQEWSpVYes1m9Igs3nBavhZN3N4WYW0ocvbFJ0sbkQwvbi8of9%2FwA2vtrN5TwUMF3Pw4hhl1tjFPqxn4RypoZpGNTMrIQMCLyCOZpTUfrv7pPSgEfAD0Sdmt48cFpfMa4Pu2KL7euIAJfVrrT7NtwX7IP2Y%2BEisvSuMXnhBtt01VkMNWWO4YCWcdGeEv%2B4tJuApCpBUbGNIFEyrYI3DfMenj%2BbbLH%2BETyeao2%2Bsupzg0eK9mB1y2S5EnlR3%2Fd8B6VkEVWi%2BRgva3%2FkWxpNYbk6hYS9PjSk1u%2FeK4yhgakYN7DwL9UeENn8gMs%2F5gAa2fRpcx3AgaWShJukgPSF5mg626WTaZdSwC0D5XCgad5ApcFRRggIZMEJgp1ZpIlvjeLW%2FRzEi9sYWpA86wmvuiiHNCwJOZbj%2F5SxKpz3mGquJxinmCo0sPdqqd10rZ%2FzVzBG98VnmzfUz4YGTn8XwOjMgPraDWDv5%2B8t2Kzv6wgr03vLxyDc3dUotTxH%2FHkc9GWLzzjvIZ%2BplLmJjBuDvgdjsJQCkvjXcXVCQEb9Mch654ZUqIZrZ3GT%2FR4HuoLJyLZDsZoaYF8VK4Ff8xFsoXhOIjHj0brcYo0F%2F1c6Plz7J%2Fu%2BaWqkML%2FIzMoGOqUBht6PR15ghmTPisaBnfbQWR%2BOeK%2Fvo%2FgDb13DjoZKFJqhT7TuQyNcbOWoQPJRmf0%2FT2gPTd%2FBRlyGrqfzLoE7XtaaPRV5978U%2B8EeXydswvg%2FsmcRQHQwzkW1t%2BFnhtt56D6D9BPOpY7LTyweQ74zvue%2FYJZ1DTla97HIayfxSzJ%2FrfKdhvf9Kyb15xTtYjSPVUDvFQBRh6jOwj%2BFW3heKZfJrPbL&X-Amz-Signature=93ba899f4fa43a97be7da249fd769316a3f970e2aeb644972a14a3e7d77fef5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7O5DTVO%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvGx22%2BWSBtXt5vOTUrrgfwyl842Y6FfYrH9weY4FBzwIgGrmGNPAKnZyPhUrMUbhOdDwojZOSBQ1g%2FwE%2BOG5kX0UqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpOFKzKBGiinJvfwyrcA0AAauuPXMDQEWSpVYes1m9Igs3nBavhZN3N4WYW0ocvbFJ0sbkQwvbi8of9%2FwA2vtrN5TwUMF3Pw4hhl1tjFPqxn4RypoZpGNTMrIQMCLyCOZpTUfrv7pPSgEfAD0Sdmt48cFpfMa4Pu2KL7euIAJfVrrT7NtwX7IP2Y%2BEisvSuMXnhBtt01VkMNWWO4YCWcdGeEv%2B4tJuApCpBUbGNIFEyrYI3DfMenj%2BbbLH%2BETyeao2%2Bsupzg0eK9mB1y2S5EnlR3%2Fd8B6VkEVWi%2BRgva3%2FkWxpNYbk6hYS9PjSk1u%2FeK4yhgakYN7DwL9UeENn8gMs%2F5gAa2fRpcx3AgaWShJukgPSF5mg626WTaZdSwC0D5XCgad5ApcFRRggIZMEJgp1ZpIlvjeLW%2FRzEi9sYWpA86wmvuiiHNCwJOZbj%2F5SxKpz3mGquJxinmCo0sPdqqd10rZ%2FzVzBG98VnmzfUz4YGTn8XwOjMgPraDWDv5%2B8t2Kzv6wgr03vLxyDc3dUotTxH%2FHkc9GWLzzjvIZ%2BplLmJjBuDvgdjsJQCkvjXcXVCQEb9Mch654ZUqIZrZ3GT%2FR4HuoLJyLZDsZoaYF8VK4Ff8xFsoXhOIjHj0brcYo0F%2F1c6Plz7J%2Fu%2BaWqkML%2FIzMoGOqUBht6PR15ghmTPisaBnfbQWR%2BOeK%2Fvo%2FgDb13DjoZKFJqhT7TuQyNcbOWoQPJRmf0%2FT2gPTd%2FBRlyGrqfzLoE7XtaaPRV5978U%2B8EeXydswvg%2FsmcRQHQwzkW1t%2BFnhtt56D6D9BPOpY7LTyweQ74zvue%2FYJZ1DTla97HIayfxSzJ%2FrfKdhvf9Kyb15xTtYjSPVUDvFQBRh6jOwj%2BFW3heKZfJrPbL&X-Amz-Signature=2382e3b6b9e6146b961ff37c224c06b3f1dcaa1d138e38dba4116c6eab1b71d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2OONBZX%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMRJ%2Brc0KQ1iSHxD%2F23WCrRrpGvl8QMQVhdW%2FVFZTRsAiEAiPuzGUqMlywXD4xpEQ%2Fx8APVvIq6DIVvPEiPq46PkW8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2Bg1yqfDAAFB8IGECrcAwL4R4T38LlntXIp0DfUrmZfXP4zmaqZklMMrjdF%2FxiYC45yUZ4SC1p0ppq0gFwnVtAKE9U8FDbOswGBmkMpqdf%2BTLbxG0TIMQff5RANdDRTisPG8AOqZVAwTjcIMeM6fhOI6WLlCB%2BHIzq30jsNE%2B%2FMd7s3izT2Pn5uqVnd9EDy53Gtivm5ZoT%2FrVhl7KSFU0yrL%2BVtVpeGB1IE1T2B%2ByzpA%2FyIuwLvWcKw8vq9JVjogUq1xQRT9D8XuaUzcgjiKVKWozI2yeCf7s6KYC4Sbb2SqbdMubAwWP%2Fs7S2muQQnl19%2BITTfk3iPvFlu6TpQeO2sE1pFn8A418AIyqb2oIeiOheMV7LfSUrsoHVwF57An8%2FS%2BFpaM7RR9kLUt%2Fx6jOFFhpNlPIEMqf7qvFnAn8tBI%2BfEdbi6gT943L8TLDQ4gRvuTdNFFoqEeqERxNr3VicM9kvFsKCMRKKdwG8hcScglXDSC12eBORTb1YbCc6Vh46AMA4UmAiTTRagFU%2BxY%2B1aB9QdqZS8fjHXZ3FfC0Z7hLJPk3E8yGWuRqMZ6f4FB7Ka%2FOg6SHjNlYpaXLTEfPmb%2F9P9M8rGIWIBpPYCNim4qcCFzRDwiKtOHITIbwDHvM8WbiNiaq38O4h2MPrKzMoGOqUB4J%2BmJtXoINXFbdUQS%2F72zn8VWvsFZDoYGfUvSx8Emf%2BBFgQGRYcMWT4yWodW17BKPqfOE7PvPob95MvgRgDV2WTth7vZDRgboj6PMWhdWmHGkxaEGT1zxpgcuCwtS%2BhbgKCW9lK96W5pf4yrSf2aqqO8dx17pL0xy7x6UaOGFg6J1SuReE%2BaRh0jHm5PKRo%2BXgi%2FpCEJzm%2FBQ5EzLSMH3XLBnlff&X-Amz-Signature=fea9c72546b50426207ace4cffdc1b472bd73cfb00e5bb6f2fa9c42aa77b9f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2OONBZX%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMRJ%2Brc0KQ1iSHxD%2F23WCrRrpGvl8QMQVhdW%2FVFZTRsAiEAiPuzGUqMlywXD4xpEQ%2Fx8APVvIq6DIVvPEiPq46PkW8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2Bg1yqfDAAFB8IGECrcAwL4R4T38LlntXIp0DfUrmZfXP4zmaqZklMMrjdF%2FxiYC45yUZ4SC1p0ppq0gFwnVtAKE9U8FDbOswGBmkMpqdf%2BTLbxG0TIMQff5RANdDRTisPG8AOqZVAwTjcIMeM6fhOI6WLlCB%2BHIzq30jsNE%2B%2FMd7s3izT2Pn5uqVnd9EDy53Gtivm5ZoT%2FrVhl7KSFU0yrL%2BVtVpeGB1IE1T2B%2ByzpA%2FyIuwLvWcKw8vq9JVjogUq1xQRT9D8XuaUzcgjiKVKWozI2yeCf7s6KYC4Sbb2SqbdMubAwWP%2Fs7S2muQQnl19%2BITTfk3iPvFlu6TpQeO2sE1pFn8A418AIyqb2oIeiOheMV7LfSUrsoHVwF57An8%2FS%2BFpaM7RR9kLUt%2Fx6jOFFhpNlPIEMqf7qvFnAn8tBI%2BfEdbi6gT943L8TLDQ4gRvuTdNFFoqEeqERxNr3VicM9kvFsKCMRKKdwG8hcScglXDSC12eBORTb1YbCc6Vh46AMA4UmAiTTRagFU%2BxY%2B1aB9QdqZS8fjHXZ3FfC0Z7hLJPk3E8yGWuRqMZ6f4FB7Ka%2FOg6SHjNlYpaXLTEfPmb%2F9P9M8rGIWIBpPYCNim4qcCFzRDwiKtOHITIbwDHvM8WbiNiaq38O4h2MPrKzMoGOqUB4J%2BmJtXoINXFbdUQS%2F72zn8VWvsFZDoYGfUvSx8Emf%2BBFgQGRYcMWT4yWodW17BKPqfOE7PvPob95MvgRgDV2WTth7vZDRgboj6PMWhdWmHGkxaEGT1zxpgcuCwtS%2BhbgKCW9lK96W5pf4yrSf2aqqO8dx17pL0xy7x6UaOGFg6J1SuReE%2BaRh0jHm5PKRo%2BXgi%2FpCEJzm%2FBQ5EzLSMH3XLBnlff&X-Amz-Signature=d3db857897d750ecc642879bda55232423c011f9efa48c3be96bd7ff742ebc4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QROSZZWZ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzayKvu9mZdYj3pP244588CnAgE5xgVjOLk8EM5fDq1AiBPL4kD96kYh3VQoqBaCYTZ7nX4pLw9NJtFyLXzQVjfLCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWYFV3%2B9iHFcP1pKVKtwDF3Bb7m3v3OEFxFr%2FqecP%2B0ZLgvBW7%2FvqiGlVUGIJVLcQKs6B6GseKY7rlwHaFoPNP2A2FXHKEGE28gcf%2FkJaeyDYOl84yWIJThLD3VKxzPksR5wGjlv8jco1AluLLYyRzmblRV%2FjyarW8XYAcqbwdtXRVqI9HavBtIu9agbwvNHRRsVXJewDtYhdyirerZ3wbWQnlZBlESWuDulUDjb5o%2BuUz0fLFpwpJR5%2FUIw%2BJzvT5EDXDe0Vco%2BausK2%2F1fqpIlhEnp98rAjUNMKR7X0j9uXS4OyfiVakfp9%2BDFqing2KIR4v9kHCqYWHqtFVQ6wXB3mZRJieJAE%2FHVV3ZA4NfJx6llwG2PpjCcy%2Fc4l%2BmUrYM84VX2WuVIZGG4tGGXwu2dPbdRN9zPxuvbesY9AQDlM4NO%2BhNFtCxv9fMhChl%2BRYUDjJkOtwFJnNlQ4HbysYk33yt%2FFgMCLPZWG9BpS5%2Bgfttzjs9xDqwINyCZth6mcqjqJJnftHtopeNy7K0rVa9ypuPsO1ZaT%2FxKBpwvzpRd%2BXPwt4YAVB8Bar5hXLbxYRkscQi8m1GeM5fQZhnvWwvD%2BtyPQFkPt0L4IRSd14HkGYAF%2B2fh5gpak49POtoLUIhtCs9lAgnHLFagwp8fMygY6pgGr0rKTF89H7ZKpZMNKuyVW61oqSycl%2FhewpWFpP2fkdj3OMCJIsvZdUVyZqDMyD0qKjxCGxF%2BL3JZd4jl3xX6f9DV5lx4WOab0DTecFfKVIe49wlfMnManbNTFD0ax6sYWdJtz8CEmfbhqK9vG%2BTX0Spgkt%2FtRwf9uCFPGwYmxkrvGfBrXD6S80C8VtkbQCpa9mUZ1ycfbB875atIXTYHjGyuzseZJ&X-Amz-Signature=600ef60df847d830c9dccec0d1e01a1445b3179631a98a38c44793f2df966e08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QROSZZWZ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzayKvu9mZdYj3pP244588CnAgE5xgVjOLk8EM5fDq1AiBPL4kD96kYh3VQoqBaCYTZ7nX4pLw9NJtFyLXzQVjfLCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWYFV3%2B9iHFcP1pKVKtwDF3Bb7m3v3OEFxFr%2FqecP%2B0ZLgvBW7%2FvqiGlVUGIJVLcQKs6B6GseKY7rlwHaFoPNP2A2FXHKEGE28gcf%2FkJaeyDYOl84yWIJThLD3VKxzPksR5wGjlv8jco1AluLLYyRzmblRV%2FjyarW8XYAcqbwdtXRVqI9HavBtIu9agbwvNHRRsVXJewDtYhdyirerZ3wbWQnlZBlESWuDulUDjb5o%2BuUz0fLFpwpJR5%2FUIw%2BJzvT5EDXDe0Vco%2BausK2%2F1fqpIlhEnp98rAjUNMKR7X0j9uXS4OyfiVakfp9%2BDFqing2KIR4v9kHCqYWHqtFVQ6wXB3mZRJieJAE%2FHVV3ZA4NfJx6llwG2PpjCcy%2Fc4l%2BmUrYM84VX2WuVIZGG4tGGXwu2dPbdRN9zPxuvbesY9AQDlM4NO%2BhNFtCxv9fMhChl%2BRYUDjJkOtwFJnNlQ4HbysYk33yt%2FFgMCLPZWG9BpS5%2Bgfttzjs9xDqwINyCZth6mcqjqJJnftHtopeNy7K0rVa9ypuPsO1ZaT%2FxKBpwvzpRd%2BXPwt4YAVB8Bar5hXLbxYRkscQi8m1GeM5fQZhnvWwvD%2BtyPQFkPt0L4IRSd14HkGYAF%2B2fh5gpak49POtoLUIhtCs9lAgnHLFagwp8fMygY6pgGr0rKTF89H7ZKpZMNKuyVW61oqSycl%2FhewpWFpP2fkdj3OMCJIsvZdUVyZqDMyD0qKjxCGxF%2BL3JZd4jl3xX6f9DV5lx4WOab0DTecFfKVIe49wlfMnManbNTFD0ax6sYWdJtz8CEmfbhqK9vG%2BTX0Spgkt%2FtRwf9uCFPGwYmxkrvGfBrXD6S80C8VtkbQCpa9mUZ1ycfbB875atIXTYHjGyuzseZJ&X-Amz-Signature=3971292cefa52c9f33bebb9395523e451560c5027b95d874f59ff25154070d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QROSZZWZ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzayKvu9mZdYj3pP244588CnAgE5xgVjOLk8EM5fDq1AiBPL4kD96kYh3VQoqBaCYTZ7nX4pLw9NJtFyLXzQVjfLCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWYFV3%2B9iHFcP1pKVKtwDF3Bb7m3v3OEFxFr%2FqecP%2B0ZLgvBW7%2FvqiGlVUGIJVLcQKs6B6GseKY7rlwHaFoPNP2A2FXHKEGE28gcf%2FkJaeyDYOl84yWIJThLD3VKxzPksR5wGjlv8jco1AluLLYyRzmblRV%2FjyarW8XYAcqbwdtXRVqI9HavBtIu9agbwvNHRRsVXJewDtYhdyirerZ3wbWQnlZBlESWuDulUDjb5o%2BuUz0fLFpwpJR5%2FUIw%2BJzvT5EDXDe0Vco%2BausK2%2F1fqpIlhEnp98rAjUNMKR7X0j9uXS4OyfiVakfp9%2BDFqing2KIR4v9kHCqYWHqtFVQ6wXB3mZRJieJAE%2FHVV3ZA4NfJx6llwG2PpjCcy%2Fc4l%2BmUrYM84VX2WuVIZGG4tGGXwu2dPbdRN9zPxuvbesY9AQDlM4NO%2BhNFtCxv9fMhChl%2BRYUDjJkOtwFJnNlQ4HbysYk33yt%2FFgMCLPZWG9BpS5%2Bgfttzjs9xDqwINyCZth6mcqjqJJnftHtopeNy7K0rVa9ypuPsO1ZaT%2FxKBpwvzpRd%2BXPwt4YAVB8Bar5hXLbxYRkscQi8m1GeM5fQZhnvWwvD%2BtyPQFkPt0L4IRSd14HkGYAF%2B2fh5gpak49POtoLUIhtCs9lAgnHLFagwp8fMygY6pgGr0rKTF89H7ZKpZMNKuyVW61oqSycl%2FhewpWFpP2fkdj3OMCJIsvZdUVyZqDMyD0qKjxCGxF%2BL3JZd4jl3xX6f9DV5lx4WOab0DTecFfKVIe49wlfMnManbNTFD0ax6sYWdJtz8CEmfbhqK9vG%2BTX0Spgkt%2FtRwf9uCFPGwYmxkrvGfBrXD6S80C8VtkbQCpa9mUZ1ycfbB875atIXTYHjGyuzseZJ&X-Amz-Signature=166aaebe541f5eb2cb244924d1cd9dc91871064791d45bb4d1350c1b170a5654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QROSZZWZ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzayKvu9mZdYj3pP244588CnAgE5xgVjOLk8EM5fDq1AiBPL4kD96kYh3VQoqBaCYTZ7nX4pLw9NJtFyLXzQVjfLCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWYFV3%2B9iHFcP1pKVKtwDF3Bb7m3v3OEFxFr%2FqecP%2B0ZLgvBW7%2FvqiGlVUGIJVLcQKs6B6GseKY7rlwHaFoPNP2A2FXHKEGE28gcf%2FkJaeyDYOl84yWIJThLD3VKxzPksR5wGjlv8jco1AluLLYyRzmblRV%2FjyarW8XYAcqbwdtXRVqI9HavBtIu9agbwvNHRRsVXJewDtYhdyirerZ3wbWQnlZBlESWuDulUDjb5o%2BuUz0fLFpwpJR5%2FUIw%2BJzvT5EDXDe0Vco%2BausK2%2F1fqpIlhEnp98rAjUNMKR7X0j9uXS4OyfiVakfp9%2BDFqing2KIR4v9kHCqYWHqtFVQ6wXB3mZRJieJAE%2FHVV3ZA4NfJx6llwG2PpjCcy%2Fc4l%2BmUrYM84VX2WuVIZGG4tGGXwu2dPbdRN9zPxuvbesY9AQDlM4NO%2BhNFtCxv9fMhChl%2BRYUDjJkOtwFJnNlQ4HbysYk33yt%2FFgMCLPZWG9BpS5%2Bgfttzjs9xDqwINyCZth6mcqjqJJnftHtopeNy7K0rVa9ypuPsO1ZaT%2FxKBpwvzpRd%2BXPwt4YAVB8Bar5hXLbxYRkscQi8m1GeM5fQZhnvWwvD%2BtyPQFkPt0L4IRSd14HkGYAF%2B2fh5gpak49POtoLUIhtCs9lAgnHLFagwp8fMygY6pgGr0rKTF89H7ZKpZMNKuyVW61oqSycl%2FhewpWFpP2fkdj3OMCJIsvZdUVyZqDMyD0qKjxCGxF%2BL3JZd4jl3xX6f9DV5lx4WOab0DTecFfKVIe49wlfMnManbNTFD0ax6sYWdJtz8CEmfbhqK9vG%2BTX0Spgkt%2FtRwf9uCFPGwYmxkrvGfBrXD6S80C8VtkbQCpa9mUZ1ycfbB875atIXTYHjGyuzseZJ&X-Amz-Signature=9c1f66b5af5e7889d0b8de6c45733d6f6eb8724ea797c0878a5c724ef14096d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QROSZZWZ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzayKvu9mZdYj3pP244588CnAgE5xgVjOLk8EM5fDq1AiBPL4kD96kYh3VQoqBaCYTZ7nX4pLw9NJtFyLXzQVjfLCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWYFV3%2B9iHFcP1pKVKtwDF3Bb7m3v3OEFxFr%2FqecP%2B0ZLgvBW7%2FvqiGlVUGIJVLcQKs6B6GseKY7rlwHaFoPNP2A2FXHKEGE28gcf%2FkJaeyDYOl84yWIJThLD3VKxzPksR5wGjlv8jco1AluLLYyRzmblRV%2FjyarW8XYAcqbwdtXRVqI9HavBtIu9agbwvNHRRsVXJewDtYhdyirerZ3wbWQnlZBlESWuDulUDjb5o%2BuUz0fLFpwpJR5%2FUIw%2BJzvT5EDXDe0Vco%2BausK2%2F1fqpIlhEnp98rAjUNMKR7X0j9uXS4OyfiVakfp9%2BDFqing2KIR4v9kHCqYWHqtFVQ6wXB3mZRJieJAE%2FHVV3ZA4NfJx6llwG2PpjCcy%2Fc4l%2BmUrYM84VX2WuVIZGG4tGGXwu2dPbdRN9zPxuvbesY9AQDlM4NO%2BhNFtCxv9fMhChl%2BRYUDjJkOtwFJnNlQ4HbysYk33yt%2FFgMCLPZWG9BpS5%2Bgfttzjs9xDqwINyCZth6mcqjqJJnftHtopeNy7K0rVa9ypuPsO1ZaT%2FxKBpwvzpRd%2BXPwt4YAVB8Bar5hXLbxYRkscQi8m1GeM5fQZhnvWwvD%2BtyPQFkPt0L4IRSd14HkGYAF%2B2fh5gpak49POtoLUIhtCs9lAgnHLFagwp8fMygY6pgGr0rKTF89H7ZKpZMNKuyVW61oqSycl%2FhewpWFpP2fkdj3OMCJIsvZdUVyZqDMyD0qKjxCGxF%2BL3JZd4jl3xX6f9DV5lx4WOab0DTecFfKVIe49wlfMnManbNTFD0ax6sYWdJtz8CEmfbhqK9vG%2BTX0Spgkt%2FtRwf9uCFPGwYmxkrvGfBrXD6S80C8VtkbQCpa9mUZ1ycfbB875atIXTYHjGyuzseZJ&X-Amz-Signature=9fb77ee086401cfb55a1291c36fe0eba47151f9c17504fa7a1f2e86093a84d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQE6QZW%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T040927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv2M8Ixp4A5xGwN4MQ12FlxI9b73Bv3ASjtS4e1yXBvAiEAh1LfGQxEjmORZv6it57KvIPYe7SdLITcgSxDOCVY5N8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqqVB31CQdK8dyqnCrcA3zoZ5Htb7IgAszP0gMc1vxOqVHoBL7uVLcB481ndeWkUh8eLIN9nTVaxQd5E1VDPqyn7WrKYQmB6pXndSx7yo90%2BRaUCxvb8S9vbKfz1Z2afpuiMaAqf3S7DjTnTgt2zAZIo4RhXTn73Tb6PUKixRHK7Q1%2FufEHKJdgxJ3wmr4%2FQ97a6Bau2TYO0YxA2g4ZpT8Hq68ks2npdbwVpzbcae5p91Qzdxm9%2FEI2nC60O2u7ilGHezL5zMa5QTm7%2Ff9Toif4Ij%2FoQ1eMr64mDqLCaNU4Dt7E%2FNvqEpH8K3yORYTozUBXIqyEa3bnnYxNGQBWobveBP6y%2FES96OEY%2FIFfhRBpcRnydsEuEAgoTbgiGFFQfKbhBDiCnoiDpW%2B9sPDuHmCS3M1eoY2LwRplBd0fIgRgIzuKB2nmKmvNwOu6kJCSOkwfHVmotAvFPhxvrgKsQ67EGFIg2pQoHPilCIM0wWjyeQkwgZfzMNxdFgWG9g6qCFDAoJTeH7YUhi2N4giM8wQAZGQ8OseVx%2FrOtkm8JNvLwLX2JU3TmAFrbsR%2FnHgMuQqRddc2c95XObmPuM9bgCbE2vihg%2BNp3aHodcH7EKXC1i2ZEn50abB5foCCipyoofXAj2fcgFV37FFMMMzEzMoGOqUBbhdnwbBPcC4hcs1yupY169DsUTiTlhHr%2FepNOUUXhoQE2iMFz9Q5y9C%2BVW9MoR3ajrdJz2XvXjIFNa7sB5e5AHp4aa2myiVvYGMHSjnMH%2FWXDSiXNHP7XGDOkj2PbkBWdzZILnsn3GIUIup7fSVAqEYlNW5TVdKPhMp%2FcueyyWX2uQScy%2BDZvY%2BKgtgDwLTakNBcV5k9UOBCfMe%2BUpqhbV2vzed6&X-Amz-Signature=01a9609159559e23bd6de4cb1eb4da50a5372d7994fb225b598af8985755ec22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

