function hello(req, res) {
    res.send("hello");
}

// The function calculates the sum of two numbers, a and b, obtained as query data
function sum(req, res) {
    const { a, b } = req.query;
    res.send({
        sum: a + b
    })
}
//check for prime numbers , obtained as query data
function checkPrimeNumbers(req, res) {
    const { number } = req.query;

    const a =number;//parse number

    const error = "not a prime number";
    const successful = "a prime number";

    if (a < 2) { //"a number less than 2 is not a prime number
        return res.send({
            statusbar: error
        });
    }
    if (a == 2) { //2 is a prime number
        return res.send({
            statusbar: successful
        });
    }
    else {
        for (let i = 2; i <= Math.sqrt(a); i++) { //The category of numbers 1 and itself
            if (a % i == 0) {//if divisible, it means it is not a prime number
                return res.send({ statusbar: error });
            }
        }
        res.send({ statusbar: successful });
    }
}

function maxNumber(req,res){
    const {arrays} = req.body; //object with key 'arrays' containing an array
    let max= arrays[0];//assuming the first position is the largest number
    for(let i=1;i<arrays.length;i++){
        if(arrays[i]>max){
            max=arrays[i];//"Find the maximum number and rearrange it for 'max'
        }
    }
    res.send({ statusbar: max });
}

module.exports = {
    hello,
    sum,
    checkPrimeNumbers,
    maxNumber
}