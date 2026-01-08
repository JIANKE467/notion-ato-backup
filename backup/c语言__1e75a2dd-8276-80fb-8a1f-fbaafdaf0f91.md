
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YFNCT5S%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2wArT82HByMiy7QPqHl0exOyCYPoYrvK7ph7tBG349AiEA%2FtlVdpRCTNMTS2rOrFRRLtLU1u1KvTdF5qAPiilqO5cqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0K8ef9ov8vzBazeSrcA5%2BZwJT%2FJ0HGBgW%2BEK0MrNRaiquE1lqZSKG85pcgStWk6kHIasV37h33yslXtQ28iDTnC%2BxzDdjKrciW5wMujHxn5IqGZm21tYwUZ4xB6hrHcHAMsHQp8MnuVIwlCD7GFoOssqiy%2BMjXc%2BcxJ5%2BIW6GFpVjqczxu%2F48WJgTFr40QzL4RFprpDL%2Fj3gciKrGPGPuauEww6KlpQkaS4XZI%2FgwuHQwoUJIS2b9rmbAkStcwJHXVWBCIPOQ%2B%2FMrYZ6bvFF3WFTOx%2BFuwDETBbNQ0%2Fg4j1p6vWEeI%2BSUS6v60uJNAZ6N%2F4vYkKzNefD9cedjSeirt4ylPEWwCVX7NQ6aHzl10sEgS1U0li7JZmgFnc%2BgTBbwIATGrdhBuG0Zt62tYj7sMeFdXbFzgg1%2FstNyYjXohOyfAoBnoqI9%2Fs6Tkwt0Pr0vRyWJspylnaqXp6qQ3hEA5qm5pOhZ2H8SK8n02FRPngrLTGZm5rLPWfiBvcASzcf1%2FC%2F5lJ%2BuM53MKWbQPguHbe1jVlM%2FpeZzCkBgGL%2BFLG1iyc4%2B3JBHThgMOkOe6m0QbRhwI7AdOeqHaQmryCkmQkDcP4XcT%2FJqD5zAtfpDTvnw%2FYFuBX%2FFZq40tps1InJYn96zRlqnvaRMkMODP%2FMoGOqUBmUUiomOuxkrQMjYsrfeUTeuhd3hKgnLGHfBUzwkiZINh9cLtfLp5CJDiUl9JAbbh6JoxOMAywvj5MJxk8S7rFYysfH9HJ9csxH4GLFL7zWZemxKtQW4WLfTCA9ONPBA3KZsH4qtQ8q9GUqFtsy6ypPa%2BYrwfhqnWj%2B1qAdlw3e7KCs44Gz7nNmgSeSAiVuhXdBwLRR8x6g1qQRBHIDTL4IMm1qNF&X-Amz-Signature=8a65f302f243a014dcc1943f22979b4bc1c27aa96c0fca838eebbed2d751fa7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LNLRUVZ%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyfUQuhFepmq6lR3PVa0VvF5cEPl5Cifipkm0%2Fz5kzfAIgOer5NYKC3Pr7oIJcv0G%2F2X714unJV1UA4duMJxnG9tEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORU2iUXkPLUNfzINircAzApwG6qulZ8ecdz%2BzrSbeyZjAmCRconYQCgms9IwGgJqKtKiO%2F%2BxzFxZhq4qfwb8Qj9VPZglAXbSdJfIoXPFchN3TQLGcQK7gynN7PHikyVagA1WJk6YNjWFTLlX2wPThVGjq3qWnmVvFyQVh4V5vhWWrZu2eX5j9N%2FMgyukKEvg%2Bs5bIDdlx2oHhsvXhQAtx1DDIW217iL1C4qfez77k0rgUbhndmoK8MvhqlasOQjBopqdvmn86q1ycNx7Y0BzeksvkGWYpaAq%2FOeVIhw%2FlYpk3EZxF1XfTtHafm2nDjZOA2Xh%2FVW69xbSbfZAeefNuMXK%2BPQ3yNpEW9WAPcGglSdFdDwHYQc5PiUrXtQ%2B1Pc9BiitlwMQN%2FKkmBzI4umsq0wrVcx%2BSc4u7RyGc3m8cPXZi6QRfG2RQ%2BU5MRLDZJ0u33irP%2BT9e6fLNKadQmLGMw4i%2F1Ml38NLQc%2BtUyRj3NbTyoCeY0cbgRJPIviRVNtLag4ruPDx9b3GrOVUGqeI%2F1sD5ox22KhSVytPfRVKwxzATTUJc0Eve14tj0l00kT62mVKpcBupW9Z0IMAH7b%2BIX6ZlPVbOGZPhjofPtgmKtufqxli%2F9opAdFAd928vmvlaaHqdCALPU1WGWXMPjP%2FMoGOqUBFXze%2BB1HtKToSggaI137VFMyB%2Bl3kVCTV5JEcdhQn8n4yd%2BPnJe7nkfxiIaxA0V8EgNTUFP3UD5HtbWMR2MOtgvzh7n6ny%2FO68oNB2Pivlhx8Q5sySs0pZDMpCnwRazq5QfKxpTjkw8R1JvflsDDI%2BuSyOJXzBhrmGaHD7yFsYXnqp9dMz6GDu2HOGolK03YkyRGqmSXmSpDzLI6OEta%2FwTMH5n%2F&X-Amz-Signature=3ac54e82b660275314e961614ec52f22baf945443772ba02dc68dbbb399979ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LNLRUVZ%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyfUQuhFepmq6lR3PVa0VvF5cEPl5Cifipkm0%2Fz5kzfAIgOer5NYKC3Pr7oIJcv0G%2F2X714unJV1UA4duMJxnG9tEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORU2iUXkPLUNfzINircAzApwG6qulZ8ecdz%2BzrSbeyZjAmCRconYQCgms9IwGgJqKtKiO%2F%2BxzFxZhq4qfwb8Qj9VPZglAXbSdJfIoXPFchN3TQLGcQK7gynN7PHikyVagA1WJk6YNjWFTLlX2wPThVGjq3qWnmVvFyQVh4V5vhWWrZu2eX5j9N%2FMgyukKEvg%2Bs5bIDdlx2oHhsvXhQAtx1DDIW217iL1C4qfez77k0rgUbhndmoK8MvhqlasOQjBopqdvmn86q1ycNx7Y0BzeksvkGWYpaAq%2FOeVIhw%2FlYpk3EZxF1XfTtHafm2nDjZOA2Xh%2FVW69xbSbfZAeefNuMXK%2BPQ3yNpEW9WAPcGglSdFdDwHYQc5PiUrXtQ%2B1Pc9BiitlwMQN%2FKkmBzI4umsq0wrVcx%2BSc4u7RyGc3m8cPXZi6QRfG2RQ%2BU5MRLDZJ0u33irP%2BT9e6fLNKadQmLGMw4i%2F1Ml38NLQc%2BtUyRj3NbTyoCeY0cbgRJPIviRVNtLag4ruPDx9b3GrOVUGqeI%2F1sD5ox22KhSVytPfRVKwxzATTUJc0Eve14tj0l00kT62mVKpcBupW9Z0IMAH7b%2BIX6ZlPVbOGZPhjofPtgmKtufqxli%2F9opAdFAd928vmvlaaHqdCALPU1WGWXMPjP%2FMoGOqUBFXze%2BB1HtKToSggaI137VFMyB%2Bl3kVCTV5JEcdhQn8n4yd%2BPnJe7nkfxiIaxA0V8EgNTUFP3UD5HtbWMR2MOtgvzh7n6ny%2FO68oNB2Pivlhx8Q5sySs0pZDMpCnwRazq5QfKxpTjkw8R1JvflsDDI%2BuSyOJXzBhrmGaHD7yFsYXnqp9dMz6GDu2HOGolK03YkyRGqmSXmSpDzLI6OEta%2FwTMH5n%2F&X-Amz-Signature=834a3c7518a89202b871046f4470fd30f593535483a59c1351b53a5d9bf4fa72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKO5V4XG%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKdKeHihVMPKE9goRTR3k8ixFU7RnrJbWZ1hvmuWKWqQIgbB0qq%2FV3wci%2FkRiA2TtsdgSQ9tC8RhxY9KiakHAyniQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLet29pdtoWeTJdJ4CrcA%2Bc5llAv%2BB7f2X3b8Lz0NIFV1YaLRA2prrtnC1wqmtf18u9btvh5cenjxfvaZKXt6Pifukf6i3W1efJzk3V1VfH%2BIaw8uDpTLTwj34K%2FaCLDLu%2FNgPH9yQ5NjHgiY15C1Fl36dhiS3IkyEVdGtOHe9LD6SvHUl5KWIk6mP3J7fi%2BvMdP%2FzLCFsib2d3WwN1NyCxNtwp7YH0NLS4rztCEgJ2WYVxuTzO9u3jWBb1McNYjdGoilu%2FfY%2Fm%2BWqieBwpoOZAQ%2Fu7cO%2BcPW942UW142jD69P4dtXIpnCUxLAxvA2L1%2F%2FquPG9MknW4SGU2nisboxd5sutxvIiO7fJ1DFY16b%2BDHFF%2Fcx%2F5AfJZIbL8j3oRcxOqEmOyG9Gc2g5dQ2JTjVNbsmsDJUGH48m2iOSFXoSR0KVtlyLLE0JXs9c%2BVOHbQTvfLc%2BhM4JbDYmuP41HxBE2y4STSpBIZcXhZxQVuFwwBMM1hbNdzgQp0PrcXss9nH0eCE%2Fbm8OSBc7mIgRBTu%2FZA7RS1YboMDBsJv%2FS90%2B3mKFYWU67Rlvt1kVzaPP2Vw6nTT6Ly68FfT0THEuGWBL4vCLspu%2BVn8Hu30RYvlEFP%2Bu0GzL0Cwoy29CGo0pZ0UFbcDSU227FCIGwMPzO%2FMoGOqUBEKd9YFDdQlPqkp%2Fivzu%2BeoMxry7Fcb7%2FVgNolfhBn9TyuC2QYkbgKrElsJH7O1W3EGNr8ivoTVE%2F9ylXgiXSQDDZ1%2FQz0U8BSSFKi46i0JRmibiPWsjVxVRWqt6r2m6oKrrqT5d5Zi7u%2FHmf48nzqDtmqGGENoOjcDmqg%2FP61hHrcDS5VofHoiyJQtg3tG1DlDQ%2FPTW777Aq602GIqFJz0h9abTu&X-Amz-Signature=7958c56269de759e85f087612c33202dc5242c9ef941dad32d6ddd240d20b4e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKO5V4XG%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKdKeHihVMPKE9goRTR3k8ixFU7RnrJbWZ1hvmuWKWqQIgbB0qq%2FV3wci%2FkRiA2TtsdgSQ9tC8RhxY9KiakHAyniQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLet29pdtoWeTJdJ4CrcA%2Bc5llAv%2BB7f2X3b8Lz0NIFV1YaLRA2prrtnC1wqmtf18u9btvh5cenjxfvaZKXt6Pifukf6i3W1efJzk3V1VfH%2BIaw8uDpTLTwj34K%2FaCLDLu%2FNgPH9yQ5NjHgiY15C1Fl36dhiS3IkyEVdGtOHe9LD6SvHUl5KWIk6mP3J7fi%2BvMdP%2FzLCFsib2d3WwN1NyCxNtwp7YH0NLS4rztCEgJ2WYVxuTzO9u3jWBb1McNYjdGoilu%2FfY%2Fm%2BWqieBwpoOZAQ%2Fu7cO%2BcPW942UW142jD69P4dtXIpnCUxLAxvA2L1%2F%2FquPG9MknW4SGU2nisboxd5sutxvIiO7fJ1DFY16b%2BDHFF%2Fcx%2F5AfJZIbL8j3oRcxOqEmOyG9Gc2g5dQ2JTjVNbsmsDJUGH48m2iOSFXoSR0KVtlyLLE0JXs9c%2BVOHbQTvfLc%2BhM4JbDYmuP41HxBE2y4STSpBIZcXhZxQVuFwwBMM1hbNdzgQp0PrcXss9nH0eCE%2Fbm8OSBc7mIgRBTu%2FZA7RS1YboMDBsJv%2FS90%2B3mKFYWU67Rlvt1kVzaPP2Vw6nTT6Ly68FfT0THEuGWBL4vCLspu%2BVn8Hu30RYvlEFP%2Bu0GzL0Cwoy29CGo0pZ0UFbcDSU227FCIGwMPzO%2FMoGOqUBEKd9YFDdQlPqkp%2Fivzu%2BeoMxry7Fcb7%2FVgNolfhBn9TyuC2QYkbgKrElsJH7O1W3EGNr8ivoTVE%2F9ylXgiXSQDDZ1%2FQz0U8BSSFKi46i0JRmibiPWsjVxVRWqt6r2m6oKrrqT5d5Zi7u%2FHmf48nzqDtmqGGENoOjcDmqg%2FP61hHrcDS5VofHoiyJQtg3tG1DlDQ%2FPTW777Aq602GIqFJz0h9abTu&X-Amz-Signature=9291e8d293f0553f17b1b99b562972661bc3379f6ccfc424a1eeac1e8c313f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKO5V4XG%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKdKeHihVMPKE9goRTR3k8ixFU7RnrJbWZ1hvmuWKWqQIgbB0qq%2FV3wci%2FkRiA2TtsdgSQ9tC8RhxY9KiakHAyniQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLet29pdtoWeTJdJ4CrcA%2Bc5llAv%2BB7f2X3b8Lz0NIFV1YaLRA2prrtnC1wqmtf18u9btvh5cenjxfvaZKXt6Pifukf6i3W1efJzk3V1VfH%2BIaw8uDpTLTwj34K%2FaCLDLu%2FNgPH9yQ5NjHgiY15C1Fl36dhiS3IkyEVdGtOHe9LD6SvHUl5KWIk6mP3J7fi%2BvMdP%2FzLCFsib2d3WwN1NyCxNtwp7YH0NLS4rztCEgJ2WYVxuTzO9u3jWBb1McNYjdGoilu%2FfY%2Fm%2BWqieBwpoOZAQ%2Fu7cO%2BcPW942UW142jD69P4dtXIpnCUxLAxvA2L1%2F%2FquPG9MknW4SGU2nisboxd5sutxvIiO7fJ1DFY16b%2BDHFF%2Fcx%2F5AfJZIbL8j3oRcxOqEmOyG9Gc2g5dQ2JTjVNbsmsDJUGH48m2iOSFXoSR0KVtlyLLE0JXs9c%2BVOHbQTvfLc%2BhM4JbDYmuP41HxBE2y4STSpBIZcXhZxQVuFwwBMM1hbNdzgQp0PrcXss9nH0eCE%2Fbm8OSBc7mIgRBTu%2FZA7RS1YboMDBsJv%2FS90%2B3mKFYWU67Rlvt1kVzaPP2Vw6nTT6Ly68FfT0THEuGWBL4vCLspu%2BVn8Hu30RYvlEFP%2Bu0GzL0Cwoy29CGo0pZ0UFbcDSU227FCIGwMPzO%2FMoGOqUBEKd9YFDdQlPqkp%2Fivzu%2BeoMxry7Fcb7%2FVgNolfhBn9TyuC2QYkbgKrElsJH7O1W3EGNr8ivoTVE%2F9ylXgiXSQDDZ1%2FQz0U8BSSFKi46i0JRmibiPWsjVxVRWqt6r2m6oKrrqT5d5Zi7u%2FHmf48nzqDtmqGGENoOjcDmqg%2FP61hHrcDS5VofHoiyJQtg3tG1DlDQ%2FPTW777Aq602GIqFJz0h9abTu&X-Amz-Signature=85e7369e75f3828ab3b0c73a7fb3cb2a01a18677147e4f02202f3752c8e2902f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKO5V4XG%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKdKeHihVMPKE9goRTR3k8ixFU7RnrJbWZ1hvmuWKWqQIgbB0qq%2FV3wci%2FkRiA2TtsdgSQ9tC8RhxY9KiakHAyniQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLet29pdtoWeTJdJ4CrcA%2Bc5llAv%2BB7f2X3b8Lz0NIFV1YaLRA2prrtnC1wqmtf18u9btvh5cenjxfvaZKXt6Pifukf6i3W1efJzk3V1VfH%2BIaw8uDpTLTwj34K%2FaCLDLu%2FNgPH9yQ5NjHgiY15C1Fl36dhiS3IkyEVdGtOHe9LD6SvHUl5KWIk6mP3J7fi%2BvMdP%2FzLCFsib2d3WwN1NyCxNtwp7YH0NLS4rztCEgJ2WYVxuTzO9u3jWBb1McNYjdGoilu%2FfY%2Fm%2BWqieBwpoOZAQ%2Fu7cO%2BcPW942UW142jD69P4dtXIpnCUxLAxvA2L1%2F%2FquPG9MknW4SGU2nisboxd5sutxvIiO7fJ1DFY16b%2BDHFF%2Fcx%2F5AfJZIbL8j3oRcxOqEmOyG9Gc2g5dQ2JTjVNbsmsDJUGH48m2iOSFXoSR0KVtlyLLE0JXs9c%2BVOHbQTvfLc%2BhM4JbDYmuP41HxBE2y4STSpBIZcXhZxQVuFwwBMM1hbNdzgQp0PrcXss9nH0eCE%2Fbm8OSBc7mIgRBTu%2FZA7RS1YboMDBsJv%2FS90%2B3mKFYWU67Rlvt1kVzaPP2Vw6nTT6Ly68FfT0THEuGWBL4vCLspu%2BVn8Hu30RYvlEFP%2Bu0GzL0Cwoy29CGo0pZ0UFbcDSU227FCIGwMPzO%2FMoGOqUBEKd9YFDdQlPqkp%2Fivzu%2BeoMxry7Fcb7%2FVgNolfhBn9TyuC2QYkbgKrElsJH7O1W3EGNr8ivoTVE%2F9ylXgiXSQDDZ1%2FQz0U8BSSFKi46i0JRmibiPWsjVxVRWqt6r2m6oKrrqT5d5Zi7u%2FHmf48nzqDtmqGGENoOjcDmqg%2FP61hHrcDS5VofHoiyJQtg3tG1DlDQ%2FPTW777Aq602GIqFJz0h9abTu&X-Amz-Signature=0f43c6a32ddf5ce11eb4b282ad0b74523896a95cfa9a6f6335317ab54e28c791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKO5V4XG%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKdKeHihVMPKE9goRTR3k8ixFU7RnrJbWZ1hvmuWKWqQIgbB0qq%2FV3wci%2FkRiA2TtsdgSQ9tC8RhxY9KiakHAyniQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLet29pdtoWeTJdJ4CrcA%2Bc5llAv%2BB7f2X3b8Lz0NIFV1YaLRA2prrtnC1wqmtf18u9btvh5cenjxfvaZKXt6Pifukf6i3W1efJzk3V1VfH%2BIaw8uDpTLTwj34K%2FaCLDLu%2FNgPH9yQ5NjHgiY15C1Fl36dhiS3IkyEVdGtOHe9LD6SvHUl5KWIk6mP3J7fi%2BvMdP%2FzLCFsib2d3WwN1NyCxNtwp7YH0NLS4rztCEgJ2WYVxuTzO9u3jWBb1McNYjdGoilu%2FfY%2Fm%2BWqieBwpoOZAQ%2Fu7cO%2BcPW942UW142jD69P4dtXIpnCUxLAxvA2L1%2F%2FquPG9MknW4SGU2nisboxd5sutxvIiO7fJ1DFY16b%2BDHFF%2Fcx%2F5AfJZIbL8j3oRcxOqEmOyG9Gc2g5dQ2JTjVNbsmsDJUGH48m2iOSFXoSR0KVtlyLLE0JXs9c%2BVOHbQTvfLc%2BhM4JbDYmuP41HxBE2y4STSpBIZcXhZxQVuFwwBMM1hbNdzgQp0PrcXss9nH0eCE%2Fbm8OSBc7mIgRBTu%2FZA7RS1YboMDBsJv%2FS90%2B3mKFYWU67Rlvt1kVzaPP2Vw6nTT6Ly68FfT0THEuGWBL4vCLspu%2BVn8Hu30RYvlEFP%2Bu0GzL0Cwoy29CGo0pZ0UFbcDSU227FCIGwMPzO%2FMoGOqUBEKd9YFDdQlPqkp%2Fivzu%2BeoMxry7Fcb7%2FVgNolfhBn9TyuC2QYkbgKrElsJH7O1W3EGNr8ivoTVE%2F9ylXgiXSQDDZ1%2FQz0U8BSSFKi46i0JRmibiPWsjVxVRWqt6r2m6oKrrqT5d5Zi7u%2FHmf48nzqDtmqGGENoOjcDmqg%2FP61hHrcDS5VofHoiyJQtg3tG1DlDQ%2FPTW777Aq602GIqFJz0h9abTu&X-Amz-Signature=4fe5dd78e6efeceb3405760bd0ea14e1ff9aeaa5cb30f765d95ee6a34e841a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKO5V4XG%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKdKeHihVMPKE9goRTR3k8ixFU7RnrJbWZ1hvmuWKWqQIgbB0qq%2FV3wci%2FkRiA2TtsdgSQ9tC8RhxY9KiakHAyniQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLet29pdtoWeTJdJ4CrcA%2Bc5llAv%2BB7f2X3b8Lz0NIFV1YaLRA2prrtnC1wqmtf18u9btvh5cenjxfvaZKXt6Pifukf6i3W1efJzk3V1VfH%2BIaw8uDpTLTwj34K%2FaCLDLu%2FNgPH9yQ5NjHgiY15C1Fl36dhiS3IkyEVdGtOHe9LD6SvHUl5KWIk6mP3J7fi%2BvMdP%2FzLCFsib2d3WwN1NyCxNtwp7YH0NLS4rztCEgJ2WYVxuTzO9u3jWBb1McNYjdGoilu%2FfY%2Fm%2BWqieBwpoOZAQ%2Fu7cO%2BcPW942UW142jD69P4dtXIpnCUxLAxvA2L1%2F%2FquPG9MknW4SGU2nisboxd5sutxvIiO7fJ1DFY16b%2BDHFF%2Fcx%2F5AfJZIbL8j3oRcxOqEmOyG9Gc2g5dQ2JTjVNbsmsDJUGH48m2iOSFXoSR0KVtlyLLE0JXs9c%2BVOHbQTvfLc%2BhM4JbDYmuP41HxBE2y4STSpBIZcXhZxQVuFwwBMM1hbNdzgQp0PrcXss9nH0eCE%2Fbm8OSBc7mIgRBTu%2FZA7RS1YboMDBsJv%2FS90%2B3mKFYWU67Rlvt1kVzaPP2Vw6nTT6Ly68FfT0THEuGWBL4vCLspu%2BVn8Hu30RYvlEFP%2Bu0GzL0Cwoy29CGo0pZ0UFbcDSU227FCIGwMPzO%2FMoGOqUBEKd9YFDdQlPqkp%2Fivzu%2BeoMxry7Fcb7%2FVgNolfhBn9TyuC2QYkbgKrElsJH7O1W3EGNr8ivoTVE%2F9ylXgiXSQDDZ1%2FQz0U8BSSFKi46i0JRmibiPWsjVxVRWqt6r2m6oKrrqT5d5Zi7u%2FHmf48nzqDtmqGGENoOjcDmqg%2FP61hHrcDS5VofHoiyJQtg3tG1DlDQ%2FPTW777Aq602GIqFJz0h9abTu&X-Amz-Signature=338d28aba80c20d9a4a20d88743d53352dbb4986c2500389741f8556f5d2bf02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKO5V4XG%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKdKeHihVMPKE9goRTR3k8ixFU7RnrJbWZ1hvmuWKWqQIgbB0qq%2FV3wci%2FkRiA2TtsdgSQ9tC8RhxY9KiakHAyniQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLet29pdtoWeTJdJ4CrcA%2Bc5llAv%2BB7f2X3b8Lz0NIFV1YaLRA2prrtnC1wqmtf18u9btvh5cenjxfvaZKXt6Pifukf6i3W1efJzk3V1VfH%2BIaw8uDpTLTwj34K%2FaCLDLu%2FNgPH9yQ5NjHgiY15C1Fl36dhiS3IkyEVdGtOHe9LD6SvHUl5KWIk6mP3J7fi%2BvMdP%2FzLCFsib2d3WwN1NyCxNtwp7YH0NLS4rztCEgJ2WYVxuTzO9u3jWBb1McNYjdGoilu%2FfY%2Fm%2BWqieBwpoOZAQ%2Fu7cO%2BcPW942UW142jD69P4dtXIpnCUxLAxvA2L1%2F%2FquPG9MknW4SGU2nisboxd5sutxvIiO7fJ1DFY16b%2BDHFF%2Fcx%2F5AfJZIbL8j3oRcxOqEmOyG9Gc2g5dQ2JTjVNbsmsDJUGH48m2iOSFXoSR0KVtlyLLE0JXs9c%2BVOHbQTvfLc%2BhM4JbDYmuP41HxBE2y4STSpBIZcXhZxQVuFwwBMM1hbNdzgQp0PrcXss9nH0eCE%2Fbm8OSBc7mIgRBTu%2FZA7RS1YboMDBsJv%2FS90%2B3mKFYWU67Rlvt1kVzaPP2Vw6nTT6Ly68FfT0THEuGWBL4vCLspu%2BVn8Hu30RYvlEFP%2Bu0GzL0Cwoy29CGo0pZ0UFbcDSU227FCIGwMPzO%2FMoGOqUBEKd9YFDdQlPqkp%2Fivzu%2BeoMxry7Fcb7%2FVgNolfhBn9TyuC2QYkbgKrElsJH7O1W3EGNr8ivoTVE%2F9ylXgiXSQDDZ1%2FQz0U8BSSFKi46i0JRmibiPWsjVxVRWqt6r2m6oKrrqT5d5Zi7u%2FHmf48nzqDtmqGGENoOjcDmqg%2FP61hHrcDS5VofHoiyJQtg3tG1DlDQ%2FPTW777Aq602GIqFJz0h9abTu&X-Amz-Signature=add918edef2708e185cfd358352105a41067053d7d638462a69217ca759cdcab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQBFCEHJ%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw3fdMRdpG0Wt7TEBi5WmTirydXfs1Y9aw4lmuiDDk4wIgaJH9nNz9%2FEYZYN3%2F3jburXwy9T%2FHM6n3zdZRh64kV7MqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjoq2utFQj4qfcWdSrcAw1hnnNgA7s%2F5oLxDEnHRvfcOv1jeOwVKZcTOWrAmsEKAkqEO2OKT8IPf%2BI6IONU46ynDpBixyeGFGWJAEe1lFdOJiuNN5Wlh9cqSjVLnRZ61vAfu7i8FFxhunqkQgLgRQGGCuzugLD1ncnwwNhhz4COGuNYz%2FzKICjNF3AW4fDmQ8O%2FxtNbpGbeZipl7rTEPZ9x3tH4xfPrnoB8bDFW8TPVfVKmpDcsikO2zIkyMvVbbsK5gwp1Cjb9xlBIpIBXGJevoptHX%2FtLCOHc4haX0J%2FkzJhVmmQZ19zCYZotKlpyN9sYrXZupR3d7AUoh9sKRk1dSk3C0rpQMh8rFGbkwRXCVjZqTvRev79LM4nCQHTxZcqxZMOoFwjaglZtbebyYOpCtyauALzt9TbBc%2Bgr8%2BDApIGjK6ACFNqmOhk84Ig9uE%2F9mBmu8uivagMoqYJRb7h1mtEWVEssx9TixDtQ7TOlf7Vt7wPPicO8mzUFTpDZFa1B535nTzaINtPSfuJYUeWjkH%2BMhg9WViuoxqRelQruYbFbR%2BhmKbWxm6wo8qhVdyHh5ikouEUeigi4Bmx%2F2JSe93GgSxtP7xLKRB%2B1xV5WeSGqJEC7kryE0A7sw0h%2BgZvWhGOOqd5NKFE9MJrP%2FMoGOqUBNX%2BdtP5BEZVEW%2B4kZSiACpXN0Vxw9s%2Fu2R0hboEsZfqh%2F0UskXUSIhx6bShI4WR2arrnFcj5xWB76uS8BKnNj8H23s6kZcQMK7FTtmOaYdSXxIzwBli08%2BPz%2FLAeT8rsSOAING7EXjU5bhIOpT17NZl8ES29LaRNVpy5NQx1QWILP6%2BoXJABng%2BAGe%2BVGMNWEyqVWYtlABlTEiavgJsS6Vm4vEMJ&X-Amz-Signature=9bdbefc2e2bc239e72f9bd41eeb66668c477db468dbbc1b5dc6a0bce52caa40f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQBFCEHJ%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw3fdMRdpG0Wt7TEBi5WmTirydXfs1Y9aw4lmuiDDk4wIgaJH9nNz9%2FEYZYN3%2F3jburXwy9T%2FHM6n3zdZRh64kV7MqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjoq2utFQj4qfcWdSrcAw1hnnNgA7s%2F5oLxDEnHRvfcOv1jeOwVKZcTOWrAmsEKAkqEO2OKT8IPf%2BI6IONU46ynDpBixyeGFGWJAEe1lFdOJiuNN5Wlh9cqSjVLnRZ61vAfu7i8FFxhunqkQgLgRQGGCuzugLD1ncnwwNhhz4COGuNYz%2FzKICjNF3AW4fDmQ8O%2FxtNbpGbeZipl7rTEPZ9x3tH4xfPrnoB8bDFW8TPVfVKmpDcsikO2zIkyMvVbbsK5gwp1Cjb9xlBIpIBXGJevoptHX%2FtLCOHc4haX0J%2FkzJhVmmQZ19zCYZotKlpyN9sYrXZupR3d7AUoh9sKRk1dSk3C0rpQMh8rFGbkwRXCVjZqTvRev79LM4nCQHTxZcqxZMOoFwjaglZtbebyYOpCtyauALzt9TbBc%2Bgr8%2BDApIGjK6ACFNqmOhk84Ig9uE%2F9mBmu8uivagMoqYJRb7h1mtEWVEssx9TixDtQ7TOlf7Vt7wPPicO8mzUFTpDZFa1B535nTzaINtPSfuJYUeWjkH%2BMhg9WViuoxqRelQruYbFbR%2BhmKbWxm6wo8qhVdyHh5ikouEUeigi4Bmx%2F2JSe93GgSxtP7xLKRB%2B1xV5WeSGqJEC7kryE0A7sw0h%2BgZvWhGOOqd5NKFE9MJrP%2FMoGOqUBNX%2BdtP5BEZVEW%2B4kZSiACpXN0Vxw9s%2Fu2R0hboEsZfqh%2F0UskXUSIhx6bShI4WR2arrnFcj5xWB76uS8BKnNj8H23s6kZcQMK7FTtmOaYdSXxIzwBli08%2BPz%2FLAeT8rsSOAING7EXjU5bhIOpT17NZl8ES29LaRNVpy5NQx1QWILP6%2BoXJABng%2BAGe%2BVGMNWEyqVWYtlABlTEiavgJsS6Vm4vEMJ&X-Amz-Signature=7f3b97d93e7a6cd5c973261cf8a1d6bb17b4ba91b893500b6a9df13c8883aa0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQBFCEHJ%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw3fdMRdpG0Wt7TEBi5WmTirydXfs1Y9aw4lmuiDDk4wIgaJH9nNz9%2FEYZYN3%2F3jburXwy9T%2FHM6n3zdZRh64kV7MqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjoq2utFQj4qfcWdSrcAw1hnnNgA7s%2F5oLxDEnHRvfcOv1jeOwVKZcTOWrAmsEKAkqEO2OKT8IPf%2BI6IONU46ynDpBixyeGFGWJAEe1lFdOJiuNN5Wlh9cqSjVLnRZ61vAfu7i8FFxhunqkQgLgRQGGCuzugLD1ncnwwNhhz4COGuNYz%2FzKICjNF3AW4fDmQ8O%2FxtNbpGbeZipl7rTEPZ9x3tH4xfPrnoB8bDFW8TPVfVKmpDcsikO2zIkyMvVbbsK5gwp1Cjb9xlBIpIBXGJevoptHX%2FtLCOHc4haX0J%2FkzJhVmmQZ19zCYZotKlpyN9sYrXZupR3d7AUoh9sKRk1dSk3C0rpQMh8rFGbkwRXCVjZqTvRev79LM4nCQHTxZcqxZMOoFwjaglZtbebyYOpCtyauALzt9TbBc%2Bgr8%2BDApIGjK6ACFNqmOhk84Ig9uE%2F9mBmu8uivagMoqYJRb7h1mtEWVEssx9TixDtQ7TOlf7Vt7wPPicO8mzUFTpDZFa1B535nTzaINtPSfuJYUeWjkH%2BMhg9WViuoxqRelQruYbFbR%2BhmKbWxm6wo8qhVdyHh5ikouEUeigi4Bmx%2F2JSe93GgSxtP7xLKRB%2B1xV5WeSGqJEC7kryE0A7sw0h%2BgZvWhGOOqd5NKFE9MJrP%2FMoGOqUBNX%2BdtP5BEZVEW%2B4kZSiACpXN0Vxw9s%2Fu2R0hboEsZfqh%2F0UskXUSIhx6bShI4WR2arrnFcj5xWB76uS8BKnNj8H23s6kZcQMK7FTtmOaYdSXxIzwBli08%2BPz%2FLAeT8rsSOAING7EXjU5bhIOpT17NZl8ES29LaRNVpy5NQx1QWILP6%2BoXJABng%2BAGe%2BVGMNWEyqVWYtlABlTEiavgJsS6Vm4vEMJ&X-Amz-Signature=62a54c21d9c5b67d158b8333ef0e765c02ebf63c71fc900765afc7399508e6e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQBFCEHJ%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw3fdMRdpG0Wt7TEBi5WmTirydXfs1Y9aw4lmuiDDk4wIgaJH9nNz9%2FEYZYN3%2F3jburXwy9T%2FHM6n3zdZRh64kV7MqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjoq2utFQj4qfcWdSrcAw1hnnNgA7s%2F5oLxDEnHRvfcOv1jeOwVKZcTOWrAmsEKAkqEO2OKT8IPf%2BI6IONU46ynDpBixyeGFGWJAEe1lFdOJiuNN5Wlh9cqSjVLnRZ61vAfu7i8FFxhunqkQgLgRQGGCuzugLD1ncnwwNhhz4COGuNYz%2FzKICjNF3AW4fDmQ8O%2FxtNbpGbeZipl7rTEPZ9x3tH4xfPrnoB8bDFW8TPVfVKmpDcsikO2zIkyMvVbbsK5gwp1Cjb9xlBIpIBXGJevoptHX%2FtLCOHc4haX0J%2FkzJhVmmQZ19zCYZotKlpyN9sYrXZupR3d7AUoh9sKRk1dSk3C0rpQMh8rFGbkwRXCVjZqTvRev79LM4nCQHTxZcqxZMOoFwjaglZtbebyYOpCtyauALzt9TbBc%2Bgr8%2BDApIGjK6ACFNqmOhk84Ig9uE%2F9mBmu8uivagMoqYJRb7h1mtEWVEssx9TixDtQ7TOlf7Vt7wPPicO8mzUFTpDZFa1B535nTzaINtPSfuJYUeWjkH%2BMhg9WViuoxqRelQruYbFbR%2BhmKbWxm6wo8qhVdyHh5ikouEUeigi4Bmx%2F2JSe93GgSxtP7xLKRB%2B1xV5WeSGqJEC7kryE0A7sw0h%2BgZvWhGOOqd5NKFE9MJrP%2FMoGOqUBNX%2BdtP5BEZVEW%2B4kZSiACpXN0Vxw9s%2Fu2R0hboEsZfqh%2F0UskXUSIhx6bShI4WR2arrnFcj5xWB76uS8BKnNj8H23s6kZcQMK7FTtmOaYdSXxIzwBli08%2BPz%2FLAeT8rsSOAING7EXjU5bhIOpT17NZl8ES29LaRNVpy5NQx1QWILP6%2BoXJABng%2BAGe%2BVGMNWEyqVWYtlABlTEiavgJsS6Vm4vEMJ&X-Amz-Signature=875cc920624e46981aa7dc7ad9c5d3c3863dfeb6b01bdfee0aef5d56f98b197c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQBFCEHJ%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw3fdMRdpG0Wt7TEBi5WmTirydXfs1Y9aw4lmuiDDk4wIgaJH9nNz9%2FEYZYN3%2F3jburXwy9T%2FHM6n3zdZRh64kV7MqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjoq2utFQj4qfcWdSrcAw1hnnNgA7s%2F5oLxDEnHRvfcOv1jeOwVKZcTOWrAmsEKAkqEO2OKT8IPf%2BI6IONU46ynDpBixyeGFGWJAEe1lFdOJiuNN5Wlh9cqSjVLnRZ61vAfu7i8FFxhunqkQgLgRQGGCuzugLD1ncnwwNhhz4COGuNYz%2FzKICjNF3AW4fDmQ8O%2FxtNbpGbeZipl7rTEPZ9x3tH4xfPrnoB8bDFW8TPVfVKmpDcsikO2zIkyMvVbbsK5gwp1Cjb9xlBIpIBXGJevoptHX%2FtLCOHc4haX0J%2FkzJhVmmQZ19zCYZotKlpyN9sYrXZupR3d7AUoh9sKRk1dSk3C0rpQMh8rFGbkwRXCVjZqTvRev79LM4nCQHTxZcqxZMOoFwjaglZtbebyYOpCtyauALzt9TbBc%2Bgr8%2BDApIGjK6ACFNqmOhk84Ig9uE%2F9mBmu8uivagMoqYJRb7h1mtEWVEssx9TixDtQ7TOlf7Vt7wPPicO8mzUFTpDZFa1B535nTzaINtPSfuJYUeWjkH%2BMhg9WViuoxqRelQruYbFbR%2BhmKbWxm6wo8qhVdyHh5ikouEUeigi4Bmx%2F2JSe93GgSxtP7xLKRB%2B1xV5WeSGqJEC7kryE0A7sw0h%2BgZvWhGOOqd5NKFE9MJrP%2FMoGOqUBNX%2BdtP5BEZVEW%2B4kZSiACpXN0Vxw9s%2Fu2R0hboEsZfqh%2F0UskXUSIhx6bShI4WR2arrnFcj5xWB76uS8BKnNj8H23s6kZcQMK7FTtmOaYdSXxIzwBli08%2BPz%2FLAeT8rsSOAING7EXjU5bhIOpT17NZl8ES29LaRNVpy5NQx1QWILP6%2BoXJABng%2BAGe%2BVGMNWEyqVWYtlABlTEiavgJsS6Vm4vEMJ&X-Amz-Signature=ee7369e7119363f454125f0ea6f688671cc186c1aeb2bf951d525383d1d6b9a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOWSZFCT%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6uT62v5FxT179S6Gx6C3BU0LHSdWJm1DT0rU0SQWW1AiAsF0salkCd4dmALUIXuw7Rrusp04WvHrdj7qqTHkM71iqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRwERRTUVpslZ118vKtwDQKE5yupZQUZO2pk3cXbbQAxCa8JnFmSoik1Ya%2FZ9EwFElyHKhHxpLrM8v1KV%2BWRyGKq0pBhpS%2FYBDrz%2BoVqh8MmXz4civAyDKaJXD8Oe8LQgK%2BZRb8CUlRaPBNMKHDUafq0jUozGiQUm7WA7ASBmfbtgGPGV2gHkeylEDU08U3wjqCVCq9KcO2PPivG5OCBOerIOpDZ06f7Snw3jrDnQ%2BtSvoqzbHUZWhotQ%2FK4RCQfLCgog4z2M%2BD5l2Zs2FESK%2FD9dc9TNDkA0ahMHWzWA8dpVGOLAJj9bN%2B9rCxP1E1tzPsYQdxkpNN2HrIB69%2FkfcET12WAA5TetaMPAiZ%2BJKedYL4l9otdn4%2FfvI51IzDaCBzNyELOx1AH2QZamA9VxqrN6kD9ojHLno35JeqaxksF7%2FbjoSGl2V4qDKSVIC3%2FYEsLJ6oSYRL52lXdq1Y6QF7aVqc3gSZShKkgB9H0okhsGK02mKIsnoSYuyX5Jqzl0MeWATF3TGVJDCoDRSQFzPFrcLoeCNcpeyE5PMmL81DiTxy1q9jZBGW%2BezT4zDFVR8OnzU4CSoq8xYwP1ihaCtsQt0BQA6L9FnGqLDDOxm2n6cUc7QOT59mXf1UmFwZ0lv%2Bol9whIMPDgjPcwhM%2F8ygY6pgHfmtXywXoROVaF69HRa9N05zk2bff9gfIvpDxu0nFElCJMcPDQvUB9HFvY%2B%2FAaFffwcv3%2FbnH9YTw%2FTauoVSWX0Fx9kqOuZeSXQ%2BJXhqU5VqjIwUjxdAFi4%2FpIh37Fgbwcl5MBa7RjwBlxgk%2BH283z%2BY0Hq6u%2Fx%2FChHdas2%2Fcj%2BAHk%2FpsYbTgviGx3OO2Lorv6%2FzPSxNDH4StoCrJRIHqKugS0LSx%2B&X-Amz-Signature=41b5d45d1f2cef349567aebb5231f1ab47cbc9471979453bbbe8fc46ff269b1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOWSZFCT%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6uT62v5FxT179S6Gx6C3BU0LHSdWJm1DT0rU0SQWW1AiAsF0salkCd4dmALUIXuw7Rrusp04WvHrdj7qqTHkM71iqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRwERRTUVpslZ118vKtwDQKE5yupZQUZO2pk3cXbbQAxCa8JnFmSoik1Ya%2FZ9EwFElyHKhHxpLrM8v1KV%2BWRyGKq0pBhpS%2FYBDrz%2BoVqh8MmXz4civAyDKaJXD8Oe8LQgK%2BZRb8CUlRaPBNMKHDUafq0jUozGiQUm7WA7ASBmfbtgGPGV2gHkeylEDU08U3wjqCVCq9KcO2PPivG5OCBOerIOpDZ06f7Snw3jrDnQ%2BtSvoqzbHUZWhotQ%2FK4RCQfLCgog4z2M%2BD5l2Zs2FESK%2FD9dc9TNDkA0ahMHWzWA8dpVGOLAJj9bN%2B9rCxP1E1tzPsYQdxkpNN2HrIB69%2FkfcET12WAA5TetaMPAiZ%2BJKedYL4l9otdn4%2FfvI51IzDaCBzNyELOx1AH2QZamA9VxqrN6kD9ojHLno35JeqaxksF7%2FbjoSGl2V4qDKSVIC3%2FYEsLJ6oSYRL52lXdq1Y6QF7aVqc3gSZShKkgB9H0okhsGK02mKIsnoSYuyX5Jqzl0MeWATF3TGVJDCoDRSQFzPFrcLoeCNcpeyE5PMmL81DiTxy1q9jZBGW%2BezT4zDFVR8OnzU4CSoq8xYwP1ihaCtsQt0BQA6L9FnGqLDDOxm2n6cUc7QOT59mXf1UmFwZ0lv%2Bol9whIMPDgjPcwhM%2F8ygY6pgHfmtXywXoROVaF69HRa9N05zk2bff9gfIvpDxu0nFElCJMcPDQvUB9HFvY%2B%2FAaFffwcv3%2FbnH9YTw%2FTauoVSWX0Fx9kqOuZeSXQ%2BJXhqU5VqjIwUjxdAFi4%2FpIh37Fgbwcl5MBa7RjwBlxgk%2BH283z%2BY0Hq6u%2Fx%2FChHdas2%2Fcj%2BAHk%2FpsYbTgviGx3OO2Lorv6%2FzPSxNDH4StoCrJRIHqKugS0LSx%2B&X-Amz-Signature=4e71a3a2d365a91ebf954cbb542fc4a4859f8500fe4d90170cc7251998390e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOWSZFCT%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6uT62v5FxT179S6Gx6C3BU0LHSdWJm1DT0rU0SQWW1AiAsF0salkCd4dmALUIXuw7Rrusp04WvHrdj7qqTHkM71iqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRwERRTUVpslZ118vKtwDQKE5yupZQUZO2pk3cXbbQAxCa8JnFmSoik1Ya%2FZ9EwFElyHKhHxpLrM8v1KV%2BWRyGKq0pBhpS%2FYBDrz%2BoVqh8MmXz4civAyDKaJXD8Oe8LQgK%2BZRb8CUlRaPBNMKHDUafq0jUozGiQUm7WA7ASBmfbtgGPGV2gHkeylEDU08U3wjqCVCq9KcO2PPivG5OCBOerIOpDZ06f7Snw3jrDnQ%2BtSvoqzbHUZWhotQ%2FK4RCQfLCgog4z2M%2BD5l2Zs2FESK%2FD9dc9TNDkA0ahMHWzWA8dpVGOLAJj9bN%2B9rCxP1E1tzPsYQdxkpNN2HrIB69%2FkfcET12WAA5TetaMPAiZ%2BJKedYL4l9otdn4%2FfvI51IzDaCBzNyELOx1AH2QZamA9VxqrN6kD9ojHLno35JeqaxksF7%2FbjoSGl2V4qDKSVIC3%2FYEsLJ6oSYRL52lXdq1Y6QF7aVqc3gSZShKkgB9H0okhsGK02mKIsnoSYuyX5Jqzl0MeWATF3TGVJDCoDRSQFzPFrcLoeCNcpeyE5PMmL81DiTxy1q9jZBGW%2BezT4zDFVR8OnzU4CSoq8xYwP1ihaCtsQt0BQA6L9FnGqLDDOxm2n6cUc7QOT59mXf1UmFwZ0lv%2Bol9whIMPDgjPcwhM%2F8ygY6pgHfmtXywXoROVaF69HRa9N05zk2bff9gfIvpDxu0nFElCJMcPDQvUB9HFvY%2B%2FAaFffwcv3%2FbnH9YTw%2FTauoVSWX0Fx9kqOuZeSXQ%2BJXhqU5VqjIwUjxdAFi4%2FpIh37Fgbwcl5MBa7RjwBlxgk%2BH283z%2BY0Hq6u%2Fx%2FChHdas2%2Fcj%2BAHk%2FpsYbTgviGx3OO2Lorv6%2FzPSxNDH4StoCrJRIHqKugS0LSx%2B&X-Amz-Signature=e57096aac3992d12cae07571713bb17eb6c6aaea5ec194498ccbded53481b24f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNUL3L74%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoTf8US%2BN%2FBNPQME166xhQtz7yXwrI3LIWwQhuEiFSwAiEA%2FOT2%2FfEiGt%2BLnpYy4gZ0UW%2BiIuWnWUSpA0vSZGI3SWMqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcTGCu%2Bgu1LTudlkircA1ObolYk1%2FUHKxQzTBL5JYqHXAA3lwth7eQmyHE1GRrQQVBwZYzoANcuqj%2BCwlt4hhXhbM9sDWgCOUQBEBCz3lz38Kya%2F7UK1qF8UFQPZoiXvE%2B%2B%2BJ2r5JqqNM5NSgPvKHgBKgW3xsQc6DsXy8wsQIYuX1JrlWRUUR%2FBF5GUvG6hCPF%2FjhVPoU970olXPJvJV5IrvXxdKJby5nylsrqNl%2BrtGHWGXzU%2BaOGwUaeHPbapBv5tsi%2BMf07TjSiNX9PBZJFEq5zAG0xvktMscuiujFc3pyinLDFDex1aeD3frGVH5MsTY81%2FAMe%2FUZybZTD8TKGs2%2BTqc6owdQPgxeSGqdppRUL5NlOuoVadd3LlN%2Fy1%2BLmvajmDKPD7KXgKwCLKFmvo9ZDTJVVRNAPCCxeYfP%2BV8rr8rkTiwB1GVjisXlnPBwaZj7Mv6cS4GbKfnX57zTEf41i1TT0uIqVFbQ2e5cww5wHwUaYikxvwUm0FBPpa%2FdVvwS6KiNC6U3me8Vc2lFMshNHq69IfA8bKStg80A75iJNN2J49Hw0HmQD4GdJxFTUwAxQeLW01ipq83Uc3WQWpwwnK6gFAhiuWXvmRx12eQE4u0Uc5KP%2BpLvHcnOmaXnHA9xUv3gN0JaJdMJnP%2FMoGOqUB6a8JFLj63a9OSfN0K3gnaV8gSeOGEhsaLq%2FvC2F2vj6srtK0JOKXrtAV0UIBe3cFTyMIhrcK3l7k2aTbQnzi76SdjXx4zM%2F5acb4E%2FbJmHVCi7mAwKJ3X6mlX0YweIq984wjCpCsTHGKfRAEuVvYqY6GDC3nPKodyJX49arQijx1KLPlp84KQxGTCcsceSWmuHCHyJZoBeHP13sEfPQcYHUso0Pw&X-Amz-Signature=9b8eb574780bd1d2f18312b00067a1dd3a4efffc18853f61a3451b527fa00cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNUL3L74%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoTf8US%2BN%2FBNPQME166xhQtz7yXwrI3LIWwQhuEiFSwAiEA%2FOT2%2FfEiGt%2BLnpYy4gZ0UW%2BiIuWnWUSpA0vSZGI3SWMqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcTGCu%2Bgu1LTudlkircA1ObolYk1%2FUHKxQzTBL5JYqHXAA3lwth7eQmyHE1GRrQQVBwZYzoANcuqj%2BCwlt4hhXhbM9sDWgCOUQBEBCz3lz38Kya%2F7UK1qF8UFQPZoiXvE%2B%2B%2BJ2r5JqqNM5NSgPvKHgBKgW3xsQc6DsXy8wsQIYuX1JrlWRUUR%2FBF5GUvG6hCPF%2FjhVPoU970olXPJvJV5IrvXxdKJby5nylsrqNl%2BrtGHWGXzU%2BaOGwUaeHPbapBv5tsi%2BMf07TjSiNX9PBZJFEq5zAG0xvktMscuiujFc3pyinLDFDex1aeD3frGVH5MsTY81%2FAMe%2FUZybZTD8TKGs2%2BTqc6owdQPgxeSGqdppRUL5NlOuoVadd3LlN%2Fy1%2BLmvajmDKPD7KXgKwCLKFmvo9ZDTJVVRNAPCCxeYfP%2BV8rr8rkTiwB1GVjisXlnPBwaZj7Mv6cS4GbKfnX57zTEf41i1TT0uIqVFbQ2e5cww5wHwUaYikxvwUm0FBPpa%2FdVvwS6KiNC6U3me8Vc2lFMshNHq69IfA8bKStg80A75iJNN2J49Hw0HmQD4GdJxFTUwAxQeLW01ipq83Uc3WQWpwwnK6gFAhiuWXvmRx12eQE4u0Uc5KP%2BpLvHcnOmaXnHA9xUv3gN0JaJdMJnP%2FMoGOqUB6a8JFLj63a9OSfN0K3gnaV8gSeOGEhsaLq%2FvC2F2vj6srtK0JOKXrtAV0UIBe3cFTyMIhrcK3l7k2aTbQnzi76SdjXx4zM%2F5acb4E%2FbJmHVCi7mAwKJ3X6mlX0YweIq984wjCpCsTHGKfRAEuVvYqY6GDC3nPKodyJX49arQijx1KLPlp84KQxGTCcsceSWmuHCHyJZoBeHP13sEfPQcYHUso0Pw&X-Amz-Signature=f3fa0d06321fe985762a959b9133600d2cfd141353f51f26813e7e564c632953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77WINMA%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNTe3BGTRzRVeRVwt0NbH9K3dIhkdCMLdoD9Dk600WAAiEApoe2QG44%2Bi89HIpnr9YNT2I7tZfxhkvNPklXABF4Xc4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh7uN7urAtqLKNskyrcA89%2BRN2v0qBjtjmNbvM%2BAKstCtcMMRkirAhwL3HkEcKzoZSF76sIF9VexKEUEuG8B5hC7DTwsRuTMaOi%2FYc1Tvs1gecSPt5TG330AMf1wtWwFQkLjFdJVaE1S%2Bcm43DH%2BBox440nzV%2Bd5yKACt0uOlap7LoKOAxs2i5PbUqcOgs4rzfUOU%2Fat5v8mSeePtoAaIoOzMuyLN1sdy2DWJwK4wEXu%2F3hkHvmq7L7pol%2FWg4CAWp5GSipd6mMu0dHzqVAc9gMgUvZAtc9iva1XV8AqyH3yIxZN%2FdQ%2BcuOG7SUtcFfkH8drVZXuFWXD%2BbwWECWG0EFBEbIQQrgyYdAdT8PfhNdwijkyblbM1lT8YVaBS2n0njSxLFgzcWj7HGaInkMaUDhdh4GWqbRqN9Z5zFRlD149GZ1fS69ec3oM8E6%2FzQJN1VBhdlXAgbkJzhoVxVfbelEf3RPHmgndj3xggKs6j7oCdNVy8xqgtLSP9pG9WnsHRxxFAC99lyIPd%2FCRnrMmdErBikPGveUFTJf8EdYTF75JkYJAC06OfguYqnfDGrnBgzybzimoGcz2vzoS47wQtAwkxniSNEdVUNIGv2qNpjrHkET1dS%2BNJULxHtwWdB9neOOMu2vOqusZ%2BhXMNjP%2FMoGOqUBJQtmpiVOdDpoj9zAEFwFWt7A5QiiB%2BU2kf8uB9GzqJlPhO5Gr2fXdo%2BCRVo%2FI9AmsAIBq7%2BDxHA4RBLNX16QZV9oSiVRM2scGEnPIT7k0suCPKSGrRPHvvBLKQH2p%2Fw5UgfEzRHJeUbZwVrvU4U6NxZla4o3G4MDnURegUAw1oHFozOUPCCoM1fx42n%2Fb9gn95NHNtqRZNzLo6k8dDF0%2F%2Bv2zEuT&X-Amz-Signature=ccf1289cdd67331ad425aafa5d8f838fc1c9f9bcb8f4532cc0b35214fdc0cb46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77WINMA%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNTe3BGTRzRVeRVwt0NbH9K3dIhkdCMLdoD9Dk600WAAiEApoe2QG44%2Bi89HIpnr9YNT2I7tZfxhkvNPklXABF4Xc4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh7uN7urAtqLKNskyrcA89%2BRN2v0qBjtjmNbvM%2BAKstCtcMMRkirAhwL3HkEcKzoZSF76sIF9VexKEUEuG8B5hC7DTwsRuTMaOi%2FYc1Tvs1gecSPt5TG330AMf1wtWwFQkLjFdJVaE1S%2Bcm43DH%2BBox440nzV%2Bd5yKACt0uOlap7LoKOAxs2i5PbUqcOgs4rzfUOU%2Fat5v8mSeePtoAaIoOzMuyLN1sdy2DWJwK4wEXu%2F3hkHvmq7L7pol%2FWg4CAWp5GSipd6mMu0dHzqVAc9gMgUvZAtc9iva1XV8AqyH3yIxZN%2FdQ%2BcuOG7SUtcFfkH8drVZXuFWXD%2BbwWECWG0EFBEbIQQrgyYdAdT8PfhNdwijkyblbM1lT8YVaBS2n0njSxLFgzcWj7HGaInkMaUDhdh4GWqbRqN9Z5zFRlD149GZ1fS69ec3oM8E6%2FzQJN1VBhdlXAgbkJzhoVxVfbelEf3RPHmgndj3xggKs6j7oCdNVy8xqgtLSP9pG9WnsHRxxFAC99lyIPd%2FCRnrMmdErBikPGveUFTJf8EdYTF75JkYJAC06OfguYqnfDGrnBgzybzimoGcz2vzoS47wQtAwkxniSNEdVUNIGv2qNpjrHkET1dS%2BNJULxHtwWdB9neOOMu2vOqusZ%2BhXMNjP%2FMoGOqUBJQtmpiVOdDpoj9zAEFwFWt7A5QiiB%2BU2kf8uB9GzqJlPhO5Gr2fXdo%2BCRVo%2FI9AmsAIBq7%2BDxHA4RBLNX16QZV9oSiVRM2scGEnPIT7k0suCPKSGrRPHvvBLKQH2p%2Fw5UgfEzRHJeUbZwVrvU4U6NxZla4o3G4MDnURegUAw1oHFozOUPCCoM1fx42n%2Fb9gn95NHNtqRZNzLo6k8dDF0%2F%2Bv2zEuT&X-Amz-Signature=1a127abc30c774f3b6dcd33e6ef710f0989d1fce9be1a95c75f73462ad1719fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77WINMA%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNTe3BGTRzRVeRVwt0NbH9K3dIhkdCMLdoD9Dk600WAAiEApoe2QG44%2Bi89HIpnr9YNT2I7tZfxhkvNPklXABF4Xc4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh7uN7urAtqLKNskyrcA89%2BRN2v0qBjtjmNbvM%2BAKstCtcMMRkirAhwL3HkEcKzoZSF76sIF9VexKEUEuG8B5hC7DTwsRuTMaOi%2FYc1Tvs1gecSPt5TG330AMf1wtWwFQkLjFdJVaE1S%2Bcm43DH%2BBox440nzV%2Bd5yKACt0uOlap7LoKOAxs2i5PbUqcOgs4rzfUOU%2Fat5v8mSeePtoAaIoOzMuyLN1sdy2DWJwK4wEXu%2F3hkHvmq7L7pol%2FWg4CAWp5GSipd6mMu0dHzqVAc9gMgUvZAtc9iva1XV8AqyH3yIxZN%2FdQ%2BcuOG7SUtcFfkH8drVZXuFWXD%2BbwWECWG0EFBEbIQQrgyYdAdT8PfhNdwijkyblbM1lT8YVaBS2n0njSxLFgzcWj7HGaInkMaUDhdh4GWqbRqN9Z5zFRlD149GZ1fS69ec3oM8E6%2FzQJN1VBhdlXAgbkJzhoVxVfbelEf3RPHmgndj3xggKs6j7oCdNVy8xqgtLSP9pG9WnsHRxxFAC99lyIPd%2FCRnrMmdErBikPGveUFTJf8EdYTF75JkYJAC06OfguYqnfDGrnBgzybzimoGcz2vzoS47wQtAwkxniSNEdVUNIGv2qNpjrHkET1dS%2BNJULxHtwWdB9neOOMu2vOqusZ%2BhXMNjP%2FMoGOqUBJQtmpiVOdDpoj9zAEFwFWt7A5QiiB%2BU2kf8uB9GzqJlPhO5Gr2fXdo%2BCRVo%2FI9AmsAIBq7%2BDxHA4RBLNX16QZV9oSiVRM2scGEnPIT7k0suCPKSGrRPHvvBLKQH2p%2Fw5UgfEzRHJeUbZwVrvU4U6NxZla4o3G4MDnURegUAw1oHFozOUPCCoM1fx42n%2Fb9gn95NHNtqRZNzLo6k8dDF0%2F%2Bv2zEuT&X-Amz-Signature=c4bafe3eb7c7d55c55fe5c78702e3aa91d3eb17a1f9e45fa5370296df178f2d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77WINMA%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNTe3BGTRzRVeRVwt0NbH9K3dIhkdCMLdoD9Dk600WAAiEApoe2QG44%2Bi89HIpnr9YNT2I7tZfxhkvNPklXABF4Xc4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh7uN7urAtqLKNskyrcA89%2BRN2v0qBjtjmNbvM%2BAKstCtcMMRkirAhwL3HkEcKzoZSF76sIF9VexKEUEuG8B5hC7DTwsRuTMaOi%2FYc1Tvs1gecSPt5TG330AMf1wtWwFQkLjFdJVaE1S%2Bcm43DH%2BBox440nzV%2Bd5yKACt0uOlap7LoKOAxs2i5PbUqcOgs4rzfUOU%2Fat5v8mSeePtoAaIoOzMuyLN1sdy2DWJwK4wEXu%2F3hkHvmq7L7pol%2FWg4CAWp5GSipd6mMu0dHzqVAc9gMgUvZAtc9iva1XV8AqyH3yIxZN%2FdQ%2BcuOG7SUtcFfkH8drVZXuFWXD%2BbwWECWG0EFBEbIQQrgyYdAdT8PfhNdwijkyblbM1lT8YVaBS2n0njSxLFgzcWj7HGaInkMaUDhdh4GWqbRqN9Z5zFRlD149GZ1fS69ec3oM8E6%2FzQJN1VBhdlXAgbkJzhoVxVfbelEf3RPHmgndj3xggKs6j7oCdNVy8xqgtLSP9pG9WnsHRxxFAC99lyIPd%2FCRnrMmdErBikPGveUFTJf8EdYTF75JkYJAC06OfguYqnfDGrnBgzybzimoGcz2vzoS47wQtAwkxniSNEdVUNIGv2qNpjrHkET1dS%2BNJULxHtwWdB9neOOMu2vOqusZ%2BhXMNjP%2FMoGOqUBJQtmpiVOdDpoj9zAEFwFWt7A5QiiB%2BU2kf8uB9GzqJlPhO5Gr2fXdo%2BCRVo%2FI9AmsAIBq7%2BDxHA4RBLNX16QZV9oSiVRM2scGEnPIT7k0suCPKSGrRPHvvBLKQH2p%2Fw5UgfEzRHJeUbZwVrvU4U6NxZla4o3G4MDnURegUAw1oHFozOUPCCoM1fx42n%2Fb9gn95NHNtqRZNzLo6k8dDF0%2F%2Bv2zEuT&X-Amz-Signature=24432b1a825715ba8b0f6aea5cc9321bf3dde17a192d4d35ca985bc1be2ef735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77WINMA%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNTe3BGTRzRVeRVwt0NbH9K3dIhkdCMLdoD9Dk600WAAiEApoe2QG44%2Bi89HIpnr9YNT2I7tZfxhkvNPklXABF4Xc4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh7uN7urAtqLKNskyrcA89%2BRN2v0qBjtjmNbvM%2BAKstCtcMMRkirAhwL3HkEcKzoZSF76sIF9VexKEUEuG8B5hC7DTwsRuTMaOi%2FYc1Tvs1gecSPt5TG330AMf1wtWwFQkLjFdJVaE1S%2Bcm43DH%2BBox440nzV%2Bd5yKACt0uOlap7LoKOAxs2i5PbUqcOgs4rzfUOU%2Fat5v8mSeePtoAaIoOzMuyLN1sdy2DWJwK4wEXu%2F3hkHvmq7L7pol%2FWg4CAWp5GSipd6mMu0dHzqVAc9gMgUvZAtc9iva1XV8AqyH3yIxZN%2FdQ%2BcuOG7SUtcFfkH8drVZXuFWXD%2BbwWECWG0EFBEbIQQrgyYdAdT8PfhNdwijkyblbM1lT8YVaBS2n0njSxLFgzcWj7HGaInkMaUDhdh4GWqbRqN9Z5zFRlD149GZ1fS69ec3oM8E6%2FzQJN1VBhdlXAgbkJzhoVxVfbelEf3RPHmgndj3xggKs6j7oCdNVy8xqgtLSP9pG9WnsHRxxFAC99lyIPd%2FCRnrMmdErBikPGveUFTJf8EdYTF75JkYJAC06OfguYqnfDGrnBgzybzimoGcz2vzoS47wQtAwkxniSNEdVUNIGv2qNpjrHkET1dS%2BNJULxHtwWdB9neOOMu2vOqusZ%2BhXMNjP%2FMoGOqUBJQtmpiVOdDpoj9zAEFwFWt7A5QiiB%2BU2kf8uB9GzqJlPhO5Gr2fXdo%2BCRVo%2FI9AmsAIBq7%2BDxHA4RBLNX16QZV9oSiVRM2scGEnPIT7k0suCPKSGrRPHvvBLKQH2p%2Fw5UgfEzRHJeUbZwVrvU4U6NxZla4o3G4MDnURegUAw1oHFozOUPCCoM1fx42n%2Fb9gn95NHNtqRZNzLo6k8dDF0%2F%2Bv2zEuT&X-Amz-Signature=9f97d0cf8009f92b602c5ff0fd890645e725a2cb0ac7b7c086bfd29c934cd4e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT52BKQ5%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7f%2BOxQWoNlZthTBUTlohJ1J8Amvdbfh3VZzHgehye6wIhAKFYFiLUugpmagsR9%2BKD5fmn51b%2BgTwgWsstL%2FaThKXPKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKksA0KE32kg7xHM0q3ANEvs0flJvYG%2FE9eVh9z%2Bw0GuuwAkd6poW2W%2FGsr3rcA9xr%2B%2FblMUV0t5039QdI3wy9P2S95%2FXLL7YTM3WDGz2GIU%2FuL3ww4NigSEPnfCXs7g%2Bhf3OgIPmkjilnibixyOoNFfOCBfcyajbu89mkdYZJidCRJR8TMPc69W%2Bt3UgWYw1O1SvLCP41KHlmi%2B%2FfotPzFU%2FS%2F0ePpVHb3BsJT6t1eO0fLpBTADS%2Bnw7hnd4dFSEohP4GJl%2BrDDQ9a15d5vOWtCvSPvZmRnbv8gl1gtFZ9dgwWbtn%2FJR2lfLazXQdUcNM%2Bs1eqVHCfp9FbDIN1sd5wxUyobuWUzwuvOKofYTxgI1SC5%2FwnJ3AJsi7Y9ViM%2FdAKIjLgHUsnBEzusnqlvinMFlyALyqLloFKGuodzYZ6yR9f4d97b1pK6yWypRBZIMhcUAh12GiWbgyqbTSFNIN0ITg0soLWLYqeS%2FVeeChKtbAQytQ10nGAIsBEyq4rZCrZaBgmdpf9A3f8K6jPrJ3T%2FNkVL0EUurXU4aHzJE7OMG81geY2gfuoI6GGeYBlsidpeo28uuQHIQ%2FQVquUP5rf4hi85hR7d5VKk16aWQVHZh4OPkWFE%2BTfMTvnv9OyEIjyFhAsyrWkwDCRDDsz%2FzKBjqkAa0riMdYnkkaRfBeaQor4rb1STfgjRdRBnIyerylCWWgCXZ3oDB5ni3f2yKx%2BvJx5hz8uwgW%2F0e%2BCPRKDdTAKsxozPGlU5iq1CLmFFwAweiT3ZlEA5eTclrDoxOgyR9KbhSbp0N9Vu7jr73mCOaN2nvG%2BT4qbDvRAcPYGc7K3vW4e1eEH%2BODgk7VUFzoyCELHNI%2BDsOhKxZGdB2Yy7HxyEGi2Mic&X-Amz-Signature=a050be73a1a70b7d4ba82e379d86cd1b4f8ae39099933ad0116be29050f812d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

