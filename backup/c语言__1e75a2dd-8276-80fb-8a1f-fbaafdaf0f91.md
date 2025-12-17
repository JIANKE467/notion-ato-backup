
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS527FW6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2CNUTap%2ByZqOsCIWYotdD8OSnRzqE2UT%2FM%2F44qHxs8AiBi%2Fff%2F5kBaH8yccCGaZDy1YBCj8mFUO3KVF4NhnNjwjir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM5WhpGzTO5sEtmH5FKtwDb7mpcXaNlrDn8sF1IhsbW44buFp26ZbM20WcwIoZN7KOMMbG2wG63VTKQ%2BYSHmVTnJ1qsyWFdbzCqAVyP1otyT6C5I4zA0HFFmBgfKxuP3t9oOhM9fSTh%2FogrFxV9eF%2FXcSMFpE5pfB%2BANHQoe0ZLlhjJh9HYzY1JWjyZdvJgeywo%2BWJOWZY7zc12V6yNaXPO5ogYbIcJPIOSzjh3KzB5RNGLmJEFoO3cx6N5MVzHO%2FTzUr52MnLInt5zol4OLoMcjGb9%2F9m4JxEzKm9bceAY71p8y2h%2BlDb%2FzoiqrcgJvECy5BQOmTJ9VHcQybtE8dtw1k5IOCqZQyy4JAcwS7mcsSTERdHBk7saPwTm%2BA1VX3fzLzODeGziJysmGbfLutEUhgWaUOB%2FWvlOcQD2EU16cwPtzcOErz%2FHAKIlC2tYyjeHeRHzZxs8NKggmjHDogZOTXbY86R60TEhj9%2BV3G6J4w6PxxFPIosd6QI3ICgIkYX%2B4jWrSdW16V6z8fifEHlv%2BEP2Zl%2Bgn6Jo%2BfvUCOX1RgBcOQfQcKNtfyB3RUSgn0tlXXEqC8nRSHZpt5MOwvxoZMZxb49CYw6tlPfKl7k2o2zyRxWqOclhBBaNonW8GaB8RpZIoxGL%2Fk%2BgGIwqryIygY6pgF2hVFH9Ra%2FXQhTlThAzU2MP6IEUzQMbTlXhHgozzsw3X6FTLKTGTI6JOnRZDP6Y4bMLzJ88AP5iUzeXQgi3dJ5Bqetvg3%2BeviQIzxd8BakfoobMBLX8p9lSSAr%2FBo5pixdz1Y1opXicOKXMIJWVgr%2Bt%2FsZkqfCATKPYhznDMl6TtEksFUx1%2FnY%2BB6lAFCco%2BUTO1cjROhc0oz1AEeaGtOjyqhG%2BPbn&X-Amz-Signature=ae5906a9ad3b7db4b3e33f8ef177551a35d8e026574160747d52e52ada75cad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXSK7MFH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYK%2F2Q%2FnQXli%2BlQ8PHj%2Bw2hVOmmkATShurzPRjLVwLTAiEAn%2FAiXhRJ2%2B%2B%2FHVlrqUWONgM6JGKnESmA0RsdG%2FDnM5Eq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOXFQn9R3hYU0ACpNyrcA%2Fv%2FQ66l57N4jPZUwCHh6%2BFRllXnnIhQF9LJitHN3TGPq02WPsw%2BzUM7xOT67KF%2FWSR5q0COp6RrlflvLs1SlzZLzVIOl6Jx2LuTSVnweKEWFsPTpbtBSzuvg8KbL%2FgY79Kg6GteCx3rWrTEf5uvJg9x5guDG2guMjqC7f2FPfD5uSb%2Fd%2FonGvZFiUjmgmFa9lpbhonfcmS3%2BMLUyae9XgHYAd9wUzjGGQbwN%2F11nN0DgizLO6QUQH7MWJiZIDcC8N6ro34lOtmPXvmaSSEkO24lq2F280bAl2FwMEPdejy7dy6Yd7p9xVLNxNPCLk041C8gAfUkGEEuD4m4F553rgy5zw4NZWNHUE8g9EOprTiep%2FDoLAz08peFLA86xeIyhBP%2Bxy7gAX8GlY9okOjEQr2ybfwHI12CM0bKkUXnEXSdON9JVDR0%2F7ZNJCAOLL366JL%2FTsxjnQfULmLokHyShiqqi6ttxjao6fvOUDyKynjAcg%2FhQ90ebG%2BFhFcYqen9PJg3yImG9lrUOESEoZrhvJeMToPHGB5441kbl0bjGCNN8NM0yNrBW1qnVWLM8wHA%2BblG6P0woMSQWC%2B9PvIkPra3hiLjfnp%2BDzUrViiaBkw2xD1ztw4Vg2xRwDDTMK%2B8iMoGOqUBcxiiwdCiMlV49%2FKFwiCxcqPI6%2Fhidm9aY6yt1M2JRLYKVNuAqDycmihSm44ZvsClLWwPO0nQ8FYBLB0ct6rSXUNMgFENXaOf8eqfzIFY0JP2q09N7ww8xYsSgqokVvXXZXid7m3ZG1FG49atZax64%2FBWlaYOjldOlZpFYVPyYN35z%2FeqWISxWKWSZAlMRHSfaTiC9lkM6wtAtRABMffEEkwWYHdG&X-Amz-Signature=baf8ea3830084bcfac62654f94aec31fb52ec67742cb4273c7e22f82a5f4fc00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXSK7MFH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYK%2F2Q%2FnQXli%2BlQ8PHj%2Bw2hVOmmkATShurzPRjLVwLTAiEAn%2FAiXhRJ2%2B%2B%2FHVlrqUWONgM6JGKnESmA0RsdG%2FDnM5Eq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOXFQn9R3hYU0ACpNyrcA%2Fv%2FQ66l57N4jPZUwCHh6%2BFRllXnnIhQF9LJitHN3TGPq02WPsw%2BzUM7xOT67KF%2FWSR5q0COp6RrlflvLs1SlzZLzVIOl6Jx2LuTSVnweKEWFsPTpbtBSzuvg8KbL%2FgY79Kg6GteCx3rWrTEf5uvJg9x5guDG2guMjqC7f2FPfD5uSb%2Fd%2FonGvZFiUjmgmFa9lpbhonfcmS3%2BMLUyae9XgHYAd9wUzjGGQbwN%2F11nN0DgizLO6QUQH7MWJiZIDcC8N6ro34lOtmPXvmaSSEkO24lq2F280bAl2FwMEPdejy7dy6Yd7p9xVLNxNPCLk041C8gAfUkGEEuD4m4F553rgy5zw4NZWNHUE8g9EOprTiep%2FDoLAz08peFLA86xeIyhBP%2Bxy7gAX8GlY9okOjEQr2ybfwHI12CM0bKkUXnEXSdON9JVDR0%2F7ZNJCAOLL366JL%2FTsxjnQfULmLokHyShiqqi6ttxjao6fvOUDyKynjAcg%2FhQ90ebG%2BFhFcYqen9PJg3yImG9lrUOESEoZrhvJeMToPHGB5441kbl0bjGCNN8NM0yNrBW1qnVWLM8wHA%2BblG6P0woMSQWC%2B9PvIkPra3hiLjfnp%2BDzUrViiaBkw2xD1ztw4Vg2xRwDDTMK%2B8iMoGOqUBcxiiwdCiMlV49%2FKFwiCxcqPI6%2Fhidm9aY6yt1M2JRLYKVNuAqDycmihSm44ZvsClLWwPO0nQ8FYBLB0ct6rSXUNMgFENXaOf8eqfzIFY0JP2q09N7ww8xYsSgqokVvXXZXid7m3ZG1FG49atZax64%2FBWlaYOjldOlZpFYVPyYN35z%2FeqWISxWKWSZAlMRHSfaTiC9lkM6wtAtRABMffEEkwWYHdG&X-Amz-Signature=bc3ba128add8e2d4b5c399dd367b0c8cafdc34cc55c7fbbd69a6186126657860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y65CJ6EQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKGoLP2P5%2BcjAifh7Rl5T7qc8w8yQj6X4n44rQMhZrIAiEAlnspxGYZaxE8TC%2B2rwkWSYRjA%2B8d2X6jeRADab5JT8oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDA4hIlBVJUda9L0MaSrcA%2BWPZ1KeLRCyrVbByPcC7lBekU9Q0ViFf%2FusK7G%2BSn%2BhWF2bpXsMGEISKpmTrlvPS4BaRCUQqZ3gIEXtUeSV59rd8Wsw48CandPXtG%2Fa22cl8rFyRlmJIaFA%2FJLKQV4r5wqglqOr1MhST96EVwPT5j9l0XEchLiNE6OvrO0CUeWOSarsQdJXaKikkNecaOUosd7iqJdnZCwCPwIAoCwC49%2B23iWtZ9jEIpEPQwSSch3uG3QOmxOcRA31ZfZGzrFJ9lDitleDlxcp6IaZSXBXoDM9X1kZy151QBmYFrlROnmX9vSznxjXczGDfcU2YxamqnSOFDdR7Qjqd4HjWdVQmo%2FuuGZDo93WGS30uuRA8t2KIpljJ6mnyJS8lM6FuHHaUT4gV2VY8WLP%2BAvXgh8YF%2Bg49Bp45TCtF2V4bu7WQipYlBX0v0OthtvEbqcp4vWhCRCEZ%2BVc8K8JIPi93Xked%2Bf%2B5tAKnVv91ZeCJ24CSsxqQxrgf%2Bb%2BlDCrcqgNAhAuQ9WnjDsCaMWqbXQzB1J1%2F0QQczFBZs0yaAEgl94hKhT%2BheGF%2FABGW%2B%2FcCpNTKKY3VFaK9dmu1ZDd6GeyA5sxD0bPD%2FwSU2QePz2RwgcwctIXAvIuCfEyXgM5WeOEMJ69iMoGOqUBJA4kN8%2FYJwgcwNziDRNKrwKeh0XsLSamfIce8rCBdNQzDruPlFk7scpQrDjYnEkzh4BFDMWy%2F2EGXg4jPYVTA9Wtn%2B0pwgqUfUQ7X2hcftasshzI7vaH%2BgkvSeJ%2BeWEUq7X7H6WF9aLELgWWgA4dHO8d%2Fa3dktvtv%2BNw6ClyavR9tANMZIoaYgpiEk0V9GlKzxCdLAQi4nP3LEbWVMVPkK5u6QfF&X-Amz-Signature=54abc2e88978087381377a3917f0628f202e6bb7cd98e7d34dc47c9db575b45e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y65CJ6EQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKGoLP2P5%2BcjAifh7Rl5T7qc8w8yQj6X4n44rQMhZrIAiEAlnspxGYZaxE8TC%2B2rwkWSYRjA%2B8d2X6jeRADab5JT8oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDA4hIlBVJUda9L0MaSrcA%2BWPZ1KeLRCyrVbByPcC7lBekU9Q0ViFf%2FusK7G%2BSn%2BhWF2bpXsMGEISKpmTrlvPS4BaRCUQqZ3gIEXtUeSV59rd8Wsw48CandPXtG%2Fa22cl8rFyRlmJIaFA%2FJLKQV4r5wqglqOr1MhST96EVwPT5j9l0XEchLiNE6OvrO0CUeWOSarsQdJXaKikkNecaOUosd7iqJdnZCwCPwIAoCwC49%2B23iWtZ9jEIpEPQwSSch3uG3QOmxOcRA31ZfZGzrFJ9lDitleDlxcp6IaZSXBXoDM9X1kZy151QBmYFrlROnmX9vSznxjXczGDfcU2YxamqnSOFDdR7Qjqd4HjWdVQmo%2FuuGZDo93WGS30uuRA8t2KIpljJ6mnyJS8lM6FuHHaUT4gV2VY8WLP%2BAvXgh8YF%2Bg49Bp45TCtF2V4bu7WQipYlBX0v0OthtvEbqcp4vWhCRCEZ%2BVc8K8JIPi93Xked%2Bf%2B5tAKnVv91ZeCJ24CSsxqQxrgf%2Bb%2BlDCrcqgNAhAuQ9WnjDsCaMWqbXQzB1J1%2F0QQczFBZs0yaAEgl94hKhT%2BheGF%2FABGW%2B%2FcCpNTKKY3VFaK9dmu1ZDd6GeyA5sxD0bPD%2FwSU2QePz2RwgcwctIXAvIuCfEyXgM5WeOEMJ69iMoGOqUBJA4kN8%2FYJwgcwNziDRNKrwKeh0XsLSamfIce8rCBdNQzDruPlFk7scpQrDjYnEkzh4BFDMWy%2F2EGXg4jPYVTA9Wtn%2B0pwgqUfUQ7X2hcftasshzI7vaH%2BgkvSeJ%2BeWEUq7X7H6WF9aLELgWWgA4dHO8d%2Fa3dktvtv%2BNw6ClyavR9tANMZIoaYgpiEk0V9GlKzxCdLAQi4nP3LEbWVMVPkK5u6QfF&X-Amz-Signature=143a0e98e13dd10fc3e7a56d2f1a425e826098dd7bd2c0b0ebbe200455036ec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y65CJ6EQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKGoLP2P5%2BcjAifh7Rl5T7qc8w8yQj6X4n44rQMhZrIAiEAlnspxGYZaxE8TC%2B2rwkWSYRjA%2B8d2X6jeRADab5JT8oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDA4hIlBVJUda9L0MaSrcA%2BWPZ1KeLRCyrVbByPcC7lBekU9Q0ViFf%2FusK7G%2BSn%2BhWF2bpXsMGEISKpmTrlvPS4BaRCUQqZ3gIEXtUeSV59rd8Wsw48CandPXtG%2Fa22cl8rFyRlmJIaFA%2FJLKQV4r5wqglqOr1MhST96EVwPT5j9l0XEchLiNE6OvrO0CUeWOSarsQdJXaKikkNecaOUosd7iqJdnZCwCPwIAoCwC49%2B23iWtZ9jEIpEPQwSSch3uG3QOmxOcRA31ZfZGzrFJ9lDitleDlxcp6IaZSXBXoDM9X1kZy151QBmYFrlROnmX9vSznxjXczGDfcU2YxamqnSOFDdR7Qjqd4HjWdVQmo%2FuuGZDo93WGS30uuRA8t2KIpljJ6mnyJS8lM6FuHHaUT4gV2VY8WLP%2BAvXgh8YF%2Bg49Bp45TCtF2V4bu7WQipYlBX0v0OthtvEbqcp4vWhCRCEZ%2BVc8K8JIPi93Xked%2Bf%2B5tAKnVv91ZeCJ24CSsxqQxrgf%2Bb%2BlDCrcqgNAhAuQ9WnjDsCaMWqbXQzB1J1%2F0QQczFBZs0yaAEgl94hKhT%2BheGF%2FABGW%2B%2FcCpNTKKY3VFaK9dmu1ZDd6GeyA5sxD0bPD%2FwSU2QePz2RwgcwctIXAvIuCfEyXgM5WeOEMJ69iMoGOqUBJA4kN8%2FYJwgcwNziDRNKrwKeh0XsLSamfIce8rCBdNQzDruPlFk7scpQrDjYnEkzh4BFDMWy%2F2EGXg4jPYVTA9Wtn%2B0pwgqUfUQ7X2hcftasshzI7vaH%2BgkvSeJ%2BeWEUq7X7H6WF9aLELgWWgA4dHO8d%2Fa3dktvtv%2BNw6ClyavR9tANMZIoaYgpiEk0V9GlKzxCdLAQi4nP3LEbWVMVPkK5u6QfF&X-Amz-Signature=360ff1798f20e8129ec90540a6b6c8f357ceade7f9d6c6adab3e64de2b9a873f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y65CJ6EQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKGoLP2P5%2BcjAifh7Rl5T7qc8w8yQj6X4n44rQMhZrIAiEAlnspxGYZaxE8TC%2B2rwkWSYRjA%2B8d2X6jeRADab5JT8oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDA4hIlBVJUda9L0MaSrcA%2BWPZ1KeLRCyrVbByPcC7lBekU9Q0ViFf%2FusK7G%2BSn%2BhWF2bpXsMGEISKpmTrlvPS4BaRCUQqZ3gIEXtUeSV59rd8Wsw48CandPXtG%2Fa22cl8rFyRlmJIaFA%2FJLKQV4r5wqglqOr1MhST96EVwPT5j9l0XEchLiNE6OvrO0CUeWOSarsQdJXaKikkNecaOUosd7iqJdnZCwCPwIAoCwC49%2B23iWtZ9jEIpEPQwSSch3uG3QOmxOcRA31ZfZGzrFJ9lDitleDlxcp6IaZSXBXoDM9X1kZy151QBmYFrlROnmX9vSznxjXczGDfcU2YxamqnSOFDdR7Qjqd4HjWdVQmo%2FuuGZDo93WGS30uuRA8t2KIpljJ6mnyJS8lM6FuHHaUT4gV2VY8WLP%2BAvXgh8YF%2Bg49Bp45TCtF2V4bu7WQipYlBX0v0OthtvEbqcp4vWhCRCEZ%2BVc8K8JIPi93Xked%2Bf%2B5tAKnVv91ZeCJ24CSsxqQxrgf%2Bb%2BlDCrcqgNAhAuQ9WnjDsCaMWqbXQzB1J1%2F0QQczFBZs0yaAEgl94hKhT%2BheGF%2FABGW%2B%2FcCpNTKKY3VFaK9dmu1ZDd6GeyA5sxD0bPD%2FwSU2QePz2RwgcwctIXAvIuCfEyXgM5WeOEMJ69iMoGOqUBJA4kN8%2FYJwgcwNziDRNKrwKeh0XsLSamfIce8rCBdNQzDruPlFk7scpQrDjYnEkzh4BFDMWy%2F2EGXg4jPYVTA9Wtn%2B0pwgqUfUQ7X2hcftasshzI7vaH%2BgkvSeJ%2BeWEUq7X7H6WF9aLELgWWgA4dHO8d%2Fa3dktvtv%2BNw6ClyavR9tANMZIoaYgpiEk0V9GlKzxCdLAQi4nP3LEbWVMVPkK5u6QfF&X-Amz-Signature=39c3d7df4ae6cf73a5e2fdc44f950a616736ba5a2982bb9e0d6fa4a86a601abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y65CJ6EQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKGoLP2P5%2BcjAifh7Rl5T7qc8w8yQj6X4n44rQMhZrIAiEAlnspxGYZaxE8TC%2B2rwkWSYRjA%2B8d2X6jeRADab5JT8oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDA4hIlBVJUda9L0MaSrcA%2BWPZ1KeLRCyrVbByPcC7lBekU9Q0ViFf%2FusK7G%2BSn%2BhWF2bpXsMGEISKpmTrlvPS4BaRCUQqZ3gIEXtUeSV59rd8Wsw48CandPXtG%2Fa22cl8rFyRlmJIaFA%2FJLKQV4r5wqglqOr1MhST96EVwPT5j9l0XEchLiNE6OvrO0CUeWOSarsQdJXaKikkNecaOUosd7iqJdnZCwCPwIAoCwC49%2B23iWtZ9jEIpEPQwSSch3uG3QOmxOcRA31ZfZGzrFJ9lDitleDlxcp6IaZSXBXoDM9X1kZy151QBmYFrlROnmX9vSznxjXczGDfcU2YxamqnSOFDdR7Qjqd4HjWdVQmo%2FuuGZDo93WGS30uuRA8t2KIpljJ6mnyJS8lM6FuHHaUT4gV2VY8WLP%2BAvXgh8YF%2Bg49Bp45TCtF2V4bu7WQipYlBX0v0OthtvEbqcp4vWhCRCEZ%2BVc8K8JIPi93Xked%2Bf%2B5tAKnVv91ZeCJ24CSsxqQxrgf%2Bb%2BlDCrcqgNAhAuQ9WnjDsCaMWqbXQzB1J1%2F0QQczFBZs0yaAEgl94hKhT%2BheGF%2FABGW%2B%2FcCpNTKKY3VFaK9dmu1ZDd6GeyA5sxD0bPD%2FwSU2QePz2RwgcwctIXAvIuCfEyXgM5WeOEMJ69iMoGOqUBJA4kN8%2FYJwgcwNziDRNKrwKeh0XsLSamfIce8rCBdNQzDruPlFk7scpQrDjYnEkzh4BFDMWy%2F2EGXg4jPYVTA9Wtn%2B0pwgqUfUQ7X2hcftasshzI7vaH%2BgkvSeJ%2BeWEUq7X7H6WF9aLELgWWgA4dHO8d%2Fa3dktvtv%2BNw6ClyavR9tANMZIoaYgpiEk0V9GlKzxCdLAQi4nP3LEbWVMVPkK5u6QfF&X-Amz-Signature=8797c45a6a32eb95f9694e1baa82d2dafa3b082a9a91ae4d597d388befcf37d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y65CJ6EQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKGoLP2P5%2BcjAifh7Rl5T7qc8w8yQj6X4n44rQMhZrIAiEAlnspxGYZaxE8TC%2B2rwkWSYRjA%2B8d2X6jeRADab5JT8oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDA4hIlBVJUda9L0MaSrcA%2BWPZ1KeLRCyrVbByPcC7lBekU9Q0ViFf%2FusK7G%2BSn%2BhWF2bpXsMGEISKpmTrlvPS4BaRCUQqZ3gIEXtUeSV59rd8Wsw48CandPXtG%2Fa22cl8rFyRlmJIaFA%2FJLKQV4r5wqglqOr1MhST96EVwPT5j9l0XEchLiNE6OvrO0CUeWOSarsQdJXaKikkNecaOUosd7iqJdnZCwCPwIAoCwC49%2B23iWtZ9jEIpEPQwSSch3uG3QOmxOcRA31ZfZGzrFJ9lDitleDlxcp6IaZSXBXoDM9X1kZy151QBmYFrlROnmX9vSznxjXczGDfcU2YxamqnSOFDdR7Qjqd4HjWdVQmo%2FuuGZDo93WGS30uuRA8t2KIpljJ6mnyJS8lM6FuHHaUT4gV2VY8WLP%2BAvXgh8YF%2Bg49Bp45TCtF2V4bu7WQipYlBX0v0OthtvEbqcp4vWhCRCEZ%2BVc8K8JIPi93Xked%2Bf%2B5tAKnVv91ZeCJ24CSsxqQxrgf%2Bb%2BlDCrcqgNAhAuQ9WnjDsCaMWqbXQzB1J1%2F0QQczFBZs0yaAEgl94hKhT%2BheGF%2FABGW%2B%2FcCpNTKKY3VFaK9dmu1ZDd6GeyA5sxD0bPD%2FwSU2QePz2RwgcwctIXAvIuCfEyXgM5WeOEMJ69iMoGOqUBJA4kN8%2FYJwgcwNziDRNKrwKeh0XsLSamfIce8rCBdNQzDruPlFk7scpQrDjYnEkzh4BFDMWy%2F2EGXg4jPYVTA9Wtn%2B0pwgqUfUQ7X2hcftasshzI7vaH%2BgkvSeJ%2BeWEUq7X7H6WF9aLELgWWgA4dHO8d%2Fa3dktvtv%2BNw6ClyavR9tANMZIoaYgpiEk0V9GlKzxCdLAQi4nP3LEbWVMVPkK5u6QfF&X-Amz-Signature=e3534958fd4fff1fd95aa62852b72599d5eb7bf7e79e17f8d8d93142b1d80e6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y65CJ6EQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKGoLP2P5%2BcjAifh7Rl5T7qc8w8yQj6X4n44rQMhZrIAiEAlnspxGYZaxE8TC%2B2rwkWSYRjA%2B8d2X6jeRADab5JT8oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDA4hIlBVJUda9L0MaSrcA%2BWPZ1KeLRCyrVbByPcC7lBekU9Q0ViFf%2FusK7G%2BSn%2BhWF2bpXsMGEISKpmTrlvPS4BaRCUQqZ3gIEXtUeSV59rd8Wsw48CandPXtG%2Fa22cl8rFyRlmJIaFA%2FJLKQV4r5wqglqOr1MhST96EVwPT5j9l0XEchLiNE6OvrO0CUeWOSarsQdJXaKikkNecaOUosd7iqJdnZCwCPwIAoCwC49%2B23iWtZ9jEIpEPQwSSch3uG3QOmxOcRA31ZfZGzrFJ9lDitleDlxcp6IaZSXBXoDM9X1kZy151QBmYFrlROnmX9vSznxjXczGDfcU2YxamqnSOFDdR7Qjqd4HjWdVQmo%2FuuGZDo93WGS30uuRA8t2KIpljJ6mnyJS8lM6FuHHaUT4gV2VY8WLP%2BAvXgh8YF%2Bg49Bp45TCtF2V4bu7WQipYlBX0v0OthtvEbqcp4vWhCRCEZ%2BVc8K8JIPi93Xked%2Bf%2B5tAKnVv91ZeCJ24CSsxqQxrgf%2Bb%2BlDCrcqgNAhAuQ9WnjDsCaMWqbXQzB1J1%2F0QQczFBZs0yaAEgl94hKhT%2BheGF%2FABGW%2B%2FcCpNTKKY3VFaK9dmu1ZDd6GeyA5sxD0bPD%2FwSU2QePz2RwgcwctIXAvIuCfEyXgM5WeOEMJ69iMoGOqUBJA4kN8%2FYJwgcwNziDRNKrwKeh0XsLSamfIce8rCBdNQzDruPlFk7scpQrDjYnEkzh4BFDMWy%2F2EGXg4jPYVTA9Wtn%2B0pwgqUfUQ7X2hcftasshzI7vaH%2BgkvSeJ%2BeWEUq7X7H6WF9aLELgWWgA4dHO8d%2Fa3dktvtv%2BNw6ClyavR9tANMZIoaYgpiEk0V9GlKzxCdLAQi4nP3LEbWVMVPkK5u6QfF&X-Amz-Signature=abc83690324a6d9ddc279cf12d7a156cb0e627d3ebe25dbd22e8838696e3b008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RPSCGJ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpT4OIFZ3s%2FCLBSXHziZ2R4SIN%2B03%2BVpAHEYTCMY%2BJGAiBH0yey3xy2N2xiLR3YU2%2BPXYHus1pG0eWXZk%2FP0cdUbyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMWgbLR0X1r3UspNC7KtwDBGziJ5U5tRe0PYLnqhdzLVojWUqvB2lakL%2BbCP4VtA5HEeD9mSuLMFm8SsEWN5DVPCMFuJjDvOx1y2vyOGu9uT1Lv4XTPjAM1zwgrEevtr%2BRuvHwYahMnzvqFua28nTA9emAX7v0uEQGbRwh7KdSLOCcI2uqL5jFaYgifIETelOn1eEW%2FA2fuHisXeGcEnGKVHkfHy%2BGdpgOZMilf2zB02DDPoThQhHTRfHJQLGJ%2FOrrx%2B%2BS4ZDfasvV5dFnRkkWUM0wNYj2UTGtPsbn7Ak3uOfvIiaq2udDIbxNYD31lIuXPsCjso1DnLTzTtegojtSb%2FW%2FfJwamV1LQ%2FcsYMDplIOFLM7rXKcYof1fWVKZTQS0b9FKQAtVu2ufYf8fLxtEhEop2o63ce0h7V3p7fNvVC%2FZpHnqKHB692tZ0%2BCvRK5y9MdesOFkUPSvi1XYhUhdgUAoHL0pZmE79zcH7%2F%2Ba9%2BOratbMmc1%2Fw5RZO4DJGoEyyA39ySwN4zn1q0Fx5KgtaGdv79rbMgTEZjvxJt%2FXeq4SKLBeBKFMRnUZ%2BMXsv9lmj1bMqZKHtUfh0nMhPIHPAlqaGbvu7f1pPQaszV2Zc2FVIkpsiOZWez79eGAGXK3qup3iK4Qdo1peBiwwlr2IygY6pgEfReJVX30Vx%2FIqnZBW0TjxMxDebAEpUYNQe7B7IM5tYM0idBqj2D75iDRIvwIoJSF5C14EmuCaoR1Y26MrrQqSuFbfJNGz4orooCvtO2vtTBqxRGrOa4FZxA3VO4JsrDv16a24DNesNW5tR4rT2TGICH7kclYxuQ9aEY2DAEAIYv5mnFS%2F4ZIQw29QlpvxteBh%2BQWu3e9lD%2FxUcz2JU6pVi%2FD3jrpr&X-Amz-Signature=ff8b5a5aa4d90c4e70642e58850d6547464d77110fccb1f40237d83054f6da73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RPSCGJ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpT4OIFZ3s%2FCLBSXHziZ2R4SIN%2B03%2BVpAHEYTCMY%2BJGAiBH0yey3xy2N2xiLR3YU2%2BPXYHus1pG0eWXZk%2FP0cdUbyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMWgbLR0X1r3UspNC7KtwDBGziJ5U5tRe0PYLnqhdzLVojWUqvB2lakL%2BbCP4VtA5HEeD9mSuLMFm8SsEWN5DVPCMFuJjDvOx1y2vyOGu9uT1Lv4XTPjAM1zwgrEevtr%2BRuvHwYahMnzvqFua28nTA9emAX7v0uEQGbRwh7KdSLOCcI2uqL5jFaYgifIETelOn1eEW%2FA2fuHisXeGcEnGKVHkfHy%2BGdpgOZMilf2zB02DDPoThQhHTRfHJQLGJ%2FOrrx%2B%2BS4ZDfasvV5dFnRkkWUM0wNYj2UTGtPsbn7Ak3uOfvIiaq2udDIbxNYD31lIuXPsCjso1DnLTzTtegojtSb%2FW%2FfJwamV1LQ%2FcsYMDplIOFLM7rXKcYof1fWVKZTQS0b9FKQAtVu2ufYf8fLxtEhEop2o63ce0h7V3p7fNvVC%2FZpHnqKHB692tZ0%2BCvRK5y9MdesOFkUPSvi1XYhUhdgUAoHL0pZmE79zcH7%2F%2Ba9%2BOratbMmc1%2Fw5RZO4DJGoEyyA39ySwN4zn1q0Fx5KgtaGdv79rbMgTEZjvxJt%2FXeq4SKLBeBKFMRnUZ%2BMXsv9lmj1bMqZKHtUfh0nMhPIHPAlqaGbvu7f1pPQaszV2Zc2FVIkpsiOZWez79eGAGXK3qup3iK4Qdo1peBiwwlr2IygY6pgEfReJVX30Vx%2FIqnZBW0TjxMxDebAEpUYNQe7B7IM5tYM0idBqj2D75iDRIvwIoJSF5C14EmuCaoR1Y26MrrQqSuFbfJNGz4orooCvtO2vtTBqxRGrOa4FZxA3VO4JsrDv16a24DNesNW5tR4rT2TGICH7kclYxuQ9aEY2DAEAIYv5mnFS%2F4ZIQw29QlpvxteBh%2BQWu3e9lD%2FxUcz2JU6pVi%2FD3jrpr&X-Amz-Signature=90cc8255c8f75a28cfc81761a7d044d72e041280a71cabd44482ea3cecd36c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RPSCGJ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpT4OIFZ3s%2FCLBSXHziZ2R4SIN%2B03%2BVpAHEYTCMY%2BJGAiBH0yey3xy2N2xiLR3YU2%2BPXYHus1pG0eWXZk%2FP0cdUbyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMWgbLR0X1r3UspNC7KtwDBGziJ5U5tRe0PYLnqhdzLVojWUqvB2lakL%2BbCP4VtA5HEeD9mSuLMFm8SsEWN5DVPCMFuJjDvOx1y2vyOGu9uT1Lv4XTPjAM1zwgrEevtr%2BRuvHwYahMnzvqFua28nTA9emAX7v0uEQGbRwh7KdSLOCcI2uqL5jFaYgifIETelOn1eEW%2FA2fuHisXeGcEnGKVHkfHy%2BGdpgOZMilf2zB02DDPoThQhHTRfHJQLGJ%2FOrrx%2B%2BS4ZDfasvV5dFnRkkWUM0wNYj2UTGtPsbn7Ak3uOfvIiaq2udDIbxNYD31lIuXPsCjso1DnLTzTtegojtSb%2FW%2FfJwamV1LQ%2FcsYMDplIOFLM7rXKcYof1fWVKZTQS0b9FKQAtVu2ufYf8fLxtEhEop2o63ce0h7V3p7fNvVC%2FZpHnqKHB692tZ0%2BCvRK5y9MdesOFkUPSvi1XYhUhdgUAoHL0pZmE79zcH7%2F%2Ba9%2BOratbMmc1%2Fw5RZO4DJGoEyyA39ySwN4zn1q0Fx5KgtaGdv79rbMgTEZjvxJt%2FXeq4SKLBeBKFMRnUZ%2BMXsv9lmj1bMqZKHtUfh0nMhPIHPAlqaGbvu7f1pPQaszV2Zc2FVIkpsiOZWez79eGAGXK3qup3iK4Qdo1peBiwwlr2IygY6pgEfReJVX30Vx%2FIqnZBW0TjxMxDebAEpUYNQe7B7IM5tYM0idBqj2D75iDRIvwIoJSF5C14EmuCaoR1Y26MrrQqSuFbfJNGz4orooCvtO2vtTBqxRGrOa4FZxA3VO4JsrDv16a24DNesNW5tR4rT2TGICH7kclYxuQ9aEY2DAEAIYv5mnFS%2F4ZIQw29QlpvxteBh%2BQWu3e9lD%2FxUcz2JU6pVi%2FD3jrpr&X-Amz-Signature=2df8770b82be4d1f7f474ed2b9295856c747b9836897892946169468eef374ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RPSCGJ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpT4OIFZ3s%2FCLBSXHziZ2R4SIN%2B03%2BVpAHEYTCMY%2BJGAiBH0yey3xy2N2xiLR3YU2%2BPXYHus1pG0eWXZk%2FP0cdUbyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMWgbLR0X1r3UspNC7KtwDBGziJ5U5tRe0PYLnqhdzLVojWUqvB2lakL%2BbCP4VtA5HEeD9mSuLMFm8SsEWN5DVPCMFuJjDvOx1y2vyOGu9uT1Lv4XTPjAM1zwgrEevtr%2BRuvHwYahMnzvqFua28nTA9emAX7v0uEQGbRwh7KdSLOCcI2uqL5jFaYgifIETelOn1eEW%2FA2fuHisXeGcEnGKVHkfHy%2BGdpgOZMilf2zB02DDPoThQhHTRfHJQLGJ%2FOrrx%2B%2BS4ZDfasvV5dFnRkkWUM0wNYj2UTGtPsbn7Ak3uOfvIiaq2udDIbxNYD31lIuXPsCjso1DnLTzTtegojtSb%2FW%2FfJwamV1LQ%2FcsYMDplIOFLM7rXKcYof1fWVKZTQS0b9FKQAtVu2ufYf8fLxtEhEop2o63ce0h7V3p7fNvVC%2FZpHnqKHB692tZ0%2BCvRK5y9MdesOFkUPSvi1XYhUhdgUAoHL0pZmE79zcH7%2F%2Ba9%2BOratbMmc1%2Fw5RZO4DJGoEyyA39ySwN4zn1q0Fx5KgtaGdv79rbMgTEZjvxJt%2FXeq4SKLBeBKFMRnUZ%2BMXsv9lmj1bMqZKHtUfh0nMhPIHPAlqaGbvu7f1pPQaszV2Zc2FVIkpsiOZWez79eGAGXK3qup3iK4Qdo1peBiwwlr2IygY6pgEfReJVX30Vx%2FIqnZBW0TjxMxDebAEpUYNQe7B7IM5tYM0idBqj2D75iDRIvwIoJSF5C14EmuCaoR1Y26MrrQqSuFbfJNGz4orooCvtO2vtTBqxRGrOa4FZxA3VO4JsrDv16a24DNesNW5tR4rT2TGICH7kclYxuQ9aEY2DAEAIYv5mnFS%2F4ZIQw29QlpvxteBh%2BQWu3e9lD%2FxUcz2JU6pVi%2FD3jrpr&X-Amz-Signature=5b316843a5f9624c896b794f8e39e6d4d45d1da5878f51591ea2a161f65e9b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RPSCGJ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpT4OIFZ3s%2FCLBSXHziZ2R4SIN%2B03%2BVpAHEYTCMY%2BJGAiBH0yey3xy2N2xiLR3YU2%2BPXYHus1pG0eWXZk%2FP0cdUbyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMWgbLR0X1r3UspNC7KtwDBGziJ5U5tRe0PYLnqhdzLVojWUqvB2lakL%2BbCP4VtA5HEeD9mSuLMFm8SsEWN5DVPCMFuJjDvOx1y2vyOGu9uT1Lv4XTPjAM1zwgrEevtr%2BRuvHwYahMnzvqFua28nTA9emAX7v0uEQGbRwh7KdSLOCcI2uqL5jFaYgifIETelOn1eEW%2FA2fuHisXeGcEnGKVHkfHy%2BGdpgOZMilf2zB02DDPoThQhHTRfHJQLGJ%2FOrrx%2B%2BS4ZDfasvV5dFnRkkWUM0wNYj2UTGtPsbn7Ak3uOfvIiaq2udDIbxNYD31lIuXPsCjso1DnLTzTtegojtSb%2FW%2FfJwamV1LQ%2FcsYMDplIOFLM7rXKcYof1fWVKZTQS0b9FKQAtVu2ufYf8fLxtEhEop2o63ce0h7V3p7fNvVC%2FZpHnqKHB692tZ0%2BCvRK5y9MdesOFkUPSvi1XYhUhdgUAoHL0pZmE79zcH7%2F%2Ba9%2BOratbMmc1%2Fw5RZO4DJGoEyyA39ySwN4zn1q0Fx5KgtaGdv79rbMgTEZjvxJt%2FXeq4SKLBeBKFMRnUZ%2BMXsv9lmj1bMqZKHtUfh0nMhPIHPAlqaGbvu7f1pPQaszV2Zc2FVIkpsiOZWez79eGAGXK3qup3iK4Qdo1peBiwwlr2IygY6pgEfReJVX30Vx%2FIqnZBW0TjxMxDebAEpUYNQe7B7IM5tYM0idBqj2D75iDRIvwIoJSF5C14EmuCaoR1Y26MrrQqSuFbfJNGz4orooCvtO2vtTBqxRGrOa4FZxA3VO4JsrDv16a24DNesNW5tR4rT2TGICH7kclYxuQ9aEY2DAEAIYv5mnFS%2F4ZIQw29QlpvxteBh%2BQWu3e9lD%2FxUcz2JU6pVi%2FD3jrpr&X-Amz-Signature=e1393ae8efbc6a80415248ca16f44875f51264979f4339537dc00213bcd7dd3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUGI33PI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvb9cj%2F%2BM6x9hivaV5WIiqfXyIESXeErviCJLKEYOnjAIgI6I2depVis6UpkIpgrX2UIu7rilFzY5Csc7fhgB%2BUz4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLeEeHTR2uSM%2Fj%2FA7CrcA%2BEjoHwX19Yxs4F5IgcvoH%2B1w7S1cj1VCYelRfjAHGHSv%2BVZfy33xshm22p0AlHYFIWT7eEGt%2Fe%2FwQsglq21ed4SUbW0EIyNiU1qAcfdcxPSV4lEQ7Nm28Jf7Xy%2ByjIPB9xklbv2uFn4j2iD0PME18hKJvczkc0328t4ph7N8OK2UNDVJRohrsWkxbERQyZdA5eLFaF7sTCyB5VR5CUpa9mz%2BB6alPuA%2Bw3R9SUryXrxsLoiibiqprOUGU72WhG6%2BJ5O11r9hH6GWUFwbgzzQTc1B2mo8YSuzJVXy5dbQHObpgp2UrSXVWYu17BkvTetKsU14wKxgHapMhY2%2B065PbGOJXvik3c6B9BZux5xvSdU43LbL4lgDiIsYENoLM0qeXEzqA5VANydZ1ioFAEMMrO3nI7%2FxDj2jM91mb1JdPH6bNsO0RkaXtLc34DiNXfSf8hx14djpcGWw2DRkU3lXoWGZ4TzGXOArMWJCN07p2lf1BdRjBmKuYFPPsLiPjaCMYaiaxeN7D4YMCEKOZc8WNfq2h%2FTRcc%2BthXFQYnFGHrZ9o2c4fI4pEPjtqNM9RBuZspLITT4FT7TaMfGUn7T8jXpHt4y8R6iFwON2riOJ4F%2BtdhqArz8JN%2Fm95BaMOG8iMoGOqUBV6PPP0oM2qBQ3mGWnmS8pGE%2BO%2BEwF1QQuuuUIXya%2FuUT5uC7gXzGjOEAEJpTYJsxtjHaYlOCOX%2B1g36nUdzdvwqzAnMn9OwoECvYKSfFIIDqbWs2dp3MLnGEv4FpWuwz14rdUm2OpgNlEGcUCl48%2FZXIKl8lgzfapERCIZ5WT18ZWVipAkrSeI%2FanK2K1JJuufU0fgYDG4fIqyopHXIRXcZuI8FR&X-Amz-Signature=55cb5e6d98ae5d965093976c34d74062f429fe1018a5cc9aff75eef3d002b0d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUGI33PI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvb9cj%2F%2BM6x9hivaV5WIiqfXyIESXeErviCJLKEYOnjAIgI6I2depVis6UpkIpgrX2UIu7rilFzY5Csc7fhgB%2BUz4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLeEeHTR2uSM%2Fj%2FA7CrcA%2BEjoHwX19Yxs4F5IgcvoH%2B1w7S1cj1VCYelRfjAHGHSv%2BVZfy33xshm22p0AlHYFIWT7eEGt%2Fe%2FwQsglq21ed4SUbW0EIyNiU1qAcfdcxPSV4lEQ7Nm28Jf7Xy%2ByjIPB9xklbv2uFn4j2iD0PME18hKJvczkc0328t4ph7N8OK2UNDVJRohrsWkxbERQyZdA5eLFaF7sTCyB5VR5CUpa9mz%2BB6alPuA%2Bw3R9SUryXrxsLoiibiqprOUGU72WhG6%2BJ5O11r9hH6GWUFwbgzzQTc1B2mo8YSuzJVXy5dbQHObpgp2UrSXVWYu17BkvTetKsU14wKxgHapMhY2%2B065PbGOJXvik3c6B9BZux5xvSdU43LbL4lgDiIsYENoLM0qeXEzqA5VANydZ1ioFAEMMrO3nI7%2FxDj2jM91mb1JdPH6bNsO0RkaXtLc34DiNXfSf8hx14djpcGWw2DRkU3lXoWGZ4TzGXOArMWJCN07p2lf1BdRjBmKuYFPPsLiPjaCMYaiaxeN7D4YMCEKOZc8WNfq2h%2FTRcc%2BthXFQYnFGHrZ9o2c4fI4pEPjtqNM9RBuZspLITT4FT7TaMfGUn7T8jXpHt4y8R6iFwON2riOJ4F%2BtdhqArz8JN%2Fm95BaMOG8iMoGOqUBV6PPP0oM2qBQ3mGWnmS8pGE%2BO%2BEwF1QQuuuUIXya%2FuUT5uC7gXzGjOEAEJpTYJsxtjHaYlOCOX%2B1g36nUdzdvwqzAnMn9OwoECvYKSfFIIDqbWs2dp3MLnGEv4FpWuwz14rdUm2OpgNlEGcUCl48%2FZXIKl8lgzfapERCIZ5WT18ZWVipAkrSeI%2FanK2K1JJuufU0fgYDG4fIqyopHXIRXcZuI8FR&X-Amz-Signature=c1a808843f909d91f2d99a00a968b3d7bfc7b42a535ad460089823c4af830fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUGI33PI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvb9cj%2F%2BM6x9hivaV5WIiqfXyIESXeErviCJLKEYOnjAIgI6I2depVis6UpkIpgrX2UIu7rilFzY5Csc7fhgB%2BUz4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLeEeHTR2uSM%2Fj%2FA7CrcA%2BEjoHwX19Yxs4F5IgcvoH%2B1w7S1cj1VCYelRfjAHGHSv%2BVZfy33xshm22p0AlHYFIWT7eEGt%2Fe%2FwQsglq21ed4SUbW0EIyNiU1qAcfdcxPSV4lEQ7Nm28Jf7Xy%2ByjIPB9xklbv2uFn4j2iD0PME18hKJvczkc0328t4ph7N8OK2UNDVJRohrsWkxbERQyZdA5eLFaF7sTCyB5VR5CUpa9mz%2BB6alPuA%2Bw3R9SUryXrxsLoiibiqprOUGU72WhG6%2BJ5O11r9hH6GWUFwbgzzQTc1B2mo8YSuzJVXy5dbQHObpgp2UrSXVWYu17BkvTetKsU14wKxgHapMhY2%2B065PbGOJXvik3c6B9BZux5xvSdU43LbL4lgDiIsYENoLM0qeXEzqA5VANydZ1ioFAEMMrO3nI7%2FxDj2jM91mb1JdPH6bNsO0RkaXtLc34DiNXfSf8hx14djpcGWw2DRkU3lXoWGZ4TzGXOArMWJCN07p2lf1BdRjBmKuYFPPsLiPjaCMYaiaxeN7D4YMCEKOZc8WNfq2h%2FTRcc%2BthXFQYnFGHrZ9o2c4fI4pEPjtqNM9RBuZspLITT4FT7TaMfGUn7T8jXpHt4y8R6iFwON2riOJ4F%2BtdhqArz8JN%2Fm95BaMOG8iMoGOqUBV6PPP0oM2qBQ3mGWnmS8pGE%2BO%2BEwF1QQuuuUIXya%2FuUT5uC7gXzGjOEAEJpTYJsxtjHaYlOCOX%2B1g36nUdzdvwqzAnMn9OwoECvYKSfFIIDqbWs2dp3MLnGEv4FpWuwz14rdUm2OpgNlEGcUCl48%2FZXIKl8lgzfapERCIZ5WT18ZWVipAkrSeI%2FanK2K1JJuufU0fgYDG4fIqyopHXIRXcZuI8FR&X-Amz-Signature=29f5a28f7d0f6888ac2e6d9e781e1880684513a5a0b2ec9fde53c04e0cf44384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SOZMYTM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKmDHpl%2BL9OTvIFcHByP4iVpSmhOmw70BkpaomEMju1wIgHRzRI2UthMo5aG%2FoqX23ducbj9Zd7EvJw3nZmE3fSJ0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGRy0eXd%2BA4U9O2LJCrcA05Kte6a7h5BcHp9IWGZZbmdaudI%2BmktDGI0GOfJoJT1Q%2BMYpf5Yg4DhbNYxSQS1S%2BEeJjH8IoN9lGZtkWu9Z1LPItS9kUqMiJ2yWDT1bUFQJ%2BZHteYqCJaOhlYecwEhkfx3xDdKV9O3p9JFnNZdt8vDawLrSHvyZ2E7QXkCKqTxyBQ5DkSOC4ew16e%2BvL3riYm2R6D1ZjYcGNEb464kRL%2FXZg5oR%2Bn22uKLncXjulsyKWDv3%2BMZYyyERYm0ntKIdv5%2FYpYYgNhq6zzWo9kJbTlKQPL73OPi9ZzC8QvjZsq950KU66B7wwzqW%2FJNUH6uSE0bVl6kfZbkmmSbOhqQoFMqPUvBPu0s6h4mpwCAvDniaSVDHB2tLivVCC3NQgBcEArvtO5EXQ9PVhEZ2okfcTvuIwNLr2tyz0lnPTdKjaTB9NEjgAFNg140roTy8%2BoQeBGUZvRZ4gGtgiQpKMBIgsB7JkkzTAfH0eYAX0L%2FK13mxUaMsb5BxzfNxnZwIaYHy7VSZ1LZp7mSCFl%2FOtqvO%2B2xCbvfDqdUp37YKbOSokqP6TbJt%2B5Au2T6zW3YL%2BYPLEGmnQw92io%2B%2FPWBKwBnmircDEGXwgbDuM7vDA95lp331J1rnHoBhTuC3rNUMMS8iMoGOqUBZvPA%2FGWvKcci1RM859qS%2BZ3YDgAk9%2BPrQIj4RG37Pk23LlOOwWe%2FIvrcbKtJnB4jQts7cFf3JHDRnCnLAi1Ag4PHUZnHJkQj9U1ywqRv0uKZlR2vf8MQL6HfuqRVEqK5Lmo0dq7dBLgNifnhj8eh%2Be8UqQVNsV2fOyMHRRrdgRLB6jGmKoWsiwE2%2FPzKfb4WI37gn3RsJPWdoxRqB1dJG%2FKqLjWi&X-Amz-Signature=12a17d183d7cd2cb862be7f67fd29ea1918ff56cd880eae462afcfcb44c70d23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SOZMYTM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKmDHpl%2BL9OTvIFcHByP4iVpSmhOmw70BkpaomEMju1wIgHRzRI2UthMo5aG%2FoqX23ducbj9Zd7EvJw3nZmE3fSJ0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGRy0eXd%2BA4U9O2LJCrcA05Kte6a7h5BcHp9IWGZZbmdaudI%2BmktDGI0GOfJoJT1Q%2BMYpf5Yg4DhbNYxSQS1S%2BEeJjH8IoN9lGZtkWu9Z1LPItS9kUqMiJ2yWDT1bUFQJ%2BZHteYqCJaOhlYecwEhkfx3xDdKV9O3p9JFnNZdt8vDawLrSHvyZ2E7QXkCKqTxyBQ5DkSOC4ew16e%2BvL3riYm2R6D1ZjYcGNEb464kRL%2FXZg5oR%2Bn22uKLncXjulsyKWDv3%2BMZYyyERYm0ntKIdv5%2FYpYYgNhq6zzWo9kJbTlKQPL73OPi9ZzC8QvjZsq950KU66B7wwzqW%2FJNUH6uSE0bVl6kfZbkmmSbOhqQoFMqPUvBPu0s6h4mpwCAvDniaSVDHB2tLivVCC3NQgBcEArvtO5EXQ9PVhEZ2okfcTvuIwNLr2tyz0lnPTdKjaTB9NEjgAFNg140roTy8%2BoQeBGUZvRZ4gGtgiQpKMBIgsB7JkkzTAfH0eYAX0L%2FK13mxUaMsb5BxzfNxnZwIaYHy7VSZ1LZp7mSCFl%2FOtqvO%2B2xCbvfDqdUp37YKbOSokqP6TbJt%2B5Au2T6zW3YL%2BYPLEGmnQw92io%2B%2FPWBKwBnmircDEGXwgbDuM7vDA95lp331J1rnHoBhTuC3rNUMMS8iMoGOqUBZvPA%2FGWvKcci1RM859qS%2BZ3YDgAk9%2BPrQIj4RG37Pk23LlOOwWe%2FIvrcbKtJnB4jQts7cFf3JHDRnCnLAi1Ag4PHUZnHJkQj9U1ywqRv0uKZlR2vf8MQL6HfuqRVEqK5Lmo0dq7dBLgNifnhj8eh%2Be8UqQVNsV2fOyMHRRrdgRLB6jGmKoWsiwE2%2FPzKfb4WI37gn3RsJPWdoxRqB1dJG%2FKqLjWi&X-Amz-Signature=389117824b05dbd8fba13ff611299a340bddf658116c418fc15a7fb418dfe196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQNPYWA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6%2Bh4Z%2BxehTs1euV0KygXoCJuGU489%2BiEl60jx5ez4uwIhANOlPA7%2BBxFWf4T6odNopBtQUhU44XJwwbIC%2FOvyapBMKv8DCHQQABoMNjM3NDIzMTgzODA1IgwJCnqxKwFvq1mEdXIq3APH35mjHEzUxIdB3pysFXen%2F5TPekcVsb6FesG00Of%2FRolzPjHPEaPFKK%2BkHA54EZgwYpBuKPBQIDLGyR%2FuuG8oHTNIxZF622bI%2Bzo6vxU5ZRny%2FnBd3PnSJUEuiZQQ1tfJWFu%2BFHfNnZ9vCoNKBgvP0vUvvrBAkfHAVB8iUMuTaHk9oV3O3HnPuNmk5Hs55WkYd1YW%2FkWegTz8ZH55wLzq6PUWSNCN0MOppT0bG1uplcIWQTdN%2FmiVtSlApYblbeyXp8o7tx8B2I6XX1zC6LeFVO6sCUvOHnBOgLeQWSqdrae8VpFV2sfSUSiEFhM%2Fa0RxgDkTToBkXYA0puXh7CgwkI8Fxehs2CpWs6VSQojcX4tK1wjRQldgKPLrG4hYscSXHCyGVb%2Fov9UmvZGhtWRFjFx34%2BhM%2B%2BDZhFhSouULSTevH3muavtm0oLJ2ZDc5Ogx2EgziHCuJtGJHWw4EaSooYGmBx4ekqZqWMdTUilYms%2B09ypwD%2FDZKxJCEkooTCvtZx7lCWnKnVHyD3vBpi3mW77yb0mvjdRBtyQsgEsjVZLLOOTgTnX27SWVRtr8szAlBhC2Zoa8ICZuZeKhNd3Tagb6gqsdLbnFKk8%2FDG1VAL7eMI5Mkdg7%2BYImBzCevYjKBjqkAXyyCiB4rZGpgdLupHNa5o3p%2BkPVEx2gJgsYLILwqT3oyCaeYNjuN0p%2BjQHqaEmCjhsUBrhojKABHCVj4PVzCq245jEwFtxQJQFc%2BGltHtWIPmAJj6bGHnksi1PiO%2BwDKvs2m594Ob%2F%2Fn02ng8EWDdeazJ7OqJ1Dq0m5v9xNZmBsNMt0ngXF4TgL9HQb9yDlGud23FTKvKmjA1bmefdsij%2BLu2lI&X-Amz-Signature=9c64ad1cd0c5f3685f4c22301b624a64ff9e71a162a43f6bae01989073cbc283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQNPYWA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6%2Bh4Z%2BxehTs1euV0KygXoCJuGU489%2BiEl60jx5ez4uwIhANOlPA7%2BBxFWf4T6odNopBtQUhU44XJwwbIC%2FOvyapBMKv8DCHQQABoMNjM3NDIzMTgzODA1IgwJCnqxKwFvq1mEdXIq3APH35mjHEzUxIdB3pysFXen%2F5TPekcVsb6FesG00Of%2FRolzPjHPEaPFKK%2BkHA54EZgwYpBuKPBQIDLGyR%2FuuG8oHTNIxZF622bI%2Bzo6vxU5ZRny%2FnBd3PnSJUEuiZQQ1tfJWFu%2BFHfNnZ9vCoNKBgvP0vUvvrBAkfHAVB8iUMuTaHk9oV3O3HnPuNmk5Hs55WkYd1YW%2FkWegTz8ZH55wLzq6PUWSNCN0MOppT0bG1uplcIWQTdN%2FmiVtSlApYblbeyXp8o7tx8B2I6XX1zC6LeFVO6sCUvOHnBOgLeQWSqdrae8VpFV2sfSUSiEFhM%2Fa0RxgDkTToBkXYA0puXh7CgwkI8Fxehs2CpWs6VSQojcX4tK1wjRQldgKPLrG4hYscSXHCyGVb%2Fov9UmvZGhtWRFjFx34%2BhM%2B%2BDZhFhSouULSTevH3muavtm0oLJ2ZDc5Ogx2EgziHCuJtGJHWw4EaSooYGmBx4ekqZqWMdTUilYms%2B09ypwD%2FDZKxJCEkooTCvtZx7lCWnKnVHyD3vBpi3mW77yb0mvjdRBtyQsgEsjVZLLOOTgTnX27SWVRtr8szAlBhC2Zoa8ICZuZeKhNd3Tagb6gqsdLbnFKk8%2FDG1VAL7eMI5Mkdg7%2BYImBzCevYjKBjqkAXyyCiB4rZGpgdLupHNa5o3p%2BkPVEx2gJgsYLILwqT3oyCaeYNjuN0p%2BjQHqaEmCjhsUBrhojKABHCVj4PVzCq245jEwFtxQJQFc%2BGltHtWIPmAJj6bGHnksi1PiO%2BwDKvs2m594Ob%2F%2Fn02ng8EWDdeazJ7OqJ1Dq0m5v9xNZmBsNMt0ngXF4TgL9HQb9yDlGud23FTKvKmjA1bmefdsij%2BLu2lI&X-Amz-Signature=90f9ee075d12c8e54c5db6a97213a1a7f2e6e45a7048f704defb91e4452300a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQNPYWA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6%2Bh4Z%2BxehTs1euV0KygXoCJuGU489%2BiEl60jx5ez4uwIhANOlPA7%2BBxFWf4T6odNopBtQUhU44XJwwbIC%2FOvyapBMKv8DCHQQABoMNjM3NDIzMTgzODA1IgwJCnqxKwFvq1mEdXIq3APH35mjHEzUxIdB3pysFXen%2F5TPekcVsb6FesG00Of%2FRolzPjHPEaPFKK%2BkHA54EZgwYpBuKPBQIDLGyR%2FuuG8oHTNIxZF622bI%2Bzo6vxU5ZRny%2FnBd3PnSJUEuiZQQ1tfJWFu%2BFHfNnZ9vCoNKBgvP0vUvvrBAkfHAVB8iUMuTaHk9oV3O3HnPuNmk5Hs55WkYd1YW%2FkWegTz8ZH55wLzq6PUWSNCN0MOppT0bG1uplcIWQTdN%2FmiVtSlApYblbeyXp8o7tx8B2I6XX1zC6LeFVO6sCUvOHnBOgLeQWSqdrae8VpFV2sfSUSiEFhM%2Fa0RxgDkTToBkXYA0puXh7CgwkI8Fxehs2CpWs6VSQojcX4tK1wjRQldgKPLrG4hYscSXHCyGVb%2Fov9UmvZGhtWRFjFx34%2BhM%2B%2BDZhFhSouULSTevH3muavtm0oLJ2ZDc5Ogx2EgziHCuJtGJHWw4EaSooYGmBx4ekqZqWMdTUilYms%2B09ypwD%2FDZKxJCEkooTCvtZx7lCWnKnVHyD3vBpi3mW77yb0mvjdRBtyQsgEsjVZLLOOTgTnX27SWVRtr8szAlBhC2Zoa8ICZuZeKhNd3Tagb6gqsdLbnFKk8%2FDG1VAL7eMI5Mkdg7%2BYImBzCevYjKBjqkAXyyCiB4rZGpgdLupHNa5o3p%2BkPVEx2gJgsYLILwqT3oyCaeYNjuN0p%2BjQHqaEmCjhsUBrhojKABHCVj4PVzCq245jEwFtxQJQFc%2BGltHtWIPmAJj6bGHnksi1PiO%2BwDKvs2m594Ob%2F%2Fn02ng8EWDdeazJ7OqJ1Dq0m5v9xNZmBsNMt0ngXF4TgL9HQb9yDlGud23FTKvKmjA1bmefdsij%2BLu2lI&X-Amz-Signature=50e86510ee57506d861a28d1d6467bcc4f3d6eb1bc5cb8569ce4cc13f16b08f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQNPYWA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6%2Bh4Z%2BxehTs1euV0KygXoCJuGU489%2BiEl60jx5ez4uwIhANOlPA7%2BBxFWf4T6odNopBtQUhU44XJwwbIC%2FOvyapBMKv8DCHQQABoMNjM3NDIzMTgzODA1IgwJCnqxKwFvq1mEdXIq3APH35mjHEzUxIdB3pysFXen%2F5TPekcVsb6FesG00Of%2FRolzPjHPEaPFKK%2BkHA54EZgwYpBuKPBQIDLGyR%2FuuG8oHTNIxZF622bI%2Bzo6vxU5ZRny%2FnBd3PnSJUEuiZQQ1tfJWFu%2BFHfNnZ9vCoNKBgvP0vUvvrBAkfHAVB8iUMuTaHk9oV3O3HnPuNmk5Hs55WkYd1YW%2FkWegTz8ZH55wLzq6PUWSNCN0MOppT0bG1uplcIWQTdN%2FmiVtSlApYblbeyXp8o7tx8B2I6XX1zC6LeFVO6sCUvOHnBOgLeQWSqdrae8VpFV2sfSUSiEFhM%2Fa0RxgDkTToBkXYA0puXh7CgwkI8Fxehs2CpWs6VSQojcX4tK1wjRQldgKPLrG4hYscSXHCyGVb%2Fov9UmvZGhtWRFjFx34%2BhM%2B%2BDZhFhSouULSTevH3muavtm0oLJ2ZDc5Ogx2EgziHCuJtGJHWw4EaSooYGmBx4ekqZqWMdTUilYms%2B09ypwD%2FDZKxJCEkooTCvtZx7lCWnKnVHyD3vBpi3mW77yb0mvjdRBtyQsgEsjVZLLOOTgTnX27SWVRtr8szAlBhC2Zoa8ICZuZeKhNd3Tagb6gqsdLbnFKk8%2FDG1VAL7eMI5Mkdg7%2BYImBzCevYjKBjqkAXyyCiB4rZGpgdLupHNa5o3p%2BkPVEx2gJgsYLILwqT3oyCaeYNjuN0p%2BjQHqaEmCjhsUBrhojKABHCVj4PVzCq245jEwFtxQJQFc%2BGltHtWIPmAJj6bGHnksi1PiO%2BwDKvs2m594Ob%2F%2Fn02ng8EWDdeazJ7OqJ1Dq0m5v9xNZmBsNMt0ngXF4TgL9HQb9yDlGud23FTKvKmjA1bmefdsij%2BLu2lI&X-Amz-Signature=b58d9a6a50db4a8b102a964a3647bfa6b6f7f36d172f156663af789ec0f47768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQNPYWA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6%2Bh4Z%2BxehTs1euV0KygXoCJuGU489%2BiEl60jx5ez4uwIhANOlPA7%2BBxFWf4T6odNopBtQUhU44XJwwbIC%2FOvyapBMKv8DCHQQABoMNjM3NDIzMTgzODA1IgwJCnqxKwFvq1mEdXIq3APH35mjHEzUxIdB3pysFXen%2F5TPekcVsb6FesG00Of%2FRolzPjHPEaPFKK%2BkHA54EZgwYpBuKPBQIDLGyR%2FuuG8oHTNIxZF622bI%2Bzo6vxU5ZRny%2FnBd3PnSJUEuiZQQ1tfJWFu%2BFHfNnZ9vCoNKBgvP0vUvvrBAkfHAVB8iUMuTaHk9oV3O3HnPuNmk5Hs55WkYd1YW%2FkWegTz8ZH55wLzq6PUWSNCN0MOppT0bG1uplcIWQTdN%2FmiVtSlApYblbeyXp8o7tx8B2I6XX1zC6LeFVO6sCUvOHnBOgLeQWSqdrae8VpFV2sfSUSiEFhM%2Fa0RxgDkTToBkXYA0puXh7CgwkI8Fxehs2CpWs6VSQojcX4tK1wjRQldgKPLrG4hYscSXHCyGVb%2Fov9UmvZGhtWRFjFx34%2BhM%2B%2BDZhFhSouULSTevH3muavtm0oLJ2ZDc5Ogx2EgziHCuJtGJHWw4EaSooYGmBx4ekqZqWMdTUilYms%2B09ypwD%2FDZKxJCEkooTCvtZx7lCWnKnVHyD3vBpi3mW77yb0mvjdRBtyQsgEsjVZLLOOTgTnX27SWVRtr8szAlBhC2Zoa8ICZuZeKhNd3Tagb6gqsdLbnFKk8%2FDG1VAL7eMI5Mkdg7%2BYImBzCevYjKBjqkAXyyCiB4rZGpgdLupHNa5o3p%2BkPVEx2gJgsYLILwqT3oyCaeYNjuN0p%2BjQHqaEmCjhsUBrhojKABHCVj4PVzCq245jEwFtxQJQFc%2BGltHtWIPmAJj6bGHnksi1PiO%2BwDKvs2m594Ob%2F%2Fn02ng8EWDdeazJ7OqJ1Dq0m5v9xNZmBsNMt0ngXF4TgL9HQb9yDlGud23FTKvKmjA1bmefdsij%2BLu2lI&X-Amz-Signature=fc3fbef7fad22ddcee5e33e11856cde934183c4cd04dc09c1e1df991a34c8ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUXWHLXA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuxF0Sumjsjv%2FjRd0f5guwPQ5oQLL0GZAbYzdkwszofAiEA5ALjMirNDbIsi4aVPAc0QnrLYCnIkIKZIceaayGy3jsq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDP160ZpSbecb6WNACCrcAyKR6k7SehNV3JK%2F5QDgMzjsBVZHjxE5Vrvs9TxLcpEXE9Nsqn5gImryxyZVSw%2Fl6hQNeqNdYItmEpyQ1MxT%2FZfqyEl%2F61FhNbE1Mst7%2BJwEo8iUodLp2Q2T%2B2%2B5U2Y9FybMBW%2FIJLCx4T1jmRTiL7gMO23QwdKdU4yEAYUdJRufG77fVaCMUvXn9mkPx9VFfnZxAgUnyL3%2FaGNFsbwbK9Ag47NiCvogO9gHvRZzQCMJOt6SFHmMSuDBlJp2CoblQ7fW5EvhbG%2Bee4CCIohKGwjDmEKkVE6Jc9icLQiAyFAyabE7T%2BBM84xqvASsOjDpqicnunCkKrrnPPQFix0nt%2B5qHMHvAXNhqBLr8p1ZopymRzCINRWpC%2Be1D7lhJerWiI6aHU5Kn5M%2FzsvTi%2FtfvzFba8cjBz0%2FYcu6nuEtJdMtD6QLS5w3vpd9C8t2hBMKOzhJCIUUBuU8ZhKJSb81fQ06u31ugTI4dkw4rSbXDKMnY5Nx8kA21ZJdS%2BMD46FGpWCh0zRAOE2QNyUjZ%2BJpHIwCG3bgjjVEJ8McKTiorI8Dvm3J1MJTHRarKoYInI0brLGnSMwjh5To93Km5tK6JU3PZbaPO5Z%2Fau3MKLbBqKHt6usR0bSl1CxJhpmuMI69iMoGOqUB06eiscUJNgcIZlj%2FbdZHaCoIJh47zHy3Vr4Y1HzLEJvSHMYQ%2FMEz4uWoqU2NDT2cl063IbgKj17853Ojp1LN6SL6HZoCCnuDDN8hMmFkzZH76L6BMe6WszRk1%2Bb%2FU2PSLSDo3eBTfFV4gYGxjgTUve%2FkiqZwad6F5ZqVseNYQFFdY6r2N%2BNWOmHgIJP0H%2Fmu9t4cSulAZ1btDLtSDz7Rw18OkG82&X-Amz-Signature=6284a6696dbff1ad2664769f0fcd5d5f932798e2403f2af8c3716b473c455c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

