(function(ctx){
    if(ctx.Project == undefined){
        ctx.Project = {};
    }

    var Project = ctx.Project;
    var emailDetails = Project.emailDetails;
    function sendEmail(subject , emailBody, typeofalert) {
        var myEmail = emailDetails.myEmail;
       var recipientEmail = emailDetails. doctorsmail;
        var password = emailDetails.password;
        Email.send({
        Host: "smtp.gmail.com",
        Username : myEmail,
        Password : password,
        To : recipientEmail.join(","),
        From : myEmail,
        Subject : subject,
        Body : emailBody,
        }).then(
            message => console.log("mail sent")
        );
        
}
ctx.Project.SendMail = sendEmail;
})(this)