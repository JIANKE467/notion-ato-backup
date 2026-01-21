
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSIG2BEI%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcHEmpVeaLX30dVwU0ko2n%2FXyuCScPSZi2psXo4swtoAIgZ6JeRLJ2Yletd1iTKijGXMcbVxNzLHci0o%2FqBvQsELkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFpQyQP43qFbYclcSrcA4fGsmOMi6cmQw%2B07YVi6wZN7H0caR3I8L2w%2FiMe7tuieY1wcQi%2Bno8aLBD%2BAvLp6sXTI7g%2BeX04b1NmbI9RFxi3RxMRZzxHafd4gERNT%2FRZDYFrGmdDVkbQ1uyUkqziO2e3cg2EBeU7D3eKJt3rBVCMsN0qJ3sFpZr1pNa2fSSMOIMxTm4u8tCSX%2B0uoy6J1juqbr3930JKuW9kdqmonGJy3YwbS1SRjxVMM9p1CExrp%2Bli6LARCRy91JiuAI5zzMsgCpZfUhtKWB7kT96QfRl5CaTlTHkfjxv8K8veHZm5q%2FZqow3B3%2FzMurkpb8LXkJXLdlFDH9hb%2BnvurTnShJbfGCS2XrdwJR%2FTYVOaM7ZTj0YVzXu3zWBvOKIBUs8Dfl0kn9gLUW0TbBOgU2HZoE5lZzNfgXThr3J2htS5MiTBSerxzSQYcKIQMuy6cNN53WdEzZ1k3xvBsSqSG1x8jJeIHtQ%2FNJ04vbESkVOR87ZkC2SJkS0ptwJJBuwdZWig40wQlrHSwaEP%2FBWBlCLWEnuUNiTGAX7GyP3M5hsMfjlJsz7FNVYgZBo%2FUk9cCvgUOeqaoUKujj5K7El5vVmnnwZNOuhcW96CHpAoFZ4fOMnPNSDq%2BBkjOnUyFEC4MOWPwcsGOqUBxhKu5fT6FE90BvSOKedwLzha3%2BxeibTU3C2ljqUIuUgNggtHjS%2FsKgtcTnf53NVk3pCms%2FWjxonbRsFcHUjaizcC11FLL5RCdAzCWYPOcWgefYVexLugYt1tBOhXDJgtN4FcLJLUS9so7AvOtauuHJ1BKwLpKv39pKKctb3JMf8LSmQduwG9Mi3FkYtkV2m40Eboa2DZ8kdyfGdKAYVODMqNv6ha&X-Amz-Signature=290fa110e886426b81019cc77949b27496304501b341d21b7040f89c8b0cd252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOSTSFAD%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnd92auGQGN1305otk2I4LxUaF4DEulzEUex0I%2BsgpYAiEA8GARzzCINtP4wyH02ADXUPRzpDVx9h8Da1dQhn%2F5lAQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwmnYce4AEkwBYoEircAxsJO1LfIju0UIUBdxTfFHJ4QAhhek%2BU4dOvKE4cmIw%2Fa6zhHYvFp7yNoUrq%2Fn0rHHXI5USBiSGzCzTJmA%2F%2FgTptzwl%2F6vUbN3%2BOvMIrky6pOmllRFPbXdTnvgaXcDLMBFfO%2FVIsNRD4arzESKeAVCXc6vP3jW3tE%2BVy%2BtS8A27HR7QgqRQAig8o9GHbI2BxnCJueyE2QO0aRykgsav%2F6FIOdLmN6rLCP7%2B4u4qdXIwhjpFWm93zsbBZZSGLrJCvHZ7HgwOaGkcNEEVyYJMzD2gaswxwrkdvMbAr%2F04BEwO2DXj1ZeGZUvOrkR2InDMPNIzhn0r5uE1jLVvV5XDGe%2FBQtb9NCi01R%2FuO6VzNTC%2F7us9xNV5cdGhwDdjZVR2VbiGAVjOKr1lLOWz4YJbtGCCjhsj9YCDJgeTNY0f1qNv6khGGPxnW5CieyOJmwr6dhn6PjOahsOZ%2FoIorRGQ%2Fd1JEakd4hjr1Z0qaJCEwPtWRAQgxX0bYx9ZQ9xDoA92fumrECcZ1%2BqDqFaTi7PVsT1Z3QKVE8NP8ba6KDlUa%2F2qHa6QxfHjGKXvjRcOXOgZ5VZ0vIq8ZPNodk3b8JuDLRE9hELsLdy1ySWQ1iWvFzM5%2BmQoN82Ag%2Bkii8X92MPuQwcsGOqUBVjrf%2Fbo5WxZIxSyeyJl0%2FcBdItajSw9PWTKvYWj18fUDnO%2FtEbH6MS%2BdUrD2SZzn4w33LEnQPvPaMRHJyLjP3vB0PyG1OJNiwZSknBGkTqaowY%2F4tQ2xdOwk0n5sKD6KiTDB9icAC3OFaQQ3QgC11tXjZoGmecwhaBpzAn8jI%2Bez7IqiSJGwb1vsqlOf8PRgIaDGfb2izz9iOSLG4xT3s7JqRJUN&X-Amz-Signature=2fd3ffd15665e22412df5b8f47ab5a3529abdd4f440fb807949764ce9a0d9279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOSTSFAD%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnd92auGQGN1305otk2I4LxUaF4DEulzEUex0I%2BsgpYAiEA8GARzzCINtP4wyH02ADXUPRzpDVx9h8Da1dQhn%2F5lAQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwmnYce4AEkwBYoEircAxsJO1LfIju0UIUBdxTfFHJ4QAhhek%2BU4dOvKE4cmIw%2Fa6zhHYvFp7yNoUrq%2Fn0rHHXI5USBiSGzCzTJmA%2F%2FgTptzwl%2F6vUbN3%2BOvMIrky6pOmllRFPbXdTnvgaXcDLMBFfO%2FVIsNRD4arzESKeAVCXc6vP3jW3tE%2BVy%2BtS8A27HR7QgqRQAig8o9GHbI2BxnCJueyE2QO0aRykgsav%2F6FIOdLmN6rLCP7%2B4u4qdXIwhjpFWm93zsbBZZSGLrJCvHZ7HgwOaGkcNEEVyYJMzD2gaswxwrkdvMbAr%2F04BEwO2DXj1ZeGZUvOrkR2InDMPNIzhn0r5uE1jLVvV5XDGe%2FBQtb9NCi01R%2FuO6VzNTC%2F7us9xNV5cdGhwDdjZVR2VbiGAVjOKr1lLOWz4YJbtGCCjhsj9YCDJgeTNY0f1qNv6khGGPxnW5CieyOJmwr6dhn6PjOahsOZ%2FoIorRGQ%2Fd1JEakd4hjr1Z0qaJCEwPtWRAQgxX0bYx9ZQ9xDoA92fumrECcZ1%2BqDqFaTi7PVsT1Z3QKVE8NP8ba6KDlUa%2F2qHa6QxfHjGKXvjRcOXOgZ5VZ0vIq8ZPNodk3b8JuDLRE9hELsLdy1ySWQ1iWvFzM5%2BmQoN82Ag%2Bkii8X92MPuQwcsGOqUBVjrf%2Fbo5WxZIxSyeyJl0%2FcBdItajSw9PWTKvYWj18fUDnO%2FtEbH6MS%2BdUrD2SZzn4w33LEnQPvPaMRHJyLjP3vB0PyG1OJNiwZSknBGkTqaowY%2F4tQ2xdOwk0n5sKD6KiTDB9icAC3OFaQQ3QgC11tXjZoGmecwhaBpzAn8jI%2Bez7IqiSJGwb1vsqlOf8PRgIaDGfb2izz9iOSLG4xT3s7JqRJUN&X-Amz-Signature=cd4e89e1e2e404857b66d438a054e6592c4299e4f4dc2cf94bf6f2a0554c98df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD4DOITT%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO%2BPzw%2FOwqgYRr9kUtlsia1574OdPPWVOHi3DWY92ieAiEAjUoylG1xBBJpjlye7QEU9fW1WsIx2YGDMlly6wGmyeEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaPfVM15yaU%2FhCacyrcAxGUskJsPaAXjtfVIWN13C95VXNCHIxSgebLlB83i75h7frkSve%2FdIhQYC4YKqyn2pCtvQNWVfZ9pNUBgegmZZ8KemLMew%2FbBkGkTUFQNUWs4xHIZqQZ3gDpucTnZfaXxfhMuqoKuU8hYJnGZRN4aa8h1gcn2v3%2BTn0%2ByAcTTs3mmUV7Dtj78Bn2Y78KW43u%2B5kmQa9RiP4Ect%2BCOl3HEGP5onmaE8%2BUmD73A7WfbhKCU6VnfojH4XkNsGC4zD3%2BYCIbslhpNhucDoQ%2BIMlCu8hzBVq6wknUY7kGVlQncgq0pY7yIaz3LMeU3dIVxWjRvhCyHw9biwXm7Q6AHyoCPLjkBjEkHPtfsQGrXx6b4E01wbiSIi6UdMmIYyDGdUxkYQd0zGgco4N2GzcrFHTbd3aOTmix0keaM%2BfN9G6WPceCPREmTCysrOZ9m3pBko%2FZt6vgxVj5Fwe5j3%2FMfFRs2TswFpxIB%2BWMpgKu5GBph6cclcabmfsj7e5viFo8hp%2FUVf%2FFdQ2ZrV%2BPZ6lnkW%2BwLjxm2pVbj53I9PlN5uf70s4sXnN%2FpYDXhSdd2jBgXJe3eVfoP1FyX3kYXfoAhA1V9qAP5e%2BKX40UI1QuVOuFwbWaV%2BHZkSZHp81ahGhSMJKQwcsGOqUBQNBQOamtktu7YhSDgoQ8P7ME6NxeY4gXJXMykmtbz0710pSLLeJEZuLJdBSoAO3JCbZgLs8V%2BkRjeCGG8Whc4dAgmh6Kb7pFi5lb%2FALOqQxEIjusb1Dcrt3DuZ7kpSsfDqKA0iBJKAl%2BSuFCfjiWKOy4%2B8Zy6FMYpKqTLS6SJEzlHAF%2FSqnKWjlUsJh3SHHe7GFUuoWbV5iIryaquGoGQOLo9z4v&X-Amz-Signature=cd3ebba0a3045a8eadd2e416b9b97f8b77ef3ebe7cd785379be0bcd73efd66f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD4DOITT%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO%2BPzw%2FOwqgYRr9kUtlsia1574OdPPWVOHi3DWY92ieAiEAjUoylG1xBBJpjlye7QEU9fW1WsIx2YGDMlly6wGmyeEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaPfVM15yaU%2FhCacyrcAxGUskJsPaAXjtfVIWN13C95VXNCHIxSgebLlB83i75h7frkSve%2FdIhQYC4YKqyn2pCtvQNWVfZ9pNUBgegmZZ8KemLMew%2FbBkGkTUFQNUWs4xHIZqQZ3gDpucTnZfaXxfhMuqoKuU8hYJnGZRN4aa8h1gcn2v3%2BTn0%2ByAcTTs3mmUV7Dtj78Bn2Y78KW43u%2B5kmQa9RiP4Ect%2BCOl3HEGP5onmaE8%2BUmD73A7WfbhKCU6VnfojH4XkNsGC4zD3%2BYCIbslhpNhucDoQ%2BIMlCu8hzBVq6wknUY7kGVlQncgq0pY7yIaz3LMeU3dIVxWjRvhCyHw9biwXm7Q6AHyoCPLjkBjEkHPtfsQGrXx6b4E01wbiSIi6UdMmIYyDGdUxkYQd0zGgco4N2GzcrFHTbd3aOTmix0keaM%2BfN9G6WPceCPREmTCysrOZ9m3pBko%2FZt6vgxVj5Fwe5j3%2FMfFRs2TswFpxIB%2BWMpgKu5GBph6cclcabmfsj7e5viFo8hp%2FUVf%2FFdQ2ZrV%2BPZ6lnkW%2BwLjxm2pVbj53I9PlN5uf70s4sXnN%2FpYDXhSdd2jBgXJe3eVfoP1FyX3kYXfoAhA1V9qAP5e%2BKX40UI1QuVOuFwbWaV%2BHZkSZHp81ahGhSMJKQwcsGOqUBQNBQOamtktu7YhSDgoQ8P7ME6NxeY4gXJXMykmtbz0710pSLLeJEZuLJdBSoAO3JCbZgLs8V%2BkRjeCGG8Whc4dAgmh6Kb7pFi5lb%2FALOqQxEIjusb1Dcrt3DuZ7kpSsfDqKA0iBJKAl%2BSuFCfjiWKOy4%2B8Zy6FMYpKqTLS6SJEzlHAF%2FSqnKWjlUsJh3SHHe7GFUuoWbV5iIryaquGoGQOLo9z4v&X-Amz-Signature=fd86129427e1d0890d0dea90f76ec44bb99a5acd5b237a57471e1386b459ff67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD4DOITT%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO%2BPzw%2FOwqgYRr9kUtlsia1574OdPPWVOHi3DWY92ieAiEAjUoylG1xBBJpjlye7QEU9fW1WsIx2YGDMlly6wGmyeEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaPfVM15yaU%2FhCacyrcAxGUskJsPaAXjtfVIWN13C95VXNCHIxSgebLlB83i75h7frkSve%2FdIhQYC4YKqyn2pCtvQNWVfZ9pNUBgegmZZ8KemLMew%2FbBkGkTUFQNUWs4xHIZqQZ3gDpucTnZfaXxfhMuqoKuU8hYJnGZRN4aa8h1gcn2v3%2BTn0%2ByAcTTs3mmUV7Dtj78Bn2Y78KW43u%2B5kmQa9RiP4Ect%2BCOl3HEGP5onmaE8%2BUmD73A7WfbhKCU6VnfojH4XkNsGC4zD3%2BYCIbslhpNhucDoQ%2BIMlCu8hzBVq6wknUY7kGVlQncgq0pY7yIaz3LMeU3dIVxWjRvhCyHw9biwXm7Q6AHyoCPLjkBjEkHPtfsQGrXx6b4E01wbiSIi6UdMmIYyDGdUxkYQd0zGgco4N2GzcrFHTbd3aOTmix0keaM%2BfN9G6WPceCPREmTCysrOZ9m3pBko%2FZt6vgxVj5Fwe5j3%2FMfFRs2TswFpxIB%2BWMpgKu5GBph6cclcabmfsj7e5viFo8hp%2FUVf%2FFdQ2ZrV%2BPZ6lnkW%2BwLjxm2pVbj53I9PlN5uf70s4sXnN%2FpYDXhSdd2jBgXJe3eVfoP1FyX3kYXfoAhA1V9qAP5e%2BKX40UI1QuVOuFwbWaV%2BHZkSZHp81ahGhSMJKQwcsGOqUBQNBQOamtktu7YhSDgoQ8P7ME6NxeY4gXJXMykmtbz0710pSLLeJEZuLJdBSoAO3JCbZgLs8V%2BkRjeCGG8Whc4dAgmh6Kb7pFi5lb%2FALOqQxEIjusb1Dcrt3DuZ7kpSsfDqKA0iBJKAl%2BSuFCfjiWKOy4%2B8Zy6FMYpKqTLS6SJEzlHAF%2FSqnKWjlUsJh3SHHe7GFUuoWbV5iIryaquGoGQOLo9z4v&X-Amz-Signature=96a0219408d31782e04ed12ca4d319eb577da7fe95fca46aae8dfe16b15f6297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD4DOITT%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO%2BPzw%2FOwqgYRr9kUtlsia1574OdPPWVOHi3DWY92ieAiEAjUoylG1xBBJpjlye7QEU9fW1WsIx2YGDMlly6wGmyeEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaPfVM15yaU%2FhCacyrcAxGUskJsPaAXjtfVIWN13C95VXNCHIxSgebLlB83i75h7frkSve%2FdIhQYC4YKqyn2pCtvQNWVfZ9pNUBgegmZZ8KemLMew%2FbBkGkTUFQNUWs4xHIZqQZ3gDpucTnZfaXxfhMuqoKuU8hYJnGZRN4aa8h1gcn2v3%2BTn0%2ByAcTTs3mmUV7Dtj78Bn2Y78KW43u%2B5kmQa9RiP4Ect%2BCOl3HEGP5onmaE8%2BUmD73A7WfbhKCU6VnfojH4XkNsGC4zD3%2BYCIbslhpNhucDoQ%2BIMlCu8hzBVq6wknUY7kGVlQncgq0pY7yIaz3LMeU3dIVxWjRvhCyHw9biwXm7Q6AHyoCPLjkBjEkHPtfsQGrXx6b4E01wbiSIi6UdMmIYyDGdUxkYQd0zGgco4N2GzcrFHTbd3aOTmix0keaM%2BfN9G6WPceCPREmTCysrOZ9m3pBko%2FZt6vgxVj5Fwe5j3%2FMfFRs2TswFpxIB%2BWMpgKu5GBph6cclcabmfsj7e5viFo8hp%2FUVf%2FFdQ2ZrV%2BPZ6lnkW%2BwLjxm2pVbj53I9PlN5uf70s4sXnN%2FpYDXhSdd2jBgXJe3eVfoP1FyX3kYXfoAhA1V9qAP5e%2BKX40UI1QuVOuFwbWaV%2BHZkSZHp81ahGhSMJKQwcsGOqUBQNBQOamtktu7YhSDgoQ8P7ME6NxeY4gXJXMykmtbz0710pSLLeJEZuLJdBSoAO3JCbZgLs8V%2BkRjeCGG8Whc4dAgmh6Kb7pFi5lb%2FALOqQxEIjusb1Dcrt3DuZ7kpSsfDqKA0iBJKAl%2BSuFCfjiWKOy4%2B8Zy6FMYpKqTLS6SJEzlHAF%2FSqnKWjlUsJh3SHHe7GFUuoWbV5iIryaquGoGQOLo9z4v&X-Amz-Signature=3e96a78f6b891e75bd1bf4d3d3cd1193895c9b4ac2a6a350e2fef8a212475ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD4DOITT%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO%2BPzw%2FOwqgYRr9kUtlsia1574OdPPWVOHi3DWY92ieAiEAjUoylG1xBBJpjlye7QEU9fW1WsIx2YGDMlly6wGmyeEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaPfVM15yaU%2FhCacyrcAxGUskJsPaAXjtfVIWN13C95VXNCHIxSgebLlB83i75h7frkSve%2FdIhQYC4YKqyn2pCtvQNWVfZ9pNUBgegmZZ8KemLMew%2FbBkGkTUFQNUWs4xHIZqQZ3gDpucTnZfaXxfhMuqoKuU8hYJnGZRN4aa8h1gcn2v3%2BTn0%2ByAcTTs3mmUV7Dtj78Bn2Y78KW43u%2B5kmQa9RiP4Ect%2BCOl3HEGP5onmaE8%2BUmD73A7WfbhKCU6VnfojH4XkNsGC4zD3%2BYCIbslhpNhucDoQ%2BIMlCu8hzBVq6wknUY7kGVlQncgq0pY7yIaz3LMeU3dIVxWjRvhCyHw9biwXm7Q6AHyoCPLjkBjEkHPtfsQGrXx6b4E01wbiSIi6UdMmIYyDGdUxkYQd0zGgco4N2GzcrFHTbd3aOTmix0keaM%2BfN9G6WPceCPREmTCysrOZ9m3pBko%2FZt6vgxVj5Fwe5j3%2FMfFRs2TswFpxIB%2BWMpgKu5GBph6cclcabmfsj7e5viFo8hp%2FUVf%2FFdQ2ZrV%2BPZ6lnkW%2BwLjxm2pVbj53I9PlN5uf70s4sXnN%2FpYDXhSdd2jBgXJe3eVfoP1FyX3kYXfoAhA1V9qAP5e%2BKX40UI1QuVOuFwbWaV%2BHZkSZHp81ahGhSMJKQwcsGOqUBQNBQOamtktu7YhSDgoQ8P7ME6NxeY4gXJXMykmtbz0710pSLLeJEZuLJdBSoAO3JCbZgLs8V%2BkRjeCGG8Whc4dAgmh6Kb7pFi5lb%2FALOqQxEIjusb1Dcrt3DuZ7kpSsfDqKA0iBJKAl%2BSuFCfjiWKOy4%2B8Zy6FMYpKqTLS6SJEzlHAF%2FSqnKWjlUsJh3SHHe7GFUuoWbV5iIryaquGoGQOLo9z4v&X-Amz-Signature=cead9f95ae4cc8ec390bf17f7bdeb6ba44215a692d93e4a8312470b71a8d02c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD4DOITT%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO%2BPzw%2FOwqgYRr9kUtlsia1574OdPPWVOHi3DWY92ieAiEAjUoylG1xBBJpjlye7QEU9fW1WsIx2YGDMlly6wGmyeEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaPfVM15yaU%2FhCacyrcAxGUskJsPaAXjtfVIWN13C95VXNCHIxSgebLlB83i75h7frkSve%2FdIhQYC4YKqyn2pCtvQNWVfZ9pNUBgegmZZ8KemLMew%2FbBkGkTUFQNUWs4xHIZqQZ3gDpucTnZfaXxfhMuqoKuU8hYJnGZRN4aa8h1gcn2v3%2BTn0%2ByAcTTs3mmUV7Dtj78Bn2Y78KW43u%2B5kmQa9RiP4Ect%2BCOl3HEGP5onmaE8%2BUmD73A7WfbhKCU6VnfojH4XkNsGC4zD3%2BYCIbslhpNhucDoQ%2BIMlCu8hzBVq6wknUY7kGVlQncgq0pY7yIaz3LMeU3dIVxWjRvhCyHw9biwXm7Q6AHyoCPLjkBjEkHPtfsQGrXx6b4E01wbiSIi6UdMmIYyDGdUxkYQd0zGgco4N2GzcrFHTbd3aOTmix0keaM%2BfN9G6WPceCPREmTCysrOZ9m3pBko%2FZt6vgxVj5Fwe5j3%2FMfFRs2TswFpxIB%2BWMpgKu5GBph6cclcabmfsj7e5viFo8hp%2FUVf%2FFdQ2ZrV%2BPZ6lnkW%2BwLjxm2pVbj53I9PlN5uf70s4sXnN%2FpYDXhSdd2jBgXJe3eVfoP1FyX3kYXfoAhA1V9qAP5e%2BKX40UI1QuVOuFwbWaV%2BHZkSZHp81ahGhSMJKQwcsGOqUBQNBQOamtktu7YhSDgoQ8P7ME6NxeY4gXJXMykmtbz0710pSLLeJEZuLJdBSoAO3JCbZgLs8V%2BkRjeCGG8Whc4dAgmh6Kb7pFi5lb%2FALOqQxEIjusb1Dcrt3DuZ7kpSsfDqKA0iBJKAl%2BSuFCfjiWKOy4%2B8Zy6FMYpKqTLS6SJEzlHAF%2FSqnKWjlUsJh3SHHe7GFUuoWbV5iIryaquGoGQOLo9z4v&X-Amz-Signature=09d6cd229c5796fef9fae2ee1e48e73d969645df44774e50b0eaa6a0d71d4939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD4DOITT%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO%2BPzw%2FOwqgYRr9kUtlsia1574OdPPWVOHi3DWY92ieAiEAjUoylG1xBBJpjlye7QEU9fW1WsIx2YGDMlly6wGmyeEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaPfVM15yaU%2FhCacyrcAxGUskJsPaAXjtfVIWN13C95VXNCHIxSgebLlB83i75h7frkSve%2FdIhQYC4YKqyn2pCtvQNWVfZ9pNUBgegmZZ8KemLMew%2FbBkGkTUFQNUWs4xHIZqQZ3gDpucTnZfaXxfhMuqoKuU8hYJnGZRN4aa8h1gcn2v3%2BTn0%2ByAcTTs3mmUV7Dtj78Bn2Y78KW43u%2B5kmQa9RiP4Ect%2BCOl3HEGP5onmaE8%2BUmD73A7WfbhKCU6VnfojH4XkNsGC4zD3%2BYCIbslhpNhucDoQ%2BIMlCu8hzBVq6wknUY7kGVlQncgq0pY7yIaz3LMeU3dIVxWjRvhCyHw9biwXm7Q6AHyoCPLjkBjEkHPtfsQGrXx6b4E01wbiSIi6UdMmIYyDGdUxkYQd0zGgco4N2GzcrFHTbd3aOTmix0keaM%2BfN9G6WPceCPREmTCysrOZ9m3pBko%2FZt6vgxVj5Fwe5j3%2FMfFRs2TswFpxIB%2BWMpgKu5GBph6cclcabmfsj7e5viFo8hp%2FUVf%2FFdQ2ZrV%2BPZ6lnkW%2BwLjxm2pVbj53I9PlN5uf70s4sXnN%2FpYDXhSdd2jBgXJe3eVfoP1FyX3kYXfoAhA1V9qAP5e%2BKX40UI1QuVOuFwbWaV%2BHZkSZHp81ahGhSMJKQwcsGOqUBQNBQOamtktu7YhSDgoQ8P7ME6NxeY4gXJXMykmtbz0710pSLLeJEZuLJdBSoAO3JCbZgLs8V%2BkRjeCGG8Whc4dAgmh6Kb7pFi5lb%2FALOqQxEIjusb1Dcrt3DuZ7kpSsfDqKA0iBJKAl%2BSuFCfjiWKOy4%2B8Zy6FMYpKqTLS6SJEzlHAF%2FSqnKWjlUsJh3SHHe7GFUuoWbV5iIryaquGoGQOLo9z4v&X-Amz-Signature=a787e72c1a6c79f1da198e23078682d2656938b4d41b0cb0f9c0787350c07fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMK7AMR7%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqhxBJ1aRZp3AbHWQaccYNf7yrtT2bDUrWvtaMubD63AiB%2F%2BDQ%2B1FmGAwM0dy%2FA78GVH8o%2FOgmLcN9pTrPn4PcZPiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXbo7ub4%2BPpM3kC9mKtwDwpqf4lLBrRUDCFsMocFcivANa8wbfnnJBdBGzox0K1LPKGz6pHaRtCXuP%2FKPon%2BJgmfqym%2Bgja2KeKJsYtaFzwRqkT27W%2BkgB6yoskU5brY9Kccc%2F1R%2B46fSlrg9HKHJxMz%2FkeSwSyPOTN%2Brm9i6FnOr3bshb8v7yBN04xQnt%2B%2BcVFA8zNKEEeh%2FBt8cvjzGJjauhtimfj1DBXKX9IWn%2FimbQv%2FrObM9UP2NuUjshxt0Ua%2B0ti6UFMJYUmWzqCUeu1EAHssV3sRF6v%2BOi4LF1Gj6N0mr5eQEa2Lwz5Otsm9GDk74Vw6yyWHACtX146zzNu2dUDuz406YLdDpXVU8e4eBY40YjmYaP%2FO5mCjr1kCRPPk5nTwqHFxV%2BWG1oA8Pv%2BO%2B19oZC4iHQ8eq5g0Kml24w%2Fkl23c99fmUMSb%2F%2FsbCLeFXZtAc8vJLT8dOe5zMwek%2F4q6ykr2WjxnciMMtjjjhEpMgiK9oMGcbX30HUeKwHTDQnjm%2BR2x6e9%2F%2BPjhu%2By6%2FyVyEnvB72yI6mMVQrVRdv2ENPmbGiM8Hqmr6gOLYvf04Hrmm1FmV5Q6y8P1SzFVLnOaFjd%2B2x7BepiACGBByljQRO2vFb%2BATGg%2BLugwad3hMQuXeKkusSPQw6pDBywY6pgEQG%2Be3bAnQqIV%2FX4h2G1cVa6Q28nCRAyjrPiHmi%2FyaXnsl3Zq4eW4Zl27hbNb3yQCQa9nzgIG0BAOCQjn8%2FRzPr9BygDhb%2FULlXUTumi1KX%2BxX8Sn82Hqgp7NjaimLPsszmvhvmeR4jF8zU23eTtxZ4WkBwWwc76bXJKSXnZ0nHgmHdBjXcs0zZTZRUNvc2TUj6fR66kVKxSX1XWisnXTiWXUCaJUQ&X-Amz-Signature=8ca48464e73fc154a402a92c41a6b4bd75819ead23188082fdf060a17129a46a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMK7AMR7%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqhxBJ1aRZp3AbHWQaccYNf7yrtT2bDUrWvtaMubD63AiB%2F%2BDQ%2B1FmGAwM0dy%2FA78GVH8o%2FOgmLcN9pTrPn4PcZPiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXbo7ub4%2BPpM3kC9mKtwDwpqf4lLBrRUDCFsMocFcivANa8wbfnnJBdBGzox0K1LPKGz6pHaRtCXuP%2FKPon%2BJgmfqym%2Bgja2KeKJsYtaFzwRqkT27W%2BkgB6yoskU5brY9Kccc%2F1R%2B46fSlrg9HKHJxMz%2FkeSwSyPOTN%2Brm9i6FnOr3bshb8v7yBN04xQnt%2B%2BcVFA8zNKEEeh%2FBt8cvjzGJjauhtimfj1DBXKX9IWn%2FimbQv%2FrObM9UP2NuUjshxt0Ua%2B0ti6UFMJYUmWzqCUeu1EAHssV3sRF6v%2BOi4LF1Gj6N0mr5eQEa2Lwz5Otsm9GDk74Vw6yyWHACtX146zzNu2dUDuz406YLdDpXVU8e4eBY40YjmYaP%2FO5mCjr1kCRPPk5nTwqHFxV%2BWG1oA8Pv%2BO%2B19oZC4iHQ8eq5g0Kml24w%2Fkl23c99fmUMSb%2F%2FsbCLeFXZtAc8vJLT8dOe5zMwek%2F4q6ykr2WjxnciMMtjjjhEpMgiK9oMGcbX30HUeKwHTDQnjm%2BR2x6e9%2F%2BPjhu%2By6%2FyVyEnvB72yI6mMVQrVRdv2ENPmbGiM8Hqmr6gOLYvf04Hrmm1FmV5Q6y8P1SzFVLnOaFjd%2B2x7BepiACGBByljQRO2vFb%2BATGg%2BLugwad3hMQuXeKkusSPQw6pDBywY6pgEQG%2Be3bAnQqIV%2FX4h2G1cVa6Q28nCRAyjrPiHmi%2FyaXnsl3Zq4eW4Zl27hbNb3yQCQa9nzgIG0BAOCQjn8%2FRzPr9BygDhb%2FULlXUTumi1KX%2BxX8Sn82Hqgp7NjaimLPsszmvhvmeR4jF8zU23eTtxZ4WkBwWwc76bXJKSXnZ0nHgmHdBjXcs0zZTZRUNvc2TUj6fR66kVKxSX1XWisnXTiWXUCaJUQ&X-Amz-Signature=5522928bef78829a5b35c213dd9c0792a16d7631ade5ba1bda6c754770b99274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMK7AMR7%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqhxBJ1aRZp3AbHWQaccYNf7yrtT2bDUrWvtaMubD63AiB%2F%2BDQ%2B1FmGAwM0dy%2FA78GVH8o%2FOgmLcN9pTrPn4PcZPiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXbo7ub4%2BPpM3kC9mKtwDwpqf4lLBrRUDCFsMocFcivANa8wbfnnJBdBGzox0K1LPKGz6pHaRtCXuP%2FKPon%2BJgmfqym%2Bgja2KeKJsYtaFzwRqkT27W%2BkgB6yoskU5brY9Kccc%2F1R%2B46fSlrg9HKHJxMz%2FkeSwSyPOTN%2Brm9i6FnOr3bshb8v7yBN04xQnt%2B%2BcVFA8zNKEEeh%2FBt8cvjzGJjauhtimfj1DBXKX9IWn%2FimbQv%2FrObM9UP2NuUjshxt0Ua%2B0ti6UFMJYUmWzqCUeu1EAHssV3sRF6v%2BOi4LF1Gj6N0mr5eQEa2Lwz5Otsm9GDk74Vw6yyWHACtX146zzNu2dUDuz406YLdDpXVU8e4eBY40YjmYaP%2FO5mCjr1kCRPPk5nTwqHFxV%2BWG1oA8Pv%2BO%2B19oZC4iHQ8eq5g0Kml24w%2Fkl23c99fmUMSb%2F%2FsbCLeFXZtAc8vJLT8dOe5zMwek%2F4q6ykr2WjxnciMMtjjjhEpMgiK9oMGcbX30HUeKwHTDQnjm%2BR2x6e9%2F%2BPjhu%2By6%2FyVyEnvB72yI6mMVQrVRdv2ENPmbGiM8Hqmr6gOLYvf04Hrmm1FmV5Q6y8P1SzFVLnOaFjd%2B2x7BepiACGBByljQRO2vFb%2BATGg%2BLugwad3hMQuXeKkusSPQw6pDBywY6pgEQG%2Be3bAnQqIV%2FX4h2G1cVa6Q28nCRAyjrPiHmi%2FyaXnsl3Zq4eW4Zl27hbNb3yQCQa9nzgIG0BAOCQjn8%2FRzPr9BygDhb%2FULlXUTumi1KX%2BxX8Sn82Hqgp7NjaimLPsszmvhvmeR4jF8zU23eTtxZ4WkBwWwc76bXJKSXnZ0nHgmHdBjXcs0zZTZRUNvc2TUj6fR66kVKxSX1XWisnXTiWXUCaJUQ&X-Amz-Signature=c3546f5ab9f7d0069d2fe736e40611d2644941b3c5d6e565e013ad189718f719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMK7AMR7%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqhxBJ1aRZp3AbHWQaccYNf7yrtT2bDUrWvtaMubD63AiB%2F%2BDQ%2B1FmGAwM0dy%2FA78GVH8o%2FOgmLcN9pTrPn4PcZPiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXbo7ub4%2BPpM3kC9mKtwDwpqf4lLBrRUDCFsMocFcivANa8wbfnnJBdBGzox0K1LPKGz6pHaRtCXuP%2FKPon%2BJgmfqym%2Bgja2KeKJsYtaFzwRqkT27W%2BkgB6yoskU5brY9Kccc%2F1R%2B46fSlrg9HKHJxMz%2FkeSwSyPOTN%2Brm9i6FnOr3bshb8v7yBN04xQnt%2B%2BcVFA8zNKEEeh%2FBt8cvjzGJjauhtimfj1DBXKX9IWn%2FimbQv%2FrObM9UP2NuUjshxt0Ua%2B0ti6UFMJYUmWzqCUeu1EAHssV3sRF6v%2BOi4LF1Gj6N0mr5eQEa2Lwz5Otsm9GDk74Vw6yyWHACtX146zzNu2dUDuz406YLdDpXVU8e4eBY40YjmYaP%2FO5mCjr1kCRPPk5nTwqHFxV%2BWG1oA8Pv%2BO%2B19oZC4iHQ8eq5g0Kml24w%2Fkl23c99fmUMSb%2F%2FsbCLeFXZtAc8vJLT8dOe5zMwek%2F4q6ykr2WjxnciMMtjjjhEpMgiK9oMGcbX30HUeKwHTDQnjm%2BR2x6e9%2F%2BPjhu%2By6%2FyVyEnvB72yI6mMVQrVRdv2ENPmbGiM8Hqmr6gOLYvf04Hrmm1FmV5Q6y8P1SzFVLnOaFjd%2B2x7BepiACGBByljQRO2vFb%2BATGg%2BLugwad3hMQuXeKkusSPQw6pDBywY6pgEQG%2Be3bAnQqIV%2FX4h2G1cVa6Q28nCRAyjrPiHmi%2FyaXnsl3Zq4eW4Zl27hbNb3yQCQa9nzgIG0BAOCQjn8%2FRzPr9BygDhb%2FULlXUTumi1KX%2BxX8Sn82Hqgp7NjaimLPsszmvhvmeR4jF8zU23eTtxZ4WkBwWwc76bXJKSXnZ0nHgmHdBjXcs0zZTZRUNvc2TUj6fR66kVKxSX1XWisnXTiWXUCaJUQ&X-Amz-Signature=116a38bed15d865e71980ad41ff08a191234beb8eb234d3d804dc23561a527d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMK7AMR7%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqhxBJ1aRZp3AbHWQaccYNf7yrtT2bDUrWvtaMubD63AiB%2F%2BDQ%2B1FmGAwM0dy%2FA78GVH8o%2FOgmLcN9pTrPn4PcZPiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXbo7ub4%2BPpM3kC9mKtwDwpqf4lLBrRUDCFsMocFcivANa8wbfnnJBdBGzox0K1LPKGz6pHaRtCXuP%2FKPon%2BJgmfqym%2Bgja2KeKJsYtaFzwRqkT27W%2BkgB6yoskU5brY9Kccc%2F1R%2B46fSlrg9HKHJxMz%2FkeSwSyPOTN%2Brm9i6FnOr3bshb8v7yBN04xQnt%2B%2BcVFA8zNKEEeh%2FBt8cvjzGJjauhtimfj1DBXKX9IWn%2FimbQv%2FrObM9UP2NuUjshxt0Ua%2B0ti6UFMJYUmWzqCUeu1EAHssV3sRF6v%2BOi4LF1Gj6N0mr5eQEa2Lwz5Otsm9GDk74Vw6yyWHACtX146zzNu2dUDuz406YLdDpXVU8e4eBY40YjmYaP%2FO5mCjr1kCRPPk5nTwqHFxV%2BWG1oA8Pv%2BO%2B19oZC4iHQ8eq5g0Kml24w%2Fkl23c99fmUMSb%2F%2FsbCLeFXZtAc8vJLT8dOe5zMwek%2F4q6ykr2WjxnciMMtjjjhEpMgiK9oMGcbX30HUeKwHTDQnjm%2BR2x6e9%2F%2BPjhu%2By6%2FyVyEnvB72yI6mMVQrVRdv2ENPmbGiM8Hqmr6gOLYvf04Hrmm1FmV5Q6y8P1SzFVLnOaFjd%2B2x7BepiACGBByljQRO2vFb%2BATGg%2BLugwad3hMQuXeKkusSPQw6pDBywY6pgEQG%2Be3bAnQqIV%2FX4h2G1cVa6Q28nCRAyjrPiHmi%2FyaXnsl3Zq4eW4Zl27hbNb3yQCQa9nzgIG0BAOCQjn8%2FRzPr9BygDhb%2FULlXUTumi1KX%2BxX8Sn82Hqgp7NjaimLPsszmvhvmeR4jF8zU23eTtxZ4WkBwWwc76bXJKSXnZ0nHgmHdBjXcs0zZTZRUNvc2TUj6fR66kVKxSX1XWisnXTiWXUCaJUQ&X-Amz-Signature=9f8d3b5f919d9464115d7484dc7a6bef5f6a2c459b20b15ea48f4e74f5201c6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQEMGJGC%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8V9P1DTFjgp1iUgXHlsRJJs1Bd7OT27zbtP8Mmgz4YwIgcpQSekHUOGqTmPefHp6%2BqwzS6%2BcTL0gtA3%2FLUik0f5cqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeXPBWAvi6q5lh9rSrcAwDsIGry%2BsDKavmYLtNcSbVeUA6cijTm5pMRDvcLbSt6tjIcuK1MeTpjf%2BTV7GnNXVnx48g1%2BVxTWB1MeM8pB1MXbi7T5d%2FcaOgaqNNmVINbotxvq8uZDugCRiq0OWFFL7Bm4yWLoQNShbwSvgVYU3TPl6hBSu0mNoiLlY6ASarvVXrYZP%2Bkrj6ue%2FjOdlk85pQlPmBnbzRIIcibMXSPlSg911ol1d4UeBscfobJ6ImeWWBcaUHB3ykoOx0rNet%2FnD1nN%2BRF9NxqPUD%2FIek5jZ2FTr3a23AjTAGxA%2B6RgsAh6ur8KS2kMzCyUtXO4aADKlTdGjNTACTmzFhTdd6Sjo7yiL%2Bh7xaTcPtB8z42GgnhnoW0HcyRb4C4d8E%2FC0TQKvu8jTR4%2Bd4sW95byaDyVEIG8gTfu16ddCij%2Bl8VM5gaqaMI55zygd98Zhums2Q%2F%2FX5DU3P0A8fQ%2B9vVwgCyDljjmPg8EX%2FZg7PLrc4BuhUhHIeG2UQOm8OwG00uxoIhTT88y845AKzSAtruJO6qBNKbsuHHjvrq00%2FXR4CdimKjw4uGGh1wsa1hENaWJrFoh5NndTS5Q4mX%2F21rFOJFyjYSmTqiIFHIbcfVylHQOB30sQcMLrwT%2FxWtt3r4MMiPwcsGOqUBqiEiHiX7r%2FPNG%2BkMcqGt2%2BIfUaXwRiSy3W9s3DwacrowtkGx0eMT9QARjIj2%2B1n1CS%2FqL3jvbVXz0ei2ota%2F6kvky%2FinYn9Si4k9AuPN62VLzCcloX%2FuGx1X%2FBLgMCDyE7CQucZoieAzG6i%2F07eDsdqVk0Y4eg%2BG4kaOabkZv%2ByvR0Q3acn21hvty7DLtsS1Xx%2Fr2GaCrGrneC9ro5yS1s9S66oY&X-Amz-Signature=18167ec0f743c2c36b86c1c43bdbf4f3b2e9620ed4ba7823562f221c87c21f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQEMGJGC%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8V9P1DTFjgp1iUgXHlsRJJs1Bd7OT27zbtP8Mmgz4YwIgcpQSekHUOGqTmPefHp6%2BqwzS6%2BcTL0gtA3%2FLUik0f5cqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeXPBWAvi6q5lh9rSrcAwDsIGry%2BsDKavmYLtNcSbVeUA6cijTm5pMRDvcLbSt6tjIcuK1MeTpjf%2BTV7GnNXVnx48g1%2BVxTWB1MeM8pB1MXbi7T5d%2FcaOgaqNNmVINbotxvq8uZDugCRiq0OWFFL7Bm4yWLoQNShbwSvgVYU3TPl6hBSu0mNoiLlY6ASarvVXrYZP%2Bkrj6ue%2FjOdlk85pQlPmBnbzRIIcibMXSPlSg911ol1d4UeBscfobJ6ImeWWBcaUHB3ykoOx0rNet%2FnD1nN%2BRF9NxqPUD%2FIek5jZ2FTr3a23AjTAGxA%2B6RgsAh6ur8KS2kMzCyUtXO4aADKlTdGjNTACTmzFhTdd6Sjo7yiL%2Bh7xaTcPtB8z42GgnhnoW0HcyRb4C4d8E%2FC0TQKvu8jTR4%2Bd4sW95byaDyVEIG8gTfu16ddCij%2Bl8VM5gaqaMI55zygd98Zhums2Q%2F%2FX5DU3P0A8fQ%2B9vVwgCyDljjmPg8EX%2FZg7PLrc4BuhUhHIeG2UQOm8OwG00uxoIhTT88y845AKzSAtruJO6qBNKbsuHHjvrq00%2FXR4CdimKjw4uGGh1wsa1hENaWJrFoh5NndTS5Q4mX%2F21rFOJFyjYSmTqiIFHIbcfVylHQOB30sQcMLrwT%2FxWtt3r4MMiPwcsGOqUBqiEiHiX7r%2FPNG%2BkMcqGt2%2BIfUaXwRiSy3W9s3DwacrowtkGx0eMT9QARjIj2%2B1n1CS%2FqL3jvbVXz0ei2ota%2F6kvky%2FinYn9Si4k9AuPN62VLzCcloX%2FuGx1X%2FBLgMCDyE7CQucZoieAzG6i%2F07eDsdqVk0Y4eg%2BG4kaOabkZv%2ByvR0Q3acn21hvty7DLtsS1Xx%2Fr2GaCrGrneC9ro5yS1s9S66oY&X-Amz-Signature=8c05c64a32a121eed22e796740270c75edd39d2dc4dc8bdacf3b7a0f4d638343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQEMGJGC%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8V9P1DTFjgp1iUgXHlsRJJs1Bd7OT27zbtP8Mmgz4YwIgcpQSekHUOGqTmPefHp6%2BqwzS6%2BcTL0gtA3%2FLUik0f5cqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeXPBWAvi6q5lh9rSrcAwDsIGry%2BsDKavmYLtNcSbVeUA6cijTm5pMRDvcLbSt6tjIcuK1MeTpjf%2BTV7GnNXVnx48g1%2BVxTWB1MeM8pB1MXbi7T5d%2FcaOgaqNNmVINbotxvq8uZDugCRiq0OWFFL7Bm4yWLoQNShbwSvgVYU3TPl6hBSu0mNoiLlY6ASarvVXrYZP%2Bkrj6ue%2FjOdlk85pQlPmBnbzRIIcibMXSPlSg911ol1d4UeBscfobJ6ImeWWBcaUHB3ykoOx0rNet%2FnD1nN%2BRF9NxqPUD%2FIek5jZ2FTr3a23AjTAGxA%2B6RgsAh6ur8KS2kMzCyUtXO4aADKlTdGjNTACTmzFhTdd6Sjo7yiL%2Bh7xaTcPtB8z42GgnhnoW0HcyRb4C4d8E%2FC0TQKvu8jTR4%2Bd4sW95byaDyVEIG8gTfu16ddCij%2Bl8VM5gaqaMI55zygd98Zhums2Q%2F%2FX5DU3P0A8fQ%2B9vVwgCyDljjmPg8EX%2FZg7PLrc4BuhUhHIeG2UQOm8OwG00uxoIhTT88y845AKzSAtruJO6qBNKbsuHHjvrq00%2FXR4CdimKjw4uGGh1wsa1hENaWJrFoh5NndTS5Q4mX%2F21rFOJFyjYSmTqiIFHIbcfVylHQOB30sQcMLrwT%2FxWtt3r4MMiPwcsGOqUBqiEiHiX7r%2FPNG%2BkMcqGt2%2BIfUaXwRiSy3W9s3DwacrowtkGx0eMT9QARjIj2%2B1n1CS%2FqL3jvbVXz0ei2ota%2F6kvky%2FinYn9Si4k9AuPN62VLzCcloX%2FuGx1X%2FBLgMCDyE7CQucZoieAzG6i%2F07eDsdqVk0Y4eg%2BG4kaOabkZv%2ByvR0Q3acn21hvty7DLtsS1Xx%2Fr2GaCrGrneC9ro5yS1s9S66oY&X-Amz-Signature=8adaeb7299689400ffa1ea72a505349f3c3364645c25d9fe2f8c17fab19a41b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULU2SPA%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbVogrbGAXcUkryQ5Wj5Nu3GrcaL2i1bVEpbqBugXjDAiEAkOYjtaOrDhi7mzbaXfdVpUcMybmtwwn7aHZNVz2FG0oqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDES98%2FDI3HbcTvMaRyrcAw9dCmRh8t0aWovWFw%2F4VpJl7Iq5H8wFawK7oWDTBHAj4Co%2BEnL3LmSkuQy6cZz04ltuFXaa%2BeB92QVIJcasv5LmrfEB9SKafAIL6D70kr0SEkaSS93wmzIASnEfBCB0Uf3MieazXh3yU%2Bal8jMYWRlNoj7qqeSr9n98dXTZgKTvWAgpE22GXsrzptJ6rbhjXvBxP2IP5vDhEFbtLwmYQYI9TKxCzNZ1VLQxJow3ZinVaL%2FMBlWAl1bP1hG3wwtG3pXQdv0i0g0f8YEjoV7a0iuLU6NFBQ0Z2PwrtetbDudqSwpYoT4ektXNSkYFjC2Y3C%2FUtdlugfz9KCpIGjeWTK4W9D%2FGJHa8DicYPgjzGM67Oty7HLje7Eamvlsuc6sJ9PJ3d8KdhlLSM761I2ifMC7rQZjNhh0ypSRAP9SVq8S2enVW%2BCDMLl6PqZh2Uc%2FejPWrXIscV7M2bVmvhSaqpRLKTWbkxbU5C9sQ5j7BOdbhgzxzcQmhEb4s4%2F3I1fmVc1mkCLH9rXxGHjUZ9RXDBPucTnUXs6r3XfhKAAOAhdKBlg%2F%2Bfdhs45enN%2BZZhWkABBUyuS9rwwtenjlxzJNgFbO3%2BPoDofsGMC5O6vqRbB8s2ds56xHPl0YQnoNrMPWPwcsGOqUBprq41ewMYDZZ9ay5v8XQ4aP%2FVPtquj5hmg5SXYeMb1XOs6hCfjd4DZh3Gf4m9r1dbBJSJo2FOoAIEFGFqYG0qs8cYtdj16ZCRn2%2FSYXvRpZcsuhEBzv5OpWi1Xh8vWQ5kOuTc4l0WDxQrFyq7eGfVRjg5w9rodCAZnOLcOoRaQR71Qjkl6LuOAxCZSvTHbN4YuPdLQVTD4NdrP0hVAomJkruAjcN&X-Amz-Signature=b4c3542f2fbc08241e29c7e7a154985313251217b3daf257da9beb7bd715c3cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULU2SPA%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbVogrbGAXcUkryQ5Wj5Nu3GrcaL2i1bVEpbqBugXjDAiEAkOYjtaOrDhi7mzbaXfdVpUcMybmtwwn7aHZNVz2FG0oqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDES98%2FDI3HbcTvMaRyrcAw9dCmRh8t0aWovWFw%2F4VpJl7Iq5H8wFawK7oWDTBHAj4Co%2BEnL3LmSkuQy6cZz04ltuFXaa%2BeB92QVIJcasv5LmrfEB9SKafAIL6D70kr0SEkaSS93wmzIASnEfBCB0Uf3MieazXh3yU%2Bal8jMYWRlNoj7qqeSr9n98dXTZgKTvWAgpE22GXsrzptJ6rbhjXvBxP2IP5vDhEFbtLwmYQYI9TKxCzNZ1VLQxJow3ZinVaL%2FMBlWAl1bP1hG3wwtG3pXQdv0i0g0f8YEjoV7a0iuLU6NFBQ0Z2PwrtetbDudqSwpYoT4ektXNSkYFjC2Y3C%2FUtdlugfz9KCpIGjeWTK4W9D%2FGJHa8DicYPgjzGM67Oty7HLje7Eamvlsuc6sJ9PJ3d8KdhlLSM761I2ifMC7rQZjNhh0ypSRAP9SVq8S2enVW%2BCDMLl6PqZh2Uc%2FejPWrXIscV7M2bVmvhSaqpRLKTWbkxbU5C9sQ5j7BOdbhgzxzcQmhEb4s4%2F3I1fmVc1mkCLH9rXxGHjUZ9RXDBPucTnUXs6r3XfhKAAOAhdKBlg%2F%2Bfdhs45enN%2BZZhWkABBUyuS9rwwtenjlxzJNgFbO3%2BPoDofsGMC5O6vqRbB8s2ds56xHPl0YQnoNrMPWPwcsGOqUBprq41ewMYDZZ9ay5v8XQ4aP%2FVPtquj5hmg5SXYeMb1XOs6hCfjd4DZh3Gf4m9r1dbBJSJo2FOoAIEFGFqYG0qs8cYtdj16ZCRn2%2FSYXvRpZcsuhEBzv5OpWi1Xh8vWQ5kOuTc4l0WDxQrFyq7eGfVRjg5w9rodCAZnOLcOoRaQR71Qjkl6LuOAxCZSvTHbN4YuPdLQVTD4NdrP0hVAomJkruAjcN&X-Amz-Signature=ffb6f520fb3ddcd171c3a8838fad9644a2b00fde2dcb8070e33d1fff95e9265b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665XTODG5%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMeuh5GDdWDCV6Axt%2BZEfgkfx2NJrdJEM5NrOh6GWSIAIgdEkrnT3guHutN3wFmGiIfRIkJxULbGZC7wJsK72LbaoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJoYMS3pvXR4V9KqyrcAxgYr11bT8xCdW4oin0xzqtheUyo7aee1UDfn3obvU%2BgBtFY%2Fq%2F8wiUQFLYfhuidjNahIRODEQwxYOJd4xNdIcU8Bem9I9dWUvsUOZueCAO82%2FANroRvG7%2FRUs7IRzgMeOAQXSJwdfXxRwpm55i%2Fzkz1qnwTR3%2F8hHLlgHMjjihUDJCaiGwH0UXb47GAkwL75uYCAgXpfJjKzd2jrpm0XHCh95XNYFZO728hEEDgLTYaDUOeN1CENm2S%2BQ8sHlMBbnRRrTP01wildKEF2JuO8aVSwpxlPZSAIzwm8FogxSXPA4zQAqnZkBPydLntsDQRt9CwboEusWiY5i2upNzPDpXgxuUNZ%2BPs9edU6A%2BDIQbUIHrDNeWjucwBt71USDV0qDhr97OJT5yPruzWAfZNNCXe0I6GjTjSFKHJIiAk5u8ABKH3%2BafmX915JHzVAemRkhfu5XYfBkUZo8cbFDg7zX6f%2BIL%2BK%2FBxylsTm55H%2FlvykpO%2FnKazopiiwFTUc3ziFE00oq2%2FWCoqNDab3rf5Q%2BA%2FztCwMGSDhqpDSzpoXkmXa9%2FemO9jmPH9XZ3TjdkDfQaICQi2xEj6zcgkCs3m8LP8krhk96V%2FdwiXuRA2%2B9BQX96EjkMDVrBB6T1vMMqQwcsGOqUBxaGp8Niwdz4dOZsRkNdXtfl4OBp%2FyVvDLDkNURAGCo%2Bjw7%2BrVfh81Nmuz8nzsrbteSZCijE%2FNT8cugHRN2WSccAEU4Rdf2lIskVS3Vs%2B8tc3LVK3nGNIFGhKy%2Fdqy%2FwesioN2Yvaj52mGPaXWwlr6J9zjXC5MV8dS7wtw8mzxoorBa01s1Vj1wIKFaBTfpQ5Ycccu17pcFlrCSHBC8rRNYuflkJu&X-Amz-Signature=53346af3974c901b458a03a11db474530e0ecdcb2d524aa16be1670067f0b35b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665XTODG5%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMeuh5GDdWDCV6Axt%2BZEfgkfx2NJrdJEM5NrOh6GWSIAIgdEkrnT3guHutN3wFmGiIfRIkJxULbGZC7wJsK72LbaoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJoYMS3pvXR4V9KqyrcAxgYr11bT8xCdW4oin0xzqtheUyo7aee1UDfn3obvU%2BgBtFY%2Fq%2F8wiUQFLYfhuidjNahIRODEQwxYOJd4xNdIcU8Bem9I9dWUvsUOZueCAO82%2FANroRvG7%2FRUs7IRzgMeOAQXSJwdfXxRwpm55i%2Fzkz1qnwTR3%2F8hHLlgHMjjihUDJCaiGwH0UXb47GAkwL75uYCAgXpfJjKzd2jrpm0XHCh95XNYFZO728hEEDgLTYaDUOeN1CENm2S%2BQ8sHlMBbnRRrTP01wildKEF2JuO8aVSwpxlPZSAIzwm8FogxSXPA4zQAqnZkBPydLntsDQRt9CwboEusWiY5i2upNzPDpXgxuUNZ%2BPs9edU6A%2BDIQbUIHrDNeWjucwBt71USDV0qDhr97OJT5yPruzWAfZNNCXe0I6GjTjSFKHJIiAk5u8ABKH3%2BafmX915JHzVAemRkhfu5XYfBkUZo8cbFDg7zX6f%2BIL%2BK%2FBxylsTm55H%2FlvykpO%2FnKazopiiwFTUc3ziFE00oq2%2FWCoqNDab3rf5Q%2BA%2FztCwMGSDhqpDSzpoXkmXa9%2FemO9jmPH9XZ3TjdkDfQaICQi2xEj6zcgkCs3m8LP8krhk96V%2FdwiXuRA2%2B9BQX96EjkMDVrBB6T1vMMqQwcsGOqUBxaGp8Niwdz4dOZsRkNdXtfl4OBp%2FyVvDLDkNURAGCo%2Bjw7%2BrVfh81Nmuz8nzsrbteSZCijE%2FNT8cugHRN2WSccAEU4Rdf2lIskVS3Vs%2B8tc3LVK3nGNIFGhKy%2Fdqy%2FwesioN2Yvaj52mGPaXWwlr6J9zjXC5MV8dS7wtw8mzxoorBa01s1Vj1wIKFaBTfpQ5Ycccu17pcFlrCSHBC8rRNYuflkJu&X-Amz-Signature=8b3f4e5c1cb89e16467d005c8c349655d66171d38911452dcb0c1fb437065981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665XTODG5%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMeuh5GDdWDCV6Axt%2BZEfgkfx2NJrdJEM5NrOh6GWSIAIgdEkrnT3guHutN3wFmGiIfRIkJxULbGZC7wJsK72LbaoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJoYMS3pvXR4V9KqyrcAxgYr11bT8xCdW4oin0xzqtheUyo7aee1UDfn3obvU%2BgBtFY%2Fq%2F8wiUQFLYfhuidjNahIRODEQwxYOJd4xNdIcU8Bem9I9dWUvsUOZueCAO82%2FANroRvG7%2FRUs7IRzgMeOAQXSJwdfXxRwpm55i%2Fzkz1qnwTR3%2F8hHLlgHMjjihUDJCaiGwH0UXb47GAkwL75uYCAgXpfJjKzd2jrpm0XHCh95XNYFZO728hEEDgLTYaDUOeN1CENm2S%2BQ8sHlMBbnRRrTP01wildKEF2JuO8aVSwpxlPZSAIzwm8FogxSXPA4zQAqnZkBPydLntsDQRt9CwboEusWiY5i2upNzPDpXgxuUNZ%2BPs9edU6A%2BDIQbUIHrDNeWjucwBt71USDV0qDhr97OJT5yPruzWAfZNNCXe0I6GjTjSFKHJIiAk5u8ABKH3%2BafmX915JHzVAemRkhfu5XYfBkUZo8cbFDg7zX6f%2BIL%2BK%2FBxylsTm55H%2FlvykpO%2FnKazopiiwFTUc3ziFE00oq2%2FWCoqNDab3rf5Q%2BA%2FztCwMGSDhqpDSzpoXkmXa9%2FemO9jmPH9XZ3TjdkDfQaICQi2xEj6zcgkCs3m8LP8krhk96V%2FdwiXuRA2%2B9BQX96EjkMDVrBB6T1vMMqQwcsGOqUBxaGp8Niwdz4dOZsRkNdXtfl4OBp%2FyVvDLDkNURAGCo%2Bjw7%2BrVfh81Nmuz8nzsrbteSZCijE%2FNT8cugHRN2WSccAEU4Rdf2lIskVS3Vs%2B8tc3LVK3nGNIFGhKy%2Fdqy%2FwesioN2Yvaj52mGPaXWwlr6J9zjXC5MV8dS7wtw8mzxoorBa01s1Vj1wIKFaBTfpQ5Ycccu17pcFlrCSHBC8rRNYuflkJu&X-Amz-Signature=629baf6ee64cc80e631ae8aa766b60de79eba0905f5921616d2ba1be06794ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665XTODG5%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMeuh5GDdWDCV6Axt%2BZEfgkfx2NJrdJEM5NrOh6GWSIAIgdEkrnT3guHutN3wFmGiIfRIkJxULbGZC7wJsK72LbaoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJoYMS3pvXR4V9KqyrcAxgYr11bT8xCdW4oin0xzqtheUyo7aee1UDfn3obvU%2BgBtFY%2Fq%2F8wiUQFLYfhuidjNahIRODEQwxYOJd4xNdIcU8Bem9I9dWUvsUOZueCAO82%2FANroRvG7%2FRUs7IRzgMeOAQXSJwdfXxRwpm55i%2Fzkz1qnwTR3%2F8hHLlgHMjjihUDJCaiGwH0UXb47GAkwL75uYCAgXpfJjKzd2jrpm0XHCh95XNYFZO728hEEDgLTYaDUOeN1CENm2S%2BQ8sHlMBbnRRrTP01wildKEF2JuO8aVSwpxlPZSAIzwm8FogxSXPA4zQAqnZkBPydLntsDQRt9CwboEusWiY5i2upNzPDpXgxuUNZ%2BPs9edU6A%2BDIQbUIHrDNeWjucwBt71USDV0qDhr97OJT5yPruzWAfZNNCXe0I6GjTjSFKHJIiAk5u8ABKH3%2BafmX915JHzVAemRkhfu5XYfBkUZo8cbFDg7zX6f%2BIL%2BK%2FBxylsTm55H%2FlvykpO%2FnKazopiiwFTUc3ziFE00oq2%2FWCoqNDab3rf5Q%2BA%2FztCwMGSDhqpDSzpoXkmXa9%2FemO9jmPH9XZ3TjdkDfQaICQi2xEj6zcgkCs3m8LP8krhk96V%2FdwiXuRA2%2B9BQX96EjkMDVrBB6T1vMMqQwcsGOqUBxaGp8Niwdz4dOZsRkNdXtfl4OBp%2FyVvDLDkNURAGCo%2Bjw7%2BrVfh81Nmuz8nzsrbteSZCijE%2FNT8cugHRN2WSccAEU4Rdf2lIskVS3Vs%2B8tc3LVK3nGNIFGhKy%2Fdqy%2FwesioN2Yvaj52mGPaXWwlr6J9zjXC5MV8dS7wtw8mzxoorBa01s1Vj1wIKFaBTfpQ5Ycccu17pcFlrCSHBC8rRNYuflkJu&X-Amz-Signature=adf1c3601a8e1d149cdc49237056c3acd246a797efe28789af6dcfb40a162a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665XTODG5%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMeuh5GDdWDCV6Axt%2BZEfgkfx2NJrdJEM5NrOh6GWSIAIgdEkrnT3guHutN3wFmGiIfRIkJxULbGZC7wJsK72LbaoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJoYMS3pvXR4V9KqyrcAxgYr11bT8xCdW4oin0xzqtheUyo7aee1UDfn3obvU%2BgBtFY%2Fq%2F8wiUQFLYfhuidjNahIRODEQwxYOJd4xNdIcU8Bem9I9dWUvsUOZueCAO82%2FANroRvG7%2FRUs7IRzgMeOAQXSJwdfXxRwpm55i%2Fzkz1qnwTR3%2F8hHLlgHMjjihUDJCaiGwH0UXb47GAkwL75uYCAgXpfJjKzd2jrpm0XHCh95XNYFZO728hEEDgLTYaDUOeN1CENm2S%2BQ8sHlMBbnRRrTP01wildKEF2JuO8aVSwpxlPZSAIzwm8FogxSXPA4zQAqnZkBPydLntsDQRt9CwboEusWiY5i2upNzPDpXgxuUNZ%2BPs9edU6A%2BDIQbUIHrDNeWjucwBt71USDV0qDhr97OJT5yPruzWAfZNNCXe0I6GjTjSFKHJIiAk5u8ABKH3%2BafmX915JHzVAemRkhfu5XYfBkUZo8cbFDg7zX6f%2BIL%2BK%2FBxylsTm55H%2FlvykpO%2FnKazopiiwFTUc3ziFE00oq2%2FWCoqNDab3rf5Q%2BA%2FztCwMGSDhqpDSzpoXkmXa9%2FemO9jmPH9XZ3TjdkDfQaICQi2xEj6zcgkCs3m8LP8krhk96V%2FdwiXuRA2%2B9BQX96EjkMDVrBB6T1vMMqQwcsGOqUBxaGp8Niwdz4dOZsRkNdXtfl4OBp%2FyVvDLDkNURAGCo%2Bjw7%2BrVfh81Nmuz8nzsrbteSZCijE%2FNT8cugHRN2WSccAEU4Rdf2lIskVS3Vs%2B8tc3LVK3nGNIFGhKy%2Fdqy%2FwesioN2Yvaj52mGPaXWwlr6J9zjXC5MV8dS7wtw8mzxoorBa01s1Vj1wIKFaBTfpQ5Ycccu17pcFlrCSHBC8rRNYuflkJu&X-Amz-Signature=1a63e304b0e1b9b16e193a476b6b4feae4453e1df574b09c1c0b263c3007a974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2OWC7VU%2F20260121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260121T041526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFpViTG%2BIMN6ti57kr4LR0EpfIa%2FZqLxUuzMiH2oBPoAiEAni6S%2F0%2BKe%2BgbEUTklSqnout2mPPnZaJTFM4fMHvmUnsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQs6bQjYalMCbBEfCrcA97IQPW36tM7igghd6pUccodRHJyUxzRIJqWQo7MQ1RiOJR91M%2BgwHritMzDSgUulvFwAApACogORBs71P1qc3illQFskqt8m%2FCJhIQhkwcOYMXwqclr4NYSeTyeTSpu%2Fh%2BDimRoRfN8%2F%2F8j1zIUe9pQcKoyLkaG18bkqS%2FkT74hufcnGQeC%2BfxEGtB30sj3WLXi92iBLvi%2BDyw7OW0IhZ8%2BiPF%2BS%2B55TjWU1OmCAlcgBzn69T7O7CYATRHnA%2FDhnTEDLBlG3QDfosmNzEdEguN%2F3bjcMoIwfBkjeElScBCzt2i632rpCcTqzIp6sntO6tBugV1fcNwYpEYlnC9uSwsHpwUbg%2Fqkt%2Fy%2Fsl3GQo04CEIEJvr7A2N9P9xOcsjdwEGxXNfdwvwG4lY%2B8sySbCcQLAr6SmdfotCPoG4le%2BeId0TcKKRE%2FB1sNoApk7NWBZZQGIjKz%2B9%2Bql8iC%2BQTYjCLyt0fIO%2B4sj2TTAlD%2BNytv7TnHzj8UwoJG03CQ%2Bc5Br34cknu7kIxul7nKa4kww%2FTAfwIfXqtDsGAesizXfQuAEV0R%2FHzEWLw%2Fsp%2FdNlG29bc8uOJhtzV8BuqvOCxAURC9sS%2Fqa95cc6ue8nsviLZ9ttewzIlNvnhQM77MMqQwcsGOqUBGuhukz5cDfB%2FmcVaqgfPteKfno0%2BmoEtGTC5u13FACmIPMPQiBdJHopjq9eTaN8l8JJ4JMvBO5xq%2Bewz3huxBg4Af1vrqfHyMKe1kSO6KHfwARmah2mjmqTpQDRtSh%2B0sQQe0ji%2BEQgQO9ron4LURAd220xvtxdEK%2FkhKs%2FjqJidngQWA6BDv8dEhnRX6OLOQVbbdJMdoOkbY0Q3K06MQye5mb8w&X-Amz-Signature=ef81cad6f04b96651a491652e8c71c3b48158bfdfd2a73338443e560a7f8b0f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

