function hello(req,res){
 res.send("hello");
}

// The function calculates the sum of two numbers, a and b, obtained as query data
function sum(req,res){
    const {a,b} = req.query;
    res.send({
        sum:a+b
    })
}

module.exports={
    hello,
    sum
}