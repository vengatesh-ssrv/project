
(function(ctx){

    function generatePDF(id) {
        var element = document.getElementById(id);
        html2pdf()
          .from(element)
          .save();
      }

    ctx.Project.PDF = generatePDF;
})(this)