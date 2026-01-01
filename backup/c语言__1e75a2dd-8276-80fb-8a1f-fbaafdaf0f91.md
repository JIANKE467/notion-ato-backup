
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXESOTKS%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCuE4gsRex5DV1y58OOrqlNhOO%2FbN9Aix7ISoD42%2B5WeAIgUEPcVBCskxfDhWqPlDqpwV%2F6GVX8WMakKPQXe3ahmvgqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGWJdkP9tmHu0gRkircA%2Bk6nxzvlbPE7Tv1DKfl9FINNarBI%2F7JbexEKk5pBQeH4w63AamLUrzZWno%2BeBdjJjb2W8OUiqbMIos8ioQTOyOzW4BwROrjmvmijnq9G9x3FlRZkrtyRXhaL79Uu7fy%2B2pcq34VHFC%2BOnV8cL8MvhCb7op6kEgRPRov%2FwTXGD8XOzAm44BlG05Y4LB3kYUk%2Ba3mljU60TwSBbDbyQM9ByRY4oSnEuKcVx4sgrpzR2YMZWWVDGI%2FybGrXbCZrnlsANae6lbhfq%2BJxX0Kj%2FiCUBa9lhx9CgNBw0IwcNTPYtx31mJLo3btjD75R0VVbNeUUr8SA42ZUQSOda5KllUIvr7M8bIXtMNZdyv9rzmffdw8r60SDIA954WPYQDN1%2FuLEaDhS%2BblsHxkI1pKIE5wILqQTTavYYKQAkog9anwKcQg5PXebl2PxZiHOXYpEiojlI8uDk7e9b2kU41FzEylGbDt8gPpSHry38H09iGk5r4y4aZl191yP0i1hi%2Fro5fkXJgPmcGkbsF7y6Z6HHEw9e%2BEmlak3bVGJLgGZsnFA6VENK4kR9D9tUBRdP1V4czO%2BGy67PiC3KRMwhxlo8iK55zt6PFMS6fHTbG4cOZ228S2F%2BAEhbQ3WB4uLsJyMOeE18oGOqUBq9GZmsxMOkBDvkjRLRrqK01eOQNJSbOGx0ituZuC8nkHHcfIwWj3%2FSSt1z73Sg0vPI41JrH9rhiPE%2BYW18TCh%2B2YXZ2dLvZpLoFyVA6qQh5GDtJPyPd9txaG2%2FQ%2B9gvx3wfgNMIyHpaMi6LhCkDa4%2B2bxq9wXzn%2FdpUyX6eaSP%2BggUljgvmt%2FEmO5lkHjSFpvqtaT6OuWy7cHfFopctxtCLm1Yqn&X-Amz-Signature=4f1731443d981319e16d331ab496256691d52262a8c339a7681a2632c06b8a7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXU4BZF%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDhsQJFH0trr1jdkzhu70ET4PVYBZloYqiTjP7zF87rzQIhAPFciCxSmAys6nnV%2BhrWxQSnge5lskzmCxY%2FIJDkBhsHKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxirPxAeBjUA7xni5oq3AN1iB8m16ZAuFzK3tcGzoM9Zh5pcc9NI1fAzUJmBAbJPtebtdTsvZn4Ve%2F7uUPQEi7MIVFmXr%2Fs8DRPa33d4wspYBaoZktKxYtoPTjHsWk%2B9aWJbtyEbmNnY%2BDFcgQSW4H6Mf%2FTFMfrRJk3DGjOI5TuAV4NA9qw1K%2Bl%2FTI2kJnE%2BM8JqHQGi3RGsLKnc9ZJQkcZzMEHaF7IoJGURze6a%2Bpk68WglXzuDJ8dLxM%2FVStCU%2FZ7XCEqoU2X1xg2bryCOyvRFx7c1pyu2KcqACC5N%2BrkR57zOQGixdNmx3XUl%2FQs72vT0rHYQVwXBuGOMX6Vz7aAz8yVvsMiMg7FIi2XlhUqQ8OGtQK3z%2FAPaeytYUuzsPD5hKwEiV7KzkZ8WZMYmcbLTZ1fEI5iTclzqCCziexyUFPsWnuqIYK9D7A%2FZMpc4pNaQIR6dXTaILGRrxlQuclb1GeyS79c1ZMRcA6zEyIaHCgJm11y5Fqf4E2dWt%2BrKPVbHEEFwdwJuLG1FyYJTkx3eMtLKyOzqirjKUl2C5fO4lF1h31ccs%2Bh71WrpYQxQN3xK%2FQdCem18zqi6SFOImZn5Biqq%2Fb86b5fnFj26VyFuNgAthijfPEuG04DHQtYKAPvYK7hJOU8nE%2BXqTDchtfKBjqkAcLnF2CV1%2FYA03jq9vx4kuhkhOylLHEMhxaC4rOzSYzqTkTZvtB27enH9mReqH7Lft3gqFqQ64FgsBX9p4B7PndbQ5HLabxALuJoIiPrwXVg3To1VFKNZEVQpzd1QuvLzGdDGd7s9DXsnQAttT3c4XMyqDnmq4d%2BVQU3%2Fiq76fO5XMxQB16IdS5kAqG4ocdSigNDB%2BHZ3FcVgrFkF056gVP12qVC&X-Amz-Signature=e113372c00dc132bf8f518a4123f90257917e34b2e5c23753ff5c39a0e890904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXU4BZF%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDhsQJFH0trr1jdkzhu70ET4PVYBZloYqiTjP7zF87rzQIhAPFciCxSmAys6nnV%2BhrWxQSnge5lskzmCxY%2FIJDkBhsHKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxirPxAeBjUA7xni5oq3AN1iB8m16ZAuFzK3tcGzoM9Zh5pcc9NI1fAzUJmBAbJPtebtdTsvZn4Ve%2F7uUPQEi7MIVFmXr%2Fs8DRPa33d4wspYBaoZktKxYtoPTjHsWk%2B9aWJbtyEbmNnY%2BDFcgQSW4H6Mf%2FTFMfrRJk3DGjOI5TuAV4NA9qw1K%2Bl%2FTI2kJnE%2BM8JqHQGi3RGsLKnc9ZJQkcZzMEHaF7IoJGURze6a%2Bpk68WglXzuDJ8dLxM%2FVStCU%2FZ7XCEqoU2X1xg2bryCOyvRFx7c1pyu2KcqACC5N%2BrkR57zOQGixdNmx3XUl%2FQs72vT0rHYQVwXBuGOMX6Vz7aAz8yVvsMiMg7FIi2XlhUqQ8OGtQK3z%2FAPaeytYUuzsPD5hKwEiV7KzkZ8WZMYmcbLTZ1fEI5iTclzqCCziexyUFPsWnuqIYK9D7A%2FZMpc4pNaQIR6dXTaILGRrxlQuclb1GeyS79c1ZMRcA6zEyIaHCgJm11y5Fqf4E2dWt%2BrKPVbHEEFwdwJuLG1FyYJTkx3eMtLKyOzqirjKUl2C5fO4lF1h31ccs%2Bh71WrpYQxQN3xK%2FQdCem18zqi6SFOImZn5Biqq%2Fb86b5fnFj26VyFuNgAthijfPEuG04DHQtYKAPvYK7hJOU8nE%2BXqTDchtfKBjqkAcLnF2CV1%2FYA03jq9vx4kuhkhOylLHEMhxaC4rOzSYzqTkTZvtB27enH9mReqH7Lft3gqFqQ64FgsBX9p4B7PndbQ5HLabxALuJoIiPrwXVg3To1VFKNZEVQpzd1QuvLzGdDGd7s9DXsnQAttT3c4XMyqDnmq4d%2BVQU3%2Fiq76fO5XMxQB16IdS5kAqG4ocdSigNDB%2BHZ3FcVgrFkF056gVP12qVC&X-Amz-Signature=048ba14483574263f45b334db3de536750fae6c02454c700ab4e738531219319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHVLFFP%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC%2FV4zcautjlhJfxWhyrIeqmq%2Bj1F2l%2FapKyQnaHQ5onAIhAMbR59NnG1XTEXIxAOT6Qi7HX8KP5UjyCX91L3SjM8KGKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7%2Fv%2BaJhk4TLfLJBAq3ANFb%2FZ8VepVHppdObQ4pUJoC1lrO2DjmbHXf6yaki6x%2BoOVzR0FnrUnUhDdhEUwnYHBT0rMhZRuDpdHGUb9WsYq1Wvi6Zze0NTWIX0LwOMr9qQGrxsx4nfoJ%2BCc038R0F59XIX7OvWYyByl8jflGrQUvwIJF9xPThnoyn%2BXVFppw16xTnQyAYugEbt4s9fJIOqTvWWBvpgLZPXJdvFb%2Fu0ZzZ3J7daMItYSsTpen8TkJ9gIqm4ZA%2BJFgtE5dDKbWvVOO%2F8oi7qsWX93U2ZRUfe5HND69DE3zcPOuYx5T4TU%2Bn92LOcaE2yDpc0HZyccyl9%2BpZJVRPGzqjjUYzEc5gCdbVSCrnszSsNfQoZpphICubudIl%2BMdSq6saFuEGwgMVeXiinZu7HZqx3%2FUh0HJf%2F3zJX3UHpzCqWGUTQLl0%2FC%2FUNESOtKLjsd%2FjHnrLto8KU4MJvyJww9dWjT4hv2FcrwTonQqTUp8uWmDndA9jIjga%2BX3P9StHFpFA8xWb%2FAjk01T779YwFRSostvL%2FnrBLlgon%2FUAK696u8pD9zpWmYLb21e1j4u%2FIwCI3PfVHf8J9L9wPSqqZSeAqjrmPKbUxTrEDNB0%2BqKb%2B8OG1wIU6F2aas%2BvcIokbiCFl6EjC6idfKBjqkASvONyd%2BwTsiNRoDLzWZFs4IaHNvi6KZRtrUdkuAMy16M26syI%2FRP%2BhkHdYanNhRCv49sKkAPoOztDd93woFV5POlil3Ga2qGB6L0kN9PfwdW%2BXaehs4MlcKwXlMyc2DlYTiZwAN1isI4yhbT6omw8VNf21P9e1mrCmc6tQZJG6rfhyx%2FD%2Bzm470CsynoOgKjythEDeRKlPcX%2B0onFUtHhuRqVRy&X-Amz-Signature=6f25239919150c25fce51d474bd58b546b63dd26895a69b2ae21488e50bdd10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHVLFFP%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC%2FV4zcautjlhJfxWhyrIeqmq%2Bj1F2l%2FapKyQnaHQ5onAIhAMbR59NnG1XTEXIxAOT6Qi7HX8KP5UjyCX91L3SjM8KGKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7%2Fv%2BaJhk4TLfLJBAq3ANFb%2FZ8VepVHppdObQ4pUJoC1lrO2DjmbHXf6yaki6x%2BoOVzR0FnrUnUhDdhEUwnYHBT0rMhZRuDpdHGUb9WsYq1Wvi6Zze0NTWIX0LwOMr9qQGrxsx4nfoJ%2BCc038R0F59XIX7OvWYyByl8jflGrQUvwIJF9xPThnoyn%2BXVFppw16xTnQyAYugEbt4s9fJIOqTvWWBvpgLZPXJdvFb%2Fu0ZzZ3J7daMItYSsTpen8TkJ9gIqm4ZA%2BJFgtE5dDKbWvVOO%2F8oi7qsWX93U2ZRUfe5HND69DE3zcPOuYx5T4TU%2Bn92LOcaE2yDpc0HZyccyl9%2BpZJVRPGzqjjUYzEc5gCdbVSCrnszSsNfQoZpphICubudIl%2BMdSq6saFuEGwgMVeXiinZu7HZqx3%2FUh0HJf%2F3zJX3UHpzCqWGUTQLl0%2FC%2FUNESOtKLjsd%2FjHnrLto8KU4MJvyJww9dWjT4hv2FcrwTonQqTUp8uWmDndA9jIjga%2BX3P9StHFpFA8xWb%2FAjk01T779YwFRSostvL%2FnrBLlgon%2FUAK696u8pD9zpWmYLb21e1j4u%2FIwCI3PfVHf8J9L9wPSqqZSeAqjrmPKbUxTrEDNB0%2BqKb%2B8OG1wIU6F2aas%2BvcIokbiCFl6EjC6idfKBjqkASvONyd%2BwTsiNRoDLzWZFs4IaHNvi6KZRtrUdkuAMy16M26syI%2FRP%2BhkHdYanNhRCv49sKkAPoOztDd93woFV5POlil3Ga2qGB6L0kN9PfwdW%2BXaehs4MlcKwXlMyc2DlYTiZwAN1isI4yhbT6omw8VNf21P9e1mrCmc6tQZJG6rfhyx%2FD%2Bzm470CsynoOgKjythEDeRKlPcX%2B0onFUtHhuRqVRy&X-Amz-Signature=ccbc8951db2730e0108cf9839b966e250d23fe299939f3a2c8875dc28cc8a0dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHVLFFP%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC%2FV4zcautjlhJfxWhyrIeqmq%2Bj1F2l%2FapKyQnaHQ5onAIhAMbR59NnG1XTEXIxAOT6Qi7HX8KP5UjyCX91L3SjM8KGKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7%2Fv%2BaJhk4TLfLJBAq3ANFb%2FZ8VepVHppdObQ4pUJoC1lrO2DjmbHXf6yaki6x%2BoOVzR0FnrUnUhDdhEUwnYHBT0rMhZRuDpdHGUb9WsYq1Wvi6Zze0NTWIX0LwOMr9qQGrxsx4nfoJ%2BCc038R0F59XIX7OvWYyByl8jflGrQUvwIJF9xPThnoyn%2BXVFppw16xTnQyAYugEbt4s9fJIOqTvWWBvpgLZPXJdvFb%2Fu0ZzZ3J7daMItYSsTpen8TkJ9gIqm4ZA%2BJFgtE5dDKbWvVOO%2F8oi7qsWX93U2ZRUfe5HND69DE3zcPOuYx5T4TU%2Bn92LOcaE2yDpc0HZyccyl9%2BpZJVRPGzqjjUYzEc5gCdbVSCrnszSsNfQoZpphICubudIl%2BMdSq6saFuEGwgMVeXiinZu7HZqx3%2FUh0HJf%2F3zJX3UHpzCqWGUTQLl0%2FC%2FUNESOtKLjsd%2FjHnrLto8KU4MJvyJww9dWjT4hv2FcrwTonQqTUp8uWmDndA9jIjga%2BX3P9StHFpFA8xWb%2FAjk01T779YwFRSostvL%2FnrBLlgon%2FUAK696u8pD9zpWmYLb21e1j4u%2FIwCI3PfVHf8J9L9wPSqqZSeAqjrmPKbUxTrEDNB0%2BqKb%2B8OG1wIU6F2aas%2BvcIokbiCFl6EjC6idfKBjqkASvONyd%2BwTsiNRoDLzWZFs4IaHNvi6KZRtrUdkuAMy16M26syI%2FRP%2BhkHdYanNhRCv49sKkAPoOztDd93woFV5POlil3Ga2qGB6L0kN9PfwdW%2BXaehs4MlcKwXlMyc2DlYTiZwAN1isI4yhbT6omw8VNf21P9e1mrCmc6tQZJG6rfhyx%2FD%2Bzm470CsynoOgKjythEDeRKlPcX%2B0onFUtHhuRqVRy&X-Amz-Signature=a73d0fd09aee19115a86ec609b643ecbf2d7167f300c70f5334f1d3b1986bb65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHVLFFP%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC%2FV4zcautjlhJfxWhyrIeqmq%2Bj1F2l%2FapKyQnaHQ5onAIhAMbR59NnG1XTEXIxAOT6Qi7HX8KP5UjyCX91L3SjM8KGKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7%2Fv%2BaJhk4TLfLJBAq3ANFb%2FZ8VepVHppdObQ4pUJoC1lrO2DjmbHXf6yaki6x%2BoOVzR0FnrUnUhDdhEUwnYHBT0rMhZRuDpdHGUb9WsYq1Wvi6Zze0NTWIX0LwOMr9qQGrxsx4nfoJ%2BCc038R0F59XIX7OvWYyByl8jflGrQUvwIJF9xPThnoyn%2BXVFppw16xTnQyAYugEbt4s9fJIOqTvWWBvpgLZPXJdvFb%2Fu0ZzZ3J7daMItYSsTpen8TkJ9gIqm4ZA%2BJFgtE5dDKbWvVOO%2F8oi7qsWX93U2ZRUfe5HND69DE3zcPOuYx5T4TU%2Bn92LOcaE2yDpc0HZyccyl9%2BpZJVRPGzqjjUYzEc5gCdbVSCrnszSsNfQoZpphICubudIl%2BMdSq6saFuEGwgMVeXiinZu7HZqx3%2FUh0HJf%2F3zJX3UHpzCqWGUTQLl0%2FC%2FUNESOtKLjsd%2FjHnrLto8KU4MJvyJww9dWjT4hv2FcrwTonQqTUp8uWmDndA9jIjga%2BX3P9StHFpFA8xWb%2FAjk01T779YwFRSostvL%2FnrBLlgon%2FUAK696u8pD9zpWmYLb21e1j4u%2FIwCI3PfVHf8J9L9wPSqqZSeAqjrmPKbUxTrEDNB0%2BqKb%2B8OG1wIU6F2aas%2BvcIokbiCFl6EjC6idfKBjqkASvONyd%2BwTsiNRoDLzWZFs4IaHNvi6KZRtrUdkuAMy16M26syI%2FRP%2BhkHdYanNhRCv49sKkAPoOztDd93woFV5POlil3Ga2qGB6L0kN9PfwdW%2BXaehs4MlcKwXlMyc2DlYTiZwAN1isI4yhbT6omw8VNf21P9e1mrCmc6tQZJG6rfhyx%2FD%2Bzm470CsynoOgKjythEDeRKlPcX%2B0onFUtHhuRqVRy&X-Amz-Signature=57f6046e94d1c86ddee1b2ae529d0b5cc21b9e7439301a54131b6c71a7dfca75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHVLFFP%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC%2FV4zcautjlhJfxWhyrIeqmq%2Bj1F2l%2FapKyQnaHQ5onAIhAMbR59NnG1XTEXIxAOT6Qi7HX8KP5UjyCX91L3SjM8KGKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7%2Fv%2BaJhk4TLfLJBAq3ANFb%2FZ8VepVHppdObQ4pUJoC1lrO2DjmbHXf6yaki6x%2BoOVzR0FnrUnUhDdhEUwnYHBT0rMhZRuDpdHGUb9WsYq1Wvi6Zze0NTWIX0LwOMr9qQGrxsx4nfoJ%2BCc038R0F59XIX7OvWYyByl8jflGrQUvwIJF9xPThnoyn%2BXVFppw16xTnQyAYugEbt4s9fJIOqTvWWBvpgLZPXJdvFb%2Fu0ZzZ3J7daMItYSsTpen8TkJ9gIqm4ZA%2BJFgtE5dDKbWvVOO%2F8oi7qsWX93U2ZRUfe5HND69DE3zcPOuYx5T4TU%2Bn92LOcaE2yDpc0HZyccyl9%2BpZJVRPGzqjjUYzEc5gCdbVSCrnszSsNfQoZpphICubudIl%2BMdSq6saFuEGwgMVeXiinZu7HZqx3%2FUh0HJf%2F3zJX3UHpzCqWGUTQLl0%2FC%2FUNESOtKLjsd%2FjHnrLto8KU4MJvyJww9dWjT4hv2FcrwTonQqTUp8uWmDndA9jIjga%2BX3P9StHFpFA8xWb%2FAjk01T779YwFRSostvL%2FnrBLlgon%2FUAK696u8pD9zpWmYLb21e1j4u%2FIwCI3PfVHf8J9L9wPSqqZSeAqjrmPKbUxTrEDNB0%2BqKb%2B8OG1wIU6F2aas%2BvcIokbiCFl6EjC6idfKBjqkASvONyd%2BwTsiNRoDLzWZFs4IaHNvi6KZRtrUdkuAMy16M26syI%2FRP%2BhkHdYanNhRCv49sKkAPoOztDd93woFV5POlil3Ga2qGB6L0kN9PfwdW%2BXaehs4MlcKwXlMyc2DlYTiZwAN1isI4yhbT6omw8VNf21P9e1mrCmc6tQZJG6rfhyx%2FD%2Bzm470CsynoOgKjythEDeRKlPcX%2B0onFUtHhuRqVRy&X-Amz-Signature=d9492f40df8ea7c3ed7394ecb591a43419b5bcf90f385fe1c913372ed8212283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHVLFFP%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC%2FV4zcautjlhJfxWhyrIeqmq%2Bj1F2l%2FapKyQnaHQ5onAIhAMbR59NnG1XTEXIxAOT6Qi7HX8KP5UjyCX91L3SjM8KGKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7%2Fv%2BaJhk4TLfLJBAq3ANFb%2FZ8VepVHppdObQ4pUJoC1lrO2DjmbHXf6yaki6x%2BoOVzR0FnrUnUhDdhEUwnYHBT0rMhZRuDpdHGUb9WsYq1Wvi6Zze0NTWIX0LwOMr9qQGrxsx4nfoJ%2BCc038R0F59XIX7OvWYyByl8jflGrQUvwIJF9xPThnoyn%2BXVFppw16xTnQyAYugEbt4s9fJIOqTvWWBvpgLZPXJdvFb%2Fu0ZzZ3J7daMItYSsTpen8TkJ9gIqm4ZA%2BJFgtE5dDKbWvVOO%2F8oi7qsWX93U2ZRUfe5HND69DE3zcPOuYx5T4TU%2Bn92LOcaE2yDpc0HZyccyl9%2BpZJVRPGzqjjUYzEc5gCdbVSCrnszSsNfQoZpphICubudIl%2BMdSq6saFuEGwgMVeXiinZu7HZqx3%2FUh0HJf%2F3zJX3UHpzCqWGUTQLl0%2FC%2FUNESOtKLjsd%2FjHnrLto8KU4MJvyJww9dWjT4hv2FcrwTonQqTUp8uWmDndA9jIjga%2BX3P9StHFpFA8xWb%2FAjk01T779YwFRSostvL%2FnrBLlgon%2FUAK696u8pD9zpWmYLb21e1j4u%2FIwCI3PfVHf8J9L9wPSqqZSeAqjrmPKbUxTrEDNB0%2BqKb%2B8OG1wIU6F2aas%2BvcIokbiCFl6EjC6idfKBjqkASvONyd%2BwTsiNRoDLzWZFs4IaHNvi6KZRtrUdkuAMy16M26syI%2FRP%2BhkHdYanNhRCv49sKkAPoOztDd93woFV5POlil3Ga2qGB6L0kN9PfwdW%2BXaehs4MlcKwXlMyc2DlYTiZwAN1isI4yhbT6omw8VNf21P9e1mrCmc6tQZJG6rfhyx%2FD%2Bzm470CsynoOgKjythEDeRKlPcX%2B0onFUtHhuRqVRy&X-Amz-Signature=556fcfee72ea87199a76e3e768c80dbc0c04d5d6caedb2ab28b0270a02db39b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OHVLFFP%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC%2FV4zcautjlhJfxWhyrIeqmq%2Bj1F2l%2FapKyQnaHQ5onAIhAMbR59NnG1XTEXIxAOT6Qi7HX8KP5UjyCX91L3SjM8KGKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7%2Fv%2BaJhk4TLfLJBAq3ANFb%2FZ8VepVHppdObQ4pUJoC1lrO2DjmbHXf6yaki6x%2BoOVzR0FnrUnUhDdhEUwnYHBT0rMhZRuDpdHGUb9WsYq1Wvi6Zze0NTWIX0LwOMr9qQGrxsx4nfoJ%2BCc038R0F59XIX7OvWYyByl8jflGrQUvwIJF9xPThnoyn%2BXVFppw16xTnQyAYugEbt4s9fJIOqTvWWBvpgLZPXJdvFb%2Fu0ZzZ3J7daMItYSsTpen8TkJ9gIqm4ZA%2BJFgtE5dDKbWvVOO%2F8oi7qsWX93U2ZRUfe5HND69DE3zcPOuYx5T4TU%2Bn92LOcaE2yDpc0HZyccyl9%2BpZJVRPGzqjjUYzEc5gCdbVSCrnszSsNfQoZpphICubudIl%2BMdSq6saFuEGwgMVeXiinZu7HZqx3%2FUh0HJf%2F3zJX3UHpzCqWGUTQLl0%2FC%2FUNESOtKLjsd%2FjHnrLto8KU4MJvyJww9dWjT4hv2FcrwTonQqTUp8uWmDndA9jIjga%2BX3P9StHFpFA8xWb%2FAjk01T779YwFRSostvL%2FnrBLlgon%2FUAK696u8pD9zpWmYLb21e1j4u%2FIwCI3PfVHf8J9L9wPSqqZSeAqjrmPKbUxTrEDNB0%2BqKb%2B8OG1wIU6F2aas%2BvcIokbiCFl6EjC6idfKBjqkASvONyd%2BwTsiNRoDLzWZFs4IaHNvi6KZRtrUdkuAMy16M26syI%2FRP%2BhkHdYanNhRCv49sKkAPoOztDd93woFV5POlil3Ga2qGB6L0kN9PfwdW%2BXaehs4MlcKwXlMyc2DlYTiZwAN1isI4yhbT6omw8VNf21P9e1mrCmc6tQZJG6rfhyx%2FD%2Bzm470CsynoOgKjythEDeRKlPcX%2B0onFUtHhuRqVRy&X-Amz-Signature=907d387cc39c3666c7bdf9e2251944a37d2a55971f656445342b4334eec5dcf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW37LSW3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDcjlE5kK8ahmkJJn2CMecCypgtNxxtrEDNk9fRenIJ8gIhAPedM%2FPITesieZUYuP2b0ESAITWd2SdCBcLaCu7Ra%2BuqKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhe%2BCQRS7zjuXGSH4q3ANpyhXPajSsWF%2BrC4zIYFSK9XLWsKU0T0KvXWrnUJfXNK%2FKozB%2B38pEmTVXLFSWZocRLga3DWVhDMpl8ONiJYfrkaSzES5AHw32NQ%2F2Bur2xciP37i%2FCNxsKjlci5Tg5tSyYjb7UTj%2FcomLZ5i%2FumJVztDKjC6trJ8B3KeSxGNgEF2xOtzywFi8T55yEAodIbmj0kYQ6KQ7FvxsT1yOQe9qdm%2FvuABG3JOCrER8xQLw62wlmZQ%2BO3NGPCPh1J5iGrsfKZuJiyHvunl1rtJ7uEfnFjn6%2FX9zHfLWlEhDl%2B7kl%2FkhUUz8WPqqDSfsXaPL9R5b4FLlgqG2ICC5nzGVDvUerF8%2FekZ%2FvuBnt5Y4RuwY8%2BrfKWzVPEHjcLLa4uU3IuIie9AROqMsZavW%2Bnv5GvwEKqHyPHnma7Xe4lSQZraUPIM2Y8hEmfC6SyjcG%2BOviSl35MQEomkDhA6Vkxcgaup9zDnrznsC0s3yPOYMiE3NGg1M3jQSKI5QcKP8gFZ7xK%2BfDB%2BA4F8C0ji3RWCXyxzctyNbTKGI0gozBf%2BTfQAHHVFsJMykWywglXA1y%2BmOeKnqhuJUdN9%2F0Uv7nzmMPtBT%2FsWp2JQpWO6UEbbuVHQvvSo1m9Wxa6Slv2cjozC3j9fKBjqkAWP3NUFmhqZsg%2FQaNiE34BwXVmrmhnycz%2FkyAlmaTwHGsRp%2FnQK1CyQT9om%2F6ijKtO5K4pJ6LXkKPX3KeQiBo6ZcPka1W0UnC1k6tb0Dpt7Rb2vLZbcGXhNXp41OTzWsjO8xU%2FFVtl0k9%2B16W3K9HwqqhPuoIMr4HDwKzkM%2Fb%2FGpsvrwwNiwMl7Io9i3gVgHgqxapgklfEBo%2FNYWvVdpFKIQ3Fi4&X-Amz-Signature=d7e70dc13a240e85b998ed5a128a0f8ca5ccfd89e5be49e24cb16fbcafc95b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW37LSW3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDcjlE5kK8ahmkJJn2CMecCypgtNxxtrEDNk9fRenIJ8gIhAPedM%2FPITesieZUYuP2b0ESAITWd2SdCBcLaCu7Ra%2BuqKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhe%2BCQRS7zjuXGSH4q3ANpyhXPajSsWF%2BrC4zIYFSK9XLWsKU0T0KvXWrnUJfXNK%2FKozB%2B38pEmTVXLFSWZocRLga3DWVhDMpl8ONiJYfrkaSzES5AHw32NQ%2F2Bur2xciP37i%2FCNxsKjlci5Tg5tSyYjb7UTj%2FcomLZ5i%2FumJVztDKjC6trJ8B3KeSxGNgEF2xOtzywFi8T55yEAodIbmj0kYQ6KQ7FvxsT1yOQe9qdm%2FvuABG3JOCrER8xQLw62wlmZQ%2BO3NGPCPh1J5iGrsfKZuJiyHvunl1rtJ7uEfnFjn6%2FX9zHfLWlEhDl%2B7kl%2FkhUUz8WPqqDSfsXaPL9R5b4FLlgqG2ICC5nzGVDvUerF8%2FekZ%2FvuBnt5Y4RuwY8%2BrfKWzVPEHjcLLa4uU3IuIie9AROqMsZavW%2Bnv5GvwEKqHyPHnma7Xe4lSQZraUPIM2Y8hEmfC6SyjcG%2BOviSl35MQEomkDhA6Vkxcgaup9zDnrznsC0s3yPOYMiE3NGg1M3jQSKI5QcKP8gFZ7xK%2BfDB%2BA4F8C0ji3RWCXyxzctyNbTKGI0gozBf%2BTfQAHHVFsJMykWywglXA1y%2BmOeKnqhuJUdN9%2F0Uv7nzmMPtBT%2FsWp2JQpWO6UEbbuVHQvvSo1m9Wxa6Slv2cjozC3j9fKBjqkAWP3NUFmhqZsg%2FQaNiE34BwXVmrmhnycz%2FkyAlmaTwHGsRp%2FnQK1CyQT9om%2F6ijKtO5K4pJ6LXkKPX3KeQiBo6ZcPka1W0UnC1k6tb0Dpt7Rb2vLZbcGXhNXp41OTzWsjO8xU%2FFVtl0k9%2B16W3K9HwqqhPuoIMr4HDwKzkM%2Fb%2FGpsvrwwNiwMl7Io9i3gVgHgqxapgklfEBo%2FNYWvVdpFKIQ3Fi4&X-Amz-Signature=6df3e2d91664e0a7a0a82b0ad587703f2f71421acffdb4f4daa62c2c06370d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW37LSW3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDcjlE5kK8ahmkJJn2CMecCypgtNxxtrEDNk9fRenIJ8gIhAPedM%2FPITesieZUYuP2b0ESAITWd2SdCBcLaCu7Ra%2BuqKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhe%2BCQRS7zjuXGSH4q3ANpyhXPajSsWF%2BrC4zIYFSK9XLWsKU0T0KvXWrnUJfXNK%2FKozB%2B38pEmTVXLFSWZocRLga3DWVhDMpl8ONiJYfrkaSzES5AHw32NQ%2F2Bur2xciP37i%2FCNxsKjlci5Tg5tSyYjb7UTj%2FcomLZ5i%2FumJVztDKjC6trJ8B3KeSxGNgEF2xOtzywFi8T55yEAodIbmj0kYQ6KQ7FvxsT1yOQe9qdm%2FvuABG3JOCrER8xQLw62wlmZQ%2BO3NGPCPh1J5iGrsfKZuJiyHvunl1rtJ7uEfnFjn6%2FX9zHfLWlEhDl%2B7kl%2FkhUUz8WPqqDSfsXaPL9R5b4FLlgqG2ICC5nzGVDvUerF8%2FekZ%2FvuBnt5Y4RuwY8%2BrfKWzVPEHjcLLa4uU3IuIie9AROqMsZavW%2Bnv5GvwEKqHyPHnma7Xe4lSQZraUPIM2Y8hEmfC6SyjcG%2BOviSl35MQEomkDhA6Vkxcgaup9zDnrznsC0s3yPOYMiE3NGg1M3jQSKI5QcKP8gFZ7xK%2BfDB%2BA4F8C0ji3RWCXyxzctyNbTKGI0gozBf%2BTfQAHHVFsJMykWywglXA1y%2BmOeKnqhuJUdN9%2F0Uv7nzmMPtBT%2FsWp2JQpWO6UEbbuVHQvvSo1m9Wxa6Slv2cjozC3j9fKBjqkAWP3NUFmhqZsg%2FQaNiE34BwXVmrmhnycz%2FkyAlmaTwHGsRp%2FnQK1CyQT9om%2F6ijKtO5K4pJ6LXkKPX3KeQiBo6ZcPka1W0UnC1k6tb0Dpt7Rb2vLZbcGXhNXp41OTzWsjO8xU%2FFVtl0k9%2B16W3K9HwqqhPuoIMr4HDwKzkM%2Fb%2FGpsvrwwNiwMl7Io9i3gVgHgqxapgklfEBo%2FNYWvVdpFKIQ3Fi4&X-Amz-Signature=1128abc7d9282d41bbcfe64c1683257680c02ce39ec9be9567869280eef3168d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW37LSW3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDcjlE5kK8ahmkJJn2CMecCypgtNxxtrEDNk9fRenIJ8gIhAPedM%2FPITesieZUYuP2b0ESAITWd2SdCBcLaCu7Ra%2BuqKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhe%2BCQRS7zjuXGSH4q3ANpyhXPajSsWF%2BrC4zIYFSK9XLWsKU0T0KvXWrnUJfXNK%2FKozB%2B38pEmTVXLFSWZocRLga3DWVhDMpl8ONiJYfrkaSzES5AHw32NQ%2F2Bur2xciP37i%2FCNxsKjlci5Tg5tSyYjb7UTj%2FcomLZ5i%2FumJVztDKjC6trJ8B3KeSxGNgEF2xOtzywFi8T55yEAodIbmj0kYQ6KQ7FvxsT1yOQe9qdm%2FvuABG3JOCrER8xQLw62wlmZQ%2BO3NGPCPh1J5iGrsfKZuJiyHvunl1rtJ7uEfnFjn6%2FX9zHfLWlEhDl%2B7kl%2FkhUUz8WPqqDSfsXaPL9R5b4FLlgqG2ICC5nzGVDvUerF8%2FekZ%2FvuBnt5Y4RuwY8%2BrfKWzVPEHjcLLa4uU3IuIie9AROqMsZavW%2Bnv5GvwEKqHyPHnma7Xe4lSQZraUPIM2Y8hEmfC6SyjcG%2BOviSl35MQEomkDhA6Vkxcgaup9zDnrznsC0s3yPOYMiE3NGg1M3jQSKI5QcKP8gFZ7xK%2BfDB%2BA4F8C0ji3RWCXyxzctyNbTKGI0gozBf%2BTfQAHHVFsJMykWywglXA1y%2BmOeKnqhuJUdN9%2F0Uv7nzmMPtBT%2FsWp2JQpWO6UEbbuVHQvvSo1m9Wxa6Slv2cjozC3j9fKBjqkAWP3NUFmhqZsg%2FQaNiE34BwXVmrmhnycz%2FkyAlmaTwHGsRp%2FnQK1CyQT9om%2F6ijKtO5K4pJ6LXkKPX3KeQiBo6ZcPka1W0UnC1k6tb0Dpt7Rb2vLZbcGXhNXp41OTzWsjO8xU%2FFVtl0k9%2B16W3K9HwqqhPuoIMr4HDwKzkM%2Fb%2FGpsvrwwNiwMl7Io9i3gVgHgqxapgklfEBo%2FNYWvVdpFKIQ3Fi4&X-Amz-Signature=fe9b7926e1954a1ea204af3354f0b9d0c96ad3e14f4da8f21b45ebbc26f27e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW37LSW3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDcjlE5kK8ahmkJJn2CMecCypgtNxxtrEDNk9fRenIJ8gIhAPedM%2FPITesieZUYuP2b0ESAITWd2SdCBcLaCu7Ra%2BuqKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhe%2BCQRS7zjuXGSH4q3ANpyhXPajSsWF%2BrC4zIYFSK9XLWsKU0T0KvXWrnUJfXNK%2FKozB%2B38pEmTVXLFSWZocRLga3DWVhDMpl8ONiJYfrkaSzES5AHw32NQ%2F2Bur2xciP37i%2FCNxsKjlci5Tg5tSyYjb7UTj%2FcomLZ5i%2FumJVztDKjC6trJ8B3KeSxGNgEF2xOtzywFi8T55yEAodIbmj0kYQ6KQ7FvxsT1yOQe9qdm%2FvuABG3JOCrER8xQLw62wlmZQ%2BO3NGPCPh1J5iGrsfKZuJiyHvunl1rtJ7uEfnFjn6%2FX9zHfLWlEhDl%2B7kl%2FkhUUz8WPqqDSfsXaPL9R5b4FLlgqG2ICC5nzGVDvUerF8%2FekZ%2FvuBnt5Y4RuwY8%2BrfKWzVPEHjcLLa4uU3IuIie9AROqMsZavW%2Bnv5GvwEKqHyPHnma7Xe4lSQZraUPIM2Y8hEmfC6SyjcG%2BOviSl35MQEomkDhA6Vkxcgaup9zDnrznsC0s3yPOYMiE3NGg1M3jQSKI5QcKP8gFZ7xK%2BfDB%2BA4F8C0ji3RWCXyxzctyNbTKGI0gozBf%2BTfQAHHVFsJMykWywglXA1y%2BmOeKnqhuJUdN9%2F0Uv7nzmMPtBT%2FsWp2JQpWO6UEbbuVHQvvSo1m9Wxa6Slv2cjozC3j9fKBjqkAWP3NUFmhqZsg%2FQaNiE34BwXVmrmhnycz%2FkyAlmaTwHGsRp%2FnQK1CyQT9om%2F6ijKtO5K4pJ6LXkKPX3KeQiBo6ZcPka1W0UnC1k6tb0Dpt7Rb2vLZbcGXhNXp41OTzWsjO8xU%2FFVtl0k9%2B16W3K9HwqqhPuoIMr4HDwKzkM%2Fb%2FGpsvrwwNiwMl7Io9i3gVgHgqxapgklfEBo%2FNYWvVdpFKIQ3Fi4&X-Amz-Signature=cbe0877af38a2a293b72ee7b3082a848563bfba5d4e33707ede3157601469414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDE4K4SU%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGfVI58EHx9Twtxvmqt%2BXOFBlA7iY3bCQEJycJqte3LlAiEAp5SKMhtIncQ9QKds7D4%2BvW8v4y964QknOLphDMDYbwMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqXW5LrilULY7wXZyrcA%2BNS3gIuNx12n10VUgmyT%2FLPjGwnGuvY5sPojHzqV%2F17poKQZUzGEWGPne2zXaImHkKUTaM49p3Q7w1g3y68Y%2F5Z%2BKcDPkDbvU7DVPWeo29vaBCUNa%2FSGDwTv2XkCrY9nbe%2FRbvWSniWSPbU0QbeKO%2F7l2U%2FjzlIqxZ1mnN9dhZG%2BniKk8Hr7iFB4%2B0G5mt0x8aEM9St9MIICPs%2B2FfdD7vY2S9qgd0mbUmGxWDcCPRUCLEj4hDeVjYEg8Tdy6vo7zcgvlt1%2B%2FHrAX8TqMEMiLxDB7nFE3uK5V7kk0cYK8zsgYDTpiejE83Pyki0eNzJCjt%2Fj4RE3K%2FzP1eOaWsExLR2cZEbcMIVR3FbCZ65CyfJhgwBiq1eBp4X1lsMneXovhwe979%2BoF78ImnR0INk4CrPaDqUwQfSlXVJj2CSezRJkAEFO3DKz5r%2BaAiZMUQx3pZ3Ntvbz5bOzzzMhCVLtFyGg%2F7iBzbMbWA0RAxRt0Sc1Wz5QO4NmrokjGMuqTGMQ0Jn3fYkDz5jr55daBHtQa0%2Ff9Iuhdaj3lmb36XDWjRRmMLN5UQOpD48DQwDCS07VlRe2EDfar%2B39Kceok7AMjrwr2SXAhnoxAoDDb1FSjAW2XZfHo75hRDrTIMBMKiN18oGOqUBlDHyV4it5tLVGMKG9Wr%2BnBXpH7gA5moN4CsdZWlNgG2Oq%2FH9tcsTUnj5ybArI5GeGyoATajr6gyLV5kIVRTRzAO4gZJVncOf382sXyEUrS7nZv3XLV6WY4RGp5CAA5G3oSw9WHEftCs65rsCFNkS8VUM7lJgXx7N2PobO%2BrlVoY%2BDnAV1g1M8s%2FVlrdkvLYgbjE5pVUqcFd%2BdIhKwgyXB796ho%2Fx&X-Amz-Signature=99b47b8519070bf92f21b445fe2f33d5236bf0dbee729c6c72039cd9bc09bd7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDE4K4SU%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGfVI58EHx9Twtxvmqt%2BXOFBlA7iY3bCQEJycJqte3LlAiEAp5SKMhtIncQ9QKds7D4%2BvW8v4y964QknOLphDMDYbwMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqXW5LrilULY7wXZyrcA%2BNS3gIuNx12n10VUgmyT%2FLPjGwnGuvY5sPojHzqV%2F17poKQZUzGEWGPne2zXaImHkKUTaM49p3Q7w1g3y68Y%2F5Z%2BKcDPkDbvU7DVPWeo29vaBCUNa%2FSGDwTv2XkCrY9nbe%2FRbvWSniWSPbU0QbeKO%2F7l2U%2FjzlIqxZ1mnN9dhZG%2BniKk8Hr7iFB4%2B0G5mt0x8aEM9St9MIICPs%2B2FfdD7vY2S9qgd0mbUmGxWDcCPRUCLEj4hDeVjYEg8Tdy6vo7zcgvlt1%2B%2FHrAX8TqMEMiLxDB7nFE3uK5V7kk0cYK8zsgYDTpiejE83Pyki0eNzJCjt%2Fj4RE3K%2FzP1eOaWsExLR2cZEbcMIVR3FbCZ65CyfJhgwBiq1eBp4X1lsMneXovhwe979%2BoF78ImnR0INk4CrPaDqUwQfSlXVJj2CSezRJkAEFO3DKz5r%2BaAiZMUQx3pZ3Ntvbz5bOzzzMhCVLtFyGg%2F7iBzbMbWA0RAxRt0Sc1Wz5QO4NmrokjGMuqTGMQ0Jn3fYkDz5jr55daBHtQa0%2Ff9Iuhdaj3lmb36XDWjRRmMLN5UQOpD48DQwDCS07VlRe2EDfar%2B39Kceok7AMjrwr2SXAhnoxAoDDb1FSjAW2XZfHo75hRDrTIMBMKiN18oGOqUBlDHyV4it5tLVGMKG9Wr%2BnBXpH7gA5moN4CsdZWlNgG2Oq%2FH9tcsTUnj5ybArI5GeGyoATajr6gyLV5kIVRTRzAO4gZJVncOf382sXyEUrS7nZv3XLV6WY4RGp5CAA5G3oSw9WHEftCs65rsCFNkS8VUM7lJgXx7N2PobO%2BrlVoY%2BDnAV1g1M8s%2FVlrdkvLYgbjE5pVUqcFd%2BdIhKwgyXB796ho%2Fx&X-Amz-Signature=f449a0ed2a716c06179a2f2c132c8890aa8169a37b78e9b16d074203518d0f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDE4K4SU%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGfVI58EHx9Twtxvmqt%2BXOFBlA7iY3bCQEJycJqte3LlAiEAp5SKMhtIncQ9QKds7D4%2BvW8v4y964QknOLphDMDYbwMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqXW5LrilULY7wXZyrcA%2BNS3gIuNx12n10VUgmyT%2FLPjGwnGuvY5sPojHzqV%2F17poKQZUzGEWGPne2zXaImHkKUTaM49p3Q7w1g3y68Y%2F5Z%2BKcDPkDbvU7DVPWeo29vaBCUNa%2FSGDwTv2XkCrY9nbe%2FRbvWSniWSPbU0QbeKO%2F7l2U%2FjzlIqxZ1mnN9dhZG%2BniKk8Hr7iFB4%2B0G5mt0x8aEM9St9MIICPs%2B2FfdD7vY2S9qgd0mbUmGxWDcCPRUCLEj4hDeVjYEg8Tdy6vo7zcgvlt1%2B%2FHrAX8TqMEMiLxDB7nFE3uK5V7kk0cYK8zsgYDTpiejE83Pyki0eNzJCjt%2Fj4RE3K%2FzP1eOaWsExLR2cZEbcMIVR3FbCZ65CyfJhgwBiq1eBp4X1lsMneXovhwe979%2BoF78ImnR0INk4CrPaDqUwQfSlXVJj2CSezRJkAEFO3DKz5r%2BaAiZMUQx3pZ3Ntvbz5bOzzzMhCVLtFyGg%2F7iBzbMbWA0RAxRt0Sc1Wz5QO4NmrokjGMuqTGMQ0Jn3fYkDz5jr55daBHtQa0%2Ff9Iuhdaj3lmb36XDWjRRmMLN5UQOpD48DQwDCS07VlRe2EDfar%2B39Kceok7AMjrwr2SXAhnoxAoDDb1FSjAW2XZfHo75hRDrTIMBMKiN18oGOqUBlDHyV4it5tLVGMKG9Wr%2BnBXpH7gA5moN4CsdZWlNgG2Oq%2FH9tcsTUnj5ybArI5GeGyoATajr6gyLV5kIVRTRzAO4gZJVncOf382sXyEUrS7nZv3XLV6WY4RGp5CAA5G3oSw9WHEftCs65rsCFNkS8VUM7lJgXx7N2PobO%2BrlVoY%2BDnAV1g1M8s%2FVlrdkvLYgbjE5pVUqcFd%2BdIhKwgyXB796ho%2Fx&X-Amz-Signature=469afacee52370d4a3fddd78edf41ed85de455d2b516a47374815de068683ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JOXZQQL%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDnkEAFzL97cTWLe7iC9pKFFeddVv4YXoo3fJGLjttwNwIgItOSZpZCw7tVwPhbPsh2VSAUmCE%2Fj0At7RjSZXxqtP4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaLkyOr%2Bbr7eO2L8ircA%2FXhuDq5HYFXkywWuhDc93HqhtbVwPJF9L2IoERRAF5BSAJqUDQVJ7xNpQeYaRTMmeIowqFeKf%2FuhgTUVrhinaX%2F5XeVJrmhRpdpkFgsz5FpmDRPsyZ7z811gKyFJymlhWoVfE6%2Bhc3j0Wx5%2B9wvCOLRUOUEljUewT1%2BuaFrRvsUOpw8Y%2BaET0kfL6f%2BIwz4rXLdacgUg5q5XQqtzTG9L8DsZ5VlWlnSujyjL7hgaBibubRIfdKbuQc2w0gM2PzTUMetXyQKzDnRRiIx6B8SWC5IloooD7xS0A2GeQY%2BynVA9oHk3jnMjRgbCJnV2cXFpTb3W3iZL4qaSGANUKaYTrVxUHPomWpsU27yuixDYDsy8JLW4Nk4%2BV5BYB527pPa%2FiFF%2Btq0nZfhB2bweevPnS87C9tY0EYLlISzg8BQGu10EEVOi6PnRBXR7jBfULmGct%2FPioDoWIbgWbeaKelW%2F414f0FuJfMAhCB5CmdBQJQLpzOCilsNd4isyz4kaDREJZqN6BCKAsNVtX2v825zvOCLnO7J7lIitvGxZ59HKfNuBJgsma4xF541vgQwcwyGmGO5bgVhcxXXU0DMY6v87kgpvL0fwwQgSq9VtseB%2Bo8V4VHJU646Crwd2m7aMNaB18oGOqUBD5kfN1yKfhh1DuRh2TgjEzE0m71Iv1C9WVG07KwfoFWyQcIo%2FkO0gj3eTDW491wt8nvDuJ8IZ%2B2t09MkyZQ2%2BQaI3YzDq3jITBwc0cx2cG4PYdkRm6DvSpMkqBwy4VyF2vqF%2F3HrCQMWgPYP%2Bif76IVJdKwcHBsELNdVTjSkUZsipIhpPb25rZUGo4p4YXIZboz58b%2FMxF2pitFiKVOwEYevkrpq&X-Amz-Signature=18aab28da9c336dc7cec1de101d7149cf400a1182589b7f5d3379af130455f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JOXZQQL%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDnkEAFzL97cTWLe7iC9pKFFeddVv4YXoo3fJGLjttwNwIgItOSZpZCw7tVwPhbPsh2VSAUmCE%2Fj0At7RjSZXxqtP4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaLkyOr%2Bbr7eO2L8ircA%2FXhuDq5HYFXkywWuhDc93HqhtbVwPJF9L2IoERRAF5BSAJqUDQVJ7xNpQeYaRTMmeIowqFeKf%2FuhgTUVrhinaX%2F5XeVJrmhRpdpkFgsz5FpmDRPsyZ7z811gKyFJymlhWoVfE6%2Bhc3j0Wx5%2B9wvCOLRUOUEljUewT1%2BuaFrRvsUOpw8Y%2BaET0kfL6f%2BIwz4rXLdacgUg5q5XQqtzTG9L8DsZ5VlWlnSujyjL7hgaBibubRIfdKbuQc2w0gM2PzTUMetXyQKzDnRRiIx6B8SWC5IloooD7xS0A2GeQY%2BynVA9oHk3jnMjRgbCJnV2cXFpTb3W3iZL4qaSGANUKaYTrVxUHPomWpsU27yuixDYDsy8JLW4Nk4%2BV5BYB527pPa%2FiFF%2Btq0nZfhB2bweevPnS87C9tY0EYLlISzg8BQGu10EEVOi6PnRBXR7jBfULmGct%2FPioDoWIbgWbeaKelW%2F414f0FuJfMAhCB5CmdBQJQLpzOCilsNd4isyz4kaDREJZqN6BCKAsNVtX2v825zvOCLnO7J7lIitvGxZ59HKfNuBJgsma4xF541vgQwcwyGmGO5bgVhcxXXU0DMY6v87kgpvL0fwwQgSq9VtseB%2Bo8V4VHJU646Crwd2m7aMNaB18oGOqUBD5kfN1yKfhh1DuRh2TgjEzE0m71Iv1C9WVG07KwfoFWyQcIo%2FkO0gj3eTDW491wt8nvDuJ8IZ%2B2t09MkyZQ2%2BQaI3YzDq3jITBwc0cx2cG4PYdkRm6DvSpMkqBwy4VyF2vqF%2F3HrCQMWgPYP%2Bif76IVJdKwcHBsELNdVTjSkUZsipIhpPb25rZUGo4p4YXIZboz58b%2FMxF2pitFiKVOwEYevkrpq&X-Amz-Signature=ca352f9a2fc99d4e0b300bb3df0c4a4074c263a18bd4e38b00a7ef7b4c1b753b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NYYB4IR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD0wXgXVTIgdnWpK20sQbDckB6S%2FMgYZfBWSZyLE1lz2wIhAOJTmYR1K%2BI1LuR2j%2BnfqjkWKBHUE0FCiVD5f5a7VPgcKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPtbYcJ2iXtqd%2BLtYq3APevtJMFTtimA5vUAAGp5iKSeUSHNn87hWbx9bT0SfJtyGmvQB1T9nx%2BA%2Byzzo%2FbotkhQfG6Rhs9oBLLBi63qTCP1sE8hC4Crr0TPKcnEnMqgScLSmTwyg%2BmUJwyzZcavc4NA0LfKJfSxamlP2WzIW52Qw4ff70CHLsaCNw4l0YzxRp2Ou8XNKlaBu3cnJagZ7to3VozayjlEqmADULFzoQTvIcg1%2BA1zKkBwdyDPl18diKZelL9Kdx89fBm6jxsOYdAcwpDcDP18ghufbKXDQ3NlDW3L6nGkfukzNpE54FWp5gDayVTqjXl95BfDTCdm8Em29DSP1lX3%2FbzsaFB3FmW45jzkh12yv8k2G5p8Yx56l7ehbOyWYeskST%2BnrXBjVPxHH6htEcIwcpofz7YO8AW%2BZSNJyQKepi3ksDDsO%2Bx40z9ippytZ98SWKJUPCdhKrDGZSH1zOcfmdXJJWVvLf3luBigyNdeddX8NAnKijk3dBA3iD0WssIm%2BmYU0Tl5FPFBdVCmlDYqIKo7RrZ%2FC9RkuUQAMoqlYMNQ6q7P9i2SsmfyUGNuxpDkPlrD%2BUG7IaVOjx28%2FfAVFoPlF%2FnvNdByOf9wwT25RLkLMGCqA0KqWe69qXg3Ke2zHvLDDlh9fKBjqkAQNzPaz8o35zSaptA5M6NOs3yVPhtul2Cs133zMILxYdcSnQx1aSR%2Bf0%2FtSn%2Bs2U7tp1Kh1YEg2g8FMSnA4PRjGVv4T0L81oVxkqQ%2F1FnG34ivltD2gttU4cnSVtf1oFyHBKmQe7E6WgAE%2F9fMpOe2dkaB7atLmHdDLDd%2ByMG9I37ttzxjPi66DBd%2Fpwga3Zg0KoUg0QmGhDXvgZzOayg8Slww%2B8&X-Amz-Signature=a5d0c59188889381ebe723a099d7a1b6842d5f2d96d9c7b778bfd620f3bbf74d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NYYB4IR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD0wXgXVTIgdnWpK20sQbDckB6S%2FMgYZfBWSZyLE1lz2wIhAOJTmYR1K%2BI1LuR2j%2BnfqjkWKBHUE0FCiVD5f5a7VPgcKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPtbYcJ2iXtqd%2BLtYq3APevtJMFTtimA5vUAAGp5iKSeUSHNn87hWbx9bT0SfJtyGmvQB1T9nx%2BA%2Byzzo%2FbotkhQfG6Rhs9oBLLBi63qTCP1sE8hC4Crr0TPKcnEnMqgScLSmTwyg%2BmUJwyzZcavc4NA0LfKJfSxamlP2WzIW52Qw4ff70CHLsaCNw4l0YzxRp2Ou8XNKlaBu3cnJagZ7to3VozayjlEqmADULFzoQTvIcg1%2BA1zKkBwdyDPl18diKZelL9Kdx89fBm6jxsOYdAcwpDcDP18ghufbKXDQ3NlDW3L6nGkfukzNpE54FWp5gDayVTqjXl95BfDTCdm8Em29DSP1lX3%2FbzsaFB3FmW45jzkh12yv8k2G5p8Yx56l7ehbOyWYeskST%2BnrXBjVPxHH6htEcIwcpofz7YO8AW%2BZSNJyQKepi3ksDDsO%2Bx40z9ippytZ98SWKJUPCdhKrDGZSH1zOcfmdXJJWVvLf3luBigyNdeddX8NAnKijk3dBA3iD0WssIm%2BmYU0Tl5FPFBdVCmlDYqIKo7RrZ%2FC9RkuUQAMoqlYMNQ6q7P9i2SsmfyUGNuxpDkPlrD%2BUG7IaVOjx28%2FfAVFoPlF%2FnvNdByOf9wwT25RLkLMGCqA0KqWe69qXg3Ke2zHvLDDlh9fKBjqkAQNzPaz8o35zSaptA5M6NOs3yVPhtul2Cs133zMILxYdcSnQx1aSR%2Bf0%2FtSn%2Bs2U7tp1Kh1YEg2g8FMSnA4PRjGVv4T0L81oVxkqQ%2F1FnG34ivltD2gttU4cnSVtf1oFyHBKmQe7E6WgAE%2F9fMpOe2dkaB7atLmHdDLDd%2ByMG9I37ttzxjPi66DBd%2Fpwga3Zg0KoUg0QmGhDXvgZzOayg8Slww%2B8&X-Amz-Signature=1440af381c643a28e0975a1343d1583571ce0fb9fddb8cac0b6fe8c7c25740db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NYYB4IR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD0wXgXVTIgdnWpK20sQbDckB6S%2FMgYZfBWSZyLE1lz2wIhAOJTmYR1K%2BI1LuR2j%2BnfqjkWKBHUE0FCiVD5f5a7VPgcKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPtbYcJ2iXtqd%2BLtYq3APevtJMFTtimA5vUAAGp5iKSeUSHNn87hWbx9bT0SfJtyGmvQB1T9nx%2BA%2Byzzo%2FbotkhQfG6Rhs9oBLLBi63qTCP1sE8hC4Crr0TPKcnEnMqgScLSmTwyg%2BmUJwyzZcavc4NA0LfKJfSxamlP2WzIW52Qw4ff70CHLsaCNw4l0YzxRp2Ou8XNKlaBu3cnJagZ7to3VozayjlEqmADULFzoQTvIcg1%2BA1zKkBwdyDPl18diKZelL9Kdx89fBm6jxsOYdAcwpDcDP18ghufbKXDQ3NlDW3L6nGkfukzNpE54FWp5gDayVTqjXl95BfDTCdm8Em29DSP1lX3%2FbzsaFB3FmW45jzkh12yv8k2G5p8Yx56l7ehbOyWYeskST%2BnrXBjVPxHH6htEcIwcpofz7YO8AW%2BZSNJyQKepi3ksDDsO%2Bx40z9ippytZ98SWKJUPCdhKrDGZSH1zOcfmdXJJWVvLf3luBigyNdeddX8NAnKijk3dBA3iD0WssIm%2BmYU0Tl5FPFBdVCmlDYqIKo7RrZ%2FC9RkuUQAMoqlYMNQ6q7P9i2SsmfyUGNuxpDkPlrD%2BUG7IaVOjx28%2FfAVFoPlF%2FnvNdByOf9wwT25RLkLMGCqA0KqWe69qXg3Ke2zHvLDDlh9fKBjqkAQNzPaz8o35zSaptA5M6NOs3yVPhtul2Cs133zMILxYdcSnQx1aSR%2Bf0%2FtSn%2Bs2U7tp1Kh1YEg2g8FMSnA4PRjGVv4T0L81oVxkqQ%2F1FnG34ivltD2gttU4cnSVtf1oFyHBKmQe7E6WgAE%2F9fMpOe2dkaB7atLmHdDLDd%2ByMG9I37ttzxjPi66DBd%2Fpwga3Zg0KoUg0QmGhDXvgZzOayg8Slww%2B8&X-Amz-Signature=878e54c40fae3bf17dd79c88bc67083a63b8ea08010a213bdd412f737c7b69f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NYYB4IR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD0wXgXVTIgdnWpK20sQbDckB6S%2FMgYZfBWSZyLE1lz2wIhAOJTmYR1K%2BI1LuR2j%2BnfqjkWKBHUE0FCiVD5f5a7VPgcKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPtbYcJ2iXtqd%2BLtYq3APevtJMFTtimA5vUAAGp5iKSeUSHNn87hWbx9bT0SfJtyGmvQB1T9nx%2BA%2Byzzo%2FbotkhQfG6Rhs9oBLLBi63qTCP1sE8hC4Crr0TPKcnEnMqgScLSmTwyg%2BmUJwyzZcavc4NA0LfKJfSxamlP2WzIW52Qw4ff70CHLsaCNw4l0YzxRp2Ou8XNKlaBu3cnJagZ7to3VozayjlEqmADULFzoQTvIcg1%2BA1zKkBwdyDPl18diKZelL9Kdx89fBm6jxsOYdAcwpDcDP18ghufbKXDQ3NlDW3L6nGkfukzNpE54FWp5gDayVTqjXl95BfDTCdm8Em29DSP1lX3%2FbzsaFB3FmW45jzkh12yv8k2G5p8Yx56l7ehbOyWYeskST%2BnrXBjVPxHH6htEcIwcpofz7YO8AW%2BZSNJyQKepi3ksDDsO%2Bx40z9ippytZ98SWKJUPCdhKrDGZSH1zOcfmdXJJWVvLf3luBigyNdeddX8NAnKijk3dBA3iD0WssIm%2BmYU0Tl5FPFBdVCmlDYqIKo7RrZ%2FC9RkuUQAMoqlYMNQ6q7P9i2SsmfyUGNuxpDkPlrD%2BUG7IaVOjx28%2FfAVFoPlF%2FnvNdByOf9wwT25RLkLMGCqA0KqWe69qXg3Ke2zHvLDDlh9fKBjqkAQNzPaz8o35zSaptA5M6NOs3yVPhtul2Cs133zMILxYdcSnQx1aSR%2Bf0%2FtSn%2Bs2U7tp1Kh1YEg2g8FMSnA4PRjGVv4T0L81oVxkqQ%2F1FnG34ivltD2gttU4cnSVtf1oFyHBKmQe7E6WgAE%2F9fMpOe2dkaB7atLmHdDLDd%2ByMG9I37ttzxjPi66DBd%2Fpwga3Zg0KoUg0QmGhDXvgZzOayg8Slww%2B8&X-Amz-Signature=8c255fe12aa49dee69642bdf2f99056051c7213147beed3a57bd4d9a5de132c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NYYB4IR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD0wXgXVTIgdnWpK20sQbDckB6S%2FMgYZfBWSZyLE1lz2wIhAOJTmYR1K%2BI1LuR2j%2BnfqjkWKBHUE0FCiVD5f5a7VPgcKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPtbYcJ2iXtqd%2BLtYq3APevtJMFTtimA5vUAAGp5iKSeUSHNn87hWbx9bT0SfJtyGmvQB1T9nx%2BA%2Byzzo%2FbotkhQfG6Rhs9oBLLBi63qTCP1sE8hC4Crr0TPKcnEnMqgScLSmTwyg%2BmUJwyzZcavc4NA0LfKJfSxamlP2WzIW52Qw4ff70CHLsaCNw4l0YzxRp2Ou8XNKlaBu3cnJagZ7to3VozayjlEqmADULFzoQTvIcg1%2BA1zKkBwdyDPl18diKZelL9Kdx89fBm6jxsOYdAcwpDcDP18ghufbKXDQ3NlDW3L6nGkfukzNpE54FWp5gDayVTqjXl95BfDTCdm8Em29DSP1lX3%2FbzsaFB3FmW45jzkh12yv8k2G5p8Yx56l7ehbOyWYeskST%2BnrXBjVPxHH6htEcIwcpofz7YO8AW%2BZSNJyQKepi3ksDDsO%2Bx40z9ippytZ98SWKJUPCdhKrDGZSH1zOcfmdXJJWVvLf3luBigyNdeddX8NAnKijk3dBA3iD0WssIm%2BmYU0Tl5FPFBdVCmlDYqIKo7RrZ%2FC9RkuUQAMoqlYMNQ6q7P9i2SsmfyUGNuxpDkPlrD%2BUG7IaVOjx28%2FfAVFoPlF%2FnvNdByOf9wwT25RLkLMGCqA0KqWe69qXg3Ke2zHvLDDlh9fKBjqkAQNzPaz8o35zSaptA5M6NOs3yVPhtul2Cs133zMILxYdcSnQx1aSR%2Bf0%2FtSn%2Bs2U7tp1Kh1YEg2g8FMSnA4PRjGVv4T0L81oVxkqQ%2F1FnG34ivltD2gttU4cnSVtf1oFyHBKmQe7E6WgAE%2F9fMpOe2dkaB7atLmHdDLDd%2ByMG9I37ttzxjPi66DBd%2Fpwga3Zg0KoUg0QmGhDXvgZzOayg8Slww%2B8&X-Amz-Signature=e500a3ca5bfaab372c2ad96bb6c3e6e1a9cf151a4c43db3ef64c966652e87698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7NLNCKC%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T041810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBIF55nWgHk7FelOpPJz5tCwqR9MuFo6JhNRjp3Bs2klAiEAv0YElfFWpmontENaWPWPPOcjXnQc02knJIyOgbW%2BBVMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYxbfHFL9S%2BS%2FxqYyrcAwy%2FkSTgEJg74PXbNsq5GvsN8pcI0YKwK9%2Fk%2FMJERS0N1vidBQho5HHaHltg%2Bfp0alw1rhGPDsLnTmU73aNP5IGsrH1eLjaDCT6hVaYvpAFx4I1QFkin6FAZCx7Ek2MmSQkWOuqBJWC3N9g0AX3iN9AnD%2BMfgV5jE5%2FIKd%2Fv0nqiK%2F6jF%2F80aUPCdWESZhLhlgpFF2n4czSpto7pHw%2B3QNJi%2FT5gczBvvvrj%2FTg23Gb4E3TiAuIrlurr4DRt60WXjuTvie8Iz69xZ0aecagtncjKoLfyZ1gXBFx0n2qZ5sP51PkUoQ%2FE1NRQcO9%2F5Ffbb313JemStWBkCLqI7wgNhptxtIXM6QrFDH34%2B4UaWTIYtoc0hkIiNKDGnvegzitIVWeCMJj6MZEFIe%2Bsd19afj%2FVJXuPMPDSbwvMSYkHPCCbyymcycnTd8Fef95KGHf%2BZHtlOCa%2B0D54Y6iAAS8Scc7gDCNn%2FTedj9UKCUgFZ8P77LaH69z2ARRi92eM53ujt%2Bmw9Z5jEhiitV50NqqCidmoZKwukxD9SqPcYPD%2BUMeVTOVwdGjoToufqcIUgI3Xtf5MFQbmVqzE3zCrKnSC4VxMF5FeoV8VQlfuU00YTnzSk%2B3u%2FinYHOn8%2FYknMOiI18oGOqUBYVjuIHPp3RuzC%2Bg4A88W4TvWQMmvkNbh2zb%2FyvAYjKvp5gTi4CfGwI616oCnze29V5rktcerk2XrNsZzRQP%2Blb0MWlv8B9VIiIJ6YFJdkJaRELou%2BwgFtsirACRyTuAgcNyusvlWk12SamiGMo3heWZK%2FhILho1d343q6re8lGAFP1wmYR9eRZI7%2FveBeKZxJpC6m1iYxUIlCg6DAVEHBv0dKPqQ&X-Amz-Signature=217e91749b874d3ed5df8907d56057f76b3d736116f8fe99514008be00314a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

