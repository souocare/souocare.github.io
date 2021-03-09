

function mudarleng(leng){
    var langpage = document.getElementById('languagepage').innerHTML
    if (leng == 'pt'){
        window.open("index.html","_self");
    } else if (leng == 'en'){
        window.open("indexen.html","_self");
    } else if (leng == 'es'){
        window.open("indexes.html","_self");
    } else {
        //pass
    };

};



function expandothers(numproj){
    var checkdisplay = document.getElementById(numproj).style.display;
	if (numproj == 'curriculum'){
		if (checkdisplay == 'block'){
			document.getElementById(numproj).style.display = "none";;
			document.getElementById(numproj + "button").innerHTML = '<strong>Clique aqui para expandir o Curriculum Vitae!</strong>';
		} else {
			document.getElementById(numproj).style.display = "block";;
			document.getElementById(numproj + "button").innerHTML = '<strong>Clique aqui para esconder o Curriculum Vitae!</strong>';
		}
	} else {
		if (checkdisplay == 'block'){
			document.getElementById(numproj).style.display = "none";;
			document.getElementById(numproj + "button").innerHTML = '<strong>Clique aqui para expandir!</strong>';
		} else {
			document.getElementById(numproj).style.display = "block";;
			document.getElementById(numproj + "button").innerHTML = '<strong>Clique aqui para esconder!</strong>';
		}
	}
	

};



$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Focado.", "Persistente.", "Empenhado."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
		nav: true,
		dots:true,
		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});

	$('.owl-carousel').find('.owl-nav').removeClass('disabled');
	$('.owl-carousel').on('changed.owl.carousel', function(event) {
		$(this).find('.owl-nav').removeClass('disabled');
	});


	


	var skillsTopOffset = $(".skillsSection").offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;
	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

			$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });


		}


		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$(".counter").each(function() {
				var element = $(this);
				var endVal = parseInt(element.text());

				element.countup(endVal);
			})

			countUpFinished = true;

		}


	});


	$("[data-fancybox]").fancybox();


	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

	$("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});



	$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});

	


	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}




	}

	var options = {
		series: [{
			name: "Percentagem de conhecimento",
		data: [90, 60, 25]
	  }],
		chart: {
		type: 'bar',
		height: 250,
		toolbar:{
			show:false
		}
	  },
	  colors:["#CC866C"],
	  plotOptions: {
		bar: {
		  horizontal: true,
		}
	  },
	  dataLabels: {
		enabled: false
	  },
	  states:{
		hover:{
			filter:{
				type: 'none',
			}
		  }
		  
	  },
	  xaxis: {
		categories: ['Português', 'Inglês', 'Espanhol'
		],
		tooltip:{
			style:{
				fontSize: '20px',
			}
		}
	  }
	  };

	  var chart = new ApexCharts(document.querySelector("#barraidiomas"), options);
	  chart.render();

});
















