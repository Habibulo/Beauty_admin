console.log("Home frontend javascript file");
// var $pathEls = $("path");
// $pathEls.each(function (i, pathEl) {
// 	var offset = anime.setDashoffset(pathEl);
// 	$(pathEl).attr("stroke-dashoffset", offset);
// 	anime({
// 		targets: pathEl,
// 		strokeDashoffset: [offset, 0],
// 		duration: anime.random(1000, 3000),
// 		delay: anime.random(0, 2000),
// 		loop: true,
// 		direction: "alternate",
// 		easing: "easeInOutSine",
// 		autoplay: true,
// 	});
// });

// function toggleDarkMode() {
// 	$("body").toggleClass("dark-mode colorful-mode");
// 	var $button = $(".dark-mode-toggle");
// 	if ($("body").hasClass("colorful-mode")) {
// 		$button.text("Dark");
// 	} else {
// 		$button.text("White");
// 	}
// }

// JAVASCRIPT FOR TEST WITHOUT JQUERY

var pathEls = document.querySelectorAll("path");
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute("stroke-dashoffset", offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(1000, 3000),
    delay: anime.random(0, 2000),
    loop: true,
    direction: "alternate",
    easing: "easeInOutSine",
    autoplay: true,
  });
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("colorful-mode");
  const button = document.querySelector(".dark-mode-toggle");
  if (document.body.classList.contains("colorful-mode")) {
    button.textContent = " Dark ";
  } else {
    button.textContent = "White";
  }
}
