
submitFooterForm = (url) => {
    let inputName = document.getElementById("input__name").value
    let inputPhone = document.getElementById("input__phone").value
    let data = {
        "name": inputName,
        "phone": inputPhone
    }
    let jsonData = JSON.stringify(data)

    fetch( url, {
        method: 'POST',
        body: jsonData
    }).then(function(response){
        alert("малява нарисована")
    }).catch(function(error){
        alert("ошибка улыбка")
    });
    return false;
}
