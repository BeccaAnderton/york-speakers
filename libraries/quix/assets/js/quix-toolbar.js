!function(e,i,s){function o(){var i=Cookies.get("qx-device"),s=e(".qx-devices li");s.removeClass("active"),e('.qx-devices li[data-device="'+i+'"]').addClass("active")}function v(s){var o=Cookies.get("qx-device"),v=e(".qx-responsive-preview__window"),d={desktop:e(i).width(),tablet:"768px",phone:"480px"};e("html").removeClass("qx-responsive-preview__"+s),e("html").addClass("qx-responsive-preview__"+o),v.css("width",d[o])}e(function(){e("html").addClass("qx-responsive-preview-active");var i="";v(i),o(),e(".qx-devices li").on("click",function(){var i=e(this).data("device"),s=Cookies.get("qx-device");Cookies.set("qx-device",i),v(s),o()})})}(window.jQuery,window,document);