function showTime() {

    //Date = Representa um único momento no tempo. São baseados no valor que é o número de milissegundos;
    let date = new Date()

    //getHours() = Retorna a hora 0 a 23hour;
    let h = date.getHours()

    //getMinutes() = Retorna a minuto de 0 a 59min;
    let m = date.getMinutes()

    //getSeconds() = Retorna a segundo de 0 a 59sec;
    let s = date.getSeconds()

    //Período do dia, default "AM";
    let session = "AM"

    //Condição para transformar 00:00 em 12:00;
    if(h == 0) {

    //Atribuir 12 na Hora, que seria 00:00;
        h = 12
    }

    //Condição para transformar os números maiores que 12 (Meio dia) em números de 1 a 12;
    if(h > 12) {
    
    //Ex: 13:00 da tarde no Brasil é 01:00 PM nos EUA, ou seja, 13 - 12 = 01:00;
        h = h - 12

    //Após o cálculo, atribuir "PM" no session;
        session = "PM"
    }

    //Se h < 10 acrescentar um 0 atrás do número;
    h = (h < 10) ? "0" + h : h

    //Se m < 10 acrescentar um 0 atrás do número;
    m = (m < 10) ? "0" + m : m

    //Se s < 10 acrescentar um 0 atrás do número;
    s = (s < 10) ? "0" + s : s

    const time = h + ":" + m + ":" + s + " " + session

    document.querySelector("#myClockDisplay").innerHTML = time;
    document.querySelector("#myClockDisplay").textContent = time;

    setTimeout(showTime, 1000)
}

showTime()