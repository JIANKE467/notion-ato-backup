
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN3CLWYA%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BjaARX5fLbfS0CKum1pKlR6ffMptLWqQJpdGuRJV4pAIge7HzYqBLBz8fHdHY6jTosjWk4%2BC9KomynsaNluA2gbEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLwt0CcdMPBlUnkzCrcAzwkz64d41L3SFoepsU4ch7BaEOZJezSUS2Zxkh15ryVpzdQyeILoTD2L1ZslJSS06P4A3zKIbSqp51kTWi7EdLFoj8qNTa3LF1oSA%2Fk%2F0kBBQhSgtwaWHtO%2Bgb8nKMgKu4T0pTPZJIdJzUKUHJeWzuOX42b3d4grx10kG9vw%2FwRN%2Bab%2FVgMYu9Du1qmgDoQyk83jwhyiN93kCLJDAUNAKDOdrcOlhUKoWRMEOhTLav1b5gjwfyYMnrLnY1r6TttXqfsIyQvoyy6wiL9kA%2FeNCQ2e%2FOeT5VqsB7VdnFH4Qp%2FI91IsnICY2ayZ33PEptAwUbGnnXkghdsciW17avkdWWWpwCzEXU5VGDc8t5l%2BhX53TrN0ME0Knm4cQ4r02u17exPyDOlTAcr3AhRSrhtUlqfosPHycbst3lkzRmlY4oAdEUKUqQOPhlHrUqsVCsxAVKHnzw5nsOmVzPN0cZwqMezNF1KhwF4XfspMSh5z58CjV4VUdLJZCCxbids3%2F217FWEoaoCsMY2X2fmac5Yh2WdXSyrcWviAkqrm0ZFW4WwsJlfrvWvvkoZaNZb6decSrWYuY9SIzLK7Ey9liE2kVXAlH4SDq0ckkCcIZrOg9rP%2FwetzekcfKZstzneMPzsgcsGOqUBSlw6en9O9YHonNiE%2F4He3wSqGY1t3pDl%2FgmSM6S7q2IjZhxLfQ7WGQONpnbCE6i7p1cathaIWXwvUTm4EEeY2oBOTY%2FnpMro6wyeBCfLt56dQjiMozezO5XABmBvK5wPOsp3qhV3OM5AGScjmS2%2BC1NjEaosOQatKMapKfZL8fqSv8sw62Amgwfu%2FUv1xGsDkVJv83MHUVD5wc8RADA375nTTcnJ&X-Amz-Signature=b6876d0fbd7327b5c13c85410c455fbde517b6baa5936fb984bcebf0ba41643d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THRUUOTW%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbrnWzUAIUWetTh%2By3gEMkFdMjiSkV0AsT%2BEjHszANCgIhANViZGSx%2ForbWyJEirqMLTI2zLB207ZL3uS5v%2B3dVxvdKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwDtpF7Icf6ud8Mccq3AOUBU2XS8nC0JkmidgdO%2Fu%2BYT3nXXEAdlDjbop6B6uVyXbRRqcVvMee1riPi2JqOMwPccrZvdORDUdnGMVieg8e7qTcEGobat8opG6AdwHjtNPoMoh%2BzUFkwt0NCgM4%2FyirfvI3VS1%2BPNjn%2FqsqL0gI4OcdC2PF3W4yth9YMQ91auzDKMjcGmS0R6n5EVGheAI%2BjsqRfYoHbvFWdPdeHEUxtWSIYTpJWgAPpvpCPuV8JpPCNLKmAUaooNrg7R8ltBELptmlOlw9iLyngvuja8HkqTieK8yjsyvc%2B7j4ReyLWY6nrpZHwgEr5ju5ZN4BTdkxQ9xp0i4LgITQsqk91iWlXUPBmYEgKBwNJ8FAZSrt7o0jIjMoIltXFTA%2BZX62c%2BcCg7qeWDY54H84bIenLHHeqDpfT8zcaG4oHz47I7HrM%2Fcsa%2B5%2Fa%2B5uOQc0nJxxTBcky7h8mbPNHmMlGHKtPcFBwJFuC538fQolZQmZYH51Paj8j0xRbZEqeilhiVAV3RT9Ny1%2Fe82%2FQG8sySh%2Bn8Eolh3csnOoKDcTqYM5cHVXIWAuUUjPGL7KXI%2FtPwFvFpdSbnBYhqf7KBdPt38RUCcMbl9ZyDeMzPoeY%2F4JAJzG2KyC172sqy370TRRDzC27YHLBjqkAXLogapvseaDyZ6mAvGRd9HNgRDbp%2FKWOmmMna37KcDZxSZRCo5Q%2FrQMAv8z%2FEmzm35Oyxi6rVvPe1umS62NqQrN4Y8l532RBngbxJwKm%2BmlRdAlIFhuAW1OOiTwf6mh4LRhBA%2F7CES%2Bsw13oPCkmlpYKEXYy1l13CNJFaaUonJtnmBFzBEgmkIcUav4Klv9oNcNpMv38CzCRAoP4u0uTWZWRKxd&X-Amz-Signature=81db9bc385d0086cc681c48195c42b7a29784d2adf141aac3f0e7f6abe6bfd6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THRUUOTW%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbrnWzUAIUWetTh%2By3gEMkFdMjiSkV0AsT%2BEjHszANCgIhANViZGSx%2ForbWyJEirqMLTI2zLB207ZL3uS5v%2B3dVxvdKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwDtpF7Icf6ud8Mccq3AOUBU2XS8nC0JkmidgdO%2Fu%2BYT3nXXEAdlDjbop6B6uVyXbRRqcVvMee1riPi2JqOMwPccrZvdORDUdnGMVieg8e7qTcEGobat8opG6AdwHjtNPoMoh%2BzUFkwt0NCgM4%2FyirfvI3VS1%2BPNjn%2FqsqL0gI4OcdC2PF3W4yth9YMQ91auzDKMjcGmS0R6n5EVGheAI%2BjsqRfYoHbvFWdPdeHEUxtWSIYTpJWgAPpvpCPuV8JpPCNLKmAUaooNrg7R8ltBELptmlOlw9iLyngvuja8HkqTieK8yjsyvc%2B7j4ReyLWY6nrpZHwgEr5ju5ZN4BTdkxQ9xp0i4LgITQsqk91iWlXUPBmYEgKBwNJ8FAZSrt7o0jIjMoIltXFTA%2BZX62c%2BcCg7qeWDY54H84bIenLHHeqDpfT8zcaG4oHz47I7HrM%2Fcsa%2B5%2Fa%2B5uOQc0nJxxTBcky7h8mbPNHmMlGHKtPcFBwJFuC538fQolZQmZYH51Paj8j0xRbZEqeilhiVAV3RT9Ny1%2Fe82%2FQG8sySh%2Bn8Eolh3csnOoKDcTqYM5cHVXIWAuUUjPGL7KXI%2FtPwFvFpdSbnBYhqf7KBdPt38RUCcMbl9ZyDeMzPoeY%2F4JAJzG2KyC172sqy370TRRDzC27YHLBjqkAXLogapvseaDyZ6mAvGRd9HNgRDbp%2FKWOmmMna37KcDZxSZRCo5Q%2FrQMAv8z%2FEmzm35Oyxi6rVvPe1umS62NqQrN4Y8l532RBngbxJwKm%2BmlRdAlIFhuAW1OOiTwf6mh4LRhBA%2F7CES%2Bsw13oPCkmlpYKEXYy1l13CNJFaaUonJtnmBFzBEgmkIcUav4Klv9oNcNpMv38CzCRAoP4u0uTWZWRKxd&X-Amz-Signature=4b251ed4098173805bbb26a06836bf6328097d3905e317b7f074ef9904759829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ74CH4B%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvpq%2BKKqAjZjARlZpwzm3xKOP5CnqjQ2szSLu9ri%2BHuAiAkS%2F%2BN9fUWKDRugJVLGKMRlUeW3bA4COjsejF8JrneVyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3HzYaustIvShQD8eKtwDwDaMR6IqfTy4Prtl5CLrvUNxwZ796OsYCmSu9ajAJfD3Sp1ioircTs%2BjqjR%2BWpem2DcM3EfnmFjqEWm2MGctlpREKGWiFMETF0fhLInkIZMC3SQ8HTdPomFmf9cBaJh%2BlgYtHU%2FudF2up5wCh5gx1i8%2B3k1FEj587805u%2F43vvQevZlUNiZHvdu9jXLlTUr0HWiTaEHXh3OTAgbRNk6FSpiY2HfyvpsZVaWyggX0NCs5ojDuUa9hPpDOh3X9QekqIqgO66sE%2FSVb1FLk3I3a5puaxOan4p9CeLk0F7iZdkumw63JY97mfJhSW5rPh8vP4QgZYu6K%2FmM8PuoAz2XVutRx8jub3RNHBIeYrCh%2BFBeHavc2ziaojqnE2ZJPyCmuo5JZYZAr0jxyDPyUoACgYScbDXF1HoWp%2FbxdTwySP93LVuhyr0DqP4OqA8r1yH7ykUnN%2Bdp9Jo8uI%2FAComSvJTSiRvtnAuyTXTuqFWcPoEAlEV6jctNatD4fEGOfZVppIaqboSJBma0eeNDgOYOi8cBt0AOpDGp%2FZ5nwMuN9jN4r8XExtI%2FYrPEb8KwjS9xB6nk2Dpcb91mPSNlbBvnRxif5p4Q%2FMZrEwgjJg7xZmQGNMuNaSBpHsvzYXIMw4eyBywY6pgHFWBA3JsEMlKxt0xTHYCae72NEVJZ6DHQD6%2Blez0oq3UQX%2Fm0MQp13us%2BNsPkZvxVxOL5a5uVmcf6yR1cdeVFe8K7Lw2SKItmPhCHDEaCeKRUzgWUCHKxadKdTM7YMrycdRyQ3DNvS03IoXMuwCMvItD3ciunAks6SJAfQ2HUes4Vu2DjkDKsiVMeZQYkt5t6w1hPSz%2BZRTN7w0d%2FCvibxgo7P1pRo&X-Amz-Signature=c93385d3c072d26f2e5b7718336095a35d3fc5ff9fa3ac258ca73cee699b0af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ74CH4B%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvpq%2BKKqAjZjARlZpwzm3xKOP5CnqjQ2szSLu9ri%2BHuAiAkS%2F%2BN9fUWKDRugJVLGKMRlUeW3bA4COjsejF8JrneVyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3HzYaustIvShQD8eKtwDwDaMR6IqfTy4Prtl5CLrvUNxwZ796OsYCmSu9ajAJfD3Sp1ioircTs%2BjqjR%2BWpem2DcM3EfnmFjqEWm2MGctlpREKGWiFMETF0fhLInkIZMC3SQ8HTdPomFmf9cBaJh%2BlgYtHU%2FudF2up5wCh5gx1i8%2B3k1FEj587805u%2F43vvQevZlUNiZHvdu9jXLlTUr0HWiTaEHXh3OTAgbRNk6FSpiY2HfyvpsZVaWyggX0NCs5ojDuUa9hPpDOh3X9QekqIqgO66sE%2FSVb1FLk3I3a5puaxOan4p9CeLk0F7iZdkumw63JY97mfJhSW5rPh8vP4QgZYu6K%2FmM8PuoAz2XVutRx8jub3RNHBIeYrCh%2BFBeHavc2ziaojqnE2ZJPyCmuo5JZYZAr0jxyDPyUoACgYScbDXF1HoWp%2FbxdTwySP93LVuhyr0DqP4OqA8r1yH7ykUnN%2Bdp9Jo8uI%2FAComSvJTSiRvtnAuyTXTuqFWcPoEAlEV6jctNatD4fEGOfZVppIaqboSJBma0eeNDgOYOi8cBt0AOpDGp%2FZ5nwMuN9jN4r8XExtI%2FYrPEb8KwjS9xB6nk2Dpcb91mPSNlbBvnRxif5p4Q%2FMZrEwgjJg7xZmQGNMuNaSBpHsvzYXIMw4eyBywY6pgHFWBA3JsEMlKxt0xTHYCae72NEVJZ6DHQD6%2Blez0oq3UQX%2Fm0MQp13us%2BNsPkZvxVxOL5a5uVmcf6yR1cdeVFe8K7Lw2SKItmPhCHDEaCeKRUzgWUCHKxadKdTM7YMrycdRyQ3DNvS03IoXMuwCMvItD3ciunAks6SJAfQ2HUes4Vu2DjkDKsiVMeZQYkt5t6w1hPSz%2BZRTN7w0d%2FCvibxgo7P1pRo&X-Amz-Signature=ccf75064aef290dd860d31b563bcf8418657ea3e5a99c141170df7a14c98542c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ74CH4B%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvpq%2BKKqAjZjARlZpwzm3xKOP5CnqjQ2szSLu9ri%2BHuAiAkS%2F%2BN9fUWKDRugJVLGKMRlUeW3bA4COjsejF8JrneVyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3HzYaustIvShQD8eKtwDwDaMR6IqfTy4Prtl5CLrvUNxwZ796OsYCmSu9ajAJfD3Sp1ioircTs%2BjqjR%2BWpem2DcM3EfnmFjqEWm2MGctlpREKGWiFMETF0fhLInkIZMC3SQ8HTdPomFmf9cBaJh%2BlgYtHU%2FudF2up5wCh5gx1i8%2B3k1FEj587805u%2F43vvQevZlUNiZHvdu9jXLlTUr0HWiTaEHXh3OTAgbRNk6FSpiY2HfyvpsZVaWyggX0NCs5ojDuUa9hPpDOh3X9QekqIqgO66sE%2FSVb1FLk3I3a5puaxOan4p9CeLk0F7iZdkumw63JY97mfJhSW5rPh8vP4QgZYu6K%2FmM8PuoAz2XVutRx8jub3RNHBIeYrCh%2BFBeHavc2ziaojqnE2ZJPyCmuo5JZYZAr0jxyDPyUoACgYScbDXF1HoWp%2FbxdTwySP93LVuhyr0DqP4OqA8r1yH7ykUnN%2Bdp9Jo8uI%2FAComSvJTSiRvtnAuyTXTuqFWcPoEAlEV6jctNatD4fEGOfZVppIaqboSJBma0eeNDgOYOi8cBt0AOpDGp%2FZ5nwMuN9jN4r8XExtI%2FYrPEb8KwjS9xB6nk2Dpcb91mPSNlbBvnRxif5p4Q%2FMZrEwgjJg7xZmQGNMuNaSBpHsvzYXIMw4eyBywY6pgHFWBA3JsEMlKxt0xTHYCae72NEVJZ6DHQD6%2Blez0oq3UQX%2Fm0MQp13us%2BNsPkZvxVxOL5a5uVmcf6yR1cdeVFe8K7Lw2SKItmPhCHDEaCeKRUzgWUCHKxadKdTM7YMrycdRyQ3DNvS03IoXMuwCMvItD3ciunAks6SJAfQ2HUes4Vu2DjkDKsiVMeZQYkt5t6w1hPSz%2BZRTN7w0d%2FCvibxgo7P1pRo&X-Amz-Signature=74d11dc7a58ca1029a895e5b9d97c89875e902c649bf27951d8051fccc8004af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ74CH4B%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvpq%2BKKqAjZjARlZpwzm3xKOP5CnqjQ2szSLu9ri%2BHuAiAkS%2F%2BN9fUWKDRugJVLGKMRlUeW3bA4COjsejF8JrneVyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3HzYaustIvShQD8eKtwDwDaMR6IqfTy4Prtl5CLrvUNxwZ796OsYCmSu9ajAJfD3Sp1ioircTs%2BjqjR%2BWpem2DcM3EfnmFjqEWm2MGctlpREKGWiFMETF0fhLInkIZMC3SQ8HTdPomFmf9cBaJh%2BlgYtHU%2FudF2up5wCh5gx1i8%2B3k1FEj587805u%2F43vvQevZlUNiZHvdu9jXLlTUr0HWiTaEHXh3OTAgbRNk6FSpiY2HfyvpsZVaWyggX0NCs5ojDuUa9hPpDOh3X9QekqIqgO66sE%2FSVb1FLk3I3a5puaxOan4p9CeLk0F7iZdkumw63JY97mfJhSW5rPh8vP4QgZYu6K%2FmM8PuoAz2XVutRx8jub3RNHBIeYrCh%2BFBeHavc2ziaojqnE2ZJPyCmuo5JZYZAr0jxyDPyUoACgYScbDXF1HoWp%2FbxdTwySP93LVuhyr0DqP4OqA8r1yH7ykUnN%2Bdp9Jo8uI%2FAComSvJTSiRvtnAuyTXTuqFWcPoEAlEV6jctNatD4fEGOfZVppIaqboSJBma0eeNDgOYOi8cBt0AOpDGp%2FZ5nwMuN9jN4r8XExtI%2FYrPEb8KwjS9xB6nk2Dpcb91mPSNlbBvnRxif5p4Q%2FMZrEwgjJg7xZmQGNMuNaSBpHsvzYXIMw4eyBywY6pgHFWBA3JsEMlKxt0xTHYCae72NEVJZ6DHQD6%2Blez0oq3UQX%2Fm0MQp13us%2BNsPkZvxVxOL5a5uVmcf6yR1cdeVFe8K7Lw2SKItmPhCHDEaCeKRUzgWUCHKxadKdTM7YMrycdRyQ3DNvS03IoXMuwCMvItD3ciunAks6SJAfQ2HUes4Vu2DjkDKsiVMeZQYkt5t6w1hPSz%2BZRTN7w0d%2FCvibxgo7P1pRo&X-Amz-Signature=5ec157a2e59d2ec52e6b7e361cc00c47b18f9aa6eea0fab67b56a6473b734642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ74CH4B%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvpq%2BKKqAjZjARlZpwzm3xKOP5CnqjQ2szSLu9ri%2BHuAiAkS%2F%2BN9fUWKDRugJVLGKMRlUeW3bA4COjsejF8JrneVyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3HzYaustIvShQD8eKtwDwDaMR6IqfTy4Prtl5CLrvUNxwZ796OsYCmSu9ajAJfD3Sp1ioircTs%2BjqjR%2BWpem2DcM3EfnmFjqEWm2MGctlpREKGWiFMETF0fhLInkIZMC3SQ8HTdPomFmf9cBaJh%2BlgYtHU%2FudF2up5wCh5gx1i8%2B3k1FEj587805u%2F43vvQevZlUNiZHvdu9jXLlTUr0HWiTaEHXh3OTAgbRNk6FSpiY2HfyvpsZVaWyggX0NCs5ojDuUa9hPpDOh3X9QekqIqgO66sE%2FSVb1FLk3I3a5puaxOan4p9CeLk0F7iZdkumw63JY97mfJhSW5rPh8vP4QgZYu6K%2FmM8PuoAz2XVutRx8jub3RNHBIeYrCh%2BFBeHavc2ziaojqnE2ZJPyCmuo5JZYZAr0jxyDPyUoACgYScbDXF1HoWp%2FbxdTwySP93LVuhyr0DqP4OqA8r1yH7ykUnN%2Bdp9Jo8uI%2FAComSvJTSiRvtnAuyTXTuqFWcPoEAlEV6jctNatD4fEGOfZVppIaqboSJBma0eeNDgOYOi8cBt0AOpDGp%2FZ5nwMuN9jN4r8XExtI%2FYrPEb8KwjS9xB6nk2Dpcb91mPSNlbBvnRxif5p4Q%2FMZrEwgjJg7xZmQGNMuNaSBpHsvzYXIMw4eyBywY6pgHFWBA3JsEMlKxt0xTHYCae72NEVJZ6DHQD6%2Blez0oq3UQX%2Fm0MQp13us%2BNsPkZvxVxOL5a5uVmcf6yR1cdeVFe8K7Lw2SKItmPhCHDEaCeKRUzgWUCHKxadKdTM7YMrycdRyQ3DNvS03IoXMuwCMvItD3ciunAks6SJAfQ2HUes4Vu2DjkDKsiVMeZQYkt5t6w1hPSz%2BZRTN7w0d%2FCvibxgo7P1pRo&X-Amz-Signature=e6fe03f9a1806be577f4bbcb24e75ab19048291a627b1f3e100c66dd67d5dc98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ74CH4B%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvpq%2BKKqAjZjARlZpwzm3xKOP5CnqjQ2szSLu9ri%2BHuAiAkS%2F%2BN9fUWKDRugJVLGKMRlUeW3bA4COjsejF8JrneVyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3HzYaustIvShQD8eKtwDwDaMR6IqfTy4Prtl5CLrvUNxwZ796OsYCmSu9ajAJfD3Sp1ioircTs%2BjqjR%2BWpem2DcM3EfnmFjqEWm2MGctlpREKGWiFMETF0fhLInkIZMC3SQ8HTdPomFmf9cBaJh%2BlgYtHU%2FudF2up5wCh5gx1i8%2B3k1FEj587805u%2F43vvQevZlUNiZHvdu9jXLlTUr0HWiTaEHXh3OTAgbRNk6FSpiY2HfyvpsZVaWyggX0NCs5ojDuUa9hPpDOh3X9QekqIqgO66sE%2FSVb1FLk3I3a5puaxOan4p9CeLk0F7iZdkumw63JY97mfJhSW5rPh8vP4QgZYu6K%2FmM8PuoAz2XVutRx8jub3RNHBIeYrCh%2BFBeHavc2ziaojqnE2ZJPyCmuo5JZYZAr0jxyDPyUoACgYScbDXF1HoWp%2FbxdTwySP93LVuhyr0DqP4OqA8r1yH7ykUnN%2Bdp9Jo8uI%2FAComSvJTSiRvtnAuyTXTuqFWcPoEAlEV6jctNatD4fEGOfZVppIaqboSJBma0eeNDgOYOi8cBt0AOpDGp%2FZ5nwMuN9jN4r8XExtI%2FYrPEb8KwjS9xB6nk2Dpcb91mPSNlbBvnRxif5p4Q%2FMZrEwgjJg7xZmQGNMuNaSBpHsvzYXIMw4eyBywY6pgHFWBA3JsEMlKxt0xTHYCae72NEVJZ6DHQD6%2Blez0oq3UQX%2Fm0MQp13us%2BNsPkZvxVxOL5a5uVmcf6yR1cdeVFe8K7Lw2SKItmPhCHDEaCeKRUzgWUCHKxadKdTM7YMrycdRyQ3DNvS03IoXMuwCMvItD3ciunAks6SJAfQ2HUes4Vu2DjkDKsiVMeZQYkt5t6w1hPSz%2BZRTN7w0d%2FCvibxgo7P1pRo&X-Amz-Signature=833fa45940e6ddeac48376a3a1b7244a1df8e8043498495992651e243f2cddae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ74CH4B%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvpq%2BKKqAjZjARlZpwzm3xKOP5CnqjQ2szSLu9ri%2BHuAiAkS%2F%2BN9fUWKDRugJVLGKMRlUeW3bA4COjsejF8JrneVyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3HzYaustIvShQD8eKtwDwDaMR6IqfTy4Prtl5CLrvUNxwZ796OsYCmSu9ajAJfD3Sp1ioircTs%2BjqjR%2BWpem2DcM3EfnmFjqEWm2MGctlpREKGWiFMETF0fhLInkIZMC3SQ8HTdPomFmf9cBaJh%2BlgYtHU%2FudF2up5wCh5gx1i8%2B3k1FEj587805u%2F43vvQevZlUNiZHvdu9jXLlTUr0HWiTaEHXh3OTAgbRNk6FSpiY2HfyvpsZVaWyggX0NCs5ojDuUa9hPpDOh3X9QekqIqgO66sE%2FSVb1FLk3I3a5puaxOan4p9CeLk0F7iZdkumw63JY97mfJhSW5rPh8vP4QgZYu6K%2FmM8PuoAz2XVutRx8jub3RNHBIeYrCh%2BFBeHavc2ziaojqnE2ZJPyCmuo5JZYZAr0jxyDPyUoACgYScbDXF1HoWp%2FbxdTwySP93LVuhyr0DqP4OqA8r1yH7ykUnN%2Bdp9Jo8uI%2FAComSvJTSiRvtnAuyTXTuqFWcPoEAlEV6jctNatD4fEGOfZVppIaqboSJBma0eeNDgOYOi8cBt0AOpDGp%2FZ5nwMuN9jN4r8XExtI%2FYrPEb8KwjS9xB6nk2Dpcb91mPSNlbBvnRxif5p4Q%2FMZrEwgjJg7xZmQGNMuNaSBpHsvzYXIMw4eyBywY6pgHFWBA3JsEMlKxt0xTHYCae72NEVJZ6DHQD6%2Blez0oq3UQX%2Fm0MQp13us%2BNsPkZvxVxOL5a5uVmcf6yR1cdeVFe8K7Lw2SKItmPhCHDEaCeKRUzgWUCHKxadKdTM7YMrycdRyQ3DNvS03IoXMuwCMvItD3ciunAks6SJAfQ2HUes4Vu2DjkDKsiVMeZQYkt5t6w1hPSz%2BZRTN7w0d%2FCvibxgo7P1pRo&X-Amz-Signature=4752e0d3bbe5c9691a725a07d596ea1840b07e808a217ee043633e3b8d0d42ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTPHW7GF%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqdkEx6liJFwBJnZMgpkchht%2B5c5VcTqmFj5hPFZg76AiEAoiWByjy9YoYntusCIK4Z6CQ%2BRPQdsSbTXuzfJnHwDmoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCujAouZwglFmF0YOyrcAyaC7mvCdnMrYPyiBEHFyPNqgkLXWGJh3iokE9zaBTLI4CYIk%2FFFdFKvhrkuyldHFIwYjLr%2B2TH39lvDwiNrjcOhMX83WAFEOygK%2BlzsUNnDK75Sji6gnycwFl%2B8Ko1vb%2FQdsWGZo6CbkSnceItbicjLN9jb4aksAPwQluft96nSEZl%2FMeBFcGrp4gt3ss6ThmGFxEIDdkz%2BnLJ42ZAKU%2BSwf%2FAM9sXB3z5HjgPxn%2BrfuMeqBdC4BFVv02ugqBTq%2F%2FmjvIWdKSHSJDh73SDoYAwBADzy5yKl6xQMITzmJjvVWtl2IUbp%2FC%2BiapnNayKdZotHduihbud5NphqnvemFsRsCa6PA0BTzs6o2QBAM5VGSkc0CCfidNuLeZWiFU3uhPWlqF%2Bp8Gprz3AjTp2H2Vt1Hiv2Xk8Vh%2BnhvFHOA7epE94OLJWq3uc09BdcvkIpTlSbiAKFUawvpeXdcIu%2BSLJXDyo12XguG0QO7pQDfwVRzn2lT7JFOcu%2BCaPTqLWqq0U6%2F7JJ5A5YdLUJHq7wkSrbVWzBAsEHe49p41wVZES0q3Q3nRI%2BB9Nb47tMuXuMf8X9ZUiQWxmbR0AnzUo%2FU2OfDsvj9MPraKoShKJYDcKZhGYmeppbaaW%2FtxWHMIftgcsGOqUBHGlHTP07aso%2FvxqiSk%2BBt6G1EYRpvhbVDxwtpIV1l4TYwUokOYSbL1%2FXzWZ9oYtapK4K0X669TthEoReTmPA2OqB2D0Zs7b94nSw1KZOxkqTyEC2wJkrekSG6iwjWTA5wqJMT8cX%2FH3xgq3JWmoVKt%2FYMANzBiAfVP%2Fpzthh5kMSlYDFuBMAe6ZhuCkAeZrdajh9Bw6qEz2KAx17xzNj03hInFpr&X-Amz-Signature=e414129cb4f555093769f1b6ffff8d9891a997e485126e07d05b1a1a5d1efb11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTPHW7GF%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqdkEx6liJFwBJnZMgpkchht%2B5c5VcTqmFj5hPFZg76AiEAoiWByjy9YoYntusCIK4Z6CQ%2BRPQdsSbTXuzfJnHwDmoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCujAouZwglFmF0YOyrcAyaC7mvCdnMrYPyiBEHFyPNqgkLXWGJh3iokE9zaBTLI4CYIk%2FFFdFKvhrkuyldHFIwYjLr%2B2TH39lvDwiNrjcOhMX83WAFEOygK%2BlzsUNnDK75Sji6gnycwFl%2B8Ko1vb%2FQdsWGZo6CbkSnceItbicjLN9jb4aksAPwQluft96nSEZl%2FMeBFcGrp4gt3ss6ThmGFxEIDdkz%2BnLJ42ZAKU%2BSwf%2FAM9sXB3z5HjgPxn%2BrfuMeqBdC4BFVv02ugqBTq%2F%2FmjvIWdKSHSJDh73SDoYAwBADzy5yKl6xQMITzmJjvVWtl2IUbp%2FC%2BiapnNayKdZotHduihbud5NphqnvemFsRsCa6PA0BTzs6o2QBAM5VGSkc0CCfidNuLeZWiFU3uhPWlqF%2Bp8Gprz3AjTp2H2Vt1Hiv2Xk8Vh%2BnhvFHOA7epE94OLJWq3uc09BdcvkIpTlSbiAKFUawvpeXdcIu%2BSLJXDyo12XguG0QO7pQDfwVRzn2lT7JFOcu%2BCaPTqLWqq0U6%2F7JJ5A5YdLUJHq7wkSrbVWzBAsEHe49p41wVZES0q3Q3nRI%2BB9Nb47tMuXuMf8X9ZUiQWxmbR0AnzUo%2FU2OfDsvj9MPraKoShKJYDcKZhGYmeppbaaW%2FtxWHMIftgcsGOqUBHGlHTP07aso%2FvxqiSk%2BBt6G1EYRpvhbVDxwtpIV1l4TYwUokOYSbL1%2FXzWZ9oYtapK4K0X669TthEoReTmPA2OqB2D0Zs7b94nSw1KZOxkqTyEC2wJkrekSG6iwjWTA5wqJMT8cX%2FH3xgq3JWmoVKt%2FYMANzBiAfVP%2Fpzthh5kMSlYDFuBMAe6ZhuCkAeZrdajh9Bw6qEz2KAx17xzNj03hInFpr&X-Amz-Signature=4bf74ccb43903624806aef770018bce8368e27f2985d22a0980061491a917754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTPHW7GF%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqdkEx6liJFwBJnZMgpkchht%2B5c5VcTqmFj5hPFZg76AiEAoiWByjy9YoYntusCIK4Z6CQ%2BRPQdsSbTXuzfJnHwDmoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCujAouZwglFmF0YOyrcAyaC7mvCdnMrYPyiBEHFyPNqgkLXWGJh3iokE9zaBTLI4CYIk%2FFFdFKvhrkuyldHFIwYjLr%2B2TH39lvDwiNrjcOhMX83WAFEOygK%2BlzsUNnDK75Sji6gnycwFl%2B8Ko1vb%2FQdsWGZo6CbkSnceItbicjLN9jb4aksAPwQluft96nSEZl%2FMeBFcGrp4gt3ss6ThmGFxEIDdkz%2BnLJ42ZAKU%2BSwf%2FAM9sXB3z5HjgPxn%2BrfuMeqBdC4BFVv02ugqBTq%2F%2FmjvIWdKSHSJDh73SDoYAwBADzy5yKl6xQMITzmJjvVWtl2IUbp%2FC%2BiapnNayKdZotHduihbud5NphqnvemFsRsCa6PA0BTzs6o2QBAM5VGSkc0CCfidNuLeZWiFU3uhPWlqF%2Bp8Gprz3AjTp2H2Vt1Hiv2Xk8Vh%2BnhvFHOA7epE94OLJWq3uc09BdcvkIpTlSbiAKFUawvpeXdcIu%2BSLJXDyo12XguG0QO7pQDfwVRzn2lT7JFOcu%2BCaPTqLWqq0U6%2F7JJ5A5YdLUJHq7wkSrbVWzBAsEHe49p41wVZES0q3Q3nRI%2BB9Nb47tMuXuMf8X9ZUiQWxmbR0AnzUo%2FU2OfDsvj9MPraKoShKJYDcKZhGYmeppbaaW%2FtxWHMIftgcsGOqUBHGlHTP07aso%2FvxqiSk%2BBt6G1EYRpvhbVDxwtpIV1l4TYwUokOYSbL1%2FXzWZ9oYtapK4K0X669TthEoReTmPA2OqB2D0Zs7b94nSw1KZOxkqTyEC2wJkrekSG6iwjWTA5wqJMT8cX%2FH3xgq3JWmoVKt%2FYMANzBiAfVP%2Fpzthh5kMSlYDFuBMAe6ZhuCkAeZrdajh9Bw6qEz2KAx17xzNj03hInFpr&X-Amz-Signature=73c86217f264e80f836ab435bbf79a685fe915e7f65bd34487d4b9a0b90b1e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTPHW7GF%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqdkEx6liJFwBJnZMgpkchht%2B5c5VcTqmFj5hPFZg76AiEAoiWByjy9YoYntusCIK4Z6CQ%2BRPQdsSbTXuzfJnHwDmoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCujAouZwglFmF0YOyrcAyaC7mvCdnMrYPyiBEHFyPNqgkLXWGJh3iokE9zaBTLI4CYIk%2FFFdFKvhrkuyldHFIwYjLr%2B2TH39lvDwiNrjcOhMX83WAFEOygK%2BlzsUNnDK75Sji6gnycwFl%2B8Ko1vb%2FQdsWGZo6CbkSnceItbicjLN9jb4aksAPwQluft96nSEZl%2FMeBFcGrp4gt3ss6ThmGFxEIDdkz%2BnLJ42ZAKU%2BSwf%2FAM9sXB3z5HjgPxn%2BrfuMeqBdC4BFVv02ugqBTq%2F%2FmjvIWdKSHSJDh73SDoYAwBADzy5yKl6xQMITzmJjvVWtl2IUbp%2FC%2BiapnNayKdZotHduihbud5NphqnvemFsRsCa6PA0BTzs6o2QBAM5VGSkc0CCfidNuLeZWiFU3uhPWlqF%2Bp8Gprz3AjTp2H2Vt1Hiv2Xk8Vh%2BnhvFHOA7epE94OLJWq3uc09BdcvkIpTlSbiAKFUawvpeXdcIu%2BSLJXDyo12XguG0QO7pQDfwVRzn2lT7JFOcu%2BCaPTqLWqq0U6%2F7JJ5A5YdLUJHq7wkSrbVWzBAsEHe49p41wVZES0q3Q3nRI%2BB9Nb47tMuXuMf8X9ZUiQWxmbR0AnzUo%2FU2OfDsvj9MPraKoShKJYDcKZhGYmeppbaaW%2FtxWHMIftgcsGOqUBHGlHTP07aso%2FvxqiSk%2BBt6G1EYRpvhbVDxwtpIV1l4TYwUokOYSbL1%2FXzWZ9oYtapK4K0X669TthEoReTmPA2OqB2D0Zs7b94nSw1KZOxkqTyEC2wJkrekSG6iwjWTA5wqJMT8cX%2FH3xgq3JWmoVKt%2FYMANzBiAfVP%2Fpzthh5kMSlYDFuBMAe6ZhuCkAeZrdajh9Bw6qEz2KAx17xzNj03hInFpr&X-Amz-Signature=b9547c82898ded4424f9f8611d1630eaf4cb6b3630e7412450e5911bc8139918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTPHW7GF%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqdkEx6liJFwBJnZMgpkchht%2B5c5VcTqmFj5hPFZg76AiEAoiWByjy9YoYntusCIK4Z6CQ%2BRPQdsSbTXuzfJnHwDmoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCujAouZwglFmF0YOyrcAyaC7mvCdnMrYPyiBEHFyPNqgkLXWGJh3iokE9zaBTLI4CYIk%2FFFdFKvhrkuyldHFIwYjLr%2B2TH39lvDwiNrjcOhMX83WAFEOygK%2BlzsUNnDK75Sji6gnycwFl%2B8Ko1vb%2FQdsWGZo6CbkSnceItbicjLN9jb4aksAPwQluft96nSEZl%2FMeBFcGrp4gt3ss6ThmGFxEIDdkz%2BnLJ42ZAKU%2BSwf%2FAM9sXB3z5HjgPxn%2BrfuMeqBdC4BFVv02ugqBTq%2F%2FmjvIWdKSHSJDh73SDoYAwBADzy5yKl6xQMITzmJjvVWtl2IUbp%2FC%2BiapnNayKdZotHduihbud5NphqnvemFsRsCa6PA0BTzs6o2QBAM5VGSkc0CCfidNuLeZWiFU3uhPWlqF%2Bp8Gprz3AjTp2H2Vt1Hiv2Xk8Vh%2BnhvFHOA7epE94OLJWq3uc09BdcvkIpTlSbiAKFUawvpeXdcIu%2BSLJXDyo12XguG0QO7pQDfwVRzn2lT7JFOcu%2BCaPTqLWqq0U6%2F7JJ5A5YdLUJHq7wkSrbVWzBAsEHe49p41wVZES0q3Q3nRI%2BB9Nb47tMuXuMf8X9ZUiQWxmbR0AnzUo%2FU2OfDsvj9MPraKoShKJYDcKZhGYmeppbaaW%2FtxWHMIftgcsGOqUBHGlHTP07aso%2FvxqiSk%2BBt6G1EYRpvhbVDxwtpIV1l4TYwUokOYSbL1%2FXzWZ9oYtapK4K0X669TthEoReTmPA2OqB2D0Zs7b94nSw1KZOxkqTyEC2wJkrekSG6iwjWTA5wqJMT8cX%2FH3xgq3JWmoVKt%2FYMANzBiAfVP%2Fpzthh5kMSlYDFuBMAe6ZhuCkAeZrdajh9Bw6qEz2KAx17xzNj03hInFpr&X-Amz-Signature=f0ad2f623d92ebead739119b279747e988d70502adcb329d6caf3d0c1f30de0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTKEIV34%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BkX9vHC3dApuckioFt9vo56fepG9Ak6HnZp1yNhIqqwIhAMOLEWuQs%2B06CH7isBGewZQpQHoAvta2zdel5nr2BSd3KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv7VYa2GMwwmVytREq3AN%2BSxIzA1%2ByXTOSYQlNUJI8jRJ5%2BllkV4xrez7KLcrLqCZ3tm6IPGsHD%2BdGgfleoaSd%2FLze663aIaS2cHpLcjLOYM0NEvIjCLWcwfycXzhdQYwAmvX%2Bj0%2BJjwA4FtLiiQF%2BYW%2BPRkTwFPU7rfuC%2BIGdsJ2oZsgGYlwGwKeiDESIsaNyauwQUXBYnifgvML5HUs%2BrVdvSv8yTBuUMgU6yQSBP8nrc1Gz%2BUT6YEHUhFDccd%2BxnAkW%2FU3bsn84%2Fc6wxGVUgb99bAB86jtkqIu31LNq5v%2BICSGy%2FQTlkm1D6I3brsxhBwl1Ym3ux8hsWaKJn%2BywQJL2JUJSLfi25K9I45YEiilvUGYgYyesPQMffUfnIPKoVTpS4S3cyK4mXQDqSqIkDjfwAV8IFMVr%2F6%2F2c5AwfPvLSC7D2TR7lzYm%2B1fpwZsjzbEY7xNOL4QgXSa80xUYzf%2BgX%2Fk%2FLEs9HZ5bxWnI%2Ba5I0eusRT50ZxA4%2BSXJTnwTWldttWLaR%2FqyC1JEuGan4H3tOk9LhlBoiPnBsa62OXFYiNoAwt5f%2BOHRuUUTMfBcJBGMSz7rJMRZdpaBi%2BEZdOUAs0qV5b0jCexnepmsJXTApDrnMoLuwjmwce4e0wjkECaUQ1KR%2BVQMdzDt7YHLBjqkAaICMsGds10V7uvUJu30aGTuZaa7NquSwsDeiwIM5uAvenSar9G%2B5lgiHjTdLWsMrcMelEvTE5r%2BfmH231f0TK3x%2BNFvRqqqy9jKNPcoJFwcdbdJ4qBNaOO6ESp%2B2Zl5hiw7ET8mNcKo9GKab7zKPZ7yu0D5zJGRXmAHWSRu4vUpDdTdyCAGTFh44TS6u4%2BQkfjM55O7AfG4QTEPEVuZRWCHc93U&X-Amz-Signature=239b627df7e61897e68d9e4f31b0b579f3c177a91b54b45ebda130ab8c7ed901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTKEIV34%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BkX9vHC3dApuckioFt9vo56fepG9Ak6HnZp1yNhIqqwIhAMOLEWuQs%2B06CH7isBGewZQpQHoAvta2zdel5nr2BSd3KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv7VYa2GMwwmVytREq3AN%2BSxIzA1%2ByXTOSYQlNUJI8jRJ5%2BllkV4xrez7KLcrLqCZ3tm6IPGsHD%2BdGgfleoaSd%2FLze663aIaS2cHpLcjLOYM0NEvIjCLWcwfycXzhdQYwAmvX%2Bj0%2BJjwA4FtLiiQF%2BYW%2BPRkTwFPU7rfuC%2BIGdsJ2oZsgGYlwGwKeiDESIsaNyauwQUXBYnifgvML5HUs%2BrVdvSv8yTBuUMgU6yQSBP8nrc1Gz%2BUT6YEHUhFDccd%2BxnAkW%2FU3bsn84%2Fc6wxGVUgb99bAB86jtkqIu31LNq5v%2BICSGy%2FQTlkm1D6I3brsxhBwl1Ym3ux8hsWaKJn%2BywQJL2JUJSLfi25K9I45YEiilvUGYgYyesPQMffUfnIPKoVTpS4S3cyK4mXQDqSqIkDjfwAV8IFMVr%2F6%2F2c5AwfPvLSC7D2TR7lzYm%2B1fpwZsjzbEY7xNOL4QgXSa80xUYzf%2BgX%2Fk%2FLEs9HZ5bxWnI%2Ba5I0eusRT50ZxA4%2BSXJTnwTWldttWLaR%2FqyC1JEuGan4H3tOk9LhlBoiPnBsa62OXFYiNoAwt5f%2BOHRuUUTMfBcJBGMSz7rJMRZdpaBi%2BEZdOUAs0qV5b0jCexnepmsJXTApDrnMoLuwjmwce4e0wjkECaUQ1KR%2BVQMdzDt7YHLBjqkAaICMsGds10V7uvUJu30aGTuZaa7NquSwsDeiwIM5uAvenSar9G%2B5lgiHjTdLWsMrcMelEvTE5r%2BfmH231f0TK3x%2BNFvRqqqy9jKNPcoJFwcdbdJ4qBNaOO6ESp%2B2Zl5hiw7ET8mNcKo9GKab7zKPZ7yu0D5zJGRXmAHWSRu4vUpDdTdyCAGTFh44TS6u4%2BQkfjM55O7AfG4QTEPEVuZRWCHc93U&X-Amz-Signature=bbaf51a20001aba76b290ef82c75d6f661704398242168ba607dbe125e203f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTKEIV34%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BkX9vHC3dApuckioFt9vo56fepG9Ak6HnZp1yNhIqqwIhAMOLEWuQs%2B06CH7isBGewZQpQHoAvta2zdel5nr2BSd3KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv7VYa2GMwwmVytREq3AN%2BSxIzA1%2ByXTOSYQlNUJI8jRJ5%2BllkV4xrez7KLcrLqCZ3tm6IPGsHD%2BdGgfleoaSd%2FLze663aIaS2cHpLcjLOYM0NEvIjCLWcwfycXzhdQYwAmvX%2Bj0%2BJjwA4FtLiiQF%2BYW%2BPRkTwFPU7rfuC%2BIGdsJ2oZsgGYlwGwKeiDESIsaNyauwQUXBYnifgvML5HUs%2BrVdvSv8yTBuUMgU6yQSBP8nrc1Gz%2BUT6YEHUhFDccd%2BxnAkW%2FU3bsn84%2Fc6wxGVUgb99bAB86jtkqIu31LNq5v%2BICSGy%2FQTlkm1D6I3brsxhBwl1Ym3ux8hsWaKJn%2BywQJL2JUJSLfi25K9I45YEiilvUGYgYyesPQMffUfnIPKoVTpS4S3cyK4mXQDqSqIkDjfwAV8IFMVr%2F6%2F2c5AwfPvLSC7D2TR7lzYm%2B1fpwZsjzbEY7xNOL4QgXSa80xUYzf%2BgX%2Fk%2FLEs9HZ5bxWnI%2Ba5I0eusRT50ZxA4%2BSXJTnwTWldttWLaR%2FqyC1JEuGan4H3tOk9LhlBoiPnBsa62OXFYiNoAwt5f%2BOHRuUUTMfBcJBGMSz7rJMRZdpaBi%2BEZdOUAs0qV5b0jCexnepmsJXTApDrnMoLuwjmwce4e0wjkECaUQ1KR%2BVQMdzDt7YHLBjqkAaICMsGds10V7uvUJu30aGTuZaa7NquSwsDeiwIM5uAvenSar9G%2B5lgiHjTdLWsMrcMelEvTE5r%2BfmH231f0TK3x%2BNFvRqqqy9jKNPcoJFwcdbdJ4qBNaOO6ESp%2B2Zl5hiw7ET8mNcKo9GKab7zKPZ7yu0D5zJGRXmAHWSRu4vUpDdTdyCAGTFh44TS6u4%2BQkfjM55O7AfG4QTEPEVuZRWCHc93U&X-Amz-Signature=4c9d6172a059357d3ffdbb958ed066999374f84ec9ef9c82a6929beed6eb2525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDHM33O6%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5AHdk1ieNUq1SUZz1Ov%2FvosiGhLcRwo%2Bx4X15EErZ2AIhAIl5eOcbJ03UZDUeA065rIgCI%2BM7Df0cLbCvtYkZzkSHKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvE%2BfllFtBm2xVx%2Foq3AOw%2BB0Oep1JbyePg966nQIyGXRTr37z%2F61DqwhEO3HXw7k1J6k29emoqwS4nl%2B%2BUDuHfPhLayU7EBc1BtBcLnAeO6hd7MWA%2BUQ510k2QNcf0wirzzpq%2BpmdijSX3ANfOlVC%2BCp05B5vQ%2F7DjAun6wF%2FC20sYo2tUqse1nyWt%2BcLKZgwbaU3ZP5eO7fd5Hywg2STXErFD85CiixKT4ckWp6aWClTffFTqw%2FqSNc5f45G6kYjEa04h7neIkX0mWbJsO22HUgVQ1ojDpb79qP0Yj3DB%2F3o9N9N9avKWMp54VvqSriMWL4q5Yh%2Fji0L6oMHX%2F%2F5XP1S5SLNTsNPzPc8ivxyKG2x8HRYNyUtWg3fjRw2%2B9VIwS%2Fjyxqhh6RuG0z1ArWvrRdSgQXMY0%2FfrFflFZzjQY0wYzRipIebI1H%2BegAB0Db7d9yR7%2FRceiOF2T15e7lCJac5tkDfPMvATc0kyPgxYb%2B9%2BjgIDhcUAhVVhsZ95LaTpILDErI2iK6hBjysUfolBu3QDUcn%2FTijKN%2B1vUDTxmHv6Ifvt6RMjiWI91cvrYM9ugoL3eCF%2B5EP7CRWI6onr1rQRxlWRGhW%2BYGiwBut5VOMil1IdmNVPXkNOTVVseIMQsNpQTHY57UdjzCo7YHLBjqkAak1qRVH7hKv12%2B2x%2BreUPgiFrZfXsuNALkk%2Fq5LgOegkjxgcm51jkEl1y%2Fjl8mMlHiqI9pOGMZHcwMmrAWTcbYAQzk%2FRNRv9yANn9UL1rfgpKlDWO9likwYuaWMKMrxT1NJqMR%2FcRFk1s%2F799C0AFLRG7%2B1XdxFH2c1BbZ%2BdbTY3Jgdwt2s817H0Uv0Y03AmzmYdLPa%2FHj6QqlJiLXLY8g%2FIJLv&X-Amz-Signature=1260cb5622570516e91e79b9387855e22ee610e91f52115a582be211d9b21f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDHM33O6%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5AHdk1ieNUq1SUZz1Ov%2FvosiGhLcRwo%2Bx4X15EErZ2AIhAIl5eOcbJ03UZDUeA065rIgCI%2BM7Df0cLbCvtYkZzkSHKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvE%2BfllFtBm2xVx%2Foq3AOw%2BB0Oep1JbyePg966nQIyGXRTr37z%2F61DqwhEO3HXw7k1J6k29emoqwS4nl%2B%2BUDuHfPhLayU7EBc1BtBcLnAeO6hd7MWA%2BUQ510k2QNcf0wirzzpq%2BpmdijSX3ANfOlVC%2BCp05B5vQ%2F7DjAun6wF%2FC20sYo2tUqse1nyWt%2BcLKZgwbaU3ZP5eO7fd5Hywg2STXErFD85CiixKT4ckWp6aWClTffFTqw%2FqSNc5f45G6kYjEa04h7neIkX0mWbJsO22HUgVQ1ojDpb79qP0Yj3DB%2F3o9N9N9avKWMp54VvqSriMWL4q5Yh%2Fji0L6oMHX%2F%2F5XP1S5SLNTsNPzPc8ivxyKG2x8HRYNyUtWg3fjRw2%2B9VIwS%2Fjyxqhh6RuG0z1ArWvrRdSgQXMY0%2FfrFflFZzjQY0wYzRipIebI1H%2BegAB0Db7d9yR7%2FRceiOF2T15e7lCJac5tkDfPMvATc0kyPgxYb%2B9%2BjgIDhcUAhVVhsZ95LaTpILDErI2iK6hBjysUfolBu3QDUcn%2FTijKN%2B1vUDTxmHv6Ifvt6RMjiWI91cvrYM9ugoL3eCF%2B5EP7CRWI6onr1rQRxlWRGhW%2BYGiwBut5VOMil1IdmNVPXkNOTVVseIMQsNpQTHY57UdjzCo7YHLBjqkAak1qRVH7hKv12%2B2x%2BreUPgiFrZfXsuNALkk%2Fq5LgOegkjxgcm51jkEl1y%2Fjl8mMlHiqI9pOGMZHcwMmrAWTcbYAQzk%2FRNRv9yANn9UL1rfgpKlDWO9likwYuaWMKMrxT1NJqMR%2FcRFk1s%2F799C0AFLRG7%2B1XdxFH2c1BbZ%2BdbTY3Jgdwt2s817H0Uv0Y03AmzmYdLPa%2FHj6QqlJiLXLY8g%2FIJLv&X-Amz-Signature=440c00a2911e7b64acc475f948cce0caebd22c181512ef6538499af8eb7b9b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX27KGWP%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjtZq0v0KkV5biuhr81APIYFZ8TTv1umHHK3pH6TPZMAiEApALTtG%2Fn%2B8t%2FUBDlHoJvvZ3jP3JJO7%2BYw34Sdp6cYxkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBP3Q9Fi74CPRXGOHircA4g3Z%2BLb7pgqKaYgGcBuicUVojMYVbtL5UfuF2JejW676yaqL4uqbQ4ORkp84IXuyGMIlN%2BpvzjrQEbNxYsb9fLlw6gFWSZ2RG5iVMfd3oLJ42InJP%2BhfRyyU3QNAKa696qkwZ2eF4WhyiSGtR5bReRsZce6HLn4F0Ns%2F3ux8Qgd8UFhlW2CozyR5FzftQgUOch1REp0wGCa%2BnYH91%2BBRZL46at3%2BFT4Wa3aSGtyuC%2FfUgUl5PkKw9j9OoC0v1VNUyEX5bWrNH6NMCElHI5%2BuFCk3cCMCAlFnP3myyJ%2BoXxOKqxo25kX22csoGysQci%2FAcj6KtlM%2BjQjTv26EUy%2ByEuZoxbUECccsk7omy%2B%2Bz%2FObWvsnBtnLcoXZm9WNHrs9kQfs8OycOqalj8H7XMU6dObnbxHkbvjsuuYPAJRDWwoJhYtarTefuih70MzqT167hP1TGBM7g8vQ7X5EzlweOmZt%2Bfy6mJ0lHx3fw865fsx3SbUI5Ro7eDmbR4qh7SBUKUrr%2F5Nj8zdShiEoOTA0QxPcz8EEE5UMEFe%2FW0MTPoxdf3NqQ6ZgUt%2F%2Fqr6tiLNn1A9gzjm3hBd60SHH0eq21Nm3B0V731DfZggc3hCiCXPE8klonOd5jrkEqQ%2FyMIftgcsGOqUB2PDrcc3Jd%2BSUlOHGKIs3tP%2FTcAP8P%2BTpiTnrERUGZ2TcslmYDTidup3D97IF4iObHZMSoHivfZIe1uKuxQtUZ%2F1GoDurZbDy37pNbj0bEAdm6tdmekMza7BDIHGlGDNJkmxVv5xLHz5AcAI%2BuQfnrCOUT2cDCrsm%2FhM627R%2FtT4G7Kz%2FADMKpO%2BYyo2gyIfUA5ZvLNUrIVvzcHXhTfx3oNhOogcR&X-Amz-Signature=31f11e923949c9300661cbe848182fc3003a300d34c5cd49bdb22045e0f34462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX27KGWP%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjtZq0v0KkV5biuhr81APIYFZ8TTv1umHHK3pH6TPZMAiEApALTtG%2Fn%2B8t%2FUBDlHoJvvZ3jP3JJO7%2BYw34Sdp6cYxkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBP3Q9Fi74CPRXGOHircA4g3Z%2BLb7pgqKaYgGcBuicUVojMYVbtL5UfuF2JejW676yaqL4uqbQ4ORkp84IXuyGMIlN%2BpvzjrQEbNxYsb9fLlw6gFWSZ2RG5iVMfd3oLJ42InJP%2BhfRyyU3QNAKa696qkwZ2eF4WhyiSGtR5bReRsZce6HLn4F0Ns%2F3ux8Qgd8UFhlW2CozyR5FzftQgUOch1REp0wGCa%2BnYH91%2BBRZL46at3%2BFT4Wa3aSGtyuC%2FfUgUl5PkKw9j9OoC0v1VNUyEX5bWrNH6NMCElHI5%2BuFCk3cCMCAlFnP3myyJ%2BoXxOKqxo25kX22csoGysQci%2FAcj6KtlM%2BjQjTv26EUy%2ByEuZoxbUECccsk7omy%2B%2Bz%2FObWvsnBtnLcoXZm9WNHrs9kQfs8OycOqalj8H7XMU6dObnbxHkbvjsuuYPAJRDWwoJhYtarTefuih70MzqT167hP1TGBM7g8vQ7X5EzlweOmZt%2Bfy6mJ0lHx3fw865fsx3SbUI5Ro7eDmbR4qh7SBUKUrr%2F5Nj8zdShiEoOTA0QxPcz8EEE5UMEFe%2FW0MTPoxdf3NqQ6ZgUt%2F%2Fqr6tiLNn1A9gzjm3hBd60SHH0eq21Nm3B0V731DfZggc3hCiCXPE8klonOd5jrkEqQ%2FyMIftgcsGOqUB2PDrcc3Jd%2BSUlOHGKIs3tP%2FTcAP8P%2BTpiTnrERUGZ2TcslmYDTidup3D97IF4iObHZMSoHivfZIe1uKuxQtUZ%2F1GoDurZbDy37pNbj0bEAdm6tdmekMza7BDIHGlGDNJkmxVv5xLHz5AcAI%2BuQfnrCOUT2cDCrsm%2FhM627R%2FtT4G7Kz%2FADMKpO%2BYyo2gyIfUA5ZvLNUrIVvzcHXhTfx3oNhOogcR&X-Amz-Signature=f2fdee9998e80825eb5a74fc5e016c2ca292c3726114b9ff29c56cb5d775a0f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX27KGWP%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjtZq0v0KkV5biuhr81APIYFZ8TTv1umHHK3pH6TPZMAiEApALTtG%2Fn%2B8t%2FUBDlHoJvvZ3jP3JJO7%2BYw34Sdp6cYxkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBP3Q9Fi74CPRXGOHircA4g3Z%2BLb7pgqKaYgGcBuicUVojMYVbtL5UfuF2JejW676yaqL4uqbQ4ORkp84IXuyGMIlN%2BpvzjrQEbNxYsb9fLlw6gFWSZ2RG5iVMfd3oLJ42InJP%2BhfRyyU3QNAKa696qkwZ2eF4WhyiSGtR5bReRsZce6HLn4F0Ns%2F3ux8Qgd8UFhlW2CozyR5FzftQgUOch1REp0wGCa%2BnYH91%2BBRZL46at3%2BFT4Wa3aSGtyuC%2FfUgUl5PkKw9j9OoC0v1VNUyEX5bWrNH6NMCElHI5%2BuFCk3cCMCAlFnP3myyJ%2BoXxOKqxo25kX22csoGysQci%2FAcj6KtlM%2BjQjTv26EUy%2ByEuZoxbUECccsk7omy%2B%2Bz%2FObWvsnBtnLcoXZm9WNHrs9kQfs8OycOqalj8H7XMU6dObnbxHkbvjsuuYPAJRDWwoJhYtarTefuih70MzqT167hP1TGBM7g8vQ7X5EzlweOmZt%2Bfy6mJ0lHx3fw865fsx3SbUI5Ro7eDmbR4qh7SBUKUrr%2F5Nj8zdShiEoOTA0QxPcz8EEE5UMEFe%2FW0MTPoxdf3NqQ6ZgUt%2F%2Fqr6tiLNn1A9gzjm3hBd60SHH0eq21Nm3B0V731DfZggc3hCiCXPE8klonOd5jrkEqQ%2FyMIftgcsGOqUB2PDrcc3Jd%2BSUlOHGKIs3tP%2FTcAP8P%2BTpiTnrERUGZ2TcslmYDTidup3D97IF4iObHZMSoHivfZIe1uKuxQtUZ%2F1GoDurZbDy37pNbj0bEAdm6tdmekMza7BDIHGlGDNJkmxVv5xLHz5AcAI%2BuQfnrCOUT2cDCrsm%2FhM627R%2FtT4G7Kz%2FADMKpO%2BYyo2gyIfUA5ZvLNUrIVvzcHXhTfx3oNhOogcR&X-Amz-Signature=e3f60786341519fd00e7e641c057a955cf99b1389b21bbd4f8bce41418df9cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX27KGWP%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjtZq0v0KkV5biuhr81APIYFZ8TTv1umHHK3pH6TPZMAiEApALTtG%2Fn%2B8t%2FUBDlHoJvvZ3jP3JJO7%2BYw34Sdp6cYxkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBP3Q9Fi74CPRXGOHircA4g3Z%2BLb7pgqKaYgGcBuicUVojMYVbtL5UfuF2JejW676yaqL4uqbQ4ORkp84IXuyGMIlN%2BpvzjrQEbNxYsb9fLlw6gFWSZ2RG5iVMfd3oLJ42InJP%2BhfRyyU3QNAKa696qkwZ2eF4WhyiSGtR5bReRsZce6HLn4F0Ns%2F3ux8Qgd8UFhlW2CozyR5FzftQgUOch1REp0wGCa%2BnYH91%2BBRZL46at3%2BFT4Wa3aSGtyuC%2FfUgUl5PkKw9j9OoC0v1VNUyEX5bWrNH6NMCElHI5%2BuFCk3cCMCAlFnP3myyJ%2BoXxOKqxo25kX22csoGysQci%2FAcj6KtlM%2BjQjTv26EUy%2ByEuZoxbUECccsk7omy%2B%2Bz%2FObWvsnBtnLcoXZm9WNHrs9kQfs8OycOqalj8H7XMU6dObnbxHkbvjsuuYPAJRDWwoJhYtarTefuih70MzqT167hP1TGBM7g8vQ7X5EzlweOmZt%2Bfy6mJ0lHx3fw865fsx3SbUI5Ro7eDmbR4qh7SBUKUrr%2F5Nj8zdShiEoOTA0QxPcz8EEE5UMEFe%2FW0MTPoxdf3NqQ6ZgUt%2F%2Fqr6tiLNn1A9gzjm3hBd60SHH0eq21Nm3B0V731DfZggc3hCiCXPE8klonOd5jrkEqQ%2FyMIftgcsGOqUB2PDrcc3Jd%2BSUlOHGKIs3tP%2FTcAP8P%2BTpiTnrERUGZ2TcslmYDTidup3D97IF4iObHZMSoHivfZIe1uKuxQtUZ%2F1GoDurZbDy37pNbj0bEAdm6tdmekMza7BDIHGlGDNJkmxVv5xLHz5AcAI%2BuQfnrCOUT2cDCrsm%2FhM627R%2FtT4G7Kz%2FADMKpO%2BYyo2gyIfUA5ZvLNUrIVvzcHXhTfx3oNhOogcR&X-Amz-Signature=dac52dd3fb3ebf87fa301b5046dec00f57303b10eed5eb0773027036f1f877d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX27KGWP%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjtZq0v0KkV5biuhr81APIYFZ8TTv1umHHK3pH6TPZMAiEApALTtG%2Fn%2B8t%2FUBDlHoJvvZ3jP3JJO7%2BYw34Sdp6cYxkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBP3Q9Fi74CPRXGOHircA4g3Z%2BLb7pgqKaYgGcBuicUVojMYVbtL5UfuF2JejW676yaqL4uqbQ4ORkp84IXuyGMIlN%2BpvzjrQEbNxYsb9fLlw6gFWSZ2RG5iVMfd3oLJ42InJP%2BhfRyyU3QNAKa696qkwZ2eF4WhyiSGtR5bReRsZce6HLn4F0Ns%2F3ux8Qgd8UFhlW2CozyR5FzftQgUOch1REp0wGCa%2BnYH91%2BBRZL46at3%2BFT4Wa3aSGtyuC%2FfUgUl5PkKw9j9OoC0v1VNUyEX5bWrNH6NMCElHI5%2BuFCk3cCMCAlFnP3myyJ%2BoXxOKqxo25kX22csoGysQci%2FAcj6KtlM%2BjQjTv26EUy%2ByEuZoxbUECccsk7omy%2B%2Bz%2FObWvsnBtnLcoXZm9WNHrs9kQfs8OycOqalj8H7XMU6dObnbxHkbvjsuuYPAJRDWwoJhYtarTefuih70MzqT167hP1TGBM7g8vQ7X5EzlweOmZt%2Bfy6mJ0lHx3fw865fsx3SbUI5Ro7eDmbR4qh7SBUKUrr%2F5Nj8zdShiEoOTA0QxPcz8EEE5UMEFe%2FW0MTPoxdf3NqQ6ZgUt%2F%2Fqr6tiLNn1A9gzjm3hBd60SHH0eq21Nm3B0V731DfZggc3hCiCXPE8klonOd5jrkEqQ%2FyMIftgcsGOqUB2PDrcc3Jd%2BSUlOHGKIs3tP%2FTcAP8P%2BTpiTnrERUGZ2TcslmYDTidup3D97IF4iObHZMSoHivfZIe1uKuxQtUZ%2F1GoDurZbDy37pNbj0bEAdm6tdmekMza7BDIHGlGDNJkmxVv5xLHz5AcAI%2BuQfnrCOUT2cDCrsm%2FhM627R%2FtT4G7Kz%2FADMKpO%2BYyo2gyIfUA5ZvLNUrIVvzcHXhTfx3oNhOogcR&X-Amz-Signature=c49f990b07df6143b23fa26f0244749403f45947bd2d2744a60067e390b834ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D5H2KUV%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmdoqI3eEI1Zfg8DHeF7b1i4rnip%2BR1EE91NOzrVgmrQIgdCA06VYD3N6fSYRjkrD04J9bXo7%2FbYGzZsdskoOrsXMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTFmL3Bbe7clHygnCrcAzajP%2BWCv9%2BjUYtMoSpHos8cj184QhSCUl5n1J4qsGPR48%2F%2BbQsEetibz6kp4B1soAV4U00dnItNIZKVA5vwgEBJdmUR6QWDjYQ2GB7CKFLlgUKZOzrWJ55MJPa98sdOEUYvZ2gzpfM%2BIOe7jhAywicN62TKn2rSuYDNjb7kJftm5tGxIwS6fROF6wNz027ppkmOIxonhkaN6RoCSpNta1zArxHhjU%2BPIok9XEvFnue%2F5218mqjzopTC213ZRu8D0j6yaOg8y6nHIkuud1ksFbRG3saK1TCJIi8FXfwmdBS%2FIy3d48tJcYx2VahYHiLGr1fWN3FrMdj13mwBITM6IH3a57LPwfBo%2FSuwml4QzXxkCvuRRyQNZdAGKSB531d2Vm%2BujGZms4NiBcRA3NAeWPUpiHKlPZfZEjg0NcP3quvBGvjrBIqmzEJpZWFyxez6HT2%2BRfwPkXhK9IzsChblMjZJvytlIj0Beh4WHmfF%2FkF5JwIxeVDjO6BMNAnw4lX9KUdIpaLR6BArHyzwre29viNRmsVovo6S2AJeZ8fSM37MNbTAu9J0FpfA3JoO58w7AUvi%2FniFoLZpBZO21JyCmDlp1PgCHwzK6l0JtmBswO1DiBvu9MXaQnjYSC6GMIbugcsGOqUB9Re6EDfD1UWdL8jEQHlVuogc0tm3WQp7wApQwh1U4KqfE%2FHumddwiDIepVwOQjdWb5yJO2yOPSa5JUTh2n0IIbnR0WEWAbePfs417LD0j%2B%2FBojh1cvvEChhzMUYJjtko%2FOOK2rp5txvkdO40zdelrEFifi04ea3KqMuxQozJQ9%2FBCceSJmCoHeMr8l2TpAfQDUNZOt0Bv1udUqqGTCKX%2BlboMdH6&X-Amz-Signature=87a3bebcd2c9bfe2df4a0dfc7d80f03b9096057584234aad9a2fd4b8420e86a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

