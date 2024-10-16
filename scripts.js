var startTime; 
var stopwatchInterval;
var elapsedPausedTime = 0;
let question = 0;
let email;

chrome.identity.getProfileUserInfo({ 'accountStatus': 'ANY' }, function (info) {
  email = info.email; 
  email = JSON.stringify(email);
  document.querySelector('textarea').value = typeof(email)
});

// chrome.identity.getProfileUserInfo(function (info) {
//     email = info.email;
//     console.log(info);

// });

function startStopwatch() {
  if (!stopwatchInterval) {
    startTime = new Date().getTime() - elapsedPausedTime; 
    stopwatchInterval = setInterval(updateStopwatch, 1000);
  }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval); 
    elapsedPausedTime = new Date().getTime() - startTime; 
    stopwatchInterval = null; 
  }

  function resetStopwatch() {
    stopStopwatch(); // stop the interval
    elapsedPausedTime = 0; // reset the elapsed paused time variable
  }

     function updateStopwatch() {
        var currentTime = new Date().getTime();
        var elapsedTime = currentTime - startTime; 
        var seconds = Math.floor(elapsedTime / 1000) % 60; 
        var minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
        var hours = Math.floor(elapsedTime / 1000 / 60 / 60); 
        var displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds); 
      }
      
      function pad(number) {
        return (number < 10 ? "0" : "") + number;
      }
        

function log_click(click_target) {
    const str = "M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z"
    const regex = /d="([^"]+)"/
    const dMatch = click_target.match(regex)
    if (dMatch) {
        const dValue  = dMatch[1];
        if(dValue === str){
            question+=1
            console.log(email)
        }
    }

}

// normal event listener
document.addEventListener("click", (event) => {
    log_click(event.target.innerHTML);
});



chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const activeTab = tabs[0]; 
    const url = activeTab.url; 

    if(url === 'https://chatgpt.com/'){
      //document.querySelector('textarea').value = JSON.stringify(url);
    } else{

    }
})

const dataToSend = {
  "rank": 1,
  "name": "lll",
  "questions": 7,
  "active": false
}

// Sending POST request to Flask
fetch('http://127.0.0.1:5000/post', {
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'POST', 
  body: JSON.stringify(dataToSend)
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});