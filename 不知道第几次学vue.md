# 不知道第几次学vue

## el 挂载点

![image-20220406135008862](C:\Users\俊萍\AppData\Roaming\Typora\typora-user-images\image-20220406135008862.png)



## data 数据对象

![image-20220406135047233](C:\Users\俊萍\AppData\Roaming\Typora\typora-user-images\image-20220406135047233.png)

![image-20220406135509046](C:\Users\俊萍\AppData\Roaming\Typora\typora-user-images\image-20220406135509046.png)

1. 对象的点语法
2. 数组的索引语法



## Vue 本地应用

> ![image-20220406135625524](C:\Users\俊萍\AppData\Roaming\Typora\typora-user-images\image-20220406135625524.png)

### v-text

![image-20220406145719515](C:\Users\俊萍\AppData\Roaming\Typora\typora-user-images\image-20220406145719515.png)

- v-text：设置标签的文本内容，是全部替换
- 插值表达式：可以部分替换
- 如果文本里有 html 标签，不会被解析出来。

都可以用

![image-20220406145402407](C:\Users\俊萍\AppData\Roaming\Typora\typora-user-images\image-20220406145402407.png)



### v-html

![image-20220406150104137](C:\Users\俊萍\AppData\Roaming\Typora\typora-user-images\image-20220406150104137.png)

设置标签的 innerHTML 属性。如果文本里有 html 标签，则会被解析出来。

**和 v-text 的区别**

![image-20220406150041784](C:\Users\俊萍\AppData\Roaming\Typora\typora-user-images\image-20220406150041784.png)



### v-on

![image-20220406152102994](C:\Users\俊萍\AppData\Roaming\Typora\typora-user-images\image-20220406152102994.png)

![image-20220406152744322](C:\Users\俊萍\AppData\Roaming\Typora\typora-user-images\image-20220406152744322.png)



### v-show

![image-20220406160524285](C:\Users\俊萍\AppData\Roaming\Typora\typora-user-images\image-20220406160524285.png)

![image-20220406160900500](C:\Users\俊萍\AppData\Roaming\Typora\typora-user-images\image-20220406160900500.png)

### v-if
- v-show：修改 display = 'none'来使元素不显示
- v-if：直接将元素从 dom 树中移除，所以开销更大
