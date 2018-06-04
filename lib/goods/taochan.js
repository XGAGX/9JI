define(['jquery'],function($){
    var jg=0,num=0
    var kj=$('#main .taochan .right dl dd p')
    var kj_jg=$('i',kj)
    var kj_num=$('em',kj)
    // console.log(this)
    function re(){
        kj_jg.html('￥'+jg)
        kj_num.html(num)
    }
    return {
        initialize:function(){
            $('a',kj).click(function(){
                $('#main .taochan .con dl >div input').attr('checked',function(){
                    this.checked=false
                });
                jg=0
                num=0
                re()
            })

            $('#main .taochan .con dl >div input').click(function(e){
                e=$(e.target)
                // console.log(this)
                if(e[0].checked){
                    this.add(e.next().html()-0)
                }else{
                    this.add(0-e.next().html())
                }
                
            }.bind(this))

            },
        add:function(j){
            jg+=j
            if(j>0){
                num++
            }else{
                num--
            }
            re()
        }
    }
})