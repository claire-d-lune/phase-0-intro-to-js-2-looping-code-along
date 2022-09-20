

function writeCards (array) {
    let thankYous = []
    for(let i = 0; i < array.length; i++) 
    {
        thankYous.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
    }
    return thankYous;
}


function countDown(num) {
    for (let i = num; i >= 0; i-- ) {
        console.log(num)
        num = num - 1
    }
}

countDown(10)