var SMARTHACK_DATE = new Date(2019, 10, 2, 12); // 02 noiembrie 2019, ora 12

$( document ).ready(function() {
	var window_height = $(window).height();
	var window_width = $(window).width();

	var whiteBgGradient = $("#whiteBackground-gradient");
	var right = parseInt(whiteBgGradient.css('right'));

	var substPoz = window_width-right;
	var top = parseInt($(window).scrollTop());
	// var scroll = $(window).scrollTop()/10;
	var pers = right*top/window_height;
	if($(window).width()>=768){
		// whiteBg.css("background-position", right+pers-substPoz +"px");
		whiteBgGradient.css('transform','translate3d(0,0,0)');
	}

	var buttonInscriere = $('#button-inscriere');
	var section1Container = $('#section1-container');

	var menu = $('#menu');
	var hamburger = $('.hamburger');

	var p = 50/100*right;

	$("#menu .acasa").on("click",function(){
        var body = $("html, body");
        body.stop().animate({scrollTop:0}, 1000, 'swing');
	});
	
	$(".scrollTop").on("click",function(){
        var body = $("html, body");
        body.stop().animate({scrollTop:0}, 1000, 'swing');
    });

    $("#menu .despre").on("click",function(){
        var body = $("html, body");
        if($(window).width()<768){
        	body.stop().animate({scrollTop: 2*window_height-50}, 1000, 'swing');
        }
        else
        	body.stop().animate({scrollTop: window_height+100}, 1000, 'swing');
    });

    $("#menu .inscriere").on("click",function(){
        var body = $("html, body");
        var section5Top = $('#section5').position().top;
        body.stop().animate({scrollTop: section5Top}, 1000, 'swing');
	});
	
	$("#button-inscriere").on("click",function(){
        var body = $("html, body");
        var section5Top = $('#section5').position().top;
        body.stop().animate({scrollTop: section5Top}, 1000, 'swing');
	});
	
	$(".button-inscriere").on("click",function(){
        var body = $("html, body");
        var section5Top = $('#section5').position().top;
        body.stop().animate({scrollTop: section5Top}, 1000, 'swing');
    });

    $("#menu .parteneri").on("click",function(){
        var body = $("html, body");
        var section6Top = $('#section6').position().top;
        body.stop().animate({scrollTop: section6Top}, 1000, 'swing');
    });

    $("#menu .contact").on("click",function(){
        var body = $("html, body");
        var section7Top = $('#section7').position().top-80;
        body.stop().animate({scrollTop: section7Top}, 1000, 'swing');
    });

    var z = $('.timer .zile > span:first-child');
    var o = $('.timer .ore > span:first-child');
    var m = $('.timer .minute > span:first-child');
    var s = $('.timer .secunde > span:first-child');

    var date_future = SMARTHACK_DATE;
    var date_now = new Date();

    var seconds = Math.floor((date_future - (date_now))/1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);
    
    var hours = hours-(days*24);
    var minutes = minutes-(days*24*60)-(hours*60);
    var seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
    if(days < 0 ){
    	clearInterval(calcNewYear);
    	z.html("0");
		o.html("0");
    	m.html("0");
    	s.html("0");
    }
	else{
		z.html(days);
        o.html(hours);
        m.html(minutes);
        s.html(seconds);
	}
    
     

    var calcNewYear = setInterval(function(){
		date_future = SMARTHACK_DATE;
        date_now = new Date();

        seconds = Math.floor((date_future - (date_now))/1000);
        minutes = Math.floor(seconds/60);
        hours = Math.floor(minutes/60);
        days = Math.floor(hours/24);
        
        hours = hours-(days*24);
        minutes = minutes-(days*24*60)-(hours*60);
        seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
        if(days < 0){
			clearInterval(calcNewYear);
			z.html(0);
			o.html(0);
			m.html(0);
			s.html(0);
		}
       	else{
			z.html(days);
			o.html(hours);
			m.html(minutes);
			s.html(seconds);
		   }	
        
       	
    },1000);

    var hamburgerActive = 0;
    var menuHeight = menu.css('height','auto').height();
    var menuWidth = menu.css('width','auto').width();
    menu.css({'height': '0', 'width': '0'});
    hamburger.on('click', function(){
    	if(hamburgerActive==0){
    		menu.animate({
    			height: menuHeight,
    			width: 200
    		},200,'swing');
    		hamburger.addClass('active');
    		hamburgerActive = 1;
    	}
    	else if(hamburgerActive==1){
    		menu.animate({
    			height: 0,
    			width: 0
    		},200);
    		hamburger.removeClass('active');
    		hamburgerActive = 0;
    	}
    });

    if($(window).width()<=980){
    	$("#menu > li").on("click",function(){
    		menu.animate({
    			height: 0,
    			width: 0
    		},200);
    		hamburger.removeClass('active');
    		hamburgerActive = 0;
    	});
    }

});

