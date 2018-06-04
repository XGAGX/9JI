define(['jQuery'],fn)
;(function($) {
            $.fn.carousel_line=function(obj){
                    this.css({'overflow':'hidden','position':'relative'})
                    var dadiv=this
                    var div=$('.'+obj.divClass,dadiv)
                    div.append($('*',div).first().clone())
                    var width=$('*',div).width()
                    var mun=$('*',div).length
                    var index=0
                    //div的宽高
                    div.css({
                        'width':function(){return mun*width},   
                        'overflow':'hidden',
                        'position':'absolute'
                    })
                    //为list添加li
                    if(obj.listClass){
                        var list=$('.'+obj.listClass,this)
                        for(var i=0;i<mun-1;i++){
                            list.append('<li date-index='+i+'></li>')
                        }
                        var li=$('li',list)
                        //让第一个li激活状态
                        $(li[0]).addClass(obj.listClass_a)
                        //为list添加事件委托
                        list.mouseover(e=>{
                            var e=e.target
                            if(e.tagName=="LI"){
                                clearInterval(t)
                                index=$(e).attr('date-index')
                                play(index)
                                time()
                            }
                            
                        })
                    }
                    //添加上一个下一个事件
                    if(obj.carousel_lr){
                        // console.log(obj.carousel_lr[0])
                        var a=[]
                        if(obj.carousel_lr.length>1){
                            a.push($('.'+obj.carousel_lr[0],this))
                            a.push($('.'+obj.carousel_lr[1],this))
                        }else{
                            var i=$('.'+obj.carousel_lr,this)
                            a.push($(i[0]))
                            a.push($(i[1]))
                        }
                        a[0].click(e=>{
                            index--
                            if(index<0){
                                //上面加了1所以这要减去
                                index=mun-2
                            }
                            clearInterval(t)
                            play(index)
                            time()
                        })
                        a[1].click(e=>{
                            index++
                            if(index>mun-1){
                                index=0
                            }
                            clearInterval(t)
                            play(index)
                            time()
                        })
                    }
                    //定时器开始
                    var t=0
                    time()
                    function time(){
                        t=setInterval(()=>{
                            //如果检测到有标记则跳过这次播放
                            //但跳过非计时器可以直接播放
                            if(!dadiv.attr('data-stop')){
                                index++
                                play(index)
                            }
                        },2000);
                    }
                    //播放动画
                    function play(i){
                            if(i==mun-1){
                                activate(0)
                            }else{
                                activate(i)
                            }
                            div.stop().animate({left:i*width*-1},500,'linear',function(){
                                if(i>=mun-1){
                                    div.css('left',0)
                                    index=0
                                }
                            })
                        
                    }
                    function activate(i){
                        if(obj.listClass){
                            for(var n=0;n<mun-1;n++){
                                $(li[n]).removeClass(obj.listClass_a)
                            }
                            $(li[i]).addClass(obj.listClass_a)
                        } 
                    }
            },
            $.fn.carousel_opacity=function(obj){
                    this.css({'position':'relative'})
                    var dadiv=this
                    var div=$('.'+obj.divClass,dadiv)
                    var width=$('*',div).width()
                    var mun=$('*',div).length
                    var index=0
                    var img=$('*',div)
                    img.map(function(i){
                        $(img[i]).css({'transition':'opacity 1s',
                            'position': 'absolute',
                            'left':'0','top':'0'})
                    })
                    //小按钮
                    if(obj.listClass){
                        var list=$('.'+obj.listClass,this)
                        for(var i=0;i<mun;i++){
                            list.append('<li date-index='+i+'></li>')
                        }
                        var li=$('li',list)
                        //让第一个li激活状态
                        $(li[0]).addClass(obj.listClass_a)
                        //为list添加事件委托
                        list.mouseover(e=>{
                            var e=e.target
                            if(e.tagName=='LI'){
                                clearInterval(t)
                                index=$(e).attr('date-index')
                                play(index)
                                time()
                            }
                            
                        })
                    }
                    //添加上一个按钮下一个按钮的事件
                    if(obj.carousel_lr){
                        // console.log(obj.carousel_lr[0])
                        var a=[]
                        if(obj.carousel_lr.length>1){
                            a.push($('.'+obj.carousel_lr[0],this))
                            a.push($('.'+obj.carousel_lr[1],this))
                        }else{
                            var i=$('.'+obj.carousel_lr,this)
                            a.push($(i[0]))
                            a.push($(i[1]))
                        }
                        a[0].click(e=>{
                            console.log(index)
                            index--
                            if(index<0){
                                //上面加了1所以这要减去
                                index=mun-1
                            }
                            console.log(index)
                            clearInterval(t)
                            play(index)
                            time()
                        })
                        a[1].click(e=>{
                            index++
                            if(index>mun-1){
                                index=0
                            }
                            clearInterval(t)
                            play(index)
                            time()
                        })
                    }
                    //定时器开始
                    var t=0
                    time()
                    function time(){
                        t=setInterval(()=>{
                            //如果检测到有标记则跳过这次播放
                            //但跳过非计时器可以直接播放
                            if(!dadiv.attr('data-stop')){
                                index++
                                play(index)
                                if(index==mun-1){index=-1}
                            }
                        },2000);
                    }
                    //播放动画
                    function play(i){
                                activate(i)
                            if(typeof(obj.fn)=='function'){
                                obj.fn(i)
                            }
                            var li=$('*',div)
                            li.map(function(i,z){
                                $(z).css('opacity','0')
                            })
                            $(li[i]).css('opacity','1')
                            

                    }
                    function activate(i){
                        if(obj.listClass){
                            for(var n=0;n<mun;n++){
                                $(li[n]).removeClass(obj.listClass_a)
                            }
                            $(li[i]).addClass(obj.listClass_a)
                        } 
                    }
            },
            //暂停
            $.fn.carousel_pause=function(){
                // console.log('暂停')
                     
                this.attr('data-stop','1')
            },
            //继续
            $.fn.carousel_play=function(){
                // console.log('继续')
                this.removeAttr('data-stop')
            }
        })(jQuery)