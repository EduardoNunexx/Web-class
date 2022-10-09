let twt = document.querySelector('.editable')
let cont= document.querySelector('.counter')
let twtM = document.querySelector('.editableM')
let contM= document.querySelector('.counterM')
//let btntwt= document.querySelector('.btn')
twt.addEventListener("input",start)
twtM.addEventListener("input",startM)
function start(){
    console.log('1')
    let inp = twt.value.length
    cont.innerHTML=140-inp
    if(inp>0){
        document.querySelector('.counter').style.display ='block'
    }else{
        document.querySelector('.counter').style.display ='none'
    }
    if(cont.innerHTML<0){
        cont.style.color="rgb(255, 0, 0)"
    }else if(cont.innerHTML<40){
        cont.style.color="rgb(255, 200, 0)"
    }else{
        cont.style.color='black'
    }
    //console.log(btntwt.disabled)
}
function startM(){
    let inp = twtM.value.length
    contM.innerHTML=140-inp
    if(inp>0){
        document.querySelector('.counterM').style.display ='block'
    }else{
        document.querySelector('.counterM').style.display ='none'
    }
    if(contM.innerHTML<0){
        contM.style.color="rgb(255, 0, 0)"
    }else if(contM.innerHTML<40){
        contM.style.color="rgb(255, 200, 0)"
    }else{
        contM.style.color='black'
    }
    //console.log(btntwt.disabled)
}
