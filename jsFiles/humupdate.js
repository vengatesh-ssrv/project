(function(ctx){
    if(ctx.Project==undefined){
        ctx.Project = {}
    }

    function humupdate(){
    var hucnt = 0;

    var interval1 = setInterval(function() { 
            var time = new Date();
        
            var huupdate = {
            x:  [[time]],
            y: [[Math.random()*70]]
            }
        
            var olderTime = time.setMinutes(time.getMinutes() - 1);
            var futureTime = time.setMinutes(time.getMinutes() + 1);
        
            var minuteView = {
                    xaxis: {
                    type: 'date',
                    range: [olderTime,futureTime]
                    }
                };
            Plotly.relayout('humidity', minuteView);
            Plotly.extendTraces('humidity', huupdate, [0]);
        
            if(++hucnt === 100) clearInterval(interval1);
     }, 2000);
    }
    ctx.Project.HumidityUpdate = humupdate;
})(this)