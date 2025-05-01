(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	


	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();


})()
function showZoom(src) {
	document.getElementById('zoomImage').src = src;
	document.getElementById('zoomModal').style.display = 'block';
	document.getElementById('zoomOverlay').style.display = 'block';
  }
  
  function closeZoom() {
	document.getElementById('zoomModal').style.display = 'none';
	document.getElementById('zoomOverlay').style.display = 'none';
  }
  
// Récupère le chemin actuel (ex: "about.html")
const currentPage = window.location.pathname.split("/").pop();

// Récupère tous les liens de navigation
const navLinks = document.querySelectorAll(".custom-navbar-nav .nav-link");

navLinks.forEach(link => {
  // Compare href avec la page actuelle
  if (link.getAttribute("href") === currentPage) {
	link.parentElement.classList.add("active");
  }
});

  const counters = document.querySelectorAll('.counter');
  const speed = 100;

  const animateCounters = () => {
	counters.forEach(counter => {
	  const target = +counter.getAttribute('data-count');
	  let count = 0;

	  const updateCount = () => {
		const increment = Math.ceil(target / speed);
		count += increment;
		if (count < target) {
		  counter.innerText = count;
		  requestAnimationFrame(updateCount);
		} else {
		  counter.innerText = target + '+';
		}
	  };

	  updateCount();
	});
  };

  // Optionally animate when section comes into view
  let triggered = false;
  window.addEventListener('scroll', () => {
	const section = document.querySelector('#nos-chiffres');
	const rect = section.getBoundingClientRect();
	if (rect.top < window.innerHeight && !triggered) {
	  triggered = true;
	  animateCounters();
	}
  });