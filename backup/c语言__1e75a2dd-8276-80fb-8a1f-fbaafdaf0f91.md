
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ISB6ESW%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDc7Z3WL8azIZb1u%2FPOcn25kbZGDbCHkWPH0ZArCHjdFAiAHnB808DHJ3mx7YO0fKQxsolcTOpRWFXhi0TpcA58pNSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMjK2bnM4I4wTC2CocKtwDTwiyP%2F4aU1WeCJou7EJoA3xTKfBab2CXi4FttQi%2BZd2pZt9RGV78phKelbHQB41mAFbfusevgLT%2BWIWVPzIjkxYaZ7uE3%2BGaYnUrt1tWjH6thGvfXbBlmt%2Bc1xCyhT8X8cNA9XIEUtrkkKQfAuHnbfPh4uS6HqE5IYV%2BO5fTh%2FSqnZik%2F42uJLSyCUUmyt4ygXGZG52FIElxxeUX4AczxrCY1o1DkZRjoqRONnqc0MWn0O3Wp2BLQIVcWI39oSkbBqAvmAIT1dvHAyZ8bVMTDzy1Cp7%2FGWfTwpqlILzzG1WDj1HSDDsdYV5ZjaR5o2v5jbmAsJ1tcBr3sBRk1apJWjk%2Fl4Ry1fwEitsrgr1KRIFiY%2Fqbt5%2BeNIDSDOW9TqiF%2B0o%2FwnYY1aoN6EDhJzq%2FGp9op2Wh9Gz%2Fxa%2FPGVTIdKysc%2FAMzr5pXQQhnr%2FeXBwfuGJAghb%2F%2F6zriJD0p7dFkS4myH9VK%2FusKTGLiU8L6zyglpDmYnLyJY50NZwbvDMVn8nIXTi1kLD7HYrJcQLS6t4ZI0XJ%2B8aGAvWX77jPwdsNj0V4XjAzdb8oKPcCk%2F5RN2yb3%2FAg504QG%2FxBT2LG9DK4OKLLn%2BYf3ijY5XCZ06mTYHb0N6Uiv%2BHoaV4w5%2BLgywY6pgFbVTWuh%2Fsueh0KoNvosNDIumDMhOuXf4dntUQfvTvXLH%2FKt%2BctKmX0WfULqHCSPWvX9T0S4yxcwUkcmgUUN6Hx489WUTb06TBqwFXhkZVROqHN%2B1aQ3KMZeaCGVdCGXDi6GquuySo1bd%2BIDWvOJc33qJ7g6pUXUJpwl7LodwWidRTJY0zXSa6OBKL91yem%2B7UgaRLHnM7LxQD1GI0U6b3XrrHxX80W&X-Amz-Signature=c2395ef85ef7f2bdda901c5da992db511353960183afefda67f2979c815de159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HJPO645%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK8wb8o9JwKnHlW0WxtnrGP3KhxECO6R0pZiKwX8crtAiEA8BBws4PdK0bDHl0YL68Gg3xsyu0IN3i%2Fhh3uZWYSWQYq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJU5yC1VX%2Fc7lhmlECrcAx7naSDwTcl0otfZ4ukae2FDVD%2B2AwHRKk42IpiDWtR1wmDwXVVdvDFIl0UasMRwcH0PgkIqPXjIUw0XBuMynvwi7%2BNs%2BQGWioA1e5dRBT39i4g20H8aflNstu7M7Buu6Jaw%2BP6xN7bFYxxsvWLh3fItOn4ym%2B8aSpW8sB0bIEWZOHmFGP2kDvhbt3XWZP4vouK9xDkH72kGjTuYy60LSp6o4DKHG2ejDmpAr5MMk4kif6FDYumDEUXGht8hlZVfguaU6331QzX9C3uvfBNe3lvAS0E8z99bgMPSvUXt51KIfCmB4%2FWUNztSTo77YQ7%2FtPf1j5unPpAev2ikdoLggVE4uaqn%2B5R%2FQeKHwsBEYKxJ8wH50%2BzcenECsehYYZJgBgaSC%2B0n0JFPrFskhPKvQqnJzBkXicxph4qe7YvgPhD%2B4cKJhVj%2BFiQ4DlEFaAoQJyXo0U1dvUxLsnAm8OOc0NVquTkQNsQvPDQ2uZ0XwWHs6OVGgrLgj%2Fecz7Ux3uejaXCZ919dg%2BrTxrJNcStRfBK4uu5AJ%2BnAAuNtkmVPW0C%2FZQlKyxpKQh2mB8qML5CpLpf4zPx6AuIOWR9HOx6%2B3wg2lTf4r3zjTaaxy5FRxbgCQstpgTFxbLrRRmLiMLzj4MsGOqUBy7V8Fr%2BO5smdE5%2BTrFcQSCdQRjNYwhr2iaRZcdS2FXUJBC%2BOI0YwJjFxcU3E01RwwNKxyZuj19Ce3TyDH0aIrg1mFPRHx0EywzKMVOxuE9b7RbhiMaO1RqAXjG%2B104oJn7128ozi%2FSzsFJJvt3twMcveuctSW6qly5QgGUcRGpYWFykNK0ir01Drn7zdqT2vKmQ%2BH7qVgycJovBfB%2FSi6ypfWWr8&X-Amz-Signature=628124018d1a5b351edaf6d9ac999b6d3b6c67092251d7aaf062332217264c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HJPO645%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGK8wb8o9JwKnHlW0WxtnrGP3KhxECO6R0pZiKwX8crtAiEA8BBws4PdK0bDHl0YL68Gg3xsyu0IN3i%2Fhh3uZWYSWQYq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJU5yC1VX%2Fc7lhmlECrcAx7naSDwTcl0otfZ4ukae2FDVD%2B2AwHRKk42IpiDWtR1wmDwXVVdvDFIl0UasMRwcH0PgkIqPXjIUw0XBuMynvwi7%2BNs%2BQGWioA1e5dRBT39i4g20H8aflNstu7M7Buu6Jaw%2BP6xN7bFYxxsvWLh3fItOn4ym%2B8aSpW8sB0bIEWZOHmFGP2kDvhbt3XWZP4vouK9xDkH72kGjTuYy60LSp6o4DKHG2ejDmpAr5MMk4kif6FDYumDEUXGht8hlZVfguaU6331QzX9C3uvfBNe3lvAS0E8z99bgMPSvUXt51KIfCmB4%2FWUNztSTo77YQ7%2FtPf1j5unPpAev2ikdoLggVE4uaqn%2B5R%2FQeKHwsBEYKxJ8wH50%2BzcenECsehYYZJgBgaSC%2B0n0JFPrFskhPKvQqnJzBkXicxph4qe7YvgPhD%2B4cKJhVj%2BFiQ4DlEFaAoQJyXo0U1dvUxLsnAm8OOc0NVquTkQNsQvPDQ2uZ0XwWHs6OVGgrLgj%2Fecz7Ux3uejaXCZ919dg%2BrTxrJNcStRfBK4uu5AJ%2BnAAuNtkmVPW0C%2FZQlKyxpKQh2mB8qML5CpLpf4zPx6AuIOWR9HOx6%2B3wg2lTf4r3zjTaaxy5FRxbgCQstpgTFxbLrRRmLiMLzj4MsGOqUBy7V8Fr%2BO5smdE5%2BTrFcQSCdQRjNYwhr2iaRZcdS2FXUJBC%2BOI0YwJjFxcU3E01RwwNKxyZuj19Ce3TyDH0aIrg1mFPRHx0EywzKMVOxuE9b7RbhiMaO1RqAXjG%2B104oJn7128ozi%2FSzsFJJvt3twMcveuctSW6qly5QgGUcRGpYWFykNK0ir01Drn7zdqT2vKmQ%2BH7qVgycJovBfB%2FSi6ypfWWr8&X-Amz-Signature=b1485cab8ca5615fbb8e68a20f32304b4b502ef86c9ceb70ef8131cda2f80647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626XXVA5J%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLjVZUnVHWLrnxo4grI3SraV%2F1gQDdpiVjCqmokVbjjgIgTC51BHlp6k%2Ffd%2BOqCiNtk2WfAPP2ho2HQARYMlv2cQYq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDCjD%2B9ujO%2BWcN%2B7oPCrcAyVB0adqrXhQPKoAyEiICTEiXHz6qiA1xpfoVeu4BGHkS95Fh5Dj32Xndbj9AQ7c7pFDtKcbJ2MwwIfF9Fg3vhckXt%2FmmX9PUP94%2BChNOxfYMqfZGDeS2jD6ouSF7jua1tO7aivAJDa0G3FmXnwI%2B9UVahCZSVbcebsKPzafPxS%2Fv1jSjyS42X8VLpykXrUgXiANUU52OC9HFA6Kn9g3966DdmDvAkWVP2GRHwx14wpAwAo2lOCHYPnnQowS5fRFLYrW%2FyGJrU8eTKtDILlxypxWOL2vb2H7roLEe%2F%2FEEd1nxhEUQ7eVBfbbKdAbE1FGqISpUAZuvnNjfe%2F9Fw7YMCTJb2fvWwpRtbSLZfZ4XMBkirApdSt96bilCjevTbXOcM%2FGRz7aAzYIkBTVEHfTXB%2FQUqaBF3yd5gO6HBk%2FDLRaG0w3ikhE2NP7aKCQ%2Bkjscy1G3FQP51rDcZlceSfE6FvUMlxmETNFO7SOG1hebL%2FkIR83Neaz%2BcMOBirp31p3Z%2Bwv7aZGgNiKB7h4XLCOCYPP9F8L28zzstbTKwNkmQ3%2Bc3xthhy6casTPJE7KHipBCR432Jnbiu5QprESw5RN78zrupNH7lY4JmeH5y%2FGpashMlmF%2BV2cTJou%2BshMOfi4MsGOqUBHltfE%2FVz88A59vj6tqhP7rHD9GkeuP0QxUF80ZOUcFSYdPjtoRUbLzqGWNxlGYlD%2FSJVpcUTwlRAFop%2F%2BLBs0EcxGJiifo%2B7F3mb2DyCJkG1BFt%2Bur%2Fqm9EvV3VslyWQyCrBnTZOpc5kR%2BKnisrrpHhT5lirreoZFQLaxtIpaf%2F3vKEh91qe%2B6qdRr%2FLaGi7KMA0gHpitCFuTND8WHNlB9wMZxB8&X-Amz-Signature=cb6c8ec562d1fbb1b3c5ad8bcd28292eeeb48dda67f4da8100d6d5fb3ebdfb56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626XXVA5J%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLjVZUnVHWLrnxo4grI3SraV%2F1gQDdpiVjCqmokVbjjgIgTC51BHlp6k%2Ffd%2BOqCiNtk2WfAPP2ho2HQARYMlv2cQYq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDCjD%2B9ujO%2BWcN%2B7oPCrcAyVB0adqrXhQPKoAyEiICTEiXHz6qiA1xpfoVeu4BGHkS95Fh5Dj32Xndbj9AQ7c7pFDtKcbJ2MwwIfF9Fg3vhckXt%2FmmX9PUP94%2BChNOxfYMqfZGDeS2jD6ouSF7jua1tO7aivAJDa0G3FmXnwI%2B9UVahCZSVbcebsKPzafPxS%2Fv1jSjyS42X8VLpykXrUgXiANUU52OC9HFA6Kn9g3966DdmDvAkWVP2GRHwx14wpAwAo2lOCHYPnnQowS5fRFLYrW%2FyGJrU8eTKtDILlxypxWOL2vb2H7roLEe%2F%2FEEd1nxhEUQ7eVBfbbKdAbE1FGqISpUAZuvnNjfe%2F9Fw7YMCTJb2fvWwpRtbSLZfZ4XMBkirApdSt96bilCjevTbXOcM%2FGRz7aAzYIkBTVEHfTXB%2FQUqaBF3yd5gO6HBk%2FDLRaG0w3ikhE2NP7aKCQ%2Bkjscy1G3FQP51rDcZlceSfE6FvUMlxmETNFO7SOG1hebL%2FkIR83Neaz%2BcMOBirp31p3Z%2Bwv7aZGgNiKB7h4XLCOCYPP9F8L28zzstbTKwNkmQ3%2Bc3xthhy6casTPJE7KHipBCR432Jnbiu5QprESw5RN78zrupNH7lY4JmeH5y%2FGpashMlmF%2BV2cTJou%2BshMOfi4MsGOqUBHltfE%2FVz88A59vj6tqhP7rHD9GkeuP0QxUF80ZOUcFSYdPjtoRUbLzqGWNxlGYlD%2FSJVpcUTwlRAFop%2F%2BLBs0EcxGJiifo%2B7F3mb2DyCJkG1BFt%2Bur%2Fqm9EvV3VslyWQyCrBnTZOpc5kR%2BKnisrrpHhT5lirreoZFQLaxtIpaf%2F3vKEh91qe%2B6qdRr%2FLaGi7KMA0gHpitCFuTND8WHNlB9wMZxB8&X-Amz-Signature=ccabbb06dce6c66cb8fe637f31d7db85eafbb8fe7a3aa730b7ddc1ef38f0e0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626XXVA5J%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLjVZUnVHWLrnxo4grI3SraV%2F1gQDdpiVjCqmokVbjjgIgTC51BHlp6k%2Ffd%2BOqCiNtk2WfAPP2ho2HQARYMlv2cQYq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDCjD%2B9ujO%2BWcN%2B7oPCrcAyVB0adqrXhQPKoAyEiICTEiXHz6qiA1xpfoVeu4BGHkS95Fh5Dj32Xndbj9AQ7c7pFDtKcbJ2MwwIfF9Fg3vhckXt%2FmmX9PUP94%2BChNOxfYMqfZGDeS2jD6ouSF7jua1tO7aivAJDa0G3FmXnwI%2B9UVahCZSVbcebsKPzafPxS%2Fv1jSjyS42X8VLpykXrUgXiANUU52OC9HFA6Kn9g3966DdmDvAkWVP2GRHwx14wpAwAo2lOCHYPnnQowS5fRFLYrW%2FyGJrU8eTKtDILlxypxWOL2vb2H7roLEe%2F%2FEEd1nxhEUQ7eVBfbbKdAbE1FGqISpUAZuvnNjfe%2F9Fw7YMCTJb2fvWwpRtbSLZfZ4XMBkirApdSt96bilCjevTbXOcM%2FGRz7aAzYIkBTVEHfTXB%2FQUqaBF3yd5gO6HBk%2FDLRaG0w3ikhE2NP7aKCQ%2Bkjscy1G3FQP51rDcZlceSfE6FvUMlxmETNFO7SOG1hebL%2FkIR83Neaz%2BcMOBirp31p3Z%2Bwv7aZGgNiKB7h4XLCOCYPP9F8L28zzstbTKwNkmQ3%2Bc3xthhy6casTPJE7KHipBCR432Jnbiu5QprESw5RN78zrupNH7lY4JmeH5y%2FGpashMlmF%2BV2cTJou%2BshMOfi4MsGOqUBHltfE%2FVz88A59vj6tqhP7rHD9GkeuP0QxUF80ZOUcFSYdPjtoRUbLzqGWNxlGYlD%2FSJVpcUTwlRAFop%2F%2BLBs0EcxGJiifo%2B7F3mb2DyCJkG1BFt%2Bur%2Fqm9EvV3VslyWQyCrBnTZOpc5kR%2BKnisrrpHhT5lirreoZFQLaxtIpaf%2F3vKEh91qe%2B6qdRr%2FLaGi7KMA0gHpitCFuTND8WHNlB9wMZxB8&X-Amz-Signature=8eff3fbd16cca4685ea26df2ee0b7951d963ab0001e6dbdba49bfff768e8fd7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626XXVA5J%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLjVZUnVHWLrnxo4grI3SraV%2F1gQDdpiVjCqmokVbjjgIgTC51BHlp6k%2Ffd%2BOqCiNtk2WfAPP2ho2HQARYMlv2cQYq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDCjD%2B9ujO%2BWcN%2B7oPCrcAyVB0adqrXhQPKoAyEiICTEiXHz6qiA1xpfoVeu4BGHkS95Fh5Dj32Xndbj9AQ7c7pFDtKcbJ2MwwIfF9Fg3vhckXt%2FmmX9PUP94%2BChNOxfYMqfZGDeS2jD6ouSF7jua1tO7aivAJDa0G3FmXnwI%2B9UVahCZSVbcebsKPzafPxS%2Fv1jSjyS42X8VLpykXrUgXiANUU52OC9HFA6Kn9g3966DdmDvAkWVP2GRHwx14wpAwAo2lOCHYPnnQowS5fRFLYrW%2FyGJrU8eTKtDILlxypxWOL2vb2H7roLEe%2F%2FEEd1nxhEUQ7eVBfbbKdAbE1FGqISpUAZuvnNjfe%2F9Fw7YMCTJb2fvWwpRtbSLZfZ4XMBkirApdSt96bilCjevTbXOcM%2FGRz7aAzYIkBTVEHfTXB%2FQUqaBF3yd5gO6HBk%2FDLRaG0w3ikhE2NP7aKCQ%2Bkjscy1G3FQP51rDcZlceSfE6FvUMlxmETNFO7SOG1hebL%2FkIR83Neaz%2BcMOBirp31p3Z%2Bwv7aZGgNiKB7h4XLCOCYPP9F8L28zzstbTKwNkmQ3%2Bc3xthhy6casTPJE7KHipBCR432Jnbiu5QprESw5RN78zrupNH7lY4JmeH5y%2FGpashMlmF%2BV2cTJou%2BshMOfi4MsGOqUBHltfE%2FVz88A59vj6tqhP7rHD9GkeuP0QxUF80ZOUcFSYdPjtoRUbLzqGWNxlGYlD%2FSJVpcUTwlRAFop%2F%2BLBs0EcxGJiifo%2B7F3mb2DyCJkG1BFt%2Bur%2Fqm9EvV3VslyWQyCrBnTZOpc5kR%2BKnisrrpHhT5lirreoZFQLaxtIpaf%2F3vKEh91qe%2B6qdRr%2FLaGi7KMA0gHpitCFuTND8WHNlB9wMZxB8&X-Amz-Signature=bdc9e3470887c088147cbedaea3162f59cf4d04f367cf0975a02401b999afad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626XXVA5J%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLjVZUnVHWLrnxo4grI3SraV%2F1gQDdpiVjCqmokVbjjgIgTC51BHlp6k%2Ffd%2BOqCiNtk2WfAPP2ho2HQARYMlv2cQYq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDCjD%2B9ujO%2BWcN%2B7oPCrcAyVB0adqrXhQPKoAyEiICTEiXHz6qiA1xpfoVeu4BGHkS95Fh5Dj32Xndbj9AQ7c7pFDtKcbJ2MwwIfF9Fg3vhckXt%2FmmX9PUP94%2BChNOxfYMqfZGDeS2jD6ouSF7jua1tO7aivAJDa0G3FmXnwI%2B9UVahCZSVbcebsKPzafPxS%2Fv1jSjyS42X8VLpykXrUgXiANUU52OC9HFA6Kn9g3966DdmDvAkWVP2GRHwx14wpAwAo2lOCHYPnnQowS5fRFLYrW%2FyGJrU8eTKtDILlxypxWOL2vb2H7roLEe%2F%2FEEd1nxhEUQ7eVBfbbKdAbE1FGqISpUAZuvnNjfe%2F9Fw7YMCTJb2fvWwpRtbSLZfZ4XMBkirApdSt96bilCjevTbXOcM%2FGRz7aAzYIkBTVEHfTXB%2FQUqaBF3yd5gO6HBk%2FDLRaG0w3ikhE2NP7aKCQ%2Bkjscy1G3FQP51rDcZlceSfE6FvUMlxmETNFO7SOG1hebL%2FkIR83Neaz%2BcMOBirp31p3Z%2Bwv7aZGgNiKB7h4XLCOCYPP9F8L28zzstbTKwNkmQ3%2Bc3xthhy6casTPJE7KHipBCR432Jnbiu5QprESw5RN78zrupNH7lY4JmeH5y%2FGpashMlmF%2BV2cTJou%2BshMOfi4MsGOqUBHltfE%2FVz88A59vj6tqhP7rHD9GkeuP0QxUF80ZOUcFSYdPjtoRUbLzqGWNxlGYlD%2FSJVpcUTwlRAFop%2F%2BLBs0EcxGJiifo%2B7F3mb2DyCJkG1BFt%2Bur%2Fqm9EvV3VslyWQyCrBnTZOpc5kR%2BKnisrrpHhT5lirreoZFQLaxtIpaf%2F3vKEh91qe%2B6qdRr%2FLaGi7KMA0gHpitCFuTND8WHNlB9wMZxB8&X-Amz-Signature=779202cc5b8bfbbb8d4aa2e6f57e1dd65c2cb5399601040c8b3488d9ac53cebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626XXVA5J%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLjVZUnVHWLrnxo4grI3SraV%2F1gQDdpiVjCqmokVbjjgIgTC51BHlp6k%2Ffd%2BOqCiNtk2WfAPP2ho2HQARYMlv2cQYq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDCjD%2B9ujO%2BWcN%2B7oPCrcAyVB0adqrXhQPKoAyEiICTEiXHz6qiA1xpfoVeu4BGHkS95Fh5Dj32Xndbj9AQ7c7pFDtKcbJ2MwwIfF9Fg3vhckXt%2FmmX9PUP94%2BChNOxfYMqfZGDeS2jD6ouSF7jua1tO7aivAJDa0G3FmXnwI%2B9UVahCZSVbcebsKPzafPxS%2Fv1jSjyS42X8VLpykXrUgXiANUU52OC9HFA6Kn9g3966DdmDvAkWVP2GRHwx14wpAwAo2lOCHYPnnQowS5fRFLYrW%2FyGJrU8eTKtDILlxypxWOL2vb2H7roLEe%2F%2FEEd1nxhEUQ7eVBfbbKdAbE1FGqISpUAZuvnNjfe%2F9Fw7YMCTJb2fvWwpRtbSLZfZ4XMBkirApdSt96bilCjevTbXOcM%2FGRz7aAzYIkBTVEHfTXB%2FQUqaBF3yd5gO6HBk%2FDLRaG0w3ikhE2NP7aKCQ%2Bkjscy1G3FQP51rDcZlceSfE6FvUMlxmETNFO7SOG1hebL%2FkIR83Neaz%2BcMOBirp31p3Z%2Bwv7aZGgNiKB7h4XLCOCYPP9F8L28zzstbTKwNkmQ3%2Bc3xthhy6casTPJE7KHipBCR432Jnbiu5QprESw5RN78zrupNH7lY4JmeH5y%2FGpashMlmF%2BV2cTJou%2BshMOfi4MsGOqUBHltfE%2FVz88A59vj6tqhP7rHD9GkeuP0QxUF80ZOUcFSYdPjtoRUbLzqGWNxlGYlD%2FSJVpcUTwlRAFop%2F%2BLBs0EcxGJiifo%2B7F3mb2DyCJkG1BFt%2Bur%2Fqm9EvV3VslyWQyCrBnTZOpc5kR%2BKnisrrpHhT5lirreoZFQLaxtIpaf%2F3vKEh91qe%2B6qdRr%2FLaGi7KMA0gHpitCFuTND8WHNlB9wMZxB8&X-Amz-Signature=976dbe75c9e7d21a780c1a527447692930919ca70f0f44e42d7e3d46010fa771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626XXVA5J%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLjVZUnVHWLrnxo4grI3SraV%2F1gQDdpiVjCqmokVbjjgIgTC51BHlp6k%2Ffd%2BOqCiNtk2WfAPP2ho2HQARYMlv2cQYq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDCjD%2B9ujO%2BWcN%2B7oPCrcAyVB0adqrXhQPKoAyEiICTEiXHz6qiA1xpfoVeu4BGHkS95Fh5Dj32Xndbj9AQ7c7pFDtKcbJ2MwwIfF9Fg3vhckXt%2FmmX9PUP94%2BChNOxfYMqfZGDeS2jD6ouSF7jua1tO7aivAJDa0G3FmXnwI%2B9UVahCZSVbcebsKPzafPxS%2Fv1jSjyS42X8VLpykXrUgXiANUU52OC9HFA6Kn9g3966DdmDvAkWVP2GRHwx14wpAwAo2lOCHYPnnQowS5fRFLYrW%2FyGJrU8eTKtDILlxypxWOL2vb2H7roLEe%2F%2FEEd1nxhEUQ7eVBfbbKdAbE1FGqISpUAZuvnNjfe%2F9Fw7YMCTJb2fvWwpRtbSLZfZ4XMBkirApdSt96bilCjevTbXOcM%2FGRz7aAzYIkBTVEHfTXB%2FQUqaBF3yd5gO6HBk%2FDLRaG0w3ikhE2NP7aKCQ%2Bkjscy1G3FQP51rDcZlceSfE6FvUMlxmETNFO7SOG1hebL%2FkIR83Neaz%2BcMOBirp31p3Z%2Bwv7aZGgNiKB7h4XLCOCYPP9F8L28zzstbTKwNkmQ3%2Bc3xthhy6casTPJE7KHipBCR432Jnbiu5QprESw5RN78zrupNH7lY4JmeH5y%2FGpashMlmF%2BV2cTJou%2BshMOfi4MsGOqUBHltfE%2FVz88A59vj6tqhP7rHD9GkeuP0QxUF80ZOUcFSYdPjtoRUbLzqGWNxlGYlD%2FSJVpcUTwlRAFop%2F%2BLBs0EcxGJiifo%2B7F3mb2DyCJkG1BFt%2Bur%2Fqm9EvV3VslyWQyCrBnTZOpc5kR%2BKnisrrpHhT5lirreoZFQLaxtIpaf%2F3vKEh91qe%2B6qdRr%2FLaGi7KMA0gHpitCFuTND8WHNlB9wMZxB8&X-Amz-Signature=844add40872701c2016328670356853b110869dfff2ed92ed7f84212b6ba7d0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZNWOQKA%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYSTjy%2FI7%2FG0izVn0xBEHuI%2FW%2BESICGEmwtDyxqtxX5AiEA7bgSvdPXzOcYJhvvXAWoVZjyj%2FgnQn9sbBnF1jNCpYMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDERoDPILztcMa81OQyrcA%2F8ezRrYaS8F2hSjnx1SdFe4d5UTjoopazv5xrI%2B6skiz3m3nzkItAyXCSvJHWDNqNucajIWSfiWLqIISeOkpyaqGuUHWt%2BiVp%2B3n%2F3BUmGu5zS6aLNEdZgC53epK44hVxwh0OxaOvBh%2F83xhrwGXvKxAOdkhiB9Hq%2FDVdoYQz83Cve5dUSuI75P4FmBP8NaM8wC4D8NQfy9dTyyr8hn9aEWdWkaVfkLjq3a2Cp2c94ymM53TjvrMeLEjLsv4CeaCVq7ob0frZLx%2BiewqSiy1xsVoDdq1gUNrkT%2F%2FnpEnHgutJoSFTczbR6iIGgmu8GYj6qlNJkr8lwtMFY7P2kH2b6lYtk3tYUUp3G%2FTRJGW4MMKFo9rSd1l40TGjfr4Xkk%2FDUY9XArgz%2FHBTAuUpRuPcTQdthGASv1rJKh1ZmUMw7MSbTygEqRmVXl4XzjIyfG1rx9YGA5UjW1TcGaEOtddFlvhS%2BoIaDDieDB376jxe3pn7Fp0efG7Xzs7UN%2FIbDILWMg7Matb4j9LWM9WritY8Yg7iRcmBJtOnhmEiwQHHO8T8cZkLSAAVu5RWZPgH62xddt0NJJDnohC5GkndoO%2BAPXxqF%2Bm0AEw18FF8pWYDU7gKwqeAhFSvm1esV9MLDi4MsGOqUBRgHqTCoRV3J41rRuyDv9%2BhY%2FCmdQ0wZ%2BVbJiMX7ksT5Gdqfq8EAc42641dMx1OtVXqdmhuYdZb0N7%2B%2Fiz%2Bbxj3fNp3F9xpBzAYFhC0oI%2BR5C5%2B8a8TxaH3ZK3oN6bAjQ7KAa14XY3irusLplAoNXtOEAs9lucYNWnKVVuu6ArGqwKeXX8VaQRtDqUbz6L68XmqKkupnEfm72z7qQ%2FMViJHFtlM3S&X-Amz-Signature=48fcce2dc87b158c52c2fcb26d8e922b8addd4f48e93a0e08d39bfdc52735858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZNWOQKA%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYSTjy%2FI7%2FG0izVn0xBEHuI%2FW%2BESICGEmwtDyxqtxX5AiEA7bgSvdPXzOcYJhvvXAWoVZjyj%2FgnQn9sbBnF1jNCpYMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDERoDPILztcMa81OQyrcA%2F8ezRrYaS8F2hSjnx1SdFe4d5UTjoopazv5xrI%2B6skiz3m3nzkItAyXCSvJHWDNqNucajIWSfiWLqIISeOkpyaqGuUHWt%2BiVp%2B3n%2F3BUmGu5zS6aLNEdZgC53epK44hVxwh0OxaOvBh%2F83xhrwGXvKxAOdkhiB9Hq%2FDVdoYQz83Cve5dUSuI75P4FmBP8NaM8wC4D8NQfy9dTyyr8hn9aEWdWkaVfkLjq3a2Cp2c94ymM53TjvrMeLEjLsv4CeaCVq7ob0frZLx%2BiewqSiy1xsVoDdq1gUNrkT%2F%2FnpEnHgutJoSFTczbR6iIGgmu8GYj6qlNJkr8lwtMFY7P2kH2b6lYtk3tYUUp3G%2FTRJGW4MMKFo9rSd1l40TGjfr4Xkk%2FDUY9XArgz%2FHBTAuUpRuPcTQdthGASv1rJKh1ZmUMw7MSbTygEqRmVXl4XzjIyfG1rx9YGA5UjW1TcGaEOtddFlvhS%2BoIaDDieDB376jxe3pn7Fp0efG7Xzs7UN%2FIbDILWMg7Matb4j9LWM9WritY8Yg7iRcmBJtOnhmEiwQHHO8T8cZkLSAAVu5RWZPgH62xddt0NJJDnohC5GkndoO%2BAPXxqF%2Bm0AEw18FF8pWYDU7gKwqeAhFSvm1esV9MLDi4MsGOqUBRgHqTCoRV3J41rRuyDv9%2BhY%2FCmdQ0wZ%2BVbJiMX7ksT5Gdqfq8EAc42641dMx1OtVXqdmhuYdZb0N7%2B%2Fiz%2Bbxj3fNp3F9xpBzAYFhC0oI%2BR5C5%2B8a8TxaH3ZK3oN6bAjQ7KAa14XY3irusLplAoNXtOEAs9lucYNWnKVVuu6ArGqwKeXX8VaQRtDqUbz6L68XmqKkupnEfm72z7qQ%2FMViJHFtlM3S&X-Amz-Signature=f275c464ef9f1fa718c91c5deb7306237832d506debe68f99ae15ff2ef5f8b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZNWOQKA%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYSTjy%2FI7%2FG0izVn0xBEHuI%2FW%2BESICGEmwtDyxqtxX5AiEA7bgSvdPXzOcYJhvvXAWoVZjyj%2FgnQn9sbBnF1jNCpYMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDERoDPILztcMa81OQyrcA%2F8ezRrYaS8F2hSjnx1SdFe4d5UTjoopazv5xrI%2B6skiz3m3nzkItAyXCSvJHWDNqNucajIWSfiWLqIISeOkpyaqGuUHWt%2BiVp%2B3n%2F3BUmGu5zS6aLNEdZgC53epK44hVxwh0OxaOvBh%2F83xhrwGXvKxAOdkhiB9Hq%2FDVdoYQz83Cve5dUSuI75P4FmBP8NaM8wC4D8NQfy9dTyyr8hn9aEWdWkaVfkLjq3a2Cp2c94ymM53TjvrMeLEjLsv4CeaCVq7ob0frZLx%2BiewqSiy1xsVoDdq1gUNrkT%2F%2FnpEnHgutJoSFTczbR6iIGgmu8GYj6qlNJkr8lwtMFY7P2kH2b6lYtk3tYUUp3G%2FTRJGW4MMKFo9rSd1l40TGjfr4Xkk%2FDUY9XArgz%2FHBTAuUpRuPcTQdthGASv1rJKh1ZmUMw7MSbTygEqRmVXl4XzjIyfG1rx9YGA5UjW1TcGaEOtddFlvhS%2BoIaDDieDB376jxe3pn7Fp0efG7Xzs7UN%2FIbDILWMg7Matb4j9LWM9WritY8Yg7iRcmBJtOnhmEiwQHHO8T8cZkLSAAVu5RWZPgH62xddt0NJJDnohC5GkndoO%2BAPXxqF%2Bm0AEw18FF8pWYDU7gKwqeAhFSvm1esV9MLDi4MsGOqUBRgHqTCoRV3J41rRuyDv9%2BhY%2FCmdQ0wZ%2BVbJiMX7ksT5Gdqfq8EAc42641dMx1OtVXqdmhuYdZb0N7%2B%2Fiz%2Bbxj3fNp3F9xpBzAYFhC0oI%2BR5C5%2B8a8TxaH3ZK3oN6bAjQ7KAa14XY3irusLplAoNXtOEAs9lucYNWnKVVuu6ArGqwKeXX8VaQRtDqUbz6L68XmqKkupnEfm72z7qQ%2FMViJHFtlM3S&X-Amz-Signature=240d4394df69c5c5c86d8b716bef3544a4d6932d673e91c640e431c35cefa478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZNWOQKA%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYSTjy%2FI7%2FG0izVn0xBEHuI%2FW%2BESICGEmwtDyxqtxX5AiEA7bgSvdPXzOcYJhvvXAWoVZjyj%2FgnQn9sbBnF1jNCpYMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDERoDPILztcMa81OQyrcA%2F8ezRrYaS8F2hSjnx1SdFe4d5UTjoopazv5xrI%2B6skiz3m3nzkItAyXCSvJHWDNqNucajIWSfiWLqIISeOkpyaqGuUHWt%2BiVp%2B3n%2F3BUmGu5zS6aLNEdZgC53epK44hVxwh0OxaOvBh%2F83xhrwGXvKxAOdkhiB9Hq%2FDVdoYQz83Cve5dUSuI75P4FmBP8NaM8wC4D8NQfy9dTyyr8hn9aEWdWkaVfkLjq3a2Cp2c94ymM53TjvrMeLEjLsv4CeaCVq7ob0frZLx%2BiewqSiy1xsVoDdq1gUNrkT%2F%2FnpEnHgutJoSFTczbR6iIGgmu8GYj6qlNJkr8lwtMFY7P2kH2b6lYtk3tYUUp3G%2FTRJGW4MMKFo9rSd1l40TGjfr4Xkk%2FDUY9XArgz%2FHBTAuUpRuPcTQdthGASv1rJKh1ZmUMw7MSbTygEqRmVXl4XzjIyfG1rx9YGA5UjW1TcGaEOtddFlvhS%2BoIaDDieDB376jxe3pn7Fp0efG7Xzs7UN%2FIbDILWMg7Matb4j9LWM9WritY8Yg7iRcmBJtOnhmEiwQHHO8T8cZkLSAAVu5RWZPgH62xddt0NJJDnohC5GkndoO%2BAPXxqF%2Bm0AEw18FF8pWYDU7gKwqeAhFSvm1esV9MLDi4MsGOqUBRgHqTCoRV3J41rRuyDv9%2BhY%2FCmdQ0wZ%2BVbJiMX7ksT5Gdqfq8EAc42641dMx1OtVXqdmhuYdZb0N7%2B%2Fiz%2Bbxj3fNp3F9xpBzAYFhC0oI%2BR5C5%2B8a8TxaH3ZK3oN6bAjQ7KAa14XY3irusLplAoNXtOEAs9lucYNWnKVVuu6ArGqwKeXX8VaQRtDqUbz6L68XmqKkupnEfm72z7qQ%2FMViJHFtlM3S&X-Amz-Signature=41b754c91e112d4c796cdfd17a3937d9cb3f16acc82f1ba643b61f3c794892a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZNWOQKA%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYSTjy%2FI7%2FG0izVn0xBEHuI%2FW%2BESICGEmwtDyxqtxX5AiEA7bgSvdPXzOcYJhvvXAWoVZjyj%2FgnQn9sbBnF1jNCpYMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDERoDPILztcMa81OQyrcA%2F8ezRrYaS8F2hSjnx1SdFe4d5UTjoopazv5xrI%2B6skiz3m3nzkItAyXCSvJHWDNqNucajIWSfiWLqIISeOkpyaqGuUHWt%2BiVp%2B3n%2F3BUmGu5zS6aLNEdZgC53epK44hVxwh0OxaOvBh%2F83xhrwGXvKxAOdkhiB9Hq%2FDVdoYQz83Cve5dUSuI75P4FmBP8NaM8wC4D8NQfy9dTyyr8hn9aEWdWkaVfkLjq3a2Cp2c94ymM53TjvrMeLEjLsv4CeaCVq7ob0frZLx%2BiewqSiy1xsVoDdq1gUNrkT%2F%2FnpEnHgutJoSFTczbR6iIGgmu8GYj6qlNJkr8lwtMFY7P2kH2b6lYtk3tYUUp3G%2FTRJGW4MMKFo9rSd1l40TGjfr4Xkk%2FDUY9XArgz%2FHBTAuUpRuPcTQdthGASv1rJKh1ZmUMw7MSbTygEqRmVXl4XzjIyfG1rx9YGA5UjW1TcGaEOtddFlvhS%2BoIaDDieDB376jxe3pn7Fp0efG7Xzs7UN%2FIbDILWMg7Matb4j9LWM9WritY8Yg7iRcmBJtOnhmEiwQHHO8T8cZkLSAAVu5RWZPgH62xddt0NJJDnohC5GkndoO%2BAPXxqF%2Bm0AEw18FF8pWYDU7gKwqeAhFSvm1esV9MLDi4MsGOqUBRgHqTCoRV3J41rRuyDv9%2BhY%2FCmdQ0wZ%2BVbJiMX7ksT5Gdqfq8EAc42641dMx1OtVXqdmhuYdZb0N7%2B%2Fiz%2Bbxj3fNp3F9xpBzAYFhC0oI%2BR5C5%2B8a8TxaH3ZK3oN6bAjQ7KAa14XY3irusLplAoNXtOEAs9lucYNWnKVVuu6ArGqwKeXX8VaQRtDqUbz6L68XmqKkupnEfm72z7qQ%2FMViJHFtlM3S&X-Amz-Signature=943c39d952a81ee2010442f2234937faf49560238a800dcc9bf0895efad9ea6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3TPZI52%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa7NPeUFRyW3u43NWbjStuRGYeh%2BMWvHUJmjUYTS7P%2BgIgA6iqkI%2FllpcDAkMm961JCvGZMdxzvmybO5dZw3CFr28q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFuIev04UTDq3V3cySrcA%2BlpoIhnmSf8pdjziq2WUM%2BYDn7QWOOQWjXLHV2Bv8M8Fh2QqthhZg6kIAXQHpXPf5usP68DuFl%2FSwHLpcPYAXdE1n74OB2tnTF0dzEvN3e8L5qrsU5wRAn7nHjeJGoIZa2BQlpx8RtcHRaNyE4vtqm1F5afIBmzL%2BNou4t8zyB5ePVoabXHEELUW%2BGJ%2FRDJ3NmVzdyvM8IbblyIwOpd2%2FNza6zN39w61utWZ1xDpnN207LGNI%2FiqvyjTuJJzDrv5rAe5Rx6pKP13aHVUKDRpbKTqKPQge4vA3%2FmF%2BvntmVBcO3KydDFYS7TJFmgZtfcJ2B5DoDe%2Fc19cA1VSghH91uXek5OmtK%2FLJzibt%2FSxSZrPy1SahgmfBjMa8r8c7HpEJwntVw8KjAk7ApYIornES5L%2B0phs%2BQ%2F4nuSBUALgA5GoZybDsIZebk3rWZv3GQ%2FcMXuHgG05hh1GWHquMFuXniNODy5RaQ8EhVCd%2FR3AP9fkzskQQQxcBNZ8sxtSoRV6w%2BKrK9YjZkrXKE8J%2BvFhkiGCgZXp8%2FEF%2F62k%2F9t4q7IOg24%2FjWWrNbFbVATKojmqfPjGOxbD9HcUbucEhBR35KJlrmqIF5TIAg4bpOkNrMwFvhLCLEncmCLd8VrMJbj4MsGOqUBoBdv4p%2Bnt9isFqpHXIKJTBoEdT%2BuRKjr3uZE4nMT8BewYC1SXeQWXeIQfHgvCo5zciWvCn8nABC%2FpBZqdit0PfiGFEbLFW5PhIe83k%2BrLmOdn9eaFBSXd3zST7es14VM5wGZ9vOXee%2BtoBz5EeuOQ%2FyIjL8EhAPbqRZ%2BGd6kpzlpop8meWkOn3A7tSf7oqAzBuUxeEn44h5j2M4XZ%2BCgf47i8ndT&X-Amz-Signature=bc6bd558527accee2d9b06999cdfc2e7e4ec133be462ebc834597e422a59717a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3TPZI52%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa7NPeUFRyW3u43NWbjStuRGYeh%2BMWvHUJmjUYTS7P%2BgIgA6iqkI%2FllpcDAkMm961JCvGZMdxzvmybO5dZw3CFr28q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFuIev04UTDq3V3cySrcA%2BlpoIhnmSf8pdjziq2WUM%2BYDn7QWOOQWjXLHV2Bv8M8Fh2QqthhZg6kIAXQHpXPf5usP68DuFl%2FSwHLpcPYAXdE1n74OB2tnTF0dzEvN3e8L5qrsU5wRAn7nHjeJGoIZa2BQlpx8RtcHRaNyE4vtqm1F5afIBmzL%2BNou4t8zyB5ePVoabXHEELUW%2BGJ%2FRDJ3NmVzdyvM8IbblyIwOpd2%2FNza6zN39w61utWZ1xDpnN207LGNI%2FiqvyjTuJJzDrv5rAe5Rx6pKP13aHVUKDRpbKTqKPQge4vA3%2FmF%2BvntmVBcO3KydDFYS7TJFmgZtfcJ2B5DoDe%2Fc19cA1VSghH91uXek5OmtK%2FLJzibt%2FSxSZrPy1SahgmfBjMa8r8c7HpEJwntVw8KjAk7ApYIornES5L%2B0phs%2BQ%2F4nuSBUALgA5GoZybDsIZebk3rWZv3GQ%2FcMXuHgG05hh1GWHquMFuXniNODy5RaQ8EhVCd%2FR3AP9fkzskQQQxcBNZ8sxtSoRV6w%2BKrK9YjZkrXKE8J%2BvFhkiGCgZXp8%2FEF%2F62k%2F9t4q7IOg24%2FjWWrNbFbVATKojmqfPjGOxbD9HcUbucEhBR35KJlrmqIF5TIAg4bpOkNrMwFvhLCLEncmCLd8VrMJbj4MsGOqUBoBdv4p%2Bnt9isFqpHXIKJTBoEdT%2BuRKjr3uZE4nMT8BewYC1SXeQWXeIQfHgvCo5zciWvCn8nABC%2FpBZqdit0PfiGFEbLFW5PhIe83k%2BrLmOdn9eaFBSXd3zST7es14VM5wGZ9vOXee%2BtoBz5EeuOQ%2FyIjL8EhAPbqRZ%2BGd6kpzlpop8meWkOn3A7tSf7oqAzBuUxeEn44h5j2M4XZ%2BCgf47i8ndT&X-Amz-Signature=b17f59f7fd0be998152fc06ea8a54add3d587a6742712f4067e05218497ee3ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3TPZI52%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa7NPeUFRyW3u43NWbjStuRGYeh%2BMWvHUJmjUYTS7P%2BgIgA6iqkI%2FllpcDAkMm961JCvGZMdxzvmybO5dZw3CFr28q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFuIev04UTDq3V3cySrcA%2BlpoIhnmSf8pdjziq2WUM%2BYDn7QWOOQWjXLHV2Bv8M8Fh2QqthhZg6kIAXQHpXPf5usP68DuFl%2FSwHLpcPYAXdE1n74OB2tnTF0dzEvN3e8L5qrsU5wRAn7nHjeJGoIZa2BQlpx8RtcHRaNyE4vtqm1F5afIBmzL%2BNou4t8zyB5ePVoabXHEELUW%2BGJ%2FRDJ3NmVzdyvM8IbblyIwOpd2%2FNza6zN39w61utWZ1xDpnN207LGNI%2FiqvyjTuJJzDrv5rAe5Rx6pKP13aHVUKDRpbKTqKPQge4vA3%2FmF%2BvntmVBcO3KydDFYS7TJFmgZtfcJ2B5DoDe%2Fc19cA1VSghH91uXek5OmtK%2FLJzibt%2FSxSZrPy1SahgmfBjMa8r8c7HpEJwntVw8KjAk7ApYIornES5L%2B0phs%2BQ%2F4nuSBUALgA5GoZybDsIZebk3rWZv3GQ%2FcMXuHgG05hh1GWHquMFuXniNODy5RaQ8EhVCd%2FR3AP9fkzskQQQxcBNZ8sxtSoRV6w%2BKrK9YjZkrXKE8J%2BvFhkiGCgZXp8%2FEF%2F62k%2F9t4q7IOg24%2FjWWrNbFbVATKojmqfPjGOxbD9HcUbucEhBR35KJlrmqIF5TIAg4bpOkNrMwFvhLCLEncmCLd8VrMJbj4MsGOqUBoBdv4p%2Bnt9isFqpHXIKJTBoEdT%2BuRKjr3uZE4nMT8BewYC1SXeQWXeIQfHgvCo5zciWvCn8nABC%2FpBZqdit0PfiGFEbLFW5PhIe83k%2BrLmOdn9eaFBSXd3zST7es14VM5wGZ9vOXee%2BtoBz5EeuOQ%2FyIjL8EhAPbqRZ%2BGd6kpzlpop8meWkOn3A7tSf7oqAzBuUxeEn44h5j2M4XZ%2BCgf47i8ndT&X-Amz-Signature=a8b1aa770e7582f53c66470f676bac500cd97c0045b8c5446425c091e19f2de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZK3FLT%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUL%2FsxKBX9NJKIOaEH%2Bu5oZATrq4etKL4xkOVwLbEvYAiBg%2Ble9H6awMlIYO8%2BWznXaYoJWLk4mkf%2Fvqh0G5br8Syr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMrOvgIaNwHsrGjp3MKtwDF7ZR%2BwiEgW4BazHTAScKgzKX9ThwfWnlHNE4mL3AiNm%2F3wxUzv%2FOUU1%2FMLwu4dMLGSq5Himm7LLHxWKiCO5N6W9TbHg4MRaPDN2aCVkwYOXeuldLuHYnEuTWErAu4XF172ul3wOT5H2UKLMsHNrMNC0ibqcjVQDo%2F%2FYhheEKBASzw8DWjBzsridaOkUputAmHYryAn4xtQGaaQoA9UhOZLU0%2BIy0SmazF3%2BDITBnncfwnfoZB9q%2FO5Zbv4Dp2FlAkjPpnjUHrF%2BSBM0PlXQz87C7Az5iEXZ7oMFEKGenk9hs5d6F1JsodBEUyYu8uLtFtW9qAUqwW91lBgx95BLIPaIwn49OevF6OF4PmhfMIuF8%2F70wH2CmAYGf7oFSrVHBEXw%2Fl4FSvRsJqxTIoMr4ITr3UD2n5V7BW53MxzI6REwg77b6lXSCz27laT7Xm%2BYDVdwbnlbQSG2mHp6oChKbnjD1swWfIMa0B9e6A5diERvGNI829CT9DuGBnq%2Bgl%2BJ08rOd4CKfFV%2B2XZvUiGzhuH8uT%2FG88ZbePOMfiPAfTS8AIDRBCm0aYPoNrHotJuI%2FER0pXBPRJIHT%2B6Mtr%2BLUDjKGTMfrXJ6DP2QnALBy5GxfLEE9Pl8%2B8cjA%2FcMwu%2BPgywY6pgHD%2Fu9LSpOGG8ZCOh9spNAKU6k3YikoCb7kXevRphjzqkvuWaR%2BmsLIVVkinRoq71gvvQwt2o1AzpClgzTEX8r8cVRrOJt3XVKDrQiCAaGjrSqcAKZQiRpaDioe%2Fs4bMan0pqUb8mzu2y0bzw75s9zYoluS0V0lk84qIw1yp%2FEbhLiMc9%2B1j8FZzYkyc8P3yUReoL9%2FeymrMOVbLvhP9bZbZ%2FIaPmj8&X-Amz-Signature=915d52d90db2d2486fe00c01d73d47fec1a0ac9a1f351a49550e89393013ee1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZK3FLT%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUL%2FsxKBX9NJKIOaEH%2Bu5oZATrq4etKL4xkOVwLbEvYAiBg%2Ble9H6awMlIYO8%2BWznXaYoJWLk4mkf%2Fvqh0G5br8Syr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMrOvgIaNwHsrGjp3MKtwDF7ZR%2BwiEgW4BazHTAScKgzKX9ThwfWnlHNE4mL3AiNm%2F3wxUzv%2FOUU1%2FMLwu4dMLGSq5Himm7LLHxWKiCO5N6W9TbHg4MRaPDN2aCVkwYOXeuldLuHYnEuTWErAu4XF172ul3wOT5H2UKLMsHNrMNC0ibqcjVQDo%2F%2FYhheEKBASzw8DWjBzsridaOkUputAmHYryAn4xtQGaaQoA9UhOZLU0%2BIy0SmazF3%2BDITBnncfwnfoZB9q%2FO5Zbv4Dp2FlAkjPpnjUHrF%2BSBM0PlXQz87C7Az5iEXZ7oMFEKGenk9hs5d6F1JsodBEUyYu8uLtFtW9qAUqwW91lBgx95BLIPaIwn49OevF6OF4PmhfMIuF8%2F70wH2CmAYGf7oFSrVHBEXw%2Fl4FSvRsJqxTIoMr4ITr3UD2n5V7BW53MxzI6REwg77b6lXSCz27laT7Xm%2BYDVdwbnlbQSG2mHp6oChKbnjD1swWfIMa0B9e6A5diERvGNI829CT9DuGBnq%2Bgl%2BJ08rOd4CKfFV%2B2XZvUiGzhuH8uT%2FG88ZbePOMfiPAfTS8AIDRBCm0aYPoNrHotJuI%2FER0pXBPRJIHT%2B6Mtr%2BLUDjKGTMfrXJ6DP2QnALBy5GxfLEE9Pl8%2B8cjA%2FcMwu%2BPgywY6pgHD%2Fu9LSpOGG8ZCOh9spNAKU6k3YikoCb7kXevRphjzqkvuWaR%2BmsLIVVkinRoq71gvvQwt2o1AzpClgzTEX8r8cVRrOJt3XVKDrQiCAaGjrSqcAKZQiRpaDioe%2Fs4bMan0pqUb8mzu2y0bzw75s9zYoluS0V0lk84qIw1yp%2FEbhLiMc9%2B1j8FZzYkyc8P3yUReoL9%2FeymrMOVbLvhP9bZbZ%2FIaPmj8&X-Amz-Signature=b6147cb98eb53a7a7dce97d25f40971c57eac96bcc3d591ae9162062bc81e214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D57N4NK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgHeimQzwOe089CC5fFvRTElYou5cEspJ%2FbNeQr%2BB7nAiAY0ULZxP%2FnWhO00%2F4vBnMLAES4mO5tJwGOZ0MrFOdc%2FSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMdDJS2H2v7rJnXt1KKtwDcMwWl3cnJdkZnQaqagIGA9MUewBrQHpueIw%2BBU9e6Ee0CEq5a62he4UgKs5j2NPtMYmK1qjLqd84DwmgIsSvab0f8NLvJNnB30SRnt2SfUTCGUM2yY8cTm1HovYmfVT99Yv1QSWz%2BiNyW%2Fc09FNLwf936soiFkeW65v2RtetQX2dMSG%2BWgEEfz%2BTfCnpbZyPwtF61UxbHTpngGlAo8zxBodO4alWlIu6MJ9wbb2LIILiQCku%2FhKQKwkISgU%2FEC%2Fe4w%2BbwryX%2BRAqC9EI20LER8hsWRp2uBsvko6LhfhXOGfLvdv7P%2FD7VL3O3ID9HfePAQN4NYeD%2F1%2FUTi1hkdXxMIz9977%2FKnQmYMWEJUbooIpKsIZwK1qpf0XJl0J4QDlpy4v3u0F5BkJqs54TGoI4H%2FfJ0BB%2B9xx2iZZJlPGLC5Q3vjomIqk3BK1fQLC5FiMFkFzePhFeGzmsUF8T7ufJhO2Gob5lVHlje1SbvUAUtM%2FvlJeVZHx6qHOYDo10Hvmk3Y9Y60qVujw3D%2FoJOGtU%2B0cEcydrsKSXFMejPOhetuJGjijpuL3NiD89UJSrOrMSo4zTZy597ockWLhF6qLxv2t9v84GJrEZ7a0A7zmRwSTL44PPgOPbLLGotxUwkuLgywY6pgFlNgXH3QGaTve%2F3Bvb8pSy4Z4YEso7XKGf4OXwvwx4jPLVu%2F0ybajW4il10tMVIAUKEh%2BxtGBNFCidwm4yeAUn%2F3kqxtNAGvYc1JncB4%2BwfNNBpJL5N2usDAhGS3s0sIvEBn4AcEdofc%2F5EjUtoOb%2BnGT8YZp08%2BOPr1kq6o2AGKwzH5AI98RTHj8TwSRw8AHlLW%2Bj23XsUpE4e3EvqkQTtuCbxmBZ&X-Amz-Signature=acfb3c528c11056a3c15c9eb7375bc3a443b6dc55eed59ea8fcdd2c818a74b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D57N4NK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgHeimQzwOe089CC5fFvRTElYou5cEspJ%2FbNeQr%2BB7nAiAY0ULZxP%2FnWhO00%2F4vBnMLAES4mO5tJwGOZ0MrFOdc%2FSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMdDJS2H2v7rJnXt1KKtwDcMwWl3cnJdkZnQaqagIGA9MUewBrQHpueIw%2BBU9e6Ee0CEq5a62he4UgKs5j2NPtMYmK1qjLqd84DwmgIsSvab0f8NLvJNnB30SRnt2SfUTCGUM2yY8cTm1HovYmfVT99Yv1QSWz%2BiNyW%2Fc09FNLwf936soiFkeW65v2RtetQX2dMSG%2BWgEEfz%2BTfCnpbZyPwtF61UxbHTpngGlAo8zxBodO4alWlIu6MJ9wbb2LIILiQCku%2FhKQKwkISgU%2FEC%2Fe4w%2BbwryX%2BRAqC9EI20LER8hsWRp2uBsvko6LhfhXOGfLvdv7P%2FD7VL3O3ID9HfePAQN4NYeD%2F1%2FUTi1hkdXxMIz9977%2FKnQmYMWEJUbooIpKsIZwK1qpf0XJl0J4QDlpy4v3u0F5BkJqs54TGoI4H%2FfJ0BB%2B9xx2iZZJlPGLC5Q3vjomIqk3BK1fQLC5FiMFkFzePhFeGzmsUF8T7ufJhO2Gob5lVHlje1SbvUAUtM%2FvlJeVZHx6qHOYDo10Hvmk3Y9Y60qVujw3D%2FoJOGtU%2B0cEcydrsKSXFMejPOhetuJGjijpuL3NiD89UJSrOrMSo4zTZy597ockWLhF6qLxv2t9v84GJrEZ7a0A7zmRwSTL44PPgOPbLLGotxUwkuLgywY6pgFlNgXH3QGaTve%2F3Bvb8pSy4Z4YEso7XKGf4OXwvwx4jPLVu%2F0ybajW4il10tMVIAUKEh%2BxtGBNFCidwm4yeAUn%2F3kqxtNAGvYc1JncB4%2BwfNNBpJL5N2usDAhGS3s0sIvEBn4AcEdofc%2F5EjUtoOb%2BnGT8YZp08%2BOPr1kq6o2AGKwzH5AI98RTHj8TwSRw8AHlLW%2Bj23XsUpE4e3EvqkQTtuCbxmBZ&X-Amz-Signature=ca957256dabfdcaa13dc2265fa4ab63a2e7ecbe89c223ded498253ac2368f7ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D57N4NK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgHeimQzwOe089CC5fFvRTElYou5cEspJ%2FbNeQr%2BB7nAiAY0ULZxP%2FnWhO00%2F4vBnMLAES4mO5tJwGOZ0MrFOdc%2FSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMdDJS2H2v7rJnXt1KKtwDcMwWl3cnJdkZnQaqagIGA9MUewBrQHpueIw%2BBU9e6Ee0CEq5a62he4UgKs5j2NPtMYmK1qjLqd84DwmgIsSvab0f8NLvJNnB30SRnt2SfUTCGUM2yY8cTm1HovYmfVT99Yv1QSWz%2BiNyW%2Fc09FNLwf936soiFkeW65v2RtetQX2dMSG%2BWgEEfz%2BTfCnpbZyPwtF61UxbHTpngGlAo8zxBodO4alWlIu6MJ9wbb2LIILiQCku%2FhKQKwkISgU%2FEC%2Fe4w%2BbwryX%2BRAqC9EI20LER8hsWRp2uBsvko6LhfhXOGfLvdv7P%2FD7VL3O3ID9HfePAQN4NYeD%2F1%2FUTi1hkdXxMIz9977%2FKnQmYMWEJUbooIpKsIZwK1qpf0XJl0J4QDlpy4v3u0F5BkJqs54TGoI4H%2FfJ0BB%2B9xx2iZZJlPGLC5Q3vjomIqk3BK1fQLC5FiMFkFzePhFeGzmsUF8T7ufJhO2Gob5lVHlje1SbvUAUtM%2FvlJeVZHx6qHOYDo10Hvmk3Y9Y60qVujw3D%2FoJOGtU%2B0cEcydrsKSXFMejPOhetuJGjijpuL3NiD89UJSrOrMSo4zTZy597ockWLhF6qLxv2t9v84GJrEZ7a0A7zmRwSTL44PPgOPbLLGotxUwkuLgywY6pgFlNgXH3QGaTve%2F3Bvb8pSy4Z4YEso7XKGf4OXwvwx4jPLVu%2F0ybajW4il10tMVIAUKEh%2BxtGBNFCidwm4yeAUn%2F3kqxtNAGvYc1JncB4%2BwfNNBpJL5N2usDAhGS3s0sIvEBn4AcEdofc%2F5EjUtoOb%2BnGT8YZp08%2BOPr1kq6o2AGKwzH5AI98RTHj8TwSRw8AHlLW%2Bj23XsUpE4e3EvqkQTtuCbxmBZ&X-Amz-Signature=c5d7956e631e010f91455322e50552790ec26b3d68ed68d1af4019689f1f7f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D57N4NK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgHeimQzwOe089CC5fFvRTElYou5cEspJ%2FbNeQr%2BB7nAiAY0ULZxP%2FnWhO00%2F4vBnMLAES4mO5tJwGOZ0MrFOdc%2FSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMdDJS2H2v7rJnXt1KKtwDcMwWl3cnJdkZnQaqagIGA9MUewBrQHpueIw%2BBU9e6Ee0CEq5a62he4UgKs5j2NPtMYmK1qjLqd84DwmgIsSvab0f8NLvJNnB30SRnt2SfUTCGUM2yY8cTm1HovYmfVT99Yv1QSWz%2BiNyW%2Fc09FNLwf936soiFkeW65v2RtetQX2dMSG%2BWgEEfz%2BTfCnpbZyPwtF61UxbHTpngGlAo8zxBodO4alWlIu6MJ9wbb2LIILiQCku%2FhKQKwkISgU%2FEC%2Fe4w%2BbwryX%2BRAqC9EI20LER8hsWRp2uBsvko6LhfhXOGfLvdv7P%2FD7VL3O3ID9HfePAQN4NYeD%2F1%2FUTi1hkdXxMIz9977%2FKnQmYMWEJUbooIpKsIZwK1qpf0XJl0J4QDlpy4v3u0F5BkJqs54TGoI4H%2FfJ0BB%2B9xx2iZZJlPGLC5Q3vjomIqk3BK1fQLC5FiMFkFzePhFeGzmsUF8T7ufJhO2Gob5lVHlje1SbvUAUtM%2FvlJeVZHx6qHOYDo10Hvmk3Y9Y60qVujw3D%2FoJOGtU%2B0cEcydrsKSXFMejPOhetuJGjijpuL3NiD89UJSrOrMSo4zTZy597ockWLhF6qLxv2t9v84GJrEZ7a0A7zmRwSTL44PPgOPbLLGotxUwkuLgywY6pgFlNgXH3QGaTve%2F3Bvb8pSy4Z4YEso7XKGf4OXwvwx4jPLVu%2F0ybajW4il10tMVIAUKEh%2BxtGBNFCidwm4yeAUn%2F3kqxtNAGvYc1JncB4%2BwfNNBpJL5N2usDAhGS3s0sIvEBn4AcEdofc%2F5EjUtoOb%2BnGT8YZp08%2BOPr1kq6o2AGKwzH5AI98RTHj8TwSRw8AHlLW%2Bj23XsUpE4e3EvqkQTtuCbxmBZ&X-Amz-Signature=69b38a36f07920476e86e076b066db224a0a60663c445fc3a7d7fb9c7fca7f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D57N4NK%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgHeimQzwOe089CC5fFvRTElYou5cEspJ%2FbNeQr%2BB7nAiAY0ULZxP%2FnWhO00%2F4vBnMLAES4mO5tJwGOZ0MrFOdc%2FSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMdDJS2H2v7rJnXt1KKtwDcMwWl3cnJdkZnQaqagIGA9MUewBrQHpueIw%2BBU9e6Ee0CEq5a62he4UgKs5j2NPtMYmK1qjLqd84DwmgIsSvab0f8NLvJNnB30SRnt2SfUTCGUM2yY8cTm1HovYmfVT99Yv1QSWz%2BiNyW%2Fc09FNLwf936soiFkeW65v2RtetQX2dMSG%2BWgEEfz%2BTfCnpbZyPwtF61UxbHTpngGlAo8zxBodO4alWlIu6MJ9wbb2LIILiQCku%2FhKQKwkISgU%2FEC%2Fe4w%2BbwryX%2BRAqC9EI20LER8hsWRp2uBsvko6LhfhXOGfLvdv7P%2FD7VL3O3ID9HfePAQN4NYeD%2F1%2FUTi1hkdXxMIz9977%2FKnQmYMWEJUbooIpKsIZwK1qpf0XJl0J4QDlpy4v3u0F5BkJqs54TGoI4H%2FfJ0BB%2B9xx2iZZJlPGLC5Q3vjomIqk3BK1fQLC5FiMFkFzePhFeGzmsUF8T7ufJhO2Gob5lVHlje1SbvUAUtM%2FvlJeVZHx6qHOYDo10Hvmk3Y9Y60qVujw3D%2FoJOGtU%2B0cEcydrsKSXFMejPOhetuJGjijpuL3NiD89UJSrOrMSo4zTZy597ockWLhF6qLxv2t9v84GJrEZ7a0A7zmRwSTL44PPgOPbLLGotxUwkuLgywY6pgFlNgXH3QGaTve%2F3Bvb8pSy4Z4YEso7XKGf4OXwvwx4jPLVu%2F0ybajW4il10tMVIAUKEh%2BxtGBNFCidwm4yeAUn%2F3kqxtNAGvYc1JncB4%2BwfNNBpJL5N2usDAhGS3s0sIvEBn4AcEdofc%2F5EjUtoOb%2BnGT8YZp08%2BOPr1kq6o2AGKwzH5AI98RTHj8TwSRw8AHlLW%2Bj23XsUpE4e3EvqkQTtuCbxmBZ&X-Amz-Signature=36c7f067ec3cdef1f32892fd2c02a59f69c96a4b666144b1c1415fd5a46e40bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4WBUSE%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T041839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg%2FYOFQ7z6G0pYpjpUe3KBSA2meyASmowqPWWMZD5HKAIgAa4%2F6qcMfdZ3uNL1CkcKA8NAZMsFoDr13iQM7SC7Jx0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDGJd57v6%2BcMyYKLc6yrcAza6texEwVTlZdZ7xe2SIRpE5CaZ3QIwdakhxnxtEBE1HZhnSucam7m%2BCBnDtR6AFnBO%2FXq5DKTfwaVFeP9HCyVw5vyXhGh2q1902dAv4K08pDe1xGQPeexfF%2BZrNAujofsRRfyGUgWiRJ5cgIaKACnyH5EftM40zAKyNgXl5f95b3FidqM%2BnhoQZzlJgsLDrx6cC3z9E%2F6NAksPiwiukx50mk2LwjMasNzYTsBkrLRDStvJtLRkkgojZwZbLz4X2cd0FEV7YhRpff3DIf1YVnys4wgFyLpwlnj7F%2Fa2eO9wVAb0DPhlNYhQIm%2Fgm4GzQDmCtSEHX4YoBppQGI6hVyY%2F%2BK1EIopkY%2FgmZr18dsG%2FpkQsO7qvnl3%2BVDPVWkrv8kKX2JHeOKPRAF0eWoi%2Bf%2Fi1URrxhvOpjO%2B21mYUCbymXBoQN%2FbfJiMz%2BvBvUkOXpvN5fIOGIneAViSqFgoGCxind7eKpQB%2B80D8xn%2BOMUK4H4r8uA%2Ft8jTyVlfckoaqJXPvZoV0WNv4WapcgHNntM2nAZnAjsabZNI14CCtgAFCWc3oZEEdtOG%2Fd9t0%2FZsj4Krp3iBNjMxNHXRGH9jMMgIAvipvjGPF82nP%2FaXKQmW7uB9Fvq1Hqfv2UFALMOTi4MsGOqUBquI0RCvt%2BrrqlS5nElCH2RsswTciZuBiK8k4aZupRnLBixHcavp4farNPNBW4uAPyYFWuSi9xA2sxdikAMn9rJTqxexqKSRtF9n9747xjUlL%2FXK5JtAMUH%2FKNNGV8h%2BA3Te57rxVPYLhKf1TcRGF9qg1W8%2F2b4jiiUdXP5WQiytUwqYqprGeUIMEk4tMjkY%2BC4GUAq1zCwnwSrCTzeApIaaVNp%2Bx&X-Amz-Signature=5cdc12e29e2d5c8e15e4c0b72e0fb8c8aa7601d10dee5718669d1f4852566359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

