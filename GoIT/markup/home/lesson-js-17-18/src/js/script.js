console.log('Hello world!JS Hello');
(function($) {
    $(function() {
        $('.jcarousel').jcarousel(

            {
             animation: 'slow',
             wrap: 'circular'
        })

        .jcarouselAutoscroll({
             interval: 3000,
             target: '+=1',
             autostart: true
            });




            

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();

       
    });

      
})(jQuery);


$(function () {

var params = {
        changedEl: ".lineForm select",
        visRows: 5,
        scrollArrows: true
    }

    cuSel(params);

});







$(function(){
    $(".niceCheck").each(
    function() {
        changeCheckStart($(this));
    });

});



function changeCheck(el)
/* 
    функция смены вида и значения чекбокса при клике на контейнер чекбокса (тот, который отвечает за новый вид)
    el - span контейнер для обычного чекбокса
    input - чекбокс
*/
{

    var el = el,
        input = el.find("input").eq(0);
          
    if(el.attr("class").indexOf("niceCheckDisabled")==-1)
    {   
        if(!input.attr("checked")) {
            el.addClass("niceChecked");
            input.attr("checked", true);
        } else {
            el.removeClass("niceChecked");
            input.attr("checked", false).focus();
        }
    }
    
    return true;
}

function changeVisualCheck(input)
{
/*
    меняем вид чекбокса при смене значения
*/
var wrapInput = input.parent();
    if(!input.attr("checked")) {
        wrapInput.removeClass("niceChecked");
    }
    else
    {
        wrapInput.addClass("niceChecked");
    }
}

function changeCheckStart(el)
/* 
    новый чекбокс выглядит так <span class="niceCheck"><input type="checkbox" name="[name check]" id="[id check]" [checked="checked"] /></span>
    новый чекбокс получает теже name, id и другие атрибуты что и были у обычного
*/
{

try
{
var el = el,
    checkName = el.attr("name"),
    checkId = el.attr("id"),
    checkChecked = el.attr("checked"),
    checkDisabled = el.attr("disabled"),
    checkTab = el.attr("tabindex"),
    checkValue = el.attr("value");
    if(checkChecked)
        el.after("<span class='niceCheck niceChecked'>"+
            "<input type='checkbox'"+
            "name='"+checkName+"'"+
            "id='"+checkId+"'"+
            "checked='"+checkChecked+"'"+
            "value='"+checkValue+"'"+
            "tabindex='"+checkTab+"' /></span>");
    else
        el.after("<span class='niceCheck'>"+
            "<input type='checkbox'"+
            "name='"+checkName+"'"+
            "id='"+checkId+"'"+
             "value='"+checkValue+"'"+
            "tabindex='"+checkTab+"' /></span>");
    
    /* если checkbox disabled - добавляем соотвсмтвующи класс для нужного вида и добавляем атрибут disabled для вложенного chekcbox */      
    if(checkDisabled)
    {
        el.next().addClass("niceCheckDisabled");
        el.next().find("input").eq(0).attr("disabled","disabled");
    }
    
    /* цепляем обработчики стилизированным checkbox */      
    el.next().on("mousedown", function(e) { 
        changeCheck($(this)) 
    });
    el.next().find("input").eq(0).on("change", function(e) { 
        changeVisualCheck($(this)) 
    });
    if(jQuery.browser.msie)
    {
        el.next().find("input").eq(0).on("click", function(e) {
         changeVisualCheck(jQuery(this)) 
     });   
    }
    el.remove();
}
catch(e)
{
    // если ошибка, ничего не делаем
}

    return true;
}





$(function(){
    $('ul.menu li').hover(function(){
         $(this).children('ul').delay(20).slideDown(200);
         }, function(){
         $(this).children('ul').delay(20).slideUp(200);
    });
});



