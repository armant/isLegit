(function($) {

  var firms = $('div.div-col>ul>li>a:contains("")');
  alert(firms.length);
  var firmString = "var notable = [";

  for (i = 0; i < firms.length; i++) {
    firmString += '["' + firms[i].innerHTML + '", "' + firms[i].href + '"], ';
      console.log(firms[i].href);
  };
  
  firmString += '];';
    
  console.log(firmString);
  $('body').html(firmString);
})(jQuery);