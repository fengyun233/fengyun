$(function () {

    //分页
    $('#fullpage').fullpage({
        navigation: true,
        verticalCentered:false,
        sectionsColor: ['#84ada2','#108e83','#4b5b8b','#935b4b','#49819c','#9e956e']
    });

    var myGithupSwiper = new Swiper('#githup-container', {
        loop: true,
        autoplay: 2000,
        effect: 'cube',
        cube: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 100,
            shadowScale: 0.6
        }
    })


    var myWorksSwiper = new Swiper ('#works-container', {
        loop: true,
        autoplay: 2000,
        
        // 如果需要分页器
        pagination: '.swiper-pagination'
      })  
})