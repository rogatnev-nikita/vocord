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
	});
	$('.technology__slider-arrow--left').click(function () {
		$('.technology__slider-tablist li').filter('.active').prev('li').find('a[data-toggle="tab"]').tab('show');
	});

});
