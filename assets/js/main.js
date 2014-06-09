$(function(){
  var epitomax_url = "http://my.epitomax.net/PatientPortal/signup.jsp?company_id=" + config.company_id + "&case_no=";
  $("form").submit(function(e){
    e.preventDefault();
    window.location.href = epitomax_url + $("#clientid").val();
  });

  // Site Config Variables

  $("title").prepend(config.name + " ");
  $(".business-name").html(config.name);
  $(".business-phone").attr("href" , "tel:" + config.phone)
                      .html(config.phone);
});
