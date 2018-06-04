define(['jquery'],function($){

// ================================
return function(div){
    var data
    $.get('api/index.php','qsl=chuxiao', function(c) {
            data=$.parseJSON(c)
            console.log(data)
            for(var i=0;i<2;i++){
                // 生成框架
                if(i==0){
                    var kj=$(`<div class="bk">
                            <a href="html/list.html"><img src="img/212fab22cd9c2c.png" alt="" /></a>
                            <div class=" yd  clearfix">
                            </div>
                        </div>`)
                }else{
                    var kj=$(`<div class="bk">
                            <a href="html/list.html"><img src="img/227080d3766607.png" alt="" /></a>
                            <div class=" yd  clearfix">
                            </div>
                        </div>`)
                }
                for(var c=0;c<3;c++){
                    // 填入商品数据
                        var sp=$(`<a href="html/goods.html?id=${data[i].goods[c].id}">
                                    <h4>${data[i].goods[c].bt}</h4>
                                    <p>直降700 现货立购</p>
                                    <img src="${data[i].goods[c].src}" height="160" width="160" alt="" />
                                </a>`)

                        $('.yd',kj).append(sp)
                }
                $(div).append(kj)
            }

    });
        
             
    
    
}
})