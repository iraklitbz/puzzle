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

    gridster = $(".gridster ul").gridster({
        widget_base_dimensions: [100, 55],
        widget_margins: [3, 3],
        helper: 'clone',
        resize: {
            enabled: false,
            max_size: [2, 4],
            min_size: [1, 1]
        },
        min_rows: 3
    }).data('gridster');
}

