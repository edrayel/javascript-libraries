function xhr(_url, _requestMethod, _formData) {
    var xhr = new XMLHttpRequest();
    xhr.open(_requestMethod, _url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(_formData);
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log(JSON.parse(this.responseText));
            return 0;
        } else {
            console.log(JSON.parse(this.responseText));
        }
    }
}