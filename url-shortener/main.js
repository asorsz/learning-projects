const endpoint = 'https://jsonbox.io/box_0589c2e0e82a3f496144';


const getRandom = () => {
  return Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
};

const getURL = () => {
  const url = document.querySelector('#urlinput').value;
  const urlValid =
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('ftp://');
  return urlValid ? url : `http://${url}`
};

const generateHash = () => {
  if (window.location.hash === '') window.location.hash = getRandom();
};

const sendRequest = (url) => {
  const hashh = window.location.hash.substr(1);
  $.ajax({
    'url': `${endpoint}/${hashh}`,
    'type': 'POST',
    'data': JSON.stringify({'url': url}),
    'dataType': 'json',
    'contentType': 'application/json'
  });
};

const shortenURL = () => {
  const longURL = getURL();
  generateHash();
  sendRequest(longURL);
};

if (window.location.hash !== '') {
  const hashh = window.location.hash.substr(1);
  $.getJSON(`${endpoint}/${hashh}`, (data) => {
    data = data[0]['url'];
    if (data !== null && data !== undefined) window.location.href = data;
  })
};