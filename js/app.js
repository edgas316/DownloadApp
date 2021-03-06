$(document).ready(function () {
    var download = $('.download');

    /*
        DOWNLOAD BUTTON FUNCTIONALITY 
    */
	if (navigator.appVersion.indexOf("Win") != -1) {
        var b, fi, r, w;
        w = window.navigator.platform;
        fi = function(s) {
            return window.navigator.userAgent.indexOf(s) > -1;
        };

        if (fi('x86_64') || fi('x86-64') || fi('Win64') || fi('x64;') || fi('amd64') || fi('AMD64') || fi('WOW64') || fi('x64_64') || w === 'MacIntel' || w === 'Linux x86_64') {
            b = 64;
        } else if (w === 'Linux armv7l' || w === 'iPad' || w === 'iPhone' || w === 'Android' || w === 'iPod' || w === 'BlackBerry') {
            b = 0;
        } else if (w === 'Linux i686') {
            b = -1;
        }

        if (b !== -1 && b !== 0) {
            var downloadUrl = "http://download.skype.com/d7285780dd766369612d05e856f04be2/SkypeSetup.exe";
            var text = 'for Windows x86 32 Bit';

            if (b === 64) {
                downloadUrl = "http://download.skype.com/d7285780dd766369612d05e856f04be2/SkypeSetup.exe";
            	text = 'for Windows x64 64 Bit';            	
            }

            $('.support-3').html(text);
        }

    } else {
        download.prop('disabled', true);
        download.css('opacity', '0.5');
        $('.support-2').text('Not supported');
    }

    download.click(function () {
        location.href = downloadUrl;

        $('.first').fadeOut();
        $('.table').fadeOut();
        $('.container-content').fadeOut();
        $('.container-4').fadeOut();
        $('.container-back').fadeIn();
        $('.footer').css({
            position: 'absolute',
            top: '131.9vh'
        });
    });

    $('.link').click(function () {
        $('.first').fadeOut();
        $('.table').fadeOut();
        $('.container-content').fadeOut();
        $('.container-4').fadeOut();
        $('.container-back').fadeIn();
    });
});