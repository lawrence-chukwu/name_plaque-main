// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');
const cmdPrompt = document.querySelector('.display-output');
const buySubmit = document.querySelector('.buy-submit');


// Refactoring with Arrow Function
const countLeters = (some_data) =>{
  const price = some_data.slice(0,15).replaceAll(' ', '').length * 5; // price of each letter
  userLeterPreview.textContent = some_data.slice(0,15);
  userPricePreview.textContent = '$'+price

  if (userInput.value.length > 15){
    cmdPrompt.textContent = 'You had 15 character(s) in stcock, and you have exceeded the limit by ' + (userInput.value.length - 15) + ' character(s)';
    cmdPrompt.style.color = 'yellow';
  }

  else if ((userInput.value.length) <= 15){
    cmdPrompt.textContent = 'You have ' + (15 - userInput.value.length) + ' characters remaining';
    cmdPrompt.style.color = 'green';
  }
  
}

userInput.oninput = (e)=>{
  countLeters(e.target.value)
}

const buyNow = () => {
  const optCount = userInput.value.replaceAll(' ', '').length;
  
  
  if (userInput.value === 'your name'){
    cmdPrompt.textContent = 'Kindly enter your custom letter(s)';
    cmdPrompt.style.color = 'navyblue';
    userInput.value = '';
  }
  
  else if (optCount === 0){
    cmdPrompt.textContent = 'Kindly input in your letter(s)';  
    cmdPrompt.style.color = 'tomato';
    
  }
  else if (optCount <= (15) ){
    cmdPrompt.textContent = 'You have to pay $'+ (optCount * 5) + ' for the ' + optCount + ' letter(s)';  
    cmdPrompt.style.color = 'skyblue';
    userInput.value = '';
  }
  

}

buySubmit.addEventListener('click', buyNow)
