
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F75N74T%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIFTtsHbZCMv8pvBLV2UAXG5Ap7zX0UeFmWl2i1Fc088sAiEAv1PVTQcH%2FCpnb5hRqmwljaMl62%2B03BQtJtkBFGXL%2BrQq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDOSET8fHVebr%2FkLXmSrcA6tMft7NQug6Mq9ZykauLKJg3WHkk1lb6jEgltasBtIDh0cIaFgDCc6yUHWjViOpCTwrXm%2BHHPydK8NfweM4g4iYEjTvSRVeuZ%2Fh3HikftXHFMQCzfnbRZyPjD%2BrKtI2a%2FugQrFiMoinOFPiFnE1GQ3UL6mhCUMRlKlPe9Ys92TR4cYMDQhV4GMMxouLVKChLTG8PAy86qqhG%2BfzkkVc8G63%2BYF2wK9StMxCNbFsjEaM1QBYbfoNVKRAbXvDoTuW61XfP0QBc1gy8fAlzxCr9jWdDPYNldB7C59o1eK7Y6Uys1OODyIcHruYaDgFoUT4Wpx21lTFMAVqO%2FCjjFes42m4425%2BndFA9zz%2FCeWFZYwJyhpOKS%2F3qb19E%2Flq%2B8YNLQf6ImmcvgLsF6c1rCwV2Jzav0fSjMz1ANPYvVXMR3mBM54kvUfzJwCFHFQyZ0zkJH6vSjT32aXtEdJ1LDiLAiMs6Tet4TZ3iS5jaUa3741%2Bpl9jDsEMDdUEoOLhJ1NrG3Bp3dKpdLmxs6zoyR48EoBhh7qzz%2B5bBa8JRNBSi2mTHRLL3DmkNGl4AKaM%2FiQNwV3WBGj%2Bdy6dooOrTSSois7%2Bh60Hg5H7EieqQS2FQBtqctezWCSxadyEOuj3MMieqMoGOqUBJ8L0EBIMZPxxNs8fZ8rnquR6PROxPic5tPJCJ4SKIcR16LYuCYEfm7vkjyaNx%2FiJAfEleTnM78W5g7xH7dj7o3MH7FeqAwHPQb9hSkPAVj425gVMARzxINlPc1iYh3fD1UwH9Sl8yZBTvBRnV7pmcc1d9hw4lLWe9%2FTTq8ck2rTfbn00aaXnTOtUAvvYkjbaL91PxuqtReTSVrpOwI%2FVSz7mCjp5&X-Amz-Signature=898822f906215cddf4ceb010592eac893344e2f5fcef28e8a2381706fb044681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ESTSXYT%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDyyfyX1y9rZ1X9KPgdhNM74%2F8cXl50vwg96oxcmYWj%2BgIgPjIx1VgjJFwlI%2FwHWpHYQd2YlDkiQ3B7iv9kjGinrF4q%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDBdbBm4p7sPvFcaYsSrcA0kNijiw9NUF8GxDRQh6bf3K%2FjmLLqtQ2QJ4594t1ardLKrXFuHTxKwxQplQ4paloWIPwB51AGd2VkFPk2HnDrrj3LIZHG8oa4QXJP2FMnu7SV4nJfwJahhDXCn1odwxmR%2FXGXmYOD3jQkP8PelGqY%2BXL%2F8AQZSkazgjpZAV1CAKJI9MesSh%2FCLwOWXzl5la%2FLoKckAAERqnT6tQizGo2x0iokhl0W5PfOxww7YolTUrqBdgtxzVwsSVCoj6i1QVWaiBodJG2dHes40BQ4TDXyoB1ObziooFoRnb1LDXy1xZXZJdpcC128FtCIZkw9DV8%2Ba5u8VviL45WCllyQ%2FwXyapWt9xdWTOkKvP7IQB3WwB7rHkl%2ByiveMCPJCJpJaHJao1xqaLJO7vOtu8mfYyPf%2BcL980yFFO3MRlJGaEfQ9nHhHCk5445pMuI8wCIfpu7eiYhxfWfwsvWxpjcapf2UxQAp835jLnCZPnT%2Bjxl%2BvpUauId5eOg3CQfVWT%2Bj1HiiG29vyUcZmsMYBQH6%2FQq5IeUZR4Kytr7%2FGps%2Bt0q0iIBLh7uzLMaQavRj6ORj2k7vcbA4H6asEpx5vwprI%2F9GkfzNqfAdt7jebXShwgD3ZYBnHMDfvb%2BgeiaYpnMNCeqMoGOqUBR7tG7sfdIaZJv%2BQ9zMcPA1YjOUyjH%2Bf7jIrnSpAnymS3LPQI%2Bs8RJ2ev4RndIXgsuC8S0duO2y4WchWB%2B0V0JuLJVkT%2F5LtRJTo%2FrtwjOxZ%2B7nUQqDV0pFEaef1VM5U00WHMbxwG1ZUCuF%2Bav%2F65yLGUxDaPcqlPLqCiONHsO1MmvgmSj4R3Iny9bBO5tdwpTm9beaI0h3cnuNn%2BSnl3ie6ovuAr&X-Amz-Signature=1808ab749d0af18a49516e8b3b2e7e7dc56837080a2d9375d41cecad8531b2b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ESTSXYT%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDyyfyX1y9rZ1X9KPgdhNM74%2F8cXl50vwg96oxcmYWj%2BgIgPjIx1VgjJFwlI%2FwHWpHYQd2YlDkiQ3B7iv9kjGinrF4q%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDBdbBm4p7sPvFcaYsSrcA0kNijiw9NUF8GxDRQh6bf3K%2FjmLLqtQ2QJ4594t1ardLKrXFuHTxKwxQplQ4paloWIPwB51AGd2VkFPk2HnDrrj3LIZHG8oa4QXJP2FMnu7SV4nJfwJahhDXCn1odwxmR%2FXGXmYOD3jQkP8PelGqY%2BXL%2F8AQZSkazgjpZAV1CAKJI9MesSh%2FCLwOWXzl5la%2FLoKckAAERqnT6tQizGo2x0iokhl0W5PfOxww7YolTUrqBdgtxzVwsSVCoj6i1QVWaiBodJG2dHes40BQ4TDXyoB1ObziooFoRnb1LDXy1xZXZJdpcC128FtCIZkw9DV8%2Ba5u8VviL45WCllyQ%2FwXyapWt9xdWTOkKvP7IQB3WwB7rHkl%2ByiveMCPJCJpJaHJao1xqaLJO7vOtu8mfYyPf%2BcL980yFFO3MRlJGaEfQ9nHhHCk5445pMuI8wCIfpu7eiYhxfWfwsvWxpjcapf2UxQAp835jLnCZPnT%2Bjxl%2BvpUauId5eOg3CQfVWT%2Bj1HiiG29vyUcZmsMYBQH6%2FQq5IeUZR4Kytr7%2FGps%2Bt0q0iIBLh7uzLMaQavRj6ORj2k7vcbA4H6asEpx5vwprI%2F9GkfzNqfAdt7jebXShwgD3ZYBnHMDfvb%2BgeiaYpnMNCeqMoGOqUBR7tG7sfdIaZJv%2BQ9zMcPA1YjOUyjH%2Bf7jIrnSpAnymS3LPQI%2Bs8RJ2ev4RndIXgsuC8S0duO2y4WchWB%2B0V0JuLJVkT%2F5LtRJTo%2FrtwjOxZ%2B7nUQqDV0pFEaef1VM5U00WHMbxwG1ZUCuF%2Bav%2F65yLGUxDaPcqlPLqCiONHsO1MmvgmSj4R3Iny9bBO5tdwpTm9beaI0h3cnuNn%2BSnl3ie6ovuAr&X-Amz-Signature=e5c717ddbdc7f8158f5cfa6a5f7d877f6faf57be34bad9090e38359feab8ce14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5CUYPE%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDq5HQl%2FSgQFrJqAd0tX0zir9YhAORI4qdNFWEzw8x8QQIgN1H%2FHTFw1hwQX3%2FgXUlDwl3lLdE9QAsxI%2Fs%2BYURgtKAq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDHCBab3zUcIQGLekAyrcA2NE2Mxt5l8XbAZE4KzfcTpwoCmkQM6Ll7MzV5JyTgr8in5AD1ysKQn1I%2BltZEnyoRQ3MgbVw3t8YMldh2XI0f3uwpieFblJlTLGwDRNLizorfDY3az%2Fk6Q40P747%2BEWJY8IewfnSUpEOuwPxIU7l2lkgwqxDmJLDdU34mC35eNcpMNHL2%2BF7jLIRx5TGiCCaKwWTpYGw3unC3V8BxmZm2qZGKxE34glI8b8YttIuQMwVwjFxSYTzAnCgGkzNwFZee4iZ4z8MpfByL4yVLfrSCn58FNfj3XLC1Gh2oSwluwBtDl8h%2BHBq0wYZ0vNnWevTvFrX3Jl7IXtLmCPx1p5duYxahd1NKANeV3jTdFLD4vxTyzA4h9cijQ8Si8DWJdbgKWsmI9KS%2FydPM4y%2BEPd4d2G2IbwpM3LlwMJWypb%2FiJdXuGbaKlCeOUxQwx4etk6czRwP7tzDbDFvDAhLa44zIY5zhbHAGQyyPkTuiPyrPOjvqLVvZ1lvAuhI7HA25t2O%2FjgH2M3eXFynFJ5e%2B6s0j7JcPLTWETWnd6HAaHxbxJ0ppbNk1Dxflp8i1jy4tDWHUGW9d5b6WBptr410I%2BHPwJOo%2BGSs%2BO4vidbcqEFvTZAAoeiIhu05N7aSR%2FbMK2eqMoGOqUBU9Yj4MZgXN2J1a%2FC3VTXtci8N9x44RlU6Eh8iChLecGvHgHFIZz0GrVAmRoAeJhE%2B71ZYJG1hZWx8TGmmQ5JK3SfRNE4mVC5TdgfKxFqFe6isaMJ%2FLVi%2BJHl9fJsfrX63jZLjUBRvhNeHFR3C8iJZGX40%2F9kagCNYNAAKNAhaNUMLJa5gJk%2BpdXB0FUf1MOQYJSImTnlzCjZDoWnL4k3hLTvzZcz&X-Amz-Signature=418ffb94fff110941ece7a53bc133edd91ac5ca9aeec16ef7cc555ef71cdd6a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5CUYPE%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDq5HQl%2FSgQFrJqAd0tX0zir9YhAORI4qdNFWEzw8x8QQIgN1H%2FHTFw1hwQX3%2FgXUlDwl3lLdE9QAsxI%2Fs%2BYURgtKAq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDHCBab3zUcIQGLekAyrcA2NE2Mxt5l8XbAZE4KzfcTpwoCmkQM6Ll7MzV5JyTgr8in5AD1ysKQn1I%2BltZEnyoRQ3MgbVw3t8YMldh2XI0f3uwpieFblJlTLGwDRNLizorfDY3az%2Fk6Q40P747%2BEWJY8IewfnSUpEOuwPxIU7l2lkgwqxDmJLDdU34mC35eNcpMNHL2%2BF7jLIRx5TGiCCaKwWTpYGw3unC3V8BxmZm2qZGKxE34glI8b8YttIuQMwVwjFxSYTzAnCgGkzNwFZee4iZ4z8MpfByL4yVLfrSCn58FNfj3XLC1Gh2oSwluwBtDl8h%2BHBq0wYZ0vNnWevTvFrX3Jl7IXtLmCPx1p5duYxahd1NKANeV3jTdFLD4vxTyzA4h9cijQ8Si8DWJdbgKWsmI9KS%2FydPM4y%2BEPd4d2G2IbwpM3LlwMJWypb%2FiJdXuGbaKlCeOUxQwx4etk6czRwP7tzDbDFvDAhLa44zIY5zhbHAGQyyPkTuiPyrPOjvqLVvZ1lvAuhI7HA25t2O%2FjgH2M3eXFynFJ5e%2B6s0j7JcPLTWETWnd6HAaHxbxJ0ppbNk1Dxflp8i1jy4tDWHUGW9d5b6WBptr410I%2BHPwJOo%2BGSs%2BO4vidbcqEFvTZAAoeiIhu05N7aSR%2FbMK2eqMoGOqUBU9Yj4MZgXN2J1a%2FC3VTXtci8N9x44RlU6Eh8iChLecGvHgHFIZz0GrVAmRoAeJhE%2B71ZYJG1hZWx8TGmmQ5JK3SfRNE4mVC5TdgfKxFqFe6isaMJ%2FLVi%2BJHl9fJsfrX63jZLjUBRvhNeHFR3C8iJZGX40%2F9kagCNYNAAKNAhaNUMLJa5gJk%2BpdXB0FUf1MOQYJSImTnlzCjZDoWnL4k3hLTvzZcz&X-Amz-Signature=802d1f7c48bcbfeca446a1a1c72e43c3f4aad18882098ff9e9741b05cb9abef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5CUYPE%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDq5HQl%2FSgQFrJqAd0tX0zir9YhAORI4qdNFWEzw8x8QQIgN1H%2FHTFw1hwQX3%2FgXUlDwl3lLdE9QAsxI%2Fs%2BYURgtKAq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDHCBab3zUcIQGLekAyrcA2NE2Mxt5l8XbAZE4KzfcTpwoCmkQM6Ll7MzV5JyTgr8in5AD1ysKQn1I%2BltZEnyoRQ3MgbVw3t8YMldh2XI0f3uwpieFblJlTLGwDRNLizorfDY3az%2Fk6Q40P747%2BEWJY8IewfnSUpEOuwPxIU7l2lkgwqxDmJLDdU34mC35eNcpMNHL2%2BF7jLIRx5TGiCCaKwWTpYGw3unC3V8BxmZm2qZGKxE34glI8b8YttIuQMwVwjFxSYTzAnCgGkzNwFZee4iZ4z8MpfByL4yVLfrSCn58FNfj3XLC1Gh2oSwluwBtDl8h%2BHBq0wYZ0vNnWevTvFrX3Jl7IXtLmCPx1p5duYxahd1NKANeV3jTdFLD4vxTyzA4h9cijQ8Si8DWJdbgKWsmI9KS%2FydPM4y%2BEPd4d2G2IbwpM3LlwMJWypb%2FiJdXuGbaKlCeOUxQwx4etk6czRwP7tzDbDFvDAhLa44zIY5zhbHAGQyyPkTuiPyrPOjvqLVvZ1lvAuhI7HA25t2O%2FjgH2M3eXFynFJ5e%2B6s0j7JcPLTWETWnd6HAaHxbxJ0ppbNk1Dxflp8i1jy4tDWHUGW9d5b6WBptr410I%2BHPwJOo%2BGSs%2BO4vidbcqEFvTZAAoeiIhu05N7aSR%2FbMK2eqMoGOqUBU9Yj4MZgXN2J1a%2FC3VTXtci8N9x44RlU6Eh8iChLecGvHgHFIZz0GrVAmRoAeJhE%2B71ZYJG1hZWx8TGmmQ5JK3SfRNE4mVC5TdgfKxFqFe6isaMJ%2FLVi%2BJHl9fJsfrX63jZLjUBRvhNeHFR3C8iJZGX40%2F9kagCNYNAAKNAhaNUMLJa5gJk%2BpdXB0FUf1MOQYJSImTnlzCjZDoWnL4k3hLTvzZcz&X-Amz-Signature=76e64882d72a8b35c931819e7de09f992bf09d5cc16685f1ace718851239b50c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5CUYPE%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDq5HQl%2FSgQFrJqAd0tX0zir9YhAORI4qdNFWEzw8x8QQIgN1H%2FHTFw1hwQX3%2FgXUlDwl3lLdE9QAsxI%2Fs%2BYURgtKAq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDHCBab3zUcIQGLekAyrcA2NE2Mxt5l8XbAZE4KzfcTpwoCmkQM6Ll7MzV5JyTgr8in5AD1ysKQn1I%2BltZEnyoRQ3MgbVw3t8YMldh2XI0f3uwpieFblJlTLGwDRNLizorfDY3az%2Fk6Q40P747%2BEWJY8IewfnSUpEOuwPxIU7l2lkgwqxDmJLDdU34mC35eNcpMNHL2%2BF7jLIRx5TGiCCaKwWTpYGw3unC3V8BxmZm2qZGKxE34glI8b8YttIuQMwVwjFxSYTzAnCgGkzNwFZee4iZ4z8MpfByL4yVLfrSCn58FNfj3XLC1Gh2oSwluwBtDl8h%2BHBq0wYZ0vNnWevTvFrX3Jl7IXtLmCPx1p5duYxahd1NKANeV3jTdFLD4vxTyzA4h9cijQ8Si8DWJdbgKWsmI9KS%2FydPM4y%2BEPd4d2G2IbwpM3LlwMJWypb%2FiJdXuGbaKlCeOUxQwx4etk6czRwP7tzDbDFvDAhLa44zIY5zhbHAGQyyPkTuiPyrPOjvqLVvZ1lvAuhI7HA25t2O%2FjgH2M3eXFynFJ5e%2B6s0j7JcPLTWETWnd6HAaHxbxJ0ppbNk1Dxflp8i1jy4tDWHUGW9d5b6WBptr410I%2BHPwJOo%2BGSs%2BO4vidbcqEFvTZAAoeiIhu05N7aSR%2FbMK2eqMoGOqUBU9Yj4MZgXN2J1a%2FC3VTXtci8N9x44RlU6Eh8iChLecGvHgHFIZz0GrVAmRoAeJhE%2B71ZYJG1hZWx8TGmmQ5JK3SfRNE4mVC5TdgfKxFqFe6isaMJ%2FLVi%2BJHl9fJsfrX63jZLjUBRvhNeHFR3C8iJZGX40%2F9kagCNYNAAKNAhaNUMLJa5gJk%2BpdXB0FUf1MOQYJSImTnlzCjZDoWnL4k3hLTvzZcz&X-Amz-Signature=0fcdde0de1b2184e59fb5b528591a42806b529eb5542bd4132a4559008b2a768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5CUYPE%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDq5HQl%2FSgQFrJqAd0tX0zir9YhAORI4qdNFWEzw8x8QQIgN1H%2FHTFw1hwQX3%2FgXUlDwl3lLdE9QAsxI%2Fs%2BYURgtKAq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDHCBab3zUcIQGLekAyrcA2NE2Mxt5l8XbAZE4KzfcTpwoCmkQM6Ll7MzV5JyTgr8in5AD1ysKQn1I%2BltZEnyoRQ3MgbVw3t8YMldh2XI0f3uwpieFblJlTLGwDRNLizorfDY3az%2Fk6Q40P747%2BEWJY8IewfnSUpEOuwPxIU7l2lkgwqxDmJLDdU34mC35eNcpMNHL2%2BF7jLIRx5TGiCCaKwWTpYGw3unC3V8BxmZm2qZGKxE34glI8b8YttIuQMwVwjFxSYTzAnCgGkzNwFZee4iZ4z8MpfByL4yVLfrSCn58FNfj3XLC1Gh2oSwluwBtDl8h%2BHBq0wYZ0vNnWevTvFrX3Jl7IXtLmCPx1p5duYxahd1NKANeV3jTdFLD4vxTyzA4h9cijQ8Si8DWJdbgKWsmI9KS%2FydPM4y%2BEPd4d2G2IbwpM3LlwMJWypb%2FiJdXuGbaKlCeOUxQwx4etk6czRwP7tzDbDFvDAhLa44zIY5zhbHAGQyyPkTuiPyrPOjvqLVvZ1lvAuhI7HA25t2O%2FjgH2M3eXFynFJ5e%2B6s0j7JcPLTWETWnd6HAaHxbxJ0ppbNk1Dxflp8i1jy4tDWHUGW9d5b6WBptr410I%2BHPwJOo%2BGSs%2BO4vidbcqEFvTZAAoeiIhu05N7aSR%2FbMK2eqMoGOqUBU9Yj4MZgXN2J1a%2FC3VTXtci8N9x44RlU6Eh8iChLecGvHgHFIZz0GrVAmRoAeJhE%2B71ZYJG1hZWx8TGmmQ5JK3SfRNE4mVC5TdgfKxFqFe6isaMJ%2FLVi%2BJHl9fJsfrX63jZLjUBRvhNeHFR3C8iJZGX40%2F9kagCNYNAAKNAhaNUMLJa5gJk%2BpdXB0FUf1MOQYJSImTnlzCjZDoWnL4k3hLTvzZcz&X-Amz-Signature=ec06d0ace4d0e3b20094a566a51e2b814a0d2c1f6064df7f4046534d1d1b0e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5CUYPE%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDq5HQl%2FSgQFrJqAd0tX0zir9YhAORI4qdNFWEzw8x8QQIgN1H%2FHTFw1hwQX3%2FgXUlDwl3lLdE9QAsxI%2Fs%2BYURgtKAq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDHCBab3zUcIQGLekAyrcA2NE2Mxt5l8XbAZE4KzfcTpwoCmkQM6Ll7MzV5JyTgr8in5AD1ysKQn1I%2BltZEnyoRQ3MgbVw3t8YMldh2XI0f3uwpieFblJlTLGwDRNLizorfDY3az%2Fk6Q40P747%2BEWJY8IewfnSUpEOuwPxIU7l2lkgwqxDmJLDdU34mC35eNcpMNHL2%2BF7jLIRx5TGiCCaKwWTpYGw3unC3V8BxmZm2qZGKxE34glI8b8YttIuQMwVwjFxSYTzAnCgGkzNwFZee4iZ4z8MpfByL4yVLfrSCn58FNfj3XLC1Gh2oSwluwBtDl8h%2BHBq0wYZ0vNnWevTvFrX3Jl7IXtLmCPx1p5duYxahd1NKANeV3jTdFLD4vxTyzA4h9cijQ8Si8DWJdbgKWsmI9KS%2FydPM4y%2BEPd4d2G2IbwpM3LlwMJWypb%2FiJdXuGbaKlCeOUxQwx4etk6czRwP7tzDbDFvDAhLa44zIY5zhbHAGQyyPkTuiPyrPOjvqLVvZ1lvAuhI7HA25t2O%2FjgH2M3eXFynFJ5e%2B6s0j7JcPLTWETWnd6HAaHxbxJ0ppbNk1Dxflp8i1jy4tDWHUGW9d5b6WBptr410I%2BHPwJOo%2BGSs%2BO4vidbcqEFvTZAAoeiIhu05N7aSR%2FbMK2eqMoGOqUBU9Yj4MZgXN2J1a%2FC3VTXtci8N9x44RlU6Eh8iChLecGvHgHFIZz0GrVAmRoAeJhE%2B71ZYJG1hZWx8TGmmQ5JK3SfRNE4mVC5TdgfKxFqFe6isaMJ%2FLVi%2BJHl9fJsfrX63jZLjUBRvhNeHFR3C8iJZGX40%2F9kagCNYNAAKNAhaNUMLJa5gJk%2BpdXB0FUf1MOQYJSImTnlzCjZDoWnL4k3hLTvzZcz&X-Amz-Signature=b3c9f855ca266100184bed52a934383618409af8b170cba45ea88d2d02a3280e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5CUYPE%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDq5HQl%2FSgQFrJqAd0tX0zir9YhAORI4qdNFWEzw8x8QQIgN1H%2FHTFw1hwQX3%2FgXUlDwl3lLdE9QAsxI%2Fs%2BYURgtKAq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDHCBab3zUcIQGLekAyrcA2NE2Mxt5l8XbAZE4KzfcTpwoCmkQM6Ll7MzV5JyTgr8in5AD1ysKQn1I%2BltZEnyoRQ3MgbVw3t8YMldh2XI0f3uwpieFblJlTLGwDRNLizorfDY3az%2Fk6Q40P747%2BEWJY8IewfnSUpEOuwPxIU7l2lkgwqxDmJLDdU34mC35eNcpMNHL2%2BF7jLIRx5TGiCCaKwWTpYGw3unC3V8BxmZm2qZGKxE34glI8b8YttIuQMwVwjFxSYTzAnCgGkzNwFZee4iZ4z8MpfByL4yVLfrSCn58FNfj3XLC1Gh2oSwluwBtDl8h%2BHBq0wYZ0vNnWevTvFrX3Jl7IXtLmCPx1p5duYxahd1NKANeV3jTdFLD4vxTyzA4h9cijQ8Si8DWJdbgKWsmI9KS%2FydPM4y%2BEPd4d2G2IbwpM3LlwMJWypb%2FiJdXuGbaKlCeOUxQwx4etk6czRwP7tzDbDFvDAhLa44zIY5zhbHAGQyyPkTuiPyrPOjvqLVvZ1lvAuhI7HA25t2O%2FjgH2M3eXFynFJ5e%2B6s0j7JcPLTWETWnd6HAaHxbxJ0ppbNk1Dxflp8i1jy4tDWHUGW9d5b6WBptr410I%2BHPwJOo%2BGSs%2BO4vidbcqEFvTZAAoeiIhu05N7aSR%2FbMK2eqMoGOqUBU9Yj4MZgXN2J1a%2FC3VTXtci8N9x44RlU6Eh8iChLecGvHgHFIZz0GrVAmRoAeJhE%2B71ZYJG1hZWx8TGmmQ5JK3SfRNE4mVC5TdgfKxFqFe6isaMJ%2FLVi%2BJHl9fJsfrX63jZLjUBRvhNeHFR3C8iJZGX40%2F9kagCNYNAAKNAhaNUMLJa5gJk%2BpdXB0FUf1MOQYJSImTnlzCjZDoWnL4k3hLTvzZcz&X-Amz-Signature=fd7a2411d0b3f3f4cbe468050b3554c264306058b218a29965b3fa4b99be0de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624PTM6N4%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGOfK26bRQ6S0eS%2Bh9bhfnpVHxYNprz%2BV0g4piZ2XxvmAiAuklWdvW4vRjK2J%2BDt6%2BvvVk8M5eChNE2RIOhb1JcqmCr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIMPEk5iIvGNMeTfoVLKtwD3iOjAUbLh%2B4z9mM%2BCLackp74TIeL1nbsscFmtbntkU7DILQwKGwE0gnu84tPe%2Feawl9mLqp6Xl1AH6nUYGPEqofS71rlDqm%2FA4RWMi9xS3xVk5u4hEaQm8x6IUkSHMFxApLK9ZjndtTIcItGlCFy9uRpgkBMoVIlUeUSOsQCzSIwqBC1Tz8CHRUHxO%2BMty1MJxcx%2F2ZFpbWt9vt2I9Yn4ddDO8tQvSXuUvvr41V%2BLDGK3PGUwmOjvnQhNoCyJhZ3fFZbzGXgJqGVzTBH9pmcpywj3WpHok%2BPUcBn7RDvgUpfV3dD7jeEPyDRbIdGiID5cB7LH8Mu98JFG9JLV6Aw7Hrk6%2FMSxjg4V3dVl2tjDoITdUVqgSooN4tpFK1jEtT%2B9DgAehJGs19I61BVN89fJlFkaDHnQXyyW2wU1%2FD5TFwC2Gq0TCyY%2FmVlR4SrWc7ho2%2B2r%2F2uq8nLS%2FADSBnhnTJkx7tG6yd9X%2BBALquVHR9dIyORf2xso7EZYMMMZpdYhTPWgEG0Q6AAXVgax4vG4fnJCUivNUAY0lXkUWt3%2B6CqtsxJ3PMJjrfB7Q7lNDfWHLwUTFbx9A4UscP5EYtzQmaK9yedlbXZoA66q4XlGL61rSJaffEM3vUsNSIwlZ6oygY6pgGDFrWlf0uAY9zEaXFAlRbJoWCeJGCD8WpbPk%2BAOCMoTp0QeaB92u9JvjStP%2FYD2TUmqC5OIm2eoY2FtKypnYNV7l2%2FpBsjpbhMjlIfd0Q4gSVE3y5VgeOEqGxEQg2De7GrNd5zl6qOoP7gOmN3lKhijiHSufNBToa889YdQsbQBQd26Z7nRpUqHUzzDnmPf3wutDaDTV2O3cF95lUh8YHmiaAFM%2Br0&X-Amz-Signature=f694afc2994b137eeba67881db319b865e3181feab1f9a1356a3cb3b8493a01a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624PTM6N4%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGOfK26bRQ6S0eS%2Bh9bhfnpVHxYNprz%2BV0g4piZ2XxvmAiAuklWdvW4vRjK2J%2BDt6%2BvvVk8M5eChNE2RIOhb1JcqmCr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIMPEk5iIvGNMeTfoVLKtwD3iOjAUbLh%2B4z9mM%2BCLackp74TIeL1nbsscFmtbntkU7DILQwKGwE0gnu84tPe%2Feawl9mLqp6Xl1AH6nUYGPEqofS71rlDqm%2FA4RWMi9xS3xVk5u4hEaQm8x6IUkSHMFxApLK9ZjndtTIcItGlCFy9uRpgkBMoVIlUeUSOsQCzSIwqBC1Tz8CHRUHxO%2BMty1MJxcx%2F2ZFpbWt9vt2I9Yn4ddDO8tQvSXuUvvr41V%2BLDGK3PGUwmOjvnQhNoCyJhZ3fFZbzGXgJqGVzTBH9pmcpywj3WpHok%2BPUcBn7RDvgUpfV3dD7jeEPyDRbIdGiID5cB7LH8Mu98JFG9JLV6Aw7Hrk6%2FMSxjg4V3dVl2tjDoITdUVqgSooN4tpFK1jEtT%2B9DgAehJGs19I61BVN89fJlFkaDHnQXyyW2wU1%2FD5TFwC2Gq0TCyY%2FmVlR4SrWc7ho2%2B2r%2F2uq8nLS%2FADSBnhnTJkx7tG6yd9X%2BBALquVHR9dIyORf2xso7EZYMMMZpdYhTPWgEG0Q6AAXVgax4vG4fnJCUivNUAY0lXkUWt3%2B6CqtsxJ3PMJjrfB7Q7lNDfWHLwUTFbx9A4UscP5EYtzQmaK9yedlbXZoA66q4XlGL61rSJaffEM3vUsNSIwlZ6oygY6pgGDFrWlf0uAY9zEaXFAlRbJoWCeJGCD8WpbPk%2BAOCMoTp0QeaB92u9JvjStP%2FYD2TUmqC5OIm2eoY2FtKypnYNV7l2%2FpBsjpbhMjlIfd0Q4gSVE3y5VgeOEqGxEQg2De7GrNd5zl6qOoP7gOmN3lKhijiHSufNBToa889YdQsbQBQd26Z7nRpUqHUzzDnmPf3wutDaDTV2O3cF95lUh8YHmiaAFM%2Br0&X-Amz-Signature=ca7ab9817e986fd92151c46789e5ee425c1512c06ca1b3f9a1f66c294dd29031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624PTM6N4%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGOfK26bRQ6S0eS%2Bh9bhfnpVHxYNprz%2BV0g4piZ2XxvmAiAuklWdvW4vRjK2J%2BDt6%2BvvVk8M5eChNE2RIOhb1JcqmCr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIMPEk5iIvGNMeTfoVLKtwD3iOjAUbLh%2B4z9mM%2BCLackp74TIeL1nbsscFmtbntkU7DILQwKGwE0gnu84tPe%2Feawl9mLqp6Xl1AH6nUYGPEqofS71rlDqm%2FA4RWMi9xS3xVk5u4hEaQm8x6IUkSHMFxApLK9ZjndtTIcItGlCFy9uRpgkBMoVIlUeUSOsQCzSIwqBC1Tz8CHRUHxO%2BMty1MJxcx%2F2ZFpbWt9vt2I9Yn4ddDO8tQvSXuUvvr41V%2BLDGK3PGUwmOjvnQhNoCyJhZ3fFZbzGXgJqGVzTBH9pmcpywj3WpHok%2BPUcBn7RDvgUpfV3dD7jeEPyDRbIdGiID5cB7LH8Mu98JFG9JLV6Aw7Hrk6%2FMSxjg4V3dVl2tjDoITdUVqgSooN4tpFK1jEtT%2B9DgAehJGs19I61BVN89fJlFkaDHnQXyyW2wU1%2FD5TFwC2Gq0TCyY%2FmVlR4SrWc7ho2%2B2r%2F2uq8nLS%2FADSBnhnTJkx7tG6yd9X%2BBALquVHR9dIyORf2xso7EZYMMMZpdYhTPWgEG0Q6AAXVgax4vG4fnJCUivNUAY0lXkUWt3%2B6CqtsxJ3PMJjrfB7Q7lNDfWHLwUTFbx9A4UscP5EYtzQmaK9yedlbXZoA66q4XlGL61rSJaffEM3vUsNSIwlZ6oygY6pgGDFrWlf0uAY9zEaXFAlRbJoWCeJGCD8WpbPk%2BAOCMoTp0QeaB92u9JvjStP%2FYD2TUmqC5OIm2eoY2FtKypnYNV7l2%2FpBsjpbhMjlIfd0Q4gSVE3y5VgeOEqGxEQg2De7GrNd5zl6qOoP7gOmN3lKhijiHSufNBToa889YdQsbQBQd26Z7nRpUqHUzzDnmPf3wutDaDTV2O3cF95lUh8YHmiaAFM%2Br0&X-Amz-Signature=6a4fc65e80ce00f01cf7802211c75f4d21465efe7b8a941aeebdd76b66ebe47f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624PTM6N4%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGOfK26bRQ6S0eS%2Bh9bhfnpVHxYNprz%2BV0g4piZ2XxvmAiAuklWdvW4vRjK2J%2BDt6%2BvvVk8M5eChNE2RIOhb1JcqmCr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIMPEk5iIvGNMeTfoVLKtwD3iOjAUbLh%2B4z9mM%2BCLackp74TIeL1nbsscFmtbntkU7DILQwKGwE0gnu84tPe%2Feawl9mLqp6Xl1AH6nUYGPEqofS71rlDqm%2FA4RWMi9xS3xVk5u4hEaQm8x6IUkSHMFxApLK9ZjndtTIcItGlCFy9uRpgkBMoVIlUeUSOsQCzSIwqBC1Tz8CHRUHxO%2BMty1MJxcx%2F2ZFpbWt9vt2I9Yn4ddDO8tQvSXuUvvr41V%2BLDGK3PGUwmOjvnQhNoCyJhZ3fFZbzGXgJqGVzTBH9pmcpywj3WpHok%2BPUcBn7RDvgUpfV3dD7jeEPyDRbIdGiID5cB7LH8Mu98JFG9JLV6Aw7Hrk6%2FMSxjg4V3dVl2tjDoITdUVqgSooN4tpFK1jEtT%2B9DgAehJGs19I61BVN89fJlFkaDHnQXyyW2wU1%2FD5TFwC2Gq0TCyY%2FmVlR4SrWc7ho2%2B2r%2F2uq8nLS%2FADSBnhnTJkx7tG6yd9X%2BBALquVHR9dIyORf2xso7EZYMMMZpdYhTPWgEG0Q6AAXVgax4vG4fnJCUivNUAY0lXkUWt3%2B6CqtsxJ3PMJjrfB7Q7lNDfWHLwUTFbx9A4UscP5EYtzQmaK9yedlbXZoA66q4XlGL61rSJaffEM3vUsNSIwlZ6oygY6pgGDFrWlf0uAY9zEaXFAlRbJoWCeJGCD8WpbPk%2BAOCMoTp0QeaB92u9JvjStP%2FYD2TUmqC5OIm2eoY2FtKypnYNV7l2%2FpBsjpbhMjlIfd0Q4gSVE3y5VgeOEqGxEQg2De7GrNd5zl6qOoP7gOmN3lKhijiHSufNBToa889YdQsbQBQd26Z7nRpUqHUzzDnmPf3wutDaDTV2O3cF95lUh8YHmiaAFM%2Br0&X-Amz-Signature=42b23211825af995a6b96d31912682de1b2acc936aa0d79a93d99fba53720b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624PTM6N4%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGOfK26bRQ6S0eS%2Bh9bhfnpVHxYNprz%2BV0g4piZ2XxvmAiAuklWdvW4vRjK2J%2BDt6%2BvvVk8M5eChNE2RIOhb1JcqmCr%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIMPEk5iIvGNMeTfoVLKtwD3iOjAUbLh%2B4z9mM%2BCLackp74TIeL1nbsscFmtbntkU7DILQwKGwE0gnu84tPe%2Feawl9mLqp6Xl1AH6nUYGPEqofS71rlDqm%2FA4RWMi9xS3xVk5u4hEaQm8x6IUkSHMFxApLK9ZjndtTIcItGlCFy9uRpgkBMoVIlUeUSOsQCzSIwqBC1Tz8CHRUHxO%2BMty1MJxcx%2F2ZFpbWt9vt2I9Yn4ddDO8tQvSXuUvvr41V%2BLDGK3PGUwmOjvnQhNoCyJhZ3fFZbzGXgJqGVzTBH9pmcpywj3WpHok%2BPUcBn7RDvgUpfV3dD7jeEPyDRbIdGiID5cB7LH8Mu98JFG9JLV6Aw7Hrk6%2FMSxjg4V3dVl2tjDoITdUVqgSooN4tpFK1jEtT%2B9DgAehJGs19I61BVN89fJlFkaDHnQXyyW2wU1%2FD5TFwC2Gq0TCyY%2FmVlR4SrWc7ho2%2B2r%2F2uq8nLS%2FADSBnhnTJkx7tG6yd9X%2BBALquVHR9dIyORf2xso7EZYMMMZpdYhTPWgEG0Q6AAXVgax4vG4fnJCUivNUAY0lXkUWt3%2B6CqtsxJ3PMJjrfB7Q7lNDfWHLwUTFbx9A4UscP5EYtzQmaK9yedlbXZoA66q4XlGL61rSJaffEM3vUsNSIwlZ6oygY6pgGDFrWlf0uAY9zEaXFAlRbJoWCeJGCD8WpbPk%2BAOCMoTp0QeaB92u9JvjStP%2FYD2TUmqC5OIm2eoY2FtKypnYNV7l2%2FpBsjpbhMjlIfd0Q4gSVE3y5VgeOEqGxEQg2De7GrNd5zl6qOoP7gOmN3lKhijiHSufNBToa889YdQsbQBQd26Z7nRpUqHUzzDnmPf3wutDaDTV2O3cF95lUh8YHmiaAFM%2Br0&X-Amz-Signature=32fad27bc9e919cf616866228118569380451dcd1ab190ddf1aa1fd394f11e5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC6MQLCY%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD9CFq1yak%2BN4LvJlWIMq8YTQWtxuiuq7YKaWfPtX3bLwIgfCabIFFq9yNlet50ZE0mj9fn0tqNnR7UNgRVH7tZ62Eq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPOTCtGxE7wlZ466NyrcA2c3HdU%2Ftvcvu6vJevHmPdSsPRr5d2VyO585NR0X93nrjcIdcHiRqfMcwHDh8wdfY4x5xVWF8yUtMy4spShISttDlhaI4aahMt8GWC0v9fC7sXnSKBIFUpCmor8mjME12IRAL0YUuKh96%2Fj%2FGRZ%2BryLn73DI%2F7WTZkAxRsjlrC511WMUEKlt%2BdXf6l0OcmNjku7nzaqCHxI2QGBUqNJvcGwPCMLK2Pp3GItXWxft3EORupuqVBfWUP8KFyVGKnoB585sf%2Bgwh45BKq6Y80cC9fWOYb8wADPWo%2BNt9HdKFWk%2B0lLptvwliKfcM0liiZi2jGfAKJsPVWC5kI3b1FN7n4orxqiKAUbl79SnbI9Vwa7voTxTMRGW0%2FfJxwN979EyJBEF6TNPC3SEEyIbBV98bExgVaEzzrnC%2BFaBaypzjo9lfL5MJsaCY7%2Bb6J9cSNFE9IvpeCxe3IrBe1oAGwhlDr7E1yBkt%2BGgF1La%2BfslYmiakpEZ7YdhCAtIwjbFDWQbISGHbOaPB%2B6oZHtBbvEhU7WjcDNBBulTLRB4Zs8fdvuyT8f0MtZU3I5YGV%2BOtNatSr833aEqW3rDpSaXQqHCr2X6f84KLww1q%2FzPLsn8wsvcqARHDVFbzTSBpHFvMNaeqMoGOqUB0ZJniLc%2BRJ2vqKTkVNknzwDRCIsC4Qke6D8EISGdiwISkgN3d1iQt50G0i1JfqQkOiuCBDCWd3%2BN6pKVXb%2BwGkp9hukpSrpLv1ITS3Gs5%2FXYB8qZZkbR2Qzft%2BEmFS8do3zku%2FjB6awjP%2F73Im0rUI9fjsgNMS4Hwrx1vGLuFpM4nlQxHrl8ioI6oiHUOLbRrV7Ol9ZPqW4UqCiz8xMY4KfXE3ee&X-Amz-Signature=4562cd6975d26a3ab0c3ff335753d77e2b3cd97aa078c3a5e9bab697d8cfc83c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC6MQLCY%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD9CFq1yak%2BN4LvJlWIMq8YTQWtxuiuq7YKaWfPtX3bLwIgfCabIFFq9yNlet50ZE0mj9fn0tqNnR7UNgRVH7tZ62Eq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPOTCtGxE7wlZ466NyrcA2c3HdU%2Ftvcvu6vJevHmPdSsPRr5d2VyO585NR0X93nrjcIdcHiRqfMcwHDh8wdfY4x5xVWF8yUtMy4spShISttDlhaI4aahMt8GWC0v9fC7sXnSKBIFUpCmor8mjME12IRAL0YUuKh96%2Fj%2FGRZ%2BryLn73DI%2F7WTZkAxRsjlrC511WMUEKlt%2BdXf6l0OcmNjku7nzaqCHxI2QGBUqNJvcGwPCMLK2Pp3GItXWxft3EORupuqVBfWUP8KFyVGKnoB585sf%2Bgwh45BKq6Y80cC9fWOYb8wADPWo%2BNt9HdKFWk%2B0lLptvwliKfcM0liiZi2jGfAKJsPVWC5kI3b1FN7n4orxqiKAUbl79SnbI9Vwa7voTxTMRGW0%2FfJxwN979EyJBEF6TNPC3SEEyIbBV98bExgVaEzzrnC%2BFaBaypzjo9lfL5MJsaCY7%2Bb6J9cSNFE9IvpeCxe3IrBe1oAGwhlDr7E1yBkt%2BGgF1La%2BfslYmiakpEZ7YdhCAtIwjbFDWQbISGHbOaPB%2B6oZHtBbvEhU7WjcDNBBulTLRB4Zs8fdvuyT8f0MtZU3I5YGV%2BOtNatSr833aEqW3rDpSaXQqHCr2X6f84KLww1q%2FzPLsn8wsvcqARHDVFbzTSBpHFvMNaeqMoGOqUB0ZJniLc%2BRJ2vqKTkVNknzwDRCIsC4Qke6D8EISGdiwISkgN3d1iQt50G0i1JfqQkOiuCBDCWd3%2BN6pKVXb%2BwGkp9hukpSrpLv1ITS3Gs5%2FXYB8qZZkbR2Qzft%2BEmFS8do3zku%2FjB6awjP%2F73Im0rUI9fjsgNMS4Hwrx1vGLuFpM4nlQxHrl8ioI6oiHUOLbRrV7Ol9ZPqW4UqCiz8xMY4KfXE3ee&X-Amz-Signature=1ac01e7d5db5152e71816de272e3e5f1bd0d95841b037c9f2a15b93b13b61834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC6MQLCY%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD9CFq1yak%2BN4LvJlWIMq8YTQWtxuiuq7YKaWfPtX3bLwIgfCabIFFq9yNlet50ZE0mj9fn0tqNnR7UNgRVH7tZ62Eq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPOTCtGxE7wlZ466NyrcA2c3HdU%2Ftvcvu6vJevHmPdSsPRr5d2VyO585NR0X93nrjcIdcHiRqfMcwHDh8wdfY4x5xVWF8yUtMy4spShISttDlhaI4aahMt8GWC0v9fC7sXnSKBIFUpCmor8mjME12IRAL0YUuKh96%2Fj%2FGRZ%2BryLn73DI%2F7WTZkAxRsjlrC511WMUEKlt%2BdXf6l0OcmNjku7nzaqCHxI2QGBUqNJvcGwPCMLK2Pp3GItXWxft3EORupuqVBfWUP8KFyVGKnoB585sf%2Bgwh45BKq6Y80cC9fWOYb8wADPWo%2BNt9HdKFWk%2B0lLptvwliKfcM0liiZi2jGfAKJsPVWC5kI3b1FN7n4orxqiKAUbl79SnbI9Vwa7voTxTMRGW0%2FfJxwN979EyJBEF6TNPC3SEEyIbBV98bExgVaEzzrnC%2BFaBaypzjo9lfL5MJsaCY7%2Bb6J9cSNFE9IvpeCxe3IrBe1oAGwhlDr7E1yBkt%2BGgF1La%2BfslYmiakpEZ7YdhCAtIwjbFDWQbISGHbOaPB%2B6oZHtBbvEhU7WjcDNBBulTLRB4Zs8fdvuyT8f0MtZU3I5YGV%2BOtNatSr833aEqW3rDpSaXQqHCr2X6f84KLww1q%2FzPLsn8wsvcqARHDVFbzTSBpHFvMNaeqMoGOqUB0ZJniLc%2BRJ2vqKTkVNknzwDRCIsC4Qke6D8EISGdiwISkgN3d1iQt50G0i1JfqQkOiuCBDCWd3%2BN6pKVXb%2BwGkp9hukpSrpLv1ITS3Gs5%2FXYB8qZZkbR2Qzft%2BEmFS8do3zku%2FjB6awjP%2F73Im0rUI9fjsgNMS4Hwrx1vGLuFpM4nlQxHrl8ioI6oiHUOLbRrV7Ol9ZPqW4UqCiz8xMY4KfXE3ee&X-Amz-Signature=eac23aaa705335b78fbf7ca7bcec8f74d18e9fb2799515ebe8a0193969210fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYAQOXHB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCPSOAM0BUNMv9E0JkXm%2FE%2FMAZeXvW5pYqARraD49nijAIgV54t2Qfb8NOkml6wmFeuaqEJDgfe2lVP2ip9y%2FMjgfAq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDLSIN1oROM5hhiHViircA5R7oSIgr4rb68LKzxB16sfJEZf2eX6i2Lcg8w48ZaEANTwPNGpS%2FBnOapQHHj3rMFIJrf5kjX2sB9NI8fGW7I4kI9vdcVQJtID%2BnkJid3qvRRRJpMXcBx8EPxE%2FDTQGsXK5TNlIJjqBf5xULzldaOOpvhwk9COv5al%2FS7WVARLtN%2B9fH3P78DD53isOVPNFp7HC3MO2a4fO6oWgn6oT3gZwufF8Xwj%2BoDU7ON89PUpSKIQ9tVGZ2EcJRDLsaLE34keWpkJzdCvwrzLE%2FaW0ZktQMrh1e0ktfkXLoN1j4MWSujX73c86iYzNIYmBKPd8Kq1fn2JITpHbdDcdg2946EbQLR1Rx1hpuWqQ4RCjC2O3OCX2MXqEhdMZ1Ev0zk792MnF0E5m8gkd6VLZzYgYkb360Kl3P2O0et%2FN7omBE434SGFrRimKvrgl3VJh%2Fi5EDBhBrmOad6OpJfehSBqeJ8gyiFLsRiHHzPiZcrw82gMYMe17kBnMl%2Bl1BD26fLGiYX0RasJTBr%2BPCvoFZVRzLTzAMobo3JHjkQcapfukQeShjrdnwaJrRCQX2nhXcp0NSPIU72YkQ%2F3aIJngdHcLpiZvazVFZo%2FyIyCoETcrN6S9f9HcEEjcE9AHbV5OMIyfqMoGOqUBVfeIoaXOaQ%2B1J8oM1I49cutKN3HE5NITX6iDKSiii2dCzx9Bh1kRb0QoS67Bu13R9ZDzR6q5RCqxMMvoI64CYMGAS77Zi9Txxat%2FiJQCxWSEAXqwi8VwkFQONtdu9xENmIlbn1CjqlxZOpNw9GySLi3xudbEI5HZypo8%2FCiktTVkMNT9wZOY7QP28qOlkAwhM6miZttuE9tXcDWCeE4HCEudFT1Y&X-Amz-Signature=e7fcff8e918bbf1664a62e4b93f1c4e11d42f283d49970df5377c31befb14c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYAQOXHB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCPSOAM0BUNMv9E0JkXm%2FE%2FMAZeXvW5pYqARraD49nijAIgV54t2Qfb8NOkml6wmFeuaqEJDgfe2lVP2ip9y%2FMjgfAq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDLSIN1oROM5hhiHViircA5R7oSIgr4rb68LKzxB16sfJEZf2eX6i2Lcg8w48ZaEANTwPNGpS%2FBnOapQHHj3rMFIJrf5kjX2sB9NI8fGW7I4kI9vdcVQJtID%2BnkJid3qvRRRJpMXcBx8EPxE%2FDTQGsXK5TNlIJjqBf5xULzldaOOpvhwk9COv5al%2FS7WVARLtN%2B9fH3P78DD53isOVPNFp7HC3MO2a4fO6oWgn6oT3gZwufF8Xwj%2BoDU7ON89PUpSKIQ9tVGZ2EcJRDLsaLE34keWpkJzdCvwrzLE%2FaW0ZktQMrh1e0ktfkXLoN1j4MWSujX73c86iYzNIYmBKPd8Kq1fn2JITpHbdDcdg2946EbQLR1Rx1hpuWqQ4RCjC2O3OCX2MXqEhdMZ1Ev0zk792MnF0E5m8gkd6VLZzYgYkb360Kl3P2O0et%2FN7omBE434SGFrRimKvrgl3VJh%2Fi5EDBhBrmOad6OpJfehSBqeJ8gyiFLsRiHHzPiZcrw82gMYMe17kBnMl%2Bl1BD26fLGiYX0RasJTBr%2BPCvoFZVRzLTzAMobo3JHjkQcapfukQeShjrdnwaJrRCQX2nhXcp0NSPIU72YkQ%2F3aIJngdHcLpiZvazVFZo%2FyIyCoETcrN6S9f9HcEEjcE9AHbV5OMIyfqMoGOqUBVfeIoaXOaQ%2B1J8oM1I49cutKN3HE5NITX6iDKSiii2dCzx9Bh1kRb0QoS67Bu13R9ZDzR6q5RCqxMMvoI64CYMGAS77Zi9Txxat%2FiJQCxWSEAXqwi8VwkFQONtdu9xENmIlbn1CjqlxZOpNw9GySLi3xudbEI5HZypo8%2FCiktTVkMNT9wZOY7QP28qOlkAwhM6miZttuE9tXcDWCeE4HCEudFT1Y&X-Amz-Signature=0705abfc10ce66563aa604aae3106587fe3bd6407d51eeff4a928c58125ced7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQSPLCX%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDAQnCtn%2FobjEOHvxM4seMPVle4KyufW%2FlKJKccsEtXFQIgL0V6YvGJn4XhGb%2BUwGIx1RyWF%2FdCSDtxf1SWkqx53Mwq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDEDdOWiVaVsVYtIv1ircA%2FH%2Bg6%2B%2FTf2uSLWc63SekBwyWo%2B51vCmNqpAaSBJN8yr6gVGeJMJjjT5NIIbBDJ7KmMDOtIivpTQWrFYh9Ylq2v1pYj%2B%2FkKdlZTw4MeTOp%2FNAWzoKus%2FXRXmPVLFoZj%2F4n2wBMU69DaXESoGD5602i5ecUPQ%2FgLbOBEpjEUYEt7cezSTnU7OzlH3gizD8ryKw8N28Hdf%2FtqcpuoXL1EsVo0024uOGYroHXZGjckej11jUPoMn6TLnwDL5i9oQq1X64d%2BYlisOccu4JkoPaejpq3RiQWo6S%2BqU7hPZ%2BlY4xwVdqrtCIWPC2UK%2BBATyc5ttIqMwwhDIVMEtw99SGig%2Bww23a7ikJLweicTXxRVBZmjEtCrUl7Ddi%2F0EZj8V7MkwDTLCSk769PpX3tb8UsIvfso8SkyAvic8YsGoXMB5%2FgiDNHgBISZ%2BzON1ZOBJIqT3AZRY7pjfSW9yoVNEKXy1aAQ8OyEDWcueS4afYh7DNMGEWVO05ld7WlfLjmC86UvV3ItNu2EdO%2B6SrjIGWmRp7%2BTjyytuLZkUnM0kIf4n5CrGdC9dFuNl3meM1F0VmtYZneZpXh1B60M6%2BYjXpgPKJAE4V77SxFQ8E%2Bnn2VzoTuUzXGyxSHRd6R%2FkIZZML%2BeqMoGOqUBjElEV7uosBwmQ861ivvDl8hfus73JJJGTNtDmNSk4CtdA%2F8TPmfLTycQIRsILD7Nk4Gr92L6cjLq2YBlvfD3phh07u%2B2YCpfm2nt9GbxdslG%2BD4de9%2F3HkWp9e1UgALmbBN%2Fkfvk7HXxaYuMpVmXIzOFodPeeVPq9FoW0rJlWLv8jhp81ptLRbde67%2B2apbBsCHPB0c%2FaKUOx%2FWkz5g4KbDyHBF%2F&X-Amz-Signature=129533b7b058123b4e2c8f5494610dc8d0d627ba8ea0e72af618684f90e945f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQSPLCX%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDAQnCtn%2FobjEOHvxM4seMPVle4KyufW%2FlKJKccsEtXFQIgL0V6YvGJn4XhGb%2BUwGIx1RyWF%2FdCSDtxf1SWkqx53Mwq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDEDdOWiVaVsVYtIv1ircA%2FH%2Bg6%2B%2FTf2uSLWc63SekBwyWo%2B51vCmNqpAaSBJN8yr6gVGeJMJjjT5NIIbBDJ7KmMDOtIivpTQWrFYh9Ylq2v1pYj%2B%2FkKdlZTw4MeTOp%2FNAWzoKus%2FXRXmPVLFoZj%2F4n2wBMU69DaXESoGD5602i5ecUPQ%2FgLbOBEpjEUYEt7cezSTnU7OzlH3gizD8ryKw8N28Hdf%2FtqcpuoXL1EsVo0024uOGYroHXZGjckej11jUPoMn6TLnwDL5i9oQq1X64d%2BYlisOccu4JkoPaejpq3RiQWo6S%2BqU7hPZ%2BlY4xwVdqrtCIWPC2UK%2BBATyc5ttIqMwwhDIVMEtw99SGig%2Bww23a7ikJLweicTXxRVBZmjEtCrUl7Ddi%2F0EZj8V7MkwDTLCSk769PpX3tb8UsIvfso8SkyAvic8YsGoXMB5%2FgiDNHgBISZ%2BzON1ZOBJIqT3AZRY7pjfSW9yoVNEKXy1aAQ8OyEDWcueS4afYh7DNMGEWVO05ld7WlfLjmC86UvV3ItNu2EdO%2B6SrjIGWmRp7%2BTjyytuLZkUnM0kIf4n5CrGdC9dFuNl3meM1F0VmtYZneZpXh1B60M6%2BYjXpgPKJAE4V77SxFQ8E%2Bnn2VzoTuUzXGyxSHRd6R%2FkIZZML%2BeqMoGOqUBjElEV7uosBwmQ861ivvDl8hfus73JJJGTNtDmNSk4CtdA%2F8TPmfLTycQIRsILD7Nk4Gr92L6cjLq2YBlvfD3phh07u%2B2YCpfm2nt9GbxdslG%2BD4de9%2F3HkWp9e1UgALmbBN%2Fkfvk7HXxaYuMpVmXIzOFodPeeVPq9FoW0rJlWLv8jhp81ptLRbde67%2B2apbBsCHPB0c%2FaKUOx%2FWkz5g4KbDyHBF%2F&X-Amz-Signature=73c09364216d938d23a9fbc2d8868aba96e4db5e50e137b6633e0e5f3c5c5142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQSPLCX%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDAQnCtn%2FobjEOHvxM4seMPVle4KyufW%2FlKJKccsEtXFQIgL0V6YvGJn4XhGb%2BUwGIx1RyWF%2FdCSDtxf1SWkqx53Mwq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDEDdOWiVaVsVYtIv1ircA%2FH%2Bg6%2B%2FTf2uSLWc63SekBwyWo%2B51vCmNqpAaSBJN8yr6gVGeJMJjjT5NIIbBDJ7KmMDOtIivpTQWrFYh9Ylq2v1pYj%2B%2FkKdlZTw4MeTOp%2FNAWzoKus%2FXRXmPVLFoZj%2F4n2wBMU69DaXESoGD5602i5ecUPQ%2FgLbOBEpjEUYEt7cezSTnU7OzlH3gizD8ryKw8N28Hdf%2FtqcpuoXL1EsVo0024uOGYroHXZGjckej11jUPoMn6TLnwDL5i9oQq1X64d%2BYlisOccu4JkoPaejpq3RiQWo6S%2BqU7hPZ%2BlY4xwVdqrtCIWPC2UK%2BBATyc5ttIqMwwhDIVMEtw99SGig%2Bww23a7ikJLweicTXxRVBZmjEtCrUl7Ddi%2F0EZj8V7MkwDTLCSk769PpX3tb8UsIvfso8SkyAvic8YsGoXMB5%2FgiDNHgBISZ%2BzON1ZOBJIqT3AZRY7pjfSW9yoVNEKXy1aAQ8OyEDWcueS4afYh7DNMGEWVO05ld7WlfLjmC86UvV3ItNu2EdO%2B6SrjIGWmRp7%2BTjyytuLZkUnM0kIf4n5CrGdC9dFuNl3meM1F0VmtYZneZpXh1B60M6%2BYjXpgPKJAE4V77SxFQ8E%2Bnn2VzoTuUzXGyxSHRd6R%2FkIZZML%2BeqMoGOqUBjElEV7uosBwmQ861ivvDl8hfus73JJJGTNtDmNSk4CtdA%2F8TPmfLTycQIRsILD7Nk4Gr92L6cjLq2YBlvfD3phh07u%2B2YCpfm2nt9GbxdslG%2BD4de9%2F3HkWp9e1UgALmbBN%2Fkfvk7HXxaYuMpVmXIzOFodPeeVPq9FoW0rJlWLv8jhp81ptLRbde67%2B2apbBsCHPB0c%2FaKUOx%2FWkz5g4KbDyHBF%2F&X-Amz-Signature=22beadbe8016e7959544d6eb6c517b233493440dbb04b4b5fc87a3c893f9fb54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQSPLCX%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDAQnCtn%2FobjEOHvxM4seMPVle4KyufW%2FlKJKccsEtXFQIgL0V6YvGJn4XhGb%2BUwGIx1RyWF%2FdCSDtxf1SWkqx53Mwq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDEDdOWiVaVsVYtIv1ircA%2FH%2Bg6%2B%2FTf2uSLWc63SekBwyWo%2B51vCmNqpAaSBJN8yr6gVGeJMJjjT5NIIbBDJ7KmMDOtIivpTQWrFYh9Ylq2v1pYj%2B%2FkKdlZTw4MeTOp%2FNAWzoKus%2FXRXmPVLFoZj%2F4n2wBMU69DaXESoGD5602i5ecUPQ%2FgLbOBEpjEUYEt7cezSTnU7OzlH3gizD8ryKw8N28Hdf%2FtqcpuoXL1EsVo0024uOGYroHXZGjckej11jUPoMn6TLnwDL5i9oQq1X64d%2BYlisOccu4JkoPaejpq3RiQWo6S%2BqU7hPZ%2BlY4xwVdqrtCIWPC2UK%2BBATyc5ttIqMwwhDIVMEtw99SGig%2Bww23a7ikJLweicTXxRVBZmjEtCrUl7Ddi%2F0EZj8V7MkwDTLCSk769PpX3tb8UsIvfso8SkyAvic8YsGoXMB5%2FgiDNHgBISZ%2BzON1ZOBJIqT3AZRY7pjfSW9yoVNEKXy1aAQ8OyEDWcueS4afYh7DNMGEWVO05ld7WlfLjmC86UvV3ItNu2EdO%2B6SrjIGWmRp7%2BTjyytuLZkUnM0kIf4n5CrGdC9dFuNl3meM1F0VmtYZneZpXh1B60M6%2BYjXpgPKJAE4V77SxFQ8E%2Bnn2VzoTuUzXGyxSHRd6R%2FkIZZML%2BeqMoGOqUBjElEV7uosBwmQ861ivvDl8hfus73JJJGTNtDmNSk4CtdA%2F8TPmfLTycQIRsILD7Nk4Gr92L6cjLq2YBlvfD3phh07u%2B2YCpfm2nt9GbxdslG%2BD4de9%2F3HkWp9e1UgALmbBN%2Fkfvk7HXxaYuMpVmXIzOFodPeeVPq9FoW0rJlWLv8jhp81ptLRbde67%2B2apbBsCHPB0c%2FaKUOx%2FWkz5g4KbDyHBF%2F&X-Amz-Signature=dfe85b3bd10e8b4aea8a28d2bf0739154774e7594ef32bb7eb1c548df6ad6cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQSPLCX%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDAQnCtn%2FobjEOHvxM4seMPVle4KyufW%2FlKJKccsEtXFQIgL0V6YvGJn4XhGb%2BUwGIx1RyWF%2FdCSDtxf1SWkqx53Mwq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDEDdOWiVaVsVYtIv1ircA%2FH%2Bg6%2B%2FTf2uSLWc63SekBwyWo%2B51vCmNqpAaSBJN8yr6gVGeJMJjjT5NIIbBDJ7KmMDOtIivpTQWrFYh9Ylq2v1pYj%2B%2FkKdlZTw4MeTOp%2FNAWzoKus%2FXRXmPVLFoZj%2F4n2wBMU69DaXESoGD5602i5ecUPQ%2FgLbOBEpjEUYEt7cezSTnU7OzlH3gizD8ryKw8N28Hdf%2FtqcpuoXL1EsVo0024uOGYroHXZGjckej11jUPoMn6TLnwDL5i9oQq1X64d%2BYlisOccu4JkoPaejpq3RiQWo6S%2BqU7hPZ%2BlY4xwVdqrtCIWPC2UK%2BBATyc5ttIqMwwhDIVMEtw99SGig%2Bww23a7ikJLweicTXxRVBZmjEtCrUl7Ddi%2F0EZj8V7MkwDTLCSk769PpX3tb8UsIvfso8SkyAvic8YsGoXMB5%2FgiDNHgBISZ%2BzON1ZOBJIqT3AZRY7pjfSW9yoVNEKXy1aAQ8OyEDWcueS4afYh7DNMGEWVO05ld7WlfLjmC86UvV3ItNu2EdO%2B6SrjIGWmRp7%2BTjyytuLZkUnM0kIf4n5CrGdC9dFuNl3meM1F0VmtYZneZpXh1B60M6%2BYjXpgPKJAE4V77SxFQ8E%2Bnn2VzoTuUzXGyxSHRd6R%2FkIZZML%2BeqMoGOqUBjElEV7uosBwmQ861ivvDl8hfus73JJJGTNtDmNSk4CtdA%2F8TPmfLTycQIRsILD7Nk4Gr92L6cjLq2YBlvfD3phh07u%2B2YCpfm2nt9GbxdslG%2BD4de9%2F3HkWp9e1UgALmbBN%2Fkfvk7HXxaYuMpVmXIzOFodPeeVPq9FoW0rJlWLv8jhp81ptLRbde67%2B2apbBsCHPB0c%2FaKUOx%2FWkz5g4KbDyHBF%2F&X-Amz-Signature=73759c4451ed40dd6d8a50a53725936258647985988b14b6143597387525a0cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGPYRKGI%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T040710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCPxuDSdHBp%2F6vmloQD98Bj1KJvWHHR7tYKwbV632Vi1AIgbKiLmciV%2FE20honNbje2hj8xLxnYy4ZLEzAipz%2BRt3wq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDK6Ul61fFHWSD7kYRCrcA5m9rv8XTAJ%2BP4qDbHzwodzY56piEGhVaLxiozoVxztly7LBevQ7fCsHNIYgZYpPmcB4Cu5RxelVN692Y2QDq7YUUkM6%2BrQChWDIo50E5M5CEaOVX%2BOcsJHNuB%2F7FNt12v6oig%2BsonethgKB%2BGokDF%2FNHTbe53kqhBDTPlY9697bH9X8RHYrqoU2WNds9TB9fQj9mPEPeiuiigAqPvZrbItG%2B%2FdHxk6MBi2S88%2FGH%2FALiyZrTfn2fs9z7UAuQxRSxoXFgqrXcBglADB%2BvXg5At0q9%2BJxQTmO6eOHGSXJPHH7WelT3a9ohwuKpTBUukxE%2FwqhADWteMDtn69rTeSH9Fp6azjnfT9eb7IWjwjpC5fL7ZUHagoAI7NPSXEwK7QfHqELbMKYR9T5jDvmDU%2BYDagAWjEcW6miIif1zjuzThDFrkybCNvynSSDwnoX89pUBZzpgWtX9OehHH%2F%2BD4FiVb0Frzeg%2FGix4VrQJ%2FeqBzfJPnb%2BWRFT%2FCoyvxo2I34NQXVnv7HIG9zqK8MaB9wOADSe3Sn%2F9qc7EhmbqAM2n4xjFvk8zFqJ8NQ6%2F39HTEbGpKfkugB%2FICSG1a%2BCk%2FP8rWJSOAMoVAetK4JfB3gMib7Kwk6KzGcd3WMA2CMjMKqeqMoGOqUB%2F4L2JEVKA%2BZ7KOWaI%2B4SQvumT5D%2B3v8i4dxp%2BK20LR22VaV9A5gctfK3Jqv6IpCIzrFLthrrZRbDr8ithPnEZ3%2F19v5Aw8V5eJLk1LE8rGgVLNRt2bFGraTL7iTh5jXYqI59nKq9UaTSMPwHysZrHV9EvO8JEnjQwnzmrCHJni9akgjYyEWzSzhFGxruk3fBGCNco5zhH6FbD5kQlm%2F9BLs7lXZ5&X-Amz-Signature=b56b79fe01873cebdca0a2ea0f5b43da0dbb1ce5e0537fe4149502dec78e93cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

