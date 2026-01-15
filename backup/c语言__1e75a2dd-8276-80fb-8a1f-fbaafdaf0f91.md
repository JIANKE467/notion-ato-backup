
### 


## #define定义常量和宏

# #define定义常量和宏


## #define声明宏


可以理解为简易版函数


声明语法：


![assetsIMG_20250409_162349-20250409162400-7fk82x6.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/dc98c729-a5d8-4b7c-93b5-76f03806fd1f/assetsIMG_20250409_162349-20250409162400-7fk82x6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6YNVLP%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQC9RLLT%2BaZEhPtPf%2B1%2FmarZpahaljZYyWuFSsOS2ZKHpgIhAN5T3hDHVTwukt5RSxMHV4sFsUD6XC%2BCmPhratogNl5bKv8DCC0QABoMNjM3NDIzMTgzODA1IgymDJNEDM8Y913OABsq3AO9fx6swdi5t9yTzIQqdr9U8pdVxczmJUWlCz6DUX4sxwFk9jLWhHQFnmkZsi0qgtyzadjamcYEm1y3Lis8LnrWqzPZjbsHUB0%2FXpEDt1RhZO%2BOoGADXvEewLjHqg4O8IyrD086hMkIIyEJv3Ry1sfIk5yneW06fMrjgVN8r5veKDMPSY%2FsaM35nmIGWlKDo4rj4abalm6cexZpvLCNtVEH7lWSbuOCmFfcryyHw%2BHS2iZUJM%2FE1XRRhg160%2F9ZE9rvrV2EEp9W5Bj%2BQHB5nLuo0A6BEAmiLHKnIANfgY0SurhT45PlXuVVAzTqSeHouQ%2FDKO5%2B%2Fwjzd%2FLshnh60%2Fm7VJaqiRulsnEmyS7pR8cjborZ8rjlAok0OKkkTV27XIV5NOgUnq1v4SFNhTFX9Ml2n0iItRLQzscOWvwJ43OQzVOvu3X%2F4HZ3QUMsDS%2FUgFmzoaGzb3yvJrmfAtTpI4ILxWnrf0rM1jDexLAKNTOkTWD1w2I55vizYWLRSWS8CJhFdvmfOloCQvP%2F28LbuLXtg57%2FQl4%2F2ytbRtQxzblviOPkxOCKh9v1ra6WSjNHfnEDIyrO0DAEXeLJQKwPn0o%2BKFdiSP%2BV%2Bvc2WzuRN7xZv%2FmgFwX3lpGhVdtKtDDWx6HLBjqkAcjIh12g7QOqtYMgT%2F3D6UD0jIyH00RtQeROs0hHy2%2BHOitTgBFKsIQYBZlCwf3wL22ZDkVERhzsXN%2FnKA3Cfpa5lbuE5h0YEqWjqrffwmB%2FpHNt3VDYAeIKae8FmpUBgmR02LgXzBTMA7T2oLT7XLoK4EG7xUX93it5CxwRdxYWLB6ptAhEJdNmwL6WhrYGSMd5yPgmIf1a%2BG0cX7rGL8w8zT96&X-Amz-Signature=e25c56dbd1c69870fac20dfc5f4c1d7a391b2cbad3fbac5ba81610c7ad3b248a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/c0cf4f84-0199-455f-99c6-d5828194079c/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A7UQX6N%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQC5udKKfGrhE%2F6QfS%2BUfpmHwhlXKbMDvUJFmraSiXcGNAIhAOC2U9S8k6QkgZh5DglTGoLJpDewkV5P8SI9K7R60EQOKv8DCC0QABoMNjM3NDIzMTgzODA1IgxSig%2FEPDR7hCfbH2Yq3AOqqvnasfoX0eQZTwbMN69SCPEaUJgPplRDjQcjgncz5q6R2Olhwx4JlaaVzEKhc5da2ptySGP7y1n%2BMkNpRk6KEy%2FFM0Cn%2BW4KQs4Nh1gSAGOq4j8V1sGLy89liYGkCYKir5aet7aY8u%2BJfBxgCOF0SnVPCdF6FWUREb0Gv1xQhFPV%2FRC20koQ11t09EEE%2FPpR6POeB8yYEPX%2Fz9JVidknjdK2Hydqu2%2BK6jTDWJ1rHXwIAD0VszR%2F5u2VA2nZa8ILTNJXTXO49SJNoaNbajfbgbtRnEGvfwmFLNfomyNVsBZIg021s4RwtZKionFDKnmJv%2FLvHYcT3hkI0dw3T9u8Ae%2Fh4iTPAvjDaM1QF2NDQnCPEv1BsAVODsmquv92xY48C6ve%2FwBJIbfNC6%2F5fPbfcQF8JLL80SEU6Do0IPPHLqMsLlBCQeBneR5iTotNrMP%2Bat4lBVUTzmRR3wcc3I8s1m3BKyDXqPekQV9TtZq4qVMz5htBawPWLQqSg5q1IL4gURtkN72J3x57XlvnU3myUhmYSsD9qQCvLGRPjAYIbfqxFuyxyuOlZWTGlQ7jcv2OAhpIp9E3OHE%2F6RkI0kFUoOdO089qSXZfqaKy952fOXAgA7Hxl9w0q3pjyDDvx6HLBjqkAU0UnsBU0laed1MuvAyWKATwDMiMe4geJVCHtEWqQ9WhC%2BtrdocuOOO1fn219RBpVXtdpSWxNfRp8FdfTHdGqkwOBqLuvTkJiBT2C7z12YmGseXL1937O65ODbIG%2FuouV6TDsLrTI3ZAhFHNyiw3qMwXmCTFN3ckknMaBApknVln4jM0a2FDIdDpbyamjLSgNUBo4hW%2Bh8hApWYbeww2b8dllq3Q&X-Amz-Signature=ed8a38ffaa13d1848ec0a9165d3c96749b050e261a3de20eb2ca352ce9b262fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 循环


# 说在最前面：


在循环中


![assetsIMG_20250226_210418-20250226210428-wix4r47.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/776c3e0a-47e2-44a3-a004-0474d5e37965/assetsIMG_20250226_210418-20250226210428-wix4r47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A7UQX6N%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQC5udKKfGrhE%2F6QfS%2BUfpmHwhlXKbMDvUJFmraSiXcGNAIhAOC2U9S8k6QkgZh5DglTGoLJpDewkV5P8SI9K7R60EQOKv8DCC0QABoMNjM3NDIzMTgzODA1IgxSig%2FEPDR7hCfbH2Yq3AOqqvnasfoX0eQZTwbMN69SCPEaUJgPplRDjQcjgncz5q6R2Olhwx4JlaaVzEKhc5da2ptySGP7y1n%2BMkNpRk6KEy%2FFM0Cn%2BW4KQs4Nh1gSAGOq4j8V1sGLy89liYGkCYKir5aet7aY8u%2BJfBxgCOF0SnVPCdF6FWUREb0Gv1xQhFPV%2FRC20koQ11t09EEE%2FPpR6POeB8yYEPX%2Fz9JVidknjdK2Hydqu2%2BK6jTDWJ1rHXwIAD0VszR%2F5u2VA2nZa8ILTNJXTXO49SJNoaNbajfbgbtRnEGvfwmFLNfomyNVsBZIg021s4RwtZKionFDKnmJv%2FLvHYcT3hkI0dw3T9u8Ae%2Fh4iTPAvjDaM1QF2NDQnCPEv1BsAVODsmquv92xY48C6ve%2FwBJIbfNC6%2F5fPbfcQF8JLL80SEU6Do0IPPHLqMsLlBCQeBneR5iTotNrMP%2Bat4lBVUTzmRR3wcc3I8s1m3BKyDXqPekQV9TtZq4qVMz5htBawPWLQqSg5q1IL4gURtkN72J3x57XlvnU3myUhmYSsD9qQCvLGRPjAYIbfqxFuyxyuOlZWTGlQ7jcv2OAhpIp9E3OHE%2F6RkI0kFUoOdO089qSXZfqaKy952fOXAgA7Hxl9w0q3pjyDDvx6HLBjqkAU0UnsBU0laed1MuvAyWKATwDMiMe4geJVCHtEWqQ9WhC%2BtrdocuOOO1fn219RBpVXtdpSWxNfRp8FdfTHdGqkwOBqLuvTkJiBT2C7z12YmGseXL1937O65ODbIG%2FuouV6TDsLrTI3ZAhFHNyiw3qMwXmCTFN3ckknMaBApknVln4jM0a2FDIdDpbyamjLSgNUBo4hW%2Bh8hApWYbeww2b8dllq3Q&X-Amz-Signature=861dd9248acca12385bb71e3a7f0ddd35b1b730c1654223d113ae6034edf8575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6de313fd-b4b5-4ff9-af64-f8c6efba99ef/assetsIMG_20250226_195441-20250226201021-t4to5lo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G5TAF6P%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHsdFbhDVndX7ggTxfUe6AN4frNWM7d7Mk03m%2FbK0WPYAiEAmO1Udufl77GtDZfjnMCf6ETbGPFS1Jdl1%2BZ20Th5pWgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDILdMhvY%2FnmnF0anXSrcA0u2E8ChVp7VU6I1rDsV8A1TE%2F5p0zLVH3FkK4LeDxE84HHEZAX50BqM521MO%2BsbER7jlFrpVVRemwAiW2AxjpYKWwGiB%2FXhLFOAiA7RO3AZOmpwsw5ooE7x2iR96xIYqslV0TWlDLQSMLAuKkjxohqifCzaDXiHLJMDsoHObWqxyUH8QPtDUxgGi8ZZeQQzeYE%2FAexlp0RFeF%2FiW8J26JGfHMeHSYw7IJrQNAVaPllS0Q5wQ8RuETQyMljPP%2FaNwqe3LawucTQNVW7dvCluObghBcZ55XxRzd1j6QATSoUzCY%2FxS0eIPjPaHznQ6095ivmfmJKFbSKkqn2OmgX6lBal%2B8BNqRQX9bXFYD1TJ%2Bz6pMg7uge5%2F4z9ExUtqZU7dT84jBkmVsTi2C%2B9QwA8YgOr0J62ffQAT7NCYkWtMi5pq4mekjDHEI6MwnDbPIDgk8Wzkwfn9%2FhkfiwzhcUMfo2VlEGydGy4ET9ARKBYrgR1HUfj7tZ3u3rmsO3MXotwd5DYDI4fXL2KauTy5qVjflXRx9e1Iy37q4dv4SfF9HYYB5rFyJqxp2%2F8M7JYxxthY02%2BJKabrGOD84UCkXWgjBgcwn5AaWJvUfv2URwRHwQcwdTwLwpZ0rFF3i6uMNXHocsGOqUBIszGb3G7JjjE%2B8%2FbBf8N6rgb2d%2FNhRxzFMg4cAepfH2YyNoIOlHO%2Fr2pL4sgWgzum4%2FxuNWFim5pZ%2BX6hEIwLNGCQo59bYVgcXDfGSKU1U7w4fD%2FeLxf6xeygR%2Fq5zlqKSx9NA7P%2BaPSgvoEYdN0CFa68HdB%2Fc%2Ft%2BLuC2K7TEXCYlOdaSTbdeAvFQ0tVykODXE6mZ%2F29cpvvLxz7OZKNnasuukcq&X-Amz-Signature=4d889ed0caa86233766f9a8b9656ab30b619438143fbb541d2fe6128e3bfc08e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303090801-20250303091133-fo4kkf4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/02623aae-6132-4641-bd53-08cc2b17b2e8/assetsIMG20250303090801-20250303091133-fo4kkf4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G5TAF6P%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHsdFbhDVndX7ggTxfUe6AN4frNWM7d7Mk03m%2FbK0WPYAiEAmO1Udufl77GtDZfjnMCf6ETbGPFS1Jdl1%2BZ20Th5pWgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDILdMhvY%2FnmnF0anXSrcA0u2E8ChVp7VU6I1rDsV8A1TE%2F5p0zLVH3FkK4LeDxE84HHEZAX50BqM521MO%2BsbER7jlFrpVVRemwAiW2AxjpYKWwGiB%2FXhLFOAiA7RO3AZOmpwsw5ooE7x2iR96xIYqslV0TWlDLQSMLAuKkjxohqifCzaDXiHLJMDsoHObWqxyUH8QPtDUxgGi8ZZeQQzeYE%2FAexlp0RFeF%2FiW8J26JGfHMeHSYw7IJrQNAVaPllS0Q5wQ8RuETQyMljPP%2FaNwqe3LawucTQNVW7dvCluObghBcZ55XxRzd1j6QATSoUzCY%2FxS0eIPjPaHznQ6095ivmfmJKFbSKkqn2OmgX6lBal%2B8BNqRQX9bXFYD1TJ%2Bz6pMg7uge5%2F4z9ExUtqZU7dT84jBkmVsTi2C%2B9QwA8YgOr0J62ffQAT7NCYkWtMi5pq4mekjDHEI6MwnDbPIDgk8Wzkwfn9%2FhkfiwzhcUMfo2VlEGydGy4ET9ARKBYrgR1HUfj7tZ3u3rmsO3MXotwd5DYDI4fXL2KauTy5qVjflXRx9e1Iy37q4dv4SfF9HYYB5rFyJqxp2%2F8M7JYxxthY02%2BJKabrGOD84UCkXWgjBgcwn5AaWJvUfv2URwRHwQcwdTwLwpZ0rFF3i6uMNXHocsGOqUBIszGb3G7JjjE%2B8%2FbBf8N6rgb2d%2FNhRxzFMg4cAepfH2YyNoIOlHO%2Fr2pL4sgWgzum4%2FxuNWFim5pZ%2BX6hEIwLNGCQo59bYVgcXDfGSKU1U7w4fD%2FeLxf6xeygR%2Fq5zlqKSx9NA7P%2BaPSgvoEYdN0CFa68HdB%2Fc%2Ft%2BLuC2K7TEXCYlOdaSTbdeAvFQ0tVykODXE6mZ%2F29cpvvLxz7OZKNnasuukcq&X-Amz-Signature=a165c6bc5c70510cedcfeb0c07929ba6db6ac329f97afcd9e9a5f6c395c4e21f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303091854-20250303091921-72h8p8x.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/06b8e1ee-0056-4cfe-a9e6-9e141ef8d2c3/assetsIMG20250303091854-20250303091921-72h8p8x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G5TAF6P%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHsdFbhDVndX7ggTxfUe6AN4frNWM7d7Mk03m%2FbK0WPYAiEAmO1Udufl77GtDZfjnMCf6ETbGPFS1Jdl1%2BZ20Th5pWgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDILdMhvY%2FnmnF0anXSrcA0u2E8ChVp7VU6I1rDsV8A1TE%2F5p0zLVH3FkK4LeDxE84HHEZAX50BqM521MO%2BsbER7jlFrpVVRemwAiW2AxjpYKWwGiB%2FXhLFOAiA7RO3AZOmpwsw5ooE7x2iR96xIYqslV0TWlDLQSMLAuKkjxohqifCzaDXiHLJMDsoHObWqxyUH8QPtDUxgGi8ZZeQQzeYE%2FAexlp0RFeF%2FiW8J26JGfHMeHSYw7IJrQNAVaPllS0Q5wQ8RuETQyMljPP%2FaNwqe3LawucTQNVW7dvCluObghBcZ55XxRzd1j6QATSoUzCY%2FxS0eIPjPaHznQ6095ivmfmJKFbSKkqn2OmgX6lBal%2B8BNqRQX9bXFYD1TJ%2Bz6pMg7uge5%2F4z9ExUtqZU7dT84jBkmVsTi2C%2B9QwA8YgOr0J62ffQAT7NCYkWtMi5pq4mekjDHEI6MwnDbPIDgk8Wzkwfn9%2FhkfiwzhcUMfo2VlEGydGy4ET9ARKBYrgR1HUfj7tZ3u3rmsO3MXotwd5DYDI4fXL2KauTy5qVjflXRx9e1Iy37q4dv4SfF9HYYB5rFyJqxp2%2F8M7JYxxthY02%2BJKabrGOD84UCkXWgjBgcwn5AaWJvUfv2URwRHwQcwdTwLwpZ0rFF3i6uMNXHocsGOqUBIszGb3G7JjjE%2B8%2FbBf8N6rgb2d%2FNhRxzFMg4cAepfH2YyNoIOlHO%2Fr2pL4sgWgzum4%2FxuNWFim5pZ%2BX6hEIwLNGCQo59bYVgcXDfGSKU1U7w4fD%2FeLxf6xeygR%2Fq5zlqKSx9NA7P%2BaPSgvoEYdN0CFa68HdB%2Fc%2Ft%2BLuC2K7TEXCYlOdaSTbdeAvFQ0tVykODXE6mZ%2F29cpvvLxz7OZKNnasuukcq&X-Amz-Signature=7d279ab9ab4197b26a1c53f6cb8c535f058588011dd6dba8abb0684865357aed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092301-20250303092323-7mns3ni.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6675e58-f189-4969-8d16-a67778467201/assetsIMG20250303092301-20250303092323-7mns3ni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G5TAF6P%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHsdFbhDVndX7ggTxfUe6AN4frNWM7d7Mk03m%2FbK0WPYAiEAmO1Udufl77GtDZfjnMCf6ETbGPFS1Jdl1%2BZ20Th5pWgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDILdMhvY%2FnmnF0anXSrcA0u2E8ChVp7VU6I1rDsV8A1TE%2F5p0zLVH3FkK4LeDxE84HHEZAX50BqM521MO%2BsbER7jlFrpVVRemwAiW2AxjpYKWwGiB%2FXhLFOAiA7RO3AZOmpwsw5ooE7x2iR96xIYqslV0TWlDLQSMLAuKkjxohqifCzaDXiHLJMDsoHObWqxyUH8QPtDUxgGi8ZZeQQzeYE%2FAexlp0RFeF%2FiW8J26JGfHMeHSYw7IJrQNAVaPllS0Q5wQ8RuETQyMljPP%2FaNwqe3LawucTQNVW7dvCluObghBcZ55XxRzd1j6QATSoUzCY%2FxS0eIPjPaHznQ6095ivmfmJKFbSKkqn2OmgX6lBal%2B8BNqRQX9bXFYD1TJ%2Bz6pMg7uge5%2F4z9ExUtqZU7dT84jBkmVsTi2C%2B9QwA8YgOr0J62ffQAT7NCYkWtMi5pq4mekjDHEI6MwnDbPIDgk8Wzkwfn9%2FhkfiwzhcUMfo2VlEGydGy4ET9ARKBYrgR1HUfj7tZ3u3rmsO3MXotwd5DYDI4fXL2KauTy5qVjflXRx9e1Iy37q4dv4SfF9HYYB5rFyJqxp2%2F8M7JYxxthY02%2BJKabrGOD84UCkXWgjBgcwn5AaWJvUfv2URwRHwQcwdTwLwpZ0rFF3i6uMNXHocsGOqUBIszGb3G7JjjE%2B8%2FbBf8N6rgb2d%2FNhRxzFMg4cAepfH2YyNoIOlHO%2Fr2pL4sgWgzum4%2FxuNWFim5pZ%2BX6hEIwLNGCQo59bYVgcXDfGSKU1U7w4fD%2FeLxf6xeygR%2Fq5zlqKSx9NA7P%2BaPSgvoEYdN0CFa68HdB%2Fc%2Ft%2BLuC2K7TEXCYlOdaSTbdeAvFQ0tVykODXE6mZ%2F29cpvvLxz7OZKNnasuukcq&X-Amz-Signature=02e49da572263f094e896f489f6861f8a209fbd7e2db397f7ebd4235421c69d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsIMG20250303092918-20250303092946-9u21gp4.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5d6f9afc-7755-4549-bf7e-fd3a2934a210/assetsIMG20250303092918-20250303092946-9u21gp4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G5TAF6P%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHsdFbhDVndX7ggTxfUe6AN4frNWM7d7Mk03m%2FbK0WPYAiEAmO1Udufl77GtDZfjnMCf6ETbGPFS1Jdl1%2BZ20Th5pWgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDILdMhvY%2FnmnF0anXSrcA0u2E8ChVp7VU6I1rDsV8A1TE%2F5p0zLVH3FkK4LeDxE84HHEZAX50BqM521MO%2BsbER7jlFrpVVRemwAiW2AxjpYKWwGiB%2FXhLFOAiA7RO3AZOmpwsw5ooE7x2iR96xIYqslV0TWlDLQSMLAuKkjxohqifCzaDXiHLJMDsoHObWqxyUH8QPtDUxgGi8ZZeQQzeYE%2FAexlp0RFeF%2FiW8J26JGfHMeHSYw7IJrQNAVaPllS0Q5wQ8RuETQyMljPP%2FaNwqe3LawucTQNVW7dvCluObghBcZ55XxRzd1j6QATSoUzCY%2FxS0eIPjPaHznQ6095ivmfmJKFbSKkqn2OmgX6lBal%2B8BNqRQX9bXFYD1TJ%2Bz6pMg7uge5%2F4z9ExUtqZU7dT84jBkmVsTi2C%2B9QwA8YgOr0J62ffQAT7NCYkWtMi5pq4mekjDHEI6MwnDbPIDgk8Wzkwfn9%2FhkfiwzhcUMfo2VlEGydGy4ET9ARKBYrgR1HUfj7tZ3u3rmsO3MXotwd5DYDI4fXL2KauTy5qVjflXRx9e1Iy37q4dv4SfF9HYYB5rFyJqxp2%2F8M7JYxxthY02%2BJKabrGOD84UCkXWgjBgcwn5AaWJvUfv2URwRHwQcwdTwLwpZ0rFF3i6uMNXHocsGOqUBIszGb3G7JjjE%2B8%2FbBf8N6rgb2d%2FNhRxzFMg4cAepfH2YyNoIOlHO%2Fr2pL4sgWgzum4%2FxuNWFim5pZ%2BX6hEIwLNGCQo59bYVgcXDfGSKU1U7w4fD%2FeLxf6xeygR%2Fq5zlqKSx9NA7P%2BaPSgvoEYdN0CFa68HdB%2Fc%2Ft%2BLuC2K7TEXCYlOdaSTbdeAvFQ0tVykODXE6mZ%2F29cpvvLxz7OZKNnasuukcq&X-Amz-Signature=e4529776219de239715e4b54257fd110a0ba5542b12b0b689ec7440c0eadcb55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## ASCII码推算


![assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/e6ea199c-acf7-4bbf-9b3e-3b0a2fe940a2/assetsIMG_20250303_093927-20250303094021-v5rprvm.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G5TAF6P%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHsdFbhDVndX7ggTxfUe6AN4frNWM7d7Mk03m%2FbK0WPYAiEAmO1Udufl77GtDZfjnMCf6ETbGPFS1Jdl1%2BZ20Th5pWgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDILdMhvY%2FnmnF0anXSrcA0u2E8ChVp7VU6I1rDsV8A1TE%2F5p0zLVH3FkK4LeDxE84HHEZAX50BqM521MO%2BsbER7jlFrpVVRemwAiW2AxjpYKWwGiB%2FXhLFOAiA7RO3AZOmpwsw5ooE7x2iR96xIYqslV0TWlDLQSMLAuKkjxohqifCzaDXiHLJMDsoHObWqxyUH8QPtDUxgGi8ZZeQQzeYE%2FAexlp0RFeF%2FiW8J26JGfHMeHSYw7IJrQNAVaPllS0Q5wQ8RuETQyMljPP%2FaNwqe3LawucTQNVW7dvCluObghBcZ55XxRzd1j6QATSoUzCY%2FxS0eIPjPaHznQ6095ivmfmJKFbSKkqn2OmgX6lBal%2B8BNqRQX9bXFYD1TJ%2Bz6pMg7uge5%2F4z9ExUtqZU7dT84jBkmVsTi2C%2B9QwA8YgOr0J62ffQAT7NCYkWtMi5pq4mekjDHEI6MwnDbPIDgk8Wzkwfn9%2FhkfiwzhcUMfo2VlEGydGy4ET9ARKBYrgR1HUfj7tZ3u3rmsO3MXotwd5DYDI4fXL2KauTy5qVjflXRx9e1Iy37q4dv4SfF9HYYB5rFyJqxp2%2F8M7JYxxthY02%2BJKabrGOD84UCkXWgjBgcwn5AaWJvUfv2URwRHwQcwdTwLwpZ0rFF3i6uMNXHocsGOqUBIszGb3G7JjjE%2B8%2FbBf8N6rgb2d%2FNhRxzFMg4cAepfH2YyNoIOlHO%2Fr2pL4sgWgzum4%2FxuNWFim5pZ%2BX6hEIwLNGCQo59bYVgcXDfGSKU1U7w4fD%2FeLxf6xeygR%2Fq5zlqKSx9NA7P%2BaPSgvoEYdN0CFa68HdB%2Fc%2Ft%2BLuC2K7TEXCYlOdaSTbdeAvFQ0tVykODXE6mZ%2F29cpvvLxz7OZKNnasuukcq&X-Amz-Signature=7ed54ce7318e124e0d2007c3352ba4a078918eb7d2fd05f5b995260c3fe77696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![98f7046f555901ef3539555154ffdb9a.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/718208c2-8fb1-4e69-ad1c-f309babb3ec0/98f7046f555901ef3539555154ffdb9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G5TAF6P%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHsdFbhDVndX7ggTxfUe6AN4frNWM7d7Mk03m%2FbK0WPYAiEAmO1Udufl77GtDZfjnMCf6ETbGPFS1Jdl1%2BZ20Th5pWgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDILdMhvY%2FnmnF0anXSrcA0u2E8ChVp7VU6I1rDsV8A1TE%2F5p0zLVH3FkK4LeDxE84HHEZAX50BqM521MO%2BsbER7jlFrpVVRemwAiW2AxjpYKWwGiB%2FXhLFOAiA7RO3AZOmpwsw5ooE7x2iR96xIYqslV0TWlDLQSMLAuKkjxohqifCzaDXiHLJMDsoHObWqxyUH8QPtDUxgGi8ZZeQQzeYE%2FAexlp0RFeF%2FiW8J26JGfHMeHSYw7IJrQNAVaPllS0Q5wQ8RuETQyMljPP%2FaNwqe3LawucTQNVW7dvCluObghBcZ55XxRzd1j6QATSoUzCY%2FxS0eIPjPaHznQ6095ivmfmJKFbSKkqn2OmgX6lBal%2B8BNqRQX9bXFYD1TJ%2Bz6pMg7uge5%2F4z9ExUtqZU7dT84jBkmVsTi2C%2B9QwA8YgOr0J62ffQAT7NCYkWtMi5pq4mekjDHEI6MwnDbPIDgk8Wzkwfn9%2FhkfiwzhcUMfo2VlEGydGy4ET9ARKBYrgR1HUfj7tZ3u3rmsO3MXotwd5DYDI4fXL2KauTy5qVjflXRx9e1Iy37q4dv4SfF9HYYB5rFyJqxp2%2F8M7JYxxthY02%2BJKabrGOD84UCkXWgjBgcwn5AaWJvUfv2URwRHwQcwdTwLwpZ0rFF3i6uMNXHocsGOqUBIszGb3G7JjjE%2B8%2FbBf8N6rgb2d%2FNhRxzFMg4cAepfH2YyNoIOlHO%2Fr2pL4sgWgzum4%2FxuNWFim5pZ%2BX6hEIwLNGCQo59bYVgcXDfGSKU1U7w4fD%2FeLxf6xeygR%2Fq5zlqKSx9NA7P%2BaPSgvoEYdN0CFa68HdB%2Fc%2Ft%2BLuC2K7TEXCYlOdaSTbdeAvFQ0tVykODXE6mZ%2F29cpvvLxz7OZKNnasuukcq&X-Amz-Signature=f6a69c29a48b81445de2eb9ebe481cb324befbb0d09fd645976ca7649dc60b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/6c6a5540-aae4-4c9c-81ee-9da448de1ef9/assetsScreenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203124-d292uze.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNXUTKS2%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICxrDme2qJ89Qerx3ITV%2FLpPdWDccLEXCOwC0wOwit06AiEApPQNpEhtNzy9wBzODOanKNT0tHsxTGjTQvP%2BVi93Po0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDI%2FfaML3A16oo28%2FZircA4A2YxtPiwatHYXrYgCkbvVdsaQ%2BEKjZZvUtM1eshNtTeqUuXojT8AF%2FAqCped0MCysqdP81k%2FWNw4%2BzX%2FPCQ44XD%2BSlzJ81CW0tGgcW4hQglLLiAhyozAgRLH2YmUFXaOniAHFDzotJK4szt%2BBK5Z%2FVz4q6rdABETzuOSjyfEwkbdla6KO5160Sezl0Fa5GnvlKXxMlLlLf60Fd33SMW3tVSw2r14gt7ho5qIN35U0xhruoZcNLrLZFsWNKEIgSK4rX94fSipsdVp9Usxrypcp15xC5TyMShLzdHtC8nkpewhVZoO8sfXtqa7Hhdy6jQjKJDAACTrkc15RGgKRHc4tTr28DNe4LwpFoMXeeKQyRdQg9FxlF2ZpP4xjMtRB9bULWNxASAgIBjbAetf0hEOpURD4xgOhY9uZKlA2GPXNynckvEpzNIPfGztL%2F2cXy4hnJ2%2BVTbtaJxS97NgJ72fwkIz%2Fv8uwHMHxSaVzsAY00YoxabOCBKHDBs8xiUj3FW8nByN8GgXOuv%2Bo2q0WjDolkGGX9Tqh4JKpNdTdGFzjKjnQaBIKLRb7JjBlkqVvhsVQKdIgoiU0vUkijwtuemH7yrJuM4%2BGzhJlqb%2BTEkM%2F0KFMPQ%2FG1XeL3fwGxMITIocsGOqUBvRi5usJNL9ZCtvRXpodah7bQgjcHoGrkjqFzQq%2FcxNyxEpFDDWOtTwG8M8MZHesk5YMTondCvM7NIxo56Mn3DgXBmlkR3ZS1v9OTdULlje634f180xjTzzF1vCT2%2F8SIBQA1rTWY3h3dpl4lKafPD01LbwnPG1A7Q153an8WvvCG5g7Q0aG4KWeG%2BRQeDFZiUyf%2BrXDyZFb4saN2%2Beid3vHAE2V9&X-Amz-Signature=b823db1da8a63b56d91acfc0073d5355df7c19212d4ba6eb1c0e6d54dbfadcf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-31-07-39_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/aacc1667-5404-44cb-a5c3-bd5be9c51af2/assetsScreenshot_2025-02-26-20-33-54-46_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203424-jpd2xci.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNXUTKS2%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICxrDme2qJ89Qerx3ITV%2FLpPdWDccLEXCOwC0wOwit06AiEApPQNpEhtNzy9wBzODOanKNT0tHsxTGjTQvP%2BVi93Po0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDI%2FfaML3A16oo28%2FZircA4A2YxtPiwatHYXrYgCkbvVdsaQ%2BEKjZZvUtM1eshNtTeqUuXojT8AF%2FAqCped0MCysqdP81k%2FWNw4%2BzX%2FPCQ44XD%2BSlzJ81CW0tGgcW4hQglLLiAhyozAgRLH2YmUFXaOniAHFDzotJK4szt%2BBK5Z%2FVz4q6rdABETzuOSjyfEwkbdla6KO5160Sezl0Fa5GnvlKXxMlLlLf60Fd33SMW3tVSw2r14gt7ho5qIN35U0xhruoZcNLrLZFsWNKEIgSK4rX94fSipsdVp9Usxrypcp15xC5TyMShLzdHtC8nkpewhVZoO8sfXtqa7Hhdy6jQjKJDAACTrkc15RGgKRHc4tTr28DNe4LwpFoMXeeKQyRdQg9FxlF2ZpP4xjMtRB9bULWNxASAgIBjbAetf0hEOpURD4xgOhY9uZKlA2GPXNynckvEpzNIPfGztL%2F2cXy4hnJ2%2BVTbtaJxS97NgJ72fwkIz%2Fv8uwHMHxSaVzsAY00YoxabOCBKHDBs8xiUj3FW8nByN8GgXOuv%2Bo2q0WjDolkGGX9Tqh4JKpNdTdGFzjKjnQaBIKLRb7JjBlkqVvhsVQKdIgoiU0vUkijwtuemH7yrJuM4%2BGzhJlqb%2BTEkM%2F0KFMPQ%2FG1XeL3fwGxMITIocsGOqUBvRi5usJNL9ZCtvRXpodah7bQgjcHoGrkjqFzQq%2FcxNyxEpFDDWOtTwG8M8MZHesk5YMTondCvM7NIxo56Mn3DgXBmlkR3ZS1v9OTdULlje634f180xjTzzF1vCT2%2F8SIBQA1rTWY3h3dpl4lKafPD01LbwnPG1A7Q153an8WvvCG5g7Q0aG4KWeG%2BRQeDFZiUyf%2BrXDyZFb4saN2%2Beid3vHAE2V9&X-Amz-Signature=e0416289b2e67b7dfda21d6dbfb39f6671161b9cc3bee83a4cb9fa57045e4dba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d61c8374-3748-4a9c-b425-d97031bca5c1/assetsScreenshot_2025-02-26-20-33-26-79_c0fc23361849dfc0a4b4c6dd2adcac79-20250226203437-uk8nm3r.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNXUTKS2%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICxrDme2qJ89Qerx3ITV%2FLpPdWDccLEXCOwC0wOwit06AiEApPQNpEhtNzy9wBzODOanKNT0tHsxTGjTQvP%2BVi93Po0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDI%2FfaML3A16oo28%2FZircA4A2YxtPiwatHYXrYgCkbvVdsaQ%2BEKjZZvUtM1eshNtTeqUuXojT8AF%2FAqCped0MCysqdP81k%2FWNw4%2BzX%2FPCQ44XD%2BSlzJ81CW0tGgcW4hQglLLiAhyozAgRLH2YmUFXaOniAHFDzotJK4szt%2BBK5Z%2FVz4q6rdABETzuOSjyfEwkbdla6KO5160Sezl0Fa5GnvlKXxMlLlLf60Fd33SMW3tVSw2r14gt7ho5qIN35U0xhruoZcNLrLZFsWNKEIgSK4rX94fSipsdVp9Usxrypcp15xC5TyMShLzdHtC8nkpewhVZoO8sfXtqa7Hhdy6jQjKJDAACTrkc15RGgKRHc4tTr28DNe4LwpFoMXeeKQyRdQg9FxlF2ZpP4xjMtRB9bULWNxASAgIBjbAetf0hEOpURD4xgOhY9uZKlA2GPXNynckvEpzNIPfGztL%2F2cXy4hnJ2%2BVTbtaJxS97NgJ72fwkIz%2Fv8uwHMHxSaVzsAY00YoxabOCBKHDBs8xiUj3FW8nByN8GgXOuv%2Bo2q0WjDolkGGX9Tqh4JKpNdTdGFzjKjnQaBIKLRb7JjBlkqVvhsVQKdIgoiU0vUkijwtuemH7yrJuM4%2BGzhJlqb%2BTEkM%2F0KFMPQ%2FG1XeL3fwGxMITIocsGOqUBvRi5usJNL9ZCtvRXpodah7bQgjcHoGrkjqFzQq%2FcxNyxEpFDDWOtTwG8M8MZHesk5YMTondCvM7NIxo56Mn3DgXBmlkR3ZS1v9OTdULlje634f180xjTzzF1vCT2%2F8SIBQA1rTWY3h3dpl4lKafPD01LbwnPG1A7Q153an8WvvCG5g7Q0aG4KWeG%2BRQeDFZiUyf%2BrXDyZFb4saN2%2Beid3vHAE2V9&X-Amz-Signature=b3ddfafdd7d37091f1042605e77ad6c81b8947e6d93c840602833c197b7b57b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## scanf格式控制符


![assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/d19d31c4-5cc3-4f23-99ef-5c1be9ac7d2f/assetsScreenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204002-tq6u7gq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNXUTKS2%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICxrDme2qJ89Qerx3ITV%2FLpPdWDccLEXCOwC0wOwit06AiEApPQNpEhtNzy9wBzODOanKNT0tHsxTGjTQvP%2BVi93Po0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDI%2FfaML3A16oo28%2FZircA4A2YxtPiwatHYXrYgCkbvVdsaQ%2BEKjZZvUtM1eshNtTeqUuXojT8AF%2FAqCped0MCysqdP81k%2FWNw4%2BzX%2FPCQ44XD%2BSlzJ81CW0tGgcW4hQglLLiAhyozAgRLH2YmUFXaOniAHFDzotJK4szt%2BBK5Z%2FVz4q6rdABETzuOSjyfEwkbdla6KO5160Sezl0Fa5GnvlKXxMlLlLf60Fd33SMW3tVSw2r14gt7ho5qIN35U0xhruoZcNLrLZFsWNKEIgSK4rX94fSipsdVp9Usxrypcp15xC5TyMShLzdHtC8nkpewhVZoO8sfXtqa7Hhdy6jQjKJDAACTrkc15RGgKRHc4tTr28DNe4LwpFoMXeeKQyRdQg9FxlF2ZpP4xjMtRB9bULWNxASAgIBjbAetf0hEOpURD4xgOhY9uZKlA2GPXNynckvEpzNIPfGztL%2F2cXy4hnJ2%2BVTbtaJxS97NgJ72fwkIz%2Fv8uwHMHxSaVzsAY00YoxabOCBKHDBs8xiUj3FW8nByN8GgXOuv%2Bo2q0WjDolkGGX9Tqh4JKpNdTdGFzjKjnQaBIKLRb7JjBlkqVvhsVQKdIgoiU0vUkijwtuemH7yrJuM4%2BGzhJlqb%2BTEkM%2F0KFMPQ%2FG1XeL3fwGxMITIocsGOqUBvRi5usJNL9ZCtvRXpodah7bQgjcHoGrkjqFzQq%2FcxNyxEpFDDWOtTwG8M8MZHesk5YMTondCvM7NIxo56Mn3DgXBmlkR3ZS1v9OTdULlje634f180xjTzzF1vCT2%2F8SIBQA1rTWY3h3dpl4lKafPD01LbwnPG1A7Q153an8WvvCG5g7Q0aG4KWeG%2BRQeDFZiUyf%2BrXDyZFb4saN2%2Beid3vHAE2V9&X-Amz-Signature=072672b530097cb8d08ec12041110430ed433e646c1e6abeeb7ed446d8ff5dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-39-47-36_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/71e08bdd-6811-419e-af4c-4d421b40af6f/assetsIMG_20250319_082448-20250319082504-c5tmc1f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNXUTKS2%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICxrDme2qJ89Qerx3ITV%2FLpPdWDccLEXCOwC0wOwit06AiEApPQNpEhtNzy9wBzODOanKNT0tHsxTGjTQvP%2BVi93Po0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDI%2FfaML3A16oo28%2FZircA4A2YxtPiwatHYXrYgCkbvVdsaQ%2BEKjZZvUtM1eshNtTeqUuXojT8AF%2FAqCped0MCysqdP81k%2FWNw4%2BzX%2FPCQ44XD%2BSlzJ81CW0tGgcW4hQglLLiAhyozAgRLH2YmUFXaOniAHFDzotJK4szt%2BBK5Z%2FVz4q6rdABETzuOSjyfEwkbdla6KO5160Sezl0Fa5GnvlKXxMlLlLf60Fd33SMW3tVSw2r14gt7ho5qIN35U0xhruoZcNLrLZFsWNKEIgSK4rX94fSipsdVp9Usxrypcp15xC5TyMShLzdHtC8nkpewhVZoO8sfXtqa7Hhdy6jQjKJDAACTrkc15RGgKRHc4tTr28DNe4LwpFoMXeeKQyRdQg9FxlF2ZpP4xjMtRB9bULWNxASAgIBjbAetf0hEOpURD4xgOhY9uZKlA2GPXNynckvEpzNIPfGztL%2F2cXy4hnJ2%2BVTbtaJxS97NgJ72fwkIz%2Fv8uwHMHxSaVzsAY00YoxabOCBKHDBs8xiUj3FW8nByN8GgXOuv%2Bo2q0WjDolkGGX9Tqh4JKpNdTdGFzjKjnQaBIKLRb7JjBlkqVvhsVQKdIgoiU0vUkijwtuemH7yrJuM4%2BGzhJlqb%2BTEkM%2F0KFMPQ%2FG1XeL3fwGxMITIocsGOqUBvRi5usJNL9ZCtvRXpodah7bQgjcHoGrkjqFzQq%2FcxNyxEpFDDWOtTwG8M8MZHesk5YMTondCvM7NIxo56Mn3DgXBmlkR3ZS1v9OTdULlje634f180xjTzzF1vCT2%2F8SIBQA1rTWY3h3dpl4lKafPD01LbwnPG1A7Q153an8WvvCG5g7Q0aG4KWeG%2BRQeDFZiUyf%2BrXDyZFb4saN2%2Beid3vHAE2V9&X-Amz-Signature=7f4ca03993ebac53c6acb5161081c1ba73640e813e9dc28f9bc78a3ea162c4ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250319_082448


‍


## 结构体（自定义数据类型）

更好的讲解见[结构体（自定义数据类型）](https://www.notion.so/20a5a2dd827680acad5ef215c327a1fd) （建议看这个）


![assetsIMG_20250412_172033-20250412172222-svctam4.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/b39a819d-4c40-4e9e-bac6-8027b1bdf2e3/assetsIMG_20250412_172033-20250412172222-svctam4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAFDL2FE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIETE289EKZ1nOa7rCLHfekEHrSlRyD2bpWT3xtubBguYAiAclV1E%2FlnHqsyeiZ%2B%2F7Z0qSPS8LNLdgO2JQPOYm8NxYCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMoo3W26uEdD688hB0KtwDiJbp2eiZwqQDTyD8YOhUDvT%2FN6M3U1wxJUiNs26PYBBnxTSGhx6mxDfJ77vDavWkOGK0ynC0EJiFyIHYW7f3DbkbSuDA4%2B06Bl0a57c50IiCmQ37yKIMOLzFw%2Bxl50YTgEv%2BPETBo9NF%2F6jT776pFEaLjhdt2g%2FuyHE%2BWBvwSyt7NJsRN%2BykWPBJIB9OJChbvCqZf4KeTiT42bE84mrQVGEA8XUELRDPWkWyjKgSDxQe5aVpczI8MyTNk5svliTKOJVJ389Bvz2FKYRzcoSsy6eniUxU5fp7sMMLripakF0oi%2FJNNNuXUOxPOKa4QaLrh8tROwLq0mmBKwvugBuH5nf9jsvTZxLXrNZn3c3Qmd3%2BAY7X95BpXpQl%2B9%2FM3IirN%2FzukDZkwoBcrT8AXk%2FFIsfc5jbebXNdpSf0H1mK6M8MFHBTlrzkTtgWw5Zz3gwr6f9A8%2B3KghKOtXPO3d2TNdlC0%2B62XeXJhjGY9BrMo%2FHtvBdScYa%2Fys5GPHMrX0PCqlv5dNaUwB7jQLJgdcN3Xz2BolMz0ATmfGShQyAA8IotiHE5FvJBC5jKSQcmvVRIrYtEwxCk2UOGGacH6RLh3EWVm69UjEznwdZd4OLd%2BkLmSpuyaIcGi5gZoCEw%2B8ehywY6pgF45AAI%2B30Nsq1h6ZHzYpUw%2BGjVEVE7XYx6NHyBpP0a0oiwLbwTZ6Ra%2FIfCGhzYrc2wfy%2BZLfYYi%2BOXaYc1HI%2FmNXf6OtB1zkSCJyvkUMKh42iE7ZAIOmsG0cn5bvEF%2BOe1tGpNxG1WntoD6Ean2btDMZDdo8ElbUpQC1mujf57WsVvoJk2L%2BLoK4K3%2FtDbxwrwshfuoKZ5SzFfkx095hCLow7HGCoK&X-Amz-Signature=38a7cfa76059b0d5016308fc519a647c7530d7a57cdea76c30affeb667253dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


image


# 结构体（自定义数据类型）


struct：结构体（struct）是一种用户定义的数据类型，它允许你将不同类型的数据组合在一起。


## 先定义


定义结构体结构（定义结构体名）


![assets20250407211430127-1-20250407211813-it6ddlh.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0ef7c52e-1927-4f74-9246-b338b8bb2713/assets20250407211430127-1-20250407211813-it6ddlh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAFDL2FE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIETE289EKZ1nOa7rCLHfekEHrSlRyD2bpWT3xtubBguYAiAclV1E%2FlnHqsyeiZ%2B%2F7Z0qSPS8LNLdgO2JQPOYm8NxYCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMoo3W26uEdD688hB0KtwDiJbp2eiZwqQDTyD8YOhUDvT%2FN6M3U1wxJUiNs26PYBBnxTSGhx6mxDfJ77vDavWkOGK0ynC0EJiFyIHYW7f3DbkbSuDA4%2B06Bl0a57c50IiCmQ37yKIMOLzFw%2Bxl50YTgEv%2BPETBo9NF%2F6jT776pFEaLjhdt2g%2FuyHE%2BWBvwSyt7NJsRN%2BykWPBJIB9OJChbvCqZf4KeTiT42bE84mrQVGEA8XUELRDPWkWyjKgSDxQe5aVpczI8MyTNk5svliTKOJVJ389Bvz2FKYRzcoSsy6eniUxU5fp7sMMLripakF0oi%2FJNNNuXUOxPOKa4QaLrh8tROwLq0mmBKwvugBuH5nf9jsvTZxLXrNZn3c3Qmd3%2BAY7X95BpXpQl%2B9%2FM3IirN%2FzukDZkwoBcrT8AXk%2FFIsfc5jbebXNdpSf0H1mK6M8MFHBTlrzkTtgWw5Zz3gwr6f9A8%2B3KghKOtXPO3d2TNdlC0%2B62XeXJhjGY9BrMo%2FHtvBdScYa%2Fys5GPHMrX0PCqlv5dNaUwB7jQLJgdcN3Xz2BolMz0ATmfGShQyAA8IotiHE5FvJBC5jKSQcmvVRIrYtEwxCk2UOGGacH6RLh3EWVm69UjEznwdZd4OLd%2BkLmSpuyaIcGi5gZoCEw%2B8ehywY6pgF45AAI%2B30Nsq1h6ZHzYpUw%2BGjVEVE7XYx6NHyBpP0a0oiwLbwTZ6Ra%2FIfCGhzYrc2wfy%2BZLfYYi%2BOXaYc1HI%2FmNXf6OtB1zkSCJyvkUMKh42iE7ZAIOmsG0cn5bvEF%2BOe1tGpNxG1WntoD6Ean2btDMZDdo8ElbUpQC1mujf57WsVvoJk2L%2BLoK4K3%2FtDbxwrwshfuoKZ5SzFfkx095hCLow7HGCoK&X-Amz-Signature=d97043922f36282dacf23fbdc7bfc1a323f721bc6422fc125330e66f7392f250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assets20250407212847555-20250407212917-kqh2m0f.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0c8ef19b-1d7b-4aa9-b8b4-17c78ce5491c/assets20250407212847555-20250407212917-kqh2m0f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAFDL2FE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIETE289EKZ1nOa7rCLHfekEHrSlRyD2bpWT3xtubBguYAiAclV1E%2FlnHqsyeiZ%2B%2F7Z0qSPS8LNLdgO2JQPOYm8NxYCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMoo3W26uEdD688hB0KtwDiJbp2eiZwqQDTyD8YOhUDvT%2FN6M3U1wxJUiNs26PYBBnxTSGhx6mxDfJ77vDavWkOGK0ynC0EJiFyIHYW7f3DbkbSuDA4%2B06Bl0a57c50IiCmQ37yKIMOLzFw%2Bxl50YTgEv%2BPETBo9NF%2F6jT776pFEaLjhdt2g%2FuyHE%2BWBvwSyt7NJsRN%2BykWPBJIB9OJChbvCqZf4KeTiT42bE84mrQVGEA8XUELRDPWkWyjKgSDxQe5aVpczI8MyTNk5svliTKOJVJ389Bvz2FKYRzcoSsy6eniUxU5fp7sMMLripakF0oi%2FJNNNuXUOxPOKa4QaLrh8tROwLq0mmBKwvugBuH5nf9jsvTZxLXrNZn3c3Qmd3%2BAY7X95BpXpQl%2B9%2FM3IirN%2FzukDZkwoBcrT8AXk%2FFIsfc5jbebXNdpSf0H1mK6M8MFHBTlrzkTtgWw5Zz3gwr6f9A8%2B3KghKOtXPO3d2TNdlC0%2B62XeXJhjGY9BrMo%2FHtvBdScYa%2Fys5GPHMrX0PCqlv5dNaUwB7jQLJgdcN3Xz2BolMz0ATmfGShQyAA8IotiHE5FvJBC5jKSQcmvVRIrYtEwxCk2UOGGacH6RLh3EWVm69UjEznwdZd4OLd%2BkLmSpuyaIcGi5gZoCEw%2B8ehywY6pgF45AAI%2B30Nsq1h6ZHzYpUw%2BGjVEVE7XYx6NHyBpP0a0oiwLbwTZ6Ra%2FIfCGhzYrc2wfy%2BZLfYYi%2BOXaYc1HI%2FmNXf6OtB1zkSCJyvkUMKh42iE7ZAIOmsG0cn5bvEF%2BOe1tGpNxG1WntoD6Ean2btDMZDdo8ElbUpQC1mujf57WsVvoJk2L%2BLoK4K3%2FtDbxwrwshfuoKZ5SzFfkx095hCLow7HGCoK&X-Amz-Signature=2b9dea5b574c1e2d630b5e50e5378b0b942888a594c178b13f8f494c5ec7da17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/5085d146-59ef-4fed-bfb3-c06c3e93f210/assetsIMG_20250312_093938-20250312094012-nrgjezz.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFY65BE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDIltPlra5B6Ze%2F3No%2Bt9lseAw3mbBeFZubrOrp4ji%2B0QIhAIO2rR2SVsSFzSCdv1cEfiVLHwi8WeaAe%2B9EkSQC0nirKv8DCC0QABoMNjM3NDIzMTgzODA1IgxpRaJJPQXOG7UEN2Iq3AORMBm9un6bJAcOt5rTfifr%2BMjvufjU7sytyadWx2VI8TzxRjuDIeSsOA1OE1OxhQ1ZVWyyNed4c9sgY5%2FHvgiS%2BwM2EU%2BIBC6kpevxM4aD8jEBAQL7T%2FMbA7plSmtGQzzOZNMyjqF7Z61MJ%2BZl01UhuKqkA6KlqHoCem%2BvRZzSnnwwueYon%2F6eS8Th3is80lXTYTshgjmyXJisn33F%2FxQdEXR45kdhBCXh2r%2FCqjzOo9knHjg8v%2FP9YEBNlJp13JKlAQS1%2B0qABEI8JDEGLQtg%2FtHpsnYk9sRpVjdTk%2FqaWnvKN7%2F2T4KJqIKMXnopSOc1yF%2FbeCCPYv8ie3x8OeJJVt8GIMox8WNE3kWj4neJCBs6rJa%2FFhWWuitG8nNVf9r2lsKQAmvGsFHVlV4fv%2Bt%2FyqnSyhwaEAfnWxmwcWLGmrWazVmLs4fv9uhxi2jCK0fnKH6DiZRCmLkRY5c2VaCERxOuXRajW0rp4Z4S2c2ibSvFJuYKXbhDey64kLDkqMofPBCfsYAVNqgC9aVTTgGVFdA2ZG7KtujzqsyStCjGRz2USIRYq2qGwGYyfYbRTKrNAIU%2BE1zWnTPw7gOhd7utdlRuKUSONykHbtXgGsOhH8iVBvNshvKJbdQu1jDtx6HLBjqkAdDKrcNn%2BS24Jud%2B3e2lqDml521e0IsWnaUrDNjj0lY%2FBoN1ytbXoAqR1nvd4Vgh0PwB%2F%2FDSk1N1eCJOZyw1Yv8Xpq2H8TZDZ9xDrsTKFT7LuP5aPscMewLgbAygQgYcrM2cTwiv%2BCYYEwo3yu9YDmz4sDQ1UwaJP%2FqWiTaM4qTQht4HypQANounfgjUF0YMdoCXPVHVj5LhvZC4b6LXV7NrYf3q&X-Amz-Signature=a7de7512e7e766ce8f641ddd59e7f88888c8d9da86c9544a12d793dcb8bca7ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093938


![assetsIMG_20250312_093955-20250312094018-jzcf098.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/0609b242-5602-4999-8d02-e567fba564fc/assetsIMG_20250312_093955-20250312094018-jzcf098.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFY65BE%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDIltPlra5B6Ze%2F3No%2Bt9lseAw3mbBeFZubrOrp4ji%2B0QIhAIO2rR2SVsSFzSCdv1cEfiVLHwi8WeaAe%2B9EkSQC0nirKv8DCC0QABoMNjM3NDIzMTgzODA1IgxpRaJJPQXOG7UEN2Iq3AORMBm9un6bJAcOt5rTfifr%2BMjvufjU7sytyadWx2VI8TzxRjuDIeSsOA1OE1OxhQ1ZVWyyNed4c9sgY5%2FHvgiS%2BwM2EU%2BIBC6kpevxM4aD8jEBAQL7T%2FMbA7plSmtGQzzOZNMyjqF7Z61MJ%2BZl01UhuKqkA6KlqHoCem%2BvRZzSnnwwueYon%2F6eS8Th3is80lXTYTshgjmyXJisn33F%2FxQdEXR45kdhBCXh2r%2FCqjzOo9knHjg8v%2FP9YEBNlJp13JKlAQS1%2B0qABEI8JDEGLQtg%2FtHpsnYk9sRpVjdTk%2FqaWnvKN7%2F2T4KJqIKMXnopSOc1yF%2FbeCCPYv8ie3x8OeJJVt8GIMox8WNE3kWj4neJCBs6rJa%2FFhWWuitG8nNVf9r2lsKQAmvGsFHVlV4fv%2Bt%2FyqnSyhwaEAfnWxmwcWLGmrWazVmLs4fv9uhxi2jCK0fnKH6DiZRCmLkRY5c2VaCERxOuXRajW0rp4Z4S2c2ibSvFJuYKXbhDey64kLDkqMofPBCfsYAVNqgC9aVTTgGVFdA2ZG7KtujzqsyStCjGRz2USIRYq2qGwGYyfYbRTKrNAIU%2BE1zWnTPw7gOhd7utdlRuKUSONykHbtXgGsOhH8iVBvNshvKJbdQu1jDtx6HLBjqkAdDKrcNn%2BS24Jud%2B3e2lqDml521e0IsWnaUrDNjj0lY%2FBoN1ytbXoAqR1nvd4Vgh0PwB%2F%2FDSk1N1eCJOZyw1Yv8Xpq2H8TZDZ9xDrsTKFT7LuP5aPscMewLgbAygQgYcrM2cTwiv%2BCYYEwo3yu9YDmz4sDQ1UwaJP%2FqWiTaM4qTQht4HypQANounfgjUF0YMdoCXPVHVj5LhvZC4b6LXV7NrYf3q&X-Amz-Signature=e970579c5065e578155359eed850bd93b76c9d312008cca99e93e00a2c316bd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250312_093955


## 运算符及计算顺序

# 运算符及计算顺序


![assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/ffaccfb2-5b8c-4641-ada0-8b2f278a2a03/assetsScreenshot_2025-02-26-20-20-33-18-20250226202054-ouqr2cj.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMAAUZX%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCsiwMmG7W3Og8h%2F9JluhWYbl%2FE7SujMzwUSf2KuX5ckgIhAKP38P5unduxvTK5s%2BleBOOL%2FxOkBApzx%2Fb%2Fc37E7QdYKv8DCC0QABoMNjM3NDIzMTgzODA1Igx7xAH1qo3ICiGunDEq3ANjn%2BHzfuyrisNWKnVvsDjLW18RKpYXazj8yFiqqKzmUgQO0wjU7syQCQc8clS36gATXDWx7clKB1p%2FoRp39HDqMh%2FxdUQmDsOkqPBaqk16enWxsnWy59RzmsC3cyccmF48vOJttJfvfO6QKgBr%2BOok9x%2Bz0upmAJikdpNkNJ3qyH90YGA9ZoEoOCK75ILLPGCVG8YwxPAr895fVdM%2FYs5IwOz7666pbkkvAYQRt%2F1NEyOaSRnMBe7IniNGuz1wcXsG9aEWyo0NWlp6Y60lxG06JYwEkCQ9CgY25rcSMd22eMt0jAIBH2dakijwNO%2BiXZvzpqx0cUQ%2BLP1DR5fRm1MGM4RwJSN423greGLuqrJ426urm%2F9DU9jzQfu5DPzLUbP00oNltafeYiqc1lSA%2BRKOLyoKXVorQMB7Hh2Sp28eJ5LXXHYzCUmPKWnEKXc%2FjpDNZpthFm%2FK%2FpFQ%2BzSon3IJUkE0RRtz5S7YCnWUDpZpr9k4UUKn44w5yp2k0cJJPDEA0j1EYK%2F%2FPn4kLmb5NJR9ZALHRJqFBHoM0l258Uz6Fx0CQEeEVlGGwdP8Dg3tYZH5uWnjiivk61SjsRrqp%2Bk68uAW68gT9vvpwOdClMMsugTUjjOGlYDnVU1ZUTCzyKHLBjqkARL7xizgnKjpEffX52Qng4S3Z8qxxBP%2FmgHkie9MmZyzFeAVJlW1DKgYucOjwHp4Mmckq%2FQsFlk47KxCg9uHnvp7XMv7BIfTeTN4y1lRo6HxSeSSEqmk7ImBK%2FlY8jOKelymACqYnnWIJsbqjcEeOEzBzipn2TA8oQ2Vxnw8NW1Ax5d849Q4oW7VV2feIzwbnLdKpNrH8bd7%2FDGmSG2qyUD7Kjt7&X-Amz-Signature=4e1ea76c4268de5a5bbf40b61ef8cc89205efd21fe8c8a471a945a64d3d1ce2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-20-33-18


![assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/639c7e72-977d-4aab-b4e1-158a3d38fba5/assetsScreenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204411-sty4h9c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMAAUZX%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCsiwMmG7W3Og8h%2F9JluhWYbl%2FE7SujMzwUSf2KuX5ckgIhAKP38P5unduxvTK5s%2BleBOOL%2FxOkBApzx%2Fb%2Fc37E7QdYKv8DCC0QABoMNjM3NDIzMTgzODA1Igx7xAH1qo3ICiGunDEq3ANjn%2BHzfuyrisNWKnVvsDjLW18RKpYXazj8yFiqqKzmUgQO0wjU7syQCQc8clS36gATXDWx7clKB1p%2FoRp39HDqMh%2FxdUQmDsOkqPBaqk16enWxsnWy59RzmsC3cyccmF48vOJttJfvfO6QKgBr%2BOok9x%2Bz0upmAJikdpNkNJ3qyH90YGA9ZoEoOCK75ILLPGCVG8YwxPAr895fVdM%2FYs5IwOz7666pbkkvAYQRt%2F1NEyOaSRnMBe7IniNGuz1wcXsG9aEWyo0NWlp6Y60lxG06JYwEkCQ9CgY25rcSMd22eMt0jAIBH2dakijwNO%2BiXZvzpqx0cUQ%2BLP1DR5fRm1MGM4RwJSN423greGLuqrJ426urm%2F9DU9jzQfu5DPzLUbP00oNltafeYiqc1lSA%2BRKOLyoKXVorQMB7Hh2Sp28eJ5LXXHYzCUmPKWnEKXc%2FjpDNZpthFm%2FK%2FpFQ%2BzSon3IJUkE0RRtz5S7YCnWUDpZpr9k4UUKn44w5yp2k0cJJPDEA0j1EYK%2F%2FPn4kLmb5NJR9ZALHRJqFBHoM0l258Uz6Fx0CQEeEVlGGwdP8Dg3tYZH5uWnjiivk61SjsRrqp%2Bk68uAW68gT9vvpwOdClMMsugTUjjOGlYDnVU1ZUTCzyKHLBjqkARL7xizgnKjpEffX52Qng4S3Z8qxxBP%2FmgHkie9MmZyzFeAVJlW1DKgYucOjwHp4Mmckq%2FQsFlk47KxCg9uHnvp7XMv7BIfTeTN4y1lRo6HxSeSSEqmk7ImBK%2FlY8jOKelymACqYnnWIJsbqjcEeOEzBzipn2TA8oQ2Vxnw8NW1Ax5d849Q4oW7VV2feIzwbnLdKpNrH8bd7%2FDGmSG2qyUD7Kjt7&X-Amz-Signature=7020289d12b9f93d2f6c58c1e59e9e7f69c6c2aa7ac01665bac208c97bf41391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-44-01-92_c0fc23361849dfc0a4b4c6dd2adcac79


![assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/a233323b-a7bb-4c24-9907-f93f4025e37b/assetsScreenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79-20250226204636-wktpnnx.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMAAUZX%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCsiwMmG7W3Og8h%2F9JluhWYbl%2FE7SujMzwUSf2KuX5ckgIhAKP38P5unduxvTK5s%2BleBOOL%2FxOkBApzx%2Fb%2Fc37E7QdYKv8DCC0QABoMNjM3NDIzMTgzODA1Igx7xAH1qo3ICiGunDEq3ANjn%2BHzfuyrisNWKnVvsDjLW18RKpYXazj8yFiqqKzmUgQO0wjU7syQCQc8clS36gATXDWx7clKB1p%2FoRp39HDqMh%2FxdUQmDsOkqPBaqk16enWxsnWy59RzmsC3cyccmF48vOJttJfvfO6QKgBr%2BOok9x%2Bz0upmAJikdpNkNJ3qyH90YGA9ZoEoOCK75ILLPGCVG8YwxPAr895fVdM%2FYs5IwOz7666pbkkvAYQRt%2F1NEyOaSRnMBe7IniNGuz1wcXsG9aEWyo0NWlp6Y60lxG06JYwEkCQ9CgY25rcSMd22eMt0jAIBH2dakijwNO%2BiXZvzpqx0cUQ%2BLP1DR5fRm1MGM4RwJSN423greGLuqrJ426urm%2F9DU9jzQfu5DPzLUbP00oNltafeYiqc1lSA%2BRKOLyoKXVorQMB7Hh2Sp28eJ5LXXHYzCUmPKWnEKXc%2FjpDNZpthFm%2FK%2FpFQ%2BzSon3IJUkE0RRtz5S7YCnWUDpZpr9k4UUKn44w5yp2k0cJJPDEA0j1EYK%2F%2FPn4kLmb5NJR9ZALHRJqFBHoM0l258Uz6Fx0CQEeEVlGGwdP8Dg3tYZH5uWnjiivk61SjsRrqp%2Bk68uAW68gT9vvpwOdClMMsugTUjjOGlYDnVU1ZUTCzyKHLBjqkARL7xizgnKjpEffX52Qng4S3Z8qxxBP%2FmgHkie9MmZyzFeAVJlW1DKgYucOjwHp4Mmckq%2FQsFlk47KxCg9uHnvp7XMv7BIfTeTN4y1lRo6HxSeSSEqmk7ImBK%2FlY8jOKelymACqYnnWIJsbqjcEeOEzBzipn2TA8oQ2Vxnw8NW1Ax5d849Q4oW7VV2feIzwbnLdKpNrH8bd7%2FDGmSG2qyUD7Kjt7&X-Amz-Signature=bf715172c1f35fd444e2212e8073771f10f293866ed254a10a222c67961a828d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Screenshot_2025-02-26-20-46-30-17_c0fc23361849dfc0a4b4c6dd2adcac79


## 运算符运算方向


![assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/24741a29-7b61-402e-800b-ff72c4995d60/assetsIMG_20250310_093354-20250310093414-qxw6a95.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMAAUZX%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCsiwMmG7W3Og8h%2F9JluhWYbl%2FE7SujMzwUSf2KuX5ckgIhAKP38P5unduxvTK5s%2BleBOOL%2FxOkBApzx%2Fb%2Fc37E7QdYKv8DCC0QABoMNjM3NDIzMTgzODA1Igx7xAH1qo3ICiGunDEq3ANjn%2BHzfuyrisNWKnVvsDjLW18RKpYXazj8yFiqqKzmUgQO0wjU7syQCQc8clS36gATXDWx7clKB1p%2FoRp39HDqMh%2FxdUQmDsOkqPBaqk16enWxsnWy59RzmsC3cyccmF48vOJttJfvfO6QKgBr%2BOok9x%2Bz0upmAJikdpNkNJ3qyH90YGA9ZoEoOCK75ILLPGCVG8YwxPAr895fVdM%2FYs5IwOz7666pbkkvAYQRt%2F1NEyOaSRnMBe7IniNGuz1wcXsG9aEWyo0NWlp6Y60lxG06JYwEkCQ9CgY25rcSMd22eMt0jAIBH2dakijwNO%2BiXZvzpqx0cUQ%2BLP1DR5fRm1MGM4RwJSN423greGLuqrJ426urm%2F9DU9jzQfu5DPzLUbP00oNltafeYiqc1lSA%2BRKOLyoKXVorQMB7Hh2Sp28eJ5LXXHYzCUmPKWnEKXc%2FjpDNZpthFm%2FK%2FpFQ%2BzSon3IJUkE0RRtz5S7YCnWUDpZpr9k4UUKn44w5yp2k0cJJPDEA0j1EYK%2F%2FPn4kLmb5NJR9ZALHRJqFBHoM0l258Uz6Fx0CQEeEVlGGwdP8Dg3tYZH5uWnjiivk61SjsRrqp%2Bk68uAW68gT9vvpwOdClMMsugTUjjOGlYDnVU1ZUTCzyKHLBjqkARL7xizgnKjpEffX52Qng4S3Z8qxxBP%2FmgHkie9MmZyzFeAVJlW1DKgYucOjwHp4Mmckq%2FQsFlk47KxCg9uHnvp7XMv7BIfTeTN4y1lRo6HxSeSSEqmk7ImBK%2FlY8jOKelymACqYnnWIJsbqjcEeOEzBzipn2TA8oQ2Vxnw8NW1Ax5d849Q4oW7VV2feIzwbnLdKpNrH8bd7%2FDGmSG2qyUD7Kjt7&X-Amz-Signature=58cfcf9a0aa0a6f23ed288b1aec7f36c9551497c0871e7be3b4b08d63d1a02ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


IMG_20250310_093354


## 运算符优先级与结合性


![assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/68896bbf-8073-437c-9332-d1f9f026dae4/assetsIMG_20250310_171809-20250310171825-5kyggeu.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMAAUZX%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCsiwMmG7W3Og8h%2F9JluhWYbl%2FE7SujMzwUSf2KuX5ckgIhAKP38P5unduxvTK5s%2BleBOOL%2FxOkBApzx%2Fb%2Fc37E7QdYKv8DCC0QABoMNjM3NDIzMTgzODA1Igx7xAH1qo3ICiGunDEq3ANjn%2BHzfuyrisNWKnVvsDjLW18RKpYXazj8yFiqqKzmUgQO0wjU7syQCQc8clS36gATXDWx7clKB1p%2FoRp39HDqMh%2FxdUQmDsOkqPBaqk16enWxsnWy59RzmsC3cyccmF48vOJttJfvfO6QKgBr%2BOok9x%2Bz0upmAJikdpNkNJ3qyH90YGA9ZoEoOCK75ILLPGCVG8YwxPAr895fVdM%2FYs5IwOz7666pbkkvAYQRt%2F1NEyOaSRnMBe7IniNGuz1wcXsG9aEWyo0NWlp6Y60lxG06JYwEkCQ9CgY25rcSMd22eMt0jAIBH2dakijwNO%2BiXZvzpqx0cUQ%2BLP1DR5fRm1MGM4RwJSN423greGLuqrJ426urm%2F9DU9jzQfu5DPzLUbP00oNltafeYiqc1lSA%2BRKOLyoKXVorQMB7Hh2Sp28eJ5LXXHYzCUmPKWnEKXc%2FjpDNZpthFm%2FK%2FpFQ%2BzSon3IJUkE0RRtz5S7YCnWUDpZpr9k4UUKn44w5yp2k0cJJPDEA0j1EYK%2F%2FPn4kLmb5NJR9ZALHRJqFBHoM0l258Uz6Fx0CQEeEVlGGwdP8Dg3tYZH5uWnjiivk61SjsRrqp%2Bk68uAW68gT9vvpwOdClMMsugTUjjOGlYDnVU1ZUTCzyKHLBjqkARL7xizgnKjpEffX52Qng4S3Z8qxxBP%2FmgHkie9MmZyzFeAVJlW1DKgYucOjwHp4Mmckq%2FQsFlk47KxCg9uHnvp7XMv7BIfTeTN4y1lRo6HxSeSSEqmk7ImBK%2FlY8jOKelymACqYnnWIJsbqjcEeOEzBzipn2TA8oQ2Vxnw8NW1Ax5d849Q4oW7VV2feIzwbnLdKpNrH8bd7%2FDGmSG2qyUD7Kjt7&X-Amz-Signature=af36793cab8cfbc80530e7e268963dd1d58c37eb0555a607df32fee00d0ed6e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![1000016228.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/51145155-d0f0-4bb1-85cf-344e4c2400e0/89fd09ac-45ea-4b1b-9548-2ea4637159df/1000016228.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTIBE7MH%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T041235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHukSP7ot7H80layeZ7JHc5IEF1jRATVRX2eE5qYEWLlAiBMUfec7k0PF2ti%2BoRfgi3AFx6DF5SHXZPYqGaHl9YkYSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMSKE%2B917aso1XchVGKtwDNt6pVo51MJ%2BYMSjvVHdYw2RTg7wLAegz3Us2SZJeOkVbOBVuGMVp85V3f%2BOlNubR7JJe%2F5LZ0ll5hGs1GluOoM3hlkmCUawmE%2FSuhg%2BY6%2FGd0HWTsdNR3555lmZUG3DuKxMo%2BtJAUb%2FOxxl8b9nzAHF3wmWIBTj3%2BpYcdYRwYANIfDvgqpH%2F8bx4y42HSXGmMgGbxzWkZ99fFAmxkdiKS%2FsOhr86Cj9avgW5J5imZ1OqofZtsySVWNXC5jAwZY0Ofb%2FzV8ZmJW46S2F13z4%2FBDXj2guvUbtP%2FGXk2FvpkYFE1HVSg4L3v6qAyGWUV0e7ZHSOA%2BsGEFq2G52%2B5u06C4lPclZBKpUIaRppWXJHVmjSE2nFkDY3CKfYj%2F2Y%2B4CVFaNevO3di5dqrgaYJ%2BWVkouSGPbjHuKZFHeRaoIiAt3Mr%2Bow2RRO3xx47cEBXs%2FXZMxpgaCIbUevwut2W7joJIaYQ4tkiYVFj2EQYGvNDjPFkeWRtlOvcIAVn5jRn64tF%2Bz7PH%2BYfQkwCzPtmdiBSaBjO9PlwweM7jA94o8%2BgjlZimfuurYXHmEjBnBrrVYN7%2FAtSAAC3YUmD80XBaJuYsCUS7%2Bg4z2MVP49HlIO296LfJ54zXfeNbNYzysw5cehywY6pgGYVPaWL3VgZna5sqyJnnkDLyx2EVYS37LVVXv8nBu2BW%2BEhGkVzQ5AuUbneGpOrnUWm0%2Bn74p%2Bajx1KMGWcxaXhYzK%2B3BQmVlljPlF2ZJ%2FlRCUBWeN1h1mtY9obPU5O2WtMyGDzz0UJBkNyYBVp7KHIu%2BsfG8ECVc2S%2FSxVuBF77cBtAP1eyYgGA3elhKC9X3o%2BvZ0DJ8lBjwtzmxOcJsV2gBtK7Gu&X-Amz-Signature=e616cf849d09dc0c42aa2015c20edbc3f11956c55deb1d670ef17d1b22bf8db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

