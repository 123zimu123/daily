















<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible"content="IE=9; IE=8; IE=7; IE=EDGE" />
      
    <Meta name="WT.act" content="Epay10010SignINLayer_load">
    <Meta name="WT.mod" content="Epay10010SignINLayer">
    <script language="javascript" type="text/javascript" src="/auth/js/webtrends.js"></script>
   
    <link rel="stylesheet" href=""/>
    <title>沃支付登录</title>
    <link href="/auth/css/minipage/common.css"    rel="stylesheet"     type="text/css" />
    <link href="/auth/css/minipage/firstpage.css" rel="stylesheet" 	type="text/css" />
	<link href="/auth/css/minipage/png.css" 	   rel="stylesheet" 	type="text/css" />


	<script src="/auth/js/jquery-1.12.4.min.js" 	        type="text/javascript" ></script>
	<script src="/auth/js/PassGuardCtrl.js" 				type="text/javascript" charset="UTF-8" ></script>
	<script src="/auth/js/login.js"						type="text/javascript" ></script>
	
	<script src="/auth/js/unicomjsec.js"						type="text/javascript" ></script>
	
	
    <style>
        /*页面清除css开始*/
        body, ol, ul, h1, h2, h3, h4, h5, h6, p, th, td, dl, dd, form, fieldset, legend, input, textarea, select, img {margin: 0;padding: 0;}
        ul, li{list-style: none;}
        li,a{outline: 0;text-decoration: none;}
        /*页面清除css结束*/

        /*常用样式开始*/
        .clearfix{
            clear: both;
        }
        .clearfix:before, .clearfix:after{
            content: ' ';display: block;clear: both;width: 0;visibility: hidden;
        }
        .btn{
            width: 280px;height: 40px;  line-height: 40px;  display: inline-block;
            -webkit-border-radius: 4px;  -moz-border-radius: 4px;  border-radius: 4px;
        }
        .btn:hover{
        	text-decoration: none;
           	background-color:#31b1d7;
           	color:#e9f1f3;
        }
        .ocx_style {
        	border:  1px solid #848380;
			border-radius:3px;
			width: 268px;
			vertical-align: middle;
			outline:none;
			padding:12px 10px 12px 40px;
			height:14px;
			margin:0;
			background-color: #ffffff;
			color:black;
		}
		@media all and (-webkit-min-device-pixel-ratio:0){
		.ocx_style {
			height:40px;
			width:278px;
			padding :0px;
			padding-left:40px;
		}
		}
		@-moz-document url-prefix(){.ocx_style {width: 356px;height: 40px;}}
		.ocx_style_setup {
        	border: 1px solid #848380;
			border-radius:3px;
			width: 298px;
			vertical-align: middle;
			outline:none;
			padding:10px 10px;
			height:18px;
			margin:0;
			background-color: transparent;
			color:black;
			font-size:14px;
		}
		.ocx_style_setup a{
			color:#2cc7f6;
		}
		@-moz-document url-prefix(){.ocx_style_setup {width: 336px;height: 18px;}}
        /*常用样式结束*/

        /*框架样式*/
        html,body{height:100%; width:100%;overflow: hidden; background-color: transparent;}
        body { font:12px/1.5 "Microsoft YaHei",tahoma,arial,Hiragino Sans GB,\5b8b\4f53; overflow: hidden;position: relative;}
		body{font-family:SimSun;}
		:root body{font-family: 'Microsoft YaHei';}
        /*popup css start*/
        .outer{width: 320px;}
        .title span{
            display: inline-block;  vertical-align: middle;  color: #ffffff;  color: rgba(255,255,255,0.8);  font-size: 18px;  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
        }
        .title{
        	text-align: center;
        }
        .title .line{
            width: 121px;  height: 1px;  background-color: #ffffff;  background-color: rgba(255,255,255,0.3);  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=30);
        }
        :root .title .line{width: 121px;}        
        .title .close{
            position: absolute;  right: 15px;  top: 10px;  width: 17px;  height: 17px;  cursor: pointer;
        }
        .tip{
            color: #fe9588;  color: rgba(254,149,136,0.8);  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);  padding-bottom: 13px;
        }
        .tip div{
            padding-right: 10px;  display: table-cell;  vertical-align: top;  padding-top: 1px;
        }
        .tip p{
            overflow: hidden;  display: table-cell;  vertical-align: top;
        }
        .tip .stress{
            color: #5599df;  color: rgba(85, 153, 223, 0.8);
        }
        .form-control{
            position: relative; margin-bottom: 20px;
        }
        .form-control .inputIcon{
       		position:absolute;
       		margin-top:11px;
       		margin-left:12px;
       	}
        .form-control input{
            width: 268px;  padding: 12px 10px 12px 40px;  -webkit-border-radius: 4px;  -moz-border-radius: 4px;
            border-radius: 4px; border: 1px solid #848380; border: 1px solid #848380;
            outline: 0;margin: 0;vertical-align: middle;  
            -webkit-box-shadow: inset 0 1px 1px rgba(44,199,246,.075);box-shadow: inset 0 1px 1px rgba(44,199,246,.075);
            -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;  -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
            transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        }
        .form-control input:focus{
            outline: 0;  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(44,199,246,.075);
            box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(44,199,246,.075); 
        }
        .form-control .tip{
            position: relative;color: #fff;  line-height: 16px;  text-align: right;  padding: 0;  padding-top: 3px;  color: rgba(255,255,255,0.8);
        }
        .form-control .tip a{
            color: #fff;  color: rgba(255, 255, 255, 0.8);  vertical-align: middle;
        }
        .form-control .cnt-input{display:inline-block;}
        .form-control .cnt-input .browser-tip{
        	display:none;
        	line-height: 22px;
            position: absolute;
            width: 301px;
            right: -1px;
            text-align: left;
            top: 31px;
            z-index: 1000;
            background-color: rgba(0,0,0,0.3);
            color: #fff;
            padding: 5px 10px;
            color: rgba(255,255,255,0.8);
            border-radius:6px;
            cursor:pointer;
        }
        .form-control .cnt-input:hover .browser-tip{
        	display:block;
        }
        .form-control .cnt-input .browser-tip-bac{
        	height: 126px; background-color:#333;
        }
        .form-control .browser-tip a{
            cursor: pointer;
            vertical-align: top;
            color: #2cc7f6;
            color: rgba(44, 199, 246, 0.8);
            filter:progid:DXImageTransform.Microsoft.Alpha(opacity=80);
        }

        .form-control .browser-tip .tooltip{
            position: absolute;
            border-style: solid;
            border-color: transparent;
            border-bottom-color: #000;
            filter:progid:DXImageTransform.Microsoft.Alpha(opacity=30);       
            border-bottom-color: rgba(0,0,0,0.3);
            border-width: 8px;
            top: -16px;
            left: 254px;
        }
        .form-control .browser-tip a:hover{
            text-decoration: underline;
        }
        .btn{
            display: inline-block;  background-color: #2cc7f7;  font-size: 16px;  color: #ffffff;  text-align: center;  width: 100%;
        }
        .multi input{
            width: 184px;padding: 12px 10px;vertical-align: top;font-size:14px;color:#999999;
        }
        .multi a{
            padding: 2px 21px;  float: right;  background-color: #fff;
        }
        .multi img{
            height: 40px;  vertical-align: top;padding-left: 22px;
        }
        .img-code{
        }
        /*popup css end*/
        .other-logins{
            padding-top: 8px;color: #fff;color: rgba(255,255,255,0.8);
        }
        .other-logins a{color: #fff;color: rgba(255,255,255,0.8);}
        .other-logins .fr{
            float: right;
        }
		/*登录页面改造登录按钮橙色*/
		.header-bg {
			background-color: #31364f;
			background-color: rgba(49, 54, 79, 0.9);
			filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=90);
		}
		.focus {
			border: 1px solid #FF8624 !important;
		}
		.btn {
			background-color: #FF8624;
		}
		.btn:hover {
			background-color: #F56E00;
		}
    </style>

    



    <script type="text/javascript">
        //输入框获得焦点时的样式
        $(function() {
            $('input[type="text"]').focus(function () {
                $(this).addClass('focus');
            }).blur(function () {
                $(this).removeClass('focus');
            });
            $('input[type="password"]').focus(function () {
                $(this).addClass('focus');
            }).blur(function () {
                $(this).removeClass('focus');
            });
        });
	function getPubKey(){
		var mer;
		$.ajax({
			url: "/auth/auth/getPubKey.jsp",
			type: "GET",
			async: false,
			cache:false,
			success: function(result){
				
				code = result.trim().split("--")[0];
				mer = result.trim().split("--")[1];
			  	if(code!='200'&&(mer ==null ||mer =="")) {
			  		showErrorMessage("<span style='color:#D75F13;'>请刷新重试</span><br>");
					$("#denglu").hide();
			  	}
			}
		 });
		return mer;
	}
	
	//关于菜单高亮的显示设置
	$(function(){
		var arr,reg=new RegExp("(^| )"+"unicomLogin"+"=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg)){
			$("#userid").val(unescape(arr[2]));
		}
		//用户名
		var user_name = document.getElementById("userid");
		user_name.onfocus = function() {
			if (this.value == "邮箱地址/手机号码/个性登录名") {
				this.value = ''; 
			}
		}
		user_name.onblur = function() {
			if (this.value == '') {
				this.value = '邮箱地址/手机号码/个性登录名'; 
			}
			checkLoginType(this.value.trim());
		}
		
		var validCode = document.getElementById("validCode");
		validCode.onfocus = function() {
			if (this.value == "请输入验证码") {
				this.value = ''; 
			}
		}
		validCode.onblur = function() {
			if (this.value == '') {
				this.value = '请输入验证码'; 
			}
		}
		$('.top_bj .top ul li').hover(function(){
			var $this = $(this);
			$this.addClass('current');
		},function(){
			var $this = $(this);
			$this.removeClass('current');
		});
	});	
	
	function checkSubmit(){
		var userid = $("#userid").val().trim();
		if(true) {
			var flag = true;
			$.ajax({
				url: "/auth/auth/getStatus.jsp?loginName="+userid+"&loginType=1",//cif
				type: "GET",
				async: false,	
				cache:false,
				success: function(mess){
				  	var message = mess.trim().split("--");
					var ms1 = message[0];
					var ms2 = message[1];
				  if(ms1=='0'){//需要补全用户信息
				  		var newurl = 'https://epay.10010.com'+'/pss/user/'+ms2+'/completeinfo/type';
				  		window.top.location=newurl;
				  		flag = false;
				  	}
				}
			 });
		if(!flag){
			return false;
		}
		}
		if(userid.indexOf()!=-1){
			//alert("登录账号不合法");
			showErrorMessage("登录账号不合法");
			return false;
		}
		if(userid=='邮箱地址/手机号码/个性登录名' || userid==''){
			//alert("请输入用户名，用户名为手机号或者邮箱");
			showErrorMessage("请输入用户名，用户名为手机号或者邮箱");
			return false;
		}
		
// 		pgeditor.pwdSetSk("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCT7Z5WqPw6QY7tzRWFsaJCZ7ggPqGO/Wep2HFlNpn0oJXU7E1anY92tP7PYHy71+tObIW5uJwCg0GP3ltjgSQrfWS+kknXUfobLI8kX1pumqAdpnjhr80yuMXmn4gBnOvpCKaP0uzlXkPtr0T7iO2FneWdSuOevSEX9GmvZVrywQIDAQAB");
	 
	 	if($("#loginPwdType").val()=='1'){//服务密码
// 			var PwdResult=pgeditor.pwdResult();
	 		
	 	    var mcrypt_key = getPubKey();;
	 	    if(mcrypt_key == null||mcrypt_key ==""){
	 	    	showErrorMessage("用户名密码错误");
	 	    	getPubKey();
	 	    	return false;
	 	    }
	 	    var pwd_val = $("#pwd").val();
	 	    var PwdResult = encryptRequest(pwd_val, mcrypt_key);
			if(!PwdResult){
			     //alert("请输入登录密码");
			     showErrorMessage("用户名密码错误");
				 return false;
			}			
			$("#loginPwd").val(PwdResult);//获得密码密文,赋值给表单
			$('#randValidCode').val('');
		} else if($("#loginPwdType").val()=='2'){//短信码
			var randValidCodeReal = $("#randValidCodeReal").val();
			if(randValidCodeReal==''){
			 	//alert('请输入短信码');
			 	showErrorMessage("请输入短信码");
			 	return false;
			} else{
			 	$('#randValidCode').val(randValidCodeReal);
			}
			$("#loginPwd").val('');
		}
		if($("#validCode").val()=='' || $("#validCode").val()=='请输入验证码'){
			//alert('请输入图形验证码');
			showErrorMessage("请输入图形验证码");
			return false;
		}
		
		if($("#rmbUser").is(':checked')){
			//删除cookie
			var exp = new Date();
			exp.setTime(exp.getTime() - 1);
			var cval=getCookie("unicomLogin");
			if(cval!=null){
				document.cookie= "unicomLogin" + "="+cval+";expires="+exp.toGMTString();
			}
				
			//设置cookie
			var Days = 30;
			var exp = new Date();
			exp.setTime(exp.getTime() + Days*24*60*60*1000);
			document.cookie = "unicomLogin" + "="+ escape (userid) + ";expires=" + exp.toGMTString();
		}
		$("#pwd").val("");	
		document.forms[0].submit();
	}
	
	String.prototype.trim = function(){   
        return this.replace(/(^\s*)|(\s*$)/g, "");   
    }; 
    
 	// 判断账号是否为空，判断是否需要补全，判断并设定登陆类型和密码类型
	function checkLoginType(s){
 		// 1、判断用户是否已输入
		var userid = $("#userid").val().trim();
		if(userid=='邮箱地址/手机号码/个性登录名' || userid==''){
			$("#userid").val('邮箱地址/手机号码/个性登录名');
			return false;
		}

		// 2、判断用户是否需要补全
		if(true) {
			$.ajax({
				url: "/auth/auth/getStatus.jsp?loginName="+s+"&loginType=1",//cif
				type: "GET",
				async: true,
				cache:false,
				success: function(mess){
				  	var message = mess.trim().split("--");//用户状态：0-需要补全，1-不需要补全，
					var ms = message[0];
					var ms2 = message[1];
				  	if(ms=='0') {
				  		var newurl = 'https://epay.10010.com'+'/pss/user/'+ms2+'/completeinfo/type';
				  		
				  		showErrorMessage("<span style='color:#D75F13;'>您的账户存在风险，请先</span><a href=\"\" style='text-decoration:none;' onclick=\"window.top.location='"+newurl+"';return false;\"><span style='color:#5297E2;'>验证身份</span></a><br>");
						$("#denglu").hide();
				  	} else{
						$("#loginPwdDiv").show();
						$("#denglu").show();
						hideErrorMessage();
				  	}
				}
			 });
		}
		
		// 3、判断是什么类型登陆【 1：手机号 2：邮箱 3：别名】	loginType
		var myReg =/^[0-9]+$/;
		if(myReg.test(s)){ //手机号
			$("#loginType").val('1');
		} else if(s.indexOf("@")!=-1){ //邮箱
			$("#loginType").val('2');
			hideErrorMessage();
		} else{ //用户名
			$("#loginType").val('3');
			hideErrorMessage();
		} 
		
		// $("#loginPwdType").val('1');// 默认就是1，无需设置，全部是1，使用登录密码，没有2（动态口令）了
		isShowSendButton();
	}
	
	// 页面上显示错误信息
	function showErrorMessage(message) {
		if($('#loginWindow', parent.document).length > 0){
			$('#loginWindow', parent.document).css('height', '390px');
			$('.dialog', parent.document).css('height', '390px');
		}
		$("#info").html(message);
  		$("#info").show();
  		$("#infoImage").show();
	}
	
	// 页面上隐藏错误信息
	function hideErrorMessage() {
		$("#info").hide();
		$("#infoImage").hide();
		if($('#loginWindow', parent.document).length){
			$('#loginWindow', parent.document).css('height', '370px');
			$('.dialog', parent.document).css('height', '370px');
		}
	}

 </script>
</head>
<body>
<!-- <div id="loginPop" class="popup" style="visibility: visible;"><div class="dialog"></div> -->
		<div class="outer">
			<!-- 登录标头 -->
            <div class="title">
                <span class="line"></span>
                <span style="padding: 15px;">登录</span>
                <span class="line"></span>
                <!-- <img src="/auth/images/minipage/close.png" class="close" alt=""/> -->
            </div>
            
            <!--错误信息提示区-->
            <div class="tip">
                <div><img src="/auth/images/minipage/danger.png" style="width: 14px;display:none;" alt="" id="infoImage" /></div>
                <p style="display:none;" id="info"></p>
            </div>
            
            <form id="oldLogin" name="oldLogin" action="/auth/Login" method="post" target="hideframe">    
            			
          		<!-- auth炎黄 页面参数 -->
				<!-- 错误页面地址 -->
				<input type="hidden" id="errorurl" name="errorurl" value="https://epay.10010.com/auth/auth/errorPage.jsp" />
			
				<!-- sso登录所须参数 -->
				<input type="hidden" name="RelayState" value="type%3DC%3Bbackurl%3Dhttps%3A%2F%2Fepay.10010.com%2Fauth%2Fauth%2FloginBack.jsp%3Bspid%3D4028f09638eb576a013904e27b440002%3Bnl%3D8%3BloginFrom%3Dhttps%3A%2F%2Fepay.10010.com%2Fpss%2Fuser%2Fmy" />

				<!-- 登录类型 1：手机号 2：邮箱 3：别名: 【页面逻辑才会使用到的参数，用于密码的赋值】-->
				<input type="hidden" id="loginType" name="loginType" value="1" />

				<!-- 登陆密码类型 1：密码 2：动态口令: 【页面逻辑才会使用到的参数，用于密码的赋值】-->
				<input type="hidden" id="loginPwdType" name="loginPwdType" value="1" />

				<!-- 密码 -->
				<input type="hidden" id="loginPwd" name="loginPwd" class="inp1" value="" size="36" />

				<!-- 【YC新增】密码控件随机参数 -->
				
					
				<!-- no的时候，返回页面时跳转出隐藏iframe -->
				<input type="hidden" name="flag" value="no" />
							
				<!-- 账号名称 -->		
                <div class="form-control">
                    <!-- <input type="text" placeholder="请输入手机号"/> -->
                    <img  src="/auth/images/minipage/login_id.png" class="inputIcon"></img>
                    <input name="userid" id="userid" type="text" class="phoneno" value="邮箱地址/手机号码/个性登录名" onfocus="this.value=''" tabindex="1"/>
                </div>
                
                <!-- 密码输入 -->
                <div class="form-control">
                    <!-- <input type="text" placeholder="请输入登录密码"/> -->
                    <img  src="/auth/images/minipage/pwd.png" class="inputIcon"></img>
                    <div style="margin-bottom: 5px; cursor: text;" id="loginPwdDiv" class="txt_2">
						<div style="" id="pwdsy">
						   <input name="pwd" id="pwd" type="password" maxlength="30" class="phoneno" tabindex="1"  />         
						</div>
					</div>
                <div class="tip"><a href="javascript:void(0)" onclick="javascript:dcsMultiTrack('DCS.dcsuri','/Epay10010SignIN.onclick','WT.mod','Epay10010SignIN','WT.act','Epay10010SignIN_forget');window.top.open('https://epay.10010.com/pss/user/loginpwd/retrieving')"><span>忘记登录密码</span></a>&nbsp; </div>
             </div>
                
                <!--验证码-->
                <div class="form-control multi">
                    <input id="validCode" maxlength="4" name="validCode" type="text" value="请输入验证码" tabindex="3"/>
                    <img id="checkCodePic" title="点击刷新验证码" src="/auth/a.randomPic" onclick="var s=Math.random();this.src='/auth/a.randomPic?l='+s;" alt="验证码" width="86" height="36" />
                </div>
                            
                <!-- 登录按钮 -->
                <a class="btn" href="javascript:void(0)" onclick="javascript:dcsMultiTrack('DCS.dcsuri','/Epay10010SignIN.onclick','WT.mod','Epay10010SignIN','WT.act','Epay10010SignIN_login');checkSubmit()" tabindex="4">登录</a>
                
                <div class="other-logins">
                    <a href="javascript:void(0)" onclick="javascript:dcsMultiTrack('DCS.dcsuri','/Epay10010SignIN.onclick','WT.mod','Epay10010SignIN','WT.act','Epay10010SignIN_commercial');window.top.open('https://epay.10010.com/ewop')" title="">商户登录</a>&nbsp;|&nbsp;
                    <a href="javascript:void(0)" onclick="javascript:dcsMultiTrack('DCS.dcsuri','/Epay10010SignIN.onclick','WT.mod','Epay10010SignIN','WT.act','Epay10010SignIN_agent');window.top.open('https://epay.10010.com/accum/')" title="">代理商登录</a>&nbsp;|&nbsp;
                    <a href="javascript:void(0)" onclick="javascript:dcsMultiTrack('DCS.dcsuri','/Epay10010SignIN.onclick','WT.mod','Epay10010SignIN','WT.act','Epay10010SignIN_organization');window.top.open('/comwbmgy')" title="">公益机构登录</a>
                    <a class="fr" href="javascript:void(0)" onclick="javascript:dcsMultiTrack('DCS.dcsuri','/Epay10010SignIN.onclick','WT.mod','Epay10010SignIN','WT.act','Epay10010SignIN_register');window.top.open('https://epay.10010.com/pss/register')" title="">立即注册</a>
                </div>
            </form>
        </div>
        
        <iframe name="hideframe" id="hideframe" width="0" height="0" style="display: none"></iframe>
        
</body>
 <!-- 同盾-测试环境 -->
 <script type="text/javascript">
    (function() {
    	_fmOpt = {partner: 'chinaunicom',appName: 'epay_web',token: '2F3B004D382409DB094BECD6256389C5'};
        var cimg = new Image(1,1);
        cimg.onload = function() {
            _fmOpt.imgLoaded = true;
        };
        cimg.src = "https://fp.fraudmetrix.cn/fp/clear.png?partnerCode=chinaunicom&appName=epay_web&tokenId=" + _fmOpt.token;
		// var fm = document.createElement('script'); fm.type = 'text/javascript'; fm.async = true;
		// fm.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'statictest.fraudmetrix.cn/fm.js?ver=0.1&t=' + (new Date().getTime()/3600000).toFixed(0);
		// var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(fm, s);
         
        jQuery.getScript(('https:' == document.location.protocol ? 'https://' : 'http://') + 'static.fraudmetrix.cn/fm.js?ver=0.1&t=' + (new Date().getTime()/3600000).toFixed(0));
    })();
</script>
</html>