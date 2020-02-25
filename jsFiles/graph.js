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
        [1,1,1],
        [2,2,2],
        [3,3,3]
    ]
    
    var spo2tabledata = [{
    type: 'table',
    header: {
      values: [["<b>Timestamp</b>"], ["<b>HeartBeat</b>"],
                   ["<b>SPO2</b>"]],
      align: "center",
      line: {width: 1, color: 'black'},
      fill: {color: "grey"},
      font: {family: "Arial", size: 12, color: "white"}
    },
    
    cells: {
      values: spo2values,
      align: "center",
      line: {color: "black", width: 1},
      font: {family: "Arial", size: 11, color: ["black"]}
    }
    }]
    
    Plotly.newPlot('pulseoximeter', spo2data, spo2layout, { scrollZoom: true });
    Plotly.newPlot('temperature', tempdata, templayout, { scrollZoom: true });
    Plotly.newPlot('humidity', humiditydata, humiditylayout, { scrollZoom: true });
    Plotly.newPlot('pulseTable', spo2tabledata, spo2layout);
})(this)

