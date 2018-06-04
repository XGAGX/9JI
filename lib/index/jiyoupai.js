define(['jquery'],function($){
// var a=
// ================================
return function(div){
    $.get('api/index.php','qsl=chuxiao', function(c) {
            // console.log(JOSN.si)
            var data=$.parseJSON(c)
            // console.log(data)
            var left=$(` <div class="f-left fl">
                            <div class="f-left-top">
                                <a href="html/goods.html?id=31" >
                                    <img src="img/goods/efe1737dfe1a2dc16eed7bcc6be600ed_2cdf221d1ba269.png" alt="" width="190" height="290" />
                                    <div >
                                        <h4>iPhone X</h4>
                                        <p>官网直降700 现货立购</p>
                                    </div>
                                </a>
                                <span><a href="#">iPhone X</a><em>></em></span>
                            </div>
                             <div class="f-left-bottom clearfix">
                                <i class="ioc-sjx"></i>
                                <div>
                                    <p>热销榜</p>
                                    <a href="#">快速充电</a>
                                    <a href="#">快速充电</a>
                                    <a href="#">快速充电</a>
                                    <a href="#">快速充电</a>
                                </div>
                            </div>
                        </div>
                        `)
                $(div).append(left)
            // 回调套嵌
            var Pr=new Promise(function(resolve,rejected){
                 // 获取8个数据
                var a=[10,12,13,14,15,16,17,18]
                a='sql=1&name='+a.join()
                $.post('api/mySql.php',a,function(e){
                    a=JSON.parse(e)
                    var con=$(`<div class="f-center yd fl"></div>`)
                    for(var i=0;i<8;i++){
                        var tp=a[i].url.split(',')
                        var bt=gl(a[i].name)
                       var c=$(`<a href="html/goods.html?id=${a[i].id}">
                                    <h4>${bt}</h4>
                                    <p>前后2000万</p>
                                    <i>￥<em>${a[i].price}</em></i>
                                    <img src="img/goods/sj/${tp[0]}" width="120" height="120" alt="" />
                                </a>`)
                       $(con).append(c)
                    }
                    $(div).append(con)
                    resolve()
                })
            }).then(function(){
                // 获取8个数据
                var a=[68,12,11,58]
                a='sql=1&name='+a.join()
                $.post('api/mySql.php',a,function(e){
                    a=JSON.parse(e)
                    var con=$(`<div class="f-right  yd fl"></div>`)
                    for(var i=0;i<4;i++){
                        var tp=a[i].url.split(',')
                        // 取名称
                        var bt=gl(a[i].name)
                       var c=$(`<a href="html/goods.html?id=${a[i].id}">
                                    <h4>${bt}</h4>
                                    <p>前后2000万</p>
                                    <img src="img/goods/sj/${tp[0]}" width="80" height="80" alt="" />
                                </a>`)
                       $(con).append(c)
                    }

                    $(div).append(con)
                })
            })
    });
    function gl(a){
        var c=['托帕蓝','香槟金','黑色','玄黑','活力蓝','碳黑色','黑金','樱草绿','曜石黑','莱茵蓝','极光色']
        for(var i=0;i<c.length;i++){
           a=a.replace(c[i],'@@')
        }
        a=a.split('@@')
        return a[0]
    }
             
    
    
}
})