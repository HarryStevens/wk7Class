function initialize() {
	google.maps.visualRefresh = true;
	var isMobile = (navigator.userAgent.toLowerCase().indexOf('android') > -1) || (navigator.userAgent.match(/(iPod|iPhone|iPad|BlackBerry|Windows Phone|iemobile)/));
	if (isMobile) {
		var viewport = document.querySelector("meta[name=viewport]");
		viewport.setAttribute('content', 'initial-scale=1.0, user-scalable=no');
	}

	var mapOptions = {
		center : new google.maps.LatLng(55.749010, 10.267352),
		zoom : 4,
		mapTypeId : google.maps.MapTypeId.ROADMAP,
		disableDefaultUI : true,
		draggable : false,
		zoomable : false,
		scrollwheel : false,
		disableDoubleClickZoom : true
	}

	var mapDiv = document.getElementById('googft-mapCanvas');
	mapDiv.style.width = isMobile ? '100%' : '1000px';
	mapDiv.style.height = isMobile ? '100%' : '800px';
	var map = new google.maps.Map(mapDiv, mapOptions);

	var style = [{
		featureType : 'all',
		elementType : 'all',
		stylers : [{
			saturation : -55
		}]
	}];
	var styledMapType = new google.maps.StyledMapType(style, {
		map : map,
		name : 'Styled Map'
	});
	map.mapTypes.set('map-style', styledMapType);
	map.setMapTypeId('map-style');

	map.controls[google.maps.ControlPosition.RIGHT_TOP].push(document.getElementById('googft-legend-open'));
	map.controls[google.maps.ControlPosition.RIGHT_TOP].push(document.getElementById('googft-legend'));

	layer = new google.maps.FusionTablesLayer({
		map : map,
		heatmap : {
			enabled : false
		},
		query : {
			select : "col9\x3e\x3e1",
			from : "1cJPg8ETa-2GdbSkeD80V7MEqz9F8zJKgQSv7tpEq",
			where : ""
		},
		options : {
			styleId : 2,
			templateId : 3
		}
	});

	if (isMobile) {
		var legend = document.getElementById('googft-legend');
		var legendOpenButton = document.getElementById('googft-legend-open');
		var legendCloseButton = document.getElementById('googft-legend-close');
		legend.style.display = 'none';
		legendOpenButton.style.display = 'block';
		legendCloseButton.style.display = 'block';
		legendOpenButton.onclick = function() {
			legend.style.display = 'block';
			legendOpenButton.style.display = 'none';
		}
		legendCloseButton.onclick = function() {
			legend.style.display = 'none';
			legendOpenButton.style.display = 'block';
		}
	}
}

google.maps.event.addDomListener(window, 'load', initialize); 