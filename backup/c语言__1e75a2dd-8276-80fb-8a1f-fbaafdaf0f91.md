
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AY7QBLM%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTdzWax3tmFd6yrAwPOvhpfOO5SSj%2Bm0WjjDes0FqcKAIhAPTNLLpzY5s0HgzcoHNLrZjMQMZLUgrHlJP%2BYRvXU5pJKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNniakJpZTLMa%2FPqAq3AMyUqtZo3QnALmqnKZM9Z3Gez9FhtD2zl3BRiwOExBLW86GTKq1wieKvx03vvWy79ZFwWd%2Fwrc%2B5U%2Bogg6R5yRxXBt6WuwjIZrY8ZFeP9c7hDY5OAleWRg29vPDKLXas2PToUC6phpTBS3VdMkQTKTdesKkcIXmNSUWqSTds78SWEVc4SIQAc93obKDWxbBkr8q8b71%2FA%2FxvfLMWR21cAeMqIUhPY8w42kyBAlF7AuY7%2F%2FmvHPzSH%2FhMp4Oa0Z8HyGMjuc98crhA5ELUAis1qk8I%2FHKQS3nze0%2FZSFo6xpYUR3TkeZownWBAN4SySqFGU8S78DwcvV2H%2BVRzFbFPjxJCpWxMm3D3F%2BlW7UgT7Qryvg9cwOYag06DoiiG0iXvRDzdAS0%2FVRroEIDMnLXoCO9xLwvcdh2sMHhSvN9ECNrL5rRoiqLyzG8Q%2Fr9lZSou8%2BfP%2BNu5cocRWVwY5nD8muVs%2FNn33aZoErf%2BqN05QM%2BBWaBUEtr6jFWws8etG1Mh5l%2BG8Zr2Eks7rjEkOvOYZQgPjnkwj%2Fj%2BHeCBnuSkjM1xhmDuEC9RLyT7zfqi27ZBh8QNuBPScBWwCekRk0Dn%2FsVy5bD58cC0VKT11uI%2BV%2Beq9qvELTqsWA8Pzv%2BUDCEhPbLBjqkAc7SvBppr%2FzO9CxYhKyKnaduOh8WFQAtuYyFA7EnmEYd48avtOGnGqT3xRpM63B55o0e%2B%2FhKu7ZG2b%2B7yEWN4PH43jsV7jiWm7CS6bg8341%2FVv85FCuH3SFX8LEdf6W4hg81zn3IG8FCVin2%2F8hEd1qWwbbNE%2FTAdLt9PaimdmbxpaYQOqPYxpJDJQeM1Pog31ebAf05UQxczkj3Ia4Qb81vuUNz&X-Amz-Signature=d6d4c40fcdd5f440463784048bd2758b5b1c3b809b10a08bb661b1a9db310dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBTK63XR%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsRZaj3pKvRa7RjWcYFoQpCGBZdQhKbhIPJ%2B7a%2B2W52AiB%2Fp0kVKUqP71bRPfmCJIQBzsWjc%2FyDv0%2BchoFXAr6u0iqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfVv%2FVvXmqCUI7JFsKtwDFQvqGiUjYZimd70%2FVU3lG0uqaFJYQ%2BkFjNcbPusbfJmmo69s3F%2BcuEcDq57%2Bv7EZ5LRx088JoTYDo2pFu%2FdlXK3eG7XhJk0%2FlEGIkYvh8LB6etlZpTwou1hiKc13iMXzE7HmoAWIzD3UBIucctRmFmXZ9zy4NfSYVSS%2Blj5RVsikqqVulJgWs5f0S3arm9waRu4Ye2GCwCpP35nVJUIUZD7Zpwu2nuuYJLTgmUfZIFvxcJEAwO66vVjLhDbfnBNgJ%2FgEQ8cJRFf6oyZKvT8HgpsSqCTk02TwckCjybjhqe8gU54yLjl7PxKbOlYT5IrF967aBJneb1FpUGzbYjd1M4QxXehLtu10jDVxS4OgAYutktQYG9A1WNS6uFxBQA2Or%2Bavvib93fkDNTwaeaO4d8qrhnMsrj7TXeu2tqXoonVQGncvyudFydFKr3nVoprjbAOc7bfGsHjLySoS4KLk%2BsiBkQbMEIQrClabmI7nXi%2BIjq5NVWnyt7JHdZQD5VRb1PULnHjaQOrFDEPn3jrbSzR7eoFtMaWgdersq2F1rtk54nmPVl4JU9%2B8ZzoXPIrU1iEvyKniWoC4dyuxQqv4cPMiClnLvweGfymoFQpveAG5z86w1q6rFik0qSAwlYT2ywY6pgG78tjPnrgVph8Rez5L5Q7fQHqEs9Xt0VVeClf3nGIz6QhzxL4Dc90vlNsYtlPLumMny%2BrwmpEEfa2lU5q0RtrvRkpiM%2B4B6yJm6mi5CdJhVXR%2FK3%2BpVTRYhVD%2FxHg0qbx6zTUNpG%2FXMHYTKP8%2BITwqmqPhE%2FScoF2e78zb%2BRCrH37JfaTRqsFHyV5WosjevYg%2BsexbSFrIWJkeDPwZyYvqKwlWM8v1&X-Amz-Signature=3c7dfab86e4ab1340ec73be0c40d21ead01615159dc24e04a90396a4ea20ecdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBTK63XR%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsRZaj3pKvRa7RjWcYFoQpCGBZdQhKbhIPJ%2B7a%2B2W52AiB%2Fp0kVKUqP71bRPfmCJIQBzsWjc%2FyDv0%2BchoFXAr6u0iqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfVv%2FVvXmqCUI7JFsKtwDFQvqGiUjYZimd70%2FVU3lG0uqaFJYQ%2BkFjNcbPusbfJmmo69s3F%2BcuEcDq57%2Bv7EZ5LRx088JoTYDo2pFu%2FdlXK3eG7XhJk0%2FlEGIkYvh8LB6etlZpTwou1hiKc13iMXzE7HmoAWIzD3UBIucctRmFmXZ9zy4NfSYVSS%2Blj5RVsikqqVulJgWs5f0S3arm9waRu4Ye2GCwCpP35nVJUIUZD7Zpwu2nuuYJLTgmUfZIFvxcJEAwO66vVjLhDbfnBNgJ%2FgEQ8cJRFf6oyZKvT8HgpsSqCTk02TwckCjybjhqe8gU54yLjl7PxKbOlYT5IrF967aBJneb1FpUGzbYjd1M4QxXehLtu10jDVxS4OgAYutktQYG9A1WNS6uFxBQA2Or%2Bavvib93fkDNTwaeaO4d8qrhnMsrj7TXeu2tqXoonVQGncvyudFydFKr3nVoprjbAOc7bfGsHjLySoS4KLk%2BsiBkQbMEIQrClabmI7nXi%2BIjq5NVWnyt7JHdZQD5VRb1PULnHjaQOrFDEPn3jrbSzR7eoFtMaWgdersq2F1rtk54nmPVl4JU9%2B8ZzoXPIrU1iEvyKniWoC4dyuxQqv4cPMiClnLvweGfymoFQpveAG5z86w1q6rFik0qSAwlYT2ywY6pgG78tjPnrgVph8Rez5L5Q7fQHqEs9Xt0VVeClf3nGIz6QhzxL4Dc90vlNsYtlPLumMny%2BrwmpEEfa2lU5q0RtrvRkpiM%2B4B6yJm6mi5CdJhVXR%2FK3%2BpVTRYhVD%2FxHg0qbx6zTUNpG%2FXMHYTKP8%2BITwqmqPhE%2FScoF2e78zb%2BRCrH37JfaTRqsFHyV5WosjevYg%2BsexbSFrIWJkeDPwZyYvqKwlWM8v1&X-Amz-Signature=a7f870b15c7bd1c8336c0e4fd452dcf17f7a2231968d072ed4f73fab061db540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA4PYYID%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERdT1H1OzojQVFiIfoI26Z2%2FcPgbc10Yyq%2F0wscWCQxAiEA8nRv%2BFDhXoAsUfaF86IwpUhwaTh6tQUIg0A29HPr2pUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg%2FVeYwRSoNsxa2%2FyrcA%2F5EogOdhyA4SiflBGgF%2Bg%2BKhGYVCavQ7OUBuYO8pr2ftQIHZ2KTU0P4Tl36Vh2slH7YIdddlEszU71TJC63xH%2BkxPMxau302p6px8G2x7NSmvb%2B4IJm4ceSCGf3UFGznaj4eAaNpPk83r2yvsd3TS2Nc3WuzUqczCvYYfSXyffvDXWqaQWwczV%2BfNDTpUTBmX6d0qvYrGnJlSkn4Rx%2Fu2mVvLKmls6KZQNEU8L8DPQNPMfdN82MnQJLZ6eouC9UNFkZTmK1%2BVWbW%2BocH4kmt58CoerUmISN6MO5iatwMSVs%2B7mEo0shG8qHLyQx%2FXaxuR9MuU5QE0ynNtmQhkp8kY8bo3Qiq3RHKnVFr3jWnR3y8CYSG5zHZF4T%2Fno3%2FStI%2FDaNNJURqObmJOhkP%2BttbUZMWamBeay3INhMUJ8HXE03%2BRH8et660rV7hOsEQNEUyF24g3c0w2zOILPIKpGEIwSeLZpo6EphVLFdcje4BvXp2Y8lLw8naB%2BQ6WOnh6FRuwrbpHV7OfRwzF2372a36jDX980MPzFFBXrIoRc91LajNlRxa11GfLWJE8DawohrhCjODd5gcX98IM%2BqrA1js%2F8LnDdT65ld%2B4ybCWt4GsLYpeQVZFQGOdPkSUSHMIqE9ssGOqUBv1mri5CVPGmUIJiiuX2aB1jcpJDdKVkGUSBJPyXfqM3245TOuo1YKxQAAsXybuUT01VCUoKpI3rBjpUg65ywFF0RpueCnDNmm2GAxtutBOFHtM41odMhKvFDnlYEAtFfRWPSjLDQEtSnfI8aAeA%2BMCTfDIeFGYylohzin0kVc7YoY%2FFducXN5%2BGXX66tG6cwHOFgosY3rt5MiH5x%2FADWl%2BSHfrA%2F&X-Amz-Signature=0a17e0d8fd9970394fe0817f87c696719a48406436d8043e2eb921a0f9fcf956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA4PYYID%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERdT1H1OzojQVFiIfoI26Z2%2FcPgbc10Yyq%2F0wscWCQxAiEA8nRv%2BFDhXoAsUfaF86IwpUhwaTh6tQUIg0A29HPr2pUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg%2FVeYwRSoNsxa2%2FyrcA%2F5EogOdhyA4SiflBGgF%2Bg%2BKhGYVCavQ7OUBuYO8pr2ftQIHZ2KTU0P4Tl36Vh2slH7YIdddlEszU71TJC63xH%2BkxPMxau302p6px8G2x7NSmvb%2B4IJm4ceSCGf3UFGznaj4eAaNpPk83r2yvsd3TS2Nc3WuzUqczCvYYfSXyffvDXWqaQWwczV%2BfNDTpUTBmX6d0qvYrGnJlSkn4Rx%2Fu2mVvLKmls6KZQNEU8L8DPQNPMfdN82MnQJLZ6eouC9UNFkZTmK1%2BVWbW%2BocH4kmt58CoerUmISN6MO5iatwMSVs%2B7mEo0shG8qHLyQx%2FXaxuR9MuU5QE0ynNtmQhkp8kY8bo3Qiq3RHKnVFr3jWnR3y8CYSG5zHZF4T%2Fno3%2FStI%2FDaNNJURqObmJOhkP%2BttbUZMWamBeay3INhMUJ8HXE03%2BRH8et660rV7hOsEQNEUyF24g3c0w2zOILPIKpGEIwSeLZpo6EphVLFdcje4BvXp2Y8lLw8naB%2BQ6WOnh6FRuwrbpHV7OfRwzF2372a36jDX980MPzFFBXrIoRc91LajNlRxa11GfLWJE8DawohrhCjODd5gcX98IM%2BqrA1js%2F8LnDdT65ld%2B4ybCWt4GsLYpeQVZFQGOdPkSUSHMIqE9ssGOqUBv1mri5CVPGmUIJiiuX2aB1jcpJDdKVkGUSBJPyXfqM3245TOuo1YKxQAAsXybuUT01VCUoKpI3rBjpUg65ywFF0RpueCnDNmm2GAxtutBOFHtM41odMhKvFDnlYEAtFfRWPSjLDQEtSnfI8aAeA%2BMCTfDIeFGYylohzin0kVc7YoY%2FFducXN5%2BGXX66tG6cwHOFgosY3rt5MiH5x%2FADWl%2BSHfrA%2F&X-Amz-Signature=4bc38533ffd2094b49a726f3493ae9c6a401038541ce5a9e309cae707067a16f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA4PYYID%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERdT1H1OzojQVFiIfoI26Z2%2FcPgbc10Yyq%2F0wscWCQxAiEA8nRv%2BFDhXoAsUfaF86IwpUhwaTh6tQUIg0A29HPr2pUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg%2FVeYwRSoNsxa2%2FyrcA%2F5EogOdhyA4SiflBGgF%2Bg%2BKhGYVCavQ7OUBuYO8pr2ftQIHZ2KTU0P4Tl36Vh2slH7YIdddlEszU71TJC63xH%2BkxPMxau302p6px8G2x7NSmvb%2B4IJm4ceSCGf3UFGznaj4eAaNpPk83r2yvsd3TS2Nc3WuzUqczCvYYfSXyffvDXWqaQWwczV%2BfNDTpUTBmX6d0qvYrGnJlSkn4Rx%2Fu2mVvLKmls6KZQNEU8L8DPQNPMfdN82MnQJLZ6eouC9UNFkZTmK1%2BVWbW%2BocH4kmt58CoerUmISN6MO5iatwMSVs%2B7mEo0shG8qHLyQx%2FXaxuR9MuU5QE0ynNtmQhkp8kY8bo3Qiq3RHKnVFr3jWnR3y8CYSG5zHZF4T%2Fno3%2FStI%2FDaNNJURqObmJOhkP%2BttbUZMWamBeay3INhMUJ8HXE03%2BRH8et660rV7hOsEQNEUyF24g3c0w2zOILPIKpGEIwSeLZpo6EphVLFdcje4BvXp2Y8lLw8naB%2BQ6WOnh6FRuwrbpHV7OfRwzF2372a36jDX980MPzFFBXrIoRc91LajNlRxa11GfLWJE8DawohrhCjODd5gcX98IM%2BqrA1js%2F8LnDdT65ld%2B4ybCWt4GsLYpeQVZFQGOdPkSUSHMIqE9ssGOqUBv1mri5CVPGmUIJiiuX2aB1jcpJDdKVkGUSBJPyXfqM3245TOuo1YKxQAAsXybuUT01VCUoKpI3rBjpUg65ywFF0RpueCnDNmm2GAxtutBOFHtM41odMhKvFDnlYEAtFfRWPSjLDQEtSnfI8aAeA%2BMCTfDIeFGYylohzin0kVc7YoY%2FFducXN5%2BGXX66tG6cwHOFgosY3rt5MiH5x%2FADWl%2BSHfrA%2F&X-Amz-Signature=1010e10ebe2094f1eaa1112a5f14e9e92d2f635803e9ed71b8f5d1ac1be52eac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA4PYYID%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERdT1H1OzojQVFiIfoI26Z2%2FcPgbc10Yyq%2F0wscWCQxAiEA8nRv%2BFDhXoAsUfaF86IwpUhwaTh6tQUIg0A29HPr2pUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg%2FVeYwRSoNsxa2%2FyrcA%2F5EogOdhyA4SiflBGgF%2Bg%2BKhGYVCavQ7OUBuYO8pr2ftQIHZ2KTU0P4Tl36Vh2slH7YIdddlEszU71TJC63xH%2BkxPMxau302p6px8G2x7NSmvb%2B4IJm4ceSCGf3UFGznaj4eAaNpPk83r2yvsd3TS2Nc3WuzUqczCvYYfSXyffvDXWqaQWwczV%2BfNDTpUTBmX6d0qvYrGnJlSkn4Rx%2Fu2mVvLKmls6KZQNEU8L8DPQNPMfdN82MnQJLZ6eouC9UNFkZTmK1%2BVWbW%2BocH4kmt58CoerUmISN6MO5iatwMSVs%2B7mEo0shG8qHLyQx%2FXaxuR9MuU5QE0ynNtmQhkp8kY8bo3Qiq3RHKnVFr3jWnR3y8CYSG5zHZF4T%2Fno3%2FStI%2FDaNNJURqObmJOhkP%2BttbUZMWamBeay3INhMUJ8HXE03%2BRH8et660rV7hOsEQNEUyF24g3c0w2zOILPIKpGEIwSeLZpo6EphVLFdcje4BvXp2Y8lLw8naB%2BQ6WOnh6FRuwrbpHV7OfRwzF2372a36jDX980MPzFFBXrIoRc91LajNlRxa11GfLWJE8DawohrhCjODd5gcX98IM%2BqrA1js%2F8LnDdT65ld%2B4ybCWt4GsLYpeQVZFQGOdPkSUSHMIqE9ssGOqUBv1mri5CVPGmUIJiiuX2aB1jcpJDdKVkGUSBJPyXfqM3245TOuo1YKxQAAsXybuUT01VCUoKpI3rBjpUg65ywFF0RpueCnDNmm2GAxtutBOFHtM41odMhKvFDnlYEAtFfRWPSjLDQEtSnfI8aAeA%2BMCTfDIeFGYylohzin0kVc7YoY%2FFducXN5%2BGXX66tG6cwHOFgosY3rt5MiH5x%2FADWl%2BSHfrA%2F&X-Amz-Signature=3647150c41a74c0cd313d22d3a6c63306d73bd01321f87ebfeec70bcfd2e160f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA4PYYID%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERdT1H1OzojQVFiIfoI26Z2%2FcPgbc10Yyq%2F0wscWCQxAiEA8nRv%2BFDhXoAsUfaF86IwpUhwaTh6tQUIg0A29HPr2pUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg%2FVeYwRSoNsxa2%2FyrcA%2F5EogOdhyA4SiflBGgF%2Bg%2BKhGYVCavQ7OUBuYO8pr2ftQIHZ2KTU0P4Tl36Vh2slH7YIdddlEszU71TJC63xH%2BkxPMxau302p6px8G2x7NSmvb%2B4IJm4ceSCGf3UFGznaj4eAaNpPk83r2yvsd3TS2Nc3WuzUqczCvYYfSXyffvDXWqaQWwczV%2BfNDTpUTBmX6d0qvYrGnJlSkn4Rx%2Fu2mVvLKmls6KZQNEU8L8DPQNPMfdN82MnQJLZ6eouC9UNFkZTmK1%2BVWbW%2BocH4kmt58CoerUmISN6MO5iatwMSVs%2B7mEo0shG8qHLyQx%2FXaxuR9MuU5QE0ynNtmQhkp8kY8bo3Qiq3RHKnVFr3jWnR3y8CYSG5zHZF4T%2Fno3%2FStI%2FDaNNJURqObmJOhkP%2BttbUZMWamBeay3INhMUJ8HXE03%2BRH8et660rV7hOsEQNEUyF24g3c0w2zOILPIKpGEIwSeLZpo6EphVLFdcje4BvXp2Y8lLw8naB%2BQ6WOnh6FRuwrbpHV7OfRwzF2372a36jDX980MPzFFBXrIoRc91LajNlRxa11GfLWJE8DawohrhCjODd5gcX98IM%2BqrA1js%2F8LnDdT65ld%2B4ybCWt4GsLYpeQVZFQGOdPkSUSHMIqE9ssGOqUBv1mri5CVPGmUIJiiuX2aB1jcpJDdKVkGUSBJPyXfqM3245TOuo1YKxQAAsXybuUT01VCUoKpI3rBjpUg65ywFF0RpueCnDNmm2GAxtutBOFHtM41odMhKvFDnlYEAtFfRWPSjLDQEtSnfI8aAeA%2BMCTfDIeFGYylohzin0kVc7YoY%2FFducXN5%2BGXX66tG6cwHOFgosY3rt5MiH5x%2FADWl%2BSHfrA%2F&X-Amz-Signature=f312c93c35a92c036d40562a05580cb27198436b36e189bcae119fda382810b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA4PYYID%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERdT1H1OzojQVFiIfoI26Z2%2FcPgbc10Yyq%2F0wscWCQxAiEA8nRv%2BFDhXoAsUfaF86IwpUhwaTh6tQUIg0A29HPr2pUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg%2FVeYwRSoNsxa2%2FyrcA%2F5EogOdhyA4SiflBGgF%2Bg%2BKhGYVCavQ7OUBuYO8pr2ftQIHZ2KTU0P4Tl36Vh2slH7YIdddlEszU71TJC63xH%2BkxPMxau302p6px8G2x7NSmvb%2B4IJm4ceSCGf3UFGznaj4eAaNpPk83r2yvsd3TS2Nc3WuzUqczCvYYfSXyffvDXWqaQWwczV%2BfNDTpUTBmX6d0qvYrGnJlSkn4Rx%2Fu2mVvLKmls6KZQNEU8L8DPQNPMfdN82MnQJLZ6eouC9UNFkZTmK1%2BVWbW%2BocH4kmt58CoerUmISN6MO5iatwMSVs%2B7mEo0shG8qHLyQx%2FXaxuR9MuU5QE0ynNtmQhkp8kY8bo3Qiq3RHKnVFr3jWnR3y8CYSG5zHZF4T%2Fno3%2FStI%2FDaNNJURqObmJOhkP%2BttbUZMWamBeay3INhMUJ8HXE03%2BRH8et660rV7hOsEQNEUyF24g3c0w2zOILPIKpGEIwSeLZpo6EphVLFdcje4BvXp2Y8lLw8naB%2BQ6WOnh6FRuwrbpHV7OfRwzF2372a36jDX980MPzFFBXrIoRc91LajNlRxa11GfLWJE8DawohrhCjODd5gcX98IM%2BqrA1js%2F8LnDdT65ld%2B4ybCWt4GsLYpeQVZFQGOdPkSUSHMIqE9ssGOqUBv1mri5CVPGmUIJiiuX2aB1jcpJDdKVkGUSBJPyXfqM3245TOuo1YKxQAAsXybuUT01VCUoKpI3rBjpUg65ywFF0RpueCnDNmm2GAxtutBOFHtM41odMhKvFDnlYEAtFfRWPSjLDQEtSnfI8aAeA%2BMCTfDIeFGYylohzin0kVc7YoY%2FFducXN5%2BGXX66tG6cwHOFgosY3rt5MiH5x%2FADWl%2BSHfrA%2F&X-Amz-Signature=de07830634c2170d5b718c94871da446ea5e8b984d3e557d3fbaec91b08bdd13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA4PYYID%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERdT1H1OzojQVFiIfoI26Z2%2FcPgbc10Yyq%2F0wscWCQxAiEA8nRv%2BFDhXoAsUfaF86IwpUhwaTh6tQUIg0A29HPr2pUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg%2FVeYwRSoNsxa2%2FyrcA%2F5EogOdhyA4SiflBGgF%2Bg%2BKhGYVCavQ7OUBuYO8pr2ftQIHZ2KTU0P4Tl36Vh2slH7YIdddlEszU71TJC63xH%2BkxPMxau302p6px8G2x7NSmvb%2B4IJm4ceSCGf3UFGznaj4eAaNpPk83r2yvsd3TS2Nc3WuzUqczCvYYfSXyffvDXWqaQWwczV%2BfNDTpUTBmX6d0qvYrGnJlSkn4Rx%2Fu2mVvLKmls6KZQNEU8L8DPQNPMfdN82MnQJLZ6eouC9UNFkZTmK1%2BVWbW%2BocH4kmt58CoerUmISN6MO5iatwMSVs%2B7mEo0shG8qHLyQx%2FXaxuR9MuU5QE0ynNtmQhkp8kY8bo3Qiq3RHKnVFr3jWnR3y8CYSG5zHZF4T%2Fno3%2FStI%2FDaNNJURqObmJOhkP%2BttbUZMWamBeay3INhMUJ8HXE03%2BRH8et660rV7hOsEQNEUyF24g3c0w2zOILPIKpGEIwSeLZpo6EphVLFdcje4BvXp2Y8lLw8naB%2BQ6WOnh6FRuwrbpHV7OfRwzF2372a36jDX980MPzFFBXrIoRc91LajNlRxa11GfLWJE8DawohrhCjODd5gcX98IM%2BqrA1js%2F8LnDdT65ld%2B4ybCWt4GsLYpeQVZFQGOdPkSUSHMIqE9ssGOqUBv1mri5CVPGmUIJiiuX2aB1jcpJDdKVkGUSBJPyXfqM3245TOuo1YKxQAAsXybuUT01VCUoKpI3rBjpUg65ywFF0RpueCnDNmm2GAxtutBOFHtM41odMhKvFDnlYEAtFfRWPSjLDQEtSnfI8aAeA%2BMCTfDIeFGYylohzin0kVc7YoY%2FFducXN5%2BGXX66tG6cwHOFgosY3rt5MiH5x%2FADWl%2BSHfrA%2F&X-Amz-Signature=87ebca01d3130f7b88a9be1bd28c70af431447dca09d67e5b74b517bb5503e54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WYE3EV%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDDkEUa6CLUcOvfrPnCGLJAmtJMZswIvNoAVC5NOz24AiEAqFQxOZ4W9gz%2Bw1MmXaZqQMeMSUFLEHMSTJ%2Bz1zXVg6sqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmpkSZ7dv9ishiJSCrcA20ynepQlvQvAKkanOzKfnCiROW7VdQXXUfXv4pbzSZps1E7gYSNwvZBMdyL9L6unecPhQIBtj2GWkMT6Mu65los%2BFVn6E8oXSIm%2BVV%2F2bxFEPl6USg%2BLI6JHCNFTqdnWk7KXk8R0WsObR%2ByA%2B8f%2FTBKHV0Hfhx5HlhrSxqSfaaEHMZEf28%2BQnPHRYGdA5GgjgyokL7GQQHnrCLuWI%2BNtixgbj3FxsAkGMv1iGqWMr2L%2Fal%2BIyfNj9uAh7Np%2FwhTkZWGM%2BxOxyNbKZpWmGFlTrkiHO2ETpWCHUgQSzME4rpJ5P7YCc5PWbGyE8HCIhdkEsBel3J1kr1SjQmBsaPEX5Vi0fb1545v7F%2Flav8qEBkbHpbwBPrEt5kewv%2FBxf6VkDNXDp4ZDh%2FMSsNxBi3xO6%2BmWGGIi7SyDwiRXX19E2KpY7GCJkqWy8fjxQ8HVwOMgjKPBR7rrq8Hos1t2eGM8%2BLi%2FRjzZ8D5p2Tnxvk8SuME%2Fw45rf7lFCi960jZ6izQBw4Bqllzx2xj3ZH4HXCmoyGWQkrWCyL85owLJU2w1HVEW%2BnWRSy7LrD53mgPFRLPODMzgQVSrH2JHtMBtAUBVyrSJRXLm1nOWlP0ZSwb46xZ1ofyPN28lg0QJGurMO2D9ssGOqUBXFZSaINASQ6UlCgCDgC141JljoquiCJ8HuMdOQy%2FX3PqEK8m6kuThs5flFJqSP168dBtwAVYgd8k5O7HZBoududlJ528ANf4fbExat%2BvAgE%2FsVV%2FKSSHkxmJ9wiHyGscIMh%2FzBR9v%2BFN3l90OV4bpr4zS0ckevHLC74aqvlFbPW0GlMAThoJC5Di9wF0cCeLrbpP%2BNspdU1CaWv55wa0%2BeAUM%2FPl&X-Amz-Signature=af217996076f15944780c95b244feb3a949e5f9b3dfe16838037dbbe91e4e4dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WYE3EV%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDDkEUa6CLUcOvfrPnCGLJAmtJMZswIvNoAVC5NOz24AiEAqFQxOZ4W9gz%2Bw1MmXaZqQMeMSUFLEHMSTJ%2Bz1zXVg6sqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmpkSZ7dv9ishiJSCrcA20ynepQlvQvAKkanOzKfnCiROW7VdQXXUfXv4pbzSZps1E7gYSNwvZBMdyL9L6unecPhQIBtj2GWkMT6Mu65los%2BFVn6E8oXSIm%2BVV%2F2bxFEPl6USg%2BLI6JHCNFTqdnWk7KXk8R0WsObR%2ByA%2B8f%2FTBKHV0Hfhx5HlhrSxqSfaaEHMZEf28%2BQnPHRYGdA5GgjgyokL7GQQHnrCLuWI%2BNtixgbj3FxsAkGMv1iGqWMr2L%2Fal%2BIyfNj9uAh7Np%2FwhTkZWGM%2BxOxyNbKZpWmGFlTrkiHO2ETpWCHUgQSzME4rpJ5P7YCc5PWbGyE8HCIhdkEsBel3J1kr1SjQmBsaPEX5Vi0fb1545v7F%2Flav8qEBkbHpbwBPrEt5kewv%2FBxf6VkDNXDp4ZDh%2FMSsNxBi3xO6%2BmWGGIi7SyDwiRXX19E2KpY7GCJkqWy8fjxQ8HVwOMgjKPBR7rrq8Hos1t2eGM8%2BLi%2FRjzZ8D5p2Tnxvk8SuME%2Fw45rf7lFCi960jZ6izQBw4Bqllzx2xj3ZH4HXCmoyGWQkrWCyL85owLJU2w1HVEW%2BnWRSy7LrD53mgPFRLPODMzgQVSrH2JHtMBtAUBVyrSJRXLm1nOWlP0ZSwb46xZ1ofyPN28lg0QJGurMO2D9ssGOqUBXFZSaINASQ6UlCgCDgC141JljoquiCJ8HuMdOQy%2FX3PqEK8m6kuThs5flFJqSP168dBtwAVYgd8k5O7HZBoududlJ528ANf4fbExat%2BvAgE%2FsVV%2FKSSHkxmJ9wiHyGscIMh%2FzBR9v%2BFN3l90OV4bpr4zS0ckevHLC74aqvlFbPW0GlMAThoJC5Di9wF0cCeLrbpP%2BNspdU1CaWv55wa0%2BeAUM%2FPl&X-Amz-Signature=6c2036196f1a743d37a935c4754275427ccfb8a70d2d21dc883926023d725607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WYE3EV%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDDkEUa6CLUcOvfrPnCGLJAmtJMZswIvNoAVC5NOz24AiEAqFQxOZ4W9gz%2Bw1MmXaZqQMeMSUFLEHMSTJ%2Bz1zXVg6sqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmpkSZ7dv9ishiJSCrcA20ynepQlvQvAKkanOzKfnCiROW7VdQXXUfXv4pbzSZps1E7gYSNwvZBMdyL9L6unecPhQIBtj2GWkMT6Mu65los%2BFVn6E8oXSIm%2BVV%2F2bxFEPl6USg%2BLI6JHCNFTqdnWk7KXk8R0WsObR%2ByA%2B8f%2FTBKHV0Hfhx5HlhrSxqSfaaEHMZEf28%2BQnPHRYGdA5GgjgyokL7GQQHnrCLuWI%2BNtixgbj3FxsAkGMv1iGqWMr2L%2Fal%2BIyfNj9uAh7Np%2FwhTkZWGM%2BxOxyNbKZpWmGFlTrkiHO2ETpWCHUgQSzME4rpJ5P7YCc5PWbGyE8HCIhdkEsBel3J1kr1SjQmBsaPEX5Vi0fb1545v7F%2Flav8qEBkbHpbwBPrEt5kewv%2FBxf6VkDNXDp4ZDh%2FMSsNxBi3xO6%2BmWGGIi7SyDwiRXX19E2KpY7GCJkqWy8fjxQ8HVwOMgjKPBR7rrq8Hos1t2eGM8%2BLi%2FRjzZ8D5p2Tnxvk8SuME%2Fw45rf7lFCi960jZ6izQBw4Bqllzx2xj3ZH4HXCmoyGWQkrWCyL85owLJU2w1HVEW%2BnWRSy7LrD53mgPFRLPODMzgQVSrH2JHtMBtAUBVyrSJRXLm1nOWlP0ZSwb46xZ1ofyPN28lg0QJGurMO2D9ssGOqUBXFZSaINASQ6UlCgCDgC141JljoquiCJ8HuMdOQy%2FX3PqEK8m6kuThs5flFJqSP168dBtwAVYgd8k5O7HZBoududlJ528ANf4fbExat%2BvAgE%2FsVV%2FKSSHkxmJ9wiHyGscIMh%2FzBR9v%2BFN3l90OV4bpr4zS0ckevHLC74aqvlFbPW0GlMAThoJC5Di9wF0cCeLrbpP%2BNspdU1CaWv55wa0%2BeAUM%2FPl&X-Amz-Signature=77fd23c681bd66d18c18a1210e0cc32044004b408d75e275dfc2e9a9dd11a495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WYE3EV%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDDkEUa6CLUcOvfrPnCGLJAmtJMZswIvNoAVC5NOz24AiEAqFQxOZ4W9gz%2Bw1MmXaZqQMeMSUFLEHMSTJ%2Bz1zXVg6sqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmpkSZ7dv9ishiJSCrcA20ynepQlvQvAKkanOzKfnCiROW7VdQXXUfXv4pbzSZps1E7gYSNwvZBMdyL9L6unecPhQIBtj2GWkMT6Mu65los%2BFVn6E8oXSIm%2BVV%2F2bxFEPl6USg%2BLI6JHCNFTqdnWk7KXk8R0WsObR%2ByA%2B8f%2FTBKHV0Hfhx5HlhrSxqSfaaEHMZEf28%2BQnPHRYGdA5GgjgyokL7GQQHnrCLuWI%2BNtixgbj3FxsAkGMv1iGqWMr2L%2Fal%2BIyfNj9uAh7Np%2FwhTkZWGM%2BxOxyNbKZpWmGFlTrkiHO2ETpWCHUgQSzME4rpJ5P7YCc5PWbGyE8HCIhdkEsBel3J1kr1SjQmBsaPEX5Vi0fb1545v7F%2Flav8qEBkbHpbwBPrEt5kewv%2FBxf6VkDNXDp4ZDh%2FMSsNxBi3xO6%2BmWGGIi7SyDwiRXX19E2KpY7GCJkqWy8fjxQ8HVwOMgjKPBR7rrq8Hos1t2eGM8%2BLi%2FRjzZ8D5p2Tnxvk8SuME%2Fw45rf7lFCi960jZ6izQBw4Bqllzx2xj3ZH4HXCmoyGWQkrWCyL85owLJU2w1HVEW%2BnWRSy7LrD53mgPFRLPODMzgQVSrH2JHtMBtAUBVyrSJRXLm1nOWlP0ZSwb46xZ1ofyPN28lg0QJGurMO2D9ssGOqUBXFZSaINASQ6UlCgCDgC141JljoquiCJ8HuMdOQy%2FX3PqEK8m6kuThs5flFJqSP168dBtwAVYgd8k5O7HZBoududlJ528ANf4fbExat%2BvAgE%2FsVV%2FKSSHkxmJ9wiHyGscIMh%2FzBR9v%2BFN3l90OV4bpr4zS0ckevHLC74aqvlFbPW0GlMAThoJC5Di9wF0cCeLrbpP%2BNspdU1CaWv55wa0%2BeAUM%2FPl&X-Amz-Signature=e02a193433b838cbde96123541b025b278179747653a23ece910dc701ef8e8ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WYE3EV%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDDkEUa6CLUcOvfrPnCGLJAmtJMZswIvNoAVC5NOz24AiEAqFQxOZ4W9gz%2Bw1MmXaZqQMeMSUFLEHMSTJ%2Bz1zXVg6sqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmpkSZ7dv9ishiJSCrcA20ynepQlvQvAKkanOzKfnCiROW7VdQXXUfXv4pbzSZps1E7gYSNwvZBMdyL9L6unecPhQIBtj2GWkMT6Mu65los%2BFVn6E8oXSIm%2BVV%2F2bxFEPl6USg%2BLI6JHCNFTqdnWk7KXk8R0WsObR%2ByA%2B8f%2FTBKHV0Hfhx5HlhrSxqSfaaEHMZEf28%2BQnPHRYGdA5GgjgyokL7GQQHnrCLuWI%2BNtixgbj3FxsAkGMv1iGqWMr2L%2Fal%2BIyfNj9uAh7Np%2FwhTkZWGM%2BxOxyNbKZpWmGFlTrkiHO2ETpWCHUgQSzME4rpJ5P7YCc5PWbGyE8HCIhdkEsBel3J1kr1SjQmBsaPEX5Vi0fb1545v7F%2Flav8qEBkbHpbwBPrEt5kewv%2FBxf6VkDNXDp4ZDh%2FMSsNxBi3xO6%2BmWGGIi7SyDwiRXX19E2KpY7GCJkqWy8fjxQ8HVwOMgjKPBR7rrq8Hos1t2eGM8%2BLi%2FRjzZ8D5p2Tnxvk8SuME%2Fw45rf7lFCi960jZ6izQBw4Bqllzx2xj3ZH4HXCmoyGWQkrWCyL85owLJU2w1HVEW%2BnWRSy7LrD53mgPFRLPODMzgQVSrH2JHtMBtAUBVyrSJRXLm1nOWlP0ZSwb46xZ1ofyPN28lg0QJGurMO2D9ssGOqUBXFZSaINASQ6UlCgCDgC141JljoquiCJ8HuMdOQy%2FX3PqEK8m6kuThs5flFJqSP168dBtwAVYgd8k5O7HZBoududlJ528ANf4fbExat%2BvAgE%2FsVV%2FKSSHkxmJ9wiHyGscIMh%2FzBR9v%2BFN3l90OV4bpr4zS0ckevHLC74aqvlFbPW0GlMAThoJC5Di9wF0cCeLrbpP%2BNspdU1CaWv55wa0%2BeAUM%2FPl&X-Amz-Signature=5518d44cd300078dbad33089af683d931680e4b61a5ab36c90632e41f202ef01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKAWBSC%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHz89YM%2FkYXiVLurvwM%2Br8Hr4p3Sv6VtwPFJvUZzePG8CIQCDoqg7fEP5%2B25wHyqRyHjM9YN%2BYmaaLPVnkU%2FXGCZ18SqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2FbcgYGr%2FXWLBb%2BUKtwDOSfTCxMhlvXOl%2F4IDyLHRmdmlCuspo3y%2BvzhSrgoBaEyvYFuD6WMXqPGLrDCPX3Aa6Zs5AFDp%2B1nXGuJkN6g4UBnkEqe4ZiDTi%2B0YjknVixno8xwpJy4zrIJ3PQ4YF0%2Bp9rUBMkV7hZ3Uq%2FVjnLJ54xp%2FVxDhLaG%2FXJeX8qQD5IF%2FjV2eFDG%2FOG6rS53oY4Z0RPH0yza4%2BLyOwvMsA%2B8UYGWcACVX92nLk1zqfSjm6vBldBHKjptbZF88MPkI%2B1b3eb1Gm9gAwwm88UxNiDtRHjQASj3KU4aPuzFwbTRNR1C45UyoVNRF8TpZCwUzb%2FdSHvU4U6pmea7f0PsMnoFSHlKwWs1fibyVqjdnBu9D5eRynOHN%2FXBMUnkZ%2BExBcCBd63MAnA9FzTpHb71dlc%2BwyaL1ciK16hAdkthRHTqJW4U66lAvADM5RzbkWvGSLLRzHf1y%2Bdgk2rmYWrgYXxF0wZGHhLppj5s%2FdkYBiO4IicWUxTtXf8DntpaAAlJq1VCpcpE1MD6%2Bsu2uxjH8AeSdu4%2FXWnpof%2BlJU%2B5NlEVFa4SA%2B4WuG%2Ff3j2gL3DOnp6sqassg90PaxKJ3oMM5tkKjPKNk52g9Vp1FRbILL%2BEjRCVGLGvmTlH42WkO94w34P2ywY6pgE1Ggm3huGD5B0jprZRInS3lBAQB4fTul0EgwD4FpH%2FQu0ixuvTwEESbbY4ds4KCTmY64Qurxmtggfm1TkrjsnHWVE6O5KxasmWtK%2F0659U54s%2F3X7HuiGpHBM9h4GOnJ75D%2Fj8HjKHSCAlI9a06G%2FpIMMWEPtM5XcFQe%2B1ZyoYpWjtA1aMEV4DEdMk8ArBtQLgYknDq41PhQlXxg4NrP2QinHyJ5t5&X-Amz-Signature=d1514e20fe3545f38e760fee13ed8fc9d4e93e9fe2a51159922fb284da65f629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKAWBSC%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHz89YM%2FkYXiVLurvwM%2Br8Hr4p3Sv6VtwPFJvUZzePG8CIQCDoqg7fEP5%2B25wHyqRyHjM9YN%2BYmaaLPVnkU%2FXGCZ18SqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2FbcgYGr%2FXWLBb%2BUKtwDOSfTCxMhlvXOl%2F4IDyLHRmdmlCuspo3y%2BvzhSrgoBaEyvYFuD6WMXqPGLrDCPX3Aa6Zs5AFDp%2B1nXGuJkN6g4UBnkEqe4ZiDTi%2B0YjknVixno8xwpJy4zrIJ3PQ4YF0%2Bp9rUBMkV7hZ3Uq%2FVjnLJ54xp%2FVxDhLaG%2FXJeX8qQD5IF%2FjV2eFDG%2FOG6rS53oY4Z0RPH0yza4%2BLyOwvMsA%2B8UYGWcACVX92nLk1zqfSjm6vBldBHKjptbZF88MPkI%2B1b3eb1Gm9gAwwm88UxNiDtRHjQASj3KU4aPuzFwbTRNR1C45UyoVNRF8TpZCwUzb%2FdSHvU4U6pmea7f0PsMnoFSHlKwWs1fibyVqjdnBu9D5eRynOHN%2FXBMUnkZ%2BExBcCBd63MAnA9FzTpHb71dlc%2BwyaL1ciK16hAdkthRHTqJW4U66lAvADM5RzbkWvGSLLRzHf1y%2Bdgk2rmYWrgYXxF0wZGHhLppj5s%2FdkYBiO4IicWUxTtXf8DntpaAAlJq1VCpcpE1MD6%2Bsu2uxjH8AeSdu4%2FXWnpof%2BlJU%2B5NlEVFa4SA%2B4WuG%2Ff3j2gL3DOnp6sqassg90PaxKJ3oMM5tkKjPKNk52g9Vp1FRbILL%2BEjRCVGLGvmTlH42WkO94w34P2ywY6pgE1Ggm3huGD5B0jprZRInS3lBAQB4fTul0EgwD4FpH%2FQu0ixuvTwEESbbY4ds4KCTmY64Qurxmtggfm1TkrjsnHWVE6O5KxasmWtK%2F0659U54s%2F3X7HuiGpHBM9h4GOnJ75D%2Fj8HjKHSCAlI9a06G%2FpIMMWEPtM5XcFQe%2B1ZyoYpWjtA1aMEV4DEdMk8ArBtQLgYknDq41PhQlXxg4NrP2QinHyJ5t5&X-Amz-Signature=3b102650579e7c54ec75bb09b71474092142fccddb6440426cb763b9d06bfdd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKAWBSC%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHz89YM%2FkYXiVLurvwM%2Br8Hr4p3Sv6VtwPFJvUZzePG8CIQCDoqg7fEP5%2B25wHyqRyHjM9YN%2BYmaaLPVnkU%2FXGCZ18SqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2FbcgYGr%2FXWLBb%2BUKtwDOSfTCxMhlvXOl%2F4IDyLHRmdmlCuspo3y%2BvzhSrgoBaEyvYFuD6WMXqPGLrDCPX3Aa6Zs5AFDp%2B1nXGuJkN6g4UBnkEqe4ZiDTi%2B0YjknVixno8xwpJy4zrIJ3PQ4YF0%2Bp9rUBMkV7hZ3Uq%2FVjnLJ54xp%2FVxDhLaG%2FXJeX8qQD5IF%2FjV2eFDG%2FOG6rS53oY4Z0RPH0yza4%2BLyOwvMsA%2B8UYGWcACVX92nLk1zqfSjm6vBldBHKjptbZF88MPkI%2B1b3eb1Gm9gAwwm88UxNiDtRHjQASj3KU4aPuzFwbTRNR1C45UyoVNRF8TpZCwUzb%2FdSHvU4U6pmea7f0PsMnoFSHlKwWs1fibyVqjdnBu9D5eRynOHN%2FXBMUnkZ%2BExBcCBd63MAnA9FzTpHb71dlc%2BwyaL1ciK16hAdkthRHTqJW4U66lAvADM5RzbkWvGSLLRzHf1y%2Bdgk2rmYWrgYXxF0wZGHhLppj5s%2FdkYBiO4IicWUxTtXf8DntpaAAlJq1VCpcpE1MD6%2Bsu2uxjH8AeSdu4%2FXWnpof%2BlJU%2B5NlEVFa4SA%2B4WuG%2Ff3j2gL3DOnp6sqassg90PaxKJ3oMM5tkKjPKNk52g9Vp1FRbILL%2BEjRCVGLGvmTlH42WkO94w34P2ywY6pgE1Ggm3huGD5B0jprZRInS3lBAQB4fTul0EgwD4FpH%2FQu0ixuvTwEESbbY4ds4KCTmY64Qurxmtggfm1TkrjsnHWVE6O5KxasmWtK%2F0659U54s%2F3X7HuiGpHBM9h4GOnJ75D%2Fj8HjKHSCAlI9a06G%2FpIMMWEPtM5XcFQe%2B1ZyoYpWjtA1aMEV4DEdMk8ArBtQLgYknDq41PhQlXxg4NrP2QinHyJ5t5&X-Amz-Signature=cbfccf03ded58b217ce8f5dbaf056a7f041d59e7a5cfb3c43b567893d8bd0711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUV26D7K%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDGM%2BKbmr%2FEqE7wEKiiaFhHsSb10oTkmwOP216awj7WAiBnVsvapckwGEzRzvmOGxHFOWP3qreyuYqqwh9Ckg2OJCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBACi0YH7TGIOgu8KtwDsNbWgSA9lSSrp5UfBNZLTP5qMukvWApTs7m8g0yFq7Kq03cQZMhODPtWJnwgCSWR%2Bh8KjERGpHH7DxYZeU67uAO7hwGMt5wHSQp%2BNkDqCPxIYdQxgfjBiVU1uSNSx5geyEGdWTIIcEuVVloWc8Ai4%2BvVICa9QlBtd%2B4pficJzI%2B1ChAA0dGIWC6QqfXxJx5Hp3PTMbe1LYNJO3MOAUY04cgw4VrwsIj0ANJMGEEo%2FTWZF38u9YjB0IBT%2BWnsRR25cemIi8tDP%2BqJDX0YUc0BbHzV45zVCFtuq8xgq%2B%2Fw3CWsJrZn7X%2FmCPXFlW8MC01thpLb7Z74VfvAJme%2FyZbK0%2F8QR2KWvKQV5PqPJ1d4TQw9i40c%2Fne87RvsNLmQfXbXDAi75NkXAMt4aR7kocx%2BrKJWDqLRzA1xsM%2FC9zE6fSeKSWvoIM44Zfr%2BSSMx7e2H%2Bznv3welk5c5SAWCqwn409WDaqEo3VtJhrgto%2F3Ykp87gDyx5XQyA%2F9ry0SPilqppPpWeAgpZdmhiwvv1Z%2Fm40midSWyVq0EHw%2BAqDVLwmqRCjbYo2JPk8hXgR9dIs5KIa%2B0HW8nxOcgiT%2FoUG60IGK4DNJV9GxHx4y9dCGoWXHCt%2FEbAkk9fGauwIcwtoP2ywY6pgHdZEfu2aq95qzTEJb1SuWfSHhxzfNnBTcHtSxUUTsbBTL36EIfvo6k9edx2te7tBNo6L8PFlYeRejhfsj1oXOtm8FfaVQC%2B9DkXlwiy8LY%2FmdC%2BAeISrUQB3i%2FYPC%2FpUsztvCfU4muoZw3qttqaQRo5Uelr8IEYNQgkd4mwO%2FhkRx8g1Zg6GESxacnuMP3MedqgAbsbBqrfMSRcLrsBT1enHG8ZSqF&X-Amz-Signature=e5afe9eff2f8d6c2f720fdb4ce31c1fa73da42708b165123c00b989ea8e51594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUV26D7K%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDGM%2BKbmr%2FEqE7wEKiiaFhHsSb10oTkmwOP216awj7WAiBnVsvapckwGEzRzvmOGxHFOWP3qreyuYqqwh9Ckg2OJCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBACi0YH7TGIOgu8KtwDsNbWgSA9lSSrp5UfBNZLTP5qMukvWApTs7m8g0yFq7Kq03cQZMhODPtWJnwgCSWR%2Bh8KjERGpHH7DxYZeU67uAO7hwGMt5wHSQp%2BNkDqCPxIYdQxgfjBiVU1uSNSx5geyEGdWTIIcEuVVloWc8Ai4%2BvVICa9QlBtd%2B4pficJzI%2B1ChAA0dGIWC6QqfXxJx5Hp3PTMbe1LYNJO3MOAUY04cgw4VrwsIj0ANJMGEEo%2FTWZF38u9YjB0IBT%2BWnsRR25cemIi8tDP%2BqJDX0YUc0BbHzV45zVCFtuq8xgq%2B%2Fw3CWsJrZn7X%2FmCPXFlW8MC01thpLb7Z74VfvAJme%2FyZbK0%2F8QR2KWvKQV5PqPJ1d4TQw9i40c%2Fne87RvsNLmQfXbXDAi75NkXAMt4aR7kocx%2BrKJWDqLRzA1xsM%2FC9zE6fSeKSWvoIM44Zfr%2BSSMx7e2H%2Bznv3welk5c5SAWCqwn409WDaqEo3VtJhrgto%2F3Ykp87gDyx5XQyA%2F9ry0SPilqppPpWeAgpZdmhiwvv1Z%2Fm40midSWyVq0EHw%2BAqDVLwmqRCjbYo2JPk8hXgR9dIs5KIa%2B0HW8nxOcgiT%2FoUG60IGK4DNJV9GxHx4y9dCGoWXHCt%2FEbAkk9fGauwIcwtoP2ywY6pgHdZEfu2aq95qzTEJb1SuWfSHhxzfNnBTcHtSxUUTsbBTL36EIfvo6k9edx2te7tBNo6L8PFlYeRejhfsj1oXOtm8FfaVQC%2B9DkXlwiy8LY%2FmdC%2BAeISrUQB3i%2FYPC%2FpUsztvCfU4muoZw3qttqaQRo5Uelr8IEYNQgkd4mwO%2FhkRx8g1Zg6GESxacnuMP3MedqgAbsbBqrfMSRcLrsBT1enHG8ZSqF&X-Amz-Signature=d96b1e9ed5b0776f4605fe37ed1a405f3e19c8e32ba95a06eaaed915a849c1c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDNT3OTT%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDo370%2BKw9HBjCPSNgCF4%2BhPm7%2Bfbhb6ybaj69hrdTM1AiBahcPkpB%2BiffEEwauC2NUMmEKloD%2FvuPMCmOSnZrCX%2FiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrxuXkXQebrS6HizkKtwD%2FX2jDrvW8VE1A1OCEvfdZ0AoRJD6XWCkSWNvJDqNUDADx%2B6uT06WLX9quOuADX7%2FvOtUIVgIjKe%2Bzp%2FzBYVW3qGSm3UrjoFa8dJy6lPauP0orSQHXVcUSr5cAFImShMapZIX%2FyPnn3oxX0hlkCR2gTFzrWDWvKkJ1su36Izv8iJoKOG61FeAk65hPg%2B6fsWOOH45Tg3pHqj%2FFqJo74f1bwkz5tsLhUp7uzH81FS2LLMFfEOwd5JYvC7BGy3BjWri3DXZRw%2BrRknNLp1lNFuLNuABI1HVTGrVBA0w21Z6AlnN3uBW1KItZfdyvQofXghX5%2Bw0Cm7NhYhPgNstIBkhpVeMftDvjTTuNsOh%2BeTOQZRBLA8O8NUxuLIxcdTmT90cbG2iELZ65T6bBdISdWbNgcmwZCh3xtxxwgqum172ZkPtn1Q3ciRBjOc4%2BKoi1LdKlp6HVyyvfXRTjzmiUamkwDCwfefQZYSf6mcN1xL8ibixhCh5oQtJiC%2FUqpnafKKfxCRZeKyu2dG4fOfyCldFmvKQrCjiju1HJ9%2FOjv2A3ix%2BR8xp2XbRLVj7U0eVDNU3CyDJ9xQy%2FuMOUSSffVo4Fk9FDcng6%2Bw30PLNtxeDU7PZlka5M2iME7B7VdEwnoT2ywY6pgG95Xh6SNdp6D6Gp%2BtUBGkqBpSJ6aYoTINpsBnasLyR91YG4SJQkCXGRX6aDsdlJsMvdLGWstSqyGEiExsuMC835P3zncjBGue1TdkKkHW%2FBmPAPJzMgpBoEolOmFHaOgUzImwbqulGREMv0MLKzhAa4T2jbKZI1e8bUYhJbF24bvdR5ntwx0uCgGNcdtqCQFvGkXt%2BM02P5gAMU7J642kqVoUQrB2p&X-Amz-Signature=afea6d6f0107a5cd46bd73e0453bb4562651b5c0fc86b0cf02372a818cc40eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDNT3OTT%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDo370%2BKw9HBjCPSNgCF4%2BhPm7%2Bfbhb6ybaj69hrdTM1AiBahcPkpB%2BiffEEwauC2NUMmEKloD%2FvuPMCmOSnZrCX%2FiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrxuXkXQebrS6HizkKtwD%2FX2jDrvW8VE1A1OCEvfdZ0AoRJD6XWCkSWNvJDqNUDADx%2B6uT06WLX9quOuADX7%2FvOtUIVgIjKe%2Bzp%2FzBYVW3qGSm3UrjoFa8dJy6lPauP0orSQHXVcUSr5cAFImShMapZIX%2FyPnn3oxX0hlkCR2gTFzrWDWvKkJ1su36Izv8iJoKOG61FeAk65hPg%2B6fsWOOH45Tg3pHqj%2FFqJo74f1bwkz5tsLhUp7uzH81FS2LLMFfEOwd5JYvC7BGy3BjWri3DXZRw%2BrRknNLp1lNFuLNuABI1HVTGrVBA0w21Z6AlnN3uBW1KItZfdyvQofXghX5%2Bw0Cm7NhYhPgNstIBkhpVeMftDvjTTuNsOh%2BeTOQZRBLA8O8NUxuLIxcdTmT90cbG2iELZ65T6bBdISdWbNgcmwZCh3xtxxwgqum172ZkPtn1Q3ciRBjOc4%2BKoi1LdKlp6HVyyvfXRTjzmiUamkwDCwfefQZYSf6mcN1xL8ibixhCh5oQtJiC%2FUqpnafKKfxCRZeKyu2dG4fOfyCldFmvKQrCjiju1HJ9%2FOjv2A3ix%2BR8xp2XbRLVj7U0eVDNU3CyDJ9xQy%2FuMOUSSffVo4Fk9FDcng6%2Bw30PLNtxeDU7PZlka5M2iME7B7VdEwnoT2ywY6pgG95Xh6SNdp6D6Gp%2BtUBGkqBpSJ6aYoTINpsBnasLyR91YG4SJQkCXGRX6aDsdlJsMvdLGWstSqyGEiExsuMC835P3zncjBGue1TdkKkHW%2FBmPAPJzMgpBoEolOmFHaOgUzImwbqulGREMv0MLKzhAa4T2jbKZI1e8bUYhJbF24bvdR5ntwx0uCgGNcdtqCQFvGkXt%2BM02P5gAMU7J642kqVoUQrB2p&X-Amz-Signature=4f84cc904630bb04c3b40da871d202c0e6a0df84e52f0a346211dea630ba7711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDNT3OTT%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDo370%2BKw9HBjCPSNgCF4%2BhPm7%2Bfbhb6ybaj69hrdTM1AiBahcPkpB%2BiffEEwauC2NUMmEKloD%2FvuPMCmOSnZrCX%2FiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrxuXkXQebrS6HizkKtwD%2FX2jDrvW8VE1A1OCEvfdZ0AoRJD6XWCkSWNvJDqNUDADx%2B6uT06WLX9quOuADX7%2FvOtUIVgIjKe%2Bzp%2FzBYVW3qGSm3UrjoFa8dJy6lPauP0orSQHXVcUSr5cAFImShMapZIX%2FyPnn3oxX0hlkCR2gTFzrWDWvKkJ1su36Izv8iJoKOG61FeAk65hPg%2B6fsWOOH45Tg3pHqj%2FFqJo74f1bwkz5tsLhUp7uzH81FS2LLMFfEOwd5JYvC7BGy3BjWri3DXZRw%2BrRknNLp1lNFuLNuABI1HVTGrVBA0w21Z6AlnN3uBW1KItZfdyvQofXghX5%2Bw0Cm7NhYhPgNstIBkhpVeMftDvjTTuNsOh%2BeTOQZRBLA8O8NUxuLIxcdTmT90cbG2iELZ65T6bBdISdWbNgcmwZCh3xtxxwgqum172ZkPtn1Q3ciRBjOc4%2BKoi1LdKlp6HVyyvfXRTjzmiUamkwDCwfefQZYSf6mcN1xL8ibixhCh5oQtJiC%2FUqpnafKKfxCRZeKyu2dG4fOfyCldFmvKQrCjiju1HJ9%2FOjv2A3ix%2BR8xp2XbRLVj7U0eVDNU3CyDJ9xQy%2FuMOUSSffVo4Fk9FDcng6%2Bw30PLNtxeDU7PZlka5M2iME7B7VdEwnoT2ywY6pgG95Xh6SNdp6D6Gp%2BtUBGkqBpSJ6aYoTINpsBnasLyR91YG4SJQkCXGRX6aDsdlJsMvdLGWstSqyGEiExsuMC835P3zncjBGue1TdkKkHW%2FBmPAPJzMgpBoEolOmFHaOgUzImwbqulGREMv0MLKzhAa4T2jbKZI1e8bUYhJbF24bvdR5ntwx0uCgGNcdtqCQFvGkXt%2BM02P5gAMU7J642kqVoUQrB2p&X-Amz-Signature=938e93bf927abc02ba8bf0d8ab387bf30a250c4602e1e68c4ea5b7263841edbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDNT3OTT%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDo370%2BKw9HBjCPSNgCF4%2BhPm7%2Bfbhb6ybaj69hrdTM1AiBahcPkpB%2BiffEEwauC2NUMmEKloD%2FvuPMCmOSnZrCX%2FiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrxuXkXQebrS6HizkKtwD%2FX2jDrvW8VE1A1OCEvfdZ0AoRJD6XWCkSWNvJDqNUDADx%2B6uT06WLX9quOuADX7%2FvOtUIVgIjKe%2Bzp%2FzBYVW3qGSm3UrjoFa8dJy6lPauP0orSQHXVcUSr5cAFImShMapZIX%2FyPnn3oxX0hlkCR2gTFzrWDWvKkJ1su36Izv8iJoKOG61FeAk65hPg%2B6fsWOOH45Tg3pHqj%2FFqJo74f1bwkz5tsLhUp7uzH81FS2LLMFfEOwd5JYvC7BGy3BjWri3DXZRw%2BrRknNLp1lNFuLNuABI1HVTGrVBA0w21Z6AlnN3uBW1KItZfdyvQofXghX5%2Bw0Cm7NhYhPgNstIBkhpVeMftDvjTTuNsOh%2BeTOQZRBLA8O8NUxuLIxcdTmT90cbG2iELZ65T6bBdISdWbNgcmwZCh3xtxxwgqum172ZkPtn1Q3ciRBjOc4%2BKoi1LdKlp6HVyyvfXRTjzmiUamkwDCwfefQZYSf6mcN1xL8ibixhCh5oQtJiC%2FUqpnafKKfxCRZeKyu2dG4fOfyCldFmvKQrCjiju1HJ9%2FOjv2A3ix%2BR8xp2XbRLVj7U0eVDNU3CyDJ9xQy%2FuMOUSSffVo4Fk9FDcng6%2Bw30PLNtxeDU7PZlka5M2iME7B7VdEwnoT2ywY6pgG95Xh6SNdp6D6Gp%2BtUBGkqBpSJ6aYoTINpsBnasLyR91YG4SJQkCXGRX6aDsdlJsMvdLGWstSqyGEiExsuMC835P3zncjBGue1TdkKkHW%2FBmPAPJzMgpBoEolOmFHaOgUzImwbqulGREMv0MLKzhAa4T2jbKZI1e8bUYhJbF24bvdR5ntwx0uCgGNcdtqCQFvGkXt%2BM02P5gAMU7J642kqVoUQrB2p&X-Amz-Signature=6ff3f527a3f95f47fa36ab2c00d962fe8d8cdbc84da6176386889ad00aeaab4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDNT3OTT%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDo370%2BKw9HBjCPSNgCF4%2BhPm7%2Bfbhb6ybaj69hrdTM1AiBahcPkpB%2BiffEEwauC2NUMmEKloD%2FvuPMCmOSnZrCX%2FiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrxuXkXQebrS6HizkKtwD%2FX2jDrvW8VE1A1OCEvfdZ0AoRJD6XWCkSWNvJDqNUDADx%2B6uT06WLX9quOuADX7%2FvOtUIVgIjKe%2Bzp%2FzBYVW3qGSm3UrjoFa8dJy6lPauP0orSQHXVcUSr5cAFImShMapZIX%2FyPnn3oxX0hlkCR2gTFzrWDWvKkJ1su36Izv8iJoKOG61FeAk65hPg%2B6fsWOOH45Tg3pHqj%2FFqJo74f1bwkz5tsLhUp7uzH81FS2LLMFfEOwd5JYvC7BGy3BjWri3DXZRw%2BrRknNLp1lNFuLNuABI1HVTGrVBA0w21Z6AlnN3uBW1KItZfdyvQofXghX5%2Bw0Cm7NhYhPgNstIBkhpVeMftDvjTTuNsOh%2BeTOQZRBLA8O8NUxuLIxcdTmT90cbG2iELZ65T6bBdISdWbNgcmwZCh3xtxxwgqum172ZkPtn1Q3ciRBjOc4%2BKoi1LdKlp6HVyyvfXRTjzmiUamkwDCwfefQZYSf6mcN1xL8ibixhCh5oQtJiC%2FUqpnafKKfxCRZeKyu2dG4fOfyCldFmvKQrCjiju1HJ9%2FOjv2A3ix%2BR8xp2XbRLVj7U0eVDNU3CyDJ9xQy%2FuMOUSSffVo4Fk9FDcng6%2Bw30PLNtxeDU7PZlka5M2iME7B7VdEwnoT2ywY6pgG95Xh6SNdp6D6Gp%2BtUBGkqBpSJ6aYoTINpsBnasLyR91YG4SJQkCXGRX6aDsdlJsMvdLGWstSqyGEiExsuMC835P3zncjBGue1TdkKkHW%2FBmPAPJzMgpBoEolOmFHaOgUzImwbqulGREMv0MLKzhAa4T2jbKZI1e8bUYhJbF24bvdR5ntwx0uCgGNcdtqCQFvGkXt%2BM02P5gAMU7J642kqVoUQrB2p&X-Amz-Signature=2c118cf9ee8bf1e8b6012684bab897ea417032fa35f90d90305b3da817c67e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOZUZPM%2F20260131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260131T044428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP%2FqP2idKbJvuItCHLISZ6lbGma%2FLAP9zoK8TZIG%2B6xAiEAiro2S9H%2FSor72DsxAWz2kpEEQM0y%2BPhtvR1WkD%2FIL5kqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNosZqGDTAM5DhAnLCrcA0Dn2rooiRozREVaRJTQJ3SyhzdiGlRWuN9sGFukCMd9Y7V%2FpWIjWJXtA%2BskURsJeltI3DsLw3j3krGZ%2FSCDFhhI00MkqBvFJAsSgT17pCy7QBqEyMKO3xRmK2Nch4NFK7lgxZIipNcIsaw%2FtfgusawvOp2ldtzFo0cC9jY3mc2kb7BopeXmgRuOwZ02jZBE0CuCXHaBp9Ae4vQnhq8I%2F%2BOJaSQ0nwzuuuUr%2FvjWLyHK92Jpi%2FNnbOfeQPZYn9RkIR4KdIQ8bY%2BD1SVkXqm4LpRT8NLJDAuG14QjTvZQCoY9Sou9EajyJPz89nkDN3JyNhEgUO0QDiZ1WBYBz7PCTPxt%2Fq6zLMyMTXP5CO8q0cvaemH455ikpJ%2BF7xculTere5XpBLxVfGLINeoy8mA6NOj4O6N1tRRfl4VfknjzqG%2BCodk2M5vm91np1iu%2Bpb%2BzuuGW1CuqSacU%2FGJq%2BVDX1cScjjXoMtMFKz5%2BI1ACqbX%2Bb%2FYd%2BVOJJNAFIr6Reglg7%2FGCuSHzgU4ODwjiC4FM7cEeb2RG6Dj%2FkQr2sJvEpATQXxgOO%2FoCz99dsuB%2Fri67IA7TSfQbM%2Fc72Q3OgusB0h6yYTcx8Nr7n7Gky03SEpYfYnR1h20i1tvCgU58MPiD9ssGOqUBLzNgJxRfBRAtBTImH2ljJd%2BkfAogRAGeEaNNfMRj0mFfpzW%2FUo5RjmYB48IqDedWkG6sFEoV36ALsVe2YswoBZFewfpT5aQwBOPbLH1gbdli6aIX385wIhsvmomfsv3gV%2Be67lfjKBw8wxtuqLXEek1n7w6Df6UHizqt9GiZd%2FB5xC1vl6%2BWsV8T9e%2FOs8G3AHVmb6Ui3XTWcvD8VjDgiM54oSau&X-Amz-Signature=d910bd6d526c70b8ca29f4fbcb275b78ce0bb3db7d4fb13c5eeca6025037a430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

