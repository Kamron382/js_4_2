let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let h1 = document.querySelector('h1')
let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')
let btn0 = document.querySelector('.btn0')
btn0.addEventListener('click' , ()=>{
    h1.textContent = inp1.value
})
btn1.addEventListener('click', ()=>{
    inp1.value++
    h1.textContent = inp1.value
})
btn2.addEventListener('click', ()=>{
    inp1.value--
    h1.textContent = inp1.value
})
inp2.addEventListener('mousetouch', ()=>{
    h1.color = inp2.value
})