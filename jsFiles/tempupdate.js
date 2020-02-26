(function(ctx){
    if(ctx.Project==undefined){
        ctx.Project = {}
    }
    function tempupdate(){
         var tmcnt = 0;
         var interval2 = setInterval(function() {
            var time = new Date();
        
            var tmupdate = {
            x:  [[time]],
            y: [[Math.random()*50]]
            }
        
            var olderTime = time.setMinutes(time.getMinutes() - 1);
            var futureTime = time.setMinutes(time.getMinutes() + 1);
        
            var minuteView = {
                    xaxis: {
                    type: 'date',
                    range: [olderTime,futureTime]
                    }
                };
        
            Plotly.relayout('temperature', minuteView);
            Plotly.extendTraces('temperature', tmupdate, [0]);
        
            if(++tmcnt === 100) clearInterval(interval2);
        }, 5000);
    }
    ctx.Project.TemperatureUpdate = tempupdate;
    
})(this)