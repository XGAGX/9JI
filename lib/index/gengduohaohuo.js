// <li>
//     <a href="#">
//         <img src="img/2017101611522821.jpg" alt="" />
//         <p>飞利浦电动牙刷HX6730
//         </p>
//         <i>￥<em>9999.00</em></i>
//     </a>
// </li>
define(['jquery'],function($){

// ================================
return function(div){
                var a=[47,82,10,12,13,14,15,16,17,18]
                a='sql=1&name='+a.join()
                $.post('api/mySql.php',a,function(e){
                    a=JSON.parse(e)
                    // var con=$(`<div class="f-center yd fl"></div>`)
                    for(var i=0;i<10;i++){
                        var tp=a[i].url.split(',')
                        var bt=gl(a[i].name)
                       var c=$(`<li>
                                    <a href="html/goods.html?id=${a[i].id}">
                                        <img src="img/goods/sj/${tp[0]}" alt="" />
                                        <p>${bt}</p>
                                        <i>￥<em>${a[i].price}</em></i>
                                    </a>
                                </li>`)
                       $(div).append(c)
                    }
                })
         function gl(a){
            var c=['托帕蓝','香槟金','黑色','玄黑','活力蓝','碳黑色','黑金','樱草绿','曜石黑','莱茵蓝','极光色']
            for(var i=0;i<c.length;i++){
               a=a.replace(c[i],'@@')
            }
            a=a.split('@@')
            return a[0]
        }

}});
