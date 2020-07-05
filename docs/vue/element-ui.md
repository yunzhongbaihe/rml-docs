---
# 重置代码块为text的显示样式
textcodeRestStyle: true
hideLineNumbersWrapper: true
---
# element
### 校验
::: warning
在 el-form 表单校验中，el-form-item 上定义的 prop 属性，作用在 el-form 绑定的 model 直接子级上
:::
```js
// 百分比
{
    validator(rule, value, callback){
        const pattern = /^(\d|[1-9]\d|100)(\.\d{1,2})?$/;
        const v = parseFloat(value);
        if(v > 100){
            return callback(new Error('百分比不能大于100'));
        }
        if(!pattern.test(value)){
            return callback(new Error('请正确输入百分比数值'));
        }
        return callback();
    },
    message: ''
}
```
### 自定义上传
::: warning
回显数据：绑定 file-list 属性 <br>
上传之前的操作：在 before-upload（若 auto-upload 为 false，此时，需要使用 on-change ） 中进行，例如 校验格式、文件大小，返回false(停止上传) <br>
覆盖默认上传行为：http-request，从参数中可以得到 file 对象，或者直接使用 file 当作参数名 <br>
替换原有上传文件，实现始终只上传一个文件：上传之前先置空 file-list 数据源，上传成功后，重新赋值 file-list <br>
判断是否上传了文件：通过 this.$refs[refName].uploadFiles.length 进行判断
:::
```vue
<el-upload
    ref="upload"
    action="https://jsonplaceholder.typicode.com/posts/"
    :file-list="fileList"
    :on-change="onChange"
    :http-request="httpRequest"
    :on-remove="handleRemove"
    :auto-upload="false">
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <el-button
        style="margin-left:10px;" size="small"
        type="success" @click="submitUpload">
        上传到服务器
    </el-button>
</el-upload>
```
```js
export default{
    data(){
        return {
            fileList: [],
        }
    },
    methods: {
        // 因为 :auto-upload="false" 所以使用 on-change 监听
        onChange(file, fileList){
            const suffix = file.name.substring(file.name.lastIndexOf('.'));
            const fileTypes = ['.jpeg', '.jpg', '.png'];
            if(!fileTypes.includes(suffix)){
                this.$refs.upload.clearFiles();
                return this.$message.warning(`只支持上传 ${fileTypes.join('、')} 格式文件`);
            }
            return true;
        },
        // 上传到服务器前判断是否选取了文件
        submitUpload(){
            if(!this.$refs.upload.uploadFiles.length) return this.$message.warning('请选取文件');
            this.$refs.upload.submit(); // 会触发 http-request 绑定的方法
        },
        // 文件移除
        handleRemove(file, fileList){
            console.log('on-remove === ', file);
        },
        // 上传到服务器具体操作
        httpRequest({file}){
            console.log('http-request === ', file);
            return false;
        },
    }
}
```
