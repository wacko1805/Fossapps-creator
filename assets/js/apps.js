function makeRequest(type, elementId) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
        const filteredData = data.filter(item => item.type === type);
        const html = filteredData.map(item => `<div class='inputGroup'><input id='${item.name}' type='checkbox' name='brochure[]' value='${item.latest_release_file}'> <label for='${item.name}'>${item.name}</label></div>`).join('');
        document.getElementById(elementId).insertAdjacentHTML('beforeend', html);
      }
    };
    xhr.open('GET', 'https://jacsam9.dreamhosters.com/fossapps/cors.php', true);
    xhr.send();
  }
  
  makeRequest('browser', 'browsers');
  makeRequest('stores', 'stores');
  makeRequest('messages', 'messages');
  makeRequest('calendar', 'calendar');
  makeRequest('phone', 'phone');
  makeRequest('email', 'email');
  makeRequest('microg', 'microg');
  makeRequest('music', 'music');
  makeRequest('camera', 'camera');
  makeRequest('youtube', 'youtube');
  makeRequest('calculator', 'calculator');