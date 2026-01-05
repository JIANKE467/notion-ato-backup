
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NNU2Z5Y%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD7sUBeS%2FroYV4PrnKT7zihe2mSfx2mEpt%2BWyDLYawviAIhAJMU64rzu9dC%2FbCvOJohS%2FZmNqRqzilxiKsMX8IQf%2FsKKv8DCDsQABoMNjM3NDIzMTgzODA1Igxmeq8FdAeMK%2BWmLecq3APox7AAEhFVhcP9Hft%2Ft4yacl0HcZ75ahXpUM7rbp7J1%2FFA0Z3cWMk1r8ueCWyv%2FxEgHEcvjBB3Djfk7Dl249DWIKc7Yia527tu%2Fg4VqVvPqV3qLhnltrZ8US1%2BEZvnYJ%2Fx1d0RdUqA0itMp5JTC4S3tM3FODOY1wd%2FMjFwhlA3kXpk3snAyBtsv%2BVDkNTCbGHzczLnkDSAffazk421J2ixTceN0g31dP4UjchF%2FXuLWay7SoMlSxt%2BqUkliA9cJqwisGswOW8aCOcE3X3A63NRp0Mx7BNA0fBIYGXxS5ox4sNvlUxNeyVRHmTuvFBn1syWuQaMOSi%2FUH%2BFFPKUBZ%2Bodtd9fPfkkVxJoQqtSUoZYSQS1wloH0iYPxywtHFYsYFCp8rwMcCU9%2BUSH9a1W6kX1JZ9r020C2vkN8w20fQ1M87SHBDR8ZnCFL9ougrC5MXV%2BciZX0t0vmhwaLt7NQPolaZYbf7oQTQjuVYpFBaTfg1C6oLXRqf9bgIalgAhNbqFPTTBeY47QBwMoLLdXjgB1l4IYLuexl1zGFdBd1YVH8qbBH1IABYh3aZf%2F6tMG7mHDf6a6djh9zj1lp6z%2FQoILZlPzU%2FhM5GOLrSZtaKH4Npd8EDrPsYRuWkSFjDlp%2BzKBjqkAaCIMqk0Sq9sOVmoRUubr2sQ4v4VTbvI0qr%2FlYVEaZPGrn%2BM38bq7KQiDtjU1eGnSMX3QQ7F%2FzXHzW5j%2F%2F4nVlsYdlNFd%2FkMX3YbHp5%2B7GdLM6HBjFmwnHgkE07k71%2BEjW%2BI2TFxEWKEJeVn1ZJpk3khavqhMn6JgtCts0lOpP3cRdV1t2VRrd5C%2B3%2B8RH1QwjCLJM%2BwPSeuT1FbM%2BJ%2BZpaWuYvb&X-Amz-Signature=fc66860da3d8cb7bb025e379832862073c9fe58d636cb2f6ec7721f7e844a734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU3OKIIZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIB78xmWUOrlQpBLpjbNtnKR0QXs39YeB%2FS2%2FU92eAorZAiEAiZboWyIsZsjIHCzhNUJ3knkLuDQZiiPJIiRhDKM01u8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEJSJgJ%2FGqlmyOEnRyrcA4v7%2FNKqa%2FLQVSWV8nDmYKO94p7u9whXwCcAzw3zPSYgSk4LpyAyFkb2w07HneUIcU6FO3WdW3yl2zIOJnmt210PRRpTp9bmpUD2A9c82r3HspjShcbkgZZIyGsb4tpXMq553kjMdpMKRpt2serWwJ%2FJ20n26h9%2B8aA1uJgKqlWnbSEUdPdOdnBYLKtB99Og6JSgmXsjFtO4749Nq3C3qcxVZixxn9qqK4DE6cv6vAKlo8z14yfoIM%2Fdp24KFGeezTz47oRmAAl%2BkdF5EJ0y5G16uUF4%2BTGDiQ5IPpiTqB9bwbjjMeuq8V%2B%2FfckTvHfSYx6B%2BF2wFcXCyujjSQZQ9Mkg8HgMI3sMklr8dGtQBrrscDPX2hgkE9WdzHJhCjAHzFKhKFVWJLmfAb75f%2BDNbMGP0%2BPVqKNsHkH50FUeToISMC%2BEwbvPhbWFyLkijjOHafmKgIQr%2B1RfS4cGyspoK0iatAOkNsah9QP7doje7OO%2FHUYQnr9223qf6EZfV3B4IPNJCpClpvCrm98L4KtO2uDOkXHK79yi5YLzagTfaqGtbWpj0e9KYGcwsVTWkpkTD0Lmtvmsl76PWpcWTf%2FcM8KriaXbDckF273Yn2YPPvzr9KgS3OzAtcxicV6gMMis7MoGOqUB%2BSVb3FKelSTE%2FBf7uUfTBsHJmgJl6VhVrE6AsOdzdEyCTsD%2BwhWCvRJ6qNmBDIB374EXanPSVWqspjsADolLSMOM%2F1zuHTfPOxdCI1Z2Ci2bWE%2BMddyowFULD8kisbsp1GZAZx9JqEhhfzCI6c8X4cvPoDJb0Vded5DFZebkzcIEc3S7AwRKhQodADptOIHNnNjTkY2SBxtP6I%2BjZNmYtCHYIJAZ&X-Amz-Signature=392616411e4d814a0fe4a465574513ee9ab9d122990e8d0681df3f2c32353395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU3OKIIZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIB78xmWUOrlQpBLpjbNtnKR0QXs39YeB%2FS2%2FU92eAorZAiEAiZboWyIsZsjIHCzhNUJ3knkLuDQZiiPJIiRhDKM01u8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEJSJgJ%2FGqlmyOEnRyrcA4v7%2FNKqa%2FLQVSWV8nDmYKO94p7u9whXwCcAzw3zPSYgSk4LpyAyFkb2w07HneUIcU6FO3WdW3yl2zIOJnmt210PRRpTp9bmpUD2A9c82r3HspjShcbkgZZIyGsb4tpXMq553kjMdpMKRpt2serWwJ%2FJ20n26h9%2B8aA1uJgKqlWnbSEUdPdOdnBYLKtB99Og6JSgmXsjFtO4749Nq3C3qcxVZixxn9qqK4DE6cv6vAKlo8z14yfoIM%2Fdp24KFGeezTz47oRmAAl%2BkdF5EJ0y5G16uUF4%2BTGDiQ5IPpiTqB9bwbjjMeuq8V%2B%2FfckTvHfSYx6B%2BF2wFcXCyujjSQZQ9Mkg8HgMI3sMklr8dGtQBrrscDPX2hgkE9WdzHJhCjAHzFKhKFVWJLmfAb75f%2BDNbMGP0%2BPVqKNsHkH50FUeToISMC%2BEwbvPhbWFyLkijjOHafmKgIQr%2B1RfS4cGyspoK0iatAOkNsah9QP7doje7OO%2FHUYQnr9223qf6EZfV3B4IPNJCpClpvCrm98L4KtO2uDOkXHK79yi5YLzagTfaqGtbWpj0e9KYGcwsVTWkpkTD0Lmtvmsl76PWpcWTf%2FcM8KriaXbDckF273Yn2YPPvzr9KgS3OzAtcxicV6gMMis7MoGOqUB%2BSVb3FKelSTE%2FBf7uUfTBsHJmgJl6VhVrE6AsOdzdEyCTsD%2BwhWCvRJ6qNmBDIB374EXanPSVWqspjsADolLSMOM%2F1zuHTfPOxdCI1Z2Ci2bWE%2BMddyowFULD8kisbsp1GZAZx9JqEhhfzCI6c8X4cvPoDJb0Vded5DFZebkzcIEc3S7AwRKhQodADptOIHNnNjTkY2SBxtP6I%2BjZNmYtCHYIJAZ&X-Amz-Signature=fa459b2c5155a342a8eeaa2d172e865c99ab1c7541d89dfe5dd44a1c2752a050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBMZN7N%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIF6VoUGcneyDLVSuGaEJemrLEPTaItb3oi0XyfCOw37PAiB7TsVHWxTWqjIA7GOdO2i7By8lWLAzrgKcITvhGH9WKyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2F4Xe%2BUwTNuasXz1XKtwDVOrH3JDWk5KyFS3SjlOAlA9T1MDvsUszVeWzS1mg%2F0goiUackFHZ9vt2Mn7dbA2zk8P5yOJsZUrZMYHE8UeNWRkICrapRJRQ9wTjAiqiqIU%2BqcDzbDVxyoX19jrhKijzPeUkJQuRIheaGzVw8cXXM8tfbrs7Fk25EIn00NQjzWxrQfZ%2BApz%2FXedBKrKKNIgr19Zf%2BxXJQTY6qhdB5luY4L5MXje%2F4ju8e1GnlpJCnXLY28dXAUU%2BqSvpb%2FhhTosA38N6MJbetsZfg5SWOBU2wji3g3U5qMiu0RNbGa14e85xXYfJpIKjlM6WV3iTzW%2FW0Nd2BiUevjJDbLt62Ju4xnen0qdB3gVYUaoDtQ7yYZVCGeVASGdAkk7gyyc%2FE5hogv0Jweof0FKIQdLbaRFCXXYYougORDsvm8Xl2XlEvhC2cR3ZaGZg6hSf2u4iNSumkKd8aB7hEM57Osc%2B6kbAQLc0SQogBkR%2FQFihEvrmsPct%2F%2BlUMFm2KHZE2eY80KKKQlYsE%2BaUGLnpyHo%2BxzRMz4JCUHps9APXfJuYsFM72WzBbwHl4p7pDFQ8u2Ygb%2Bt0ITTkYOOD8%2FhWLfWVazbfrYLXq9z2PM13d36UeK7bNimNGsyTUe2cqQhG14Ewj6zsygY6pgE74ujSt7xWQm3CYpDq4%2FhGn2GQWtsUOdDsktpHpgyPZawievgTHKi0Y9G5bG4L2LH%2Ft3kvMfDvGTMIC%2BxGue0XrLE36pTnjbT9vLk6GIyiS%2FC73QOTRZZ%2BgUrb7BHO4KjJcSrFKfqXAcHGtwrtC6XRbOKM5WsMfNSyWMtqJdkfXNUJPjLrCBh1Z3ENkQlxeL2KdIgGzeZYnh%2FM%2BOgoOlgp51bO0gxk&X-Amz-Signature=055aedc82123521a8b3a89ca30264dbb187e59259a6adcfc3524e6bfd0bb1192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBMZN7N%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIF6VoUGcneyDLVSuGaEJemrLEPTaItb3oi0XyfCOw37PAiB7TsVHWxTWqjIA7GOdO2i7By8lWLAzrgKcITvhGH9WKyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2F4Xe%2BUwTNuasXz1XKtwDVOrH3JDWk5KyFS3SjlOAlA9T1MDvsUszVeWzS1mg%2F0goiUackFHZ9vt2Mn7dbA2zk8P5yOJsZUrZMYHE8UeNWRkICrapRJRQ9wTjAiqiqIU%2BqcDzbDVxyoX19jrhKijzPeUkJQuRIheaGzVw8cXXM8tfbrs7Fk25EIn00NQjzWxrQfZ%2BApz%2FXedBKrKKNIgr19Zf%2BxXJQTY6qhdB5luY4L5MXje%2F4ju8e1GnlpJCnXLY28dXAUU%2BqSvpb%2FhhTosA38N6MJbetsZfg5SWOBU2wji3g3U5qMiu0RNbGa14e85xXYfJpIKjlM6WV3iTzW%2FW0Nd2BiUevjJDbLt62Ju4xnen0qdB3gVYUaoDtQ7yYZVCGeVASGdAkk7gyyc%2FE5hogv0Jweof0FKIQdLbaRFCXXYYougORDsvm8Xl2XlEvhC2cR3ZaGZg6hSf2u4iNSumkKd8aB7hEM57Osc%2B6kbAQLc0SQogBkR%2FQFihEvrmsPct%2F%2BlUMFm2KHZE2eY80KKKQlYsE%2BaUGLnpyHo%2BxzRMz4JCUHps9APXfJuYsFM72WzBbwHl4p7pDFQ8u2Ygb%2Bt0ITTkYOOD8%2FhWLfWVazbfrYLXq9z2PM13d36UeK7bNimNGsyTUe2cqQhG14Ewj6zsygY6pgE74ujSt7xWQm3CYpDq4%2FhGn2GQWtsUOdDsktpHpgyPZawievgTHKi0Y9G5bG4L2LH%2Ft3kvMfDvGTMIC%2BxGue0XrLE36pTnjbT9vLk6GIyiS%2FC73QOTRZZ%2BgUrb7BHO4KjJcSrFKfqXAcHGtwrtC6XRbOKM5WsMfNSyWMtqJdkfXNUJPjLrCBh1Z3ENkQlxeL2KdIgGzeZYnh%2FM%2BOgoOlgp51bO0gxk&X-Amz-Signature=31d80adc71647cb3cdab66379d380ff6804746d89e252a6da30f93fd68b480ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBMZN7N%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIF6VoUGcneyDLVSuGaEJemrLEPTaItb3oi0XyfCOw37PAiB7TsVHWxTWqjIA7GOdO2i7By8lWLAzrgKcITvhGH9WKyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2F4Xe%2BUwTNuasXz1XKtwDVOrH3JDWk5KyFS3SjlOAlA9T1MDvsUszVeWzS1mg%2F0goiUackFHZ9vt2Mn7dbA2zk8P5yOJsZUrZMYHE8UeNWRkICrapRJRQ9wTjAiqiqIU%2BqcDzbDVxyoX19jrhKijzPeUkJQuRIheaGzVw8cXXM8tfbrs7Fk25EIn00NQjzWxrQfZ%2BApz%2FXedBKrKKNIgr19Zf%2BxXJQTY6qhdB5luY4L5MXje%2F4ju8e1GnlpJCnXLY28dXAUU%2BqSvpb%2FhhTosA38N6MJbetsZfg5SWOBU2wji3g3U5qMiu0RNbGa14e85xXYfJpIKjlM6WV3iTzW%2FW0Nd2BiUevjJDbLt62Ju4xnen0qdB3gVYUaoDtQ7yYZVCGeVASGdAkk7gyyc%2FE5hogv0Jweof0FKIQdLbaRFCXXYYougORDsvm8Xl2XlEvhC2cR3ZaGZg6hSf2u4iNSumkKd8aB7hEM57Osc%2B6kbAQLc0SQogBkR%2FQFihEvrmsPct%2F%2BlUMFm2KHZE2eY80KKKQlYsE%2BaUGLnpyHo%2BxzRMz4JCUHps9APXfJuYsFM72WzBbwHl4p7pDFQ8u2Ygb%2Bt0ITTkYOOD8%2FhWLfWVazbfrYLXq9z2PM13d36UeK7bNimNGsyTUe2cqQhG14Ewj6zsygY6pgE74ujSt7xWQm3CYpDq4%2FhGn2GQWtsUOdDsktpHpgyPZawievgTHKi0Y9G5bG4L2LH%2Ft3kvMfDvGTMIC%2BxGue0XrLE36pTnjbT9vLk6GIyiS%2FC73QOTRZZ%2BgUrb7BHO4KjJcSrFKfqXAcHGtwrtC6XRbOKM5WsMfNSyWMtqJdkfXNUJPjLrCBh1Z3ENkQlxeL2KdIgGzeZYnh%2FM%2BOgoOlgp51bO0gxk&X-Amz-Signature=d3a1f367ea8075295375fdded38127b0fb843d3576a726c9f1f3e51fbfeeb1e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBMZN7N%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIF6VoUGcneyDLVSuGaEJemrLEPTaItb3oi0XyfCOw37PAiB7TsVHWxTWqjIA7GOdO2i7By8lWLAzrgKcITvhGH9WKyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2F4Xe%2BUwTNuasXz1XKtwDVOrH3JDWk5KyFS3SjlOAlA9T1MDvsUszVeWzS1mg%2F0goiUackFHZ9vt2Mn7dbA2zk8P5yOJsZUrZMYHE8UeNWRkICrapRJRQ9wTjAiqiqIU%2BqcDzbDVxyoX19jrhKijzPeUkJQuRIheaGzVw8cXXM8tfbrs7Fk25EIn00NQjzWxrQfZ%2BApz%2FXedBKrKKNIgr19Zf%2BxXJQTY6qhdB5luY4L5MXje%2F4ju8e1GnlpJCnXLY28dXAUU%2BqSvpb%2FhhTosA38N6MJbetsZfg5SWOBU2wji3g3U5qMiu0RNbGa14e85xXYfJpIKjlM6WV3iTzW%2FW0Nd2BiUevjJDbLt62Ju4xnen0qdB3gVYUaoDtQ7yYZVCGeVASGdAkk7gyyc%2FE5hogv0Jweof0FKIQdLbaRFCXXYYougORDsvm8Xl2XlEvhC2cR3ZaGZg6hSf2u4iNSumkKd8aB7hEM57Osc%2B6kbAQLc0SQogBkR%2FQFihEvrmsPct%2F%2BlUMFm2KHZE2eY80KKKQlYsE%2BaUGLnpyHo%2BxzRMz4JCUHps9APXfJuYsFM72WzBbwHl4p7pDFQ8u2Ygb%2Bt0ITTkYOOD8%2FhWLfWVazbfrYLXq9z2PM13d36UeK7bNimNGsyTUe2cqQhG14Ewj6zsygY6pgE74ujSt7xWQm3CYpDq4%2FhGn2GQWtsUOdDsktpHpgyPZawievgTHKi0Y9G5bG4L2LH%2Ft3kvMfDvGTMIC%2BxGue0XrLE36pTnjbT9vLk6GIyiS%2FC73QOTRZZ%2BgUrb7BHO4KjJcSrFKfqXAcHGtwrtC6XRbOKM5WsMfNSyWMtqJdkfXNUJPjLrCBh1Z3ENkQlxeL2KdIgGzeZYnh%2FM%2BOgoOlgp51bO0gxk&X-Amz-Signature=4169c451c5055c0114d236f63525051c1ca13d7713f42a38a35649a7359c2b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBMZN7N%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIF6VoUGcneyDLVSuGaEJemrLEPTaItb3oi0XyfCOw37PAiB7TsVHWxTWqjIA7GOdO2i7By8lWLAzrgKcITvhGH9WKyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2F4Xe%2BUwTNuasXz1XKtwDVOrH3JDWk5KyFS3SjlOAlA9T1MDvsUszVeWzS1mg%2F0goiUackFHZ9vt2Mn7dbA2zk8P5yOJsZUrZMYHE8UeNWRkICrapRJRQ9wTjAiqiqIU%2BqcDzbDVxyoX19jrhKijzPeUkJQuRIheaGzVw8cXXM8tfbrs7Fk25EIn00NQjzWxrQfZ%2BApz%2FXedBKrKKNIgr19Zf%2BxXJQTY6qhdB5luY4L5MXje%2F4ju8e1GnlpJCnXLY28dXAUU%2BqSvpb%2FhhTosA38N6MJbetsZfg5SWOBU2wji3g3U5qMiu0RNbGa14e85xXYfJpIKjlM6WV3iTzW%2FW0Nd2BiUevjJDbLt62Ju4xnen0qdB3gVYUaoDtQ7yYZVCGeVASGdAkk7gyyc%2FE5hogv0Jweof0FKIQdLbaRFCXXYYougORDsvm8Xl2XlEvhC2cR3ZaGZg6hSf2u4iNSumkKd8aB7hEM57Osc%2B6kbAQLc0SQogBkR%2FQFihEvrmsPct%2F%2BlUMFm2KHZE2eY80KKKQlYsE%2BaUGLnpyHo%2BxzRMz4JCUHps9APXfJuYsFM72WzBbwHl4p7pDFQ8u2Ygb%2Bt0ITTkYOOD8%2FhWLfWVazbfrYLXq9z2PM13d36UeK7bNimNGsyTUe2cqQhG14Ewj6zsygY6pgE74ujSt7xWQm3CYpDq4%2FhGn2GQWtsUOdDsktpHpgyPZawievgTHKi0Y9G5bG4L2LH%2Ft3kvMfDvGTMIC%2BxGue0XrLE36pTnjbT9vLk6GIyiS%2FC73QOTRZZ%2BgUrb7BHO4KjJcSrFKfqXAcHGtwrtC6XRbOKM5WsMfNSyWMtqJdkfXNUJPjLrCBh1Z3ENkQlxeL2KdIgGzeZYnh%2FM%2BOgoOlgp51bO0gxk&X-Amz-Signature=9960a2a73e4905b49737d4bbad0a07bbbf015e3da78db16aa877946aad3101cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBMZN7N%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIF6VoUGcneyDLVSuGaEJemrLEPTaItb3oi0XyfCOw37PAiB7TsVHWxTWqjIA7GOdO2i7By8lWLAzrgKcITvhGH9WKyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2F4Xe%2BUwTNuasXz1XKtwDVOrH3JDWk5KyFS3SjlOAlA9T1MDvsUszVeWzS1mg%2F0goiUackFHZ9vt2Mn7dbA2zk8P5yOJsZUrZMYHE8UeNWRkICrapRJRQ9wTjAiqiqIU%2BqcDzbDVxyoX19jrhKijzPeUkJQuRIheaGzVw8cXXM8tfbrs7Fk25EIn00NQjzWxrQfZ%2BApz%2FXedBKrKKNIgr19Zf%2BxXJQTY6qhdB5luY4L5MXje%2F4ju8e1GnlpJCnXLY28dXAUU%2BqSvpb%2FhhTosA38N6MJbetsZfg5SWOBU2wji3g3U5qMiu0RNbGa14e85xXYfJpIKjlM6WV3iTzW%2FW0Nd2BiUevjJDbLt62Ju4xnen0qdB3gVYUaoDtQ7yYZVCGeVASGdAkk7gyyc%2FE5hogv0Jweof0FKIQdLbaRFCXXYYougORDsvm8Xl2XlEvhC2cR3ZaGZg6hSf2u4iNSumkKd8aB7hEM57Osc%2B6kbAQLc0SQogBkR%2FQFihEvrmsPct%2F%2BlUMFm2KHZE2eY80KKKQlYsE%2BaUGLnpyHo%2BxzRMz4JCUHps9APXfJuYsFM72WzBbwHl4p7pDFQ8u2Ygb%2Bt0ITTkYOOD8%2FhWLfWVazbfrYLXq9z2PM13d36UeK7bNimNGsyTUe2cqQhG14Ewj6zsygY6pgE74ujSt7xWQm3CYpDq4%2FhGn2GQWtsUOdDsktpHpgyPZawievgTHKi0Y9G5bG4L2LH%2Ft3kvMfDvGTMIC%2BxGue0XrLE36pTnjbT9vLk6GIyiS%2FC73QOTRZZ%2BgUrb7BHO4KjJcSrFKfqXAcHGtwrtC6XRbOKM5WsMfNSyWMtqJdkfXNUJPjLrCBh1Z3ENkQlxeL2KdIgGzeZYnh%2FM%2BOgoOlgp51bO0gxk&X-Amz-Signature=a27faac6b7640eaab29940deb35865479a1f0fcaa87ab79d3f5ade47f0fdfca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBMZN7N%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIF6VoUGcneyDLVSuGaEJemrLEPTaItb3oi0XyfCOw37PAiB7TsVHWxTWqjIA7GOdO2i7By8lWLAzrgKcITvhGH9WKyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2F4Xe%2BUwTNuasXz1XKtwDVOrH3JDWk5KyFS3SjlOAlA9T1MDvsUszVeWzS1mg%2F0goiUackFHZ9vt2Mn7dbA2zk8P5yOJsZUrZMYHE8UeNWRkICrapRJRQ9wTjAiqiqIU%2BqcDzbDVxyoX19jrhKijzPeUkJQuRIheaGzVw8cXXM8tfbrs7Fk25EIn00NQjzWxrQfZ%2BApz%2FXedBKrKKNIgr19Zf%2BxXJQTY6qhdB5luY4L5MXje%2F4ju8e1GnlpJCnXLY28dXAUU%2BqSvpb%2FhhTosA38N6MJbetsZfg5SWOBU2wji3g3U5qMiu0RNbGa14e85xXYfJpIKjlM6WV3iTzW%2FW0Nd2BiUevjJDbLt62Ju4xnen0qdB3gVYUaoDtQ7yYZVCGeVASGdAkk7gyyc%2FE5hogv0Jweof0FKIQdLbaRFCXXYYougORDsvm8Xl2XlEvhC2cR3ZaGZg6hSf2u4iNSumkKd8aB7hEM57Osc%2B6kbAQLc0SQogBkR%2FQFihEvrmsPct%2F%2BlUMFm2KHZE2eY80KKKQlYsE%2BaUGLnpyHo%2BxzRMz4JCUHps9APXfJuYsFM72WzBbwHl4p7pDFQ8u2Ygb%2Bt0ITTkYOOD8%2FhWLfWVazbfrYLXq9z2PM13d36UeK7bNimNGsyTUe2cqQhG14Ewj6zsygY6pgE74ujSt7xWQm3CYpDq4%2FhGn2GQWtsUOdDsktpHpgyPZawievgTHKi0Y9G5bG4L2LH%2Ft3kvMfDvGTMIC%2BxGue0XrLE36pTnjbT9vLk6GIyiS%2FC73QOTRZZ%2BgUrb7BHO4KjJcSrFKfqXAcHGtwrtC6XRbOKM5WsMfNSyWMtqJdkfXNUJPjLrCBh1Z3ENkQlxeL2KdIgGzeZYnh%2FM%2BOgoOlgp51bO0gxk&X-Amz-Signature=49a9c92af80e127ac24afc2f35608d810b827bd66a6ed587e8e4bcbbd9d90d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYZN5KQS%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAyNh15l5dxgIL0nJJDwz2oOxLRo2s%2BwOZkws0KtPMjDAiEA0orO7SAe0SZFYvAv1O26v9I1aNfSbhViytO5Oz7%2FSYsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDTCbtLOfIRzMuAEtSrcA6ppZqHu1h9HUvjZatB0fcdWIXFwx2tZ2p90eJK8Sf8B80jXOPIC%2BJ%2BlBUV9X8nJR2R8bkVdbXQjCILH9GtolMf5uwshKAMOUEJvGJ%2FEzTnj3YrGLzrczeq5pY%2FJZbvvyk6ikRv%2B8%2FigSoLuse5lxhaf5iCO1uF%2FvqP89bdRPsse8saknNk5pgSI0DPP4XJgQAArUMscKTjil4eCF5PyvAQ3GFoT6Hfma0FpRjKmR9H4KFi0Xh0roPNIpw%2FjsFtMArP8Bnqfibyz8KTutVWxilAuY%2BHzFP8ydcok%2B8rySOk8mCR5zrSkDNfJnfiWwgsaphsbnTdUHHByYBA5FLRvpap89oVWzudy3a1cBuL8a%2BoKNftELkp5DgNDF2vcLYboK5zB%2FFa1WS%2F%2BbnAJO8PRAVTfViHyUm9obqbfI2kei65BkgEYw1pXRHTwmSKEwo8GJ65x95li8Do1uVN8ycgTU27km%2Fj%2Fc0JM6n5zoIKmE%2BgzjeXNBefJGuXYpnn22d0%2FPb0Z%2B41iv7CbDztfupW7AcZ2hK08mvnyiOZ61Rnk8Omt%2FEFucPl1Zk5V9KJco4%2F3qJD6P3kG%2F2z8wUUYY0u3ok4crTzwdDDItlOzi0nrBBlr%2FWXuQ9520PIzfGgkMIi%2B7MoGOqUB3VX8nBKdEj3h3%2FYxjiJtFfTN%2FrvKFbQhGfyEvS0uERpRDy96Sdl2lQ7T9CP95xQGnEIC9%2FR0PEBHbvM%2F1ti9U6RDipCFym9b7SwU2FBaiyKLOz2hXdrUs9ULgjBSmKELM%2BpK1K0NRKcmu1YF4QV%2FW67YCTR2%2BWicuIOahnzLj%2Bl3LdzMU0xiUpFPCplUjEcKgOUVBkJg6eu0x00xBfrEQmGj1YFw&X-Amz-Signature=444161758a2841c697217cb888e2dc8ebc965fbc91f9d86c2681e216a3d7de3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYZN5KQS%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAyNh15l5dxgIL0nJJDwz2oOxLRo2s%2BwOZkws0KtPMjDAiEA0orO7SAe0SZFYvAv1O26v9I1aNfSbhViytO5Oz7%2FSYsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDTCbtLOfIRzMuAEtSrcA6ppZqHu1h9HUvjZatB0fcdWIXFwx2tZ2p90eJK8Sf8B80jXOPIC%2BJ%2BlBUV9X8nJR2R8bkVdbXQjCILH9GtolMf5uwshKAMOUEJvGJ%2FEzTnj3YrGLzrczeq5pY%2FJZbvvyk6ikRv%2B8%2FigSoLuse5lxhaf5iCO1uF%2FvqP89bdRPsse8saknNk5pgSI0DPP4XJgQAArUMscKTjil4eCF5PyvAQ3GFoT6Hfma0FpRjKmR9H4KFi0Xh0roPNIpw%2FjsFtMArP8Bnqfibyz8KTutVWxilAuY%2BHzFP8ydcok%2B8rySOk8mCR5zrSkDNfJnfiWwgsaphsbnTdUHHByYBA5FLRvpap89oVWzudy3a1cBuL8a%2BoKNftELkp5DgNDF2vcLYboK5zB%2FFa1WS%2F%2BbnAJO8PRAVTfViHyUm9obqbfI2kei65BkgEYw1pXRHTwmSKEwo8GJ65x95li8Do1uVN8ycgTU27km%2Fj%2Fc0JM6n5zoIKmE%2BgzjeXNBefJGuXYpnn22d0%2FPb0Z%2B41iv7CbDztfupW7AcZ2hK08mvnyiOZ61Rnk8Omt%2FEFucPl1Zk5V9KJco4%2F3qJD6P3kG%2F2z8wUUYY0u3ok4crTzwdDDItlOzi0nrBBlr%2FWXuQ9520PIzfGgkMIi%2B7MoGOqUB3VX8nBKdEj3h3%2FYxjiJtFfTN%2FrvKFbQhGfyEvS0uERpRDy96Sdl2lQ7T9CP95xQGnEIC9%2FR0PEBHbvM%2F1ti9U6RDipCFym9b7SwU2FBaiyKLOz2hXdrUs9ULgjBSmKELM%2BpK1K0NRKcmu1YF4QV%2FW67YCTR2%2BWicuIOahnzLj%2Bl3LdzMU0xiUpFPCplUjEcKgOUVBkJg6eu0x00xBfrEQmGj1YFw&X-Amz-Signature=1099b7604f9142d092544af5594ec03761e739b93e004608ca72ddcdab041416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYZN5KQS%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAyNh15l5dxgIL0nJJDwz2oOxLRo2s%2BwOZkws0KtPMjDAiEA0orO7SAe0SZFYvAv1O26v9I1aNfSbhViytO5Oz7%2FSYsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDTCbtLOfIRzMuAEtSrcA6ppZqHu1h9HUvjZatB0fcdWIXFwx2tZ2p90eJK8Sf8B80jXOPIC%2BJ%2BlBUV9X8nJR2R8bkVdbXQjCILH9GtolMf5uwshKAMOUEJvGJ%2FEzTnj3YrGLzrczeq5pY%2FJZbvvyk6ikRv%2B8%2FigSoLuse5lxhaf5iCO1uF%2FvqP89bdRPsse8saknNk5pgSI0DPP4XJgQAArUMscKTjil4eCF5PyvAQ3GFoT6Hfma0FpRjKmR9H4KFi0Xh0roPNIpw%2FjsFtMArP8Bnqfibyz8KTutVWxilAuY%2BHzFP8ydcok%2B8rySOk8mCR5zrSkDNfJnfiWwgsaphsbnTdUHHByYBA5FLRvpap89oVWzudy3a1cBuL8a%2BoKNftELkp5DgNDF2vcLYboK5zB%2FFa1WS%2F%2BbnAJO8PRAVTfViHyUm9obqbfI2kei65BkgEYw1pXRHTwmSKEwo8GJ65x95li8Do1uVN8ycgTU27km%2Fj%2Fc0JM6n5zoIKmE%2BgzjeXNBefJGuXYpnn22d0%2FPb0Z%2B41iv7CbDztfupW7AcZ2hK08mvnyiOZ61Rnk8Omt%2FEFucPl1Zk5V9KJco4%2F3qJD6P3kG%2F2z8wUUYY0u3ok4crTzwdDDItlOzi0nrBBlr%2FWXuQ9520PIzfGgkMIi%2B7MoGOqUB3VX8nBKdEj3h3%2FYxjiJtFfTN%2FrvKFbQhGfyEvS0uERpRDy96Sdl2lQ7T9CP95xQGnEIC9%2FR0PEBHbvM%2F1ti9U6RDipCFym9b7SwU2FBaiyKLOz2hXdrUs9ULgjBSmKELM%2BpK1K0NRKcmu1YF4QV%2FW67YCTR2%2BWicuIOahnzLj%2Bl3LdzMU0xiUpFPCplUjEcKgOUVBkJg6eu0x00xBfrEQmGj1YFw&X-Amz-Signature=0139a58d900ce751325dd73c671e0ee3fadf9db2689fcc0bfeb17f1e85afbe36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYZN5KQS%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAyNh15l5dxgIL0nJJDwz2oOxLRo2s%2BwOZkws0KtPMjDAiEA0orO7SAe0SZFYvAv1O26v9I1aNfSbhViytO5Oz7%2FSYsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDTCbtLOfIRzMuAEtSrcA6ppZqHu1h9HUvjZatB0fcdWIXFwx2tZ2p90eJK8Sf8B80jXOPIC%2BJ%2BlBUV9X8nJR2R8bkVdbXQjCILH9GtolMf5uwshKAMOUEJvGJ%2FEzTnj3YrGLzrczeq5pY%2FJZbvvyk6ikRv%2B8%2FigSoLuse5lxhaf5iCO1uF%2FvqP89bdRPsse8saknNk5pgSI0DPP4XJgQAArUMscKTjil4eCF5PyvAQ3GFoT6Hfma0FpRjKmR9H4KFi0Xh0roPNIpw%2FjsFtMArP8Bnqfibyz8KTutVWxilAuY%2BHzFP8ydcok%2B8rySOk8mCR5zrSkDNfJnfiWwgsaphsbnTdUHHByYBA5FLRvpap89oVWzudy3a1cBuL8a%2BoKNftELkp5DgNDF2vcLYboK5zB%2FFa1WS%2F%2BbnAJO8PRAVTfViHyUm9obqbfI2kei65BkgEYw1pXRHTwmSKEwo8GJ65x95li8Do1uVN8ycgTU27km%2Fj%2Fc0JM6n5zoIKmE%2BgzjeXNBefJGuXYpnn22d0%2FPb0Z%2B41iv7CbDztfupW7AcZ2hK08mvnyiOZ61Rnk8Omt%2FEFucPl1Zk5V9KJco4%2F3qJD6P3kG%2F2z8wUUYY0u3ok4crTzwdDDItlOzi0nrBBlr%2FWXuQ9520PIzfGgkMIi%2B7MoGOqUB3VX8nBKdEj3h3%2FYxjiJtFfTN%2FrvKFbQhGfyEvS0uERpRDy96Sdl2lQ7T9CP95xQGnEIC9%2FR0PEBHbvM%2F1ti9U6RDipCFym9b7SwU2FBaiyKLOz2hXdrUs9ULgjBSmKELM%2BpK1K0NRKcmu1YF4QV%2FW67YCTR2%2BWicuIOahnzLj%2Bl3LdzMU0xiUpFPCplUjEcKgOUVBkJg6eu0x00xBfrEQmGj1YFw&X-Amz-Signature=8f0bfd7bcf3a58e3a749b48ca9a2e379f8e92a38fe756e920001db5a2b64241f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYZN5KQS%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAyNh15l5dxgIL0nJJDwz2oOxLRo2s%2BwOZkws0KtPMjDAiEA0orO7SAe0SZFYvAv1O26v9I1aNfSbhViytO5Oz7%2FSYsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDTCbtLOfIRzMuAEtSrcA6ppZqHu1h9HUvjZatB0fcdWIXFwx2tZ2p90eJK8Sf8B80jXOPIC%2BJ%2BlBUV9X8nJR2R8bkVdbXQjCILH9GtolMf5uwshKAMOUEJvGJ%2FEzTnj3YrGLzrczeq5pY%2FJZbvvyk6ikRv%2B8%2FigSoLuse5lxhaf5iCO1uF%2FvqP89bdRPsse8saknNk5pgSI0DPP4XJgQAArUMscKTjil4eCF5PyvAQ3GFoT6Hfma0FpRjKmR9H4KFi0Xh0roPNIpw%2FjsFtMArP8Bnqfibyz8KTutVWxilAuY%2BHzFP8ydcok%2B8rySOk8mCR5zrSkDNfJnfiWwgsaphsbnTdUHHByYBA5FLRvpap89oVWzudy3a1cBuL8a%2BoKNftELkp5DgNDF2vcLYboK5zB%2FFa1WS%2F%2BbnAJO8PRAVTfViHyUm9obqbfI2kei65BkgEYw1pXRHTwmSKEwo8GJ65x95li8Do1uVN8ycgTU27km%2Fj%2Fc0JM6n5zoIKmE%2BgzjeXNBefJGuXYpnn22d0%2FPb0Z%2B41iv7CbDztfupW7AcZ2hK08mvnyiOZ61Rnk8Omt%2FEFucPl1Zk5V9KJco4%2F3qJD6P3kG%2F2z8wUUYY0u3ok4crTzwdDDItlOzi0nrBBlr%2FWXuQ9520PIzfGgkMIi%2B7MoGOqUB3VX8nBKdEj3h3%2FYxjiJtFfTN%2FrvKFbQhGfyEvS0uERpRDy96Sdl2lQ7T9CP95xQGnEIC9%2FR0PEBHbvM%2F1ti9U6RDipCFym9b7SwU2FBaiyKLOz2hXdrUs9ULgjBSmKELM%2BpK1K0NRKcmu1YF4QV%2FW67YCTR2%2BWicuIOahnzLj%2Bl3LdzMU0xiUpFPCplUjEcKgOUVBkJg6eu0x00xBfrEQmGj1YFw&X-Amz-Signature=9a4b24d7a471ee2cef9cbf3506d5340b4bbf3b8bb24532f963b93ac8decfce3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWKJO5P%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDahXWXJ9sa3ywuJcHjqmIJ61LHAGr9Q71WyDVL4%2BZCZgIgE0VlZDvCl5vIeJMbRs26%2BqgDXc1NsEey9xFyPLGnXVYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIXWbAXrTCfwkC5P0ircA8IRal8Wd46HnLWAS5fcZcnUh3RKXoGbjPzMonbiXZbcqc4L%2B7hjX99vi0boDWMQj75Oec1ZdxXjfJcJeIdPxDeR8VlA8OysZbDUPniRnJRRM7pudnA5Rys24dzJ5jC%2F2kGlHThEq2JlJVusTS18IaAx%2FeseyX7RETtXgR359AFKuGL%2BGHiX3wA79JBDczTe6e%2B%2BUY5KvqPfSm8%2BvgYgRh%2F0NSgBFVmVXlhptCEA%2FT4FuaqTi3IErtm2XjizZFY5VLlR8nDnIpdpfOf5hY0A6LRV9rVtpemEEBCV%2Fn%2F3XR4b6wv1%2B0O%2BOqYLIvrObfAjlDCUFfiklDxm3BYksjifkDvgHQFOD%2FI8emU5EmPw41Q4913eL0r04wpdPqdQ74fbTJAeAam45QlG9nnEgmVYbkvMtmPW8sPnEDnSHuLykdumr6qqsjKF%2FkKhd%2FD5%2FJTKmIqO7YAuboOUf1ZUNubAy%2Bq3u1Is3Oy%2BQHDpUwcD8Cn4dgBSiW%2Fy%2FjCAMaFwj1RX4fi7KEQ9heP2AKeVvSRmAfNWIdYb4%2F39vZrkc0w0BPRDaT1%2FrzGbgJVCuIxmdyY2NItur8l9PbDG5qAwMn3w%2FABdpY7wJe7fVWgN5k43gtdrUmDGJqSPG9RcPakzMKKm7MoGOqUBMalucjQONZMToGweUEfqHLOXt4n0KmG1EMqLdtKmlQiEfGmKdHDjRu%2F0%2FQHG4TO65tL%2BpIh%2BjKAei7XEO%2Ff4FhqvqD3ei39zP3l01qDoC4mJPbgaaZQNOpS2dxyC%2Fq6YiwBNALuqJPniuI6cTuKfo6%2FFPxeTUY6LjUJi%2F5CD9pK1KX%2F4hHrTd%2BWbafl1oteswBXoBoZB%2F3uNhmEYj%2BgTdP1Oqdgh&X-Amz-Signature=cba09b93c1d05c64bec77cd12fc01c4a2352bfb0f186dc2a96343854cb4d7477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWKJO5P%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDahXWXJ9sa3ywuJcHjqmIJ61LHAGr9Q71WyDVL4%2BZCZgIgE0VlZDvCl5vIeJMbRs26%2BqgDXc1NsEey9xFyPLGnXVYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIXWbAXrTCfwkC5P0ircA8IRal8Wd46HnLWAS5fcZcnUh3RKXoGbjPzMonbiXZbcqc4L%2B7hjX99vi0boDWMQj75Oec1ZdxXjfJcJeIdPxDeR8VlA8OysZbDUPniRnJRRM7pudnA5Rys24dzJ5jC%2F2kGlHThEq2JlJVusTS18IaAx%2FeseyX7RETtXgR359AFKuGL%2BGHiX3wA79JBDczTe6e%2B%2BUY5KvqPfSm8%2BvgYgRh%2F0NSgBFVmVXlhptCEA%2FT4FuaqTi3IErtm2XjizZFY5VLlR8nDnIpdpfOf5hY0A6LRV9rVtpemEEBCV%2Fn%2F3XR4b6wv1%2B0O%2BOqYLIvrObfAjlDCUFfiklDxm3BYksjifkDvgHQFOD%2FI8emU5EmPw41Q4913eL0r04wpdPqdQ74fbTJAeAam45QlG9nnEgmVYbkvMtmPW8sPnEDnSHuLykdumr6qqsjKF%2FkKhd%2FD5%2FJTKmIqO7YAuboOUf1ZUNubAy%2Bq3u1Is3Oy%2BQHDpUwcD8Cn4dgBSiW%2Fy%2FjCAMaFwj1RX4fi7KEQ9heP2AKeVvSRmAfNWIdYb4%2F39vZrkc0w0BPRDaT1%2FrzGbgJVCuIxmdyY2NItur8l9PbDG5qAwMn3w%2FABdpY7wJe7fVWgN5k43gtdrUmDGJqSPG9RcPakzMKKm7MoGOqUBMalucjQONZMToGweUEfqHLOXt4n0KmG1EMqLdtKmlQiEfGmKdHDjRu%2F0%2FQHG4TO65tL%2BpIh%2BjKAei7XEO%2Ff4FhqvqD3ei39zP3l01qDoC4mJPbgaaZQNOpS2dxyC%2Fq6YiwBNALuqJPniuI6cTuKfo6%2FFPxeTUY6LjUJi%2F5CD9pK1KX%2F4hHrTd%2BWbafl1oteswBXoBoZB%2F3uNhmEYj%2BgTdP1Oqdgh&X-Amz-Signature=62feac4f9b32f638f6e7e588f56d8c482f1860cf8a216f0a165cf642407a07dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWKJO5P%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDahXWXJ9sa3ywuJcHjqmIJ61LHAGr9Q71WyDVL4%2BZCZgIgE0VlZDvCl5vIeJMbRs26%2BqgDXc1NsEey9xFyPLGnXVYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIXWbAXrTCfwkC5P0ircA8IRal8Wd46HnLWAS5fcZcnUh3RKXoGbjPzMonbiXZbcqc4L%2B7hjX99vi0boDWMQj75Oec1ZdxXjfJcJeIdPxDeR8VlA8OysZbDUPniRnJRRM7pudnA5Rys24dzJ5jC%2F2kGlHThEq2JlJVusTS18IaAx%2FeseyX7RETtXgR359AFKuGL%2BGHiX3wA79JBDczTe6e%2B%2BUY5KvqPfSm8%2BvgYgRh%2F0NSgBFVmVXlhptCEA%2FT4FuaqTi3IErtm2XjizZFY5VLlR8nDnIpdpfOf5hY0A6LRV9rVtpemEEBCV%2Fn%2F3XR4b6wv1%2B0O%2BOqYLIvrObfAjlDCUFfiklDxm3BYksjifkDvgHQFOD%2FI8emU5EmPw41Q4913eL0r04wpdPqdQ74fbTJAeAam45QlG9nnEgmVYbkvMtmPW8sPnEDnSHuLykdumr6qqsjKF%2FkKhd%2FD5%2FJTKmIqO7YAuboOUf1ZUNubAy%2Bq3u1Is3Oy%2BQHDpUwcD8Cn4dgBSiW%2Fy%2FjCAMaFwj1RX4fi7KEQ9heP2AKeVvSRmAfNWIdYb4%2F39vZrkc0w0BPRDaT1%2FrzGbgJVCuIxmdyY2NItur8l9PbDG5qAwMn3w%2FABdpY7wJe7fVWgN5k43gtdrUmDGJqSPG9RcPakzMKKm7MoGOqUBMalucjQONZMToGweUEfqHLOXt4n0KmG1EMqLdtKmlQiEfGmKdHDjRu%2F0%2FQHG4TO65tL%2BpIh%2BjKAei7XEO%2Ff4FhqvqD3ei39zP3l01qDoC4mJPbgaaZQNOpS2dxyC%2Fq6YiwBNALuqJPniuI6cTuKfo6%2FFPxeTUY6LjUJi%2F5CD9pK1KX%2F4hHrTd%2BWbafl1oteswBXoBoZB%2F3uNhmEYj%2BgTdP1Oqdgh&X-Amz-Signature=5a9029263c2fe045f5531b0dca5594e5f264dae54d12947626fccf2bbeb2315b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VC6OJL4%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCzkvPVIPxZI9hPgtdJIUBXrC%2F0VKD8Sm8N%2FvmphVPlEQIgcczV5reT8I7pfn3tUoIjN7l%2FHqEJET%2FICudXxPL0TJIq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKg4s1H3W04R2Jp3cCrcA3aJbKG%2BVXo1xR36WiJnBtcWAEnmw%2FZyREvmm1S8NVJJLGOv3nvO1yWVlPUF5cL7y8u%2B8lf%2BnyQTiCMg5pfOY89TK9eyr8qp0jLQWi79KLhZ3%2BBr12Iv9saAm57BgFAmJs0GlbCbKX0kkw3f2gTxI5Il%2BC4narf62GcVyGQoL2eWhjWy1S4mboPEbhjalgpQa713ArgRRVyvvytua5y5tr2vmPIbviXHlFaY29pUrtu8zBLz4QFtUV%2FD%2BAKJ7EZhsAj040WbVm3MpgeRpXKx%2FEAfMpCnS7Eq3TUHXbMUQsKb5jwylGrXiX5PMesG0UZw%2FFDaYKrW5HJ8aLjzjqH35FwVy4KZwQ3BT0RnwmphXgVMkzWM7AFNJB8NPBhh%2Fk8XkkjjquktM%2B5%2FZVJ2rAaRCiQPxoyNUhzSqvufDJT%2FB%2Be7fhVrjJgbNn2X7Bssl5dh4BLU6GNPZOmZ37Fba5ILuKv1r%2FDeU6FkQHD4GDQw%2F4q0%2FlSaPSVvbpNMGdd10igvtv2ZxmkLXNK18QXNJamDdw9Ef5IHzlLZNMYJ6zAHbtUvShMcb2euFJ3gAfNqV0%2FRbVRi2YFPWDmgAjDborrOs0%2Fo6woKBihrlfZZH8IlqMBRvz2AtXMf8KuHT95NMPil7MoGOqUBjfiZMa%2FCRJDZBPwAjPtrRCJLoEXnlYsXYsWy5%2BvmGWBn9yUHhedq5zFI6XUSHKASXRrgLU6piEgUFcvUBIDtxRJ%2FPuI3bjr5fSLOknwAvZ6Ecl0GqEzCZdMCzlBv6WW6EsQAjZtL8K34XswW2ewm1VW0tkzzYwxOhEzGU7LOLw52JYzhKye0E29u3FrQhuPGBENpF%2Brh876%2BXljyGhMOy2ScX6zo&X-Amz-Signature=f0bcfc9d2baeb2558a02567c47ff5d058bdceb1ad1f7d8c3e487fabf9dbcb0da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VC6OJL4%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCzkvPVIPxZI9hPgtdJIUBXrC%2F0VKD8Sm8N%2FvmphVPlEQIgcczV5reT8I7pfn3tUoIjN7l%2FHqEJET%2FICudXxPL0TJIq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKg4s1H3W04R2Jp3cCrcA3aJbKG%2BVXo1xR36WiJnBtcWAEnmw%2FZyREvmm1S8NVJJLGOv3nvO1yWVlPUF5cL7y8u%2B8lf%2BnyQTiCMg5pfOY89TK9eyr8qp0jLQWi79KLhZ3%2BBr12Iv9saAm57BgFAmJs0GlbCbKX0kkw3f2gTxI5Il%2BC4narf62GcVyGQoL2eWhjWy1S4mboPEbhjalgpQa713ArgRRVyvvytua5y5tr2vmPIbviXHlFaY29pUrtu8zBLz4QFtUV%2FD%2BAKJ7EZhsAj040WbVm3MpgeRpXKx%2FEAfMpCnS7Eq3TUHXbMUQsKb5jwylGrXiX5PMesG0UZw%2FFDaYKrW5HJ8aLjzjqH35FwVy4KZwQ3BT0RnwmphXgVMkzWM7AFNJB8NPBhh%2Fk8XkkjjquktM%2B5%2FZVJ2rAaRCiQPxoyNUhzSqvufDJT%2FB%2Be7fhVrjJgbNn2X7Bssl5dh4BLU6GNPZOmZ37Fba5ILuKv1r%2FDeU6FkQHD4GDQw%2F4q0%2FlSaPSVvbpNMGdd10igvtv2ZxmkLXNK18QXNJamDdw9Ef5IHzlLZNMYJ6zAHbtUvShMcb2euFJ3gAfNqV0%2FRbVRi2YFPWDmgAjDborrOs0%2Fo6woKBihrlfZZH8IlqMBRvz2AtXMf8KuHT95NMPil7MoGOqUBjfiZMa%2FCRJDZBPwAjPtrRCJLoEXnlYsXYsWy5%2BvmGWBn9yUHhedq5zFI6XUSHKASXRrgLU6piEgUFcvUBIDtxRJ%2FPuI3bjr5fSLOknwAvZ6Ecl0GqEzCZdMCzlBv6WW6EsQAjZtL8K34XswW2ewm1VW0tkzzYwxOhEzGU7LOLw52JYzhKye0E29u3FrQhuPGBENpF%2Brh876%2BXljyGhMOy2ScX6zo&X-Amz-Signature=555133081d0a5bb2091fdf5a3a73547cd744f5f5e5c74c6d6ec0832230c8da10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCZZYFFZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD1JGsEpqhvQOxgz6xEdgWvq0ZahB3sOo9lhFEwEnnRIgIhALfbEp4xdsyP4hEdbptRygYB29Jf6j%2FU1bns0IOUQDs0Kv8DCDsQABoMNjM3NDIzMTgzODA1Igx78%2BApEHcgSVQCPIMq3AM5LWzgeS%2FySVH9x8UKYFLWMNd%2BrYeGJNG13ncmQPxIgZsDDLTaAUPOMR3CQro7j6idHcBbYCHgIc3HLwPbRepIc%2BHekjvgSD4G3ACPRzqCjQE6b5TZ6mFhyCXfVgU8nsC5bpU7Vv%2BFeGEM6J3opeV6V%2FV8UWhoCD%2BHyL2msEPWGIeR%2BvsVUbEFwQnxBoPjV2k99ePC3g8368Rr3Dv2sPFTN1HWOuYWblmXrNqOCDN%2F8y4pbouVcOtyn60d%2BhuRi7ITShBrzOOksXMzRJee5HaLFRx%2F38FOAuyz220QA0VWzSJP97J7zdLGYN2poPd4U4IRLUrEc78p%2BpiEA9xwuWLViMlRDLkplI9xlBaCTNeC4xkJkavMFT5RDUjp%2FFo70ZGuGEWEiDjRWENkTY1sXCwnWFrm4%2Ff5YVfETSPow3QIeSNhAG4YMwPiKk5SjfJV6IG7VPRKsYiGz%2B2VQYZiRxRLC9ArkaAmTjtm4RXCOOc%2F315iuGSLKG3OaoM1gp9l2pZJn4AFHM2xei1j5kdYvZ4gQJ9NXlLbtVS%2Bc8FaoQymkWFPku2nOuXywrXGrR84I9tsspGXdtTUtwJRIeksMG90fbc0xgtCWtaKO7xAdOXY63taAjyT5AU5TwCs1DDOpuzKBjqkARhwqwepxGgPO2JKPkP4MCq27d4mOngnNv8PYDk0mzECwp6lNkqHRR0nWjWox3dwmuikBB%2F8HAoBeVOLPE4zXfltJlJvvfhkhIKPDLbT1bJkOmUn%2BlwqUzPpuqe8%2BblQD%2B0TwpRvnBTFJCDTMrzyr3XH%2BYC%2Bm8DXy3CFIT2m9LyddE2T0CsMT5h1JhobyY%2FbgqC8jlAwawNMdkuuRYI9rqE8GD7s&X-Amz-Signature=c888c22242c762f3fdf4be0ec620e1d96ad2da2911e89fb4b56c094695af563d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCZZYFFZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD1JGsEpqhvQOxgz6xEdgWvq0ZahB3sOo9lhFEwEnnRIgIhALfbEp4xdsyP4hEdbptRygYB29Jf6j%2FU1bns0IOUQDs0Kv8DCDsQABoMNjM3NDIzMTgzODA1Igx78%2BApEHcgSVQCPIMq3AM5LWzgeS%2FySVH9x8UKYFLWMNd%2BrYeGJNG13ncmQPxIgZsDDLTaAUPOMR3CQro7j6idHcBbYCHgIc3HLwPbRepIc%2BHekjvgSD4G3ACPRzqCjQE6b5TZ6mFhyCXfVgU8nsC5bpU7Vv%2BFeGEM6J3opeV6V%2FV8UWhoCD%2BHyL2msEPWGIeR%2BvsVUbEFwQnxBoPjV2k99ePC3g8368Rr3Dv2sPFTN1HWOuYWblmXrNqOCDN%2F8y4pbouVcOtyn60d%2BhuRi7ITShBrzOOksXMzRJee5HaLFRx%2F38FOAuyz220QA0VWzSJP97J7zdLGYN2poPd4U4IRLUrEc78p%2BpiEA9xwuWLViMlRDLkplI9xlBaCTNeC4xkJkavMFT5RDUjp%2FFo70ZGuGEWEiDjRWENkTY1sXCwnWFrm4%2Ff5YVfETSPow3QIeSNhAG4YMwPiKk5SjfJV6IG7VPRKsYiGz%2B2VQYZiRxRLC9ArkaAmTjtm4RXCOOc%2F315iuGSLKG3OaoM1gp9l2pZJn4AFHM2xei1j5kdYvZ4gQJ9NXlLbtVS%2Bc8FaoQymkWFPku2nOuXywrXGrR84I9tsspGXdtTUtwJRIeksMG90fbc0xgtCWtaKO7xAdOXY63taAjyT5AU5TwCs1DDOpuzKBjqkARhwqwepxGgPO2JKPkP4MCq27d4mOngnNv8PYDk0mzECwp6lNkqHRR0nWjWox3dwmuikBB%2F8HAoBeVOLPE4zXfltJlJvvfhkhIKPDLbT1bJkOmUn%2BlwqUzPpuqe8%2BblQD%2B0TwpRvnBTFJCDTMrzyr3XH%2BYC%2Bm8DXy3CFIT2m9LyddE2T0CsMT5h1JhobyY%2FbgqC8jlAwawNMdkuuRYI9rqE8GD7s&X-Amz-Signature=446c522344ce6f81cc34f945934b515c74cd5081d6be0a66ee4753173e72aa7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCZZYFFZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD1JGsEpqhvQOxgz6xEdgWvq0ZahB3sOo9lhFEwEnnRIgIhALfbEp4xdsyP4hEdbptRygYB29Jf6j%2FU1bns0IOUQDs0Kv8DCDsQABoMNjM3NDIzMTgzODA1Igx78%2BApEHcgSVQCPIMq3AM5LWzgeS%2FySVH9x8UKYFLWMNd%2BrYeGJNG13ncmQPxIgZsDDLTaAUPOMR3CQro7j6idHcBbYCHgIc3HLwPbRepIc%2BHekjvgSD4G3ACPRzqCjQE6b5TZ6mFhyCXfVgU8nsC5bpU7Vv%2BFeGEM6J3opeV6V%2FV8UWhoCD%2BHyL2msEPWGIeR%2BvsVUbEFwQnxBoPjV2k99ePC3g8368Rr3Dv2sPFTN1HWOuYWblmXrNqOCDN%2F8y4pbouVcOtyn60d%2BhuRi7ITShBrzOOksXMzRJee5HaLFRx%2F38FOAuyz220QA0VWzSJP97J7zdLGYN2poPd4U4IRLUrEc78p%2BpiEA9xwuWLViMlRDLkplI9xlBaCTNeC4xkJkavMFT5RDUjp%2FFo70ZGuGEWEiDjRWENkTY1sXCwnWFrm4%2Ff5YVfETSPow3QIeSNhAG4YMwPiKk5SjfJV6IG7VPRKsYiGz%2B2VQYZiRxRLC9ArkaAmTjtm4RXCOOc%2F315iuGSLKG3OaoM1gp9l2pZJn4AFHM2xei1j5kdYvZ4gQJ9NXlLbtVS%2Bc8FaoQymkWFPku2nOuXywrXGrR84I9tsspGXdtTUtwJRIeksMG90fbc0xgtCWtaKO7xAdOXY63taAjyT5AU5TwCs1DDOpuzKBjqkARhwqwepxGgPO2JKPkP4MCq27d4mOngnNv8PYDk0mzECwp6lNkqHRR0nWjWox3dwmuikBB%2F8HAoBeVOLPE4zXfltJlJvvfhkhIKPDLbT1bJkOmUn%2BlwqUzPpuqe8%2BblQD%2B0TwpRvnBTFJCDTMrzyr3XH%2BYC%2Bm8DXy3CFIT2m9LyddE2T0CsMT5h1JhobyY%2FbgqC8jlAwawNMdkuuRYI9rqE8GD7s&X-Amz-Signature=bad4bc62a98f9a4df906d2025e8909ea05dd41d5df83c7097f212f3a5ea5cab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCZZYFFZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD1JGsEpqhvQOxgz6xEdgWvq0ZahB3sOo9lhFEwEnnRIgIhALfbEp4xdsyP4hEdbptRygYB29Jf6j%2FU1bns0IOUQDs0Kv8DCDsQABoMNjM3NDIzMTgzODA1Igx78%2BApEHcgSVQCPIMq3AM5LWzgeS%2FySVH9x8UKYFLWMNd%2BrYeGJNG13ncmQPxIgZsDDLTaAUPOMR3CQro7j6idHcBbYCHgIc3HLwPbRepIc%2BHekjvgSD4G3ACPRzqCjQE6b5TZ6mFhyCXfVgU8nsC5bpU7Vv%2BFeGEM6J3opeV6V%2FV8UWhoCD%2BHyL2msEPWGIeR%2BvsVUbEFwQnxBoPjV2k99ePC3g8368Rr3Dv2sPFTN1HWOuYWblmXrNqOCDN%2F8y4pbouVcOtyn60d%2BhuRi7ITShBrzOOksXMzRJee5HaLFRx%2F38FOAuyz220QA0VWzSJP97J7zdLGYN2poPd4U4IRLUrEc78p%2BpiEA9xwuWLViMlRDLkplI9xlBaCTNeC4xkJkavMFT5RDUjp%2FFo70ZGuGEWEiDjRWENkTY1sXCwnWFrm4%2Ff5YVfETSPow3QIeSNhAG4YMwPiKk5SjfJV6IG7VPRKsYiGz%2B2VQYZiRxRLC9ArkaAmTjtm4RXCOOc%2F315iuGSLKG3OaoM1gp9l2pZJn4AFHM2xei1j5kdYvZ4gQJ9NXlLbtVS%2Bc8FaoQymkWFPku2nOuXywrXGrR84I9tsspGXdtTUtwJRIeksMG90fbc0xgtCWtaKO7xAdOXY63taAjyT5AU5TwCs1DDOpuzKBjqkARhwqwepxGgPO2JKPkP4MCq27d4mOngnNv8PYDk0mzECwp6lNkqHRR0nWjWox3dwmuikBB%2F8HAoBeVOLPE4zXfltJlJvvfhkhIKPDLbT1bJkOmUn%2BlwqUzPpuqe8%2BblQD%2B0TwpRvnBTFJCDTMrzyr3XH%2BYC%2Bm8DXy3CFIT2m9LyddE2T0CsMT5h1JhobyY%2FbgqC8jlAwawNMdkuuRYI9rqE8GD7s&X-Amz-Signature=144ecaff3affe5ba5230da65cb0f2eb8afcbfc166e4c06cce93737423f759931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCZZYFFZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD1JGsEpqhvQOxgz6xEdgWvq0ZahB3sOo9lhFEwEnnRIgIhALfbEp4xdsyP4hEdbptRygYB29Jf6j%2FU1bns0IOUQDs0Kv8DCDsQABoMNjM3NDIzMTgzODA1Igx78%2BApEHcgSVQCPIMq3AM5LWzgeS%2FySVH9x8UKYFLWMNd%2BrYeGJNG13ncmQPxIgZsDDLTaAUPOMR3CQro7j6idHcBbYCHgIc3HLwPbRepIc%2BHekjvgSD4G3ACPRzqCjQE6b5TZ6mFhyCXfVgU8nsC5bpU7Vv%2BFeGEM6J3opeV6V%2FV8UWhoCD%2BHyL2msEPWGIeR%2BvsVUbEFwQnxBoPjV2k99ePC3g8368Rr3Dv2sPFTN1HWOuYWblmXrNqOCDN%2F8y4pbouVcOtyn60d%2BhuRi7ITShBrzOOksXMzRJee5HaLFRx%2F38FOAuyz220QA0VWzSJP97J7zdLGYN2poPd4U4IRLUrEc78p%2BpiEA9xwuWLViMlRDLkplI9xlBaCTNeC4xkJkavMFT5RDUjp%2FFo70ZGuGEWEiDjRWENkTY1sXCwnWFrm4%2Ff5YVfETSPow3QIeSNhAG4YMwPiKk5SjfJV6IG7VPRKsYiGz%2B2VQYZiRxRLC9ArkaAmTjtm4RXCOOc%2F315iuGSLKG3OaoM1gp9l2pZJn4AFHM2xei1j5kdYvZ4gQJ9NXlLbtVS%2Bc8FaoQymkWFPku2nOuXywrXGrR84I9tsspGXdtTUtwJRIeksMG90fbc0xgtCWtaKO7xAdOXY63taAjyT5AU5TwCs1DDOpuzKBjqkARhwqwepxGgPO2JKPkP4MCq27d4mOngnNv8PYDk0mzECwp6lNkqHRR0nWjWox3dwmuikBB%2F8HAoBeVOLPE4zXfltJlJvvfhkhIKPDLbT1bJkOmUn%2BlwqUzPpuqe8%2BblQD%2B0TwpRvnBTFJCDTMrzyr3XH%2BYC%2Bm8DXy3CFIT2m9LyddE2T0CsMT5h1JhobyY%2FbgqC8jlAwawNMdkuuRYI9rqE8GD7s&X-Amz-Signature=340008391342297f03795b44bca7d46589e00f80e35963433b2bbb780be30082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC4BMMTL%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T042538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDkxKCQ9O8Mb%2F794EE8ku8Zp3xC0bi11QmyjJa4g1ir%2BwIhAPI15cBt9dGFG6sb9C%2FoiMoRE2XwDTQOq2VCIgQuOSMWKv8DCDwQABoMNjM3NDIzMTgzODA1IgwAGtlFpI%2F5inUaBugq3AOaeRlk9VixMSt6z2gEcbBy7OBl%2FKg%2B4pfQbbpyCW5L73V0m7TYG8hwov6%2BJpPnb90XKYLJm4SxzuJY5lS5mIi5pTnVwWWp9iW4WoteKdLWwLOBeyk%2FvvuCTVkvn2PzIL9dOSJTHklEVZfT82hEBexIRQTeo%2BJWJoo732Pdmb9bDf%2BKb4CkUAnHwrUT7klJ7Nqi2YAtWl5DZ4n32Tq1MK6PevyLPITxnMIiZEPS31iSmu2HixaJPjXNhp9L0KWV1TJkTYrfrTw%2Fr0m8hyd7U9gctoidJZvfh0XCDaufxCBeelLOsG2LDinyWAiT0QW4FGXX7dsmoUwwkPQNNlgLA3Oru3rGJK8QSBd5FxWkngpDreRl%2BL1gcPJfo31vgWxgry%2Bhs08YW9JZSj2AwOVeW9IEQtmerT0sJItwpzvDbJiFoFTEQ1loekYw8wkEj8X%2BOVhLdMhTuHPeTvktfO7%2FieoDRPmk17RMNrCJSn6qqTB7EHII6ThocyWvCly7d%2BpiP94oxw%2Bv7nXpwRu3n7ylicUryGxMCJDPF0j8vASW1yNVRr5aKm1URm5Tpb4IJajQgU5fg8Xiupea63wnBXlL1ChNfi6aTDBVFaYMwWOgGHF%2F5TzdYGivMus8TtbP%2BzDbx%2BzKBjqkATp%2BGJpmn3MB5J1ocAy%2B4F%2FWtHzcJGTLHx3VHw83t3QIXhEvT6Xr%2F%2BaIlx8MFaQw7VuWbD%2FCHDzs%2FFAj0VK5W1m%2FRa3dOzvdmzxPhWinTakPfv3TwF8HuSgVd5DVT09TbOts3HCwMr6QP6QFK0OYcFqVBNahsGPmZv2Hm0%2F0LsklWsFUZtASj1qziEQqocVKDbKnWlSb4v9BuuHbSZTwiuTV0STX&X-Amz-Signature=d4bc9b59b5e0fe7453e3b2e04688d7d66b6fcfb81ad826e380d56c30b7e7550c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

