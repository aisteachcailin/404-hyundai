$(document).ready(function () {
	let sliderVideo = $(".slider__video");

	sliderVideo.each((i, el) => {
		let video = $(el).data("desktop-video");

		if (matchMedia("(max-width: 767px)").matches && $(el).data("mobile-video").length) {
			video = $(el).data("mobile-video");
		}

		$(el).find("video").attr("src", video);
	})


	if (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase())) {
		if (window.matchMedia("(max-width: 1024px)").matches) {
			$(document).on('click', '.jq-selectbox.jqselect', function (e) {
				var elemThis = $(this);
				if (elemThis.hasClass('opened')) {
					elemThis.removeClass('focused opened');
					elemThis.find('.jq-selectbox__dropdown').hide();
				} else {
					$('.jq-selectbox.jqselect.focused.opened').find('.jq-selectbox__dropdown').hide();
					$('.jq-selectbox.jqselect.focused.opened').removeClass('focused opened');
					elemThis.addClass('focused opened');
					elemThis.find('.jq-selectbox__dropdown').show();
				}

				if (e.target.tagName === "LI") {
					elemThis.removeClass('focused opened');
					elemThis.find('.jq-selectbox__dropdown').hide();
				}
			});
		}
	}

	var scroll_me = $('.scroll_me a');

	scroll_me.hide();

	// scroll to top functionality
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			scroll_me.fadeIn();
		} else {
			scroll_me.fadeOut();
		}
	});

	scroll_me.click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1600, 'easeOutCirc');
		return false;
	});


	$('.forToggle').toggle(function () {
		$(this).next().show()
	}, function () {
		$(this).next().hide()
	});

	if (document.querySelector("a.fancy, .fancybox")) {
		$("a.fancy, .fancybox").fancybox();
	}

	// функция для получения cookie по имени
	function getCookie(name) {
		var matches = document.cookie.match(new RegExp(
			"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	}

	function getGa() {
		let cidLong = getCookie('_ga'),
			tmp = cidLong.split('.');
		return tmp[2] + '.' + tmp[3];
	}

	function getYm() {
		return getCookie('_ym_uid')
	}

	$(document).on('submit', 'form', function () {
		let elThis = $(this),
			clientGa = getGa(),
			clientYm = getYm();

		elThis.prepend("<input name='client_id_ga' value='" + clientGa + "' hidden>");
		elThis.prepend("<input name='client_id_ym' value='" + clientYm + "' hidden>");
	})


	if (document.querySelector(".pip-main.other-page") && document.querySelector(".nav .nav__link.active")) {
		var activePointMenu = $(".pip-main .nav").find('.active').closest('li');
		$(".pip-main .nav").scrollCenter(activePointMenu, 200);
	}
});
$('.ajax_form').fancybox({
	type: 'ajax',
	padding: 0
});

function addToggleDisclamer() {
	$('#price-block').click(function () {
		$('a[content-type="price"]').click();
	});
	setTimeout(function () {
		var maxHeightDsc;

		if (window.matchMedia("(max-width: 767px)").matches) maxHeightDsc = 200;
		else maxHeightDsc = 108;

		$(".dsclmr__body").each(function () {
			var dscThis = $(this);

			if (dscThis.height() > maxHeightDsc) {
				dscThis.addClass('dsclmr__body_overlay');
				dscThis.after("<div class=\"body__show-more\">Показать полностью</div>");
			}
		});
	}, 100);

	$(document).on('click', '.body__show-more', function () {
		var btnThis = $(this);

		btnThis.prev().toggleClass('open');
		if (btnThis.prev().hasClass('open')) btnThis.text('Скрыть');
		else btnThis.text('Показать полностью');
	});
}

// горизонтальный scroll к центру активного элемента в контейнере
/**
 *
 * @param elem элемент, к которому нужно сделать прокрутку
 * @param speed скорость
 * @returns {$}
 */
$.fn.scrollCenter = function (elem, speed) {
	var activeWidth = $(elem).outerWidth() / 2;
	var pos = $(elem).position().left + activeWidth;
	var elpos = $(this).scrollLeft();
	var elW = $(this).width();
	pos = pos + elpos - elW / 2;

	$(this).animate({
		scrollLeft: pos
	}, speed == undefined ? 1000 : speed);
	return this;
};
