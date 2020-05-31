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
### [改图宝](https://www.gaitubao.com/)
### 魏碑字体生成(https://yanti.laoxiezi.com/) - 华文新魏 - 85px - #FF0000 - #FFFFFF
### vscode(settings.json)
```json
{
    "editor.fontSize": 15, // 编辑区域字体大小
    "editor.detectIndentation": false,
    "editor.tabSize": 4,
    "editor.renderWhitespace": "all",
    "editor.renderControlCharacters": true,
    "editor.fontFamily": "JetBrains Mono",
    "editor.lineHeight": 30,
    "editor.fontWeight": "normal",
    "explorer.confirmDelete": false,
    // "files.autoSave": "afterDelay",
    // "files.autoSaveDelay": 500,
    "editor.minimap.enabled": false,
    "[jsp]": {},
    "files.associations": {
        "*.jsp": "jsp"
    },
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.donotVerifyTags": true,
    "terminal.integrated.shell.windows": "E:\\Git\\bin\\bash.exe",
    "terminal.integrated.fontFamily": "JetBrains Mono",
    "terminal.integrated.fontSize": 15,
    "terminal.integrated.cursorStyle": "line",
    "terminal.integrated.fontWeightBold": "normal",
    "terminal.integrated.lineHeight": 1.3,
    "terminal.integrated.rendererType": "dom",
    "git.autofetch": true,
    "update.showReleaseNotes": false,
    "workbench.startupEditor": "newUntitledFile",
    "[markdown]": {},
    "markdown-pdf.executablePath": "C:\\Program Files (x86)\\Google\\Chrom\\Application\\chrome.exe --disable-web-security -enable-easy-off-store-extension-install --test-type --ignore-certificate-errors",
    "files.trimTrailingWhitespace": true,
    "debug.console.fontFamily": "JetBrains Mono",
    "debug.console.fontSize": 15,
    "debug.console.lineHeight": 1.3,
    "editor.cursorStyle": "line-thin",
    "workbench.iconTheme": "vscode-simpler-icons", // 左侧目录图标
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "javascript.format.enable": true,
    // 是否在符号后面插入空格，例如 (name1, name2)
    "javascript.format.insertSpaceAfterCommaDelimiter": true,
    // 是否为匿名函数关键字与开始小括号间配置空格，例如 function ()
    "javascript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": false,
    "javascript.format.insertSpaceAfterConstructor": false,
    "javascript.format.insertSpaceAfterKeywordsInControlFlowStatements": false,
    "javascript.format.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces": false,
    // 是否为对象配置空格，例如 { name: 'name' }
    "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": false,
    "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,
    "javascript.format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": false,
    // 定义for循环语句中分号后面的空格处理
    "javascript.format.insertSpaceAfterSemicolonInForStatements": true,
    // 是否为=符号前后配置空格，例如 var a = 'aaa';
    "javascript.format.insertSpaceBeforeAndAfterBinaryOperators": true,
    // 是否为函数名称与小括号间配置空格，例如 function onclose()
    "javascript.format.insertSpaceBeforeFunctionParenthesis": false,
    "javascript.format.placeOpenBraceOnNewLineForControlBlocks": false,
    "javascript.format.placeOpenBraceOnNewLineForFunctions": false,
    "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": false,
    "typescript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": false,
    "html.format.extraLiners": "",
    "html.format.indentInnerHtml": false,
    "winopacity.opacity": 250,
    "vetur.validation.template": false,
    "workbench.colorTheme": "Default Light+",
    // 设置忽略文件以及文件夹
    "files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.DS_Store": true,
        "**/iOS": true,
        "**/.idea": true,
        "**.iml": true,
        "yarn.lock": true,
        "package-lock.json": true,
    },
    "git.ignoredRepositories": [
        ".idea,.iml"
    ],
}
```