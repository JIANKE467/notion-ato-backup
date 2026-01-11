
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEJ2VYP%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICht8CLYE2qzawq1ajG6LCdoYeul9n4t5mxs%2B212aKXCAiEAjzJv4EcANB9hNCjA0ozEBynVU8OwLJ4CFv0ZbYlu0TYqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADNtLQtPxDetnkjFircA1fd0PvRbCtO9CygdncFihVr9QQqmPorPJEEkk4NBogzbsQqW7J5AITi%2BgZ4KXrNaj2cUl98Qy%2Ba9ARHlA5bgSB9UYGVibhyPdUhXlJ0%2Bj3qTbJQgRfAhhM4Er5e04TbDv3zXxqEbzgPtqzioCsdkqss2oC%2F1uDwEDQBA3p8%2BFnhFrrDzGPj6AY%2BNWApfQRJ1yQEmFf5IF1qt7fsbEw5jgFDsu33%2FOBi4pHva0mLs5f9nNKZH%2F3Qe8VU3tgQFyDzal1QNS3MlAZrlEjVi5qq8SVrvSNqaJyfGFboVANEftqxRYXq7w2M2DIxADRsnBtnuLjC6BmQQB1LPjh63169gh0uWfdF1TGv%2FoT1Dk8yovCnQ%2Bg7CpdVZt8fXXqt2aqXRacAqOzMqEz8NJlvTX9noIcDi0LKhtJYSM7dAIXfA91bpMx69KJjxz4icL%2FmfiuW7Gxw3vj1tdbrGrMBjfi8BgeKce%2FL2e%2Fb%2FRRpEZhUN9VXGxNbtARQoIDZYkGgagcOiCnrSxIrPhjbqVQQXGbgQhWih2mZ8mVIduJc3H9FWQmvUSMpFiSZC7roRiCiBSuz3qYyGL5%2Biu4qB%2F2GZzcri3ABQ548NHyT%2FOiavaYsAH%2Bff2ibLad5YR36IIrUMJ7ui8sGOqUBOI%2BIwQY%2BaCRn62Ksv5uWj6uRqO4JU6rwgHTUUmHO674%2BtrRqeEvo6%2BBdjjEqR0Oo8hdv%2BMqN3I9nNcpA1CA3yFl0gKc2a2bhfe0bE%2FofkOqLZVNkq%2BMgCgWryD8IYiDREPmb2RlQptfOuONhqBd2vkmbTswOlvzVfAvcPyVeGCtRgfh%2BEv%2FzWgUw4gPpa4Ue%2BOtrj1jSBerRbcuujPt7U51o7kl4&X-Amz-Signature=cbcb1d97a06ce87f141a9d375e50a0a34f04f0e3f0711707fe412296ffb5c84b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2IPWULR%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCxItk%2BQoVb%2BvUrbLSbPLmbcXLZB0YksKxJxxnbAz54BwIgGuht1Jdh7Zzftzg8DZa7%2BuqcRZHUD2GAkgwZ4llIfPMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFKZaKw9xjah3cVcCrcA8uAsz8%2FbOrSXJ4Y9fAeNBcs%2FyB8eYZl2e0zHYaILyQeKW2RHfBIQBk8uW7ShEkcZVZUaFsIExzcQPGJ09cxYbNJnuc1edkhsC%2FYXsrxwy4e3xZ8cmj%2BzyKwAxe4vhlo4YOmzHnJRvSiT%2Fcf%2FS1kr%2BxZExo8%2F4sGy8oyMNHBjOdnxM%2BkmGjAzEIeJfPCqWkfwpeJC%2B0FSfb3bkt98dlS7IKwT1pUt0ogeU3sHmFYPiYYNNV9AdApr%2FbDfJGafFjSMRXRtEzRJgX4Y7fRG5UgsiwjB29x9vONE%2Bp%2BR1SqbRFEJ4KMwe61wsfVw2ss5aP%2BNVQjOjuj0O0QeFqq7nMPHx0mX%2BxHTrz3ZJ%2FabCnvMH7k5130%2B14h3jMcfVsSutoq8Glj5py7apPl74MKPlnehIPSl66T3G3YqSJ1InaPI53mN7zY14Oo%2B9bIzRL%2Ft7ttp6V8Bql41pqP16mihlub0EobS1H9UC7L%2FGbJRJ%2B41XpRaxOCqVbSAgAHrEL7a2g9HH3GYjmSuFNbvwYewFm%2FzaxJYSBPoqCQcNsVlaIQySTCgKombBMqe23vR6FEp8H9ZgaTqhX5gg8AZjRFIYr3yQI%2FIHjZXESmLbHeyZ0EmCFoHMjYXZbu30Ou0TtkMPHxi8sGOqUBNfpMtzkvvcZeGHiF9ZFDg31BKb2ZWTD3sxa7U1yWABMgbHGAPkIKLetolhlfTBS19GI2oX9r0q8LPOVTI9T8sxIOihBIynkfSGvoYkLUiwQeWylP9Ld8qUPmsYNu7DdjjVPgGs2F8NGCDLUEe7I3XoqpNuaOJMo374O1NRy40LI4scU2y2p4wBQS%2BgHQLu5D8zwxjtQ0pSMxi2JJDu%2F1ALqD6yKC&X-Amz-Signature=eee44f219a3f97fd4447d359ccbb1dcd805aef33fba483b0b979b2f01231a5d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2IPWULR%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCxItk%2BQoVb%2BvUrbLSbPLmbcXLZB0YksKxJxxnbAz54BwIgGuht1Jdh7Zzftzg8DZa7%2BuqcRZHUD2GAkgwZ4llIfPMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFKZaKw9xjah3cVcCrcA8uAsz8%2FbOrSXJ4Y9fAeNBcs%2FyB8eYZl2e0zHYaILyQeKW2RHfBIQBk8uW7ShEkcZVZUaFsIExzcQPGJ09cxYbNJnuc1edkhsC%2FYXsrxwy4e3xZ8cmj%2BzyKwAxe4vhlo4YOmzHnJRvSiT%2Fcf%2FS1kr%2BxZExo8%2F4sGy8oyMNHBjOdnxM%2BkmGjAzEIeJfPCqWkfwpeJC%2B0FSfb3bkt98dlS7IKwT1pUt0ogeU3sHmFYPiYYNNV9AdApr%2FbDfJGafFjSMRXRtEzRJgX4Y7fRG5UgsiwjB29x9vONE%2Bp%2BR1SqbRFEJ4KMwe61wsfVw2ss5aP%2BNVQjOjuj0O0QeFqq7nMPHx0mX%2BxHTrz3ZJ%2FabCnvMH7k5130%2B14h3jMcfVsSutoq8Glj5py7apPl74MKPlnehIPSl66T3G3YqSJ1InaPI53mN7zY14Oo%2B9bIzRL%2Ft7ttp6V8Bql41pqP16mihlub0EobS1H9UC7L%2FGbJRJ%2B41XpRaxOCqVbSAgAHrEL7a2g9HH3GYjmSuFNbvwYewFm%2FzaxJYSBPoqCQcNsVlaIQySTCgKombBMqe23vR6FEp8H9ZgaTqhX5gg8AZjRFIYr3yQI%2FIHjZXESmLbHeyZ0EmCFoHMjYXZbu30Ou0TtkMPHxi8sGOqUBNfpMtzkvvcZeGHiF9ZFDg31BKb2ZWTD3sxa7U1yWABMgbHGAPkIKLetolhlfTBS19GI2oX9r0q8LPOVTI9T8sxIOihBIynkfSGvoYkLUiwQeWylP9Ld8qUPmsYNu7DdjjVPgGs2F8NGCDLUEe7I3XoqpNuaOJMo374O1NRy40LI4scU2y2p4wBQS%2BgHQLu5D8zwxjtQ0pSMxi2JJDu%2F1ALqD6yKC&X-Amz-Signature=e3b24c0c91ea6e69ebada1db7efac2e350f6a58d0bb514c0269da1069fa3896a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MS5HLXI%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDqMmKcydd7wWtRsfJzbvRXE0m70f%2BxLmm4Yuu3yw3dnAiAxYVsDGHjQ%2FPi1VuQdsVev4eGUZMKrCO1VjQOZkZPYVyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMESWUMSGnsKAQi2xhKtwDLoOtM3%2FRGynYCvROkXcgpAZOMbqIeGOL0vIGEYBaZvU7D9sjNGtRKLpdfi56M7wGg4QmDsuHDD3mMhR3PuEbNI12M%2F9e1N8Xrg88%2FuW%2FwOA7SNVomEPa0f%2F1NXLvTtbh8NAM39VrFaKDBsP%2Fg1HzOoxCOyWLtmc5IkO7Nz4lKHXpc2SL%2BvAEt%2FJBmkSrMUj1wSwMp4Z%2Bm1ucBifcCrVKpIkeXiEtiO6MADAVWAPb6zPQh%2Fdd0atS86TAMBROGtmzdA0jxiZhcD9R7o9NDhuNyQkTzneVoiFCb4jS3uydOamjEO7laTHMSr8L1lQc6BY4VReG1nAxqSubw2PdKQDpVkj7PU0qx3GeMxTxz1AZx8aUyccIjNmgZ8ylPKeFWF8W3%2FvoBK07arwQKPemstBSMVyoJFDfWo8j%2BJLvG3qTb97iJB%2FHi8AtkjZcdVRCkBfEIvXQiufwhbthq06jHzBjFiVmq2LstRAY8N6Nn2xggi3A6O0XNFqxpo7fSnSIucze6PfW2ulJlkmhWQimFkE0M2OdZzgtjlr2f2HFt4Nui8EP%2FFk1FXF1LA6SYAPMh6D9rK3GfOnjLGHd1hIHEo5W2daw%2FV5TvwiFPY8heqvXX2z49Dy7KA0BQ8%2B%2FKI8w3e2LywY6pgHXIJ4VqaJtwY3D1ACbikXN9KiCqZQWPlI7pEOLnf9glvHoKWCSZs5yOnj2h%2FHA0pGNjUqIClAOcRQyGSwTsJkFSs9F9n%2Fm79tfPABgOvB7fdj%2F%2FsOsglUVlq73XcV7VfYVDUKUeUtPdVOdG7R87wCCpPKHx0WtZDh%2B%2FHwVD3G6iQSiKv1zwZ2jgvfHmjYv074SjS%2F1Y8Tk%2BQHeTsPV5pVHRoZlB0M1&X-Amz-Signature=ed55548bd503676991412959de2ff24e26dbc1b1ca8941833975b8d04ddec834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MS5HLXI%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDqMmKcydd7wWtRsfJzbvRXE0m70f%2BxLmm4Yuu3yw3dnAiAxYVsDGHjQ%2FPi1VuQdsVev4eGUZMKrCO1VjQOZkZPYVyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMESWUMSGnsKAQi2xhKtwDLoOtM3%2FRGynYCvROkXcgpAZOMbqIeGOL0vIGEYBaZvU7D9sjNGtRKLpdfi56M7wGg4QmDsuHDD3mMhR3PuEbNI12M%2F9e1N8Xrg88%2FuW%2FwOA7SNVomEPa0f%2F1NXLvTtbh8NAM39VrFaKDBsP%2Fg1HzOoxCOyWLtmc5IkO7Nz4lKHXpc2SL%2BvAEt%2FJBmkSrMUj1wSwMp4Z%2Bm1ucBifcCrVKpIkeXiEtiO6MADAVWAPb6zPQh%2Fdd0atS86TAMBROGtmzdA0jxiZhcD9R7o9NDhuNyQkTzneVoiFCb4jS3uydOamjEO7laTHMSr8L1lQc6BY4VReG1nAxqSubw2PdKQDpVkj7PU0qx3GeMxTxz1AZx8aUyccIjNmgZ8ylPKeFWF8W3%2FvoBK07arwQKPemstBSMVyoJFDfWo8j%2BJLvG3qTb97iJB%2FHi8AtkjZcdVRCkBfEIvXQiufwhbthq06jHzBjFiVmq2LstRAY8N6Nn2xggi3A6O0XNFqxpo7fSnSIucze6PfW2ulJlkmhWQimFkE0M2OdZzgtjlr2f2HFt4Nui8EP%2FFk1FXF1LA6SYAPMh6D9rK3GfOnjLGHd1hIHEo5W2daw%2FV5TvwiFPY8heqvXX2z49Dy7KA0BQ8%2B%2FKI8w3e2LywY6pgHXIJ4VqaJtwY3D1ACbikXN9KiCqZQWPlI7pEOLnf9glvHoKWCSZs5yOnj2h%2FHA0pGNjUqIClAOcRQyGSwTsJkFSs9F9n%2Fm79tfPABgOvB7fdj%2F%2FsOsglUVlq73XcV7VfYVDUKUeUtPdVOdG7R87wCCpPKHx0WtZDh%2B%2FHwVD3G6iQSiKv1zwZ2jgvfHmjYv074SjS%2F1Y8Tk%2BQHeTsPV5pVHRoZlB0M1&X-Amz-Signature=7a845595eb4c9f33469f085fde8c2facae561907314159e9f57fe5d205adcbd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MS5HLXI%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDqMmKcydd7wWtRsfJzbvRXE0m70f%2BxLmm4Yuu3yw3dnAiAxYVsDGHjQ%2FPi1VuQdsVev4eGUZMKrCO1VjQOZkZPYVyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMESWUMSGnsKAQi2xhKtwDLoOtM3%2FRGynYCvROkXcgpAZOMbqIeGOL0vIGEYBaZvU7D9sjNGtRKLpdfi56M7wGg4QmDsuHDD3mMhR3PuEbNI12M%2F9e1N8Xrg88%2FuW%2FwOA7SNVomEPa0f%2F1NXLvTtbh8NAM39VrFaKDBsP%2Fg1HzOoxCOyWLtmc5IkO7Nz4lKHXpc2SL%2BvAEt%2FJBmkSrMUj1wSwMp4Z%2Bm1ucBifcCrVKpIkeXiEtiO6MADAVWAPb6zPQh%2Fdd0atS86TAMBROGtmzdA0jxiZhcD9R7o9NDhuNyQkTzneVoiFCb4jS3uydOamjEO7laTHMSr8L1lQc6BY4VReG1nAxqSubw2PdKQDpVkj7PU0qx3GeMxTxz1AZx8aUyccIjNmgZ8ylPKeFWF8W3%2FvoBK07arwQKPemstBSMVyoJFDfWo8j%2BJLvG3qTb97iJB%2FHi8AtkjZcdVRCkBfEIvXQiufwhbthq06jHzBjFiVmq2LstRAY8N6Nn2xggi3A6O0XNFqxpo7fSnSIucze6PfW2ulJlkmhWQimFkE0M2OdZzgtjlr2f2HFt4Nui8EP%2FFk1FXF1LA6SYAPMh6D9rK3GfOnjLGHd1hIHEo5W2daw%2FV5TvwiFPY8heqvXX2z49Dy7KA0BQ8%2B%2FKI8w3e2LywY6pgHXIJ4VqaJtwY3D1ACbikXN9KiCqZQWPlI7pEOLnf9glvHoKWCSZs5yOnj2h%2FHA0pGNjUqIClAOcRQyGSwTsJkFSs9F9n%2Fm79tfPABgOvB7fdj%2F%2FsOsglUVlq73XcV7VfYVDUKUeUtPdVOdG7R87wCCpPKHx0WtZDh%2B%2FHwVD3G6iQSiKv1zwZ2jgvfHmjYv074SjS%2F1Y8Tk%2BQHeTsPV5pVHRoZlB0M1&X-Amz-Signature=a40ffeba5f2cf0ebbae0e375e61b3ab41829a54082ccf0e5ac230898271a6353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MS5HLXI%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDqMmKcydd7wWtRsfJzbvRXE0m70f%2BxLmm4Yuu3yw3dnAiAxYVsDGHjQ%2FPi1VuQdsVev4eGUZMKrCO1VjQOZkZPYVyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMESWUMSGnsKAQi2xhKtwDLoOtM3%2FRGynYCvROkXcgpAZOMbqIeGOL0vIGEYBaZvU7D9sjNGtRKLpdfi56M7wGg4QmDsuHDD3mMhR3PuEbNI12M%2F9e1N8Xrg88%2FuW%2FwOA7SNVomEPa0f%2F1NXLvTtbh8NAM39VrFaKDBsP%2Fg1HzOoxCOyWLtmc5IkO7Nz4lKHXpc2SL%2BvAEt%2FJBmkSrMUj1wSwMp4Z%2Bm1ucBifcCrVKpIkeXiEtiO6MADAVWAPb6zPQh%2Fdd0atS86TAMBROGtmzdA0jxiZhcD9R7o9NDhuNyQkTzneVoiFCb4jS3uydOamjEO7laTHMSr8L1lQc6BY4VReG1nAxqSubw2PdKQDpVkj7PU0qx3GeMxTxz1AZx8aUyccIjNmgZ8ylPKeFWF8W3%2FvoBK07arwQKPemstBSMVyoJFDfWo8j%2BJLvG3qTb97iJB%2FHi8AtkjZcdVRCkBfEIvXQiufwhbthq06jHzBjFiVmq2LstRAY8N6Nn2xggi3A6O0XNFqxpo7fSnSIucze6PfW2ulJlkmhWQimFkE0M2OdZzgtjlr2f2HFt4Nui8EP%2FFk1FXF1LA6SYAPMh6D9rK3GfOnjLGHd1hIHEo5W2daw%2FV5TvwiFPY8heqvXX2z49Dy7KA0BQ8%2B%2FKI8w3e2LywY6pgHXIJ4VqaJtwY3D1ACbikXN9KiCqZQWPlI7pEOLnf9glvHoKWCSZs5yOnj2h%2FHA0pGNjUqIClAOcRQyGSwTsJkFSs9F9n%2Fm79tfPABgOvB7fdj%2F%2FsOsglUVlq73XcV7VfYVDUKUeUtPdVOdG7R87wCCpPKHx0WtZDh%2B%2FHwVD3G6iQSiKv1zwZ2jgvfHmjYv074SjS%2F1Y8Tk%2BQHeTsPV5pVHRoZlB0M1&X-Amz-Signature=aca7ff2cfeadac23fb0501b8e9b2fcb3d0098f297b57285ac9d5a4c396c32f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MS5HLXI%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDqMmKcydd7wWtRsfJzbvRXE0m70f%2BxLmm4Yuu3yw3dnAiAxYVsDGHjQ%2FPi1VuQdsVev4eGUZMKrCO1VjQOZkZPYVyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMESWUMSGnsKAQi2xhKtwDLoOtM3%2FRGynYCvROkXcgpAZOMbqIeGOL0vIGEYBaZvU7D9sjNGtRKLpdfi56M7wGg4QmDsuHDD3mMhR3PuEbNI12M%2F9e1N8Xrg88%2FuW%2FwOA7SNVomEPa0f%2F1NXLvTtbh8NAM39VrFaKDBsP%2Fg1HzOoxCOyWLtmc5IkO7Nz4lKHXpc2SL%2BvAEt%2FJBmkSrMUj1wSwMp4Z%2Bm1ucBifcCrVKpIkeXiEtiO6MADAVWAPb6zPQh%2Fdd0atS86TAMBROGtmzdA0jxiZhcD9R7o9NDhuNyQkTzneVoiFCb4jS3uydOamjEO7laTHMSr8L1lQc6BY4VReG1nAxqSubw2PdKQDpVkj7PU0qx3GeMxTxz1AZx8aUyccIjNmgZ8ylPKeFWF8W3%2FvoBK07arwQKPemstBSMVyoJFDfWo8j%2BJLvG3qTb97iJB%2FHi8AtkjZcdVRCkBfEIvXQiufwhbthq06jHzBjFiVmq2LstRAY8N6Nn2xggi3A6O0XNFqxpo7fSnSIucze6PfW2ulJlkmhWQimFkE0M2OdZzgtjlr2f2HFt4Nui8EP%2FFk1FXF1LA6SYAPMh6D9rK3GfOnjLGHd1hIHEo5W2daw%2FV5TvwiFPY8heqvXX2z49Dy7KA0BQ8%2B%2FKI8w3e2LywY6pgHXIJ4VqaJtwY3D1ACbikXN9KiCqZQWPlI7pEOLnf9glvHoKWCSZs5yOnj2h%2FHA0pGNjUqIClAOcRQyGSwTsJkFSs9F9n%2Fm79tfPABgOvB7fdj%2F%2FsOsglUVlq73XcV7VfYVDUKUeUtPdVOdG7R87wCCpPKHx0WtZDh%2B%2FHwVD3G6iQSiKv1zwZ2jgvfHmjYv074SjS%2F1Y8Tk%2BQHeTsPV5pVHRoZlB0M1&X-Amz-Signature=7b48f64233d65b9850cb7290ac0327d9d589a7488bbc8ae403e7fa16af7db7b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MS5HLXI%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDqMmKcydd7wWtRsfJzbvRXE0m70f%2BxLmm4Yuu3yw3dnAiAxYVsDGHjQ%2FPi1VuQdsVev4eGUZMKrCO1VjQOZkZPYVyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMESWUMSGnsKAQi2xhKtwDLoOtM3%2FRGynYCvROkXcgpAZOMbqIeGOL0vIGEYBaZvU7D9sjNGtRKLpdfi56M7wGg4QmDsuHDD3mMhR3PuEbNI12M%2F9e1N8Xrg88%2FuW%2FwOA7SNVomEPa0f%2F1NXLvTtbh8NAM39VrFaKDBsP%2Fg1HzOoxCOyWLtmc5IkO7Nz4lKHXpc2SL%2BvAEt%2FJBmkSrMUj1wSwMp4Z%2Bm1ucBifcCrVKpIkeXiEtiO6MADAVWAPb6zPQh%2Fdd0atS86TAMBROGtmzdA0jxiZhcD9R7o9NDhuNyQkTzneVoiFCb4jS3uydOamjEO7laTHMSr8L1lQc6BY4VReG1nAxqSubw2PdKQDpVkj7PU0qx3GeMxTxz1AZx8aUyccIjNmgZ8ylPKeFWF8W3%2FvoBK07arwQKPemstBSMVyoJFDfWo8j%2BJLvG3qTb97iJB%2FHi8AtkjZcdVRCkBfEIvXQiufwhbthq06jHzBjFiVmq2LstRAY8N6Nn2xggi3A6O0XNFqxpo7fSnSIucze6PfW2ulJlkmhWQimFkE0M2OdZzgtjlr2f2HFt4Nui8EP%2FFk1FXF1LA6SYAPMh6D9rK3GfOnjLGHd1hIHEo5W2daw%2FV5TvwiFPY8heqvXX2z49Dy7KA0BQ8%2B%2FKI8w3e2LywY6pgHXIJ4VqaJtwY3D1ACbikXN9KiCqZQWPlI7pEOLnf9glvHoKWCSZs5yOnj2h%2FHA0pGNjUqIClAOcRQyGSwTsJkFSs9F9n%2Fm79tfPABgOvB7fdj%2F%2FsOsglUVlq73XcV7VfYVDUKUeUtPdVOdG7R87wCCpPKHx0WtZDh%2B%2FHwVD3G6iQSiKv1zwZ2jgvfHmjYv074SjS%2F1Y8Tk%2BQHeTsPV5pVHRoZlB0M1&X-Amz-Signature=7fb0fe42d13636fb432214f0ecfe09e2603baff51b16050bca2b18cb1fa4f50b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MS5HLXI%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDqMmKcydd7wWtRsfJzbvRXE0m70f%2BxLmm4Yuu3yw3dnAiAxYVsDGHjQ%2FPi1VuQdsVev4eGUZMKrCO1VjQOZkZPYVyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMESWUMSGnsKAQi2xhKtwDLoOtM3%2FRGynYCvROkXcgpAZOMbqIeGOL0vIGEYBaZvU7D9sjNGtRKLpdfi56M7wGg4QmDsuHDD3mMhR3PuEbNI12M%2F9e1N8Xrg88%2FuW%2FwOA7SNVomEPa0f%2F1NXLvTtbh8NAM39VrFaKDBsP%2Fg1HzOoxCOyWLtmc5IkO7Nz4lKHXpc2SL%2BvAEt%2FJBmkSrMUj1wSwMp4Z%2Bm1ucBifcCrVKpIkeXiEtiO6MADAVWAPb6zPQh%2Fdd0atS86TAMBROGtmzdA0jxiZhcD9R7o9NDhuNyQkTzneVoiFCb4jS3uydOamjEO7laTHMSr8L1lQc6BY4VReG1nAxqSubw2PdKQDpVkj7PU0qx3GeMxTxz1AZx8aUyccIjNmgZ8ylPKeFWF8W3%2FvoBK07arwQKPemstBSMVyoJFDfWo8j%2BJLvG3qTb97iJB%2FHi8AtkjZcdVRCkBfEIvXQiufwhbthq06jHzBjFiVmq2LstRAY8N6Nn2xggi3A6O0XNFqxpo7fSnSIucze6PfW2ulJlkmhWQimFkE0M2OdZzgtjlr2f2HFt4Nui8EP%2FFk1FXF1LA6SYAPMh6D9rK3GfOnjLGHd1hIHEo5W2daw%2FV5TvwiFPY8heqvXX2z49Dy7KA0BQ8%2B%2FKI8w3e2LywY6pgHXIJ4VqaJtwY3D1ACbikXN9KiCqZQWPlI7pEOLnf9glvHoKWCSZs5yOnj2h%2FHA0pGNjUqIClAOcRQyGSwTsJkFSs9F9n%2Fm79tfPABgOvB7fdj%2F%2FsOsglUVlq73XcV7VfYVDUKUeUtPdVOdG7R87wCCpPKHx0WtZDh%2B%2FHwVD3G6iQSiKv1zwZ2jgvfHmjYv074SjS%2F1Y8Tk%2BQHeTsPV5pVHRoZlB0M1&X-Amz-Signature=221c0afba29c8e7f55df1af3194b2633fc662e0def64029c04b9f9635d27c6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCBKHH5C%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQC4Epo0BemtdS5qH0iERJ0%2FN7jBU2LYtDFs1cHpd5ByjQIgf7D1nUn3UGHDQNnBG6G4r8B8QOvBVXWVXKnAFpOa7C8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXNXQdUD1Y4uQrqoyrcAyWx9%2BqNl4PY8JVrn%2FAjeM1wutie4UGCNzG2ihVy34Vi0Jppk3s7SJBFRFHcOq2rIRUhYisZpUTTQTI%2F3LBTDzsukTi5bPnnoRn8pI5X5pjhQ7gfosfwYcFtrucZH3C%2BCpAvpKiLkSCIddl%2BVIRPLDsqHF3yVb6UI5Di7WInQyBdZSbI3mRdkXtIJw3cVwLssPO9yNk9Eg0XG6o37OfrKUCVRzIUQmGkmQar7N7UTRrsVU5Y7%2B%2Ft3w8%2FmExMeE3VSqvElVHUOpROcDB1FchASy8ylDv4J4lDA6%2B4rVUZWIbOD0aKzIMBf41VqFsu5U9KH3vbAnTFnS46VVaJmmRM5MuqSxHIMlmK4dLOMCCPl%2Bybs2O5r%2FaG818888JrRuPoF5m%2Fv0Hm4Ub4v0cjpiyCfXzNxZW7Hkg7NzZWXldEzxdjTRSE2MFE9yw06yTAXfEkyYspJ0mAB8kw2q89GU5Wrr2zsasnuf9qCBl2i2TRKuMNa0Xp47wTdTHq15G9jqHNTESPvdQIWA5u9syCLSNzVKdbNOxnGLmKpa2JttBVP%2Bjky2N1n0%2BW2vtOE6HIfNo%2BZd8X0DbGmrBXYzGzPpd8sjd%2BJOXq%2BZP8QsxHbMyrRCF2lvFS3R9AyzZxHnm1MKHIjMsGOqUB4oX%2Fvso5fOjNPfZkWRsA2HyftZC3is39dHpcFc2v4D8rP5uG75BO0g5vimI3Xev%2FBPloPmlJKEV9s%2FwOyFMrEAhhMVWw%2F3Z7bpQzaaFygNnl6hN88G%2B%2FfaWVozE7HvL3RdTjmag1fSc%2BsaYWMLJ01Txha1uY7W%2FYyy3zy9NxI9pIKPvaZDx9ZhP8b6c6XI45E%2Bv4W%2BWPy%2BXEsiMkJlaOsqiKng1t&X-Amz-Signature=0cb6187de0d1203eacb901a726056439069151be2819fb0361f9768409c4b2a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCBKHH5C%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQC4Epo0BemtdS5qH0iERJ0%2FN7jBU2LYtDFs1cHpd5ByjQIgf7D1nUn3UGHDQNnBG6G4r8B8QOvBVXWVXKnAFpOa7C8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXNXQdUD1Y4uQrqoyrcAyWx9%2BqNl4PY8JVrn%2FAjeM1wutie4UGCNzG2ihVy34Vi0Jppk3s7SJBFRFHcOq2rIRUhYisZpUTTQTI%2F3LBTDzsukTi5bPnnoRn8pI5X5pjhQ7gfosfwYcFtrucZH3C%2BCpAvpKiLkSCIddl%2BVIRPLDsqHF3yVb6UI5Di7WInQyBdZSbI3mRdkXtIJw3cVwLssPO9yNk9Eg0XG6o37OfrKUCVRzIUQmGkmQar7N7UTRrsVU5Y7%2B%2Ft3w8%2FmExMeE3VSqvElVHUOpROcDB1FchASy8ylDv4J4lDA6%2B4rVUZWIbOD0aKzIMBf41VqFsu5U9KH3vbAnTFnS46VVaJmmRM5MuqSxHIMlmK4dLOMCCPl%2Bybs2O5r%2FaG818888JrRuPoF5m%2Fv0Hm4Ub4v0cjpiyCfXzNxZW7Hkg7NzZWXldEzxdjTRSE2MFE9yw06yTAXfEkyYspJ0mAB8kw2q89GU5Wrr2zsasnuf9qCBl2i2TRKuMNa0Xp47wTdTHq15G9jqHNTESPvdQIWA5u9syCLSNzVKdbNOxnGLmKpa2JttBVP%2Bjky2N1n0%2BW2vtOE6HIfNo%2BZd8X0DbGmrBXYzGzPpd8sjd%2BJOXq%2BZP8QsxHbMyrRCF2lvFS3R9AyzZxHnm1MKHIjMsGOqUB4oX%2Fvso5fOjNPfZkWRsA2HyftZC3is39dHpcFc2v4D8rP5uG75BO0g5vimI3Xev%2FBPloPmlJKEV9s%2FwOyFMrEAhhMVWw%2F3Z7bpQzaaFygNnl6hN88G%2B%2FfaWVozE7HvL3RdTjmag1fSc%2BsaYWMLJ01Txha1uY7W%2FYyy3zy9NxI9pIKPvaZDx9ZhP8b6c6XI45E%2Bv4W%2BWPy%2BXEsiMkJlaOsqiKng1t&X-Amz-Signature=3a315a2ec3b16503b78ad233242904f08b7d4054dd032daa53ccd52b06bbfd1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCBKHH5C%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQC4Epo0BemtdS5qH0iERJ0%2FN7jBU2LYtDFs1cHpd5ByjQIgf7D1nUn3UGHDQNnBG6G4r8B8QOvBVXWVXKnAFpOa7C8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXNXQdUD1Y4uQrqoyrcAyWx9%2BqNl4PY8JVrn%2FAjeM1wutie4UGCNzG2ihVy34Vi0Jppk3s7SJBFRFHcOq2rIRUhYisZpUTTQTI%2F3LBTDzsukTi5bPnnoRn8pI5X5pjhQ7gfosfwYcFtrucZH3C%2BCpAvpKiLkSCIddl%2BVIRPLDsqHF3yVb6UI5Di7WInQyBdZSbI3mRdkXtIJw3cVwLssPO9yNk9Eg0XG6o37OfrKUCVRzIUQmGkmQar7N7UTRrsVU5Y7%2B%2Ft3w8%2FmExMeE3VSqvElVHUOpROcDB1FchASy8ylDv4J4lDA6%2B4rVUZWIbOD0aKzIMBf41VqFsu5U9KH3vbAnTFnS46VVaJmmRM5MuqSxHIMlmK4dLOMCCPl%2Bybs2O5r%2FaG818888JrRuPoF5m%2Fv0Hm4Ub4v0cjpiyCfXzNxZW7Hkg7NzZWXldEzxdjTRSE2MFE9yw06yTAXfEkyYspJ0mAB8kw2q89GU5Wrr2zsasnuf9qCBl2i2TRKuMNa0Xp47wTdTHq15G9jqHNTESPvdQIWA5u9syCLSNzVKdbNOxnGLmKpa2JttBVP%2Bjky2N1n0%2BW2vtOE6HIfNo%2BZd8X0DbGmrBXYzGzPpd8sjd%2BJOXq%2BZP8QsxHbMyrRCF2lvFS3R9AyzZxHnm1MKHIjMsGOqUB4oX%2Fvso5fOjNPfZkWRsA2HyftZC3is39dHpcFc2v4D8rP5uG75BO0g5vimI3Xev%2FBPloPmlJKEV9s%2FwOyFMrEAhhMVWw%2F3Z7bpQzaaFygNnl6hN88G%2B%2FfaWVozE7HvL3RdTjmag1fSc%2BsaYWMLJ01Txha1uY7W%2FYyy3zy9NxI9pIKPvaZDx9ZhP8b6c6XI45E%2Bv4W%2BWPy%2BXEsiMkJlaOsqiKng1t&X-Amz-Signature=59036be98a22b644e41e33cb68219dc1a790438d7c535bf24b4906591e98c6cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCBKHH5C%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQC4Epo0BemtdS5qH0iERJ0%2FN7jBU2LYtDFs1cHpd5ByjQIgf7D1nUn3UGHDQNnBG6G4r8B8QOvBVXWVXKnAFpOa7C8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXNXQdUD1Y4uQrqoyrcAyWx9%2BqNl4PY8JVrn%2FAjeM1wutie4UGCNzG2ihVy34Vi0Jppk3s7SJBFRFHcOq2rIRUhYisZpUTTQTI%2F3LBTDzsukTi5bPnnoRn8pI5X5pjhQ7gfosfwYcFtrucZH3C%2BCpAvpKiLkSCIddl%2BVIRPLDsqHF3yVb6UI5Di7WInQyBdZSbI3mRdkXtIJw3cVwLssPO9yNk9Eg0XG6o37OfrKUCVRzIUQmGkmQar7N7UTRrsVU5Y7%2B%2Ft3w8%2FmExMeE3VSqvElVHUOpROcDB1FchASy8ylDv4J4lDA6%2B4rVUZWIbOD0aKzIMBf41VqFsu5U9KH3vbAnTFnS46VVaJmmRM5MuqSxHIMlmK4dLOMCCPl%2Bybs2O5r%2FaG818888JrRuPoF5m%2Fv0Hm4Ub4v0cjpiyCfXzNxZW7Hkg7NzZWXldEzxdjTRSE2MFE9yw06yTAXfEkyYspJ0mAB8kw2q89GU5Wrr2zsasnuf9qCBl2i2TRKuMNa0Xp47wTdTHq15G9jqHNTESPvdQIWA5u9syCLSNzVKdbNOxnGLmKpa2JttBVP%2Bjky2N1n0%2BW2vtOE6HIfNo%2BZd8X0DbGmrBXYzGzPpd8sjd%2BJOXq%2BZP8QsxHbMyrRCF2lvFS3R9AyzZxHnm1MKHIjMsGOqUB4oX%2Fvso5fOjNPfZkWRsA2HyftZC3is39dHpcFc2v4D8rP5uG75BO0g5vimI3Xev%2FBPloPmlJKEV9s%2FwOyFMrEAhhMVWw%2F3Z7bpQzaaFygNnl6hN88G%2B%2FfaWVozE7HvL3RdTjmag1fSc%2BsaYWMLJ01Txha1uY7W%2FYyy3zy9NxI9pIKPvaZDx9ZhP8b6c6XI45E%2Bv4W%2BWPy%2BXEsiMkJlaOsqiKng1t&X-Amz-Signature=bf8ca789bff3d1e89505ed0e22d9a96394808d5a0ede25ef6c6a2add2de1e8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCBKHH5C%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQC4Epo0BemtdS5qH0iERJ0%2FN7jBU2LYtDFs1cHpd5ByjQIgf7D1nUn3UGHDQNnBG6G4r8B8QOvBVXWVXKnAFpOa7C8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXNXQdUD1Y4uQrqoyrcAyWx9%2BqNl4PY8JVrn%2FAjeM1wutie4UGCNzG2ihVy34Vi0Jppk3s7SJBFRFHcOq2rIRUhYisZpUTTQTI%2F3LBTDzsukTi5bPnnoRn8pI5X5pjhQ7gfosfwYcFtrucZH3C%2BCpAvpKiLkSCIddl%2BVIRPLDsqHF3yVb6UI5Di7WInQyBdZSbI3mRdkXtIJw3cVwLssPO9yNk9Eg0XG6o37OfrKUCVRzIUQmGkmQar7N7UTRrsVU5Y7%2B%2Ft3w8%2FmExMeE3VSqvElVHUOpROcDB1FchASy8ylDv4J4lDA6%2B4rVUZWIbOD0aKzIMBf41VqFsu5U9KH3vbAnTFnS46VVaJmmRM5MuqSxHIMlmK4dLOMCCPl%2Bybs2O5r%2FaG818888JrRuPoF5m%2Fv0Hm4Ub4v0cjpiyCfXzNxZW7Hkg7NzZWXldEzxdjTRSE2MFE9yw06yTAXfEkyYspJ0mAB8kw2q89GU5Wrr2zsasnuf9qCBl2i2TRKuMNa0Xp47wTdTHq15G9jqHNTESPvdQIWA5u9syCLSNzVKdbNOxnGLmKpa2JttBVP%2Bjky2N1n0%2BW2vtOE6HIfNo%2BZd8X0DbGmrBXYzGzPpd8sjd%2BJOXq%2BZP8QsxHbMyrRCF2lvFS3R9AyzZxHnm1MKHIjMsGOqUB4oX%2Fvso5fOjNPfZkWRsA2HyftZC3is39dHpcFc2v4D8rP5uG75BO0g5vimI3Xev%2FBPloPmlJKEV9s%2FwOyFMrEAhhMVWw%2F3Z7bpQzaaFygNnl6hN88G%2B%2FfaWVozE7HvL3RdTjmag1fSc%2BsaYWMLJ01Txha1uY7W%2FYyy3zy9NxI9pIKPvaZDx9ZhP8b6c6XI45E%2Bv4W%2BWPy%2BXEsiMkJlaOsqiKng1t&X-Amz-Signature=e21faeec10ef8633b7f592d94ecbd179fb478ac044ca6159ac66897b6d904dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGF6U5L4%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCNpC9w6Osw3gnX19fQrcRTo%2BNr%2BVxjkUwVxE4oPRPzXQIgagphb7zVhl7eMlFhJqR4BqXGk%2BV1AoVZxhXMgtpFMMMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7UcQvypAQoCyJiiSrcA8bpR4isHAR4yD6YQBlVlqLLYYMMkGgrorMYcalOy4w%2FZdolOIxtrLwUBmnEPyRv21PoUm1aYnr1JFj3FyBru8tBUivMKH8F5z7amG1vIxcI%2B2gUgo78YuC8p6DV2bbm5BT71ThxaLlUVr4DKDEY9AQpHjFxiFxj7N02aco%2Fb04ofF6MN6xh2LdPXEn4xM5jLi3KanBAdgwZt%2FJXGiuQ8qc4S%2B2YeuN61qbSf5Mx8Dmam3LB%2Fak3U7hPbImTZ%2Fuaa07ooea2v49Wn08VuWkY0Nw%2B15JZ33lAj3Rymkz9NVIF3JuzRyCojD9I61PSrCWor%2FS2H%2FQ%2FNousxV2PR5FrRl58wUsN4IKldaXPsq1PR1E3rhCRszJNe29kQVrp%2FayNQxrMyh0NvJ%2FMnYiGR%2BePhp0EIxfULB0lBBLT4bIleaggc9Wu8IvXv4ocb1O2ZwePKITR087bvs5gOyzKMl9LNrXIM8KLqht9L4xdRSjKMaRyaQIQN61GFwQ%2FbDmA6k9nxzQcAj1GD0ZOS57HOAaiF2HOobvP5JLaPNsdn8YXo6%2Fipldc1sAMXgnSenP1PQFvmwY7pPr2pn6rSIuvw3irRJd00HVOA5TmNvbIa87TzEQ0w1ZOngavXd9fbVkeMODvi8sGOqUBYUdE6ANb0GidxkETLV3jbJdydgYZOz99cMIPjAb74nIQB3vYXklSQNQVQiCaZkbl3jhMT5VllQtFpZakuTX4bNJ1X0sBtOmFqUqroAoWNy%2B%2BLsF%2BxntSJFyQEu%2FxO5OEBrtRcKkHS7azibq%2FdEDP%2B0Cfu0mM%2F3DJCR2PF%2FhE%2BBDitem3bsv3sq5SdF2ckmgkqeIh4zreb7ZwPmUP0rSqnqAEuIbT&X-Amz-Signature=786068d31f00aa9e2c0b194be368c4a8cddbbfa8e9d1e8df28b01c39e1d60313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGF6U5L4%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCNpC9w6Osw3gnX19fQrcRTo%2BNr%2BVxjkUwVxE4oPRPzXQIgagphb7zVhl7eMlFhJqR4BqXGk%2BV1AoVZxhXMgtpFMMMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7UcQvypAQoCyJiiSrcA8bpR4isHAR4yD6YQBlVlqLLYYMMkGgrorMYcalOy4w%2FZdolOIxtrLwUBmnEPyRv21PoUm1aYnr1JFj3FyBru8tBUivMKH8F5z7amG1vIxcI%2B2gUgo78YuC8p6DV2bbm5BT71ThxaLlUVr4DKDEY9AQpHjFxiFxj7N02aco%2Fb04ofF6MN6xh2LdPXEn4xM5jLi3KanBAdgwZt%2FJXGiuQ8qc4S%2B2YeuN61qbSf5Mx8Dmam3LB%2Fak3U7hPbImTZ%2Fuaa07ooea2v49Wn08VuWkY0Nw%2B15JZ33lAj3Rymkz9NVIF3JuzRyCojD9I61PSrCWor%2FS2H%2FQ%2FNousxV2PR5FrRl58wUsN4IKldaXPsq1PR1E3rhCRszJNe29kQVrp%2FayNQxrMyh0NvJ%2FMnYiGR%2BePhp0EIxfULB0lBBLT4bIleaggc9Wu8IvXv4ocb1O2ZwePKITR087bvs5gOyzKMl9LNrXIM8KLqht9L4xdRSjKMaRyaQIQN61GFwQ%2FbDmA6k9nxzQcAj1GD0ZOS57HOAaiF2HOobvP5JLaPNsdn8YXo6%2Fipldc1sAMXgnSenP1PQFvmwY7pPr2pn6rSIuvw3irRJd00HVOA5TmNvbIa87TzEQ0w1ZOngavXd9fbVkeMODvi8sGOqUBYUdE6ANb0GidxkETLV3jbJdydgYZOz99cMIPjAb74nIQB3vYXklSQNQVQiCaZkbl3jhMT5VllQtFpZakuTX4bNJ1X0sBtOmFqUqroAoWNy%2B%2BLsF%2BxntSJFyQEu%2FxO5OEBrtRcKkHS7azibq%2FdEDP%2B0Cfu0mM%2F3DJCR2PF%2FhE%2BBDitem3bsv3sq5SdF2ckmgkqeIh4zreb7ZwPmUP0rSqnqAEuIbT&X-Amz-Signature=d9aa045bf298062701b72d44f07d60785f8c83849078fe053fc2dc8f3a22c27b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGF6U5L4%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCNpC9w6Osw3gnX19fQrcRTo%2BNr%2BVxjkUwVxE4oPRPzXQIgagphb7zVhl7eMlFhJqR4BqXGk%2BV1AoVZxhXMgtpFMMMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7UcQvypAQoCyJiiSrcA8bpR4isHAR4yD6YQBlVlqLLYYMMkGgrorMYcalOy4w%2FZdolOIxtrLwUBmnEPyRv21PoUm1aYnr1JFj3FyBru8tBUivMKH8F5z7amG1vIxcI%2B2gUgo78YuC8p6DV2bbm5BT71ThxaLlUVr4DKDEY9AQpHjFxiFxj7N02aco%2Fb04ofF6MN6xh2LdPXEn4xM5jLi3KanBAdgwZt%2FJXGiuQ8qc4S%2B2YeuN61qbSf5Mx8Dmam3LB%2Fak3U7hPbImTZ%2Fuaa07ooea2v49Wn08VuWkY0Nw%2B15JZ33lAj3Rymkz9NVIF3JuzRyCojD9I61PSrCWor%2FS2H%2FQ%2FNousxV2PR5FrRl58wUsN4IKldaXPsq1PR1E3rhCRszJNe29kQVrp%2FayNQxrMyh0NvJ%2FMnYiGR%2BePhp0EIxfULB0lBBLT4bIleaggc9Wu8IvXv4ocb1O2ZwePKITR087bvs5gOyzKMl9LNrXIM8KLqht9L4xdRSjKMaRyaQIQN61GFwQ%2FbDmA6k9nxzQcAj1GD0ZOS57HOAaiF2HOobvP5JLaPNsdn8YXo6%2Fipldc1sAMXgnSenP1PQFvmwY7pPr2pn6rSIuvw3irRJd00HVOA5TmNvbIa87TzEQ0w1ZOngavXd9fbVkeMODvi8sGOqUBYUdE6ANb0GidxkETLV3jbJdydgYZOz99cMIPjAb74nIQB3vYXklSQNQVQiCaZkbl3jhMT5VllQtFpZakuTX4bNJ1X0sBtOmFqUqroAoWNy%2B%2BLsF%2BxntSJFyQEu%2FxO5OEBrtRcKkHS7azibq%2FdEDP%2B0Cfu0mM%2F3DJCR2PF%2FhE%2BBDitem3bsv3sq5SdF2ckmgkqeIh4zreb7ZwPmUP0rSqnqAEuIbT&X-Amz-Signature=dac2a75079612e71d6b21959bd76bb94a713b73c0e5478e691be6a33eb2c3b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUGZYIRI%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHvLgYyZS6Ms%2BVh17cojmeyml70xliZfJ0CBTTYmgPZoAiBxmaD25xXBuQ6qXviU4y1YEBIILs3I4VtFxMmLJIRFrCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNOdc%2BynxEKjYWSNFKtwD6ITXMpDTyZYa6SWRvIfokDTKjQfMBr3HYlNTf7anw7lGzUmsOKiOGr%2BnPWA9rX%2B%2B0LaEYxf5DmTPiRS1VYL%2FS3eXw1pymYkTiL1H5ihSEYXAaN%2F8k2l6U%2FLbtVY%2BzL5%2FWiDytVsnSTV5F6bO5WyfWGOKXa7NN7e%2FwJs6BDhjylNCl89z6nFtMHXcZDUX8A3JQuxa4%2B%2FnQ0s3vaC9sEJR6BU82ka7jocUu1G06CtLWyqF9wul%2F%2ByoNEPj%2BONVvJNKku%2BJ4zPLQRoqxDwESbppxhETG7NfGKXuhGW2ffK%2BCqwGt4I2n0kgAwkz1JbXUymRYRLXqO34NLrknEIQ3MXrvDs5TVCeZ0BdDQYfv%2B%2Fcy%2FjXiPijYPAe43yQ6Yef58hZi5zy5yXtqn%2FmxTmyi98NB3BR9DyYWcTu3A%2Fc%2F%2F%2FeFz2gSBqZJ%2FD9y0wADOiAnedjaFGHAsFi4FvHIj0x7aXtL4VJZeGZ0J7MKPko8FL%2FEjBrU6EJbYmWUvofHD3DQ1omblNQ7648JCV7w3b8jFp3tkg1JgEJkDfCcvsUWx5aPzu%2BoaBDoG5ytzxAaytpdNOnSwcDq2TlobduqEml%2Bwbg22vy6cU44DBrZE65%2F2ED1TY6aJFDgN9Dnd0DxC0wyfOLywY6pgH7iQDXW%2BuAf4v2sZPKJvoxMZapdgr8cqK3Ue9REFuhnB3KUWQk0gGaDo7YxCYuva5OAAvp1l8y%2BITZm5g1S2gMlivUTwnoB1JsaMMPtar%2FGqfZxmHff8ZW%2BGgkSBWA1Mt7HOMc72MxfQRMHEUBvrlOyHcpPl2qbxnfn0cpyklipOmFMzFp8mfPd09gE9IENlkWbtgGLs4b1prCy%2F2Sg77YGliqOS4D&X-Amz-Signature=b37183f1a7fe9a6076f03a80f7e35273fd2ba2be93bccaa8e45a8b7c770e0552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUGZYIRI%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHvLgYyZS6Ms%2BVh17cojmeyml70xliZfJ0CBTTYmgPZoAiBxmaD25xXBuQ6qXviU4y1YEBIILs3I4VtFxMmLJIRFrCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNOdc%2BynxEKjYWSNFKtwD6ITXMpDTyZYa6SWRvIfokDTKjQfMBr3HYlNTf7anw7lGzUmsOKiOGr%2BnPWA9rX%2B%2B0LaEYxf5DmTPiRS1VYL%2FS3eXw1pymYkTiL1H5ihSEYXAaN%2F8k2l6U%2FLbtVY%2BzL5%2FWiDytVsnSTV5F6bO5WyfWGOKXa7NN7e%2FwJs6BDhjylNCl89z6nFtMHXcZDUX8A3JQuxa4%2B%2FnQ0s3vaC9sEJR6BU82ka7jocUu1G06CtLWyqF9wul%2F%2ByoNEPj%2BONVvJNKku%2BJ4zPLQRoqxDwESbppxhETG7NfGKXuhGW2ffK%2BCqwGt4I2n0kgAwkz1JbXUymRYRLXqO34NLrknEIQ3MXrvDs5TVCeZ0BdDQYfv%2B%2Fcy%2FjXiPijYPAe43yQ6Yef58hZi5zy5yXtqn%2FmxTmyi98NB3BR9DyYWcTu3A%2Fc%2F%2F%2FeFz2gSBqZJ%2FD9y0wADOiAnedjaFGHAsFi4FvHIj0x7aXtL4VJZeGZ0J7MKPko8FL%2FEjBrU6EJbYmWUvofHD3DQ1omblNQ7648JCV7w3b8jFp3tkg1JgEJkDfCcvsUWx5aPzu%2BoaBDoG5ytzxAaytpdNOnSwcDq2TlobduqEml%2Bwbg22vy6cU44DBrZE65%2F2ED1TY6aJFDgN9Dnd0DxC0wyfOLywY6pgH7iQDXW%2BuAf4v2sZPKJvoxMZapdgr8cqK3Ue9REFuhnB3KUWQk0gGaDo7YxCYuva5OAAvp1l8y%2BITZm5g1S2gMlivUTwnoB1JsaMMPtar%2FGqfZxmHff8ZW%2BGgkSBWA1Mt7HOMc72MxfQRMHEUBvrlOyHcpPl2qbxnfn0cpyklipOmFMzFp8mfPd09gE9IENlkWbtgGLs4b1prCy%2F2Sg77YGliqOS4D&X-Amz-Signature=7906f3b02b2ef358ad965b2b68bf74d9e2e328c06c51db7d14b284597c5eaffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D32DXX6%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD1i4XJLM9DSXc3G599iXx%2F2BbYT%2Fq1Uey9DrVEo52kowIhAL5RcakWZnK0vb8u4mmllCFgdwFxD16q4V6foFZsqOcaKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO6NXeScXOu%2FJKXHsq3AN8nDvBH9tJAxtXIV4lQKJW7d5omoPHrYlWWlknfTE6yWvXA64ywG3o1ktDckcz5i9KFxvm8Up2xsMKWKVgbLZaeYZhk8xPLsQ9cpcY7Ulcg%2Bk6lmNa0qYKe%2FLh1KkKzsxq0zhfIVYIgPCzADiHL9lQWrDJApf0BJMT27QBYCg8q40tuewqOgG0aKOIiHJr%2Bee61a0RSMiYYtzOLPShN59AocZgdfw5Y0eDzkc%2BudIWOYqIzy50m3sWwpLLwo%2FFAA%2FD5Kv%2FwqA1jMtRwqhYwXhVwtG3%2BOZvHzApX3XT31bG65FoOBM59hufqwQof1saX%2FQJM%2FVQcQW5XdQIe9JBhQS958UsW4If%2FXBgNSthA0Ro1v%2BTjkTI9TRY59Sboohpmf67HXSSuGlGoS4ADElMwnn2S8FS778z4NHW91XhRfBff2cfbMgQSUEQwwVwVBjV09tnKLJA%2B%2F%2BMF3EDEtD20uf73nxsBFP2z%2F72rivqPySGfoK%2F%2FRegB9lzPYi6jXYi2CRWhkZj34IwxzKtNw41hhXm%2BXhK%2FQKTNS80Q52EToyhXy5lBbyk4orcil5KzDpzA%2BLzwZ98pE%2FHwGehpyyRK4TzRjO4ex5PJlR%2FLzHIzeHTjHEB6Qa5zSot55MNLjCL84vLBjqkAQO6t1cDyoEQfepB9Z4l%2B0N6ybIsks%2B4X3DmlqsUbOUQjcf8pPeVaXW068aCJBH3Q%2BVYHv0Fg3YXaeX60vPKXwhD1gqNw93pRVbLwWFVLfLikID0M6wfV5C3TC4%2B9%2Bk0jKSYuQcv7coy0fTgZQVmG%2Fu5LTdS8JVPaOVq211jSXvrw7hfl%2F5auS70%2Bea3phEWDL1G%2FmSurdJf6VRLSczWHTFIKfzZ&X-Amz-Signature=db2322e42c3a2f74a9c943445472567266fa290d945d4aa3f67ce0dac0b6cc5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D32DXX6%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD1i4XJLM9DSXc3G599iXx%2F2BbYT%2Fq1Uey9DrVEo52kowIhAL5RcakWZnK0vb8u4mmllCFgdwFxD16q4V6foFZsqOcaKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO6NXeScXOu%2FJKXHsq3AN8nDvBH9tJAxtXIV4lQKJW7d5omoPHrYlWWlknfTE6yWvXA64ywG3o1ktDckcz5i9KFxvm8Up2xsMKWKVgbLZaeYZhk8xPLsQ9cpcY7Ulcg%2Bk6lmNa0qYKe%2FLh1KkKzsxq0zhfIVYIgPCzADiHL9lQWrDJApf0BJMT27QBYCg8q40tuewqOgG0aKOIiHJr%2Bee61a0RSMiYYtzOLPShN59AocZgdfw5Y0eDzkc%2BudIWOYqIzy50m3sWwpLLwo%2FFAA%2FD5Kv%2FwqA1jMtRwqhYwXhVwtG3%2BOZvHzApX3XT31bG65FoOBM59hufqwQof1saX%2FQJM%2FVQcQW5XdQIe9JBhQS958UsW4If%2FXBgNSthA0Ro1v%2BTjkTI9TRY59Sboohpmf67HXSSuGlGoS4ADElMwnn2S8FS778z4NHW91XhRfBff2cfbMgQSUEQwwVwVBjV09tnKLJA%2B%2F%2BMF3EDEtD20uf73nxsBFP2z%2F72rivqPySGfoK%2F%2FRegB9lzPYi6jXYi2CRWhkZj34IwxzKtNw41hhXm%2BXhK%2FQKTNS80Q52EToyhXy5lBbyk4orcil5KzDpzA%2BLzwZ98pE%2FHwGehpyyRK4TzRjO4ex5PJlR%2FLzHIzeHTjHEB6Qa5zSot55MNLjCL84vLBjqkAQO6t1cDyoEQfepB9Z4l%2B0N6ybIsks%2B4X3DmlqsUbOUQjcf8pPeVaXW068aCJBH3Q%2BVYHv0Fg3YXaeX60vPKXwhD1gqNw93pRVbLwWFVLfLikID0M6wfV5C3TC4%2B9%2Bk0jKSYuQcv7coy0fTgZQVmG%2Fu5LTdS8JVPaOVq211jSXvrw7hfl%2F5auS70%2Bea3phEWDL1G%2FmSurdJf6VRLSczWHTFIKfzZ&X-Amz-Signature=37991dc26f70989e20670f0a3d791cd90ce9bdc22959414040bb7b0d733cef9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D32DXX6%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD1i4XJLM9DSXc3G599iXx%2F2BbYT%2Fq1Uey9DrVEo52kowIhAL5RcakWZnK0vb8u4mmllCFgdwFxD16q4V6foFZsqOcaKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO6NXeScXOu%2FJKXHsq3AN8nDvBH9tJAxtXIV4lQKJW7d5omoPHrYlWWlknfTE6yWvXA64ywG3o1ktDckcz5i9KFxvm8Up2xsMKWKVgbLZaeYZhk8xPLsQ9cpcY7Ulcg%2Bk6lmNa0qYKe%2FLh1KkKzsxq0zhfIVYIgPCzADiHL9lQWrDJApf0BJMT27QBYCg8q40tuewqOgG0aKOIiHJr%2Bee61a0RSMiYYtzOLPShN59AocZgdfw5Y0eDzkc%2BudIWOYqIzy50m3sWwpLLwo%2FFAA%2FD5Kv%2FwqA1jMtRwqhYwXhVwtG3%2BOZvHzApX3XT31bG65FoOBM59hufqwQof1saX%2FQJM%2FVQcQW5XdQIe9JBhQS958UsW4If%2FXBgNSthA0Ro1v%2BTjkTI9TRY59Sboohpmf67HXSSuGlGoS4ADElMwnn2S8FS778z4NHW91XhRfBff2cfbMgQSUEQwwVwVBjV09tnKLJA%2B%2F%2BMF3EDEtD20uf73nxsBFP2z%2F72rivqPySGfoK%2F%2FRegB9lzPYi6jXYi2CRWhkZj34IwxzKtNw41hhXm%2BXhK%2FQKTNS80Q52EToyhXy5lBbyk4orcil5KzDpzA%2BLzwZ98pE%2FHwGehpyyRK4TzRjO4ex5PJlR%2FLzHIzeHTjHEB6Qa5zSot55MNLjCL84vLBjqkAQO6t1cDyoEQfepB9Z4l%2B0N6ybIsks%2B4X3DmlqsUbOUQjcf8pPeVaXW068aCJBH3Q%2BVYHv0Fg3YXaeX60vPKXwhD1gqNw93pRVbLwWFVLfLikID0M6wfV5C3TC4%2B9%2Bk0jKSYuQcv7coy0fTgZQVmG%2Fu5LTdS8JVPaOVq211jSXvrw7hfl%2F5auS70%2Bea3phEWDL1G%2FmSurdJf6VRLSczWHTFIKfzZ&X-Amz-Signature=7a7f07a9b9f34d6c8bd7bed82e3b8cc9e42db0af2e2b3aadab11dddf62cbc377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D32DXX6%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD1i4XJLM9DSXc3G599iXx%2F2BbYT%2Fq1Uey9DrVEo52kowIhAL5RcakWZnK0vb8u4mmllCFgdwFxD16q4V6foFZsqOcaKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO6NXeScXOu%2FJKXHsq3AN8nDvBH9tJAxtXIV4lQKJW7d5omoPHrYlWWlknfTE6yWvXA64ywG3o1ktDckcz5i9KFxvm8Up2xsMKWKVgbLZaeYZhk8xPLsQ9cpcY7Ulcg%2Bk6lmNa0qYKe%2FLh1KkKzsxq0zhfIVYIgPCzADiHL9lQWrDJApf0BJMT27QBYCg8q40tuewqOgG0aKOIiHJr%2Bee61a0RSMiYYtzOLPShN59AocZgdfw5Y0eDzkc%2BudIWOYqIzy50m3sWwpLLwo%2FFAA%2FD5Kv%2FwqA1jMtRwqhYwXhVwtG3%2BOZvHzApX3XT31bG65FoOBM59hufqwQof1saX%2FQJM%2FVQcQW5XdQIe9JBhQS958UsW4If%2FXBgNSthA0Ro1v%2BTjkTI9TRY59Sboohpmf67HXSSuGlGoS4ADElMwnn2S8FS778z4NHW91XhRfBff2cfbMgQSUEQwwVwVBjV09tnKLJA%2B%2F%2BMF3EDEtD20uf73nxsBFP2z%2F72rivqPySGfoK%2F%2FRegB9lzPYi6jXYi2CRWhkZj34IwxzKtNw41hhXm%2BXhK%2FQKTNS80Q52EToyhXy5lBbyk4orcil5KzDpzA%2BLzwZ98pE%2FHwGehpyyRK4TzRjO4ex5PJlR%2FLzHIzeHTjHEB6Qa5zSot55MNLjCL84vLBjqkAQO6t1cDyoEQfepB9Z4l%2B0N6ybIsks%2B4X3DmlqsUbOUQjcf8pPeVaXW068aCJBH3Q%2BVYHv0Fg3YXaeX60vPKXwhD1gqNw93pRVbLwWFVLfLikID0M6wfV5C3TC4%2B9%2Bk0jKSYuQcv7coy0fTgZQVmG%2Fu5LTdS8JVPaOVq211jSXvrw7hfl%2F5auS70%2Bea3phEWDL1G%2FmSurdJf6VRLSczWHTFIKfzZ&X-Amz-Signature=c3c8e7c98e1bddc8d8489ecf0b5f6c89239e57183271e6737a8f9c0fc24e4c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D32DXX6%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD1i4XJLM9DSXc3G599iXx%2F2BbYT%2Fq1Uey9DrVEo52kowIhAL5RcakWZnK0vb8u4mmllCFgdwFxD16q4V6foFZsqOcaKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO6NXeScXOu%2FJKXHsq3AN8nDvBH9tJAxtXIV4lQKJW7d5omoPHrYlWWlknfTE6yWvXA64ywG3o1ktDckcz5i9KFxvm8Up2xsMKWKVgbLZaeYZhk8xPLsQ9cpcY7Ulcg%2Bk6lmNa0qYKe%2FLh1KkKzsxq0zhfIVYIgPCzADiHL9lQWrDJApf0BJMT27QBYCg8q40tuewqOgG0aKOIiHJr%2Bee61a0RSMiYYtzOLPShN59AocZgdfw5Y0eDzkc%2BudIWOYqIzy50m3sWwpLLwo%2FFAA%2FD5Kv%2FwqA1jMtRwqhYwXhVwtG3%2BOZvHzApX3XT31bG65FoOBM59hufqwQof1saX%2FQJM%2FVQcQW5XdQIe9JBhQS958UsW4If%2FXBgNSthA0Ro1v%2BTjkTI9TRY59Sboohpmf67HXSSuGlGoS4ADElMwnn2S8FS778z4NHW91XhRfBff2cfbMgQSUEQwwVwVBjV09tnKLJA%2B%2F%2BMF3EDEtD20uf73nxsBFP2z%2F72rivqPySGfoK%2F%2FRegB9lzPYi6jXYi2CRWhkZj34IwxzKtNw41hhXm%2BXhK%2FQKTNS80Q52EToyhXy5lBbyk4orcil5KzDpzA%2BLzwZ98pE%2FHwGehpyyRK4TzRjO4ex5PJlR%2FLzHIzeHTjHEB6Qa5zSot55MNLjCL84vLBjqkAQO6t1cDyoEQfepB9Z4l%2B0N6ybIsks%2B4X3DmlqsUbOUQjcf8pPeVaXW068aCJBH3Q%2BVYHv0Fg3YXaeX60vPKXwhD1gqNw93pRVbLwWFVLfLikID0M6wfV5C3TC4%2B9%2Bk0jKSYuQcv7coy0fTgZQVmG%2Fu5LTdS8JVPaOVq211jSXvrw7hfl%2F5auS70%2Bea3phEWDL1G%2FmSurdJf6VRLSczWHTFIKfzZ&X-Amz-Signature=3098e20f14bb67666b804d7678cf7dd9b09b69bb0b7a3072c19bff840db7df29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4KQVQ6Q%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T041911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFiG6h%2FlzGOviOfV%2BNl15y8FV%2F921v17Omkmpx4%2FOHc%2FAiAn9%2FjNs%2FzYb%2BWT5pT4dDDvXJcXbSvJwOKhzX0QKI4EYSqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3R6f1qGeuVXKFxySKtwDFO9OXgaySgqo6oCd8jFLdjiIz5BCqKbGsFC%2F54qlHgrl52qQaIVFjaTHQhCO1nH6uQF95vaWP8hQDLfmMQ3GunqdQ%2Bc0OF5cLA7KnvbqlHDKNq%2ByHLnH2viV1K1X4qPpS3Yz5EMTn6hJk0r2mzf0E9jPAbp99%2Fi1jGKdD6qz93Krn5cXrcUHkKbDGpVBGgkU%2FGERMes7nFK2Pi49r9t8rOW%2Fgk%2BIZeHIcVutI5SEj21Ke9EbW2IssyWL8574n8iy2aXaTHCZR3q9YHyut4bZJSMkzRUCmsD2aKRegHsPsGc0pR11h8OFpp4wsnD1kvh4VNH%2B7h5AqRrcZoS%2B4p1hV5VED48%2BVAaIM%2BdCyvaiVLT70E%2FoaCTQ44JfpwErFdECIDMylwpZOLizzZ4uUi6GnyO1Vy%2B1bHAMaoBt%2BkwfwkxNfuQncHuyam2D1%2FIPLp50G2mD7T5QE2MxRG75AAEhGJrr%2BaJAwHB%2BC1hTuXMwoBLADYkwGq%2BG7Akt8p3hl8QQSuJYmCT34GAqHK%2FeSb2z8LtQe%2FrJIeyoHNtF90lx8ku2P%2FRNTJHPLhobOiaXlUABa5ZqhhuWlp1ImOcpO8Q%2FJ9H5p95Uz%2BFTfdoKTYdvUHUaJeREspFAGWVVgAMwuMiMywY6pgEGIVQhjt5G7hKD2fEqmMbQResbjxZHqD7A%2FDFyx%2Bho9t0Uvkn3XfL9y1dv%2B41gRLE4xaFsx2AcWzAeAvUSwe8W1Q%2BhbAZgU74vNIcQAecGGRsExG1H98UQJgvPzdyc80aGY9Hs%2F0fFATyknN0OTE78KnEWr2n29fPuMY9uS8Sxsl5i%2FOeFJggjuNNcFXzzvAEoC3WPnn1nOGNCJPeMVsLwt3b5owAS&X-Amz-Signature=e08a1a288fd76ad8a95c3cdc6fbcb5e68710a903f8a9885961f4062a6877eed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

