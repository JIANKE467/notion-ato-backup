
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZPWSUP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTEvMj16fQ5PSNvO6UxIHOxNX4eYLITJbTiStaSPcZMAIhAPMH%2BJ8K3KzvzHwyrhQXH70Ce8%2BqUwFfg7ihdOsYPK4lKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyG1bGJMbrr6S038Fcq3AMmLDozsMfD%2Be5EwqlHL7c8SQ1P6b1IuwlaFmL7GriVABOE1BV%2BKwf1SB73%2FOI023Wg5gndpz42l5x%2BVEyIPoNRW5xcaZG751mIXILC5ZEPkrj5y8vHakFdlxsHfITSG%2FBo46jU3GyDkyqqtBQYyUsuhV8oM9qt%2FA8ncfL9%2FilFEQGIsTM50mldBXVJkAm1CDBXv%2BY2u8lGaCTRrCLF6q%2Bc09LMn%2Bvw5nLMhlubYW%2BC7vDx4gAoh9serz3UDQcgjouXtK3x2gbeP7MuZTbaN580MjjqA25A4qyciopxQ6Akz1V9P%2B9kaKyP5Q%2BLIctjNWKbN%2FdVC4sTkzTcuSZAKlQUSkeaDn4LY5lbpIighEjCxde47oIkpyuNvkDvdVR4YNbxcDvdpLnt7sOk3y7CVacRhgoTD0ZB7P7aZDHIqGdxAS5Hi5BE%2FbG%2FpnZ%2BE%2BpzzGKZErZULiY%2FP%2F9hAG3VCeqM1oyxVlspYAC6s587R5TcWs62mdhVFq2M1X8DCjpzV310TXL56H5D8Cp4GzVWUExI6YcMWg8T4u2lzkTorQf3G2QTtgI0IGRcC%2BLc6KgMs0ilRW%2FNSavxQoFyTVdPTVbXZUKIXpktC%2BBKu%2BrfEtVvreoUvcMwR6QT00MeDTDmtt7JBjqkAeegGD%2FbpuiKIWBuL%2FC2hvIk1Oyhrqw8JToWv46Wz7qy9%2BkS%2F0irQ5m8FU7%2FdProK6Dasw%2BO0Fxufa1NqpYSSSr%2BS%2F7EGcaHWhSUscDNWmZZ5SokZufmg3P0NqXJxbf%2FQJmuOAwA%2BU7KKJ9WjGZtARJytiz83QuycxvdM8VMSpBgMC7A44Nx6Le2%2FWoSGYjdIE49go7VsMlOmnK3W1JCIulUXbEK&X-Amz-Signature=82372e7eee0263f084155a8fa685ae5b1ded6f28f97cb7ecc5c685cffeddbd0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDHIVI2Y%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuMygQDRLVqm0S9X6hMglERnbGP7w5Pb0KNqC50Y2%2BwAiBaxcW1J5k9QVbc9VP3%2BKLLWymUFePq3RE%2BPkO%2B6JN2SCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ6nFAYKhF9fZWlAwKtwD1UJ6mXOS36zbuBuO%2FaOjWO88fssZFUUJfFESxo7Y3QS84yzL9ZvQaTlzGbtANQ%2BOSzhrAPEYao7O0qe9K2404k6JWnEjAqVxx6qxHI1rX3A7LOfWsCBShe%2BEVQQXOwcp%2FjmJ1kwOg0otRqCAwloamS8XOIWeZrV2f7BQ2pPpsrEhGXhwmfth%2BQZuR%2FUHFg0UIS5Q3ZIQl2BsbIYDH2bfHv7JIHlk83p4owUI9K%2B7EdZHZuXc6JC1YA2yg%2FIb41YuGhBNGOfO9sNNo5mIt1w%2BhxumQtqPLnDdVp6507nNnToa38S93N03wf1LBw3GgRs933UR2g30wfFipbqdjYAXh2uhWAIX3l%2F2LiGwt5e5u3dyyY9mfaZ3oAY9jTej2X5AJQPhNEyPLC5Sgn%2BM1uIXCpl5Js6rqucxFIPQzibQmf29CgH%2FFU3SPHRiOUOnuMacUg4YenFLbRlZdVA0CXXLimq3Z5QUYrCDLrRYasflBQluY7oDU1gmNYWkMqEKVyumhnSSYNSWubNA2Rx%2FFaKEsikulRg46B9pMMmnzrXCESGFFUWBZuCZYNde0EjQSuE0dBm4cY6IFN6YpTTKpPdJLWzSzRZfEeILibxo4EVfCcZ0o3p8%2BGHeUDt5tEgw%2B7beyQY6pgEI6m6URrkLAFTZ3Y3yJ2JOnZCnuT250QXzl3X3ellPWLQANv6pfQv6gEhLWQSjPfvUUmbGW2kzEt72he4ydePMpLgB2nRIkN6j%2B%2Bz%2BGGd%2BatRupJQxaH1JKA7Q4etRTEDoLq%2BcuHCnKPf1pqdUJFSwcY6T%2F9nWJd3yxBuK04u5dOVQHOl2S2V%2FHXux4iGDdEfJaukHw%2FY2L0U%2F%2BJ%2BSqztqpJcs9vlk&X-Amz-Signature=c6bff2d61840558959f17314e9f3d31554b1cb4a78aad200d9eb9d21941aec90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDHIVI2Y%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuMygQDRLVqm0S9X6hMglERnbGP7w5Pb0KNqC50Y2%2BwAiBaxcW1J5k9QVbc9VP3%2BKLLWymUFePq3RE%2BPkO%2B6JN2SCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ6nFAYKhF9fZWlAwKtwD1UJ6mXOS36zbuBuO%2FaOjWO88fssZFUUJfFESxo7Y3QS84yzL9ZvQaTlzGbtANQ%2BOSzhrAPEYao7O0qe9K2404k6JWnEjAqVxx6qxHI1rX3A7LOfWsCBShe%2BEVQQXOwcp%2FjmJ1kwOg0otRqCAwloamS8XOIWeZrV2f7BQ2pPpsrEhGXhwmfth%2BQZuR%2FUHFg0UIS5Q3ZIQl2BsbIYDH2bfHv7JIHlk83p4owUI9K%2B7EdZHZuXc6JC1YA2yg%2FIb41YuGhBNGOfO9sNNo5mIt1w%2BhxumQtqPLnDdVp6507nNnToa38S93N03wf1LBw3GgRs933UR2g30wfFipbqdjYAXh2uhWAIX3l%2F2LiGwt5e5u3dyyY9mfaZ3oAY9jTej2X5AJQPhNEyPLC5Sgn%2BM1uIXCpl5Js6rqucxFIPQzibQmf29CgH%2FFU3SPHRiOUOnuMacUg4YenFLbRlZdVA0CXXLimq3Z5QUYrCDLrRYasflBQluY7oDU1gmNYWkMqEKVyumhnSSYNSWubNA2Rx%2FFaKEsikulRg46B9pMMmnzrXCESGFFUWBZuCZYNde0EjQSuE0dBm4cY6IFN6YpTTKpPdJLWzSzRZfEeILibxo4EVfCcZ0o3p8%2BGHeUDt5tEgw%2B7beyQY6pgEI6m6URrkLAFTZ3Y3yJ2JOnZCnuT250QXzl3X3ellPWLQANv6pfQv6gEhLWQSjPfvUUmbGW2kzEt72he4ydePMpLgB2nRIkN6j%2B%2Bz%2BGGd%2BatRupJQxaH1JKA7Q4etRTEDoLq%2BcuHCnKPf1pqdUJFSwcY6T%2F9nWJd3yxBuK04u5dOVQHOl2S2V%2FHXux4iGDdEfJaukHw%2FY2L0U%2F%2BJ%2BSqztqpJcs9vlk&X-Amz-Signature=f578e8d150a3a3568e9f01b639dde83bedc960e2273db22032e0defc8dd4389f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYBVD4S%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4coJPnmxkQ%2FX5oN%2BUotDBV%2FAQoXJoUoN8%2BNNBoQ6lxwIhAIouchJZvyIwxxWdk25dNa3Ue7NJfDPoqAdQUfmvwhszKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhQaWHhWkyrGsPdakq3AMWhKBprq8D%2BlbOu4Nje%2BiwCGs7aOMaj0le5%2BXOhy%2FX08bs966XBZU2mmD3Z74vlN8fxfAIwEXuh7lof31zZw%2BCp0IVHr%2BtHyypuEXTDr%2FCn9IVQo29LXuEvYUBeK8HDH28616uJOpQnOEadlndM2FPnqi2E8LlCldlCGEpTadT13CV9cDe9bZb4j5yBzr3Ve8KaAWyPSEI8Dw4SsnAKxr6eN%2Bnh6JBdGsqRF3CWUXUCNMRFauKuI9SArOj9c7Os2HxXpyPhisl5VoZWCJfXcmiPxIcAggC8TFHTULFheA7j2MLrBd%2FEBX8Namqc1Fij2AhR45j9v%2Bp32xv3JMiPasqkrgWW1DojkubGeg85AmzDRRfs6LGoCW8b2ehDT47VGScPgvjNEEfFtmsKVAJNn%2By6ocAnZKFSWZ7mUnB%2BrveHgWBMf40Y2AYd8YtZcr6Ke3MmqQFAe6yWgRu6RzH44nEh5pwMBp5lxG9N%2FH%2B2nECmu6M3jWXZHh68efBVyjjvsae0qt3TO2qCb5qviq1tCGsxj5fFsNm6cnFUJA7Fb492%2FjWveTep4mDnjb0bSAXm5zrM2j7bE3wIWjC9KyPVU1uvc7n914s5dzFlBFf%2FSR3Ju6YVszHZ1lY6WcDZTDVtt7JBjqkASTQ4GYlUzgUy4l%2FfKcF3LtFFf2w2AHn3upnCXGiGy1wGGPTDB71hWwUzMkP0aiBcgxcSqRWO%2BVT%2BLoiVLYitpIDQMX3EVPqiBZAryRPeeIOWYrdD0mVxNamz969VzpRsc4cZ89oLN4aJflZXHPSnuScMGcj0mKIVD8R6VeuWzWmLTTTO7UHtiD7zT%2BwLTYJvEBYHqpCgoqFEo%2Fdlovdt6%2BZviaK&X-Amz-Signature=4221d6fe9a1d9635d671f38dd78fcafcab6233faab3635b6939958d908987f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYBVD4S%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4coJPnmxkQ%2FX5oN%2BUotDBV%2FAQoXJoUoN8%2BNNBoQ6lxwIhAIouchJZvyIwxxWdk25dNa3Ue7NJfDPoqAdQUfmvwhszKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhQaWHhWkyrGsPdakq3AMWhKBprq8D%2BlbOu4Nje%2BiwCGs7aOMaj0le5%2BXOhy%2FX08bs966XBZU2mmD3Z74vlN8fxfAIwEXuh7lof31zZw%2BCp0IVHr%2BtHyypuEXTDr%2FCn9IVQo29LXuEvYUBeK8HDH28616uJOpQnOEadlndM2FPnqi2E8LlCldlCGEpTadT13CV9cDe9bZb4j5yBzr3Ve8KaAWyPSEI8Dw4SsnAKxr6eN%2Bnh6JBdGsqRF3CWUXUCNMRFauKuI9SArOj9c7Os2HxXpyPhisl5VoZWCJfXcmiPxIcAggC8TFHTULFheA7j2MLrBd%2FEBX8Namqc1Fij2AhR45j9v%2Bp32xv3JMiPasqkrgWW1DojkubGeg85AmzDRRfs6LGoCW8b2ehDT47VGScPgvjNEEfFtmsKVAJNn%2By6ocAnZKFSWZ7mUnB%2BrveHgWBMf40Y2AYd8YtZcr6Ke3MmqQFAe6yWgRu6RzH44nEh5pwMBp5lxG9N%2FH%2B2nECmu6M3jWXZHh68efBVyjjvsae0qt3TO2qCb5qviq1tCGsxj5fFsNm6cnFUJA7Fb492%2FjWveTep4mDnjb0bSAXm5zrM2j7bE3wIWjC9KyPVU1uvc7n914s5dzFlBFf%2FSR3Ju6YVszHZ1lY6WcDZTDVtt7JBjqkASTQ4GYlUzgUy4l%2FfKcF3LtFFf2w2AHn3upnCXGiGy1wGGPTDB71hWwUzMkP0aiBcgxcSqRWO%2BVT%2BLoiVLYitpIDQMX3EVPqiBZAryRPeeIOWYrdD0mVxNamz969VzpRsc4cZ89oLN4aJflZXHPSnuScMGcj0mKIVD8R6VeuWzWmLTTTO7UHtiD7zT%2BwLTYJvEBYHqpCgoqFEo%2Fdlovdt6%2BZviaK&X-Amz-Signature=30b11c615cde6dfa69ecf981f3fdf5fb7bf55311b8bbbb2a33a839e2919c2a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYBVD4S%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4coJPnmxkQ%2FX5oN%2BUotDBV%2FAQoXJoUoN8%2BNNBoQ6lxwIhAIouchJZvyIwxxWdk25dNa3Ue7NJfDPoqAdQUfmvwhszKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhQaWHhWkyrGsPdakq3AMWhKBprq8D%2BlbOu4Nje%2BiwCGs7aOMaj0le5%2BXOhy%2FX08bs966XBZU2mmD3Z74vlN8fxfAIwEXuh7lof31zZw%2BCp0IVHr%2BtHyypuEXTDr%2FCn9IVQo29LXuEvYUBeK8HDH28616uJOpQnOEadlndM2FPnqi2E8LlCldlCGEpTadT13CV9cDe9bZb4j5yBzr3Ve8KaAWyPSEI8Dw4SsnAKxr6eN%2Bnh6JBdGsqRF3CWUXUCNMRFauKuI9SArOj9c7Os2HxXpyPhisl5VoZWCJfXcmiPxIcAggC8TFHTULFheA7j2MLrBd%2FEBX8Namqc1Fij2AhR45j9v%2Bp32xv3JMiPasqkrgWW1DojkubGeg85AmzDRRfs6LGoCW8b2ehDT47VGScPgvjNEEfFtmsKVAJNn%2By6ocAnZKFSWZ7mUnB%2BrveHgWBMf40Y2AYd8YtZcr6Ke3MmqQFAe6yWgRu6RzH44nEh5pwMBp5lxG9N%2FH%2B2nECmu6M3jWXZHh68efBVyjjvsae0qt3TO2qCb5qviq1tCGsxj5fFsNm6cnFUJA7Fb492%2FjWveTep4mDnjb0bSAXm5zrM2j7bE3wIWjC9KyPVU1uvc7n914s5dzFlBFf%2FSR3Ju6YVszHZ1lY6WcDZTDVtt7JBjqkASTQ4GYlUzgUy4l%2FfKcF3LtFFf2w2AHn3upnCXGiGy1wGGPTDB71hWwUzMkP0aiBcgxcSqRWO%2BVT%2BLoiVLYitpIDQMX3EVPqiBZAryRPeeIOWYrdD0mVxNamz969VzpRsc4cZ89oLN4aJflZXHPSnuScMGcj0mKIVD8R6VeuWzWmLTTTO7UHtiD7zT%2BwLTYJvEBYHqpCgoqFEo%2Fdlovdt6%2BZviaK&X-Amz-Signature=a97bff81059e22c74fe82c6701229a7ccd3890d01e62799c975b5e54b6ae84ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYBVD4S%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4coJPnmxkQ%2FX5oN%2BUotDBV%2FAQoXJoUoN8%2BNNBoQ6lxwIhAIouchJZvyIwxxWdk25dNa3Ue7NJfDPoqAdQUfmvwhszKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhQaWHhWkyrGsPdakq3AMWhKBprq8D%2BlbOu4Nje%2BiwCGs7aOMaj0le5%2BXOhy%2FX08bs966XBZU2mmD3Z74vlN8fxfAIwEXuh7lof31zZw%2BCp0IVHr%2BtHyypuEXTDr%2FCn9IVQo29LXuEvYUBeK8HDH28616uJOpQnOEadlndM2FPnqi2E8LlCldlCGEpTadT13CV9cDe9bZb4j5yBzr3Ve8KaAWyPSEI8Dw4SsnAKxr6eN%2Bnh6JBdGsqRF3CWUXUCNMRFauKuI9SArOj9c7Os2HxXpyPhisl5VoZWCJfXcmiPxIcAggC8TFHTULFheA7j2MLrBd%2FEBX8Namqc1Fij2AhR45j9v%2Bp32xv3JMiPasqkrgWW1DojkubGeg85AmzDRRfs6LGoCW8b2ehDT47VGScPgvjNEEfFtmsKVAJNn%2By6ocAnZKFSWZ7mUnB%2BrveHgWBMf40Y2AYd8YtZcr6Ke3MmqQFAe6yWgRu6RzH44nEh5pwMBp5lxG9N%2FH%2B2nECmu6M3jWXZHh68efBVyjjvsae0qt3TO2qCb5qviq1tCGsxj5fFsNm6cnFUJA7Fb492%2FjWveTep4mDnjb0bSAXm5zrM2j7bE3wIWjC9KyPVU1uvc7n914s5dzFlBFf%2FSR3Ju6YVszHZ1lY6WcDZTDVtt7JBjqkASTQ4GYlUzgUy4l%2FfKcF3LtFFf2w2AHn3upnCXGiGy1wGGPTDB71hWwUzMkP0aiBcgxcSqRWO%2BVT%2BLoiVLYitpIDQMX3EVPqiBZAryRPeeIOWYrdD0mVxNamz969VzpRsc4cZ89oLN4aJflZXHPSnuScMGcj0mKIVD8R6VeuWzWmLTTTO7UHtiD7zT%2BwLTYJvEBYHqpCgoqFEo%2Fdlovdt6%2BZviaK&X-Amz-Signature=0eef268a7e06c0c49a1852583652cfee833dc8bd2b725601aeb8c124491fe34d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYBVD4S%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4coJPnmxkQ%2FX5oN%2BUotDBV%2FAQoXJoUoN8%2BNNBoQ6lxwIhAIouchJZvyIwxxWdk25dNa3Ue7NJfDPoqAdQUfmvwhszKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhQaWHhWkyrGsPdakq3AMWhKBprq8D%2BlbOu4Nje%2BiwCGs7aOMaj0le5%2BXOhy%2FX08bs966XBZU2mmD3Z74vlN8fxfAIwEXuh7lof31zZw%2BCp0IVHr%2BtHyypuEXTDr%2FCn9IVQo29LXuEvYUBeK8HDH28616uJOpQnOEadlndM2FPnqi2E8LlCldlCGEpTadT13CV9cDe9bZb4j5yBzr3Ve8KaAWyPSEI8Dw4SsnAKxr6eN%2Bnh6JBdGsqRF3CWUXUCNMRFauKuI9SArOj9c7Os2HxXpyPhisl5VoZWCJfXcmiPxIcAggC8TFHTULFheA7j2MLrBd%2FEBX8Namqc1Fij2AhR45j9v%2Bp32xv3JMiPasqkrgWW1DojkubGeg85AmzDRRfs6LGoCW8b2ehDT47VGScPgvjNEEfFtmsKVAJNn%2By6ocAnZKFSWZ7mUnB%2BrveHgWBMf40Y2AYd8YtZcr6Ke3MmqQFAe6yWgRu6RzH44nEh5pwMBp5lxG9N%2FH%2B2nECmu6M3jWXZHh68efBVyjjvsae0qt3TO2qCb5qviq1tCGsxj5fFsNm6cnFUJA7Fb492%2FjWveTep4mDnjb0bSAXm5zrM2j7bE3wIWjC9KyPVU1uvc7n914s5dzFlBFf%2FSR3Ju6YVszHZ1lY6WcDZTDVtt7JBjqkASTQ4GYlUzgUy4l%2FfKcF3LtFFf2w2AHn3upnCXGiGy1wGGPTDB71hWwUzMkP0aiBcgxcSqRWO%2BVT%2BLoiVLYitpIDQMX3EVPqiBZAryRPeeIOWYrdD0mVxNamz969VzpRsc4cZ89oLN4aJflZXHPSnuScMGcj0mKIVD8R6VeuWzWmLTTTO7UHtiD7zT%2BwLTYJvEBYHqpCgoqFEo%2Fdlovdt6%2BZviaK&X-Amz-Signature=32dbd8465b7b60427a28695982b2c7672dbac41f9e56f6f19891665386a2fff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYBVD4S%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4coJPnmxkQ%2FX5oN%2BUotDBV%2FAQoXJoUoN8%2BNNBoQ6lxwIhAIouchJZvyIwxxWdk25dNa3Ue7NJfDPoqAdQUfmvwhszKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhQaWHhWkyrGsPdakq3AMWhKBprq8D%2BlbOu4Nje%2BiwCGs7aOMaj0le5%2BXOhy%2FX08bs966XBZU2mmD3Z74vlN8fxfAIwEXuh7lof31zZw%2BCp0IVHr%2BtHyypuEXTDr%2FCn9IVQo29LXuEvYUBeK8HDH28616uJOpQnOEadlndM2FPnqi2E8LlCldlCGEpTadT13CV9cDe9bZb4j5yBzr3Ve8KaAWyPSEI8Dw4SsnAKxr6eN%2Bnh6JBdGsqRF3CWUXUCNMRFauKuI9SArOj9c7Os2HxXpyPhisl5VoZWCJfXcmiPxIcAggC8TFHTULFheA7j2MLrBd%2FEBX8Namqc1Fij2AhR45j9v%2Bp32xv3JMiPasqkrgWW1DojkubGeg85AmzDRRfs6LGoCW8b2ehDT47VGScPgvjNEEfFtmsKVAJNn%2By6ocAnZKFSWZ7mUnB%2BrveHgWBMf40Y2AYd8YtZcr6Ke3MmqQFAe6yWgRu6RzH44nEh5pwMBp5lxG9N%2FH%2B2nECmu6M3jWXZHh68efBVyjjvsae0qt3TO2qCb5qviq1tCGsxj5fFsNm6cnFUJA7Fb492%2FjWveTep4mDnjb0bSAXm5zrM2j7bE3wIWjC9KyPVU1uvc7n914s5dzFlBFf%2FSR3Ju6YVszHZ1lY6WcDZTDVtt7JBjqkASTQ4GYlUzgUy4l%2FfKcF3LtFFf2w2AHn3upnCXGiGy1wGGPTDB71hWwUzMkP0aiBcgxcSqRWO%2BVT%2BLoiVLYitpIDQMX3EVPqiBZAryRPeeIOWYrdD0mVxNamz969VzpRsc4cZ89oLN4aJflZXHPSnuScMGcj0mKIVD8R6VeuWzWmLTTTO7UHtiD7zT%2BwLTYJvEBYHqpCgoqFEo%2Fdlovdt6%2BZviaK&X-Amz-Signature=13909f633f8206d149e47d075f0b0898fb7c87eed432f8c76d62d7074891dc6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYBVD4S%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4coJPnmxkQ%2FX5oN%2BUotDBV%2FAQoXJoUoN8%2BNNBoQ6lxwIhAIouchJZvyIwxxWdk25dNa3Ue7NJfDPoqAdQUfmvwhszKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhQaWHhWkyrGsPdakq3AMWhKBprq8D%2BlbOu4Nje%2BiwCGs7aOMaj0le5%2BXOhy%2FX08bs966XBZU2mmD3Z74vlN8fxfAIwEXuh7lof31zZw%2BCp0IVHr%2BtHyypuEXTDr%2FCn9IVQo29LXuEvYUBeK8HDH28616uJOpQnOEadlndM2FPnqi2E8LlCldlCGEpTadT13CV9cDe9bZb4j5yBzr3Ve8KaAWyPSEI8Dw4SsnAKxr6eN%2Bnh6JBdGsqRF3CWUXUCNMRFauKuI9SArOj9c7Os2HxXpyPhisl5VoZWCJfXcmiPxIcAggC8TFHTULFheA7j2MLrBd%2FEBX8Namqc1Fij2AhR45j9v%2Bp32xv3JMiPasqkrgWW1DojkubGeg85AmzDRRfs6LGoCW8b2ehDT47VGScPgvjNEEfFtmsKVAJNn%2By6ocAnZKFSWZ7mUnB%2BrveHgWBMf40Y2AYd8YtZcr6Ke3MmqQFAe6yWgRu6RzH44nEh5pwMBp5lxG9N%2FH%2B2nECmu6M3jWXZHh68efBVyjjvsae0qt3TO2qCb5qviq1tCGsxj5fFsNm6cnFUJA7Fb492%2FjWveTep4mDnjb0bSAXm5zrM2j7bE3wIWjC9KyPVU1uvc7n914s5dzFlBFf%2FSR3Ju6YVszHZ1lY6WcDZTDVtt7JBjqkASTQ4GYlUzgUy4l%2FfKcF3LtFFf2w2AHn3upnCXGiGy1wGGPTDB71hWwUzMkP0aiBcgxcSqRWO%2BVT%2BLoiVLYitpIDQMX3EVPqiBZAryRPeeIOWYrdD0mVxNamz969VzpRsc4cZ89oLN4aJflZXHPSnuScMGcj0mKIVD8R6VeuWzWmLTTTO7UHtiD7zT%2BwLTYJvEBYHqpCgoqFEo%2Fdlovdt6%2BZviaK&X-Amz-Signature=ce7dfa4cb27347d316db6a39cc7d907aab4b06f1c07dffb9bdc6749c90d3c188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHOEUBF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJw5ULTd%2B4kV841CT4hURrk%2F%2B4HaSN%2BL1uLbmAX%2FwQ3wIhAIo6qSB%2FRzDg%2Fb7cf1nDxLKtVLp1VeY51Qz98gnyCMjaKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXGMevzDHXoB95gcsq3AOf7I4eRnGFNAty%2FYwRyZqe6UkWAM%2Bg2%2FcNYixENDRt%2BWfJet5Pbq%2B%2Fj4rLe5Qo0qTdL%2By0z6HHbL0oV3fGipLtqcVGGyXfwOV8SIc%2BXXTsIkKNNNQMzcQdeuHX2lAboVEExRh6eOcWjWjrUgwlHnlS1OtS1Blyl1cqsL%2BEY2oZrU5t5Al3W8rE4E%2BCfe4sdZhZkv%2FMMX8ojfVr414mwRcSaRVbObu75Pl9e%2BXFmc1JhXqPWKfWajy44nmlOivrjJgfKJXdkf7Kq%2B9mi2fxKD3R1o13AGb1n3%2Fd3UvmTZQchMBOdNCnRdrO%2Fsq6uquiiyPYbp7B6uuYYfFI3oBub41ajEC%2BbyaJGwRfzMj3iXpoE%2BHrO6isFyr9HBrugGsaYYLUs3E08KmZ3j%2BxeZMBYS%2BPxUP6hhjmFhs28XgFwIyuV7U%2BDrDeZZMjAN9quQ%2FNYKRvngqsNGfIP2Qryd3ttWvCekSa%2FO4cPBmd%2B7dcNTP7483XgRDobJYNdt2pFf657Jy8yrYE25qWLgOjlbdj3C8s3C1XKm78dG5bklqXz6sFE3YdS%2B4PRTtkJoD4G8EebPsqjX3L6R5K075Qp9tEZ4GPP7C0ActwV%2Bs2H4dImE3oLjaYduWSyv59DbMLmjDftt7JBjqkAXjNs5%2FxGNoED%2F92fYfs%2F0Q9L6Rkqji%2FyJ0x3gaMw7sR2r25s4%2B134%2B2x9YhR3BI71tLrBwYs%2BoClWGWbIjyxBLnMzlh2FA%2FLJzdN4%2BrY%2FPmyzWKVEaSHI6YwvmJUgxeOEDULhRpkuVjs%2BEMN8yskMapV%2FcSiw39YXdJs%2FLqdWwcAT%2BsNImiSPK5HCOWd3ccSZj5Nq0dnC3RGCRxhR3G62K%2BK2uw&X-Amz-Signature=f298ee6b42b7e2de9e4c047335ed87e8fc3f7017a3ad8022d480d17c99694c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHOEUBF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJw5ULTd%2B4kV841CT4hURrk%2F%2B4HaSN%2BL1uLbmAX%2FwQ3wIhAIo6qSB%2FRzDg%2Fb7cf1nDxLKtVLp1VeY51Qz98gnyCMjaKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXGMevzDHXoB95gcsq3AOf7I4eRnGFNAty%2FYwRyZqe6UkWAM%2Bg2%2FcNYixENDRt%2BWfJet5Pbq%2B%2Fj4rLe5Qo0qTdL%2By0z6HHbL0oV3fGipLtqcVGGyXfwOV8SIc%2BXXTsIkKNNNQMzcQdeuHX2lAboVEExRh6eOcWjWjrUgwlHnlS1OtS1Blyl1cqsL%2BEY2oZrU5t5Al3W8rE4E%2BCfe4sdZhZkv%2FMMX8ojfVr414mwRcSaRVbObu75Pl9e%2BXFmc1JhXqPWKfWajy44nmlOivrjJgfKJXdkf7Kq%2B9mi2fxKD3R1o13AGb1n3%2Fd3UvmTZQchMBOdNCnRdrO%2Fsq6uquiiyPYbp7B6uuYYfFI3oBub41ajEC%2BbyaJGwRfzMj3iXpoE%2BHrO6isFyr9HBrugGsaYYLUs3E08KmZ3j%2BxeZMBYS%2BPxUP6hhjmFhs28XgFwIyuV7U%2BDrDeZZMjAN9quQ%2FNYKRvngqsNGfIP2Qryd3ttWvCekSa%2FO4cPBmd%2B7dcNTP7483XgRDobJYNdt2pFf657Jy8yrYE25qWLgOjlbdj3C8s3C1XKm78dG5bklqXz6sFE3YdS%2B4PRTtkJoD4G8EebPsqjX3L6R5K075Qp9tEZ4GPP7C0ActwV%2Bs2H4dImE3oLjaYduWSyv59DbMLmjDftt7JBjqkAXjNs5%2FxGNoED%2F92fYfs%2F0Q9L6Rkqji%2FyJ0x3gaMw7sR2r25s4%2B134%2B2x9YhR3BI71tLrBwYs%2BoClWGWbIjyxBLnMzlh2FA%2FLJzdN4%2BrY%2FPmyzWKVEaSHI6YwvmJUgxeOEDULhRpkuVjs%2BEMN8yskMapV%2FcSiw39YXdJs%2FLqdWwcAT%2BsNImiSPK5HCOWd3ccSZj5Nq0dnC3RGCRxhR3G62K%2BK2uw&X-Amz-Signature=1c66eaaf7407db712a4f817bc565d3079e830cf665535bd48599c510ba1ecf0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHOEUBF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJw5ULTd%2B4kV841CT4hURrk%2F%2B4HaSN%2BL1uLbmAX%2FwQ3wIhAIo6qSB%2FRzDg%2Fb7cf1nDxLKtVLp1VeY51Qz98gnyCMjaKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXGMevzDHXoB95gcsq3AOf7I4eRnGFNAty%2FYwRyZqe6UkWAM%2Bg2%2FcNYixENDRt%2BWfJet5Pbq%2B%2Fj4rLe5Qo0qTdL%2By0z6HHbL0oV3fGipLtqcVGGyXfwOV8SIc%2BXXTsIkKNNNQMzcQdeuHX2lAboVEExRh6eOcWjWjrUgwlHnlS1OtS1Blyl1cqsL%2BEY2oZrU5t5Al3W8rE4E%2BCfe4sdZhZkv%2FMMX8ojfVr414mwRcSaRVbObu75Pl9e%2BXFmc1JhXqPWKfWajy44nmlOivrjJgfKJXdkf7Kq%2B9mi2fxKD3R1o13AGb1n3%2Fd3UvmTZQchMBOdNCnRdrO%2Fsq6uquiiyPYbp7B6uuYYfFI3oBub41ajEC%2BbyaJGwRfzMj3iXpoE%2BHrO6isFyr9HBrugGsaYYLUs3E08KmZ3j%2BxeZMBYS%2BPxUP6hhjmFhs28XgFwIyuV7U%2BDrDeZZMjAN9quQ%2FNYKRvngqsNGfIP2Qryd3ttWvCekSa%2FO4cPBmd%2B7dcNTP7483XgRDobJYNdt2pFf657Jy8yrYE25qWLgOjlbdj3C8s3C1XKm78dG5bklqXz6sFE3YdS%2B4PRTtkJoD4G8EebPsqjX3L6R5K075Qp9tEZ4GPP7C0ActwV%2Bs2H4dImE3oLjaYduWSyv59DbMLmjDftt7JBjqkAXjNs5%2FxGNoED%2F92fYfs%2F0Q9L6Rkqji%2FyJ0x3gaMw7sR2r25s4%2B134%2B2x9YhR3BI71tLrBwYs%2BoClWGWbIjyxBLnMzlh2FA%2FLJzdN4%2BrY%2FPmyzWKVEaSHI6YwvmJUgxeOEDULhRpkuVjs%2BEMN8yskMapV%2FcSiw39YXdJs%2FLqdWwcAT%2BsNImiSPK5HCOWd3ccSZj5Nq0dnC3RGCRxhR3G62K%2BK2uw&X-Amz-Signature=a9f22eb9a44d40ceddd3394d00c0ab354a9e15b4db71965d2b95ddd7a1ca59ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHOEUBF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJw5ULTd%2B4kV841CT4hURrk%2F%2B4HaSN%2BL1uLbmAX%2FwQ3wIhAIo6qSB%2FRzDg%2Fb7cf1nDxLKtVLp1VeY51Qz98gnyCMjaKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXGMevzDHXoB95gcsq3AOf7I4eRnGFNAty%2FYwRyZqe6UkWAM%2Bg2%2FcNYixENDRt%2BWfJet5Pbq%2B%2Fj4rLe5Qo0qTdL%2By0z6HHbL0oV3fGipLtqcVGGyXfwOV8SIc%2BXXTsIkKNNNQMzcQdeuHX2lAboVEExRh6eOcWjWjrUgwlHnlS1OtS1Blyl1cqsL%2BEY2oZrU5t5Al3W8rE4E%2BCfe4sdZhZkv%2FMMX8ojfVr414mwRcSaRVbObu75Pl9e%2BXFmc1JhXqPWKfWajy44nmlOivrjJgfKJXdkf7Kq%2B9mi2fxKD3R1o13AGb1n3%2Fd3UvmTZQchMBOdNCnRdrO%2Fsq6uquiiyPYbp7B6uuYYfFI3oBub41ajEC%2BbyaJGwRfzMj3iXpoE%2BHrO6isFyr9HBrugGsaYYLUs3E08KmZ3j%2BxeZMBYS%2BPxUP6hhjmFhs28XgFwIyuV7U%2BDrDeZZMjAN9quQ%2FNYKRvngqsNGfIP2Qryd3ttWvCekSa%2FO4cPBmd%2B7dcNTP7483XgRDobJYNdt2pFf657Jy8yrYE25qWLgOjlbdj3C8s3C1XKm78dG5bklqXz6sFE3YdS%2B4PRTtkJoD4G8EebPsqjX3L6R5K075Qp9tEZ4GPP7C0ActwV%2Bs2H4dImE3oLjaYduWSyv59DbMLmjDftt7JBjqkAXjNs5%2FxGNoED%2F92fYfs%2F0Q9L6Rkqji%2FyJ0x3gaMw7sR2r25s4%2B134%2B2x9YhR3BI71tLrBwYs%2BoClWGWbIjyxBLnMzlh2FA%2FLJzdN4%2BrY%2FPmyzWKVEaSHI6YwvmJUgxeOEDULhRpkuVjs%2BEMN8yskMapV%2FcSiw39YXdJs%2FLqdWwcAT%2BsNImiSPK5HCOWd3ccSZj5Nq0dnC3RGCRxhR3G62K%2BK2uw&X-Amz-Signature=22c352484a426279482ff72f024889c68b4c9437039b2ccfc67454b3096268e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHOEUBF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJw5ULTd%2B4kV841CT4hURrk%2F%2B4HaSN%2BL1uLbmAX%2FwQ3wIhAIo6qSB%2FRzDg%2Fb7cf1nDxLKtVLp1VeY51Qz98gnyCMjaKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXGMevzDHXoB95gcsq3AOf7I4eRnGFNAty%2FYwRyZqe6UkWAM%2Bg2%2FcNYixENDRt%2BWfJet5Pbq%2B%2Fj4rLe5Qo0qTdL%2By0z6HHbL0oV3fGipLtqcVGGyXfwOV8SIc%2BXXTsIkKNNNQMzcQdeuHX2lAboVEExRh6eOcWjWjrUgwlHnlS1OtS1Blyl1cqsL%2BEY2oZrU5t5Al3W8rE4E%2BCfe4sdZhZkv%2FMMX8ojfVr414mwRcSaRVbObu75Pl9e%2BXFmc1JhXqPWKfWajy44nmlOivrjJgfKJXdkf7Kq%2B9mi2fxKD3R1o13AGb1n3%2Fd3UvmTZQchMBOdNCnRdrO%2Fsq6uquiiyPYbp7B6uuYYfFI3oBub41ajEC%2BbyaJGwRfzMj3iXpoE%2BHrO6isFyr9HBrugGsaYYLUs3E08KmZ3j%2BxeZMBYS%2BPxUP6hhjmFhs28XgFwIyuV7U%2BDrDeZZMjAN9quQ%2FNYKRvngqsNGfIP2Qryd3ttWvCekSa%2FO4cPBmd%2B7dcNTP7483XgRDobJYNdt2pFf657Jy8yrYE25qWLgOjlbdj3C8s3C1XKm78dG5bklqXz6sFE3YdS%2B4PRTtkJoD4G8EebPsqjX3L6R5K075Qp9tEZ4GPP7C0ActwV%2Bs2H4dImE3oLjaYduWSyv59DbMLmjDftt7JBjqkAXjNs5%2FxGNoED%2F92fYfs%2F0Q9L6Rkqji%2FyJ0x3gaMw7sR2r25s4%2B134%2B2x9YhR3BI71tLrBwYs%2BoClWGWbIjyxBLnMzlh2FA%2FLJzdN4%2BrY%2FPmyzWKVEaSHI6YwvmJUgxeOEDULhRpkuVjs%2BEMN8yskMapV%2FcSiw39YXdJs%2FLqdWwcAT%2BsNImiSPK5HCOWd3ccSZj5Nq0dnC3RGCRxhR3G62K%2BK2uw&X-Amz-Signature=781d765474bcd37e85b3691cbbc38a9c80cd10923d32079a555eb7e249fbcf0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUBMRUZU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDudbE4qIKfS8rVfyuJEvNml3EjSmTLzbezr3i%2Fe6dgwgIgEdeeuorm1rbEmysj%2B3R2hOBB1W9ufGYlczAify%2B%2FcUEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJq%2F3F5dbINGuvXd5yrcA0b%2F8kYFgi7vQu84RT9EY8TCdWKsyBvU897Xblvqdu%2FcAYh92O8VU%2BA2EFNs8ug7Y07f4gMljtRjToF%2BluCn3uW%2BRnA4qVwieoPk7pwfJNbsPZc0ltgGAqE99LtzZNeIeedjaSRPde3KFMdoRNbS0DPfu28JhZL3kojMZ9IMmje%2FBjBwSAxR3sT3SOAIkjtwvAsmRHV6jwHHXjp4HZmGPtiScHs9HFiYDz27dnVlsxcz%2B9b5KzLjAk%2F0l%2FkRsuqLx4TORPfymEV4VNJNDlf2qC%2ByXm3S7xxv9pDTDpPHZqv1QtlfgtcTD1xjN87DHBIbwM2PdLUDR1YUaStQBuTJ3FMTOjOXUbEk2SPSfH%2B4kQw7cltS3M0fLtzKzp6dUByz%2BVx8hplcHPIWkCocy2tcZLno5AvIUOo4mp1ewYxYodAdVPeECtbADNVGM00v6GuZwYS2qNWbKrOFvxPzfEJj6vU86cbo72u46EkgtoSM1qQSwaudodG56ZEAnO%2BOimLa1BowRh8mT9oqHyc3WGZNL8IWqiHJ4Pkm3IbUAK7xS3eZAfCkANKHMNW8YcojylWkQbjkh1ZBbbrqdY%2B%2FAljeJutjuJjX64%2BeQ34VCEdTDC1jLcXJTYAeZsrlXGuhMPi23skGOqUBFSlxEC31EYevax7zAzIE1MB3O9bkPXhtNVfi3E%2BnsGJfEgoIsUI1lU895lO34gG%2B4ylDJ7coFekWC0zBsey7g12LPIgu61SihQbhorC7Mxi2OqkEgJYc2LpfQLE7genOxAbSzqRbrZk084s3QkjKsU6AEpV5dwWwP7EaXp9ycOMBe%2BVKBZk6dx9tkGsBLOI%2FNzTItAWXoBtcR9GPouO3%2Fk1pCO2%2B&X-Amz-Signature=3592bd1725d309657e3091d8a18e9104a541025714817d34d9d161dbfa06e2d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUBMRUZU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDudbE4qIKfS8rVfyuJEvNml3EjSmTLzbezr3i%2Fe6dgwgIgEdeeuorm1rbEmysj%2B3R2hOBB1W9ufGYlczAify%2B%2FcUEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJq%2F3F5dbINGuvXd5yrcA0b%2F8kYFgi7vQu84RT9EY8TCdWKsyBvU897Xblvqdu%2FcAYh92O8VU%2BA2EFNs8ug7Y07f4gMljtRjToF%2BluCn3uW%2BRnA4qVwieoPk7pwfJNbsPZc0ltgGAqE99LtzZNeIeedjaSRPde3KFMdoRNbS0DPfu28JhZL3kojMZ9IMmje%2FBjBwSAxR3sT3SOAIkjtwvAsmRHV6jwHHXjp4HZmGPtiScHs9HFiYDz27dnVlsxcz%2B9b5KzLjAk%2F0l%2FkRsuqLx4TORPfymEV4VNJNDlf2qC%2ByXm3S7xxv9pDTDpPHZqv1QtlfgtcTD1xjN87DHBIbwM2PdLUDR1YUaStQBuTJ3FMTOjOXUbEk2SPSfH%2B4kQw7cltS3M0fLtzKzp6dUByz%2BVx8hplcHPIWkCocy2tcZLno5AvIUOo4mp1ewYxYodAdVPeECtbADNVGM00v6GuZwYS2qNWbKrOFvxPzfEJj6vU86cbo72u46EkgtoSM1qQSwaudodG56ZEAnO%2BOimLa1BowRh8mT9oqHyc3WGZNL8IWqiHJ4Pkm3IbUAK7xS3eZAfCkANKHMNW8YcojylWkQbjkh1ZBbbrqdY%2B%2FAljeJutjuJjX64%2BeQ34VCEdTDC1jLcXJTYAeZsrlXGuhMPi23skGOqUBFSlxEC31EYevax7zAzIE1MB3O9bkPXhtNVfi3E%2BnsGJfEgoIsUI1lU895lO34gG%2B4ylDJ7coFekWC0zBsey7g12LPIgu61SihQbhorC7Mxi2OqkEgJYc2LpfQLE7genOxAbSzqRbrZk084s3QkjKsU6AEpV5dwWwP7EaXp9ycOMBe%2BVKBZk6dx9tkGsBLOI%2FNzTItAWXoBtcR9GPouO3%2Fk1pCO2%2B&X-Amz-Signature=87acc9bd6ae3e2c8fae19f71d64fdffdd077182e5a713c9bb482903b12883853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUBMRUZU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDudbE4qIKfS8rVfyuJEvNml3EjSmTLzbezr3i%2Fe6dgwgIgEdeeuorm1rbEmysj%2B3R2hOBB1W9ufGYlczAify%2B%2FcUEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJq%2F3F5dbINGuvXd5yrcA0b%2F8kYFgi7vQu84RT9EY8TCdWKsyBvU897Xblvqdu%2FcAYh92O8VU%2BA2EFNs8ug7Y07f4gMljtRjToF%2BluCn3uW%2BRnA4qVwieoPk7pwfJNbsPZc0ltgGAqE99LtzZNeIeedjaSRPde3KFMdoRNbS0DPfu28JhZL3kojMZ9IMmje%2FBjBwSAxR3sT3SOAIkjtwvAsmRHV6jwHHXjp4HZmGPtiScHs9HFiYDz27dnVlsxcz%2B9b5KzLjAk%2F0l%2FkRsuqLx4TORPfymEV4VNJNDlf2qC%2ByXm3S7xxv9pDTDpPHZqv1QtlfgtcTD1xjN87DHBIbwM2PdLUDR1YUaStQBuTJ3FMTOjOXUbEk2SPSfH%2B4kQw7cltS3M0fLtzKzp6dUByz%2BVx8hplcHPIWkCocy2tcZLno5AvIUOo4mp1ewYxYodAdVPeECtbADNVGM00v6GuZwYS2qNWbKrOFvxPzfEJj6vU86cbo72u46EkgtoSM1qQSwaudodG56ZEAnO%2BOimLa1BowRh8mT9oqHyc3WGZNL8IWqiHJ4Pkm3IbUAK7xS3eZAfCkANKHMNW8YcojylWkQbjkh1ZBbbrqdY%2B%2FAljeJutjuJjX64%2BeQ34VCEdTDC1jLcXJTYAeZsrlXGuhMPi23skGOqUBFSlxEC31EYevax7zAzIE1MB3O9bkPXhtNVfi3E%2BnsGJfEgoIsUI1lU895lO34gG%2B4ylDJ7coFekWC0zBsey7g12LPIgu61SihQbhorC7Mxi2OqkEgJYc2LpfQLE7genOxAbSzqRbrZk084s3QkjKsU6AEpV5dwWwP7EaXp9ycOMBe%2BVKBZk6dx9tkGsBLOI%2FNzTItAWXoBtcR9GPouO3%2Fk1pCO2%2B&X-Amz-Signature=9d1532afedc5f3896f44071f8f0f7cf162d344d4e1deeac134dfae3646470159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRCYE3ZU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnviJS7LkWUHaxi28rJHb6nzQ2hDtGEm5K4OvzAxRc5AiEAzB%2Fdn7wePjlRL1AvA7jBKniaLadAUCswHnEsTJMTB7sqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmdoX2wJWvVIY6CxyrcA3eKOyEBs5RRfRX5hBD%2FzQK%2Bm6GpKW758scgKHpre4aG6Q60J78%2BwlC6euw%2F9achour3x%2B0F670jxNPz6wsiFDnSFin122NeoL7DBbo6dUs5q0fG2LVCgwIO31N0MuqXNIDc00YEL8UiGyY2DKn%2FIQ7u%2Fle9a8Khv0StfuTeLBGGz8mzaIhCuTYMLmRXwHPj1nSfnWsRLpcXMbvU6wQ7YVjKT0x0Ik7NU%2FBjbajzlANHfCs3yFTu11kTNoMpI9iWavtyb%2Ff1osEsAe0p2ShscOEyO8WNXPJTsZmIp37Di7d8hNLm4ShorfNcWD0AS2R%2Bxr2P3g343p6CJ1Ccts%2F6XWiX7YwaZX5CXtgpVRZGw4jDSChkramdjmQ1%2F9bRK3a54g%2BKPv5PABZaBneSdKHZlQTNKct78ETLKTgQNye0EJQMS2To7JGNSJu7Hdtzc%2F28uAPv6YFBhI1NU3DhxJS%2BAdzHuEtB%2BbjIrJsXN%2B9yFSjDDsRiJ4cv9nwyesH8DP%2FSipIg5mXLLF3IG0LM3bO%2B2%2FVdKfWtMu7qSQT%2FXk48Dk%2F35uXaJ7w7dEb7JXcBWU4QVkpYuclFkR6O0pGVNTe%2BN%2FmZzOjHNJpFX%2BW9DPT9uAhqLSRYH56R%2BG0Yy%2BNYMJC33skGOqUBFoqqZMG4gqKgseAvT1Y60BkA0Blr%2Bzz19ZTceDxH5L3BsNjHdC8xKLcwjCkbTPHVZvy93uSolcm2SGIiFBcHwIUts2EjM8idholot1QgOmAfwOFVmLbF8RNr0%2BmaR%2FF%2FydD7BBiyLzByQGHOWdRxyCH%2Fk2POgh8U%2B4GoA%2BEmigRryhevBkNq%2F5ySa8N3tmD06nS4cY54SZo7RRox9%2BYSKk7xmT%2Fh&X-Amz-Signature=f09d89d6c7a51582813094ad85db56f093747b06edad8083632af13612ac785d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRCYE3ZU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnviJS7LkWUHaxi28rJHb6nzQ2hDtGEm5K4OvzAxRc5AiEAzB%2Fdn7wePjlRL1AvA7jBKniaLadAUCswHnEsTJMTB7sqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmdoX2wJWvVIY6CxyrcA3eKOyEBs5RRfRX5hBD%2FzQK%2Bm6GpKW758scgKHpre4aG6Q60J78%2BwlC6euw%2F9achour3x%2B0F670jxNPz6wsiFDnSFin122NeoL7DBbo6dUs5q0fG2LVCgwIO31N0MuqXNIDc00YEL8UiGyY2DKn%2FIQ7u%2Fle9a8Khv0StfuTeLBGGz8mzaIhCuTYMLmRXwHPj1nSfnWsRLpcXMbvU6wQ7YVjKT0x0Ik7NU%2FBjbajzlANHfCs3yFTu11kTNoMpI9iWavtyb%2Ff1osEsAe0p2ShscOEyO8WNXPJTsZmIp37Di7d8hNLm4ShorfNcWD0AS2R%2Bxr2P3g343p6CJ1Ccts%2F6XWiX7YwaZX5CXtgpVRZGw4jDSChkramdjmQ1%2F9bRK3a54g%2BKPv5PABZaBneSdKHZlQTNKct78ETLKTgQNye0EJQMS2To7JGNSJu7Hdtzc%2F28uAPv6YFBhI1NU3DhxJS%2BAdzHuEtB%2BbjIrJsXN%2B9yFSjDDsRiJ4cv9nwyesH8DP%2FSipIg5mXLLF3IG0LM3bO%2B2%2FVdKfWtMu7qSQT%2FXk48Dk%2F35uXaJ7w7dEb7JXcBWU4QVkpYuclFkR6O0pGVNTe%2BN%2FmZzOjHNJpFX%2BW9DPT9uAhqLSRYH56R%2BG0Yy%2BNYMJC33skGOqUBFoqqZMG4gqKgseAvT1Y60BkA0Blr%2Bzz19ZTceDxH5L3BsNjHdC8xKLcwjCkbTPHVZvy93uSolcm2SGIiFBcHwIUts2EjM8idholot1QgOmAfwOFVmLbF8RNr0%2BmaR%2FF%2FydD7BBiyLzByQGHOWdRxyCH%2Fk2POgh8U%2B4GoA%2BEmigRryhevBkNq%2F5ySa8N3tmD06nS4cY54SZo7RRox9%2BYSKk7xmT%2Fh&X-Amz-Signature=40892616cca7300e05107d9f6ad70578bae0e2009e0f96e088e2d8d231878091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQWNYU6N%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5mWiuQGYdV3wKGZ4gRf41r6ooNSDv5jaeiFnJhygNVQIgAVw3z6yd%2BRLVxd1hNGWRMjdyE6yRKjLSyR8TBqpnXpQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqmRDDfzc8SSkN8NircA8QEVCV8mkccWtj6uNbeSmC7myeCCtMfAeYUQqiU464EXPMNQmHb82wI4aD2Lpvdcucpyw6C8ntyRdV4pOazcTs5ih9Qk4ymuqfNil5e02VV4WT%2FcwT%2FpdsiLa3eihv88K3SPYEt5sQSPlTNDGwQSAQS3OEIwRLrzEd2cdIcLbBDuobP4zOhBikcDBL4Uetn%2B%2BKOVJzv%2BWLlEhUaKCdgVe8vRWjQXAIos0DXSBmlxYl0jRLmjjeio8YS6sJHl%2FHyIxb%2FGQRjVe1rgLU676Nah5vuokfslOdYjsdCRmb7BSqLQBWU7IpPn2oGAcoKHiv4N2XzJyqOtn0GTFS08W30u2K8tKLkV1%2BaliP3PZXtxyDrLtPpex7yPQAFjXG7k8w5a3avEIGVkf2P2P3KlZhNBsTAn79z1NWe0NdSrUhuYSCAXFwmuV8KYBqzaHolPm5oPzkju1a%2FePWgtdVeWNQHWZ25wgSeH0N2B6MHv2FNG4o8cpVt%2FDptORM%2BEBXVypL9iHgLQIdGzyLNq5BktLfLfjplYGRBb5dLD0ly8aoELFJx9ETD0qq2dvWSANDIZLGffk51sCveEwtjcHf%2FB3Y4xiW43KIlTpS9jnJDusEHePB9nhnR0tsqMHnJdiRJMMy23skGOqUB3CUem9qtfc1nQbriftpTjppACZac9xMzLq9Spk5a%2F5DkQX4lwAOodu8S%2BbLBITJMTglh3bL0E9zJEdnluFWqy7oBLIdldYGlCSjkjN1gkrMAExOJ1biGMqaSuQWRPr01KAfy2IxnHYX8%2BdkEVzSWVP07hao6BBwoMKn%2F0asYmYxI0FAobuppA%2BKiQpHavnrWtjQiU9NQxfyf6BiFdPyFMS%2FQDsqN&X-Amz-Signature=4f03d369f453cf7bd4fac90bc939af057b26d40d9c5fa2cfcbe82d413c3daa87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQWNYU6N%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5mWiuQGYdV3wKGZ4gRf41r6ooNSDv5jaeiFnJhygNVQIgAVw3z6yd%2BRLVxd1hNGWRMjdyE6yRKjLSyR8TBqpnXpQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqmRDDfzc8SSkN8NircA8QEVCV8mkccWtj6uNbeSmC7myeCCtMfAeYUQqiU464EXPMNQmHb82wI4aD2Lpvdcucpyw6C8ntyRdV4pOazcTs5ih9Qk4ymuqfNil5e02VV4WT%2FcwT%2FpdsiLa3eihv88K3SPYEt5sQSPlTNDGwQSAQS3OEIwRLrzEd2cdIcLbBDuobP4zOhBikcDBL4Uetn%2B%2BKOVJzv%2BWLlEhUaKCdgVe8vRWjQXAIos0DXSBmlxYl0jRLmjjeio8YS6sJHl%2FHyIxb%2FGQRjVe1rgLU676Nah5vuokfslOdYjsdCRmb7BSqLQBWU7IpPn2oGAcoKHiv4N2XzJyqOtn0GTFS08W30u2K8tKLkV1%2BaliP3PZXtxyDrLtPpex7yPQAFjXG7k8w5a3avEIGVkf2P2P3KlZhNBsTAn79z1NWe0NdSrUhuYSCAXFwmuV8KYBqzaHolPm5oPzkju1a%2FePWgtdVeWNQHWZ25wgSeH0N2B6MHv2FNG4o8cpVt%2FDptORM%2BEBXVypL9iHgLQIdGzyLNq5BktLfLfjplYGRBb5dLD0ly8aoELFJx9ETD0qq2dvWSANDIZLGffk51sCveEwtjcHf%2FB3Y4xiW43KIlTpS9jnJDusEHePB9nhnR0tsqMHnJdiRJMMy23skGOqUB3CUem9qtfc1nQbriftpTjppACZac9xMzLq9Spk5a%2F5DkQX4lwAOodu8S%2BbLBITJMTglh3bL0E9zJEdnluFWqy7oBLIdldYGlCSjkjN1gkrMAExOJ1biGMqaSuQWRPr01KAfy2IxnHYX8%2BdkEVzSWVP07hao6BBwoMKn%2F0asYmYxI0FAobuppA%2BKiQpHavnrWtjQiU9NQxfyf6BiFdPyFMS%2FQDsqN&X-Amz-Signature=625908a8b56b63fe6719736ef7b29a4650c03960c128da2e6870640bbfa7b5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQWNYU6N%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5mWiuQGYdV3wKGZ4gRf41r6ooNSDv5jaeiFnJhygNVQIgAVw3z6yd%2BRLVxd1hNGWRMjdyE6yRKjLSyR8TBqpnXpQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqmRDDfzc8SSkN8NircA8QEVCV8mkccWtj6uNbeSmC7myeCCtMfAeYUQqiU464EXPMNQmHb82wI4aD2Lpvdcucpyw6C8ntyRdV4pOazcTs5ih9Qk4ymuqfNil5e02VV4WT%2FcwT%2FpdsiLa3eihv88K3SPYEt5sQSPlTNDGwQSAQS3OEIwRLrzEd2cdIcLbBDuobP4zOhBikcDBL4Uetn%2B%2BKOVJzv%2BWLlEhUaKCdgVe8vRWjQXAIos0DXSBmlxYl0jRLmjjeio8YS6sJHl%2FHyIxb%2FGQRjVe1rgLU676Nah5vuokfslOdYjsdCRmb7BSqLQBWU7IpPn2oGAcoKHiv4N2XzJyqOtn0GTFS08W30u2K8tKLkV1%2BaliP3PZXtxyDrLtPpex7yPQAFjXG7k8w5a3avEIGVkf2P2P3KlZhNBsTAn79z1NWe0NdSrUhuYSCAXFwmuV8KYBqzaHolPm5oPzkju1a%2FePWgtdVeWNQHWZ25wgSeH0N2B6MHv2FNG4o8cpVt%2FDptORM%2BEBXVypL9iHgLQIdGzyLNq5BktLfLfjplYGRBb5dLD0ly8aoELFJx9ETD0qq2dvWSANDIZLGffk51sCveEwtjcHf%2FB3Y4xiW43KIlTpS9jnJDusEHePB9nhnR0tsqMHnJdiRJMMy23skGOqUB3CUem9qtfc1nQbriftpTjppACZac9xMzLq9Spk5a%2F5DkQX4lwAOodu8S%2BbLBITJMTglh3bL0E9zJEdnluFWqy7oBLIdldYGlCSjkjN1gkrMAExOJ1biGMqaSuQWRPr01KAfy2IxnHYX8%2BdkEVzSWVP07hao6BBwoMKn%2F0asYmYxI0FAobuppA%2BKiQpHavnrWtjQiU9NQxfyf6BiFdPyFMS%2FQDsqN&X-Amz-Signature=3ec552486753bbdba5cde310f9aeb07658c24ee376b727ed482c5fb6619d0d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQWNYU6N%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5mWiuQGYdV3wKGZ4gRf41r6ooNSDv5jaeiFnJhygNVQIgAVw3z6yd%2BRLVxd1hNGWRMjdyE6yRKjLSyR8TBqpnXpQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqmRDDfzc8SSkN8NircA8QEVCV8mkccWtj6uNbeSmC7myeCCtMfAeYUQqiU464EXPMNQmHb82wI4aD2Lpvdcucpyw6C8ntyRdV4pOazcTs5ih9Qk4ymuqfNil5e02VV4WT%2FcwT%2FpdsiLa3eihv88K3SPYEt5sQSPlTNDGwQSAQS3OEIwRLrzEd2cdIcLbBDuobP4zOhBikcDBL4Uetn%2B%2BKOVJzv%2BWLlEhUaKCdgVe8vRWjQXAIos0DXSBmlxYl0jRLmjjeio8YS6sJHl%2FHyIxb%2FGQRjVe1rgLU676Nah5vuokfslOdYjsdCRmb7BSqLQBWU7IpPn2oGAcoKHiv4N2XzJyqOtn0GTFS08W30u2K8tKLkV1%2BaliP3PZXtxyDrLtPpex7yPQAFjXG7k8w5a3avEIGVkf2P2P3KlZhNBsTAn79z1NWe0NdSrUhuYSCAXFwmuV8KYBqzaHolPm5oPzkju1a%2FePWgtdVeWNQHWZ25wgSeH0N2B6MHv2FNG4o8cpVt%2FDptORM%2BEBXVypL9iHgLQIdGzyLNq5BktLfLfjplYGRBb5dLD0ly8aoELFJx9ETD0qq2dvWSANDIZLGffk51sCveEwtjcHf%2FB3Y4xiW43KIlTpS9jnJDusEHePB9nhnR0tsqMHnJdiRJMMy23skGOqUB3CUem9qtfc1nQbriftpTjppACZac9xMzLq9Spk5a%2F5DkQX4lwAOodu8S%2BbLBITJMTglh3bL0E9zJEdnluFWqy7oBLIdldYGlCSjkjN1gkrMAExOJ1biGMqaSuQWRPr01KAfy2IxnHYX8%2BdkEVzSWVP07hao6BBwoMKn%2F0asYmYxI0FAobuppA%2BKiQpHavnrWtjQiU9NQxfyf6BiFdPyFMS%2FQDsqN&X-Amz-Signature=2f44f3391ad786ff36e9792ba26c2692fb07f73a7a965865a4753451de8d41d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQWNYU6N%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5mWiuQGYdV3wKGZ4gRf41r6ooNSDv5jaeiFnJhygNVQIgAVw3z6yd%2BRLVxd1hNGWRMjdyE6yRKjLSyR8TBqpnXpQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqmRDDfzc8SSkN8NircA8QEVCV8mkccWtj6uNbeSmC7myeCCtMfAeYUQqiU464EXPMNQmHb82wI4aD2Lpvdcucpyw6C8ntyRdV4pOazcTs5ih9Qk4ymuqfNil5e02VV4WT%2FcwT%2FpdsiLa3eihv88K3SPYEt5sQSPlTNDGwQSAQS3OEIwRLrzEd2cdIcLbBDuobP4zOhBikcDBL4Uetn%2B%2BKOVJzv%2BWLlEhUaKCdgVe8vRWjQXAIos0DXSBmlxYl0jRLmjjeio8YS6sJHl%2FHyIxb%2FGQRjVe1rgLU676Nah5vuokfslOdYjsdCRmb7BSqLQBWU7IpPn2oGAcoKHiv4N2XzJyqOtn0GTFS08W30u2K8tKLkV1%2BaliP3PZXtxyDrLtPpex7yPQAFjXG7k8w5a3avEIGVkf2P2P3KlZhNBsTAn79z1NWe0NdSrUhuYSCAXFwmuV8KYBqzaHolPm5oPzkju1a%2FePWgtdVeWNQHWZ25wgSeH0N2B6MHv2FNG4o8cpVt%2FDptORM%2BEBXVypL9iHgLQIdGzyLNq5BktLfLfjplYGRBb5dLD0ly8aoELFJx9ETD0qq2dvWSANDIZLGffk51sCveEwtjcHf%2FB3Y4xiW43KIlTpS9jnJDusEHePB9nhnR0tsqMHnJdiRJMMy23skGOqUB3CUem9qtfc1nQbriftpTjppACZac9xMzLq9Spk5a%2F5DkQX4lwAOodu8S%2BbLBITJMTglh3bL0E9zJEdnluFWqy7oBLIdldYGlCSjkjN1gkrMAExOJ1biGMqaSuQWRPr01KAfy2IxnHYX8%2BdkEVzSWVP07hao6BBwoMKn%2F0asYmYxI0FAobuppA%2BKiQpHavnrWtjQiU9NQxfyf6BiFdPyFMS%2FQDsqN&X-Amz-Signature=636992ad8a337c1e44b8e13a6e140b29ccf1de42263a456bd4b4928271517cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAKYXOYZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8k4PdVJkure%2FRVlNGlATuCkGPHLfmGVyHhyKw%2FeUl5AIgVKeMvzNT6cWoW8IHht8vccJ7InC5tfrGnqvrB09gMyAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPr0nfgEb7%2BVwXWqECrcA8rnDyVkfCsYXbvBCMUe4kZh9v1fNrZE2N1bcbPmijh7jeC23g2F%2B4xwWuT4J5bjS%2B3IqjjOFL%2B4UwHL7b7lhCsa1is0tzpv6IOFjEQRxqcZxuEAMmte4uOXvUGcAPP9zptSGe75AObrCvZsampHF%2F8MWrvNgWo%2FR0wKcdnHvfTQT3Ts8h2YWA9n8CvIofuFxM7KyhqeRY5HhkEsNKTX2XDAyVo2iKrOhxyUtT6yNzjIfad4P8biha5yBxibi1doGoB5nUXrj4unvkdNjeByUjZ%2BTAU9tNbBTRp5dlXjfLVfvKOuhZsxOc0cnOjfhB4VHhABr%2BJkyZQBQQvy3uT8V9JmXA09AchWqQbA8Bp4b8FganswetGpR7dtxBPK%2BEzvX6%2BKLFd7EDf9%2FEgKQJREN1jRDQb3u0mRwDGIo52jUQwAvALROyg4bdIKEhKmVjkUgHoRzAhMQdU%2FcEYbjYkHDuP0qOXYSAgAgKMDs0kBZxRVAdpgbaMpinS%2Fn5BbJ7wVdO1Ccr3ya0R%2BiqcsClQdXWn4415coFttMmJCnIHySwDUbxEz7BmpWXqZL6Slrq58xXWAgkahsX32FfdDV0XbsBrmTl3yLKpNYlOm4i9WxpNS2L0zqR3gkE2GxPmcMN%2B23skGOqUBnUjQXRJvP5Svoxfi2HRODJqIxlOCPUYCvuNWnkoESug7kFlWDetwx5d6qtHGZgp5HnQftEk6RQcL1KJtSnq%2Btuab3Hl2J1R2J0bgrrWm8gg9ziuQ0z5lSPiZ1ucpltFjTn8SQ20uSGtE%2F6grs3LzPOebI8jWlAvLX1Aq%2FQjQVCNZRk2%2Fs4iAsNXaDWNr%2F3A8fd83YqEvx1p%2FZe0wLj80UCnq8S5F&X-Amz-Signature=14530a9a96546e33db171a569c4116072822c8573a37d9ad0f140a1e39f40241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

