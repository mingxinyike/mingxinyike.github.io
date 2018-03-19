$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','lastPage'],
        menu: '#myMenu',
        navigation: true,
       // sectionsColor: ['#00BCBD', '#F04F47', '#F9FAE1', '#F04F47', '#F9FAE1','#F04F47' ],
        'afterLoad': function(anchorLink, index){
            var speed = 500;
            if(index == 1){
            }
            if(index == 2){
                setTimeout(function () {
                    $('#skills').find('.order1').addClass('active')
                }, speed*1)

                setTimeout(function () {
                    $('#skills').find('.order2').addClass('active')
                }, speed*2)


            }
            if(index == 3){
                setTimeout(function () {
                    $('#projects').find('.order1').addClass('active')
                }, speed*1)

                setTimeout(function () {
                    $('#projects').find('.order2').addClass('active')
                }, speed*2)
            }

            if(index == 4){
                setTimeout(function () {
                    $('#education').find('.order1').addClass('active')
                }, speed*1)

                setTimeout(function () {
                    $('#education').find('.order2').addClass('active')
                }, speed*2)
            }
        },
    });



});