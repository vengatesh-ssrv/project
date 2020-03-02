(function(ctx){
    var Project = ctx.Project;
    var patientdetails = Project.patientdetails;
    function addPatientdetails(){
        patientdetails.name = document.getElementById("pname").value;
        patientdetails.email = document.getElementById("email").value;
        patientdetails.doa = document.getElementById("Dateofadmission").value;
    }
    Project.addPatientdetails = addPatientdetails;
})(this)