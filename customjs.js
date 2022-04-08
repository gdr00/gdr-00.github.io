$(document).ready(function(){

/*************** Staticfooter script ***************/
var window_height =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var body_height = $(document.body).height();
var content = $("div[id$='content_margin']");
if(body_height < window_height){
differ = (window_height - body_height);
content_height = content.height() + differ;
$("div[id*='content_margin']").css({"min-height":content_height+"px"});
}

/* Slideshow Function Call */

if(jQuery('#sicurslideshow_inner').length){
jQuery('#sicurslideshow_inner').TTSlider({
stopTransition:false ,
slideShowSpeed:2000, begintime:1000,cssPrefix: 'sicur'
});
}
/* Animation Function Call */
jQuery().TTAnimation({cssPrefix: 'sicur'});

/*************** Hamburgermenu slideleft script ***************/
$('button#nav-expander').on('click',function(e){
e.preventDefault();
$('body').toggleClass('nav-expanded');
});

/*************** Menu click script ***************/
$('ul.sicurmenu_items.nav li [data-bs-toggle=dropdown]').on('click', function() {
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
if($(this).parent().hasClass('show')){
location.assign($(this).attr('href'));
}
} else {
if(window_width > 1199 && $(this).attr('href')){
window.location.href = $(this).attr('href'); 
}
else{
if($(this).parent().hasClass('show')){
location.assign($(this).attr('href'));
}
}
}
});
$('.sicurmenu_items_parent_link_arrow, .sicurmenu_items_parent_link_active_arrow').on('click', function(e) {
e.preventDefault();
$('.show.child').toggleClass('show');
$(this).parent().toggleClass('show');
});

/*************** Sidebarmenu click script ***************/
$('ul.sicurvmenu_items.nav li [data-bs-toggle=dropdown]').on('click', function() {
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
if(window_width > 1199 && $(this).attr('href')){
window.location.href = $(this).attr('href'); 
}
else{
if($(this).parent().hasClass('show')){
location.assign($(this).attr('href'));
}
}
});
jQuery('.sicurvmenu_items_parent_link_arrow, .sicurvmenu_items_parent_link_active_arrow').on('click', function(e) {
e.preventDefault();
jQuery('.show.child').toggleClass('show');
jQuery(this).parent().toggleClass('show');
});

/*************** Tab menu click script ***************/
$('.sicurmenu_items ul.dropdown-menu [data-bs-toggle=dropdown]').on('click', function(event) { 
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(window_width < 992){
event.preventDefault();
event.stopPropagation();
$(this).parent().siblings().removeClass('show');
$(this).parent().toggleClass(function() {
if ($(this).is(".show") ) {
window.location.href = $(this).children("[data-bs-toggle=dropdown]").attr('href'); 
return "";
} else {
return "show";
}
});
}
});

/*************** Tab-Sidebarmenu script ***************/
$('.sicurvmenu_items ul.dropdown-menu [data-bs-toggle=dropdown]').on('click', function(event) { 
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(window_width < 1200){
event.preventDefault();
event.stopPropagation();
$(this).parent().siblings().removeClass('show');
$(this).parent().toggleClass(function() {
if ($(this).is(".show") ) {
window.location.href = $(this).children("[data-bs-toggle=dropdown]").attr('href'); 
return "";
} else {
return "show";
}
});
}
});

/*************** Google-Webfont script ***************/
/*************** Html video script ***************/
var objects = ['iframe[src*="youtube.com"]','iframe[src*="youtu.be"]','iframe[src*="youtube-nocookie.com"]', 'object'];
for(var i = 0 ; i < objects.length ; i++){
if ($(objects[i]).length > 0 ) {
$(objects[i]).wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
$(objects[i]).addClass('embed-responsive-item');
}
}
});
