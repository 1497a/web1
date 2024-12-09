

// ------------------------------ Add image ------------------------------
$(document).ready(function() {
    $("button[type='image']").click(function() {
        $("input[id='files']").click();
    });
});

function handleFileSelect(evt) {
    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++) {
        if (!f.type.match('image.*')) {
            continue;
        }
        var reader = new FileReader();
        reader.onload = (function(theFile) {
                return function(e) {
                    var span = document.createElement('span');
                    console.log(e.target.result);
                    span.innerHTML = ['<img class="thumb" src="', e.target.result, '" title="', escape(theFile.name), '"/>', '<i class="fa fa-times time " ></i>'].join('');
                    document.getElementById('previewImg').insertBefore(span, null);
                };
            })
            (f);
        reader.readAsDataURL(f);
    }
}
document.getElementById('files').addEventListener('change', handleFileSelect, false);
$(document).on('click', ".time", function() {
    if (confirm("Bạn Có Muốn Xóa ?")) {
        $(this).closest("span").fadeOut();
        $("#files").val(null);
    } else return false;
});




// ------------------------------ change time ------------------------------
