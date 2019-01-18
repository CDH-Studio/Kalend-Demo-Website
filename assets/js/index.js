$(document).ready(
    function(){
        
        if (navigator.language.includes('fr')) {
            $(".en").hide();
            $(".fr").show();

            $("#frTrig").css("font-weight", "bold");
            $("#frTrig").css("cursor", "default");
            $("#frTrig").css("color", "#fff");
        } else {
            $(".en").show();
            $(".fr").hide();
            
            $("#enTrig").css("font-weight", "bold");
            $("#enTrig").css("cursor", "default");
            $("#enTrig").css("color", "#fff");
        }

        $(".en").css("visibility", "visible");
        $(".fr").css("visibility", "visible");

        $("#enTrig").on('click', function(event) {
            $(".en").show();
            $(".fr").hide();

            $("#enTrig").css("font-weight", "bold");
            $("#enTrig").css("cursor", "default");
            $("#enTrig").css("color", "#fff");

            $("#frTrig").css("font-weight", "");
            $("#frTrig").css("cursor", "");
            $("#frTrig").css("color", "");
        });

        $("#frTrig").on('click', function(event) {
            $(".en").hide();
            $(".fr").show();

            $("#frTrig").css("font-weight", "bold");
            $("#frTrig").css("cursor", "default");
            $("#frTrig").css("color", "#fff");

            $("#enTrig").css("font-weight", "");
            $("#enTrig").css("cursor", "");
            $("#enTrig").css("color", "");
        });
    }
);