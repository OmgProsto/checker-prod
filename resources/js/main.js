
submitFooterForm = (url) => {
    let inputName = document.getElementById("input__name")
    let inputPhone = document.getElementById("input__phone")
    let csrf = document.querySelector('meta[name="csrf-token"]').content
    console.log(csrf);
    let data = {
        "name": inputName.value,
        "phone": inputPhone.value
    };

    data = JSON.stringify(data)
    console.log(data)
    console.log(url)
    fetch( url, {
        method: 'POST',
        headers: {
            'X-CSRF-TOKEN': csrf,
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
        body: data
    }).then(function(response){

        if (response.status != 200) {
            let error = new Error(response.statusText);
            error.response = response;
            throw error
        }
        alert("малява нарисована")
        console.log(response)

        inputName.value = ''
        inputPhone.value = ''
    }).catch(function(error){
        alert("ошибка улыбка ")
        console.log(error)
    });
    return false;
}
