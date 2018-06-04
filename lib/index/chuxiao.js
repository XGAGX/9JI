define(['jquery'],function($){
    // console.log('xc')
    // var a=[]
    // for(var i=0;i<15;i++){
    //     a.push(i)
    // }
    //      var a=jaxdata.get(a.join())
    // var date={}
    // var _goods
    // date[goods]=
// var data=[
// {url:'img/211aad974c7efe.png',
//     goods:[
//     {src:'img/goods/sj/20180412093821677.jpg',bt:'华为MateRS ',js:'直降700 现货立购',id:14},
//     {src:'img/goods/sj/20171207161146994.jpg',bt:'红米5Plus4G+',js:'特价热销 高性价比',id:13},
//     {src:'img/goods/sj/20161201144943309.jpg',bt:'OPPOR9sPlus',js:'卓越性能 强劲续航',id:12},
//     {src:'img/goods/sj/20170511093531753.jpg',bt:'vivoX9',js:'卓越性能 强劲续航',id:11},
//     {src:'img/goods/sj/20170106114257228.jpg',bt:'华为P9',js:'卓越性能 强劲续航',id:10}]
// },{
//     url:'img/212d7796645a0d.png',
//     goods:[
//     {src:'img/goods/sj/20180515201957378.jpg',bt:'锤子坚果R1',js:'直降700 现货立购',id:15},
//     {src:'img/goods/sj/20170331154413151.jpg',bt:'AGMM2',js:'直降700 现货立购',id:16},
//     {src:'img/goods/sj/20170527160616138.jpg',bt:'金立S10',js:'直降700 现货立购',id:17},
//     {src:'img/goods/sj/20171213175336500.jpg',bt:'华为麦芒6',js:'卓越性能 强劲续航',id:18},
//     {src:'img/goods/sj/20180312170113226.jpg',bt:'华为荣耀畅玩7C',js:'卓越性能 强劲续航',id:19}]
// },{
//     url:'img/22a299beefd026.png',
//     goods:[
//     {src:'img/goods/sj/2017090610012930.jpg',bt:'OPPOA57',js:'卓越性能 强劲续航',id:21},
//     {src:'img/goods/sj/2017092815152487.jpg',bt:'魅蓝note6',js:'卓越性能 强劲续航',id:22},
//     {src:'img/goods/sj/20180124142930685.jpg',bt:'华为Mate9',js:'卓越性能 强劲续航',id:25},
//     {src:'img/goods/sj/20180117143300630.jpg',bt:'中兴天机AxonM',js:'卓越性能 强劲续航',id:26},
//     {src:'img/goods/sj/20171113085535581.jpg',bt:'vivoX20',js:'卓越性能 强劲续航',id:29}]
// }
// ];
// console.log(JSON.stringify(data))
     
// var html=`<div>
//                             <a href="html/list.html"><img src="img/211aad974c7efe.png" alt="" /></a>
//                             <ul class="yd clearfix">
//                                 <li class="left" style="">
//                                     <a href="#">
//                                         <h4>iphone X</h4>
//                                         <p>直降700 现货立购</p>
//                                         <img src="img/1.jpg" height="160" width="160" alt="" />
//                                     </a>
//                                     <a href="#">
//                                         <h4>iphone 6</h4>
//                                         <p>特价热销 高性价比</p>
//                                         <img src="img/1.jpg" height="80" width="80" alt="" />
//                                     </a>
//                                 </li>
//                                 <li class="right">
//                                     <a href="#">
//                                         <h4>iphone 6</h4>
//                                         <p>特价热销 高性价比</p>
//                                         <img src="img/1.jpg" height="80" width="80" alt="" />
//                                     </a>
//                                     <a href="#">
//                                         <h4>iphone 6</h4>
//                                         <p>特价热销 高性价比</p>
//                                         <img src="img/1.jpg" height="80" width="80" alt="" />
//                                     </a>
//                                     <a href="#">
//                                         <h4>iphone 6</h4>
//                                         <p>特价热销 高性价比</p>
//                                         <img src="img/1.jpg" height="80" width="80" alt="" />
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
// `;
// var kj=$(`<div>
//                             <a href="html/list.html"><img src=${data[]} alt="" /></a>
//                             <ul class="yd clearfix">
//                                 <li class="left" style="">
                                    
//                                 </li>
//                                 <li class="right">
                                    
//                                 </li>
//                             </ul>
//                         </div>`)
// var sp=$(`<a href="#"><h4>iphone 6</h4><p>特价热销 高性价比</p><img src="img/1.jpg" height="80" width="80" alt="" /></a>`)
// ================================
return function(div){
    var data
    $.get('api/index.php','qsl=chuxiao', function(c) {
            // console.log(JOSN.si)
            data=$.parseJSON(c)
            console.log(data)
            for(var i=0;i<data.length;i++){
                // 生成框架
                var kj=$(`<div><a href="html/list.html"><img src=${data[i].url} alt="" /></a><ul class="yd clearfix"><li class="left" style=""></li><li class="right"></li></ul></div>`)
                for(var c=0;c<data[i].goods.length;c++){
                    // 填入商品数据
                    if(c==0){
                        var sp=$(`<a href="html/goods.html?id=${data[i].goods[c].id}"><h4>${data[i].goods[c].bt}</h4><p>${data[i].goods[c].js}</p><img src=${data[i].goods[c].src} height="160" width="160" alt="" /></a>`)
                    }else{
                        var sp=$(`<a href="html/goods.html?id=${data[i].goods[c].id}"><h4>${data[i].goods[c].bt}</h4><p>${data[i].goods[c].js}</p><img src=${data[i].goods[c].src} height="80" width="80" alt="" /></a>`)
                    }
                    
                    if(c<2){
                        $('.left',kj).append(sp)
                    }else{
                        $('.right',kj).append(sp)
                    }
                }
                $(div).append(kj)
            }

    });
        
             
    
    
}
})