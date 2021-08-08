$("document").ready(() => {
    $("#profile_image").css({"transform" : "translate(-50%,0%)","opacity" : "1"});
    setTimeout(() => {
        $("#site_name").css({"transform" : "translateX(0%)","opacity" : "1"});
        setTimeout(() => {
            $("#my_name").css({"transform" : "translateY(-50%)","opacity" : "1"});
            setTimeout(() => {
                $("#hobbies").css({"opacity" : "1"});
                $("#header").css({"opacity" : "1"});
            }, 600);
        }, 400);
    }, 300);

    $("#about").mouseenter(()=>{
        $("#underline_about").css({"transform" : "translateX(0%)"});
    });
    $("#about").mouseleave(()=>{
        $("#underline_about").css({"transform" : "translateX(-102%)"});
    });

    $("#posts").mouseenter(()=>{
        $("#underline_posts").css({"transform" : "translateX(0%)"});
    });
    $("#posts").mouseleave(()=>{
        $("#underline_posts").css({"transform" : "translateX(-102%)"});
    });
    $("#gallery").mouseenter(()=>{
        $("#underline_gallery").css({"transform" : "translateX(0%)"});
    });
    $("#gallery").mouseleave(()=>{
        $("#underline_gallery").css({"transform" : "translateX(-102%)"});
    });
    $("#portfolio").mouseenter(()=>{
        $("#underline_portfolio").css({"transform" : "translateX(0%)"});
    });
    $("#portfolio").mouseleave(()=>{
        $("#underline_portfolio").css({"transform" : "translateX(-102%)"});
    });

    var check = document.querySelector("#this-is-how-me-looks");
    if(check != null){
        $("#underline_about").css({"transform" : "translateX(0%)"});
        $("#about").mouseenter(()=>{
            $("#underline_about").css({"transform" : "translateX(0%)"});
        });
        $("#about").mouseleave(()=>{
            $("#underline_about").css({"transform" : "translateX(0%)"});
        });
    }
    else{
        $("#about").mouseenter(()=>{
            $("#underline_about").css({"transform" : "translateX(0%)"});
        });
        $("#about").mouseleave(()=>{
            $("#underline_about").css({"transform" : "translateX(-102%)"});
        });
    }
});


