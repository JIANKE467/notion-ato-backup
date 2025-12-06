
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A5QFI6V%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqvSv2t4r0QRHBaamcsMkXMcu7jOM11y%2BovBnxTG3ydQIhAK52tKTrSTb%2BfSrxPP543ckfr7OEIPO20YE272GQg1B3Kv8DCG4QABoMNjM3NDIzMTgzODA1IgxMxLbHnY9EZQUK9Hwq3APDm1TiXt6R1%2FQnkLPYxYoTkIHdsrysqduto%2B0QBx4%2FU8RhVuQq4oB9IlGPubLye%2BQgFQYLlbVfGKfJ0qSf%2B05FUwyb1vnoXafvLP26qfOk6HI0mPqhcCpScnd2zGrpd1xKZsNQlkfg5cgDl7jFHkyhE6wFJIWKw5aYh8DoWtcpGawX5%2BQO5nAyARAuO4urSAVtxeDvfHjKHST1nBA0jLWL4HKOQ%2FUcJAt%2FLfGAnTGRQsuwdhMJKwwffnE4vSo9uOBGQWAbc5E2C0kW1vqtttXbwnDto15lFdBxiSa3edMMixN2ssWRv%2FZgH4iEJnORGBPZyuy206KPbvW5W7htnDj%2FPqlDvQvbP8qYQdLyVCopj37qfrZFtnUvxeJtNB4dumYFRWL5M6VGMSzeSi%2B%2B4OKwNdl08tqMLBEoNM4YoHVxoFvtBs0WZLyVrP5SCKz24sxFRvwiPQzbhZNWTICkLZ3t78owVaRqaqXG4m5wEtxbh8VeGgIVNQRje0GKFpzHPQVzKxjnpk8yc4ewWH0dcS3Tphvi%2BfwAQ7SnX4Hl%2BuH2khED%2FVQeyxjHLpCd2Odhfq8NB6AivCofE4FA3DMI2KiDAdkoeXzNej1JgYmmH5ufkUc12vGrNUGdvIzQPzC%2B687JBjqkAdCg6jtUT%2BV8d%2B%2BZR2zph4aRus8X20Wp%2FiXlTj%2F9klq144KenCBNb2bK8IWmwHv7uusnRJncPZeOf3bM4Poz9X5r%2BDng7j28KC3UXe5fsR51y11vfeNe22L%2BfZHkFj9jnv39jdgSw09CtlRjACLB81jqQyetYJR1hj9tTngI%2Fy5ZVmL%2FjOIV2rgtjgVwLFdpK1z%2BJjv00X8jZIOY9%2BG8%2BYOJC1ez&X-Amz-Signature=f69e23f2b7dfa62b53722da7c5ac73ecfb35a12b742e4ef554ce1bfa748136df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZYTBYNR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrcJkv%2B0T%2F6iz1uwmz%2BMcQ4YYOrEG15BGtu7g9KtS4cAIhAKyrMKZONAzK7pZQj2xM59wqsFstu%2FdiTOmo7CPZuiusKv8DCG4QABoMNjM3NDIzMTgzODA1IgwreMIHlaFxnwEOdCMq3AMlQD%2BTqSBia78NBETuGUGeOnCQh0P68fiR3PbO5ZAHLzKdNLNf0%2FrINDd8AujaJ49pNvIIRhUDM5nmIR8RN9TnBITj%2BXRvBGCCbZ9GxxJi1hDYnW1a4LyZM6J%2FOwoifi7PYmxMfnF8EjNuSEw2lqR6s%2B3EASXZ8oD53nLrhpbHaAMS%2BFqoVGPqe6BvGs9jm%2FkfhRSQXhVTjy5fxwcNGPfA9zgU9N4dQSkewz8yxeFDhG%2BDOPSslZBcTYrM3d4ioBqWaYqYVxCEa1al5S6ga5HZmjtAargSEyP61PToRoqFj4ze6fd2SSJwrofANSk%2BUh74fIb5CUMyNqlB71V4OPkbR8cWSB2X3yGl9UWdh5%2BhfhVujy6A3Gv8%2FNKlVRqvQCM8Hv4UMrC%2FcuW7i9djtFeQbQG87AeSiELLS%2BpqA97eLQyQGrZA80eE0Nflts9Ud8W6jKVBUDwhVBeXqAKAID1gPyj0w4ay%2FlK52OZSG6h4C7dMfRfxGxPBS7vkcy74QXxmdrecdV1soBkk9pS%2BL7ovq0kox%2Bugp9sNCsdqQXXXppjbDWNkRGuCFTpU%2FVdLz6CFHjAEr4%2FAnc0YvyU%2FvB99njnT1ZYxLJSbJHmTi3uNKAA5yRC%2FrsNjsBut8zCB7M7JBjqkAZMv7U4VE5%2Fb0Xn62AbUcap9Jr%2F6FoD2SNdvgT0%2BGw9WB49p80ByS17gBhXVtBKEaVUyW66VgTaMWmMTSvB3Rdkkmcm9KQoA6S9nEdCx2CQGeASG9bt7bDCPWmzqwFhJiCdWb57eZqfw3GTF14oRVqAdqKrDcfdg7Aba6%2BbT%2BNU8BtrMqqMy0ezU67O4uWjSPC4R%2F67YUYpHz34LWO2%2Bfluhi7s0&X-Amz-Signature=26f75b97ba347a967c0253baf5ebfe082ab2e8245b9f62657408394c09343aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZYTBYNR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrcJkv%2B0T%2F6iz1uwmz%2BMcQ4YYOrEG15BGtu7g9KtS4cAIhAKyrMKZONAzK7pZQj2xM59wqsFstu%2FdiTOmo7CPZuiusKv8DCG4QABoMNjM3NDIzMTgzODA1IgwreMIHlaFxnwEOdCMq3AMlQD%2BTqSBia78NBETuGUGeOnCQh0P68fiR3PbO5ZAHLzKdNLNf0%2FrINDd8AujaJ49pNvIIRhUDM5nmIR8RN9TnBITj%2BXRvBGCCbZ9GxxJi1hDYnW1a4LyZM6J%2FOwoifi7PYmxMfnF8EjNuSEw2lqR6s%2B3EASXZ8oD53nLrhpbHaAMS%2BFqoVGPqe6BvGs9jm%2FkfhRSQXhVTjy5fxwcNGPfA9zgU9N4dQSkewz8yxeFDhG%2BDOPSslZBcTYrM3d4ioBqWaYqYVxCEa1al5S6ga5HZmjtAargSEyP61PToRoqFj4ze6fd2SSJwrofANSk%2BUh74fIb5CUMyNqlB71V4OPkbR8cWSB2X3yGl9UWdh5%2BhfhVujy6A3Gv8%2FNKlVRqvQCM8Hv4UMrC%2FcuW7i9djtFeQbQG87AeSiELLS%2BpqA97eLQyQGrZA80eE0Nflts9Ud8W6jKVBUDwhVBeXqAKAID1gPyj0w4ay%2FlK52OZSG6h4C7dMfRfxGxPBS7vkcy74QXxmdrecdV1soBkk9pS%2BL7ovq0kox%2Bugp9sNCsdqQXXXppjbDWNkRGuCFTpU%2FVdLz6CFHjAEr4%2FAnc0YvyU%2FvB99njnT1ZYxLJSbJHmTi3uNKAA5yRC%2FrsNjsBut8zCB7M7JBjqkAZMv7U4VE5%2Fb0Xn62AbUcap9Jr%2F6FoD2SNdvgT0%2BGw9WB49p80ByS17gBhXVtBKEaVUyW66VgTaMWmMTSvB3Rdkkmcm9KQoA6S9nEdCx2CQGeASG9bt7bDCPWmzqwFhJiCdWb57eZqfw3GTF14oRVqAdqKrDcfdg7Aba6%2BbT%2BNU8BtrMqqMy0ezU67O4uWjSPC4R%2F67YUYpHz34LWO2%2Bfluhi7s0&X-Amz-Signature=c1b1f9b89f4634fb5621b4f82da0736e40d10d6ae4cb93b3293c1e2f11dc92f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XXHNQIY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGT%2BFszRwSn8BjGj3APmMLDfhagUCCjraL08Al1GdM2AiBt0PVVOXGQJJI0QDjDdzWvjsDa3GuNbs2pJ98mxdTIgCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMKR%2F5XNoIaBiox7wLKtwDhRfaT2CjWEtSA5QwZQtNOZxq6rilL6%2BfpOmxGrwR9npPsCw3MXfPcKXAlJ5g7q%2BbgjR1SlLgcCYPcqm2HJ3%2FTsT2%2F6hRXB4TPG%2F5DIV1piPueIG69ovHCB0dELlu8D6cyFE98GVvbqKvU0FoXMVwoABvkBqfMLk1D6CewsUTQZktabJ01pKjNbO6f6%2BrwQdmMz%2FTmFycNTmY3cYnMZ7p7Gy2mBHZZM7VTqahcimGTcR4D%2FLbEJMf8HdUknX54KshchQbuBFIq4taLgCA0wRM%2BZqDa5hQK9T%2B68rgEZ0nDrc3%2BcYJevwML2E7kXG%2B80ZbIkqY0tMk6BhizSI4ys0Gk07ca1%2FlcPV%2BoreR76JJTJE%2B1AhfAa%2FlyRj2LYetX9ipweHwLheLNCp3RpjXmGxAsqul%2FTnA8FsvrvWH3K4DvZk%2B1SjXRbpdc%2BJe9u2Ov4fKnTaSwVXtqVy%2Fv9w%2BZysRt8fsVsvXY2C9rE3U5tFmaA3u6psPsgFY%2B3zXdPs3y0CTeTnd08yAdo3guGQqzVb8x220BRs36uPK14WLeLFx1AYybGtdjcK46uLjKFbG8kpYEDJvbdxfVJdmvPEN%2BeVxA3krHfynGvlpY8adgeANWLebjAuwy5r2go9AKgEwyOvOyQY6pgH0G%2BbAC7Sg%2FnLsfssaH68jA3lBcsiPo%2B6WHZlV09%2B5qfI89GWA%2FSRJWmgWRkSIWqcQsPqijEa07%2BjBcujsuZWgiMt6Zir1smN5x%2BxQWCn0K6LUT%2FBkpG%2Bw8oVsus1IRtmuT0XiBtWmnK3ixa3IkgrhRhD5xOjQEgEubqdqEmLEwIhfANXGFwjCDlp6BmAL%2BIUp3zDXT3I8RIvZGVrwl3GM0JleDKdk&X-Amz-Signature=8f6cb905984b959726e9c2d966b1c454f7f0954854c8dd741162658bc0191c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XXHNQIY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGT%2BFszRwSn8BjGj3APmMLDfhagUCCjraL08Al1GdM2AiBt0PVVOXGQJJI0QDjDdzWvjsDa3GuNbs2pJ98mxdTIgCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMKR%2F5XNoIaBiox7wLKtwDhRfaT2CjWEtSA5QwZQtNOZxq6rilL6%2BfpOmxGrwR9npPsCw3MXfPcKXAlJ5g7q%2BbgjR1SlLgcCYPcqm2HJ3%2FTsT2%2F6hRXB4TPG%2F5DIV1piPueIG69ovHCB0dELlu8D6cyFE98GVvbqKvU0FoXMVwoABvkBqfMLk1D6CewsUTQZktabJ01pKjNbO6f6%2BrwQdmMz%2FTmFycNTmY3cYnMZ7p7Gy2mBHZZM7VTqahcimGTcR4D%2FLbEJMf8HdUknX54KshchQbuBFIq4taLgCA0wRM%2BZqDa5hQK9T%2B68rgEZ0nDrc3%2BcYJevwML2E7kXG%2B80ZbIkqY0tMk6BhizSI4ys0Gk07ca1%2FlcPV%2BoreR76JJTJE%2B1AhfAa%2FlyRj2LYetX9ipweHwLheLNCp3RpjXmGxAsqul%2FTnA8FsvrvWH3K4DvZk%2B1SjXRbpdc%2BJe9u2Ov4fKnTaSwVXtqVy%2Fv9w%2BZysRt8fsVsvXY2C9rE3U5tFmaA3u6psPsgFY%2B3zXdPs3y0CTeTnd08yAdo3guGQqzVb8x220BRs36uPK14WLeLFx1AYybGtdjcK46uLjKFbG8kpYEDJvbdxfVJdmvPEN%2BeVxA3krHfynGvlpY8adgeANWLebjAuwy5r2go9AKgEwyOvOyQY6pgH0G%2BbAC7Sg%2FnLsfssaH68jA3lBcsiPo%2B6WHZlV09%2B5qfI89GWA%2FSRJWmgWRkSIWqcQsPqijEa07%2BjBcujsuZWgiMt6Zir1smN5x%2BxQWCn0K6LUT%2FBkpG%2Bw8oVsus1IRtmuT0XiBtWmnK3ixa3IkgrhRhD5xOjQEgEubqdqEmLEwIhfANXGFwjCDlp6BmAL%2BIUp3zDXT3I8RIvZGVrwl3GM0JleDKdk&X-Amz-Signature=0c8b9d7df7056e8918b15612b8dc7e07c11fee37939067176258cd115134e454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XXHNQIY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGT%2BFszRwSn8BjGj3APmMLDfhagUCCjraL08Al1GdM2AiBt0PVVOXGQJJI0QDjDdzWvjsDa3GuNbs2pJ98mxdTIgCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMKR%2F5XNoIaBiox7wLKtwDhRfaT2CjWEtSA5QwZQtNOZxq6rilL6%2BfpOmxGrwR9npPsCw3MXfPcKXAlJ5g7q%2BbgjR1SlLgcCYPcqm2HJ3%2FTsT2%2F6hRXB4TPG%2F5DIV1piPueIG69ovHCB0dELlu8D6cyFE98GVvbqKvU0FoXMVwoABvkBqfMLk1D6CewsUTQZktabJ01pKjNbO6f6%2BrwQdmMz%2FTmFycNTmY3cYnMZ7p7Gy2mBHZZM7VTqahcimGTcR4D%2FLbEJMf8HdUknX54KshchQbuBFIq4taLgCA0wRM%2BZqDa5hQK9T%2B68rgEZ0nDrc3%2BcYJevwML2E7kXG%2B80ZbIkqY0tMk6BhizSI4ys0Gk07ca1%2FlcPV%2BoreR76JJTJE%2B1AhfAa%2FlyRj2LYetX9ipweHwLheLNCp3RpjXmGxAsqul%2FTnA8FsvrvWH3K4DvZk%2B1SjXRbpdc%2BJe9u2Ov4fKnTaSwVXtqVy%2Fv9w%2BZysRt8fsVsvXY2C9rE3U5tFmaA3u6psPsgFY%2B3zXdPs3y0CTeTnd08yAdo3guGQqzVb8x220BRs36uPK14WLeLFx1AYybGtdjcK46uLjKFbG8kpYEDJvbdxfVJdmvPEN%2BeVxA3krHfynGvlpY8adgeANWLebjAuwy5r2go9AKgEwyOvOyQY6pgH0G%2BbAC7Sg%2FnLsfssaH68jA3lBcsiPo%2B6WHZlV09%2B5qfI89GWA%2FSRJWmgWRkSIWqcQsPqijEa07%2BjBcujsuZWgiMt6Zir1smN5x%2BxQWCn0K6LUT%2FBkpG%2Bw8oVsus1IRtmuT0XiBtWmnK3ixa3IkgrhRhD5xOjQEgEubqdqEmLEwIhfANXGFwjCDlp6BmAL%2BIUp3zDXT3I8RIvZGVrwl3GM0JleDKdk&X-Amz-Signature=7db04bfcfcf3c07f3e7698bcfbf2d38b8a8345891194c78283dc5223fe51acd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XXHNQIY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGT%2BFszRwSn8BjGj3APmMLDfhagUCCjraL08Al1GdM2AiBt0PVVOXGQJJI0QDjDdzWvjsDa3GuNbs2pJ98mxdTIgCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMKR%2F5XNoIaBiox7wLKtwDhRfaT2CjWEtSA5QwZQtNOZxq6rilL6%2BfpOmxGrwR9npPsCw3MXfPcKXAlJ5g7q%2BbgjR1SlLgcCYPcqm2HJ3%2FTsT2%2F6hRXB4TPG%2F5DIV1piPueIG69ovHCB0dELlu8D6cyFE98GVvbqKvU0FoXMVwoABvkBqfMLk1D6CewsUTQZktabJ01pKjNbO6f6%2BrwQdmMz%2FTmFycNTmY3cYnMZ7p7Gy2mBHZZM7VTqahcimGTcR4D%2FLbEJMf8HdUknX54KshchQbuBFIq4taLgCA0wRM%2BZqDa5hQK9T%2B68rgEZ0nDrc3%2BcYJevwML2E7kXG%2B80ZbIkqY0tMk6BhizSI4ys0Gk07ca1%2FlcPV%2BoreR76JJTJE%2B1AhfAa%2FlyRj2LYetX9ipweHwLheLNCp3RpjXmGxAsqul%2FTnA8FsvrvWH3K4DvZk%2B1SjXRbpdc%2BJe9u2Ov4fKnTaSwVXtqVy%2Fv9w%2BZysRt8fsVsvXY2C9rE3U5tFmaA3u6psPsgFY%2B3zXdPs3y0CTeTnd08yAdo3guGQqzVb8x220BRs36uPK14WLeLFx1AYybGtdjcK46uLjKFbG8kpYEDJvbdxfVJdmvPEN%2BeVxA3krHfynGvlpY8adgeANWLebjAuwy5r2go9AKgEwyOvOyQY6pgH0G%2BbAC7Sg%2FnLsfssaH68jA3lBcsiPo%2B6WHZlV09%2B5qfI89GWA%2FSRJWmgWRkSIWqcQsPqijEa07%2BjBcujsuZWgiMt6Zir1smN5x%2BxQWCn0K6LUT%2FBkpG%2Bw8oVsus1IRtmuT0XiBtWmnK3ixa3IkgrhRhD5xOjQEgEubqdqEmLEwIhfANXGFwjCDlp6BmAL%2BIUp3zDXT3I8RIvZGVrwl3GM0JleDKdk&X-Amz-Signature=8172d0a76709633f0c7a5b4f2aede9f4a819337b51fdf4d6814554d09cdeb1dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XXHNQIY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGT%2BFszRwSn8BjGj3APmMLDfhagUCCjraL08Al1GdM2AiBt0PVVOXGQJJI0QDjDdzWvjsDa3GuNbs2pJ98mxdTIgCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMKR%2F5XNoIaBiox7wLKtwDhRfaT2CjWEtSA5QwZQtNOZxq6rilL6%2BfpOmxGrwR9npPsCw3MXfPcKXAlJ5g7q%2BbgjR1SlLgcCYPcqm2HJ3%2FTsT2%2F6hRXB4TPG%2F5DIV1piPueIG69ovHCB0dELlu8D6cyFE98GVvbqKvU0FoXMVwoABvkBqfMLk1D6CewsUTQZktabJ01pKjNbO6f6%2BrwQdmMz%2FTmFycNTmY3cYnMZ7p7Gy2mBHZZM7VTqahcimGTcR4D%2FLbEJMf8HdUknX54KshchQbuBFIq4taLgCA0wRM%2BZqDa5hQK9T%2B68rgEZ0nDrc3%2BcYJevwML2E7kXG%2B80ZbIkqY0tMk6BhizSI4ys0Gk07ca1%2FlcPV%2BoreR76JJTJE%2B1AhfAa%2FlyRj2LYetX9ipweHwLheLNCp3RpjXmGxAsqul%2FTnA8FsvrvWH3K4DvZk%2B1SjXRbpdc%2BJe9u2Ov4fKnTaSwVXtqVy%2Fv9w%2BZysRt8fsVsvXY2C9rE3U5tFmaA3u6psPsgFY%2B3zXdPs3y0CTeTnd08yAdo3guGQqzVb8x220BRs36uPK14WLeLFx1AYybGtdjcK46uLjKFbG8kpYEDJvbdxfVJdmvPEN%2BeVxA3krHfynGvlpY8adgeANWLebjAuwy5r2go9AKgEwyOvOyQY6pgH0G%2BbAC7Sg%2FnLsfssaH68jA3lBcsiPo%2B6WHZlV09%2B5qfI89GWA%2FSRJWmgWRkSIWqcQsPqijEa07%2BjBcujsuZWgiMt6Zir1smN5x%2BxQWCn0K6LUT%2FBkpG%2Bw8oVsus1IRtmuT0XiBtWmnK3ixa3IkgrhRhD5xOjQEgEubqdqEmLEwIhfANXGFwjCDlp6BmAL%2BIUp3zDXT3I8RIvZGVrwl3GM0JleDKdk&X-Amz-Signature=866d168e8b521a911ddd56f5f266ed421a3cd7638256601edfaabf059ffb141b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XXHNQIY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGT%2BFszRwSn8BjGj3APmMLDfhagUCCjraL08Al1GdM2AiBt0PVVOXGQJJI0QDjDdzWvjsDa3GuNbs2pJ98mxdTIgCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMKR%2F5XNoIaBiox7wLKtwDhRfaT2CjWEtSA5QwZQtNOZxq6rilL6%2BfpOmxGrwR9npPsCw3MXfPcKXAlJ5g7q%2BbgjR1SlLgcCYPcqm2HJ3%2FTsT2%2F6hRXB4TPG%2F5DIV1piPueIG69ovHCB0dELlu8D6cyFE98GVvbqKvU0FoXMVwoABvkBqfMLk1D6CewsUTQZktabJ01pKjNbO6f6%2BrwQdmMz%2FTmFycNTmY3cYnMZ7p7Gy2mBHZZM7VTqahcimGTcR4D%2FLbEJMf8HdUknX54KshchQbuBFIq4taLgCA0wRM%2BZqDa5hQK9T%2B68rgEZ0nDrc3%2BcYJevwML2E7kXG%2B80ZbIkqY0tMk6BhizSI4ys0Gk07ca1%2FlcPV%2BoreR76JJTJE%2B1AhfAa%2FlyRj2LYetX9ipweHwLheLNCp3RpjXmGxAsqul%2FTnA8FsvrvWH3K4DvZk%2B1SjXRbpdc%2BJe9u2Ov4fKnTaSwVXtqVy%2Fv9w%2BZysRt8fsVsvXY2C9rE3U5tFmaA3u6psPsgFY%2B3zXdPs3y0CTeTnd08yAdo3guGQqzVb8x220BRs36uPK14WLeLFx1AYybGtdjcK46uLjKFbG8kpYEDJvbdxfVJdmvPEN%2BeVxA3krHfynGvlpY8adgeANWLebjAuwy5r2go9AKgEwyOvOyQY6pgH0G%2BbAC7Sg%2FnLsfssaH68jA3lBcsiPo%2B6WHZlV09%2B5qfI89GWA%2FSRJWmgWRkSIWqcQsPqijEa07%2BjBcujsuZWgiMt6Zir1smN5x%2BxQWCn0K6LUT%2FBkpG%2Bw8oVsus1IRtmuT0XiBtWmnK3ixa3IkgrhRhD5xOjQEgEubqdqEmLEwIhfANXGFwjCDlp6BmAL%2BIUp3zDXT3I8RIvZGVrwl3GM0JleDKdk&X-Amz-Signature=d0ccaec08346ddc7669bf4995a93fd39cf0e4105a87e59ffdc5e516455e6b9a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XXHNQIY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGT%2BFszRwSn8BjGj3APmMLDfhagUCCjraL08Al1GdM2AiBt0PVVOXGQJJI0QDjDdzWvjsDa3GuNbs2pJ98mxdTIgCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMKR%2F5XNoIaBiox7wLKtwDhRfaT2CjWEtSA5QwZQtNOZxq6rilL6%2BfpOmxGrwR9npPsCw3MXfPcKXAlJ5g7q%2BbgjR1SlLgcCYPcqm2HJ3%2FTsT2%2F6hRXB4TPG%2F5DIV1piPueIG69ovHCB0dELlu8D6cyFE98GVvbqKvU0FoXMVwoABvkBqfMLk1D6CewsUTQZktabJ01pKjNbO6f6%2BrwQdmMz%2FTmFycNTmY3cYnMZ7p7Gy2mBHZZM7VTqahcimGTcR4D%2FLbEJMf8HdUknX54KshchQbuBFIq4taLgCA0wRM%2BZqDa5hQK9T%2B68rgEZ0nDrc3%2BcYJevwML2E7kXG%2B80ZbIkqY0tMk6BhizSI4ys0Gk07ca1%2FlcPV%2BoreR76JJTJE%2B1AhfAa%2FlyRj2LYetX9ipweHwLheLNCp3RpjXmGxAsqul%2FTnA8FsvrvWH3K4DvZk%2B1SjXRbpdc%2BJe9u2Ov4fKnTaSwVXtqVy%2Fv9w%2BZysRt8fsVsvXY2C9rE3U5tFmaA3u6psPsgFY%2B3zXdPs3y0CTeTnd08yAdo3guGQqzVb8x220BRs36uPK14WLeLFx1AYybGtdjcK46uLjKFbG8kpYEDJvbdxfVJdmvPEN%2BeVxA3krHfynGvlpY8adgeANWLebjAuwy5r2go9AKgEwyOvOyQY6pgH0G%2BbAC7Sg%2FnLsfssaH68jA3lBcsiPo%2B6WHZlV09%2B5qfI89GWA%2FSRJWmgWRkSIWqcQsPqijEa07%2BjBcujsuZWgiMt6Zir1smN5x%2BxQWCn0K6LUT%2FBkpG%2Bw8oVsus1IRtmuT0XiBtWmnK3ixa3IkgrhRhD5xOjQEgEubqdqEmLEwIhfANXGFwjCDlp6BmAL%2BIUp3zDXT3I8RIvZGVrwl3GM0JleDKdk&X-Amz-Signature=20d9b9a92485538a04a87f0b8b654866a4f70d005eaa2b0bec71bbac4b8755f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W55UZIWY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfav%2BW0YxqptKgttzqydqGnoOxYLpa9ZcdgGrnW6VocAIhANiuPRWji7DbuQKZ%2Bb1XUhyrgk8FVp6e%2BE%2BJsGs7%2Fg5LKv8DCG4QABoMNjM3NDIzMTgzODA1IgxtL2TbDH9qSXXD4JUq3AMFIwnQwZvlMeU9BStlQHBBwRENysrNEKVqtD6S6JwVAA54H%2FND0tK7FHuQR7LGGXuPWPEz3CKWjrrOqQHMFqcHv%2FdjvmQfrjV%2FGdllo9tEwYNH7bOrpnLF1CeyBDhu7WCMsczyOAoMLhNO3Ag4%2FpL0rkESXqyI6drDUA3EPYIwZvohwBxHZXkKvqBYc3rrspQiVSb6HNNc8JXndZGwHw04mv%2F3Ja9x8%2BpbPbftK7h3ph4JWCuCPVIuZscrc00lAJyuDVMMzynKkS8r5DKrzHCVYa1OBptT9aHEK%2BAYiV9vhO9TmAG%2FXgLPKtBWbhA80a8OeeAuLkzzrn8IimWhQfTNkK6C9HwBYuNs5tGeqaYYVcyNEE5xxCq6dxeMHJg8AyyjW%2Bv9L8kZIiQumHXhNYtuwXsMV7Qd59FiyZkxRJzYAB8tlwnsRnU%2FQQ6pGN0JZpWOh7IeHWR7ShCudv%2FGxxDKUYxQ3DtYoxhMI6PWcVpNzYbrSMAPW5N7ECzOIuk6IJ7k9nVx8KyIrUYlHO%2FHuKYWRFLVujETp65hqz%2FUyUtv%2FyWH4b%2BegyN3sti9HM2m02SAx5YmesJM3SrjoGOaypq%2ByyWPOPYmlu7bUqc5ZVkE4kx6BbS4P6plqHRZBzCv687JBjqkAcigI4QeBTnsWy3ojy1kIqGhmYj9QBT7bGVvNAzgsMzlkb7rqCE%2FUtm3ZqiL3KFCJB4RRbXRfsDDkibA%2FvR%2B%2BfZ59bLcY%2FfsHgdnoKxBMDLaorHyYrQuXEM1W5AXbRhddfm2zKd0PLt3N4nQ90Ht6fUFxjeJzOLnL5A8k1Yojm02cKVwGCjn2yGDKkAYrrGIM3JDtcg87rfAuGI%2FPyVgx%2B6MLK9Q&X-Amz-Signature=358001f3b11c56222f24168bb4f27a5fdeb174a89a936a37982aa72a8223a3bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W55UZIWY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfav%2BW0YxqptKgttzqydqGnoOxYLpa9ZcdgGrnW6VocAIhANiuPRWji7DbuQKZ%2Bb1XUhyrgk8FVp6e%2BE%2BJsGs7%2Fg5LKv8DCG4QABoMNjM3NDIzMTgzODA1IgxtL2TbDH9qSXXD4JUq3AMFIwnQwZvlMeU9BStlQHBBwRENysrNEKVqtD6S6JwVAA54H%2FND0tK7FHuQR7LGGXuPWPEz3CKWjrrOqQHMFqcHv%2FdjvmQfrjV%2FGdllo9tEwYNH7bOrpnLF1CeyBDhu7WCMsczyOAoMLhNO3Ag4%2FpL0rkESXqyI6drDUA3EPYIwZvohwBxHZXkKvqBYc3rrspQiVSb6HNNc8JXndZGwHw04mv%2F3Ja9x8%2BpbPbftK7h3ph4JWCuCPVIuZscrc00lAJyuDVMMzynKkS8r5DKrzHCVYa1OBptT9aHEK%2BAYiV9vhO9TmAG%2FXgLPKtBWbhA80a8OeeAuLkzzrn8IimWhQfTNkK6C9HwBYuNs5tGeqaYYVcyNEE5xxCq6dxeMHJg8AyyjW%2Bv9L8kZIiQumHXhNYtuwXsMV7Qd59FiyZkxRJzYAB8tlwnsRnU%2FQQ6pGN0JZpWOh7IeHWR7ShCudv%2FGxxDKUYxQ3DtYoxhMI6PWcVpNzYbrSMAPW5N7ECzOIuk6IJ7k9nVx8KyIrUYlHO%2FHuKYWRFLVujETp65hqz%2FUyUtv%2FyWH4b%2BegyN3sti9HM2m02SAx5YmesJM3SrjoGOaypq%2ByyWPOPYmlu7bUqc5ZVkE4kx6BbS4P6plqHRZBzCv687JBjqkAcigI4QeBTnsWy3ojy1kIqGhmYj9QBT7bGVvNAzgsMzlkb7rqCE%2FUtm3ZqiL3KFCJB4RRbXRfsDDkibA%2FvR%2B%2BfZ59bLcY%2FfsHgdnoKxBMDLaorHyYrQuXEM1W5AXbRhddfm2zKd0PLt3N4nQ90Ht6fUFxjeJzOLnL5A8k1Yojm02cKVwGCjn2yGDKkAYrrGIM3JDtcg87rfAuGI%2FPyVgx%2B6MLK9Q&X-Amz-Signature=fd54b4065389862612aff0e9d4f11306d909e06bc4e166eb17c1ce4759cb9e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W55UZIWY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfav%2BW0YxqptKgttzqydqGnoOxYLpa9ZcdgGrnW6VocAIhANiuPRWji7DbuQKZ%2Bb1XUhyrgk8FVp6e%2BE%2BJsGs7%2Fg5LKv8DCG4QABoMNjM3NDIzMTgzODA1IgxtL2TbDH9qSXXD4JUq3AMFIwnQwZvlMeU9BStlQHBBwRENysrNEKVqtD6S6JwVAA54H%2FND0tK7FHuQR7LGGXuPWPEz3CKWjrrOqQHMFqcHv%2FdjvmQfrjV%2FGdllo9tEwYNH7bOrpnLF1CeyBDhu7WCMsczyOAoMLhNO3Ag4%2FpL0rkESXqyI6drDUA3EPYIwZvohwBxHZXkKvqBYc3rrspQiVSb6HNNc8JXndZGwHw04mv%2F3Ja9x8%2BpbPbftK7h3ph4JWCuCPVIuZscrc00lAJyuDVMMzynKkS8r5DKrzHCVYa1OBptT9aHEK%2BAYiV9vhO9TmAG%2FXgLPKtBWbhA80a8OeeAuLkzzrn8IimWhQfTNkK6C9HwBYuNs5tGeqaYYVcyNEE5xxCq6dxeMHJg8AyyjW%2Bv9L8kZIiQumHXhNYtuwXsMV7Qd59FiyZkxRJzYAB8tlwnsRnU%2FQQ6pGN0JZpWOh7IeHWR7ShCudv%2FGxxDKUYxQ3DtYoxhMI6PWcVpNzYbrSMAPW5N7ECzOIuk6IJ7k9nVx8KyIrUYlHO%2FHuKYWRFLVujETp65hqz%2FUyUtv%2FyWH4b%2BegyN3sti9HM2m02SAx5YmesJM3SrjoGOaypq%2ByyWPOPYmlu7bUqc5ZVkE4kx6BbS4P6plqHRZBzCv687JBjqkAcigI4QeBTnsWy3ojy1kIqGhmYj9QBT7bGVvNAzgsMzlkb7rqCE%2FUtm3ZqiL3KFCJB4RRbXRfsDDkibA%2FvR%2B%2BfZ59bLcY%2FfsHgdnoKxBMDLaorHyYrQuXEM1W5AXbRhddfm2zKd0PLt3N4nQ90Ht6fUFxjeJzOLnL5A8k1Yojm02cKVwGCjn2yGDKkAYrrGIM3JDtcg87rfAuGI%2FPyVgx%2B6MLK9Q&X-Amz-Signature=c18e978cf37cff3597c26f15455df90ceeebcacf1267dbd44de843a546e36a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W55UZIWY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfav%2BW0YxqptKgttzqydqGnoOxYLpa9ZcdgGrnW6VocAIhANiuPRWji7DbuQKZ%2Bb1XUhyrgk8FVp6e%2BE%2BJsGs7%2Fg5LKv8DCG4QABoMNjM3NDIzMTgzODA1IgxtL2TbDH9qSXXD4JUq3AMFIwnQwZvlMeU9BStlQHBBwRENysrNEKVqtD6S6JwVAA54H%2FND0tK7FHuQR7LGGXuPWPEz3CKWjrrOqQHMFqcHv%2FdjvmQfrjV%2FGdllo9tEwYNH7bOrpnLF1CeyBDhu7WCMsczyOAoMLhNO3Ag4%2FpL0rkESXqyI6drDUA3EPYIwZvohwBxHZXkKvqBYc3rrspQiVSb6HNNc8JXndZGwHw04mv%2F3Ja9x8%2BpbPbftK7h3ph4JWCuCPVIuZscrc00lAJyuDVMMzynKkS8r5DKrzHCVYa1OBptT9aHEK%2BAYiV9vhO9TmAG%2FXgLPKtBWbhA80a8OeeAuLkzzrn8IimWhQfTNkK6C9HwBYuNs5tGeqaYYVcyNEE5xxCq6dxeMHJg8AyyjW%2Bv9L8kZIiQumHXhNYtuwXsMV7Qd59FiyZkxRJzYAB8tlwnsRnU%2FQQ6pGN0JZpWOh7IeHWR7ShCudv%2FGxxDKUYxQ3DtYoxhMI6PWcVpNzYbrSMAPW5N7ECzOIuk6IJ7k9nVx8KyIrUYlHO%2FHuKYWRFLVujETp65hqz%2FUyUtv%2FyWH4b%2BegyN3sti9HM2m02SAx5YmesJM3SrjoGOaypq%2ByyWPOPYmlu7bUqc5ZVkE4kx6BbS4P6plqHRZBzCv687JBjqkAcigI4QeBTnsWy3ojy1kIqGhmYj9QBT7bGVvNAzgsMzlkb7rqCE%2FUtm3ZqiL3KFCJB4RRbXRfsDDkibA%2FvR%2B%2BfZ59bLcY%2FfsHgdnoKxBMDLaorHyYrQuXEM1W5AXbRhddfm2zKd0PLt3N4nQ90Ht6fUFxjeJzOLnL5A8k1Yojm02cKVwGCjn2yGDKkAYrrGIM3JDtcg87rfAuGI%2FPyVgx%2B6MLK9Q&X-Amz-Signature=98faea01e033216e6317ed8f24e1996d4854d4c51c5108bd68ab025a3d54e57c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W55UZIWY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfav%2BW0YxqptKgttzqydqGnoOxYLpa9ZcdgGrnW6VocAIhANiuPRWji7DbuQKZ%2Bb1XUhyrgk8FVp6e%2BE%2BJsGs7%2Fg5LKv8DCG4QABoMNjM3NDIzMTgzODA1IgxtL2TbDH9qSXXD4JUq3AMFIwnQwZvlMeU9BStlQHBBwRENysrNEKVqtD6S6JwVAA54H%2FND0tK7FHuQR7LGGXuPWPEz3CKWjrrOqQHMFqcHv%2FdjvmQfrjV%2FGdllo9tEwYNH7bOrpnLF1CeyBDhu7WCMsczyOAoMLhNO3Ag4%2FpL0rkESXqyI6drDUA3EPYIwZvohwBxHZXkKvqBYc3rrspQiVSb6HNNc8JXndZGwHw04mv%2F3Ja9x8%2BpbPbftK7h3ph4JWCuCPVIuZscrc00lAJyuDVMMzynKkS8r5DKrzHCVYa1OBptT9aHEK%2BAYiV9vhO9TmAG%2FXgLPKtBWbhA80a8OeeAuLkzzrn8IimWhQfTNkK6C9HwBYuNs5tGeqaYYVcyNEE5xxCq6dxeMHJg8AyyjW%2Bv9L8kZIiQumHXhNYtuwXsMV7Qd59FiyZkxRJzYAB8tlwnsRnU%2FQQ6pGN0JZpWOh7IeHWR7ShCudv%2FGxxDKUYxQ3DtYoxhMI6PWcVpNzYbrSMAPW5N7ECzOIuk6IJ7k9nVx8KyIrUYlHO%2FHuKYWRFLVujETp65hqz%2FUyUtv%2FyWH4b%2BegyN3sti9HM2m02SAx5YmesJM3SrjoGOaypq%2ByyWPOPYmlu7bUqc5ZVkE4kx6BbS4P6plqHRZBzCv687JBjqkAcigI4QeBTnsWy3ojy1kIqGhmYj9QBT7bGVvNAzgsMzlkb7rqCE%2FUtm3ZqiL3KFCJB4RRbXRfsDDkibA%2FvR%2B%2BfZ59bLcY%2FfsHgdnoKxBMDLaorHyYrQuXEM1W5AXbRhddfm2zKd0PLt3N4nQ90Ht6fUFxjeJzOLnL5A8k1Yojm02cKVwGCjn2yGDKkAYrrGIM3JDtcg87rfAuGI%2FPyVgx%2B6MLK9Q&X-Amz-Signature=8059d9fb58ac4110d7f1c3ea94d41ead31f60eb6483b5b594566c6fc766572b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO5QDVTW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgVUSq5VeuJgc32LGFx3v3mw1xZ8OFU3RnWUdxqDCukwIgb8uRXTHHcnt%2FsvyDFiKuQwaMwJiC0GT%2B0AHNysiW5Csq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFhH8qaHrqw%2B8PXqdCrcA%2BluYHd0ymRZ2Xzfq4KnGHbAk6Y4c5Zk%2FA7FroyThX9KipwBqpxiEn%2B%2B9AjBxs7GK8Nf54o8B%2FBa6FoQtFMefAxMVkOc39FTKfXoYbFNLdVO47LBVtDqx5YQX7bdYMdJSX9YjD8Bl8O7BzUB5DLBEjIJVnAeQLCihMgq840DrmWy%2FsT%2Bv1wfztZRcazSv%2BfukwQVrHaYD6Wall1nrcmtfruNwon%2BVXvLF7mkDEH0dcHGvI58ltt9qiuj4HbpPZQMF1Ib0DpR%2BlyO8JmuwEUmA9zpyh2iBk1%2FWDU8jod5fPSHm7FY1NsmaAmoreMp4zW6%2Fnhf2S25NRMribsflUwSvUyJEpto5jpbtmrLnlAhvWCtgxyobe5snQI55rHpH5jCTYXMhMo95YvQf96XbOvazUie4RGgGI7UiOido33YW8c1I5lv2aEIjD8bc4voWDroHzsxAjPEQ7pEznh1KFqrlA67YQegiT6b4n%2FK0EdnqKju9dC%2B7CZ4z1wXPaEIPKWx4a6fMZJCA%2B3AWyAoXBq7weA2wIVam4wEGxnGIqXZpt0IP87%2FxFxxQaX9kWIJ6oI%2BP70MvY3DYekCgq7caYziKvt69GzsoKDTOhQr4yoArxE8h9bhOdKBVTPkOjbMMJjrzskGOqUBV6ZhfEpxZpJehGcy4VpeexinY7uPrdp8U3pafuwjQevCfEKSnMsmlJiSBbZfMbYBAa%2FblB4NYNAmrNwmUaEc5QARmPus2s2x%2FaluZ6kG5SEROtV4xgbIy%2FNf6UR4TFzLBJE%2FAmWH1Vpz1EntTXQi%2FtRzlrzSejj5BqR7tdyYZQZsd%2BytF1tRlUQXFPnJK3iAq5CYFcPPYXaNGijYIySmAILKfjVt&X-Amz-Signature=6a9b432f534d753771dae6b94bfb6eccff106a5c9a10075230f8cd3758a0f7cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO5QDVTW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgVUSq5VeuJgc32LGFx3v3mw1xZ8OFU3RnWUdxqDCukwIgb8uRXTHHcnt%2FsvyDFiKuQwaMwJiC0GT%2B0AHNysiW5Csq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFhH8qaHrqw%2B8PXqdCrcA%2BluYHd0ymRZ2Xzfq4KnGHbAk6Y4c5Zk%2FA7FroyThX9KipwBqpxiEn%2B%2B9AjBxs7GK8Nf54o8B%2FBa6FoQtFMefAxMVkOc39FTKfXoYbFNLdVO47LBVtDqx5YQX7bdYMdJSX9YjD8Bl8O7BzUB5DLBEjIJVnAeQLCihMgq840DrmWy%2FsT%2Bv1wfztZRcazSv%2BfukwQVrHaYD6Wall1nrcmtfruNwon%2BVXvLF7mkDEH0dcHGvI58ltt9qiuj4HbpPZQMF1Ib0DpR%2BlyO8JmuwEUmA9zpyh2iBk1%2FWDU8jod5fPSHm7FY1NsmaAmoreMp4zW6%2Fnhf2S25NRMribsflUwSvUyJEpto5jpbtmrLnlAhvWCtgxyobe5snQI55rHpH5jCTYXMhMo95YvQf96XbOvazUie4RGgGI7UiOido33YW8c1I5lv2aEIjD8bc4voWDroHzsxAjPEQ7pEznh1KFqrlA67YQegiT6b4n%2FK0EdnqKju9dC%2B7CZ4z1wXPaEIPKWx4a6fMZJCA%2B3AWyAoXBq7weA2wIVam4wEGxnGIqXZpt0IP87%2FxFxxQaX9kWIJ6oI%2BP70MvY3DYekCgq7caYziKvt69GzsoKDTOhQr4yoArxE8h9bhOdKBVTPkOjbMMJjrzskGOqUBV6ZhfEpxZpJehGcy4VpeexinY7uPrdp8U3pafuwjQevCfEKSnMsmlJiSBbZfMbYBAa%2FblB4NYNAmrNwmUaEc5QARmPus2s2x%2FaluZ6kG5SEROtV4xgbIy%2FNf6UR4TFzLBJE%2FAmWH1Vpz1EntTXQi%2FtRzlrzSejj5BqR7tdyYZQZsd%2BytF1tRlUQXFPnJK3iAq5CYFcPPYXaNGijYIySmAILKfjVt&X-Amz-Signature=6c1e2dd17e3905822638e561eac47acd747eded00d2eb3393e2384d2f4424576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO5QDVTW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgVUSq5VeuJgc32LGFx3v3mw1xZ8OFU3RnWUdxqDCukwIgb8uRXTHHcnt%2FsvyDFiKuQwaMwJiC0GT%2B0AHNysiW5Csq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFhH8qaHrqw%2B8PXqdCrcA%2BluYHd0ymRZ2Xzfq4KnGHbAk6Y4c5Zk%2FA7FroyThX9KipwBqpxiEn%2B%2B9AjBxs7GK8Nf54o8B%2FBa6FoQtFMefAxMVkOc39FTKfXoYbFNLdVO47LBVtDqx5YQX7bdYMdJSX9YjD8Bl8O7BzUB5DLBEjIJVnAeQLCihMgq840DrmWy%2FsT%2Bv1wfztZRcazSv%2BfukwQVrHaYD6Wall1nrcmtfruNwon%2BVXvLF7mkDEH0dcHGvI58ltt9qiuj4HbpPZQMF1Ib0DpR%2BlyO8JmuwEUmA9zpyh2iBk1%2FWDU8jod5fPSHm7FY1NsmaAmoreMp4zW6%2Fnhf2S25NRMribsflUwSvUyJEpto5jpbtmrLnlAhvWCtgxyobe5snQI55rHpH5jCTYXMhMo95YvQf96XbOvazUie4RGgGI7UiOido33YW8c1I5lv2aEIjD8bc4voWDroHzsxAjPEQ7pEznh1KFqrlA67YQegiT6b4n%2FK0EdnqKju9dC%2B7CZ4z1wXPaEIPKWx4a6fMZJCA%2B3AWyAoXBq7weA2wIVam4wEGxnGIqXZpt0IP87%2FxFxxQaX9kWIJ6oI%2BP70MvY3DYekCgq7caYziKvt69GzsoKDTOhQr4yoArxE8h9bhOdKBVTPkOjbMMJjrzskGOqUBV6ZhfEpxZpJehGcy4VpeexinY7uPrdp8U3pafuwjQevCfEKSnMsmlJiSBbZfMbYBAa%2FblB4NYNAmrNwmUaEc5QARmPus2s2x%2FaluZ6kG5SEROtV4xgbIy%2FNf6UR4TFzLBJE%2FAmWH1Vpz1EntTXQi%2FtRzlrzSejj5BqR7tdyYZQZsd%2BytF1tRlUQXFPnJK3iAq5CYFcPPYXaNGijYIySmAILKfjVt&X-Amz-Signature=2a0560244ddbc7577717cf72dfe4b6c7fa9b4573a3e5e4707154dc6c4c513b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDWBXRSY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbBn6LgLqTHHTfs89Pg4qfHrZ3v4PZrtppOBRzfYyjTQIhANVYEV%2FwShEzPzHKqHlu8lLfhfaDE8fGlxgGQ%2BnYWXdyKv8DCG4QABoMNjM3NDIzMTgzODA1IgzzyBa13dlLoracA9oq3AM3jS6G1W5T8Pa8pcSETLLAoAacNMZXkPs0NHu4uPRmx%2B2q0uZX3JhgIhqjXvYw5HQ%2FAhqfLpv3FK9HNH9ftLhzPpatT4yPqF0ahlAllTLmgXuogWLjBhzSCoCy4d3DvMJVUYbmhTJLFWS5j6Xfd2MnJHz7LC1wcAJmy7pBFOyqG5r5NXYx8s8Vkirpa%2BX1kcHqxIt4w41NWa3dXb52o%2BsvSjEWtJN6SzA%2FRnr7Ug1KATuHpr78S2ITg%2BXKD%2B1f48nYqkZlhU19a09%2BSW2FpV3OuFyAJBL2J%2BnDhqV3tHa0tVyigVGvsGzYaOSg6W1vSMv6JbSpDwwlF5XZcXVaC%2FykyuXaSCyrBnP9mwxCc%2BKPfT7S2kfazzDTxJ3WyRxIDX6Nh8PDLn6lvJgm6BQxuMm4r2TjHaJ3WvY4p%2BL1PtDtN%2B8qhYEwfOA9WPWnYTuFNHRGXMmjQTK1MlPbG1iRDvl0xfUPtJtc0NdIHHtmAOPWw99E1rOuHFCIocQavA10sGC4ZfsLed7eX24MoZspud2T7plkM%2F%2BU1HEpjGeM%2FhHomz3X%2B2%2FeiXxGovSNVK5ZDVhKTxFATw%2B72wpECSNwjvFFDSIeodIqlW7oj8tMbhcbBTHm8kCpxFie8ILEfDDF687JBjqkAfWZe9mx%2Ba8XR%2FaAR9E7rYTKPrF6Byv8zfDXpkkKYr0b7pcl%2Fbme5ItNTeHyvTFqVUJ3uq%2BYLB%2Bng%2BJc3uCOPtm0g4o3R7XvZrskBkqEM48Dxrs1ytAND8kso3XcwxEPNzY7A0If9f1OSnmL%2FNFI2c0Vu%2Fmr5HLJrd1JmHgiiok8%2BAg7TPYb%2BtaaR%2BPma5HnsShWAknZLMF%2Fx7dYqP6%2F%2F17VHwcM&X-Amz-Signature=68384dbe8885e5372671b0e7310d0f6ce90423c576b67736a2f6d5bb3b81fe06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDWBXRSY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbBn6LgLqTHHTfs89Pg4qfHrZ3v4PZrtppOBRzfYyjTQIhANVYEV%2FwShEzPzHKqHlu8lLfhfaDE8fGlxgGQ%2BnYWXdyKv8DCG4QABoMNjM3NDIzMTgzODA1IgzzyBa13dlLoracA9oq3AM3jS6G1W5T8Pa8pcSETLLAoAacNMZXkPs0NHu4uPRmx%2B2q0uZX3JhgIhqjXvYw5HQ%2FAhqfLpv3FK9HNH9ftLhzPpatT4yPqF0ahlAllTLmgXuogWLjBhzSCoCy4d3DvMJVUYbmhTJLFWS5j6Xfd2MnJHz7LC1wcAJmy7pBFOyqG5r5NXYx8s8Vkirpa%2BX1kcHqxIt4w41NWa3dXb52o%2BsvSjEWtJN6SzA%2FRnr7Ug1KATuHpr78S2ITg%2BXKD%2B1f48nYqkZlhU19a09%2BSW2FpV3OuFyAJBL2J%2BnDhqV3tHa0tVyigVGvsGzYaOSg6W1vSMv6JbSpDwwlF5XZcXVaC%2FykyuXaSCyrBnP9mwxCc%2BKPfT7S2kfazzDTxJ3WyRxIDX6Nh8PDLn6lvJgm6BQxuMm4r2TjHaJ3WvY4p%2BL1PtDtN%2B8qhYEwfOA9WPWnYTuFNHRGXMmjQTK1MlPbG1iRDvl0xfUPtJtc0NdIHHtmAOPWw99E1rOuHFCIocQavA10sGC4ZfsLed7eX24MoZspud2T7plkM%2F%2BU1HEpjGeM%2FhHomz3X%2B2%2FeiXxGovSNVK5ZDVhKTxFATw%2B72wpECSNwjvFFDSIeodIqlW7oj8tMbhcbBTHm8kCpxFie8ILEfDDF687JBjqkAfWZe9mx%2Ba8XR%2FaAR9E7rYTKPrF6Byv8zfDXpkkKYr0b7pcl%2Fbme5ItNTeHyvTFqVUJ3uq%2BYLB%2Bng%2BJc3uCOPtm0g4o3R7XvZrskBkqEM48Dxrs1ytAND8kso3XcwxEPNzY7A0If9f1OSnmL%2FNFI2c0Vu%2Fmr5HLJrd1JmHgiiok8%2BAg7TPYb%2BtaaR%2BPma5HnsShWAknZLMF%2Fx7dYqP6%2F%2F17VHwcM&X-Amz-Signature=279cf6f82832610998ad9163706ef6807370fcfdc02953fcc43a3eb0a5d083b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJCGZPBO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FrXc9nOHxyT5rCu%2B4fsjGHEQvGasylVJiemgVwT2LKAiEA%2B%2BRGDGk5CwhGVREM7MaPzBLgxupvas%2BQtgO4fXlJTGAq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIFUVbTrXa8Ay6HRSCrcA3J7KMHpw3z3RLf4Xqiit6qAATVZt6CwpwaIloiMxXHRKD02G2%2BP40HzNGPxb88EUOOsh89FfZF7LFrG5jIGaZP5NNNDv55mgbSitQ5DkByJtCCNeJztS7XisQGOgvFRO2K0Q6BZ8ZZZmVusn4vHLIbtTipqDRWukk4Ti6%2BJmDRbBeprrnyi3J53I%2F9XUkm%2BUjG43MBixijhnq2sJkIhB7chlxC9VnqlGyKxEQbzAD7s3U8QOKIG%2BNyAk4ThhvEdv%2FaASUnLPZKdjSboD2da7jpI9YlsWOEWfAi1HkFH74HZ2IHqbqZe820s%2FkflOIKLoekMWu5KxlLmAldsnVLNLhwK%2FiVtLBKLbNlPDMy42yPAXLJgsZFS32TUb%2Bf2iR0608ESSuJ6flHrh7c1yDGCh05I8yOG6q5sjRS1Dx8%2B0vfptfbehDFo5rytR%2BDrTcg29BYakVSF74BS2Sr4PlBHecS1W4FcC87roVBE5dSistJ4b8ofMa6BZuZUsS4tFyIq%2FzgVGXA0F3bJQBuvI1oIVp2ihaJlo%2Be6Veloo5UECXalED6Qln4F8P5B%2BisiYsFq9K%2BWxzvy58U6NrbZmN3K7%2By4iE2yUTqeWhDvtZK4Oc7DXp%2FrwUb%2F1%2Bgd%2BhpzMK3rzskGOqUBTgrFtIvWiVhg87Z5M403eGROth307r6DIagaaNhP%2Bp%2BefgR%2BjT41UsJE%2BwCD3gspp6x7Wd0zFNfNx%2BBKkZWzsXLU6CVYhSPSmbB1aLJ65AxvDP5kk8OfCX8x1uTHdmoVpFxt3B20XgDqKwdyhwaWBZAgBEA21IjB2kHIJel4V4basq0zXi2s5zcs9b9edLZUv8gVUez%2Bg4giE%2BDJvkL37r5lQS7%2B&X-Amz-Signature=11a3aa8b1a7f5d45177bc2b65e0b16236a59d5d8479be4e7f4c31880bc2bc6a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJCGZPBO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FrXc9nOHxyT5rCu%2B4fsjGHEQvGasylVJiemgVwT2LKAiEA%2B%2BRGDGk5CwhGVREM7MaPzBLgxupvas%2BQtgO4fXlJTGAq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIFUVbTrXa8Ay6HRSCrcA3J7KMHpw3z3RLf4Xqiit6qAATVZt6CwpwaIloiMxXHRKD02G2%2BP40HzNGPxb88EUOOsh89FfZF7LFrG5jIGaZP5NNNDv55mgbSitQ5DkByJtCCNeJztS7XisQGOgvFRO2K0Q6BZ8ZZZmVusn4vHLIbtTipqDRWukk4Ti6%2BJmDRbBeprrnyi3J53I%2F9XUkm%2BUjG43MBixijhnq2sJkIhB7chlxC9VnqlGyKxEQbzAD7s3U8QOKIG%2BNyAk4ThhvEdv%2FaASUnLPZKdjSboD2da7jpI9YlsWOEWfAi1HkFH74HZ2IHqbqZe820s%2FkflOIKLoekMWu5KxlLmAldsnVLNLhwK%2FiVtLBKLbNlPDMy42yPAXLJgsZFS32TUb%2Bf2iR0608ESSuJ6flHrh7c1yDGCh05I8yOG6q5sjRS1Dx8%2B0vfptfbehDFo5rytR%2BDrTcg29BYakVSF74BS2Sr4PlBHecS1W4FcC87roVBE5dSistJ4b8ofMa6BZuZUsS4tFyIq%2FzgVGXA0F3bJQBuvI1oIVp2ihaJlo%2Be6Veloo5UECXalED6Qln4F8P5B%2BisiYsFq9K%2BWxzvy58U6NrbZmN3K7%2By4iE2yUTqeWhDvtZK4Oc7DXp%2FrwUb%2F1%2Bgd%2BhpzMK3rzskGOqUBTgrFtIvWiVhg87Z5M403eGROth307r6DIagaaNhP%2Bp%2BefgR%2BjT41UsJE%2BwCD3gspp6x7Wd0zFNfNx%2BBKkZWzsXLU6CVYhSPSmbB1aLJ65AxvDP5kk8OfCX8x1uTHdmoVpFxt3B20XgDqKwdyhwaWBZAgBEA21IjB2kHIJel4V4basq0zXi2s5zcs9b9edLZUv8gVUez%2Bg4giE%2BDJvkL37r5lQS7%2B&X-Amz-Signature=e8157156584822a3731563e0d53f523c3536511212d61461d243cd10e317b814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJCGZPBO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FrXc9nOHxyT5rCu%2B4fsjGHEQvGasylVJiemgVwT2LKAiEA%2B%2BRGDGk5CwhGVREM7MaPzBLgxupvas%2BQtgO4fXlJTGAq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIFUVbTrXa8Ay6HRSCrcA3J7KMHpw3z3RLf4Xqiit6qAATVZt6CwpwaIloiMxXHRKD02G2%2BP40HzNGPxb88EUOOsh89FfZF7LFrG5jIGaZP5NNNDv55mgbSitQ5DkByJtCCNeJztS7XisQGOgvFRO2K0Q6BZ8ZZZmVusn4vHLIbtTipqDRWukk4Ti6%2BJmDRbBeprrnyi3J53I%2F9XUkm%2BUjG43MBixijhnq2sJkIhB7chlxC9VnqlGyKxEQbzAD7s3U8QOKIG%2BNyAk4ThhvEdv%2FaASUnLPZKdjSboD2da7jpI9YlsWOEWfAi1HkFH74HZ2IHqbqZe820s%2FkflOIKLoekMWu5KxlLmAldsnVLNLhwK%2FiVtLBKLbNlPDMy42yPAXLJgsZFS32TUb%2Bf2iR0608ESSuJ6flHrh7c1yDGCh05I8yOG6q5sjRS1Dx8%2B0vfptfbehDFo5rytR%2BDrTcg29BYakVSF74BS2Sr4PlBHecS1W4FcC87roVBE5dSistJ4b8ofMa6BZuZUsS4tFyIq%2FzgVGXA0F3bJQBuvI1oIVp2ihaJlo%2Be6Veloo5UECXalED6Qln4F8P5B%2BisiYsFq9K%2BWxzvy58U6NrbZmN3K7%2By4iE2yUTqeWhDvtZK4Oc7DXp%2FrwUb%2F1%2Bgd%2BhpzMK3rzskGOqUBTgrFtIvWiVhg87Z5M403eGROth307r6DIagaaNhP%2Bp%2BefgR%2BjT41UsJE%2BwCD3gspp6x7Wd0zFNfNx%2BBKkZWzsXLU6CVYhSPSmbB1aLJ65AxvDP5kk8OfCX8x1uTHdmoVpFxt3B20XgDqKwdyhwaWBZAgBEA21IjB2kHIJel4V4basq0zXi2s5zcs9b9edLZUv8gVUez%2Bg4giE%2BDJvkL37r5lQS7%2B&X-Amz-Signature=e2056c528076cfe81366bbcda4689c4762f38b84e6d25bf09db409065f09cc78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJCGZPBO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FrXc9nOHxyT5rCu%2B4fsjGHEQvGasylVJiemgVwT2LKAiEA%2B%2BRGDGk5CwhGVREM7MaPzBLgxupvas%2BQtgO4fXlJTGAq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIFUVbTrXa8Ay6HRSCrcA3J7KMHpw3z3RLf4Xqiit6qAATVZt6CwpwaIloiMxXHRKD02G2%2BP40HzNGPxb88EUOOsh89FfZF7LFrG5jIGaZP5NNNDv55mgbSitQ5DkByJtCCNeJztS7XisQGOgvFRO2K0Q6BZ8ZZZmVusn4vHLIbtTipqDRWukk4Ti6%2BJmDRbBeprrnyi3J53I%2F9XUkm%2BUjG43MBixijhnq2sJkIhB7chlxC9VnqlGyKxEQbzAD7s3U8QOKIG%2BNyAk4ThhvEdv%2FaASUnLPZKdjSboD2da7jpI9YlsWOEWfAi1HkFH74HZ2IHqbqZe820s%2FkflOIKLoekMWu5KxlLmAldsnVLNLhwK%2FiVtLBKLbNlPDMy42yPAXLJgsZFS32TUb%2Bf2iR0608ESSuJ6flHrh7c1yDGCh05I8yOG6q5sjRS1Dx8%2B0vfptfbehDFo5rytR%2BDrTcg29BYakVSF74BS2Sr4PlBHecS1W4FcC87roVBE5dSistJ4b8ofMa6BZuZUsS4tFyIq%2FzgVGXA0F3bJQBuvI1oIVp2ihaJlo%2Be6Veloo5UECXalED6Qln4F8P5B%2BisiYsFq9K%2BWxzvy58U6NrbZmN3K7%2By4iE2yUTqeWhDvtZK4Oc7DXp%2FrwUb%2F1%2Bgd%2BhpzMK3rzskGOqUBTgrFtIvWiVhg87Z5M403eGROth307r6DIagaaNhP%2Bp%2BefgR%2BjT41UsJE%2BwCD3gspp6x7Wd0zFNfNx%2BBKkZWzsXLU6CVYhSPSmbB1aLJ65AxvDP5kk8OfCX8x1uTHdmoVpFxt3B20XgDqKwdyhwaWBZAgBEA21IjB2kHIJel4V4basq0zXi2s5zcs9b9edLZUv8gVUez%2Bg4giE%2BDJvkL37r5lQS7%2B&X-Amz-Signature=bd7c2d81e36caeb35512a0470e6583d3ba0d3c406088cf90cdd081a6553a19a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJCGZPBO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FrXc9nOHxyT5rCu%2B4fsjGHEQvGasylVJiemgVwT2LKAiEA%2B%2BRGDGk5CwhGVREM7MaPzBLgxupvas%2BQtgO4fXlJTGAq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIFUVbTrXa8Ay6HRSCrcA3J7KMHpw3z3RLf4Xqiit6qAATVZt6CwpwaIloiMxXHRKD02G2%2BP40HzNGPxb88EUOOsh89FfZF7LFrG5jIGaZP5NNNDv55mgbSitQ5DkByJtCCNeJztS7XisQGOgvFRO2K0Q6BZ8ZZZmVusn4vHLIbtTipqDRWukk4Ti6%2BJmDRbBeprrnyi3J53I%2F9XUkm%2BUjG43MBixijhnq2sJkIhB7chlxC9VnqlGyKxEQbzAD7s3U8QOKIG%2BNyAk4ThhvEdv%2FaASUnLPZKdjSboD2da7jpI9YlsWOEWfAi1HkFH74HZ2IHqbqZe820s%2FkflOIKLoekMWu5KxlLmAldsnVLNLhwK%2FiVtLBKLbNlPDMy42yPAXLJgsZFS32TUb%2Bf2iR0608ESSuJ6flHrh7c1yDGCh05I8yOG6q5sjRS1Dx8%2B0vfptfbehDFo5rytR%2BDrTcg29BYakVSF74BS2Sr4PlBHecS1W4FcC87roVBE5dSistJ4b8ofMa6BZuZUsS4tFyIq%2FzgVGXA0F3bJQBuvI1oIVp2ihaJlo%2Be6Veloo5UECXalED6Qln4F8P5B%2BisiYsFq9K%2BWxzvy58U6NrbZmN3K7%2By4iE2yUTqeWhDvtZK4Oc7DXp%2FrwUb%2F1%2Bgd%2BhpzMK3rzskGOqUBTgrFtIvWiVhg87Z5M403eGROth307r6DIagaaNhP%2Bp%2BefgR%2BjT41UsJE%2BwCD3gspp6x7Wd0zFNfNx%2BBKkZWzsXLU6CVYhSPSmbB1aLJ65AxvDP5kk8OfCX8x1uTHdmoVpFxt3B20XgDqKwdyhwaWBZAgBEA21IjB2kHIJel4V4basq0zXi2s5zcs9b9edLZUv8gVUez%2Bg4giE%2BDJvkL37r5lQS7%2B&X-Amz-Signature=b37e556eea7aa3c35696a73b46081d912206d3b6c41e54965036c657e08d05d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3ZOTNN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8G5nhP1UD6Qsg4aeeHHb%2FhKei%2FuHLlt59NlgqU8VMRAIgOzc61%2B9lW2V1NeRzfqBJidIUjNDs%2FlwS2wSJeFB0ENkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDN1clzkA3IacX0YRgyrcA091OBq0dGGPjE%2BMS9cIEnkTaG7QRARMMKXdBpYrQSTGaLD0U7TSO7FpXlP%2BrP42WsHnLQBHFudabvlGD%2F4FaCW80RK4%2BozzHK%2BtFaOmKI6PgcSZoh9spAG51fQy6tnVNPC5vZQxOxd7DE51AWiAKd8JNi6R4PlAgCLUDn%2F5vhyjCAv5pV75myWse7lAXkK6EDOZ6lpmu7l3%2B0V%2B4j0NZELPJhgCbecGA%2FFYZsYEDN3iHrJSToklN0XjJqw0iWMLUy6W%2FS4XD1iLcPVwpls92dzr1q%2FNBvRlFFCknkn2oO3rhrWRhXrppqnLj1oueA1O%2BJ1Zxcz31G1b8RYbtb7lk%2FReXUabuGSF2VUIKmoiWa2txMf20VG%2FhEu0CwKDu6VRoJ%2FMKqCEBi5st6MJc5VZ3jxW1aDegHMTWJVNCpVvEtr1CekLFEVEopEIUTNHDm3Jl7%2FQ0RHb4s%2FJNi70%2BuVANa3UBxhWu9OVq5kN5ZpbcnH2ut7gItPWEBnusv3RtKe8xiYIrSz3KsX1EUiWoNxXriN5P6kmDLSbQdrGy%2FmVKat5g8nic%2Br%2B4kK1ww1znRyBnqKWlL1jrBn3nNUaY0ZWVo%2FhLedXCULXQ4FIgHIvwo8XqoPj6UG2hfhQguhxMJXrzskGOqUBq2oiLROm5aitj1cpxg0fb%2BK3g1CNp7S4KZ7jQfKb%2Ffbjankz0gAXy1ouxyZZlOATqOUN44t9cEhdAGFGGF0pATepu0AQVgL8cG4AE51jLGIAPMUzsnTd6DGt34Q4z64%2BnWCkDK4Zl4szEYdC7xrx%2BA87cbtdEMkPb6G1vXHmT3CiiBaTHFlqA%2B5lOBcBv88%2FjgiY2K8afEmMx9V%2FkE1%2F7Or0y6i7&X-Amz-Signature=ffcc522a5afc543d510beef68a52963f54e3f14da0b59233b9adfdd03602c3d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

