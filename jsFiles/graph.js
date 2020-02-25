(function(ctx){
    var trace1 = {
        x: ['1', '2', '3'],
        y: [90, 40, 60],
        type: 'scatter'
    };
    
    var spo2data = [trace1];
    var tempdata = [trace1];
    var humiditydata = [trace1];
    
    var spo2layout = {
        title: 'Pulse Oximeter - SPO2',
        showlegend: true
    };
    
    var templayout = {
        title: 'Temperature - C',
        showlegend: true
    };
    
    var humiditylayout = {
        title: 'Humidity',
        showlegend: true
    };

    var spo2values = [
        ['TimeStamp', 'HeartRate', 'SPO2'],
        [1,1,1],
        [2,2,2],
        [3,3,3],
        [4,4,4]
    ]
    
    var spo2data = [{
    type: 'table',
    cells: {
      values: spo2values,
      align: "center",
      line: {color: "black", width: 1},
      font: {family: "Arial", size: 11, color: ["black"]}
    }
    }]
    
    Plotly.newPlot('pulseTable', spo2data);
    Plotly.newPlot('pulseoximeter', spo2data, spo2layout, { scrollZoom: true });
    Plotly.newPlot('temperature', tempdata, templayout, { scrollZoom: true });
    Plotly.newPlot('humidity', humiditydata, humiditylayout, { scrollZoom: true });
})(this)

