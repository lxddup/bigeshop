/**
 * Created by lenovo on 2017/6/15.
 */
$(function () {
    document.getElementById("seleted_all").onclick = function () {
        var checkboxs = document.getElementsByClassName("checkbox");
        for (var i = 0; i < checkboxs.length; i++) {
            checkboxs[i].checked = this.checked;
        }
        console.log(this.checked);
    };
    $("tr.data:even").addClass("data1");
    var flag = true;
    $(".status-0").click(function () {
        if(flag){
            $(this).removeClass("status-0").addClass("status-1");
            this.value = "1";
            this.innerHTML = "已下架";
            this.title = "点击变为已上架";
            flag = false;
        }
        else{
            $(this).removeClass("status-1").addClass("status-0");
            this.value = "0";
            this.innerHTML = "已上架";
            this.title = "点击变为已下架";
            flag = true;
        }
    });
    var flag1 = true;
    $(".attr-value-1").click(function () {
        if(flag1){
            $(this).removeClass("attr-value-1").addClass("attr-value-0");
            this.value = "0";
            this.innerHTML = "否";
            this.title = "点击设置为推荐";
            flag1 = false;
        }
        else{
            $(this).removeClass("attr-value-0").addClass("attr-value-1");
            this.value = "0";
            this.innerHTML = "是";
            this.title = "点击取消推荐";
            flag1 = true;
        }
    });

    /**
     * 模态窗口
     ifDrag: 是否拖拽
     dragLimit: 拖拽限制范围
     */
    $('#popup').popup({ifDrag: true, dragLimit: true});
    /*删除商品*/
    var delete_items = $("a[name='delete']");
    delete_items.click(function(){
        this.parentNode.parentNode.remove();
        //console.log(this.parentNode.parentNode);
    });
    $("#delete_selected").click(function(){
        var checkboxs = document.getElementsByClassName("checkbox");
        for (var i = 0; i < checkboxs.length; i++) {
           if(checkboxs[i].checked){
               checkboxs[i].parentNode.parentNode.remove();
           }
        }
    });
    $('.date_picker').date_input();
    $("#clear_item_end").click(function(){
        $('#time_end').value = "";
    });
    $("#clear_item_star").click(function(){
        $('#time_star').val("");
    });
});