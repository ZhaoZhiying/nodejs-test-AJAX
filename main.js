window.jQuery = function(nodeOrSelector){
    let nodes = {}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}

window.$ = window.jQuery

window.jQuery.ajax = function(options){
    // arguments 接受两种参数
    let url
    if(arguments.length === 1){
        url = options.url
    }else if(arguments.length === 2){
        url = arguments[0]//这时候是 options
        options = arguments[1] //纠正
    }

    let method = options.method
    let body = options.body
    let successFn = options.successFn
    let failFn = options.failFn
    let headers = options.headers 

    let request = new XMLHttpRequest()
    request.open(method, url) // 配置 request
    for(let key in headers){
        let value = headers[key]
        request.setRequestHeader(key, value)
    }
    request.onreadystatechange = ()=>{ 
        if(request.readyState === 4){     
            if(request.status >= 200 && request.status < 300){
                successFn.call(undefined, request.responseText) // call 给使用方叫 callback （回调）
            }else if(request.status >= 400){
                failFn.call(undefined, request)
            }
        }
    }
    request.send(body) 
}

// 使用方代码
myButton.addEventListener('click', (e)=>{
    window.jQuery.ajax({
        url: '/xxx', 
        method: 'post', 
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'frank': '18'
        },
        successFn: (x)=>{
            console.log(x)
        }, //传了个函数 但是不 call
        failFn: (x)=>{
            console.log(x)
        },
    })
})