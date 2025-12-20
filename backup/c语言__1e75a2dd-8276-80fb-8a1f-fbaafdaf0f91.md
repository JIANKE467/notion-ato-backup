
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBFVTQDR%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkP2NmBW2QiR0scJvIYIxDC5CwUV55moshblVU%2FqfZpwIhANRk8l9jbeY1rAESm7bDgB%2FxNLuNq7bkSMm4zZ4ixpN5KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUzRNV1DE%2BiI%2ByGQ0q3APtpUa1S39WjbZIA5RDsE%2FHPUfO34xcPi%2BnK%2FUhDfxrjMOfDJQtY9RudX8Jgnuwk5VDe7cuBGE86UDiy%2B0%2FKqIONfZZUVNNLWpTSmKq7lVy7pZZ4pYw%2FUIp47UPSvgvHJm%2F2%2FKqhrNi5ScJu7k%2F31xJ4HvRBzYFhfmnUYDN8wWMec92x4fQ4NI3vF96XEJbf8X3OONWfZHLB0WLcfaEkMswZzG1SKU5ji9ytocSRWf9UCKRv%2BxFg37vVC%2Ffm1cjFZbqqBrmd9T3crnVdZlxBaFuP7C%2B%2FdqIFk1Qxvz5vxaqA0x%2Bf0DYA0NTHWDAncHIumGJOjsvyoGgtKbf9eRab4%2Ft5s2Zp43ip04CUlcgqc6VhMehiMgi9OQI7qXfUkUOXlo9AEpLKcOZ50EYg2Twfc9J90HERE49E%2BJ%2F4JLR7PNNeM8o7NjVOU7Yu8%2BDyR2ogP7ZeOA10bkauWuWVm88lG8NeIq0fluRfbzx7XFcsSDMhoB5kMndPnD3k7TZfCh3kYScA6cD4l9UvFgh1%2BVmbIBragvt0eNQOKw04WQbq8fgwh2beCifkVg4XJpdfpEaE2eF7%2FrO5E5ifTSJ7XLl1tHmMtcWDTPOXV45yuq3%2BsUQZjnT65kDixvBaBQ%2BkTCjq5jKBjqkAfEDSlswa6a6sZ%2FA0SRVVqS8Z2rY8t80nSg2oqdQmSucs%2B2s%2BRtvAvGl%2BkzsHjLRlTcYZRzB7jhWq6pDXPZ0UbDYGxYQOwa%2Bn5Mk7Fa4lNGdOUR8gkidl9zp9bl3q1DSSs8xUQvn4ij7pgaV5GYlQMHtHXXpmP2RET8HU8N3AXBBMPiQDp2v6m28X36Dh4nH0lwnaaT1ILnVg1U0hhiF22Ukmw4m&X-Amz-Signature=eebf104a2189daf9a7ea84babf959842930e7e1a70fff2fc987f0ddf6dbbf17b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7YESSVM%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKkt4Y%2BtcOYYZbl24lfECOE8ohGGU3g3q%2Bm%2FZ5%2F%2FkU1AiEAy0gfeAKRZT5687QXP9GZ7P6jV9llKy%2FGDpVhqItWoAIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGppluip%2BjX62hbqcyrcAxwBjPwH%2FJIBbDvjZ063ZbwfQa6l5RSM%2BYOp2tLFdfb5u3fJaboQkcdyW5oOjBGfqizfweiUOjoaGeJH4ci0rhyPRc2LCESfS8pW6DvE%2BelNyLTBY%2F1fw5AZXhrrofCvT839eKST%2FA%2Bk1HTw5MYp0qKs0vmY0oYMTPJ6SROg4v1bTOzSSKfcQAFjcYx6Dkf0dI5Wo66ItBpXOmmPMsqT9Y7pyaRKyUL9vTOcii3Xxy9flAk%2B3oEpN9tTTg3MO54pjVdnnSY4mbICNG0Txir6%2FKCBCaH1EVM3ofrfXhNryXv4NNhMifELbC0QX6pxoowLwnf%2FglorEzheiiBLbZIlsRjIC%2BsMMOktK8I04HJcXIgv7j9ASk9QLUsb5Fx703EawJgYTVvl%2FRvDk4s1BrscXy7LJ0efIa8gbBzAYPL5ZIi2WuQ7mNmj5sbRWdA5PcqQ9OOuoqQ2U8b0w%2BZasYaOAgWRifq2o%2BDmcZKiWtnFygWmWf1qqe3pz%2Ftlnn%2BEANTP8IQz1wHaZPKXxUnwg7wCuEYsunX9ZWo7UPeKS%2BLWE7SL9mJ%2BdooBNcTKQIpShU5wmwfJ1sxqEWPnzPHadEpCemIPBva1S8778yR5zCIDI2%2BfnikSCWZKZcquZmzQMKOrmMoGOqUBkgvLNzXCGnGmoY1x8lzgn7jWy7oErZ21eibyDPOBfDEelGG8JL%2BxnWVDW8GF27k%2FAhCSJGwzoROS989uVG4vU5mshEdwNXZ%2BtTbxsy6cQmVIlgBhECDABPsXSPwwsCWRFuzi8%2F3RN%2BGZh1XNab5%2BSmSTL%2FGwP8%2B8lUqG%2BubPy9PKAejiunCYddv0Nj4pmzVawJlJXeFHg0A57x7KLCGA9D2s9Oic&X-Amz-Signature=f03adb811dc6e3852541ce548916513222bc84143a0cabd640a0be38790f684e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7YESSVM%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKkt4Y%2BtcOYYZbl24lfECOE8ohGGU3g3q%2Bm%2FZ5%2F%2FkU1AiEAy0gfeAKRZT5687QXP9GZ7P6jV9llKy%2FGDpVhqItWoAIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGppluip%2BjX62hbqcyrcAxwBjPwH%2FJIBbDvjZ063ZbwfQa6l5RSM%2BYOp2tLFdfb5u3fJaboQkcdyW5oOjBGfqizfweiUOjoaGeJH4ci0rhyPRc2LCESfS8pW6DvE%2BelNyLTBY%2F1fw5AZXhrrofCvT839eKST%2FA%2Bk1HTw5MYp0qKs0vmY0oYMTPJ6SROg4v1bTOzSSKfcQAFjcYx6Dkf0dI5Wo66ItBpXOmmPMsqT9Y7pyaRKyUL9vTOcii3Xxy9flAk%2B3oEpN9tTTg3MO54pjVdnnSY4mbICNG0Txir6%2FKCBCaH1EVM3ofrfXhNryXv4NNhMifELbC0QX6pxoowLwnf%2FglorEzheiiBLbZIlsRjIC%2BsMMOktK8I04HJcXIgv7j9ASk9QLUsb5Fx703EawJgYTVvl%2FRvDk4s1BrscXy7LJ0efIa8gbBzAYPL5ZIi2WuQ7mNmj5sbRWdA5PcqQ9OOuoqQ2U8b0w%2BZasYaOAgWRifq2o%2BDmcZKiWtnFygWmWf1qqe3pz%2Ftlnn%2BEANTP8IQz1wHaZPKXxUnwg7wCuEYsunX9ZWo7UPeKS%2BLWE7SL9mJ%2BdooBNcTKQIpShU5wmwfJ1sxqEWPnzPHadEpCemIPBva1S8778yR5zCIDI2%2BfnikSCWZKZcquZmzQMKOrmMoGOqUBkgvLNzXCGnGmoY1x8lzgn7jWy7oErZ21eibyDPOBfDEelGG8JL%2BxnWVDW8GF27k%2FAhCSJGwzoROS989uVG4vU5mshEdwNXZ%2BtTbxsy6cQmVIlgBhECDABPsXSPwwsCWRFuzi8%2F3RN%2BGZh1XNab5%2BSmSTL%2FGwP8%2B8lUqG%2BubPy9PKAejiunCYddv0Nj4pmzVawJlJXeFHg0A57x7KLCGA9D2s9Oic&X-Amz-Signature=06fa77be8dcf22839d001d7b27c41de1ea82b06b38552f8218bf25ab876c9d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXDB6TBT%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5lxNTFT5FB0lTqA%2B36klUt5iUNOVox5pr8MwAZsJlbgIhAKTKBw2O1wkIRUUedo8p4O7ktEsnB5Bw8nBdeYcj4bfVKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYm65fj3uJoOTZxZ0q3ANQPT%2FDgzYl%2F%2FvXJy%2BNPubfrZ9f8%2BGhk4TEFdfibYOD5dcJRN7SzJf6794s6pRGHq7cBr0Aj5%2FS7Tl8iu5WkwkOOnGLgnSB4Hzvb%2FJ%2FQx7tNUjvTKxG%2F3EWQHAjZ9JrREru2NPlYypkvKgaQJWdkhfzyS3yBAH948oWx0irHzLY2Oahdy57wNZY9n%2FU82ag8OKzBILeZ5YHmigvzk96RB%2BiJMECGCkdtX8%2FYNGP4%2Bx6pMoGhjMr2P0ngBhdUrEBPJ0BOZGJAasv%2BbaMA4dQhH7X4axnlG1HVVdhHsLPiW%2FNuURFvEsbHrcddQk0f5rtH2EAwAqOvKd2PRszZSUw%2B7DX1hXc8v%2FHzeDXBNoRAndRgtuQolj%2BsN8aDavcXymVAbx%2FdavyBvTOc1XpKsXlLmYGWe6ADjkPQ%2BVlhmDW4TG559GOghbELFiIw04RN9naXsu2CEsRUAGuOKqUID1TrZ%2BJFjZ49KaUnpRtIkQlLHizbsDXW9wwbAWvwekf%2B4WSlSDd2GqFeBprzIBZlOFpNraJzaDFnlQG2TcKNU6anSFs%2BCiLkKAsZkfLWLL%2BWOHW3CMBrmS5A24Qd7kwKJFMu%2Bs18SYUSKhSRi2mkUMBvmWr0zf66SIX4rVcMlth0TDjqpjKBjqkAVn2zMl1b97Me02DDXwA1nA3txNzWbMIxyniCZlVx3D6SggsTMs%2FWcYe1x%2F7Pl%2FGlVcdsb%2FOZjQWj1VmCFlbsZ0iS34sftauRnw0MEzGh%2Fgf5Lg7xd1FotkpnmKON9Xhu7sNVdbLqoRpRpc7GwI9j24t%2ByPT3dDFBrtuMhMI8oNQrXWMCy5UKknDYKSreQZyQFc0PPApbQYA%2Faic7MSM1VQzqHAW&X-Amz-Signature=c84897021b5d25dd15d3fed6f3f69bbcdd6bad2dcceef53ea7dbcb083b2731b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXDB6TBT%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5lxNTFT5FB0lTqA%2B36klUt5iUNOVox5pr8MwAZsJlbgIhAKTKBw2O1wkIRUUedo8p4O7ktEsnB5Bw8nBdeYcj4bfVKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYm65fj3uJoOTZxZ0q3ANQPT%2FDgzYl%2F%2FvXJy%2BNPubfrZ9f8%2BGhk4TEFdfibYOD5dcJRN7SzJf6794s6pRGHq7cBr0Aj5%2FS7Tl8iu5WkwkOOnGLgnSB4Hzvb%2FJ%2FQx7tNUjvTKxG%2F3EWQHAjZ9JrREru2NPlYypkvKgaQJWdkhfzyS3yBAH948oWx0irHzLY2Oahdy57wNZY9n%2FU82ag8OKzBILeZ5YHmigvzk96RB%2BiJMECGCkdtX8%2FYNGP4%2Bx6pMoGhjMr2P0ngBhdUrEBPJ0BOZGJAasv%2BbaMA4dQhH7X4axnlG1HVVdhHsLPiW%2FNuURFvEsbHrcddQk0f5rtH2EAwAqOvKd2PRszZSUw%2B7DX1hXc8v%2FHzeDXBNoRAndRgtuQolj%2BsN8aDavcXymVAbx%2FdavyBvTOc1XpKsXlLmYGWe6ADjkPQ%2BVlhmDW4TG559GOghbELFiIw04RN9naXsu2CEsRUAGuOKqUID1TrZ%2BJFjZ49KaUnpRtIkQlLHizbsDXW9wwbAWvwekf%2B4WSlSDd2GqFeBprzIBZlOFpNraJzaDFnlQG2TcKNU6anSFs%2BCiLkKAsZkfLWLL%2BWOHW3CMBrmS5A24Qd7kwKJFMu%2Bs18SYUSKhSRi2mkUMBvmWr0zf66SIX4rVcMlth0TDjqpjKBjqkAVn2zMl1b97Me02DDXwA1nA3txNzWbMIxyniCZlVx3D6SggsTMs%2FWcYe1x%2F7Pl%2FGlVcdsb%2FOZjQWj1VmCFlbsZ0iS34sftauRnw0MEzGh%2Fgf5Lg7xd1FotkpnmKON9Xhu7sNVdbLqoRpRpc7GwI9j24t%2ByPT3dDFBrtuMhMI8oNQrXWMCy5UKknDYKSreQZyQFc0PPApbQYA%2Faic7MSM1VQzqHAW&X-Amz-Signature=d05c17559569f6608487345b47a5bc9a5b1f3c23feafacf9b6591be396c1e829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXDB6TBT%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5lxNTFT5FB0lTqA%2B36klUt5iUNOVox5pr8MwAZsJlbgIhAKTKBw2O1wkIRUUedo8p4O7ktEsnB5Bw8nBdeYcj4bfVKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYm65fj3uJoOTZxZ0q3ANQPT%2FDgzYl%2F%2FvXJy%2BNPubfrZ9f8%2BGhk4TEFdfibYOD5dcJRN7SzJf6794s6pRGHq7cBr0Aj5%2FS7Tl8iu5WkwkOOnGLgnSB4Hzvb%2FJ%2FQx7tNUjvTKxG%2F3EWQHAjZ9JrREru2NPlYypkvKgaQJWdkhfzyS3yBAH948oWx0irHzLY2Oahdy57wNZY9n%2FU82ag8OKzBILeZ5YHmigvzk96RB%2BiJMECGCkdtX8%2FYNGP4%2Bx6pMoGhjMr2P0ngBhdUrEBPJ0BOZGJAasv%2BbaMA4dQhH7X4axnlG1HVVdhHsLPiW%2FNuURFvEsbHrcddQk0f5rtH2EAwAqOvKd2PRszZSUw%2B7DX1hXc8v%2FHzeDXBNoRAndRgtuQolj%2BsN8aDavcXymVAbx%2FdavyBvTOc1XpKsXlLmYGWe6ADjkPQ%2BVlhmDW4TG559GOghbELFiIw04RN9naXsu2CEsRUAGuOKqUID1TrZ%2BJFjZ49KaUnpRtIkQlLHizbsDXW9wwbAWvwekf%2B4WSlSDd2GqFeBprzIBZlOFpNraJzaDFnlQG2TcKNU6anSFs%2BCiLkKAsZkfLWLL%2BWOHW3CMBrmS5A24Qd7kwKJFMu%2Bs18SYUSKhSRi2mkUMBvmWr0zf66SIX4rVcMlth0TDjqpjKBjqkAVn2zMl1b97Me02DDXwA1nA3txNzWbMIxyniCZlVx3D6SggsTMs%2FWcYe1x%2F7Pl%2FGlVcdsb%2FOZjQWj1VmCFlbsZ0iS34sftauRnw0MEzGh%2Fgf5Lg7xd1FotkpnmKON9Xhu7sNVdbLqoRpRpc7GwI9j24t%2ByPT3dDFBrtuMhMI8oNQrXWMCy5UKknDYKSreQZyQFc0PPApbQYA%2Faic7MSM1VQzqHAW&X-Amz-Signature=389567f80e984ff019e2189a963af6764cce69b85b9f8ee73e9635a59c8b21f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXDB6TBT%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5lxNTFT5FB0lTqA%2B36klUt5iUNOVox5pr8MwAZsJlbgIhAKTKBw2O1wkIRUUedo8p4O7ktEsnB5Bw8nBdeYcj4bfVKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYm65fj3uJoOTZxZ0q3ANQPT%2FDgzYl%2F%2FvXJy%2BNPubfrZ9f8%2BGhk4TEFdfibYOD5dcJRN7SzJf6794s6pRGHq7cBr0Aj5%2FS7Tl8iu5WkwkOOnGLgnSB4Hzvb%2FJ%2FQx7tNUjvTKxG%2F3EWQHAjZ9JrREru2NPlYypkvKgaQJWdkhfzyS3yBAH948oWx0irHzLY2Oahdy57wNZY9n%2FU82ag8OKzBILeZ5YHmigvzk96RB%2BiJMECGCkdtX8%2FYNGP4%2Bx6pMoGhjMr2P0ngBhdUrEBPJ0BOZGJAasv%2BbaMA4dQhH7X4axnlG1HVVdhHsLPiW%2FNuURFvEsbHrcddQk0f5rtH2EAwAqOvKd2PRszZSUw%2B7DX1hXc8v%2FHzeDXBNoRAndRgtuQolj%2BsN8aDavcXymVAbx%2FdavyBvTOc1XpKsXlLmYGWe6ADjkPQ%2BVlhmDW4TG559GOghbELFiIw04RN9naXsu2CEsRUAGuOKqUID1TrZ%2BJFjZ49KaUnpRtIkQlLHizbsDXW9wwbAWvwekf%2B4WSlSDd2GqFeBprzIBZlOFpNraJzaDFnlQG2TcKNU6anSFs%2BCiLkKAsZkfLWLL%2BWOHW3CMBrmS5A24Qd7kwKJFMu%2Bs18SYUSKhSRi2mkUMBvmWr0zf66SIX4rVcMlth0TDjqpjKBjqkAVn2zMl1b97Me02DDXwA1nA3txNzWbMIxyniCZlVx3D6SggsTMs%2FWcYe1x%2F7Pl%2FGlVcdsb%2FOZjQWj1VmCFlbsZ0iS34sftauRnw0MEzGh%2Fgf5Lg7xd1FotkpnmKON9Xhu7sNVdbLqoRpRpc7GwI9j24t%2ByPT3dDFBrtuMhMI8oNQrXWMCy5UKknDYKSreQZyQFc0PPApbQYA%2Faic7MSM1VQzqHAW&X-Amz-Signature=7dda0c41e75414e70cdba547eb8064adf2fa8c9d5bf927d1ad0085d48d1ef638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXDB6TBT%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5lxNTFT5FB0lTqA%2B36klUt5iUNOVox5pr8MwAZsJlbgIhAKTKBw2O1wkIRUUedo8p4O7ktEsnB5Bw8nBdeYcj4bfVKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYm65fj3uJoOTZxZ0q3ANQPT%2FDgzYl%2F%2FvXJy%2BNPubfrZ9f8%2BGhk4TEFdfibYOD5dcJRN7SzJf6794s6pRGHq7cBr0Aj5%2FS7Tl8iu5WkwkOOnGLgnSB4Hzvb%2FJ%2FQx7tNUjvTKxG%2F3EWQHAjZ9JrREru2NPlYypkvKgaQJWdkhfzyS3yBAH948oWx0irHzLY2Oahdy57wNZY9n%2FU82ag8OKzBILeZ5YHmigvzk96RB%2BiJMECGCkdtX8%2FYNGP4%2Bx6pMoGhjMr2P0ngBhdUrEBPJ0BOZGJAasv%2BbaMA4dQhH7X4axnlG1HVVdhHsLPiW%2FNuURFvEsbHrcddQk0f5rtH2EAwAqOvKd2PRszZSUw%2B7DX1hXc8v%2FHzeDXBNoRAndRgtuQolj%2BsN8aDavcXymVAbx%2FdavyBvTOc1XpKsXlLmYGWe6ADjkPQ%2BVlhmDW4TG559GOghbELFiIw04RN9naXsu2CEsRUAGuOKqUID1TrZ%2BJFjZ49KaUnpRtIkQlLHizbsDXW9wwbAWvwekf%2B4WSlSDd2GqFeBprzIBZlOFpNraJzaDFnlQG2TcKNU6anSFs%2BCiLkKAsZkfLWLL%2BWOHW3CMBrmS5A24Qd7kwKJFMu%2Bs18SYUSKhSRi2mkUMBvmWr0zf66SIX4rVcMlth0TDjqpjKBjqkAVn2zMl1b97Me02DDXwA1nA3txNzWbMIxyniCZlVx3D6SggsTMs%2FWcYe1x%2F7Pl%2FGlVcdsb%2FOZjQWj1VmCFlbsZ0iS34sftauRnw0MEzGh%2Fgf5Lg7xd1FotkpnmKON9Xhu7sNVdbLqoRpRpc7GwI9j24t%2ByPT3dDFBrtuMhMI8oNQrXWMCy5UKknDYKSreQZyQFc0PPApbQYA%2Faic7MSM1VQzqHAW&X-Amz-Signature=2d901bee285c94c701a778156c85e7fcbd0098fc423b65ef2724bce90c04a497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXDB6TBT%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5lxNTFT5FB0lTqA%2B36klUt5iUNOVox5pr8MwAZsJlbgIhAKTKBw2O1wkIRUUedo8p4O7ktEsnB5Bw8nBdeYcj4bfVKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYm65fj3uJoOTZxZ0q3ANQPT%2FDgzYl%2F%2FvXJy%2BNPubfrZ9f8%2BGhk4TEFdfibYOD5dcJRN7SzJf6794s6pRGHq7cBr0Aj5%2FS7Tl8iu5WkwkOOnGLgnSB4Hzvb%2FJ%2FQx7tNUjvTKxG%2F3EWQHAjZ9JrREru2NPlYypkvKgaQJWdkhfzyS3yBAH948oWx0irHzLY2Oahdy57wNZY9n%2FU82ag8OKzBILeZ5YHmigvzk96RB%2BiJMECGCkdtX8%2FYNGP4%2Bx6pMoGhjMr2P0ngBhdUrEBPJ0BOZGJAasv%2BbaMA4dQhH7X4axnlG1HVVdhHsLPiW%2FNuURFvEsbHrcddQk0f5rtH2EAwAqOvKd2PRszZSUw%2B7DX1hXc8v%2FHzeDXBNoRAndRgtuQolj%2BsN8aDavcXymVAbx%2FdavyBvTOc1XpKsXlLmYGWe6ADjkPQ%2BVlhmDW4TG559GOghbELFiIw04RN9naXsu2CEsRUAGuOKqUID1TrZ%2BJFjZ49KaUnpRtIkQlLHizbsDXW9wwbAWvwekf%2B4WSlSDd2GqFeBprzIBZlOFpNraJzaDFnlQG2TcKNU6anSFs%2BCiLkKAsZkfLWLL%2BWOHW3CMBrmS5A24Qd7kwKJFMu%2Bs18SYUSKhSRi2mkUMBvmWr0zf66SIX4rVcMlth0TDjqpjKBjqkAVn2zMl1b97Me02DDXwA1nA3txNzWbMIxyniCZlVx3D6SggsTMs%2FWcYe1x%2F7Pl%2FGlVcdsb%2FOZjQWj1VmCFlbsZ0iS34sftauRnw0MEzGh%2Fgf5Lg7xd1FotkpnmKON9Xhu7sNVdbLqoRpRpc7GwI9j24t%2ByPT3dDFBrtuMhMI8oNQrXWMCy5UKknDYKSreQZyQFc0PPApbQYA%2Faic7MSM1VQzqHAW&X-Amz-Signature=b985401fc007a83e3b0cb736b421679eec6716835cf2577825dd01854f0a4691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXDB6TBT%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5lxNTFT5FB0lTqA%2B36klUt5iUNOVox5pr8MwAZsJlbgIhAKTKBw2O1wkIRUUedo8p4O7ktEsnB5Bw8nBdeYcj4bfVKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYm65fj3uJoOTZxZ0q3ANQPT%2FDgzYl%2F%2FvXJy%2BNPubfrZ9f8%2BGhk4TEFdfibYOD5dcJRN7SzJf6794s6pRGHq7cBr0Aj5%2FS7Tl8iu5WkwkOOnGLgnSB4Hzvb%2FJ%2FQx7tNUjvTKxG%2F3EWQHAjZ9JrREru2NPlYypkvKgaQJWdkhfzyS3yBAH948oWx0irHzLY2Oahdy57wNZY9n%2FU82ag8OKzBILeZ5YHmigvzk96RB%2BiJMECGCkdtX8%2FYNGP4%2Bx6pMoGhjMr2P0ngBhdUrEBPJ0BOZGJAasv%2BbaMA4dQhH7X4axnlG1HVVdhHsLPiW%2FNuURFvEsbHrcddQk0f5rtH2EAwAqOvKd2PRszZSUw%2B7DX1hXc8v%2FHzeDXBNoRAndRgtuQolj%2BsN8aDavcXymVAbx%2FdavyBvTOc1XpKsXlLmYGWe6ADjkPQ%2BVlhmDW4TG559GOghbELFiIw04RN9naXsu2CEsRUAGuOKqUID1TrZ%2BJFjZ49KaUnpRtIkQlLHizbsDXW9wwbAWvwekf%2B4WSlSDd2GqFeBprzIBZlOFpNraJzaDFnlQG2TcKNU6anSFs%2BCiLkKAsZkfLWLL%2BWOHW3CMBrmS5A24Qd7kwKJFMu%2Bs18SYUSKhSRi2mkUMBvmWr0zf66SIX4rVcMlth0TDjqpjKBjqkAVn2zMl1b97Me02DDXwA1nA3txNzWbMIxyniCZlVx3D6SggsTMs%2FWcYe1x%2F7Pl%2FGlVcdsb%2FOZjQWj1VmCFlbsZ0iS34sftauRnw0MEzGh%2Fgf5Lg7xd1FotkpnmKON9Xhu7sNVdbLqoRpRpc7GwI9j24t%2ByPT3dDFBrtuMhMI8oNQrXWMCy5UKknDYKSreQZyQFc0PPApbQYA%2Faic7MSM1VQzqHAW&X-Amz-Signature=f4bf8b795e778d4a0c61c64d9115b52c1ef03377598567c149e883e8f164239f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2MSLEA%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrkMMnymdQCt40wgKG7STVa8dKF7DUh%2FlkUBGog80eJAIgLo6NAm%2F3kIuLhjbNIiC4Q4Hl0cLu7RQY7G8foL0EpBcqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXkRTsycAVWWJh51CrcA1vKCkxiP4J8h0qkItLe8rczOZ6lUysJRwc2k08MPnByu%2Ftr5LU8CYHa7Vg1JEykK5Pd5nT7SDV7pb2wFIyAiun6KMVVkEgEnK7B50LQOD0Z%2BZR%2FASNUrZkffo6j%2BtUWcyBnHTc3%2BAaVPNL0%2FynMbFcfgm8hPt2hoDuogr5CW5RrTGM6TXXOxjDROKNKcmyKf%2FA8kUExotJnTqYaylTJq8zB6ARmvex6mvvW6mgaLvEVmWNtJulggsMuj7SLc9WV7%2F%2FuNWhmrH45jL%2BIXkOFPi%2FXC12aZWhVBGaP3PlwG0C%2FjtZ4fT9aUAXSuzeh%2BlRVkYLPM5tyk8XmkA15MH6W9i4rfN7H3U7glKTT8OZwnGeLSOZqGhBlngWohCEieqS0d07Zde3CIW4xr%2BIRcLibltyJOqGA2N9BtjyAbxMQZKA9EKZhzHVWA8v%2FMpa7hSrQD7%2Bn8elKVaSuVMiVRz%2BxqIIFTYsPSEO61VXHnH2HJT%2FkSKA37kB%2FepKBLpxV5SbEQYaz55E0lk%2BBeYckL1L0QZdQ5SE3%2BYYGzVvSRhrRm9FpeU%2FYUr9yq24fDX9Xl6%2FZmkJppMlFdal4C%2F5wPFsLZdx0ujxCwLG32NFMF1Hrz4NWTg1af%2FI1ceQs3UurMNCqmMoGOqUBYPU7jlQn1X03vyVdlwC2dzdXyTq7e3RrG9dieKj2SX7EfxAoeS%2BTLhR2FV5Sm8%2FlvJCtkiGVdmy%2BZmBheXVLlooCgMOnhn2W7POFeZU7v4%2FBDR2gR2%2FQg01LnUaJVyd8UXNICcqkmmrQrPyxpBFf51WC0FjwpLXpLzfrP%2BErGg5gF12zuI3JOw8eyThUxiRRyLM4ImjUlkOXV3fNu9DOy6tBT61L&X-Amz-Signature=f9e7a4cbf81473b37b1cf562827aafb3e7a9c8e01a275141a8f100a6f68811ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2MSLEA%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrkMMnymdQCt40wgKG7STVa8dKF7DUh%2FlkUBGog80eJAIgLo6NAm%2F3kIuLhjbNIiC4Q4Hl0cLu7RQY7G8foL0EpBcqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXkRTsycAVWWJh51CrcA1vKCkxiP4J8h0qkItLe8rczOZ6lUysJRwc2k08MPnByu%2Ftr5LU8CYHa7Vg1JEykK5Pd5nT7SDV7pb2wFIyAiun6KMVVkEgEnK7B50LQOD0Z%2BZR%2FASNUrZkffo6j%2BtUWcyBnHTc3%2BAaVPNL0%2FynMbFcfgm8hPt2hoDuogr5CW5RrTGM6TXXOxjDROKNKcmyKf%2FA8kUExotJnTqYaylTJq8zB6ARmvex6mvvW6mgaLvEVmWNtJulggsMuj7SLc9WV7%2F%2FuNWhmrH45jL%2BIXkOFPi%2FXC12aZWhVBGaP3PlwG0C%2FjtZ4fT9aUAXSuzeh%2BlRVkYLPM5tyk8XmkA15MH6W9i4rfN7H3U7glKTT8OZwnGeLSOZqGhBlngWohCEieqS0d07Zde3CIW4xr%2BIRcLibltyJOqGA2N9BtjyAbxMQZKA9EKZhzHVWA8v%2FMpa7hSrQD7%2Bn8elKVaSuVMiVRz%2BxqIIFTYsPSEO61VXHnH2HJT%2FkSKA37kB%2FepKBLpxV5SbEQYaz55E0lk%2BBeYckL1L0QZdQ5SE3%2BYYGzVvSRhrRm9FpeU%2FYUr9yq24fDX9Xl6%2FZmkJppMlFdal4C%2F5wPFsLZdx0ujxCwLG32NFMF1Hrz4NWTg1af%2FI1ceQs3UurMNCqmMoGOqUBYPU7jlQn1X03vyVdlwC2dzdXyTq7e3RrG9dieKj2SX7EfxAoeS%2BTLhR2FV5Sm8%2FlvJCtkiGVdmy%2BZmBheXVLlooCgMOnhn2W7POFeZU7v4%2FBDR2gR2%2FQg01LnUaJVyd8UXNICcqkmmrQrPyxpBFf51WC0FjwpLXpLzfrP%2BErGg5gF12zuI3JOw8eyThUxiRRyLM4ImjUlkOXV3fNu9DOy6tBT61L&X-Amz-Signature=efd47429ae7fa8dd82da776dd0f212fdad99f2e86c2134aef0d6450f8f4b9cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2MSLEA%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrkMMnymdQCt40wgKG7STVa8dKF7DUh%2FlkUBGog80eJAIgLo6NAm%2F3kIuLhjbNIiC4Q4Hl0cLu7RQY7G8foL0EpBcqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXkRTsycAVWWJh51CrcA1vKCkxiP4J8h0qkItLe8rczOZ6lUysJRwc2k08MPnByu%2Ftr5LU8CYHa7Vg1JEykK5Pd5nT7SDV7pb2wFIyAiun6KMVVkEgEnK7B50LQOD0Z%2BZR%2FASNUrZkffo6j%2BtUWcyBnHTc3%2BAaVPNL0%2FynMbFcfgm8hPt2hoDuogr5CW5RrTGM6TXXOxjDROKNKcmyKf%2FA8kUExotJnTqYaylTJq8zB6ARmvex6mvvW6mgaLvEVmWNtJulggsMuj7SLc9WV7%2F%2FuNWhmrH45jL%2BIXkOFPi%2FXC12aZWhVBGaP3PlwG0C%2FjtZ4fT9aUAXSuzeh%2BlRVkYLPM5tyk8XmkA15MH6W9i4rfN7H3U7glKTT8OZwnGeLSOZqGhBlngWohCEieqS0d07Zde3CIW4xr%2BIRcLibltyJOqGA2N9BtjyAbxMQZKA9EKZhzHVWA8v%2FMpa7hSrQD7%2Bn8elKVaSuVMiVRz%2BxqIIFTYsPSEO61VXHnH2HJT%2FkSKA37kB%2FepKBLpxV5SbEQYaz55E0lk%2BBeYckL1L0QZdQ5SE3%2BYYGzVvSRhrRm9FpeU%2FYUr9yq24fDX9Xl6%2FZmkJppMlFdal4C%2F5wPFsLZdx0ujxCwLG32NFMF1Hrz4NWTg1af%2FI1ceQs3UurMNCqmMoGOqUBYPU7jlQn1X03vyVdlwC2dzdXyTq7e3RrG9dieKj2SX7EfxAoeS%2BTLhR2FV5Sm8%2FlvJCtkiGVdmy%2BZmBheXVLlooCgMOnhn2W7POFeZU7v4%2FBDR2gR2%2FQg01LnUaJVyd8UXNICcqkmmrQrPyxpBFf51WC0FjwpLXpLzfrP%2BErGg5gF12zuI3JOw8eyThUxiRRyLM4ImjUlkOXV3fNu9DOy6tBT61L&X-Amz-Signature=dca8726a44cfb814f90bc30fae3481b30af3c295a43d448cd03984e754090ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2MSLEA%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrkMMnymdQCt40wgKG7STVa8dKF7DUh%2FlkUBGog80eJAIgLo6NAm%2F3kIuLhjbNIiC4Q4Hl0cLu7RQY7G8foL0EpBcqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXkRTsycAVWWJh51CrcA1vKCkxiP4J8h0qkItLe8rczOZ6lUysJRwc2k08MPnByu%2Ftr5LU8CYHa7Vg1JEykK5Pd5nT7SDV7pb2wFIyAiun6KMVVkEgEnK7B50LQOD0Z%2BZR%2FASNUrZkffo6j%2BtUWcyBnHTc3%2BAaVPNL0%2FynMbFcfgm8hPt2hoDuogr5CW5RrTGM6TXXOxjDROKNKcmyKf%2FA8kUExotJnTqYaylTJq8zB6ARmvex6mvvW6mgaLvEVmWNtJulggsMuj7SLc9WV7%2F%2FuNWhmrH45jL%2BIXkOFPi%2FXC12aZWhVBGaP3PlwG0C%2FjtZ4fT9aUAXSuzeh%2BlRVkYLPM5tyk8XmkA15MH6W9i4rfN7H3U7glKTT8OZwnGeLSOZqGhBlngWohCEieqS0d07Zde3CIW4xr%2BIRcLibltyJOqGA2N9BtjyAbxMQZKA9EKZhzHVWA8v%2FMpa7hSrQD7%2Bn8elKVaSuVMiVRz%2BxqIIFTYsPSEO61VXHnH2HJT%2FkSKA37kB%2FepKBLpxV5SbEQYaz55E0lk%2BBeYckL1L0QZdQ5SE3%2BYYGzVvSRhrRm9FpeU%2FYUr9yq24fDX9Xl6%2FZmkJppMlFdal4C%2F5wPFsLZdx0ujxCwLG32NFMF1Hrz4NWTg1af%2FI1ceQs3UurMNCqmMoGOqUBYPU7jlQn1X03vyVdlwC2dzdXyTq7e3RrG9dieKj2SX7EfxAoeS%2BTLhR2FV5Sm8%2FlvJCtkiGVdmy%2BZmBheXVLlooCgMOnhn2W7POFeZU7v4%2FBDR2gR2%2FQg01LnUaJVyd8UXNICcqkmmrQrPyxpBFf51WC0FjwpLXpLzfrP%2BErGg5gF12zuI3JOw8eyThUxiRRyLM4ImjUlkOXV3fNu9DOy6tBT61L&X-Amz-Signature=d43ad91e75a2e4e8e0ddfd37bc7388cbe8518c43c2228d28869dbb2aa7eb41fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2MSLEA%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrkMMnymdQCt40wgKG7STVa8dKF7DUh%2FlkUBGog80eJAIgLo6NAm%2F3kIuLhjbNIiC4Q4Hl0cLu7RQY7G8foL0EpBcqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXkRTsycAVWWJh51CrcA1vKCkxiP4J8h0qkItLe8rczOZ6lUysJRwc2k08MPnByu%2Ftr5LU8CYHa7Vg1JEykK5Pd5nT7SDV7pb2wFIyAiun6KMVVkEgEnK7B50LQOD0Z%2BZR%2FASNUrZkffo6j%2BtUWcyBnHTc3%2BAaVPNL0%2FynMbFcfgm8hPt2hoDuogr5CW5RrTGM6TXXOxjDROKNKcmyKf%2FA8kUExotJnTqYaylTJq8zB6ARmvex6mvvW6mgaLvEVmWNtJulggsMuj7SLc9WV7%2F%2FuNWhmrH45jL%2BIXkOFPi%2FXC12aZWhVBGaP3PlwG0C%2FjtZ4fT9aUAXSuzeh%2BlRVkYLPM5tyk8XmkA15MH6W9i4rfN7H3U7glKTT8OZwnGeLSOZqGhBlngWohCEieqS0d07Zde3CIW4xr%2BIRcLibltyJOqGA2N9BtjyAbxMQZKA9EKZhzHVWA8v%2FMpa7hSrQD7%2Bn8elKVaSuVMiVRz%2BxqIIFTYsPSEO61VXHnH2HJT%2FkSKA37kB%2FepKBLpxV5SbEQYaz55E0lk%2BBeYckL1L0QZdQ5SE3%2BYYGzVvSRhrRm9FpeU%2FYUr9yq24fDX9Xl6%2FZmkJppMlFdal4C%2F5wPFsLZdx0ujxCwLG32NFMF1Hrz4NWTg1af%2FI1ceQs3UurMNCqmMoGOqUBYPU7jlQn1X03vyVdlwC2dzdXyTq7e3RrG9dieKj2SX7EfxAoeS%2BTLhR2FV5Sm8%2FlvJCtkiGVdmy%2BZmBheXVLlooCgMOnhn2W7POFeZU7v4%2FBDR2gR2%2FQg01LnUaJVyd8UXNICcqkmmrQrPyxpBFf51WC0FjwpLXpLzfrP%2BErGg5gF12zuI3JOw8eyThUxiRRyLM4ImjUlkOXV3fNu9DOy6tBT61L&X-Amz-Signature=e705b097334ff8da5d6050b738823714ba671ebc670ccd4acab5838673468eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTIAVLMG%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOoVyOMeSDpp0bz9gZ4kfdVOdBXohLafKxu1zM2iYycAiEA%2FXVnBucL4zssNnSv1QWhgWiawJLLVWY43zx8AYtyVjkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIw%2FmuoInLBfYbPv9SrcA3tNWweKodc6Y%2BuNnEqLbC4OTVQjO352juDr19otLYZg6YqQfxiESoscMFN6FXTRpsUO3Y2g9dSklPq8R%2FxIzc3CpjjHk9QdCM8VBLExIADqe9pR8XFPnUBaNDfqo8jyDTCuXwBdugKqGM9wpSdkeWhn32pvpCHq8EvPPlhBmOBnlFd9%2BR1nhb7nrqslZ%2B6NXpaWxOnksjzHMeteOppJA7BY01Ip03EMB6x6BSFwrm3dqty75OKtmwx93%2F5DsqG9hOgh8VNstitUzIUwr1g4ktO%2FXOtE8NIHUx2MlBrRn7U%2Bgor4JMlwB8KOI1zmfD%2Bbg7n2TV2Ih%2BqUJMEQwzvhckiWVzl73qjvvFaiaKsDcJXJDG4bCi0MZmZESEX63VTwrUhw9Xvzonaf%2FjTTOFCKcsPkLVOegUShivs%2BH%2Fv2MbizrbHldpXQyz%2Bxk6w5P0r96A27S8Wj1RAf2r41nCbcceeyEGpCvTI%2FyJ4PWo7UY4VoNsFtOBU39gZHEMQHPaBu3DAfwfUAeuGaBOBmpUUuF9FAEtMnZbv2gyyEyQmpoc9SpgWjkQQtllE9pAs8l06uM6HQRHK9OpMCh8Rbxr4dnL4AzEcxawPUFGkzorkh3uiAp7YXwQcBKWw%2BIef1MN6qmMoGOqUB8YYxkDO9bZBbLLfAV2tIOVEMKUsziHmAuLydkh6xVoYM8o9gbdn1uRS%2BlXOT4e0Cgn0yYeoat2pxMEo41uWHTOJIJKnp7tsOiSlTHm%2FutTzfnDcSLM6x5FQOQ9%2FRdgrTpsGJ5BAGViWyxefNueLVGp%2B9leRnO%2BCZnOU3T4LKyEiUQILU9Eru%2BBqazq5RbNbkd62d5N21Yv9faZiLK27AV6TI8Qlf&X-Amz-Signature=11aa72a0d4ff34e5d82a359afd925f19ea2a6bd929fc0ac5270bf6b4b0e5d081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTIAVLMG%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOoVyOMeSDpp0bz9gZ4kfdVOdBXohLafKxu1zM2iYycAiEA%2FXVnBucL4zssNnSv1QWhgWiawJLLVWY43zx8AYtyVjkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIw%2FmuoInLBfYbPv9SrcA3tNWweKodc6Y%2BuNnEqLbC4OTVQjO352juDr19otLYZg6YqQfxiESoscMFN6FXTRpsUO3Y2g9dSklPq8R%2FxIzc3CpjjHk9QdCM8VBLExIADqe9pR8XFPnUBaNDfqo8jyDTCuXwBdugKqGM9wpSdkeWhn32pvpCHq8EvPPlhBmOBnlFd9%2BR1nhb7nrqslZ%2B6NXpaWxOnksjzHMeteOppJA7BY01Ip03EMB6x6BSFwrm3dqty75OKtmwx93%2F5DsqG9hOgh8VNstitUzIUwr1g4ktO%2FXOtE8NIHUx2MlBrRn7U%2Bgor4JMlwB8KOI1zmfD%2Bbg7n2TV2Ih%2BqUJMEQwzvhckiWVzl73qjvvFaiaKsDcJXJDG4bCi0MZmZESEX63VTwrUhw9Xvzonaf%2FjTTOFCKcsPkLVOegUShivs%2BH%2Fv2MbizrbHldpXQyz%2Bxk6w5P0r96A27S8Wj1RAf2r41nCbcceeyEGpCvTI%2FyJ4PWo7UY4VoNsFtOBU39gZHEMQHPaBu3DAfwfUAeuGaBOBmpUUuF9FAEtMnZbv2gyyEyQmpoc9SpgWjkQQtllE9pAs8l06uM6HQRHK9OpMCh8Rbxr4dnL4AzEcxawPUFGkzorkh3uiAp7YXwQcBKWw%2BIef1MN6qmMoGOqUB8YYxkDO9bZBbLLfAV2tIOVEMKUsziHmAuLydkh6xVoYM8o9gbdn1uRS%2BlXOT4e0Cgn0yYeoat2pxMEo41uWHTOJIJKnp7tsOiSlTHm%2FutTzfnDcSLM6x5FQOQ9%2FRdgrTpsGJ5BAGViWyxefNueLVGp%2B9leRnO%2BCZnOU3T4LKyEiUQILU9Eru%2BBqazq5RbNbkd62d5N21Yv9faZiLK27AV6TI8Qlf&X-Amz-Signature=b6648505699de8a0e4fe72fe68cce9017d7e0577c14b559e438a9dbb7609f7b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTIAVLMG%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOoVyOMeSDpp0bz9gZ4kfdVOdBXohLafKxu1zM2iYycAiEA%2FXVnBucL4zssNnSv1QWhgWiawJLLVWY43zx8AYtyVjkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIw%2FmuoInLBfYbPv9SrcA3tNWweKodc6Y%2BuNnEqLbC4OTVQjO352juDr19otLYZg6YqQfxiESoscMFN6FXTRpsUO3Y2g9dSklPq8R%2FxIzc3CpjjHk9QdCM8VBLExIADqe9pR8XFPnUBaNDfqo8jyDTCuXwBdugKqGM9wpSdkeWhn32pvpCHq8EvPPlhBmOBnlFd9%2BR1nhb7nrqslZ%2B6NXpaWxOnksjzHMeteOppJA7BY01Ip03EMB6x6BSFwrm3dqty75OKtmwx93%2F5DsqG9hOgh8VNstitUzIUwr1g4ktO%2FXOtE8NIHUx2MlBrRn7U%2Bgor4JMlwB8KOI1zmfD%2Bbg7n2TV2Ih%2BqUJMEQwzvhckiWVzl73qjvvFaiaKsDcJXJDG4bCi0MZmZESEX63VTwrUhw9Xvzonaf%2FjTTOFCKcsPkLVOegUShivs%2BH%2Fv2MbizrbHldpXQyz%2Bxk6w5P0r96A27S8Wj1RAf2r41nCbcceeyEGpCvTI%2FyJ4PWo7UY4VoNsFtOBU39gZHEMQHPaBu3DAfwfUAeuGaBOBmpUUuF9FAEtMnZbv2gyyEyQmpoc9SpgWjkQQtllE9pAs8l06uM6HQRHK9OpMCh8Rbxr4dnL4AzEcxawPUFGkzorkh3uiAp7YXwQcBKWw%2BIef1MN6qmMoGOqUB8YYxkDO9bZBbLLfAV2tIOVEMKUsziHmAuLydkh6xVoYM8o9gbdn1uRS%2BlXOT4e0Cgn0yYeoat2pxMEo41uWHTOJIJKnp7tsOiSlTHm%2FutTzfnDcSLM6x5FQOQ9%2FRdgrTpsGJ5BAGViWyxefNueLVGp%2B9leRnO%2BCZnOU3T4LKyEiUQILU9Eru%2BBqazq5RbNbkd62d5N21Yv9faZiLK27AV6TI8Qlf&X-Amz-Signature=5f275a9791667f98647551dd9e9bb6a72c54e66f57b91f6d804f8f9380331fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKV7PAHL%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHg2EY6%2BSfUXlLXuTeQc%2BJlxi45HkhTOYlh1gpax6RIAiBZE0job%2BWNxtBq9viJBuOl73KiIgBCxxXwwoHW8w7ocCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzH7t86cKmAyvGoJwKtwDnDDGKqodniv8jBOUeXIXxXjPAz8RrEqStcdWITIWQMAzwEzZvkAJhv32AiLqt29s7cexyzoJHUoWiOL9iochK2e6gidGCCRf4GuS1SP%2B%2BcplXP9Dek43DBFF6OnTFIVJ1wmct8hitS7ZTKh%2FCHU%2BtUIfLO0KVWPTA9hieHTer1eEGbX74sFqKQQ3%2BeV4HshGgpjfzmaUcwMoPlyoe83kCgi45SYN3alh%2BEShtb%2FXxhXJo6tORdDN4U4QNK7A252mWTMwkVQNMBnyrZtJvUmMS2IhR3hh5K0oHm1tFo8DnzPUktv2EpsjWMv9ur5ajvEpEeROqvFJGuXa6oq1D8nzvbFx7M9XxcoSAFa0FFHoQvXGVKFvjpAnow7lWMV%2FSv6cllb5Wq8O98026XXL2%2FjR0f2Io%2BwyNljJxhgkd7elVyRqs3%2FLBIq8mPWOScH4J5%2BCUz6Ls16DahzTEQbVtVMHEAIFlJ0QQinOtKHoNMIxJwqkpms%2FBJTTva9t8mDVwjq2d%2Fi48MS0hdMjsyNW%2BBXyilop3S1DWTHJK4rz%2BZLBeRVVD2gbLfCkaB4BTB8ZHknq274E%2BwEjGg5iPz%2BRIAevb0yzpm6zpL9HmFahFnqEaXxrY4Lk1lbZN45t%2FUQwyauYygY6pgF5HNIhvGYpkDiEeIbtsWOB7c0makY5T%2Bbg9Fn4vdiPhz1GxYfvfW2a8%2BzLIqGi0Bvzk8Dur0TVoOm6ZBD6eCElXhgE27%2Fi6H2JW5sTuU4sB3ppF3iKytNUSw48z4j87X9xWdr9Z%2BughV%2BIUueg0Er2whkHgJfAJtmKLmqP9yElYx3QIgYz7Ev7Kt3nIm6GhXr8ouv1zdpECA8Ae%2F1d3H6IFZ2OJLex&X-Amz-Signature=f083c435d6723a4c961940fd3c11e5751a73e6362a953bac885e06847421cbe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKV7PAHL%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHg2EY6%2BSfUXlLXuTeQc%2BJlxi45HkhTOYlh1gpax6RIAiBZE0job%2BWNxtBq9viJBuOl73KiIgBCxxXwwoHW8w7ocCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzH7t86cKmAyvGoJwKtwDnDDGKqodniv8jBOUeXIXxXjPAz8RrEqStcdWITIWQMAzwEzZvkAJhv32AiLqt29s7cexyzoJHUoWiOL9iochK2e6gidGCCRf4GuS1SP%2B%2BcplXP9Dek43DBFF6OnTFIVJ1wmct8hitS7ZTKh%2FCHU%2BtUIfLO0KVWPTA9hieHTer1eEGbX74sFqKQQ3%2BeV4HshGgpjfzmaUcwMoPlyoe83kCgi45SYN3alh%2BEShtb%2FXxhXJo6tORdDN4U4QNK7A252mWTMwkVQNMBnyrZtJvUmMS2IhR3hh5K0oHm1tFo8DnzPUktv2EpsjWMv9ur5ajvEpEeROqvFJGuXa6oq1D8nzvbFx7M9XxcoSAFa0FFHoQvXGVKFvjpAnow7lWMV%2FSv6cllb5Wq8O98026XXL2%2FjR0f2Io%2BwyNljJxhgkd7elVyRqs3%2FLBIq8mPWOScH4J5%2BCUz6Ls16DahzTEQbVtVMHEAIFlJ0QQinOtKHoNMIxJwqkpms%2FBJTTva9t8mDVwjq2d%2Fi48MS0hdMjsyNW%2BBXyilop3S1DWTHJK4rz%2BZLBeRVVD2gbLfCkaB4BTB8ZHknq274E%2BwEjGg5iPz%2BRIAevb0yzpm6zpL9HmFahFnqEaXxrY4Lk1lbZN45t%2FUQwyauYygY6pgF5HNIhvGYpkDiEeIbtsWOB7c0makY5T%2Bbg9Fn4vdiPhz1GxYfvfW2a8%2BzLIqGi0Bvzk8Dur0TVoOm6ZBD6eCElXhgE27%2Fi6H2JW5sTuU4sB3ppF3iKytNUSw48z4j87X9xWdr9Z%2BughV%2BIUueg0Er2whkHgJfAJtmKLmqP9yElYx3QIgYz7Ev7Kt3nIm6GhXr8ouv1zdpECA8Ae%2F1d3H6IFZ2OJLex&X-Amz-Signature=920b34a3ce96e81f1d353a8c794f0cc31189dd108bf3097c90aa708a1b9bb923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W455OIB%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHNz20UDYLTRSqd1nxZgrTRyZWLMYk%2F6cWNmrdJbeq3QIgVY0%2FeJ%2Frch4IAL5vvF0y8uLGbaXyv4R71aycVpIeZfsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN157JIbU22RJI1wWyrcA%2FYpTVhchVNxbQbmFEPcHd3msMDU1yESDogQRYClQLwvkbu2v7I6zL6dRQkWFPkXmR%2B8%2FIS9bFjCEXSTO84z69r74nWtXVEpHAljKt0u7T7CxUBcqoQF4sJCWXTWHNQmb7yyS7fOqzy%2FqR%2FaEckbINe83bLVA9Cp90YiKijxLCFobjsBW2G5nXO6xeAAr98GSLR2Pw2VIo2b%2BdSBG7hYrrcdsq%2B8iPoboZmdqqrFfnziWVpfawT55m9BywB%2BKNBVlizrUIzBiJ%2B4C7LPnWZ8BwsefSA%2BGIV7iErUXZggvIKQqLjY6KMPHKM5YLfGcAqthxuT63yWwpbQCkO4LGWa7B8X5V%2FugTHtDLEWBG6CYSMLLlQsU5pccgHOo%2FjUmhPhTstzdftM%2FxlKmWL8aB%2BIzYY06GkFSn2%2FDv8ET2IurWEw4%2FMymCFP57Fsc7iYpelGIZY27pUTppgHv1LzzzJX9gWseTbVUlWXOHz5UlcWTTrjJ8nTHbnRvit4tfB4l75eDzAPlWUQdN%2FxC3aTalOJ3AasMv3srRfWehGClI%2BcVQX9DPN9CAVn8IXyrQFfbHgSWHgi57FxprPkfPoloayeejDRRU6Cp8XdA57u%2FHfnwmgIBl%2FUeL395JShAD8yMN6qmMoGOqUBWoyJCFn%2FpdvqojMPmxxBEA%2FdJrXncXYlks4U1KIvTcKX47nYZ3tXuEsHsE8X1XTeZRA9uTxQX7hleMhGHN2XEfPSZ%2FsK%2FUiR0%2FBAi5cr8gQ4eUkWL0XZo1TsfsFiIZSugyzup1lubKJp3DtVzSXg%2F74ONjVuaOyNWsiCnTD14v9Z47eCFiEQ160qVcKyuJ5%2FQOeeKzkf3naIXgIG%2BUBNlODNa%2FoB&X-Amz-Signature=54ceb70862024afd553a54caab747465bc8acb03c8bff6c4d554b260310b7cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W455OIB%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHNz20UDYLTRSqd1nxZgrTRyZWLMYk%2F6cWNmrdJbeq3QIgVY0%2FeJ%2Frch4IAL5vvF0y8uLGbaXyv4R71aycVpIeZfsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN157JIbU22RJI1wWyrcA%2FYpTVhchVNxbQbmFEPcHd3msMDU1yESDogQRYClQLwvkbu2v7I6zL6dRQkWFPkXmR%2B8%2FIS9bFjCEXSTO84z69r74nWtXVEpHAljKt0u7T7CxUBcqoQF4sJCWXTWHNQmb7yyS7fOqzy%2FqR%2FaEckbINe83bLVA9Cp90YiKijxLCFobjsBW2G5nXO6xeAAr98GSLR2Pw2VIo2b%2BdSBG7hYrrcdsq%2B8iPoboZmdqqrFfnziWVpfawT55m9BywB%2BKNBVlizrUIzBiJ%2B4C7LPnWZ8BwsefSA%2BGIV7iErUXZggvIKQqLjY6KMPHKM5YLfGcAqthxuT63yWwpbQCkO4LGWa7B8X5V%2FugTHtDLEWBG6CYSMLLlQsU5pccgHOo%2FjUmhPhTstzdftM%2FxlKmWL8aB%2BIzYY06GkFSn2%2FDv8ET2IurWEw4%2FMymCFP57Fsc7iYpelGIZY27pUTppgHv1LzzzJX9gWseTbVUlWXOHz5UlcWTTrjJ8nTHbnRvit4tfB4l75eDzAPlWUQdN%2FxC3aTalOJ3AasMv3srRfWehGClI%2BcVQX9DPN9CAVn8IXyrQFfbHgSWHgi57FxprPkfPoloayeejDRRU6Cp8XdA57u%2FHfnwmgIBl%2FUeL395JShAD8yMN6qmMoGOqUBWoyJCFn%2FpdvqojMPmxxBEA%2FdJrXncXYlks4U1KIvTcKX47nYZ3tXuEsHsE8X1XTeZRA9uTxQX7hleMhGHN2XEfPSZ%2FsK%2FUiR0%2FBAi5cr8gQ4eUkWL0XZo1TsfsFiIZSugyzup1lubKJp3DtVzSXg%2F74ONjVuaOyNWsiCnTD14v9Z47eCFiEQ160qVcKyuJ5%2FQOeeKzkf3naIXgIG%2BUBNlODNa%2FoB&X-Amz-Signature=c8d4a787203b08aa7e9cc15c34e0f01160641ff482cec63274ae88bc153773db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W455OIB%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHNz20UDYLTRSqd1nxZgrTRyZWLMYk%2F6cWNmrdJbeq3QIgVY0%2FeJ%2Frch4IAL5vvF0y8uLGbaXyv4R71aycVpIeZfsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN157JIbU22RJI1wWyrcA%2FYpTVhchVNxbQbmFEPcHd3msMDU1yESDogQRYClQLwvkbu2v7I6zL6dRQkWFPkXmR%2B8%2FIS9bFjCEXSTO84z69r74nWtXVEpHAljKt0u7T7CxUBcqoQF4sJCWXTWHNQmb7yyS7fOqzy%2FqR%2FaEckbINe83bLVA9Cp90YiKijxLCFobjsBW2G5nXO6xeAAr98GSLR2Pw2VIo2b%2BdSBG7hYrrcdsq%2B8iPoboZmdqqrFfnziWVpfawT55m9BywB%2BKNBVlizrUIzBiJ%2B4C7LPnWZ8BwsefSA%2BGIV7iErUXZggvIKQqLjY6KMPHKM5YLfGcAqthxuT63yWwpbQCkO4LGWa7B8X5V%2FugTHtDLEWBG6CYSMLLlQsU5pccgHOo%2FjUmhPhTstzdftM%2FxlKmWL8aB%2BIzYY06GkFSn2%2FDv8ET2IurWEw4%2FMymCFP57Fsc7iYpelGIZY27pUTppgHv1LzzzJX9gWseTbVUlWXOHz5UlcWTTrjJ8nTHbnRvit4tfB4l75eDzAPlWUQdN%2FxC3aTalOJ3AasMv3srRfWehGClI%2BcVQX9DPN9CAVn8IXyrQFfbHgSWHgi57FxprPkfPoloayeejDRRU6Cp8XdA57u%2FHfnwmgIBl%2FUeL395JShAD8yMN6qmMoGOqUBWoyJCFn%2FpdvqojMPmxxBEA%2FdJrXncXYlks4U1KIvTcKX47nYZ3tXuEsHsE8X1XTeZRA9uTxQX7hleMhGHN2XEfPSZ%2FsK%2FUiR0%2FBAi5cr8gQ4eUkWL0XZo1TsfsFiIZSugyzup1lubKJp3DtVzSXg%2F74ONjVuaOyNWsiCnTD14v9Z47eCFiEQ160qVcKyuJ5%2FQOeeKzkf3naIXgIG%2BUBNlODNa%2FoB&X-Amz-Signature=416860c0800d6e4d30a2f2367ae0b6250f419be46bb5c586eda7dbf3881f78bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W455OIB%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHNz20UDYLTRSqd1nxZgrTRyZWLMYk%2F6cWNmrdJbeq3QIgVY0%2FeJ%2Frch4IAL5vvF0y8uLGbaXyv4R71aycVpIeZfsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN157JIbU22RJI1wWyrcA%2FYpTVhchVNxbQbmFEPcHd3msMDU1yESDogQRYClQLwvkbu2v7I6zL6dRQkWFPkXmR%2B8%2FIS9bFjCEXSTO84z69r74nWtXVEpHAljKt0u7T7CxUBcqoQF4sJCWXTWHNQmb7yyS7fOqzy%2FqR%2FaEckbINe83bLVA9Cp90YiKijxLCFobjsBW2G5nXO6xeAAr98GSLR2Pw2VIo2b%2BdSBG7hYrrcdsq%2B8iPoboZmdqqrFfnziWVpfawT55m9BywB%2BKNBVlizrUIzBiJ%2B4C7LPnWZ8BwsefSA%2BGIV7iErUXZggvIKQqLjY6KMPHKM5YLfGcAqthxuT63yWwpbQCkO4LGWa7B8X5V%2FugTHtDLEWBG6CYSMLLlQsU5pccgHOo%2FjUmhPhTstzdftM%2FxlKmWL8aB%2BIzYY06GkFSn2%2FDv8ET2IurWEw4%2FMymCFP57Fsc7iYpelGIZY27pUTppgHv1LzzzJX9gWseTbVUlWXOHz5UlcWTTrjJ8nTHbnRvit4tfB4l75eDzAPlWUQdN%2FxC3aTalOJ3AasMv3srRfWehGClI%2BcVQX9DPN9CAVn8IXyrQFfbHgSWHgi57FxprPkfPoloayeejDRRU6Cp8XdA57u%2FHfnwmgIBl%2FUeL395JShAD8yMN6qmMoGOqUBWoyJCFn%2FpdvqojMPmxxBEA%2FdJrXncXYlks4U1KIvTcKX47nYZ3tXuEsHsE8X1XTeZRA9uTxQX7hleMhGHN2XEfPSZ%2FsK%2FUiR0%2FBAi5cr8gQ4eUkWL0XZo1TsfsFiIZSugyzup1lubKJp3DtVzSXg%2F74ONjVuaOyNWsiCnTD14v9Z47eCFiEQ160qVcKyuJ5%2FQOeeKzkf3naIXgIG%2BUBNlODNa%2FoB&X-Amz-Signature=f05b9bf9c49c4439116a36aac4e33f3a0e32a3a23454263a9b56f4d79f8c08b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W455OIB%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHNz20UDYLTRSqd1nxZgrTRyZWLMYk%2F6cWNmrdJbeq3QIgVY0%2FeJ%2Frch4IAL5vvF0y8uLGbaXyv4R71aycVpIeZfsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN157JIbU22RJI1wWyrcA%2FYpTVhchVNxbQbmFEPcHd3msMDU1yESDogQRYClQLwvkbu2v7I6zL6dRQkWFPkXmR%2B8%2FIS9bFjCEXSTO84z69r74nWtXVEpHAljKt0u7T7CxUBcqoQF4sJCWXTWHNQmb7yyS7fOqzy%2FqR%2FaEckbINe83bLVA9Cp90YiKijxLCFobjsBW2G5nXO6xeAAr98GSLR2Pw2VIo2b%2BdSBG7hYrrcdsq%2B8iPoboZmdqqrFfnziWVpfawT55m9BywB%2BKNBVlizrUIzBiJ%2B4C7LPnWZ8BwsefSA%2BGIV7iErUXZggvIKQqLjY6KMPHKM5YLfGcAqthxuT63yWwpbQCkO4LGWa7B8X5V%2FugTHtDLEWBG6CYSMLLlQsU5pccgHOo%2FjUmhPhTstzdftM%2FxlKmWL8aB%2BIzYY06GkFSn2%2FDv8ET2IurWEw4%2FMymCFP57Fsc7iYpelGIZY27pUTppgHv1LzzzJX9gWseTbVUlWXOHz5UlcWTTrjJ8nTHbnRvit4tfB4l75eDzAPlWUQdN%2FxC3aTalOJ3AasMv3srRfWehGClI%2BcVQX9DPN9CAVn8IXyrQFfbHgSWHgi57FxprPkfPoloayeejDRRU6Cp8XdA57u%2FHfnwmgIBl%2FUeL395JShAD8yMN6qmMoGOqUBWoyJCFn%2FpdvqojMPmxxBEA%2FdJrXncXYlks4U1KIvTcKX47nYZ3tXuEsHsE8X1XTeZRA9uTxQX7hleMhGHN2XEfPSZ%2FsK%2FUiR0%2FBAi5cr8gQ4eUkWL0XZo1TsfsFiIZSugyzup1lubKJp3DtVzSXg%2F74ONjVuaOyNWsiCnTD14v9Z47eCFiEQ160qVcKyuJ5%2FQOeeKzkf3naIXgIG%2BUBNlODNa%2FoB&X-Amz-Signature=602911c4bb2d1e32ff63d36f09008071a4dfc9663e9ccdfeca337fe471bc2cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646QKPIM6%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T035436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNtz9BLmodsnPyky5yT73Aj36iLIXmMFYzODr4fnxgUAiADJ%2B6pJflr0oGwVJul2EM6VZ4QktxN0bHqqpm6k9RkGCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2tvhX4DMKG4gCI6bKtwDw1XhH3bSqlH2kk%2BgVNv1g8fdwZurf5jbWdSxreLUcLM4e6FtSlx5hPnBO3Q9zV42XsRXXkPMeYGjfF5ilkVu4Uk9iZftoJ4AztmKAOVHdmA83WC5u6gdhFOqf3l6RvobCj9YlGH34LsYG%2B0ptCmjmj1%2FGbmSObYuOCxQOhU6x5I3K3PiL%2ByBJJxdzOYoJGNJzMFAA0M2kYFpbZ0MuUQmOAGshIjrmx5c2j4mnvOMqaof21ZOpdn5C7vYUlwlmdQP5QoIDnWf3NEBDt6%2BpB%2F9B7Y5840kmI9eJM59BtYdkLV1ciLBVluX9LMpzinxXeJgOoqkzucWIycCENlHmuhnVn%2FfgMLjv0FGcRfn9tvC80zAGDt17zvHSsC7jMi8LpHVSvLqodHqbNg%2BVeAqEz3SVt%2FkKlEHO2UdKg4fvDcKdLlAzDikNiwRW1oCoWIYhAW214na3Sdl5bZDko1Zgf9kpWfFKj9Nb%2FXXlMoz0tzRJEtZgAQy6W5T8NYjhx8ZJiljBduc4XgmusGb%2B5G3L%2B5Ig9wuoOLa503eRnSLzuF04d8xl15T7s1J%2BM8zhp%2Fb6wRh0gLE0W1qm7xR6Ck81OFJjvJLKZtSi8a7wCo1OOmu%2FynXJbwNWbMvt0PxlG4wo6uYygY6pgF117NGfJw4CK0%2BfXA%2BsG9F%2Bp5VM4J1sewYmLU4MUNteFnkNS0sFqtvt%2BfsJUXLG3sdm6yGALNrnjUZBy5yfiby40a7bAKRtKFKSst1V4VGaj6TMOhZQLGLyx2fW%2BS4kyvHHfBkLq0XuV9%2Bo%2B4uZRyoIE4K0YSHzKkpwUVnkXzZPvrf7dsXYA%2Fjbp0XSfJ%2BEuWR1fL8kcsTyD4m1zIkgrlfEF1fZeFI&X-Amz-Signature=016065b80aecb9ec6cfcf6e2cd1dbee9f81c456fe98ba18246b92ad58ad35747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

