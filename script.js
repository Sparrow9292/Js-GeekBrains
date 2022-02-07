        'use strict';
        let tempC = 10;
        let tempF = (9 / 5) * tempC + 32;
        alert('Температура по шкале Фаренгейта: ' + tempF);

        'use strict'
        let name = 'Василий';
        let admin = name;
        console.log(name);

        'use strict'
        let result1 = 10 + 10 + "10"; // 10 плюс 10 получаем 20 и прибавляем 10 строчный получим 2010 
        let result2 = 10 + "10" + 10; // 10 плюс 10 строчную получим 1010 и прибавим 10 получим 101010 
        let result3 = 10 + 10 + +
        "10"; // 10 плюс 10 получим 20 и прибавляем 10 так как унарный +"10" из стрчного преобразует в числовое 
        let result4 = 10 / -""; // 10 делим на унарный минус получим бесконечное отрицательное число -infinity 
        let result5 = 10 / +"2,5"; // 10 делим на число с запятой и унарым плюсом получаем NaN
        console.log(result1); //с помощью console.log выводим result в консоль
        console.log(result2);
        console.log(result3);
        console.log(result4);
        console.log(result5);