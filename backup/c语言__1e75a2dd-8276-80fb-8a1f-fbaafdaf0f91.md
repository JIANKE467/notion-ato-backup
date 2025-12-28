
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D63ZSAG%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxU9DBso99Y2guPaDfY3A1OzjYY93vZR7TI9ztK%2F5ktAiEAn5v%2Bo9fOGVqbL77FJlsIn54qpUyBqFkvAmusCqucJXQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLC%2FzC8zdaRHCT6cDircAweJAracKVOmIGIDVxUWHXhSx7EWu8tmLjW8R5ctq9aHn9BsDxjxJIatpXcfPvuLPnE9cbptdwfqRDiqGgpc5WhTWa5TRlHx%2FmAex2LRxK74Awr7yAVxXfEyddliouwLuSeUkT0xaLTGeqQTBnEydxttyfIYYFMRtAAbXv2NyPEJrHV5qMp3X5XIMiHhus1GjUDH%2FUcxAcSF%2BL09UrlGq4BWkot2KxdDwxQBXa6dP3YauU6F6IDKdELjjWO%2FUA2yejsJm3A0fOLu7w3Zq9ACOBPD3zgbjbQchjuNe%2BLGyRMBoc1mFW%2FcoFLg7NMVNUyLResMJD9ONGOnsRWz9rKg36rzx7bzXTzxB0Hg9aobEpAV0%2FZ7FaCVO7xwvKfGgAOjDOh9v0bYON4887gKFHtLzjqmXQ28%2BnAk4KbAkcaV%2FusTwt7AK1ZH68TKpLSRoH8eXIpieLA2Gtw9WjXhf6%2BfIfDj%2FN82afxgSYIkBDDMM9KsOPHbGoERCcWFDihekVXQ%2BhlV7dN2VWrXGRM5nwg%2FfiCTGUsUSVQ%2Fx4ze78twsC25GTrY1oI%2F5cBER169u8CshxTSh4BqTdWfCEp%2F0MSe7F5eLYbDWKn1lG0jVaK3asKuirm%2BQ2GMFBDH0Q5FMKGKwsoGOqUBuFEQaH0V%2BB%2B%2Bylv3p%2BSRw%2FcNkWoJRQ4gnf0iU63xpDrIFK5OoPwaWjQ7UE%2BqzwKX0cyGHpwHm%2BFUFnJRmES7XmC5pvlMloP4x%2BkzyuJ27qBpg9W4P6Er2mDZD9Tl%2F%2BOm5ybNw%2Fu6h0c1iF%2BORVDMuSvzYd5j0HN%2FVQp3c%2BnytB0MvfiL8vF9AF7xhxpNoRPvmuUVNz35p7nHnnAFYLMPtdx1bt%2Fe&X-Amz-Signature=b57ed71f10ee174fc321341ab8b1d11a0c13d1864fbbb9638d38256e6c9f4501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDBRTIV%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdWoWVdpAaooqAs3hp9r%2Bv8bQ3cEiDnU2wGCiLpIzPJAiBPQXXvOo1gZ6fBKi5tavnn8xhc6etArJVF%2F5ekQz%2BdRCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMsnyPbBNXqVcBGiYbKtwDYhCc06%2BtXiZZdfm3Ynr7%2FQaYJsfYdOrC3rYr9Zk7ll3RpXJ3uxNolGFND71ZjMlF3ff1wxaQiNBf32%2BotIwWr%2F5wuuL0gxZkFpYIf8KmQ0Eu8kV19thA9G4HDmBk%2BiPDCg7W%2FVFz5NCByg70IAsAhsEu3HsPUdIYTeb%2BcPigWJGBTJrw3zUcrGMYqWdngn6UQxS8W9ojDTPCBNiDmJ7jNIkeWvR%2BNcbc7XA1DL9VYZpfiT4b7Wiy%2FQwLxzx7JCIM4PDYtcoAkUHXw1zM1udGAjYxFUcZ7%2Fd3obcCCDAEVwU2wLpMkPjhgWMra6sD3rwgEKGqC3HwSkxDTWsqrhn6p%2BBhOkgaXTbETHpaaWSOLF7GS3TzHfS6bDMhfili4oup92lzH9diYqVFDTbmGDkxnLHV2CY4w1TYdtBOx6Zp8i1d51KuM03X1K1NDZunfxFCCDWVNn1rTrx9ZXa7T1QMJ66tSW2RMwAdgx4paeDRZVmpofdLagTS5MgsIyfDJzN3bclyt4gXkGWONiLce1AdzuZ8AcAfuImKlFLLHHL7cVx0gCE%2BSYLGYPTnA65FG%2FdtY%2FIRgbAIS5%2FbIsQP20YHcN48S3FqUcPZxuTgGsvWPnaFs9yInY3%2Bqt7DMH4wvIrCygY6pgEXNWsWo5JqQT4Y%2BbobQn6z%2BiJnqPeoaV88cAy39MC1QxKVg6GnkyL3029NnHtK2EFodaebiVo3Nj35VZR2aTckT3aq%2FnZ6Ej4%2BRpib7GqKI8Zg3Q%2Find3TzWsv6rnr9D2J1g5VTHZGN0b4uue4g9BGyNQ%2Bx0IKhpUPxb41pCR5Ps7b7Jy7glHla6w0y4QzVLNzLX2gk0F0n3UEtPCLprqYUAsk1kXC&X-Amz-Signature=4b60fbc80c5202a59b25791d0392eccc02c74aa9eca6b294d2948d2fe6a8ced7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDBRTIV%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdWoWVdpAaooqAs3hp9r%2Bv8bQ3cEiDnU2wGCiLpIzPJAiBPQXXvOo1gZ6fBKi5tavnn8xhc6etArJVF%2F5ekQz%2BdRCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMsnyPbBNXqVcBGiYbKtwDYhCc06%2BtXiZZdfm3Ynr7%2FQaYJsfYdOrC3rYr9Zk7ll3RpXJ3uxNolGFND71ZjMlF3ff1wxaQiNBf32%2BotIwWr%2F5wuuL0gxZkFpYIf8KmQ0Eu8kV19thA9G4HDmBk%2BiPDCg7W%2FVFz5NCByg70IAsAhsEu3HsPUdIYTeb%2BcPigWJGBTJrw3zUcrGMYqWdngn6UQxS8W9ojDTPCBNiDmJ7jNIkeWvR%2BNcbc7XA1DL9VYZpfiT4b7Wiy%2FQwLxzx7JCIM4PDYtcoAkUHXw1zM1udGAjYxFUcZ7%2Fd3obcCCDAEVwU2wLpMkPjhgWMra6sD3rwgEKGqC3HwSkxDTWsqrhn6p%2BBhOkgaXTbETHpaaWSOLF7GS3TzHfS6bDMhfili4oup92lzH9diYqVFDTbmGDkxnLHV2CY4w1TYdtBOx6Zp8i1d51KuM03X1K1NDZunfxFCCDWVNn1rTrx9ZXa7T1QMJ66tSW2RMwAdgx4paeDRZVmpofdLagTS5MgsIyfDJzN3bclyt4gXkGWONiLce1AdzuZ8AcAfuImKlFLLHHL7cVx0gCE%2BSYLGYPTnA65FG%2FdtY%2FIRgbAIS5%2FbIsQP20YHcN48S3FqUcPZxuTgGsvWPnaFs9yInY3%2Bqt7DMH4wvIrCygY6pgEXNWsWo5JqQT4Y%2BbobQn6z%2BiJnqPeoaV88cAy39MC1QxKVg6GnkyL3029NnHtK2EFodaebiVo3Nj35VZR2aTckT3aq%2FnZ6Ej4%2BRpib7GqKI8Zg3Q%2Find3TzWsv6rnr9D2J1g5VTHZGN0b4uue4g9BGyNQ%2Bx0IKhpUPxb41pCR5Ps7b7Jy7glHla6w0y4QzVLNzLX2gk0F0n3UEtPCLprqYUAsk1kXC&X-Amz-Signature=a73222e3fd671a5e0df466d17f0ad0e82150f0ebddd433874f92a6f01b5bf3e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGVDOS2T%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDitl2T1RtIb%2BEUb%2Bqdyvx%2FUKBps90PBOby8VdbmzMFAiB17dcaPixF6Sl%2BjRHlEiBV%2BRUhNwta7m0ABD5p6c6lCir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMvuWy7ybFNrGBJ%2BP3KtwDvM8QQWIUfnjzgLFLuLpNEzUINUdKTy80urxLOx8foN4EdoKilTOXz34e15QzCpsRvk%2Fgvs4Xvyt9pS9hZcnLf2xjkjw0JZmF6ZEenCPNpl66VBLrMiPBIh3DP2vqSCa4XWyZwIGXuiQEBdvNUPWjqvyMJNmADiUEdjtQYBEjAOUCCr8VJHABaLY9zrQfX9H4LYwuq8%2F1GTnX7i6ZLp2nI7JXrkrlYQ7kruHg1kxjHyc7naJKmjwdr%2BbJD3XoTjv7kGupVapcRBKOe7yMlw9zjOr5l4wHJjPhq%2F9KqC2nHCVnMqWXfUHvypgX%2B22WHoXUFSzh4jbaTpTyN9yVHFDO3Ibf243eLBbpP7kjd0uInWfdGU0SzYacZOS1ewTyVsmusLPfh2cyfMZFEf77ivTbpVnMW3k0gn6RPEZUFCISlvcWXoLi%2F1ZYqUJPIZZ25te7UQ7VmMwHH5%2BKSFOdZkPG4WSXA%2Fm9DqK9oeDseJxAI9V08XBvki45ttK2kg7jc61oow6nlZAxn%2FDv9I5PRRdDRUiB9kLPaHHmBrLCWZZ%2Bi3ZjkcpZwNVRDm5Ouok9KR0xPNWK3ihdpeUDp7YBBg%2F519JShw1jNtAHJg3zJo6TYRR3x8cOaSKbZTjA06Qw%2B4rCygY6pgG9IL3EI%2F7ZbEjEtfWP5vOYt1f4dZbyivseNFVkYFpfgKvWq6DrsD0v5jDmrHaJfyt9rAUnIIcq3IbteRdBhW9RHFJxWPJ2RSnsLtqvAwZohgxNhEBfqWmOObQhhyvGyyDUo6VSI31AlSNOuXRaAI7QK0nA6XBxinr%2FGUa0vgPEAGh5zBWiWmM8HBTYkGjkNnqAELCYXwxBT7Wtrtraf%2BHvIbEeMDPr&X-Amz-Signature=39893b60bdaa58d53fac56323c7ed7c1613022a70981f6e228b8420a985e97d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGVDOS2T%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDitl2T1RtIb%2BEUb%2Bqdyvx%2FUKBps90PBOby8VdbmzMFAiB17dcaPixF6Sl%2BjRHlEiBV%2BRUhNwta7m0ABD5p6c6lCir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMvuWy7ybFNrGBJ%2BP3KtwDvM8QQWIUfnjzgLFLuLpNEzUINUdKTy80urxLOx8foN4EdoKilTOXz34e15QzCpsRvk%2Fgvs4Xvyt9pS9hZcnLf2xjkjw0JZmF6ZEenCPNpl66VBLrMiPBIh3DP2vqSCa4XWyZwIGXuiQEBdvNUPWjqvyMJNmADiUEdjtQYBEjAOUCCr8VJHABaLY9zrQfX9H4LYwuq8%2F1GTnX7i6ZLp2nI7JXrkrlYQ7kruHg1kxjHyc7naJKmjwdr%2BbJD3XoTjv7kGupVapcRBKOe7yMlw9zjOr5l4wHJjPhq%2F9KqC2nHCVnMqWXfUHvypgX%2B22WHoXUFSzh4jbaTpTyN9yVHFDO3Ibf243eLBbpP7kjd0uInWfdGU0SzYacZOS1ewTyVsmusLPfh2cyfMZFEf77ivTbpVnMW3k0gn6RPEZUFCISlvcWXoLi%2F1ZYqUJPIZZ25te7UQ7VmMwHH5%2BKSFOdZkPG4WSXA%2Fm9DqK9oeDseJxAI9V08XBvki45ttK2kg7jc61oow6nlZAxn%2FDv9I5PRRdDRUiB9kLPaHHmBrLCWZZ%2Bi3ZjkcpZwNVRDm5Ouok9KR0xPNWK3ihdpeUDp7YBBg%2F519JShw1jNtAHJg3zJo6TYRR3x8cOaSKbZTjA06Qw%2B4rCygY6pgG9IL3EI%2F7ZbEjEtfWP5vOYt1f4dZbyivseNFVkYFpfgKvWq6DrsD0v5jDmrHaJfyt9rAUnIIcq3IbteRdBhW9RHFJxWPJ2RSnsLtqvAwZohgxNhEBfqWmOObQhhyvGyyDUo6VSI31AlSNOuXRaAI7QK0nA6XBxinr%2FGUa0vgPEAGh5zBWiWmM8HBTYkGjkNnqAELCYXwxBT7Wtrtraf%2BHvIbEeMDPr&X-Amz-Signature=e8392667f75b53bcd6e31177a444548880586357d68d383177c95a24a7b94351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGVDOS2T%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDitl2T1RtIb%2BEUb%2Bqdyvx%2FUKBps90PBOby8VdbmzMFAiB17dcaPixF6Sl%2BjRHlEiBV%2BRUhNwta7m0ABD5p6c6lCir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMvuWy7ybFNrGBJ%2BP3KtwDvM8QQWIUfnjzgLFLuLpNEzUINUdKTy80urxLOx8foN4EdoKilTOXz34e15QzCpsRvk%2Fgvs4Xvyt9pS9hZcnLf2xjkjw0JZmF6ZEenCPNpl66VBLrMiPBIh3DP2vqSCa4XWyZwIGXuiQEBdvNUPWjqvyMJNmADiUEdjtQYBEjAOUCCr8VJHABaLY9zrQfX9H4LYwuq8%2F1GTnX7i6ZLp2nI7JXrkrlYQ7kruHg1kxjHyc7naJKmjwdr%2BbJD3XoTjv7kGupVapcRBKOe7yMlw9zjOr5l4wHJjPhq%2F9KqC2nHCVnMqWXfUHvypgX%2B22WHoXUFSzh4jbaTpTyN9yVHFDO3Ibf243eLBbpP7kjd0uInWfdGU0SzYacZOS1ewTyVsmusLPfh2cyfMZFEf77ivTbpVnMW3k0gn6RPEZUFCISlvcWXoLi%2F1ZYqUJPIZZ25te7UQ7VmMwHH5%2BKSFOdZkPG4WSXA%2Fm9DqK9oeDseJxAI9V08XBvki45ttK2kg7jc61oow6nlZAxn%2FDv9I5PRRdDRUiB9kLPaHHmBrLCWZZ%2Bi3ZjkcpZwNVRDm5Ouok9KR0xPNWK3ihdpeUDp7YBBg%2F519JShw1jNtAHJg3zJo6TYRR3x8cOaSKbZTjA06Qw%2B4rCygY6pgG9IL3EI%2F7ZbEjEtfWP5vOYt1f4dZbyivseNFVkYFpfgKvWq6DrsD0v5jDmrHaJfyt9rAUnIIcq3IbteRdBhW9RHFJxWPJ2RSnsLtqvAwZohgxNhEBfqWmOObQhhyvGyyDUo6VSI31AlSNOuXRaAI7QK0nA6XBxinr%2FGUa0vgPEAGh5zBWiWmM8HBTYkGjkNnqAELCYXwxBT7Wtrtraf%2BHvIbEeMDPr&X-Amz-Signature=7fbfbe19eeb31b592300f53906e3e75025617b3b6ad989d3ce579d65b2a8ebb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGVDOS2T%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDitl2T1RtIb%2BEUb%2Bqdyvx%2FUKBps90PBOby8VdbmzMFAiB17dcaPixF6Sl%2BjRHlEiBV%2BRUhNwta7m0ABD5p6c6lCir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMvuWy7ybFNrGBJ%2BP3KtwDvM8QQWIUfnjzgLFLuLpNEzUINUdKTy80urxLOx8foN4EdoKilTOXz34e15QzCpsRvk%2Fgvs4Xvyt9pS9hZcnLf2xjkjw0JZmF6ZEenCPNpl66VBLrMiPBIh3DP2vqSCa4XWyZwIGXuiQEBdvNUPWjqvyMJNmADiUEdjtQYBEjAOUCCr8VJHABaLY9zrQfX9H4LYwuq8%2F1GTnX7i6ZLp2nI7JXrkrlYQ7kruHg1kxjHyc7naJKmjwdr%2BbJD3XoTjv7kGupVapcRBKOe7yMlw9zjOr5l4wHJjPhq%2F9KqC2nHCVnMqWXfUHvypgX%2B22WHoXUFSzh4jbaTpTyN9yVHFDO3Ibf243eLBbpP7kjd0uInWfdGU0SzYacZOS1ewTyVsmusLPfh2cyfMZFEf77ivTbpVnMW3k0gn6RPEZUFCISlvcWXoLi%2F1ZYqUJPIZZ25te7UQ7VmMwHH5%2BKSFOdZkPG4WSXA%2Fm9DqK9oeDseJxAI9V08XBvki45ttK2kg7jc61oow6nlZAxn%2FDv9I5PRRdDRUiB9kLPaHHmBrLCWZZ%2Bi3ZjkcpZwNVRDm5Ouok9KR0xPNWK3ihdpeUDp7YBBg%2F519JShw1jNtAHJg3zJo6TYRR3x8cOaSKbZTjA06Qw%2B4rCygY6pgG9IL3EI%2F7ZbEjEtfWP5vOYt1f4dZbyivseNFVkYFpfgKvWq6DrsD0v5jDmrHaJfyt9rAUnIIcq3IbteRdBhW9RHFJxWPJ2RSnsLtqvAwZohgxNhEBfqWmOObQhhyvGyyDUo6VSI31AlSNOuXRaAI7QK0nA6XBxinr%2FGUa0vgPEAGh5zBWiWmM8HBTYkGjkNnqAELCYXwxBT7Wtrtraf%2BHvIbEeMDPr&X-Amz-Signature=b3dd88033c7d063d3fe4c6298bfdb1d0b9abb8855f2261a0c0f784866f1bcfca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGVDOS2T%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDitl2T1RtIb%2BEUb%2Bqdyvx%2FUKBps90PBOby8VdbmzMFAiB17dcaPixF6Sl%2BjRHlEiBV%2BRUhNwta7m0ABD5p6c6lCir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMvuWy7ybFNrGBJ%2BP3KtwDvM8QQWIUfnjzgLFLuLpNEzUINUdKTy80urxLOx8foN4EdoKilTOXz34e15QzCpsRvk%2Fgvs4Xvyt9pS9hZcnLf2xjkjw0JZmF6ZEenCPNpl66VBLrMiPBIh3DP2vqSCa4XWyZwIGXuiQEBdvNUPWjqvyMJNmADiUEdjtQYBEjAOUCCr8VJHABaLY9zrQfX9H4LYwuq8%2F1GTnX7i6ZLp2nI7JXrkrlYQ7kruHg1kxjHyc7naJKmjwdr%2BbJD3XoTjv7kGupVapcRBKOe7yMlw9zjOr5l4wHJjPhq%2F9KqC2nHCVnMqWXfUHvypgX%2B22WHoXUFSzh4jbaTpTyN9yVHFDO3Ibf243eLBbpP7kjd0uInWfdGU0SzYacZOS1ewTyVsmusLPfh2cyfMZFEf77ivTbpVnMW3k0gn6RPEZUFCISlvcWXoLi%2F1ZYqUJPIZZ25te7UQ7VmMwHH5%2BKSFOdZkPG4WSXA%2Fm9DqK9oeDseJxAI9V08XBvki45ttK2kg7jc61oow6nlZAxn%2FDv9I5PRRdDRUiB9kLPaHHmBrLCWZZ%2Bi3ZjkcpZwNVRDm5Ouok9KR0xPNWK3ihdpeUDp7YBBg%2F519JShw1jNtAHJg3zJo6TYRR3x8cOaSKbZTjA06Qw%2B4rCygY6pgG9IL3EI%2F7ZbEjEtfWP5vOYt1f4dZbyivseNFVkYFpfgKvWq6DrsD0v5jDmrHaJfyt9rAUnIIcq3IbteRdBhW9RHFJxWPJ2RSnsLtqvAwZohgxNhEBfqWmOObQhhyvGyyDUo6VSI31AlSNOuXRaAI7QK0nA6XBxinr%2FGUa0vgPEAGh5zBWiWmM8HBTYkGjkNnqAELCYXwxBT7Wtrtraf%2BHvIbEeMDPr&X-Amz-Signature=685311d0b22eb6e8bd67bd62da110dbbd87e3ef3c1a275837522346e3d24309c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGVDOS2T%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDitl2T1RtIb%2BEUb%2Bqdyvx%2FUKBps90PBOby8VdbmzMFAiB17dcaPixF6Sl%2BjRHlEiBV%2BRUhNwta7m0ABD5p6c6lCir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMvuWy7ybFNrGBJ%2BP3KtwDvM8QQWIUfnjzgLFLuLpNEzUINUdKTy80urxLOx8foN4EdoKilTOXz34e15QzCpsRvk%2Fgvs4Xvyt9pS9hZcnLf2xjkjw0JZmF6ZEenCPNpl66VBLrMiPBIh3DP2vqSCa4XWyZwIGXuiQEBdvNUPWjqvyMJNmADiUEdjtQYBEjAOUCCr8VJHABaLY9zrQfX9H4LYwuq8%2F1GTnX7i6ZLp2nI7JXrkrlYQ7kruHg1kxjHyc7naJKmjwdr%2BbJD3XoTjv7kGupVapcRBKOe7yMlw9zjOr5l4wHJjPhq%2F9KqC2nHCVnMqWXfUHvypgX%2B22WHoXUFSzh4jbaTpTyN9yVHFDO3Ibf243eLBbpP7kjd0uInWfdGU0SzYacZOS1ewTyVsmusLPfh2cyfMZFEf77ivTbpVnMW3k0gn6RPEZUFCISlvcWXoLi%2F1ZYqUJPIZZ25te7UQ7VmMwHH5%2BKSFOdZkPG4WSXA%2Fm9DqK9oeDseJxAI9V08XBvki45ttK2kg7jc61oow6nlZAxn%2FDv9I5PRRdDRUiB9kLPaHHmBrLCWZZ%2Bi3ZjkcpZwNVRDm5Ouok9KR0xPNWK3ihdpeUDp7YBBg%2F519JShw1jNtAHJg3zJo6TYRR3x8cOaSKbZTjA06Qw%2B4rCygY6pgG9IL3EI%2F7ZbEjEtfWP5vOYt1f4dZbyivseNFVkYFpfgKvWq6DrsD0v5jDmrHaJfyt9rAUnIIcq3IbteRdBhW9RHFJxWPJ2RSnsLtqvAwZohgxNhEBfqWmOObQhhyvGyyDUo6VSI31AlSNOuXRaAI7QK0nA6XBxinr%2FGUa0vgPEAGh5zBWiWmM8HBTYkGjkNnqAELCYXwxBT7Wtrtraf%2BHvIbEeMDPr&X-Amz-Signature=629b0e8a6c72e394dcb00288d639b0c2ac6b5cdee6b7370a575ad54f42528f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGVDOS2T%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDitl2T1RtIb%2BEUb%2Bqdyvx%2FUKBps90PBOby8VdbmzMFAiB17dcaPixF6Sl%2BjRHlEiBV%2BRUhNwta7m0ABD5p6c6lCir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMvuWy7ybFNrGBJ%2BP3KtwDvM8QQWIUfnjzgLFLuLpNEzUINUdKTy80urxLOx8foN4EdoKilTOXz34e15QzCpsRvk%2Fgvs4Xvyt9pS9hZcnLf2xjkjw0JZmF6ZEenCPNpl66VBLrMiPBIh3DP2vqSCa4XWyZwIGXuiQEBdvNUPWjqvyMJNmADiUEdjtQYBEjAOUCCr8VJHABaLY9zrQfX9H4LYwuq8%2F1GTnX7i6ZLp2nI7JXrkrlYQ7kruHg1kxjHyc7naJKmjwdr%2BbJD3XoTjv7kGupVapcRBKOe7yMlw9zjOr5l4wHJjPhq%2F9KqC2nHCVnMqWXfUHvypgX%2B22WHoXUFSzh4jbaTpTyN9yVHFDO3Ibf243eLBbpP7kjd0uInWfdGU0SzYacZOS1ewTyVsmusLPfh2cyfMZFEf77ivTbpVnMW3k0gn6RPEZUFCISlvcWXoLi%2F1ZYqUJPIZZ25te7UQ7VmMwHH5%2BKSFOdZkPG4WSXA%2Fm9DqK9oeDseJxAI9V08XBvki45ttK2kg7jc61oow6nlZAxn%2FDv9I5PRRdDRUiB9kLPaHHmBrLCWZZ%2Bi3ZjkcpZwNVRDm5Ouok9KR0xPNWK3ihdpeUDp7YBBg%2F519JShw1jNtAHJg3zJo6TYRR3x8cOaSKbZTjA06Qw%2B4rCygY6pgG9IL3EI%2F7ZbEjEtfWP5vOYt1f4dZbyivseNFVkYFpfgKvWq6DrsD0v5jDmrHaJfyt9rAUnIIcq3IbteRdBhW9RHFJxWPJ2RSnsLtqvAwZohgxNhEBfqWmOObQhhyvGyyDUo6VSI31AlSNOuXRaAI7QK0nA6XBxinr%2FGUa0vgPEAGh5zBWiWmM8HBTYkGjkNnqAELCYXwxBT7Wtrtraf%2BHvIbEeMDPr&X-Amz-Signature=a4b318a0efb489a83e0e2a4f03a64fc36742613a993cbd78efefcceff0ce852e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RKZMJN2%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuQNnVI3eErbkvRPedeIzkQVsro2uHDr50QctFjtNASQIgUlFkJg9VD2yMrB1gFTKy4tU83muOzP3tqQqiC7WAQU0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGRdXhLgwQMiI%2B12mircA8HD9xKkzgO0%2FD5ZnIoETm9DZTv3pXjSYPyAk36L%2FL2yOBhJE55yI6r6ZCKKf7mmeaVFLo0kdLsQJrG33QR6QdMrF1iPj%2BhDyS4WkDk1hZ6BiKRu3SDc0M9aX8ss3M5XB6mDCoBan9VMy6%2F9I3aSDV%2Fm065UxusTbQkK%2FS3P2N5ZPlwpaWr1JR54fRGw4BBogHFyBZLzus1bTiBVywRBrJCgcEwx8qZ08D%2BQk03FM3iBPWEfyagBCxTbYU8RNgyA%2FExnqZ6%2B0MLUckbajLgo49bfoZmmVDKtTdG6spuyRH3ADGHWcs53U1oxwk9SwbnqBW%2B0PS%2BFrlK5z6BskBah%2FVQUmzYkdIqB5vU2qdGVRgQ8%2BpZ9AEqEKDpnLmheGOcOELsX3jYff0Mu7QnOTaKhxHil9Ajf20%2BE3qAFPkwx9qEvWIJ%2BVRtKD9MSrghZayY97hne3V3rlsf3RjifqGZsufon7%2Brn%2FyqYojGfpPHO38EBlcxFAGwuV8zn%2FHb9Obrok%2FUXIZ10RbaIK5Pn5ZNzZntXCSM9DX8SFwI1EzkUltEwKW4sRTRcea7u68UrntLX9rBrTrEuSsJURKGHyivuUSzTx5odsvqa%2FbowoKMGQJ%2Bhnt9Z91mtkOR%2Be2XsMKKKwsoGOqUBhrLfdFXnzaUW8ZJSzSbUETQM8g7E5WCYbIuDXUd3gpSSsUibIo5y5PbnT%2BIGWBnyaXEc5MQ2BSgRReEGnSbBXa7VPm6YHVuKrhITHRH4dmkDctukNFxuNvfHvn8k9vNZvu3DC3Jj1wlYcSg1DVtch30AWHuBsiRmh3iH8OQgI%2FOi%2BDW9NVqZFPFsLw%2Bfm14H5tjep66HFoBrNYpXxlxCqF%2Bokc4O&X-Amz-Signature=b549014db7f7969288cbd1e5d5b5b468b22af2b0b6f21c3083a01c25594f6881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RKZMJN2%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuQNnVI3eErbkvRPedeIzkQVsro2uHDr50QctFjtNASQIgUlFkJg9VD2yMrB1gFTKy4tU83muOzP3tqQqiC7WAQU0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGRdXhLgwQMiI%2B12mircA8HD9xKkzgO0%2FD5ZnIoETm9DZTv3pXjSYPyAk36L%2FL2yOBhJE55yI6r6ZCKKf7mmeaVFLo0kdLsQJrG33QR6QdMrF1iPj%2BhDyS4WkDk1hZ6BiKRu3SDc0M9aX8ss3M5XB6mDCoBan9VMy6%2F9I3aSDV%2Fm065UxusTbQkK%2FS3P2N5ZPlwpaWr1JR54fRGw4BBogHFyBZLzus1bTiBVywRBrJCgcEwx8qZ08D%2BQk03FM3iBPWEfyagBCxTbYU8RNgyA%2FExnqZ6%2B0MLUckbajLgo49bfoZmmVDKtTdG6spuyRH3ADGHWcs53U1oxwk9SwbnqBW%2B0PS%2BFrlK5z6BskBah%2FVQUmzYkdIqB5vU2qdGVRgQ8%2BpZ9AEqEKDpnLmheGOcOELsX3jYff0Mu7QnOTaKhxHil9Ajf20%2BE3qAFPkwx9qEvWIJ%2BVRtKD9MSrghZayY97hne3V3rlsf3RjifqGZsufon7%2Brn%2FyqYojGfpPHO38EBlcxFAGwuV8zn%2FHb9Obrok%2FUXIZ10RbaIK5Pn5ZNzZntXCSM9DX8SFwI1EzkUltEwKW4sRTRcea7u68UrntLX9rBrTrEuSsJURKGHyivuUSzTx5odsvqa%2FbowoKMGQJ%2Bhnt9Z91mtkOR%2Be2XsMKKKwsoGOqUBhrLfdFXnzaUW8ZJSzSbUETQM8g7E5WCYbIuDXUd3gpSSsUibIo5y5PbnT%2BIGWBnyaXEc5MQ2BSgRReEGnSbBXa7VPm6YHVuKrhITHRH4dmkDctukNFxuNvfHvn8k9vNZvu3DC3Jj1wlYcSg1DVtch30AWHuBsiRmh3iH8OQgI%2FOi%2BDW9NVqZFPFsLw%2Bfm14H5tjep66HFoBrNYpXxlxCqF%2Bokc4O&X-Amz-Signature=71fdfe5a8a37d4d95f42221951935d2f8b9afc03cc7ff528d0891915c916ff63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RKZMJN2%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuQNnVI3eErbkvRPedeIzkQVsro2uHDr50QctFjtNASQIgUlFkJg9VD2yMrB1gFTKy4tU83muOzP3tqQqiC7WAQU0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGRdXhLgwQMiI%2B12mircA8HD9xKkzgO0%2FD5ZnIoETm9DZTv3pXjSYPyAk36L%2FL2yOBhJE55yI6r6ZCKKf7mmeaVFLo0kdLsQJrG33QR6QdMrF1iPj%2BhDyS4WkDk1hZ6BiKRu3SDc0M9aX8ss3M5XB6mDCoBan9VMy6%2F9I3aSDV%2Fm065UxusTbQkK%2FS3P2N5ZPlwpaWr1JR54fRGw4BBogHFyBZLzus1bTiBVywRBrJCgcEwx8qZ08D%2BQk03FM3iBPWEfyagBCxTbYU8RNgyA%2FExnqZ6%2B0MLUckbajLgo49bfoZmmVDKtTdG6spuyRH3ADGHWcs53U1oxwk9SwbnqBW%2B0PS%2BFrlK5z6BskBah%2FVQUmzYkdIqB5vU2qdGVRgQ8%2BpZ9AEqEKDpnLmheGOcOELsX3jYff0Mu7QnOTaKhxHil9Ajf20%2BE3qAFPkwx9qEvWIJ%2BVRtKD9MSrghZayY97hne3V3rlsf3RjifqGZsufon7%2Brn%2FyqYojGfpPHO38EBlcxFAGwuV8zn%2FHb9Obrok%2FUXIZ10RbaIK5Pn5ZNzZntXCSM9DX8SFwI1EzkUltEwKW4sRTRcea7u68UrntLX9rBrTrEuSsJURKGHyivuUSzTx5odsvqa%2FbowoKMGQJ%2Bhnt9Z91mtkOR%2Be2XsMKKKwsoGOqUBhrLfdFXnzaUW8ZJSzSbUETQM8g7E5WCYbIuDXUd3gpSSsUibIo5y5PbnT%2BIGWBnyaXEc5MQ2BSgRReEGnSbBXa7VPm6YHVuKrhITHRH4dmkDctukNFxuNvfHvn8k9vNZvu3DC3Jj1wlYcSg1DVtch30AWHuBsiRmh3iH8OQgI%2FOi%2BDW9NVqZFPFsLw%2Bfm14H5tjep66HFoBrNYpXxlxCqF%2Bokc4O&X-Amz-Signature=23a7da22f6514846dce3de1411b6f85154c323e5c6bbd6c39457670b1b25f141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RKZMJN2%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuQNnVI3eErbkvRPedeIzkQVsro2uHDr50QctFjtNASQIgUlFkJg9VD2yMrB1gFTKy4tU83muOzP3tqQqiC7WAQU0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGRdXhLgwQMiI%2B12mircA8HD9xKkzgO0%2FD5ZnIoETm9DZTv3pXjSYPyAk36L%2FL2yOBhJE55yI6r6ZCKKf7mmeaVFLo0kdLsQJrG33QR6QdMrF1iPj%2BhDyS4WkDk1hZ6BiKRu3SDc0M9aX8ss3M5XB6mDCoBan9VMy6%2F9I3aSDV%2Fm065UxusTbQkK%2FS3P2N5ZPlwpaWr1JR54fRGw4BBogHFyBZLzus1bTiBVywRBrJCgcEwx8qZ08D%2BQk03FM3iBPWEfyagBCxTbYU8RNgyA%2FExnqZ6%2B0MLUckbajLgo49bfoZmmVDKtTdG6spuyRH3ADGHWcs53U1oxwk9SwbnqBW%2B0PS%2BFrlK5z6BskBah%2FVQUmzYkdIqB5vU2qdGVRgQ8%2BpZ9AEqEKDpnLmheGOcOELsX3jYff0Mu7QnOTaKhxHil9Ajf20%2BE3qAFPkwx9qEvWIJ%2BVRtKD9MSrghZayY97hne3V3rlsf3RjifqGZsufon7%2Brn%2FyqYojGfpPHO38EBlcxFAGwuV8zn%2FHb9Obrok%2FUXIZ10RbaIK5Pn5ZNzZntXCSM9DX8SFwI1EzkUltEwKW4sRTRcea7u68UrntLX9rBrTrEuSsJURKGHyivuUSzTx5odsvqa%2FbowoKMGQJ%2Bhnt9Z91mtkOR%2Be2XsMKKKwsoGOqUBhrLfdFXnzaUW8ZJSzSbUETQM8g7E5WCYbIuDXUd3gpSSsUibIo5y5PbnT%2BIGWBnyaXEc5MQ2BSgRReEGnSbBXa7VPm6YHVuKrhITHRH4dmkDctukNFxuNvfHvn8k9vNZvu3DC3Jj1wlYcSg1DVtch30AWHuBsiRmh3iH8OQgI%2FOi%2BDW9NVqZFPFsLw%2Bfm14H5tjep66HFoBrNYpXxlxCqF%2Bokc4O&X-Amz-Signature=6f586283584e47d5bf07640feb423eddbad255615fdc9027b8b813390ab3ee4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RKZMJN2%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuQNnVI3eErbkvRPedeIzkQVsro2uHDr50QctFjtNASQIgUlFkJg9VD2yMrB1gFTKy4tU83muOzP3tqQqiC7WAQU0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGRdXhLgwQMiI%2B12mircA8HD9xKkzgO0%2FD5ZnIoETm9DZTv3pXjSYPyAk36L%2FL2yOBhJE55yI6r6ZCKKf7mmeaVFLo0kdLsQJrG33QR6QdMrF1iPj%2BhDyS4WkDk1hZ6BiKRu3SDc0M9aX8ss3M5XB6mDCoBan9VMy6%2F9I3aSDV%2Fm065UxusTbQkK%2FS3P2N5ZPlwpaWr1JR54fRGw4BBogHFyBZLzus1bTiBVywRBrJCgcEwx8qZ08D%2BQk03FM3iBPWEfyagBCxTbYU8RNgyA%2FExnqZ6%2B0MLUckbajLgo49bfoZmmVDKtTdG6spuyRH3ADGHWcs53U1oxwk9SwbnqBW%2B0PS%2BFrlK5z6BskBah%2FVQUmzYkdIqB5vU2qdGVRgQ8%2BpZ9AEqEKDpnLmheGOcOELsX3jYff0Mu7QnOTaKhxHil9Ajf20%2BE3qAFPkwx9qEvWIJ%2BVRtKD9MSrghZayY97hne3V3rlsf3RjifqGZsufon7%2Brn%2FyqYojGfpPHO38EBlcxFAGwuV8zn%2FHb9Obrok%2FUXIZ10RbaIK5Pn5ZNzZntXCSM9DX8SFwI1EzkUltEwKW4sRTRcea7u68UrntLX9rBrTrEuSsJURKGHyivuUSzTx5odsvqa%2FbowoKMGQJ%2Bhnt9Z91mtkOR%2Be2XsMKKKwsoGOqUBhrLfdFXnzaUW8ZJSzSbUETQM8g7E5WCYbIuDXUd3gpSSsUibIo5y5PbnT%2BIGWBnyaXEc5MQ2BSgRReEGnSbBXa7VPm6YHVuKrhITHRH4dmkDctukNFxuNvfHvn8k9vNZvu3DC3Jj1wlYcSg1DVtch30AWHuBsiRmh3iH8OQgI%2FOi%2BDW9NVqZFPFsLw%2Bfm14H5tjep66HFoBrNYpXxlxCqF%2Bokc4O&X-Amz-Signature=5af863a0dfbde2f37f7492a61fa52d92e1490056cf123b55733da3f8c6672de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKDDNEST%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3W4qaDxQhNnQ%2Bk0otTe3WR8Xq%2F%2Bz4o%2F6Ggy%2FLrnWBIAiAIXAcoxF3%2BSNDOThS1420BsZlTpT3hOnuofPlD5kkNvir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM26n6a22iIJzBbHNAKtwDXq8hWPmB2oia%2By0saUaF6o2BxQH%2BeiEpXU4c%2BpvvYvHF6QETObTTIbZTNQ7frL7dQrrfvG%2BQfXmHi19vek2qjWwLJqwZ2imIZCmNaOankz5Kb4AYkhYMBhWJtBM0n3WAsFve%2B%2FdKY%2FDZktnD40lMcB7FZpv6Gk8X%2FZTLeEs%2BA1rJhUbPjZt7BjTHMwgy66GG82kr3GYngqHxt5vizr0MxKm3QVKdiSwm4jUZnm79i2Rlk8eRe1VrfLP45Dpllz3jSZ7fA8St3u9d0K30J10gRBhYtiY5uIMuPgxqC5NVvBX3g6em2T97wDrRfb2mpgL%2FUZ84InJ64uGMQYYkoj%2B3ed8ZZ9BAWkfq40f540dMqw8cM9D9fOVFKifIAhmJrIYYCv4r5P15%2BKiALfpFmcVedIIy1rk6Fh5Wg2AWPtB8SHlDve49ycPiWvCxPCP98lr%2Bnc4%2FyDqLaVduwjYBY%2FxB4F5Fxon4%2Fdt6V4paOlG4o9kmJQr%2B4%2FkpSwzd4ciDfCglii0OhO%2FS8iLm4z2W7qrFB0ePXMCacGXqJiQsMK7CTHc5MdNjzUjI3KinBkaYCW5qKGv02vJHQsn1Nh9DmHC%2Bej8YEsnBWnTxumKHlax24pp5ABBlBwSIxq%2BLEn4wnIvCygY6pgHhxZK4tqUL45bxTdy6fYJlTbk8ScmzVdzW2jghylbTqpNwJuv6kG7D7kclxSkvOhHuva8fLSNSh3Y9FD7MoK1CscHQ3ih3wmf9VuZ03fPeDUCSbr1Ha%2B6VeQcYa7WRJQL4IDXSTXoFAq0yHJU6VTjwQd4KEV%2BFLws%2FcF%2FxoNIdw8RMAYqc6hTjhE5UDCz%2F%2Fn7w2PZmSkSVLF1X7W3iXi%2Flh9ouhk8c&X-Amz-Signature=d3d51ce5c3bd594d177110e9924edaebdac298ca347c6e84404eb4b7ee8220a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKDDNEST%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3W4qaDxQhNnQ%2Bk0otTe3WR8Xq%2F%2Bz4o%2F6Ggy%2FLrnWBIAiAIXAcoxF3%2BSNDOThS1420BsZlTpT3hOnuofPlD5kkNvir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM26n6a22iIJzBbHNAKtwDXq8hWPmB2oia%2By0saUaF6o2BxQH%2BeiEpXU4c%2BpvvYvHF6QETObTTIbZTNQ7frL7dQrrfvG%2BQfXmHi19vek2qjWwLJqwZ2imIZCmNaOankz5Kb4AYkhYMBhWJtBM0n3WAsFve%2B%2FdKY%2FDZktnD40lMcB7FZpv6Gk8X%2FZTLeEs%2BA1rJhUbPjZt7BjTHMwgy66GG82kr3GYngqHxt5vizr0MxKm3QVKdiSwm4jUZnm79i2Rlk8eRe1VrfLP45Dpllz3jSZ7fA8St3u9d0K30J10gRBhYtiY5uIMuPgxqC5NVvBX3g6em2T97wDrRfb2mpgL%2FUZ84InJ64uGMQYYkoj%2B3ed8ZZ9BAWkfq40f540dMqw8cM9D9fOVFKifIAhmJrIYYCv4r5P15%2BKiALfpFmcVedIIy1rk6Fh5Wg2AWPtB8SHlDve49ycPiWvCxPCP98lr%2Bnc4%2FyDqLaVduwjYBY%2FxB4F5Fxon4%2Fdt6V4paOlG4o9kmJQr%2B4%2FkpSwzd4ciDfCglii0OhO%2FS8iLm4z2W7qrFB0ePXMCacGXqJiQsMK7CTHc5MdNjzUjI3KinBkaYCW5qKGv02vJHQsn1Nh9DmHC%2Bej8YEsnBWnTxumKHlax24pp5ABBlBwSIxq%2BLEn4wnIvCygY6pgHhxZK4tqUL45bxTdy6fYJlTbk8ScmzVdzW2jghylbTqpNwJuv6kG7D7kclxSkvOhHuva8fLSNSh3Y9FD7MoK1CscHQ3ih3wmf9VuZ03fPeDUCSbr1Ha%2B6VeQcYa7WRJQL4IDXSTXoFAq0yHJU6VTjwQd4KEV%2BFLws%2FcF%2FxoNIdw8RMAYqc6hTjhE5UDCz%2F%2Fn7w2PZmSkSVLF1X7W3iXi%2Flh9ouhk8c&X-Amz-Signature=9eed4f125853a72fb9f721415ec1cab073f9f8f61248d22f5fac3f4c6040193a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKDDNEST%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3W4qaDxQhNnQ%2Bk0otTe3WR8Xq%2F%2Bz4o%2F6Ggy%2FLrnWBIAiAIXAcoxF3%2BSNDOThS1420BsZlTpT3hOnuofPlD5kkNvir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM26n6a22iIJzBbHNAKtwDXq8hWPmB2oia%2By0saUaF6o2BxQH%2BeiEpXU4c%2BpvvYvHF6QETObTTIbZTNQ7frL7dQrrfvG%2BQfXmHi19vek2qjWwLJqwZ2imIZCmNaOankz5Kb4AYkhYMBhWJtBM0n3WAsFve%2B%2FdKY%2FDZktnD40lMcB7FZpv6Gk8X%2FZTLeEs%2BA1rJhUbPjZt7BjTHMwgy66GG82kr3GYngqHxt5vizr0MxKm3QVKdiSwm4jUZnm79i2Rlk8eRe1VrfLP45Dpllz3jSZ7fA8St3u9d0K30J10gRBhYtiY5uIMuPgxqC5NVvBX3g6em2T97wDrRfb2mpgL%2FUZ84InJ64uGMQYYkoj%2B3ed8ZZ9BAWkfq40f540dMqw8cM9D9fOVFKifIAhmJrIYYCv4r5P15%2BKiALfpFmcVedIIy1rk6Fh5Wg2AWPtB8SHlDve49ycPiWvCxPCP98lr%2Bnc4%2FyDqLaVduwjYBY%2FxB4F5Fxon4%2Fdt6V4paOlG4o9kmJQr%2B4%2FkpSwzd4ciDfCglii0OhO%2FS8iLm4z2W7qrFB0ePXMCacGXqJiQsMK7CTHc5MdNjzUjI3KinBkaYCW5qKGv02vJHQsn1Nh9DmHC%2Bej8YEsnBWnTxumKHlax24pp5ABBlBwSIxq%2BLEn4wnIvCygY6pgHhxZK4tqUL45bxTdy6fYJlTbk8ScmzVdzW2jghylbTqpNwJuv6kG7D7kclxSkvOhHuva8fLSNSh3Y9FD7MoK1CscHQ3ih3wmf9VuZ03fPeDUCSbr1Ha%2B6VeQcYa7WRJQL4IDXSTXoFAq0yHJU6VTjwQd4KEV%2BFLws%2FcF%2FxoNIdw8RMAYqc6hTjhE5UDCz%2F%2Fn7w2PZmSkSVLF1X7W3iXi%2Flh9ouhk8c&X-Amz-Signature=79043bb8c55f12fd55a3c53819cc0b1e7265a8ba2bc75bf3fd0a3141e63912e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734EVHKJ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FMLaDzpiEOW4MkQiH94pIiScosBMrEHewpAEAkSNjsAiABr6Z4PbjgSAVr6nmBfp2TT3YX0M99RRV%2F90pWAAYxGir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMdYny%2Fd52KcWWpp79KtwDtjmyEUeieLwkw%2BOpOEYGN2Iqi50tsqWoZ3XtUnXqBcDJ%2FXSY7B6nuvrB%2FB4oxGDQPjYCbjCIjlnMeLw69DgIn1tlDpbH1kFXwea%2Bl4ERpD%2FIMjNwZH%2B5gvSghuygHPtsRmK9mczObQucprSFvesOtz14%2FQ8lqRlE9Ai0fW5MNbFLqeJzGBQa%2BBta9Z2s7md%2Fm0sUi33hjj%2Bp%2BTGm7LALDqGrisRzHY%2BXloqDqXjiKnq5zPHbXCWe%2FJA%2FVqcrS5QKu659INxWYoxy0nnE8Hl4eR9afzY0u1WPubtGrwpNzIuv6%2Bx0RvMjvmQxndWIMRMohRnrV6VxnA%2BgqYIA1VouEiUsk1JdLdp8ntWW7xJ8d7Wnv%2BQQEcdQm9%2B6ttCi8vVgBqvr3xQAFrtFwce4dz4mCFnoTc0nFo%2BX4rtGeb0uYMEHd5ykSb4OHbf%2Bt6%2FBeF0pEO2lBMy3EFZ7cDkMKVNcyChKrb6iCMtuWHJRdYqsQcHHZIK63m6x0OylKCFRcqTFTiYhBjitylwZAhNUmzLazq7I%2FenBuiLoEATOHahHhRGA%2F55nwQO4HsxnA4F10sjaZXPb5ufsJHGcV4%2FfhEEr%2BfPXrTd5RaZMFf7X5IEnxs8eNbRCGIK6TYYddjkwm4vCygY6pgEMw%2FFOIKhuGLRqWBLS1dITF%2B3Q17fcgMWeAaWB9XIT9mgZVoQ3cXWIDgZ89wUrUMQz1iS%2FXxOB%2FUbsGq%2BEcRPK3oZ9hTr5xixRvBZY57jOzVeBw3sQA5ZAVlsCOHCQFLskqO%2FscjySfjW%2Ft5SbyPydolYznflvJMKyMrJIh9mHAUpEUs%2Bes3GxKG7THSVaO5jzfGbji86K5Z3UJdasBZceGBo48OVf&X-Amz-Signature=a0b02a3c8799689022d38a4b310f7aae2eae5bb82e084729bdd8e225915ad181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734EVHKJ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FMLaDzpiEOW4MkQiH94pIiScosBMrEHewpAEAkSNjsAiABr6Z4PbjgSAVr6nmBfp2TT3YX0M99RRV%2F90pWAAYxGir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMdYny%2Fd52KcWWpp79KtwDtjmyEUeieLwkw%2BOpOEYGN2Iqi50tsqWoZ3XtUnXqBcDJ%2FXSY7B6nuvrB%2FB4oxGDQPjYCbjCIjlnMeLw69DgIn1tlDpbH1kFXwea%2Bl4ERpD%2FIMjNwZH%2B5gvSghuygHPtsRmK9mczObQucprSFvesOtz14%2FQ8lqRlE9Ai0fW5MNbFLqeJzGBQa%2BBta9Z2s7md%2Fm0sUi33hjj%2Bp%2BTGm7LALDqGrisRzHY%2BXloqDqXjiKnq5zPHbXCWe%2FJA%2FVqcrS5QKu659INxWYoxy0nnE8Hl4eR9afzY0u1WPubtGrwpNzIuv6%2Bx0RvMjvmQxndWIMRMohRnrV6VxnA%2BgqYIA1VouEiUsk1JdLdp8ntWW7xJ8d7Wnv%2BQQEcdQm9%2B6ttCi8vVgBqvr3xQAFrtFwce4dz4mCFnoTc0nFo%2BX4rtGeb0uYMEHd5ykSb4OHbf%2Bt6%2FBeF0pEO2lBMy3EFZ7cDkMKVNcyChKrb6iCMtuWHJRdYqsQcHHZIK63m6x0OylKCFRcqTFTiYhBjitylwZAhNUmzLazq7I%2FenBuiLoEATOHahHhRGA%2F55nwQO4HsxnA4F10sjaZXPb5ufsJHGcV4%2FfhEEr%2BfPXrTd5RaZMFf7X5IEnxs8eNbRCGIK6TYYddjkwm4vCygY6pgEMw%2FFOIKhuGLRqWBLS1dITF%2B3Q17fcgMWeAaWB9XIT9mgZVoQ3cXWIDgZ89wUrUMQz1iS%2FXxOB%2FUbsGq%2BEcRPK3oZ9hTr5xixRvBZY57jOzVeBw3sQA5ZAVlsCOHCQFLskqO%2FscjySfjW%2Ft5SbyPydolYznflvJMKyMrJIh9mHAUpEUs%2Bes3GxKG7THSVaO5jzfGbji86K5Z3UJdasBZceGBo48OVf&X-Amz-Signature=c576ce89d5e0478b4bdc1ac2644f5b7e096e1bc68208af783144a7869a1094fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPSTQWDE%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbS3CblkdLTNfgxi81AACnN%2Bh1kAMtjLRlHgZVPMimlAiEA%2BS52R%2F681zybTBCoYG54WadU0BP8knu0HTyzp75Hbnoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNWXRwAc8bzxr4XLfircAzUuL2lwAgZ4wH8dEkNBgIGLIi6l2kv74cMU4Pg0wY3uqYhVFJEKnDPM6VlEMjQL5cZFfI73bCMhwhejC3f49uQaojn155x7N1YgrgeniMlRTM5nyvmjJR6SQByYuWwa5VZhKEwbChKV3KhM6FQA%2BzGeoK%2FS3W%2BtOKJl7xA9TwAb18Va1S5qIqKD8xb%2FhEYHEp3FRXrw8c45wvZSbHNCh3jgmPKYRaMISsVReZkLPLI3Xbl5yWhp5EsKu5M%2BL0M7TElIg%2F2%2Fl3ISVeJLLn%2BzaFb8xMkZTWh9a%2BER2WZNaemYZkO7luTvBV8Lwau23QERvA5ccLEVlyJJim%2Br%2BqxVIt6pFwck2uRgRU1SdAqN4g%2BSuyB5oHLx6naSmUwpMCMp4ic5LdRVxYPrVI%2BdA4h8uKU6OxLgoYoGg1gpSWWMgTEsCul0LBZfgIGipNTv0FXO04mu7yWKXo6cGFsLJcQwbZRmyZFXAcvshGVNqJUGb4odL3h%2BURL4ER7IeWfyFxQIzcH1U1u1dZcKhyADSaT6%2Fy6UVXthG9%2BoXVdE9Ex7YNyMe0w5%2B65OJNrf%2FpUxVM92k1mTVy8fpRve1Vcy0YNIHbUUiMxGeRvORjIKAjWEeoGEdhJzcreuXg1MIwnKMPOKwsoGOqUBkrHaa9wgamu%2FVUKiH1QVxdIDANjAC2SzXjx1qruPNghCX6JRbEcDnfUgcPaBcsID0Na706lbRIeO1ueLgbvfNtgSAENbpsGD1bR2aP0edu2zBBUOh7Q2wI6BZ7As9u%2FAOiWFWKeKDEnjsdb3V2fH5XdnFzQ2k5NIfNEU2M4n4%2F7aOAafeed2dD7gEffOhPuuxVE0pf3X6L5To%2BY%2F98BDJr8WgILe&X-Amz-Signature=bc57d8f44b7ea726d9920f1afbcab4ea6cc66325fb5ef36bc3a6f4d344d2a56d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPSTQWDE%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbS3CblkdLTNfgxi81AACnN%2Bh1kAMtjLRlHgZVPMimlAiEA%2BS52R%2F681zybTBCoYG54WadU0BP8knu0HTyzp75Hbnoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNWXRwAc8bzxr4XLfircAzUuL2lwAgZ4wH8dEkNBgIGLIi6l2kv74cMU4Pg0wY3uqYhVFJEKnDPM6VlEMjQL5cZFfI73bCMhwhejC3f49uQaojn155x7N1YgrgeniMlRTM5nyvmjJR6SQByYuWwa5VZhKEwbChKV3KhM6FQA%2BzGeoK%2FS3W%2BtOKJl7xA9TwAb18Va1S5qIqKD8xb%2FhEYHEp3FRXrw8c45wvZSbHNCh3jgmPKYRaMISsVReZkLPLI3Xbl5yWhp5EsKu5M%2BL0M7TElIg%2F2%2Fl3ISVeJLLn%2BzaFb8xMkZTWh9a%2BER2WZNaemYZkO7luTvBV8Lwau23QERvA5ccLEVlyJJim%2Br%2BqxVIt6pFwck2uRgRU1SdAqN4g%2BSuyB5oHLx6naSmUwpMCMp4ic5LdRVxYPrVI%2BdA4h8uKU6OxLgoYoGg1gpSWWMgTEsCul0LBZfgIGipNTv0FXO04mu7yWKXo6cGFsLJcQwbZRmyZFXAcvshGVNqJUGb4odL3h%2BURL4ER7IeWfyFxQIzcH1U1u1dZcKhyADSaT6%2Fy6UVXthG9%2BoXVdE9Ex7YNyMe0w5%2B65OJNrf%2FpUxVM92k1mTVy8fpRve1Vcy0YNIHbUUiMxGeRvORjIKAjWEeoGEdhJzcreuXg1MIwnKMPOKwsoGOqUBkrHaa9wgamu%2FVUKiH1QVxdIDANjAC2SzXjx1qruPNghCX6JRbEcDnfUgcPaBcsID0Na706lbRIeO1ueLgbvfNtgSAENbpsGD1bR2aP0edu2zBBUOh7Q2wI6BZ7As9u%2FAOiWFWKeKDEnjsdb3V2fH5XdnFzQ2k5NIfNEU2M4n4%2F7aOAafeed2dD7gEffOhPuuxVE0pf3X6L5To%2BY%2F98BDJr8WgILe&X-Amz-Signature=12a066292137aa9381ed071e1e4e47291f255cefc631828f2694166b9dc6fb1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPSTQWDE%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbS3CblkdLTNfgxi81AACnN%2Bh1kAMtjLRlHgZVPMimlAiEA%2BS52R%2F681zybTBCoYG54WadU0BP8knu0HTyzp75Hbnoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNWXRwAc8bzxr4XLfircAzUuL2lwAgZ4wH8dEkNBgIGLIi6l2kv74cMU4Pg0wY3uqYhVFJEKnDPM6VlEMjQL5cZFfI73bCMhwhejC3f49uQaojn155x7N1YgrgeniMlRTM5nyvmjJR6SQByYuWwa5VZhKEwbChKV3KhM6FQA%2BzGeoK%2FS3W%2BtOKJl7xA9TwAb18Va1S5qIqKD8xb%2FhEYHEp3FRXrw8c45wvZSbHNCh3jgmPKYRaMISsVReZkLPLI3Xbl5yWhp5EsKu5M%2BL0M7TElIg%2F2%2Fl3ISVeJLLn%2BzaFb8xMkZTWh9a%2BER2WZNaemYZkO7luTvBV8Lwau23QERvA5ccLEVlyJJim%2Br%2BqxVIt6pFwck2uRgRU1SdAqN4g%2BSuyB5oHLx6naSmUwpMCMp4ic5LdRVxYPrVI%2BdA4h8uKU6OxLgoYoGg1gpSWWMgTEsCul0LBZfgIGipNTv0FXO04mu7yWKXo6cGFsLJcQwbZRmyZFXAcvshGVNqJUGb4odL3h%2BURL4ER7IeWfyFxQIzcH1U1u1dZcKhyADSaT6%2Fy6UVXthG9%2BoXVdE9Ex7YNyMe0w5%2B65OJNrf%2FpUxVM92k1mTVy8fpRve1Vcy0YNIHbUUiMxGeRvORjIKAjWEeoGEdhJzcreuXg1MIwnKMPOKwsoGOqUBkrHaa9wgamu%2FVUKiH1QVxdIDANjAC2SzXjx1qruPNghCX6JRbEcDnfUgcPaBcsID0Na706lbRIeO1ueLgbvfNtgSAENbpsGD1bR2aP0edu2zBBUOh7Q2wI6BZ7As9u%2FAOiWFWKeKDEnjsdb3V2fH5XdnFzQ2k5NIfNEU2M4n4%2F7aOAafeed2dD7gEffOhPuuxVE0pf3X6L5To%2BY%2F98BDJr8WgILe&X-Amz-Signature=89499bf408fe35dc1bcaee746075fd4661a72af2d660bda73b4c9fe759132e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPSTQWDE%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbS3CblkdLTNfgxi81AACnN%2Bh1kAMtjLRlHgZVPMimlAiEA%2BS52R%2F681zybTBCoYG54WadU0BP8knu0HTyzp75Hbnoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNWXRwAc8bzxr4XLfircAzUuL2lwAgZ4wH8dEkNBgIGLIi6l2kv74cMU4Pg0wY3uqYhVFJEKnDPM6VlEMjQL5cZFfI73bCMhwhejC3f49uQaojn155x7N1YgrgeniMlRTM5nyvmjJR6SQByYuWwa5VZhKEwbChKV3KhM6FQA%2BzGeoK%2FS3W%2BtOKJl7xA9TwAb18Va1S5qIqKD8xb%2FhEYHEp3FRXrw8c45wvZSbHNCh3jgmPKYRaMISsVReZkLPLI3Xbl5yWhp5EsKu5M%2BL0M7TElIg%2F2%2Fl3ISVeJLLn%2BzaFb8xMkZTWh9a%2BER2WZNaemYZkO7luTvBV8Lwau23QERvA5ccLEVlyJJim%2Br%2BqxVIt6pFwck2uRgRU1SdAqN4g%2BSuyB5oHLx6naSmUwpMCMp4ic5LdRVxYPrVI%2BdA4h8uKU6OxLgoYoGg1gpSWWMgTEsCul0LBZfgIGipNTv0FXO04mu7yWKXo6cGFsLJcQwbZRmyZFXAcvshGVNqJUGb4odL3h%2BURL4ER7IeWfyFxQIzcH1U1u1dZcKhyADSaT6%2Fy6UVXthG9%2BoXVdE9Ex7YNyMe0w5%2B65OJNrf%2FpUxVM92k1mTVy8fpRve1Vcy0YNIHbUUiMxGeRvORjIKAjWEeoGEdhJzcreuXg1MIwnKMPOKwsoGOqUBkrHaa9wgamu%2FVUKiH1QVxdIDANjAC2SzXjx1qruPNghCX6JRbEcDnfUgcPaBcsID0Na706lbRIeO1ueLgbvfNtgSAENbpsGD1bR2aP0edu2zBBUOh7Q2wI6BZ7As9u%2FAOiWFWKeKDEnjsdb3V2fH5XdnFzQ2k5NIfNEU2M4n4%2F7aOAafeed2dD7gEffOhPuuxVE0pf3X6L5To%2BY%2F98BDJr8WgILe&X-Amz-Signature=1299d5ea4dd7c1a9d5349981a0fdd7722800b9fe429cc6174d46d1fb90d8b799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPSTQWDE%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbS3CblkdLTNfgxi81AACnN%2Bh1kAMtjLRlHgZVPMimlAiEA%2BS52R%2F681zybTBCoYG54WadU0BP8knu0HTyzp75Hbnoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNWXRwAc8bzxr4XLfircAzUuL2lwAgZ4wH8dEkNBgIGLIi6l2kv74cMU4Pg0wY3uqYhVFJEKnDPM6VlEMjQL5cZFfI73bCMhwhejC3f49uQaojn155x7N1YgrgeniMlRTM5nyvmjJR6SQByYuWwa5VZhKEwbChKV3KhM6FQA%2BzGeoK%2FS3W%2BtOKJl7xA9TwAb18Va1S5qIqKD8xb%2FhEYHEp3FRXrw8c45wvZSbHNCh3jgmPKYRaMISsVReZkLPLI3Xbl5yWhp5EsKu5M%2BL0M7TElIg%2F2%2Fl3ISVeJLLn%2BzaFb8xMkZTWh9a%2BER2WZNaemYZkO7luTvBV8Lwau23QERvA5ccLEVlyJJim%2Br%2BqxVIt6pFwck2uRgRU1SdAqN4g%2BSuyB5oHLx6naSmUwpMCMp4ic5LdRVxYPrVI%2BdA4h8uKU6OxLgoYoGg1gpSWWMgTEsCul0LBZfgIGipNTv0FXO04mu7yWKXo6cGFsLJcQwbZRmyZFXAcvshGVNqJUGb4odL3h%2BURL4ER7IeWfyFxQIzcH1U1u1dZcKhyADSaT6%2Fy6UVXthG9%2BoXVdE9Ex7YNyMe0w5%2B65OJNrf%2FpUxVM92k1mTVy8fpRve1Vcy0YNIHbUUiMxGeRvORjIKAjWEeoGEdhJzcreuXg1MIwnKMPOKwsoGOqUBkrHaa9wgamu%2FVUKiH1QVxdIDANjAC2SzXjx1qruPNghCX6JRbEcDnfUgcPaBcsID0Na706lbRIeO1ueLgbvfNtgSAENbpsGD1bR2aP0edu2zBBUOh7Q2wI6BZ7As9u%2FAOiWFWKeKDEnjsdb3V2fH5XdnFzQ2k5NIfNEU2M4n4%2F7aOAafeed2dD7gEffOhPuuxVE0pf3X6L5To%2BY%2F98BDJr8WgILe&X-Amz-Signature=df61ec722a7899a52120000b0372e09822a6e76690fdc39988ab2a349a8423ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSIIGNEP%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T041441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLzJt74MGusY1WgE2C63tvv2fOVkbNX3n7h%2Fl9a9IKVAiAPqHO4pzYJ%2BpPldvJf78k%2FZWoDjgKv%2FzeRGXSV5mj2Eyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMzSS%2FDaE9H2O2n3QmKtwDU%2FqmxXe7l%2BIppv15jrvsXVrdWGnFgJ3irdUiI97fEJ8zLE8jSuMq9BDpbIlw4eG%2FAlS5KUGu4CVFx%2Bs0wxPJwzuvuRA869ElGU65H5ekL80gUYxdvXk27nSyyvr7x8FoOdthF%2Bli%2Fi6s%2F5W8nMg%2BlS9uS59YqXoM44FoDUmTHjMlgdpO20Qkp0zKBrtyVODuGjpkqjm42JavHbefH5mVn3XA9DURFgpWT4ATvhfad2EpRyoxnBJqR6i8F%2BFy74FwWT6hlj5SPVsrXaPpa2nHrgxGa1fROCv0fmuNn%2FGcjoRIsKdV8ykfkK7jFpg%2FChLCv6FfFVp7swVp%2Bqltnku8AbenF3y325Mo6%2Bk%2BQFpnwvgW6vrGMSjc6DPb8PAitXzoAu5vEeA%2FQcX%2B4tXomxoLqzoRhYUah0KZFKNXlz%2FshEPaj0SgM%2FAyQ8jbZJDPA%2FPJ9pu0eC2N2c3tDhxVZwc0sayhffC2btyozF7o1LdSgFWI%2BhVP8527OcV7L6Wayd0gYiKb8XY1xxHWmp7rPSkt4WVdU7DtHxKKZUCggSKWZ%2F%2BBRrBFmUAxv9awQLo33mJ%2BhqCljJ3hCJzvHaCNdbNLVR3Iz7JKpx%2BeKI5dU8jFyHFHVqhD9VH%2BBU%2BcWX4woorCygY6pgGlaxphwtbFwiXXLJ9zzR5fppl2XALkabCZZxa63A6v%2FFu8iQne7d7%2BB%2BOy8r70sLcUZtGUT5TaUTVqJyeHx0NDCpyClp0GL8qOzYFAxqXyn7Zc4qNa5T0%2FtILxOCMIfgX7GEU2u74HRiroNI3Tom4cKhIUNb%2BJl9qXcJf%2F40wodhUYqth%2BdzsBQyN%2BAFa1bKvxMFqIpYR1BZu2pf7Hbe8qKPcqxoXV&X-Amz-Signature=3c5650226bdc356f3add28acc9426ec6156b865d7ed242c5056675267e80710a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

