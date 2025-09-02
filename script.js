//heart-count

const heartArray = document.getElementsByClassName('fa-heart')
let heartCount = 0;
for (let i = 0; i < heartArray.length; i++) {
    document.getElementsByClassName('fa-heart')[i].addEventListener('click', function () {

        heartCount = heartCount + 1;
        document.getElementById('heart-count').innerText = heartCount;
        return;
    })

}



//get title
const titleArray= document.getElementsByClassName('title')
function getTitle(i){
return titleArray[i].innerText;
}
//get number
const numberArray= document.getElementsByClassName('number')
function getNumber(i){
return numberArray[i].innerText;
}

//call
const callArray = document.getElementsByClassName('call-btn')
console.log(callArray)
let coins = document.getElementById('coins').innerText
for(let i=0; i<callArray.length ;i++){
    callArray[i].addEventListener('click', function(){
         
    if(coins>=20){
        alert('📞 Calling ' + getTitle(i)+ ' ' + getNumber(i)+ '...')
        coins = coins - 20;
        document.getElementById('coins').innerText = coins;
        const date= new Date().toLocaleTimeString();
        const div= document.createElement('div');
        div.innerHTML= `
          <div class="data flex justify-between items-center p-5 border-2 border-gray-200 rounded-2xl">
                        <div>
                            <h2 class="font-semibold text-[18px]">${getTitle(i)}</h2>
                            <p class="font-normal text-[18px] text-[#5C5C5C]">${getNumber(i)}</p>
                        </div>
                        <div>
                            <p class="font-normal text-[18px]">${date}</p>
                        </div>
                    </div>
        `
        document.getElementById('data-container').appendChild(div)

        return;
    }
    else{
        alert('❌You do not have enough coins. 20 coins is required to make a call.')
        return;
    }

    })
}

//clear history 
document.getElementById('clear-btn').addEventListener('click', function(){
    document.getElementById('data-container').innerHTML='';
})

//copy copy 
const copyArray = document.getElementsByClassName('copy-btn')
let copyCount = 0;
for(let i=0; i< copyArray.length; i++){
    copyArray[i].addEventListener('click', function(){
        navigator.clipboard.writeText(getNumber(i))
        .then(function(){
            alert('✔ Copied: '+getNumber(i))
            copyCount = copyCount + 1;
            document.getElementById('copy-box').innerText = copyCount;
        })
        .catch(function(){
            alert('⚠ Failed to copy!')
        })
    })
}











