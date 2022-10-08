$(document).ready(function() {
    // menu
    $("#sj_menu").on("click", function() {
        console.log("1");
        $(".sj_main_menu_bg").show();
    });

    // menu close
    $(".close_btn").on("click", function() {
        $(".sj_main_menu_bg").hide();
    })

});
