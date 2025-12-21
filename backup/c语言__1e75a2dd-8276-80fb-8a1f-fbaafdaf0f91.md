
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466244REEHF%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHqO3C04HPDMCxlrzzkEfT98uyktK58vbGBNQ9ZK30mkAiAUPlI61V1H%2BBKM8wvPqe10Rz1b%2BJYrlL7QEbKEEIOYZyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2wyYvdIboUVv%2FkoUKtwDm%2B9rmLFRj%2B5E2thL%2FQEN9htDKZX0Tl8QqmTPDPpqQNTBufdb3KiOZeaJfq9BXvwNFUccdxnxwrt0s84CurCe6Z0ahJ79%2BMvXLEUQGX4updQu2LKnpNURWuIUqT4SOomSw%2BssiLPfnqDPomznW%2BTNO56E71RqvdBQN%2Bb%2FJV91cjGOvctFar6ZuImW78R9HL0vvKxyWyfh9qE9q81qdKT13a9Y6gvvZ8%2B%2BrmVfGEIggh5sDScQD2rCbUpIeDuKk6Yks4zan%2BhR6t%2B047Tbrqp6mzZ%2BvErZzhN7b7taDQ6QXYsMqvUBMK8rjICCTahNHmhBdkxPYj%2F6SEniv7Ad029Y6mPkOgU8DkFwnL5dGAMCY6vYLVWr4ha5wu4LZghKCd08pCbXQmXG%2Fd8NWxd8fS7D6%2B3PUS5ww5Oj%2Fp5xPS5oWVA%2FiyZxzoBM1MUK3a14ZUwqruTz2%2FGpQRL6v4gLndGVKGgKlwCGjERYnJ90C%2Babm2dgRmr%2BqAk4aNCZu4vOw%2Fl0mZBO3G8biXrvRn8yr3giZbsZ%2BtKk5YCH9zIG2OLm6Bvzgrtm271tCEinwRFTJjLzflCYnpK6W51iYGpp6aWCFK8STKdt%2F17g%2Ba7glXPpc91OGiurcGQZ6NwRf5wwgPOeygY6pgFrqkceb0Yf6ixQH04i3i%2F4a6JMS%2BeBtgwRPJtgPJR9CZAYgH0piMvb%2FvOAmEW1Zg%2BjYR%2B9z2cpdeouvePQ%2ByvARkwraGIohd%2BqOAeS%2FXiYiQCi6oNcTlT1ZXj%2FMd8JWXgY6SDn0qVnFCTZfzfdjas3I%2B0sZxYteygMHtsGs3y6JLSYJAbNw%2BX5yUqJpZ32ZyT5h97fH5dZx9Vu4VIkMY9MsCwckpcZ&X-Amz-Signature=0b446d23c9665b9f58c5dc5861b9102c5395aac57d598949878dbdbeaf2e91b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RPDHAUW%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEC8D7m%2FiAIcPY7HytAjSJSMtPApsjqyDIigIKOMfoPPAiEAk8PdlZUuhbr%2F8aiIESicbtZNvjOdNHy2SzPhzqmWofAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYMy4yaM2ZEF5LRDSrcA5EPWqPFELNAlm%2FiCX5xWKZaie0eaSCzSRzRi9l21i4HvZtylCglO%2F2s%2BClAazc%2Fb4v3qz218BfX9buUuyhJPSJid1nBLDDfR50XXKMYK796FOHrd6mLxor%2F1kr%2B0EpOtpLtC68maFB5oXfG53vp%2F5Ucep%2B4jIVvIlL4IBl50pU4ejNjjT%2FwPGTYDnb9Cq9IbSc3YZ0WcDKCXQzzhFqmNjcnIb%2BqJ51nZDuZd2SwxDVOTMgFFC4iQjI1z42%2FZPZBwajES4yZhLoK%2FUbIX5kjK5js8Vol7%2FhyHs0PQbqZB6hdZsrUL%2BNCB4r5Rpw8SGkY9mQwXLNVBhKtRPrd7KTKkIZjufFrmALlOuDAA02oALK%2BQl0g0us4FpKdjSdP4LVYRxGA2bImTY2jsaJdRn9UpylvhN5a5zo1z43JOd7PhhDFFqhbTxGMiPVs4wczsXqIFbvlCcY6sIVP8y6ZHLRzxO4GVJ8pWDbsna6NSDuxU%2FxFZsh841%2Bpu31eElUNxPK51PiV6E6323ZLumpPf7VhYLX9mf%2FHGHj0Dd6Vn2T8ZuTWpR%2Bbpe%2FXktNUl8cuMTK5AuyLPLTwCNUAS%2FkGoeKm0KaqA7ZncVGz1yjIzgfFoG9ARTi6GEReUXVRl86vMPvynsoGOqUBhg%2FrXgdbW80boKmCPS6PtZNIZsGQS8S1TRsKpsPNP8HqXa73%2FEvB39FRdbXkj1Vu0iKhqKhAeNZb8sRIydeSBXsTCp7vKIMnvoEWumYcDXXvUoVWpAeMSpig%2BBxw4VwU22NOFpU3gUWMaqR0ip3viuYuT8TnhXiL7sIK%2FmqbDi4EP7ANBz%2FCr8BCqRx1vKe763a3muS0eD7uxDB6GXFqFEn5lmaz&X-Amz-Signature=0744e9f5460416c2d4c2a8b979fd71fd9d3b1f2be0dcea2a25e3b5529ef32d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RPDHAUW%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEC8D7m%2FiAIcPY7HytAjSJSMtPApsjqyDIigIKOMfoPPAiEAk8PdlZUuhbr%2F8aiIESicbtZNvjOdNHy2SzPhzqmWofAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYMy4yaM2ZEF5LRDSrcA5EPWqPFELNAlm%2FiCX5xWKZaie0eaSCzSRzRi9l21i4HvZtylCglO%2F2s%2BClAazc%2Fb4v3qz218BfX9buUuyhJPSJid1nBLDDfR50XXKMYK796FOHrd6mLxor%2F1kr%2B0EpOtpLtC68maFB5oXfG53vp%2F5Ucep%2B4jIVvIlL4IBl50pU4ejNjjT%2FwPGTYDnb9Cq9IbSc3YZ0WcDKCXQzzhFqmNjcnIb%2BqJ51nZDuZd2SwxDVOTMgFFC4iQjI1z42%2FZPZBwajES4yZhLoK%2FUbIX5kjK5js8Vol7%2FhyHs0PQbqZB6hdZsrUL%2BNCB4r5Rpw8SGkY9mQwXLNVBhKtRPrd7KTKkIZjufFrmALlOuDAA02oALK%2BQl0g0us4FpKdjSdP4LVYRxGA2bImTY2jsaJdRn9UpylvhN5a5zo1z43JOd7PhhDFFqhbTxGMiPVs4wczsXqIFbvlCcY6sIVP8y6ZHLRzxO4GVJ8pWDbsna6NSDuxU%2FxFZsh841%2Bpu31eElUNxPK51PiV6E6323ZLumpPf7VhYLX9mf%2FHGHj0Dd6Vn2T8ZuTWpR%2Bbpe%2FXktNUl8cuMTK5AuyLPLTwCNUAS%2FkGoeKm0KaqA7ZncVGz1yjIzgfFoG9ARTi6GEReUXVRl86vMPvynsoGOqUBhg%2FrXgdbW80boKmCPS6PtZNIZsGQS8S1TRsKpsPNP8HqXa73%2FEvB39FRdbXkj1Vu0iKhqKhAeNZb8sRIydeSBXsTCp7vKIMnvoEWumYcDXXvUoVWpAeMSpig%2BBxw4VwU22NOFpU3gUWMaqR0ip3viuYuT8TnhXiL7sIK%2FmqbDi4EP7ANBz%2FCr8BCqRx1vKe763a3muS0eD7uxDB6GXFqFEn5lmaz&X-Amz-Signature=ca8418d649454467e11fd7048b3d7e3cdc9086a94e05cbc941d049f06c03d9d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJABQ2K%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEY3zWDdnx3mg17Rqhc0nx3%2Fy%2BYQULvDam2xoiPF6v85AiA1%2FGqVWC5RWktjQUWPbXioL%2Fm%2BEswB9Jx%2B7veomm3EUiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsTA6clwSJ%2BrNTinOKtwD6A%2B2kfNEwrsvrPDdBMuf9IwJ3CJXhYc8fPilYrgExcOkb5N2a%2FAul%2FWN3lnqzUA0oZX38B%2FVfm%2FGf3i%2FLfgza29T%2F1%2BrL0nqu8z7jvJLvfyyHuRs%2FbdXVRCNBUkyBe1GnBNQHjSBWRPymboHkBX6x6xQnW09LfcyXWdLhMaeg0fW8R5mj71qzdzx9SVGYxgB%2FwiRX2E%2FpSMX51LextLMrsyKZwSP792NPbxmlnIJnPN2jgjXddvsa%2F4Z21aaoN5LfmbP6cGTsQFX4muRnwNlv3PszsppxT%2B37GKD39caDtVWrwipoac8wW9P1J1Rip%2F2P1vrHLp9jbP7qBBYfTu3mg8MnEEqFw1fkYWV4%2BJl%2Fx4mjK605E1qQiVfOAPfBqPsOyjUFF6%2FL3jmgbTJqahM2q3EMO2gsqCvkVs%2BupvwihmAaWDmprYOgvTwuDqiNl8DNmzaVJMwS%2F8OB2fd4BNFAmcef5V4kmYRFtRzARge1vs2d1oGIIKL4wbCbzktlH7HCO0ZwJZavEqCtAB9ORVVLFtVaCHN06TsQKZc1bmy39P9Nasmhq9uxdGtlfnejaucOaG7ECIDzgC1BycUq7iZOYkuNJZmF9fFsYggv9weHx3mAgvaXBN6P011d1owlfOeygY6pgHiA8oXtZZFt44%2Fqv3vXJx%2Fo3th46t4%2B5AlugwwcSPSVpejwh%2FyyGzb3%2FmlrmkyVrZWVlnsq6Uex4b4Ly%2B%2B2jYfeL6FgsTi0POz%2B3a5R%2FYktPrL2zAIM3zgpffUC32QY6SFu%2FFOVivvbGzQQ%2BTFYA18vi3VzhzbCtR%2F1E1sym7i5aP1y1OQiYVOUEF8%2FDB1mALswBpkC9yuqmb268%2Bg8wGUq23cyzYJ&X-Amz-Signature=609e5f9c7c9ccb23e8afb796742605dd4dd5af3250299ba8967680c633acfbf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJABQ2K%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEY3zWDdnx3mg17Rqhc0nx3%2Fy%2BYQULvDam2xoiPF6v85AiA1%2FGqVWC5RWktjQUWPbXioL%2Fm%2BEswB9Jx%2B7veomm3EUiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsTA6clwSJ%2BrNTinOKtwD6A%2B2kfNEwrsvrPDdBMuf9IwJ3CJXhYc8fPilYrgExcOkb5N2a%2FAul%2FWN3lnqzUA0oZX38B%2FVfm%2FGf3i%2FLfgza29T%2F1%2BrL0nqu8z7jvJLvfyyHuRs%2FbdXVRCNBUkyBe1GnBNQHjSBWRPymboHkBX6x6xQnW09LfcyXWdLhMaeg0fW8R5mj71qzdzx9SVGYxgB%2FwiRX2E%2FpSMX51LextLMrsyKZwSP792NPbxmlnIJnPN2jgjXddvsa%2F4Z21aaoN5LfmbP6cGTsQFX4muRnwNlv3PszsppxT%2B37GKD39caDtVWrwipoac8wW9P1J1Rip%2F2P1vrHLp9jbP7qBBYfTu3mg8MnEEqFw1fkYWV4%2BJl%2Fx4mjK605E1qQiVfOAPfBqPsOyjUFF6%2FL3jmgbTJqahM2q3EMO2gsqCvkVs%2BupvwihmAaWDmprYOgvTwuDqiNl8DNmzaVJMwS%2F8OB2fd4BNFAmcef5V4kmYRFtRzARge1vs2d1oGIIKL4wbCbzktlH7HCO0ZwJZavEqCtAB9ORVVLFtVaCHN06TsQKZc1bmy39P9Nasmhq9uxdGtlfnejaucOaG7ECIDzgC1BycUq7iZOYkuNJZmF9fFsYggv9weHx3mAgvaXBN6P011d1owlfOeygY6pgHiA8oXtZZFt44%2Fqv3vXJx%2Fo3th46t4%2B5AlugwwcSPSVpejwh%2FyyGzb3%2FmlrmkyVrZWVlnsq6Uex4b4Ly%2B%2B2jYfeL6FgsTi0POz%2B3a5R%2FYktPrL2zAIM3zgpffUC32QY6SFu%2FFOVivvbGzQQ%2BTFYA18vi3VzhzbCtR%2F1E1sym7i5aP1y1OQiYVOUEF8%2FDB1mALswBpkC9yuqmb268%2Bg8wGUq23cyzYJ&X-Amz-Signature=68272237ec5283b85df2a1bddbb3be87face8e1c2e4e9edf485179bcf385780e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJABQ2K%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEY3zWDdnx3mg17Rqhc0nx3%2Fy%2BYQULvDam2xoiPF6v85AiA1%2FGqVWC5RWktjQUWPbXioL%2Fm%2BEswB9Jx%2B7veomm3EUiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsTA6clwSJ%2BrNTinOKtwD6A%2B2kfNEwrsvrPDdBMuf9IwJ3CJXhYc8fPilYrgExcOkb5N2a%2FAul%2FWN3lnqzUA0oZX38B%2FVfm%2FGf3i%2FLfgza29T%2F1%2BrL0nqu8z7jvJLvfyyHuRs%2FbdXVRCNBUkyBe1GnBNQHjSBWRPymboHkBX6x6xQnW09LfcyXWdLhMaeg0fW8R5mj71qzdzx9SVGYxgB%2FwiRX2E%2FpSMX51LextLMrsyKZwSP792NPbxmlnIJnPN2jgjXddvsa%2F4Z21aaoN5LfmbP6cGTsQFX4muRnwNlv3PszsppxT%2B37GKD39caDtVWrwipoac8wW9P1J1Rip%2F2P1vrHLp9jbP7qBBYfTu3mg8MnEEqFw1fkYWV4%2BJl%2Fx4mjK605E1qQiVfOAPfBqPsOyjUFF6%2FL3jmgbTJqahM2q3EMO2gsqCvkVs%2BupvwihmAaWDmprYOgvTwuDqiNl8DNmzaVJMwS%2F8OB2fd4BNFAmcef5V4kmYRFtRzARge1vs2d1oGIIKL4wbCbzktlH7HCO0ZwJZavEqCtAB9ORVVLFtVaCHN06TsQKZc1bmy39P9Nasmhq9uxdGtlfnejaucOaG7ECIDzgC1BycUq7iZOYkuNJZmF9fFsYggv9weHx3mAgvaXBN6P011d1owlfOeygY6pgHiA8oXtZZFt44%2Fqv3vXJx%2Fo3th46t4%2B5AlugwwcSPSVpejwh%2FyyGzb3%2FmlrmkyVrZWVlnsq6Uex4b4Ly%2B%2B2jYfeL6FgsTi0POz%2B3a5R%2FYktPrL2zAIM3zgpffUC32QY6SFu%2FFOVivvbGzQQ%2BTFYA18vi3VzhzbCtR%2F1E1sym7i5aP1y1OQiYVOUEF8%2FDB1mALswBpkC9yuqmb268%2Bg8wGUq23cyzYJ&X-Amz-Signature=dc5a9db9758260143155dfb7e11a635b1800d1066245a251e00bbccd6511c7f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJABQ2K%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEY3zWDdnx3mg17Rqhc0nx3%2Fy%2BYQULvDam2xoiPF6v85AiA1%2FGqVWC5RWktjQUWPbXioL%2Fm%2BEswB9Jx%2B7veomm3EUiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsTA6clwSJ%2BrNTinOKtwD6A%2B2kfNEwrsvrPDdBMuf9IwJ3CJXhYc8fPilYrgExcOkb5N2a%2FAul%2FWN3lnqzUA0oZX38B%2FVfm%2FGf3i%2FLfgza29T%2F1%2BrL0nqu8z7jvJLvfyyHuRs%2FbdXVRCNBUkyBe1GnBNQHjSBWRPymboHkBX6x6xQnW09LfcyXWdLhMaeg0fW8R5mj71qzdzx9SVGYxgB%2FwiRX2E%2FpSMX51LextLMrsyKZwSP792NPbxmlnIJnPN2jgjXddvsa%2F4Z21aaoN5LfmbP6cGTsQFX4muRnwNlv3PszsppxT%2B37GKD39caDtVWrwipoac8wW9P1J1Rip%2F2P1vrHLp9jbP7qBBYfTu3mg8MnEEqFw1fkYWV4%2BJl%2Fx4mjK605E1qQiVfOAPfBqPsOyjUFF6%2FL3jmgbTJqahM2q3EMO2gsqCvkVs%2BupvwihmAaWDmprYOgvTwuDqiNl8DNmzaVJMwS%2F8OB2fd4BNFAmcef5V4kmYRFtRzARge1vs2d1oGIIKL4wbCbzktlH7HCO0ZwJZavEqCtAB9ORVVLFtVaCHN06TsQKZc1bmy39P9Nasmhq9uxdGtlfnejaucOaG7ECIDzgC1BycUq7iZOYkuNJZmF9fFsYggv9weHx3mAgvaXBN6P011d1owlfOeygY6pgHiA8oXtZZFt44%2Fqv3vXJx%2Fo3th46t4%2B5AlugwwcSPSVpejwh%2FyyGzb3%2FmlrmkyVrZWVlnsq6Uex4b4Ly%2B%2B2jYfeL6FgsTi0POz%2B3a5R%2FYktPrL2zAIM3zgpffUC32QY6SFu%2FFOVivvbGzQQ%2BTFYA18vi3VzhzbCtR%2F1E1sym7i5aP1y1OQiYVOUEF8%2FDB1mALswBpkC9yuqmb268%2Bg8wGUq23cyzYJ&X-Amz-Signature=badb4302a3ebd13a5c0a82849627c7964bf6e5e187603c1e4bbc576f17c43909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJABQ2K%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEY3zWDdnx3mg17Rqhc0nx3%2Fy%2BYQULvDam2xoiPF6v85AiA1%2FGqVWC5RWktjQUWPbXioL%2Fm%2BEswB9Jx%2B7veomm3EUiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsTA6clwSJ%2BrNTinOKtwD6A%2B2kfNEwrsvrPDdBMuf9IwJ3CJXhYc8fPilYrgExcOkb5N2a%2FAul%2FWN3lnqzUA0oZX38B%2FVfm%2FGf3i%2FLfgza29T%2F1%2BrL0nqu8z7jvJLvfyyHuRs%2FbdXVRCNBUkyBe1GnBNQHjSBWRPymboHkBX6x6xQnW09LfcyXWdLhMaeg0fW8R5mj71qzdzx9SVGYxgB%2FwiRX2E%2FpSMX51LextLMrsyKZwSP792NPbxmlnIJnPN2jgjXddvsa%2F4Z21aaoN5LfmbP6cGTsQFX4muRnwNlv3PszsppxT%2B37GKD39caDtVWrwipoac8wW9P1J1Rip%2F2P1vrHLp9jbP7qBBYfTu3mg8MnEEqFw1fkYWV4%2BJl%2Fx4mjK605E1qQiVfOAPfBqPsOyjUFF6%2FL3jmgbTJqahM2q3EMO2gsqCvkVs%2BupvwihmAaWDmprYOgvTwuDqiNl8DNmzaVJMwS%2F8OB2fd4BNFAmcef5V4kmYRFtRzARge1vs2d1oGIIKL4wbCbzktlH7HCO0ZwJZavEqCtAB9ORVVLFtVaCHN06TsQKZc1bmy39P9Nasmhq9uxdGtlfnejaucOaG7ECIDzgC1BycUq7iZOYkuNJZmF9fFsYggv9weHx3mAgvaXBN6P011d1owlfOeygY6pgHiA8oXtZZFt44%2Fqv3vXJx%2Fo3th46t4%2B5AlugwwcSPSVpejwh%2FyyGzb3%2FmlrmkyVrZWVlnsq6Uex4b4Ly%2B%2B2jYfeL6FgsTi0POz%2B3a5R%2FYktPrL2zAIM3zgpffUC32QY6SFu%2FFOVivvbGzQQ%2BTFYA18vi3VzhzbCtR%2F1E1sym7i5aP1y1OQiYVOUEF8%2FDB1mALswBpkC9yuqmb268%2Bg8wGUq23cyzYJ&X-Amz-Signature=96516982729dfd8f3684d04871f052f149dbe52d0a71f9431f5d91c340fedf46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJABQ2K%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEY3zWDdnx3mg17Rqhc0nx3%2Fy%2BYQULvDam2xoiPF6v85AiA1%2FGqVWC5RWktjQUWPbXioL%2Fm%2BEswB9Jx%2B7veomm3EUiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsTA6clwSJ%2BrNTinOKtwD6A%2B2kfNEwrsvrPDdBMuf9IwJ3CJXhYc8fPilYrgExcOkb5N2a%2FAul%2FWN3lnqzUA0oZX38B%2FVfm%2FGf3i%2FLfgza29T%2F1%2BrL0nqu8z7jvJLvfyyHuRs%2FbdXVRCNBUkyBe1GnBNQHjSBWRPymboHkBX6x6xQnW09LfcyXWdLhMaeg0fW8R5mj71qzdzx9SVGYxgB%2FwiRX2E%2FpSMX51LextLMrsyKZwSP792NPbxmlnIJnPN2jgjXddvsa%2F4Z21aaoN5LfmbP6cGTsQFX4muRnwNlv3PszsppxT%2B37GKD39caDtVWrwipoac8wW9P1J1Rip%2F2P1vrHLp9jbP7qBBYfTu3mg8MnEEqFw1fkYWV4%2BJl%2Fx4mjK605E1qQiVfOAPfBqPsOyjUFF6%2FL3jmgbTJqahM2q3EMO2gsqCvkVs%2BupvwihmAaWDmprYOgvTwuDqiNl8DNmzaVJMwS%2F8OB2fd4BNFAmcef5V4kmYRFtRzARge1vs2d1oGIIKL4wbCbzktlH7HCO0ZwJZavEqCtAB9ORVVLFtVaCHN06TsQKZc1bmy39P9Nasmhq9uxdGtlfnejaucOaG7ECIDzgC1BycUq7iZOYkuNJZmF9fFsYggv9weHx3mAgvaXBN6P011d1owlfOeygY6pgHiA8oXtZZFt44%2Fqv3vXJx%2Fo3th46t4%2B5AlugwwcSPSVpejwh%2FyyGzb3%2FmlrmkyVrZWVlnsq6Uex4b4Ly%2B%2B2jYfeL6FgsTi0POz%2B3a5R%2FYktPrL2zAIM3zgpffUC32QY6SFu%2FFOVivvbGzQQ%2BTFYA18vi3VzhzbCtR%2F1E1sym7i5aP1y1OQiYVOUEF8%2FDB1mALswBpkC9yuqmb268%2Bg8wGUq23cyzYJ&X-Amz-Signature=c63c7c46f272a05df588e9f6c2700b7ddc951cc9fbfd43c812e04a243f7c1152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJABQ2K%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEY3zWDdnx3mg17Rqhc0nx3%2Fy%2BYQULvDam2xoiPF6v85AiA1%2FGqVWC5RWktjQUWPbXioL%2Fm%2BEswB9Jx%2B7veomm3EUiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsTA6clwSJ%2BrNTinOKtwD6A%2B2kfNEwrsvrPDdBMuf9IwJ3CJXhYc8fPilYrgExcOkb5N2a%2FAul%2FWN3lnqzUA0oZX38B%2FVfm%2FGf3i%2FLfgza29T%2F1%2BrL0nqu8z7jvJLvfyyHuRs%2FbdXVRCNBUkyBe1GnBNQHjSBWRPymboHkBX6x6xQnW09LfcyXWdLhMaeg0fW8R5mj71qzdzx9SVGYxgB%2FwiRX2E%2FpSMX51LextLMrsyKZwSP792NPbxmlnIJnPN2jgjXddvsa%2F4Z21aaoN5LfmbP6cGTsQFX4muRnwNlv3PszsppxT%2B37GKD39caDtVWrwipoac8wW9P1J1Rip%2F2P1vrHLp9jbP7qBBYfTu3mg8MnEEqFw1fkYWV4%2BJl%2Fx4mjK605E1qQiVfOAPfBqPsOyjUFF6%2FL3jmgbTJqahM2q3EMO2gsqCvkVs%2BupvwihmAaWDmprYOgvTwuDqiNl8DNmzaVJMwS%2F8OB2fd4BNFAmcef5V4kmYRFtRzARge1vs2d1oGIIKL4wbCbzktlH7HCO0ZwJZavEqCtAB9ORVVLFtVaCHN06TsQKZc1bmy39P9Nasmhq9uxdGtlfnejaucOaG7ECIDzgC1BycUq7iZOYkuNJZmF9fFsYggv9weHx3mAgvaXBN6P011d1owlfOeygY6pgHiA8oXtZZFt44%2Fqv3vXJx%2Fo3th46t4%2B5AlugwwcSPSVpejwh%2FyyGzb3%2FmlrmkyVrZWVlnsq6Uex4b4Ly%2B%2B2jYfeL6FgsTi0POz%2B3a5R%2FYktPrL2zAIM3zgpffUC32QY6SFu%2FFOVivvbGzQQ%2BTFYA18vi3VzhzbCtR%2F1E1sym7i5aP1y1OQiYVOUEF8%2FDB1mALswBpkC9yuqmb268%2Bg8wGUq23cyzYJ&X-Amz-Signature=d4bff1ca978e0773a76d646dc30be87a750a49e67467464a554348e664568604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DMQMGOL%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF6LSzXmnk26ubW1Rz%2BhNnyp3G2WdEqPN1vxdCenhBArAiAiCJg4xqLUf0A3fFZge9oA1rAb4gHPxKPghjF03xx0giqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYimkNd1mR3TC8lXmKtwDBf4b9R1OppPUa83e3IdIQZ2JaW8cna19ypAf4qO14mTs6sDef44sx8To6GZbSAbdIlLY5naWkajDszmMzq3%2BnhEJdzqlQp8L46MMTJdO5u1cLMaUSqJIacXdnUlVoPte8nIFBpmQQoLi1YmU8LXGfCwJ9zAvFydlNIBkQ5KyO9IqSeT4%2Fccxh4AZ0Zneqr8Jw02Hsqoy89iM%2BYYxyhx4QvMdPtfqXo2mQegKdlDOMkv3AUtMlFprw9CPR7VfEdRSNuzT7TQbN8ivqcsNIRQUaSHmKa%2B7YDalDJBqaqMREbbGnlNwDmuVFR%2FjPpP6m%2BhJmaQvPta%2FOkn8gCF5lv8S9Gzj56jlsKrz4i%2BCvEOYuv%2F8qTj6nUxWpMmbdmzCEYrMfrXgzE6BSWrqh3NnSPaXzEjlrzsGvP6CACsjVNdhy%2Blhic%2FlR4qRbCVziL7AGTN5cvUr8F9IHg4PNoMC0wO8y7R1ND8MrXzpyLt%2FoqOO6wtp2OqPr%2BCcTDh9rNIKa4fZ0xOzD62yK1vfNqRhYt3x2l1AgvHmVoMvbFyW9d%2FnLQiuHyyBDes1mwd5aS0euSUNI7L4P7myi0SOxe8%2Ft8qGNLjCn%2BdTLCH3s3qk4DLh5oqSMtn8ywGicHI7noQwzvKeygY6pgFQ9y0PgugK%2Fk5ckkL%2FqkRbEfstCS2hX7c86cyjlveh0w6GALCTLfOR2BPf8z5x4VOUcyPX2oocJDNQuJyNxahxhc%2Fx2xFHvYBUKCyXEBEUm6aLUpVyQstqjWuqnDKSCm8rU4YBKgtJt9439PK4GlPx7PBXEnTSogcq1jfA6p2qxcSg6ylfqY91fMV%2BtiLqPWF8FXoObW09A0gyMzo8TRMyoyUC4UWQ&X-Amz-Signature=5d1bec661d05428beceeeb264174bfcedb6a6e69f9ee0ec1eef6ec21bd24104f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DMQMGOL%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF6LSzXmnk26ubW1Rz%2BhNnyp3G2WdEqPN1vxdCenhBArAiAiCJg4xqLUf0A3fFZge9oA1rAb4gHPxKPghjF03xx0giqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYimkNd1mR3TC8lXmKtwDBf4b9R1OppPUa83e3IdIQZ2JaW8cna19ypAf4qO14mTs6sDef44sx8To6GZbSAbdIlLY5naWkajDszmMzq3%2BnhEJdzqlQp8L46MMTJdO5u1cLMaUSqJIacXdnUlVoPte8nIFBpmQQoLi1YmU8LXGfCwJ9zAvFydlNIBkQ5KyO9IqSeT4%2Fccxh4AZ0Zneqr8Jw02Hsqoy89iM%2BYYxyhx4QvMdPtfqXo2mQegKdlDOMkv3AUtMlFprw9CPR7VfEdRSNuzT7TQbN8ivqcsNIRQUaSHmKa%2B7YDalDJBqaqMREbbGnlNwDmuVFR%2FjPpP6m%2BhJmaQvPta%2FOkn8gCF5lv8S9Gzj56jlsKrz4i%2BCvEOYuv%2F8qTj6nUxWpMmbdmzCEYrMfrXgzE6BSWrqh3NnSPaXzEjlrzsGvP6CACsjVNdhy%2Blhic%2FlR4qRbCVziL7AGTN5cvUr8F9IHg4PNoMC0wO8y7R1ND8MrXzpyLt%2FoqOO6wtp2OqPr%2BCcTDh9rNIKa4fZ0xOzD62yK1vfNqRhYt3x2l1AgvHmVoMvbFyW9d%2FnLQiuHyyBDes1mwd5aS0euSUNI7L4P7myi0SOxe8%2Ft8qGNLjCn%2BdTLCH3s3qk4DLh5oqSMtn8ywGicHI7noQwzvKeygY6pgFQ9y0PgugK%2Fk5ckkL%2FqkRbEfstCS2hX7c86cyjlveh0w6GALCTLfOR2BPf8z5x4VOUcyPX2oocJDNQuJyNxahxhc%2Fx2xFHvYBUKCyXEBEUm6aLUpVyQstqjWuqnDKSCm8rU4YBKgtJt9439PK4GlPx7PBXEnTSogcq1jfA6p2qxcSg6ylfqY91fMV%2BtiLqPWF8FXoObW09A0gyMzo8TRMyoyUC4UWQ&X-Amz-Signature=ca843090e12cbfed858a52c1f7703b744e57a58fce2401c96b7287b3c53e3528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DMQMGOL%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF6LSzXmnk26ubW1Rz%2BhNnyp3G2WdEqPN1vxdCenhBArAiAiCJg4xqLUf0A3fFZge9oA1rAb4gHPxKPghjF03xx0giqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYimkNd1mR3TC8lXmKtwDBf4b9R1OppPUa83e3IdIQZ2JaW8cna19ypAf4qO14mTs6sDef44sx8To6GZbSAbdIlLY5naWkajDszmMzq3%2BnhEJdzqlQp8L46MMTJdO5u1cLMaUSqJIacXdnUlVoPte8nIFBpmQQoLi1YmU8LXGfCwJ9zAvFydlNIBkQ5KyO9IqSeT4%2Fccxh4AZ0Zneqr8Jw02Hsqoy89iM%2BYYxyhx4QvMdPtfqXo2mQegKdlDOMkv3AUtMlFprw9CPR7VfEdRSNuzT7TQbN8ivqcsNIRQUaSHmKa%2B7YDalDJBqaqMREbbGnlNwDmuVFR%2FjPpP6m%2BhJmaQvPta%2FOkn8gCF5lv8S9Gzj56jlsKrz4i%2BCvEOYuv%2F8qTj6nUxWpMmbdmzCEYrMfrXgzE6BSWrqh3NnSPaXzEjlrzsGvP6CACsjVNdhy%2Blhic%2FlR4qRbCVziL7AGTN5cvUr8F9IHg4PNoMC0wO8y7R1ND8MrXzpyLt%2FoqOO6wtp2OqPr%2BCcTDh9rNIKa4fZ0xOzD62yK1vfNqRhYt3x2l1AgvHmVoMvbFyW9d%2FnLQiuHyyBDes1mwd5aS0euSUNI7L4P7myi0SOxe8%2Ft8qGNLjCn%2BdTLCH3s3qk4DLh5oqSMtn8ywGicHI7noQwzvKeygY6pgFQ9y0PgugK%2Fk5ckkL%2FqkRbEfstCS2hX7c86cyjlveh0w6GALCTLfOR2BPf8z5x4VOUcyPX2oocJDNQuJyNxahxhc%2Fx2xFHvYBUKCyXEBEUm6aLUpVyQstqjWuqnDKSCm8rU4YBKgtJt9439PK4GlPx7PBXEnTSogcq1jfA6p2qxcSg6ylfqY91fMV%2BtiLqPWF8FXoObW09A0gyMzo8TRMyoyUC4UWQ&X-Amz-Signature=6dadbfebccd0665c71192eb49a6b1f82419c867b9ff0f42fd004ee3ab6aa40f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DMQMGOL%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF6LSzXmnk26ubW1Rz%2BhNnyp3G2WdEqPN1vxdCenhBArAiAiCJg4xqLUf0A3fFZge9oA1rAb4gHPxKPghjF03xx0giqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYimkNd1mR3TC8lXmKtwDBf4b9R1OppPUa83e3IdIQZ2JaW8cna19ypAf4qO14mTs6sDef44sx8To6GZbSAbdIlLY5naWkajDszmMzq3%2BnhEJdzqlQp8L46MMTJdO5u1cLMaUSqJIacXdnUlVoPte8nIFBpmQQoLi1YmU8LXGfCwJ9zAvFydlNIBkQ5KyO9IqSeT4%2Fccxh4AZ0Zneqr8Jw02Hsqoy89iM%2BYYxyhx4QvMdPtfqXo2mQegKdlDOMkv3AUtMlFprw9CPR7VfEdRSNuzT7TQbN8ivqcsNIRQUaSHmKa%2B7YDalDJBqaqMREbbGnlNwDmuVFR%2FjPpP6m%2BhJmaQvPta%2FOkn8gCF5lv8S9Gzj56jlsKrz4i%2BCvEOYuv%2F8qTj6nUxWpMmbdmzCEYrMfrXgzE6BSWrqh3NnSPaXzEjlrzsGvP6CACsjVNdhy%2Blhic%2FlR4qRbCVziL7AGTN5cvUr8F9IHg4PNoMC0wO8y7R1ND8MrXzpyLt%2FoqOO6wtp2OqPr%2BCcTDh9rNIKa4fZ0xOzD62yK1vfNqRhYt3x2l1AgvHmVoMvbFyW9d%2FnLQiuHyyBDes1mwd5aS0euSUNI7L4P7myi0SOxe8%2Ft8qGNLjCn%2BdTLCH3s3qk4DLh5oqSMtn8ywGicHI7noQwzvKeygY6pgFQ9y0PgugK%2Fk5ckkL%2FqkRbEfstCS2hX7c86cyjlveh0w6GALCTLfOR2BPf8z5x4VOUcyPX2oocJDNQuJyNxahxhc%2Fx2xFHvYBUKCyXEBEUm6aLUpVyQstqjWuqnDKSCm8rU4YBKgtJt9439PK4GlPx7PBXEnTSogcq1jfA6p2qxcSg6ylfqY91fMV%2BtiLqPWF8FXoObW09A0gyMzo8TRMyoyUC4UWQ&X-Amz-Signature=57a75bd0ac513ece05ee7cd510d3f11a94310b830d2339729079d8b47adee83e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DMQMGOL%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF6LSzXmnk26ubW1Rz%2BhNnyp3G2WdEqPN1vxdCenhBArAiAiCJg4xqLUf0A3fFZge9oA1rAb4gHPxKPghjF03xx0giqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYimkNd1mR3TC8lXmKtwDBf4b9R1OppPUa83e3IdIQZ2JaW8cna19ypAf4qO14mTs6sDef44sx8To6GZbSAbdIlLY5naWkajDszmMzq3%2BnhEJdzqlQp8L46MMTJdO5u1cLMaUSqJIacXdnUlVoPte8nIFBpmQQoLi1YmU8LXGfCwJ9zAvFydlNIBkQ5KyO9IqSeT4%2Fccxh4AZ0Zneqr8Jw02Hsqoy89iM%2BYYxyhx4QvMdPtfqXo2mQegKdlDOMkv3AUtMlFprw9CPR7VfEdRSNuzT7TQbN8ivqcsNIRQUaSHmKa%2B7YDalDJBqaqMREbbGnlNwDmuVFR%2FjPpP6m%2BhJmaQvPta%2FOkn8gCF5lv8S9Gzj56jlsKrz4i%2BCvEOYuv%2F8qTj6nUxWpMmbdmzCEYrMfrXgzE6BSWrqh3NnSPaXzEjlrzsGvP6CACsjVNdhy%2Blhic%2FlR4qRbCVziL7AGTN5cvUr8F9IHg4PNoMC0wO8y7R1ND8MrXzpyLt%2FoqOO6wtp2OqPr%2BCcTDh9rNIKa4fZ0xOzD62yK1vfNqRhYt3x2l1AgvHmVoMvbFyW9d%2FnLQiuHyyBDes1mwd5aS0euSUNI7L4P7myi0SOxe8%2Ft8qGNLjCn%2BdTLCH3s3qk4DLh5oqSMtn8ywGicHI7noQwzvKeygY6pgFQ9y0PgugK%2Fk5ckkL%2FqkRbEfstCS2hX7c86cyjlveh0w6GALCTLfOR2BPf8z5x4VOUcyPX2oocJDNQuJyNxahxhc%2Fx2xFHvYBUKCyXEBEUm6aLUpVyQstqjWuqnDKSCm8rU4YBKgtJt9439PK4GlPx7PBXEnTSogcq1jfA6p2qxcSg6ylfqY91fMV%2BtiLqPWF8FXoObW09A0gyMzo8TRMyoyUC4UWQ&X-Amz-Signature=98659ede2aad91ab1d6624071158decddeb3b3b3f5754e34a8cdf348499045d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PS72KXL%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIH8Zmt8cq2SjmMrO0VlN61pOjyMsQDapEIgVoI3YQNKxAiEA%2BYvcEouDZJqQ8GR9V2WsNyR6oi5AJj4rBFosDQoxYkwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx4u7bPCNuGDKyYvircA%2FvszJ7VKxQN33wbRz6ompcuSmFu7HjIeIW%2FZKY9vggre2s2m%2FJMF1MYQkCv%2FW8RTP4cevnDbCWtVQxdfPWLrSPCT02Dyxbl5hxrS0CRacbPEOAbnLiol8JuAm6Y%2BAaDPQfLLWZGhbD6UEMlIKpoK4f19s8GTDbICXW9JF5ZfcuhTBYjI%2FWjiy%2BVsJmGR5S%2FuvvNP2u0J7FSiS4xd4fiNTaigkry%2FfZ0QquEJykoyaYlJ51iNpzmIFhd5mgLM6tG2Xr39WofXcntAOnYjaBzVnkJ3mU8GVXxxA3vrVTcNpCli0GI6yZ10GQ6Rv3S1a5P8mN%2BADWZ6vp0xhpP7tuiEFozhEFxgIzGRkM7R5IZq%2Fiw8IHTFehLdY5XxsvZaZTGkMpVAY7X0UUD2ckqEOTZCKVkAMz8DU3bcl61bDoAC7vf58dDyoJIVXq47sPJAhDQu78BYg%2FJgvwK2UaQMmxyK607B8rt3TUxkmFc%2FVxGAlAU3JKHR1xRAB1AYnCNjw0JQ6FurKnqSnqDwgiqBp8ENozPACtji0Mj5RETDloZYUZTwa3etU8GEjFbmLQaDL86ujyPorIqXiOE4I95D5xXWGbIyB7T2VwWmDia5WKmUGtQbZNgojOY5Nctu056MNHynsoGOqUBdL3BbUgGAU9noPDqdJ2kGzyZX1FF2nckVcaWrnMzM5itUsiVQtHiArg4b8HEFuNTl96NKNdGEH%2BIWmdSWwYeSymo6%2FR6eNRjj5vGYXJmtgniDigTtH%2B6%2BUQDZCAfTVYiKeJGj9HBzAAaAGhbT2%2Bykujup3pTaJAUOR4XVqvjw0aRW50glEYBMecgdEK%2FtgRYy7aOc7r2byhMmdQuGvj7EKGD26n3&X-Amz-Signature=0f1474aeefbefab372b9877102466a1c037c6e3a49d35c0b859c61815334aa98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PS72KXL%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIH8Zmt8cq2SjmMrO0VlN61pOjyMsQDapEIgVoI3YQNKxAiEA%2BYvcEouDZJqQ8GR9V2WsNyR6oi5AJj4rBFosDQoxYkwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx4u7bPCNuGDKyYvircA%2FvszJ7VKxQN33wbRz6ompcuSmFu7HjIeIW%2FZKY9vggre2s2m%2FJMF1MYQkCv%2FW8RTP4cevnDbCWtVQxdfPWLrSPCT02Dyxbl5hxrS0CRacbPEOAbnLiol8JuAm6Y%2BAaDPQfLLWZGhbD6UEMlIKpoK4f19s8GTDbICXW9JF5ZfcuhTBYjI%2FWjiy%2BVsJmGR5S%2FuvvNP2u0J7FSiS4xd4fiNTaigkry%2FfZ0QquEJykoyaYlJ51iNpzmIFhd5mgLM6tG2Xr39WofXcntAOnYjaBzVnkJ3mU8GVXxxA3vrVTcNpCli0GI6yZ10GQ6Rv3S1a5P8mN%2BADWZ6vp0xhpP7tuiEFozhEFxgIzGRkM7R5IZq%2Fiw8IHTFehLdY5XxsvZaZTGkMpVAY7X0UUD2ckqEOTZCKVkAMz8DU3bcl61bDoAC7vf58dDyoJIVXq47sPJAhDQu78BYg%2FJgvwK2UaQMmxyK607B8rt3TUxkmFc%2FVxGAlAU3JKHR1xRAB1AYnCNjw0JQ6FurKnqSnqDwgiqBp8ENozPACtji0Mj5RETDloZYUZTwa3etU8GEjFbmLQaDL86ujyPorIqXiOE4I95D5xXWGbIyB7T2VwWmDia5WKmUGtQbZNgojOY5Nctu056MNHynsoGOqUBdL3BbUgGAU9noPDqdJ2kGzyZX1FF2nckVcaWrnMzM5itUsiVQtHiArg4b8HEFuNTl96NKNdGEH%2BIWmdSWwYeSymo6%2FR6eNRjj5vGYXJmtgniDigTtH%2B6%2BUQDZCAfTVYiKeJGj9HBzAAaAGhbT2%2Bykujup3pTaJAUOR4XVqvjw0aRW50glEYBMecgdEK%2FtgRYy7aOc7r2byhMmdQuGvj7EKGD26n3&X-Amz-Signature=43c104bbec64c6e8610114b5f0c4443524153dc2001292d6eb315d4a1fb6b8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PS72KXL%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIH8Zmt8cq2SjmMrO0VlN61pOjyMsQDapEIgVoI3YQNKxAiEA%2BYvcEouDZJqQ8GR9V2WsNyR6oi5AJj4rBFosDQoxYkwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx4u7bPCNuGDKyYvircA%2FvszJ7VKxQN33wbRz6ompcuSmFu7HjIeIW%2FZKY9vggre2s2m%2FJMF1MYQkCv%2FW8RTP4cevnDbCWtVQxdfPWLrSPCT02Dyxbl5hxrS0CRacbPEOAbnLiol8JuAm6Y%2BAaDPQfLLWZGhbD6UEMlIKpoK4f19s8GTDbICXW9JF5ZfcuhTBYjI%2FWjiy%2BVsJmGR5S%2FuvvNP2u0J7FSiS4xd4fiNTaigkry%2FfZ0QquEJykoyaYlJ51iNpzmIFhd5mgLM6tG2Xr39WofXcntAOnYjaBzVnkJ3mU8GVXxxA3vrVTcNpCli0GI6yZ10GQ6Rv3S1a5P8mN%2BADWZ6vp0xhpP7tuiEFozhEFxgIzGRkM7R5IZq%2Fiw8IHTFehLdY5XxsvZaZTGkMpVAY7X0UUD2ckqEOTZCKVkAMz8DU3bcl61bDoAC7vf58dDyoJIVXq47sPJAhDQu78BYg%2FJgvwK2UaQMmxyK607B8rt3TUxkmFc%2FVxGAlAU3JKHR1xRAB1AYnCNjw0JQ6FurKnqSnqDwgiqBp8ENozPACtji0Mj5RETDloZYUZTwa3etU8GEjFbmLQaDL86ujyPorIqXiOE4I95D5xXWGbIyB7T2VwWmDia5WKmUGtQbZNgojOY5Nctu056MNHynsoGOqUBdL3BbUgGAU9noPDqdJ2kGzyZX1FF2nckVcaWrnMzM5itUsiVQtHiArg4b8HEFuNTl96NKNdGEH%2BIWmdSWwYeSymo6%2FR6eNRjj5vGYXJmtgniDigTtH%2B6%2BUQDZCAfTVYiKeJGj9HBzAAaAGhbT2%2Bykujup3pTaJAUOR4XVqvjw0aRW50glEYBMecgdEK%2FtgRYy7aOc7r2byhMmdQuGvj7EKGD26n3&X-Amz-Signature=6e305dbf8f1e2072a57dc0a15692c6275e874837b811ebb7649cac0183eac7a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTSHPPH%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIQDzQR5O0AYhnAKF84uy4MRtlLJam%2FLkNcRGSoYBphGI8AIfZtn5HTV%2FCF%2BOeb0DFapxEBu6FsvwusUfrsLbQy2lUiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9wWTGdM7fxcbUWY7KtwDmIatWdUB0VVF5hdNzP8l%2BUg1d%2BN2YRAoIF%2FR%2BFpBtrTvywUr1D1yu9g7sdn9d2Y5zGsDQIihfFr49hBmjoWOOBH76vUd0Bk9ra1%2FuBuuC4%2FjDEUfbQclxEWkqB%2FT3V%2FVqfPxs1zpGhVvah7iwTeP4cXp5mYEJMIfTcY7bfO8NPmUXisevWd0Xz3RG5PFzOZewNSPUedqvcuBomo21s64BK3%2Bx5xRiAho%2FDI598TFR7tJgHEJqzW%2BP1auAo42XkSYBJTM%2BovIjPsPGEQGNOCBaeOF64wHpUMr9QxYg7Z6vq5J4g%2F2ai62zzT9tUxw7jZydfUG3VdT5gf6Zrv4rFIpNne4G5Dbxia1UM8%2FCFsXfUhYf0GCFBq5EWH6pXMkIxc2QJ%2F6HkeK%2FAuW295TPXxSumKk4MbI7FzuMr2RiuSiooVlJcKsvo2E73uPz0GoqHOheTSs%2BlHQmDU%2Bz1cwXWtwwY1EoPkXScoJV5MD9LA3V4rdpf%2B71JFKCSVfOq82LIHD6wfKGQEi3UVTTxzhwOm1iXgrMlocZXS8ISehm%2FUN8vd3Kge9%2FZAgAu%2BLuMXSfWbq0xLWzBeEjos2lWYh%2FuO67L9kTd91feuXD3OkNCBkBtrCAmYMiVV%2FRRKDwgww8PKeygY6pgFcj4YrS8YaTmR9Jemng8MP2OmxKgqjPL3%2F0C5i1Nv9lYiXaRMfWRjFZnFAP8FwNWgKP2Z2ffBw0JOH2OfkOGwacwRG1EBFtTqxJ86ZeVF5%2BLEtmkZn67Ec5zC6VZUm0DH0xlFmacyxQiY062NGa2bmJkQoMCjVn%2Ftj6qCPQTsBD8KmAba4JGbFC%2B5lKQf2fyK8SAIbaMxYoZIPEyUIII2Ho8HWdPLY&X-Amz-Signature=e716de37a25c9a39f39346a68944a820d80edf038dd5c1414ae8dfa4821df253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTSHPPH%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIQDzQR5O0AYhnAKF84uy4MRtlLJam%2FLkNcRGSoYBphGI8AIfZtn5HTV%2FCF%2BOeb0DFapxEBu6FsvwusUfrsLbQy2lUiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9wWTGdM7fxcbUWY7KtwDmIatWdUB0VVF5hdNzP8l%2BUg1d%2BN2YRAoIF%2FR%2BFpBtrTvywUr1D1yu9g7sdn9d2Y5zGsDQIihfFr49hBmjoWOOBH76vUd0Bk9ra1%2FuBuuC4%2FjDEUfbQclxEWkqB%2FT3V%2FVqfPxs1zpGhVvah7iwTeP4cXp5mYEJMIfTcY7bfO8NPmUXisevWd0Xz3RG5PFzOZewNSPUedqvcuBomo21s64BK3%2Bx5xRiAho%2FDI598TFR7tJgHEJqzW%2BP1auAo42XkSYBJTM%2BovIjPsPGEQGNOCBaeOF64wHpUMr9QxYg7Z6vq5J4g%2F2ai62zzT9tUxw7jZydfUG3VdT5gf6Zrv4rFIpNne4G5Dbxia1UM8%2FCFsXfUhYf0GCFBq5EWH6pXMkIxc2QJ%2F6HkeK%2FAuW295TPXxSumKk4MbI7FzuMr2RiuSiooVlJcKsvo2E73uPz0GoqHOheTSs%2BlHQmDU%2Bz1cwXWtwwY1EoPkXScoJV5MD9LA3V4rdpf%2B71JFKCSVfOq82LIHD6wfKGQEi3UVTTxzhwOm1iXgrMlocZXS8ISehm%2FUN8vd3Kge9%2FZAgAu%2BLuMXSfWbq0xLWzBeEjos2lWYh%2FuO67L9kTd91feuXD3OkNCBkBtrCAmYMiVV%2FRRKDwgww8PKeygY6pgFcj4YrS8YaTmR9Jemng8MP2OmxKgqjPL3%2F0C5i1Nv9lYiXaRMfWRjFZnFAP8FwNWgKP2Z2ffBw0JOH2OfkOGwacwRG1EBFtTqxJ86ZeVF5%2BLEtmkZn67Ec5zC6VZUm0DH0xlFmacyxQiY062NGa2bmJkQoMCjVn%2Ftj6qCPQTsBD8KmAba4JGbFC%2B5lKQf2fyK8SAIbaMxYoZIPEyUIII2Ho8HWdPLY&X-Amz-Signature=b2690b8b786abbe2dc41a017f334ff4d9c48df1f7c3d2228d1f940eee48e51a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JXTUJCA%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC2Ni9VuvE9JcPi%2Brrx7QBEMlKOzctsxpeNi528cVUv2wIgezO5FwvNZsYP19DqlEhN59Id8Vu0wvG9Wczi9wWWK4AqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI9aXi6w5PbytDy5CrcA1R%2BFY1IVWfJjpxHkPdp2KEsT6jIxrUQsNGEoj4UL1edoeEX9iUWdNxuePI0DEtjN5%2FOR98bBUF76fOHo%2Fd4didkfZzljpnXiLdbl8ytp5NPb921NLs33kvNCPFEgZR8MNHwnnMrLR9nEEbv2fIHcNuKgk1hvY7HKplK3ped2eeaH8v2t%2BKw0mckdceqJxjUUcrkcCcsmrkp%2FVdRmejnB9JdbDmqhRaG%2BfuNQGxCBdw1Omx490EU4MTUjiUwTJi1yTWE0ps4kvTpXuLmUP1hfz4ZqHrJZ9QIXE4rJZ98Ii55O9aMeZXoL%2Fjfkh1xuIUsAFPEDCRHBF5Qbq8NR0TVgEp9I4hw855OLGDGCTCKRZfvh0hqP0OCmY%2F9rFuyxDHwifpu%2B%2BWBT9dZ4BR4otLvzdowY%2BhfQHI2lWDBjRxvS%2F9S%2F4ox%2F2ki1SVyCyzzNdrJJ57SvWxWvPcp6Mg9YikHtQhgfvAJdEYSms3GWb7BBITEsPfBFxOJLFJneMQOAo%2F08nWOfOuXcg6gI51KzngKlFLbADFT%2Byub9wUItMSjPIzMk3Xg1LH%2FDwJAeX%2FGixA%2FKHqY%2B28RdaqJh2pnEJt7LfpnJBJVYxn0kwmSWwtgwstoa6AkA1U4fjpWc6VbMNnynsoGOqUBhe%2BngTcVdDlrSoL8rrDdo42simuNbp8pCTgkmBBF6ycG35eISBfzhUcAyE3pZ6tLIqctoQywDrKTsBVGcMrBTbYyogcaufihBGHlhJJ16dhAZ2G63UiIY%2FcLm1j4DYjtZ9e4J9jqtMOqFHATvM0CFzAq4MW2%2F85ieiSmbImosJE62P%2BbO%2FoT%2B2Yh3y62dH%2FW%2BWVhm77ZpIr1JtUUxSFDEe285ktN&X-Amz-Signature=be0545790b5521bd8581237c8a294d27851cabf21ae7ab1fc1c3b0907ce74b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JXTUJCA%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC2Ni9VuvE9JcPi%2Brrx7QBEMlKOzctsxpeNi528cVUv2wIgezO5FwvNZsYP19DqlEhN59Id8Vu0wvG9Wczi9wWWK4AqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI9aXi6w5PbytDy5CrcA1R%2BFY1IVWfJjpxHkPdp2KEsT6jIxrUQsNGEoj4UL1edoeEX9iUWdNxuePI0DEtjN5%2FOR98bBUF76fOHo%2Fd4didkfZzljpnXiLdbl8ytp5NPb921NLs33kvNCPFEgZR8MNHwnnMrLR9nEEbv2fIHcNuKgk1hvY7HKplK3ped2eeaH8v2t%2BKw0mckdceqJxjUUcrkcCcsmrkp%2FVdRmejnB9JdbDmqhRaG%2BfuNQGxCBdw1Omx490EU4MTUjiUwTJi1yTWE0ps4kvTpXuLmUP1hfz4ZqHrJZ9QIXE4rJZ98Ii55O9aMeZXoL%2Fjfkh1xuIUsAFPEDCRHBF5Qbq8NR0TVgEp9I4hw855OLGDGCTCKRZfvh0hqP0OCmY%2F9rFuyxDHwifpu%2B%2BWBT9dZ4BR4otLvzdowY%2BhfQHI2lWDBjRxvS%2F9S%2F4ox%2F2ki1SVyCyzzNdrJJ57SvWxWvPcp6Mg9YikHtQhgfvAJdEYSms3GWb7BBITEsPfBFxOJLFJneMQOAo%2F08nWOfOuXcg6gI51KzngKlFLbADFT%2Byub9wUItMSjPIzMk3Xg1LH%2FDwJAeX%2FGixA%2FKHqY%2B28RdaqJh2pnEJt7LfpnJBJVYxn0kwmSWwtgwstoa6AkA1U4fjpWc6VbMNnynsoGOqUBhe%2BngTcVdDlrSoL8rrDdo42simuNbp8pCTgkmBBF6ycG35eISBfzhUcAyE3pZ6tLIqctoQywDrKTsBVGcMrBTbYyogcaufihBGHlhJJ16dhAZ2G63UiIY%2FcLm1j4DYjtZ9e4J9jqtMOqFHATvM0CFzAq4MW2%2F85ieiSmbImosJE62P%2BbO%2FoT%2B2Yh3y62dH%2FW%2BWVhm77ZpIr1JtUUxSFDEe285ktN&X-Amz-Signature=262fd7ee914d6d496e5c1eb6bd4d900adf71980efe9569be443ace45b7d2ff16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JXTUJCA%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC2Ni9VuvE9JcPi%2Brrx7QBEMlKOzctsxpeNi528cVUv2wIgezO5FwvNZsYP19DqlEhN59Id8Vu0wvG9Wczi9wWWK4AqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI9aXi6w5PbytDy5CrcA1R%2BFY1IVWfJjpxHkPdp2KEsT6jIxrUQsNGEoj4UL1edoeEX9iUWdNxuePI0DEtjN5%2FOR98bBUF76fOHo%2Fd4didkfZzljpnXiLdbl8ytp5NPb921NLs33kvNCPFEgZR8MNHwnnMrLR9nEEbv2fIHcNuKgk1hvY7HKplK3ped2eeaH8v2t%2BKw0mckdceqJxjUUcrkcCcsmrkp%2FVdRmejnB9JdbDmqhRaG%2BfuNQGxCBdw1Omx490EU4MTUjiUwTJi1yTWE0ps4kvTpXuLmUP1hfz4ZqHrJZ9QIXE4rJZ98Ii55O9aMeZXoL%2Fjfkh1xuIUsAFPEDCRHBF5Qbq8NR0TVgEp9I4hw855OLGDGCTCKRZfvh0hqP0OCmY%2F9rFuyxDHwifpu%2B%2BWBT9dZ4BR4otLvzdowY%2BhfQHI2lWDBjRxvS%2F9S%2F4ox%2F2ki1SVyCyzzNdrJJ57SvWxWvPcp6Mg9YikHtQhgfvAJdEYSms3GWb7BBITEsPfBFxOJLFJneMQOAo%2F08nWOfOuXcg6gI51KzngKlFLbADFT%2Byub9wUItMSjPIzMk3Xg1LH%2FDwJAeX%2FGixA%2FKHqY%2B28RdaqJh2pnEJt7LfpnJBJVYxn0kwmSWwtgwstoa6AkA1U4fjpWc6VbMNnynsoGOqUBhe%2BngTcVdDlrSoL8rrDdo42simuNbp8pCTgkmBBF6ycG35eISBfzhUcAyE3pZ6tLIqctoQywDrKTsBVGcMrBTbYyogcaufihBGHlhJJ16dhAZ2G63UiIY%2FcLm1j4DYjtZ9e4J9jqtMOqFHATvM0CFzAq4MW2%2F85ieiSmbImosJE62P%2BbO%2FoT%2B2Yh3y62dH%2FW%2BWVhm77ZpIr1JtUUxSFDEe285ktN&X-Amz-Signature=e4aaaa233d27aae27a539cc97b1c0569cb35e85c71a1f3297ad3268a7d259dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JXTUJCA%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC2Ni9VuvE9JcPi%2Brrx7QBEMlKOzctsxpeNi528cVUv2wIgezO5FwvNZsYP19DqlEhN59Id8Vu0wvG9Wczi9wWWK4AqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI9aXi6w5PbytDy5CrcA1R%2BFY1IVWfJjpxHkPdp2KEsT6jIxrUQsNGEoj4UL1edoeEX9iUWdNxuePI0DEtjN5%2FOR98bBUF76fOHo%2Fd4didkfZzljpnXiLdbl8ytp5NPb921NLs33kvNCPFEgZR8MNHwnnMrLR9nEEbv2fIHcNuKgk1hvY7HKplK3ped2eeaH8v2t%2BKw0mckdceqJxjUUcrkcCcsmrkp%2FVdRmejnB9JdbDmqhRaG%2BfuNQGxCBdw1Omx490EU4MTUjiUwTJi1yTWE0ps4kvTpXuLmUP1hfz4ZqHrJZ9QIXE4rJZ98Ii55O9aMeZXoL%2Fjfkh1xuIUsAFPEDCRHBF5Qbq8NR0TVgEp9I4hw855OLGDGCTCKRZfvh0hqP0OCmY%2F9rFuyxDHwifpu%2B%2BWBT9dZ4BR4otLvzdowY%2BhfQHI2lWDBjRxvS%2F9S%2F4ox%2F2ki1SVyCyzzNdrJJ57SvWxWvPcp6Mg9YikHtQhgfvAJdEYSms3GWb7BBITEsPfBFxOJLFJneMQOAo%2F08nWOfOuXcg6gI51KzngKlFLbADFT%2Byub9wUItMSjPIzMk3Xg1LH%2FDwJAeX%2FGixA%2FKHqY%2B28RdaqJh2pnEJt7LfpnJBJVYxn0kwmSWwtgwstoa6AkA1U4fjpWc6VbMNnynsoGOqUBhe%2BngTcVdDlrSoL8rrDdo42simuNbp8pCTgkmBBF6ycG35eISBfzhUcAyE3pZ6tLIqctoQywDrKTsBVGcMrBTbYyogcaufihBGHlhJJ16dhAZ2G63UiIY%2FcLm1j4DYjtZ9e4J9jqtMOqFHATvM0CFzAq4MW2%2F85ieiSmbImosJE62P%2BbO%2FoT%2B2Yh3y62dH%2FW%2BWVhm77ZpIr1JtUUxSFDEe285ktN&X-Amz-Signature=b378c21100819400009b51a1bc1b73284b4bdc47d88ad8cbf6da033b507e4054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JXTUJCA%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC2Ni9VuvE9JcPi%2Brrx7QBEMlKOzctsxpeNi528cVUv2wIgezO5FwvNZsYP19DqlEhN59Id8Vu0wvG9Wczi9wWWK4AqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI9aXi6w5PbytDy5CrcA1R%2BFY1IVWfJjpxHkPdp2KEsT6jIxrUQsNGEoj4UL1edoeEX9iUWdNxuePI0DEtjN5%2FOR98bBUF76fOHo%2Fd4didkfZzljpnXiLdbl8ytp5NPb921NLs33kvNCPFEgZR8MNHwnnMrLR9nEEbv2fIHcNuKgk1hvY7HKplK3ped2eeaH8v2t%2BKw0mckdceqJxjUUcrkcCcsmrkp%2FVdRmejnB9JdbDmqhRaG%2BfuNQGxCBdw1Omx490EU4MTUjiUwTJi1yTWE0ps4kvTpXuLmUP1hfz4ZqHrJZ9QIXE4rJZ98Ii55O9aMeZXoL%2Fjfkh1xuIUsAFPEDCRHBF5Qbq8NR0TVgEp9I4hw855OLGDGCTCKRZfvh0hqP0OCmY%2F9rFuyxDHwifpu%2B%2BWBT9dZ4BR4otLvzdowY%2BhfQHI2lWDBjRxvS%2F9S%2F4ox%2F2ki1SVyCyzzNdrJJ57SvWxWvPcp6Mg9YikHtQhgfvAJdEYSms3GWb7BBITEsPfBFxOJLFJneMQOAo%2F08nWOfOuXcg6gI51KzngKlFLbADFT%2Byub9wUItMSjPIzMk3Xg1LH%2FDwJAeX%2FGixA%2FKHqY%2B28RdaqJh2pnEJt7LfpnJBJVYxn0kwmSWwtgwstoa6AkA1U4fjpWc6VbMNnynsoGOqUBhe%2BngTcVdDlrSoL8rrDdo42simuNbp8pCTgkmBBF6ycG35eISBfzhUcAyE3pZ6tLIqctoQywDrKTsBVGcMrBTbYyogcaufihBGHlhJJ16dhAZ2G63UiIY%2FcLm1j4DYjtZ9e4J9jqtMOqFHATvM0CFzAq4MW2%2F85ieiSmbImosJE62P%2BbO%2FoT%2B2Yh3y62dH%2FW%2BWVhm77ZpIr1JtUUxSFDEe285ktN&X-Amz-Signature=b11c7a1b8e55538a7280bc328bfab9a90d0adf2a51d18b053a69e41ade7f6681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THAKMW53%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T112622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFDiV%2FbNmr0gmuyWDxVNRclwb%2FweETfbbsvAUSVR3WTQAiBMNL%2Bm%2BlkyjxyD7g%2BsIm9qAxWVPwMjJ9mlGshcRhBsOiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGIYogz9M74qgiFwCKtwDVlRu9SvwpLxIifxVWe09aa9WHM2TiYEr4qCPuUUIrC27x1DtFfZfOs%2BBvtxSK1RGG5Dn3xqSX32FRA2g2XOtRxqzFDFeaQuO9oCgtkcoVKeGggNSZwNP%2BlvDg4zsa5GQyQerUH2elbrnjoawllYmwZnB6NyLJsAO2JQ5C%2FAjDsSIMF%2FaKSZDYFitkts8aB6nJEzg6TnBlw7dLXY4QneRONlNovBLKb6oVnDwkJYHwXSckxjnt1U1q0viNj3C67uSg%2BWaxH5FUApQusKbp02SSKWrLqlFteF76eyM67YNhivxq%2BAXiMEhV2rc8y9j5z3gU1HcXErL9e9BQ6hce%2F0h2EW5k7zKp8wYi7HVNm0vQO5W1TzfbpHKqT1HBTaI94PTImGjDWDMLNMgSGI79t8IiJUFZjqP6TDhDRrj8%2FjmXZWuqK0a%2FDuQPncy6xP6BpiSOfqPR1L%2BKPqXnISJpkzNfSNKZlRUARW8iCIqAQvhcQWDgoHZnN3JZYFE5FBIzlQIjS0BL2WxUlLtzErJ1U2JiUFj1OJC9u%2BJ1W0SfE192%2BNv8nb79iehQIvDajsxviMSgq5fjMERoLBcLrDh%2BGYNtpsm2jwyOgEpAmK8niEjNKouSdrfSlpLGR%2BxDjkw5vKeygY6pgE1T376Yhl8lUM6pcrcNqStaQj%2FGDbh0muy8d%2Fy8tok2%2FrAXpAde1WTgSBuLCECTsmJxSfF8lIZ1ymiPj0Ivj0f5ZDs42WYvjN9YbkswJ%2BKebSAIsvwHn4qYGh1SOG1T%2B0nGWFIfPRnBinpabmtKwSnfctMeh90K8fyElOm0uV88HhPxH14%2BKSXtSEOegPi0RPwnaJjjicDobIkPurCCtMK9J6ruY3e&X-Amz-Signature=c9d3cb4dcff288a47e662eef6421e7146945a1aa91b17e6ca372fb899c2742b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

