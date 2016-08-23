$(document).ready(function() {
	
	var navMenu = $('#myNavbar');
	
	navMenu.on('mouseenter', 'li', function() {
		$(this).addClass('active');
	});
	navMenu.on('mouseleave', 'li', function() {
		$(this).removeClass('active');
	});
	
	// Form validation
	
	var form = $('#main_form');
	
	form.on("submit", function(e){
		e.preventDefault();
		
		var name = form.find("#name").val();
		var nameLen = form.find("#name").val().length;
		var email = form.find("#email").val();
		var number = form.find("#phone_number").val();
		var numberLen = number.length;
		var errors = $("p.errors");
		
		$(".delegation").on("input", "input", function(e) {
		$(this).removeClass("border_red");
		errors.html("");
		});
		
		if (name === ""){
			errors.html("Please enter Your name!");
			$("#name").addClass("border_red");
			return;
		}
		
		if (nameLen < 2) {
		errors.html("Your name is too short!");
		$("#name").addClass("border_red");
		return;
		}
		
		if (email === ""){
			errors.html("You have not entered email!");
			$("#email").addClass("border_red");
			return;
		}
		var emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var validEmail = emailRegexp.test(email);
		if (!validEmail) {
			errors.html("Invalid email!");
			$("#email").addClass("border_red");
			return;
		}
		
		if (number === ""){
			errors.html("You have not entered phone number!");
			$("#phone_number").addClass("border_red");
			return;
		}
		
		if (isNaN(parseInt(number))){
			errors.html("Number must consist only digits!");
			$("#phone_number").addClass("border_red");
			return;
		}
		
		if (numberLen < 6) {
		errors.html("Entered phone number is too short!");
		$("#phone_number").addClass("border_red");
		return;
		}
		
		this.submit();
	});
	
	// Google Maps
	
	var api = 'http://api.openweathermap.org/data/2.5/weather';
	var appId = '7a607b08dbb6ad1cee2d8b962c07cfbe';
	var map, lat = 51.523915, lng = -0.158587;
	
	function initMap(lat, lon) {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: lat, lng: lng},
			zoom: 12,
			scrollwheel: false,
  			disableDoubleClickZoom: true
		});
		var marker=new google.maps.Marker({
			position: {lat: lat, lng: lng},
			animation:google.maps.Animation.BOUNCE
  		});
		
		google.maps.event.addListener(marker,'click',function() {
		map.setZoom(16);
		map.setCenter(marker.getPosition());
		});
		
marker.setMap(map);
	}
	
	$('#map').css('display', 'block');
				initMap(lat, lng);
	
	// Sroll to top
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 750) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	$('.scrollToTop').click(function() {
		$('html, body').animate({
			scrollTop : 0
		}, 1000);
		return false;
	});	
	
	//Slide Animation
	
	$(window).scroll(function () {
		$(".slideanim").each(function () {
			var pos = $(this).offset().top;

			var winTop = $(window).scrollTop();
			if (pos < winTop + 600) {
				$(this).addClass("slide_content");
			}
		});
	});
	
});