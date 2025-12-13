
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DODSIXK%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD08iWC946J6rT%2B2ZJKKNZm9RKT0Kw7p0VGtMB3UI92FAIhAJYroRusLwkFhATqyZD4lq9k%2Brp%2BL35BpPct0aYIMARgKv8DCBUQABoMNjM3NDIzMTgzODA1IgzKpPG9fuilrvbUNM0q3APXOjNmUrqfqtydqTnLnDG2VzDXqlQvOb2GiYuBSY1DV1SE6hdBNlij3d%2Bh4ixlzqhy2znWBDnLt7ulgK5iEW%2F8noeo4CX0s4uoX3HwEHOQYPWMlnpgC6dDjwHbb4aVB%2BmPdVrldwYzaji6xOMjKo09%2BZOnHaA1tU5mJZ6Sq5txt7PxgumqEQecRBfp5yuPzPb7QOG2pucuZq1CfZhbbW5TdJaRVa4W%2FnIiRS2HRsUO%2FM7GCRX0vfqJDHd3uxco4%2BZoz1tJG66%2BB%2B1hwQDGBloTLV%2FZjhswHjazsbozxCx4RUir9GE%2Bx45Gm0leS1h%2FmE4qw6NwnKkg7gGGN4qV25XRkg%2FCVo3Sv%2FjElhufTnm4fydJi16DC%2B%2B6TRoMWnCBDf4sBJmdxff7RvS5AZuZPPEGmUrOx1dZDmSZLJvXyXaH%2FEi4rSKd3oLIOIpNKJRxn5JnMQCfTzD%2FMMoZfppTpy9aqPvJ9pBB27RHCJ7JW1TdmzmKqZnZPNSf8iW3IU7GgkDpoROtkvmWe5Fmo88e7AlrKH9nLsFhNqMisOR6GAP0BnxF7D1ul9VwBGnuPhi9IY7wMgNG1naTdLSWPLzRYDV7xjo7isz7XwmvalrPob4Ie56AdrEuwDRF5Evt2DCNuPPJBjqkAXEM3CvsZpGDUKiphHtq5%2BJNN%2FQ4ExBT8m4LHEm7bF7J3L8azFzx%2Bdn2AsCDj2NYRihMPUqoPeGR8%2Bh9BocePaI3JmueTH%2BGZZZu%2FLxYixhTcICi7Kwyxty2ViWP8ZjLhL86po%2Fv7eAAhyA5e6hXhvGpEP%2BYf34YIgbPyZgdCrt9wrruTo0RUYENE4p%2Bvfg7QdHd0mgLNQHW4a8nS5OQU%2BrskHhw&X-Amz-Signature=ebc703c5c91ae81810f67686293d28ad1c1f4efd5ee7c2606f7f63a2dbf04973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I6UQLZW%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDn%2B5HPEkhTwtcI%2FJaeN%2FWUijrplEQlk0DVGpxqhULsXAIhAKEyWB5YdGKbFLOVs%2FZ4VOZNzxfeuYujRSlj9EExEvNkKv8DCBUQABoMNjM3NDIzMTgzODA1IgzEbSo%2BLXdBauvVqVcq3AMft2CRBgv45mQaMmwuFfbCPSaOYTHGwryGBhZ10qCqKkNpIFcu8hz3GdUeoFosmi8PvIzRIztD9VCcrBxKCvLcIRuHD4PpaEvZlZq%2Fb8y5rMFZr%2FiBLI%2BxFg5ritSeQfDjEVNZTpBSNu9RME%2FbDfN%2F6UxjeqPl6dBlkh1OeN6TOYYLt%2BVzJw3f7Z7bUQqog3Tt%2F4jh5LxdDlKmxRzW7tVQbpYI8UUvNNw7ttUMcg2ed9Mw1hHdmBzRL5wxsgNGxCopXWQTDLGUjxZUk5ITNMA2dDbx1nSk4VqlWVFpnXo1reG9FUMa8YvMtvyIwlApG%2B%2B6FQNiGWZ6XlpX2OSvho3oT34HdCRx5F8dQ3KAPf%2FECibHdgSrsme3DCfYKZVeucCtlwNlEbggQyvjUNQ96eikNd1S15h2z5QmYfmD%2Bk4NJsD5BeN1PfLwqlGeniwZSfTt9kVDozqOMoaCjgC5DzS1HfFOQZ7RXfNs%2BJwIQp13V7MwBI9ezLPtS6lYE3JjMIk2Vhpy3JxMzX9LZSl4yUpg%2Br4C5T8ZrkOpk1iKXGMQaxap2qFllYuLJUIejHMHOlN%2BEIC3NJH1caf32KqD1bqz7qce7aMdXtcc5dZvQ294tU8wC7n2UFOVPaUWaDCguPPJBjqkAXcsW%2F%2ByVisbC6Rafh8xjjO%2Fjeg4zeSqofoYZ2nGv%2FdG%2FHo1Tcwwaj5ZXB%2F%2BJpIUalWq5L05LnTnBL%2FNOrcKI2lvprVszdAqbsYK1He0rMZjsp9Rucx%2BKKW1BWG%2FDVFu35jGWt2lbwfYGClDcaUYpLB5sKPEvBRovEa76ozHfdAyc5orFWyuJdW4PRFo6Jahgb2cZeGAgdA95dpJJpRwtL0XLvtR&X-Amz-Signature=3485fbbb3a0c530b9f4dbc2782dfc9d1751c55fda38943aa12ee724375d3798e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I6UQLZW%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDn%2B5HPEkhTwtcI%2FJaeN%2FWUijrplEQlk0DVGpxqhULsXAIhAKEyWB5YdGKbFLOVs%2FZ4VOZNzxfeuYujRSlj9EExEvNkKv8DCBUQABoMNjM3NDIzMTgzODA1IgzEbSo%2BLXdBauvVqVcq3AMft2CRBgv45mQaMmwuFfbCPSaOYTHGwryGBhZ10qCqKkNpIFcu8hz3GdUeoFosmi8PvIzRIztD9VCcrBxKCvLcIRuHD4PpaEvZlZq%2Fb8y5rMFZr%2FiBLI%2BxFg5ritSeQfDjEVNZTpBSNu9RME%2FbDfN%2F6UxjeqPl6dBlkh1OeN6TOYYLt%2BVzJw3f7Z7bUQqog3Tt%2F4jh5LxdDlKmxRzW7tVQbpYI8UUvNNw7ttUMcg2ed9Mw1hHdmBzRL5wxsgNGxCopXWQTDLGUjxZUk5ITNMA2dDbx1nSk4VqlWVFpnXo1reG9FUMa8YvMtvyIwlApG%2B%2B6FQNiGWZ6XlpX2OSvho3oT34HdCRx5F8dQ3KAPf%2FECibHdgSrsme3DCfYKZVeucCtlwNlEbggQyvjUNQ96eikNd1S15h2z5QmYfmD%2Bk4NJsD5BeN1PfLwqlGeniwZSfTt9kVDozqOMoaCjgC5DzS1HfFOQZ7RXfNs%2BJwIQp13V7MwBI9ezLPtS6lYE3JjMIk2Vhpy3JxMzX9LZSl4yUpg%2Br4C5T8ZrkOpk1iKXGMQaxap2qFllYuLJUIejHMHOlN%2BEIC3NJH1caf32KqD1bqz7qce7aMdXtcc5dZvQ294tU8wC7n2UFOVPaUWaDCguPPJBjqkAXcsW%2F%2ByVisbC6Rafh8xjjO%2Fjeg4zeSqofoYZ2nGv%2FdG%2FHo1Tcwwaj5ZXB%2F%2BJpIUalWq5L05LnTnBL%2FNOrcKI2lvprVszdAqbsYK1He0rMZjsp9Rucx%2BKKW1BWG%2FDVFu35jGWt2lbwfYGClDcaUYpLB5sKPEvBRovEa76ozHfdAyc5orFWyuJdW4PRFo6Jahgb2cZeGAgdA95dpJJpRwtL0XLvtR&X-Amz-Signature=acc0c8e45d3e86cb20ec1bd9c7e23cbd0472868f8836ca0bdf40fcf96e7fbc60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCAI44VF%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCyjXhSvDkdbBLfZDIKhS9SvuwkpMvmvfdivoVfTIdX5AIhALHW0FUN8mPp6MGLOd3P0tbL1ri48yRj1Ir9nPMyWJfAKv8DCBUQABoMNjM3NDIzMTgzODA1IgxvwsVffXMN1iszvdcq3AO6CMyydUr0Emcg%2FmSoUJQw8Tcrb9mtzDtrtyYQI373suaOuEapp6JKV%2BlvPxXNbtmDLfe3s0CFh78XKdQCJhMw1%2BPqyZPHJSY86O7Ey%2FHRJ6Yh9BbM%2Bh%2FXnrp%2Fc3qZ4Txymkr3Gj71dQ%2BWBYTHhf2SKXFH82pCUnpGdp2sx9NQZx6eQKDc0GHnsgCBk%2Fc8GgIRGvqZh1XFWH3pBuoor98LIpxWNpWpWwLoi859UxpYQ6NDF%2BSUiOk%2Fi37n6nOO3uVmSksGegl%2Bar5VnUnjWPyt1vZVdr9DyZwSTm5jjKTSvYKj7yGZghBN7u4buvkuduS7wiScpv7VP9L1dHy%2FyHpWoR8KfXyDL3z0jtiXDgaIJe3K2VpqB0%2FbyOl32hDVh4Cvh3hnKGZ3ltuYLayMlyL8Sn7f%2B7bzsg8G1TiN2BAr0lNf%2FWY79J4hZsI3rZSiZLqGRYtCpWm7im7%2FN2W3MxPoqRNsJun2wv0joMgRwlJXShUD6wuvk8U2vw2m3yojDTHJ95W0%2FzOhFe57QJ%2BttQp%2F99E9SohJnRUXZHwVMtyiVjqoJI2TYnw2IivHKrfWdqJglf3aNtlKQlerQ3UJTCo7nD%2F%2BYEicTwYKEzWoaS6Y4fJFYVJDs5noOUT2TjDaufPJBjqkAbenIuiAVb19E%2FexHImAbvK0JAsatDtzLHNRlIb1RvtbRE8HOJrz%2FIYqW13%2Fey%2FWU1%2F5VJDpr2KV8X%2Fd%2FDU17PMMH%2BwT1kBx0aevuf19ccQWOeYCaecCWIMOdxUjMXdeCXYLAZXrGf6ADQJlD%2BQzS%2F6%2BGAPNg6pCGjZ2C37ovqUebtQcxe4ztGnQhAQd9NLy%2BWPG%2FVBp7h7Yo6UAW0z%2FVHjF7Sx5&X-Amz-Signature=1cb424cc0a459ff60c000b18dbc1ca8167b9a40b55d9342d82dca6d467c23045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCAI44VF%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCyjXhSvDkdbBLfZDIKhS9SvuwkpMvmvfdivoVfTIdX5AIhALHW0FUN8mPp6MGLOd3P0tbL1ri48yRj1Ir9nPMyWJfAKv8DCBUQABoMNjM3NDIzMTgzODA1IgxvwsVffXMN1iszvdcq3AO6CMyydUr0Emcg%2FmSoUJQw8Tcrb9mtzDtrtyYQI373suaOuEapp6JKV%2BlvPxXNbtmDLfe3s0CFh78XKdQCJhMw1%2BPqyZPHJSY86O7Ey%2FHRJ6Yh9BbM%2Bh%2FXnrp%2Fc3qZ4Txymkr3Gj71dQ%2BWBYTHhf2SKXFH82pCUnpGdp2sx9NQZx6eQKDc0GHnsgCBk%2Fc8GgIRGvqZh1XFWH3pBuoor98LIpxWNpWpWwLoi859UxpYQ6NDF%2BSUiOk%2Fi37n6nOO3uVmSksGegl%2Bar5VnUnjWPyt1vZVdr9DyZwSTm5jjKTSvYKj7yGZghBN7u4buvkuduS7wiScpv7VP9L1dHy%2FyHpWoR8KfXyDL3z0jtiXDgaIJe3K2VpqB0%2FbyOl32hDVh4Cvh3hnKGZ3ltuYLayMlyL8Sn7f%2B7bzsg8G1TiN2BAr0lNf%2FWY79J4hZsI3rZSiZLqGRYtCpWm7im7%2FN2W3MxPoqRNsJun2wv0joMgRwlJXShUD6wuvk8U2vw2m3yojDTHJ95W0%2FzOhFe57QJ%2BttQp%2F99E9SohJnRUXZHwVMtyiVjqoJI2TYnw2IivHKrfWdqJglf3aNtlKQlerQ3UJTCo7nD%2F%2BYEicTwYKEzWoaS6Y4fJFYVJDs5noOUT2TjDaufPJBjqkAbenIuiAVb19E%2FexHImAbvK0JAsatDtzLHNRlIb1RvtbRE8HOJrz%2FIYqW13%2Fey%2FWU1%2F5VJDpr2KV8X%2Fd%2FDU17PMMH%2BwT1kBx0aevuf19ccQWOeYCaecCWIMOdxUjMXdeCXYLAZXrGf6ADQJlD%2BQzS%2F6%2BGAPNg6pCGjZ2C37ovqUebtQcxe4ztGnQhAQd9NLy%2BWPG%2FVBp7h7Yo6UAW0z%2FVHjF7Sx5&X-Amz-Signature=dfd5edccb390dad76e7ca075a90cf254425cad326481bbf84f3bb0968afff293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCAI44VF%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCyjXhSvDkdbBLfZDIKhS9SvuwkpMvmvfdivoVfTIdX5AIhALHW0FUN8mPp6MGLOd3P0tbL1ri48yRj1Ir9nPMyWJfAKv8DCBUQABoMNjM3NDIzMTgzODA1IgxvwsVffXMN1iszvdcq3AO6CMyydUr0Emcg%2FmSoUJQw8Tcrb9mtzDtrtyYQI373suaOuEapp6JKV%2BlvPxXNbtmDLfe3s0CFh78XKdQCJhMw1%2BPqyZPHJSY86O7Ey%2FHRJ6Yh9BbM%2Bh%2FXnrp%2Fc3qZ4Txymkr3Gj71dQ%2BWBYTHhf2SKXFH82pCUnpGdp2sx9NQZx6eQKDc0GHnsgCBk%2Fc8GgIRGvqZh1XFWH3pBuoor98LIpxWNpWpWwLoi859UxpYQ6NDF%2BSUiOk%2Fi37n6nOO3uVmSksGegl%2Bar5VnUnjWPyt1vZVdr9DyZwSTm5jjKTSvYKj7yGZghBN7u4buvkuduS7wiScpv7VP9L1dHy%2FyHpWoR8KfXyDL3z0jtiXDgaIJe3K2VpqB0%2FbyOl32hDVh4Cvh3hnKGZ3ltuYLayMlyL8Sn7f%2B7bzsg8G1TiN2BAr0lNf%2FWY79J4hZsI3rZSiZLqGRYtCpWm7im7%2FN2W3MxPoqRNsJun2wv0joMgRwlJXShUD6wuvk8U2vw2m3yojDTHJ95W0%2FzOhFe57QJ%2BttQp%2F99E9SohJnRUXZHwVMtyiVjqoJI2TYnw2IivHKrfWdqJglf3aNtlKQlerQ3UJTCo7nD%2F%2BYEicTwYKEzWoaS6Y4fJFYVJDs5noOUT2TjDaufPJBjqkAbenIuiAVb19E%2FexHImAbvK0JAsatDtzLHNRlIb1RvtbRE8HOJrz%2FIYqW13%2Fey%2FWU1%2F5VJDpr2KV8X%2Fd%2FDU17PMMH%2BwT1kBx0aevuf19ccQWOeYCaecCWIMOdxUjMXdeCXYLAZXrGf6ADQJlD%2BQzS%2F6%2BGAPNg6pCGjZ2C37ovqUebtQcxe4ztGnQhAQd9NLy%2BWPG%2FVBp7h7Yo6UAW0z%2FVHjF7Sx5&X-Amz-Signature=8979d4662b53ef46e7cad61555a409ac9056b3b4e2b360654d8743077c5e553a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCAI44VF%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCyjXhSvDkdbBLfZDIKhS9SvuwkpMvmvfdivoVfTIdX5AIhALHW0FUN8mPp6MGLOd3P0tbL1ri48yRj1Ir9nPMyWJfAKv8DCBUQABoMNjM3NDIzMTgzODA1IgxvwsVffXMN1iszvdcq3AO6CMyydUr0Emcg%2FmSoUJQw8Tcrb9mtzDtrtyYQI373suaOuEapp6JKV%2BlvPxXNbtmDLfe3s0CFh78XKdQCJhMw1%2BPqyZPHJSY86O7Ey%2FHRJ6Yh9BbM%2Bh%2FXnrp%2Fc3qZ4Txymkr3Gj71dQ%2BWBYTHhf2SKXFH82pCUnpGdp2sx9NQZx6eQKDc0GHnsgCBk%2Fc8GgIRGvqZh1XFWH3pBuoor98LIpxWNpWpWwLoi859UxpYQ6NDF%2BSUiOk%2Fi37n6nOO3uVmSksGegl%2Bar5VnUnjWPyt1vZVdr9DyZwSTm5jjKTSvYKj7yGZghBN7u4buvkuduS7wiScpv7VP9L1dHy%2FyHpWoR8KfXyDL3z0jtiXDgaIJe3K2VpqB0%2FbyOl32hDVh4Cvh3hnKGZ3ltuYLayMlyL8Sn7f%2B7bzsg8G1TiN2BAr0lNf%2FWY79J4hZsI3rZSiZLqGRYtCpWm7im7%2FN2W3MxPoqRNsJun2wv0joMgRwlJXShUD6wuvk8U2vw2m3yojDTHJ95W0%2FzOhFe57QJ%2BttQp%2F99E9SohJnRUXZHwVMtyiVjqoJI2TYnw2IivHKrfWdqJglf3aNtlKQlerQ3UJTCo7nD%2F%2BYEicTwYKEzWoaS6Y4fJFYVJDs5noOUT2TjDaufPJBjqkAbenIuiAVb19E%2FexHImAbvK0JAsatDtzLHNRlIb1RvtbRE8HOJrz%2FIYqW13%2Fey%2FWU1%2F5VJDpr2KV8X%2Fd%2FDU17PMMH%2BwT1kBx0aevuf19ccQWOeYCaecCWIMOdxUjMXdeCXYLAZXrGf6ADQJlD%2BQzS%2F6%2BGAPNg6pCGjZ2C37ovqUebtQcxe4ztGnQhAQd9NLy%2BWPG%2FVBp7h7Yo6UAW0z%2FVHjF7Sx5&X-Amz-Signature=369811340c4a9545a3701619f0cef67033fd6a932ea07eaa2b97fa395f1d93eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCAI44VF%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCyjXhSvDkdbBLfZDIKhS9SvuwkpMvmvfdivoVfTIdX5AIhALHW0FUN8mPp6MGLOd3P0tbL1ri48yRj1Ir9nPMyWJfAKv8DCBUQABoMNjM3NDIzMTgzODA1IgxvwsVffXMN1iszvdcq3AO6CMyydUr0Emcg%2FmSoUJQw8Tcrb9mtzDtrtyYQI373suaOuEapp6JKV%2BlvPxXNbtmDLfe3s0CFh78XKdQCJhMw1%2BPqyZPHJSY86O7Ey%2FHRJ6Yh9BbM%2Bh%2FXnrp%2Fc3qZ4Txymkr3Gj71dQ%2BWBYTHhf2SKXFH82pCUnpGdp2sx9NQZx6eQKDc0GHnsgCBk%2Fc8GgIRGvqZh1XFWH3pBuoor98LIpxWNpWpWwLoi859UxpYQ6NDF%2BSUiOk%2Fi37n6nOO3uVmSksGegl%2Bar5VnUnjWPyt1vZVdr9DyZwSTm5jjKTSvYKj7yGZghBN7u4buvkuduS7wiScpv7VP9L1dHy%2FyHpWoR8KfXyDL3z0jtiXDgaIJe3K2VpqB0%2FbyOl32hDVh4Cvh3hnKGZ3ltuYLayMlyL8Sn7f%2B7bzsg8G1TiN2BAr0lNf%2FWY79J4hZsI3rZSiZLqGRYtCpWm7im7%2FN2W3MxPoqRNsJun2wv0joMgRwlJXShUD6wuvk8U2vw2m3yojDTHJ95W0%2FzOhFe57QJ%2BttQp%2F99E9SohJnRUXZHwVMtyiVjqoJI2TYnw2IivHKrfWdqJglf3aNtlKQlerQ3UJTCo7nD%2F%2BYEicTwYKEzWoaS6Y4fJFYVJDs5noOUT2TjDaufPJBjqkAbenIuiAVb19E%2FexHImAbvK0JAsatDtzLHNRlIb1RvtbRE8HOJrz%2FIYqW13%2Fey%2FWU1%2F5VJDpr2KV8X%2Fd%2FDU17PMMH%2BwT1kBx0aevuf19ccQWOeYCaecCWIMOdxUjMXdeCXYLAZXrGf6ADQJlD%2BQzS%2F6%2BGAPNg6pCGjZ2C37ovqUebtQcxe4ztGnQhAQd9NLy%2BWPG%2FVBp7h7Yo6UAW0z%2FVHjF7Sx5&X-Amz-Signature=e6ae1aa74843f30a5a427a996af1cc54c8496e207a5ab68e53d17c6925e1711f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCAI44VF%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCyjXhSvDkdbBLfZDIKhS9SvuwkpMvmvfdivoVfTIdX5AIhALHW0FUN8mPp6MGLOd3P0tbL1ri48yRj1Ir9nPMyWJfAKv8DCBUQABoMNjM3NDIzMTgzODA1IgxvwsVffXMN1iszvdcq3AO6CMyydUr0Emcg%2FmSoUJQw8Tcrb9mtzDtrtyYQI373suaOuEapp6JKV%2BlvPxXNbtmDLfe3s0CFh78XKdQCJhMw1%2BPqyZPHJSY86O7Ey%2FHRJ6Yh9BbM%2Bh%2FXnrp%2Fc3qZ4Txymkr3Gj71dQ%2BWBYTHhf2SKXFH82pCUnpGdp2sx9NQZx6eQKDc0GHnsgCBk%2Fc8GgIRGvqZh1XFWH3pBuoor98LIpxWNpWpWwLoi859UxpYQ6NDF%2BSUiOk%2Fi37n6nOO3uVmSksGegl%2Bar5VnUnjWPyt1vZVdr9DyZwSTm5jjKTSvYKj7yGZghBN7u4buvkuduS7wiScpv7VP9L1dHy%2FyHpWoR8KfXyDL3z0jtiXDgaIJe3K2VpqB0%2FbyOl32hDVh4Cvh3hnKGZ3ltuYLayMlyL8Sn7f%2B7bzsg8G1TiN2BAr0lNf%2FWY79J4hZsI3rZSiZLqGRYtCpWm7im7%2FN2W3MxPoqRNsJun2wv0joMgRwlJXShUD6wuvk8U2vw2m3yojDTHJ95W0%2FzOhFe57QJ%2BttQp%2F99E9SohJnRUXZHwVMtyiVjqoJI2TYnw2IivHKrfWdqJglf3aNtlKQlerQ3UJTCo7nD%2F%2BYEicTwYKEzWoaS6Y4fJFYVJDs5noOUT2TjDaufPJBjqkAbenIuiAVb19E%2FexHImAbvK0JAsatDtzLHNRlIb1RvtbRE8HOJrz%2FIYqW13%2Fey%2FWU1%2F5VJDpr2KV8X%2Fd%2FDU17PMMH%2BwT1kBx0aevuf19ccQWOeYCaecCWIMOdxUjMXdeCXYLAZXrGf6ADQJlD%2BQzS%2F6%2BGAPNg6pCGjZ2C37ovqUebtQcxe4ztGnQhAQd9NLy%2BWPG%2FVBp7h7Yo6UAW0z%2FVHjF7Sx5&X-Amz-Signature=0768cd79b4b41f16b5e7ab0352047d287f398ba838b73849c925502f3afd8be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCAI44VF%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCyjXhSvDkdbBLfZDIKhS9SvuwkpMvmvfdivoVfTIdX5AIhALHW0FUN8mPp6MGLOd3P0tbL1ri48yRj1Ir9nPMyWJfAKv8DCBUQABoMNjM3NDIzMTgzODA1IgxvwsVffXMN1iszvdcq3AO6CMyydUr0Emcg%2FmSoUJQw8Tcrb9mtzDtrtyYQI373suaOuEapp6JKV%2BlvPxXNbtmDLfe3s0CFh78XKdQCJhMw1%2BPqyZPHJSY86O7Ey%2FHRJ6Yh9BbM%2Bh%2FXnrp%2Fc3qZ4Txymkr3Gj71dQ%2BWBYTHhf2SKXFH82pCUnpGdp2sx9NQZx6eQKDc0GHnsgCBk%2Fc8GgIRGvqZh1XFWH3pBuoor98LIpxWNpWpWwLoi859UxpYQ6NDF%2BSUiOk%2Fi37n6nOO3uVmSksGegl%2Bar5VnUnjWPyt1vZVdr9DyZwSTm5jjKTSvYKj7yGZghBN7u4buvkuduS7wiScpv7VP9L1dHy%2FyHpWoR8KfXyDL3z0jtiXDgaIJe3K2VpqB0%2FbyOl32hDVh4Cvh3hnKGZ3ltuYLayMlyL8Sn7f%2B7bzsg8G1TiN2BAr0lNf%2FWY79J4hZsI3rZSiZLqGRYtCpWm7im7%2FN2W3MxPoqRNsJun2wv0joMgRwlJXShUD6wuvk8U2vw2m3yojDTHJ95W0%2FzOhFe57QJ%2BttQp%2F99E9SohJnRUXZHwVMtyiVjqoJI2TYnw2IivHKrfWdqJglf3aNtlKQlerQ3UJTCo7nD%2F%2BYEicTwYKEzWoaS6Y4fJFYVJDs5noOUT2TjDaufPJBjqkAbenIuiAVb19E%2FexHImAbvK0JAsatDtzLHNRlIb1RvtbRE8HOJrz%2FIYqW13%2Fey%2FWU1%2F5VJDpr2KV8X%2Fd%2FDU17PMMH%2BwT1kBx0aevuf19ccQWOeYCaecCWIMOdxUjMXdeCXYLAZXrGf6ADQJlD%2BQzS%2F6%2BGAPNg6pCGjZ2C37ovqUebtQcxe4ztGnQhAQd9NLy%2BWPG%2FVBp7h7Yo6UAW0z%2FVHjF7Sx5&X-Amz-Signature=e509f492bfa46464bb8d1df03362f15526cf74263ecaa9ea1cdb54a239f11404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPYTXQSC%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDOjLxD8QEfJwVpFtCusnHUi0%2Bg704Hoeq7%2Bv%2B8V6QZ1gIgFqKVsWKuwo38KGWBua8OTyb2GYY2IzCbs1rfR29CJBIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDByx9KPCCGA9%2FOkhTyrcA6PiMNuyhD%2FiwYIQG9217iZGBUxP0nOxFILLK8n7T3av4Sg6STl2jiKiUcWoemfLDVyJa2BWEQYMhl2BfUNdg73ECgfDMohmj9ryNks1cEkp3Eg6%2Fpq0YtFpnXZ7UKTI4Wl02KUw4oM6SoRj1tKZoIv5n1GbatYB4wMFj0T8JIjUswIBe6u32y6cZwr2YsJuA0bw4jcvjuByAaTnLet5EDvzAPHAbXGXIs6bYO%2FNWScgqkITdA4XVVLyF8d%2FUT7A%2Bmhlsff%2BkRUl4F9H5X71c5LPChzbT1F5VMGlKb5%2Bh0Ps0eqAAydMPuMoDduS17xzBviNf2PS9CRHfpDE8O0uR%2BtjP%2BO64f1%2BzvL3XhREHpN%2BK8yUXGRV4quiuAJk97QeLhMtjNdfGEQpIJynrJul6PfaPeWssOezFI0ufRBwgyWcuBxIMv0hbZbb%2FCzGnNHcMi6KcJz7JR2qC2jP8RqfsT9nygpu7MYnuSzb%2FMC9ml2uUittsu4ho6qLzzLggNX6od79x7ss77lwgYwBFH32UsWcNz%2FKOOx3xQVzKGF1cGzhfBzoq4XJewbyWmkU0iROD6YuImMdLOKG1jlNOe39AWatvxbyofYt%2FitnDZB7Gi66RxgsA%2BUFgw%2BXZvkJMLK488kGOqUBruhRjITICQcZYUrEGHruqC8iOGwSX7zgtag69aMn36HGYIeJY2mcI%2FgwMA6x9n87MYudJounk3g5M455VKgEUkv6STmxIYzT6z87%2Fb1Rvp61VVjCYWQzFZyRxVc3yndfdbOivHkiem0Q8pKCLzyTqzru%2FegdGDTiNQ%2BH8dxGCDvKD69pSuF%2BD6XaneADfntn30Z1dMgPHaRdzuVDxLBV8RyR1AAz&X-Amz-Signature=7cd4fa1f60073935f0e3148fcdc3c7465850249758198bc48f612e929f5a7fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPYTXQSC%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDOjLxD8QEfJwVpFtCusnHUi0%2Bg704Hoeq7%2Bv%2B8V6QZ1gIgFqKVsWKuwo38KGWBua8OTyb2GYY2IzCbs1rfR29CJBIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDByx9KPCCGA9%2FOkhTyrcA6PiMNuyhD%2FiwYIQG9217iZGBUxP0nOxFILLK8n7T3av4Sg6STl2jiKiUcWoemfLDVyJa2BWEQYMhl2BfUNdg73ECgfDMohmj9ryNks1cEkp3Eg6%2Fpq0YtFpnXZ7UKTI4Wl02KUw4oM6SoRj1tKZoIv5n1GbatYB4wMFj0T8JIjUswIBe6u32y6cZwr2YsJuA0bw4jcvjuByAaTnLet5EDvzAPHAbXGXIs6bYO%2FNWScgqkITdA4XVVLyF8d%2FUT7A%2Bmhlsff%2BkRUl4F9H5X71c5LPChzbT1F5VMGlKb5%2Bh0Ps0eqAAydMPuMoDduS17xzBviNf2PS9CRHfpDE8O0uR%2BtjP%2BO64f1%2BzvL3XhREHpN%2BK8yUXGRV4quiuAJk97QeLhMtjNdfGEQpIJynrJul6PfaPeWssOezFI0ufRBwgyWcuBxIMv0hbZbb%2FCzGnNHcMi6KcJz7JR2qC2jP8RqfsT9nygpu7MYnuSzb%2FMC9ml2uUittsu4ho6qLzzLggNX6od79x7ss77lwgYwBFH32UsWcNz%2FKOOx3xQVzKGF1cGzhfBzoq4XJewbyWmkU0iROD6YuImMdLOKG1jlNOe39AWatvxbyofYt%2FitnDZB7Gi66RxgsA%2BUFgw%2BXZvkJMLK488kGOqUBruhRjITICQcZYUrEGHruqC8iOGwSX7zgtag69aMn36HGYIeJY2mcI%2FgwMA6x9n87MYudJounk3g5M455VKgEUkv6STmxIYzT6z87%2Fb1Rvp61VVjCYWQzFZyRxVc3yndfdbOivHkiem0Q8pKCLzyTqzru%2FegdGDTiNQ%2BH8dxGCDvKD69pSuF%2BD6XaneADfntn30Z1dMgPHaRdzuVDxLBV8RyR1AAz&X-Amz-Signature=6ee6d0a73d3a43252f31b7a44601145ac297ab909900e7f83f77632c53a0c099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPYTXQSC%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDOjLxD8QEfJwVpFtCusnHUi0%2Bg704Hoeq7%2Bv%2B8V6QZ1gIgFqKVsWKuwo38KGWBua8OTyb2GYY2IzCbs1rfR29CJBIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDByx9KPCCGA9%2FOkhTyrcA6PiMNuyhD%2FiwYIQG9217iZGBUxP0nOxFILLK8n7T3av4Sg6STl2jiKiUcWoemfLDVyJa2BWEQYMhl2BfUNdg73ECgfDMohmj9ryNks1cEkp3Eg6%2Fpq0YtFpnXZ7UKTI4Wl02KUw4oM6SoRj1tKZoIv5n1GbatYB4wMFj0T8JIjUswIBe6u32y6cZwr2YsJuA0bw4jcvjuByAaTnLet5EDvzAPHAbXGXIs6bYO%2FNWScgqkITdA4XVVLyF8d%2FUT7A%2Bmhlsff%2BkRUl4F9H5X71c5LPChzbT1F5VMGlKb5%2Bh0Ps0eqAAydMPuMoDduS17xzBviNf2PS9CRHfpDE8O0uR%2BtjP%2BO64f1%2BzvL3XhREHpN%2BK8yUXGRV4quiuAJk97QeLhMtjNdfGEQpIJynrJul6PfaPeWssOezFI0ufRBwgyWcuBxIMv0hbZbb%2FCzGnNHcMi6KcJz7JR2qC2jP8RqfsT9nygpu7MYnuSzb%2FMC9ml2uUittsu4ho6qLzzLggNX6od79x7ss77lwgYwBFH32UsWcNz%2FKOOx3xQVzKGF1cGzhfBzoq4XJewbyWmkU0iROD6YuImMdLOKG1jlNOe39AWatvxbyofYt%2FitnDZB7Gi66RxgsA%2BUFgw%2BXZvkJMLK488kGOqUBruhRjITICQcZYUrEGHruqC8iOGwSX7zgtag69aMn36HGYIeJY2mcI%2FgwMA6x9n87MYudJounk3g5M455VKgEUkv6STmxIYzT6z87%2Fb1Rvp61VVjCYWQzFZyRxVc3yndfdbOivHkiem0Q8pKCLzyTqzru%2FegdGDTiNQ%2BH8dxGCDvKD69pSuF%2BD6XaneADfntn30Z1dMgPHaRdzuVDxLBV8RyR1AAz&X-Amz-Signature=23a1c5e8fff0dc100d2e7199b75540fb17f3131b31cc2a1d3d405dadc8c4ae00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPYTXQSC%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDOjLxD8QEfJwVpFtCusnHUi0%2Bg704Hoeq7%2Bv%2B8V6QZ1gIgFqKVsWKuwo38KGWBua8OTyb2GYY2IzCbs1rfR29CJBIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDByx9KPCCGA9%2FOkhTyrcA6PiMNuyhD%2FiwYIQG9217iZGBUxP0nOxFILLK8n7T3av4Sg6STl2jiKiUcWoemfLDVyJa2BWEQYMhl2BfUNdg73ECgfDMohmj9ryNks1cEkp3Eg6%2Fpq0YtFpnXZ7UKTI4Wl02KUw4oM6SoRj1tKZoIv5n1GbatYB4wMFj0T8JIjUswIBe6u32y6cZwr2YsJuA0bw4jcvjuByAaTnLet5EDvzAPHAbXGXIs6bYO%2FNWScgqkITdA4XVVLyF8d%2FUT7A%2Bmhlsff%2BkRUl4F9H5X71c5LPChzbT1F5VMGlKb5%2Bh0Ps0eqAAydMPuMoDduS17xzBviNf2PS9CRHfpDE8O0uR%2BtjP%2BO64f1%2BzvL3XhREHpN%2BK8yUXGRV4quiuAJk97QeLhMtjNdfGEQpIJynrJul6PfaPeWssOezFI0ufRBwgyWcuBxIMv0hbZbb%2FCzGnNHcMi6KcJz7JR2qC2jP8RqfsT9nygpu7MYnuSzb%2FMC9ml2uUittsu4ho6qLzzLggNX6od79x7ss77lwgYwBFH32UsWcNz%2FKOOx3xQVzKGF1cGzhfBzoq4XJewbyWmkU0iROD6YuImMdLOKG1jlNOe39AWatvxbyofYt%2FitnDZB7Gi66RxgsA%2BUFgw%2BXZvkJMLK488kGOqUBruhRjITICQcZYUrEGHruqC8iOGwSX7zgtag69aMn36HGYIeJY2mcI%2FgwMA6x9n87MYudJounk3g5M455VKgEUkv6STmxIYzT6z87%2Fb1Rvp61VVjCYWQzFZyRxVc3yndfdbOivHkiem0Q8pKCLzyTqzru%2FegdGDTiNQ%2BH8dxGCDvKD69pSuF%2BD6XaneADfntn30Z1dMgPHaRdzuVDxLBV8RyR1AAz&X-Amz-Signature=95a17df96738cdc1bf498219d1964cc3216aa0037de7f04fe57061e7b47c5b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPYTXQSC%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDOjLxD8QEfJwVpFtCusnHUi0%2Bg704Hoeq7%2Bv%2B8V6QZ1gIgFqKVsWKuwo38KGWBua8OTyb2GYY2IzCbs1rfR29CJBIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDByx9KPCCGA9%2FOkhTyrcA6PiMNuyhD%2FiwYIQG9217iZGBUxP0nOxFILLK8n7T3av4Sg6STl2jiKiUcWoemfLDVyJa2BWEQYMhl2BfUNdg73ECgfDMohmj9ryNks1cEkp3Eg6%2Fpq0YtFpnXZ7UKTI4Wl02KUw4oM6SoRj1tKZoIv5n1GbatYB4wMFj0T8JIjUswIBe6u32y6cZwr2YsJuA0bw4jcvjuByAaTnLet5EDvzAPHAbXGXIs6bYO%2FNWScgqkITdA4XVVLyF8d%2FUT7A%2Bmhlsff%2BkRUl4F9H5X71c5LPChzbT1F5VMGlKb5%2Bh0Ps0eqAAydMPuMoDduS17xzBviNf2PS9CRHfpDE8O0uR%2BtjP%2BO64f1%2BzvL3XhREHpN%2BK8yUXGRV4quiuAJk97QeLhMtjNdfGEQpIJynrJul6PfaPeWssOezFI0ufRBwgyWcuBxIMv0hbZbb%2FCzGnNHcMi6KcJz7JR2qC2jP8RqfsT9nygpu7MYnuSzb%2FMC9ml2uUittsu4ho6qLzzLggNX6od79x7ss77lwgYwBFH32UsWcNz%2FKOOx3xQVzKGF1cGzhfBzoq4XJewbyWmkU0iROD6YuImMdLOKG1jlNOe39AWatvxbyofYt%2FitnDZB7Gi66RxgsA%2BUFgw%2BXZvkJMLK488kGOqUBruhRjITICQcZYUrEGHruqC8iOGwSX7zgtag69aMn36HGYIeJY2mcI%2FgwMA6x9n87MYudJounk3g5M455VKgEUkv6STmxIYzT6z87%2Fb1Rvp61VVjCYWQzFZyRxVc3yndfdbOivHkiem0Q8pKCLzyTqzru%2FegdGDTiNQ%2BH8dxGCDvKD69pSuF%2BD6XaneADfntn30Z1dMgPHaRdzuVDxLBV8RyR1AAz&X-Amz-Signature=110b7cb50eb3b536a5b11eab1c316de4ac28101a8f33dc8c23854d12c8a948bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OVZVDOP%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIBSDn1dHIAEJ7Nsfb4FT7T0YozYtdjxA5lmH8tPJhIIrAiBFKQUJUivmQAKPX7ch8NgtnH7eh0hwkSMTp3S5mlbE8Sr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMut7o1Wa%2BxyMooasVKtwDtNWLQXoEdP4Kq3ARUh%2FnbVXwDv7mlxMOzWyWlkr2U5u6DY20QBZuz5JfDyN7sy7bIp2xsLnTEivCcHdEpdRrRSr1F9sYJpfMjKm21EsIj8jCNGTbrKtAzqRoikT1eEjK8U2%2B1LC20C4eKXTAHpPrtIYBpT6L1Udf5YQ3XW3j2OluZUNYaposLtA2oXw92huleOf0wcFc0vJ1ZVamgaWgF3o%2BS%2BbaWFZ5W9l7ajoBvNTjjjjNIQvjSrppb9D1%2Flf%2BpFFjMP%2Bzvbw%2FgHnVJXEiS%2FAzzM%2Fqivjbd5CEttXJLeZ5sUBrQpwAdwzKxjIiSkzQctUkB9e3I5YNbPzJNTGbnDQbAo7Yf6L0U5x2K%2BH%2Bajv2L6059KDPpbEJvNwi8LvSmXIHWdgXHinqMUlATKN21cz8dhv0DRmZf%2FOCNQ6RtDybq%2BOQUe8SQDg%2Bhoe9MJcFsZONMCjhWeC3rdV0PL3pAP3cmUqNGl6hJ639xk7NuhBqV68PwcAYOjKvcmS44Wss2uD4wqE4oxwWO8mgFL6mr1BeRQxWINUWNRBh9ZdYRwWqdzAsRgTYfC2TeRQ0TsQjZbj5eDSxBaV71XbNRLklCJKneT%2FwtiTSZDtI9r3dqreAIpfnzKq18ZY1FE0w57fzyQY6pgHe8KYCsazAx5%2BnJSaflyF3DR2Y5HzfQGfXvPbKDhb4zt9D3dtgynP7aHT8eBIzKkfIpOGIvdz1vW6nyprHiogsWb8WMNbp2%2BVf%2FlRyqkqxLX2KHMO%2BadCIZiSFs6CtQ97N13WJqoLeVa25%2BhU1UFdaMmhzjHXOKDR%2BZXeT4uNGct%2BTZFHvzxqyf0kls%2FYKu6foKhdhZ4F8DrLF9OovLNZBg01inON4&X-Amz-Signature=8ebb8900c2394ae9673e362caad039f15c7c4f7271458a86990ebdba96fe4cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OVZVDOP%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIBSDn1dHIAEJ7Nsfb4FT7T0YozYtdjxA5lmH8tPJhIIrAiBFKQUJUivmQAKPX7ch8NgtnH7eh0hwkSMTp3S5mlbE8Sr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMut7o1Wa%2BxyMooasVKtwDtNWLQXoEdP4Kq3ARUh%2FnbVXwDv7mlxMOzWyWlkr2U5u6DY20QBZuz5JfDyN7sy7bIp2xsLnTEivCcHdEpdRrRSr1F9sYJpfMjKm21EsIj8jCNGTbrKtAzqRoikT1eEjK8U2%2B1LC20C4eKXTAHpPrtIYBpT6L1Udf5YQ3XW3j2OluZUNYaposLtA2oXw92huleOf0wcFc0vJ1ZVamgaWgF3o%2BS%2BbaWFZ5W9l7ajoBvNTjjjjNIQvjSrppb9D1%2Flf%2BpFFjMP%2Bzvbw%2FgHnVJXEiS%2FAzzM%2Fqivjbd5CEttXJLeZ5sUBrQpwAdwzKxjIiSkzQctUkB9e3I5YNbPzJNTGbnDQbAo7Yf6L0U5x2K%2BH%2Bajv2L6059KDPpbEJvNwi8LvSmXIHWdgXHinqMUlATKN21cz8dhv0DRmZf%2FOCNQ6RtDybq%2BOQUe8SQDg%2Bhoe9MJcFsZONMCjhWeC3rdV0PL3pAP3cmUqNGl6hJ639xk7NuhBqV68PwcAYOjKvcmS44Wss2uD4wqE4oxwWO8mgFL6mr1BeRQxWINUWNRBh9ZdYRwWqdzAsRgTYfC2TeRQ0TsQjZbj5eDSxBaV71XbNRLklCJKneT%2FwtiTSZDtI9r3dqreAIpfnzKq18ZY1FE0w57fzyQY6pgHe8KYCsazAx5%2BnJSaflyF3DR2Y5HzfQGfXvPbKDhb4zt9D3dtgynP7aHT8eBIzKkfIpOGIvdz1vW6nyprHiogsWb8WMNbp2%2BVf%2FlRyqkqxLX2KHMO%2BadCIZiSFs6CtQ97N13WJqoLeVa25%2BhU1UFdaMmhzjHXOKDR%2BZXeT4uNGct%2BTZFHvzxqyf0kls%2FYKu6foKhdhZ4F8DrLF9OovLNZBg01inON4&X-Amz-Signature=4764b6e7212ff2df67d449a7cb06363462d2750e50552fa79fc0934a5f1fefb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OVZVDOP%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIBSDn1dHIAEJ7Nsfb4FT7T0YozYtdjxA5lmH8tPJhIIrAiBFKQUJUivmQAKPX7ch8NgtnH7eh0hwkSMTp3S5mlbE8Sr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMut7o1Wa%2BxyMooasVKtwDtNWLQXoEdP4Kq3ARUh%2FnbVXwDv7mlxMOzWyWlkr2U5u6DY20QBZuz5JfDyN7sy7bIp2xsLnTEivCcHdEpdRrRSr1F9sYJpfMjKm21EsIj8jCNGTbrKtAzqRoikT1eEjK8U2%2B1LC20C4eKXTAHpPrtIYBpT6L1Udf5YQ3XW3j2OluZUNYaposLtA2oXw92huleOf0wcFc0vJ1ZVamgaWgF3o%2BS%2BbaWFZ5W9l7ajoBvNTjjjjNIQvjSrppb9D1%2Flf%2BpFFjMP%2Bzvbw%2FgHnVJXEiS%2FAzzM%2Fqivjbd5CEttXJLeZ5sUBrQpwAdwzKxjIiSkzQctUkB9e3I5YNbPzJNTGbnDQbAo7Yf6L0U5x2K%2BH%2Bajv2L6059KDPpbEJvNwi8LvSmXIHWdgXHinqMUlATKN21cz8dhv0DRmZf%2FOCNQ6RtDybq%2BOQUe8SQDg%2Bhoe9MJcFsZONMCjhWeC3rdV0PL3pAP3cmUqNGl6hJ639xk7NuhBqV68PwcAYOjKvcmS44Wss2uD4wqE4oxwWO8mgFL6mr1BeRQxWINUWNRBh9ZdYRwWqdzAsRgTYfC2TeRQ0TsQjZbj5eDSxBaV71XbNRLklCJKneT%2FwtiTSZDtI9r3dqreAIpfnzKq18ZY1FE0w57fzyQY6pgHe8KYCsazAx5%2BnJSaflyF3DR2Y5HzfQGfXvPbKDhb4zt9D3dtgynP7aHT8eBIzKkfIpOGIvdz1vW6nyprHiogsWb8WMNbp2%2BVf%2FlRyqkqxLX2KHMO%2BadCIZiSFs6CtQ97N13WJqoLeVa25%2BhU1UFdaMmhzjHXOKDR%2BZXeT4uNGct%2BTZFHvzxqyf0kls%2FYKu6foKhdhZ4F8DrLF9OovLNZBg01inON4&X-Amz-Signature=251f7fa8cee97f13cd9b740583ec8f574ec82908766dfb8de7ae76d61df7fe2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYE27XX%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCnVdFNQyUc9GHJ6cSdrS05666AQU0BaeOY1taP7QPhRAIgCPIoEOXl1dLJe675uc%2Foe3dZTJtw5VhG68N1rfJs5dUq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDId3XfGj3AXfzJv96CrcA8vpO1064dXRSzxLnWGaqiRresGdpDIcYkJGhuF1Ir8URjdag99MzQEr2PSt8FDrAIKYBw%2FPgixoLTC%2FFZuwKqbXLj6N5q7bS8oX9Kl8VhN5eE%2FWrPFNt1iUeX2dnl9Tx1VJLhNeoLIQhgBN59k%2Frdz8O1vmxlxKI0qrFp3DQNLe1%2FZN5VNgrYxCZyeYCWxlXru%2FJxBmj3Q1ZJSnCf561%2Fdpsy87zUIk5QkA02y1X6Lcz%2FZ6nNRjEsgo6fXvitEMd6tGUmMeUT33ko5sNYLtxJTqJ5LiQ%2BvjuUhNthj6bN2y3qTuI6lHkAeJy38UqUKuwmgB9ovzZoeLdN2EjMeNk7BmkZnyZRnUPUbm0qOaI6h9rXMgZvCuCvZHd1B8ndompYe3JsGMMpxTdYjptYUZyPwNeGsZy6ix20KOt13%2FObRlmQh32MMWXyZBxV8B9L3kVq4RHzE9YF3FEcbLIgEykOFciRWIkorgulwID1rQGqgeTv5ecmHqyDou%2FQycvq88vF6dhjQWxrDipZt77UdNV6QnBPJEI6dGX%2F3hnpt12Koi7q9HCAyL5xxsomqRpjqawyktXHpOL1rJhyi%2Fbt2JMhZahacnrsU6i9%2F1CwYJYDxDvPZFqKzVtQhoIBrSMLe388kGOqUB08aomEs7VyYCIC4G%2FNoWeKvJVNLKe3R%2B%2BRjCqmbKrSGZ7LxveAFodRDyk08R615XacidK%2FGrjogBlreP0RjNmvtV6as%2F6ztZ%2F3i9BaexH03XrdhJ1Ws9vRRT5MhIK%2FJ4ixqGqaARplg7VQE5NFpWxM8GGjS2gXcPu5%2FQKtHZ4pvFubrTq8jf4SFIjBWPz4hR1s8lo2xWx1vfC19%2FVF8fvfNcAh2b&X-Amz-Signature=ed3d9b0105b1202463896e3447d6379b6fa2dd3ca93b328ceace8233c2bd650e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RYE27XX%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCnVdFNQyUc9GHJ6cSdrS05666AQU0BaeOY1taP7QPhRAIgCPIoEOXl1dLJe675uc%2Foe3dZTJtw5VhG68N1rfJs5dUq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDId3XfGj3AXfzJv96CrcA8vpO1064dXRSzxLnWGaqiRresGdpDIcYkJGhuF1Ir8URjdag99MzQEr2PSt8FDrAIKYBw%2FPgixoLTC%2FFZuwKqbXLj6N5q7bS8oX9Kl8VhN5eE%2FWrPFNt1iUeX2dnl9Tx1VJLhNeoLIQhgBN59k%2Frdz8O1vmxlxKI0qrFp3DQNLe1%2FZN5VNgrYxCZyeYCWxlXru%2FJxBmj3Q1ZJSnCf561%2Fdpsy87zUIk5QkA02y1X6Lcz%2FZ6nNRjEsgo6fXvitEMd6tGUmMeUT33ko5sNYLtxJTqJ5LiQ%2BvjuUhNthj6bN2y3qTuI6lHkAeJy38UqUKuwmgB9ovzZoeLdN2EjMeNk7BmkZnyZRnUPUbm0qOaI6h9rXMgZvCuCvZHd1B8ndompYe3JsGMMpxTdYjptYUZyPwNeGsZy6ix20KOt13%2FObRlmQh32MMWXyZBxV8B9L3kVq4RHzE9YF3FEcbLIgEykOFciRWIkorgulwID1rQGqgeTv5ecmHqyDou%2FQycvq88vF6dhjQWxrDipZt77UdNV6QnBPJEI6dGX%2F3hnpt12Koi7q9HCAyL5xxsomqRpjqawyktXHpOL1rJhyi%2Fbt2JMhZahacnrsU6i9%2F1CwYJYDxDvPZFqKzVtQhoIBrSMLe388kGOqUB08aomEs7VyYCIC4G%2FNoWeKvJVNLKe3R%2B%2BRjCqmbKrSGZ7LxveAFodRDyk08R615XacidK%2FGrjogBlreP0RjNmvtV6as%2F6ztZ%2F3i9BaexH03XrdhJ1Ws9vRRT5MhIK%2FJ4ixqGqaARplg7VQE5NFpWxM8GGjS2gXcPu5%2FQKtHZ4pvFubrTq8jf4SFIjBWPz4hR1s8lo2xWx1vfC19%2FVF8fvfNcAh2b&X-Amz-Signature=e35faf97f9029190f183455af3b4657976729b28e906d82a748d72c29cb400db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXU2OPPV%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIAM6uVSLSrVSJRtFOjaO6JmPQQgqgAKqouav7s0KY3soAiEAsORLYSnymtMev%2F5ilaI%2FnqffKXXy5qrGBscyWnUdIcUq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJQe5lPN4%2B8h0YFu9SrcA0mbbBKu%2BbJhzz0oD30S29eEFlIIy6eMFg91OQ81zf5CYaRr23c%2BEU3x4g2kJbFKBgP1zYoxD7bxm99SA4%2FCuM1dzjh57sHMH9tD4VcQwxK1XdxAw2oCGPlZbuZQ3yuvYQe2VyIVd%2FbFUUGIBoQQCo1Na%2FazbjlktYA1Z18nhRWR8yZcc%2B2hdWZeollbbZCd1XsG%2FK8H%2BDRky4PsqQWrpXYONs1qZ0QWyxjMThZnkTdkf7uLHPafaG0EHiFDeWLsRYN8zhidO773ZHw1v4XYYYsNMHyGALchGZlV0zcw29cJzmAq1Nhb%2FNwkFxRBoHtmD4SLv3Dr2y1RCVvDH%2BJkC2HB1G3g7xnKe0rfP0gDiQZJcAGqGH%2FgwFu9AdzgiXE%2BdnADl00LGLVuRdI6iBWIl0IC1qv6hNdxdROuXGYaiZz00ySrLOr4ZqGcmaP4fPuXeXT%2FxzFg6j7Frxyjhbc8ZNg3gGUT3DXqPwqhhYlEmZUK1QzywRozqrI%2ByOYZWTpkm76J212bh88KNJ1EDbabFN3XZsS7pPRXqp3tnOWYW04rn0sJkc1D6M7gkZiuope02W7JGVQDVqNX93k59OfhouQ1AT0KXzRjEMb3muGopAAIq7Bh3mJA1rrS%2FF8wMNG388kGOqUBVmaC8JoRyfks4yLh6pFxy5ZJph2tgQRzfu9EujvuiGLNlMjQcbvpIBGCy2I4QmuJMt6TNAXRPmTNrglhIKFVeGOF1B%2FRrmRFBYvL8BHHWAX4FY9oqh0EOVS%2Fj4AdhaBSgc6uyAHK5iVIYALWLF7ah%2Bro6jAPSmmNo6tB%2FvsuxUSSAfj5fMoxwDMPjclIlKL0TVo33Zc9%2F2I%2B7NAcvZn3NtYpPZPs&X-Amz-Signature=4c1481791c9f122e27023820ad9881a7ac21739c60876359cb8a27da2e1a2b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXU2OPPV%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIAM6uVSLSrVSJRtFOjaO6JmPQQgqgAKqouav7s0KY3soAiEAsORLYSnymtMev%2F5ilaI%2FnqffKXXy5qrGBscyWnUdIcUq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJQe5lPN4%2B8h0YFu9SrcA0mbbBKu%2BbJhzz0oD30S29eEFlIIy6eMFg91OQ81zf5CYaRr23c%2BEU3x4g2kJbFKBgP1zYoxD7bxm99SA4%2FCuM1dzjh57sHMH9tD4VcQwxK1XdxAw2oCGPlZbuZQ3yuvYQe2VyIVd%2FbFUUGIBoQQCo1Na%2FazbjlktYA1Z18nhRWR8yZcc%2B2hdWZeollbbZCd1XsG%2FK8H%2BDRky4PsqQWrpXYONs1qZ0QWyxjMThZnkTdkf7uLHPafaG0EHiFDeWLsRYN8zhidO773ZHw1v4XYYYsNMHyGALchGZlV0zcw29cJzmAq1Nhb%2FNwkFxRBoHtmD4SLv3Dr2y1RCVvDH%2BJkC2HB1G3g7xnKe0rfP0gDiQZJcAGqGH%2FgwFu9AdzgiXE%2BdnADl00LGLVuRdI6iBWIl0IC1qv6hNdxdROuXGYaiZz00ySrLOr4ZqGcmaP4fPuXeXT%2FxzFg6j7Frxyjhbc8ZNg3gGUT3DXqPwqhhYlEmZUK1QzywRozqrI%2ByOYZWTpkm76J212bh88KNJ1EDbabFN3XZsS7pPRXqp3tnOWYW04rn0sJkc1D6M7gkZiuope02W7JGVQDVqNX93k59OfhouQ1AT0KXzRjEMb3muGopAAIq7Bh3mJA1rrS%2FF8wMNG388kGOqUBVmaC8JoRyfks4yLh6pFxy5ZJph2tgQRzfu9EujvuiGLNlMjQcbvpIBGCy2I4QmuJMt6TNAXRPmTNrglhIKFVeGOF1B%2FRrmRFBYvL8BHHWAX4FY9oqh0EOVS%2Fj4AdhaBSgc6uyAHK5iVIYALWLF7ah%2Bro6jAPSmmNo6tB%2FvsuxUSSAfj5fMoxwDMPjclIlKL0TVo33Zc9%2F2I%2B7NAcvZn3NtYpPZPs&X-Amz-Signature=1f9c551c156c6d340e2d550ea45c8af62f8a5867b85d54a99e4bd2f494d9ba81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXU2OPPV%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIAM6uVSLSrVSJRtFOjaO6JmPQQgqgAKqouav7s0KY3soAiEAsORLYSnymtMev%2F5ilaI%2FnqffKXXy5qrGBscyWnUdIcUq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJQe5lPN4%2B8h0YFu9SrcA0mbbBKu%2BbJhzz0oD30S29eEFlIIy6eMFg91OQ81zf5CYaRr23c%2BEU3x4g2kJbFKBgP1zYoxD7bxm99SA4%2FCuM1dzjh57sHMH9tD4VcQwxK1XdxAw2oCGPlZbuZQ3yuvYQe2VyIVd%2FbFUUGIBoQQCo1Na%2FazbjlktYA1Z18nhRWR8yZcc%2B2hdWZeollbbZCd1XsG%2FK8H%2BDRky4PsqQWrpXYONs1qZ0QWyxjMThZnkTdkf7uLHPafaG0EHiFDeWLsRYN8zhidO773ZHw1v4XYYYsNMHyGALchGZlV0zcw29cJzmAq1Nhb%2FNwkFxRBoHtmD4SLv3Dr2y1RCVvDH%2BJkC2HB1G3g7xnKe0rfP0gDiQZJcAGqGH%2FgwFu9AdzgiXE%2BdnADl00LGLVuRdI6iBWIl0IC1qv6hNdxdROuXGYaiZz00ySrLOr4ZqGcmaP4fPuXeXT%2FxzFg6j7Frxyjhbc8ZNg3gGUT3DXqPwqhhYlEmZUK1QzywRozqrI%2ByOYZWTpkm76J212bh88KNJ1EDbabFN3XZsS7pPRXqp3tnOWYW04rn0sJkc1D6M7gkZiuope02W7JGVQDVqNX93k59OfhouQ1AT0KXzRjEMb3muGopAAIq7Bh3mJA1rrS%2FF8wMNG388kGOqUBVmaC8JoRyfks4yLh6pFxy5ZJph2tgQRzfu9EujvuiGLNlMjQcbvpIBGCy2I4QmuJMt6TNAXRPmTNrglhIKFVeGOF1B%2FRrmRFBYvL8BHHWAX4FY9oqh0EOVS%2Fj4AdhaBSgc6uyAHK5iVIYALWLF7ah%2Bro6jAPSmmNo6tB%2FvsuxUSSAfj5fMoxwDMPjclIlKL0TVo33Zc9%2F2I%2B7NAcvZn3NtYpPZPs&X-Amz-Signature=73f2a648be26ab8a498d174217c30dc9d401551364018670b7fc8e75ecf0dfdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXU2OPPV%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIAM6uVSLSrVSJRtFOjaO6JmPQQgqgAKqouav7s0KY3soAiEAsORLYSnymtMev%2F5ilaI%2FnqffKXXy5qrGBscyWnUdIcUq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJQe5lPN4%2B8h0YFu9SrcA0mbbBKu%2BbJhzz0oD30S29eEFlIIy6eMFg91OQ81zf5CYaRr23c%2BEU3x4g2kJbFKBgP1zYoxD7bxm99SA4%2FCuM1dzjh57sHMH9tD4VcQwxK1XdxAw2oCGPlZbuZQ3yuvYQe2VyIVd%2FbFUUGIBoQQCo1Na%2FazbjlktYA1Z18nhRWR8yZcc%2B2hdWZeollbbZCd1XsG%2FK8H%2BDRky4PsqQWrpXYONs1qZ0QWyxjMThZnkTdkf7uLHPafaG0EHiFDeWLsRYN8zhidO773ZHw1v4XYYYsNMHyGALchGZlV0zcw29cJzmAq1Nhb%2FNwkFxRBoHtmD4SLv3Dr2y1RCVvDH%2BJkC2HB1G3g7xnKe0rfP0gDiQZJcAGqGH%2FgwFu9AdzgiXE%2BdnADl00LGLVuRdI6iBWIl0IC1qv6hNdxdROuXGYaiZz00ySrLOr4ZqGcmaP4fPuXeXT%2FxzFg6j7Frxyjhbc8ZNg3gGUT3DXqPwqhhYlEmZUK1QzywRozqrI%2ByOYZWTpkm76J212bh88KNJ1EDbabFN3XZsS7pPRXqp3tnOWYW04rn0sJkc1D6M7gkZiuope02W7JGVQDVqNX93k59OfhouQ1AT0KXzRjEMb3muGopAAIq7Bh3mJA1rrS%2FF8wMNG388kGOqUBVmaC8JoRyfks4yLh6pFxy5ZJph2tgQRzfu9EujvuiGLNlMjQcbvpIBGCy2I4QmuJMt6TNAXRPmTNrglhIKFVeGOF1B%2FRrmRFBYvL8BHHWAX4FY9oqh0EOVS%2Fj4AdhaBSgc6uyAHK5iVIYALWLF7ah%2Bro6jAPSmmNo6tB%2FvsuxUSSAfj5fMoxwDMPjclIlKL0TVo33Zc9%2F2I%2B7NAcvZn3NtYpPZPs&X-Amz-Signature=51a7d17afb002fa2ba0961bc67cdb1152364dc88a562f3bd86d6c6d425bcfcf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXU2OPPV%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIAM6uVSLSrVSJRtFOjaO6JmPQQgqgAKqouav7s0KY3soAiEAsORLYSnymtMev%2F5ilaI%2FnqffKXXy5qrGBscyWnUdIcUq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJQe5lPN4%2B8h0YFu9SrcA0mbbBKu%2BbJhzz0oD30S29eEFlIIy6eMFg91OQ81zf5CYaRr23c%2BEU3x4g2kJbFKBgP1zYoxD7bxm99SA4%2FCuM1dzjh57sHMH9tD4VcQwxK1XdxAw2oCGPlZbuZQ3yuvYQe2VyIVd%2FbFUUGIBoQQCo1Na%2FazbjlktYA1Z18nhRWR8yZcc%2B2hdWZeollbbZCd1XsG%2FK8H%2BDRky4PsqQWrpXYONs1qZ0QWyxjMThZnkTdkf7uLHPafaG0EHiFDeWLsRYN8zhidO773ZHw1v4XYYYsNMHyGALchGZlV0zcw29cJzmAq1Nhb%2FNwkFxRBoHtmD4SLv3Dr2y1RCVvDH%2BJkC2HB1G3g7xnKe0rfP0gDiQZJcAGqGH%2FgwFu9AdzgiXE%2BdnADl00LGLVuRdI6iBWIl0IC1qv6hNdxdROuXGYaiZz00ySrLOr4ZqGcmaP4fPuXeXT%2FxzFg6j7Frxyjhbc8ZNg3gGUT3DXqPwqhhYlEmZUK1QzywRozqrI%2ByOYZWTpkm76J212bh88KNJ1EDbabFN3XZsS7pPRXqp3tnOWYW04rn0sJkc1D6M7gkZiuope02W7JGVQDVqNX93k59OfhouQ1AT0KXzRjEMb3muGopAAIq7Bh3mJA1rrS%2FF8wMNG388kGOqUBVmaC8JoRyfks4yLh6pFxy5ZJph2tgQRzfu9EujvuiGLNlMjQcbvpIBGCy2I4QmuJMt6TNAXRPmTNrglhIKFVeGOF1B%2FRrmRFBYvL8BHHWAX4FY9oqh0EOVS%2Fj4AdhaBSgc6uyAHK5iVIYALWLF7ah%2Bro6jAPSmmNo6tB%2FvsuxUSSAfj5fMoxwDMPjclIlKL0TVo33Zc9%2F2I%2B7NAcvZn3NtYpPZPs&X-Amz-Signature=c46d009cd14738041dd9b490a9585e6f07377c3ff9c599114eb4b3dc8081b256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3OHH4UP%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T035358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIHJVrUH6DDgiN1Ngnb2EomPnJfV7XHxJ6UZld%2F%2F8DXR%2BAiEAkl%2BZXX3hkLBK5fEQGtWlqIHcSrhPRNEhrAHasBz%2BWFQq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDMDTiM%2BfR7yo30pvDyrcAyenm8uu7SKJB5jeYBfy%2FtnJOB5zGvgE%2BCAznVHLkU1Pxkf%2Bj%2BWDhEq6y94uB2XXcOAZz8lO7ONmeeGQp%2F7YxPwbbhoeth55S8gS4gSRP7%2FeqrASoEhxijQ%2B1YU9tMHy9xRRLAR6Eb6irAPkGWNIOyKW9i4DZaXd41yGmbzAzchNS8I5YoRXgoBYMAMbV234HcmDR8GSvZG9qyZWDfdHxpUP5Yl6ds%2FQPWkjSSef2KZHpFp2NEXOJLg0nN2AIFhUlEyBcMQfWDSszYp12PsG1VucxPF4W%2FuDseo0kW%2Fj3EKHhdwgulio4RTeH8i5JGHk6q35n84y3PG0htmCaU22JnVAJQAFB3e3pRWXGXWEukhmAFBeLb3N0YaXFaMjNXFlNSXggCIv%2BxS6VaZMT7ZFziUVt%2FE5V%2FudMqjJb6x5JCcYxr%2FGfaYE%2FUfx7Ixw6Rdy1KDS2bHCvysFybJvzUWdKUhk2XGMfjhUao3S882aHLMBTjx0a8ujk0NfI1gPUEyfnVa6Og3M%2FTMNYIoG%2FsLCt9J%2FOQ0ptB9mROHb5sdKfC34%2B4Ri91AQhqvyJBwx9XeMbbz3GEatIXLDiBRprBG5My%2F1i2ljofONpFlPF2QX0prHOp5r8r%2BdHiqaCG3EMOW388kGOqUBndOjVtmMSKouMbjltXL4W7YMR8LJkxmAl90ucQWFIkOlMT2XcK2e2zwAfRJ8WGB6EWHZmiAopM1Pt5rzW%2Fx2QAd9RX9QhNt1s%2B9jTGZaXXCaLdzwkl78hVU9A6LCH6olUK4D1crWAUJ5EvaH%2BJJAepjKzVX2COeXvBxRmdPPbMQsRO1lVy7uoyHCKZOcj9oJAfHb1741ofiF949WIFq%2BhsF9YLVN&X-Amz-Signature=01a6770cb7ae6c137c6ca078b4f9ea3410cd40c0a667236b201ffba5054da943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

