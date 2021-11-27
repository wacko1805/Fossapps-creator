   //BROWSERS
   $.ajax({ 
    type: 'GET', 
    url: 'json/browsers.json', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
        $.each(data, function(index, element) {
        
            $('.browsers').append($('<div>', {
                html: "<div class='inputGroup'><input id='" + element.name + "' type='checkbox' name='brochure[]' value='" + element.url + "'> <label for='" + element.name + "'>" + element.name + "</label></div>"
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
      html: "<div class='inputGroup'><input id='" + element.name + "' type='checkbox' name='brochure[]' value='" + element.url + "'> <label for='" + element.name + "'>" + element.name + "</label></div>"
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
                html: "<div class='inputGroup'><input id='" + element.name + "' type='checkbox' name='brochure[]' value='" + element.url + "'> <label for='" + element.name + "'>" + element.name + "</label></div>"
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
                html: "<div class='inputGroup'><input id='" + element.name + "' type='checkbox' name='brochure[]' value='" + element.url + "'> <label for='" + element.name + "'>" + element.name + "</label></div>"
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
                html: "<div class='inputGroup'><input id='" + element.name + "' type='checkbox' name='brochure[]' value='" + element.url + "'> <label for='" + element.name + "'>" + element.name + "</label></div>"
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
                html: "<div class='inputGroup'><input id='" + element.name + "' type='checkbox' name='brochure[]' value='" + element.url + "'> <label for='" + element.name + "'>" + element.name + "</label></div>"
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
                html: "<div class='inputGroup'><input id='" + element.name + "' type='checkbox' name='brochure[]' value='" + element.url + "'> <label for='" + element.name + "'>" + element.name + "</label></div>"
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
                html: "<div class='inputGroup'><input id='" + element.name + "' type='checkbox' name='brochure[]' value='" + element.url + "'> <label for='" + element.name + "'>" + element.name + "</label></div>"
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
                html: "<div class='inputGroup'><input id='" + element.name + "' type='checkbox' name='brochure[]' value='" + element.url + "'> <label for='" + element.name + "'>" + element.name + "</label></div>"
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
                html: "<div class='inputGroup'><input id='" + element.name + "' type='checkbox' name='brochure[]' value='" + element.url + "'> <label for='" + element.name + "'>" + element.name + "</label></div>"
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
                html: "<div class='inputGroup'><input id='" + element.name + "' type='checkbox' name='brochure[]' value='" + element.url + "'> <label for='" + element.name + "'>" + element.name + "</label></div>"
            }));
        });
    }
});