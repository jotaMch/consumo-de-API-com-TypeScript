const dataList = document.getElementById("dataList");

function getCountryData() {
    var apiUrl = 'https://restcountries.com/v3.1/all';

    
    fetch(apiUrl)
        .then(response => {
            if(!response.ok){
                throw new Error("Erroe in response")
            }
            return response.json()
        })
        .then(data => {
            for(let i = 0; i <= 50; i++){
                const city = data[i].name.common
                console.log(city)
                const list = document.createElement('li');
                list.innerHTML = city;
                dataList.appendChild(list);
            }
        })
        .catch(error => {
            console.error("error in data", error)
        })
}

getCountryData();


