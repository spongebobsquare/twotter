var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    xAxis: {
        type: 'category',
        data: ['Group1', 'Group2', 'Group3', 'Group4']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            // female
            data: [2, 5, 8, 4],
            type: 'line',
            smooth: true
        },
        {
            // male
            data: [13, 2, 4, 2],
            type: 'line',
            smooth: true
        }
    ]
};

option && myChart.setOption(option);
