
(function(ctx){

    function generatePDF(element) {
        var element = document.getElementById(element);
        html2pdf()
          .from(element)
          .save();
      }

    ctx.Project.PDF = generatePDF;
})(this)