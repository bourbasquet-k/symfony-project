new fullpage('#container', {
    navigation: true,
    responsiveWidth: 100,
    anchors: ['Presentation', 'Projects', 'Watch', 'Gallery'],
    onLeave: function(origin, destination, direction){
        console.log("Leaving section" + origin.index);
    },
});