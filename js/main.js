var is_mobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cocdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
	is_mobile = true;
}
var isIE9OrBelow = function() {
	return /MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 10;
}
var numFormat = wNumb({
	thousand: ' '
});
$(window).on("scroll touchmove", function() {
	var scrollPos = $(window).scrollTop();
	$("a[name]").each(function() {
		if (scrollPos >= $(this).offset().top - 170) {
			$(".navbar-nav a").removeClass("active")
			$(".navbar-nav a[href='#" + $(this).attr("name") + "']").addClass("active");
		}
	});
	if (scrollPos > 50) {
		if (!$("header").hasClass("header-fixed")) {
			$("header").addClass("header-fixed");
		}
	} else {
		if ($("header").hasClass("header-fixed")) {
			$("header").removeClass("header-fixed");
		}
	}
	if (scrollPos > 300) {
		$(".up-link").fadeIn(150);
	} else {
		$(".up-link").fadeOut(150);
	}
});
$(window).resize(function() {

	$(".slick-slider").slick("setPosition");

	slickResponsive();

});
$(window).on("load", function() {
	//makeUp();
});
var baseUrl = "";

$(document).ready(function() {

	// Service modal

	$("[data-target='#serviceModal']").click(function () {

		$("#serviceModal .modal-content-inner").addClass("loading").html("");

		$.ajax({
			url: $(this).data("url"),
			dataType: "html"
		}).done(function (data) {

			$("#serviceModal").find(".modal-content-inner").html($(data));

			$("#serviceModal .modal-content-inner").removeClass("loading");

			validateForms();

		});



	});

	// Service modal END

	// Contacts slider

	$(".contacts-pics-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		rows: 0,
		speed: 1000,
		infinite: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 1000,
		arrows: false,
		swipe: false
	});

	$(".contacts-masks-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		rows: 0,
		speed: 1000,
		infinite: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 750,
		arrows: false,
		swipe: false
	});

	// Contacts slider END

	// Reviews slider

	$(".reviews-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		rows: 0,
		speed: 1000,
		infinite: true,
		adaptiveHeight: true
	});

	// Reviews slider END

	// Popups


	$("body").on("click", "[data-popup]", function () {

		setHashVar("case", "");
		setHashVar("service", "");
		setHashVar("vac", "");

		if ($(".popup.active").length) {

			if ($(this).data("popup") != "#" + $(".popup.active").attr("id")) {

				$(".popup.active").fadeOut(250).removeClass("active");

			}

		}

		$("body").addClass("popup-open");

		var curPopup = $($(this).data("popup"));

		if ($(this).data("popup") == "#casePopup") {

			setHashVar("case", $(this).data("hash"));

		}

		var popupHash = $(this).data("hash");

		curPopup.find(".popup-inner").html("");

		$.ajax({
			url: $(this).data("popup-content"),
			dataType: "html"
		}).done(function (data) {

			curPopup.find(".popup-inner").html($(data));

			curPopup.find(".popup-menu a[data-hash]").removeClass("active");
			curPopup.find(".popup-menu a[data-hash='" + popupHash + "']").addClass("active");

			curPopup.find(".popup-main-col").animate({
				scrollTop: 0
			},0);

			curPopup.find("[data-fancybox]").fancybox();

			validateForms();

		});

		curPopup.show();

		if ($(this).data("popup") != "#" + $(".popup.active").attr("id")) {

			TweenMax.to(curPopup.find(".popup-backdrop"), 1, {
				opacity: 1,
				ease: Power2.easeInOut
			});

			TweenMax.to(curPopup, 0, {
				x: $(window).width()
			});

			TweenMax.to(curPopup, 1, {
				x: "0",
				ease: Power2.easeInOut,
				onComplete: function () {

					curPopup.addClass("active");

					popupMakeup();

				}
			});

		} else {

			popupMakeup();

		}

		return false;

	});

	$("body").on("click", ".popup .close", function () {

		$(this).closest(".popup").fadeOut(250).removeClass("active");

		$("body").removeClass("popup-open");

		setHashVar("case", "");
		setHashVar("service", "");
		setHashVar("vac", "");

	});

	$("body").on("click", ".popup", function (e) {

		if (!$(e.target).hasClass("popup-inner") && !$(e.target).parents().hasClass("popup-inner")) {

			$(this).closest(".popup").fadeOut(250).removeClass("active");

			$("body").removeClass("popup-open");

			setHashVar("case", "");
			setHashVar("service", "");
			setHashVar("vac", "");

		}


	});

	// Popups END

	// Ajax links

	$("body").on("click", ".ajax-link", function () {

		var curLink = $(this),
				curUrl = $(this).data("url"),
				curTarget = $($(this).data("target")),
				curSiblings = $(this).closest(".ajax-links").find(".ajax-link");

		curTarget.addClass("loading");

		$.ajax({
			url: curUrl,
			dataType: "html"
		}).done(function(data) {

			curTarget.html($(data)).removeClass("loading");

			curSiblings.removeClass("active");

			curLink.addClass("active");

			if (curLink.hasClass("location-link")) {

				$(".location-tabs-select").val(curLink.data("index"));

				if ($("#mobile-indicator").css("display") != "block") {

					$(".location-tabs-select").change();

				}

			}

		});

		return false;

	});



	$(".location-tabs-select").on("change", function () {

		if ($("#mobile-indicator").css("display") == "block") {

			$(".location-link[data-index='" + $(this).val() + "']").click();

		}

	});


	// Ajax links END

	$(".slider-countable").each(function () {

		$(this).on("init", function () {

			var curSlider = $(this),
				visibleSlides = $(this).find(".slick-slide.slick-active").length,
				curSlide = $(this).find(".slick-slide.slick-current").data("slick-index") / visibleSlides + 1,
				totalSlides = Math.round($(this).find(".slick-slide").not(".slick-cloned").length / visibleSlides);

			curSlider.closest(".slider-wrapper").append('<div class="slider-count"><span class="slider-count-cur">' + ("0" + curSlide).slice(-2) + '</span><span class="slider-count-sep">/</span><span class="slider-count-total">' + ("0" + totalSlides).slice(-2) + '</span></div>');

			if (totalSlides == 1) {

				curSlider.prev(".slider-count").hide();

			}

		});

		$(this).on("beforeChange", function(event, slick, currentSlide, nextSlide){

			var curSlider = $(this),
				visibleSlides = $(this).find(".slick-slide.slick-active").length,
				curSlide = nextSlide / visibleSlides + 1,
				totalSlides = $(this).find(".slick-slide").not(".slick-cloned").length / visibleSlides;

			curSlider.closest(".slider-wrapper").find(".slider-count-cur").html(("0" + curSlide).slice(-2));

			curSlider.closest(".slider-wrapper").find(".slider-count-progress-bar").css({
				width: curSlide*100/totalSlides + "%"
			});

		});

	});

	// Location tabs

	$(".location-gallery").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		dots: false,
		rows: 0
	});

	// Location tabs END

	// Anchors

	$(".navbar-nav a").click(function() {

		$(".navbar-nav a").removeClass("active");

		var curLink = $(this);

		var anchor = $(this).attr("href").replace("#","");

		var link = $(this);

		if ($("#mobile-indicator").css("display") == "block") {
			var yDiff = 70;
		} else {
			var yDiff = 80;
		}


		$("html,body").animate({
			scrollTop: $("a[name='"+anchor+"']").offset().top - yDiff
		},1000,function () {
			curLink.addClass("active")
		});

		history.pushState(null,null,$(this).attr("href"));

		return false;


	});

	// Contacts map

	ymaps.ready(function () {

		var myMap = new ymaps.Map('contactsMap', {
				center: [55.795332, 37.601654],
				zoom: 17,
				controls: ['zoomControl']
			}, {}),

			myPlacemark = new ymaps.Placemark([55.795332, 37.601654], {
				hintContent: '',
				balloonContent: ''
			}, {
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				// Своё изображение иконки метки.
				iconImageHref: 'images/map-pin.svg',
				// Размеры метки.
				iconImageSize: [100, 87],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [-50, -87]
			});

		myMap.behaviors.disable('scrollZoom');

		myMap.geoObjects
			.add(myPlacemark);



	});

	// Contacts map END

	// Clients slider

	$(".clients-slider").slick({
		slidesToShow: 6,
		slidesToScroll: 6,
		speed: 750,
		rows: 0,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});

	// Clients slider END

	// Clients slider

	$(".projects-slider").slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		speed: 750,
		rows: 0,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// Clients slider END

	$('.svg-inline').each(function() {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');
			// Add replaced image's ID to the new SVG
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}
			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');
			// Replace image with new SVG
			$img.replaceWith($svg);
		}, 'xml');
	});
	$("[data-fancybox]").fancybox({
		closeClickOutside: true,
		backFocus: false
	});

	// Show more

	$("body").on("click", ".more-link", function () {
	    var moreLink = $(this),
	        moreUrl = $(this).attr("href");
	    if (!moreLink.hasClass("loading")) {
	        moreLink.addClass("loading");
	        $.ajax({
	            url: moreUrl,
	            dataType: "html"
	        }).done(function(data) {
	            moreLink.closest(".more-link-wrapper").before($(data));
	            moreLink.closest(".more-link-wrapper").remove();

	            if ($(".more-link").closest(".projects-list").length) {

								$(".more-link").closest(".projects-list").find(".project-tmb").css("opacity", "1");

							}

	        });
	    }
	    return false;
	});

	// Show more END

	$(".up-link, .header-logo").click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
	});

	// Main menu
	$(".navbar-trigger").click(function() {
		$(this).toggleClass("active");
		$(".navbar-wrapper").fadeToggle(150);
		$("body").toggleClass("menu-open");
	});
	$(".navbar-wrapper .close, .navbar-nav a").click(function() {
		$(".navbar-wrapper").fadeOut(150);
		$("body").removeClass("menu-open");
		$(".navbar-trigger").removeClass("active");
	});
	$(".navbar-wrapper").click(function(e) {
		if (!$(e.target).hasClass("navbar-wrapper-inner") && !$(e.target).parents().hasClass("navbar-wrapper-inner")) {
			$(".navbar-wrapper").fadeOut(150);
			$("body").removeClass("menu-open");
			$(".navbar-trigger").removeClass("active");
		}
	});
	// Expandable
	$("body").on("click", ".expandable-trigger", function() {
		var exTrigger = $(this);
		if (!exTrigger.hasClass("active")) {
			exTrigger.closest(".expandable").find(".expandable-content").slideDown(500, function() {
				exTrigger.addClass("active").html(exTrigger.data("collapsetext"));
				exTrigger.closest(".expandable").addClass("open");
			});
		} else {
			exTrigger.closest(".expandable").find(".expandable-content").slideUp(500, function() {
				exTrigger.removeClass("active").html(exTrigger.data("expandtext"));
				exTrigger.closest(".expandable").removeClass("open");
			});
		}
	});
	$("input[type=file]").each(function () {

		if ($(this).data("label")) {
			var inputLabel = $(this).data("label");
		} else {
			var inputLabel = "Прикрепить файл";
		}

		$(this).fileinput({
			showUpload: false,
			showPreview: false,
			showCancel: false,
			browseLabel: inputLabel,
			msgPlaceholder: "",
			dropZoneEnabled: false,
			maxFileCount: 1,
			mainClass: "input-group-lg"
		});

	});
	// Numeric input
	$(document).on("input", ".numeric", function() {
		this.value = this.value.replace(/\D/g, '');
	});
	// Fancybox
	// Forms

	$("body").on("mouseup", "li.dropdown-header", function () {
		$(this).toggleClass("active");
		$(this).nextAll("li[data-optgroup='" + $(this).data("optgroup") + "']").fadeToggle(150);
		return false;
	});

	$("select").not(".picker__select--month, .picker__select--year, .rates-nav-select").each(function () {
		if ($(this).attr("multiple")) {
			$(this).selectpicker({
				selectAllText: "Выбрать всё",
				deselectAllText: "Снять выбор",
				noneSelectedText: "",
				selectedTextFormat: "count",
				countSelectedText: function(count) {
					return count + " " + declOfNum(count, ['элемент', 'элемента', 'элементов']);
				}
			});
		} else {
			$(this).selectpicker();
		}
	});

	$("select[multiple]").not(".simple-multi").on("shown.bs.select",function () {
		if (!$(this).prev(".dropdown-menu").find(".dropdown-footer").length) {
			dropdownFooter = '\
      <div class="dropdown-footer">\
      <div class="btn btn-1 btn-ico btn-save">Выбрать</div>\
      <div class="btn btn-cancel">Очистить</div>\
      </div>\
      ';
			$(this).prev(".dropdown-menu").find("ul").append(dropdownFooter);
		}
	});

	$("select").on("show.bs.select", function () {

		$(this).closest(".form-group").find("label.placeholder").addClass("active");

	});

	$("select").on("hide.bs.select", function () {

		if (!$(this).val() || $(this).val() == null) {

			$(this).closest(".form-group").find("label.placeholder").removeClass("active");

		} else {

			$(this).closest(".form-group").find("label.placeholder").addClass("active");

		}



	});

	$("body").on("click",".bootstrap-select .btn-save", function () {
		$(this).closest("div.dropdown-menu").next("select").selectpicker("toggle");
		return false;
	});

	$("body").on("click",".bootstrap-select .btn-cancel", function () {
		$(this).closest("div.dropdown-menu").next("select").selectpicker('deselectAll');
		return false;
	});


	$('.input-numeric').bind('keyup paste', function(){
		this.value = this.value.replace(/[^0-9]/g, '');
	});

	if ($("input:text").length) {
		$("input:text").each(function() {
			if ($(this).val()) {
				$(this).prev(".placeholder").addClass("active");
			}
		});
	}

	if ($("textarea").length) {
		$("textarea").each(function() {
			if ($(this).val()) {
				$(this).prev(".placeholder").addClass("active");
			}
		});
	}

	$("body").on("focus","input, textarea",function() {
		var el = $(this);

		if (el.parent().find(".placeholder").length) {
			var placeholder = el.parent().find(".placeholder");

			placeholder.addClass("active");

		}

	});

	$("body").on("blur","input, textarea",function() {
		var el = $(this);

		if (el.parent().find(".placeholder").length) {
			var placeholder = el.parent().find(".placeholder");

			if (!el.val() || (el.hasClass("input-phone") && ! /^(?=.*[0-9])[- +()0-9]+$/.test(el.val()))) {
				placeholder.removeClass("active");
			}

		}

	});

	$("body").on("click",".placeholder",function(e) {
		if ($(this).parent().find("input").length) {
			$(this).parent().find("input").trigger("focus");
		}
		if ($(this).parent().find("textarea").length) {
			$(this).parent().find("textarea").trigger("focus");
		}
	});

	$("body").on("focus","input[type=text], input[type=email], input[type=password], textarea", function () {
		$(this).closest(".form-item").addClass("focus");
	});

	$("body").on("blur","input[type=text], input[type=email], input[type=password], textarea", function () {
		$(this).closest(".form-item").removeClass("focus")
	});

	validateForms();

	// Forms END

	slickResponsive();

	var hashVars = getHashVars();

	if (hashVars["case"]) {

		$(".case-tmb[data-hash='" + hashVars["case"] + "']").click();

	}

});

function validateForms() {
	$('.textarea-autogrow').autogrow();
	$("input.input-phone").mask("+7 (999) 999-99-99");
	jQuery.validator.addClassRules('phone-email-group', {
		require_from_group: [1, ".phone-email-group"]
	});
	$("select").not(".location-tabs-select").on("change", function() {
		if (!$(this).closest(".picker").length && !$(this).hasClass("faq-select")) {
			$(this).valid();
		}
	});
	$("body").on("click", ".form-item", function(e) {
		if ($(this).find(".bootstrap-select").length && !$(e.target).hasClass("bootstrap-select") && !$(e.target).parents().hasClass("bootstrap-select")) {
			$(e.target).closest(".form-item").find("select").selectpicker('toggle');
		}
	});
	$("form").each(function() {
		form = $(this);
		$(this).validate({
			focusInvalid: true,
			sendForm: false,
			errorPlacement: function(error, element) {
				if (element[0].tagName == "SELECT") {
					element.closest(".form-item").addClass("error");
					element.closest(".btn-group").addClass("btn-group-error");
					if (element.closest(".form-item").length) {
						error.insertAfter(element.closest(".form-item"));
					} else {
						error.insertAfter(element.closest(".btn-group"));
					}
				} else {
					if (element.attr("type") == "checkbox") {
						element.siblings("label").addClass("checkbox-label-error")
					} else {
						error.insertAfter(element);
						element.closest(".form-group").addClass("form-group-error");
					}
				}
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).removeClass(errorClass);
				$(element).closest(".form-item").removeClass("error").addClass("valid");
				$(element).closest(".form-group").removeClass("form-group-error");
				if ($(element)[0].tagName == "SELECT") {
					$(element).closest(".form-item").removeClass("error");
					$(element).closest(".btn-group").removeClass("btn-group-error");
					if ($(element).closest(".form-item").length) {
						error.insertAfter(element.closest(".form-item"));
						$(element).closest(".form-item").next("label.error").remove();
					} else {
						$(element).closest(".btn-group").next("label.error").remove();
					}
				} else {
					$(element).next(".error").remove();
					if ($(element).attr("type") == "checkbox") {
						$(element).siblings("label").removeClass("checkbox-label-error")
					}
				}
			},
			invalidHandler: function(form, validatorcalc) {
				var errors = validatorcalc.numberOfInvalids();
				if (errors && validatorcalc.errorList[0].element.tagName == "INPUT") {
					validatorcalc.errorList[0].element.focus();
				}
			},
			submitHandler: function(form) {
				$.ajax({
					type: "POST",
					data: $(form).serialize(),
					success: function () {
						formSuccess(form);
					}
				});
				return false;
			}
		});
		if ($(this).find("input.password").length && $(this).find("input.password-repeat").length) {
			$(this).find("input.password-repeat").rules('add', {
				equalTo: "#" + form.find("input.password").attr("id")
			});
		}
	});
}
jQuery.extend(jQuery.validator.messages, {
	required: "Не заполнено поле",
	remote: "Please fix this field.",
	email: "Введите правильный e-mail.",
	url: "Please enter a valid URL.",
	date: "Please enter a valid date.",
	dateISO: "Please enter a valid date (ISO).",
	number: "Please enter a valid number.",
	digits: "Please enter only digits.",
	creditcard: "Please enter a valid credit card number.",
	equalTo: "Пароли не совпадают.",
	accept: "Please enter a value with a valid extension.",
	maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
	minlength: jQuery.validator.format("Please enter at least {0} characters."),
	rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
	range: jQuery.validator.format("Please enter a value between {0} and {1}."),
	max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
	min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

function declOfNum(number, titles) {
	cases = [2, 0, 1, 1, 1, 2];
	return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

function formSuccess(form) {
	$('form').find(".form-group input, .form-group textarea").val("");
	$('form').find(".placeholder").show();
	$("#successModal").modal("show");
	$('form').closest(".modal").modal("hide");
}

(function($) {
	$.fn.autogrow = function() {
		return this.each(function() {
			var textarea = this;
			$.fn.autogrow.resize(textarea);
			$(textarea).focus(function() {
				textarea.interval = setInterval(function() {
					$.fn.autogrow.resize(textarea);
				}, 500);
			}).blur(function() {
				clearInterval(textarea.interval);
			});
		});
	};
	$.fn.autogrow.resize = function(textarea) {
		var lineHeight = parseInt($(textarea).css('line-height'), 10);
		var lines = textarea.value.split('\n');
		var columns = textarea.cols;
		var lineCount = 0;
		$.each(lines, function() {
			lineCount += Math.ceil(this.length / columns) || 1;
		});
		var height = lineHeight * (lineCount) + 13;
		$(textarea).css('height', height);
	};
})(jQuery);

function popupMakeup() {

	if ($(".popup").length && $(".popup").hasClass("active")) {

		slickResponsive();

		$(".popup [data-fancybox]").fancybox();

		if ($(".popup.active .popup-inner").height() > $(".popup.active").height()) {

			$(".popup.active .close").css({
				marginRight: getScrollBarWidth()
			});

		} else {

			$(".popup.active .close").css({
				marginRight: 0
			});

		}

	}

}

function getHashVars() {

	var hashString = window.location.hash;

	hashString = hashString.replace("#","");

	var hashArray = hashString.split("&");

	var hashVars = new Array();


	for (var i in hashArray) {

		hashVar = hashArray[i].split("=");

		hashVars[hashVar[0]] = hashVar[1];

	}

	return hashVars;

}

function setHashVar(name, val) {

	var hVars = getHashVars();

	if (val) {

		hVars[name] = val;

	} else if (hVars[name]) {

		delete hVars[name];
		delete hVars[name];

	}


	history.pushState('', document.title, window.location.pathname);

	var hashString = "#";

	for (var key in hVars) {

		if (key) {

			hashString += key + "=" + hVars[key] + "&";

		}


	}

	history.pushState({}, null, hashString.substring(0, hashString.length - 1));

}

function slickResponsive() {

	if ($("#mobile-indicator").css("display") == "block") {



	} else {



	}

}

function getScrollBarWidth() {
	var inner = document.createElement('p');
	inner.style.width = "100%";
	inner.style.height = "200px";

	var outer = document.createElement('div');
	outer.style.position = "absolute";
	outer.style.top = "0px";
	outer.style.left = "0px";
	outer.style.visibility = "hidden";
	outer.style.width = "200px";
	outer.style.height = "150px";
	outer.style.overflow = "hidden";
	outer.appendChild(inner);

	document.body.appendChild(outer);
	var w1 = inner.offsetWidth;
	outer.style.overflow = 'scroll';
	var w2 = inner.offsetWidth;
	if (w1 == w2) w2 = outer.clientWidth;

	document.body.removeChild(outer);

	return (w1 - w2);
};
