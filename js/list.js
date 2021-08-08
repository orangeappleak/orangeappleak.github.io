$("document").ready(() => {
    var list = document.querySelector("#list");
    if(list != null){
        $("#underline_posts").css({"transform" : "translateX(0%)"});
        $("#posts").mouseenter(()=>{
            $("#underline_posts").css({"transform" : "translateX(0%)"});
        });
        $("#posts").mouseleave(()=>{
            $("#underline_posts").css({"transform" : "translateX(0%)"});
        });
    }
    else{
        $("#posts").mouseenter(()=>{
            $("#underline_posts").css({"transform" : "translateX(0%)"});
        });
        $("#posts").mouseleave(()=>{
            $("#underline_posts").css({"transform" : "translateX(-102%)"});
        });
    }
            $("#all_posts").click(()=>{
                $("#my_recent_posts").css({"transform":"translateX(100%)","opacity":"0"});
                setTimeout(() => {
                    $("#my_recent_posts").css({"visibility": "collapse","position":"absolute"});
                    $("#my_posts").css({"visibility": "visible","opacity":"1","transform":"translateX(0%)","position":"relative"});
                }, 600);
                $("#recent_posts").css({"border-bottom":"5px solid white"});
                $("#all_posts").css({"border-bottom":"5px solid red"});
            });

            $("#recent_posts").click(()=>{
                $("#my_posts").css({"transform":"translateX(-100%)","opacity":"0"});
                setTimeout(() => {
                    $("#my_posts").css({"visibility": "collapse","position":"absolute"});
                    $("#my_recent_posts").css({"visibility": "visible","opacity":"1","transform":"translateX(0%)","position":"relative"});
                }, 600);
                $("#recent_posts").css({"border-bottom":"5px solid red"});
                $("#all_posts").css({"border-bottom":"5px solid white"});
            });

});