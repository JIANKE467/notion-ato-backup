
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466663GO6KW%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9cxkBLsgNVd8mkR%2F4C22A3IsxTdFp%2FUP2X44EDTN0fwIgeAj4dfim7Jw4H8cyhC4yL1Mb3xICHQp340loVd7XLNwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPKbPOJU5j%2FN6VfnSrcA1BSdd%2B27MHDyr4dK4Zfsd3pyLo%2F%2BaQl%2FWIbxbwwdgEcAVgJVimSysJN%2FcjrTrwQBTa0rk7gACHY5t7BYvY0ObjoN3nhsK8RCIzh%2BW4cG0bJaNBxPv9lwG4bbJILXERpKLeHgphecYTICxGsGbzV2arg5k1jUBATyvC4jSy1B4C5Pc5Gc%2F5J20gQnwiG%2By4GupbjvZxLI%2FHoCQX8nKc4lqCbmNlmkjq8bFozX%2BRW7RpTTeezklIpzRSJ58iEQvEDgDFP4R%2BCVok17MdTvgnP5wzGC43y7q3av6dnrIdkIOg77wGANZNUsJHmI%2BBf0enUwiXCWWkFX3RoQZZ%2FUdIjbmJd0GsF4cMi2szp3xc74UrKkLD1veEXLe88v3pDgIJUk%2BqqZEfW74CC0ZpePaQVy0HozyMFYsRs2aMd60y%2Fh7HUUtoi5nrWHuUrOazSM5QuF0FrH9ydgfGMLAuLQYwMH7B%2F2FLF1ZPxSnhAN2uFax4w8Dza3plObtYqjEvLTftiyae5FIy4AZwoG%2Bloeq16GlK95TggTdFz90YdWo%2FfE3vnx3WKELnmUOfwUIS9b6b1lGt4PrMrMQ8OWYTm6dfBrszs3KmzViOaPdxQwnK4YI%2BSWQhahatUFf2Sb%2FotMKrY8MsGOqUBAxdWxPLjXntFlE%2Fy668UYPVInSHdyymTCYX0M0C3UPVXkOJlCVGnlG%2FIBowrBXzUTO5V97mjYlKcwEFfGCMjD7hZHjgMUfYMaPEXvbtn%2BWtiDkGosNf%2FUAqR8iijItYDo%2BArAPU5jaRIFs74mbx23yJ9GQkwUUHN6WcVqd6XYGnQedgpfQ%2BTpxOzlc7WdpsozWa3eJYFHBCYrV8rgk3FiM82ouaH&X-Amz-Signature=239ec05e8dbd13516c30f14475dc84a77f46486de5174e23daa74fca57a54f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAYMMDPX%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQGtCdx%2BtZiGK%2FYhuu%2FWc4aV%2Bb8xZpPj0kBKAGUgS7bAiEApr34clA7BY0Wm3cMcOg5WW%2Fo1Fg5kQh59ckIovszBbwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQWbhu4lbcvllEcWSrcAxB2O8u4mJpuvWJgV4XXfRphEf4JO1HjXVgGYRY6KJ6sY%2B39zcGATeQdbRD9o9LRxT2wiuA3jDAByBubgkgiPhymUUF2Y9HrL0kfx0OlP58YY9OfQkOkvPMbRpLBi3oi4yGE02UicjlGBN9ZArPUFE7XYrUVetrHbjY7P3ZLOSUAAhotaF3l6F8TF6vTpnsIBRngPzAHSD8nU%2BRVtNQJktwYTUxUZdzAkfrep0t2PHn3nmNDus6VOHvJNm0%2B6e6ho9xa7SBcsypqw2q2DwIEFlqkN3%2F0hwWsOiapujqP9Y%2FPJFoSYbim905v%2BP3znlZosnBD96%2Fhg1otNMxTMDsz%2FLQaBYKiKPSX4PCj8h5zWuh8uncQHZ9ARQ%2BGhBmznjB4O0a3pa9Y8jbZDKvgSqzqTPi%2Bm%2BNOXE7xhnyAomy0n8Wp3W7I3JNWg5Ld1pVPcuOTq5C7cXPpi9Qc2bFPh30ejA%2BO8eVCb40VSbYWi%2BjDuq37BkfXctuxn7VjByUqvbPIiBHl1XCtfoG2xIGTi0q%2B0OafIRiqaV1uo4QEKed1s%2BN%2FEGcZzoM9eC%2BWqgL1xeOUdaC5kMICGved4a5HX9YDTxJUoP18ohJdVInCBva4RUiDvTUqvvuagFlSIk4jMJHZ8MsGOqUBpCHj5d%2B1wtCqpQFBP7AQKyqEqApyJFbwwKzQ93jfwqJKdcCUpqdlOn64Cu%2FOT1LVoLAMTTwovj6Wp6LusspEqOf%2B9dum3oCb4GBa%2BvxU7EOBrUlIRyzURD5ejbwasJJQmkXWCCBIZhU0MWDpYr012MgJ6NzidWvCQ0aG5sNVFMGg%2FicLlD%2Bkbuz5gcHve6RSYO7oRy%2FMoMQ0EV6g5fUVgsgF%2FCjR&X-Amz-Signature=ec7b1bb6d654a2398448a5a9007b1e68fb8558e9c9729d059f84b14af84c72ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAYMMDPX%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQGtCdx%2BtZiGK%2FYhuu%2FWc4aV%2Bb8xZpPj0kBKAGUgS7bAiEApr34clA7BY0Wm3cMcOg5WW%2Fo1Fg5kQh59ckIovszBbwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQWbhu4lbcvllEcWSrcAxB2O8u4mJpuvWJgV4XXfRphEf4JO1HjXVgGYRY6KJ6sY%2B39zcGATeQdbRD9o9LRxT2wiuA3jDAByBubgkgiPhymUUF2Y9HrL0kfx0OlP58YY9OfQkOkvPMbRpLBi3oi4yGE02UicjlGBN9ZArPUFE7XYrUVetrHbjY7P3ZLOSUAAhotaF3l6F8TF6vTpnsIBRngPzAHSD8nU%2BRVtNQJktwYTUxUZdzAkfrep0t2PHn3nmNDus6VOHvJNm0%2B6e6ho9xa7SBcsypqw2q2DwIEFlqkN3%2F0hwWsOiapujqP9Y%2FPJFoSYbim905v%2BP3znlZosnBD96%2Fhg1otNMxTMDsz%2FLQaBYKiKPSX4PCj8h5zWuh8uncQHZ9ARQ%2BGhBmznjB4O0a3pa9Y8jbZDKvgSqzqTPi%2Bm%2BNOXE7xhnyAomy0n8Wp3W7I3JNWg5Ld1pVPcuOTq5C7cXPpi9Qc2bFPh30ejA%2BO8eVCb40VSbYWi%2BjDuq37BkfXctuxn7VjByUqvbPIiBHl1XCtfoG2xIGTi0q%2B0OafIRiqaV1uo4QEKed1s%2BN%2FEGcZzoM9eC%2BWqgL1xeOUdaC5kMICGved4a5HX9YDTxJUoP18ohJdVInCBva4RUiDvTUqvvuagFlSIk4jMJHZ8MsGOqUBpCHj5d%2B1wtCqpQFBP7AQKyqEqApyJFbwwKzQ93jfwqJKdcCUpqdlOn64Cu%2FOT1LVoLAMTTwovj6Wp6LusspEqOf%2B9dum3oCb4GBa%2BvxU7EOBrUlIRyzURD5ejbwasJJQmkXWCCBIZhU0MWDpYr012MgJ6NzidWvCQ0aG5sNVFMGg%2FicLlD%2Bkbuz5gcHve6RSYO7oRy%2FMoMQ0EV6g5fUVgsgF%2FCjR&X-Amz-Signature=b4f26c2204683ac740ef544713fd77f7b1e94903295068cbfdc996c7bf69c2fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7USZ6HS%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Nv3tGBkp02wR0MQKm2piK9CB14lxLf0TRVfLQtu%2BmgIgK%2F4RmmgR%2FCWofYeEkeCUfUyDmjy%2FIhiTVoD4vEn6MrwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6eXp4h1ZhB9bM2BCrcA9vJGogCdMJ8xM%2BOZ1GjFNiZ1gjGg32vTCY%2BPGask6jSS2HTkBetjLWCyR1ftQxH7baBBc1SyFOGa532Zef3uxvvXLymhFPtAAAavVTiNLLNPc9xvXxOvtuj721F8rBwq5mK1sZfZjpVZx6xD4FCOwPVr3Ystv5xQb2EhqG%2BF4r1ogZO5nUfraww7RRpeM0U0yUf6wFlIO08t3x9zVGD3%2BNXMrwZgZAjwpgCkKcWqO4mfAT4QxKOQfGgQhd%2F1QQTuf8TJcBzaiOGIwxuSrAKVAvwUclvD%2FYbdq5M%2FzHo0hroM162r4N46%2FRA5CadcypaJ%2BmS%2BZeyPYvZ4GIi94ilNNMbwPaTaboUlpFVBG%2B%2FrUQ2mGveW7z4AlH69Sq%2FBJLgwEYFIj46KU9eA3iQSG5wonORA83LtUCLXZE0IxYunkxnVqCJT0KYdluc0YiTazACzDiPMVn4r0UnVHVxWiMoCpJ0Bq%2FzRpu9HEC5A%2FRuuL0WmSsUAkhdwaU1yawBPdpNucS5aegqk%2B1uBt%2FXFKoz1ki%2Fn6qN2ch5FyDj7LtLfAi9er6FoK7aKQFfXYf%2Bf5HIISuOUkFdOIxhR7XHTTTmNt%2FYJVPGECxNzfglOYL2B7eBDjylpBEWLD03iOZ%2FMLTZ8MsGOqUBsbp%2FzWtYlJ0KyBFqEahEdw%2BW9elgqmVcUM3cGMoI1wHYBbj21lL9pzZB3xKLSI0fasuwOTXB7m6kEgufl%2FSWAEAskIg0CvFqO1bzdCQmBNu9KZ6EdCYYhYN%2B%2F%2FgTW%2FIgwwiFWXEd%2B1gQqNsMYYw8P153gW9xDW3AkxXekgzn0pDHN8aKq0ssajjLAnCrqZ5QbqztFxeMBqEqkhZrJKVqAjD2Wyb0&X-Amz-Signature=4c0f7b26e5e8b7de1dd96700f0b1b3c7c9087dd576b202eca1df7a93fb15fc24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7USZ6HS%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Nv3tGBkp02wR0MQKm2piK9CB14lxLf0TRVfLQtu%2BmgIgK%2F4RmmgR%2FCWofYeEkeCUfUyDmjy%2FIhiTVoD4vEn6MrwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6eXp4h1ZhB9bM2BCrcA9vJGogCdMJ8xM%2BOZ1GjFNiZ1gjGg32vTCY%2BPGask6jSS2HTkBetjLWCyR1ftQxH7baBBc1SyFOGa532Zef3uxvvXLymhFPtAAAavVTiNLLNPc9xvXxOvtuj721F8rBwq5mK1sZfZjpVZx6xD4FCOwPVr3Ystv5xQb2EhqG%2BF4r1ogZO5nUfraww7RRpeM0U0yUf6wFlIO08t3x9zVGD3%2BNXMrwZgZAjwpgCkKcWqO4mfAT4QxKOQfGgQhd%2F1QQTuf8TJcBzaiOGIwxuSrAKVAvwUclvD%2FYbdq5M%2FzHo0hroM162r4N46%2FRA5CadcypaJ%2BmS%2BZeyPYvZ4GIi94ilNNMbwPaTaboUlpFVBG%2B%2FrUQ2mGveW7z4AlH69Sq%2FBJLgwEYFIj46KU9eA3iQSG5wonORA83LtUCLXZE0IxYunkxnVqCJT0KYdluc0YiTazACzDiPMVn4r0UnVHVxWiMoCpJ0Bq%2FzRpu9HEC5A%2FRuuL0WmSsUAkhdwaU1yawBPdpNucS5aegqk%2B1uBt%2FXFKoz1ki%2Fn6qN2ch5FyDj7LtLfAi9er6FoK7aKQFfXYf%2Bf5HIISuOUkFdOIxhR7XHTTTmNt%2FYJVPGECxNzfglOYL2B7eBDjylpBEWLD03iOZ%2FMLTZ8MsGOqUBsbp%2FzWtYlJ0KyBFqEahEdw%2BW9elgqmVcUM3cGMoI1wHYBbj21lL9pzZB3xKLSI0fasuwOTXB7m6kEgufl%2FSWAEAskIg0CvFqO1bzdCQmBNu9KZ6EdCYYhYN%2B%2F%2FgTW%2FIgwwiFWXEd%2B1gQqNsMYYw8P153gW9xDW3AkxXekgzn0pDHN8aKq0ssajjLAnCrqZ5QbqztFxeMBqEqkhZrJKVqAjD2Wyb0&X-Amz-Signature=8d4a6ff415da73db10b29ef923b2a25d7593bf43f393186ef641850469017053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7USZ6HS%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Nv3tGBkp02wR0MQKm2piK9CB14lxLf0TRVfLQtu%2BmgIgK%2F4RmmgR%2FCWofYeEkeCUfUyDmjy%2FIhiTVoD4vEn6MrwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6eXp4h1ZhB9bM2BCrcA9vJGogCdMJ8xM%2BOZ1GjFNiZ1gjGg32vTCY%2BPGask6jSS2HTkBetjLWCyR1ftQxH7baBBc1SyFOGa532Zef3uxvvXLymhFPtAAAavVTiNLLNPc9xvXxOvtuj721F8rBwq5mK1sZfZjpVZx6xD4FCOwPVr3Ystv5xQb2EhqG%2BF4r1ogZO5nUfraww7RRpeM0U0yUf6wFlIO08t3x9zVGD3%2BNXMrwZgZAjwpgCkKcWqO4mfAT4QxKOQfGgQhd%2F1QQTuf8TJcBzaiOGIwxuSrAKVAvwUclvD%2FYbdq5M%2FzHo0hroM162r4N46%2FRA5CadcypaJ%2BmS%2BZeyPYvZ4GIi94ilNNMbwPaTaboUlpFVBG%2B%2FrUQ2mGveW7z4AlH69Sq%2FBJLgwEYFIj46KU9eA3iQSG5wonORA83LtUCLXZE0IxYunkxnVqCJT0KYdluc0YiTazACzDiPMVn4r0UnVHVxWiMoCpJ0Bq%2FzRpu9HEC5A%2FRuuL0WmSsUAkhdwaU1yawBPdpNucS5aegqk%2B1uBt%2FXFKoz1ki%2Fn6qN2ch5FyDj7LtLfAi9er6FoK7aKQFfXYf%2Bf5HIISuOUkFdOIxhR7XHTTTmNt%2FYJVPGECxNzfglOYL2B7eBDjylpBEWLD03iOZ%2FMLTZ8MsGOqUBsbp%2FzWtYlJ0KyBFqEahEdw%2BW9elgqmVcUM3cGMoI1wHYBbj21lL9pzZB3xKLSI0fasuwOTXB7m6kEgufl%2FSWAEAskIg0CvFqO1bzdCQmBNu9KZ6EdCYYhYN%2B%2F%2FgTW%2FIgwwiFWXEd%2B1gQqNsMYYw8P153gW9xDW3AkxXekgzn0pDHN8aKq0ssajjLAnCrqZ5QbqztFxeMBqEqkhZrJKVqAjD2Wyb0&X-Amz-Signature=2e6da083e94b7beb4b399c7e02cc6e4b78b6388f895c7ae27d3cafdac8b3553f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7USZ6HS%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Nv3tGBkp02wR0MQKm2piK9CB14lxLf0TRVfLQtu%2BmgIgK%2F4RmmgR%2FCWofYeEkeCUfUyDmjy%2FIhiTVoD4vEn6MrwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6eXp4h1ZhB9bM2BCrcA9vJGogCdMJ8xM%2BOZ1GjFNiZ1gjGg32vTCY%2BPGask6jSS2HTkBetjLWCyR1ftQxH7baBBc1SyFOGa532Zef3uxvvXLymhFPtAAAavVTiNLLNPc9xvXxOvtuj721F8rBwq5mK1sZfZjpVZx6xD4FCOwPVr3Ystv5xQb2EhqG%2BF4r1ogZO5nUfraww7RRpeM0U0yUf6wFlIO08t3x9zVGD3%2BNXMrwZgZAjwpgCkKcWqO4mfAT4QxKOQfGgQhd%2F1QQTuf8TJcBzaiOGIwxuSrAKVAvwUclvD%2FYbdq5M%2FzHo0hroM162r4N46%2FRA5CadcypaJ%2BmS%2BZeyPYvZ4GIi94ilNNMbwPaTaboUlpFVBG%2B%2FrUQ2mGveW7z4AlH69Sq%2FBJLgwEYFIj46KU9eA3iQSG5wonORA83LtUCLXZE0IxYunkxnVqCJT0KYdluc0YiTazACzDiPMVn4r0UnVHVxWiMoCpJ0Bq%2FzRpu9HEC5A%2FRuuL0WmSsUAkhdwaU1yawBPdpNucS5aegqk%2B1uBt%2FXFKoz1ki%2Fn6qN2ch5FyDj7LtLfAi9er6FoK7aKQFfXYf%2Bf5HIISuOUkFdOIxhR7XHTTTmNt%2FYJVPGECxNzfglOYL2B7eBDjylpBEWLD03iOZ%2FMLTZ8MsGOqUBsbp%2FzWtYlJ0KyBFqEahEdw%2BW9elgqmVcUM3cGMoI1wHYBbj21lL9pzZB3xKLSI0fasuwOTXB7m6kEgufl%2FSWAEAskIg0CvFqO1bzdCQmBNu9KZ6EdCYYhYN%2B%2F%2FgTW%2FIgwwiFWXEd%2B1gQqNsMYYw8P153gW9xDW3AkxXekgzn0pDHN8aKq0ssajjLAnCrqZ5QbqztFxeMBqEqkhZrJKVqAjD2Wyb0&X-Amz-Signature=e81dc5625acc63e2c2318a28817219abe1950177f51de7a42f47824ac3808dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7USZ6HS%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Nv3tGBkp02wR0MQKm2piK9CB14lxLf0TRVfLQtu%2BmgIgK%2F4RmmgR%2FCWofYeEkeCUfUyDmjy%2FIhiTVoD4vEn6MrwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6eXp4h1ZhB9bM2BCrcA9vJGogCdMJ8xM%2BOZ1GjFNiZ1gjGg32vTCY%2BPGask6jSS2HTkBetjLWCyR1ftQxH7baBBc1SyFOGa532Zef3uxvvXLymhFPtAAAavVTiNLLNPc9xvXxOvtuj721F8rBwq5mK1sZfZjpVZx6xD4FCOwPVr3Ystv5xQb2EhqG%2BF4r1ogZO5nUfraww7RRpeM0U0yUf6wFlIO08t3x9zVGD3%2BNXMrwZgZAjwpgCkKcWqO4mfAT4QxKOQfGgQhd%2F1QQTuf8TJcBzaiOGIwxuSrAKVAvwUclvD%2FYbdq5M%2FzHo0hroM162r4N46%2FRA5CadcypaJ%2BmS%2BZeyPYvZ4GIi94ilNNMbwPaTaboUlpFVBG%2B%2FrUQ2mGveW7z4AlH69Sq%2FBJLgwEYFIj46KU9eA3iQSG5wonORA83LtUCLXZE0IxYunkxnVqCJT0KYdluc0YiTazACzDiPMVn4r0UnVHVxWiMoCpJ0Bq%2FzRpu9HEC5A%2FRuuL0WmSsUAkhdwaU1yawBPdpNucS5aegqk%2B1uBt%2FXFKoz1ki%2Fn6qN2ch5FyDj7LtLfAi9er6FoK7aKQFfXYf%2Bf5HIISuOUkFdOIxhR7XHTTTmNt%2FYJVPGECxNzfglOYL2B7eBDjylpBEWLD03iOZ%2FMLTZ8MsGOqUBsbp%2FzWtYlJ0KyBFqEahEdw%2BW9elgqmVcUM3cGMoI1wHYBbj21lL9pzZB3xKLSI0fasuwOTXB7m6kEgufl%2FSWAEAskIg0CvFqO1bzdCQmBNu9KZ6EdCYYhYN%2B%2F%2FgTW%2FIgwwiFWXEd%2B1gQqNsMYYw8P153gW9xDW3AkxXekgzn0pDHN8aKq0ssajjLAnCrqZ5QbqztFxeMBqEqkhZrJKVqAjD2Wyb0&X-Amz-Signature=5f65f3cf83b567cedf084556662c62e64a2112fb723ab7ce739e7c616a232d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7USZ6HS%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Nv3tGBkp02wR0MQKm2piK9CB14lxLf0TRVfLQtu%2BmgIgK%2F4RmmgR%2FCWofYeEkeCUfUyDmjy%2FIhiTVoD4vEn6MrwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6eXp4h1ZhB9bM2BCrcA9vJGogCdMJ8xM%2BOZ1GjFNiZ1gjGg32vTCY%2BPGask6jSS2HTkBetjLWCyR1ftQxH7baBBc1SyFOGa532Zef3uxvvXLymhFPtAAAavVTiNLLNPc9xvXxOvtuj721F8rBwq5mK1sZfZjpVZx6xD4FCOwPVr3Ystv5xQb2EhqG%2BF4r1ogZO5nUfraww7RRpeM0U0yUf6wFlIO08t3x9zVGD3%2BNXMrwZgZAjwpgCkKcWqO4mfAT4QxKOQfGgQhd%2F1QQTuf8TJcBzaiOGIwxuSrAKVAvwUclvD%2FYbdq5M%2FzHo0hroM162r4N46%2FRA5CadcypaJ%2BmS%2BZeyPYvZ4GIi94ilNNMbwPaTaboUlpFVBG%2B%2FrUQ2mGveW7z4AlH69Sq%2FBJLgwEYFIj46KU9eA3iQSG5wonORA83LtUCLXZE0IxYunkxnVqCJT0KYdluc0YiTazACzDiPMVn4r0UnVHVxWiMoCpJ0Bq%2FzRpu9HEC5A%2FRuuL0WmSsUAkhdwaU1yawBPdpNucS5aegqk%2B1uBt%2FXFKoz1ki%2Fn6qN2ch5FyDj7LtLfAi9er6FoK7aKQFfXYf%2Bf5HIISuOUkFdOIxhR7XHTTTmNt%2FYJVPGECxNzfglOYL2B7eBDjylpBEWLD03iOZ%2FMLTZ8MsGOqUBsbp%2FzWtYlJ0KyBFqEahEdw%2BW9elgqmVcUM3cGMoI1wHYBbj21lL9pzZB3xKLSI0fasuwOTXB7m6kEgufl%2FSWAEAskIg0CvFqO1bzdCQmBNu9KZ6EdCYYhYN%2B%2F%2FgTW%2FIgwwiFWXEd%2B1gQqNsMYYw8P153gW9xDW3AkxXekgzn0pDHN8aKq0ssajjLAnCrqZ5QbqztFxeMBqEqkhZrJKVqAjD2Wyb0&X-Amz-Signature=fec4711a38b4d7828d8bd241ea17eb2a5eace69dbde861398ab7de5fe8f39db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7USZ6HS%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Nv3tGBkp02wR0MQKm2piK9CB14lxLf0TRVfLQtu%2BmgIgK%2F4RmmgR%2FCWofYeEkeCUfUyDmjy%2FIhiTVoD4vEn6MrwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6eXp4h1ZhB9bM2BCrcA9vJGogCdMJ8xM%2BOZ1GjFNiZ1gjGg32vTCY%2BPGask6jSS2HTkBetjLWCyR1ftQxH7baBBc1SyFOGa532Zef3uxvvXLymhFPtAAAavVTiNLLNPc9xvXxOvtuj721F8rBwq5mK1sZfZjpVZx6xD4FCOwPVr3Ystv5xQb2EhqG%2BF4r1ogZO5nUfraww7RRpeM0U0yUf6wFlIO08t3x9zVGD3%2BNXMrwZgZAjwpgCkKcWqO4mfAT4QxKOQfGgQhd%2F1QQTuf8TJcBzaiOGIwxuSrAKVAvwUclvD%2FYbdq5M%2FzHo0hroM162r4N46%2FRA5CadcypaJ%2BmS%2BZeyPYvZ4GIi94ilNNMbwPaTaboUlpFVBG%2B%2FrUQ2mGveW7z4AlH69Sq%2FBJLgwEYFIj46KU9eA3iQSG5wonORA83LtUCLXZE0IxYunkxnVqCJT0KYdluc0YiTazACzDiPMVn4r0UnVHVxWiMoCpJ0Bq%2FzRpu9HEC5A%2FRuuL0WmSsUAkhdwaU1yawBPdpNucS5aegqk%2B1uBt%2FXFKoz1ki%2Fn6qN2ch5FyDj7LtLfAi9er6FoK7aKQFfXYf%2Bf5HIISuOUkFdOIxhR7XHTTTmNt%2FYJVPGECxNzfglOYL2B7eBDjylpBEWLD03iOZ%2FMLTZ8MsGOqUBsbp%2FzWtYlJ0KyBFqEahEdw%2BW9elgqmVcUM3cGMoI1wHYBbj21lL9pzZB3xKLSI0fasuwOTXB7m6kEgufl%2FSWAEAskIg0CvFqO1bzdCQmBNu9KZ6EdCYYhYN%2B%2F%2FgTW%2FIgwwiFWXEd%2B1gQqNsMYYw8P153gW9xDW3AkxXekgzn0pDHN8aKq0ssajjLAnCrqZ5QbqztFxeMBqEqkhZrJKVqAjD2Wyb0&X-Amz-Signature=1b72586d60773a83827bb8936544546330f453222aafcbc210b7c35c5c83b20a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RDRNGHP%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPsL3P4XYZ13dIT%2Fm1YuarOah6tcBZq7VCdfPLjCBUrwIhAKK6n1tDMtfFxPIEeCOMtUpKNzmhOz7VpmkTDI9g3X%2FSKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuoQkc%2FMA14WEPK3Eq3AOKszEVTv8woMHvHdNxeraR5Wit9%2F%2BCRrBqMWXNNx00gzODGIYZS5vUzgn%2FJgPNkg5JzgzKwqi%2FHRSTKhquv%2FaIyY2%2BQgeqbqqG0BgWt%2BsfyXqMYF9x2SmkwIgifRj8rlxJKQTfJlsfF32nravtSNGNrhbQ8ltJM1H0UmYSalK1oPfmAFOCm68YrD%2FFlI%2FKASjeaMgz3rO8S02cl7OwP6MIsB%2B5rMqeltmvjuOoySlUSqR8LSzHHboRXvFAArhoJrX30z18OhnOs6WAFO5%2FzCIB2t6v2qm45X0oCRbQoUZm7p1f6BA3xaH2STSZAfZIl0Kz%2F9kydMcvY%2FDNiNSzLem9Bbjgo0FtNdTTQq8Vhotnxf0cf0uO7BZr1RpZi1%2FqJvqJAGYN%2FNKkDbxwCn7rqEMKiKe2vuv7O4kyJTgLgIgSIb1eMawjzStQZz%2FYL%2FjttTQnOTqffLG0%2Fec5V39KeP9%2BHd7RzGcrMVrFhkIGm8PiLh4k2XhV5rJas1UZJq5ZAeK7kyg8OpSqOR6p15pl2Mr6YFVJBmDEKfWQeVu8pfsFdi0fuJS06KNB1s08ywIXt1p%2FN14VETenfP2BnyhLvdqBCSKPFRWwIy6T0fLLL0X3ux1XS7tcbLskC%2BwBJDD82PDLBjqkAZrbaKgrfZxImCgZGkefb447cZHcMmxLsKi4rSy24KdieLP6dKbOBZUEEc0Wef41vL3VISVTWPRP1UaE8cbHvicCdtItD%2B7FQ1fJBWPqrLgtEcA3x7ZJnwgAcCFrsBuYrLaqO7AMcQGscp1iTeau%2B%2FSUguc00QBaEz%2BGemhLxKpu8T5OuWCLg134mRxBmkVOLERnZU1w%2BwcBE%2B03njWg8hqtMb2e&X-Amz-Signature=07d63b32ee17cc5fdd91cc3a638d80274f9bd10e709c741d7dadb82c81ee40ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RDRNGHP%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPsL3P4XYZ13dIT%2Fm1YuarOah6tcBZq7VCdfPLjCBUrwIhAKK6n1tDMtfFxPIEeCOMtUpKNzmhOz7VpmkTDI9g3X%2FSKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuoQkc%2FMA14WEPK3Eq3AOKszEVTv8woMHvHdNxeraR5Wit9%2F%2BCRrBqMWXNNx00gzODGIYZS5vUzgn%2FJgPNkg5JzgzKwqi%2FHRSTKhquv%2FaIyY2%2BQgeqbqqG0BgWt%2BsfyXqMYF9x2SmkwIgifRj8rlxJKQTfJlsfF32nravtSNGNrhbQ8ltJM1H0UmYSalK1oPfmAFOCm68YrD%2FFlI%2FKASjeaMgz3rO8S02cl7OwP6MIsB%2B5rMqeltmvjuOoySlUSqR8LSzHHboRXvFAArhoJrX30z18OhnOs6WAFO5%2FzCIB2t6v2qm45X0oCRbQoUZm7p1f6BA3xaH2STSZAfZIl0Kz%2F9kydMcvY%2FDNiNSzLem9Bbjgo0FtNdTTQq8Vhotnxf0cf0uO7BZr1RpZi1%2FqJvqJAGYN%2FNKkDbxwCn7rqEMKiKe2vuv7O4kyJTgLgIgSIb1eMawjzStQZz%2FYL%2FjttTQnOTqffLG0%2Fec5V39KeP9%2BHd7RzGcrMVrFhkIGm8PiLh4k2XhV5rJas1UZJq5ZAeK7kyg8OpSqOR6p15pl2Mr6YFVJBmDEKfWQeVu8pfsFdi0fuJS06KNB1s08ywIXt1p%2FN14VETenfP2BnyhLvdqBCSKPFRWwIy6T0fLLL0X3ux1XS7tcbLskC%2BwBJDD82PDLBjqkAZrbaKgrfZxImCgZGkefb447cZHcMmxLsKi4rSy24KdieLP6dKbOBZUEEc0Wef41vL3VISVTWPRP1UaE8cbHvicCdtItD%2B7FQ1fJBWPqrLgtEcA3x7ZJnwgAcCFrsBuYrLaqO7AMcQGscp1iTeau%2B%2FSUguc00QBaEz%2BGemhLxKpu8T5OuWCLg134mRxBmkVOLERnZU1w%2BwcBE%2B03njWg8hqtMb2e&X-Amz-Signature=cfb0e110a3eb9a25c25e71b70d0a83d7ec8c8cd059315857d416ef7bf8b2e8e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RDRNGHP%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPsL3P4XYZ13dIT%2Fm1YuarOah6tcBZq7VCdfPLjCBUrwIhAKK6n1tDMtfFxPIEeCOMtUpKNzmhOz7VpmkTDI9g3X%2FSKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuoQkc%2FMA14WEPK3Eq3AOKszEVTv8woMHvHdNxeraR5Wit9%2F%2BCRrBqMWXNNx00gzODGIYZS5vUzgn%2FJgPNkg5JzgzKwqi%2FHRSTKhquv%2FaIyY2%2BQgeqbqqG0BgWt%2BsfyXqMYF9x2SmkwIgifRj8rlxJKQTfJlsfF32nravtSNGNrhbQ8ltJM1H0UmYSalK1oPfmAFOCm68YrD%2FFlI%2FKASjeaMgz3rO8S02cl7OwP6MIsB%2B5rMqeltmvjuOoySlUSqR8LSzHHboRXvFAArhoJrX30z18OhnOs6WAFO5%2FzCIB2t6v2qm45X0oCRbQoUZm7p1f6BA3xaH2STSZAfZIl0Kz%2F9kydMcvY%2FDNiNSzLem9Bbjgo0FtNdTTQq8Vhotnxf0cf0uO7BZr1RpZi1%2FqJvqJAGYN%2FNKkDbxwCn7rqEMKiKe2vuv7O4kyJTgLgIgSIb1eMawjzStQZz%2FYL%2FjttTQnOTqffLG0%2Fec5V39KeP9%2BHd7RzGcrMVrFhkIGm8PiLh4k2XhV5rJas1UZJq5ZAeK7kyg8OpSqOR6p15pl2Mr6YFVJBmDEKfWQeVu8pfsFdi0fuJS06KNB1s08ywIXt1p%2FN14VETenfP2BnyhLvdqBCSKPFRWwIy6T0fLLL0X3ux1XS7tcbLskC%2BwBJDD82PDLBjqkAZrbaKgrfZxImCgZGkefb447cZHcMmxLsKi4rSy24KdieLP6dKbOBZUEEc0Wef41vL3VISVTWPRP1UaE8cbHvicCdtItD%2B7FQ1fJBWPqrLgtEcA3x7ZJnwgAcCFrsBuYrLaqO7AMcQGscp1iTeau%2B%2FSUguc00QBaEz%2BGemhLxKpu8T5OuWCLg134mRxBmkVOLERnZU1w%2BwcBE%2B03njWg8hqtMb2e&X-Amz-Signature=081bac66367623aff4340d288639c289e1d8197b8cbb9ed826968bbfbc632f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RDRNGHP%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPsL3P4XYZ13dIT%2Fm1YuarOah6tcBZq7VCdfPLjCBUrwIhAKK6n1tDMtfFxPIEeCOMtUpKNzmhOz7VpmkTDI9g3X%2FSKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuoQkc%2FMA14WEPK3Eq3AOKszEVTv8woMHvHdNxeraR5Wit9%2F%2BCRrBqMWXNNx00gzODGIYZS5vUzgn%2FJgPNkg5JzgzKwqi%2FHRSTKhquv%2FaIyY2%2BQgeqbqqG0BgWt%2BsfyXqMYF9x2SmkwIgifRj8rlxJKQTfJlsfF32nravtSNGNrhbQ8ltJM1H0UmYSalK1oPfmAFOCm68YrD%2FFlI%2FKASjeaMgz3rO8S02cl7OwP6MIsB%2B5rMqeltmvjuOoySlUSqR8LSzHHboRXvFAArhoJrX30z18OhnOs6WAFO5%2FzCIB2t6v2qm45X0oCRbQoUZm7p1f6BA3xaH2STSZAfZIl0Kz%2F9kydMcvY%2FDNiNSzLem9Bbjgo0FtNdTTQq8Vhotnxf0cf0uO7BZr1RpZi1%2FqJvqJAGYN%2FNKkDbxwCn7rqEMKiKe2vuv7O4kyJTgLgIgSIb1eMawjzStQZz%2FYL%2FjttTQnOTqffLG0%2Fec5V39KeP9%2BHd7RzGcrMVrFhkIGm8PiLh4k2XhV5rJas1UZJq5ZAeK7kyg8OpSqOR6p15pl2Mr6YFVJBmDEKfWQeVu8pfsFdi0fuJS06KNB1s08ywIXt1p%2FN14VETenfP2BnyhLvdqBCSKPFRWwIy6T0fLLL0X3ux1XS7tcbLskC%2BwBJDD82PDLBjqkAZrbaKgrfZxImCgZGkefb447cZHcMmxLsKi4rSy24KdieLP6dKbOBZUEEc0Wef41vL3VISVTWPRP1UaE8cbHvicCdtItD%2B7FQ1fJBWPqrLgtEcA3x7ZJnwgAcCFrsBuYrLaqO7AMcQGscp1iTeau%2B%2FSUguc00QBaEz%2BGemhLxKpu8T5OuWCLg134mRxBmkVOLERnZU1w%2BwcBE%2B03njWg8hqtMb2e&X-Amz-Signature=f7e56d66fda0f2eb512e3e7f79f3666a1dd7b269656fb0199fff5289b3ed965d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RDRNGHP%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPsL3P4XYZ13dIT%2Fm1YuarOah6tcBZq7VCdfPLjCBUrwIhAKK6n1tDMtfFxPIEeCOMtUpKNzmhOz7VpmkTDI9g3X%2FSKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuoQkc%2FMA14WEPK3Eq3AOKszEVTv8woMHvHdNxeraR5Wit9%2F%2BCRrBqMWXNNx00gzODGIYZS5vUzgn%2FJgPNkg5JzgzKwqi%2FHRSTKhquv%2FaIyY2%2BQgeqbqqG0BgWt%2BsfyXqMYF9x2SmkwIgifRj8rlxJKQTfJlsfF32nravtSNGNrhbQ8ltJM1H0UmYSalK1oPfmAFOCm68YrD%2FFlI%2FKASjeaMgz3rO8S02cl7OwP6MIsB%2B5rMqeltmvjuOoySlUSqR8LSzHHboRXvFAArhoJrX30z18OhnOs6WAFO5%2FzCIB2t6v2qm45X0oCRbQoUZm7p1f6BA3xaH2STSZAfZIl0Kz%2F9kydMcvY%2FDNiNSzLem9Bbjgo0FtNdTTQq8Vhotnxf0cf0uO7BZr1RpZi1%2FqJvqJAGYN%2FNKkDbxwCn7rqEMKiKe2vuv7O4kyJTgLgIgSIb1eMawjzStQZz%2FYL%2FjttTQnOTqffLG0%2Fec5V39KeP9%2BHd7RzGcrMVrFhkIGm8PiLh4k2XhV5rJas1UZJq5ZAeK7kyg8OpSqOR6p15pl2Mr6YFVJBmDEKfWQeVu8pfsFdi0fuJS06KNB1s08ywIXt1p%2FN14VETenfP2BnyhLvdqBCSKPFRWwIy6T0fLLL0X3ux1XS7tcbLskC%2BwBJDD82PDLBjqkAZrbaKgrfZxImCgZGkefb447cZHcMmxLsKi4rSy24KdieLP6dKbOBZUEEc0Wef41vL3VISVTWPRP1UaE8cbHvicCdtItD%2B7FQ1fJBWPqrLgtEcA3x7ZJnwgAcCFrsBuYrLaqO7AMcQGscp1iTeau%2B%2FSUguc00QBaEz%2BGemhLxKpu8T5OuWCLg134mRxBmkVOLERnZU1w%2BwcBE%2B03njWg8hqtMb2e&X-Amz-Signature=ebc494f23f4028c7ca062737734cea65798dafb81c7527e96fe3053753ee81da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXMKGSDO%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHb%2FQ%2FeiLfg%2BfkJfvgFqLy7VGifxAVfD9Kd17ZG%2F9lwoAiAeOiTJksA4L0z5HTQa1blfoS%2BfiMhMSBq0A%2BntAWFM2iqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTF5AsX2I9pnvZeuWKtwDR9LIBiVNYy4tkSs%2F5rGV31zJQCHZJZ5RP2gChv9YP77DEx1UAI0BIBgbpXyR8OkD0SmbSZGOQNjq6TlZIS56eUwO4994DdBNKAYElZCHj4mcVMjzJhxgSW%2FoHwn9nh0RmE2fBgecGncST7uQy1F0yXBN0g1XgiSR7r%2FUjzxlbTxhFmUp5Y1lSg4Z9F8075hzwkXfmhfr0Nntl6EosXosR7r1G6hu2KD4%2B6N0WR6uBb50Lao4Kea0pkZcmIovbr5FLOY9Mii%2BtZX129QMNOVIwMhRjBcITFeFIInHjud1MI0uGtaOCFMuXkBxqem90rLPk8E9Hpj1WylHfthdUP2c3hlWKDDlqeHzrjNDfMCU8WA6soU6tztdAeZJfDwKYFNU8dEbWwEzu91UgtBob9n%2Fqrdi%2BtV7PilUMQNBMFsHIMaCkzwwVv0%2FssP0TPlLSBQHoGvaLSZo4X6Rd0Rxj5yykNfATOB9idib%2FUn6nOF9i0vtll%2FyobajIr6aqsb8qySc3I8CyRjvzj3QzIlijYEq2vmHiKh0SR%2Fn6VsH0OMouEYlg8czz58fxGXN7m7Jr8uRCHWo81Cjy2IwkI7zs1H3swpsYMIXeXrw7%2F3PvizXvPMMkxxFZ99KE%2BYXBxowr9nwywY6pgFU7qrHL%2B8Hjq62ghzGSwaxz1GyV0mRcbwzXJ9diCHKWGdCFACNlK7avlaq8kB3r9Y03NThdWe4zmSgsYxlH%2FXR9F%2FNqFw7TCyi31XTyXVC20lbs%2FA%2FLyQ1rRxTivL%2FLLdaArp2nWthP7J09NgGVVTVnFfssF29C4mqplJQRAmN39gxU3Rk1UM3ctf5luOvT0PrD%2BEN1GFGVBUt6EP0y6w60O2MyyT2&X-Amz-Signature=45b37279f64ca6667cdd384389e8cec3de7d60cded0a7385a41bceb6e01ef0dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXMKGSDO%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHb%2FQ%2FeiLfg%2BfkJfvgFqLy7VGifxAVfD9Kd17ZG%2F9lwoAiAeOiTJksA4L0z5HTQa1blfoS%2BfiMhMSBq0A%2BntAWFM2iqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTF5AsX2I9pnvZeuWKtwDR9LIBiVNYy4tkSs%2F5rGV31zJQCHZJZ5RP2gChv9YP77DEx1UAI0BIBgbpXyR8OkD0SmbSZGOQNjq6TlZIS56eUwO4994DdBNKAYElZCHj4mcVMjzJhxgSW%2FoHwn9nh0RmE2fBgecGncST7uQy1F0yXBN0g1XgiSR7r%2FUjzxlbTxhFmUp5Y1lSg4Z9F8075hzwkXfmhfr0Nntl6EosXosR7r1G6hu2KD4%2B6N0WR6uBb50Lao4Kea0pkZcmIovbr5FLOY9Mii%2BtZX129QMNOVIwMhRjBcITFeFIInHjud1MI0uGtaOCFMuXkBxqem90rLPk8E9Hpj1WylHfthdUP2c3hlWKDDlqeHzrjNDfMCU8WA6soU6tztdAeZJfDwKYFNU8dEbWwEzu91UgtBob9n%2Fqrdi%2BtV7PilUMQNBMFsHIMaCkzwwVv0%2FssP0TPlLSBQHoGvaLSZo4X6Rd0Rxj5yykNfATOB9idib%2FUn6nOF9i0vtll%2FyobajIr6aqsb8qySc3I8CyRjvzj3QzIlijYEq2vmHiKh0SR%2Fn6VsH0OMouEYlg8czz58fxGXN7m7Jr8uRCHWo81Cjy2IwkI7zs1H3swpsYMIXeXrw7%2F3PvizXvPMMkxxFZ99KE%2BYXBxowr9nwywY6pgFU7qrHL%2B8Hjq62ghzGSwaxz1GyV0mRcbwzXJ9diCHKWGdCFACNlK7avlaq8kB3r9Y03NThdWe4zmSgsYxlH%2FXR9F%2FNqFw7TCyi31XTyXVC20lbs%2FA%2FLyQ1rRxTivL%2FLLdaArp2nWthP7J09NgGVVTVnFfssF29C4mqplJQRAmN39gxU3Rk1UM3ctf5luOvT0PrD%2BEN1GFGVBUt6EP0y6w60O2MyyT2&X-Amz-Signature=03cc7b4432a96272ab49d2edf0bdf65a11c4b1bea78fa35387a118856f875e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXMKGSDO%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHb%2FQ%2FeiLfg%2BfkJfvgFqLy7VGifxAVfD9Kd17ZG%2F9lwoAiAeOiTJksA4L0z5HTQa1blfoS%2BfiMhMSBq0A%2BntAWFM2iqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTF5AsX2I9pnvZeuWKtwDR9LIBiVNYy4tkSs%2F5rGV31zJQCHZJZ5RP2gChv9YP77DEx1UAI0BIBgbpXyR8OkD0SmbSZGOQNjq6TlZIS56eUwO4994DdBNKAYElZCHj4mcVMjzJhxgSW%2FoHwn9nh0RmE2fBgecGncST7uQy1F0yXBN0g1XgiSR7r%2FUjzxlbTxhFmUp5Y1lSg4Z9F8075hzwkXfmhfr0Nntl6EosXosR7r1G6hu2KD4%2B6N0WR6uBb50Lao4Kea0pkZcmIovbr5FLOY9Mii%2BtZX129QMNOVIwMhRjBcITFeFIInHjud1MI0uGtaOCFMuXkBxqem90rLPk8E9Hpj1WylHfthdUP2c3hlWKDDlqeHzrjNDfMCU8WA6soU6tztdAeZJfDwKYFNU8dEbWwEzu91UgtBob9n%2Fqrdi%2BtV7PilUMQNBMFsHIMaCkzwwVv0%2FssP0TPlLSBQHoGvaLSZo4X6Rd0Rxj5yykNfATOB9idib%2FUn6nOF9i0vtll%2FyobajIr6aqsb8qySc3I8CyRjvzj3QzIlijYEq2vmHiKh0SR%2Fn6VsH0OMouEYlg8czz58fxGXN7m7Jr8uRCHWo81Cjy2IwkI7zs1H3swpsYMIXeXrw7%2F3PvizXvPMMkxxFZ99KE%2BYXBxowr9nwywY6pgFU7qrHL%2B8Hjq62ghzGSwaxz1GyV0mRcbwzXJ9diCHKWGdCFACNlK7avlaq8kB3r9Y03NThdWe4zmSgsYxlH%2FXR9F%2FNqFw7TCyi31XTyXVC20lbs%2FA%2FLyQ1rRxTivL%2FLLdaArp2nWthP7J09NgGVVTVnFfssF29C4mqplJQRAmN39gxU3Rk1UM3ctf5luOvT0PrD%2BEN1GFGVBUt6EP0y6w60O2MyyT2&X-Amz-Signature=9cb8ccfaf0e02722e4535499a7e3d7237b039f0c15f24dee7c0092206a740be6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TDW737B%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHN3B4OmYLxUjYr3hfcEAYHNwgvmqEr%2FmsIiJgk%2By%2F6oAiEA%2BjrWaXPqSK3zmCyV%2B3xYvgyeOdybua4PA5yZgEsiRskqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORGmfnTBWDFtdnZdyrcA7W2UI4LZ5pVLrsMSxshI%2B1qselVf%2B%2Ba3XVpewvN918HuNmVONhyPkzlmmUJiRwg7eq9DjzUxXJ9cdZCyxhA74HbCsoDIJ0eL0k5kCzuCfH9E%2Fl1AfLY3ZIoEKtSQXcwLu9VvGjxDiJXG6Q9pHcp5WkSpnGH3ZmY8A8g2zKi%2F5%2BSlBZ38d5yQ9TlK%2FX7vo927Xhy%2FrqOfgZ20g%2B%2FHS6cb%2BUf3FF9FaRRNp46IHdJ6bWFH7bPetJIYn6XuZ3KGcEIlR0%2B2H2zRf3xhGAFhXFpib0OadUal%2BRfOTBySitFtQOcnIGeT6cY3GAQzOxBGP9zkSi4IrWw4ZthKpTktlG3TJbrD%2BYbuALHzEx5YUguOoIw3AdljwOAYIopLWbKlEMF3DXWGAn4rvy%2FGa7bt%2BqoSNExVquxZeWIJ7p3ZV5qyM91jopcMlLwYIV8Byu8OlX3DpG1%2F4W%2BucN0GUa%2FZlBYW4yDAwqCJu%2BRcYmmGKcDXBOMcf%2F63q0oEBKAkyYhXKXJuRLGhviD28s9%2FivNvAseujsLgv8x3MZl4t3nUuD9rKh%2BWnFTDkdMMwzkoQk%2B2LSJ%2BTI3Nj%2BMoNK4Yc1Iha%2FWIot%2FVFDU%2FN4589Hr5IZXtgSYqZsPtJckZnuWf4RoMKrY8MsGOqUBBWfpbUoUwKbJmfLhr3saj42vHZ6jSku8k62gbqivPLnCTqoWfServPCWq4Y7IAZi3S0%2B3U0OeHZBYQJ1gOE3tvRdebS%2BMURTfmH5NWQm1gtQl4%2F7NEqhMb8E%2Fnauybt5drJAXH1f3jSrWAhdg0si74soltw6mtKHzxsEpSz%2BqQGCVetq17joFiFV1AVtkEU2OiS%2FbA0N%2BuL5cwJOVUpn6NtNlX%2FO&X-Amz-Signature=0df4a7475cbdfd4c514e3a5925c36a2eba4f28ba635d1c006f5f744b12f95a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TDW737B%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHN3B4OmYLxUjYr3hfcEAYHNwgvmqEr%2FmsIiJgk%2By%2F6oAiEA%2BjrWaXPqSK3zmCyV%2B3xYvgyeOdybua4PA5yZgEsiRskqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORGmfnTBWDFtdnZdyrcA7W2UI4LZ5pVLrsMSxshI%2B1qselVf%2B%2Ba3XVpewvN918HuNmVONhyPkzlmmUJiRwg7eq9DjzUxXJ9cdZCyxhA74HbCsoDIJ0eL0k5kCzuCfH9E%2Fl1AfLY3ZIoEKtSQXcwLu9VvGjxDiJXG6Q9pHcp5WkSpnGH3ZmY8A8g2zKi%2F5%2BSlBZ38d5yQ9TlK%2FX7vo927Xhy%2FrqOfgZ20g%2B%2FHS6cb%2BUf3FF9FaRRNp46IHdJ6bWFH7bPetJIYn6XuZ3KGcEIlR0%2B2H2zRf3xhGAFhXFpib0OadUal%2BRfOTBySitFtQOcnIGeT6cY3GAQzOxBGP9zkSi4IrWw4ZthKpTktlG3TJbrD%2BYbuALHzEx5YUguOoIw3AdljwOAYIopLWbKlEMF3DXWGAn4rvy%2FGa7bt%2BqoSNExVquxZeWIJ7p3ZV5qyM91jopcMlLwYIV8Byu8OlX3DpG1%2F4W%2BucN0GUa%2FZlBYW4yDAwqCJu%2BRcYmmGKcDXBOMcf%2F63q0oEBKAkyYhXKXJuRLGhviD28s9%2FivNvAseujsLgv8x3MZl4t3nUuD9rKh%2BWnFTDkdMMwzkoQk%2B2LSJ%2BTI3Nj%2BMoNK4Yc1Iha%2FWIot%2FVFDU%2FN4589Hr5IZXtgSYqZsPtJckZnuWf4RoMKrY8MsGOqUBBWfpbUoUwKbJmfLhr3saj42vHZ6jSku8k62gbqivPLnCTqoWfServPCWq4Y7IAZi3S0%2B3U0OeHZBYQJ1gOE3tvRdebS%2BMURTfmH5NWQm1gtQl4%2F7NEqhMb8E%2Fnauybt5drJAXH1f3jSrWAhdg0si74soltw6mtKHzxsEpSz%2BqQGCVetq17joFiFV1AVtkEU2OiS%2FbA0N%2BuL5cwJOVUpn6NtNlX%2FO&X-Amz-Signature=30cae7824c944165cccc6e0371b2d187937fe22eaaad5351e24a4998d7dcd0f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VPUDYHJ%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiJ7DwJ7A7P2qqN7tvGLhLr%2Bh862zCefyWROnQjV%2F%2BLAiAcdcib4Va%2FDwadL75iyxkGYbHMAOPuIFHi4mMXbCsetiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM29aC4z%2BhBUNXLDtVKtwD3sYb9c47xq4M11XLXYCE4uNoI2UOzPrfxONJfk3Dl42mnVSHAAms52qHRWPDiilPRYMFsKFbkyY9bQIGNBcUqmhKk3k9Bwb4Zq7Hs69cOe3PYZg%2Bvo9av%2BQf65sjcDm6mG3hrEH5CVXM2S5j6KHzwjF%2F4R3pG4kC%2Bivqk9SOkY6F%2BV3h%2FbTrtX2PBqFLVertRsD%2F3%2B2bAgkpGlrtqXTW9hHKeVREDEF5X3Y596ya%2F9aQTyXuSCfF559BTVWjKSWwpfp%2Fz5CKduj9NN9nu2vsyGjp23YeIwU4OjKBoKGsrtUyHR04qKVgNO2DMj2d2SG%2Fie1MTFlpzm2H6qNjHWrMuBxaV7UcuoabCDxFun%2BvJOU%2F3TbVhQBDTDsM9Df1A7%2BnV3%2BRY4irEYjPKjKOEdbTeAvI6kajkr%2BjF86a5OESPptq0QnY1c1ZZrQPiAxmF7ZB5MqFM%2BjUsDHrrwZoQxmRjw7UVQy8WK4YUvQCU12mVDTp%2Bo0BLRpOHWbqitZxIvCvxFsPP3CMXtdj6IC7QgqUnRp1CiDmVPD%2FmS9TvtXr9cj0GL1WICZORH4juGYRn9JJ9OTsZKr6hq1lvKA7S1COKQIgHAZX7AJG%2FK7Zv8wR8hKkTEFRGukpOQaA8P0w5NjwywY6pgEYVFhCO7Z0dpg6JtzmopiSzoF2eR86Kihxsp9FIXg4%2Bg8%2BBUAli3wiMYignrnDpvk3XXwTaZIs2lV%2FIQmOSAptgs%2FA4MHbH%2FZYb3OsK%2FVsr53GRvMei7FmI7RfnkVi6QlJh%2FL%2F9XV%2BlatEKGM5W09PNeEw4G2DqoQNvurbe2ShBqv%2FvHHydOx%2BSlE1tgfqCii8icTa1AOpvbZcGJlDCZgPTXiCl3tN&X-Amz-Signature=173693ede41fbb0da03f69bc9b9cdcf169345d46b166aea9cea5aa3999963c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VPUDYHJ%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiJ7DwJ7A7P2qqN7tvGLhLr%2Bh862zCefyWROnQjV%2F%2BLAiAcdcib4Va%2FDwadL75iyxkGYbHMAOPuIFHi4mMXbCsetiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM29aC4z%2BhBUNXLDtVKtwD3sYb9c47xq4M11XLXYCE4uNoI2UOzPrfxONJfk3Dl42mnVSHAAms52qHRWPDiilPRYMFsKFbkyY9bQIGNBcUqmhKk3k9Bwb4Zq7Hs69cOe3PYZg%2Bvo9av%2BQf65sjcDm6mG3hrEH5CVXM2S5j6KHzwjF%2F4R3pG4kC%2Bivqk9SOkY6F%2BV3h%2FbTrtX2PBqFLVertRsD%2F3%2B2bAgkpGlrtqXTW9hHKeVREDEF5X3Y596ya%2F9aQTyXuSCfF559BTVWjKSWwpfp%2Fz5CKduj9NN9nu2vsyGjp23YeIwU4OjKBoKGsrtUyHR04qKVgNO2DMj2d2SG%2Fie1MTFlpzm2H6qNjHWrMuBxaV7UcuoabCDxFun%2BvJOU%2F3TbVhQBDTDsM9Df1A7%2BnV3%2BRY4irEYjPKjKOEdbTeAvI6kajkr%2BjF86a5OESPptq0QnY1c1ZZrQPiAxmF7ZB5MqFM%2BjUsDHrrwZoQxmRjw7UVQy8WK4YUvQCU12mVDTp%2Bo0BLRpOHWbqitZxIvCvxFsPP3CMXtdj6IC7QgqUnRp1CiDmVPD%2FmS9TvtXr9cj0GL1WICZORH4juGYRn9JJ9OTsZKr6hq1lvKA7S1COKQIgHAZX7AJG%2FK7Zv8wR8hKkTEFRGukpOQaA8P0w5NjwywY6pgEYVFhCO7Z0dpg6JtzmopiSzoF2eR86Kihxsp9FIXg4%2Bg8%2BBUAli3wiMYignrnDpvk3XXwTaZIs2lV%2FIQmOSAptgs%2FA4MHbH%2FZYb3OsK%2FVsr53GRvMei7FmI7RfnkVi6QlJh%2FL%2F9XV%2BlatEKGM5W09PNeEw4G2DqoQNvurbe2ShBqv%2FvHHydOx%2BSlE1tgfqCii8icTa1AOpvbZcGJlDCZgPTXiCl3tN&X-Amz-Signature=1d8226f2c50ba1f45a6440baeb6c72dfef06284e1f9a661792d4b2c3ae434be4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VPUDYHJ%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiJ7DwJ7A7P2qqN7tvGLhLr%2Bh862zCefyWROnQjV%2F%2BLAiAcdcib4Va%2FDwadL75iyxkGYbHMAOPuIFHi4mMXbCsetiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM29aC4z%2BhBUNXLDtVKtwD3sYb9c47xq4M11XLXYCE4uNoI2UOzPrfxONJfk3Dl42mnVSHAAms52qHRWPDiilPRYMFsKFbkyY9bQIGNBcUqmhKk3k9Bwb4Zq7Hs69cOe3PYZg%2Bvo9av%2BQf65sjcDm6mG3hrEH5CVXM2S5j6KHzwjF%2F4R3pG4kC%2Bivqk9SOkY6F%2BV3h%2FbTrtX2PBqFLVertRsD%2F3%2B2bAgkpGlrtqXTW9hHKeVREDEF5X3Y596ya%2F9aQTyXuSCfF559BTVWjKSWwpfp%2Fz5CKduj9NN9nu2vsyGjp23YeIwU4OjKBoKGsrtUyHR04qKVgNO2DMj2d2SG%2Fie1MTFlpzm2H6qNjHWrMuBxaV7UcuoabCDxFun%2BvJOU%2F3TbVhQBDTDsM9Df1A7%2BnV3%2BRY4irEYjPKjKOEdbTeAvI6kajkr%2BjF86a5OESPptq0QnY1c1ZZrQPiAxmF7ZB5MqFM%2BjUsDHrrwZoQxmRjw7UVQy8WK4YUvQCU12mVDTp%2Bo0BLRpOHWbqitZxIvCvxFsPP3CMXtdj6IC7QgqUnRp1CiDmVPD%2FmS9TvtXr9cj0GL1WICZORH4juGYRn9JJ9OTsZKr6hq1lvKA7S1COKQIgHAZX7AJG%2FK7Zv8wR8hKkTEFRGukpOQaA8P0w5NjwywY6pgEYVFhCO7Z0dpg6JtzmopiSzoF2eR86Kihxsp9FIXg4%2Bg8%2BBUAli3wiMYignrnDpvk3XXwTaZIs2lV%2FIQmOSAptgs%2FA4MHbH%2FZYb3OsK%2FVsr53GRvMei7FmI7RfnkVi6QlJh%2FL%2F9XV%2BlatEKGM5W09PNeEw4G2DqoQNvurbe2ShBqv%2FvHHydOx%2BSlE1tgfqCii8icTa1AOpvbZcGJlDCZgPTXiCl3tN&X-Amz-Signature=2473a01e470804087f4bdac6a08af1d577e230de2dace74badf90ef78b6fa9a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VPUDYHJ%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiJ7DwJ7A7P2qqN7tvGLhLr%2Bh862zCefyWROnQjV%2F%2BLAiAcdcib4Va%2FDwadL75iyxkGYbHMAOPuIFHi4mMXbCsetiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM29aC4z%2BhBUNXLDtVKtwD3sYb9c47xq4M11XLXYCE4uNoI2UOzPrfxONJfk3Dl42mnVSHAAms52qHRWPDiilPRYMFsKFbkyY9bQIGNBcUqmhKk3k9Bwb4Zq7Hs69cOe3PYZg%2Bvo9av%2BQf65sjcDm6mG3hrEH5CVXM2S5j6KHzwjF%2F4R3pG4kC%2Bivqk9SOkY6F%2BV3h%2FbTrtX2PBqFLVertRsD%2F3%2B2bAgkpGlrtqXTW9hHKeVREDEF5X3Y596ya%2F9aQTyXuSCfF559BTVWjKSWwpfp%2Fz5CKduj9NN9nu2vsyGjp23YeIwU4OjKBoKGsrtUyHR04qKVgNO2DMj2d2SG%2Fie1MTFlpzm2H6qNjHWrMuBxaV7UcuoabCDxFun%2BvJOU%2F3TbVhQBDTDsM9Df1A7%2BnV3%2BRY4irEYjPKjKOEdbTeAvI6kajkr%2BjF86a5OESPptq0QnY1c1ZZrQPiAxmF7ZB5MqFM%2BjUsDHrrwZoQxmRjw7UVQy8WK4YUvQCU12mVDTp%2Bo0BLRpOHWbqitZxIvCvxFsPP3CMXtdj6IC7QgqUnRp1CiDmVPD%2FmS9TvtXr9cj0GL1WICZORH4juGYRn9JJ9OTsZKr6hq1lvKA7S1COKQIgHAZX7AJG%2FK7Zv8wR8hKkTEFRGukpOQaA8P0w5NjwywY6pgEYVFhCO7Z0dpg6JtzmopiSzoF2eR86Kihxsp9FIXg4%2Bg8%2BBUAli3wiMYignrnDpvk3XXwTaZIs2lV%2FIQmOSAptgs%2FA4MHbH%2FZYb3OsK%2FVsr53GRvMei7FmI7RfnkVi6QlJh%2FL%2F9XV%2BlatEKGM5W09PNeEw4G2DqoQNvurbe2ShBqv%2FvHHydOx%2BSlE1tgfqCii8icTa1AOpvbZcGJlDCZgPTXiCl3tN&X-Amz-Signature=6ffba72624bf42b91560faf48550f0b7dbf85d8990274ffe61f0f51c06d5b2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VPUDYHJ%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiJ7DwJ7A7P2qqN7tvGLhLr%2Bh862zCefyWROnQjV%2F%2BLAiAcdcib4Va%2FDwadL75iyxkGYbHMAOPuIFHi4mMXbCsetiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM29aC4z%2BhBUNXLDtVKtwD3sYb9c47xq4M11XLXYCE4uNoI2UOzPrfxONJfk3Dl42mnVSHAAms52qHRWPDiilPRYMFsKFbkyY9bQIGNBcUqmhKk3k9Bwb4Zq7Hs69cOe3PYZg%2Bvo9av%2BQf65sjcDm6mG3hrEH5CVXM2S5j6KHzwjF%2F4R3pG4kC%2Bivqk9SOkY6F%2BV3h%2FbTrtX2PBqFLVertRsD%2F3%2B2bAgkpGlrtqXTW9hHKeVREDEF5X3Y596ya%2F9aQTyXuSCfF559BTVWjKSWwpfp%2Fz5CKduj9NN9nu2vsyGjp23YeIwU4OjKBoKGsrtUyHR04qKVgNO2DMj2d2SG%2Fie1MTFlpzm2H6qNjHWrMuBxaV7UcuoabCDxFun%2BvJOU%2F3TbVhQBDTDsM9Df1A7%2BnV3%2BRY4irEYjPKjKOEdbTeAvI6kajkr%2BjF86a5OESPptq0QnY1c1ZZrQPiAxmF7ZB5MqFM%2BjUsDHrrwZoQxmRjw7UVQy8WK4YUvQCU12mVDTp%2Bo0BLRpOHWbqitZxIvCvxFsPP3CMXtdj6IC7QgqUnRp1CiDmVPD%2FmS9TvtXr9cj0GL1WICZORH4juGYRn9JJ9OTsZKr6hq1lvKA7S1COKQIgHAZX7AJG%2FK7Zv8wR8hKkTEFRGukpOQaA8P0w5NjwywY6pgEYVFhCO7Z0dpg6JtzmopiSzoF2eR86Kihxsp9FIXg4%2Bg8%2BBUAli3wiMYignrnDpvk3XXwTaZIs2lV%2FIQmOSAptgs%2FA4MHbH%2FZYb3OsK%2FVsr53GRvMei7FmI7RfnkVi6QlJh%2FL%2F9XV%2BlatEKGM5W09PNeEw4G2DqoQNvurbe2ShBqv%2FvHHydOx%2BSlE1tgfqCii8icTa1AOpvbZcGJlDCZgPTXiCl3tN&X-Amz-Signature=6762b4f25e5faf2fb79c9a08372c9165ae119cd16ffc7e6b6cb128e99a60f8dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USPP3BNK%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T045249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmrKKej3SeMBj10hYgTGQyVBCfH5mIA%2Bn0TnhzU9zhWAiBD6ofn7XTzxmt%2FhEMcfyphHJ%2B2HJ1dx6e7NXiMjz2kpyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrFan40q3A9oTnvc%2FKtwDoOu3wg7Hx%2BQlQXEhbKHMSTo2T9bcR8ZrFk03E5D0AOYGVmDjm9oQaOylvOVTf6syJRA5furTbtUOVy7Int52%2BzWHEImJH9Mnoeca5kg2twvvJ2fbJv8uTQRwzWc23xs64ik3Y4sHrxPf7Pw8aRyXC88rtSd8qAUxiITUalPPAVEDH4ZNLaZFwEAyGOLYXhsHrX1c0coYN4pQmnZiWe17KwmFT1ohcrjdZCCWFwU8EzmaItRBYWovQo7fLF0SJxCjbIwliyFwoAP7em3mNPl8K530kCgFT%2FUqHxY9JhvdLXFum5Deg2owfaQLtiCkHoZ5of%2F10brTagb2wNuNm4csKipSOxGYQurJfvWh79cxg7CzfGez0cekg584ZVgpXHbZFF5sXhsqvLl8abbxqxtk192PSAN3CUE41SRV7YZC8NZYi2jwLBpkI7eKGdveQ5csHowelfRCAmoAH7kJDop0H%2BJxyKtY3%2BtHt7xJmBnc%2F1AxN84ER3XYXWGDGVwmGAMIMNPLqvuBq9rZK6W9hF1foyL%2Ba9g%2B6UR4FNAar7yY0BSuSWFpXMCdOhWYdfwCIpveMAA84uwav%2BxrV5lflDjRtTjy33eAu7M5sTCJZzQihayEC23N97AMT83POKUwwtnwywY6pgH%2FfQ8sru5m1rPVa1jQp7JRAfxJCEw%2BKlhcHQm7Y85n6memxe1c4KrG0FBNAuY7BIu5fqFcY9b12fijXB6mKiS0bgSam9o7BykalyJLtLCICNGS5NIF%2BAqwfmKYm1007Gy7l7T6xwuNveV9tfkXpBDCOK8ACvKErgS0lILiSFlrcGTwqvne1j%2BVKGHjtJS3G59jbG0DcYxtwpMBB5kuQ6Osk8SsDLNZ&X-Amz-Signature=6c3ab46d139a25b3d7b1283d354477d5762b440f287d19ee4c95936ec1e0ccd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

