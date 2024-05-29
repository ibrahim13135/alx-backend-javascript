function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        resolve("Response from API");
    });
}


const response = getResponseFromAPI();
console.log(response instanceof Promise);
