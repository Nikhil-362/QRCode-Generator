const imgClass = document.querySelector(".wrapper");  //wrapper Class
gbutton = imgClass.querySelector(".btn");       //Button class
qrInput = imgClass.querySelector(".inp");         //input class
qrImg = imgClass.querySelector(".image");         //input class


gbutton.addEventListener("click", ()=>{
    let qrValue = qrInput.value;

    if(!qrValue) return;
    gbutton.innerText =`Generating QR Code.....`
    qrImg.src =`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    
    qrImg.addEventListener("load", ()=>{
         imgClass.classList.add("active");
    gbutton.innerText =`Generate QR Code`

    })
   
});

qrInput.addEventListener("keyup", ()=>{
    if(!qrInput.value){
        imgClass.classList.remove('active');
    }
})
