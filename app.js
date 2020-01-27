const username = document.getElementById('username');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

submit.addEventListener('click', () =>{
    
})
let toggle = true;

const toggleFunction = () => { 
    if (toggle) {
    console.log(`Hello`);
    toggle = false; 

    }else {
    console.log(`I am false.`);
    toggle = true }
}
toggleFunction()
toggleFunction()