jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
    return function( elem ) {
        return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});

var notable = ['tJX', 'Google'];

notable.forEach(function(i){
  var matches = $("a.ListPrimaryLink:Contains(" + i + ")");
  alert(i);
  alert(matches.length);
    
  if (matches.length > 0) {
    //var span = matches.html().replace(new RegExp('(.+)?(' + i + ')(.+)?', 'i'), '<span class="notable">' + "$1 $2 $3" + '</span>');
    $(matches).append('</a> <a href="google.com" target="_blank"><span class="notable">LEGIT: ' + i + '</span></a>');
    //var n = matches.html(span);
  };
  
});