/**
 * Created by iraklitavberidze on 11/1/17.
 */
function homeCtrl ($rootScope, $scope) {
    $scope.rotation = 0;

    $scope.rotateBox = function (string) {
        $scope.rotation = $scope.rotation === -180 ? 0 : -180;

        $('.' + string).css('transform', 'rotateY(' + $scope.rotation + 'deg)');
        $('.front, .back').toggleClass('inback');
    };

    interact('.draggable')
    	.draggable({
            inertia: true,
            snap: {
                targets: [
                    interact.createSnapGrid({x: 60, y: 60})
                ]
            },
            onmove: dragMoveListener,
            onend: restrictContainer
        });

    function restrictContainer (event) {
    	var elePos = $(event.target).position(),
    		eleX = elePos.left,
    		eleY = elePos.top;

    	console.log('X: ', eleX);
    	console.log('Y: ', eleY);
    }

    function dragMoveListener (event) {
        var target = event.target,
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    }

    window.dragMoveListener = dragMoveListener;
}