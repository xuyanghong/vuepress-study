# v-model

### 作用

Vue中使用v-model指令来实现表单元素和数据的双向绑定。监听用户的输入，然后更新数据。


### 原理
v-model本质上是个语法糖，其实现原理包含两个步骤

1. 通过v-bind绑定一个value属性
2. 通过v-on指令给当前元素绑定input事件

## 
    
* 脱离v-model 实现input type="text" 
``` js
<template>
    <input type="text" :value="myValue" @input="myValue = $event.target.value" placeholder="edit me">
    <p>Message is: {{ myValue }}</p>
</template>

<script>
    data() {
        return {
        myValue: '',
        };
    }
</script>
```


* 脱离v-model 实现单选 input type="radio" 
``` js
<template>
    <input type="radio" id="small" :checked="'small' === isChecked" @change="isChecked = $event.target.value" value="small" >
    <label for="small">small</label>

    <input type="radio" id="big" :checked="'big' === isChecked" @change="isChecked = $event.target.value" value="big">
    <label for="big">big</label>
    <span>Picked: {{ isChecked }}</span>
</template>

<script>
    data() {
        return {
        isChecked: 'big',
        };
    }
</script>
```


* 脱离v-model 实现多选 input type="checkbox" 

``` js
<template>
    <input type="checkbox" id="jack" value="Jack" :checked="'Jack' === checkedName1" @change="handleChange($event.target.value, 'Jack')">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" :checked="'John' === checkedName2" @change="handleChange($event.target.value, 'John')">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" :checked="'Mike' === checkedName3" @change="handleChange($event.target.value, 'Mike')">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
</template>

<script>
    data() {
        return {
            checkedName1: '',
            checkedName2: '',
            checkedName3: '',
        };
    },

    methods: {
        handleChange(value, id) {
            if(id === 'Jack') {
                this.checkedName1 = !this.checkedName1 ? value : ''
            } else if(id === 'John') {
                this.checkedName2 = !this.checkedName2 ? value : ''
            } else {
                this.checkedName3 = !this.checkedName3 ? value : ''
            }
        },
    }
</script>
```