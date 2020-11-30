



var showPop = (function () {

    function showPop(id) {

        $("#" + id).style.display = "";
    }


    //关闭弹窗
    var closes = $$('.pop_close');
    var a = $$('.pop_button');
    for (var i = 0; i < closes.length; i++) {
        // a[i].onclick = function () {
        //     (this.parentElement.parentElement.parentElement).style.display = "none"

        // }
        closes[i].onclick = function () {
            (this.parentElement.parentElement).style.display = "none"

        }
    }


    //选中logoQQ微信
    var wx = $('.pop_wx')
    var qq = $('.pop_qq')
    wx.onclick = function () {
        // classList.add 添加类样式
        wx.classList.add("selected");
        qq.classList.remove("selected");

    };
    qq.onclick = function () {
        wx.classList.remove("selected");
        qq.classList.add("selected");
    };
    // 处理关闭视频弹窗时，视频暂停
    var closeBtn = $("#popVideo .pop_close");
    closeBtn.addEventListener("click", function () {
        $("#popVideo video").pause();
    });
    return showPop;
})()