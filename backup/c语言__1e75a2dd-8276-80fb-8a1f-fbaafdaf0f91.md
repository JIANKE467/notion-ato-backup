
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UIWZ2OT%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCfFLS2ftoF2GZ%2FgGtIkVYjGnP%2B1gOlb3u7wd6wu3ZIcgIgD9alFhkvCUkn0nSelxpPF%2Fyx%2FYyXTWyomLIxtLn0FCYqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgya2SEC3Rk3S9LCyrcA%2FlW5Ngpx66MiZSWs4k4kgZlK4ZlPzbiZB5AIcKs%2FeDfYdeg5%2B1AKVZI8SR32AsFosltVDP%2FkpDmCdjipwrj4HgReO09n5rLXvwpYRDxq5jL12g1ZpHnisHARIvCyCaA6v9KPGD3rG7706dYXrDprTGEo%2F9fM3WXTgkeCvwGEyWPbWNs8kxwZVcsF5XBnSulgtLEFCko6x6Si1ghz7jcscQQCJIL%2FN3TakehdoJWzdKfP1ayLdYNZVZv7z8ohsnOp0B0VVm%2FwAAN1XqFFcXeV%2BOMNzxssB2p6gDGRVQACgjHHzFqHwsRiIV5tbq2Oqbl1nL5gAIQOxdVvjwvz5AO3LYv2ypwYy3KT4YiU0YD9ajgOCCHKfNov4aK7cMAazsk8TJoDtdhQBndX1rqQ%2BSYBgcP5YNbKxW4IjxA7oSEG5V2Jw533Q3w1L%2FKs626NyLzw3gNipJcPyfj5pWzMIuE5Cn2N6FGqj6coBBX%2BuRh1uVStQao3PoR0ybZBQw5t5cI9mOQ9Qu4migsjVj4t8oi2owDYdYyDld1uNrDGUDrgTydKe6V3dJYrwWs227OOJatzq%2FNanWnh%2Bzb13TWom6%2B2Y2yzeI%2Bo4EbzFyzGtTgHwjY1jVR%2BMRZF3mDnJgjMMLz6MkGOqUB%2FYnYnX1Crp%2BNEN1gRns1klPx6InV7Y2fwLx53Z80ln8RAmuDx6W5gD6kTP6W84qfyiFywv8Rmha%2BoEaB4vme1r7EmOmTbE%2F72XAbqmT7mOPmlM6zUAa5k3FhaBX8TUXEkG8tzEPg4RvbTaGDi%2BuykSDrBa%2BzribMh6qlkJdfpL7dzEv1SN6pH7JSWcdvrUaa8ErhQWS%2Bo5WoWK%2Bv4mzBk5D1zV%2Fk&X-Amz-Signature=8ecf027d62a2eac6691c47e374ffa2f450a0b7e6df05ebeeaf5a46ead8c7ad39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6MIPUB%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDsvvezobHWlJ%2Fd6JK8cPLOk6%2BuYa%2BS900yAH2h0URktgIhAPXLk3R1uu8Ok7NoAKYpEF%2FqhdpwMHHo6tuzBVjmjR5IKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsfFVNvd1BATptKIIq3AMb1eVfWGHPUezrRGhKsMTbsosEEzuuyZVJBkChfSU1Vzxd%2FYXfIHuO9zFncJugLBdRC1V2cGpzhei3E7%2Fr3koNqKuyFqfRRKrfmINAL1TzTKxAGJsuny8wslVSDiwC1kLX4pd0fPiUOTloLyn6MF2YU5MV5WOSrEKqLjOflZhSihPfkzXTtyph%2BdaCdzAjzJris%2BOt92BngeVrmo4EqWIwzvW0lKJZUDQgO7Gw2XXgUju3SdhMJGqGUtIePxMgLOaPo3x29FnvNKAPy5ZGf7p2GA6Tl789XkM49vTJgxGp8AjlXO%2Fuj6jq%2F4KQkWHGAiPxtRNB18VFYm9Td5BsPRDuWHXChpaECxx8Sg6P2GFAkPWnENd%2FysBlTBTV3%2FPzLq0PzbEckL6HDGTaRDtJ3EExXkuH30%2BP2Kt9QWNUKYvg%2FMhqPYRgyilSx0Vq3oxGqaKD7fVa8hUQVtO2y5QRo6POVkA7vULQTkRbP6GTja6H78ejb6NmWCa099UGiVjj8X8cQ1VyYJzLFgrtEbqFzYW%2BMT3OcDgCFGIdFbBRNQIaxnVYwLcIv11bqaOqf0epjKraD3gELVrzyyDlfTg%2Bd0RhoRuONKGgi5N8kHCYwMQ37dtvqWd1ND%2BWlecuYjCC9OjJBjqkAavNMNNNIj%2BllvBcYsFgh4pksySdrcIPaSSUYv3Av9LkY%2BlFLGcYYPZBLro4RlUQbtXdUQbnOIIPSkGrwZhZ4ep937gXih1CyVAVOpA6Z87tm3s5Y8pw7Blng9BLNs%2FabEyg8wVOroH%2FE3Ch9UPLOvYtC5ulGHm1hxq%2BNP5vUUQC9NMWsHlV5u6104UNE10xkvVS3lTHFMRt6FFuoQF9OjO5%2FiHe&X-Amz-Signature=400cac8f259cb2bab44546d95a06a48742a20f6aa3b5bc34b16cd16993f28e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6MIPUB%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDsvvezobHWlJ%2Fd6JK8cPLOk6%2BuYa%2BS900yAH2h0URktgIhAPXLk3R1uu8Ok7NoAKYpEF%2FqhdpwMHHo6tuzBVjmjR5IKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsfFVNvd1BATptKIIq3AMb1eVfWGHPUezrRGhKsMTbsosEEzuuyZVJBkChfSU1Vzxd%2FYXfIHuO9zFncJugLBdRC1V2cGpzhei3E7%2Fr3koNqKuyFqfRRKrfmINAL1TzTKxAGJsuny8wslVSDiwC1kLX4pd0fPiUOTloLyn6MF2YU5MV5WOSrEKqLjOflZhSihPfkzXTtyph%2BdaCdzAjzJris%2BOt92BngeVrmo4EqWIwzvW0lKJZUDQgO7Gw2XXgUju3SdhMJGqGUtIePxMgLOaPo3x29FnvNKAPy5ZGf7p2GA6Tl789XkM49vTJgxGp8AjlXO%2Fuj6jq%2F4KQkWHGAiPxtRNB18VFYm9Td5BsPRDuWHXChpaECxx8Sg6P2GFAkPWnENd%2FysBlTBTV3%2FPzLq0PzbEckL6HDGTaRDtJ3EExXkuH30%2BP2Kt9QWNUKYvg%2FMhqPYRgyilSx0Vq3oxGqaKD7fVa8hUQVtO2y5QRo6POVkA7vULQTkRbP6GTja6H78ejb6NmWCa099UGiVjj8X8cQ1VyYJzLFgrtEbqFzYW%2BMT3OcDgCFGIdFbBRNQIaxnVYwLcIv11bqaOqf0epjKraD3gELVrzyyDlfTg%2Bd0RhoRuONKGgi5N8kHCYwMQ37dtvqWd1ND%2BWlecuYjCC9OjJBjqkAavNMNNNIj%2BllvBcYsFgh4pksySdrcIPaSSUYv3Av9LkY%2BlFLGcYYPZBLro4RlUQbtXdUQbnOIIPSkGrwZhZ4ep937gXih1CyVAVOpA6Z87tm3s5Y8pw7Blng9BLNs%2FabEyg8wVOroH%2FE3Ch9UPLOvYtC5ulGHm1hxq%2BNP5vUUQC9NMWsHlV5u6104UNE10xkvVS3lTHFMRt6FFuoQF9OjO5%2FiHe&X-Amz-Signature=6e3efa5106a6e023a26693342766ba9811589ac939c08fc45cbfbbd7a7863982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFQXQW5N%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCcvXlXTFOxOUlEtQYIpyczcZNnhOJphTvxKjAqlssHjwIgWaL7QjAsc8%2Bfe4h%2FJ4zxcH1vym9dQ7gDAV78wkrwWcEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFJJDKyKf75d9u%2B0CrcA7j0%2F%2BBdsOpEMaF6uBt8it4NlaIVAT9pZksqHOgG7K5Wcu8C79RvZhggsK9BdvJTKb8fudIF5A1e8A3cFjXa0Lf9FXwQFayqRaELxjA0EO%2BjBENWa6k9qLMxxLYrFktiV8dI%2Fun7Y9ha%2BQJOTchDbUpqa2xOHIXTSeQeAjfsg84UrSs2SjgzXPyYfJvzUoaQJ07EMpVB9r4tp%2F6I9LUGo1aPVUm0vVCFUsFvu6Y%2F2gnhmb%2B0%2BdVmvxB8ZamntTYOsYSDOwGYOOvGjAQxm04CyGhC9JHvbpOXdZD%2BBCCk9vPHHbYsgznjnBUp9y7tiR7zXHzdSpJymhvf1dbxyYNadgRpQYsgFWQqi%2BsRNW40u7dL%2Bwj%2BvccjSCTI3%2BC%2BODAPLwMI6GoUbPLcew3vtIWSENEu2%2FBhm8sw64ZKylyIa2%2F7rtzpIiF%2Bru6BzDy4I8X5NMNQM8Rprl090mouwVyjq%2Bc8fFBcJfefglSgc5L95P963c0JqaqkF1DTCbQqPMIN7%2BUzv0GxGy%2Bh%2FFrIQxypQ33npCKvJeOc0%2FMzhWcNt4LKFpkF9sJyEokMMmvkR7MXnCIsH6FzR8YcccI5Fki5jmWVq8w6N5KpPqzxbvUmUNeIs%2BhnEBWqkFfMFUxEML%2F06MkGOqUBitxf7t%2FdCFwPHrirvpTqlPfAcn%2FIsHETqcZFbmL6wf0SzsMcwfUcRNpTNcaA23FPsQDKSfz%2F9SYp7lghQSMLtgHIWyRooFtFW0QaBtWqp3aWyi%2BgkZ5jgDzbblyW72hW7A6nGRDYBYlygQDwEYipodsrff0M2A4JBbO%2BCEHgPBjyb5IB0fsrOx1pxTQo6Seiak08Xpy6Z%2FN0zM6kitekC8rMNm2O&X-Amz-Signature=b66d03cd55ac6d965c5bd55461148399d11ab61677c121122d2f2e3c36b1006d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFQXQW5N%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCcvXlXTFOxOUlEtQYIpyczcZNnhOJphTvxKjAqlssHjwIgWaL7QjAsc8%2Bfe4h%2FJ4zxcH1vym9dQ7gDAV78wkrwWcEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFJJDKyKf75d9u%2B0CrcA7j0%2F%2BBdsOpEMaF6uBt8it4NlaIVAT9pZksqHOgG7K5Wcu8C79RvZhggsK9BdvJTKb8fudIF5A1e8A3cFjXa0Lf9FXwQFayqRaELxjA0EO%2BjBENWa6k9qLMxxLYrFktiV8dI%2Fun7Y9ha%2BQJOTchDbUpqa2xOHIXTSeQeAjfsg84UrSs2SjgzXPyYfJvzUoaQJ07EMpVB9r4tp%2F6I9LUGo1aPVUm0vVCFUsFvu6Y%2F2gnhmb%2B0%2BdVmvxB8ZamntTYOsYSDOwGYOOvGjAQxm04CyGhC9JHvbpOXdZD%2BBCCk9vPHHbYsgznjnBUp9y7tiR7zXHzdSpJymhvf1dbxyYNadgRpQYsgFWQqi%2BsRNW40u7dL%2Bwj%2BvccjSCTI3%2BC%2BODAPLwMI6GoUbPLcew3vtIWSENEu2%2FBhm8sw64ZKylyIa2%2F7rtzpIiF%2Bru6BzDy4I8X5NMNQM8Rprl090mouwVyjq%2Bc8fFBcJfefglSgc5L95P963c0JqaqkF1DTCbQqPMIN7%2BUzv0GxGy%2Bh%2FFrIQxypQ33npCKvJeOc0%2FMzhWcNt4LKFpkF9sJyEokMMmvkR7MXnCIsH6FzR8YcccI5Fki5jmWVq8w6N5KpPqzxbvUmUNeIs%2BhnEBWqkFfMFUxEML%2F06MkGOqUBitxf7t%2FdCFwPHrirvpTqlPfAcn%2FIsHETqcZFbmL6wf0SzsMcwfUcRNpTNcaA23FPsQDKSfz%2F9SYp7lghQSMLtgHIWyRooFtFW0QaBtWqp3aWyi%2BgkZ5jgDzbblyW72hW7A6nGRDYBYlygQDwEYipodsrff0M2A4JBbO%2BCEHgPBjyb5IB0fsrOx1pxTQo6Seiak08Xpy6Z%2FN0zM6kitekC8rMNm2O&X-Amz-Signature=b715fd491750694864c5075e5be3b3e3b933261b471a6e6ee5656ffcd89dd274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFQXQW5N%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCcvXlXTFOxOUlEtQYIpyczcZNnhOJphTvxKjAqlssHjwIgWaL7QjAsc8%2Bfe4h%2FJ4zxcH1vym9dQ7gDAV78wkrwWcEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFJJDKyKf75d9u%2B0CrcA7j0%2F%2BBdsOpEMaF6uBt8it4NlaIVAT9pZksqHOgG7K5Wcu8C79RvZhggsK9BdvJTKb8fudIF5A1e8A3cFjXa0Lf9FXwQFayqRaELxjA0EO%2BjBENWa6k9qLMxxLYrFktiV8dI%2Fun7Y9ha%2BQJOTchDbUpqa2xOHIXTSeQeAjfsg84UrSs2SjgzXPyYfJvzUoaQJ07EMpVB9r4tp%2F6I9LUGo1aPVUm0vVCFUsFvu6Y%2F2gnhmb%2B0%2BdVmvxB8ZamntTYOsYSDOwGYOOvGjAQxm04CyGhC9JHvbpOXdZD%2BBCCk9vPHHbYsgznjnBUp9y7tiR7zXHzdSpJymhvf1dbxyYNadgRpQYsgFWQqi%2BsRNW40u7dL%2Bwj%2BvccjSCTI3%2BC%2BODAPLwMI6GoUbPLcew3vtIWSENEu2%2FBhm8sw64ZKylyIa2%2F7rtzpIiF%2Bru6BzDy4I8X5NMNQM8Rprl090mouwVyjq%2Bc8fFBcJfefglSgc5L95P963c0JqaqkF1DTCbQqPMIN7%2BUzv0GxGy%2Bh%2FFrIQxypQ33npCKvJeOc0%2FMzhWcNt4LKFpkF9sJyEokMMmvkR7MXnCIsH6FzR8YcccI5Fki5jmWVq8w6N5KpPqzxbvUmUNeIs%2BhnEBWqkFfMFUxEML%2F06MkGOqUBitxf7t%2FdCFwPHrirvpTqlPfAcn%2FIsHETqcZFbmL6wf0SzsMcwfUcRNpTNcaA23FPsQDKSfz%2F9SYp7lghQSMLtgHIWyRooFtFW0QaBtWqp3aWyi%2BgkZ5jgDzbblyW72hW7A6nGRDYBYlygQDwEYipodsrff0M2A4JBbO%2BCEHgPBjyb5IB0fsrOx1pxTQo6Seiak08Xpy6Z%2FN0zM6kitekC8rMNm2O&X-Amz-Signature=96108892fe8ffc890c99efd2335e7035177f4ab87b03591a18aed74035c3b811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFQXQW5N%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCcvXlXTFOxOUlEtQYIpyczcZNnhOJphTvxKjAqlssHjwIgWaL7QjAsc8%2Bfe4h%2FJ4zxcH1vym9dQ7gDAV78wkrwWcEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFJJDKyKf75d9u%2B0CrcA7j0%2F%2BBdsOpEMaF6uBt8it4NlaIVAT9pZksqHOgG7K5Wcu8C79RvZhggsK9BdvJTKb8fudIF5A1e8A3cFjXa0Lf9FXwQFayqRaELxjA0EO%2BjBENWa6k9qLMxxLYrFktiV8dI%2Fun7Y9ha%2BQJOTchDbUpqa2xOHIXTSeQeAjfsg84UrSs2SjgzXPyYfJvzUoaQJ07EMpVB9r4tp%2F6I9LUGo1aPVUm0vVCFUsFvu6Y%2F2gnhmb%2B0%2BdVmvxB8ZamntTYOsYSDOwGYOOvGjAQxm04CyGhC9JHvbpOXdZD%2BBCCk9vPHHbYsgznjnBUp9y7tiR7zXHzdSpJymhvf1dbxyYNadgRpQYsgFWQqi%2BsRNW40u7dL%2Bwj%2BvccjSCTI3%2BC%2BODAPLwMI6GoUbPLcew3vtIWSENEu2%2FBhm8sw64ZKylyIa2%2F7rtzpIiF%2Bru6BzDy4I8X5NMNQM8Rprl090mouwVyjq%2Bc8fFBcJfefglSgc5L95P963c0JqaqkF1DTCbQqPMIN7%2BUzv0GxGy%2Bh%2FFrIQxypQ33npCKvJeOc0%2FMzhWcNt4LKFpkF9sJyEokMMmvkR7MXnCIsH6FzR8YcccI5Fki5jmWVq8w6N5KpPqzxbvUmUNeIs%2BhnEBWqkFfMFUxEML%2F06MkGOqUBitxf7t%2FdCFwPHrirvpTqlPfAcn%2FIsHETqcZFbmL6wf0SzsMcwfUcRNpTNcaA23FPsQDKSfz%2F9SYp7lghQSMLtgHIWyRooFtFW0QaBtWqp3aWyi%2BgkZ5jgDzbblyW72hW7A6nGRDYBYlygQDwEYipodsrff0M2A4JBbO%2BCEHgPBjyb5IB0fsrOx1pxTQo6Seiak08Xpy6Z%2FN0zM6kitekC8rMNm2O&X-Amz-Signature=4366872faf7d97c0940694d15012d5994321332b07a1500a10cc60f6d91b01c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFQXQW5N%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCcvXlXTFOxOUlEtQYIpyczcZNnhOJphTvxKjAqlssHjwIgWaL7QjAsc8%2Bfe4h%2FJ4zxcH1vym9dQ7gDAV78wkrwWcEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFJJDKyKf75d9u%2B0CrcA7j0%2F%2BBdsOpEMaF6uBt8it4NlaIVAT9pZksqHOgG7K5Wcu8C79RvZhggsK9BdvJTKb8fudIF5A1e8A3cFjXa0Lf9FXwQFayqRaELxjA0EO%2BjBENWa6k9qLMxxLYrFktiV8dI%2Fun7Y9ha%2BQJOTchDbUpqa2xOHIXTSeQeAjfsg84UrSs2SjgzXPyYfJvzUoaQJ07EMpVB9r4tp%2F6I9LUGo1aPVUm0vVCFUsFvu6Y%2F2gnhmb%2B0%2BdVmvxB8ZamntTYOsYSDOwGYOOvGjAQxm04CyGhC9JHvbpOXdZD%2BBCCk9vPHHbYsgznjnBUp9y7tiR7zXHzdSpJymhvf1dbxyYNadgRpQYsgFWQqi%2BsRNW40u7dL%2Bwj%2BvccjSCTI3%2BC%2BODAPLwMI6GoUbPLcew3vtIWSENEu2%2FBhm8sw64ZKylyIa2%2F7rtzpIiF%2Bru6BzDy4I8X5NMNQM8Rprl090mouwVyjq%2Bc8fFBcJfefglSgc5L95P963c0JqaqkF1DTCbQqPMIN7%2BUzv0GxGy%2Bh%2FFrIQxypQ33npCKvJeOc0%2FMzhWcNt4LKFpkF9sJyEokMMmvkR7MXnCIsH6FzR8YcccI5Fki5jmWVq8w6N5KpPqzxbvUmUNeIs%2BhnEBWqkFfMFUxEML%2F06MkGOqUBitxf7t%2FdCFwPHrirvpTqlPfAcn%2FIsHETqcZFbmL6wf0SzsMcwfUcRNpTNcaA23FPsQDKSfz%2F9SYp7lghQSMLtgHIWyRooFtFW0QaBtWqp3aWyi%2BgkZ5jgDzbblyW72hW7A6nGRDYBYlygQDwEYipodsrff0M2A4JBbO%2BCEHgPBjyb5IB0fsrOx1pxTQo6Seiak08Xpy6Z%2FN0zM6kitekC8rMNm2O&X-Amz-Signature=0719f3cec52ace680724e60ed2a56332f482c1b53cc334ed3ff2cfe9c88dfd95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFQXQW5N%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCcvXlXTFOxOUlEtQYIpyczcZNnhOJphTvxKjAqlssHjwIgWaL7QjAsc8%2Bfe4h%2FJ4zxcH1vym9dQ7gDAV78wkrwWcEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFJJDKyKf75d9u%2B0CrcA7j0%2F%2BBdsOpEMaF6uBt8it4NlaIVAT9pZksqHOgG7K5Wcu8C79RvZhggsK9BdvJTKb8fudIF5A1e8A3cFjXa0Lf9FXwQFayqRaELxjA0EO%2BjBENWa6k9qLMxxLYrFktiV8dI%2Fun7Y9ha%2BQJOTchDbUpqa2xOHIXTSeQeAjfsg84UrSs2SjgzXPyYfJvzUoaQJ07EMpVB9r4tp%2F6I9LUGo1aPVUm0vVCFUsFvu6Y%2F2gnhmb%2B0%2BdVmvxB8ZamntTYOsYSDOwGYOOvGjAQxm04CyGhC9JHvbpOXdZD%2BBCCk9vPHHbYsgznjnBUp9y7tiR7zXHzdSpJymhvf1dbxyYNadgRpQYsgFWQqi%2BsRNW40u7dL%2Bwj%2BvccjSCTI3%2BC%2BODAPLwMI6GoUbPLcew3vtIWSENEu2%2FBhm8sw64ZKylyIa2%2F7rtzpIiF%2Bru6BzDy4I8X5NMNQM8Rprl090mouwVyjq%2Bc8fFBcJfefglSgc5L95P963c0JqaqkF1DTCbQqPMIN7%2BUzv0GxGy%2Bh%2FFrIQxypQ33npCKvJeOc0%2FMzhWcNt4LKFpkF9sJyEokMMmvkR7MXnCIsH6FzR8YcccI5Fki5jmWVq8w6N5KpPqzxbvUmUNeIs%2BhnEBWqkFfMFUxEML%2F06MkGOqUBitxf7t%2FdCFwPHrirvpTqlPfAcn%2FIsHETqcZFbmL6wf0SzsMcwfUcRNpTNcaA23FPsQDKSfz%2F9SYp7lghQSMLtgHIWyRooFtFW0QaBtWqp3aWyi%2BgkZ5jgDzbblyW72hW7A6nGRDYBYlygQDwEYipodsrff0M2A4JBbO%2BCEHgPBjyb5IB0fsrOx1pxTQo6Seiak08Xpy6Z%2FN0zM6kitekC8rMNm2O&X-Amz-Signature=863b806a0ae8ad14eb6013efd0213f7e9f2e16c121469ed40f5de1bafec18adc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFQXQW5N%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCcvXlXTFOxOUlEtQYIpyczcZNnhOJphTvxKjAqlssHjwIgWaL7QjAsc8%2Bfe4h%2FJ4zxcH1vym9dQ7gDAV78wkrwWcEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFJJDKyKf75d9u%2B0CrcA7j0%2F%2BBdsOpEMaF6uBt8it4NlaIVAT9pZksqHOgG7K5Wcu8C79RvZhggsK9BdvJTKb8fudIF5A1e8A3cFjXa0Lf9FXwQFayqRaELxjA0EO%2BjBENWa6k9qLMxxLYrFktiV8dI%2Fun7Y9ha%2BQJOTchDbUpqa2xOHIXTSeQeAjfsg84UrSs2SjgzXPyYfJvzUoaQJ07EMpVB9r4tp%2F6I9LUGo1aPVUm0vVCFUsFvu6Y%2F2gnhmb%2B0%2BdVmvxB8ZamntTYOsYSDOwGYOOvGjAQxm04CyGhC9JHvbpOXdZD%2BBCCk9vPHHbYsgznjnBUp9y7tiR7zXHzdSpJymhvf1dbxyYNadgRpQYsgFWQqi%2BsRNW40u7dL%2Bwj%2BvccjSCTI3%2BC%2BODAPLwMI6GoUbPLcew3vtIWSENEu2%2FBhm8sw64ZKylyIa2%2F7rtzpIiF%2Bru6BzDy4I8X5NMNQM8Rprl090mouwVyjq%2Bc8fFBcJfefglSgc5L95P963c0JqaqkF1DTCbQqPMIN7%2BUzv0GxGy%2Bh%2FFrIQxypQ33npCKvJeOc0%2FMzhWcNt4LKFpkF9sJyEokMMmvkR7MXnCIsH6FzR8YcccI5Fki5jmWVq8w6N5KpPqzxbvUmUNeIs%2BhnEBWqkFfMFUxEML%2F06MkGOqUBitxf7t%2FdCFwPHrirvpTqlPfAcn%2FIsHETqcZFbmL6wf0SzsMcwfUcRNpTNcaA23FPsQDKSfz%2F9SYp7lghQSMLtgHIWyRooFtFW0QaBtWqp3aWyi%2BgkZ5jgDzbblyW72hW7A6nGRDYBYlygQDwEYipodsrff0M2A4JBbO%2BCEHgPBjyb5IB0fsrOx1pxTQo6Seiak08Xpy6Z%2FN0zM6kitekC8rMNm2O&X-Amz-Signature=b887b75c097f0d6ec5fdf54cfe1cf8fc50bdfc540a8d8216c70eac04bdf12d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES2QH7S%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDMQKoZk0QO%2BgEa9%2FGiKZPo1hwYo2hF1a%2FVxamTH0PZdwIgfQym2Q5QWpkUqi1TGLBszse7QF2hRAXFlHZ3EHu0CKcqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkKwiXeA8O9%2BvCP6ircA8cOnt6rP7ok1Ta3XxYqm0eafguTOO%2FpwRmnJ8f5irfXSavASDk7JELYZrkn8qLrzohnBUZ%2FJXMWd%2B9%2B%2BXfQRCdnZAc39GELGYape9x%2FFKoblYw5oHei2YrAG9T3H1FcEdsqnN5Av%2FKNbSHm00DabpPw3b0hJNGIYy8ERToEXfbV6044NP9OcAAvrMMbb1Hn%2FRpvJFRdQzojpReiicOS%2FQD8Mz%2FlyEH1afLrf0Uaghtmy0UwkoYDVUlZ8K%2F%2Bi%2FfsENUCrnOm6LrYrx3eBuGjAyJ%2FNXplPYComTCnwXB0zBcV9ItkNSGCP6%2FzAhU6jv9jxQ%2FP5wA7kBTV%2F%2BzMhGhntgVXeFKlGtJH1oBSyIMG25uhek48OBor41P1uuBrlr4Z%2FC%2FLpHJnYRb6Y4Aq8i1oU%2FkAazRPVRNvp8IbABVxfAzu5vDtXf4BsvikbbbMsguOSUYpl98oU9Porb0KXnpwnOu%2Fl%2Fa%2FokWTT1vGH6jkItXpmgWrUPHvbmzEaOcT9l2hvi8jWLob8thEPNXmJFd6YVCv6PKtzTneA8%2FJvarQmGND5vn6AWnZOnrF5HlwzkwiGHtT6NBJFLYHrMkRU9fe7MGAefZbeXGzF8gLKabXaAnjQHyOVc6FWb8ZUl7EMNrz6MkGOqUBVYYmvb8HDEF3iodnRWmlvG5KLymNMdxD5La4aJgsNQN7Z%2Fa0sTpxQOk2WPIXdoemAA4wryJP63Z8mDV9hHJLK%2FbB52DapByn%2BGDZUF9MPz1rhZiVU8CK1LzOo6oqe9sb0%2B5BM1Wb17UsSEIHdc4NDNHPkrEZN6hDz8hsY8Lh8lOsEfdxp%2BhGj7lHCbBITD2%2BSv%2FUQqim7CWwf70ZmKUVFS4RU9p5&X-Amz-Signature=119a0e6be539da369d9b1c1b866bb5f0a1b3b4004f421f40ae4d097840d7841c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES2QH7S%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDMQKoZk0QO%2BgEa9%2FGiKZPo1hwYo2hF1a%2FVxamTH0PZdwIgfQym2Q5QWpkUqi1TGLBszse7QF2hRAXFlHZ3EHu0CKcqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkKwiXeA8O9%2BvCP6ircA8cOnt6rP7ok1Ta3XxYqm0eafguTOO%2FpwRmnJ8f5irfXSavASDk7JELYZrkn8qLrzohnBUZ%2FJXMWd%2B9%2B%2BXfQRCdnZAc39GELGYape9x%2FFKoblYw5oHei2YrAG9T3H1FcEdsqnN5Av%2FKNbSHm00DabpPw3b0hJNGIYy8ERToEXfbV6044NP9OcAAvrMMbb1Hn%2FRpvJFRdQzojpReiicOS%2FQD8Mz%2FlyEH1afLrf0Uaghtmy0UwkoYDVUlZ8K%2F%2Bi%2FfsENUCrnOm6LrYrx3eBuGjAyJ%2FNXplPYComTCnwXB0zBcV9ItkNSGCP6%2FzAhU6jv9jxQ%2FP5wA7kBTV%2F%2BzMhGhntgVXeFKlGtJH1oBSyIMG25uhek48OBor41P1uuBrlr4Z%2FC%2FLpHJnYRb6Y4Aq8i1oU%2FkAazRPVRNvp8IbABVxfAzu5vDtXf4BsvikbbbMsguOSUYpl98oU9Porb0KXnpwnOu%2Fl%2Fa%2FokWTT1vGH6jkItXpmgWrUPHvbmzEaOcT9l2hvi8jWLob8thEPNXmJFd6YVCv6PKtzTneA8%2FJvarQmGND5vn6AWnZOnrF5HlwzkwiGHtT6NBJFLYHrMkRU9fe7MGAefZbeXGzF8gLKabXaAnjQHyOVc6FWb8ZUl7EMNrz6MkGOqUBVYYmvb8HDEF3iodnRWmlvG5KLymNMdxD5La4aJgsNQN7Z%2Fa0sTpxQOk2WPIXdoemAA4wryJP63Z8mDV9hHJLK%2FbB52DapByn%2BGDZUF9MPz1rhZiVU8CK1LzOo6oqe9sb0%2B5BM1Wb17UsSEIHdc4NDNHPkrEZN6hDz8hsY8Lh8lOsEfdxp%2BhGj7lHCbBITD2%2BSv%2FUQqim7CWwf70ZmKUVFS4RU9p5&X-Amz-Signature=841a310d15e4ca9ecf86fb6021c2a89cf2b336ad99d85e4c74188e13811d353f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES2QH7S%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDMQKoZk0QO%2BgEa9%2FGiKZPo1hwYo2hF1a%2FVxamTH0PZdwIgfQym2Q5QWpkUqi1TGLBszse7QF2hRAXFlHZ3EHu0CKcqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkKwiXeA8O9%2BvCP6ircA8cOnt6rP7ok1Ta3XxYqm0eafguTOO%2FpwRmnJ8f5irfXSavASDk7JELYZrkn8qLrzohnBUZ%2FJXMWd%2B9%2B%2BXfQRCdnZAc39GELGYape9x%2FFKoblYw5oHei2YrAG9T3H1FcEdsqnN5Av%2FKNbSHm00DabpPw3b0hJNGIYy8ERToEXfbV6044NP9OcAAvrMMbb1Hn%2FRpvJFRdQzojpReiicOS%2FQD8Mz%2FlyEH1afLrf0Uaghtmy0UwkoYDVUlZ8K%2F%2Bi%2FfsENUCrnOm6LrYrx3eBuGjAyJ%2FNXplPYComTCnwXB0zBcV9ItkNSGCP6%2FzAhU6jv9jxQ%2FP5wA7kBTV%2F%2BzMhGhntgVXeFKlGtJH1oBSyIMG25uhek48OBor41P1uuBrlr4Z%2FC%2FLpHJnYRb6Y4Aq8i1oU%2FkAazRPVRNvp8IbABVxfAzu5vDtXf4BsvikbbbMsguOSUYpl98oU9Porb0KXnpwnOu%2Fl%2Fa%2FokWTT1vGH6jkItXpmgWrUPHvbmzEaOcT9l2hvi8jWLob8thEPNXmJFd6YVCv6PKtzTneA8%2FJvarQmGND5vn6AWnZOnrF5HlwzkwiGHtT6NBJFLYHrMkRU9fe7MGAefZbeXGzF8gLKabXaAnjQHyOVc6FWb8ZUl7EMNrz6MkGOqUBVYYmvb8HDEF3iodnRWmlvG5KLymNMdxD5La4aJgsNQN7Z%2Fa0sTpxQOk2WPIXdoemAA4wryJP63Z8mDV9hHJLK%2FbB52DapByn%2BGDZUF9MPz1rhZiVU8CK1LzOo6oqe9sb0%2B5BM1Wb17UsSEIHdc4NDNHPkrEZN6hDz8hsY8Lh8lOsEfdxp%2BhGj7lHCbBITD2%2BSv%2FUQqim7CWwf70ZmKUVFS4RU9p5&X-Amz-Signature=f4af7414edd318129465bdc0003594812638fd894fe7d94c8114dd3713fe5829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES2QH7S%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDMQKoZk0QO%2BgEa9%2FGiKZPo1hwYo2hF1a%2FVxamTH0PZdwIgfQym2Q5QWpkUqi1TGLBszse7QF2hRAXFlHZ3EHu0CKcqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkKwiXeA8O9%2BvCP6ircA8cOnt6rP7ok1Ta3XxYqm0eafguTOO%2FpwRmnJ8f5irfXSavASDk7JELYZrkn8qLrzohnBUZ%2FJXMWd%2B9%2B%2BXfQRCdnZAc39GELGYape9x%2FFKoblYw5oHei2YrAG9T3H1FcEdsqnN5Av%2FKNbSHm00DabpPw3b0hJNGIYy8ERToEXfbV6044NP9OcAAvrMMbb1Hn%2FRpvJFRdQzojpReiicOS%2FQD8Mz%2FlyEH1afLrf0Uaghtmy0UwkoYDVUlZ8K%2F%2Bi%2FfsENUCrnOm6LrYrx3eBuGjAyJ%2FNXplPYComTCnwXB0zBcV9ItkNSGCP6%2FzAhU6jv9jxQ%2FP5wA7kBTV%2F%2BzMhGhntgVXeFKlGtJH1oBSyIMG25uhek48OBor41P1uuBrlr4Z%2FC%2FLpHJnYRb6Y4Aq8i1oU%2FkAazRPVRNvp8IbABVxfAzu5vDtXf4BsvikbbbMsguOSUYpl98oU9Porb0KXnpwnOu%2Fl%2Fa%2FokWTT1vGH6jkItXpmgWrUPHvbmzEaOcT9l2hvi8jWLob8thEPNXmJFd6YVCv6PKtzTneA8%2FJvarQmGND5vn6AWnZOnrF5HlwzkwiGHtT6NBJFLYHrMkRU9fe7MGAefZbeXGzF8gLKabXaAnjQHyOVc6FWb8ZUl7EMNrz6MkGOqUBVYYmvb8HDEF3iodnRWmlvG5KLymNMdxD5La4aJgsNQN7Z%2Fa0sTpxQOk2WPIXdoemAA4wryJP63Z8mDV9hHJLK%2FbB52DapByn%2BGDZUF9MPz1rhZiVU8CK1LzOo6oqe9sb0%2B5BM1Wb17UsSEIHdc4NDNHPkrEZN6hDz8hsY8Lh8lOsEfdxp%2BhGj7lHCbBITD2%2BSv%2FUQqim7CWwf70ZmKUVFS4RU9p5&X-Amz-Signature=6330592a883d10ce2f52e0265a4a5ea0b39a510fbcaa8b46f561e06a8e412d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES2QH7S%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDMQKoZk0QO%2BgEa9%2FGiKZPo1hwYo2hF1a%2FVxamTH0PZdwIgfQym2Q5QWpkUqi1TGLBszse7QF2hRAXFlHZ3EHu0CKcqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkKwiXeA8O9%2BvCP6ircA8cOnt6rP7ok1Ta3XxYqm0eafguTOO%2FpwRmnJ8f5irfXSavASDk7JELYZrkn8qLrzohnBUZ%2FJXMWd%2B9%2B%2BXfQRCdnZAc39GELGYape9x%2FFKoblYw5oHei2YrAG9T3H1FcEdsqnN5Av%2FKNbSHm00DabpPw3b0hJNGIYy8ERToEXfbV6044NP9OcAAvrMMbb1Hn%2FRpvJFRdQzojpReiicOS%2FQD8Mz%2FlyEH1afLrf0Uaghtmy0UwkoYDVUlZ8K%2F%2Bi%2FfsENUCrnOm6LrYrx3eBuGjAyJ%2FNXplPYComTCnwXB0zBcV9ItkNSGCP6%2FzAhU6jv9jxQ%2FP5wA7kBTV%2F%2BzMhGhntgVXeFKlGtJH1oBSyIMG25uhek48OBor41P1uuBrlr4Z%2FC%2FLpHJnYRb6Y4Aq8i1oU%2FkAazRPVRNvp8IbABVxfAzu5vDtXf4BsvikbbbMsguOSUYpl98oU9Porb0KXnpwnOu%2Fl%2Fa%2FokWTT1vGH6jkItXpmgWrUPHvbmzEaOcT9l2hvi8jWLob8thEPNXmJFd6YVCv6PKtzTneA8%2FJvarQmGND5vn6AWnZOnrF5HlwzkwiGHtT6NBJFLYHrMkRU9fe7MGAefZbeXGzF8gLKabXaAnjQHyOVc6FWb8ZUl7EMNrz6MkGOqUBVYYmvb8HDEF3iodnRWmlvG5KLymNMdxD5La4aJgsNQN7Z%2Fa0sTpxQOk2WPIXdoemAA4wryJP63Z8mDV9hHJLK%2FbB52DapByn%2BGDZUF9MPz1rhZiVU8CK1LzOo6oqe9sb0%2B5BM1Wb17UsSEIHdc4NDNHPkrEZN6hDz8hsY8Lh8lOsEfdxp%2BhGj7lHCbBITD2%2BSv%2FUQqim7CWwf70ZmKUVFS4RU9p5&X-Amz-Signature=73ccb5db2bf5e2e1fb5adbd2c3a625ce1448127edecbc45edef73223711fb093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JCNBJK7%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIFciT8Ty97XApwFPk0GuXF4HurOUimy8okABECXkPR%2BGAiBsh0XKD4qFw4D6w%2BA%2Fge6dMPtH%2BDQ9iKpzGSotmeHTzSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0PYFuHY0hWo2BO5kKtwDCz28JnJU5U509ZNsH%2Bx9aarMC4tAA1UBdjam1COka5uU9ek60wDR81JjgeUrrFEWVOHCRNz5jB9EZ2pXeK%2FU5s2wH4cyL61mMTyRqwqBo%2BjCROlX2N9bIpqt3nKnA%2FS7o0mb6malBmU7xtV93NFJDQfz28kOghXxQrZi%2F91Du0nDwsvvnlLSRHJXL8TQGnKj33LvhrF8aV9ULwW8oh%2Ff7xC85zUcHsIjlHdUo64Bt5bqvK8oQCvIE9uMUBRrMDModI6PN4IAdhZsIkNWQUzSbiHyzQT5bq29Q3lReOZvW8xFM29s%2Bb3SVEy1zLQRdXpSK081KpE1vzu6rT%2FaVDYEoI8kPXh8DabRiTUc2zAV8pZToeLfzjAdF6N8dluqt%2FNZiDzfpED6kjkJoyNSGaitQ7WJcMqA26d8dncquZxohAzGzESN%2F7FZ%2FWq3V3G7iLrfQGwUA5MdbXGUir4%2BRvY5WtYP8Im4wjwsVetbZzGKlsBPD4vPrhMOchr9N5xJUl%2BnfWeaxedvV8u%2BUweeqixdwqDMPu7lW3t2aogSx5t9vedAEfuW89b3lTTb%2Bm4s%2BKOULazIZnbtMkeWstZtNe6jrpOMOks%2FlESOo2BsrFqrs7oMIJ3PO9S5%2F1T1iVAw3vPoyQY6pgFbUWAB%2F2n09Zu8NJIEjKscEFx%2BYjoNKrgvU92jXa4dUC1rYf2ZMJWR1XWSKnOlMun0JhiJcVrg0C%2FVHzvf9C2p%2B4J9iU1wLt1j9BQRcDHw5viWPAMgcikSkXGZ3Wz8V07yVTGm%2BYLX8dViOQagvPExhGe5TXMFV1q8CxGPok9NSx8R%2F9R0BaVQ4FPLHHiDQoX4q7JELDmhbYQDAm%2FbhF%2FC2rbWajZR&X-Amz-Signature=da6949c9cc2683835916bfbc1c9bc69c0b108fe06809173190f41de543cd494b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JCNBJK7%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIFciT8Ty97XApwFPk0GuXF4HurOUimy8okABECXkPR%2BGAiBsh0XKD4qFw4D6w%2BA%2Fge6dMPtH%2BDQ9iKpzGSotmeHTzSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0PYFuHY0hWo2BO5kKtwDCz28JnJU5U509ZNsH%2Bx9aarMC4tAA1UBdjam1COka5uU9ek60wDR81JjgeUrrFEWVOHCRNz5jB9EZ2pXeK%2FU5s2wH4cyL61mMTyRqwqBo%2BjCROlX2N9bIpqt3nKnA%2FS7o0mb6malBmU7xtV93NFJDQfz28kOghXxQrZi%2F91Du0nDwsvvnlLSRHJXL8TQGnKj33LvhrF8aV9ULwW8oh%2Ff7xC85zUcHsIjlHdUo64Bt5bqvK8oQCvIE9uMUBRrMDModI6PN4IAdhZsIkNWQUzSbiHyzQT5bq29Q3lReOZvW8xFM29s%2Bb3SVEy1zLQRdXpSK081KpE1vzu6rT%2FaVDYEoI8kPXh8DabRiTUc2zAV8pZToeLfzjAdF6N8dluqt%2FNZiDzfpED6kjkJoyNSGaitQ7WJcMqA26d8dncquZxohAzGzESN%2F7FZ%2FWq3V3G7iLrfQGwUA5MdbXGUir4%2BRvY5WtYP8Im4wjwsVetbZzGKlsBPD4vPrhMOchr9N5xJUl%2BnfWeaxedvV8u%2BUweeqixdwqDMPu7lW3t2aogSx5t9vedAEfuW89b3lTTb%2Bm4s%2BKOULazIZnbtMkeWstZtNe6jrpOMOks%2FlESOo2BsrFqrs7oMIJ3PO9S5%2F1T1iVAw3vPoyQY6pgFbUWAB%2F2n09Zu8NJIEjKscEFx%2BYjoNKrgvU92jXa4dUC1rYf2ZMJWR1XWSKnOlMun0JhiJcVrg0C%2FVHzvf9C2p%2B4J9iU1wLt1j9BQRcDHw5viWPAMgcikSkXGZ3Wz8V07yVTGm%2BYLX8dViOQagvPExhGe5TXMFV1q8CxGPok9NSx8R%2F9R0BaVQ4FPLHHiDQoX4q7JELDmhbYQDAm%2FbhF%2FC2rbWajZR&X-Amz-Signature=fbd11b92fc6dda3f3efb6d75e0deb0b98673d7318e77f043a7ad0c07c1e3924f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JCNBJK7%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIFciT8Ty97XApwFPk0GuXF4HurOUimy8okABECXkPR%2BGAiBsh0XKD4qFw4D6w%2BA%2Fge6dMPtH%2BDQ9iKpzGSotmeHTzSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0PYFuHY0hWo2BO5kKtwDCz28JnJU5U509ZNsH%2Bx9aarMC4tAA1UBdjam1COka5uU9ek60wDR81JjgeUrrFEWVOHCRNz5jB9EZ2pXeK%2FU5s2wH4cyL61mMTyRqwqBo%2BjCROlX2N9bIpqt3nKnA%2FS7o0mb6malBmU7xtV93NFJDQfz28kOghXxQrZi%2F91Du0nDwsvvnlLSRHJXL8TQGnKj33LvhrF8aV9ULwW8oh%2Ff7xC85zUcHsIjlHdUo64Bt5bqvK8oQCvIE9uMUBRrMDModI6PN4IAdhZsIkNWQUzSbiHyzQT5bq29Q3lReOZvW8xFM29s%2Bb3SVEy1zLQRdXpSK081KpE1vzu6rT%2FaVDYEoI8kPXh8DabRiTUc2zAV8pZToeLfzjAdF6N8dluqt%2FNZiDzfpED6kjkJoyNSGaitQ7WJcMqA26d8dncquZxohAzGzESN%2F7FZ%2FWq3V3G7iLrfQGwUA5MdbXGUir4%2BRvY5WtYP8Im4wjwsVetbZzGKlsBPD4vPrhMOchr9N5xJUl%2BnfWeaxedvV8u%2BUweeqixdwqDMPu7lW3t2aogSx5t9vedAEfuW89b3lTTb%2Bm4s%2BKOULazIZnbtMkeWstZtNe6jrpOMOks%2FlESOo2BsrFqrs7oMIJ3PO9S5%2F1T1iVAw3vPoyQY6pgFbUWAB%2F2n09Zu8NJIEjKscEFx%2BYjoNKrgvU92jXa4dUC1rYf2ZMJWR1XWSKnOlMun0JhiJcVrg0C%2FVHzvf9C2p%2B4J9iU1wLt1j9BQRcDHw5viWPAMgcikSkXGZ3Wz8V07yVTGm%2BYLX8dViOQagvPExhGe5TXMFV1q8CxGPok9NSx8R%2F9R0BaVQ4FPLHHiDQoX4q7JELDmhbYQDAm%2FbhF%2FC2rbWajZR&X-Amz-Signature=951b3d706dd8b14580db0fe5c2bf14ba1583ee32f268c38efbd55054f97fc46b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVUCQXS%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDm0TxLN2ZYexiYs8e%2FS71ukOVvVGQ9li9zdpviE%2BqW%2BgIhAOudc98cNQiSKh%2FnWCSnWL3bdoYXPcXsKDMNHCIu227oKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3Z8rYfrizSy%2B%2ButIq3AOANVv%2Fn8ABzLQU1N9O9SeUla1IVtyg3VkoLpc2BaJP1GX35yl5xUH4haaB55LQFqT3oyv50leJGL9LuPE777VvlKI5qgWsiIUqslUaOcxpPBE7Yz%2F3dLxu4pWJkbreCd3vN%2FtkO0dv6WsCE%2BVvObOWJirj%2BUIpq7aqCvuJj4ZnPO0UNlq6V96b8wkVx6K4sQxnkQ0vwxgqsWIJEQttTlI%2B4YKV00CmS%2B1XZoeb%2FF6p%2BPOyTx3uoAwSY6DCGVnNC3k38chV84T7MQ98evKQM3xXJv9PomZkZO57jDL7r9Q9RwnwLY3na0nrPIaLig%2BDS9oPKejDGNRg6DRZY7a%2FdKvhVne0ygwxaOdKRtM4pZ0Jfb0E1AcBxtpT%2FkIaXVhmKWO9VaQG8YKsluaQP%2BeFhJsfHolBxMJJt%2BCyg3zsn%2FK7AywIUIkl%2Fp9Daou6LXvxNQ%2FozJ%2B5RDlw36aGOyKd6O4FPffqPYKmXF5ICzB8EBsB8QGVGASnbXp0QYHTdlbURFrlXcaosGFWH653t%2Fbqgd4c27ociTFJE0EVQSvGxLGc2HSTheGxu72EY%2FEPqD1tzm9NCVCxWM3ISics6L6FqTolBRB3vNGjrKLeKYZGojkFWZ6yyC3e3RJ3cDnjSTCk9OjJBjqkAUQSPXW3xMC2MouBlEZygvAbKgtvXT4VyYTd4beDaNoCu%2Bv1P7BS%2BQ6jNuemXhmlDQrUUVMIzMlZ4kF9XWJ0I6R3yU5nvu47mIWAGFOx2jODN5Q8ebUM8ILeLT142AM2R2eSeTlkVfa809WtrNFKXCcVcpe%2BlSy2lW5s1hxJL48%2Bpqwl9aMZnReHRS3ZkSqcOZdlsAWvCZH%2FTBEAF1NkYKw4Yz4I&X-Amz-Signature=f6918260258fdd2a53d4076d2a990b354c95765b3c4baa1d85b8035a7c72e310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVUCQXS%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDm0TxLN2ZYexiYs8e%2FS71ukOVvVGQ9li9zdpviE%2BqW%2BgIhAOudc98cNQiSKh%2FnWCSnWL3bdoYXPcXsKDMNHCIu227oKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3Z8rYfrizSy%2B%2ButIq3AOANVv%2Fn8ABzLQU1N9O9SeUla1IVtyg3VkoLpc2BaJP1GX35yl5xUH4haaB55LQFqT3oyv50leJGL9LuPE777VvlKI5qgWsiIUqslUaOcxpPBE7Yz%2F3dLxu4pWJkbreCd3vN%2FtkO0dv6WsCE%2BVvObOWJirj%2BUIpq7aqCvuJj4ZnPO0UNlq6V96b8wkVx6K4sQxnkQ0vwxgqsWIJEQttTlI%2B4YKV00CmS%2B1XZoeb%2FF6p%2BPOyTx3uoAwSY6DCGVnNC3k38chV84T7MQ98evKQM3xXJv9PomZkZO57jDL7r9Q9RwnwLY3na0nrPIaLig%2BDS9oPKejDGNRg6DRZY7a%2FdKvhVne0ygwxaOdKRtM4pZ0Jfb0E1AcBxtpT%2FkIaXVhmKWO9VaQG8YKsluaQP%2BeFhJsfHolBxMJJt%2BCyg3zsn%2FK7AywIUIkl%2Fp9Daou6LXvxNQ%2FozJ%2B5RDlw36aGOyKd6O4FPffqPYKmXF5ICzB8EBsB8QGVGASnbXp0QYHTdlbURFrlXcaosGFWH653t%2Fbqgd4c27ociTFJE0EVQSvGxLGc2HSTheGxu72EY%2FEPqD1tzm9NCVCxWM3ISics6L6FqTolBRB3vNGjrKLeKYZGojkFWZ6yyC3e3RJ3cDnjSTCk9OjJBjqkAUQSPXW3xMC2MouBlEZygvAbKgtvXT4VyYTd4beDaNoCu%2Bv1P7BS%2BQ6jNuemXhmlDQrUUVMIzMlZ4kF9XWJ0I6R3yU5nvu47mIWAGFOx2jODN5Q8ebUM8ILeLT142AM2R2eSeTlkVfa809WtrNFKXCcVcpe%2BlSy2lW5s1hxJL48%2Bpqwl9aMZnReHRS3ZkSqcOZdlsAWvCZH%2FTBEAF1NkYKw4Yz4I&X-Amz-Signature=9855fde9d364c9ca895f1a6b95a408c3054c23742aa61b0f57e5c72883562225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RV2PIM%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIEqTkDjw3wePuOyl%2BCL9mXasFVFSl0wpspF9C2SM5YJGAiEAmIYSjUkNKQ4Wmf7AU6jeP1%2FEmrDhxV2hOLa2Cwm9kbYqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYpqk6VTTh0vcpZtircA7MLenSq9zhVO2fbr2f0RyPyxDELBXkyV0qRq0xWc048jTjiYozmkEpJIs4g7RU%2BS3znahRqL4g7sQros7LC4A00b1wgDi3d%2FI6YsFinhAdw71UKydLOWrQEXcQbRli3dJZNf4LnGPH5YbZA8MRKPIXVoXUtRWm61ZnUYJ91CcPg48ovqAFWwZ15U6dCoPnluTMt4XuaaIcCoaP5mHV8TEm8wn%2BSMROXheBDcFBVTO63ToTEdzUC5U%2BRYPcrEMELesqT%2FExH%2FYg191GRl49PKOLv0FUuiy%2FUrsGqM9%2BgQyH8R7qXfzCNclbi2W7%2F9mW5x4lYy1NYuXaL5m1U%2FO0KWIjqGFtkFmS5iKJQpC4WnGw8lgQK6xrA7MOawsQn7ti12CrTzrMaYkCb30vGQzSA3anHNJObKzP92fQFqFliUOqV9z4wFtyP3Qd%2BWh8JlN%2FF5o1eUNWn3oy02fJpyM4n8vAyNgsTbOqWx0Z3nc8A4psManSypJhONeKFIo839Z%2FyE435S3JUrLY6S7L3kDF3qZAVrIXNqlCArY9MtPJJdtqnW8EzggZZxRt3vtQN9OYYGg9RmJ4dJxaGH7xMQGRKDvyR79wurwKBFudyM3%2BeyDVvtwN3AAUoan3QV3VMMNrz6MkGOqUBMdUjwhhJQ8QqO0EQZnwIP5Fxc%2F9lMIXbMZzCgQwVNPr7UIeMu4UTIWXC%2FSgtEadtrnodLU5KWO9%2FmC0sI7sLV0opJPdH8busKChVlPPwSZb4%2Bzi44471zRl6fU1cpJBZtE4QB%2BbXIYo%2FYS2CEa0GkUn3QTBo5TCgSST4Rvf8kYaPMwjZdX78%2FnNgpwcrnQX5QRIFdLWK2De77xg6IvFTYHReepKF&X-Amz-Signature=af564cf3766ed47493a7a3a3e080d8df10bb0ebd969e845d4bc30b664a0e4245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RV2PIM%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIEqTkDjw3wePuOyl%2BCL9mXasFVFSl0wpspF9C2SM5YJGAiEAmIYSjUkNKQ4Wmf7AU6jeP1%2FEmrDhxV2hOLa2Cwm9kbYqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYpqk6VTTh0vcpZtircA7MLenSq9zhVO2fbr2f0RyPyxDELBXkyV0qRq0xWc048jTjiYozmkEpJIs4g7RU%2BS3znahRqL4g7sQros7LC4A00b1wgDi3d%2FI6YsFinhAdw71UKydLOWrQEXcQbRli3dJZNf4LnGPH5YbZA8MRKPIXVoXUtRWm61ZnUYJ91CcPg48ovqAFWwZ15U6dCoPnluTMt4XuaaIcCoaP5mHV8TEm8wn%2BSMROXheBDcFBVTO63ToTEdzUC5U%2BRYPcrEMELesqT%2FExH%2FYg191GRl49PKOLv0FUuiy%2FUrsGqM9%2BgQyH8R7qXfzCNclbi2W7%2F9mW5x4lYy1NYuXaL5m1U%2FO0KWIjqGFtkFmS5iKJQpC4WnGw8lgQK6xrA7MOawsQn7ti12CrTzrMaYkCb30vGQzSA3anHNJObKzP92fQFqFliUOqV9z4wFtyP3Qd%2BWh8JlN%2FF5o1eUNWn3oy02fJpyM4n8vAyNgsTbOqWx0Z3nc8A4psManSypJhONeKFIo839Z%2FyE435S3JUrLY6S7L3kDF3qZAVrIXNqlCArY9MtPJJdtqnW8EzggZZxRt3vtQN9OYYGg9RmJ4dJxaGH7xMQGRKDvyR79wurwKBFudyM3%2BeyDVvtwN3AAUoan3QV3VMMNrz6MkGOqUBMdUjwhhJQ8QqO0EQZnwIP5Fxc%2F9lMIXbMZzCgQwVNPr7UIeMu4UTIWXC%2FSgtEadtrnodLU5KWO9%2FmC0sI7sLV0opJPdH8busKChVlPPwSZb4%2Bzi44471zRl6fU1cpJBZtE4QB%2BbXIYo%2FYS2CEa0GkUn3QTBo5TCgSST4Rvf8kYaPMwjZdX78%2FnNgpwcrnQX5QRIFdLWK2De77xg6IvFTYHReepKF&X-Amz-Signature=82c3368936ed824492bf98ac17042d8a06e468d749405c47bf2cafbbed84f6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RV2PIM%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIEqTkDjw3wePuOyl%2BCL9mXasFVFSl0wpspF9C2SM5YJGAiEAmIYSjUkNKQ4Wmf7AU6jeP1%2FEmrDhxV2hOLa2Cwm9kbYqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYpqk6VTTh0vcpZtircA7MLenSq9zhVO2fbr2f0RyPyxDELBXkyV0qRq0xWc048jTjiYozmkEpJIs4g7RU%2BS3znahRqL4g7sQros7LC4A00b1wgDi3d%2FI6YsFinhAdw71UKydLOWrQEXcQbRli3dJZNf4LnGPH5YbZA8MRKPIXVoXUtRWm61ZnUYJ91CcPg48ovqAFWwZ15U6dCoPnluTMt4XuaaIcCoaP5mHV8TEm8wn%2BSMROXheBDcFBVTO63ToTEdzUC5U%2BRYPcrEMELesqT%2FExH%2FYg191GRl49PKOLv0FUuiy%2FUrsGqM9%2BgQyH8R7qXfzCNclbi2W7%2F9mW5x4lYy1NYuXaL5m1U%2FO0KWIjqGFtkFmS5iKJQpC4WnGw8lgQK6xrA7MOawsQn7ti12CrTzrMaYkCb30vGQzSA3anHNJObKzP92fQFqFliUOqV9z4wFtyP3Qd%2BWh8JlN%2FF5o1eUNWn3oy02fJpyM4n8vAyNgsTbOqWx0Z3nc8A4psManSypJhONeKFIo839Z%2FyE435S3JUrLY6S7L3kDF3qZAVrIXNqlCArY9MtPJJdtqnW8EzggZZxRt3vtQN9OYYGg9RmJ4dJxaGH7xMQGRKDvyR79wurwKBFudyM3%2BeyDVvtwN3AAUoan3QV3VMMNrz6MkGOqUBMdUjwhhJQ8QqO0EQZnwIP5Fxc%2F9lMIXbMZzCgQwVNPr7UIeMu4UTIWXC%2FSgtEadtrnodLU5KWO9%2FmC0sI7sLV0opJPdH8busKChVlPPwSZb4%2Bzi44471zRl6fU1cpJBZtE4QB%2BbXIYo%2FYS2CEa0GkUn3QTBo5TCgSST4Rvf8kYaPMwjZdX78%2FnNgpwcrnQX5QRIFdLWK2De77xg6IvFTYHReepKF&X-Amz-Signature=9574485366f4a392dfe7ff210b15c8704f02293aa0fb4053edc101477b393345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RV2PIM%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIEqTkDjw3wePuOyl%2BCL9mXasFVFSl0wpspF9C2SM5YJGAiEAmIYSjUkNKQ4Wmf7AU6jeP1%2FEmrDhxV2hOLa2Cwm9kbYqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYpqk6VTTh0vcpZtircA7MLenSq9zhVO2fbr2f0RyPyxDELBXkyV0qRq0xWc048jTjiYozmkEpJIs4g7RU%2BS3znahRqL4g7sQros7LC4A00b1wgDi3d%2FI6YsFinhAdw71UKydLOWrQEXcQbRli3dJZNf4LnGPH5YbZA8MRKPIXVoXUtRWm61ZnUYJ91CcPg48ovqAFWwZ15U6dCoPnluTMt4XuaaIcCoaP5mHV8TEm8wn%2BSMROXheBDcFBVTO63ToTEdzUC5U%2BRYPcrEMELesqT%2FExH%2FYg191GRl49PKOLv0FUuiy%2FUrsGqM9%2BgQyH8R7qXfzCNclbi2W7%2F9mW5x4lYy1NYuXaL5m1U%2FO0KWIjqGFtkFmS5iKJQpC4WnGw8lgQK6xrA7MOawsQn7ti12CrTzrMaYkCb30vGQzSA3anHNJObKzP92fQFqFliUOqV9z4wFtyP3Qd%2BWh8JlN%2FF5o1eUNWn3oy02fJpyM4n8vAyNgsTbOqWx0Z3nc8A4psManSypJhONeKFIo839Z%2FyE435S3JUrLY6S7L3kDF3qZAVrIXNqlCArY9MtPJJdtqnW8EzggZZxRt3vtQN9OYYGg9RmJ4dJxaGH7xMQGRKDvyR79wurwKBFudyM3%2BeyDVvtwN3AAUoan3QV3VMMNrz6MkGOqUBMdUjwhhJQ8QqO0EQZnwIP5Fxc%2F9lMIXbMZzCgQwVNPr7UIeMu4UTIWXC%2FSgtEadtrnodLU5KWO9%2FmC0sI7sLV0opJPdH8busKChVlPPwSZb4%2Bzi44471zRl6fU1cpJBZtE4QB%2BbXIYo%2FYS2CEa0GkUn3QTBo5TCgSST4Rvf8kYaPMwjZdX78%2FnNgpwcrnQX5QRIFdLWK2De77xg6IvFTYHReepKF&X-Amz-Signature=5eebf6cdc22d16b1ab4e057903ed443c8a98878238cc749126536286b15e9cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RV2PIM%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIEqTkDjw3wePuOyl%2BCL9mXasFVFSl0wpspF9C2SM5YJGAiEAmIYSjUkNKQ4Wmf7AU6jeP1%2FEmrDhxV2hOLa2Cwm9kbYqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYpqk6VTTh0vcpZtircA7MLenSq9zhVO2fbr2f0RyPyxDELBXkyV0qRq0xWc048jTjiYozmkEpJIs4g7RU%2BS3znahRqL4g7sQros7LC4A00b1wgDi3d%2FI6YsFinhAdw71UKydLOWrQEXcQbRli3dJZNf4LnGPH5YbZA8MRKPIXVoXUtRWm61ZnUYJ91CcPg48ovqAFWwZ15U6dCoPnluTMt4XuaaIcCoaP5mHV8TEm8wn%2BSMROXheBDcFBVTO63ToTEdzUC5U%2BRYPcrEMELesqT%2FExH%2FYg191GRl49PKOLv0FUuiy%2FUrsGqM9%2BgQyH8R7qXfzCNclbi2W7%2F9mW5x4lYy1NYuXaL5m1U%2FO0KWIjqGFtkFmS5iKJQpC4WnGw8lgQK6xrA7MOawsQn7ti12CrTzrMaYkCb30vGQzSA3anHNJObKzP92fQFqFliUOqV9z4wFtyP3Qd%2BWh8JlN%2FF5o1eUNWn3oy02fJpyM4n8vAyNgsTbOqWx0Z3nc8A4psManSypJhONeKFIo839Z%2FyE435S3JUrLY6S7L3kDF3qZAVrIXNqlCArY9MtPJJdtqnW8EzggZZxRt3vtQN9OYYGg9RmJ4dJxaGH7xMQGRKDvyR79wurwKBFudyM3%2BeyDVvtwN3AAUoan3QV3VMMNrz6MkGOqUBMdUjwhhJQ8QqO0EQZnwIP5Fxc%2F9lMIXbMZzCgQwVNPr7UIeMu4UTIWXC%2FSgtEadtrnodLU5KWO9%2FmC0sI7sLV0opJPdH8busKChVlPPwSZb4%2Bzi44471zRl6fU1cpJBZtE4QB%2BbXIYo%2FYS2CEa0GkUn3QTBo5TCgSST4Rvf8kYaPMwjZdX78%2FnNgpwcrnQX5QRIFdLWK2De77xg6IvFTYHReepKF&X-Amz-Signature=f121cbe357085b950ebff653f6656bf55a835aa1eeea07df1c66976ebeb90caf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4KSGWYS%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T040320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIDl2%2F6UX8lWqi9O79Cu0qZD%2BlvAqQ13yB3atV17HUXN2AiAEw4rz2uzjApU9%2BZK2I5%2BDI%2BKOWPvyasUCLZHx52evICqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOahxLdoxMtiBqWxzKtwDFB%2FmiPnxb9ZoyapcnOoMgBvMTdtjeYGoZreTykzibw27%2BeD7aLVLfDfJ52K%2BMEpu5vVZTE9xrqLWbGX2XaA80tzZ6H%2FdBT9Qf2wzYTpiwIZgl1Nm1p7PMKbiuSUVqFwpDavcULKpgAe5Ys0oStfm3JflZiMqvZ7QE5rzxg%2FwDfEMCx8kHQ2XEeUaFOD0WKn%2FBnmB3EXAV5%2BLEJw3NuxFqjEvg%2FlUCOU22tVTN5ayAya0I7gUke3XAbIquRBTsL5QLMwq9iQDtUo9TUysgFMMPEX1B4LYdYIG5TDe3klUMXy62QmtsL2A088DmjkN9SvBb%2FcfRODGqcgNyjaw%2F4Xvq6WUYiKsTi2xxRzhzMqa0ZDf%2FddonLtHHzjdC33MocSGKobROHlf5%2FReMwztxIxvMG8myM0f5zV7XXlfGxb%2FC%2FpTY9nEzumy8J2TM4v%2FcoTzQSpTL8zi0VIPwuEpkl7M0wFhc466hE76XTZnDkZxkYFk3GxIlLzRLRaHA6HPr4LaWOmjovvUFVlWH9oUeNETE8PzyAeSw9BbGBXRh3h9RP6ZeWhLIndIKSShH6KRgukUppIe3xgyWjxdcfm%2BZuag1298aLNfP8fQ%2FLTuXrztM60G2FsUuD8k8%2FAf8yQwzPToyQY6pgGNTSoJc5AP2i2fJ5WbjB%2FRZXzFmI8%2FKQCUZvtSyPzk%2Fn1h%2B94nocBZhZK65o9ChGdOxF5HBLMXST%2BKZOj6GsBL%2BTUg3tM38LbM2LcGpjcs0ehIyAnbSBF%2B%2B4TDgO6xQbItWA6pLGV5z469BwoZgZXFewEvo3jWJAEgcJeKuKl2d%2BVhO9aWsHyzX3LsTgrgv314QvVLS%2F61Z0lzVf%2ByuPRmjOI0Rgov&X-Amz-Signature=1226527f3fc0fd1a1b8747493cf104c2f885a47ff251766f84ce214baf78173c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

