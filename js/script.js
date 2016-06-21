/**
 * Created by Nikita on 21.06.2016.
 */
$(window).load(function(){
    setTimeout(function(){
        $('.cd-transition-layer').addClass('opening');
    }, 100);
    var frameProportion = 1.77777, //png frame aspect ratio
        frames = 10, //number of png frames
        resize = false;

//set transitionBackground dimentions
    setLayerDimensions();
    $(window).on('resize', function(){
        if( !resize ) {
            resize = true;
            (!window.requestAnimationFrame) ? setLayerDimensions() : window.requestAnimationFrame(setLayerDimensions);
        }
    });

    function setLayerDimensions() {
        var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            layerHeight, layerWidth;

        if( windowWidth/windowHeight > frameProportion ) {
            layerWidth = windowWidth;
            layerHeight = layerWidth/frameProportion;
        } else {
            layerHeight = windowHeight;
            layerWidth = layerHeight*frameProportion;
        }

        $('.bg-layer').css({
            'width': layerWidth*frames+'px',
            'height': layerHeight+'px',
        });

        resize = false;
    }
});