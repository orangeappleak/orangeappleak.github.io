$("body").ready(()=>{
    AOS.init();
    var image = document.querySelector("#image");

    image.onmouseover = () => {
        $("#karthik").css({"opacity":"1","transform":"translate(-50%,40%)"});
    }

    image.onmouseleave = function(e){
        $("#karthik").css({"opacity":"0","transform":"translate(-50%,50%)"});
    } 

    var h1_list = document.querySelectorAll("#basic_info h1");

    for(var i=0;i<h1_list.length;i++){
        $(h1_list[i]).delay(i*150).animate({"opacity":"1"});
    }

    $("#HTML").hover(() => {
        $("#HTML_BAR").css({"flex":"0.6"});
    });
    $("#HTML").mouseout(() => {
        $("#HTML_BAR").css({"flex":"0"});
    });

    var joker_container = document.querySelector("#joker-container");

    joker_container.onmouseenter = function(){
      var offset = $(joker_container).offset();
      joker_container.onmousemove = function(e){
        var x = e.pageX;
        var y = e.pageY;
      }
    }

    joker_container.onmouseleave = function(){
      console.log("left")
    }
});
