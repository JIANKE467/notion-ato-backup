
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622KH2LY5%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaHOMvAhQ165Rsllv56jmOri2GbXtaMBZ7geY5AcYFOAiApukmZoufuq2hcpJRui9RlW3zSdr6pwgSnUm3%2FUhUYPiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMicbQHXOG3e2H%2BFziKtwDQV%2F3P%2Fl3J8itxZaeegQwfBokRAbI%2BLKQKGh9YA7W1cN3WZx5nNBrcnCwhaT4q8Q8PLD%2FYDmODuhuJ3DTEDcDT2CIYGIhsoN1WnrDixt7xwMn7LiODMnUDSJ%2Fw2UpVSkBd97gxmfevlu9DYUzvsyxdWy%2B%2FdMa6QBJoIH0MW4oCXJtidVMo0kG19T%2BMm0pM7kh5k0WW8iNYl6FwZNNn1Rw%2FwOX9j%2FW6mRlnGDcxJ1r5w%2BLvJgu4EgapU4kYYoKRZUyxLw27ytM3umAXWQp%2Bid6iFq3xYH2IAmYLF%2BW%2F7rUYun%2F1WY4sLzpuViJGM31xXP6NkjdUNy0f7W1a6WgCUDY4i4WLtG%2BSuirm6J8Jjcmn5Jx0xeqQzH58v4013i7G1uRszvYf1dsvVSjGZvAc%2Bir96J2Pwy1z73R3NelEbRoNKX0ZCRv9%2FPMgd6ZVlTDinK4PdL3YetGjvjdD%2BUiD0oyrmn7iQbRibE3m0G4HuiRvgID%2BS5XGLvR%2FMmSW9Zex%2Fu48NwEI8cR7ov2hk2GvW3lrt1iMPubvOd%2B1n4bZ9nv3pHXRbloC9LzsI2Gqf3zcgpP75gNk3lLoMNO%2BLzHoRaVQhJvp%2FG2Uzqr7lf%2BM1aQfFc2Z3v%2FXAPyDtu8XZAw7ufRygY6pgEN86acD2zlYVAZWqXUsO9KxWBmc%2BnHvFYLbxVu8WZh2Jx4dW90gkaIgWLM1gfY9Cy5WMFkMsG9qmT7K5ksy7TNbA475Q9Rkgdb7K6y14S%2FjzhZ7nUmT0Gu%2FwlJWfOE7ioSG4JILMjnOsHRtCChRgGt%2BpmAdKFT0uj0oRvdCK1T5T0q%2F576wyzIWOIdY8O8thaSNdUANiYI%2BzzyrkPXvEZPbZY9Hht0&X-Amz-Signature=bb759edb7d1f061ead25394c70f48961072de925ecbcb5a58dc38d8aa6d0db0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PJJFD3U%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FjSxNaWQkZvztHXmV3Z4uJRBNuHD1MOglofRyVbBbywIgMRhN8OQiLkSonBNQdW9tliCGOiaM2YCmCOGb44X4ELUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF%2FcBoVtzugW12rmircA8CsESiObE8jbs8ZroEJ6OV6Otx0ySKt32VXuvsEfhA07cwTziWOVrJIXZbELCks97m98uKYxaijLdJm2GKKWcZYOQJgdzpPUQfbxY8mTH%2FYHd6WAlaeWWHRLMS0S3QhanJtbwiqQ6IDtZyEMVv7C58SsDi%2BbWNIynBVKHGCHBZbyJVdUEQKGcTtkSRrFqVgPICfsqSy1TN5TxEg3JUDnar3EjTWCzNui27J4NQorOi7u8yJpLqp%2FRkBk5UlSNIVguFPlenGcM%2Be2GJt5fFGd1FFIQLGgNh%2BkSDQJgqanY6dQPy0hyIom1delywR2tfg5AhMviL03Zl4%2BsRhMw8w2ttktjWFUCtV%2BN04WX7VdN60u769TaP2FGBeDTub9OtV9DMaae5Zf6fi8EOBqSdDwghvLswMOQJbeB5a0XvLXXv1EVcrqKRIE0fXBM2XYX8ux8geikkAmEi6KxkuUUNX92tPvAuhii%2BuITgW9wjnEUP6kpUZ2x3M5FGb%2BHgBrtKEzGBUS7MZirTZkXB492vn9EAa2z706BW7ah%2FC9uFDrTq5pPIksR8x8xmgDl0V%2BjL9IiTbUxzZRyJ96pLsaCUnMI9JwT%2BhcZvtFniwN0O%2BWuLr1MeNsY1CNydck4E0MOfb0coGOqUBZQ9%2B7S99r3fDe%2Bhic73c3WYx%2FOuzaRFAUH6pmxOt%2FOqeRAPx0BOnZKdRtVotG32MfRKsQaPAhBSUOfD1GRE5h8zAIDfsETMOfVwN9CJayTaoR9AfOeTk82Zq0Aq%2B%2BcTKUf351pvUeqhn8cDNb%2BuPHQ9kAlbEemK7zU3or2BN13GLYbnCb5D3%2B6tZKNQ6xd2U2N3jxgm4jIzyVyVXEfNBq7%2BhYrlw&X-Amz-Signature=ed748b1c26aaac9aebf922d384bcc0595eac1ebdce4475abe434d533553380d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PJJFD3U%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FjSxNaWQkZvztHXmV3Z4uJRBNuHD1MOglofRyVbBbywIgMRhN8OQiLkSonBNQdW9tliCGOiaM2YCmCOGb44X4ELUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF%2FcBoVtzugW12rmircA8CsESiObE8jbs8ZroEJ6OV6Otx0ySKt32VXuvsEfhA07cwTziWOVrJIXZbELCks97m98uKYxaijLdJm2GKKWcZYOQJgdzpPUQfbxY8mTH%2FYHd6WAlaeWWHRLMS0S3QhanJtbwiqQ6IDtZyEMVv7C58SsDi%2BbWNIynBVKHGCHBZbyJVdUEQKGcTtkSRrFqVgPICfsqSy1TN5TxEg3JUDnar3EjTWCzNui27J4NQorOi7u8yJpLqp%2FRkBk5UlSNIVguFPlenGcM%2Be2GJt5fFGd1FFIQLGgNh%2BkSDQJgqanY6dQPy0hyIom1delywR2tfg5AhMviL03Zl4%2BsRhMw8w2ttktjWFUCtV%2BN04WX7VdN60u769TaP2FGBeDTub9OtV9DMaae5Zf6fi8EOBqSdDwghvLswMOQJbeB5a0XvLXXv1EVcrqKRIE0fXBM2XYX8ux8geikkAmEi6KxkuUUNX92tPvAuhii%2BuITgW9wjnEUP6kpUZ2x3M5FGb%2BHgBrtKEzGBUS7MZirTZkXB492vn9EAa2z706BW7ah%2FC9uFDrTq5pPIksR8x8xmgDl0V%2BjL9IiTbUxzZRyJ96pLsaCUnMI9JwT%2BhcZvtFniwN0O%2BWuLr1MeNsY1CNydck4E0MOfb0coGOqUBZQ9%2B7S99r3fDe%2Bhic73c3WYx%2FOuzaRFAUH6pmxOt%2FOqeRAPx0BOnZKdRtVotG32MfRKsQaPAhBSUOfD1GRE5h8zAIDfsETMOfVwN9CJayTaoR9AfOeTk82Zq0Aq%2B%2BcTKUf351pvUeqhn8cDNb%2BuPHQ9kAlbEemK7zU3or2BN13GLYbnCb5D3%2B6tZKNQ6xd2U2N3jxgm4jIzyVyVXEfNBq7%2BhYrlw&X-Amz-Signature=ffa0ff39aa2a3d8cbc2498ce6392ea5e456dfc02ab64bbc11e6277b6bb66bcc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPW5BU5S%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM2KMV%2Fjx%2FswI%2BWVf%2BzUPFWk4MU7yN%2BUpO%2FdbPGGWljwIgZxPxqeemyMqSIOVvnFCz%2FV5%2B4UgAqFNuRfdek7ktyQIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh61oEpOg4n8BxMpircA3wzUgCoBpRfj0zu6YZqwQtvlrNJO81byR9kJU%2FEv4QQqnJBWmVEh9RBf3BucUTMo2zyZgSfxlpKovcVe4RM58O1ShTrn%2FbzdmThCtNAYve1Lgv1jVqBXHUqU9x3zsG9yenQP4BFoZ6O1pVqh2iCpWGzvlUJ2NAugUvaAHMmLBBjXPbzfbA5CxQQsPrq6fCKpbY3CHWDJm%2F2HiWPVTBhQyAK3npBN09CA8%2FnRpqEdZI0xZNdRumgUNJiUaIyRZdbLJUd9bN0TnQP69MvcZXZdwg2fQWNUbJrvTU5j8B%2FXLdjLPK0VIIQBJ4GVpZfvCmO2EijM4ADLNgFtUcjV%2FT2LK%2BjmXF3SrtssBfekx%2BulRKTGbfBNtZNh%2FoI%2FI8soxt%2Bf7qai5zurCvmmvmuBalFPSgFGI7CfNfajPn%2Baky%2B6xjKkadS838UMDCNcTl3BotPaOELSAJXsoXuTXQb6h7CM3F2NzR87iKq0eCvOqNp7YTI16168blEoEp1mOFRllvAB613r2KaaeFbVfQR2jk%2FhKDExg8YUtcCgGU310dwUu3M%2BJmjZ11%2FbVii%2FExgjxt%2BVy9us25PKGusnWJ6yOQYrcxoODb3ulZ5mLsiUPIW8QWpQFtexRdLTW5EAA9mMN3k0coGOqUBBpoLzq8VvF1ELJOo1AhJOeZcVW1zypcUD4ufAoTFKwYsOl8XVAME0w8N14tfoEaO95cWvOU8KY0IYCZtUF3E1nEbtotipE%2FGzCBBPD7FeeLZZKyb%2B1UIdCnG35i541Po8pJMuIOAVNvHoktaqlCpFITPo6Yc8t%2FCt2hc6jnNx5ON4fCCnKL8vaDyPvWmdwt6EHyAD1rAKD3vOcN4R03i%2F0GbFYtL&X-Amz-Signature=6bc81c7ead7d845fe86054a9e6adbffd460329f96bf9394dcee8d1583ea87da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPW5BU5S%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM2KMV%2Fjx%2FswI%2BWVf%2BzUPFWk4MU7yN%2BUpO%2FdbPGGWljwIgZxPxqeemyMqSIOVvnFCz%2FV5%2B4UgAqFNuRfdek7ktyQIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh61oEpOg4n8BxMpircA3wzUgCoBpRfj0zu6YZqwQtvlrNJO81byR9kJU%2FEv4QQqnJBWmVEh9RBf3BucUTMo2zyZgSfxlpKovcVe4RM58O1ShTrn%2FbzdmThCtNAYve1Lgv1jVqBXHUqU9x3zsG9yenQP4BFoZ6O1pVqh2iCpWGzvlUJ2NAugUvaAHMmLBBjXPbzfbA5CxQQsPrq6fCKpbY3CHWDJm%2F2HiWPVTBhQyAK3npBN09CA8%2FnRpqEdZI0xZNdRumgUNJiUaIyRZdbLJUd9bN0TnQP69MvcZXZdwg2fQWNUbJrvTU5j8B%2FXLdjLPK0VIIQBJ4GVpZfvCmO2EijM4ADLNgFtUcjV%2FT2LK%2BjmXF3SrtssBfekx%2BulRKTGbfBNtZNh%2FoI%2FI8soxt%2Bf7qai5zurCvmmvmuBalFPSgFGI7CfNfajPn%2Baky%2B6xjKkadS838UMDCNcTl3BotPaOELSAJXsoXuTXQb6h7CM3F2NzR87iKq0eCvOqNp7YTI16168blEoEp1mOFRllvAB613r2KaaeFbVfQR2jk%2FhKDExg8YUtcCgGU310dwUu3M%2BJmjZ11%2FbVii%2FExgjxt%2BVy9us25PKGusnWJ6yOQYrcxoODb3ulZ5mLsiUPIW8QWpQFtexRdLTW5EAA9mMN3k0coGOqUBBpoLzq8VvF1ELJOo1AhJOeZcVW1zypcUD4ufAoTFKwYsOl8XVAME0w8N14tfoEaO95cWvOU8KY0IYCZtUF3E1nEbtotipE%2FGzCBBPD7FeeLZZKyb%2B1UIdCnG35i541Po8pJMuIOAVNvHoktaqlCpFITPo6Yc8t%2FCt2hc6jnNx5ON4fCCnKL8vaDyPvWmdwt6EHyAD1rAKD3vOcN4R03i%2F0GbFYtL&X-Amz-Signature=e35510f466429549551c928b9aa7f0d488f8b93de1d70f18c2f7d43a855a4d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPW5BU5S%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM2KMV%2Fjx%2FswI%2BWVf%2BzUPFWk4MU7yN%2BUpO%2FdbPGGWljwIgZxPxqeemyMqSIOVvnFCz%2FV5%2B4UgAqFNuRfdek7ktyQIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh61oEpOg4n8BxMpircA3wzUgCoBpRfj0zu6YZqwQtvlrNJO81byR9kJU%2FEv4QQqnJBWmVEh9RBf3BucUTMo2zyZgSfxlpKovcVe4RM58O1ShTrn%2FbzdmThCtNAYve1Lgv1jVqBXHUqU9x3zsG9yenQP4BFoZ6O1pVqh2iCpWGzvlUJ2NAugUvaAHMmLBBjXPbzfbA5CxQQsPrq6fCKpbY3CHWDJm%2F2HiWPVTBhQyAK3npBN09CA8%2FnRpqEdZI0xZNdRumgUNJiUaIyRZdbLJUd9bN0TnQP69MvcZXZdwg2fQWNUbJrvTU5j8B%2FXLdjLPK0VIIQBJ4GVpZfvCmO2EijM4ADLNgFtUcjV%2FT2LK%2BjmXF3SrtssBfekx%2BulRKTGbfBNtZNh%2FoI%2FI8soxt%2Bf7qai5zurCvmmvmuBalFPSgFGI7CfNfajPn%2Baky%2B6xjKkadS838UMDCNcTl3BotPaOELSAJXsoXuTXQb6h7CM3F2NzR87iKq0eCvOqNp7YTI16168blEoEp1mOFRllvAB613r2KaaeFbVfQR2jk%2FhKDExg8YUtcCgGU310dwUu3M%2BJmjZ11%2FbVii%2FExgjxt%2BVy9us25PKGusnWJ6yOQYrcxoODb3ulZ5mLsiUPIW8QWpQFtexRdLTW5EAA9mMN3k0coGOqUBBpoLzq8VvF1ELJOo1AhJOeZcVW1zypcUD4ufAoTFKwYsOl8XVAME0w8N14tfoEaO95cWvOU8KY0IYCZtUF3E1nEbtotipE%2FGzCBBPD7FeeLZZKyb%2B1UIdCnG35i541Po8pJMuIOAVNvHoktaqlCpFITPo6Yc8t%2FCt2hc6jnNx5ON4fCCnKL8vaDyPvWmdwt6EHyAD1rAKD3vOcN4R03i%2F0GbFYtL&X-Amz-Signature=49da7ac8d2ec2913b0de37b7d764ae3981695cd8356d2f58330c21505083bc06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPW5BU5S%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM2KMV%2Fjx%2FswI%2BWVf%2BzUPFWk4MU7yN%2BUpO%2FdbPGGWljwIgZxPxqeemyMqSIOVvnFCz%2FV5%2B4UgAqFNuRfdek7ktyQIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh61oEpOg4n8BxMpircA3wzUgCoBpRfj0zu6YZqwQtvlrNJO81byR9kJU%2FEv4QQqnJBWmVEh9RBf3BucUTMo2zyZgSfxlpKovcVe4RM58O1ShTrn%2FbzdmThCtNAYve1Lgv1jVqBXHUqU9x3zsG9yenQP4BFoZ6O1pVqh2iCpWGzvlUJ2NAugUvaAHMmLBBjXPbzfbA5CxQQsPrq6fCKpbY3CHWDJm%2F2HiWPVTBhQyAK3npBN09CA8%2FnRpqEdZI0xZNdRumgUNJiUaIyRZdbLJUd9bN0TnQP69MvcZXZdwg2fQWNUbJrvTU5j8B%2FXLdjLPK0VIIQBJ4GVpZfvCmO2EijM4ADLNgFtUcjV%2FT2LK%2BjmXF3SrtssBfekx%2BulRKTGbfBNtZNh%2FoI%2FI8soxt%2Bf7qai5zurCvmmvmuBalFPSgFGI7CfNfajPn%2Baky%2B6xjKkadS838UMDCNcTl3BotPaOELSAJXsoXuTXQb6h7CM3F2NzR87iKq0eCvOqNp7YTI16168blEoEp1mOFRllvAB613r2KaaeFbVfQR2jk%2FhKDExg8YUtcCgGU310dwUu3M%2BJmjZ11%2FbVii%2FExgjxt%2BVy9us25PKGusnWJ6yOQYrcxoODb3ulZ5mLsiUPIW8QWpQFtexRdLTW5EAA9mMN3k0coGOqUBBpoLzq8VvF1ELJOo1AhJOeZcVW1zypcUD4ufAoTFKwYsOl8XVAME0w8N14tfoEaO95cWvOU8KY0IYCZtUF3E1nEbtotipE%2FGzCBBPD7FeeLZZKyb%2B1UIdCnG35i541Po8pJMuIOAVNvHoktaqlCpFITPo6Yc8t%2FCt2hc6jnNx5ON4fCCnKL8vaDyPvWmdwt6EHyAD1rAKD3vOcN4R03i%2F0GbFYtL&X-Amz-Signature=a94275c96c4fbab03991840e07f496601b44f9c12c12a0edf65d7987b7e90cb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPW5BU5S%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM2KMV%2Fjx%2FswI%2BWVf%2BzUPFWk4MU7yN%2BUpO%2FdbPGGWljwIgZxPxqeemyMqSIOVvnFCz%2FV5%2B4UgAqFNuRfdek7ktyQIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh61oEpOg4n8BxMpircA3wzUgCoBpRfj0zu6YZqwQtvlrNJO81byR9kJU%2FEv4QQqnJBWmVEh9RBf3BucUTMo2zyZgSfxlpKovcVe4RM58O1ShTrn%2FbzdmThCtNAYve1Lgv1jVqBXHUqU9x3zsG9yenQP4BFoZ6O1pVqh2iCpWGzvlUJ2NAugUvaAHMmLBBjXPbzfbA5CxQQsPrq6fCKpbY3CHWDJm%2F2HiWPVTBhQyAK3npBN09CA8%2FnRpqEdZI0xZNdRumgUNJiUaIyRZdbLJUd9bN0TnQP69MvcZXZdwg2fQWNUbJrvTU5j8B%2FXLdjLPK0VIIQBJ4GVpZfvCmO2EijM4ADLNgFtUcjV%2FT2LK%2BjmXF3SrtssBfekx%2BulRKTGbfBNtZNh%2FoI%2FI8soxt%2Bf7qai5zurCvmmvmuBalFPSgFGI7CfNfajPn%2Baky%2B6xjKkadS838UMDCNcTl3BotPaOELSAJXsoXuTXQb6h7CM3F2NzR87iKq0eCvOqNp7YTI16168blEoEp1mOFRllvAB613r2KaaeFbVfQR2jk%2FhKDExg8YUtcCgGU310dwUu3M%2BJmjZ11%2FbVii%2FExgjxt%2BVy9us25PKGusnWJ6yOQYrcxoODb3ulZ5mLsiUPIW8QWpQFtexRdLTW5EAA9mMN3k0coGOqUBBpoLzq8VvF1ELJOo1AhJOeZcVW1zypcUD4ufAoTFKwYsOl8XVAME0w8N14tfoEaO95cWvOU8KY0IYCZtUF3E1nEbtotipE%2FGzCBBPD7FeeLZZKyb%2B1UIdCnG35i541Po8pJMuIOAVNvHoktaqlCpFITPo6Yc8t%2FCt2hc6jnNx5ON4fCCnKL8vaDyPvWmdwt6EHyAD1rAKD3vOcN4R03i%2F0GbFYtL&X-Amz-Signature=4a6ba27ef1a1f7488d190d09d5916829bcf43dce1c7e1c256233c7fefe158453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPW5BU5S%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM2KMV%2Fjx%2FswI%2BWVf%2BzUPFWk4MU7yN%2BUpO%2FdbPGGWljwIgZxPxqeemyMqSIOVvnFCz%2FV5%2B4UgAqFNuRfdek7ktyQIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh61oEpOg4n8BxMpircA3wzUgCoBpRfj0zu6YZqwQtvlrNJO81byR9kJU%2FEv4QQqnJBWmVEh9RBf3BucUTMo2zyZgSfxlpKovcVe4RM58O1ShTrn%2FbzdmThCtNAYve1Lgv1jVqBXHUqU9x3zsG9yenQP4BFoZ6O1pVqh2iCpWGzvlUJ2NAugUvaAHMmLBBjXPbzfbA5CxQQsPrq6fCKpbY3CHWDJm%2F2HiWPVTBhQyAK3npBN09CA8%2FnRpqEdZI0xZNdRumgUNJiUaIyRZdbLJUd9bN0TnQP69MvcZXZdwg2fQWNUbJrvTU5j8B%2FXLdjLPK0VIIQBJ4GVpZfvCmO2EijM4ADLNgFtUcjV%2FT2LK%2BjmXF3SrtssBfekx%2BulRKTGbfBNtZNh%2FoI%2FI8soxt%2Bf7qai5zurCvmmvmuBalFPSgFGI7CfNfajPn%2Baky%2B6xjKkadS838UMDCNcTl3BotPaOELSAJXsoXuTXQb6h7CM3F2NzR87iKq0eCvOqNp7YTI16168blEoEp1mOFRllvAB613r2KaaeFbVfQR2jk%2FhKDExg8YUtcCgGU310dwUu3M%2BJmjZ11%2FbVii%2FExgjxt%2BVy9us25PKGusnWJ6yOQYrcxoODb3ulZ5mLsiUPIW8QWpQFtexRdLTW5EAA9mMN3k0coGOqUBBpoLzq8VvF1ELJOo1AhJOeZcVW1zypcUD4ufAoTFKwYsOl8XVAME0w8N14tfoEaO95cWvOU8KY0IYCZtUF3E1nEbtotipE%2FGzCBBPD7FeeLZZKyb%2B1UIdCnG35i541Po8pJMuIOAVNvHoktaqlCpFITPo6Yc8t%2FCt2hc6jnNx5ON4fCCnKL8vaDyPvWmdwt6EHyAD1rAKD3vOcN4R03i%2F0GbFYtL&X-Amz-Signature=a6c549b50d91d318552f7232f8226f2880e857dab333b36fd88915133d497098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPW5BU5S%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM2KMV%2Fjx%2FswI%2BWVf%2BzUPFWk4MU7yN%2BUpO%2FdbPGGWljwIgZxPxqeemyMqSIOVvnFCz%2FV5%2B4UgAqFNuRfdek7ktyQIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh61oEpOg4n8BxMpircA3wzUgCoBpRfj0zu6YZqwQtvlrNJO81byR9kJU%2FEv4QQqnJBWmVEh9RBf3BucUTMo2zyZgSfxlpKovcVe4RM58O1ShTrn%2FbzdmThCtNAYve1Lgv1jVqBXHUqU9x3zsG9yenQP4BFoZ6O1pVqh2iCpWGzvlUJ2NAugUvaAHMmLBBjXPbzfbA5CxQQsPrq6fCKpbY3CHWDJm%2F2HiWPVTBhQyAK3npBN09CA8%2FnRpqEdZI0xZNdRumgUNJiUaIyRZdbLJUd9bN0TnQP69MvcZXZdwg2fQWNUbJrvTU5j8B%2FXLdjLPK0VIIQBJ4GVpZfvCmO2EijM4ADLNgFtUcjV%2FT2LK%2BjmXF3SrtssBfekx%2BulRKTGbfBNtZNh%2FoI%2FI8soxt%2Bf7qai5zurCvmmvmuBalFPSgFGI7CfNfajPn%2Baky%2B6xjKkadS838UMDCNcTl3BotPaOELSAJXsoXuTXQb6h7CM3F2NzR87iKq0eCvOqNp7YTI16168blEoEp1mOFRllvAB613r2KaaeFbVfQR2jk%2FhKDExg8YUtcCgGU310dwUu3M%2BJmjZ11%2FbVii%2FExgjxt%2BVy9us25PKGusnWJ6yOQYrcxoODb3ulZ5mLsiUPIW8QWpQFtexRdLTW5EAA9mMN3k0coGOqUBBpoLzq8VvF1ELJOo1AhJOeZcVW1zypcUD4ufAoTFKwYsOl8XVAME0w8N14tfoEaO95cWvOU8KY0IYCZtUF3E1nEbtotipE%2FGzCBBPD7FeeLZZKyb%2B1UIdCnG35i541Po8pJMuIOAVNvHoktaqlCpFITPo6Yc8t%2FCt2hc6jnNx5ON4fCCnKL8vaDyPvWmdwt6EHyAD1rAKD3vOcN4R03i%2F0GbFYtL&X-Amz-Signature=eaa1cb7325508e2ebf4fcaa81dc01347d43a681f1667f1fdf0bde3371c23bfa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQ3VGVW%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4Dndi4iirn817ZKFnJ35NukwWri40aZzOwNFmcTZVqAiEAoUCDT7SuV%2FHdCoWOBNpLYD8CjQEviLzc5QLa2rpOUx8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6eQoNoii0iE0pp9CrcA8Q6X5JXhKRDC1Fdrq1g7HMUW3r7pqYqRfdXNKCvDXijNEt6dJSJgJQUVndWTkdXT6C5RbVYv6VIw9BHBeqw1aGUzzxgjYV1HjBtA%2FiEMhl1Tiv4loXAQ0RO4NyDyskRYESwhOcyFmWgNkjmmyX2LqrxysyIO6DJp9YzFRflimgLieolVJiPRlQMXWMInGceHsAiB5eMpgfqjuQCv87oIziknmNm7ysiWF9tNlJhnE%2BbpY6NeqA9Dm4mwgLMyUE5qi1%2BIsL%2BkfeT91%2Fr%2FnoVE9%2F7rJ%2BF5YBn0UuJX2dnY%2F3wLbN3wfYJ2G0OYOs1rOqUaZlozID%2BGf91SKxTOb1TSzIIzpLmKYDliDT3L4l63X5%2FKSJcfIDeF8f7MHDUaHyoUyb6DLN0eP9UDm1Q615dhWQ7ysW%2FWJFWrMug115K8%2BBeGMWd99H4fzcD%2Fyi4CtA%2FqrhYuZ%2Faj82FgWxbP4XdwgPIwo%2F5syDNAmwmuOXlHqF9v0dkmd66vYxPrjIbH2DJR2ShUks%2Bh9YfBCc2xZrJ%2BZmBMHT5L7HMIPhk%2BcYe3wRkb2aJ%2F1UMWQN%2BfE0fMfVZhClrwCeds4zB1AhVaOcKcMvkHjCMd1yekF3KNm%2BCJZyQPfsSV%2F8KGMTyubQTMI7h0coGOqUBCLnn9h79XVWmxjA5AvleEbm8wpg9eNUgLAZWyIP8grNrXkSOTpNPwTWNpnXeW%2Bii7jtKB9gKndLmnjOMeWNc1Z5plzCJrji1Wp8v9CXhKysA5LNe600wVwE194Io3pdkff1N3YX%2BEV30Bi2ouVEcLB%2FHZb952vTU%2FPmjLPHJBpaijtHlq13apjlnCp%2B%2BMKknBHswaDiBYA5ToAG2SqtfHb9bwL0p&X-Amz-Signature=0f84f55260b4f6012b71a2dc204dcdd0758cd1bc8a17725d9097239bf614820c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQ3VGVW%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4Dndi4iirn817ZKFnJ35NukwWri40aZzOwNFmcTZVqAiEAoUCDT7SuV%2FHdCoWOBNpLYD8CjQEviLzc5QLa2rpOUx8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6eQoNoii0iE0pp9CrcA8Q6X5JXhKRDC1Fdrq1g7HMUW3r7pqYqRfdXNKCvDXijNEt6dJSJgJQUVndWTkdXT6C5RbVYv6VIw9BHBeqw1aGUzzxgjYV1HjBtA%2FiEMhl1Tiv4loXAQ0RO4NyDyskRYESwhOcyFmWgNkjmmyX2LqrxysyIO6DJp9YzFRflimgLieolVJiPRlQMXWMInGceHsAiB5eMpgfqjuQCv87oIziknmNm7ysiWF9tNlJhnE%2BbpY6NeqA9Dm4mwgLMyUE5qi1%2BIsL%2BkfeT91%2Fr%2FnoVE9%2F7rJ%2BF5YBn0UuJX2dnY%2F3wLbN3wfYJ2G0OYOs1rOqUaZlozID%2BGf91SKxTOb1TSzIIzpLmKYDliDT3L4l63X5%2FKSJcfIDeF8f7MHDUaHyoUyb6DLN0eP9UDm1Q615dhWQ7ysW%2FWJFWrMug115K8%2BBeGMWd99H4fzcD%2Fyi4CtA%2FqrhYuZ%2Faj82FgWxbP4XdwgPIwo%2F5syDNAmwmuOXlHqF9v0dkmd66vYxPrjIbH2DJR2ShUks%2Bh9YfBCc2xZrJ%2BZmBMHT5L7HMIPhk%2BcYe3wRkb2aJ%2F1UMWQN%2BfE0fMfVZhClrwCeds4zB1AhVaOcKcMvkHjCMd1yekF3KNm%2BCJZyQPfsSV%2F8KGMTyubQTMI7h0coGOqUBCLnn9h79XVWmxjA5AvleEbm8wpg9eNUgLAZWyIP8grNrXkSOTpNPwTWNpnXeW%2Bii7jtKB9gKndLmnjOMeWNc1Z5plzCJrji1Wp8v9CXhKysA5LNe600wVwE194Io3pdkff1N3YX%2BEV30Bi2ouVEcLB%2FHZb952vTU%2FPmjLPHJBpaijtHlq13apjlnCp%2B%2BMKknBHswaDiBYA5ToAG2SqtfHb9bwL0p&X-Amz-Signature=8d4065391dcd38984cb2c98cc5bf90affb7d791fadecff97e89cf197bb07a49b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQ3VGVW%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4Dndi4iirn817ZKFnJ35NukwWri40aZzOwNFmcTZVqAiEAoUCDT7SuV%2FHdCoWOBNpLYD8CjQEviLzc5QLa2rpOUx8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6eQoNoii0iE0pp9CrcA8Q6X5JXhKRDC1Fdrq1g7HMUW3r7pqYqRfdXNKCvDXijNEt6dJSJgJQUVndWTkdXT6C5RbVYv6VIw9BHBeqw1aGUzzxgjYV1HjBtA%2FiEMhl1Tiv4loXAQ0RO4NyDyskRYESwhOcyFmWgNkjmmyX2LqrxysyIO6DJp9YzFRflimgLieolVJiPRlQMXWMInGceHsAiB5eMpgfqjuQCv87oIziknmNm7ysiWF9tNlJhnE%2BbpY6NeqA9Dm4mwgLMyUE5qi1%2BIsL%2BkfeT91%2Fr%2FnoVE9%2F7rJ%2BF5YBn0UuJX2dnY%2F3wLbN3wfYJ2G0OYOs1rOqUaZlozID%2BGf91SKxTOb1TSzIIzpLmKYDliDT3L4l63X5%2FKSJcfIDeF8f7MHDUaHyoUyb6DLN0eP9UDm1Q615dhWQ7ysW%2FWJFWrMug115K8%2BBeGMWd99H4fzcD%2Fyi4CtA%2FqrhYuZ%2Faj82FgWxbP4XdwgPIwo%2F5syDNAmwmuOXlHqF9v0dkmd66vYxPrjIbH2DJR2ShUks%2Bh9YfBCc2xZrJ%2BZmBMHT5L7HMIPhk%2BcYe3wRkb2aJ%2F1UMWQN%2BfE0fMfVZhClrwCeds4zB1AhVaOcKcMvkHjCMd1yekF3KNm%2BCJZyQPfsSV%2F8KGMTyubQTMI7h0coGOqUBCLnn9h79XVWmxjA5AvleEbm8wpg9eNUgLAZWyIP8grNrXkSOTpNPwTWNpnXeW%2Bii7jtKB9gKndLmnjOMeWNc1Z5plzCJrji1Wp8v9CXhKysA5LNe600wVwE194Io3pdkff1N3YX%2BEV30Bi2ouVEcLB%2FHZb952vTU%2FPmjLPHJBpaijtHlq13apjlnCp%2B%2BMKknBHswaDiBYA5ToAG2SqtfHb9bwL0p&X-Amz-Signature=368ca5dbec0c5a3d2da9daca9ee6e97213293f2056fad99f482eb3f1e36495fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQ3VGVW%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4Dndi4iirn817ZKFnJ35NukwWri40aZzOwNFmcTZVqAiEAoUCDT7SuV%2FHdCoWOBNpLYD8CjQEviLzc5QLa2rpOUx8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6eQoNoii0iE0pp9CrcA8Q6X5JXhKRDC1Fdrq1g7HMUW3r7pqYqRfdXNKCvDXijNEt6dJSJgJQUVndWTkdXT6C5RbVYv6VIw9BHBeqw1aGUzzxgjYV1HjBtA%2FiEMhl1Tiv4loXAQ0RO4NyDyskRYESwhOcyFmWgNkjmmyX2LqrxysyIO6DJp9YzFRflimgLieolVJiPRlQMXWMInGceHsAiB5eMpgfqjuQCv87oIziknmNm7ysiWF9tNlJhnE%2BbpY6NeqA9Dm4mwgLMyUE5qi1%2BIsL%2BkfeT91%2Fr%2FnoVE9%2F7rJ%2BF5YBn0UuJX2dnY%2F3wLbN3wfYJ2G0OYOs1rOqUaZlozID%2BGf91SKxTOb1TSzIIzpLmKYDliDT3L4l63X5%2FKSJcfIDeF8f7MHDUaHyoUyb6DLN0eP9UDm1Q615dhWQ7ysW%2FWJFWrMug115K8%2BBeGMWd99H4fzcD%2Fyi4CtA%2FqrhYuZ%2Faj82FgWxbP4XdwgPIwo%2F5syDNAmwmuOXlHqF9v0dkmd66vYxPrjIbH2DJR2ShUks%2Bh9YfBCc2xZrJ%2BZmBMHT5L7HMIPhk%2BcYe3wRkb2aJ%2F1UMWQN%2BfE0fMfVZhClrwCeds4zB1AhVaOcKcMvkHjCMd1yekF3KNm%2BCJZyQPfsSV%2F8KGMTyubQTMI7h0coGOqUBCLnn9h79XVWmxjA5AvleEbm8wpg9eNUgLAZWyIP8grNrXkSOTpNPwTWNpnXeW%2Bii7jtKB9gKndLmnjOMeWNc1Z5plzCJrji1Wp8v9CXhKysA5LNe600wVwE194Io3pdkff1N3YX%2BEV30Bi2ouVEcLB%2FHZb952vTU%2FPmjLPHJBpaijtHlq13apjlnCp%2B%2BMKknBHswaDiBYA5ToAG2SqtfHb9bwL0p&X-Amz-Signature=cc7b2fcbf6b218f83a493aa56f43d9ec47c76fee50fd7f75a18a23479f2ed3e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQ3VGVW%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4Dndi4iirn817ZKFnJ35NukwWri40aZzOwNFmcTZVqAiEAoUCDT7SuV%2FHdCoWOBNpLYD8CjQEviLzc5QLa2rpOUx8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6eQoNoii0iE0pp9CrcA8Q6X5JXhKRDC1Fdrq1g7HMUW3r7pqYqRfdXNKCvDXijNEt6dJSJgJQUVndWTkdXT6C5RbVYv6VIw9BHBeqw1aGUzzxgjYV1HjBtA%2FiEMhl1Tiv4loXAQ0RO4NyDyskRYESwhOcyFmWgNkjmmyX2LqrxysyIO6DJp9YzFRflimgLieolVJiPRlQMXWMInGceHsAiB5eMpgfqjuQCv87oIziknmNm7ysiWF9tNlJhnE%2BbpY6NeqA9Dm4mwgLMyUE5qi1%2BIsL%2BkfeT91%2Fr%2FnoVE9%2F7rJ%2BF5YBn0UuJX2dnY%2F3wLbN3wfYJ2G0OYOs1rOqUaZlozID%2BGf91SKxTOb1TSzIIzpLmKYDliDT3L4l63X5%2FKSJcfIDeF8f7MHDUaHyoUyb6DLN0eP9UDm1Q615dhWQ7ysW%2FWJFWrMug115K8%2BBeGMWd99H4fzcD%2Fyi4CtA%2FqrhYuZ%2Faj82FgWxbP4XdwgPIwo%2F5syDNAmwmuOXlHqF9v0dkmd66vYxPrjIbH2DJR2ShUks%2Bh9YfBCc2xZrJ%2BZmBMHT5L7HMIPhk%2BcYe3wRkb2aJ%2F1UMWQN%2BfE0fMfVZhClrwCeds4zB1AhVaOcKcMvkHjCMd1yekF3KNm%2BCJZyQPfsSV%2F8KGMTyubQTMI7h0coGOqUBCLnn9h79XVWmxjA5AvleEbm8wpg9eNUgLAZWyIP8grNrXkSOTpNPwTWNpnXeW%2Bii7jtKB9gKndLmnjOMeWNc1Z5plzCJrji1Wp8v9CXhKysA5LNe600wVwE194Io3pdkff1N3YX%2BEV30Bi2ouVEcLB%2FHZb952vTU%2FPmjLPHJBpaijtHlq13apjlnCp%2B%2BMKknBHswaDiBYA5ToAG2SqtfHb9bwL0p&X-Amz-Signature=90fbc982d4370283370cd9d3ab65ae5d8cdb1e09f1cc997100ab7786f2437566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP6RMIRA%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7uguEjK5NrIbY9TPEvMQgl%2Bj0%2FNFHDY%2B1p7NuRqIt5AiEAolpTfaAbJdJeX3HbBAheP3TssYEDdQLb6Kq7SxQhOUIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTOLqLiUmaX%2FXtF7SrcA%2Fb3o9izxMt8vFhNlFmmyoJv0egN20c2bFnY8wJetY%2FlJGMD4DIudDmbkQtHfX48uMI21YceLRoUIgf96ZsZWFV8srUv%2FHQi0dH9gyMHlxQFU05Ul2XQwDcb%2FgXeTfVovidVjrGIr3DfrndR8JKKTY0quhmCv%2BqEbShM56Mp6Cgtw%2BZ5%2FL9nO4MW4IVtmD1k7D4Pc3cf26voaZxqHQ7a1KSmCifk5JhjmplWcHSYe1WvN%2BrgiUUUVx3WVHjJHoTrX1KJScMn%2FcLpgh0P2%2BDpMfMmf0kEhGAB0uGHserVLKCK2WR%2Fd3AyPgx24ABK4BOUvZpRg6Bh6HCVF%2B1c1Z3tHPtY8t7nNDArbJhwvg9J7VryGmsrcw56h2WDhmM0ZhCiTKhPIo6%2FGttLQjAQ5SoZrFGHqNiLhjP3BwIRFuRy1BC9kh6bTPnqtUaqRVmGIwcaRFDJdJHHVYHU%2B48X3MZqPg%2BXfM7BSjx2xDiSAqUM5xighgds7vjDL1OsKdOghLl4QahoRj9lSgsLz%2BCcrCpnMgMUMtt9NC4%2FXVIZSnByBFrpTKx0wkTHMy30ceFY9FguMOMz%2BsOtIaAxeSojQpNV6bggsOaFAMCAjeAspzBTGEDC%2BzKUH%2Fu5L%2FvqJdHhMJDi0coGOqUBZSYQVlVXPowoMiYqbXqOkz5hWGnXexCS7H7vYIPMHXg%2Fo3RmLNQNV%2Fsa%2FleDCu6grNLM9ZlC4Xti4LBgKOC9VfT%2Bb%2BdN9j8sSJCQwQqZoRlV7Fs9LpAdV%2BEePp9RO2RHTRsFhEcHZZCM4tAn%2Fsg563XBDXuH7F58%2BH%2BOK51Y1TpyodbDqfMrsaElel%2BJZ4aIK%2FrjFyuVT9Hztji3wE6k8Lv6pXkQ&X-Amz-Signature=494e3c2e3d8e1ca4c44d09392b8efc67180bbc3763d4842e1da39d6504e61f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP6RMIRA%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7uguEjK5NrIbY9TPEvMQgl%2Bj0%2FNFHDY%2B1p7NuRqIt5AiEAolpTfaAbJdJeX3HbBAheP3TssYEDdQLb6Kq7SxQhOUIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTOLqLiUmaX%2FXtF7SrcA%2Fb3o9izxMt8vFhNlFmmyoJv0egN20c2bFnY8wJetY%2FlJGMD4DIudDmbkQtHfX48uMI21YceLRoUIgf96ZsZWFV8srUv%2FHQi0dH9gyMHlxQFU05Ul2XQwDcb%2FgXeTfVovidVjrGIr3DfrndR8JKKTY0quhmCv%2BqEbShM56Mp6Cgtw%2BZ5%2FL9nO4MW4IVtmD1k7D4Pc3cf26voaZxqHQ7a1KSmCifk5JhjmplWcHSYe1WvN%2BrgiUUUVx3WVHjJHoTrX1KJScMn%2FcLpgh0P2%2BDpMfMmf0kEhGAB0uGHserVLKCK2WR%2Fd3AyPgx24ABK4BOUvZpRg6Bh6HCVF%2B1c1Z3tHPtY8t7nNDArbJhwvg9J7VryGmsrcw56h2WDhmM0ZhCiTKhPIo6%2FGttLQjAQ5SoZrFGHqNiLhjP3BwIRFuRy1BC9kh6bTPnqtUaqRVmGIwcaRFDJdJHHVYHU%2B48X3MZqPg%2BXfM7BSjx2xDiSAqUM5xighgds7vjDL1OsKdOghLl4QahoRj9lSgsLz%2BCcrCpnMgMUMtt9NC4%2FXVIZSnByBFrpTKx0wkTHMy30ceFY9FguMOMz%2BsOtIaAxeSojQpNV6bggsOaFAMCAjeAspzBTGEDC%2BzKUH%2Fu5L%2FvqJdHhMJDi0coGOqUBZSYQVlVXPowoMiYqbXqOkz5hWGnXexCS7H7vYIPMHXg%2Fo3RmLNQNV%2Fsa%2FleDCu6grNLM9ZlC4Xti4LBgKOC9VfT%2Bb%2BdN9j8sSJCQwQqZoRlV7Fs9LpAdV%2BEePp9RO2RHTRsFhEcHZZCM4tAn%2Fsg563XBDXuH7F58%2BH%2BOK51Y1TpyodbDqfMrsaElel%2BJZ4aIK%2FrjFyuVT9Hztji3wE6k8Lv6pXkQ&X-Amz-Signature=08ac3eb2ce6d93963e173d59639f77037ff7b905de0f1ba675cd4b55987f5924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP6RMIRA%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7uguEjK5NrIbY9TPEvMQgl%2Bj0%2FNFHDY%2B1p7NuRqIt5AiEAolpTfaAbJdJeX3HbBAheP3TssYEDdQLb6Kq7SxQhOUIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTOLqLiUmaX%2FXtF7SrcA%2Fb3o9izxMt8vFhNlFmmyoJv0egN20c2bFnY8wJetY%2FlJGMD4DIudDmbkQtHfX48uMI21YceLRoUIgf96ZsZWFV8srUv%2FHQi0dH9gyMHlxQFU05Ul2XQwDcb%2FgXeTfVovidVjrGIr3DfrndR8JKKTY0quhmCv%2BqEbShM56Mp6Cgtw%2BZ5%2FL9nO4MW4IVtmD1k7D4Pc3cf26voaZxqHQ7a1KSmCifk5JhjmplWcHSYe1WvN%2BrgiUUUVx3WVHjJHoTrX1KJScMn%2FcLpgh0P2%2BDpMfMmf0kEhGAB0uGHserVLKCK2WR%2Fd3AyPgx24ABK4BOUvZpRg6Bh6HCVF%2B1c1Z3tHPtY8t7nNDArbJhwvg9J7VryGmsrcw56h2WDhmM0ZhCiTKhPIo6%2FGttLQjAQ5SoZrFGHqNiLhjP3BwIRFuRy1BC9kh6bTPnqtUaqRVmGIwcaRFDJdJHHVYHU%2B48X3MZqPg%2BXfM7BSjx2xDiSAqUM5xighgds7vjDL1OsKdOghLl4QahoRj9lSgsLz%2BCcrCpnMgMUMtt9NC4%2FXVIZSnByBFrpTKx0wkTHMy30ceFY9FguMOMz%2BsOtIaAxeSojQpNV6bggsOaFAMCAjeAspzBTGEDC%2BzKUH%2Fu5L%2FvqJdHhMJDi0coGOqUBZSYQVlVXPowoMiYqbXqOkz5hWGnXexCS7H7vYIPMHXg%2Fo3RmLNQNV%2Fsa%2FleDCu6grNLM9ZlC4Xti4LBgKOC9VfT%2Bb%2BdN9j8sSJCQwQqZoRlV7Fs9LpAdV%2BEePp9RO2RHTRsFhEcHZZCM4tAn%2Fsg563XBDXuH7F58%2BH%2BOK51Y1TpyodbDqfMrsaElel%2BJZ4aIK%2FrjFyuVT9Hztji3wE6k8Lv6pXkQ&X-Amz-Signature=4154e8f22baa2088f9db2b82d2ebf5ef805a3ef59e9fe6eb7478382b0d75a1f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J4UMNED%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx6y49lWGyaB18G%2FdFCBudbEr4VLfhmqpUAZAmRKCPDwIgYJjWgYHSzfbggXlytzi2lSXXUbICQ73RMJr8MtribG0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw2d6eeCoofDM%2BKOCrcA2p6qRbh6f7jNlNyLxZuznMnNV2PuSaHSVLYd9hTmz6IV%2BD24Vn6Dp%2FfGwKbE6ABrLWS86sRIGHpaxYvGcS4tBwBOVC9LhvITIcDGLTTMJXooHXNCyiUbxP%2FFTaGiMIutHzrA4oVBK9CZsQYRH%2FZ4AsykHU8wjEu2jllT0hXxvVhUkOES0Vxc8HrEnCkN0GIRBphNw6As6%2BZ8y63sTNHTEivwJvfeCwcJ8EQ5HAr1K8tapQlW3Gz%2FmVnC4p4pubAHqGR947x%2F8EgW08camhqC6Z4AQm2pZYrsahxf0K6UoY4DHGtlO9yw2NswKsWTYqB1OWPC0LO5X5djzH9SNmGFvc5X1b3W3EZLBuJjhvssRRfltSjOuANJCjAf%2BEEh0zWBfsVWaI8eLBebxoPj80PCUmD98Jku1i%2B2OMhS0IU6BfNDoD%2B0l3sebOqKcCbPAIK3sX9S6DNWqEygHa%2F0gbA8vgtwg2LiDRwfcavnwLE2IrVMHK%2BUvrMzEryXegkTQiTcQI2p%2BGRVIuMfZSpDiwyhUWSDQgKWk9fBlwbc8VL%2BPUVKYsvt0KjfJxiWFYVVGftKS39HE1nc1q9Tfn1R8%2FCQngzRRY6jGGAXI1O71OZUEJ%2BtmHxQLgHrAQDaOD1MOnl0coGOqUBwOoafCW9o0dQHISOCpWVTX0pA%2FzGzf1tmR%2Bn5jZq1lcB8vSViJOcPFpTYuDAZq%2F72eAGjqlb9OKZyZD3BtpgSUmzYgAiTXfXfsEGEHzNyaiTy1qbMAD48z3AnE0xyhMGhi4923e%2FrF8xcXoDnZDUDLenhHwaHGYYTB6U1Z6Cm4aN3vYXqRni10zhU09gTtrTvSAMOZ6mkWn8crglfJ2cMjmCaohQ&X-Amz-Signature=7ef8c7a32e2f3f8c224d2c8f9cbf9d566ff94c5ee74c8dfb184c4d8ebbff438e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J4UMNED%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx6y49lWGyaB18G%2FdFCBudbEr4VLfhmqpUAZAmRKCPDwIgYJjWgYHSzfbggXlytzi2lSXXUbICQ73RMJr8MtribG0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw2d6eeCoofDM%2BKOCrcA2p6qRbh6f7jNlNyLxZuznMnNV2PuSaHSVLYd9hTmz6IV%2BD24Vn6Dp%2FfGwKbE6ABrLWS86sRIGHpaxYvGcS4tBwBOVC9LhvITIcDGLTTMJXooHXNCyiUbxP%2FFTaGiMIutHzrA4oVBK9CZsQYRH%2FZ4AsykHU8wjEu2jllT0hXxvVhUkOES0Vxc8HrEnCkN0GIRBphNw6As6%2BZ8y63sTNHTEivwJvfeCwcJ8EQ5HAr1K8tapQlW3Gz%2FmVnC4p4pubAHqGR947x%2F8EgW08camhqC6Z4AQm2pZYrsahxf0K6UoY4DHGtlO9yw2NswKsWTYqB1OWPC0LO5X5djzH9SNmGFvc5X1b3W3EZLBuJjhvssRRfltSjOuANJCjAf%2BEEh0zWBfsVWaI8eLBebxoPj80PCUmD98Jku1i%2B2OMhS0IU6BfNDoD%2B0l3sebOqKcCbPAIK3sX9S6DNWqEygHa%2F0gbA8vgtwg2LiDRwfcavnwLE2IrVMHK%2BUvrMzEryXegkTQiTcQI2p%2BGRVIuMfZSpDiwyhUWSDQgKWk9fBlwbc8VL%2BPUVKYsvt0KjfJxiWFYVVGftKS39HE1nc1q9Tfn1R8%2FCQngzRRY6jGGAXI1O71OZUEJ%2BtmHxQLgHrAQDaOD1MOnl0coGOqUBwOoafCW9o0dQHISOCpWVTX0pA%2FzGzf1tmR%2Bn5jZq1lcB8vSViJOcPFpTYuDAZq%2F72eAGjqlb9OKZyZD3BtpgSUmzYgAiTXfXfsEGEHzNyaiTy1qbMAD48z3AnE0xyhMGhi4923e%2FrF8xcXoDnZDUDLenhHwaHGYYTB6U1Z6Cm4aN3vYXqRni10zhU09gTtrTvSAMOZ6mkWn8crglfJ2cMjmCaohQ&X-Amz-Signature=e41994786850abbcdd0c136d2d45fdb3ea9aa0f641212e27fe2ab9cf67afb355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SM4EE2D%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaUv9QZgL%2F2501Y10p9qYOSGF8yRwUBdYLzF8lU37rqAiB2k7LJRD9ztCTmzpKFbNu1twirLrZqeqKtwcR%2B1HcDiyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIEps%2B2kJFQgvxJ4CKtwDoBGQ4dtJGIxk3Bgy66CUUCi5j%2FD5vsYBd96rBxZZzGLDUFsgNqtyX0y6EJisfb9rM8PB9svC7VqQRsLfQgek%2BSBEXllFwhBIjvSG6luIHveXcFOPmDjBDwqHzCBfTky3bmiADQSEH%2F37LFKiMYoUqvlmlqM%2F%2BBWxvEykWG0b3z0voRPAEufhcqYlLCo527J6ahUZAHGK9Y3PuhAyMmzXsW1ccTIpqDutIq68YjLaGwFoJHjt7%2FP8UFMyoJAT1OSq%2Fo4dm767Cbt%2Fy%2FS2vQdTCzs32WkrRkfYu8VbxzdeTtFicC9Kd17QvX8iwrAeFi1TCmHY78l90rS%2FD%2BNnMZplNCL17GWYvquQh6xX1MOQ2XlzUnA%2BNjNJfayvZ%2F4oL5INpVJBQwpBPd50TEPVJUqJNz1VxAZUEw84crEo9lv53LJ4CyBx6EoliWmmNU2HAU605IBuQ8PJPu7fhkZg1NQIiJdVOM0VGMBULNNX0NotXTA7%2FZkwyhICsvaArNYBvcqFtfRXJNR9DjGpNny4bwIpwajNPGSHrXX9v6xqlzwCPYbv%2FLM6RG%2BxprfZS7j8yFJw%2FTIEhEQE0PWe784HETKtMJqhUoJvYzogLduUzlVICL5SxbvNC4sXNLFcpNMwoeLRygY6pgHQjT8AfGhH32mMBZHLDDKJ4LHdVLKLKwaPFmDxmAGXQEIuVlr63v9WE4BDYNdcaNg%2FOm1YURSpeU7oEFivDjFQm%2FsYdRe3WAdzdRfhRR8EwWoW7lPLHlc13JWgCjNWKgh9L4U7bsZ%2BGqgtl1nTqmX9gwbdin6z2AWktp5ujjsIu2FsZXsFg%2FV%2FzJZpbLQuLztA8NhMbqgo9h7KMvMowioU7MsnqK45&X-Amz-Signature=aa1a41bd045ea0833a8e19a0d5b6511757591b74a827db361f3f4566123b6d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SM4EE2D%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaUv9QZgL%2F2501Y10p9qYOSGF8yRwUBdYLzF8lU37rqAiB2k7LJRD9ztCTmzpKFbNu1twirLrZqeqKtwcR%2B1HcDiyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIEps%2B2kJFQgvxJ4CKtwDoBGQ4dtJGIxk3Bgy66CUUCi5j%2FD5vsYBd96rBxZZzGLDUFsgNqtyX0y6EJisfb9rM8PB9svC7VqQRsLfQgek%2BSBEXllFwhBIjvSG6luIHveXcFOPmDjBDwqHzCBfTky3bmiADQSEH%2F37LFKiMYoUqvlmlqM%2F%2BBWxvEykWG0b3z0voRPAEufhcqYlLCo527J6ahUZAHGK9Y3PuhAyMmzXsW1ccTIpqDutIq68YjLaGwFoJHjt7%2FP8UFMyoJAT1OSq%2Fo4dm767Cbt%2Fy%2FS2vQdTCzs32WkrRkfYu8VbxzdeTtFicC9Kd17QvX8iwrAeFi1TCmHY78l90rS%2FD%2BNnMZplNCL17GWYvquQh6xX1MOQ2XlzUnA%2BNjNJfayvZ%2F4oL5INpVJBQwpBPd50TEPVJUqJNz1VxAZUEw84crEo9lv53LJ4CyBx6EoliWmmNU2HAU605IBuQ8PJPu7fhkZg1NQIiJdVOM0VGMBULNNX0NotXTA7%2FZkwyhICsvaArNYBvcqFtfRXJNR9DjGpNny4bwIpwajNPGSHrXX9v6xqlzwCPYbv%2FLM6RG%2BxprfZS7j8yFJw%2FTIEhEQE0PWe784HETKtMJqhUoJvYzogLduUzlVICL5SxbvNC4sXNLFcpNMwoeLRygY6pgHQjT8AfGhH32mMBZHLDDKJ4LHdVLKLKwaPFmDxmAGXQEIuVlr63v9WE4BDYNdcaNg%2FOm1YURSpeU7oEFivDjFQm%2FsYdRe3WAdzdRfhRR8EwWoW7lPLHlc13JWgCjNWKgh9L4U7bsZ%2BGqgtl1nTqmX9gwbdin6z2AWktp5ujjsIu2FsZXsFg%2FV%2FzJZpbLQuLztA8NhMbqgo9h7KMvMowioU7MsnqK45&X-Amz-Signature=6dd94c219511f7f96d51f55f06093fa9dc8c68915ea03e36dcd1e11324315e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SM4EE2D%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaUv9QZgL%2F2501Y10p9qYOSGF8yRwUBdYLzF8lU37rqAiB2k7LJRD9ztCTmzpKFbNu1twirLrZqeqKtwcR%2B1HcDiyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIEps%2B2kJFQgvxJ4CKtwDoBGQ4dtJGIxk3Bgy66CUUCi5j%2FD5vsYBd96rBxZZzGLDUFsgNqtyX0y6EJisfb9rM8PB9svC7VqQRsLfQgek%2BSBEXllFwhBIjvSG6luIHveXcFOPmDjBDwqHzCBfTky3bmiADQSEH%2F37LFKiMYoUqvlmlqM%2F%2BBWxvEykWG0b3z0voRPAEufhcqYlLCo527J6ahUZAHGK9Y3PuhAyMmzXsW1ccTIpqDutIq68YjLaGwFoJHjt7%2FP8UFMyoJAT1OSq%2Fo4dm767Cbt%2Fy%2FS2vQdTCzs32WkrRkfYu8VbxzdeTtFicC9Kd17QvX8iwrAeFi1TCmHY78l90rS%2FD%2BNnMZplNCL17GWYvquQh6xX1MOQ2XlzUnA%2BNjNJfayvZ%2F4oL5INpVJBQwpBPd50TEPVJUqJNz1VxAZUEw84crEo9lv53LJ4CyBx6EoliWmmNU2HAU605IBuQ8PJPu7fhkZg1NQIiJdVOM0VGMBULNNX0NotXTA7%2FZkwyhICsvaArNYBvcqFtfRXJNR9DjGpNny4bwIpwajNPGSHrXX9v6xqlzwCPYbv%2FLM6RG%2BxprfZS7j8yFJw%2FTIEhEQE0PWe784HETKtMJqhUoJvYzogLduUzlVICL5SxbvNC4sXNLFcpNMwoeLRygY6pgHQjT8AfGhH32mMBZHLDDKJ4LHdVLKLKwaPFmDxmAGXQEIuVlr63v9WE4BDYNdcaNg%2FOm1YURSpeU7oEFivDjFQm%2FsYdRe3WAdzdRfhRR8EwWoW7lPLHlc13JWgCjNWKgh9L4U7bsZ%2BGqgtl1nTqmX9gwbdin6z2AWktp5ujjsIu2FsZXsFg%2FV%2FzJZpbLQuLztA8NhMbqgo9h7KMvMowioU7MsnqK45&X-Amz-Signature=e9b78b2f3e9b882840982337e656fdb66ce22b116d7b0166693270b9cfc3bb3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SM4EE2D%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaUv9QZgL%2F2501Y10p9qYOSGF8yRwUBdYLzF8lU37rqAiB2k7LJRD9ztCTmzpKFbNu1twirLrZqeqKtwcR%2B1HcDiyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIEps%2B2kJFQgvxJ4CKtwDoBGQ4dtJGIxk3Bgy66CUUCi5j%2FD5vsYBd96rBxZZzGLDUFsgNqtyX0y6EJisfb9rM8PB9svC7VqQRsLfQgek%2BSBEXllFwhBIjvSG6luIHveXcFOPmDjBDwqHzCBfTky3bmiADQSEH%2F37LFKiMYoUqvlmlqM%2F%2BBWxvEykWG0b3z0voRPAEufhcqYlLCo527J6ahUZAHGK9Y3PuhAyMmzXsW1ccTIpqDutIq68YjLaGwFoJHjt7%2FP8UFMyoJAT1OSq%2Fo4dm767Cbt%2Fy%2FS2vQdTCzs32WkrRkfYu8VbxzdeTtFicC9Kd17QvX8iwrAeFi1TCmHY78l90rS%2FD%2BNnMZplNCL17GWYvquQh6xX1MOQ2XlzUnA%2BNjNJfayvZ%2F4oL5INpVJBQwpBPd50TEPVJUqJNz1VxAZUEw84crEo9lv53LJ4CyBx6EoliWmmNU2HAU605IBuQ8PJPu7fhkZg1NQIiJdVOM0VGMBULNNX0NotXTA7%2FZkwyhICsvaArNYBvcqFtfRXJNR9DjGpNny4bwIpwajNPGSHrXX9v6xqlzwCPYbv%2FLM6RG%2BxprfZS7j8yFJw%2FTIEhEQE0PWe784HETKtMJqhUoJvYzogLduUzlVICL5SxbvNC4sXNLFcpNMwoeLRygY6pgHQjT8AfGhH32mMBZHLDDKJ4LHdVLKLKwaPFmDxmAGXQEIuVlr63v9WE4BDYNdcaNg%2FOm1YURSpeU7oEFivDjFQm%2FsYdRe3WAdzdRfhRR8EwWoW7lPLHlc13JWgCjNWKgh9L4U7bsZ%2BGqgtl1nTqmX9gwbdin6z2AWktp5ujjsIu2FsZXsFg%2FV%2FzJZpbLQuLztA8NhMbqgo9h7KMvMowioU7MsnqK45&X-Amz-Signature=803736cd38c5f3bd4d5687fb881c826eaba37e7381e14cf5e0952917a0ddd01b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SM4EE2D%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaUv9QZgL%2F2501Y10p9qYOSGF8yRwUBdYLzF8lU37rqAiB2k7LJRD9ztCTmzpKFbNu1twirLrZqeqKtwcR%2B1HcDiyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIEps%2B2kJFQgvxJ4CKtwDoBGQ4dtJGIxk3Bgy66CUUCi5j%2FD5vsYBd96rBxZZzGLDUFsgNqtyX0y6EJisfb9rM8PB9svC7VqQRsLfQgek%2BSBEXllFwhBIjvSG6luIHveXcFOPmDjBDwqHzCBfTky3bmiADQSEH%2F37LFKiMYoUqvlmlqM%2F%2BBWxvEykWG0b3z0voRPAEufhcqYlLCo527J6ahUZAHGK9Y3PuhAyMmzXsW1ccTIpqDutIq68YjLaGwFoJHjt7%2FP8UFMyoJAT1OSq%2Fo4dm767Cbt%2Fy%2FS2vQdTCzs32WkrRkfYu8VbxzdeTtFicC9Kd17QvX8iwrAeFi1TCmHY78l90rS%2FD%2BNnMZplNCL17GWYvquQh6xX1MOQ2XlzUnA%2BNjNJfayvZ%2F4oL5INpVJBQwpBPd50TEPVJUqJNz1VxAZUEw84crEo9lv53LJ4CyBx6EoliWmmNU2HAU605IBuQ8PJPu7fhkZg1NQIiJdVOM0VGMBULNNX0NotXTA7%2FZkwyhICsvaArNYBvcqFtfRXJNR9DjGpNny4bwIpwajNPGSHrXX9v6xqlzwCPYbv%2FLM6RG%2BxprfZS7j8yFJw%2FTIEhEQE0PWe784HETKtMJqhUoJvYzogLduUzlVICL5SxbvNC4sXNLFcpNMwoeLRygY6pgHQjT8AfGhH32mMBZHLDDKJ4LHdVLKLKwaPFmDxmAGXQEIuVlr63v9WE4BDYNdcaNg%2FOm1YURSpeU7oEFivDjFQm%2FsYdRe3WAdzdRfhRR8EwWoW7lPLHlc13JWgCjNWKgh9L4U7bsZ%2BGqgtl1nTqmX9gwbdin6z2AWktp5ujjsIu2FsZXsFg%2FV%2FzJZpbLQuLztA8NhMbqgo9h7KMvMowioU7MsnqK45&X-Amz-Signature=017ec869376879b56b4715c7195c03258997de194f25d4170b4492ee9963399e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP47VI6Y%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T040703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh%2F0V18LRGjjxooXDw3BPCxN99Bp0ni7V87OZJvPZL8AIgN6lJ9xmxSsBltn25LJiomME0UzNWLlip170%2FxGlweBoqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTtL6dYLcFeic5YoCrcA3chwtaTiwCC%2B0Mh88ZVLDnlu3ecfvqvVhRC1h7aGwxHG5Lrqp1Q8zTJQeFzNmTm7dLqUNmjYHReMbjg%2FsqZ80KDHMy8LQPHlkaenTrcpnMFkVJJuDa0%2B6WPl%2FZqDDWvkR69QzoE8j17FjvU6Hti89IZq64kYlZ2ucXZIT8qtoljqdBc%2FxvqEBnc2FKW5C5BMy4smZBB1n6lHVL21FhZb1%2B92AHeSqoJsvKNQPpZ7gBq7EP66NcClfNPoK9x4ew36otPOAS33LzvTSYRcRdRLO7f5GdUaG27FiUZwmqPEAvB%2BFMXKztuRIuIfof7EASsnRBvi7zyQgrynpUCHK%2F0KJKCrRPdIhRyUHioZc%2BVaDwGryo940U2MRLwmeeg8PVEBQ7WKq2n9FMv2zBAEcBWXOKGrKtQcpRmdFa76d4Lp9NRdIVHdohM9iZIzKSnv7rUEbvR%2FYAY3HCFchVr5SSgZXB9mZtO93HOAtUSOroc3rUVmB5ehKvfbfRccGzXZah27SarZrMb9bZcmMoYkgKJJpxOASP%2BgD5P8%2Bcx0PhQPOgecVOgd1PyKS1dkMLgdh9LDkJ1AlErI3uHt5pRwI0JREH%2FwVtRQoRxm8fV5ut%2B8A5r2U8Y4OYM8CHntYvUMMDj0coGOqUB2cYxwyV%2Blmq%2F8LzVoCGQYgMOqdW%2BV8iE9q63%2Bk%2F5T9ro%2BQSD1TPCD9Ox5wiBZqlD3r3CyVdKJ%2FXX4PP7vLO59HOK3g%2FxdtkNSN8gqUVZr%2BuQEm3%2Bec3xvo%2BmYWl1ciy43evpTRmijVfGDqlO2xRgjoUfUwapShDNZsTbqJ1fbO5uNjp6iNl0Xk%2ByNK6dPDunXA%2BIf2GUbN4fjk3XZybyye5n%2F1KD&X-Amz-Signature=a24a048cb3781f1a1d9cf13242d8ab18c38d77b2b388bcca8503ce173a765953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

