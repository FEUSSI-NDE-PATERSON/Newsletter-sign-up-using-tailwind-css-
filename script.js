
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let messageToDisplay = document.querySelector('.display-outputMesaage') 
let resultHtml 
let input = document.querySelector('input')
let htmlElement = document.querySelector('body')




function emailVerification(e){
event.preventDefault()
 if (input.value.match(validRegex)) {
    if(input.value.includes('.com')){
     messageToDisplay.style.color = "green"
     messageToDisplay.textContent =  "Correct"
     displayResult()
     input.value=""
    }
}

 else{
    messageToDisplay.textContent =  "Incorrect"
 }

}
function displayResult(){
    resultHtml=`
    <body class="flex h-screen justify-center items-center bg-[#242742]">
        <div class="bg-white flex flex-col p-5 w-[250px]  rounded-lg"> 
        <img src="/assets/images/icon-list.svg" class="h-12 w-12"/>    
        <p class="my-4 text-[#ff6257] text-2xl">Thanks for subscribing!</p>
        <p class="text-xs leading-5">A confirmation email has been sent to <span class="text-[#242742] text-md text-bold">${input.value}</span>. please open it and click the button inside to confirm your subcription</p> 
        <button class="bg-[#242742] py-2 text-white rounded-lg mt-3 hover:bg-[#ff6257]">
        <a href="#" class="underlined-none">
        Dismiss message
        </a>
        </button>
        </div>
    </body>
`
htmlElement.innerHTML = resultHtml
}