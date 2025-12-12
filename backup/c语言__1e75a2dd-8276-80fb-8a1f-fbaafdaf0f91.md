
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFVCMMQD%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCF4JDsc7QGistYKaN0OcjIIGdjKhGHDlZOiIVP8iI0TAIgdmJVBrxW9eQRo2UTUDZ1I93B2NReRVp%2B4bHq1Jx3VrQqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbfODwMQIjZCIGCmircAxqk00%2FJfxO2l%2BIWDCTi3ztoY52u4mkGClq343qGWeiP4CO2WZOhQawr7WvU4BzaQA%2BVmzrnFSagUBnjG8%2FKieJ%2B35AE13OF%2BJt9NAFJgsuVOAI%2FxKBWZ9SBaYM3ZwbFtOfTSEkfYPjhdWQagFEFjwGmSzksTGEhqe1PyckUqjuSJHVy7wwnuz3qW1TGBBZKYRXuV1%2FbqtQF9kK8qEs2wFAugQZH3eyPOqzMcKVhaNegdFx9c4FQuM5rN7l5%2FHvQYaER%2F30VSrvztBWbaTSdA1nhbFPREIgMAd7KEu66g%2BjOcCEmEO63GRQJ8Ynbm9M6gjzhz09KsRYYJsIrSi4%2FFX74m1KLiMze7rtk%2FrOHpB4mVxtP%2BUaKJHCYzcihgd6UAIEpwiuRJbeNMpQC9v3H08pS9TTG8vsyHpgVphEXF6pQ2GZTZTiJ5ru36HAAiBRQJVINSb%2F0LvMzA44NUkdEWm27wZZH1ipJ%2FmOlLWf6KtDr52dOFB5mlJ%2FPGYPSxN10Mx1mZUhz5v2qA%2F%2BLMGJK96urceLdF8y3HQChT8%2FKfTYBlnB1DllNkac58YaoyPPcDuguOBqFrwChitzfJQRrF3RiIWHwY4glXvKmkkaHPJA01U1IiBOMBSweXyuBMNfg7ckGOqUB952RjwmG%2FCImNHgzXy7Pl6as2260cgodKEfdZK9uUP4wyknf42NLFjHrOfFiXwtS6GKYhxLpvXfat%2Bhm9wPLfunV4gQ8qCl49AaGnibhs5hqc8MwVMN8IN16Sty1xM6XrWUxQmXVtXF4pMqBsZu4uWEKsMFGzr3dwH%2Fwn%2BETm1JvQwWVNQ3K2MPVaCtkW7pO58rm16Jwl8x3WuiwqjfjvQ9PWKnY&X-Amz-Signature=9fe2faa23b6b9dc32124e30bf3d1dbcbcbdb6060b6ef482272c535936bbfd49b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NYSGE5L%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQC1lQflhcExyKivH4xRD4jEgCrV0F9Tl6mAVQEAtpelcwIhAKQfR0VnLWWlClKQSwf33raXiIeXLzabQj5%2BDNGXTMFIKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk1YKGxa7U%2FaHYyxIq3ANgxj%2F%2FcMtMML5kz9yE9bvYIGio2M6cTMt5X%2FEaxoKihwmYDAeSIAVvUUIrIeTr1NUNQSxCsJNaJbL02v9NW9I9J8WVS7XEeX5%2FXoH0LVEkwj2CjJynCUz3AA3NMVn%2BSSUWC9bAGcJIzGhgqdJR6MkSEarFQs8LREhqxXZ8IPymyVCfynzorxCRisxBHmHNPinctxUyRNQNAnBNZ0oSZVmF%2F6kzbOlAsxzb5%2BLOfM6fLuIv5xWp%2F1Z4PNnxT7ECae73rB0QjMkkjuBWfHPqmOBaVMqMhWEPc4VN5o7mfxNVsIyqkc7NKiC34te3nDcCozDucSf4R1vIqeVlbJyWdADbjHSpViCbG%2BR%2FHFZl5iKqUBD1%2FZJXhh7nWsUpXc3qhUGUAh2ItxxmkiqtdCtqxLOSJlkWb2ADmC23Ntf8BoYJUxj%2BArJtL5NXkBwxjZimibroLOZG6zjzK1GGcYaQt0wLDFVdGyt8Hl3pJlHtN7HYvcMDGFIKG07WdI2SxjityV2bTXIlAFmBC2ujfz82ncZAITcSFdRo9y6o5G6AJJwSYeb35nrXmNqnM%2BqfJ9lIxoHUgc67yFFay1Z%2FjQ6NwVZPC%2BUcxflJVI7Jr0Uy8IevgqeF5hOUmPgnEV%2B79zDQ3%2B3JBjqkAUyjZvzR4D1KqIIN9bQXWGWwk1xsiI%2FeJsNdYCkrImOBYRGy%2BXTEIA4b6uKAbMknJa5wHviuMqIBhGnLAuR3E%2FhPSwY%2FzLdWvZVzB2fMfePxnnASF07Auxbnwjl%2BofwrlC3SIHaciPDBJWfm5FJbZz1rvYoImP40R2tVB%2B1k%2BQp3yeRvvjKJMr%2Bp7Q%2FQnwQiv5LCaq%2Fv3a%2FBs2o22TQfN296COFO&X-Amz-Signature=f17b0aa8708e0f1f04b6021600579fa5dab96eff6ee6eaf5445b51c1241eff93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NYSGE5L%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQC1lQflhcExyKivH4xRD4jEgCrV0F9Tl6mAVQEAtpelcwIhAKQfR0VnLWWlClKQSwf33raXiIeXLzabQj5%2BDNGXTMFIKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk1YKGxa7U%2FaHYyxIq3ANgxj%2F%2FcMtMML5kz9yE9bvYIGio2M6cTMt5X%2FEaxoKihwmYDAeSIAVvUUIrIeTr1NUNQSxCsJNaJbL02v9NW9I9J8WVS7XEeX5%2FXoH0LVEkwj2CjJynCUz3AA3NMVn%2BSSUWC9bAGcJIzGhgqdJR6MkSEarFQs8LREhqxXZ8IPymyVCfynzorxCRisxBHmHNPinctxUyRNQNAnBNZ0oSZVmF%2F6kzbOlAsxzb5%2BLOfM6fLuIv5xWp%2F1Z4PNnxT7ECae73rB0QjMkkjuBWfHPqmOBaVMqMhWEPc4VN5o7mfxNVsIyqkc7NKiC34te3nDcCozDucSf4R1vIqeVlbJyWdADbjHSpViCbG%2BR%2FHFZl5iKqUBD1%2FZJXhh7nWsUpXc3qhUGUAh2ItxxmkiqtdCtqxLOSJlkWb2ADmC23Ntf8BoYJUxj%2BArJtL5NXkBwxjZimibroLOZG6zjzK1GGcYaQt0wLDFVdGyt8Hl3pJlHtN7HYvcMDGFIKG07WdI2SxjityV2bTXIlAFmBC2ujfz82ncZAITcSFdRo9y6o5G6AJJwSYeb35nrXmNqnM%2BqfJ9lIxoHUgc67yFFay1Z%2FjQ6NwVZPC%2BUcxflJVI7Jr0Uy8IevgqeF5hOUmPgnEV%2B79zDQ3%2B3JBjqkAUyjZvzR4D1KqIIN9bQXWGWwk1xsiI%2FeJsNdYCkrImOBYRGy%2BXTEIA4b6uKAbMknJa5wHviuMqIBhGnLAuR3E%2FhPSwY%2FzLdWvZVzB2fMfePxnnASF07Auxbnwjl%2BofwrlC3SIHaciPDBJWfm5FJbZz1rvYoImP40R2tVB%2B1k%2BQp3yeRvvjKJMr%2Bp7Q%2FQnwQiv5LCaq%2Fv3a%2FBs2o22TQfN296COFO&X-Amz-Signature=f038ae602b537037a8b4c10783e97084dcaf10ed5c564f409a0f65a0265b1866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377MHEJD%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC07AU9%2BXIKwZzufzbrk8Ra3tljYkjM56bo5GZsjkg1ngIgYTxxeIcLvqbl%2BsZTNWHIvDjyYk5i%2BrBtnpiM6fseEqUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5npGzlBJ%2BW2mZFRyrcA6vbiCGJUqKzIllzkk6S7CNcQcR4RC2%2BWn2%2BrnQ5AI8905500wiVpbWLSsGSn%2F1t2TOHpaWhKXT8K%2BOpYxNuKZQ%2BvZRHjl3aISsTDkRbLb044qi78OKGG0lVsYNPSxfzTd9r46l6H9za3B%2Bjwr15MAntA6M1A7EhsLKWzZS%2BEm8WLHmGZ5achobbGLruA3Sw%2BNXOCgWK5Pxmuk7WOg8ij92GRST2r4%2B2nhbB%2FdkixY6g0%2FlZAds4YEoe5LgjsrDBModptetynCAk9wE%2FOwy1kuCESzxHDqR%2BcgoQ7OAdgiWpV5AzMHEM1HYEmy%2F23v7FY9fJtD45xaxUnsUBagIw0G3FY93XssCunLjaElmwbKtNRAtgtRuvoqpnm69cY9ldDhQ36H32aoMsvcZzEPLuisftZe3K1m7JQbibYXqO2g1%2BsZObs074oXfX%2F6OxD6DnBK9owST6vrJ5mY%2FsQeXkS4pvLK%2Fvyb7EgI1AdfnKN2XaZou9B5Gbi%2BhzAdQpKodPg5qcH%2B%2BRxPsRE7gj7ngQ8KyQyxHnrIsRPNcaqyXNDIPUlEpQbAxQLLvE4TKYSybG7E2UEt02rfTI%2FqjxLTKjQVDftMn8cSu3l1pQpBLXkMp4%2B4JHRFyK%2FPQA9xoDML3f7ckGOqUBW%2BW8Q7%2F6VvEskQMa8Rc%2FASCk%2BhS1CPGI0UpFk768g%2F0yJuGD0lSXC5yDe1hiSCilC2wtz5%2Fkx10CxQS%2FsmbMgtD97zY6BKtbwZY%2BZyBXzRpH1dufdpvyQEaDupIkS37xLiUfgBAUqZcngCHbtZtajGL9Wg1eJmm984tSbKMcmimvMoBf0Y1LDPVrYjl%2Bi8PCeN3dG77ImOFQR1jdejX8SAVO9yj%2B&X-Amz-Signature=0f9c9b8391adfd27e014947803aee90c47bea8fe4c632384a594c71ce0797f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377MHEJD%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC07AU9%2BXIKwZzufzbrk8Ra3tljYkjM56bo5GZsjkg1ngIgYTxxeIcLvqbl%2BsZTNWHIvDjyYk5i%2BrBtnpiM6fseEqUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5npGzlBJ%2BW2mZFRyrcA6vbiCGJUqKzIllzkk6S7CNcQcR4RC2%2BWn2%2BrnQ5AI8905500wiVpbWLSsGSn%2F1t2TOHpaWhKXT8K%2BOpYxNuKZQ%2BvZRHjl3aISsTDkRbLb044qi78OKGG0lVsYNPSxfzTd9r46l6H9za3B%2Bjwr15MAntA6M1A7EhsLKWzZS%2BEm8WLHmGZ5achobbGLruA3Sw%2BNXOCgWK5Pxmuk7WOg8ij92GRST2r4%2B2nhbB%2FdkixY6g0%2FlZAds4YEoe5LgjsrDBModptetynCAk9wE%2FOwy1kuCESzxHDqR%2BcgoQ7OAdgiWpV5AzMHEM1HYEmy%2F23v7FY9fJtD45xaxUnsUBagIw0G3FY93XssCunLjaElmwbKtNRAtgtRuvoqpnm69cY9ldDhQ36H32aoMsvcZzEPLuisftZe3K1m7JQbibYXqO2g1%2BsZObs074oXfX%2F6OxD6DnBK9owST6vrJ5mY%2FsQeXkS4pvLK%2Fvyb7EgI1AdfnKN2XaZou9B5Gbi%2BhzAdQpKodPg5qcH%2B%2BRxPsRE7gj7ngQ8KyQyxHnrIsRPNcaqyXNDIPUlEpQbAxQLLvE4TKYSybG7E2UEt02rfTI%2FqjxLTKjQVDftMn8cSu3l1pQpBLXkMp4%2B4JHRFyK%2FPQA9xoDML3f7ckGOqUBW%2BW8Q7%2F6VvEskQMa8Rc%2FASCk%2BhS1CPGI0UpFk768g%2F0yJuGD0lSXC5yDe1hiSCilC2wtz5%2Fkx10CxQS%2FsmbMgtD97zY6BKtbwZY%2BZyBXzRpH1dufdpvyQEaDupIkS37xLiUfgBAUqZcngCHbtZtajGL9Wg1eJmm984tSbKMcmimvMoBf0Y1LDPVrYjl%2Bi8PCeN3dG77ImOFQR1jdejX8SAVO9yj%2B&X-Amz-Signature=0caaac9d206866fa6213c710d5aa8c1c9242b3bf7d5b0b10e50bc6b8b9dbcee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377MHEJD%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC07AU9%2BXIKwZzufzbrk8Ra3tljYkjM56bo5GZsjkg1ngIgYTxxeIcLvqbl%2BsZTNWHIvDjyYk5i%2BrBtnpiM6fseEqUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5npGzlBJ%2BW2mZFRyrcA6vbiCGJUqKzIllzkk6S7CNcQcR4RC2%2BWn2%2BrnQ5AI8905500wiVpbWLSsGSn%2F1t2TOHpaWhKXT8K%2BOpYxNuKZQ%2BvZRHjl3aISsTDkRbLb044qi78OKGG0lVsYNPSxfzTd9r46l6H9za3B%2Bjwr15MAntA6M1A7EhsLKWzZS%2BEm8WLHmGZ5achobbGLruA3Sw%2BNXOCgWK5Pxmuk7WOg8ij92GRST2r4%2B2nhbB%2FdkixY6g0%2FlZAds4YEoe5LgjsrDBModptetynCAk9wE%2FOwy1kuCESzxHDqR%2BcgoQ7OAdgiWpV5AzMHEM1HYEmy%2F23v7FY9fJtD45xaxUnsUBagIw0G3FY93XssCunLjaElmwbKtNRAtgtRuvoqpnm69cY9ldDhQ36H32aoMsvcZzEPLuisftZe3K1m7JQbibYXqO2g1%2BsZObs074oXfX%2F6OxD6DnBK9owST6vrJ5mY%2FsQeXkS4pvLK%2Fvyb7EgI1AdfnKN2XaZou9B5Gbi%2BhzAdQpKodPg5qcH%2B%2BRxPsRE7gj7ngQ8KyQyxHnrIsRPNcaqyXNDIPUlEpQbAxQLLvE4TKYSybG7E2UEt02rfTI%2FqjxLTKjQVDftMn8cSu3l1pQpBLXkMp4%2B4JHRFyK%2FPQA9xoDML3f7ckGOqUBW%2BW8Q7%2F6VvEskQMa8Rc%2FASCk%2BhS1CPGI0UpFk768g%2F0yJuGD0lSXC5yDe1hiSCilC2wtz5%2Fkx10CxQS%2FsmbMgtD97zY6BKtbwZY%2BZyBXzRpH1dufdpvyQEaDupIkS37xLiUfgBAUqZcngCHbtZtajGL9Wg1eJmm984tSbKMcmimvMoBf0Y1LDPVrYjl%2Bi8PCeN3dG77ImOFQR1jdejX8SAVO9yj%2B&X-Amz-Signature=70a91849b3314c8d64bd1fb8fc3a58145d7e638f8e7a0c0ff67ac85e498891e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377MHEJD%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC07AU9%2BXIKwZzufzbrk8Ra3tljYkjM56bo5GZsjkg1ngIgYTxxeIcLvqbl%2BsZTNWHIvDjyYk5i%2BrBtnpiM6fseEqUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5npGzlBJ%2BW2mZFRyrcA6vbiCGJUqKzIllzkk6S7CNcQcR4RC2%2BWn2%2BrnQ5AI8905500wiVpbWLSsGSn%2F1t2TOHpaWhKXT8K%2BOpYxNuKZQ%2BvZRHjl3aISsTDkRbLb044qi78OKGG0lVsYNPSxfzTd9r46l6H9za3B%2Bjwr15MAntA6M1A7EhsLKWzZS%2BEm8WLHmGZ5achobbGLruA3Sw%2BNXOCgWK5Pxmuk7WOg8ij92GRST2r4%2B2nhbB%2FdkixY6g0%2FlZAds4YEoe5LgjsrDBModptetynCAk9wE%2FOwy1kuCESzxHDqR%2BcgoQ7OAdgiWpV5AzMHEM1HYEmy%2F23v7FY9fJtD45xaxUnsUBagIw0G3FY93XssCunLjaElmwbKtNRAtgtRuvoqpnm69cY9ldDhQ36H32aoMsvcZzEPLuisftZe3K1m7JQbibYXqO2g1%2BsZObs074oXfX%2F6OxD6DnBK9owST6vrJ5mY%2FsQeXkS4pvLK%2Fvyb7EgI1AdfnKN2XaZou9B5Gbi%2BhzAdQpKodPg5qcH%2B%2BRxPsRE7gj7ngQ8KyQyxHnrIsRPNcaqyXNDIPUlEpQbAxQLLvE4TKYSybG7E2UEt02rfTI%2FqjxLTKjQVDftMn8cSu3l1pQpBLXkMp4%2B4JHRFyK%2FPQA9xoDML3f7ckGOqUBW%2BW8Q7%2F6VvEskQMa8Rc%2FASCk%2BhS1CPGI0UpFk768g%2F0yJuGD0lSXC5yDe1hiSCilC2wtz5%2Fkx10CxQS%2FsmbMgtD97zY6BKtbwZY%2BZyBXzRpH1dufdpvyQEaDupIkS37xLiUfgBAUqZcngCHbtZtajGL9Wg1eJmm984tSbKMcmimvMoBf0Y1LDPVrYjl%2Bi8PCeN3dG77ImOFQR1jdejX8SAVO9yj%2B&X-Amz-Signature=f03814655ea51ecf079d0e5233fe0d2fe2141bd9932590288016c70f524b8de2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377MHEJD%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC07AU9%2BXIKwZzufzbrk8Ra3tljYkjM56bo5GZsjkg1ngIgYTxxeIcLvqbl%2BsZTNWHIvDjyYk5i%2BrBtnpiM6fseEqUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5npGzlBJ%2BW2mZFRyrcA6vbiCGJUqKzIllzkk6S7CNcQcR4RC2%2BWn2%2BrnQ5AI8905500wiVpbWLSsGSn%2F1t2TOHpaWhKXT8K%2BOpYxNuKZQ%2BvZRHjl3aISsTDkRbLb044qi78OKGG0lVsYNPSxfzTd9r46l6H9za3B%2Bjwr15MAntA6M1A7EhsLKWzZS%2BEm8WLHmGZ5achobbGLruA3Sw%2BNXOCgWK5Pxmuk7WOg8ij92GRST2r4%2B2nhbB%2FdkixY6g0%2FlZAds4YEoe5LgjsrDBModptetynCAk9wE%2FOwy1kuCESzxHDqR%2BcgoQ7OAdgiWpV5AzMHEM1HYEmy%2F23v7FY9fJtD45xaxUnsUBagIw0G3FY93XssCunLjaElmwbKtNRAtgtRuvoqpnm69cY9ldDhQ36H32aoMsvcZzEPLuisftZe3K1m7JQbibYXqO2g1%2BsZObs074oXfX%2F6OxD6DnBK9owST6vrJ5mY%2FsQeXkS4pvLK%2Fvyb7EgI1AdfnKN2XaZou9B5Gbi%2BhzAdQpKodPg5qcH%2B%2BRxPsRE7gj7ngQ8KyQyxHnrIsRPNcaqyXNDIPUlEpQbAxQLLvE4TKYSybG7E2UEt02rfTI%2FqjxLTKjQVDftMn8cSu3l1pQpBLXkMp4%2B4JHRFyK%2FPQA9xoDML3f7ckGOqUBW%2BW8Q7%2F6VvEskQMa8Rc%2FASCk%2BhS1CPGI0UpFk768g%2F0yJuGD0lSXC5yDe1hiSCilC2wtz5%2Fkx10CxQS%2FsmbMgtD97zY6BKtbwZY%2BZyBXzRpH1dufdpvyQEaDupIkS37xLiUfgBAUqZcngCHbtZtajGL9Wg1eJmm984tSbKMcmimvMoBf0Y1LDPVrYjl%2Bi8PCeN3dG77ImOFQR1jdejX8SAVO9yj%2B&X-Amz-Signature=a64b6945ec02a2cc1ceaad85187f3a1620d4fdb820e830b629bd8de466ce89ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377MHEJD%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC07AU9%2BXIKwZzufzbrk8Ra3tljYkjM56bo5GZsjkg1ngIgYTxxeIcLvqbl%2BsZTNWHIvDjyYk5i%2BrBtnpiM6fseEqUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5npGzlBJ%2BW2mZFRyrcA6vbiCGJUqKzIllzkk6S7CNcQcR4RC2%2BWn2%2BrnQ5AI8905500wiVpbWLSsGSn%2F1t2TOHpaWhKXT8K%2BOpYxNuKZQ%2BvZRHjl3aISsTDkRbLb044qi78OKGG0lVsYNPSxfzTd9r46l6H9za3B%2Bjwr15MAntA6M1A7EhsLKWzZS%2BEm8WLHmGZ5achobbGLruA3Sw%2BNXOCgWK5Pxmuk7WOg8ij92GRST2r4%2B2nhbB%2FdkixY6g0%2FlZAds4YEoe5LgjsrDBModptetynCAk9wE%2FOwy1kuCESzxHDqR%2BcgoQ7OAdgiWpV5AzMHEM1HYEmy%2F23v7FY9fJtD45xaxUnsUBagIw0G3FY93XssCunLjaElmwbKtNRAtgtRuvoqpnm69cY9ldDhQ36H32aoMsvcZzEPLuisftZe3K1m7JQbibYXqO2g1%2BsZObs074oXfX%2F6OxD6DnBK9owST6vrJ5mY%2FsQeXkS4pvLK%2Fvyb7EgI1AdfnKN2XaZou9B5Gbi%2BhzAdQpKodPg5qcH%2B%2BRxPsRE7gj7ngQ8KyQyxHnrIsRPNcaqyXNDIPUlEpQbAxQLLvE4TKYSybG7E2UEt02rfTI%2FqjxLTKjQVDftMn8cSu3l1pQpBLXkMp4%2B4JHRFyK%2FPQA9xoDML3f7ckGOqUBW%2BW8Q7%2F6VvEskQMa8Rc%2FASCk%2BhS1CPGI0UpFk768g%2F0yJuGD0lSXC5yDe1hiSCilC2wtz5%2Fkx10CxQS%2FsmbMgtD97zY6BKtbwZY%2BZyBXzRpH1dufdpvyQEaDupIkS37xLiUfgBAUqZcngCHbtZtajGL9Wg1eJmm984tSbKMcmimvMoBf0Y1LDPVrYjl%2Bi8PCeN3dG77ImOFQR1jdejX8SAVO9yj%2B&X-Amz-Signature=f8280ade1a0954723cc9dd3fa21c87de48ccfc51fdd9fdeb8b002008c11bb35a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377MHEJD%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC07AU9%2BXIKwZzufzbrk8Ra3tljYkjM56bo5GZsjkg1ngIgYTxxeIcLvqbl%2BsZTNWHIvDjyYk5i%2BrBtnpiM6fseEqUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5npGzlBJ%2BW2mZFRyrcA6vbiCGJUqKzIllzkk6S7CNcQcR4RC2%2BWn2%2BrnQ5AI8905500wiVpbWLSsGSn%2F1t2TOHpaWhKXT8K%2BOpYxNuKZQ%2BvZRHjl3aISsTDkRbLb044qi78OKGG0lVsYNPSxfzTd9r46l6H9za3B%2Bjwr15MAntA6M1A7EhsLKWzZS%2BEm8WLHmGZ5achobbGLruA3Sw%2BNXOCgWK5Pxmuk7WOg8ij92GRST2r4%2B2nhbB%2FdkixY6g0%2FlZAds4YEoe5LgjsrDBModptetynCAk9wE%2FOwy1kuCESzxHDqR%2BcgoQ7OAdgiWpV5AzMHEM1HYEmy%2F23v7FY9fJtD45xaxUnsUBagIw0G3FY93XssCunLjaElmwbKtNRAtgtRuvoqpnm69cY9ldDhQ36H32aoMsvcZzEPLuisftZe3K1m7JQbibYXqO2g1%2BsZObs074oXfX%2F6OxD6DnBK9owST6vrJ5mY%2FsQeXkS4pvLK%2Fvyb7EgI1AdfnKN2XaZou9B5Gbi%2BhzAdQpKodPg5qcH%2B%2BRxPsRE7gj7ngQ8KyQyxHnrIsRPNcaqyXNDIPUlEpQbAxQLLvE4TKYSybG7E2UEt02rfTI%2FqjxLTKjQVDftMn8cSu3l1pQpBLXkMp4%2B4JHRFyK%2FPQA9xoDML3f7ckGOqUBW%2BW8Q7%2F6VvEskQMa8Rc%2FASCk%2BhS1CPGI0UpFk768g%2F0yJuGD0lSXC5yDe1hiSCilC2wtz5%2Fkx10CxQS%2FsmbMgtD97zY6BKtbwZY%2BZyBXzRpH1dufdpvyQEaDupIkS37xLiUfgBAUqZcngCHbtZtajGL9Wg1eJmm984tSbKMcmimvMoBf0Y1LDPVrYjl%2Bi8PCeN3dG77ImOFQR1jdejX8SAVO9yj%2B&X-Amz-Signature=354d7a7d89a3b354994c90c72c9f8c78c4777b1c47359d4f8b7c71b24ae35c39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5TELTJQ%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIEzc2EGoi8VwIHyaq%2F65Y3rRWY0vyPqP5PbrXZvXps%2BeAiAvHz3jaJULKTalfHRACSokzGs%2FDQJ5O5dc0gbIrNWs8iqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2GvbfCnFYilTPTOuKtwDKsIoa2Bv1tSE3EHy9biuT7VgKgZO65DQwMU29xiJi3JuqImycrMCXxzFMQAw%2FA53WRvWhykX0K1Mdm7bXNeeN3vEM4tyQ4zyXRqCQqBkIZgZq5aHqxQfYJSyURqXcgjJwIXAbHjlpufj0a4Xkbx3DSGqO1wkEOZ2v1pNnYRMnFjUsIw5Os7JHfTSe9w5YyDercDNiZlLwjMJQi2MLE1c4glnMat3A4D6g8MvXNn0YuVG6nwLwILDURFQBkD88i%2B9qrdyDV6HkIQ%2Ft2v3IcAUxM5sTbEhbGBlS1CWTBcWbvqE05HOighpo%2FjCp6WDe6mE131QjExNWVpati67K2sowi1sjGCSPxipsSTxcnve8ehUwJZ3GBe2Dw6rUADPe86qnAoPLw8b5DmyihGG35fsMQJQAje0Q3lc3EJeLK%2FZYWLWMV%2FSuEp8hVU%2FwGgyRhfC4pzxNbinz87f1RKqUfqTHUKrdu2YbqZ%2FAXHGPjoYw5ni0Hv94UK0h%2FJDu0RQCX6UNC7IFMlYWMKHLU5Amt0nIuO9hQsvbB4qR9ov8vVu3DPJ2IYiBuycy6Id60k%2FeHfn1gtHxk3oKqFigxkLJ%2BV164ZqC2oFJGRwR5LZoBdoXbymFAypC%2F%2FxDFF8SS8wmeHtyQY6pgEAJ9oUusysKcf%2FyzRpKWoR3n%2FF9XUi3JPY92o0SLw%2FUyzEguyGVkinndWl1a4FFYSX61hQpWkfGHN87Wt8ftfih8nWCnYOXIEO9atDnAjBiwMysOeu3zk4j9T7Ak0SVNmhCAd5jnLo1%2FQmsmxdD9I2X3YAHuSFwhAVPJScGPnGEB346jRcLucxFxN1kXWr3ecFtQ8FoxwzQauLOy6A3lovyxelTCwJ&X-Amz-Signature=e18aae5968be8a72627c2ea5174a974729e1dad548de8d001a16c0221cb2bb0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5TELTJQ%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIEzc2EGoi8VwIHyaq%2F65Y3rRWY0vyPqP5PbrXZvXps%2BeAiAvHz3jaJULKTalfHRACSokzGs%2FDQJ5O5dc0gbIrNWs8iqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2GvbfCnFYilTPTOuKtwDKsIoa2Bv1tSE3EHy9biuT7VgKgZO65DQwMU29xiJi3JuqImycrMCXxzFMQAw%2FA53WRvWhykX0K1Mdm7bXNeeN3vEM4tyQ4zyXRqCQqBkIZgZq5aHqxQfYJSyURqXcgjJwIXAbHjlpufj0a4Xkbx3DSGqO1wkEOZ2v1pNnYRMnFjUsIw5Os7JHfTSe9w5YyDercDNiZlLwjMJQi2MLE1c4glnMat3A4D6g8MvXNn0YuVG6nwLwILDURFQBkD88i%2B9qrdyDV6HkIQ%2Ft2v3IcAUxM5sTbEhbGBlS1CWTBcWbvqE05HOighpo%2FjCp6WDe6mE131QjExNWVpati67K2sowi1sjGCSPxipsSTxcnve8ehUwJZ3GBe2Dw6rUADPe86qnAoPLw8b5DmyihGG35fsMQJQAje0Q3lc3EJeLK%2FZYWLWMV%2FSuEp8hVU%2FwGgyRhfC4pzxNbinz87f1RKqUfqTHUKrdu2YbqZ%2FAXHGPjoYw5ni0Hv94UK0h%2FJDu0RQCX6UNC7IFMlYWMKHLU5Amt0nIuO9hQsvbB4qR9ov8vVu3DPJ2IYiBuycy6Id60k%2FeHfn1gtHxk3oKqFigxkLJ%2BV164ZqC2oFJGRwR5LZoBdoXbymFAypC%2F%2FxDFF8SS8wmeHtyQY6pgEAJ9oUusysKcf%2FyzRpKWoR3n%2FF9XUi3JPY92o0SLw%2FUyzEguyGVkinndWl1a4FFYSX61hQpWkfGHN87Wt8ftfih8nWCnYOXIEO9atDnAjBiwMysOeu3zk4j9T7Ak0SVNmhCAd5jnLo1%2FQmsmxdD9I2X3YAHuSFwhAVPJScGPnGEB346jRcLucxFxN1kXWr3ecFtQ8FoxwzQauLOy6A3lovyxelTCwJ&X-Amz-Signature=9339fb110ce531090336c41802c4eab0b01a55d6904616e50f58609100b76c28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5TELTJQ%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIEzc2EGoi8VwIHyaq%2F65Y3rRWY0vyPqP5PbrXZvXps%2BeAiAvHz3jaJULKTalfHRACSokzGs%2FDQJ5O5dc0gbIrNWs8iqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2GvbfCnFYilTPTOuKtwDKsIoa2Bv1tSE3EHy9biuT7VgKgZO65DQwMU29xiJi3JuqImycrMCXxzFMQAw%2FA53WRvWhykX0K1Mdm7bXNeeN3vEM4tyQ4zyXRqCQqBkIZgZq5aHqxQfYJSyURqXcgjJwIXAbHjlpufj0a4Xkbx3DSGqO1wkEOZ2v1pNnYRMnFjUsIw5Os7JHfTSe9w5YyDercDNiZlLwjMJQi2MLE1c4glnMat3A4D6g8MvXNn0YuVG6nwLwILDURFQBkD88i%2B9qrdyDV6HkIQ%2Ft2v3IcAUxM5sTbEhbGBlS1CWTBcWbvqE05HOighpo%2FjCp6WDe6mE131QjExNWVpati67K2sowi1sjGCSPxipsSTxcnve8ehUwJZ3GBe2Dw6rUADPe86qnAoPLw8b5DmyihGG35fsMQJQAje0Q3lc3EJeLK%2FZYWLWMV%2FSuEp8hVU%2FwGgyRhfC4pzxNbinz87f1RKqUfqTHUKrdu2YbqZ%2FAXHGPjoYw5ni0Hv94UK0h%2FJDu0RQCX6UNC7IFMlYWMKHLU5Amt0nIuO9hQsvbB4qR9ov8vVu3DPJ2IYiBuycy6Id60k%2FeHfn1gtHxk3oKqFigxkLJ%2BV164ZqC2oFJGRwR5LZoBdoXbymFAypC%2F%2FxDFF8SS8wmeHtyQY6pgEAJ9oUusysKcf%2FyzRpKWoR3n%2FF9XUi3JPY92o0SLw%2FUyzEguyGVkinndWl1a4FFYSX61hQpWkfGHN87Wt8ftfih8nWCnYOXIEO9atDnAjBiwMysOeu3zk4j9T7Ak0SVNmhCAd5jnLo1%2FQmsmxdD9I2X3YAHuSFwhAVPJScGPnGEB346jRcLucxFxN1kXWr3ecFtQ8FoxwzQauLOy6A3lovyxelTCwJ&X-Amz-Signature=7fdf0b1a90298e6f8d0e260c0b5e3d70ed1ff767e5b326ddd563cbca6399fe2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5TELTJQ%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIEzc2EGoi8VwIHyaq%2F65Y3rRWY0vyPqP5PbrXZvXps%2BeAiAvHz3jaJULKTalfHRACSokzGs%2FDQJ5O5dc0gbIrNWs8iqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2GvbfCnFYilTPTOuKtwDKsIoa2Bv1tSE3EHy9biuT7VgKgZO65DQwMU29xiJi3JuqImycrMCXxzFMQAw%2FA53WRvWhykX0K1Mdm7bXNeeN3vEM4tyQ4zyXRqCQqBkIZgZq5aHqxQfYJSyURqXcgjJwIXAbHjlpufj0a4Xkbx3DSGqO1wkEOZ2v1pNnYRMnFjUsIw5Os7JHfTSe9w5YyDercDNiZlLwjMJQi2MLE1c4glnMat3A4D6g8MvXNn0YuVG6nwLwILDURFQBkD88i%2B9qrdyDV6HkIQ%2Ft2v3IcAUxM5sTbEhbGBlS1CWTBcWbvqE05HOighpo%2FjCp6WDe6mE131QjExNWVpati67K2sowi1sjGCSPxipsSTxcnve8ehUwJZ3GBe2Dw6rUADPe86qnAoPLw8b5DmyihGG35fsMQJQAje0Q3lc3EJeLK%2FZYWLWMV%2FSuEp8hVU%2FwGgyRhfC4pzxNbinz87f1RKqUfqTHUKrdu2YbqZ%2FAXHGPjoYw5ni0Hv94UK0h%2FJDu0RQCX6UNC7IFMlYWMKHLU5Amt0nIuO9hQsvbB4qR9ov8vVu3DPJ2IYiBuycy6Id60k%2FeHfn1gtHxk3oKqFigxkLJ%2BV164ZqC2oFJGRwR5LZoBdoXbymFAypC%2F%2FxDFF8SS8wmeHtyQY6pgEAJ9oUusysKcf%2FyzRpKWoR3n%2FF9XUi3JPY92o0SLw%2FUyzEguyGVkinndWl1a4FFYSX61hQpWkfGHN87Wt8ftfih8nWCnYOXIEO9atDnAjBiwMysOeu3zk4j9T7Ak0SVNmhCAd5jnLo1%2FQmsmxdD9I2X3YAHuSFwhAVPJScGPnGEB346jRcLucxFxN1kXWr3ecFtQ8FoxwzQauLOy6A3lovyxelTCwJ&X-Amz-Signature=1129bf7de0cffb13186fd8781d34881d5c9dfefbe2e6daa74892e9f755be0f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5TELTJQ%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIEzc2EGoi8VwIHyaq%2F65Y3rRWY0vyPqP5PbrXZvXps%2BeAiAvHz3jaJULKTalfHRACSokzGs%2FDQJ5O5dc0gbIrNWs8iqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2GvbfCnFYilTPTOuKtwDKsIoa2Bv1tSE3EHy9biuT7VgKgZO65DQwMU29xiJi3JuqImycrMCXxzFMQAw%2FA53WRvWhykX0K1Mdm7bXNeeN3vEM4tyQ4zyXRqCQqBkIZgZq5aHqxQfYJSyURqXcgjJwIXAbHjlpufj0a4Xkbx3DSGqO1wkEOZ2v1pNnYRMnFjUsIw5Os7JHfTSe9w5YyDercDNiZlLwjMJQi2MLE1c4glnMat3A4D6g8MvXNn0YuVG6nwLwILDURFQBkD88i%2B9qrdyDV6HkIQ%2Ft2v3IcAUxM5sTbEhbGBlS1CWTBcWbvqE05HOighpo%2FjCp6WDe6mE131QjExNWVpati67K2sowi1sjGCSPxipsSTxcnve8ehUwJZ3GBe2Dw6rUADPe86qnAoPLw8b5DmyihGG35fsMQJQAje0Q3lc3EJeLK%2FZYWLWMV%2FSuEp8hVU%2FwGgyRhfC4pzxNbinz87f1RKqUfqTHUKrdu2YbqZ%2FAXHGPjoYw5ni0Hv94UK0h%2FJDu0RQCX6UNC7IFMlYWMKHLU5Amt0nIuO9hQsvbB4qR9ov8vVu3DPJ2IYiBuycy6Id60k%2FeHfn1gtHxk3oKqFigxkLJ%2BV164ZqC2oFJGRwR5LZoBdoXbymFAypC%2F%2FxDFF8SS8wmeHtyQY6pgEAJ9oUusysKcf%2FyzRpKWoR3n%2FF9XUi3JPY92o0SLw%2FUyzEguyGVkinndWl1a4FFYSX61hQpWkfGHN87Wt8ftfih8nWCnYOXIEO9atDnAjBiwMysOeu3zk4j9T7Ak0SVNmhCAd5jnLo1%2FQmsmxdD9I2X3YAHuSFwhAVPJScGPnGEB346jRcLucxFxN1kXWr3ecFtQ8FoxwzQauLOy6A3lovyxelTCwJ&X-Amz-Signature=26f642922edb34ce07f381cd91135c01625e3b82d96d7b6783d3bbca655f17a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T66TMRCX%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDJsc516YainaGDRYkRs86ruqBpwsSQ4%2F9%2BttZQI2uHAQIgHIJ0%2ByXpI6mcMGxC82xnq7h3VBDIKEvUwzDKj1uLO%2F0qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvNaEPUHzTRmdM83CrcAyX8qL8SlraBsuppoSrzZg4hqtFvjX0mJXp8OVpM7gc6s2LlY3cA5VfQfiKk4X4cGXXA%2Br39uxjDSGtLJQRPyXdX6DIq24AVzJct4e%2Fn131DtNv7D15ZfUnqZE%2B1Gcwm3WWoQPwrxSrnbSs8xaLtVzQqtQb5%2FprJdPR2fsxO%2BFlyB%2B0AfcE0DQ7UHBe8uYDHxxhUDgnXIkT1LXb6ftzpyQci7ZXU2yn8chQf02X9WT2i75jGFi8nKPeUg%2FfUWRqFNIxd7Hf0OV8hShM4zGRO6Csz2cGnjhPDMlItRPkeaJsF4n9h1O7i9W5ezlgnk1boPH8yR8FQBpMqZv9jZoyS6hnZJN1i%2BX%2BvAAlrKwZ8c0%2B5PIF9XlZwl1B%2FVZ9CJcrOUv3PwkyK3r%2Bv56Qi6LZtPyRvV5XsXscaNoufdWRxTJYjIOhNE1bC%2BaSRl6irQFrHQChJMnJfcwrLOA7aHqgY35WWG1OYU0S1LyCY9rb6YJorS78NAukXDBB%2BAeUYK0givcdYBybYS%2BS01BsTwDM42Czuorsln3I1Hc3JtsLM0chxpQz2i%2FmTx6c1xos4oephVMYfdRUDhP9FaD%2FT%2BK5UcjGrD0rRKR8Yk2nZdxkRCGHdEFRaRspkW1vudCURMLXf7ckGOqUB01IP3SmOrnSnUaxA6p1zjV6V0XYK1XTDRq7hZR5vHbC3%2BVU2IBJ%2FTLFvGIKMkkjiyPIuswuIxVgWDM8i14Cvu024K1b2SASMHDABZ2ELwUWlTgdIeAniVqJtrGyVToY%2BSbfgLZfK%2BT6Ct2iAs6Pi8p8A442mW2crDq4kyF8p1eSe%2Bk6ADCbwCywm4AYo1CMCwRAuJtq8%2Bw8IrfkL3tIfgbrRysu8&X-Amz-Signature=a4ba451cd22aa3136839301cb8f28e90130b2be633b9ae06a4b3cf766ce1e55b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T66TMRCX%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDJsc516YainaGDRYkRs86ruqBpwsSQ4%2F9%2BttZQI2uHAQIgHIJ0%2ByXpI6mcMGxC82xnq7h3VBDIKEvUwzDKj1uLO%2F0qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvNaEPUHzTRmdM83CrcAyX8qL8SlraBsuppoSrzZg4hqtFvjX0mJXp8OVpM7gc6s2LlY3cA5VfQfiKk4X4cGXXA%2Br39uxjDSGtLJQRPyXdX6DIq24AVzJct4e%2Fn131DtNv7D15ZfUnqZE%2B1Gcwm3WWoQPwrxSrnbSs8xaLtVzQqtQb5%2FprJdPR2fsxO%2BFlyB%2B0AfcE0DQ7UHBe8uYDHxxhUDgnXIkT1LXb6ftzpyQci7ZXU2yn8chQf02X9WT2i75jGFi8nKPeUg%2FfUWRqFNIxd7Hf0OV8hShM4zGRO6Csz2cGnjhPDMlItRPkeaJsF4n9h1O7i9W5ezlgnk1boPH8yR8FQBpMqZv9jZoyS6hnZJN1i%2BX%2BvAAlrKwZ8c0%2B5PIF9XlZwl1B%2FVZ9CJcrOUv3PwkyK3r%2Bv56Qi6LZtPyRvV5XsXscaNoufdWRxTJYjIOhNE1bC%2BaSRl6irQFrHQChJMnJfcwrLOA7aHqgY35WWG1OYU0S1LyCY9rb6YJorS78NAukXDBB%2BAeUYK0givcdYBybYS%2BS01BsTwDM42Czuorsln3I1Hc3JtsLM0chxpQz2i%2FmTx6c1xos4oephVMYfdRUDhP9FaD%2FT%2BK5UcjGrD0rRKR8Yk2nZdxkRCGHdEFRaRspkW1vudCURMLXf7ckGOqUB01IP3SmOrnSnUaxA6p1zjV6V0XYK1XTDRq7hZR5vHbC3%2BVU2IBJ%2FTLFvGIKMkkjiyPIuswuIxVgWDM8i14Cvu024K1b2SASMHDABZ2ELwUWlTgdIeAniVqJtrGyVToY%2BSbfgLZfK%2BT6Ct2iAs6Pi8p8A442mW2crDq4kyF8p1eSe%2Bk6ADCbwCywm4AYo1CMCwRAuJtq8%2Bw8IrfkL3tIfgbrRysu8&X-Amz-Signature=7dcf393ef2e3d01099701e00927320d81580f5b48473b9783b64833f9eb0b309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T66TMRCX%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDJsc516YainaGDRYkRs86ruqBpwsSQ4%2F9%2BttZQI2uHAQIgHIJ0%2ByXpI6mcMGxC82xnq7h3VBDIKEvUwzDKj1uLO%2F0qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvNaEPUHzTRmdM83CrcAyX8qL8SlraBsuppoSrzZg4hqtFvjX0mJXp8OVpM7gc6s2LlY3cA5VfQfiKk4X4cGXXA%2Br39uxjDSGtLJQRPyXdX6DIq24AVzJct4e%2Fn131DtNv7D15ZfUnqZE%2B1Gcwm3WWoQPwrxSrnbSs8xaLtVzQqtQb5%2FprJdPR2fsxO%2BFlyB%2B0AfcE0DQ7UHBe8uYDHxxhUDgnXIkT1LXb6ftzpyQci7ZXU2yn8chQf02X9WT2i75jGFi8nKPeUg%2FfUWRqFNIxd7Hf0OV8hShM4zGRO6Csz2cGnjhPDMlItRPkeaJsF4n9h1O7i9W5ezlgnk1boPH8yR8FQBpMqZv9jZoyS6hnZJN1i%2BX%2BvAAlrKwZ8c0%2B5PIF9XlZwl1B%2FVZ9CJcrOUv3PwkyK3r%2Bv56Qi6LZtPyRvV5XsXscaNoufdWRxTJYjIOhNE1bC%2BaSRl6irQFrHQChJMnJfcwrLOA7aHqgY35WWG1OYU0S1LyCY9rb6YJorS78NAukXDBB%2BAeUYK0givcdYBybYS%2BS01BsTwDM42Czuorsln3I1Hc3JtsLM0chxpQz2i%2FmTx6c1xos4oephVMYfdRUDhP9FaD%2FT%2BK5UcjGrD0rRKR8Yk2nZdxkRCGHdEFRaRspkW1vudCURMLXf7ckGOqUB01IP3SmOrnSnUaxA6p1zjV6V0XYK1XTDRq7hZR5vHbC3%2BVU2IBJ%2FTLFvGIKMkkjiyPIuswuIxVgWDM8i14Cvu024K1b2SASMHDABZ2ELwUWlTgdIeAniVqJtrGyVToY%2BSbfgLZfK%2BT6Ct2iAs6Pi8p8A442mW2crDq4kyF8p1eSe%2Bk6ADCbwCywm4AYo1CMCwRAuJtq8%2Bw8IrfkL3tIfgbrRysu8&X-Amz-Signature=70419a7b8c894ca3a1e392dead0014550fdf76d475fcd72378b51133cb26ca1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQY6RU5%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCwxVWAzuUq7vXrh73w%2FoAd53R8JD5zQym3ccmjcEyX%2BQIhAP0i473eUsfBUPxEBzvoZKvDTo0t92MyPtBjmVqXHbJJKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlB6jqATL%2B2QKRsdEq3AMMYtnfOeTz%2BQxNuK9I49gtcWKC7P5a39haEXnjOdSkTveb0WWpx1sbP9xuT1Ax5mkVUrewwc%2F1isLVVUSBhsAhPcy%2Bl0cIWv4FSFvcfXEJuC%2BZ6jHjo7Fy37hh7ysbEHlnRdrFmuNHkPh6WShB9hf5s5zM3lSWWMjP%2F0RM%2B%2B32dGH4JgiypgxZAKTjZclPDN2EbpwTCVLpsJ6rD7qvmOLB9x4TuHBzOD3tgotZNte82n9qtrNRZQT4yvDvEC%2F8OHEL%2FbHuoqACnLfl2UMzDSFimiV%2F2yXICP66%2FL%2Fu%2FFyxDcCyELM%2BHz%2BGh5JTJZ%2BK39%2FJYYCkHx3Q7oeFxOl0B2AaDRFwGboBSkpBfnDCIdg5pZmD%2BHMVmM0eBz6ffFIi1LkMYr5JL8AFaDJd4p034suGoiFPlv83vqGzIjd3ptJG5bk%2B5LaLCOnG2%2FuxrUbq5F386awtZ0jKb8NuvrWVPOXqRpWki97tq5UydJIOutXxlLiteZhHS1sv%2BiY8dT3RufCSxVjaNBKI%2BM9Vy2%2Bkjsyqb9WodVVAxz%2FnfyfPuTD%2BGkIamN9I%2FPtZAM%2BL%2B3jfP7gCAcdBhVoIy7DgEv4YfgNI97i0PN5ysYigPkMJZfBcvDAoSB%2BRdOQzSFdrPzD53%2B3JBjqkAT%2BqelAeeB0AuRxt7pD%2FSgKlV%2FT9EBY8XGwc8%2FXwhGuHbLw4WBgO%2BK8cVxug3%2BRYvNoaynkP6204Jkk9ezBxCiGckCuE02Za1F3ExfvJ6RUCL2hyQ%2FiOR2l%2ByiNo9xWcJZ%2FpfiYZJ8ZfiRGmsx31zVp1nm6ma3s0N5K%2F7wWYrtJyVQLMhOHj7mDpoSP3khW0sPtr65x%2BLhYnMeH9RQQRtuf8RCgd&X-Amz-Signature=7e6e8378fd78fe30d7b987e1400ab2320c4fbedf9a3f35bbb41789bf496ecc31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQY6RU5%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCwxVWAzuUq7vXrh73w%2FoAd53R8JD5zQym3ccmjcEyX%2BQIhAP0i473eUsfBUPxEBzvoZKvDTo0t92MyPtBjmVqXHbJJKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlB6jqATL%2B2QKRsdEq3AMMYtnfOeTz%2BQxNuK9I49gtcWKC7P5a39haEXnjOdSkTveb0WWpx1sbP9xuT1Ax5mkVUrewwc%2F1isLVVUSBhsAhPcy%2Bl0cIWv4FSFvcfXEJuC%2BZ6jHjo7Fy37hh7ysbEHlnRdrFmuNHkPh6WShB9hf5s5zM3lSWWMjP%2F0RM%2B%2B32dGH4JgiypgxZAKTjZclPDN2EbpwTCVLpsJ6rD7qvmOLB9x4TuHBzOD3tgotZNte82n9qtrNRZQT4yvDvEC%2F8OHEL%2FbHuoqACnLfl2UMzDSFimiV%2F2yXICP66%2FL%2Fu%2FFyxDcCyELM%2BHz%2BGh5JTJZ%2BK39%2FJYYCkHx3Q7oeFxOl0B2AaDRFwGboBSkpBfnDCIdg5pZmD%2BHMVmM0eBz6ffFIi1LkMYr5JL8AFaDJd4p034suGoiFPlv83vqGzIjd3ptJG5bk%2B5LaLCOnG2%2FuxrUbq5F386awtZ0jKb8NuvrWVPOXqRpWki97tq5UydJIOutXxlLiteZhHS1sv%2BiY8dT3RufCSxVjaNBKI%2BM9Vy2%2Bkjsyqb9WodVVAxz%2FnfyfPuTD%2BGkIamN9I%2FPtZAM%2BL%2B3jfP7gCAcdBhVoIy7DgEv4YfgNI97i0PN5ysYigPkMJZfBcvDAoSB%2BRdOQzSFdrPzD53%2B3JBjqkAT%2BqelAeeB0AuRxt7pD%2FSgKlV%2FT9EBY8XGwc8%2FXwhGuHbLw4WBgO%2BK8cVxug3%2BRYvNoaynkP6204Jkk9ezBxCiGckCuE02Za1F3ExfvJ6RUCL2hyQ%2FiOR2l%2ByiNo9xWcJZ%2FpfiYZJ8ZfiRGmsx31zVp1nm6ma3s0N5K%2F7wWYrtJyVQLMhOHj7mDpoSP3khW0sPtr65x%2BLhYnMeH9RQQRtuf8RCgd&X-Amz-Signature=ebbb8c9bd92b57ecc55867744b1ea52c004290d2b24dc455f4efa1b87ac9322e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSMYU77I%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD11AfuqOUnq7o%2B8DTz7iHbYLZ0UNl2CbTqL3ZaAzkppAIhAIU9jM9cHuobI0%2FqZ%2F31fzCry%2Bxef1WUmiOaF7c%2Fw1deKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyPSK1Ho%2BPTadfcFAq3AMEQUadydEpXSjcMbAughJ%2BZpXq0t1%2BV9kROe%2BWYGxhT1jZX96uPVp0ke6cdc6yO6KB%2FGn6c%2FunW2enwYluF%2F9Ppa8eyaVJK87MPR1YWRgwSaBC6IZieo8rfc%2FtGzGn9Nq7hQ%2BDRRY8%2FLw2i7%2BoKe%2B2FCplrT3eBaxRP%2FkpaNHbSCdDCfp9LVpXQgt5xTerKhak5qt8dv7KcI7tz5jFwf5sGzB8CJirNQl7Isrkj0vYhu%2FPDApF0b3WmRze3Ep9uP98Mc1wNCE4Tx%2B4zQZzd%2BOsdJXiz6hv4vjfBiyAQygUgnUxaP1F6K35wAI9%2F1CECbfqUm%2FYGXE1IvdbKHWAVrffG6OyMMCdTJi2krtPU6PEEP0g6Q25XJOi7fAz0yJfajDETEwHJ8a%2BnzlTcZKuGTVojvTPGqVUr3Lf2S%2BaBnleug%2FOF%2F0g3PJfPiNxDNdgWSyKZBtRnfAYXvsIPQHO2VVtesMmKn%2F9geXLiXaX0Pv32Smb1PRZnEE7MNwxFNN%2BbAUZ67C8YJjbPBhhdp8o5x3MTDjEojNpxCcchMwmuAmWy7dvQDWcRGgt4dNA1ZgH%2FxlE%2FZkPZ2py8O6L7YOn02ISyoN%2BHwxXJgKtB0xBZgc0WKMM0LTGtAqCJXl6EzC63%2B3JBjqkARt8uwciMuocO0eEFCcmDiKddD7VihMszTDhH%2FUOtrvhgSJkt%2F%2FnBYajK20onn9fh3NVksZNddtkpkHQoONfZ4FY6Z7sm%2BpBf6r62d7zDazw54zPqyJAJKb6%2BemV20ECLZJpeYE8%2BiB3mIveDqL0%2FNWcr8bjEojx%2FJDs7mYV4RCzhVVmELfEzsLlqC7ayEN1R%2B5L2leW4V6UaG1O01MRyLDqJWTN&X-Amz-Signature=5b1f718fadd5c7272eec77d30e59f6fb612422337bb02b674368599f056a2f03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSMYU77I%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD11AfuqOUnq7o%2B8DTz7iHbYLZ0UNl2CbTqL3ZaAzkppAIhAIU9jM9cHuobI0%2FqZ%2F31fzCry%2Bxef1WUmiOaF7c%2Fw1deKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyPSK1Ho%2BPTadfcFAq3AMEQUadydEpXSjcMbAughJ%2BZpXq0t1%2BV9kROe%2BWYGxhT1jZX96uPVp0ke6cdc6yO6KB%2FGn6c%2FunW2enwYluF%2F9Ppa8eyaVJK87MPR1YWRgwSaBC6IZieo8rfc%2FtGzGn9Nq7hQ%2BDRRY8%2FLw2i7%2BoKe%2B2FCplrT3eBaxRP%2FkpaNHbSCdDCfp9LVpXQgt5xTerKhak5qt8dv7KcI7tz5jFwf5sGzB8CJirNQl7Isrkj0vYhu%2FPDApF0b3WmRze3Ep9uP98Mc1wNCE4Tx%2B4zQZzd%2BOsdJXiz6hv4vjfBiyAQygUgnUxaP1F6K35wAI9%2F1CECbfqUm%2FYGXE1IvdbKHWAVrffG6OyMMCdTJi2krtPU6PEEP0g6Q25XJOi7fAz0yJfajDETEwHJ8a%2BnzlTcZKuGTVojvTPGqVUr3Lf2S%2BaBnleug%2FOF%2F0g3PJfPiNxDNdgWSyKZBtRnfAYXvsIPQHO2VVtesMmKn%2F9geXLiXaX0Pv32Smb1PRZnEE7MNwxFNN%2BbAUZ67C8YJjbPBhhdp8o5x3MTDjEojNpxCcchMwmuAmWy7dvQDWcRGgt4dNA1ZgH%2FxlE%2FZkPZ2py8O6L7YOn02ISyoN%2BHwxXJgKtB0xBZgc0WKMM0LTGtAqCJXl6EzC63%2B3JBjqkARt8uwciMuocO0eEFCcmDiKddD7VihMszTDhH%2FUOtrvhgSJkt%2F%2FnBYajK20onn9fh3NVksZNddtkpkHQoONfZ4FY6Z7sm%2BpBf6r62d7zDazw54zPqyJAJKb6%2BemV20ECLZJpeYE8%2BiB3mIveDqL0%2FNWcr8bjEojx%2FJDs7mYV4RCzhVVmELfEzsLlqC7ayEN1R%2B5L2leW4V6UaG1O01MRyLDqJWTN&X-Amz-Signature=293843143239f2a6b64c0739eca8638040298d7cebffa4227801bc5ede36d7a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSMYU77I%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD11AfuqOUnq7o%2B8DTz7iHbYLZ0UNl2CbTqL3ZaAzkppAIhAIU9jM9cHuobI0%2FqZ%2F31fzCry%2Bxef1WUmiOaF7c%2Fw1deKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyPSK1Ho%2BPTadfcFAq3AMEQUadydEpXSjcMbAughJ%2BZpXq0t1%2BV9kROe%2BWYGxhT1jZX96uPVp0ke6cdc6yO6KB%2FGn6c%2FunW2enwYluF%2F9Ppa8eyaVJK87MPR1YWRgwSaBC6IZieo8rfc%2FtGzGn9Nq7hQ%2BDRRY8%2FLw2i7%2BoKe%2B2FCplrT3eBaxRP%2FkpaNHbSCdDCfp9LVpXQgt5xTerKhak5qt8dv7KcI7tz5jFwf5sGzB8CJirNQl7Isrkj0vYhu%2FPDApF0b3WmRze3Ep9uP98Mc1wNCE4Tx%2B4zQZzd%2BOsdJXiz6hv4vjfBiyAQygUgnUxaP1F6K35wAI9%2F1CECbfqUm%2FYGXE1IvdbKHWAVrffG6OyMMCdTJi2krtPU6PEEP0g6Q25XJOi7fAz0yJfajDETEwHJ8a%2BnzlTcZKuGTVojvTPGqVUr3Lf2S%2BaBnleug%2FOF%2F0g3PJfPiNxDNdgWSyKZBtRnfAYXvsIPQHO2VVtesMmKn%2F9geXLiXaX0Pv32Smb1PRZnEE7MNwxFNN%2BbAUZ67C8YJjbPBhhdp8o5x3MTDjEojNpxCcchMwmuAmWy7dvQDWcRGgt4dNA1ZgH%2FxlE%2FZkPZ2py8O6L7YOn02ISyoN%2BHwxXJgKtB0xBZgc0WKMM0LTGtAqCJXl6EzC63%2B3JBjqkARt8uwciMuocO0eEFCcmDiKddD7VihMszTDhH%2FUOtrvhgSJkt%2F%2FnBYajK20onn9fh3NVksZNddtkpkHQoONfZ4FY6Z7sm%2BpBf6r62d7zDazw54zPqyJAJKb6%2BemV20ECLZJpeYE8%2BiB3mIveDqL0%2FNWcr8bjEojx%2FJDs7mYV4RCzhVVmELfEzsLlqC7ayEN1R%2B5L2leW4V6UaG1O01MRyLDqJWTN&X-Amz-Signature=98265282a82b78dcca1dce7aad658cd64fc01a0545128e4f9176144d67ad106d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSMYU77I%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD11AfuqOUnq7o%2B8DTz7iHbYLZ0UNl2CbTqL3ZaAzkppAIhAIU9jM9cHuobI0%2FqZ%2F31fzCry%2Bxef1WUmiOaF7c%2Fw1deKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyPSK1Ho%2BPTadfcFAq3AMEQUadydEpXSjcMbAughJ%2BZpXq0t1%2BV9kROe%2BWYGxhT1jZX96uPVp0ke6cdc6yO6KB%2FGn6c%2FunW2enwYluF%2F9Ppa8eyaVJK87MPR1YWRgwSaBC6IZieo8rfc%2FtGzGn9Nq7hQ%2BDRRY8%2FLw2i7%2BoKe%2B2FCplrT3eBaxRP%2FkpaNHbSCdDCfp9LVpXQgt5xTerKhak5qt8dv7KcI7tz5jFwf5sGzB8CJirNQl7Isrkj0vYhu%2FPDApF0b3WmRze3Ep9uP98Mc1wNCE4Tx%2B4zQZzd%2BOsdJXiz6hv4vjfBiyAQygUgnUxaP1F6K35wAI9%2F1CECbfqUm%2FYGXE1IvdbKHWAVrffG6OyMMCdTJi2krtPU6PEEP0g6Q25XJOi7fAz0yJfajDETEwHJ8a%2BnzlTcZKuGTVojvTPGqVUr3Lf2S%2BaBnleug%2FOF%2F0g3PJfPiNxDNdgWSyKZBtRnfAYXvsIPQHO2VVtesMmKn%2F9geXLiXaX0Pv32Smb1PRZnEE7MNwxFNN%2BbAUZ67C8YJjbPBhhdp8o5x3MTDjEojNpxCcchMwmuAmWy7dvQDWcRGgt4dNA1ZgH%2FxlE%2FZkPZ2py8O6L7YOn02ISyoN%2BHwxXJgKtB0xBZgc0WKMM0LTGtAqCJXl6EzC63%2B3JBjqkARt8uwciMuocO0eEFCcmDiKddD7VihMszTDhH%2FUOtrvhgSJkt%2F%2FnBYajK20onn9fh3NVksZNddtkpkHQoONfZ4FY6Z7sm%2BpBf6r62d7zDazw54zPqyJAJKb6%2BemV20ECLZJpeYE8%2BiB3mIveDqL0%2FNWcr8bjEojx%2FJDs7mYV4RCzhVVmELfEzsLlqC7ayEN1R%2B5L2leW4V6UaG1O01MRyLDqJWTN&X-Amz-Signature=a1355e5747dab4f4e82224dbf86efee34035babe3f95b3608d52174fa6761a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSMYU77I%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD11AfuqOUnq7o%2B8DTz7iHbYLZ0UNl2CbTqL3ZaAzkppAIhAIU9jM9cHuobI0%2FqZ%2F31fzCry%2Bxef1WUmiOaF7c%2Fw1deKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyPSK1Ho%2BPTadfcFAq3AMEQUadydEpXSjcMbAughJ%2BZpXq0t1%2BV9kROe%2BWYGxhT1jZX96uPVp0ke6cdc6yO6KB%2FGn6c%2FunW2enwYluF%2F9Ppa8eyaVJK87MPR1YWRgwSaBC6IZieo8rfc%2FtGzGn9Nq7hQ%2BDRRY8%2FLw2i7%2BoKe%2B2FCplrT3eBaxRP%2FkpaNHbSCdDCfp9LVpXQgt5xTerKhak5qt8dv7KcI7tz5jFwf5sGzB8CJirNQl7Isrkj0vYhu%2FPDApF0b3WmRze3Ep9uP98Mc1wNCE4Tx%2B4zQZzd%2BOsdJXiz6hv4vjfBiyAQygUgnUxaP1F6K35wAI9%2F1CECbfqUm%2FYGXE1IvdbKHWAVrffG6OyMMCdTJi2krtPU6PEEP0g6Q25XJOi7fAz0yJfajDETEwHJ8a%2BnzlTcZKuGTVojvTPGqVUr3Lf2S%2BaBnleug%2FOF%2F0g3PJfPiNxDNdgWSyKZBtRnfAYXvsIPQHO2VVtesMmKn%2F9geXLiXaX0Pv32Smb1PRZnEE7MNwxFNN%2BbAUZ67C8YJjbPBhhdp8o5x3MTDjEojNpxCcchMwmuAmWy7dvQDWcRGgt4dNA1ZgH%2FxlE%2FZkPZ2py8O6L7YOn02ISyoN%2BHwxXJgKtB0xBZgc0WKMM0LTGtAqCJXl6EzC63%2B3JBjqkARt8uwciMuocO0eEFCcmDiKddD7VihMszTDhH%2FUOtrvhgSJkt%2F%2FnBYajK20onn9fh3NVksZNddtkpkHQoONfZ4FY6Z7sm%2BpBf6r62d7zDazw54zPqyJAJKb6%2BemV20ECLZJpeYE8%2BiB3mIveDqL0%2FNWcr8bjEojx%2FJDs7mYV4RCzhVVmELfEzsLlqC7ayEN1R%2B5L2leW4V6UaG1O01MRyLDqJWTN&X-Amz-Signature=a481ec1c765b6574f2f42de18bc0c8e5ea4d1041bfaab335d7f10ba116e95349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYERKD5F%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T040155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIF7cZSbVqiZckoHklphfeVVlq2Z4ZZ0WfBt6tvUoQBx8AiEA0134Ejuy8GnLWGap4I1A2OMpPFru7eV5rXklBdNqVxkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTL7xM0njYOMg1P5ircA%2BecQCWsC1lmoJwXebnridEmJg3neb6MOMRp5ZWA%2BYtZDOijbIAWxYm7d9zVtd5Q6FXevJVIxtJeTfHBp14%2FdKAIUo%2BuYlwS6LHYDulCcUJ222H7fw0hEh2jn%2F8yBhVmuwNS35vLTNC10cAzvfaPJnEfNTDz%2FOjJxIGeU%2FFdq7ewPEBvAVjQFRmlswnyNoWCHk0CvThkdn5v5nrCpjgE5R3X%2BOrDFiEd2s2rRpIQ6qrnP3dViS8Qv7PomDAPDeUm%2BCU%2FwonXoW2qNLcNB4%2BRUXV%2Fb51sEPTozqr74e5YoirjnGZdXjDzq1hvb%2FAv9VYNgtOnOGmOwJAKBXfw0QsuJjBwRmx3slCw2UP%2FrC73Nz74c6WxdGfOrS5iT0v3CAMVRA7vwoCmlY7U6%2Bk1ClqMp2Wif6UoW6E0daNKnPxGdDRdRIoWY7qEL74LyxVXqk4JEzdn%2F6xzOMgUOf8mTrxeaBRA0jVkBmWthK5FMCIUKlhRmiAoXiuwfgTG8Ag2%2F2lyiGHgOq2yyXis9VCNJ%2BDIORZe7x05QliJNUMjaBvExXwNczjLu5wAcDA2feklYmnumIZkvWjqRhJFt2qqQmRPx3zyeu1MrtRGFF%2B1DRbplOgjYjY3JL%2FlhTQjyLEuMNzg7ckGOqUBqD2RMIFowsVbKHW8hoAkDBXjY9TYV5W2t9jHXfv9tz%2FJhvhky7rptpiRkYTmge36Fg%2F3c%2FFa%2BnyQ9lG4Q%2BBuCVY6uJ4dDq4IsKaTN%2BqvgUXGbCvLhl%2FYRvE3C6S7i6lDwz3sT%2BHKDuLyFeNPcwwfMc%2FDT3h%2B5y4T%2BWSSgTB4JdQyadHYMRoK4WtpbGnyAmuPVxFP4pZyQ9erKXEThae4HV1gSdpm&X-Amz-Signature=f220b2b629979f541207af7c14d575c745f250da6512ef0d3fa6d4184f735dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

