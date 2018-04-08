/**
 * Created by mushi on 2017/10/15.
 */
$(function () {
    function load() {

        var touchPanel = document.querySelector('body');
        var docHeight = document.documentElement.clientHeight;
        //var winScrollTop = $(window).scrollTop();
        var touchHeight = document.querySelector('.touch').scrollHeight;


        touchPanel.addEventListener('touchstart', touch, false);
        touchPanel.addEventListener('touchmove', touch, false);
        touchPanel.addEventListener('touchend', touch, false);
        var startY = 0,
            moveY = 0,
            endY = 0;

        function touch(event) {
            var event = event || window.event;
            event.stopPropagation();
            var oInp = '';

            switch (event.type) {
                case "touchstart":
                    oInp = "Touch started (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
                    //console.log(oInp);
                    startY = event.touches[0].pageY;
                    break;
                case "touchend":
                    oInp = "Touch end (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")";
                    //console.log(oInp);
                    break;
                case "touchmove":
                    event.preventDefault();
                    var winScrollTop = $(window).scrollTop();
                    oInp = "Touch moved (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
                    //console.log(oInp);
                    //console.log($(window).scrollTop());
                    console.log(docHeight);
                    console.log(winScrollTop);
                    console.log(touchHeight);
                    if (docHeight + winScrollTop >= touchHeight) {
                        console.log('到底了');
                    }else{
                        console.log('还没到底');
                    }
                    break;
            }

        }
    }

    load();
});