/**
 * Created by huahua on 2017/6/15.
 */
$(document).ready(function () {
    //checkbox全选中；
    var select = document.getElementById("select_all");
    var check = document.getElementsByClassName("check");
    select.onclick = function () {
        for (var i = 0; i < check.length; i++) {
            //alert(this.checked);
            check[i].checked = this.checked;
        }
    }
    //隐藏显示功能
    $(".status-0").click(function () {
        $(this).css("display", "none");
        $(this).next().css("display", "block");
    });
    $(".status-1").click(function () {
        $(this).css("display", "none");
        $(this).prev().css("display", "block");
    });
    //提示删除选择删除栏目窗口
    $(".del").click(function () {
        $(this).parent().parent().remove();
    });
    $(".pd").click(function () {
        if (select.checked == true) {
            $(".data").remove();
        }
        for (var i = 0; i < check.length; i++) {
            if (check[i].checked == false) {
                $(".ow-dialog").css("display", "block");
                setTimeout(function () {
                    $(".ow-dialog").css("display", "none");
                }, 3000);
                $(".ow-btn").click(function () {
                    $(".ow-dialog").css({"display": "none"});
                });
                $(".ow-dialog").click(function () {
                    $(".ow-dialog").css("display", "none");
                    //$(".ow-dialog").css({"display":"none"});
                });
            } else {
                //check[i].parentNode.parentNode.remove();
                check[i].classList.add("b-del");
            }
        }
        $(".b-del").parent().parent().remove();
        $(".ow-dialog").css("display", "none");

    });


});
