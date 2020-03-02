(function(ctx){
    var Project = ctx.Project;
    var patientdetails = Project.patientdetails;
    function addPatientdetails(){
        patientdetails.name = document.getElementById("pname").nodeName;
        patientdetails.email = document.getElementById("email").nodeValue;
        patientdetails.doa = document.getElementById("Dateofadmission").nodeValue;
        document.getElementById("datavisualization").style.display = "";
    }
    Project.addPatientdetails = addPatientdetails;
})(this)