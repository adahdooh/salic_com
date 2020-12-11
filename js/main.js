jQuery(document).ready(function () {
    jQuery('.search-btn').click(function () {
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

    jQuery(".menu-horizontal li.static").mouseover(function () {
        jQuery(this).children(".dynamic").addClass("opend-nav")
    });
    jQuery(".menu-horizontal li.static").mouseout(function () {
        jQuery(this).children(".dynamic").removeClass("opend-nav")
    });

    jQuery('#lang').click(function () {
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

    jQuery("span.glyphicon.Menu-Icon.glyphicon-tasks").click(function () {
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
            jQuery("a.static.dynamic-children.menu-item").click(function () {
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

    jQuery('ul.tab-title-cont > li').click(function () {
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

    jQuery('.TopNav .menu-horizontal ul > li.static a.static ').each(function () {
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
    docprint.document.write('<script src="../js/main.js"></script>');

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
    docprint.document.write('<link rel="stylesheet" type="text/css" href="../css/style.css"/>');
    docprint.document.write('<script src="../js/main.js"></script>');

    //docprint.document.write('<style type="text/css">.print-btn{display:none;} .results-table{border:none !important;} body{border:#ff5b00 2px dashed;padding:10px;}</style>');
    docprint.document.write('<style type="text/css">.s4-ca{ margin-left: 0px;margin-right: 0px} .bread-crumb-cotainer{display:none;} #s4-leftpanel{display:none;} .print-btn2{display:none;} .result-page{padding:20px;display:block;border-width: 0;position: relative;min-height: 347px;float: right;border-bottom:1px solid #cacaca;width: 590px;background:url("img/result-bg.png") no-repeat center top;} </style>');
    docprint.document.write('</head><body onLoad="self.print()">');
    docprint.document.write(content_vlue);
    docprint.document.write('</body></html>');
    docprint.document.close();
    docprint.focus();
}

jQuery(document).ready(function () {
    var timerID = setInterval(function () {
        jQuery("img[src*='g3-v5.jpg']").addClass('g3-v5');
        jQuery(".bread-crumb > span:nth-child(6) > a").removeAttr("href");
    }, 1 * 100);
});

var isArabic = (unescape(location.href).split("/")[3].toLowerCase() == "arabic");
if (!isArabic) {


    // document.querySelector('link.style-ar').href = '';


} else {

    document.querySelector('link.style').href = '';


}

// function HideStock() {
//     var URLL = unescape(location.href);
//     var newURLL;
//     var tempL = new Array();
//     tempL = URLL.split("/");
//     if (tempL[5].toLowerCase() == "index.html") {
//         $('.stock').attr('href', '/Style Library/Salic/en-us/css/stock.css');
//         // document.getElementsByClassName('tickercontainer').style.display="block";
//         // $('.tickercontainer').css('display','block');
//         //$('.stocktitle').css('display','block');
//         // $('.stockcontrol').css('display','block');
//     } else {
//         $('.stock').attr('href', ' ');
//     }
//
//     if (tempL[5].toLowerCase() == "nineprioritycommodities") {
//         $('.stock').attr('href', '/Style Library/Salic/en-us/css/stock.css');
//         document.getElementsByClassName('tickercontainer').style.display = "block";
//         // $('.tickercontainer').css('display','block');
//         //$('.stocktitle').css('display','block');
//         // $('.stockcontrol').css('display','block');
//     } else {
//         $('.stock').attr('href', ' ');
//     }
// }
//
// window.onpaint = HideStock();

// $(document).ready(function () {
//     var pageTitle = document.title;
//     $(".MainContentHolder").prepend("<div class='page-title-container'><span class='page-title'>" + pageTitle + "</span></div>");
//     if ($(".page-title:contains(الصفحات - )") || $(".page-title:contains(pages - )")) {
//         var arr = pageTitle.split(' - ');
//         pageTitle = arr[1];
//     } else {
//         pageTitle = document.title;
//     }
//     $(".page-title").text(pageTitle);
//     $("#s4-mainarea").prepend("<div class='bread-crumb-cotainer s4-notdlg'></div>");
//     if (g_disableCheckoutInEditMode) {
//         $(".page-title-container").css("display", "none");
//     }
//
//     var sepNom = 0;
//     jQuery('.bread-crumb-sep').each(function () {
//         sepNom++;
//     });
//     if (sepNom != 0) {
//         sepNom--;
//         jQuery('.bread-crumb-sep:eq(0)').hide();
//     }
//
//     var tempL = unescape(location.href).split("/");
//     if (!isArabic) {
//         // $('.bread-crumb-node:contains(Salic)').text('English');
//         $('#lang').text('عربي');
//         $('.home-icon').attr('href', '/English');
//         $('.RSS').attr('href', '/English/NewsAndMedia/News/_layouts/listfeed.aspx?List=%7BA49D5189-1312-40B2-B7E6-E2278264A1AC%7D&Source=http%3A%2F%2F87%2E101%2E136%2E135%3A500%2FEnglish%2FNewsAndMedia%2FNews%2FPages%2FForms%2FAllItems%2Easpx');
//     } else {
//         //$('.bread-crumb-node:contains(سالك)').text('عربي');
//         $('#lang').text('English');
//         $('.stocktitle').text(' المنتجات');
//         $('.home-icon').attr('href', '/Arabic');
//         $('.RSS').attr('href', '/Arabic/NewsAndMedia/News/_layouts/listfeed.aspx?List=%7BDE67A818-BCBB-4E19-99A0-D0106AA8D351%7D&Source=http%3A%2F%2F87%2E101%2E136%2E135%3A500%2Farabic%2FNewsAndMedia%2FNews%2FPages%2FForms%2FAllItems%2Easpx');
//     }
//     if (tempL[4].toLowerCase() == "search") {
//         $('#s4-leftpanel').css('display', 'none');
//         $('.s4-ca').css('margin', '0');
//     }
// });
jQuery(document).ready(function () {

    $('#map-canvas').empty();

    $('#map-canvas').css('width', '100%');
    $('#map-canvas').css('height', '100%');

    $('#map-canvas').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.684487007851!2d46.71484931495387!3d24.806255184079554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efc5041433b4b%3A0xe44b1000eb3be1a2!2sSALIC!5e0!3m2!1sen!2s!4v1588969086440!5m2!1sen!2s" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>');

});
