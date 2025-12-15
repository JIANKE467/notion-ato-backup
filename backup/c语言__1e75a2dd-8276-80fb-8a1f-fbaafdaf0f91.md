
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EW6KYAJ%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICdbFH7w8JKRKphajCJWnVaCN2Ag8wiJd2TjTR80ceCBAiB%2B1sXAxXwGjU3IOqT3gSqJKt8aP7GgYczeRe8X8hbxjyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMgQ6SQIzl6er6xXYlKtwDDk7hpXCUE0mGGvhidE4ZklqOMdxkeF5zzj278kSNvIpshXpq3SnRYHAMY2HqzIjKY4QEuDziY7WYMUnc4n1y%2FVe51WFNpa4Cjj5m1yx4BUHwdPYiHOXpQTtbaM0HKvGzjR27pUBeAnwAE1tfBqMFdcsEwoTtvoSie5q6hDCros8NHLjt5nu7hxjOM1c2Lob0EcG9AVapP1O4WiUFvdubcPb49RlDw7kZ%2B6wkhfkOiFep0ls9ULRkQRFg%2FfFSc7CcESXINNBVSQ98uHDgo14AVryB0JhWkk%2Fw%2FVnq%2FqC4eK9QOfG638wwHqaTlu83RPxptZ%2BhmqP0xxDZM2cngVnTu80gWyWikmrYw1%2B9k%2Bf237AzIyi%2BrKH181m6uxrzedW%2FOdxQzEGnCDfKM%2Fe0giYQ%2BBG1qcA%2B4r41j3X7r3hlxX0acYAtbngSAycfT0wGqDoaTqrA6YHd5HBb0EKIP8z8H6Oq75dd%2BkYUqeeA%2BE709DfQgkb6H42diwS1TUJr46Nmuk8A27RRcKinoAIyHvN%2FrdEbg8h6ldfZHc5gyrli0lQ8ndFH%2BtWp%2FQHaQmm7eMEHyCL03zimkVgkpUWzQNSGez9Bl4d%2BOJVnFPZoO90845EfAnrJhK3VmNtlV6Qwl4z%2ByQY6pgEiNvOt3ZCz3ZosqGlLfgNqGTapVo7AAVZmlC1msBYcAU69Re45x1nU25ZrBseD07WvFe7n8d2kDGWRZwR3kZQaKQskNxnZH%2BUG8h%2Bfgtpscs8mcjOeSFSEHzf42SsXNjKS7n88ik7ybBkExGnHRXj14II%2F5MNAiFVesLwSjNS4Xl8pT93Qr%2F0ynFqtHwJIMvQapgFPkvIcl7uTh%2FHIHdPWEL3HFLpF&X-Amz-Signature=21ae672569763859a34ba39bbe6c995744b1690e555321bfd9f0bc660ef5b524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVI6K7Q%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCuJZ7m2LkqO9RJZvj0usmyyuQ1E93RCiyDa0SJ5JQvsgIgayzppZBm3sYO63yGVV1FBbn1BfcMYtmor6WiDf8fZvsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDAXtf0Dm8039fbZwJCrcA2OaTcG%2BQk3%2FfbyMEoThAy683%2BH5Kw02IOEesgUvtkc6tyqMW7Tojk7CHkfhF5%2B8DhvgwVXows6YTCz1dJGS6lGRoBozTY%2FWKZwN9IK7HDvOinI0zDEUNKCdUgFAKm55qfYmpciIBB%2FVWMXD8p4TuoG0pwGX7z7loZI0lZwbLRsmdV0NZU4iPveo8CAAbs%2BMWZ4BCeF%2BqRCvD7G79npYf3qXTEtHmAZ%2BTm0VK5lfEmlYZTbhMs7i7MjQT6%2B1ujgH5FlJla%2FkBCh%2BEzBGPvo7dXJ7fJebAUeBxz8d8cY4HPfKwwberTZTtv1sVrqm5SpqdtYKG5zyK4FnarMs%2BHxoItPfctG9LMIp2bdCrt4TGQY5fFgZu2tMi9J5POOJLFpXrkRPBRMJ6G%2F6gT3v1OF8VZBy7Jdnasqp%2BT7QH1FnlPrboYC%2FfuwAFSpP7r8WOOHA%2FFhC19olAuCHZ05PgIwdIJ82lVYdjMM6iKvrMdrxfGLd7VzUhK%2F2hArjKJkLKSNR4sG4IR7%2Bc0x5jyANforN%2BvIG52INhv31j4gUIOYiYbDresYjDOQe9vVaYWPrj2dBcMkP8z1ueq4DTYIwYqfAOw6VY7V6UlaF7L9hr3%2BBVjnoj09MSIhUHkY3W046MICM%2FskGOqUBFzq1Fa8IfNniXD6wxUl0TAH%2BhSZrn58ibTOVSSuK1HoSm5EW1l5BM%2BogaVAqQQQybewyAyBFAcPfh14MlFokkdkL0DQbA1IPOow6Pxo717mp7fcaGqrxC6D4xQMJAso6lc%2FeZvG5obLWbbGdxyW3KlAHGRShH097jC74GLytaKmMxCWszZS6eliCrUOG2ZPgWdwJDXaH0oO2O3%2BZiRtW3mWN7K75&X-Amz-Signature=834f98584927d936bd6833c1f0ddf2336d0620eb47f3342ca969345935283c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVI6K7Q%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCuJZ7m2LkqO9RJZvj0usmyyuQ1E93RCiyDa0SJ5JQvsgIgayzppZBm3sYO63yGVV1FBbn1BfcMYtmor6WiDf8fZvsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDAXtf0Dm8039fbZwJCrcA2OaTcG%2BQk3%2FfbyMEoThAy683%2BH5Kw02IOEesgUvtkc6tyqMW7Tojk7CHkfhF5%2B8DhvgwVXows6YTCz1dJGS6lGRoBozTY%2FWKZwN9IK7HDvOinI0zDEUNKCdUgFAKm55qfYmpciIBB%2FVWMXD8p4TuoG0pwGX7z7loZI0lZwbLRsmdV0NZU4iPveo8CAAbs%2BMWZ4BCeF%2BqRCvD7G79npYf3qXTEtHmAZ%2BTm0VK5lfEmlYZTbhMs7i7MjQT6%2B1ujgH5FlJla%2FkBCh%2BEzBGPvo7dXJ7fJebAUeBxz8d8cY4HPfKwwberTZTtv1sVrqm5SpqdtYKG5zyK4FnarMs%2BHxoItPfctG9LMIp2bdCrt4TGQY5fFgZu2tMi9J5POOJLFpXrkRPBRMJ6G%2F6gT3v1OF8VZBy7Jdnasqp%2BT7QH1FnlPrboYC%2FfuwAFSpP7r8WOOHA%2FFhC19olAuCHZ05PgIwdIJ82lVYdjMM6iKvrMdrxfGLd7VzUhK%2F2hArjKJkLKSNR4sG4IR7%2Bc0x5jyANforN%2BvIG52INhv31j4gUIOYiYbDresYjDOQe9vVaYWPrj2dBcMkP8z1ueq4DTYIwYqfAOw6VY7V6UlaF7L9hr3%2BBVjnoj09MSIhUHkY3W046MICM%2FskGOqUBFzq1Fa8IfNniXD6wxUl0TAH%2BhSZrn58ibTOVSSuK1HoSm5EW1l5BM%2BogaVAqQQQybewyAyBFAcPfh14MlFokkdkL0DQbA1IPOow6Pxo717mp7fcaGqrxC6D4xQMJAso6lc%2FeZvG5obLWbbGdxyW3KlAHGRShH097jC74GLytaKmMxCWszZS6eliCrUOG2ZPgWdwJDXaH0oO2O3%2BZiRtW3mWN7K75&X-Amz-Signature=5cec537e7e74a7adc2564d42f2cc935a4b4fed78ab1a81afa9a9645019868b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U24D24MS%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFgtN1Ogar%2BCOFN6H30BHLGR1aSSG4gSuPeIyxcEbRDgAiEAtCkHgKURmz5sAO2gBaSswz7WWMCc7hGLJVKGFkhsaFQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDB7UCbUDCHDfnzwkgircA41%2BIc6IkJ2quiVr3XxpTxj5m4JWlNCPkuS5l%2BXR9WRORxWHUy3JvuFlM%2BiGKdv3qMi5v4nz%2B9Va6d0F4fg8JsQ03Pc2wZ4%2FpmIHZfmT%2FLWEAO%2BDj%2Fn8PyOVOvmF0jK3%2BsVu2sDgJHdWWsKfBQFM4xNrbtFxSdQ4mRUz%2FAIVCvS5AoovmvQk824gqgTeExcnUbcZo0JkANRBJ1O9MqmSOXmlEUJGQrimk626%2Bspd9FZPkj3hXdcXoS7mC7kVyXj%2FCwPyx1TANAw6ho2TCNz99buxafNmE%2FhK0zVuH0uovW8%2FGIKze%2FAoeCHoEbBWws7VuVHnL0dFHJvEjG%2Fg%2BpMeBDIL1DS2UYDC3L2fVWq2zV8kL3F3FoGg2hHifuDsTJKDEABwWxlAGNbYuO0yBQN0EROSGgMOmR43LJ6okBfWbgneWQTaK6CAIBLmo8Z%2B9cGltSsurjrJTJ6%2F1XekE2fDiobeq1%2Bv2OBNVtuzRH2a4Y%2BCQx%2BmUJtLG7WXOQmgf%2FM4x3liseVa5sqOs0%2FQIZjVLqbDaECftA%2FVFcrsm9IvYevdPDicnaFZs8ue3Ef%2Fx2D6VqjxwqUYLGvSqnADAcC4EDiYc6eiZGFv0Up7lHExzPL69h5JZs3PBYTzq4z7MIKM%2FskGOqUBDYI5%2BIF9wXkw42KueJFIPJJlbyPDEYzJtV4mM5bCkzJnnHog2E66Y1YRrTR%2B2g52uPOmNzfn4JoO3yeyw9huZN%2Bazyy3cS9063elsoBa9FzS4DuoSv02QkHrB0FL52%2BAGMyTx1%2Fiim6%2Bk5VA%2BzlM0SBBqw7lc1rUjItD3Pv0gm9B0FgAfWNRTm6rdd4UW%2B2MhMwLePYmG4rGbDCO3E1MhTe%2B5lvm&X-Amz-Signature=823c12c5267205ec6751fbd36ec370a2cab66b1627181092a26f5d4055e38d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U24D24MS%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFgtN1Ogar%2BCOFN6H30BHLGR1aSSG4gSuPeIyxcEbRDgAiEAtCkHgKURmz5sAO2gBaSswz7WWMCc7hGLJVKGFkhsaFQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDB7UCbUDCHDfnzwkgircA41%2BIc6IkJ2quiVr3XxpTxj5m4JWlNCPkuS5l%2BXR9WRORxWHUy3JvuFlM%2BiGKdv3qMi5v4nz%2B9Va6d0F4fg8JsQ03Pc2wZ4%2FpmIHZfmT%2FLWEAO%2BDj%2Fn8PyOVOvmF0jK3%2BsVu2sDgJHdWWsKfBQFM4xNrbtFxSdQ4mRUz%2FAIVCvS5AoovmvQk824gqgTeExcnUbcZo0JkANRBJ1O9MqmSOXmlEUJGQrimk626%2Bspd9FZPkj3hXdcXoS7mC7kVyXj%2FCwPyx1TANAw6ho2TCNz99buxafNmE%2FhK0zVuH0uovW8%2FGIKze%2FAoeCHoEbBWws7VuVHnL0dFHJvEjG%2Fg%2BpMeBDIL1DS2UYDC3L2fVWq2zV8kL3F3FoGg2hHifuDsTJKDEABwWxlAGNbYuO0yBQN0EROSGgMOmR43LJ6okBfWbgneWQTaK6CAIBLmo8Z%2B9cGltSsurjrJTJ6%2F1XekE2fDiobeq1%2Bv2OBNVtuzRH2a4Y%2BCQx%2BmUJtLG7WXOQmgf%2FM4x3liseVa5sqOs0%2FQIZjVLqbDaECftA%2FVFcrsm9IvYevdPDicnaFZs8ue3Ef%2Fx2D6VqjxwqUYLGvSqnADAcC4EDiYc6eiZGFv0Up7lHExzPL69h5JZs3PBYTzq4z7MIKM%2FskGOqUBDYI5%2BIF9wXkw42KueJFIPJJlbyPDEYzJtV4mM5bCkzJnnHog2E66Y1YRrTR%2B2g52uPOmNzfn4JoO3yeyw9huZN%2Bazyy3cS9063elsoBa9FzS4DuoSv02QkHrB0FL52%2BAGMyTx1%2Fiim6%2Bk5VA%2BzlM0SBBqw7lc1rUjItD3Pv0gm9B0FgAfWNRTm6rdd4UW%2B2MhMwLePYmG4rGbDCO3E1MhTe%2B5lvm&X-Amz-Signature=660f0216963027093cf59985d96822e259073a2d3e236e257ed4cc09be028d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U24D24MS%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFgtN1Ogar%2BCOFN6H30BHLGR1aSSG4gSuPeIyxcEbRDgAiEAtCkHgKURmz5sAO2gBaSswz7WWMCc7hGLJVKGFkhsaFQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDB7UCbUDCHDfnzwkgircA41%2BIc6IkJ2quiVr3XxpTxj5m4JWlNCPkuS5l%2BXR9WRORxWHUy3JvuFlM%2BiGKdv3qMi5v4nz%2B9Va6d0F4fg8JsQ03Pc2wZ4%2FpmIHZfmT%2FLWEAO%2BDj%2Fn8PyOVOvmF0jK3%2BsVu2sDgJHdWWsKfBQFM4xNrbtFxSdQ4mRUz%2FAIVCvS5AoovmvQk824gqgTeExcnUbcZo0JkANRBJ1O9MqmSOXmlEUJGQrimk626%2Bspd9FZPkj3hXdcXoS7mC7kVyXj%2FCwPyx1TANAw6ho2TCNz99buxafNmE%2FhK0zVuH0uovW8%2FGIKze%2FAoeCHoEbBWws7VuVHnL0dFHJvEjG%2Fg%2BpMeBDIL1DS2UYDC3L2fVWq2zV8kL3F3FoGg2hHifuDsTJKDEABwWxlAGNbYuO0yBQN0EROSGgMOmR43LJ6okBfWbgneWQTaK6CAIBLmo8Z%2B9cGltSsurjrJTJ6%2F1XekE2fDiobeq1%2Bv2OBNVtuzRH2a4Y%2BCQx%2BmUJtLG7WXOQmgf%2FM4x3liseVa5sqOs0%2FQIZjVLqbDaECftA%2FVFcrsm9IvYevdPDicnaFZs8ue3Ef%2Fx2D6VqjxwqUYLGvSqnADAcC4EDiYc6eiZGFv0Up7lHExzPL69h5JZs3PBYTzq4z7MIKM%2FskGOqUBDYI5%2BIF9wXkw42KueJFIPJJlbyPDEYzJtV4mM5bCkzJnnHog2E66Y1YRrTR%2B2g52uPOmNzfn4JoO3yeyw9huZN%2Bazyy3cS9063elsoBa9FzS4DuoSv02QkHrB0FL52%2BAGMyTx1%2Fiim6%2Bk5VA%2BzlM0SBBqw7lc1rUjItD3Pv0gm9B0FgAfWNRTm6rdd4UW%2B2MhMwLePYmG4rGbDCO3E1MhTe%2B5lvm&X-Amz-Signature=0cbf4a4b9b0a2338dd95cfcfac2c7b99fd31672ffe240aec80fff9bad74daf1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U24D24MS%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFgtN1Ogar%2BCOFN6H30BHLGR1aSSG4gSuPeIyxcEbRDgAiEAtCkHgKURmz5sAO2gBaSswz7WWMCc7hGLJVKGFkhsaFQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDB7UCbUDCHDfnzwkgircA41%2BIc6IkJ2quiVr3XxpTxj5m4JWlNCPkuS5l%2BXR9WRORxWHUy3JvuFlM%2BiGKdv3qMi5v4nz%2B9Va6d0F4fg8JsQ03Pc2wZ4%2FpmIHZfmT%2FLWEAO%2BDj%2Fn8PyOVOvmF0jK3%2BsVu2sDgJHdWWsKfBQFM4xNrbtFxSdQ4mRUz%2FAIVCvS5AoovmvQk824gqgTeExcnUbcZo0JkANRBJ1O9MqmSOXmlEUJGQrimk626%2Bspd9FZPkj3hXdcXoS7mC7kVyXj%2FCwPyx1TANAw6ho2TCNz99buxafNmE%2FhK0zVuH0uovW8%2FGIKze%2FAoeCHoEbBWws7VuVHnL0dFHJvEjG%2Fg%2BpMeBDIL1DS2UYDC3L2fVWq2zV8kL3F3FoGg2hHifuDsTJKDEABwWxlAGNbYuO0yBQN0EROSGgMOmR43LJ6okBfWbgneWQTaK6CAIBLmo8Z%2B9cGltSsurjrJTJ6%2F1XekE2fDiobeq1%2Bv2OBNVtuzRH2a4Y%2BCQx%2BmUJtLG7WXOQmgf%2FM4x3liseVa5sqOs0%2FQIZjVLqbDaECftA%2FVFcrsm9IvYevdPDicnaFZs8ue3Ef%2Fx2D6VqjxwqUYLGvSqnADAcC4EDiYc6eiZGFv0Up7lHExzPL69h5JZs3PBYTzq4z7MIKM%2FskGOqUBDYI5%2BIF9wXkw42KueJFIPJJlbyPDEYzJtV4mM5bCkzJnnHog2E66Y1YRrTR%2B2g52uPOmNzfn4JoO3yeyw9huZN%2Bazyy3cS9063elsoBa9FzS4DuoSv02QkHrB0FL52%2BAGMyTx1%2Fiim6%2Bk5VA%2BzlM0SBBqw7lc1rUjItD3Pv0gm9B0FgAfWNRTm6rdd4UW%2B2MhMwLePYmG4rGbDCO3E1MhTe%2B5lvm&X-Amz-Signature=fc779d513eedfbad21c665658f48a6de3a1f98fbdf8616afef8add0e108a5f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U24D24MS%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFgtN1Ogar%2BCOFN6H30BHLGR1aSSG4gSuPeIyxcEbRDgAiEAtCkHgKURmz5sAO2gBaSswz7WWMCc7hGLJVKGFkhsaFQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDB7UCbUDCHDfnzwkgircA41%2BIc6IkJ2quiVr3XxpTxj5m4JWlNCPkuS5l%2BXR9WRORxWHUy3JvuFlM%2BiGKdv3qMi5v4nz%2B9Va6d0F4fg8JsQ03Pc2wZ4%2FpmIHZfmT%2FLWEAO%2BDj%2Fn8PyOVOvmF0jK3%2BsVu2sDgJHdWWsKfBQFM4xNrbtFxSdQ4mRUz%2FAIVCvS5AoovmvQk824gqgTeExcnUbcZo0JkANRBJ1O9MqmSOXmlEUJGQrimk626%2Bspd9FZPkj3hXdcXoS7mC7kVyXj%2FCwPyx1TANAw6ho2TCNz99buxafNmE%2FhK0zVuH0uovW8%2FGIKze%2FAoeCHoEbBWws7VuVHnL0dFHJvEjG%2Fg%2BpMeBDIL1DS2UYDC3L2fVWq2zV8kL3F3FoGg2hHifuDsTJKDEABwWxlAGNbYuO0yBQN0EROSGgMOmR43LJ6okBfWbgneWQTaK6CAIBLmo8Z%2B9cGltSsurjrJTJ6%2F1XekE2fDiobeq1%2Bv2OBNVtuzRH2a4Y%2BCQx%2BmUJtLG7WXOQmgf%2FM4x3liseVa5sqOs0%2FQIZjVLqbDaECftA%2FVFcrsm9IvYevdPDicnaFZs8ue3Ef%2Fx2D6VqjxwqUYLGvSqnADAcC4EDiYc6eiZGFv0Up7lHExzPL69h5JZs3PBYTzq4z7MIKM%2FskGOqUBDYI5%2BIF9wXkw42KueJFIPJJlbyPDEYzJtV4mM5bCkzJnnHog2E66Y1YRrTR%2B2g52uPOmNzfn4JoO3yeyw9huZN%2Bazyy3cS9063elsoBa9FzS4DuoSv02QkHrB0FL52%2BAGMyTx1%2Fiim6%2Bk5VA%2BzlM0SBBqw7lc1rUjItD3Pv0gm9B0FgAfWNRTm6rdd4UW%2B2MhMwLePYmG4rGbDCO3E1MhTe%2B5lvm&X-Amz-Signature=855f313fcaeb78776d2a81b2a7f524605abee82a6b2c940c5c91585637755516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U24D24MS%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFgtN1Ogar%2BCOFN6H30BHLGR1aSSG4gSuPeIyxcEbRDgAiEAtCkHgKURmz5sAO2gBaSswz7WWMCc7hGLJVKGFkhsaFQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDB7UCbUDCHDfnzwkgircA41%2BIc6IkJ2quiVr3XxpTxj5m4JWlNCPkuS5l%2BXR9WRORxWHUy3JvuFlM%2BiGKdv3qMi5v4nz%2B9Va6d0F4fg8JsQ03Pc2wZ4%2FpmIHZfmT%2FLWEAO%2BDj%2Fn8PyOVOvmF0jK3%2BsVu2sDgJHdWWsKfBQFM4xNrbtFxSdQ4mRUz%2FAIVCvS5AoovmvQk824gqgTeExcnUbcZo0JkANRBJ1O9MqmSOXmlEUJGQrimk626%2Bspd9FZPkj3hXdcXoS7mC7kVyXj%2FCwPyx1TANAw6ho2TCNz99buxafNmE%2FhK0zVuH0uovW8%2FGIKze%2FAoeCHoEbBWws7VuVHnL0dFHJvEjG%2Fg%2BpMeBDIL1DS2UYDC3L2fVWq2zV8kL3F3FoGg2hHifuDsTJKDEABwWxlAGNbYuO0yBQN0EROSGgMOmR43LJ6okBfWbgneWQTaK6CAIBLmo8Z%2B9cGltSsurjrJTJ6%2F1XekE2fDiobeq1%2Bv2OBNVtuzRH2a4Y%2BCQx%2BmUJtLG7WXOQmgf%2FM4x3liseVa5sqOs0%2FQIZjVLqbDaECftA%2FVFcrsm9IvYevdPDicnaFZs8ue3Ef%2Fx2D6VqjxwqUYLGvSqnADAcC4EDiYc6eiZGFv0Up7lHExzPL69h5JZs3PBYTzq4z7MIKM%2FskGOqUBDYI5%2BIF9wXkw42KueJFIPJJlbyPDEYzJtV4mM5bCkzJnnHog2E66Y1YRrTR%2B2g52uPOmNzfn4JoO3yeyw9huZN%2Bazyy3cS9063elsoBa9FzS4DuoSv02QkHrB0FL52%2BAGMyTx1%2Fiim6%2Bk5VA%2BzlM0SBBqw7lc1rUjItD3Pv0gm9B0FgAfWNRTm6rdd4UW%2B2MhMwLePYmG4rGbDCO3E1MhTe%2B5lvm&X-Amz-Signature=1f9a822d7d2d1d3b319e18a87d99218df5a60ed65a4216311db15174787a347f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U24D24MS%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFgtN1Ogar%2BCOFN6H30BHLGR1aSSG4gSuPeIyxcEbRDgAiEAtCkHgKURmz5sAO2gBaSswz7WWMCc7hGLJVKGFkhsaFQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDB7UCbUDCHDfnzwkgircA41%2BIc6IkJ2quiVr3XxpTxj5m4JWlNCPkuS5l%2BXR9WRORxWHUy3JvuFlM%2BiGKdv3qMi5v4nz%2B9Va6d0F4fg8JsQ03Pc2wZ4%2FpmIHZfmT%2FLWEAO%2BDj%2Fn8PyOVOvmF0jK3%2BsVu2sDgJHdWWsKfBQFM4xNrbtFxSdQ4mRUz%2FAIVCvS5AoovmvQk824gqgTeExcnUbcZo0JkANRBJ1O9MqmSOXmlEUJGQrimk626%2Bspd9FZPkj3hXdcXoS7mC7kVyXj%2FCwPyx1TANAw6ho2TCNz99buxafNmE%2FhK0zVuH0uovW8%2FGIKze%2FAoeCHoEbBWws7VuVHnL0dFHJvEjG%2Fg%2BpMeBDIL1DS2UYDC3L2fVWq2zV8kL3F3FoGg2hHifuDsTJKDEABwWxlAGNbYuO0yBQN0EROSGgMOmR43LJ6okBfWbgneWQTaK6CAIBLmo8Z%2B9cGltSsurjrJTJ6%2F1XekE2fDiobeq1%2Bv2OBNVtuzRH2a4Y%2BCQx%2BmUJtLG7WXOQmgf%2FM4x3liseVa5sqOs0%2FQIZjVLqbDaECftA%2FVFcrsm9IvYevdPDicnaFZs8ue3Ef%2Fx2D6VqjxwqUYLGvSqnADAcC4EDiYc6eiZGFv0Up7lHExzPL69h5JZs3PBYTzq4z7MIKM%2FskGOqUBDYI5%2BIF9wXkw42KueJFIPJJlbyPDEYzJtV4mM5bCkzJnnHog2E66Y1YRrTR%2B2g52uPOmNzfn4JoO3yeyw9huZN%2Bazyy3cS9063elsoBa9FzS4DuoSv02QkHrB0FL52%2BAGMyTx1%2Fiim6%2Bk5VA%2BzlM0SBBqw7lc1rUjItD3Pv0gm9B0FgAfWNRTm6rdd4UW%2B2MhMwLePYmG4rGbDCO3E1MhTe%2B5lvm&X-Amz-Signature=eb0f6b4aab462ceb485d3be7627bcec7fda733b92e85cdd19ce0a0052be77ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBLQ7BY%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFrZELKC4PZxAyvgKDL%2FiuWJv5SizHEcXT6cZC9FxQ%2BSAiEAwdd%2B3yFcBk%2FbybdD53QFmaslG6HcybJqC3%2B%2B7t717W8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLt2X81O4o2hNewnYyrcA9HgReTATQJLsh8ff1YW0M%2B0hb1dsQvh8O3OtUARWXzZG1UvhvJUyx19Z5JSMREz%2F607GpL%2Bimr685iuXDcrhfuJ1D0T19fJwbabwWQJ7np%2BW5WEl32YXWOX7EO606UYqaJqgc6gQZX%2BUoY1%2BgSyPfY7hKnNqE9EMo4CiA1HerIJ5UdmaKXQiQpYoLun3Ijq9IHcmUTRnqChttdfRNAEy7NouAx8G7kDo7w6PsSqqb14KXeEXrRr11XHzr1lKnCkC20Jm1N0znDVzeoHmhvZWSRzTbieMmYjvH8caC9Egan6gR%2FkvF1LQwhxmJe30eZ5%2F2CR%2BvIqFHY1ehand2AX%2F8HBreOGVLscqjM727OIBR1GlKIskAZpwHEMTRTUPaH6iRJ3pDC7jmkis0GE9T4%2BSyjWC6%2B8KS8%2FXQ3QVSm6fePN8LFYVCd7D7YxLWFNJGzoTBug9wQGXWLTUB85IwZnOhSLdjuP0aPzGYTh1bpLletmwUnvnHfGR4ZmVKXBcOnz6Neu%2FJx1ryIWZv1daeTT6M74CajdVGpqQM4x1Cb1FELaLTcu%2BzxcYGdgizrwa43QZOmX5bBrcFR4evIREZsA%2BPUjxqfFGFPxr0gAVat8nWW7WMeS6TuG1JrvYgvyMP2L%2FskGOqUBkudsLn%2FjeGlO7DD67fzcU0MnOkgo0nzdm4%2FWFFvv3fcMrKJ03qOKQWpVuD%2FNmyLc6L6DN3LsZhywGc8vCwqRdIbdZXXWZHKQubPuKhcaNF%2BlDK5P1erk2OzLHgd99a2P8CkFc609B6Su4FxVsDpbfDqsweQYRls1wEfH%2F02iKyPxNvXge0yo5HrCBZiUnWrXEZk9QZKuYA7efpFfRZ0y7AKUFbdA&X-Amz-Signature=6b852638f936c25a32d8791324b34f3f71cca2bb898ffe115f0c81f3cddb394a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBLQ7BY%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFrZELKC4PZxAyvgKDL%2FiuWJv5SizHEcXT6cZC9FxQ%2BSAiEAwdd%2B3yFcBk%2FbybdD53QFmaslG6HcybJqC3%2B%2B7t717W8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLt2X81O4o2hNewnYyrcA9HgReTATQJLsh8ff1YW0M%2B0hb1dsQvh8O3OtUARWXzZG1UvhvJUyx19Z5JSMREz%2F607GpL%2Bimr685iuXDcrhfuJ1D0T19fJwbabwWQJ7np%2BW5WEl32YXWOX7EO606UYqaJqgc6gQZX%2BUoY1%2BgSyPfY7hKnNqE9EMo4CiA1HerIJ5UdmaKXQiQpYoLun3Ijq9IHcmUTRnqChttdfRNAEy7NouAx8G7kDo7w6PsSqqb14KXeEXrRr11XHzr1lKnCkC20Jm1N0znDVzeoHmhvZWSRzTbieMmYjvH8caC9Egan6gR%2FkvF1LQwhxmJe30eZ5%2F2CR%2BvIqFHY1ehand2AX%2F8HBreOGVLscqjM727OIBR1GlKIskAZpwHEMTRTUPaH6iRJ3pDC7jmkis0GE9T4%2BSyjWC6%2B8KS8%2FXQ3QVSm6fePN8LFYVCd7D7YxLWFNJGzoTBug9wQGXWLTUB85IwZnOhSLdjuP0aPzGYTh1bpLletmwUnvnHfGR4ZmVKXBcOnz6Neu%2FJx1ryIWZv1daeTT6M74CajdVGpqQM4x1Cb1FELaLTcu%2BzxcYGdgizrwa43QZOmX5bBrcFR4evIREZsA%2BPUjxqfFGFPxr0gAVat8nWW7WMeS6TuG1JrvYgvyMP2L%2FskGOqUBkudsLn%2FjeGlO7DD67fzcU0MnOkgo0nzdm4%2FWFFvv3fcMrKJ03qOKQWpVuD%2FNmyLc6L6DN3LsZhywGc8vCwqRdIbdZXXWZHKQubPuKhcaNF%2BlDK5P1erk2OzLHgd99a2P8CkFc609B6Su4FxVsDpbfDqsweQYRls1wEfH%2F02iKyPxNvXge0yo5HrCBZiUnWrXEZk9QZKuYA7efpFfRZ0y7AKUFbdA&X-Amz-Signature=44f1f8e1abad3a735f2edcb7403a0f003dcac6d49eab3727847bada3ceb4283f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBLQ7BY%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFrZELKC4PZxAyvgKDL%2FiuWJv5SizHEcXT6cZC9FxQ%2BSAiEAwdd%2B3yFcBk%2FbybdD53QFmaslG6HcybJqC3%2B%2B7t717W8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLt2X81O4o2hNewnYyrcA9HgReTATQJLsh8ff1YW0M%2B0hb1dsQvh8O3OtUARWXzZG1UvhvJUyx19Z5JSMREz%2F607GpL%2Bimr685iuXDcrhfuJ1D0T19fJwbabwWQJ7np%2BW5WEl32YXWOX7EO606UYqaJqgc6gQZX%2BUoY1%2BgSyPfY7hKnNqE9EMo4CiA1HerIJ5UdmaKXQiQpYoLun3Ijq9IHcmUTRnqChttdfRNAEy7NouAx8G7kDo7w6PsSqqb14KXeEXrRr11XHzr1lKnCkC20Jm1N0znDVzeoHmhvZWSRzTbieMmYjvH8caC9Egan6gR%2FkvF1LQwhxmJe30eZ5%2F2CR%2BvIqFHY1ehand2AX%2F8HBreOGVLscqjM727OIBR1GlKIskAZpwHEMTRTUPaH6iRJ3pDC7jmkis0GE9T4%2BSyjWC6%2B8KS8%2FXQ3QVSm6fePN8LFYVCd7D7YxLWFNJGzoTBug9wQGXWLTUB85IwZnOhSLdjuP0aPzGYTh1bpLletmwUnvnHfGR4ZmVKXBcOnz6Neu%2FJx1ryIWZv1daeTT6M74CajdVGpqQM4x1Cb1FELaLTcu%2BzxcYGdgizrwa43QZOmX5bBrcFR4evIREZsA%2BPUjxqfFGFPxr0gAVat8nWW7WMeS6TuG1JrvYgvyMP2L%2FskGOqUBkudsLn%2FjeGlO7DD67fzcU0MnOkgo0nzdm4%2FWFFvv3fcMrKJ03qOKQWpVuD%2FNmyLc6L6DN3LsZhywGc8vCwqRdIbdZXXWZHKQubPuKhcaNF%2BlDK5P1erk2OzLHgd99a2P8CkFc609B6Su4FxVsDpbfDqsweQYRls1wEfH%2F02iKyPxNvXge0yo5HrCBZiUnWrXEZk9QZKuYA7efpFfRZ0y7AKUFbdA&X-Amz-Signature=60d3eb9f47cfcc5280573c673481496f671668bbf9e0cba50fc38f895d069043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBLQ7BY%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFrZELKC4PZxAyvgKDL%2FiuWJv5SizHEcXT6cZC9FxQ%2BSAiEAwdd%2B3yFcBk%2FbybdD53QFmaslG6HcybJqC3%2B%2B7t717W8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLt2X81O4o2hNewnYyrcA9HgReTATQJLsh8ff1YW0M%2B0hb1dsQvh8O3OtUARWXzZG1UvhvJUyx19Z5JSMREz%2F607GpL%2Bimr685iuXDcrhfuJ1D0T19fJwbabwWQJ7np%2BW5WEl32YXWOX7EO606UYqaJqgc6gQZX%2BUoY1%2BgSyPfY7hKnNqE9EMo4CiA1HerIJ5UdmaKXQiQpYoLun3Ijq9IHcmUTRnqChttdfRNAEy7NouAx8G7kDo7w6PsSqqb14KXeEXrRr11XHzr1lKnCkC20Jm1N0znDVzeoHmhvZWSRzTbieMmYjvH8caC9Egan6gR%2FkvF1LQwhxmJe30eZ5%2F2CR%2BvIqFHY1ehand2AX%2F8HBreOGVLscqjM727OIBR1GlKIskAZpwHEMTRTUPaH6iRJ3pDC7jmkis0GE9T4%2BSyjWC6%2B8KS8%2FXQ3QVSm6fePN8LFYVCd7D7YxLWFNJGzoTBug9wQGXWLTUB85IwZnOhSLdjuP0aPzGYTh1bpLletmwUnvnHfGR4ZmVKXBcOnz6Neu%2FJx1ryIWZv1daeTT6M74CajdVGpqQM4x1Cb1FELaLTcu%2BzxcYGdgizrwa43QZOmX5bBrcFR4evIREZsA%2BPUjxqfFGFPxr0gAVat8nWW7WMeS6TuG1JrvYgvyMP2L%2FskGOqUBkudsLn%2FjeGlO7DD67fzcU0MnOkgo0nzdm4%2FWFFvv3fcMrKJ03qOKQWpVuD%2FNmyLc6L6DN3LsZhywGc8vCwqRdIbdZXXWZHKQubPuKhcaNF%2BlDK5P1erk2OzLHgd99a2P8CkFc609B6Su4FxVsDpbfDqsweQYRls1wEfH%2F02iKyPxNvXge0yo5HrCBZiUnWrXEZk9QZKuYA7efpFfRZ0y7AKUFbdA&X-Amz-Signature=8e25f258e86df1784dddaf5be299b87566305778f60076e3a63054e04dc127ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBLQ7BY%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFrZELKC4PZxAyvgKDL%2FiuWJv5SizHEcXT6cZC9FxQ%2BSAiEAwdd%2B3yFcBk%2FbybdD53QFmaslG6HcybJqC3%2B%2B7t717W8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLt2X81O4o2hNewnYyrcA9HgReTATQJLsh8ff1YW0M%2B0hb1dsQvh8O3OtUARWXzZG1UvhvJUyx19Z5JSMREz%2F607GpL%2Bimr685iuXDcrhfuJ1D0T19fJwbabwWQJ7np%2BW5WEl32YXWOX7EO606UYqaJqgc6gQZX%2BUoY1%2BgSyPfY7hKnNqE9EMo4CiA1HerIJ5UdmaKXQiQpYoLun3Ijq9IHcmUTRnqChttdfRNAEy7NouAx8G7kDo7w6PsSqqb14KXeEXrRr11XHzr1lKnCkC20Jm1N0znDVzeoHmhvZWSRzTbieMmYjvH8caC9Egan6gR%2FkvF1LQwhxmJe30eZ5%2F2CR%2BvIqFHY1ehand2AX%2F8HBreOGVLscqjM727OIBR1GlKIskAZpwHEMTRTUPaH6iRJ3pDC7jmkis0GE9T4%2BSyjWC6%2B8KS8%2FXQ3QVSm6fePN8LFYVCd7D7YxLWFNJGzoTBug9wQGXWLTUB85IwZnOhSLdjuP0aPzGYTh1bpLletmwUnvnHfGR4ZmVKXBcOnz6Neu%2FJx1ryIWZv1daeTT6M74CajdVGpqQM4x1Cb1FELaLTcu%2BzxcYGdgizrwa43QZOmX5bBrcFR4evIREZsA%2BPUjxqfFGFPxr0gAVat8nWW7WMeS6TuG1JrvYgvyMP2L%2FskGOqUBkudsLn%2FjeGlO7DD67fzcU0MnOkgo0nzdm4%2FWFFvv3fcMrKJ03qOKQWpVuD%2FNmyLc6L6DN3LsZhywGc8vCwqRdIbdZXXWZHKQubPuKhcaNF%2BlDK5P1erk2OzLHgd99a2P8CkFc609B6Su4FxVsDpbfDqsweQYRls1wEfH%2F02iKyPxNvXge0yo5HrCBZiUnWrXEZk9QZKuYA7efpFfRZ0y7AKUFbdA&X-Amz-Signature=bcc0cf32cbc39c3ac8049713c24ab21e23dc20169b0641400a1bd2400b35ba4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFUN65I%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCTguAmIeF2ydKudEY8IoqCSZKBEOnGDG3trf0TU2xyRwIhAP3fQ1K2t4xv7PlLs0siwNvPeRs9hU8anoJyGRX73Fe%2BKv8DCEUQABoMNjM3NDIzMTgzODA1IgwpjHwtEfYafVw8QW4q3AO%2Bfp6neS7kP8h%2BSiPI4GDeUMFLq6YoVu9C5GZr37Ps2gePRkJ6lAPtAxRNxIYnVDIGXeIvsAyM0CPW8erMh%2F3bibp%2BnuE%2BjjlqBIoChDHP4TIQJsNdUyVox%2BvTKXyJHSV0%2F3S7le9SmOFIeumaRjo85Jp8mNssJR7C65Cly5DHN%2FZVFBvJGDqSqdnTgAFzgqz720wMbqbrZ4KBfpU%2B9y0fZFn%2Fj0qt2dSWn7AqPP%2FbhIf9NDHBaiP3M3k16JRFIWkAEw25hJCYnA29roIWXucEO65MSVi9S4%2FJOYf2fVQNNVM377JPCSdpTreL9U%2FkSJS9Dc6CnzGYauU6gQPv4LikiVcI77YZGvXDH25MaMgL3lyN5sG4Qstsfsc9R9IjLqnTuULLYawTaMU%2FCsgtiVJvOcOS1ODK4SyP0r8wabAjeJ7gi%2ByJD7h76N%2FJRPLj%2FicFbQDiCwuoEMk1qklgM61qAvvNTtw6owVsH2KjxqKz8YdXhrXCdDtYvpq7MjuXoMiMvUgg2UGEdwYxxRAOjXEOFtMP3CT8NFjLh780ZuvHxcn2raA9hpq%2FJdNQtkt3XiI9Dt4%2FD0vUDAXG5TiFoRO0XmBm3V1vwY9x9LnSQ37nNUOBD8SfT8p6JE0DeDCVjP7JBjqkAVtDySE5ZN7NIve2vXA0BAgmexqfp3Y2SARP6MR5BNUi4R5doF%2FHILgV6kZ2e2fThX%2FBL6eJHXTPU%2F5RJktex0nLAbUgWvbWBeIOhe8nCokjtSdsDX1oPeT24dv%2B54MQiZ8X%2FSRfZqM8QDBUdmwUw2Ahm0VhPC5fAqX53KkEG59icX3v14%2BSEymrmTzxQHi%2BsuCFQWdIO3yQR6jMg8uLnjS4UEjb&X-Amz-Signature=f9bed866256d967d0484d81587f87690c06b749e21e1c030f0e3eba9d659572c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFUN65I%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCTguAmIeF2ydKudEY8IoqCSZKBEOnGDG3trf0TU2xyRwIhAP3fQ1K2t4xv7PlLs0siwNvPeRs9hU8anoJyGRX73Fe%2BKv8DCEUQABoMNjM3NDIzMTgzODA1IgwpjHwtEfYafVw8QW4q3AO%2Bfp6neS7kP8h%2BSiPI4GDeUMFLq6YoVu9C5GZr37Ps2gePRkJ6lAPtAxRNxIYnVDIGXeIvsAyM0CPW8erMh%2F3bibp%2BnuE%2BjjlqBIoChDHP4TIQJsNdUyVox%2BvTKXyJHSV0%2F3S7le9SmOFIeumaRjo85Jp8mNssJR7C65Cly5DHN%2FZVFBvJGDqSqdnTgAFzgqz720wMbqbrZ4KBfpU%2B9y0fZFn%2Fj0qt2dSWn7AqPP%2FbhIf9NDHBaiP3M3k16JRFIWkAEw25hJCYnA29roIWXucEO65MSVi9S4%2FJOYf2fVQNNVM377JPCSdpTreL9U%2FkSJS9Dc6CnzGYauU6gQPv4LikiVcI77YZGvXDH25MaMgL3lyN5sG4Qstsfsc9R9IjLqnTuULLYawTaMU%2FCsgtiVJvOcOS1ODK4SyP0r8wabAjeJ7gi%2ByJD7h76N%2FJRPLj%2FicFbQDiCwuoEMk1qklgM61qAvvNTtw6owVsH2KjxqKz8YdXhrXCdDtYvpq7MjuXoMiMvUgg2UGEdwYxxRAOjXEOFtMP3CT8NFjLh780ZuvHxcn2raA9hpq%2FJdNQtkt3XiI9Dt4%2FD0vUDAXG5TiFoRO0XmBm3V1vwY9x9LnSQ37nNUOBD8SfT8p6JE0DeDCVjP7JBjqkAVtDySE5ZN7NIve2vXA0BAgmexqfp3Y2SARP6MR5BNUi4R5doF%2FHILgV6kZ2e2fThX%2FBL6eJHXTPU%2F5RJktex0nLAbUgWvbWBeIOhe8nCokjtSdsDX1oPeT24dv%2B54MQiZ8X%2FSRfZqM8QDBUdmwUw2Ahm0VhPC5fAqX53KkEG59icX3v14%2BSEymrmTzxQHi%2BsuCFQWdIO3yQR6jMg8uLnjS4UEjb&X-Amz-Signature=88bb389eac70c2b847856c492ee74367c60daa37d1eeaf9e0d06fae188a5cf96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFUN65I%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCTguAmIeF2ydKudEY8IoqCSZKBEOnGDG3trf0TU2xyRwIhAP3fQ1K2t4xv7PlLs0siwNvPeRs9hU8anoJyGRX73Fe%2BKv8DCEUQABoMNjM3NDIzMTgzODA1IgwpjHwtEfYafVw8QW4q3AO%2Bfp6neS7kP8h%2BSiPI4GDeUMFLq6YoVu9C5GZr37Ps2gePRkJ6lAPtAxRNxIYnVDIGXeIvsAyM0CPW8erMh%2F3bibp%2BnuE%2BjjlqBIoChDHP4TIQJsNdUyVox%2BvTKXyJHSV0%2F3S7le9SmOFIeumaRjo85Jp8mNssJR7C65Cly5DHN%2FZVFBvJGDqSqdnTgAFzgqz720wMbqbrZ4KBfpU%2B9y0fZFn%2Fj0qt2dSWn7AqPP%2FbhIf9NDHBaiP3M3k16JRFIWkAEw25hJCYnA29roIWXucEO65MSVi9S4%2FJOYf2fVQNNVM377JPCSdpTreL9U%2FkSJS9Dc6CnzGYauU6gQPv4LikiVcI77YZGvXDH25MaMgL3lyN5sG4Qstsfsc9R9IjLqnTuULLYawTaMU%2FCsgtiVJvOcOS1ODK4SyP0r8wabAjeJ7gi%2ByJD7h76N%2FJRPLj%2FicFbQDiCwuoEMk1qklgM61qAvvNTtw6owVsH2KjxqKz8YdXhrXCdDtYvpq7MjuXoMiMvUgg2UGEdwYxxRAOjXEOFtMP3CT8NFjLh780ZuvHxcn2raA9hpq%2FJdNQtkt3XiI9Dt4%2FD0vUDAXG5TiFoRO0XmBm3V1vwY9x9LnSQ37nNUOBD8SfT8p6JE0DeDCVjP7JBjqkAVtDySE5ZN7NIve2vXA0BAgmexqfp3Y2SARP6MR5BNUi4R5doF%2FHILgV6kZ2e2fThX%2FBL6eJHXTPU%2F5RJktex0nLAbUgWvbWBeIOhe8nCokjtSdsDX1oPeT24dv%2B54MQiZ8X%2FSRfZqM8QDBUdmwUw2Ahm0VhPC5fAqX53KkEG59icX3v14%2BSEymrmTzxQHi%2BsuCFQWdIO3yQR6jMg8uLnjS4UEjb&X-Amz-Signature=a3167bbd8a3c0d50b3d355b85ba7fe9fa13d484206633f8a7a0b3f02eff81687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RROYO2X5%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBTkR2h22E%2Bl61T97YNYr6n2R1HgTOWLGPq7sWikbd8rAiAbNQp5hGsqJy3zjzE6OJWRjTumVxtNrdl2CXAxbgC4sCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM%2BpVWheA%2BvlDEYn72KtwDOKSf7XlcdvFS%2Fmbd%2B1y3e4t59V1C4JTKyp5mEjWudRaa42zVnJsIusUC6chBE5FRwC4VKEPkr4s5U92kAK0MKV9VgHBV%2F6Zb89xOWcfVO9yXcViwsHx5tadiJInaKqN1UPe0fCpN3mXQT0bU1RZiFDsY%2BArbh24PCjKyXmMsNSse%2BhMxQ9BtcMoRraQFCCpEr0L27KGSjcH3%2FK5IE5TJ4OIf7pVMUqNneNM2qz3XRTbggTENbf0GMIFhTYNsnhfsHAtWRjr7oZuNjNgtoK1osdWTWn%2BHpOJO2evPjAkvMq2gI7CS6ms6Qr7s3%2FgsQHvlWMjJstF%2BASl2Li0SdPBcFiyYeBvOWYQHsMLD68VhoSMTSDp35HU%2FmqddNDes5e73XgG8DjFvqw6MIWQaG2fp%2BASJSuLF%2FLp2MLKGnCz9Er%2FFySLsFTMa%2FRnJI0mHCQOCqceR0wQQ6G9MHdJEENGaHJfDnwbd%2BcElIEO8tI4rqSBKDJd%2BRLRAOEA9SQStO71oo6IruZP5nF%2B4Gnbq%2B1e7yEG8LxY2TO6TIDbe4ZZ3faMRREjoW09%2BcsGDMKCj3aTxjZZjsIAyRENrLtlhoSTigWErvbCRKSNTnXLPh31MzqgXlsjJDruxHt0YNe0w24v%2ByQY6pgE9hV%2BkVQhQxl%2BPc%2FxpNqu%2FYOCXkdnnniVf6GXImAxZWjFm81jmsYQSdm1uVjg2U4uHtgGP%2Bm3keRxGu8pyLuNg5qRfAd8BX1vO7rUMfCDGBWUzcitYMsSfBNAKNAK5jrnxHp%2F5iU%2FzOr2Z4q2ReZ4PSDPGJ7nP1LSbiZzIvkCp%2FvFQTtUdFBO8GcbtMZ0PcuXy1Nl2OL%2BVgdMLvuFjPtsACY2sdQsZ&X-Amz-Signature=8217e9cc76640891b420a4dee5dd6b1e12ce03975721298f567e1067cbc0ba9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RROYO2X5%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBTkR2h22E%2Bl61T97YNYr6n2R1HgTOWLGPq7sWikbd8rAiAbNQp5hGsqJy3zjzE6OJWRjTumVxtNrdl2CXAxbgC4sCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM%2BpVWheA%2BvlDEYn72KtwDOKSf7XlcdvFS%2Fmbd%2B1y3e4t59V1C4JTKyp5mEjWudRaa42zVnJsIusUC6chBE5FRwC4VKEPkr4s5U92kAK0MKV9VgHBV%2F6Zb89xOWcfVO9yXcViwsHx5tadiJInaKqN1UPe0fCpN3mXQT0bU1RZiFDsY%2BArbh24PCjKyXmMsNSse%2BhMxQ9BtcMoRraQFCCpEr0L27KGSjcH3%2FK5IE5TJ4OIf7pVMUqNneNM2qz3XRTbggTENbf0GMIFhTYNsnhfsHAtWRjr7oZuNjNgtoK1osdWTWn%2BHpOJO2evPjAkvMq2gI7CS6ms6Qr7s3%2FgsQHvlWMjJstF%2BASl2Li0SdPBcFiyYeBvOWYQHsMLD68VhoSMTSDp35HU%2FmqddNDes5e73XgG8DjFvqw6MIWQaG2fp%2BASJSuLF%2FLp2MLKGnCz9Er%2FFySLsFTMa%2FRnJI0mHCQOCqceR0wQQ6G9MHdJEENGaHJfDnwbd%2BcElIEO8tI4rqSBKDJd%2BRLRAOEA9SQStO71oo6IruZP5nF%2B4Gnbq%2B1e7yEG8LxY2TO6TIDbe4ZZ3faMRREjoW09%2BcsGDMKCj3aTxjZZjsIAyRENrLtlhoSTigWErvbCRKSNTnXLPh31MzqgXlsjJDruxHt0YNe0w24v%2ByQY6pgE9hV%2BkVQhQxl%2BPc%2FxpNqu%2FYOCXkdnnniVf6GXImAxZWjFm81jmsYQSdm1uVjg2U4uHtgGP%2Bm3keRxGu8pyLuNg5qRfAd8BX1vO7rUMfCDGBWUzcitYMsSfBNAKNAK5jrnxHp%2F5iU%2FzOr2Z4q2ReZ4PSDPGJ7nP1LSbiZzIvkCp%2FvFQTtUdFBO8GcbtMZ0PcuXy1Nl2OL%2BVgdMLvuFjPtsACY2sdQsZ&X-Amz-Signature=f3b1c06de8d5449d9e4ba5d3fc4c94e38b24feb9077151b05a808118e1b11988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLA3FR7D%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIB9PNFBV6beOfim0IzcM8PMEyfhkMUgI%2BBWCZ%2BmQ0DgyAiB3kmTyGyakughnwXgMeaSgrqlCcpZINbufVVls%2FzPJ%2BCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMEp3m8vsH3fgHPsDOKtwDYQTT6AY%2B%2Bg3WSJDWXKeu4asW6p4dTbiYopixX%2FaxK%2BpEUqY3wCwEEnahHUywy6eFpnhD%2FhEVBfH2JxRHL084oH2WlQeZpvafQX0rwsJjDE07nqNBT1WobHOxdla4h2xeESJjthLboWITHgAO%2FulVB9iOmWA391DSiXTVy%2FsajABWoA4IjmY1LbpL3CkZEw%2Fw9gnxtn5lscbG%2FwYxQW9ox%2FSqI7zj6EHvwM7U4GZ9UjDxuLMYVIPnEAnMz9lWBqwBG5IMFwdJdgUSAgEhi5RT6PGCUrUQ9f3XP3QLh935zOAcyl1QyuHm58IuhVmpeMY8HogQpBj%2FZdA7IZbTEHyDiB%2BhER4kQXqcSdCtbSi3zZ2T4I%2BW5SfK7jlXU9GXgtPDOgPEkY%2FbxW0frUGEe7XlKniwc%2BpfR4%2BHZop%2BcMVJOBI0g9khceKWyqUhc1qyk%2BzQP49C7Okq2FNeF0LvK4fKnuaKNBT%2F0kZocyKDMGKyM%2BJIuKk3oZCuWImLDYrXMg39knkf7BkGuASC7h6tECG0Hf3pH1iAtcZmRrLusmgQR7gL6QdC%2FdJFVMjRM6uF%2FtA%2F1d6X5DnnZd3Jugt2Ho5giTwAlzbJVO%2FyZtDRZ8ZLqdMIgRNbdHxmQ9tRs0Qw1Iv%2ByQY6pgGqGIf0wzHoMOSGtGfT6pVeD9JCKhiR3P%2B8wjEQKTE3IwZK7TQXxMKpnSdCqyNv5pY8ea6b773IqVq5gxZQBVwo8GJXAmMv9a51H4xGZ1H7v1zmlrobCTTWoNiJETD5p7xAfKnYMPPKnlSW1rs9GeRuNva7nBWTtXuTfjpWfV687BZmxOtxvSfVjVLVuTury8xOz%2BrhA8HSP7PmuRFhRDMuuzxqwINX&X-Amz-Signature=04acad8978136f4db929f1c685b16bf50aecc411c6959980ffe0e9a665bdf181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLA3FR7D%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIB9PNFBV6beOfim0IzcM8PMEyfhkMUgI%2BBWCZ%2BmQ0DgyAiB3kmTyGyakughnwXgMeaSgrqlCcpZINbufVVls%2FzPJ%2BCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMEp3m8vsH3fgHPsDOKtwDYQTT6AY%2B%2Bg3WSJDWXKeu4asW6p4dTbiYopixX%2FaxK%2BpEUqY3wCwEEnahHUywy6eFpnhD%2FhEVBfH2JxRHL084oH2WlQeZpvafQX0rwsJjDE07nqNBT1WobHOxdla4h2xeESJjthLboWITHgAO%2FulVB9iOmWA391DSiXTVy%2FsajABWoA4IjmY1LbpL3CkZEw%2Fw9gnxtn5lscbG%2FwYxQW9ox%2FSqI7zj6EHvwM7U4GZ9UjDxuLMYVIPnEAnMz9lWBqwBG5IMFwdJdgUSAgEhi5RT6PGCUrUQ9f3XP3QLh935zOAcyl1QyuHm58IuhVmpeMY8HogQpBj%2FZdA7IZbTEHyDiB%2BhER4kQXqcSdCtbSi3zZ2T4I%2BW5SfK7jlXU9GXgtPDOgPEkY%2FbxW0frUGEe7XlKniwc%2BpfR4%2BHZop%2BcMVJOBI0g9khceKWyqUhc1qyk%2BzQP49C7Okq2FNeF0LvK4fKnuaKNBT%2F0kZocyKDMGKyM%2BJIuKk3oZCuWImLDYrXMg39knkf7BkGuASC7h6tECG0Hf3pH1iAtcZmRrLusmgQR7gL6QdC%2FdJFVMjRM6uF%2FtA%2F1d6X5DnnZd3Jugt2Ho5giTwAlzbJVO%2FyZtDRZ8ZLqdMIgRNbdHxmQ9tRs0Qw1Iv%2ByQY6pgGqGIf0wzHoMOSGtGfT6pVeD9JCKhiR3P%2B8wjEQKTE3IwZK7TQXxMKpnSdCqyNv5pY8ea6b773IqVq5gxZQBVwo8GJXAmMv9a51H4xGZ1H7v1zmlrobCTTWoNiJETD5p7xAfKnYMPPKnlSW1rs9GeRuNva7nBWTtXuTfjpWfV687BZmxOtxvSfVjVLVuTury8xOz%2BrhA8HSP7PmuRFhRDMuuzxqwINX&X-Amz-Signature=462c58ef53976b3e9da0fe7d0d4e8dddb509143de36dcba9d4ce1870c2ba8b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLA3FR7D%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIB9PNFBV6beOfim0IzcM8PMEyfhkMUgI%2BBWCZ%2BmQ0DgyAiB3kmTyGyakughnwXgMeaSgrqlCcpZINbufVVls%2FzPJ%2BCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMEp3m8vsH3fgHPsDOKtwDYQTT6AY%2B%2Bg3WSJDWXKeu4asW6p4dTbiYopixX%2FaxK%2BpEUqY3wCwEEnahHUywy6eFpnhD%2FhEVBfH2JxRHL084oH2WlQeZpvafQX0rwsJjDE07nqNBT1WobHOxdla4h2xeESJjthLboWITHgAO%2FulVB9iOmWA391DSiXTVy%2FsajABWoA4IjmY1LbpL3CkZEw%2Fw9gnxtn5lscbG%2FwYxQW9ox%2FSqI7zj6EHvwM7U4GZ9UjDxuLMYVIPnEAnMz9lWBqwBG5IMFwdJdgUSAgEhi5RT6PGCUrUQ9f3XP3QLh935zOAcyl1QyuHm58IuhVmpeMY8HogQpBj%2FZdA7IZbTEHyDiB%2BhER4kQXqcSdCtbSi3zZ2T4I%2BW5SfK7jlXU9GXgtPDOgPEkY%2FbxW0frUGEe7XlKniwc%2BpfR4%2BHZop%2BcMVJOBI0g9khceKWyqUhc1qyk%2BzQP49C7Okq2FNeF0LvK4fKnuaKNBT%2F0kZocyKDMGKyM%2BJIuKk3oZCuWImLDYrXMg39knkf7BkGuASC7h6tECG0Hf3pH1iAtcZmRrLusmgQR7gL6QdC%2FdJFVMjRM6uF%2FtA%2F1d6X5DnnZd3Jugt2Ho5giTwAlzbJVO%2FyZtDRZ8ZLqdMIgRNbdHxmQ9tRs0Qw1Iv%2ByQY6pgGqGIf0wzHoMOSGtGfT6pVeD9JCKhiR3P%2B8wjEQKTE3IwZK7TQXxMKpnSdCqyNv5pY8ea6b773IqVq5gxZQBVwo8GJXAmMv9a51H4xGZ1H7v1zmlrobCTTWoNiJETD5p7xAfKnYMPPKnlSW1rs9GeRuNva7nBWTtXuTfjpWfV687BZmxOtxvSfVjVLVuTury8xOz%2BrhA8HSP7PmuRFhRDMuuzxqwINX&X-Amz-Signature=8b96180fc6764f1ada5000c7d349d7ac5991ba58a0cc205ce7c6d469a07aaa10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLA3FR7D%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIB9PNFBV6beOfim0IzcM8PMEyfhkMUgI%2BBWCZ%2BmQ0DgyAiB3kmTyGyakughnwXgMeaSgrqlCcpZINbufVVls%2FzPJ%2BCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMEp3m8vsH3fgHPsDOKtwDYQTT6AY%2B%2Bg3WSJDWXKeu4asW6p4dTbiYopixX%2FaxK%2BpEUqY3wCwEEnahHUywy6eFpnhD%2FhEVBfH2JxRHL084oH2WlQeZpvafQX0rwsJjDE07nqNBT1WobHOxdla4h2xeESJjthLboWITHgAO%2FulVB9iOmWA391DSiXTVy%2FsajABWoA4IjmY1LbpL3CkZEw%2Fw9gnxtn5lscbG%2FwYxQW9ox%2FSqI7zj6EHvwM7U4GZ9UjDxuLMYVIPnEAnMz9lWBqwBG5IMFwdJdgUSAgEhi5RT6PGCUrUQ9f3XP3QLh935zOAcyl1QyuHm58IuhVmpeMY8HogQpBj%2FZdA7IZbTEHyDiB%2BhER4kQXqcSdCtbSi3zZ2T4I%2BW5SfK7jlXU9GXgtPDOgPEkY%2FbxW0frUGEe7XlKniwc%2BpfR4%2BHZop%2BcMVJOBI0g9khceKWyqUhc1qyk%2BzQP49C7Okq2FNeF0LvK4fKnuaKNBT%2F0kZocyKDMGKyM%2BJIuKk3oZCuWImLDYrXMg39knkf7BkGuASC7h6tECG0Hf3pH1iAtcZmRrLusmgQR7gL6QdC%2FdJFVMjRM6uF%2FtA%2F1d6X5DnnZd3Jugt2Ho5giTwAlzbJVO%2FyZtDRZ8ZLqdMIgRNbdHxmQ9tRs0Qw1Iv%2ByQY6pgGqGIf0wzHoMOSGtGfT6pVeD9JCKhiR3P%2B8wjEQKTE3IwZK7TQXxMKpnSdCqyNv5pY8ea6b773IqVq5gxZQBVwo8GJXAmMv9a51H4xGZ1H7v1zmlrobCTTWoNiJETD5p7xAfKnYMPPKnlSW1rs9GeRuNva7nBWTtXuTfjpWfV687BZmxOtxvSfVjVLVuTury8xOz%2BrhA8HSP7PmuRFhRDMuuzxqwINX&X-Amz-Signature=ed3f6f74d028a107588f96dd9590d25c4c74b140ba2c68f75286c46409ae237d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLA3FR7D%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIB9PNFBV6beOfim0IzcM8PMEyfhkMUgI%2BBWCZ%2BmQ0DgyAiB3kmTyGyakughnwXgMeaSgrqlCcpZINbufVVls%2FzPJ%2BCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMEp3m8vsH3fgHPsDOKtwDYQTT6AY%2B%2Bg3WSJDWXKeu4asW6p4dTbiYopixX%2FaxK%2BpEUqY3wCwEEnahHUywy6eFpnhD%2FhEVBfH2JxRHL084oH2WlQeZpvafQX0rwsJjDE07nqNBT1WobHOxdla4h2xeESJjthLboWITHgAO%2FulVB9iOmWA391DSiXTVy%2FsajABWoA4IjmY1LbpL3CkZEw%2Fw9gnxtn5lscbG%2FwYxQW9ox%2FSqI7zj6EHvwM7U4GZ9UjDxuLMYVIPnEAnMz9lWBqwBG5IMFwdJdgUSAgEhi5RT6PGCUrUQ9f3XP3QLh935zOAcyl1QyuHm58IuhVmpeMY8HogQpBj%2FZdA7IZbTEHyDiB%2BhER4kQXqcSdCtbSi3zZ2T4I%2BW5SfK7jlXU9GXgtPDOgPEkY%2FbxW0frUGEe7XlKniwc%2BpfR4%2BHZop%2BcMVJOBI0g9khceKWyqUhc1qyk%2BzQP49C7Okq2FNeF0LvK4fKnuaKNBT%2F0kZocyKDMGKyM%2BJIuKk3oZCuWImLDYrXMg39knkf7BkGuASC7h6tECG0Hf3pH1iAtcZmRrLusmgQR7gL6QdC%2FdJFVMjRM6uF%2FtA%2F1d6X5DnnZd3Jugt2Ho5giTwAlzbJVO%2FyZtDRZ8ZLqdMIgRNbdHxmQ9tRs0Qw1Iv%2ByQY6pgGqGIf0wzHoMOSGtGfT6pVeD9JCKhiR3P%2B8wjEQKTE3IwZK7TQXxMKpnSdCqyNv5pY8ea6b773IqVq5gxZQBVwo8GJXAmMv9a51H4xGZ1H7v1zmlrobCTTWoNiJETD5p7xAfKnYMPPKnlSW1rs9GeRuNva7nBWTtXuTfjpWfV687BZmxOtxvSfVjVLVuTury8xOz%2BrhA8HSP7PmuRFhRDMuuzxqwINX&X-Amz-Signature=eb08bfa6f9b0bcad87739afbb92e4a67ea0675369d5d37ce0fa2745aee913862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOKYZPHV%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBtxKnZn2DyqHwB%2FZ6fdkXK9IisLBSNA4Hkc36Qk%2BE2EAiEAuV1ZQwk1RXQe5fLiNsEEicCGhAn6HhDyu2HHMz7dS9Uq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDL3bkQROOjUjckfEEyrcAzZMcXeYc69oVVICl0xzndX2q1jj%2FRXrcRCmnyDTS3qbII0godb3eulIYy8v1lieuGb5c9ahgEWg0zeGwdwIRFTBXJq%2BO2Ht4Vp5SKU1ZywL534%2BKUi3W06rop4TdGt0C%2BcT9XuPPV1bfV1RsWg3IZk3qTqamUo%2BZpJUQiVlXqHUvN2qmoGm%2FdpUvGD0iVMLW%2FeHxDj8%2FrzZfGIWY7rNOmxZf8PutQcouz7lN4IotHY7gGIvRaxRzxLN0Dg%2BfuSsC9Do6xdRWYN3h5GRJEdMLZOvO7Fyduu5axe8yW3meOnSWfiJAcX7sSuy2jEvMqeDxhvGqABofNGp%2FT0CsMpppNJWCozPQIgTnvE5GNf2Mo9hfqnx6OZtMOmAzMPankQEn%2BeFWTbiUNXFjLf89ImWPqMrygVW4s7%2B04ongxgp0YMy1lLdS4m1kxGhQGk1SKkXIC9hQNUdvW2LmgZHlsU0xGmzSmOAiQm5Z9OVNb7QaJ0L7s6DGLxhoL66srtUJ6OlatN%2FXX7ghm9BsmSh7%2B9eV8DCpfQguQKx5iCVoeGoZjtQpYEdRVVC9CRnY%2BM2ZSw2%2Bv%2Bf68B7NAjAR7b38vHODItsv7uDtt%2FJFY0XUvjumEyeISuKL6tJfbkfm9fyMK6M%2FskGOqUBxbmoI0Qj3ABmNYTPgYf1J4uhU%2FIT2DAIwncUR9%2FynDuiuN1%2B%2BTPuzC0Tjd8FyC7dw2RipgzJBoIndOsGVN%2B8Nf2g687P%2FKRHaMSrWCeFad4iN9IiniVVjaOPKYDUnd5VEv7zMTabpNlEeZLSaE9QQXIpVk18IFj3rlkOnIF21cOlECk00Gaa3ovGyRDLLvhioOOr%2BVRc0vYmkx4BiXNcvrFFpvv%2F&X-Amz-Signature=aab443f540e47b791861b02d072a55655ea3be91fb321a8a1e4cf6768bfdfe95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

