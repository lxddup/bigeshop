/**
 * Created by Administrator on 2017/6/17 0017.
 */
$(function () {
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