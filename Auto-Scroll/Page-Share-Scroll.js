var get_class = document.getElementsByClassName('q5bimw55 rpm2j7zs k7i0oixp gvuykj2m j83agx80 cbu4d94t ni8dbmo4 eg9m0zos l9j0dhe7 du4w35lb ofs802cu pohlnb88 dkue75c7 mb9wzai9 d8ncny3e buofh1pr g5gj957u tgvbjcpo l56l04vs r57mb794 kh7kg01d c3g1iek1 k4xni2cv');
var share = get_class[get_class.length-1];

if (enbledscroll == '1') {
    var enbledscroll = 0;
    clearInterval(autoscroll);
} else {
    var enbledscroll = 1;
    var autoscroll = setInterval(function() {
        mood.scrollTo(0, share.scrollHeight)
    }, 300);
}
