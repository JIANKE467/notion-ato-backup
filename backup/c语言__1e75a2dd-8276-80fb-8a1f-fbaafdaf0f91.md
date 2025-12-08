
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGCKFUS4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrQtUpgeJRv4SZ%2BBtrac7K0APJ61Gl1YDOVeLGRnJW9AIgc80gCvcBDr9M7WTgRGgdfXorIszazIUNjz1nnEwG7%2FwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmqKiv%2BTcGXUm8y7SrcA3wN6Kh6DrwgQuGisslAY8t%2F4dYXuaNZAyD1Iw8EA1PwTiJ0%2BFXcK0VMx6MgV3TvLMHrW8MLmm7nggbRLVqEzXAETArdcb8OAMbcZDnE19zY8WROAtCIc%2F5kcVE6HllmKU0Oe8Ulp4Wg8Z75AggznOt%2Bw0sadQ6KDwE%2FKqjA3ajOkALEXPiFznLVC5TuuryhZBIKsARX8oIw462Zn9MGkRRUZ5G9cchBLaB0gx%2Bk01M7ZH%2F5tpUQhhFl6UDLeawwSRocH9nMqAe2tx9%2Fu%2BuCM52BaJMfOPp4ThobdYSgLtZka6gIdmDciwi6Qms70RnDU%2BdpRlILR53OybkmTv8%2F0p7Uyjb390GMOs42Yj2yOtyuOREC7yGCymz%2FSZFhW7xMnNBdo0vwz3UimMVU4vZIHfjTeZotnQFvpba%2BrDY%2BQ%2FafMYb%2B%2FMUQUUUGN49yaMN76njWzSoFN%2BKYbjm4jd1%2BtJwAzDaVgVUmnz2346SJ0nT9j1idWhIeuJvrqp60uvwZeaTbbxhKL9%2BnF5PRjYhVfC85RboYsRL1Vg0JHZ9fLrZ868VlTfw4EaQ7DJmLew4gD4VsGAe1ZLXb1ph8vEyfcOszRq2eqZepYPb32Ghe5Mk4cRb932IA%2B2aKEaRJMNqD2ckGOqUBd%2BLBHbTFnK1sFQ7DrnGNmf6qriSv6vEVpq4f6%2FZOwxwXIrnySEO60Vgz8WyIntGZ424Pu%2FOaWfLp9trXW%2FeUphveLTwQk1cggJEeSCgVBUCIIaKtMO8F9sYJzaT08kcm87r1UBWmbPeIaRqhoUnzkmdc%2BGP3GGM9lnlajLtpw6PqeEmWqSRBM4WIZNQY5BWyUtjn6o%2FQ3gXmbavXbIkwvscs2FN5&X-Amz-Signature=a22fb018d0e42546d0323ae67756051839bc04f4758227dd1ffac93098656f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSXOPP5X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9AA%2FuwBTx%2Bf7IfdiBvNiKyYEMjQwCpcTXTxdBfS87sQIgQ6N%2FBHBowHVD0qOQUeJHz4vu2gHrJBTgxi%2BfZafO%2FmIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfqsHu6EZZ%2By237WyrcA8Tfn4asLzg2KP0rZ1Hb30fdaH65ARDiES3r8RHED%2BxBHPmxc2VxEbNChxTv9k0g62GmZ2zPba0mLELGHCbSOG8fRqjjxPBFmoCSPyr009bhbwZwPcz3vCgLRJa2zhnQ67lhJb0Dg0jjdGzC73SQMJaIJFxnFKwjWpwcz3EBj2Q%2BzrLAZUGQAokvkMHNVx9m%2FoDyQMWMVDC8wG2uUTy2%2BUpHiY9tsouZqIgMAUA37ziDbU9AMk%2BMuMUiU8v%2ByzqY3T8FCTn76qtLjfQ93qxuZTXzulmjX8GaiqSviD%2BjZG8HI98mpKme8MZvQ5rO6bVBnlANABXycTaRUtPB9D%2F49aW%2F1NWuudMlBCaLVwHY1DJGWq73uYFA7ie8vVdoZpOoF6nFqplKzZK44Gx5Bx1XvgNMLMx0CUiCM5%2FMWil%2FDyOZ4ilRbblr%2BXUaZEipbg0mP3CGGaPM8xQ9dr7MfHZcs9GvzqmL9Guni664qbMooIdF7dZcIhV2brW8R%2FN0PcFFo3j%2Fv8d9D18ht4rblOhsFkdWPLw4VrXOAz5mTNDhla7HEocNlSNpFK8vxNlTqaWMG3SM1QTtZxpWOEO4AS%2FnNHxAiuhRg%2F9yQ2jEgNHdHFcq8Y7n%2FaEkKobxxc63MNiC2ckGOqUBxkUjOgfcONqAzxBP2FPB%2BRO2%2B2LJcg3tcyJAZ%2BI%2FDWDcie5YkU%2BIiKWxKTWpCCFCtrN%2FjDrNYCEELL0qm6WhPvcD1mgymvcZpSL6H765CbcB8hA5gOYHgK%2FgWacjaHpcjQQcUvApvR16iRASoieKukPVYEoTzqiC0rUscsJXXhLn2PgIF3jdovmii3vVcmodi5UP9byNdpyYCHtRlun8QPm2ouvZ&X-Amz-Signature=0a23c7324901cd199432a14637eb96d8b510308b8afcd449e06cff5d7c408700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSXOPP5X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9AA%2FuwBTx%2Bf7IfdiBvNiKyYEMjQwCpcTXTxdBfS87sQIgQ6N%2FBHBowHVD0qOQUeJHz4vu2gHrJBTgxi%2BfZafO%2FmIqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfqsHu6EZZ%2By237WyrcA8Tfn4asLzg2KP0rZ1Hb30fdaH65ARDiES3r8RHED%2BxBHPmxc2VxEbNChxTv9k0g62GmZ2zPba0mLELGHCbSOG8fRqjjxPBFmoCSPyr009bhbwZwPcz3vCgLRJa2zhnQ67lhJb0Dg0jjdGzC73SQMJaIJFxnFKwjWpwcz3EBj2Q%2BzrLAZUGQAokvkMHNVx9m%2FoDyQMWMVDC8wG2uUTy2%2BUpHiY9tsouZqIgMAUA37ziDbU9AMk%2BMuMUiU8v%2ByzqY3T8FCTn76qtLjfQ93qxuZTXzulmjX8GaiqSviD%2BjZG8HI98mpKme8MZvQ5rO6bVBnlANABXycTaRUtPB9D%2F49aW%2F1NWuudMlBCaLVwHY1DJGWq73uYFA7ie8vVdoZpOoF6nFqplKzZK44Gx5Bx1XvgNMLMx0CUiCM5%2FMWil%2FDyOZ4ilRbblr%2BXUaZEipbg0mP3CGGaPM8xQ9dr7MfHZcs9GvzqmL9Guni664qbMooIdF7dZcIhV2brW8R%2FN0PcFFo3j%2Fv8d9D18ht4rblOhsFkdWPLw4VrXOAz5mTNDhla7HEocNlSNpFK8vxNlTqaWMG3SM1QTtZxpWOEO4AS%2FnNHxAiuhRg%2F9yQ2jEgNHdHFcq8Y7n%2FaEkKobxxc63MNiC2ckGOqUBxkUjOgfcONqAzxBP2FPB%2BRO2%2B2LJcg3tcyJAZ%2BI%2FDWDcie5YkU%2BIiKWxKTWpCCFCtrN%2FjDrNYCEELL0qm6WhPvcD1mgymvcZpSL6H765CbcB8hA5gOYHgK%2FgWacjaHpcjQQcUvApvR16iRASoieKukPVYEoTzqiC0rUscsJXXhLn2PgIF3jdovmii3vVcmodi5UP9byNdpyYCHtRlun8QPm2ouvZ&X-Amz-Signature=2f3de0f25132f1c1538629c51444d791060ecd6c7b9a75e57f412ab2b340bec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IV55EX4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx%2BUf5MpvvP1t1asKr6TQ7gKlN52LJiiUffXwQvP4GvAIhAP3X1uQBHQyn757LcW3Ofdu4ddgfsvu30N89I%2F2NSC7hKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpluRVBUUzKGDqSAUq3APzYOIJmpa2III81UGmShoV%2BK8kBQTWwRjEt29AxXaZkxw9cVUttDvSV1UWNrmI%2BFPbJ0JH%2F%2B5Dr6NJG2oZowCUHcq%2Bgq5M3H%2F02SuNwjSItJBvuJwAxybNsu7e5Ps9qWP9I1NUrCgq%2FiExLJFZ8Nz%2B9u7b5TQwkqJM9%2BAz6M5cb8P0l2KQC69K6t8eFtOy73J4ivARJriuDi10E1XLu2gyDlNH1%2BHXC9o4zwyepuhACkOOG8Ps4CZ34v8EPJwB99TZG6rx7mG%2BX8xrQYO%2FeJrZ7GB%2BjMCbzzZF%2BabrC4ZbWhajdI7FTElJdOte7jup4JWv%2Bu0sUVu1sgWQ8oywiqwu9EhpvnWAKjWXSE%2Fh6Kg8AlwsEisi2djWxAhTd4I7N%2Bf1jq2EbjB3q9H7BHhmcJQ6U8eY4sraLWEW8eL3asqgst%2FaT3GMIQ%2FU09YXlE63NRvZepuX4jig05WXDujBhYcpRnp8Ca034lLQ900S2qE0%2FrA4oNebHkDjy2WUKfJsCClGKahx0L1reNci9uSBXbgdP7e7fFPorSDHbM3gwFbPNvjsoX8%2FLdyaDrvSsPt0IK3c33kp7wWJQE7Oe2%2BwRqXT3VlyjgpSiY5KAJnRn7sFWnbHXGDrN1fHpEUMrDDWgtnJBjqkAdUOG0d9i7iYSl%2FN%2FWfCeW5mc5Pdfmda99EIK2izGWTETQj7U8cyus1GcIoRFtVvAoHezb9pVhu2SNTUqeb9j9mKSdr3dtMU6xblP3nSp%2F38fXhNjV57bcfZpCdu5SJk6Wsv66z2ZaMs9OwVs%2Fb4rIeY3YYQaXxzjxnPMZiFHXcrZ3ag5CqwZ3qyemSU%2FUQs21o5wiksiVR4n%2F4pjCg%2F8sfoSGHk&X-Amz-Signature=01907bc389045a35d650e80a0e6ea293e28644e9d4151e5a0fcb4c9e933e574d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IV55EX4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx%2BUf5MpvvP1t1asKr6TQ7gKlN52LJiiUffXwQvP4GvAIhAP3X1uQBHQyn757LcW3Ofdu4ddgfsvu30N89I%2F2NSC7hKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpluRVBUUzKGDqSAUq3APzYOIJmpa2III81UGmShoV%2BK8kBQTWwRjEt29AxXaZkxw9cVUttDvSV1UWNrmI%2BFPbJ0JH%2F%2B5Dr6NJG2oZowCUHcq%2Bgq5M3H%2F02SuNwjSItJBvuJwAxybNsu7e5Ps9qWP9I1NUrCgq%2FiExLJFZ8Nz%2B9u7b5TQwkqJM9%2BAz6M5cb8P0l2KQC69K6t8eFtOy73J4ivARJriuDi10E1XLu2gyDlNH1%2BHXC9o4zwyepuhACkOOG8Ps4CZ34v8EPJwB99TZG6rx7mG%2BX8xrQYO%2FeJrZ7GB%2BjMCbzzZF%2BabrC4ZbWhajdI7FTElJdOte7jup4JWv%2Bu0sUVu1sgWQ8oywiqwu9EhpvnWAKjWXSE%2Fh6Kg8AlwsEisi2djWxAhTd4I7N%2Bf1jq2EbjB3q9H7BHhmcJQ6U8eY4sraLWEW8eL3asqgst%2FaT3GMIQ%2FU09YXlE63NRvZepuX4jig05WXDujBhYcpRnp8Ca034lLQ900S2qE0%2FrA4oNebHkDjy2WUKfJsCClGKahx0L1reNci9uSBXbgdP7e7fFPorSDHbM3gwFbPNvjsoX8%2FLdyaDrvSsPt0IK3c33kp7wWJQE7Oe2%2BwRqXT3VlyjgpSiY5KAJnRn7sFWnbHXGDrN1fHpEUMrDDWgtnJBjqkAdUOG0d9i7iYSl%2FN%2FWfCeW5mc5Pdfmda99EIK2izGWTETQj7U8cyus1GcIoRFtVvAoHezb9pVhu2SNTUqeb9j9mKSdr3dtMU6xblP3nSp%2F38fXhNjV57bcfZpCdu5SJk6Wsv66z2ZaMs9OwVs%2Fb4rIeY3YYQaXxzjxnPMZiFHXcrZ3ag5CqwZ3qyemSU%2FUQs21o5wiksiVR4n%2F4pjCg%2F8sfoSGHk&X-Amz-Signature=188e591eaebca3815b9a7c10faf181a30580e61fe9430881432cecc8ee14b052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IV55EX4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx%2BUf5MpvvP1t1asKr6TQ7gKlN52LJiiUffXwQvP4GvAIhAP3X1uQBHQyn757LcW3Ofdu4ddgfsvu30N89I%2F2NSC7hKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpluRVBUUzKGDqSAUq3APzYOIJmpa2III81UGmShoV%2BK8kBQTWwRjEt29AxXaZkxw9cVUttDvSV1UWNrmI%2BFPbJ0JH%2F%2B5Dr6NJG2oZowCUHcq%2Bgq5M3H%2F02SuNwjSItJBvuJwAxybNsu7e5Ps9qWP9I1NUrCgq%2FiExLJFZ8Nz%2B9u7b5TQwkqJM9%2BAz6M5cb8P0l2KQC69K6t8eFtOy73J4ivARJriuDi10E1XLu2gyDlNH1%2BHXC9o4zwyepuhACkOOG8Ps4CZ34v8EPJwB99TZG6rx7mG%2BX8xrQYO%2FeJrZ7GB%2BjMCbzzZF%2BabrC4ZbWhajdI7FTElJdOte7jup4JWv%2Bu0sUVu1sgWQ8oywiqwu9EhpvnWAKjWXSE%2Fh6Kg8AlwsEisi2djWxAhTd4I7N%2Bf1jq2EbjB3q9H7BHhmcJQ6U8eY4sraLWEW8eL3asqgst%2FaT3GMIQ%2FU09YXlE63NRvZepuX4jig05WXDujBhYcpRnp8Ca034lLQ900S2qE0%2FrA4oNebHkDjy2WUKfJsCClGKahx0L1reNci9uSBXbgdP7e7fFPorSDHbM3gwFbPNvjsoX8%2FLdyaDrvSsPt0IK3c33kp7wWJQE7Oe2%2BwRqXT3VlyjgpSiY5KAJnRn7sFWnbHXGDrN1fHpEUMrDDWgtnJBjqkAdUOG0d9i7iYSl%2FN%2FWfCeW5mc5Pdfmda99EIK2izGWTETQj7U8cyus1GcIoRFtVvAoHezb9pVhu2SNTUqeb9j9mKSdr3dtMU6xblP3nSp%2F38fXhNjV57bcfZpCdu5SJk6Wsv66z2ZaMs9OwVs%2Fb4rIeY3YYQaXxzjxnPMZiFHXcrZ3ag5CqwZ3qyemSU%2FUQs21o5wiksiVR4n%2F4pjCg%2F8sfoSGHk&X-Amz-Signature=4cce4eeb9861d4b681aad3312cfbe311acf2be1a4286e19de89ff04a33df54bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IV55EX4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx%2BUf5MpvvP1t1asKr6TQ7gKlN52LJiiUffXwQvP4GvAIhAP3X1uQBHQyn757LcW3Ofdu4ddgfsvu30N89I%2F2NSC7hKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpluRVBUUzKGDqSAUq3APzYOIJmpa2III81UGmShoV%2BK8kBQTWwRjEt29AxXaZkxw9cVUttDvSV1UWNrmI%2BFPbJ0JH%2F%2B5Dr6NJG2oZowCUHcq%2Bgq5M3H%2F02SuNwjSItJBvuJwAxybNsu7e5Ps9qWP9I1NUrCgq%2FiExLJFZ8Nz%2B9u7b5TQwkqJM9%2BAz6M5cb8P0l2KQC69K6t8eFtOy73J4ivARJriuDi10E1XLu2gyDlNH1%2BHXC9o4zwyepuhACkOOG8Ps4CZ34v8EPJwB99TZG6rx7mG%2BX8xrQYO%2FeJrZ7GB%2BjMCbzzZF%2BabrC4ZbWhajdI7FTElJdOte7jup4JWv%2Bu0sUVu1sgWQ8oywiqwu9EhpvnWAKjWXSE%2Fh6Kg8AlwsEisi2djWxAhTd4I7N%2Bf1jq2EbjB3q9H7BHhmcJQ6U8eY4sraLWEW8eL3asqgst%2FaT3GMIQ%2FU09YXlE63NRvZepuX4jig05WXDujBhYcpRnp8Ca034lLQ900S2qE0%2FrA4oNebHkDjy2WUKfJsCClGKahx0L1reNci9uSBXbgdP7e7fFPorSDHbM3gwFbPNvjsoX8%2FLdyaDrvSsPt0IK3c33kp7wWJQE7Oe2%2BwRqXT3VlyjgpSiY5KAJnRn7sFWnbHXGDrN1fHpEUMrDDWgtnJBjqkAdUOG0d9i7iYSl%2FN%2FWfCeW5mc5Pdfmda99EIK2izGWTETQj7U8cyus1GcIoRFtVvAoHezb9pVhu2SNTUqeb9j9mKSdr3dtMU6xblP3nSp%2F38fXhNjV57bcfZpCdu5SJk6Wsv66z2ZaMs9OwVs%2Fb4rIeY3YYQaXxzjxnPMZiFHXcrZ3ag5CqwZ3qyemSU%2FUQs21o5wiksiVR4n%2F4pjCg%2F8sfoSGHk&X-Amz-Signature=c14e2e31482b1354f63c1f114a1328a70090203bf64c0b3e51f5aa821c3189c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IV55EX4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx%2BUf5MpvvP1t1asKr6TQ7gKlN52LJiiUffXwQvP4GvAIhAP3X1uQBHQyn757LcW3Ofdu4ddgfsvu30N89I%2F2NSC7hKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpluRVBUUzKGDqSAUq3APzYOIJmpa2III81UGmShoV%2BK8kBQTWwRjEt29AxXaZkxw9cVUttDvSV1UWNrmI%2BFPbJ0JH%2F%2B5Dr6NJG2oZowCUHcq%2Bgq5M3H%2F02SuNwjSItJBvuJwAxybNsu7e5Ps9qWP9I1NUrCgq%2FiExLJFZ8Nz%2B9u7b5TQwkqJM9%2BAz6M5cb8P0l2KQC69K6t8eFtOy73J4ivARJriuDi10E1XLu2gyDlNH1%2BHXC9o4zwyepuhACkOOG8Ps4CZ34v8EPJwB99TZG6rx7mG%2BX8xrQYO%2FeJrZ7GB%2BjMCbzzZF%2BabrC4ZbWhajdI7FTElJdOte7jup4JWv%2Bu0sUVu1sgWQ8oywiqwu9EhpvnWAKjWXSE%2Fh6Kg8AlwsEisi2djWxAhTd4I7N%2Bf1jq2EbjB3q9H7BHhmcJQ6U8eY4sraLWEW8eL3asqgst%2FaT3GMIQ%2FU09YXlE63NRvZepuX4jig05WXDujBhYcpRnp8Ca034lLQ900S2qE0%2FrA4oNebHkDjy2WUKfJsCClGKahx0L1reNci9uSBXbgdP7e7fFPorSDHbM3gwFbPNvjsoX8%2FLdyaDrvSsPt0IK3c33kp7wWJQE7Oe2%2BwRqXT3VlyjgpSiY5KAJnRn7sFWnbHXGDrN1fHpEUMrDDWgtnJBjqkAdUOG0d9i7iYSl%2FN%2FWfCeW5mc5Pdfmda99EIK2izGWTETQj7U8cyus1GcIoRFtVvAoHezb9pVhu2SNTUqeb9j9mKSdr3dtMU6xblP3nSp%2F38fXhNjV57bcfZpCdu5SJk6Wsv66z2ZaMs9OwVs%2Fb4rIeY3YYQaXxzjxnPMZiFHXcrZ3ag5CqwZ3qyemSU%2FUQs21o5wiksiVR4n%2F4pjCg%2F8sfoSGHk&X-Amz-Signature=baa8d7d01e252a5fefb02dd0769b6535f7a76f1226e438dfae96642d39915684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IV55EX4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx%2BUf5MpvvP1t1asKr6TQ7gKlN52LJiiUffXwQvP4GvAIhAP3X1uQBHQyn757LcW3Ofdu4ddgfsvu30N89I%2F2NSC7hKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpluRVBUUzKGDqSAUq3APzYOIJmpa2III81UGmShoV%2BK8kBQTWwRjEt29AxXaZkxw9cVUttDvSV1UWNrmI%2BFPbJ0JH%2F%2B5Dr6NJG2oZowCUHcq%2Bgq5M3H%2F02SuNwjSItJBvuJwAxybNsu7e5Ps9qWP9I1NUrCgq%2FiExLJFZ8Nz%2B9u7b5TQwkqJM9%2BAz6M5cb8P0l2KQC69K6t8eFtOy73J4ivARJriuDi10E1XLu2gyDlNH1%2BHXC9o4zwyepuhACkOOG8Ps4CZ34v8EPJwB99TZG6rx7mG%2BX8xrQYO%2FeJrZ7GB%2BjMCbzzZF%2BabrC4ZbWhajdI7FTElJdOte7jup4JWv%2Bu0sUVu1sgWQ8oywiqwu9EhpvnWAKjWXSE%2Fh6Kg8AlwsEisi2djWxAhTd4I7N%2Bf1jq2EbjB3q9H7BHhmcJQ6U8eY4sraLWEW8eL3asqgst%2FaT3GMIQ%2FU09YXlE63NRvZepuX4jig05WXDujBhYcpRnp8Ca034lLQ900S2qE0%2FrA4oNebHkDjy2WUKfJsCClGKahx0L1reNci9uSBXbgdP7e7fFPorSDHbM3gwFbPNvjsoX8%2FLdyaDrvSsPt0IK3c33kp7wWJQE7Oe2%2BwRqXT3VlyjgpSiY5KAJnRn7sFWnbHXGDrN1fHpEUMrDDWgtnJBjqkAdUOG0d9i7iYSl%2FN%2FWfCeW5mc5Pdfmda99EIK2izGWTETQj7U8cyus1GcIoRFtVvAoHezb9pVhu2SNTUqeb9j9mKSdr3dtMU6xblP3nSp%2F38fXhNjV57bcfZpCdu5SJk6Wsv66z2ZaMs9OwVs%2Fb4rIeY3YYQaXxzjxnPMZiFHXcrZ3ag5CqwZ3qyemSU%2FUQs21o5wiksiVR4n%2F4pjCg%2F8sfoSGHk&X-Amz-Signature=700c179e696b0521b0bf815e5d1f03ca5c7cee9ede276c254b90b39ef92cdf85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IV55EX4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx%2BUf5MpvvP1t1asKr6TQ7gKlN52LJiiUffXwQvP4GvAIhAP3X1uQBHQyn757LcW3Ofdu4ddgfsvu30N89I%2F2NSC7hKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpluRVBUUzKGDqSAUq3APzYOIJmpa2III81UGmShoV%2BK8kBQTWwRjEt29AxXaZkxw9cVUttDvSV1UWNrmI%2BFPbJ0JH%2F%2B5Dr6NJG2oZowCUHcq%2Bgq5M3H%2F02SuNwjSItJBvuJwAxybNsu7e5Ps9qWP9I1NUrCgq%2FiExLJFZ8Nz%2B9u7b5TQwkqJM9%2BAz6M5cb8P0l2KQC69K6t8eFtOy73J4ivARJriuDi10E1XLu2gyDlNH1%2BHXC9o4zwyepuhACkOOG8Ps4CZ34v8EPJwB99TZG6rx7mG%2BX8xrQYO%2FeJrZ7GB%2BjMCbzzZF%2BabrC4ZbWhajdI7FTElJdOte7jup4JWv%2Bu0sUVu1sgWQ8oywiqwu9EhpvnWAKjWXSE%2Fh6Kg8AlwsEisi2djWxAhTd4I7N%2Bf1jq2EbjB3q9H7BHhmcJQ6U8eY4sraLWEW8eL3asqgst%2FaT3GMIQ%2FU09YXlE63NRvZepuX4jig05WXDujBhYcpRnp8Ca034lLQ900S2qE0%2FrA4oNebHkDjy2WUKfJsCClGKahx0L1reNci9uSBXbgdP7e7fFPorSDHbM3gwFbPNvjsoX8%2FLdyaDrvSsPt0IK3c33kp7wWJQE7Oe2%2BwRqXT3VlyjgpSiY5KAJnRn7sFWnbHXGDrN1fHpEUMrDDWgtnJBjqkAdUOG0d9i7iYSl%2FN%2FWfCeW5mc5Pdfmda99EIK2izGWTETQj7U8cyus1GcIoRFtVvAoHezb9pVhu2SNTUqeb9j9mKSdr3dtMU6xblP3nSp%2F38fXhNjV57bcfZpCdu5SJk6Wsv66z2ZaMs9OwVs%2Fb4rIeY3YYQaXxzjxnPMZiFHXcrZ3ag5CqwZ3qyemSU%2FUQs21o5wiksiVR4n%2F4pjCg%2F8sfoSGHk&X-Amz-Signature=11d172c25844926ad60df58a85ad325bdd17f543d8f37f8d8e892d14a4a304c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBLC3NX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuoG7m5iSdcaRexExVk92tJ8tQRozo0JvUYbuSyXc20wIgGBocSVxURGA7aezPj2HmpdP1x7IN%2FTc5RyodMIxSdJEqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyACcPs6bv3QFu3ySrcA1Ev8ZufYIUQ8X96PbViBk7Z9J2E0U1Aeb1uRkcOFm3z8CUcORxxVNOMFXwFW647xZY%2B60%2BGS541RB5DdHNB3d7zyaZVLzXnfliAxB%2FLzNjGon8cWQD5zuXRvDbufkHCmxDuoSGQ9gsCeoOB5ra4ElsGjRuNE6Fu93EvUgWoA%2BhTIavIoLxJNfLpn1v4SgG%2FfPDhFSszsk%2Bej9ZtaKBLWsz5IityeNLxXeNwuaL%2FEkWcwlmhr12wsc2qt75O03uUDn%2FpvxyFysms47Rb61tep21vCDZbVxmTCtypj1%2FtV2BYCln%2BxL7w41esEEfCjJv%2F01%2FrdBlSvbj6L8xExZgqWaDksUZ2nswNGCNzb6bmn9vwyohwsl51SXqhI3A6SjWy%2BtjSxs01HiWtYNfEqzne6RR7lb1rfB5lrXtiQhqMVhfQz3%2BLVCUs8Pk1f6okkn0x4OQ6TpkWrMuno5S1eh8KU%2Ba6fXxRKVNxe7%2B9x6blHeSCSDz05PSNFHg8u8X57cfYj%2BWp%2B4P4V67BEq7N3wZUVIH8%2B80lqLi%2FPXoNuTsy7nPDGJmuKcEKB73upB%2FkArTk1YUVJ7DQHLmfh007l%2BUwB8dCCwuMIYY27etV3IrAYD1nasxdzrPEIQOug3ZNMMiD2ckGOqUBfhRrpxClWfqltFkiTQkxqnoX5qWCb%2FAi8y6WvvzipKAXVqG2ZK5ZV8uum%2BMiGublkq79QNrKaDWvVbvhe5W3nDbSa%2BngnLx3qRKzBqwafijva8RqHU17BqoWDPTdfHoUVkUFP52%2BW6SoLp6DmHakNnYFWKsYt03%2Fx3vAfSyShgjgNvhCdd5SdSNpyg5AzP2sz2k9YiOJvIne8V3jmdcPwjnG3v87&X-Amz-Signature=daa69421b4d8e7f94323a04f88f9d12b3ddb330faeb99c3eef3a07b8621a8ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBLC3NX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuoG7m5iSdcaRexExVk92tJ8tQRozo0JvUYbuSyXc20wIgGBocSVxURGA7aezPj2HmpdP1x7IN%2FTc5RyodMIxSdJEqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyACcPs6bv3QFu3ySrcA1Ev8ZufYIUQ8X96PbViBk7Z9J2E0U1Aeb1uRkcOFm3z8CUcORxxVNOMFXwFW647xZY%2B60%2BGS541RB5DdHNB3d7zyaZVLzXnfliAxB%2FLzNjGon8cWQD5zuXRvDbufkHCmxDuoSGQ9gsCeoOB5ra4ElsGjRuNE6Fu93EvUgWoA%2BhTIavIoLxJNfLpn1v4SgG%2FfPDhFSszsk%2Bej9ZtaKBLWsz5IityeNLxXeNwuaL%2FEkWcwlmhr12wsc2qt75O03uUDn%2FpvxyFysms47Rb61tep21vCDZbVxmTCtypj1%2FtV2BYCln%2BxL7w41esEEfCjJv%2F01%2FrdBlSvbj6L8xExZgqWaDksUZ2nswNGCNzb6bmn9vwyohwsl51SXqhI3A6SjWy%2BtjSxs01HiWtYNfEqzne6RR7lb1rfB5lrXtiQhqMVhfQz3%2BLVCUs8Pk1f6okkn0x4OQ6TpkWrMuno5S1eh8KU%2Ba6fXxRKVNxe7%2B9x6blHeSCSDz05PSNFHg8u8X57cfYj%2BWp%2B4P4V67BEq7N3wZUVIH8%2B80lqLi%2FPXoNuTsy7nPDGJmuKcEKB73upB%2FkArTk1YUVJ7DQHLmfh007l%2BUwB8dCCwuMIYY27etV3IrAYD1nasxdzrPEIQOug3ZNMMiD2ckGOqUBfhRrpxClWfqltFkiTQkxqnoX5qWCb%2FAi8y6WvvzipKAXVqG2ZK5ZV8uum%2BMiGublkq79QNrKaDWvVbvhe5W3nDbSa%2BngnLx3qRKzBqwafijva8RqHU17BqoWDPTdfHoUVkUFP52%2BW6SoLp6DmHakNnYFWKsYt03%2Fx3vAfSyShgjgNvhCdd5SdSNpyg5AzP2sz2k9YiOJvIne8V3jmdcPwjnG3v87&X-Amz-Signature=dd2a492b639d84e38cbf7b26f18e28a78e2233e76543a2bdc6bade6a93da2846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBLC3NX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuoG7m5iSdcaRexExVk92tJ8tQRozo0JvUYbuSyXc20wIgGBocSVxURGA7aezPj2HmpdP1x7IN%2FTc5RyodMIxSdJEqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyACcPs6bv3QFu3ySrcA1Ev8ZufYIUQ8X96PbViBk7Z9J2E0U1Aeb1uRkcOFm3z8CUcORxxVNOMFXwFW647xZY%2B60%2BGS541RB5DdHNB3d7zyaZVLzXnfliAxB%2FLzNjGon8cWQD5zuXRvDbufkHCmxDuoSGQ9gsCeoOB5ra4ElsGjRuNE6Fu93EvUgWoA%2BhTIavIoLxJNfLpn1v4SgG%2FfPDhFSszsk%2Bej9ZtaKBLWsz5IityeNLxXeNwuaL%2FEkWcwlmhr12wsc2qt75O03uUDn%2FpvxyFysms47Rb61tep21vCDZbVxmTCtypj1%2FtV2BYCln%2BxL7w41esEEfCjJv%2F01%2FrdBlSvbj6L8xExZgqWaDksUZ2nswNGCNzb6bmn9vwyohwsl51SXqhI3A6SjWy%2BtjSxs01HiWtYNfEqzne6RR7lb1rfB5lrXtiQhqMVhfQz3%2BLVCUs8Pk1f6okkn0x4OQ6TpkWrMuno5S1eh8KU%2Ba6fXxRKVNxe7%2B9x6blHeSCSDz05PSNFHg8u8X57cfYj%2BWp%2B4P4V67BEq7N3wZUVIH8%2B80lqLi%2FPXoNuTsy7nPDGJmuKcEKB73upB%2FkArTk1YUVJ7DQHLmfh007l%2BUwB8dCCwuMIYY27etV3IrAYD1nasxdzrPEIQOug3ZNMMiD2ckGOqUBfhRrpxClWfqltFkiTQkxqnoX5qWCb%2FAi8y6WvvzipKAXVqG2ZK5ZV8uum%2BMiGublkq79QNrKaDWvVbvhe5W3nDbSa%2BngnLx3qRKzBqwafijva8RqHU17BqoWDPTdfHoUVkUFP52%2BW6SoLp6DmHakNnYFWKsYt03%2Fx3vAfSyShgjgNvhCdd5SdSNpyg5AzP2sz2k9YiOJvIne8V3jmdcPwjnG3v87&X-Amz-Signature=ab555cbad1e7de92467c6478e022340a7c164c7f3d7fd2c023e47ca35a166742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBLC3NX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuoG7m5iSdcaRexExVk92tJ8tQRozo0JvUYbuSyXc20wIgGBocSVxURGA7aezPj2HmpdP1x7IN%2FTc5RyodMIxSdJEqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyACcPs6bv3QFu3ySrcA1Ev8ZufYIUQ8X96PbViBk7Z9J2E0U1Aeb1uRkcOFm3z8CUcORxxVNOMFXwFW647xZY%2B60%2BGS541RB5DdHNB3d7zyaZVLzXnfliAxB%2FLzNjGon8cWQD5zuXRvDbufkHCmxDuoSGQ9gsCeoOB5ra4ElsGjRuNE6Fu93EvUgWoA%2BhTIavIoLxJNfLpn1v4SgG%2FfPDhFSszsk%2Bej9ZtaKBLWsz5IityeNLxXeNwuaL%2FEkWcwlmhr12wsc2qt75O03uUDn%2FpvxyFysms47Rb61tep21vCDZbVxmTCtypj1%2FtV2BYCln%2BxL7w41esEEfCjJv%2F01%2FrdBlSvbj6L8xExZgqWaDksUZ2nswNGCNzb6bmn9vwyohwsl51SXqhI3A6SjWy%2BtjSxs01HiWtYNfEqzne6RR7lb1rfB5lrXtiQhqMVhfQz3%2BLVCUs8Pk1f6okkn0x4OQ6TpkWrMuno5S1eh8KU%2Ba6fXxRKVNxe7%2B9x6blHeSCSDz05PSNFHg8u8X57cfYj%2BWp%2B4P4V67BEq7N3wZUVIH8%2B80lqLi%2FPXoNuTsy7nPDGJmuKcEKB73upB%2FkArTk1YUVJ7DQHLmfh007l%2BUwB8dCCwuMIYY27etV3IrAYD1nasxdzrPEIQOug3ZNMMiD2ckGOqUBfhRrpxClWfqltFkiTQkxqnoX5qWCb%2FAi8y6WvvzipKAXVqG2ZK5ZV8uum%2BMiGublkq79QNrKaDWvVbvhe5W3nDbSa%2BngnLx3qRKzBqwafijva8RqHU17BqoWDPTdfHoUVkUFP52%2BW6SoLp6DmHakNnYFWKsYt03%2Fx3vAfSyShgjgNvhCdd5SdSNpyg5AzP2sz2k9YiOJvIne8V3jmdcPwjnG3v87&X-Amz-Signature=3f5aa442d92f3b8bc40805a0dd7ff4863d2a719c355b259926a6440ac07272cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBLC3NX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuoG7m5iSdcaRexExVk92tJ8tQRozo0JvUYbuSyXc20wIgGBocSVxURGA7aezPj2HmpdP1x7IN%2FTc5RyodMIxSdJEqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyACcPs6bv3QFu3ySrcA1Ev8ZufYIUQ8X96PbViBk7Z9J2E0U1Aeb1uRkcOFm3z8CUcORxxVNOMFXwFW647xZY%2B60%2BGS541RB5DdHNB3d7zyaZVLzXnfliAxB%2FLzNjGon8cWQD5zuXRvDbufkHCmxDuoSGQ9gsCeoOB5ra4ElsGjRuNE6Fu93EvUgWoA%2BhTIavIoLxJNfLpn1v4SgG%2FfPDhFSszsk%2Bej9ZtaKBLWsz5IityeNLxXeNwuaL%2FEkWcwlmhr12wsc2qt75O03uUDn%2FpvxyFysms47Rb61tep21vCDZbVxmTCtypj1%2FtV2BYCln%2BxL7w41esEEfCjJv%2F01%2FrdBlSvbj6L8xExZgqWaDksUZ2nswNGCNzb6bmn9vwyohwsl51SXqhI3A6SjWy%2BtjSxs01HiWtYNfEqzne6RR7lb1rfB5lrXtiQhqMVhfQz3%2BLVCUs8Pk1f6okkn0x4OQ6TpkWrMuno5S1eh8KU%2Ba6fXxRKVNxe7%2B9x6blHeSCSDz05PSNFHg8u8X57cfYj%2BWp%2B4P4V67BEq7N3wZUVIH8%2B80lqLi%2FPXoNuTsy7nPDGJmuKcEKB73upB%2FkArTk1YUVJ7DQHLmfh007l%2BUwB8dCCwuMIYY27etV3IrAYD1nasxdzrPEIQOug3ZNMMiD2ckGOqUBfhRrpxClWfqltFkiTQkxqnoX5qWCb%2FAi8y6WvvzipKAXVqG2ZK5ZV8uum%2BMiGublkq79QNrKaDWvVbvhe5W3nDbSa%2BngnLx3qRKzBqwafijva8RqHU17BqoWDPTdfHoUVkUFP52%2BW6SoLp6DmHakNnYFWKsYt03%2Fx3vAfSyShgjgNvhCdd5SdSNpyg5AzP2sz2k9YiOJvIne8V3jmdcPwjnG3v87&X-Amz-Signature=d1768dd514d817ef15c621b90f35ac871a40875de9555a5fb8002a6fdb125d29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O7TUJ2Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGg4cGVGLV0pxF555M0%2B3YJiyquEh5RWmmqZaD6cP3QAiAS98%2FpcpRPNYaIdR%2BCUksQmYMWPFiFekEogQpknDNMdSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa%2BYfm%2F%2FlKj8tFfV2KtwDWGUDzg%2BmwtVzPL5AcOgiEgfmc0ouME3zqD45RwRtu3kqOYUV876DcpaC%2FHt%2FeyB6Jef7IjePVVmmD2%2F3ra8q3u%2B7hwMCrpYDo0e4kUhMw0gioRY1CvIZlty%2Fie2CFA0ftNCrZr00Ykq%2FQgehan8blAqtwZwLB536dxb5BrYIDSFCyRVoXeY%2FfIg%2FTJAMvuHnQrDkVsZytBKVL2cf62V5AL1qAm9U1cbM87Ct7b%2FZewj%2FP24zKGrDDk%2Fj%2FuehjuX0kkChcDFCQ7F%2FYDNUZh4joe4I8Qb0Fi5J1D%2BMFJkYJ35WjaQ1U6UZsxB4I83sjtiij99Y8spzah2bJB9wwlXqZhGlSKA4Ys12G6U8KPlIIMLeR6mSeodIPGHok9yZ02xw8zjX1Y%2FLPQQLdiDJjracZ7ekzEZDI0O4h6Jf%2Bxi49S%2FH8Cy3lzyHgYLiHpnP0Df7EsH%2BodPt5YSUDuLG8MC%2FfpQFS84VVQuiOHaw7H0rrQEjeyuTZwIJX8pjgcBG2RmprVwmCt%2FHukQpxaOgdKGjh7Bk6jQABekyJH2lmvHjCTb5Gqb1JaAODSrVYy5pDaWSgIKNoZVYVW%2BskYhzDFAB7vDH5YqyMeOzREWLyd9iW6D%2FWz2nyh4fvQQ7F6Uwu4PZyQY6pgHtvIl66EwT3alN1mIeOgMNLMSBh8r1eHYlrI99si9%2FceWO3tMWWUJU2NCIKwiwxeWHRYE2q7BTBUMA%2B4aVM6BXSvRTYVKu5gKb10E%2FTQCno4ytreRWsW3HaQQgqsmOFTFl2Ft1ZOqbMXPuJudxW2s6BWwuL47PNX9sQdmrif1fJYFr4nt3aa39dSLETwVqiBY%2F1B5qLkSx%2BvhJzgP%2FwXW3rCmVmqVK&X-Amz-Signature=3eaddab7a1173c57adce05c67d068d731da1c1c9fa80859cb58c05feb4a4c61e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O7TUJ2Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGg4cGVGLV0pxF555M0%2B3YJiyquEh5RWmmqZaD6cP3QAiAS98%2FpcpRPNYaIdR%2BCUksQmYMWPFiFekEogQpknDNMdSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa%2BYfm%2F%2FlKj8tFfV2KtwDWGUDzg%2BmwtVzPL5AcOgiEgfmc0ouME3zqD45RwRtu3kqOYUV876DcpaC%2FHt%2FeyB6Jef7IjePVVmmD2%2F3ra8q3u%2B7hwMCrpYDo0e4kUhMw0gioRY1CvIZlty%2Fie2CFA0ftNCrZr00Ykq%2FQgehan8blAqtwZwLB536dxb5BrYIDSFCyRVoXeY%2FfIg%2FTJAMvuHnQrDkVsZytBKVL2cf62V5AL1qAm9U1cbM87Ct7b%2FZewj%2FP24zKGrDDk%2Fj%2FuehjuX0kkChcDFCQ7F%2FYDNUZh4joe4I8Qb0Fi5J1D%2BMFJkYJ35WjaQ1U6UZsxB4I83sjtiij99Y8spzah2bJB9wwlXqZhGlSKA4Ys12G6U8KPlIIMLeR6mSeodIPGHok9yZ02xw8zjX1Y%2FLPQQLdiDJjracZ7ekzEZDI0O4h6Jf%2Bxi49S%2FH8Cy3lzyHgYLiHpnP0Df7EsH%2BodPt5YSUDuLG8MC%2FfpQFS84VVQuiOHaw7H0rrQEjeyuTZwIJX8pjgcBG2RmprVwmCt%2FHukQpxaOgdKGjh7Bk6jQABekyJH2lmvHjCTb5Gqb1JaAODSrVYy5pDaWSgIKNoZVYVW%2BskYhzDFAB7vDH5YqyMeOzREWLyd9iW6D%2FWz2nyh4fvQQ7F6Uwu4PZyQY6pgHtvIl66EwT3alN1mIeOgMNLMSBh8r1eHYlrI99si9%2FceWO3tMWWUJU2NCIKwiwxeWHRYE2q7BTBUMA%2B4aVM6BXSvRTYVKu5gKb10E%2FTQCno4ytreRWsW3HaQQgqsmOFTFl2Ft1ZOqbMXPuJudxW2s6BWwuL47PNX9sQdmrif1fJYFr4nt3aa39dSLETwVqiBY%2F1B5qLkSx%2BvhJzgP%2FwXW3rCmVmqVK&X-Amz-Signature=47a69083fee8d314a9cdc213bfaf4e4cab24df012c6c56d811e586b7bb89d5fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O7TUJ2Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGg4cGVGLV0pxF555M0%2B3YJiyquEh5RWmmqZaD6cP3QAiAS98%2FpcpRPNYaIdR%2BCUksQmYMWPFiFekEogQpknDNMdSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa%2BYfm%2F%2FlKj8tFfV2KtwDWGUDzg%2BmwtVzPL5AcOgiEgfmc0ouME3zqD45RwRtu3kqOYUV876DcpaC%2FHt%2FeyB6Jef7IjePVVmmD2%2F3ra8q3u%2B7hwMCrpYDo0e4kUhMw0gioRY1CvIZlty%2Fie2CFA0ftNCrZr00Ykq%2FQgehan8blAqtwZwLB536dxb5BrYIDSFCyRVoXeY%2FfIg%2FTJAMvuHnQrDkVsZytBKVL2cf62V5AL1qAm9U1cbM87Ct7b%2FZewj%2FP24zKGrDDk%2Fj%2FuehjuX0kkChcDFCQ7F%2FYDNUZh4joe4I8Qb0Fi5J1D%2BMFJkYJ35WjaQ1U6UZsxB4I83sjtiij99Y8spzah2bJB9wwlXqZhGlSKA4Ys12G6U8KPlIIMLeR6mSeodIPGHok9yZ02xw8zjX1Y%2FLPQQLdiDJjracZ7ekzEZDI0O4h6Jf%2Bxi49S%2FH8Cy3lzyHgYLiHpnP0Df7EsH%2BodPt5YSUDuLG8MC%2FfpQFS84VVQuiOHaw7H0rrQEjeyuTZwIJX8pjgcBG2RmprVwmCt%2FHukQpxaOgdKGjh7Bk6jQABekyJH2lmvHjCTb5Gqb1JaAODSrVYy5pDaWSgIKNoZVYVW%2BskYhzDFAB7vDH5YqyMeOzREWLyd9iW6D%2FWz2nyh4fvQQ7F6Uwu4PZyQY6pgHtvIl66EwT3alN1mIeOgMNLMSBh8r1eHYlrI99si9%2FceWO3tMWWUJU2NCIKwiwxeWHRYE2q7BTBUMA%2B4aVM6BXSvRTYVKu5gKb10E%2FTQCno4ytreRWsW3HaQQgqsmOFTFl2Ft1ZOqbMXPuJudxW2s6BWwuL47PNX9sQdmrif1fJYFr4nt3aa39dSLETwVqiBY%2F1B5qLkSx%2BvhJzgP%2FwXW3rCmVmqVK&X-Amz-Signature=a0c33008e13fa1cd304ab1bf8777f22b72d912640d007a637cd7f3bd5360217e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSISBSB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID47TMOWPX1qmAfTHYdqoVJjek7WbqsQ90fFPlUyBPKxAiAglrIoAburMloJIOshghti9rLLUSasH149UIFazgsq7iqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM25pnYqBe%2BknN0nWzKtwDzZnwKOBCeBn9eKe68%2BHOgwn3RCPG1abOiuWX6mPyHUo9S8Dq7slt6XVpRnZqWiBS4eTK4k%2F0UHYzc2tE8e%2BdJ8%2BcjiUdG%2B6xaKXbBmvjGQNepeg8%2BGCF4M634gFv2aUVl9Ni1sE0EFrUTmHWdawJZjCWk9ybVX%2BZYrIsfoOUm2E2Wqxb%2BYFtGkN6otuVBDkJJ6c%2FRngvzJAhGDIqZ2aAGf6nFt5r0BejQD9fsZmLCMQtYudu9dbzDxALWjeqlOsRd0HZ2rHw6mqXvpEdbb9gSFYDJy7iOJ6%2B4R2dxF6OnvHnS28BAMe%2FeTonZHQvVwhN%2F%2FRM%2FJEkErrYx%2BHYJPh1G5nZNXLwWEXO8xFeL6pw7m2VAockP4McdzxePr%2FeXLpLiSMy59a3xbbt805RxBuW9DO%2BiqaZvqU%2BFVBFIdGzPn57q2Z6Yqap0qzZSXMvQIzke%2FmwUxi%2BT5xEEPOaDj12D5npguhJcFbH6lRtaNgxx2%2Fbiu6VmSbHZ8UbInLvVb5e%2BY9ofK3Dl%2BlsMAw3xUEmr5VpaRp2kvLxU176jemvtmtUFQ5EwV04%2FJcsTj7RCX%2FcI1aPcnnR4UmsOPwJIbjk6ySYLNSPmtjf7Dw7MZBaSjH4o2xZFs0brnC%2BIdQwwIPZyQY6pgHA57nAQHSbe5NA%2FzLBIp1W2D4z%2BJDjTCNl7QWWRPNebymUNpR5KACIYch%2FcQtgPQl7IuYRAVPr4jk8oOUC0OgyxKeQ6fVz4nkRbd7d0Sya2eoTP4Y%2FsqJeCASImoNK8Eq4xPkFsSzbotNHLOBlfW94%2FzvoynEWihWwgfqVesC8uIICoKvqMsY2MeX1gRTNIoLWa6qFA8t0JPR4l4J24ncfqM8ORWio&X-Amz-Signature=bf186d65a287e58a51f1a6ce73eff46237a80e1817829178835c6581cefb7fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSISBSB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID47TMOWPX1qmAfTHYdqoVJjek7WbqsQ90fFPlUyBPKxAiAglrIoAburMloJIOshghti9rLLUSasH149UIFazgsq7iqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM25pnYqBe%2BknN0nWzKtwDzZnwKOBCeBn9eKe68%2BHOgwn3RCPG1abOiuWX6mPyHUo9S8Dq7slt6XVpRnZqWiBS4eTK4k%2F0UHYzc2tE8e%2BdJ8%2BcjiUdG%2B6xaKXbBmvjGQNepeg8%2BGCF4M634gFv2aUVl9Ni1sE0EFrUTmHWdawJZjCWk9ybVX%2BZYrIsfoOUm2E2Wqxb%2BYFtGkN6otuVBDkJJ6c%2FRngvzJAhGDIqZ2aAGf6nFt5r0BejQD9fsZmLCMQtYudu9dbzDxALWjeqlOsRd0HZ2rHw6mqXvpEdbb9gSFYDJy7iOJ6%2B4R2dxF6OnvHnS28BAMe%2FeTonZHQvVwhN%2F%2FRM%2FJEkErrYx%2BHYJPh1G5nZNXLwWEXO8xFeL6pw7m2VAockP4McdzxePr%2FeXLpLiSMy59a3xbbt805RxBuW9DO%2BiqaZvqU%2BFVBFIdGzPn57q2Z6Yqap0qzZSXMvQIzke%2FmwUxi%2BT5xEEPOaDj12D5npguhJcFbH6lRtaNgxx2%2Fbiu6VmSbHZ8UbInLvVb5e%2BY9ofK3Dl%2BlsMAw3xUEmr5VpaRp2kvLxU176jemvtmtUFQ5EwV04%2FJcsTj7RCX%2FcI1aPcnnR4UmsOPwJIbjk6ySYLNSPmtjf7Dw7MZBaSjH4o2xZFs0brnC%2BIdQwwIPZyQY6pgHA57nAQHSbe5NA%2FzLBIp1W2D4z%2BJDjTCNl7QWWRPNebymUNpR5KACIYch%2FcQtgPQl7IuYRAVPr4jk8oOUC0OgyxKeQ6fVz4nkRbd7d0Sya2eoTP4Y%2FsqJeCASImoNK8Eq4xPkFsSzbotNHLOBlfW94%2FzvoynEWihWwgfqVesC8uIICoKvqMsY2MeX1gRTNIoLWa6qFA8t0JPR4l4J24ncfqM8ORWio&X-Amz-Signature=b0a2f5d1b294f4e47d42314bbe7f46fe0c064a79fb0edd89f2a4c376c3de5de2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TATIDR7F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXWMofgnWfRXoH7dNbls0I3ocyjEtzwCOnaUrlhC5clAIhANU2Jj7n93ZPuq0Hbo5QZPYwMMct1SXDwGIiSef2DOiWKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGn%2F8Z6OHDgoCi7Qoq3AMULQCy5RBSlqvQZ1a58b1D6nIZSGcQT%2BSj7%2F02CBHKgggo%2FRgWyuQMPC39hYGgWmayZW%2ByRm2Yowe1DEreIyYWcK7ybTkGIeonDeg1Lj3WRDaXC21iL1V2gY7pTCF59LSHK%2BRNpc4k%2FCOru70XLbhn9Xz%2BiKPvLcz%2Bw%2B67ZXSquPZ45lscM4oXS64om%2BOW719JswQmYCAXWbMwIHMtD3IDqvn58vsX7jHPBc8jkisASqLM1GMkB1%2BEPF0T1hcSim2oKM1gAsh0NJo%2BWVMrAuSBVjgLkc4UVgJjIGB97NXgv1VOxFt7RV%2FbdipBOZWo0xBcd87I3IbSyt8fh6ipeoXwZGZ%2BKlk0CCxY%2FEg8JGmwomhJ0NCO4zOQGSfM9PCV%2BSiDOGJ4zoenivW2LW3AWKWioscVE34we8VeJlvc5jp9qXBNa6S0IoRE6bu2zSI6INJgewMVdvo%2B%2Be5AiZ%2Bx60rcRRVCimFE%2Bf868CchU9zFxkUsgDGn1C%2FV3gVnHei5qQ011480M3a%2Btqtw1HzgFe48HJmaj1HHIjgPyMvmpKNpsp%2BL1Enixx07eE%2FFheZt54%2FcZmbT0T3QwbB%2FZSuRpChw6Y6gOFG7X4XUaZZl5HcKDxPGHO%2BWBK46ryV8RDCNhNnJBjqkAf4wxpahhIypxsEsiXZwHb6vsDWnYbdw63MxLoiBL3nRhxWBA1c3LMq85AkKmY6IuO6iqsmDSiDI8C8l4leMZIr0TAd%2FAOdvPm0%2F6a0nfrSoECv6uLs0HWVxTBkSgAlquso59h%2B%2F2tiRGoqeTSpO5MPMMcegQARaasZpOON2XuhjOIQjJdrtKOZ2uV%2BaVEOKBAHItrbHkWF9FJg4qk93REcne3Y9&X-Amz-Signature=1e17e398862b46d3ed67d411f768e135100406ce0f2a6319eec577aba3e813d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TATIDR7F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXWMofgnWfRXoH7dNbls0I3ocyjEtzwCOnaUrlhC5clAIhANU2Jj7n93ZPuq0Hbo5QZPYwMMct1SXDwGIiSef2DOiWKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGn%2F8Z6OHDgoCi7Qoq3AMULQCy5RBSlqvQZ1a58b1D6nIZSGcQT%2BSj7%2F02CBHKgggo%2FRgWyuQMPC39hYGgWmayZW%2ByRm2Yowe1DEreIyYWcK7ybTkGIeonDeg1Lj3WRDaXC21iL1V2gY7pTCF59LSHK%2BRNpc4k%2FCOru70XLbhn9Xz%2BiKPvLcz%2Bw%2B67ZXSquPZ45lscM4oXS64om%2BOW719JswQmYCAXWbMwIHMtD3IDqvn58vsX7jHPBc8jkisASqLM1GMkB1%2BEPF0T1hcSim2oKM1gAsh0NJo%2BWVMrAuSBVjgLkc4UVgJjIGB97NXgv1VOxFt7RV%2FbdipBOZWo0xBcd87I3IbSyt8fh6ipeoXwZGZ%2BKlk0CCxY%2FEg8JGmwomhJ0NCO4zOQGSfM9PCV%2BSiDOGJ4zoenivW2LW3AWKWioscVE34we8VeJlvc5jp9qXBNa6S0IoRE6bu2zSI6INJgewMVdvo%2B%2Be5AiZ%2Bx60rcRRVCimFE%2Bf868CchU9zFxkUsgDGn1C%2FV3gVnHei5qQ011480M3a%2Btqtw1HzgFe48HJmaj1HHIjgPyMvmpKNpsp%2BL1Enixx07eE%2FFheZt54%2FcZmbT0T3QwbB%2FZSuRpChw6Y6gOFG7X4XUaZZl5HcKDxPGHO%2BWBK46ryV8RDCNhNnJBjqkAf4wxpahhIypxsEsiXZwHb6vsDWnYbdw63MxLoiBL3nRhxWBA1c3LMq85AkKmY6IuO6iqsmDSiDI8C8l4leMZIr0TAd%2FAOdvPm0%2F6a0nfrSoECv6uLs0HWVxTBkSgAlquso59h%2B%2F2tiRGoqeTSpO5MPMMcegQARaasZpOON2XuhjOIQjJdrtKOZ2uV%2BaVEOKBAHItrbHkWF9FJg4qk93REcne3Y9&X-Amz-Signature=e93107f76f848e9fb071f15470d04ee522628d83f59918989b6a33693b424ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TATIDR7F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXWMofgnWfRXoH7dNbls0I3ocyjEtzwCOnaUrlhC5clAIhANU2Jj7n93ZPuq0Hbo5QZPYwMMct1SXDwGIiSef2DOiWKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGn%2F8Z6OHDgoCi7Qoq3AMULQCy5RBSlqvQZ1a58b1D6nIZSGcQT%2BSj7%2F02CBHKgggo%2FRgWyuQMPC39hYGgWmayZW%2ByRm2Yowe1DEreIyYWcK7ybTkGIeonDeg1Lj3WRDaXC21iL1V2gY7pTCF59LSHK%2BRNpc4k%2FCOru70XLbhn9Xz%2BiKPvLcz%2Bw%2B67ZXSquPZ45lscM4oXS64om%2BOW719JswQmYCAXWbMwIHMtD3IDqvn58vsX7jHPBc8jkisASqLM1GMkB1%2BEPF0T1hcSim2oKM1gAsh0NJo%2BWVMrAuSBVjgLkc4UVgJjIGB97NXgv1VOxFt7RV%2FbdipBOZWo0xBcd87I3IbSyt8fh6ipeoXwZGZ%2BKlk0CCxY%2FEg8JGmwomhJ0NCO4zOQGSfM9PCV%2BSiDOGJ4zoenivW2LW3AWKWioscVE34we8VeJlvc5jp9qXBNa6S0IoRE6bu2zSI6INJgewMVdvo%2B%2Be5AiZ%2Bx60rcRRVCimFE%2Bf868CchU9zFxkUsgDGn1C%2FV3gVnHei5qQ011480M3a%2Btqtw1HzgFe48HJmaj1HHIjgPyMvmpKNpsp%2BL1Enixx07eE%2FFheZt54%2FcZmbT0T3QwbB%2FZSuRpChw6Y6gOFG7X4XUaZZl5HcKDxPGHO%2BWBK46ryV8RDCNhNnJBjqkAf4wxpahhIypxsEsiXZwHb6vsDWnYbdw63MxLoiBL3nRhxWBA1c3LMq85AkKmY6IuO6iqsmDSiDI8C8l4leMZIr0TAd%2FAOdvPm0%2F6a0nfrSoECv6uLs0HWVxTBkSgAlquso59h%2B%2F2tiRGoqeTSpO5MPMMcegQARaasZpOON2XuhjOIQjJdrtKOZ2uV%2BaVEOKBAHItrbHkWF9FJg4qk93REcne3Y9&X-Amz-Signature=21c28e0e7c9c0665461ebb2120da0c6cc84052182c832a8e9a17afc1fa041e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TATIDR7F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXWMofgnWfRXoH7dNbls0I3ocyjEtzwCOnaUrlhC5clAIhANU2Jj7n93ZPuq0Hbo5QZPYwMMct1SXDwGIiSef2DOiWKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGn%2F8Z6OHDgoCi7Qoq3AMULQCy5RBSlqvQZ1a58b1D6nIZSGcQT%2BSj7%2F02CBHKgggo%2FRgWyuQMPC39hYGgWmayZW%2ByRm2Yowe1DEreIyYWcK7ybTkGIeonDeg1Lj3WRDaXC21iL1V2gY7pTCF59LSHK%2BRNpc4k%2FCOru70XLbhn9Xz%2BiKPvLcz%2Bw%2B67ZXSquPZ45lscM4oXS64om%2BOW719JswQmYCAXWbMwIHMtD3IDqvn58vsX7jHPBc8jkisASqLM1GMkB1%2BEPF0T1hcSim2oKM1gAsh0NJo%2BWVMrAuSBVjgLkc4UVgJjIGB97NXgv1VOxFt7RV%2FbdipBOZWo0xBcd87I3IbSyt8fh6ipeoXwZGZ%2BKlk0CCxY%2FEg8JGmwomhJ0NCO4zOQGSfM9PCV%2BSiDOGJ4zoenivW2LW3AWKWioscVE34we8VeJlvc5jp9qXBNa6S0IoRE6bu2zSI6INJgewMVdvo%2B%2Be5AiZ%2Bx60rcRRVCimFE%2Bf868CchU9zFxkUsgDGn1C%2FV3gVnHei5qQ011480M3a%2Btqtw1HzgFe48HJmaj1HHIjgPyMvmpKNpsp%2BL1Enixx07eE%2FFheZt54%2FcZmbT0T3QwbB%2FZSuRpChw6Y6gOFG7X4XUaZZl5HcKDxPGHO%2BWBK46ryV8RDCNhNnJBjqkAf4wxpahhIypxsEsiXZwHb6vsDWnYbdw63MxLoiBL3nRhxWBA1c3LMq85AkKmY6IuO6iqsmDSiDI8C8l4leMZIr0TAd%2FAOdvPm0%2F6a0nfrSoECv6uLs0HWVxTBkSgAlquso59h%2B%2F2tiRGoqeTSpO5MPMMcegQARaasZpOON2XuhjOIQjJdrtKOZ2uV%2BaVEOKBAHItrbHkWF9FJg4qk93REcne3Y9&X-Amz-Signature=dd481853f491d857da600f1f5c17204ff22f8b5bb4739679cc10289a4d5a9c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TATIDR7F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXWMofgnWfRXoH7dNbls0I3ocyjEtzwCOnaUrlhC5clAIhANU2Jj7n93ZPuq0Hbo5QZPYwMMct1SXDwGIiSef2DOiWKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGn%2F8Z6OHDgoCi7Qoq3AMULQCy5RBSlqvQZ1a58b1D6nIZSGcQT%2BSj7%2F02CBHKgggo%2FRgWyuQMPC39hYGgWmayZW%2ByRm2Yowe1DEreIyYWcK7ybTkGIeonDeg1Lj3WRDaXC21iL1V2gY7pTCF59LSHK%2BRNpc4k%2FCOru70XLbhn9Xz%2BiKPvLcz%2Bw%2B67ZXSquPZ45lscM4oXS64om%2BOW719JswQmYCAXWbMwIHMtD3IDqvn58vsX7jHPBc8jkisASqLM1GMkB1%2BEPF0T1hcSim2oKM1gAsh0NJo%2BWVMrAuSBVjgLkc4UVgJjIGB97NXgv1VOxFt7RV%2FbdipBOZWo0xBcd87I3IbSyt8fh6ipeoXwZGZ%2BKlk0CCxY%2FEg8JGmwomhJ0NCO4zOQGSfM9PCV%2BSiDOGJ4zoenivW2LW3AWKWioscVE34we8VeJlvc5jp9qXBNa6S0IoRE6bu2zSI6INJgewMVdvo%2B%2Be5AiZ%2Bx60rcRRVCimFE%2Bf868CchU9zFxkUsgDGn1C%2FV3gVnHei5qQ011480M3a%2Btqtw1HzgFe48HJmaj1HHIjgPyMvmpKNpsp%2BL1Enixx07eE%2FFheZt54%2FcZmbT0T3QwbB%2FZSuRpChw6Y6gOFG7X4XUaZZl5HcKDxPGHO%2BWBK46ryV8RDCNhNnJBjqkAf4wxpahhIypxsEsiXZwHb6vsDWnYbdw63MxLoiBL3nRhxWBA1c3LMq85AkKmY6IuO6iqsmDSiDI8C8l4leMZIr0TAd%2FAOdvPm0%2F6a0nfrSoECv6uLs0HWVxTBkSgAlquso59h%2B%2F2tiRGoqeTSpO5MPMMcegQARaasZpOON2XuhjOIQjJdrtKOZ2uV%2BaVEOKBAHItrbHkWF9FJg4qk93REcne3Y9&X-Amz-Signature=6827dbd12a1e526d9832d4db985107ff804bf25d6de60662a00c800093c71699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXR2W7FS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjisAPl63Odv5QDYYuH4j6sHMPH1zOG79y6FBVVvx2WAiEA6yMJOo7oW3jr%2FLf%2B4o745lM%2BzHx42pqstkoXL%2B%2FBHI0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJbHJNUZ8oU7%2BeQ%2FCrcA6m1grAGetQXzbCCc3KAEHniqCO6NmR68VjRL9t%2BE7wdPwAEtT2aXm4YkM%2Fu8mdHLVGXMYcHcwUyrh5%2Fg6KYbpHNwQGbT26fbFU3w8M%2BAC26lBDU1mv2%2BekLpwlEiWzpx22xNnIvtaImE%2FTax%2Bwuik8wXql4E5wlJyP1dKUc3oB54Ux1Wc1lAB%2FPs4by8BEiNqjnGhg1Ut2bhSNHKNYLLYKPt0NBcOzuGc8Lrl3ai6sl0etHu17tywExESYX95%2BUq4DYztEdp7ryQjHheXwcrN%2FfzonAlZQlTZ6Q8uNPCNvSho2JAvM1jFOF290cJL9gfxUpF4WK6z986NxPn6di9YWpdoJfRf65YptGEbiEUn9ab5HXkp1KLn6mFJ0W%2F%2FO0Q7Bj2ssiDBT7e9uQBeam5Zl67k2%2FIKRyijhuLChz6i%2FlAmWFGHyqe7i4Nfu3bFC2yb29SGvieoGJKQaQU2Eg05hBCMDgvO4yl5MYsnra2tCCdZPNBoRJzhi5C3zt26knVs0%2FBBNTZfmC8DW3pgpHXOcnpGwOU7yEv8XTGSkstZ1j4Wm22QRYu3mE8jfua6rZ5cSQ4SsIlPaP9d4mQBj1GWF6iyEJY5Xk0c7MNsDsQ3td7706aWsFOs5jeUTnMJWD2ckGOqUBorc%2BTyXL2TzD7IWBiKFbU6MmhE9QOXXY9RUx2ERLx2WVqLUMaWPHNyKnHyAP6gNRvAH75H717U5ILLm51rZfkUifv8juWhJRBqp%2FSgdkpeFa88H4KFO%2BfipPIpFn46sctxohW0awbg7JKjqJKvTdKOyJ89g1TQAwVrur2f68ny%2FxTZkl2wJwo70jyspjj0Q9b864J9YO%2BjxccEuCCLINcJofCHNV&X-Amz-Signature=5d448c9e50b84b01a2b41fba26fa708360a77ba78eb1fc32e8b2fb24ad78804a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

