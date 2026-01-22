
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGDTF33%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDA06CtniPF3aF%2FkKRgRDki%2BXVhjzlLKgKkkODKvyV8VAIhAJ3tXIoT%2FEM4mLE2D%2FTcgStli5s%2B29J4fON1WgXo8mceKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2F7NkjVam4PR98fUoq3AMuQLo6Kx3TN0CPadD51pKBa29WU43vD1LJydI3apwEu%2F6Y8BytFo4Y%2BkZ4294sFSxi241eeQcYo7FRZxvyg2%2Frs8%2Fx7jnQJsvfWjL%2BlfhHf2eD8Tm82ROU%2BYQBzPJxxIC4iKkMn3WVthoQOR0uZPVURpKmT4c6%2Bx62fc5b0wUy68MnzfjI2CgSqTMreq7fFb%2F35%2F5If1pB%2F0OZ3uqS65FCsxE7EfmRPmphMgNraSfPIFTsyOLS6c4J6hdsbUvuTrSTb2rfEVtcWupPo47PRzA%2BUSRSVwJ1k%2Be1mw%2FxSr9hCZ8SYzxS%2BdR178za2qUt2aG8kqyhx0rBOpr4x%2F1DQLNahkS4pEBx7kMNoUIRXo6sy76o83LPzGiRwNfkO30WdHFnZf3KlwRHCBt7C8I9Ret6%2BfO4By0H5zHGqZgxkvnL4XhowXKSnJEnu01snbzJdfQiSqE%2BJwS59HLXY0IBVR9DPOGYtMaGINBrkWvM5tMdJxYX6mo5RFJQR8u3Giw19DUrX6vRELf74UuVJwN6WkW9lDyvn6u6GGDs0zHICVbufl21vkfuRYZTuRUkE2e86WwcNpwtqiBArI7KFwT3GYiV%2FN%2Bj%2BiaRoColHlnvlJ9h7btcUm3zt8jk2%2FccTDDexsbLBjqkAYwbXYEXNzO%2F7c2n5fJp69x%2FBayY1Ukxxn%2FMsg1hba7dVU62LK4EEbQU6%2FdDxika%2FLgmvBFIVne9PuuyWjYhaCd3ubQixIcBcpKrfmcDZIH%2FLkn87wu1Q85IHKpaqDJXWj2Awaq%2Fv7dU7Vy8uag%2FJ7M8%2FGPzp%2Btd6GUildfcfJd9rfHN4VU7GSHRhsMDDdr8i4LkbI7WE7x%2BA9H%2B4kxgkiEbusJf&X-Amz-Signature=f519e639c1de849c69cb49f673c28d171c62dbeb0d0948610de3acbf69e27b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ETQ6O64%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIBhpnQKFXfa3bG%2FmYxWd6ax%2BCHnANw2BFcN3z%2BPD9WgHAiAKCcE2vvnBEfkPSfmZX%2BpstOxkn7OEBE%2BfWQEV9CMT%2FyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnM3YmFPPICl%2FWjfDKtwDpm1kL7Bg2n%2F7aKyZQlW3YbKzY0ytki7Ug%2BAdBwHXHYBtJb%2F9oedHApiJsgQwzwCmmE5OSUxT8CUXrQOtMefXs0qAkpQQksLCDxg3N7NTG%2F88ot0DAPP%2BzmWoTmyctdS%2F8YWMx1RxFxviYkh6Q1rvNqjW72%2FzGQx7%2FTnZrNGli6YAVdnxcFV7%2BmaceiTz0SRwX8Z6y7pZ2qqJ%2Bm5%2Bnn7zIjWzWf9RlDhh3cg1ti79VoMVyBmnrpU8CyvQyhiEYsRbDCK0Fcbd%2Fj1wyaA%2B778bcYkGXBOEQHzCvJwwcwXRXyUSzAoi1RH5zeozM9jGKCOA7A0n334hWxUgkM1qURePLiVn8McE38s%2FYKZ%2BS7vlhY2CuwmvUELcpdTQXDig3M%2BIy0zsS7PeCsQtaNXH0J6wFwqlY2P%2Bt7qU7sFORTF4KP78uvj%2Bfr4%2B7bMvJ8NcO%2F3SfGhrGJ6oF1DfJxhzgr%2BCPtg6ejjjw6ScYiVEqKaBg7plQuKk3jGUYiYPxcM%2F5oEjIvWaYro1%2FVbRWvV5IatkqZE8tAgKCc6nb7pjw%2BazAfrBYsef6gGJz%2F%2BK9a8xLEoTq1HpK3ZIn%2F6c5Rt%2Fukz8I5E7OOmBuISomJ39Z1Q6w9AMB0kbnId4zEmQ654wocfGywY6pgH6OJ3xSQOdva%2FZk%2Ba6r%2FX%2BZoA%2Fr%2B2Y88I5787XhpZkcpQauWKrpZRkWa23FZwnXRpj%2FiTG2DGrF7e0dGzBAnJ79JsnODIlqdF9P8w4k8EEW%2BOATAeO7ZzG9NO%2FB1Kf6otCMYtGiSIQKKNMbMG8l2b%2FlRhKAdfnaPhjA1pIWyG7pjGdip5iEkbElRo5t9Ok8C%2BU1MYctR6VcQkWdYobr4vHxTCKh5jx&X-Amz-Signature=4c991628d4f88a5673f14f953ee9e2a5bcbe6d267e8b6fbaab25f60db913b5bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ETQ6O64%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIBhpnQKFXfa3bG%2FmYxWd6ax%2BCHnANw2BFcN3z%2BPD9WgHAiAKCcE2vvnBEfkPSfmZX%2BpstOxkn7OEBE%2BfWQEV9CMT%2FyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnM3YmFPPICl%2FWjfDKtwDpm1kL7Bg2n%2F7aKyZQlW3YbKzY0ytki7Ug%2BAdBwHXHYBtJb%2F9oedHApiJsgQwzwCmmE5OSUxT8CUXrQOtMefXs0qAkpQQksLCDxg3N7NTG%2F88ot0DAPP%2BzmWoTmyctdS%2F8YWMx1RxFxviYkh6Q1rvNqjW72%2FzGQx7%2FTnZrNGli6YAVdnxcFV7%2BmaceiTz0SRwX8Z6y7pZ2qqJ%2Bm5%2Bnn7zIjWzWf9RlDhh3cg1ti79VoMVyBmnrpU8CyvQyhiEYsRbDCK0Fcbd%2Fj1wyaA%2B778bcYkGXBOEQHzCvJwwcwXRXyUSzAoi1RH5zeozM9jGKCOA7A0n334hWxUgkM1qURePLiVn8McE38s%2FYKZ%2BS7vlhY2CuwmvUELcpdTQXDig3M%2BIy0zsS7PeCsQtaNXH0J6wFwqlY2P%2Bt7qU7sFORTF4KP78uvj%2Bfr4%2B7bMvJ8NcO%2F3SfGhrGJ6oF1DfJxhzgr%2BCPtg6ejjjw6ScYiVEqKaBg7plQuKk3jGUYiYPxcM%2F5oEjIvWaYro1%2FVbRWvV5IatkqZE8tAgKCc6nb7pjw%2BazAfrBYsef6gGJz%2F%2BK9a8xLEoTq1HpK3ZIn%2F6c5Rt%2Fukz8I5E7OOmBuISomJ39Z1Q6w9AMB0kbnId4zEmQ654wocfGywY6pgH6OJ3xSQOdva%2FZk%2Ba6r%2FX%2BZoA%2Fr%2B2Y88I5787XhpZkcpQauWKrpZRkWa23FZwnXRpj%2FiTG2DGrF7e0dGzBAnJ79JsnODIlqdF9P8w4k8EEW%2BOATAeO7ZzG9NO%2FB1Kf6otCMYtGiSIQKKNMbMG8l2b%2FlRhKAdfnaPhjA1pIWyG7pjGdip5iEkbElRo5t9Ok8C%2BU1MYctR6VcQkWdYobr4vHxTCKh5jx&X-Amz-Signature=81fe22c0d089b03a067beef0f5c7cf4b192023b537857f47b624c65e78276e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPOML6I%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDWf%2FsaFiD%2FLtlZl7jqHuaE%2BafsoX%2ByAt613JJqZbUnawIhAI3KSZ1%2FmiCTuausKP5j%2FOkEga2AczK8keI%2BFhQCvFSOKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycnYnwm6Fq0qIiZ6oq3AN2xR9njkhBic4sBul%2B%2BVXUxrDdVUuU8SgC5Mxd08qccH%2FnW09r84%2BlbVCBbIHs0CSp5D0CU9DuQqZGgBD5ID90WrCAcR6zYt2XA7EomqoVuYQzmCOZyCYjYyVPYp%2FGU7Vde32nMFMSM6tXWKBOsCzIxNxWa6oFbI5CR3N0xuuWvy2meydYCqhRoUh5BrEk3c6mbuCtOLxRE%2Fi%2FNzMoJCMvGwOt5uVR9%2FSufdT5FchWf%2Fz0ORBjaT4cR5PwJbZFnn7b%2FYqmN5T%2BnR7LIlQInzMZwmZTrsnqlHDDIOjJ9EP7jrp6pqKLMAenaEtWFN08M7MotYUg81s1a%2BUI12C6Sn6rnnleed%2F6H6dXZt8xkHoLtrP0kjHzzxKAGYTlP%2FlgD59sTzX6fXmBjBxOobEyEBCopGzNYDHj0bCb%2FVEeuhsoih8jx4fU09vZFAC2UPnXM907kHJRBS%2ByWdGutjSB%2Bfi%2FYnoC7sOgyHc4qOoPn25yy9DfC5O%2F6UX3TNiJl3oj1kSAQIIBq9N15PYaoHKk6HR6ltoWoj8z6InAL2mOfv9lnB4tChNg8sQDODt4GUm1kVwr0tuCkMRj26r8GqPOrNfbFL9%2By5KM5WCKWH5O6fU0zwGK8g0MWkXZYMYPNjCaxsbLBjqkAbz%2FMLVlI8%2FkJBIuH39t5MSTpwIFZDSImo0uUKPxtSkfiWULPNPaozGezN1DFA4gjyVhRz0aH746R7w0pjp0h58V%2ByNy2DtJYslsj5RvSUptcpJhRoz1zCUNTjGAgrTZ7%2FdQcZOoPj4f9cEs7%2BkQqkSLdS%2FKmhzzyVwyvAlKQgqePaj%2B0IyJMC3w%2BY420U%2BXFei7X9uhGz2iHCCA3EFWogwfj8H6&X-Amz-Signature=6dce7cce519b81bc0034694f60f704981ce662ea234b6af137ec5175023436a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPOML6I%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDWf%2FsaFiD%2FLtlZl7jqHuaE%2BafsoX%2ByAt613JJqZbUnawIhAI3KSZ1%2FmiCTuausKP5j%2FOkEga2AczK8keI%2BFhQCvFSOKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycnYnwm6Fq0qIiZ6oq3AN2xR9njkhBic4sBul%2B%2BVXUxrDdVUuU8SgC5Mxd08qccH%2FnW09r84%2BlbVCBbIHs0CSp5D0CU9DuQqZGgBD5ID90WrCAcR6zYt2XA7EomqoVuYQzmCOZyCYjYyVPYp%2FGU7Vde32nMFMSM6tXWKBOsCzIxNxWa6oFbI5CR3N0xuuWvy2meydYCqhRoUh5BrEk3c6mbuCtOLxRE%2Fi%2FNzMoJCMvGwOt5uVR9%2FSufdT5FchWf%2Fz0ORBjaT4cR5PwJbZFnn7b%2FYqmN5T%2BnR7LIlQInzMZwmZTrsnqlHDDIOjJ9EP7jrp6pqKLMAenaEtWFN08M7MotYUg81s1a%2BUI12C6Sn6rnnleed%2F6H6dXZt8xkHoLtrP0kjHzzxKAGYTlP%2FlgD59sTzX6fXmBjBxOobEyEBCopGzNYDHj0bCb%2FVEeuhsoih8jx4fU09vZFAC2UPnXM907kHJRBS%2ByWdGutjSB%2Bfi%2FYnoC7sOgyHc4qOoPn25yy9DfC5O%2F6UX3TNiJl3oj1kSAQIIBq9N15PYaoHKk6HR6ltoWoj8z6InAL2mOfv9lnB4tChNg8sQDODt4GUm1kVwr0tuCkMRj26r8GqPOrNfbFL9%2By5KM5WCKWH5O6fU0zwGK8g0MWkXZYMYPNjCaxsbLBjqkAbz%2FMLVlI8%2FkJBIuH39t5MSTpwIFZDSImo0uUKPxtSkfiWULPNPaozGezN1DFA4gjyVhRz0aH746R7w0pjp0h58V%2ByNy2DtJYslsj5RvSUptcpJhRoz1zCUNTjGAgrTZ7%2FdQcZOoPj4f9cEs7%2BkQqkSLdS%2FKmhzzyVwyvAlKQgqePaj%2B0IyJMC3w%2BY420U%2BXFei7X9uhGz2iHCCA3EFWogwfj8H6&X-Amz-Signature=74b55d6505711d9603750fb669d89300187f0b6f642701a2972c1b884f21728c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPOML6I%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDWf%2FsaFiD%2FLtlZl7jqHuaE%2BafsoX%2ByAt613JJqZbUnawIhAI3KSZ1%2FmiCTuausKP5j%2FOkEga2AczK8keI%2BFhQCvFSOKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycnYnwm6Fq0qIiZ6oq3AN2xR9njkhBic4sBul%2B%2BVXUxrDdVUuU8SgC5Mxd08qccH%2FnW09r84%2BlbVCBbIHs0CSp5D0CU9DuQqZGgBD5ID90WrCAcR6zYt2XA7EomqoVuYQzmCOZyCYjYyVPYp%2FGU7Vde32nMFMSM6tXWKBOsCzIxNxWa6oFbI5CR3N0xuuWvy2meydYCqhRoUh5BrEk3c6mbuCtOLxRE%2Fi%2FNzMoJCMvGwOt5uVR9%2FSufdT5FchWf%2Fz0ORBjaT4cR5PwJbZFnn7b%2FYqmN5T%2BnR7LIlQInzMZwmZTrsnqlHDDIOjJ9EP7jrp6pqKLMAenaEtWFN08M7MotYUg81s1a%2BUI12C6Sn6rnnleed%2F6H6dXZt8xkHoLtrP0kjHzzxKAGYTlP%2FlgD59sTzX6fXmBjBxOobEyEBCopGzNYDHj0bCb%2FVEeuhsoih8jx4fU09vZFAC2UPnXM907kHJRBS%2ByWdGutjSB%2Bfi%2FYnoC7sOgyHc4qOoPn25yy9DfC5O%2F6UX3TNiJl3oj1kSAQIIBq9N15PYaoHKk6HR6ltoWoj8z6InAL2mOfv9lnB4tChNg8sQDODt4GUm1kVwr0tuCkMRj26r8GqPOrNfbFL9%2By5KM5WCKWH5O6fU0zwGK8g0MWkXZYMYPNjCaxsbLBjqkAbz%2FMLVlI8%2FkJBIuH39t5MSTpwIFZDSImo0uUKPxtSkfiWULPNPaozGezN1DFA4gjyVhRz0aH746R7w0pjp0h58V%2ByNy2DtJYslsj5RvSUptcpJhRoz1zCUNTjGAgrTZ7%2FdQcZOoPj4f9cEs7%2BkQqkSLdS%2FKmhzzyVwyvAlKQgqePaj%2B0IyJMC3w%2BY420U%2BXFei7X9uhGz2iHCCA3EFWogwfj8H6&X-Amz-Signature=cbfae48fad52c6063ed0117dbbef10cdd23b55e55833d0f4b5ace169c9385a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPOML6I%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDWf%2FsaFiD%2FLtlZl7jqHuaE%2BafsoX%2ByAt613JJqZbUnawIhAI3KSZ1%2FmiCTuausKP5j%2FOkEga2AczK8keI%2BFhQCvFSOKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycnYnwm6Fq0qIiZ6oq3AN2xR9njkhBic4sBul%2B%2BVXUxrDdVUuU8SgC5Mxd08qccH%2FnW09r84%2BlbVCBbIHs0CSp5D0CU9DuQqZGgBD5ID90WrCAcR6zYt2XA7EomqoVuYQzmCOZyCYjYyVPYp%2FGU7Vde32nMFMSM6tXWKBOsCzIxNxWa6oFbI5CR3N0xuuWvy2meydYCqhRoUh5BrEk3c6mbuCtOLxRE%2Fi%2FNzMoJCMvGwOt5uVR9%2FSufdT5FchWf%2Fz0ORBjaT4cR5PwJbZFnn7b%2FYqmN5T%2BnR7LIlQInzMZwmZTrsnqlHDDIOjJ9EP7jrp6pqKLMAenaEtWFN08M7MotYUg81s1a%2BUI12C6Sn6rnnleed%2F6H6dXZt8xkHoLtrP0kjHzzxKAGYTlP%2FlgD59sTzX6fXmBjBxOobEyEBCopGzNYDHj0bCb%2FVEeuhsoih8jx4fU09vZFAC2UPnXM907kHJRBS%2ByWdGutjSB%2Bfi%2FYnoC7sOgyHc4qOoPn25yy9DfC5O%2F6UX3TNiJl3oj1kSAQIIBq9N15PYaoHKk6HR6ltoWoj8z6InAL2mOfv9lnB4tChNg8sQDODt4GUm1kVwr0tuCkMRj26r8GqPOrNfbFL9%2By5KM5WCKWH5O6fU0zwGK8g0MWkXZYMYPNjCaxsbLBjqkAbz%2FMLVlI8%2FkJBIuH39t5MSTpwIFZDSImo0uUKPxtSkfiWULPNPaozGezN1DFA4gjyVhRz0aH746R7w0pjp0h58V%2ByNy2DtJYslsj5RvSUptcpJhRoz1zCUNTjGAgrTZ7%2FdQcZOoPj4f9cEs7%2BkQqkSLdS%2FKmhzzyVwyvAlKQgqePaj%2B0IyJMC3w%2BY420U%2BXFei7X9uhGz2iHCCA3EFWogwfj8H6&X-Amz-Signature=a61be0db35a893d355cd6fdee1d98d9a2c29f7285bec8919bb2613255ff4ba1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPOML6I%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDWf%2FsaFiD%2FLtlZl7jqHuaE%2BafsoX%2ByAt613JJqZbUnawIhAI3KSZ1%2FmiCTuausKP5j%2FOkEga2AczK8keI%2BFhQCvFSOKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycnYnwm6Fq0qIiZ6oq3AN2xR9njkhBic4sBul%2B%2BVXUxrDdVUuU8SgC5Mxd08qccH%2FnW09r84%2BlbVCBbIHs0CSp5D0CU9DuQqZGgBD5ID90WrCAcR6zYt2XA7EomqoVuYQzmCOZyCYjYyVPYp%2FGU7Vde32nMFMSM6tXWKBOsCzIxNxWa6oFbI5CR3N0xuuWvy2meydYCqhRoUh5BrEk3c6mbuCtOLxRE%2Fi%2FNzMoJCMvGwOt5uVR9%2FSufdT5FchWf%2Fz0ORBjaT4cR5PwJbZFnn7b%2FYqmN5T%2BnR7LIlQInzMZwmZTrsnqlHDDIOjJ9EP7jrp6pqKLMAenaEtWFN08M7MotYUg81s1a%2BUI12C6Sn6rnnleed%2F6H6dXZt8xkHoLtrP0kjHzzxKAGYTlP%2FlgD59sTzX6fXmBjBxOobEyEBCopGzNYDHj0bCb%2FVEeuhsoih8jx4fU09vZFAC2UPnXM907kHJRBS%2ByWdGutjSB%2Bfi%2FYnoC7sOgyHc4qOoPn25yy9DfC5O%2F6UX3TNiJl3oj1kSAQIIBq9N15PYaoHKk6HR6ltoWoj8z6InAL2mOfv9lnB4tChNg8sQDODt4GUm1kVwr0tuCkMRj26r8GqPOrNfbFL9%2By5KM5WCKWH5O6fU0zwGK8g0MWkXZYMYPNjCaxsbLBjqkAbz%2FMLVlI8%2FkJBIuH39t5MSTpwIFZDSImo0uUKPxtSkfiWULPNPaozGezN1DFA4gjyVhRz0aH746R7w0pjp0h58V%2ByNy2DtJYslsj5RvSUptcpJhRoz1zCUNTjGAgrTZ7%2FdQcZOoPj4f9cEs7%2BkQqkSLdS%2FKmhzzyVwyvAlKQgqePaj%2B0IyJMC3w%2BY420U%2BXFei7X9uhGz2iHCCA3EFWogwfj8H6&X-Amz-Signature=49b8d9b6987eb1fecd7853edb7037e033526289f594f299f8945cd531ee385fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPOML6I%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDWf%2FsaFiD%2FLtlZl7jqHuaE%2BafsoX%2ByAt613JJqZbUnawIhAI3KSZ1%2FmiCTuausKP5j%2FOkEga2AczK8keI%2BFhQCvFSOKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycnYnwm6Fq0qIiZ6oq3AN2xR9njkhBic4sBul%2B%2BVXUxrDdVUuU8SgC5Mxd08qccH%2FnW09r84%2BlbVCBbIHs0CSp5D0CU9DuQqZGgBD5ID90WrCAcR6zYt2XA7EomqoVuYQzmCOZyCYjYyVPYp%2FGU7Vde32nMFMSM6tXWKBOsCzIxNxWa6oFbI5CR3N0xuuWvy2meydYCqhRoUh5BrEk3c6mbuCtOLxRE%2Fi%2FNzMoJCMvGwOt5uVR9%2FSufdT5FchWf%2Fz0ORBjaT4cR5PwJbZFnn7b%2FYqmN5T%2BnR7LIlQInzMZwmZTrsnqlHDDIOjJ9EP7jrp6pqKLMAenaEtWFN08M7MotYUg81s1a%2BUI12C6Sn6rnnleed%2F6H6dXZt8xkHoLtrP0kjHzzxKAGYTlP%2FlgD59sTzX6fXmBjBxOobEyEBCopGzNYDHj0bCb%2FVEeuhsoih8jx4fU09vZFAC2UPnXM907kHJRBS%2ByWdGutjSB%2Bfi%2FYnoC7sOgyHc4qOoPn25yy9DfC5O%2F6UX3TNiJl3oj1kSAQIIBq9N15PYaoHKk6HR6ltoWoj8z6InAL2mOfv9lnB4tChNg8sQDODt4GUm1kVwr0tuCkMRj26r8GqPOrNfbFL9%2By5KM5WCKWH5O6fU0zwGK8g0MWkXZYMYPNjCaxsbLBjqkAbz%2FMLVlI8%2FkJBIuH39t5MSTpwIFZDSImo0uUKPxtSkfiWULPNPaozGezN1DFA4gjyVhRz0aH746R7w0pjp0h58V%2ByNy2DtJYslsj5RvSUptcpJhRoz1zCUNTjGAgrTZ7%2FdQcZOoPj4f9cEs7%2BkQqkSLdS%2FKmhzzyVwyvAlKQgqePaj%2B0IyJMC3w%2BY420U%2BXFei7X9uhGz2iHCCA3EFWogwfj8H6&X-Amz-Signature=d97736bb5c3f8110ac48748c2906112bda26d3549272ec4ca6e3362f4c627cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPOML6I%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDWf%2FsaFiD%2FLtlZl7jqHuaE%2BafsoX%2ByAt613JJqZbUnawIhAI3KSZ1%2FmiCTuausKP5j%2FOkEga2AczK8keI%2BFhQCvFSOKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycnYnwm6Fq0qIiZ6oq3AN2xR9njkhBic4sBul%2B%2BVXUxrDdVUuU8SgC5Mxd08qccH%2FnW09r84%2BlbVCBbIHs0CSp5D0CU9DuQqZGgBD5ID90WrCAcR6zYt2XA7EomqoVuYQzmCOZyCYjYyVPYp%2FGU7Vde32nMFMSM6tXWKBOsCzIxNxWa6oFbI5CR3N0xuuWvy2meydYCqhRoUh5BrEk3c6mbuCtOLxRE%2Fi%2FNzMoJCMvGwOt5uVR9%2FSufdT5FchWf%2Fz0ORBjaT4cR5PwJbZFnn7b%2FYqmN5T%2BnR7LIlQInzMZwmZTrsnqlHDDIOjJ9EP7jrp6pqKLMAenaEtWFN08M7MotYUg81s1a%2BUI12C6Sn6rnnleed%2F6H6dXZt8xkHoLtrP0kjHzzxKAGYTlP%2FlgD59sTzX6fXmBjBxOobEyEBCopGzNYDHj0bCb%2FVEeuhsoih8jx4fU09vZFAC2UPnXM907kHJRBS%2ByWdGutjSB%2Bfi%2FYnoC7sOgyHc4qOoPn25yy9DfC5O%2F6UX3TNiJl3oj1kSAQIIBq9N15PYaoHKk6HR6ltoWoj8z6InAL2mOfv9lnB4tChNg8sQDODt4GUm1kVwr0tuCkMRj26r8GqPOrNfbFL9%2By5KM5WCKWH5O6fU0zwGK8g0MWkXZYMYPNjCaxsbLBjqkAbz%2FMLVlI8%2FkJBIuH39t5MSTpwIFZDSImo0uUKPxtSkfiWULPNPaozGezN1DFA4gjyVhRz0aH746R7w0pjp0h58V%2ByNy2DtJYslsj5RvSUptcpJhRoz1zCUNTjGAgrTZ7%2FdQcZOoPj4f9cEs7%2BkQqkSLdS%2FKmhzzyVwyvAlKQgqePaj%2B0IyJMC3w%2BY420U%2BXFei7X9uhGz2iHCCA3EFWogwfj8H6&X-Amz-Signature=256e3ae373191cac742922f5fc065e7f086025e52209eaf160f0a2f939383b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKKTUQSU%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAfft2KTZSrSKwYU9BtnlJEPk%2F1Fn7Bp13XTEPcthDzuAiBEO9obivIUs1%2BA%2B8cuyL3ht3urJ8sbI8qDZ4UL2zRbtSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmbYzX5gNVEXxcq6WKtwDs%2BYaEsfsLR%2FtPrJe96suHbJYQpJ0153iHYjdZTCE04t81m%2BzmyobqEtFZ1iwc2C7KjxvqR%2BkPNGzObxCutxa4jA%2BPiWv8bB%2BsH62H6GgnOoT0QS5NHwOD5CPTcGHV%2FQbNQpODF5J5vK7STow3%2Fnj1rr3vLJiAOqg8FKvOuLlaRlG3tGYhQ0v6cgF%2FicfVQIpDm5CXUxdIB7wugffZWK4q0uR8nj9O6XSluo6JseChoXLmai8YTokZzDSUP%2F94vOjMQBodu9VgHLezWpKtHgVYQ4nsdg%2FODUAOsY6oYm6oOa5AtoNOboarKuZrAV2xTJTX%2F9mQtP2jzQL%2F8ctu%2F5zdJj4ET0hlmOYlvcPBv4c8OuQrQwqytRI4LJ8ki7tuzULbcjlRmBxXrvOTwmgDUxKOXj1MCc%2Fcq0Kih8juAKaT6PRbSZRzmeOeWL1lTyt2JS1Nxjat5pW9bKIOM6fFv0yD%2FjASge5uWOSBnwElUQqMOSNwHcq9Kw%2BtRw0xROdfNWpgLqS6elBq5EkdbZ0Ho4RewGG%2BWTFI0%2F7PQjN7iK3ka7IhSfQq%2F8HHJ%2FhB1c2qeDlSktagOS4jecbgNLN1Ng0b2HSZyoj3SacBIgU3EdzEg9jOa9iLUm2rE%2BtrF8wlcbGywY6pgELSVm06QRqgggvUnWwAs581LpE%2FrziyKGX0vNfmhiCO55%2BGEMx2GTW5BxM5KdSZV2guD3qj8Ry6115xXrjPQjm53U0EJCvm86ByTbXOjW%2BFwXaYjas4AwYDlpfWYtjNBkZJfTvBFxTFz5wdDad7E8%2FatehFDYtfO86BwTivYlvvT8k2qol80zn%2BXlsa9h2sl9VIwAbQPjbP7i3HXdXIuaGeTRjjpkT&X-Amz-Signature=614e21ab91fc43818428db918ebb4ccb90e4344d6c927f12046ecdcac828688b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKKTUQSU%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAfft2KTZSrSKwYU9BtnlJEPk%2F1Fn7Bp13XTEPcthDzuAiBEO9obivIUs1%2BA%2B8cuyL3ht3urJ8sbI8qDZ4UL2zRbtSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmbYzX5gNVEXxcq6WKtwDs%2BYaEsfsLR%2FtPrJe96suHbJYQpJ0153iHYjdZTCE04t81m%2BzmyobqEtFZ1iwc2C7KjxvqR%2BkPNGzObxCutxa4jA%2BPiWv8bB%2BsH62H6GgnOoT0QS5NHwOD5CPTcGHV%2FQbNQpODF5J5vK7STow3%2Fnj1rr3vLJiAOqg8FKvOuLlaRlG3tGYhQ0v6cgF%2FicfVQIpDm5CXUxdIB7wugffZWK4q0uR8nj9O6XSluo6JseChoXLmai8YTokZzDSUP%2F94vOjMQBodu9VgHLezWpKtHgVYQ4nsdg%2FODUAOsY6oYm6oOa5AtoNOboarKuZrAV2xTJTX%2F9mQtP2jzQL%2F8ctu%2F5zdJj4ET0hlmOYlvcPBv4c8OuQrQwqytRI4LJ8ki7tuzULbcjlRmBxXrvOTwmgDUxKOXj1MCc%2Fcq0Kih8juAKaT6PRbSZRzmeOeWL1lTyt2JS1Nxjat5pW9bKIOM6fFv0yD%2FjASge5uWOSBnwElUQqMOSNwHcq9Kw%2BtRw0xROdfNWpgLqS6elBq5EkdbZ0Ho4RewGG%2BWTFI0%2F7PQjN7iK3ka7IhSfQq%2F8HHJ%2FhB1c2qeDlSktagOS4jecbgNLN1Ng0b2HSZyoj3SacBIgU3EdzEg9jOa9iLUm2rE%2BtrF8wlcbGywY6pgELSVm06QRqgggvUnWwAs581LpE%2FrziyKGX0vNfmhiCO55%2BGEMx2GTW5BxM5KdSZV2guD3qj8Ry6115xXrjPQjm53U0EJCvm86ByTbXOjW%2BFwXaYjas4AwYDlpfWYtjNBkZJfTvBFxTFz5wdDad7E8%2FatehFDYtfO86BwTivYlvvT8k2qol80zn%2BXlsa9h2sl9VIwAbQPjbP7i3HXdXIuaGeTRjjpkT&X-Amz-Signature=c4abb170e6e0aaf3dbaf3b978acb2da6a9af56f871818e1a1195b1b6db7234a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKKTUQSU%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAfft2KTZSrSKwYU9BtnlJEPk%2F1Fn7Bp13XTEPcthDzuAiBEO9obivIUs1%2BA%2B8cuyL3ht3urJ8sbI8qDZ4UL2zRbtSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmbYzX5gNVEXxcq6WKtwDs%2BYaEsfsLR%2FtPrJe96suHbJYQpJ0153iHYjdZTCE04t81m%2BzmyobqEtFZ1iwc2C7KjxvqR%2BkPNGzObxCutxa4jA%2BPiWv8bB%2BsH62H6GgnOoT0QS5NHwOD5CPTcGHV%2FQbNQpODF5J5vK7STow3%2Fnj1rr3vLJiAOqg8FKvOuLlaRlG3tGYhQ0v6cgF%2FicfVQIpDm5CXUxdIB7wugffZWK4q0uR8nj9O6XSluo6JseChoXLmai8YTokZzDSUP%2F94vOjMQBodu9VgHLezWpKtHgVYQ4nsdg%2FODUAOsY6oYm6oOa5AtoNOboarKuZrAV2xTJTX%2F9mQtP2jzQL%2F8ctu%2F5zdJj4ET0hlmOYlvcPBv4c8OuQrQwqytRI4LJ8ki7tuzULbcjlRmBxXrvOTwmgDUxKOXj1MCc%2Fcq0Kih8juAKaT6PRbSZRzmeOeWL1lTyt2JS1Nxjat5pW9bKIOM6fFv0yD%2FjASge5uWOSBnwElUQqMOSNwHcq9Kw%2BtRw0xROdfNWpgLqS6elBq5EkdbZ0Ho4RewGG%2BWTFI0%2F7PQjN7iK3ka7IhSfQq%2F8HHJ%2FhB1c2qeDlSktagOS4jecbgNLN1Ng0b2HSZyoj3SacBIgU3EdzEg9jOa9iLUm2rE%2BtrF8wlcbGywY6pgELSVm06QRqgggvUnWwAs581LpE%2FrziyKGX0vNfmhiCO55%2BGEMx2GTW5BxM5KdSZV2guD3qj8Ry6115xXrjPQjm53U0EJCvm86ByTbXOjW%2BFwXaYjas4AwYDlpfWYtjNBkZJfTvBFxTFz5wdDad7E8%2FatehFDYtfO86BwTivYlvvT8k2qol80zn%2BXlsa9h2sl9VIwAbQPjbP7i3HXdXIuaGeTRjjpkT&X-Amz-Signature=b4d819a5ae097e4213ea41de513279f782ad1b7de7702cdb0aa8e8c559a29fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKKTUQSU%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAfft2KTZSrSKwYU9BtnlJEPk%2F1Fn7Bp13XTEPcthDzuAiBEO9obivIUs1%2BA%2B8cuyL3ht3urJ8sbI8qDZ4UL2zRbtSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmbYzX5gNVEXxcq6WKtwDs%2BYaEsfsLR%2FtPrJe96suHbJYQpJ0153iHYjdZTCE04t81m%2BzmyobqEtFZ1iwc2C7KjxvqR%2BkPNGzObxCutxa4jA%2BPiWv8bB%2BsH62H6GgnOoT0QS5NHwOD5CPTcGHV%2FQbNQpODF5J5vK7STow3%2Fnj1rr3vLJiAOqg8FKvOuLlaRlG3tGYhQ0v6cgF%2FicfVQIpDm5CXUxdIB7wugffZWK4q0uR8nj9O6XSluo6JseChoXLmai8YTokZzDSUP%2F94vOjMQBodu9VgHLezWpKtHgVYQ4nsdg%2FODUAOsY6oYm6oOa5AtoNOboarKuZrAV2xTJTX%2F9mQtP2jzQL%2F8ctu%2F5zdJj4ET0hlmOYlvcPBv4c8OuQrQwqytRI4LJ8ki7tuzULbcjlRmBxXrvOTwmgDUxKOXj1MCc%2Fcq0Kih8juAKaT6PRbSZRzmeOeWL1lTyt2JS1Nxjat5pW9bKIOM6fFv0yD%2FjASge5uWOSBnwElUQqMOSNwHcq9Kw%2BtRw0xROdfNWpgLqS6elBq5EkdbZ0Ho4RewGG%2BWTFI0%2F7PQjN7iK3ka7IhSfQq%2F8HHJ%2FhB1c2qeDlSktagOS4jecbgNLN1Ng0b2HSZyoj3SacBIgU3EdzEg9jOa9iLUm2rE%2BtrF8wlcbGywY6pgELSVm06QRqgggvUnWwAs581LpE%2FrziyKGX0vNfmhiCO55%2BGEMx2GTW5BxM5KdSZV2guD3qj8Ry6115xXrjPQjm53U0EJCvm86ByTbXOjW%2BFwXaYjas4AwYDlpfWYtjNBkZJfTvBFxTFz5wdDad7E8%2FatehFDYtfO86BwTivYlvvT8k2qol80zn%2BXlsa9h2sl9VIwAbQPjbP7i3HXdXIuaGeTRjjpkT&X-Amz-Signature=84f4afa81b3bcefaef65ba5e784d6d16afeab4ab3751b2c2673af7628a2c4488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKKTUQSU%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAfft2KTZSrSKwYU9BtnlJEPk%2F1Fn7Bp13XTEPcthDzuAiBEO9obivIUs1%2BA%2B8cuyL3ht3urJ8sbI8qDZ4UL2zRbtSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmbYzX5gNVEXxcq6WKtwDs%2BYaEsfsLR%2FtPrJe96suHbJYQpJ0153iHYjdZTCE04t81m%2BzmyobqEtFZ1iwc2C7KjxvqR%2BkPNGzObxCutxa4jA%2BPiWv8bB%2BsH62H6GgnOoT0QS5NHwOD5CPTcGHV%2FQbNQpODF5J5vK7STow3%2Fnj1rr3vLJiAOqg8FKvOuLlaRlG3tGYhQ0v6cgF%2FicfVQIpDm5CXUxdIB7wugffZWK4q0uR8nj9O6XSluo6JseChoXLmai8YTokZzDSUP%2F94vOjMQBodu9VgHLezWpKtHgVYQ4nsdg%2FODUAOsY6oYm6oOa5AtoNOboarKuZrAV2xTJTX%2F9mQtP2jzQL%2F8ctu%2F5zdJj4ET0hlmOYlvcPBv4c8OuQrQwqytRI4LJ8ki7tuzULbcjlRmBxXrvOTwmgDUxKOXj1MCc%2Fcq0Kih8juAKaT6PRbSZRzmeOeWL1lTyt2JS1Nxjat5pW9bKIOM6fFv0yD%2FjASge5uWOSBnwElUQqMOSNwHcq9Kw%2BtRw0xROdfNWpgLqS6elBq5EkdbZ0Ho4RewGG%2BWTFI0%2F7PQjN7iK3ka7IhSfQq%2F8HHJ%2FhB1c2qeDlSktagOS4jecbgNLN1Ng0b2HSZyoj3SacBIgU3EdzEg9jOa9iLUm2rE%2BtrF8wlcbGywY6pgELSVm06QRqgggvUnWwAs581LpE%2FrziyKGX0vNfmhiCO55%2BGEMx2GTW5BxM5KdSZV2guD3qj8Ry6115xXrjPQjm53U0EJCvm86ByTbXOjW%2BFwXaYjas4AwYDlpfWYtjNBkZJfTvBFxTFz5wdDad7E8%2FatehFDYtfO86BwTivYlvvT8k2qol80zn%2BXlsa9h2sl9VIwAbQPjbP7i3HXdXIuaGeTRjjpkT&X-Amz-Signature=9017f623fe9853f7bdffb29156c088f705b040ad3f082f40027c0d912ebfd699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUF7OY3P%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCoa4cdjScWetfr4ndeESBp5RBTbSilxsGWiNmDzyThLgIgbfI7SllWqxHa8QVkdYt6yFiIbwNv3zP6AYMbMQU5hwcqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXWULXbFN83nebvayrcAzz%2B57vOH%2B499nv0by5GoQZObfz7zAk3%2BYXRqjUICQ5Yfb4V7OkS6x77FiOp8gbsqKYFfCWh0jt%2BR8rc7nNeqA1TA9TfdOaVsFQ1ZIy%2FxCI9gc%2FlV2Lvb1Gh7V2ZwRKO7y4Zpf4RIeK20lCpk%2BC3Sqspvz9US2C6GLN9irMQty7mJv0TuN67jgxlAQETbD9pq7TtHgSfwky4E5PxIoGgTx3mZOmXdaG0VcZl%2BxEA%2FtNFSJpAr9NYzGbZE7LudrDPBt00ZlU6kuzEEEz1sa5Pj0TC75Xq7ZK19u%2FC7bEnqUeK4Wfk8WnE2yxdMkEzuS0wuHMgqW9MtaxfAyZ9GfFGmkCHPDQhHSabWjuXfLlC5DP7tBn1VxUCRT%2B436cK2t3cZ5MglOiepYAcPJHxo%2BHzCEeNAn3qTQcZzbuUUngRQrQXa5l7nBeK2QSfhjt46TF01%2FuaeEIKk1j2xGjiDvqXCl3%2FvmjejSiYYYBTrrBWdLxuSc3wiw09eqIVdt%2BdVujpAtBincuqiJFas3SEka3xr1NFg1XY41TTMz1drk8LLpF1d%2BFphl1gSylpuLHs6WbeHf1F207%2F7zinHeKZOzyf3BH1DeMuOyIASF7HLT5GJvDUCnVU0ce3UnuL5jLKMNbHxssGOqUBXxRmvD315t7zWWURMLl8dWyMJFtMV%2B2WFbam1pVb9HwpjeNbu0de5yz%2Fm%2FelSsCgV3yr%2Bj8OmszNxK92Yhx4DsFkIUId2m0imxzrflsuLT5wDYkF5jBSxNH0Ly%2FL833VZ4Gio61eJxNJo0U3iKJkGC7RczW2oGnjFMrF6%2BwdrqR2YARkOVzt%2FXqU1MwbzZbubRqXjZTRuCD0AS3xwJuhDGd%2BvR1a&X-Amz-Signature=7b5669dc5a6b8da4ff36ffc9baa5d90de4029ee9bd3540ccd07ff3d569e76d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUF7OY3P%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCoa4cdjScWetfr4ndeESBp5RBTbSilxsGWiNmDzyThLgIgbfI7SllWqxHa8QVkdYt6yFiIbwNv3zP6AYMbMQU5hwcqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXWULXbFN83nebvayrcAzz%2B57vOH%2B499nv0by5GoQZObfz7zAk3%2BYXRqjUICQ5Yfb4V7OkS6x77FiOp8gbsqKYFfCWh0jt%2BR8rc7nNeqA1TA9TfdOaVsFQ1ZIy%2FxCI9gc%2FlV2Lvb1Gh7V2ZwRKO7y4Zpf4RIeK20lCpk%2BC3Sqspvz9US2C6GLN9irMQty7mJv0TuN67jgxlAQETbD9pq7TtHgSfwky4E5PxIoGgTx3mZOmXdaG0VcZl%2BxEA%2FtNFSJpAr9NYzGbZE7LudrDPBt00ZlU6kuzEEEz1sa5Pj0TC75Xq7ZK19u%2FC7bEnqUeK4Wfk8WnE2yxdMkEzuS0wuHMgqW9MtaxfAyZ9GfFGmkCHPDQhHSabWjuXfLlC5DP7tBn1VxUCRT%2B436cK2t3cZ5MglOiepYAcPJHxo%2BHzCEeNAn3qTQcZzbuUUngRQrQXa5l7nBeK2QSfhjt46TF01%2FuaeEIKk1j2xGjiDvqXCl3%2FvmjejSiYYYBTrrBWdLxuSc3wiw09eqIVdt%2BdVujpAtBincuqiJFas3SEka3xr1NFg1XY41TTMz1drk8LLpF1d%2BFphl1gSylpuLHs6WbeHf1F207%2F7zinHeKZOzyf3BH1DeMuOyIASF7HLT5GJvDUCnVU0ce3UnuL5jLKMNbHxssGOqUBXxRmvD315t7zWWURMLl8dWyMJFtMV%2B2WFbam1pVb9HwpjeNbu0de5yz%2Fm%2FelSsCgV3yr%2Bj8OmszNxK92Yhx4DsFkIUId2m0imxzrflsuLT5wDYkF5jBSxNH0Ly%2FL833VZ4Gio61eJxNJo0U3iKJkGC7RczW2oGnjFMrF6%2BwdrqR2YARkOVzt%2FXqU1MwbzZbubRqXjZTRuCD0AS3xwJuhDGd%2BvR1a&X-Amz-Signature=552f9f5c69f5e28901bd765ac333f2ea6d0c3c76f4c670d50f944269bd1bacc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUF7OY3P%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCoa4cdjScWetfr4ndeESBp5RBTbSilxsGWiNmDzyThLgIgbfI7SllWqxHa8QVkdYt6yFiIbwNv3zP6AYMbMQU5hwcqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXWULXbFN83nebvayrcAzz%2B57vOH%2B499nv0by5GoQZObfz7zAk3%2BYXRqjUICQ5Yfb4V7OkS6x77FiOp8gbsqKYFfCWh0jt%2BR8rc7nNeqA1TA9TfdOaVsFQ1ZIy%2FxCI9gc%2FlV2Lvb1Gh7V2ZwRKO7y4Zpf4RIeK20lCpk%2BC3Sqspvz9US2C6GLN9irMQty7mJv0TuN67jgxlAQETbD9pq7TtHgSfwky4E5PxIoGgTx3mZOmXdaG0VcZl%2BxEA%2FtNFSJpAr9NYzGbZE7LudrDPBt00ZlU6kuzEEEz1sa5Pj0TC75Xq7ZK19u%2FC7bEnqUeK4Wfk8WnE2yxdMkEzuS0wuHMgqW9MtaxfAyZ9GfFGmkCHPDQhHSabWjuXfLlC5DP7tBn1VxUCRT%2B436cK2t3cZ5MglOiepYAcPJHxo%2BHzCEeNAn3qTQcZzbuUUngRQrQXa5l7nBeK2QSfhjt46TF01%2FuaeEIKk1j2xGjiDvqXCl3%2FvmjejSiYYYBTrrBWdLxuSc3wiw09eqIVdt%2BdVujpAtBincuqiJFas3SEka3xr1NFg1XY41TTMz1drk8LLpF1d%2BFphl1gSylpuLHs6WbeHf1F207%2F7zinHeKZOzyf3BH1DeMuOyIASF7HLT5GJvDUCnVU0ce3UnuL5jLKMNbHxssGOqUBXxRmvD315t7zWWURMLl8dWyMJFtMV%2B2WFbam1pVb9HwpjeNbu0de5yz%2Fm%2FelSsCgV3yr%2Bj8OmszNxK92Yhx4DsFkIUId2m0imxzrflsuLT5wDYkF5jBSxNH0Ly%2FL833VZ4Gio61eJxNJo0U3iKJkGC7RczW2oGnjFMrF6%2BwdrqR2YARkOVzt%2FXqU1MwbzZbubRqXjZTRuCD0AS3xwJuhDGd%2BvR1a&X-Amz-Signature=5b0ba9166ce39918152c06c0ab6ff421117ab966f3f41a6ed93a68ef123dbe7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OMLMXIW%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDcYfCkipB9HupjFub185DzcP%2BLa06ZhsaHeYprT7QjtwIhALFT2AasU2atE0rhrfFT9FzfsF93zqeXn0bEMCQHJXloKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP1jNn%2FIvP2uGG5yEq3AOztBtEiP2wHuMGnW5zeSfhYBzje5FGhwbNN0xKuspLEGfATlXw0HfIx%2BVEXmcoQE7mN7t658jZKHXZfLbjz5tdIL%2Fpm%2BO6j%2FQwy9fC%2FPDDSeGxVxg3cqv5orh290nMyOiihHK0UMxfBR3duSv1lvt9MHiE%2FSu12agRvhcDRtPmWDZKUOhhkL4dtabkLNHpbZp%2B3i3iJac9ZI5UTw9Zgvqpo%2F0I%2FUnJv1CG1HcRXQp8fm8jzICD4qbXpBdz0pG1pDKdS8k9mmu2lNpcT1Z4DMQg5TUt4Gvys33qGNivcjy3yh4lJKtA7%2B8HszMZ0Fb2MLNvhDSygy1i4IFGjzWPiE8RvpJosEVDtEtUAvn38ytc1wDoBPOjbyjioJNQQJMhdM5P%2F7J4Ro%2Fp0FeSfZ3Gm1JpatxQ4b2YQYAVFu7k%2B0Xo3R3dBY9vLAl3aaNgs7ekGhyuS0HfbWt9ecQaiMonLLiC%2FQ%2B4dENoEar74GEHvNZLudFiWGAE3L1Xj3Z6TdE74kD3qqj2J2gF5bkAaOG%2BdIdRhosFAGtyIZNhW%2FBfBtratjLH4cZAhNj6nVSnUUjnuG1XF8EzPt1m5XIW%2BHdNjTzbSzrq1Yn4hVSQR7xm5lBHiIovFZLGnkJYxUT4xTCux8bLBjqkAZQe7f7huLidu9N8WSA2q1%2B2sIaWA51f7tPTaLvfoBQ8F%2FssoRH98hgEiil4srDJ6Vyz5begx1g4uoHLJXAfGj5WCCUwMb0adG5G6oA7TvOu8GJBN3Y3KQjbD0XyHuyWSoBf%2BF79sRlXeFntrtqd0WwH1F%2BcjPPsPKHDi32Zi3BpHHltT9IcHXOq0Sd5F1HjpprO16WlXTJkICrLsitjnOmwMerY&X-Amz-Signature=745d8bd293576c0907283205ce415a85c8c5573721e7fd3c46de60ca7ca0b322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OMLMXIW%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDcYfCkipB9HupjFub185DzcP%2BLa06ZhsaHeYprT7QjtwIhALFT2AasU2atE0rhrfFT9FzfsF93zqeXn0bEMCQHJXloKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP1jNn%2FIvP2uGG5yEq3AOztBtEiP2wHuMGnW5zeSfhYBzje5FGhwbNN0xKuspLEGfATlXw0HfIx%2BVEXmcoQE7mN7t658jZKHXZfLbjz5tdIL%2Fpm%2BO6j%2FQwy9fC%2FPDDSeGxVxg3cqv5orh290nMyOiihHK0UMxfBR3duSv1lvt9MHiE%2FSu12agRvhcDRtPmWDZKUOhhkL4dtabkLNHpbZp%2B3i3iJac9ZI5UTw9Zgvqpo%2F0I%2FUnJv1CG1HcRXQp8fm8jzICD4qbXpBdz0pG1pDKdS8k9mmu2lNpcT1Z4DMQg5TUt4Gvys33qGNivcjy3yh4lJKtA7%2B8HszMZ0Fb2MLNvhDSygy1i4IFGjzWPiE8RvpJosEVDtEtUAvn38ytc1wDoBPOjbyjioJNQQJMhdM5P%2F7J4Ro%2Fp0FeSfZ3Gm1JpatxQ4b2YQYAVFu7k%2B0Xo3R3dBY9vLAl3aaNgs7ekGhyuS0HfbWt9ecQaiMonLLiC%2FQ%2B4dENoEar74GEHvNZLudFiWGAE3L1Xj3Z6TdE74kD3qqj2J2gF5bkAaOG%2BdIdRhosFAGtyIZNhW%2FBfBtratjLH4cZAhNj6nVSnUUjnuG1XF8EzPt1m5XIW%2BHdNjTzbSzrq1Yn4hVSQR7xm5lBHiIovFZLGnkJYxUT4xTCux8bLBjqkAZQe7f7huLidu9N8WSA2q1%2B2sIaWA51f7tPTaLvfoBQ8F%2FssoRH98hgEiil4srDJ6Vyz5begx1g4uoHLJXAfGj5WCCUwMb0adG5G6oA7TvOu8GJBN3Y3KQjbD0XyHuyWSoBf%2BF79sRlXeFntrtqd0WwH1F%2BcjPPsPKHDi32Zi3BpHHltT9IcHXOq0Sd5F1HjpprO16WlXTJkICrLsitjnOmwMerY&X-Amz-Signature=4eac66de369e1f0e4689a44bac88e27eedfe4084347452a9b934f9c52db6b70e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGS6SBVG%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCvOJ4UZzTHd%2FZKS3dVB0liu6276byj67wlzF0eL0sjdwIhALgsiCWNdU7tIAJKo%2BhH06jmpMp2tY5hicEEXGrazXgBKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgWw9KG%2BqQeZVbq7gq3APY4c%2BY%2FYLCI0HdblTmrDai8yUx4GUmeEhhyW%2B8G1ddNCu8YKi3T2H2I%2BYV%2Bt3B0A0Fd7EJSAT4nXpZKVJpnUn8RF9NTfxXLRcwmYQ%2Bju9DuJjNdoqDnLdKKbP5NNsMx8uEojevazfF6jCmqPkgzsaJAJnu2%2FY2qX%2FWjYREBgvmCwRgjBHo3sWkmFguXbE%2BIYfNM8%2BzdniebaARdfZMMbnIM%2FkHrroFURCe8Spn0iMOwkiUnB3meKHleY6WZyunBPpCNDCrOPMTvP%2FZZA%2BdaiUcegepH%2Bahf8TIb0psXKZQ4mtV%2BxScVhEYVS5vxXC1m6adOD3973Vzd%2BnFO4F8F4Oz973hYbquFRns5KbKVVCxJvQqoqJiTM9ZF3dL4%2BuQELN5OWgilACYSi3mdKpPJ%2BeyAtQrNh5ekjlovw3tGGNV7kPo4jmHqhlL%2B9vrlof93XBF%2B%2FGmy5G7ZZnCnWR0IbOExdKsHOFUE%2FS4ZWPj2nxIcqor0L9ZXlITuOtZ7GfVB7p2C96NYH80rjcNDB4HGRoyvAhEyM%2Fl49o8PpAPRbfdQ4feCQNB2kn%2FQDjKf4JLpdzl7FfJO7mnBTWoeb6Tad1bgtF%2Ba5PisMB7TJkRkxjW9VERP%2Bab1Qg2UnL0QTDMx8bLBjqkAW0f1tN%2BmthvSyLB%2FjNhCjGYQS7m7l8cYga54IFze9vV50Sn1s0DRZh09LIj2wEjtwI93eOZsORUtvae%2BJwhwp3t3vjJYaUhzy9Xcv13Rim4YdHyAeDc6kYHIjKhZe2VV9d5s5hAoKg3yCPmdrwXHP0rs1F4NcbT4deg6DvLU0MBBY2koDmyf%2FOktSzZYHpbjktw4m4LjizClGuWwo%2BNtPJVEUt6&X-Amz-Signature=af6cae5051548b4e81714a4e4159169a37edf8104e70dab4388fa7baa46bb823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGS6SBVG%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCvOJ4UZzTHd%2FZKS3dVB0liu6276byj67wlzF0eL0sjdwIhALgsiCWNdU7tIAJKo%2BhH06jmpMp2tY5hicEEXGrazXgBKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgWw9KG%2BqQeZVbq7gq3APY4c%2BY%2FYLCI0HdblTmrDai8yUx4GUmeEhhyW%2B8G1ddNCu8YKi3T2H2I%2BYV%2Bt3B0A0Fd7EJSAT4nXpZKVJpnUn8RF9NTfxXLRcwmYQ%2Bju9DuJjNdoqDnLdKKbP5NNsMx8uEojevazfF6jCmqPkgzsaJAJnu2%2FY2qX%2FWjYREBgvmCwRgjBHo3sWkmFguXbE%2BIYfNM8%2BzdniebaARdfZMMbnIM%2FkHrroFURCe8Spn0iMOwkiUnB3meKHleY6WZyunBPpCNDCrOPMTvP%2FZZA%2BdaiUcegepH%2Bahf8TIb0psXKZQ4mtV%2BxScVhEYVS5vxXC1m6adOD3973Vzd%2BnFO4F8F4Oz973hYbquFRns5KbKVVCxJvQqoqJiTM9ZF3dL4%2BuQELN5OWgilACYSi3mdKpPJ%2BeyAtQrNh5ekjlovw3tGGNV7kPo4jmHqhlL%2B9vrlof93XBF%2B%2FGmy5G7ZZnCnWR0IbOExdKsHOFUE%2FS4ZWPj2nxIcqor0L9ZXlITuOtZ7GfVB7p2C96NYH80rjcNDB4HGRoyvAhEyM%2Fl49o8PpAPRbfdQ4feCQNB2kn%2FQDjKf4JLpdzl7FfJO7mnBTWoeb6Tad1bgtF%2Ba5PisMB7TJkRkxjW9VERP%2Bab1Qg2UnL0QTDMx8bLBjqkAW0f1tN%2BmthvSyLB%2FjNhCjGYQS7m7l8cYga54IFze9vV50Sn1s0DRZh09LIj2wEjtwI93eOZsORUtvae%2BJwhwp3t3vjJYaUhzy9Xcv13Rim4YdHyAeDc6kYHIjKhZe2VV9d5s5hAoKg3yCPmdrwXHP0rs1F4NcbT4deg6DvLU0MBBY2koDmyf%2FOktSzZYHpbjktw4m4LjizClGuWwo%2BNtPJVEUt6&X-Amz-Signature=7715a5969a2fbb189431b03cbcadc4f9db506f8f35b3c463446c36ebca93d510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGS6SBVG%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCvOJ4UZzTHd%2FZKS3dVB0liu6276byj67wlzF0eL0sjdwIhALgsiCWNdU7tIAJKo%2BhH06jmpMp2tY5hicEEXGrazXgBKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgWw9KG%2BqQeZVbq7gq3APY4c%2BY%2FYLCI0HdblTmrDai8yUx4GUmeEhhyW%2B8G1ddNCu8YKi3T2H2I%2BYV%2Bt3B0A0Fd7EJSAT4nXpZKVJpnUn8RF9NTfxXLRcwmYQ%2Bju9DuJjNdoqDnLdKKbP5NNsMx8uEojevazfF6jCmqPkgzsaJAJnu2%2FY2qX%2FWjYREBgvmCwRgjBHo3sWkmFguXbE%2BIYfNM8%2BzdniebaARdfZMMbnIM%2FkHrroFURCe8Spn0iMOwkiUnB3meKHleY6WZyunBPpCNDCrOPMTvP%2FZZA%2BdaiUcegepH%2Bahf8TIb0psXKZQ4mtV%2BxScVhEYVS5vxXC1m6adOD3973Vzd%2BnFO4F8F4Oz973hYbquFRns5KbKVVCxJvQqoqJiTM9ZF3dL4%2BuQELN5OWgilACYSi3mdKpPJ%2BeyAtQrNh5ekjlovw3tGGNV7kPo4jmHqhlL%2B9vrlof93XBF%2B%2FGmy5G7ZZnCnWR0IbOExdKsHOFUE%2FS4ZWPj2nxIcqor0L9ZXlITuOtZ7GfVB7p2C96NYH80rjcNDB4HGRoyvAhEyM%2Fl49o8PpAPRbfdQ4feCQNB2kn%2FQDjKf4JLpdzl7FfJO7mnBTWoeb6Tad1bgtF%2Ba5PisMB7TJkRkxjW9VERP%2Bab1Qg2UnL0QTDMx8bLBjqkAW0f1tN%2BmthvSyLB%2FjNhCjGYQS7m7l8cYga54IFze9vV50Sn1s0DRZh09LIj2wEjtwI93eOZsORUtvae%2BJwhwp3t3vjJYaUhzy9Xcv13Rim4YdHyAeDc6kYHIjKhZe2VV9d5s5hAoKg3yCPmdrwXHP0rs1F4NcbT4deg6DvLU0MBBY2koDmyf%2FOktSzZYHpbjktw4m4LjizClGuWwo%2BNtPJVEUt6&X-Amz-Signature=717b8dcdbb88c5606b34551dade5b0265e85f265169a6efdfb717b3b6432b997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGS6SBVG%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCvOJ4UZzTHd%2FZKS3dVB0liu6276byj67wlzF0eL0sjdwIhALgsiCWNdU7tIAJKo%2BhH06jmpMp2tY5hicEEXGrazXgBKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgWw9KG%2BqQeZVbq7gq3APY4c%2BY%2FYLCI0HdblTmrDai8yUx4GUmeEhhyW%2B8G1ddNCu8YKi3T2H2I%2BYV%2Bt3B0A0Fd7EJSAT4nXpZKVJpnUn8RF9NTfxXLRcwmYQ%2Bju9DuJjNdoqDnLdKKbP5NNsMx8uEojevazfF6jCmqPkgzsaJAJnu2%2FY2qX%2FWjYREBgvmCwRgjBHo3sWkmFguXbE%2BIYfNM8%2BzdniebaARdfZMMbnIM%2FkHrroFURCe8Spn0iMOwkiUnB3meKHleY6WZyunBPpCNDCrOPMTvP%2FZZA%2BdaiUcegepH%2Bahf8TIb0psXKZQ4mtV%2BxScVhEYVS5vxXC1m6adOD3973Vzd%2BnFO4F8F4Oz973hYbquFRns5KbKVVCxJvQqoqJiTM9ZF3dL4%2BuQELN5OWgilACYSi3mdKpPJ%2BeyAtQrNh5ekjlovw3tGGNV7kPo4jmHqhlL%2B9vrlof93XBF%2B%2FGmy5G7ZZnCnWR0IbOExdKsHOFUE%2FS4ZWPj2nxIcqor0L9ZXlITuOtZ7GfVB7p2C96NYH80rjcNDB4HGRoyvAhEyM%2Fl49o8PpAPRbfdQ4feCQNB2kn%2FQDjKf4JLpdzl7FfJO7mnBTWoeb6Tad1bgtF%2Ba5PisMB7TJkRkxjW9VERP%2Bab1Qg2UnL0QTDMx8bLBjqkAW0f1tN%2BmthvSyLB%2FjNhCjGYQS7m7l8cYga54IFze9vV50Sn1s0DRZh09LIj2wEjtwI93eOZsORUtvae%2BJwhwp3t3vjJYaUhzy9Xcv13Rim4YdHyAeDc6kYHIjKhZe2VV9d5s5hAoKg3yCPmdrwXHP0rs1F4NcbT4deg6DvLU0MBBY2koDmyf%2FOktSzZYHpbjktw4m4LjizClGuWwo%2BNtPJVEUt6&X-Amz-Signature=319d44d032e5dc9d27f30491db5691124627b763ee971380af527438ceb27970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGS6SBVG%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCvOJ4UZzTHd%2FZKS3dVB0liu6276byj67wlzF0eL0sjdwIhALgsiCWNdU7tIAJKo%2BhH06jmpMp2tY5hicEEXGrazXgBKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgWw9KG%2BqQeZVbq7gq3APY4c%2BY%2FYLCI0HdblTmrDai8yUx4GUmeEhhyW%2B8G1ddNCu8YKi3T2H2I%2BYV%2Bt3B0A0Fd7EJSAT4nXpZKVJpnUn8RF9NTfxXLRcwmYQ%2Bju9DuJjNdoqDnLdKKbP5NNsMx8uEojevazfF6jCmqPkgzsaJAJnu2%2FY2qX%2FWjYREBgvmCwRgjBHo3sWkmFguXbE%2BIYfNM8%2BzdniebaARdfZMMbnIM%2FkHrroFURCe8Spn0iMOwkiUnB3meKHleY6WZyunBPpCNDCrOPMTvP%2FZZA%2BdaiUcegepH%2Bahf8TIb0psXKZQ4mtV%2BxScVhEYVS5vxXC1m6adOD3973Vzd%2BnFO4F8F4Oz973hYbquFRns5KbKVVCxJvQqoqJiTM9ZF3dL4%2BuQELN5OWgilACYSi3mdKpPJ%2BeyAtQrNh5ekjlovw3tGGNV7kPo4jmHqhlL%2B9vrlof93XBF%2B%2FGmy5G7ZZnCnWR0IbOExdKsHOFUE%2FS4ZWPj2nxIcqor0L9ZXlITuOtZ7GfVB7p2C96NYH80rjcNDB4HGRoyvAhEyM%2Fl49o8PpAPRbfdQ4feCQNB2kn%2FQDjKf4JLpdzl7FfJO7mnBTWoeb6Tad1bgtF%2Ba5PisMB7TJkRkxjW9VERP%2Bab1Qg2UnL0QTDMx8bLBjqkAW0f1tN%2BmthvSyLB%2FjNhCjGYQS7m7l8cYga54IFze9vV50Sn1s0DRZh09LIj2wEjtwI93eOZsORUtvae%2BJwhwp3t3vjJYaUhzy9Xcv13Rim4YdHyAeDc6kYHIjKhZe2VV9d5s5hAoKg3yCPmdrwXHP0rs1F4NcbT4deg6DvLU0MBBY2koDmyf%2FOktSzZYHpbjktw4m4LjizClGuWwo%2BNtPJVEUt6&X-Amz-Signature=e9290598f6835aa313f80f61b4ece5081008fab57a8ff9bad870ecae2a6a82f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSEPU4NL%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T041824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCY5ljfj9h9KKKWVHMFd%2BFt1sDG8j0Cdbi8PdG52FQIRQIhAM4%2FjuOcRaRAG%2F23uyJjP66xCeZmjDLpbU8n7Y3Likc0KogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaeGOh%2BmGvl6Wldv0q3APkiRyrADCAt6R6uhbu8cisLcPyfiPWhIszrTek5pkWMKy4%2FRyhdm8rf9iFA0w3kdS4Qk4l4qQWccT24EVSnQzBVC25zsBz3xTrjRA0tM8sLu2N7wAErsZQV3cgYNEKM74MGZfy2MVqks9QDUALOP2rfnpBD3rL%2BGmHuNtwPeqoO%2FbGTjGdAStUAVrRl0sQ%2FWpGaqn67EZHR4H3oMK5LVUhwWU2ew5e7XTNbCwAu8BczoKAgsAUZ92eD2O22wqbkMgNYysYnPyKj01WgzGmc19OLoorEqp8JvoTOTK0%2F%2B9j7xjZINedX2AXmccMzSuSbJsCdJtY9Ie7o3EilAc%2FSEYSy9ClnE4VJ0cSJsyiF0%2BFEhEZ98pFUQIVeK0dqNigOJtbOIAWfbNNOuILWfgVAVUeCZKTiQ0YzK6pgGmZybGG3rbZMuHZwLPxWbil7EEhpXwsT81ZA0znu4IrRscmVVsSMOcJ6JAawUcy3bvjFE04buO%2BUIIHgi8Q0yuGd0TU9mKMDxonxoE1BnGnU5x2ovJgrogRecGAupsx3eVMqO3gyoqYebrYumAjzv2lHzSBwtST76EvaYpzfdj3C48oGYNCs2A9R1H50tYbSq78LILyS6twMm8icg%2BOTtNQSTCbxsbLBjqkARAfZhdFKCAP1zSwZ8rVtHkBWoYRVDBin58cPyq%2FIC%2BOvq%2BvhLgqLy5aeBGu7OEM60wY4YbdU9%2BbkFyZAYmHvMh6iEpgYJ%2FwsetO5WVrxEhHZnzJtoZBxLBUFFASmZQZUnbKFOaiUBasTPFCf0GabPWOFvgnu54yYdNdVJbifcTeuvMnJsB3N26bwm9PEi8A4gmBNJLIKGfXgDCheWAMx17wtHyx&X-Amz-Signature=e9d6aaa40ca336e6b2507d01f92d2f8afd56289323547d92a306fbe41c9fe5a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

