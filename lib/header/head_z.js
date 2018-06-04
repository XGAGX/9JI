define(['jquery',''],function($){
    var html=`
            <dl>
                <dt><i class='ico-phone1 ico-bg'></i><span>手机通讯</span><em>&gt;</em></dt>
                <dd>iPhone X</dd>
                <dd>iPhone 6</dd>
                <dd>OPPO R15</dd>
                <dd>小米MIX 2</dd>
                <ul>
                    <li class="fl left">
                        <p>
                            <i>热门品牌</i>  
                            <a href="#">苹果<em></em></a>
                            <a href="#">华为<em></em></a>
                            <a href="#">荣耀<em></em></a>
                            <a href="#">小米<em></em></a>
                            <a href="#">三星<em></em></a>
                            <a href="#">OPPO<em></em></a>
                            <a href="#">vivo<em></em></a>
                            <a href="#">美图<em></em></a>
                            <a href="#">魅族<em></em></a>
                            <a href="#">一加<em></em></a>
                            <a href="#">锤子<em></em></a>
                            <a href="#">金立<em></em></a>
                            <a href="#">努比亚<em></em></a>
                            <a href="#">360<em></em></a>
                            <a href="#">全部手机<em></em></a>
                        </p>
                        <p>
                            <i>价位</i>  
                            <a href="#">0-599<em></em></a>
                            <a href="#">600-999<em></em></a>
                            <a href="#">1000-1999<em></em></a>
                            <a href="#">2000-2999<em></em></a>
                            <a href="#">3000-3999<em></em></a>
                            <a href="#">4000-4999<em></em></a>
                            <a href="#">5000以上<em></em></a>
                        </p>
                        <p>


                            <i>网络制式</i>  
                            <a href="#">全网通<em></em></a>
                            <a href="#"> 4G+全网通<em></em></a>
                            <a href="#">移动/联通双4G<em></em></a>
                            <a href="#">联通4G<em></em></a>
                            <a href="#">电信4G<em></em></a>
                        </p>
                        <p>
                            <i>产品特点</i>  
                            <a href="#">快速充电<em></em></a>
                            <a href="#">指纹识别<em></em></a>
                            <a href="#">拍照神器<em></em></a>
                            <a href="#">双卡双待<em></em></a>
                            <a href="#">女性手机<em></em></a>
                            <a href="#">老人手机<em></em></a>
                            <a href="#">全面屏<em></em></a>
                            <a href="#">面部识别解锁<em></em></a>
                        </p>
                        <p>
                            <i>热销机型</i>  
                            <a href="#">iPhone X<em></em></a>
                            <a href="#">iPhone 8 Plus<em></em></a>
                            <a href="#">华为 Nova 2s<em></em></a>
                            <a href="#">荣耀畅玩7X<em></em></a>
                            <a href="#">iPhone 6s Plus<em></em></a>
                            <a href="#">iPhone6<em></em></a>
                            <a href="#">OPPO R15<em></em></a>
                            <a href="#">华为 Mate10<em></em></a>
                        </p>
                    </li>
                    <li class="fl right">
                        <a href="#"><img src="img/nav_dl_r/1.png" height="230" width="200" alt="" /></a>
                        <a href="#"><img src="img/nav_dl_r/1.png" height="230" width="200" alt="" /></a>
                    </li>
                </ul>
            </dl>
            <dl>
                <dt><i class='ico-sb ico-bg'></i><span>智能家居/智能健康</span><em>&gt;</em></dt>
                <dd>智能电视</dd>
                <dd>电视盒子</dd>
                <dd>智能门锁</dd>
                <dd>监控摄像头</dd>
                <ul>
                    <li class="fl left">
                        <p>
                            <i>热门品牌</i>  
                            <a href="#">荣耀<em></em></a>
                            <a href="#">小米<em></em></a>
                            <a href="#">荣耀<em></em></a>
                            <a href="#">乐心<em></em></a>
                            <a href="#">三星<em></em></a>
                            <a href="#">OPPO<em></em></a>
                            <a href="#">乐视<em></em></a>
                            <a href="#">萤石<em></em></a>
                            <a href="#">魅族<em></em></a>
                            <a href="#">一加<em></em></a>
                            <a href="#">Lifesmart<em></em></a>
                            <a href="#">南极人<em></em></a>
                            <a href="#">倍轻松<em></em></a>
                            <a href="#">飞利浦<em></em></a>
                            <a href="#">全部手机<em></em></a>
                        </p>
                        <p>
                            <i>生活周边</i>  
                            <a href="#">智能插座<em></em></a>
                            <a href="#">打火机<em></em></a>
                            <a href="#">背包<em></em></a>
                            <a href="#">手机支架<em></em></a>
                            <a href="#">电池<em></em></a>
                            <a href="#">闹钟<em></em></a>
                            <a href="#">乐视<em></em></a>
                            <a href="#">萤石<em></em></a>
                            <a href="#">其他<em></em></a>>
                        </p>
                        <p>
                            <i>智能小电</i>  
                            <a href="#">灯光照明<em></em></a>
                            <a href="#">加湿器<em></em></a>
                            <a href="#">空气净化器<em></em></a>
                            <a href="#">厨房小电<em></em></a>
                            <a href="#">扫地机<em></em></a>
                            <a href="#">闹钟<em></em></a>
                            <a href="#">语音机器人<em></em></a>
                        </p>
                        <p>
                            <i>电视盒子</i>  
                            <a href="#">小米盒子<em></em></a>
                            <a href="#">荣耀盒子<em></em></a>
                        </p>
                    </li>
                    <li class="fl right">
                        <a href="#"><img src="img/nav_dl_r/1.png" height="230" width="200" alt="" /></a>
                        <a href="#"><img src="img/nav_dl_r/1.png" height="230" width="200" alt="" /></a>
                    </li>
                </ul>
            </dl>
            <dl>
                <dt><i class='ico-dc ico-bg'></i><span>智能穿戴/智能出行</span><em>&gt;</em></dt>
                <dd>智能手环</dd>
                <dd>儿童手表</dd>
                <dd>智能手表</dd>
                <dd>电动车</dd>
                <ul>
                    <li class="fl left">
                        <p>
                            <i>热门品牌</i>  
                            <a href="#">苹果<em></em></a>
                            <a href="#">华为<em></em></a>
                            <a href="#">荣耀<em></em></a>
                            <a href="#">小米<em></em></a>
                            <a href="#">三星<em></em></a>
                            <a href="#">OPPO<em></em></a>
                            <a href="#">vivo<em></em></a>
                            <a href="#">美图<em></em></a>
                            <a href="#">魅族<em></em></a>
                            <a href="#">一加<em></em></a>
                            <a href="#">锤子<em></em></a>
                            <a href="#">金立<em></em></a>
                            <a href="#">努比亚<em></em></a>
                            <a href="#">360<em></em></a>
                            <a href="#">全部手机<em></em></a>
                        </p>
                        <p>
                            <i>价位</i>  
                            <a href="#">0-599<em></em></a>
                            <a href="#">600-999<em></em></a>
                            <a href="#">1000-1999<em></em></a>
                            <a href="#">2000-2999<em></em></a>
                            <a href="#">3000-3999<em></em></a>
                            <a href="#">4000-4999<em></em></a>
                            <a href="#">5000以上<em></em></a>
                        </p>
                        <p>


                            <i>网络制式</i>  
                            <a href="#">全网通<em></em></a>
                            <a href="#"> 4G+全网通<em></em></a>
                            <a href="#">移动/联通双4G<em></em></a>
                            <a href="#">联通4G<em></em></a>
                            <a href="#">电信4G<em></em></a>
                        </p>
                        <p>
                            <i>产品特点</i>  
                            <a href="#">快速充电<em></em></a>
                            <a href="#">指纹识别<em></em></a>
                            <a href="#">拍照神器<em></em></a>
                            <a href="#">双卡双待<em></em></a>
                            <a href="#">女性手机<em></em></a>
                            <a href="#">老人手机<em></em></a>
                            <a href="#">全面屏<em></em></a>
                            <a href="#">面部识别解锁<em></em></a>
                        </p>
                        <p>
                            <i>热销机型</i>  
                            <a href="#">iPhone X<em></em></a>
                            <a href="#">iPhone 8 Plus<em></em></a>
                            <a href="#">华为 Nova 2s<em></em></a>
                            <a href="#">荣耀畅玩7X<em></em></a>
                            <a href="#">iPhone 6s Plus<em></em></a>
                            <a href="#">iPhone6<em></em></a>
                            <a href="#">OPPO R15<em></em></a>
                            <a href="#">华为 Mate10<em></em></a>
                        </p>
                    </li>
                    <li class="fl right">
                        <a href="#"><img src="img/nav_dl_r/1.png" height="230" width="200" alt="" /></a>
                        <a href="#"><img src="img/nav_dl_r/1.png" height="230" width="200" alt="" /></a>
                    </li>
                </ul>
            </dl>
            <dl>
               <dt><i class='ico-xj ico-bg'></i><span>手机配件</span><em>&gt;</em></dt>
                <dd>移动电源</dd>
                <dd>保护壳</dd>
                <dd>手机耳机</dd>
                <dd>钢化膜</dd>
                <ul>
                    <li class="fl left">
                        <p>
                            <i>热门品牌</i>  
                            <a href="#">荣耀<em></em></a>
                            <a href="#">小米<em></em></a>
                            <a href="#">荣耀<em></em></a>
                            <a href="#">乐心<em></em></a>
                            <a href="#">三星<em></em></a>
                            <a href="#">OPPO<em></em></a>
                            <a href="#">乐视<em></em></a>
                            <a href="#">萤石<em></em></a>
                            <a href="#">魅族<em></em></a>
                            <a href="#">一加<em></em></a>
                            <a href="#">Lifesmart<em></em></a>
                            <a href="#">南极人<em></em></a>
                            <a href="#">倍轻松<em></em></a>
                            <a href="#">飞利浦<em></em></a>
                            <a href="#">全部手机<em></em></a>
                        </p>
                        <p>
                            <i>生活周边</i>  
                            <a href="#">智能插座<em></em></a>
                            <a href="#">打火机<em></em></a>
                            <a href="#">背包<em></em></a>
                            <a href="#">手机支架<em></em></a>
                            <a href="#">电池<em></em></a>
                            <a href="#">闹钟<em></em></a>
                            <a href="#">乐视<em></em></a>
                            <a href="#">萤石<em></em></a>
                            <a href="#">其他<em></em></a>>
                        </p>
                        <p>
                            <i>智能小电</i>  
                            <a href="#">灯光照明<em></em></a>
                            <a href="#">加湿器<em></em></a>
                            <a href="#">空气净化器<em></em></a>
                            <a href="#">厨房小电<em></em></a>
                            <a href="#">扫地机<em></em></a>
                            <a href="#">闹钟<em></em></a>
                            <a href="#">语音机器人<em></em></a>
                        </p>
                        <p>
                            <i>电视盒子</i>  
                            <a href="#">小米盒子<em></em></a>
                            <a href="#">荣耀盒子<em></em></a>
                        </p>
                    </li>
                    <li class="fl right">
                        <a href="#"><img src="img/nav_dl_r/1.png" height="230" width="200" alt="" /></a>
                        <a href="#"><img src="img/nav_dl_r/1.png" height="230" width="200" alt="" /></a>
                    </li>
                </ul>
            </dl>
            <dl>
                <dt><i class='ico-dl ico-bg'></i><span>电脑办公</span><em>&gt;</em></dt>
                <dd>iPad</dd>
                <dd>游戏本</dd>
                <dd>游戏外设</dd>
                <dd>小米电脑</dd>
                <ul>
                    <li class="fl left">
                        <p>
                            <i>热门品牌</i>  
                            <a href="#">苹果<em></em></a>
                            <a href="#">华为<em></em></a>
                            <a href="#">荣耀<em></em></a>
                            <a href="#">小米<em></em></a>
                            <a href="#">三星<em></em></a>
                            <a href="#">OPPO<em></em></a>
                            <a href="#">vivo<em></em></a>
                            <a href="#">美图<em></em></a>
                            <a href="#">魅族<em></em></a>
                            <a href="#">一加<em></em></a>
                            <a href="#">锤子<em></em></a>
                            <a href="#">金立<em></em></a>
                            <a href="#">努比亚<em></em></a>
                            <a href="#">360<em></em></a>
                            <a href="#">全部手机<em></em></a>
                        </p>
                        <p>
                            <i>价位</i>  
                            <a href="#">0-599<em></em></a>
                            <a href="#">600-999<em></em></a>
                            <a href="#">1000-1999<em></em></a>
                            <a href="#">2000-2999<em></em></a>
                            <a href="#">3000-3999<em></em></a>
                            <a href="#">4000-4999<em></em></a>
                            <a href="#">5000以上<em></em></a>
                        </p>
                        <p>


                            <i>网络制式</i>  
                            <a href="#">全网通<em></em></a>
                            <a href="#"> 4G+全网通<em></em></a>
                            <a href="#">移动/联通双4G<em></em></a>
                            <a href="#">联通4G<em></em></a>
                            <a href="#">电信4G<em></em></a>
                        </p>
                        <p>
                            <i>产品特点</i>  
                            <a href="#">快速充电<em></em></a>
                            <a href="#">指纹识别<em></em></a>
                            <a href="#">拍照神器<em></em></a>
                            <a href="#">双卡双待<em></em></a>
                            <a href="#">女性手机<em></em></a>
                            <a href="#">老人手机<em></em></a>
                            <a href="#">全面屏<em></em></a>
                            <a href="#">面部识别解锁<em></em></a>
                        </p>
                        <p>
                            <i>热销机型</i>  
                            <a href="#">iPhone X<em></em></a>
                            <a href="#">iPhone 8 Plus<em></em></a>
                            <a href="#">华为 Nova 2s<em></em></a>
                            <a href="#">荣耀畅玩7X<em></em></a>
                            <a href="#">iPhone 6s Plus<em></em></a>
                            <a href="#">iPhone6<em></em></a>
                            <a href="#">OPPO R15<em></em></a>
                            <a href="#">华为 Mate10<em></em></a>
                        </p>
                    </li>
                    <li class="fl right">
                        <a href="#"><img src="img/nav_dl_r/1.png" height="230" width="200" alt="" /></a>
                        <a href="#"><img src="img/nav_dl_r/1.png" height="230" width="200" alt="" /></a>
                    </li>
                </ul>
            </dl>
            <dl>
                <dt><i class='ico-rj ico-bg'></i><span>时尚影音/娱乐竞技</span><em>&gt;</em></dt>
                <dd>Beats</dd>
                <dd>益智玩具</dd>
                <dd>JBL</dd>
                <dd>运动相机</dd>
                <ul>
                    <li class="fl left">
                        <p>
                            <i>热门品牌</i>  
                            <a href="#">苹果<em></em></a>
                            <a href="#">华为<em></em></a>
                            <a href="#">荣耀<em></em></a>
                            <a href="#">小米<em></em></a>
                            <a href="#">三星<em></em></a>
                            <a href="#">OPPO<em></em></a>
                            <a href="#">vivo<em></em></a>
                            <a href="#">美图<em></em></a>
                            <a href="#">魅族<em></em></a>
                            <a href="#">一加<em></em></a>
                            <a href="#">锤子<em></em></a>
                            <a href="#">金立<em></em></a>
                            <a href="#">努比亚<em></em></a>
                            <a href="#">360<em></em></a>
                            <a href="#">全部手机<em></em></a>
                        </p>
                    </li>
                    <li class="fl right">
                        <a href="#"><img src="img/nav_dl_r/1.png" height="230" width="200" alt="" /></a>
                        <a href="#"><img src="img/nav_dl_r/1.png" height="230" width="200" alt="" /></a>
                    </li>
                </ul>
            </dl>
            `
var ul=$('#header .header-l >div >ul')
        if($('>div',ul).length>0){
            ul=$('>div',ul)
            html=html.replace(/src="img/ig,'src="../img')
        }

    ul.append($(html))
    console.log('头部三级菜单插入')
         
})