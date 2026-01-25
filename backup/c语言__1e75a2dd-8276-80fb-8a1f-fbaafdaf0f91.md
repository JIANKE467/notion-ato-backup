
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TACXZQQM%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICqq1q1aoD4bgVdhfP56R5KBN30E9UTQxRTYPcghKCjJAiA3YQRnAW5pAgma7Rm0oVTVjNb1r85I2sqzSNxCXs2Bhyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIM9pJyW%2FdEPwX5K6PxKtwDpKpBhk8fptbCDUrI%2FufOlylpccFg4wJ6DcsxXUqj6OjjtwtuvxT8jAOiex1TtKBjaab%2FhN1a1t74OEN7NsxaT%2FOzua%2FwO0J3Cd%2Bfz6gjGCutOW4Q%2B6IudCsYBxxWoe5pYMDYuAsWGByNGJKjaW6E7hkS%2BjIV2%2BRDXizJDIK9P3NlqW5P948f0Bz%2Bu5Y6G0H6JybTD%2BmVOkFi9txSmJrhvdAbBg2F21K%2BZ1dkpSGtsY8BcID0TG7hAGAtzKBEsR8s%2FLpX3sfg4qp8en78Uqx5J%2BX%2FOnsj8C75qhdvkqKTAHgluvGftbGRunZApOyHSQP9DlPiupCP%2B7Cg0OLefgw1i%2FBgdtaWG7Kf23dICCFeZDxHMLLG7p3688UnzK%2F6Xkzp3Sewmo6c9qfKzk6rkrav63sXvwv5kSMPQ1HDp4Od9Sy0qvFu3x5RZuL4HH7iNaGAN9MpUXxsiF0F%2BGI%2FdnW9uCH9O3H2JW%2Bph84Vh7hQr9jMVIQAIs1gpJ%2BRS0Ce0Hde2Vsvy0D59FdMY2GRvzQ1AtK2MWp48KAkXkj8Ka4ZScfNtThowrIZVX8wI0zr4O9f5aq6PHt2L3qDeVt1h0n2Ni0yGNv%2Bv4P1pH3O3AnXbM8qPabNNpEmNMFo7CQw7LDWywY6pgGCUD0UzF%2BuMXcDfuHejaHgmc4Gku1GeHr8l5IPH6wkw6fKTvQuevuMFAvAEvr5xJfeiY4Dc%2Fq8cvA1xUUu5rCh5GA74UG3PhlMrE3oX30jVsruILvIRo%2BWAW9e4tAnQa2yAeFRCatlQ%2B%2F%2FcpnupERwUFD%2BKkho6J6VUUlSvUEH27%2Bqbzw4DFvZODppgSV90V7vpzNdOTinIMZJYdnpTBE900obKObe&X-Amz-Signature=7cfdc8e46904d08521b01baecd4dfa529135dd861326cc4aa0edd5006f597e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD22IMW3%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIBVtbd9YwPCLVOLMW7IaBwFg7EOZ4Co6rVczOxLtR6J0AiBBUKsSr6%2BoIV7j%2BlIacd8ij%2Bl5i37Qif0tZElhFDsc3ir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIM7uKGs2JRZMl9dSVKKtwDhzPgiBPwxCNPCzpL2TNleNeYTyE8Nv0Tv%2BO8eSsZOPPo%2FAUsaaY%2F2r8qwup4ma05QBpEjE0AOzv8PsrmuGLjTYIxKZeI1SnnlrTw%2FsQkT8UoavixzRV1cmf1Bq89nNzE6TuPe08V0hrgMG13NFit3Z7fyHJkRaWFr%2FAh60W6ilrg%2Broq0arl8qWM7mIx6KsGoYFvSXvwf%2FEdcfBkVOnnoIg2GN7047cV0euSsDWAb4TB86ZvqDYELS61jDa1DaBky9pvi%2FzCZd%2BNhWJOoy2etaHfNymLhzH1hdknq%2Fc7Sm%2BX%2FhZbm5hsVisExfNgQ0NjYk5PqZ%2B7mMgOE0Yxh5%2FEntw%2FOkE7uqzHzzSdIH5%2Ba9R%2BVfhurBHhQUcD3679YRhyzjS%2BAvx2NgiYk%2FG7xF2tfXODSae2%2FW37I%2B7bewlGPUNZslwTMQxGYxixmFC3o6TctGNPOoBee%2Fgi8opQw1JHYUdzJKkkfpC%2BkTW0ILgeDHez2f8Sxgsvhsuf2c9uOtIVWagDXb8E0Ox8%2Bi%2BYGEJ9LERGRf3M9GtNz1VBn81WDXFBicE6Lh1voXlTzYdzue%2BzRZP6iPklE%2FcsThdso%2BjnKF3dwZWsvv1aCoMK7nd%2B%2BxSZLQKjGYdF%2B5QVKl0wtrDWywY6pgEF655AGK2Rdn2lb8rbSMVQa7sV%2F41L4LA93ei0lHfv9kRd48NeSpR%2BwZi8jaIWcbEXwbpW1c8XQ2A1Pqh4CVLYzHyhBjYIazRi%2B%2B%2F1rhbWi8Whr72nskhxw7nPcrQ1EdxHiXMwQe98g4tUyJ0h%2FfsHANrkpOOaCKe1u6isfPSw9q2mH9E%2Fc%2B0mxpbEd3%2FgF4NMY5S89q6lyo29ceeZHVFw2vduCMBU&X-Amz-Signature=bd997ae5a36b627199b8d563a6d0407cabba091105f102b0419340244cc825b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD22IMW3%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIBVtbd9YwPCLVOLMW7IaBwFg7EOZ4Co6rVczOxLtR6J0AiBBUKsSr6%2BoIV7j%2BlIacd8ij%2Bl5i37Qif0tZElhFDsc3ir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIM7uKGs2JRZMl9dSVKKtwDhzPgiBPwxCNPCzpL2TNleNeYTyE8Nv0Tv%2BO8eSsZOPPo%2FAUsaaY%2F2r8qwup4ma05QBpEjE0AOzv8PsrmuGLjTYIxKZeI1SnnlrTw%2FsQkT8UoavixzRV1cmf1Bq89nNzE6TuPe08V0hrgMG13NFit3Z7fyHJkRaWFr%2FAh60W6ilrg%2Broq0arl8qWM7mIx6KsGoYFvSXvwf%2FEdcfBkVOnnoIg2GN7047cV0euSsDWAb4TB86ZvqDYELS61jDa1DaBky9pvi%2FzCZd%2BNhWJOoy2etaHfNymLhzH1hdknq%2Fc7Sm%2BX%2FhZbm5hsVisExfNgQ0NjYk5PqZ%2B7mMgOE0Yxh5%2FEntw%2FOkE7uqzHzzSdIH5%2Ba9R%2BVfhurBHhQUcD3679YRhyzjS%2BAvx2NgiYk%2FG7xF2tfXODSae2%2FW37I%2B7bewlGPUNZslwTMQxGYxixmFC3o6TctGNPOoBee%2Fgi8opQw1JHYUdzJKkkfpC%2BkTW0ILgeDHez2f8Sxgsvhsuf2c9uOtIVWagDXb8E0Ox8%2Bi%2BYGEJ9LERGRf3M9GtNz1VBn81WDXFBicE6Lh1voXlTzYdzue%2BzRZP6iPklE%2FcsThdso%2BjnKF3dwZWsvv1aCoMK7nd%2B%2BxSZLQKjGYdF%2B5QVKl0wtrDWywY6pgEF655AGK2Rdn2lb8rbSMVQa7sV%2F41L4LA93ei0lHfv9kRd48NeSpR%2BwZi8jaIWcbEXwbpW1c8XQ2A1Pqh4CVLYzHyhBjYIazRi%2B%2B%2F1rhbWi8Whr72nskhxw7nPcrQ1EdxHiXMwQe98g4tUyJ0h%2FfsHANrkpOOaCKe1u6isfPSw9q2mH9E%2Fc%2B0mxpbEd3%2FgF4NMY5S89q6lyo29ceeZHVFw2vduCMBU&X-Amz-Signature=43689d556d0e518e32a815a1344cbc5bfe6c3fb345b3889a453efda2f0c33193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4T3SCWU%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGS2brwnrL6306x%2FR3IoIDCEE7TP1HaBff84gPEfkuKuAiALd0gCbp5q1VN%2FWhWSn5zQBrJOyaxh0aa%2F%2FtYkgGOH3ir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMkdfmUb5wfM3wkp24KtwD4g7kODJxgp4xCc04ZxVZsifnYbuxmC7VeXdYYxHqeZnekdhYL8gwtQLuJEUo0HYc3BAj4asRFc6McE4pX4Th375v0PBPtSmeDMUsTaJbaUbH2n3YzVWfrVkN55%2BEAIsWX0kvrFD6dHj3fkz2Rntvn9f0FVS7q1BFJJhagso2mpBee5VP8hpd%2FDQGifFAYYCxTIt4eK%2FGOcoK%2BzNZ%2F%2Fw7VyrZ7jhIRSxDm4WRSSZ%2FN60jSTOTmzVXolHWsYpUnZVfD2sQYhN2teYSDx7nVqJZ11UPWKlsQmzBKyDw1f%2BblH%2BbcT9BC1p9fXlxFjPF2QnVYhZEJq663kug0EsbeFlizFIWc173qO0iPUOUW0LD76IjYjrcAh2A14%2BspJtImlT4HyBXqwuRMlBoU%2BQ%2FXROW35w%2FugzG2k8Vbm2q006X8eUuM96UiOk%2BmQuPynAh%2FpIHU2JgAyPmwgjS5bwlJVOf7z4jvMwPlaYB7bf04MU%2BKj%2Fe3ZhL8XAZ7sVT0xSAzeclx%2FucAKneXe%2FsT1%2BuucsUT1Z1K%2FH3tjaLNxDMpXa%2FENOSBzJkCmh6FiLhK6pG%2FdCr47ZjM6G9mgkibbUCN8f77nYS2eQhyup%2B6bSqYkVohnCxqQIWwNZP8WyJ1poww7DWywY6pgEFZO7r%2BSZTACj283iO0bfVsKHfNpTU%2FCCsaZW5tZc44lhDJVoKyC1cwDuOFNX3dARsNtSjKJ9D8SKcIDkO1PlIGfjNKsL1eA2tKbllEay6jgODCDpEGVgUP5zWJug4xujO8ICpzYEC58qyx38yoJQ0Z60HPRx0SQC3nJd6mQ%2FSQdmFkZrwMrFxeD%2BUpxKga0okRQIVEtIdU8UE1byRWhAuS5z%2BMQP4&X-Amz-Signature=6f8d6842185133ee673b554a51b96d75829dc8791425938bc611ed71bd6468de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4T3SCWU%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGS2brwnrL6306x%2FR3IoIDCEE7TP1HaBff84gPEfkuKuAiALd0gCbp5q1VN%2FWhWSn5zQBrJOyaxh0aa%2F%2FtYkgGOH3ir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMkdfmUb5wfM3wkp24KtwD4g7kODJxgp4xCc04ZxVZsifnYbuxmC7VeXdYYxHqeZnekdhYL8gwtQLuJEUo0HYc3BAj4asRFc6McE4pX4Th375v0PBPtSmeDMUsTaJbaUbH2n3YzVWfrVkN55%2BEAIsWX0kvrFD6dHj3fkz2Rntvn9f0FVS7q1BFJJhagso2mpBee5VP8hpd%2FDQGifFAYYCxTIt4eK%2FGOcoK%2BzNZ%2F%2Fw7VyrZ7jhIRSxDm4WRSSZ%2FN60jSTOTmzVXolHWsYpUnZVfD2sQYhN2teYSDx7nVqJZ11UPWKlsQmzBKyDw1f%2BblH%2BbcT9BC1p9fXlxFjPF2QnVYhZEJq663kug0EsbeFlizFIWc173qO0iPUOUW0LD76IjYjrcAh2A14%2BspJtImlT4HyBXqwuRMlBoU%2BQ%2FXROW35w%2FugzG2k8Vbm2q006X8eUuM96UiOk%2BmQuPynAh%2FpIHU2JgAyPmwgjS5bwlJVOf7z4jvMwPlaYB7bf04MU%2BKj%2Fe3ZhL8XAZ7sVT0xSAzeclx%2FucAKneXe%2FsT1%2BuucsUT1Z1K%2FH3tjaLNxDMpXa%2FENOSBzJkCmh6FiLhK6pG%2FdCr47ZjM6G9mgkibbUCN8f77nYS2eQhyup%2B6bSqYkVohnCxqQIWwNZP8WyJ1poww7DWywY6pgEFZO7r%2BSZTACj283iO0bfVsKHfNpTU%2FCCsaZW5tZc44lhDJVoKyC1cwDuOFNX3dARsNtSjKJ9D8SKcIDkO1PlIGfjNKsL1eA2tKbllEay6jgODCDpEGVgUP5zWJug4xujO8ICpzYEC58qyx38yoJQ0Z60HPRx0SQC3nJd6mQ%2FSQdmFkZrwMrFxeD%2BUpxKga0okRQIVEtIdU8UE1byRWhAuS5z%2BMQP4&X-Amz-Signature=103f2ca45739c88aa932e1005c71bb56821eda467f28ab7f5f39bbb7e70e8b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4T3SCWU%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGS2brwnrL6306x%2FR3IoIDCEE7TP1HaBff84gPEfkuKuAiALd0gCbp5q1VN%2FWhWSn5zQBrJOyaxh0aa%2F%2FtYkgGOH3ir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMkdfmUb5wfM3wkp24KtwD4g7kODJxgp4xCc04ZxVZsifnYbuxmC7VeXdYYxHqeZnekdhYL8gwtQLuJEUo0HYc3BAj4asRFc6McE4pX4Th375v0PBPtSmeDMUsTaJbaUbH2n3YzVWfrVkN55%2BEAIsWX0kvrFD6dHj3fkz2Rntvn9f0FVS7q1BFJJhagso2mpBee5VP8hpd%2FDQGifFAYYCxTIt4eK%2FGOcoK%2BzNZ%2F%2Fw7VyrZ7jhIRSxDm4WRSSZ%2FN60jSTOTmzVXolHWsYpUnZVfD2sQYhN2teYSDx7nVqJZ11UPWKlsQmzBKyDw1f%2BblH%2BbcT9BC1p9fXlxFjPF2QnVYhZEJq663kug0EsbeFlizFIWc173qO0iPUOUW0LD76IjYjrcAh2A14%2BspJtImlT4HyBXqwuRMlBoU%2BQ%2FXROW35w%2FugzG2k8Vbm2q006X8eUuM96UiOk%2BmQuPynAh%2FpIHU2JgAyPmwgjS5bwlJVOf7z4jvMwPlaYB7bf04MU%2BKj%2Fe3ZhL8XAZ7sVT0xSAzeclx%2FucAKneXe%2FsT1%2BuucsUT1Z1K%2FH3tjaLNxDMpXa%2FENOSBzJkCmh6FiLhK6pG%2FdCr47ZjM6G9mgkibbUCN8f77nYS2eQhyup%2B6bSqYkVohnCxqQIWwNZP8WyJ1poww7DWywY6pgEFZO7r%2BSZTACj283iO0bfVsKHfNpTU%2FCCsaZW5tZc44lhDJVoKyC1cwDuOFNX3dARsNtSjKJ9D8SKcIDkO1PlIGfjNKsL1eA2tKbllEay6jgODCDpEGVgUP5zWJug4xujO8ICpzYEC58qyx38yoJQ0Z60HPRx0SQC3nJd6mQ%2FSQdmFkZrwMrFxeD%2BUpxKga0okRQIVEtIdU8UE1byRWhAuS5z%2BMQP4&X-Amz-Signature=8cb4fe4d7f5f2725ba2c964f3f8f78ee0b6772c49743fad02dd663f8a943d62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4T3SCWU%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGS2brwnrL6306x%2FR3IoIDCEE7TP1HaBff84gPEfkuKuAiALd0gCbp5q1VN%2FWhWSn5zQBrJOyaxh0aa%2F%2FtYkgGOH3ir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMkdfmUb5wfM3wkp24KtwD4g7kODJxgp4xCc04ZxVZsifnYbuxmC7VeXdYYxHqeZnekdhYL8gwtQLuJEUo0HYc3BAj4asRFc6McE4pX4Th375v0PBPtSmeDMUsTaJbaUbH2n3YzVWfrVkN55%2BEAIsWX0kvrFD6dHj3fkz2Rntvn9f0FVS7q1BFJJhagso2mpBee5VP8hpd%2FDQGifFAYYCxTIt4eK%2FGOcoK%2BzNZ%2F%2Fw7VyrZ7jhIRSxDm4WRSSZ%2FN60jSTOTmzVXolHWsYpUnZVfD2sQYhN2teYSDx7nVqJZ11UPWKlsQmzBKyDw1f%2BblH%2BbcT9BC1p9fXlxFjPF2QnVYhZEJq663kug0EsbeFlizFIWc173qO0iPUOUW0LD76IjYjrcAh2A14%2BspJtImlT4HyBXqwuRMlBoU%2BQ%2FXROW35w%2FugzG2k8Vbm2q006X8eUuM96UiOk%2BmQuPynAh%2FpIHU2JgAyPmwgjS5bwlJVOf7z4jvMwPlaYB7bf04MU%2BKj%2Fe3ZhL8XAZ7sVT0xSAzeclx%2FucAKneXe%2FsT1%2BuucsUT1Z1K%2FH3tjaLNxDMpXa%2FENOSBzJkCmh6FiLhK6pG%2FdCr47ZjM6G9mgkibbUCN8f77nYS2eQhyup%2B6bSqYkVohnCxqQIWwNZP8WyJ1poww7DWywY6pgEFZO7r%2BSZTACj283iO0bfVsKHfNpTU%2FCCsaZW5tZc44lhDJVoKyC1cwDuOFNX3dARsNtSjKJ9D8SKcIDkO1PlIGfjNKsL1eA2tKbllEay6jgODCDpEGVgUP5zWJug4xujO8ICpzYEC58qyx38yoJQ0Z60HPRx0SQC3nJd6mQ%2FSQdmFkZrwMrFxeD%2BUpxKga0okRQIVEtIdU8UE1byRWhAuS5z%2BMQP4&X-Amz-Signature=12d1dce1e731d9f3774070d13376df53ddc9cb54cde9c731462386ba7208a008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4T3SCWU%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGS2brwnrL6306x%2FR3IoIDCEE7TP1HaBff84gPEfkuKuAiALd0gCbp5q1VN%2FWhWSn5zQBrJOyaxh0aa%2F%2FtYkgGOH3ir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMkdfmUb5wfM3wkp24KtwD4g7kODJxgp4xCc04ZxVZsifnYbuxmC7VeXdYYxHqeZnekdhYL8gwtQLuJEUo0HYc3BAj4asRFc6McE4pX4Th375v0PBPtSmeDMUsTaJbaUbH2n3YzVWfrVkN55%2BEAIsWX0kvrFD6dHj3fkz2Rntvn9f0FVS7q1BFJJhagso2mpBee5VP8hpd%2FDQGifFAYYCxTIt4eK%2FGOcoK%2BzNZ%2F%2Fw7VyrZ7jhIRSxDm4WRSSZ%2FN60jSTOTmzVXolHWsYpUnZVfD2sQYhN2teYSDx7nVqJZ11UPWKlsQmzBKyDw1f%2BblH%2BbcT9BC1p9fXlxFjPF2QnVYhZEJq663kug0EsbeFlizFIWc173qO0iPUOUW0LD76IjYjrcAh2A14%2BspJtImlT4HyBXqwuRMlBoU%2BQ%2FXROW35w%2FugzG2k8Vbm2q006X8eUuM96UiOk%2BmQuPynAh%2FpIHU2JgAyPmwgjS5bwlJVOf7z4jvMwPlaYB7bf04MU%2BKj%2Fe3ZhL8XAZ7sVT0xSAzeclx%2FucAKneXe%2FsT1%2BuucsUT1Z1K%2FH3tjaLNxDMpXa%2FENOSBzJkCmh6FiLhK6pG%2FdCr47ZjM6G9mgkibbUCN8f77nYS2eQhyup%2B6bSqYkVohnCxqQIWwNZP8WyJ1poww7DWywY6pgEFZO7r%2BSZTACj283iO0bfVsKHfNpTU%2FCCsaZW5tZc44lhDJVoKyC1cwDuOFNX3dARsNtSjKJ9D8SKcIDkO1PlIGfjNKsL1eA2tKbllEay6jgODCDpEGVgUP5zWJug4xujO8ICpzYEC58qyx38yoJQ0Z60HPRx0SQC3nJd6mQ%2FSQdmFkZrwMrFxeD%2BUpxKga0okRQIVEtIdU8UE1byRWhAuS5z%2BMQP4&X-Amz-Signature=6905c519815c0264bc5f0797fe0ab45664d3833eb69dc0bec16c7d61f554780f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4T3SCWU%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGS2brwnrL6306x%2FR3IoIDCEE7TP1HaBff84gPEfkuKuAiALd0gCbp5q1VN%2FWhWSn5zQBrJOyaxh0aa%2F%2FtYkgGOH3ir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMkdfmUb5wfM3wkp24KtwD4g7kODJxgp4xCc04ZxVZsifnYbuxmC7VeXdYYxHqeZnekdhYL8gwtQLuJEUo0HYc3BAj4asRFc6McE4pX4Th375v0PBPtSmeDMUsTaJbaUbH2n3YzVWfrVkN55%2BEAIsWX0kvrFD6dHj3fkz2Rntvn9f0FVS7q1BFJJhagso2mpBee5VP8hpd%2FDQGifFAYYCxTIt4eK%2FGOcoK%2BzNZ%2F%2Fw7VyrZ7jhIRSxDm4WRSSZ%2FN60jSTOTmzVXolHWsYpUnZVfD2sQYhN2teYSDx7nVqJZ11UPWKlsQmzBKyDw1f%2BblH%2BbcT9BC1p9fXlxFjPF2QnVYhZEJq663kug0EsbeFlizFIWc173qO0iPUOUW0LD76IjYjrcAh2A14%2BspJtImlT4HyBXqwuRMlBoU%2BQ%2FXROW35w%2FugzG2k8Vbm2q006X8eUuM96UiOk%2BmQuPynAh%2FpIHU2JgAyPmwgjS5bwlJVOf7z4jvMwPlaYB7bf04MU%2BKj%2Fe3ZhL8XAZ7sVT0xSAzeclx%2FucAKneXe%2FsT1%2BuucsUT1Z1K%2FH3tjaLNxDMpXa%2FENOSBzJkCmh6FiLhK6pG%2FdCr47ZjM6G9mgkibbUCN8f77nYS2eQhyup%2B6bSqYkVohnCxqQIWwNZP8WyJ1poww7DWywY6pgEFZO7r%2BSZTACj283iO0bfVsKHfNpTU%2FCCsaZW5tZc44lhDJVoKyC1cwDuOFNX3dARsNtSjKJ9D8SKcIDkO1PlIGfjNKsL1eA2tKbllEay6jgODCDpEGVgUP5zWJug4xujO8ICpzYEC58qyx38yoJQ0Z60HPRx0SQC3nJd6mQ%2FSQdmFkZrwMrFxeD%2BUpxKga0okRQIVEtIdU8UE1byRWhAuS5z%2BMQP4&X-Amz-Signature=f6d14751b959cdcf07d00b77eb5830485610b4bf0c39f34b3c3f2de0c14c7eb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4T3SCWU%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGS2brwnrL6306x%2FR3IoIDCEE7TP1HaBff84gPEfkuKuAiALd0gCbp5q1VN%2FWhWSn5zQBrJOyaxh0aa%2F%2FtYkgGOH3ir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMkdfmUb5wfM3wkp24KtwD4g7kODJxgp4xCc04ZxVZsifnYbuxmC7VeXdYYxHqeZnekdhYL8gwtQLuJEUo0HYc3BAj4asRFc6McE4pX4Th375v0PBPtSmeDMUsTaJbaUbH2n3YzVWfrVkN55%2BEAIsWX0kvrFD6dHj3fkz2Rntvn9f0FVS7q1BFJJhagso2mpBee5VP8hpd%2FDQGifFAYYCxTIt4eK%2FGOcoK%2BzNZ%2F%2Fw7VyrZ7jhIRSxDm4WRSSZ%2FN60jSTOTmzVXolHWsYpUnZVfD2sQYhN2teYSDx7nVqJZ11UPWKlsQmzBKyDw1f%2BblH%2BbcT9BC1p9fXlxFjPF2QnVYhZEJq663kug0EsbeFlizFIWc173qO0iPUOUW0LD76IjYjrcAh2A14%2BspJtImlT4HyBXqwuRMlBoU%2BQ%2FXROW35w%2FugzG2k8Vbm2q006X8eUuM96UiOk%2BmQuPynAh%2FpIHU2JgAyPmwgjS5bwlJVOf7z4jvMwPlaYB7bf04MU%2BKj%2Fe3ZhL8XAZ7sVT0xSAzeclx%2FucAKneXe%2FsT1%2BuucsUT1Z1K%2FH3tjaLNxDMpXa%2FENOSBzJkCmh6FiLhK6pG%2FdCr47ZjM6G9mgkibbUCN8f77nYS2eQhyup%2B6bSqYkVohnCxqQIWwNZP8WyJ1poww7DWywY6pgEFZO7r%2BSZTACj283iO0bfVsKHfNpTU%2FCCsaZW5tZc44lhDJVoKyC1cwDuOFNX3dARsNtSjKJ9D8SKcIDkO1PlIGfjNKsL1eA2tKbllEay6jgODCDpEGVgUP5zWJug4xujO8ICpzYEC58qyx38yoJQ0Z60HPRx0SQC3nJd6mQ%2FSQdmFkZrwMrFxeD%2BUpxKga0okRQIVEtIdU8UE1byRWhAuS5z%2BMQP4&X-Amz-Signature=f6e83443d0ff74dea3423baaea92d70dc97a99414eaf38e30852e3ea31daf65c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVS73MLG%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDP2InDqtBDXLLI8227%2FZzBaCrlpqE%2FS4fCU3HkW%2FnlaAiBqz18qG4Uaq2r%2BR1yBPpw%2FD5B7ZjAshxsUrQKCFXkIKSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMIJqrUKJuSwo6L733KtwDh965BX6%2F85pbp70gr7oLxdETHXkZnSksVYnb1pfn981xgn0pb9a4Ylc%2Bzlvk1QhnY2KmP5krYwOgEN8GtXdZcMbS9a1xMULP1C5oz%2BAQkXPWk8OBO9zBWCd3q6z%2BgILBB5uP0hM4nMHyEfuZ58PPf0iUDxSuUMOHarTflHesCosyEoKTvm7u4WHNZD0uLC2Ldihf5qiDc8UHajtjGh0PpcQu3q6eLULuR50vKKHUVCX8b2OiHG3AeUtdkYksbtlUf7JdJkaSHBxOS%2BxUJLFBD0I0fCgANKooyNHTdKl6Hg9YBG%2FbU2EPSqUKt4%2BYGKhi3s8Nc1KHNnadXA5aTRX3Y7jvRVd%2FVg1GxCfBgvPfhszPtiNklGJ%2FcOd5qhD8qyl4Ql6O7%2BgY5CrQDqahW3phEBLJNaLCI%2FvTNeltIZzqfJ20tQH4QOMCbniHaqChT9GEqFWGGss%2BXudPr6X%2FbFKVzDgtX%2FhINxfvVOrNHkDA%2Fx%2BYrk3fnzGlr2v3jz3ERZNOM8McG47Iwl6sXNoKMCwOr5sf0SIlCBTrW%2BaTRzN3I%2B%2BQOCG%2BPZnDf6%2BiVGc2sMahqOjLmCGFIWTpMv5ThshKQVwK437kkbC0aI3T7UbX4vAdnL2LnzhrZjp9D5cwxq%2FWywY6pgHh3fQcWTqjJ8RCkqHyaRhja%2B7uvI6My1u2JsYrmQB%2FSea58G7%2FQYhdbkJoSg6UDr5hAcOv1EBcWbCPmo%2F3VcHf06teD20ZZ1wj1cwIMmMtC4h7ziehINMT2DklaBUmlXKydqUZ3jb6HETF4q5BqPe%2Bjtz3GHy2zttLCRzEvqwWX16v87YrGWNOGedfELSe9l4SD2vmozoViqdz89wRXmuI5KiVSFjF&X-Amz-Signature=8ac0ac7b304f70db2204127c0fb4de1d763543983a890542ce5b56a24cffdf2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVS73MLG%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDP2InDqtBDXLLI8227%2FZzBaCrlpqE%2FS4fCU3HkW%2FnlaAiBqz18qG4Uaq2r%2BR1yBPpw%2FD5B7ZjAshxsUrQKCFXkIKSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMIJqrUKJuSwo6L733KtwDh965BX6%2F85pbp70gr7oLxdETHXkZnSksVYnb1pfn981xgn0pb9a4Ylc%2Bzlvk1QhnY2KmP5krYwOgEN8GtXdZcMbS9a1xMULP1C5oz%2BAQkXPWk8OBO9zBWCd3q6z%2BgILBB5uP0hM4nMHyEfuZ58PPf0iUDxSuUMOHarTflHesCosyEoKTvm7u4WHNZD0uLC2Ldihf5qiDc8UHajtjGh0PpcQu3q6eLULuR50vKKHUVCX8b2OiHG3AeUtdkYksbtlUf7JdJkaSHBxOS%2BxUJLFBD0I0fCgANKooyNHTdKl6Hg9YBG%2FbU2EPSqUKt4%2BYGKhi3s8Nc1KHNnadXA5aTRX3Y7jvRVd%2FVg1GxCfBgvPfhszPtiNklGJ%2FcOd5qhD8qyl4Ql6O7%2BgY5CrQDqahW3phEBLJNaLCI%2FvTNeltIZzqfJ20tQH4QOMCbniHaqChT9GEqFWGGss%2BXudPr6X%2FbFKVzDgtX%2FhINxfvVOrNHkDA%2Fx%2BYrk3fnzGlr2v3jz3ERZNOM8McG47Iwl6sXNoKMCwOr5sf0SIlCBTrW%2BaTRzN3I%2B%2BQOCG%2BPZnDf6%2BiVGc2sMahqOjLmCGFIWTpMv5ThshKQVwK437kkbC0aI3T7UbX4vAdnL2LnzhrZjp9D5cwxq%2FWywY6pgHh3fQcWTqjJ8RCkqHyaRhja%2B7uvI6My1u2JsYrmQB%2FSea58G7%2FQYhdbkJoSg6UDr5hAcOv1EBcWbCPmo%2F3VcHf06teD20ZZ1wj1cwIMmMtC4h7ziehINMT2DklaBUmlXKydqUZ3jb6HETF4q5BqPe%2Bjtz3GHy2zttLCRzEvqwWX16v87YrGWNOGedfELSe9l4SD2vmozoViqdz89wRXmuI5KiVSFjF&X-Amz-Signature=8380ed765f648d6d02e4f43d26958fb66cb96d62faaa9e01753edb40581f91f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVS73MLG%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDP2InDqtBDXLLI8227%2FZzBaCrlpqE%2FS4fCU3HkW%2FnlaAiBqz18qG4Uaq2r%2BR1yBPpw%2FD5B7ZjAshxsUrQKCFXkIKSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMIJqrUKJuSwo6L733KtwDh965BX6%2F85pbp70gr7oLxdETHXkZnSksVYnb1pfn981xgn0pb9a4Ylc%2Bzlvk1QhnY2KmP5krYwOgEN8GtXdZcMbS9a1xMULP1C5oz%2BAQkXPWk8OBO9zBWCd3q6z%2BgILBB5uP0hM4nMHyEfuZ58PPf0iUDxSuUMOHarTflHesCosyEoKTvm7u4WHNZD0uLC2Ldihf5qiDc8UHajtjGh0PpcQu3q6eLULuR50vKKHUVCX8b2OiHG3AeUtdkYksbtlUf7JdJkaSHBxOS%2BxUJLFBD0I0fCgANKooyNHTdKl6Hg9YBG%2FbU2EPSqUKt4%2BYGKhi3s8Nc1KHNnadXA5aTRX3Y7jvRVd%2FVg1GxCfBgvPfhszPtiNklGJ%2FcOd5qhD8qyl4Ql6O7%2BgY5CrQDqahW3phEBLJNaLCI%2FvTNeltIZzqfJ20tQH4QOMCbniHaqChT9GEqFWGGss%2BXudPr6X%2FbFKVzDgtX%2FhINxfvVOrNHkDA%2Fx%2BYrk3fnzGlr2v3jz3ERZNOM8McG47Iwl6sXNoKMCwOr5sf0SIlCBTrW%2BaTRzN3I%2B%2BQOCG%2BPZnDf6%2BiVGc2sMahqOjLmCGFIWTpMv5ThshKQVwK437kkbC0aI3T7UbX4vAdnL2LnzhrZjp9D5cwxq%2FWywY6pgHh3fQcWTqjJ8RCkqHyaRhja%2B7uvI6My1u2JsYrmQB%2FSea58G7%2FQYhdbkJoSg6UDr5hAcOv1EBcWbCPmo%2F3VcHf06teD20ZZ1wj1cwIMmMtC4h7ziehINMT2DklaBUmlXKydqUZ3jb6HETF4q5BqPe%2Bjtz3GHy2zttLCRzEvqwWX16v87YrGWNOGedfELSe9l4SD2vmozoViqdz89wRXmuI5KiVSFjF&X-Amz-Signature=84740ba0f25fad9a3a6dbae727cf5b8d30a4777a26c298297f3f92b8392878ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVS73MLG%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDP2InDqtBDXLLI8227%2FZzBaCrlpqE%2FS4fCU3HkW%2FnlaAiBqz18qG4Uaq2r%2BR1yBPpw%2FD5B7ZjAshxsUrQKCFXkIKSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMIJqrUKJuSwo6L733KtwDh965BX6%2F85pbp70gr7oLxdETHXkZnSksVYnb1pfn981xgn0pb9a4Ylc%2Bzlvk1QhnY2KmP5krYwOgEN8GtXdZcMbS9a1xMULP1C5oz%2BAQkXPWk8OBO9zBWCd3q6z%2BgILBB5uP0hM4nMHyEfuZ58PPf0iUDxSuUMOHarTflHesCosyEoKTvm7u4WHNZD0uLC2Ldihf5qiDc8UHajtjGh0PpcQu3q6eLULuR50vKKHUVCX8b2OiHG3AeUtdkYksbtlUf7JdJkaSHBxOS%2BxUJLFBD0I0fCgANKooyNHTdKl6Hg9YBG%2FbU2EPSqUKt4%2BYGKhi3s8Nc1KHNnadXA5aTRX3Y7jvRVd%2FVg1GxCfBgvPfhszPtiNklGJ%2FcOd5qhD8qyl4Ql6O7%2BgY5CrQDqahW3phEBLJNaLCI%2FvTNeltIZzqfJ20tQH4QOMCbniHaqChT9GEqFWGGss%2BXudPr6X%2FbFKVzDgtX%2FhINxfvVOrNHkDA%2Fx%2BYrk3fnzGlr2v3jz3ERZNOM8McG47Iwl6sXNoKMCwOr5sf0SIlCBTrW%2BaTRzN3I%2B%2BQOCG%2BPZnDf6%2BiVGc2sMahqOjLmCGFIWTpMv5ThshKQVwK437kkbC0aI3T7UbX4vAdnL2LnzhrZjp9D5cwxq%2FWywY6pgHh3fQcWTqjJ8RCkqHyaRhja%2B7uvI6My1u2JsYrmQB%2FSea58G7%2FQYhdbkJoSg6UDr5hAcOv1EBcWbCPmo%2F3VcHf06teD20ZZ1wj1cwIMmMtC4h7ziehINMT2DklaBUmlXKydqUZ3jb6HETF4q5BqPe%2Bjtz3GHy2zttLCRzEvqwWX16v87YrGWNOGedfELSe9l4SD2vmozoViqdz89wRXmuI5KiVSFjF&X-Amz-Signature=9c8bf18b425d0aaf43a85bdab9f345bb7510b4a72000342a6e5481308fc0ff89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVS73MLG%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDP2InDqtBDXLLI8227%2FZzBaCrlpqE%2FS4fCU3HkW%2FnlaAiBqz18qG4Uaq2r%2BR1yBPpw%2FD5B7ZjAshxsUrQKCFXkIKSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMIJqrUKJuSwo6L733KtwDh965BX6%2F85pbp70gr7oLxdETHXkZnSksVYnb1pfn981xgn0pb9a4Ylc%2Bzlvk1QhnY2KmP5krYwOgEN8GtXdZcMbS9a1xMULP1C5oz%2BAQkXPWk8OBO9zBWCd3q6z%2BgILBB5uP0hM4nMHyEfuZ58PPf0iUDxSuUMOHarTflHesCosyEoKTvm7u4WHNZD0uLC2Ldihf5qiDc8UHajtjGh0PpcQu3q6eLULuR50vKKHUVCX8b2OiHG3AeUtdkYksbtlUf7JdJkaSHBxOS%2BxUJLFBD0I0fCgANKooyNHTdKl6Hg9YBG%2FbU2EPSqUKt4%2BYGKhi3s8Nc1KHNnadXA5aTRX3Y7jvRVd%2FVg1GxCfBgvPfhszPtiNklGJ%2FcOd5qhD8qyl4Ql6O7%2BgY5CrQDqahW3phEBLJNaLCI%2FvTNeltIZzqfJ20tQH4QOMCbniHaqChT9GEqFWGGss%2BXudPr6X%2FbFKVzDgtX%2FhINxfvVOrNHkDA%2Fx%2BYrk3fnzGlr2v3jz3ERZNOM8McG47Iwl6sXNoKMCwOr5sf0SIlCBTrW%2BaTRzN3I%2B%2BQOCG%2BPZnDf6%2BiVGc2sMahqOjLmCGFIWTpMv5ThshKQVwK437kkbC0aI3T7UbX4vAdnL2LnzhrZjp9D5cwxq%2FWywY6pgHh3fQcWTqjJ8RCkqHyaRhja%2B7uvI6My1u2JsYrmQB%2FSea58G7%2FQYhdbkJoSg6UDr5hAcOv1EBcWbCPmo%2F3VcHf06teD20ZZ1wj1cwIMmMtC4h7ziehINMT2DklaBUmlXKydqUZ3jb6HETF4q5BqPe%2Bjtz3GHy2zttLCRzEvqwWX16v87YrGWNOGedfELSe9l4SD2vmozoViqdz89wRXmuI5KiVSFjF&X-Amz-Signature=fecff2a3e542f49a7b825bc7b5a526c3f90912a0f6895309f68d1d2d00c9cb7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROQ7ZANP%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIHku5q1xZDvslbxlkNqd95BacNDhvGfRYFRbyuRpgSN%2BAiEAmUbysJqeqvK%2B0og8NDlmobjIlLBXRebSSIYf07txpQ4q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDIeixEUsWNkALa7%2BhircAz0JhjIC0CO3egb%2BZnrJPT9Df8QQXHWulTDiPImMPTeUeggWd7Lmf0qhxHtb2dbNkFlAacgyQmnoUh5uMdZRFt2rIf0PM8jT9c44y3MDpVZOl6hz%2FiI8sBwURimtjlt4%2FFwz3X5i3W5I%2BPEPRMUx73GYWT9VRehm%2Fnpb9J7spnDCGITyupQnq0J0FvrCRzhyvuXLgX2FoBc3KiYx7zvnBgvUIFuUOEJ5dqYntRHbc6ffbedKJmIYSp7YB%2Fh3CSyq3%2FOdfXtPSgp5PN593%2ByGS3Vsnb9%2BL%2FtfbYvbowXFsWD3M2cNnsMIgM9l%2FUZg6GLU4QfTakTRIzUdFQv5gGanPgRGf%2FtDmOyK5SmgwW9gUGCIm0YzZdgSK06hMREDReIeb45fu9ORUb7nKTxDRpMb3rOjIWKJqIQ8PAtcIOYAkcaPKPRGJLw4UaUsh9sffJtDLXY9IZd227CKth8%2B5RbwClHPbG%2BOX8qC3ScojUEypKvQoIeAsGom154OOblg7Xd9%2FudeY7rL0LwqCoWrpXtwK%2FY0ws%2F%2B1AUrnaEeCEdz%2B%2FsXsH3gqKZigVOg0p%2FcDRc5fFTe%2FQxVCo5%2F06ElWyjuxLVYzeZpTsKyhNG1QU15xJt5wyhWMzgUiS4QKPYIML2w1ssGOqUBl45plBs7jtXjgSJHBaY%2FAVPUVjlGrLj9lOippz9IO7G3CZ%2BtRBhv5vudZtvWkEODVqYpj2YG8fByuNW6BcNl0gVs3flNBnkrNb2Jz%2BeOY8DxaL3up6C8%2FGR2FDFf6sAG6zw0BliHA1Va528VCVP4jUPmI%2FtQ1ycRH%2FqHVt8rSc3nZcgI6FQrRZ7VCOI%2FEee9xpNxm2sM7bj3aQlw1Kk9ZMTZPmp5&X-Amz-Signature=acacb7808a8351ed4c1929ae972f85ee7ff96d7dda1e180e0597505794d9d533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROQ7ZANP%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIHku5q1xZDvslbxlkNqd95BacNDhvGfRYFRbyuRpgSN%2BAiEAmUbysJqeqvK%2B0og8NDlmobjIlLBXRebSSIYf07txpQ4q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDIeixEUsWNkALa7%2BhircAz0JhjIC0CO3egb%2BZnrJPT9Df8QQXHWulTDiPImMPTeUeggWd7Lmf0qhxHtb2dbNkFlAacgyQmnoUh5uMdZRFt2rIf0PM8jT9c44y3MDpVZOl6hz%2FiI8sBwURimtjlt4%2FFwz3X5i3W5I%2BPEPRMUx73GYWT9VRehm%2Fnpb9J7spnDCGITyupQnq0J0FvrCRzhyvuXLgX2FoBc3KiYx7zvnBgvUIFuUOEJ5dqYntRHbc6ffbedKJmIYSp7YB%2Fh3CSyq3%2FOdfXtPSgp5PN593%2ByGS3Vsnb9%2BL%2FtfbYvbowXFsWD3M2cNnsMIgM9l%2FUZg6GLU4QfTakTRIzUdFQv5gGanPgRGf%2FtDmOyK5SmgwW9gUGCIm0YzZdgSK06hMREDReIeb45fu9ORUb7nKTxDRpMb3rOjIWKJqIQ8PAtcIOYAkcaPKPRGJLw4UaUsh9sffJtDLXY9IZd227CKth8%2B5RbwClHPbG%2BOX8qC3ScojUEypKvQoIeAsGom154OOblg7Xd9%2FudeY7rL0LwqCoWrpXtwK%2FY0ws%2F%2B1AUrnaEeCEdz%2B%2FsXsH3gqKZigVOg0p%2FcDRc5fFTe%2FQxVCo5%2F06ElWyjuxLVYzeZpTsKyhNG1QU15xJt5wyhWMzgUiS4QKPYIML2w1ssGOqUBl45plBs7jtXjgSJHBaY%2FAVPUVjlGrLj9lOippz9IO7G3CZ%2BtRBhv5vudZtvWkEODVqYpj2YG8fByuNW6BcNl0gVs3flNBnkrNb2Jz%2BeOY8DxaL3up6C8%2FGR2FDFf6sAG6zw0BliHA1Va528VCVP4jUPmI%2FtQ1ycRH%2FqHVt8rSc3nZcgI6FQrRZ7VCOI%2FEee9xpNxm2sM7bj3aQlw1Kk9ZMTZPmp5&X-Amz-Signature=02452647cef922127181ab359c2e2c522202b453edeb0704b239607c2e98170c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROQ7ZANP%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIHku5q1xZDvslbxlkNqd95BacNDhvGfRYFRbyuRpgSN%2BAiEAmUbysJqeqvK%2B0og8NDlmobjIlLBXRebSSIYf07txpQ4q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDIeixEUsWNkALa7%2BhircAz0JhjIC0CO3egb%2BZnrJPT9Df8QQXHWulTDiPImMPTeUeggWd7Lmf0qhxHtb2dbNkFlAacgyQmnoUh5uMdZRFt2rIf0PM8jT9c44y3MDpVZOl6hz%2FiI8sBwURimtjlt4%2FFwz3X5i3W5I%2BPEPRMUx73GYWT9VRehm%2Fnpb9J7spnDCGITyupQnq0J0FvrCRzhyvuXLgX2FoBc3KiYx7zvnBgvUIFuUOEJ5dqYntRHbc6ffbedKJmIYSp7YB%2Fh3CSyq3%2FOdfXtPSgp5PN593%2ByGS3Vsnb9%2BL%2FtfbYvbowXFsWD3M2cNnsMIgM9l%2FUZg6GLU4QfTakTRIzUdFQv5gGanPgRGf%2FtDmOyK5SmgwW9gUGCIm0YzZdgSK06hMREDReIeb45fu9ORUb7nKTxDRpMb3rOjIWKJqIQ8PAtcIOYAkcaPKPRGJLw4UaUsh9sffJtDLXY9IZd227CKth8%2B5RbwClHPbG%2BOX8qC3ScojUEypKvQoIeAsGom154OOblg7Xd9%2FudeY7rL0LwqCoWrpXtwK%2FY0ws%2F%2B1AUrnaEeCEdz%2B%2FsXsH3gqKZigVOg0p%2FcDRc5fFTe%2FQxVCo5%2F06ElWyjuxLVYzeZpTsKyhNG1QU15xJt5wyhWMzgUiS4QKPYIML2w1ssGOqUBl45plBs7jtXjgSJHBaY%2FAVPUVjlGrLj9lOippz9IO7G3CZ%2BtRBhv5vudZtvWkEODVqYpj2YG8fByuNW6BcNl0gVs3flNBnkrNb2Jz%2BeOY8DxaL3up6C8%2FGR2FDFf6sAG6zw0BliHA1Va528VCVP4jUPmI%2FtQ1ycRH%2FqHVt8rSc3nZcgI6FQrRZ7VCOI%2FEee9xpNxm2sM7bj3aQlw1Kk9ZMTZPmp5&X-Amz-Signature=2419919068ca3e8e05e3a4692edd5e09fb94db1f55cf0939cb61808fbd52e368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CLJ7ID5%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCxEpU5PVMGGcE2fZxpHGjSs9Z55ayTpOQKUM6Z75ze5wIgRT0iPNpmFqO5C1gwNNOIyHdzFKF0Q3pkqAIjs3d8x7Aq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDMWdlmUMgF27a%2FlF8yrcAyhr5QP%2BQa4qvPthyDepHyT%2FFD8DlMyyGovuNfyiBWBZv85jtToTRHBZEpbkSqHAh%2BqiVDBqJ7utchVfHSN1xYDPanS%2FBIjoJr3s8WmfTgRyiTPJ1Qu13OisK0O2aMEqKqFTgVGBQqeqya2%2BHh2TGU6HTVNCP1kpUS7vQQy%2FWyTVUpsF1eTKmUgy%2FnmqebffhttY9hMlxnx0QrS3NGak2Lgy3Qhd4Pzkvzs6nS6t%2FiJdjA9YNy8p%2FAJtya2DQOh2WeVqQfBT0krvt%2FhjtE2fB%2FxOfLCqeqZKzZEdKNFoaJH023ey8MFqT7kpJJW2NmyUJhgOrZZlassuHLKfuayApnqFbzPPH%2Bze4LPBL2A4VLi6RlMogSIaIftfpU3e%2BF0TkSMEKc8I7cklgbkdBM8wpMDlG0X%2BniHsqfe2NoHOYg4rTjl0PVEFTQ7yRSwAQB57i6VGt%2FCNCT3iwZxe6DCHGizzixzoY79pxKb8Zvo%2FEFLdRmaQwgzrtUHHcihF6ZyKx0dLvhBL8dWS%2FSsMs6tlBF1cPcKg2SOx4VMcdxLn608BRWFXYByADcYerRM4yicwm97yhFoLJfxoU%2B5iu1eV7FmJJDQ5Z%2BECqNjo3fmJ22DO8fw98NOvfGYP6Nh5MPav1ssGOqUBpyERhQVVUXyI0r4i1SNmP0IIwkxAzfjcbwQY9BwSjRiuVo9pjnMKOUpRJe3dydJBjuNVAJRRyMWJwMAM%2BSzWB7oMRwXcm9KYIhiHYYd0TyhElcCWzkxf290gO14GzW7W%2BoKj7EHawIbh8vIzi5Z3RfruHRo6VubQvZZXKAZw0JVmQqlZr6PDv4TDi54V4WcJzZoweJhfDJG3GUQFu%2BNJ2g%2Fm5%2B9O&X-Amz-Signature=7daabee02d23839f14e313214793ebff417c2f36db3d654dbb7e0a4553f6c69a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CLJ7ID5%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCxEpU5PVMGGcE2fZxpHGjSs9Z55ayTpOQKUM6Z75ze5wIgRT0iPNpmFqO5C1gwNNOIyHdzFKF0Q3pkqAIjs3d8x7Aq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDMWdlmUMgF27a%2FlF8yrcAyhr5QP%2BQa4qvPthyDepHyT%2FFD8DlMyyGovuNfyiBWBZv85jtToTRHBZEpbkSqHAh%2BqiVDBqJ7utchVfHSN1xYDPanS%2FBIjoJr3s8WmfTgRyiTPJ1Qu13OisK0O2aMEqKqFTgVGBQqeqya2%2BHh2TGU6HTVNCP1kpUS7vQQy%2FWyTVUpsF1eTKmUgy%2FnmqebffhttY9hMlxnx0QrS3NGak2Lgy3Qhd4Pzkvzs6nS6t%2FiJdjA9YNy8p%2FAJtya2DQOh2WeVqQfBT0krvt%2FhjtE2fB%2FxOfLCqeqZKzZEdKNFoaJH023ey8MFqT7kpJJW2NmyUJhgOrZZlassuHLKfuayApnqFbzPPH%2Bze4LPBL2A4VLi6RlMogSIaIftfpU3e%2BF0TkSMEKc8I7cklgbkdBM8wpMDlG0X%2BniHsqfe2NoHOYg4rTjl0PVEFTQ7yRSwAQB57i6VGt%2FCNCT3iwZxe6DCHGizzixzoY79pxKb8Zvo%2FEFLdRmaQwgzrtUHHcihF6ZyKx0dLvhBL8dWS%2FSsMs6tlBF1cPcKg2SOx4VMcdxLn608BRWFXYByADcYerRM4yicwm97yhFoLJfxoU%2B5iu1eV7FmJJDQ5Z%2BECqNjo3fmJ22DO8fw98NOvfGYP6Nh5MPav1ssGOqUBpyERhQVVUXyI0r4i1SNmP0IIwkxAzfjcbwQY9BwSjRiuVo9pjnMKOUpRJe3dydJBjuNVAJRRyMWJwMAM%2BSzWB7oMRwXcm9KYIhiHYYd0TyhElcCWzkxf290gO14GzW7W%2BoKj7EHawIbh8vIzi5Z3RfruHRo6VubQvZZXKAZw0JVmQqlZr6PDv4TDi54V4WcJzZoweJhfDJG3GUQFu%2BNJ2g%2Fm5%2B9O&X-Amz-Signature=f209324cc0d897dd67383e297142a9bbd02c59bbeed43f1baa376d26a2ab7142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PK3BCAL%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDcnId2SK2Yp2C1R6%2FrHFLQzDgC4NbXl9Nso0%2FLawav2AIgQEZnUdlyRKliQTLsx9R4k5wngF0EYzulbWp3p%2BQGq78q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHMxv0p0jO2VO5uD%2FyrcA5dBUG55nZGDYVG8sAR8jRxTVogyH2fzXVqMRsMsa7ckPDybROZhB8umdhEjSRBIN9pP3Ed0vx0qTvd1pxDeJ5zFMd8EtOVA%2B5uHZmn2MGa4KfZ79kCbJSGemX1i1MWwhISQ0Ta22NyjVTyoAayfaVcbn0eVKm951%2BxryKySaXDi17yKwPjCKfb%2FRKlEstcyewMDsiP7Jqg1BTOdaVNMuLLCRAZmGpvYwMqo5ybpiGyFe77jCYvt689K3be1X8uk1Qdl7elG%2BAjQA8GD6dWfccexxtsGzUyxFozD%2BUfJ37M0uEmOjliCuY5MCZIXOIjfP4rCmH65QmmO21K5DgWH9CM75YmLCVs0%2Bi%2BWZTem%2Fct6JplDKXzynAOmkIkbop2vVX1FVWQe5KMYKaSEXW%2FFnwbylGi75jsy0p5MJyUhf1NvXpLiurc7W0ki1TU35QtcOkMf%2FTdz7BglCEF4sH%2BzowR1JCIhnGCY%2Be8gf%2B4qo7M8nbBJoON1In0uQiJ6eec8pw6c5NMIXzoE4JYBNHWpv1UXU47Iw2dD1iuU3VfhWpaX5yED8lPOak2BqWD0qM0dWYn9PvqDm0iO2ngo8Cs92DL7w4ro0q3pEl2PDBavMkN5YMLiUw9O18wimVQyMNyv1ssGOqUBXm3AHwSYmXVREQm9MvTvP11zeoI7Hy%2B%2BHWk74ejbBljbf9u0tdurYqthDNk0ygBIaF94rvjEdzlbAeLuPF7kD%2BkZV9vjx9X0G425dByYR2B%2FA1GYfIfvsNxFr1OaKprJ2Ft83tpLEXlhAOey5h%2Bm4TLAY5w5MTT%2FRhpB%2BwMbm%2ButVO%2BUV7aBNIlNYLhxCqKJwLdSQkBtFCcNuP7yj72DEfSLvpG%2F&X-Amz-Signature=dcb0717efb9a912c21d79f7a66390d16e944436a21dad49a4e0c8f881b373c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PK3BCAL%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDcnId2SK2Yp2C1R6%2FrHFLQzDgC4NbXl9Nso0%2FLawav2AIgQEZnUdlyRKliQTLsx9R4k5wngF0EYzulbWp3p%2BQGq78q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHMxv0p0jO2VO5uD%2FyrcA5dBUG55nZGDYVG8sAR8jRxTVogyH2fzXVqMRsMsa7ckPDybROZhB8umdhEjSRBIN9pP3Ed0vx0qTvd1pxDeJ5zFMd8EtOVA%2B5uHZmn2MGa4KfZ79kCbJSGemX1i1MWwhISQ0Ta22NyjVTyoAayfaVcbn0eVKm951%2BxryKySaXDi17yKwPjCKfb%2FRKlEstcyewMDsiP7Jqg1BTOdaVNMuLLCRAZmGpvYwMqo5ybpiGyFe77jCYvt689K3be1X8uk1Qdl7elG%2BAjQA8GD6dWfccexxtsGzUyxFozD%2BUfJ37M0uEmOjliCuY5MCZIXOIjfP4rCmH65QmmO21K5DgWH9CM75YmLCVs0%2Bi%2BWZTem%2Fct6JplDKXzynAOmkIkbop2vVX1FVWQe5KMYKaSEXW%2FFnwbylGi75jsy0p5MJyUhf1NvXpLiurc7W0ki1TU35QtcOkMf%2FTdz7BglCEF4sH%2BzowR1JCIhnGCY%2Be8gf%2B4qo7M8nbBJoON1In0uQiJ6eec8pw6c5NMIXzoE4JYBNHWpv1UXU47Iw2dD1iuU3VfhWpaX5yED8lPOak2BqWD0qM0dWYn9PvqDm0iO2ngo8Cs92DL7w4ro0q3pEl2PDBavMkN5YMLiUw9O18wimVQyMNyv1ssGOqUBXm3AHwSYmXVREQm9MvTvP11zeoI7Hy%2B%2BHWk74ejbBljbf9u0tdurYqthDNk0ygBIaF94rvjEdzlbAeLuPF7kD%2BkZV9vjx9X0G425dByYR2B%2FA1GYfIfvsNxFr1OaKprJ2Ft83tpLEXlhAOey5h%2Bm4TLAY5w5MTT%2FRhpB%2BwMbm%2ButVO%2BUV7aBNIlNYLhxCqKJwLdSQkBtFCcNuP7yj72DEfSLvpG%2F&X-Amz-Signature=042fcbe029fe6f2c1942c1b92713c306b975438bb043aa62fdb0160e040093e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PK3BCAL%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDcnId2SK2Yp2C1R6%2FrHFLQzDgC4NbXl9Nso0%2FLawav2AIgQEZnUdlyRKliQTLsx9R4k5wngF0EYzulbWp3p%2BQGq78q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHMxv0p0jO2VO5uD%2FyrcA5dBUG55nZGDYVG8sAR8jRxTVogyH2fzXVqMRsMsa7ckPDybROZhB8umdhEjSRBIN9pP3Ed0vx0qTvd1pxDeJ5zFMd8EtOVA%2B5uHZmn2MGa4KfZ79kCbJSGemX1i1MWwhISQ0Ta22NyjVTyoAayfaVcbn0eVKm951%2BxryKySaXDi17yKwPjCKfb%2FRKlEstcyewMDsiP7Jqg1BTOdaVNMuLLCRAZmGpvYwMqo5ybpiGyFe77jCYvt689K3be1X8uk1Qdl7elG%2BAjQA8GD6dWfccexxtsGzUyxFozD%2BUfJ37M0uEmOjliCuY5MCZIXOIjfP4rCmH65QmmO21K5DgWH9CM75YmLCVs0%2Bi%2BWZTem%2Fct6JplDKXzynAOmkIkbop2vVX1FVWQe5KMYKaSEXW%2FFnwbylGi75jsy0p5MJyUhf1NvXpLiurc7W0ki1TU35QtcOkMf%2FTdz7BglCEF4sH%2BzowR1JCIhnGCY%2Be8gf%2B4qo7M8nbBJoON1In0uQiJ6eec8pw6c5NMIXzoE4JYBNHWpv1UXU47Iw2dD1iuU3VfhWpaX5yED8lPOak2BqWD0qM0dWYn9PvqDm0iO2ngo8Cs92DL7w4ro0q3pEl2PDBavMkN5YMLiUw9O18wimVQyMNyv1ssGOqUBXm3AHwSYmXVREQm9MvTvP11zeoI7Hy%2B%2BHWk74ejbBljbf9u0tdurYqthDNk0ygBIaF94rvjEdzlbAeLuPF7kD%2BkZV9vjx9X0G425dByYR2B%2FA1GYfIfvsNxFr1OaKprJ2Ft83tpLEXlhAOey5h%2Bm4TLAY5w5MTT%2FRhpB%2BwMbm%2ButVO%2BUV7aBNIlNYLhxCqKJwLdSQkBtFCcNuP7yj72DEfSLvpG%2F&X-Amz-Signature=4f7675e6c2f9a23db2e62571b64b368146ede085f148895b7fcfaf8979557e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PK3BCAL%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDcnId2SK2Yp2C1R6%2FrHFLQzDgC4NbXl9Nso0%2FLawav2AIgQEZnUdlyRKliQTLsx9R4k5wngF0EYzulbWp3p%2BQGq78q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHMxv0p0jO2VO5uD%2FyrcA5dBUG55nZGDYVG8sAR8jRxTVogyH2fzXVqMRsMsa7ckPDybROZhB8umdhEjSRBIN9pP3Ed0vx0qTvd1pxDeJ5zFMd8EtOVA%2B5uHZmn2MGa4KfZ79kCbJSGemX1i1MWwhISQ0Ta22NyjVTyoAayfaVcbn0eVKm951%2BxryKySaXDi17yKwPjCKfb%2FRKlEstcyewMDsiP7Jqg1BTOdaVNMuLLCRAZmGpvYwMqo5ybpiGyFe77jCYvt689K3be1X8uk1Qdl7elG%2BAjQA8GD6dWfccexxtsGzUyxFozD%2BUfJ37M0uEmOjliCuY5MCZIXOIjfP4rCmH65QmmO21K5DgWH9CM75YmLCVs0%2Bi%2BWZTem%2Fct6JplDKXzynAOmkIkbop2vVX1FVWQe5KMYKaSEXW%2FFnwbylGi75jsy0p5MJyUhf1NvXpLiurc7W0ki1TU35QtcOkMf%2FTdz7BglCEF4sH%2BzowR1JCIhnGCY%2Be8gf%2B4qo7M8nbBJoON1In0uQiJ6eec8pw6c5NMIXzoE4JYBNHWpv1UXU47Iw2dD1iuU3VfhWpaX5yED8lPOak2BqWD0qM0dWYn9PvqDm0iO2ngo8Cs92DL7w4ro0q3pEl2PDBavMkN5YMLiUw9O18wimVQyMNyv1ssGOqUBXm3AHwSYmXVREQm9MvTvP11zeoI7Hy%2B%2BHWk74ejbBljbf9u0tdurYqthDNk0ygBIaF94rvjEdzlbAeLuPF7kD%2BkZV9vjx9X0G425dByYR2B%2FA1GYfIfvsNxFr1OaKprJ2Ft83tpLEXlhAOey5h%2Bm4TLAY5w5MTT%2FRhpB%2BwMbm%2ButVO%2BUV7aBNIlNYLhxCqKJwLdSQkBtFCcNuP7yj72DEfSLvpG%2F&X-Amz-Signature=a1d68b1283dc1e160c86ea69f523cd51ac67ced58a881f8ee0374153a37fb202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PK3BCAL%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDcnId2SK2Yp2C1R6%2FrHFLQzDgC4NbXl9Nso0%2FLawav2AIgQEZnUdlyRKliQTLsx9R4k5wngF0EYzulbWp3p%2BQGq78q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHMxv0p0jO2VO5uD%2FyrcA5dBUG55nZGDYVG8sAR8jRxTVogyH2fzXVqMRsMsa7ckPDybROZhB8umdhEjSRBIN9pP3Ed0vx0qTvd1pxDeJ5zFMd8EtOVA%2B5uHZmn2MGa4KfZ79kCbJSGemX1i1MWwhISQ0Ta22NyjVTyoAayfaVcbn0eVKm951%2BxryKySaXDi17yKwPjCKfb%2FRKlEstcyewMDsiP7Jqg1BTOdaVNMuLLCRAZmGpvYwMqo5ybpiGyFe77jCYvt689K3be1X8uk1Qdl7elG%2BAjQA8GD6dWfccexxtsGzUyxFozD%2BUfJ37M0uEmOjliCuY5MCZIXOIjfP4rCmH65QmmO21K5DgWH9CM75YmLCVs0%2Bi%2BWZTem%2Fct6JplDKXzynAOmkIkbop2vVX1FVWQe5KMYKaSEXW%2FFnwbylGi75jsy0p5MJyUhf1NvXpLiurc7W0ki1TU35QtcOkMf%2FTdz7BglCEF4sH%2BzowR1JCIhnGCY%2Be8gf%2B4qo7M8nbBJoON1In0uQiJ6eec8pw6c5NMIXzoE4JYBNHWpv1UXU47Iw2dD1iuU3VfhWpaX5yED8lPOak2BqWD0qM0dWYn9PvqDm0iO2ngo8Cs92DL7w4ro0q3pEl2PDBavMkN5YMLiUw9O18wimVQyMNyv1ssGOqUBXm3AHwSYmXVREQm9MvTvP11zeoI7Hy%2B%2BHWk74ejbBljbf9u0tdurYqthDNk0ygBIaF94rvjEdzlbAeLuPF7kD%2BkZV9vjx9X0G425dByYR2B%2FA1GYfIfvsNxFr1OaKprJ2Ft83tpLEXlhAOey5h%2Bm4TLAY5w5MTT%2FRhpB%2BwMbm%2ButVO%2BUV7aBNIlNYLhxCqKJwLdSQkBtFCcNuP7yj72DEfSLvpG%2F&X-Amz-Signature=5cc0663a5054a48d5111865bb85af5a2bdd4a98aaf667562b815245e7faf32f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGVSNXTO%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T042342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICFbN0oJNPlGefS%2Fw8Yzig%2BjcWrv4RXaswIqRTiFXEHUAiB7yyIt39wokGZqSCcCyTRzE802QhDqj%2ByXLr6qUqacLCr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMaiEWuNlOqOXlkAGUKtwDknyqmzzrjatv8a6MBLRca7TCdbELo84WXFRWXNImHwdxmtTWH0bmgJb9q8IuXvb%2BAASWNCALYfuOvf%2BeqhCbQ3k78qckq9nwXQbQ9CSG1CDHQxWfR6O7vSHsGeuN%2B%2FScjO%2FSgqVjW1sKyg%2B45S5ttc0cq7g0W%2FSVLoj2r28Blr%2BNZjo8rzhFhAIyJeuKgtTAiGkWYQunJ0IGYxZd%2FlD8NU3AzUz0csJbb9VKLVh5o6N44UiAIExatOFcHcY2DJaMc1gQq9yhC58qXcnHscmTn6i59Oi9ROY4TY60gCPzX9%2FDX2GuhlaRlOECnafk1WTkgCZ6w7%2F2O0XxPhTcanCyQHilYaIpe45gWTOpjZz5xC4MN6Q9QLT9130f2tVSkKgOsVQ3%2FJQvqPQEpYE1pBiNTu%2FRxm%2FP5jWc7h4GqmSWMbmHeJpE8rnLroRFIMC2W9oGwzrzz7MaMZmzqKLxv3Zpoa5glgclVvJ%2BijewZSx%2BCISM2cB8oSNi48mCC3pARjUEJGiXQAq78qwq6jeGN4R%2FZCHcZSlau5lT6iWYIlv5BCepaWU3FpzmaHFqhI%2BeDup%2Fy4ldhHzxJa%2BZV02uMLicyRtLCe2l27DMRwG3wdCQLOXVwcCqR1IN8FiE0dgwxq%2FWywY6pgG7doBWAO%2FgfMpiMpSu%2BK9544nyLelFJyCU1%2BV%2B7Ql6FYolLIQ7Q%2FXfGxHEA89e9A%2Bg4Gz14xgbo6Keacw1BFHYuVH%2Fm6Ad1xKbrrRaRBUo7kfZqIgLehBstZBVbBClB%2B3nYEh3a9gAzGfGaIR1zle3NztYbkcUI61WOTIB7f43BkghBODcw9wManUHr6C5Gu5mdNl2NcQHYdT2KqlpCTsF%2FsHyQIS6&X-Amz-Signature=8d922d71316b87b9901355c8997379cc82df7f56f6c9b51972e3e3e087cfac3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

