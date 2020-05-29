function postare(){

	$.ajax({
		url: 'http://localhost:4000/companies/',
		type: 'POST',
		data : JSON.stringify({"industryId": parseInt($("#industryId").val()), "name": $("#companyName").val(), "denumire": " ", "bursa": $("#bursa").val(),
			  "active": "", "deschidere": parseInt($("#deschidere").val()), "capital_bursier": " ", "image": " " }),
		contentType: 'application/json',
		cache: false,
		success: function(result){
			$('#companies').empty();
			$('input').val("");

		}
	});
}