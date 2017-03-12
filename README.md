# Start 快速开始

## 引入

有两种方式在你的项目中使用 Start 。

### 方式一

```html
<script src="./lib/start/run.js"></script>
```

加入这行代码，进行初始化：

```javascript
// param: appKey
Start.init('564a9acf7717444025ce5c95');
```

然后就可以在你项目的所有代码中使用 Start 了。（这种情况会产生一个 Start 全局变量）

### 方式二

如果介意引入全局变量，而且使用 ES6，可以这样引入：

```javascript
import Start from './lib/start/index';
```

然后自己绑定到想绑定的变量：

```javascript
(function(root){
	root.Start = Start;
})(window);
```

### 在 AngularJS 中使用 Start

如果你使用 AngularJS 的话，可以将 Start 注册为一个服务：

```javascript
app.service('Start', () => Start);
```

初始化应用：

```javascript
app.run(() => {
    // param: appKey
	Start.init('564a9acf7717444025ce5c95');
})
```

然后，在需要使用 Start 的地方注入就行了。

## 开始

前面在 `Start.init()` 中使用的 `appKey` 可以在创建应用后，在 [控制台-设置][1] 中找到。

在进行过初始化后，就可以进行开发了。

```javascript
var Todo = Start.Model('todo');
var todo = new Todo({
    title: '打豆豆',
    completed: false
});
todo.save().then(function(result){
    alert('success!');
})
```

OK，现在，你可以在 控制台-数据 看到上面创建的相关数据了。

更多使用方法请参考 Start 的 API 文档 。



  [1]: http://localhost:5555/#/setting?id=564a9a5c7717444025ce5c93
