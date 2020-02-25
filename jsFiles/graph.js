(function(ctx){
    function rand() {
        return Math.random();
      }

    var time = new Date();
    var ydata=[1,2,3].map(rand);
    var graphType = 'lines';

    var trace1 = {
        x:[time],
        y: ydata,
        type: graphType
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

    var TimeStamp=[1,1,1,1];
    var SPO2=[2,2,2,2];
    var HeartBeat=[3,3,3,3];
    var spo2values = [
        TimeStamp,
        SPO2,
        HeartBeat
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
    
      
      
      
    Plotly.newPlot('pulseoximeter', spo2data, spo2layout, { scrollZoom: true ,displaylogo: false});
    Plotly.newPlot('temperature', tempdata, templayout, { scrollZoom: true ,displaylogo: false});
    Plotly.newPlot('humidity', humiditydata, humiditylayout, { scrollZoom: true ,displaylogo: false});
    Plotly.newPlot('pulseTable', spo2tabledata, spo2layout, {displaylogo: false});

    var cnt = 0;

    var interval = setInterval(function() {

    var time = new Date();

    var update = {
    x:  [[time]],
    y: [[rand()]]
    }

    var olderTime = time.setMinutes(time.getMinutes() - 1);
    var futureTime = time.setMinutes(time.getMinutes() + 1);

    var minuteView = {
            xaxis: {
            type: 'date',
            range: [olderTime,futureTime]
            }
        };

    Plotly.relayout('pulseoximeter', minuteView);
    Plotly.extendTraces('pulseoximeter', update, [0]);
    Plotly.relayout('temperature', minuteView);
    Plotly.extendTraces('temperature', update, [0]);
    Plotly.relayout('humidity', minuteView);
    Plotly.extendTraces('humidity', update, [0]);

    if(++cnt === 100) clearInterval(interval);
    }, 1000);

})(this)

