$('#btn-save').click(function() {
    var text = $('#text-input').val();
    var fileName = $('#input-fileName').val();
    var blob = new Blob([text], {
        type: "text/plain;charset=utf-8"
    });
    saveAs(blob, fileName+".txt");
});