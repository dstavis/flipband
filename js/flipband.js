$(document).ready(function(){
	setupPage()
	$('body').click(did)
})

var setupPage = function(){
	if (localStorage["flipped"] == "true"){
		$('body').addClass('done')
	}
	else {
		$('body').addClass('not-done')
		$('.message').html("FLIP ME!")
	}
}

var did = function(){
	if (localStorage["flipped"] == "false"){
		$('body').removeClass('not-done')
		$('.message').html("")
		$('body').addClass('done')
		localStorage["flipped"] = true;
	}
}