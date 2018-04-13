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

	$("#logoChaordic").click( function() {
		window.open("https://www.chaordic.com.br/");
	});

	$("#facebook").click( function() {
		window.open("https://www.facebook.com/chaordic.com.br/");
	});

	$("#twitter").click( function() {
		window.open("https://twitter.com/chaordic?lang=da");
	});

});

function deleteURL() {
	$("#inputLink").val("");
	$('#shorten').text("ENCURTAR");
	$('#delete').html("");
	$("#inputLink").css("color", "#FD6E12");
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
		top5 += "<tr class='top5Tr'><td class='top5UrlsTab'><a class='top5Urls' href='" + urls[i].shortUrl + "' target='blank'>" + urls[i].shortUrl + "</a></td>";
		top5 += "<td class='top5HitsTab'>" + urls[i].hits.toLocaleString('pt-BR') + "</td></tr>";
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
	var totalHits = sumTotalHits();
	$("#totalHits").text(totalHits.toLocaleString('pt-BR'));
}
