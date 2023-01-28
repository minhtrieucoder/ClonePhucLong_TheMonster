const btnOpen = document.querySelector('.js-btnOpen');
const btnClose = document.querySelector('.js-btnClose');
const modal = document.querySelector('.js-modal');
const btnSignin = document.querySelector('.js-btnSignin');
const inputPhone = document.querySelector('.js-inputPhone');

console.log(btnOpen);
console.log(btnClose);
console.log(modal);
btnOpen.addEventListener('click', function() {
    modal.classList.add('open');
})

btnClose.addEventListener('click', function() {
    modal.classList.remove('open');
})


// Xu ly thong tin so dien thoai nhap vao
// btnSignin.addEventListener('click', function(){
//     const value = inputPhone.value;
//     console.log(value)
//     if (value = "")
//         alert("Vui lòng nhập số điện thoại bạn.");
//     else 
//         alert("Đã nhập được thông tin");
// })