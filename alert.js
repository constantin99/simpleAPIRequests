$(document).ready(function(){
	$(document).on('click', '.inputPost', function(){
		if(! $('input[name="IndustryId"]').val()){
			alert("Va rugam sa selectati un element de tip industrie");
		}
	});
});