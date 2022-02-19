const form = document["my-form"];

form.addEventListener("submit", function(e) {
    e.preventDefault();


    let travelChecked= []
    let dietChecked= []
    for (let i = 0; i < form.travel.length; i++) {
        if(form.travel[i].checked) {
            travelChecked.push(form.travel[i].value);
        }
    }
    for (let i = 0; i < form.diet.length; i++) {
        if(form.diet[i].checked) {
            dietChecked.push(form.diet[i].value);
        }
    }

    alert(`First Name: ${form.firstName.value}\nM.I: ${form.middleName.value}\nLast Name: ${form.lastName.value}\nAge: ${form.age.value}\nGender: ${form.gender.value}\nTravel Location/s: ${travelChecked}\nDietary Preferences: ${dietChecked}`)
})