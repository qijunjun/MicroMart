/**
 * Created by 123 on 2017/8/16.
 */
$(function () {
    var telReg = /0?(13|14|15|18)[0-9]{9}/;
    var pwdReg=/^\w{5,15}$/i;
    var oAccount = $("#account");
    var oPassword = $("#password");
    oAccount.blur(function(){
       methods.checkInput($(this),$(this).val(),"手机号不能为空",telReg,"手机格式不正确");
   });
    oPassword.blur(function(){
        methods.checkInput($(this),$(this).val(),"密码不能为空",pwdReg,"密码必须以字母、数字或下划线开头,5~15位字符");
    });
    $("#login").click(function(){
        methods.checkInput( oAccount, oAccount.val(),"手机号不能为空",telReg,"手机格式不正确");
        methods.checkInput(oPassword,oPassword.val(),"密码不能为空",pwdReg,"密码必须以字母、数字或下划线开头,5~15位字符");
        if($(".error").length == 0){
            window.location.href="/项目开发/MicroMart/index.html";
        }
    })
});