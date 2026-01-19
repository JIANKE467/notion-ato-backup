
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIICE4CD%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmqe4PqLNdjkcgcTLTs2V0wgBQ5MrE%2FFoVDHHHv6RDRAiBhyKVOq90tOisqmejhKoirwljsHlacCw%2BdKvCv2kI%2FliqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgJpjJHiggFna9oqqKtwDqbkn4YLNbHr67UKqiPaggG%2F%2B7V6sSDMLBopL5xJQMDzCNsTUZkVmFS3OxSxTSj78%2FsBByZyMhItw0XMZqPz3PVPRsBqefQVgayfCdHdCnlKHDZ%2BntKfb2T%2ByUf0VLm6aXEszOFcIUSz6%2BykujEk3bIOah8IijzXLP%2FoODvzbm772EX81IwrOU%2FMhkOAa6RNjCmND0aiWVc78u75zH396%2BVM2gg1XTmkSYrkUdPCBUvUiNHDwOSoJRld7VwsuQtrFsiQqiosAcMPWI456tyDCFiYCoLke7yn8q6TWsM4Vg2pIy%2BbD6JRxQQep5SIeXW8dbxBgWTPukamUA%2FvsN%2FPnhLKiWhQcLJvbZKK%2FeW50nBH%2B0RzA%2BZ2wOiquvYJQJI0%2Bj1DILh3bs1s0LW1Wb2v5RygILgI6ukLNQx9zD67XBLFQcY6SehYlv2q9h40Judq8v7vW5NnCSWjsKzhbGmZlPkBD%2BFx79KkwQIj47Qt4w56uaieiUjEpMHfI7XHwPh9TKj8qhWgHMIMJtAshAoTbG3sLMJFpnCnS0TT92msv%2Fdiq7e1SJApLkSXIDQZkd9M7zQwjTC6lw698wb9mzD9tXs%2FHaKboOKUN7JwYz5XwRP6v9E0JY5mQQAxgUUowh%2BC2ywY6pgFVKP4D6auTC8tWHyO0FtxGARZY7A6yBqMsF4dv4lZD3iJCCpDrOAx2eQzD%2B1qsAuSNQYfo08I36gixzp%2FbEPKSSv7UuG7ioGJ08Ze7urcgYDTDqcdzhlim1ns8kUIyFsu58PPpVmIqWYu4cMigurpWaLI2AiuGXIclCLtqnTp8vhRPFyjz8mfH8CrcrN0ihQoqlh%2FQzfuoFBAE7w7p9NFNeI8NHrq1&X-Amz-Signature=27dbb83d83db4861480c757162925adff8e84b18f010fb297d1fdda4e88ac038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSR6DI65%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQBzs2ODvnpN%2B1nDTMqyXSHiEI6dVF6qr98bwwXPpL6AiEArBDMnEwg0WIxcUpBQYefk1Kgs7h%2FVN6YMEPsesp3rFMqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKG3k6ltIo8S9yR4JSrcA1Qar5jyCnrK7DV30JKTjCnS7lI0k20DHLaex%2BFaohAGdW2PlOx5V1Fbs1TwYY%2FJlJwcOdBgATN7sAesmYvn8Oq2ZbQg9c7TCYXwpkqnQKlxQ6E%2FnvVH3v%2FrxiImJtqkSiz6YPz4NjL9rmBs8Y%2FWCsvDslNGIlvDR2HjfqButfeOy40cehkfCddGxm60S%2Fr0D4%2Bwk%2FyGuk1B%2B1VVU5gUxULQgOlZiGBciSbju7nFScYVNgoJZBBYr7RBOs9A2axw1Jq0tg437HTs9px3G6cuHAUzwVmLvDgG46tVlSC%2BbjhW1BbYX7b0ASw7SDtZSHo%2BeNaLo%2Fzil36MDMnoe4qDpc4x7TZmdXGfyWuPrBw8XwsyfH5kln0EPvfexDc3nt%2Fn4%2FoDzbCtG%2BK%2FoQwfxqyACnvHf5E5ZJkRDAIKNwqWpen%2BatX7jDg0qY5dqatgfuFTSpBYWblwB%2FyDwRnDW240bQBRFBjVPwt%2Btox6WtpE02%2BlttZs9e5S9F%2FLq71wDNdA5Plxx2hWsup3fIbr3sdf0JR51K5oF6Sq2qFoHhO5rbCTGJW9Au83qY6nrfaOd2mohUq5%2BdXxVwgSWX4R2yaTCdyDbmYsOfPy0Jt2XH%2BlB21slW2zN0AJn%2BnsrEiwMK7gtssGOqUBWqwC4aJWIImdi9R1yIfs%2BbBrrLfFpU9ye%2Bn50cddmd%2FpsxFXBPxfGsvkrDFzjm79cbb2nWfPTKtJKAm5xLz6L%2Fs4tsbxzaZLItrbOBDVElgXc9SJy3Udse92shjyN3dGN1TdWSMwVTwMRlfmNuVVtADv54F46vnaxQr6iTs4JgfnkpMjA%2FE0Dy6J%2FoQq3CYNhGZh3VtA%2BoAMgn9mJqofrGj21rCT&X-Amz-Signature=4abec577bf2811d262eb647b8b89210186666aedd37e04fa8d4ab71ebb21561f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSR6DI65%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQBzs2ODvnpN%2B1nDTMqyXSHiEI6dVF6qr98bwwXPpL6AiEArBDMnEwg0WIxcUpBQYefk1Kgs7h%2FVN6YMEPsesp3rFMqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKG3k6ltIo8S9yR4JSrcA1Qar5jyCnrK7DV30JKTjCnS7lI0k20DHLaex%2BFaohAGdW2PlOx5V1Fbs1TwYY%2FJlJwcOdBgATN7sAesmYvn8Oq2ZbQg9c7TCYXwpkqnQKlxQ6E%2FnvVH3v%2FrxiImJtqkSiz6YPz4NjL9rmBs8Y%2FWCsvDslNGIlvDR2HjfqButfeOy40cehkfCddGxm60S%2Fr0D4%2Bwk%2FyGuk1B%2B1VVU5gUxULQgOlZiGBciSbju7nFScYVNgoJZBBYr7RBOs9A2axw1Jq0tg437HTs9px3G6cuHAUzwVmLvDgG46tVlSC%2BbjhW1BbYX7b0ASw7SDtZSHo%2BeNaLo%2Fzil36MDMnoe4qDpc4x7TZmdXGfyWuPrBw8XwsyfH5kln0EPvfexDc3nt%2Fn4%2FoDzbCtG%2BK%2FoQwfxqyACnvHf5E5ZJkRDAIKNwqWpen%2BatX7jDg0qY5dqatgfuFTSpBYWblwB%2FyDwRnDW240bQBRFBjVPwt%2Btox6WtpE02%2BlttZs9e5S9F%2FLq71wDNdA5Plxx2hWsup3fIbr3sdf0JR51K5oF6Sq2qFoHhO5rbCTGJW9Au83qY6nrfaOd2mohUq5%2BdXxVwgSWX4R2yaTCdyDbmYsOfPy0Jt2XH%2BlB21slW2zN0AJn%2BnsrEiwMK7gtssGOqUBWqwC4aJWIImdi9R1yIfs%2BbBrrLfFpU9ye%2Bn50cddmd%2FpsxFXBPxfGsvkrDFzjm79cbb2nWfPTKtJKAm5xLz6L%2Fs4tsbxzaZLItrbOBDVElgXc9SJy3Udse92shjyN3dGN1TdWSMwVTwMRlfmNuVVtADv54F46vnaxQr6iTs4JgfnkpMjA%2FE0Dy6J%2FoQq3CYNhGZh3VtA%2BoAMgn9mJqofrGj21rCT&X-Amz-Signature=0956a6285762b4d95aaa3690f0a096e5e131e5d88c0f2a609358ff74ca318134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO22EYDM%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkFiyEACfabkGtofr9I0vpL0VuwQNU0PuEykeqyLAe9AiEAsJiXcgH96Y3PydAQNw2WOEP%2BA9Ob44i7lR7M%2FO2bnikqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMld04tQUxVq4daD4ircA02chlZuW%2BbwL3jtNrCPKbo%2BD0YEaAu1EgAWTSnWew9UXKm7YnyECUaPTcAas0ibxXiqn1A%2BB%2FWIhZ07p8niL8EbLvPwoHxlkDZt8TeazR14sZ7HPNlbnoTS1BSGmANuymym8Vgu5ReWlV4DseuTKjP9klwgIYhojQHu1FIK38gcchqSgfKjS9T3DZkA4a3tWgmnRWtLWPZcMyzhNoFUZMbKfzoYp0c4hYsO%2BPcMNCGP3xxC0p%2B0%2BefNxKNYq%2B3CuiL8JjssvXSQ0qo%2FOfIERKiyhUsCZJjv%2FQFINNxPEDOucQ1246xKoPTue09y7W30XHJTzp1EgMZA5zRZ5flbXRGuwDmTnfu88aGi7TZPVb5lvClqRuGfnn%2FA%2FzRNDsr1oj66ord5mbn%2F7si8ifXHP7GHwaLO9Kk%2BKnyXFyVtDHHu4lNYk86Kqmo8DQQHbem1XMWc6xQul4SK71uebqw44Cc2153FQI%2BxBS1CAvE1Vz96ts2rxF4xSTha3jq7ax2Coa%2FRyKQ4T6eoe0fI1j1JUD2%2FGU1DKwitNpgss97uUDzKztB5ub3xpOYxsfCXDJpQlikyLvQcpYUtCGMJXOEAjdZXgJHRTsdYH%2B0vJhyGWgEcgvC0cqx4ewwqe6PtMPrftssGOqUB4bMu4sRQ22ajcJksmEyskDqxlqwuk6%2BBEkG7IzupX7p%2Fxp7Ad%2B7peXleDWyg%2BmyjgE45g0DyLzB%2F8Sw7U5l%2BZRLvNp%2Fs9AL0OoGmQ%2BLRbaWS4nkmlgnPMc3gkCClgIq%2B5plJKn9LvQeNcYWLe0pLsZN0V36wIAHTDSYK3cTRv5AdJ05RumDw1%2BYHaPINq7RrI33QgS0y7LXfB3ml5o8ISBNGenXy&X-Amz-Signature=00f74e76866abe04347428b04b549157838ddd62e2bf8e6db5a504047cdfe8b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO22EYDM%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkFiyEACfabkGtofr9I0vpL0VuwQNU0PuEykeqyLAe9AiEAsJiXcgH96Y3PydAQNw2WOEP%2BA9Ob44i7lR7M%2FO2bnikqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMld04tQUxVq4daD4ircA02chlZuW%2BbwL3jtNrCPKbo%2BD0YEaAu1EgAWTSnWew9UXKm7YnyECUaPTcAas0ibxXiqn1A%2BB%2FWIhZ07p8niL8EbLvPwoHxlkDZt8TeazR14sZ7HPNlbnoTS1BSGmANuymym8Vgu5ReWlV4DseuTKjP9klwgIYhojQHu1FIK38gcchqSgfKjS9T3DZkA4a3tWgmnRWtLWPZcMyzhNoFUZMbKfzoYp0c4hYsO%2BPcMNCGP3xxC0p%2B0%2BefNxKNYq%2B3CuiL8JjssvXSQ0qo%2FOfIERKiyhUsCZJjv%2FQFINNxPEDOucQ1246xKoPTue09y7W30XHJTzp1EgMZA5zRZ5flbXRGuwDmTnfu88aGi7TZPVb5lvClqRuGfnn%2FA%2FzRNDsr1oj66ord5mbn%2F7si8ifXHP7GHwaLO9Kk%2BKnyXFyVtDHHu4lNYk86Kqmo8DQQHbem1XMWc6xQul4SK71uebqw44Cc2153FQI%2BxBS1CAvE1Vz96ts2rxF4xSTha3jq7ax2Coa%2FRyKQ4T6eoe0fI1j1JUD2%2FGU1DKwitNpgss97uUDzKztB5ub3xpOYxsfCXDJpQlikyLvQcpYUtCGMJXOEAjdZXgJHRTsdYH%2B0vJhyGWgEcgvC0cqx4ewwqe6PtMPrftssGOqUB4bMu4sRQ22ajcJksmEyskDqxlqwuk6%2BBEkG7IzupX7p%2Fxp7Ad%2B7peXleDWyg%2BmyjgE45g0DyLzB%2F8Sw7U5l%2BZRLvNp%2Fs9AL0OoGmQ%2BLRbaWS4nkmlgnPMc3gkCClgIq%2B5plJKn9LvQeNcYWLe0pLsZN0V36wIAHTDSYK3cTRv5AdJ05RumDw1%2BYHaPINq7RrI33QgS0y7LXfB3ml5o8ISBNGenXy&X-Amz-Signature=c3b1f7315e09d4c1d067511f9f8476740a3b52c5b7d3cbe4695cc1de3d66956e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO22EYDM%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkFiyEACfabkGtofr9I0vpL0VuwQNU0PuEykeqyLAe9AiEAsJiXcgH96Y3PydAQNw2WOEP%2BA9Ob44i7lR7M%2FO2bnikqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMld04tQUxVq4daD4ircA02chlZuW%2BbwL3jtNrCPKbo%2BD0YEaAu1EgAWTSnWew9UXKm7YnyECUaPTcAas0ibxXiqn1A%2BB%2FWIhZ07p8niL8EbLvPwoHxlkDZt8TeazR14sZ7HPNlbnoTS1BSGmANuymym8Vgu5ReWlV4DseuTKjP9klwgIYhojQHu1FIK38gcchqSgfKjS9T3DZkA4a3tWgmnRWtLWPZcMyzhNoFUZMbKfzoYp0c4hYsO%2BPcMNCGP3xxC0p%2B0%2BefNxKNYq%2B3CuiL8JjssvXSQ0qo%2FOfIERKiyhUsCZJjv%2FQFINNxPEDOucQ1246xKoPTue09y7W30XHJTzp1EgMZA5zRZ5flbXRGuwDmTnfu88aGi7TZPVb5lvClqRuGfnn%2FA%2FzRNDsr1oj66ord5mbn%2F7si8ifXHP7GHwaLO9Kk%2BKnyXFyVtDHHu4lNYk86Kqmo8DQQHbem1XMWc6xQul4SK71uebqw44Cc2153FQI%2BxBS1CAvE1Vz96ts2rxF4xSTha3jq7ax2Coa%2FRyKQ4T6eoe0fI1j1JUD2%2FGU1DKwitNpgss97uUDzKztB5ub3xpOYxsfCXDJpQlikyLvQcpYUtCGMJXOEAjdZXgJHRTsdYH%2B0vJhyGWgEcgvC0cqx4ewwqe6PtMPrftssGOqUB4bMu4sRQ22ajcJksmEyskDqxlqwuk6%2BBEkG7IzupX7p%2Fxp7Ad%2B7peXleDWyg%2BmyjgE45g0DyLzB%2F8Sw7U5l%2BZRLvNp%2Fs9AL0OoGmQ%2BLRbaWS4nkmlgnPMc3gkCClgIq%2B5plJKn9LvQeNcYWLe0pLsZN0V36wIAHTDSYK3cTRv5AdJ05RumDw1%2BYHaPINq7RrI33QgS0y7LXfB3ml5o8ISBNGenXy&X-Amz-Signature=111af7fd8d41f719c2f324050ad7292cda603bbe5107e29eab732c67b7abdb9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO22EYDM%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkFiyEACfabkGtofr9I0vpL0VuwQNU0PuEykeqyLAe9AiEAsJiXcgH96Y3PydAQNw2WOEP%2BA9Ob44i7lR7M%2FO2bnikqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMld04tQUxVq4daD4ircA02chlZuW%2BbwL3jtNrCPKbo%2BD0YEaAu1EgAWTSnWew9UXKm7YnyECUaPTcAas0ibxXiqn1A%2BB%2FWIhZ07p8niL8EbLvPwoHxlkDZt8TeazR14sZ7HPNlbnoTS1BSGmANuymym8Vgu5ReWlV4DseuTKjP9klwgIYhojQHu1FIK38gcchqSgfKjS9T3DZkA4a3tWgmnRWtLWPZcMyzhNoFUZMbKfzoYp0c4hYsO%2BPcMNCGP3xxC0p%2B0%2BefNxKNYq%2B3CuiL8JjssvXSQ0qo%2FOfIERKiyhUsCZJjv%2FQFINNxPEDOucQ1246xKoPTue09y7W30XHJTzp1EgMZA5zRZ5flbXRGuwDmTnfu88aGi7TZPVb5lvClqRuGfnn%2FA%2FzRNDsr1oj66ord5mbn%2F7si8ifXHP7GHwaLO9Kk%2BKnyXFyVtDHHu4lNYk86Kqmo8DQQHbem1XMWc6xQul4SK71uebqw44Cc2153FQI%2BxBS1CAvE1Vz96ts2rxF4xSTha3jq7ax2Coa%2FRyKQ4T6eoe0fI1j1JUD2%2FGU1DKwitNpgss97uUDzKztB5ub3xpOYxsfCXDJpQlikyLvQcpYUtCGMJXOEAjdZXgJHRTsdYH%2B0vJhyGWgEcgvC0cqx4ewwqe6PtMPrftssGOqUB4bMu4sRQ22ajcJksmEyskDqxlqwuk6%2BBEkG7IzupX7p%2Fxp7Ad%2B7peXleDWyg%2BmyjgE45g0DyLzB%2F8Sw7U5l%2BZRLvNp%2Fs9AL0OoGmQ%2BLRbaWS4nkmlgnPMc3gkCClgIq%2B5plJKn9LvQeNcYWLe0pLsZN0V36wIAHTDSYK3cTRv5AdJ05RumDw1%2BYHaPINq7RrI33QgS0y7LXfB3ml5o8ISBNGenXy&X-Amz-Signature=c325427ff213d1523f3384c731d8cfb9109681a4f23a4db3d8b02da51e2dd670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO22EYDM%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkFiyEACfabkGtofr9I0vpL0VuwQNU0PuEykeqyLAe9AiEAsJiXcgH96Y3PydAQNw2WOEP%2BA9Ob44i7lR7M%2FO2bnikqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMld04tQUxVq4daD4ircA02chlZuW%2BbwL3jtNrCPKbo%2BD0YEaAu1EgAWTSnWew9UXKm7YnyECUaPTcAas0ibxXiqn1A%2BB%2FWIhZ07p8niL8EbLvPwoHxlkDZt8TeazR14sZ7HPNlbnoTS1BSGmANuymym8Vgu5ReWlV4DseuTKjP9klwgIYhojQHu1FIK38gcchqSgfKjS9T3DZkA4a3tWgmnRWtLWPZcMyzhNoFUZMbKfzoYp0c4hYsO%2BPcMNCGP3xxC0p%2B0%2BefNxKNYq%2B3CuiL8JjssvXSQ0qo%2FOfIERKiyhUsCZJjv%2FQFINNxPEDOucQ1246xKoPTue09y7W30XHJTzp1EgMZA5zRZ5flbXRGuwDmTnfu88aGi7TZPVb5lvClqRuGfnn%2FA%2FzRNDsr1oj66ord5mbn%2F7si8ifXHP7GHwaLO9Kk%2BKnyXFyVtDHHu4lNYk86Kqmo8DQQHbem1XMWc6xQul4SK71uebqw44Cc2153FQI%2BxBS1CAvE1Vz96ts2rxF4xSTha3jq7ax2Coa%2FRyKQ4T6eoe0fI1j1JUD2%2FGU1DKwitNpgss97uUDzKztB5ub3xpOYxsfCXDJpQlikyLvQcpYUtCGMJXOEAjdZXgJHRTsdYH%2B0vJhyGWgEcgvC0cqx4ewwqe6PtMPrftssGOqUB4bMu4sRQ22ajcJksmEyskDqxlqwuk6%2BBEkG7IzupX7p%2Fxp7Ad%2B7peXleDWyg%2BmyjgE45g0DyLzB%2F8Sw7U5l%2BZRLvNp%2Fs9AL0OoGmQ%2BLRbaWS4nkmlgnPMc3gkCClgIq%2B5plJKn9LvQeNcYWLe0pLsZN0V36wIAHTDSYK3cTRv5AdJ05RumDw1%2BYHaPINq7RrI33QgS0y7LXfB3ml5o8ISBNGenXy&X-Amz-Signature=27557fffdfa00c5024ad7f43e3dcf8da8c9fd999872d3ec740faa8037c443180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO22EYDM%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkFiyEACfabkGtofr9I0vpL0VuwQNU0PuEykeqyLAe9AiEAsJiXcgH96Y3PydAQNw2WOEP%2BA9Ob44i7lR7M%2FO2bnikqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMld04tQUxVq4daD4ircA02chlZuW%2BbwL3jtNrCPKbo%2BD0YEaAu1EgAWTSnWew9UXKm7YnyECUaPTcAas0ibxXiqn1A%2BB%2FWIhZ07p8niL8EbLvPwoHxlkDZt8TeazR14sZ7HPNlbnoTS1BSGmANuymym8Vgu5ReWlV4DseuTKjP9klwgIYhojQHu1FIK38gcchqSgfKjS9T3DZkA4a3tWgmnRWtLWPZcMyzhNoFUZMbKfzoYp0c4hYsO%2BPcMNCGP3xxC0p%2B0%2BefNxKNYq%2B3CuiL8JjssvXSQ0qo%2FOfIERKiyhUsCZJjv%2FQFINNxPEDOucQ1246xKoPTue09y7W30XHJTzp1EgMZA5zRZ5flbXRGuwDmTnfu88aGi7TZPVb5lvClqRuGfnn%2FA%2FzRNDsr1oj66ord5mbn%2F7si8ifXHP7GHwaLO9Kk%2BKnyXFyVtDHHu4lNYk86Kqmo8DQQHbem1XMWc6xQul4SK71uebqw44Cc2153FQI%2BxBS1CAvE1Vz96ts2rxF4xSTha3jq7ax2Coa%2FRyKQ4T6eoe0fI1j1JUD2%2FGU1DKwitNpgss97uUDzKztB5ub3xpOYxsfCXDJpQlikyLvQcpYUtCGMJXOEAjdZXgJHRTsdYH%2B0vJhyGWgEcgvC0cqx4ewwqe6PtMPrftssGOqUB4bMu4sRQ22ajcJksmEyskDqxlqwuk6%2BBEkG7IzupX7p%2Fxp7Ad%2B7peXleDWyg%2BmyjgE45g0DyLzB%2F8Sw7U5l%2BZRLvNp%2Fs9AL0OoGmQ%2BLRbaWS4nkmlgnPMc3gkCClgIq%2B5plJKn9LvQeNcYWLe0pLsZN0V36wIAHTDSYK3cTRv5AdJ05RumDw1%2BYHaPINq7RrI33QgS0y7LXfB3ml5o8ISBNGenXy&X-Amz-Signature=c2b2a7eced64d53686fc25012668cddcb8af2d65068eb0b1d5166ef7f53c120f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO22EYDM%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkFiyEACfabkGtofr9I0vpL0VuwQNU0PuEykeqyLAe9AiEAsJiXcgH96Y3PydAQNw2WOEP%2BA9Ob44i7lR7M%2FO2bnikqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMld04tQUxVq4daD4ircA02chlZuW%2BbwL3jtNrCPKbo%2BD0YEaAu1EgAWTSnWew9UXKm7YnyECUaPTcAas0ibxXiqn1A%2BB%2FWIhZ07p8niL8EbLvPwoHxlkDZt8TeazR14sZ7HPNlbnoTS1BSGmANuymym8Vgu5ReWlV4DseuTKjP9klwgIYhojQHu1FIK38gcchqSgfKjS9T3DZkA4a3tWgmnRWtLWPZcMyzhNoFUZMbKfzoYp0c4hYsO%2BPcMNCGP3xxC0p%2B0%2BefNxKNYq%2B3CuiL8JjssvXSQ0qo%2FOfIERKiyhUsCZJjv%2FQFINNxPEDOucQ1246xKoPTue09y7W30XHJTzp1EgMZA5zRZ5flbXRGuwDmTnfu88aGi7TZPVb5lvClqRuGfnn%2FA%2FzRNDsr1oj66ord5mbn%2F7si8ifXHP7GHwaLO9Kk%2BKnyXFyVtDHHu4lNYk86Kqmo8DQQHbem1XMWc6xQul4SK71uebqw44Cc2153FQI%2BxBS1CAvE1Vz96ts2rxF4xSTha3jq7ax2Coa%2FRyKQ4T6eoe0fI1j1JUD2%2FGU1DKwitNpgss97uUDzKztB5ub3xpOYxsfCXDJpQlikyLvQcpYUtCGMJXOEAjdZXgJHRTsdYH%2B0vJhyGWgEcgvC0cqx4ewwqe6PtMPrftssGOqUB4bMu4sRQ22ajcJksmEyskDqxlqwuk6%2BBEkG7IzupX7p%2Fxp7Ad%2B7peXleDWyg%2BmyjgE45g0DyLzB%2F8Sw7U5l%2BZRLvNp%2Fs9AL0OoGmQ%2BLRbaWS4nkmlgnPMc3gkCClgIq%2B5plJKn9LvQeNcYWLe0pLsZN0V36wIAHTDSYK3cTRv5AdJ05RumDw1%2BYHaPINq7RrI33QgS0y7LXfB3ml5o8ISBNGenXy&X-Amz-Signature=f285e2566828c7304c9de844a908cdc6044ca5f3ac80dd7928226434259f5f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VWOKUI3%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhLYCue2kSqWXQz%2Blqc9kEIPitSPlyy5YwTw1BW2aDMAIhAM7gV1x6djOICCTyjPzge0RcYt0tUMPW3aEeaOfarHfPKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmZXna3VX61zJiyVsq3AMfxHTpb42tZ7JlRu5z5%2F9Z8S01LTMqzHRZxjZ06RBkiHyZ2rd5dGLMJxiSG7dDdzH%2FYEkec33CuEp9nThXUY1nDhBQIM184VaouX5uI2zhJ1VJaldljsubAUhjg%2BqhNfUU9YVv0J22RA7YqyIH5BbttE3j6WvJ0orXQPqWWpm5gANuLl01yZVAMMKLOHwnilQW9tuZjaDa6wA1oCZZiZLoPNcinLr9hPlP5cOqHGjmWxxC6M0%2FFBWqdnjIqrUL6aWhBI5URwDGLP9%2F7zgeJssHhf72s6GxZvU6OTP%2FrJ%2BrzGfpMsxY41VDGUv%2BdClwVn1Lg08jNeZD%2Fx%2BiFqe93TQ1d%2BCCk8pwEuhQxoHEOPmuzBDLkcmTXXaD7Z3d05aT8BhU4WJO6MFlXFqlhN1NbmP4XYroiYlCQpaftr4fEbf52ViXVh7%2FUDNEqbitKjMReJUtw%2BkjyafySPrHcJBmrfw7JjeQxMODjAq2rYRY7SNo8lCUgW741GNESEB1Br2qKW%2F0%2BC5ugiRGjwC5oP4DgztYCqCDx1shr1btU7a2mKeAh3kEmJ%2FDPCDvr3tINj6OFll3eg1smuFx56DyfstxrInDHdZjOb9EDaRQIsGO1L6OWfP1MmXGanwD0foRJzDy37bLBjqkAVbaKAxqfN6oJhFmaAwy%2FZKUTjx5S6vZJgrb83%2BF%2BfSU3fs9OcLTT1S%2FCVQ6sHv%2F05%2Faih1HQB%2FVXf3lZbOIYlbLj42JbALasWchwv1h3WcPtXpXPq5WW35eiDu5iH52Z4P%2BxFFbSGR49YTZkBR%2BFmnjOxT%2BY72W64CEYDuxzR%2BiWc9d6i5ZymjlTlibOIULeMs%2BgVH10jhcNM2IHJWs5bmQc%2F6s&X-Amz-Signature=57145801b70512f009f55d9e1bebf682fc9982c48e9f3cff1918510940f0c512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VWOKUI3%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhLYCue2kSqWXQz%2Blqc9kEIPitSPlyy5YwTw1BW2aDMAIhAM7gV1x6djOICCTyjPzge0RcYt0tUMPW3aEeaOfarHfPKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmZXna3VX61zJiyVsq3AMfxHTpb42tZ7JlRu5z5%2F9Z8S01LTMqzHRZxjZ06RBkiHyZ2rd5dGLMJxiSG7dDdzH%2FYEkec33CuEp9nThXUY1nDhBQIM184VaouX5uI2zhJ1VJaldljsubAUhjg%2BqhNfUU9YVv0J22RA7YqyIH5BbttE3j6WvJ0orXQPqWWpm5gANuLl01yZVAMMKLOHwnilQW9tuZjaDa6wA1oCZZiZLoPNcinLr9hPlP5cOqHGjmWxxC6M0%2FFBWqdnjIqrUL6aWhBI5URwDGLP9%2F7zgeJssHhf72s6GxZvU6OTP%2FrJ%2BrzGfpMsxY41VDGUv%2BdClwVn1Lg08jNeZD%2Fx%2BiFqe93TQ1d%2BCCk8pwEuhQxoHEOPmuzBDLkcmTXXaD7Z3d05aT8BhU4WJO6MFlXFqlhN1NbmP4XYroiYlCQpaftr4fEbf52ViXVh7%2FUDNEqbitKjMReJUtw%2BkjyafySPrHcJBmrfw7JjeQxMODjAq2rYRY7SNo8lCUgW741GNESEB1Br2qKW%2F0%2BC5ugiRGjwC5oP4DgztYCqCDx1shr1btU7a2mKeAh3kEmJ%2FDPCDvr3tINj6OFll3eg1smuFx56DyfstxrInDHdZjOb9EDaRQIsGO1L6OWfP1MmXGanwD0foRJzDy37bLBjqkAVbaKAxqfN6oJhFmaAwy%2FZKUTjx5S6vZJgrb83%2BF%2BfSU3fs9OcLTT1S%2FCVQ6sHv%2F05%2Faih1HQB%2FVXf3lZbOIYlbLj42JbALasWchwv1h3WcPtXpXPq5WW35eiDu5iH52Z4P%2BxFFbSGR49YTZkBR%2BFmnjOxT%2BY72W64CEYDuxzR%2BiWc9d6i5ZymjlTlibOIULeMs%2BgVH10jhcNM2IHJWs5bmQc%2F6s&X-Amz-Signature=f25a87afff64e861323db1f21487d9d5bef01d43d88df3f5adb9ca30832498ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VWOKUI3%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhLYCue2kSqWXQz%2Blqc9kEIPitSPlyy5YwTw1BW2aDMAIhAM7gV1x6djOICCTyjPzge0RcYt0tUMPW3aEeaOfarHfPKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmZXna3VX61zJiyVsq3AMfxHTpb42tZ7JlRu5z5%2F9Z8S01LTMqzHRZxjZ06RBkiHyZ2rd5dGLMJxiSG7dDdzH%2FYEkec33CuEp9nThXUY1nDhBQIM184VaouX5uI2zhJ1VJaldljsubAUhjg%2BqhNfUU9YVv0J22RA7YqyIH5BbttE3j6WvJ0orXQPqWWpm5gANuLl01yZVAMMKLOHwnilQW9tuZjaDa6wA1oCZZiZLoPNcinLr9hPlP5cOqHGjmWxxC6M0%2FFBWqdnjIqrUL6aWhBI5URwDGLP9%2F7zgeJssHhf72s6GxZvU6OTP%2FrJ%2BrzGfpMsxY41VDGUv%2BdClwVn1Lg08jNeZD%2Fx%2BiFqe93TQ1d%2BCCk8pwEuhQxoHEOPmuzBDLkcmTXXaD7Z3d05aT8BhU4WJO6MFlXFqlhN1NbmP4XYroiYlCQpaftr4fEbf52ViXVh7%2FUDNEqbitKjMReJUtw%2BkjyafySPrHcJBmrfw7JjeQxMODjAq2rYRY7SNo8lCUgW741GNESEB1Br2qKW%2F0%2BC5ugiRGjwC5oP4DgztYCqCDx1shr1btU7a2mKeAh3kEmJ%2FDPCDvr3tINj6OFll3eg1smuFx56DyfstxrInDHdZjOb9EDaRQIsGO1L6OWfP1MmXGanwD0foRJzDy37bLBjqkAVbaKAxqfN6oJhFmaAwy%2FZKUTjx5S6vZJgrb83%2BF%2BfSU3fs9OcLTT1S%2FCVQ6sHv%2F05%2Faih1HQB%2FVXf3lZbOIYlbLj42JbALasWchwv1h3WcPtXpXPq5WW35eiDu5iH52Z4P%2BxFFbSGR49YTZkBR%2BFmnjOxT%2BY72W64CEYDuxzR%2BiWc9d6i5ZymjlTlibOIULeMs%2BgVH10jhcNM2IHJWs5bmQc%2F6s&X-Amz-Signature=adf2412b46650ef40f5f357ad1d09833731e4c5efbb4e0870b0a570617a96b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VWOKUI3%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhLYCue2kSqWXQz%2Blqc9kEIPitSPlyy5YwTw1BW2aDMAIhAM7gV1x6djOICCTyjPzge0RcYt0tUMPW3aEeaOfarHfPKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmZXna3VX61zJiyVsq3AMfxHTpb42tZ7JlRu5z5%2F9Z8S01LTMqzHRZxjZ06RBkiHyZ2rd5dGLMJxiSG7dDdzH%2FYEkec33CuEp9nThXUY1nDhBQIM184VaouX5uI2zhJ1VJaldljsubAUhjg%2BqhNfUU9YVv0J22RA7YqyIH5BbttE3j6WvJ0orXQPqWWpm5gANuLl01yZVAMMKLOHwnilQW9tuZjaDa6wA1oCZZiZLoPNcinLr9hPlP5cOqHGjmWxxC6M0%2FFBWqdnjIqrUL6aWhBI5URwDGLP9%2F7zgeJssHhf72s6GxZvU6OTP%2FrJ%2BrzGfpMsxY41VDGUv%2BdClwVn1Lg08jNeZD%2Fx%2BiFqe93TQ1d%2BCCk8pwEuhQxoHEOPmuzBDLkcmTXXaD7Z3d05aT8BhU4WJO6MFlXFqlhN1NbmP4XYroiYlCQpaftr4fEbf52ViXVh7%2FUDNEqbitKjMReJUtw%2BkjyafySPrHcJBmrfw7JjeQxMODjAq2rYRY7SNo8lCUgW741GNESEB1Br2qKW%2F0%2BC5ugiRGjwC5oP4DgztYCqCDx1shr1btU7a2mKeAh3kEmJ%2FDPCDvr3tINj6OFll3eg1smuFx56DyfstxrInDHdZjOb9EDaRQIsGO1L6OWfP1MmXGanwD0foRJzDy37bLBjqkAVbaKAxqfN6oJhFmaAwy%2FZKUTjx5S6vZJgrb83%2BF%2BfSU3fs9OcLTT1S%2FCVQ6sHv%2F05%2Faih1HQB%2FVXf3lZbOIYlbLj42JbALasWchwv1h3WcPtXpXPq5WW35eiDu5iH52Z4P%2BxFFbSGR49YTZkBR%2BFmnjOxT%2BY72W64CEYDuxzR%2BiWc9d6i5ZymjlTlibOIULeMs%2BgVH10jhcNM2IHJWs5bmQc%2F6s&X-Amz-Signature=3b91298d6ac554f7393d77fcfd55c33b1fb9f63bc4b0e89d3970edd793e57780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VWOKUI3%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhLYCue2kSqWXQz%2Blqc9kEIPitSPlyy5YwTw1BW2aDMAIhAM7gV1x6djOICCTyjPzge0RcYt0tUMPW3aEeaOfarHfPKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmZXna3VX61zJiyVsq3AMfxHTpb42tZ7JlRu5z5%2F9Z8S01LTMqzHRZxjZ06RBkiHyZ2rd5dGLMJxiSG7dDdzH%2FYEkec33CuEp9nThXUY1nDhBQIM184VaouX5uI2zhJ1VJaldljsubAUhjg%2BqhNfUU9YVv0J22RA7YqyIH5BbttE3j6WvJ0orXQPqWWpm5gANuLl01yZVAMMKLOHwnilQW9tuZjaDa6wA1oCZZiZLoPNcinLr9hPlP5cOqHGjmWxxC6M0%2FFBWqdnjIqrUL6aWhBI5URwDGLP9%2F7zgeJssHhf72s6GxZvU6OTP%2FrJ%2BrzGfpMsxY41VDGUv%2BdClwVn1Lg08jNeZD%2Fx%2BiFqe93TQ1d%2BCCk8pwEuhQxoHEOPmuzBDLkcmTXXaD7Z3d05aT8BhU4WJO6MFlXFqlhN1NbmP4XYroiYlCQpaftr4fEbf52ViXVh7%2FUDNEqbitKjMReJUtw%2BkjyafySPrHcJBmrfw7JjeQxMODjAq2rYRY7SNo8lCUgW741GNESEB1Br2qKW%2F0%2BC5ugiRGjwC5oP4DgztYCqCDx1shr1btU7a2mKeAh3kEmJ%2FDPCDvr3tINj6OFll3eg1smuFx56DyfstxrInDHdZjOb9EDaRQIsGO1L6OWfP1MmXGanwD0foRJzDy37bLBjqkAVbaKAxqfN6oJhFmaAwy%2FZKUTjx5S6vZJgrb83%2BF%2BfSU3fs9OcLTT1S%2FCVQ6sHv%2F05%2Faih1HQB%2FVXf3lZbOIYlbLj42JbALasWchwv1h3WcPtXpXPq5WW35eiDu5iH52Z4P%2BxFFbSGR49YTZkBR%2BFmnjOxT%2BY72W64CEYDuxzR%2BiWc9d6i5ZymjlTlibOIULeMs%2BgVH10jhcNM2IHJWs5bmQc%2F6s&X-Amz-Signature=c2446f439d086fc48705e2eeab2991cd01235e569c783a9bb56b3723b5de1232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWWUH7Q%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDb%2BnG%2Bb%2F4cxj5x9USKejdPf7bGmYm7HgsJQYI5p2PwgIhAPLvX2%2FAXToH6HXsJh15jvFBYwDsVrbnvpib1iaKEPAnKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAUUHTi4Y8kvL0v5wq3APgcL%2B7yJVfhdgELzWgYTYNcMJO5eloNCkQFyX7%2FFtdL%2FtvKnAyofV%2BN5szs0WqVMfIU5aix0tfD3RNF8CBcTDJMJI1jT9Ey9xl48MsezKo1ThXihlSEgmJ%2BMwI3NfxZt05bHvVDmzwy7AK0U26kYh4ZvKv%2BN1hEWiDX51PFtdc%2FB9wEaW4H%2B5vy7vHE0R2dSWUNRrCFKh%2BU9Koc4enb03zGpti81KjKwIPBeoGIS6au0tmc3UTxIBF%2BATnJ9pFnZZ9JFlhxHcMRfnlefEc7n50hV9Msk8CFRC4FqDEvwSfu92lsBX5WmE%2BxMnjWcQ8zRFxVnlVScd0DmHET%2F3W6iTZB3T8kRVBrvC7lWexVyYNfTOv%2Fx9X3QmutJ8Bk11Bu19jbxGw8%2B9rZ%2F7qR1Ttjd1A4%2FH47poVAbbrPc%2BwXZGwULfj2Yh7WNkdwhF0wDDPMeUd8DZe8ecMKobygp0Z3488zebA77FpsgAusAg86VEXgbcJNMzo5gkVhQsjw%2Ftsqbm4EvOA%2FKUQhJewbWZX9XtZijNtTGy%2Bdcpmet8f58cTLEhefASNw8tumB1X0J8M3aB5SlcYDVE8%2BmgRwZp%2FV7uhiLLqz3Vsx7yNCRk9eWbxOQ8zelXJBSkt%2B4gOtDDx37bLBjqkAUU%2Fso3gekGgGnUCplqMc86uUivb7igwFYuF%2FQo1pz5ZfqcGMq07ve6HH7l7hH1LBuqHCOefWeNa0BVmfBChtgFE7xzZ4PzXQeTgEGBg%2FFPqFF6ipKehYX1jltgxCAl0sYmkYUbojLRci5InzFwY7Bd3YUoMsUBuS64Or36qTRfmArCjtJaWQhLZxCYGiR60ELyOimfVYrPHO%2BmUYxKkgkxUaJeA&X-Amz-Signature=e263cceb7547191b5632160aade818fdc51dabde9ec81f9012293f3b3f76b4ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWWUH7Q%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDb%2BnG%2Bb%2F4cxj5x9USKejdPf7bGmYm7HgsJQYI5p2PwgIhAPLvX2%2FAXToH6HXsJh15jvFBYwDsVrbnvpib1iaKEPAnKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAUUHTi4Y8kvL0v5wq3APgcL%2B7yJVfhdgELzWgYTYNcMJO5eloNCkQFyX7%2FFtdL%2FtvKnAyofV%2BN5szs0WqVMfIU5aix0tfD3RNF8CBcTDJMJI1jT9Ey9xl48MsezKo1ThXihlSEgmJ%2BMwI3NfxZt05bHvVDmzwy7AK0U26kYh4ZvKv%2BN1hEWiDX51PFtdc%2FB9wEaW4H%2B5vy7vHE0R2dSWUNRrCFKh%2BU9Koc4enb03zGpti81KjKwIPBeoGIS6au0tmc3UTxIBF%2BATnJ9pFnZZ9JFlhxHcMRfnlefEc7n50hV9Msk8CFRC4FqDEvwSfu92lsBX5WmE%2BxMnjWcQ8zRFxVnlVScd0DmHET%2F3W6iTZB3T8kRVBrvC7lWexVyYNfTOv%2Fx9X3QmutJ8Bk11Bu19jbxGw8%2B9rZ%2F7qR1Ttjd1A4%2FH47poVAbbrPc%2BwXZGwULfj2Yh7WNkdwhF0wDDPMeUd8DZe8ecMKobygp0Z3488zebA77FpsgAusAg86VEXgbcJNMzo5gkVhQsjw%2Ftsqbm4EvOA%2FKUQhJewbWZX9XtZijNtTGy%2Bdcpmet8f58cTLEhefASNw8tumB1X0J8M3aB5SlcYDVE8%2BmgRwZp%2FV7uhiLLqz3Vsx7yNCRk9eWbxOQ8zelXJBSkt%2B4gOtDDx37bLBjqkAUU%2Fso3gekGgGnUCplqMc86uUivb7igwFYuF%2FQo1pz5ZfqcGMq07ve6HH7l7hH1LBuqHCOefWeNa0BVmfBChtgFE7xzZ4PzXQeTgEGBg%2FFPqFF6ipKehYX1jltgxCAl0sYmkYUbojLRci5InzFwY7Bd3YUoMsUBuS64Or36qTRfmArCjtJaWQhLZxCYGiR60ELyOimfVYrPHO%2BmUYxKkgkxUaJeA&X-Amz-Signature=aca644baf578b10fbbe2e46bcd334d338fcc41c78ba0e66a78932da03a0982db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWWUH7Q%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDb%2BnG%2Bb%2F4cxj5x9USKejdPf7bGmYm7HgsJQYI5p2PwgIhAPLvX2%2FAXToH6HXsJh15jvFBYwDsVrbnvpib1iaKEPAnKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAUUHTi4Y8kvL0v5wq3APgcL%2B7yJVfhdgELzWgYTYNcMJO5eloNCkQFyX7%2FFtdL%2FtvKnAyofV%2BN5szs0WqVMfIU5aix0tfD3RNF8CBcTDJMJI1jT9Ey9xl48MsezKo1ThXihlSEgmJ%2BMwI3NfxZt05bHvVDmzwy7AK0U26kYh4ZvKv%2BN1hEWiDX51PFtdc%2FB9wEaW4H%2B5vy7vHE0R2dSWUNRrCFKh%2BU9Koc4enb03zGpti81KjKwIPBeoGIS6au0tmc3UTxIBF%2BATnJ9pFnZZ9JFlhxHcMRfnlefEc7n50hV9Msk8CFRC4FqDEvwSfu92lsBX5WmE%2BxMnjWcQ8zRFxVnlVScd0DmHET%2F3W6iTZB3T8kRVBrvC7lWexVyYNfTOv%2Fx9X3QmutJ8Bk11Bu19jbxGw8%2B9rZ%2F7qR1Ttjd1A4%2FH47poVAbbrPc%2BwXZGwULfj2Yh7WNkdwhF0wDDPMeUd8DZe8ecMKobygp0Z3488zebA77FpsgAusAg86VEXgbcJNMzo5gkVhQsjw%2Ftsqbm4EvOA%2FKUQhJewbWZX9XtZijNtTGy%2Bdcpmet8f58cTLEhefASNw8tumB1X0J8M3aB5SlcYDVE8%2BmgRwZp%2FV7uhiLLqz3Vsx7yNCRk9eWbxOQ8zelXJBSkt%2B4gOtDDx37bLBjqkAUU%2Fso3gekGgGnUCplqMc86uUivb7igwFYuF%2FQo1pz5ZfqcGMq07ve6HH7l7hH1LBuqHCOefWeNa0BVmfBChtgFE7xzZ4PzXQeTgEGBg%2FFPqFF6ipKehYX1jltgxCAl0sYmkYUbojLRci5InzFwY7Bd3YUoMsUBuS64Or36qTRfmArCjtJaWQhLZxCYGiR60ELyOimfVYrPHO%2BmUYxKkgkxUaJeA&X-Amz-Signature=03566a4ddd8d5e8c0ed83d392d54a11eeb172ca9a4e93f6528e48a2495d504b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3CHY37V%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWccGVJdqAPQuqy7rSx8lgzMHAuEw3DnNgdvlIUVaUaAiAjigXW8qbEVycxmFzIkTF8Az%2B0D9E7114WgT5ZKhbUJiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUKzg1x1rYAmNbgqbKtwDoxxFxyT2a2NPbCRgChv21P8Hq1BfKDmCtj6rxGj7B7yrdArgLph8szP%2B6TLhnBeb0VwWlFJphGMJE2O43cnHrdbRahHF8Snm4NwpzxVzuT2FcvtqARwAhEcAE7HbQ%2BiZA4UbmGt5RgRsTbt0BC5JjpHP1GGiNVZXCboft%2BHc%2BVzpgtl4ZCWj7Ak5ZvWJCUSRsmlWGhyCf%2BmzCN0mP2x59i1AX7VzV%2FBi1epGMfdhONScjivLwoJrDnzreZOpKeNVyU9CcZuU6bo%2FkvuAnc7lAWsCTKjLni2cVOylhwdOTHJbZdfGnE9okypYHN7%2FGd9laq4dKtJasfvHX5XWCUsKCJZ7tKNfKITUCY%2BgGhLFOh4J%2BfmV8s%2FH%2BpSHHuSxa4NCDESHQ2ukhmKbWe7QfYTwv0oflhIOEX%2BFY2swzpCntvdMUWR2r3u5blvnGKSFA5oix7Ih4YgidC6SuRfsxnFm79QGtKdi94%2B%2BZyt9O%2BrNJyvdu4ZO4tfhbWkLG2mqLty3HgvOrjpIbkfyAqnFQl0USt2opYu2cHeAStmMtuZ5Bmcedfjg3N1h2biqfUde9Gdq1dTSf8f4EC4MskB7RieCabwA1SYdC32WUfqZspRJs0F826aYWOQmw6kXM7Iw8N%2B2ywY6pgFBuCLJOM7n3TvrPqnZcId7xkLjvxDSRWZEFE8vm6NQt00oFG%2FMwZHvl7GQsnHcEx7Lut8AGFrSpbXXFZvbJ5jrDJM%2FENXWKIfyZeO8uePwmnFEnhFDhry2w%2BVcJRwQti3NMwQYLFNQ2rzSJ1mBSg%2BIUmD6HXUa69sVWqS5XZ2sn6n71zc0QLIOtYxUQow2ccMpMXy5duR6ZoJpfvK2B4JHMWjeekQT&X-Amz-Signature=de9cc85ed0286c754ee3105d73aabb95e75b060ed10f9830213d36e681ec0896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3CHY37V%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWccGVJdqAPQuqy7rSx8lgzMHAuEw3DnNgdvlIUVaUaAiAjigXW8qbEVycxmFzIkTF8Az%2B0D9E7114WgT5ZKhbUJiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUKzg1x1rYAmNbgqbKtwDoxxFxyT2a2NPbCRgChv21P8Hq1BfKDmCtj6rxGj7B7yrdArgLph8szP%2B6TLhnBeb0VwWlFJphGMJE2O43cnHrdbRahHF8Snm4NwpzxVzuT2FcvtqARwAhEcAE7HbQ%2BiZA4UbmGt5RgRsTbt0BC5JjpHP1GGiNVZXCboft%2BHc%2BVzpgtl4ZCWj7Ak5ZvWJCUSRsmlWGhyCf%2BmzCN0mP2x59i1AX7VzV%2FBi1epGMfdhONScjivLwoJrDnzreZOpKeNVyU9CcZuU6bo%2FkvuAnc7lAWsCTKjLni2cVOylhwdOTHJbZdfGnE9okypYHN7%2FGd9laq4dKtJasfvHX5XWCUsKCJZ7tKNfKITUCY%2BgGhLFOh4J%2BfmV8s%2FH%2BpSHHuSxa4NCDESHQ2ukhmKbWe7QfYTwv0oflhIOEX%2BFY2swzpCntvdMUWR2r3u5blvnGKSFA5oix7Ih4YgidC6SuRfsxnFm79QGtKdi94%2B%2BZyt9O%2BrNJyvdu4ZO4tfhbWkLG2mqLty3HgvOrjpIbkfyAqnFQl0USt2opYu2cHeAStmMtuZ5Bmcedfjg3N1h2biqfUde9Gdq1dTSf8f4EC4MskB7RieCabwA1SYdC32WUfqZspRJs0F826aYWOQmw6kXM7Iw8N%2B2ywY6pgFBuCLJOM7n3TvrPqnZcId7xkLjvxDSRWZEFE8vm6NQt00oFG%2FMwZHvl7GQsnHcEx7Lut8AGFrSpbXXFZvbJ5jrDJM%2FENXWKIfyZeO8uePwmnFEnhFDhry2w%2BVcJRwQti3NMwQYLFNQ2rzSJ1mBSg%2BIUmD6HXUa69sVWqS5XZ2sn6n71zc0QLIOtYxUQow2ccMpMXy5duR6ZoJpfvK2B4JHMWjeekQT&X-Amz-Signature=c382419eae81d2bd5fa5243fb332bf78b58fa6bade952ce6746e5f15dd4822f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HB3OVU5%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4t4CDLuuklyIQ3YzqeWoEmfBIptGvaK5UEMAZbfPVpAiEA2mfLDWFpETi9f7TNNkLCxi1LQ83k0sW1nChJpSTHKiAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqqsSZkQnQ0XmJiBCrcA5F%2BAGL4D7Mm%2BkgZGknPtbiOq6Aj8xdxArHOOnS3fgT0CqC1Q6ew2wJfy78B8pUTvjvBaVhmBH87K1l7F6QTMSnuEHDN8Qh0PbjT1fgdWNorJ8zfOntEbxJ5RrWq1wO6%2FdaeaJsNb2GVpFbPzIwWDy9FtP7VGdx1v2P%2BYP974AXwd%2F%2F5jSyWjDpRHftZgMO%2FpsTUS7b7pEH6YGheYxACtCRafuUB6FGxOIs6Mg6gPrxEHJL%2Bghf32vWK1nh9p1HbxRVf%2FbJ%2Fli%2FLFBKa4d3BKKjhprOPrOGhlJDoZRb6WwTxC2Mjao2UQPf3DsNxsVSjY0JJ4M5gm1N5GVVt88ZL0wMNSiDafN4Nt0WAtO6BYVegM0CRA7ssiq8ztUYHzs7iPFLQKljnKUgC39ky139SzatUjDDPq0%2FVTGzTzozZsp4dUyI7o1TZUPgtfnprYwcu%2FsHYTZXd32lBSGN9DBrztfPEB5T2E0TyNjke40PxOBct1nYey%2FR7paWgpwF8YrEtJhEvaar%2F%2BoQMIwc5re2zrNwI%2B%2FjM8%2BXaXm3GWV3xwhixL2OMUH4zVONa7tclK51%2BQ51YpA2%2F5Y9FxZleSGa6t3j5loffQha5akxbz6meQEE0uTT325VfQz6SJm5eMOTftssGOqUBr9FbmrM7X6bippCY0L1AHvqb%2B5YNt2o9wt534GoVbchnm%2BSGOAC%2F1j%2FGCkWEF65VaVBgG2mHvWg19QZz8umEshgKq9065788Tfr3W78x1veI54XwIY9aGW5JYjIJQKeUs6K0EPPNZIuNwf2wTUeQSYRV%2F1IorUHIU4Bj%2FzR9tMdT22B9jY5DIceaDv%2BqsH1xT%2BHkr%2F3%2FNNPKgDnn3%2BR0lSGkR9FP&X-Amz-Signature=a06e893d7fff11870bf879d3f4694feba27ddb13ae660e0cd22ebc58e4807cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HB3OVU5%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4t4CDLuuklyIQ3YzqeWoEmfBIptGvaK5UEMAZbfPVpAiEA2mfLDWFpETi9f7TNNkLCxi1LQ83k0sW1nChJpSTHKiAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqqsSZkQnQ0XmJiBCrcA5F%2BAGL4D7Mm%2BkgZGknPtbiOq6Aj8xdxArHOOnS3fgT0CqC1Q6ew2wJfy78B8pUTvjvBaVhmBH87K1l7F6QTMSnuEHDN8Qh0PbjT1fgdWNorJ8zfOntEbxJ5RrWq1wO6%2FdaeaJsNb2GVpFbPzIwWDy9FtP7VGdx1v2P%2BYP974AXwd%2F%2F5jSyWjDpRHftZgMO%2FpsTUS7b7pEH6YGheYxACtCRafuUB6FGxOIs6Mg6gPrxEHJL%2Bghf32vWK1nh9p1HbxRVf%2FbJ%2Fli%2FLFBKa4d3BKKjhprOPrOGhlJDoZRb6WwTxC2Mjao2UQPf3DsNxsVSjY0JJ4M5gm1N5GVVt88ZL0wMNSiDafN4Nt0WAtO6BYVegM0CRA7ssiq8ztUYHzs7iPFLQKljnKUgC39ky139SzatUjDDPq0%2FVTGzTzozZsp4dUyI7o1TZUPgtfnprYwcu%2FsHYTZXd32lBSGN9DBrztfPEB5T2E0TyNjke40PxOBct1nYey%2FR7paWgpwF8YrEtJhEvaar%2F%2BoQMIwc5re2zrNwI%2B%2FjM8%2BXaXm3GWV3xwhixL2OMUH4zVONa7tclK51%2BQ51YpA2%2F5Y9FxZleSGa6t3j5loffQha5akxbz6meQEE0uTT325VfQz6SJm5eMOTftssGOqUBr9FbmrM7X6bippCY0L1AHvqb%2B5YNt2o9wt534GoVbchnm%2BSGOAC%2F1j%2FGCkWEF65VaVBgG2mHvWg19QZz8umEshgKq9065788Tfr3W78x1veI54XwIY9aGW5JYjIJQKeUs6K0EPPNZIuNwf2wTUeQSYRV%2F1IorUHIU4Bj%2FzR9tMdT22B9jY5DIceaDv%2BqsH1xT%2BHkr%2F3%2FNNPKgDnn3%2BR0lSGkR9FP&X-Amz-Signature=4e692ad34b75c886905d545b6cdcd8525776fc1cad884787bb5d61ee8ad297c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HB3OVU5%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4t4CDLuuklyIQ3YzqeWoEmfBIptGvaK5UEMAZbfPVpAiEA2mfLDWFpETi9f7TNNkLCxi1LQ83k0sW1nChJpSTHKiAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqqsSZkQnQ0XmJiBCrcA5F%2BAGL4D7Mm%2BkgZGknPtbiOq6Aj8xdxArHOOnS3fgT0CqC1Q6ew2wJfy78B8pUTvjvBaVhmBH87K1l7F6QTMSnuEHDN8Qh0PbjT1fgdWNorJ8zfOntEbxJ5RrWq1wO6%2FdaeaJsNb2GVpFbPzIwWDy9FtP7VGdx1v2P%2BYP974AXwd%2F%2F5jSyWjDpRHftZgMO%2FpsTUS7b7pEH6YGheYxACtCRafuUB6FGxOIs6Mg6gPrxEHJL%2Bghf32vWK1nh9p1HbxRVf%2FbJ%2Fli%2FLFBKa4d3BKKjhprOPrOGhlJDoZRb6WwTxC2Mjao2UQPf3DsNxsVSjY0JJ4M5gm1N5GVVt88ZL0wMNSiDafN4Nt0WAtO6BYVegM0CRA7ssiq8ztUYHzs7iPFLQKljnKUgC39ky139SzatUjDDPq0%2FVTGzTzozZsp4dUyI7o1TZUPgtfnprYwcu%2FsHYTZXd32lBSGN9DBrztfPEB5T2E0TyNjke40PxOBct1nYey%2FR7paWgpwF8YrEtJhEvaar%2F%2BoQMIwc5re2zrNwI%2B%2FjM8%2BXaXm3GWV3xwhixL2OMUH4zVONa7tclK51%2BQ51YpA2%2F5Y9FxZleSGa6t3j5loffQha5akxbz6meQEE0uTT325VfQz6SJm5eMOTftssGOqUBr9FbmrM7X6bippCY0L1AHvqb%2B5YNt2o9wt534GoVbchnm%2BSGOAC%2F1j%2FGCkWEF65VaVBgG2mHvWg19QZz8umEshgKq9065788Tfr3W78x1veI54XwIY9aGW5JYjIJQKeUs6K0EPPNZIuNwf2wTUeQSYRV%2F1IorUHIU4Bj%2FzR9tMdT22B9jY5DIceaDv%2BqsH1xT%2BHkr%2F3%2FNNPKgDnn3%2BR0lSGkR9FP&X-Amz-Signature=968363de3ea7c6c3e0ca806d481171604025bd24b74133d51c2e8957a4fbfc33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HB3OVU5%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4t4CDLuuklyIQ3YzqeWoEmfBIptGvaK5UEMAZbfPVpAiEA2mfLDWFpETi9f7TNNkLCxi1LQ83k0sW1nChJpSTHKiAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqqsSZkQnQ0XmJiBCrcA5F%2BAGL4D7Mm%2BkgZGknPtbiOq6Aj8xdxArHOOnS3fgT0CqC1Q6ew2wJfy78B8pUTvjvBaVhmBH87K1l7F6QTMSnuEHDN8Qh0PbjT1fgdWNorJ8zfOntEbxJ5RrWq1wO6%2FdaeaJsNb2GVpFbPzIwWDy9FtP7VGdx1v2P%2BYP974AXwd%2F%2F5jSyWjDpRHftZgMO%2FpsTUS7b7pEH6YGheYxACtCRafuUB6FGxOIs6Mg6gPrxEHJL%2Bghf32vWK1nh9p1HbxRVf%2FbJ%2Fli%2FLFBKa4d3BKKjhprOPrOGhlJDoZRb6WwTxC2Mjao2UQPf3DsNxsVSjY0JJ4M5gm1N5GVVt88ZL0wMNSiDafN4Nt0WAtO6BYVegM0CRA7ssiq8ztUYHzs7iPFLQKljnKUgC39ky139SzatUjDDPq0%2FVTGzTzozZsp4dUyI7o1TZUPgtfnprYwcu%2FsHYTZXd32lBSGN9DBrztfPEB5T2E0TyNjke40PxOBct1nYey%2FR7paWgpwF8YrEtJhEvaar%2F%2BoQMIwc5re2zrNwI%2B%2FjM8%2BXaXm3GWV3xwhixL2OMUH4zVONa7tclK51%2BQ51YpA2%2F5Y9FxZleSGa6t3j5loffQha5akxbz6meQEE0uTT325VfQz6SJm5eMOTftssGOqUBr9FbmrM7X6bippCY0L1AHvqb%2B5YNt2o9wt534GoVbchnm%2BSGOAC%2F1j%2FGCkWEF65VaVBgG2mHvWg19QZz8umEshgKq9065788Tfr3W78x1veI54XwIY9aGW5JYjIJQKeUs6K0EPPNZIuNwf2wTUeQSYRV%2F1IorUHIU4Bj%2FzR9tMdT22B9jY5DIceaDv%2BqsH1xT%2BHkr%2F3%2FNNPKgDnn3%2BR0lSGkR9FP&X-Amz-Signature=e04ec2ac940d32f84618ada9798c0d04b12fb494bbeff47d2fb66a3ee7dee8b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HB3OVU5%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4t4CDLuuklyIQ3YzqeWoEmfBIptGvaK5UEMAZbfPVpAiEA2mfLDWFpETi9f7TNNkLCxi1LQ83k0sW1nChJpSTHKiAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqqsSZkQnQ0XmJiBCrcA5F%2BAGL4D7Mm%2BkgZGknPtbiOq6Aj8xdxArHOOnS3fgT0CqC1Q6ew2wJfy78B8pUTvjvBaVhmBH87K1l7F6QTMSnuEHDN8Qh0PbjT1fgdWNorJ8zfOntEbxJ5RrWq1wO6%2FdaeaJsNb2GVpFbPzIwWDy9FtP7VGdx1v2P%2BYP974AXwd%2F%2F5jSyWjDpRHftZgMO%2FpsTUS7b7pEH6YGheYxACtCRafuUB6FGxOIs6Mg6gPrxEHJL%2Bghf32vWK1nh9p1HbxRVf%2FbJ%2Fli%2FLFBKa4d3BKKjhprOPrOGhlJDoZRb6WwTxC2Mjao2UQPf3DsNxsVSjY0JJ4M5gm1N5GVVt88ZL0wMNSiDafN4Nt0WAtO6BYVegM0CRA7ssiq8ztUYHzs7iPFLQKljnKUgC39ky139SzatUjDDPq0%2FVTGzTzozZsp4dUyI7o1TZUPgtfnprYwcu%2FsHYTZXd32lBSGN9DBrztfPEB5T2E0TyNjke40PxOBct1nYey%2FR7paWgpwF8YrEtJhEvaar%2F%2BoQMIwc5re2zrNwI%2B%2FjM8%2BXaXm3GWV3xwhixL2OMUH4zVONa7tclK51%2BQ51YpA2%2F5Y9FxZleSGa6t3j5loffQha5akxbz6meQEE0uTT325VfQz6SJm5eMOTftssGOqUBr9FbmrM7X6bippCY0L1AHvqb%2B5YNt2o9wt534GoVbchnm%2BSGOAC%2F1j%2FGCkWEF65VaVBgG2mHvWg19QZz8umEshgKq9065788Tfr3W78x1veI54XwIY9aGW5JYjIJQKeUs6K0EPPNZIuNwf2wTUeQSYRV%2F1IorUHIU4Bj%2FzR9tMdT22B9jY5DIceaDv%2BqsH1xT%2BHkr%2F3%2FNNPKgDnn3%2BR0lSGkR9FP&X-Amz-Signature=96484f8962ff65ac81d7e48c26bf7bd4ca3f84f385c039873c188a968745eabb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCTZ62O%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T042102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGJOqumjFP2s5vLR9BRCwoIbQg4JljqjVf3LAZqY%2FZSAiEA7vGRtDb%2BXx5Psgyk%2B6Ow5Bklheww926fTvmYWSECt8MqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQcuH1%2FwQhCH2zROCrcAw9rb2ZjVFXgQJzXxadXItEB8OY5BHLE21qNP4l2h1U1bXKoFumhrAzcJE4k7Q%2FioDXG0VnEFAwsQf31EZghSK5s452XhONFvqxKPoyvR9b%2FyW%2BeZMqGBX8q95otMTwwihtma%2FTyxdVWswTEJOg2gYO0mStJUYD83Noy7sY0F92OhT1hrHqcvsqslocGyOei6t3iPMBh%2FmiZuzBWA5BXmRz3YSVUBm6Np9MblBOyiE7%2Fz9djkPaLRq1aJXlbLADiTWZZuMHoyRA0OLTHY1TcBAnZk0VXMzEy88J4utfhaJKwCiTCyW5qi3irrU%2FdXbsNmgS%2F70LPUtFXu%2FdtjDDMZr7LoLAXS9eKb6v%2F%2F75JUrhfa8vuQLwoY0QbhDLLcxj3H5z2KQDaEYjOn0sOeuh5iFt3Pfa3tiFkqp4f%2FiYussUO0qIM5XfBLon2mORF5hYCA2kBVblVZSZMP9yao2lWYcPCm7SAajIfooc7YcMmkGIlqyJtf020Uy7iQ7wGpXlA2j9TSbCGksFAX98J37oX%2Flkw8YG5Y9H0k49YlNcYjISr%2B7P2jyChit%2F0%2Bzxx5%2BKSp0Txxe1FtpoUkbuOVB0YBj1m25VNifLl3qFHboI%2FCHthZ6ij4zWqK3TN5uwYMPvftssGOqUBNXdT8vDA%2BFXhkTeYY4%2Fa%2BsI7fUVXFEwsTpJK0Hp4PC83FfGooWjtF6%2B%2BZUmNDqyCSmtdq4aLc7tw%2B%2Fxw86QHqj9gTVgsBWBbD%2FmLTeRL%2B538Yf%2F3Nph7wncxjbA3eF%2FRwCxslREboY5%2BjkVqditOkcSQJSgM9qA9%2BxeHN2%2BD6fKcjrUCGAe9OQM1NU%2BG0VPirETyntpFWnEGTOsB5RlrqbxaogIp&X-Amz-Signature=3fd12c960e40bdf154c17403ff907e82f55fae27ab89cfb01f6cb83729a2bd52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

