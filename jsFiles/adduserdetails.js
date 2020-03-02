(function(ctx){
    var Project = ctx.Project;
    var patientdetails = Project.patientdetails;
    function addPatientdetails(){
        patientdetails.name = document.getElementById("pname").nodeName;
        patientdetails.email = document.getElementById("email").nodeValue;
        patientdetails.doa = document.getElementById("Dateofadmission").nodeValue;
        console.log(patientdetails);
    }
    Project.addPatientdetails = addPatientdetails;
})(this)