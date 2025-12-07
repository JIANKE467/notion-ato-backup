
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TNC6JEU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn%2Bka7PeSH7WAneq5Xw9qu%2FpR5Hq%2Bl4cUIoGh%2FEwULzQIhAPT9qCWWtHMyeh4p48o%2Fufr%2Bh6O%2BThGnzxSjOzGpnyXAKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxvQqP2m2i0F8UYD8q3AN97DykovrwHZHPLAASqX2PeaewWhQcCou9QQsq6T4v5mORi4GBYth1B7NEYJFk0FabSdxVLseCzivdfrpW9PSxVQdpRDaUVOvFDQY5MGGNzRHAriRxjKARoB2jgYjHXPFL0Wyx%2FZVddpo0r15EwFkod25dOGyqDmM0rL75da27I5L1e%2FaRcP1CCL6ilH1Ey%2F%2BwulPsD9EbI40aSg3iXbf0JzxXSYEU7MywYhp1UiU8cJb80wie7G96p0xwcWNq8ia5L4JKsSODFE0TeYIecgsX%2BENwBCt2TPgtmklnI17tEeCC6YkikFcJ8z%2BjTilWNHRxQZYMNohfzpjJwTJYdiBDEkfFirhzfDIUp%2BFoR3FAWv2aR4brajmZ86Wfgb%2B5%2FmXyiuvdIIi5GMKBCXMoAG6kFFYXDoh2kFwyLFaEcoU7mb7LxptPCHC4Ah3jOSH3G6xKM1Jvu6ID%2Bn57ic362hitHUYvCG3t2a30BdcvCBV8aXbwVTXwbAU6ne62dbS%2BrrT%2B6UWozL609WF%2BTT3anYQlCXQrtezzHkyi%2FQpmPUYIVmoLyALGWeAnhN68ZyWqwpXbi3kKynXjOIem0i8W%2FdOHvPy4zDlXtjtsa3etA660%2FssqPNOSkbjmoGGiBTDH7tLJBjqkARXpqBDrUy9LmiSJDAFhcyU1MW8koCLDTsh3b%2FQPscHOizJe2FASdbBh3bhs9LAJms5HItOcJwkbYyiS4IOHwXbOax%2BthnjhAAHNgCuoSL6XiLgXwNSaQ%2BXmgt43jUgaM7pv4SByLboygH0VOM2JRkg3KCV5uz0HWLIqJBuf0jHoqgAhqP8uQ4nk%2FRUbME1hxk8OX%2Fim3Eq9JhdzGza%2BPe3B4OtT&X-Amz-Signature=a68f92d2fefaa7a295d803a9cd3cc3b0bc88ec7ba27b3b4e022e00bd8e134726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAGIQNA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6cmVItHwtquzs3HCqTO%2FlQ47qTTdaHB46CgiF5xeSRAIhAKVW4D0uG9jCpI%2FfGxOtdIDNgpvxLAR2yWM46ss60pUFKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8Rr4CEzvzp95rntcq3ANBcoDy1363D%2FG29%2FEDHo7N9X4l%2F5fCy5HkjYW7LIbqG242eTITa%2BW3tj5sp4%2Fmdots4SO%2B0HVCVkEUiLBNOHK4OYWtYbwNGpuDnMnmdXgyAjTm%2FnVeZ9szXT1dSxiudG2KX9LWEvu8waUykAIZhDEfgkJvAkjY6oZo8ywxYCLWCcK7mt5nTLZ%2Fc%2FlML94hPU7y8gAwJL%2B3tCt90awlMjQ09OVAddQacz9SvZJAUTviyuE0e4nEyPiNsDEmvILs05qh4xdpp3PobnhKOpc14NNaAtZqdsUimaH2WZFWp%2FCHktklqv3a5rL2Hssi24eeFO3zlXcG7wY4gP3qtCcDZ3ebyHUadoeQ8LkmDDXqQt%2FM8JPh4lPv91JwuIKPXY7QmCYVL8Vp8pGpLvEXQ3%2FKigioSJiKf0fzrik8o8s%2BvOsHRRnASYVGhwYPme6kJdnOvfdXnZ4OY7rKV7qMUuJtRVftxARIsEUM6KaKvzOadSEgmP49NT3iXOgx7neVVSn53sZvrJl1aRK36NETsnLxLlI5UL6J%2BhEf26ZzDM8cr%2FM790TzjLJsBLleNMLd%2F8jGl2FDwpxcNWBEyzxDvhdcXscvnj5KFHde3jhNFukaob2W9wq3xWLbpsWIllcN%2FTCC69LJBjqkAQrt1geZIfQoCCXzu05yOKHSgxfhAPyhkH0Lx0y%2Fsyiw2mjcLqkh%2FpORT6qFCDz0ScI%2BfROqe%2Ft1xUTvs2eKIljP4gn57xkCydfe02A1CcDwGLhkWgUjPLl3gcop%2Fo4zTNIdlXGs53%2BERzPGtZGA7Q6Jr3eBd8o1Vw4WOO0x1ZxWZaLEZd3JA2gjlrso%2FBW5R8XGGGoZVY0aUrwYmZpbqEDXma8y&X-Amz-Signature=1ca5e3b8254103a424443bc4d35661fc6999546897db8bfa6ba120eb1c34b90c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAGIQNA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6cmVItHwtquzs3HCqTO%2FlQ47qTTdaHB46CgiF5xeSRAIhAKVW4D0uG9jCpI%2FfGxOtdIDNgpvxLAR2yWM46ss60pUFKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8Rr4CEzvzp95rntcq3ANBcoDy1363D%2FG29%2FEDHo7N9X4l%2F5fCy5HkjYW7LIbqG242eTITa%2BW3tj5sp4%2Fmdots4SO%2B0HVCVkEUiLBNOHK4OYWtYbwNGpuDnMnmdXgyAjTm%2FnVeZ9szXT1dSxiudG2KX9LWEvu8waUykAIZhDEfgkJvAkjY6oZo8ywxYCLWCcK7mt5nTLZ%2Fc%2FlML94hPU7y8gAwJL%2B3tCt90awlMjQ09OVAddQacz9SvZJAUTviyuE0e4nEyPiNsDEmvILs05qh4xdpp3PobnhKOpc14NNaAtZqdsUimaH2WZFWp%2FCHktklqv3a5rL2Hssi24eeFO3zlXcG7wY4gP3qtCcDZ3ebyHUadoeQ8LkmDDXqQt%2FM8JPh4lPv91JwuIKPXY7QmCYVL8Vp8pGpLvEXQ3%2FKigioSJiKf0fzrik8o8s%2BvOsHRRnASYVGhwYPme6kJdnOvfdXnZ4OY7rKV7qMUuJtRVftxARIsEUM6KaKvzOadSEgmP49NT3iXOgx7neVVSn53sZvrJl1aRK36NETsnLxLlI5UL6J%2BhEf26ZzDM8cr%2FM790TzjLJsBLleNMLd%2F8jGl2FDwpxcNWBEyzxDvhdcXscvnj5KFHde3jhNFukaob2W9wq3xWLbpsWIllcN%2FTCC69LJBjqkAQrt1geZIfQoCCXzu05yOKHSgxfhAPyhkH0Lx0y%2Fsyiw2mjcLqkh%2FpORT6qFCDz0ScI%2BfROqe%2Ft1xUTvs2eKIljP4gn57xkCydfe02A1CcDwGLhkWgUjPLl3gcop%2Fo4zTNIdlXGs53%2BERzPGtZGA7Q6Jr3eBd8o1Vw4WOO0x1ZxWZaLEZd3JA2gjlrso%2FBW5R8XGGGoZVY0aUrwYmZpbqEDXma8y&X-Amz-Signature=6ed5344e06c05afc39dada6689de74e58b77ed4b0ce842634ce8fa1cbe0f3afb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBSRMXZX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXcl03gwTyf1gyHl4YafYtqmXfjYqeBQ43ht40BPtHwAiEAm4NUCL0oznPKgTYq1EdSrYcPGCFQxriYBfHnUUGnn3IqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPpor31iJZ846xqUyrcA%2B31H%2BwNbTTT%2FVrlfzJOxO21DkEngEqTGrVZB1FdEguj4t84TWOcLERKWxY%2BOiOk2lhft%2B%2B6EKX1lY1b7vkfXtTAnRSt4PYinY6QfSfh7YKxFMxLNp4DAuqPwicbmKeBjRk48ooE4C2NpTVYiNoww2VHY4LxPGd1HaEl1J5UyFDmER8OkRd57jHEfQpOW3Yzd%2FjOxmZeZb48nGJLFziNPXuccOcnnSN7s%2BQW77SY6%2FwUJrAoC6aHj0OssDl%2BFYUBMsEHh5p9fekmBK4BNGb%2FLmznDExXxGX9CSfPUdOJAMIbZzr57%2B%2FpC7i8%2BSruCscmOjnYv5yIxNpmTrSuMn4Qa0Wsr0zz2zmTFigGwbSGRePewPa3LvOT%2BJIg4iUFjCNTxBsZQ7M%2B17BYqlZ6uNTFFvcv2WgPl4NkmGxHX3GtFjQfn%2Bp76F02FaoHhrFi0VRqteiEGaM4giuvOPyIqkbTtrx8BbPGnLO%2FodV2g%2F7sVCbdqkavckqWS7JEVpj8wJHpPfU4zIpxnczrwQwoUtQGXX0BPKsdytWFrKKweu3MXvxTQsm7PAg1t5dw27IZPX1LTYDEqkC%2Flc0k5PIjYIHb2o7mx31XG1v4aN%2FKSAAFwVgZSQZ7%2BOVb7YVJ700sMP7q0skGOqUBB2XvxX169Kjy9XknHOODkBqzNKI3Jj5fe1DBve%2FT%2BeH9Ywrp6BZGJzSU7aBK11eE7Ag2lZUKMCEca0NIUbCRTpkl6eHFFW%2BNNMGRFy0pOCZVRPSjMq%2BXcWYPPoVonHx8ap8lY6nb8v%2Bm33lTmSFsP%2FY0MWNHMeOJZJD0wWkhfj%2BcbusRYVS5MRq2pAdatyV5ru76a29xBVOf3WWkQdlLXsWS%2FcBg&X-Amz-Signature=d0ff46b75bb245a9dc09cc8ffddfbfc5b3738ed2b379421d7559412bf25ad3e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBSRMXZX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXcl03gwTyf1gyHl4YafYtqmXfjYqeBQ43ht40BPtHwAiEAm4NUCL0oznPKgTYq1EdSrYcPGCFQxriYBfHnUUGnn3IqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPpor31iJZ846xqUyrcA%2B31H%2BwNbTTT%2FVrlfzJOxO21DkEngEqTGrVZB1FdEguj4t84TWOcLERKWxY%2BOiOk2lhft%2B%2B6EKX1lY1b7vkfXtTAnRSt4PYinY6QfSfh7YKxFMxLNp4DAuqPwicbmKeBjRk48ooE4C2NpTVYiNoww2VHY4LxPGd1HaEl1J5UyFDmER8OkRd57jHEfQpOW3Yzd%2FjOxmZeZb48nGJLFziNPXuccOcnnSN7s%2BQW77SY6%2FwUJrAoC6aHj0OssDl%2BFYUBMsEHh5p9fekmBK4BNGb%2FLmznDExXxGX9CSfPUdOJAMIbZzr57%2B%2FpC7i8%2BSruCscmOjnYv5yIxNpmTrSuMn4Qa0Wsr0zz2zmTFigGwbSGRePewPa3LvOT%2BJIg4iUFjCNTxBsZQ7M%2B17BYqlZ6uNTFFvcv2WgPl4NkmGxHX3GtFjQfn%2Bp76F02FaoHhrFi0VRqteiEGaM4giuvOPyIqkbTtrx8BbPGnLO%2FodV2g%2F7sVCbdqkavckqWS7JEVpj8wJHpPfU4zIpxnczrwQwoUtQGXX0BPKsdytWFrKKweu3MXvxTQsm7PAg1t5dw27IZPX1LTYDEqkC%2Flc0k5PIjYIHb2o7mx31XG1v4aN%2FKSAAFwVgZSQZ7%2BOVb7YVJ700sMP7q0skGOqUBB2XvxX169Kjy9XknHOODkBqzNKI3Jj5fe1DBve%2FT%2BeH9Ywrp6BZGJzSU7aBK11eE7Ag2lZUKMCEca0NIUbCRTpkl6eHFFW%2BNNMGRFy0pOCZVRPSjMq%2BXcWYPPoVonHx8ap8lY6nb8v%2Bm33lTmSFsP%2FY0MWNHMeOJZJD0wWkhfj%2BcbusRYVS5MRq2pAdatyV5ru76a29xBVOf3WWkQdlLXsWS%2FcBg&X-Amz-Signature=203d33f07d6d62c5886f0de8200d4f13d7ecabc045f3031bfb4090a217097b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBSRMXZX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXcl03gwTyf1gyHl4YafYtqmXfjYqeBQ43ht40BPtHwAiEAm4NUCL0oznPKgTYq1EdSrYcPGCFQxriYBfHnUUGnn3IqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPpor31iJZ846xqUyrcA%2B31H%2BwNbTTT%2FVrlfzJOxO21DkEngEqTGrVZB1FdEguj4t84TWOcLERKWxY%2BOiOk2lhft%2B%2B6EKX1lY1b7vkfXtTAnRSt4PYinY6QfSfh7YKxFMxLNp4DAuqPwicbmKeBjRk48ooE4C2NpTVYiNoww2VHY4LxPGd1HaEl1J5UyFDmER8OkRd57jHEfQpOW3Yzd%2FjOxmZeZb48nGJLFziNPXuccOcnnSN7s%2BQW77SY6%2FwUJrAoC6aHj0OssDl%2BFYUBMsEHh5p9fekmBK4BNGb%2FLmznDExXxGX9CSfPUdOJAMIbZzr57%2B%2FpC7i8%2BSruCscmOjnYv5yIxNpmTrSuMn4Qa0Wsr0zz2zmTFigGwbSGRePewPa3LvOT%2BJIg4iUFjCNTxBsZQ7M%2B17BYqlZ6uNTFFvcv2WgPl4NkmGxHX3GtFjQfn%2Bp76F02FaoHhrFi0VRqteiEGaM4giuvOPyIqkbTtrx8BbPGnLO%2FodV2g%2F7sVCbdqkavckqWS7JEVpj8wJHpPfU4zIpxnczrwQwoUtQGXX0BPKsdytWFrKKweu3MXvxTQsm7PAg1t5dw27IZPX1LTYDEqkC%2Flc0k5PIjYIHb2o7mx31XG1v4aN%2FKSAAFwVgZSQZ7%2BOVb7YVJ700sMP7q0skGOqUBB2XvxX169Kjy9XknHOODkBqzNKI3Jj5fe1DBve%2FT%2BeH9Ywrp6BZGJzSU7aBK11eE7Ag2lZUKMCEca0NIUbCRTpkl6eHFFW%2BNNMGRFy0pOCZVRPSjMq%2BXcWYPPoVonHx8ap8lY6nb8v%2Bm33lTmSFsP%2FY0MWNHMeOJZJD0wWkhfj%2BcbusRYVS5MRq2pAdatyV5ru76a29xBVOf3WWkQdlLXsWS%2FcBg&X-Amz-Signature=ba14ec27699303d6af8e2b1081d83cf177fd682d6886bf561e1f65f54a49a5e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBSRMXZX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXcl03gwTyf1gyHl4YafYtqmXfjYqeBQ43ht40BPtHwAiEAm4NUCL0oznPKgTYq1EdSrYcPGCFQxriYBfHnUUGnn3IqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPpor31iJZ846xqUyrcA%2B31H%2BwNbTTT%2FVrlfzJOxO21DkEngEqTGrVZB1FdEguj4t84TWOcLERKWxY%2BOiOk2lhft%2B%2B6EKX1lY1b7vkfXtTAnRSt4PYinY6QfSfh7YKxFMxLNp4DAuqPwicbmKeBjRk48ooE4C2NpTVYiNoww2VHY4LxPGd1HaEl1J5UyFDmER8OkRd57jHEfQpOW3Yzd%2FjOxmZeZb48nGJLFziNPXuccOcnnSN7s%2BQW77SY6%2FwUJrAoC6aHj0OssDl%2BFYUBMsEHh5p9fekmBK4BNGb%2FLmznDExXxGX9CSfPUdOJAMIbZzr57%2B%2FpC7i8%2BSruCscmOjnYv5yIxNpmTrSuMn4Qa0Wsr0zz2zmTFigGwbSGRePewPa3LvOT%2BJIg4iUFjCNTxBsZQ7M%2B17BYqlZ6uNTFFvcv2WgPl4NkmGxHX3GtFjQfn%2Bp76F02FaoHhrFi0VRqteiEGaM4giuvOPyIqkbTtrx8BbPGnLO%2FodV2g%2F7sVCbdqkavckqWS7JEVpj8wJHpPfU4zIpxnczrwQwoUtQGXX0BPKsdytWFrKKweu3MXvxTQsm7PAg1t5dw27IZPX1LTYDEqkC%2Flc0k5PIjYIHb2o7mx31XG1v4aN%2FKSAAFwVgZSQZ7%2BOVb7YVJ700sMP7q0skGOqUBB2XvxX169Kjy9XknHOODkBqzNKI3Jj5fe1DBve%2FT%2BeH9Ywrp6BZGJzSU7aBK11eE7Ag2lZUKMCEca0NIUbCRTpkl6eHFFW%2BNNMGRFy0pOCZVRPSjMq%2BXcWYPPoVonHx8ap8lY6nb8v%2Bm33lTmSFsP%2FY0MWNHMeOJZJD0wWkhfj%2BcbusRYVS5MRq2pAdatyV5ru76a29xBVOf3WWkQdlLXsWS%2FcBg&X-Amz-Signature=52bd18d16f72424d879b150b841a247fc7884e663d6bc3eda287afd865aa9066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBSRMXZX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXcl03gwTyf1gyHl4YafYtqmXfjYqeBQ43ht40BPtHwAiEAm4NUCL0oznPKgTYq1EdSrYcPGCFQxriYBfHnUUGnn3IqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPpor31iJZ846xqUyrcA%2B31H%2BwNbTTT%2FVrlfzJOxO21DkEngEqTGrVZB1FdEguj4t84TWOcLERKWxY%2BOiOk2lhft%2B%2B6EKX1lY1b7vkfXtTAnRSt4PYinY6QfSfh7YKxFMxLNp4DAuqPwicbmKeBjRk48ooE4C2NpTVYiNoww2VHY4LxPGd1HaEl1J5UyFDmER8OkRd57jHEfQpOW3Yzd%2FjOxmZeZb48nGJLFziNPXuccOcnnSN7s%2BQW77SY6%2FwUJrAoC6aHj0OssDl%2BFYUBMsEHh5p9fekmBK4BNGb%2FLmznDExXxGX9CSfPUdOJAMIbZzr57%2B%2FpC7i8%2BSruCscmOjnYv5yIxNpmTrSuMn4Qa0Wsr0zz2zmTFigGwbSGRePewPa3LvOT%2BJIg4iUFjCNTxBsZQ7M%2B17BYqlZ6uNTFFvcv2WgPl4NkmGxHX3GtFjQfn%2Bp76F02FaoHhrFi0VRqteiEGaM4giuvOPyIqkbTtrx8BbPGnLO%2FodV2g%2F7sVCbdqkavckqWS7JEVpj8wJHpPfU4zIpxnczrwQwoUtQGXX0BPKsdytWFrKKweu3MXvxTQsm7PAg1t5dw27IZPX1LTYDEqkC%2Flc0k5PIjYIHb2o7mx31XG1v4aN%2FKSAAFwVgZSQZ7%2BOVb7YVJ700sMP7q0skGOqUBB2XvxX169Kjy9XknHOODkBqzNKI3Jj5fe1DBve%2FT%2BeH9Ywrp6BZGJzSU7aBK11eE7Ag2lZUKMCEca0NIUbCRTpkl6eHFFW%2BNNMGRFy0pOCZVRPSjMq%2BXcWYPPoVonHx8ap8lY6nb8v%2Bm33lTmSFsP%2FY0MWNHMeOJZJD0wWkhfj%2BcbusRYVS5MRq2pAdatyV5ru76a29xBVOf3WWkQdlLXsWS%2FcBg&X-Amz-Signature=60d22b86fb6666742c4b9b4ddda5f8235866090d12edeb42f9200be1b059a1ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBSRMXZX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXcl03gwTyf1gyHl4YafYtqmXfjYqeBQ43ht40BPtHwAiEAm4NUCL0oznPKgTYq1EdSrYcPGCFQxriYBfHnUUGnn3IqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPpor31iJZ846xqUyrcA%2B31H%2BwNbTTT%2FVrlfzJOxO21DkEngEqTGrVZB1FdEguj4t84TWOcLERKWxY%2BOiOk2lhft%2B%2B6EKX1lY1b7vkfXtTAnRSt4PYinY6QfSfh7YKxFMxLNp4DAuqPwicbmKeBjRk48ooE4C2NpTVYiNoww2VHY4LxPGd1HaEl1J5UyFDmER8OkRd57jHEfQpOW3Yzd%2FjOxmZeZb48nGJLFziNPXuccOcnnSN7s%2BQW77SY6%2FwUJrAoC6aHj0OssDl%2BFYUBMsEHh5p9fekmBK4BNGb%2FLmznDExXxGX9CSfPUdOJAMIbZzr57%2B%2FpC7i8%2BSruCscmOjnYv5yIxNpmTrSuMn4Qa0Wsr0zz2zmTFigGwbSGRePewPa3LvOT%2BJIg4iUFjCNTxBsZQ7M%2B17BYqlZ6uNTFFvcv2WgPl4NkmGxHX3GtFjQfn%2Bp76F02FaoHhrFi0VRqteiEGaM4giuvOPyIqkbTtrx8BbPGnLO%2FodV2g%2F7sVCbdqkavckqWS7JEVpj8wJHpPfU4zIpxnczrwQwoUtQGXX0BPKsdytWFrKKweu3MXvxTQsm7PAg1t5dw27IZPX1LTYDEqkC%2Flc0k5PIjYIHb2o7mx31XG1v4aN%2FKSAAFwVgZSQZ7%2BOVb7YVJ700sMP7q0skGOqUBB2XvxX169Kjy9XknHOODkBqzNKI3Jj5fe1DBve%2FT%2BeH9Ywrp6BZGJzSU7aBK11eE7Ag2lZUKMCEca0NIUbCRTpkl6eHFFW%2BNNMGRFy0pOCZVRPSjMq%2BXcWYPPoVonHx8ap8lY6nb8v%2Bm33lTmSFsP%2FY0MWNHMeOJZJD0wWkhfj%2BcbusRYVS5MRq2pAdatyV5ru76a29xBVOf3WWkQdlLXsWS%2FcBg&X-Amz-Signature=4fa12d3a76c0667ca163f90a69a0b7fc787cdb905dc8a3bde815f3a16707a429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBSRMXZX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXcl03gwTyf1gyHl4YafYtqmXfjYqeBQ43ht40BPtHwAiEAm4NUCL0oznPKgTYq1EdSrYcPGCFQxriYBfHnUUGnn3IqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPpor31iJZ846xqUyrcA%2B31H%2BwNbTTT%2FVrlfzJOxO21DkEngEqTGrVZB1FdEguj4t84TWOcLERKWxY%2BOiOk2lhft%2B%2B6EKX1lY1b7vkfXtTAnRSt4PYinY6QfSfh7YKxFMxLNp4DAuqPwicbmKeBjRk48ooE4C2NpTVYiNoww2VHY4LxPGd1HaEl1J5UyFDmER8OkRd57jHEfQpOW3Yzd%2FjOxmZeZb48nGJLFziNPXuccOcnnSN7s%2BQW77SY6%2FwUJrAoC6aHj0OssDl%2BFYUBMsEHh5p9fekmBK4BNGb%2FLmznDExXxGX9CSfPUdOJAMIbZzr57%2B%2FpC7i8%2BSruCscmOjnYv5yIxNpmTrSuMn4Qa0Wsr0zz2zmTFigGwbSGRePewPa3LvOT%2BJIg4iUFjCNTxBsZQ7M%2B17BYqlZ6uNTFFvcv2WgPl4NkmGxHX3GtFjQfn%2Bp76F02FaoHhrFi0VRqteiEGaM4giuvOPyIqkbTtrx8BbPGnLO%2FodV2g%2F7sVCbdqkavckqWS7JEVpj8wJHpPfU4zIpxnczrwQwoUtQGXX0BPKsdytWFrKKweu3MXvxTQsm7PAg1t5dw27IZPX1LTYDEqkC%2Flc0k5PIjYIHb2o7mx31XG1v4aN%2FKSAAFwVgZSQZ7%2BOVb7YVJ700sMP7q0skGOqUBB2XvxX169Kjy9XknHOODkBqzNKI3Jj5fe1DBve%2FT%2BeH9Ywrp6BZGJzSU7aBK11eE7Ag2lZUKMCEca0NIUbCRTpkl6eHFFW%2BNNMGRFy0pOCZVRPSjMq%2BXcWYPPoVonHx8ap8lY6nb8v%2Bm33lTmSFsP%2FY0MWNHMeOJZJD0wWkhfj%2BcbusRYVS5MRq2pAdatyV5ru76a29xBVOf3WWkQdlLXsWS%2FcBg&X-Amz-Signature=72933dccabe1dd6e28db42734323ec77bfc7c613996cdd801916a3f287ce2ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O3JUJHI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BViHM0tN2fgMC89zs1MQgQMzsyjYo%2B0QZ77h8MWIiTAiA1qiKBmX0QQsfMaGkZEg9c0WQoFKT%2BXrhOgKoBpKklEyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjy2nnF6RV2IDMvkJKtwD181PQyy%2BhYL%2BfF5iWwE%2FIEZaDaFOcms2CebPLLlEg4Ds%2Fml%2BZZqW4O3JZzQ8KJ6M0vk7O%2BxwDNlr7xcVKP2SrTNqIk7ybaoNaEwoxEZ8eRbsXFX88Mf0uJu%2FCampqMquiJWjndo0EKXugRDGAYab69w1BW1wTIj8ctI0HrE2MpgLx1JJ0Cj9SfISs8ZnprChHYfj30cMNynuX1o%2BjgDORcTiClbCZ3DoR56Px%2F3bjVMTRCYbHwuSDeOssP771WexI89WWdWQPtolYC6J8WD1igMMH13oJwGaTUWY5%2F3sVSSqCH%2B2DL9rCf3ZMHuvdHdMjy%2F61MzasgMtcJ8j%2FE2ZLLiJKbVGQ%2FBO%2FqnJKc922XdquG%2FY4l2HsLp67snMffPthzdaHkpuZ9zzanP0173ghMVSxDvtirosao30uZrMNeLn3PHGpj2UcTs%2BAgc9f30LLU1mDbcB%2BNdmlFcPesmw17xn2hS72OLm6GNvKcbQdYKDa%2BtPsOz6Jxrq2%2BcddZcrq2lDVRFaMcLV%2FHPu6klxVr12B9WLMA5iP%2F2pOEGhAD6GqNCcHdikX0zI9nNl7BIc8xkib0Qq63Dg7DoZeKVU8X3ysmNnZb%2FgeIOXqHPZ%2BA4S0ATH64Wb5gAOTR8w7erSyQY6pgEgU7CIz%2FxuYfEm%2Bv%2FRjAx1gjZ1R7uYSMgxMr6Detk8uTA5PhlU1dqaJxSylBn2Tlc3r%2FnpeT5EjQYVzWzZgrQWz5YNrd3RDxtnfNHizxVSWBuugrPOj%2BYM6eme5IB4w8T4rdJdWvtIsVVwepYRrFW1AS06GcfddRNhAabGgDYTjRJmiB2qCo%2BesfMuZWA2pYrx4gxafnAHzW4%2FThLL3%2F%2BkhjC4MI0x&X-Amz-Signature=d522270c9b54cfb73f14e1a3ddf950457e551a35fcdf1523db65daaa49e0859f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O3JUJHI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BViHM0tN2fgMC89zs1MQgQMzsyjYo%2B0QZ77h8MWIiTAiA1qiKBmX0QQsfMaGkZEg9c0WQoFKT%2BXrhOgKoBpKklEyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjy2nnF6RV2IDMvkJKtwD181PQyy%2BhYL%2BfF5iWwE%2FIEZaDaFOcms2CebPLLlEg4Ds%2Fml%2BZZqW4O3JZzQ8KJ6M0vk7O%2BxwDNlr7xcVKP2SrTNqIk7ybaoNaEwoxEZ8eRbsXFX88Mf0uJu%2FCampqMquiJWjndo0EKXugRDGAYab69w1BW1wTIj8ctI0HrE2MpgLx1JJ0Cj9SfISs8ZnprChHYfj30cMNynuX1o%2BjgDORcTiClbCZ3DoR56Px%2F3bjVMTRCYbHwuSDeOssP771WexI89WWdWQPtolYC6J8WD1igMMH13oJwGaTUWY5%2F3sVSSqCH%2B2DL9rCf3ZMHuvdHdMjy%2F61MzasgMtcJ8j%2FE2ZLLiJKbVGQ%2FBO%2FqnJKc922XdquG%2FY4l2HsLp67snMffPthzdaHkpuZ9zzanP0173ghMVSxDvtirosao30uZrMNeLn3PHGpj2UcTs%2BAgc9f30LLU1mDbcB%2BNdmlFcPesmw17xn2hS72OLm6GNvKcbQdYKDa%2BtPsOz6Jxrq2%2BcddZcrq2lDVRFaMcLV%2FHPu6klxVr12B9WLMA5iP%2F2pOEGhAD6GqNCcHdikX0zI9nNl7BIc8xkib0Qq63Dg7DoZeKVU8X3ysmNnZb%2FgeIOXqHPZ%2BA4S0ATH64Wb5gAOTR8w7erSyQY6pgEgU7CIz%2FxuYfEm%2Bv%2FRjAx1gjZ1R7uYSMgxMr6Detk8uTA5PhlU1dqaJxSylBn2Tlc3r%2FnpeT5EjQYVzWzZgrQWz5YNrd3RDxtnfNHizxVSWBuugrPOj%2BYM6eme5IB4w8T4rdJdWvtIsVVwepYRrFW1AS06GcfddRNhAabGgDYTjRJmiB2qCo%2BesfMuZWA2pYrx4gxafnAHzW4%2FThLL3%2F%2BkhjC4MI0x&X-Amz-Signature=424f5d97c61bb69ccd4b7a32ff0515b727e67f1cddf6a8d92fa8842d36cb4542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O3JUJHI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BViHM0tN2fgMC89zs1MQgQMzsyjYo%2B0QZ77h8MWIiTAiA1qiKBmX0QQsfMaGkZEg9c0WQoFKT%2BXrhOgKoBpKklEyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjy2nnF6RV2IDMvkJKtwD181PQyy%2BhYL%2BfF5iWwE%2FIEZaDaFOcms2CebPLLlEg4Ds%2Fml%2BZZqW4O3JZzQ8KJ6M0vk7O%2BxwDNlr7xcVKP2SrTNqIk7ybaoNaEwoxEZ8eRbsXFX88Mf0uJu%2FCampqMquiJWjndo0EKXugRDGAYab69w1BW1wTIj8ctI0HrE2MpgLx1JJ0Cj9SfISs8ZnprChHYfj30cMNynuX1o%2BjgDORcTiClbCZ3DoR56Px%2F3bjVMTRCYbHwuSDeOssP771WexI89WWdWQPtolYC6J8WD1igMMH13oJwGaTUWY5%2F3sVSSqCH%2B2DL9rCf3ZMHuvdHdMjy%2F61MzasgMtcJ8j%2FE2ZLLiJKbVGQ%2FBO%2FqnJKc922XdquG%2FY4l2HsLp67snMffPthzdaHkpuZ9zzanP0173ghMVSxDvtirosao30uZrMNeLn3PHGpj2UcTs%2BAgc9f30LLU1mDbcB%2BNdmlFcPesmw17xn2hS72OLm6GNvKcbQdYKDa%2BtPsOz6Jxrq2%2BcddZcrq2lDVRFaMcLV%2FHPu6klxVr12B9WLMA5iP%2F2pOEGhAD6GqNCcHdikX0zI9nNl7BIc8xkib0Qq63Dg7DoZeKVU8X3ysmNnZb%2FgeIOXqHPZ%2BA4S0ATH64Wb5gAOTR8w7erSyQY6pgEgU7CIz%2FxuYfEm%2Bv%2FRjAx1gjZ1R7uYSMgxMr6Detk8uTA5PhlU1dqaJxSylBn2Tlc3r%2FnpeT5EjQYVzWzZgrQWz5YNrd3RDxtnfNHizxVSWBuugrPOj%2BYM6eme5IB4w8T4rdJdWvtIsVVwepYRrFW1AS06GcfddRNhAabGgDYTjRJmiB2qCo%2BesfMuZWA2pYrx4gxafnAHzW4%2FThLL3%2F%2BkhjC4MI0x&X-Amz-Signature=db4cd0d7546cf339b363891639e237c0864800df788a6c0f8fb62a25abd43291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O3JUJHI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BViHM0tN2fgMC89zs1MQgQMzsyjYo%2B0QZ77h8MWIiTAiA1qiKBmX0QQsfMaGkZEg9c0WQoFKT%2BXrhOgKoBpKklEyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjy2nnF6RV2IDMvkJKtwD181PQyy%2BhYL%2BfF5iWwE%2FIEZaDaFOcms2CebPLLlEg4Ds%2Fml%2BZZqW4O3JZzQ8KJ6M0vk7O%2BxwDNlr7xcVKP2SrTNqIk7ybaoNaEwoxEZ8eRbsXFX88Mf0uJu%2FCampqMquiJWjndo0EKXugRDGAYab69w1BW1wTIj8ctI0HrE2MpgLx1JJ0Cj9SfISs8ZnprChHYfj30cMNynuX1o%2BjgDORcTiClbCZ3DoR56Px%2F3bjVMTRCYbHwuSDeOssP771WexI89WWdWQPtolYC6J8WD1igMMH13oJwGaTUWY5%2F3sVSSqCH%2B2DL9rCf3ZMHuvdHdMjy%2F61MzasgMtcJ8j%2FE2ZLLiJKbVGQ%2FBO%2FqnJKc922XdquG%2FY4l2HsLp67snMffPthzdaHkpuZ9zzanP0173ghMVSxDvtirosao30uZrMNeLn3PHGpj2UcTs%2BAgc9f30LLU1mDbcB%2BNdmlFcPesmw17xn2hS72OLm6GNvKcbQdYKDa%2BtPsOz6Jxrq2%2BcddZcrq2lDVRFaMcLV%2FHPu6klxVr12B9WLMA5iP%2F2pOEGhAD6GqNCcHdikX0zI9nNl7BIc8xkib0Qq63Dg7DoZeKVU8X3ysmNnZb%2FgeIOXqHPZ%2BA4S0ATH64Wb5gAOTR8w7erSyQY6pgEgU7CIz%2FxuYfEm%2Bv%2FRjAx1gjZ1R7uYSMgxMr6Detk8uTA5PhlU1dqaJxSylBn2Tlc3r%2FnpeT5EjQYVzWzZgrQWz5YNrd3RDxtnfNHizxVSWBuugrPOj%2BYM6eme5IB4w8T4rdJdWvtIsVVwepYRrFW1AS06GcfddRNhAabGgDYTjRJmiB2qCo%2BesfMuZWA2pYrx4gxafnAHzW4%2FThLL3%2F%2BkhjC4MI0x&X-Amz-Signature=2ff352ed6405c9a25e42795ca128bfdd2b1ca6924d51802f73a1e770fb056967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O3JUJHI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BViHM0tN2fgMC89zs1MQgQMzsyjYo%2B0QZ77h8MWIiTAiA1qiKBmX0QQsfMaGkZEg9c0WQoFKT%2BXrhOgKoBpKklEyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjy2nnF6RV2IDMvkJKtwD181PQyy%2BhYL%2BfF5iWwE%2FIEZaDaFOcms2CebPLLlEg4Ds%2Fml%2BZZqW4O3JZzQ8KJ6M0vk7O%2BxwDNlr7xcVKP2SrTNqIk7ybaoNaEwoxEZ8eRbsXFX88Mf0uJu%2FCampqMquiJWjndo0EKXugRDGAYab69w1BW1wTIj8ctI0HrE2MpgLx1JJ0Cj9SfISs8ZnprChHYfj30cMNynuX1o%2BjgDORcTiClbCZ3DoR56Px%2F3bjVMTRCYbHwuSDeOssP771WexI89WWdWQPtolYC6J8WD1igMMH13oJwGaTUWY5%2F3sVSSqCH%2B2DL9rCf3ZMHuvdHdMjy%2F61MzasgMtcJ8j%2FE2ZLLiJKbVGQ%2FBO%2FqnJKc922XdquG%2FY4l2HsLp67snMffPthzdaHkpuZ9zzanP0173ghMVSxDvtirosao30uZrMNeLn3PHGpj2UcTs%2BAgc9f30LLU1mDbcB%2BNdmlFcPesmw17xn2hS72OLm6GNvKcbQdYKDa%2BtPsOz6Jxrq2%2BcddZcrq2lDVRFaMcLV%2FHPu6klxVr12B9WLMA5iP%2F2pOEGhAD6GqNCcHdikX0zI9nNl7BIc8xkib0Qq63Dg7DoZeKVU8X3ysmNnZb%2FgeIOXqHPZ%2BA4S0ATH64Wb5gAOTR8w7erSyQY6pgEgU7CIz%2FxuYfEm%2Bv%2FRjAx1gjZ1R7uYSMgxMr6Detk8uTA5PhlU1dqaJxSylBn2Tlc3r%2FnpeT5EjQYVzWzZgrQWz5YNrd3RDxtnfNHizxVSWBuugrPOj%2BYM6eme5IB4w8T4rdJdWvtIsVVwepYRrFW1AS06GcfddRNhAabGgDYTjRJmiB2qCo%2BesfMuZWA2pYrx4gxafnAHzW4%2FThLL3%2F%2BkhjC4MI0x&X-Amz-Signature=b075c8f71450280ff882e4d302920982ea12efc0ad873fc0566d3c7f62c392fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULSLHOEI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqw%2F7JVN0FhP7iBfQFKeW60ED%2BtsinIdt7aX3rcPJnPAiEA3VjK5gKt5rVcJ2ou5keVxzWEXS382rcz4XC21hXhRGEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWqn98uiO5ZpEMROircAyC6cd%2FgOgndibEO8DWGHXhNcsDB0YmqyGFPh1uloE7WcIOUEi0nZhl8BDmPhGuyg%2BAkmbB0egai3qPpy7k25UQQoLOyE7SwekEzuxWjJkDtSuA4A5M96DxJ4esTjJZ99Imn8V4idmPDuqJiCCnrNwEp1kfB7JidQ28QdguMtuSB7Vmkr%2B1Kg1VyGMqIKH2LsAg10Y0N0AjFnPC6MSJbdlo850u0T%2F17kYmDVqQyU%2FQ5vL9jTgvHzKHoXpcHSuBVIwJeJXPUnarzD%2FKdOY6BWYVxzxaz7GLdoLGjflGuk0tkaapSQIMEYVcpInsrVqKVhwOJEWFOKFBcN2dDA4QflEE7qNwae9iGYjMtHWzlFhH4k4CjUlFEzQSYpR4ycTQhf6i651RB6spysoPo3lCA6iMB1Ix1OY%2Flo3%2F8qgdXSDGIKfoEfNzFPKzrvgnpHY1Z8%2FRH4mY0eSkwPZodATwy6bHvYPCPYBO2kWiwJsw45T4v3zxDovub1aEbEUnrpDWHSAJlDSUtr2O1cyS019ytr44BYOXjQtGq1VXpooX%2BswKrwVdX77GiRPke%2FxEygmvoOt8ZhTNtN20%2FvRQ5zBKDZ8MvsBSnxAwYrI9yEklroUgDwXxZB%2B1xMoOUTZG2MIHs0skGOqUBrcNFWA7W7cKudBQ7gekiu2tc%2FlIquSyJ6YKYIEGlwrEGj42w6ttw6mpITiK8mepZj%2FeN5q%2Fw8dZXZ5wBKtLHZ7VgudymsR3rOZjTLvBFS2qdDMJpiAK7FEFicXcVSJAlBcvF8EAQYjsE1EYIRP91hssLbL3KRSUslLBuj2Unyq91f2%2BvoGrLRVBZC4jZ9fXNYHtS3L1c14Tpben9AqVlohPSQMrM&X-Amz-Signature=d053bcc8f344be838c95a7aee9c421f076b858fcd90049ad6adc91f1dbf3096c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULSLHOEI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqw%2F7JVN0FhP7iBfQFKeW60ED%2BtsinIdt7aX3rcPJnPAiEA3VjK5gKt5rVcJ2ou5keVxzWEXS382rcz4XC21hXhRGEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWqn98uiO5ZpEMROircAyC6cd%2FgOgndibEO8DWGHXhNcsDB0YmqyGFPh1uloE7WcIOUEi0nZhl8BDmPhGuyg%2BAkmbB0egai3qPpy7k25UQQoLOyE7SwekEzuxWjJkDtSuA4A5M96DxJ4esTjJZ99Imn8V4idmPDuqJiCCnrNwEp1kfB7JidQ28QdguMtuSB7Vmkr%2B1Kg1VyGMqIKH2LsAg10Y0N0AjFnPC6MSJbdlo850u0T%2F17kYmDVqQyU%2FQ5vL9jTgvHzKHoXpcHSuBVIwJeJXPUnarzD%2FKdOY6BWYVxzxaz7GLdoLGjflGuk0tkaapSQIMEYVcpInsrVqKVhwOJEWFOKFBcN2dDA4QflEE7qNwae9iGYjMtHWzlFhH4k4CjUlFEzQSYpR4ycTQhf6i651RB6spysoPo3lCA6iMB1Ix1OY%2Flo3%2F8qgdXSDGIKfoEfNzFPKzrvgnpHY1Z8%2FRH4mY0eSkwPZodATwy6bHvYPCPYBO2kWiwJsw45T4v3zxDovub1aEbEUnrpDWHSAJlDSUtr2O1cyS019ytr44BYOXjQtGq1VXpooX%2BswKrwVdX77GiRPke%2FxEygmvoOt8ZhTNtN20%2FvRQ5zBKDZ8MvsBSnxAwYrI9yEklroUgDwXxZB%2B1xMoOUTZG2MIHs0skGOqUBrcNFWA7W7cKudBQ7gekiu2tc%2FlIquSyJ6YKYIEGlwrEGj42w6ttw6mpITiK8mepZj%2FeN5q%2Fw8dZXZ5wBKtLHZ7VgudymsR3rOZjTLvBFS2qdDMJpiAK7FEFicXcVSJAlBcvF8EAQYjsE1EYIRP91hssLbL3KRSUslLBuj2Unyq91f2%2BvoGrLRVBZC4jZ9fXNYHtS3L1c14Tpben9AqVlohPSQMrM&X-Amz-Signature=21b78c737afa638b520678e4904aa773cc4913813dba4c33440d86083cecb260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULSLHOEI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqw%2F7JVN0FhP7iBfQFKeW60ED%2BtsinIdt7aX3rcPJnPAiEA3VjK5gKt5rVcJ2ou5keVxzWEXS382rcz4XC21hXhRGEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWqn98uiO5ZpEMROircAyC6cd%2FgOgndibEO8DWGHXhNcsDB0YmqyGFPh1uloE7WcIOUEi0nZhl8BDmPhGuyg%2BAkmbB0egai3qPpy7k25UQQoLOyE7SwekEzuxWjJkDtSuA4A5M96DxJ4esTjJZ99Imn8V4idmPDuqJiCCnrNwEp1kfB7JidQ28QdguMtuSB7Vmkr%2B1Kg1VyGMqIKH2LsAg10Y0N0AjFnPC6MSJbdlo850u0T%2F17kYmDVqQyU%2FQ5vL9jTgvHzKHoXpcHSuBVIwJeJXPUnarzD%2FKdOY6BWYVxzxaz7GLdoLGjflGuk0tkaapSQIMEYVcpInsrVqKVhwOJEWFOKFBcN2dDA4QflEE7qNwae9iGYjMtHWzlFhH4k4CjUlFEzQSYpR4ycTQhf6i651RB6spysoPo3lCA6iMB1Ix1OY%2Flo3%2F8qgdXSDGIKfoEfNzFPKzrvgnpHY1Z8%2FRH4mY0eSkwPZodATwy6bHvYPCPYBO2kWiwJsw45T4v3zxDovub1aEbEUnrpDWHSAJlDSUtr2O1cyS019ytr44BYOXjQtGq1VXpooX%2BswKrwVdX77GiRPke%2FxEygmvoOt8ZhTNtN20%2FvRQ5zBKDZ8MvsBSnxAwYrI9yEklroUgDwXxZB%2B1xMoOUTZG2MIHs0skGOqUBrcNFWA7W7cKudBQ7gekiu2tc%2FlIquSyJ6YKYIEGlwrEGj42w6ttw6mpITiK8mepZj%2FeN5q%2Fw8dZXZ5wBKtLHZ7VgudymsR3rOZjTLvBFS2qdDMJpiAK7FEFicXcVSJAlBcvF8EAQYjsE1EYIRP91hssLbL3KRSUslLBuj2Unyq91f2%2BvoGrLRVBZC4jZ9fXNYHtS3L1c14Tpben9AqVlohPSQMrM&X-Amz-Signature=48a45d678151e36032e90ad8c74e34fe7c128901bad9b39830deed034e578a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L2OYQ5Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQxp0CVwqenHe%2FGVcN36%2BPFfLPxk2GvV7fbshuVt1bwAiEAhKByHsLskljKBTRlt%2Bk7h80D7Mi6ZvkvvRJfMjlmOQ4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbmiLZE0rILV7IKJircA0aWViZzz%2BoGqrIfM%2FzUmKEl1JXTACsARVLAQyD30BUcGKBeN5ktAwkXixtUXMgsgEok%2FxElDDwppQaIIIfBPXP6Ppmb%2FgWquBoiU0G%2BZopiFGvx9Benbsfb8%2BRLpcqQooNyeotS3cW4NysAV%2FYsuCLphBTcRZ3987RTzvaIXFH%2FtUuNApo3s0kdBp1pZB0pDkMCCMxQTskFCuuWwr5hV%2FZmYbzn3ve2gQpT%2Fg7%2FNhPdmZofoqI%2FaaW3nQih5%2FP69ka7p%2FJQXDqWBDEY31%2BhJGr824BVF6LnFtFVeIHYVcpo8BgutleMUnZgIaZTY%2BjugiVKGRVFJLbmi6G4ujFea85FqjMrj61dIS8iA1h726NqqxY9FaC%2FMsp70C%2BRQnpw8Rv%2BBxDasPOOCP0bPZ2qwfUs2x1VygzrQQsyLwgm2fCGEW%2Blx1X9gVtP%2BNvcecgucD80Zn1YybgvbqZLcs9O%2BddNkr0FQ%2F%2Fyv%2FaNFYyVtBgaicJUllcTpOq4PvUDjWv3Wxw6wug8RbaNIK1Mox1C7a5Yqe28uzAFRreIlqe%2BU2c%2BPbn7DLfUHhflOJgjX1suDTeiyy%2Bo6oqDAC5oeHmcmbVSgu%2BVm2qdpAvFWWOWsMdk1Jh42%2FPlGZ7gA2URMPfq0skGOqUBsXXihIIyClrsgQnez2%2FXHNkPAt538%2Bsl54JI3AGkI2zRrZfF%2F6qiXrJEGqCn0O2RwRLt%2FukS2SvFHrLLaOPczXP9lCoVgZT5iElgbKkOQpQL78vmqHxo9jzn29nqVed4kStlUTM1FZHZMCeRQJ1qvzSvKdtV%2FKYQE6NOZI8FaZVJND188hVXk69nObiTOyJwax5GXpCZdqY4Ddj4i0vBcls1MzKF&X-Amz-Signature=31c818c4ca30faa5d2863c9dcd31433b9e7e7a515d7a80df7091d0c9c8f2446e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L2OYQ5Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQxp0CVwqenHe%2FGVcN36%2BPFfLPxk2GvV7fbshuVt1bwAiEAhKByHsLskljKBTRlt%2Bk7h80D7Mi6ZvkvvRJfMjlmOQ4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbmiLZE0rILV7IKJircA0aWViZzz%2BoGqrIfM%2FzUmKEl1JXTACsARVLAQyD30BUcGKBeN5ktAwkXixtUXMgsgEok%2FxElDDwppQaIIIfBPXP6Ppmb%2FgWquBoiU0G%2BZopiFGvx9Benbsfb8%2BRLpcqQooNyeotS3cW4NysAV%2FYsuCLphBTcRZ3987RTzvaIXFH%2FtUuNApo3s0kdBp1pZB0pDkMCCMxQTskFCuuWwr5hV%2FZmYbzn3ve2gQpT%2Fg7%2FNhPdmZofoqI%2FaaW3nQih5%2FP69ka7p%2FJQXDqWBDEY31%2BhJGr824BVF6LnFtFVeIHYVcpo8BgutleMUnZgIaZTY%2BjugiVKGRVFJLbmi6G4ujFea85FqjMrj61dIS8iA1h726NqqxY9FaC%2FMsp70C%2BRQnpw8Rv%2BBxDasPOOCP0bPZ2qwfUs2x1VygzrQQsyLwgm2fCGEW%2Blx1X9gVtP%2BNvcecgucD80Zn1YybgvbqZLcs9O%2BddNkr0FQ%2F%2Fyv%2FaNFYyVtBgaicJUllcTpOq4PvUDjWv3Wxw6wug8RbaNIK1Mox1C7a5Yqe28uzAFRreIlqe%2BU2c%2BPbn7DLfUHhflOJgjX1suDTeiyy%2Bo6oqDAC5oeHmcmbVSgu%2BVm2qdpAvFWWOWsMdk1Jh42%2FPlGZ7gA2URMPfq0skGOqUBsXXihIIyClrsgQnez2%2FXHNkPAt538%2Bsl54JI3AGkI2zRrZfF%2F6qiXrJEGqCn0O2RwRLt%2FukS2SvFHrLLaOPczXP9lCoVgZT5iElgbKkOQpQL78vmqHxo9jzn29nqVed4kStlUTM1FZHZMCeRQJ1qvzSvKdtV%2FKYQE6NOZI8FaZVJND188hVXk69nObiTOyJwax5GXpCZdqY4Ddj4i0vBcls1MzKF&X-Amz-Signature=ba0514180e316050683da8a7f1b4b955ac7242e61936d16575bb70281d61a449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJMERWS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSwo3qEImpmMyey2NSGUdDV8QRG2JsFqtal5jU1x1PYAIgSKYHa0mk77FZeAqtdrkrZuQqcPR98%2FcuPzMT1fyc%2BDgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx7rmUl1W8o81v4lircA59FMLXfjpTuqcG5WupYMmSNoYkYsLDNuxsWm3cBb%2F8inAEe4O4gCo%2FBMz%2FO%2FRIdhXPHQBMjJz3MFb%2BNlkGBi7gNCYXichS5XGwK5YiSdMUlI5UT%2BRfO5n5JP4OpOhLnAyBXpO1wT1GSdvJUI3cLMqZ3cXt8maivGbptwDUVnjlBmUSz5xYJcPZ8GyuK8m1WGk7c1QcDLA3qeMIu80%2FtGfNrR7wozp4RktUNmlZPcYvQf28tZM1lVkAP%2B3R5bnKqSHeNxXIoSi%2BiDl8x2fUF%2BXy2Fu1pySUTKDSQxV00WYl4OncQ79njQtwzlfDpcXNGXUV0HDxA3hIeM5XEmJcA3%2F0um7udYJsy0ru3zHGQF8Gd4So8%2BhhXbPLKpKKotCR%2BXVOujyGZ%2F3D0KDxf2FG8%2F6o8pZXie5yr9vzU%2Bx0PdoTmSDRNK9e6fF%2BAVxsBYKrEdoIluHFSJG%2B5EBK2oBjO7qcxZHPbbTbvZxDRBCb8jTN%2FTPLBdxvEKkmxAUHPmNwEUG6PgjU%2FlX2Qi3R6rWLqw2o0ovtH47XDWKHWCh0yopnAgG4K1mSEUV8aSTl%2B7Fff%2B5lrXMr8wzGgNz6IE7phuyUNPqdwGKGkgeWnevIAc6tXW%2B0g8Vdh7HjKCf4sMNnr0skGOqUB%2BBYvIsdqRk5RuamSfr1V%2BH8jdBtrQiUInYP%2ByUrTqCD25p2UEq4dweyu8YuvEvv6tbdvLo9mIT2sGUS2Km3z8eLi18bAQRd7yw1kbYpVSNK6FWm2B8tbFdzfzmh3CMDuSXsn%2Bw9%2B%2ByNBFhvdr8ObpOSg6A7yvbNq1Qh%2BGmWe85va9FWCBTARcDWQ3lb%2FQtwObnaBSlqrUJFLzlUK21gXEDJA0tO4&X-Amz-Signature=753b8b84d753f01b1c1734f26a7090aaef1378dd6888aeb9bbbb2cb3abfe7276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJMERWS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSwo3qEImpmMyey2NSGUdDV8QRG2JsFqtal5jU1x1PYAIgSKYHa0mk77FZeAqtdrkrZuQqcPR98%2FcuPzMT1fyc%2BDgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx7rmUl1W8o81v4lircA59FMLXfjpTuqcG5WupYMmSNoYkYsLDNuxsWm3cBb%2F8inAEe4O4gCo%2FBMz%2FO%2FRIdhXPHQBMjJz3MFb%2BNlkGBi7gNCYXichS5XGwK5YiSdMUlI5UT%2BRfO5n5JP4OpOhLnAyBXpO1wT1GSdvJUI3cLMqZ3cXt8maivGbptwDUVnjlBmUSz5xYJcPZ8GyuK8m1WGk7c1QcDLA3qeMIu80%2FtGfNrR7wozp4RktUNmlZPcYvQf28tZM1lVkAP%2B3R5bnKqSHeNxXIoSi%2BiDl8x2fUF%2BXy2Fu1pySUTKDSQxV00WYl4OncQ79njQtwzlfDpcXNGXUV0HDxA3hIeM5XEmJcA3%2F0um7udYJsy0ru3zHGQF8Gd4So8%2BhhXbPLKpKKotCR%2BXVOujyGZ%2F3D0KDxf2FG8%2F6o8pZXie5yr9vzU%2Bx0PdoTmSDRNK9e6fF%2BAVxsBYKrEdoIluHFSJG%2B5EBK2oBjO7qcxZHPbbTbvZxDRBCb8jTN%2FTPLBdxvEKkmxAUHPmNwEUG6PgjU%2FlX2Qi3R6rWLqw2o0ovtH47XDWKHWCh0yopnAgG4K1mSEUV8aSTl%2B7Fff%2B5lrXMr8wzGgNz6IE7phuyUNPqdwGKGkgeWnevIAc6tXW%2B0g8Vdh7HjKCf4sMNnr0skGOqUB%2BBYvIsdqRk5RuamSfr1V%2BH8jdBtrQiUInYP%2ByUrTqCD25p2UEq4dweyu8YuvEvv6tbdvLo9mIT2sGUS2Km3z8eLi18bAQRd7yw1kbYpVSNK6FWm2B8tbFdzfzmh3CMDuSXsn%2Bw9%2B%2ByNBFhvdr8ObpOSg6A7yvbNq1Qh%2BGmWe85va9FWCBTARcDWQ3lb%2FQtwObnaBSlqrUJFLzlUK21gXEDJA0tO4&X-Amz-Signature=0545bb84ba49c2df106982599618191d9b527a278e916e9cc3fa394f02936e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJMERWS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSwo3qEImpmMyey2NSGUdDV8QRG2JsFqtal5jU1x1PYAIgSKYHa0mk77FZeAqtdrkrZuQqcPR98%2FcuPzMT1fyc%2BDgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx7rmUl1W8o81v4lircA59FMLXfjpTuqcG5WupYMmSNoYkYsLDNuxsWm3cBb%2F8inAEe4O4gCo%2FBMz%2FO%2FRIdhXPHQBMjJz3MFb%2BNlkGBi7gNCYXichS5XGwK5YiSdMUlI5UT%2BRfO5n5JP4OpOhLnAyBXpO1wT1GSdvJUI3cLMqZ3cXt8maivGbptwDUVnjlBmUSz5xYJcPZ8GyuK8m1WGk7c1QcDLA3qeMIu80%2FtGfNrR7wozp4RktUNmlZPcYvQf28tZM1lVkAP%2B3R5bnKqSHeNxXIoSi%2BiDl8x2fUF%2BXy2Fu1pySUTKDSQxV00WYl4OncQ79njQtwzlfDpcXNGXUV0HDxA3hIeM5XEmJcA3%2F0um7udYJsy0ru3zHGQF8Gd4So8%2BhhXbPLKpKKotCR%2BXVOujyGZ%2F3D0KDxf2FG8%2F6o8pZXie5yr9vzU%2Bx0PdoTmSDRNK9e6fF%2BAVxsBYKrEdoIluHFSJG%2B5EBK2oBjO7qcxZHPbbTbvZxDRBCb8jTN%2FTPLBdxvEKkmxAUHPmNwEUG6PgjU%2FlX2Qi3R6rWLqw2o0ovtH47XDWKHWCh0yopnAgG4K1mSEUV8aSTl%2B7Fff%2B5lrXMr8wzGgNz6IE7phuyUNPqdwGKGkgeWnevIAc6tXW%2B0g8Vdh7HjKCf4sMNnr0skGOqUB%2BBYvIsdqRk5RuamSfr1V%2BH8jdBtrQiUInYP%2ByUrTqCD25p2UEq4dweyu8YuvEvv6tbdvLo9mIT2sGUS2Km3z8eLi18bAQRd7yw1kbYpVSNK6FWm2B8tbFdzfzmh3CMDuSXsn%2Bw9%2B%2ByNBFhvdr8ObpOSg6A7yvbNq1Qh%2BGmWe85va9FWCBTARcDWQ3lb%2FQtwObnaBSlqrUJFLzlUK21gXEDJA0tO4&X-Amz-Signature=001344e1d624aa5bff5791a143628c8b66383cd4bb0fb906f3c8c921fbcc24a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJMERWS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSwo3qEImpmMyey2NSGUdDV8QRG2JsFqtal5jU1x1PYAIgSKYHa0mk77FZeAqtdrkrZuQqcPR98%2FcuPzMT1fyc%2BDgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx7rmUl1W8o81v4lircA59FMLXfjpTuqcG5WupYMmSNoYkYsLDNuxsWm3cBb%2F8inAEe4O4gCo%2FBMz%2FO%2FRIdhXPHQBMjJz3MFb%2BNlkGBi7gNCYXichS5XGwK5YiSdMUlI5UT%2BRfO5n5JP4OpOhLnAyBXpO1wT1GSdvJUI3cLMqZ3cXt8maivGbptwDUVnjlBmUSz5xYJcPZ8GyuK8m1WGk7c1QcDLA3qeMIu80%2FtGfNrR7wozp4RktUNmlZPcYvQf28tZM1lVkAP%2B3R5bnKqSHeNxXIoSi%2BiDl8x2fUF%2BXy2Fu1pySUTKDSQxV00WYl4OncQ79njQtwzlfDpcXNGXUV0HDxA3hIeM5XEmJcA3%2F0um7udYJsy0ru3zHGQF8Gd4So8%2BhhXbPLKpKKotCR%2BXVOujyGZ%2F3D0KDxf2FG8%2F6o8pZXie5yr9vzU%2Bx0PdoTmSDRNK9e6fF%2BAVxsBYKrEdoIluHFSJG%2B5EBK2oBjO7qcxZHPbbTbvZxDRBCb8jTN%2FTPLBdxvEKkmxAUHPmNwEUG6PgjU%2FlX2Qi3R6rWLqw2o0ovtH47XDWKHWCh0yopnAgG4K1mSEUV8aSTl%2B7Fff%2B5lrXMr8wzGgNz6IE7phuyUNPqdwGKGkgeWnevIAc6tXW%2B0g8Vdh7HjKCf4sMNnr0skGOqUB%2BBYvIsdqRk5RuamSfr1V%2BH8jdBtrQiUInYP%2ByUrTqCD25p2UEq4dweyu8YuvEvv6tbdvLo9mIT2sGUS2Km3z8eLi18bAQRd7yw1kbYpVSNK6FWm2B8tbFdzfzmh3CMDuSXsn%2Bw9%2B%2ByNBFhvdr8ObpOSg6A7yvbNq1Qh%2BGmWe85va9FWCBTARcDWQ3lb%2FQtwObnaBSlqrUJFLzlUK21gXEDJA0tO4&X-Amz-Signature=eb3fceb49dc999cca7ded28655670536286388683d6cdb978816bafd46d1965a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJMERWS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSwo3qEImpmMyey2NSGUdDV8QRG2JsFqtal5jU1x1PYAIgSKYHa0mk77FZeAqtdrkrZuQqcPR98%2FcuPzMT1fyc%2BDgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx7rmUl1W8o81v4lircA59FMLXfjpTuqcG5WupYMmSNoYkYsLDNuxsWm3cBb%2F8inAEe4O4gCo%2FBMz%2FO%2FRIdhXPHQBMjJz3MFb%2BNlkGBi7gNCYXichS5XGwK5YiSdMUlI5UT%2BRfO5n5JP4OpOhLnAyBXpO1wT1GSdvJUI3cLMqZ3cXt8maivGbptwDUVnjlBmUSz5xYJcPZ8GyuK8m1WGk7c1QcDLA3qeMIu80%2FtGfNrR7wozp4RktUNmlZPcYvQf28tZM1lVkAP%2B3R5bnKqSHeNxXIoSi%2BiDl8x2fUF%2BXy2Fu1pySUTKDSQxV00WYl4OncQ79njQtwzlfDpcXNGXUV0HDxA3hIeM5XEmJcA3%2F0um7udYJsy0ru3zHGQF8Gd4So8%2BhhXbPLKpKKotCR%2BXVOujyGZ%2F3D0KDxf2FG8%2F6o8pZXie5yr9vzU%2Bx0PdoTmSDRNK9e6fF%2BAVxsBYKrEdoIluHFSJG%2B5EBK2oBjO7qcxZHPbbTbvZxDRBCb8jTN%2FTPLBdxvEKkmxAUHPmNwEUG6PgjU%2FlX2Qi3R6rWLqw2o0ovtH47XDWKHWCh0yopnAgG4K1mSEUV8aSTl%2B7Fff%2B5lrXMr8wzGgNz6IE7phuyUNPqdwGKGkgeWnevIAc6tXW%2B0g8Vdh7HjKCf4sMNnr0skGOqUB%2BBYvIsdqRk5RuamSfr1V%2BH8jdBtrQiUInYP%2ByUrTqCD25p2UEq4dweyu8YuvEvv6tbdvLo9mIT2sGUS2Km3z8eLi18bAQRd7yw1kbYpVSNK6FWm2B8tbFdzfzmh3CMDuSXsn%2Bw9%2B%2ByNBFhvdr8ObpOSg6A7yvbNq1Qh%2BGmWe85va9FWCBTARcDWQ3lb%2FQtwObnaBSlqrUJFLzlUK21gXEDJA0tO4&X-Amz-Signature=6eb9693c57ed984f635883ab1c32a2c6737fce7942bd7eefe5826b23ad932df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KB2FFLP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcYmdmmFRI3HJYI884wVvdHag2ENXewCoRNB45nJUgTAiEA3AgValUYagpx0owbtk30eZxWxU4Y5WP4KMO7n2c197UqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9rggs%2BZgt6oZp94yrcA3N%2FFWWF871gxtlyD8%2FgYixc8c4WHx3CnxVKIVWfBQV0YGczNIl1i4mUTLa9WHjiQGXn4DcAWsBCEZwuA0FEmrYEuDrQ0CR3w2JT5RKgjMX6WkjB8flzsexxYtBnyelPdlS0OymiwQkF9RqLZZOvzpnTDcnD7WAnpgJxg%2FIKjHtmla01GKpIVGNAfkiqEwwZ373wbBqB50AdK7lbJv39QOWYVUyQkJKIaJ90i7S6%2F9FatWUJva8T8B4r%2FQN7v21ig6tx5wu6um1JtgLIQzLD%2BbiAOg1vByMZ%2Fnvz%2BynEPHEyJZLtL6BZu4ZauYpW%2BPH94%2BhOuxbFdV0dwNjFB3Y3fbXTmgNCxobYLIPe0ouUru2m%2BNZnodLzlNNulLwtLWEtJJl2SrgCNcThI4NrkikZ2%2FHp%2B%2FOKpbMgHdDHolteUnAdSjDc0OGVxoFw7n2Ix7zvepSKPahZSsDe65dIIPdxCNTl%2ByOujtgz7DMU6119LmY16hFjWwLwoEXyDiwPnvPbNw8SW7ieExZuJCmTyqXpz90KYHLGSv6gRbid2OAbuayVM7PpFx7ROFcZmGR1S2zvHIVYixoQ%2B5jUT27W2mHwZQXjGqYRYISjYkq1Jj1SPS%2BotsqCqYFVFmKSWQV2MMPr0skGOqUBixadmKEw55IQVHink7pIbV1VUWTm8ih%2Fq%2FoMMR0Io2NxJJVXvw%2FsfjnsThUnalr6rZxzAxY0LVtWbQVi3m8zF5QdarcomDQAjjlFVVTcmmgxnySFGWOwSZc2tcVt%2BAajkuwfnoJN4D3VZ5GdtNDDt%2Fym9LM0KRHCYj9%2BNuBZzsJpbZpmJJ%2F%2Bq3sRXGA2DwPatlLvgTFPc2NXHxzer7KGZ%2BytL8Si&X-Amz-Signature=974c0564ed4a757bfd47945494ae7079898ae12181b7c619f0e10d84a915b568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

