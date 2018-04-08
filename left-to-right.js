$(function () {
    var startY = 0,
        moveY = 0,
        endY = 0;
    var touchWrap = document.getElementsByClassName('slide-son');
    for (var i = 0; i < touchWrap.length; i++) {
        touchWrap[i].addEventListener('touchstart', touch, false);
        touchWrap[i].addEventListener('touchmove', touch, false);
        touchWrap[i].addEventListener('touchend', touch, false);
    }

    function touch(event) {
        var event = event || window.event;
        event.stopPropagation();

        switch (event.type) {
            case "touchstart":
                startY = event.touches[0].pageY;
                moveY = event.touches[0].pageY;
                //console.log(event.target);
                //console.log($(this).index());
                break;
            case "touchmove":
                moveY = event.touches[0].pageY;
                break;
            case "touchend":
                endY = moveY - startY;
                console.log(endY);
                //console.log($(this).index());
                break;
        }

    }
});