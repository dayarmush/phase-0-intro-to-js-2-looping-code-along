function writeCards(names, event) {
    const thankYouCards = [];
    
      for (let i = 0; i < names.length; i++) {
        
          const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
          
          thankYouCards.push(message)
      }

    return thankYouCards;
       
  }
  
function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}