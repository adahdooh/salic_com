jQuery(document).ready(function() {
    jQuery('.search-btn').click(function() {
        if (jQuery(this).hasClass('searchOn') == true) {
            jQuery(this).removeClass('searchOn');
            jQuery('.TopNav .top-links-search').animate({
                height: "0",
                padding: "0"
            }, 200);
        } else {
            jQuery(this).addClass('searchOn');
            jQuery('.TopNav .top-links-search').animate({
                height: "58px",
                padding: "17px"

            }, 200);
        }
        //bassel event
    });

    jQuery(".menu-horizontal li.static").mouseover(function() {
        jQuery(this).children(".dynamic").addClass("opend-nav")
    });
    jQuery(".menu-horizontal li.static").mouseout(function() {
        jQuery(this).children(".dynamic").removeClass("opend-nav")
    });

    jQuery('#lang').click(function() {
        var URL = unescape(location.href);
        var newURL;
        var temp = new Array();

        temp = URL.split("/");
        if (temp[3].toLowerCase() == "english") {
            newURL = URL.replace(temp[3], "Arabic");
        } else {
            newURL = URL.replace(temp[3], "English");
        }

        var http = new XMLHttpRequest();
        http.open('HEAD', newURL, false);
        http.send();

        if (http.status == 404)
            newURL = "/English"
        window.location.href = newURL;
    });

    jQuery(".evet-top-cont").parent().addClass("event-row");
    jQuery("ul > .event-row:odd").addClass("event-row-odd");
    jQuery(".toggle").parent().addClass("toggle-row");
    jQuery("ul > .toggle-row:odd").addClass("toggle-row-odd");
    jQuery(".imagegalary").parent().addClass("imagegalary-li");
    jQuery(".viditem").parent().addClass("imagegalary-li");

    jQuery("span.glyphicon.Menu-Icon.glyphicon-tasks").click(function() {
        if (jQuery(this).hasClass('menuOn') == true) {
            jQuery(this).removeClass('menuOn');
            jQuery('.menu.horizontal.menu-horizontal').css('border', '0');
            jQuery('.menu.horizontal.menu-horizontal').css('height', '0');
        } else {
            jQuery(this).addClass('menuOn');
            jQuery('.menu.horizontal.menu-horizontal').css('height', 'auto');
            jQuery('.menu.horizontal.menu-horizontal').css('border', '1px solid #004D8E');
        }
    });

    function wResize() {
		console.log("WResize");
        var winW = jQuery(window).width();
        var Body = jQuery('body');

        if (winW <= '793') {

            jQuery(".s4-tn li.static > .menu-item").removeAttr("href");
            //jQuery(".s4-tn").css("display","none");
            // jQuery(".TopNav .text-right").css("display","none"); 

            jQuery("li.static > .dynamic-children.menu-item").removeAttr("href");
            jQuery("a.static.dynamic-children.menu-item").click(function() {
				var _self = jQuery(this);

                if (_self.hasClass('menuOn') == true) {
                    _self.removeClass('menuOn');
                    _self.parent().children('ul.dynamic').css('height', '0');
                    _self.parent().children('ul.dynamic').css('position', 'relative');
                    _self.parent().children('ul.dynamic').css('right', '-9999em');
                    _self.parent().children('ul.dynamic').css('left', '-9999em');
                } else {
                    _self.addClass('menuOn');
                    _self.parent().children('ul.dynamic').css('height', 'auto');
                    _self.parent().children('ul.dynamic').css('position', 'relative');
                    _self.parent().children('ul.dynamic').css('right', '0');
                    _self.parent().children('ul.dynamic').css('left', '0');
                }
            });
        }
    }

    wResize();

    /*jQuery(window).resize(function() {
        if (jQuery(window).width() <= "793") {
            location.reload();
			console.log("Resize");
            wResize();
        }
    });*/

    //////////////

    if ((navigator.userAgent.match(/iPhone/i))) {

    }

    jQuery('ul.tab-title-cont > li:first-child').addClass("active");

    jQuery('ul.tab-title-cont > li').click(function() {
        jQuery("ul.tab-title-cont > li").removeClass('active');

        jQuery(this).addClass('active');

        var n = jQuery(this).index();

        if (jQuery(this).hasClass('active') == true) {
            jQuery('.tab-div-cont > div').stop().fadeOut();
            jQuery('.tab-div-cont > div:eq(' + n + ')').stop().fadeIn(1500);
        } else {
            jQuery('.tab-div-cont > div').stop().fadeOut();
            jQuery('.tab-div-cont > div:eq(' + n + ')').stop().fadeIn(1500);
        }
    });

    jQuery('.backgroundPage').appendTo('#s4-leftpanel');

    var PageImage = jQuery('.backgroundPage .ms-WPBody').find('img').attr('src');
    if (PageImage != undefined) {
        jQuery('.pagetitle2').css('background', 'url("' + PageImage + '") top right no-repeat');
        jQuery('.pagetitle2').css('background-size', '100% 100%');
    }

    jQuery('.TopNav .menu-horizontal ul > li.static a.static ').each(function() {
        jQuery(this).removeAttr("href")
    });

    if (jQuery('.backgroundPage .ms-WPBody img').length <= 0) {
        jQuery('.pagetitle2').hide();
    }
});

function PrintPagear() {
    var disp_setting = "toolbar=yes,location=no,";
    disp_setting += "directories=yes,menubar=yes,";
    disp_setting += "scrollbars=yes,width=800, height=600, left=100, top=25";
    var content_vlue = document.getElementById("s4-mainarea").innerHTML;
    var docprint = window.open("", "", disp_setting);
    docprint.document.open();
    docprint.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"');
    docprint.document.write('"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">');
    docprint.document.write('<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ar">');
    docprint.document.write('<head><title>' + document.title + '</title>');
    docprint.document.write('<link rel="stylesheet" type="text/css" href="/Style Library/Salic/ar-sa/css/main.css"/>');
    docprint.document.write('<script src="/Style Library/Salic/js/main.js"></script>');

    //docprint.document.write('<style type="text/css">.print-btn{display:none;} .results-table{border:none !important;} body{border:#ff5b00 2px dashed;padding:10px;}</style>');
    docprint.document.write('<style type="text/css">.s4-ca{ margin-left: 0px;margin-right: 0px} .bread-crumb-cotainer{display:none;} #s4-leftpanel{display:none;} .print-btn{display:none;} .result-page{padding:20px;display:block;border-width: 0;position: relative;min-height: 347px;float: right;border-bottom:1px solid #cacaca;width: 590px;background:url("img/result-bg.png") no-repeat center top;} </style>');
    docprint.document.write('</head><body onLoad="self.print()">');
    docprint.document.write(content_vlue);
    docprint.document.write('</body></html>');
    docprint.document.close();
    docprint.focus();
}

function PrintPageen() {
    var disp_setting = "toolbar=yes,location=no,";
    disp_setting += "directories=yes,menubar=yes,";
    disp_setting += "scrollbars=yes,width=800, height=600, left=100, top=25";
    var content_vlue = document.getElementById("s4-mainarea").innerHTML;
    var docprint = window.open("", "", disp_setting);
    docprint.document.open();
    docprint.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"');
    docprint.document.write('"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">');
    docprint.document.write('<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ar">');
    docprint.document.write('<head><title>' + document.title + '</title>');
    docprint.document.write('<link rel="stylesheet" type="text/css" href="/Style Library/Salic/en-us/css/main.css"/>');
    docprint.document.write('<script src="/Style Library/Salic/js/main.js"></script>');

    //docprint.document.write('<style type="text/css">.print-btn{display:none;} .results-table{border:none !important;} body{border:#ff5b00 2px dashed;padding:10px;}</style>');
    docprint.document.write('<style type="text/css">.s4-ca{ margin-left: 0px;margin-right: 0px} .bread-crumb-cotainer{display:none;} #s4-leftpanel{display:none;} .print-btn2{display:none;} .result-page{padding:20px;display:block;border-width: 0;position: relative;min-height: 347px;float: right;border-bottom:1px solid #cacaca;width: 590px;background:url("img/result-bg.png") no-repeat center top;} </style>');
    docprint.document.write('</head><body onLoad="self.print()">');
    docprint.document.write(content_vlue);
    docprint.document.write('</body></html>');
    docprint.document.close();
    docprint.focus();
}

jQuery(document).ready(function() {
    var timerID = setInterval(function() {
        jQuery("img[src*='g3-v5.jpg']").addClass('g3-v5');
        jQuery(".bread-crumb > span:nth-child(6) > a").removeAttr("href");
    }, 1 * 100);
});