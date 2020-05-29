$(document).on('click', '.delete', function(event){
	id = event.target.id;
	$.ajax({
		url: 'http://localhost:4000/companies/' + id,
		type: 'DELETE',
		contentType:'application/json',
		cache: false,
		success:function(result){
			$('#companies').empty();
		}
	});
});