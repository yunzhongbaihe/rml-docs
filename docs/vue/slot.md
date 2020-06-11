# slot
```md
<slot name=""> name 用于命名插槽
<slot> 元素作为组件模板之中的内容分发插槽 元素自身将被替换
```
### 1、基本使用
```vue
<!-- 子组件 -->
<div>
    <slot></slot>
</div>

<!-- 父组件 -->
<div>
    <template>这里是内容</template>
</div>
```
### 2、具名插槽
```vue
<!-- 子组件 -->
<div>
    <slot name="header"></slot>
    <slot></slot>
</div>

<!-- 父组件 -->
<div>
    <template #header>这里是名称为“header”插槽内容</template>
    <template v-slot="header">这里是名称为“header”插槽内容</template>
    <template>这是里内容</template>
</div>
```
### 3、插槽作用域
```vue
<!-- 子组件 -->
<div>
    <slot name="header" nickname="这里是昵称"></slot>
    <slot></slot>
</div>

<!-- 父组件 -->
<div>
    <template v-slot:header="scope">
        <div>这里是名称为“header”插槽内容</div>
        <!-- {"nickname":"这里是昵称"} -->
        <div>{{scope}}</div>
    </template>
    <template>这是里内容</template>
</div>
```