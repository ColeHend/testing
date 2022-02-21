module.exports = {
    returnTwo: ()=>2,
    greeting: (name)=>`Hello, ${name}.`,
    add:(num1,num2)=>{
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            return num1+num2
        }else{ return TypeError}
        },
    subtract:(num1,num2)=>{
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            return num1-num2
        }else{ return TypeError}
        },
    multiply:(num1,num2)=>{
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            return num1*num2
        }else{ return TypeError}
        },
    divide:(num1,num2)=>{
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            return num1/num2
        }else{ return TypeError}
        }

    
}