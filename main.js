myButton.addEventListener('click', (e)=>{
    let request = new XMLHttpRequest()
    request.open('POST', '/xxx') //设置请求第一部分
    request.setRequestHeader('zz', '18') //设置请求第二部分
    request.setRequestHeader('Content-Type', 'x-www-form-urlencoded')
    request.send('我是第四部分') //设置请求第四部分
    request.onreadystatechange = () =>{ 
        if(request.readyState === 4){
            console.log('请求响应完毕')
            console.log(request.status) //获取响应第一部分 
            console.log(request.statusText) //获取响应第一部分 
            if(request.status >= 200 && request.status < 300){
                console.log('请求成功')
                console.log(request.getAllResponseHeaders())//获取响应第二部分
                console.log(request.getResponseHeader('Content-Type'))//获取响应第二部分
                console.log(request.responseText)//获取响应第四部分
                let string =  request.responseText
                // 把符合 JSON 语法的字符串
                // 转换成 JS 对应的值
                let object = window.JSON.parse(string)//JSON.parse 是浏览器提供的

            }else if(request.status >= 400){
                console.log('请求失败')
            }
        }
    }
})