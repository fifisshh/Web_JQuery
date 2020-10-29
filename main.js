$("*").each(function (index, element) {
    $(this).click(function (e) {
        var target = $(this).attr("data-gt-target");
        var duration = $(this).attr("data-gt-dur");
        var offset = $(this).attr("data-gt-offset");

        // console 只出現3個
        if (target) {
            console.log("目標；" + target);
            console.log("時間；" + duration);
            console.log("位移；" + offset);

            // 出現該連結的座標位置
            var top = $(target).offset().top;
            console.log("位置；" + top);

            // 取得html元素的動畫
            $("html").stop().animate({
                scrollTop: top - offset
            }, parseInt(duration));
        }
    });
});

$("html").on("mousewheel", function () {
    $("html").stop();
})