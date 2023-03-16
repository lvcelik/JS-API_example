var request = new XMLHttpRequest();
request.open('GET',
'https://lvcelik.github.io/JS-API_example/mydata.json'
,true);

request.onload = function(result) {
    console.log(result);

    document.write(result);
};

request.send();
