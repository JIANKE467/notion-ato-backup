
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DQG55PC%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzmZsZMUSfanxoIPf0Mh%2FzHvAerA6CZtDEASeIDCKWnAiANZAvZQ8os1ZGECTfX7ZQvBa%2B4Hpd7VRcciYRrzBCZrSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLpo0RPsBh9yiYAreKtwDEEcU4S2L4uT7mrVnHPFfwxOMiXbkz46Uyu8%2Fi2w%2BvWn7ts8TgwtPAKQKLDmMFjebNu6mVAZFsZ%2FVDsrNBL3K6MaW0BOiw0J9OtoakzjWqec4D9poQgUz7lV3DLeJSkSMh7fgWQCD1s8Tk9eDgwgDKVgg8URfdi7CmxjgqvfT7FmLkDT%2FOGqLppGfwLXUPA0bFKoO2vBXVUSnzVBGOoZoyIfuvXspoG%2BUkXHCENpYQlMQC2agmG4BCNeMFywosbGKdjRe3gdTIBawE8zjeMirHFUxaKi%2F0uujZi%2B%2BDPWg2IIWzKEFy5gq%2BU024ASiK8X7QEsY1OSgI%2Ft9j%2FzXBcCS5kr7YaI4joF2yOqK4q2P4dnCwgSsYwkxUrhjeg0S6c4VnJEtBEIeiYbOdl6%2Bj9zuwVp3DFoW5Z7uzLS3WRlI%2BFvPVHVxuU9Q%2FKuaQFI%2Fdm2yAQEbQMbm80%2BKQadR1SDJerpiE6v%2F04LUFT4Tzn2GJfml%2FTXv6Pvpp%2BG2DjFsebQf%2FJmGpq4SrHVlPq4l%2FHuHFqCk6HkwTAEL4qDth%2F7dH3nbzyMWAPtoUiBlB4cosNXsA%2FyjsoZrHvhBA18ObNsA9sZkjwC%2FXA%2F6TJfGn4OiPxkHiYMIxYetNw%2FHuQwwvYWTygY6pgFLOTHiktj%2FK8J84N0sTKakuBPT2K47qDtWdC31CbhBugt758FuJ1t%2BxEGnu8tcMDsXtNL623RXhsrGaMtapeYXO1KMLcFc8EdzbBV9bgX%2BsbMebYCSYdpHep36KCmcw0yrDhEQniCX82FB28sN%2BvsGJh3Ec8qolxuj%2BVjPG579c9ANw6s7015eOAD%2FfZU4v4d37O2X%2B3IMw3t0hNlrWB0ny%2FTeYV9%2B&X-Amz-Signature=81c55e43588cc553a2ef67e985738abd2e4106dd3941903465d142667c0183e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ARI5W3A%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B41RuEWBq6o44Ou%2BLVP1Pf6moQxh4YfRKcENtJBiUQwIhALrhG%2BXebn7hykE2B2u8axtIjDiNd4Xo0AyJNZcRGxTYKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMaBiG43shw88PTs0q3ANK9naMHWy8d%2Fb9KqeDTKdFPrCn8HW%2FQFOqke7LpnwspxwKOo%2BZLw8jWNTiVGoHN%2FVwEmo9m8Ml4skl98YG1w1LZDOOTdBXRCmTKR97Cvjn1G8OThedugqpUZmfklAjbXOw2XaeDUivQqv0SqB0BoIDq55ksuQgNiXsh6kz9eZegNnUAlTj4JVU3LHr7QYJBHyGHCqR2VH%2FOCXqt3qpLy7303NhGr%2Fbdb4ZaFKkDWFS8NB%2FUpUmyBwLMkq8rz2Tt5PNNSq0FKV%2B7J4AXCqoWV2IRQ%2FwLWjiT2oNOgmSh3OM1M02Y%2BV40sGZqNtp7HvQqAmwXzIjTMTUsKv8bds7aWUvzO9EQKr2k1KxyFPLBI6CzA6ouOkCqDUX74YuiJrWt8fo%2B3odlmoUrl%2FExxbOYKfGdVjwIx2RC%2BIPwodzXRGH9CQatc8cwRDmd9udqFsK0IvllYcSJY8bRw6kS3o2w33x9CMkpGxYYdMWBXGftWFB5ptXsXbeehrRpgTCEbiPUmmYd0LM5ShfUOjzYF7SPxPDJTG5%2FlcPxLAljXOGpu2sZJgQjzbH17mgme81akF30hrYZheWZiocy5JuhQ6KCd7LiJOI%2BaAhiwn49MF4EzfhdRbgS1rd1F53vk6SBTDzhZPKBjqkAegp1i8%2Fpn%2FXmcRIyrZDw1tUycH71lQdbzMRqVxXzCWEFNApkY%2BMLwgVgN8AD9biZ4nRwRyVzAy8HteOmG8RqGzcl962EBU8AVsNKlcMQosbgtq6qpTJpFfrKooYk1yJsFDI%2BUHjCxY9oil15Ziu0WWtOadQS9mMAjgT7MucjyoLK9PZKGl0jjQ2Jow0X8LodVG3e9pfFGuHll9oc335Z1GrL8Y%2B&X-Amz-Signature=37d685739acaaef8cdcd2c9f6dae53a307a1cbb26bd0d925cf4b2911dca1f336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ARI5W3A%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B41RuEWBq6o44Ou%2BLVP1Pf6moQxh4YfRKcENtJBiUQwIhALrhG%2BXebn7hykE2B2u8axtIjDiNd4Xo0AyJNZcRGxTYKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMaBiG43shw88PTs0q3ANK9naMHWy8d%2Fb9KqeDTKdFPrCn8HW%2FQFOqke7LpnwspxwKOo%2BZLw8jWNTiVGoHN%2FVwEmo9m8Ml4skl98YG1w1LZDOOTdBXRCmTKR97Cvjn1G8OThedugqpUZmfklAjbXOw2XaeDUivQqv0SqB0BoIDq55ksuQgNiXsh6kz9eZegNnUAlTj4JVU3LHr7QYJBHyGHCqR2VH%2FOCXqt3qpLy7303NhGr%2Fbdb4ZaFKkDWFS8NB%2FUpUmyBwLMkq8rz2Tt5PNNSq0FKV%2B7J4AXCqoWV2IRQ%2FwLWjiT2oNOgmSh3OM1M02Y%2BV40sGZqNtp7HvQqAmwXzIjTMTUsKv8bds7aWUvzO9EQKr2k1KxyFPLBI6CzA6ouOkCqDUX74YuiJrWt8fo%2B3odlmoUrl%2FExxbOYKfGdVjwIx2RC%2BIPwodzXRGH9CQatc8cwRDmd9udqFsK0IvllYcSJY8bRw6kS3o2w33x9CMkpGxYYdMWBXGftWFB5ptXsXbeehrRpgTCEbiPUmmYd0LM5ShfUOjzYF7SPxPDJTG5%2FlcPxLAljXOGpu2sZJgQjzbH17mgme81akF30hrYZheWZiocy5JuhQ6KCd7LiJOI%2BaAhiwn49MF4EzfhdRbgS1rd1F53vk6SBTDzhZPKBjqkAegp1i8%2Fpn%2FXmcRIyrZDw1tUycH71lQdbzMRqVxXzCWEFNApkY%2BMLwgVgN8AD9biZ4nRwRyVzAy8HteOmG8RqGzcl962EBU8AVsNKlcMQosbgtq6qpTJpFfrKooYk1yJsFDI%2BUHjCxY9oil15Ziu0WWtOadQS9mMAjgT7MucjyoLK9PZKGl0jjQ2Jow0X8LodVG3e9pfFGuHll9oc335Z1GrL8Y%2B&X-Amz-Signature=b0618d87fb3261ed313cf22e4147e594719aa39c4b254886c4e48b3dedb07369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUI3N5IA%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHh8fZiUnUPDwmTPm7UZXRgRGjcHXo0bNV3iuEtG0TsZAiEAyJFfnVbyAKpmE4bgAWc%2FR6dhE4IakJEzT%2Fn6u1wwdqgqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpUnYqLPSKjGMBdmyrcA8RtRKaMslYrJcgGQrKLDIkVEkjggWFfPjrXE9a4Udpco5ivBPI7D8grFxBRT4e5iLnAFcivB2yd2yFHtyMbVxhoVmInFJa5kB7lPoigcLwVuShYVBa4k7hlSoMJdjvvxEYjEV45%2FaWDJuDMMHwwPQeTex9QVcJQQdiDLN2ap8D9dycNHE%2FR2trWelFIsIYELq319XJzi3rTAw6NEwKa4STFHn135eTuv38u5cRDayoUVhApIAclD75Eob6EqfQ4yAmCn4FNLBStKa9TUC9DbJWHkXAluuPH8VmIMFluTgaz9jLnw0%2Bmj16SBq7OyYkrCjHMCNBlMvkmCknl6%2FQAyBuw0WHe0kKae1c3Hu6XfQdM5ZdkEuxX%2Fy3HQcNBghviIUfyw%2FLSpcm8FnTpv4A19gsE79QZeZWoplJJ%2FxGKm0DTlog%2BDWEYGUgytNdLaqZMjux4q1bdeuGdkLEuNOckXjN3mwbMWtAtILJPIHnkC09ZKPoi0R6SfwuVjwX0SaqM7JfWLxHLWtHp6xw2DVdQmY5WbQ35xxZNdDg5dkQoMRk%2FqIW0%2BGbfWTtXO3e30UdTH6l28A%2FFRzrLmfSPGrRmp2FkR27jQ%2FHCwHZYQQxDooGAt%2F%2BTcGM69DTJN64RMLOFk8oGOqUBLVxcPR0zCMNwqPhZL0oiSXfPSVQ6Lu4oDKK2ReIf4Fzq4oY8rWU3uLNKrTgymgqbQ%2FN3RqTH8yJqEp76Kj9hBMSDPEWmEUR9sxFhb26Mh1mcpOmZJUg2Aju%2Bx22uXdU17RUDFlPC1DBw4EBY9iKcdCjjElVo4oiWtEeoZLygJYp6j3pGSdyZRvrT42APCD3GyV8H69cojZcy540SqpGxdjli5xH%2F&X-Amz-Signature=56d201dd2cc196029fc388b3e58a2588ba626b623c24a3ddfb39d0b38d4a854c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUI3N5IA%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHh8fZiUnUPDwmTPm7UZXRgRGjcHXo0bNV3iuEtG0TsZAiEAyJFfnVbyAKpmE4bgAWc%2FR6dhE4IakJEzT%2Fn6u1wwdqgqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpUnYqLPSKjGMBdmyrcA8RtRKaMslYrJcgGQrKLDIkVEkjggWFfPjrXE9a4Udpco5ivBPI7D8grFxBRT4e5iLnAFcivB2yd2yFHtyMbVxhoVmInFJa5kB7lPoigcLwVuShYVBa4k7hlSoMJdjvvxEYjEV45%2FaWDJuDMMHwwPQeTex9QVcJQQdiDLN2ap8D9dycNHE%2FR2trWelFIsIYELq319XJzi3rTAw6NEwKa4STFHn135eTuv38u5cRDayoUVhApIAclD75Eob6EqfQ4yAmCn4FNLBStKa9TUC9DbJWHkXAluuPH8VmIMFluTgaz9jLnw0%2Bmj16SBq7OyYkrCjHMCNBlMvkmCknl6%2FQAyBuw0WHe0kKae1c3Hu6XfQdM5ZdkEuxX%2Fy3HQcNBghviIUfyw%2FLSpcm8FnTpv4A19gsE79QZeZWoplJJ%2FxGKm0DTlog%2BDWEYGUgytNdLaqZMjux4q1bdeuGdkLEuNOckXjN3mwbMWtAtILJPIHnkC09ZKPoi0R6SfwuVjwX0SaqM7JfWLxHLWtHp6xw2DVdQmY5WbQ35xxZNdDg5dkQoMRk%2FqIW0%2BGbfWTtXO3e30UdTH6l28A%2FFRzrLmfSPGrRmp2FkR27jQ%2FHCwHZYQQxDooGAt%2F%2BTcGM69DTJN64RMLOFk8oGOqUBLVxcPR0zCMNwqPhZL0oiSXfPSVQ6Lu4oDKK2ReIf4Fzq4oY8rWU3uLNKrTgymgqbQ%2FN3RqTH8yJqEp76Kj9hBMSDPEWmEUR9sxFhb26Mh1mcpOmZJUg2Aju%2Bx22uXdU17RUDFlPC1DBw4EBY9iKcdCjjElVo4oiWtEeoZLygJYp6j3pGSdyZRvrT42APCD3GyV8H69cojZcy540SqpGxdjli5xH%2F&X-Amz-Signature=e8a7eba46f9779ffb84805b863e21d37e831af640e489a2bac57000279f4656b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUI3N5IA%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHh8fZiUnUPDwmTPm7UZXRgRGjcHXo0bNV3iuEtG0TsZAiEAyJFfnVbyAKpmE4bgAWc%2FR6dhE4IakJEzT%2Fn6u1wwdqgqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpUnYqLPSKjGMBdmyrcA8RtRKaMslYrJcgGQrKLDIkVEkjggWFfPjrXE9a4Udpco5ivBPI7D8grFxBRT4e5iLnAFcivB2yd2yFHtyMbVxhoVmInFJa5kB7lPoigcLwVuShYVBa4k7hlSoMJdjvvxEYjEV45%2FaWDJuDMMHwwPQeTex9QVcJQQdiDLN2ap8D9dycNHE%2FR2trWelFIsIYELq319XJzi3rTAw6NEwKa4STFHn135eTuv38u5cRDayoUVhApIAclD75Eob6EqfQ4yAmCn4FNLBStKa9TUC9DbJWHkXAluuPH8VmIMFluTgaz9jLnw0%2Bmj16SBq7OyYkrCjHMCNBlMvkmCknl6%2FQAyBuw0WHe0kKae1c3Hu6XfQdM5ZdkEuxX%2Fy3HQcNBghviIUfyw%2FLSpcm8FnTpv4A19gsE79QZeZWoplJJ%2FxGKm0DTlog%2BDWEYGUgytNdLaqZMjux4q1bdeuGdkLEuNOckXjN3mwbMWtAtILJPIHnkC09ZKPoi0R6SfwuVjwX0SaqM7JfWLxHLWtHp6xw2DVdQmY5WbQ35xxZNdDg5dkQoMRk%2FqIW0%2BGbfWTtXO3e30UdTH6l28A%2FFRzrLmfSPGrRmp2FkR27jQ%2FHCwHZYQQxDooGAt%2F%2BTcGM69DTJN64RMLOFk8oGOqUBLVxcPR0zCMNwqPhZL0oiSXfPSVQ6Lu4oDKK2ReIf4Fzq4oY8rWU3uLNKrTgymgqbQ%2FN3RqTH8yJqEp76Kj9hBMSDPEWmEUR9sxFhb26Mh1mcpOmZJUg2Aju%2Bx22uXdU17RUDFlPC1DBw4EBY9iKcdCjjElVo4oiWtEeoZLygJYp6j3pGSdyZRvrT42APCD3GyV8H69cojZcy540SqpGxdjli5xH%2F&X-Amz-Signature=60a4d12634058f83c4d3fd6e12ef5c3af4244d01e83043f8203ace269bcdebeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUI3N5IA%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHh8fZiUnUPDwmTPm7UZXRgRGjcHXo0bNV3iuEtG0TsZAiEAyJFfnVbyAKpmE4bgAWc%2FR6dhE4IakJEzT%2Fn6u1wwdqgqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpUnYqLPSKjGMBdmyrcA8RtRKaMslYrJcgGQrKLDIkVEkjggWFfPjrXE9a4Udpco5ivBPI7D8grFxBRT4e5iLnAFcivB2yd2yFHtyMbVxhoVmInFJa5kB7lPoigcLwVuShYVBa4k7hlSoMJdjvvxEYjEV45%2FaWDJuDMMHwwPQeTex9QVcJQQdiDLN2ap8D9dycNHE%2FR2trWelFIsIYELq319XJzi3rTAw6NEwKa4STFHn135eTuv38u5cRDayoUVhApIAclD75Eob6EqfQ4yAmCn4FNLBStKa9TUC9DbJWHkXAluuPH8VmIMFluTgaz9jLnw0%2Bmj16SBq7OyYkrCjHMCNBlMvkmCknl6%2FQAyBuw0WHe0kKae1c3Hu6XfQdM5ZdkEuxX%2Fy3HQcNBghviIUfyw%2FLSpcm8FnTpv4A19gsE79QZeZWoplJJ%2FxGKm0DTlog%2BDWEYGUgytNdLaqZMjux4q1bdeuGdkLEuNOckXjN3mwbMWtAtILJPIHnkC09ZKPoi0R6SfwuVjwX0SaqM7JfWLxHLWtHp6xw2DVdQmY5WbQ35xxZNdDg5dkQoMRk%2FqIW0%2BGbfWTtXO3e30UdTH6l28A%2FFRzrLmfSPGrRmp2FkR27jQ%2FHCwHZYQQxDooGAt%2F%2BTcGM69DTJN64RMLOFk8oGOqUBLVxcPR0zCMNwqPhZL0oiSXfPSVQ6Lu4oDKK2ReIf4Fzq4oY8rWU3uLNKrTgymgqbQ%2FN3RqTH8yJqEp76Kj9hBMSDPEWmEUR9sxFhb26Mh1mcpOmZJUg2Aju%2Bx22uXdU17RUDFlPC1DBw4EBY9iKcdCjjElVo4oiWtEeoZLygJYp6j3pGSdyZRvrT42APCD3GyV8H69cojZcy540SqpGxdjli5xH%2F&X-Amz-Signature=7ac3eb1b959c43394a9d75b7cf86fe1b5fcef58fb419374343d5f5a61d28fe26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUI3N5IA%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHh8fZiUnUPDwmTPm7UZXRgRGjcHXo0bNV3iuEtG0TsZAiEAyJFfnVbyAKpmE4bgAWc%2FR6dhE4IakJEzT%2Fn6u1wwdqgqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpUnYqLPSKjGMBdmyrcA8RtRKaMslYrJcgGQrKLDIkVEkjggWFfPjrXE9a4Udpco5ivBPI7D8grFxBRT4e5iLnAFcivB2yd2yFHtyMbVxhoVmInFJa5kB7lPoigcLwVuShYVBa4k7hlSoMJdjvvxEYjEV45%2FaWDJuDMMHwwPQeTex9QVcJQQdiDLN2ap8D9dycNHE%2FR2trWelFIsIYELq319XJzi3rTAw6NEwKa4STFHn135eTuv38u5cRDayoUVhApIAclD75Eob6EqfQ4yAmCn4FNLBStKa9TUC9DbJWHkXAluuPH8VmIMFluTgaz9jLnw0%2Bmj16SBq7OyYkrCjHMCNBlMvkmCknl6%2FQAyBuw0WHe0kKae1c3Hu6XfQdM5ZdkEuxX%2Fy3HQcNBghviIUfyw%2FLSpcm8FnTpv4A19gsE79QZeZWoplJJ%2FxGKm0DTlog%2BDWEYGUgytNdLaqZMjux4q1bdeuGdkLEuNOckXjN3mwbMWtAtILJPIHnkC09ZKPoi0R6SfwuVjwX0SaqM7JfWLxHLWtHp6xw2DVdQmY5WbQ35xxZNdDg5dkQoMRk%2FqIW0%2BGbfWTtXO3e30UdTH6l28A%2FFRzrLmfSPGrRmp2FkR27jQ%2FHCwHZYQQxDooGAt%2F%2BTcGM69DTJN64RMLOFk8oGOqUBLVxcPR0zCMNwqPhZL0oiSXfPSVQ6Lu4oDKK2ReIf4Fzq4oY8rWU3uLNKrTgymgqbQ%2FN3RqTH8yJqEp76Kj9hBMSDPEWmEUR9sxFhb26Mh1mcpOmZJUg2Aju%2Bx22uXdU17RUDFlPC1DBw4EBY9iKcdCjjElVo4oiWtEeoZLygJYp6j3pGSdyZRvrT42APCD3GyV8H69cojZcy540SqpGxdjli5xH%2F&X-Amz-Signature=8d0d2c20467285983d7fb82fd69501249f5ecbf0fc9f7b55d6e411bd0afdf632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUI3N5IA%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHh8fZiUnUPDwmTPm7UZXRgRGjcHXo0bNV3iuEtG0TsZAiEAyJFfnVbyAKpmE4bgAWc%2FR6dhE4IakJEzT%2Fn6u1wwdqgqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpUnYqLPSKjGMBdmyrcA8RtRKaMslYrJcgGQrKLDIkVEkjggWFfPjrXE9a4Udpco5ivBPI7D8grFxBRT4e5iLnAFcivB2yd2yFHtyMbVxhoVmInFJa5kB7lPoigcLwVuShYVBa4k7hlSoMJdjvvxEYjEV45%2FaWDJuDMMHwwPQeTex9QVcJQQdiDLN2ap8D9dycNHE%2FR2trWelFIsIYELq319XJzi3rTAw6NEwKa4STFHn135eTuv38u5cRDayoUVhApIAclD75Eob6EqfQ4yAmCn4FNLBStKa9TUC9DbJWHkXAluuPH8VmIMFluTgaz9jLnw0%2Bmj16SBq7OyYkrCjHMCNBlMvkmCknl6%2FQAyBuw0WHe0kKae1c3Hu6XfQdM5ZdkEuxX%2Fy3HQcNBghviIUfyw%2FLSpcm8FnTpv4A19gsE79QZeZWoplJJ%2FxGKm0DTlog%2BDWEYGUgytNdLaqZMjux4q1bdeuGdkLEuNOckXjN3mwbMWtAtILJPIHnkC09ZKPoi0R6SfwuVjwX0SaqM7JfWLxHLWtHp6xw2DVdQmY5WbQ35xxZNdDg5dkQoMRk%2FqIW0%2BGbfWTtXO3e30UdTH6l28A%2FFRzrLmfSPGrRmp2FkR27jQ%2FHCwHZYQQxDooGAt%2F%2BTcGM69DTJN64RMLOFk8oGOqUBLVxcPR0zCMNwqPhZL0oiSXfPSVQ6Lu4oDKK2ReIf4Fzq4oY8rWU3uLNKrTgymgqbQ%2FN3RqTH8yJqEp76Kj9hBMSDPEWmEUR9sxFhb26Mh1mcpOmZJUg2Aju%2Bx22uXdU17RUDFlPC1DBw4EBY9iKcdCjjElVo4oiWtEeoZLygJYp6j3pGSdyZRvrT42APCD3GyV8H69cojZcy540SqpGxdjli5xH%2F&X-Amz-Signature=fbdb1444ef2c2f11a168cc623dfe2ff888a03ce16e3a673c52d8164818f2c4fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUI3N5IA%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHh8fZiUnUPDwmTPm7UZXRgRGjcHXo0bNV3iuEtG0TsZAiEAyJFfnVbyAKpmE4bgAWc%2FR6dhE4IakJEzT%2Fn6u1wwdqgqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpUnYqLPSKjGMBdmyrcA8RtRKaMslYrJcgGQrKLDIkVEkjggWFfPjrXE9a4Udpco5ivBPI7D8grFxBRT4e5iLnAFcivB2yd2yFHtyMbVxhoVmInFJa5kB7lPoigcLwVuShYVBa4k7hlSoMJdjvvxEYjEV45%2FaWDJuDMMHwwPQeTex9QVcJQQdiDLN2ap8D9dycNHE%2FR2trWelFIsIYELq319XJzi3rTAw6NEwKa4STFHn135eTuv38u5cRDayoUVhApIAclD75Eob6EqfQ4yAmCn4FNLBStKa9TUC9DbJWHkXAluuPH8VmIMFluTgaz9jLnw0%2Bmj16SBq7OyYkrCjHMCNBlMvkmCknl6%2FQAyBuw0WHe0kKae1c3Hu6XfQdM5ZdkEuxX%2Fy3HQcNBghviIUfyw%2FLSpcm8FnTpv4A19gsE79QZeZWoplJJ%2FxGKm0DTlog%2BDWEYGUgytNdLaqZMjux4q1bdeuGdkLEuNOckXjN3mwbMWtAtILJPIHnkC09ZKPoi0R6SfwuVjwX0SaqM7JfWLxHLWtHp6xw2DVdQmY5WbQ35xxZNdDg5dkQoMRk%2FqIW0%2BGbfWTtXO3e30UdTH6l28A%2FFRzrLmfSPGrRmp2FkR27jQ%2FHCwHZYQQxDooGAt%2F%2BTcGM69DTJN64RMLOFk8oGOqUBLVxcPR0zCMNwqPhZL0oiSXfPSVQ6Lu4oDKK2ReIf4Fzq4oY8rWU3uLNKrTgymgqbQ%2FN3RqTH8yJqEp76Kj9hBMSDPEWmEUR9sxFhb26Mh1mcpOmZJUg2Aju%2Bx22uXdU17RUDFlPC1DBw4EBY9iKcdCjjElVo4oiWtEeoZLygJYp6j3pGSdyZRvrT42APCD3GyV8H69cojZcy540SqpGxdjli5xH%2F&X-Amz-Signature=03b59752c731bd1018d6bb0cfdbc32cb2417c2ab4e914562abe21e5ee037c2fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY5WCCXX%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG9zNmQK8dbh8Y%2FS9kZN%2By01kGjOXEFY0oe88%2FSNbC2gIgY5EYs7qermdSLrSWf9J%2Bm%2F0r%2FMMkJBm1sPohnEIVwmoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZ3DDHxeX7W5xT%2BuCrcA%2FrRcyzjE713yaWWrH1TevjSW1yDwI6gbjgKIMgaBpJ11gerxkiYFMoPrNOB%2BRcz6E5n6%2BDqgMDJbYeJpDWqSj3KImXVsIPfgapFuQ42G1cddoX5bz%2BdrlGgOjyGsiKfC2rIRmVQKHYyMs2cIiPeA8GW%2FdiDy1S0xDMGi%2BDqgSfAX6irk0Ly6joCW9Ty%2FYaUQiOKf%2BZPG5GI%2FpFjerqoHzhB3q9vYDnlyLyTo0AjWn%2Bhz7ZFWwbkNRLih%2F%2Biusr2Cguy1hlHTQ%2FJ6uTt4FhWTGaxce82iGIvKJOFMPtZ57Z730DBw07Sj3dRzAKICRmtEiXKHcA6CM5lOJcpDRQuAcRxhz06ZZSeqz%2FBtb2M5BLmzoJgecYkb62ZRGFbd%2BwJdkYViSrejGhnUdaE%2BMWGeuBluqtEekObQwzKONonQwlTDjpWPSjeTUIhD8n9iD0i6dP01MdupFWVfV1%2FrvzLGpfKtoJVa6Y9R%2BQskRffgy08O0smmv%2FAmCjaipkXIvQt8424PTxwPhzbYmvTJMg4OZxak2E9UwWW6quFH8whUCN9GP8ZlEwgvE3EezRryH%2FImbkMH8zKa9KRsNm7wz8YXLZMwnFaTIpSukX66xIs6QOiM5p2CtEAL9AGtGTBMLeFk8oGOqUBapheBaHARGlbZSi0NggMYrqD9Iawn7aEK3tN0ZNU3VIQYJQr5cA6%2FKgkcFG7txZITk3epaa0oyeW0Ms%2BnTg2IUQTtD1lepShEf6kwNW4caxB7kW7Hf4eW%2FqIonvM%2BsZ1kfpLf5DRIraDEQrl%2FHSSGlFf6OQkya5YMxAMd0K%2FVX5CiNzFH2AAj1KJp%2BYUbsrc4BulcVkWbLBKHmB89y2u3vqLLoL4&X-Amz-Signature=207d0f60cbc032274f10e100151829d4dd9ad8e57632c707e264ad6ac1e7566f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY5WCCXX%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG9zNmQK8dbh8Y%2FS9kZN%2By01kGjOXEFY0oe88%2FSNbC2gIgY5EYs7qermdSLrSWf9J%2Bm%2F0r%2FMMkJBm1sPohnEIVwmoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZ3DDHxeX7W5xT%2BuCrcA%2FrRcyzjE713yaWWrH1TevjSW1yDwI6gbjgKIMgaBpJ11gerxkiYFMoPrNOB%2BRcz6E5n6%2BDqgMDJbYeJpDWqSj3KImXVsIPfgapFuQ42G1cddoX5bz%2BdrlGgOjyGsiKfC2rIRmVQKHYyMs2cIiPeA8GW%2FdiDy1S0xDMGi%2BDqgSfAX6irk0Ly6joCW9Ty%2FYaUQiOKf%2BZPG5GI%2FpFjerqoHzhB3q9vYDnlyLyTo0AjWn%2Bhz7ZFWwbkNRLih%2F%2Biusr2Cguy1hlHTQ%2FJ6uTt4FhWTGaxce82iGIvKJOFMPtZ57Z730DBw07Sj3dRzAKICRmtEiXKHcA6CM5lOJcpDRQuAcRxhz06ZZSeqz%2FBtb2M5BLmzoJgecYkb62ZRGFbd%2BwJdkYViSrejGhnUdaE%2BMWGeuBluqtEekObQwzKONonQwlTDjpWPSjeTUIhD8n9iD0i6dP01MdupFWVfV1%2FrvzLGpfKtoJVa6Y9R%2BQskRffgy08O0smmv%2FAmCjaipkXIvQt8424PTxwPhzbYmvTJMg4OZxak2E9UwWW6quFH8whUCN9GP8ZlEwgvE3EezRryH%2FImbkMH8zKa9KRsNm7wz8YXLZMwnFaTIpSukX66xIs6QOiM5p2CtEAL9AGtGTBMLeFk8oGOqUBapheBaHARGlbZSi0NggMYrqD9Iawn7aEK3tN0ZNU3VIQYJQr5cA6%2FKgkcFG7txZITk3epaa0oyeW0Ms%2BnTg2IUQTtD1lepShEf6kwNW4caxB7kW7Hf4eW%2FqIonvM%2BsZ1kfpLf5DRIraDEQrl%2FHSSGlFf6OQkya5YMxAMd0K%2FVX5CiNzFH2AAj1KJp%2BYUbsrc4BulcVkWbLBKHmB89y2u3vqLLoL4&X-Amz-Signature=748937e8a707f0b252693df38a22ccd06a4ac0ffc674547c8d49acade51167cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY5WCCXX%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG9zNmQK8dbh8Y%2FS9kZN%2By01kGjOXEFY0oe88%2FSNbC2gIgY5EYs7qermdSLrSWf9J%2Bm%2F0r%2FMMkJBm1sPohnEIVwmoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZ3DDHxeX7W5xT%2BuCrcA%2FrRcyzjE713yaWWrH1TevjSW1yDwI6gbjgKIMgaBpJ11gerxkiYFMoPrNOB%2BRcz6E5n6%2BDqgMDJbYeJpDWqSj3KImXVsIPfgapFuQ42G1cddoX5bz%2BdrlGgOjyGsiKfC2rIRmVQKHYyMs2cIiPeA8GW%2FdiDy1S0xDMGi%2BDqgSfAX6irk0Ly6joCW9Ty%2FYaUQiOKf%2BZPG5GI%2FpFjerqoHzhB3q9vYDnlyLyTo0AjWn%2Bhz7ZFWwbkNRLih%2F%2Biusr2Cguy1hlHTQ%2FJ6uTt4FhWTGaxce82iGIvKJOFMPtZ57Z730DBw07Sj3dRzAKICRmtEiXKHcA6CM5lOJcpDRQuAcRxhz06ZZSeqz%2FBtb2M5BLmzoJgecYkb62ZRGFbd%2BwJdkYViSrejGhnUdaE%2BMWGeuBluqtEekObQwzKONonQwlTDjpWPSjeTUIhD8n9iD0i6dP01MdupFWVfV1%2FrvzLGpfKtoJVa6Y9R%2BQskRffgy08O0smmv%2FAmCjaipkXIvQt8424PTxwPhzbYmvTJMg4OZxak2E9UwWW6quFH8whUCN9GP8ZlEwgvE3EezRryH%2FImbkMH8zKa9KRsNm7wz8YXLZMwnFaTIpSukX66xIs6QOiM5p2CtEAL9AGtGTBMLeFk8oGOqUBapheBaHARGlbZSi0NggMYrqD9Iawn7aEK3tN0ZNU3VIQYJQr5cA6%2FKgkcFG7txZITk3epaa0oyeW0Ms%2BnTg2IUQTtD1lepShEf6kwNW4caxB7kW7Hf4eW%2FqIonvM%2BsZ1kfpLf5DRIraDEQrl%2FHSSGlFf6OQkya5YMxAMd0K%2FVX5CiNzFH2AAj1KJp%2BYUbsrc4BulcVkWbLBKHmB89y2u3vqLLoL4&X-Amz-Signature=f99701113cfd3645e404cb053761aae8260c162d84d77674dcf9c399a67ea65c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY5WCCXX%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG9zNmQK8dbh8Y%2FS9kZN%2By01kGjOXEFY0oe88%2FSNbC2gIgY5EYs7qermdSLrSWf9J%2Bm%2F0r%2FMMkJBm1sPohnEIVwmoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZ3DDHxeX7W5xT%2BuCrcA%2FrRcyzjE713yaWWrH1TevjSW1yDwI6gbjgKIMgaBpJ11gerxkiYFMoPrNOB%2BRcz6E5n6%2BDqgMDJbYeJpDWqSj3KImXVsIPfgapFuQ42G1cddoX5bz%2BdrlGgOjyGsiKfC2rIRmVQKHYyMs2cIiPeA8GW%2FdiDy1S0xDMGi%2BDqgSfAX6irk0Ly6joCW9Ty%2FYaUQiOKf%2BZPG5GI%2FpFjerqoHzhB3q9vYDnlyLyTo0AjWn%2Bhz7ZFWwbkNRLih%2F%2Biusr2Cguy1hlHTQ%2FJ6uTt4FhWTGaxce82iGIvKJOFMPtZ57Z730DBw07Sj3dRzAKICRmtEiXKHcA6CM5lOJcpDRQuAcRxhz06ZZSeqz%2FBtb2M5BLmzoJgecYkb62ZRGFbd%2BwJdkYViSrejGhnUdaE%2BMWGeuBluqtEekObQwzKONonQwlTDjpWPSjeTUIhD8n9iD0i6dP01MdupFWVfV1%2FrvzLGpfKtoJVa6Y9R%2BQskRffgy08O0smmv%2FAmCjaipkXIvQt8424PTxwPhzbYmvTJMg4OZxak2E9UwWW6quFH8whUCN9GP8ZlEwgvE3EezRryH%2FImbkMH8zKa9KRsNm7wz8YXLZMwnFaTIpSukX66xIs6QOiM5p2CtEAL9AGtGTBMLeFk8oGOqUBapheBaHARGlbZSi0NggMYrqD9Iawn7aEK3tN0ZNU3VIQYJQr5cA6%2FKgkcFG7txZITk3epaa0oyeW0Ms%2BnTg2IUQTtD1lepShEf6kwNW4caxB7kW7Hf4eW%2FqIonvM%2BsZ1kfpLf5DRIraDEQrl%2FHSSGlFf6OQkya5YMxAMd0K%2FVX5CiNzFH2AAj1KJp%2BYUbsrc4BulcVkWbLBKHmB89y2u3vqLLoL4&X-Amz-Signature=b4d442dc8119a40136e8b1a9ef0ca534e25cfeaddea289f554b0d4c813203804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY5WCCXX%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG9zNmQK8dbh8Y%2FS9kZN%2By01kGjOXEFY0oe88%2FSNbC2gIgY5EYs7qermdSLrSWf9J%2Bm%2F0r%2FMMkJBm1sPohnEIVwmoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZ3DDHxeX7W5xT%2BuCrcA%2FrRcyzjE713yaWWrH1TevjSW1yDwI6gbjgKIMgaBpJ11gerxkiYFMoPrNOB%2BRcz6E5n6%2BDqgMDJbYeJpDWqSj3KImXVsIPfgapFuQ42G1cddoX5bz%2BdrlGgOjyGsiKfC2rIRmVQKHYyMs2cIiPeA8GW%2FdiDy1S0xDMGi%2BDqgSfAX6irk0Ly6joCW9Ty%2FYaUQiOKf%2BZPG5GI%2FpFjerqoHzhB3q9vYDnlyLyTo0AjWn%2Bhz7ZFWwbkNRLih%2F%2Biusr2Cguy1hlHTQ%2FJ6uTt4FhWTGaxce82iGIvKJOFMPtZ57Z730DBw07Sj3dRzAKICRmtEiXKHcA6CM5lOJcpDRQuAcRxhz06ZZSeqz%2FBtb2M5BLmzoJgecYkb62ZRGFbd%2BwJdkYViSrejGhnUdaE%2BMWGeuBluqtEekObQwzKONonQwlTDjpWPSjeTUIhD8n9iD0i6dP01MdupFWVfV1%2FrvzLGpfKtoJVa6Y9R%2BQskRffgy08O0smmv%2FAmCjaipkXIvQt8424PTxwPhzbYmvTJMg4OZxak2E9UwWW6quFH8whUCN9GP8ZlEwgvE3EezRryH%2FImbkMH8zKa9KRsNm7wz8YXLZMwnFaTIpSukX66xIs6QOiM5p2CtEAL9AGtGTBMLeFk8oGOqUBapheBaHARGlbZSi0NggMYrqD9Iawn7aEK3tN0ZNU3VIQYJQr5cA6%2FKgkcFG7txZITk3epaa0oyeW0Ms%2BnTg2IUQTtD1lepShEf6kwNW4caxB7kW7Hf4eW%2FqIonvM%2BsZ1kfpLf5DRIraDEQrl%2FHSSGlFf6OQkya5YMxAMd0K%2FVX5CiNzFH2AAj1KJp%2BYUbsrc4BulcVkWbLBKHmB89y2u3vqLLoL4&X-Amz-Signature=c81c457ed712053232309184930c9e659280ae6550e762cbd679cfeaf10085d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PEB7TR%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHpfdxYu%2BIICQhU%2Bj3qWEnIpYK%2BBq9R8DiDhIEbBNroAIhAMyJaLXJSs6Y3PPa26FH3jFMjovxTR4nFDbt6UOvIZn1KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGmpENW8olX2CyaHMq3AP5TfYIhIe1lBcbhmWQm2hVMM3k2KelzIR91luOI8QcVuRmrzwEIEm7lFjO1vXjcsjCG6MUo3xE51Q5xUy5zLVFIJztiOTV68GeiQWFzsBMD6WBqneXm%2BI9sgWPujeeChibP327Om%2BnxJ3IIfMyv1eUQCHV%2FptuDA3LaiN1PCETxsaYwRmr6hddexWQHgOSb4ojzHr273xwophDRtMrFdG%2Fj8y4pxDIuqoC2eDWnB%2B4IgMAdADLxApjcr3IjFkjceQbLggZ6eXiSXIjcF5O72g5TY5x8Ax8GJLniTygsIw5nIXtdoRKkO12yigDtnzbS2MQV6XV30Qp9PT%2BzC549YKIBWGiLCupQNqCV2u9kHJGYhTy7MVx5jC3X2SYZizGCvKYTa55iQT4OHagAgQbWq307rLGx4XAHmKfBUo9eijBu0Deg%2FQvoYUdZSvO7T%2FlDmMxo98LORvrgEd29SCKvOZtBnRYAcURAE4zjEHlXcG8T04H0yYggW2ujXuw%2FYvZIJO%2FpT4rFWL%2F6Crwa6ZnGt3VnfOlMyKmh6gNxTP5y7ByN2vFn5Sq8l7Oe1pgrJTtL5TZednSROklbKR5e1FFuiXzrC0DJQ5UZ%2FpzR3k3uDY5idwv3z3ICJTqqsLnFzD3hJPKBjqkAXXispfRD1Ls9tII6AsQ65qObL8qvbaMkuDWmB5dYePl4C3DGTWc9IDba%2FBdkuJlG%2Fq9UbEfdUPbGkSxCWmyQ0v6AsjFIhQZ8QV2QGHEKHrai5XbK7u5AGWudXxtWkZI%2BxBX8Osj26kKx6D9MZCbAf8%2BZbqNYT6IAdCs0%2FfZfD%2BpkX79McLI%2Bxj7AM6JqcPBOAYDWXDLW74nDOAkdCzYyCQaqkLY&X-Amz-Signature=132cd4b07e459c173900696fc2e604873a078c4d73521eff1c49924bfd314de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PEB7TR%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHpfdxYu%2BIICQhU%2Bj3qWEnIpYK%2BBq9R8DiDhIEbBNroAIhAMyJaLXJSs6Y3PPa26FH3jFMjovxTR4nFDbt6UOvIZn1KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGmpENW8olX2CyaHMq3AP5TfYIhIe1lBcbhmWQm2hVMM3k2KelzIR91luOI8QcVuRmrzwEIEm7lFjO1vXjcsjCG6MUo3xE51Q5xUy5zLVFIJztiOTV68GeiQWFzsBMD6WBqneXm%2BI9sgWPujeeChibP327Om%2BnxJ3IIfMyv1eUQCHV%2FptuDA3LaiN1PCETxsaYwRmr6hddexWQHgOSb4ojzHr273xwophDRtMrFdG%2Fj8y4pxDIuqoC2eDWnB%2B4IgMAdADLxApjcr3IjFkjceQbLggZ6eXiSXIjcF5O72g5TY5x8Ax8GJLniTygsIw5nIXtdoRKkO12yigDtnzbS2MQV6XV30Qp9PT%2BzC549YKIBWGiLCupQNqCV2u9kHJGYhTy7MVx5jC3X2SYZizGCvKYTa55iQT4OHagAgQbWq307rLGx4XAHmKfBUo9eijBu0Deg%2FQvoYUdZSvO7T%2FlDmMxo98LORvrgEd29SCKvOZtBnRYAcURAE4zjEHlXcG8T04H0yYggW2ujXuw%2FYvZIJO%2FpT4rFWL%2F6Crwa6ZnGt3VnfOlMyKmh6gNxTP5y7ByN2vFn5Sq8l7Oe1pgrJTtL5TZednSROklbKR5e1FFuiXzrC0DJQ5UZ%2FpzR3k3uDY5idwv3z3ICJTqqsLnFzD3hJPKBjqkAXXispfRD1Ls9tII6AsQ65qObL8qvbaMkuDWmB5dYePl4C3DGTWc9IDba%2FBdkuJlG%2Fq9UbEfdUPbGkSxCWmyQ0v6AsjFIhQZ8QV2QGHEKHrai5XbK7u5AGWudXxtWkZI%2BxBX8Osj26kKx6D9MZCbAf8%2BZbqNYT6IAdCs0%2FfZfD%2BpkX79McLI%2Bxj7AM6JqcPBOAYDWXDLW74nDOAkdCzYyCQaqkLY&X-Amz-Signature=93ba559aa496c16222d99679e42796cdc6b4e13169c2b551ac204f0ad5737224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PEB7TR%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHpfdxYu%2BIICQhU%2Bj3qWEnIpYK%2BBq9R8DiDhIEbBNroAIhAMyJaLXJSs6Y3PPa26FH3jFMjovxTR4nFDbt6UOvIZn1KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGmpENW8olX2CyaHMq3AP5TfYIhIe1lBcbhmWQm2hVMM3k2KelzIR91luOI8QcVuRmrzwEIEm7lFjO1vXjcsjCG6MUo3xE51Q5xUy5zLVFIJztiOTV68GeiQWFzsBMD6WBqneXm%2BI9sgWPujeeChibP327Om%2BnxJ3IIfMyv1eUQCHV%2FptuDA3LaiN1PCETxsaYwRmr6hddexWQHgOSb4ojzHr273xwophDRtMrFdG%2Fj8y4pxDIuqoC2eDWnB%2B4IgMAdADLxApjcr3IjFkjceQbLggZ6eXiSXIjcF5O72g5TY5x8Ax8GJLniTygsIw5nIXtdoRKkO12yigDtnzbS2MQV6XV30Qp9PT%2BzC549YKIBWGiLCupQNqCV2u9kHJGYhTy7MVx5jC3X2SYZizGCvKYTa55iQT4OHagAgQbWq307rLGx4XAHmKfBUo9eijBu0Deg%2FQvoYUdZSvO7T%2FlDmMxo98LORvrgEd29SCKvOZtBnRYAcURAE4zjEHlXcG8T04H0yYggW2ujXuw%2FYvZIJO%2FpT4rFWL%2F6Crwa6ZnGt3VnfOlMyKmh6gNxTP5y7ByN2vFn5Sq8l7Oe1pgrJTtL5TZednSROklbKR5e1FFuiXzrC0DJQ5UZ%2FpzR3k3uDY5idwv3z3ICJTqqsLnFzD3hJPKBjqkAXXispfRD1Ls9tII6AsQ65qObL8qvbaMkuDWmB5dYePl4C3DGTWc9IDba%2FBdkuJlG%2Fq9UbEfdUPbGkSxCWmyQ0v6AsjFIhQZ8QV2QGHEKHrai5XbK7u5AGWudXxtWkZI%2BxBX8Osj26kKx6D9MZCbAf8%2BZbqNYT6IAdCs0%2FfZfD%2BpkX79McLI%2Bxj7AM6JqcPBOAYDWXDLW74nDOAkdCzYyCQaqkLY&X-Amz-Signature=6b4f42df939aebffe378f574b7c48ae28e3b3a0c982822217b44a98e3bc3f647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUQ5ZNOC%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4LuXJfWuFFu9s3mI1yN4h%2BARX%2B8tK44X2OppEnH%2FWrQIgbJ6BQEvBYlMoF795%2BCbYP5CxoGyOuPqhbFg5B7nIkGgqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBM3rkFQEbm6EEpxmSrcAziyUbkPA4AfXM4kVmS%2FMpwowAO3L3bFL2wC3Ie4ZTk740ZCxXb%2BKnBei7Y8TvXztVwRfGN3ccI3GzbTz9xrjIJLdvlJ6Ok2THyD7s9QxrnZBhuq7M6HqdEHt8Sa4RoFMLKej1yGIE5VtxFmE0MfEz40ALTAzdz25xVs0WlkdzWvWK3xEZJnYCTUWj64L61HA9ICiC9Mgej43ADvfvw50wVwzmpl%2Fcr9nr029VHHz2ERRonAQpP1z5IAtwMqWmvbssLZ236j78hrqCGSWwzgIGNcz2vRS5m4cLallzPI42dOAH9%2FMuS8SOwRTs%2FcVxACH5i3hcAInQpMBz6%2BBhZ%2Bg4K6rzqGcy3bUFPqtTu0vmx4cWFEN1Y3u42dW48W%2BjOOYl6EibAm%2F6gt1ihlsMpr90V6ydvsYQN3zYI0S6VLNUIvI%2BYpdzymeRGdyD7erI482J5i4yO6dBJKSQ8p7a8gfskr7ZbNJgua9CIxoP2q5j0yECLcRFa8jmXkZ2mUJJn3psF7Kub93a8wDC9fSklRxoV3cbCmkIde3Yb%2BTQS8%2FOgli6o05Es7cUnig7y2LWDAh3X%2BGXoLI9JckeoBXN3r7h9YWBJpF6BtwxtXSyaNPza4zpglPL2rPPuSo%2F1aMPSFk8oGOqUB%2FsP3gWgglYrv%2B35EjV%2BHd7F2nNBb06UEeh8RGaSspdc5e6tu7BymBZWYkzk7DXKA7RHpigXaZuvaOPiR68gIKVIwt2kKfkX%2BQhEVWN5ZTwbeC2KCOa317Lc%2FH5FGd5ilKR3AsVmwV6AbzewvrLVuRpyjc%2FPP3G7NU%2F2yeHAXKQTwE%2FCsnwG9enwPfvl9N%2FGmtwot%2Fk5DAAItjs6lLLucoQBV74bT&X-Amz-Signature=b889dac8e96833b09d0b8f4ecda4b6c9d9dbe36c885eeef3727846825fce2b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUQ5ZNOC%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4LuXJfWuFFu9s3mI1yN4h%2BARX%2B8tK44X2OppEnH%2FWrQIgbJ6BQEvBYlMoF795%2BCbYP5CxoGyOuPqhbFg5B7nIkGgqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBM3rkFQEbm6EEpxmSrcAziyUbkPA4AfXM4kVmS%2FMpwowAO3L3bFL2wC3Ie4ZTk740ZCxXb%2BKnBei7Y8TvXztVwRfGN3ccI3GzbTz9xrjIJLdvlJ6Ok2THyD7s9QxrnZBhuq7M6HqdEHt8Sa4RoFMLKej1yGIE5VtxFmE0MfEz40ALTAzdz25xVs0WlkdzWvWK3xEZJnYCTUWj64L61HA9ICiC9Mgej43ADvfvw50wVwzmpl%2Fcr9nr029VHHz2ERRonAQpP1z5IAtwMqWmvbssLZ236j78hrqCGSWwzgIGNcz2vRS5m4cLallzPI42dOAH9%2FMuS8SOwRTs%2FcVxACH5i3hcAInQpMBz6%2BBhZ%2Bg4K6rzqGcy3bUFPqtTu0vmx4cWFEN1Y3u42dW48W%2BjOOYl6EibAm%2F6gt1ihlsMpr90V6ydvsYQN3zYI0S6VLNUIvI%2BYpdzymeRGdyD7erI482J5i4yO6dBJKSQ8p7a8gfskr7ZbNJgua9CIxoP2q5j0yECLcRFa8jmXkZ2mUJJn3psF7Kub93a8wDC9fSklRxoV3cbCmkIde3Yb%2BTQS8%2FOgli6o05Es7cUnig7y2LWDAh3X%2BGXoLI9JckeoBXN3r7h9YWBJpF6BtwxtXSyaNPza4zpglPL2rPPuSo%2F1aMPSFk8oGOqUB%2FsP3gWgglYrv%2B35EjV%2BHd7F2nNBb06UEeh8RGaSspdc5e6tu7BymBZWYkzk7DXKA7RHpigXaZuvaOPiR68gIKVIwt2kKfkX%2BQhEVWN5ZTwbeC2KCOa317Lc%2FH5FGd5ilKR3AsVmwV6AbzewvrLVuRpyjc%2FPP3G7NU%2F2yeHAXKQTwE%2FCsnwG9enwPfvl9N%2FGmtwot%2Fk5DAAItjs6lLLucoQBV74bT&X-Amz-Signature=67290ec9ad6144e943ca744ee915957ebb5a01a0b77a59801b300d3fda09c5e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SIJIIVI%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRPVBO%2FHem1WxSahyK97DNKBSxzvtA2JuWHxigofxdtQIhAPrnrJASyIeSUCtdC7ALjF%2FQ89awODIEAJ1XqsOiLcd7KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxoUShKibg%2FmOd23kq3ANSBr1oN7nhiDTab129kPCTeaU2R8BSbTFUrE7%2FYD7GlnVMIBespEEPXkmSYoEqKOmnimhSdmV6IxoZ0V0VKz%2FvxgiA3Rb%2Fh3hdstFU%2BKAbPeyoyUMdfKHVgZ1iyMdsh09gcMaIu6tN%2FZXDghkfUrtOE1IANEC8Mu5LDpcCrDmPZHwjCN%2BNApIHuuwT0lnZ2KseZQJ%2Bh%2FhP4ReiJkExvIeMLjNRjjx25S0ESSpI4vauPzazIr36RVUsnQBrYtX2GLkFgNsSEaFWrBbNuhH2pRVw5w80CXQmk7%2Fv0MsGX1JWVNNhPbkWSvIPibwZLkDEuhGlivv3la1bw1ofCei1XDUJ12T1oVMTyNU13p8RagesRJQRskbS15JXbUqY8OZvvpNVAVCY8OecPkmvhJRBowjP1qjjUj9XsOZcDh9uJuXfQRd2r%2F0zCU3LHwkGIuCNDhXLU%2BA9j48pwiHD78zvUIiY0C5xTtcMmxyVrXy3xxNOKdtv1zu24mpBFCOjlNpyk6pTUO9QMQ7QuaYFLA%2Bv7UeBgzCI%2BF35g9iGYI9IQHe3ObFqfFHopW2tWKmhdjTTJkl2Dr4jedtJyhiQEyRBL7Uzc1BVkM8gAaE6wHpLYZ3HfBqlHOvM4Ij4PAilqjD3hJPKBjqkAQ9cdOxy%2FYmVVYmFRa7SjJ3%2FpUgUUUT%2FlackSjv%2FeoAQJEOb040diuv6lhwu%2Bf6o6tpIoEnQJ2G528BV2d0T2DavB%2BTt0jquwXONdkJad6L%2FiqKSVROGaXBG02xUf2k7JGV2w8WKdh%2FBSmDEW0u3iC4PKcosD7c84TO1TrPOrG2qQAiKPtp%2BJaCfzCg0H3pZcSxet4CIWOUe%2BSuUb9hJ1Rc5uNB2&X-Amz-Signature=a86bfbd75018246ae8d252d5de5d0d4988dfff08434acc71c21443ed16013d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SIJIIVI%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRPVBO%2FHem1WxSahyK97DNKBSxzvtA2JuWHxigofxdtQIhAPrnrJASyIeSUCtdC7ALjF%2FQ89awODIEAJ1XqsOiLcd7KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxoUShKibg%2FmOd23kq3ANSBr1oN7nhiDTab129kPCTeaU2R8BSbTFUrE7%2FYD7GlnVMIBespEEPXkmSYoEqKOmnimhSdmV6IxoZ0V0VKz%2FvxgiA3Rb%2Fh3hdstFU%2BKAbPeyoyUMdfKHVgZ1iyMdsh09gcMaIu6tN%2FZXDghkfUrtOE1IANEC8Mu5LDpcCrDmPZHwjCN%2BNApIHuuwT0lnZ2KseZQJ%2Bh%2FhP4ReiJkExvIeMLjNRjjx25S0ESSpI4vauPzazIr36RVUsnQBrYtX2GLkFgNsSEaFWrBbNuhH2pRVw5w80CXQmk7%2Fv0MsGX1JWVNNhPbkWSvIPibwZLkDEuhGlivv3la1bw1ofCei1XDUJ12T1oVMTyNU13p8RagesRJQRskbS15JXbUqY8OZvvpNVAVCY8OecPkmvhJRBowjP1qjjUj9XsOZcDh9uJuXfQRd2r%2F0zCU3LHwkGIuCNDhXLU%2BA9j48pwiHD78zvUIiY0C5xTtcMmxyVrXy3xxNOKdtv1zu24mpBFCOjlNpyk6pTUO9QMQ7QuaYFLA%2Bv7UeBgzCI%2BF35g9iGYI9IQHe3ObFqfFHopW2tWKmhdjTTJkl2Dr4jedtJyhiQEyRBL7Uzc1BVkM8gAaE6wHpLYZ3HfBqlHOvM4Ij4PAilqjD3hJPKBjqkAQ9cdOxy%2FYmVVYmFRa7SjJ3%2FpUgUUUT%2FlackSjv%2FeoAQJEOb040diuv6lhwu%2Bf6o6tpIoEnQJ2G528BV2d0T2DavB%2BTt0jquwXONdkJad6L%2FiqKSVROGaXBG02xUf2k7JGV2w8WKdh%2FBSmDEW0u3iC4PKcosD7c84TO1TrPOrG2qQAiKPtp%2BJaCfzCg0H3pZcSxet4CIWOUe%2BSuUb9hJ1Rc5uNB2&X-Amz-Signature=7284950cef7a08491c909dfaa564da7279ac7c4d9c02caf7e2889359c22e3db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SIJIIVI%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRPVBO%2FHem1WxSahyK97DNKBSxzvtA2JuWHxigofxdtQIhAPrnrJASyIeSUCtdC7ALjF%2FQ89awODIEAJ1XqsOiLcd7KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxoUShKibg%2FmOd23kq3ANSBr1oN7nhiDTab129kPCTeaU2R8BSbTFUrE7%2FYD7GlnVMIBespEEPXkmSYoEqKOmnimhSdmV6IxoZ0V0VKz%2FvxgiA3Rb%2Fh3hdstFU%2BKAbPeyoyUMdfKHVgZ1iyMdsh09gcMaIu6tN%2FZXDghkfUrtOE1IANEC8Mu5LDpcCrDmPZHwjCN%2BNApIHuuwT0lnZ2KseZQJ%2Bh%2FhP4ReiJkExvIeMLjNRjjx25S0ESSpI4vauPzazIr36RVUsnQBrYtX2GLkFgNsSEaFWrBbNuhH2pRVw5w80CXQmk7%2Fv0MsGX1JWVNNhPbkWSvIPibwZLkDEuhGlivv3la1bw1ofCei1XDUJ12T1oVMTyNU13p8RagesRJQRskbS15JXbUqY8OZvvpNVAVCY8OecPkmvhJRBowjP1qjjUj9XsOZcDh9uJuXfQRd2r%2F0zCU3LHwkGIuCNDhXLU%2BA9j48pwiHD78zvUIiY0C5xTtcMmxyVrXy3xxNOKdtv1zu24mpBFCOjlNpyk6pTUO9QMQ7QuaYFLA%2Bv7UeBgzCI%2BF35g9iGYI9IQHe3ObFqfFHopW2tWKmhdjTTJkl2Dr4jedtJyhiQEyRBL7Uzc1BVkM8gAaE6wHpLYZ3HfBqlHOvM4Ij4PAilqjD3hJPKBjqkAQ9cdOxy%2FYmVVYmFRa7SjJ3%2FpUgUUUT%2FlackSjv%2FeoAQJEOb040diuv6lhwu%2Bf6o6tpIoEnQJ2G528BV2d0T2DavB%2BTt0jquwXONdkJad6L%2FiqKSVROGaXBG02xUf2k7JGV2w8WKdh%2FBSmDEW0u3iC4PKcosD7c84TO1TrPOrG2qQAiKPtp%2BJaCfzCg0H3pZcSxet4CIWOUe%2BSuUb9hJ1Rc5uNB2&X-Amz-Signature=5a78d54ad7dcda4720de370acf9fcf4eebe64343449c789acc9cea5622b12bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SIJIIVI%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRPVBO%2FHem1WxSahyK97DNKBSxzvtA2JuWHxigofxdtQIhAPrnrJASyIeSUCtdC7ALjF%2FQ89awODIEAJ1XqsOiLcd7KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxoUShKibg%2FmOd23kq3ANSBr1oN7nhiDTab129kPCTeaU2R8BSbTFUrE7%2FYD7GlnVMIBespEEPXkmSYoEqKOmnimhSdmV6IxoZ0V0VKz%2FvxgiA3Rb%2Fh3hdstFU%2BKAbPeyoyUMdfKHVgZ1iyMdsh09gcMaIu6tN%2FZXDghkfUrtOE1IANEC8Mu5LDpcCrDmPZHwjCN%2BNApIHuuwT0lnZ2KseZQJ%2Bh%2FhP4ReiJkExvIeMLjNRjjx25S0ESSpI4vauPzazIr36RVUsnQBrYtX2GLkFgNsSEaFWrBbNuhH2pRVw5w80CXQmk7%2Fv0MsGX1JWVNNhPbkWSvIPibwZLkDEuhGlivv3la1bw1ofCei1XDUJ12T1oVMTyNU13p8RagesRJQRskbS15JXbUqY8OZvvpNVAVCY8OecPkmvhJRBowjP1qjjUj9XsOZcDh9uJuXfQRd2r%2F0zCU3LHwkGIuCNDhXLU%2BA9j48pwiHD78zvUIiY0C5xTtcMmxyVrXy3xxNOKdtv1zu24mpBFCOjlNpyk6pTUO9QMQ7QuaYFLA%2Bv7UeBgzCI%2BF35g9iGYI9IQHe3ObFqfFHopW2tWKmhdjTTJkl2Dr4jedtJyhiQEyRBL7Uzc1BVkM8gAaE6wHpLYZ3HfBqlHOvM4Ij4PAilqjD3hJPKBjqkAQ9cdOxy%2FYmVVYmFRa7SjJ3%2FpUgUUUT%2FlackSjv%2FeoAQJEOb040diuv6lhwu%2Bf6o6tpIoEnQJ2G528BV2d0T2DavB%2BTt0jquwXONdkJad6L%2FiqKSVROGaXBG02xUf2k7JGV2w8WKdh%2FBSmDEW0u3iC4PKcosD7c84TO1TrPOrG2qQAiKPtp%2BJaCfzCg0H3pZcSxet4CIWOUe%2BSuUb9hJ1Rc5uNB2&X-Amz-Signature=cd959d92a89771b41588a9a737dee30a23577f73de1ce273131352b06c17fc79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SIJIIVI%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRPVBO%2FHem1WxSahyK97DNKBSxzvtA2JuWHxigofxdtQIhAPrnrJASyIeSUCtdC7ALjF%2FQ89awODIEAJ1XqsOiLcd7KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxoUShKibg%2FmOd23kq3ANSBr1oN7nhiDTab129kPCTeaU2R8BSbTFUrE7%2FYD7GlnVMIBespEEPXkmSYoEqKOmnimhSdmV6IxoZ0V0VKz%2FvxgiA3Rb%2Fh3hdstFU%2BKAbPeyoyUMdfKHVgZ1iyMdsh09gcMaIu6tN%2FZXDghkfUrtOE1IANEC8Mu5LDpcCrDmPZHwjCN%2BNApIHuuwT0lnZ2KseZQJ%2Bh%2FhP4ReiJkExvIeMLjNRjjx25S0ESSpI4vauPzazIr36RVUsnQBrYtX2GLkFgNsSEaFWrBbNuhH2pRVw5w80CXQmk7%2Fv0MsGX1JWVNNhPbkWSvIPibwZLkDEuhGlivv3la1bw1ofCei1XDUJ12T1oVMTyNU13p8RagesRJQRskbS15JXbUqY8OZvvpNVAVCY8OecPkmvhJRBowjP1qjjUj9XsOZcDh9uJuXfQRd2r%2F0zCU3LHwkGIuCNDhXLU%2BA9j48pwiHD78zvUIiY0C5xTtcMmxyVrXy3xxNOKdtv1zu24mpBFCOjlNpyk6pTUO9QMQ7QuaYFLA%2Bv7UeBgzCI%2BF35g9iGYI9IQHe3ObFqfFHopW2tWKmhdjTTJkl2Dr4jedtJyhiQEyRBL7Uzc1BVkM8gAaE6wHpLYZ3HfBqlHOvM4Ij4PAilqjD3hJPKBjqkAQ9cdOxy%2FYmVVYmFRa7SjJ3%2FpUgUUUT%2FlackSjv%2FeoAQJEOb040diuv6lhwu%2Bf6o6tpIoEnQJ2G528BV2d0T2DavB%2BTt0jquwXONdkJad6L%2FiqKSVROGaXBG02xUf2k7JGV2w8WKdh%2FBSmDEW0u3iC4PKcosD7c84TO1TrPOrG2qQAiKPtp%2BJaCfzCg0H3pZcSxet4CIWOUe%2BSuUb9hJ1Rc5uNB2&X-Amz-Signature=3302d7c5baeba36663432f8880f7327c7c30b964527d356958d2237fe81dd53a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGL5UJIT%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T040342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2qfNY4ak1VY8BArEP9aKHMU5vRfxnqS7u3ob7UNdIpgIgcz4RkrKKJrXUNnNo1HlTFNzciomjVJw8fZYlrtaAMjEqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHVDI%2BmCHEcjfC9JCrcA%2Bx2yjHj3N2yRVi4b5Woh0Wd%2B%2FvE37eXV4OBTmFcc0b3EVCtiWxybLqUCHV4g38YHxxp5wiMihzNYNjRwjrZTCmOAfFa%2FJ3wBfy1LqT5%2FI2MBqWFYkY7D7Z%2FahXrSUj6SXngeUKbIwOXOoeJuKnjKw%2FAUOg21mpfBn2N4ngFBh%2BU5VDQLW2K4mrM5BAkwMV2wmk1XHV77X0wrx41vFRsgzVaY6lp6rrf8oQhwF%2BNyKMMhM9sk4z2XVURQZnV%2FiAdFTNaZ4V6IilwUQKgK%2BNv50LIa8CE0oYsctyu1Jz8%2FN7sPgXRM0DhgMSbgiY%2FNB9Bb3wEIXDqqInYI8P4fUKcs1hrXu1qjU8eKpk5tmKYkq7wsbK%2B6ueeY51Ht1Py736%2BebEOf%2FI4XvwlvU7FX90ScIOV7RUxPV8Pti2fxMMs3mzT5AL3x1rQ5kw9x8zaV2%2B5s4O3xBCdvQ7J%2FGG8Oa6bzD7ivlUY9auGn8Q2E8vfnBKS5ravoEGH1qmo19xzacnWuMmTqIhRtqE3HK66I8UkPEYhNYn%2Fk8XPSqVq9zYBNWvSaw7JvlUWY7Xt%2F%2BDc2cpG%2FTv%2FfJqYq2jl7D1aCQsyqfDUdzP%2BaEdHbgpziKVJsIV7fwbBGvpEOcKQc9q2MKqGk8oGOqUBzvqspJo2SqqO%2FMuHyhKn4ac50rWxz%2BDnloFHz38UrT4FtKtAQTOjgUCLkYxF30eclcAss4AGoSnC9z2EKoqkKl8ntAhy1Ob6tHezBKICv%2FVCDZwev%2BSRX5h3cP2y4haWoRJJPkTys44c5pGJYOVjw3xTxHug6SHLnS5bmsNGWVUVWwf4CwA5CvuO3EhSbthgw46BQW9SGisDiJTLYYawdS%2F0fZrk&X-Amz-Signature=67743903dbdd6662559e1ef8d7860d73f97574c66e53db20981a66037c99fa75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

