const gnerBtn=document.querySelector('#gnerBtn');
const copyBtn=document.querySelector('.copyBtn');
const passW=document.querySelector('.passW');
const pas=document.querySelector('.disablePassW');


gnerBtn.addEventListener('click',function(){
    const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase="abcdefghijklmnopqrstuvwxyz";
    const number="0123456789";
    const symbols="@#$%^&*()_-+{}[]:;'.,<>/";
    let pass="";
    pass+=upperCase[Math.floor(Math.random()*26)];
    pass+=lowerCase[Math.floor(Math.random()*26)];
    pass+=number[Math.floor(Math.random()*10)];
    pass+=symbols[Math.floor(Math.random()*24)];
    let allChar=upperCase+lowerCase+number+symbols;
    let t=8;
    while(t>0){
        pass+=allChar[Math.floor(Math.random()*allChar.length)];
        t--;
    }
    pas.classList.remove('disablePassW')
    pas.classList.add('pas')
    passW.innerHTML=pass
    
},false)

copyBtn.addEventListener('click',function(){

    navigator.clipboard.writeText(passW.innerHTML)
},false)