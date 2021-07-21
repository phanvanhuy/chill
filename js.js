const content = document.querySelector('.content');
const btn = document.querySelector('.btn');
const x = document.querySelector('.kk');
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

    x.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);


}
btn.addEventListener('click',()=>{
    getdata();
})




