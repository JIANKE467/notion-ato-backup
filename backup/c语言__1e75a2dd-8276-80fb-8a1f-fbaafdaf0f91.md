
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3TMFNVM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHP1InJ6X7P%2FXXHCh1emE0RVX4O1NbD5U%2FaN7NPPamJiAiEA399dUgU01ATuBKVfzEWbvPiPN9%2FX9GgTSejcHZeKndQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXkEVi5sGam2jDkuCrcA3eY7g6w2Kl%2F6kq3CM2onndmlTwTkYieYE0w5EtTGsnTiwT94x8Qndg5kBvXYl%2Bzsi8WSHnkNiAk%2Fex4KTVZnFtyB84XBSE%2F2MilwrOgfAXdKhMblOul57077tFoP7cJdp2Ah%2FNiyd7%2BkwW10mJR2w9mUHXVNXnLKrqXeOL60G6OQ%2BZZmzxs9LAJK86l5oFQVN4Q9xZF%2B8vbc9x7lhXC9xo%2Fvf63B5%2BcoGZF3E2wBOB%2BXWMR1%2BEjFmVmJucSLRrRm6uG9phAi9BvXmuV5da4Xw9qgRe2tbO7bmkOZsUgT%2FOPxRYJf%2F2pysjmG%2BVJzWUBOiqwi7GQCWs14wne01u8xCw8VDruRKGjIUt%2Bmgyr%2FSWYkQrc6d9pibSVXXGoPFSLXKOKCZkQDjT%2FX7G1RGVIsRbdDlptW7WGFNcBFz2GaG51uEcodWbY7Tdn906eawSL7TR7RHVk%2FWQd09SxTx7S9BbWyKnxNUUls%2FZw8QW1TvCa3RSWBoKc%2B5P%2BiBlA3W4gbxK64gehaanjIBSQBnwYnvCODFv41nC2VFCmX5YnKQ61Yu1PvXfWd757gnhl8489xpmnN6vH45nXuNfPTXyxJoVQEIGSYbDQQwHMQT0dPd9pKHgTjKdlBGWURbUZMI6Go8oGOqUBhje1B92xw71BG0WNMURL%2B0yZ%2FTFC30%2FIhXJJAWm3wpPJMjQgruffSYaBPc8b35pKB2uLwCX8frj1IM%2FjYBQc3f5ornPSVXjbIs883QhwdXHGrPRfGBMtPvBHE4%2FKSU%2FzjgwHDjNigsjGBsDyXfeUQsJ18AayPU%2BA1JmJ7ljiwbtnUFX0NFZKGKnjq1o6qbRPsi5bZ8bawdJEoJsi9t%2BcsI6p3Qc5&X-Amz-Signature=9f1515ec61e8cd6db3550ad5bf9082dce3275f7775dd365ce4e6fb23b07994a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE475IGM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCzyCFIcAtzejIrbW93JGDoWyCU%2Blo3QEdVpRljJJYz7gIhAIQjuQxFfUsdFvWiSWvAVyPm7ipA%2B4RjEIuI7Gw0DAMzKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKwzldLb5RNvqpbO4q3APmcRyZ7zqluIw8GSi3lN1WbplI6pJxBVselT4LwjsIFzz8K3P2kxtwj69zW%2FqkWJyO%2BFqSh%2FgJwGGZAz9%2FTvOSIS5NMV19rEOUE5M7H59sfcTdNmRkBpGD%2BZSJ%2BgfaO0YuPb6xnXR1hNgp5Nb0BJhpk6yBGIYb7FXLJjauB25Xk%2BENtC%2FV8uGKaqDETKw1RNls2PaaeSlWDiufTGlfeSgxHuPMu3F7JX1EHKCT8SNmAqan4Iy%2FzRzMQYwV%2F5iOlNBED3JwS8WgXc7pxkXC5WPMSr9hzOIg%2BpiD1XbH8ekV3AtuzWviI4ObSul6%2BV90wa1CgOtsw610nDkLMx2rMmDKACt85YQ8SoW%2B1lT7Z2XQIxdd74OrqgTWFYWGDmWxo5Zevn4MseoR74OVE4eawmoABfprplvVjq9MSFwoVDaHMxm0S708xHhqq1p6MpZrF5SWLVUT3MNomy4uiSJeLvzZASC8XqWjZIt3SOMUdS%2FZEcLRxh0yqclrD77rvTvAT56qEoeNpZbgNlRry5536h%2FUTfritnpoJc4OY1pkeNmWM78S95gHc5T0lHHcRzUFfJZqePGu2y6dgZ60OgdnUxIacUosQBpg4Efpon1EsdoV%2FMVeIU%2FnGCx%2FDCANszC4hqPKBjqkAVdmLkXjDpYpTN%2B3LspBDufKKipf9iOu%2Bl98Da4CSxQTWJNBA%2FCTp82FhRPNxo4oA87ct%2BPeacn7jtE9cnxnE7U7UcFN7A26GUTTULrpjOs4FyDpoi3%2F9MMxOiTIDhta6xm%2FlhAr%2F76GQQ34McdqK5pqRIXhvEuQ0qgUD7puBkq6dpOTAqb01X9wBygQC0%2FwtXDDXi7CPBQnJSTvvQNjPlzgSR%2FS&X-Amz-Signature=ce7e303c136a00f5a74db75a4d98ae6523a0bd1f7c4f9ca0a15bf240f27a7ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE475IGM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCzyCFIcAtzejIrbW93JGDoWyCU%2Blo3QEdVpRljJJYz7gIhAIQjuQxFfUsdFvWiSWvAVyPm7ipA%2B4RjEIuI7Gw0DAMzKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKwzldLb5RNvqpbO4q3APmcRyZ7zqluIw8GSi3lN1WbplI6pJxBVselT4LwjsIFzz8K3P2kxtwj69zW%2FqkWJyO%2BFqSh%2FgJwGGZAz9%2FTvOSIS5NMV19rEOUE5M7H59sfcTdNmRkBpGD%2BZSJ%2BgfaO0YuPb6xnXR1hNgp5Nb0BJhpk6yBGIYb7FXLJjauB25Xk%2BENtC%2FV8uGKaqDETKw1RNls2PaaeSlWDiufTGlfeSgxHuPMu3F7JX1EHKCT8SNmAqan4Iy%2FzRzMQYwV%2F5iOlNBED3JwS8WgXc7pxkXC5WPMSr9hzOIg%2BpiD1XbH8ekV3AtuzWviI4ObSul6%2BV90wa1CgOtsw610nDkLMx2rMmDKACt85YQ8SoW%2B1lT7Z2XQIxdd74OrqgTWFYWGDmWxo5Zevn4MseoR74OVE4eawmoABfprplvVjq9MSFwoVDaHMxm0S708xHhqq1p6MpZrF5SWLVUT3MNomy4uiSJeLvzZASC8XqWjZIt3SOMUdS%2FZEcLRxh0yqclrD77rvTvAT56qEoeNpZbgNlRry5536h%2FUTfritnpoJc4OY1pkeNmWM78S95gHc5T0lHHcRzUFfJZqePGu2y6dgZ60OgdnUxIacUosQBpg4Efpon1EsdoV%2FMVeIU%2FnGCx%2FDCANszC4hqPKBjqkAVdmLkXjDpYpTN%2B3LspBDufKKipf9iOu%2Bl98Da4CSxQTWJNBA%2FCTp82FhRPNxo4oA87ct%2BPeacn7jtE9cnxnE7U7UcFN7A26GUTTULrpjOs4FyDpoi3%2F9MMxOiTIDhta6xm%2FlhAr%2F76GQQ34McdqK5pqRIXhvEuQ0qgUD7puBkq6dpOTAqb01X9wBygQC0%2FwtXDDXi7CPBQnJSTvvQNjPlzgSR%2FS&X-Amz-Signature=2d55df10a16256f7357bfd4da4b85bf71c52d9020d5222e6a3b65449e102668b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZBVLCF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQC2mRxVIvxzAjDphEeLB%2Be1zwT337TRzd5zDVD6hbYZVgIgJjCunOocL4LE%2BMVsHygERL7pIdExYGQyI0roTY1uuwAqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFNykQtYtyBat6kjircA1sDL2To0kqyZylX1cMv7vJXvZa8b2KUN8keXJtfADRR8G%2BpuImPBoFPVq1DomkUX7ZEgl%2B9p8d9tSKk5f1qxpGX%2FsPsHOthlKYlK3jgaJ1cGpmxqXz4Vpxi3ikTlxSPwZoKWJhlib%2BPFWhVKC9fsTZNVSPqwrmnxFOVrLITLPaTxfQzD3mNtFHpt%2F9p%2BiTh2ZlzLRgL5QV8wk8OtSzie6%2BRg7izJlHqLNOdKnuxpZfNZPtRkdHs3jqXWVCXeu5yWY0txQb37KMM%2Fut5X8zbthmnj%2BaYA%2FS4peLddcCB8CWvxHF41xIIUcaIUa5OiemMux15kNOVCZdiezTpJ%2FTci6ClCF%2Bg4JTjrZ2i8rO%2FEuNZ5KTU0VqIcjfVzrfzSx5SELSw%2FrmJaXHtPz8Qn6k%2FOvVYrJtnEQmbwBKEWprNi06MVapdEm8BT10JvTKSY60oni4iBmp5mIEK%2F7KX2BE1sB0CcAtZ2EQS67MmAosgR8iS98vUfsEVsHN%2Fp3%2BeTnxEZ3MD4yqb7fx73M2F4CxQT2ssCe0Evw1Czixxe%2BIOtg0T%2FeI7DGsul4ZXI4mrByOChNyMyVcZiIG57ogf3hUsUwZtiUS4D4Vk6pltVc0A3pCZvlMsw%2FTJYG6qwxzoMMWFo8oGOqUBJbXvhazFYvEqUGOAJMIFjivv6lb3%2BDorhMd0qEuAj5xfo9Ic%2F67lgOxEMChjpk22xhrqITY4d%2Ff41Jq0ZXdDwAhm4IcjA%2F%2BJPrKK1CqcRDDbFhvTx%2Fo9D6AQlVI05NPGeOxMPyFFHm2XiOlo4QMLKzK0ROHV3o77v8tBoHnhHTuMI8w0c2Aqi3mRZfuC0dVL21XB9XTA0ACLwKh5IdA9rxTR6Ga%2B&X-Amz-Signature=526c7be1b4b932158de4697f0d9cd87c49a43155b6a7d8826941ba313bb7aa0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZBVLCF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQC2mRxVIvxzAjDphEeLB%2Be1zwT337TRzd5zDVD6hbYZVgIgJjCunOocL4LE%2BMVsHygERL7pIdExYGQyI0roTY1uuwAqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFNykQtYtyBat6kjircA1sDL2To0kqyZylX1cMv7vJXvZa8b2KUN8keXJtfADRR8G%2BpuImPBoFPVq1DomkUX7ZEgl%2B9p8d9tSKk5f1qxpGX%2FsPsHOthlKYlK3jgaJ1cGpmxqXz4Vpxi3ikTlxSPwZoKWJhlib%2BPFWhVKC9fsTZNVSPqwrmnxFOVrLITLPaTxfQzD3mNtFHpt%2F9p%2BiTh2ZlzLRgL5QV8wk8OtSzie6%2BRg7izJlHqLNOdKnuxpZfNZPtRkdHs3jqXWVCXeu5yWY0txQb37KMM%2Fut5X8zbthmnj%2BaYA%2FS4peLddcCB8CWvxHF41xIIUcaIUa5OiemMux15kNOVCZdiezTpJ%2FTci6ClCF%2Bg4JTjrZ2i8rO%2FEuNZ5KTU0VqIcjfVzrfzSx5SELSw%2FrmJaXHtPz8Qn6k%2FOvVYrJtnEQmbwBKEWprNi06MVapdEm8BT10JvTKSY60oni4iBmp5mIEK%2F7KX2BE1sB0CcAtZ2EQS67MmAosgR8iS98vUfsEVsHN%2Fp3%2BeTnxEZ3MD4yqb7fx73M2F4CxQT2ssCe0Evw1Czixxe%2BIOtg0T%2FeI7DGsul4ZXI4mrByOChNyMyVcZiIG57ogf3hUsUwZtiUS4D4Vk6pltVc0A3pCZvlMsw%2FTJYG6qwxzoMMWFo8oGOqUBJbXvhazFYvEqUGOAJMIFjivv6lb3%2BDorhMd0qEuAj5xfo9Ic%2F67lgOxEMChjpk22xhrqITY4d%2Ff41Jq0ZXdDwAhm4IcjA%2F%2BJPrKK1CqcRDDbFhvTx%2Fo9D6AQlVI05NPGeOxMPyFFHm2XiOlo4QMLKzK0ROHV3o77v8tBoHnhHTuMI8w0c2Aqi3mRZfuC0dVL21XB9XTA0ACLwKh5IdA9rxTR6Ga%2B&X-Amz-Signature=d4081c0d760ebef5c158a42812d4783eb1dce94a4158aa471e21d15dd1023701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZBVLCF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQC2mRxVIvxzAjDphEeLB%2Be1zwT337TRzd5zDVD6hbYZVgIgJjCunOocL4LE%2BMVsHygERL7pIdExYGQyI0roTY1uuwAqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFNykQtYtyBat6kjircA1sDL2To0kqyZylX1cMv7vJXvZa8b2KUN8keXJtfADRR8G%2BpuImPBoFPVq1DomkUX7ZEgl%2B9p8d9tSKk5f1qxpGX%2FsPsHOthlKYlK3jgaJ1cGpmxqXz4Vpxi3ikTlxSPwZoKWJhlib%2BPFWhVKC9fsTZNVSPqwrmnxFOVrLITLPaTxfQzD3mNtFHpt%2F9p%2BiTh2ZlzLRgL5QV8wk8OtSzie6%2BRg7izJlHqLNOdKnuxpZfNZPtRkdHs3jqXWVCXeu5yWY0txQb37KMM%2Fut5X8zbthmnj%2BaYA%2FS4peLddcCB8CWvxHF41xIIUcaIUa5OiemMux15kNOVCZdiezTpJ%2FTci6ClCF%2Bg4JTjrZ2i8rO%2FEuNZ5KTU0VqIcjfVzrfzSx5SELSw%2FrmJaXHtPz8Qn6k%2FOvVYrJtnEQmbwBKEWprNi06MVapdEm8BT10JvTKSY60oni4iBmp5mIEK%2F7KX2BE1sB0CcAtZ2EQS67MmAosgR8iS98vUfsEVsHN%2Fp3%2BeTnxEZ3MD4yqb7fx73M2F4CxQT2ssCe0Evw1Czixxe%2BIOtg0T%2FeI7DGsul4ZXI4mrByOChNyMyVcZiIG57ogf3hUsUwZtiUS4D4Vk6pltVc0A3pCZvlMsw%2FTJYG6qwxzoMMWFo8oGOqUBJbXvhazFYvEqUGOAJMIFjivv6lb3%2BDorhMd0qEuAj5xfo9Ic%2F67lgOxEMChjpk22xhrqITY4d%2Ff41Jq0ZXdDwAhm4IcjA%2F%2BJPrKK1CqcRDDbFhvTx%2Fo9D6AQlVI05NPGeOxMPyFFHm2XiOlo4QMLKzK0ROHV3o77v8tBoHnhHTuMI8w0c2Aqi3mRZfuC0dVL21XB9XTA0ACLwKh5IdA9rxTR6Ga%2B&X-Amz-Signature=e7beb3a5f9f772be71d59e3df54288389cda85f28fc433db039b63741fd1360b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZBVLCF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQC2mRxVIvxzAjDphEeLB%2Be1zwT337TRzd5zDVD6hbYZVgIgJjCunOocL4LE%2BMVsHygERL7pIdExYGQyI0roTY1uuwAqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFNykQtYtyBat6kjircA1sDL2To0kqyZylX1cMv7vJXvZa8b2KUN8keXJtfADRR8G%2BpuImPBoFPVq1DomkUX7ZEgl%2B9p8d9tSKk5f1qxpGX%2FsPsHOthlKYlK3jgaJ1cGpmxqXz4Vpxi3ikTlxSPwZoKWJhlib%2BPFWhVKC9fsTZNVSPqwrmnxFOVrLITLPaTxfQzD3mNtFHpt%2F9p%2BiTh2ZlzLRgL5QV8wk8OtSzie6%2BRg7izJlHqLNOdKnuxpZfNZPtRkdHs3jqXWVCXeu5yWY0txQb37KMM%2Fut5X8zbthmnj%2BaYA%2FS4peLddcCB8CWvxHF41xIIUcaIUa5OiemMux15kNOVCZdiezTpJ%2FTci6ClCF%2Bg4JTjrZ2i8rO%2FEuNZ5KTU0VqIcjfVzrfzSx5SELSw%2FrmJaXHtPz8Qn6k%2FOvVYrJtnEQmbwBKEWprNi06MVapdEm8BT10JvTKSY60oni4iBmp5mIEK%2F7KX2BE1sB0CcAtZ2EQS67MmAosgR8iS98vUfsEVsHN%2Fp3%2BeTnxEZ3MD4yqb7fx73M2F4CxQT2ssCe0Evw1Czixxe%2BIOtg0T%2FeI7DGsul4ZXI4mrByOChNyMyVcZiIG57ogf3hUsUwZtiUS4D4Vk6pltVc0A3pCZvlMsw%2FTJYG6qwxzoMMWFo8oGOqUBJbXvhazFYvEqUGOAJMIFjivv6lb3%2BDorhMd0qEuAj5xfo9Ic%2F67lgOxEMChjpk22xhrqITY4d%2Ff41Jq0ZXdDwAhm4IcjA%2F%2BJPrKK1CqcRDDbFhvTx%2Fo9D6AQlVI05NPGeOxMPyFFHm2XiOlo4QMLKzK0ROHV3o77v8tBoHnhHTuMI8w0c2Aqi3mRZfuC0dVL21XB9XTA0ACLwKh5IdA9rxTR6Ga%2B&X-Amz-Signature=720dbf236973fd9684c02d50d4250158c4bc51da42cb68ea583514c057a0b71e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZBVLCF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQC2mRxVIvxzAjDphEeLB%2Be1zwT337TRzd5zDVD6hbYZVgIgJjCunOocL4LE%2BMVsHygERL7pIdExYGQyI0roTY1uuwAqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFNykQtYtyBat6kjircA1sDL2To0kqyZylX1cMv7vJXvZa8b2KUN8keXJtfADRR8G%2BpuImPBoFPVq1DomkUX7ZEgl%2B9p8d9tSKk5f1qxpGX%2FsPsHOthlKYlK3jgaJ1cGpmxqXz4Vpxi3ikTlxSPwZoKWJhlib%2BPFWhVKC9fsTZNVSPqwrmnxFOVrLITLPaTxfQzD3mNtFHpt%2F9p%2BiTh2ZlzLRgL5QV8wk8OtSzie6%2BRg7izJlHqLNOdKnuxpZfNZPtRkdHs3jqXWVCXeu5yWY0txQb37KMM%2Fut5X8zbthmnj%2BaYA%2FS4peLddcCB8CWvxHF41xIIUcaIUa5OiemMux15kNOVCZdiezTpJ%2FTci6ClCF%2Bg4JTjrZ2i8rO%2FEuNZ5KTU0VqIcjfVzrfzSx5SELSw%2FrmJaXHtPz8Qn6k%2FOvVYrJtnEQmbwBKEWprNi06MVapdEm8BT10JvTKSY60oni4iBmp5mIEK%2F7KX2BE1sB0CcAtZ2EQS67MmAosgR8iS98vUfsEVsHN%2Fp3%2BeTnxEZ3MD4yqb7fx73M2F4CxQT2ssCe0Evw1Czixxe%2BIOtg0T%2FeI7DGsul4ZXI4mrByOChNyMyVcZiIG57ogf3hUsUwZtiUS4D4Vk6pltVc0A3pCZvlMsw%2FTJYG6qwxzoMMWFo8oGOqUBJbXvhazFYvEqUGOAJMIFjivv6lb3%2BDorhMd0qEuAj5xfo9Ic%2F67lgOxEMChjpk22xhrqITY4d%2Ff41Jq0ZXdDwAhm4IcjA%2F%2BJPrKK1CqcRDDbFhvTx%2Fo9D6AQlVI05NPGeOxMPyFFHm2XiOlo4QMLKzK0ROHV3o77v8tBoHnhHTuMI8w0c2Aqi3mRZfuC0dVL21XB9XTA0ACLwKh5IdA9rxTR6Ga%2B&X-Amz-Signature=733beb9ca538169056b3efc193928283fe57a3adf06c61e827aa1b7dea4f0f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZBVLCF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQC2mRxVIvxzAjDphEeLB%2Be1zwT337TRzd5zDVD6hbYZVgIgJjCunOocL4LE%2BMVsHygERL7pIdExYGQyI0roTY1uuwAqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFNykQtYtyBat6kjircA1sDL2To0kqyZylX1cMv7vJXvZa8b2KUN8keXJtfADRR8G%2BpuImPBoFPVq1DomkUX7ZEgl%2B9p8d9tSKk5f1qxpGX%2FsPsHOthlKYlK3jgaJ1cGpmxqXz4Vpxi3ikTlxSPwZoKWJhlib%2BPFWhVKC9fsTZNVSPqwrmnxFOVrLITLPaTxfQzD3mNtFHpt%2F9p%2BiTh2ZlzLRgL5QV8wk8OtSzie6%2BRg7izJlHqLNOdKnuxpZfNZPtRkdHs3jqXWVCXeu5yWY0txQb37KMM%2Fut5X8zbthmnj%2BaYA%2FS4peLddcCB8CWvxHF41xIIUcaIUa5OiemMux15kNOVCZdiezTpJ%2FTci6ClCF%2Bg4JTjrZ2i8rO%2FEuNZ5KTU0VqIcjfVzrfzSx5SELSw%2FrmJaXHtPz8Qn6k%2FOvVYrJtnEQmbwBKEWprNi06MVapdEm8BT10JvTKSY60oni4iBmp5mIEK%2F7KX2BE1sB0CcAtZ2EQS67MmAosgR8iS98vUfsEVsHN%2Fp3%2BeTnxEZ3MD4yqb7fx73M2F4CxQT2ssCe0Evw1Czixxe%2BIOtg0T%2FeI7DGsul4ZXI4mrByOChNyMyVcZiIG57ogf3hUsUwZtiUS4D4Vk6pltVc0A3pCZvlMsw%2FTJYG6qwxzoMMWFo8oGOqUBJbXvhazFYvEqUGOAJMIFjivv6lb3%2BDorhMd0qEuAj5xfo9Ic%2F67lgOxEMChjpk22xhrqITY4d%2Ff41Jq0ZXdDwAhm4IcjA%2F%2BJPrKK1CqcRDDbFhvTx%2Fo9D6AQlVI05NPGeOxMPyFFHm2XiOlo4QMLKzK0ROHV3o77v8tBoHnhHTuMI8w0c2Aqi3mRZfuC0dVL21XB9XTA0ACLwKh5IdA9rxTR6Ga%2B&X-Amz-Signature=3fefa3b52a563d7172332a12885a2eacbd942fa9fcd7b3053e69f465061c79f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZBVLCF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQC2mRxVIvxzAjDphEeLB%2Be1zwT337TRzd5zDVD6hbYZVgIgJjCunOocL4LE%2BMVsHygERL7pIdExYGQyI0roTY1uuwAqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFNykQtYtyBat6kjircA1sDL2To0kqyZylX1cMv7vJXvZa8b2KUN8keXJtfADRR8G%2BpuImPBoFPVq1DomkUX7ZEgl%2B9p8d9tSKk5f1qxpGX%2FsPsHOthlKYlK3jgaJ1cGpmxqXz4Vpxi3ikTlxSPwZoKWJhlib%2BPFWhVKC9fsTZNVSPqwrmnxFOVrLITLPaTxfQzD3mNtFHpt%2F9p%2BiTh2ZlzLRgL5QV8wk8OtSzie6%2BRg7izJlHqLNOdKnuxpZfNZPtRkdHs3jqXWVCXeu5yWY0txQb37KMM%2Fut5X8zbthmnj%2BaYA%2FS4peLddcCB8CWvxHF41xIIUcaIUa5OiemMux15kNOVCZdiezTpJ%2FTci6ClCF%2Bg4JTjrZ2i8rO%2FEuNZ5KTU0VqIcjfVzrfzSx5SELSw%2FrmJaXHtPz8Qn6k%2FOvVYrJtnEQmbwBKEWprNi06MVapdEm8BT10JvTKSY60oni4iBmp5mIEK%2F7KX2BE1sB0CcAtZ2EQS67MmAosgR8iS98vUfsEVsHN%2Fp3%2BeTnxEZ3MD4yqb7fx73M2F4CxQT2ssCe0Evw1Czixxe%2BIOtg0T%2FeI7DGsul4ZXI4mrByOChNyMyVcZiIG57ogf3hUsUwZtiUS4D4Vk6pltVc0A3pCZvlMsw%2FTJYG6qwxzoMMWFo8oGOqUBJbXvhazFYvEqUGOAJMIFjivv6lb3%2BDorhMd0qEuAj5xfo9Ic%2F67lgOxEMChjpk22xhrqITY4d%2Ff41Jq0ZXdDwAhm4IcjA%2F%2BJPrKK1CqcRDDbFhvTx%2Fo9D6AQlVI05NPGeOxMPyFFHm2XiOlo4QMLKzK0ROHV3o77v8tBoHnhHTuMI8w0c2Aqi3mRZfuC0dVL21XB9XTA0ACLwKh5IdA9rxTR6Ga%2B&X-Amz-Signature=c1a95487d48e8c83e81a969416e7d5fe3056a5bbb5bae4875d4e52311bd25927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN3TLEB5%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD26DLOvnS%2ByjIYDLj4eqpFChdLbkojlvu%2FsBua24Cc7gIgcAmD10BjWattqAd3m3yu33OZ3JM5YYDNGBZS8AvAbj0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBu%2Bmr7Xc54TOlkg%2FyrcA11E5%2FrkS6ibshqZueScpOJSjrA9YwOiS66ssNuWhARYi%2BiuTQPmnw0kmk81IjX3G1nXll%2FLHv0tE8kwToGZtph3R29SUnuKrw6bBqigYxW5LM%2FXbL1%2Fw4BcOJVMzLCXLT1aai3uhi1xDlvaSaHmxyrICE5mCqEJJRkex0yJLKrHVPJ3GLD10qxiKb1xLXvXT17wNk5NWqj9xH6DRbr19%2Fupz23NDTDi80IPfF0kGWfdwlfALgVSnKTmbVspEBUFhT7ipO7VPfpuXvCFuJM7h1wZutQQwNKVNACg7UEfyQFDE%2F02pVDwO7qkgQqy8YDz6lGn9YvMJLjM%2FlBsG7RR3Cbwaa06Uu5qLBJk7L1A3AvlL%2BDd%2BYRSyddCWwQ%2BzTUpsoWS7F0h7rjWgdpDqpoeMqfM7CX5H6ryJaeNrPm0MBuJrEJCbpuvunOL8jM0jLAa1nHsYUpjVBiA%2FgKx3IXm0XOM8C8wDLsk6tDsS5xWGp34uLEbUz7Naz0LTdFO1LZJd2UblsYxw9m%2BwhfmUPQEh4d%2Fn0rpOnISneLh%2BYjorjpxmzNdgAWygRd1LJsLGfppRMt6cTzkzmyAlK8t1vO3HgeyRxvXasrQjAs9BmIRqF3GHMKWVxZKm4H2ROcVMOKFo8oGOqUB7a5AZmeJYRJvP5m7StgpQIywk1yNbP%2Bdb%2F2bRr8Djd3HqZlC6dL%2BK7EpUkpX65s8PfXxKBpLr6BDwtKXr8Noh5V8nChOiOXXabUoi1e%2FCndolEcB35HY403r8cc9NYFA4qaRCDaD%2BFmJR2QuFZuOD568QNauX%2B4hKo7AlE033CbSj6Qp25WnByy9L1K29A7QrdA9kPZkR0c%2B98Wn0%2BxYc5%2Fb38Cr&X-Amz-Signature=b9b2276c5a8e93911094bfaa66974bff48ccef1fd9760f2ac0cac92cf60323dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN3TLEB5%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD26DLOvnS%2ByjIYDLj4eqpFChdLbkojlvu%2FsBua24Cc7gIgcAmD10BjWattqAd3m3yu33OZ3JM5YYDNGBZS8AvAbj0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBu%2Bmr7Xc54TOlkg%2FyrcA11E5%2FrkS6ibshqZueScpOJSjrA9YwOiS66ssNuWhARYi%2BiuTQPmnw0kmk81IjX3G1nXll%2FLHv0tE8kwToGZtph3R29SUnuKrw6bBqigYxW5LM%2FXbL1%2Fw4BcOJVMzLCXLT1aai3uhi1xDlvaSaHmxyrICE5mCqEJJRkex0yJLKrHVPJ3GLD10qxiKb1xLXvXT17wNk5NWqj9xH6DRbr19%2Fupz23NDTDi80IPfF0kGWfdwlfALgVSnKTmbVspEBUFhT7ipO7VPfpuXvCFuJM7h1wZutQQwNKVNACg7UEfyQFDE%2F02pVDwO7qkgQqy8YDz6lGn9YvMJLjM%2FlBsG7RR3Cbwaa06Uu5qLBJk7L1A3AvlL%2BDd%2BYRSyddCWwQ%2BzTUpsoWS7F0h7rjWgdpDqpoeMqfM7CX5H6ryJaeNrPm0MBuJrEJCbpuvunOL8jM0jLAa1nHsYUpjVBiA%2FgKx3IXm0XOM8C8wDLsk6tDsS5xWGp34uLEbUz7Naz0LTdFO1LZJd2UblsYxw9m%2BwhfmUPQEh4d%2Fn0rpOnISneLh%2BYjorjpxmzNdgAWygRd1LJsLGfppRMt6cTzkzmyAlK8t1vO3HgeyRxvXasrQjAs9BmIRqF3GHMKWVxZKm4H2ROcVMOKFo8oGOqUB7a5AZmeJYRJvP5m7StgpQIywk1yNbP%2Bdb%2F2bRr8Djd3HqZlC6dL%2BK7EpUkpX65s8PfXxKBpLr6BDwtKXr8Noh5V8nChOiOXXabUoi1e%2FCndolEcB35HY403r8cc9NYFA4qaRCDaD%2BFmJR2QuFZuOD568QNauX%2B4hKo7AlE033CbSj6Qp25WnByy9L1K29A7QrdA9kPZkR0c%2B98Wn0%2BxYc5%2Fb38Cr&X-Amz-Signature=0750861ffef59a0c89ea0ae6e64e533c04fbe91f5141735850422d472344c3ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN3TLEB5%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD26DLOvnS%2ByjIYDLj4eqpFChdLbkojlvu%2FsBua24Cc7gIgcAmD10BjWattqAd3m3yu33OZ3JM5YYDNGBZS8AvAbj0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBu%2Bmr7Xc54TOlkg%2FyrcA11E5%2FrkS6ibshqZueScpOJSjrA9YwOiS66ssNuWhARYi%2BiuTQPmnw0kmk81IjX3G1nXll%2FLHv0tE8kwToGZtph3R29SUnuKrw6bBqigYxW5LM%2FXbL1%2Fw4BcOJVMzLCXLT1aai3uhi1xDlvaSaHmxyrICE5mCqEJJRkex0yJLKrHVPJ3GLD10qxiKb1xLXvXT17wNk5NWqj9xH6DRbr19%2Fupz23NDTDi80IPfF0kGWfdwlfALgVSnKTmbVspEBUFhT7ipO7VPfpuXvCFuJM7h1wZutQQwNKVNACg7UEfyQFDE%2F02pVDwO7qkgQqy8YDz6lGn9YvMJLjM%2FlBsG7RR3Cbwaa06Uu5qLBJk7L1A3AvlL%2BDd%2BYRSyddCWwQ%2BzTUpsoWS7F0h7rjWgdpDqpoeMqfM7CX5H6ryJaeNrPm0MBuJrEJCbpuvunOL8jM0jLAa1nHsYUpjVBiA%2FgKx3IXm0XOM8C8wDLsk6tDsS5xWGp34uLEbUz7Naz0LTdFO1LZJd2UblsYxw9m%2BwhfmUPQEh4d%2Fn0rpOnISneLh%2BYjorjpxmzNdgAWygRd1LJsLGfppRMt6cTzkzmyAlK8t1vO3HgeyRxvXasrQjAs9BmIRqF3GHMKWVxZKm4H2ROcVMOKFo8oGOqUB7a5AZmeJYRJvP5m7StgpQIywk1yNbP%2Bdb%2F2bRr8Djd3HqZlC6dL%2BK7EpUkpX65s8PfXxKBpLr6BDwtKXr8Noh5V8nChOiOXXabUoi1e%2FCndolEcB35HY403r8cc9NYFA4qaRCDaD%2BFmJR2QuFZuOD568QNauX%2B4hKo7AlE033CbSj6Qp25WnByy9L1K29A7QrdA9kPZkR0c%2B98Wn0%2BxYc5%2Fb38Cr&X-Amz-Signature=2fc3596a421a567a437c5f2884156610162f2a81d81fadd4409181c2feb47b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN3TLEB5%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD26DLOvnS%2ByjIYDLj4eqpFChdLbkojlvu%2FsBua24Cc7gIgcAmD10BjWattqAd3m3yu33OZ3JM5YYDNGBZS8AvAbj0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBu%2Bmr7Xc54TOlkg%2FyrcA11E5%2FrkS6ibshqZueScpOJSjrA9YwOiS66ssNuWhARYi%2BiuTQPmnw0kmk81IjX3G1nXll%2FLHv0tE8kwToGZtph3R29SUnuKrw6bBqigYxW5LM%2FXbL1%2Fw4BcOJVMzLCXLT1aai3uhi1xDlvaSaHmxyrICE5mCqEJJRkex0yJLKrHVPJ3GLD10qxiKb1xLXvXT17wNk5NWqj9xH6DRbr19%2Fupz23NDTDi80IPfF0kGWfdwlfALgVSnKTmbVspEBUFhT7ipO7VPfpuXvCFuJM7h1wZutQQwNKVNACg7UEfyQFDE%2F02pVDwO7qkgQqy8YDz6lGn9YvMJLjM%2FlBsG7RR3Cbwaa06Uu5qLBJk7L1A3AvlL%2BDd%2BYRSyddCWwQ%2BzTUpsoWS7F0h7rjWgdpDqpoeMqfM7CX5H6ryJaeNrPm0MBuJrEJCbpuvunOL8jM0jLAa1nHsYUpjVBiA%2FgKx3IXm0XOM8C8wDLsk6tDsS5xWGp34uLEbUz7Naz0LTdFO1LZJd2UblsYxw9m%2BwhfmUPQEh4d%2Fn0rpOnISneLh%2BYjorjpxmzNdgAWygRd1LJsLGfppRMt6cTzkzmyAlK8t1vO3HgeyRxvXasrQjAs9BmIRqF3GHMKWVxZKm4H2ROcVMOKFo8oGOqUB7a5AZmeJYRJvP5m7StgpQIywk1yNbP%2Bdb%2F2bRr8Djd3HqZlC6dL%2BK7EpUkpX65s8PfXxKBpLr6BDwtKXr8Noh5V8nChOiOXXabUoi1e%2FCndolEcB35HY403r8cc9NYFA4qaRCDaD%2BFmJR2QuFZuOD568QNauX%2B4hKo7AlE033CbSj6Qp25WnByy9L1K29A7QrdA9kPZkR0c%2B98Wn0%2BxYc5%2Fb38Cr&X-Amz-Signature=e1cde06d1c643a925f224a5ae81fd7f28e314ed524bcad8f6193f6e74914bbcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN3TLEB5%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD26DLOvnS%2ByjIYDLj4eqpFChdLbkojlvu%2FsBua24Cc7gIgcAmD10BjWattqAd3m3yu33OZ3JM5YYDNGBZS8AvAbj0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBu%2Bmr7Xc54TOlkg%2FyrcA11E5%2FrkS6ibshqZueScpOJSjrA9YwOiS66ssNuWhARYi%2BiuTQPmnw0kmk81IjX3G1nXll%2FLHv0tE8kwToGZtph3R29SUnuKrw6bBqigYxW5LM%2FXbL1%2Fw4BcOJVMzLCXLT1aai3uhi1xDlvaSaHmxyrICE5mCqEJJRkex0yJLKrHVPJ3GLD10qxiKb1xLXvXT17wNk5NWqj9xH6DRbr19%2Fupz23NDTDi80IPfF0kGWfdwlfALgVSnKTmbVspEBUFhT7ipO7VPfpuXvCFuJM7h1wZutQQwNKVNACg7UEfyQFDE%2F02pVDwO7qkgQqy8YDz6lGn9YvMJLjM%2FlBsG7RR3Cbwaa06Uu5qLBJk7L1A3AvlL%2BDd%2BYRSyddCWwQ%2BzTUpsoWS7F0h7rjWgdpDqpoeMqfM7CX5H6ryJaeNrPm0MBuJrEJCbpuvunOL8jM0jLAa1nHsYUpjVBiA%2FgKx3IXm0XOM8C8wDLsk6tDsS5xWGp34uLEbUz7Naz0LTdFO1LZJd2UblsYxw9m%2BwhfmUPQEh4d%2Fn0rpOnISneLh%2BYjorjpxmzNdgAWygRd1LJsLGfppRMt6cTzkzmyAlK8t1vO3HgeyRxvXasrQjAs9BmIRqF3GHMKWVxZKm4H2ROcVMOKFo8oGOqUB7a5AZmeJYRJvP5m7StgpQIywk1yNbP%2Bdb%2F2bRr8Djd3HqZlC6dL%2BK7EpUkpX65s8PfXxKBpLr6BDwtKXr8Noh5V8nChOiOXXabUoi1e%2FCndolEcB35HY403r8cc9NYFA4qaRCDaD%2BFmJR2QuFZuOD568QNauX%2B4hKo7AlE033CbSj6Qp25WnByy9L1K29A7QrdA9kPZkR0c%2B98Wn0%2BxYc5%2Fb38Cr&X-Amz-Signature=ce0ba1c19a24fbf2c5c5054450556db84785f171826cd90f05a26ffff8eca3e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD77HLYK%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIAkSM3rsEA2U%2FPK2XKw3eQJYHUqDVeDXJyzZrpavQaDzAiEAyyM6qbj2vSUn%2FXhNdqloTYHIyCkLDOh1N8d%2B%2BQ0TrTkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwcgAygwQtyEbc3GSrcAynK5gGCeXCKrfTFfoPzP6uIKbAdnkqFJsTv%2FS5kdNnbrmtZRgBPp124MAQsdqNgd14D5cscqb718waL9jAJ3UW%2BoRJzEwMIj5Can3NUsESmtZkLCz1VbS%2BQgVKZZAyhgiQ2mDoTfJh0cq64cfT%2F3IlXvJm%2BVstSqm0biGXMpzJoBRel6ECRYK2ISTREB3kfgS1PuZi9rOcNlzVr5UtTtfyrPLx6f3JH8HG75YdQ9LtJ2n9W1yfXLolWTaBq5VL6fPH2F0FCww70vvYlm0%2FjcsFokDCIxi%2Flb1eu%2Frhu3MWrUjjE%2FOCLOQl7EpjfHjZxzAw0IHyQp7nCYvTl1GHTrPUcixSt0GWCTxgcX3P2U4bMXU4wKhCeJyu7BTQuH4EKYh%2B5KvLFhjhHYYLTApw0jevEWhildp44LkCuQQmIXaN2tNl4UodMlTV3vV%2FO65V4A2Zhw7xrk48ndXG3P7ZGBrh6gr7HQvAHI3PeQK%2FJ7iyVYRviwq4TCmjzr4KLSpMm%2BNTZaSzulhvZpSEtMuWKipscyHZTt8v0YOb8f%2B%2BRX4%2FMGJaPVaTRK%2Fsey%2FEhd%2B%2FOPtr1DAUxRS0liD%2Bq3ydzbXQy3HzYtjX6SYeSb%2BB%2FDG6p7qmqmxtZ2N7i9v6nMLCFo8oGOqUBRzCObmU%2FjN8olAhDToxcuIotvJTSmjWxGLjRBuRXqCg3z8GFrlAFpkOJSn4u6Gty0TF3W45%2FsjWYSqmWxvpuu0Uu7Gj476DcbLrZWSOyxj8Xo8cUZc2GaU171gJXUwpEVDEqIFwF%2B0Wjs4n0BIVaGAXfNWuUO6AymOUY%2BbL70IWP4wyj2wbZFVmaOQ9Fc84rUvRCTTS7IEID5%2FZ6fLZFUwqywEJO&X-Amz-Signature=d5a6ebadc1ca1727aa0a3d312b7ee732618fd2890d1032fec8fdb55e7c526985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD77HLYK%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIAkSM3rsEA2U%2FPK2XKw3eQJYHUqDVeDXJyzZrpavQaDzAiEAyyM6qbj2vSUn%2FXhNdqloTYHIyCkLDOh1N8d%2B%2BQ0TrTkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwcgAygwQtyEbc3GSrcAynK5gGCeXCKrfTFfoPzP6uIKbAdnkqFJsTv%2FS5kdNnbrmtZRgBPp124MAQsdqNgd14D5cscqb718waL9jAJ3UW%2BoRJzEwMIj5Can3NUsESmtZkLCz1VbS%2BQgVKZZAyhgiQ2mDoTfJh0cq64cfT%2F3IlXvJm%2BVstSqm0biGXMpzJoBRel6ECRYK2ISTREB3kfgS1PuZi9rOcNlzVr5UtTtfyrPLx6f3JH8HG75YdQ9LtJ2n9W1yfXLolWTaBq5VL6fPH2F0FCww70vvYlm0%2FjcsFokDCIxi%2Flb1eu%2Frhu3MWrUjjE%2FOCLOQl7EpjfHjZxzAw0IHyQp7nCYvTl1GHTrPUcixSt0GWCTxgcX3P2U4bMXU4wKhCeJyu7BTQuH4EKYh%2B5KvLFhjhHYYLTApw0jevEWhildp44LkCuQQmIXaN2tNl4UodMlTV3vV%2FO65V4A2Zhw7xrk48ndXG3P7ZGBrh6gr7HQvAHI3PeQK%2FJ7iyVYRviwq4TCmjzr4KLSpMm%2BNTZaSzulhvZpSEtMuWKipscyHZTt8v0YOb8f%2B%2BRX4%2FMGJaPVaTRK%2Fsey%2FEhd%2B%2FOPtr1DAUxRS0liD%2Bq3ydzbXQy3HzYtjX6SYeSb%2BB%2FDG6p7qmqmxtZ2N7i9v6nMLCFo8oGOqUBRzCObmU%2FjN8olAhDToxcuIotvJTSmjWxGLjRBuRXqCg3z8GFrlAFpkOJSn4u6Gty0TF3W45%2FsjWYSqmWxvpuu0Uu7Gj476DcbLrZWSOyxj8Xo8cUZc2GaU171gJXUwpEVDEqIFwF%2B0Wjs4n0BIVaGAXfNWuUO6AymOUY%2BbL70IWP4wyj2wbZFVmaOQ9Fc84rUvRCTTS7IEID5%2FZ6fLZFUwqywEJO&X-Amz-Signature=35c5b92a80f6eecfa54feb149c1776ea01af79c58e2f7f264d48ab679639f289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD77HLYK%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIAkSM3rsEA2U%2FPK2XKw3eQJYHUqDVeDXJyzZrpavQaDzAiEAyyM6qbj2vSUn%2FXhNdqloTYHIyCkLDOh1N8d%2B%2BQ0TrTkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwcgAygwQtyEbc3GSrcAynK5gGCeXCKrfTFfoPzP6uIKbAdnkqFJsTv%2FS5kdNnbrmtZRgBPp124MAQsdqNgd14D5cscqb718waL9jAJ3UW%2BoRJzEwMIj5Can3NUsESmtZkLCz1VbS%2BQgVKZZAyhgiQ2mDoTfJh0cq64cfT%2F3IlXvJm%2BVstSqm0biGXMpzJoBRel6ECRYK2ISTREB3kfgS1PuZi9rOcNlzVr5UtTtfyrPLx6f3JH8HG75YdQ9LtJ2n9W1yfXLolWTaBq5VL6fPH2F0FCww70vvYlm0%2FjcsFokDCIxi%2Flb1eu%2Frhu3MWrUjjE%2FOCLOQl7EpjfHjZxzAw0IHyQp7nCYvTl1GHTrPUcixSt0GWCTxgcX3P2U4bMXU4wKhCeJyu7BTQuH4EKYh%2B5KvLFhjhHYYLTApw0jevEWhildp44LkCuQQmIXaN2tNl4UodMlTV3vV%2FO65V4A2Zhw7xrk48ndXG3P7ZGBrh6gr7HQvAHI3PeQK%2FJ7iyVYRviwq4TCmjzr4KLSpMm%2BNTZaSzulhvZpSEtMuWKipscyHZTt8v0YOb8f%2B%2BRX4%2FMGJaPVaTRK%2Fsey%2FEhd%2B%2FOPtr1DAUxRS0liD%2Bq3ydzbXQy3HzYtjX6SYeSb%2BB%2FDG6p7qmqmxtZ2N7i9v6nMLCFo8oGOqUBRzCObmU%2FjN8olAhDToxcuIotvJTSmjWxGLjRBuRXqCg3z8GFrlAFpkOJSn4u6Gty0TF3W45%2FsjWYSqmWxvpuu0Uu7Gj476DcbLrZWSOyxj8Xo8cUZc2GaU171gJXUwpEVDEqIFwF%2B0Wjs4n0BIVaGAXfNWuUO6AymOUY%2BbL70IWP4wyj2wbZFVmaOQ9Fc84rUvRCTTS7IEID5%2FZ6fLZFUwqywEJO&X-Amz-Signature=0683ad9bdfc00f5faed9022cae16be6eaaa533f686e71858cf652412ff61645a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ3JRHFN%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCM2P0AMWvL6wIo8kMk0UIdfLox9VrP%2FoFAOXwB6XAHGAIhAP0RSy2cQmvsM0OauUf7JBmBmTIgprdwIJZYwzkWj6PzKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyD6o52xl85y6Ohh%2Fkq3AOa3jTIsCA0s5PTZTbmPfYVqJwWqGskd6yhW%2FUV75%2By0a5N2VptBKZiv2BaAhEM4u2%2F5U4o%2FN5ZDEMytPW2gJDJfIzGAvtcA7ICCg2ikkGjW%2FQAC2WRiy5Y0sB4CUPk0Fygahx9H7UdnGdwwXnxu4M3ZAsqrQpCUSjGYV7mpQhD2CaSfTfwCRuIwlmemt7Wjt4EQQJMXVgPKIMPMN03kAFF%2Fv%2BGBjTjHiUjQ8rP44YffDuklo7D8Q97fMvydOC6hX%2B2FTRLt2GvEKNW8h5NF6Dwux4zG0ylzJIJFn1fk%2BZfVKwAoXUwbJL7Ix6ne1gypYKf5keOZy%2FqHQapP0xf%2BtOiFrh1dGtqKhI7LPx46Tf1nTDphhhkGlY5Jx3yPu3XZeyU1L%2FuMTbKpK5a0Z886T4Pg95Fd%2BIFFx4VcmYxhxEdD%2FJXmnvBaVQcrVgdmEIxkTCCMo0aOTuhEKeneM3XCDWvIflFJj0bJG3ftwGmjze9cMdrODbqaNuT5Tw2RTlApW7NHVtTKdpZyTJTkyYJ%2F%2FpUKW0f7iY%2BToJor3LFmfAQsRcNJ2DPfYjrXXxZBN8zD7It709RGE0bnJDdIG5f1aCoqfeAzXL0Z8F6pdIqRFSjDfiV09vv7lsL3gpibzCUhqPKBjqkAWgyEOgBUeh2yUo5r9kEECq2M9npMgOExEEOMmgDfZq6Ap63n6ii35h4o8u3WiiVKTq9zrZ668hpJTSXLZ0v3RiZn4EV9KGzJOsyr0%2FNNc24aVfonPdU0UWoSp2gbm1jsrP61Zgwid0RsYOhgQm7urYzhiGh2%2Fchv4jbxlqTNePWWDqQWJFNinCa%2BHkd9xFsFCW6hlOg1CMGqkE7TjGLKp18YQHe&X-Amz-Signature=4edc45cc735384730351dc372821d882540cd6cc9a296f81d72c1f6626fd15ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ3JRHFN%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCM2P0AMWvL6wIo8kMk0UIdfLox9VrP%2FoFAOXwB6XAHGAIhAP0RSy2cQmvsM0OauUf7JBmBmTIgprdwIJZYwzkWj6PzKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyD6o52xl85y6Ohh%2Fkq3AOa3jTIsCA0s5PTZTbmPfYVqJwWqGskd6yhW%2FUV75%2By0a5N2VptBKZiv2BaAhEM4u2%2F5U4o%2FN5ZDEMytPW2gJDJfIzGAvtcA7ICCg2ikkGjW%2FQAC2WRiy5Y0sB4CUPk0Fygahx9H7UdnGdwwXnxu4M3ZAsqrQpCUSjGYV7mpQhD2CaSfTfwCRuIwlmemt7Wjt4EQQJMXVgPKIMPMN03kAFF%2Fv%2BGBjTjHiUjQ8rP44YffDuklo7D8Q97fMvydOC6hX%2B2FTRLt2GvEKNW8h5NF6Dwux4zG0ylzJIJFn1fk%2BZfVKwAoXUwbJL7Ix6ne1gypYKf5keOZy%2FqHQapP0xf%2BtOiFrh1dGtqKhI7LPx46Tf1nTDphhhkGlY5Jx3yPu3XZeyU1L%2FuMTbKpK5a0Z886T4Pg95Fd%2BIFFx4VcmYxhxEdD%2FJXmnvBaVQcrVgdmEIxkTCCMo0aOTuhEKeneM3XCDWvIflFJj0bJG3ftwGmjze9cMdrODbqaNuT5Tw2RTlApW7NHVtTKdpZyTJTkyYJ%2F%2FpUKW0f7iY%2BToJor3LFmfAQsRcNJ2DPfYjrXXxZBN8zD7It709RGE0bnJDdIG5f1aCoqfeAzXL0Z8F6pdIqRFSjDfiV09vv7lsL3gpibzCUhqPKBjqkAWgyEOgBUeh2yUo5r9kEECq2M9npMgOExEEOMmgDfZq6Ap63n6ii35h4o8u3WiiVKTq9zrZ668hpJTSXLZ0v3RiZn4EV9KGzJOsyr0%2FNNc24aVfonPdU0UWoSp2gbm1jsrP61Zgwid0RsYOhgQm7urYzhiGh2%2Fchv4jbxlqTNePWWDqQWJFNinCa%2BHkd9xFsFCW6hlOg1CMGqkE7TjGLKp18YQHe&X-Amz-Signature=5d2aaf6741df27795c1eaf40791e58a4ebf0491aa8229fc9afd4bbe8c9324a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G5M345R%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICxmf9wjVTKsm2LHqZjUbUBGKC9HDi%2BV%2FO9eDYzY43DBAiEAn6sHcruiPNcWXUQzfZp2KtFqv1ZhO%2FiMKnDu%2BRbLMo4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHlI5Z9tce%2FyzQHCyrcAwOvlPCCWBUbPaTyWp2YKpS8Kc%2B91bgpX9P2f4d1SGuaREHumqdYw0z9nPjCp6Sql77x1sdBiRCi03qZrlqEtpXaVEINf%2Ftqsetr3JSC5ELnoOQ%2FyAnkxR3elIENk8Qo7XA6zPqN%2F%2B%2BTE6yN7XTTivg2dQiJMyigWWt5drRbr13I01pgLe0m5GZeoNmJxDeEyxbYPXx5HyTjNJuBZJVfoSwXsiaqTj8ZBsPNmgPYnkEUajj7%2FHW97rDcA4eb%2FZvjltfb%2FO7360CXed%2FhH02UhRYds1Bdob%2F3vCpjUnMexcZb4ckJtL8Z6XCm%2FoF27ubzp7YsWEGyWDQ%2B9Ra1QC6RC97%2FqpnU6YodfaAveia%2FGdoSpw0Gxc3ak87oa9Hs3Gl5Tlp2LR2AQLXhWwP%2FnSdvDIyitx5cAvBzvslPGNHiB0dv7%2Fh3dn8Ra9xEByOBJIeTsxFeb53psJ6VXDQd1IACj510re4IfGzaIKHfxxyo6BHm6PuB7l3f%2BW10R25TZNu0m3LDEsUydX%2BS2rvi9g6%2FuE67JAZVYJUzigiOeuWJUeQxnlLhAc07sk7Uo5Et2m82Kz92HjWjPCW4qr7aOo%2F8rRrBWEZ6FG%2Fv2vwtt6AJI21w05GmjTuI%2FyXxUgNYMPqFo8oGOqUBXJJ%2BEHhiYHE%2FdbWlhlOAkRbZRDoareIJm3QW8P%2BFwRC9gSvXC46O500rSzXc5x5CYqKeSotmRqJWReus4c8%2Bgmlbj3skNTRsQy9cpLVppt8y0SM3sLHCSLzyh2DywGL%2BFsEfomxghFmkUH8mVbCJKk%2FlciCfYV5rG1GVIPf3Brq%2FkShURlcKpo3AD5Wv%2BJL3niR4uEnSzt0LZ46GeOoGQOsCS9EX&X-Amz-Signature=1132ec5b83d6568292415164ffae5d574d05b96121022869f1ccab20e5fb0f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G5M345R%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICxmf9wjVTKsm2LHqZjUbUBGKC9HDi%2BV%2FO9eDYzY43DBAiEAn6sHcruiPNcWXUQzfZp2KtFqv1ZhO%2FiMKnDu%2BRbLMo4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHlI5Z9tce%2FyzQHCyrcAwOvlPCCWBUbPaTyWp2YKpS8Kc%2B91bgpX9P2f4d1SGuaREHumqdYw0z9nPjCp6Sql77x1sdBiRCi03qZrlqEtpXaVEINf%2Ftqsetr3JSC5ELnoOQ%2FyAnkxR3elIENk8Qo7XA6zPqN%2F%2B%2BTE6yN7XTTivg2dQiJMyigWWt5drRbr13I01pgLe0m5GZeoNmJxDeEyxbYPXx5HyTjNJuBZJVfoSwXsiaqTj8ZBsPNmgPYnkEUajj7%2FHW97rDcA4eb%2FZvjltfb%2FO7360CXed%2FhH02UhRYds1Bdob%2F3vCpjUnMexcZb4ckJtL8Z6XCm%2FoF27ubzp7YsWEGyWDQ%2B9Ra1QC6RC97%2FqpnU6YodfaAveia%2FGdoSpw0Gxc3ak87oa9Hs3Gl5Tlp2LR2AQLXhWwP%2FnSdvDIyitx5cAvBzvslPGNHiB0dv7%2Fh3dn8Ra9xEByOBJIeTsxFeb53psJ6VXDQd1IACj510re4IfGzaIKHfxxyo6BHm6PuB7l3f%2BW10R25TZNu0m3LDEsUydX%2BS2rvi9g6%2FuE67JAZVYJUzigiOeuWJUeQxnlLhAc07sk7Uo5Et2m82Kz92HjWjPCW4qr7aOo%2F8rRrBWEZ6FG%2Fv2vwtt6AJI21w05GmjTuI%2FyXxUgNYMPqFo8oGOqUBXJJ%2BEHhiYHE%2FdbWlhlOAkRbZRDoareIJm3QW8P%2BFwRC9gSvXC46O500rSzXc5x5CYqKeSotmRqJWReus4c8%2Bgmlbj3skNTRsQy9cpLVppt8y0SM3sLHCSLzyh2DywGL%2BFsEfomxghFmkUH8mVbCJKk%2FlciCfYV5rG1GVIPf3Brq%2FkShURlcKpo3AD5Wv%2BJL3niR4uEnSzt0LZ46GeOoGQOsCS9EX&X-Amz-Signature=4e3c78846ba1ab60a2781c02193eab41d4d06cc961c5af3c9559ac9af43384ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G5M345R%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICxmf9wjVTKsm2LHqZjUbUBGKC9HDi%2BV%2FO9eDYzY43DBAiEAn6sHcruiPNcWXUQzfZp2KtFqv1ZhO%2FiMKnDu%2BRbLMo4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHlI5Z9tce%2FyzQHCyrcAwOvlPCCWBUbPaTyWp2YKpS8Kc%2B91bgpX9P2f4d1SGuaREHumqdYw0z9nPjCp6Sql77x1sdBiRCi03qZrlqEtpXaVEINf%2Ftqsetr3JSC5ELnoOQ%2FyAnkxR3elIENk8Qo7XA6zPqN%2F%2B%2BTE6yN7XTTivg2dQiJMyigWWt5drRbr13I01pgLe0m5GZeoNmJxDeEyxbYPXx5HyTjNJuBZJVfoSwXsiaqTj8ZBsPNmgPYnkEUajj7%2FHW97rDcA4eb%2FZvjltfb%2FO7360CXed%2FhH02UhRYds1Bdob%2F3vCpjUnMexcZb4ckJtL8Z6XCm%2FoF27ubzp7YsWEGyWDQ%2B9Ra1QC6RC97%2FqpnU6YodfaAveia%2FGdoSpw0Gxc3ak87oa9Hs3Gl5Tlp2LR2AQLXhWwP%2FnSdvDIyitx5cAvBzvslPGNHiB0dv7%2Fh3dn8Ra9xEByOBJIeTsxFeb53psJ6VXDQd1IACj510re4IfGzaIKHfxxyo6BHm6PuB7l3f%2BW10R25TZNu0m3LDEsUydX%2BS2rvi9g6%2FuE67JAZVYJUzigiOeuWJUeQxnlLhAc07sk7Uo5Et2m82Kz92HjWjPCW4qr7aOo%2F8rRrBWEZ6FG%2Fv2vwtt6AJI21w05GmjTuI%2FyXxUgNYMPqFo8oGOqUBXJJ%2BEHhiYHE%2FdbWlhlOAkRbZRDoareIJm3QW8P%2BFwRC9gSvXC46O500rSzXc5x5CYqKeSotmRqJWReus4c8%2Bgmlbj3skNTRsQy9cpLVppt8y0SM3sLHCSLzyh2DywGL%2BFsEfomxghFmkUH8mVbCJKk%2FlciCfYV5rG1GVIPf3Brq%2FkShURlcKpo3AD5Wv%2BJL3niR4uEnSzt0LZ46GeOoGQOsCS9EX&X-Amz-Signature=346afe816506c0397e3071f9d2937ee9574d8e1d9648fd9d6c77d62bc887fe8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G5M345R%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICxmf9wjVTKsm2LHqZjUbUBGKC9HDi%2BV%2FO9eDYzY43DBAiEAn6sHcruiPNcWXUQzfZp2KtFqv1ZhO%2FiMKnDu%2BRbLMo4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHlI5Z9tce%2FyzQHCyrcAwOvlPCCWBUbPaTyWp2YKpS8Kc%2B91bgpX9P2f4d1SGuaREHumqdYw0z9nPjCp6Sql77x1sdBiRCi03qZrlqEtpXaVEINf%2Ftqsetr3JSC5ELnoOQ%2FyAnkxR3elIENk8Qo7XA6zPqN%2F%2B%2BTE6yN7XTTivg2dQiJMyigWWt5drRbr13I01pgLe0m5GZeoNmJxDeEyxbYPXx5HyTjNJuBZJVfoSwXsiaqTj8ZBsPNmgPYnkEUajj7%2FHW97rDcA4eb%2FZvjltfb%2FO7360CXed%2FhH02UhRYds1Bdob%2F3vCpjUnMexcZb4ckJtL8Z6XCm%2FoF27ubzp7YsWEGyWDQ%2B9Ra1QC6RC97%2FqpnU6YodfaAveia%2FGdoSpw0Gxc3ak87oa9Hs3Gl5Tlp2LR2AQLXhWwP%2FnSdvDIyitx5cAvBzvslPGNHiB0dv7%2Fh3dn8Ra9xEByOBJIeTsxFeb53psJ6VXDQd1IACj510re4IfGzaIKHfxxyo6BHm6PuB7l3f%2BW10R25TZNu0m3LDEsUydX%2BS2rvi9g6%2FuE67JAZVYJUzigiOeuWJUeQxnlLhAc07sk7Uo5Et2m82Kz92HjWjPCW4qr7aOo%2F8rRrBWEZ6FG%2Fv2vwtt6AJI21w05GmjTuI%2FyXxUgNYMPqFo8oGOqUBXJJ%2BEHhiYHE%2FdbWlhlOAkRbZRDoareIJm3QW8P%2BFwRC9gSvXC46O500rSzXc5x5CYqKeSotmRqJWReus4c8%2Bgmlbj3skNTRsQy9cpLVppt8y0SM3sLHCSLzyh2DywGL%2BFsEfomxghFmkUH8mVbCJKk%2FlciCfYV5rG1GVIPf3Brq%2FkShURlcKpo3AD5Wv%2BJL3niR4uEnSzt0LZ46GeOoGQOsCS9EX&X-Amz-Signature=42df8f447fdf0094c69f119840ac74a014f1f0553ab4e502e209d657304d8878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G5M345R%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICxmf9wjVTKsm2LHqZjUbUBGKC9HDi%2BV%2FO9eDYzY43DBAiEAn6sHcruiPNcWXUQzfZp2KtFqv1ZhO%2FiMKnDu%2BRbLMo4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHlI5Z9tce%2FyzQHCyrcAwOvlPCCWBUbPaTyWp2YKpS8Kc%2B91bgpX9P2f4d1SGuaREHumqdYw0z9nPjCp6Sql77x1sdBiRCi03qZrlqEtpXaVEINf%2Ftqsetr3JSC5ELnoOQ%2FyAnkxR3elIENk8Qo7XA6zPqN%2F%2B%2BTE6yN7XTTivg2dQiJMyigWWt5drRbr13I01pgLe0m5GZeoNmJxDeEyxbYPXx5HyTjNJuBZJVfoSwXsiaqTj8ZBsPNmgPYnkEUajj7%2FHW97rDcA4eb%2FZvjltfb%2FO7360CXed%2FhH02UhRYds1Bdob%2F3vCpjUnMexcZb4ckJtL8Z6XCm%2FoF27ubzp7YsWEGyWDQ%2B9Ra1QC6RC97%2FqpnU6YodfaAveia%2FGdoSpw0Gxc3ak87oa9Hs3Gl5Tlp2LR2AQLXhWwP%2FnSdvDIyitx5cAvBzvslPGNHiB0dv7%2Fh3dn8Ra9xEByOBJIeTsxFeb53psJ6VXDQd1IACj510re4IfGzaIKHfxxyo6BHm6PuB7l3f%2BW10R25TZNu0m3LDEsUydX%2BS2rvi9g6%2FuE67JAZVYJUzigiOeuWJUeQxnlLhAc07sk7Uo5Et2m82Kz92HjWjPCW4qr7aOo%2F8rRrBWEZ6FG%2Fv2vwtt6AJI21w05GmjTuI%2FyXxUgNYMPqFo8oGOqUBXJJ%2BEHhiYHE%2FdbWlhlOAkRbZRDoareIJm3QW8P%2BFwRC9gSvXC46O500rSzXc5x5CYqKeSotmRqJWReus4c8%2Bgmlbj3skNTRsQy9cpLVppt8y0SM3sLHCSLzyh2DywGL%2BFsEfomxghFmkUH8mVbCJKk%2FlciCfYV5rG1GVIPf3Brq%2FkShURlcKpo3AD5Wv%2BJL3niR4uEnSzt0LZ46GeOoGQOsCS9EX&X-Amz-Signature=39271a0d3b865187424edcc4901c4440e7818c419697d1b5944052c43f45d1cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGNUYUW4%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T041207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHVOD72mZBfIxBPp6lyrHiwDlPYKrr6YEeW8QKX%2FE1mrAiB8%2B8eUKIhXsWV7fk4Tt%2BdS494O%2BjpiWkqy2mIZ3SOaViqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIWDimxSXOo71kfy%2BKtwD0rtOtuXY8ES%2BlNuZyJBDTpcSq2pB02LFoDOM8xN2SJbmR0JhX6jATMIyYm0F2T6GeiJbRWb%2FUiQDe7FlEfcUX6N838GhY%2FoDNOf%2B4tLqBx9IJVCSPznEbHOizBI4RAqArRYaztA5cbLWrkvH55vsWedXIbTYOVXZxpQWGAZNZn9FlPIjMTyxLjAQokP42Hr8vxdH2kLZr35%2FcTqFW5pDbXgHk3mTdywToN61jT5piYAtSXUMeRrZLYzb9wXHZKrFgJZW6gnH87JeFE2jn4xWSPWD3mdrCFmxC%2FeDdmpGp7ECkM%2FH1GcScJeFRsFTHGNQdXFdMhHXMLCleLv9O46SNOmiTDTRGFaxqM1Pv7ADeIGZ4FO6l2LVh9e1REbNsCHJVNsY2wWp3FHbHC%2F6MQzvEhm7ruQdYmVBcmPL5bxCI0rJVhURgUInnOjsr1rSfOqv7caklmA9eQ8eFhZXEoO2pao2Rv535ae07OSo%2FHqPqGTdUeIvFoz4IGcRGwDtofAUNR8EVODQGemJcHvcc8QSLQHFzMuXxlUoXRv8%2BF3B%2BA1aYy5pplv4qb7j%2BTEBFNyyTv7AEGHIalG06R6oNN33lz1D0Pg%2F0qOqErPfxOgXcCgy4zhBTFCIOQlE958w74WjygY6pgHbGfrSulMlupW6LDJHsgfomrtzqKuF2S3anSykUOMvjq%2BDNUonwzIHbMa15Hdv8HeBVo1B9Zssy6Oq%2BuRMspgZ1CV8atviqe8rsok9SBQ%2Fe9aMjb4ZPlV5BVNMk%2FwTBP5BEmWD2U0Ue96DtFF4B1YgzEUy5XK9XM87LRmsGaZCY%2BTlnKRwki4ARPkLSpoYeWay%2BFN7icTmJXZ0vFqBkSq%2FNykOnB5H&X-Amz-Signature=72246168bc6fa7993c8a6f4de3cc1bc98ecf596c101d0f19bb9feba6b7b021fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

