$("*").each(function (index, element) {
    $(this).click(function (e) { 
        var target = $(this).attr("data-gt-target");
        console.log(target);
    });
    
});