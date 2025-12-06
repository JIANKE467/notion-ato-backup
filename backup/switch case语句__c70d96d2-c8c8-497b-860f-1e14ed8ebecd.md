
# switch case语句


## 特性：


Q：为什么case后无break语句会执行其他case中的语句


问题代码：


```c
switch(i)
{
  case a:
  printf("文本一\n")；
  case b：
  printf("文本二\n")；
}
```


执行结果：（_假设前提条件符合第一个case语句执行条件）_


```plain text
文本一
文本二
```


A: 这是C语言中 switch 语句的设计特性，主要是为了允许多个 case 共享相同的代码块。（无break语句会导致编译器识别为如下形式）↓


```c
switch(i)
{
  case a:
  case b:
    printf("文本一\n")；
    printf("文本二\n")；
}
```

