function addition(num1, num2){ 
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        throw new Error('What you put in the argument is not a number')
    }
    return num1 + num2;
}

try {
    addition('1', 2)
} catch(e) {
    console.log(e)
} 

const users = {
    username: 'sam',
    password: '123456'
}

function login(username, password){
    if(username !== users.username || password !== users.password){
        throw new Error('incorrect login username or password')
    } else {
        console.log('login success')
    }
}

try {
    login('sam', '123456')
} catch(e) {
    console.log(e)
}
