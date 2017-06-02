"use strict";function _toConsumableArray(t){if(Array.isArray(t)){for(var a=0,e=Array(t.length);a<t.length;a++)e[a]=t[a];return e}return Array.from(t)}!function(t){function a(t,a){a=[thomas].concat(_toConsumableArray(a)),"fqppg"===t?a=a.sort(function(t,a){return t.stats.fqppg>a.stats.fqppg?-1:t.stats.fqppg<a.stats.fqppg?1:0}):"ppg"===t?a=a.sort(function(t,a){return t.stats.ppg>a.stats.ppg?-1:t.stats.ppg<a.stats.ppg?1:0}):"apg"===t?a=a.sort(function(t,a){return t.stats.apg>a.stats.apg?-1:t.stats.apg<a.stats.apg?1:0}):"ts"===t?a=a.sort(function(t,a){return t.stats.ts>a.stats.ts?-1:t.stats.ts<a.stats.ts?1:0}):"per"===t&&(a=a.sort(function(t,a){return t.stats.per>a.stats.per?-1:t.stats.per<a.stats.per?1:0}));var e=t.toUpperCase(),s=a.map(function(t){return t.name.last}),o=function(){return"fqppg"===t?a.map(function(t){return t.stats.fqppg}):"ppg"===t?a.map(function(t){return t.stats.ppg}):"apg"===t?a.map(function(t){return t.stats.apg}):"ts"===t?a.map(function(t){return t.stats.ts}):"per"===t?a.map(function(t){return t.stats.per}):void 0}(),l=a.map(function(t){return t.colors.bg}),n=a.map(function(t){return t.colors.border}),i=function(){return"fqppg"===t?5:"ppg"===t?16:"apg"===t?4:"ts"===t?.5:"per"===t?16:void 0}(),p=function(){return"fqppg"===t?10:"ppg"===t?32:"apg"===t?12:"ts"===t?1:"per"===t?32:void 0}();r.data.labels=s,r.data.datasets[0]={label:e,data:o,backgroundColor:l,borderColor:n},r.options.scales.yAxes[0].ticks.stepSize=i,r.options.scales.yAxes[0].ticks.min=0,r.options.scales.yAxes[0].ticks.max=p,r.options.scales.xAxes[0].ticks.stepSize=i,r.options.scales.xAxes[0].ticks.min=0,r.options.scales.xAxes[0].ticks.max=p,r.update()}function e(t){return"topPlayers"===t?topPlayers:"pointGuards"===t?pointGuards:"general"===t?general:"historic"===t?historic:"historicShort"===t?historicShort:"historicTall"===t?historicTall:void 0}function s(){var s=t('select[name="stat"]').val()||"fqppg",n=t('select[name="group"]').val()||"topPlayers",i=e(n);r.destroy(),window.innerWidth<=768?(l.attr("height","210"),r=o(l,"horizontalBar"),a(s,i)):(l.attr("height","130"),r=o(l,"bar"),a(s,i))}Chart.defaults.global.defaultFontColor="#666",Chart.defaults.global.defaultFontFamily="'Source Sans Pro', 'Helvetica', 'Arial', sans-serif",Chart.defaults.global.defaultFontSize=16,Chart.defaults.global.defaultFontStyle="normal",Chart.defaults.global.legend.display=!1,Chart.defaults.global.tooltips.backgroundColor="rgba(0,0,0,0.8)",Chart.defaults.global.tooltips.titleFontSize=18,Chart.defaults.global.tooltips.titleFontStyle="bold",Chart.defaults.global.tooltips.titleFontColor="#fff",Chart.defaults.global.tooltips.titleSpacing=2,Chart.defaults.global.tooltips.titleMarginBottom=6,Chart.defaults.global.tooltips.bodyFontSize=16,Chart.defaults.global.tooltips.bodyFontStyle="normal",Chart.defaults.global.tooltips.bodyFontColor="#fff",Chart.defaults.global.tooltips.bodySpacing=2,Chart.defaults.global.tooltips.xPadding=15,Chart.defaults.global.tooltips.yPadding=15,Chart.defaults.global.tooltips.caretSize=8,Chart.defaults.global.tooltips.cornerRadius=6,Chart.defaults.global.tooltips.displayColors=!1,Chart.defaults.global.elements.rectangle.backgroundColor="rgba(85, 85, 85, 0.3)",Chart.defaults.global.elements.rectangle.borderColor="#555555",Chart.defaults.global.elements.rectangle.borderWidth=1;var o=function(t,a){return new Chart(t,{type:a,data:{labels:[],datasets:[{label:"",backgroundColor:[],borderColor:[],data:[]}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:0,min:0,max:0}}],xAxes:[{ticks:{beginAtZero:!0,min:0}}]}}})},l=t("#chart"),r=o(l,"bar");t('select[name="stat"], select[name="group"]').on("change",function(){a(t('select[name="stat"]').val()||"fqppg",e(t('select[name="group"]').val()||"topPlayers"))}),t(window).on("load resize",function(){s()}),t(".slick").slick({arrows:!1,dots:!1,fade:!0}),t("#off-ball-play").on("beforeChange",function(a,e,s,o){var l=t(e.$slides.get(s)),r=t(e.$slides.get(o)),n=(r.data("play"),l.find("iframe").get(0)),i=r.find("iframe").get(0);void 0!=n&&n.contentWindow.postMessage(JSON.stringify({event:"command",func:"pauseVideo"}),"*"),void 0!=i&&i.contentWindow.postMessage(JSON.stringify({event:"command",func:"playVideo"}),"*")}),t('select[name="play"]').on("change",function(a){var e=parseInt(t(this).val());t("#off-ball-play").slick("slickGoTo",e),a.preventDefault()}),t("#games").on("beforeChange",function(a,e,s,o){var l=t(e.$slides.get(s)),r=t(e.$slides.get(o)),n=r.data("game");t(".game").removeClass("active"),t('.game[data-game="'+n+'"]').addClass("active");var i=l.find("iframe").get(0),p=r.find("iframe").get(0);void 0!=i&&i.contentWindow.postMessage(JSON.stringify({event:"command",func:"pauseVideo"}),"*"),void 0!=p&&p.contentWindow.postMessage(JSON.stringify({event:"command",func:"playVideo"}),"*")}),t(".game").on("click",function(){t("#games").addClass("open");var a=(t(this).data("game"),parseInt(t(this).data("slide")));t("#games").slick("slickGoTo",a),t("html, body").animate({scrollTop:t("#games").offset().top-100},1e3)})}(jQuery);