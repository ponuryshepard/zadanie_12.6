var url = 'https://restcountries.eu/rest/v2/name/';

var countriesList = $('#countries');



$('#search').click(searchCountries);



function searchCountries() {
  
	var countryName = $('#country-name').val();
  
	if(!countryName.length) countryName = 'Poland';
  
	$.ajax({
    
		url: url + countryName,
    
		method: 'GET',
    
		success: showCountriesList
,
		error: showEmptyCountriesList
	});

}


function showEmptyCountriesList( err ){
	countriesList.empty();
	countriesList.addClass("empty");
	$('<li>').text("Brak danych").appendTo(countriesList);
}


function showCountriesList(resp) {
  
	countriesList.empty();

	countriesList.removeClass("empty");
	resp.forEach(function(item){
    
		$('<li>').text(item.name + ' (native name: ' + item.nativeName + '), capital: ' + item.capital + ', timezones: ' + item.timezones + ', currency: ' + item.currencies[0].name + ' (' + item.currencies[0].code + ')' + ', borders: ' + item.borders).appendTo(countriesList);
  
	});

};





	