function xhrRequest() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const response = this.responseText
            console.log(response)
        } else if (this.readyState == 4 && this.status !=200) {
            console.log('Error happened!! 😭😭')
        }
    };
    xhr.open("GET", "https://jsonplaceholder.typicode.com/comments");
    xhr.send();
}

xhrRequest()