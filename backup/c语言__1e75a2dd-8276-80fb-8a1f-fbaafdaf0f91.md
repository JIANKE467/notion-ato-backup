
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STBG2T6S%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuHbbmdfV%2F6fHzo4d25iQEkGYID0P7HMJ1RsJw5P0uSAiEAlf8BkMzSXsk9maqNFYhiFHeaxLvqtDMDPjmNe%2B05YoIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIs8wN0wD%2FL3x7hQKircA%2FktMS4%2FoR84Gl93HWeowh58Q5wAi7nEcyxfCbwPzwNLSrRmQ6TOU4%2FQciLvGI2mWu4ygTTL%2FBy79C9%2FasUi8xv24%2FOSu3b99r77tlJz4ryye%2BiXhNehITg3WPVRixmy9sFRkPBjNtpb9dbeFz71Xxv6%2FT8Xs87L%2BPPS%2F4Df92jh7dSfzNFMKXopPnqswoKY5qqWDQKmbKoi0FphOUeLc3LiB6xSvfl4T%2BO55AxQ8ko6womrCW9wUMLZl0KtRXI8pUDwf8FKkR5wlMMc3W12ZA%2BUlQycU7AnNaqdnelySIVhjDtp4f499IFiBBHL0Cs8nWuly3nIzkWrQpVD6eZbICw0bGstgmA%2Be2SnRWFYFEWCc7gdm2vB5qZlBelhfjUrYEzeCDp%2Firw1AZLzivUPZhPUXnJS7CoiKMFH69ZT42xti9MwMX%2FP5doON4uM7ytXeyjEq%2Fr7s4vjpGaUQBfhCVwLpXGTm3GZ3qJgnAcjeT2h7KyKYsjcbKqlOPn%2FgUY1BRrlIVQtVvNS0L2qbAYsQVmQjXaeW5Frk82VpgGzBt%2FxPcAo6dcqS%2BmMJpT1EN6pmL6RuwN%2BdlU1sI4GBsOiY5Q%2BS09p69DlpN2wJAo5LJCC3vxyAa7n1iQYe0thMLTwjcoGOqUB9A63rlGlS2fZaD43T3VGIMvkF1mCnut9zN%2FXyn5yUMycfkIj79v74m515Zh4FAtdhlCdGIg4H6wSLsdmSyrzo3AUcZOOIidm2%2F7ulkzk8uYcolOdUGpmiUdjwzXDV7jwVYp%2FNmIcv48GI6B%2FFbhU4xStPOaUj2N9TyPu9Q2o1Eqgo%2F1HUnJflcRDy2HM1XDOY58HtexIfcRZ%2F9GSCS6pr0uXvukV&X-Amz-Signature=a614dd6db8e3c6292dd76d09eb06b1b255d6a6fd6a7fc927e7981b52231dda11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5JLOEF%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqbG%2B48uNuw3kkORyXW96NktWAIUc5InTtLbkoHg71GAiEA%2BFbYgcKJCA9R2QEjxcxKDF1i%2BjCp%2F8cpCyYMOUEx%2Fb4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMk8hdIJyfL1E7iOSircAzSz1jihLQOuzGwUVA2qBX4NYVZtep5NkWl7Ry%2FITAoIRkm4Nz3%2FzqcdYalKqtWzJcyn9oQjSHIvN0FmSe%2FTIVYS5kmT7HNcnDUURooqtKuFsokDmY303HY0a1SJOVUCzX5G3IkH3ZppVFXrVA1YwBDSlICbbp3rSyFpOKaA2ZA%2FJLdyXKFYzE1tPa1q8eZzn0gBN%2BQBFLFaM4Mx2%2BGbTsZw%2FaObVTeF8zdjK%2FUbyTAI7rL64rBhBqUT5Q7OpAc%2FFR6Vefwyx2wUDesldm9EBLImTsnnmDQ4nTHGVX65bfYAUF1IFWs3tNxDEkiJnK%2BRKhVaINe9ZUSFRTFg5Veo0EBrodwjzMEGpps85MaAqDs%2BXiRF7pxErCgHEy6QAIY4ZHMbsugQ5gIT%2FPSfftw4MxqFUPAm7UeUOfE6G0t2wCn946fmjzbcLbzc1sgG%2Bc881AilUd1TbiMxFA7tyhFQnPtW6JmukG3X1N9sY%2FL7YJ8gkNUiBHwzF5fH3MB0eX7B3VSFjnVHDzzmpIOG6wVAF5FFUo9U0rCu6GKa1ZDqDjvJ8%2Bxbmr0he4wA%2Bk0m6NlmopLrEWGswgUBJKzNAoCAzO4GcGEDHBNnY4Qe0zHBFlOoaHHTqawYlu6PXhI2MJ3xjcoGOqUB7RnPmzT5aIXzDcTRo8VAPTAJ6%2F75QrSi1q9oP9K8UyGIrP4lsMj1WDL4woz2zEhABf5Vj6n5vTSoqgMdQ4w4%2FhiKbNKDAN%2BcdTow5vvpx%2FfRyCaRl0r7g%2FKc3Dvb3gUAHC7LW95N1dCZLsEbgUYFlZYZjNAk1ORC9w3M0fvZnv97mRSOfKa3DiJXZQJ1wQVREU6uQJQR04Vud%2B82uQ0YPjF%2F1stV&X-Amz-Signature=dd8c2ee768a22f9c90943f9fbc4f092d4e6bc640449e4627aa47d410f919394f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5JLOEF%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqbG%2B48uNuw3kkORyXW96NktWAIUc5InTtLbkoHg71GAiEA%2BFbYgcKJCA9R2QEjxcxKDF1i%2BjCp%2F8cpCyYMOUEx%2Fb4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMk8hdIJyfL1E7iOSircAzSz1jihLQOuzGwUVA2qBX4NYVZtep5NkWl7Ry%2FITAoIRkm4Nz3%2FzqcdYalKqtWzJcyn9oQjSHIvN0FmSe%2FTIVYS5kmT7HNcnDUURooqtKuFsokDmY303HY0a1SJOVUCzX5G3IkH3ZppVFXrVA1YwBDSlICbbp3rSyFpOKaA2ZA%2FJLdyXKFYzE1tPa1q8eZzn0gBN%2BQBFLFaM4Mx2%2BGbTsZw%2FaObVTeF8zdjK%2FUbyTAI7rL64rBhBqUT5Q7OpAc%2FFR6Vefwyx2wUDesldm9EBLImTsnnmDQ4nTHGVX65bfYAUF1IFWs3tNxDEkiJnK%2BRKhVaINe9ZUSFRTFg5Veo0EBrodwjzMEGpps85MaAqDs%2BXiRF7pxErCgHEy6QAIY4ZHMbsugQ5gIT%2FPSfftw4MxqFUPAm7UeUOfE6G0t2wCn946fmjzbcLbzc1sgG%2Bc881AilUd1TbiMxFA7tyhFQnPtW6JmukG3X1N9sY%2FL7YJ8gkNUiBHwzF5fH3MB0eX7B3VSFjnVHDzzmpIOG6wVAF5FFUo9U0rCu6GKa1ZDqDjvJ8%2Bxbmr0he4wA%2Bk0m6NlmopLrEWGswgUBJKzNAoCAzO4GcGEDHBNnY4Qe0zHBFlOoaHHTqawYlu6PXhI2MJ3xjcoGOqUB7RnPmzT5aIXzDcTRo8VAPTAJ6%2F75QrSi1q9oP9K8UyGIrP4lsMj1WDL4woz2zEhABf5Vj6n5vTSoqgMdQ4w4%2FhiKbNKDAN%2BcdTow5vvpx%2FfRyCaRl0r7g%2FKc3Dvb3gUAHC7LW95N1dCZLsEbgUYFlZYZjNAk1ORC9w3M0fvZnv97mRSOfKa3DiJXZQJ1wQVREU6uQJQR04Vud%2B82uQ0YPjF%2F1stV&X-Amz-Signature=7ee5d7d809c9c8f16520729cb9905681f7b8c7beee6d96aa40d3a01aec41257a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWAA5F4%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQHBVO31GsFvx4jwt3s1xqVGN65xgOgP6hUJYj0p%2FgyAiEAusrtxiIRXmh3UB4v8FzU2oGdgDl0PsyWKxEWYU%2B1WskqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF40g8te1Y1Ab5hB3yrcA3KAdTJvjfJgjLJ4VHvvgaBh5yVOgYCZQl7NmpMXs3qDyflwNohN%2BLLs3Iz0zgyoxjgvNlyLGgt53pO%2FjL6A%2B48%2Fh46CUlccnhy0ayvm25E0BpbfgczrIfdUDFmbqVOAeh8ve3a%2BHYXpO8ej3jDiQZwzI53HgHBKlSvgGLAS2TQ6tZODIqTJVnGh1LyXuGyGRzkwPNXO6uJ9JZ1gtiG3XbM7YWi2yTKS0QuXRSGxTvRdqS9%2FKLFJ3GCgV5UF%2B7kmTRY7dPbYbEzVuEKc1keT8TEEdbRojP07hqTJWVcva1qzzLKWVsPsbVHwcxIaT%2FPdYb2jedPx8hyAvVWUsULeoaIpFgCVrkGegelYeMEOnCcJCcFcracxK7rSdPDW0Xc%2B2LiadR6qNMjfqoXrWygQVrhNfFNMaEIOPb06ZnCwsha8ugm1iUgNHDA4qJWXdfjMVfqKi%2BLechWZJmjGJETAExbMEzg9qrOkxuiSL5X74JO9zUIXrCCHnp5NPdcAJER2ahw3HZcMO3dKi7pmDcuMuyJF7qxAhO6e1GDaQBiGtoxJI740cVQJe7jKiK2O5ZSaOqpItCFJaNBG6B2CoAmnzgYSPeytkEOmwbVkiKd%2F07fe9pIMKQnhWWvx31%2BDMLrwjcoGOqUBjLqGMBz5OV%2BE519OX9zMPuqA3Y%2FAjJwsGmyOs789oyYR5E4zJozIOp72YWh3tIRe0Vqjve5zl3KppBwanSwK4aqSto7Nz6rodAYoqNS5o%2FbKoOUxPlP64950TAtxNpZc0zmDHb%2F7ZJ7qiAP2Lv2Z4himXz1YlWdKDUR3MwdLsm5ujN4f83Ua54k6SKNfxQFgd0zRmzkM%2BEXiZyl8EqOMsjU%2BJoya&X-Amz-Signature=5b6858e829b8e0b9b38da2f7b84292c8ed59dd71593139de6b343fb149c8f916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWAA5F4%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQHBVO31GsFvx4jwt3s1xqVGN65xgOgP6hUJYj0p%2FgyAiEAusrtxiIRXmh3UB4v8FzU2oGdgDl0PsyWKxEWYU%2B1WskqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF40g8te1Y1Ab5hB3yrcA3KAdTJvjfJgjLJ4VHvvgaBh5yVOgYCZQl7NmpMXs3qDyflwNohN%2BLLs3Iz0zgyoxjgvNlyLGgt53pO%2FjL6A%2B48%2Fh46CUlccnhy0ayvm25E0BpbfgczrIfdUDFmbqVOAeh8ve3a%2BHYXpO8ej3jDiQZwzI53HgHBKlSvgGLAS2TQ6tZODIqTJVnGh1LyXuGyGRzkwPNXO6uJ9JZ1gtiG3XbM7YWi2yTKS0QuXRSGxTvRdqS9%2FKLFJ3GCgV5UF%2B7kmTRY7dPbYbEzVuEKc1keT8TEEdbRojP07hqTJWVcva1qzzLKWVsPsbVHwcxIaT%2FPdYb2jedPx8hyAvVWUsULeoaIpFgCVrkGegelYeMEOnCcJCcFcracxK7rSdPDW0Xc%2B2LiadR6qNMjfqoXrWygQVrhNfFNMaEIOPb06ZnCwsha8ugm1iUgNHDA4qJWXdfjMVfqKi%2BLechWZJmjGJETAExbMEzg9qrOkxuiSL5X74JO9zUIXrCCHnp5NPdcAJER2ahw3HZcMO3dKi7pmDcuMuyJF7qxAhO6e1GDaQBiGtoxJI740cVQJe7jKiK2O5ZSaOqpItCFJaNBG6B2CoAmnzgYSPeytkEOmwbVkiKd%2F07fe9pIMKQnhWWvx31%2BDMLrwjcoGOqUBjLqGMBz5OV%2BE519OX9zMPuqA3Y%2FAjJwsGmyOs789oyYR5E4zJozIOp72YWh3tIRe0Vqjve5zl3KppBwanSwK4aqSto7Nz6rodAYoqNS5o%2FbKoOUxPlP64950TAtxNpZc0zmDHb%2F7ZJ7qiAP2Lv2Z4himXz1YlWdKDUR3MwdLsm5ujN4f83Ua54k6SKNfxQFgd0zRmzkM%2BEXiZyl8EqOMsjU%2BJoya&X-Amz-Signature=93ea47b423df549c15e0e9b6220e01bde0f991778566ae99614682b5ccfad246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWAA5F4%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQHBVO31GsFvx4jwt3s1xqVGN65xgOgP6hUJYj0p%2FgyAiEAusrtxiIRXmh3UB4v8FzU2oGdgDl0PsyWKxEWYU%2B1WskqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF40g8te1Y1Ab5hB3yrcA3KAdTJvjfJgjLJ4VHvvgaBh5yVOgYCZQl7NmpMXs3qDyflwNohN%2BLLs3Iz0zgyoxjgvNlyLGgt53pO%2FjL6A%2B48%2Fh46CUlccnhy0ayvm25E0BpbfgczrIfdUDFmbqVOAeh8ve3a%2BHYXpO8ej3jDiQZwzI53HgHBKlSvgGLAS2TQ6tZODIqTJVnGh1LyXuGyGRzkwPNXO6uJ9JZ1gtiG3XbM7YWi2yTKS0QuXRSGxTvRdqS9%2FKLFJ3GCgV5UF%2B7kmTRY7dPbYbEzVuEKc1keT8TEEdbRojP07hqTJWVcva1qzzLKWVsPsbVHwcxIaT%2FPdYb2jedPx8hyAvVWUsULeoaIpFgCVrkGegelYeMEOnCcJCcFcracxK7rSdPDW0Xc%2B2LiadR6qNMjfqoXrWygQVrhNfFNMaEIOPb06ZnCwsha8ugm1iUgNHDA4qJWXdfjMVfqKi%2BLechWZJmjGJETAExbMEzg9qrOkxuiSL5X74JO9zUIXrCCHnp5NPdcAJER2ahw3HZcMO3dKi7pmDcuMuyJF7qxAhO6e1GDaQBiGtoxJI740cVQJe7jKiK2O5ZSaOqpItCFJaNBG6B2CoAmnzgYSPeytkEOmwbVkiKd%2F07fe9pIMKQnhWWvx31%2BDMLrwjcoGOqUBjLqGMBz5OV%2BE519OX9zMPuqA3Y%2FAjJwsGmyOs789oyYR5E4zJozIOp72YWh3tIRe0Vqjve5zl3KppBwanSwK4aqSto7Nz6rodAYoqNS5o%2FbKoOUxPlP64950TAtxNpZc0zmDHb%2F7ZJ7qiAP2Lv2Z4himXz1YlWdKDUR3MwdLsm5ujN4f83Ua54k6SKNfxQFgd0zRmzkM%2BEXiZyl8EqOMsjU%2BJoya&X-Amz-Signature=b5f534cb26726a0af17d0ab049366f40b0936af6ba7b069b3a698993ce2af831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWAA5F4%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQHBVO31GsFvx4jwt3s1xqVGN65xgOgP6hUJYj0p%2FgyAiEAusrtxiIRXmh3UB4v8FzU2oGdgDl0PsyWKxEWYU%2B1WskqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF40g8te1Y1Ab5hB3yrcA3KAdTJvjfJgjLJ4VHvvgaBh5yVOgYCZQl7NmpMXs3qDyflwNohN%2BLLs3Iz0zgyoxjgvNlyLGgt53pO%2FjL6A%2B48%2Fh46CUlccnhy0ayvm25E0BpbfgczrIfdUDFmbqVOAeh8ve3a%2BHYXpO8ej3jDiQZwzI53HgHBKlSvgGLAS2TQ6tZODIqTJVnGh1LyXuGyGRzkwPNXO6uJ9JZ1gtiG3XbM7YWi2yTKS0QuXRSGxTvRdqS9%2FKLFJ3GCgV5UF%2B7kmTRY7dPbYbEzVuEKc1keT8TEEdbRojP07hqTJWVcva1qzzLKWVsPsbVHwcxIaT%2FPdYb2jedPx8hyAvVWUsULeoaIpFgCVrkGegelYeMEOnCcJCcFcracxK7rSdPDW0Xc%2B2LiadR6qNMjfqoXrWygQVrhNfFNMaEIOPb06ZnCwsha8ugm1iUgNHDA4qJWXdfjMVfqKi%2BLechWZJmjGJETAExbMEzg9qrOkxuiSL5X74JO9zUIXrCCHnp5NPdcAJER2ahw3HZcMO3dKi7pmDcuMuyJF7qxAhO6e1GDaQBiGtoxJI740cVQJe7jKiK2O5ZSaOqpItCFJaNBG6B2CoAmnzgYSPeytkEOmwbVkiKd%2F07fe9pIMKQnhWWvx31%2BDMLrwjcoGOqUBjLqGMBz5OV%2BE519OX9zMPuqA3Y%2FAjJwsGmyOs789oyYR5E4zJozIOp72YWh3tIRe0Vqjve5zl3KppBwanSwK4aqSto7Nz6rodAYoqNS5o%2FbKoOUxPlP64950TAtxNpZc0zmDHb%2F7ZJ7qiAP2Lv2Z4himXz1YlWdKDUR3MwdLsm5ujN4f83Ua54k6SKNfxQFgd0zRmzkM%2BEXiZyl8EqOMsjU%2BJoya&X-Amz-Signature=5bd30051f6ba9f21463b654ca86109d9c682a622781d7e9ac0972b8133b2b57d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWAA5F4%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQHBVO31GsFvx4jwt3s1xqVGN65xgOgP6hUJYj0p%2FgyAiEAusrtxiIRXmh3UB4v8FzU2oGdgDl0PsyWKxEWYU%2B1WskqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF40g8te1Y1Ab5hB3yrcA3KAdTJvjfJgjLJ4VHvvgaBh5yVOgYCZQl7NmpMXs3qDyflwNohN%2BLLs3Iz0zgyoxjgvNlyLGgt53pO%2FjL6A%2B48%2Fh46CUlccnhy0ayvm25E0BpbfgczrIfdUDFmbqVOAeh8ve3a%2BHYXpO8ej3jDiQZwzI53HgHBKlSvgGLAS2TQ6tZODIqTJVnGh1LyXuGyGRzkwPNXO6uJ9JZ1gtiG3XbM7YWi2yTKS0QuXRSGxTvRdqS9%2FKLFJ3GCgV5UF%2B7kmTRY7dPbYbEzVuEKc1keT8TEEdbRojP07hqTJWVcva1qzzLKWVsPsbVHwcxIaT%2FPdYb2jedPx8hyAvVWUsULeoaIpFgCVrkGegelYeMEOnCcJCcFcracxK7rSdPDW0Xc%2B2LiadR6qNMjfqoXrWygQVrhNfFNMaEIOPb06ZnCwsha8ugm1iUgNHDA4qJWXdfjMVfqKi%2BLechWZJmjGJETAExbMEzg9qrOkxuiSL5X74JO9zUIXrCCHnp5NPdcAJER2ahw3HZcMO3dKi7pmDcuMuyJF7qxAhO6e1GDaQBiGtoxJI740cVQJe7jKiK2O5ZSaOqpItCFJaNBG6B2CoAmnzgYSPeytkEOmwbVkiKd%2F07fe9pIMKQnhWWvx31%2BDMLrwjcoGOqUBjLqGMBz5OV%2BE519OX9zMPuqA3Y%2FAjJwsGmyOs789oyYR5E4zJozIOp72YWh3tIRe0Vqjve5zl3KppBwanSwK4aqSto7Nz6rodAYoqNS5o%2FbKoOUxPlP64950TAtxNpZc0zmDHb%2F7ZJ7qiAP2Lv2Z4himXz1YlWdKDUR3MwdLsm5ujN4f83Ua54k6SKNfxQFgd0zRmzkM%2BEXiZyl8EqOMsjU%2BJoya&X-Amz-Signature=52b0614b9565d6409a11c6732be0428a1a56d91afbb0dadb3f8312bab9ab6685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWAA5F4%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQHBVO31GsFvx4jwt3s1xqVGN65xgOgP6hUJYj0p%2FgyAiEAusrtxiIRXmh3UB4v8FzU2oGdgDl0PsyWKxEWYU%2B1WskqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF40g8te1Y1Ab5hB3yrcA3KAdTJvjfJgjLJ4VHvvgaBh5yVOgYCZQl7NmpMXs3qDyflwNohN%2BLLs3Iz0zgyoxjgvNlyLGgt53pO%2FjL6A%2B48%2Fh46CUlccnhy0ayvm25E0BpbfgczrIfdUDFmbqVOAeh8ve3a%2BHYXpO8ej3jDiQZwzI53HgHBKlSvgGLAS2TQ6tZODIqTJVnGh1LyXuGyGRzkwPNXO6uJ9JZ1gtiG3XbM7YWi2yTKS0QuXRSGxTvRdqS9%2FKLFJ3GCgV5UF%2B7kmTRY7dPbYbEzVuEKc1keT8TEEdbRojP07hqTJWVcva1qzzLKWVsPsbVHwcxIaT%2FPdYb2jedPx8hyAvVWUsULeoaIpFgCVrkGegelYeMEOnCcJCcFcracxK7rSdPDW0Xc%2B2LiadR6qNMjfqoXrWygQVrhNfFNMaEIOPb06ZnCwsha8ugm1iUgNHDA4qJWXdfjMVfqKi%2BLechWZJmjGJETAExbMEzg9qrOkxuiSL5X74JO9zUIXrCCHnp5NPdcAJER2ahw3HZcMO3dKi7pmDcuMuyJF7qxAhO6e1GDaQBiGtoxJI740cVQJe7jKiK2O5ZSaOqpItCFJaNBG6B2CoAmnzgYSPeytkEOmwbVkiKd%2F07fe9pIMKQnhWWvx31%2BDMLrwjcoGOqUBjLqGMBz5OV%2BE519OX9zMPuqA3Y%2FAjJwsGmyOs789oyYR5E4zJozIOp72YWh3tIRe0Vqjve5zl3KppBwanSwK4aqSto7Nz6rodAYoqNS5o%2FbKoOUxPlP64950TAtxNpZc0zmDHb%2F7ZJ7qiAP2Lv2Z4himXz1YlWdKDUR3MwdLsm5ujN4f83Ua54k6SKNfxQFgd0zRmzkM%2BEXiZyl8EqOMsjU%2BJoya&X-Amz-Signature=9c63c46573cf22227d048cb4b3c66f02bc4030e713c301fec2daa2fb137f5126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWAA5F4%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQHBVO31GsFvx4jwt3s1xqVGN65xgOgP6hUJYj0p%2FgyAiEAusrtxiIRXmh3UB4v8FzU2oGdgDl0PsyWKxEWYU%2B1WskqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF40g8te1Y1Ab5hB3yrcA3KAdTJvjfJgjLJ4VHvvgaBh5yVOgYCZQl7NmpMXs3qDyflwNohN%2BLLs3Iz0zgyoxjgvNlyLGgt53pO%2FjL6A%2B48%2Fh46CUlccnhy0ayvm25E0BpbfgczrIfdUDFmbqVOAeh8ve3a%2BHYXpO8ej3jDiQZwzI53HgHBKlSvgGLAS2TQ6tZODIqTJVnGh1LyXuGyGRzkwPNXO6uJ9JZ1gtiG3XbM7YWi2yTKS0QuXRSGxTvRdqS9%2FKLFJ3GCgV5UF%2B7kmTRY7dPbYbEzVuEKc1keT8TEEdbRojP07hqTJWVcva1qzzLKWVsPsbVHwcxIaT%2FPdYb2jedPx8hyAvVWUsULeoaIpFgCVrkGegelYeMEOnCcJCcFcracxK7rSdPDW0Xc%2B2LiadR6qNMjfqoXrWygQVrhNfFNMaEIOPb06ZnCwsha8ugm1iUgNHDA4qJWXdfjMVfqKi%2BLechWZJmjGJETAExbMEzg9qrOkxuiSL5X74JO9zUIXrCCHnp5NPdcAJER2ahw3HZcMO3dKi7pmDcuMuyJF7qxAhO6e1GDaQBiGtoxJI740cVQJe7jKiK2O5ZSaOqpItCFJaNBG6B2CoAmnzgYSPeytkEOmwbVkiKd%2F07fe9pIMKQnhWWvx31%2BDMLrwjcoGOqUBjLqGMBz5OV%2BE519OX9zMPuqA3Y%2FAjJwsGmyOs789oyYR5E4zJozIOp72YWh3tIRe0Vqjve5zl3KppBwanSwK4aqSto7Nz6rodAYoqNS5o%2FbKoOUxPlP64950TAtxNpZc0zmDHb%2F7ZJ7qiAP2Lv2Z4himXz1YlWdKDUR3MwdLsm5ujN4f83Ua54k6SKNfxQFgd0zRmzkM%2BEXiZyl8EqOMsjU%2BJoya&X-Amz-Signature=8794190c44eae1e2fc96008e1457c734e6fb32b64591f97efb39394e1f63deaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEH4FVLV%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVFUnGHwfB9czdYVc2VBhcah%2BAj0leR68Khoync3SCSAIgMK6Mq0cbvlLCc1xtUUxWNSNekbkdGe2whF2c%2BJ3ofPgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdrBIsq8S4IGHNe1SrcA%2BSJv4Dz1URsmhImUMeFRQpENqRBk0Q7blTU0btSJOBlDevgC%2BkilyoJMbXljc5JWnlBOQS%2FqkBJVGKSr36N%2Fz2wpC3%2Fz0m9e9wVyABop3lkj01JMMglhz7RTXJ9z1PE9YiwQ6HLiGXtUULztOgAFxl9DxTzEt9KPR7vpav71i3HoAtwb%2FuBSW6CVSvLI4HtjSKMGWZHUJj7DdGjulprJotgYk37hPQV7M6MXXgab5dWXnoTR0ECw%2F3tucntcHDKnxbHTWgpJ9unFt9hO27owcqSVPJ7%2FLG5wmi%2F%2BJLNK4B%2BPHViMcDQWqyB9LfWEl57oK7iwCWtkOu2GMJyBaB5vY%2FQZyltENDftfWZgpRbiERvr%2FZdBLxYvnV5EnvfK%2BjsuaFiBNfU6Bd7Azx8mh9oTPD2kEn5uSCQAUebrV8NT4sC4OkSW2VE6Q7%2BKPS%2BkzjYZk9Wxtl%2FLor%2BFH6Ddpe3dsiQhgjcn30cB3QFNd6W1HAGiWFxFigA4SbCmdxDjZS4HxKiBRxYgA9417NIb19koUgyTvR6wqSvo%2BMvULoSDLvfrjoO3NN2uG5LGduSCAjD9fbn%2Bd6e%2F159dQDiryulyikyKn5k%2BszHPZbSDOXp1tile2y7I5KTOLBidknpMJ7wjcoGOqUBBgSSfmxTjBvVoFkL1qKB1xkhghh6o3KthX%2Fe%2Ff1lJz4QqAC63iiD3s%2FuDhEEcADqsGzHLFrByheOfvLfgzCHFL1hLQRXGGCZ83lg2ivEQupfIMxlUbQ2Rome4qkiHdIpOJMlqzlBbkrzWbgNPOddUbKpT2ymGWjAbhNMp%2BSKOvvykFfSO1kDRwd6cdrtppNEjronL9543lM2Yut2epnbkrMZ0TpL&X-Amz-Signature=29dd6ea6d150e8b0e851f7aa2fff3e1e93724fd71020ff31f64f3d2e29b92ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEH4FVLV%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVFUnGHwfB9czdYVc2VBhcah%2BAj0leR68Khoync3SCSAIgMK6Mq0cbvlLCc1xtUUxWNSNekbkdGe2whF2c%2BJ3ofPgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdrBIsq8S4IGHNe1SrcA%2BSJv4Dz1URsmhImUMeFRQpENqRBk0Q7blTU0btSJOBlDevgC%2BkilyoJMbXljc5JWnlBOQS%2FqkBJVGKSr36N%2Fz2wpC3%2Fz0m9e9wVyABop3lkj01JMMglhz7RTXJ9z1PE9YiwQ6HLiGXtUULztOgAFxl9DxTzEt9KPR7vpav71i3HoAtwb%2FuBSW6CVSvLI4HtjSKMGWZHUJj7DdGjulprJotgYk37hPQV7M6MXXgab5dWXnoTR0ECw%2F3tucntcHDKnxbHTWgpJ9unFt9hO27owcqSVPJ7%2FLG5wmi%2F%2BJLNK4B%2BPHViMcDQWqyB9LfWEl57oK7iwCWtkOu2GMJyBaB5vY%2FQZyltENDftfWZgpRbiERvr%2FZdBLxYvnV5EnvfK%2BjsuaFiBNfU6Bd7Azx8mh9oTPD2kEn5uSCQAUebrV8NT4sC4OkSW2VE6Q7%2BKPS%2BkzjYZk9Wxtl%2FLor%2BFH6Ddpe3dsiQhgjcn30cB3QFNd6W1HAGiWFxFigA4SbCmdxDjZS4HxKiBRxYgA9417NIb19koUgyTvR6wqSvo%2BMvULoSDLvfrjoO3NN2uG5LGduSCAjD9fbn%2Bd6e%2F159dQDiryulyikyKn5k%2BszHPZbSDOXp1tile2y7I5KTOLBidknpMJ7wjcoGOqUBBgSSfmxTjBvVoFkL1qKB1xkhghh6o3KthX%2Fe%2Ff1lJz4QqAC63iiD3s%2FuDhEEcADqsGzHLFrByheOfvLfgzCHFL1hLQRXGGCZ83lg2ivEQupfIMxlUbQ2Rome4qkiHdIpOJMlqzlBbkrzWbgNPOddUbKpT2ymGWjAbhNMp%2BSKOvvykFfSO1kDRwd6cdrtppNEjronL9543lM2Yut2epnbkrMZ0TpL&X-Amz-Signature=821a8e7e6d9ac25e3bd580e28620a70c6d9d1f47abcc1f725b683b468591eefd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEH4FVLV%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVFUnGHwfB9czdYVc2VBhcah%2BAj0leR68Khoync3SCSAIgMK6Mq0cbvlLCc1xtUUxWNSNekbkdGe2whF2c%2BJ3ofPgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdrBIsq8S4IGHNe1SrcA%2BSJv4Dz1URsmhImUMeFRQpENqRBk0Q7blTU0btSJOBlDevgC%2BkilyoJMbXljc5JWnlBOQS%2FqkBJVGKSr36N%2Fz2wpC3%2Fz0m9e9wVyABop3lkj01JMMglhz7RTXJ9z1PE9YiwQ6HLiGXtUULztOgAFxl9DxTzEt9KPR7vpav71i3HoAtwb%2FuBSW6CVSvLI4HtjSKMGWZHUJj7DdGjulprJotgYk37hPQV7M6MXXgab5dWXnoTR0ECw%2F3tucntcHDKnxbHTWgpJ9unFt9hO27owcqSVPJ7%2FLG5wmi%2F%2BJLNK4B%2BPHViMcDQWqyB9LfWEl57oK7iwCWtkOu2GMJyBaB5vY%2FQZyltENDftfWZgpRbiERvr%2FZdBLxYvnV5EnvfK%2BjsuaFiBNfU6Bd7Azx8mh9oTPD2kEn5uSCQAUebrV8NT4sC4OkSW2VE6Q7%2BKPS%2BkzjYZk9Wxtl%2FLor%2BFH6Ddpe3dsiQhgjcn30cB3QFNd6W1HAGiWFxFigA4SbCmdxDjZS4HxKiBRxYgA9417NIb19koUgyTvR6wqSvo%2BMvULoSDLvfrjoO3NN2uG5LGduSCAjD9fbn%2Bd6e%2F159dQDiryulyikyKn5k%2BszHPZbSDOXp1tile2y7I5KTOLBidknpMJ7wjcoGOqUBBgSSfmxTjBvVoFkL1qKB1xkhghh6o3KthX%2Fe%2Ff1lJz4QqAC63iiD3s%2FuDhEEcADqsGzHLFrByheOfvLfgzCHFL1hLQRXGGCZ83lg2ivEQupfIMxlUbQ2Rome4qkiHdIpOJMlqzlBbkrzWbgNPOddUbKpT2ymGWjAbhNMp%2BSKOvvykFfSO1kDRwd6cdrtppNEjronL9543lM2Yut2epnbkrMZ0TpL&X-Amz-Signature=fafede79a7637cc94c529ff160d49eb5c1cb36fb83e4c782c49585d60b3e0e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEH4FVLV%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVFUnGHwfB9czdYVc2VBhcah%2BAj0leR68Khoync3SCSAIgMK6Mq0cbvlLCc1xtUUxWNSNekbkdGe2whF2c%2BJ3ofPgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdrBIsq8S4IGHNe1SrcA%2BSJv4Dz1URsmhImUMeFRQpENqRBk0Q7blTU0btSJOBlDevgC%2BkilyoJMbXljc5JWnlBOQS%2FqkBJVGKSr36N%2Fz2wpC3%2Fz0m9e9wVyABop3lkj01JMMglhz7RTXJ9z1PE9YiwQ6HLiGXtUULztOgAFxl9DxTzEt9KPR7vpav71i3HoAtwb%2FuBSW6CVSvLI4HtjSKMGWZHUJj7DdGjulprJotgYk37hPQV7M6MXXgab5dWXnoTR0ECw%2F3tucntcHDKnxbHTWgpJ9unFt9hO27owcqSVPJ7%2FLG5wmi%2F%2BJLNK4B%2BPHViMcDQWqyB9LfWEl57oK7iwCWtkOu2GMJyBaB5vY%2FQZyltENDftfWZgpRbiERvr%2FZdBLxYvnV5EnvfK%2BjsuaFiBNfU6Bd7Azx8mh9oTPD2kEn5uSCQAUebrV8NT4sC4OkSW2VE6Q7%2BKPS%2BkzjYZk9Wxtl%2FLor%2BFH6Ddpe3dsiQhgjcn30cB3QFNd6W1HAGiWFxFigA4SbCmdxDjZS4HxKiBRxYgA9417NIb19koUgyTvR6wqSvo%2BMvULoSDLvfrjoO3NN2uG5LGduSCAjD9fbn%2Bd6e%2F159dQDiryulyikyKn5k%2BszHPZbSDOXp1tile2y7I5KTOLBidknpMJ7wjcoGOqUBBgSSfmxTjBvVoFkL1qKB1xkhghh6o3KthX%2Fe%2Ff1lJz4QqAC63iiD3s%2FuDhEEcADqsGzHLFrByheOfvLfgzCHFL1hLQRXGGCZ83lg2ivEQupfIMxlUbQ2Rome4qkiHdIpOJMlqzlBbkrzWbgNPOddUbKpT2ymGWjAbhNMp%2BSKOvvykFfSO1kDRwd6cdrtppNEjronL9543lM2Yut2epnbkrMZ0TpL&X-Amz-Signature=0cf806472a0cd70013c8cda469b4616e3cc944c7233d997cdbfec13d919b6180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEH4FVLV%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVFUnGHwfB9czdYVc2VBhcah%2BAj0leR68Khoync3SCSAIgMK6Mq0cbvlLCc1xtUUxWNSNekbkdGe2whF2c%2BJ3ofPgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdrBIsq8S4IGHNe1SrcA%2BSJv4Dz1URsmhImUMeFRQpENqRBk0Q7blTU0btSJOBlDevgC%2BkilyoJMbXljc5JWnlBOQS%2FqkBJVGKSr36N%2Fz2wpC3%2Fz0m9e9wVyABop3lkj01JMMglhz7RTXJ9z1PE9YiwQ6HLiGXtUULztOgAFxl9DxTzEt9KPR7vpav71i3HoAtwb%2FuBSW6CVSvLI4HtjSKMGWZHUJj7DdGjulprJotgYk37hPQV7M6MXXgab5dWXnoTR0ECw%2F3tucntcHDKnxbHTWgpJ9unFt9hO27owcqSVPJ7%2FLG5wmi%2F%2BJLNK4B%2BPHViMcDQWqyB9LfWEl57oK7iwCWtkOu2GMJyBaB5vY%2FQZyltENDftfWZgpRbiERvr%2FZdBLxYvnV5EnvfK%2BjsuaFiBNfU6Bd7Azx8mh9oTPD2kEn5uSCQAUebrV8NT4sC4OkSW2VE6Q7%2BKPS%2BkzjYZk9Wxtl%2FLor%2BFH6Ddpe3dsiQhgjcn30cB3QFNd6W1HAGiWFxFigA4SbCmdxDjZS4HxKiBRxYgA9417NIb19koUgyTvR6wqSvo%2BMvULoSDLvfrjoO3NN2uG5LGduSCAjD9fbn%2Bd6e%2F159dQDiryulyikyKn5k%2BszHPZbSDOXp1tile2y7I5KTOLBidknpMJ7wjcoGOqUBBgSSfmxTjBvVoFkL1qKB1xkhghh6o3KthX%2Fe%2Ff1lJz4QqAC63iiD3s%2FuDhEEcADqsGzHLFrByheOfvLfgzCHFL1hLQRXGGCZ83lg2ivEQupfIMxlUbQ2Rome4qkiHdIpOJMlqzlBbkrzWbgNPOddUbKpT2ymGWjAbhNMp%2BSKOvvykFfSO1kDRwd6cdrtppNEjronL9543lM2Yut2epnbkrMZ0TpL&X-Amz-Signature=b46064e3d7caab5517833d9f717a8ad69c7cf1b021efeecfa0145f27a2c679b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SO2DNAD%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpbP%2FWq3JW5TS2Qs8%2BCORNpZbvZpmm6qKNXcLPOxz5CQIgaABG10Qh3eOIMgyY%2Fc3qTjhPJ9AWafM3dfIbi%2Fb2w4gqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLDE1F6dBnqs%2FYmayrcA8LnmQsjfvI3jr6Xl%2Bic%2FxK8exlPR14f9QfV1h1FVFtdIcKNMxga69aJsK6%2B%2BuQZcxwMrgpP6QRXaukcK6bDySKy%2FZUFPjNFf2arQdqPLsGvPFvKHVLKwonQDWF3uHvaDaI1R8ds7R3mLmWx7wwyhXFGDOtF6iAbAdFfrfqUoCYPc8rc4svuanoGF58maa5BwCipoWtfPKDZx9pYG%2BI9j7oncNkSWdFGZGEsY9v1u4jI%2F8j9YMNCDRhfsp01HaTIDWKsE8TaoAZl71Plc90m53SezlarSiYEuHnwEb3hYbrr4ADeesXcOzkU4HfklHbMpYGNaTWh446fhn48BLKMoMnP2m4Se51e6%2FuLEreqJSqx1mjCpo18WJf2znmCKVrDs24QH3BXNLXKzW6JWKVPFoxOxnczTBoTdco1SgqD9ybPzn%2FrDGH9dfLswS%2BmHlg9jR6kBiET4ehXzNO9hkKXfYx8ZG845cOFwiOD7Q3R9nYXjPxSTi19IQbnXMbaVLjQJ%2B2ge2ngbP2MU0iH7rdOpVn162r2Qc33wL04tzAn7zyrkB7XyL5S4N1RxCyCTowyUtjXH7vLtNu%2FF6i1OL12hdzkwR6ZoaHDg99z%2BLsX2CrnP%2Fr3gRRUSVv5xFsiMJ%2FwjcoGOqUBXeMjWNC%2BliDhLeeyAEv0wefiQBYzvzCTtI9Fm3H2BGygj5Ni%2Bx1dxYS%2FYQwyLuTUhBAjpdrHRFCRamt1FAof3lPdM4UrUee6%2FZzwNVzUw5H4VPV%2FYH4bVZfSEUfim7pb6O0bpEJcTOx9ED5D6YXcAoU1hpMX2Dm15%2Fo7ZJ2TPadak%2FzUI5QB12%2BeKV9WGoxvgtyXIzMvKt7DCOebrhgS5pzZZl0L&X-Amz-Signature=7626d428ccda83971e377658dd2f9a66c25eddb46170a570c229c0524a156a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SO2DNAD%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpbP%2FWq3JW5TS2Qs8%2BCORNpZbvZpmm6qKNXcLPOxz5CQIgaABG10Qh3eOIMgyY%2Fc3qTjhPJ9AWafM3dfIbi%2Fb2w4gqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLDE1F6dBnqs%2FYmayrcA8LnmQsjfvI3jr6Xl%2Bic%2FxK8exlPR14f9QfV1h1FVFtdIcKNMxga69aJsK6%2B%2BuQZcxwMrgpP6QRXaukcK6bDySKy%2FZUFPjNFf2arQdqPLsGvPFvKHVLKwonQDWF3uHvaDaI1R8ds7R3mLmWx7wwyhXFGDOtF6iAbAdFfrfqUoCYPc8rc4svuanoGF58maa5BwCipoWtfPKDZx9pYG%2BI9j7oncNkSWdFGZGEsY9v1u4jI%2F8j9YMNCDRhfsp01HaTIDWKsE8TaoAZl71Plc90m53SezlarSiYEuHnwEb3hYbrr4ADeesXcOzkU4HfklHbMpYGNaTWh446fhn48BLKMoMnP2m4Se51e6%2FuLEreqJSqx1mjCpo18WJf2znmCKVrDs24QH3BXNLXKzW6JWKVPFoxOxnczTBoTdco1SgqD9ybPzn%2FrDGH9dfLswS%2BmHlg9jR6kBiET4ehXzNO9hkKXfYx8ZG845cOFwiOD7Q3R9nYXjPxSTi19IQbnXMbaVLjQJ%2B2ge2ngbP2MU0iH7rdOpVn162r2Qc33wL04tzAn7zyrkB7XyL5S4N1RxCyCTowyUtjXH7vLtNu%2FF6i1OL12hdzkwR6ZoaHDg99z%2BLsX2CrnP%2Fr3gRRUSVv5xFsiMJ%2FwjcoGOqUBXeMjWNC%2BliDhLeeyAEv0wefiQBYzvzCTtI9Fm3H2BGygj5Ni%2Bx1dxYS%2FYQwyLuTUhBAjpdrHRFCRamt1FAof3lPdM4UrUee6%2FZzwNVzUw5H4VPV%2FYH4bVZfSEUfim7pb6O0bpEJcTOx9ED5D6YXcAoU1hpMX2Dm15%2Fo7ZJ2TPadak%2FzUI5QB12%2BeKV9WGoxvgtyXIzMvKt7DCOebrhgS5pzZZl0L&X-Amz-Signature=5274a2bf6c07dd5cf14364a280f113b987d6bfd9ddc1baf6aa6c3826b6f2b74e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SO2DNAD%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpbP%2FWq3JW5TS2Qs8%2BCORNpZbvZpmm6qKNXcLPOxz5CQIgaABG10Qh3eOIMgyY%2Fc3qTjhPJ9AWafM3dfIbi%2Fb2w4gqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLDE1F6dBnqs%2FYmayrcA8LnmQsjfvI3jr6Xl%2Bic%2FxK8exlPR14f9QfV1h1FVFtdIcKNMxga69aJsK6%2B%2BuQZcxwMrgpP6QRXaukcK6bDySKy%2FZUFPjNFf2arQdqPLsGvPFvKHVLKwonQDWF3uHvaDaI1R8ds7R3mLmWx7wwyhXFGDOtF6iAbAdFfrfqUoCYPc8rc4svuanoGF58maa5BwCipoWtfPKDZx9pYG%2BI9j7oncNkSWdFGZGEsY9v1u4jI%2F8j9YMNCDRhfsp01HaTIDWKsE8TaoAZl71Plc90m53SezlarSiYEuHnwEb3hYbrr4ADeesXcOzkU4HfklHbMpYGNaTWh446fhn48BLKMoMnP2m4Se51e6%2FuLEreqJSqx1mjCpo18WJf2znmCKVrDs24QH3BXNLXKzW6JWKVPFoxOxnczTBoTdco1SgqD9ybPzn%2FrDGH9dfLswS%2BmHlg9jR6kBiET4ehXzNO9hkKXfYx8ZG845cOFwiOD7Q3R9nYXjPxSTi19IQbnXMbaVLjQJ%2B2ge2ngbP2MU0iH7rdOpVn162r2Qc33wL04tzAn7zyrkB7XyL5S4N1RxCyCTowyUtjXH7vLtNu%2FF6i1OL12hdzkwR6ZoaHDg99z%2BLsX2CrnP%2Fr3gRRUSVv5xFsiMJ%2FwjcoGOqUBXeMjWNC%2BliDhLeeyAEv0wefiQBYzvzCTtI9Fm3H2BGygj5Ni%2Bx1dxYS%2FYQwyLuTUhBAjpdrHRFCRamt1FAof3lPdM4UrUee6%2FZzwNVzUw5H4VPV%2FYH4bVZfSEUfim7pb6O0bpEJcTOx9ED5D6YXcAoU1hpMX2Dm15%2Fo7ZJ2TPadak%2FzUI5QB12%2BeKV9WGoxvgtyXIzMvKt7DCOebrhgS5pzZZl0L&X-Amz-Signature=c3b489962a38c0ee5fa19be878a95b63ca86d58467c3ce35e7fb7e58b5f5f121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOVSUHZT%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHzDIuYiIMaF8Q0MO84foI6BF5P7htYHF7mvamkWCIyoCIQCVcXX%2F7E2jP7t%2FiXOYGyQ4kGKSGzEPK3HnvdGfwb4jbSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWkIJ7NBs2ydFCC5XKtwDsePFxP8lMPNOfVSLPQiguC2wnBqnxHQiQkumbckv6EgfgJ346wT%2B1zB3Ww8Jzng9vV%2BkuOwazQuHt94HIlNDX8xi2%2FTbflfNIxTnLAHG%2Bxbf8ClCO60uSAKiPaMImOfY5P7djY%2B162cqDzVNpy87ftTSKZ3zkrneiqLefjjfxX03QJBlm7Jny59ihySV%2FyyUAR08iRhKfEaFQhXaqILh5UvPr9EoZ4M9R4jbuSRveZjcGVZcXAhBeo9rYvTql7a%2FdHpOFglcBA6lKiTgGJk46jkV5VyKNA3GvkzsV7UscBSADnJkF63SSrISFzIB%2BlNC%2FvUnbnUlOy77nWaRk6guzjGrXOVXyl%2B9ByVXw10KwWydHZozgm9WCmJgn05o5e2EkwQeIEU%2Fl9eBUCFEPnaIF4gJlj0sQOS1NbMxjOHmQvvczuyd6EKVbdxV330X2zeWTgIxS6Jh4yZ0U5rzwPYk%2BMnb0%2BKk%2Fqi%2BdSBoejmhwoHlcEJPP7w5Qq4rjNuuw%2Fqst270EpZud9OM%2BlOn40SJnIg92itKxgB5lhmKqi7Z%2BRIWQLOdfmZ3vF5G0RgOt7ipV%2B2qGQ2cIpyhpYcoY5CyeAfdgDefk24htgLW41%2FvqCOGljrgHPi0uIi3VVMwm%2FCNygY6pgGsWPnhen0jaQzFo9Np%2BqyTEh%2B0GgeWDw9n3eS3wZUZXf90qNQRmVIsOurTW9QJRLnQMeB8W3WYYx0pPunwxJkl%2BjSiVyQjLcqEOAg6zjbcsrykJCrAPyTz25y13fjIxrehWbm4G22OEKoAZ9rp0NIXOk0s5AmiO6uLB55kPMC6Hptcd%2BY%2FWNqxG9PNeODPrVOScFwxxpoajzrvl%2FgsiqbMmSUBB07a&X-Amz-Signature=a63574fb9361166f8448fcab182d3b8c35d51988fc55e78a63ed9ccd88c34fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOVSUHZT%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHzDIuYiIMaF8Q0MO84foI6BF5P7htYHF7mvamkWCIyoCIQCVcXX%2F7E2jP7t%2FiXOYGyQ4kGKSGzEPK3HnvdGfwb4jbSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWkIJ7NBs2ydFCC5XKtwDsePFxP8lMPNOfVSLPQiguC2wnBqnxHQiQkumbckv6EgfgJ346wT%2B1zB3Ww8Jzng9vV%2BkuOwazQuHt94HIlNDX8xi2%2FTbflfNIxTnLAHG%2Bxbf8ClCO60uSAKiPaMImOfY5P7djY%2B162cqDzVNpy87ftTSKZ3zkrneiqLefjjfxX03QJBlm7Jny59ihySV%2FyyUAR08iRhKfEaFQhXaqILh5UvPr9EoZ4M9R4jbuSRveZjcGVZcXAhBeo9rYvTql7a%2FdHpOFglcBA6lKiTgGJk46jkV5VyKNA3GvkzsV7UscBSADnJkF63SSrISFzIB%2BlNC%2FvUnbnUlOy77nWaRk6guzjGrXOVXyl%2B9ByVXw10KwWydHZozgm9WCmJgn05o5e2EkwQeIEU%2Fl9eBUCFEPnaIF4gJlj0sQOS1NbMxjOHmQvvczuyd6EKVbdxV330X2zeWTgIxS6Jh4yZ0U5rzwPYk%2BMnb0%2BKk%2Fqi%2BdSBoejmhwoHlcEJPP7w5Qq4rjNuuw%2Fqst270EpZud9OM%2BlOn40SJnIg92itKxgB5lhmKqi7Z%2BRIWQLOdfmZ3vF5G0RgOt7ipV%2B2qGQ2cIpyhpYcoY5CyeAfdgDefk24htgLW41%2FvqCOGljrgHPi0uIi3VVMwm%2FCNygY6pgGsWPnhen0jaQzFo9Np%2BqyTEh%2B0GgeWDw9n3eS3wZUZXf90qNQRmVIsOurTW9QJRLnQMeB8W3WYYx0pPunwxJkl%2BjSiVyQjLcqEOAg6zjbcsrykJCrAPyTz25y13fjIxrehWbm4G22OEKoAZ9rp0NIXOk0s5AmiO6uLB55kPMC6Hptcd%2BY%2FWNqxG9PNeODPrVOScFwxxpoajzrvl%2FgsiqbMmSUBB07a&X-Amz-Signature=c901f2794f33190ff6c77829a7fc4af7b8794badff7b9883a1f5c2723e799a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCHDBTXB%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhWAJRs1p9Y7Meyi2Dck0%2BPAY%2Batf8CcqthCIAbyrkyAiBs47XSTjs3LgeZexxLwHbS7igFN6%2BqrZTjZR8Mu%2BXRtCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb4AM4kkh97ROKqQsKtwDKODicKazrIVKV1VW2ShnDUljrha99WuyrP%2BzP2zGqgHRHxgF61RaKEI7gvEdDSLsHYkECMq8S5j5JVN7OFRrzorecia5taN0A%2FKjACKAyA4Sz8NdJMeH45BHIiI9EbZYES4%2Ftsoi1SfTfjk9L246s9rRcUEYDWjSBoEk3Qzk%2BvyGukQOma0hsd0%2FzobT%2B%2BZGXhY7pek5ZAaudEx7GAoUA3CcLV5Y8G%2BH6%2BrA2676s0nctvUZVL9Kh7LxXR6WBGqf1uJAg7a6ZPt6LUnHJKT4gh5rai6g67Wx8RY0pC70B3Pod9T37a%2FX%2BGv0DeZqme%2BO1mQc7%2FiHq5CoblKQIxWF9vffyyWAgDlPLEyJnh3Ikzj%2BQQ57INIOt1wNfcsgvil6l3lSF9ToPalPAJx4sxT%2Bs15KKOMOFD1j4P4Gxv9x8szJDIC9eCL3YisJ25DlqwSstCfmV3wBOc6luZN2L%2BcUhV83Kkdz%2FXFizO13FWOk14YDrvyrs%2Fz7yTKRdj6JmYSbd8G3lnJqAT4vVtdek%2BEz1bXgSgIqZ01Loa09NcT6mhaW7n%2FX6ZZdGc9DZmEtKoPFJAWm8EHFRzy%2BqD9uvIfj%2Fw%2BR1g2cWdOWIdp3HfOtf%2FNEqzjUaGftM8vqwtYwkfGNygY6pgGRxe1vy2vVsLs%2FTN%2BSKAg2khSCMotX5WvTwCXh9bqFfLVNXPZ6BzBMApvhDNlZqmsBzsOJPyef36L2lhVDTXrFBQ%2Bd25zllljDmmvrSonIZpShqQ53hUASLXNKPOL6Vm%2BTGuG7BaXz2gpo%2BkthmIVylDHXAKpQD9Xg8CJyd%2FMnmRbV2A%2ByNdaW48wao52trQHkzYmixtJZRh0cofeBnabXK6B2ObAv&X-Amz-Signature=2a0fd0e47716630240c4a1e23207d6c43c372122061e004e46dd39052a36e64c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCHDBTXB%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhWAJRs1p9Y7Meyi2Dck0%2BPAY%2Batf8CcqthCIAbyrkyAiBs47XSTjs3LgeZexxLwHbS7igFN6%2BqrZTjZR8Mu%2BXRtCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb4AM4kkh97ROKqQsKtwDKODicKazrIVKV1VW2ShnDUljrha99WuyrP%2BzP2zGqgHRHxgF61RaKEI7gvEdDSLsHYkECMq8S5j5JVN7OFRrzorecia5taN0A%2FKjACKAyA4Sz8NdJMeH45BHIiI9EbZYES4%2Ftsoi1SfTfjk9L246s9rRcUEYDWjSBoEk3Qzk%2BvyGukQOma0hsd0%2FzobT%2B%2BZGXhY7pek5ZAaudEx7GAoUA3CcLV5Y8G%2BH6%2BrA2676s0nctvUZVL9Kh7LxXR6WBGqf1uJAg7a6ZPt6LUnHJKT4gh5rai6g67Wx8RY0pC70B3Pod9T37a%2FX%2BGv0DeZqme%2BO1mQc7%2FiHq5CoblKQIxWF9vffyyWAgDlPLEyJnh3Ikzj%2BQQ57INIOt1wNfcsgvil6l3lSF9ToPalPAJx4sxT%2Bs15KKOMOFD1j4P4Gxv9x8szJDIC9eCL3YisJ25DlqwSstCfmV3wBOc6luZN2L%2BcUhV83Kkdz%2FXFizO13FWOk14YDrvyrs%2Fz7yTKRdj6JmYSbd8G3lnJqAT4vVtdek%2BEz1bXgSgIqZ01Loa09NcT6mhaW7n%2FX6ZZdGc9DZmEtKoPFJAWm8EHFRzy%2BqD9uvIfj%2Fw%2BR1g2cWdOWIdp3HfOtf%2FNEqzjUaGftM8vqwtYwkfGNygY6pgGRxe1vy2vVsLs%2FTN%2BSKAg2khSCMotX5WvTwCXh9bqFfLVNXPZ6BzBMApvhDNlZqmsBzsOJPyef36L2lhVDTXrFBQ%2Bd25zllljDmmvrSonIZpShqQ53hUASLXNKPOL6Vm%2BTGuG7BaXz2gpo%2BkthmIVylDHXAKpQD9Xg8CJyd%2FMnmRbV2A%2ByNdaW48wao52trQHkzYmixtJZRh0cofeBnabXK6B2ObAv&X-Amz-Signature=a2688eaab86381b302dcdbf750e81113c5998a081f5ca41dba9f069ccfa74840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCHDBTXB%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhWAJRs1p9Y7Meyi2Dck0%2BPAY%2Batf8CcqthCIAbyrkyAiBs47XSTjs3LgeZexxLwHbS7igFN6%2BqrZTjZR8Mu%2BXRtCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb4AM4kkh97ROKqQsKtwDKODicKazrIVKV1VW2ShnDUljrha99WuyrP%2BzP2zGqgHRHxgF61RaKEI7gvEdDSLsHYkECMq8S5j5JVN7OFRrzorecia5taN0A%2FKjACKAyA4Sz8NdJMeH45BHIiI9EbZYES4%2Ftsoi1SfTfjk9L246s9rRcUEYDWjSBoEk3Qzk%2BvyGukQOma0hsd0%2FzobT%2B%2BZGXhY7pek5ZAaudEx7GAoUA3CcLV5Y8G%2BH6%2BrA2676s0nctvUZVL9Kh7LxXR6WBGqf1uJAg7a6ZPt6LUnHJKT4gh5rai6g67Wx8RY0pC70B3Pod9T37a%2FX%2BGv0DeZqme%2BO1mQc7%2FiHq5CoblKQIxWF9vffyyWAgDlPLEyJnh3Ikzj%2BQQ57INIOt1wNfcsgvil6l3lSF9ToPalPAJx4sxT%2Bs15KKOMOFD1j4P4Gxv9x8szJDIC9eCL3YisJ25DlqwSstCfmV3wBOc6luZN2L%2BcUhV83Kkdz%2FXFizO13FWOk14YDrvyrs%2Fz7yTKRdj6JmYSbd8G3lnJqAT4vVtdek%2BEz1bXgSgIqZ01Loa09NcT6mhaW7n%2FX6ZZdGc9DZmEtKoPFJAWm8EHFRzy%2BqD9uvIfj%2Fw%2BR1g2cWdOWIdp3HfOtf%2FNEqzjUaGftM8vqwtYwkfGNygY6pgGRxe1vy2vVsLs%2FTN%2BSKAg2khSCMotX5WvTwCXh9bqFfLVNXPZ6BzBMApvhDNlZqmsBzsOJPyef36L2lhVDTXrFBQ%2Bd25zllljDmmvrSonIZpShqQ53hUASLXNKPOL6Vm%2BTGuG7BaXz2gpo%2BkthmIVylDHXAKpQD9Xg8CJyd%2FMnmRbV2A%2ByNdaW48wao52trQHkzYmixtJZRh0cofeBnabXK6B2ObAv&X-Amz-Signature=0bd4535a0e146d1a60d20db1683a1820e9b245d673938b684b6195cdd5f0538e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCHDBTXB%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhWAJRs1p9Y7Meyi2Dck0%2BPAY%2Batf8CcqthCIAbyrkyAiBs47XSTjs3LgeZexxLwHbS7igFN6%2BqrZTjZR8Mu%2BXRtCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb4AM4kkh97ROKqQsKtwDKODicKazrIVKV1VW2ShnDUljrha99WuyrP%2BzP2zGqgHRHxgF61RaKEI7gvEdDSLsHYkECMq8S5j5JVN7OFRrzorecia5taN0A%2FKjACKAyA4Sz8NdJMeH45BHIiI9EbZYES4%2Ftsoi1SfTfjk9L246s9rRcUEYDWjSBoEk3Qzk%2BvyGukQOma0hsd0%2FzobT%2B%2BZGXhY7pek5ZAaudEx7GAoUA3CcLV5Y8G%2BH6%2BrA2676s0nctvUZVL9Kh7LxXR6WBGqf1uJAg7a6ZPt6LUnHJKT4gh5rai6g67Wx8RY0pC70B3Pod9T37a%2FX%2BGv0DeZqme%2BO1mQc7%2FiHq5CoblKQIxWF9vffyyWAgDlPLEyJnh3Ikzj%2BQQ57INIOt1wNfcsgvil6l3lSF9ToPalPAJx4sxT%2Bs15KKOMOFD1j4P4Gxv9x8szJDIC9eCL3YisJ25DlqwSstCfmV3wBOc6luZN2L%2BcUhV83Kkdz%2FXFizO13FWOk14YDrvyrs%2Fz7yTKRdj6JmYSbd8G3lnJqAT4vVtdek%2BEz1bXgSgIqZ01Loa09NcT6mhaW7n%2FX6ZZdGc9DZmEtKoPFJAWm8EHFRzy%2BqD9uvIfj%2Fw%2BR1g2cWdOWIdp3HfOtf%2FNEqzjUaGftM8vqwtYwkfGNygY6pgGRxe1vy2vVsLs%2FTN%2BSKAg2khSCMotX5WvTwCXh9bqFfLVNXPZ6BzBMApvhDNlZqmsBzsOJPyef36L2lhVDTXrFBQ%2Bd25zllljDmmvrSonIZpShqQ53hUASLXNKPOL6Vm%2BTGuG7BaXz2gpo%2BkthmIVylDHXAKpQD9Xg8CJyd%2FMnmRbV2A%2ByNdaW48wao52trQHkzYmixtJZRh0cofeBnabXK6B2ObAv&X-Amz-Signature=c6209246e4abdc7f68447e2581b2d788ab26ea39b5f8c16e3a9d0874acd6aad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCHDBTXB%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhWAJRs1p9Y7Meyi2Dck0%2BPAY%2Batf8CcqthCIAbyrkyAiBs47XSTjs3LgeZexxLwHbS7igFN6%2BqrZTjZR8Mu%2BXRtCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb4AM4kkh97ROKqQsKtwDKODicKazrIVKV1VW2ShnDUljrha99WuyrP%2BzP2zGqgHRHxgF61RaKEI7gvEdDSLsHYkECMq8S5j5JVN7OFRrzorecia5taN0A%2FKjACKAyA4Sz8NdJMeH45BHIiI9EbZYES4%2Ftsoi1SfTfjk9L246s9rRcUEYDWjSBoEk3Qzk%2BvyGukQOma0hsd0%2FzobT%2B%2BZGXhY7pek5ZAaudEx7GAoUA3CcLV5Y8G%2BH6%2BrA2676s0nctvUZVL9Kh7LxXR6WBGqf1uJAg7a6ZPt6LUnHJKT4gh5rai6g67Wx8RY0pC70B3Pod9T37a%2FX%2BGv0DeZqme%2BO1mQc7%2FiHq5CoblKQIxWF9vffyyWAgDlPLEyJnh3Ikzj%2BQQ57INIOt1wNfcsgvil6l3lSF9ToPalPAJx4sxT%2Bs15KKOMOFD1j4P4Gxv9x8szJDIC9eCL3YisJ25DlqwSstCfmV3wBOc6luZN2L%2BcUhV83Kkdz%2FXFizO13FWOk14YDrvyrs%2Fz7yTKRdj6JmYSbd8G3lnJqAT4vVtdek%2BEz1bXgSgIqZ01Loa09NcT6mhaW7n%2FX6ZZdGc9DZmEtKoPFJAWm8EHFRzy%2BqD9uvIfj%2Fw%2BR1g2cWdOWIdp3HfOtf%2FNEqzjUaGftM8vqwtYwkfGNygY6pgGRxe1vy2vVsLs%2FTN%2BSKAg2khSCMotX5WvTwCXh9bqFfLVNXPZ6BzBMApvhDNlZqmsBzsOJPyef36L2lhVDTXrFBQ%2Bd25zllljDmmvrSonIZpShqQ53hUASLXNKPOL6Vm%2BTGuG7BaXz2gpo%2BkthmIVylDHXAKpQD9Xg8CJyd%2FMnmRbV2A%2ByNdaW48wao52trQHkzYmixtJZRh0cofeBnabXK6B2ObAv&X-Amz-Signature=cc5742b4f6eaaa0ff49a17c07056a14c9df43b7c2ddbb66b40c4f6eb863e549d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNB3CZAS%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T040111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH2GLbFJWGtwut1xP8lo0%2FOaPfBngd47peaHvyUnxKgMCICTzGb15YLLZ3fKEkDBY%2FOMFcVszg7unPUnq6vHem%2FXbKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSlRKEA7s2W5gHmBwq3AOxaeiPRMHWSyREDZXTXDBWjLCaioOJrNXlXXwmh4XuZ1mLcRLvJH4ldY0OvcP0GJcY6hlRff5MDdzrtvQrf1ByTyRAg291lFcVxH5DiEihgI6r9pSLItOv7GqWiFpAqYwGZXwTvZqhEDOHTC7CMvZUiyMEq1ZfJmoUrsbqI6lyaut84oHtmGJO63jA4tktuCAoXthAj8gsopyIQa7GwwbTP5pz4kP6h2oZvsZ4KQ4t8N3uvtnozYvXAzDeztu9v0FDil4jYlO4j5lbu%2BARyac7v%2Fs9b9M0wQGYlj35xa8okV%2BAL0j3ZSsJcnozJlua9XXSCXUWeS7AVWN%2BheBAahzsCIKCbC%2FYSF0dSIWceHuwW5qdKE%2Bt9GoRc%2Bv74cbbWkSWzaSedznepUOAF5WmOWbBBVk2E0iAjCjJsUO5ynGysHFxdNyeH%2FHNCGb%2FXFwfuwpnKBTrv1jP6Tb5SoOdIAONkxwnXlNfhJeRq4dQqELmVyqn1dQUPwxVCaiVd9zphQ15MpiNfJK%2BqHjJx8dfsB2C8nmTI8WaTdLTyY81XHGcqZlEYqlhhArsnZNjuq48qmWRaBQDzYAKq8lF1b4Zuy5JMAZdL7n87xukver64tHVYCKa5%2FZbSYL3EeftEjCt8I3KBjqnAWAlnKBPv7%2FjC4rWwhuMdhjeT09CmO19FKSLDRWyGc3esMTkjKz3Zm8fIYm76%2BFTUHHXU4Qwj6w3p8Ed4SEEFx8tsu4rlVsO6lINNS9gHKUQCu%2FTIlQKTmLG9uOcQtwuMOTWbU5lzwP4HmhusKZM8ZdDgfmXgVojJayVwwQLLdNzOQQsQ%2BF1XC6dC%2Bn8hBEFxuXpyZGUG7NNM1yaczx2mvnBeYiL8kRg&X-Amz-Signature=aaf4bcc40a9b162fc3526c2c6dd3b80802016d3781b4f09a392c05714fa968c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

