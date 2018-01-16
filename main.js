myButton.addEventListener('click', (e)=>{
    let request = new XMLHttpRequest()
    request.onreadystatechange = () =>{ 
        if(request.readyState === 4){
            console.log('请求响应完毕')
            if(request.status >= 200 && request.status < 300){
                console.log('请求成功')
                console.log(request.responseText)
                let parser = new DOMParser();
                let xmlDoc = parser.parseFromString(request.responseText, "text/xml");
                let content = xmlDoc.getElementsByTagName('body')[0].textContent
                let title = xmlDoc.getElementsByTagName('heading')[0].textContent
                console.log(content)
                console.log(title)
            }else if(request.status >= 400){
                console.log('请求失败')
            }
        }
    }
    request.open('GET', '/xxx') // 配置 request 
    request.send()
})