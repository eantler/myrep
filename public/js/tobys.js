

var mouseWheelEvt = function (e)
{
    var event = e || window.event;
    if (document.body.doScroll)
        document.body.doScroll(event.wheelDelta>0?"left":"right");
    else if ((event.wheelDelta || event.detail) > 0)
        document.body.scrollLeft -= 20;
    else
        document.body.scrollLeft += 20;

    return false;
}

if ("onmousewheel" in document.body) {
    document.body.onmousewheel = mouseWheelEvt;
}
else
{

    document.body.addEventListener("DOMMouseScroll", mouseWheelEvt);
}