ymaps.ready(init);
function init(){
	ymaps.ready(function (){
		//address #1
		var map1 = new ymaps.Map('map1', {
			center: [56.352685, 43.875267],
			zoom: 15
		}, {
			minZoom: 10
		});
		
		myPlacemark1 = new ymaps.Placemark(map1.getCenter(), { }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/mapmarker.png',
            iconImageSize: [50, 50],
            iconImageOffset: [-30, -65]
        });

		map1.geoObjects.add(myPlacemark1);

		//address #2
		var map2 = new ymaps.Map('map2', {
			center: [56.360852, 44.060065],
			zoom: 15
		}, {
			minZoom: 10
		});
		
		myPlacemark2 = new ymaps.Placemark(map2.getCenter(), { }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/mapmarker.png',
            iconImageSize: [50, 50],
            iconImageOffset: [-30, -65]
        });

		map2.geoObjects.add(myPlacemark2);
	});
}