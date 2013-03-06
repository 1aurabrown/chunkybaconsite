// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .




$('document').ready(function () {




  $("p:not('.bacon_carousel p'), li").each(function () {
    $(this).html($(this).html().replace(/beacon|Bacon|BACON/g,function($1){
      return('<a href="#" rel="tooltip" data-toggle="tooltip" title="Bacon was invented by Albert Einstein." class="bacon_tooltip">'+ $1 +'</a>');
    }));
  });


  $("a[rel=tooltip]").tooltip('toggle');


});

