const e=document.getElementById('email');
const p=document.getElementById('password');
const b=document.getElementById('button');

b.addEventListener('mouseover',(button)=>{
    let mail=e.value;
    let pass=p.value;
    let valid=/^([a-zA-Z0-9\._+)@([a-zA-Z0-9]+).([a-z]+)?/.test(mail) && /[a-zA-Z0-9]{8}/.test(pass);
    console.log(valid)

    if(!valid){
        button.target.classList.toggle('move');
        b.style.backgroundColor="red";
    }
    else{
        button.target.classList.toggle('stop');
        b.style.backgroundColor='green';
    }
})
