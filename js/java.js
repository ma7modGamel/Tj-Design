$(window).load(function () {
    $('.loader').fadeOut(2000);
});

new WOW().init();
wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
})
wow.init();




// SideBar
$('.side-nav').mCustomScrollbar({
    autoHideScrollbar: false,
    setTop: 0,
    scrollInertia: 50,
    theme: "light-1"
});

$('.open-sidebar').on('click', function () {
    $('.sidebar').toggleClass('opened');
    $('.overlay_gen').fadeIn();
    $('body').addClass('sided');
});

$('.overlay_gen').on('click', function () {
    $('.sidebar').toggleClass('opened');
    $('.overlay_gen').fadeOut();
    $('body').removeClass('sided');
});


// Search
				  
jQuery('.btnSearch').click(function(){
  	jQuery('.site-search').addClass('open');
})

jQuery('.site-search-close').click(function(){
  	jQuery('.site-search').removeClass('open');
	}).children().click(function(e) {
//	return false;
});


// FancyBox
$('[data-fancybox="gallary"]').fancybox();
$('[data-fancybox]').fancybox();


// for upload file
    $(document).on('change', ':file', function () {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });
    $(':file').on('fileselect', function (event, numFiles, label) {

        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

        if (input.length) {
            input.val(log);
        } else {
//            if (log) alert(log);
        }
    });

    $('.form-control').focus(function () {
        $(this).parents('.form-group').addClass('focused');
    });

    $('.form-control').blur(function () {
        var inputValue = $(this).val();
        if (inputValue == "") {
            $(this).removeClass('filled');
            $(this).parents('.form-group').removeClass('focused');
        } else {
            $(this).addClass('filled');
        }
    });
$(document).on('change', '.btn-file :file', function() {
      var fileName = $('#uploadfile').val();
      $('.filename').val(fileName);
    });



