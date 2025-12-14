
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM5G72Q5%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQC25JVkzKweq0pGv8JN%2BPvBgsbI8OhgDjk9FKx%2BXY7QgQIhAOpv%2FGfn82QvyM3ARFDGTn%2Frp7%2BT6YnM3nbb8bVjLTH5Kv8DCC0QABoMNjM3NDIzMTgzODA1Igyw4IhFZiYVzHxlHewq3APXFms53PVYX5etWmlJEva8DpuHamQPfvN%2BH%2FwXOsg%2BfpN8HT3PWlrFD6LCunw4B4fAQoburd5ZGfbVWN4SYzjPxO380UvcG7FGkUBatGuLcQGMHVJhAcc6EhvUozBMUuxNrw2wKplRONYhdeQ%2F%2Bvj3AwfUMEDZg678n03odkJJ11AmdXThQg46Fk44fJyMeXJCN5dqz%2BYP3JjiQC313JSJa%2FsLsifJtGWA8WmHzTBM6jVub9LEyIHPECoX%2Fuf7Z4%2BhVNe%2F6kj8GfGo8I9qiBi29dnI0fNvM43Q6nFtTUdEz63%2FWbiBAR1ElYccJ78fDGSk%2BK%2Bs8KZGWP%2F8S2fNgdSKH%2BOMMzHwgPpxz2AGUrt5bMffy%2BO57xrQdJ0CgWk0tWIW18xiMS7n8TN9QZw8EllPGyPi4EjqPwYBK6SW1Sd7VnT6ql%2FZF%2FwSMm4GrITH02Wk7G7qIHRNhrSNzTvi88y5ytkcaLQC%2BDfrdwke6YFSogTop1%2BM2d%2Fk18bzaQguUOD7Vy24lRFMMm89WC5KIcr55heAFr0qlUOwCjrfjO8WO8W19DwYXncQGv2nmpxPMf%2FtpUdkje3PWNWspVFpt9zY9jJ24w69kMS9laGfSnUV085Y4UExStquqGhqcjDf3fjJBjqkAbDqNaNrseFVPRoiJcFoqI%2F4HUVbts4lU6BwH8ByS%2BtFzKzbHFySoeJRm0bTre2NINEm83ZIbuxGh7nF1i%2BdXhR4Tma1XwTnA6dk3%2BINFZrVrPMdQgALt7HXFJNgaedVDx5I%2B2u1zS36Iv6zyZxlCwpTaTev81KI8K8H%2Fv4Ky%2BzDfxCq%2Fk6tvudn9A%2BXphAxQQFB%2BOZrt8nuwhiz%2FaSirU00%2Fi1w&X-Amz-Signature=b259927330aa2355b131475fc877cc04a606627c5822928bc1c8fbad787545b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHHMHEH%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCrdiI8d3Pu5zKoSzA0HHaI59oIfNClbw%2BJWRr9qo2rqgIhAOfBDKYDQ3MYpadK1dQulE2tjt0kF7M9PtUlsPMMq820Kv8DCC0QABoMNjM3NDIzMTgzODA1Igxe7uotSavwwW8jumsq3AMm%2BExgz03z4TN0LHe1ePEfBQEbQ8EksIi9u6EC%2FRP17dUPVEt6m9BkOJcjuXQvooikZyxNG4%2FlJFtFsF9cLgQfUPn7VmjoRNgUZh7%2Fy%2B2zw5WSdu5R9DWokKkiin21pK1hzfy8%2Be8WgLke5QihrzikSYl5bmPrBBDE3o7TXbY%2Fmx5kNCsMWKIuVMLJHyevNn436PMbzoyYsXYfCfLVztzSjS%2FZ56aCjLdlYBBQPvaiXIycrjv6qu8%2FioCYA9U5lu7KOzbWhlYnCqNcT%2Fx6c1K2b2alpVVijRjuH0BPncjd62TG0RV0GNSjHKkrKvPs%2B3K5i%2BMWPwbS8wGTxRBAAJolF7NJ4r%2BjUFdKr29pQAEFoMvlI4IVZUBoCmxJL8N0tGhs2QvsCPpFz9VUHYnmMGpDft78t0UFGhxjDdxqlgn9w3fJQb7Cqd4H9eRG5jJB38bcedyCBQ6%2BI7gyGUu04UCIpD%2FY1HnVsNh3aK3rOtlWsNCXLvbsCJy7cC14me9X40lQ%2FbVgjP4jdxdJfSLHqZOvZk4YWj1GiZqLL2vylSfFfD0tPbfqyQOnv%2BiHqK%2BJqP6oCkIl2JU%2B3%2BWBRx5W5AiLfpLTw%2BpsRImiD7IeQPekIPeFKFrIOi24BpqVGjDw3fjJBjqkAe0QiAS3PK2hLfbPC2KMTjlBLd1EmLX1x%2BZ4qbzY%2Bufrd9bVdN1hNK%2Fq%2FTe7HjKjNHlPs7%2Fqbj5h2dTNw7agkVuccKurqtvKV8Fxql56HP9JFo5PZ88sYqWiF8aaIrDr5gEB3%2BfYa%2BA%2BiOkcSvEfiAHsU9Ka3Ba81yqxJEaXiEIQuEQCpLtwdzDsXGSfywpD4JcA%2BWEvu01vsCBVujn4%2BkY6Hupx&X-Amz-Signature=146dbd7d4a0e474aef4ea8f27e3e0a292b0446a5b00ec19f3927cf973abbdaa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHHMHEH%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCrdiI8d3Pu5zKoSzA0HHaI59oIfNClbw%2BJWRr9qo2rqgIhAOfBDKYDQ3MYpadK1dQulE2tjt0kF7M9PtUlsPMMq820Kv8DCC0QABoMNjM3NDIzMTgzODA1Igxe7uotSavwwW8jumsq3AMm%2BExgz03z4TN0LHe1ePEfBQEbQ8EksIi9u6EC%2FRP17dUPVEt6m9BkOJcjuXQvooikZyxNG4%2FlJFtFsF9cLgQfUPn7VmjoRNgUZh7%2Fy%2B2zw5WSdu5R9DWokKkiin21pK1hzfy8%2Be8WgLke5QihrzikSYl5bmPrBBDE3o7TXbY%2Fmx5kNCsMWKIuVMLJHyevNn436PMbzoyYsXYfCfLVztzSjS%2FZ56aCjLdlYBBQPvaiXIycrjv6qu8%2FioCYA9U5lu7KOzbWhlYnCqNcT%2Fx6c1K2b2alpVVijRjuH0BPncjd62TG0RV0GNSjHKkrKvPs%2B3K5i%2BMWPwbS8wGTxRBAAJolF7NJ4r%2BjUFdKr29pQAEFoMvlI4IVZUBoCmxJL8N0tGhs2QvsCPpFz9VUHYnmMGpDft78t0UFGhxjDdxqlgn9w3fJQb7Cqd4H9eRG5jJB38bcedyCBQ6%2BI7gyGUu04UCIpD%2FY1HnVsNh3aK3rOtlWsNCXLvbsCJy7cC14me9X40lQ%2FbVgjP4jdxdJfSLHqZOvZk4YWj1GiZqLL2vylSfFfD0tPbfqyQOnv%2BiHqK%2BJqP6oCkIl2JU%2B3%2BWBRx5W5AiLfpLTw%2BpsRImiD7IeQPekIPeFKFrIOi24BpqVGjDw3fjJBjqkAe0QiAS3PK2hLfbPC2KMTjlBLd1EmLX1x%2BZ4qbzY%2Bufrd9bVdN1hNK%2Fq%2FTe7HjKjNHlPs7%2Fqbj5h2dTNw7agkVuccKurqtvKV8Fxql56HP9JFo5PZ88sYqWiF8aaIrDr5gEB3%2BfYa%2BA%2BiOkcSvEfiAHsU9Ka3Ba81yqxJEaXiEIQuEQCpLtwdzDsXGSfywpD4JcA%2BWEvu01vsCBVujn4%2BkY6Hupx&X-Amz-Signature=9f21559692248a35aee89d5fd91b39cf416c8345ec4720d1baa375b86fb66c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNNICHF6%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCNWix08uKS%2FZFzx0yRKttEP0P0xTNuIoVLZ8hDEmpFMgIgLL%2BYvqaaurCrcE1yScnVzq%2Fjne9HE4LriHkEBXfK6%2FMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG3lqCQNKcb%2Bl9m5yyrcA%2FAdC8%2Fc5qICArRkhfzt7fJ9UiCQbNd3haDvJU3smiOCOEqxYRhgOJexU6ZwTz9RqLhVgx%2B7OqMvUTTHpgtCac9zLf6fKXCjcnKcSv3%2FDa4OvIETwWOLEV55T25ubRCHfwi498sDYrekQjiyvLYkw6p%2FVtCpL%2BPsYknm6EbwRQuzgUXZk4bmkI8yOE2f70WItyXZL%2B6uiFW8Q3U1eFecdCbkO1XT0RWo1zj6vRvVYlZ7ulRMh9BGQ%2B%2Fu1jAmkExEXc%2BD95SAOeIqu7lYZqU8Gv4X9jCG4MBLyoh%2BvgaRdC3hgfrlhdba23e3XCTfST65qnSKaGjQkc7JbbJnb4GqdjYgJdbbgLtgwT%2BQoC4Ya08Vx3BKy1P57anWG4%2FD%2FCqj91%2FdEWVxfLPn3MMi1hBxqwg1WNpx79de1nz0BzAF9187m3F8j1snYQ1Isybmvo1nnro2UgD700bcIxtaSdGtwvFcpQ5aiiODSE%2FWMqU3oc%2BsDk6706xvciky%2FFpT7pL7Vz8SRaicUd80E3hF21EHHGr3HoC1%2FmdqFp7whQ1xFSn11Xj9i7cJUeuXFP6tDPoXNsZ%2F6Zq24U62kDwz8S%2F%2BDglUdTiIvkqXoE3Bk2DdzgCPg%2F2QkAmEjn4TwbVdMKjc%2BMkGOqUB0IXWW9bZJMi4H3s%2FCGJs9OjO7GTVjCdJ6X206NrdzvDn5m8oiv936pUdD%2Bwiw5kJQVzn1LPpgCNiSWmPzUGB%2BPDlKoQquwUU8i99yH8u2PkH34mbw55FQl3g5OardPN9j0TqDFMRDawUBu0%2FsRA4CmamcnWoM0kDBYU5gOilSaqsFMHefesWg1hm5OdAbr9Mv04R0AkYNy9tpBOO%2Fn25Os3j2DUj&X-Amz-Signature=91b82e57513e20e0f0d198aa1dfd727d4268f92c19d8dbcf4f25b77228563c55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNNICHF6%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCNWix08uKS%2FZFzx0yRKttEP0P0xTNuIoVLZ8hDEmpFMgIgLL%2BYvqaaurCrcE1yScnVzq%2Fjne9HE4LriHkEBXfK6%2FMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG3lqCQNKcb%2Bl9m5yyrcA%2FAdC8%2Fc5qICArRkhfzt7fJ9UiCQbNd3haDvJU3smiOCOEqxYRhgOJexU6ZwTz9RqLhVgx%2B7OqMvUTTHpgtCac9zLf6fKXCjcnKcSv3%2FDa4OvIETwWOLEV55T25ubRCHfwi498sDYrekQjiyvLYkw6p%2FVtCpL%2BPsYknm6EbwRQuzgUXZk4bmkI8yOE2f70WItyXZL%2B6uiFW8Q3U1eFecdCbkO1XT0RWo1zj6vRvVYlZ7ulRMh9BGQ%2B%2Fu1jAmkExEXc%2BD95SAOeIqu7lYZqU8Gv4X9jCG4MBLyoh%2BvgaRdC3hgfrlhdba23e3XCTfST65qnSKaGjQkc7JbbJnb4GqdjYgJdbbgLtgwT%2BQoC4Ya08Vx3BKy1P57anWG4%2FD%2FCqj91%2FdEWVxfLPn3MMi1hBxqwg1WNpx79de1nz0BzAF9187m3F8j1snYQ1Isybmvo1nnro2UgD700bcIxtaSdGtwvFcpQ5aiiODSE%2FWMqU3oc%2BsDk6706xvciky%2FFpT7pL7Vz8SRaicUd80E3hF21EHHGr3HoC1%2FmdqFp7whQ1xFSn11Xj9i7cJUeuXFP6tDPoXNsZ%2F6Zq24U62kDwz8S%2F%2BDglUdTiIvkqXoE3Bk2DdzgCPg%2F2QkAmEjn4TwbVdMKjc%2BMkGOqUB0IXWW9bZJMi4H3s%2FCGJs9OjO7GTVjCdJ6X206NrdzvDn5m8oiv936pUdD%2Bwiw5kJQVzn1LPpgCNiSWmPzUGB%2BPDlKoQquwUU8i99yH8u2PkH34mbw55FQl3g5OardPN9j0TqDFMRDawUBu0%2FsRA4CmamcnWoM0kDBYU5gOilSaqsFMHefesWg1hm5OdAbr9Mv04R0AkYNy9tpBOO%2Fn25Os3j2DUj&X-Amz-Signature=3b507599a02bfa05b776d26fad2810bcee5c07ac8bbf69a898a7f56c0aa7347b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNNICHF6%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCNWix08uKS%2FZFzx0yRKttEP0P0xTNuIoVLZ8hDEmpFMgIgLL%2BYvqaaurCrcE1yScnVzq%2Fjne9HE4LriHkEBXfK6%2FMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG3lqCQNKcb%2Bl9m5yyrcA%2FAdC8%2Fc5qICArRkhfzt7fJ9UiCQbNd3haDvJU3smiOCOEqxYRhgOJexU6ZwTz9RqLhVgx%2B7OqMvUTTHpgtCac9zLf6fKXCjcnKcSv3%2FDa4OvIETwWOLEV55T25ubRCHfwi498sDYrekQjiyvLYkw6p%2FVtCpL%2BPsYknm6EbwRQuzgUXZk4bmkI8yOE2f70WItyXZL%2B6uiFW8Q3U1eFecdCbkO1XT0RWo1zj6vRvVYlZ7ulRMh9BGQ%2B%2Fu1jAmkExEXc%2BD95SAOeIqu7lYZqU8Gv4X9jCG4MBLyoh%2BvgaRdC3hgfrlhdba23e3XCTfST65qnSKaGjQkc7JbbJnb4GqdjYgJdbbgLtgwT%2BQoC4Ya08Vx3BKy1P57anWG4%2FD%2FCqj91%2FdEWVxfLPn3MMi1hBxqwg1WNpx79de1nz0BzAF9187m3F8j1snYQ1Isybmvo1nnro2UgD700bcIxtaSdGtwvFcpQ5aiiODSE%2FWMqU3oc%2BsDk6706xvciky%2FFpT7pL7Vz8SRaicUd80E3hF21EHHGr3HoC1%2FmdqFp7whQ1xFSn11Xj9i7cJUeuXFP6tDPoXNsZ%2F6Zq24U62kDwz8S%2F%2BDglUdTiIvkqXoE3Bk2DdzgCPg%2F2QkAmEjn4TwbVdMKjc%2BMkGOqUB0IXWW9bZJMi4H3s%2FCGJs9OjO7GTVjCdJ6X206NrdzvDn5m8oiv936pUdD%2Bwiw5kJQVzn1LPpgCNiSWmPzUGB%2BPDlKoQquwUU8i99yH8u2PkH34mbw55FQl3g5OardPN9j0TqDFMRDawUBu0%2FsRA4CmamcnWoM0kDBYU5gOilSaqsFMHefesWg1hm5OdAbr9Mv04R0AkYNy9tpBOO%2Fn25Os3j2DUj&X-Amz-Signature=8502d931d91c66a68eba9e4702039490926ad8496e2375fe55122fe57bb86c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNNICHF6%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCNWix08uKS%2FZFzx0yRKttEP0P0xTNuIoVLZ8hDEmpFMgIgLL%2BYvqaaurCrcE1yScnVzq%2Fjne9HE4LriHkEBXfK6%2FMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG3lqCQNKcb%2Bl9m5yyrcA%2FAdC8%2Fc5qICArRkhfzt7fJ9UiCQbNd3haDvJU3smiOCOEqxYRhgOJexU6ZwTz9RqLhVgx%2B7OqMvUTTHpgtCac9zLf6fKXCjcnKcSv3%2FDa4OvIETwWOLEV55T25ubRCHfwi498sDYrekQjiyvLYkw6p%2FVtCpL%2BPsYknm6EbwRQuzgUXZk4bmkI8yOE2f70WItyXZL%2B6uiFW8Q3U1eFecdCbkO1XT0RWo1zj6vRvVYlZ7ulRMh9BGQ%2B%2Fu1jAmkExEXc%2BD95SAOeIqu7lYZqU8Gv4X9jCG4MBLyoh%2BvgaRdC3hgfrlhdba23e3XCTfST65qnSKaGjQkc7JbbJnb4GqdjYgJdbbgLtgwT%2BQoC4Ya08Vx3BKy1P57anWG4%2FD%2FCqj91%2FdEWVxfLPn3MMi1hBxqwg1WNpx79de1nz0BzAF9187m3F8j1snYQ1Isybmvo1nnro2UgD700bcIxtaSdGtwvFcpQ5aiiODSE%2FWMqU3oc%2BsDk6706xvciky%2FFpT7pL7Vz8SRaicUd80E3hF21EHHGr3HoC1%2FmdqFp7whQ1xFSn11Xj9i7cJUeuXFP6tDPoXNsZ%2F6Zq24U62kDwz8S%2F%2BDglUdTiIvkqXoE3Bk2DdzgCPg%2F2QkAmEjn4TwbVdMKjc%2BMkGOqUB0IXWW9bZJMi4H3s%2FCGJs9OjO7GTVjCdJ6X206NrdzvDn5m8oiv936pUdD%2Bwiw5kJQVzn1LPpgCNiSWmPzUGB%2BPDlKoQquwUU8i99yH8u2PkH34mbw55FQl3g5OardPN9j0TqDFMRDawUBu0%2FsRA4CmamcnWoM0kDBYU5gOilSaqsFMHefesWg1hm5OdAbr9Mv04R0AkYNy9tpBOO%2Fn25Os3j2DUj&X-Amz-Signature=12b18459594dad0478a63bfebc6346d64a06d5f6d62fbe04fb4862e4bd9f7e6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNNICHF6%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCNWix08uKS%2FZFzx0yRKttEP0P0xTNuIoVLZ8hDEmpFMgIgLL%2BYvqaaurCrcE1yScnVzq%2Fjne9HE4LriHkEBXfK6%2FMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG3lqCQNKcb%2Bl9m5yyrcA%2FAdC8%2Fc5qICArRkhfzt7fJ9UiCQbNd3haDvJU3smiOCOEqxYRhgOJexU6ZwTz9RqLhVgx%2B7OqMvUTTHpgtCac9zLf6fKXCjcnKcSv3%2FDa4OvIETwWOLEV55T25ubRCHfwi498sDYrekQjiyvLYkw6p%2FVtCpL%2BPsYknm6EbwRQuzgUXZk4bmkI8yOE2f70WItyXZL%2B6uiFW8Q3U1eFecdCbkO1XT0RWo1zj6vRvVYlZ7ulRMh9BGQ%2B%2Fu1jAmkExEXc%2BD95SAOeIqu7lYZqU8Gv4X9jCG4MBLyoh%2BvgaRdC3hgfrlhdba23e3XCTfST65qnSKaGjQkc7JbbJnb4GqdjYgJdbbgLtgwT%2BQoC4Ya08Vx3BKy1P57anWG4%2FD%2FCqj91%2FdEWVxfLPn3MMi1hBxqwg1WNpx79de1nz0BzAF9187m3F8j1snYQ1Isybmvo1nnro2UgD700bcIxtaSdGtwvFcpQ5aiiODSE%2FWMqU3oc%2BsDk6706xvciky%2FFpT7pL7Vz8SRaicUd80E3hF21EHHGr3HoC1%2FmdqFp7whQ1xFSn11Xj9i7cJUeuXFP6tDPoXNsZ%2F6Zq24U62kDwz8S%2F%2BDglUdTiIvkqXoE3Bk2DdzgCPg%2F2QkAmEjn4TwbVdMKjc%2BMkGOqUB0IXWW9bZJMi4H3s%2FCGJs9OjO7GTVjCdJ6X206NrdzvDn5m8oiv936pUdD%2Bwiw5kJQVzn1LPpgCNiSWmPzUGB%2BPDlKoQquwUU8i99yH8u2PkH34mbw55FQl3g5OardPN9j0TqDFMRDawUBu0%2FsRA4CmamcnWoM0kDBYU5gOilSaqsFMHefesWg1hm5OdAbr9Mv04R0AkYNy9tpBOO%2Fn25Os3j2DUj&X-Amz-Signature=9eb1bc8dab84bbfd649b2aa911d89ebf0e8c1c3659f879c2634bdc4d3ed2dd9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNNICHF6%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCNWix08uKS%2FZFzx0yRKttEP0P0xTNuIoVLZ8hDEmpFMgIgLL%2BYvqaaurCrcE1yScnVzq%2Fjne9HE4LriHkEBXfK6%2FMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG3lqCQNKcb%2Bl9m5yyrcA%2FAdC8%2Fc5qICArRkhfzt7fJ9UiCQbNd3haDvJU3smiOCOEqxYRhgOJexU6ZwTz9RqLhVgx%2B7OqMvUTTHpgtCac9zLf6fKXCjcnKcSv3%2FDa4OvIETwWOLEV55T25ubRCHfwi498sDYrekQjiyvLYkw6p%2FVtCpL%2BPsYknm6EbwRQuzgUXZk4bmkI8yOE2f70WItyXZL%2B6uiFW8Q3U1eFecdCbkO1XT0RWo1zj6vRvVYlZ7ulRMh9BGQ%2B%2Fu1jAmkExEXc%2BD95SAOeIqu7lYZqU8Gv4X9jCG4MBLyoh%2BvgaRdC3hgfrlhdba23e3XCTfST65qnSKaGjQkc7JbbJnb4GqdjYgJdbbgLtgwT%2BQoC4Ya08Vx3BKy1P57anWG4%2FD%2FCqj91%2FdEWVxfLPn3MMi1hBxqwg1WNpx79de1nz0BzAF9187m3F8j1snYQ1Isybmvo1nnro2UgD700bcIxtaSdGtwvFcpQ5aiiODSE%2FWMqU3oc%2BsDk6706xvciky%2FFpT7pL7Vz8SRaicUd80E3hF21EHHGr3HoC1%2FmdqFp7whQ1xFSn11Xj9i7cJUeuXFP6tDPoXNsZ%2F6Zq24U62kDwz8S%2F%2BDglUdTiIvkqXoE3Bk2DdzgCPg%2F2QkAmEjn4TwbVdMKjc%2BMkGOqUB0IXWW9bZJMi4H3s%2FCGJs9OjO7GTVjCdJ6X206NrdzvDn5m8oiv936pUdD%2Bwiw5kJQVzn1LPpgCNiSWmPzUGB%2BPDlKoQquwUU8i99yH8u2PkH34mbw55FQl3g5OardPN9j0TqDFMRDawUBu0%2FsRA4CmamcnWoM0kDBYU5gOilSaqsFMHefesWg1hm5OdAbr9Mv04R0AkYNy9tpBOO%2Fn25Os3j2DUj&X-Amz-Signature=5c896c242f23b1c46e2084d90e527ba2e44756e50915256277230b5b41d3ac3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNNICHF6%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCNWix08uKS%2FZFzx0yRKttEP0P0xTNuIoVLZ8hDEmpFMgIgLL%2BYvqaaurCrcE1yScnVzq%2Fjne9HE4LriHkEBXfK6%2FMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDG3lqCQNKcb%2Bl9m5yyrcA%2FAdC8%2Fc5qICArRkhfzt7fJ9UiCQbNd3haDvJU3smiOCOEqxYRhgOJexU6ZwTz9RqLhVgx%2B7OqMvUTTHpgtCac9zLf6fKXCjcnKcSv3%2FDa4OvIETwWOLEV55T25ubRCHfwi498sDYrekQjiyvLYkw6p%2FVtCpL%2BPsYknm6EbwRQuzgUXZk4bmkI8yOE2f70WItyXZL%2B6uiFW8Q3U1eFecdCbkO1XT0RWo1zj6vRvVYlZ7ulRMh9BGQ%2B%2Fu1jAmkExEXc%2BD95SAOeIqu7lYZqU8Gv4X9jCG4MBLyoh%2BvgaRdC3hgfrlhdba23e3XCTfST65qnSKaGjQkc7JbbJnb4GqdjYgJdbbgLtgwT%2BQoC4Ya08Vx3BKy1P57anWG4%2FD%2FCqj91%2FdEWVxfLPn3MMi1hBxqwg1WNpx79de1nz0BzAF9187m3F8j1snYQ1Isybmvo1nnro2UgD700bcIxtaSdGtwvFcpQ5aiiODSE%2FWMqU3oc%2BsDk6706xvciky%2FFpT7pL7Vz8SRaicUd80E3hF21EHHGr3HoC1%2FmdqFp7whQ1xFSn11Xj9i7cJUeuXFP6tDPoXNsZ%2F6Zq24U62kDwz8S%2F%2BDglUdTiIvkqXoE3Bk2DdzgCPg%2F2QkAmEjn4TwbVdMKjc%2BMkGOqUB0IXWW9bZJMi4H3s%2FCGJs9OjO7GTVjCdJ6X206NrdzvDn5m8oiv936pUdD%2Bwiw5kJQVzn1LPpgCNiSWmPzUGB%2BPDlKoQquwUU8i99yH8u2PkH34mbw55FQl3g5OardPN9j0TqDFMRDawUBu0%2FsRA4CmamcnWoM0kDBYU5gOilSaqsFMHefesWg1hm5OdAbr9Mv04R0AkYNy9tpBOO%2Fn25Os3j2DUj&X-Amz-Signature=a408826d97ef8117d8fef5b8d327eb4859c51ecd2807bec190d31a48cd44003f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7LAVQT3%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCgrgg6ar3FXSupGMgivq%2BSwom3Wcef9RQVTUoyNw77zwIhAJpP3C%2FoFLqxqVgkXfES9w8IZx7qpv%2FQG7%2BmBajxKoQnKv8DCCwQABoMNjM3NDIzMTgzODA1Igx%2BoeXm0vXAM%2Fubrswq3AOfyM%2FcqltFam3qGdwk7mHb1KJw10%2By3CZi70qs7q6Drl3jMSTEUlH3Abu5vh4NxyLMNaK6q%2BP8ZssMkixPXvhwkmRytU45fAtiqOTDniyIgOOmUPKOHdlahfHRIBhNzA9r0j66HIR3eXO3yVDEHsdw38kiJwXXotUUmTTDQdFPn1kZnovYjsOSc2j2M7tUyyV06c0lqFXA5sNEkfZLgCbAEuWLZXbMLgIiC5oV9jGBiS84skkwfhxwF82xbI59fStQOfxfYGvsuF6kahdBPhr5sqz1UwIfFjTPFRQoHjLRgCg2OsKBVINz0NPgw0bJDZykx7FT3KFncbo%2FJm9zsdisF5ieIkra9CyH%2BeAoFzabIje4fd%2FgorZa%2BK0xMhmr92dGWodjpMDpvVR0AM9wVijB%2FDBFBXLv5CWZTg2NwT3996GRmXRZ7AM7mzIS0%2BSQmMwzJdAW4KuDWwN2HzNuSQaxp1n%2FXrmxVCjrtfL5ClwFMkEa8%2BhywtkYVLJu5SMsfWklvD3gRqCzkpUCAnbwUP0BJUtHaBvypZVqqi2nzv9VG82q88Go4Kh26SD1g%2BMKDd1Q46vHiEHvjTd0nRDX%2FmsWvcbygZcrHs%2FJWf015IhxCchj7XkECa2LCLD%2F3jCT3fjJBjqkAXX4Kc3w3bvzkv7yJVO5dXanI1y1KZfzzEuOoRRSgQvjutljYMCJ%2FPyT%2FrWVSfQKw34N80cmPDPPwgGK2reRR6voHG6pvoQfOUxiggTWupc%2FucxgLmq0bne6RP42kNeYQ3rIFS5yzSYIk%2BJyKhYwshbCU6T2Ie3QxPHSedx5OCuFCYen4p9U6WEnlyEMAMlT2J6Gv9FfoV7Eq93Pa4Bu%2FT7qSj8Z&X-Amz-Signature=92d135219e74da13cd32263ee11abf148a7a87b1c34c55e9372a8543bc1fb36c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7LAVQT3%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCgrgg6ar3FXSupGMgivq%2BSwom3Wcef9RQVTUoyNw77zwIhAJpP3C%2FoFLqxqVgkXfES9w8IZx7qpv%2FQG7%2BmBajxKoQnKv8DCCwQABoMNjM3NDIzMTgzODA1Igx%2BoeXm0vXAM%2Fubrswq3AOfyM%2FcqltFam3qGdwk7mHb1KJw10%2By3CZi70qs7q6Drl3jMSTEUlH3Abu5vh4NxyLMNaK6q%2BP8ZssMkixPXvhwkmRytU45fAtiqOTDniyIgOOmUPKOHdlahfHRIBhNzA9r0j66HIR3eXO3yVDEHsdw38kiJwXXotUUmTTDQdFPn1kZnovYjsOSc2j2M7tUyyV06c0lqFXA5sNEkfZLgCbAEuWLZXbMLgIiC5oV9jGBiS84skkwfhxwF82xbI59fStQOfxfYGvsuF6kahdBPhr5sqz1UwIfFjTPFRQoHjLRgCg2OsKBVINz0NPgw0bJDZykx7FT3KFncbo%2FJm9zsdisF5ieIkra9CyH%2BeAoFzabIje4fd%2FgorZa%2BK0xMhmr92dGWodjpMDpvVR0AM9wVijB%2FDBFBXLv5CWZTg2NwT3996GRmXRZ7AM7mzIS0%2BSQmMwzJdAW4KuDWwN2HzNuSQaxp1n%2FXrmxVCjrtfL5ClwFMkEa8%2BhywtkYVLJu5SMsfWklvD3gRqCzkpUCAnbwUP0BJUtHaBvypZVqqi2nzv9VG82q88Go4Kh26SD1g%2BMKDd1Q46vHiEHvjTd0nRDX%2FmsWvcbygZcrHs%2FJWf015IhxCchj7XkECa2LCLD%2F3jCT3fjJBjqkAXX4Kc3w3bvzkv7yJVO5dXanI1y1KZfzzEuOoRRSgQvjutljYMCJ%2FPyT%2FrWVSfQKw34N80cmPDPPwgGK2reRR6voHG6pvoQfOUxiggTWupc%2FucxgLmq0bne6RP42kNeYQ3rIFS5yzSYIk%2BJyKhYwshbCU6T2Ie3QxPHSedx5OCuFCYen4p9U6WEnlyEMAMlT2J6Gv9FfoV7Eq93Pa4Bu%2FT7qSj8Z&X-Amz-Signature=533d13dcc119ada6416e13bab19d648b0bc2d11046d85e5058ad79c253d7ece1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7LAVQT3%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCgrgg6ar3FXSupGMgivq%2BSwom3Wcef9RQVTUoyNw77zwIhAJpP3C%2FoFLqxqVgkXfES9w8IZx7qpv%2FQG7%2BmBajxKoQnKv8DCCwQABoMNjM3NDIzMTgzODA1Igx%2BoeXm0vXAM%2Fubrswq3AOfyM%2FcqltFam3qGdwk7mHb1KJw10%2By3CZi70qs7q6Drl3jMSTEUlH3Abu5vh4NxyLMNaK6q%2BP8ZssMkixPXvhwkmRytU45fAtiqOTDniyIgOOmUPKOHdlahfHRIBhNzA9r0j66HIR3eXO3yVDEHsdw38kiJwXXotUUmTTDQdFPn1kZnovYjsOSc2j2M7tUyyV06c0lqFXA5sNEkfZLgCbAEuWLZXbMLgIiC5oV9jGBiS84skkwfhxwF82xbI59fStQOfxfYGvsuF6kahdBPhr5sqz1UwIfFjTPFRQoHjLRgCg2OsKBVINz0NPgw0bJDZykx7FT3KFncbo%2FJm9zsdisF5ieIkra9CyH%2BeAoFzabIje4fd%2FgorZa%2BK0xMhmr92dGWodjpMDpvVR0AM9wVijB%2FDBFBXLv5CWZTg2NwT3996GRmXRZ7AM7mzIS0%2BSQmMwzJdAW4KuDWwN2HzNuSQaxp1n%2FXrmxVCjrtfL5ClwFMkEa8%2BhywtkYVLJu5SMsfWklvD3gRqCzkpUCAnbwUP0BJUtHaBvypZVqqi2nzv9VG82q88Go4Kh26SD1g%2BMKDd1Q46vHiEHvjTd0nRDX%2FmsWvcbygZcrHs%2FJWf015IhxCchj7XkECa2LCLD%2F3jCT3fjJBjqkAXX4Kc3w3bvzkv7yJVO5dXanI1y1KZfzzEuOoRRSgQvjutljYMCJ%2FPyT%2FrWVSfQKw34N80cmPDPPwgGK2reRR6voHG6pvoQfOUxiggTWupc%2FucxgLmq0bne6RP42kNeYQ3rIFS5yzSYIk%2BJyKhYwshbCU6T2Ie3QxPHSedx5OCuFCYen4p9U6WEnlyEMAMlT2J6Gv9FfoV7Eq93Pa4Bu%2FT7qSj8Z&X-Amz-Signature=7bf04c68446c285d8f7b1e08bd54176a15fd3adc36feb4bb95a9abae81177480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7LAVQT3%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCgrgg6ar3FXSupGMgivq%2BSwom3Wcef9RQVTUoyNw77zwIhAJpP3C%2FoFLqxqVgkXfES9w8IZx7qpv%2FQG7%2BmBajxKoQnKv8DCCwQABoMNjM3NDIzMTgzODA1Igx%2BoeXm0vXAM%2Fubrswq3AOfyM%2FcqltFam3qGdwk7mHb1KJw10%2By3CZi70qs7q6Drl3jMSTEUlH3Abu5vh4NxyLMNaK6q%2BP8ZssMkixPXvhwkmRytU45fAtiqOTDniyIgOOmUPKOHdlahfHRIBhNzA9r0j66HIR3eXO3yVDEHsdw38kiJwXXotUUmTTDQdFPn1kZnovYjsOSc2j2M7tUyyV06c0lqFXA5sNEkfZLgCbAEuWLZXbMLgIiC5oV9jGBiS84skkwfhxwF82xbI59fStQOfxfYGvsuF6kahdBPhr5sqz1UwIfFjTPFRQoHjLRgCg2OsKBVINz0NPgw0bJDZykx7FT3KFncbo%2FJm9zsdisF5ieIkra9CyH%2BeAoFzabIje4fd%2FgorZa%2BK0xMhmr92dGWodjpMDpvVR0AM9wVijB%2FDBFBXLv5CWZTg2NwT3996GRmXRZ7AM7mzIS0%2BSQmMwzJdAW4KuDWwN2HzNuSQaxp1n%2FXrmxVCjrtfL5ClwFMkEa8%2BhywtkYVLJu5SMsfWklvD3gRqCzkpUCAnbwUP0BJUtHaBvypZVqqi2nzv9VG82q88Go4Kh26SD1g%2BMKDd1Q46vHiEHvjTd0nRDX%2FmsWvcbygZcrHs%2FJWf015IhxCchj7XkECa2LCLD%2F3jCT3fjJBjqkAXX4Kc3w3bvzkv7yJVO5dXanI1y1KZfzzEuOoRRSgQvjutljYMCJ%2FPyT%2FrWVSfQKw34N80cmPDPPwgGK2reRR6voHG6pvoQfOUxiggTWupc%2FucxgLmq0bne6RP42kNeYQ3rIFS5yzSYIk%2BJyKhYwshbCU6T2Ie3QxPHSedx5OCuFCYen4p9U6WEnlyEMAMlT2J6Gv9FfoV7Eq93Pa4Bu%2FT7qSj8Z&X-Amz-Signature=1acc8b98eaec6d5714004f00c4b127eb7eafc51eef3974aa914023a1e747d87d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7LAVQT3%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCgrgg6ar3FXSupGMgivq%2BSwom3Wcef9RQVTUoyNw77zwIhAJpP3C%2FoFLqxqVgkXfES9w8IZx7qpv%2FQG7%2BmBajxKoQnKv8DCCwQABoMNjM3NDIzMTgzODA1Igx%2BoeXm0vXAM%2Fubrswq3AOfyM%2FcqltFam3qGdwk7mHb1KJw10%2By3CZi70qs7q6Drl3jMSTEUlH3Abu5vh4NxyLMNaK6q%2BP8ZssMkixPXvhwkmRytU45fAtiqOTDniyIgOOmUPKOHdlahfHRIBhNzA9r0j66HIR3eXO3yVDEHsdw38kiJwXXotUUmTTDQdFPn1kZnovYjsOSc2j2M7tUyyV06c0lqFXA5sNEkfZLgCbAEuWLZXbMLgIiC5oV9jGBiS84skkwfhxwF82xbI59fStQOfxfYGvsuF6kahdBPhr5sqz1UwIfFjTPFRQoHjLRgCg2OsKBVINz0NPgw0bJDZykx7FT3KFncbo%2FJm9zsdisF5ieIkra9CyH%2BeAoFzabIje4fd%2FgorZa%2BK0xMhmr92dGWodjpMDpvVR0AM9wVijB%2FDBFBXLv5CWZTg2NwT3996GRmXRZ7AM7mzIS0%2BSQmMwzJdAW4KuDWwN2HzNuSQaxp1n%2FXrmxVCjrtfL5ClwFMkEa8%2BhywtkYVLJu5SMsfWklvD3gRqCzkpUCAnbwUP0BJUtHaBvypZVqqi2nzv9VG82q88Go4Kh26SD1g%2BMKDd1Q46vHiEHvjTd0nRDX%2FmsWvcbygZcrHs%2FJWf015IhxCchj7XkECa2LCLD%2F3jCT3fjJBjqkAXX4Kc3w3bvzkv7yJVO5dXanI1y1KZfzzEuOoRRSgQvjutljYMCJ%2FPyT%2FrWVSfQKw34N80cmPDPPwgGK2reRR6voHG6pvoQfOUxiggTWupc%2FucxgLmq0bne6RP42kNeYQ3rIFS5yzSYIk%2BJyKhYwshbCU6T2Ie3QxPHSedx5OCuFCYen4p9U6WEnlyEMAMlT2J6Gv9FfoV7Eq93Pa4Bu%2FT7qSj8Z&X-Amz-Signature=0b2316becb6b00751e76e999b5c3cc05f516989fa030953f2a02aea85db45956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MK6SMEM%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCW59oaXHUcTwngkVSpZyJx5zhDEBwzHT5%2FUqfsgJbz%2BwIgbv7xtZFoQ%2BbBi%2FUO06tmLbflgONRwx%2FbG5XExE%2ByFlYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDILHJQ4fZ5mgfceRVyrcAw5g64sZWaNNrl857JUN9rUTVlN8J7gzEhfVqw%2FMkbQ02YsPNgoSm%2Bz8d31qQX8iKBjZpxbOiI1m%2FPGE501CFhKdVA9MvaCm7aIpJdlBykE9Q1s6FRA1phvk2w6ZLLC33iFK2n3fFMOnPAjp0YFJDBTZkfMEQ5ELm5%2Fwz6tItP1u2zIIb2HAfDpgnTKQG%2FkI7fQ9WjiBD6pDC0UEKfOrvf47Z7o%2FmAkCkbdVFX9n8ViP%2FNXZ8b9MjTTwp5PgECo2CkuR0UbUizrZNfTHgG6nf9%2B7xAgFsgNaDImtAmAl2A5bHjxj3t05Aa4Zhaqjam8i%2BuYAKKT%2B96RbZJeS%2BJd5dxkpXXMygU6RspNV%2FPgH1s5bdRH45K%2B7dQz4Ori2REaWrMzZ2HhzejZLdslbO%2FwGqDP4FFcOp5xSWJKbQXdR%2FSWTeJ6gGKHaFEThxfOrbGt%2Bol5DIrhNBdp7gimK2XRuEeJQiPLYILNykpY%2FOxe4RdJidM4YQ2hNRDQm7Ys5cDqfAF084l6TlP2GHYzsK1%2F2wQCWbiyu3sPnX8%2FyBX5mQbLQbEl%2FJ4%2Fu0%2BH%2BI27oVyfg1u%2FYKLLrvYWKieC7MVt1lfR7F6%2BICaTDe%2FPf%2B1CFAtyr%2FZCAp%2FgCHh7jQWQWMJbd%2BMkGOqUBW2W4fgkF4tS75ICkZKzHff4T2QOMPoi4WVaVrv41AZQjMIXGO1BMyrVqXBvVE6OTtcBEVfruVk5Qt6%2Fbcr4yjspW%2BaKWriZlX4n8v96vEJybMA9RX1azT2r0vjcd4O2HaTWz5z87UuQfQcmmyksUoRoF0VLOR52PCyeZtDAvJ5rI4ZWvVJGdtTJkak85C%2BJAEXo7sniUwR1resKGDTNvOFD2sLcI&X-Amz-Signature=2142edd88a3d6acae1f3a56361076aff4472e1d273f34d762ebf73d43995befa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MK6SMEM%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCW59oaXHUcTwngkVSpZyJx5zhDEBwzHT5%2FUqfsgJbz%2BwIgbv7xtZFoQ%2BbBi%2FUO06tmLbflgONRwx%2FbG5XExE%2ByFlYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDILHJQ4fZ5mgfceRVyrcAw5g64sZWaNNrl857JUN9rUTVlN8J7gzEhfVqw%2FMkbQ02YsPNgoSm%2Bz8d31qQX8iKBjZpxbOiI1m%2FPGE501CFhKdVA9MvaCm7aIpJdlBykE9Q1s6FRA1phvk2w6ZLLC33iFK2n3fFMOnPAjp0YFJDBTZkfMEQ5ELm5%2Fwz6tItP1u2zIIb2HAfDpgnTKQG%2FkI7fQ9WjiBD6pDC0UEKfOrvf47Z7o%2FmAkCkbdVFX9n8ViP%2FNXZ8b9MjTTwp5PgECo2CkuR0UbUizrZNfTHgG6nf9%2B7xAgFsgNaDImtAmAl2A5bHjxj3t05Aa4Zhaqjam8i%2BuYAKKT%2B96RbZJeS%2BJd5dxkpXXMygU6RspNV%2FPgH1s5bdRH45K%2B7dQz4Ori2REaWrMzZ2HhzejZLdslbO%2FwGqDP4FFcOp5xSWJKbQXdR%2FSWTeJ6gGKHaFEThxfOrbGt%2Bol5DIrhNBdp7gimK2XRuEeJQiPLYILNykpY%2FOxe4RdJidM4YQ2hNRDQm7Ys5cDqfAF084l6TlP2GHYzsK1%2F2wQCWbiyu3sPnX8%2FyBX5mQbLQbEl%2FJ4%2Fu0%2BH%2BI27oVyfg1u%2FYKLLrvYWKieC7MVt1lfR7F6%2BICaTDe%2FPf%2B1CFAtyr%2FZCAp%2FgCHh7jQWQWMJbd%2BMkGOqUBW2W4fgkF4tS75ICkZKzHff4T2QOMPoi4WVaVrv41AZQjMIXGO1BMyrVqXBvVE6OTtcBEVfruVk5Qt6%2Fbcr4yjspW%2BaKWriZlX4n8v96vEJybMA9RX1azT2r0vjcd4O2HaTWz5z87UuQfQcmmyksUoRoF0VLOR52PCyeZtDAvJ5rI4ZWvVJGdtTJkak85C%2BJAEXo7sniUwR1resKGDTNvOFD2sLcI&X-Amz-Signature=5e9bf0f946cb09c2193cb9d72fbc15196bb592255c18554c6fa3bc7881e11851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MK6SMEM%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCW59oaXHUcTwngkVSpZyJx5zhDEBwzHT5%2FUqfsgJbz%2BwIgbv7xtZFoQ%2BbBi%2FUO06tmLbflgONRwx%2FbG5XExE%2ByFlYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDILHJQ4fZ5mgfceRVyrcAw5g64sZWaNNrl857JUN9rUTVlN8J7gzEhfVqw%2FMkbQ02YsPNgoSm%2Bz8d31qQX8iKBjZpxbOiI1m%2FPGE501CFhKdVA9MvaCm7aIpJdlBykE9Q1s6FRA1phvk2w6ZLLC33iFK2n3fFMOnPAjp0YFJDBTZkfMEQ5ELm5%2Fwz6tItP1u2zIIb2HAfDpgnTKQG%2FkI7fQ9WjiBD6pDC0UEKfOrvf47Z7o%2FmAkCkbdVFX9n8ViP%2FNXZ8b9MjTTwp5PgECo2CkuR0UbUizrZNfTHgG6nf9%2B7xAgFsgNaDImtAmAl2A5bHjxj3t05Aa4Zhaqjam8i%2BuYAKKT%2B96RbZJeS%2BJd5dxkpXXMygU6RspNV%2FPgH1s5bdRH45K%2B7dQz4Ori2REaWrMzZ2HhzejZLdslbO%2FwGqDP4FFcOp5xSWJKbQXdR%2FSWTeJ6gGKHaFEThxfOrbGt%2Bol5DIrhNBdp7gimK2XRuEeJQiPLYILNykpY%2FOxe4RdJidM4YQ2hNRDQm7Ys5cDqfAF084l6TlP2GHYzsK1%2F2wQCWbiyu3sPnX8%2FyBX5mQbLQbEl%2FJ4%2Fu0%2BH%2BI27oVyfg1u%2FYKLLrvYWKieC7MVt1lfR7F6%2BICaTDe%2FPf%2B1CFAtyr%2FZCAp%2FgCHh7jQWQWMJbd%2BMkGOqUBW2W4fgkF4tS75ICkZKzHff4T2QOMPoi4WVaVrv41AZQjMIXGO1BMyrVqXBvVE6OTtcBEVfruVk5Qt6%2Fbcr4yjspW%2BaKWriZlX4n8v96vEJybMA9RX1azT2r0vjcd4O2HaTWz5z87UuQfQcmmyksUoRoF0VLOR52PCyeZtDAvJ5rI4ZWvVJGdtTJkak85C%2BJAEXo7sniUwR1resKGDTNvOFD2sLcI&X-Amz-Signature=b92535bcb259ee09dadb54f9a3623162d32ada33673a0b55a92bde4a69f9ade7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QJ34XQ%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIG3XlyJiYCTpCP2%2BPCiUBUBwfAXUqnYkEyMFm%2FD4Mfl%2FAiAxev2P6yDixmKqFbBV%2FebmFziFvcxkiXI3wtKh2VRUwSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM0t1%2FvTps5qQ83Cf%2FKtwDoBugmjJ7GF21rVugvhuwSznh66AJ3PeY8OCWy3AzW2vvxQRlQs%2B4KPFw%2FP8jD5DXb1FNFOl3bKKkLUKDDGflMKt1%2FPN0%2FX2UMUDUKP8VqxTdPtSetNKTLbulyl88lkShMxGvI9EIyRxnpLqzqY7LdsQZCZoCMjzzImU6WGxpw0UMXhuYvMuF6DiCVybHX4PG6r6bym8%2FY%2Br9sDIzR7Bvk2Mi8jzu2ee7tZOdWZ%2F2T7y2XxsH7Vxjs4oYOMYBC6Ixi0NKteshVGlcPJZDhfL9DHAONFqO3sW19WW29RLKWotVUGzbqBn547Tj3EbJc7ZBoAlNX9ct3EeDEUIKvzbjE77JmN035%2Br1tVsvSIws2%2Fx5QAuWB8ztmfC8hXly7ihaCgPi6g8rRCodMQQYYT0rpi%2BEG4%2B%2BUYbPk%2Fm%2FqgfA0Yub9tyNBS63ROyiFfJtyNypdsqw9f3oivLC3QewL1kWqtOFouLfMr0fWj3TjFX0reqMeh7QVDph8QNrR76WT9N%2BWgO3USrDLGTpcbnTNOMs%2F95KUOKcYZPiM6bCPagI3KFsUrkE6kDvO0arRnfk8pCvOROiDidMHlOrhe7teJez%2B6qtQ%2BbRs%2BrMu6j9sUABTb4UnxSo%2B0qaN%2Buf9ZIwod34yQY6pgGeySBDef%2FfPtUboxfGzJ4N7jpZC4ulxzuZe28uVN5hdX8Cvk%2F%2FzFv6zQ2zzPbtUT%2FOPW0VIEpbb9xXWNdCjxGsFutQx1C9vFJWhyiWrWqhkmH58DCJIGIp5G0c6L88tG5WE2UA4tHnGdLe3DWPIb93Do%2B3gUNg3hqkbEWIvPiHGDVNW48c7tehNcwCnvh2dx%2F38YImUENvwOm9fbxbBLdbBvPWimKc&X-Amz-Signature=7e2d479d8398ab87b11cb643b6e2e2879d08b281003d9f71bae9aaa746ac90ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QJ34XQ%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIG3XlyJiYCTpCP2%2BPCiUBUBwfAXUqnYkEyMFm%2FD4Mfl%2FAiAxev2P6yDixmKqFbBV%2FebmFziFvcxkiXI3wtKh2VRUwSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM0t1%2FvTps5qQ83Cf%2FKtwDoBugmjJ7GF21rVugvhuwSznh66AJ3PeY8OCWy3AzW2vvxQRlQs%2B4KPFw%2FP8jD5DXb1FNFOl3bKKkLUKDDGflMKt1%2FPN0%2FX2UMUDUKP8VqxTdPtSetNKTLbulyl88lkShMxGvI9EIyRxnpLqzqY7LdsQZCZoCMjzzImU6WGxpw0UMXhuYvMuF6DiCVybHX4PG6r6bym8%2FY%2Br9sDIzR7Bvk2Mi8jzu2ee7tZOdWZ%2F2T7y2XxsH7Vxjs4oYOMYBC6Ixi0NKteshVGlcPJZDhfL9DHAONFqO3sW19WW29RLKWotVUGzbqBn547Tj3EbJc7ZBoAlNX9ct3EeDEUIKvzbjE77JmN035%2Br1tVsvSIws2%2Fx5QAuWB8ztmfC8hXly7ihaCgPi6g8rRCodMQQYYT0rpi%2BEG4%2B%2BUYbPk%2Fm%2FqgfA0Yub9tyNBS63ROyiFfJtyNypdsqw9f3oivLC3QewL1kWqtOFouLfMr0fWj3TjFX0reqMeh7QVDph8QNrR76WT9N%2BWgO3USrDLGTpcbnTNOMs%2F95KUOKcYZPiM6bCPagI3KFsUrkE6kDvO0arRnfk8pCvOROiDidMHlOrhe7teJez%2B6qtQ%2BbRs%2BrMu6j9sUABTb4UnxSo%2B0qaN%2Buf9ZIwod34yQY6pgGeySBDef%2FfPtUboxfGzJ4N7jpZC4ulxzuZe28uVN5hdX8Cvk%2F%2FzFv6zQ2zzPbtUT%2FOPW0VIEpbb9xXWNdCjxGsFutQx1C9vFJWhyiWrWqhkmH58DCJIGIp5G0c6L88tG5WE2UA4tHnGdLe3DWPIb93Do%2B3gUNg3hqkbEWIvPiHGDVNW48c7tehNcwCnvh2dx%2F38YImUENvwOm9fbxbBLdbBvPWimKc&X-Amz-Signature=97f0a6cbbe89cfda11225c06fd27a1f1b5b3abcb51d36cb4d265146fe8428197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTGHQH5R%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDOFKBSdnNDprYsQFlc4v%2FYUMAJKW5tLqdGfoMn1xwZJAIgUBoX9GAzxD9PdHpS%2BTbtlCEYHoTLVcz%2BInx5oGyBtiEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHTRsfYP5Ids5iBjSSrcA1YQca2EsqFkbbKW0EdR%2BXLcbF266VA8k1JVUbvcyocK9zq9VJ3lr%2BJc2mtt%2F%2FA1KPYINJqJRGQLtG3o2Ghe1sF0DJEkMxz4J7Jj8iZ97EvunSeTDIfxgl0EZV39vQdTTVCcroFHu%2Fet6lYABveceyJ6AjMzwcI2b6oGTYYhbJ%2BPYbUWvGZIc2rm7whPfuX0uUXeqK6zRiX3pqT2UpzVc8JpmwosUmVa7zq8oIR1lMzD4wGWrPLOCz56f1b2Tj6LYlRTmKK6%2F3MIYBuM5O1NTE%2ByKKa0GnDPG6MQRhPQ2%2FK06CzeWZktdV8WVFPbKOOVWp%2F6JkPnimoFcHNbsTx4mW67XqTe4VKFhtV7hlKOlr%2ByqPFMNahu7o4wKlXzE9xUAPclMPK3OTbCexl%2BNkXZjCuVUQEgtkE9ekWM9xkglENPqUGoCBf2AcNWApM0Rstc1%2FvrOusW7ndRXxMrJT8RF%2BXhwPIOw6yxGiTnyBXnoaF%2FhOrAkxxSpOLoQkFi5KwSDLIir6dYlgsj3p8ft%2FhsK732GPHfnfnbY8hLY6NPZlJZDzmLyAwHgY1hPcaJsSI69SduPxD%2FVsUKrgFFYiW6At2Aq%2BYRSihfhQ03i7xkMkEVuepgLKgP%2FZsCMdQAMM7c%2BMkGOqUB3XBEwIQxIVafkgukgWOFeWW7nScI2vNM3eaKzNmelUNXQ4BbdzBlsx%2Be2Ja%2B%2Bp3ssqYZSUol1YNO1TGBcNMQL79soTw0fWjebUGKa2JXjc%2FKkXw9uR7OuyKeRrwQSuciBKeq5ltSTW%2BGPLWWz0JnJD4ET1%2B%2BAiODCMj%2BapwuiaAZmmr%2B6htk75ieSXZTfzQUDvAegR4lg04%2FSsx%2BPp1v7CxiyN2u&X-Amz-Signature=6ccecc13b97106bcd5d25264f7592701d265025daa967d9eb6e369b20113ac37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTGHQH5R%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDOFKBSdnNDprYsQFlc4v%2FYUMAJKW5tLqdGfoMn1xwZJAIgUBoX9GAzxD9PdHpS%2BTbtlCEYHoTLVcz%2BInx5oGyBtiEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHTRsfYP5Ids5iBjSSrcA1YQca2EsqFkbbKW0EdR%2BXLcbF266VA8k1JVUbvcyocK9zq9VJ3lr%2BJc2mtt%2F%2FA1KPYINJqJRGQLtG3o2Ghe1sF0DJEkMxz4J7Jj8iZ97EvunSeTDIfxgl0EZV39vQdTTVCcroFHu%2Fet6lYABveceyJ6AjMzwcI2b6oGTYYhbJ%2BPYbUWvGZIc2rm7whPfuX0uUXeqK6zRiX3pqT2UpzVc8JpmwosUmVa7zq8oIR1lMzD4wGWrPLOCz56f1b2Tj6LYlRTmKK6%2F3MIYBuM5O1NTE%2ByKKa0GnDPG6MQRhPQ2%2FK06CzeWZktdV8WVFPbKOOVWp%2F6JkPnimoFcHNbsTx4mW67XqTe4VKFhtV7hlKOlr%2ByqPFMNahu7o4wKlXzE9xUAPclMPK3OTbCexl%2BNkXZjCuVUQEgtkE9ekWM9xkglENPqUGoCBf2AcNWApM0Rstc1%2FvrOusW7ndRXxMrJT8RF%2BXhwPIOw6yxGiTnyBXnoaF%2FhOrAkxxSpOLoQkFi5KwSDLIir6dYlgsj3p8ft%2FhsK732GPHfnfnbY8hLY6NPZlJZDzmLyAwHgY1hPcaJsSI69SduPxD%2FVsUKrgFFYiW6At2Aq%2BYRSihfhQ03i7xkMkEVuepgLKgP%2FZsCMdQAMM7c%2BMkGOqUB3XBEwIQxIVafkgukgWOFeWW7nScI2vNM3eaKzNmelUNXQ4BbdzBlsx%2Be2Ja%2B%2Bp3ssqYZSUol1YNO1TGBcNMQL79soTw0fWjebUGKa2JXjc%2FKkXw9uR7OuyKeRrwQSuciBKeq5ltSTW%2BGPLWWz0JnJD4ET1%2B%2BAiODCMj%2BapwuiaAZmmr%2B6htk75ieSXZTfzQUDvAegR4lg04%2FSsx%2BPp1v7CxiyN2u&X-Amz-Signature=7471bc03c3fc637eac12001bcd24fb15175a000c2f4d028b00855beaff9f8fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTGHQH5R%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDOFKBSdnNDprYsQFlc4v%2FYUMAJKW5tLqdGfoMn1xwZJAIgUBoX9GAzxD9PdHpS%2BTbtlCEYHoTLVcz%2BInx5oGyBtiEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHTRsfYP5Ids5iBjSSrcA1YQca2EsqFkbbKW0EdR%2BXLcbF266VA8k1JVUbvcyocK9zq9VJ3lr%2BJc2mtt%2F%2FA1KPYINJqJRGQLtG3o2Ghe1sF0DJEkMxz4J7Jj8iZ97EvunSeTDIfxgl0EZV39vQdTTVCcroFHu%2Fet6lYABveceyJ6AjMzwcI2b6oGTYYhbJ%2BPYbUWvGZIc2rm7whPfuX0uUXeqK6zRiX3pqT2UpzVc8JpmwosUmVa7zq8oIR1lMzD4wGWrPLOCz56f1b2Tj6LYlRTmKK6%2F3MIYBuM5O1NTE%2ByKKa0GnDPG6MQRhPQ2%2FK06CzeWZktdV8WVFPbKOOVWp%2F6JkPnimoFcHNbsTx4mW67XqTe4VKFhtV7hlKOlr%2ByqPFMNahu7o4wKlXzE9xUAPclMPK3OTbCexl%2BNkXZjCuVUQEgtkE9ekWM9xkglENPqUGoCBf2AcNWApM0Rstc1%2FvrOusW7ndRXxMrJT8RF%2BXhwPIOw6yxGiTnyBXnoaF%2FhOrAkxxSpOLoQkFi5KwSDLIir6dYlgsj3p8ft%2FhsK732GPHfnfnbY8hLY6NPZlJZDzmLyAwHgY1hPcaJsSI69SduPxD%2FVsUKrgFFYiW6At2Aq%2BYRSihfhQ03i7xkMkEVuepgLKgP%2FZsCMdQAMM7c%2BMkGOqUB3XBEwIQxIVafkgukgWOFeWW7nScI2vNM3eaKzNmelUNXQ4BbdzBlsx%2Be2Ja%2B%2Bp3ssqYZSUol1YNO1TGBcNMQL79soTw0fWjebUGKa2JXjc%2FKkXw9uR7OuyKeRrwQSuciBKeq5ltSTW%2BGPLWWz0JnJD4ET1%2B%2BAiODCMj%2BapwuiaAZmmr%2B6htk75ieSXZTfzQUDvAegR4lg04%2FSsx%2BPp1v7CxiyN2u&X-Amz-Signature=03a7b42890b6c325601e4a5a679ab3f8f2c7e3252f63040aa8382894d5ff6ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTGHQH5R%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDOFKBSdnNDprYsQFlc4v%2FYUMAJKW5tLqdGfoMn1xwZJAIgUBoX9GAzxD9PdHpS%2BTbtlCEYHoTLVcz%2BInx5oGyBtiEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHTRsfYP5Ids5iBjSSrcA1YQca2EsqFkbbKW0EdR%2BXLcbF266VA8k1JVUbvcyocK9zq9VJ3lr%2BJc2mtt%2F%2FA1KPYINJqJRGQLtG3o2Ghe1sF0DJEkMxz4J7Jj8iZ97EvunSeTDIfxgl0EZV39vQdTTVCcroFHu%2Fet6lYABveceyJ6AjMzwcI2b6oGTYYhbJ%2BPYbUWvGZIc2rm7whPfuX0uUXeqK6zRiX3pqT2UpzVc8JpmwosUmVa7zq8oIR1lMzD4wGWrPLOCz56f1b2Tj6LYlRTmKK6%2F3MIYBuM5O1NTE%2ByKKa0GnDPG6MQRhPQ2%2FK06CzeWZktdV8WVFPbKOOVWp%2F6JkPnimoFcHNbsTx4mW67XqTe4VKFhtV7hlKOlr%2ByqPFMNahu7o4wKlXzE9xUAPclMPK3OTbCexl%2BNkXZjCuVUQEgtkE9ekWM9xkglENPqUGoCBf2AcNWApM0Rstc1%2FvrOusW7ndRXxMrJT8RF%2BXhwPIOw6yxGiTnyBXnoaF%2FhOrAkxxSpOLoQkFi5KwSDLIir6dYlgsj3p8ft%2FhsK732GPHfnfnbY8hLY6NPZlJZDzmLyAwHgY1hPcaJsSI69SduPxD%2FVsUKrgFFYiW6At2Aq%2BYRSihfhQ03i7xkMkEVuepgLKgP%2FZsCMdQAMM7c%2BMkGOqUB3XBEwIQxIVafkgukgWOFeWW7nScI2vNM3eaKzNmelUNXQ4BbdzBlsx%2Be2Ja%2B%2Bp3ssqYZSUol1YNO1TGBcNMQL79soTw0fWjebUGKa2JXjc%2FKkXw9uR7OuyKeRrwQSuciBKeq5ltSTW%2BGPLWWz0JnJD4ET1%2B%2BAiODCMj%2BapwuiaAZmmr%2B6htk75ieSXZTfzQUDvAegR4lg04%2FSsx%2BPp1v7CxiyN2u&X-Amz-Signature=ab918b7c1d2694f4dbe5d9a0e60f7689ec72f1adc5d5eb4816334ca4ee4484c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTGHQH5R%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDOFKBSdnNDprYsQFlc4v%2FYUMAJKW5tLqdGfoMn1xwZJAIgUBoX9GAzxD9PdHpS%2BTbtlCEYHoTLVcz%2BInx5oGyBtiEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHTRsfYP5Ids5iBjSSrcA1YQca2EsqFkbbKW0EdR%2BXLcbF266VA8k1JVUbvcyocK9zq9VJ3lr%2BJc2mtt%2F%2FA1KPYINJqJRGQLtG3o2Ghe1sF0DJEkMxz4J7Jj8iZ97EvunSeTDIfxgl0EZV39vQdTTVCcroFHu%2Fet6lYABveceyJ6AjMzwcI2b6oGTYYhbJ%2BPYbUWvGZIc2rm7whPfuX0uUXeqK6zRiX3pqT2UpzVc8JpmwosUmVa7zq8oIR1lMzD4wGWrPLOCz56f1b2Tj6LYlRTmKK6%2F3MIYBuM5O1NTE%2ByKKa0GnDPG6MQRhPQ2%2FK06CzeWZktdV8WVFPbKOOVWp%2F6JkPnimoFcHNbsTx4mW67XqTe4VKFhtV7hlKOlr%2ByqPFMNahu7o4wKlXzE9xUAPclMPK3OTbCexl%2BNkXZjCuVUQEgtkE9ekWM9xkglENPqUGoCBf2AcNWApM0Rstc1%2FvrOusW7ndRXxMrJT8RF%2BXhwPIOw6yxGiTnyBXnoaF%2FhOrAkxxSpOLoQkFi5KwSDLIir6dYlgsj3p8ft%2FhsK732GPHfnfnbY8hLY6NPZlJZDzmLyAwHgY1hPcaJsSI69SduPxD%2FVsUKrgFFYiW6At2Aq%2BYRSihfhQ03i7xkMkEVuepgLKgP%2FZsCMdQAMM7c%2BMkGOqUB3XBEwIQxIVafkgukgWOFeWW7nScI2vNM3eaKzNmelUNXQ4BbdzBlsx%2Be2Ja%2B%2Bp3ssqYZSUol1YNO1TGBcNMQL79soTw0fWjebUGKa2JXjc%2FKkXw9uR7OuyKeRrwQSuciBKeq5ltSTW%2BGPLWWz0JnJD4ET1%2B%2BAiODCMj%2BapwuiaAZmmr%2B6htk75ieSXZTfzQUDvAegR4lg04%2FSsx%2BPp1v7CxiyN2u&X-Amz-Signature=272efef0e7b226ab305ab15ed8dc13b40cfea63b32a73340695a7eb16f012fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QTYJDG%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T040512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCk2ZlAcH6jPCGN%2BzeLHF0H%2B6L0EclMTisWOA8djYIqfgIhALZBNETaq8xjOcaGcCIXPbime%2FSxQXLHSK8GyzRFd2JpKv8DCC0QABoMNjM3NDIzMTgzODA1Igz8jis4WKNNvjhAsdIq3AMxHRGv%2FHjEAwSHcpg8Q7Pk7j2OiECBUUvpJpnvWUnpQwJ2NjbGs1IAlqGuegGmcOIhAqJWLYVTC0DXLS16gJqR8NXMsdWdGXnC%2BsdxFCG9opQ7t6%2BDt4sucVSYe7OxQzI6%2F2BEMkZDhfzsPMAbi9JL28IjyewGBBxVWLOweTySYBlBgSASqSUNYTgull2fN0xYLqhqVdrgunw843et%2FIj%2BLw9jG%2B63VWjnixGzmbGLvwbqEQFblIA%2BKwZuexPmp7NaBUSHKsmGtcETTz5Q1fmj2gzAEWA31pWa65%2Fzp%2BybbKu70LLsx3WAo77XgWYkH1zEAV5e%2B8cQ04zPfORX%2BPqZbg80Z3bf5NIDVZEystUEh0Vmev%2BDR2B9l8hMLPmkgXndHmjQ98aanDUoZPyUvKZdqdoVXVb07m8nrXQb46GPYoCXBc8KS9GDQbrsiPXFNmK4Aqcx7wigYzpc0eRPo4oZTllciDiDUKdlbuKMcqLPMfCIHkLBbh9AbtZOgeZpP6b4uZkVpRtGBawWDjhhdvvfAMXfMMrOOwpmzE3FmpbYPZ8E6BzCD87mf5d6WbhjAu6AoOpyMOdX9VmdZoXnuWEnuz1siYlRbTFZNGFK1ISfUB8iGY1taEDJWSbXWTDF3PjJBjqkAePbgfhus9Jdwl%2FjsSNvR74nvDL%2Bl6GpLp19iIunfFjXONt%2BQZJADJ0h%2BPY%2Fzq84OBzlLGPxxD%2FQ0QV8O5rW7ml9vN8jZ%2BOQGCni3pcx347I5atJ%2F5k15%2F%2F%2B55tIDWjkJuespcnSQ0%2Fj8t91rmWEhi3oICeBcgRimKeJeIcNfzTCbz8bu4%2Fftt8AKbXYYyDkGj%2FRUk2K4aG4gLaYAoaT7PPIy3R4&X-Amz-Signature=3635ece3e925620a389b760f2dcba42166a90bc29f009e29a4278dde8ae296aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

