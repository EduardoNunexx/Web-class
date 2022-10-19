const form = document.querySelector('#formSend')
const butt = document.querySelector('#btf')
const rdi =  document.querySelector('#agree')
const rdn = document.querySelector('#desagree')
const pass = document.querySelector('#password')
const passConfirm = document.querySelector('#passConfirm')
const yearSelect = document.querySelector('#year')
const mounthSelect = document.querySelector('#mounth')
const daySelect = document.querySelector('#day')
//const invalidDateMounth = document.querySelector('.invalidDateMounth')
//const invalidDateDay = document.querySelector('.invalidDateDay')
//const invalidDateYear = document.querySelector('.invalidDateYear')


rdn.addEventListener('click',notCheck)
rdi.addEventListener('click',check)
butt.addEventListener('click',valid)
mounthSelect.addEventListener('change',setDays)
daySelect.addEventListener('change',setYears)
function setDays(){
    let days
    daySelect.innerHTML=''
    if(mounthSelect.value=='April'){
        days=30
        for(let index=1;index<=days;index++){
            let option= new Option(index,index)
            daySelect.appendChild(option)
        }
    } else if(mounthSelect.value=='February'){
        days=29
        for(let index=1;index<=days;index++){
            let option= new Option(index,index)
            daySelect.appendChild(option)
        }
    }else{
        days=31
        for(let index=1;index<=days;index++){
            let option= new Option(index,index)
            daySelect.appendChild(option)
        }
    }
}
function setYears(){
    let year
    yearSelect.innerHTML=''
    if(mounthSelect.value=='February'&&daySelect.value=='29'){
        for(let index=1950;index<=2022;index++){
            if(index%4==0){
                let option= new Option(index,index) 
                yearSelect.appendChild(option)
            }
        }
    }else{
        for(let index=1950;index<=2022;index++){
        let option= new Option(index,index)
        yearSelect.appendChild(option)
        }
    }
}

for (let index = 1950; index <=2022; index++) {
    let option = new Option(index, index);
    yearSelect.appendChild(option);
}
//form.addEventListener('submit',valid)

function check(){
    if(rdi.checked){
        if(butt.disabled==true){
        butt.disabled=false}
    }else if(butt.disabled==false){
        butt.disabled=true
    }
}
function notCheck(){
    butt.disabled = true
}
function validEquals(inputPassword,inputConfirmPassowrd,event){
    if(inputPassword.value!=inputConfirmPassowrd.value){
        inputConfirmPassowrd.setCustomValidity("The passwords must be equals")
    }else{
        inputConfirmPassowrd.setCustomValidity("")
    }
}

function valid(event){
    validEquals(pass,passConfirm,event)
}




//.setCustomValidit
//. realizar a verificar a validação css
//option disable 
//usar o .value no select
//floating labels 
