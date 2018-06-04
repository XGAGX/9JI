define(['jquery'],function($){
    var text_html=`<div class="cont clearfix">
                <div class="top-left fl">
                    <i class="ico-bg ico-gps"></i><a href="#">广州市区</a>
                    <span>hi,欢迎来九机! <a href="../html/login.html">登陆</a><a href="../html/reg.html">免费注册</a></span>
                </div>
                <div class="top-right fr">
                    <ul>
                        <li class="menu">
                            <a href="#">个人中心<i class='ico-jt_x'></i></a>
                            <ul class="menu-1 grzx">
                                <li><a href="#">我的订单</a></li>
                                <li><a href="#">我的积分</a></li>
                                <li><a href="#">我的试用</a></li>
                                <li><a href="#">我的收藏</a></li>
                                <li><a href="#">我的咨询</a></li>
                                <li><a href="#">我的优惠卷</a></li>
                                <li><a href="#">报修/退换货</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i class="ico-bg ico-wg"></i>会员俱乐部</a>
                        </li>
                        <li>
                            <a href="#">帮助中心</a>
                        </li>
                        <li class="menu">
                            <a href="#"><i class="ico-phone ico-bg"></i>客户端</a>
                            <ul class="menu-1 khd clearfix">
                                <a class="fl">
                                    <img src="img/appdown.png" height="100" width="100" alt="" /><span>扫描二维码下载</span>
                                </a>
                                <span class="fl">
                                    <a href="#">Android</a>
                                    <a href="#">iphone</a>
                                    <a href="#">触屏版</a>
                                </span>
                            </ul>
                        </li>
                        <li>
                            <a href="#">在线客服</a>
                        </li>
                        <li class="menu daohan">
                            <a href="#">网站导航 <i class='ico-jt_x'></i></a>
                            <ul class="menu-1  clearfix">
                                <dl>
                                    <dt style="#FF6700">九机特色</dt>
                                    <dd><a href="#">附近门店</a></dd>
                                    <dd><a href="#">一手优品</a></dd>
                                    <dd><a href="#">免费贴膜<i class='ico-H-red ico-bg'></i></a></dd>
                                    <dd><a href="#">旧机回收</a></dd>
                                    <dd><a href="#">预约维修</a></dd>
                                    <dd><a href="#">预约快修</a></dd>
                                    <dd><a href="#">九机小店</a></dd>
                                </dl>
                                <dl>
                                    <dt style='color: #a776d9;'>服务集市</dt>
                                    <dd><a href="#">在线支付</a></dd>
                                    <dd><a href="#">话费充值</a></dd>
                                    <dd><a href="#">品牌专区</a></dd>
                                    <dd><a href="#">试用中心</a></dd>
                                    <dd><a href="#">帮助中心</a></dd>
                                    <dd><a href="#">九机服务</a></dd>
                                    <dd><a href="#">会员俱乐部<i class='ico-H-red ico-bg'></i></a></dd>
                                </dl>
                                <dl>
                                    <dt style="color: #7597dc;">招商合作</dt>
                                    <dd><a href="#">供应商申请</a></dd>
                                    <dd><a href="#">加盟分店<i class='ico-H-red ico-bg'></i></a></dd>
                                    <dd><a href="#">IT服务</a></dd>
                                    <dd><a href="#">九机百科</a></dd>
                                </dl>
                                <dl>
                                    <dt style="color: #73ae37;">更多精选</dt>
                                    <dd><a href="#">九机头条</a></dd>
                                    <dd><a href="#">人才招聘</a></dd>
                                </dl>
                                <dl>
                                    <dt style="color: #ff5050;">产品选择</dt>
                                    <dd><a href="#">手机</a></dd>
                                    <dd><a href="#">手机配件<i class='ico-H-red ico-bg'></i></a></dd>
                                    <dd><a href="#">电脑周边</a></dd>
                                    <dd><a href="#">耳机音响</a></dd>
                                    <dd><a href="#">智能产品<i class='ico-H-green ico-bg'></i></a></dd>
                                    <dd><a href="#">笔记本/电脑</a></dd>
                                </dl>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i class="ico-buliang ico-bg"></i>不良信息举报</a>
                        </li>
                        <li class="menu phone">
                            <a href="#"><i class="ico-phone2 ico-bg"></i>400-008-3939</a>
                            <ul class="menu-1 ">
                                <p>输入号码并且<i style="color:#68BE00;">免费</i>拨打:</p>
                                <input type="text" />
                                <button>拨打</button>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>`
    /////////////////////
    // 内部方法 //
    /////////////////////
    // 获取指定Cookie
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
     ////////////////////////
     ///////外部方法////////
     ////////////////////////
    return{
        initialize:function(z){
            if(!z){
                console.log('替换')
                text_html=text_html.replace(/\.\.\//ig,'');
            }else{
                text_html=text_html.replace(/src="img/ig,'src="../img');
            }
            var q=z?'../':'';
            var cn=$(text_html)
            $('#top').prepend(cn)
            var user=GetCookie('user')
            if(user){
                $('#top .top-left span').html('hi,欢迎回来九机! '+user+'<a href="javascript:;" class="tunchu">[退出]</a>')
            }
            $('.tunchu').click(function(){
                document.cookie='user=;path=/'+';expires=Thu, 01 Jan 1970 00:00:00 GMT';
                location.reload(true) 
            })

            $('#header .cont form span button').click(function(){
                location.href=q+'html/list.html'
                return false;
            })
        }
    }
})