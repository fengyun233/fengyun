$(function () {

    //分页
    $('#fullpage').fullpage({
        navigation: true,
        verticalCentered:false,
        sectionsColor: ['#84ada2','#108e83','#4b5b8b','#935b4b','#49819c','#9e956e'],
    });


    var myWorksSwiper = new Swiper ('#works-container', {
        loop: true,
        autoplay: 5000,
        
        // 如果需要分页器
        pagination: '.swiper-pagination'
      })  

      var myChart = echarts.init(document.getElementById('main'));

        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [{
                    name: 'skills',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                            value: 100,
                            name: 'html/html5'
                        },
                        {
                            value: 100,
                            name: 'css/css3'
                        },
                        {
                            value: 100,
                            name: 'javascript'
                        }
                    ]
                },
                {
                    name: 'skills',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                            value: 100,
                            name: 'ajax/jsonp'
                        },
                        {
                            value: 120,
                            name: 'bootstrap'
                        },
                        {
                            value: 130,
                            name: 'node.js'
                        },
                        {
                            value: 135,
                            name: 'vue'
                        },
                        {
                            value: 150,
                            name: 'php'
                        },
                        {
                            value: 100,
                            name: 'mySQL'
                        },
                        {
                            value: 147,
                            name: 'C#'
                        },
                        {
                            value: 102,
                            name: 'jquery'
                        }
                    ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
})