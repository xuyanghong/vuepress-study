# crossorigin 和 integrity 属性

### crossorigin

``` js

<script src="https://code.jquery.com/jquery.slim.min.js"
    integrity="sha256-+hDz/gVbhp24mhOmoIT4Du4F3K5fs9fjjoe0rP5gSLs="
    crossorigin="anonymous"></script>

```

###

* 当引入跨域的脚本（比如用了 apis.google.com 上的库文件）时，如果这个脚本有错误，因为浏览器的限制（根本原因是协议的规定），是拿不到错误信息的。当本地尝试使用 window.onerror 去记录脚本的错误时，跨域脚本的错误只会返回 Script error。

* 而 HTML5 新的规定，是可以允许本地获取到跨域脚本的错误信息的，但有两个条件：一是跨域脚本的服务器必须通过 Access-Control-Allow-Origin 头信息允许当前域名可以获取错误信息，二是网页里的 script 标签也必须指明 src 属性指定的地址是支持跨域的地址，也就是 crossorigin 属性。

* 注意：假设浏览器默认可以将跨域脚本的错误信息返回，那么很容易会造成隐私的泄漏


### integrity

*  integrity 属性的值 指定浏览器提取的资源（文件）的base64编码的加密哈希值。如果资源匹配其中一个哈希值，它将被加载。