/*

# Mock

> fake.js


```js

// 使用 Mock
import Mock from 'mockjs';

let data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'users|1-100': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 101
    }]
});


// 输出结果
console.log(
    JSON.stringify(data, null, 4)
);

// JSON.stringify(value[, replacer[, space]]);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

```





*/