/**
 * Created by Administrator on 2017/6/16 0016.
 */

$(function () {
    var nav_li_a = $(".nav-tabs ul li a");
    var wbox = $(".wbox");
    for(var i =0;i<nav_li_a.length;i++){
        (function (index) {
            nav_li_a.eq(index).click(function () {
                nav_li_a.removeClass("a_hover");
                    $(this).addClass("a_hover");
                wbox.css("display","none");
                wbox.eq(index).css("display","block");
            })
        })(i)
    }
    var is_second = false;
    $("#gaoji").click(function () {
        if(!is_second){
            $("#second-title").css("display"," table-row");
            $(this).html("-收起");
            is_second = true;
        }else{
            $("#second-title").css("display"," none");
            $(this).html("+副标题");
            is_second = false;
        }
    });
})
