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
	});

	// Header search field
	$(".header__sub-menu li:nth-child(3) a, .header__search-close-icon").click(function () {
		$(".header__search-input, .header__main-menu, .header__sub-menu, .header__search").toggleClass("hidden");
		$(".header__search-input").focus();
		event.preventDefault();
	});

});
