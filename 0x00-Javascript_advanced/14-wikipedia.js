function createElement(data) {
    const para = document.createElement('p');
    para.innerHTML = data;
    document.body.append(para);
}

function queryWikipedia(callback) {
    const req = new XMLHttpRequest();
    req.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    req.onload = function() {
        callback(req.responseText);
    };
    req.send();
}

queryWikipedia(createElement);
