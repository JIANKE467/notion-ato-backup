
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N4HPWIC%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAil6GVupObpzGPu%2Fah9CkhN5ESmwa5bbNyPVR0OGR4vAiBeyHdzaHCrOolVDHdzD7c5e4mZluj1NYL3wGbNmN59OSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnVHdhE%2BTpcb104irKtwDgj%2FbZlYMoCFbMBo3ebho4b5ePW7gcdeAS4mEvf52WIiTcGtVOtQGQrfATpAiDeS5yyXSMgvjLNUr4AA%2FiHlm1yL0CL%2B5horwbZ6Il4e4dk7qeFjXyqQMKhLX03BoZpqDDYswfx7loKHVJt940dBLG0DsrI%2FvSxaNiszAWjpn4XXUZYbCSPYd1vW33EqkFdBZfrazyWkxjvcltoC1LtQ8Tp5CNcFvY00S48N1xYjyE0C7LeDipEG7uJtJJi9L0eFPwbzEiRliTb03cmUF86D8PVVeot2WjLKu5KacYgDKjT77YYolA4BxX9s%2F4i4NTJ8XlB238PnlzrPoxDXKnmXQY%2F7DKjZJZfqnWlMe6RCcyd04g%2BlWREf5JQ5ip0Ine7iwFrE02EvpWdccBGjKhpUEmVuFZU2f1es5Ahz0D9XhYMTXmt%2FX47MAU8SA5ZwCG1UpuhTnq5WHvhTe7ohde8CSvlYsZPEZRkNphpuUEsAUdc1cYru6CCMGXuKguB7IgftemKBb90Frcn1Elm9qAlgue5QLg4%2FgxrM7FYAt84YKMUC1POULiFJ%2FwERZS4rI2N2uemXd6dgyyK8a43KZOQ9uO8WkD5jxuYpHrWpJx1%2FDy2xLbgPwUl76aWWpiB8wmZ6HywY6pgFQA6OLJRK3TXM%2BtPL%2B0CK%2F5YDtdO8rZtKSdgaKEJq%2BJTscE1MO89rlF5%2BMdG%2F8%2B%2F8BVY2M%2BBk0vkTak%2Fm79K%2FV9qI%2FaDG19khjTQzjtktvmjSuu3WT1pd%2B2o7UYEaWhcCR%2BKIDrogrG9zYccmglfv3hb9NUa9c7idxrKu3qpJ0gIBmpK%2FT4OlixNwWHOOhKzXRBsgundKR3FKSPyYvsw9wyruCZPPo&X-Amz-Signature=198a9a1eb01b0f1e76af4798c3005490f9245c0ccb5de44788cdd8af7299e717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6TTGKZO%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDklYsz9l%2BEgbEraMDFgqJ%2F3GBFiydjjB1Ba4haBo1l7gIhALIx7xum9Rvm6zfzdNX8k5N28ovKH5p%2BvK4hyM0vq%2B1uKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy32n0BWMsXZKvs%2Bsq3AMut3go4DL26RcEKZrJjWJoSKw6wCAUHsZvufOQwzk%2B4SptLTLjEAPKipqR64Tjjcn24Yp5YWZO98Ygeot16MadlpavtuTeYifBqzOv%2FURSRKdjPbK3%2FnDErew8eIhgFMNH%2B6ckhIp7PEsHePnEK77dBUr5PHSw7H8aHjYzC0zxzQqlnYFeYSxdCQxlvSm6Ke5cgc6hLDc5QkzoywluokhknkHv3boircSZd2S7NlLegQNNk5ER14oWRNVU2VSYZXQHZeRowqDj%2FtHPfTtsCZLvZjrAm32I2rpwZfVA94f5pr2oAp3NuMtzo5NJGl2dNdyaUCLZOlgy5oishxvZrziOr4EHigRQjKEkESjiWoEhNvugZD%2BUFiJ6TuBBX%2Br4vH3mUwgD9mpcOHGq7t8Uklizwe7m%2F56CmQxDTimDaH9xx1P0R51QvSAm2l4XhkU3lh3oyXoYtg%2BYCJro6jp1uSiGVYAxsv1ccwEzLiV6E16fFcstmKQP9q7Ceo5tT1qralNmgGPtPPeQhY5XCJ6QO7%2BtCbvTwL5yS49QoWcuNzV7YGpxquXyeIJr9n%2FYKVx4XSsqOm6QIWk2h1Lcb2coL52pcNgHZwBdKl5ufUR2t%2Bmr2CoJiYClFdt9vi4lcDCXnYfLBjqkAUTLs1uh%2FvJKJ2UNTSC3aHHnDT2CqkJ2%2B%2B9GgfZfI5nGKFGwacGn%2FKCVHDurwywuyuCviuLnM%2FSquI2eQ5n92kKv4mztYQHRj0WSBr81oUImIok9X7Es7PgG9x7Q5ZvCbLcFNdUhciPtWtkvuDUU4CsVLsGPDg4bmmKS8O9UgwuSdwuN4DViGRb%2Fj6HHRAkhCaA9AhDQnMUKj5VUCRe24JYG5sp5&X-Amz-Signature=7fc2f2884272dcd24b321b13ea930fade808532fd85e45f30647145d3f0968c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6TTGKZO%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDklYsz9l%2BEgbEraMDFgqJ%2F3GBFiydjjB1Ba4haBo1l7gIhALIx7xum9Rvm6zfzdNX8k5N28ovKH5p%2BvK4hyM0vq%2B1uKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy32n0BWMsXZKvs%2Bsq3AMut3go4DL26RcEKZrJjWJoSKw6wCAUHsZvufOQwzk%2B4SptLTLjEAPKipqR64Tjjcn24Yp5YWZO98Ygeot16MadlpavtuTeYifBqzOv%2FURSRKdjPbK3%2FnDErew8eIhgFMNH%2B6ckhIp7PEsHePnEK77dBUr5PHSw7H8aHjYzC0zxzQqlnYFeYSxdCQxlvSm6Ke5cgc6hLDc5QkzoywluokhknkHv3boircSZd2S7NlLegQNNk5ER14oWRNVU2VSYZXQHZeRowqDj%2FtHPfTtsCZLvZjrAm32I2rpwZfVA94f5pr2oAp3NuMtzo5NJGl2dNdyaUCLZOlgy5oishxvZrziOr4EHigRQjKEkESjiWoEhNvugZD%2BUFiJ6TuBBX%2Br4vH3mUwgD9mpcOHGq7t8Uklizwe7m%2F56CmQxDTimDaH9xx1P0R51QvSAm2l4XhkU3lh3oyXoYtg%2BYCJro6jp1uSiGVYAxsv1ccwEzLiV6E16fFcstmKQP9q7Ceo5tT1qralNmgGPtPPeQhY5XCJ6QO7%2BtCbvTwL5yS49QoWcuNzV7YGpxquXyeIJr9n%2FYKVx4XSsqOm6QIWk2h1Lcb2coL52pcNgHZwBdKl5ufUR2t%2Bmr2CoJiYClFdt9vi4lcDCXnYfLBjqkAUTLs1uh%2FvJKJ2UNTSC3aHHnDT2CqkJ2%2B%2B9GgfZfI5nGKFGwacGn%2FKCVHDurwywuyuCviuLnM%2FSquI2eQ5n92kKv4mztYQHRj0WSBr81oUImIok9X7Es7PgG9x7Q5ZvCbLcFNdUhciPtWtkvuDUU4CsVLsGPDg4bmmKS8O9UgwuSdwuN4DViGRb%2Fj6HHRAkhCaA9AhDQnMUKj5VUCRe24JYG5sp5&X-Amz-Signature=6acfa99faa4b47006952a731bd5da857aaaa20b983740ea4ae92ccba0f77c103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUUY7DCL%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1WHYkg7l2wySBHqsIQcUCMtknYUtGfwfiHJgRr3uAXgIhANZWpLC1vRjHLqw5FrJl%2Fd7LqhT1w9Wak9oLfAig4nKbKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznYA1dEyDVcxoIRbgq3AN5ToMakTkhSDzAyM4GnI2Fm4CLapNfSOt3f4jhkK%2F%2B5GPyCnX%2BOUUPvC5L29Uh9mNjOrLaxqwOox1UhF3AAIGmhZdWjiLXlle0yh9m7Sgt8BNFqPBTBWRRLHnRgCci1oNIovKEreDcVvSC4D1i2ZlPbC08PXF4UVNuWbimC1qTumRM%2B3tHNfMfnfyAz%2BKX9%2FylcgXC99UpazERTyAWegL%2BG1bp%2BBG7yEDo2K5lJqXRl8sWrEFDaItCjheAPcPWdnGsPApeP%2FJHtu%2BiyFGeEt4AXhA58JEuwyPQwEmjhpOUH9E2e7dxangvlp5V9HFQLTLv3tLP6PQSyAXg8bUtdCJxlblkX9jHM73PnM6h0kkslIiTr34kOycy7q8m1zK%2FyCAAk%2B7QL54zXsIL8SQfOp02r5uai7w5kugRR8OruF5aBVYUSJgsp46DWhZZBC8a06%2BcYDoV1W3PydzBu23j9Q%2Ft6On6fkCFi3OiGQFcvKH8lbi0aCd6jYj6XUpKWdY%2FOLI4qjdToGTG6XojtxkZOHvgygYU8WhTOe5FEbSKE%2BTHBSPjk%2F%2B1nNTYVbxHuo2yPWXBXQusOMau20nlLZDTVzjPPpspcPeV0m4A6ecxrORRaFzGeoL6pEeNPOBI%2FjC%2FnYfLBjqkAdKQtG0yF869K7tjif3oWUQ7ZvSl%2FX9zZI0UFsxHQWI4eiTR2XA02MoRGpUYDvru8%2Ftx7Hij9JOfGVg0N3WVoyyu8TpLpr9P862PQEsSYF%2BtPMAKBj4melsFamlnnYCMU0hxw3zX9kxGL5%2BvR11mxgQVRLfQeAYpVR5F17US2UzW2m9yS5h51R%2B3jZtp2%2FxpAPFzUAMbqmJmWgk4en%2BCPvfGE4qp&X-Amz-Signature=c9a1c4d9bd9325c249310a8b571f50f014580feba7311d71539b07e00e9a5a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUUY7DCL%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1WHYkg7l2wySBHqsIQcUCMtknYUtGfwfiHJgRr3uAXgIhANZWpLC1vRjHLqw5FrJl%2Fd7LqhT1w9Wak9oLfAig4nKbKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznYA1dEyDVcxoIRbgq3AN5ToMakTkhSDzAyM4GnI2Fm4CLapNfSOt3f4jhkK%2F%2B5GPyCnX%2BOUUPvC5L29Uh9mNjOrLaxqwOox1UhF3AAIGmhZdWjiLXlle0yh9m7Sgt8BNFqPBTBWRRLHnRgCci1oNIovKEreDcVvSC4D1i2ZlPbC08PXF4UVNuWbimC1qTumRM%2B3tHNfMfnfyAz%2BKX9%2FylcgXC99UpazERTyAWegL%2BG1bp%2BBG7yEDo2K5lJqXRl8sWrEFDaItCjheAPcPWdnGsPApeP%2FJHtu%2BiyFGeEt4AXhA58JEuwyPQwEmjhpOUH9E2e7dxangvlp5V9HFQLTLv3tLP6PQSyAXg8bUtdCJxlblkX9jHM73PnM6h0kkslIiTr34kOycy7q8m1zK%2FyCAAk%2B7QL54zXsIL8SQfOp02r5uai7w5kugRR8OruF5aBVYUSJgsp46DWhZZBC8a06%2BcYDoV1W3PydzBu23j9Q%2Ft6On6fkCFi3OiGQFcvKH8lbi0aCd6jYj6XUpKWdY%2FOLI4qjdToGTG6XojtxkZOHvgygYU8WhTOe5FEbSKE%2BTHBSPjk%2F%2B1nNTYVbxHuo2yPWXBXQusOMau20nlLZDTVzjPPpspcPeV0m4A6ecxrORRaFzGeoL6pEeNPOBI%2FjC%2FnYfLBjqkAdKQtG0yF869K7tjif3oWUQ7ZvSl%2FX9zZI0UFsxHQWI4eiTR2XA02MoRGpUYDvru8%2Ftx7Hij9JOfGVg0N3WVoyyu8TpLpr9P862PQEsSYF%2BtPMAKBj4melsFamlnnYCMU0hxw3zX9kxGL5%2BvR11mxgQVRLfQeAYpVR5F17US2UzW2m9yS5h51R%2B3jZtp2%2FxpAPFzUAMbqmJmWgk4en%2BCPvfGE4qp&X-Amz-Signature=e700a7e4fd9ad1dc3c93b01d88d72cdec754c382b81d5de2355fa9f43ad3d42d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUUY7DCL%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1WHYkg7l2wySBHqsIQcUCMtknYUtGfwfiHJgRr3uAXgIhANZWpLC1vRjHLqw5FrJl%2Fd7LqhT1w9Wak9oLfAig4nKbKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznYA1dEyDVcxoIRbgq3AN5ToMakTkhSDzAyM4GnI2Fm4CLapNfSOt3f4jhkK%2F%2B5GPyCnX%2BOUUPvC5L29Uh9mNjOrLaxqwOox1UhF3AAIGmhZdWjiLXlle0yh9m7Sgt8BNFqPBTBWRRLHnRgCci1oNIovKEreDcVvSC4D1i2ZlPbC08PXF4UVNuWbimC1qTumRM%2B3tHNfMfnfyAz%2BKX9%2FylcgXC99UpazERTyAWegL%2BG1bp%2BBG7yEDo2K5lJqXRl8sWrEFDaItCjheAPcPWdnGsPApeP%2FJHtu%2BiyFGeEt4AXhA58JEuwyPQwEmjhpOUH9E2e7dxangvlp5V9HFQLTLv3tLP6PQSyAXg8bUtdCJxlblkX9jHM73PnM6h0kkslIiTr34kOycy7q8m1zK%2FyCAAk%2B7QL54zXsIL8SQfOp02r5uai7w5kugRR8OruF5aBVYUSJgsp46DWhZZBC8a06%2BcYDoV1W3PydzBu23j9Q%2Ft6On6fkCFi3OiGQFcvKH8lbi0aCd6jYj6XUpKWdY%2FOLI4qjdToGTG6XojtxkZOHvgygYU8WhTOe5FEbSKE%2BTHBSPjk%2F%2B1nNTYVbxHuo2yPWXBXQusOMau20nlLZDTVzjPPpspcPeV0m4A6ecxrORRaFzGeoL6pEeNPOBI%2FjC%2FnYfLBjqkAdKQtG0yF869K7tjif3oWUQ7ZvSl%2FX9zZI0UFsxHQWI4eiTR2XA02MoRGpUYDvru8%2Ftx7Hij9JOfGVg0N3WVoyyu8TpLpr9P862PQEsSYF%2BtPMAKBj4melsFamlnnYCMU0hxw3zX9kxGL5%2BvR11mxgQVRLfQeAYpVR5F17US2UzW2m9yS5h51R%2B3jZtp2%2FxpAPFzUAMbqmJmWgk4en%2BCPvfGE4qp&X-Amz-Signature=3322aaf1ecdc6e6465058e5e175620a0967d0fca697449cfa6e6ca8951f0d253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUUY7DCL%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1WHYkg7l2wySBHqsIQcUCMtknYUtGfwfiHJgRr3uAXgIhANZWpLC1vRjHLqw5FrJl%2Fd7LqhT1w9Wak9oLfAig4nKbKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznYA1dEyDVcxoIRbgq3AN5ToMakTkhSDzAyM4GnI2Fm4CLapNfSOt3f4jhkK%2F%2B5GPyCnX%2BOUUPvC5L29Uh9mNjOrLaxqwOox1UhF3AAIGmhZdWjiLXlle0yh9m7Sgt8BNFqPBTBWRRLHnRgCci1oNIovKEreDcVvSC4D1i2ZlPbC08PXF4UVNuWbimC1qTumRM%2B3tHNfMfnfyAz%2BKX9%2FylcgXC99UpazERTyAWegL%2BG1bp%2BBG7yEDo2K5lJqXRl8sWrEFDaItCjheAPcPWdnGsPApeP%2FJHtu%2BiyFGeEt4AXhA58JEuwyPQwEmjhpOUH9E2e7dxangvlp5V9HFQLTLv3tLP6PQSyAXg8bUtdCJxlblkX9jHM73PnM6h0kkslIiTr34kOycy7q8m1zK%2FyCAAk%2B7QL54zXsIL8SQfOp02r5uai7w5kugRR8OruF5aBVYUSJgsp46DWhZZBC8a06%2BcYDoV1W3PydzBu23j9Q%2Ft6On6fkCFi3OiGQFcvKH8lbi0aCd6jYj6XUpKWdY%2FOLI4qjdToGTG6XojtxkZOHvgygYU8WhTOe5FEbSKE%2BTHBSPjk%2F%2B1nNTYVbxHuo2yPWXBXQusOMau20nlLZDTVzjPPpspcPeV0m4A6ecxrORRaFzGeoL6pEeNPOBI%2FjC%2FnYfLBjqkAdKQtG0yF869K7tjif3oWUQ7ZvSl%2FX9zZI0UFsxHQWI4eiTR2XA02MoRGpUYDvru8%2Ftx7Hij9JOfGVg0N3WVoyyu8TpLpr9P862PQEsSYF%2BtPMAKBj4melsFamlnnYCMU0hxw3zX9kxGL5%2BvR11mxgQVRLfQeAYpVR5F17US2UzW2m9yS5h51R%2B3jZtp2%2FxpAPFzUAMbqmJmWgk4en%2BCPvfGE4qp&X-Amz-Signature=5e8d18fab602a4c57ca5bf0fc39b59afdb3b9008ac768003435b60f8ecdbae43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUUY7DCL%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1WHYkg7l2wySBHqsIQcUCMtknYUtGfwfiHJgRr3uAXgIhANZWpLC1vRjHLqw5FrJl%2Fd7LqhT1w9Wak9oLfAig4nKbKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznYA1dEyDVcxoIRbgq3AN5ToMakTkhSDzAyM4GnI2Fm4CLapNfSOt3f4jhkK%2F%2B5GPyCnX%2BOUUPvC5L29Uh9mNjOrLaxqwOox1UhF3AAIGmhZdWjiLXlle0yh9m7Sgt8BNFqPBTBWRRLHnRgCci1oNIovKEreDcVvSC4D1i2ZlPbC08PXF4UVNuWbimC1qTumRM%2B3tHNfMfnfyAz%2BKX9%2FylcgXC99UpazERTyAWegL%2BG1bp%2BBG7yEDo2K5lJqXRl8sWrEFDaItCjheAPcPWdnGsPApeP%2FJHtu%2BiyFGeEt4AXhA58JEuwyPQwEmjhpOUH9E2e7dxangvlp5V9HFQLTLv3tLP6PQSyAXg8bUtdCJxlblkX9jHM73PnM6h0kkslIiTr34kOycy7q8m1zK%2FyCAAk%2B7QL54zXsIL8SQfOp02r5uai7w5kugRR8OruF5aBVYUSJgsp46DWhZZBC8a06%2BcYDoV1W3PydzBu23j9Q%2Ft6On6fkCFi3OiGQFcvKH8lbi0aCd6jYj6XUpKWdY%2FOLI4qjdToGTG6XojtxkZOHvgygYU8WhTOe5FEbSKE%2BTHBSPjk%2F%2B1nNTYVbxHuo2yPWXBXQusOMau20nlLZDTVzjPPpspcPeV0m4A6ecxrORRaFzGeoL6pEeNPOBI%2FjC%2FnYfLBjqkAdKQtG0yF869K7tjif3oWUQ7ZvSl%2FX9zZI0UFsxHQWI4eiTR2XA02MoRGpUYDvru8%2Ftx7Hij9JOfGVg0N3WVoyyu8TpLpr9P862PQEsSYF%2BtPMAKBj4melsFamlnnYCMU0hxw3zX9kxGL5%2BvR11mxgQVRLfQeAYpVR5F17US2UzW2m9yS5h51R%2B3jZtp2%2FxpAPFzUAMbqmJmWgk4en%2BCPvfGE4qp&X-Amz-Signature=081bed149aae0654a6b844c07d7fd77660ee291e1ad994c04f98271bec7bdc7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUUY7DCL%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1WHYkg7l2wySBHqsIQcUCMtknYUtGfwfiHJgRr3uAXgIhANZWpLC1vRjHLqw5FrJl%2Fd7LqhT1w9Wak9oLfAig4nKbKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznYA1dEyDVcxoIRbgq3AN5ToMakTkhSDzAyM4GnI2Fm4CLapNfSOt3f4jhkK%2F%2B5GPyCnX%2BOUUPvC5L29Uh9mNjOrLaxqwOox1UhF3AAIGmhZdWjiLXlle0yh9m7Sgt8BNFqPBTBWRRLHnRgCci1oNIovKEreDcVvSC4D1i2ZlPbC08PXF4UVNuWbimC1qTumRM%2B3tHNfMfnfyAz%2BKX9%2FylcgXC99UpazERTyAWegL%2BG1bp%2BBG7yEDo2K5lJqXRl8sWrEFDaItCjheAPcPWdnGsPApeP%2FJHtu%2BiyFGeEt4AXhA58JEuwyPQwEmjhpOUH9E2e7dxangvlp5V9HFQLTLv3tLP6PQSyAXg8bUtdCJxlblkX9jHM73PnM6h0kkslIiTr34kOycy7q8m1zK%2FyCAAk%2B7QL54zXsIL8SQfOp02r5uai7w5kugRR8OruF5aBVYUSJgsp46DWhZZBC8a06%2BcYDoV1W3PydzBu23j9Q%2Ft6On6fkCFi3OiGQFcvKH8lbi0aCd6jYj6XUpKWdY%2FOLI4qjdToGTG6XojtxkZOHvgygYU8WhTOe5FEbSKE%2BTHBSPjk%2F%2B1nNTYVbxHuo2yPWXBXQusOMau20nlLZDTVzjPPpspcPeV0m4A6ecxrORRaFzGeoL6pEeNPOBI%2FjC%2FnYfLBjqkAdKQtG0yF869K7tjif3oWUQ7ZvSl%2FX9zZI0UFsxHQWI4eiTR2XA02MoRGpUYDvru8%2Ftx7Hij9JOfGVg0N3WVoyyu8TpLpr9P862PQEsSYF%2BtPMAKBj4melsFamlnnYCMU0hxw3zX9kxGL5%2BvR11mxgQVRLfQeAYpVR5F17US2UzW2m9yS5h51R%2B3jZtp2%2FxpAPFzUAMbqmJmWgk4en%2BCPvfGE4qp&X-Amz-Signature=c8836cb0f2f66037517355ee9a9942a914f1323d931eed71003a193296461181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUUY7DCL%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1WHYkg7l2wySBHqsIQcUCMtknYUtGfwfiHJgRr3uAXgIhANZWpLC1vRjHLqw5FrJl%2Fd7LqhT1w9Wak9oLfAig4nKbKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznYA1dEyDVcxoIRbgq3AN5ToMakTkhSDzAyM4GnI2Fm4CLapNfSOt3f4jhkK%2F%2B5GPyCnX%2BOUUPvC5L29Uh9mNjOrLaxqwOox1UhF3AAIGmhZdWjiLXlle0yh9m7Sgt8BNFqPBTBWRRLHnRgCci1oNIovKEreDcVvSC4D1i2ZlPbC08PXF4UVNuWbimC1qTumRM%2B3tHNfMfnfyAz%2BKX9%2FylcgXC99UpazERTyAWegL%2BG1bp%2BBG7yEDo2K5lJqXRl8sWrEFDaItCjheAPcPWdnGsPApeP%2FJHtu%2BiyFGeEt4AXhA58JEuwyPQwEmjhpOUH9E2e7dxangvlp5V9HFQLTLv3tLP6PQSyAXg8bUtdCJxlblkX9jHM73PnM6h0kkslIiTr34kOycy7q8m1zK%2FyCAAk%2B7QL54zXsIL8SQfOp02r5uai7w5kugRR8OruF5aBVYUSJgsp46DWhZZBC8a06%2BcYDoV1W3PydzBu23j9Q%2Ft6On6fkCFi3OiGQFcvKH8lbi0aCd6jYj6XUpKWdY%2FOLI4qjdToGTG6XojtxkZOHvgygYU8WhTOe5FEbSKE%2BTHBSPjk%2F%2B1nNTYVbxHuo2yPWXBXQusOMau20nlLZDTVzjPPpspcPeV0m4A6ecxrORRaFzGeoL6pEeNPOBI%2FjC%2FnYfLBjqkAdKQtG0yF869K7tjif3oWUQ7ZvSl%2FX9zZI0UFsxHQWI4eiTR2XA02MoRGpUYDvru8%2Ftx7Hij9JOfGVg0N3WVoyyu8TpLpr9P862PQEsSYF%2BtPMAKBj4melsFamlnnYCMU0hxw3zX9kxGL5%2BvR11mxgQVRLfQeAYpVR5F17US2UzW2m9yS5h51R%2B3jZtp2%2FxpAPFzUAMbqmJmWgk4en%2BCPvfGE4qp&X-Amz-Signature=a92b20ad6dd113f0f30026980b4bd744e6cf10e30aa32ab944c200deda70a937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBVEVM3U%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEDRqQR9gau96Q3%2F3s5g8te5v0wOHtiRG1jM%2F2MsCgVAiEAjAOde9AX4jGL4E5jgMJRxfSBacYKMcB5qWe5cEIrqKMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM14xzlwSxVv4sLvyrcA4DsLxIhcN6ImqlIoEngqGYy2gQNw7rxu%2FNAf1hooucV9U9xrMgZoCOVw6kJL%2FYVOTEz%2Fr6BegE4BDzh9%2FGL1x%2F%2FOPGULMFXWrjGVnKsO0Gvxhc%2BiGfTro8dXKOdLtFytHEIncXWAiTi7HV4mQv%2BlfAQAoX5uOZE4Tx1NMVML5o1GZojVOXQBvBM9UMVfdYbzMC76iSy1N7Vlz5umMuenzyNEsOKzPcNqzojWyO3COUiUKsK0SKrjH2N0QQGQyF%2FoEy35bWf8w8PDPoezq2X%2FRxoFNqn5e%2BwI3fs4x0YcQW57FlbvekyBq2WcEhset%2FDSc18PKRPONMmbIpxA4c5mmSh1qVvsuKH6di8cUFafSfogV3eyRe3YtFfOoVPHybtJyehKAjyYANmA7Dra5CrwkRtSxEbMIpsNXT565liMCeL9SvSYSg2d7Igi0KPrGtOD7rSG11en9TrMgvGAqVVrpOcwPT1BFZI2973Lmpk4nvjYTQhCMlwbRPEUfXHpQDjDdKpuRxNr1LPUZxfnfU86VZfjcoB%2BA9yowb4yOoIQMFD%2BnTiyBIOoyAhpoP5PCRNrY8Rp%2Ftpp3mccqIMzsv0bzvokMDEeuDg6zw31Lpk6bC1LefUsi%2FAzY1Zszy5MPydh8sGOqUB%2BUM1pCRFc51CoTkBbtHbg5Y7Mzy1QRd7OS0uynXgOgZJxuE%2FXrxC%2FVaZOm9gIJ5gCpqHJgbWQqWQT4GolnBH8xloRW%2BFTLb4q78REI8aP1KJCThmBz6oH2FFMl3SERRFDhF%2Brp9gYIu%2BtrE4wFjEe4IRAynDFnjI6NOOFy9Hj9ZSNgasxmcD%2FfKdWIeZMUzIhOPWgmg8JOHReXAZv6XI5YbDiG1D&X-Amz-Signature=e5dac2b5d7d25298ae6606e9607f33cb5ed04c9a68d5997615ecae96c547e034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBVEVM3U%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEDRqQR9gau96Q3%2F3s5g8te5v0wOHtiRG1jM%2F2MsCgVAiEAjAOde9AX4jGL4E5jgMJRxfSBacYKMcB5qWe5cEIrqKMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM14xzlwSxVv4sLvyrcA4DsLxIhcN6ImqlIoEngqGYy2gQNw7rxu%2FNAf1hooucV9U9xrMgZoCOVw6kJL%2FYVOTEz%2Fr6BegE4BDzh9%2FGL1x%2F%2FOPGULMFXWrjGVnKsO0Gvxhc%2BiGfTro8dXKOdLtFytHEIncXWAiTi7HV4mQv%2BlfAQAoX5uOZE4Tx1NMVML5o1GZojVOXQBvBM9UMVfdYbzMC76iSy1N7Vlz5umMuenzyNEsOKzPcNqzojWyO3COUiUKsK0SKrjH2N0QQGQyF%2FoEy35bWf8w8PDPoezq2X%2FRxoFNqn5e%2BwI3fs4x0YcQW57FlbvekyBq2WcEhset%2FDSc18PKRPONMmbIpxA4c5mmSh1qVvsuKH6di8cUFafSfogV3eyRe3YtFfOoVPHybtJyehKAjyYANmA7Dra5CrwkRtSxEbMIpsNXT565liMCeL9SvSYSg2d7Igi0KPrGtOD7rSG11en9TrMgvGAqVVrpOcwPT1BFZI2973Lmpk4nvjYTQhCMlwbRPEUfXHpQDjDdKpuRxNr1LPUZxfnfU86VZfjcoB%2BA9yowb4yOoIQMFD%2BnTiyBIOoyAhpoP5PCRNrY8Rp%2Ftpp3mccqIMzsv0bzvokMDEeuDg6zw31Lpk6bC1LefUsi%2FAzY1Zszy5MPydh8sGOqUB%2BUM1pCRFc51CoTkBbtHbg5Y7Mzy1QRd7OS0uynXgOgZJxuE%2FXrxC%2FVaZOm9gIJ5gCpqHJgbWQqWQT4GolnBH8xloRW%2BFTLb4q78REI8aP1KJCThmBz6oH2FFMl3SERRFDhF%2Brp9gYIu%2BtrE4wFjEe4IRAynDFnjI6NOOFy9Hj9ZSNgasxmcD%2FfKdWIeZMUzIhOPWgmg8JOHReXAZv6XI5YbDiG1D&X-Amz-Signature=7437cd73fcd7e70bcade173115ce7e6dddc1527a25b67244c72e3881c4e8d9bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBVEVM3U%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEDRqQR9gau96Q3%2F3s5g8te5v0wOHtiRG1jM%2F2MsCgVAiEAjAOde9AX4jGL4E5jgMJRxfSBacYKMcB5qWe5cEIrqKMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM14xzlwSxVv4sLvyrcA4DsLxIhcN6ImqlIoEngqGYy2gQNw7rxu%2FNAf1hooucV9U9xrMgZoCOVw6kJL%2FYVOTEz%2Fr6BegE4BDzh9%2FGL1x%2F%2FOPGULMFXWrjGVnKsO0Gvxhc%2BiGfTro8dXKOdLtFytHEIncXWAiTi7HV4mQv%2BlfAQAoX5uOZE4Tx1NMVML5o1GZojVOXQBvBM9UMVfdYbzMC76iSy1N7Vlz5umMuenzyNEsOKzPcNqzojWyO3COUiUKsK0SKrjH2N0QQGQyF%2FoEy35bWf8w8PDPoezq2X%2FRxoFNqn5e%2BwI3fs4x0YcQW57FlbvekyBq2WcEhset%2FDSc18PKRPONMmbIpxA4c5mmSh1qVvsuKH6di8cUFafSfogV3eyRe3YtFfOoVPHybtJyehKAjyYANmA7Dra5CrwkRtSxEbMIpsNXT565liMCeL9SvSYSg2d7Igi0KPrGtOD7rSG11en9TrMgvGAqVVrpOcwPT1BFZI2973Lmpk4nvjYTQhCMlwbRPEUfXHpQDjDdKpuRxNr1LPUZxfnfU86VZfjcoB%2BA9yowb4yOoIQMFD%2BnTiyBIOoyAhpoP5PCRNrY8Rp%2Ftpp3mccqIMzsv0bzvokMDEeuDg6zw31Lpk6bC1LefUsi%2FAzY1Zszy5MPydh8sGOqUB%2BUM1pCRFc51CoTkBbtHbg5Y7Mzy1QRd7OS0uynXgOgZJxuE%2FXrxC%2FVaZOm9gIJ5gCpqHJgbWQqWQT4GolnBH8xloRW%2BFTLb4q78REI8aP1KJCThmBz6oH2FFMl3SERRFDhF%2Brp9gYIu%2BtrE4wFjEe4IRAynDFnjI6NOOFy9Hj9ZSNgasxmcD%2FfKdWIeZMUzIhOPWgmg8JOHReXAZv6XI5YbDiG1D&X-Amz-Signature=0e3c5f7498985387877a56aa9408c02753d12f71db828f894bfdcd2de1aaf00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBVEVM3U%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEDRqQR9gau96Q3%2F3s5g8te5v0wOHtiRG1jM%2F2MsCgVAiEAjAOde9AX4jGL4E5jgMJRxfSBacYKMcB5qWe5cEIrqKMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM14xzlwSxVv4sLvyrcA4DsLxIhcN6ImqlIoEngqGYy2gQNw7rxu%2FNAf1hooucV9U9xrMgZoCOVw6kJL%2FYVOTEz%2Fr6BegE4BDzh9%2FGL1x%2F%2FOPGULMFXWrjGVnKsO0Gvxhc%2BiGfTro8dXKOdLtFytHEIncXWAiTi7HV4mQv%2BlfAQAoX5uOZE4Tx1NMVML5o1GZojVOXQBvBM9UMVfdYbzMC76iSy1N7Vlz5umMuenzyNEsOKzPcNqzojWyO3COUiUKsK0SKrjH2N0QQGQyF%2FoEy35bWf8w8PDPoezq2X%2FRxoFNqn5e%2BwI3fs4x0YcQW57FlbvekyBq2WcEhset%2FDSc18PKRPONMmbIpxA4c5mmSh1qVvsuKH6di8cUFafSfogV3eyRe3YtFfOoVPHybtJyehKAjyYANmA7Dra5CrwkRtSxEbMIpsNXT565liMCeL9SvSYSg2d7Igi0KPrGtOD7rSG11en9TrMgvGAqVVrpOcwPT1BFZI2973Lmpk4nvjYTQhCMlwbRPEUfXHpQDjDdKpuRxNr1LPUZxfnfU86VZfjcoB%2BA9yowb4yOoIQMFD%2BnTiyBIOoyAhpoP5PCRNrY8Rp%2Ftpp3mccqIMzsv0bzvokMDEeuDg6zw31Lpk6bC1LefUsi%2FAzY1Zszy5MPydh8sGOqUB%2BUM1pCRFc51CoTkBbtHbg5Y7Mzy1QRd7OS0uynXgOgZJxuE%2FXrxC%2FVaZOm9gIJ5gCpqHJgbWQqWQT4GolnBH8xloRW%2BFTLb4q78REI8aP1KJCThmBz6oH2FFMl3SERRFDhF%2Brp9gYIu%2BtrE4wFjEe4IRAynDFnjI6NOOFy9Hj9ZSNgasxmcD%2FfKdWIeZMUzIhOPWgmg8JOHReXAZv6XI5YbDiG1D&X-Amz-Signature=1f47e6d1b6641ea738a98eed79bf05f3fc66fcef2f56a40055aa974ceb7ee0f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBVEVM3U%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEDRqQR9gau96Q3%2F3s5g8te5v0wOHtiRG1jM%2F2MsCgVAiEAjAOde9AX4jGL4E5jgMJRxfSBacYKMcB5qWe5cEIrqKMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM14xzlwSxVv4sLvyrcA4DsLxIhcN6ImqlIoEngqGYy2gQNw7rxu%2FNAf1hooucV9U9xrMgZoCOVw6kJL%2FYVOTEz%2Fr6BegE4BDzh9%2FGL1x%2F%2FOPGULMFXWrjGVnKsO0Gvxhc%2BiGfTro8dXKOdLtFytHEIncXWAiTi7HV4mQv%2BlfAQAoX5uOZE4Tx1NMVML5o1GZojVOXQBvBM9UMVfdYbzMC76iSy1N7Vlz5umMuenzyNEsOKzPcNqzojWyO3COUiUKsK0SKrjH2N0QQGQyF%2FoEy35bWf8w8PDPoezq2X%2FRxoFNqn5e%2BwI3fs4x0YcQW57FlbvekyBq2WcEhset%2FDSc18PKRPONMmbIpxA4c5mmSh1qVvsuKH6di8cUFafSfogV3eyRe3YtFfOoVPHybtJyehKAjyYANmA7Dra5CrwkRtSxEbMIpsNXT565liMCeL9SvSYSg2d7Igi0KPrGtOD7rSG11en9TrMgvGAqVVrpOcwPT1BFZI2973Lmpk4nvjYTQhCMlwbRPEUfXHpQDjDdKpuRxNr1LPUZxfnfU86VZfjcoB%2BA9yowb4yOoIQMFD%2BnTiyBIOoyAhpoP5PCRNrY8Rp%2Ftpp3mccqIMzsv0bzvokMDEeuDg6zw31Lpk6bC1LefUsi%2FAzY1Zszy5MPydh8sGOqUB%2BUM1pCRFc51CoTkBbtHbg5Y7Mzy1QRd7OS0uynXgOgZJxuE%2FXrxC%2FVaZOm9gIJ5gCpqHJgbWQqWQT4GolnBH8xloRW%2BFTLb4q78REI8aP1KJCThmBz6oH2FFMl3SERRFDhF%2Brp9gYIu%2BtrE4wFjEe4IRAynDFnjI6NOOFy9Hj9ZSNgasxmcD%2FfKdWIeZMUzIhOPWgmg8JOHReXAZv6XI5YbDiG1D&X-Amz-Signature=1e3415eaa1e0a955b86e5cd95e816e6b4b03de5da053d1ff1d07fc2d50ab9fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWR264RV%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaN9vfIRR7SWfEdcUC51DRDULgnDBKiHk9ZXCcA4lBMwIgXI%2BpYuvgPzV9UdcT9LAe0dGTH%2FsVwXw0bmAyusZxEasqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDM%2BVxG%2F8Fl06DrxCrcAxp40lfD7xFBSnvaoe0VK5c8N0LwskigmoCQph32fwwprBwY1IuPniMKD7UbLkVVXgyxNBbk1odwlOWusnKy%2FlLnOX7gn8PSpmDP6daRzEolkH4ujamJ%2FAlkJahRxtLPl6oSMF%2Bu%2Bj5h58VBp32SfDzwFbtJpDH5FiWGB6O6crTtNyMndKUHQpVM5adniS30aX4dyTqSeDB5z5c9zHxulPJGdKTHa1DEb06XB5bwCgaCHhZa38PS4oyPipcHjeVwlzowXQudKRscg%2BLKn8AHO3cOhH37xq6rHuv36tHxX%2F7rwmPCXFIlSAeE4niX0FABJg39c4hfpuf4lejBMNPI17xOVME8L%2F54NzADGulL8PvKPc16VJ2FuEfrc9%2FWjFO7Ug%2FJzd4kvYZYoGZKwJMClfLJ0BZONWwa9XhDV7FMvrrj6Ezd1v03A0dLeCqw0I5k5q%2FZ%2BLUDSJu1zAFEoioYY0l9%2FIZ5Wh7diKNVZaRxdjKtjMEjWPqzxUMNV6G0j4BpDJtcdJLulJoRA8DoZEeIQxFVZNPlTh0kjqg6vy2q2ylcmOsXhg5KaFLYMSY5jdOZN8Ponu5pRbzUEyzCDPbSGkdYtHmEEAFcL%2F9aMx2hat8mdoFePJS0WNioXSl%2FMJ2dh8sGOqUBo7fPx5fhiN20PUdpm0RW0gPuhgad%2Fin59PQhqdhj3YooaBcvG23pWpcd4LC5H4jwiyQo9mm6ayPTtRgizn%2FNkb%2Bbzh0%2FGUg1%2FsEw4QEWlvYN8FZq%2FVstTK6vU52vtNpgQJ%2BNVTRsV70947e8qfyCxbcJFDeD8XrEH90YpLofTTnY4HIplw%2Fy9g4FLdJ%2B1jkCpv71LoNlzpvhv81luef14x6td1F3&X-Amz-Signature=6a569cd4c5ca48602936469cefaac57b4cf8895e4e29a72be50f29d86a3a2994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWR264RV%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaN9vfIRR7SWfEdcUC51DRDULgnDBKiHk9ZXCcA4lBMwIgXI%2BpYuvgPzV9UdcT9LAe0dGTH%2FsVwXw0bmAyusZxEasqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDM%2BVxG%2F8Fl06DrxCrcAxp40lfD7xFBSnvaoe0VK5c8N0LwskigmoCQph32fwwprBwY1IuPniMKD7UbLkVVXgyxNBbk1odwlOWusnKy%2FlLnOX7gn8PSpmDP6daRzEolkH4ujamJ%2FAlkJahRxtLPl6oSMF%2Bu%2Bj5h58VBp32SfDzwFbtJpDH5FiWGB6O6crTtNyMndKUHQpVM5adniS30aX4dyTqSeDB5z5c9zHxulPJGdKTHa1DEb06XB5bwCgaCHhZa38PS4oyPipcHjeVwlzowXQudKRscg%2BLKn8AHO3cOhH37xq6rHuv36tHxX%2F7rwmPCXFIlSAeE4niX0FABJg39c4hfpuf4lejBMNPI17xOVME8L%2F54NzADGulL8PvKPc16VJ2FuEfrc9%2FWjFO7Ug%2FJzd4kvYZYoGZKwJMClfLJ0BZONWwa9XhDV7FMvrrj6Ezd1v03A0dLeCqw0I5k5q%2FZ%2BLUDSJu1zAFEoioYY0l9%2FIZ5Wh7diKNVZaRxdjKtjMEjWPqzxUMNV6G0j4BpDJtcdJLulJoRA8DoZEeIQxFVZNPlTh0kjqg6vy2q2ylcmOsXhg5KaFLYMSY5jdOZN8Ponu5pRbzUEyzCDPbSGkdYtHmEEAFcL%2F9aMx2hat8mdoFePJS0WNioXSl%2FMJ2dh8sGOqUBo7fPx5fhiN20PUdpm0RW0gPuhgad%2Fin59PQhqdhj3YooaBcvG23pWpcd4LC5H4jwiyQo9mm6ayPTtRgizn%2FNkb%2Bbzh0%2FGUg1%2FsEw4QEWlvYN8FZq%2FVstTK6vU52vtNpgQJ%2BNVTRsV70947e8qfyCxbcJFDeD8XrEH90YpLofTTnY4HIplw%2Fy9g4FLdJ%2B1jkCpv71LoNlzpvhv81luef14x6td1F3&X-Amz-Signature=2e764455270d527aced101bd84a0ca0236780eb53e6f98344c9590dfde349221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWR264RV%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaN9vfIRR7SWfEdcUC51DRDULgnDBKiHk9ZXCcA4lBMwIgXI%2BpYuvgPzV9UdcT9LAe0dGTH%2FsVwXw0bmAyusZxEasqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDM%2BVxG%2F8Fl06DrxCrcAxp40lfD7xFBSnvaoe0VK5c8N0LwskigmoCQph32fwwprBwY1IuPniMKD7UbLkVVXgyxNBbk1odwlOWusnKy%2FlLnOX7gn8PSpmDP6daRzEolkH4ujamJ%2FAlkJahRxtLPl6oSMF%2Bu%2Bj5h58VBp32SfDzwFbtJpDH5FiWGB6O6crTtNyMndKUHQpVM5adniS30aX4dyTqSeDB5z5c9zHxulPJGdKTHa1DEb06XB5bwCgaCHhZa38PS4oyPipcHjeVwlzowXQudKRscg%2BLKn8AHO3cOhH37xq6rHuv36tHxX%2F7rwmPCXFIlSAeE4niX0FABJg39c4hfpuf4lejBMNPI17xOVME8L%2F54NzADGulL8PvKPc16VJ2FuEfrc9%2FWjFO7Ug%2FJzd4kvYZYoGZKwJMClfLJ0BZONWwa9XhDV7FMvrrj6Ezd1v03A0dLeCqw0I5k5q%2FZ%2BLUDSJu1zAFEoioYY0l9%2FIZ5Wh7diKNVZaRxdjKtjMEjWPqzxUMNV6G0j4BpDJtcdJLulJoRA8DoZEeIQxFVZNPlTh0kjqg6vy2q2ylcmOsXhg5KaFLYMSY5jdOZN8Ponu5pRbzUEyzCDPbSGkdYtHmEEAFcL%2F9aMx2hat8mdoFePJS0WNioXSl%2FMJ2dh8sGOqUBo7fPx5fhiN20PUdpm0RW0gPuhgad%2Fin59PQhqdhj3YooaBcvG23pWpcd4LC5H4jwiyQo9mm6ayPTtRgizn%2FNkb%2Bbzh0%2FGUg1%2FsEw4QEWlvYN8FZq%2FVstTK6vU52vtNpgQJ%2BNVTRsV70947e8qfyCxbcJFDeD8XrEH90YpLofTTnY4HIplw%2Fy9g4FLdJ%2B1jkCpv71LoNlzpvhv81luef14x6td1F3&X-Amz-Signature=5de72acbf406618d7684eb9a65ba45c47405ba0f1a00b515c7dbed2d23af7173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H4KQI4T%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlAkcowoTxStjp7YJRAodw0hQyleMUO22dpnRF00oGbAiBRDgt23GdEB419KXmKIxnr%2BkJl3vL%2BfeG1sevqCfZmFCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUF7HXmN6j1j7DffvKtwDYB42WWXt17dBNwx3Z4RvGJcNrYhB2VsfTD%2B3nw%2BzmdainyW7sEoP5OPHVACq%2BVuznjqbVCKOZhwwGfjBCEtKTgsnDyHBNIiQkXju2AJrT8SlJECaIkYGYBIM2YPLbmovq4mAmyr2Lnf2%2FVvaKx6guPY5SkzclvQs174k7zT6gp3thqTZYaHs1I9mMUrEg2ymPSDbsD8snrVoIQ1u4LKE7lJUHRAP8Yl0Z3GI1ODKdnenvhGXTDikUkB%2Ftytq%2BcaXjktLIPnevpa6qvO91Kp%2BQr1mDBNS8G7l6jQufE0OQDXzjDG0GJ9%2Fqq%2FlyfEOVqi4H%2FlzI%2FhbXA6kiZ0i2w7ACUGf1zlX6xfNG8%2BJggYbwCUpI%2BEg8xBbgUTIkk17%2Fvl8gTm9kuY%2F7xnNzf2sWUHMJKhAzQncE2kNAV66zMh48ZemZazivIjhz%2FvOszQ%2FQgZZ3qzRdAIvW5HfaX1teoOOZsvPxMPwILDCPGsx%2Fa99dg6g2RLkz4q6TUuRuFuN%2F4055fMtIhldlCjHmxPoWwh86sPYXf6hczKkU5ohFKCwtlNu9eCagDzZjpp%2FMMehBgO0rDR3fVkd1kSc9R7nQQtcR4vikO67nOE0vnY61LEXhETmk1nDnanulLsexs4w9J6HywY6pgGZVZVhOgOp9mg07XF2vMu4qEznbE43kKvrrpCRVwkNoecsi45O4Tb5YncE9GxL9PhSGhEDn%2BMsVeC6dirweNqTI1U6fjU89MkrNlF8KOgIpvmOro1ROMVBtFhuX%2FUTJx5OM6E2nzbMcvdhsWbgH8QLZLPp%2FxYRJWF9sDbvTuCnKYTkRmtNqXr7I%2BvyIdQY2D4Niz7EwIrXr5Ci27DQZ0Xunry%2FNhcZ&X-Amz-Signature=37dbcffdb9f35d39fee5efb8be815ade26d27e760f9f823cda9122ffc5baf9fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H4KQI4T%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlAkcowoTxStjp7YJRAodw0hQyleMUO22dpnRF00oGbAiBRDgt23GdEB419KXmKIxnr%2BkJl3vL%2BfeG1sevqCfZmFCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUF7HXmN6j1j7DffvKtwDYB42WWXt17dBNwx3Z4RvGJcNrYhB2VsfTD%2B3nw%2BzmdainyW7sEoP5OPHVACq%2BVuznjqbVCKOZhwwGfjBCEtKTgsnDyHBNIiQkXju2AJrT8SlJECaIkYGYBIM2YPLbmovq4mAmyr2Lnf2%2FVvaKx6guPY5SkzclvQs174k7zT6gp3thqTZYaHs1I9mMUrEg2ymPSDbsD8snrVoIQ1u4LKE7lJUHRAP8Yl0Z3GI1ODKdnenvhGXTDikUkB%2Ftytq%2BcaXjktLIPnevpa6qvO91Kp%2BQr1mDBNS8G7l6jQufE0OQDXzjDG0GJ9%2Fqq%2FlyfEOVqi4H%2FlzI%2FhbXA6kiZ0i2w7ACUGf1zlX6xfNG8%2BJggYbwCUpI%2BEg8xBbgUTIkk17%2Fvl8gTm9kuY%2F7xnNzf2sWUHMJKhAzQncE2kNAV66zMh48ZemZazivIjhz%2FvOszQ%2FQgZZ3qzRdAIvW5HfaX1teoOOZsvPxMPwILDCPGsx%2Fa99dg6g2RLkz4q6TUuRuFuN%2F4055fMtIhldlCjHmxPoWwh86sPYXf6hczKkU5ohFKCwtlNu9eCagDzZjpp%2FMMehBgO0rDR3fVkd1kSc9R7nQQtcR4vikO67nOE0vnY61LEXhETmk1nDnanulLsexs4w9J6HywY6pgGZVZVhOgOp9mg07XF2vMu4qEznbE43kKvrrpCRVwkNoecsi45O4Tb5YncE9GxL9PhSGhEDn%2BMsVeC6dirweNqTI1U6fjU89MkrNlF8KOgIpvmOro1ROMVBtFhuX%2FUTJx5OM6E2nzbMcvdhsWbgH8QLZLPp%2FxYRJWF9sDbvTuCnKYTkRmtNqXr7I%2BvyIdQY2D4Niz7EwIrXr5Ci27DQZ0Xunry%2FNhcZ&X-Amz-Signature=ef680dfc17e353862bc6288b575b17512a9fae5f05e37373e05df5b906d137d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OTKQRVA%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpTgjVqr5TzcZZjE1nM4C8ziPyKqLRvQG4Z%2FoSNZwIMwIhAL7Xasy0SI9xGQY5elrYXnTsD2EvcO5K3d74ZI%2F%2B3x%2BRKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjOPLjFsuqQJqGndYq3ANI305PjTW%2FapvT01fHZLuJfKm9qHenLsHp7jcO1VRfwBLlAgjUh%2FwuXAD0hlADX8JHOBLHSaW0g9pFJ5OXC9kPbbBU39azxvzywy%2FbXYfa%2BUGRHnx7mRF2xRhoHCsQKGdX1bCPURnip7NcLmp2bOrr0%2FTHtrETd3PQSPEbFFVrMdNn0P4mnAR16JpWEc7gUz7w8Pgue%2FaI5tE3bRmdwGzYBIQ%2FPwp5HOjZfVDQpyPtUK0vWAL4rY1H%2BPAjSCDPc3uNT2OwvtH4UVuPlNIasRIZwRjUX9aNyA0KyxbVo1v3Ew6W6GTL%2FCoNZwEMvDCgpts6Ncr4G35IQqly37lhvn1m%2BTCczs8IuzJVx7h%2F8BIqXMtBSrWxYQgzltehZo7vBYrSWqe9M%2BY%2FiwPAg%2FYEiwjL6V5Xi4jrH1FKdGL67Wcg30PQpvNFH66kuAVK1oVMXpXbXn9Mg1PfnAVrolFAOrPdZhmixKlh44On%2FyZ6BT7ZnE%2BRgWoHRLCCNwOtoanvZSWsx%2FyaO6vQ07vX6hs4CHqKB%2BNIvt2ckaj5vt8lvkmdR4CKeD8%2FfKqgl%2B2vUtbxFB%2Fvvb1kMPmOi5A19ebU9zkWxkXLNKHnDpnRcCnoR9OuBp203qBs2Z5IyIYOGDCWnofLBjqkARv2MdhbJn1%2F1Ao6JCx3%2BoHDoURoiBaT6Cj6M6DYHgmbfRzP1xogQzU7OivVIUyFnc80OIVL%2FkT0F0y4xnU7yEaM2wKaMiwH8y37iGpVVXtQL65VsoYJOZttS6tP%2BBSgbmIykOKyCkytIOhH27GNmw5WN6UhDCbGYV7CGj%2BL1%2B76pXXyDjR2WMvsHAKPGSPhAYna5jlqV9XQkz%2FHT0I8to3b4QPj&X-Amz-Signature=4fb9a8693f3c77c110d9025a81c0ab6e74319e345bf38f64294f09112472d250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OTKQRVA%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpTgjVqr5TzcZZjE1nM4C8ziPyKqLRvQG4Z%2FoSNZwIMwIhAL7Xasy0SI9xGQY5elrYXnTsD2EvcO5K3d74ZI%2F%2B3x%2BRKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjOPLjFsuqQJqGndYq3ANI305PjTW%2FapvT01fHZLuJfKm9qHenLsHp7jcO1VRfwBLlAgjUh%2FwuXAD0hlADX8JHOBLHSaW0g9pFJ5OXC9kPbbBU39azxvzywy%2FbXYfa%2BUGRHnx7mRF2xRhoHCsQKGdX1bCPURnip7NcLmp2bOrr0%2FTHtrETd3PQSPEbFFVrMdNn0P4mnAR16JpWEc7gUz7w8Pgue%2FaI5tE3bRmdwGzYBIQ%2FPwp5HOjZfVDQpyPtUK0vWAL4rY1H%2BPAjSCDPc3uNT2OwvtH4UVuPlNIasRIZwRjUX9aNyA0KyxbVo1v3Ew6W6GTL%2FCoNZwEMvDCgpts6Ncr4G35IQqly37lhvn1m%2BTCczs8IuzJVx7h%2F8BIqXMtBSrWxYQgzltehZo7vBYrSWqe9M%2BY%2FiwPAg%2FYEiwjL6V5Xi4jrH1FKdGL67Wcg30PQpvNFH66kuAVK1oVMXpXbXn9Mg1PfnAVrolFAOrPdZhmixKlh44On%2FyZ6BT7ZnE%2BRgWoHRLCCNwOtoanvZSWsx%2FyaO6vQ07vX6hs4CHqKB%2BNIvt2ckaj5vt8lvkmdR4CKeD8%2FfKqgl%2B2vUtbxFB%2Fvvb1kMPmOi5A19ebU9zkWxkXLNKHnDpnRcCnoR9OuBp203qBs2Z5IyIYOGDCWnofLBjqkARv2MdhbJn1%2F1Ao6JCx3%2BoHDoURoiBaT6Cj6M6DYHgmbfRzP1xogQzU7OivVIUyFnc80OIVL%2FkT0F0y4xnU7yEaM2wKaMiwH8y37iGpVVXtQL65VsoYJOZttS6tP%2BBSgbmIykOKyCkytIOhH27GNmw5WN6UhDCbGYV7CGj%2BL1%2B76pXXyDjR2WMvsHAKPGSPhAYna5jlqV9XQkz%2FHT0I8to3b4QPj&X-Amz-Signature=ddc4194186d1eea8defbea951979f275651266759f0e8ee5895eaf3318e07fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OTKQRVA%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpTgjVqr5TzcZZjE1nM4C8ziPyKqLRvQG4Z%2FoSNZwIMwIhAL7Xasy0SI9xGQY5elrYXnTsD2EvcO5K3d74ZI%2F%2B3x%2BRKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjOPLjFsuqQJqGndYq3ANI305PjTW%2FapvT01fHZLuJfKm9qHenLsHp7jcO1VRfwBLlAgjUh%2FwuXAD0hlADX8JHOBLHSaW0g9pFJ5OXC9kPbbBU39azxvzywy%2FbXYfa%2BUGRHnx7mRF2xRhoHCsQKGdX1bCPURnip7NcLmp2bOrr0%2FTHtrETd3PQSPEbFFVrMdNn0P4mnAR16JpWEc7gUz7w8Pgue%2FaI5tE3bRmdwGzYBIQ%2FPwp5HOjZfVDQpyPtUK0vWAL4rY1H%2BPAjSCDPc3uNT2OwvtH4UVuPlNIasRIZwRjUX9aNyA0KyxbVo1v3Ew6W6GTL%2FCoNZwEMvDCgpts6Ncr4G35IQqly37lhvn1m%2BTCczs8IuzJVx7h%2F8BIqXMtBSrWxYQgzltehZo7vBYrSWqe9M%2BY%2FiwPAg%2FYEiwjL6V5Xi4jrH1FKdGL67Wcg30PQpvNFH66kuAVK1oVMXpXbXn9Mg1PfnAVrolFAOrPdZhmixKlh44On%2FyZ6BT7ZnE%2BRgWoHRLCCNwOtoanvZSWsx%2FyaO6vQ07vX6hs4CHqKB%2BNIvt2ckaj5vt8lvkmdR4CKeD8%2FfKqgl%2B2vUtbxFB%2Fvvb1kMPmOi5A19ebU9zkWxkXLNKHnDpnRcCnoR9OuBp203qBs2Z5IyIYOGDCWnofLBjqkARv2MdhbJn1%2F1Ao6JCx3%2BoHDoURoiBaT6Cj6M6DYHgmbfRzP1xogQzU7OivVIUyFnc80OIVL%2FkT0F0y4xnU7yEaM2wKaMiwH8y37iGpVVXtQL65VsoYJOZttS6tP%2BBSgbmIykOKyCkytIOhH27GNmw5WN6UhDCbGYV7CGj%2BL1%2B76pXXyDjR2WMvsHAKPGSPhAYna5jlqV9XQkz%2FHT0I8to3b4QPj&X-Amz-Signature=fda0beb71c1669efb4e1393c48385cc8d9967a8780bc9845caf4f1d3099d6c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OTKQRVA%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpTgjVqr5TzcZZjE1nM4C8ziPyKqLRvQG4Z%2FoSNZwIMwIhAL7Xasy0SI9xGQY5elrYXnTsD2EvcO5K3d74ZI%2F%2B3x%2BRKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjOPLjFsuqQJqGndYq3ANI305PjTW%2FapvT01fHZLuJfKm9qHenLsHp7jcO1VRfwBLlAgjUh%2FwuXAD0hlADX8JHOBLHSaW0g9pFJ5OXC9kPbbBU39azxvzywy%2FbXYfa%2BUGRHnx7mRF2xRhoHCsQKGdX1bCPURnip7NcLmp2bOrr0%2FTHtrETd3PQSPEbFFVrMdNn0P4mnAR16JpWEc7gUz7w8Pgue%2FaI5tE3bRmdwGzYBIQ%2FPwp5HOjZfVDQpyPtUK0vWAL4rY1H%2BPAjSCDPc3uNT2OwvtH4UVuPlNIasRIZwRjUX9aNyA0KyxbVo1v3Ew6W6GTL%2FCoNZwEMvDCgpts6Ncr4G35IQqly37lhvn1m%2BTCczs8IuzJVx7h%2F8BIqXMtBSrWxYQgzltehZo7vBYrSWqe9M%2BY%2FiwPAg%2FYEiwjL6V5Xi4jrH1FKdGL67Wcg30PQpvNFH66kuAVK1oVMXpXbXn9Mg1PfnAVrolFAOrPdZhmixKlh44On%2FyZ6BT7ZnE%2BRgWoHRLCCNwOtoanvZSWsx%2FyaO6vQ07vX6hs4CHqKB%2BNIvt2ckaj5vt8lvkmdR4CKeD8%2FfKqgl%2B2vUtbxFB%2Fvvb1kMPmOi5A19ebU9zkWxkXLNKHnDpnRcCnoR9OuBp203qBs2Z5IyIYOGDCWnofLBjqkARv2MdhbJn1%2F1Ao6JCx3%2BoHDoURoiBaT6Cj6M6DYHgmbfRzP1xogQzU7OivVIUyFnc80OIVL%2FkT0F0y4xnU7yEaM2wKaMiwH8y37iGpVVXtQL65VsoYJOZttS6tP%2BBSgbmIykOKyCkytIOhH27GNmw5WN6UhDCbGYV7CGj%2BL1%2B76pXXyDjR2WMvsHAKPGSPhAYna5jlqV9XQkz%2FHT0I8to3b4QPj&X-Amz-Signature=3b15e8d3de1ee821ca711f585e21198e567932c1c0feb2769a70bf058cf856ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OTKQRVA%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpTgjVqr5TzcZZjE1nM4C8ziPyKqLRvQG4Z%2FoSNZwIMwIhAL7Xasy0SI9xGQY5elrYXnTsD2EvcO5K3d74ZI%2F%2B3x%2BRKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjOPLjFsuqQJqGndYq3ANI305PjTW%2FapvT01fHZLuJfKm9qHenLsHp7jcO1VRfwBLlAgjUh%2FwuXAD0hlADX8JHOBLHSaW0g9pFJ5OXC9kPbbBU39azxvzywy%2FbXYfa%2BUGRHnx7mRF2xRhoHCsQKGdX1bCPURnip7NcLmp2bOrr0%2FTHtrETd3PQSPEbFFVrMdNn0P4mnAR16JpWEc7gUz7w8Pgue%2FaI5tE3bRmdwGzYBIQ%2FPwp5HOjZfVDQpyPtUK0vWAL4rY1H%2BPAjSCDPc3uNT2OwvtH4UVuPlNIasRIZwRjUX9aNyA0KyxbVo1v3Ew6W6GTL%2FCoNZwEMvDCgpts6Ncr4G35IQqly37lhvn1m%2BTCczs8IuzJVx7h%2F8BIqXMtBSrWxYQgzltehZo7vBYrSWqe9M%2BY%2FiwPAg%2FYEiwjL6V5Xi4jrH1FKdGL67Wcg30PQpvNFH66kuAVK1oVMXpXbXn9Mg1PfnAVrolFAOrPdZhmixKlh44On%2FyZ6BT7ZnE%2BRgWoHRLCCNwOtoanvZSWsx%2FyaO6vQ07vX6hs4CHqKB%2BNIvt2ckaj5vt8lvkmdR4CKeD8%2FfKqgl%2B2vUtbxFB%2Fvvb1kMPmOi5A19ebU9zkWxkXLNKHnDpnRcCnoR9OuBp203qBs2Z5IyIYOGDCWnofLBjqkARv2MdhbJn1%2F1Ao6JCx3%2BoHDoURoiBaT6Cj6M6DYHgmbfRzP1xogQzU7OivVIUyFnc80OIVL%2FkT0F0y4xnU7yEaM2wKaMiwH8y37iGpVVXtQL65VsoYJOZttS6tP%2BBSgbmIykOKyCkytIOhH27GNmw5WN6UhDCbGYV7CGj%2BL1%2B76pXXyDjR2WMvsHAKPGSPhAYna5jlqV9XQkz%2FHT0I8to3b4QPj&X-Amz-Signature=5348070c53e74659f984b9d557eefe25e4e995329eb9ea0f9df7f934ad9ddb04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GOPCGIL%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T040432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHLPpQgbryIlAsAyfnJohh1f5VGpQAu3g95fuZzdnk7AiAsaZ8Qls0t8WC5xnVbi7eDN8uxes%2BWPswigHsxJTFuwiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML16KaRsUKy4l%2B%2FnNKtwDc2nHdXYPcIM9l2GUGjamDE8EWX33NuKeYdExsbalT74uQeMgFiIB8Jc8t3qCkZ94XlsDxL01hWUuxVafJG3FJDpS1ZcSemM7BPsg1hVn1Weu06LGghRtilwrXuOBAv0uVJq6vcx6n%2FxacabbUiAbRl7L%2FM28ZMEGnNaLHUPufkz7EETWKHSSRrEU7NkZnrWvQWhDoTQ%2FGyUxbWgMH%2FVSieHJEaPyUqRsaUA2JyBpH%2BMwjUZfUIFDwOleKt7a%2FbyIK%2FRuGwip31H42HLZhDSdJ5KBkxw1OsqDGcJrQOQtobX%2B4lFDh3kBVY43CFBdrTQN57Mspoql6EsztAIdW6I4NRaA0u1wk0yP7yeE00Yh2DFm3xvrtSyFk94Hn7zSdWaWY4yv61dWf0po8WVNrVddz6dujxiLtfl%2B2C709%2FqqGPDYMFzxfE9qyG3yGEEqRkEFaepUODarEgXrKrW9rTa7eXxamag6PnxqdxaT435VrfEkL7HJHjUT2aNdQgha1vAldvMNtBO5jhLbt9YjIQuL0HIQiMPXkfL3IHROTHGIiQu%2BEE8t9C3NEwwSlZ0G7K59bWV5vm30ahFeMbA9FmK%2B72Qv60rVimhNP3CWvT1Cz2ib8sklQbU59niQ9vowkJ2HywY6pgGm3jLPnwXEP%2FDXZLbNUNFHB%2B4RZ8wA3fzIRIC9SpoAOtSBDLGCc7tM7A%2BY8TfMpIvgbJuJ1thG9Phwqtga85sjXBkpIxIISK4fH2QrUM%2BGfqLVTypCOt1AaRhlv2qGzSvBWZpE%2BHdZs639bGmc54ScsAq2hT2v4MaY6W21gP1C%2FX162xqK3BAFWzx8Gx7ovzqTrQDT03I6R2YCTrCHd%2BvYscAIkMLR&X-Amz-Signature=4c02862db384b82eb32ba01ba57cb651cf6cc47f03431eef3e0c6c8c0f28eedc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

