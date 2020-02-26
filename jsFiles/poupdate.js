(function(ctx){
    if(ctx.Project==undefined){
        ctx.Project = {}
    }
    function spo2update(){
       var pocnt = 0;
        var interval = setInterval(function() {
            var time = new Date();
        
            var poupdate = {
            x:  [[time]],
            y: [[Math.random()*100]]
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
            Plotly.extendTraces('pulseoximeter', poupdate, [0]);
            if(++pocnt === 100) clearInterval(interval);
        }, 2000);
    }
    ctx.Project.PulseUpdate = spo2update;
})(this)