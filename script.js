// scripts/convertImage.js
function convertImage() {
    var input = document.getElementById('input');
    var inputFile = input.files[0];

    if (!inputFile) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select an Image first!',
            button: 'Ok',
            confirmButtonColor: 'crimson'
        });
        return;
    }

    var targetFormat = document.getElementById('format').value;

    var reader = new FileReader();
    reader.onload = function(event) {
        var image = new Image();
        image.onload = function() {
            var canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0);

            var link = document.createElement('a');
            link.download = `image.${targetFormat}`;
            link.href = canvas.toDataURL(`image/${targetFormat}`);
            link.click();
        };
        image.src = event.target.result;
    };
    reader.readAsDataURL(inputFile);
}
