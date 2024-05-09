var url = "https://restcountries.com/v3.1/all";
var getFun = function () {
    fetch(url)
        .then(function (response) {
        if (!response.ok) {
            throw new Error("Error in response");
        }
        return response.json();
    })
        .then(function (data) {
        console.log(data);
    })
        .catch(function (err) {
        console.error("data return erro", err);
    });
};
getFun();
