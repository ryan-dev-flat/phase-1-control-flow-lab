function scuberGreetingForFeet(someValue){
  let result;
  if (someValue <= 400) {
    result = `This one is on me!`;
  } else if (someValue > 400 && someValue <= 2000) {
    result = `That will be twenty bucks.`;
  } else if (someValue > 2000 && someValue <= 2500) {
    result = `I will gladly take your thirty bucks.`;
  } else {
    result = `No can do.`
  }
  return result;
}

// Function to check the city
function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// Function to respond based on the tip
function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
