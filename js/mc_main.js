$(function(){
	if (window.matchMedia("(max-width: 767px)").matches) {
	var seoText = $(".seo-text");

		if (seoText.height() > 300) {
			seoText.addClass('seo-text--hide');
		}
		$('.seo-text__show-all').click(function () {
			$(this).prev(seoText).toggleClass('seo-text--hide')
			if (seoText.hasClass('seo-text--hide')) $(this).text('Показать полностью')
			else $(this).text('Скрыть').show();
		})
	}
	if ($.on) {
		$(document).on("click", '.mc_ajax_form', function(){
			$("<div id=\"mc_mask\"  onclick=\"$('#mc_mask, #mc_form_wrap').fadeOut(500);setTimeout(function(){$('#mc_mask, #mc_form_wrap').remove()}, 500);\"></div>").css({
				position: "fixed",
				top: 0,
				left: 0,
				display: "none",
				width: "100%",
				height: "100%",
				backgroundColor: "#000",
				opacity: 0.4,
			}).appendTo("body");
			$("<div id=\"mc_form_wrap\"></div>").css({
					position: "fixed",
					zIndex: "950",
					top: "50%",
					left: "50%",
					marginTop: "-200px",
					marginLeft: "-310px",
					width: "620px",
					padding: "10px",
					backgroundColor: "#fff",
					display: "none",
			}).appendTo("body");
			var href = $(this).attr("href");
			$.ajax({
				url: href,
				success: function(data){
					$("#mc_form_wrap").html(data);
				}
			});
			$("#mc_mask, #mc_form_wrap").fadeIn(500);
			return false;
		});
	}
});