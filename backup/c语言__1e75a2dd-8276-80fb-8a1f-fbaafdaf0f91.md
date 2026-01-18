
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIHA6ZKT%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADYAu6dRPEuNaCcHP5HUrelSZIP4dcICgybc4Dhtfh8AiEA35W8vTGPw4JmnjDjg94xqgdHtI3AxZuGc0a4XxxSykQq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDN%2FolZ1eSBW5Y3INjSrcA%2FYRPJ3xTzw0xurOqN1rlyrmur8jJlERqqidiJ2IuTuNpWhkGsvrz9Ex%2FAhvbF%2Frb%2BqgFF6Uo%2F%2BeJGOXpkCROlwSJ%2F0ax9QbaI0o1ERz4AF4dcv33mDuBztK1B56fhrocIfRefdWStlycheT3qTlDCKuDkU%2BXZbT9RCT0NP9MMD%2BMRgzSmQK9y4JphTdpJLDzOvkzQC2izLT3gSjkDMn9ooy2kwN2iHEf4%2BdgmAGQ14NU940CDaj%2F8yBjS6ItJ6%2BRekbBYLGH7VPS6vAz1tChfxzNEu9vaBv%2BjEdiiMkdU9vei4JxS2wTKWF0HH6XoK%2BmDXBvOMWDXnx3tIQzPpgkGspi2Wo98yMCdoQA9LctWPoDW7ftsE1FqCNCrIyBtb0IvmERFKICbv7dKevNxwWFyWtJQqNct4O%2BipireDDSgMyiqbdYd1sKIvRoD%2Bw34v5WDPB9RfFVlUzJGk0kP%2FOjQVWf8%2B8XS9xO%2F2s6b0UT1Z74zE96wS1zSEU3db8zPaKKzL5moJVckcGXjJEF9F3lNguJP8LoQ0Y7I79mdGvv%2BK2KX5mxo75c761syW6loD44yRJjE%2BbADZEj8OkAd2AN6Zx64MtLq4Yy8O0caiWdkefgVUC7tRzlI6KUBoKMICOscsGOqUBoEUozjjZSsoN1n57jEITus%2BtjjDA5wPIGBziaXrNWChT5OJ1W9v%2B0nqjHJYu5RLNHnl%2FYVfhyfzLN%2FUiBmUkd7RHJUfipNiCywrYGvWQ1W4Pss7goL4z38i%2BNUWQfxA7j%2Bn39iJjFx9wnshGgYqjX%2F36CqeBPNa3HDkGBEof7k5St39LrKDe9JpTWc60fxQlfmnWQKDX1Rat1BmVtaMTh4zRgTt1&X-Amz-Signature=90628112af212b12472b6ffdf75b50140c0018442499d8a06f02e3bcb3827bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUITVPEQ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnRhE79gR0SQl3Pi4NReVGsKsGLmqPL%2FxvrggWBzuftAiADPfCXRYO0svUZKaE3tQxzOLQ9wYE%2FyX%2FQrzFlamcF6yr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMX17lSahKFekO0LkJKtwDhUpzgT1ZlzRq3Un8UqmbodxyCKLS8OIEi2lic7WrHOF3o1FYsau9sikFuILhSCRyFth9LnzN35S24JF95fkrEZ95oazy257svc0Ymv%2FuPez9zY%2FCMLIaSgiYeaSrCmyZT5bjEtRuXCqv4sFdi1D%2FhhYgP0J2ZCc2KlDLwwREbFxsyJW0UZgHb1H7Mq97aKuEWbsQBzipyjqyoFpT%2B%2B0kH5gtrKE9HCDrsaky0KhlNB2KQ1vi6iJTBq5wuEsnDBtTQRwDqhHu5mTr27lU91JEVSDCQ2Al47965Bdme9X9KWhmsnSH2RiPCDQdVxQC3%2FCQ4p4Moto2jU0jJHjgfNb26n%2BowDjkd5fZP9wtDE1DzsIyM46vgevhPf%2FhVyo9rrjYELQny8AAdZypJqe86mPtGc6ivHm%2Br4E0QWG8jH2sCXJLqicU3eY%2FeaF747Wh1AGW%2FJ2zRnGfWVCAOTjo0Y30raxwrYITPxZl3dtCyEpn3fgo%2BnboYkdbSoy8YjMQ12fsM78h5CjynvL4s%2FopAqBiNWAPB7U7LEir6WRKNu5E%2BzibnoHz3a95kRojyzRV%2BwBpd%2FJvT5%2FHGP%2FWqqCInp72wz7bnAhfFyTuksfM2j01XGW2u%2BVLsg7gcuepNNUw4o2xywY6pgGM4baEOCVVPjPgrUPivikSPrQ2Ur2mwQBUKO3ia33usoOCTKLQ2Fb7oEV4F4tIbHLFkxvIS8JBYyBguMELXiw%2BWF64spJGkBr0JfSxTcYTGAwz2rABwAHOklsbUq1A1CgFbO3jNSVxcJQUfwWHY95JncTjSfK2Z2%2FnCtz9dYZSYYGeDLqosqca2mczkjIzqL8Eqv9ZqD9m%2BjPx%2Bt3GKvhrXpVTSCv6&X-Amz-Signature=44a50c91e557ad28afe0461e33584c3b74efb5d8f7d641944941853aef8d3aed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUITVPEQ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnRhE79gR0SQl3Pi4NReVGsKsGLmqPL%2FxvrggWBzuftAiADPfCXRYO0svUZKaE3tQxzOLQ9wYE%2FyX%2FQrzFlamcF6yr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMX17lSahKFekO0LkJKtwDhUpzgT1ZlzRq3Un8UqmbodxyCKLS8OIEi2lic7WrHOF3o1FYsau9sikFuILhSCRyFth9LnzN35S24JF95fkrEZ95oazy257svc0Ymv%2FuPez9zY%2FCMLIaSgiYeaSrCmyZT5bjEtRuXCqv4sFdi1D%2FhhYgP0J2ZCc2KlDLwwREbFxsyJW0UZgHb1H7Mq97aKuEWbsQBzipyjqyoFpT%2B%2B0kH5gtrKE9HCDrsaky0KhlNB2KQ1vi6iJTBq5wuEsnDBtTQRwDqhHu5mTr27lU91JEVSDCQ2Al47965Bdme9X9KWhmsnSH2RiPCDQdVxQC3%2FCQ4p4Moto2jU0jJHjgfNb26n%2BowDjkd5fZP9wtDE1DzsIyM46vgevhPf%2FhVyo9rrjYELQny8AAdZypJqe86mPtGc6ivHm%2Br4E0QWG8jH2sCXJLqicU3eY%2FeaF747Wh1AGW%2FJ2zRnGfWVCAOTjo0Y30raxwrYITPxZl3dtCyEpn3fgo%2BnboYkdbSoy8YjMQ12fsM78h5CjynvL4s%2FopAqBiNWAPB7U7LEir6WRKNu5E%2BzibnoHz3a95kRojyzRV%2BwBpd%2FJvT5%2FHGP%2FWqqCInp72wz7bnAhfFyTuksfM2j01XGW2u%2BVLsg7gcuepNNUw4o2xywY6pgGM4baEOCVVPjPgrUPivikSPrQ2Ur2mwQBUKO3ia33usoOCTKLQ2Fb7oEV4F4tIbHLFkxvIS8JBYyBguMELXiw%2BWF64spJGkBr0JfSxTcYTGAwz2rABwAHOklsbUq1A1CgFbO3jNSVxcJQUfwWHY95JncTjSfK2Z2%2FnCtz9dYZSYYGeDLqosqca2mczkjIzqL8Eqv9ZqD9m%2BjPx%2Bt3GKvhrXpVTSCv6&X-Amz-Signature=dcf4cbcc7077655c5cd820a4b450e2832946ede7429134db8bbac89683902cf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNHZMF3%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBtRSVmmGB%2FNMD%2FNMxINk%2FkfzZCnrd8BxCQGOKxUuohAiEAiJBzIqWHZgsU6HLJ%2FCtRydvgIzPDn%2BBjjVBKzp1EZScq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDD9aZxWPNI8WW%2FkfICrcA6A77vkhP0%2FMEmm9DrWAHFX3O6P7ffvqf2SH0%2BTTYcvJg8cdvefrNulu7llWs0gFyjEEoA6O38jEYVz2OgzQNCjF7jYqbp8no3451q%2F%2BAH7%2FFzMteuR5JV3n%2FM2EN%2BVkdSg5RA7qJo%2FezUzpBSl8PL%2Fwa5e3ssNK%2BrOB74rx14HG2LHOWH1ZM8FhNCcmtX%2BNrwvMlGG%2BQsoaVzkrEWSlHL6P%2Bn9ilOMTR187X1Z4KlOI7TB3XpxsghA1%2F7MTIP2Ix%2BrrSlPiIKKuitoj85HF%2BFNtf9P6ydaV8g0x9gwuvu%2F5iOAmfgMVFo31Ar5NwpykSgKcnVkmsyZDkdYLQt86Fax7WxDbnphhQz9oXlZxxOy0nLwIWNcMb8BPfNJLOhK3u3LNrDNa630qJYeBkEblU0lCIV7Xqx%2BssaLtPAJztERCOamqqRun0yEgDPNY8MRlTs7%2BuAFzuEoWAjZAXkYw2vO1dDDbBR2159qt4K8xP1Ch1wrxRL2o4%2B6m5nKwjk4LwlqydWDYxt5boqm6PVf%2FCOEHYoM1arBumYLe9ggIM5G%2FKXatwFGnADrmZ1%2Fmk5YJRAppmbtbURKGVgyR%2B0eeA%2F1%2ByAml6yyR%2FE6HiumDTfHM%2BNU9aQJfKfaXhvcDMJSOscsGOqUBy4yWon7or0c%2FYl6CF4tSTu8vXXqv2j5BZ%2FQ6iXDpPi4dHTWRiwNjym8%2Bi9PoJJM%2Fsp4G%2FQyfmM%2FuT3oSLwSEG4ak%2F%2FNhQlzrvZ%2FYeQKQrjUSPBIAtzbRie5A0bvIIcpdN5ucGEHdPcOpXtcrvK08ODSpqWA0712PQwSN%2FQC2ud3jtFd%2BOQAMuCJC2JPcmjGF2Z%2BF32GwuEPGPg09yxZn%2FrQ2ktOl&X-Amz-Signature=1e2234d6bca4045dab64b0c15e509332df996836b1704102b4ff01468fb076d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNHZMF3%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBtRSVmmGB%2FNMD%2FNMxINk%2FkfzZCnrd8BxCQGOKxUuohAiEAiJBzIqWHZgsU6HLJ%2FCtRydvgIzPDn%2BBjjVBKzp1EZScq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDD9aZxWPNI8WW%2FkfICrcA6A77vkhP0%2FMEmm9DrWAHFX3O6P7ffvqf2SH0%2BTTYcvJg8cdvefrNulu7llWs0gFyjEEoA6O38jEYVz2OgzQNCjF7jYqbp8no3451q%2F%2BAH7%2FFzMteuR5JV3n%2FM2EN%2BVkdSg5RA7qJo%2FezUzpBSl8PL%2Fwa5e3ssNK%2BrOB74rx14HG2LHOWH1ZM8FhNCcmtX%2BNrwvMlGG%2BQsoaVzkrEWSlHL6P%2Bn9ilOMTR187X1Z4KlOI7TB3XpxsghA1%2F7MTIP2Ix%2BrrSlPiIKKuitoj85HF%2BFNtf9P6ydaV8g0x9gwuvu%2F5iOAmfgMVFo31Ar5NwpykSgKcnVkmsyZDkdYLQt86Fax7WxDbnphhQz9oXlZxxOy0nLwIWNcMb8BPfNJLOhK3u3LNrDNa630qJYeBkEblU0lCIV7Xqx%2BssaLtPAJztERCOamqqRun0yEgDPNY8MRlTs7%2BuAFzuEoWAjZAXkYw2vO1dDDbBR2159qt4K8xP1Ch1wrxRL2o4%2B6m5nKwjk4LwlqydWDYxt5boqm6PVf%2FCOEHYoM1arBumYLe9ggIM5G%2FKXatwFGnADrmZ1%2Fmk5YJRAppmbtbURKGVgyR%2B0eeA%2F1%2ByAml6yyR%2FE6HiumDTfHM%2BNU9aQJfKfaXhvcDMJSOscsGOqUBy4yWon7or0c%2FYl6CF4tSTu8vXXqv2j5BZ%2FQ6iXDpPi4dHTWRiwNjym8%2Bi9PoJJM%2Fsp4G%2FQyfmM%2FuT3oSLwSEG4ak%2F%2FNhQlzrvZ%2FYeQKQrjUSPBIAtzbRie5A0bvIIcpdN5ucGEHdPcOpXtcrvK08ODSpqWA0712PQwSN%2FQC2ud3jtFd%2BOQAMuCJC2JPcmjGF2Z%2BF32GwuEPGPg09yxZn%2FrQ2ktOl&X-Amz-Signature=96b1d6a00135ce3240cdbb4bcb81a65b1fea2fcc66d901cae1cbaffd272ca5c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNHZMF3%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBtRSVmmGB%2FNMD%2FNMxINk%2FkfzZCnrd8BxCQGOKxUuohAiEAiJBzIqWHZgsU6HLJ%2FCtRydvgIzPDn%2BBjjVBKzp1EZScq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDD9aZxWPNI8WW%2FkfICrcA6A77vkhP0%2FMEmm9DrWAHFX3O6P7ffvqf2SH0%2BTTYcvJg8cdvefrNulu7llWs0gFyjEEoA6O38jEYVz2OgzQNCjF7jYqbp8no3451q%2F%2BAH7%2FFzMteuR5JV3n%2FM2EN%2BVkdSg5RA7qJo%2FezUzpBSl8PL%2Fwa5e3ssNK%2BrOB74rx14HG2LHOWH1ZM8FhNCcmtX%2BNrwvMlGG%2BQsoaVzkrEWSlHL6P%2Bn9ilOMTR187X1Z4KlOI7TB3XpxsghA1%2F7MTIP2Ix%2BrrSlPiIKKuitoj85HF%2BFNtf9P6ydaV8g0x9gwuvu%2F5iOAmfgMVFo31Ar5NwpykSgKcnVkmsyZDkdYLQt86Fax7WxDbnphhQz9oXlZxxOy0nLwIWNcMb8BPfNJLOhK3u3LNrDNa630qJYeBkEblU0lCIV7Xqx%2BssaLtPAJztERCOamqqRun0yEgDPNY8MRlTs7%2BuAFzuEoWAjZAXkYw2vO1dDDbBR2159qt4K8xP1Ch1wrxRL2o4%2B6m5nKwjk4LwlqydWDYxt5boqm6PVf%2FCOEHYoM1arBumYLe9ggIM5G%2FKXatwFGnADrmZ1%2Fmk5YJRAppmbtbURKGVgyR%2B0eeA%2F1%2ByAml6yyR%2FE6HiumDTfHM%2BNU9aQJfKfaXhvcDMJSOscsGOqUBy4yWon7or0c%2FYl6CF4tSTu8vXXqv2j5BZ%2FQ6iXDpPi4dHTWRiwNjym8%2Bi9PoJJM%2Fsp4G%2FQyfmM%2FuT3oSLwSEG4ak%2F%2FNhQlzrvZ%2FYeQKQrjUSPBIAtzbRie5A0bvIIcpdN5ucGEHdPcOpXtcrvK08ODSpqWA0712PQwSN%2FQC2ud3jtFd%2BOQAMuCJC2JPcmjGF2Z%2BF32GwuEPGPg09yxZn%2FrQ2ktOl&X-Amz-Signature=f016ef6bb4c2b53f31190cc98cff0ba9f87d0961068270c7f0f11d0678f124ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNHZMF3%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBtRSVmmGB%2FNMD%2FNMxINk%2FkfzZCnrd8BxCQGOKxUuohAiEAiJBzIqWHZgsU6HLJ%2FCtRydvgIzPDn%2BBjjVBKzp1EZScq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDD9aZxWPNI8WW%2FkfICrcA6A77vkhP0%2FMEmm9DrWAHFX3O6P7ffvqf2SH0%2BTTYcvJg8cdvefrNulu7llWs0gFyjEEoA6O38jEYVz2OgzQNCjF7jYqbp8no3451q%2F%2BAH7%2FFzMteuR5JV3n%2FM2EN%2BVkdSg5RA7qJo%2FezUzpBSl8PL%2Fwa5e3ssNK%2BrOB74rx14HG2LHOWH1ZM8FhNCcmtX%2BNrwvMlGG%2BQsoaVzkrEWSlHL6P%2Bn9ilOMTR187X1Z4KlOI7TB3XpxsghA1%2F7MTIP2Ix%2BrrSlPiIKKuitoj85HF%2BFNtf9P6ydaV8g0x9gwuvu%2F5iOAmfgMVFo31Ar5NwpykSgKcnVkmsyZDkdYLQt86Fax7WxDbnphhQz9oXlZxxOy0nLwIWNcMb8BPfNJLOhK3u3LNrDNa630qJYeBkEblU0lCIV7Xqx%2BssaLtPAJztERCOamqqRun0yEgDPNY8MRlTs7%2BuAFzuEoWAjZAXkYw2vO1dDDbBR2159qt4K8xP1Ch1wrxRL2o4%2B6m5nKwjk4LwlqydWDYxt5boqm6PVf%2FCOEHYoM1arBumYLe9ggIM5G%2FKXatwFGnADrmZ1%2Fmk5YJRAppmbtbURKGVgyR%2B0eeA%2F1%2ByAml6yyR%2FE6HiumDTfHM%2BNU9aQJfKfaXhvcDMJSOscsGOqUBy4yWon7or0c%2FYl6CF4tSTu8vXXqv2j5BZ%2FQ6iXDpPi4dHTWRiwNjym8%2Bi9PoJJM%2Fsp4G%2FQyfmM%2FuT3oSLwSEG4ak%2F%2FNhQlzrvZ%2FYeQKQrjUSPBIAtzbRie5A0bvIIcpdN5ucGEHdPcOpXtcrvK08ODSpqWA0712PQwSN%2FQC2ud3jtFd%2BOQAMuCJC2JPcmjGF2Z%2BF32GwuEPGPg09yxZn%2FrQ2ktOl&X-Amz-Signature=1941f8e91101ceb02e55ab23a857e0c04dec86ae838ef22b6f3a5273978144ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNHZMF3%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBtRSVmmGB%2FNMD%2FNMxINk%2FkfzZCnrd8BxCQGOKxUuohAiEAiJBzIqWHZgsU6HLJ%2FCtRydvgIzPDn%2BBjjVBKzp1EZScq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDD9aZxWPNI8WW%2FkfICrcA6A77vkhP0%2FMEmm9DrWAHFX3O6P7ffvqf2SH0%2BTTYcvJg8cdvefrNulu7llWs0gFyjEEoA6O38jEYVz2OgzQNCjF7jYqbp8no3451q%2F%2BAH7%2FFzMteuR5JV3n%2FM2EN%2BVkdSg5RA7qJo%2FezUzpBSl8PL%2Fwa5e3ssNK%2BrOB74rx14HG2LHOWH1ZM8FhNCcmtX%2BNrwvMlGG%2BQsoaVzkrEWSlHL6P%2Bn9ilOMTR187X1Z4KlOI7TB3XpxsghA1%2F7MTIP2Ix%2BrrSlPiIKKuitoj85HF%2BFNtf9P6ydaV8g0x9gwuvu%2F5iOAmfgMVFo31Ar5NwpykSgKcnVkmsyZDkdYLQt86Fax7WxDbnphhQz9oXlZxxOy0nLwIWNcMb8BPfNJLOhK3u3LNrDNa630qJYeBkEblU0lCIV7Xqx%2BssaLtPAJztERCOamqqRun0yEgDPNY8MRlTs7%2BuAFzuEoWAjZAXkYw2vO1dDDbBR2159qt4K8xP1Ch1wrxRL2o4%2B6m5nKwjk4LwlqydWDYxt5boqm6PVf%2FCOEHYoM1arBumYLe9ggIM5G%2FKXatwFGnADrmZ1%2Fmk5YJRAppmbtbURKGVgyR%2B0eeA%2F1%2ByAml6yyR%2FE6HiumDTfHM%2BNU9aQJfKfaXhvcDMJSOscsGOqUBy4yWon7or0c%2FYl6CF4tSTu8vXXqv2j5BZ%2FQ6iXDpPi4dHTWRiwNjym8%2Bi9PoJJM%2Fsp4G%2FQyfmM%2FuT3oSLwSEG4ak%2F%2FNhQlzrvZ%2FYeQKQrjUSPBIAtzbRie5A0bvIIcpdN5ucGEHdPcOpXtcrvK08ODSpqWA0712PQwSN%2FQC2ud3jtFd%2BOQAMuCJC2JPcmjGF2Z%2BF32GwuEPGPg09yxZn%2FrQ2ktOl&X-Amz-Signature=2259b893463716d5991a3c5e9e41d307a8f1ff119c86c179a97a24baea4910dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNHZMF3%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBtRSVmmGB%2FNMD%2FNMxINk%2FkfzZCnrd8BxCQGOKxUuohAiEAiJBzIqWHZgsU6HLJ%2FCtRydvgIzPDn%2BBjjVBKzp1EZScq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDD9aZxWPNI8WW%2FkfICrcA6A77vkhP0%2FMEmm9DrWAHFX3O6P7ffvqf2SH0%2BTTYcvJg8cdvefrNulu7llWs0gFyjEEoA6O38jEYVz2OgzQNCjF7jYqbp8no3451q%2F%2BAH7%2FFzMteuR5JV3n%2FM2EN%2BVkdSg5RA7qJo%2FezUzpBSl8PL%2Fwa5e3ssNK%2BrOB74rx14HG2LHOWH1ZM8FhNCcmtX%2BNrwvMlGG%2BQsoaVzkrEWSlHL6P%2Bn9ilOMTR187X1Z4KlOI7TB3XpxsghA1%2F7MTIP2Ix%2BrrSlPiIKKuitoj85HF%2BFNtf9P6ydaV8g0x9gwuvu%2F5iOAmfgMVFo31Ar5NwpykSgKcnVkmsyZDkdYLQt86Fax7WxDbnphhQz9oXlZxxOy0nLwIWNcMb8BPfNJLOhK3u3LNrDNa630qJYeBkEblU0lCIV7Xqx%2BssaLtPAJztERCOamqqRun0yEgDPNY8MRlTs7%2BuAFzuEoWAjZAXkYw2vO1dDDbBR2159qt4K8xP1Ch1wrxRL2o4%2B6m5nKwjk4LwlqydWDYxt5boqm6PVf%2FCOEHYoM1arBumYLe9ggIM5G%2FKXatwFGnADrmZ1%2Fmk5YJRAppmbtbURKGVgyR%2B0eeA%2F1%2ByAml6yyR%2FE6HiumDTfHM%2BNU9aQJfKfaXhvcDMJSOscsGOqUBy4yWon7or0c%2FYl6CF4tSTu8vXXqv2j5BZ%2FQ6iXDpPi4dHTWRiwNjym8%2Bi9PoJJM%2Fsp4G%2FQyfmM%2FuT3oSLwSEG4ak%2F%2FNhQlzrvZ%2FYeQKQrjUSPBIAtzbRie5A0bvIIcpdN5ucGEHdPcOpXtcrvK08ODSpqWA0712PQwSN%2FQC2ud3jtFd%2BOQAMuCJC2JPcmjGF2Z%2BF32GwuEPGPg09yxZn%2FrQ2ktOl&X-Amz-Signature=4ce9646afa20d26437db9784c79aedc2ce05ba2282f486967d60f0d7ee74d598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNHZMF3%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBtRSVmmGB%2FNMD%2FNMxINk%2FkfzZCnrd8BxCQGOKxUuohAiEAiJBzIqWHZgsU6HLJ%2FCtRydvgIzPDn%2BBjjVBKzp1EZScq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDD9aZxWPNI8WW%2FkfICrcA6A77vkhP0%2FMEmm9DrWAHFX3O6P7ffvqf2SH0%2BTTYcvJg8cdvefrNulu7llWs0gFyjEEoA6O38jEYVz2OgzQNCjF7jYqbp8no3451q%2F%2BAH7%2FFzMteuR5JV3n%2FM2EN%2BVkdSg5RA7qJo%2FezUzpBSl8PL%2Fwa5e3ssNK%2BrOB74rx14HG2LHOWH1ZM8FhNCcmtX%2BNrwvMlGG%2BQsoaVzkrEWSlHL6P%2Bn9ilOMTR187X1Z4KlOI7TB3XpxsghA1%2F7MTIP2Ix%2BrrSlPiIKKuitoj85HF%2BFNtf9P6ydaV8g0x9gwuvu%2F5iOAmfgMVFo31Ar5NwpykSgKcnVkmsyZDkdYLQt86Fax7WxDbnphhQz9oXlZxxOy0nLwIWNcMb8BPfNJLOhK3u3LNrDNa630qJYeBkEblU0lCIV7Xqx%2BssaLtPAJztERCOamqqRun0yEgDPNY8MRlTs7%2BuAFzuEoWAjZAXkYw2vO1dDDbBR2159qt4K8xP1Ch1wrxRL2o4%2B6m5nKwjk4LwlqydWDYxt5boqm6PVf%2FCOEHYoM1arBumYLe9ggIM5G%2FKXatwFGnADrmZ1%2Fmk5YJRAppmbtbURKGVgyR%2B0eeA%2F1%2ByAml6yyR%2FE6HiumDTfHM%2BNU9aQJfKfaXhvcDMJSOscsGOqUBy4yWon7or0c%2FYl6CF4tSTu8vXXqv2j5BZ%2FQ6iXDpPi4dHTWRiwNjym8%2Bi9PoJJM%2Fsp4G%2FQyfmM%2FuT3oSLwSEG4ak%2F%2FNhQlzrvZ%2FYeQKQrjUSPBIAtzbRie5A0bvIIcpdN5ucGEHdPcOpXtcrvK08ODSpqWA0712PQwSN%2FQC2ud3jtFd%2BOQAMuCJC2JPcmjGF2Z%2BF32GwuEPGPg09yxZn%2FrQ2ktOl&X-Amz-Signature=cfcc25ebafc7135f3eb4d73a6ab7ed1e55eec832bfc27e55326d9ca7c6292883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTPDRI7X%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjGEBjsMT8ahMXkSu%2BedVrZPd4jgFO5SoyYioK5cikqwIgf9m0HbTxnCkxlz0a7fBNz3p1bJ7lEsekeHhoYIyRdiYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPMIYfahqj1fzbNDMCrcA1PzaMSVKqzmBYFVwIfglOum5EDHX1U%2FSmhvgKr%2Bn%2BYs%2BAjAKxrumT23Ebd0iGdS5plea6KRZm%2BF%2BxREJyBJg1mkflGgbfnWYNQUWN9SqB7eVDdvvfpOQJPKD1N3g5dZcPMNyT7qtTDo9afn9s78ApA3nfi4xY8nMTlDcFP3WUKIJyHBB2Tn%2Fhwfcj9oPPTJxNonwOjo0XiYZKhisRWAXnkV78qvaftdc6nl%2BRhJTOERCAzFcBsN%2B7TVHaLBAtrnBpInzeWEoTOjeLsSkD175NTyLBjEc9ftcB%2FcnUG9iZfaTYx7kaBUUUsXSC7CvaJQs7b3K8nTyeW69CN0AuqVsXeQSFxgC0oXKh%2BxVXRPlKBjlnRel28DUjBeh676ns%2FSgMQqKz%2Bja2OBTCgqnUIsBEFLW48dgv%2FCkVEqjbaqvYzpE6nwtPkcm8ZPT6EUQeF7FqD5bBQV%2Fc1Scx3A3T7KSkk5zEOUWfmdoWXoA5SboOgdybW1sSAT27cLXXtMZk%2F3E9LVmYZhzGAEJQKtahlLxtdTQpg2xdRPcMPPK%2B3ysgdPT9PcP%2ByrXWyBs9tC4cPB%2FkQJSbS%2BsUJV%2Bm706n1wQq57BlDPn9lEkL0tCsVPzmZSWQKUJjLSSPCkuW5RMIyOscsGOqUBVW6%2BNA2SaDNlPKTR88Xr8cI5pjOJ4gMQHifOrI%2BNlHIQAEmA9fD1yGPh0R33MfNq4zYSshWJayo4Egmx35FV0Bf%2BsBdANnzfsA0pPkiC1beJGCDirTj2F2Bg0aeOnnIAwv%2FdYIJMa%2Fpvz%2BYANfOMJF4AiSgKO6E2YZwiKBY2ys1oGSxxbFl%2FG1BYMWgZcoS4uwc1eeueZg%2FN%2BKR1Ft%2FUG9%2BUgYD3&X-Amz-Signature=3fa4233580d40103ed7a45835a4fc21139cd660f2448e1258bcdb3a4b13eb6b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTPDRI7X%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjGEBjsMT8ahMXkSu%2BedVrZPd4jgFO5SoyYioK5cikqwIgf9m0HbTxnCkxlz0a7fBNz3p1bJ7lEsekeHhoYIyRdiYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPMIYfahqj1fzbNDMCrcA1PzaMSVKqzmBYFVwIfglOum5EDHX1U%2FSmhvgKr%2Bn%2BYs%2BAjAKxrumT23Ebd0iGdS5plea6KRZm%2BF%2BxREJyBJg1mkflGgbfnWYNQUWN9SqB7eVDdvvfpOQJPKD1N3g5dZcPMNyT7qtTDo9afn9s78ApA3nfi4xY8nMTlDcFP3WUKIJyHBB2Tn%2Fhwfcj9oPPTJxNonwOjo0XiYZKhisRWAXnkV78qvaftdc6nl%2BRhJTOERCAzFcBsN%2B7TVHaLBAtrnBpInzeWEoTOjeLsSkD175NTyLBjEc9ftcB%2FcnUG9iZfaTYx7kaBUUUsXSC7CvaJQs7b3K8nTyeW69CN0AuqVsXeQSFxgC0oXKh%2BxVXRPlKBjlnRel28DUjBeh676ns%2FSgMQqKz%2Bja2OBTCgqnUIsBEFLW48dgv%2FCkVEqjbaqvYzpE6nwtPkcm8ZPT6EUQeF7FqD5bBQV%2Fc1Scx3A3T7KSkk5zEOUWfmdoWXoA5SboOgdybW1sSAT27cLXXtMZk%2F3E9LVmYZhzGAEJQKtahlLxtdTQpg2xdRPcMPPK%2B3ysgdPT9PcP%2ByrXWyBs9tC4cPB%2FkQJSbS%2BsUJV%2Bm706n1wQq57BlDPn9lEkL0tCsVPzmZSWQKUJjLSSPCkuW5RMIyOscsGOqUBVW6%2BNA2SaDNlPKTR88Xr8cI5pjOJ4gMQHifOrI%2BNlHIQAEmA9fD1yGPh0R33MfNq4zYSshWJayo4Egmx35FV0Bf%2BsBdANnzfsA0pPkiC1beJGCDirTj2F2Bg0aeOnnIAwv%2FdYIJMa%2Fpvz%2BYANfOMJF4AiSgKO6E2YZwiKBY2ys1oGSxxbFl%2FG1BYMWgZcoS4uwc1eeueZg%2FN%2BKR1Ft%2FUG9%2BUgYD3&X-Amz-Signature=a75ebe3c2a7dc94795f6b2291bcc608fd6b21cc02ed691eaefbb953a11716479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTPDRI7X%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjGEBjsMT8ahMXkSu%2BedVrZPd4jgFO5SoyYioK5cikqwIgf9m0HbTxnCkxlz0a7fBNz3p1bJ7lEsekeHhoYIyRdiYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPMIYfahqj1fzbNDMCrcA1PzaMSVKqzmBYFVwIfglOum5EDHX1U%2FSmhvgKr%2Bn%2BYs%2BAjAKxrumT23Ebd0iGdS5plea6KRZm%2BF%2BxREJyBJg1mkflGgbfnWYNQUWN9SqB7eVDdvvfpOQJPKD1N3g5dZcPMNyT7qtTDo9afn9s78ApA3nfi4xY8nMTlDcFP3WUKIJyHBB2Tn%2Fhwfcj9oPPTJxNonwOjo0XiYZKhisRWAXnkV78qvaftdc6nl%2BRhJTOERCAzFcBsN%2B7TVHaLBAtrnBpInzeWEoTOjeLsSkD175NTyLBjEc9ftcB%2FcnUG9iZfaTYx7kaBUUUsXSC7CvaJQs7b3K8nTyeW69CN0AuqVsXeQSFxgC0oXKh%2BxVXRPlKBjlnRel28DUjBeh676ns%2FSgMQqKz%2Bja2OBTCgqnUIsBEFLW48dgv%2FCkVEqjbaqvYzpE6nwtPkcm8ZPT6EUQeF7FqD5bBQV%2Fc1Scx3A3T7KSkk5zEOUWfmdoWXoA5SboOgdybW1sSAT27cLXXtMZk%2F3E9LVmYZhzGAEJQKtahlLxtdTQpg2xdRPcMPPK%2B3ysgdPT9PcP%2ByrXWyBs9tC4cPB%2FkQJSbS%2BsUJV%2Bm706n1wQq57BlDPn9lEkL0tCsVPzmZSWQKUJjLSSPCkuW5RMIyOscsGOqUBVW6%2BNA2SaDNlPKTR88Xr8cI5pjOJ4gMQHifOrI%2BNlHIQAEmA9fD1yGPh0R33MfNq4zYSshWJayo4Egmx35FV0Bf%2BsBdANnzfsA0pPkiC1beJGCDirTj2F2Bg0aeOnnIAwv%2FdYIJMa%2Fpvz%2BYANfOMJF4AiSgKO6E2YZwiKBY2ys1oGSxxbFl%2FG1BYMWgZcoS4uwc1eeueZg%2FN%2BKR1Ft%2FUG9%2BUgYD3&X-Amz-Signature=44d49aa3bf80a041122f0e6ddcdc7a4df47b3f84b466805c5d4f7cba999ab4d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTPDRI7X%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjGEBjsMT8ahMXkSu%2BedVrZPd4jgFO5SoyYioK5cikqwIgf9m0HbTxnCkxlz0a7fBNz3p1bJ7lEsekeHhoYIyRdiYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPMIYfahqj1fzbNDMCrcA1PzaMSVKqzmBYFVwIfglOum5EDHX1U%2FSmhvgKr%2Bn%2BYs%2BAjAKxrumT23Ebd0iGdS5plea6KRZm%2BF%2BxREJyBJg1mkflGgbfnWYNQUWN9SqB7eVDdvvfpOQJPKD1N3g5dZcPMNyT7qtTDo9afn9s78ApA3nfi4xY8nMTlDcFP3WUKIJyHBB2Tn%2Fhwfcj9oPPTJxNonwOjo0XiYZKhisRWAXnkV78qvaftdc6nl%2BRhJTOERCAzFcBsN%2B7TVHaLBAtrnBpInzeWEoTOjeLsSkD175NTyLBjEc9ftcB%2FcnUG9iZfaTYx7kaBUUUsXSC7CvaJQs7b3K8nTyeW69CN0AuqVsXeQSFxgC0oXKh%2BxVXRPlKBjlnRel28DUjBeh676ns%2FSgMQqKz%2Bja2OBTCgqnUIsBEFLW48dgv%2FCkVEqjbaqvYzpE6nwtPkcm8ZPT6EUQeF7FqD5bBQV%2Fc1Scx3A3T7KSkk5zEOUWfmdoWXoA5SboOgdybW1sSAT27cLXXtMZk%2F3E9LVmYZhzGAEJQKtahlLxtdTQpg2xdRPcMPPK%2B3ysgdPT9PcP%2ByrXWyBs9tC4cPB%2FkQJSbS%2BsUJV%2Bm706n1wQq57BlDPn9lEkL0tCsVPzmZSWQKUJjLSSPCkuW5RMIyOscsGOqUBVW6%2BNA2SaDNlPKTR88Xr8cI5pjOJ4gMQHifOrI%2BNlHIQAEmA9fD1yGPh0R33MfNq4zYSshWJayo4Egmx35FV0Bf%2BsBdANnzfsA0pPkiC1beJGCDirTj2F2Bg0aeOnnIAwv%2FdYIJMa%2Fpvz%2BYANfOMJF4AiSgKO6E2YZwiKBY2ys1oGSxxbFl%2FG1BYMWgZcoS4uwc1eeueZg%2FN%2BKR1Ft%2FUG9%2BUgYD3&X-Amz-Signature=a3bb6cb1cc85676d01ae35984d926909bd9ec8d56581a8f2135f02d33ebc36e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTPDRI7X%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjGEBjsMT8ahMXkSu%2BedVrZPd4jgFO5SoyYioK5cikqwIgf9m0HbTxnCkxlz0a7fBNz3p1bJ7lEsekeHhoYIyRdiYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPMIYfahqj1fzbNDMCrcA1PzaMSVKqzmBYFVwIfglOum5EDHX1U%2FSmhvgKr%2Bn%2BYs%2BAjAKxrumT23Ebd0iGdS5plea6KRZm%2BF%2BxREJyBJg1mkflGgbfnWYNQUWN9SqB7eVDdvvfpOQJPKD1N3g5dZcPMNyT7qtTDo9afn9s78ApA3nfi4xY8nMTlDcFP3WUKIJyHBB2Tn%2Fhwfcj9oPPTJxNonwOjo0XiYZKhisRWAXnkV78qvaftdc6nl%2BRhJTOERCAzFcBsN%2B7TVHaLBAtrnBpInzeWEoTOjeLsSkD175NTyLBjEc9ftcB%2FcnUG9iZfaTYx7kaBUUUsXSC7CvaJQs7b3K8nTyeW69CN0AuqVsXeQSFxgC0oXKh%2BxVXRPlKBjlnRel28DUjBeh676ns%2FSgMQqKz%2Bja2OBTCgqnUIsBEFLW48dgv%2FCkVEqjbaqvYzpE6nwtPkcm8ZPT6EUQeF7FqD5bBQV%2Fc1Scx3A3T7KSkk5zEOUWfmdoWXoA5SboOgdybW1sSAT27cLXXtMZk%2F3E9LVmYZhzGAEJQKtahlLxtdTQpg2xdRPcMPPK%2B3ysgdPT9PcP%2ByrXWyBs9tC4cPB%2FkQJSbS%2BsUJV%2Bm706n1wQq57BlDPn9lEkL0tCsVPzmZSWQKUJjLSSPCkuW5RMIyOscsGOqUBVW6%2BNA2SaDNlPKTR88Xr8cI5pjOJ4gMQHifOrI%2BNlHIQAEmA9fD1yGPh0R33MfNq4zYSshWJayo4Egmx35FV0Bf%2BsBdANnzfsA0pPkiC1beJGCDirTj2F2Bg0aeOnnIAwv%2FdYIJMa%2Fpvz%2BYANfOMJF4AiSgKO6E2YZwiKBY2ys1oGSxxbFl%2FG1BYMWgZcoS4uwc1eeueZg%2FN%2BKR1Ft%2FUG9%2BUgYD3&X-Amz-Signature=f6c011ea6b2e89d66742468be0359f7d7d53dae29c9d984f75d32d94cc1cf653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVXWNI7%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKCll8LeoQ9VHjVBq4ZRtC4HbGg35iDkGn52WkfjddkAiEAl6XWSutQ9vu%2Fwbxfam8%2Fh7xtvSGW9MepAVdtMjt%2BZW4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDL8JMUFy7GtQaB201SrcA4KtLLXcteYz4%2FG2Dk8f4XpK5hpQlh1VZPmJXSdmP9YgCAT%2BZZie33WYGllo1anxdXLseQqjR58%2BsTd9k1RTKQHNaI5%2BkRwpX3P352jBWOBbzh0b3oPMhohIbdSiP8KJ4fkxP5AZMnbYC%2BgW0GfOl3rPdHes97gFfsSKorNe6iUcQAdCAn9TGmdNztBtf5CyyoJt%2BpxDlzfcybYDndIcet8S%2FrnZj1rgPfPZ2%2BKgIVqZpTx18FSJl3Z90GskigNmNZFcr2R6sGHrG8CsRhnJ%2FA4nc8SRpCCOYwYOtR7iagglsQ5fAQcDWvFOpBC%2F8eRU5yVg4qN%2FB9VLTohQiFc2mcqljrlDtc53GH6%2BP8ZoC3bWRnH%2Bh2T%2BLSq0Ymu1zoC16jd%2BItFCnM1Msmo%2F99W66QCQgBKavVyQE4L%2BfvXxtflh%2F7%2FCIgeECYuttF%2BvOB0Xn3fMUMCDvYcGc5FezL6I7%2B%2FrCUamWFOkzELToapriauFOtN46QyQvCY7%2Bu%2FGNF7Z7%2F33P196Ri6WsT5ZvMVsMKe3cai4xJ4Da%2Bzs8KKTwH7haYYqnUeRLGp6pdmz8zV1%2BXxsylmkMzImF19hQK4ppcqF%2Bu3Uu8I%2BmtePX691IwBr%2FcnXr8J7e8uCOYlGMKaOscsGOqUBB3P4%2FZPbF5s2BxpB3PRS4AoUn1XqNbM6Kp1%2F0uy0Tm3sIa8zpJzTDVdrpmBCp4alUkpRXA4LLJWqL0iF%2Br3aGcAtnbXKNL9yo8vv1adCOkYSpQZ%2BP%2FJZY7C3Ruf222tqZA0Mi%2FlIEQOhKdcsKnN8Av1J0ePIAOVhJebGyRIfFi6hch02wPk63a%2BMnnU9%2B9JMOgNUY5AlWKzf7hDGghcnWOHk46Y7&X-Amz-Signature=bc0f645a57fe2a6c695c4bbacda679544ca27110766b195502536f4b27eb59a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVXWNI7%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKCll8LeoQ9VHjVBq4ZRtC4HbGg35iDkGn52WkfjddkAiEAl6XWSutQ9vu%2Fwbxfam8%2Fh7xtvSGW9MepAVdtMjt%2BZW4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDL8JMUFy7GtQaB201SrcA4KtLLXcteYz4%2FG2Dk8f4XpK5hpQlh1VZPmJXSdmP9YgCAT%2BZZie33WYGllo1anxdXLseQqjR58%2BsTd9k1RTKQHNaI5%2BkRwpX3P352jBWOBbzh0b3oPMhohIbdSiP8KJ4fkxP5AZMnbYC%2BgW0GfOl3rPdHes97gFfsSKorNe6iUcQAdCAn9TGmdNztBtf5CyyoJt%2BpxDlzfcybYDndIcet8S%2FrnZj1rgPfPZ2%2BKgIVqZpTx18FSJl3Z90GskigNmNZFcr2R6sGHrG8CsRhnJ%2FA4nc8SRpCCOYwYOtR7iagglsQ5fAQcDWvFOpBC%2F8eRU5yVg4qN%2FB9VLTohQiFc2mcqljrlDtc53GH6%2BP8ZoC3bWRnH%2Bh2T%2BLSq0Ymu1zoC16jd%2BItFCnM1Msmo%2F99W66QCQgBKavVyQE4L%2BfvXxtflh%2F7%2FCIgeECYuttF%2BvOB0Xn3fMUMCDvYcGc5FezL6I7%2B%2FrCUamWFOkzELToapriauFOtN46QyQvCY7%2Bu%2FGNF7Z7%2F33P196Ri6WsT5ZvMVsMKe3cai4xJ4Da%2Bzs8KKTwH7haYYqnUeRLGp6pdmz8zV1%2BXxsylmkMzImF19hQK4ppcqF%2Bu3Uu8I%2BmtePX691IwBr%2FcnXr8J7e8uCOYlGMKaOscsGOqUBB3P4%2FZPbF5s2BxpB3PRS4AoUn1XqNbM6Kp1%2F0uy0Tm3sIa8zpJzTDVdrpmBCp4alUkpRXA4LLJWqL0iF%2Br3aGcAtnbXKNL9yo8vv1adCOkYSpQZ%2BP%2FJZY7C3Ruf222tqZA0Mi%2FlIEQOhKdcsKnN8Av1J0ePIAOVhJebGyRIfFi6hch02wPk63a%2BMnnU9%2B9JMOgNUY5AlWKzf7hDGghcnWOHk46Y7&X-Amz-Signature=796b9372f37980710a7f77c4f709412995960ad7e2b39e7facab51764f2f2282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVXWNI7%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKCll8LeoQ9VHjVBq4ZRtC4HbGg35iDkGn52WkfjddkAiEAl6XWSutQ9vu%2Fwbxfam8%2Fh7xtvSGW9MepAVdtMjt%2BZW4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDL8JMUFy7GtQaB201SrcA4KtLLXcteYz4%2FG2Dk8f4XpK5hpQlh1VZPmJXSdmP9YgCAT%2BZZie33WYGllo1anxdXLseQqjR58%2BsTd9k1RTKQHNaI5%2BkRwpX3P352jBWOBbzh0b3oPMhohIbdSiP8KJ4fkxP5AZMnbYC%2BgW0GfOl3rPdHes97gFfsSKorNe6iUcQAdCAn9TGmdNztBtf5CyyoJt%2BpxDlzfcybYDndIcet8S%2FrnZj1rgPfPZ2%2BKgIVqZpTx18FSJl3Z90GskigNmNZFcr2R6sGHrG8CsRhnJ%2FA4nc8SRpCCOYwYOtR7iagglsQ5fAQcDWvFOpBC%2F8eRU5yVg4qN%2FB9VLTohQiFc2mcqljrlDtc53GH6%2BP8ZoC3bWRnH%2Bh2T%2BLSq0Ymu1zoC16jd%2BItFCnM1Msmo%2F99W66QCQgBKavVyQE4L%2BfvXxtflh%2F7%2FCIgeECYuttF%2BvOB0Xn3fMUMCDvYcGc5FezL6I7%2B%2FrCUamWFOkzELToapriauFOtN46QyQvCY7%2Bu%2FGNF7Z7%2F33P196Ri6WsT5ZvMVsMKe3cai4xJ4Da%2Bzs8KKTwH7haYYqnUeRLGp6pdmz8zV1%2BXxsylmkMzImF19hQK4ppcqF%2Bu3Uu8I%2BmtePX691IwBr%2FcnXr8J7e8uCOYlGMKaOscsGOqUBB3P4%2FZPbF5s2BxpB3PRS4AoUn1XqNbM6Kp1%2F0uy0Tm3sIa8zpJzTDVdrpmBCp4alUkpRXA4LLJWqL0iF%2Br3aGcAtnbXKNL9yo8vv1adCOkYSpQZ%2BP%2FJZY7C3Ruf222tqZA0Mi%2FlIEQOhKdcsKnN8Av1J0ePIAOVhJebGyRIfFi6hch02wPk63a%2BMnnU9%2B9JMOgNUY5AlWKzf7hDGghcnWOHk46Y7&X-Amz-Signature=d01ba47ecb9a1d289f0408d5c24731fa4a3911da8971d3efb4b29cad11baea0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OYAIAS%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJxc4ojOjqzkvswauUgZxlYH2uG%2FUmMU%2FUAlJaZMhxLAiAyX6bNyTZ73YvT%2FDuiBUxHfAvbCzJB9yTwM3RHXKnuGyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM4H8tWVv8Qhuq3spaKtwDOMdnc56kHdLiOm5WbM9xlFgggFAIkSUswiJpCHBaCXRRWvPOWoGPBSmR3BjMFRQJ8WJ9xWQIzLkPBdXPRlJ9a2T7IqOYhl5suucp2GjtClfAR%2BFkETW4Jnwa4PQjEvkizmisnYVAaOwIyYZoRmLSeiztFL9eRCEr8puItP0UBOIcXX%2FN0LoAk4We3sRXBh%2Bp%2BzlZ%2F8qmca0rtHmP6M3VzfEMMWpXowk2s9nYLT1iko%2F7qlFkZO%2BMjH%2Fnf66XcrDMHY5wJv0CncZ5HXYgCUu7KS8GBCtdqEX7Thtx8x%2FYqasskcNNhgUWRSxLAQwpPn838%2FIBo%2FesLrIlyFEeQZ44D9J7DkBZeuwiXfkd136vV6NxhwhTwsE9c8Uo7qUUufEZDvdOtk4J1ofTUepx2wRYwQA5YCCJ9731FOWrZ6hipWuKzeJHngsdrTTPq8XKOdbMHLAKboJq0pD3vVfpH7heziw8e3g02RGUYG0vOe3KGpZxySuGN19TIzt77XY%2F%2B9OxCGScQdq%2B0HY0aGUnXwc71g5OI6%2Bm31C3Ovt2t3DU63pvUgqX5hYCCRhymWF9psE827dajngIV5eEfLAXu4msyifwDsgmoHVxbwaQqZJpaFBcC2M3NhsuCvwU%2Bgkw942xywY6pgH43nqX%2BVbfHJRMsGWxPx%2Bj%2FaBBpN5AhMxiUzMeW3D0LPz8ZgpdNh6SiSnovwVOVGI1e8Fp0dwpg8MzMn8nAzkyCHlbN%2Fm6%2FSBJoGd5eeojNL%2BJ5m0fdUFG8GpFxQLozDjRSZthHupfjSD2DK%2B6FpIGsuMNZdMbFOPQ53Ysz3YEpaq3Rb4CAPvaTRKm1aQK5qJbaLAywliK5Hg0KbppW3vIuJrTsW3D&X-Amz-Signature=1ce408928972aeae2944718f38ac16a1003e02f54c4cb48c2ad7c6d3bc587d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OYAIAS%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJxc4ojOjqzkvswauUgZxlYH2uG%2FUmMU%2FUAlJaZMhxLAiAyX6bNyTZ73YvT%2FDuiBUxHfAvbCzJB9yTwM3RHXKnuGyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM4H8tWVv8Qhuq3spaKtwDOMdnc56kHdLiOm5WbM9xlFgggFAIkSUswiJpCHBaCXRRWvPOWoGPBSmR3BjMFRQJ8WJ9xWQIzLkPBdXPRlJ9a2T7IqOYhl5suucp2GjtClfAR%2BFkETW4Jnwa4PQjEvkizmisnYVAaOwIyYZoRmLSeiztFL9eRCEr8puItP0UBOIcXX%2FN0LoAk4We3sRXBh%2Bp%2BzlZ%2F8qmca0rtHmP6M3VzfEMMWpXowk2s9nYLT1iko%2F7qlFkZO%2BMjH%2Fnf66XcrDMHY5wJv0CncZ5HXYgCUu7KS8GBCtdqEX7Thtx8x%2FYqasskcNNhgUWRSxLAQwpPn838%2FIBo%2FesLrIlyFEeQZ44D9J7DkBZeuwiXfkd136vV6NxhwhTwsE9c8Uo7qUUufEZDvdOtk4J1ofTUepx2wRYwQA5YCCJ9731FOWrZ6hipWuKzeJHngsdrTTPq8XKOdbMHLAKboJq0pD3vVfpH7heziw8e3g02RGUYG0vOe3KGpZxySuGN19TIzt77XY%2F%2B9OxCGScQdq%2B0HY0aGUnXwc71g5OI6%2Bm31C3Ovt2t3DU63pvUgqX5hYCCRhymWF9psE827dajngIV5eEfLAXu4msyifwDsgmoHVxbwaQqZJpaFBcC2M3NhsuCvwU%2Bgkw942xywY6pgH43nqX%2BVbfHJRMsGWxPx%2Bj%2FaBBpN5AhMxiUzMeW3D0LPz8ZgpdNh6SiSnovwVOVGI1e8Fp0dwpg8MzMn8nAzkyCHlbN%2Fm6%2FSBJoGd5eeojNL%2BJ5m0fdUFG8GpFxQLozDjRSZthHupfjSD2DK%2B6FpIGsuMNZdMbFOPQ53Ysz3YEpaq3Rb4CAPvaTRKm1aQK5qJbaLAywliK5Hg0KbppW3vIuJrTsW3D&X-Amz-Signature=eac0923ccb25f78e3023e10f5af0ee6a8c97ffb9af749bd108f5d4c841804ca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYZDTRBA%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8UW8GYDS0V9d%2FYgq0%2Bc24h19ujoVFkwt0KuxXtKwMRgIgGbcGa4ItAtgvqQoxHghQLPV%2F1di70Jzv6HXeO8ZfAU4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNGB607T2cM1DRd7pCrcA%2BvOa4BQLCwI8t0bOxQ3vdouU1b4E6U16kh9AwPXukVN2npbUuFWIaBEBMpesJ1S%2FlNSD%2B8Ub3%2BBrcPZ5BTRvSyq57kxa6yW1zq5UPpAWFlaLiml3M9vkJVw2f8D7j3irAKOwqefI0CK7tqD6cL5YhdxZHx4%2FaZdW%2F9Cz2oxo1%2F5wB0yz0V7KBGNTBMOWToAHq23l2UnGKS0f3ELaSe3dWtkk9PoZDdOmzAw39WzqQqBB%2Bj1ZG%2BCysJsDQw4ADwEvKjX%2FsaxAPgv3xRQs6w20ZtsJJEXg8BOf0711QSxgZkhY4Pnms2Vj%2F7HF4%2FVSyHej%2FwV3APyWhkbFXr8%2BGthfSPAHOd9jOjc%2FYA5HknytyIrcCEffN5PtlV6%2FIroAmFFJxfRmNlTG33Cm6BxiX3TvgzOuH%2FA2SMiMGdCA9y%2BKEoXy2URJ%2FFU54fLBRNO9h1BWBLh5HukizFBzr3cxqoFU3DfyVacpTd7th7gza8vw7j%2FibglNHAQTHV4P07hv%2FrIdwwsaYAWEncLQcOhBGIPVUeISzvhrDSOV71GRY9j%2F1cfQ8lJj2I1SMdHQABCzOiqXbzAITwVVDtEXl2hIKvLhdE2dt3Us8nKjBMPippAlcf%2Bs0f2pyVA%2FtawuNF%2BMPiNscsGOqUBhidstVTEjAheidGkrBOLYjygjc1L5fxwFZLSaoAMa%2BJPnI4lZbhANZfO5%2BW1uSTZwUef7mylB4HWZ9zXxiaFHTPp23f3FW2gBUh6hVj1qeh00MqvBrswyS%2FAKwqs4ZvmruXpa28P7FPPs6h5tl7DmMfkkjGlMVaOAtuObDvhZQrOmq8l0GDCbdnBHHWMpnYDz%2FLvJxPv8iopjYjxvN0NnKjoMpre&X-Amz-Signature=483c7fd894125de9c7f0755db475994e1c05ab3121fe26ebac4a519f337af94c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYZDTRBA%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8UW8GYDS0V9d%2FYgq0%2Bc24h19ujoVFkwt0KuxXtKwMRgIgGbcGa4ItAtgvqQoxHghQLPV%2F1di70Jzv6HXeO8ZfAU4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNGB607T2cM1DRd7pCrcA%2BvOa4BQLCwI8t0bOxQ3vdouU1b4E6U16kh9AwPXukVN2npbUuFWIaBEBMpesJ1S%2FlNSD%2B8Ub3%2BBrcPZ5BTRvSyq57kxa6yW1zq5UPpAWFlaLiml3M9vkJVw2f8D7j3irAKOwqefI0CK7tqD6cL5YhdxZHx4%2FaZdW%2F9Cz2oxo1%2F5wB0yz0V7KBGNTBMOWToAHq23l2UnGKS0f3ELaSe3dWtkk9PoZDdOmzAw39WzqQqBB%2Bj1ZG%2BCysJsDQw4ADwEvKjX%2FsaxAPgv3xRQs6w20ZtsJJEXg8BOf0711QSxgZkhY4Pnms2Vj%2F7HF4%2FVSyHej%2FwV3APyWhkbFXr8%2BGthfSPAHOd9jOjc%2FYA5HknytyIrcCEffN5PtlV6%2FIroAmFFJxfRmNlTG33Cm6BxiX3TvgzOuH%2FA2SMiMGdCA9y%2BKEoXy2URJ%2FFU54fLBRNO9h1BWBLh5HukizFBzr3cxqoFU3DfyVacpTd7th7gza8vw7j%2FibglNHAQTHV4P07hv%2FrIdwwsaYAWEncLQcOhBGIPVUeISzvhrDSOV71GRY9j%2F1cfQ8lJj2I1SMdHQABCzOiqXbzAITwVVDtEXl2hIKvLhdE2dt3Us8nKjBMPippAlcf%2Bs0f2pyVA%2FtawuNF%2BMPiNscsGOqUBhidstVTEjAheidGkrBOLYjygjc1L5fxwFZLSaoAMa%2BJPnI4lZbhANZfO5%2BW1uSTZwUef7mylB4HWZ9zXxiaFHTPp23f3FW2gBUh6hVj1qeh00MqvBrswyS%2FAKwqs4ZvmruXpa28P7FPPs6h5tl7DmMfkkjGlMVaOAtuObDvhZQrOmq8l0GDCbdnBHHWMpnYDz%2FLvJxPv8iopjYjxvN0NnKjoMpre&X-Amz-Signature=c0123af9698d343e0176649dcae3086d2562adfcfcae66f4de4cd30a58622d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYZDTRBA%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8UW8GYDS0V9d%2FYgq0%2Bc24h19ujoVFkwt0KuxXtKwMRgIgGbcGa4ItAtgvqQoxHghQLPV%2F1di70Jzv6HXeO8ZfAU4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNGB607T2cM1DRd7pCrcA%2BvOa4BQLCwI8t0bOxQ3vdouU1b4E6U16kh9AwPXukVN2npbUuFWIaBEBMpesJ1S%2FlNSD%2B8Ub3%2BBrcPZ5BTRvSyq57kxa6yW1zq5UPpAWFlaLiml3M9vkJVw2f8D7j3irAKOwqefI0CK7tqD6cL5YhdxZHx4%2FaZdW%2F9Cz2oxo1%2F5wB0yz0V7KBGNTBMOWToAHq23l2UnGKS0f3ELaSe3dWtkk9PoZDdOmzAw39WzqQqBB%2Bj1ZG%2BCysJsDQw4ADwEvKjX%2FsaxAPgv3xRQs6w20ZtsJJEXg8BOf0711QSxgZkhY4Pnms2Vj%2F7HF4%2FVSyHej%2FwV3APyWhkbFXr8%2BGthfSPAHOd9jOjc%2FYA5HknytyIrcCEffN5PtlV6%2FIroAmFFJxfRmNlTG33Cm6BxiX3TvgzOuH%2FA2SMiMGdCA9y%2BKEoXy2URJ%2FFU54fLBRNO9h1BWBLh5HukizFBzr3cxqoFU3DfyVacpTd7th7gza8vw7j%2FibglNHAQTHV4P07hv%2FrIdwwsaYAWEncLQcOhBGIPVUeISzvhrDSOV71GRY9j%2F1cfQ8lJj2I1SMdHQABCzOiqXbzAITwVVDtEXl2hIKvLhdE2dt3Us8nKjBMPippAlcf%2Bs0f2pyVA%2FtawuNF%2BMPiNscsGOqUBhidstVTEjAheidGkrBOLYjygjc1L5fxwFZLSaoAMa%2BJPnI4lZbhANZfO5%2BW1uSTZwUef7mylB4HWZ9zXxiaFHTPp23f3FW2gBUh6hVj1qeh00MqvBrswyS%2FAKwqs4ZvmruXpa28P7FPPs6h5tl7DmMfkkjGlMVaOAtuObDvhZQrOmq8l0GDCbdnBHHWMpnYDz%2FLvJxPv8iopjYjxvN0NnKjoMpre&X-Amz-Signature=6186c092ce9b53014d67f9b56da0d6e87409f46a2c758ab6f979c65fb91d10c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYZDTRBA%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8UW8GYDS0V9d%2FYgq0%2Bc24h19ujoVFkwt0KuxXtKwMRgIgGbcGa4ItAtgvqQoxHghQLPV%2F1di70Jzv6HXeO8ZfAU4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNGB607T2cM1DRd7pCrcA%2BvOa4BQLCwI8t0bOxQ3vdouU1b4E6U16kh9AwPXukVN2npbUuFWIaBEBMpesJ1S%2FlNSD%2B8Ub3%2BBrcPZ5BTRvSyq57kxa6yW1zq5UPpAWFlaLiml3M9vkJVw2f8D7j3irAKOwqefI0CK7tqD6cL5YhdxZHx4%2FaZdW%2F9Cz2oxo1%2F5wB0yz0V7KBGNTBMOWToAHq23l2UnGKS0f3ELaSe3dWtkk9PoZDdOmzAw39WzqQqBB%2Bj1ZG%2BCysJsDQw4ADwEvKjX%2FsaxAPgv3xRQs6w20ZtsJJEXg8BOf0711QSxgZkhY4Pnms2Vj%2F7HF4%2FVSyHej%2FwV3APyWhkbFXr8%2BGthfSPAHOd9jOjc%2FYA5HknytyIrcCEffN5PtlV6%2FIroAmFFJxfRmNlTG33Cm6BxiX3TvgzOuH%2FA2SMiMGdCA9y%2BKEoXy2URJ%2FFU54fLBRNO9h1BWBLh5HukizFBzr3cxqoFU3DfyVacpTd7th7gza8vw7j%2FibglNHAQTHV4P07hv%2FrIdwwsaYAWEncLQcOhBGIPVUeISzvhrDSOV71GRY9j%2F1cfQ8lJj2I1SMdHQABCzOiqXbzAITwVVDtEXl2hIKvLhdE2dt3Us8nKjBMPippAlcf%2Bs0f2pyVA%2FtawuNF%2BMPiNscsGOqUBhidstVTEjAheidGkrBOLYjygjc1L5fxwFZLSaoAMa%2BJPnI4lZbhANZfO5%2BW1uSTZwUef7mylB4HWZ9zXxiaFHTPp23f3FW2gBUh6hVj1qeh00MqvBrswyS%2FAKwqs4ZvmruXpa28P7FPPs6h5tl7DmMfkkjGlMVaOAtuObDvhZQrOmq8l0GDCbdnBHHWMpnYDz%2FLvJxPv8iopjYjxvN0NnKjoMpre&X-Amz-Signature=357bc8433fae1262c0d76f3943ca409668b9315408552ed2fc68346e1e6c9e92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYZDTRBA%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8UW8GYDS0V9d%2FYgq0%2Bc24h19ujoVFkwt0KuxXtKwMRgIgGbcGa4ItAtgvqQoxHghQLPV%2F1di70Jzv6HXeO8ZfAU4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNGB607T2cM1DRd7pCrcA%2BvOa4BQLCwI8t0bOxQ3vdouU1b4E6U16kh9AwPXukVN2npbUuFWIaBEBMpesJ1S%2FlNSD%2B8Ub3%2BBrcPZ5BTRvSyq57kxa6yW1zq5UPpAWFlaLiml3M9vkJVw2f8D7j3irAKOwqefI0CK7tqD6cL5YhdxZHx4%2FaZdW%2F9Cz2oxo1%2F5wB0yz0V7KBGNTBMOWToAHq23l2UnGKS0f3ELaSe3dWtkk9PoZDdOmzAw39WzqQqBB%2Bj1ZG%2BCysJsDQw4ADwEvKjX%2FsaxAPgv3xRQs6w20ZtsJJEXg8BOf0711QSxgZkhY4Pnms2Vj%2F7HF4%2FVSyHej%2FwV3APyWhkbFXr8%2BGthfSPAHOd9jOjc%2FYA5HknytyIrcCEffN5PtlV6%2FIroAmFFJxfRmNlTG33Cm6BxiX3TvgzOuH%2FA2SMiMGdCA9y%2BKEoXy2URJ%2FFU54fLBRNO9h1BWBLh5HukizFBzr3cxqoFU3DfyVacpTd7th7gza8vw7j%2FibglNHAQTHV4P07hv%2FrIdwwsaYAWEncLQcOhBGIPVUeISzvhrDSOV71GRY9j%2F1cfQ8lJj2I1SMdHQABCzOiqXbzAITwVVDtEXl2hIKvLhdE2dt3Us8nKjBMPippAlcf%2Bs0f2pyVA%2FtawuNF%2BMPiNscsGOqUBhidstVTEjAheidGkrBOLYjygjc1L5fxwFZLSaoAMa%2BJPnI4lZbhANZfO5%2BW1uSTZwUef7mylB4HWZ9zXxiaFHTPp23f3FW2gBUh6hVj1qeh00MqvBrswyS%2FAKwqs4ZvmruXpa28P7FPPs6h5tl7DmMfkkjGlMVaOAtuObDvhZQrOmq8l0GDCbdnBHHWMpnYDz%2FLvJxPv8iopjYjxvN0NnKjoMpre&X-Amz-Signature=5b9ac3295c09c4c423b07a87314f31c348e6ace753c25c49db93424d691d2704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HUMUN7F%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T041432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhra5hyuClBCsfyKyPU2f%2BWn2o4AA91BM7ak4LgWU8vAiAYMd%2Bonf8aGR0j8olWRbLdTvx4TNJVha7T9YgPJjHpHCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMUBuRnbI0hwRmfLlpKtwDxsPJBP2JMrYMfqf586Ln%2B5n7EhQV29LxETtKgGA7B6%2FwXyz1AHsW4Wn49e%2FgWgBgCbOgkDffds49%2BpviDKCo1cLNBWw6u86IL5QTwjrQJUFjEvpQepWBVkmw6XLsG2c51SAwggLxhlKMSJ7Z95vR4ILp706g%2BCnwywfZ4YjZi%2BSglZrsQNP4uHSCkJKHLBgltnTHK8aw68ZfqilOLjwQ5yw8bHda47uKSPXyfAW0FnA5fuPiMuNrnhrGCB%2BGQHEevuQk%2FZLmhaeDF35lpN0FJx9SWRZCoE1MBeZSp34u550glmI2gSj4LHr85hxQ3ex6ZTHhFyIootWCRKIY%2F9W8tv7U1D6tF98E1BDHiKOJVWkPaCs3p7Pr9X7UNydFP%2FizhrNi44nD6sE0MLWxhVniPsSb%2FQLHEe4S5oKw7yM8YRmz5n4lixJzHJTOt1D%2FAPBn7grE%2BW5A5vpA8YrpdpY3I3ShQDTY7zPO4%2BfmtkHeIws7xquGrKPyfun23xEGUgh46GtCzeXgebk19oXZeyTgMZcMW5yBd%2FGzdqt9oD7kG%2ByFyfclr9mozStN2pHDyT4362jnFrvMQ98lj4dXqGrl7H0aSKxpQLGBMEfYetvV8zQSBUv68bMudO%2BA2sww8I6xywY6pgHY2SwOZLCR165Ubf8Gz4wTgJJUi88jm%2F56cvcTZdxHwwwkdpWEyP3MxteNh%2FCJwKhMERheGOUy3KaajkvCz%2B2BV6wGaueu4%2F4iO82RFiAv4JKU0PCQ%2BCVI3Rp7yVOKnMkwDZBsd7jq%2BtZY1is06jfDhJhiVaw7YQ9oDd%2BFXF1pL6kCcpPub%2Bszr1BsfeugeDt9X%2FxeD3xljK7c6M%2Fov8YPV1N80A7X&X-Amz-Signature=18eb6d1a41876b2d40fba0c6021d1f025adda003f127e64e2bac6ba7cdfeeb22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

