// Your code here

//implement a function called saturdayFun. It should return a String like "This Saturday, I want to ....!" Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "roller-skate". 

function saturdayFun(activity="roller-skate"){
return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun());

function mondayWork (activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}

console.log(mondayWork());

function wrapAdjective(symbol = "*"){
    return function xyz(person = "a hard worker"){
        return `You are ${symbol}${person}${symbol}!`;
    }
}

console.log(wrapAdjective()());

console.log("hello");


wrapAdjective('||')('a dedicated programmer');



