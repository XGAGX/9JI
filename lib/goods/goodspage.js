define(['jquery'],function($){
    return {
        //左边填入数据
        load:function(goods){
            var div=$('#main .div01 .tp').eq(0)
            var a=goods.url.split(',')
            // 
            // ====小图
            var list=$('.list',div)
            list.html('')
            var cn=$('<div>')
            a.map(function(i){
                if(i!=''){
                    cn.append($(`<a href="javascript:;" >
                        <img src="../img/goods/sj/${i}" alt="" />
                        </a>`))
                }
            })
            cn.css({
                'overflow':'hidden',
                'width':'100%',
                'height':'75px',
            })
            list.append(cn)
            $('a',cn).eq(0).addClass('activate')
            // =====大图
            div=$('#main .div01 .tp').eq(1)
            div.html('')
            div.append($(`<img src="../img/goods/sj/${a[0]}" alt="" />`))
            $('#main .div01 .tp p span').eq(0).html('商品编号:'+goods.id)
        },
        // 左下left切换图片
        left:function(){
            var div=$('#main .div01 .tp .list div')
            var a=$('a',div)
            var a_c=a.eq(-1).clone(true)
            a.eq(-1).remove()
            div.prepend(a_c)
            // a.eq(0).replaceWith(a.eq(-1))
        },
        // 左下right切换图片
        right:function(){
            var div=$('#main .div01 .tp .list div')
            var a=$('a',div)
            var a_c=a.eq(0).clone(true)
            a.eq(0).remove()
            div.append(a_c)
            
        },
        //滑过小图给激活状态
        sweep:function(div){
            $('#main .div01 .tp .list div a').removeClass('activate')
            $('#main .div01 .tp .tp img').attr('src',div.attr('src'))
            div.parent().addClass('activate')
        },
        // 商品飞入购物车
        goodsfly:function(){
            var tp_zb=$('#main .div01 .tp>img').offset()
            var xiao_zb=$('.ico-t-gwc').offset()
            var cn=$('<img>')
                cn.css({
                    'width':'400px',
                    'height':'400px',
                    'position': 'absolute',
                    'top':tp_zb.top+'px',
                    'left':tp_zb.left+'px'
                })
            var url=$('#main .div01 .tp>img')[0].src
                cn.attr('src',url)
            $('body').append(cn)
            console.log('飞入购物车>小图标坐标',xiao_zb)
                 
            cn.animate({
                'top':xiao_zb.top+'px',
                'left':xiao_zb.left+'px',
                 'width':'10px',
                 'height':'10px',
            },500)
            setTimeout(()=>{cn.empty()},500)

        },
        //信息栏吸顶
        ceiling:function(){
           var cn=$('#main .div02 .right dl dt').eq(0)
           if(window.scrollY>1100){
                cn.css({
                    'position': 'fixed',
                    'top':'0',
                    'width':'966px'
                })
           }else{
                cn.css({
                    'position': 'static'
                })
           }
        }

    }
})