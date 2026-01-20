
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YGTNRAJ%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF37zwYvP6t3kH7bVHKK68CyIxag9Asa7Cd%2FF%2BdRNnVQIgCRzzCmX8bZfgOv2G2GWg07IykWLYIjC07Vesfw1eoOMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN31QH4htUZsrq%2ByJyrcA612EVL7iT7eJJhKdWQo5J29GVXqs1JtnI1pxPQ0RlWT%2BKCGvl4%2BcYazb8zE2H6SW%2BMQBK24yNZe14iwPZggLuJj3hKOgp3y6ekxExeZk0BMhBNgQT%2BgJuAI%2F6XWnztjgF%2BK%2FfE7201W%2FSvtqppngQ%2Bci7LdyGbRnfbTNGn6HPLXj9lu92MtrjDv3DX9e4YxNTiV5%2BOkyISKBOaup6QCXyFWupXxgJyCf%2B%2F%2F3spSLOMhFJWkTQPF%2BbzkTw541DIL9VqtRmKhTYT%2FOCcC%2BceedAqdYYoixar4d32aPGOoaHK3TC75QmDdCqP882CdctNSW4TCYKE2hwkYy8el9wvdEn3e96XhNba0bYURIXg7dvPkk8Qui4Ocd4G7HHz8IJwd7Ur2IbTAWNZE%2FFPxdiJj5H2WlOSBZmdF49L459%2F%2BAzybdvgkOI8Cl%2BP%2BRYF40hc1tZXvX6PGUH35sSkGC5AUIKkuuJkJI%2B%2Bupx5S53EzfO5aGxBWDKnyflZMFoE%2Bg4Wf9AxJWz3PqwfnDh4auAKRXMt%2B%2FPRIdwKBRWPpOJm88DPtJcwkEYY5rvtp7g5tYkqI19KLEM%2BKcaCWvQ1XxIK9un5afnKX2PgpnRxzc3pPut8po9C%2B1mc7nxYk9QhKMNb4u8sGOqUBpjWzQO4TQEvnWCYn4gkdJ29CfODxzEAHZdGIDhs3zfoA%2FsRQ1oA1fSU8G2DZ6iAGXqHOJccSPw4ZgFVPcRNYyXt6eFQFxcpt9ytxwxrTgz3HSQ5m2yswu0RgNKJxMpQBXIresUVdV5pEhNgrZD4lEyBcTXJ%2B8Hu23HG9PERzZ7EHYRJe%2Be2%2F2CFs2UUhu9PeXFmhGWfl9L9EB0W%2F3Je1DIWvoLF1&X-Amz-Signature=bbd16bb9e3ef40482224ee73de48c2226ba30c67a135199d5aa600e2a4215561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NA5UZFP%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG7DdoouR2MnmPiGE1CQPlx3Vazt9u7PsmXpcCnhyiUgIhAKhzHwoxVpdPBlUj8qrRTh5cx6WNrVNK%2BmORY84NOhyuKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjMvNxWAKRIjx9vcUq3AMyhKKJmL0rCh%2F45Y7mpd30J5jqyALBS7Tbm%2BlpaUGgXOTFafcpwt9ScQ%2F8iHSzBBSJ0thIgjnxJ%2FHMZ4MyRwUZCwYVFZiZvbrjeo28g%2FaftDMrvlaAJVKMeDo%2BrDvvXOppV%2BjYyHGIDyZMzmZ64m%2BEqHTpGCFzwkCp6hMtlD7LZiJu3kjnomDKUgeU6hpGpq2rhxDAN26ll2asiPET0kMDtJavhckbP9IG80a0OP7w34%2Bsfos6GUpv8Ui4V%2FWtg0UG%2FWws5vxrh%2Fa37ycWIelhEt2PILwv79nu%2FCMXHCMPGZhurgVAMgkPanb9sJr%2BNrL5NcLeKpfkpN6N0Q95pSikpzd8f3rv3WhpwoV8ycaq8Zt3%2B7Tz7Vglg15lBB1euoeiPe9uoIhTB5zzpeEAjprolWnI5hom3roCibygFFMxURRvNX3Y9AS4WtIP5I%2FJjX%2BrDL%2Fyg3WO2WLi51DZRsJkDEIeGOVbrQ%2FFCDZQEnzbsOaecLXy5odsYb4Kf7qwXxp7kpFlBCrG9AFgqqf3u1psdTR2VydM6DcSNYZtbdm0%2BgI%2Bbz0813w5ZSerzPVDqVRqShBcOCkA6KSpJIhTCJ%2Buk4HiagZV3RFrufvqIE1mZeEqKmr28YsOMw92xjDw%2BbvLBjqkATZ9w%2FfCE3VubA0MKE9bkSb3%2BNFzCouT3HNTLsdB2GtqG2gQWp9q5%2BGoFMogocurfTDP%2FcdWwCZaEJvPTjyyoxheUJe2Q%2B2VI07N74bp94afq6H9SsVt2%2BSei%2FjOnzfPPhMUVDfCY%2F6MpzVT3F5xtz90SnYNSw5fRMgddElHftAmYgI8JyCxAsN6w1X%2FmLTW%2BooPnxZ7rf2sxGprT%2BgyvGe%2BGztN&X-Amz-Signature=0c5e5fc84cf06204c48c38a0e3977a941a790dfca1aa566f6a64652639b5b971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NA5UZFP%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG7DdoouR2MnmPiGE1CQPlx3Vazt9u7PsmXpcCnhyiUgIhAKhzHwoxVpdPBlUj8qrRTh5cx6WNrVNK%2BmORY84NOhyuKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjMvNxWAKRIjx9vcUq3AMyhKKJmL0rCh%2F45Y7mpd30J5jqyALBS7Tbm%2BlpaUGgXOTFafcpwt9ScQ%2F8iHSzBBSJ0thIgjnxJ%2FHMZ4MyRwUZCwYVFZiZvbrjeo28g%2FaftDMrvlaAJVKMeDo%2BrDvvXOppV%2BjYyHGIDyZMzmZ64m%2BEqHTpGCFzwkCp6hMtlD7LZiJu3kjnomDKUgeU6hpGpq2rhxDAN26ll2asiPET0kMDtJavhckbP9IG80a0OP7w34%2Bsfos6GUpv8Ui4V%2FWtg0UG%2FWws5vxrh%2Fa37ycWIelhEt2PILwv79nu%2FCMXHCMPGZhurgVAMgkPanb9sJr%2BNrL5NcLeKpfkpN6N0Q95pSikpzd8f3rv3WhpwoV8ycaq8Zt3%2B7Tz7Vglg15lBB1euoeiPe9uoIhTB5zzpeEAjprolWnI5hom3roCibygFFMxURRvNX3Y9AS4WtIP5I%2FJjX%2BrDL%2Fyg3WO2WLi51DZRsJkDEIeGOVbrQ%2FFCDZQEnzbsOaecLXy5odsYb4Kf7qwXxp7kpFlBCrG9AFgqqf3u1psdTR2VydM6DcSNYZtbdm0%2BgI%2Bbz0813w5ZSerzPVDqVRqShBcOCkA6KSpJIhTCJ%2Buk4HiagZV3RFrufvqIE1mZeEqKmr28YsOMw92xjDw%2BbvLBjqkATZ9w%2FfCE3VubA0MKE9bkSb3%2BNFzCouT3HNTLsdB2GtqG2gQWp9q5%2BGoFMogocurfTDP%2FcdWwCZaEJvPTjyyoxheUJe2Q%2B2VI07N74bp94afq6H9SsVt2%2BSei%2FjOnzfPPhMUVDfCY%2F6MpzVT3F5xtz90SnYNSw5fRMgddElHftAmYgI8JyCxAsN6w1X%2FmLTW%2BooPnxZ7rf2sxGprT%2BgyvGe%2BGztN&X-Amz-Signature=daf52fb3865c395a15104624af4b16c285bac2f66981d0720f5a02aa1a8e2bee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSXGGKB%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BjmlNMX20dbaI5PGxjxC%2B4JEtxv7K6102kccKC%2B5u3AiEAsOImKrkWhVM1ZFi6R7ea8gcQG5MT5ADQGGk3vhJo194qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9zLMAawXbQ9y1TNircAwDzdPJmXxawxW49MTwtd5Yr%2B%2Bf14RffaMujLJJdb0KX6MxfEYLfet2dh4Ok0QJgjsRpWc3o6yBfbNZhN6S1gG4frJEJYGO2M1ejpd6o4j1aO2XVwzq8zuxFi4UEzKBQsHR0R%2BhoQW5y8z%2FGtxeIRJUL23DtVWxSNY%2BnklNJL8XNq9dBMqu819lH3z5v2e9hogCA4lMaCkpz4PvMbbi2OPXnMt2ekb9Rofal%2BYBm6V8D9p8F9VnN2Jqo3MyEFrrpBcxXwMNXAY1y6GqZBJFESXu4H2wbbokCD7NN9NfDJkKtxff5hG6pDvG8M%2FekoiLTKKnqa9qGzY47YMtixNKyhzy0AwGFa78XmXSiZtzlL7ckg9hL9k33yEoXepxKZQlTPsLtpQoOlBB8aZ%2FBOhgMQMAWeVDKfSmvh1IEL6AMKBuoG05W5H70baREhxk4B%2FQhEGbHVrNnmEfKifG71HVThVGzF%2FxRzZDxEnp9U3KIDe1ZKbESNNUN5cK%2FaRJjA5LLWdu%2BjciiuJOXphcD1HxhY6CTyQbkNA%2B8tsMLiFZmGmg5tDLCGhs0BdXXsSsWok9CAxhBM2hgYQdQTBlF69xYq7MnDqmPZ%2FzA5wqEk9%2BKBXlxqSGrrUWoUXSTU%2FoNMLj4u8sGOqUBcAuc%2B5LcU1g6tGnLsest7wNJ%2Fm5cDraZcMJ8qAR6aUL39vFvHkctQqt9YFWusyeUADDF26CD2CHec%2FsA6NMxrYtqp%2BiNHC8MSwbfU1Alh4mz3ixyw%2BnzdllId%2BnCpZKa5HL5vSTPfDwlCNjrlOk6QmDWdTvPt%2B0dZQ23aX4pEC6rE5XnQqMwOqz2efH5KZYylMqABP2aJk4LHO6rehiWmnrpUBJP&X-Amz-Signature=2dd05e0336158d2ca0d5e7377f73f6b9b19a125cbd2c5a20de421fbbd6716a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSXGGKB%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BjmlNMX20dbaI5PGxjxC%2B4JEtxv7K6102kccKC%2B5u3AiEAsOImKrkWhVM1ZFi6R7ea8gcQG5MT5ADQGGk3vhJo194qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9zLMAawXbQ9y1TNircAwDzdPJmXxawxW49MTwtd5Yr%2B%2Bf14RffaMujLJJdb0KX6MxfEYLfet2dh4Ok0QJgjsRpWc3o6yBfbNZhN6S1gG4frJEJYGO2M1ejpd6o4j1aO2XVwzq8zuxFi4UEzKBQsHR0R%2BhoQW5y8z%2FGtxeIRJUL23DtVWxSNY%2BnklNJL8XNq9dBMqu819lH3z5v2e9hogCA4lMaCkpz4PvMbbi2OPXnMt2ekb9Rofal%2BYBm6V8D9p8F9VnN2Jqo3MyEFrrpBcxXwMNXAY1y6GqZBJFESXu4H2wbbokCD7NN9NfDJkKtxff5hG6pDvG8M%2FekoiLTKKnqa9qGzY47YMtixNKyhzy0AwGFa78XmXSiZtzlL7ckg9hL9k33yEoXepxKZQlTPsLtpQoOlBB8aZ%2FBOhgMQMAWeVDKfSmvh1IEL6AMKBuoG05W5H70baREhxk4B%2FQhEGbHVrNnmEfKifG71HVThVGzF%2FxRzZDxEnp9U3KIDe1ZKbESNNUN5cK%2FaRJjA5LLWdu%2BjciiuJOXphcD1HxhY6CTyQbkNA%2B8tsMLiFZmGmg5tDLCGhs0BdXXsSsWok9CAxhBM2hgYQdQTBlF69xYq7MnDqmPZ%2FzA5wqEk9%2BKBXlxqSGrrUWoUXSTU%2FoNMLj4u8sGOqUBcAuc%2B5LcU1g6tGnLsest7wNJ%2Fm5cDraZcMJ8qAR6aUL39vFvHkctQqt9YFWusyeUADDF26CD2CHec%2FsA6NMxrYtqp%2BiNHC8MSwbfU1Alh4mz3ixyw%2BnzdllId%2BnCpZKa5HL5vSTPfDwlCNjrlOk6QmDWdTvPt%2B0dZQ23aX4pEC6rE5XnQqMwOqz2efH5KZYylMqABP2aJk4LHO6rehiWmnrpUBJP&X-Amz-Signature=ae8e06ee0d24f49d74950d4870247ef76adc24e27bb9becb4aaaa63a2e4bcbf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSXGGKB%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BjmlNMX20dbaI5PGxjxC%2B4JEtxv7K6102kccKC%2B5u3AiEAsOImKrkWhVM1ZFi6R7ea8gcQG5MT5ADQGGk3vhJo194qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9zLMAawXbQ9y1TNircAwDzdPJmXxawxW49MTwtd5Yr%2B%2Bf14RffaMujLJJdb0KX6MxfEYLfet2dh4Ok0QJgjsRpWc3o6yBfbNZhN6S1gG4frJEJYGO2M1ejpd6o4j1aO2XVwzq8zuxFi4UEzKBQsHR0R%2BhoQW5y8z%2FGtxeIRJUL23DtVWxSNY%2BnklNJL8XNq9dBMqu819lH3z5v2e9hogCA4lMaCkpz4PvMbbi2OPXnMt2ekb9Rofal%2BYBm6V8D9p8F9VnN2Jqo3MyEFrrpBcxXwMNXAY1y6GqZBJFESXu4H2wbbokCD7NN9NfDJkKtxff5hG6pDvG8M%2FekoiLTKKnqa9qGzY47YMtixNKyhzy0AwGFa78XmXSiZtzlL7ckg9hL9k33yEoXepxKZQlTPsLtpQoOlBB8aZ%2FBOhgMQMAWeVDKfSmvh1IEL6AMKBuoG05W5H70baREhxk4B%2FQhEGbHVrNnmEfKifG71HVThVGzF%2FxRzZDxEnp9U3KIDe1ZKbESNNUN5cK%2FaRJjA5LLWdu%2BjciiuJOXphcD1HxhY6CTyQbkNA%2B8tsMLiFZmGmg5tDLCGhs0BdXXsSsWok9CAxhBM2hgYQdQTBlF69xYq7MnDqmPZ%2FzA5wqEk9%2BKBXlxqSGrrUWoUXSTU%2FoNMLj4u8sGOqUBcAuc%2B5LcU1g6tGnLsest7wNJ%2Fm5cDraZcMJ8qAR6aUL39vFvHkctQqt9YFWusyeUADDF26CD2CHec%2FsA6NMxrYtqp%2BiNHC8MSwbfU1Alh4mz3ixyw%2BnzdllId%2BnCpZKa5HL5vSTPfDwlCNjrlOk6QmDWdTvPt%2B0dZQ23aX4pEC6rE5XnQqMwOqz2efH5KZYylMqABP2aJk4LHO6rehiWmnrpUBJP&X-Amz-Signature=33ffa70aecf2e9f1b4a3a4709879e8690cefe31efeb56afc1c260fc86b7954d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSXGGKB%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BjmlNMX20dbaI5PGxjxC%2B4JEtxv7K6102kccKC%2B5u3AiEAsOImKrkWhVM1ZFi6R7ea8gcQG5MT5ADQGGk3vhJo194qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9zLMAawXbQ9y1TNircAwDzdPJmXxawxW49MTwtd5Yr%2B%2Bf14RffaMujLJJdb0KX6MxfEYLfet2dh4Ok0QJgjsRpWc3o6yBfbNZhN6S1gG4frJEJYGO2M1ejpd6o4j1aO2XVwzq8zuxFi4UEzKBQsHR0R%2BhoQW5y8z%2FGtxeIRJUL23DtVWxSNY%2BnklNJL8XNq9dBMqu819lH3z5v2e9hogCA4lMaCkpz4PvMbbi2OPXnMt2ekb9Rofal%2BYBm6V8D9p8F9VnN2Jqo3MyEFrrpBcxXwMNXAY1y6GqZBJFESXu4H2wbbokCD7NN9NfDJkKtxff5hG6pDvG8M%2FekoiLTKKnqa9qGzY47YMtixNKyhzy0AwGFa78XmXSiZtzlL7ckg9hL9k33yEoXepxKZQlTPsLtpQoOlBB8aZ%2FBOhgMQMAWeVDKfSmvh1IEL6AMKBuoG05W5H70baREhxk4B%2FQhEGbHVrNnmEfKifG71HVThVGzF%2FxRzZDxEnp9U3KIDe1ZKbESNNUN5cK%2FaRJjA5LLWdu%2BjciiuJOXphcD1HxhY6CTyQbkNA%2B8tsMLiFZmGmg5tDLCGhs0BdXXsSsWok9CAxhBM2hgYQdQTBlF69xYq7MnDqmPZ%2FzA5wqEk9%2BKBXlxqSGrrUWoUXSTU%2FoNMLj4u8sGOqUBcAuc%2B5LcU1g6tGnLsest7wNJ%2Fm5cDraZcMJ8qAR6aUL39vFvHkctQqt9YFWusyeUADDF26CD2CHec%2FsA6NMxrYtqp%2BiNHC8MSwbfU1Alh4mz3ixyw%2BnzdllId%2BnCpZKa5HL5vSTPfDwlCNjrlOk6QmDWdTvPt%2B0dZQ23aX4pEC6rE5XnQqMwOqz2efH5KZYylMqABP2aJk4LHO6rehiWmnrpUBJP&X-Amz-Signature=ff8db71b43e1c34829f5e6f0022cd026f285e8de48d992aaa6f123a40870be08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSXGGKB%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BjmlNMX20dbaI5PGxjxC%2B4JEtxv7K6102kccKC%2B5u3AiEAsOImKrkWhVM1ZFi6R7ea8gcQG5MT5ADQGGk3vhJo194qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9zLMAawXbQ9y1TNircAwDzdPJmXxawxW49MTwtd5Yr%2B%2Bf14RffaMujLJJdb0KX6MxfEYLfet2dh4Ok0QJgjsRpWc3o6yBfbNZhN6S1gG4frJEJYGO2M1ejpd6o4j1aO2XVwzq8zuxFi4UEzKBQsHR0R%2BhoQW5y8z%2FGtxeIRJUL23DtVWxSNY%2BnklNJL8XNq9dBMqu819lH3z5v2e9hogCA4lMaCkpz4PvMbbi2OPXnMt2ekb9Rofal%2BYBm6V8D9p8F9VnN2Jqo3MyEFrrpBcxXwMNXAY1y6GqZBJFESXu4H2wbbokCD7NN9NfDJkKtxff5hG6pDvG8M%2FekoiLTKKnqa9qGzY47YMtixNKyhzy0AwGFa78XmXSiZtzlL7ckg9hL9k33yEoXepxKZQlTPsLtpQoOlBB8aZ%2FBOhgMQMAWeVDKfSmvh1IEL6AMKBuoG05W5H70baREhxk4B%2FQhEGbHVrNnmEfKifG71HVThVGzF%2FxRzZDxEnp9U3KIDe1ZKbESNNUN5cK%2FaRJjA5LLWdu%2BjciiuJOXphcD1HxhY6CTyQbkNA%2B8tsMLiFZmGmg5tDLCGhs0BdXXsSsWok9CAxhBM2hgYQdQTBlF69xYq7MnDqmPZ%2FzA5wqEk9%2BKBXlxqSGrrUWoUXSTU%2FoNMLj4u8sGOqUBcAuc%2B5LcU1g6tGnLsest7wNJ%2Fm5cDraZcMJ8qAR6aUL39vFvHkctQqt9YFWusyeUADDF26CD2CHec%2FsA6NMxrYtqp%2BiNHC8MSwbfU1Alh4mz3ixyw%2BnzdllId%2BnCpZKa5HL5vSTPfDwlCNjrlOk6QmDWdTvPt%2B0dZQ23aX4pEC6rE5XnQqMwOqz2efH5KZYylMqABP2aJk4LHO6rehiWmnrpUBJP&X-Amz-Signature=65ae598ca6af1db4c6534be9636f58e60c3ea2ed9ccee279c95df5d91495f53e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSXGGKB%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BjmlNMX20dbaI5PGxjxC%2B4JEtxv7K6102kccKC%2B5u3AiEAsOImKrkWhVM1ZFi6R7ea8gcQG5MT5ADQGGk3vhJo194qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9zLMAawXbQ9y1TNircAwDzdPJmXxawxW49MTwtd5Yr%2B%2Bf14RffaMujLJJdb0KX6MxfEYLfet2dh4Ok0QJgjsRpWc3o6yBfbNZhN6S1gG4frJEJYGO2M1ejpd6o4j1aO2XVwzq8zuxFi4UEzKBQsHR0R%2BhoQW5y8z%2FGtxeIRJUL23DtVWxSNY%2BnklNJL8XNq9dBMqu819lH3z5v2e9hogCA4lMaCkpz4PvMbbi2OPXnMt2ekb9Rofal%2BYBm6V8D9p8F9VnN2Jqo3MyEFrrpBcxXwMNXAY1y6GqZBJFESXu4H2wbbokCD7NN9NfDJkKtxff5hG6pDvG8M%2FekoiLTKKnqa9qGzY47YMtixNKyhzy0AwGFa78XmXSiZtzlL7ckg9hL9k33yEoXepxKZQlTPsLtpQoOlBB8aZ%2FBOhgMQMAWeVDKfSmvh1IEL6AMKBuoG05W5H70baREhxk4B%2FQhEGbHVrNnmEfKifG71HVThVGzF%2FxRzZDxEnp9U3KIDe1ZKbESNNUN5cK%2FaRJjA5LLWdu%2BjciiuJOXphcD1HxhY6CTyQbkNA%2B8tsMLiFZmGmg5tDLCGhs0BdXXsSsWok9CAxhBM2hgYQdQTBlF69xYq7MnDqmPZ%2FzA5wqEk9%2BKBXlxqSGrrUWoUXSTU%2FoNMLj4u8sGOqUBcAuc%2B5LcU1g6tGnLsest7wNJ%2Fm5cDraZcMJ8qAR6aUL39vFvHkctQqt9YFWusyeUADDF26CD2CHec%2FsA6NMxrYtqp%2BiNHC8MSwbfU1Alh4mz3ixyw%2BnzdllId%2BnCpZKa5HL5vSTPfDwlCNjrlOk6QmDWdTvPt%2B0dZQ23aX4pEC6rE5XnQqMwOqz2efH5KZYylMqABP2aJk4LHO6rehiWmnrpUBJP&X-Amz-Signature=8cc8da8023cfa12ef7fa300908508200bcb1e7a90d381bb9e1039b76f2b4d0a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSXGGKB%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BjmlNMX20dbaI5PGxjxC%2B4JEtxv7K6102kccKC%2B5u3AiEAsOImKrkWhVM1ZFi6R7ea8gcQG5MT5ADQGGk3vhJo194qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9zLMAawXbQ9y1TNircAwDzdPJmXxawxW49MTwtd5Yr%2B%2Bf14RffaMujLJJdb0KX6MxfEYLfet2dh4Ok0QJgjsRpWc3o6yBfbNZhN6S1gG4frJEJYGO2M1ejpd6o4j1aO2XVwzq8zuxFi4UEzKBQsHR0R%2BhoQW5y8z%2FGtxeIRJUL23DtVWxSNY%2BnklNJL8XNq9dBMqu819lH3z5v2e9hogCA4lMaCkpz4PvMbbi2OPXnMt2ekb9Rofal%2BYBm6V8D9p8F9VnN2Jqo3MyEFrrpBcxXwMNXAY1y6GqZBJFESXu4H2wbbokCD7NN9NfDJkKtxff5hG6pDvG8M%2FekoiLTKKnqa9qGzY47YMtixNKyhzy0AwGFa78XmXSiZtzlL7ckg9hL9k33yEoXepxKZQlTPsLtpQoOlBB8aZ%2FBOhgMQMAWeVDKfSmvh1IEL6AMKBuoG05W5H70baREhxk4B%2FQhEGbHVrNnmEfKifG71HVThVGzF%2FxRzZDxEnp9U3KIDe1ZKbESNNUN5cK%2FaRJjA5LLWdu%2BjciiuJOXphcD1HxhY6CTyQbkNA%2B8tsMLiFZmGmg5tDLCGhs0BdXXsSsWok9CAxhBM2hgYQdQTBlF69xYq7MnDqmPZ%2FzA5wqEk9%2BKBXlxqSGrrUWoUXSTU%2FoNMLj4u8sGOqUBcAuc%2B5LcU1g6tGnLsest7wNJ%2Fm5cDraZcMJ8qAR6aUL39vFvHkctQqt9YFWusyeUADDF26CD2CHec%2FsA6NMxrYtqp%2BiNHC8MSwbfU1Alh4mz3ixyw%2BnzdllId%2BnCpZKa5HL5vSTPfDwlCNjrlOk6QmDWdTvPt%2B0dZQ23aX4pEC6rE5XnQqMwOqz2efH5KZYylMqABP2aJk4LHO6rehiWmnrpUBJP&X-Amz-Signature=46a93e9c5cdedd1ece1a1b9a39f4321b5af257ed67d9e8742d1ae49429b8facb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4K6DBWM%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDd5tZH8wINR4f7a2hHot5rMAcleb%2F8tFb7%2B9Ek2VSKAiEA4R%2FkLUECXXmSuGYzhVv7F85eHDL5l7NVqZgczMcpQAUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaFUeEkrbI722AszyrcA0WJmtAWyqEDlRRPeiO3d%2FCU7OtEsyVSE5yn6HcQHdeo53lhXQKS05MIMSZQjoCl17%2BwIRI7UwxbJ%2FY7YKTHcgICoQVPgdC5xuiD8%2BLcJXE8pjh8vHxnhL8d%2FbFoFCGyXrkcCKwePU8ucMbNtbo1YJvM84LlZe0RigToLpA9L47823xuEPlOQYP5IcY102Q6fKA8NQE6FLcZD8hHpXBLtXHi92YAtpB0%2BxwGB1Nc%2FLfAgg0yZR4XC1j2CtpZKLzQS4%2BMGKN1Du2fjwfbQqdPb3ED9smFM3O%2FZuRhgsbrZeFZOzJ8h56rOh%2F9xjPbkPSt1xN8O0VZH287rw2aPdnV%2FTmq7bP9CUbMlpwtuwmaIJ0V4%2FmADdMQxubmiupTdnsX%2BdILenItyHtfwiTzMLPxAg%2F%2FEeNe2tuAaiCZaWotXWAt7klqxF%2FqWu%2F1frWGH6f9qJVMv%2B6mvOU1PyXE8lHFSLjCogMHJwn84llaavK2%2By8RpL2tMOnIMEneGOmtfmRSvKggEOTIsy1TjtN10N8mHyf3ytFVp%2FNIj8%2Bu6338BlysDFJUrU%2BfIjOZSw6A%2Ba%2FgrxKIfxC1f0hO5cQIqzoBH83Si3WkqCv9mrwnbhjt%2F%2FVy3MduERiLu5v4WOqtMIL4u8sGOqUB%2BKmwbcCqwwqSGuIdVPpR9I1rQkXS%2FsTod0sec1sO%2FdIQI9BE3DqGlXR7mygMMm8uKevjZ46O%2Bga7fZM7F0phpF38HcryHn6T55Pt%2BODQZQz%2BxvlouRwEj8clk%2FlTJsx7CEvo38YvvMtb2e2%2Bu2solZZYHvNTypKFPoLYHBSW91M3Tl7WXzfCyag7W34aE327LSBxFKvqy%2BaqwBvM4NEJ83jOQHaW&X-Amz-Signature=e830debd2bd12a0d2bdfb6c2746cfaa3a7eb3e242216764a90a1a933a9f1a4db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4K6DBWM%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDd5tZH8wINR4f7a2hHot5rMAcleb%2F8tFb7%2B9Ek2VSKAiEA4R%2FkLUECXXmSuGYzhVv7F85eHDL5l7NVqZgczMcpQAUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaFUeEkrbI722AszyrcA0WJmtAWyqEDlRRPeiO3d%2FCU7OtEsyVSE5yn6HcQHdeo53lhXQKS05MIMSZQjoCl17%2BwIRI7UwxbJ%2FY7YKTHcgICoQVPgdC5xuiD8%2BLcJXE8pjh8vHxnhL8d%2FbFoFCGyXrkcCKwePU8ucMbNtbo1YJvM84LlZe0RigToLpA9L47823xuEPlOQYP5IcY102Q6fKA8NQE6FLcZD8hHpXBLtXHi92YAtpB0%2BxwGB1Nc%2FLfAgg0yZR4XC1j2CtpZKLzQS4%2BMGKN1Du2fjwfbQqdPb3ED9smFM3O%2FZuRhgsbrZeFZOzJ8h56rOh%2F9xjPbkPSt1xN8O0VZH287rw2aPdnV%2FTmq7bP9CUbMlpwtuwmaIJ0V4%2FmADdMQxubmiupTdnsX%2BdILenItyHtfwiTzMLPxAg%2F%2FEeNe2tuAaiCZaWotXWAt7klqxF%2FqWu%2F1frWGH6f9qJVMv%2B6mvOU1PyXE8lHFSLjCogMHJwn84llaavK2%2By8RpL2tMOnIMEneGOmtfmRSvKggEOTIsy1TjtN10N8mHyf3ytFVp%2FNIj8%2Bu6338BlysDFJUrU%2BfIjOZSw6A%2Ba%2FgrxKIfxC1f0hO5cQIqzoBH83Si3WkqCv9mrwnbhjt%2F%2FVy3MduERiLu5v4WOqtMIL4u8sGOqUB%2BKmwbcCqwwqSGuIdVPpR9I1rQkXS%2FsTod0sec1sO%2FdIQI9BE3DqGlXR7mygMMm8uKevjZ46O%2Bga7fZM7F0phpF38HcryHn6T55Pt%2BODQZQz%2BxvlouRwEj8clk%2FlTJsx7CEvo38YvvMtb2e2%2Bu2solZZYHvNTypKFPoLYHBSW91M3Tl7WXzfCyag7W34aE327LSBxFKvqy%2BaqwBvM4NEJ83jOQHaW&X-Amz-Signature=4793de29000846c5a8e5f27534a4983ca0b00fefa5bfa7e986e8bae27cb296cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4K6DBWM%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDd5tZH8wINR4f7a2hHot5rMAcleb%2F8tFb7%2B9Ek2VSKAiEA4R%2FkLUECXXmSuGYzhVv7F85eHDL5l7NVqZgczMcpQAUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaFUeEkrbI722AszyrcA0WJmtAWyqEDlRRPeiO3d%2FCU7OtEsyVSE5yn6HcQHdeo53lhXQKS05MIMSZQjoCl17%2BwIRI7UwxbJ%2FY7YKTHcgICoQVPgdC5xuiD8%2BLcJXE8pjh8vHxnhL8d%2FbFoFCGyXrkcCKwePU8ucMbNtbo1YJvM84LlZe0RigToLpA9L47823xuEPlOQYP5IcY102Q6fKA8NQE6FLcZD8hHpXBLtXHi92YAtpB0%2BxwGB1Nc%2FLfAgg0yZR4XC1j2CtpZKLzQS4%2BMGKN1Du2fjwfbQqdPb3ED9smFM3O%2FZuRhgsbrZeFZOzJ8h56rOh%2F9xjPbkPSt1xN8O0VZH287rw2aPdnV%2FTmq7bP9CUbMlpwtuwmaIJ0V4%2FmADdMQxubmiupTdnsX%2BdILenItyHtfwiTzMLPxAg%2F%2FEeNe2tuAaiCZaWotXWAt7klqxF%2FqWu%2F1frWGH6f9qJVMv%2B6mvOU1PyXE8lHFSLjCogMHJwn84llaavK2%2By8RpL2tMOnIMEneGOmtfmRSvKggEOTIsy1TjtN10N8mHyf3ytFVp%2FNIj8%2Bu6338BlysDFJUrU%2BfIjOZSw6A%2Ba%2FgrxKIfxC1f0hO5cQIqzoBH83Si3WkqCv9mrwnbhjt%2F%2FVy3MduERiLu5v4WOqtMIL4u8sGOqUB%2BKmwbcCqwwqSGuIdVPpR9I1rQkXS%2FsTod0sec1sO%2FdIQI9BE3DqGlXR7mygMMm8uKevjZ46O%2Bga7fZM7F0phpF38HcryHn6T55Pt%2BODQZQz%2BxvlouRwEj8clk%2FlTJsx7CEvo38YvvMtb2e2%2Bu2solZZYHvNTypKFPoLYHBSW91M3Tl7WXzfCyag7W34aE327LSBxFKvqy%2BaqwBvM4NEJ83jOQHaW&X-Amz-Signature=6b4b63cc089625817925209061c2fda2a4af551397284fbdf38a35e271c0217e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4K6DBWM%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDd5tZH8wINR4f7a2hHot5rMAcleb%2F8tFb7%2B9Ek2VSKAiEA4R%2FkLUECXXmSuGYzhVv7F85eHDL5l7NVqZgczMcpQAUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaFUeEkrbI722AszyrcA0WJmtAWyqEDlRRPeiO3d%2FCU7OtEsyVSE5yn6HcQHdeo53lhXQKS05MIMSZQjoCl17%2BwIRI7UwxbJ%2FY7YKTHcgICoQVPgdC5xuiD8%2BLcJXE8pjh8vHxnhL8d%2FbFoFCGyXrkcCKwePU8ucMbNtbo1YJvM84LlZe0RigToLpA9L47823xuEPlOQYP5IcY102Q6fKA8NQE6FLcZD8hHpXBLtXHi92YAtpB0%2BxwGB1Nc%2FLfAgg0yZR4XC1j2CtpZKLzQS4%2BMGKN1Du2fjwfbQqdPb3ED9smFM3O%2FZuRhgsbrZeFZOzJ8h56rOh%2F9xjPbkPSt1xN8O0VZH287rw2aPdnV%2FTmq7bP9CUbMlpwtuwmaIJ0V4%2FmADdMQxubmiupTdnsX%2BdILenItyHtfwiTzMLPxAg%2F%2FEeNe2tuAaiCZaWotXWAt7klqxF%2FqWu%2F1frWGH6f9qJVMv%2B6mvOU1PyXE8lHFSLjCogMHJwn84llaavK2%2By8RpL2tMOnIMEneGOmtfmRSvKggEOTIsy1TjtN10N8mHyf3ytFVp%2FNIj8%2Bu6338BlysDFJUrU%2BfIjOZSw6A%2Ba%2FgrxKIfxC1f0hO5cQIqzoBH83Si3WkqCv9mrwnbhjt%2F%2FVy3MduERiLu5v4WOqtMIL4u8sGOqUB%2BKmwbcCqwwqSGuIdVPpR9I1rQkXS%2FsTod0sec1sO%2FdIQI9BE3DqGlXR7mygMMm8uKevjZ46O%2Bga7fZM7F0phpF38HcryHn6T55Pt%2BODQZQz%2BxvlouRwEj8clk%2FlTJsx7CEvo38YvvMtb2e2%2Bu2solZZYHvNTypKFPoLYHBSW91M3Tl7WXzfCyag7W34aE327LSBxFKvqy%2BaqwBvM4NEJ83jOQHaW&X-Amz-Signature=d5d012bafe8a31131ae9b6057beafa6a17fa91412040f3bf2474395e785d81b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4K6DBWM%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDd5tZH8wINR4f7a2hHot5rMAcleb%2F8tFb7%2B9Ek2VSKAiEA4R%2FkLUECXXmSuGYzhVv7F85eHDL5l7NVqZgczMcpQAUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaFUeEkrbI722AszyrcA0WJmtAWyqEDlRRPeiO3d%2FCU7OtEsyVSE5yn6HcQHdeo53lhXQKS05MIMSZQjoCl17%2BwIRI7UwxbJ%2FY7YKTHcgICoQVPgdC5xuiD8%2BLcJXE8pjh8vHxnhL8d%2FbFoFCGyXrkcCKwePU8ucMbNtbo1YJvM84LlZe0RigToLpA9L47823xuEPlOQYP5IcY102Q6fKA8NQE6FLcZD8hHpXBLtXHi92YAtpB0%2BxwGB1Nc%2FLfAgg0yZR4XC1j2CtpZKLzQS4%2BMGKN1Du2fjwfbQqdPb3ED9smFM3O%2FZuRhgsbrZeFZOzJ8h56rOh%2F9xjPbkPSt1xN8O0VZH287rw2aPdnV%2FTmq7bP9CUbMlpwtuwmaIJ0V4%2FmADdMQxubmiupTdnsX%2BdILenItyHtfwiTzMLPxAg%2F%2FEeNe2tuAaiCZaWotXWAt7klqxF%2FqWu%2F1frWGH6f9qJVMv%2B6mvOU1PyXE8lHFSLjCogMHJwn84llaavK2%2By8RpL2tMOnIMEneGOmtfmRSvKggEOTIsy1TjtN10N8mHyf3ytFVp%2FNIj8%2Bu6338BlysDFJUrU%2BfIjOZSw6A%2Ba%2FgrxKIfxC1f0hO5cQIqzoBH83Si3WkqCv9mrwnbhjt%2F%2FVy3MduERiLu5v4WOqtMIL4u8sGOqUB%2BKmwbcCqwwqSGuIdVPpR9I1rQkXS%2FsTod0sec1sO%2FdIQI9BE3DqGlXR7mygMMm8uKevjZ46O%2Bga7fZM7F0phpF38HcryHn6T55Pt%2BODQZQz%2BxvlouRwEj8clk%2FlTJsx7CEvo38YvvMtb2e2%2Bu2solZZYHvNTypKFPoLYHBSW91M3Tl7WXzfCyag7W34aE327LSBxFKvqy%2BaqwBvM4NEJ83jOQHaW&X-Amz-Signature=5a7e152f3d4563b3dea395700a65055f8a13bb8cd03da70a2b55be08007d9ce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJC5HGYC%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFX1PFEEpHNfjv2%2BaOLx%2FFujNQ32hXIphyrH%2FOm%2B3ef1AiBOkV2EG8ULKRpF1sDS1GJhjdQJRkPpugAIbPo7tadTvyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F5KNYCjGIIwgnHdYKtwDt%2BOTFGGqHJ8Bft%2BvVbtPGc7NokU2ernGzhmwKSVRTaQKsvjuRmjmI70rhck1eNHXuIqT%2BpOJ1UKGwoCKXYPalqjuPm85%2FsANIZpZmWeAIVfKCSzkpS5D0GKY11W2IOwI68tE1OxcL5h8hax7KmvcpaHAsBXsiX3KzXHJTs8uhTRFu%2BdFzQLTAXtwlFo%2Fy%2B1HS1QRKkOvmWLgEW%2FAsQWcY1q6j%2B%2F5HmKbCZNc88UxS3DOdheYmRM6uTOHqN1dcG8zVex6n%2Fewe2%2Bp7MsDAFIff%2Bv3v6mdA3hs%2FM%2FLqAVAl%2B8QvBxefNR%2FBQ9g0mOrXzXC21ZINhhccixdz5SKrqZHbfKQBtliJFMVWORXRG4aap%2FczkK3dgVLSI13rezyd4J5UIzZ0t%2B7vnCITg%2Bv2rkbZp%2FcVcOibcFA0s%2BNXf%2FpPiQ4ToCWStyk9oEkacD%2FGgvXWoy%2BSWLc0RDTt73SjZKZAE%2FzGqy%2FlFR2g48w8v2gTl4Hik4lks%2BmPV2aSs7nJa7NDxKxBby2VEbko25TPZFRqBYcBmU97eOi3f0R48G8zXU4AEhEl1D%2BPIRd0cebJH5iv1XXTM6OqDd5LXLwYsGMNOmitX3w35NjZQ7FAqVg1uw0ReF18yct7G8pj9gwkfm7ywY6pgHI%2FQ0d%2FT6Gl%2FkMALiMKxrzMPIjBnmetLTdeu1eSrTboqSvuhxrY7Ye6gJWRH%2BrU3Hv9wSFQp20bnwRXySE0Pq%2BpJ4wPQ3L2RtGr396SpJ1v48LNlkintopQlohK91U3lhjildttTK5%2BYgSN3QICAtZCZlqfSHl0bF9L0uUNVkraOGBg96Eyder4utC1%2F3q0UlbSig3%2FA6WgTUC4W1RNHwlX%2FMOLFCd&X-Amz-Signature=02106da2f87b4e01012814bd5a977543fca91bcc829970ce8812432d3ff83830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJC5HGYC%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFX1PFEEpHNfjv2%2BaOLx%2FFujNQ32hXIphyrH%2FOm%2B3ef1AiBOkV2EG8ULKRpF1sDS1GJhjdQJRkPpugAIbPo7tadTvyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F5KNYCjGIIwgnHdYKtwDt%2BOTFGGqHJ8Bft%2BvVbtPGc7NokU2ernGzhmwKSVRTaQKsvjuRmjmI70rhck1eNHXuIqT%2BpOJ1UKGwoCKXYPalqjuPm85%2FsANIZpZmWeAIVfKCSzkpS5D0GKY11W2IOwI68tE1OxcL5h8hax7KmvcpaHAsBXsiX3KzXHJTs8uhTRFu%2BdFzQLTAXtwlFo%2Fy%2B1HS1QRKkOvmWLgEW%2FAsQWcY1q6j%2B%2F5HmKbCZNc88UxS3DOdheYmRM6uTOHqN1dcG8zVex6n%2Fewe2%2Bp7MsDAFIff%2Bv3v6mdA3hs%2FM%2FLqAVAl%2B8QvBxefNR%2FBQ9g0mOrXzXC21ZINhhccixdz5SKrqZHbfKQBtliJFMVWORXRG4aap%2FczkK3dgVLSI13rezyd4J5UIzZ0t%2B7vnCITg%2Bv2rkbZp%2FcVcOibcFA0s%2BNXf%2FpPiQ4ToCWStyk9oEkacD%2FGgvXWoy%2BSWLc0RDTt73SjZKZAE%2FzGqy%2FlFR2g48w8v2gTl4Hik4lks%2BmPV2aSs7nJa7NDxKxBby2VEbko25TPZFRqBYcBmU97eOi3f0R48G8zXU4AEhEl1D%2BPIRd0cebJH5iv1XXTM6OqDd5LXLwYsGMNOmitX3w35NjZQ7FAqVg1uw0ReF18yct7G8pj9gwkfm7ywY6pgHI%2FQ0d%2FT6Gl%2FkMALiMKxrzMPIjBnmetLTdeu1eSrTboqSvuhxrY7Ye6gJWRH%2BrU3Hv9wSFQp20bnwRXySE0Pq%2BpJ4wPQ3L2RtGr396SpJ1v48LNlkintopQlohK91U3lhjildttTK5%2BYgSN3QICAtZCZlqfSHl0bF9L0uUNVkraOGBg96Eyder4utC1%2F3q0UlbSig3%2FA6WgTUC4W1RNHwlX%2FMOLFCd&X-Amz-Signature=08df95db26d229b7d74989787d64a4155050ba43fb4ef9b7176e48850b83a80f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJC5HGYC%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFX1PFEEpHNfjv2%2BaOLx%2FFujNQ32hXIphyrH%2FOm%2B3ef1AiBOkV2EG8ULKRpF1sDS1GJhjdQJRkPpugAIbPo7tadTvyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F5KNYCjGIIwgnHdYKtwDt%2BOTFGGqHJ8Bft%2BvVbtPGc7NokU2ernGzhmwKSVRTaQKsvjuRmjmI70rhck1eNHXuIqT%2BpOJ1UKGwoCKXYPalqjuPm85%2FsANIZpZmWeAIVfKCSzkpS5D0GKY11W2IOwI68tE1OxcL5h8hax7KmvcpaHAsBXsiX3KzXHJTs8uhTRFu%2BdFzQLTAXtwlFo%2Fy%2B1HS1QRKkOvmWLgEW%2FAsQWcY1q6j%2B%2F5HmKbCZNc88UxS3DOdheYmRM6uTOHqN1dcG8zVex6n%2Fewe2%2Bp7MsDAFIff%2Bv3v6mdA3hs%2FM%2FLqAVAl%2B8QvBxefNR%2FBQ9g0mOrXzXC21ZINhhccixdz5SKrqZHbfKQBtliJFMVWORXRG4aap%2FczkK3dgVLSI13rezyd4J5UIzZ0t%2B7vnCITg%2Bv2rkbZp%2FcVcOibcFA0s%2BNXf%2FpPiQ4ToCWStyk9oEkacD%2FGgvXWoy%2BSWLc0RDTt73SjZKZAE%2FzGqy%2FlFR2g48w8v2gTl4Hik4lks%2BmPV2aSs7nJa7NDxKxBby2VEbko25TPZFRqBYcBmU97eOi3f0R48G8zXU4AEhEl1D%2BPIRd0cebJH5iv1XXTM6OqDd5LXLwYsGMNOmitX3w35NjZQ7FAqVg1uw0ReF18yct7G8pj9gwkfm7ywY6pgHI%2FQ0d%2FT6Gl%2FkMALiMKxrzMPIjBnmetLTdeu1eSrTboqSvuhxrY7Ye6gJWRH%2BrU3Hv9wSFQp20bnwRXySE0Pq%2BpJ4wPQ3L2RtGr396SpJ1v48LNlkintopQlohK91U3lhjildttTK5%2BYgSN3QICAtZCZlqfSHl0bF9L0uUNVkraOGBg96Eyder4utC1%2F3q0UlbSig3%2FA6WgTUC4W1RNHwlX%2FMOLFCd&X-Amz-Signature=c1aff17693e564bada34bff0b591457d72de98b21bfcd0398455c32aa0f2adba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KT3Z52A%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5ey6vOFRCf90wL1UcG6%2B2ITs5w%2BDhKSwHw9HNWJaDjAiEA7fWC%2F12Z%2BN%2BDJck14zyKmcACpk4R%2BaLjx1QBR4X1WuoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKH2rnv%2FtwWmwaA1wSrcA6imTIFp221WhELujGnUXDl6YxVRxcTilQ8LfiWTw9oe5hJeLZJ3bcnSyazZPDf9TQSBJRLZl%2BZYFC3OrK3Drid2IoK2rxIEAL44sbIAIRqV3vYEUNlO3BjGt2B397w4S%2FJ8MCcwIkUI%2BmdJq94dM2%2F6V%2FaESf28ir0fY9ah1lOzW58bf8yA2JwmweSBdh14Se5homICEaVQbUNC6hHsb66aDrLk7u9eVxLj9n7f3OSDEP4n8ryNsSmcGRXwViMLwcCk%2FeTU44kfNJ9tGVSxarElg%2FZbSeiV%2BHWHo%2Fny%2BZJhDkAbDMCiSNBPrqcRSW3jVH5x6HWYBDdsoXaPXzmW1h7M1xuACzO1Ye2lIXhhhE33dcG1%2FojB3nc7CPa8dM1O5yRhNKU%2FEEJvTKP8MSa9SdzUc4feAm9x1wYjRbSleBY1Qhctot6UsJf1jDVaaVjPExGpq0%2B8XpkbXsH570ZcG%2BvmA0zk5xLMFkqStwcqDEbo1X1bApg%2Fiz%2BKsCcS4hSpx5VZV2FC53ZTky%2BrcH9Njx2qat6AVzX%2FRfZ4o7MHwZSg1Miuipzww54H7jBVvvt6DyJNZrbverJYzUaoEDAoHvL1T%2FBDcMc1eLE6oJS9n7qolP5efj9Mo%2BEeV%2ByJMJL5u8sGOqUBw%2FkD7ttHPKfjki5B%2BajXNp3HPfRyosV8VNx8YmkROXne1T8BxQ2g%2Bl9fnNcd0WvmADE6mr65fukc5%2Bf1Eq2PiRMzNEDEdGniiXw%2FEobc5XYH94RDTOwPHue36Ax%2FMOAQwrj8n%2Fv6pHaBdFly1zpRzLxbSKi%2ByloWsiP%2B5ADaF5HAAtxgIxRexQoAV7yoJj6gYirDDwGOhDeLhvyruJN1Nxs75mko&X-Amz-Signature=65497471cdaa78d6b8239300f52d4eda0da9bdaeec7a9d35caac320c29aaa22f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KT3Z52A%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5ey6vOFRCf90wL1UcG6%2B2ITs5w%2BDhKSwHw9HNWJaDjAiEA7fWC%2F12Z%2BN%2BDJck14zyKmcACpk4R%2BaLjx1QBR4X1WuoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKH2rnv%2FtwWmwaA1wSrcA6imTIFp221WhELujGnUXDl6YxVRxcTilQ8LfiWTw9oe5hJeLZJ3bcnSyazZPDf9TQSBJRLZl%2BZYFC3OrK3Drid2IoK2rxIEAL44sbIAIRqV3vYEUNlO3BjGt2B397w4S%2FJ8MCcwIkUI%2BmdJq94dM2%2F6V%2FaESf28ir0fY9ah1lOzW58bf8yA2JwmweSBdh14Se5homICEaVQbUNC6hHsb66aDrLk7u9eVxLj9n7f3OSDEP4n8ryNsSmcGRXwViMLwcCk%2FeTU44kfNJ9tGVSxarElg%2FZbSeiV%2BHWHo%2Fny%2BZJhDkAbDMCiSNBPrqcRSW3jVH5x6HWYBDdsoXaPXzmW1h7M1xuACzO1Ye2lIXhhhE33dcG1%2FojB3nc7CPa8dM1O5yRhNKU%2FEEJvTKP8MSa9SdzUc4feAm9x1wYjRbSleBY1Qhctot6UsJf1jDVaaVjPExGpq0%2B8XpkbXsH570ZcG%2BvmA0zk5xLMFkqStwcqDEbo1X1bApg%2Fiz%2BKsCcS4hSpx5VZV2FC53ZTky%2BrcH9Njx2qat6AVzX%2FRfZ4o7MHwZSg1Miuipzww54H7jBVvvt6DyJNZrbverJYzUaoEDAoHvL1T%2FBDcMc1eLE6oJS9n7qolP5efj9Mo%2BEeV%2ByJMJL5u8sGOqUBw%2FkD7ttHPKfjki5B%2BajXNp3HPfRyosV8VNx8YmkROXne1T8BxQ2g%2Bl9fnNcd0WvmADE6mr65fukc5%2Bf1Eq2PiRMzNEDEdGniiXw%2FEobc5XYH94RDTOwPHue36Ax%2FMOAQwrj8n%2Fv6pHaBdFly1zpRzLxbSKi%2ByloWsiP%2B5ADaF5HAAtxgIxRexQoAV7yoJj6gYirDDwGOhDeLhvyruJN1Nxs75mko&X-Amz-Signature=33133bdc43c6e1658e0579da2e02a78834873cb8839a50648e6fe5bd2698b027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJQVEU2%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmERpciOQq93m3Zk2q7rBMliNWtvzpn9Vh%2BMDn%2BYhJqAiEA4Uq8tCt5GVTt1S4vIBPr7Yv8K1WlfXvAPjIQWLbjd%2BwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqF3MdbvCfKIHkBryrcA7IJU%2BHLh9dQC7iCh6p1sDux1fCqsKP0tqpSUN5WVGiJg36f8vrsy7J4k2WL0ybu15oYstregl%2F7Es%2FPL9zcDn2xdT8gRm%2BY0LwU0AzPO3Nucqh62P6Gy4kMoHK07BDsQ%2Fgzh39htJcMB7BY9T9NpmKNHDd8qKcmJG3%2BV6jZGz6mFMrMqUaRbTPwBG2vmVIXwH3H7k5s%2FOrSXG6DrRyolNEs955lQSmpzHe3w5s1XNwRSPPDdv%2BJ2%2BiF%2F5EcaZdyG80%2Ffbp8tsJhN28ZTvJdUE2hcNbadxUPS8iA6m%2BaWSc0BGA%2BDQrgUivashGImyA9EykYxFSAaHQTCVuPZ2oYh8sDKREBVlsL7E5iNNP0JxtP7XZqyfiyjsptmMgdMLS2BR2AfxsJeOOILP%2BUHvh6joWx646mxGk1CqTroPHnH1ooeElBWpKM8sfWiBwXSQYh2NOLibpRAdeb%2F7O55qQYxKi6eGHaRugt3XRCRjwXaGaSRvgSvm0Vo%2BFDq%2FsYkixqlF9SaVwYpzTOGtT1SOp7d3zMbqiU8aEgena4ZC8sLe1ZZ34jLYrKDgaYYpbfdM%2F0fbIjndOzxJ6%2Fq4UtJP10F8P1o2fIIkQwGF%2BMX4FVnKviYq%2BSXklchf%2FXnylJMIH4u8sGOqUBzf8hNnaYR1wKsU4%2BlSUp9gcPz5SQ7gv%2Fs10VRrCHCUY%2BZ6rmwoMZ7ZmxgsVwe7NHqAXYf8ddNt1rSw9DEE9BHR%2FoydRAD%2FccAaTGWfducmnVKYU0DxmZaZ%2FvZhSu1mc1d5IwrWLB7EDdVKGwODfOFMl2X6uyRbTUsDirHOfQ0yV1cAJ1%2Bq5a00%2FPSNYdqaQ%2BWMR%2FBOyEirAOr%2FwlsQkS%2Ffqbllfe&X-Amz-Signature=9f974e4556d52c18d0efe0dfbe18e06da52b05ce18a4145c6fc787e441f5eac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJQVEU2%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmERpciOQq93m3Zk2q7rBMliNWtvzpn9Vh%2BMDn%2BYhJqAiEA4Uq8tCt5GVTt1S4vIBPr7Yv8K1WlfXvAPjIQWLbjd%2BwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqF3MdbvCfKIHkBryrcA7IJU%2BHLh9dQC7iCh6p1sDux1fCqsKP0tqpSUN5WVGiJg36f8vrsy7J4k2WL0ybu15oYstregl%2F7Es%2FPL9zcDn2xdT8gRm%2BY0LwU0AzPO3Nucqh62P6Gy4kMoHK07BDsQ%2Fgzh39htJcMB7BY9T9NpmKNHDd8qKcmJG3%2BV6jZGz6mFMrMqUaRbTPwBG2vmVIXwH3H7k5s%2FOrSXG6DrRyolNEs955lQSmpzHe3w5s1XNwRSPPDdv%2BJ2%2BiF%2F5EcaZdyG80%2Ffbp8tsJhN28ZTvJdUE2hcNbadxUPS8iA6m%2BaWSc0BGA%2BDQrgUivashGImyA9EykYxFSAaHQTCVuPZ2oYh8sDKREBVlsL7E5iNNP0JxtP7XZqyfiyjsptmMgdMLS2BR2AfxsJeOOILP%2BUHvh6joWx646mxGk1CqTroPHnH1ooeElBWpKM8sfWiBwXSQYh2NOLibpRAdeb%2F7O55qQYxKi6eGHaRugt3XRCRjwXaGaSRvgSvm0Vo%2BFDq%2FsYkixqlF9SaVwYpzTOGtT1SOp7d3zMbqiU8aEgena4ZC8sLe1ZZ34jLYrKDgaYYpbfdM%2F0fbIjndOzxJ6%2Fq4UtJP10F8P1o2fIIkQwGF%2BMX4FVnKviYq%2BSXklchf%2FXnylJMIH4u8sGOqUBzf8hNnaYR1wKsU4%2BlSUp9gcPz5SQ7gv%2Fs10VRrCHCUY%2BZ6rmwoMZ7ZmxgsVwe7NHqAXYf8ddNt1rSw9DEE9BHR%2FoydRAD%2FccAaTGWfducmnVKYU0DxmZaZ%2FvZhSu1mc1d5IwrWLB7EDdVKGwODfOFMl2X6uyRbTUsDirHOfQ0yV1cAJ1%2Bq5a00%2FPSNYdqaQ%2BWMR%2FBOyEirAOr%2FwlsQkS%2Ffqbllfe&X-Amz-Signature=a3b8eafccaf8be1e4c0dc4ee865f27c660a82273f530ddf100cf429ce97fae28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJQVEU2%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmERpciOQq93m3Zk2q7rBMliNWtvzpn9Vh%2BMDn%2BYhJqAiEA4Uq8tCt5GVTt1S4vIBPr7Yv8K1WlfXvAPjIQWLbjd%2BwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqF3MdbvCfKIHkBryrcA7IJU%2BHLh9dQC7iCh6p1sDux1fCqsKP0tqpSUN5WVGiJg36f8vrsy7J4k2WL0ybu15oYstregl%2F7Es%2FPL9zcDn2xdT8gRm%2BY0LwU0AzPO3Nucqh62P6Gy4kMoHK07BDsQ%2Fgzh39htJcMB7BY9T9NpmKNHDd8qKcmJG3%2BV6jZGz6mFMrMqUaRbTPwBG2vmVIXwH3H7k5s%2FOrSXG6DrRyolNEs955lQSmpzHe3w5s1XNwRSPPDdv%2BJ2%2BiF%2F5EcaZdyG80%2Ffbp8tsJhN28ZTvJdUE2hcNbadxUPS8iA6m%2BaWSc0BGA%2BDQrgUivashGImyA9EykYxFSAaHQTCVuPZ2oYh8sDKREBVlsL7E5iNNP0JxtP7XZqyfiyjsptmMgdMLS2BR2AfxsJeOOILP%2BUHvh6joWx646mxGk1CqTroPHnH1ooeElBWpKM8sfWiBwXSQYh2NOLibpRAdeb%2F7O55qQYxKi6eGHaRugt3XRCRjwXaGaSRvgSvm0Vo%2BFDq%2FsYkixqlF9SaVwYpzTOGtT1SOp7d3zMbqiU8aEgena4ZC8sLe1ZZ34jLYrKDgaYYpbfdM%2F0fbIjndOzxJ6%2Fq4UtJP10F8P1o2fIIkQwGF%2BMX4FVnKviYq%2BSXklchf%2FXnylJMIH4u8sGOqUBzf8hNnaYR1wKsU4%2BlSUp9gcPz5SQ7gv%2Fs10VRrCHCUY%2BZ6rmwoMZ7ZmxgsVwe7NHqAXYf8ddNt1rSw9DEE9BHR%2FoydRAD%2FccAaTGWfducmnVKYU0DxmZaZ%2FvZhSu1mc1d5IwrWLB7EDdVKGwODfOFMl2X6uyRbTUsDirHOfQ0yV1cAJ1%2Bq5a00%2FPSNYdqaQ%2BWMR%2FBOyEirAOr%2FwlsQkS%2Ffqbllfe&X-Amz-Signature=829ce39a856dc1901b1209f11f56e3ff0381eb38312113e8f09d56fcda76e636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJQVEU2%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmERpciOQq93m3Zk2q7rBMliNWtvzpn9Vh%2BMDn%2BYhJqAiEA4Uq8tCt5GVTt1S4vIBPr7Yv8K1WlfXvAPjIQWLbjd%2BwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqF3MdbvCfKIHkBryrcA7IJU%2BHLh9dQC7iCh6p1sDux1fCqsKP0tqpSUN5WVGiJg36f8vrsy7J4k2WL0ybu15oYstregl%2F7Es%2FPL9zcDn2xdT8gRm%2BY0LwU0AzPO3Nucqh62P6Gy4kMoHK07BDsQ%2Fgzh39htJcMB7BY9T9NpmKNHDd8qKcmJG3%2BV6jZGz6mFMrMqUaRbTPwBG2vmVIXwH3H7k5s%2FOrSXG6DrRyolNEs955lQSmpzHe3w5s1XNwRSPPDdv%2BJ2%2BiF%2F5EcaZdyG80%2Ffbp8tsJhN28ZTvJdUE2hcNbadxUPS8iA6m%2BaWSc0BGA%2BDQrgUivashGImyA9EykYxFSAaHQTCVuPZ2oYh8sDKREBVlsL7E5iNNP0JxtP7XZqyfiyjsptmMgdMLS2BR2AfxsJeOOILP%2BUHvh6joWx646mxGk1CqTroPHnH1ooeElBWpKM8sfWiBwXSQYh2NOLibpRAdeb%2F7O55qQYxKi6eGHaRugt3XRCRjwXaGaSRvgSvm0Vo%2BFDq%2FsYkixqlF9SaVwYpzTOGtT1SOp7d3zMbqiU8aEgena4ZC8sLe1ZZ34jLYrKDgaYYpbfdM%2F0fbIjndOzxJ6%2Fq4UtJP10F8P1o2fIIkQwGF%2BMX4FVnKviYq%2BSXklchf%2FXnylJMIH4u8sGOqUBzf8hNnaYR1wKsU4%2BlSUp9gcPz5SQ7gv%2Fs10VRrCHCUY%2BZ6rmwoMZ7ZmxgsVwe7NHqAXYf8ddNt1rSw9DEE9BHR%2FoydRAD%2FccAaTGWfducmnVKYU0DxmZaZ%2FvZhSu1mc1d5IwrWLB7EDdVKGwODfOFMl2X6uyRbTUsDirHOfQ0yV1cAJ1%2Bq5a00%2FPSNYdqaQ%2BWMR%2FBOyEirAOr%2FwlsQkS%2Ffqbllfe&X-Amz-Signature=721aeb7a53920492c309d49fd84d99a9c71a645a288ed0b513c90f1bd7cfa9a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJQVEU2%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmERpciOQq93m3Zk2q7rBMliNWtvzpn9Vh%2BMDn%2BYhJqAiEA4Uq8tCt5GVTt1S4vIBPr7Yv8K1WlfXvAPjIQWLbjd%2BwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqF3MdbvCfKIHkBryrcA7IJU%2BHLh9dQC7iCh6p1sDux1fCqsKP0tqpSUN5WVGiJg36f8vrsy7J4k2WL0ybu15oYstregl%2F7Es%2FPL9zcDn2xdT8gRm%2BY0LwU0AzPO3Nucqh62P6Gy4kMoHK07BDsQ%2Fgzh39htJcMB7BY9T9NpmKNHDd8qKcmJG3%2BV6jZGz6mFMrMqUaRbTPwBG2vmVIXwH3H7k5s%2FOrSXG6DrRyolNEs955lQSmpzHe3w5s1XNwRSPPDdv%2BJ2%2BiF%2F5EcaZdyG80%2Ffbp8tsJhN28ZTvJdUE2hcNbadxUPS8iA6m%2BaWSc0BGA%2BDQrgUivashGImyA9EykYxFSAaHQTCVuPZ2oYh8sDKREBVlsL7E5iNNP0JxtP7XZqyfiyjsptmMgdMLS2BR2AfxsJeOOILP%2BUHvh6joWx646mxGk1CqTroPHnH1ooeElBWpKM8sfWiBwXSQYh2NOLibpRAdeb%2F7O55qQYxKi6eGHaRugt3XRCRjwXaGaSRvgSvm0Vo%2BFDq%2FsYkixqlF9SaVwYpzTOGtT1SOp7d3zMbqiU8aEgena4ZC8sLe1ZZ34jLYrKDgaYYpbfdM%2F0fbIjndOzxJ6%2Fq4UtJP10F8P1o2fIIkQwGF%2BMX4FVnKviYq%2BSXklchf%2FXnylJMIH4u8sGOqUBzf8hNnaYR1wKsU4%2BlSUp9gcPz5SQ7gv%2Fs10VRrCHCUY%2BZ6rmwoMZ7ZmxgsVwe7NHqAXYf8ddNt1rSw9DEE9BHR%2FoydRAD%2FccAaTGWfducmnVKYU0DxmZaZ%2FvZhSu1mc1d5IwrWLB7EDdVKGwODfOFMl2X6uyRbTUsDirHOfQ0yV1cAJ1%2Bq5a00%2FPSNYdqaQ%2BWMR%2FBOyEirAOr%2FwlsQkS%2Ffqbllfe&X-Amz-Signature=90ae36790105c1ccdc8a58adfb1547f26e67323037ba25e0872d36b1cc6ef197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657K6DESJ%2F20260120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260120T041538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHa3SkeyKFH%2FttKrmg9nV07Wsmiwmq2DKJivLn6u99bnAiA5tEO9xdt%2BbCWEDyHd%2Fu4arZqVHvuEB2iICCKKw9zMTCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwhagas5fIkjyxCAHKtwDhCdGw%2F85kqRhjqQ0uXOduf2iHLMfpA1fgLONA4nxNvvZlXGzMD2Ag%2BjF8LDLNgEJUVjbyGZtntdS76GsLw7bjA%2Fd9mqBXeE%2Fhq9%2F%2FwuXMLioDvLbdHRLymqSW5D04KMq8uL5Mf3SKyygGJvheFoVFGnqjm8G%2FlGriKOS5BG%2FSFvn2zJ1uYn6owtGL%2BFE%2Bcm%2Fqxru7cgE5m9Jun5rpNYVxGmadwQ2TjuJ3LE91OvjO8Xp5447TQSMSL49NWvyJP6H43Me9%2BOwOEI22TA%2FWlaUtgLk0O%2BJ6MysSjKn06hKAhqHW44AJeGOgbwy1UM4HzmvostoE7fixcpqeDP%2FBaC16Rzghb%2FKe7Mwm80qzTZOzm9c1w3nSQfoTpH5%2Bb36nqWgNbsxQBh2iW%2FbBIJ9%2F4OmcmF0yIwuk5%2BkjhHambDj2tQzRlq4jc2CfQ1iZqNPfumohNW7aKvwCCin6kgpedz1DWOupREYH4Y44qR3Hp%2FnlSzZ8G0BOvJ3lTnUkV%2BtkzB7kWvP8hKisF%2BcCDQTO7gT8kAZ0uHUCFRsgseMXREBNCpsT1iUN8L6M9LuGqbKQHDCw8whSdJJi9Wqdwg6kpNmPjZnb2LpbSZkzue9wey4GEG0Lq8jMl8UWIF5GS8wsvi7ywY6pgHs9rES7KZL4wpBjq0R0ggmm1%2FCdJOaR%2FhN%2F2S9ezHGJrPBi%2F52lCXmIvZlPyqJZR2XOAsuXqyPrrcIaItobwjGhcNq2Z3kq%2BIW%2BvVX%2FgqY08PNKlhN7IiHBqkKQyPRMV9R4YqwHj5xf4ZT%2FB9zRSH%2B%2FUGOHUoE7jcxMB7RyyH%2B%2BiGWW5UXBMu8Xu%2B%2BaBcB%2BwAVM2PKA%2FJQ6aoGF4883DRWdzb9ASUU&X-Amz-Signature=294d58dfff97314211a8f1e829c97fe9cf42459b4a29e7a2433862aaf07fa470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

