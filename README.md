# loading jquery插件

loading 插件用来在网络加载的适合提供加载图片

## 用法

```javascript
// 初始化loading对象
var loading = $.createLoading({
    img:"../images/loading.png", //指定loading的图片,如果不指定，使用默认图片
    size: '15px', //loading图片的尺寸,只会设置图片的宽度，不改变图片的比例，如果不指定使用使用图片原来的大小
    container:"#box", //指定loading的容器，如果不指定，默认为body
    mask:"", //指定mask背景颜色 如果不指定默认为透明
})

// 显示loading
loading.show();

// 隐藏loading
loading.hide();
```
## 参数
| 参数名        | 说明           | 默认值  |
| ------------- |:-------------:| -----:|
| img           | loading的图片  | 默认图片 |
| size          | loading图片的尺寸 | auto |
| container    | loading的容器   |  body |
| mask          | mask背景颜色     | none |

## 说明
加载图片会在指定的container元素下面居中显示
mask会覆盖container元素border内的包裹padding的所有内容
