
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB5MADRF%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDbIQxVgZQCszyXtVwLyvulfQgfdTX8%2BSVBtJv3gZ%2Fj8gIhAI5QjZ5eLFhz%2FRRQp3GsGCBpWENXvEjqzSX6edDZG6B9KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuuAdTJDldbsQbac4q3APKT0Jer2uPHBhPzXv3v%2Fr16qKWXjYyw60isIDEdPKr7cMEii4dFH2O00h%2BUNb24%2BpRlrwBBzZeyZ51dgZ3iUmjQj%2FT14nGQqZbEubbzUd3SQ6WK9iEDb8%2FENZb0lRsxccgC7pTiE1fY7N3F21CPgZq9VnSOgFaboZ%2Fq3IEs60ddkjPqEvKVOIQgnk3dAdeS%2BW7IRZ1VCuAEMMDY3JeaXChbu2dBsJX9VDa%2Fl8vKPu3zf9seCdBQHP%2FXrpvuVkMjYiZ1eyn28RQkZrzAugyLideHr0LPQFz2uquGwTeCV89MRHlpWH7VSIGbbRYP1Q6vMoQh4ntXlrThMgKrd6piYlhX2Um2QA7r0yljWKQjCfIN81u12vRt2E1cd27Ocbl2GphZ7MirYA71a9CXbH1041rcp%2FRNMQPWjNiCJYoyG1ctjvzNwSJl%2BvBvhwUWjTzUDnRfCsCLq10gMBH3xtvyzjtIJn%2F5Ozt081JFrWXpbMf06Y7gjXnrfUhwFvI1q%2FXskf8cXnSmmBREbgTFArRXkTHxEBmtkYC5%2FWjtlAZ4%2FvA7LZ7%2Bk%2FiKzWTR9Du%2FQqJ%2FOtP9JZC2bz%2FucvaYo%2BoQ84C6kh95pjwejlro2CJnXgC2sx5p85HsWcGyzHdtTD%2F2svLBjqkAR9p37p%2B5XmwfycbcpCB6CJhWQbAIaDGY0zSTclaY2CnxryqTtFe%2FKIMlPQji0haWLrkNiBFWRcPJIt1ucP8lrtX173RYpc350hc6xMfkOa%2FFynBcclVUvS7llxTI4ScF9xpsA7p3W8Px56RVN3hrHOsILPMK8A85gNG52vVmTTzuCb4F6PoYkEqIuFkiyvoHlOZB4Wg6D3iXIOcZORG12tnG64%2F&X-Amz-Signature=66c47890c3ee6f0a9764c46efba18c33b99443663ae286895fccebe87749d2f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYC7GWAW%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFmhFmQASvdA8S0WzJBRTi9ZfZvkCXOVzoazgh%2BhHEc5AiBZdGs3BXUvs%2BdqZGidseh1GlffmvJAofQAEji31%2FGM%2BSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4wtWZ0sWr3DATJf%2FKtwD%2FqL4qQh2%2FTJKhPF078B5fDIgm2zHQUpd4EEbgzaozsqhVkFkcd02GVcmF15D6Uub9WZPZiBcjnaHz8rp%2BM2WI4eWP7TXWFDQMXd7GGhN3VCnmSmOBjXY29rDccpozZ9v97q55U6SLwpZRAsdAlikn1ipNCtEKKrxq22M%2FoPBQa%2Fp%2FbDwbJE%2Bm%2Ft2Nb%2Be4MEVA%2FNp6HrpDZ07z7MPsGaxg0D0BMRIq61biRPDphRcN6LO%2FUHWsQRM82VqT3%2FVd3w055iatbP%2BODNsXftbUOgNRUkke63rbMQgDiDOVZMv4To7EbdnfS%2F0TcPDbDpocvrHwk%2BdyhZaFL%2FVXktBWiS42CWiDWgzEZehy3jQ0Vve1LRjUcovBNCWMqJEqA%2FgJk9JnA1enOjos6etMKEJ9SZ6azqKCnOwzWv4EW2xw%2Bmh8wOQ%2Fyd04YISB6V7jfj1K49fyEBZJqZqbm40KbfjPxnZ%2FhLr8ldQhDmBVJkWi1S66W2juItJtt1Gy9C7ePIIFAp7cRo49WUgXy4ggW3yZJ6CC5dh2zPjcDaIgCqtqK6lISKqBOXSg4dmp%2Fy7cBwGDN7VNTvvS4MaA88L99WwQza2N6O5a%2FO1477%2B9AjZDCuQA%2BBggtz5LsXl3pzeNyEw4trLywY6pgEkoQxFkkYyO%2FQz6uGHpWiYcggaiPWqD7s9LWwL%2FlYEZg9uY11n4rylNXQYCxMfQ%2BmYWC9l9U1%2B6Yu2yWGoS7yeOPSMUO%2F5%2FoiD4is0mX2KxOVd4J8PIztiyC4UL0N1kzFNQAbvYZhzCfjA3dQbW9wKtsPECUglsN9fp0tWcFKfug%2Foc%2FaVVdfBk%2Btry5H%2BgBG8K8oRo4BBTnmqztd4B9xZXCXMmjJQ&X-Amz-Signature=627eabc8c5d7f7853f4aab86b8cbab63585f16b44515c07ce55e33436bf39f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYC7GWAW%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFmhFmQASvdA8S0WzJBRTi9ZfZvkCXOVzoazgh%2BhHEc5AiBZdGs3BXUvs%2BdqZGidseh1GlffmvJAofQAEji31%2FGM%2BSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4wtWZ0sWr3DATJf%2FKtwD%2FqL4qQh2%2FTJKhPF078B5fDIgm2zHQUpd4EEbgzaozsqhVkFkcd02GVcmF15D6Uub9WZPZiBcjnaHz8rp%2BM2WI4eWP7TXWFDQMXd7GGhN3VCnmSmOBjXY29rDccpozZ9v97q55U6SLwpZRAsdAlikn1ipNCtEKKrxq22M%2FoPBQa%2Fp%2FbDwbJE%2Bm%2Ft2Nb%2Be4MEVA%2FNp6HrpDZ07z7MPsGaxg0D0BMRIq61biRPDphRcN6LO%2FUHWsQRM82VqT3%2FVd3w055iatbP%2BODNsXftbUOgNRUkke63rbMQgDiDOVZMv4To7EbdnfS%2F0TcPDbDpocvrHwk%2BdyhZaFL%2FVXktBWiS42CWiDWgzEZehy3jQ0Vve1LRjUcovBNCWMqJEqA%2FgJk9JnA1enOjos6etMKEJ9SZ6azqKCnOwzWv4EW2xw%2Bmh8wOQ%2Fyd04YISB6V7jfj1K49fyEBZJqZqbm40KbfjPxnZ%2FhLr8ldQhDmBVJkWi1S66W2juItJtt1Gy9C7ePIIFAp7cRo49WUgXy4ggW3yZJ6CC5dh2zPjcDaIgCqtqK6lISKqBOXSg4dmp%2Fy7cBwGDN7VNTvvS4MaA88L99WwQza2N6O5a%2FO1477%2B9AjZDCuQA%2BBggtz5LsXl3pzeNyEw4trLywY6pgEkoQxFkkYyO%2FQz6uGHpWiYcggaiPWqD7s9LWwL%2FlYEZg9uY11n4rylNXQYCxMfQ%2BmYWC9l9U1%2B6Yu2yWGoS7yeOPSMUO%2F5%2FoiD4is0mX2KxOVd4J8PIztiyC4UL0N1kzFNQAbvYZhzCfjA3dQbW9wKtsPECUglsN9fp0tWcFKfug%2Foc%2FaVVdfBk%2Btry5H%2BgBG8K8oRo4BBTnmqztd4B9xZXCXMmjJQ&X-Amz-Signature=70712fcfaaa83087984023a70f25de35ce81cea3dceefbe7b58f442f9ad042d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAV74RQN%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGdBVtQQqoR5mmgJpPaaJMNRGJyvPXCOAg68gYKk3veUAiArHY%2BDAU1jMJAS7qSlSXum%2FGzy7FlV9tjBeSKFADNrWCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqNo4PXynomuzPo9TKtwDMbeIWdfiM9kK7PdzLhnaSpzkFLL3LALW2GQdjchguN0l8YLwA%2B6fwVTYh%2BGA2K7qeB7gpW7Xij4MXOdKAmkEhxX30R7K4RzBiaWz%2B%2FsSZM8eSPElAMm3E7lfNYBjirpZ%2BxjsWze8E9M6mkBlSFai%2Brd9SB85BdkdJ9AXjDVxcj2kxjBs6cyTyRE4gDNGTr2W8uWraGAnUbs3qX9pW8KmOnnnyyLO9s3fJBFtseGcE8%2Faq9nCfNyptEftkBsyogfHx18ZH1ayz2Q%2FWdD66DRCTQrPLqyW25uJXhD9z2RQk3Cw3ebJW1VNfr5paQC7EB78KILCASuWEw%2BF%2BAS0rR%2FSYY0beSv83ZylLrS8o7kqSi33nrm9v3pOm5c%2FWT7JjrXMH1%2BEhoEhsdM4Y1ADbnt4179Onh1emvkG4tjtkbPEqGP7CwlGunWv7GzcRyvCDKZTHAUeKrsl5xDE9AvEXwl3gwmURjFJQLlzeRE3GbIHb6LIyAHGwrMwo0FaKsjetFiqkPpEhiY1q9g5%2Fr4DtAFAKfSvyOJyP9c%2FHOKRdlWvE1fY9DdoC%2F2NhrJEam5Pn8w1GhgaLVpGlwPbzPkf2iso9598jomNcKy3p3pwSTtJtHU5LbT0nVAtApenoFEwmdzLywY6pgFL3yBjMP%2FuC61%2FF7iQaP7ZMQ1hdRyZv9oSbt6VqwpHfGXFNG3uUF67ur9vxdDeGZsfbF8yxpplDxh5QCKegpeGrems0N86iPEC81Tg0MFBZksHKG1Dh8M%2Bba24ZcYcmv4wTJxuYxY4JwibfoJ7ADzLBLAw0Y%2B3KycGEXMNSWjKtN6dLhQZk7I6J94z5swGNoP3%2Ff7sAN%2FCtoLXCFESGZvghSKEJ6Sn&X-Amz-Signature=4aa2a80bee39bda0b44db9a5f0f0e707e86c55ab94736b4c8075983b7ac3120b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAV74RQN%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGdBVtQQqoR5mmgJpPaaJMNRGJyvPXCOAg68gYKk3veUAiArHY%2BDAU1jMJAS7qSlSXum%2FGzy7FlV9tjBeSKFADNrWCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqNo4PXynomuzPo9TKtwDMbeIWdfiM9kK7PdzLhnaSpzkFLL3LALW2GQdjchguN0l8YLwA%2B6fwVTYh%2BGA2K7qeB7gpW7Xij4MXOdKAmkEhxX30R7K4RzBiaWz%2B%2FsSZM8eSPElAMm3E7lfNYBjirpZ%2BxjsWze8E9M6mkBlSFai%2Brd9SB85BdkdJ9AXjDVxcj2kxjBs6cyTyRE4gDNGTr2W8uWraGAnUbs3qX9pW8KmOnnnyyLO9s3fJBFtseGcE8%2Faq9nCfNyptEftkBsyogfHx18ZH1ayz2Q%2FWdD66DRCTQrPLqyW25uJXhD9z2RQk3Cw3ebJW1VNfr5paQC7EB78KILCASuWEw%2BF%2BAS0rR%2FSYY0beSv83ZylLrS8o7kqSi33nrm9v3pOm5c%2FWT7JjrXMH1%2BEhoEhsdM4Y1ADbnt4179Onh1emvkG4tjtkbPEqGP7CwlGunWv7GzcRyvCDKZTHAUeKrsl5xDE9AvEXwl3gwmURjFJQLlzeRE3GbIHb6LIyAHGwrMwo0FaKsjetFiqkPpEhiY1q9g5%2Fr4DtAFAKfSvyOJyP9c%2FHOKRdlWvE1fY9DdoC%2F2NhrJEam5Pn8w1GhgaLVpGlwPbzPkf2iso9598jomNcKy3p3pwSTtJtHU5LbT0nVAtApenoFEwmdzLywY6pgFL3yBjMP%2FuC61%2FF7iQaP7ZMQ1hdRyZv9oSbt6VqwpHfGXFNG3uUF67ur9vxdDeGZsfbF8yxpplDxh5QCKegpeGrems0N86iPEC81Tg0MFBZksHKG1Dh8M%2Bba24ZcYcmv4wTJxuYxY4JwibfoJ7ADzLBLAw0Y%2B3KycGEXMNSWjKtN6dLhQZk7I6J94z5swGNoP3%2Ff7sAN%2FCtoLXCFESGZvghSKEJ6Sn&X-Amz-Signature=3f5b630d26c608f2905c6fc684a728f630108ed7f42ed577e95a5317111df509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAV74RQN%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGdBVtQQqoR5mmgJpPaaJMNRGJyvPXCOAg68gYKk3veUAiArHY%2BDAU1jMJAS7qSlSXum%2FGzy7FlV9tjBeSKFADNrWCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqNo4PXynomuzPo9TKtwDMbeIWdfiM9kK7PdzLhnaSpzkFLL3LALW2GQdjchguN0l8YLwA%2B6fwVTYh%2BGA2K7qeB7gpW7Xij4MXOdKAmkEhxX30R7K4RzBiaWz%2B%2FsSZM8eSPElAMm3E7lfNYBjirpZ%2BxjsWze8E9M6mkBlSFai%2Brd9SB85BdkdJ9AXjDVxcj2kxjBs6cyTyRE4gDNGTr2W8uWraGAnUbs3qX9pW8KmOnnnyyLO9s3fJBFtseGcE8%2Faq9nCfNyptEftkBsyogfHx18ZH1ayz2Q%2FWdD66DRCTQrPLqyW25uJXhD9z2RQk3Cw3ebJW1VNfr5paQC7EB78KILCASuWEw%2BF%2BAS0rR%2FSYY0beSv83ZylLrS8o7kqSi33nrm9v3pOm5c%2FWT7JjrXMH1%2BEhoEhsdM4Y1ADbnt4179Onh1emvkG4tjtkbPEqGP7CwlGunWv7GzcRyvCDKZTHAUeKrsl5xDE9AvEXwl3gwmURjFJQLlzeRE3GbIHb6LIyAHGwrMwo0FaKsjetFiqkPpEhiY1q9g5%2Fr4DtAFAKfSvyOJyP9c%2FHOKRdlWvE1fY9DdoC%2F2NhrJEam5Pn8w1GhgaLVpGlwPbzPkf2iso9598jomNcKy3p3pwSTtJtHU5LbT0nVAtApenoFEwmdzLywY6pgFL3yBjMP%2FuC61%2FF7iQaP7ZMQ1hdRyZv9oSbt6VqwpHfGXFNG3uUF67ur9vxdDeGZsfbF8yxpplDxh5QCKegpeGrems0N86iPEC81Tg0MFBZksHKG1Dh8M%2Bba24ZcYcmv4wTJxuYxY4JwibfoJ7ADzLBLAw0Y%2B3KycGEXMNSWjKtN6dLhQZk7I6J94z5swGNoP3%2Ff7sAN%2FCtoLXCFESGZvghSKEJ6Sn&X-Amz-Signature=715642d16f1ad50b0306962746e14e10de14eac2a2098abd146e6dc8fe7e84a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAV74RQN%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGdBVtQQqoR5mmgJpPaaJMNRGJyvPXCOAg68gYKk3veUAiArHY%2BDAU1jMJAS7qSlSXum%2FGzy7FlV9tjBeSKFADNrWCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqNo4PXynomuzPo9TKtwDMbeIWdfiM9kK7PdzLhnaSpzkFLL3LALW2GQdjchguN0l8YLwA%2B6fwVTYh%2BGA2K7qeB7gpW7Xij4MXOdKAmkEhxX30R7K4RzBiaWz%2B%2FsSZM8eSPElAMm3E7lfNYBjirpZ%2BxjsWze8E9M6mkBlSFai%2Brd9SB85BdkdJ9AXjDVxcj2kxjBs6cyTyRE4gDNGTr2W8uWraGAnUbs3qX9pW8KmOnnnyyLO9s3fJBFtseGcE8%2Faq9nCfNyptEftkBsyogfHx18ZH1ayz2Q%2FWdD66DRCTQrPLqyW25uJXhD9z2RQk3Cw3ebJW1VNfr5paQC7EB78KILCASuWEw%2BF%2BAS0rR%2FSYY0beSv83ZylLrS8o7kqSi33nrm9v3pOm5c%2FWT7JjrXMH1%2BEhoEhsdM4Y1ADbnt4179Onh1emvkG4tjtkbPEqGP7CwlGunWv7GzcRyvCDKZTHAUeKrsl5xDE9AvEXwl3gwmURjFJQLlzeRE3GbIHb6LIyAHGwrMwo0FaKsjetFiqkPpEhiY1q9g5%2Fr4DtAFAKfSvyOJyP9c%2FHOKRdlWvE1fY9DdoC%2F2NhrJEam5Pn8w1GhgaLVpGlwPbzPkf2iso9598jomNcKy3p3pwSTtJtHU5LbT0nVAtApenoFEwmdzLywY6pgFL3yBjMP%2FuC61%2FF7iQaP7ZMQ1hdRyZv9oSbt6VqwpHfGXFNG3uUF67ur9vxdDeGZsfbF8yxpplDxh5QCKegpeGrems0N86iPEC81Tg0MFBZksHKG1Dh8M%2Bba24ZcYcmv4wTJxuYxY4JwibfoJ7ADzLBLAw0Y%2B3KycGEXMNSWjKtN6dLhQZk7I6J94z5swGNoP3%2Ff7sAN%2FCtoLXCFESGZvghSKEJ6Sn&X-Amz-Signature=bfd8f8ba4ac3e08c8bef60c76a7213aee1dcc049b69f53ca04d30f96dc434610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAV74RQN%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGdBVtQQqoR5mmgJpPaaJMNRGJyvPXCOAg68gYKk3veUAiArHY%2BDAU1jMJAS7qSlSXum%2FGzy7FlV9tjBeSKFADNrWCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqNo4PXynomuzPo9TKtwDMbeIWdfiM9kK7PdzLhnaSpzkFLL3LALW2GQdjchguN0l8YLwA%2B6fwVTYh%2BGA2K7qeB7gpW7Xij4MXOdKAmkEhxX30R7K4RzBiaWz%2B%2FsSZM8eSPElAMm3E7lfNYBjirpZ%2BxjsWze8E9M6mkBlSFai%2Brd9SB85BdkdJ9AXjDVxcj2kxjBs6cyTyRE4gDNGTr2W8uWraGAnUbs3qX9pW8KmOnnnyyLO9s3fJBFtseGcE8%2Faq9nCfNyptEftkBsyogfHx18ZH1ayz2Q%2FWdD66DRCTQrPLqyW25uJXhD9z2RQk3Cw3ebJW1VNfr5paQC7EB78KILCASuWEw%2BF%2BAS0rR%2FSYY0beSv83ZylLrS8o7kqSi33nrm9v3pOm5c%2FWT7JjrXMH1%2BEhoEhsdM4Y1ADbnt4179Onh1emvkG4tjtkbPEqGP7CwlGunWv7GzcRyvCDKZTHAUeKrsl5xDE9AvEXwl3gwmURjFJQLlzeRE3GbIHb6LIyAHGwrMwo0FaKsjetFiqkPpEhiY1q9g5%2Fr4DtAFAKfSvyOJyP9c%2FHOKRdlWvE1fY9DdoC%2F2NhrJEam5Pn8w1GhgaLVpGlwPbzPkf2iso9598jomNcKy3p3pwSTtJtHU5LbT0nVAtApenoFEwmdzLywY6pgFL3yBjMP%2FuC61%2FF7iQaP7ZMQ1hdRyZv9oSbt6VqwpHfGXFNG3uUF67ur9vxdDeGZsfbF8yxpplDxh5QCKegpeGrems0N86iPEC81Tg0MFBZksHKG1Dh8M%2Bba24ZcYcmv4wTJxuYxY4JwibfoJ7ADzLBLAw0Y%2B3KycGEXMNSWjKtN6dLhQZk7I6J94z5swGNoP3%2Ff7sAN%2FCtoLXCFESGZvghSKEJ6Sn&X-Amz-Signature=6f188a134e38bcfb05b05a76ab017066919ed2f8ca79c830e016a16054db2dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAV74RQN%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGdBVtQQqoR5mmgJpPaaJMNRGJyvPXCOAg68gYKk3veUAiArHY%2BDAU1jMJAS7qSlSXum%2FGzy7FlV9tjBeSKFADNrWCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqNo4PXynomuzPo9TKtwDMbeIWdfiM9kK7PdzLhnaSpzkFLL3LALW2GQdjchguN0l8YLwA%2B6fwVTYh%2BGA2K7qeB7gpW7Xij4MXOdKAmkEhxX30R7K4RzBiaWz%2B%2FsSZM8eSPElAMm3E7lfNYBjirpZ%2BxjsWze8E9M6mkBlSFai%2Brd9SB85BdkdJ9AXjDVxcj2kxjBs6cyTyRE4gDNGTr2W8uWraGAnUbs3qX9pW8KmOnnnyyLO9s3fJBFtseGcE8%2Faq9nCfNyptEftkBsyogfHx18ZH1ayz2Q%2FWdD66DRCTQrPLqyW25uJXhD9z2RQk3Cw3ebJW1VNfr5paQC7EB78KILCASuWEw%2BF%2BAS0rR%2FSYY0beSv83ZylLrS8o7kqSi33nrm9v3pOm5c%2FWT7JjrXMH1%2BEhoEhsdM4Y1ADbnt4179Onh1emvkG4tjtkbPEqGP7CwlGunWv7GzcRyvCDKZTHAUeKrsl5xDE9AvEXwl3gwmURjFJQLlzeRE3GbIHb6LIyAHGwrMwo0FaKsjetFiqkPpEhiY1q9g5%2Fr4DtAFAKfSvyOJyP9c%2FHOKRdlWvE1fY9DdoC%2F2NhrJEam5Pn8w1GhgaLVpGlwPbzPkf2iso9598jomNcKy3p3pwSTtJtHU5LbT0nVAtApenoFEwmdzLywY6pgFL3yBjMP%2FuC61%2FF7iQaP7ZMQ1hdRyZv9oSbt6VqwpHfGXFNG3uUF67ur9vxdDeGZsfbF8yxpplDxh5QCKegpeGrems0N86iPEC81Tg0MFBZksHKG1Dh8M%2Bba24ZcYcmv4wTJxuYxY4JwibfoJ7ADzLBLAw0Y%2B3KycGEXMNSWjKtN6dLhQZk7I6J94z5swGNoP3%2Ff7sAN%2FCtoLXCFESGZvghSKEJ6Sn&X-Amz-Signature=01aa68ce1c1a318661b1d006eb4fcba25d49b8ac36ecbf87beebf19681bba617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAV74RQN%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGdBVtQQqoR5mmgJpPaaJMNRGJyvPXCOAg68gYKk3veUAiArHY%2BDAU1jMJAS7qSlSXum%2FGzy7FlV9tjBeSKFADNrWCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqNo4PXynomuzPo9TKtwDMbeIWdfiM9kK7PdzLhnaSpzkFLL3LALW2GQdjchguN0l8YLwA%2B6fwVTYh%2BGA2K7qeB7gpW7Xij4MXOdKAmkEhxX30R7K4RzBiaWz%2B%2FsSZM8eSPElAMm3E7lfNYBjirpZ%2BxjsWze8E9M6mkBlSFai%2Brd9SB85BdkdJ9AXjDVxcj2kxjBs6cyTyRE4gDNGTr2W8uWraGAnUbs3qX9pW8KmOnnnyyLO9s3fJBFtseGcE8%2Faq9nCfNyptEftkBsyogfHx18ZH1ayz2Q%2FWdD66DRCTQrPLqyW25uJXhD9z2RQk3Cw3ebJW1VNfr5paQC7EB78KILCASuWEw%2BF%2BAS0rR%2FSYY0beSv83ZylLrS8o7kqSi33nrm9v3pOm5c%2FWT7JjrXMH1%2BEhoEhsdM4Y1ADbnt4179Onh1emvkG4tjtkbPEqGP7CwlGunWv7GzcRyvCDKZTHAUeKrsl5xDE9AvEXwl3gwmURjFJQLlzeRE3GbIHb6LIyAHGwrMwo0FaKsjetFiqkPpEhiY1q9g5%2Fr4DtAFAKfSvyOJyP9c%2FHOKRdlWvE1fY9DdoC%2F2NhrJEam5Pn8w1GhgaLVpGlwPbzPkf2iso9598jomNcKy3p3pwSTtJtHU5LbT0nVAtApenoFEwmdzLywY6pgFL3yBjMP%2FuC61%2FF7iQaP7ZMQ1hdRyZv9oSbt6VqwpHfGXFNG3uUF67ur9vxdDeGZsfbF8yxpplDxh5QCKegpeGrems0N86iPEC81Tg0MFBZksHKG1Dh8M%2Bba24ZcYcmv4wTJxuYxY4JwibfoJ7ADzLBLAw0Y%2B3KycGEXMNSWjKtN6dLhQZk7I6J94z5swGNoP3%2Ff7sAN%2FCtoLXCFESGZvghSKEJ6Sn&X-Amz-Signature=45d2ee88721f01cfcf81354021c3f58b77d1a0e544c630b2c67511e83e238d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UJR7AK%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQChyecYSrmgA3mOIBUWAe9I%2Bx5zOLI%2BIG2V1SpTYt5jhQIhAI05w3YkLAYZJLqmVwLf584GtPgKTVwxERWKm5Jtpi6qKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3CsbJSCI%2FYEK%2FWJsq3AM8Q5%2BLXSXeiQf6cS4opeQsX8Hl1Q6YQv3rKSS3kDTd2jW1BFCbuUUiWrVgH61jKchWwkRffNSDZWS%2FzBR6P2STsg%2BsBgw3s0UdlG63o50C3lrx3GZfCRxNfcr1qH7CyezJLsIJB0vrOU0m17ahg7XTdwXntNpYZ%2B4TLkyChKYRgPp0e%2BabyRFfPPKSRkj6MSW9nCfD9Os9nsaBnPlW1YUM0YWNjuioANUMpgj6HpqjwZlZF4Eu0EFsM2gm%2FntVJB5PrfCHAzIufzN6Zb4XOx%2FzK845BgcIIJ%2B9sPU7WrhqppmyrkXLTWBo9R%2FDqtWI3LMUW4g9Y7RPtChbJ7rNV95OOmWOGhNPk9SNIp7ZEE6aWLYF3VQ5D%2BJHxmtk4u5dce5c%2B%2Fme%2BFeUa%2FcYYYdYjNSHvUjF3JogXfiapzIv11Lkk2pdgNh%2BWf0yAaCgYfIADFYu9nN4Aeno5rM5ul%2BkX1a5gCqpAojE7GAbUBFVrNt97gv2yMsehac4s5yspiDfXyePRJMkmB8AI%2FQJ0gcg0Zp9Uz01pI7ZWkiLvIie5JNthb5eawMfAbUQAms%2Bz0W8kWs79RN9KvmxDxPhPpuLJtduIrWRImCaotZw2%2BUNasI2%2Fh%2FAXPIvsL5r%2BgOXxDCp28vLBjqkAcXdKqGHC9TXswcUy7iF2xp1tLflkEmJc%2BumFV2ad9Uw4NH1L%2FpDXncI3NqzNUEIN4FkSM%2BNftFHzMchp8VefLJOwFGkWc7r5fKWI3NLzryE3Xe1j7gRFZd7TK6mViU7w9qWfOPW0sdKRdH%2B3H5wUMKG%2FPXbpHD49t20lT3nej7nOEdln0k6samt2MupXAZIelBubNNCeQHDkJcqYXqRFO%2F%2Fv0mU&X-Amz-Signature=9593fb77330cef7ebf8aed52e9db5117a120e79abacbd697035b66ef2513bbec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UJR7AK%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQChyecYSrmgA3mOIBUWAe9I%2Bx5zOLI%2BIG2V1SpTYt5jhQIhAI05w3YkLAYZJLqmVwLf584GtPgKTVwxERWKm5Jtpi6qKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3CsbJSCI%2FYEK%2FWJsq3AM8Q5%2BLXSXeiQf6cS4opeQsX8Hl1Q6YQv3rKSS3kDTd2jW1BFCbuUUiWrVgH61jKchWwkRffNSDZWS%2FzBR6P2STsg%2BsBgw3s0UdlG63o50C3lrx3GZfCRxNfcr1qH7CyezJLsIJB0vrOU0m17ahg7XTdwXntNpYZ%2B4TLkyChKYRgPp0e%2BabyRFfPPKSRkj6MSW9nCfD9Os9nsaBnPlW1YUM0YWNjuioANUMpgj6HpqjwZlZF4Eu0EFsM2gm%2FntVJB5PrfCHAzIufzN6Zb4XOx%2FzK845BgcIIJ%2B9sPU7WrhqppmyrkXLTWBo9R%2FDqtWI3LMUW4g9Y7RPtChbJ7rNV95OOmWOGhNPk9SNIp7ZEE6aWLYF3VQ5D%2BJHxmtk4u5dce5c%2B%2Fme%2BFeUa%2FcYYYdYjNSHvUjF3JogXfiapzIv11Lkk2pdgNh%2BWf0yAaCgYfIADFYu9nN4Aeno5rM5ul%2BkX1a5gCqpAojE7GAbUBFVrNt97gv2yMsehac4s5yspiDfXyePRJMkmB8AI%2FQJ0gcg0Zp9Uz01pI7ZWkiLvIie5JNthb5eawMfAbUQAms%2Bz0W8kWs79RN9KvmxDxPhPpuLJtduIrWRImCaotZw2%2BUNasI2%2Fh%2FAXPIvsL5r%2BgOXxDCp28vLBjqkAcXdKqGHC9TXswcUy7iF2xp1tLflkEmJc%2BumFV2ad9Uw4NH1L%2FpDXncI3NqzNUEIN4FkSM%2BNftFHzMchp8VefLJOwFGkWc7r5fKWI3NLzryE3Xe1j7gRFZd7TK6mViU7w9qWfOPW0sdKRdH%2B3H5wUMKG%2FPXbpHD49t20lT3nej7nOEdln0k6samt2MupXAZIelBubNNCeQHDkJcqYXqRFO%2F%2Fv0mU&X-Amz-Signature=760fcd55bd182148e87ba414a7fee30b3122a57f4e6b3145b57f9c13e7fe71ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UJR7AK%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQChyecYSrmgA3mOIBUWAe9I%2Bx5zOLI%2BIG2V1SpTYt5jhQIhAI05w3YkLAYZJLqmVwLf584GtPgKTVwxERWKm5Jtpi6qKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3CsbJSCI%2FYEK%2FWJsq3AM8Q5%2BLXSXeiQf6cS4opeQsX8Hl1Q6YQv3rKSS3kDTd2jW1BFCbuUUiWrVgH61jKchWwkRffNSDZWS%2FzBR6P2STsg%2BsBgw3s0UdlG63o50C3lrx3GZfCRxNfcr1qH7CyezJLsIJB0vrOU0m17ahg7XTdwXntNpYZ%2B4TLkyChKYRgPp0e%2BabyRFfPPKSRkj6MSW9nCfD9Os9nsaBnPlW1YUM0YWNjuioANUMpgj6HpqjwZlZF4Eu0EFsM2gm%2FntVJB5PrfCHAzIufzN6Zb4XOx%2FzK845BgcIIJ%2B9sPU7WrhqppmyrkXLTWBo9R%2FDqtWI3LMUW4g9Y7RPtChbJ7rNV95OOmWOGhNPk9SNIp7ZEE6aWLYF3VQ5D%2BJHxmtk4u5dce5c%2B%2Fme%2BFeUa%2FcYYYdYjNSHvUjF3JogXfiapzIv11Lkk2pdgNh%2BWf0yAaCgYfIADFYu9nN4Aeno5rM5ul%2BkX1a5gCqpAojE7GAbUBFVrNt97gv2yMsehac4s5yspiDfXyePRJMkmB8AI%2FQJ0gcg0Zp9Uz01pI7ZWkiLvIie5JNthb5eawMfAbUQAms%2Bz0W8kWs79RN9KvmxDxPhPpuLJtduIrWRImCaotZw2%2BUNasI2%2Fh%2FAXPIvsL5r%2BgOXxDCp28vLBjqkAcXdKqGHC9TXswcUy7iF2xp1tLflkEmJc%2BumFV2ad9Uw4NH1L%2FpDXncI3NqzNUEIN4FkSM%2BNftFHzMchp8VefLJOwFGkWc7r5fKWI3NLzryE3Xe1j7gRFZd7TK6mViU7w9qWfOPW0sdKRdH%2B3H5wUMKG%2FPXbpHD49t20lT3nej7nOEdln0k6samt2MupXAZIelBubNNCeQHDkJcqYXqRFO%2F%2Fv0mU&X-Amz-Signature=8f71f4b78fc6d8861828dcf292803016ab9dac64d1c77e41d920be7d4e8c3b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UJR7AK%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQChyecYSrmgA3mOIBUWAe9I%2Bx5zOLI%2BIG2V1SpTYt5jhQIhAI05w3YkLAYZJLqmVwLf584GtPgKTVwxERWKm5Jtpi6qKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3CsbJSCI%2FYEK%2FWJsq3AM8Q5%2BLXSXeiQf6cS4opeQsX8Hl1Q6YQv3rKSS3kDTd2jW1BFCbuUUiWrVgH61jKchWwkRffNSDZWS%2FzBR6P2STsg%2BsBgw3s0UdlG63o50C3lrx3GZfCRxNfcr1qH7CyezJLsIJB0vrOU0m17ahg7XTdwXntNpYZ%2B4TLkyChKYRgPp0e%2BabyRFfPPKSRkj6MSW9nCfD9Os9nsaBnPlW1YUM0YWNjuioANUMpgj6HpqjwZlZF4Eu0EFsM2gm%2FntVJB5PrfCHAzIufzN6Zb4XOx%2FzK845BgcIIJ%2B9sPU7WrhqppmyrkXLTWBo9R%2FDqtWI3LMUW4g9Y7RPtChbJ7rNV95OOmWOGhNPk9SNIp7ZEE6aWLYF3VQ5D%2BJHxmtk4u5dce5c%2B%2Fme%2BFeUa%2FcYYYdYjNSHvUjF3JogXfiapzIv11Lkk2pdgNh%2BWf0yAaCgYfIADFYu9nN4Aeno5rM5ul%2BkX1a5gCqpAojE7GAbUBFVrNt97gv2yMsehac4s5yspiDfXyePRJMkmB8AI%2FQJ0gcg0Zp9Uz01pI7ZWkiLvIie5JNthb5eawMfAbUQAms%2Bz0W8kWs79RN9KvmxDxPhPpuLJtduIrWRImCaotZw2%2BUNasI2%2Fh%2FAXPIvsL5r%2BgOXxDCp28vLBjqkAcXdKqGHC9TXswcUy7iF2xp1tLflkEmJc%2BumFV2ad9Uw4NH1L%2FpDXncI3NqzNUEIN4FkSM%2BNftFHzMchp8VefLJOwFGkWc7r5fKWI3NLzryE3Xe1j7gRFZd7TK6mViU7w9qWfOPW0sdKRdH%2B3H5wUMKG%2FPXbpHD49t20lT3nej7nOEdln0k6samt2MupXAZIelBubNNCeQHDkJcqYXqRFO%2F%2Fv0mU&X-Amz-Signature=06a51d10d0f3b894f3e3c6656d31fccf1b35c678eaf5fcc73b86c8ea96d0831f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UJR7AK%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQChyecYSrmgA3mOIBUWAe9I%2Bx5zOLI%2BIG2V1SpTYt5jhQIhAI05w3YkLAYZJLqmVwLf584GtPgKTVwxERWKm5Jtpi6qKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3CsbJSCI%2FYEK%2FWJsq3AM8Q5%2BLXSXeiQf6cS4opeQsX8Hl1Q6YQv3rKSS3kDTd2jW1BFCbuUUiWrVgH61jKchWwkRffNSDZWS%2FzBR6P2STsg%2BsBgw3s0UdlG63o50C3lrx3GZfCRxNfcr1qH7CyezJLsIJB0vrOU0m17ahg7XTdwXntNpYZ%2B4TLkyChKYRgPp0e%2BabyRFfPPKSRkj6MSW9nCfD9Os9nsaBnPlW1YUM0YWNjuioANUMpgj6HpqjwZlZF4Eu0EFsM2gm%2FntVJB5PrfCHAzIufzN6Zb4XOx%2FzK845BgcIIJ%2B9sPU7WrhqppmyrkXLTWBo9R%2FDqtWI3LMUW4g9Y7RPtChbJ7rNV95OOmWOGhNPk9SNIp7ZEE6aWLYF3VQ5D%2BJHxmtk4u5dce5c%2B%2Fme%2BFeUa%2FcYYYdYjNSHvUjF3JogXfiapzIv11Lkk2pdgNh%2BWf0yAaCgYfIADFYu9nN4Aeno5rM5ul%2BkX1a5gCqpAojE7GAbUBFVrNt97gv2yMsehac4s5yspiDfXyePRJMkmB8AI%2FQJ0gcg0Zp9Uz01pI7ZWkiLvIie5JNthb5eawMfAbUQAms%2Bz0W8kWs79RN9KvmxDxPhPpuLJtduIrWRImCaotZw2%2BUNasI2%2Fh%2FAXPIvsL5r%2BgOXxDCp28vLBjqkAcXdKqGHC9TXswcUy7iF2xp1tLflkEmJc%2BumFV2ad9Uw4NH1L%2FpDXncI3NqzNUEIN4FkSM%2BNftFHzMchp8VefLJOwFGkWc7r5fKWI3NLzryE3Xe1j7gRFZd7TK6mViU7w9qWfOPW0sdKRdH%2B3H5wUMKG%2FPXbpHD49t20lT3nej7nOEdln0k6samt2MupXAZIelBubNNCeQHDkJcqYXqRFO%2F%2Fv0mU&X-Amz-Signature=855877cb74619730ede69440c4d1f3b51baa7930a6e2515e889e72d5b3866793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCXQJBH4%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIDY4EKPWR0uSDx1IA6VEo6VuUMNMHb7Qh15Mv2eGcy09AiEA5ZCudkK3BWGOikNWxf3g0tN8oL6unLBD6xdP%2B4q%2Bh6kqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCarQtbbjaAE3MACnircA6k30ALog2VxHd8qsT0cJqPqVPsuO3%2Fpm0pay8STZl3k7IjOR20ywh2NslVxz6ZJCPp%2FQUoKYJ0D%2F1CC68iybDPoKAb0260EvJRnM3seqcqxSTVXbUqo%2BtV46Mn7SIvUqsVYVf0NfS71w%2FzVbAa6c5VXEfmzwy%2B6uudNK9X9oGUDpzVbkz%2BsVyVlD%2BczwoDT8QAxu15te80aDQMhcAuGOfPN7Q0973PHM9oZyESojvaIchEddLX71VlUtfLXirmA1pBu0dAR3GIUmNifWvcaKn6FsHrInooD1R4OxjLtr7TXN3O9OkUHKXPvW7ihQkCFmZXOlKEQTenUqEkaDtqZgMlIQ0R9pV%2FPspa7iNetrboye%2FQaYGhVkfQxZ4AGpInfzGwEtFShZPMfTLJzcHAeqyGByREmBH9vWYu%2B5bdf796b%2BO8%2B3aq%2Bwk2%2FCGNasbXojsQVfzx3L2bXTkDWlTTPApaNjYH9hwX0dnIPkC%2BXNCvMP4RASlP4w9MCImTr0fxV3R7CMacXixvKd8O5%2FsgZWctUrCZmAh9tLSro%2BZsC1XLDvnedwCZHI7b%2BLbu5dxzmR2nC0R960P5N8q2Ve4Z%2BKxbrxnPtLvGo9reONsrEa08hrjngOpEgvdyvRTw9MKDcy8sGOqUBK9udzoMQpdPafYbEK9Z8zpQdgd8Lg%2BxR7GaBEZdCCTBVOJ6T2e09BetFZpw6ck9RFcvdS9kyNQsJrVHqsX670ix9Y8wiDo5AktzZUO8CHixsGVGDexZpBl9skswRseBI4PJHsVy06S8aQAx6Ct8AbL0pe9jWYmYYmx9IgDdejE7G4AESXOaKZroqwp9%2BBOx%2BP8XqNiYvkoIMa9Bo7OotolqI7x9B&X-Amz-Signature=5de8731f4ad64e70087c1ee7f0215b87b7c4a02a8fdeba3a7b3c2cdb1f1286b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCXQJBH4%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIDY4EKPWR0uSDx1IA6VEo6VuUMNMHb7Qh15Mv2eGcy09AiEA5ZCudkK3BWGOikNWxf3g0tN8oL6unLBD6xdP%2B4q%2Bh6kqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCarQtbbjaAE3MACnircA6k30ALog2VxHd8qsT0cJqPqVPsuO3%2Fpm0pay8STZl3k7IjOR20ywh2NslVxz6ZJCPp%2FQUoKYJ0D%2F1CC68iybDPoKAb0260EvJRnM3seqcqxSTVXbUqo%2BtV46Mn7SIvUqsVYVf0NfS71w%2FzVbAa6c5VXEfmzwy%2B6uudNK9X9oGUDpzVbkz%2BsVyVlD%2BczwoDT8QAxu15te80aDQMhcAuGOfPN7Q0973PHM9oZyESojvaIchEddLX71VlUtfLXirmA1pBu0dAR3GIUmNifWvcaKn6FsHrInooD1R4OxjLtr7TXN3O9OkUHKXPvW7ihQkCFmZXOlKEQTenUqEkaDtqZgMlIQ0R9pV%2FPspa7iNetrboye%2FQaYGhVkfQxZ4AGpInfzGwEtFShZPMfTLJzcHAeqyGByREmBH9vWYu%2B5bdf796b%2BO8%2B3aq%2Bwk2%2FCGNasbXojsQVfzx3L2bXTkDWlTTPApaNjYH9hwX0dnIPkC%2BXNCvMP4RASlP4w9MCImTr0fxV3R7CMacXixvKd8O5%2FsgZWctUrCZmAh9tLSro%2BZsC1XLDvnedwCZHI7b%2BLbu5dxzmR2nC0R960P5N8q2Ve4Z%2BKxbrxnPtLvGo9reONsrEa08hrjngOpEgvdyvRTw9MKDcy8sGOqUBK9udzoMQpdPafYbEK9Z8zpQdgd8Lg%2BxR7GaBEZdCCTBVOJ6T2e09BetFZpw6ck9RFcvdS9kyNQsJrVHqsX670ix9Y8wiDo5AktzZUO8CHixsGVGDexZpBl9skswRseBI4PJHsVy06S8aQAx6Ct8AbL0pe9jWYmYYmx9IgDdejE7G4AESXOaKZroqwp9%2BBOx%2BP8XqNiYvkoIMa9Bo7OotolqI7x9B&X-Amz-Signature=8e64311d765f9708f04e317add8c68daf0946a80573bf15ff8d27ad13afc4590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCXQJBH4%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIDY4EKPWR0uSDx1IA6VEo6VuUMNMHb7Qh15Mv2eGcy09AiEA5ZCudkK3BWGOikNWxf3g0tN8oL6unLBD6xdP%2B4q%2Bh6kqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCarQtbbjaAE3MACnircA6k30ALog2VxHd8qsT0cJqPqVPsuO3%2Fpm0pay8STZl3k7IjOR20ywh2NslVxz6ZJCPp%2FQUoKYJ0D%2F1CC68iybDPoKAb0260EvJRnM3seqcqxSTVXbUqo%2BtV46Mn7SIvUqsVYVf0NfS71w%2FzVbAa6c5VXEfmzwy%2B6uudNK9X9oGUDpzVbkz%2BsVyVlD%2BczwoDT8QAxu15te80aDQMhcAuGOfPN7Q0973PHM9oZyESojvaIchEddLX71VlUtfLXirmA1pBu0dAR3GIUmNifWvcaKn6FsHrInooD1R4OxjLtr7TXN3O9OkUHKXPvW7ihQkCFmZXOlKEQTenUqEkaDtqZgMlIQ0R9pV%2FPspa7iNetrboye%2FQaYGhVkfQxZ4AGpInfzGwEtFShZPMfTLJzcHAeqyGByREmBH9vWYu%2B5bdf796b%2BO8%2B3aq%2Bwk2%2FCGNasbXojsQVfzx3L2bXTkDWlTTPApaNjYH9hwX0dnIPkC%2BXNCvMP4RASlP4w9MCImTr0fxV3R7CMacXixvKd8O5%2FsgZWctUrCZmAh9tLSro%2BZsC1XLDvnedwCZHI7b%2BLbu5dxzmR2nC0R960P5N8q2Ve4Z%2BKxbrxnPtLvGo9reONsrEa08hrjngOpEgvdyvRTw9MKDcy8sGOqUBK9udzoMQpdPafYbEK9Z8zpQdgd8Lg%2BxR7GaBEZdCCTBVOJ6T2e09BetFZpw6ck9RFcvdS9kyNQsJrVHqsX670ix9Y8wiDo5AktzZUO8CHixsGVGDexZpBl9skswRseBI4PJHsVy06S8aQAx6Ct8AbL0pe9jWYmYYmx9IgDdejE7G4AESXOaKZroqwp9%2BBOx%2BP8XqNiYvkoIMa9Bo7OotolqI7x9B&X-Amz-Signature=515807e31a6d18da0be2e850caadce1922b24af53482ab2b9350eb21875b0cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VV4CBSE%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQC%2BleJLXYEpEFSRdgG9mjTLWBdEJENVEzzsoe9bggOb9QIhANstqKey%2BOQVxwu8sxGcClf93h2xZFtJXnKo7ZRqw0fAKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCQJ6z9L%2FTRklN%2B0kq3APTMXglQPjhsy0bwcZ5AStd8Wgs9d%2F0VF8f%2BQutB6YTSvBipMMCi%2B734rNIPx3lXn9dNf2kkd3iXrBo%2FWlQGUn66B8bD%2BmgtUS923VczF9qg0o9cEDYMx0simVQZA%2FPmx9lArXbdd6YeFvNft%2Bd4GZYehRb0fC6z%2BasAMD%2FekgdSP5nxrY5kvlNjiBeoQNnUgXihGjAjjJhZtFjVToKm3BRjgcKFO84sqfE1YQ3lZjSmT0pMcUlHBuw%2B1GcrB1%2FBp4DHc1VrtwCJwf%2BPdqPARbktJKAZraKCJymrDg2%2Btf9nkJ7jX2pkeeYE89HFrqA6WmCoL%2FASOeKfX46pbdiNaRSXREucFBzIneG5W2%2BFe1e%2FuhfG1MaOuozOUvgxd1EQsTx5tsmzhwwJL0PxMvQxPd0wPNezUyZ7n9i%2FpX5f8NMnESBZJozG6s4a%2B%2FIBekMMWtlC3PrzV1qdzHyegDpyZGDAr5%2B9C9LArAW3JeUCbdcklxKQ3yugnMsRe%2BWphIFykABzSzf686OAEE4CuiNqgJyt19GiG5XnddFjQaQTLUc6OMw9klPur9tAo5zEyM278q4aOvT76uhoUbzzLJm9HfkgcirfWX41p0mtjk8HGr8G0KYb6WKjLczG%2BZlKjDe2svLBjqkASqHCARjxcWFRWp9UoYZryMSu%2FnJ8ZylyRtHrQjabuymdk2QMHfGyFOQVgee4y2U9JWZHfRWKDZ4tXgbDuWE7eMg0WxEEw5QRUZ0Lllx2slF9Q7qQSNtQsdeWmAVBCgz4n36g5WR21dzBnZcfyGeav7rTvcZriH8XDgVXj2wr%2FVcMQ%2FOSlnUppb3S8dv7bnV%2BaakUjzxH7sVSzGvK7L3VANZEVCu&X-Amz-Signature=819074231f09ac66190bf9752ebf970119b02c748cf30dac51451dd75d32c8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VV4CBSE%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQC%2BleJLXYEpEFSRdgG9mjTLWBdEJENVEzzsoe9bggOb9QIhANstqKey%2BOQVxwu8sxGcClf93h2xZFtJXnKo7ZRqw0fAKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCQJ6z9L%2FTRklN%2B0kq3APTMXglQPjhsy0bwcZ5AStd8Wgs9d%2F0VF8f%2BQutB6YTSvBipMMCi%2B734rNIPx3lXn9dNf2kkd3iXrBo%2FWlQGUn66B8bD%2BmgtUS923VczF9qg0o9cEDYMx0simVQZA%2FPmx9lArXbdd6YeFvNft%2Bd4GZYehRb0fC6z%2BasAMD%2FekgdSP5nxrY5kvlNjiBeoQNnUgXihGjAjjJhZtFjVToKm3BRjgcKFO84sqfE1YQ3lZjSmT0pMcUlHBuw%2B1GcrB1%2FBp4DHc1VrtwCJwf%2BPdqPARbktJKAZraKCJymrDg2%2Btf9nkJ7jX2pkeeYE89HFrqA6WmCoL%2FASOeKfX46pbdiNaRSXREucFBzIneG5W2%2BFe1e%2FuhfG1MaOuozOUvgxd1EQsTx5tsmzhwwJL0PxMvQxPd0wPNezUyZ7n9i%2FpX5f8NMnESBZJozG6s4a%2B%2FIBekMMWtlC3PrzV1qdzHyegDpyZGDAr5%2B9C9LArAW3JeUCbdcklxKQ3yugnMsRe%2BWphIFykABzSzf686OAEE4CuiNqgJyt19GiG5XnddFjQaQTLUc6OMw9klPur9tAo5zEyM278q4aOvT76uhoUbzzLJm9HfkgcirfWX41p0mtjk8HGr8G0KYb6WKjLczG%2BZlKjDe2svLBjqkASqHCARjxcWFRWp9UoYZryMSu%2FnJ8ZylyRtHrQjabuymdk2QMHfGyFOQVgee4y2U9JWZHfRWKDZ4tXgbDuWE7eMg0WxEEw5QRUZ0Lllx2slF9Q7qQSNtQsdeWmAVBCgz4n36g5WR21dzBnZcfyGeav7rTvcZriH8XDgVXj2wr%2FVcMQ%2FOSlnUppb3S8dv7bnV%2BaakUjzxH7sVSzGvK7L3VANZEVCu&X-Amz-Signature=12c3af84c4a524ae79407d881455de41b4b5112f7045b3c5bc4b89bced4b780f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUGFDGLB%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIA%2BqqaZUSNBVFQlYC4Jg%2Bpv2XKLfTYyUhCcgrq3hpFpwAiBkTM8%2B7FzlX9zSnk2r8Yf6sBWwwVVtEGb1EtvT5Q8F7yqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQIYkQwGLbwYHZ1WFKtwDA4N0TaxHIZluVV6kY4u5%2BSEv5ZD5vdLX%2F0%2Frnl2pYm7jYf3ML10bsf5BbW1A1x%2F5%2F%2Bew%2B8ZukAv8v%2FRSTrdBfthpjHyNaumfh1ssRp8LGtuKuoNfXN9QhzvnueYv97Ui1dhgu42N2ByS8tlKMpvcLK2ET8EWxkQNJJEbicWOHD4sxhzS6RNcBNR9hEmLsDx%2BvSXs98AV2f3LsYPipHhutVLueGWYGYtfsGCAmZK6nOn5ak%2FHxpZ6o1PXzXWNSntc77on9gmW4ZBfOedBCppOWGdhrzOzV8Zqn5xUzlI3DttNjhZtfli8%2BP0lQ6a6h01NEEuxn0KwJFqv%2B33oCnwzghDzIfwG0%2BEvE96F7oasMoR%2FFsqYK%2BwiEblVzkM3SB0xb97YGMzMeJnluWreGG%2BLaONZHDDRRjt%2BM2ctayiNNUtbeHiCw6RwkzMDahx%2B8SAWnfDhxvWyDCUZQNn5hvOH3pPZunuNW0j%2BSNZhURm79j8%2FdfZJcMpqSEkToGQapV8FHNCyntcP2Fh6j3nBylJOKoDBnJ4AJDT8Glsc8De8wZ4hjuwbcw6Ll36QpOMVSp43xJt5%2BMng6pNWVIsQnLoMHhSLSo4B9nLWPXy34zjFCAG8ZnXjwh6PXFaoct4w69vLywY6pgEGY4f7uhrQu8T9RdZCj92C2%2FNLrcDaAjrjX0JDuI0dunkAh01GBa5kSxq%2FDVAfzHPXHGOwBOOax3YYPcabEwW4Cr8YoE4NSVvSlEOLKCovCumwTlXWs0%2B0%2FwiDz0u4X3jGXL7CTrDEFyTRq%2FwIBEixjaOpXhboU8yr2JOaiyJmjL5Uq1meW0Z2h8quBdqXYb4yluixqw%2FQXiNC365KFN%2BC2aTptelc&X-Amz-Signature=065c2ab9024a7c93902be1857c552c9c9134554175276b3f7f6d19869db98620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUGFDGLB%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIA%2BqqaZUSNBVFQlYC4Jg%2Bpv2XKLfTYyUhCcgrq3hpFpwAiBkTM8%2B7FzlX9zSnk2r8Yf6sBWwwVVtEGb1EtvT5Q8F7yqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQIYkQwGLbwYHZ1WFKtwDA4N0TaxHIZluVV6kY4u5%2BSEv5ZD5vdLX%2F0%2Frnl2pYm7jYf3ML10bsf5BbW1A1x%2F5%2F%2Bew%2B8ZukAv8v%2FRSTrdBfthpjHyNaumfh1ssRp8LGtuKuoNfXN9QhzvnueYv97Ui1dhgu42N2ByS8tlKMpvcLK2ET8EWxkQNJJEbicWOHD4sxhzS6RNcBNR9hEmLsDx%2BvSXs98AV2f3LsYPipHhutVLueGWYGYtfsGCAmZK6nOn5ak%2FHxpZ6o1PXzXWNSntc77on9gmW4ZBfOedBCppOWGdhrzOzV8Zqn5xUzlI3DttNjhZtfli8%2BP0lQ6a6h01NEEuxn0KwJFqv%2B33oCnwzghDzIfwG0%2BEvE96F7oasMoR%2FFsqYK%2BwiEblVzkM3SB0xb97YGMzMeJnluWreGG%2BLaONZHDDRRjt%2BM2ctayiNNUtbeHiCw6RwkzMDahx%2B8SAWnfDhxvWyDCUZQNn5hvOH3pPZunuNW0j%2BSNZhURm79j8%2FdfZJcMpqSEkToGQapV8FHNCyntcP2Fh6j3nBylJOKoDBnJ4AJDT8Glsc8De8wZ4hjuwbcw6Ll36QpOMVSp43xJt5%2BMng6pNWVIsQnLoMHhSLSo4B9nLWPXy34zjFCAG8ZnXjwh6PXFaoct4w69vLywY6pgEGY4f7uhrQu8T9RdZCj92C2%2FNLrcDaAjrjX0JDuI0dunkAh01GBa5kSxq%2FDVAfzHPXHGOwBOOax3YYPcabEwW4Cr8YoE4NSVvSlEOLKCovCumwTlXWs0%2B0%2FwiDz0u4X3jGXL7CTrDEFyTRq%2FwIBEixjaOpXhboU8yr2JOaiyJmjL5Uq1meW0Z2h8quBdqXYb4yluixqw%2FQXiNC365KFN%2BC2aTptelc&X-Amz-Signature=65c048a3308b8655487fb1145a1803500b6daaaa6bbcdd71aff0b1dde2d19781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUGFDGLB%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIA%2BqqaZUSNBVFQlYC4Jg%2Bpv2XKLfTYyUhCcgrq3hpFpwAiBkTM8%2B7FzlX9zSnk2r8Yf6sBWwwVVtEGb1EtvT5Q8F7yqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQIYkQwGLbwYHZ1WFKtwDA4N0TaxHIZluVV6kY4u5%2BSEv5ZD5vdLX%2F0%2Frnl2pYm7jYf3ML10bsf5BbW1A1x%2F5%2F%2Bew%2B8ZukAv8v%2FRSTrdBfthpjHyNaumfh1ssRp8LGtuKuoNfXN9QhzvnueYv97Ui1dhgu42N2ByS8tlKMpvcLK2ET8EWxkQNJJEbicWOHD4sxhzS6RNcBNR9hEmLsDx%2BvSXs98AV2f3LsYPipHhutVLueGWYGYtfsGCAmZK6nOn5ak%2FHxpZ6o1PXzXWNSntc77on9gmW4ZBfOedBCppOWGdhrzOzV8Zqn5xUzlI3DttNjhZtfli8%2BP0lQ6a6h01NEEuxn0KwJFqv%2B33oCnwzghDzIfwG0%2BEvE96F7oasMoR%2FFsqYK%2BwiEblVzkM3SB0xb97YGMzMeJnluWreGG%2BLaONZHDDRRjt%2BM2ctayiNNUtbeHiCw6RwkzMDahx%2B8SAWnfDhxvWyDCUZQNn5hvOH3pPZunuNW0j%2BSNZhURm79j8%2FdfZJcMpqSEkToGQapV8FHNCyntcP2Fh6j3nBylJOKoDBnJ4AJDT8Glsc8De8wZ4hjuwbcw6Ll36QpOMVSp43xJt5%2BMng6pNWVIsQnLoMHhSLSo4B9nLWPXy34zjFCAG8ZnXjwh6PXFaoct4w69vLywY6pgEGY4f7uhrQu8T9RdZCj92C2%2FNLrcDaAjrjX0JDuI0dunkAh01GBa5kSxq%2FDVAfzHPXHGOwBOOax3YYPcabEwW4Cr8YoE4NSVvSlEOLKCovCumwTlXWs0%2B0%2FwiDz0u4X3jGXL7CTrDEFyTRq%2FwIBEixjaOpXhboU8yr2JOaiyJmjL5Uq1meW0Z2h8quBdqXYb4yluixqw%2FQXiNC365KFN%2BC2aTptelc&X-Amz-Signature=5f072228a5e53d963513e39a1559e3cb91dce99bb808e5cfa1c6f0b1abe35ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUGFDGLB%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIA%2BqqaZUSNBVFQlYC4Jg%2Bpv2XKLfTYyUhCcgrq3hpFpwAiBkTM8%2B7FzlX9zSnk2r8Yf6sBWwwVVtEGb1EtvT5Q8F7yqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQIYkQwGLbwYHZ1WFKtwDA4N0TaxHIZluVV6kY4u5%2BSEv5ZD5vdLX%2F0%2Frnl2pYm7jYf3ML10bsf5BbW1A1x%2F5%2F%2Bew%2B8ZukAv8v%2FRSTrdBfthpjHyNaumfh1ssRp8LGtuKuoNfXN9QhzvnueYv97Ui1dhgu42N2ByS8tlKMpvcLK2ET8EWxkQNJJEbicWOHD4sxhzS6RNcBNR9hEmLsDx%2BvSXs98AV2f3LsYPipHhutVLueGWYGYtfsGCAmZK6nOn5ak%2FHxpZ6o1PXzXWNSntc77on9gmW4ZBfOedBCppOWGdhrzOzV8Zqn5xUzlI3DttNjhZtfli8%2BP0lQ6a6h01NEEuxn0KwJFqv%2B33oCnwzghDzIfwG0%2BEvE96F7oasMoR%2FFsqYK%2BwiEblVzkM3SB0xb97YGMzMeJnluWreGG%2BLaONZHDDRRjt%2BM2ctayiNNUtbeHiCw6RwkzMDahx%2B8SAWnfDhxvWyDCUZQNn5hvOH3pPZunuNW0j%2BSNZhURm79j8%2FdfZJcMpqSEkToGQapV8FHNCyntcP2Fh6j3nBylJOKoDBnJ4AJDT8Glsc8De8wZ4hjuwbcw6Ll36QpOMVSp43xJt5%2BMng6pNWVIsQnLoMHhSLSo4B9nLWPXy34zjFCAG8ZnXjwh6PXFaoct4w69vLywY6pgEGY4f7uhrQu8T9RdZCj92C2%2FNLrcDaAjrjX0JDuI0dunkAh01GBa5kSxq%2FDVAfzHPXHGOwBOOax3YYPcabEwW4Cr8YoE4NSVvSlEOLKCovCumwTlXWs0%2B0%2FwiDz0u4X3jGXL7CTrDEFyTRq%2FwIBEixjaOpXhboU8yr2JOaiyJmjL5Uq1meW0Z2h8quBdqXYb4yluixqw%2FQXiNC365KFN%2BC2aTptelc&X-Amz-Signature=590150f8f7bb48f6ee8a011f550ff6bcd63b2eb65bd2b11b15015471aa0f3330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUGFDGLB%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIA%2BqqaZUSNBVFQlYC4Jg%2Bpv2XKLfTYyUhCcgrq3hpFpwAiBkTM8%2B7FzlX9zSnk2r8Yf6sBWwwVVtEGb1EtvT5Q8F7yqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQIYkQwGLbwYHZ1WFKtwDA4N0TaxHIZluVV6kY4u5%2BSEv5ZD5vdLX%2F0%2Frnl2pYm7jYf3ML10bsf5BbW1A1x%2F5%2F%2Bew%2B8ZukAv8v%2FRSTrdBfthpjHyNaumfh1ssRp8LGtuKuoNfXN9QhzvnueYv97Ui1dhgu42N2ByS8tlKMpvcLK2ET8EWxkQNJJEbicWOHD4sxhzS6RNcBNR9hEmLsDx%2BvSXs98AV2f3LsYPipHhutVLueGWYGYtfsGCAmZK6nOn5ak%2FHxpZ6o1PXzXWNSntc77on9gmW4ZBfOedBCppOWGdhrzOzV8Zqn5xUzlI3DttNjhZtfli8%2BP0lQ6a6h01NEEuxn0KwJFqv%2B33oCnwzghDzIfwG0%2BEvE96F7oasMoR%2FFsqYK%2BwiEblVzkM3SB0xb97YGMzMeJnluWreGG%2BLaONZHDDRRjt%2BM2ctayiNNUtbeHiCw6RwkzMDahx%2B8SAWnfDhxvWyDCUZQNn5hvOH3pPZunuNW0j%2BSNZhURm79j8%2FdfZJcMpqSEkToGQapV8FHNCyntcP2Fh6j3nBylJOKoDBnJ4AJDT8Glsc8De8wZ4hjuwbcw6Ll36QpOMVSp43xJt5%2BMng6pNWVIsQnLoMHhSLSo4B9nLWPXy34zjFCAG8ZnXjwh6PXFaoct4w69vLywY6pgEGY4f7uhrQu8T9RdZCj92C2%2FNLrcDaAjrjX0JDuI0dunkAh01GBa5kSxq%2FDVAfzHPXHGOwBOOax3YYPcabEwW4Cr8YoE4NSVvSlEOLKCovCumwTlXWs0%2B0%2FwiDz0u4X3jGXL7CTrDEFyTRq%2FwIBEixjaOpXhboU8yr2JOaiyJmjL5Uq1meW0Z2h8quBdqXYb4yluixqw%2FQXiNC365KFN%2BC2aTptelc&X-Amz-Signature=64f52b8ffab084bbe711b095eb1784f2ce1ccaaf7ca4ede8a663a6c44e93c1ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635XMFXHT%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T041427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDd7h3Vxrqd0ElXlt3slOWLZOq192iUvKG3QOdUtFoQ3wIhAO13JAHKZmMwiX8HaTndyG%2FB8yP7Roma1kqJ5FFTSDJQKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Fsf8uB3ncoBPcQ%2BIq3ANiNedXmrov3jMKzrw6TSXHPodwBJEDlAFL4QOWsS2u0%2Bhh3MW%2FvLYHoQ%2BXu%2F74nz01BiOzMw9sgPA1VSL9Vse7YMKcY9dMpTxwqpxZ91%2B%2BsHd3fzjX2ZVoR0KCOKhUYW7tptyUiHixrfBb0jfaWxkp9SwXGdo8VbJgbiw30Zc4BKCQGA1aiYP%2Fiul5DPNdIiMQMdZ6lWrCZvb0h38bRkp1aHIphjmlFsolliek4ej9xOIBenu3Yh%2FwPWmXOw696fwMf5KP4e2E4TpC234admczi%2Bx8Skn0f35wh6kEDkeBJG0C%2F2RZ6ZTF1UydueNFuxB%2FPy4i%2BKMRCHOuQH3R%2B7X0IFa9M8ecYO122Bg3ncjYGGKLK%2BKAKbBs775y46sYPmWhZFquiEJ0gf5D%2FrEoOnBJ1FW2Ce0hZIl6uz%2BE%2F%2FTMlpCOhOluHRmp7yb6eFa6tmAbIyHnlzc6LlEf2TvU4Rvna62EaemBkPSgO0etOYcSH8a31ZZv8d5nLK1p0MngUM01iKHGgMr3tHaEzZs9RAq6Jypkt3H50tFh4BmDz7%2BfwznUkfbDPlBrVBV8NNnlVpVKRzHum2yJBInLOr1pmjXOP7HEGGklwSrnSx%2Bpn%2FYooVvD9Z%2BxwEhlcxWwYzCr28vLBjqkAQbRMDaqSaFA6FqAmYumptk8GAW0qstBqBZ5U2JddbaNhlU7trbI483pjpjMto7hFNsO%2BgBIrNwkGRUlJ2BKcvor%2BZdRuK9%2FLBrBN0xbvOYU0Q%2B%2B9P6Ubr4Jzr5EKhg1Z78xT50fyoBnlb37ArpCOND8mOlpyULnCUhRahakTxU3O4ZB7weRNtkbVCYwOi8W%2BsKnErZJtnpCjoFbn%2BT%2B76jSUfqH&X-Amz-Signature=6a20c9a4bf1e14aa3ed1c4e01aee42926ad95d3d86a43faeca0eeff58ddcb030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

