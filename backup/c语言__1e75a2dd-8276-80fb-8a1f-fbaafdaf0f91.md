
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K4PSDV4%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIDXd0%2FVXvWdCcVZOjJHh%2FpjS2scNSffnaOKiYf3bvxB7AiEAy13DPN%2F9ujzSZAN0BlB9Pe1WH0jvJlduclAyBv6ejZcq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDOa%2BiTdA2dNYbImZHyrcAzVgP2IoMJq%2Bdy1PbQzj79yS7YZMtEk1AMlKP8E1wQiZt%2FxR85o5tZLZ4AdRLvToSuxJPLrAP6gu5CI28ioOxFwOfbdou8ZV8jl5GOIu9Q026uAAbsaUcELxY3Ec8TV3KZcbjlJW9V1jx8JcnjKELMxP7SdYdsnVOd%2Fz2RjddZH2B7bUGRhweYumceQ8rSAyS7jiJ%2B3gagoL7%2Byap%2FAqbeCVx%2FpEQdUqtXPYiiF1XsFBeTk%2FFNJ71SHGJ%2FVYa626zJZzeYu5pqQlRKSHtqIJxY3lFj5LYTWYFd%2FWQcTwHK%2FPXZYHCFO%2Fs%2BxKDDOdj4ppGoaRbdmOBbpA0kSpVrP5DaxXyS135zugYRYFv6wKSp4RSr%2FKsDTjnHGuRJ%2BxRk1qSowBbxUtrW7NCYKYMe22TjxSgX68x6MWMZkQ1eBEbIm3eQcD1nwAUrf7SKUyLpl3tNZ2qOc%2BxQo%2BpK8CCmjNeY41hvaKVAgbu2EdB1qUTZTuo%2Bm58imGLs1YJ%2B3cGoFyoNzwmsaPDXumfuE32XqhAPmNJNoMgV8dftSEqP%2BTRBCG%2FOI14p4DO8IrLusM9yoWcU5z4FlsIBEsg4h4NJexHshcQbGEvuXTfIKhMOfqUQTje3SdSrYjBECCh9f0MMX70MsGOqUBgnFWsx75NWbg%2BKNIzePE4STQ0RJnc5GWyLCP5It2q0ux4khpfangozrBny0f%2BT0FIASscXarapYClu%2BP0XYABUWqeKhaukS6Ma3m5wYZJtIiYifuN3hWppLrznhEFooFInZM6dxQQVk%2F0Ga90TnI%2BuPuWMIPkQfN49quEwsMSf9%2FsejcNKn0rc9KklSDxwbnEs8JYwU7HfzFEs50Lf13dwzo0gRz&X-Amz-Signature=01c5e250db7afe5a8f44edc8d24df1bfda978492008bced617bc958cebf7c360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622W3JEHU%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDKnukKxrDZmBP4kGwuph08xHYnlSf9JPiVGJVXHmKUiwIhAL3M7FcDZ8uasnSHIP8vntlYqSYBMvVPkm7MIQwXICQZKv8DCAUQABoMNjM3NDIzMTgzODA1IgzJt%2FUaNcX9X8Nfpx0q3ANIMJy9ECNfUqCy0EUyeFT%2FDZpr%2BdZCE57HCmUl0wy3%2F4aXmYU2wT%2FR27HwSyrD2ynKIsFcLwr6FRVy8OngLT0CZbXk6OPGcQNyc5VGwEkRxFC2FEgsz%2FLcTlPW4v7PnscrJqb2TqyL4wtal5JyldMkKmJprgbnd7GGUpdN87ZKtq1IeVhbZPbNTagT5FKuNsncXabd3JpOjDwueRoq2XYqACPR8J970eJG945dc2y4KlTq9Pvd315tckX6I2IqALbA3OKB3Zo4O3wWC9tyWUK7%2FQ8Z1jaQ8Yk8acGtec99r83bVBJhIvhMGzSiblYfxcXoCQgzw5SYzW0Ejf22mbHHKzEYKCrKj0vUw62P59Jzwh2cGQ1Z4%2BAjcu6zY%2Fmbd%2BBch1KZa31pUU5oXl62sdsWiZEfr8EFuKQ8zW5McL2g%2FIcA5s742P5W57OwIT6DAlyAosjCL%2BCad84bur8jdAiMlWQiW6qF9I9%2FWwj9cbMb9og1P1j5Nc7YyLbZbrvJ%2BBjcpnio1kTaZDkjQwKkoYws1IGAp4tSSf4phcp3avk3z21N0Xds4dNgvW%2FYX1nnRU0wfjkRX14Ce57PGS%2B7b3OHxwxQdxUNBc6VKKVhM%2FHp5pWlFm7bx%2F4AIFIYUDCS%2FdDLBjqkAb7P8LGBjkZqdacIjvsfWagOb8Tz2TLBR%2FgKvE2K1fOzv29Wab%2FrblUoCchgODBkLdIRZlp1D9B32J%2FFYfBwhCQAwHO8MQgCJL2SiN8lDF3%2FrKUFHRs8ScmH%2FQR4E8aicJgfPbQTfTrw2Uo32YdhNidCWJAzXvZNxsmYVk6CW%2F52DmxHqz4tqb7Zs%2FVJV47EAV%2Fuv1iqxXeJWcbn44yk8klTWdDT&X-Amz-Signature=eab2639a1ce9505dfa719d3a037cb70930c137eb12d719f3b6304ed19089033e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622W3JEHU%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDKnukKxrDZmBP4kGwuph08xHYnlSf9JPiVGJVXHmKUiwIhAL3M7FcDZ8uasnSHIP8vntlYqSYBMvVPkm7MIQwXICQZKv8DCAUQABoMNjM3NDIzMTgzODA1IgzJt%2FUaNcX9X8Nfpx0q3ANIMJy9ECNfUqCy0EUyeFT%2FDZpr%2BdZCE57HCmUl0wy3%2F4aXmYU2wT%2FR27HwSyrD2ynKIsFcLwr6FRVy8OngLT0CZbXk6OPGcQNyc5VGwEkRxFC2FEgsz%2FLcTlPW4v7PnscrJqb2TqyL4wtal5JyldMkKmJprgbnd7GGUpdN87ZKtq1IeVhbZPbNTagT5FKuNsncXabd3JpOjDwueRoq2XYqACPR8J970eJG945dc2y4KlTq9Pvd315tckX6I2IqALbA3OKB3Zo4O3wWC9tyWUK7%2FQ8Z1jaQ8Yk8acGtec99r83bVBJhIvhMGzSiblYfxcXoCQgzw5SYzW0Ejf22mbHHKzEYKCrKj0vUw62P59Jzwh2cGQ1Z4%2BAjcu6zY%2Fmbd%2BBch1KZa31pUU5oXl62sdsWiZEfr8EFuKQ8zW5McL2g%2FIcA5s742P5W57OwIT6DAlyAosjCL%2BCad84bur8jdAiMlWQiW6qF9I9%2FWwj9cbMb9og1P1j5Nc7YyLbZbrvJ%2BBjcpnio1kTaZDkjQwKkoYws1IGAp4tSSf4phcp3avk3z21N0Xds4dNgvW%2FYX1nnRU0wfjkRX14Ce57PGS%2B7b3OHxwxQdxUNBc6VKKVhM%2FHp5pWlFm7bx%2F4AIFIYUDCS%2FdDLBjqkAb7P8LGBjkZqdacIjvsfWagOb8Tz2TLBR%2FgKvE2K1fOzv29Wab%2FrblUoCchgODBkLdIRZlp1D9B32J%2FFYfBwhCQAwHO8MQgCJL2SiN8lDF3%2FrKUFHRs8ScmH%2FQR4E8aicJgfPbQTfTrw2Uo32YdhNidCWJAzXvZNxsmYVk6CW%2F52DmxHqz4tqb7Zs%2FVJV47EAV%2Fuv1iqxXeJWcbn44yk8klTWdDT&X-Amz-Signature=343c2f76e2ed648306f745a595d5ddebfaaef46b8221cc91f74c614d20692b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3FVBRB%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIH2Ykw2hGW6aT4ewfWq%2BDd4qW%2BWlNzw7iUu7DBeXTFkPAiEAhtzprIx7r0dY3tj5aQRRsc%2FINDZHW79AfymSEPPzEUsq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDDjDbk94mMfPr9hMYyrcA%2Br8klpjdIncvo8moN%2FHWFIOvmpPjE0GvW3yV3yvLLNtJd0qJiuiKIUkfxHnrjk1mr4jhlcAnquDTEcVBVrhx9Y3G9EX4fjXk8Y2dpFUtashsWM0FXA8zQVkOY7Ed5C0sk6%2FWGrwRbym394gXgJQqo4%2Bmfmvgdk1g0fGSnBjQ2Z0u%2BvucXVu1mvsrbxTebROhV2hWkVfX5d2m1jRS%2BZeKfHYpAVO4qUrxXW33R6KJOdpA2PA7SgwRNHYBrdVbNajmGM8%2BgaaI0i%2Bsx2%2BaBOXm9%2FguyumYKqNuzVJ%2Fy3cIGwIR9vJ25glYLNdQs15TV8JMAKcoZR3DKzeQhO3UCuHtF0gXlhhjy66%2B8s%2Bvldtj96rQeYurU0HkfsgfBN6wJnSQ37JWPx3B7drxlI3e69lyb5J1gnwGVmUjkkl3NQF5OemNB3AuZa4RZD7bUCelNaj9TCM11gPEcVpBbptq6%2FgroNkCxBt6v6sXmqJfhJwK4aOLA1EkDIACC9sjpQScpSZBtWTzkR8h69Xmn%2FW0MZSmZxF4K5cLCWAa%2BG0tjKuDteKhNErwTNTXdzfPkH4OI7RwNYrFapbwyFt1ZJWuIgY0FLyVVFFZbKpMyamns4eTDSuGM%2BJUY7u40QJTiPXMPT70MsGOqUBJq0xO9LDiyO33Sv%2F1n44G0cSXmdVKmMiiYne9GlxduCoTlFOtDry1VkozK4TbhzjqE6akbl%2BbdRcDRP0q7%2BeelFcIxm4wTlZv4JI73msNon1bsKmp9U0ht5%2B6TefJIpswC0TyxcjvORVFJXNQzG%2Bd8Pc3hnwoz1qhjw6he0u%2FY%2FoWlcyy%2FfTBNwrzEUnqkOkuz97RZkoU79CZRCr%2F%2B68Hp1p%2B58D&X-Amz-Signature=4443f6330150a9e23fd4408c4115bba2db9d3d8cc82dd75c1b3489834b451aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3FVBRB%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIH2Ykw2hGW6aT4ewfWq%2BDd4qW%2BWlNzw7iUu7DBeXTFkPAiEAhtzprIx7r0dY3tj5aQRRsc%2FINDZHW79AfymSEPPzEUsq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDDjDbk94mMfPr9hMYyrcA%2Br8klpjdIncvo8moN%2FHWFIOvmpPjE0GvW3yV3yvLLNtJd0qJiuiKIUkfxHnrjk1mr4jhlcAnquDTEcVBVrhx9Y3G9EX4fjXk8Y2dpFUtashsWM0FXA8zQVkOY7Ed5C0sk6%2FWGrwRbym394gXgJQqo4%2Bmfmvgdk1g0fGSnBjQ2Z0u%2BvucXVu1mvsrbxTebROhV2hWkVfX5d2m1jRS%2BZeKfHYpAVO4qUrxXW33R6KJOdpA2PA7SgwRNHYBrdVbNajmGM8%2BgaaI0i%2Bsx2%2BaBOXm9%2FguyumYKqNuzVJ%2Fy3cIGwIR9vJ25glYLNdQs15TV8JMAKcoZR3DKzeQhO3UCuHtF0gXlhhjy66%2B8s%2Bvldtj96rQeYurU0HkfsgfBN6wJnSQ37JWPx3B7drxlI3e69lyb5J1gnwGVmUjkkl3NQF5OemNB3AuZa4RZD7bUCelNaj9TCM11gPEcVpBbptq6%2FgroNkCxBt6v6sXmqJfhJwK4aOLA1EkDIACC9sjpQScpSZBtWTzkR8h69Xmn%2FW0MZSmZxF4K5cLCWAa%2BG0tjKuDteKhNErwTNTXdzfPkH4OI7RwNYrFapbwyFt1ZJWuIgY0FLyVVFFZbKpMyamns4eTDSuGM%2BJUY7u40QJTiPXMPT70MsGOqUBJq0xO9LDiyO33Sv%2F1n44G0cSXmdVKmMiiYne9GlxduCoTlFOtDry1VkozK4TbhzjqE6akbl%2BbdRcDRP0q7%2BeelFcIxm4wTlZv4JI73msNon1bsKmp9U0ht5%2B6TefJIpswC0TyxcjvORVFJXNQzG%2Bd8Pc3hnwoz1qhjw6he0u%2FY%2FoWlcyy%2FfTBNwrzEUnqkOkuz97RZkoU79CZRCr%2F%2B68Hp1p%2B58D&X-Amz-Signature=777ef6b32c6313d7eedca0ae972cb63d4b87a563e5637cad16030b49711ca3eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3FVBRB%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIH2Ykw2hGW6aT4ewfWq%2BDd4qW%2BWlNzw7iUu7DBeXTFkPAiEAhtzprIx7r0dY3tj5aQRRsc%2FINDZHW79AfymSEPPzEUsq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDDjDbk94mMfPr9hMYyrcA%2Br8klpjdIncvo8moN%2FHWFIOvmpPjE0GvW3yV3yvLLNtJd0qJiuiKIUkfxHnrjk1mr4jhlcAnquDTEcVBVrhx9Y3G9EX4fjXk8Y2dpFUtashsWM0FXA8zQVkOY7Ed5C0sk6%2FWGrwRbym394gXgJQqo4%2Bmfmvgdk1g0fGSnBjQ2Z0u%2BvucXVu1mvsrbxTebROhV2hWkVfX5d2m1jRS%2BZeKfHYpAVO4qUrxXW33R6KJOdpA2PA7SgwRNHYBrdVbNajmGM8%2BgaaI0i%2Bsx2%2BaBOXm9%2FguyumYKqNuzVJ%2Fy3cIGwIR9vJ25glYLNdQs15TV8JMAKcoZR3DKzeQhO3UCuHtF0gXlhhjy66%2B8s%2Bvldtj96rQeYurU0HkfsgfBN6wJnSQ37JWPx3B7drxlI3e69lyb5J1gnwGVmUjkkl3NQF5OemNB3AuZa4RZD7bUCelNaj9TCM11gPEcVpBbptq6%2FgroNkCxBt6v6sXmqJfhJwK4aOLA1EkDIACC9sjpQScpSZBtWTzkR8h69Xmn%2FW0MZSmZxF4K5cLCWAa%2BG0tjKuDteKhNErwTNTXdzfPkH4OI7RwNYrFapbwyFt1ZJWuIgY0FLyVVFFZbKpMyamns4eTDSuGM%2BJUY7u40QJTiPXMPT70MsGOqUBJq0xO9LDiyO33Sv%2F1n44G0cSXmdVKmMiiYne9GlxduCoTlFOtDry1VkozK4TbhzjqE6akbl%2BbdRcDRP0q7%2BeelFcIxm4wTlZv4JI73msNon1bsKmp9U0ht5%2B6TefJIpswC0TyxcjvORVFJXNQzG%2Bd8Pc3hnwoz1qhjw6he0u%2FY%2FoWlcyy%2FfTBNwrzEUnqkOkuz97RZkoU79CZRCr%2F%2B68Hp1p%2B58D&X-Amz-Signature=dbe657e204ec8e615c34e408c30bfd830736da580984c5199449c6fc353e29dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3FVBRB%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIH2Ykw2hGW6aT4ewfWq%2BDd4qW%2BWlNzw7iUu7DBeXTFkPAiEAhtzprIx7r0dY3tj5aQRRsc%2FINDZHW79AfymSEPPzEUsq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDDjDbk94mMfPr9hMYyrcA%2Br8klpjdIncvo8moN%2FHWFIOvmpPjE0GvW3yV3yvLLNtJd0qJiuiKIUkfxHnrjk1mr4jhlcAnquDTEcVBVrhx9Y3G9EX4fjXk8Y2dpFUtashsWM0FXA8zQVkOY7Ed5C0sk6%2FWGrwRbym394gXgJQqo4%2Bmfmvgdk1g0fGSnBjQ2Z0u%2BvucXVu1mvsrbxTebROhV2hWkVfX5d2m1jRS%2BZeKfHYpAVO4qUrxXW33R6KJOdpA2PA7SgwRNHYBrdVbNajmGM8%2BgaaI0i%2Bsx2%2BaBOXm9%2FguyumYKqNuzVJ%2Fy3cIGwIR9vJ25glYLNdQs15TV8JMAKcoZR3DKzeQhO3UCuHtF0gXlhhjy66%2B8s%2Bvldtj96rQeYurU0HkfsgfBN6wJnSQ37JWPx3B7drxlI3e69lyb5J1gnwGVmUjkkl3NQF5OemNB3AuZa4RZD7bUCelNaj9TCM11gPEcVpBbptq6%2FgroNkCxBt6v6sXmqJfhJwK4aOLA1EkDIACC9sjpQScpSZBtWTzkR8h69Xmn%2FW0MZSmZxF4K5cLCWAa%2BG0tjKuDteKhNErwTNTXdzfPkH4OI7RwNYrFapbwyFt1ZJWuIgY0FLyVVFFZbKpMyamns4eTDSuGM%2BJUY7u40QJTiPXMPT70MsGOqUBJq0xO9LDiyO33Sv%2F1n44G0cSXmdVKmMiiYne9GlxduCoTlFOtDry1VkozK4TbhzjqE6akbl%2BbdRcDRP0q7%2BeelFcIxm4wTlZv4JI73msNon1bsKmp9U0ht5%2B6TefJIpswC0TyxcjvORVFJXNQzG%2Bd8Pc3hnwoz1qhjw6he0u%2FY%2FoWlcyy%2FfTBNwrzEUnqkOkuz97RZkoU79CZRCr%2F%2B68Hp1p%2B58D&X-Amz-Signature=7a7b0fc65f2710a64e8ab93f2591c6e72284e7b2f8f2d14311298dc613d0c1b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3FVBRB%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIH2Ykw2hGW6aT4ewfWq%2BDd4qW%2BWlNzw7iUu7DBeXTFkPAiEAhtzprIx7r0dY3tj5aQRRsc%2FINDZHW79AfymSEPPzEUsq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDDjDbk94mMfPr9hMYyrcA%2Br8klpjdIncvo8moN%2FHWFIOvmpPjE0GvW3yV3yvLLNtJd0qJiuiKIUkfxHnrjk1mr4jhlcAnquDTEcVBVrhx9Y3G9EX4fjXk8Y2dpFUtashsWM0FXA8zQVkOY7Ed5C0sk6%2FWGrwRbym394gXgJQqo4%2Bmfmvgdk1g0fGSnBjQ2Z0u%2BvucXVu1mvsrbxTebROhV2hWkVfX5d2m1jRS%2BZeKfHYpAVO4qUrxXW33R6KJOdpA2PA7SgwRNHYBrdVbNajmGM8%2BgaaI0i%2Bsx2%2BaBOXm9%2FguyumYKqNuzVJ%2Fy3cIGwIR9vJ25glYLNdQs15TV8JMAKcoZR3DKzeQhO3UCuHtF0gXlhhjy66%2B8s%2Bvldtj96rQeYurU0HkfsgfBN6wJnSQ37JWPx3B7drxlI3e69lyb5J1gnwGVmUjkkl3NQF5OemNB3AuZa4RZD7bUCelNaj9TCM11gPEcVpBbptq6%2FgroNkCxBt6v6sXmqJfhJwK4aOLA1EkDIACC9sjpQScpSZBtWTzkR8h69Xmn%2FW0MZSmZxF4K5cLCWAa%2BG0tjKuDteKhNErwTNTXdzfPkH4OI7RwNYrFapbwyFt1ZJWuIgY0FLyVVFFZbKpMyamns4eTDSuGM%2BJUY7u40QJTiPXMPT70MsGOqUBJq0xO9LDiyO33Sv%2F1n44G0cSXmdVKmMiiYne9GlxduCoTlFOtDry1VkozK4TbhzjqE6akbl%2BbdRcDRP0q7%2BeelFcIxm4wTlZv4JI73msNon1bsKmp9U0ht5%2B6TefJIpswC0TyxcjvORVFJXNQzG%2Bd8Pc3hnwoz1qhjw6he0u%2FY%2FoWlcyy%2FfTBNwrzEUnqkOkuz97RZkoU79CZRCr%2F%2B68Hp1p%2B58D&X-Amz-Signature=0ee17cffadfeae628d48eeff4e3581f0ff95666799c84ad49d22835e1337b339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3FVBRB%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIH2Ykw2hGW6aT4ewfWq%2BDd4qW%2BWlNzw7iUu7DBeXTFkPAiEAhtzprIx7r0dY3tj5aQRRsc%2FINDZHW79AfymSEPPzEUsq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDDjDbk94mMfPr9hMYyrcA%2Br8klpjdIncvo8moN%2FHWFIOvmpPjE0GvW3yV3yvLLNtJd0qJiuiKIUkfxHnrjk1mr4jhlcAnquDTEcVBVrhx9Y3G9EX4fjXk8Y2dpFUtashsWM0FXA8zQVkOY7Ed5C0sk6%2FWGrwRbym394gXgJQqo4%2Bmfmvgdk1g0fGSnBjQ2Z0u%2BvucXVu1mvsrbxTebROhV2hWkVfX5d2m1jRS%2BZeKfHYpAVO4qUrxXW33R6KJOdpA2PA7SgwRNHYBrdVbNajmGM8%2BgaaI0i%2Bsx2%2BaBOXm9%2FguyumYKqNuzVJ%2Fy3cIGwIR9vJ25glYLNdQs15TV8JMAKcoZR3DKzeQhO3UCuHtF0gXlhhjy66%2B8s%2Bvldtj96rQeYurU0HkfsgfBN6wJnSQ37JWPx3B7drxlI3e69lyb5J1gnwGVmUjkkl3NQF5OemNB3AuZa4RZD7bUCelNaj9TCM11gPEcVpBbptq6%2FgroNkCxBt6v6sXmqJfhJwK4aOLA1EkDIACC9sjpQScpSZBtWTzkR8h69Xmn%2FW0MZSmZxF4K5cLCWAa%2BG0tjKuDteKhNErwTNTXdzfPkH4OI7RwNYrFapbwyFt1ZJWuIgY0FLyVVFFZbKpMyamns4eTDSuGM%2BJUY7u40QJTiPXMPT70MsGOqUBJq0xO9LDiyO33Sv%2F1n44G0cSXmdVKmMiiYne9GlxduCoTlFOtDry1VkozK4TbhzjqE6akbl%2BbdRcDRP0q7%2BeelFcIxm4wTlZv4JI73msNon1bsKmp9U0ht5%2B6TefJIpswC0TyxcjvORVFJXNQzG%2Bd8Pc3hnwoz1qhjw6he0u%2FY%2FoWlcyy%2FfTBNwrzEUnqkOkuz97RZkoU79CZRCr%2F%2B68Hp1p%2B58D&X-Amz-Signature=54fd6be8918d59e76afce7d4cd38510f209ddcb87963b7e844b90e8b226ff387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3FVBRB%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIH2Ykw2hGW6aT4ewfWq%2BDd4qW%2BWlNzw7iUu7DBeXTFkPAiEAhtzprIx7r0dY3tj5aQRRsc%2FINDZHW79AfymSEPPzEUsq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDDjDbk94mMfPr9hMYyrcA%2Br8klpjdIncvo8moN%2FHWFIOvmpPjE0GvW3yV3yvLLNtJd0qJiuiKIUkfxHnrjk1mr4jhlcAnquDTEcVBVrhx9Y3G9EX4fjXk8Y2dpFUtashsWM0FXA8zQVkOY7Ed5C0sk6%2FWGrwRbym394gXgJQqo4%2Bmfmvgdk1g0fGSnBjQ2Z0u%2BvucXVu1mvsrbxTebROhV2hWkVfX5d2m1jRS%2BZeKfHYpAVO4qUrxXW33R6KJOdpA2PA7SgwRNHYBrdVbNajmGM8%2BgaaI0i%2Bsx2%2BaBOXm9%2FguyumYKqNuzVJ%2Fy3cIGwIR9vJ25glYLNdQs15TV8JMAKcoZR3DKzeQhO3UCuHtF0gXlhhjy66%2B8s%2Bvldtj96rQeYurU0HkfsgfBN6wJnSQ37JWPx3B7drxlI3e69lyb5J1gnwGVmUjkkl3NQF5OemNB3AuZa4RZD7bUCelNaj9TCM11gPEcVpBbptq6%2FgroNkCxBt6v6sXmqJfhJwK4aOLA1EkDIACC9sjpQScpSZBtWTzkR8h69Xmn%2FW0MZSmZxF4K5cLCWAa%2BG0tjKuDteKhNErwTNTXdzfPkH4OI7RwNYrFapbwyFt1ZJWuIgY0FLyVVFFZbKpMyamns4eTDSuGM%2BJUY7u40QJTiPXMPT70MsGOqUBJq0xO9LDiyO33Sv%2F1n44G0cSXmdVKmMiiYne9GlxduCoTlFOtDry1VkozK4TbhzjqE6akbl%2BbdRcDRP0q7%2BeelFcIxm4wTlZv4JI73msNon1bsKmp9U0ht5%2B6TefJIpswC0TyxcjvORVFJXNQzG%2Bd8Pc3hnwoz1qhjw6he0u%2FY%2FoWlcyy%2FfTBNwrzEUnqkOkuz97RZkoU79CZRCr%2F%2B68Hp1p%2B58D&X-Amz-Signature=7f4069b880f3d38680e404f2c1f40dc58564e922c829cbfe121c11f374bfc078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7ZVPQBJ%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCwBQboLVUcYZMr2nCCsErCY7JGXMVEjTqH5LObqFoG3wIhAJxzzim64fkQBLmManVNSE%2FCedMDuS1o463rbz8qyBN3Kv8DCAUQABoMNjM3NDIzMTgzODA1IgzvgSXePMCWbr%2B77Z0q3AMIpDND2ZcgliW2NgaiUi9R1Kn4%2FFjiN1p77EovWD0ia4n6naFUNYSODVeEgVtC0UdkgEKYpL4%2FPH6wiH2PzXrg9Hn6UaVGUgK3zac80PrrWF4YSzkIID%2BwR1DEdiOK1TJ4e%2BO%2Fn8WZkRL9ciDp8B9SxwolEfFyOSmWAIiNaR0InxFKXjvaebyHWXCd5n7aUIkcOrPcX9LLX7hEzOpTuswJRBJJTFMgifa0Gry2KR53OOUB7qurwp2Knmi7LUNJCox%2BWMV8mCXrvaYDp0XuqeFoEMVVFja%2Bsgq9R9j9IUCy%2Bit1scffGJdHT4m5Nvpy8sCfAK9HMWcsPyvISAQPoY3Sb77pEegy2cbc96Qn4%2FS9r5By5M9omp1pN0RWfna%2BGfyfaIaqF4coclkdQ0FrQbYUbcL4m2YSK61ReakuGDP0m8BsEN7JujQODAqmeddLCxkDHEn5R7a4YIDOACIixqaxSTXhc6jP6KDsdRLbzR7vfGC9EY5hi%2FNV1puCli0g5hA6K%2FVaUsD3pfeXtyGBFcb8VPTJVwROFFr0wM3nQ5g9IFJ4%2FJcKteP4grx8msaR4E9HqwamJbcIgNYiBXo%2FW%2FEZ0%2BzubU5hft9klVqHHnzWkTm4pIP0bFPaGRvzYjDw%2B9DLBjqkAa5f6QK%2F%2FB2fyR%2FCrWzzJo37cbHrVzDvHQW3oCdCFNQ1MhsylvEQ1XpkWAxJ9ZqZAHF5lByBighYrRK4R%2BK9jJG8xGQpKHWFXTFrqzlZTL17skc3Kj65xu%2B%2FDIPyd97cOL8JZhttZe3TslXr7ZQ4zkXScxoFfnczZfr8UIsIrzEkbqkcfz1%2FspB60erupf92oE2eaghehoxsAE2F2IhP3%2BgZ6lpA&X-Amz-Signature=67dd500b2b53ef123edca3d152c5e112dd5285d001769608ad659090f93528f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7ZVPQBJ%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCwBQboLVUcYZMr2nCCsErCY7JGXMVEjTqH5LObqFoG3wIhAJxzzim64fkQBLmManVNSE%2FCedMDuS1o463rbz8qyBN3Kv8DCAUQABoMNjM3NDIzMTgzODA1IgzvgSXePMCWbr%2B77Z0q3AMIpDND2ZcgliW2NgaiUi9R1Kn4%2FFjiN1p77EovWD0ia4n6naFUNYSODVeEgVtC0UdkgEKYpL4%2FPH6wiH2PzXrg9Hn6UaVGUgK3zac80PrrWF4YSzkIID%2BwR1DEdiOK1TJ4e%2BO%2Fn8WZkRL9ciDp8B9SxwolEfFyOSmWAIiNaR0InxFKXjvaebyHWXCd5n7aUIkcOrPcX9LLX7hEzOpTuswJRBJJTFMgifa0Gry2KR53OOUB7qurwp2Knmi7LUNJCox%2BWMV8mCXrvaYDp0XuqeFoEMVVFja%2Bsgq9R9j9IUCy%2Bit1scffGJdHT4m5Nvpy8sCfAK9HMWcsPyvISAQPoY3Sb77pEegy2cbc96Qn4%2FS9r5By5M9omp1pN0RWfna%2BGfyfaIaqF4coclkdQ0FrQbYUbcL4m2YSK61ReakuGDP0m8BsEN7JujQODAqmeddLCxkDHEn5R7a4YIDOACIixqaxSTXhc6jP6KDsdRLbzR7vfGC9EY5hi%2FNV1puCli0g5hA6K%2FVaUsD3pfeXtyGBFcb8VPTJVwROFFr0wM3nQ5g9IFJ4%2FJcKteP4grx8msaR4E9HqwamJbcIgNYiBXo%2FW%2FEZ0%2BzubU5hft9klVqHHnzWkTm4pIP0bFPaGRvzYjDw%2B9DLBjqkAa5f6QK%2F%2FB2fyR%2FCrWzzJo37cbHrVzDvHQW3oCdCFNQ1MhsylvEQ1XpkWAxJ9ZqZAHF5lByBighYrRK4R%2BK9jJG8xGQpKHWFXTFrqzlZTL17skc3Kj65xu%2B%2FDIPyd97cOL8JZhttZe3TslXr7ZQ4zkXScxoFfnczZfr8UIsIrzEkbqkcfz1%2FspB60erupf92oE2eaghehoxsAE2F2IhP3%2BgZ6lpA&X-Amz-Signature=57af1a43bb5033d2bb57e7c7ad4b96b297e025782db5389e3682e7fba4d7d9f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7ZVPQBJ%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCwBQboLVUcYZMr2nCCsErCY7JGXMVEjTqH5LObqFoG3wIhAJxzzim64fkQBLmManVNSE%2FCedMDuS1o463rbz8qyBN3Kv8DCAUQABoMNjM3NDIzMTgzODA1IgzvgSXePMCWbr%2B77Z0q3AMIpDND2ZcgliW2NgaiUi9R1Kn4%2FFjiN1p77EovWD0ia4n6naFUNYSODVeEgVtC0UdkgEKYpL4%2FPH6wiH2PzXrg9Hn6UaVGUgK3zac80PrrWF4YSzkIID%2BwR1DEdiOK1TJ4e%2BO%2Fn8WZkRL9ciDp8B9SxwolEfFyOSmWAIiNaR0InxFKXjvaebyHWXCd5n7aUIkcOrPcX9LLX7hEzOpTuswJRBJJTFMgifa0Gry2KR53OOUB7qurwp2Knmi7LUNJCox%2BWMV8mCXrvaYDp0XuqeFoEMVVFja%2Bsgq9R9j9IUCy%2Bit1scffGJdHT4m5Nvpy8sCfAK9HMWcsPyvISAQPoY3Sb77pEegy2cbc96Qn4%2FS9r5By5M9omp1pN0RWfna%2BGfyfaIaqF4coclkdQ0FrQbYUbcL4m2YSK61ReakuGDP0m8BsEN7JujQODAqmeddLCxkDHEn5R7a4YIDOACIixqaxSTXhc6jP6KDsdRLbzR7vfGC9EY5hi%2FNV1puCli0g5hA6K%2FVaUsD3pfeXtyGBFcb8VPTJVwROFFr0wM3nQ5g9IFJ4%2FJcKteP4grx8msaR4E9HqwamJbcIgNYiBXo%2FW%2FEZ0%2BzubU5hft9klVqHHnzWkTm4pIP0bFPaGRvzYjDw%2B9DLBjqkAa5f6QK%2F%2FB2fyR%2FCrWzzJo37cbHrVzDvHQW3oCdCFNQ1MhsylvEQ1XpkWAxJ9ZqZAHF5lByBighYrRK4R%2BK9jJG8xGQpKHWFXTFrqzlZTL17skc3Kj65xu%2B%2FDIPyd97cOL8JZhttZe3TslXr7ZQ4zkXScxoFfnczZfr8UIsIrzEkbqkcfz1%2FspB60erupf92oE2eaghehoxsAE2F2IhP3%2BgZ6lpA&X-Amz-Signature=1674e065aa2b31f2bd421413926167c502c54873630e217f3916b5c808af3e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7ZVPQBJ%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCwBQboLVUcYZMr2nCCsErCY7JGXMVEjTqH5LObqFoG3wIhAJxzzim64fkQBLmManVNSE%2FCedMDuS1o463rbz8qyBN3Kv8DCAUQABoMNjM3NDIzMTgzODA1IgzvgSXePMCWbr%2B77Z0q3AMIpDND2ZcgliW2NgaiUi9R1Kn4%2FFjiN1p77EovWD0ia4n6naFUNYSODVeEgVtC0UdkgEKYpL4%2FPH6wiH2PzXrg9Hn6UaVGUgK3zac80PrrWF4YSzkIID%2BwR1DEdiOK1TJ4e%2BO%2Fn8WZkRL9ciDp8B9SxwolEfFyOSmWAIiNaR0InxFKXjvaebyHWXCd5n7aUIkcOrPcX9LLX7hEzOpTuswJRBJJTFMgifa0Gry2KR53OOUB7qurwp2Knmi7LUNJCox%2BWMV8mCXrvaYDp0XuqeFoEMVVFja%2Bsgq9R9j9IUCy%2Bit1scffGJdHT4m5Nvpy8sCfAK9HMWcsPyvISAQPoY3Sb77pEegy2cbc96Qn4%2FS9r5By5M9omp1pN0RWfna%2BGfyfaIaqF4coclkdQ0FrQbYUbcL4m2YSK61ReakuGDP0m8BsEN7JujQODAqmeddLCxkDHEn5R7a4YIDOACIixqaxSTXhc6jP6KDsdRLbzR7vfGC9EY5hi%2FNV1puCli0g5hA6K%2FVaUsD3pfeXtyGBFcb8VPTJVwROFFr0wM3nQ5g9IFJ4%2FJcKteP4grx8msaR4E9HqwamJbcIgNYiBXo%2FW%2FEZ0%2BzubU5hft9klVqHHnzWkTm4pIP0bFPaGRvzYjDw%2B9DLBjqkAa5f6QK%2F%2FB2fyR%2FCrWzzJo37cbHrVzDvHQW3oCdCFNQ1MhsylvEQ1XpkWAxJ9ZqZAHF5lByBighYrRK4R%2BK9jJG8xGQpKHWFXTFrqzlZTL17skc3Kj65xu%2B%2FDIPyd97cOL8JZhttZe3TslXr7ZQ4zkXScxoFfnczZfr8UIsIrzEkbqkcfz1%2FspB60erupf92oE2eaghehoxsAE2F2IhP3%2BgZ6lpA&X-Amz-Signature=38882cfbcaa527678c88e2c343af4e6fae43651df848f23c155cf00128a97b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7ZVPQBJ%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCwBQboLVUcYZMr2nCCsErCY7JGXMVEjTqH5LObqFoG3wIhAJxzzim64fkQBLmManVNSE%2FCedMDuS1o463rbz8qyBN3Kv8DCAUQABoMNjM3NDIzMTgzODA1IgzvgSXePMCWbr%2B77Z0q3AMIpDND2ZcgliW2NgaiUi9R1Kn4%2FFjiN1p77EovWD0ia4n6naFUNYSODVeEgVtC0UdkgEKYpL4%2FPH6wiH2PzXrg9Hn6UaVGUgK3zac80PrrWF4YSzkIID%2BwR1DEdiOK1TJ4e%2BO%2Fn8WZkRL9ciDp8B9SxwolEfFyOSmWAIiNaR0InxFKXjvaebyHWXCd5n7aUIkcOrPcX9LLX7hEzOpTuswJRBJJTFMgifa0Gry2KR53OOUB7qurwp2Knmi7LUNJCox%2BWMV8mCXrvaYDp0XuqeFoEMVVFja%2Bsgq9R9j9IUCy%2Bit1scffGJdHT4m5Nvpy8sCfAK9HMWcsPyvISAQPoY3Sb77pEegy2cbc96Qn4%2FS9r5By5M9omp1pN0RWfna%2BGfyfaIaqF4coclkdQ0FrQbYUbcL4m2YSK61ReakuGDP0m8BsEN7JujQODAqmeddLCxkDHEn5R7a4YIDOACIixqaxSTXhc6jP6KDsdRLbzR7vfGC9EY5hi%2FNV1puCli0g5hA6K%2FVaUsD3pfeXtyGBFcb8VPTJVwROFFr0wM3nQ5g9IFJ4%2FJcKteP4grx8msaR4E9HqwamJbcIgNYiBXo%2FW%2FEZ0%2BzubU5hft9klVqHHnzWkTm4pIP0bFPaGRvzYjDw%2B9DLBjqkAa5f6QK%2F%2FB2fyR%2FCrWzzJo37cbHrVzDvHQW3oCdCFNQ1MhsylvEQ1XpkWAxJ9ZqZAHF5lByBighYrRK4R%2BK9jJG8xGQpKHWFXTFrqzlZTL17skc3Kj65xu%2B%2FDIPyd97cOL8JZhttZe3TslXr7ZQ4zkXScxoFfnczZfr8UIsIrzEkbqkcfz1%2FspB60erupf92oE2eaghehoxsAE2F2IhP3%2BgZ6lpA&X-Amz-Signature=926288741eadedf4bb1a1e115c7d7265be737b13dc120bd7a862c1ab384583f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYYUQDZ%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCEbSf%2B9%2Bd6otO3JjN9TaIrmwgaifgdoIrpFZbZ%2Bg3hZAIhALRfDxDBWRF3WQPVKNZVd6o16Yos6qsfuea6GMLYHYpvKv8DCAUQABoMNjM3NDIzMTgzODA1IgzNAcJEmlIh7iG%2FMo8q3APJ6AXtiDJ%2BxJ0CVj5lrNVjvYJ1jGiEStndd5J3aE4TaCVfFJMloGbywQ1vGPsVYHQh1BuvsVmnq06O8Qlyy6M6%2B0ugzyrexkFzTIiOmmepxzc%2BI1mmFt0cHSgkM3QktRhkDkNBw2TDYpRomO%2F8uA%2FpmI2iQA3Pab8Zr2t6PpyiNeFLHiZulb6vCXvsXHKJKqWcKzJnjZee0MsJtp9a71Mll%2BeZLrth4jLfTqZbGpupUxdkvs%2F5Ckuc9%2Fq6iLZguiFJyY9zrL%2BpVs%2BJnHwl5vf2wIh1JfLI5PqJAo0COuE%2BpPjT3je2FiXMx35h64klTvHHmpUDMViCYNZoS6GdlVjfDXJgEkHrbS3DFi0lUrUVfjqdVYnDzIkx30ZcVUvMrnw8ojV8JryENE6fFfaSwblCFNpZfuebwdPByXimF3JLHbib9bwCTekX4gFu8muffOKzWWYLYVZQ0w6leX2wPlf5JG9DtHArup3s%2BdWEeprdn%2BhPsU9A6FSRvqsBG2epwAFRZE5owK2v9Ki%2FPBYpHNVUPrcg9R1mAATJ2GfxpKhfJYFdkZhsiqY9xexsH5siHI0ursVEfLY4RtVtXMM2EaEmtFIkrv5GnhYyTvhiLpfMD%2F7osIM5iC86cwO3AjDl%2FdDLBjqkAS4u2g%2FC1%2FOCfp%2F4RUdRmsbOjEsn7Lj309mTAvE8bMpbuyXHnQDJrG9H95ag2NgO61CdQyrt8IjYb%2Bo6jF0AzcVcP2pvalcFpInxhyVIxZg4aldQxlvxTvyEi%2B5p%2F6Q6gNG1kyUGKJvxNRF9KEdc7Uscp21%2Fqhf4%2BM%2F7jMT8bCfL9RTGb%2FV6hb5AgRfsb5%2B5lsZPoFQDd60C8cpe%2FgkkyfzjZHKD&X-Amz-Signature=d005436ef7c900a89d4ddd580488163b760e4fa590b7439a8f07037998527462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYYUQDZ%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCEbSf%2B9%2Bd6otO3JjN9TaIrmwgaifgdoIrpFZbZ%2Bg3hZAIhALRfDxDBWRF3WQPVKNZVd6o16Yos6qsfuea6GMLYHYpvKv8DCAUQABoMNjM3NDIzMTgzODA1IgzNAcJEmlIh7iG%2FMo8q3APJ6AXtiDJ%2BxJ0CVj5lrNVjvYJ1jGiEStndd5J3aE4TaCVfFJMloGbywQ1vGPsVYHQh1BuvsVmnq06O8Qlyy6M6%2B0ugzyrexkFzTIiOmmepxzc%2BI1mmFt0cHSgkM3QktRhkDkNBw2TDYpRomO%2F8uA%2FpmI2iQA3Pab8Zr2t6PpyiNeFLHiZulb6vCXvsXHKJKqWcKzJnjZee0MsJtp9a71Mll%2BeZLrth4jLfTqZbGpupUxdkvs%2F5Ckuc9%2Fq6iLZguiFJyY9zrL%2BpVs%2BJnHwl5vf2wIh1JfLI5PqJAo0COuE%2BpPjT3je2FiXMx35h64klTvHHmpUDMViCYNZoS6GdlVjfDXJgEkHrbS3DFi0lUrUVfjqdVYnDzIkx30ZcVUvMrnw8ojV8JryENE6fFfaSwblCFNpZfuebwdPByXimF3JLHbib9bwCTekX4gFu8muffOKzWWYLYVZQ0w6leX2wPlf5JG9DtHArup3s%2BdWEeprdn%2BhPsU9A6FSRvqsBG2epwAFRZE5owK2v9Ki%2FPBYpHNVUPrcg9R1mAATJ2GfxpKhfJYFdkZhsiqY9xexsH5siHI0ursVEfLY4RtVtXMM2EaEmtFIkrv5GnhYyTvhiLpfMD%2F7osIM5iC86cwO3AjDl%2FdDLBjqkAS4u2g%2FC1%2FOCfp%2F4RUdRmsbOjEsn7Lj309mTAvE8bMpbuyXHnQDJrG9H95ag2NgO61CdQyrt8IjYb%2Bo6jF0AzcVcP2pvalcFpInxhyVIxZg4aldQxlvxTvyEi%2B5p%2F6Q6gNG1kyUGKJvxNRF9KEdc7Uscp21%2Fqhf4%2BM%2F7jMT8bCfL9RTGb%2FV6hb5AgRfsb5%2B5lsZPoFQDd60C8cpe%2FgkkyfzjZHKD&X-Amz-Signature=ce803e043917eb7f057a63bf7a5bdd248596fdd12057e87543e6cee461bbc89c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYYUQDZ%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCEbSf%2B9%2Bd6otO3JjN9TaIrmwgaifgdoIrpFZbZ%2Bg3hZAIhALRfDxDBWRF3WQPVKNZVd6o16Yos6qsfuea6GMLYHYpvKv8DCAUQABoMNjM3NDIzMTgzODA1IgzNAcJEmlIh7iG%2FMo8q3APJ6AXtiDJ%2BxJ0CVj5lrNVjvYJ1jGiEStndd5J3aE4TaCVfFJMloGbywQ1vGPsVYHQh1BuvsVmnq06O8Qlyy6M6%2B0ugzyrexkFzTIiOmmepxzc%2BI1mmFt0cHSgkM3QktRhkDkNBw2TDYpRomO%2F8uA%2FpmI2iQA3Pab8Zr2t6PpyiNeFLHiZulb6vCXvsXHKJKqWcKzJnjZee0MsJtp9a71Mll%2BeZLrth4jLfTqZbGpupUxdkvs%2F5Ckuc9%2Fq6iLZguiFJyY9zrL%2BpVs%2BJnHwl5vf2wIh1JfLI5PqJAo0COuE%2BpPjT3je2FiXMx35h64klTvHHmpUDMViCYNZoS6GdlVjfDXJgEkHrbS3DFi0lUrUVfjqdVYnDzIkx30ZcVUvMrnw8ojV8JryENE6fFfaSwblCFNpZfuebwdPByXimF3JLHbib9bwCTekX4gFu8muffOKzWWYLYVZQ0w6leX2wPlf5JG9DtHArup3s%2BdWEeprdn%2BhPsU9A6FSRvqsBG2epwAFRZE5owK2v9Ki%2FPBYpHNVUPrcg9R1mAATJ2GfxpKhfJYFdkZhsiqY9xexsH5siHI0ursVEfLY4RtVtXMM2EaEmtFIkrv5GnhYyTvhiLpfMD%2F7osIM5iC86cwO3AjDl%2FdDLBjqkAS4u2g%2FC1%2FOCfp%2F4RUdRmsbOjEsn7Lj309mTAvE8bMpbuyXHnQDJrG9H95ag2NgO61CdQyrt8IjYb%2Bo6jF0AzcVcP2pvalcFpInxhyVIxZg4aldQxlvxTvyEi%2B5p%2F6Q6gNG1kyUGKJvxNRF9KEdc7Uscp21%2Fqhf4%2BM%2F7jMT8bCfL9RTGb%2FV6hb5AgRfsb5%2B5lsZPoFQDd60C8cpe%2FgkkyfzjZHKD&X-Amz-Signature=1c265f870364a47452c74ec5113757223c384bbcdee0e90191e35b71ab0d5dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWRMOUCJ%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD1AlhY8DlFwwG8I5q31RIwQUEQdP5k6UjCltLRJzy20gIhAPRzDJJVzesFTeCsSNkqF%2F7sHbIdeeLVKx58DZgOZ0BdKv8DCAUQABoMNjM3NDIzMTgzODA1IgzMT%2Bl13FOl1FAfx%2Fkq3AM9yLmDKnbSVQKlJhQ67j0nzrBuGG5r%2ByzZaSGKnjYNMkl1aLzJqYq98143felv8MkdxagUZsjw5U6%2Fltmot9nA7aTK72Vtj6A%2FHNeaMDPu4kQP1k9kF4EeZgL0LhIe652ErLmUyVhwrBWqpmqY%2Fk1tksCT3R5oTQK41gU47HsSf5XGQiEJyHAMUZhO2OgklJo%2FjnFYL1PoqTcVwKNFePBv9C4oUP%2BzDD4tdISWS9xTYY6VvMuy24RCxx5ZlcnTiBDcNh%2FKIiKpwR4Rj6j0i8Di%2FksfDLpbbB%2BFOUR5ppO%2Fa602msdrIfNM0iEiInHnA1O9OGEKAjRaN%2BO9ApD37VzAkF4UBPRgNXZgw07S2wBCPEqF5wHVaG79%2BYyV0hvMCaa89Mznftdwr9Kj%2FcTabUDGpYau8CbnZdeGZ3xcSNXCkuOdIrWY%2BIDlgglYt0r6zKAa1dLrlKiEAsZCAJ5WtYmKkLGmkDSOVIX7ib2ZOAq%2FSykcnxyylRYyw8fD1U5lrRT68ACd%2Buv2vfyDH8u8rVogN5YVAHkA133CK2lvNJ%2FTW8sPIpjg2bp7UqtQ5O4DTDEQt0SHF7ZsLCgDFZtYeNz9LYgyT6lHheGINxLh786y4n2BXh5cNMsxZk4ybzDE%2B9DLBjqkAepvOp1y48n0gOlrpsPDS3QX65xfhzAlguTerUtBB%2Fq9qCfdda84Ac6d1HFFaQsNbnhLVqYYvLLOnEm9CINMI0p8FPItI650Dzt%2F8sOrAo00ePe4sB3ki%2FApC9YuBxjb0FiMD1IXsGcR1cD7upRdfgf%2BaF2LVM4hBXtbSCA1KdA%2F%2FaH0dkyNlEnorhX9cVkm%2BvkFjESL3Bn%2BmKfpw%2BwEJRm8AxaK&X-Amz-Signature=779cd430373a3a5e6bdefdb8aaa28abf81701ebf7bdab9b5f962a33de2e957a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWRMOUCJ%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD1AlhY8DlFwwG8I5q31RIwQUEQdP5k6UjCltLRJzy20gIhAPRzDJJVzesFTeCsSNkqF%2F7sHbIdeeLVKx58DZgOZ0BdKv8DCAUQABoMNjM3NDIzMTgzODA1IgzMT%2Bl13FOl1FAfx%2Fkq3AM9yLmDKnbSVQKlJhQ67j0nzrBuGG5r%2ByzZaSGKnjYNMkl1aLzJqYq98143felv8MkdxagUZsjw5U6%2Fltmot9nA7aTK72Vtj6A%2FHNeaMDPu4kQP1k9kF4EeZgL0LhIe652ErLmUyVhwrBWqpmqY%2Fk1tksCT3R5oTQK41gU47HsSf5XGQiEJyHAMUZhO2OgklJo%2FjnFYL1PoqTcVwKNFePBv9C4oUP%2BzDD4tdISWS9xTYY6VvMuy24RCxx5ZlcnTiBDcNh%2FKIiKpwR4Rj6j0i8Di%2FksfDLpbbB%2BFOUR5ppO%2Fa602msdrIfNM0iEiInHnA1O9OGEKAjRaN%2BO9ApD37VzAkF4UBPRgNXZgw07S2wBCPEqF5wHVaG79%2BYyV0hvMCaa89Mznftdwr9Kj%2FcTabUDGpYau8CbnZdeGZ3xcSNXCkuOdIrWY%2BIDlgglYt0r6zKAa1dLrlKiEAsZCAJ5WtYmKkLGmkDSOVIX7ib2ZOAq%2FSykcnxyylRYyw8fD1U5lrRT68ACd%2Buv2vfyDH8u8rVogN5YVAHkA133CK2lvNJ%2FTW8sPIpjg2bp7UqtQ5O4DTDEQt0SHF7ZsLCgDFZtYeNz9LYgyT6lHheGINxLh786y4n2BXh5cNMsxZk4ybzDE%2B9DLBjqkAepvOp1y48n0gOlrpsPDS3QX65xfhzAlguTerUtBB%2Fq9qCfdda84Ac6d1HFFaQsNbnhLVqYYvLLOnEm9CINMI0p8FPItI650Dzt%2F8sOrAo00ePe4sB3ki%2FApC9YuBxjb0FiMD1IXsGcR1cD7upRdfgf%2BaF2LVM4hBXtbSCA1KdA%2F%2FaH0dkyNlEnorhX9cVkm%2BvkFjESL3Bn%2BmKfpw%2BwEJRm8AxaK&X-Amz-Signature=1b92514b78752a9fdf8da7686c3be015e9f90e9efff4aa1bbf481dfbd87a1a96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMUVPUA7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCDKGUkjkAzfPEScbbbZAep4YPNvcvVnIfMf6ayI4tJagIgTcohJpf30f0n9weUo%2BB0enranOmCwIVf2x6iM7q9mL8q%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDLdMNDUwXVtEVVqFRCrcAxaYd7SkEQnPEmJE%2FregRcptCU%2FiT1j7mWCHdglaRpDFzGbC08FD9xNJg%2BzK%2FCBAoGmU9BUE52SgUba%2Fb0gUwovN0E8yQm9BbBwUzAlacj20CnpNqUTfI5Li9Zavs16%2FmSOKkfLTEb03Z8B%2F%2BkNnbuAI2KoOo62sr6h8G1YXyT6UeYDHTdGVdElqMGPP4AYGvzW1ycEhhZcMSp3UQw2Ec8SWze0W5T%2FI%2BdCTdc4cN8xT7fANudWRooGk1ft8SQLPeP2biTvZ7viGVbsANoP%2FrlmEkvc%2FrEY5GSQnnJjKwZdS1RNNST7hhULl%2B%2Baj05NhXsbin686at4yEzpCcq9fv6uUqJA6JD2e2ISkutJp4Y2jUQeLJPHbFK%2BdurnLg4tlYbY5j3XHoWu%2BydZ4VrJj3NUyfx2Qs4bkTK617BayQ3AE3g8CDzSLWBZF3GQCihhcRoegGKatxFQxmskHlOEUIA2a327hhhoHtbNk1ohQdzyvl7Kb5IOOZPgRyS%2BtZhheGE17dOha51a7TsZs6Nk9J7o5L2NVkQ7J2IYaEbPYSDKswSRXJszZX2YNatJG9XmIgbKz8USxPUO9T82OARHsepYlFxwjX1XwGZXqqgz5xMyDseIfSIiuk9FV5YbhMOj80MsGOqUB41E2zrWTpi75Zx5%2FEy0evXpJ59fQ1ImQBUXvIULTWeuEc9KSMSMVWnL5760NcMGmTDUX1Zn8kw3FXXBpN%2BOvCneIbKzu%2F%2F23NTTT8RiZt5yYwXaqIiCb4AG4nZ97AiuFTUPBRJVee47trpuY2%2BzXdaVolBi83aocwnT0JOQZwoL7LxQC3jfT8plcx7sAhuucyvo5c8K%2BCswsdXGNzPAlF6TPfgLZ&X-Amz-Signature=2d49dbf19c8341fed25f0bb603644598d1cdddecad01f3ea7124f9c925548786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMUVPUA7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCDKGUkjkAzfPEScbbbZAep4YPNvcvVnIfMf6ayI4tJagIgTcohJpf30f0n9weUo%2BB0enranOmCwIVf2x6iM7q9mL8q%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDLdMNDUwXVtEVVqFRCrcAxaYd7SkEQnPEmJE%2FregRcptCU%2FiT1j7mWCHdglaRpDFzGbC08FD9xNJg%2BzK%2FCBAoGmU9BUE52SgUba%2Fb0gUwovN0E8yQm9BbBwUzAlacj20CnpNqUTfI5Li9Zavs16%2FmSOKkfLTEb03Z8B%2F%2BkNnbuAI2KoOo62sr6h8G1YXyT6UeYDHTdGVdElqMGPP4AYGvzW1ycEhhZcMSp3UQw2Ec8SWze0W5T%2FI%2BdCTdc4cN8xT7fANudWRooGk1ft8SQLPeP2biTvZ7viGVbsANoP%2FrlmEkvc%2FrEY5GSQnnJjKwZdS1RNNST7hhULl%2B%2Baj05NhXsbin686at4yEzpCcq9fv6uUqJA6JD2e2ISkutJp4Y2jUQeLJPHbFK%2BdurnLg4tlYbY5j3XHoWu%2BydZ4VrJj3NUyfx2Qs4bkTK617BayQ3AE3g8CDzSLWBZF3GQCihhcRoegGKatxFQxmskHlOEUIA2a327hhhoHtbNk1ohQdzyvl7Kb5IOOZPgRyS%2BtZhheGE17dOha51a7TsZs6Nk9J7o5L2NVkQ7J2IYaEbPYSDKswSRXJszZX2YNatJG9XmIgbKz8USxPUO9T82OARHsepYlFxwjX1XwGZXqqgz5xMyDseIfSIiuk9FV5YbhMOj80MsGOqUB41E2zrWTpi75Zx5%2FEy0evXpJ59fQ1ImQBUXvIULTWeuEc9KSMSMVWnL5760NcMGmTDUX1Zn8kw3FXXBpN%2BOvCneIbKzu%2F%2F23NTTT8RiZt5yYwXaqIiCb4AG4nZ97AiuFTUPBRJVee47trpuY2%2BzXdaVolBi83aocwnT0JOQZwoL7LxQC3jfT8plcx7sAhuucyvo5c8K%2BCswsdXGNzPAlF6TPfgLZ&X-Amz-Signature=e30ebd8ee6767f260eaaf0492285f9e72d42df0fecdf3be10919263657b31e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMUVPUA7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCDKGUkjkAzfPEScbbbZAep4YPNvcvVnIfMf6ayI4tJagIgTcohJpf30f0n9weUo%2BB0enranOmCwIVf2x6iM7q9mL8q%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDLdMNDUwXVtEVVqFRCrcAxaYd7SkEQnPEmJE%2FregRcptCU%2FiT1j7mWCHdglaRpDFzGbC08FD9xNJg%2BzK%2FCBAoGmU9BUE52SgUba%2Fb0gUwovN0E8yQm9BbBwUzAlacj20CnpNqUTfI5Li9Zavs16%2FmSOKkfLTEb03Z8B%2F%2BkNnbuAI2KoOo62sr6h8G1YXyT6UeYDHTdGVdElqMGPP4AYGvzW1ycEhhZcMSp3UQw2Ec8SWze0W5T%2FI%2BdCTdc4cN8xT7fANudWRooGk1ft8SQLPeP2biTvZ7viGVbsANoP%2FrlmEkvc%2FrEY5GSQnnJjKwZdS1RNNST7hhULl%2B%2Baj05NhXsbin686at4yEzpCcq9fv6uUqJA6JD2e2ISkutJp4Y2jUQeLJPHbFK%2BdurnLg4tlYbY5j3XHoWu%2BydZ4VrJj3NUyfx2Qs4bkTK617BayQ3AE3g8CDzSLWBZF3GQCihhcRoegGKatxFQxmskHlOEUIA2a327hhhoHtbNk1ohQdzyvl7Kb5IOOZPgRyS%2BtZhheGE17dOha51a7TsZs6Nk9J7o5L2NVkQ7J2IYaEbPYSDKswSRXJszZX2YNatJG9XmIgbKz8USxPUO9T82OARHsepYlFxwjX1XwGZXqqgz5xMyDseIfSIiuk9FV5YbhMOj80MsGOqUB41E2zrWTpi75Zx5%2FEy0evXpJ59fQ1ImQBUXvIULTWeuEc9KSMSMVWnL5760NcMGmTDUX1Zn8kw3FXXBpN%2BOvCneIbKzu%2F%2F23NTTT8RiZt5yYwXaqIiCb4AG4nZ97AiuFTUPBRJVee47trpuY2%2BzXdaVolBi83aocwnT0JOQZwoL7LxQC3jfT8plcx7sAhuucyvo5c8K%2BCswsdXGNzPAlF6TPfgLZ&X-Amz-Signature=49809b41a53bf76bd93c8b44dee3b98f684ff4789d4ac8305a8f91cabb6b3483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMUVPUA7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCDKGUkjkAzfPEScbbbZAep4YPNvcvVnIfMf6ayI4tJagIgTcohJpf30f0n9weUo%2BB0enranOmCwIVf2x6iM7q9mL8q%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDLdMNDUwXVtEVVqFRCrcAxaYd7SkEQnPEmJE%2FregRcptCU%2FiT1j7mWCHdglaRpDFzGbC08FD9xNJg%2BzK%2FCBAoGmU9BUE52SgUba%2Fb0gUwovN0E8yQm9BbBwUzAlacj20CnpNqUTfI5Li9Zavs16%2FmSOKkfLTEb03Z8B%2F%2BkNnbuAI2KoOo62sr6h8G1YXyT6UeYDHTdGVdElqMGPP4AYGvzW1ycEhhZcMSp3UQw2Ec8SWze0W5T%2FI%2BdCTdc4cN8xT7fANudWRooGk1ft8SQLPeP2biTvZ7viGVbsANoP%2FrlmEkvc%2FrEY5GSQnnJjKwZdS1RNNST7hhULl%2B%2Baj05NhXsbin686at4yEzpCcq9fv6uUqJA6JD2e2ISkutJp4Y2jUQeLJPHbFK%2BdurnLg4tlYbY5j3XHoWu%2BydZ4VrJj3NUyfx2Qs4bkTK617BayQ3AE3g8CDzSLWBZF3GQCihhcRoegGKatxFQxmskHlOEUIA2a327hhhoHtbNk1ohQdzyvl7Kb5IOOZPgRyS%2BtZhheGE17dOha51a7TsZs6Nk9J7o5L2NVkQ7J2IYaEbPYSDKswSRXJszZX2YNatJG9XmIgbKz8USxPUO9T82OARHsepYlFxwjX1XwGZXqqgz5xMyDseIfSIiuk9FV5YbhMOj80MsGOqUB41E2zrWTpi75Zx5%2FEy0evXpJ59fQ1ImQBUXvIULTWeuEc9KSMSMVWnL5760NcMGmTDUX1Zn8kw3FXXBpN%2BOvCneIbKzu%2F%2F23NTTT8RiZt5yYwXaqIiCb4AG4nZ97AiuFTUPBRJVee47trpuY2%2BzXdaVolBi83aocwnT0JOQZwoL7LxQC3jfT8plcx7sAhuucyvo5c8K%2BCswsdXGNzPAlF6TPfgLZ&X-Amz-Signature=ad3ac401d3dc6d51cf682df01c648df79868a73a29553f8c4dd2d4419bc6b422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMUVPUA7%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCDKGUkjkAzfPEScbbbZAep4YPNvcvVnIfMf6ayI4tJagIgTcohJpf30f0n9weUo%2BB0enranOmCwIVf2x6iM7q9mL8q%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDLdMNDUwXVtEVVqFRCrcAxaYd7SkEQnPEmJE%2FregRcptCU%2FiT1j7mWCHdglaRpDFzGbC08FD9xNJg%2BzK%2FCBAoGmU9BUE52SgUba%2Fb0gUwovN0E8yQm9BbBwUzAlacj20CnpNqUTfI5Li9Zavs16%2FmSOKkfLTEb03Z8B%2F%2BkNnbuAI2KoOo62sr6h8G1YXyT6UeYDHTdGVdElqMGPP4AYGvzW1ycEhhZcMSp3UQw2Ec8SWze0W5T%2FI%2BdCTdc4cN8xT7fANudWRooGk1ft8SQLPeP2biTvZ7viGVbsANoP%2FrlmEkvc%2FrEY5GSQnnJjKwZdS1RNNST7hhULl%2B%2Baj05NhXsbin686at4yEzpCcq9fv6uUqJA6JD2e2ISkutJp4Y2jUQeLJPHbFK%2BdurnLg4tlYbY5j3XHoWu%2BydZ4VrJj3NUyfx2Qs4bkTK617BayQ3AE3g8CDzSLWBZF3GQCihhcRoegGKatxFQxmskHlOEUIA2a327hhhoHtbNk1ohQdzyvl7Kb5IOOZPgRyS%2BtZhheGE17dOha51a7TsZs6Nk9J7o5L2NVkQ7J2IYaEbPYSDKswSRXJszZX2YNatJG9XmIgbKz8USxPUO9T82OARHsepYlFxwjX1XwGZXqqgz5xMyDseIfSIiuk9FV5YbhMOj80MsGOqUB41E2zrWTpi75Zx5%2FEy0evXpJ59fQ1ImQBUXvIULTWeuEc9KSMSMVWnL5760NcMGmTDUX1Zn8kw3FXXBpN%2BOvCneIbKzu%2F%2F23NTTT8RiZt5yYwXaqIiCb4AG4nZ97AiuFTUPBRJVee47trpuY2%2BzXdaVolBi83aocwnT0JOQZwoL7LxQC3jfT8plcx7sAhuucyvo5c8K%2BCswsdXGNzPAlF6TPfgLZ&X-Amz-Signature=c1aa26aca11850f0cbda97281be9aefc5695786d16747cfc4977ea6aaac01118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLPCTGLT%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T040724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICgSQsE0WIfMmdUrMawLUm97AATdDjlUbjhRyq4MDuleAiEAlx0VA1bkjq2T1pYUl1qxFr%2BhShZHWvd1YzVPtW8emvIq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDLPJX%2Bh%2F8ViUIGfx6CrcAz6sKAlNChxdwfiPo30KJZ69Fw2d8B%2FkHPVx63wdYiKVvqkl1GK%2FFO8iVGOSlUSzN7z4drK6CF8ZB7i3YKSR%2BhT%2FnMWoHtFP%2FPvbel4GMXBSDNtEWymij%2BZoXlvy1SrSLTmczA7R2126FAY42m4LDFkVibL13jdNsxZXoCKspFRw%2BjnZ32oueAatqzZkGhHKpsl9BnvaKyMWwZCa9wq8vFR%2B03qXRYs52Dw1x48K02R%2B%2BXWbllaPV%2BF%2FSp%2FOP18qT9jOsmzIOLylvbrSWCOo8yjZWSO0pcUyzYyAx67SLGdjppH3fSl3SG5VOuPAZ47yTILwfYMfQ1PoG9EV3jJ1lq9DiNp7lpgvHaTIRJORSnnYQQhyTW1LHdq3IUn4c5YDOeJgNy7ZghYjzCfLVeQbiw40fCFUoVUsKi9Ho0XoaMYZGzSWYHWVVfgaXpz9PvytZoU%2BBDBYYtNd6Q2cGkBBefiirfs8dRhyd%2B57Gp0Honku%2FJ%2BspgmYpitGtuaKh8zV1fbWBvH5sDW31VMQFqqO%2Fru4PuKwl3KimWCAf%2FUKkfkBG6eaaRWGx9TCRV0X45EmkZXXi1P74FbPu3p3PwV9J7o6NUaJU9%2FgEhpcBj8QHINNTrJXYpvRJjqBTmaeMOf80MsGOqUBETAdBGF1A%2FdSH5Pysfo%2Bd9WVeqfNmqD%2B5rXE8tLmF5X8jW%2BWGDcjvbQ%2FjLiD6PGad2w1%2FTRVZAet43dtjaVoGCoorRgPsKT73Az9vVkaOgj1ePgLQc02air4A9SMoe6%2Fjkmc3opiOsRsq8HdOu4Wf8OAQKTDwuABsOEWvzxlUWGFpz45O573W38dO62hHDSshLaZmhye%2F4WoDPzoz1eKijeb0hx1&X-Amz-Signature=fde6d326f649f15282b6cffa93b097ad86ea9ca786f4e8de57bbbe885e18251a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

