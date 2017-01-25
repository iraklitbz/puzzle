/**
 * Created by iraklitavberidze on 11/1/17.
 */
function puzzleCtrl ($rootScope, $scope, $state, $stateParams, $window) {
    $rootScope.defaultClass = 'puzzle';

    var audio = $("#soltarsound")[0],
        secaudio = $("#arrastrarsound")[0],
        thirdaudio = $("#girarsound")[0],
        forthaudio = $("#donesound")[0],
        _initialX = 0,
    	_initialY = 0;

    $scope.rotation = 0;



    $scope.rotateBox = function (string, $event) {
        if ($event.target.className === 'box-scene disable-user-behavior') {
            if (thirdaudio.paused) {
                thirdaudio.play();
                thirdaudio.volume = 0.3;
            }else{
                thirdaudio.currentTime = 0
            }
            $scope.rotation = $scope.rotation === -180 ? 0 : -180;

            $('.' + string).css('transform', 'rotateY(' + $scope.rotation + 'deg)');
            $('.front, .back').toggleClass('inback');
        }
    };

    interact('.draggable')
    	.draggable({
            'inertia': true,
            'snap': {
            	'targets': [interact.createSnapGrid({
            		'x': 60,
            		'y': 60
            	})]
            },
            'onmove': dragMoveListener
        })
        .on('dragstart', getInitialPosition)
        .on('dragend', restrictContainer);

    function getInitialPosition (event) {
        var target = event.target,
    		x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    		y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        _initialX = x;
    	_initialY = y;
    }

    function dragMoveListener (event) {
        var target = event.target,
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        setTargetElementPosition(target, x ,y);
    }

    function restrictContainer (event) {
    	var target = event.target,
    		$target = $(event.target), 
    		elePos = $target.position(),
    		x = elePos.left,
    		y = elePos.top,
    		h = $target.height(),
    		w = $target.width();

    	if (
            piecesCollision()
    		|| x < 0
    		|| y < 0
    		|| (x + w) > 240
    		|| (y + h) > 240
    	) {
			setTargetElementPosition(target, _initialX, _initialY);

            if (secaudio.paused) {
                secaudio.play();
                secaudio.volume = 0.3;
            }else{
                secaudio.currentTime = 0
            }
    		
            return false;
    	}

        if (audio.paused) {
            audio.play();
            audio.volume = 0.3;
        }else{
            audio.currentTime = 0
        }
    	testIfWin();
    }

    function setTargetElementPosition (target, x, y) {
    	target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    }

    function testIfWin() {
    	var $rejilla = $('.rejilla'),
    		$squares = $('.square'),
    		_rejilla = [],
    		_squares = [];

    	$rejilla.each(function (k, v) {
    		var $v = $(v).get(0).getBoundingClientRect();

    		_rejilla.push(JSON.stringify({
    			'top': $v.top,
    			'left': $v.left,
    			'obj': v
    		}));
    	});

    	$squares.each(function (k, v) {
    		var $v = $(v).get(0).getBoundingClientRect();
    		
    		_squares.push(JSON.stringify({
    			'top': $v.top,
    			'left': $v.left,
    			'obj': v
    		}));
    	});

    	if (_rejilla.sort().join('::') === _squares.sort().join('::')) youWin();
    }

    function piecesCollision() {
        var _collision = false,
            _positions =  [],
            $currentFace = $('.face').not('.inback').find('.square');

            $currentFace.each(function (k, v) {
                var $v = $(v).get(0).getBoundingClientRect(),
                    _objString = JSON.stringify({
                        'top': $v.top,
                        'left': $v.left,
                        'obj': v
                    });

                if ($.inArray(_objString, _positions) > -1) {
                    _collision = true;
                }

                _positions.push(_objString);
            });

        return _collision;
    }

    function youWin() {
        if (forthaudio.paused) {
            forthaudio.play();
            forthaudio.volume = 0.3;
        }else{
            forthaudio.currentTime = 0
        }

    	$state.go('puzzle', {
            'lvl': parseInt($stateParams.lvl) + 1
        });
    }

    /**
     * Only for debug purpose
     */
    $window._youWin = function() {
        youWin();

        console.log('LVL', $stateParams.lvl);
    }
}