# rml-docs
文档编写，加油，2020！
### docs/.vuepress/styles/palette.styl 可以设置样式
### 启动：yarn dev
::: tip 提示
this is a tip
:::

::: warning 注意
this is a tip
:::

::: danger 警告
this is a tip
:::
### 检查你电脑上是否有SSH Key
- ~/.ssh
- 存在：`bash: /c/Users/.../.ssh: Is a directory`
- 不存在：`bash: /c/Users/.../.ssh: No such file or directory`
### 创建SSH Key
- ssh-keygen -t rsa -C "你的邮箱"
### [字体转换器](http://www.diyiziti.com/) - 印章篆体字体 - 100px - 600*200
### 引入存在的文件作为代码片段
- `<<< @/文件夹名称/文件名称`
- @/：为当前项目所在的位置，绝对路径，例如：`E:\shop\`

```javascript
// 全局预编译 GO(Gobal Object)
// 变量声明 作为GO的属性，赋予undefined
// 函数声明 作为GO的属性，赋予函数体

// 函数预编译，先变量后函数
// 创建AO活动对象(Active Object)
// 查找函数里形参与变量声明，赋予undefined
// 实参给形参赋值
// 查找函数声明，赋予函数体
// 把变量提出来，赋予undefined的步骤：变量提升
// 把函数提出来，赋予函数体的步骤：函数提升
```
```javascript
// 全局作用域与作用域链
// 局部：外面压根不能访问
// 全局：不安全，哪里都能访问
```