$(document).ready(function(){
	setup()
	$('body').click(clickHandler)
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

var clickHandler = function(){
	if (localStorage.getCacheItem("flipped") == "flipped"){
		console.log("I'm already flipped yo. Wait until tomorrow!")
	} else {
		askForProof()
	}
}

var cancelFlip = function(){
	localStorage["flipped"] = null;
}

var askForProof = function(){
	$("#proof-holder").show()
	$("#submit-proof").click(proofHandler)
}

var proofHandler = function(){
	var proof = $("#proof").val()
	if (saveProof(proof)){
		$('.message').html("")
		$("#proof-holder").hide()
		flip()
	}
}

var saveProof = function(proof){
	// Proof must be a string with some text
	if ( typeof proof == 'string' && (proof != null && proof != undefined && proof != "")){
		var today = moment().format("MM/DD/YY")
		var saveData = {}
		saveData[today] = { data: proof, time: moment().toDate() }
		localStorage["flipband-proof"] = JSON.stringify(saveData)
		return true;
	} else {
		console.log("Proof must be a string with something in it")
		return false;
	}
}

var getProof = function(){
	return JSON.parse(localStorage["flipband-proof"])
}

var flip = function(){
	$('body').removeClass('not-done')
	$('body').addClass('done')
	localStorage.setCacheItem("flipped", "flipped", {days: 1})
}