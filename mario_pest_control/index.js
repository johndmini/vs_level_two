// Goomba Bounty Specifics

const goomba = document["goombacounter"]
const goombaPrice = document["goombaprice"]

goomba.addEventListener('input', function(e){
    e.preventDefault()

    let goombaInput = parseInt(goomba.goombaCount.value)
    let goombaMoney = ((goombaInput) * 5 )
    goombaPrice.goombabounty.value = `${goombaMoney} Coins`
})

// Bob-Omb Bounty Specifics

const bob = document["bobcounter"]
const bobPrice = document["bobprice"]

bob.addEventListener('input', function(e) {
    e.preventDefault()

    let bobInput = parseInt(bob.bobCount.value)
    let bobMoney = ((bobInput) * 7)
    bobPrice.bobbounty.value = `${bobMoney} Coins`
})

// Cheep-Cheep Bounty Specifics

const cheep = document["cheepcounter"]
const cheepPrice = document["cheepprice"]

cheep.addEventListener('input', function(e){
    e.preventDefault()

    let cheepInput = parseInt(cheep.cheepCount.value)
    let cheepMoney = ((cheepInput) * 11)
    cheepPrice.cheepbounty.value = `${cheepMoney} Coins`
})

// Total Bounty Specifics

const total = document["totalprice"]

total.addEventListener('submit', function(e){
    e.preventDefault()

    let totalPrice = parseInt(goombaPrice.goombabounty.value) + parseInt(bobPrice.bobbounty.value) + parseInt(cheepPrice.cheepbounty.value);
    total.totalbounty.value = `${totalPrice} Coins`
    console.log(total.totalbounty.value)
})
