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

    if (jQuery().packery) {
    	var $grid = $('#grid');

    	$grid.packery({
        	itemSelector: '.grid-item'
    	});

    	$grid.find('.grid-item').each(function (i, gridItem) {
    		var draggie = new Draggabilly(gridItem);

    		$grid.packery('bindDraggabillyEvents', draggie);
    	});
	}
}

