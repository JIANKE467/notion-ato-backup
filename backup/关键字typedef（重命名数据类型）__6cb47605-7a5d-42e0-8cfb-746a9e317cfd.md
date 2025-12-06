
# 关键字typedef（重命名数据类型）


作用：重命名数据类型的名称，但原有名称仍然生效


示例


```c
#include <stdio.h>
int main()
{

 typedef float flt;
 //将flaot类型重命名为flt
   float a= 3.14;
   flt b=2.56;
  //7,8两行都有效，为浮点型

 return 0;
}
```

