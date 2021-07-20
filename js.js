const content = document.querySelector('.content');
const btn = document.querySelector('.btn');

getdata();

function getdata(){

    const config = {
        headers: {
            'Accept': 'application/json'
          }
    }
    const url='https://icanhazdadjoke.com/';
    fetch(url,config).then(data=>data.json()).then(dd=>{
        // console.log(dd.joke);
        content.innerHTML=dd.joke;
    });

}
btn.addEventListener('click',()=>{
    getdata();
})

setInterval(getdata,10000);


