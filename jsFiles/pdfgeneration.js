
(function(ctx){

    function generatePDF(element) {
        var element = document.getElementById(element);
        html2pdf()
          .from(element)
          .save();
      }

    ctx.PromiseRejectionEvent.PDF = generatePDF;
})(this)