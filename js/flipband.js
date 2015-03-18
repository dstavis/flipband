$(document).ready(function(){
	setup()
	$('body').click(flip)
})

var setup = function(){
	if (localStorage.getCacheItem("flipped") == "flipped"){
		$('body').addClass('done')
	}
	else {
		$('body').addClass('not-done')
		$('.message').html("FLIP ME!")
	}
}

var flip = function(){
	if (localStorage.getCacheItem("flipped") == "flipped"){
		console.log("I'm already flipped yo. Wait until tomorrow!")
	} else {
		$('body').removeClass('not-done')
		$('.message').html("")
		$('body').addClass('done')
		localStorage.setCacheItem("flipped", "flipped", {days: 1})
	}
}