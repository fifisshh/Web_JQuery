$("*").each(function (index, element) {
    $(this).click(function (e) { 
        var target = $(this).attr("data-gt-target");
        var duration = $(this).attr("data-gt-dur");
        var offset = $(this).attr("data-gt-offset");
        console.log("目標；"+target);
        console.log("時間；"+duration);
        console.log("位移；"+offset);
    });
    
});