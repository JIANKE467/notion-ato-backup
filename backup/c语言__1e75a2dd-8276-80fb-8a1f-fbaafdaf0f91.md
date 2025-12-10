
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLCWPPI%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIAFw3%2BK%2Fo1OZ0HNhPJXCakrb5nZ%2B5nSh%2Bg73G%2FPCY9dpAiEA99ErkzxhK5hPQUvpxD0VQl%2BcZ3LyD2B3JeTA7hPUl5cqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrkuqiKRW7QRJhtwSrcA9KP7xLilbvdrIdZPv6qssw2ppwbd8qnu3%2FvrQumRg1zG7UPctK%2BLFS8pz5BZzmTdbDSBIgl0gMZrotRhU2ARD8Zhh8RCpumxlc0orPXFv5WDU%2FIHXcHAFoK2Z%2FKMIUrlbqkUO9QIlXYGmrfQtCyZdIzGXE9w8ajNp7Z%2BTmJhmVq%2BLwSUMMqBz5Jl6RwBfLzvo50Hz0wi1PN%2BPKxNFpR7H6WzClKv5FCLsoCo7sd4Ci9eo55HJ3Cr6m5OQaEmIaACVWDO8j3fIxmaVd%2Fu%2FdzxmQCkKQzGmtBSm72Q47fCDu1kw0IAH%2Bhx2dQpPLLgdATZEXxw0WAXk26uDK%2F3S%2B56%2BdejCecrd%2FR4eBpo%2BaHj2H7GNWq51ujXY7P76bCyHAL6rIBpi8H208Yn61jka65p0Txl8VM2NYxb2RkaLDWwpczlG3EDgE%2BY3qnKY0AUjdaJ2z3wxDUD90Wq%2BaL3EAZZgeix%2Fy1T%2FY12RUDx7nJha3h0PdEs3GvT1Mw5sXS8V1A51so18eAHrH5Iul3yMuk4J9ict3YknmuezH2fr8DoDsrU2bS%2BIp9iKFca3Ttlpk3yo3VFmqtsPu5J6p4f3uojaeYz8pFFFThL9z6Kn13F%2B2DjbQErSoT9Pi3%2FdgzMLLK48kGOqUBgWn6%2Bag%2FVdUYSJmBYU91xaytUkUF8OKVimuJ6VziEs6ZpZYQrT8aVphI0UM47sy3F2c5BQL1u2o8nBO87Bq%2BN4M6qrO%2FiWGZ5htyLBOHqc1bNheShNljTTxE1zys5ctsmDgEkkNs5Pwrv61fnaTTGWxeMwuRlb0bcAFQk4%2FrTqRnpRs%2BInZTdB%2BllQwh5upvpos%2B0aGNBZ1bysjLG1xJcU7Sw24%2F&X-Amz-Signature=4a8cde59f5df02fada9314de11fa767d58fb36184037e70d408c6bd1eed9b046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OEWQGPB%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBMqUk4bUFbgqUtl2tcOwpbWqiReQUejB6oPMyaNBzuiAiAeKRroqHU%2BSJNCx05pa5%2FkGW4a3BPkxgIKSew1VkUILiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG483VHPEYtOo0bfDKtwDf0xBfYHGf%2BmKgZ3rRHdSoPANbCoN%2F74rMramkk3x64ZfydyfF5RpWcoJ5GzPDHD1GmU0NhV0Ez%2B%2FevDEd4sDG%2FYQA1STG5RyEHcCD6zkiDhKOmHSePxBHutuvugWPGoteOcLKgX1u22r1BKM02DvVJSk5UwB2ovaAA65uuT9YW7SHG538bhYvyMnlNr44Hegcb2tdDtnJ3Voy98SZyvsWlx%2Bj9hrAjphoWRs83FVfSz1JNCpZxla1IrgF%2FagCD5cgo1ZT6olULPWT4bzBqu0Ugx07zb2Z7LCpsk3fMLUqbp1CWKAh7X8tlHgJZsWUCTdcZLjeEdULCRT3EsWpMaSzm1DWAhK5defqcE72DoWY9DaNxIVD%2FaG9dSWACo5fNDdnTiuX7QaJcEHCwkqf%2BZ3oDYsFdyus4Hf656oEUTvW%2Bxq4e%2B5JVgPQVMqGYGk6GjdkSDF5%2Fg6QoHfXs9em38hlq6%2BoGKEAJZ1eHqkl%2BmjTf5LGqEKpNiPCxEueDSvdAUGLkWJn%2BdWq1Sx54EO4QH6yyvMUFScvvPCi1WkEpaJu9CRTej%2B8u88ldfRLnaVHiAtN%2F9U2Zn645vljkYrXSJxwPGA2zeJiyXC%2BosS18sd7a8rRqSlyCDmz5UWrzAwjMvjyQY6pgE%2FprA%2BWSJpeXmQbpKebZRFcvEDwxiXGru1GtmcPwxX16WuikjHA%2FoQJWcOCQ1iJszY6b6qCtw3O3Fc%2FOdVJ7YMYfD9yZRNOH%2FLCo424g6OEwy6%2BNFDsOllt%2FQxRCv4Va5LUtebJCOx0%2BhsM%2Fcd9xHJPhio9laV6uagsGPwnMuQ7afS5JORyAfnAqEIiWEMsXZYY%2BYkCtchQFj1j7aoXblGnvwwdJdb&X-Amz-Signature=5ba5ada892c77528f7c8b9fb59fb2204e041ea037005c52ce69a891c6e56edf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OEWQGPB%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBMqUk4bUFbgqUtl2tcOwpbWqiReQUejB6oPMyaNBzuiAiAeKRroqHU%2BSJNCx05pa5%2FkGW4a3BPkxgIKSew1VkUILiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG483VHPEYtOo0bfDKtwDf0xBfYHGf%2BmKgZ3rRHdSoPANbCoN%2F74rMramkk3x64ZfydyfF5RpWcoJ5GzPDHD1GmU0NhV0Ez%2B%2FevDEd4sDG%2FYQA1STG5RyEHcCD6zkiDhKOmHSePxBHutuvugWPGoteOcLKgX1u22r1BKM02DvVJSk5UwB2ovaAA65uuT9YW7SHG538bhYvyMnlNr44Hegcb2tdDtnJ3Voy98SZyvsWlx%2Bj9hrAjphoWRs83FVfSz1JNCpZxla1IrgF%2FagCD5cgo1ZT6olULPWT4bzBqu0Ugx07zb2Z7LCpsk3fMLUqbp1CWKAh7X8tlHgJZsWUCTdcZLjeEdULCRT3EsWpMaSzm1DWAhK5defqcE72DoWY9DaNxIVD%2FaG9dSWACo5fNDdnTiuX7QaJcEHCwkqf%2BZ3oDYsFdyus4Hf656oEUTvW%2Bxq4e%2B5JVgPQVMqGYGk6GjdkSDF5%2Fg6QoHfXs9em38hlq6%2BoGKEAJZ1eHqkl%2BmjTf5LGqEKpNiPCxEueDSvdAUGLkWJn%2BdWq1Sx54EO4QH6yyvMUFScvvPCi1WkEpaJu9CRTej%2B8u88ldfRLnaVHiAtN%2F9U2Zn645vljkYrXSJxwPGA2zeJiyXC%2BosS18sd7a8rRqSlyCDmz5UWrzAwjMvjyQY6pgE%2FprA%2BWSJpeXmQbpKebZRFcvEDwxiXGru1GtmcPwxX16WuikjHA%2FoQJWcOCQ1iJszY6b6qCtw3O3Fc%2FOdVJ7YMYfD9yZRNOH%2FLCo424g6OEwy6%2BNFDsOllt%2FQxRCv4Va5LUtebJCOx0%2BhsM%2Fcd9xHJPhio9laV6uagsGPwnMuQ7afS5JORyAfnAqEIiWEMsXZYY%2BYkCtchQFj1j7aoXblGnvwwdJdb&X-Amz-Signature=e98606880af45722a43468e755554de00578d03b4728592c0e299750f9ce4f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ2JZYL%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIFHKoSusi1SJGQkhgSusNfUJf0aUfP14ECFD59d%2BuBEUAiAKoPBar5bAbWtkYR3dFaYAHY3mwzaGxhtTJCNFtIFluyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeX0g%2B6EHIh%2FjpNVXKtwDL0%2BjPRMmO4DOuVeISw8Bnrl0kaBl9ZC31cXhbwwVj4zqm%2FPd9rmdraTfIK%2F28aZbAIDErkoJohTfPBlLpVm0hs8oX77AetwGj5otjPyVflWKPSSy6CKBYbFJrihmCbSaFrTP%2B0Xk0SwOdoCe%2FCPLyK9HKnOSrBW6LBmUBy%2BzQms0JgYsUPPlOy5DfRQRuTo9T7JfBE5BkPJTqxDeXkNu5kRRK%2B3Ag4E6FP8V%2BWF5EZ9ClJijWbR6Kss9Uo%2FiwpN9WnSiqNPrz%2F2HUzvbyz5pUK39gzYK%2Fk5ykQ%2BqHFHABTk2odYmsTfB5sLg4ygreGVlfUzKy3m%2FufOKzU2ikVrDEpWxGcyA1dMKJQlDcaiHBLUp8IVeVVjp2wknxHRkQryWLE2ykAGGZ%2BreO2rMyXyu9vt2rN3QhVDfylJagrpliqVmDnWWJybH8Kuo1x6%2B7H3hMw3C0wjbwVJt8HOLjkWVGYvihsqHOVn%2BHwjGcmLjl07qlBqA5iokboiaMDxiKSPGbMhUlrYtJTP3TJULIYk89%2FX1B%2FoPzRWQBCvDsOZwupeaZlGgN1f%2FNf21luIYCF%2B6pctg7gYCRVtsq8MGtbb%2BdrIRTbSDhWTamX0nXmG%2BC%2FO%2BayIXuXhKtnwNdecwkcrjyQY6pgE%2BJqK69djHj5WVlPSegehjD2QIU9YOeIs1HtQLuDk9HCfV79ua8vJOAA%2FdT03CZxJmdpb7EdoXCBpFfjeExtBA9dlY07orgqKFUJwlb2vMHxRfDk0rgUG%2FYDKX31b7rccRMILmtghUn0q7mn3DOvjnXlUwC9Ft9fZGYE51xfzRgNtoGMR7Tm%2BWVHHy9hyjrje4FTBZXdDAmNjMXNGmop5lDI%2FvIDdm&X-Amz-Signature=0a0d928120f21e7ca24a0465ab3692bdc3ac960a820b20ceb8c0347913e6af83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ2JZYL%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIFHKoSusi1SJGQkhgSusNfUJf0aUfP14ECFD59d%2BuBEUAiAKoPBar5bAbWtkYR3dFaYAHY3mwzaGxhtTJCNFtIFluyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeX0g%2B6EHIh%2FjpNVXKtwDL0%2BjPRMmO4DOuVeISw8Bnrl0kaBl9ZC31cXhbwwVj4zqm%2FPd9rmdraTfIK%2F28aZbAIDErkoJohTfPBlLpVm0hs8oX77AetwGj5otjPyVflWKPSSy6CKBYbFJrihmCbSaFrTP%2B0Xk0SwOdoCe%2FCPLyK9HKnOSrBW6LBmUBy%2BzQms0JgYsUPPlOy5DfRQRuTo9T7JfBE5BkPJTqxDeXkNu5kRRK%2B3Ag4E6FP8V%2BWF5EZ9ClJijWbR6Kss9Uo%2FiwpN9WnSiqNPrz%2F2HUzvbyz5pUK39gzYK%2Fk5ykQ%2BqHFHABTk2odYmsTfB5sLg4ygreGVlfUzKy3m%2FufOKzU2ikVrDEpWxGcyA1dMKJQlDcaiHBLUp8IVeVVjp2wknxHRkQryWLE2ykAGGZ%2BreO2rMyXyu9vt2rN3QhVDfylJagrpliqVmDnWWJybH8Kuo1x6%2B7H3hMw3C0wjbwVJt8HOLjkWVGYvihsqHOVn%2BHwjGcmLjl07qlBqA5iokboiaMDxiKSPGbMhUlrYtJTP3TJULIYk89%2FX1B%2FoPzRWQBCvDsOZwupeaZlGgN1f%2FNf21luIYCF%2B6pctg7gYCRVtsq8MGtbb%2BdrIRTbSDhWTamX0nXmG%2BC%2FO%2BayIXuXhKtnwNdecwkcrjyQY6pgE%2BJqK69djHj5WVlPSegehjD2QIU9YOeIs1HtQLuDk9HCfV79ua8vJOAA%2FdT03CZxJmdpb7EdoXCBpFfjeExtBA9dlY07orgqKFUJwlb2vMHxRfDk0rgUG%2FYDKX31b7rccRMILmtghUn0q7mn3DOvjnXlUwC9Ft9fZGYE51xfzRgNtoGMR7Tm%2BWVHHy9hyjrje4FTBZXdDAmNjMXNGmop5lDI%2FvIDdm&X-Amz-Signature=4eceee2d59fb16d61b69459be2442e45cdfceb25cb1bcd0d60176354d54c07c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ2JZYL%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIFHKoSusi1SJGQkhgSusNfUJf0aUfP14ECFD59d%2BuBEUAiAKoPBar5bAbWtkYR3dFaYAHY3mwzaGxhtTJCNFtIFluyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeX0g%2B6EHIh%2FjpNVXKtwDL0%2BjPRMmO4DOuVeISw8Bnrl0kaBl9ZC31cXhbwwVj4zqm%2FPd9rmdraTfIK%2F28aZbAIDErkoJohTfPBlLpVm0hs8oX77AetwGj5otjPyVflWKPSSy6CKBYbFJrihmCbSaFrTP%2B0Xk0SwOdoCe%2FCPLyK9HKnOSrBW6LBmUBy%2BzQms0JgYsUPPlOy5DfRQRuTo9T7JfBE5BkPJTqxDeXkNu5kRRK%2B3Ag4E6FP8V%2BWF5EZ9ClJijWbR6Kss9Uo%2FiwpN9WnSiqNPrz%2F2HUzvbyz5pUK39gzYK%2Fk5ykQ%2BqHFHABTk2odYmsTfB5sLg4ygreGVlfUzKy3m%2FufOKzU2ikVrDEpWxGcyA1dMKJQlDcaiHBLUp8IVeVVjp2wknxHRkQryWLE2ykAGGZ%2BreO2rMyXyu9vt2rN3QhVDfylJagrpliqVmDnWWJybH8Kuo1x6%2B7H3hMw3C0wjbwVJt8HOLjkWVGYvihsqHOVn%2BHwjGcmLjl07qlBqA5iokboiaMDxiKSPGbMhUlrYtJTP3TJULIYk89%2FX1B%2FoPzRWQBCvDsOZwupeaZlGgN1f%2FNf21luIYCF%2B6pctg7gYCRVtsq8MGtbb%2BdrIRTbSDhWTamX0nXmG%2BC%2FO%2BayIXuXhKtnwNdecwkcrjyQY6pgE%2BJqK69djHj5WVlPSegehjD2QIU9YOeIs1HtQLuDk9HCfV79ua8vJOAA%2FdT03CZxJmdpb7EdoXCBpFfjeExtBA9dlY07orgqKFUJwlb2vMHxRfDk0rgUG%2FYDKX31b7rccRMILmtghUn0q7mn3DOvjnXlUwC9Ft9fZGYE51xfzRgNtoGMR7Tm%2BWVHHy9hyjrje4FTBZXdDAmNjMXNGmop5lDI%2FvIDdm&X-Amz-Signature=c931dd3c5ab70269ad5a68c9d4439031a31113cbdfb0121197db21d7942496bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ2JZYL%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIFHKoSusi1SJGQkhgSusNfUJf0aUfP14ECFD59d%2BuBEUAiAKoPBar5bAbWtkYR3dFaYAHY3mwzaGxhtTJCNFtIFluyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeX0g%2B6EHIh%2FjpNVXKtwDL0%2BjPRMmO4DOuVeISw8Bnrl0kaBl9ZC31cXhbwwVj4zqm%2FPd9rmdraTfIK%2F28aZbAIDErkoJohTfPBlLpVm0hs8oX77AetwGj5otjPyVflWKPSSy6CKBYbFJrihmCbSaFrTP%2B0Xk0SwOdoCe%2FCPLyK9HKnOSrBW6LBmUBy%2BzQms0JgYsUPPlOy5DfRQRuTo9T7JfBE5BkPJTqxDeXkNu5kRRK%2B3Ag4E6FP8V%2BWF5EZ9ClJijWbR6Kss9Uo%2FiwpN9WnSiqNPrz%2F2HUzvbyz5pUK39gzYK%2Fk5ykQ%2BqHFHABTk2odYmsTfB5sLg4ygreGVlfUzKy3m%2FufOKzU2ikVrDEpWxGcyA1dMKJQlDcaiHBLUp8IVeVVjp2wknxHRkQryWLE2ykAGGZ%2BreO2rMyXyu9vt2rN3QhVDfylJagrpliqVmDnWWJybH8Kuo1x6%2B7H3hMw3C0wjbwVJt8HOLjkWVGYvihsqHOVn%2BHwjGcmLjl07qlBqA5iokboiaMDxiKSPGbMhUlrYtJTP3TJULIYk89%2FX1B%2FoPzRWQBCvDsOZwupeaZlGgN1f%2FNf21luIYCF%2B6pctg7gYCRVtsq8MGtbb%2BdrIRTbSDhWTamX0nXmG%2BC%2FO%2BayIXuXhKtnwNdecwkcrjyQY6pgE%2BJqK69djHj5WVlPSegehjD2QIU9YOeIs1HtQLuDk9HCfV79ua8vJOAA%2FdT03CZxJmdpb7EdoXCBpFfjeExtBA9dlY07orgqKFUJwlb2vMHxRfDk0rgUG%2FYDKX31b7rccRMILmtghUn0q7mn3DOvjnXlUwC9Ft9fZGYE51xfzRgNtoGMR7Tm%2BWVHHy9hyjrje4FTBZXdDAmNjMXNGmop5lDI%2FvIDdm&X-Amz-Signature=21cbe1dc908f2212f4f9cf9fc152c4fee21e3dd1faf88c14de4a15ee863a3be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ2JZYL%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIFHKoSusi1SJGQkhgSusNfUJf0aUfP14ECFD59d%2BuBEUAiAKoPBar5bAbWtkYR3dFaYAHY3mwzaGxhtTJCNFtIFluyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeX0g%2B6EHIh%2FjpNVXKtwDL0%2BjPRMmO4DOuVeISw8Bnrl0kaBl9ZC31cXhbwwVj4zqm%2FPd9rmdraTfIK%2F28aZbAIDErkoJohTfPBlLpVm0hs8oX77AetwGj5otjPyVflWKPSSy6CKBYbFJrihmCbSaFrTP%2B0Xk0SwOdoCe%2FCPLyK9HKnOSrBW6LBmUBy%2BzQms0JgYsUPPlOy5DfRQRuTo9T7JfBE5BkPJTqxDeXkNu5kRRK%2B3Ag4E6FP8V%2BWF5EZ9ClJijWbR6Kss9Uo%2FiwpN9WnSiqNPrz%2F2HUzvbyz5pUK39gzYK%2Fk5ykQ%2BqHFHABTk2odYmsTfB5sLg4ygreGVlfUzKy3m%2FufOKzU2ikVrDEpWxGcyA1dMKJQlDcaiHBLUp8IVeVVjp2wknxHRkQryWLE2ykAGGZ%2BreO2rMyXyu9vt2rN3QhVDfylJagrpliqVmDnWWJybH8Kuo1x6%2B7H3hMw3C0wjbwVJt8HOLjkWVGYvihsqHOVn%2BHwjGcmLjl07qlBqA5iokboiaMDxiKSPGbMhUlrYtJTP3TJULIYk89%2FX1B%2FoPzRWQBCvDsOZwupeaZlGgN1f%2FNf21luIYCF%2B6pctg7gYCRVtsq8MGtbb%2BdrIRTbSDhWTamX0nXmG%2BC%2FO%2BayIXuXhKtnwNdecwkcrjyQY6pgE%2BJqK69djHj5WVlPSegehjD2QIU9YOeIs1HtQLuDk9HCfV79ua8vJOAA%2FdT03CZxJmdpb7EdoXCBpFfjeExtBA9dlY07orgqKFUJwlb2vMHxRfDk0rgUG%2FYDKX31b7rccRMILmtghUn0q7mn3DOvjnXlUwC9Ft9fZGYE51xfzRgNtoGMR7Tm%2BWVHHy9hyjrje4FTBZXdDAmNjMXNGmop5lDI%2FvIDdm&X-Amz-Signature=02671702cec87152ead7bd85aaa8286067f1cbd583a3a90b7cc93f1ed1e69a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ2JZYL%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIFHKoSusi1SJGQkhgSusNfUJf0aUfP14ECFD59d%2BuBEUAiAKoPBar5bAbWtkYR3dFaYAHY3mwzaGxhtTJCNFtIFluyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeX0g%2B6EHIh%2FjpNVXKtwDL0%2BjPRMmO4DOuVeISw8Bnrl0kaBl9ZC31cXhbwwVj4zqm%2FPd9rmdraTfIK%2F28aZbAIDErkoJohTfPBlLpVm0hs8oX77AetwGj5otjPyVflWKPSSy6CKBYbFJrihmCbSaFrTP%2B0Xk0SwOdoCe%2FCPLyK9HKnOSrBW6LBmUBy%2BzQms0JgYsUPPlOy5DfRQRuTo9T7JfBE5BkPJTqxDeXkNu5kRRK%2B3Ag4E6FP8V%2BWF5EZ9ClJijWbR6Kss9Uo%2FiwpN9WnSiqNPrz%2F2HUzvbyz5pUK39gzYK%2Fk5ykQ%2BqHFHABTk2odYmsTfB5sLg4ygreGVlfUzKy3m%2FufOKzU2ikVrDEpWxGcyA1dMKJQlDcaiHBLUp8IVeVVjp2wknxHRkQryWLE2ykAGGZ%2BreO2rMyXyu9vt2rN3QhVDfylJagrpliqVmDnWWJybH8Kuo1x6%2B7H3hMw3C0wjbwVJt8HOLjkWVGYvihsqHOVn%2BHwjGcmLjl07qlBqA5iokboiaMDxiKSPGbMhUlrYtJTP3TJULIYk89%2FX1B%2FoPzRWQBCvDsOZwupeaZlGgN1f%2FNf21luIYCF%2B6pctg7gYCRVtsq8MGtbb%2BdrIRTbSDhWTamX0nXmG%2BC%2FO%2BayIXuXhKtnwNdecwkcrjyQY6pgE%2BJqK69djHj5WVlPSegehjD2QIU9YOeIs1HtQLuDk9HCfV79ua8vJOAA%2FdT03CZxJmdpb7EdoXCBpFfjeExtBA9dlY07orgqKFUJwlb2vMHxRfDk0rgUG%2FYDKX31b7rccRMILmtghUn0q7mn3DOvjnXlUwC9Ft9fZGYE51xfzRgNtoGMR7Tm%2BWVHHy9hyjrje4FTBZXdDAmNjMXNGmop5lDI%2FvIDdm&X-Amz-Signature=3d6ae4021ef4ba9488fd38b7303079791bc45c6ba556b5a6bfb5efa31ebce9f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ2JZYL%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIFHKoSusi1SJGQkhgSusNfUJf0aUfP14ECFD59d%2BuBEUAiAKoPBar5bAbWtkYR3dFaYAHY3mwzaGxhtTJCNFtIFluyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeX0g%2B6EHIh%2FjpNVXKtwDL0%2BjPRMmO4DOuVeISw8Bnrl0kaBl9ZC31cXhbwwVj4zqm%2FPd9rmdraTfIK%2F28aZbAIDErkoJohTfPBlLpVm0hs8oX77AetwGj5otjPyVflWKPSSy6CKBYbFJrihmCbSaFrTP%2B0Xk0SwOdoCe%2FCPLyK9HKnOSrBW6LBmUBy%2BzQms0JgYsUPPlOy5DfRQRuTo9T7JfBE5BkPJTqxDeXkNu5kRRK%2B3Ag4E6FP8V%2BWF5EZ9ClJijWbR6Kss9Uo%2FiwpN9WnSiqNPrz%2F2HUzvbyz5pUK39gzYK%2Fk5ykQ%2BqHFHABTk2odYmsTfB5sLg4ygreGVlfUzKy3m%2FufOKzU2ikVrDEpWxGcyA1dMKJQlDcaiHBLUp8IVeVVjp2wknxHRkQryWLE2ykAGGZ%2BreO2rMyXyu9vt2rN3QhVDfylJagrpliqVmDnWWJybH8Kuo1x6%2B7H3hMw3C0wjbwVJt8HOLjkWVGYvihsqHOVn%2BHwjGcmLjl07qlBqA5iokboiaMDxiKSPGbMhUlrYtJTP3TJULIYk89%2FX1B%2FoPzRWQBCvDsOZwupeaZlGgN1f%2FNf21luIYCF%2B6pctg7gYCRVtsq8MGtbb%2BdrIRTbSDhWTamX0nXmG%2BC%2FO%2BayIXuXhKtnwNdecwkcrjyQY6pgE%2BJqK69djHj5WVlPSegehjD2QIU9YOeIs1HtQLuDk9HCfV79ua8vJOAA%2FdT03CZxJmdpb7EdoXCBpFfjeExtBA9dlY07orgqKFUJwlb2vMHxRfDk0rgUG%2FYDKX31b7rccRMILmtghUn0q7mn3DOvjnXlUwC9Ft9fZGYE51xfzRgNtoGMR7Tm%2BWVHHy9hyjrje4FTBZXdDAmNjMXNGmop5lDI%2FvIDdm&X-Amz-Signature=939c445e491111d2ea7c8e971f0faa0a9d1094e85bf821ed13e355637ffd038f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PE5O4EY%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCqpeSdr18ScrOjLmexXVJ3wJLN8JOwRs8rjILACFfeoAIgKvI7G3ahXr45Q3QSvILQWpS6JIjtGx6%2BXVaeyYZ8u2sqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYjsfIdz5B5JLd3vircAzN89FJ2lG7ApSpw31%2BThtPAUSsbMAcl%2BDlroVRuOCQGvOjUYWrMV80pJI4MW4WtQXdHGZLCx%2Bm%2BMuULpw%2FdVjCZnq1su5dIMW0ZPZOVtxUXffbweMcB3DQYHOm%2B1G%2FUrvhfYVPstQeY4Y37oRR1zgIQAM6jSEEUhRxSh6%2FlYu8DO32tyucrV5AAP06YMvT9%2Fp8qIzyXBRZrL5%2FYh1UDfnEz10P4BjqBrNRdZSAJQkFGssSNX12KdD2gsy5BYrXpqQJNz9Cs%2Fs0kuIr6K64pLUpInD3PN2YF3II7Ivmmk8UR%2FQB99kulGnp4gJt5vG8hVIm03ESBmDCIoogUWXB%2FuCxTvpywayy0GlTxCIaIUy5o0wRTU8CRhVsc91wlB5zhuCVSyqQTqrYE3v3wZvF7StsrLiHGf3PrTefZJPXY8YEz2JfQOH%2BhY%2BeWFhL8eLAU3rAEebOdq2FY1OyKnlIaIgFR29WIl2WoLLb%2B40xuLCInUANoGcm4CseFaH85LpUzu4lrkkdIpCoYpAoCvjCgZ61D%2BvP%2BA9f6eqj1fKyIxgM5O1%2B9zyVWxEK%2FxdG6AJgmRm3ChlsIMDWYN5mKzXQ0Y1Xm3NIxphZllu%2FLi%2BluNAVBG1VM9j9Nvc%2F7yma5MJLK48kGOqUB9ze7eYDB8gjePRxFolKvo18McSlrRR5cWkLhr5ydyuzRCkidN9aGmkAJS17c0zv4qBAqg7LRpeN5Yk3xA1SmIY95CgsCol2nJqfM6G%2B4ZnoLpL7rS%2BcROuDFndveCyUOfqv5CChulQjWtoJmgMX3z%2BPZy6P8rW5lyE9Cwcs79LiymbQ7ULjYi1DRvi8Pj9RGkgb6lq87cAdcpTa3q2ZO7bd%2BmIpE&X-Amz-Signature=c4e0d8aa65c774af89bc51fb1436838270984034470c6cdff38ee510e18180c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PE5O4EY%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCqpeSdr18ScrOjLmexXVJ3wJLN8JOwRs8rjILACFfeoAIgKvI7G3ahXr45Q3QSvILQWpS6JIjtGx6%2BXVaeyYZ8u2sqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYjsfIdz5B5JLd3vircAzN89FJ2lG7ApSpw31%2BThtPAUSsbMAcl%2BDlroVRuOCQGvOjUYWrMV80pJI4MW4WtQXdHGZLCx%2Bm%2BMuULpw%2FdVjCZnq1su5dIMW0ZPZOVtxUXffbweMcB3DQYHOm%2B1G%2FUrvhfYVPstQeY4Y37oRR1zgIQAM6jSEEUhRxSh6%2FlYu8DO32tyucrV5AAP06YMvT9%2Fp8qIzyXBRZrL5%2FYh1UDfnEz10P4BjqBrNRdZSAJQkFGssSNX12KdD2gsy5BYrXpqQJNz9Cs%2Fs0kuIr6K64pLUpInD3PN2YF3II7Ivmmk8UR%2FQB99kulGnp4gJt5vG8hVIm03ESBmDCIoogUWXB%2FuCxTvpywayy0GlTxCIaIUy5o0wRTU8CRhVsc91wlB5zhuCVSyqQTqrYE3v3wZvF7StsrLiHGf3PrTefZJPXY8YEz2JfQOH%2BhY%2BeWFhL8eLAU3rAEebOdq2FY1OyKnlIaIgFR29WIl2WoLLb%2B40xuLCInUANoGcm4CseFaH85LpUzu4lrkkdIpCoYpAoCvjCgZ61D%2BvP%2BA9f6eqj1fKyIxgM5O1%2B9zyVWxEK%2FxdG6AJgmRm3ChlsIMDWYN5mKzXQ0Y1Xm3NIxphZllu%2FLi%2BluNAVBG1VM9j9Nvc%2F7yma5MJLK48kGOqUB9ze7eYDB8gjePRxFolKvo18McSlrRR5cWkLhr5ydyuzRCkidN9aGmkAJS17c0zv4qBAqg7LRpeN5Yk3xA1SmIY95CgsCol2nJqfM6G%2B4ZnoLpL7rS%2BcROuDFndveCyUOfqv5CChulQjWtoJmgMX3z%2BPZy6P8rW5lyE9Cwcs79LiymbQ7ULjYi1DRvi8Pj9RGkgb6lq87cAdcpTa3q2ZO7bd%2BmIpE&X-Amz-Signature=42ec3cee0d60355a2b1f523121f33889bf43adbd0db14c2ce44caf5717d24788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PE5O4EY%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCqpeSdr18ScrOjLmexXVJ3wJLN8JOwRs8rjILACFfeoAIgKvI7G3ahXr45Q3QSvILQWpS6JIjtGx6%2BXVaeyYZ8u2sqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYjsfIdz5B5JLd3vircAzN89FJ2lG7ApSpw31%2BThtPAUSsbMAcl%2BDlroVRuOCQGvOjUYWrMV80pJI4MW4WtQXdHGZLCx%2Bm%2BMuULpw%2FdVjCZnq1su5dIMW0ZPZOVtxUXffbweMcB3DQYHOm%2B1G%2FUrvhfYVPstQeY4Y37oRR1zgIQAM6jSEEUhRxSh6%2FlYu8DO32tyucrV5AAP06YMvT9%2Fp8qIzyXBRZrL5%2FYh1UDfnEz10P4BjqBrNRdZSAJQkFGssSNX12KdD2gsy5BYrXpqQJNz9Cs%2Fs0kuIr6K64pLUpInD3PN2YF3II7Ivmmk8UR%2FQB99kulGnp4gJt5vG8hVIm03ESBmDCIoogUWXB%2FuCxTvpywayy0GlTxCIaIUy5o0wRTU8CRhVsc91wlB5zhuCVSyqQTqrYE3v3wZvF7StsrLiHGf3PrTefZJPXY8YEz2JfQOH%2BhY%2BeWFhL8eLAU3rAEebOdq2FY1OyKnlIaIgFR29WIl2WoLLb%2B40xuLCInUANoGcm4CseFaH85LpUzu4lrkkdIpCoYpAoCvjCgZ61D%2BvP%2BA9f6eqj1fKyIxgM5O1%2B9zyVWxEK%2FxdG6AJgmRm3ChlsIMDWYN5mKzXQ0Y1Xm3NIxphZllu%2FLi%2BluNAVBG1VM9j9Nvc%2F7yma5MJLK48kGOqUB9ze7eYDB8gjePRxFolKvo18McSlrRR5cWkLhr5ydyuzRCkidN9aGmkAJS17c0zv4qBAqg7LRpeN5Yk3xA1SmIY95CgsCol2nJqfM6G%2B4ZnoLpL7rS%2BcROuDFndveCyUOfqv5CChulQjWtoJmgMX3z%2BPZy6P8rW5lyE9Cwcs79LiymbQ7ULjYi1DRvi8Pj9RGkgb6lq87cAdcpTa3q2ZO7bd%2BmIpE&X-Amz-Signature=d91c736cd8a8863c7cce865e65b6d8c8d4cc5cc001be2a323232de04d2d5c24c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PE5O4EY%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCqpeSdr18ScrOjLmexXVJ3wJLN8JOwRs8rjILACFfeoAIgKvI7G3ahXr45Q3QSvILQWpS6JIjtGx6%2BXVaeyYZ8u2sqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYjsfIdz5B5JLd3vircAzN89FJ2lG7ApSpw31%2BThtPAUSsbMAcl%2BDlroVRuOCQGvOjUYWrMV80pJI4MW4WtQXdHGZLCx%2Bm%2BMuULpw%2FdVjCZnq1su5dIMW0ZPZOVtxUXffbweMcB3DQYHOm%2B1G%2FUrvhfYVPstQeY4Y37oRR1zgIQAM6jSEEUhRxSh6%2FlYu8DO32tyucrV5AAP06YMvT9%2Fp8qIzyXBRZrL5%2FYh1UDfnEz10P4BjqBrNRdZSAJQkFGssSNX12KdD2gsy5BYrXpqQJNz9Cs%2Fs0kuIr6K64pLUpInD3PN2YF3II7Ivmmk8UR%2FQB99kulGnp4gJt5vG8hVIm03ESBmDCIoogUWXB%2FuCxTvpywayy0GlTxCIaIUy5o0wRTU8CRhVsc91wlB5zhuCVSyqQTqrYE3v3wZvF7StsrLiHGf3PrTefZJPXY8YEz2JfQOH%2BhY%2BeWFhL8eLAU3rAEebOdq2FY1OyKnlIaIgFR29WIl2WoLLb%2B40xuLCInUANoGcm4CseFaH85LpUzu4lrkkdIpCoYpAoCvjCgZ61D%2BvP%2BA9f6eqj1fKyIxgM5O1%2B9zyVWxEK%2FxdG6AJgmRm3ChlsIMDWYN5mKzXQ0Y1Xm3NIxphZllu%2FLi%2BluNAVBG1VM9j9Nvc%2F7yma5MJLK48kGOqUB9ze7eYDB8gjePRxFolKvo18McSlrRR5cWkLhr5ydyuzRCkidN9aGmkAJS17c0zv4qBAqg7LRpeN5Yk3xA1SmIY95CgsCol2nJqfM6G%2B4ZnoLpL7rS%2BcROuDFndveCyUOfqv5CChulQjWtoJmgMX3z%2BPZy6P8rW5lyE9Cwcs79LiymbQ7ULjYi1DRvi8Pj9RGkgb6lq87cAdcpTa3q2ZO7bd%2BmIpE&X-Amz-Signature=f68dcda110c069b350b242641fd04aa40f0907ea8e5d3a381299b3b600240cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PE5O4EY%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCqpeSdr18ScrOjLmexXVJ3wJLN8JOwRs8rjILACFfeoAIgKvI7G3ahXr45Q3QSvILQWpS6JIjtGx6%2BXVaeyYZ8u2sqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYjsfIdz5B5JLd3vircAzN89FJ2lG7ApSpw31%2BThtPAUSsbMAcl%2BDlroVRuOCQGvOjUYWrMV80pJI4MW4WtQXdHGZLCx%2Bm%2BMuULpw%2FdVjCZnq1su5dIMW0ZPZOVtxUXffbweMcB3DQYHOm%2B1G%2FUrvhfYVPstQeY4Y37oRR1zgIQAM6jSEEUhRxSh6%2FlYu8DO32tyucrV5AAP06YMvT9%2Fp8qIzyXBRZrL5%2FYh1UDfnEz10P4BjqBrNRdZSAJQkFGssSNX12KdD2gsy5BYrXpqQJNz9Cs%2Fs0kuIr6K64pLUpInD3PN2YF3II7Ivmmk8UR%2FQB99kulGnp4gJt5vG8hVIm03ESBmDCIoogUWXB%2FuCxTvpywayy0GlTxCIaIUy5o0wRTU8CRhVsc91wlB5zhuCVSyqQTqrYE3v3wZvF7StsrLiHGf3PrTefZJPXY8YEz2JfQOH%2BhY%2BeWFhL8eLAU3rAEebOdq2FY1OyKnlIaIgFR29WIl2WoLLb%2B40xuLCInUANoGcm4CseFaH85LpUzu4lrkkdIpCoYpAoCvjCgZ61D%2BvP%2BA9f6eqj1fKyIxgM5O1%2B9zyVWxEK%2FxdG6AJgmRm3ChlsIMDWYN5mKzXQ0Y1Xm3NIxphZllu%2FLi%2BluNAVBG1VM9j9Nvc%2F7yma5MJLK48kGOqUB9ze7eYDB8gjePRxFolKvo18McSlrRR5cWkLhr5ydyuzRCkidN9aGmkAJS17c0zv4qBAqg7LRpeN5Yk3xA1SmIY95CgsCol2nJqfM6G%2B4ZnoLpL7rS%2BcROuDFndveCyUOfqv5CChulQjWtoJmgMX3z%2BPZy6P8rW5lyE9Cwcs79LiymbQ7ULjYi1DRvi8Pj9RGkgb6lq87cAdcpTa3q2ZO7bd%2BmIpE&X-Amz-Signature=6570fb49fc93fde2a77535f9f8f273cc5f2cf62e238993b682b940c79ebb3589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5HWUQLE%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBbKGhobphD2xCgjQdT5p2sU%2F0SZsjfj8GcxXe%2BvTJVoAiEA410NW5geKAQom15sfTc58bF5WkpLjLKlcmCMYUmhFmwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAev1FuC%2BLyR71Bn0ircA%2FZwlpCCI5qW8mEwDOJdkD1MAyfot6zaJP5uP%2BDik9eSkN8a0CvHxfBMXrMHU%2Bobj0YtTcj35LWtjjUTpmhi%2BkrIHvftSeJ%2Blpgj8VdSWv4aKfKGvyBECopzq9PHpABwLl2kmnTKVH0x4rARYhBPT4s2ly1pxCtWUUYkizWscaq1Rj9h9gv4Xy0e53Me5mN%2BiAPnHzR7EDHZvLsySFdR3%2Bgw4Ha7r8LMQZWy5OB8Vh0jclKgSuk7UnkdDVvXmngzvkWvnYe8DggQqrSgd5xTwhSjf2NeyaoVraNMF5ZoVugJC5zfixdunT%2FtySY5l9%2Fv30S77yu9hzEsyTrYwn7mAhNkFEopvJLRkkfjrIJQcb%2F7agQiJyDADAj6jhei5KrK9UHH15ZPJOHw%2ByECVw7TqD3XtGmEm1ngUfshgxdxnhVRFZk7c9RYeDknKFSJbNKy34D9jP%2B1ZLpMjUskSc85egyPgRLpJx4AMjkTwsXE%2B482qGKiSjb5Z1PezjEmo8t2D0B4aWiT2rbmriHIb%2FQR6KPQ3RX1cx7MVaRfCHVaiyu0PmAqZK3FBtfyJhN7t6A0xeDZEw%2BNxAV76ZCscUVmqx%2FNG5TTR3SYm4YQVSCuSJ5WM9BrgKSQfqFOdVMiMLLK48kGOqUBF7TwUX%2FyAewYRG4%2BFaXWLbnhuXHdkV2RUaIDaaxfqPIunZPSAmEfRS31DEHpEhgw6U%2Fxz3HkA%2BoveQa237rjGdrLLMRcaBukrl8bg%2FCR0em3hRnMo8qfgVIxz%2Bh4rqpV%2FPknUWkyKrB8Zq8IyPmfeKm%2Fs6TNjYlEpxvMX9L3iLx4yKSjnPODYEcpM0kLWY9CP07St4RLqVmaMklyai3jlvvDZXBY&X-Amz-Signature=d11410fb9b5419bdb94e3d42c8a51f2d71d98cbc370afa4172a0239a9841e79b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5HWUQLE%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBbKGhobphD2xCgjQdT5p2sU%2F0SZsjfj8GcxXe%2BvTJVoAiEA410NW5geKAQom15sfTc58bF5WkpLjLKlcmCMYUmhFmwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAev1FuC%2BLyR71Bn0ircA%2FZwlpCCI5qW8mEwDOJdkD1MAyfot6zaJP5uP%2BDik9eSkN8a0CvHxfBMXrMHU%2Bobj0YtTcj35LWtjjUTpmhi%2BkrIHvftSeJ%2Blpgj8VdSWv4aKfKGvyBECopzq9PHpABwLl2kmnTKVH0x4rARYhBPT4s2ly1pxCtWUUYkizWscaq1Rj9h9gv4Xy0e53Me5mN%2BiAPnHzR7EDHZvLsySFdR3%2Bgw4Ha7r8LMQZWy5OB8Vh0jclKgSuk7UnkdDVvXmngzvkWvnYe8DggQqrSgd5xTwhSjf2NeyaoVraNMF5ZoVugJC5zfixdunT%2FtySY5l9%2Fv30S77yu9hzEsyTrYwn7mAhNkFEopvJLRkkfjrIJQcb%2F7agQiJyDADAj6jhei5KrK9UHH15ZPJOHw%2ByECVw7TqD3XtGmEm1ngUfshgxdxnhVRFZk7c9RYeDknKFSJbNKy34D9jP%2B1ZLpMjUskSc85egyPgRLpJx4AMjkTwsXE%2B482qGKiSjb5Z1PezjEmo8t2D0B4aWiT2rbmriHIb%2FQR6KPQ3RX1cx7MVaRfCHVaiyu0PmAqZK3FBtfyJhN7t6A0xeDZEw%2BNxAV76ZCscUVmqx%2FNG5TTR3SYm4YQVSCuSJ5WM9BrgKSQfqFOdVMiMLLK48kGOqUBF7TwUX%2FyAewYRG4%2BFaXWLbnhuXHdkV2RUaIDaaxfqPIunZPSAmEfRS31DEHpEhgw6U%2Fxz3HkA%2BoveQa237rjGdrLLMRcaBukrl8bg%2FCR0em3hRnMo8qfgVIxz%2Bh4rqpV%2FPknUWkyKrB8Zq8IyPmfeKm%2Fs6TNjYlEpxvMX9L3iLx4yKSjnPODYEcpM0kLWY9CP07St4RLqVmaMklyai3jlvvDZXBY&X-Amz-Signature=73d798047af194d581f2f7bec5be0ca9ff57a3faa13dab0b5465b8af045fbcf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5HWUQLE%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBbKGhobphD2xCgjQdT5p2sU%2F0SZsjfj8GcxXe%2BvTJVoAiEA410NW5geKAQom15sfTc58bF5WkpLjLKlcmCMYUmhFmwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAev1FuC%2BLyR71Bn0ircA%2FZwlpCCI5qW8mEwDOJdkD1MAyfot6zaJP5uP%2BDik9eSkN8a0CvHxfBMXrMHU%2Bobj0YtTcj35LWtjjUTpmhi%2BkrIHvftSeJ%2Blpgj8VdSWv4aKfKGvyBECopzq9PHpABwLl2kmnTKVH0x4rARYhBPT4s2ly1pxCtWUUYkizWscaq1Rj9h9gv4Xy0e53Me5mN%2BiAPnHzR7EDHZvLsySFdR3%2Bgw4Ha7r8LMQZWy5OB8Vh0jclKgSuk7UnkdDVvXmngzvkWvnYe8DggQqrSgd5xTwhSjf2NeyaoVraNMF5ZoVugJC5zfixdunT%2FtySY5l9%2Fv30S77yu9hzEsyTrYwn7mAhNkFEopvJLRkkfjrIJQcb%2F7agQiJyDADAj6jhei5KrK9UHH15ZPJOHw%2ByECVw7TqD3XtGmEm1ngUfshgxdxnhVRFZk7c9RYeDknKFSJbNKy34D9jP%2B1ZLpMjUskSc85egyPgRLpJx4AMjkTwsXE%2B482qGKiSjb5Z1PezjEmo8t2D0B4aWiT2rbmriHIb%2FQR6KPQ3RX1cx7MVaRfCHVaiyu0PmAqZK3FBtfyJhN7t6A0xeDZEw%2BNxAV76ZCscUVmqx%2FNG5TTR3SYm4YQVSCuSJ5WM9BrgKSQfqFOdVMiMLLK48kGOqUBF7TwUX%2FyAewYRG4%2BFaXWLbnhuXHdkV2RUaIDaaxfqPIunZPSAmEfRS31DEHpEhgw6U%2Fxz3HkA%2BoveQa237rjGdrLLMRcaBukrl8bg%2FCR0em3hRnMo8qfgVIxz%2Bh4rqpV%2FPknUWkyKrB8Zq8IyPmfeKm%2Fs6TNjYlEpxvMX9L3iLx4yKSjnPODYEcpM0kLWY9CP07St4RLqVmaMklyai3jlvvDZXBY&X-Amz-Signature=5492160142f31a69324edc36c18370716282926674f5739253d0421fc93d57bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZND7XV%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCFe1zMevaALvObXvEuBiDHd1owVeyQqjZNyqXdmpR2cAIhANtsqjaM5azes3uxZFMFEeMb%2FOw9vyf8EyQeVDX7wPqJKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycrVQGRIc1O3CNfPcq3AM7qNfE5V%2BlotxWjIZeiABn0juPSqPvYhIQYleYsr1YLx0Sr5JCSTzceckjFetApPrs%2BBfTP%2FXdiGHezxiT7PPKEd8rXSLvzWcJ%2BVEX3uZR5ejP4nWuUpsamtCnQHDbZ45N5cMRUWMNOYpFsnkVli4a2TehNJz7cPtGc%2BtWxQ6Pfmza881t9tFlBd2SA9freH9vD%2BWOTCl5pN80EyrvH5rYiUasczZqvKiSoHo94VBHppHYoIV82I%2Bwfb3a9%2FXsH4Eka5g7XS2R21pszbF6keplZ5h3ifhwIbNvz46qRtCIjp3qSToRJboF4b%2BgCmht5lMwyCdJGww4YOeMfkRBy%2Feg2DCWP30GZDh5fd3rlWzQECy8qu3KKaldKtEK4BbiRx7LbcDeO3jaYpS0EJgXjleqGb2tt7jrpZgFWp9JeF9NM45E22LFkBjTz5atfZiNvxoyyBQMu0k1eCzj9tKnVWy7zAf1LcZvTAxAhjcaZKDhXfmAMhO%2B96rbcoNzm4J2rH2PEuxTHUICW8Mgo5AZ6X%2F5imMdCWEDWfXarAvf275Q02QW%2FTP5KF5EuYww54%2FyxtCFkEsuUkUXx47y9rCZn2Ql1souRDnL1U5zb6FxTxGgpyIVFXV3yCLHVHmfJDCMy%2BPJBjqkAVH4GHHz4Mhsj725mKbxv7f2rTyEVxRxBbqXdFsEs%2BLMTOUflUQ08lSUmcdDWDiR0eMEZ8mIhbhcZz9JA3ErwlFwmJ4Wxb%2B%2BKSzb6o1F%2B5KGYo8bkb3k16D146wPIM97fKPGlzJX3THc3Gk252Lpuo0nqtLPQVAqConSE8mY3VrNRkvrJLmF7FGOXgJetx6cGLvUP8Gu%2BWp1aAkD6675c4IxY%2Baf&X-Amz-Signature=ad50bbe86193b50f99765abc56767aac9298a47b2274286c21cbd58f70646232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZND7XV%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCFe1zMevaALvObXvEuBiDHd1owVeyQqjZNyqXdmpR2cAIhANtsqjaM5azes3uxZFMFEeMb%2FOw9vyf8EyQeVDX7wPqJKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycrVQGRIc1O3CNfPcq3AM7qNfE5V%2BlotxWjIZeiABn0juPSqPvYhIQYleYsr1YLx0Sr5JCSTzceckjFetApPrs%2BBfTP%2FXdiGHezxiT7PPKEd8rXSLvzWcJ%2BVEX3uZR5ejP4nWuUpsamtCnQHDbZ45N5cMRUWMNOYpFsnkVli4a2TehNJz7cPtGc%2BtWxQ6Pfmza881t9tFlBd2SA9freH9vD%2BWOTCl5pN80EyrvH5rYiUasczZqvKiSoHo94VBHppHYoIV82I%2Bwfb3a9%2FXsH4Eka5g7XS2R21pszbF6keplZ5h3ifhwIbNvz46qRtCIjp3qSToRJboF4b%2BgCmht5lMwyCdJGww4YOeMfkRBy%2Feg2DCWP30GZDh5fd3rlWzQECy8qu3KKaldKtEK4BbiRx7LbcDeO3jaYpS0EJgXjleqGb2tt7jrpZgFWp9JeF9NM45E22LFkBjTz5atfZiNvxoyyBQMu0k1eCzj9tKnVWy7zAf1LcZvTAxAhjcaZKDhXfmAMhO%2B96rbcoNzm4J2rH2PEuxTHUICW8Mgo5AZ6X%2F5imMdCWEDWfXarAvf275Q02QW%2FTP5KF5EuYww54%2FyxtCFkEsuUkUXx47y9rCZn2Ql1souRDnL1U5zb6FxTxGgpyIVFXV3yCLHVHmfJDCMy%2BPJBjqkAVH4GHHz4Mhsj725mKbxv7f2rTyEVxRxBbqXdFsEs%2BLMTOUflUQ08lSUmcdDWDiR0eMEZ8mIhbhcZz9JA3ErwlFwmJ4Wxb%2B%2BKSzb6o1F%2B5KGYo8bkb3k16D146wPIM97fKPGlzJX3THc3Gk252Lpuo0nqtLPQVAqConSE8mY3VrNRkvrJLmF7FGOXgJetx6cGLvUP8Gu%2BWp1aAkD6675c4IxY%2Baf&X-Amz-Signature=604584eb487dc928ad4e57cc0d36872d80d1f2897333302f38a68cb27d17a11b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3KKYHQU%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIEhOWFbiFlU22WATOsv%2B3BrpdsBzU6vHYKqzWwaTxBrJAiEArOFeO1vChBSUmaCxpwANO1WCvTiaSjyTgGyL2jMNoN4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjhW7dMegQsTfl1FircA5nSj6294T07g4f9uBzRiHOamasjWIJgqFBNmtpCMGrwU7V8TuL0PQ8KlfEBs%2Ffhr8PzWfzx8sxkU4B62nXsXBDUnHA8U0d%2Ba%2FUBC8692daqBq7qk9YnBRfzbkk4rlXymop6z5fa2cI%2BdRb8EAnbMWYa1O6792qFXdFMNa8StZxCI4COPH6U4DIrcjcBl5QN5mA7nID2s6mEO5BArXPX83QK794gJB2dup9fM%2BursnKLS%2BOhzI%2BZ2FdQoLPCgyTH4buNDkzirFmMXGGlVLYs%2FsBmqv5QNzpThC7Q7HYv8Pa%2FXKN47vxu3cng8izwptmeVWHvwvkQUGuTX3woPePZ02xbIiFwP%2BUoBE%2FtD%2FpE0nYxSrIZYQOTaAJ6k1DBPSJYdCy5p6hc3bwx%2BtW7oTkkdegOFHZH0b8g%2Bespxj%2F9gx8rKC%2Bj8KmSW9W3JRYZT%2F6EG%2FyB5wELJ86UEX4XYyoHXzSzic9Vzz1jsPyL7pQVHDCrsZylxWMS%2BLZRZYXbBapy7BqBYs%2FKGHcXGUcQO8ALwN76QgYTRKROxiuCgqNepb56pjuhGH3RBDslr9SycQFpxw5wqACJx1p7SoTgSzAmgcN%2FR5Bss5SCi1kH4FvRWsdVgU6IGnzbqr9lXTGmMJHK48kGOqUBJOxUH8yaCUvYKFNGAJ%2FUvmqiDcewjmy%2FVpSkvmBp4k8GR%2FmaJq%2BfGmz8f0PNiIPfIJyCc%2FvGeXWAtDl88Rl4naxt6rQJm9NKaZblIO4VNU1%2BezEtT0b7y6O%2FVWBB%2FaDL3rqnQ9kP%2BhmPoHZDT9OqzL%2B5ka9Io%2FyRl0W%2FxegkStV4U9btN%2Fi6NF1NOZhT2f1mSmrXdN%2FecCyfUYRPPdbIToJeQlCB&X-Amz-Signature=b70c13e20bf09ab1facbf9f1e6fe1824649b3381836fffc67b3734bafef184ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3KKYHQU%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIEhOWFbiFlU22WATOsv%2B3BrpdsBzU6vHYKqzWwaTxBrJAiEArOFeO1vChBSUmaCxpwANO1WCvTiaSjyTgGyL2jMNoN4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjhW7dMegQsTfl1FircA5nSj6294T07g4f9uBzRiHOamasjWIJgqFBNmtpCMGrwU7V8TuL0PQ8KlfEBs%2Ffhr8PzWfzx8sxkU4B62nXsXBDUnHA8U0d%2Ba%2FUBC8692daqBq7qk9YnBRfzbkk4rlXymop6z5fa2cI%2BdRb8EAnbMWYa1O6792qFXdFMNa8StZxCI4COPH6U4DIrcjcBl5QN5mA7nID2s6mEO5BArXPX83QK794gJB2dup9fM%2BursnKLS%2BOhzI%2BZ2FdQoLPCgyTH4buNDkzirFmMXGGlVLYs%2FsBmqv5QNzpThC7Q7HYv8Pa%2FXKN47vxu3cng8izwptmeVWHvwvkQUGuTX3woPePZ02xbIiFwP%2BUoBE%2FtD%2FpE0nYxSrIZYQOTaAJ6k1DBPSJYdCy5p6hc3bwx%2BtW7oTkkdegOFHZH0b8g%2Bespxj%2F9gx8rKC%2Bj8KmSW9W3JRYZT%2F6EG%2FyB5wELJ86UEX4XYyoHXzSzic9Vzz1jsPyL7pQVHDCrsZylxWMS%2BLZRZYXbBapy7BqBYs%2FKGHcXGUcQO8ALwN76QgYTRKROxiuCgqNepb56pjuhGH3RBDslr9SycQFpxw5wqACJx1p7SoTgSzAmgcN%2FR5Bss5SCi1kH4FvRWsdVgU6IGnzbqr9lXTGmMJHK48kGOqUBJOxUH8yaCUvYKFNGAJ%2FUvmqiDcewjmy%2FVpSkvmBp4k8GR%2FmaJq%2BfGmz8f0PNiIPfIJyCc%2FvGeXWAtDl88Rl4naxt6rQJm9NKaZblIO4VNU1%2BezEtT0b7y6O%2FVWBB%2FaDL3rqnQ9kP%2BhmPoHZDT9OqzL%2B5ka9Io%2FyRl0W%2FxegkStV4U9btN%2Fi6NF1NOZhT2f1mSmrXdN%2FecCyfUYRPPdbIToJeQlCB&X-Amz-Signature=21f5b19cb2e191682cc057b0462b2d76743c97758508b6506b500384a614e1e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3KKYHQU%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIEhOWFbiFlU22WATOsv%2B3BrpdsBzU6vHYKqzWwaTxBrJAiEArOFeO1vChBSUmaCxpwANO1WCvTiaSjyTgGyL2jMNoN4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjhW7dMegQsTfl1FircA5nSj6294T07g4f9uBzRiHOamasjWIJgqFBNmtpCMGrwU7V8TuL0PQ8KlfEBs%2Ffhr8PzWfzx8sxkU4B62nXsXBDUnHA8U0d%2Ba%2FUBC8692daqBq7qk9YnBRfzbkk4rlXymop6z5fa2cI%2BdRb8EAnbMWYa1O6792qFXdFMNa8StZxCI4COPH6U4DIrcjcBl5QN5mA7nID2s6mEO5BArXPX83QK794gJB2dup9fM%2BursnKLS%2BOhzI%2BZ2FdQoLPCgyTH4buNDkzirFmMXGGlVLYs%2FsBmqv5QNzpThC7Q7HYv8Pa%2FXKN47vxu3cng8izwptmeVWHvwvkQUGuTX3woPePZ02xbIiFwP%2BUoBE%2FtD%2FpE0nYxSrIZYQOTaAJ6k1DBPSJYdCy5p6hc3bwx%2BtW7oTkkdegOFHZH0b8g%2Bespxj%2F9gx8rKC%2Bj8KmSW9W3JRYZT%2F6EG%2FyB5wELJ86UEX4XYyoHXzSzic9Vzz1jsPyL7pQVHDCrsZylxWMS%2BLZRZYXbBapy7BqBYs%2FKGHcXGUcQO8ALwN76QgYTRKROxiuCgqNepb56pjuhGH3RBDslr9SycQFpxw5wqACJx1p7SoTgSzAmgcN%2FR5Bss5SCi1kH4FvRWsdVgU6IGnzbqr9lXTGmMJHK48kGOqUBJOxUH8yaCUvYKFNGAJ%2FUvmqiDcewjmy%2FVpSkvmBp4k8GR%2FmaJq%2BfGmz8f0PNiIPfIJyCc%2FvGeXWAtDl88Rl4naxt6rQJm9NKaZblIO4VNU1%2BezEtT0b7y6O%2FVWBB%2FaDL3rqnQ9kP%2BhmPoHZDT9OqzL%2B5ka9Io%2FyRl0W%2FxegkStV4U9btN%2Fi6NF1NOZhT2f1mSmrXdN%2FecCyfUYRPPdbIToJeQlCB&X-Amz-Signature=f72855bf3b932d0d66a23e7e64b9483ba8757dacfbbff5e8e88d9444c29fbcf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3KKYHQU%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIEhOWFbiFlU22WATOsv%2B3BrpdsBzU6vHYKqzWwaTxBrJAiEArOFeO1vChBSUmaCxpwANO1WCvTiaSjyTgGyL2jMNoN4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjhW7dMegQsTfl1FircA5nSj6294T07g4f9uBzRiHOamasjWIJgqFBNmtpCMGrwU7V8TuL0PQ8KlfEBs%2Ffhr8PzWfzx8sxkU4B62nXsXBDUnHA8U0d%2Ba%2FUBC8692daqBq7qk9YnBRfzbkk4rlXymop6z5fa2cI%2BdRb8EAnbMWYa1O6792qFXdFMNa8StZxCI4COPH6U4DIrcjcBl5QN5mA7nID2s6mEO5BArXPX83QK794gJB2dup9fM%2BursnKLS%2BOhzI%2BZ2FdQoLPCgyTH4buNDkzirFmMXGGlVLYs%2FsBmqv5QNzpThC7Q7HYv8Pa%2FXKN47vxu3cng8izwptmeVWHvwvkQUGuTX3woPePZ02xbIiFwP%2BUoBE%2FtD%2FpE0nYxSrIZYQOTaAJ6k1DBPSJYdCy5p6hc3bwx%2BtW7oTkkdegOFHZH0b8g%2Bespxj%2F9gx8rKC%2Bj8KmSW9W3JRYZT%2F6EG%2FyB5wELJ86UEX4XYyoHXzSzic9Vzz1jsPyL7pQVHDCrsZylxWMS%2BLZRZYXbBapy7BqBYs%2FKGHcXGUcQO8ALwN76QgYTRKROxiuCgqNepb56pjuhGH3RBDslr9SycQFpxw5wqACJx1p7SoTgSzAmgcN%2FR5Bss5SCi1kH4FvRWsdVgU6IGnzbqr9lXTGmMJHK48kGOqUBJOxUH8yaCUvYKFNGAJ%2FUvmqiDcewjmy%2FVpSkvmBp4k8GR%2FmaJq%2BfGmz8f0PNiIPfIJyCc%2FvGeXWAtDl88Rl4naxt6rQJm9NKaZblIO4VNU1%2BezEtT0b7y6O%2FVWBB%2FaDL3rqnQ9kP%2BhmPoHZDT9OqzL%2B5ka9Io%2FyRl0W%2FxegkStV4U9btN%2Fi6NF1NOZhT2f1mSmrXdN%2FecCyfUYRPPdbIToJeQlCB&X-Amz-Signature=c2cd25d7a67a6e75a267fffa7a79936813406770bfdb8fcc981e6265eb0501aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3KKYHQU%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIEhOWFbiFlU22WATOsv%2B3BrpdsBzU6vHYKqzWwaTxBrJAiEArOFeO1vChBSUmaCxpwANO1WCvTiaSjyTgGyL2jMNoN4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjhW7dMegQsTfl1FircA5nSj6294T07g4f9uBzRiHOamasjWIJgqFBNmtpCMGrwU7V8TuL0PQ8KlfEBs%2Ffhr8PzWfzx8sxkU4B62nXsXBDUnHA8U0d%2Ba%2FUBC8692daqBq7qk9YnBRfzbkk4rlXymop6z5fa2cI%2BdRb8EAnbMWYa1O6792qFXdFMNa8StZxCI4COPH6U4DIrcjcBl5QN5mA7nID2s6mEO5BArXPX83QK794gJB2dup9fM%2BursnKLS%2BOhzI%2BZ2FdQoLPCgyTH4buNDkzirFmMXGGlVLYs%2FsBmqv5QNzpThC7Q7HYv8Pa%2FXKN47vxu3cng8izwptmeVWHvwvkQUGuTX3woPePZ02xbIiFwP%2BUoBE%2FtD%2FpE0nYxSrIZYQOTaAJ6k1DBPSJYdCy5p6hc3bwx%2BtW7oTkkdegOFHZH0b8g%2Bespxj%2F9gx8rKC%2Bj8KmSW9W3JRYZT%2F6EG%2FyB5wELJ86UEX4XYyoHXzSzic9Vzz1jsPyL7pQVHDCrsZylxWMS%2BLZRZYXbBapy7BqBYs%2FKGHcXGUcQO8ALwN76QgYTRKROxiuCgqNepb56pjuhGH3RBDslr9SycQFpxw5wqACJx1p7SoTgSzAmgcN%2FR5Bss5SCi1kH4FvRWsdVgU6IGnzbqr9lXTGmMJHK48kGOqUBJOxUH8yaCUvYKFNGAJ%2FUvmqiDcewjmy%2FVpSkvmBp4k8GR%2FmaJq%2BfGmz8f0PNiIPfIJyCc%2FvGeXWAtDl88Rl4naxt6rQJm9NKaZblIO4VNU1%2BezEtT0b7y6O%2FVWBB%2FaDL3rqnQ9kP%2BhmPoHZDT9OqzL%2B5ka9Io%2FyRl0W%2FxegkStV4U9btN%2Fi6NF1NOZhT2f1mSmrXdN%2FecCyfUYRPPdbIToJeQlCB&X-Amz-Signature=7fd98b7a3c6e702e34062d994b5b72477a36de20eadd42a9ae2ebafd69a5b503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V74JLVBC%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDKgUypMiuHRWc%2FBhnrsU1GqdEpU%2Fo1zsXNKAsal7pmzwIgWFkaE8gquSTfVKmqhspR3NzzkZvmdtA8bJoOJW3AtXMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgccBO9FzacS2NjIyrcAyVPYP4wWV3NxtHZfR5Ourtx20Pb63uagysfqlq%2BEDDKH5dhJktxk%2B5GH1iIniTahdcRsItgMb%2BqXlwzgBcAClacNP4ORhiy3JQdC%2BfzXquVow3hM9g%2FRK8QWiBk%2BnNp0vcLCbpJV3FS875IjiMDGHXo7AfDjTk0Z4rZcJJnS8GYfzKG3bW42Q2C2ZYL567dcPo9R4HhnrxB%2Fys4n0hb349gfd4noIkn01U5pMdUUEeErR2%2FJaKCTIwPnST%2BgjbA%2BaaBT4VDrYsieG8ZFdoQTfHWDei02vPH5cuspNjXV4B1ZXPlCvWgY5n8rRG5LyaCVrLdPN1xOv6u8kaxUA55P0MntEQtOpwrWH8qYsZDCZx0isB8jqVKBguZk2X3s%2F1pfZ1S4UFPKmalf%2FpSDirXoJrvxQnV8IDGWXvisx9OQJGyaPmtzC0qWK%2FL%2Bt4JQp9RRERbfUKibQetHK0WbNc4eiEo5C%2FYGexrfYV5Jk1cgBjRRnswEAyhQ7BK2rfTpQwYCSBCOl6f7507uEB3eN47igKnxhdua4GQ5pWcuQRP0tSjNt9M6c%2F0uvPCnkpr%2BrPQBqZwP1M2crAyp1kZTpu33bPD3DOT0tc2yOAXrd%2FctANEKcPnvsiJcqtgTfcdMKXM48kGOqUBVsic5ZwUEquTUYBrTqQWF4848g8ttu2N6jmAhd6adJ7pTWfhp800ndzMyJt8%2FFMO9rVD3Ydd9Zt8l1%2BxMQUeM0N67bOlMSC0612uH2tVbCLmoRl%2BUiCSWmwT4ksH2HenEXyPH5H5lmFwzYqH%2FlTyLZ22wzOTV7b2FMUBEuzBupXuP%2BIdsFn403o%2BipyfkWgwSEuhLSYwBXIu4%2FrEwIxeqHCmPvl%2F&X-Amz-Signature=b7b147071cacf52a913dfcaff2def46803a4e54fa5ce123014c004e1a95d4466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

