
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2HBEEH3%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7Sr1FGrIPAEuoYs3bo5um2WvdPI4vRjBeu4sLB7AXHAIhAK4e33x0GrMXemBDwIk4YVigDIyybniz3ISdql%2BbvB4TKv8DCGEQABoMNjM3NDIzMTgzODA1IgzIaezyR7DNIhbHp%2BEq3ANI6ALTkiE3YoO7ZCOEDEZfCfOGy67J9AHxW01wwQrHQPLkmJRfk2NFwYy0L9BIFSRld%2FZClbxF%2Fd8%2FmwTP9mYiTHBs4Pumt7pIQAnzFK06nBF4%2Fo2eGuDpC8hY7mVfbYWnTMdtfejWh5hGcOTu1YXj8Jb6X6p1o7BFNtat%2Bu%2FcYeOOxqUJDJnB9zPo4n9wQEV11A%2BDzhbl9btd7Nv%2BJ3Vg7Df94CvgbqHRjPklzgQ9NgwY1lx4Gu7ScOpLgQLD4Knc%2FCZ8LnWWrOiUa%2F9w1UpifYfe57aeTU%2BzxgPMWI4NjByf8nUVJnDx6dYrXEPyom8g3wJCdXio6DWfwYYqkGq%2FqCAZ%2B%2BH%2F6cxW3twm69iS3Hr2HmPdvuXbujwzjaW0TDRlvhpq3sHpmlwMnfYFrE8sSxWiSPvR3x5PIvC0RHvuCRdyM6VqntLz%2BN2LwyDLunedezdta0gxBJbLYErmtV3e%2Bvktqm14xiSicH3dzeLsdU0vllQPizGJhLa2PcJimn7BLBBU4KxPrVXuVMonMxnUad3mOrwHbq9Clj30Qdxl3f%2Bns2jDRhihTJ10lzhRzHQLqRF2BY5CWKdoTZ1lggCO7OAioqliZXcj8Ku3fTrrHn7IGzMqbufQi7rEejCMy7zKBjqkAY1EePtiL4rth0SoVkYYDvFAnDwja7gqKiG%2Fy1G5xXg6sps1m5W3W%2FoGHRCDTIzATOEN4g2mT3Yq8EJtNF3eiP51I2aCBBc045UBX9PS4TpVgcSR4MGiYFpHqP%2FBcd8nfT%2BcRBCJiPECpVxY8RA1TEovDeY24gUjhJDLjx5DRzSyzCqIXQaIhpu357MufTrIsIvC%2BMhFUjZyEm8DJGAt5EwDrGsY&X-Amz-Signature=0db61c164106fff2218955136a9943ce225a71125296c100eb6861f330a28edc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VCB66XR%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpYoyJojgcXuzoQ4uvna8S8Mm8WEGQbJjETTI3UySegIhAJlZO5m7yPKszH%2FmM7GWXN%2FZsa%2FloUoe3IqnObht9nikKv8DCGIQABoMNjM3NDIzMTgzODA1IgxAWFDh6aw41VeP8rwq3ANkyRTZRTm%2FA0GsgHuyyouTMmkQNboocHPEvR0Y0OrhojBHtdFf%2BIN6MxcQ0Ff2FLYHdwApOaXgJ%2Bgo9QQTuLwAE%2BjLXU88u7q2ElnR9UV1Kt9wS8y99fvtZH9hBvbBqLhnguWML6E%2FwEssTRf5JWP0A6WR%2FxqUOKDCIncDzCte7xdBifKhfXHI7bX9z6%2Bk8pQcKx%2B9%2BbG9vDVk4Z%2FexqLwQ1hqZv9E13QRAeyZ%2BsWyKJsQNQeZksrn6Pw%2BOyZ04YmIL3lZs2hnmV5KXOBwvujP7he0roinM9lnd%2Fav%2FB8oudgMFkKQn1mRpO2Gmcm9Wq7PTcigrKewcL2s8zBIEwGnx%2FKzMnHzHVau61Mj2mj8NySdWAXfHxGd70MNS7XKPIbNXpyraek3mjsFnz1u0tzQML%2FMUKWq3crkNNpULx1fb%2Fd%2B4g3siSKm0gdSKSrgybUhKUTUx1ACpAxsA1I1uwz0FCdYoe0ySGK9wD%2B1BPA5CS1ZsIYWxWo9sGX0aWMBPeJdEJebpAhtfYJ92GCNKGhoUEW8nIFHQ229NzJ8QJ%2Fv50QXJXrR1E7Ac31Dk3Fo8UZHG%2B8Nd4T0DLUT8qCpv6f68n2tL%2BM02I9CMlmMWQk3rMBA0fFbf6xceWaF6jDh1LzKBjqkASPAzWWIMh1FaFdDFGx126CkV9pc%2BBUR8P36iInEhlFZtLmheXulZH%2Fg8uW2rc8Ie3PdqiZ5j%2BLq4eVcMhc5rXgSU1TlqPzqf4XbfXUVUN5AsEpPSrlN7gBoXaLV%2BpY9Ylewd0aG0iWwyF2WKMwj2RBvfKJ2R0by3nrvIxrb4rhaahG92rd7FljNR27pDwrGec5veRS65SCFACBrVS%2F56KVnT9pL&X-Amz-Signature=6a2387f9643140968480dbf8e299ef12faf049c43b0e6a7782f2312b3345f278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VCB66XR%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpYoyJojgcXuzoQ4uvna8S8Mm8WEGQbJjETTI3UySegIhAJlZO5m7yPKszH%2FmM7GWXN%2FZsa%2FloUoe3IqnObht9nikKv8DCGIQABoMNjM3NDIzMTgzODA1IgxAWFDh6aw41VeP8rwq3ANkyRTZRTm%2FA0GsgHuyyouTMmkQNboocHPEvR0Y0OrhojBHtdFf%2BIN6MxcQ0Ff2FLYHdwApOaXgJ%2Bgo9QQTuLwAE%2BjLXU88u7q2ElnR9UV1Kt9wS8y99fvtZH9hBvbBqLhnguWML6E%2FwEssTRf5JWP0A6WR%2FxqUOKDCIncDzCte7xdBifKhfXHI7bX9z6%2Bk8pQcKx%2B9%2BbG9vDVk4Z%2FexqLwQ1hqZv9E13QRAeyZ%2BsWyKJsQNQeZksrn6Pw%2BOyZ04YmIL3lZs2hnmV5KXOBwvujP7he0roinM9lnd%2Fav%2FB8oudgMFkKQn1mRpO2Gmcm9Wq7PTcigrKewcL2s8zBIEwGnx%2FKzMnHzHVau61Mj2mj8NySdWAXfHxGd70MNS7XKPIbNXpyraek3mjsFnz1u0tzQML%2FMUKWq3crkNNpULx1fb%2Fd%2B4g3siSKm0gdSKSrgybUhKUTUx1ACpAxsA1I1uwz0FCdYoe0ySGK9wD%2B1BPA5CS1ZsIYWxWo9sGX0aWMBPeJdEJebpAhtfYJ92GCNKGhoUEW8nIFHQ229NzJ8QJ%2Fv50QXJXrR1E7Ac31Dk3Fo8UZHG%2B8Nd4T0DLUT8qCpv6f68n2tL%2BM02I9CMlmMWQk3rMBA0fFbf6xceWaF6jDh1LzKBjqkASPAzWWIMh1FaFdDFGx126CkV9pc%2BBUR8P36iInEhlFZtLmheXulZH%2Fg8uW2rc8Ie3PdqiZ5j%2BLq4eVcMhc5rXgSU1TlqPzqf4XbfXUVUN5AsEpPSrlN7gBoXaLV%2BpY9Ylewd0aG0iWwyF2WKMwj2RBvfKJ2R0by3nrvIxrb4rhaahG92rd7FljNR27pDwrGec5veRS65SCFACBrVS%2F56KVnT9pL&X-Amz-Signature=f4fc04bee98f84af6c83908a8ce5bb933644b09577ba12989b6f702f2fb91fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZF6DJZ6%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx5i%2F6hQgnYfprrsEOFA5GEdIPHptjRNBKdurYEtBrMAiBcHV3lyljgOKbhzCwxWE%2BRJcDFkER7eldZkZW5nGBLZyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMRDQkuJhQW3ZqG78TKtwDWb7WbvNEp65boftSHSPqBNz4y0J9YkhUBV1ozbrHA%2FE8p%2F0QXwnYikjBMEVZSOF6XncYhhCiUv1Hwr1T2SNNu5Om%2FGRUuVa1%2Fr%2F4M%2Bcyr%2FHWlGCt2CDdn6vFewZaQZSYzcZCqraNswK514dhm6N8kExa69N1BEwJHPKsBJHsi5kaE376P9VxPKHWqyQyaz7uotmgJ4gvoTspCnNhQvlaFcGdJmcIFAcIJ1tF3AbNK8TSme2ULLpD7xDBKsRIfiOfqzqgyRQZ2zYlq1ZlpTCm8iYouDhfH3lqRGi3x%2B%2BfDqvxhG2%2BnJewKtGBhUMPAdSeDnpuZTiUcUr2sDgZw28nofjdpeCx3zolER2zAfpsW5snO8P5IBpHhJT45S7E8vNtryBYnFT7U3Euq%2BGSjEn67mF%2Fffg2SISfi6IOAn3hCHzE0zLxPMVs6melZ6zz1CzdpO5yxb%2Fo5v9ife48TSRc2XO4b5hxMa1470vtgHOw8tI%2BnR05RVZoV5jkMQ%2FlAd2GiOZwAsJg9hLDirDIiT04XgbBlzMTJ%2BLlb5CyOd2SOkpN1kTaeh3EhpCCY3RMa8lIo%2FfZQNGTGpXr2JAV25Vp5rGlJ94N5MRywO9Rx%2BU46XTQFeD%2FPUk1Va5qVAww9ta8ygY6pgEJ2NvNen%2F0G7kWRde4lhBQBVl68ycsImdBGTR%2FAShzxkOo%2F2iY0%2B4Hthi%2BP39lsDvAwR5RggOON63Tt%2BuDJk9OJa6Wq7oq4Yh2bDuzXnRmM6NjZhAiCv6L5%2BaSKDJOx4bPqeKZhro8BRDM0zXPA7bcHi%2FRo14cB5Gqjh6yYqaS41jgjffr%2Fc2Ju8eXJk%2BUY3rMg4XQ6LXgxgn58hQfCNktxnF1ZQdO&X-Amz-Signature=383baf5e3bfe168facc5a63a0e1367ef299863faceaad1899649f855231bf0ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZF6DJZ6%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx5i%2F6hQgnYfprrsEOFA5GEdIPHptjRNBKdurYEtBrMAiBcHV3lyljgOKbhzCwxWE%2BRJcDFkER7eldZkZW5nGBLZyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMRDQkuJhQW3ZqG78TKtwDWb7WbvNEp65boftSHSPqBNz4y0J9YkhUBV1ozbrHA%2FE8p%2F0QXwnYikjBMEVZSOF6XncYhhCiUv1Hwr1T2SNNu5Om%2FGRUuVa1%2Fr%2F4M%2Bcyr%2FHWlGCt2CDdn6vFewZaQZSYzcZCqraNswK514dhm6N8kExa69N1BEwJHPKsBJHsi5kaE376P9VxPKHWqyQyaz7uotmgJ4gvoTspCnNhQvlaFcGdJmcIFAcIJ1tF3AbNK8TSme2ULLpD7xDBKsRIfiOfqzqgyRQZ2zYlq1ZlpTCm8iYouDhfH3lqRGi3x%2B%2BfDqvxhG2%2BnJewKtGBhUMPAdSeDnpuZTiUcUr2sDgZw28nofjdpeCx3zolER2zAfpsW5snO8P5IBpHhJT45S7E8vNtryBYnFT7U3Euq%2BGSjEn67mF%2Fffg2SISfi6IOAn3hCHzE0zLxPMVs6melZ6zz1CzdpO5yxb%2Fo5v9ife48TSRc2XO4b5hxMa1470vtgHOw8tI%2BnR05RVZoV5jkMQ%2FlAd2GiOZwAsJg9hLDirDIiT04XgbBlzMTJ%2BLlb5CyOd2SOkpN1kTaeh3EhpCCY3RMa8lIo%2FfZQNGTGpXr2JAV25Vp5rGlJ94N5MRywO9Rx%2BU46XTQFeD%2FPUk1Va5qVAww9ta8ygY6pgEJ2NvNen%2F0G7kWRde4lhBQBVl68ycsImdBGTR%2FAShzxkOo%2F2iY0%2B4Hthi%2BP39lsDvAwR5RggOON63Tt%2BuDJk9OJa6Wq7oq4Yh2bDuzXnRmM6NjZhAiCv6L5%2BaSKDJOx4bPqeKZhro8BRDM0zXPA7bcHi%2FRo14cB5Gqjh6yYqaS41jgjffr%2Fc2Ju8eXJk%2BUY3rMg4XQ6LXgxgn58hQfCNktxnF1ZQdO&X-Amz-Signature=ec9ea89825eb83991e5739867915700596afc45cf561996efddd03a5e897ac84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZF6DJZ6%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx5i%2F6hQgnYfprrsEOFA5GEdIPHptjRNBKdurYEtBrMAiBcHV3lyljgOKbhzCwxWE%2BRJcDFkER7eldZkZW5nGBLZyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMRDQkuJhQW3ZqG78TKtwDWb7WbvNEp65boftSHSPqBNz4y0J9YkhUBV1ozbrHA%2FE8p%2F0QXwnYikjBMEVZSOF6XncYhhCiUv1Hwr1T2SNNu5Om%2FGRUuVa1%2Fr%2F4M%2Bcyr%2FHWlGCt2CDdn6vFewZaQZSYzcZCqraNswK514dhm6N8kExa69N1BEwJHPKsBJHsi5kaE376P9VxPKHWqyQyaz7uotmgJ4gvoTspCnNhQvlaFcGdJmcIFAcIJ1tF3AbNK8TSme2ULLpD7xDBKsRIfiOfqzqgyRQZ2zYlq1ZlpTCm8iYouDhfH3lqRGi3x%2B%2BfDqvxhG2%2BnJewKtGBhUMPAdSeDnpuZTiUcUr2sDgZw28nofjdpeCx3zolER2zAfpsW5snO8P5IBpHhJT45S7E8vNtryBYnFT7U3Euq%2BGSjEn67mF%2Fffg2SISfi6IOAn3hCHzE0zLxPMVs6melZ6zz1CzdpO5yxb%2Fo5v9ife48TSRc2XO4b5hxMa1470vtgHOw8tI%2BnR05RVZoV5jkMQ%2FlAd2GiOZwAsJg9hLDirDIiT04XgbBlzMTJ%2BLlb5CyOd2SOkpN1kTaeh3EhpCCY3RMa8lIo%2FfZQNGTGpXr2JAV25Vp5rGlJ94N5MRywO9Rx%2BU46XTQFeD%2FPUk1Va5qVAww9ta8ygY6pgEJ2NvNen%2F0G7kWRde4lhBQBVl68ycsImdBGTR%2FAShzxkOo%2F2iY0%2B4Hthi%2BP39lsDvAwR5RggOON63Tt%2BuDJk9OJa6Wq7oq4Yh2bDuzXnRmM6NjZhAiCv6L5%2BaSKDJOx4bPqeKZhro8BRDM0zXPA7bcHi%2FRo14cB5Gqjh6yYqaS41jgjffr%2Fc2Ju8eXJk%2BUY3rMg4XQ6LXgxgn58hQfCNktxnF1ZQdO&X-Amz-Signature=371f5a9f12ade96d80794065e44dbb15d199d0a0ffa355a6595fff7a54ebcfd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZF6DJZ6%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx5i%2F6hQgnYfprrsEOFA5GEdIPHptjRNBKdurYEtBrMAiBcHV3lyljgOKbhzCwxWE%2BRJcDFkER7eldZkZW5nGBLZyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMRDQkuJhQW3ZqG78TKtwDWb7WbvNEp65boftSHSPqBNz4y0J9YkhUBV1ozbrHA%2FE8p%2F0QXwnYikjBMEVZSOF6XncYhhCiUv1Hwr1T2SNNu5Om%2FGRUuVa1%2Fr%2F4M%2Bcyr%2FHWlGCt2CDdn6vFewZaQZSYzcZCqraNswK514dhm6N8kExa69N1BEwJHPKsBJHsi5kaE376P9VxPKHWqyQyaz7uotmgJ4gvoTspCnNhQvlaFcGdJmcIFAcIJ1tF3AbNK8TSme2ULLpD7xDBKsRIfiOfqzqgyRQZ2zYlq1ZlpTCm8iYouDhfH3lqRGi3x%2B%2BfDqvxhG2%2BnJewKtGBhUMPAdSeDnpuZTiUcUr2sDgZw28nofjdpeCx3zolER2zAfpsW5snO8P5IBpHhJT45S7E8vNtryBYnFT7U3Euq%2BGSjEn67mF%2Fffg2SISfi6IOAn3hCHzE0zLxPMVs6melZ6zz1CzdpO5yxb%2Fo5v9ife48TSRc2XO4b5hxMa1470vtgHOw8tI%2BnR05RVZoV5jkMQ%2FlAd2GiOZwAsJg9hLDirDIiT04XgbBlzMTJ%2BLlb5CyOd2SOkpN1kTaeh3EhpCCY3RMa8lIo%2FfZQNGTGpXr2JAV25Vp5rGlJ94N5MRywO9Rx%2BU46XTQFeD%2FPUk1Va5qVAww9ta8ygY6pgEJ2NvNen%2F0G7kWRde4lhBQBVl68ycsImdBGTR%2FAShzxkOo%2F2iY0%2B4Hthi%2BP39lsDvAwR5RggOON63Tt%2BuDJk9OJa6Wq7oq4Yh2bDuzXnRmM6NjZhAiCv6L5%2BaSKDJOx4bPqeKZhro8BRDM0zXPA7bcHi%2FRo14cB5Gqjh6yYqaS41jgjffr%2Fc2Ju8eXJk%2BUY3rMg4XQ6LXgxgn58hQfCNktxnF1ZQdO&X-Amz-Signature=395a5d9816d3465e5dac08f1401ed0d8e4b279fadfbcbe89c08a9e5d4bceee5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZF6DJZ6%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx5i%2F6hQgnYfprrsEOFA5GEdIPHptjRNBKdurYEtBrMAiBcHV3lyljgOKbhzCwxWE%2BRJcDFkER7eldZkZW5nGBLZyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMRDQkuJhQW3ZqG78TKtwDWb7WbvNEp65boftSHSPqBNz4y0J9YkhUBV1ozbrHA%2FE8p%2F0QXwnYikjBMEVZSOF6XncYhhCiUv1Hwr1T2SNNu5Om%2FGRUuVa1%2Fr%2F4M%2Bcyr%2FHWlGCt2CDdn6vFewZaQZSYzcZCqraNswK514dhm6N8kExa69N1BEwJHPKsBJHsi5kaE376P9VxPKHWqyQyaz7uotmgJ4gvoTspCnNhQvlaFcGdJmcIFAcIJ1tF3AbNK8TSme2ULLpD7xDBKsRIfiOfqzqgyRQZ2zYlq1ZlpTCm8iYouDhfH3lqRGi3x%2B%2BfDqvxhG2%2BnJewKtGBhUMPAdSeDnpuZTiUcUr2sDgZw28nofjdpeCx3zolER2zAfpsW5snO8P5IBpHhJT45S7E8vNtryBYnFT7U3Euq%2BGSjEn67mF%2Fffg2SISfi6IOAn3hCHzE0zLxPMVs6melZ6zz1CzdpO5yxb%2Fo5v9ife48TSRc2XO4b5hxMa1470vtgHOw8tI%2BnR05RVZoV5jkMQ%2FlAd2GiOZwAsJg9hLDirDIiT04XgbBlzMTJ%2BLlb5CyOd2SOkpN1kTaeh3EhpCCY3RMa8lIo%2FfZQNGTGpXr2JAV25Vp5rGlJ94N5MRywO9Rx%2BU46XTQFeD%2FPUk1Va5qVAww9ta8ygY6pgEJ2NvNen%2F0G7kWRde4lhBQBVl68ycsImdBGTR%2FAShzxkOo%2F2iY0%2B4Hthi%2BP39lsDvAwR5RggOON63Tt%2BuDJk9OJa6Wq7oq4Yh2bDuzXnRmM6NjZhAiCv6L5%2BaSKDJOx4bPqeKZhro8BRDM0zXPA7bcHi%2FRo14cB5Gqjh6yYqaS41jgjffr%2Fc2Ju8eXJk%2BUY3rMg4XQ6LXgxgn58hQfCNktxnF1ZQdO&X-Amz-Signature=71a35509596c1175ddaa37d97b18861f5e9f0bfc10b495483c9f9247922d8683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZF6DJZ6%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx5i%2F6hQgnYfprrsEOFA5GEdIPHptjRNBKdurYEtBrMAiBcHV3lyljgOKbhzCwxWE%2BRJcDFkER7eldZkZW5nGBLZyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMRDQkuJhQW3ZqG78TKtwDWb7WbvNEp65boftSHSPqBNz4y0J9YkhUBV1ozbrHA%2FE8p%2F0QXwnYikjBMEVZSOF6XncYhhCiUv1Hwr1T2SNNu5Om%2FGRUuVa1%2Fr%2F4M%2Bcyr%2FHWlGCt2CDdn6vFewZaQZSYzcZCqraNswK514dhm6N8kExa69N1BEwJHPKsBJHsi5kaE376P9VxPKHWqyQyaz7uotmgJ4gvoTspCnNhQvlaFcGdJmcIFAcIJ1tF3AbNK8TSme2ULLpD7xDBKsRIfiOfqzqgyRQZ2zYlq1ZlpTCm8iYouDhfH3lqRGi3x%2B%2BfDqvxhG2%2BnJewKtGBhUMPAdSeDnpuZTiUcUr2sDgZw28nofjdpeCx3zolER2zAfpsW5snO8P5IBpHhJT45S7E8vNtryBYnFT7U3Euq%2BGSjEn67mF%2Fffg2SISfi6IOAn3hCHzE0zLxPMVs6melZ6zz1CzdpO5yxb%2Fo5v9ife48TSRc2XO4b5hxMa1470vtgHOw8tI%2BnR05RVZoV5jkMQ%2FlAd2GiOZwAsJg9hLDirDIiT04XgbBlzMTJ%2BLlb5CyOd2SOkpN1kTaeh3EhpCCY3RMa8lIo%2FfZQNGTGpXr2JAV25Vp5rGlJ94N5MRywO9Rx%2BU46XTQFeD%2FPUk1Va5qVAww9ta8ygY6pgEJ2NvNen%2F0G7kWRde4lhBQBVl68ycsImdBGTR%2FAShzxkOo%2F2iY0%2B4Hthi%2BP39lsDvAwR5RggOON63Tt%2BuDJk9OJa6Wq7oq4Yh2bDuzXnRmM6NjZhAiCv6L5%2BaSKDJOx4bPqeKZhro8BRDM0zXPA7bcHi%2FRo14cB5Gqjh6yYqaS41jgjffr%2Fc2Ju8eXJk%2BUY3rMg4XQ6LXgxgn58hQfCNktxnF1ZQdO&X-Amz-Signature=532ab0055ff71e14f1c9e98705fa2cd3469783905966a9e18ae589b09622d0fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZF6DJZ6%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx5i%2F6hQgnYfprrsEOFA5GEdIPHptjRNBKdurYEtBrMAiBcHV3lyljgOKbhzCwxWE%2BRJcDFkER7eldZkZW5nGBLZyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMRDQkuJhQW3ZqG78TKtwDWb7WbvNEp65boftSHSPqBNz4y0J9YkhUBV1ozbrHA%2FE8p%2F0QXwnYikjBMEVZSOF6XncYhhCiUv1Hwr1T2SNNu5Om%2FGRUuVa1%2Fr%2F4M%2Bcyr%2FHWlGCt2CDdn6vFewZaQZSYzcZCqraNswK514dhm6N8kExa69N1BEwJHPKsBJHsi5kaE376P9VxPKHWqyQyaz7uotmgJ4gvoTspCnNhQvlaFcGdJmcIFAcIJ1tF3AbNK8TSme2ULLpD7xDBKsRIfiOfqzqgyRQZ2zYlq1ZlpTCm8iYouDhfH3lqRGi3x%2B%2BfDqvxhG2%2BnJewKtGBhUMPAdSeDnpuZTiUcUr2sDgZw28nofjdpeCx3zolER2zAfpsW5snO8P5IBpHhJT45S7E8vNtryBYnFT7U3Euq%2BGSjEn67mF%2Fffg2SISfi6IOAn3hCHzE0zLxPMVs6melZ6zz1CzdpO5yxb%2Fo5v9ife48TSRc2XO4b5hxMa1470vtgHOw8tI%2BnR05RVZoV5jkMQ%2FlAd2GiOZwAsJg9hLDirDIiT04XgbBlzMTJ%2BLlb5CyOd2SOkpN1kTaeh3EhpCCY3RMa8lIo%2FfZQNGTGpXr2JAV25Vp5rGlJ94N5MRywO9Rx%2BU46XTQFeD%2FPUk1Va5qVAww9ta8ygY6pgEJ2NvNen%2F0G7kWRde4lhBQBVl68ycsImdBGTR%2FAShzxkOo%2F2iY0%2B4Hthi%2BP39lsDvAwR5RggOON63Tt%2BuDJk9OJa6Wq7oq4Yh2bDuzXnRmM6NjZhAiCv6L5%2BaSKDJOx4bPqeKZhro8BRDM0zXPA7bcHi%2FRo14cB5Gqjh6yYqaS41jgjffr%2Fc2Ju8eXJk%2BUY3rMg4XQ6LXgxgn58hQfCNktxnF1ZQdO&X-Amz-Signature=648cce7a5b2468593606ecb9a40320c793a21e3f3558d9b6bfeaf40780b26b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3GNKBOD%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKd53gyjg8cRi84wMdoY2Sby06as6XtlauQy7ttao2cAiB8sfjcKD9r%2Bg9H%2B7cQxewzgcTc4OpB5yUc1hIO6oct9Sr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMNAxoL2CI21jwjvQGKtwDK9Vye6uO1vEScT7xRDOQ6yEpnucOKOESubtFZItrz0TCSqU8XqLydTHG0IybXAyXvEbsZ1aMWSIWEKQYTtSOqqCt%2BbkiNprN%2FbaPnBbJJe19OPeZs9ZNNRU%2BPFLu%2BdWCXIZFFH1tyI3MZfMR4qIc%2BLiIF1O%2FqDwgJYqalzJ%2FWP8iosJ40irpfxjlLX3sHVYskp%2FElmCIgILHuLOKnWzl3cAKR9WySWvq3LnMOpcdH6nAtV3OQQ2%2FnqwjY7cAsDXwU%2FzX3Jqu5iud1bai5cw5VBIFLmyNo8xebZnZH%2B4y5ck5AvCUtKHJEmVrmYSi8PGDGPPNql9EY1U%2BzlRiLVndYWc0nFMe5Q084Z4KQMGrljTkknx%2Fh9kvhhdOiubcD7GFA4OaC91RYQKmeDS66rHjHjCOBjtps2vxATsGLz4rAfaQU%2F1COvKz9KUu9Y%2BEwwwRwRT71RbRiymr5Qa48JwdLW3om7BUReDG%2FlNOL8QFL2wZR87QclNB9F7LfyKzKwW6yy%2FGH9oFEMw8YBCKsYtxcvAKi9fts1tJ8SRbYr5VaLbFc3BeVQ7zSrxb1XH7B0GdgUi%2Fh7doTgDLV0WZYsO7oOvTweOvuSaaH2c%2FnubLjpwFOHBbnCodvfIpzZMwotW8ygY6pgEH8%2Bp7c5Cu5arQBEtoQjypRK07JdT%2FXew%2Br27T5z%2FwV1wgbObQW5HXXvVH4KfKPgtbgPG4BcLuKqtnuHP5kpbhK02jnKE%2B2MzoXUA%2F2TZMuj72HbeQ73%2Fw%2FA%2FTb9fjycqsYnTnxwkN14MVOF8GQIVH8qkJyYbFNOjjJZejOQ14QtJdo1rmGr0kKSJ83m0VATvp%2B%2FzjHGsbRrghuhDMO6u2rPCWrE2k&X-Amz-Signature=396f57daf93becbefe06891ad24c91814ffd9d83ab6529b67453f8b830425586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3GNKBOD%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKd53gyjg8cRi84wMdoY2Sby06as6XtlauQy7ttao2cAiB8sfjcKD9r%2Bg9H%2B7cQxewzgcTc4OpB5yUc1hIO6oct9Sr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMNAxoL2CI21jwjvQGKtwDK9Vye6uO1vEScT7xRDOQ6yEpnucOKOESubtFZItrz0TCSqU8XqLydTHG0IybXAyXvEbsZ1aMWSIWEKQYTtSOqqCt%2BbkiNprN%2FbaPnBbJJe19OPeZs9ZNNRU%2BPFLu%2BdWCXIZFFH1tyI3MZfMR4qIc%2BLiIF1O%2FqDwgJYqalzJ%2FWP8iosJ40irpfxjlLX3sHVYskp%2FElmCIgILHuLOKnWzl3cAKR9WySWvq3LnMOpcdH6nAtV3OQQ2%2FnqwjY7cAsDXwU%2FzX3Jqu5iud1bai5cw5VBIFLmyNo8xebZnZH%2B4y5ck5AvCUtKHJEmVrmYSi8PGDGPPNql9EY1U%2BzlRiLVndYWc0nFMe5Q084Z4KQMGrljTkknx%2Fh9kvhhdOiubcD7GFA4OaC91RYQKmeDS66rHjHjCOBjtps2vxATsGLz4rAfaQU%2F1COvKz9KUu9Y%2BEwwwRwRT71RbRiymr5Qa48JwdLW3om7BUReDG%2FlNOL8QFL2wZR87QclNB9F7LfyKzKwW6yy%2FGH9oFEMw8YBCKsYtxcvAKi9fts1tJ8SRbYr5VaLbFc3BeVQ7zSrxb1XH7B0GdgUi%2Fh7doTgDLV0WZYsO7oOvTweOvuSaaH2c%2FnubLjpwFOHBbnCodvfIpzZMwotW8ygY6pgEH8%2Bp7c5Cu5arQBEtoQjypRK07JdT%2FXew%2Br27T5z%2FwV1wgbObQW5HXXvVH4KfKPgtbgPG4BcLuKqtnuHP5kpbhK02jnKE%2B2MzoXUA%2F2TZMuj72HbeQ73%2Fw%2FA%2FTb9fjycqsYnTnxwkN14MVOF8GQIVH8qkJyYbFNOjjJZejOQ14QtJdo1rmGr0kKSJ83m0VATvp%2B%2FzjHGsbRrghuhDMO6u2rPCWrE2k&X-Amz-Signature=b77fe37c1caf8c01f50269042da1f767388cca01595083b9777f52254174fdd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3GNKBOD%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKd53gyjg8cRi84wMdoY2Sby06as6XtlauQy7ttao2cAiB8sfjcKD9r%2Bg9H%2B7cQxewzgcTc4OpB5yUc1hIO6oct9Sr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMNAxoL2CI21jwjvQGKtwDK9Vye6uO1vEScT7xRDOQ6yEpnucOKOESubtFZItrz0TCSqU8XqLydTHG0IybXAyXvEbsZ1aMWSIWEKQYTtSOqqCt%2BbkiNprN%2FbaPnBbJJe19OPeZs9ZNNRU%2BPFLu%2BdWCXIZFFH1tyI3MZfMR4qIc%2BLiIF1O%2FqDwgJYqalzJ%2FWP8iosJ40irpfxjlLX3sHVYskp%2FElmCIgILHuLOKnWzl3cAKR9WySWvq3LnMOpcdH6nAtV3OQQ2%2FnqwjY7cAsDXwU%2FzX3Jqu5iud1bai5cw5VBIFLmyNo8xebZnZH%2B4y5ck5AvCUtKHJEmVrmYSi8PGDGPPNql9EY1U%2BzlRiLVndYWc0nFMe5Q084Z4KQMGrljTkknx%2Fh9kvhhdOiubcD7GFA4OaC91RYQKmeDS66rHjHjCOBjtps2vxATsGLz4rAfaQU%2F1COvKz9KUu9Y%2BEwwwRwRT71RbRiymr5Qa48JwdLW3om7BUReDG%2FlNOL8QFL2wZR87QclNB9F7LfyKzKwW6yy%2FGH9oFEMw8YBCKsYtxcvAKi9fts1tJ8SRbYr5VaLbFc3BeVQ7zSrxb1XH7B0GdgUi%2Fh7doTgDLV0WZYsO7oOvTweOvuSaaH2c%2FnubLjpwFOHBbnCodvfIpzZMwotW8ygY6pgEH8%2Bp7c5Cu5arQBEtoQjypRK07JdT%2FXew%2Br27T5z%2FwV1wgbObQW5HXXvVH4KfKPgtbgPG4BcLuKqtnuHP5kpbhK02jnKE%2B2MzoXUA%2F2TZMuj72HbeQ73%2Fw%2FA%2FTb9fjycqsYnTnxwkN14MVOF8GQIVH8qkJyYbFNOjjJZejOQ14QtJdo1rmGr0kKSJ83m0VATvp%2B%2FzjHGsbRrghuhDMO6u2rPCWrE2k&X-Amz-Signature=05176b9ee2f1d604ae2d79f2742b4e573f68a6bacec5db7361afed5705a760bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3GNKBOD%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKd53gyjg8cRi84wMdoY2Sby06as6XtlauQy7ttao2cAiB8sfjcKD9r%2Bg9H%2B7cQxewzgcTc4OpB5yUc1hIO6oct9Sr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMNAxoL2CI21jwjvQGKtwDK9Vye6uO1vEScT7xRDOQ6yEpnucOKOESubtFZItrz0TCSqU8XqLydTHG0IybXAyXvEbsZ1aMWSIWEKQYTtSOqqCt%2BbkiNprN%2FbaPnBbJJe19OPeZs9ZNNRU%2BPFLu%2BdWCXIZFFH1tyI3MZfMR4qIc%2BLiIF1O%2FqDwgJYqalzJ%2FWP8iosJ40irpfxjlLX3sHVYskp%2FElmCIgILHuLOKnWzl3cAKR9WySWvq3LnMOpcdH6nAtV3OQQ2%2FnqwjY7cAsDXwU%2FzX3Jqu5iud1bai5cw5VBIFLmyNo8xebZnZH%2B4y5ck5AvCUtKHJEmVrmYSi8PGDGPPNql9EY1U%2BzlRiLVndYWc0nFMe5Q084Z4KQMGrljTkknx%2Fh9kvhhdOiubcD7GFA4OaC91RYQKmeDS66rHjHjCOBjtps2vxATsGLz4rAfaQU%2F1COvKz9KUu9Y%2BEwwwRwRT71RbRiymr5Qa48JwdLW3om7BUReDG%2FlNOL8QFL2wZR87QclNB9F7LfyKzKwW6yy%2FGH9oFEMw8YBCKsYtxcvAKi9fts1tJ8SRbYr5VaLbFc3BeVQ7zSrxb1XH7B0GdgUi%2Fh7doTgDLV0WZYsO7oOvTweOvuSaaH2c%2FnubLjpwFOHBbnCodvfIpzZMwotW8ygY6pgEH8%2Bp7c5Cu5arQBEtoQjypRK07JdT%2FXew%2Br27T5z%2FwV1wgbObQW5HXXvVH4KfKPgtbgPG4BcLuKqtnuHP5kpbhK02jnKE%2B2MzoXUA%2F2TZMuj72HbeQ73%2Fw%2FA%2FTb9fjycqsYnTnxwkN14MVOF8GQIVH8qkJyYbFNOjjJZejOQ14QtJdo1rmGr0kKSJ83m0VATvp%2B%2FzjHGsbRrghuhDMO6u2rPCWrE2k&X-Amz-Signature=6cfad7cf17712e26c44402fcea4ac18a921a23c2f42fd96a9bdffa9a8a237a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3GNKBOD%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKd53gyjg8cRi84wMdoY2Sby06as6XtlauQy7ttao2cAiB8sfjcKD9r%2Bg9H%2B7cQxewzgcTc4OpB5yUc1hIO6oct9Sr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMNAxoL2CI21jwjvQGKtwDK9Vye6uO1vEScT7xRDOQ6yEpnucOKOESubtFZItrz0TCSqU8XqLydTHG0IybXAyXvEbsZ1aMWSIWEKQYTtSOqqCt%2BbkiNprN%2FbaPnBbJJe19OPeZs9ZNNRU%2BPFLu%2BdWCXIZFFH1tyI3MZfMR4qIc%2BLiIF1O%2FqDwgJYqalzJ%2FWP8iosJ40irpfxjlLX3sHVYskp%2FElmCIgILHuLOKnWzl3cAKR9WySWvq3LnMOpcdH6nAtV3OQQ2%2FnqwjY7cAsDXwU%2FzX3Jqu5iud1bai5cw5VBIFLmyNo8xebZnZH%2B4y5ck5AvCUtKHJEmVrmYSi8PGDGPPNql9EY1U%2BzlRiLVndYWc0nFMe5Q084Z4KQMGrljTkknx%2Fh9kvhhdOiubcD7GFA4OaC91RYQKmeDS66rHjHjCOBjtps2vxATsGLz4rAfaQU%2F1COvKz9KUu9Y%2BEwwwRwRT71RbRiymr5Qa48JwdLW3om7BUReDG%2FlNOL8QFL2wZR87QclNB9F7LfyKzKwW6yy%2FGH9oFEMw8YBCKsYtxcvAKi9fts1tJ8SRbYr5VaLbFc3BeVQ7zSrxb1XH7B0GdgUi%2Fh7doTgDLV0WZYsO7oOvTweOvuSaaH2c%2FnubLjpwFOHBbnCodvfIpzZMwotW8ygY6pgEH8%2Bp7c5Cu5arQBEtoQjypRK07JdT%2FXew%2Br27T5z%2FwV1wgbObQW5HXXvVH4KfKPgtbgPG4BcLuKqtnuHP5kpbhK02jnKE%2B2MzoXUA%2F2TZMuj72HbeQ73%2Fw%2FA%2FTb9fjycqsYnTnxwkN14MVOF8GQIVH8qkJyYbFNOjjJZejOQ14QtJdo1rmGr0kKSJ83m0VATvp%2B%2FzjHGsbRrghuhDMO6u2rPCWrE2k&X-Amz-Signature=ebb270acca5d174a4779ed94fcdfbf2b1916be62b8a4eecc0202b6ef4f063d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXKHXDO%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwPD%2BOe6B%2FGrdLVcloGOQF2j8BLMWiivNyZXLRuRM8TAiEA6m8sXRSqMCadzuvbGhm71wTJAlKw1PYwki2w1Xt7KMYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBgEt3jsylmQnte7FSrcA0zH48%2BKy%2BrxMZ7rPKJ65sotHx5IYmkugR%2F%2BlxwGpU2OrSnYZn1BoKANBlnm1%2FQkuRgl3uoiuSb2NdvT%2Fd0gQ6mu58%2BEbZxOYLjJWEdv2Y02Rh8iuQc%2FViXXoN%2FUjfB8ubF5eb9wMpiuJQHWzNtXCKBf6hOxsjkTfSIFesc5HsYzp0Lqs%2B8%2BRveFKM5ZMtdbB4UBodG%2F95ZIdTh5oyQ1daiu47K%2BoIjKl2Js7BxkFcfaWSdh14aLkh6pKiWCXMIIHvGShgPF%2FE4x%2BNmJVwFC59MLmQxtQHpLL6E8zma736OmJMfr%2BigEGPNqkN%2BWegmGrDr90KLi1gXoeyH2LkZNQklSTm77LSKGtZBRlLU8NxTvPbR0OlKzdv4Cd1FdawVtXXrLan%2F2EaNdr820g31o22xMlSSEJCbZloYOwiVWjzHDuye6SlxjrC5OlIhJ1Iza39ACFkznoRrSRqi8asCQkcWzJLsZW%2F5UiN%2F7D59pkQAf3fKRJzzufQLGIvpPYBkkdG%2FhIi1M1UbuAYufDj4thFPCsPi5%2FhbT0bRWv1r8Z%2FS3EuMaCF7%2FkyZg%2F47%2Fdeci0oQEQaQaBL%2Fe4Mcd%2B8shwzocbrCJo2dWbBZhxCagxqOTfMyLZ36i1z%2FnAxPCMKfSvMoGOqUBBsCdhDAJnLnPrT0PtHiTwqE6P8argpjgYRuWS6brFt8BPNM3baBao43dEaFeMX18eY4JOIi8gUxic77kPycEMkqTNB5pEG%2FwP6ygc3CFCkz1tfdWgcuU1Egg6e4ROapTKfcmOYd7P6uyhaKiI5P90jlmdhfgxflkP%2FpKTcGMZzXN7OkirPus0ekv0PVstFYvuXVjbzKhiuKpCoLGoXQrf%2FugEtHn&X-Amz-Signature=d6a13abde7b202d41203769eceea803f21100692397e246f23b403be120bf3bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXKHXDO%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwPD%2BOe6B%2FGrdLVcloGOQF2j8BLMWiivNyZXLRuRM8TAiEA6m8sXRSqMCadzuvbGhm71wTJAlKw1PYwki2w1Xt7KMYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBgEt3jsylmQnte7FSrcA0zH48%2BKy%2BrxMZ7rPKJ65sotHx5IYmkugR%2F%2BlxwGpU2OrSnYZn1BoKANBlnm1%2FQkuRgl3uoiuSb2NdvT%2Fd0gQ6mu58%2BEbZxOYLjJWEdv2Y02Rh8iuQc%2FViXXoN%2FUjfB8ubF5eb9wMpiuJQHWzNtXCKBf6hOxsjkTfSIFesc5HsYzp0Lqs%2B8%2BRveFKM5ZMtdbB4UBodG%2F95ZIdTh5oyQ1daiu47K%2BoIjKl2Js7BxkFcfaWSdh14aLkh6pKiWCXMIIHvGShgPF%2FE4x%2BNmJVwFC59MLmQxtQHpLL6E8zma736OmJMfr%2BigEGPNqkN%2BWegmGrDr90KLi1gXoeyH2LkZNQklSTm77LSKGtZBRlLU8NxTvPbR0OlKzdv4Cd1FdawVtXXrLan%2F2EaNdr820g31o22xMlSSEJCbZloYOwiVWjzHDuye6SlxjrC5OlIhJ1Iza39ACFkznoRrSRqi8asCQkcWzJLsZW%2F5UiN%2F7D59pkQAf3fKRJzzufQLGIvpPYBkkdG%2FhIi1M1UbuAYufDj4thFPCsPi5%2FhbT0bRWv1r8Z%2FS3EuMaCF7%2FkyZg%2F47%2Fdeci0oQEQaQaBL%2Fe4Mcd%2B8shwzocbrCJo2dWbBZhxCagxqOTfMyLZ36i1z%2FnAxPCMKfSvMoGOqUBBsCdhDAJnLnPrT0PtHiTwqE6P8argpjgYRuWS6brFt8BPNM3baBao43dEaFeMX18eY4JOIi8gUxic77kPycEMkqTNB5pEG%2FwP6ygc3CFCkz1tfdWgcuU1Egg6e4ROapTKfcmOYd7P6uyhaKiI5P90jlmdhfgxflkP%2FpKTcGMZzXN7OkirPus0ekv0PVstFYvuXVjbzKhiuKpCoLGoXQrf%2FugEtHn&X-Amz-Signature=907c43e0e5f81e411a1d415ce040089c6c09c4429e36b66079782f9453188f66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXKHXDO%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwPD%2BOe6B%2FGrdLVcloGOQF2j8BLMWiivNyZXLRuRM8TAiEA6m8sXRSqMCadzuvbGhm71wTJAlKw1PYwki2w1Xt7KMYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBgEt3jsylmQnte7FSrcA0zH48%2BKy%2BrxMZ7rPKJ65sotHx5IYmkugR%2F%2BlxwGpU2OrSnYZn1BoKANBlnm1%2FQkuRgl3uoiuSb2NdvT%2Fd0gQ6mu58%2BEbZxOYLjJWEdv2Y02Rh8iuQc%2FViXXoN%2FUjfB8ubF5eb9wMpiuJQHWzNtXCKBf6hOxsjkTfSIFesc5HsYzp0Lqs%2B8%2BRveFKM5ZMtdbB4UBodG%2F95ZIdTh5oyQ1daiu47K%2BoIjKl2Js7BxkFcfaWSdh14aLkh6pKiWCXMIIHvGShgPF%2FE4x%2BNmJVwFC59MLmQxtQHpLL6E8zma736OmJMfr%2BigEGPNqkN%2BWegmGrDr90KLi1gXoeyH2LkZNQklSTm77LSKGtZBRlLU8NxTvPbR0OlKzdv4Cd1FdawVtXXrLan%2F2EaNdr820g31o22xMlSSEJCbZloYOwiVWjzHDuye6SlxjrC5OlIhJ1Iza39ACFkznoRrSRqi8asCQkcWzJLsZW%2F5UiN%2F7D59pkQAf3fKRJzzufQLGIvpPYBkkdG%2FhIi1M1UbuAYufDj4thFPCsPi5%2FhbT0bRWv1r8Z%2FS3EuMaCF7%2FkyZg%2F47%2Fdeci0oQEQaQaBL%2Fe4Mcd%2B8shwzocbrCJo2dWbBZhxCagxqOTfMyLZ36i1z%2FnAxPCMKfSvMoGOqUBBsCdhDAJnLnPrT0PtHiTwqE6P8argpjgYRuWS6brFt8BPNM3baBao43dEaFeMX18eY4JOIi8gUxic77kPycEMkqTNB5pEG%2FwP6ygc3CFCkz1tfdWgcuU1Egg6e4ROapTKfcmOYd7P6uyhaKiI5P90jlmdhfgxflkP%2FpKTcGMZzXN7OkirPus0ekv0PVstFYvuXVjbzKhiuKpCoLGoXQrf%2FugEtHn&X-Amz-Signature=c69949fab4e395b152bd69b550e0d30bc6459b8addc2293e853a5cebc1d30abe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPYWE6YR%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBXXiqdSca42GepRDN0QCNu95sxL9CW3OtNc0hp6tEPAiEAntzaYheHdvYohSgKm%2Bdu2z7%2FjRQT3jnpx9AGAwssACMq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAFRPLPq6PQ09mfvNSrcA3mYMIyTgj38UpbI0oecGfTSEZeVAez8DILUPAUTvksaAyi7tip1rc1jVZIbuwL3bYvAt4ZjZFQXJedYDlBrmb%2FBUTqXymu4D%2BOvxjcw%2FoK5p0E%2BNjxUq01mMn1oSll%2FP9kVmvgcEdbRVY5iRhf07oEFUjsUqwkv1%2BltrMIHnAQahw9tybmbqBiNSv6upTFJ%2BPNAJzsXmZhfikgFy0MXfIpJxqeH2FFDxdV%2BZmcTCd0572Et%2F0ps2%2Fcnh%2Fc5wagDJ2J6u27Xfqd92lTv3pxBYmfuk36dbim3zekl2KDmoZ05rmmNiJEkseSSPqySpHHd48gGvk1iQs7mChr7meW3WB%2Fd0na8XnVGvL6K6SCwJPJg9kdiTa%2BVBlgG%2BD8lj9QeEZK1Y1dMMMHvlq2QUCOKbd%2FrQb9zSoIVAG1Xv9LHd%2B5u0TrNSOAyyJ%2F%2BaNcQ%2FurAuTiHk4leQiSRqJB4ptYpSV4veuQFr3TmjwxRUqa%2FX%2B2iNromwYsfe6HifSHNTCzdUNQME6i7sB6mBG0I%2BXqoy83fwIx%2BxVSFbtvon0R4ApaxbGQROHFOUUKq59UJLa86U52%2B6km4wXi7ZK7Zv6%2FyOmrH%2BEYUBy3XkVsmvFTE6Zz%2Bq0%2BfqzzNVG3uM4BrMIjZvMoGOqUBmUO0nYI5quhyoZu%2FuMQg3iTyHZiqKTwU2rPq7Af1cpB8pCwn1INq3RPdPLAid0ASsJ9JG4hlB7CUcDoyyNGrWzFgeDmg5vFl02i3XQTI%2Bam8gMP%2FTKXz1gzZtJ5mN8a5wp%2BgoCicwyiZw%2BdKR80g3MO0fDAo0MtIeiHzwTTav90HXQCcNi%2FSvMjVaghIYw2SHJI8WbmaG7u0YZM4nCCBjInN0mmu&X-Amz-Signature=81c7e99b5ebe4530c3b1930f421d526fd508e44628fcfbc96f3ea4c4d04838cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPYWE6YR%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBXXiqdSca42GepRDN0QCNu95sxL9CW3OtNc0hp6tEPAiEAntzaYheHdvYohSgKm%2Bdu2z7%2FjRQT3jnpx9AGAwssACMq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAFRPLPq6PQ09mfvNSrcA3mYMIyTgj38UpbI0oecGfTSEZeVAez8DILUPAUTvksaAyi7tip1rc1jVZIbuwL3bYvAt4ZjZFQXJedYDlBrmb%2FBUTqXymu4D%2BOvxjcw%2FoK5p0E%2BNjxUq01mMn1oSll%2FP9kVmvgcEdbRVY5iRhf07oEFUjsUqwkv1%2BltrMIHnAQahw9tybmbqBiNSv6upTFJ%2BPNAJzsXmZhfikgFy0MXfIpJxqeH2FFDxdV%2BZmcTCd0572Et%2F0ps2%2Fcnh%2Fc5wagDJ2J6u27Xfqd92lTv3pxBYmfuk36dbim3zekl2KDmoZ05rmmNiJEkseSSPqySpHHd48gGvk1iQs7mChr7meW3WB%2Fd0na8XnVGvL6K6SCwJPJg9kdiTa%2BVBlgG%2BD8lj9QeEZK1Y1dMMMHvlq2QUCOKbd%2FrQb9zSoIVAG1Xv9LHd%2B5u0TrNSOAyyJ%2F%2BaNcQ%2FurAuTiHk4leQiSRqJB4ptYpSV4veuQFr3TmjwxRUqa%2FX%2B2iNromwYsfe6HifSHNTCzdUNQME6i7sB6mBG0I%2BXqoy83fwIx%2BxVSFbtvon0R4ApaxbGQROHFOUUKq59UJLa86U52%2B6km4wXi7ZK7Zv6%2FyOmrH%2BEYUBy3XkVsmvFTE6Zz%2Bq0%2BfqzzNVG3uM4BrMIjZvMoGOqUBmUO0nYI5quhyoZu%2FuMQg3iTyHZiqKTwU2rPq7Af1cpB8pCwn1INq3RPdPLAid0ASsJ9JG4hlB7CUcDoyyNGrWzFgeDmg5vFl02i3XQTI%2Bam8gMP%2FTKXz1gzZtJ5mN8a5wp%2BgoCicwyiZw%2BdKR80g3MO0fDAo0MtIeiHzwTTav90HXQCcNi%2FSvMjVaghIYw2SHJI8WbmaG7u0YZM4nCCBjInN0mmu&X-Amz-Signature=e290c36ca0ecdb5c066e3d6c53a8f5d55b9000519d308fd578332479f280c953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYOF2ML%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvikVF2EqOY25oCJ4ThVURI4beEhbo%2B7ixBnNEKh%2F%2BrAiB%2BDRFAaKUM61F5%2Fud1zWaMar5o%2FdL24a78xqgBU9UsZir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMsjs6QaEToIOFmmXmKtwDgEwVQV6cDRv1LvBeVTxNY2G3i3OHQQFZlEBiU0cuOH%2BRLOSpawyzURWR3VBo01nacc765DYVLnno6GaVo25jb0g94nmH5fTkSik%2BCG9cClmd1OsG4wTpthbO8Y72fASDVYmAMEd20Hw1w46ivstp3Uj09jdJuHKPFvu2GfDLKbT2pvv4KiIMBh0SA2ugn5tbuv9K%2FMa1M9CF%2FNiJ5r9bKgYcGDpUK8sefPrV0PfMTCIivuMKdCrJ9a0ibxD%2F4uQJ%2FYOSJcQ8c49xpwQfB6uF43WL3TyAenWaNnQ1s5tsA1NMv%2FN%2F6dV%2BRyllyiSRVq8PAgw4ieQfBYcTOO565o72oMGNeu1Kg0O%2BNFdokh3bmiWF5gaIeieIKT2K1DbBeZRGv2SRoLsaxcVtEFHeDx6ffxCyOgl%2F1ZdH%2FB7g67gIrQ7u6ZyF5DjDT4ZmqK84pbi5d6HN6Y79jU9ZNX0YHG9jSSJfNW5tmil3A9HMgn4Pjko28NaKH%2Fd13c5MIMA75r7hSVF59%2FWP%2BGoW2Axhu4JwdS472qE5x0pdKojemlLA0xhnatQkLBS3kx%2FEsFWX34yoBGSIu7vPeE6cd94YA7tU0fX%2FR%2FOodHpKi1nYLdSCNmJt6MyLMmstWqgN8DMwoNK8ygY6pgFcHFTgW%2Ba%2BPh5xyZiovzUrT1yMr43yDtO6gXPCzDzmbq1BJYSQuYYKi70cOAtwy%2FFvKbbt%2FUehER2enNsVw5%2Fjb7ibkRODF9%2FTaUj1NHTdHH%2FXfkNvsr1XBmx%2FPEZaB9pDT45EWCYmN19YsP4b3SNJFRKHyDlQ7ggnkenUGod9qEd4Zu9aJs03hAcmGRN7c65OeH9PBB23t%2FfGa5tbUE2GXghJfjUK&X-Amz-Signature=4d526b7b905da89e0a72b370bd9195c087689b7dc0e2c73d60f01087c12b6dd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYOF2ML%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvikVF2EqOY25oCJ4ThVURI4beEhbo%2B7ixBnNEKh%2F%2BrAiB%2BDRFAaKUM61F5%2Fud1zWaMar5o%2FdL24a78xqgBU9UsZir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMsjs6QaEToIOFmmXmKtwDgEwVQV6cDRv1LvBeVTxNY2G3i3OHQQFZlEBiU0cuOH%2BRLOSpawyzURWR3VBo01nacc765DYVLnno6GaVo25jb0g94nmH5fTkSik%2BCG9cClmd1OsG4wTpthbO8Y72fASDVYmAMEd20Hw1w46ivstp3Uj09jdJuHKPFvu2GfDLKbT2pvv4KiIMBh0SA2ugn5tbuv9K%2FMa1M9CF%2FNiJ5r9bKgYcGDpUK8sefPrV0PfMTCIivuMKdCrJ9a0ibxD%2F4uQJ%2FYOSJcQ8c49xpwQfB6uF43WL3TyAenWaNnQ1s5tsA1NMv%2FN%2F6dV%2BRyllyiSRVq8PAgw4ieQfBYcTOO565o72oMGNeu1Kg0O%2BNFdokh3bmiWF5gaIeieIKT2K1DbBeZRGv2SRoLsaxcVtEFHeDx6ffxCyOgl%2F1ZdH%2FB7g67gIrQ7u6ZyF5DjDT4ZmqK84pbi5d6HN6Y79jU9ZNX0YHG9jSSJfNW5tmil3A9HMgn4Pjko28NaKH%2Fd13c5MIMA75r7hSVF59%2FWP%2BGoW2Axhu4JwdS472qE5x0pdKojemlLA0xhnatQkLBS3kx%2FEsFWX34yoBGSIu7vPeE6cd94YA7tU0fX%2FR%2FOodHpKi1nYLdSCNmJt6MyLMmstWqgN8DMwoNK8ygY6pgFcHFTgW%2Ba%2BPh5xyZiovzUrT1yMr43yDtO6gXPCzDzmbq1BJYSQuYYKi70cOAtwy%2FFvKbbt%2FUehER2enNsVw5%2Fjb7ibkRODF9%2FTaUj1NHTdHH%2FXfkNvsr1XBmx%2FPEZaB9pDT45EWCYmN19YsP4b3SNJFRKHyDlQ7ggnkenUGod9qEd4Zu9aJs03hAcmGRN7c65OeH9PBB23t%2FfGa5tbUE2GXghJfjUK&X-Amz-Signature=c576ddcf81abd8adcfd91cdb71d6480ffbbcfb795b0498ad2de1f100e3f5ac58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYOF2ML%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvikVF2EqOY25oCJ4ThVURI4beEhbo%2B7ixBnNEKh%2F%2BrAiB%2BDRFAaKUM61F5%2Fud1zWaMar5o%2FdL24a78xqgBU9UsZir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMsjs6QaEToIOFmmXmKtwDgEwVQV6cDRv1LvBeVTxNY2G3i3OHQQFZlEBiU0cuOH%2BRLOSpawyzURWR3VBo01nacc765DYVLnno6GaVo25jb0g94nmH5fTkSik%2BCG9cClmd1OsG4wTpthbO8Y72fASDVYmAMEd20Hw1w46ivstp3Uj09jdJuHKPFvu2GfDLKbT2pvv4KiIMBh0SA2ugn5tbuv9K%2FMa1M9CF%2FNiJ5r9bKgYcGDpUK8sefPrV0PfMTCIivuMKdCrJ9a0ibxD%2F4uQJ%2FYOSJcQ8c49xpwQfB6uF43WL3TyAenWaNnQ1s5tsA1NMv%2FN%2F6dV%2BRyllyiSRVq8PAgw4ieQfBYcTOO565o72oMGNeu1Kg0O%2BNFdokh3bmiWF5gaIeieIKT2K1DbBeZRGv2SRoLsaxcVtEFHeDx6ffxCyOgl%2F1ZdH%2FB7g67gIrQ7u6ZyF5DjDT4ZmqK84pbi5d6HN6Y79jU9ZNX0YHG9jSSJfNW5tmil3A9HMgn4Pjko28NaKH%2Fd13c5MIMA75r7hSVF59%2FWP%2BGoW2Axhu4JwdS472qE5x0pdKojemlLA0xhnatQkLBS3kx%2FEsFWX34yoBGSIu7vPeE6cd94YA7tU0fX%2FR%2FOodHpKi1nYLdSCNmJt6MyLMmstWqgN8DMwoNK8ygY6pgFcHFTgW%2Ba%2BPh5xyZiovzUrT1yMr43yDtO6gXPCzDzmbq1BJYSQuYYKi70cOAtwy%2FFvKbbt%2FUehER2enNsVw5%2Fjb7ibkRODF9%2FTaUj1NHTdHH%2FXfkNvsr1XBmx%2FPEZaB9pDT45EWCYmN19YsP4b3SNJFRKHyDlQ7ggnkenUGod9qEd4Zu9aJs03hAcmGRN7c65OeH9PBB23t%2FfGa5tbUE2GXghJfjUK&X-Amz-Signature=16ddcef43d87c0151ace0ca812ede346f7facadde0e6a35440b08275c68cf5be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYOF2ML%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvikVF2EqOY25oCJ4ThVURI4beEhbo%2B7ixBnNEKh%2F%2BrAiB%2BDRFAaKUM61F5%2Fud1zWaMar5o%2FdL24a78xqgBU9UsZir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMsjs6QaEToIOFmmXmKtwDgEwVQV6cDRv1LvBeVTxNY2G3i3OHQQFZlEBiU0cuOH%2BRLOSpawyzURWR3VBo01nacc765DYVLnno6GaVo25jb0g94nmH5fTkSik%2BCG9cClmd1OsG4wTpthbO8Y72fASDVYmAMEd20Hw1w46ivstp3Uj09jdJuHKPFvu2GfDLKbT2pvv4KiIMBh0SA2ugn5tbuv9K%2FMa1M9CF%2FNiJ5r9bKgYcGDpUK8sefPrV0PfMTCIivuMKdCrJ9a0ibxD%2F4uQJ%2FYOSJcQ8c49xpwQfB6uF43WL3TyAenWaNnQ1s5tsA1NMv%2FN%2F6dV%2BRyllyiSRVq8PAgw4ieQfBYcTOO565o72oMGNeu1Kg0O%2BNFdokh3bmiWF5gaIeieIKT2K1DbBeZRGv2SRoLsaxcVtEFHeDx6ffxCyOgl%2F1ZdH%2FB7g67gIrQ7u6ZyF5DjDT4ZmqK84pbi5d6HN6Y79jU9ZNX0YHG9jSSJfNW5tmil3A9HMgn4Pjko28NaKH%2Fd13c5MIMA75r7hSVF59%2FWP%2BGoW2Axhu4JwdS472qE5x0pdKojemlLA0xhnatQkLBS3kx%2FEsFWX34yoBGSIu7vPeE6cd94YA7tU0fX%2FR%2FOodHpKi1nYLdSCNmJt6MyLMmstWqgN8DMwoNK8ygY6pgFcHFTgW%2Ba%2BPh5xyZiovzUrT1yMr43yDtO6gXPCzDzmbq1BJYSQuYYKi70cOAtwy%2FFvKbbt%2FUehER2enNsVw5%2Fjb7ibkRODF9%2FTaUj1NHTdHH%2FXfkNvsr1XBmx%2FPEZaB9pDT45EWCYmN19YsP4b3SNJFRKHyDlQ7ggnkenUGod9qEd4Zu9aJs03hAcmGRN7c65OeH9PBB23t%2FfGa5tbUE2GXghJfjUK&X-Amz-Signature=7e922c3136a78068a0211738d4729acf627d144fef65a2afa3c3802bbea9a012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYOF2ML%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvikVF2EqOY25oCJ4ThVURI4beEhbo%2B7ixBnNEKh%2F%2BrAiB%2BDRFAaKUM61F5%2Fud1zWaMar5o%2FdL24a78xqgBU9UsZir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMsjs6QaEToIOFmmXmKtwDgEwVQV6cDRv1LvBeVTxNY2G3i3OHQQFZlEBiU0cuOH%2BRLOSpawyzURWR3VBo01nacc765DYVLnno6GaVo25jb0g94nmH5fTkSik%2BCG9cClmd1OsG4wTpthbO8Y72fASDVYmAMEd20Hw1w46ivstp3Uj09jdJuHKPFvu2GfDLKbT2pvv4KiIMBh0SA2ugn5tbuv9K%2FMa1M9CF%2FNiJ5r9bKgYcGDpUK8sefPrV0PfMTCIivuMKdCrJ9a0ibxD%2F4uQJ%2FYOSJcQ8c49xpwQfB6uF43WL3TyAenWaNnQ1s5tsA1NMv%2FN%2F6dV%2BRyllyiSRVq8PAgw4ieQfBYcTOO565o72oMGNeu1Kg0O%2BNFdokh3bmiWF5gaIeieIKT2K1DbBeZRGv2SRoLsaxcVtEFHeDx6ffxCyOgl%2F1ZdH%2FB7g67gIrQ7u6ZyF5DjDT4ZmqK84pbi5d6HN6Y79jU9ZNX0YHG9jSSJfNW5tmil3A9HMgn4Pjko28NaKH%2Fd13c5MIMA75r7hSVF59%2FWP%2BGoW2Axhu4JwdS472qE5x0pdKojemlLA0xhnatQkLBS3kx%2FEsFWX34yoBGSIu7vPeE6cd94YA7tU0fX%2FR%2FOodHpKi1nYLdSCNmJt6MyLMmstWqgN8DMwoNK8ygY6pgFcHFTgW%2Ba%2BPh5xyZiovzUrT1yMr43yDtO6gXPCzDzmbq1BJYSQuYYKi70cOAtwy%2FFvKbbt%2FUehER2enNsVw5%2Fjb7ibkRODF9%2FTaUj1NHTdHH%2FXfkNvsr1XBmx%2FPEZaB9pDT45EWCYmN19YsP4b3SNJFRKHyDlQ7ggnkenUGod9qEd4Zu9aJs03hAcmGRN7c65OeH9PBB23t%2FfGa5tbUE2GXghJfjUK&X-Amz-Signature=0e3b7d3e26c4be20b3a7993107e9dd76cba8e1272cf23634d870ba4c6f155395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZTS67EZ%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T040218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtm9Xg51GPi%2FTKZV6cFHxjMXwvCgHcvl9gmvzGgjdYLAiBO5jlfz%2FqUBUkKwx2c%2BEPOJkTacl9sxvrUbgQiWItt9Cr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMjRQZCF%2BrVy8deA2KKtwDJQrkSp%2BwLB8E%2Bjxl7eut8Dy2DTjQEsJO7XL17Cgu5cT2jtTT9N8f8vc7CtxpRH1zFVUIXUAOIGziXjn9w7C8A9J02RWpR7gLj8Y5PeagnFSK7StrGwDpHiI2GpAJYGCO7stYvGqIK3q383UMTBeJfXoQ4meg5ApUs2boXEysjCyjJ6ygpGWmuAyxHcutFN8mnSYstkSyHqM9ASlYltDPr10oPWtWTqfFqO9aOPcWj%2FQell5IxQxnu9Uvg0fIaOPZOhIwGQTRzoKmmhk4AxBaA27VWORZASLQ%2FMTKKoxn4y33bjz6U2MpJakfIjnANRu8qo6GE0gOFz%2B59kdXEjtag8Sl5tZQ0EiDs2gzTzjv6jFGra7DY%2FGQbAY28xIqoHhdmIfomd%2BDSPaKx%2FjHpEVS8bK9l5HJqIVCBZrg7STTJ9p3%2BEX0Uu1pr6OCpPnZE%2BcsYrh9cgivhk%2BLQ874Ud6RmUyFzwWNkNK33SQ9EeMLEuY5iASXVE84%2FQMMoEK5mtvTIRCkBsclyFaFJgWZSHRCU7LX%2FjSp4khQ7Slgu5CbvPjPaS58EYKZDCmdPEcjhvXa5Waf0IenihyzjH%2FXCiXhEvhi4SpFLlQhnoQDVvs%2B1QSzd8uV%2Bg1EwPkCl3kwqtK8ygY6pgH%2FMmt0HIs5Io7rneEDvNv7uZgn61CdF1VdGah92%2BtH3EEt9NoHav9LlHsRN2oLTXSu5PHNlrJ82rw23FQ5b6FDdtKPtrt%2FfXmoaPiKjcRQPeG40zylBtYhmnnFPXMojx9ISfz6xavOeRnbZjgzebAuC6Z5RmxmCo6D4I6cBocjsdjmEJB5K2S1TlFZrljYGKeOpIExobiOp6vBCVlXMmUlBd03nqqA&X-Amz-Signature=ede971319292736a421b3448fa7cfe1cb17a7e69f35885c8e14e42e52e1519b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

