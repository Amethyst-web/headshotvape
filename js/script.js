/**
 * Created by Nikita on 21.06.2016.
 */
$(document).ready(function(){
    var frameProportion = 1.78, //png frame aspect ratio
        frames = 10, //number of png frames
        resize = false;

//set transitionBackground dimentions
    setLayerDimensions();
    $(window).on('resize', function(){
        if( !resize ) {
            resize = true;
            (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
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