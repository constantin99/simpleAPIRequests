
  
    $(document).ready(function(){
      $(document).one('click', '#buttonIndustry',function(){
        $('#industries').css('visibility', 'visible');
        $.ajax({
        url: 'http://localhost:4000/industries',
        dataType: 'json',
        cache: false,
        success: function(data){
          $.each(data, function(i, industry){
            content = '<h2 id = "i'+industry.id+' " class = "industry">' + industry.name + '</h2>';
            $(content).appendTo("#industries");
          });
        }
      });
    });
  });
      
  



$(document).on('click', '.industry', function(event){
    $('input[name="IndustryId"').val(parseInt(event.target.id[1]));
    $('#companies').empty();
    $.ajax({
      url: 'http://localhost:4000/companies',
      dataType: 'json',
      cache: false,
      success: function(data){
       //alert(data[0].name);
       $.each(data, function(i, company){
          if(company.industryId == event.target.id[1]){
            var content = '';
            content += '<div class="container" id = "containerCompany" >';

              content += '<div class = "row">';
                content += '<div class="col-lg-3 col-sm-4 col-xs-3" >';
                  content += '<div class = "numeDIV">';
                    content += '<p>' + company.name + '</p>';
                  content += '</div>';
                  
                content += '<div class="deleteDIV">';
                  content += '<button type="button" class="btn btn-danger delete" id = "'+company.id+'">' + 
                              'Delete' + '</button>';
                content += '</div>';
               content += '</div>';
               
               content += '<div class="col-lg-4 col-sm-5 col-xs-6 col-md-offset-1">';

                content += '<div class = "imageDIV">';
                  content += '<img src=" '+company.image+' " class = "images">';
                content += '</div>';

                content += '<div class = "textDIV">';
                  content += '<label>' + 'Denumire: ' + '</label>' + company.denumire  + '</br>';
                  content += '<label>' + 'Bursa: ' + '</label>' + company.bursa + '</br>';

                  if(company.active == " "){
                    company.active = false;
                  }
                  if(company.active){
                    content += '<label>' + 'Active:' + '</label>' + "   " + '<input type = "checkbox" checked onclick = "return false;">' + '</br>';
                  } else {
                    content += '<label>' + 'Active:' + '</label>' + "   " + '<input type = "checkbox" onclick = "return false" >' + '</br>' ;
                  }
                  content += '<label>' + 'Deschidere: ' + '</label>' + company.deschidere + '</br>';
                  content += '<label>' + 'Capital burs.: ' + '</label>' + company.capital_bursier + '</br>';
                    
                content += '</div>';

               content += '</div>';


              content += '</div>';

            content += '</div>';

            $(content).appendTo("#companies");
          }
       });
      }
    });
  });




