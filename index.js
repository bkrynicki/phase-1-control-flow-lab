function scuberGreetingForFeet(distanceFeet){
  // Write your code here!
  if (distanceFeet > 2500){
    return `No can do.`
  } else if (distanceFeet < 400){
      return `This one is on me!`
  } else if (distanceFeet > 2000){
      return `I will gladly take your thirty bucks.`
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? "Ok, sounds good." : "No go."
  
}
ternaryCheckCity('NYC')
ternaryCheckCity('Pittsburgh')

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case 'generous':
      return `Thank you so much.`
      
    case 'not as generous':
      return `Thank you.`
      
    case 'thanks for everything':
      return `Bye.`
      

  }
}