reg_yzm='0000'
define(['jquery','BubbleBox'],function($,BubbleBox){
    BubbleBox.Init()
    return {
        kauishu:function(){
            var input=$('#main .ks form div input')
            var sj=input[0].value
            var yzm=input[1].value
            var dx=input[2].value
            console.log(this.sjihao(sj))
            if(yzm!=reg_yzm){
                this.tangchuang($(input[1]),'验证码错误')
            }else if(!this.sjihao(sj)){
                this.tangchuang($(input[0]),'手机号错误')
            }else if(dx!=='123456'){
                this.tangchuang($(input[2]),'短信验证码错误')
            }else{
                $.post('../api/mySql.php','sql=2&user='+sj+'&password='+sj+'&email=-1&phone='+sj,function(a){
                    console.log(a)
                         
                    a=JSON.parse(a);
                    if(a.zt=='1'){
                        this.tangchuang($(input[0]),'此手机号已经存在!!!!</br>可直接登录,默认密码为手机号')
                    }else{
                        console.log('zl')
                        document.cookie='user='+a.cookie+';path=/'
                        location.href='../'
                    }
                }.bind(this))
            }
        },
        manshu:function(){
            var input=$('#main .pt form div input')
            var yhm=input[0].value
            var mm=input[1].value
            var remm=input[2].value
            var sj=input[3].value
            var email=input[4].value
            var yzm=input[5].value
            var dx=input[6].value
            if(!this.urTest(yhm)){
                this.tangchuang($(input[0]),'4-16位字母、数字或汉字，请不要输入特殊字符！')
            }else if(!this.pwordTest(mm)){
                this.tangchuang($(input[1]),'以字母开头,6个字符以上的字母或数字')
            }else if(mm!=remm){
                this.tangchuang($(input[2]),'两次密码不一致')
            }else if(!this.emailTest(email)){
                this.tangchuang($(input[4]),'请正确填写邮箱，用于找回密码')
            }else if(yzm!=reg_yzm){
                this.tangchuang($(input[5]),'验证码错误')
            }else if(!this.sjihao(sj)){
                this.tangchuang($(input[3]),'手机号错误')
            }else if(dx!=='123456'){
                this.tangchuang($(input[6]),'短信验证码错误')
            }else{
                $.post('../api/mySql.php','sql=2&user='+yhm+'&password='+mm+'&email='+email+'&phone='+sj,function(a){
                    console.log(a)
                    a=JSON.parse(a);
                    if(a.zt=='1'){
                        this.tangchuang($(input[0]),'此手机号已经存在!!!!</br>可直接登录,默认密码为手机号')
                    }else{
                        // console.log('zl')
                        document.cookie='user='+a.cookie+';path=/'
                        location.href='../'
                    }
                }.bind(this))
            }
        },
        sjihao:function(val){
            return val.match(/1[3,4,5,8,7]\d[\s,\-]?\d{4}[\s,-]?\d{4}/i)
        },
        urTest:function(val){
             return val.match(/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/i)
        },
        pwordTest:function(val){
            return val.match(/^[a-zA-Z]\w{5,17}$/i)
        },
        emailTest:function(val){
            return val.match(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/i)
        },
        tangchuang:function(e,n){
            var zb=e.offset()
                zb=[zb.left+e[0].offsetWidth-10,zb.top+10]
                BubbleBox.Show(zb,n,'#f90','#fff','#fff')
                setTimeout(()=>{BubbleBox.Hidden()},2000)
        },
        rwm:function (div){
                var s_div,fz,w,h,lh,color,sz,deg1,deg2,rgb;
                fz="1.5em"
                w="20%"
                h="100%"
                lh="100%"
                color=""
                rgb=["1","2","3"]
                s_div=""
                daan=""
                for(var i=0;i<4;i++){
                    sz=parseInt(Math.random()*10)
                    daan+=sz
                    deg1=parseInt(Math.random()*100)
                    deg2=parseInt(Math.random()*70)
                    for(var n=0;n<4;n++){
                        rgb[1]=parseInt(Math.random()*255)+","
                        rgb[2]=parseInt(Math.random()*255)+","
                        rgb[3]=parseInt(Math.random()*255)
                        color='rgb('+rgb[1]+rgb[2]+rgb[3]+')'
                    }
                    s_div+='<div style="width:'+w+';height:'+h+';font-size:'+fz+';color:'+color+';transform:rotate('+deg1+'deg) skew('+deg2+'deg) ; text-align:center;font-weight: bold;float: left;">'+sz+'</div>'
                }
                div.innerHTML='<div style="float: left;width:100%;overflow: hidden;">'+s_div+"</div>"
                return daan;
        },
        rerwm:function(div1,div2){
            reg_yzm=this.rwm(div1[0])
            div2.html('')
            div2.append(div1.first().clone(true))
        }
    };
})