(function maze() {
    "use strict";
    var crossed = 0;

    $(document).ready(function () {
        //case1
        $(".boundary").mouseover(function () {
            $(".boundary").addClass("youlose");
            $("#status").text("you lose");
            crossed++;
        });
        //case2
        $("#end").mouseover(function () {
            if (crossed == 0) {
                $("#status").text("you win");
            }
        });
        $("#start").click(function () {
            $(".boundary").removeClass("youlose");            
            $("#status").text("Game is Started");
            crossed = 0;
        });
    });
})();
