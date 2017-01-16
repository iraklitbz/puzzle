/**
 * Created by iraklitavberidze on 11/1/17.
 */
function homeCtrl ($rootScope, $scope) {
    $scope.rotation = 0;

    $scope.rotateBox = function (string) {
        $scope.rotation = $scope.rotation === -180 ? 0 : -180;

        $("." + string).css("transform", "rotateY(" + $scope.rotation + "deg)")

        $('.front, .back').toggleClass('inback');
    };

    $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [280.4, 280.4]
    });
}

