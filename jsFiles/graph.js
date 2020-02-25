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
    
    Plotly.newPlot('pulseoximeter', spo2data, spo2layout, { scrollZoom: true });
    Plotly.newPlot('temperature', tempdata, templayout, { scrollZoom: true });
    Plotly.newPlot('humidity', humiditydata, humiditylayout, { scrollZoom: true });
})(this)
