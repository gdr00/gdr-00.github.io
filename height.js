function setColumns() {
( function() {
if ($(window).width() > 750) {
contentDiv = $("#sicurcontent");
contentMarginDiv = $("#sicurcontent_margin");
sidebar1Div = $("#sicursidebar_left");
sidebar2Div = $("#sicursidebar_right");
sidebar1MarginDiv = $("#sicursidebar_left_margin");
sidebar2MarginDiv = $("#sicursidebar_right_margin");
if (sidebar1Div != null && sidebar1Div.length !== 0)
{
if (contentDiv.height() > sidebar1Div.height())
{
if (sidebar2Div != null && sidebar2Div.length !== 0)
{
if (contentDiv.height() > sidebar2Div.height())
{
sidebar1MarginDiv.height(contentDiv.height() - 0 - 0 - 0 - 0);
sidebar2MarginDiv.height(contentDiv.height() - 0 - 0 - 0 - 0);
}
else
{
sidebar1MarginDiv.height(sidebar2Div.height() - 0 - 0 - 0 - 0);
var Height = sidebar2Div.height() - 20 - 70 - 0 - 0;
contentMarginDiv.css("min-height", Height+'px');
 }
}
else
{
sidebar1MarginDiv.height(contentDiv.height() - 0 - 0 - 0 - 0);
}
}
else
{
if (sidebar2Div != null && sidebar2Div.length !== 0)
{
if (sidebar1Div.height() > sidebar2Div.height())
{
sidebar2MarginDiv.height(sidebar1Div.height() - 0 - 0 - 0 - 0);
var Height = sidebar1Div.height() - 20 - 70 - 0 - 0;
contentMarginDiv.css("min-height", Height+'px');
}
else
{
sidebar1MarginDiv.height(sidebar2Div.height() - 0 - 0 - 0 - 0);
var Height = sidebar2Div.height() - 20 - 70 - 0 - 0;
contentMarginDiv.css("min-height", Height+'px');
}
}
else
{
var Height = sidebar1Div.height() - 20 - 70 - 0 - 0;
contentMarginDiv.css("min-height", Height+'px');
}
}
}
else
{
if (sidebar2Div != null && sidebar2Div.length !== 0)
{
if (contentDiv.height() > sidebar2Div.height())
{
if (sidebar1Div != null && sidebar1Div.length !== 0)
{
if (contentDiv.height() > sidebar1Div.height())
{
sidebar1MarginDiv.height(contentDiv.height() - 0 - 0 - 0 - 0);
sidebar2MarginDiv.height(contentDiv.height() - 0 - 0 - 0 - 0);
}
else
{
sidebar2MarginDiv.height(sidebar1Div.height() - 0 - 0 - 0 - 0);
var Height = sidebar1Div.height() - 20 - 70 - 0 - 0;
contentMarginDiv.css("min-height", Height+'px');
 }
}
else
{
sidebar2MarginDiv.height(contentDiv.height() - 0 - 0 - 0 - 0);
}
}
else
{
if (sidebar1Div != null && sidebar1Div.length !== 0)
{
if (sidebar2Div.height() > sidebar1Div.height())
{
sidebar1MarginDiv.height(sidebar1Div.height() - 0 - 0 - 0 - 0);
var Height = sidebar1Div.height() - 0 - 0 - 0 - 0;
contentMarginDiv.css("min-height", Height+'px');
}
else
{
sidebar2MarginDiv.height(sidebar1Div.height() - 0 - 0 - 0 - 0);
var Height = sidebar1Div.height() - 20 - 70 - 0 - 0;
contentMarginDiv.css("min-height", Height+'px');
}
}
else
{
var Height = sidebar2Div.height() - 20 - 70 - 0 - 0;
contentMarginDiv.css("min-height", Height+'px');
}
}
}
}
} })();
}
$(window).on('load', function(){
setColumns();
});
