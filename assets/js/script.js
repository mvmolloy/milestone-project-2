$(document).ready(function () {
    $(window).scroll(function() {
        //if map section is in view, change nav toggle icon colour to charcoal
        if($(".nav-toggle").offset().top > (window.innerHeight *2 - window.innerHeight/21) && $(".nav-toggle").offset().top < (window.innerHeight *3 - window.innerHeight/50) ) {
            $(".nav-toggle").removeClass("nav-toggle-normal").addClass("nav-toggle-map")
        }
        else {
             $(".nav-toggle").removeClass("nav-toggle-map").addClass("nav-toggle-normal");
        }
    })
//Home 
    $(".nav-toggle").on({
        mouseover: function () {
        $(this).addClass("nav-el-active");
        },
        mouseout: function () {
        if (!$(this).hasClass("isClicked")) {
            $(this).removeClass("nav-el-active");
        }
        },
        click: function () {
        $("#nav-menu").toggle();
        $(this).toggleClass("isClicked");
        if (!$(this).hasClass("isClicked")) {
            $(this).removeClass("nav-el-active");
        }
        },  
    });

//Modal 
    setTimeout(function () {
        //delay modal from opening for 30 seconds
        $("#weatherModal").modal("show");
    }, 30000);
//About 
$("#btn-about-us").click(function () {
    $(this).hide();
    $("#about-us-content").show();
  });
    $("#about-nav-col-next").click(function () {
        $(".team-img-active").next("img").removeClass("display-none").addClass("team-img-active");
        $(".team-img-active").prev("img").addClass("display-none").removeClass("team-img-active");   
        if ($(".team-img-active").is("img:last-child")) {
            $("#about-us-next").addClass("about-nav-btn-inactive");
            $("#btn-about-you").addClass("animated heartBeat delay-2s");
        }  
        $("#about-us-prev").removeClass("about-nav-btn-inactive");
        $(".team-header-active").next("h4").removeClass("display-none").addClass("team-header-active");
        $(".team-header-active").prev("h4").addClass("display-none").removeClass("team-header-active");
        $(".about-us-text-active").next("div").removeClass("display-none").addClass("about-us-text-active");
        $(".about-us-text-active").prev("div").addClass("display-none").removeClass("about-us-text-active");
    }); 
    
    $("#about-nav-col-prev").click(function () {
        $(".team-img-active").prev("img").removeClass("display-none").addClass("team-img-active");
        $(".team-img-active").next("img").addClass("display-none").removeClass("team-img-active");   
        if ($(".team-img-active").is("img:first-child")) { 
            $("#about-us-prev").addClass("vis-none");
        }   
        $("#about-us-next").removeClass("vis-none");
           $(".team-header-active").prev("h4").removeClass("display-none").addClass("team-header-active");
        $(".team-header-active").next("h4").addClass("display-none").removeClass("team-header-active");
        $(".about-us-text-active").prev("div").removeClass("display-none").addClass("about-us-text-active");
        $(".about-us-text-active").next("div").addClass("display-none").removeClass("about-us-text-active");
        $("#btn-about-you").removeClass("heartBeat");
    });
     $("#about-you-form").submit(function(){
         alert("complete");
         return false
    })

    $("#btn-about-you").click(function(){
        $(this).hide(); 
        $("#clientType").removeClass("display-none").addClass("form-active");
    })

    $('input:radio[name="clientType"]').change(function () {
        if ($(this).val() == "individ") {
            $("#promptName").html("your name:");
            $("#message").val("I'm looking to organise an expedition. ");
            $("#about-us-client-img").attr("src", "assets/img/team-img/individ-hex.png");
        }
        else {
           $("#about-us-client-img").attr("src", "assets/img/team-img/group-hex.png");
        }       
    });

    $("label, #btn-about-form-next").click(function(){
        if($("#individ").is(":checked") || $(this).is("#individ-label")) {
            if($(".form-active").next("div").hasClass("about-form-individ-panel")){
                $(".form-active").next(".about-form-panel").removeClass("display-none").addClass("form-active");
                $(".form-active").prev(".about-form-panel").addClass("display-none").removeClass("form-active");
            }
            else {
                $(".form-active").nextUntil(".about-form-individ-panel").next().addClass("form-active").removeClass("display-none");
                $(".form-active").prevUntil(".about-form-individ-panel").prev().addClass("display-none").removeClass("form-active");
            }
        }
        else {
            $(".form-active").next(".about-form-panel").removeClass("display-none").addClass("form-active");
            $(".form-active").prev(".about-form-panel").addClass("display-none").removeClass("form-active");
        }
        if ($(".form-active").prev().is("#enterName")){
            if ($("#group").is(":checked")) {
                if ($("#school").is(":checked") || $("#corporate").is(":checked")) {
                    $("#message").val(`I'm looking to arrange an expedition for a group from ${clientName.value}. `);
                    $("#sizePrompt").html(`How many people are in your group from ${clientName.value}?`)
                    $("#durationPrompt").html(`How many days would you like your group from ${clientName.value} to spend with us?`)
                    $("#msgMap").html(`We've generated a 3D expedition for your group from ${clientName.value} based on your responses.`)
                }  
                else {
                    $("#durationPrompt").html("How many days would you like your expedition to last?")
                    $("#sizePrompt").html(`How many people are in your group?`)  
                    $("#msgMap").html(`We've generated a 3D expedition for your group based on your responses.`) 
                }
            } 
            else {
                $("#custName").val(`${clientName.value}`); //set contact form name to name entered here
                $("#durationPrompt").html(`Hi, ${clientName.value}! How many days would you like your expedition to last?`);
                $("#msgMap").html(`${clientName.value}, we've generated a 3D expedition for you based on your responses.`)
            } 
        }
        if($(".form-active").is("#toMap")){
            $("#about-you-back-text").html("back");
        }       
            $("#about-you-back").removeClass("display-none");
    })  

    $("#about-you-back").click(function(){
        if($("#individ").is(":checked")){ 
            if($(".form-active").prev("div").hasClass("about-form-individ-panel")){
                $(".form-active").prev(".about-form-panel").removeClass("display-none").addClass("form-active");
                $(".form-active").next(".about-form-panel").addClass("display-none").removeClass("form-active");
            }
            else {
                $(".form-active").prevUntil(".about-form-individ-panel").prev().addClass("form-active").removeClass("display-none");
                $(".form-active").nextUntil(".about-form-individ-panel").next().addClass("display-none").removeClass("form-active");
            }
        }
        else {
            $(".form-active").prev(".about-form-panel").removeClass("display-none").addClass("form-active");
            $(".form-active").next(".about-form-panel").addClass("display-none").removeClass("form-active");
        }
        if ($(".form-active").is("#clientType")){
            $(this).addClass("display-none");
        } 
        $("#about-you-back-text").html("previous");
              
    }) 

    $('input:radio[name="groupType"]').change(function () {
        if ($(this).val() == "friends") {
            $("#promptName").html("a name for your group:");
        } else if ($(this).val() == "school") {
            $("#promptName").html("the name of your school:");
        } else {
            $("#promptName").html("the name of your business:");
        }
    });

    $("#clientName").keyup(function () {
        $("#btn-about-form-next").show();
        $("#about-client-name").html(`${clientName.value}`);
        if ($("#group").is(":checked")) {
            if ($("#school").is(":checked") || $("#corporate").is(":checked")) {
                 $("#message").val(`I'm looking to arrange an expedition for a group from ${clientName.value}. `);
            }
            else {
                $("#message").val("We're a group of friends/family looking to arrange an expedition. ");
            }
        }
    });

    $('input:radio[name="groupSize"]').change(function () {
        if ($("#smGroup").is(":checked")) {
            $("#message").val($("#message").val() + "There's between 2 and 5 of us ");
        } 
        else if ($("#mdGroup").is(":checked")) {
            $("#message").val($("#message").val() + "There's between 6 and 12 of us ");
        } 
        else {
            $("#message").val($("#message").val() + "There's over 12 of us ");
        }
    });

    $('input:radio[name="duration"]').change(function () {
        if ($("#group").is(":checked")) {
            if ($("#days1").is(":checked")) {
                $("#message").val($("#message").val() + "and we're looking to plan an expedition just for the day.");
            } 
            else if ($("#days2").is(":checked")) {
                $("#message").val($("#message").val() + "and we're looking to plan an expedition for two days.");
            } 
            else {
                $("#message").val($("#message").val() + "and we're looking to plan an expedition for three days or more.");
            }
        } 
        else {
            if ($("#days1").is(":checked")) {
                $("#message").val($("#message").val() + "I'm looking for it to be just for the day.");
            } 
            else if ($("#days2").is(":checked")) {
                $("#message").val($("#message").val() +"I'm looking for it it to last for two days.");
            } 
            else {
                $("#message").val($("#message").val() +"I'm looking for it to last for three days or more.");
            }
        }     
    });
    $('input:radio[name="water"]').change(function () {
        if ($("#inclWater").is(":checked")) {
            if($("#individ").is(":checked")) {
                 $("#message").val($("#message").val() + " I'd love to include a water journey!")
            }
            else {
                 $("#message").val($("#message").val() + " We'd love to include a water journey!")
            }
        }     
    });

//Map
    //checks if device is a touchscreen - if it is, displays scroll icon: check out https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript
 var windowTouchScreen = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
   if (windowTouchScreen == true) {
       $(".map-nav-wrapper").removeClass("display-none");
   } 
//Contact 
    $("#contact-form").submit(function(){
            return submitForm(this);
    })

     $("#contact-social-link").click(function () {
        $(".social-icons").addClass("animated heartBeat delay-1s");
    });
//Footer
$(".footer-to-top").on({
    mouseover: function () {
      $(this).addClass("footer-to-top-hover");
    },
    mouseout: function () {
      $(this).removeClass("footer-to-top-hover");
    },
    click: function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  });
});