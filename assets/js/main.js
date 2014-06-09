$(function(){
  var companyId = "135";
  var epitomax_url = "http://my.epitomax.net/PatientPortal/signup.jsp?company_id=" + companyId + "&case_no=";
  $("form").submit(function(e){
    e.preventDefault();
    window.location.href = epitomax_url + $("#clientid").val();
  });
});
