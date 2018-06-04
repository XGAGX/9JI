define(['jquery'],function($){
    return {
        relist:function(start,num){
            var div=$('#main .lbiao .biao');
            
            $.get('../api/mySql.php','sql=5&start='+start+'&num='+num,function(data){

                data=JSON.parse(data)
                var max=data.max
                var goods=data.goods
                 div.html('');
                goods.map(function(goods){
                    var tp=goods.url.split(',')
                    var name=goods.name.split('全网通')
                    if(name.length>1){
                        name[0]+='全网通'
                    }else{
                        name.push('')
                    }
                    var cn=`<li><a href="goods.html?id=${goods.id}">
                                <img src="../img/goods/sj/${tp[0]}" alt="" />
                                <p><img src="../img/goods/sj/${tp[0]}" alt="" /></p>
                                <h4><a ><i>${name[0]}</i> <em>${name[1]}</em></a></h4>
                                <p><i>${goods.price}</i></p>
                                <p><span>已有<a href="#">0</a>人评价 </span></p>
                                </a>
                            </li>`
                    div.append(cn)
                });
                // ======分页按钮
                var bj=$('#main .lbiao .tou .fr')
                bj.html('')
                var cn=$(`<a href="javascript:;" data-page=${start/20}>&lt;</a>
                        <em><i>${start/20+1}</i>/${Math.ceil(max/20)}</em>
                        <a href="javascript:;" data-page=${start/20+2}>&gt;</a>`)
                if(Math.ceil(max/20)==start/20+1){
                    cn.eq(-1).attr('data-page',start/20+1)
                }
                bj.append(cn)
                // ========底部分页
                bj=''
                bj=$('#main .lbiao >div')
                bj.html('')
                cn=$(`<p class="fr">
                        共${max}条记录${start/20+1}/${Math.ceil(max/20)}页首页
                        <a href="javascript:;" data-page=${start/20}>上一页</a>
                    </p>`)
                var q=start/20+1
                for(var i=0;i<Math.ceil(max/20);i++){
                    var c=$(`<a href="javascript:;" data-page=${i+1}>${i+1}</a>`)
                    if(i+1==q){
                        c.addClass('activate')
                    }
                    cn.append(c)
                }
                cn.append($(`<a href="javascript:;" data-page=${start/20+2}>下一页</a>
                            <a href="javascript:;" data-page=${Math.ceil(max/20)}>尾页</a>`))
                if(Math.ceil(max/20)==start/20+1){
                    $('a',cn).eq(-2).attr('data-page',start/20+1)
                }
                bj.append(cn)

            });
        }
    };
})