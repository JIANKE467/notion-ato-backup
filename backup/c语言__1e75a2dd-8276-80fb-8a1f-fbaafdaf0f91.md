
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCNG6F2N%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGkt30oAvKY5J1W0g6yrQ2p854wtdwQRJGlOYnDt0IUkAiEAlt0Myusme7VYQylHgVmrsmlRw0TKZfBltXmaOKOnS1Iq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDG9nVSzS2tJpHwJ1TircA61rabgHLKxWjqgh4IT1YwoYiWceyMIo53O3cWP82mPgP5sCUoThWY27HRCRa7r%2BiRIvEcqC%2Bcmy9gIPd1ZVV7S1U%2BQmq5EwmVbk%2BdmeGqVaRfaKgFOSoX3I7gU5MexW5%2FbhWl86ZtDnlgT5ecq4kbQbW%2BauetBTLi%2F94Fce4IPmBTfH3qv3kr7g45yzlfnk%2BbynOpv2tWmeySu9MegWQzVPlk2RWxEAdm%2BqCA03LRfVs74QMztHGCvyynFa2N5xPZo%2Fm3k2ikKKOzbDAmLuhanqhBlM7uAqLdgJu6tb4H7MOv%2B8q2EnSWAgWUbXbCPjQsfEz%2BEFRSa%2FAv08VqvAcf%2FpSiAxL6Y6A%2BCkd0SUQbw9LeU%2FYDP5Zf3%2BvGCYF4h0xQm4RNo8OJpWemmhgqobUZMkSzeQ9FYTZmlqUnY8BKv7nRcihv8XrqJlPUqt5%2B3WVjsol7h4P2Vla47A98ksXYeu8JvGAnKsDWNZlUwyHktcMybWxeXO3F%2B4FPnHG559xK9%2Bgt2%2FVHaL56xU%2FPFeFgjk8SmgYcWHDrPyP%2BIiI%2BpNwDJOg39oP8zgy527LW%2FxDf6N1WVgiXCpx3qg1MOD7lpRHsCx2oa6awSyeGOF2%2FR8UDFniWeIiy4p1%2B9GMKKu58oGOqUBFTSuieIr6rJ%2FYgJBkSU%2B15Elaw4w6zn9wFJdXbRfQx0vtTtV8zCFJ7ZXErYQXIawXLdFyj8TMnrSQtMCJPlyWCVsq4sRfdaHu6t%2F0n6S6meIoofuRIi%2BziBAWF9UcC1JqcgAfwl4rO7oNviXGb6Lmb2ym5CRZqS1kv2sgZszrdDj9pM%2FMavvnR76ktVb1iBOU06dT119m1QXR5gfbw4nF0nUAm3Y&X-Amz-Signature=1f01ca10a5470c72d795747639984f3c646331241e53c4707774ee19601589f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MYZOCGP%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDWgdFpA7srVnzYB0QHPW1n42mB8Bxr4j0hyfac7qqQhAIhALewQcdl9OyoRMVzmrHRhri%2B5O0EOQ0LW3J%2B18AcPvL%2FKv8DCCQQABoMNjM3NDIzMTgzODA1Igy9y3pHnAL3ixYOjskq3AP5eXDy6zDnHVsPLRB3VDh2TCmjvlRH9ZXhlvk48%2BbXOz5pl%2BCscxGv%2FJ%2FZq9Ou2MWi6IJlrLGLSm0b0kxIT9iQ07wI73xig8tOYmlg5mvvlqWdEvRPDqEwDWm0Ym72iV6f3m1FaLYtY3YnLnoXe%2BoEYqKTjfXtLwl8Qn3Vbg9yUkNN2xS6PRG52uIoCudWtUcTy61zD7%2F1Pnrksjaw09Gkxa3cTj%2FqKyaumZWbwqAYS0JDi3xyTO5V3lO2Sv8RABNBB%2FeuCY5CFzzwUkK%2FstCZyDdUrqZ%2BPBvkKYOxgeVOrBKfok0bLGfaRY5obBUX2p8K2ntITyr0l%2F1LW%2FVz1Uy9nyJykzpGMh6AN5YMb3OWcr3Ke44raNXK51nZE21VtI8Le9kGEwA6eZyW3LBfatHZZalfU9yt86e6C7hnhXY3zFrPAygP3NrDRuiDpIpnjWL5UfluIp48%2BVtLH%2BarXNI7%2BSvnvbpGupCNVMQwEL3cEAlo8DqJ0LSIapcw8zZU%2Bts98D5KTk4q7IQbKlM3kDt5InEDGvKPI5nfiUYcLvbM81hhFKt18ZHLw1ruxlhddhPcDVdtKsI6QDyA3C24G8vV8NymtANti5Zy99a9aWKQqnNAhjVdD8VENBROOTDTqufKBjqkATckVX3WK59lePEIhjzNB6YtRmE1PqvKblJiHcIXGDMWTLTd84kxsOZTzV2%2FYibmy%2BIQjCdAgHXKhP%2BVVJsX2n8dGgqgzC4H%2FQOvJoYmc1Nh0DfN4GgGld1%2FiP6liAwduXZ%2BwnL6AmNALK8aE10hJOglCuPFQ9ipciW10QIXvfhQU%2FnCkAy77Rc0W7mt63gU%2Fdcj52iiBB6fIN7HfTOljjaLjY3k&X-Amz-Signature=7aa380863268726d6bdbf6c03f16bb6ee9813240d9e325f9f9823d00010d78c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MYZOCGP%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDWgdFpA7srVnzYB0QHPW1n42mB8Bxr4j0hyfac7qqQhAIhALewQcdl9OyoRMVzmrHRhri%2B5O0EOQ0LW3J%2B18AcPvL%2FKv8DCCQQABoMNjM3NDIzMTgzODA1Igy9y3pHnAL3ixYOjskq3AP5eXDy6zDnHVsPLRB3VDh2TCmjvlRH9ZXhlvk48%2BbXOz5pl%2BCscxGv%2FJ%2FZq9Ou2MWi6IJlrLGLSm0b0kxIT9iQ07wI73xig8tOYmlg5mvvlqWdEvRPDqEwDWm0Ym72iV6f3m1FaLYtY3YnLnoXe%2BoEYqKTjfXtLwl8Qn3Vbg9yUkNN2xS6PRG52uIoCudWtUcTy61zD7%2F1Pnrksjaw09Gkxa3cTj%2FqKyaumZWbwqAYS0JDi3xyTO5V3lO2Sv8RABNBB%2FeuCY5CFzzwUkK%2FstCZyDdUrqZ%2BPBvkKYOxgeVOrBKfok0bLGfaRY5obBUX2p8K2ntITyr0l%2F1LW%2FVz1Uy9nyJykzpGMh6AN5YMb3OWcr3Ke44raNXK51nZE21VtI8Le9kGEwA6eZyW3LBfatHZZalfU9yt86e6C7hnhXY3zFrPAygP3NrDRuiDpIpnjWL5UfluIp48%2BVtLH%2BarXNI7%2BSvnvbpGupCNVMQwEL3cEAlo8DqJ0LSIapcw8zZU%2Bts98D5KTk4q7IQbKlM3kDt5InEDGvKPI5nfiUYcLvbM81hhFKt18ZHLw1ruxlhddhPcDVdtKsI6QDyA3C24G8vV8NymtANti5Zy99a9aWKQqnNAhjVdD8VENBROOTDTqufKBjqkATckVX3WK59lePEIhjzNB6YtRmE1PqvKblJiHcIXGDMWTLTd84kxsOZTzV2%2FYibmy%2BIQjCdAgHXKhP%2BVVJsX2n8dGgqgzC4H%2FQOvJoYmc1Nh0DfN4GgGld1%2FiP6liAwduXZ%2BwnL6AmNALK8aE10hJOglCuPFQ9ipciW10QIXvfhQU%2FnCkAy77Rc0W7mt63gU%2Fdcj52iiBB6fIN7HfTOljjaLjY3k&X-Amz-Signature=b129baa550eee83671db4d72b19da9204d01c6ee4b5276b62d0810ff8dd437b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CGZQ7L6%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIAnbFsA%2F3PtEfhYEvGbPsjjlKYdqxigDvCDhNAsIcXmgAiAfM%2F2m90E1t7fKuTBwFLj%2FtBmtXJS7mSg22sgSAgDqiir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMBNifI0aH8%2FW2szt4KtwD32dXFikTCaxZRACFQHTWEps21SY0k6mk9HwAE2HWiEAgKWwQ1jVA334HuzSjPT6xbCintZQ0RMN365YL0y91BPbhdwLbODnueyrYYnUxGR2OZAenjjXSTisVWOtdPRKEeOfb5Y51nhlIUm0GLwqiIr9rvAzKqWKnBhYaBkKrV21Yclt5bqS%2B5HQt3HXmm870kaXSnoMGjr67934Nywn0mpLgTSZoX0LogJJn6K1kU41htpWONVCBqFed0VteaXtjsLydzyVaMDPNhbPpUf8rGHZy3UelPFzZNKz2f3x%2FngpPVdxllSx9R3A4WT%2BE%2FN9nmv1CGxSI%2FfS%2FtIeWcvcOJ8m%2FvD%2FcNIgFsev7lsN05DmmFHdHOFZ3Ge%2B0Myc%2BfwdJAmpv3Fc8OnuTVvvQvPFe%2FChSI%2FCtcDb1GFRhPOfEKVwtrWjUNHw65z0J%2F0BrwiGKYEoo8bHy%2FTqxD6AmL7tDZdoDmA2qZai9TjCn1qHtpvnvWLykwzTK6Md%2FZDy7VzGOk%2FHQjbCt3EAY7%2BDDHeK%2FbuLJ2Dr6ZQk4WxxllsypCyI63exm90oW8ZiqCLGfqq8r8R%2FKvi2uGmq3EDhKMgPw%2BdJ%2B75hGAwn7aUcSCIi%2F3WYCICF0ZJSsFocADm4wtafnygY6pgGiIfSyY2eEu%2FTEDcs3wHotKK2L4IV5VooELc0tPADElMud7Eb0fMLoAHr8DiUtrq%2BO032OBYnz%2B2zsWTqldwN%2Fl%2FNknRpg4eLVfQXfsAlDhCzIZr%2Bhw3lkksZ5xnjY22ib0Q0%2FPveuYgUQZaBGzloBJjkee9sOs8YRqe2fqY61prPgBfHwUzLIm6xqNkUl2p58wGDIDSpikSBbabF1dUG2LLdE7YEn&X-Amz-Signature=1bde6575a963f06c5e09dda72850ddfbf2830327fd0b7f61b486a348687bab74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CGZQ7L6%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIAnbFsA%2F3PtEfhYEvGbPsjjlKYdqxigDvCDhNAsIcXmgAiAfM%2F2m90E1t7fKuTBwFLj%2FtBmtXJS7mSg22sgSAgDqiir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMBNifI0aH8%2FW2szt4KtwD32dXFikTCaxZRACFQHTWEps21SY0k6mk9HwAE2HWiEAgKWwQ1jVA334HuzSjPT6xbCintZQ0RMN365YL0y91BPbhdwLbODnueyrYYnUxGR2OZAenjjXSTisVWOtdPRKEeOfb5Y51nhlIUm0GLwqiIr9rvAzKqWKnBhYaBkKrV21Yclt5bqS%2B5HQt3HXmm870kaXSnoMGjr67934Nywn0mpLgTSZoX0LogJJn6K1kU41htpWONVCBqFed0VteaXtjsLydzyVaMDPNhbPpUf8rGHZy3UelPFzZNKz2f3x%2FngpPVdxllSx9R3A4WT%2BE%2FN9nmv1CGxSI%2FfS%2FtIeWcvcOJ8m%2FvD%2FcNIgFsev7lsN05DmmFHdHOFZ3Ge%2B0Myc%2BfwdJAmpv3Fc8OnuTVvvQvPFe%2FChSI%2FCtcDb1GFRhPOfEKVwtrWjUNHw65z0J%2F0BrwiGKYEoo8bHy%2FTqxD6AmL7tDZdoDmA2qZai9TjCn1qHtpvnvWLykwzTK6Md%2FZDy7VzGOk%2FHQjbCt3EAY7%2BDDHeK%2FbuLJ2Dr6ZQk4WxxllsypCyI63exm90oW8ZiqCLGfqq8r8R%2FKvi2uGmq3EDhKMgPw%2BdJ%2B75hGAwn7aUcSCIi%2F3WYCICF0ZJSsFocADm4wtafnygY6pgGiIfSyY2eEu%2FTEDcs3wHotKK2L4IV5VooELc0tPADElMud7Eb0fMLoAHr8DiUtrq%2BO032OBYnz%2B2zsWTqldwN%2Fl%2FNknRpg4eLVfQXfsAlDhCzIZr%2Bhw3lkksZ5xnjY22ib0Q0%2FPveuYgUQZaBGzloBJjkee9sOs8YRqe2fqY61prPgBfHwUzLIm6xqNkUl2p58wGDIDSpikSBbabF1dUG2LLdE7YEn&X-Amz-Signature=36f2ffee7e2fdb63c87e483aef918915bb204b9d198e2d9ecf17a8263887f8c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CGZQ7L6%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIAnbFsA%2F3PtEfhYEvGbPsjjlKYdqxigDvCDhNAsIcXmgAiAfM%2F2m90E1t7fKuTBwFLj%2FtBmtXJS7mSg22sgSAgDqiir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMBNifI0aH8%2FW2szt4KtwD32dXFikTCaxZRACFQHTWEps21SY0k6mk9HwAE2HWiEAgKWwQ1jVA334HuzSjPT6xbCintZQ0RMN365YL0y91BPbhdwLbODnueyrYYnUxGR2OZAenjjXSTisVWOtdPRKEeOfb5Y51nhlIUm0GLwqiIr9rvAzKqWKnBhYaBkKrV21Yclt5bqS%2B5HQt3HXmm870kaXSnoMGjr67934Nywn0mpLgTSZoX0LogJJn6K1kU41htpWONVCBqFed0VteaXtjsLydzyVaMDPNhbPpUf8rGHZy3UelPFzZNKz2f3x%2FngpPVdxllSx9R3A4WT%2BE%2FN9nmv1CGxSI%2FfS%2FtIeWcvcOJ8m%2FvD%2FcNIgFsev7lsN05DmmFHdHOFZ3Ge%2B0Myc%2BfwdJAmpv3Fc8OnuTVvvQvPFe%2FChSI%2FCtcDb1GFRhPOfEKVwtrWjUNHw65z0J%2F0BrwiGKYEoo8bHy%2FTqxD6AmL7tDZdoDmA2qZai9TjCn1qHtpvnvWLykwzTK6Md%2FZDy7VzGOk%2FHQjbCt3EAY7%2BDDHeK%2FbuLJ2Dr6ZQk4WxxllsypCyI63exm90oW8ZiqCLGfqq8r8R%2FKvi2uGmq3EDhKMgPw%2BdJ%2B75hGAwn7aUcSCIi%2F3WYCICF0ZJSsFocADm4wtafnygY6pgGiIfSyY2eEu%2FTEDcs3wHotKK2L4IV5VooELc0tPADElMud7Eb0fMLoAHr8DiUtrq%2BO032OBYnz%2B2zsWTqldwN%2Fl%2FNknRpg4eLVfQXfsAlDhCzIZr%2Bhw3lkksZ5xnjY22ib0Q0%2FPveuYgUQZaBGzloBJjkee9sOs8YRqe2fqY61prPgBfHwUzLIm6xqNkUl2p58wGDIDSpikSBbabF1dUG2LLdE7YEn&X-Amz-Signature=4101c2a19b81781f9c6c6a911c65cd919405f634f9f26620d8a81a09992ecc05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CGZQ7L6%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIAnbFsA%2F3PtEfhYEvGbPsjjlKYdqxigDvCDhNAsIcXmgAiAfM%2F2m90E1t7fKuTBwFLj%2FtBmtXJS7mSg22sgSAgDqiir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMBNifI0aH8%2FW2szt4KtwD32dXFikTCaxZRACFQHTWEps21SY0k6mk9HwAE2HWiEAgKWwQ1jVA334HuzSjPT6xbCintZQ0RMN365YL0y91BPbhdwLbODnueyrYYnUxGR2OZAenjjXSTisVWOtdPRKEeOfb5Y51nhlIUm0GLwqiIr9rvAzKqWKnBhYaBkKrV21Yclt5bqS%2B5HQt3HXmm870kaXSnoMGjr67934Nywn0mpLgTSZoX0LogJJn6K1kU41htpWONVCBqFed0VteaXtjsLydzyVaMDPNhbPpUf8rGHZy3UelPFzZNKz2f3x%2FngpPVdxllSx9R3A4WT%2BE%2FN9nmv1CGxSI%2FfS%2FtIeWcvcOJ8m%2FvD%2FcNIgFsev7lsN05DmmFHdHOFZ3Ge%2B0Myc%2BfwdJAmpv3Fc8OnuTVvvQvPFe%2FChSI%2FCtcDb1GFRhPOfEKVwtrWjUNHw65z0J%2F0BrwiGKYEoo8bHy%2FTqxD6AmL7tDZdoDmA2qZai9TjCn1qHtpvnvWLykwzTK6Md%2FZDy7VzGOk%2FHQjbCt3EAY7%2BDDHeK%2FbuLJ2Dr6ZQk4WxxllsypCyI63exm90oW8ZiqCLGfqq8r8R%2FKvi2uGmq3EDhKMgPw%2BdJ%2B75hGAwn7aUcSCIi%2F3WYCICF0ZJSsFocADm4wtafnygY6pgGiIfSyY2eEu%2FTEDcs3wHotKK2L4IV5VooELc0tPADElMud7Eb0fMLoAHr8DiUtrq%2BO032OBYnz%2B2zsWTqldwN%2Fl%2FNknRpg4eLVfQXfsAlDhCzIZr%2Bhw3lkksZ5xnjY22ib0Q0%2FPveuYgUQZaBGzloBJjkee9sOs8YRqe2fqY61prPgBfHwUzLIm6xqNkUl2p58wGDIDSpikSBbabF1dUG2LLdE7YEn&X-Amz-Signature=6377ca5f323e5c14a83ea1a17d2a4219113eac3deb7d169dbba26f508a703122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CGZQ7L6%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIAnbFsA%2F3PtEfhYEvGbPsjjlKYdqxigDvCDhNAsIcXmgAiAfM%2F2m90E1t7fKuTBwFLj%2FtBmtXJS7mSg22sgSAgDqiir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMBNifI0aH8%2FW2szt4KtwD32dXFikTCaxZRACFQHTWEps21SY0k6mk9HwAE2HWiEAgKWwQ1jVA334HuzSjPT6xbCintZQ0RMN365YL0y91BPbhdwLbODnueyrYYnUxGR2OZAenjjXSTisVWOtdPRKEeOfb5Y51nhlIUm0GLwqiIr9rvAzKqWKnBhYaBkKrV21Yclt5bqS%2B5HQt3HXmm870kaXSnoMGjr67934Nywn0mpLgTSZoX0LogJJn6K1kU41htpWONVCBqFed0VteaXtjsLydzyVaMDPNhbPpUf8rGHZy3UelPFzZNKz2f3x%2FngpPVdxllSx9R3A4WT%2BE%2FN9nmv1CGxSI%2FfS%2FtIeWcvcOJ8m%2FvD%2FcNIgFsev7lsN05DmmFHdHOFZ3Ge%2B0Myc%2BfwdJAmpv3Fc8OnuTVvvQvPFe%2FChSI%2FCtcDb1GFRhPOfEKVwtrWjUNHw65z0J%2F0BrwiGKYEoo8bHy%2FTqxD6AmL7tDZdoDmA2qZai9TjCn1qHtpvnvWLykwzTK6Md%2FZDy7VzGOk%2FHQjbCt3EAY7%2BDDHeK%2FbuLJ2Dr6ZQk4WxxllsypCyI63exm90oW8ZiqCLGfqq8r8R%2FKvi2uGmq3EDhKMgPw%2BdJ%2B75hGAwn7aUcSCIi%2F3WYCICF0ZJSsFocADm4wtafnygY6pgGiIfSyY2eEu%2FTEDcs3wHotKK2L4IV5VooELc0tPADElMud7Eb0fMLoAHr8DiUtrq%2BO032OBYnz%2B2zsWTqldwN%2Fl%2FNknRpg4eLVfQXfsAlDhCzIZr%2Bhw3lkksZ5xnjY22ib0Q0%2FPveuYgUQZaBGzloBJjkee9sOs8YRqe2fqY61prPgBfHwUzLIm6xqNkUl2p58wGDIDSpikSBbabF1dUG2LLdE7YEn&X-Amz-Signature=7435d56ba0e698ca9627804f1fbbbc91460432892927ade639fd673465b02d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CGZQ7L6%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIAnbFsA%2F3PtEfhYEvGbPsjjlKYdqxigDvCDhNAsIcXmgAiAfM%2F2m90E1t7fKuTBwFLj%2FtBmtXJS7mSg22sgSAgDqiir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMBNifI0aH8%2FW2szt4KtwD32dXFikTCaxZRACFQHTWEps21SY0k6mk9HwAE2HWiEAgKWwQ1jVA334HuzSjPT6xbCintZQ0RMN365YL0y91BPbhdwLbODnueyrYYnUxGR2OZAenjjXSTisVWOtdPRKEeOfb5Y51nhlIUm0GLwqiIr9rvAzKqWKnBhYaBkKrV21Yclt5bqS%2B5HQt3HXmm870kaXSnoMGjr67934Nywn0mpLgTSZoX0LogJJn6K1kU41htpWONVCBqFed0VteaXtjsLydzyVaMDPNhbPpUf8rGHZy3UelPFzZNKz2f3x%2FngpPVdxllSx9R3A4WT%2BE%2FN9nmv1CGxSI%2FfS%2FtIeWcvcOJ8m%2FvD%2FcNIgFsev7lsN05DmmFHdHOFZ3Ge%2B0Myc%2BfwdJAmpv3Fc8OnuTVvvQvPFe%2FChSI%2FCtcDb1GFRhPOfEKVwtrWjUNHw65z0J%2F0BrwiGKYEoo8bHy%2FTqxD6AmL7tDZdoDmA2qZai9TjCn1qHtpvnvWLykwzTK6Md%2FZDy7VzGOk%2FHQjbCt3EAY7%2BDDHeK%2FbuLJ2Dr6ZQk4WxxllsypCyI63exm90oW8ZiqCLGfqq8r8R%2FKvi2uGmq3EDhKMgPw%2BdJ%2B75hGAwn7aUcSCIi%2F3WYCICF0ZJSsFocADm4wtafnygY6pgGiIfSyY2eEu%2FTEDcs3wHotKK2L4IV5VooELc0tPADElMud7Eb0fMLoAHr8DiUtrq%2BO032OBYnz%2B2zsWTqldwN%2Fl%2FNknRpg4eLVfQXfsAlDhCzIZr%2Bhw3lkksZ5xnjY22ib0Q0%2FPveuYgUQZaBGzloBJjkee9sOs8YRqe2fqY61prPgBfHwUzLIm6xqNkUl2p58wGDIDSpikSBbabF1dUG2LLdE7YEn&X-Amz-Signature=fd280308b1cd66691ad6d871719318c3a7e7376b22d17cab85b87f613b8b24b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CGZQ7L6%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIAnbFsA%2F3PtEfhYEvGbPsjjlKYdqxigDvCDhNAsIcXmgAiAfM%2F2m90E1t7fKuTBwFLj%2FtBmtXJS7mSg22sgSAgDqiir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMBNifI0aH8%2FW2szt4KtwD32dXFikTCaxZRACFQHTWEps21SY0k6mk9HwAE2HWiEAgKWwQ1jVA334HuzSjPT6xbCintZQ0RMN365YL0y91BPbhdwLbODnueyrYYnUxGR2OZAenjjXSTisVWOtdPRKEeOfb5Y51nhlIUm0GLwqiIr9rvAzKqWKnBhYaBkKrV21Yclt5bqS%2B5HQt3HXmm870kaXSnoMGjr67934Nywn0mpLgTSZoX0LogJJn6K1kU41htpWONVCBqFed0VteaXtjsLydzyVaMDPNhbPpUf8rGHZy3UelPFzZNKz2f3x%2FngpPVdxllSx9R3A4WT%2BE%2FN9nmv1CGxSI%2FfS%2FtIeWcvcOJ8m%2FvD%2FcNIgFsev7lsN05DmmFHdHOFZ3Ge%2B0Myc%2BfwdJAmpv3Fc8OnuTVvvQvPFe%2FChSI%2FCtcDb1GFRhPOfEKVwtrWjUNHw65z0J%2F0BrwiGKYEoo8bHy%2FTqxD6AmL7tDZdoDmA2qZai9TjCn1qHtpvnvWLykwzTK6Md%2FZDy7VzGOk%2FHQjbCt3EAY7%2BDDHeK%2FbuLJ2Dr6ZQk4WxxllsypCyI63exm90oW8ZiqCLGfqq8r8R%2FKvi2uGmq3EDhKMgPw%2BdJ%2B75hGAwn7aUcSCIi%2F3WYCICF0ZJSsFocADm4wtafnygY6pgGiIfSyY2eEu%2FTEDcs3wHotKK2L4IV5VooELc0tPADElMud7Eb0fMLoAHr8DiUtrq%2BO032OBYnz%2B2zsWTqldwN%2Fl%2FNknRpg4eLVfQXfsAlDhCzIZr%2Bhw3lkksZ5xnjY22ib0Q0%2FPveuYgUQZaBGzloBJjkee9sOs8YRqe2fqY61prPgBfHwUzLIm6xqNkUl2p58wGDIDSpikSBbabF1dUG2LLdE7YEn&X-Amz-Signature=2133cbf885fa1476433d39401db9c4dc97d115ec3ad89f7a4bf87e1341861d19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODFLL7M%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC0p2mNnMpfgEaTgriXcYxioOUXLJyxX07%2B9skh9xMKggIhAM1TYlV%2BuPRmYf8nDcZrkQSzPT54RvKo5MOdN%2B9eii1HKv8DCCQQABoMNjM3NDIzMTgzODA1Igze8emr0JYyPD5UBb8q3AN6wpb%2BtfOC2nUfNogvd0zmTqJc4jdFIATwIXkJe7qxiuq9PukjoUNPfpHdB4%2BzB3neNg0kGPCX%2FnpMgoBipWVa6ESmO3avltXiAIG%2FUL%2FjRERiqKVwQw%2FV%2F3rt8c5Vo43bcHmNJWyy%2F7Inn5bpr%2BQ%2BjMji5YHvSwvQvCuLngz6y86UG7LrLfYdX096hEpwMzURw%2B2SZqzBxcC91qgEv79Ni3loDIyBbzCDJs5ky2x2ZRiT6tfCgPZBHdYGOrQC0%2FR9kJPobpwPdtUJpFDqkrF%2FdP0Ncy8E%2BNgjosHJQ5mB2IwueCocodcfPBEuPa2l7gm%2FGfatHv70iQC5Jq3z9C5am51yDjZ1FC4BR50KuF29lkeHXqPZerach6cjbrbQuBS44muPK%2FtsXiZE7EGJMh%2BIE%2FYW%2BY6vmoxX%2FFDdsBsr81T4%2B4vG2ueD%2B%2FJCyJgWJAR9UIlRkkqbMiL%2FIl1SIN51YfLeb1Sagy0EmKXC0gDx6fCk5Y2et6RuM6jUTvF%2Fo2X5l07cBnQI7ZCD31BlhoIjeiCJ5KtzRE9AHUx11ZfFCO63ML2rjbgZWaTaOyARy6eqLXCUaDmyOp35fUepGSf%2Bk1XMsHouAVM8SP7v4MhT1ke38bHYI59HVju6EzD5q%2BfKBjqkAb%2BLYFm9%2BWmauBQyk1MfWT%2FbQit3RfNvDSn0Fn5%2FJFDh2tDwPUmarKPnoGpW0QbI7i%2BARONdANvGwz45tmgM7Abr5sK1yAGtqtj4vdIQfsPE%2FNrnCJb94JchwlPf3Z%2FwQ29%2FFuKnqKyxgyvjBsBE0TSsckAzCYlwIgfhhBDt%2FVt6Q0ZMeZQRY4XYF4pulMHz9glBIUN1%2BkP1kgj%2BfI3ECtIeUqNZ&X-Amz-Signature=922fa0e251120f81f47a3a956b0c300f4b49b06e43af473054974d224b91e2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODFLL7M%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC0p2mNnMpfgEaTgriXcYxioOUXLJyxX07%2B9skh9xMKggIhAM1TYlV%2BuPRmYf8nDcZrkQSzPT54RvKo5MOdN%2B9eii1HKv8DCCQQABoMNjM3NDIzMTgzODA1Igze8emr0JYyPD5UBb8q3AN6wpb%2BtfOC2nUfNogvd0zmTqJc4jdFIATwIXkJe7qxiuq9PukjoUNPfpHdB4%2BzB3neNg0kGPCX%2FnpMgoBipWVa6ESmO3avltXiAIG%2FUL%2FjRERiqKVwQw%2FV%2F3rt8c5Vo43bcHmNJWyy%2F7Inn5bpr%2BQ%2BjMji5YHvSwvQvCuLngz6y86UG7LrLfYdX096hEpwMzURw%2B2SZqzBxcC91qgEv79Ni3loDIyBbzCDJs5ky2x2ZRiT6tfCgPZBHdYGOrQC0%2FR9kJPobpwPdtUJpFDqkrF%2FdP0Ncy8E%2BNgjosHJQ5mB2IwueCocodcfPBEuPa2l7gm%2FGfatHv70iQC5Jq3z9C5am51yDjZ1FC4BR50KuF29lkeHXqPZerach6cjbrbQuBS44muPK%2FtsXiZE7EGJMh%2BIE%2FYW%2BY6vmoxX%2FFDdsBsr81T4%2B4vG2ueD%2B%2FJCyJgWJAR9UIlRkkqbMiL%2FIl1SIN51YfLeb1Sagy0EmKXC0gDx6fCk5Y2et6RuM6jUTvF%2Fo2X5l07cBnQI7ZCD31BlhoIjeiCJ5KtzRE9AHUx11ZfFCO63ML2rjbgZWaTaOyARy6eqLXCUaDmyOp35fUepGSf%2Bk1XMsHouAVM8SP7v4MhT1ke38bHYI59HVju6EzD5q%2BfKBjqkAb%2BLYFm9%2BWmauBQyk1MfWT%2FbQit3RfNvDSn0Fn5%2FJFDh2tDwPUmarKPnoGpW0QbI7i%2BARONdANvGwz45tmgM7Abr5sK1yAGtqtj4vdIQfsPE%2FNrnCJb94JchwlPf3Z%2FwQ29%2FFuKnqKyxgyvjBsBE0TSsckAzCYlwIgfhhBDt%2FVt6Q0ZMeZQRY4XYF4pulMHz9glBIUN1%2BkP1kgj%2BfI3ECtIeUqNZ&X-Amz-Signature=79bb5c0d1177d86f4e913b09f7a2656c7bf01082e33eae08b1a4f30540f7c819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODFLL7M%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC0p2mNnMpfgEaTgriXcYxioOUXLJyxX07%2B9skh9xMKggIhAM1TYlV%2BuPRmYf8nDcZrkQSzPT54RvKo5MOdN%2B9eii1HKv8DCCQQABoMNjM3NDIzMTgzODA1Igze8emr0JYyPD5UBb8q3AN6wpb%2BtfOC2nUfNogvd0zmTqJc4jdFIATwIXkJe7qxiuq9PukjoUNPfpHdB4%2BzB3neNg0kGPCX%2FnpMgoBipWVa6ESmO3avltXiAIG%2FUL%2FjRERiqKVwQw%2FV%2F3rt8c5Vo43bcHmNJWyy%2F7Inn5bpr%2BQ%2BjMji5YHvSwvQvCuLngz6y86UG7LrLfYdX096hEpwMzURw%2B2SZqzBxcC91qgEv79Ni3loDIyBbzCDJs5ky2x2ZRiT6tfCgPZBHdYGOrQC0%2FR9kJPobpwPdtUJpFDqkrF%2FdP0Ncy8E%2BNgjosHJQ5mB2IwueCocodcfPBEuPa2l7gm%2FGfatHv70iQC5Jq3z9C5am51yDjZ1FC4BR50KuF29lkeHXqPZerach6cjbrbQuBS44muPK%2FtsXiZE7EGJMh%2BIE%2FYW%2BY6vmoxX%2FFDdsBsr81T4%2B4vG2ueD%2B%2FJCyJgWJAR9UIlRkkqbMiL%2FIl1SIN51YfLeb1Sagy0EmKXC0gDx6fCk5Y2et6RuM6jUTvF%2Fo2X5l07cBnQI7ZCD31BlhoIjeiCJ5KtzRE9AHUx11ZfFCO63ML2rjbgZWaTaOyARy6eqLXCUaDmyOp35fUepGSf%2Bk1XMsHouAVM8SP7v4MhT1ke38bHYI59HVju6EzD5q%2BfKBjqkAb%2BLYFm9%2BWmauBQyk1MfWT%2FbQit3RfNvDSn0Fn5%2FJFDh2tDwPUmarKPnoGpW0QbI7i%2BARONdANvGwz45tmgM7Abr5sK1yAGtqtj4vdIQfsPE%2FNrnCJb94JchwlPf3Z%2FwQ29%2FFuKnqKyxgyvjBsBE0TSsckAzCYlwIgfhhBDt%2FVt6Q0ZMeZQRY4XYF4pulMHz9glBIUN1%2BkP1kgj%2BfI3ECtIeUqNZ&X-Amz-Signature=ddd8971a13e5c2a2c61eb9fba8c361355262d920cf33689b54e307751e80cf0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODFLL7M%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC0p2mNnMpfgEaTgriXcYxioOUXLJyxX07%2B9skh9xMKggIhAM1TYlV%2BuPRmYf8nDcZrkQSzPT54RvKo5MOdN%2B9eii1HKv8DCCQQABoMNjM3NDIzMTgzODA1Igze8emr0JYyPD5UBb8q3AN6wpb%2BtfOC2nUfNogvd0zmTqJc4jdFIATwIXkJe7qxiuq9PukjoUNPfpHdB4%2BzB3neNg0kGPCX%2FnpMgoBipWVa6ESmO3avltXiAIG%2FUL%2FjRERiqKVwQw%2FV%2F3rt8c5Vo43bcHmNJWyy%2F7Inn5bpr%2BQ%2BjMji5YHvSwvQvCuLngz6y86UG7LrLfYdX096hEpwMzURw%2B2SZqzBxcC91qgEv79Ni3loDIyBbzCDJs5ky2x2ZRiT6tfCgPZBHdYGOrQC0%2FR9kJPobpwPdtUJpFDqkrF%2FdP0Ncy8E%2BNgjosHJQ5mB2IwueCocodcfPBEuPa2l7gm%2FGfatHv70iQC5Jq3z9C5am51yDjZ1FC4BR50KuF29lkeHXqPZerach6cjbrbQuBS44muPK%2FtsXiZE7EGJMh%2BIE%2FYW%2BY6vmoxX%2FFDdsBsr81T4%2B4vG2ueD%2B%2FJCyJgWJAR9UIlRkkqbMiL%2FIl1SIN51YfLeb1Sagy0EmKXC0gDx6fCk5Y2et6RuM6jUTvF%2Fo2X5l07cBnQI7ZCD31BlhoIjeiCJ5KtzRE9AHUx11ZfFCO63ML2rjbgZWaTaOyARy6eqLXCUaDmyOp35fUepGSf%2Bk1XMsHouAVM8SP7v4MhT1ke38bHYI59HVju6EzD5q%2BfKBjqkAb%2BLYFm9%2BWmauBQyk1MfWT%2FbQit3RfNvDSn0Fn5%2FJFDh2tDwPUmarKPnoGpW0QbI7i%2BARONdANvGwz45tmgM7Abr5sK1yAGtqtj4vdIQfsPE%2FNrnCJb94JchwlPf3Z%2FwQ29%2FFuKnqKyxgyvjBsBE0TSsckAzCYlwIgfhhBDt%2FVt6Q0ZMeZQRY4XYF4pulMHz9glBIUN1%2BkP1kgj%2BfI3ECtIeUqNZ&X-Amz-Signature=62096225dada5497db44949f1654caa202524b06fc370683a24403f54090783c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UODFLL7M%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC0p2mNnMpfgEaTgriXcYxioOUXLJyxX07%2B9skh9xMKggIhAM1TYlV%2BuPRmYf8nDcZrkQSzPT54RvKo5MOdN%2B9eii1HKv8DCCQQABoMNjM3NDIzMTgzODA1Igze8emr0JYyPD5UBb8q3AN6wpb%2BtfOC2nUfNogvd0zmTqJc4jdFIATwIXkJe7qxiuq9PukjoUNPfpHdB4%2BzB3neNg0kGPCX%2FnpMgoBipWVa6ESmO3avltXiAIG%2FUL%2FjRERiqKVwQw%2FV%2F3rt8c5Vo43bcHmNJWyy%2F7Inn5bpr%2BQ%2BjMji5YHvSwvQvCuLngz6y86UG7LrLfYdX096hEpwMzURw%2B2SZqzBxcC91qgEv79Ni3loDIyBbzCDJs5ky2x2ZRiT6tfCgPZBHdYGOrQC0%2FR9kJPobpwPdtUJpFDqkrF%2FdP0Ncy8E%2BNgjosHJQ5mB2IwueCocodcfPBEuPa2l7gm%2FGfatHv70iQC5Jq3z9C5am51yDjZ1FC4BR50KuF29lkeHXqPZerach6cjbrbQuBS44muPK%2FtsXiZE7EGJMh%2BIE%2FYW%2BY6vmoxX%2FFDdsBsr81T4%2B4vG2ueD%2B%2FJCyJgWJAR9UIlRkkqbMiL%2FIl1SIN51YfLeb1Sagy0EmKXC0gDx6fCk5Y2et6RuM6jUTvF%2Fo2X5l07cBnQI7ZCD31BlhoIjeiCJ5KtzRE9AHUx11ZfFCO63ML2rjbgZWaTaOyARy6eqLXCUaDmyOp35fUepGSf%2Bk1XMsHouAVM8SP7v4MhT1ke38bHYI59HVju6EzD5q%2BfKBjqkAb%2BLYFm9%2BWmauBQyk1MfWT%2FbQit3RfNvDSn0Fn5%2FJFDh2tDwPUmarKPnoGpW0QbI7i%2BARONdANvGwz45tmgM7Abr5sK1yAGtqtj4vdIQfsPE%2FNrnCJb94JchwlPf3Z%2FwQ29%2FFuKnqKyxgyvjBsBE0TSsckAzCYlwIgfhhBDt%2FVt6Q0ZMeZQRY4XYF4pulMHz9glBIUN1%2BkP1kgj%2BfI3ECtIeUqNZ&X-Amz-Signature=ff84d4126c5ebc745d84fb17e28c420f7c8783046292f1fc25d70701a81c181f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRTPCT4H%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDjufAd4VsbFS87dPiMTo5p9HLUT6QH3vpAjQUiVvSB4AiBgR1Ue%2FMGDu4kEVl84uwWc1KOx5tDtjmR8x8WmRIhLvCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMN5mc8AZYdZVM%2B5d7KtwD%2BFqUtbhEyVr26TvFNZR1cRulShhuZi%2FtqzMSwbHjJmD9tKR5Z7x4uD3YK2lmmctG%2BejuO1Yz2vAUFROlIKAHDD14WmWbp1RzIaRfUhHIJh%2FBeiE69p1z5kUltB2Ker%2BgpTGZpFpG8WO83dn967L8cgLBrvLsjq2dP90SOWmzNT9fKF8i%2FnABAvLq%2B%2FRZ0sGQpgpT5sv6f3OrSLep%2Bmfmsd28kyIlH8Dixim3S6GVXTnz8r9ljzfGn6Hjl0sOsgnOZWOitTkY%2Br2pRJyhttcP9eAq4TPiGUqOWfkDprQ5Q%2FcMIzc3dH3%2F9ZAsK64HVuiicXPAWMLr6BSvI6OnkdLqLj3NSROD3OKhC7zqpOqD79HkqnO1okfT0NQRK5NiisED5g91zgKglCoZ9SanYUxtcF66uQjOCV7xmEj8UJ4nV5Y9WZ7HjbqZn7FdTtChbqiPPO97nxR9cvTEAsTceuh1TRyELm93%2FCUBUug%2BXYs5Nm8rI9XsypCRB40KFgKywGWY8JGaeXJPZA2zQ85i9gulOrGk4p2CLltlkmx6PobCVs59G%2B920ufh%2Bxewod3tOTH%2BvDfLL3y1QAkqUc78QwI1k1ihy%2B5Yrd6Nup%2F2XBQ0KLRISzR4BiV1fCOxPVMwma%2FnygY6pgEwBGy5aLApZgMG%2BtHSkJMxr%2B0hvOGWEyPVB7ng4S2LQXcy8MamFPOGbJvTQqCuFtUX00DtU0b0S4IDKTa6IrxC%2FJxMFKTu4L5VOaAu9OEPxLY6DjvvTwhx4KwFL9um5UcK2PCywRmsFYFanyjdsilRiH75J14Uu%2BWgU9pKiezn6PTM9tqooxdvBJ2FucwJo%2FQA5ReLtGBwkY0CZ9pLe4qBODtBQF4t&X-Amz-Signature=7527560adb1ff4a49222988392205a4fd0407f1b56daf1c02c9902cdb421ac55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRTPCT4H%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDjufAd4VsbFS87dPiMTo5p9HLUT6QH3vpAjQUiVvSB4AiBgR1Ue%2FMGDu4kEVl84uwWc1KOx5tDtjmR8x8WmRIhLvCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMN5mc8AZYdZVM%2B5d7KtwD%2BFqUtbhEyVr26TvFNZR1cRulShhuZi%2FtqzMSwbHjJmD9tKR5Z7x4uD3YK2lmmctG%2BejuO1Yz2vAUFROlIKAHDD14WmWbp1RzIaRfUhHIJh%2FBeiE69p1z5kUltB2Ker%2BgpTGZpFpG8WO83dn967L8cgLBrvLsjq2dP90SOWmzNT9fKF8i%2FnABAvLq%2B%2FRZ0sGQpgpT5sv6f3OrSLep%2Bmfmsd28kyIlH8Dixim3S6GVXTnz8r9ljzfGn6Hjl0sOsgnOZWOitTkY%2Br2pRJyhttcP9eAq4TPiGUqOWfkDprQ5Q%2FcMIzc3dH3%2F9ZAsK64HVuiicXPAWMLr6BSvI6OnkdLqLj3NSROD3OKhC7zqpOqD79HkqnO1okfT0NQRK5NiisED5g91zgKglCoZ9SanYUxtcF66uQjOCV7xmEj8UJ4nV5Y9WZ7HjbqZn7FdTtChbqiPPO97nxR9cvTEAsTceuh1TRyELm93%2FCUBUug%2BXYs5Nm8rI9XsypCRB40KFgKywGWY8JGaeXJPZA2zQ85i9gulOrGk4p2CLltlkmx6PobCVs59G%2B920ufh%2Bxewod3tOTH%2BvDfLL3y1QAkqUc78QwI1k1ihy%2B5Yrd6Nup%2F2XBQ0KLRISzR4BiV1fCOxPVMwma%2FnygY6pgEwBGy5aLApZgMG%2BtHSkJMxr%2B0hvOGWEyPVB7ng4S2LQXcy8MamFPOGbJvTQqCuFtUX00DtU0b0S4IDKTa6IrxC%2FJxMFKTu4L5VOaAu9OEPxLY6DjvvTwhx4KwFL9um5UcK2PCywRmsFYFanyjdsilRiH75J14Uu%2BWgU9pKiezn6PTM9tqooxdvBJ2FucwJo%2FQA5ReLtGBwkY0CZ9pLe4qBODtBQF4t&X-Amz-Signature=6ad107ae590201554ac8a1dcf03cf8d0d31981a9a0447b0d3f021dde2069456a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRTPCT4H%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDjufAd4VsbFS87dPiMTo5p9HLUT6QH3vpAjQUiVvSB4AiBgR1Ue%2FMGDu4kEVl84uwWc1KOx5tDtjmR8x8WmRIhLvCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMN5mc8AZYdZVM%2B5d7KtwD%2BFqUtbhEyVr26TvFNZR1cRulShhuZi%2FtqzMSwbHjJmD9tKR5Z7x4uD3YK2lmmctG%2BejuO1Yz2vAUFROlIKAHDD14WmWbp1RzIaRfUhHIJh%2FBeiE69p1z5kUltB2Ker%2BgpTGZpFpG8WO83dn967L8cgLBrvLsjq2dP90SOWmzNT9fKF8i%2FnABAvLq%2B%2FRZ0sGQpgpT5sv6f3OrSLep%2Bmfmsd28kyIlH8Dixim3S6GVXTnz8r9ljzfGn6Hjl0sOsgnOZWOitTkY%2Br2pRJyhttcP9eAq4TPiGUqOWfkDprQ5Q%2FcMIzc3dH3%2F9ZAsK64HVuiicXPAWMLr6BSvI6OnkdLqLj3NSROD3OKhC7zqpOqD79HkqnO1okfT0NQRK5NiisED5g91zgKglCoZ9SanYUxtcF66uQjOCV7xmEj8UJ4nV5Y9WZ7HjbqZn7FdTtChbqiPPO97nxR9cvTEAsTceuh1TRyELm93%2FCUBUug%2BXYs5Nm8rI9XsypCRB40KFgKywGWY8JGaeXJPZA2zQ85i9gulOrGk4p2CLltlkmx6PobCVs59G%2B920ufh%2Bxewod3tOTH%2BvDfLL3y1QAkqUc78QwI1k1ihy%2B5Yrd6Nup%2F2XBQ0KLRISzR4BiV1fCOxPVMwma%2FnygY6pgEwBGy5aLApZgMG%2BtHSkJMxr%2B0hvOGWEyPVB7ng4S2LQXcy8MamFPOGbJvTQqCuFtUX00DtU0b0S4IDKTa6IrxC%2FJxMFKTu4L5VOaAu9OEPxLY6DjvvTwhx4KwFL9um5UcK2PCywRmsFYFanyjdsilRiH75J14Uu%2BWgU9pKiezn6PTM9tqooxdvBJ2FucwJo%2FQA5ReLtGBwkY0CZ9pLe4qBODtBQF4t&X-Amz-Signature=1451d55e7435c4a7dbdcb5b70a85fe330042116f70a9d1dc026c3588bf3b3f9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GH32VWB%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDp3UzMIzK7tD9Uk5ecinHO%2BX2NQR3NTvla%2BraCnwu6jwIhAP3Tstjp1aulhQsCgI7Y%2BMgcSyaUz521KGPYP9LYvgZdKv8DCCQQABoMNjM3NDIzMTgzODA1IgxlJiVIEQD7cA0fWfgq3ANLUXaedX2T8k3xAprz26h%2FK%2FpiXzNH0BOHu%2FoqaFAWp14CulOnzBsGXheabAxmLx5WZ6EvkbxNK2q8%2FtXm2e7GZi%2FhhTXN2WHVcU0mn%2F3Xh6Bqq3H%2BINfeGkDadcCDqgSYThl%2FILIYRUMrk9YefoP1qUiQgPgWF7P33BDo%2BkM%2BobPBUtk0jUNQ8D2qBStSS14pca43ZDj0im3w7yhxSJ12ab35hC6JDkwY9FsYsm6uAcRUJMYEoZgpTaMmRrLaNbWQAzVKyXmbFp93E8EBEyE2T4D%2FjSQ9lpDXi5ifDBDKH3fZzBPYUFtziJGp4n2Ny8oKTYkYSI5jVuumGCxQI1WG6uEHUGGg1C%2FQUaiRRkUTfCdk1qFu4LJiyhZvW1U%2F5Z%2FNe6XbR1XL6MG9%2B4twEUhzM68YVGpW4pRt7GLX3Iwz84pboC6RqzrnVoAISEDYnnDI9havi2krWOLvZ2snrgj4eOyKCPlrGl55oIA4K8%2Fmjftn9zThVIGXC0x3OmHikbtv44Ayk6W3%2FQ2H%2FjL25H3ArZHQqB37C0mClovh7ylcfuqGDqNsrOK3f%2B0btn5DHug%2Bcd5NReH8BFthyjz2ZQT8htmV%2BXW4NjTZXIfRKEHM3Awg7f5Pd2zMHZq%2FGDDLr%2BfKBjqkAZ1BQotJnGFZdz600eggBy6Izlq2irU%2Fkt%2FBLTLlgOJotzDVadoweTNPNKKdYIZMLKmGzdBhuUtwuiFs5%2FO3AeoOA6gKXCss7PODooiM66Y8d8evd4y16eKS7viZ%2FPijUevJoHzFqC5by5D5S1Nm%2F2i4EMIw7usYuSE6Rf9zGb2AsCIcCWkCMBKWiWCJC7ScbBeXzjD63OZ4cvsM3SC2OmFF%2B8t6&X-Amz-Signature=b812b9f28eb3c56cc754686b3d4405bee2f8152113c477c40b2c8cad03af9829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GH32VWB%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDp3UzMIzK7tD9Uk5ecinHO%2BX2NQR3NTvla%2BraCnwu6jwIhAP3Tstjp1aulhQsCgI7Y%2BMgcSyaUz521KGPYP9LYvgZdKv8DCCQQABoMNjM3NDIzMTgzODA1IgxlJiVIEQD7cA0fWfgq3ANLUXaedX2T8k3xAprz26h%2FK%2FpiXzNH0BOHu%2FoqaFAWp14CulOnzBsGXheabAxmLx5WZ6EvkbxNK2q8%2FtXm2e7GZi%2FhhTXN2WHVcU0mn%2F3Xh6Bqq3H%2BINfeGkDadcCDqgSYThl%2FILIYRUMrk9YefoP1qUiQgPgWF7P33BDo%2BkM%2BobPBUtk0jUNQ8D2qBStSS14pca43ZDj0im3w7yhxSJ12ab35hC6JDkwY9FsYsm6uAcRUJMYEoZgpTaMmRrLaNbWQAzVKyXmbFp93E8EBEyE2T4D%2FjSQ9lpDXi5ifDBDKH3fZzBPYUFtziJGp4n2Ny8oKTYkYSI5jVuumGCxQI1WG6uEHUGGg1C%2FQUaiRRkUTfCdk1qFu4LJiyhZvW1U%2F5Z%2FNe6XbR1XL6MG9%2B4twEUhzM68YVGpW4pRt7GLX3Iwz84pboC6RqzrnVoAISEDYnnDI9havi2krWOLvZ2snrgj4eOyKCPlrGl55oIA4K8%2Fmjftn9zThVIGXC0x3OmHikbtv44Ayk6W3%2FQ2H%2FjL25H3ArZHQqB37C0mClovh7ylcfuqGDqNsrOK3f%2B0btn5DHug%2Bcd5NReH8BFthyjz2ZQT8htmV%2BXW4NjTZXIfRKEHM3Awg7f5Pd2zMHZq%2FGDDLr%2BfKBjqkAZ1BQotJnGFZdz600eggBy6Izlq2irU%2Fkt%2FBLTLlgOJotzDVadoweTNPNKKdYIZMLKmGzdBhuUtwuiFs5%2FO3AeoOA6gKXCss7PODooiM66Y8d8evd4y16eKS7viZ%2FPijUevJoHzFqC5by5D5S1Nm%2F2i4EMIw7usYuSE6Rf9zGb2AsCIcCWkCMBKWiWCJC7ScbBeXzjD63OZ4cvsM3SC2OmFF%2B8t6&X-Amz-Signature=c6db21213bfc22e1a189548b16d22c284757ed30df117298f34ac4de46ab3676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLORZBFS%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCW25TYnBoVZ3I9gAGKz6%2BRhJnoEJLxAJ6VOBNyk2nHqwIgEsfmU8i79oQP3QCGAC7psI6HEd%2BYh1pa5lzXBsbq8wwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDN0OmplpBrswkC%2F6fSrcA%2F7Na7lv3P1ZVoPdF%2B3zLP1RYi7JbBgAcY4wJIwdNXc0uYCCAwIIg6Hc1d90JHymYtjsxzKi2VEcf46kjeKDTACWRqjB3uMrIgJuRkwRb9U12sZlnWkQamMm3J2sUtRmwsat%2BB37EWxIAG%2BnwgoLfsrUtDzxazNaQgrPg3ukZ1oupOeVKd7lJpPm8mP61S61nb5W2feeB9Y8U38Lp9K6O6qMrxJqjZ6nGNa63ob8EVRLlQCbA4S9AQtUGD%2FlTo4h9tYtWELpCkdkWxAFbZPueKm7FgAIeTdy0ue12QSWasmNPkYZ6jx0fByb0RWt5y3c6%2F3mZSdq%2B0k%2Bb5q%2Frug3TujmvyBKTK3SSnVrOXrA5Y%2F1mQoi5nlznFYmS17Y%2BigiSY0RGoi5ZaLM7JcGmyCEUlU9pH6x00CCzSZzO5nZNd%2B8kxndQ2NbbWQpcmRufFH1xR33EhTBcA4MWof62%2FO5DuxlhlYaHY3KcQlyOcBJ%2FaWaRXo9wEtx%2FZl0fPJMu%2B0UCxKgNzH53PE%2BjgMCXBRyIRmW%2Bi8kMLnC6jZNe3AZUMsEeVhIwc1T9aPKq0J1sP4Qk9d1U%2BItopO8MUjGW0t4oi%2Bya86CnL84jisR6gbRFPfZZcXJuSXsN3lAagBYMOOt58oGOqUBsYqIG1TMyKu0DyKCcZzGqzlWgMuPhoU2iXDorAzGA0RkSXJfD4dyYsxrUnz4UCni0onfdVTqevrUTEVA7h6mKVB96uC0p0cY0ns8oaQFURCwX7V902jTlf1mnSueIE%2FsYK9OQ4EN83B5wCdoe6VHFNBcO7lNTGOTsTlTLihHQ3kQVBWSTZ5p8L41VpJDYruQjTNDXvI%2Fv3B3u45B2CJQ9Jh3Yc3r&X-Amz-Signature=ff8fc318555c887d5786f837e69e78c983ec3fa353f3a505612c27051e337552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLORZBFS%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCW25TYnBoVZ3I9gAGKz6%2BRhJnoEJLxAJ6VOBNyk2nHqwIgEsfmU8i79oQP3QCGAC7psI6HEd%2BYh1pa5lzXBsbq8wwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDN0OmplpBrswkC%2F6fSrcA%2F7Na7lv3P1ZVoPdF%2B3zLP1RYi7JbBgAcY4wJIwdNXc0uYCCAwIIg6Hc1d90JHymYtjsxzKi2VEcf46kjeKDTACWRqjB3uMrIgJuRkwRb9U12sZlnWkQamMm3J2sUtRmwsat%2BB37EWxIAG%2BnwgoLfsrUtDzxazNaQgrPg3ukZ1oupOeVKd7lJpPm8mP61S61nb5W2feeB9Y8U38Lp9K6O6qMrxJqjZ6nGNa63ob8EVRLlQCbA4S9AQtUGD%2FlTo4h9tYtWELpCkdkWxAFbZPueKm7FgAIeTdy0ue12QSWasmNPkYZ6jx0fByb0RWt5y3c6%2F3mZSdq%2B0k%2Bb5q%2Frug3TujmvyBKTK3SSnVrOXrA5Y%2F1mQoi5nlznFYmS17Y%2BigiSY0RGoi5ZaLM7JcGmyCEUlU9pH6x00CCzSZzO5nZNd%2B8kxndQ2NbbWQpcmRufFH1xR33EhTBcA4MWof62%2FO5DuxlhlYaHY3KcQlyOcBJ%2FaWaRXo9wEtx%2FZl0fPJMu%2B0UCxKgNzH53PE%2BjgMCXBRyIRmW%2Bi8kMLnC6jZNe3AZUMsEeVhIwc1T9aPKq0J1sP4Qk9d1U%2BItopO8MUjGW0t4oi%2Bya86CnL84jisR6gbRFPfZZcXJuSXsN3lAagBYMOOt58oGOqUBsYqIG1TMyKu0DyKCcZzGqzlWgMuPhoU2iXDorAzGA0RkSXJfD4dyYsxrUnz4UCni0onfdVTqevrUTEVA7h6mKVB96uC0p0cY0ns8oaQFURCwX7V902jTlf1mnSueIE%2FsYK9OQ4EN83B5wCdoe6VHFNBcO7lNTGOTsTlTLihHQ3kQVBWSTZ5p8L41VpJDYruQjTNDXvI%2Fv3B3u45B2CJQ9Jh3Yc3r&X-Amz-Signature=8f9408e6651a6e93c1c2e0360c080eb3d6d649a6fa45bd2d0eb174b2a865642b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLORZBFS%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCW25TYnBoVZ3I9gAGKz6%2BRhJnoEJLxAJ6VOBNyk2nHqwIgEsfmU8i79oQP3QCGAC7psI6HEd%2BYh1pa5lzXBsbq8wwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDN0OmplpBrswkC%2F6fSrcA%2F7Na7lv3P1ZVoPdF%2B3zLP1RYi7JbBgAcY4wJIwdNXc0uYCCAwIIg6Hc1d90JHymYtjsxzKi2VEcf46kjeKDTACWRqjB3uMrIgJuRkwRb9U12sZlnWkQamMm3J2sUtRmwsat%2BB37EWxIAG%2BnwgoLfsrUtDzxazNaQgrPg3ukZ1oupOeVKd7lJpPm8mP61S61nb5W2feeB9Y8U38Lp9K6O6qMrxJqjZ6nGNa63ob8EVRLlQCbA4S9AQtUGD%2FlTo4h9tYtWELpCkdkWxAFbZPueKm7FgAIeTdy0ue12QSWasmNPkYZ6jx0fByb0RWt5y3c6%2F3mZSdq%2B0k%2Bb5q%2Frug3TujmvyBKTK3SSnVrOXrA5Y%2F1mQoi5nlznFYmS17Y%2BigiSY0RGoi5ZaLM7JcGmyCEUlU9pH6x00CCzSZzO5nZNd%2B8kxndQ2NbbWQpcmRufFH1xR33EhTBcA4MWof62%2FO5DuxlhlYaHY3KcQlyOcBJ%2FaWaRXo9wEtx%2FZl0fPJMu%2B0UCxKgNzH53PE%2BjgMCXBRyIRmW%2Bi8kMLnC6jZNe3AZUMsEeVhIwc1T9aPKq0J1sP4Qk9d1U%2BItopO8MUjGW0t4oi%2Bya86CnL84jisR6gbRFPfZZcXJuSXsN3lAagBYMOOt58oGOqUBsYqIG1TMyKu0DyKCcZzGqzlWgMuPhoU2iXDorAzGA0RkSXJfD4dyYsxrUnz4UCni0onfdVTqevrUTEVA7h6mKVB96uC0p0cY0ns8oaQFURCwX7V902jTlf1mnSueIE%2FsYK9OQ4EN83B5wCdoe6VHFNBcO7lNTGOTsTlTLihHQ3kQVBWSTZ5p8L41VpJDYruQjTNDXvI%2Fv3B3u45B2CJQ9Jh3Yc3r&X-Amz-Signature=56ca75784e88611163e34c7a88523d1c27b8d20b248e850786915a88bd6570b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLORZBFS%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCW25TYnBoVZ3I9gAGKz6%2BRhJnoEJLxAJ6VOBNyk2nHqwIgEsfmU8i79oQP3QCGAC7psI6HEd%2BYh1pa5lzXBsbq8wwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDN0OmplpBrswkC%2F6fSrcA%2F7Na7lv3P1ZVoPdF%2B3zLP1RYi7JbBgAcY4wJIwdNXc0uYCCAwIIg6Hc1d90JHymYtjsxzKi2VEcf46kjeKDTACWRqjB3uMrIgJuRkwRb9U12sZlnWkQamMm3J2sUtRmwsat%2BB37EWxIAG%2BnwgoLfsrUtDzxazNaQgrPg3ukZ1oupOeVKd7lJpPm8mP61S61nb5W2feeB9Y8U38Lp9K6O6qMrxJqjZ6nGNa63ob8EVRLlQCbA4S9AQtUGD%2FlTo4h9tYtWELpCkdkWxAFbZPueKm7FgAIeTdy0ue12QSWasmNPkYZ6jx0fByb0RWt5y3c6%2F3mZSdq%2B0k%2Bb5q%2Frug3TujmvyBKTK3SSnVrOXrA5Y%2F1mQoi5nlznFYmS17Y%2BigiSY0RGoi5ZaLM7JcGmyCEUlU9pH6x00CCzSZzO5nZNd%2B8kxndQ2NbbWQpcmRufFH1xR33EhTBcA4MWof62%2FO5DuxlhlYaHY3KcQlyOcBJ%2FaWaRXo9wEtx%2FZl0fPJMu%2B0UCxKgNzH53PE%2BjgMCXBRyIRmW%2Bi8kMLnC6jZNe3AZUMsEeVhIwc1T9aPKq0J1sP4Qk9d1U%2BItopO8MUjGW0t4oi%2Bya86CnL84jisR6gbRFPfZZcXJuSXsN3lAagBYMOOt58oGOqUBsYqIG1TMyKu0DyKCcZzGqzlWgMuPhoU2iXDorAzGA0RkSXJfD4dyYsxrUnz4UCni0onfdVTqevrUTEVA7h6mKVB96uC0p0cY0ns8oaQFURCwX7V902jTlf1mnSueIE%2FsYK9OQ4EN83B5wCdoe6VHFNBcO7lNTGOTsTlTLihHQ3kQVBWSTZ5p8L41VpJDYruQjTNDXvI%2Fv3B3u45B2CJQ9Jh3Yc3r&X-Amz-Signature=a6150a80d920bad118290eabf4745fbddc8177fb6f1b0ff50fde59445720adc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLORZBFS%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCW25TYnBoVZ3I9gAGKz6%2BRhJnoEJLxAJ6VOBNyk2nHqwIgEsfmU8i79oQP3QCGAC7psI6HEd%2BYh1pa5lzXBsbq8wwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDN0OmplpBrswkC%2F6fSrcA%2F7Na7lv3P1ZVoPdF%2B3zLP1RYi7JbBgAcY4wJIwdNXc0uYCCAwIIg6Hc1d90JHymYtjsxzKi2VEcf46kjeKDTACWRqjB3uMrIgJuRkwRb9U12sZlnWkQamMm3J2sUtRmwsat%2BB37EWxIAG%2BnwgoLfsrUtDzxazNaQgrPg3ukZ1oupOeVKd7lJpPm8mP61S61nb5W2feeB9Y8U38Lp9K6O6qMrxJqjZ6nGNa63ob8EVRLlQCbA4S9AQtUGD%2FlTo4h9tYtWELpCkdkWxAFbZPueKm7FgAIeTdy0ue12QSWasmNPkYZ6jx0fByb0RWt5y3c6%2F3mZSdq%2B0k%2Bb5q%2Frug3TujmvyBKTK3SSnVrOXrA5Y%2F1mQoi5nlznFYmS17Y%2BigiSY0RGoi5ZaLM7JcGmyCEUlU9pH6x00CCzSZzO5nZNd%2B8kxndQ2NbbWQpcmRufFH1xR33EhTBcA4MWof62%2FO5DuxlhlYaHY3KcQlyOcBJ%2FaWaRXo9wEtx%2FZl0fPJMu%2B0UCxKgNzH53PE%2BjgMCXBRyIRmW%2Bi8kMLnC6jZNe3AZUMsEeVhIwc1T9aPKq0J1sP4Qk9d1U%2BItopO8MUjGW0t4oi%2Bya86CnL84jisR6gbRFPfZZcXJuSXsN3lAagBYMOOt58oGOqUBsYqIG1TMyKu0DyKCcZzGqzlWgMuPhoU2iXDorAzGA0RkSXJfD4dyYsxrUnz4UCni0onfdVTqevrUTEVA7h6mKVB96uC0p0cY0ns8oaQFURCwX7V902jTlf1mnSueIE%2FsYK9OQ4EN83B5wCdoe6VHFNBcO7lNTGOTsTlTLihHQ3kQVBWSTZ5p8L41VpJDYruQjTNDXvI%2Fv3B3u45B2CJQ9Jh3Yc3r&X-Amz-Signature=635b91c229b52d6a3fd11017f082fbd0528d6ece0b4b301962969366f4e991ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QCYK2VL%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T041829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBKIxzQuy%2FOed6sn0tKrGtee3%2B9kvlzP%2BJuRTrCbcIl9AiEA6njR02uLSexwr619hbvoZese0VCGH286FZcpAwb%2BUJkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAO05bC09UNblvGB0yrcAw8twJ%2FzQP3cLkskpquIiwILVN%2FrRoeAsBgrzcxsBQco2Dy7PJFLNc8HRmEcfWxUNdbMUYRn0FIsgnzIdohBhH6pv%2FEha8II2EkoHiPuszIdfz1X8FPxVhqVdtpbfc%2F%2F%2F2gn2Lb%2BW38fodqkEuaWFmMIOL6fGal3M8Mv0%2FvRTkLDhyOyZDkMB8IG3eTxb1bhGaL9ZWM%2FjfCzRppJ9cwnZBwcU7zSmUGt1ulJfZsAfFOgYrJ6C65osN5RyyvOmKqwHn6mySYpBl%2BE4Fj2QlIXMNEfdZG2haMwacm3Y5QCV9VZbzTNGndUK9cdsLMkGUYcjYXdCwBL1PFMQG4UckqwsPtlWkKRc%2Fd09eNEVcsnZFe4x5R9h9QLLKNee7PfNzR0PjK%2BlwS3RsXNOM3qA9Je5u0QyXU5eaeP91eB2Cmdh7qkWEKXlhUMgL%2F1KrGQzfxYy7KupxE%2F6Mp4axRX7ZROJi1i3xikqxs3KHxZByGY55URkakE67ws8haf6ZZVw21nFgwreuuZ3B%2BnDFVfkneS2pW4II%2F0hTDvhB04sh6BvRlqwuJrW1SlK5Z4Lb%2FWIWTZtHtYFK8HzbSFyVTBnpGteS07GP%2B94brlFYCYnQP3vUBVVffpcyg7kcvrIc1WMMG058oGOqUB69qg2vxne2tUnOFec438gZOCtc1BWEj0sUjpgrxtvyBgvMdxSS5Gh7L2aeip9kZm4ehq%2FkU6UogwfUPxjFKUpgkm1Q%2B%2BjbDR2%2Fjy%2FaZWgeXSaAe01IVkTtrfY2dsjGCiYQ5vUb5gyssftJuKlI2KGnbNqVG2vU3Trw8idJIft3hakA6RZRXUA6iD3rlhFy%2BACZ5EHqXTGnxk5BQor8VCBAVtsvg3&X-Amz-Signature=12c30c728e40e7abcffebbd0c6ec39601d8c25e0889b9f2f7feb427956c5a6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

