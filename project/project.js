$(function() {
	setTop5();
	setTotalHits();

	$("#shorten").click( function() {
		if ($("#inputLink").val() == "") {
			alert("O link a ser encurtado não foi informado");
			return;
		}
        var textButton = $("#shorten").text();
		if (textButton == "ENCURTAR") {
			shortenLink();
		} else {
			copyLink();
		}
	});

	$("#delete").click( function() {
        deleteURL();
	});
});

function deleteURL() {
	$("#inputLink").val("");
	$('#shorten').text("ENCURTAR");
	$('#delete').html("");
}

function copyLink() {
	$("#inputLink").select();
	document.execCommand('copy');
	$('#shorten').text("ENCURTAR");
	deleteURL();
}

function shortenLink() {
	$.getJSON( "http://is.gd/create.php?callback=?", {
		url: $("#inputLink").val(),
		format: "json"
	}).done(function(data) {
		$("#inputLink").val(data.shorturl);
		$('#shorten').text("COPIAR");
		$("#inputLink").css("color", "#FFF");
		$("#delete").html("x");
	});
}

function sortURL() {
    urls = urls.sort(function(a, b) {
    	return (b["hits"] > a["hits"]) ? 1 : ((b["hits"] < a["hits"]) ? -1 : 0);
    });
}

function selectTop5() {
	var top5 = "";
	for (var i = 0; i < 5; i++) {
		top5 += "<label class='top5url'>" + urls[i].shortUrl + "</label>";
		top5 += "<label class='top5hits'>" + urls[i].hits.toLocaleString('pt-BR') + "</label><hr>";
	}
	return top5;
}

function setTop5() {
	sortURL();
	var top5 = selectTop5();
	$("#top5").html(top5);
}

function sumTotalHits() {
	var totalHits = 0;
	for (var i = 0; i < urls.length; i++) {
		totalHits += urls[i].hits;
	}
	return totalHits;
}

function setTotalHits() {
	var totalHits =sumTotalHits();
	$("#totalHits").text(totalHits.toLocaleString('pt-BR'));
}
