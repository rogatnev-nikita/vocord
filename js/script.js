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

	// Add body class when mobile menu collapsed
	$(".navbar-toggle").click(function () {
		$(".header__logo").toggleClass("hidden");
		$(".navbar-toggle").toggleClass("navbar-toggle--active");
		$("body").toggleClass("body--invert");
	});

	// Header search field
	$(".header__sub-menu li:nth-child(3) a").click(function () {
		$(".header__search-input, .header__main-menu, .header__sub-menu, .header__search").toggleClass("hidden");

		event.preventDefault();
	});

});
