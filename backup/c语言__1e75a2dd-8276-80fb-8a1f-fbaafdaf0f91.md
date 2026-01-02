
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUXWMW6%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDq1eeppy4x4l4sdUewEA7e2SYwC1xZE5%2BL0sGj2KlWHgIgZYtiI7XPpgtiZO5D4lGTsC5auYb8NyFe62wWCd3LNKMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQ1XulM2NnqsnCxsyrcAy70KJc1UmrjwKSLR5GY4MzJJCiwsEK3anI4miySVDGvwgLaJ0OnjTYIs5BvBnHhL4HRDgGV8PUloUOOhkCZzD5xbCWb%2F3yMN6%2F%2BVRnf8JMWeGtcCzkmK%2BZk3%2FLUVaPQKs6iYbM%2Fx2KKcYQNgiLGfdn1KWVBrjlGc6vaR%2Bjj0CTyCAUoTQbwT0ENU6k7E4xt36Kf3%2BTwddn6jQN8jSqSPHWp5UkQHkyX4VZaTwPIeuiViURw%2BfwKdZdAWOXVZGpPW7ODpkrvFBKA0HfkBYWtehGbpzZCbLZnL9SqwxmIIhBUOWfG5M28VAQmiAvbFUTo2pq%2FJeCN5S%2FSLr0WnP1V6wW4T7ggpu8dlS%2BLk5PG8gX0UzNGbecmWy7lFKkBae%2F1Q14twkbt5Kc8kXjVE3hFOo5Oe%2FriZudI7un47MbZNt9waCgDapHZWjBixuiG%2BAkuy899KjTDq6LIQrlklERoIvnPVuZsdF5HJ2pngqNOcIb2V7v2elObOU9TgfK3PRLBLa9UOpLd5%2BfqWr3cvGUtx0Xh9QUauOH3%2F3%2FeoIg7iCySdIh%2BfdiTRyWG1aGlIETkV1IMD02j1C6jQHXKh5%2FiGmT0UXMeyqhedB7C8J3rUutEjXiROKPT3vdI5M6nMNys3MoGOqUB6XTcchL6dbywg%2F0t6s%2FK1KNpOMfIVh4bozPxD%2Fcz%2BXA92stGh6t2Btqg3wsa%2B9W1LjgSh3aR2OtqZ5HBlHpwvflAgtx9n%2FvUG%2FidetEchPetcBHL%2B20Ul73VOOq3X4QcCSKCSn7RTVbJwIz3ZS71JRFF6YWvA9lg6bf0mA5ebZMORe%2BkNrJKkWrV5dfu7kgTiGAwejmZrjzpJQ8Pi5D6NehQSCe%2F&X-Amz-Signature=954cd2cdbf4dd7420f3ba06bd08cee6602b58c392a434a782a6927469b05a376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY74LJM6%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDVSx0c7RSh%2BVAMJLdtFM%2FY6EQQcGMJgHRMdYCRrQFFrAIhAO9jHUn7RVszmKMO4Y9ZSJHSJsV%2F%2F1Y%2BZQvr%2FdeXupLAKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY3%2F59gpmlzfdz5Kcq3AM%2FggOkMAGTP%2FRlwX3xVR4hkA7kDTHA%2B%2B%2Bj2mtgZDka9EYKz3aR0JUvUSuDc0SSgfmfRQTYUS4iyQHWxlgi3DHxa9NA676AW%2FYfkVBJvIzqMNrZ%2BV1aQcYYEdTdrKDISSXDuAJ7bbY8AdVb6y1mh3Z8zX%2FH8547UjCOMHpHl3ckqzdOk8U5ba4kkJpfYBvc%2FQgzBQZjR7sgWXyYCcSGpRjdk%2BNHxNEi%2B3xIK9%2BVaKrOXNc%2FX2rgbqWnmo07yJAXglEFTTyzM%2BgJpRO%2B5DcSZn2LVUmG6x4ZA6Sqt7iInJWiC7HKyOy8C%2B7aXyD9aJNaCLNej%2B04EYzLgS62bR7a44UOy3vaxoVkJjndTR27fk7yP6xG2i1N2NFr9HvT9bV78DolBzsjPxdWFT3S5a7Qs1mrnKACiXFzX%2FreKPkW3g6Dd8zOJKHtBt4D5ywMLEQEXKTjYEt9lcKPR6iKSqtpOUMhAVavGXmRaEDD4yaQGnZtnsBC7pWcvKuDa%2BcZ2f9M6A%2F3TVGSnSJYJWZmypUl1YunBzAVqQAEINSmTiKo9uR2OXaMnq2sVvekS%2Fc5cXOwQRQkjRRKy5hMoqOPRNOs6eCBK9InextQ%2BErkNNX%2BVJcd4hloZCATW9nCqgjjqTDBn9zKBjqkAZEP2fS%2BovZLuxuLnHSpo%2F4uelCWjRIqmieRKIckoBCsNuf3TzV1qkqOTYRvj37B4qxtZ6UrTDioF2EXlF0zlUTaKxK7ZZhgU6g4q9mpbkIBPmwki0ySrEwmN3KMUkwsOkd4Fs5O0AX6cC%2B%2B5hUv2Wl46EupeoXZ0kIY3rwiclg9pCVfvteQaDlmMQjBlVLX5pE4GcbCM9uv4kPUTyIULzIbqjkL&X-Amz-Signature=d51089a6a3fc374994684d707ecf3db54e01767cae29d786b55f768f5a4c0ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY74LJM6%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDVSx0c7RSh%2BVAMJLdtFM%2FY6EQQcGMJgHRMdYCRrQFFrAIhAO9jHUn7RVszmKMO4Y9ZSJHSJsV%2F%2F1Y%2BZQvr%2FdeXupLAKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY3%2F59gpmlzfdz5Kcq3AM%2FggOkMAGTP%2FRlwX3xVR4hkA7kDTHA%2B%2B%2Bj2mtgZDka9EYKz3aR0JUvUSuDc0SSgfmfRQTYUS4iyQHWxlgi3DHxa9NA676AW%2FYfkVBJvIzqMNrZ%2BV1aQcYYEdTdrKDISSXDuAJ7bbY8AdVb6y1mh3Z8zX%2FH8547UjCOMHpHl3ckqzdOk8U5ba4kkJpfYBvc%2FQgzBQZjR7sgWXyYCcSGpRjdk%2BNHxNEi%2B3xIK9%2BVaKrOXNc%2FX2rgbqWnmo07yJAXglEFTTyzM%2BgJpRO%2B5DcSZn2LVUmG6x4ZA6Sqt7iInJWiC7HKyOy8C%2B7aXyD9aJNaCLNej%2B04EYzLgS62bR7a44UOy3vaxoVkJjndTR27fk7yP6xG2i1N2NFr9HvT9bV78DolBzsjPxdWFT3S5a7Qs1mrnKACiXFzX%2FreKPkW3g6Dd8zOJKHtBt4D5ywMLEQEXKTjYEt9lcKPR6iKSqtpOUMhAVavGXmRaEDD4yaQGnZtnsBC7pWcvKuDa%2BcZ2f9M6A%2F3TVGSnSJYJWZmypUl1YunBzAVqQAEINSmTiKo9uR2OXaMnq2sVvekS%2Fc5cXOwQRQkjRRKy5hMoqOPRNOs6eCBK9InextQ%2BErkNNX%2BVJcd4hloZCATW9nCqgjjqTDBn9zKBjqkAZEP2fS%2BovZLuxuLnHSpo%2F4uelCWjRIqmieRKIckoBCsNuf3TzV1qkqOTYRvj37B4qxtZ6UrTDioF2EXlF0zlUTaKxK7ZZhgU6g4q9mpbkIBPmwki0ySrEwmN3KMUkwsOkd4Fs5O0AX6cC%2B%2B5hUv2Wl46EupeoXZ0kIY3rwiclg9pCVfvteQaDlmMQjBlVLX5pE4GcbCM9uv4kPUTyIULzIbqjkL&X-Amz-Signature=d76237d3ff06ce7b872f00ea1e3ffe3fe00710dc3cafc1d31b2d7ceb848e012e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663REZN3I%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD%2Bz1ZvWq8pROhDG3rAJVZ6EYkk1cT1B9bDUdKm8fJOKwIgUasIrPjd7dZ2GEdbtHqIPOX2hSWsAeZsx%2BE6IXSWb1AqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn%2BHkaxAxtKHUSKDCrcA4Y3V8Fjj5NDcFuWtMj2HB9pvFEIpPzHFGikoPkp2hkuq%2FEkMD0GlG0SFQeUl%2BbJc7eTAiiMGikDyboBqMpi0F4KC7BtGSRmj7qHaMEbErJP5%2FOSTSdYydGTqkWqyBcxhd11KYf6JRbDKaGV3FlBel78uUs5NDCc%2B%2B7ZMAQDcBmScC5DOPEAndRVMke1u8FUMV0pXm%2B6l9CpZMeZPCAvVD3vHspZTq8LNKidtrMwIiPuxyXYvTez1pV7IAVqOZLPLhhzL9UIv6VPV3H1bKULxCKFR8gXtr2ujIWFukN0CR7ELsodu3xKaqaodooJR79eOGm7H%2BG71szTrgj%2FvcEKL3GzXkv3O8w2bSqFrGPJqa6srIqUSzjzUPs9VVdgG9NnXJtkmeuctksvKH%2BIh1Es98GPM09GwGwWBkzDL9FmvSNDPqWDxBxPEDd74w7dcfEeFu8DqnoG6UFt%2Fp6WgQIvm7Il%2FVxRkw%2Bs35Ocie9XD0fSczvZUASZLl%2FAGmOSKWvxBqG5W1s8SXrXOaUJgpZuwHdYexd6r15K4HxyJTp3p2pBR4PRkAFPvUQxN08GKkvnt0jiMjkqczXJRNQbDxaNe2Fc6GP18Yrp7opSZj0DkTwKEri%2F0PAuI4E2Onj9MLSi3MoGOqUB7QJqhKUmPB3pAvAo2A%2BG0QieaNrqJmLcE4bnzaVOkJlGBACVrXTpXGBFK1hPI95Yd6pO8FeRTV%2BZXhjLSlFzI0iDFyzBttjBY4wEJVY9Ap%2B8Qrop8zCbYLNbCKZRiQIdny5cvn78jHMCW1SpT4dzwHuPVg7BgTWRFNhWHPgolm0XhUdRSd7ojVDOMT%2BHgF1WwS2%2BBW%2FWHW5uJAU7EfeMtCNyfImz&X-Amz-Signature=5fdd42a19ac7fd950bdbe52c0c86527355379ec022e7793d55e41e6b9539e3d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663REZN3I%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD%2Bz1ZvWq8pROhDG3rAJVZ6EYkk1cT1B9bDUdKm8fJOKwIgUasIrPjd7dZ2GEdbtHqIPOX2hSWsAeZsx%2BE6IXSWb1AqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn%2BHkaxAxtKHUSKDCrcA4Y3V8Fjj5NDcFuWtMj2HB9pvFEIpPzHFGikoPkp2hkuq%2FEkMD0GlG0SFQeUl%2BbJc7eTAiiMGikDyboBqMpi0F4KC7BtGSRmj7qHaMEbErJP5%2FOSTSdYydGTqkWqyBcxhd11KYf6JRbDKaGV3FlBel78uUs5NDCc%2B%2B7ZMAQDcBmScC5DOPEAndRVMke1u8FUMV0pXm%2B6l9CpZMeZPCAvVD3vHspZTq8LNKidtrMwIiPuxyXYvTez1pV7IAVqOZLPLhhzL9UIv6VPV3H1bKULxCKFR8gXtr2ujIWFukN0CR7ELsodu3xKaqaodooJR79eOGm7H%2BG71szTrgj%2FvcEKL3GzXkv3O8w2bSqFrGPJqa6srIqUSzjzUPs9VVdgG9NnXJtkmeuctksvKH%2BIh1Es98GPM09GwGwWBkzDL9FmvSNDPqWDxBxPEDd74w7dcfEeFu8DqnoG6UFt%2Fp6WgQIvm7Il%2FVxRkw%2Bs35Ocie9XD0fSczvZUASZLl%2FAGmOSKWvxBqG5W1s8SXrXOaUJgpZuwHdYexd6r15K4HxyJTp3p2pBR4PRkAFPvUQxN08GKkvnt0jiMjkqczXJRNQbDxaNe2Fc6GP18Yrp7opSZj0DkTwKEri%2F0PAuI4E2Onj9MLSi3MoGOqUB7QJqhKUmPB3pAvAo2A%2BG0QieaNrqJmLcE4bnzaVOkJlGBACVrXTpXGBFK1hPI95Yd6pO8FeRTV%2BZXhjLSlFzI0iDFyzBttjBY4wEJVY9Ap%2B8Qrop8zCbYLNbCKZRiQIdny5cvn78jHMCW1SpT4dzwHuPVg7BgTWRFNhWHPgolm0XhUdRSd7ojVDOMT%2BHgF1WwS2%2BBW%2FWHW5uJAU7EfeMtCNyfImz&X-Amz-Signature=9ec99541af64f9632f59a1eb6ded6693338343b4a4358bbcb83b2d9c70472406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663REZN3I%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD%2Bz1ZvWq8pROhDG3rAJVZ6EYkk1cT1B9bDUdKm8fJOKwIgUasIrPjd7dZ2GEdbtHqIPOX2hSWsAeZsx%2BE6IXSWb1AqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn%2BHkaxAxtKHUSKDCrcA4Y3V8Fjj5NDcFuWtMj2HB9pvFEIpPzHFGikoPkp2hkuq%2FEkMD0GlG0SFQeUl%2BbJc7eTAiiMGikDyboBqMpi0F4KC7BtGSRmj7qHaMEbErJP5%2FOSTSdYydGTqkWqyBcxhd11KYf6JRbDKaGV3FlBel78uUs5NDCc%2B%2B7ZMAQDcBmScC5DOPEAndRVMke1u8FUMV0pXm%2B6l9CpZMeZPCAvVD3vHspZTq8LNKidtrMwIiPuxyXYvTez1pV7IAVqOZLPLhhzL9UIv6VPV3H1bKULxCKFR8gXtr2ujIWFukN0CR7ELsodu3xKaqaodooJR79eOGm7H%2BG71szTrgj%2FvcEKL3GzXkv3O8w2bSqFrGPJqa6srIqUSzjzUPs9VVdgG9NnXJtkmeuctksvKH%2BIh1Es98GPM09GwGwWBkzDL9FmvSNDPqWDxBxPEDd74w7dcfEeFu8DqnoG6UFt%2Fp6WgQIvm7Il%2FVxRkw%2Bs35Ocie9XD0fSczvZUASZLl%2FAGmOSKWvxBqG5W1s8SXrXOaUJgpZuwHdYexd6r15K4HxyJTp3p2pBR4PRkAFPvUQxN08GKkvnt0jiMjkqczXJRNQbDxaNe2Fc6GP18Yrp7opSZj0DkTwKEri%2F0PAuI4E2Onj9MLSi3MoGOqUB7QJqhKUmPB3pAvAo2A%2BG0QieaNrqJmLcE4bnzaVOkJlGBACVrXTpXGBFK1hPI95Yd6pO8FeRTV%2BZXhjLSlFzI0iDFyzBttjBY4wEJVY9Ap%2B8Qrop8zCbYLNbCKZRiQIdny5cvn78jHMCW1SpT4dzwHuPVg7BgTWRFNhWHPgolm0XhUdRSd7ojVDOMT%2BHgF1WwS2%2BBW%2FWHW5uJAU7EfeMtCNyfImz&X-Amz-Signature=ecbe5d9d927732c5a2c3eddb00684f4311e5301373239483ab8b6572ed2897f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663REZN3I%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD%2Bz1ZvWq8pROhDG3rAJVZ6EYkk1cT1B9bDUdKm8fJOKwIgUasIrPjd7dZ2GEdbtHqIPOX2hSWsAeZsx%2BE6IXSWb1AqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn%2BHkaxAxtKHUSKDCrcA4Y3V8Fjj5NDcFuWtMj2HB9pvFEIpPzHFGikoPkp2hkuq%2FEkMD0GlG0SFQeUl%2BbJc7eTAiiMGikDyboBqMpi0F4KC7BtGSRmj7qHaMEbErJP5%2FOSTSdYydGTqkWqyBcxhd11KYf6JRbDKaGV3FlBel78uUs5NDCc%2B%2B7ZMAQDcBmScC5DOPEAndRVMke1u8FUMV0pXm%2B6l9CpZMeZPCAvVD3vHspZTq8LNKidtrMwIiPuxyXYvTez1pV7IAVqOZLPLhhzL9UIv6VPV3H1bKULxCKFR8gXtr2ujIWFukN0CR7ELsodu3xKaqaodooJR79eOGm7H%2BG71szTrgj%2FvcEKL3GzXkv3O8w2bSqFrGPJqa6srIqUSzjzUPs9VVdgG9NnXJtkmeuctksvKH%2BIh1Es98GPM09GwGwWBkzDL9FmvSNDPqWDxBxPEDd74w7dcfEeFu8DqnoG6UFt%2Fp6WgQIvm7Il%2FVxRkw%2Bs35Ocie9XD0fSczvZUASZLl%2FAGmOSKWvxBqG5W1s8SXrXOaUJgpZuwHdYexd6r15K4HxyJTp3p2pBR4PRkAFPvUQxN08GKkvnt0jiMjkqczXJRNQbDxaNe2Fc6GP18Yrp7opSZj0DkTwKEri%2F0PAuI4E2Onj9MLSi3MoGOqUB7QJqhKUmPB3pAvAo2A%2BG0QieaNrqJmLcE4bnzaVOkJlGBACVrXTpXGBFK1hPI95Yd6pO8FeRTV%2BZXhjLSlFzI0iDFyzBttjBY4wEJVY9Ap%2B8Qrop8zCbYLNbCKZRiQIdny5cvn78jHMCW1SpT4dzwHuPVg7BgTWRFNhWHPgolm0XhUdRSd7ojVDOMT%2BHgF1WwS2%2BBW%2FWHW5uJAU7EfeMtCNyfImz&X-Amz-Signature=b5ba785488cdd65ba18f348b162b54284decc3b03cfd789f5f3abcf3b0b1f1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663REZN3I%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD%2Bz1ZvWq8pROhDG3rAJVZ6EYkk1cT1B9bDUdKm8fJOKwIgUasIrPjd7dZ2GEdbtHqIPOX2hSWsAeZsx%2BE6IXSWb1AqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn%2BHkaxAxtKHUSKDCrcA4Y3V8Fjj5NDcFuWtMj2HB9pvFEIpPzHFGikoPkp2hkuq%2FEkMD0GlG0SFQeUl%2BbJc7eTAiiMGikDyboBqMpi0F4KC7BtGSRmj7qHaMEbErJP5%2FOSTSdYydGTqkWqyBcxhd11KYf6JRbDKaGV3FlBel78uUs5NDCc%2B%2B7ZMAQDcBmScC5DOPEAndRVMke1u8FUMV0pXm%2B6l9CpZMeZPCAvVD3vHspZTq8LNKidtrMwIiPuxyXYvTez1pV7IAVqOZLPLhhzL9UIv6VPV3H1bKULxCKFR8gXtr2ujIWFukN0CR7ELsodu3xKaqaodooJR79eOGm7H%2BG71szTrgj%2FvcEKL3GzXkv3O8w2bSqFrGPJqa6srIqUSzjzUPs9VVdgG9NnXJtkmeuctksvKH%2BIh1Es98GPM09GwGwWBkzDL9FmvSNDPqWDxBxPEDd74w7dcfEeFu8DqnoG6UFt%2Fp6WgQIvm7Il%2FVxRkw%2Bs35Ocie9XD0fSczvZUASZLl%2FAGmOSKWvxBqG5W1s8SXrXOaUJgpZuwHdYexd6r15K4HxyJTp3p2pBR4PRkAFPvUQxN08GKkvnt0jiMjkqczXJRNQbDxaNe2Fc6GP18Yrp7opSZj0DkTwKEri%2F0PAuI4E2Onj9MLSi3MoGOqUB7QJqhKUmPB3pAvAo2A%2BG0QieaNrqJmLcE4bnzaVOkJlGBACVrXTpXGBFK1hPI95Yd6pO8FeRTV%2BZXhjLSlFzI0iDFyzBttjBY4wEJVY9Ap%2B8Qrop8zCbYLNbCKZRiQIdny5cvn78jHMCW1SpT4dzwHuPVg7BgTWRFNhWHPgolm0XhUdRSd7ojVDOMT%2BHgF1WwS2%2BBW%2FWHW5uJAU7EfeMtCNyfImz&X-Amz-Signature=19ee349325d9acba5aac479123104b87880b8a9dbc46d020483ebcac3c34f739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663REZN3I%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD%2Bz1ZvWq8pROhDG3rAJVZ6EYkk1cT1B9bDUdKm8fJOKwIgUasIrPjd7dZ2GEdbtHqIPOX2hSWsAeZsx%2BE6IXSWb1AqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn%2BHkaxAxtKHUSKDCrcA4Y3V8Fjj5NDcFuWtMj2HB9pvFEIpPzHFGikoPkp2hkuq%2FEkMD0GlG0SFQeUl%2BbJc7eTAiiMGikDyboBqMpi0F4KC7BtGSRmj7qHaMEbErJP5%2FOSTSdYydGTqkWqyBcxhd11KYf6JRbDKaGV3FlBel78uUs5NDCc%2B%2B7ZMAQDcBmScC5DOPEAndRVMke1u8FUMV0pXm%2B6l9CpZMeZPCAvVD3vHspZTq8LNKidtrMwIiPuxyXYvTez1pV7IAVqOZLPLhhzL9UIv6VPV3H1bKULxCKFR8gXtr2ujIWFukN0CR7ELsodu3xKaqaodooJR79eOGm7H%2BG71szTrgj%2FvcEKL3GzXkv3O8w2bSqFrGPJqa6srIqUSzjzUPs9VVdgG9NnXJtkmeuctksvKH%2BIh1Es98GPM09GwGwWBkzDL9FmvSNDPqWDxBxPEDd74w7dcfEeFu8DqnoG6UFt%2Fp6WgQIvm7Il%2FVxRkw%2Bs35Ocie9XD0fSczvZUASZLl%2FAGmOSKWvxBqG5W1s8SXrXOaUJgpZuwHdYexd6r15K4HxyJTp3p2pBR4PRkAFPvUQxN08GKkvnt0jiMjkqczXJRNQbDxaNe2Fc6GP18Yrp7opSZj0DkTwKEri%2F0PAuI4E2Onj9MLSi3MoGOqUB7QJqhKUmPB3pAvAo2A%2BG0QieaNrqJmLcE4bnzaVOkJlGBACVrXTpXGBFK1hPI95Yd6pO8FeRTV%2BZXhjLSlFzI0iDFyzBttjBY4wEJVY9Ap%2B8Qrop8zCbYLNbCKZRiQIdny5cvn78jHMCW1SpT4dzwHuPVg7BgTWRFNhWHPgolm0XhUdRSd7ojVDOMT%2BHgF1WwS2%2BBW%2FWHW5uJAU7EfeMtCNyfImz&X-Amz-Signature=25c001b503393908787449ff032a35d9ddde4b6e5ebf01aa5b94d6db2d7ccd8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663REZN3I%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQD%2Bz1ZvWq8pROhDG3rAJVZ6EYkk1cT1B9bDUdKm8fJOKwIgUasIrPjd7dZ2GEdbtHqIPOX2hSWsAeZsx%2BE6IXSWb1AqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn%2BHkaxAxtKHUSKDCrcA4Y3V8Fjj5NDcFuWtMj2HB9pvFEIpPzHFGikoPkp2hkuq%2FEkMD0GlG0SFQeUl%2BbJc7eTAiiMGikDyboBqMpi0F4KC7BtGSRmj7qHaMEbErJP5%2FOSTSdYydGTqkWqyBcxhd11KYf6JRbDKaGV3FlBel78uUs5NDCc%2B%2B7ZMAQDcBmScC5DOPEAndRVMke1u8FUMV0pXm%2B6l9CpZMeZPCAvVD3vHspZTq8LNKidtrMwIiPuxyXYvTez1pV7IAVqOZLPLhhzL9UIv6VPV3H1bKULxCKFR8gXtr2ujIWFukN0CR7ELsodu3xKaqaodooJR79eOGm7H%2BG71szTrgj%2FvcEKL3GzXkv3O8w2bSqFrGPJqa6srIqUSzjzUPs9VVdgG9NnXJtkmeuctksvKH%2BIh1Es98GPM09GwGwWBkzDL9FmvSNDPqWDxBxPEDd74w7dcfEeFu8DqnoG6UFt%2Fp6WgQIvm7Il%2FVxRkw%2Bs35Ocie9XD0fSczvZUASZLl%2FAGmOSKWvxBqG5W1s8SXrXOaUJgpZuwHdYexd6r15K4HxyJTp3p2pBR4PRkAFPvUQxN08GKkvnt0jiMjkqczXJRNQbDxaNe2Fc6GP18Yrp7opSZj0DkTwKEri%2F0PAuI4E2Onj9MLSi3MoGOqUB7QJqhKUmPB3pAvAo2A%2BG0QieaNrqJmLcE4bnzaVOkJlGBACVrXTpXGBFK1hPI95Yd6pO8FeRTV%2BZXhjLSlFzI0iDFyzBttjBY4wEJVY9Ap%2B8Qrop8zCbYLNbCKZRiQIdny5cvn78jHMCW1SpT4dzwHuPVg7BgTWRFNhWHPgolm0XhUdRSd7ojVDOMT%2BHgF1WwS2%2BBW%2FWHW5uJAU7EfeMtCNyfImz&X-Amz-Signature=eaab86fb595c7acb9f93967fea4e3e65b6d8f4b909131b3a2ac3bae186e34996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXA43PW%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAuboXnCEQ0%2BmAofNQdzv9DHc4LjlLUB%2FQXYE%2BpF80CGAiEAlmD7mvKlTxc9nbF5b6DdlcJcA0xQlggBQzZMfVpjYaQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIunh1BHx7plpAFWRyrcA%2FKaGPFD%2BmHwNxAJ6nE5OQtKC5VvLCZkmiV%2FSF4LiAQRPvXcaziPa%2B9tW9xiFqF9j%2BkQxaUJh3VkuQNhdPTGEqMM6qClvgA1NMp5jC2JRkRSBjSMpJ4gk7N7mSZnz8Dv6D2DU9K8S4dcypaKckc64bht1kIbuphbulJdrIInDJKXgGEmzi2AeeiflR5NrrR64gq4XZHPjyLJxkM6%2BwdjKSIuXGgrycgPoMlR%2Fh7JBAjSveN69Yfd2JrPS9yZDUXnl3GhG6PycsoZDUQ74RnZBqYDkS%2BAQpERQAC6WCZAsqN6ypoNhU%2FvOIJZKsS7vURIs4o1fOD13HeKLD57ZYSDgN%2Bb5E1yAIoVKrj1Sxe5sSCz62hnN6S0Z72cC4KlcEdDxeYs8clR14Wz5SDHQrf%2FPwFpg967XLcGvSTLknyhxnZ6M0YtYFoYIFu5pIY1MP2v6D5hDeeWJIhwkHkCuyij5WFVxWWPmZqvZcZWajtl5KsYAtCg2DNNicnZ%2FPyFp9JjGVXX3g3Wgt3EGQ%2FT7wYSfSjawJ4f9EXasVLa3980yitZS%2B%2B3smTPqrnbj5Rp06toPwx%2BIwGgbq6T1zho7oZgjTjYGAw%2FJcCe%2Fj4UznF0%2BDBHIB2ujjLT%2BKsB4tQHMJik3MoGOqUB%2FAK3tIUmDzRPKmA2dP0dBxktSn%2FLJcyVymGSjhuPrJPecRAMNRPLA5rI%2Fifv9K%2BpnoHUE1TkOeiulkRp3SEkcJCFv0A49JEUhL4M%2BizGs6dREN9E1Mh3NeO7zVT0KVfLZKS9SlhQpqxxDf8nEUFVaC7fE6DG5QR5bZv%2FMxsqxUiKHDvwqpATay0q8Y%2BUJO3Dvx6BReXmT0PTsiXklOjjO3%2Fr3J%2BS&X-Amz-Signature=b2ce7b101c13211d3eb0eb9ad9eae7899c6d487319ca11d352951818e64dc995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXA43PW%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAuboXnCEQ0%2BmAofNQdzv9DHc4LjlLUB%2FQXYE%2BpF80CGAiEAlmD7mvKlTxc9nbF5b6DdlcJcA0xQlggBQzZMfVpjYaQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIunh1BHx7plpAFWRyrcA%2FKaGPFD%2BmHwNxAJ6nE5OQtKC5VvLCZkmiV%2FSF4LiAQRPvXcaziPa%2B9tW9xiFqF9j%2BkQxaUJh3VkuQNhdPTGEqMM6qClvgA1NMp5jC2JRkRSBjSMpJ4gk7N7mSZnz8Dv6D2DU9K8S4dcypaKckc64bht1kIbuphbulJdrIInDJKXgGEmzi2AeeiflR5NrrR64gq4XZHPjyLJxkM6%2BwdjKSIuXGgrycgPoMlR%2Fh7JBAjSveN69Yfd2JrPS9yZDUXnl3GhG6PycsoZDUQ74RnZBqYDkS%2BAQpERQAC6WCZAsqN6ypoNhU%2FvOIJZKsS7vURIs4o1fOD13HeKLD57ZYSDgN%2Bb5E1yAIoVKrj1Sxe5sSCz62hnN6S0Z72cC4KlcEdDxeYs8clR14Wz5SDHQrf%2FPwFpg967XLcGvSTLknyhxnZ6M0YtYFoYIFu5pIY1MP2v6D5hDeeWJIhwkHkCuyij5WFVxWWPmZqvZcZWajtl5KsYAtCg2DNNicnZ%2FPyFp9JjGVXX3g3Wgt3EGQ%2FT7wYSfSjawJ4f9EXasVLa3980yitZS%2B%2B3smTPqrnbj5Rp06toPwx%2BIwGgbq6T1zho7oZgjTjYGAw%2FJcCe%2Fj4UznF0%2BDBHIB2ujjLT%2BKsB4tQHMJik3MoGOqUB%2FAK3tIUmDzRPKmA2dP0dBxktSn%2FLJcyVymGSjhuPrJPecRAMNRPLA5rI%2Fifv9K%2BpnoHUE1TkOeiulkRp3SEkcJCFv0A49JEUhL4M%2BizGs6dREN9E1Mh3NeO7zVT0KVfLZKS9SlhQpqxxDf8nEUFVaC7fE6DG5QR5bZv%2FMxsqxUiKHDvwqpATay0q8Y%2BUJO3Dvx6BReXmT0PTsiXklOjjO3%2Fr3J%2BS&X-Amz-Signature=714aaa874ad802c75d89cbccc25511fe745121a549f4f6b5d1ad4a99e214c9e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXA43PW%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAuboXnCEQ0%2BmAofNQdzv9DHc4LjlLUB%2FQXYE%2BpF80CGAiEAlmD7mvKlTxc9nbF5b6DdlcJcA0xQlggBQzZMfVpjYaQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIunh1BHx7plpAFWRyrcA%2FKaGPFD%2BmHwNxAJ6nE5OQtKC5VvLCZkmiV%2FSF4LiAQRPvXcaziPa%2B9tW9xiFqF9j%2BkQxaUJh3VkuQNhdPTGEqMM6qClvgA1NMp5jC2JRkRSBjSMpJ4gk7N7mSZnz8Dv6D2DU9K8S4dcypaKckc64bht1kIbuphbulJdrIInDJKXgGEmzi2AeeiflR5NrrR64gq4XZHPjyLJxkM6%2BwdjKSIuXGgrycgPoMlR%2Fh7JBAjSveN69Yfd2JrPS9yZDUXnl3GhG6PycsoZDUQ74RnZBqYDkS%2BAQpERQAC6WCZAsqN6ypoNhU%2FvOIJZKsS7vURIs4o1fOD13HeKLD57ZYSDgN%2Bb5E1yAIoVKrj1Sxe5sSCz62hnN6S0Z72cC4KlcEdDxeYs8clR14Wz5SDHQrf%2FPwFpg967XLcGvSTLknyhxnZ6M0YtYFoYIFu5pIY1MP2v6D5hDeeWJIhwkHkCuyij5WFVxWWPmZqvZcZWajtl5KsYAtCg2DNNicnZ%2FPyFp9JjGVXX3g3Wgt3EGQ%2FT7wYSfSjawJ4f9EXasVLa3980yitZS%2B%2B3smTPqrnbj5Rp06toPwx%2BIwGgbq6T1zho7oZgjTjYGAw%2FJcCe%2Fj4UznF0%2BDBHIB2ujjLT%2BKsB4tQHMJik3MoGOqUB%2FAK3tIUmDzRPKmA2dP0dBxktSn%2FLJcyVymGSjhuPrJPecRAMNRPLA5rI%2Fifv9K%2BpnoHUE1TkOeiulkRp3SEkcJCFv0A49JEUhL4M%2BizGs6dREN9E1Mh3NeO7zVT0KVfLZKS9SlhQpqxxDf8nEUFVaC7fE6DG5QR5bZv%2FMxsqxUiKHDvwqpATay0q8Y%2BUJO3Dvx6BReXmT0PTsiXklOjjO3%2Fr3J%2BS&X-Amz-Signature=f69484b4c5d065cd3ca12629806fa5981fcd86cc13891476c6f9d7319db2e651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXA43PW%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAuboXnCEQ0%2BmAofNQdzv9DHc4LjlLUB%2FQXYE%2BpF80CGAiEAlmD7mvKlTxc9nbF5b6DdlcJcA0xQlggBQzZMfVpjYaQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIunh1BHx7plpAFWRyrcA%2FKaGPFD%2BmHwNxAJ6nE5OQtKC5VvLCZkmiV%2FSF4LiAQRPvXcaziPa%2B9tW9xiFqF9j%2BkQxaUJh3VkuQNhdPTGEqMM6qClvgA1NMp5jC2JRkRSBjSMpJ4gk7N7mSZnz8Dv6D2DU9K8S4dcypaKckc64bht1kIbuphbulJdrIInDJKXgGEmzi2AeeiflR5NrrR64gq4XZHPjyLJxkM6%2BwdjKSIuXGgrycgPoMlR%2Fh7JBAjSveN69Yfd2JrPS9yZDUXnl3GhG6PycsoZDUQ74RnZBqYDkS%2BAQpERQAC6WCZAsqN6ypoNhU%2FvOIJZKsS7vURIs4o1fOD13HeKLD57ZYSDgN%2Bb5E1yAIoVKrj1Sxe5sSCz62hnN6S0Z72cC4KlcEdDxeYs8clR14Wz5SDHQrf%2FPwFpg967XLcGvSTLknyhxnZ6M0YtYFoYIFu5pIY1MP2v6D5hDeeWJIhwkHkCuyij5WFVxWWPmZqvZcZWajtl5KsYAtCg2DNNicnZ%2FPyFp9JjGVXX3g3Wgt3EGQ%2FT7wYSfSjawJ4f9EXasVLa3980yitZS%2B%2B3smTPqrnbj5Rp06toPwx%2BIwGgbq6T1zho7oZgjTjYGAw%2FJcCe%2Fj4UznF0%2BDBHIB2ujjLT%2BKsB4tQHMJik3MoGOqUB%2FAK3tIUmDzRPKmA2dP0dBxktSn%2FLJcyVymGSjhuPrJPecRAMNRPLA5rI%2Fifv9K%2BpnoHUE1TkOeiulkRp3SEkcJCFv0A49JEUhL4M%2BizGs6dREN9E1Mh3NeO7zVT0KVfLZKS9SlhQpqxxDf8nEUFVaC7fE6DG5QR5bZv%2FMxsqxUiKHDvwqpATay0q8Y%2BUJO3Dvx6BReXmT0PTsiXklOjjO3%2Fr3J%2BS&X-Amz-Signature=70b41fc0dc1c4a7c137a7d746887e84663cfaa6fa3dfbc9fc350daaa96e4b4fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXA43PW%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAuboXnCEQ0%2BmAofNQdzv9DHc4LjlLUB%2FQXYE%2BpF80CGAiEAlmD7mvKlTxc9nbF5b6DdlcJcA0xQlggBQzZMfVpjYaQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIunh1BHx7plpAFWRyrcA%2FKaGPFD%2BmHwNxAJ6nE5OQtKC5VvLCZkmiV%2FSF4LiAQRPvXcaziPa%2B9tW9xiFqF9j%2BkQxaUJh3VkuQNhdPTGEqMM6qClvgA1NMp5jC2JRkRSBjSMpJ4gk7N7mSZnz8Dv6D2DU9K8S4dcypaKckc64bht1kIbuphbulJdrIInDJKXgGEmzi2AeeiflR5NrrR64gq4XZHPjyLJxkM6%2BwdjKSIuXGgrycgPoMlR%2Fh7JBAjSveN69Yfd2JrPS9yZDUXnl3GhG6PycsoZDUQ74RnZBqYDkS%2BAQpERQAC6WCZAsqN6ypoNhU%2FvOIJZKsS7vURIs4o1fOD13HeKLD57ZYSDgN%2Bb5E1yAIoVKrj1Sxe5sSCz62hnN6S0Z72cC4KlcEdDxeYs8clR14Wz5SDHQrf%2FPwFpg967XLcGvSTLknyhxnZ6M0YtYFoYIFu5pIY1MP2v6D5hDeeWJIhwkHkCuyij5WFVxWWPmZqvZcZWajtl5KsYAtCg2DNNicnZ%2FPyFp9JjGVXX3g3Wgt3EGQ%2FT7wYSfSjawJ4f9EXasVLa3980yitZS%2B%2B3smTPqrnbj5Rp06toPwx%2BIwGgbq6T1zho7oZgjTjYGAw%2FJcCe%2Fj4UznF0%2BDBHIB2ujjLT%2BKsB4tQHMJik3MoGOqUB%2FAK3tIUmDzRPKmA2dP0dBxktSn%2FLJcyVymGSjhuPrJPecRAMNRPLA5rI%2Fifv9K%2BpnoHUE1TkOeiulkRp3SEkcJCFv0A49JEUhL4M%2BizGs6dREN9E1Mh3NeO7zVT0KVfLZKS9SlhQpqxxDf8nEUFVaC7fE6DG5QR5bZv%2FMxsqxUiKHDvwqpATay0q8Y%2BUJO3Dvx6BReXmT0PTsiXklOjjO3%2Fr3J%2BS&X-Amz-Signature=513afdc93a8be820a9e54c0457f6ab81760c17b7cc6c999011585d9c7360a7df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEWZ4XLM%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGsjKV1HG2AgOJ%2FE5Pr1sI7881Jocd5ltxwS%2Fu3TYTWZAiB8fBSi5JkjRPyNaHKjN9FTEdZxB%2BZZIh09UWc9JLABTCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpGZ58RtbRagaK%2FTAKtwDmPAM7lmuyXvvkNVhkzv9CGwVrX3OOGK7rPxKAKZ45WT279nyjMDuFuwpyUjXRgd9W7%2F3cJBH57mBnkANu311ec4o%2FgghF%2F0METxwTbvaBnQmhDJDiaFtG%2F61n6lneJMv%2Fk078QXOy%2FpCjTO6MYaLRDMNIHAxZqhLp2GOnt7N4pxCyek7SGZM6OXm7525IPXBKBr9xUZfH39vKxWIEi9qjlBW3k66qxzgKTomwmVREcXEDELaFqTFJqc6N%2BmSjCOWFD%2F3RfxkB23WNfHacxS1vP1SF62dR2JWCXosDUcQtW%2BJ3AZNjP0kEOPlBK6ff2qw68yPOFPzbaCEaxTcLFw8mjwW01bOf0axFSIdLl8z70MLjYvQqNstv1CX1lX2sbFS0zjBS9oSXsjmilZDzublsSYZca7jx%2FRHeef5M%2F1aw8UV382E%2BZbl3wcQc22Fg9b3LDH%2FOnGrzXDvI0LmX8rpaNUiEQcdcGW5mHROsxKkU%2BX8lMKPCHdfeFhJD2TsS1Ipykj9Yb4H8i857QTOzQ%2FRnmsfccBHrdVyZSObl94CjPNMuxmwvpPUPIzcwUj66pXi2SRqX8ediG81lQQndmwZu5FgPFsuAXV3639w%2Fwyp9qZic5tz94cLAocjlO0w0KvcygY6pgHYoRe5s09ioVamW6jznv1YrXwUbp7Y0cgEORL3DY0vmgcaBeG9AWbG7PHOzLzuJOkHUJ2umOa%2F5We1rcx4geAS5pgpFZiF1yyQ5jDp3gaHWFaCQRyMYYltA4HEtU%2FTUGu43WjFi4mm%2BHaa00Rb6F0SSHkJzNhlUQuhsIawEYCZXqKXhoArF94F2yoqVNxf6RvPGo2WyOd1s3jY3J8X5rjLCDQR1rOg&X-Amz-Signature=1f3cdb89b065a85eec10054223bc22e6bb330a2c0e2bb797b76b2f1b2dd5ea97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEWZ4XLM%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGsjKV1HG2AgOJ%2FE5Pr1sI7881Jocd5ltxwS%2Fu3TYTWZAiB8fBSi5JkjRPyNaHKjN9FTEdZxB%2BZZIh09UWc9JLABTCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpGZ58RtbRagaK%2FTAKtwDmPAM7lmuyXvvkNVhkzv9CGwVrX3OOGK7rPxKAKZ45WT279nyjMDuFuwpyUjXRgd9W7%2F3cJBH57mBnkANu311ec4o%2FgghF%2F0METxwTbvaBnQmhDJDiaFtG%2F61n6lneJMv%2Fk078QXOy%2FpCjTO6MYaLRDMNIHAxZqhLp2GOnt7N4pxCyek7SGZM6OXm7525IPXBKBr9xUZfH39vKxWIEi9qjlBW3k66qxzgKTomwmVREcXEDELaFqTFJqc6N%2BmSjCOWFD%2F3RfxkB23WNfHacxS1vP1SF62dR2JWCXosDUcQtW%2BJ3AZNjP0kEOPlBK6ff2qw68yPOFPzbaCEaxTcLFw8mjwW01bOf0axFSIdLl8z70MLjYvQqNstv1CX1lX2sbFS0zjBS9oSXsjmilZDzublsSYZca7jx%2FRHeef5M%2F1aw8UV382E%2BZbl3wcQc22Fg9b3LDH%2FOnGrzXDvI0LmX8rpaNUiEQcdcGW5mHROsxKkU%2BX8lMKPCHdfeFhJD2TsS1Ipykj9Yb4H8i857QTOzQ%2FRnmsfccBHrdVyZSObl94CjPNMuxmwvpPUPIzcwUj66pXi2SRqX8ediG81lQQndmwZu5FgPFsuAXV3639w%2Fwyp9qZic5tz94cLAocjlO0w0KvcygY6pgHYoRe5s09ioVamW6jznv1YrXwUbp7Y0cgEORL3DY0vmgcaBeG9AWbG7PHOzLzuJOkHUJ2umOa%2F5We1rcx4geAS5pgpFZiF1yyQ5jDp3gaHWFaCQRyMYYltA4HEtU%2FTUGu43WjFi4mm%2BHaa00Rb6F0SSHkJzNhlUQuhsIawEYCZXqKXhoArF94F2yoqVNxf6RvPGo2WyOd1s3jY3J8X5rjLCDQR1rOg&X-Amz-Signature=73d1b860fa6b6d99b4b0af3155ffd79ea6bd778ac61e9deb84b1540d13ab68e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEWZ4XLM%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGsjKV1HG2AgOJ%2FE5Pr1sI7881Jocd5ltxwS%2Fu3TYTWZAiB8fBSi5JkjRPyNaHKjN9FTEdZxB%2BZZIh09UWc9JLABTCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpGZ58RtbRagaK%2FTAKtwDmPAM7lmuyXvvkNVhkzv9CGwVrX3OOGK7rPxKAKZ45WT279nyjMDuFuwpyUjXRgd9W7%2F3cJBH57mBnkANu311ec4o%2FgghF%2F0METxwTbvaBnQmhDJDiaFtG%2F61n6lneJMv%2Fk078QXOy%2FpCjTO6MYaLRDMNIHAxZqhLp2GOnt7N4pxCyek7SGZM6OXm7525IPXBKBr9xUZfH39vKxWIEi9qjlBW3k66qxzgKTomwmVREcXEDELaFqTFJqc6N%2BmSjCOWFD%2F3RfxkB23WNfHacxS1vP1SF62dR2JWCXosDUcQtW%2BJ3AZNjP0kEOPlBK6ff2qw68yPOFPzbaCEaxTcLFw8mjwW01bOf0axFSIdLl8z70MLjYvQqNstv1CX1lX2sbFS0zjBS9oSXsjmilZDzublsSYZca7jx%2FRHeef5M%2F1aw8UV382E%2BZbl3wcQc22Fg9b3LDH%2FOnGrzXDvI0LmX8rpaNUiEQcdcGW5mHROsxKkU%2BX8lMKPCHdfeFhJD2TsS1Ipykj9Yb4H8i857QTOzQ%2FRnmsfccBHrdVyZSObl94CjPNMuxmwvpPUPIzcwUj66pXi2SRqX8ediG81lQQndmwZu5FgPFsuAXV3639w%2Fwyp9qZic5tz94cLAocjlO0w0KvcygY6pgHYoRe5s09ioVamW6jznv1YrXwUbp7Y0cgEORL3DY0vmgcaBeG9AWbG7PHOzLzuJOkHUJ2umOa%2F5We1rcx4geAS5pgpFZiF1yyQ5jDp3gaHWFaCQRyMYYltA4HEtU%2FTUGu43WjFi4mm%2BHaa00Rb6F0SSHkJzNhlUQuhsIawEYCZXqKXhoArF94F2yoqVNxf6RvPGo2WyOd1s3jY3J8X5rjLCDQR1rOg&X-Amz-Signature=7cf9cb9c354ca68bab08360e92197f5e1335cdb38f531d1ef5ec78c9b0416869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTOEUQVA%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEMMuM95yGyzbVbSoI2hk0KsznmJD7mnaAHvAxPB2K8UAiEA%2BE2ZPl9y8W46jhHZvIoE7UHXwRCR73Z42MHWNhpd234qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDobdnnXTRVscQh46SrcAzZUf5sf9NoWcMU2nEWBF%2BV25Yvj4jM3ghaiWvMlA35FVyaF7Ku40VIzRzdjjnSrAta2cbDe6LsKst7xGBTpvOCFg%2Fhcv5ADq%2FeJjxzVXzqhS0l%2FPD1XLFY0YVyF12E8Pj3qA%2Blmw61FNkGJQzNsjJwEq4J9zDC%2B%2FF4MM5tUTRrkXwpdtNjl%2FYf6SLKtJlEQ2Ef53nmm69eJTm0O2r5WxzkAZ%2BVUPIVMdIEf%2F7I36joRR0UOmT7LuXMWvxZ0IA06JzA%2BB15i191rA8aLI2cKruiYRHIYzcbSeYKJzGJUmgYyTKPqwDvbOA1dH55pTdX%2BV%2BMTcrDf1hYd%2FjySllLKEcyuLkqQYB0jRUeOCjoySYUT6e8KvLoEL2cqoXFLjHJpIFdVNDFlPOKi3pak3Zn2l0iCKmsFAhCKjOevAE%2BQzVW55EcinisWFfBpiHonHDyFZyIe%2FEdoiecxLLqB5gcVnB7eMDZf5uxf0yNP2d37V9yruUJ013HTy39LltW6%2FC%2FYBW1nKMP3CT1%2F9gwFqPtYp9nMjrTFWB4c2skeUeM86%2BFFfWu5bOvm%2FxGtFNyJYhZkwojHw52qI3lJLgt%2FwcUvVmS%2FlMTTLCZZ2dFrcwrT5MQqT4mEVkAgsjcJpnoeMNqr3MoGOqUBB%2BdQvWnirltgPwgNxva%2BborxgqV1pWyNoIelyWZ4AAhXzAaubdLA2slitJ8n0SunoP9k5KSZ51waK%2Fc9BBANrjcUC1dDMg1P4u1%2F%2BG7u67LRz21BY%2BV6hHhjbxOgidp3TlEIitZmdHI9Ithj%2FL4bn61908VQ6pThPh4amYiBB9dy3YSrVDBHEm3bTyiSmQ5YgHdwMCqLBTOj4%2BveIDTeZq6TeeTt&X-Amz-Signature=6d931904e0e122eb99dfc3cb64e16b6757c4612a35c685bc9effbfb9d902bb41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTOEUQVA%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEMMuM95yGyzbVbSoI2hk0KsznmJD7mnaAHvAxPB2K8UAiEA%2BE2ZPl9y8W46jhHZvIoE7UHXwRCR73Z42MHWNhpd234qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDobdnnXTRVscQh46SrcAzZUf5sf9NoWcMU2nEWBF%2BV25Yvj4jM3ghaiWvMlA35FVyaF7Ku40VIzRzdjjnSrAta2cbDe6LsKst7xGBTpvOCFg%2Fhcv5ADq%2FeJjxzVXzqhS0l%2FPD1XLFY0YVyF12E8Pj3qA%2Blmw61FNkGJQzNsjJwEq4J9zDC%2B%2FF4MM5tUTRrkXwpdtNjl%2FYf6SLKtJlEQ2Ef53nmm69eJTm0O2r5WxzkAZ%2BVUPIVMdIEf%2F7I36joRR0UOmT7LuXMWvxZ0IA06JzA%2BB15i191rA8aLI2cKruiYRHIYzcbSeYKJzGJUmgYyTKPqwDvbOA1dH55pTdX%2BV%2BMTcrDf1hYd%2FjySllLKEcyuLkqQYB0jRUeOCjoySYUT6e8KvLoEL2cqoXFLjHJpIFdVNDFlPOKi3pak3Zn2l0iCKmsFAhCKjOevAE%2BQzVW55EcinisWFfBpiHonHDyFZyIe%2FEdoiecxLLqB5gcVnB7eMDZf5uxf0yNP2d37V9yruUJ013HTy39LltW6%2FC%2FYBW1nKMP3CT1%2F9gwFqPtYp9nMjrTFWB4c2skeUeM86%2BFFfWu5bOvm%2FxGtFNyJYhZkwojHw52qI3lJLgt%2FwcUvVmS%2FlMTTLCZZ2dFrcwrT5MQqT4mEVkAgsjcJpnoeMNqr3MoGOqUBB%2BdQvWnirltgPwgNxva%2BborxgqV1pWyNoIelyWZ4AAhXzAaubdLA2slitJ8n0SunoP9k5KSZ51waK%2Fc9BBANrjcUC1dDMg1P4u1%2F%2BG7u67LRz21BY%2BV6hHhjbxOgidp3TlEIitZmdHI9Ithj%2FL4bn61908VQ6pThPh4amYiBB9dy3YSrVDBHEm3bTyiSmQ5YgHdwMCqLBTOj4%2BveIDTeZq6TeeTt&X-Amz-Signature=2ddebeb6f9d8be3b6c821f81396da632b483f0b7c0b6fe4e3824849b575d90e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CMBAQIR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC9CABVl6mV7RG8XYayPsKx%2BGwVjV4PUW4c2KB0DS5sRwIhAIWeEtI7DyB4SKRvqMjR454bApEBrIG4IgF39WQ2SSNxKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCiJBq4yErQQ9whcoq3AMSqru0Oq6qe5d8NG%2BQJKH74IeszUuM3aLisDP8CSyjj5zC9BdN5t4xJcEHXgprqR%2FL9%2B0etS4iZbpxrCcEPGWbZOvE7WQVUbVUp5cZprH2f0VPOVfG06sDvXZ093PLRLgkepGMndBB9uNRBM1WD3is74ClJJ4T7MnQHya0bAhSBmy9c4hFu1aaymAUhYMmta0LV4wAIXRum3s6wxaVA4gtz5Ob1I0DrrMeVZUq2S7GBoGnzqL%2Bhphx6aIlJB2OykwoawBgWQPcDxZ7%2Bi8kLqNfjq5rB1LB%2BgcvYNCTJ2vr6Q3aSEqC%2FUTGpH%2Fz8qoFUVMqtqRoO27enn%2FQzTW7mbO9wb6lVWLznAfCpklK6fQZsVnn0dwOOyeOwcZE1Vfoku3KBBbprOQnVr7neJtrqOtNcPOfFWYOBleMldFg57YDoZjxVUq4xnLl80YPkyznvqtUh25KMEKFXbYkcjvfZhAaKtrFs6vySZvq6OiY623JTrTfj2%2B40kFNgN%2FaiPavECrZOJIICLWIGd%2BlYYLE5%2BozCBHHq7Q8xgnH36qYkGYpP73hwRnaePY0NSpCAQRK81%2FojtGyP9AcHcHO9iYNuiTHSlT3es39UVto8AlVsAm5OmfwDnSm5czGU2QTCTD%2BqtzKBjqkAUnS%2BRaJVytRKFqtyh0P3m4bviq9ExrktPmxOkgIN4uqz7h4yeARYRK3L1BrmSk3wcGpLtCrIRXEkQCq8kIAs0Z5Le6IKmEudKHrGeWXInEsty46Gj0jpcLDGZChDaoToSf5MUbdpLBCapokuZdCKa8amLGvW4b%2FZpeBM4ezrGSPETkt%2BaL%2BuhsgaiyAKgxM0%2Ft%2B16jB4NtBzHgmyKErEPT4l%2Bkq&X-Amz-Signature=9f7b88e03d3196f0c58f952c25038b0cfcd3680cda98e5e17abb4deefd51b22c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CMBAQIR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC9CABVl6mV7RG8XYayPsKx%2BGwVjV4PUW4c2KB0DS5sRwIhAIWeEtI7DyB4SKRvqMjR454bApEBrIG4IgF39WQ2SSNxKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCiJBq4yErQQ9whcoq3AMSqru0Oq6qe5d8NG%2BQJKH74IeszUuM3aLisDP8CSyjj5zC9BdN5t4xJcEHXgprqR%2FL9%2B0etS4iZbpxrCcEPGWbZOvE7WQVUbVUp5cZprH2f0VPOVfG06sDvXZ093PLRLgkepGMndBB9uNRBM1WD3is74ClJJ4T7MnQHya0bAhSBmy9c4hFu1aaymAUhYMmta0LV4wAIXRum3s6wxaVA4gtz5Ob1I0DrrMeVZUq2S7GBoGnzqL%2Bhphx6aIlJB2OykwoawBgWQPcDxZ7%2Bi8kLqNfjq5rB1LB%2BgcvYNCTJ2vr6Q3aSEqC%2FUTGpH%2Fz8qoFUVMqtqRoO27enn%2FQzTW7mbO9wb6lVWLznAfCpklK6fQZsVnn0dwOOyeOwcZE1Vfoku3KBBbprOQnVr7neJtrqOtNcPOfFWYOBleMldFg57YDoZjxVUq4xnLl80YPkyznvqtUh25KMEKFXbYkcjvfZhAaKtrFs6vySZvq6OiY623JTrTfj2%2B40kFNgN%2FaiPavECrZOJIICLWIGd%2BlYYLE5%2BozCBHHq7Q8xgnH36qYkGYpP73hwRnaePY0NSpCAQRK81%2FojtGyP9AcHcHO9iYNuiTHSlT3es39UVto8AlVsAm5OmfwDnSm5czGU2QTCTD%2BqtzKBjqkAUnS%2BRaJVytRKFqtyh0P3m4bviq9ExrktPmxOkgIN4uqz7h4yeARYRK3L1BrmSk3wcGpLtCrIRXEkQCq8kIAs0Z5Le6IKmEudKHrGeWXInEsty46Gj0jpcLDGZChDaoToSf5MUbdpLBCapokuZdCKa8amLGvW4b%2FZpeBM4ezrGSPETkt%2BaL%2BuhsgaiyAKgxM0%2Ft%2B16jB4NtBzHgmyKErEPT4l%2Bkq&X-Amz-Signature=297067734bcad82bc5b80d046826d218dd015aa502da2dba79d568d20bd7e330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CMBAQIR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC9CABVl6mV7RG8XYayPsKx%2BGwVjV4PUW4c2KB0DS5sRwIhAIWeEtI7DyB4SKRvqMjR454bApEBrIG4IgF39WQ2SSNxKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCiJBq4yErQQ9whcoq3AMSqru0Oq6qe5d8NG%2BQJKH74IeszUuM3aLisDP8CSyjj5zC9BdN5t4xJcEHXgprqR%2FL9%2B0etS4iZbpxrCcEPGWbZOvE7WQVUbVUp5cZprH2f0VPOVfG06sDvXZ093PLRLgkepGMndBB9uNRBM1WD3is74ClJJ4T7MnQHya0bAhSBmy9c4hFu1aaymAUhYMmta0LV4wAIXRum3s6wxaVA4gtz5Ob1I0DrrMeVZUq2S7GBoGnzqL%2Bhphx6aIlJB2OykwoawBgWQPcDxZ7%2Bi8kLqNfjq5rB1LB%2BgcvYNCTJ2vr6Q3aSEqC%2FUTGpH%2Fz8qoFUVMqtqRoO27enn%2FQzTW7mbO9wb6lVWLznAfCpklK6fQZsVnn0dwOOyeOwcZE1Vfoku3KBBbprOQnVr7neJtrqOtNcPOfFWYOBleMldFg57YDoZjxVUq4xnLl80YPkyznvqtUh25KMEKFXbYkcjvfZhAaKtrFs6vySZvq6OiY623JTrTfj2%2B40kFNgN%2FaiPavECrZOJIICLWIGd%2BlYYLE5%2BozCBHHq7Q8xgnH36qYkGYpP73hwRnaePY0NSpCAQRK81%2FojtGyP9AcHcHO9iYNuiTHSlT3es39UVto8AlVsAm5OmfwDnSm5czGU2QTCTD%2BqtzKBjqkAUnS%2BRaJVytRKFqtyh0P3m4bviq9ExrktPmxOkgIN4uqz7h4yeARYRK3L1BrmSk3wcGpLtCrIRXEkQCq8kIAs0Z5Le6IKmEudKHrGeWXInEsty46Gj0jpcLDGZChDaoToSf5MUbdpLBCapokuZdCKa8amLGvW4b%2FZpeBM4ezrGSPETkt%2BaL%2BuhsgaiyAKgxM0%2Ft%2B16jB4NtBzHgmyKErEPT4l%2Bkq&X-Amz-Signature=bac0044f4047a2855c045f7041697909c419d08425001c16ba32936ab82588f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CMBAQIR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC9CABVl6mV7RG8XYayPsKx%2BGwVjV4PUW4c2KB0DS5sRwIhAIWeEtI7DyB4SKRvqMjR454bApEBrIG4IgF39WQ2SSNxKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCiJBq4yErQQ9whcoq3AMSqru0Oq6qe5d8NG%2BQJKH74IeszUuM3aLisDP8CSyjj5zC9BdN5t4xJcEHXgprqR%2FL9%2B0etS4iZbpxrCcEPGWbZOvE7WQVUbVUp5cZprH2f0VPOVfG06sDvXZ093PLRLgkepGMndBB9uNRBM1WD3is74ClJJ4T7MnQHya0bAhSBmy9c4hFu1aaymAUhYMmta0LV4wAIXRum3s6wxaVA4gtz5Ob1I0DrrMeVZUq2S7GBoGnzqL%2Bhphx6aIlJB2OykwoawBgWQPcDxZ7%2Bi8kLqNfjq5rB1LB%2BgcvYNCTJ2vr6Q3aSEqC%2FUTGpH%2Fz8qoFUVMqtqRoO27enn%2FQzTW7mbO9wb6lVWLznAfCpklK6fQZsVnn0dwOOyeOwcZE1Vfoku3KBBbprOQnVr7neJtrqOtNcPOfFWYOBleMldFg57YDoZjxVUq4xnLl80YPkyznvqtUh25KMEKFXbYkcjvfZhAaKtrFs6vySZvq6OiY623JTrTfj2%2B40kFNgN%2FaiPavECrZOJIICLWIGd%2BlYYLE5%2BozCBHHq7Q8xgnH36qYkGYpP73hwRnaePY0NSpCAQRK81%2FojtGyP9AcHcHO9iYNuiTHSlT3es39UVto8AlVsAm5OmfwDnSm5czGU2QTCTD%2BqtzKBjqkAUnS%2BRaJVytRKFqtyh0P3m4bviq9ExrktPmxOkgIN4uqz7h4yeARYRK3L1BrmSk3wcGpLtCrIRXEkQCq8kIAs0Z5Le6IKmEudKHrGeWXInEsty46Gj0jpcLDGZChDaoToSf5MUbdpLBCapokuZdCKa8amLGvW4b%2FZpeBM4ezrGSPETkt%2BaL%2BuhsgaiyAKgxM0%2Ft%2B16jB4NtBzHgmyKErEPT4l%2Bkq&X-Amz-Signature=8f881386abdbc7900a0063ab1b3bc261abeb4404aa455f7d2b1c6af0b9248812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CMBAQIR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC9CABVl6mV7RG8XYayPsKx%2BGwVjV4PUW4c2KB0DS5sRwIhAIWeEtI7DyB4SKRvqMjR454bApEBrIG4IgF39WQ2SSNxKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCiJBq4yErQQ9whcoq3AMSqru0Oq6qe5d8NG%2BQJKH74IeszUuM3aLisDP8CSyjj5zC9BdN5t4xJcEHXgprqR%2FL9%2B0etS4iZbpxrCcEPGWbZOvE7WQVUbVUp5cZprH2f0VPOVfG06sDvXZ093PLRLgkepGMndBB9uNRBM1WD3is74ClJJ4T7MnQHya0bAhSBmy9c4hFu1aaymAUhYMmta0LV4wAIXRum3s6wxaVA4gtz5Ob1I0DrrMeVZUq2S7GBoGnzqL%2Bhphx6aIlJB2OykwoawBgWQPcDxZ7%2Bi8kLqNfjq5rB1LB%2BgcvYNCTJ2vr6Q3aSEqC%2FUTGpH%2Fz8qoFUVMqtqRoO27enn%2FQzTW7mbO9wb6lVWLznAfCpklK6fQZsVnn0dwOOyeOwcZE1Vfoku3KBBbprOQnVr7neJtrqOtNcPOfFWYOBleMldFg57YDoZjxVUq4xnLl80YPkyznvqtUh25KMEKFXbYkcjvfZhAaKtrFs6vySZvq6OiY623JTrTfj2%2B40kFNgN%2FaiPavECrZOJIICLWIGd%2BlYYLE5%2BozCBHHq7Q8xgnH36qYkGYpP73hwRnaePY0NSpCAQRK81%2FojtGyP9AcHcHO9iYNuiTHSlT3es39UVto8AlVsAm5OmfwDnSm5czGU2QTCTD%2BqtzKBjqkAUnS%2BRaJVytRKFqtyh0P3m4bviq9ExrktPmxOkgIN4uqz7h4yeARYRK3L1BrmSk3wcGpLtCrIRXEkQCq8kIAs0Z5Le6IKmEudKHrGeWXInEsty46Gj0jpcLDGZChDaoToSf5MUbdpLBCapokuZdCKa8amLGvW4b%2FZpeBM4ezrGSPETkt%2BaL%2BuhsgaiyAKgxM0%2Ft%2B16jB4NtBzHgmyKErEPT4l%2Bkq&X-Amz-Signature=74a8d2c44851d2969aea793b2b407dea690e8efd42800ba1f21d4e54325d2bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667J5CNWW%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T040934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIGZhToslPqvd%2BXuiu27wdw%2B%2FMfDgIpW%2FRvsRES4YbhpLAiEA3%2F4D5%2Fln4ML4ioifl%2F6wts7P5PtSW2th00CCwH%2BTv7QqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHh3Fq8UX3hQyt7b2ircA1r53np3cOQueakSfFx7asJTn%2FxmG53vSdaUVd8xfOzKatA2mKihyXmW9gzjR6RZWsnqfsxnSQYe01ZC0M1%2BSHd1Jj%2BIh2EF72fBkFPW6vNb3bUodRJ9TyFnwnMJF7SegsXtzvVUPUOxOf2mezRzw4p0ZC9fZ3fESs8bOG09Xr23GkoTg9GXsdJpxz39S%2FinC%2Fgu%2Bjs8R65C1y1w9zsTuO4GvMg1pnZypnWaKUQBVMPHf242zqt%2FjYgbjFbrWp%2FM%2FEvWo4jneIn3R6Q3ei0TreGXvbMScrUNAckR1Q3Ewns8Y13QY%2F9BZahDvGQDQyRudySSmfy18bC4%2Bj%2F5A2qvlyerQtK9M900dfoE%2BFPjK3N3koUtqgSj5eNNxbabHncWriGPZ2sjqnuJvDwxqD2j2JXSOtzeyukuNfgzb0Oee3KcE3bU5Sgo9jvqlpWnpMYbqsFKkLXKiLcAULvl3Gn8UcNbv%2Fj2L4lMSthP4I%2FjwCpge2%2FRFD6MJ%2BYM06ltzgqqFBJ%2F%2Be%2Fs4bkuchckfA4EbpChKWtjH8MGuMCD20IX4NqwiX5Pb%2B27dgUI1BVVVbgGnKLUAowOEaTZ1QserRigEw3oW93VxfXvCiLF6X8R1E73V6VzoevVxiRUr7AtMIGt3MoGOqUBeqoPQNJXeIzZUlljppnM0X%2Fp0kkP%2FTfOLwPIYJW1%2FyQ7IcDz5cBzFN2ndYKPePvVh6GHuNFyT2HhvxErzOVpXl5cu4Pm99Lcs9MQZtZPDEsekkJ8D316zl4cdjcaAqPAA6fff1EWjgs8%2FtZK8QJPY8OiBY%2F%2BCwdaUABiujqGs50l1h4xXOWgcSvbNzbrY3JMWr1iD2ekBuEfufTzRiE3Zp44pT6S&X-Amz-Signature=756d2681b989d291ecf772d6b2eb492b004493350a4ea9a2e143c8cf75206a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

