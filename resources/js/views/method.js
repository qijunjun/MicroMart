//填充地区
    var optionProvince="";
    var oUsername = $("#username");
    var oTel = $("#tel");
    var oAddress = $("#addressDetial");
    var oProvince = $("#province");
    var oCity = $("#city");
    var oDistricts = $("#xian");
    //存储地址
    localStorage.setItem("area",area);
    //验证
    var methods = {
        
        
        //填充地址
        address:function(){
            // 通过省份获取城市
            for(var i=0;i<area.length;i++){
                optionProvince += "<option value='"+area[i].id+"'>"+area[i].name+"</option>";
            }
            oProvince.append(optionProvince);
            //省份改变，获取城市
            oProvince.change(function(){
                //获取选中的索引值console.log($(this).get(0).selectedIndex);
                oCity.empty();
                var optionCity = "<option value='0'>--请选择城市--</option>";
                oDistricts.empty();
                for(var j=0;j<area[$(this).get(0).selectedIndex-1].cities.length;j++){
                    optionCity += "<option value='"+area[$(this).get(0).selectedIndex-1].cities[j].id+"'>"+area[$(this).get(0).selectedIndex-1].cities[j].name+"</option>";
                }
                oCity.append(optionCity);
            });
            // 城市改变，联动区域
            oCity.change(function(){
                oDistricts.empty();
                var optionDistricts = "<option value='0'>--请选择地区--</option>";
                for(var m=0;m<area[$(this).prev().get(0).selectedIndex-1].cities[$(this).get(0).selectedIndex-1].districts.length;m++){
                    optionDistricts += "<option value='"+area[$(this).prev().get(0).selectedIndex-1].cities[$(this).get(0).selectedIndex-1].districts[m].id+"'>"+area[$(this).prev().get(0).selectedIndex-1].cities[$(this).get(0).selectedIndex-1].districts[m].name+"</option>";
                }
                oDistricts.append(optionDistricts);
            });
        },
        
        
        
        
        /*验证文本框
            参数说明：
            selector:选择对象
            Value：值
            txt：如果为文本框为空，提示信息
            regType:正则表达式类型(姓名正则或者电话正则表达式)
            regTxt:正则出错，相应的文字信息
            methods.checkInput(oTel,oTel.val(),"手机号码不能为空",telReg,"手机号格式不正确");
        */
        checkInput: function (selector, Value, txt, regType, regTxt) {
            if (!Value.trim()) {
                selector.next().addClass("error").show();
                selector.next().html(txt);
                return false;
            } else {
                if (regType == true) {
                    selector.next().addClass("hide").removeClass("error").hide();
                } else if (!regType.test(Value)) {
                    selector.next().addClass("error").show();
                    selector.next().html(regTxt);
                    return false;
                } else {
                    selector.next().addClass("hide").removeClass("error").hide();
                }
            }
        },
        
        
        /*验证下拉框
            参数说明：
            selector:选择对象
            errorType:错误类型(比如是省份出错还是城市)
            selectedTxt：如果选中的文本内容为selectedTxt，提示相应信息
            txt:出错，提示相应的信息
            methods.checkSelect($("#province option:selected"),"provinceError","--请选择省份--","请选择省份");
         */
        checkSelect:function(selector,errorType,selectedTxt,txt){
            if(selector.get(0).text ==selectedTxt){
                selector.parent().parent().children("span."+errorType).addClass("error").show();
                selector.parent().parent().children("span."+errorType).html(txt);
                return false;
            }else{
                selector.parent().parent().children("span."+errorType).addClass("hide").removeClass("error").hide();
            }
        },
        
        
        
        //给相应选中的val值,填充省份
        province:function(val){
            oProvince.empty();
            for(var i=0;i<area.length;i++){
                optionProvince += "<option value='"+area[i].id+"'>"+area[i].name+"</option>";
            }
            oProvince.append(optionProvince);
            $("#province option[value='"+val+"']").attr("selected",true);
        },
        
        
        //给相应选择的val值及索引值来填充城市
        changeProvince:function(val,Index){
            oCity.empty();
            var optionCity = "<option value='0'>--请选择城市--</option>";
            oDistricts.empty();
            for(var j=0;j<area[Index].cities.length;j++){
                optionCity += "<option value='"+area[Index].cities[j].id+"'>"+area[Index].cities[j].name+"</option>";
            }
            oCity.append(optionCity);
            $("#city option[value='"+val+"']").attr("selected",true);
        },
        
        
        //给相应选择的val值及省份索引值、城市索引值来填充城市
        changeCity:function(Val,provinceIndex,cityIndex){
            oDistricts.empty();
            var optionDistricts = "<option value='0'>--请选择地区--</option>";
            for(var m=0;m<area[provinceIndex].cities[cityIndex].districts.length;m++){
                optionDistricts += "<option value='"+area[provinceIndex].cities[cityIndex].districts[m].id+"'>"+area[provinceIndex].cities[cityIndex].districts[m].name+"</option>";
            }
            oDistricts.append(optionDistricts);
            $("#xian option[value='"+Val+"']").attr("selected",true);

        },
        
        
        //编辑操作
        edit:function(obj){
            var oParent = obj.parent().parent();
            var nameHtml =oParent.find("span.name").html();
            var telHtml =oParent.find(".tel").html();
            var provinceId =oParent.find("span.province").attr("data-id");
            var cityId =oParent.find("span.city").attr("data-id");
            var provinceIndex =oParent.find("span.province").attr("data-selectIndex");
            var districtId =oParent.find("span.district").attr("data-id");
            var cityIndex =oParent.find("span.city").attr("data-selectIndex");
            var addressHtml =oParent.find("span.detailAddress").html();
            oUsername.val(nameHtml);
            oTel.val(telHtml);
            oAddress.val(addressHtml);
            methods.province(provinceId);
            methods.changeProvince(cityId,provinceIndex);
            methods.changeCity(districtId,provinceIndex,cityIndex);
        },
        
        
        //删除操作
        delete:function(obj){
            obj.parent().parent().remove();
        }
    };