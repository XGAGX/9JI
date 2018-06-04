define(['jquery'],function($){
    // 工具栏
    ///////////////////////////////////
    //=======内部变量=============== //
    ///////////////////////////////////
    var c=GetCookie('shopping_cart')
    if(c){
        var array_id=JSON.parse(c)
    }else{
        var array_id=[]
    }
    
    console.log('购物车>读取Cookie内的商品>',array_id)
    var  total=0
    var q_goods=[]
    // 结构[{id:22,num:22},...]
    // 地址前缀
    var q;
    // 将组建储存
    var t;
    var user=GetCookie('user')
    ///////////////////////////////////
    //=======内部方法=============== //
    ///////////////////////////////////
    function GetCookie(name) {
        var s=document.cookie.split('; ')
        for(var i=0;i<s.length;i++){
            var w=s[i].split('=')
            if(w[0]===name){
                break;
            };
        };
        return i<s.length?w[1]:'';
    }
    // 刷新购物车总价格
    function retotal(){
        var _num=0
        array_id.map(function(obj){
            _num+=obj.num
        })
        $('.fl u',t).html(_num)
        $('.fr div span',t).html(`共${array_id.length}件商品，总计：<i class="red">￥${total}</i>`)
    }
    ///////////////////////////////////
    //=======外部方法=============== //
    ///////////////////////////////////
    return{
            initialize:function(i){
             t=$(`    <div id="tool">
                    <div class="fl">
                        <div>
                            <a href="javascript:;"><u class="u">0</u><i class="ico-bg ico-t-gwc"></i><em>购物车<i ></i></em></a>
                            <a href="#"><i class="ico-bg ico-t-fjmd"></i><em>附近门店<i ></i></em></a>
                            <a href="#"><i class="ico-bg ico-t-zxkh"></i><em>咨询客服<i ></i></em></a>
                            <a href="#"><i class="ico-bg ico-t-jyts"></i><em>投诉/建议<i ></i></em></a>
                            <a href="#"><i class="ico-bg ico-t-weixing"></i><em class="wx"><img src="img/appdown.png" alt="" /><i></i></em></a>
                            <a href="#"><i class="ico-bg ico-t-cpdb"></i><em>产品对比<i ></i></em></a>
                            
                        </div>
                        <a href="#" class="hdxb"><i class="ico-bg ico-t-hdxb"></i><em>回到顶部<i ></i></em></a>
                    </div>
                    <div class="fr">
                        <p><i class="ico-t-ce ico-bg"></i>购物车</p>
                        <ul>
                        <li>
                            <img src="../img/goods/1.jpg" alt="" />
                            <a href="#">苹果（Apple）MacBook Air(MQD32) 13.3英寸 银色 i5主频1.8GHz 8G 128G固态</a>
                            <p><i>￥999</i><em>x</em><span><a href="#">-</a><input type="text" value="0" disabled/><a href="#">+</a></span><a href="#" class="sc">删除</a></p>
                        </li>
                        <li>
                            <img src="../img/goods/1.jpg" alt="" />
                            <a href="#">苹果（Apple）MacBook Air(MQD32) 13.3英寸 银色 i5主频1.8GHz 8G 128G固态</a>
                            <p><i>￥999</i><em>x</em><span><a href="#">-</a><input type="text" value="0" disabled/><a href="#">+</a></span><a href="#" class="sc">删除</a></p>
                        </li>
                        <li>
                            <img src="../img/goods/1.jpg" alt="" />
                            <a href="#">苹果（Apple）MacBook Air(MQD32) 13.3英寸 银色 i5主频1.8GHz 8G 128G固态</a>
                            <p><i>￥999</i><em>x</em><span><a href="#">-</a><input type="text" value="0" disabled/><a href="#">+</a></span><a href="#" class="sc">删除</a></p>
                        </li>
                        </ul>
                        <div>
                            <span>共0件商品，总计：<i>0</i></span>
                            <button>去结算</button>
                        </div>
                    </div>
                </div>`)
        if(i){
            $('.wx img',t).attr('src','../img/appdown.png')
            z=1
            console.log('初始化>此页面非首页,路径加../')
                 
        }
        q=i?'../':'';
        //窗口缩放事件
        $(window).on('resize',function(){
            // console.log($('#tool .fl div').css('top'))
            $('#tool .fl div').css({
                top:function(){
                    return window.innerHeight/2+'px'
                }
            })
            $('#tool .fr ul').css('height',function(){
                return window.innerHeight-40-85+'px'
            })
        }) 
        //购物车被单击
        $('.ico-t-gwc',t).parent().click(function(){
            this.regoods()
            var w=parseInt($('#tool').css('width'))
            if(w<100){
                console.log(1)
                $('#tool').animate({'width':'335px'},300,()=>{$('#tool .fr').toggle();})
                
            }else{
                console.log(2)
                $('#tool').animate({'width':'35px'},300,()=>{$('#tool .fr').toggle();});
                
            }
            
        }.bind(this))
        //返回顶部
        $(".ico-t-hdxb",t).click(function () {
            var speed=500;//滑动的速度
            $('body').animate({ scrollTop: 0 }, 600);
            return false;
        });
        //将组建插入body
        $('body').append(t)
        //运行一次滚动事件
        $(window).trigger('resize')
        // 购物车内事件
        $('.fr ul',t).click(function(e){
            e=e.target
            // console.log(e,e.tagName,e.innerHTML)
            if(e.tagName='A'){
                if(e.innerHTML=='-'){
                    this.reducegoods($(e).attr('data-id'))
                    e.nextElementSibling.value-=1
                    if(e.nextElementSibling.value<1){
                        this.removergoods($(e).attr('data-id'))
                        e.parentElement.parentElement.parentElement.parentElement.removeChild(e.parentElement.parentElement.parentElement)
                    }
                }
                if(e.innerHTML=='+'){
                    this.addgoods($(e).attr('data-id'))
                    e.previousElementSibling.value=e.previousElementSibling.value-0+1
                }
                if(e.innerHTML=='删除'){
                    this.removergoods($(e).attr('data-id'))
                    e.parentElement.parentElement.parentElement.removeChild(e.parentElement.parentElement)
                }
            }
        }.bind(this))
        // 组件生成后刷新一次购物车
         this.regoods()
         // 获取购物车
         this.getsql()
        },
        // 添加物品
        addgoods:function(id){
            var zf=1
            for(var i=0;i<array_id.length;i++){
                if(array_id[i].id==id){
                    array_id[i].num++
                    zf=0
                    break;
                }
            }
            if(zf){
                var o={id:0,num:1}
                    o.id=id
                array_id.push(o)
            }
            // ====添加价格
            for(var i=0;i<q_goods.length;i++){
                if(q_goods[i].id==id){
                    console.log('添加>',q_goods[i].price,total)
                         
                    total+=q_goods[i].price-0
                    break;
                }
            }
            retotal()
            document.cookie='shopping_cart='+JSON.stringify(array_id)+';path=/'
            this.resql()

        },
        // 减少物品数量(只负责减少数量不判断是否为0,判断0在单击事件内,方便删除li)
        reducegoods:function(id){
            for(var i=0;i<array_id.length;i++){
                if(array_id[i].id==id){
                    array_id[i].num--
                }
            }
            // ====减少价格
            for(var i=0;i<q_goods.length;i++){
                if(q_goods[i].id==id){
                    total-=q_goods[i].price-0
                    break;
                }
            }
            retotal()
            document.cookie='shopping_cart='+JSON.stringify(array_id)+';path=/'
            this.resql()
        },
        // 删除物品
        removergoods:function(id){
            var j
            // console.log('准备删除')
            // console.log(array_id)
            for(var i=0;i<array_id.length;i++){
                if(array_id[i].id==id){
                    // 删除前将数量保留
                    j=array_id[i].num
                    array_id.splice(i,1)
                    i--
                }
            }
            // ====减少价格
            for(var n=0;n<q_goods.length;n++){
                if(q_goods[n].id==id){
                    total-=q_goods[n].price*j
                    break;
                }
            }
            retotal()
            document.cookie='shopping_cart='+JSON.stringify(array_id)+';path=/'
            this.resql()
        },
        // 刷新购物车
        regoods:function(){
            // console.log(array_id)
            var _id=[]
            $('.fr ul',t).html('')
            array_id.map(function(obj){
                _id.push(Number(obj.id))
            })
            if(_id.length<1){
                console.log('购物车为空')
                total=0
                retotal()
                return;
            }
            console.log('购物车>所有商品ID>',_id)
            data='sql=1&name='+_id.join()
            console.log('购物车>发送post请求商品价格')
            $.post(q+'api/mySql.php',data,cl)
            function cl(goods){
                // console.log('购物车>发送post请求商品价格')
                total=0
                // console.log(goods)
                goods=JSON.parse(goods)
                q_goods=goods
                var cn=$('.fr ul',t)
                    cn.html('')
                // 没登录
                if(!user){
                    cn.append($(`<li style="text-align:center;">登录后购物车会被保存哦，去 <a href="${q}html/login.html" style="color:#C80F1E;">登录</a></li>`))
                }
                goods.map(function(g){
                    var j_num=array_id[_id.indexOf(g.id-0)].num
                    total+=(g.price-0)*j_num
                    var tp=g.url.split(',')
                    var c=`<li>
                                <img src="${q}img/goods/sj/${tp[0]}" alt="" />
                                <a href="${q}html/goods.html?id=${g.id}">${g.name}</a>
                                <p><i>￥${g.price}</i><em>x</em>
                                    <span>
                                        <a href="javascript:;" data-id=${g.id}>-</a>
                                        <input type="text" value="${j_num}" disabled/>
                                        <a href="javascript:;" data-id=${g.id}>+</a>
                                    </span>
                                    <a href="javascript:;" class="sc" data-id=${g.id}>删除</a>
                                </p>
                                <p><i class="ico-t-red_dun"></i>该商品特价促销，不与会员优惠叠加</p>
                            </li>`
                    cn.append(c);
                    
                });
                // ================
                // 总价格
                retotal()
                
                // 
                
            };
        },
        //更新数据库
        resql:function(){
            if(user){
                $.post(q+'api/mySql.php','sql=6&user='+user+'&name='+JSON.stringify(array_id),function(data){
                    console.log('设置购物车到数据库',data)
                         
                    })
            }
        },
        getsql:function(){
            // 获取购物车
            if(user){
                $.post(q+'api/mySql.php','sql=7&user='+user,function(data){
                    console.log(data)
                    data=JSON.parse(JSON.parse(data)[0].shoppingcart)
                    console.log('获取数据库购物车',data,Array.isArray(data))
                    if(data=="[]" || data==null ){
                        array_id=[]
                    }else{
                        array_id=data
                    }
                    console.log(array_id)
                    this.regoods()
                }.bind(this))
            }
        }
                
        // ================

    };
})