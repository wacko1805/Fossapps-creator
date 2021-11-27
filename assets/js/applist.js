   //BROWSERS
   $.ajax({ 
    type: 'GET', 
    url: 'json/browsers.json', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
        $.each(data, function(index, element) {
        
            $('.browsers').append($('<div>', {
                  html: "<div class='inputGroup'><a class='button' id='" + element.name + "' href='" + element.moreinfo + "'>" + element.name + "</a></div><p class='small'><i>App Source: </i><a href='" + element.url + "'> " + element.url + "</a></p>"
            }));
        });
    }
});
//DEV APPS
$.ajax({ 
type: 'GET', 
url: 'json/dev.json', 
data: { get_param: 'value' }, 
dataType: 'json',
success: function (data) { 
$.each(data, function(index, element) {

  $('.dev').append($('<div>', {
      html: "<div class='inputGroup'><a class='button' id='" + element.name + "' href='" + element.moreinfo + "'>" + element.name + "</a></div><p><i>App Source:</i>" + element.url + "</p>"
  }));
});
}
});

//STORES
$.ajax({ 
    type: 'GET', 
    url: 'json/stores.json', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
        $.each(data, function(index, element) {
        
            $('.stores').append($('<div>', {
                  html: "<div class='inputGroup'><a class='button' id='" + element.name + "' href='" + element.moreinfo + "'>" + element.name + "</a></div><p class='small'><i>App Source: </i><a href='" + element.url + "'> " + element.url + "</a></p>"
            }));
        });
    }
});


     //MESSAGES
$.ajax({ 
    type: 'GET', 
    url: 'json/messages.json', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
        $.each(data, function(index, element) {
        
            $('.messages').append($('<div>', {
                  html: "<div class='inputGroup'><a class='button' id='" + element.name + "' href='" + element.moreinfo + "'>" + element.name + "</a></div><p class='small'><i>App Source: </i><a href='" + element.url + "'> " + element.url + "</a></p>"
            }));
        });
    }
});

     //CALENDAR
$.ajax({ 
    type: 'GET', 
    url: 'json/calendar.json', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
        $.each(data, function(index, element) {
        
            $('.calendar').append($('<div>', {
                  html: "<div class='inputGroup'><a class='button' id='" + element.name + "' href='" + element.moreinfo + "'>" + element.name + "</a></div><p class='small'><i>App Source: </i><a href='" + element.url + "'> " + element.url + "</a></p>"
            }));
        });
    }
});

//PHONE
$.ajax({ 
    type: 'GET', 
    url: 'json/phone.json', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
        $.each(data, function(index, element) {
        
            $('.phone').append($('<div>', {
                  html: "<div class='inputGroup'><a class='button' id='" + element.name + "' href='" + element.moreinfo + "'>" + element.name + "</a></div><p class='small'><i>App Source: </i><a href='" + element.url + "'> " + element.url + "</a></p>"
            }));
        });
    }
});

//MUSIC
$.ajax({ 
    type: 'GET', 
    url: 'json/music.json', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
        $.each(data, function(index, element) {
        
            $('.music').append($('<div>', {
                  html: "<div class='inputGroup'><a class='button' id='" + element.name + "' href='" + element.moreinfo + "'>" + element.name + "</a></div><p class='small'><i>App Source: </i><a href='" + element.url + "'> " + element.url + "</a></p>"
            }));
        });
    }
});


//CAMERA
$.ajax({ 
    type: 'GET', 
    url: 'json/camera.json', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
        $.each(data, function(index, element) {
        
            $('.camera').append($('<div>', {
                  html: "<div class='inputGroup'><a class='button' id='" + element.name + "' href='" + element.moreinfo + "'>" + element.name + "</a></div><p class='small'><i>App Source: </i><a href='" + element.url + "'> " + element.url + "</a></p>"
            }));
        });
    }
});




//CALCULATOR
$.ajax({ 
    type: 'GET', 
    url: 'json/calculator.json', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
        $.each(data, function(index, element) {
        
            $('.calculator').append($('<div>', {
                  html: "<div class='inputGroup'><a class='button' id='" + element.name + "' href='" + element.moreinfo + "'>" + element.name + "</a></div><p class='small'><i>App Source: </i><a href='" + element.url + "'> " + element.url + "</a></p>"
            }));
        });
    }
});
//EMAIL
$.ajax({ 
    type: 'GET', 
    url: 'json/email.json', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
        $.each(data, function(index, element) {
        
            $('.email').append($('<div>', {
                  html: "<div class='inputGroup'><a class='button' id='" + element.name + "' href='" + element.moreinfo + "'>" + element.name + "</a></div><p class='small'><i>App Source: </i><a href='" + element.url + "'> " + element.url + "</a></p>"
            }));
        });
    }
});
//MICROG
$.ajax({ 
    type: 'GET', 
    url: 'json/microg.json', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
        $.each(data, function(index, element) {
        
            $('.microg').append($('<div>', {
                  html: "<div class='inputGroup'><a class='button' id='" + element.name + "' href='" + element.moreinfo + "'>" + element.name + "</a></div><p class='small'><i>App Source: </i><a href='" + element.url + "'> " + element.url + "</a></p>"
            }));
        });
    }
});