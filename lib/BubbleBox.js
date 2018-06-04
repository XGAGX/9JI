define(function(){
    return {
        /**
         * 初始化操作
         * 在网页载入是时运行一次即可
         */
        Init:function(){
            var div=document.createElement('div')
                div.style='position: absolute;background-color: #000;padding:10px;display: none;border: 1px solid #ccc'
                // div.innerHTML=x
                div.setAttribute('name','qpk')
            var i=document.createElement('i')
                i.style='position: absolute;bottom:-15px;left:8px;border: 5px solid transparent;border-top: 10px solid #000;'
                div.appendChild(i)
            var i1=i.cloneNode()
                i1.style.bottom='-12px'
                div.appendChild(i1)
            var content=document.createElement('span')
                div.appendChild(content)
                document.body.appendChild(div)
        },
        /**
         * 隐藏气泡框
         */
        Hidden:function(){
            var div=document.getElementsByName('qpk')[0]
                div.style.display='none'
        },
        /**
         * 显示气泡框
         * @param {Array} xy     坐标
         * @param {string} x      显示的内容
         * @param {string} color  背景颜色
         * @param {string} color1 边框颜色.可选
         */
        Show:function(xy,x,color,color1,color3){
            if(!color1){color1=color}
                // console.log(color1)
            var div=document.getElementsByName('qpk')[0]
                var i=div.children[0]
                var i1=div.children[1]
                var content=div.lastChild
                div.style.backgroundColor=color
                div.style.display='block'
                div.style.color=color1
                div.style.borderColor=color3
                i.style.borderTopColor=color3
                i1.style.borderTopColor=color
                content.innerHTML=x
                div.style.left= xy[0]-8+'px'
                div.style.top= xy[1]-div.offsetHeight-18+'px'
        }
    }
})
 