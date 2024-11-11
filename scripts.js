let question = 0;
let active = false;
let url = window.location.href
let nameUser;
let duration;


function log_click(click_target) {
    const str = "M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z"
    const regex = /d="([^"]+)"/
    const dMatch = click_target.match(regex)
    if (dMatch) {
        const dValue  = dMatch[1];
        if(dValue === str){
          question+=1
          console.log(question)
        }
    }

}
// normal event listener
document.addEventListener("click", (event) => {
    log_click(event.target.innerHTML);
});



if(url == 'https://chatgpt.com/'){
    active = true;
    setInterval(() => {
        duration += 1
    }, 60000)  

} else{
    active = false;
    duration = 0
}

let nameAndEmail = document.body.innerHTML.match(`window\.__remixContext.*?"name":"([^\"]+)","email":"([^\"]+)"`).slice(1)

const testData = {  rank: 2,
  name: nameAndEmail[0],
  score : question,
  active: active,
  duration: 0,}

fetch('http://127.0.0.1:5000/post', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({data: testData})
})
.then(response => response.text())
.then(result => {
  console.log(result);
})
.catch(error => {
  console.error('Error:', error);
});

// fetch("http://localhost:5000/get").then(console.log)