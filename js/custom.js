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
	      if (!quantityAmount || !increase || !decrease) return;
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
	const zoomImage = document.getElementById('zoomImage');
	const zoomModal = document.getElementById('zoomModal');
	const zoomOverlay = document.getElementById('zoomOverlay');
	if (!zoomImage || !zoomModal || !zoomOverlay) return;
	zoomImage.src = src;
	zoomModal.style.display = 'block';
	zoomOverlay.style.display = 'block';
	const closeButton = zoomModal.querySelector('.zoom-close');
	if (closeButton) closeButton.focus();
  }
  
  function closeZoom() {
	const zoomModal = document.getElementById('zoomModal');
	const zoomOverlay = document.getElementById('zoomOverlay');
	if (zoomModal) zoomModal.style.display = 'none';
	if (zoomOverlay) zoomOverlay.style.display = 'none';
  }

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
	closeZoom();
  }
});
  
// Recupere le chemin actuel (ex: "about.html")
const currentPage = window.location.pathname.split("/").pop();

// Recupere tous les liens de navigation
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

	const section = document.querySelector('#nos-chiffres');
	if (section && counters.length > 0) {
	  let triggered = false;
	  const triggerCounters = () => {
		const rect = section.getBoundingClientRect();
		if (rect.top < window.innerHeight && !triggered) {
		  triggered = true;
		  animateCounters();
		}
	  };
	  window.addEventListener('scroll', triggerCounters);
	  triggerCounters();
	}
