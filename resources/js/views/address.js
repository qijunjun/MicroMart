/**
 * Created by 123 on 2017/8/16.
 */
$(function () {
    var nameVal=$("#username").val();
    var telVal = $("#tel").val();
    // 选中索引使用get(0)把jq对象转换为js对象，这样才能使用js对应的方法
    // var provinceIndex = $("#province").get(0).selectedIndex;
    // var cityIndex = $("#city").get(0).selectedIndex;
    // var districtIndex = $("#xian").get(0).selectedIndex;
    // var text = $("#province").options[provinceIndex].text; // 选中文本
    var provinceVal = $("#province option:selected").text;
    var cityVal = $("#city option:selected").text;
    var districtVal = $("#xian option:selected").text;
    var detailAddressVal = $("#addressDetial").val();
    //用户名必须是以字母数字下划线开头，5到15位
    var nameReg = /^\w{5,15}$/i;
    var telReg = /0?(13|14|15|18)[0-9]{9}/;
    //验证
    function check(selector,Value,txt,regType,regTxt) {
        selector.blur(function(){
            if(!Value.trim()){
                $(this).next().show();
                $(this).next().html(txt);
                return false;
            }else{
                if(!regType.test(Value)){
                    $(this).next().show();
                    $(this).next().html(regTxt);
                    return false;
                }else{
                    $(this).next().addClass("hide").hide();
                }
            }
        });
    }
    $("#username").blur(function(){
        check($(this),$(this).val(),"用户名不能为空",nameReg,"用户名必须以数字、字母、下划线开头，长度为5~15位");
        nameVal =$(this).val();
        if(!nameVal.trim()){
            $(this).next().show();
            $(this).next().html("用户名不能为空");
            return false;
        }else{
            if(!nameReg.test(nameVal)){
                $(this).next().show();
                $(this).next().html("用户名必须以数字、字母、下划线开头，长度为5~15位");
                return false;
            }else{
                $(this).next().addClass("hide").hide();
            }
        }
    });
    //新增地址
    $(".save").click(function(){
        nameVal = $("#username").val();
        telVal = $("#tel").val();
        provinceVal = $("#province").selected().text;
        cityVal = $("#city").selected().text;
        districtVal = $("#xian").selected().text;
        detailAddressVal = $("#addressDetial").val();

        var html ="<section><p><span class='name'>"+nameVal+"</span><span>(<b class='tel'>"+telVal+"</b>)</span></p><p><span class='province'>"+provinceVal+"</span><span class='city'>"+cityVal+"</span><span class='district'>"+districtVal+"</span><span class='detailAddress'>"+detailAddressVal+"</span></p><div><a class='edit'>编辑</a><a class='del'>删除</a></div></section>";
    });
    // 删除地址
    $(".del").click(function () {
        $(this).parent().parent().remove();
    });
    //编辑地址
});