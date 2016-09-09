$(document).ready(function () {

	// Home page image animations
	$(".catalog__item img").each(function (e) {
		var src = $(this).attr("src");
		$(this).hover(function () {
			$(this).attr("src", src.replace("--static.png", ".gif"));
		}, function () {
			$(this).attr("src", src);
		});
	});

	// Feature block image animations
	$(".feature__image img").each(function (e) {
		var src = $(this).attr("src");
		$(this).hover(function () {
			$(this).attr("src", src.replace(".jpg", "--tooltip.jpg"));
		}, function () {
			$(this).attr("src", src);
		});
	});

	// Hide logo when mobile menu collapse
	$(".navbar-toggle").click(function () {
		$(".header__logo").toggleClass("hidden");
		$(".navbar-toggle").toggleClass("navbar-toggle--active");
	});

	// Header search
	$(".header__sub-menu li:nth-child(3) a, .header__search-close-icon").click(function () {
		$(".header__search-input, .header__main-menu, .header__sub-menu, .header__search").toggleClass("hidden");
		$(".header__search-input").focus();
		event.preventDefault();
	});

	// Technology slider navigation arrows
	$('.technology__slider-arrow--right').click(function () {
		$('.technology__slider-tablist li').filter('.active').next('li').find('a[data-toggle="tab"]').tab('show');
		event.preventDefault();
	});
	$('.technology__slider-arrow--left').click(function () {
		$('.technology__slider-tablist li').filter('.active').prev('li').find('a[data-toggle="tab"]').tab('show');
		event.preventDefault();
	});
	$('.technology__slider-arrow--top').click(function () {
		$('.technology__slider-tablist li').filter('.active').prev('li').find('a[data-toggle="tab"]').tab('show');
		event.preventDefault();
	});
	$('.technology__slider-arrow--bottom').click(function () {
		$('.technology__slider-tablist li').filter('.active').next('li').find('a[data-toggle="tab"]').tab('show');
		event.preventDefault();
	});

	// Analysis page technology block image animations
	$(".technology__slides-animated img").each(function (e) {
		var src = $(this).attr("src");
		$(this).hover(function () {
			$(this).attr("src", src.replace(".png", "--tooltip.png"));
		}, function () {
			$(this).attr("src", src);
		});
	});

	// Numper page map block init
	function escapeXml(string) {
		return string.replace(/[<>]/g, function (c) {
			switch (c) {
				case '<':
					return '\u003c';
				case '>':
					return '\u003e';
			}
		});
	}

	var pins = {
		tr: escapeXml('<div class="map-pin"><span>Тверская обл.</span></div>'),
		mc: escapeXml('<div class="map-pin"><span>Московская обл.</span></div>'),
		ar: escapeXml('<div class="map-pin"><span>Архангельская обл.</span></div>'),
		ki: escapeXml('<div class="map-pin"><span>Кировская обл.</span></div>'),
		sr: escapeXml('<div class="map-pin"><span>Саратовская обл.</span></div>'),
		kl: escapeXml('<div class="map-pin"><span>КАРЕЛИЯ</span></div>'),
		ko: escapeXml('<div class="map-pin"><span>КОМИ</span></div>'),

		mc: escapeXml('<div class="map-pin map-pin--marker"></div>')
	};

	$('.vmap').vectorMap({
		map: 'russia',

		backgroundColor: '#222629',
		borderColor: '#222629',
		borderWidth: 1,

		pins: pins,
		pinMode: 'content',

		color: '#6BA442',
		hoverOpacity: 0.9,
		selectedColor: '#6BA442',

		enableZoom: true,

		selectedRegions: null,
		showTooltip: null,

		normalizeFunction: 'polynomial',

		onLoad: function (event, map) {
			$('.vmap').vectorMap('zoomIn');
			$('.vmap').vectorMap('zoomIn');
		},

		onRegionClick: function (element, code, region) {
			var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
		}

	});
});
