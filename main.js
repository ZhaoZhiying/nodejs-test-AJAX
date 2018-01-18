window.jQuery = function(nodeOrSelector){
    let nodes = {}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}

window.$ = window.jQuery

// ES6 析构赋值
window.jQuery.ajax = function({url, method, body, successFn, failFn, headers}){

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

function f1(responseText){}
function f2(responseText){}

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
            f1.call(undefined,x)
            f2.call(undefined,x)
        }, //传了个函数 但是不 call
        failFn: (x)=>{
            console.log(x)
        },
    })
})