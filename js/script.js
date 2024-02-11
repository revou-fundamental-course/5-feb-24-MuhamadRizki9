document.getElementById("konversi").onclick = tempConvert;
document.getElementById("reset").onclick = clearFrom;

function tempConvert(){
    var celcius = document.getElementById("celcius").value;
    var fahrenheit = document.getElementById("fahrenheit").value;

    if (celcius != ''){
        fahrenheit = (parseInt(celcius) * 9/5) + 32;
        kalkulasi = parseInt(celcius) + "°C * (9/5) + 32 =" + fahrenheit + "°F";
    } else{
        celcius = (parseInt(fahrenheit) - 32) * 5/9;
        kalkulasi = parseInt(fahrenheit) + "°C * (9/5) + 32 =" + celcius + "°F"; 
    }

    document.getElementById("celcius").value = parseInt(celcius).toFixed(1);
    document.getElementById("fahrenheit").value = parseInt(fahrenheit).toFixed(1); 
    document.getElementById("kalkulasi").value = kalkulasi;   
}

function clearFrom(){
    document.getElementById("celcius").value = '';
    document.getElementById("fahrenheit").value = '';
    document.getElementById("kalkulasi").value = '';
}
