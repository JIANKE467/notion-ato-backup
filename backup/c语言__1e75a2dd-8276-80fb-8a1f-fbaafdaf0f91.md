
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNCJGGGZ%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3pvpMbwuG0dnNYDXtONaodhT9eJ%2BMPctkwdhLawsAmAiAttlJrvZ9O1Oo5pnMK1JNr5ooJ0S9y%2BFdEnrABW7XWZyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMrFam2J9P%2Fb4BQel5KtwDcaW1C1gmDMm8P4YV97TPe3szPafrZgueVyq9LX6k%2FraFWwql0KtfSFAJcSHRVkXzErzDUtKVAqQ%2FiQxCHe8%2FigJu6I8f7QdF4ePvxcL%2B5%2F5QCCAKoVLrcyozDHn%2BxceS6yENNp8NFIp9%2BB%2F%2FaRtojRjqn6JWZgrItm3zTo5sYACr%2Fq1JuydjF7%2BEbAmHdJaSPhxffwkVk2vsEKvDaZpEjfrPHHLq97m2WwXeSG9j%2F%2B9aV2HNEZ9%2BbPN0jIF0WKm9os94MHzaJOu1RSXDcXyaq7SMFl%2Fh2pBldGi4%2BVO8I%2BwkesKS1%2FW%2FElUVMxX15SP49FpkiRA7aP02veShOv%2F41IIoA3LK5mG80zXN4XnVTh4CvCHvFFxrY4Wqi%2BPnc%2B2oC4cy8M%2BsC6W2ski%2B82A0TqJ2%2FOs7ySU5fYG8CrGYZVAZTAenvcc8tzKZXywALF95yLxjyhoGHq9%2BaGYp%2FWk3U3ifzuy0WWZyI8GvAPGfly5NAo4r1fo%2FnjS2jrDcbzjNF80tmEmij%2BktGaxq9l%2BFEEUKHFtyNRNdDf4NuOJH4XVcfgaam0e8dftpv1dFo08fIL4pEx05S%2BCC56tD40e8BZMo5bZb0io%2FR75rSeHh%2BHV77Y6ztB7k9jIwYB0ws4vyygY6pgGV6Or4%2Buyc%2F2AjztMeABvAtkjr9Ya%2FUi83Efne8N00jKE0nkH91sBfZ%2F5pQaLANwQlnesJE4zTPcDfqkE6B4oJrx3mcC3W3vgOoPChvgewGQOyP%2F3GM2Iu3zekeODpLKLUwESZR12M28PQOPvBYq9uoBdPH26baPzWD94UlNdd5a21me%2B%2BE3lCseRRco9qysNJw5KXXmyIGdxgXJmfnZa76zfcApQO&X-Amz-Signature=f6ae8d4ce592deae18e621f81970e24a31e5d1d65df24e4ced38891a560b74da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O37NPYB%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzICm9ggsnZ9rwytdHcWcNgwVTj2d4MA3Qd9j1%2BWfEKAiBD0ZyQTuh8nWWMQuKuCZ7h7F656qaTOmhXtGHYaNUmNCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMMM5hSy923vOr7cJzKtwDkt40d8VERGJg5nzdpZfP0RNiG41Bu7vTJ9QeVcRQ%2FEI%2FhzlK6U%2B9HuFJwPucnhIaeqGtP9gIvAkCK%2FXtnQDua1JTDtB44PgeWp%2FXRogAzzBAPOXMOwpOdS2PNZJHuEnI%2BNthLqY%2BGHNNvr%2BUTzLVjJ%2BWvtjLOOoH3QU3KFiNMp1LDNvJ%2FJXLzEwAONcVCF%2Fwkj5xVgvVKqMtDxOEh3GWUALT2XtDoevGXUKWnasSCQHsLJ%2FFzXZGBqGwEuMoMGIs%2F4EqqnBc2gd%2BCz8iz7Keyh9ysBTdM3K6ip7EsiQj2YnBIhFnuuYEATj3uaewdY%2FdoVYbDKEzpTOP6i4gI5xXVfF4x3nm4xA9di%2Fff%2Fg2W8SLcQsl6gkbwNZ4RvNS8hWFZ54YLY4xIIhfIhsaSmngxpCpwnG6DMKrmZaTME72Fp3eg7XLZKYIjREq0b%2B0ILq2v%2B0mJsgx8ofeDDr%2Bbmt7U1%2BC0YTvjV7Bta5WknkOFt%2FXTYdFGg9NwzJHA9ItIxjX7GDiykwpnSMiK1jfGjGZGVHK04nKQar1Eh3eVKiJcVWLIR3%2FLeoISgR9oWLby65N6ApzW7bc%2Bg8rMbifDG2KFh4sr%2BbOQMX6AFFGv61o7HVc3rU8VjhouQMz52cw3IvyygY6pgGvt5GqjRK%2F6E19xsCKfNv7%2BV30YiOrlW9%2FJ%2BtpjVWR7bxp2yMDHuWKcVRiRnFjkr3bcNM05xWUsGexfncNdJUuZ9YRXNbWDvEp0QeENZ0eDiDyotO3tSjTx8ouYuppiLHA%2FGH5Rs2%2FAn1RHg%2B3tZOXnNL0go3WcZVVNmOq2Y9Xqhs42JBZ763PeclxV2hC9qgL2fha7MH5Ccov0kesc116f266P8PJ&X-Amz-Signature=3fbda29932d5070f5fc28024f426ab1b4efde541c43d5f8fae5aa99712dab224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O37NPYB%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzICm9ggsnZ9rwytdHcWcNgwVTj2d4MA3Qd9j1%2BWfEKAiBD0ZyQTuh8nWWMQuKuCZ7h7F656qaTOmhXtGHYaNUmNCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMMM5hSy923vOr7cJzKtwDkt40d8VERGJg5nzdpZfP0RNiG41Bu7vTJ9QeVcRQ%2FEI%2FhzlK6U%2B9HuFJwPucnhIaeqGtP9gIvAkCK%2FXtnQDua1JTDtB44PgeWp%2FXRogAzzBAPOXMOwpOdS2PNZJHuEnI%2BNthLqY%2BGHNNvr%2BUTzLVjJ%2BWvtjLOOoH3QU3KFiNMp1LDNvJ%2FJXLzEwAONcVCF%2Fwkj5xVgvVKqMtDxOEh3GWUALT2XtDoevGXUKWnasSCQHsLJ%2FFzXZGBqGwEuMoMGIs%2F4EqqnBc2gd%2BCz8iz7Keyh9ysBTdM3K6ip7EsiQj2YnBIhFnuuYEATj3uaewdY%2FdoVYbDKEzpTOP6i4gI5xXVfF4x3nm4xA9di%2Fff%2Fg2W8SLcQsl6gkbwNZ4RvNS8hWFZ54YLY4xIIhfIhsaSmngxpCpwnG6DMKrmZaTME72Fp3eg7XLZKYIjREq0b%2B0ILq2v%2B0mJsgx8ofeDDr%2Bbmt7U1%2BC0YTvjV7Bta5WknkOFt%2FXTYdFGg9NwzJHA9ItIxjX7GDiykwpnSMiK1jfGjGZGVHK04nKQar1Eh3eVKiJcVWLIR3%2FLeoISgR9oWLby65N6ApzW7bc%2Bg8rMbifDG2KFh4sr%2BbOQMX6AFFGv61o7HVc3rU8VjhouQMz52cw3IvyygY6pgGvt5GqjRK%2F6E19xsCKfNv7%2BV30YiOrlW9%2FJ%2BtpjVWR7bxp2yMDHuWKcVRiRnFjkr3bcNM05xWUsGexfncNdJUuZ9YRXNbWDvEp0QeENZ0eDiDyotO3tSjTx8ouYuppiLHA%2FGH5Rs2%2FAn1RHg%2B3tZOXnNL0go3WcZVVNmOq2Y9Xqhs42JBZ763PeclxV2hC9qgL2fha7MH5Ccov0kesc116f266P8PJ&X-Amz-Signature=187c458f41cd0ad946b60f738c3cd2210bb527fd12367fda7ffda4e4e49167fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRQOPRU%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLJNG055rmC7HhPLEAhRdkjVt6zB%2FTF%2B1KmrVhOBAlKAiEA4h%2FRLee7ZrJ9Cwwi3F6Q%2BZSUPXpVGWLpEaT819Y13goq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOh2S9dbqWljBjy2hircA4bBscpJzO74Iexyhfgk7hr6fX3Do8RSVMk6m9Znwh9Zh2mwNH24FoLBp1mlw0I8ZgmI7Xof7wr6%2FTYrkYE1MxXfMdoxGjzeRET8bRIL0JX39tBWvMtciRC0%2BS7HINw2KRvs8UFQZWaUeowzKYCNzzstdU4plyHB6tkAAOKm9Fr5tWDVOc41E8j%2FkdWYs20BBO4G4MCvXyyvwz%2FSccbfLBQ0o56Ov2%2BYOXhPEFYZAFg35Pp9ZSs9R9EL8Nch6aDU0rDTOoffoAs%2B0Nxkz4gITq8R7IUKhq7l4fHMfMyniJ9H%2FlPezpYzFhy7uF0ss1zojebl%2BOoShllDry%2Bf6Vi5duuy9wOs%2F%2BobACgxjCErzV%2Be3yD6ImU%2FnBr%2FYdfHHOxprxXQ6hfn9ASBWKrcEXt5EgyJXQMTlbQcadkV4t9w7YQIYmh2lB8clp4rVbLbs%2FaF1rd6%2BR6H6a2bi9RHq3xJqiX22X7jp83I2Jh0wI81N86x8%2B3Qrvgtf%2BIuZlewozkeJ%2FN6HqIRVBDn9QqmcKkVRt5vzlUANqRM7AvkQF5m2A2sEzVK9UEZTtj0nVe9RUcQoaBW9t21nXsAzxBzFxujRIqXh1%2B38%2FWbvFx39fneXoiS7ElM2YX6%2BcRQDftyMImM8soGOqUByaf4JDFvfBGMd%2FfC1ddy6GJk7HaylGVgIBz9HlNsT30Djsh6ubNChxE2jAKOpZ1ato13AkEPqrgN%2BVrBygDpg0uiguz7b3DG8uCBsgjlo2i90S1lPMW6N8PkhcCPY5jBYNZ7FeiYyRuv4K1Obz4dP0XWr0f98lqJpGeKZNx7J9DrhaMZlZa8V8zAEtiVwaMIGgkVS80avgkq2YY7JVgs790Ga5XR&X-Amz-Signature=44aecec1d13cdc259b2291bb37ad2128a478f8533806a33a5c1d73895b25bb52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRQOPRU%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLJNG055rmC7HhPLEAhRdkjVt6zB%2FTF%2B1KmrVhOBAlKAiEA4h%2FRLee7ZrJ9Cwwi3F6Q%2BZSUPXpVGWLpEaT819Y13goq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOh2S9dbqWljBjy2hircA4bBscpJzO74Iexyhfgk7hr6fX3Do8RSVMk6m9Znwh9Zh2mwNH24FoLBp1mlw0I8ZgmI7Xof7wr6%2FTYrkYE1MxXfMdoxGjzeRET8bRIL0JX39tBWvMtciRC0%2BS7HINw2KRvs8UFQZWaUeowzKYCNzzstdU4plyHB6tkAAOKm9Fr5tWDVOc41E8j%2FkdWYs20BBO4G4MCvXyyvwz%2FSccbfLBQ0o56Ov2%2BYOXhPEFYZAFg35Pp9ZSs9R9EL8Nch6aDU0rDTOoffoAs%2B0Nxkz4gITq8R7IUKhq7l4fHMfMyniJ9H%2FlPezpYzFhy7uF0ss1zojebl%2BOoShllDry%2Bf6Vi5duuy9wOs%2F%2BobACgxjCErzV%2Be3yD6ImU%2FnBr%2FYdfHHOxprxXQ6hfn9ASBWKrcEXt5EgyJXQMTlbQcadkV4t9w7YQIYmh2lB8clp4rVbLbs%2FaF1rd6%2BR6H6a2bi9RHq3xJqiX22X7jp83I2Jh0wI81N86x8%2B3Qrvgtf%2BIuZlewozkeJ%2FN6HqIRVBDn9QqmcKkVRt5vzlUANqRM7AvkQF5m2A2sEzVK9UEZTtj0nVe9RUcQoaBW9t21nXsAzxBzFxujRIqXh1%2B38%2FWbvFx39fneXoiS7ElM2YX6%2BcRQDftyMImM8soGOqUByaf4JDFvfBGMd%2FfC1ddy6GJk7HaylGVgIBz9HlNsT30Djsh6ubNChxE2jAKOpZ1ato13AkEPqrgN%2BVrBygDpg0uiguz7b3DG8uCBsgjlo2i90S1lPMW6N8PkhcCPY5jBYNZ7FeiYyRuv4K1Obz4dP0XWr0f98lqJpGeKZNx7J9DrhaMZlZa8V8zAEtiVwaMIGgkVS80avgkq2YY7JVgs790Ga5XR&X-Amz-Signature=8346649204662eccd0b01fdda6bd30cf5ef81c66df0dac087b2f9a1db2529640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRQOPRU%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLJNG055rmC7HhPLEAhRdkjVt6zB%2FTF%2B1KmrVhOBAlKAiEA4h%2FRLee7ZrJ9Cwwi3F6Q%2BZSUPXpVGWLpEaT819Y13goq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOh2S9dbqWljBjy2hircA4bBscpJzO74Iexyhfgk7hr6fX3Do8RSVMk6m9Znwh9Zh2mwNH24FoLBp1mlw0I8ZgmI7Xof7wr6%2FTYrkYE1MxXfMdoxGjzeRET8bRIL0JX39tBWvMtciRC0%2BS7HINw2KRvs8UFQZWaUeowzKYCNzzstdU4plyHB6tkAAOKm9Fr5tWDVOc41E8j%2FkdWYs20BBO4G4MCvXyyvwz%2FSccbfLBQ0o56Ov2%2BYOXhPEFYZAFg35Pp9ZSs9R9EL8Nch6aDU0rDTOoffoAs%2B0Nxkz4gITq8R7IUKhq7l4fHMfMyniJ9H%2FlPezpYzFhy7uF0ss1zojebl%2BOoShllDry%2Bf6Vi5duuy9wOs%2F%2BobACgxjCErzV%2Be3yD6ImU%2FnBr%2FYdfHHOxprxXQ6hfn9ASBWKrcEXt5EgyJXQMTlbQcadkV4t9w7YQIYmh2lB8clp4rVbLbs%2FaF1rd6%2BR6H6a2bi9RHq3xJqiX22X7jp83I2Jh0wI81N86x8%2B3Qrvgtf%2BIuZlewozkeJ%2FN6HqIRVBDn9QqmcKkVRt5vzlUANqRM7AvkQF5m2A2sEzVK9UEZTtj0nVe9RUcQoaBW9t21nXsAzxBzFxujRIqXh1%2B38%2FWbvFx39fneXoiS7ElM2YX6%2BcRQDftyMImM8soGOqUByaf4JDFvfBGMd%2FfC1ddy6GJk7HaylGVgIBz9HlNsT30Djsh6ubNChxE2jAKOpZ1ato13AkEPqrgN%2BVrBygDpg0uiguz7b3DG8uCBsgjlo2i90S1lPMW6N8PkhcCPY5jBYNZ7FeiYyRuv4K1Obz4dP0XWr0f98lqJpGeKZNx7J9DrhaMZlZa8V8zAEtiVwaMIGgkVS80avgkq2YY7JVgs790Ga5XR&X-Amz-Signature=eeba0c0229375da08e70d74294712693384f76fc4fb95db62fd6f2b2a7b3784a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRQOPRU%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLJNG055rmC7HhPLEAhRdkjVt6zB%2FTF%2B1KmrVhOBAlKAiEA4h%2FRLee7ZrJ9Cwwi3F6Q%2BZSUPXpVGWLpEaT819Y13goq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOh2S9dbqWljBjy2hircA4bBscpJzO74Iexyhfgk7hr6fX3Do8RSVMk6m9Znwh9Zh2mwNH24FoLBp1mlw0I8ZgmI7Xof7wr6%2FTYrkYE1MxXfMdoxGjzeRET8bRIL0JX39tBWvMtciRC0%2BS7HINw2KRvs8UFQZWaUeowzKYCNzzstdU4plyHB6tkAAOKm9Fr5tWDVOc41E8j%2FkdWYs20BBO4G4MCvXyyvwz%2FSccbfLBQ0o56Ov2%2BYOXhPEFYZAFg35Pp9ZSs9R9EL8Nch6aDU0rDTOoffoAs%2B0Nxkz4gITq8R7IUKhq7l4fHMfMyniJ9H%2FlPezpYzFhy7uF0ss1zojebl%2BOoShllDry%2Bf6Vi5duuy9wOs%2F%2BobACgxjCErzV%2Be3yD6ImU%2FnBr%2FYdfHHOxprxXQ6hfn9ASBWKrcEXt5EgyJXQMTlbQcadkV4t9w7YQIYmh2lB8clp4rVbLbs%2FaF1rd6%2BR6H6a2bi9RHq3xJqiX22X7jp83I2Jh0wI81N86x8%2B3Qrvgtf%2BIuZlewozkeJ%2FN6HqIRVBDn9QqmcKkVRt5vzlUANqRM7AvkQF5m2A2sEzVK9UEZTtj0nVe9RUcQoaBW9t21nXsAzxBzFxujRIqXh1%2B38%2FWbvFx39fneXoiS7ElM2YX6%2BcRQDftyMImM8soGOqUByaf4JDFvfBGMd%2FfC1ddy6GJk7HaylGVgIBz9HlNsT30Djsh6ubNChxE2jAKOpZ1ato13AkEPqrgN%2BVrBygDpg0uiguz7b3DG8uCBsgjlo2i90S1lPMW6N8PkhcCPY5jBYNZ7FeiYyRuv4K1Obz4dP0XWr0f98lqJpGeKZNx7J9DrhaMZlZa8V8zAEtiVwaMIGgkVS80avgkq2YY7JVgs790Ga5XR&X-Amz-Signature=ac1cba30f66c8a62cfa44be8974b9e1fd9f940710dba42c169dc108d327ed35d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRQOPRU%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLJNG055rmC7HhPLEAhRdkjVt6zB%2FTF%2B1KmrVhOBAlKAiEA4h%2FRLee7ZrJ9Cwwi3F6Q%2BZSUPXpVGWLpEaT819Y13goq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOh2S9dbqWljBjy2hircA4bBscpJzO74Iexyhfgk7hr6fX3Do8RSVMk6m9Znwh9Zh2mwNH24FoLBp1mlw0I8ZgmI7Xof7wr6%2FTYrkYE1MxXfMdoxGjzeRET8bRIL0JX39tBWvMtciRC0%2BS7HINw2KRvs8UFQZWaUeowzKYCNzzstdU4plyHB6tkAAOKm9Fr5tWDVOc41E8j%2FkdWYs20BBO4G4MCvXyyvwz%2FSccbfLBQ0o56Ov2%2BYOXhPEFYZAFg35Pp9ZSs9R9EL8Nch6aDU0rDTOoffoAs%2B0Nxkz4gITq8R7IUKhq7l4fHMfMyniJ9H%2FlPezpYzFhy7uF0ss1zojebl%2BOoShllDry%2Bf6Vi5duuy9wOs%2F%2BobACgxjCErzV%2Be3yD6ImU%2FnBr%2FYdfHHOxprxXQ6hfn9ASBWKrcEXt5EgyJXQMTlbQcadkV4t9w7YQIYmh2lB8clp4rVbLbs%2FaF1rd6%2BR6H6a2bi9RHq3xJqiX22X7jp83I2Jh0wI81N86x8%2B3Qrvgtf%2BIuZlewozkeJ%2FN6HqIRVBDn9QqmcKkVRt5vzlUANqRM7AvkQF5m2A2sEzVK9UEZTtj0nVe9RUcQoaBW9t21nXsAzxBzFxujRIqXh1%2B38%2FWbvFx39fneXoiS7ElM2YX6%2BcRQDftyMImM8soGOqUByaf4JDFvfBGMd%2FfC1ddy6GJk7HaylGVgIBz9HlNsT30Djsh6ubNChxE2jAKOpZ1ato13AkEPqrgN%2BVrBygDpg0uiguz7b3DG8uCBsgjlo2i90S1lPMW6N8PkhcCPY5jBYNZ7FeiYyRuv4K1Obz4dP0XWr0f98lqJpGeKZNx7J9DrhaMZlZa8V8zAEtiVwaMIGgkVS80avgkq2YY7JVgs790Ga5XR&X-Amz-Signature=313bb2792c0d79892f5dc6787a645aba0e973b38b01b73f15fa107af4a5eb2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRQOPRU%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLJNG055rmC7HhPLEAhRdkjVt6zB%2FTF%2B1KmrVhOBAlKAiEA4h%2FRLee7ZrJ9Cwwi3F6Q%2BZSUPXpVGWLpEaT819Y13goq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOh2S9dbqWljBjy2hircA4bBscpJzO74Iexyhfgk7hr6fX3Do8RSVMk6m9Znwh9Zh2mwNH24FoLBp1mlw0I8ZgmI7Xof7wr6%2FTYrkYE1MxXfMdoxGjzeRET8bRIL0JX39tBWvMtciRC0%2BS7HINw2KRvs8UFQZWaUeowzKYCNzzstdU4plyHB6tkAAOKm9Fr5tWDVOc41E8j%2FkdWYs20BBO4G4MCvXyyvwz%2FSccbfLBQ0o56Ov2%2BYOXhPEFYZAFg35Pp9ZSs9R9EL8Nch6aDU0rDTOoffoAs%2B0Nxkz4gITq8R7IUKhq7l4fHMfMyniJ9H%2FlPezpYzFhy7uF0ss1zojebl%2BOoShllDry%2Bf6Vi5duuy9wOs%2F%2BobACgxjCErzV%2Be3yD6ImU%2FnBr%2FYdfHHOxprxXQ6hfn9ASBWKrcEXt5EgyJXQMTlbQcadkV4t9w7YQIYmh2lB8clp4rVbLbs%2FaF1rd6%2BR6H6a2bi9RHq3xJqiX22X7jp83I2Jh0wI81N86x8%2B3Qrvgtf%2BIuZlewozkeJ%2FN6HqIRVBDn9QqmcKkVRt5vzlUANqRM7AvkQF5m2A2sEzVK9UEZTtj0nVe9RUcQoaBW9t21nXsAzxBzFxujRIqXh1%2B38%2FWbvFx39fneXoiS7ElM2YX6%2BcRQDftyMImM8soGOqUByaf4JDFvfBGMd%2FfC1ddy6GJk7HaylGVgIBz9HlNsT30Djsh6ubNChxE2jAKOpZ1ato13AkEPqrgN%2BVrBygDpg0uiguz7b3DG8uCBsgjlo2i90S1lPMW6N8PkhcCPY5jBYNZ7FeiYyRuv4K1Obz4dP0XWr0f98lqJpGeKZNx7J9DrhaMZlZa8V8zAEtiVwaMIGgkVS80avgkq2YY7JVgs790Ga5XR&X-Amz-Signature=18ac77dfaff0a472d2705c6a00302821f402709710e0b12a05476fadefdfeec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRQOPRU%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLJNG055rmC7HhPLEAhRdkjVt6zB%2FTF%2B1KmrVhOBAlKAiEA4h%2FRLee7ZrJ9Cwwi3F6Q%2BZSUPXpVGWLpEaT819Y13goq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOh2S9dbqWljBjy2hircA4bBscpJzO74Iexyhfgk7hr6fX3Do8RSVMk6m9Znwh9Zh2mwNH24FoLBp1mlw0I8ZgmI7Xof7wr6%2FTYrkYE1MxXfMdoxGjzeRET8bRIL0JX39tBWvMtciRC0%2BS7HINw2KRvs8UFQZWaUeowzKYCNzzstdU4plyHB6tkAAOKm9Fr5tWDVOc41E8j%2FkdWYs20BBO4G4MCvXyyvwz%2FSccbfLBQ0o56Ov2%2BYOXhPEFYZAFg35Pp9ZSs9R9EL8Nch6aDU0rDTOoffoAs%2B0Nxkz4gITq8R7IUKhq7l4fHMfMyniJ9H%2FlPezpYzFhy7uF0ss1zojebl%2BOoShllDry%2Bf6Vi5duuy9wOs%2F%2BobACgxjCErzV%2Be3yD6ImU%2FnBr%2FYdfHHOxprxXQ6hfn9ASBWKrcEXt5EgyJXQMTlbQcadkV4t9w7YQIYmh2lB8clp4rVbLbs%2FaF1rd6%2BR6H6a2bi9RHq3xJqiX22X7jp83I2Jh0wI81N86x8%2B3Qrvgtf%2BIuZlewozkeJ%2FN6HqIRVBDn9QqmcKkVRt5vzlUANqRM7AvkQF5m2A2sEzVK9UEZTtj0nVe9RUcQoaBW9t21nXsAzxBzFxujRIqXh1%2B38%2FWbvFx39fneXoiS7ElM2YX6%2BcRQDftyMImM8soGOqUByaf4JDFvfBGMd%2FfC1ddy6GJk7HaylGVgIBz9HlNsT30Djsh6ubNChxE2jAKOpZ1ato13AkEPqrgN%2BVrBygDpg0uiguz7b3DG8uCBsgjlo2i90S1lPMW6N8PkhcCPY5jBYNZ7FeiYyRuv4K1Obz4dP0XWr0f98lqJpGeKZNx7J9DrhaMZlZa8V8zAEtiVwaMIGgkVS80avgkq2YY7JVgs790Ga5XR&X-Amz-Signature=49b9a4ebf15bac8d93a2f11fd5328834982d23a94d26d3f45d263d19b3fcbd2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2Q66PK4%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGjJgHrOsOZWuzpi65v7rMleVy1%2BOQ4lJbMOFX4IX0CAiA0LP1vwxgvm7PrSv%2BB8LF%2BGM%2BS2K%2FEsc6jkc1lm57X6Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMTCpWSPtj8xJ7M8IiKtwDeChUgTKQJx1JJIlwcJrrOpNGIpe0yCYQmmegDx2z0nPeeRi%2BHLu0R3RvFpobG%2BCH1r2vzkklntEiNkIAghyl2WvHVjONLGrbc0vUMqltJIK5bCC98lMd0HedYTDRjnVK43bU3WLqt83S95bt6nERjQ4s3%2FuHQ%2BYrXntCUoSWow9DuYp0v6l%2FSK8yvNxdI4J%2B%2ByCfw%2FQFol0oRwTeDl6qOQ6gUYDk0pYPQPCNRfPuUIt8dMMzdYWPXHeDD35tShJpdhNO3XBB7tvubOFWAwVVni36Uy0gzC61vXAUkzJ1Nou9MSgqSbu5M%2BvP%2FanGZvdXbADqovge0SKzMoNtQr9HmyqrDTCJt6DeI7VGG72PCo2A3hzXGKqAsG3nlL2ZPHXgmLFdWB9IE1xWpkkiSMEZ7TdCgXLa5hne2b5Lh5wdB9nD49flnDvIxve0O2FXOyjtd9pgQo4%2FxUbrCwiGKIydm%2FWlVNHjIRSDYjX2GHGkse28M5MyfN7Bh3tpoBFWhL4xSv2j3PrCk9MlkBC7rKwSLzfyaHdATLsisd3b7yncdziZsDtAo8CGS%2Fhx%2Bi6yBE8Xr9wVuJwiYAx5vvqo82LD5huZ4Nlb7YC85xsxo1oeO0eFMfqEEZYe94VPWTwwoovyygY6pgFhYeCzEfOhNxTBx1Nk4mWuxRFfxOA%2B4rfLyBe2xWqgYxUiQ2jhxLHF5cGsgzqtWZz5O6k7W5pyO344UFsiLle4BICjVRb%2FFQwwsTYM27ARZK%2BMQIh7j0oXITIv3vzhJYlcCUQltQ9%2F6fZv5cZuIGq6p0vVKvyp4zOREuFWmKQ4eaqgfDMDY7YHvQWi2DzwfypOf72cQdJMRxQ%2FdHwjkl%2FwHsge%2BbHD&X-Amz-Signature=0f477a89032e41d8069532c40e75f8a6057a16d497e12fb3c4d58ed06e883dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2Q66PK4%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGjJgHrOsOZWuzpi65v7rMleVy1%2BOQ4lJbMOFX4IX0CAiA0LP1vwxgvm7PrSv%2BB8LF%2BGM%2BS2K%2FEsc6jkc1lm57X6Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMTCpWSPtj8xJ7M8IiKtwDeChUgTKQJx1JJIlwcJrrOpNGIpe0yCYQmmegDx2z0nPeeRi%2BHLu0R3RvFpobG%2BCH1r2vzkklntEiNkIAghyl2WvHVjONLGrbc0vUMqltJIK5bCC98lMd0HedYTDRjnVK43bU3WLqt83S95bt6nERjQ4s3%2FuHQ%2BYrXntCUoSWow9DuYp0v6l%2FSK8yvNxdI4J%2B%2ByCfw%2FQFol0oRwTeDl6qOQ6gUYDk0pYPQPCNRfPuUIt8dMMzdYWPXHeDD35tShJpdhNO3XBB7tvubOFWAwVVni36Uy0gzC61vXAUkzJ1Nou9MSgqSbu5M%2BvP%2FanGZvdXbADqovge0SKzMoNtQr9HmyqrDTCJt6DeI7VGG72PCo2A3hzXGKqAsG3nlL2ZPHXgmLFdWB9IE1xWpkkiSMEZ7TdCgXLa5hne2b5Lh5wdB9nD49flnDvIxve0O2FXOyjtd9pgQo4%2FxUbrCwiGKIydm%2FWlVNHjIRSDYjX2GHGkse28M5MyfN7Bh3tpoBFWhL4xSv2j3PrCk9MlkBC7rKwSLzfyaHdATLsisd3b7yncdziZsDtAo8CGS%2Fhx%2Bi6yBE8Xr9wVuJwiYAx5vvqo82LD5huZ4Nlb7YC85xsxo1oeO0eFMfqEEZYe94VPWTwwoovyygY6pgFhYeCzEfOhNxTBx1Nk4mWuxRFfxOA%2B4rfLyBe2xWqgYxUiQ2jhxLHF5cGsgzqtWZz5O6k7W5pyO344UFsiLle4BICjVRb%2FFQwwsTYM27ARZK%2BMQIh7j0oXITIv3vzhJYlcCUQltQ9%2F6fZv5cZuIGq6p0vVKvyp4zOREuFWmKQ4eaqgfDMDY7YHvQWi2DzwfypOf72cQdJMRxQ%2FdHwjkl%2FwHsge%2BbHD&X-Amz-Signature=a8059ef8eb9fd69add585eeb168c2cb84a708087aa0c3b1c61480bb2cbd346ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2Q66PK4%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGjJgHrOsOZWuzpi65v7rMleVy1%2BOQ4lJbMOFX4IX0CAiA0LP1vwxgvm7PrSv%2BB8LF%2BGM%2BS2K%2FEsc6jkc1lm57X6Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMTCpWSPtj8xJ7M8IiKtwDeChUgTKQJx1JJIlwcJrrOpNGIpe0yCYQmmegDx2z0nPeeRi%2BHLu0R3RvFpobG%2BCH1r2vzkklntEiNkIAghyl2WvHVjONLGrbc0vUMqltJIK5bCC98lMd0HedYTDRjnVK43bU3WLqt83S95bt6nERjQ4s3%2FuHQ%2BYrXntCUoSWow9DuYp0v6l%2FSK8yvNxdI4J%2B%2ByCfw%2FQFol0oRwTeDl6qOQ6gUYDk0pYPQPCNRfPuUIt8dMMzdYWPXHeDD35tShJpdhNO3XBB7tvubOFWAwVVni36Uy0gzC61vXAUkzJ1Nou9MSgqSbu5M%2BvP%2FanGZvdXbADqovge0SKzMoNtQr9HmyqrDTCJt6DeI7VGG72PCo2A3hzXGKqAsG3nlL2ZPHXgmLFdWB9IE1xWpkkiSMEZ7TdCgXLa5hne2b5Lh5wdB9nD49flnDvIxve0O2FXOyjtd9pgQo4%2FxUbrCwiGKIydm%2FWlVNHjIRSDYjX2GHGkse28M5MyfN7Bh3tpoBFWhL4xSv2j3PrCk9MlkBC7rKwSLzfyaHdATLsisd3b7yncdziZsDtAo8CGS%2Fhx%2Bi6yBE8Xr9wVuJwiYAx5vvqo82LD5huZ4Nlb7YC85xsxo1oeO0eFMfqEEZYe94VPWTwwoovyygY6pgFhYeCzEfOhNxTBx1Nk4mWuxRFfxOA%2B4rfLyBe2xWqgYxUiQ2jhxLHF5cGsgzqtWZz5O6k7W5pyO344UFsiLle4BICjVRb%2FFQwwsTYM27ARZK%2BMQIh7j0oXITIv3vzhJYlcCUQltQ9%2F6fZv5cZuIGq6p0vVKvyp4zOREuFWmKQ4eaqgfDMDY7YHvQWi2DzwfypOf72cQdJMRxQ%2FdHwjkl%2FwHsge%2BbHD&X-Amz-Signature=1b56b2fcec29f0afa3ba0f4d0aa8ecb9689726dc65c75a97695d2637ce597a1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2Q66PK4%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGjJgHrOsOZWuzpi65v7rMleVy1%2BOQ4lJbMOFX4IX0CAiA0LP1vwxgvm7PrSv%2BB8LF%2BGM%2BS2K%2FEsc6jkc1lm57X6Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMTCpWSPtj8xJ7M8IiKtwDeChUgTKQJx1JJIlwcJrrOpNGIpe0yCYQmmegDx2z0nPeeRi%2BHLu0R3RvFpobG%2BCH1r2vzkklntEiNkIAghyl2WvHVjONLGrbc0vUMqltJIK5bCC98lMd0HedYTDRjnVK43bU3WLqt83S95bt6nERjQ4s3%2FuHQ%2BYrXntCUoSWow9DuYp0v6l%2FSK8yvNxdI4J%2B%2ByCfw%2FQFol0oRwTeDl6qOQ6gUYDk0pYPQPCNRfPuUIt8dMMzdYWPXHeDD35tShJpdhNO3XBB7tvubOFWAwVVni36Uy0gzC61vXAUkzJ1Nou9MSgqSbu5M%2BvP%2FanGZvdXbADqovge0SKzMoNtQr9HmyqrDTCJt6DeI7VGG72PCo2A3hzXGKqAsG3nlL2ZPHXgmLFdWB9IE1xWpkkiSMEZ7TdCgXLa5hne2b5Lh5wdB9nD49flnDvIxve0O2FXOyjtd9pgQo4%2FxUbrCwiGKIydm%2FWlVNHjIRSDYjX2GHGkse28M5MyfN7Bh3tpoBFWhL4xSv2j3PrCk9MlkBC7rKwSLzfyaHdATLsisd3b7yncdziZsDtAo8CGS%2Fhx%2Bi6yBE8Xr9wVuJwiYAx5vvqo82LD5huZ4Nlb7YC85xsxo1oeO0eFMfqEEZYe94VPWTwwoovyygY6pgFhYeCzEfOhNxTBx1Nk4mWuxRFfxOA%2B4rfLyBe2xWqgYxUiQ2jhxLHF5cGsgzqtWZz5O6k7W5pyO344UFsiLle4BICjVRb%2FFQwwsTYM27ARZK%2BMQIh7j0oXITIv3vzhJYlcCUQltQ9%2F6fZv5cZuIGq6p0vVKvyp4zOREuFWmKQ4eaqgfDMDY7YHvQWi2DzwfypOf72cQdJMRxQ%2FdHwjkl%2FwHsge%2BbHD&X-Amz-Signature=3b5d5a853b5462db1e4bdab88e41487241f01b8f1807f49762a732f364e4abb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2Q66PK4%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGjJgHrOsOZWuzpi65v7rMleVy1%2BOQ4lJbMOFX4IX0CAiA0LP1vwxgvm7PrSv%2BB8LF%2BGM%2BS2K%2FEsc6jkc1lm57X6Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMTCpWSPtj8xJ7M8IiKtwDeChUgTKQJx1JJIlwcJrrOpNGIpe0yCYQmmegDx2z0nPeeRi%2BHLu0R3RvFpobG%2BCH1r2vzkklntEiNkIAghyl2WvHVjONLGrbc0vUMqltJIK5bCC98lMd0HedYTDRjnVK43bU3WLqt83S95bt6nERjQ4s3%2FuHQ%2BYrXntCUoSWow9DuYp0v6l%2FSK8yvNxdI4J%2B%2ByCfw%2FQFol0oRwTeDl6qOQ6gUYDk0pYPQPCNRfPuUIt8dMMzdYWPXHeDD35tShJpdhNO3XBB7tvubOFWAwVVni36Uy0gzC61vXAUkzJ1Nou9MSgqSbu5M%2BvP%2FanGZvdXbADqovge0SKzMoNtQr9HmyqrDTCJt6DeI7VGG72PCo2A3hzXGKqAsG3nlL2ZPHXgmLFdWB9IE1xWpkkiSMEZ7TdCgXLa5hne2b5Lh5wdB9nD49flnDvIxve0O2FXOyjtd9pgQo4%2FxUbrCwiGKIydm%2FWlVNHjIRSDYjX2GHGkse28M5MyfN7Bh3tpoBFWhL4xSv2j3PrCk9MlkBC7rKwSLzfyaHdATLsisd3b7yncdziZsDtAo8CGS%2Fhx%2Bi6yBE8Xr9wVuJwiYAx5vvqo82LD5huZ4Nlb7YC85xsxo1oeO0eFMfqEEZYe94VPWTwwoovyygY6pgFhYeCzEfOhNxTBx1Nk4mWuxRFfxOA%2B4rfLyBe2xWqgYxUiQ2jhxLHF5cGsgzqtWZz5O6k7W5pyO344UFsiLle4BICjVRb%2FFQwwsTYM27ARZK%2BMQIh7j0oXITIv3vzhJYlcCUQltQ9%2F6fZv5cZuIGq6p0vVKvyp4zOREuFWmKQ4eaqgfDMDY7YHvQWi2DzwfypOf72cQdJMRxQ%2FdHwjkl%2FwHsge%2BbHD&X-Amz-Signature=5e0768612b5ca908e8e39810f1793f2f8fec20b4662f7017dca175b8b6c9d0c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAT6ECFP%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBevxvcyvt8e66F%2B0X6IeFMNHIsiUj46XrV%2B3CPRYVELAiEA%2B%2FQGlBoidAhccpZ7kWgyc0FSykryMNJ2cI0SRBxz4fsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDaKZHgbu8VrnHbsoSrcAzJjM117Px10h9R8xnTxhF%2B9Ynkqa0Sod9%2BQFWkoaedAb1Q58lF3BN3e%2FtQhuerG1w6yvLG6E4Etw5wSa7tOy9dAU%2BL4bpFwGwZ6uZ5shR7rsQhlc1txQjBETJitK%2F4GAIBlKgFQH3fA9JE1OLgyqJvL6V5rz%2Fukl89c4m5hbrhGECGjHJfQS%2BUEEbc2dxfEJz8ynSv8cLAIOGZfTF49pFSmZP8xvKsOOAMpuReNhTwidIuQ1qO9M%2FYdA1k3Nr4xDOVOhE6A%2FkJVxjQlURyFWzYkh6HmfyLoLVaN8t2zLj13yPCv7ExRcB7Yu%2F2mhVnP%2FO7vdfpf%2Fo6%2BNVPovZgmXACo7wsgCBmQUzI6ezTumI%2B0w0voFOmdP%2BTr6LmAKTISDOz0C9qnqjb%2B3uIwW0YSjuy%2B48cJLmqdX0IYlH9zPSg5cq0LCRMUEyDAYhPisg24ty1sLRXmVKfYkhSYPyFDLMI8kZQXheYbeVfs5PiuDapYgL1eyag8TCV7%2FFWoY8i%2Fw2mYQF10tBiVaGplHGSVG%2B6goNe7DFKNAJTAeIohZn7urIvLVTFUg6QKPylYtKcLwAPapqM6DdiQlPG1spSIOKA1YstZ5o7vOCEZ7n0lQD5Zq%2FaEUT%2FD%2F6iCRX7TMNyL8soGOqUB0zJ3U1icxU7xHP1gyAwKvlop8FMCheKcVi4n4EK2iR9ikDQNStg26Ll0cNgTLjw0U47KDUUkw3V60UwNCsunIc2vBKy64mTb5%2BHuX7aQ%2BHfyHoMssBzsOW8MmyAR%2BO%2FRJIAeVqr%2FTQj03fe%2BeJ7TZZqudc4NWjKwOTs3db2VC5JBtn5LmHgmBkNUQeGpahhTe8z45LTBiCgUBL%2FaB7YKiZThGCtc&X-Amz-Signature=7c64915a6119bddee825b5277e1b054032951b71441e602a2ea235dda046e74a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAT6ECFP%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBevxvcyvt8e66F%2B0X6IeFMNHIsiUj46XrV%2B3CPRYVELAiEA%2B%2FQGlBoidAhccpZ7kWgyc0FSykryMNJ2cI0SRBxz4fsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDaKZHgbu8VrnHbsoSrcAzJjM117Px10h9R8xnTxhF%2B9Ynkqa0Sod9%2BQFWkoaedAb1Q58lF3BN3e%2FtQhuerG1w6yvLG6E4Etw5wSa7tOy9dAU%2BL4bpFwGwZ6uZ5shR7rsQhlc1txQjBETJitK%2F4GAIBlKgFQH3fA9JE1OLgyqJvL6V5rz%2Fukl89c4m5hbrhGECGjHJfQS%2BUEEbc2dxfEJz8ynSv8cLAIOGZfTF49pFSmZP8xvKsOOAMpuReNhTwidIuQ1qO9M%2FYdA1k3Nr4xDOVOhE6A%2FkJVxjQlURyFWzYkh6HmfyLoLVaN8t2zLj13yPCv7ExRcB7Yu%2F2mhVnP%2FO7vdfpf%2Fo6%2BNVPovZgmXACo7wsgCBmQUzI6ezTumI%2B0w0voFOmdP%2BTr6LmAKTISDOz0C9qnqjb%2B3uIwW0YSjuy%2B48cJLmqdX0IYlH9zPSg5cq0LCRMUEyDAYhPisg24ty1sLRXmVKfYkhSYPyFDLMI8kZQXheYbeVfs5PiuDapYgL1eyag8TCV7%2FFWoY8i%2Fw2mYQF10tBiVaGplHGSVG%2B6goNe7DFKNAJTAeIohZn7urIvLVTFUg6QKPylYtKcLwAPapqM6DdiQlPG1spSIOKA1YstZ5o7vOCEZ7n0lQD5Zq%2FaEUT%2FD%2F6iCRX7TMNyL8soGOqUB0zJ3U1icxU7xHP1gyAwKvlop8FMCheKcVi4n4EK2iR9ikDQNStg26Ll0cNgTLjw0U47KDUUkw3V60UwNCsunIc2vBKy64mTb5%2BHuX7aQ%2BHfyHoMssBzsOW8MmyAR%2BO%2FRJIAeVqr%2FTQj03fe%2BeJ7TZZqudc4NWjKwOTs3db2VC5JBtn5LmHgmBkNUQeGpahhTe8z45LTBiCgUBL%2FaB7YKiZThGCtc&X-Amz-Signature=2672bda8baf223a7928c4c84132262fd926132add12c20459bc0d0473a9f4671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAT6ECFP%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBevxvcyvt8e66F%2B0X6IeFMNHIsiUj46XrV%2B3CPRYVELAiEA%2B%2FQGlBoidAhccpZ7kWgyc0FSykryMNJ2cI0SRBxz4fsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDaKZHgbu8VrnHbsoSrcAzJjM117Px10h9R8xnTxhF%2B9Ynkqa0Sod9%2BQFWkoaedAb1Q58lF3BN3e%2FtQhuerG1w6yvLG6E4Etw5wSa7tOy9dAU%2BL4bpFwGwZ6uZ5shR7rsQhlc1txQjBETJitK%2F4GAIBlKgFQH3fA9JE1OLgyqJvL6V5rz%2Fukl89c4m5hbrhGECGjHJfQS%2BUEEbc2dxfEJz8ynSv8cLAIOGZfTF49pFSmZP8xvKsOOAMpuReNhTwidIuQ1qO9M%2FYdA1k3Nr4xDOVOhE6A%2FkJVxjQlURyFWzYkh6HmfyLoLVaN8t2zLj13yPCv7ExRcB7Yu%2F2mhVnP%2FO7vdfpf%2Fo6%2BNVPovZgmXACo7wsgCBmQUzI6ezTumI%2B0w0voFOmdP%2BTr6LmAKTISDOz0C9qnqjb%2B3uIwW0YSjuy%2B48cJLmqdX0IYlH9zPSg5cq0LCRMUEyDAYhPisg24ty1sLRXmVKfYkhSYPyFDLMI8kZQXheYbeVfs5PiuDapYgL1eyag8TCV7%2FFWoY8i%2Fw2mYQF10tBiVaGplHGSVG%2B6goNe7DFKNAJTAeIohZn7urIvLVTFUg6QKPylYtKcLwAPapqM6DdiQlPG1spSIOKA1YstZ5o7vOCEZ7n0lQD5Zq%2FaEUT%2FD%2F6iCRX7TMNyL8soGOqUB0zJ3U1icxU7xHP1gyAwKvlop8FMCheKcVi4n4EK2iR9ikDQNStg26Ll0cNgTLjw0U47KDUUkw3V60UwNCsunIc2vBKy64mTb5%2BHuX7aQ%2BHfyHoMssBzsOW8MmyAR%2BO%2FRJIAeVqr%2FTQj03fe%2BeJ7TZZqudc4NWjKwOTs3db2VC5JBtn5LmHgmBkNUQeGpahhTe8z45LTBiCgUBL%2FaB7YKiZThGCtc&X-Amz-Signature=f8abf5c65360ea124a17770201586b4e289eb824769cf59b897a1c2e0b924e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YCUQHWL%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BJeLiTOW7iC2k2dr0THgVrHdQt5GYR03YZhQERQDktAiEA6cYY5u%2FeGPN9roJ8sewz3s36LDBw3GxYzpPlc4s%2BFNIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDARlPMIOF5uIlbwVyrcAxVdUxxKUIUKBTWAy4PUsyZvKVKlb5Ow%2BPFpxNogtB%2BKwre3Hw3YLfU8ZhkG02s42wTXIEdMkOX4bvq%2Bqix2c0ucg%2BCUMeqTxvd1X1ZOz1bdlmFkLk4qZ8n3JXT5LK2e6SY%2BL8d4U0uqnwr%2FegX%2BbStKGhEjaWHrssuR49VRyLWK2y%2BeuzVnvNXplCXrxpkNhLlQaw%2B6cHt96ypYnP01fd97QS3suFCS4y6HEqmUTefocq0TGOuRmYoJw%2BGdfQMAdgaBl4UcwwF1rsv1XFPgl1Xi%2F6766ajWBHCF8I%2BB0a68DnAROhaXWmcrRDRzHoHF49oPwB4QzpdQx60sIDy7ouHxBHIQsa%2BAzH0voc6vcU3fWeoGyda6H6mJbC2olKf%2BZ4mqxtheCoZTs3Ytoo6XGQW8boVP3oH4DzxlA3I35bQ9OBRmL3OFOkXFu9V62K328GxjY8hYZbVIo2O0UlAFQA2QS4N97oGA0d4kuGXYapVJu5rNFVH7wdqq%2B6g%2FPQFUCBr2G9CNCMp%2F7IarWIkPuPI%2F%2FQHmtmBLFI2KdpuRL%2F8X1GQZKWlweh4DYf51XbHEj3i3JXp9g6oy22Chm4CsjvreF1LSbGKqW4zeqh3GmDvuMuprPM9Axeggq%2B%2BXMJGL8soGOqUBCBEUnpCXC1up9zp%2B7ZDINDSwNe8uFzjsYTBSycxNKp8vahdgEcrhJpy5IN3DtV4FgrYht7xDk9vekE2v8vcYPGwxsnkRB%2FNKoEv1%2Bvc6wFUPffHa%2BhoNcEYnTle0NHJxvhmKNY9A2rZrGx8%2FawV3ewIV97Cr2IRNEpOPe29rI1WP%2B%2Fg5%2FTu8yqjHHC8f3GXsaB5116fBTD6Xa6Llljm%2BAPkBhgfL&X-Amz-Signature=97f9360fc3343f50c296c2b53311c496e6624d59dcc3d2f780410cf95579c28d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YCUQHWL%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BJeLiTOW7iC2k2dr0THgVrHdQt5GYR03YZhQERQDktAiEA6cYY5u%2FeGPN9roJ8sewz3s36LDBw3GxYzpPlc4s%2BFNIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDARlPMIOF5uIlbwVyrcAxVdUxxKUIUKBTWAy4PUsyZvKVKlb5Ow%2BPFpxNogtB%2BKwre3Hw3YLfU8ZhkG02s42wTXIEdMkOX4bvq%2Bqix2c0ucg%2BCUMeqTxvd1X1ZOz1bdlmFkLk4qZ8n3JXT5LK2e6SY%2BL8d4U0uqnwr%2FegX%2BbStKGhEjaWHrssuR49VRyLWK2y%2BeuzVnvNXplCXrxpkNhLlQaw%2B6cHt96ypYnP01fd97QS3suFCS4y6HEqmUTefocq0TGOuRmYoJw%2BGdfQMAdgaBl4UcwwF1rsv1XFPgl1Xi%2F6766ajWBHCF8I%2BB0a68DnAROhaXWmcrRDRzHoHF49oPwB4QzpdQx60sIDy7ouHxBHIQsa%2BAzH0voc6vcU3fWeoGyda6H6mJbC2olKf%2BZ4mqxtheCoZTs3Ytoo6XGQW8boVP3oH4DzxlA3I35bQ9OBRmL3OFOkXFu9V62K328GxjY8hYZbVIo2O0UlAFQA2QS4N97oGA0d4kuGXYapVJu5rNFVH7wdqq%2B6g%2FPQFUCBr2G9CNCMp%2F7IarWIkPuPI%2F%2FQHmtmBLFI2KdpuRL%2F8X1GQZKWlweh4DYf51XbHEj3i3JXp9g6oy22Chm4CsjvreF1LSbGKqW4zeqh3GmDvuMuprPM9Axeggq%2B%2BXMJGL8soGOqUBCBEUnpCXC1up9zp%2B7ZDINDSwNe8uFzjsYTBSycxNKp8vahdgEcrhJpy5IN3DtV4FgrYht7xDk9vekE2v8vcYPGwxsnkRB%2FNKoEv1%2Bvc6wFUPffHa%2BhoNcEYnTle0NHJxvhmKNY9A2rZrGx8%2FawV3ewIV97Cr2IRNEpOPe29rI1WP%2B%2Fg5%2FTu8yqjHHC8f3GXsaB5116fBTD6Xa6Llljm%2BAPkBhgfL&X-Amz-Signature=9ff104e8c4677976d63704effade190d7923b4234836c0ed86a7db01701b4133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMVUIYT%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA6%2F%2BhXE5HaS5OD%2Bfy2OnilPdfJXvvKNNchsdgH2yHIAiARx1bw%2FbU%2B%2BAc3gd0bvXBoDoXhRtj1QgmJXqugeATv%2Fyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMB%2BEZaeCfg%2BwXhqqxKtwDDOr9VPh3tIrhpoHCjngT8svTEqjtDXPkRInvGvT48EcxOZ1QBgKR6bRxyN26YgNGw19hedHBrYDmJDT6qJFGJ5SxmlCuy1UrPn13YFhPBzCN54Fl69WcYZua2U3HgdVL6iuwfLUMMhPZEXrOz8%2BdNwDmgou9ENqp1AO571%2FMwMwmwnf1gyYOup2uBM5zlobXfkq9TUHv7nrbqd%2FgHaw%2FEI6F4e7R30p5ntBchTvIwn2ChBL0Eh5M8SyZ2W2RT4gBIS%2FUpEyRWo0dyR9p55Kv9aeFjykYAyvboWQMAGZ1J1mCnpX5nWBFTWACv1RFboeUW5u7xO7VS01Fry5aTIq7Zf6vGx4YFEIj1yKbvs6EqvYfZztye97WnItHZs8akfekZ9BiFbmouh1bSJx5wXrOXxir1qy4Y09W8JJjB0CPflzL%2BBeEq1yKEnWDHU7MfJA3dJT%2BAPcKEi3sSFYjt6TeohKuJvIJkT%2Fap0sDHcKr47lPx4suAmlNMpbsDuW3JRzjMPPB7LAcDwxcSir8uCu%2Fm6hE%2Fcn6sSnZwiS5kZSamjkdCaI%2B47BGpit2hEtBnpJX7N%2FOuYoEHXDLmUstFhxna3IKrp0qYv8ex1NsNq9sPxi%2BOiKi5pL9%2F3uxTaswhovyygY6pgHrGOhA%2FpqA0PuAOnrbcPg%2BxEA3bVsq8xZikyXUBGEgKlLqiOfL7SilqhPNLgKi3eK9cJXLnL4wDqkoutSYobeuYGF%2Fg3EIwDk6O3OxyFTeIzy%2F%2FwtxdHpm7XblrRaU2Fy536lBaFVlA1%2FPCwpUimm3BGTJY5sowGo%2FBVcF2qko68rOrZnJRY9UaPNIWNQqZZUayOKFjpjVLgjgTXgPYoNnf4tUu%2FSg&X-Amz-Signature=c0f4b525ac8099ed02e5d5620d35a589c8160f2b80f7388b14d9e1caac0c80fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMVUIYT%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA6%2F%2BhXE5HaS5OD%2Bfy2OnilPdfJXvvKNNchsdgH2yHIAiARx1bw%2FbU%2B%2BAc3gd0bvXBoDoXhRtj1QgmJXqugeATv%2Fyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMB%2BEZaeCfg%2BwXhqqxKtwDDOr9VPh3tIrhpoHCjngT8svTEqjtDXPkRInvGvT48EcxOZ1QBgKR6bRxyN26YgNGw19hedHBrYDmJDT6qJFGJ5SxmlCuy1UrPn13YFhPBzCN54Fl69WcYZua2U3HgdVL6iuwfLUMMhPZEXrOz8%2BdNwDmgou9ENqp1AO571%2FMwMwmwnf1gyYOup2uBM5zlobXfkq9TUHv7nrbqd%2FgHaw%2FEI6F4e7R30p5ntBchTvIwn2ChBL0Eh5M8SyZ2W2RT4gBIS%2FUpEyRWo0dyR9p55Kv9aeFjykYAyvboWQMAGZ1J1mCnpX5nWBFTWACv1RFboeUW5u7xO7VS01Fry5aTIq7Zf6vGx4YFEIj1yKbvs6EqvYfZztye97WnItHZs8akfekZ9BiFbmouh1bSJx5wXrOXxir1qy4Y09W8JJjB0CPflzL%2BBeEq1yKEnWDHU7MfJA3dJT%2BAPcKEi3sSFYjt6TeohKuJvIJkT%2Fap0sDHcKr47lPx4suAmlNMpbsDuW3JRzjMPPB7LAcDwxcSir8uCu%2Fm6hE%2Fcn6sSnZwiS5kZSamjkdCaI%2B47BGpit2hEtBnpJX7N%2FOuYoEHXDLmUstFhxna3IKrp0qYv8ex1NsNq9sPxi%2BOiKi5pL9%2F3uxTaswhovyygY6pgHrGOhA%2FpqA0PuAOnrbcPg%2BxEA3bVsq8xZikyXUBGEgKlLqiOfL7SilqhPNLgKi3eK9cJXLnL4wDqkoutSYobeuYGF%2Fg3EIwDk6O3OxyFTeIzy%2F%2FwtxdHpm7XblrRaU2Fy536lBaFVlA1%2FPCwpUimm3BGTJY5sowGo%2FBVcF2qko68rOrZnJRY9UaPNIWNQqZZUayOKFjpjVLgjgTXgPYoNnf4tUu%2FSg&X-Amz-Signature=12b31ee59005565e8a16c9fed45b659f40a0f32572e7a899d221da0aec7c6e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMVUIYT%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA6%2F%2BhXE5HaS5OD%2Bfy2OnilPdfJXvvKNNchsdgH2yHIAiARx1bw%2FbU%2B%2BAc3gd0bvXBoDoXhRtj1QgmJXqugeATv%2Fyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMB%2BEZaeCfg%2BwXhqqxKtwDDOr9VPh3tIrhpoHCjngT8svTEqjtDXPkRInvGvT48EcxOZ1QBgKR6bRxyN26YgNGw19hedHBrYDmJDT6qJFGJ5SxmlCuy1UrPn13YFhPBzCN54Fl69WcYZua2U3HgdVL6iuwfLUMMhPZEXrOz8%2BdNwDmgou9ENqp1AO571%2FMwMwmwnf1gyYOup2uBM5zlobXfkq9TUHv7nrbqd%2FgHaw%2FEI6F4e7R30p5ntBchTvIwn2ChBL0Eh5M8SyZ2W2RT4gBIS%2FUpEyRWo0dyR9p55Kv9aeFjykYAyvboWQMAGZ1J1mCnpX5nWBFTWACv1RFboeUW5u7xO7VS01Fry5aTIq7Zf6vGx4YFEIj1yKbvs6EqvYfZztye97WnItHZs8akfekZ9BiFbmouh1bSJx5wXrOXxir1qy4Y09W8JJjB0CPflzL%2BBeEq1yKEnWDHU7MfJA3dJT%2BAPcKEi3sSFYjt6TeohKuJvIJkT%2Fap0sDHcKr47lPx4suAmlNMpbsDuW3JRzjMPPB7LAcDwxcSir8uCu%2Fm6hE%2Fcn6sSnZwiS5kZSamjkdCaI%2B47BGpit2hEtBnpJX7N%2FOuYoEHXDLmUstFhxna3IKrp0qYv8ex1NsNq9sPxi%2BOiKi5pL9%2F3uxTaswhovyygY6pgHrGOhA%2FpqA0PuAOnrbcPg%2BxEA3bVsq8xZikyXUBGEgKlLqiOfL7SilqhPNLgKi3eK9cJXLnL4wDqkoutSYobeuYGF%2Fg3EIwDk6O3OxyFTeIzy%2F%2FwtxdHpm7XblrRaU2Fy536lBaFVlA1%2FPCwpUimm3BGTJY5sowGo%2FBVcF2qko68rOrZnJRY9UaPNIWNQqZZUayOKFjpjVLgjgTXgPYoNnf4tUu%2FSg&X-Amz-Signature=bd3d6dc269966dcb629840bf7f0afcbb26fbaf7c6a5832ccfc564b79de3911e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMVUIYT%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA6%2F%2BhXE5HaS5OD%2Bfy2OnilPdfJXvvKNNchsdgH2yHIAiARx1bw%2FbU%2B%2BAc3gd0bvXBoDoXhRtj1QgmJXqugeATv%2Fyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMB%2BEZaeCfg%2BwXhqqxKtwDDOr9VPh3tIrhpoHCjngT8svTEqjtDXPkRInvGvT48EcxOZ1QBgKR6bRxyN26YgNGw19hedHBrYDmJDT6qJFGJ5SxmlCuy1UrPn13YFhPBzCN54Fl69WcYZua2U3HgdVL6iuwfLUMMhPZEXrOz8%2BdNwDmgou9ENqp1AO571%2FMwMwmwnf1gyYOup2uBM5zlobXfkq9TUHv7nrbqd%2FgHaw%2FEI6F4e7R30p5ntBchTvIwn2ChBL0Eh5M8SyZ2W2RT4gBIS%2FUpEyRWo0dyR9p55Kv9aeFjykYAyvboWQMAGZ1J1mCnpX5nWBFTWACv1RFboeUW5u7xO7VS01Fry5aTIq7Zf6vGx4YFEIj1yKbvs6EqvYfZztye97WnItHZs8akfekZ9BiFbmouh1bSJx5wXrOXxir1qy4Y09W8JJjB0CPflzL%2BBeEq1yKEnWDHU7MfJA3dJT%2BAPcKEi3sSFYjt6TeohKuJvIJkT%2Fap0sDHcKr47lPx4suAmlNMpbsDuW3JRzjMPPB7LAcDwxcSir8uCu%2Fm6hE%2Fcn6sSnZwiS5kZSamjkdCaI%2B47BGpit2hEtBnpJX7N%2FOuYoEHXDLmUstFhxna3IKrp0qYv8ex1NsNq9sPxi%2BOiKi5pL9%2F3uxTaswhovyygY6pgHrGOhA%2FpqA0PuAOnrbcPg%2BxEA3bVsq8xZikyXUBGEgKlLqiOfL7SilqhPNLgKi3eK9cJXLnL4wDqkoutSYobeuYGF%2Fg3EIwDk6O3OxyFTeIzy%2F%2FwtxdHpm7XblrRaU2Fy536lBaFVlA1%2FPCwpUimm3BGTJY5sowGo%2FBVcF2qko68rOrZnJRY9UaPNIWNQqZZUayOKFjpjVLgjgTXgPYoNnf4tUu%2FSg&X-Amz-Signature=c018968a32b2c3a36f9804fbc38bc6a8dd1b3018b82dc9ac0b8b4f25e7d9e5a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAMVUIYT%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA6%2F%2BhXE5HaS5OD%2Bfy2OnilPdfJXvvKNNchsdgH2yHIAiARx1bw%2FbU%2B%2BAc3gd0bvXBoDoXhRtj1QgmJXqugeATv%2Fyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMB%2BEZaeCfg%2BwXhqqxKtwDDOr9VPh3tIrhpoHCjngT8svTEqjtDXPkRInvGvT48EcxOZ1QBgKR6bRxyN26YgNGw19hedHBrYDmJDT6qJFGJ5SxmlCuy1UrPn13YFhPBzCN54Fl69WcYZua2U3HgdVL6iuwfLUMMhPZEXrOz8%2BdNwDmgou9ENqp1AO571%2FMwMwmwnf1gyYOup2uBM5zlobXfkq9TUHv7nrbqd%2FgHaw%2FEI6F4e7R30p5ntBchTvIwn2ChBL0Eh5M8SyZ2W2RT4gBIS%2FUpEyRWo0dyR9p55Kv9aeFjykYAyvboWQMAGZ1J1mCnpX5nWBFTWACv1RFboeUW5u7xO7VS01Fry5aTIq7Zf6vGx4YFEIj1yKbvs6EqvYfZztye97WnItHZs8akfekZ9BiFbmouh1bSJx5wXrOXxir1qy4Y09W8JJjB0CPflzL%2BBeEq1yKEnWDHU7MfJA3dJT%2BAPcKEi3sSFYjt6TeohKuJvIJkT%2Fap0sDHcKr47lPx4suAmlNMpbsDuW3JRzjMPPB7LAcDwxcSir8uCu%2Fm6hE%2Fcn6sSnZwiS5kZSamjkdCaI%2B47BGpit2hEtBnpJX7N%2FOuYoEHXDLmUstFhxna3IKrp0qYv8ex1NsNq9sPxi%2BOiKi5pL9%2F3uxTaswhovyygY6pgHrGOhA%2FpqA0PuAOnrbcPg%2BxEA3bVsq8xZikyXUBGEgKlLqiOfL7SilqhPNLgKi3eK9cJXLnL4wDqkoutSYobeuYGF%2Fg3EIwDk6O3OxyFTeIzy%2F%2FwtxdHpm7XblrRaU2Fy536lBaFVlA1%2FPCwpUimm3BGTJY5sowGo%2FBVcF2qko68rOrZnJRY9UaPNIWNQqZZUayOKFjpjVLgjgTXgPYoNnf4tUu%2FSg&X-Amz-Signature=9cd2f771736df182ac2dfde5d0813b645d60cea05011269fe837651516919998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGHPQYKO%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T040921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDShv4yWoILpZ%2BQ2CA1Akg2lnD02pQayCG0IJmG%2B4m%2BzgIgP6fCP3IwQM%2F1bcWsj%2BzHc%2Fh8Z64ruS%2F6qrn%2FHGfu4tcq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIoKtyDZ3cgsSRWRtSrcA%2Fw0zIzFi403bXawjsJ%2FZtJqfwhX9VTfS84vkNkQvB%2F3besFWjDL1htAy1KhaLxEPFEFP89RT2hwuP6xNYeX1JRbgrAeE2y1hi8L6lmRnUFa%2BiFS1yMXIRPO8dHhjJ8Qm7r3LnDwtxGKrWNBD%2BVG3LQC61s90zYSz%2F5m%2Fj23XjdJ5byRJWTH5OHWCwEQvGzZ9WsQKEPhUtl5teIIplUwLfM8Y2BqqUa8k3VHys1ELaHvUcyRIVx3s6gv0df2zdkSw8hcb4nnLiT6jLnF9WdmgSaEVtFLg13FLtfdoz1dhf0E5WOHHG2b9RWFNkZbBDVQrRySWgE7zhtu9VTHV6ieTeaAoCXziAQ55fbTxLnN%2FHjwXfVfa7x8w%2B88bFKrzyPd%2BqHmokhakGDkYd4ALB6R4a%2B%2FcJKmqmU58Jd11uMEbzWPQJWqKOl6XkvKxDv3dQAwDDlNGLtfVwULL1SmXOiFZfzGjr7Pzowks0DbdXLyawzv6RbBVdyrQwsDrLhhUlqxS9DBm0AOvQqq6gxQ%2FptdmIM9o4WZ5a4NpS8VsXJkGGQ3JtK8cr8Daco7rVks2GbM%2BdTvL0Pv0gpZwL2wyCtq33%2FES19EnES7%2FjaLEu3%2FaBVcrfl%2BJFYu8ONLdhGTMNGL8soGOqUB3X%2Bt%2BFvh35FY%2BpEYI%2BtdOeXOHGo%2FWteAyk0ccBk97kpAL%2BWuQAB9pUfUpW4FjRFZd89Kk4L7Jc2izOPl7etK96Tf%2BA3wCCQ5%2F9P6ZVtZ2WubsXAYiYIFz203L3jisDOzd68RW3iLYEi71Qa8XQPXwTvSBZPY2JsDxfiAAIb8Xxpt0AfWIZn2KP5aqJcMrZkmfLdtiqO7ABgaroIQhZSuuQt8WjH9&X-Amz-Signature=21e492157b1751eabc340321f8c140c8f07eba22651c5ba6312b76147f745206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

