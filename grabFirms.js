(function($) {

  var firms = $('div.div-col>ul>li>a:contains("")');
  alert(firms.length);
  var firmString = "var notable = [";

  for (i = 0; i < firms.length; i++) {
    var appeared = false;
    for (j = 0; j < i; j ++) {
      if (firms[j].innerHTML === firms[i].innerHTML) {
        appeared = true;
        break;
      };
    };
      
    if (!appeared) {
      var finalString = firms[i].innerHTML;
      
      if (finalString.substring(0, 4) === 'The ') {
        finalString = finalString.substring(4, finalString.length);
      };
      
      if (finalString.substring(finalString.length - 6,
          finalString.length) === ', Inc.') {
        finalString = finalString.substring(0, finalString.length - 6);
      };
    
      if (finalString.substring(finalString.length - 5,
          finalString.length) === ' Inc.') {
        finalString = finalString.substring(0, finalString.length - 5);
      };
        
      firmString += '["' + finalString + '", "' +
          firms[i].href + '"], ';
      console.log(firms[i].href);
    };
  };
  
  firmString += '];';
    
  console.log(firmString);
  $('body').html(firmString);
})(jQuery);