var pageIndex = 0;
var pages = $$('.page_container .page')

var nextIndex = null;

function setStatic() {

    for (var i = 0; i < pages.length; i++) {
        var page = pages[i];

        if (i == pageIndex) {
            page.style.zIndex = 1
        } else {
            page.style.zIndex = 10
        }
        page.style.top = (i - pageIndex) * height() + "px"

    }
    nextIndex = null;
}
setStatic()


/**
 *  移动中
 * 正向下  负向上
 * @param {*}dis 移动的偏移量
 */


function moving(dis) {
    for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        if (pageIndex !== i) {
            page.style.top = (i - pageIndex) * height() + dis + "px"
        }
    }
    if (dis < 0 && pageIndex < pages.length - 1) {
        nextIndex = pageIndex + 1;
    } else if (dis > 0 && pageIndex > 0) {
        nextIndex = pageIndex - 1;
    } else {
        nextIndex = null;
    }

}

function finishMove() {
    if (nextIndex == null) {
        setStatic()
        return
    }
    var nextpage = pages[nextIndex];
    nextpage.style.transition = '0.5s'
    nextpage.style.top = 0;

    setTimeout(function () {
        // 当前页面变了
        pageIndex = nextIndex;
        // 动画完了
        nextpage.style.transition = "";
        setStatic();
    }, 500);
}



var pageContainer = $(".page_container");
pageContainer.ontouchstart = function (e) {
    var y = e.changedTouches[0].clientY;
    var dis = 0;

    this.ontouchmove = function (e) {
        // console.log(e.changedTouches[0].clientY)
        dis = e.changedTouches[0].clientY - y;

        if (Math.abs(dis) < 20) {
            dis = 0
        }
        moving(dis)
    }
    this.ontouchend = function (e) {


        finishMove();
        this.ontouchmove = null


    }

}

// 自动切换到某个板块
// index: 页面索引
function showPage(index) {
    var nextPage = pages[index];
    if (index < pageIndex) {
        nextPage.style.top = -height() + "px"
    } else if (index > pageIndex) {
        nextPage.style.top = height() + "px";
    } else {
        if (pageIndex === 0) {
            // 目前是第一个页面
            pageIndex++;
        } else {
            pageIndex--;
        }
        setStatic(); // 重新设置位置
    }

    // 强行让浏览器渲染
    nextPage.clientHeight; // 读取dom的尺寸和位置，会导致浏览器强行渲染
    nextIndex = index; // 设置下一个页面索引
    finishMove();
}



