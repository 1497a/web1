jQuery(function() {
    jQuery(".trash").click(function() {
        swal({
                title: "Cảnh báo",
                text: "Bạn có chắc chắn là muốn xóa sản phẩm này?",
                buttons: ["Hủy bỏ", "Đồng ý"],
            })
            .then((willDelete) => {
                if (willDelete) {
                    deleteProduct(this);

                    swal("Đã xóa thành công!", {

                    });
                }
            });
    });
});

jQuery(function() {
    jQuery(".lock1").click(function() {
        swal({
                title: "Cảnh báo",
                text: "Bạn có chắc chắn là muốn cấm tài khoản này?",
                buttons: ["Hủy bỏ", "Đồng ý"],
            })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Đã cấm thành công!", {});
                    $('tr .abc').addClass('active_ban')
                    jQuery('.lock1').css('display', 'none');
                    jQuery('.unlock1').css('display', 'inline-block');
                }
            });
    });
});


jQuery(function() {
    jQuery(".lock2").click(function() {
        swal({
                title: "Cảnh báo",
                text: "Bạn có chắc chắn là muốn cấm tài khoản này?",
                buttons: ["Hủy bỏ", "Đồng ý"],
            })
            .then((willDelete) => {
                if (willDelete) {
                    $('tr .xyz').addClass('active_ban')
                    swal("Đã cấm thành công!", {

                    });
                }

            });
    });
});

jQuery(function() {
    jQuery(".lock3").click(function() {
        swal({
                title: "Cảnh báo",
                text: "Bạn có chắc chắn là muốn cấm tài khoản này?",
                buttons: ["Hủy bỏ", "Đồng ý"],
            })
            .then((willDelete) => {
                if (willDelete) {
                    $('tr .qwe').addClass('active_ban')
                    swal("Đã cấm thành công!", {

                    });
                }

            });
    });
});

jQuery(function() {
    jQuery(".lock4").click(function() {
        swal({
                title: "Cảnh báo",
                text: "Bạn có chắc chắn là muốn cấm tài khoản này?",
                buttons: ["Hủy bỏ", "Đồng ý"],
            })
            .then((willDelete) => {
                if (willDelete) {
                    $('tr .zxc').addClass('active_ban')
                    swal("Đã cấm thành công!", {

                    });
                }

            });
    });
});


jQuery(function() {
    jQuery(".unlock1").click(function() {
        swal({
                title: "Cảnh báo",
                text: "Bạn có chắc chắn là muốn gỡ cấm tài khoản này?",
                buttons: ["Hủy bỏ", "Đồng ý"],
            })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Đã gỡ thành công!", {});
                    $('tr .abc').removeClass('active_ban')
                    jQuery('.lock1').css('display', 'inline-block');
                    jQuery('.unlock1').css('display', 'none');
                }
            });
    });
});

jQuery(function() {
    jQuery(".unlock2").click(function() {
        swal({
                title: "Cảnh báo",
                text: "Bạn có chắc chắn là muốn gỡ cấm tài khoản này?",
                buttons: ["Hủy bỏ", "Đồng ý"],
            })
            .then((willDelete) => {
                if (willDelete) {
                    $('tr .xyz').removeClass('active_ban')
                    swal("Đã gỡ thành công!", {

                    });
                }
            });
    });
});

jQuery(function() {
    jQuery(".unlock3").click(function() {
        swal({
                title: "Cảnh báo",
                text: "Bạn có chắc chắn là muốn gỡ cấm tài khoản này?",
                buttons: ["Hủy bỏ", "Đồng ý"],
            })
            .then((willDelete) => {
                if (willDelete) {
                    $('tr .qwe').removeClass('active_ban')
                    swal("Đã gỡ thành công!", {

                    });
                }
            });
    });
});

jQuery(function() {
    jQuery(".unlock4").click(function() {
        swal({
                title: "Cảnh báo",
                text: "Bạn có chắc chắn là muốn gỡ cấm tài khoản này?",
                buttons: ["Hủy bỏ", "Đồng ý"],
            })
            .then((willDelete) => {
                if (willDelete) {
                    $('tr .zxc').removeClass('active_ban')
                    swal("Đã gỡ thành công!", {

                    });
                }
            });
    });
});


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

function changeTime(type, element) {
    let tab = document.getElementsByClassName('tab_item');
    for (i = 0; i < tab.length; i++) {
        tab[i].style.background = '#c6edfd';
        tab[i].style.color = '#001c40';
    }

    element.style.background = '#001c40';
    element.style.color = '#c6edfd';
    document.getElementById(type).style.display = 'block';
    switch (type) {
        case 'past1M':
            document.getElementById('past3M').style.display = 'none';
            document.getElementById('past1Y').style.display = 'none';
            break;
        case 'past3M':
            document.getElementById('past1M').style.display = 'none';
            document.getElementById('past1Y').style.display = 'none';
            break;
        case 'past1Y':
            document.getElementById('past1M').style.display = 'none';
            document.getElementById('past3M').style.display = 'none';
            break;
    }
}