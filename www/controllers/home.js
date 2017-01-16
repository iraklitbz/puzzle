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

    if (jQuery().gridster) {
    	var gridster;

        gridster = $(".gridster ul").gridster({
            widget_base_dimensions: [58.5, 58.5],
            widget_margins: [0, 0],
            helper: 'clone',
            resize: {
                enabled: false,
            },
            min_cols: 4,
        }).data('gridster');


	}
}

