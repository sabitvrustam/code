function srtConv(str) {
    let newStr = "";
    let space = " ";
    for (i = 0; i <= str.length - 1; i++) {
        if (i !== 0 && str[i] == " " && (str[i + 1] == "," || str[i + 1] == ".")) {
        } else if ((str[i] == "." || str[i] == ",") && str[i + 1] !== " ") {
            newStr += str[i] + space;
        } else if (str[i] == " " && str[i + 1] == " ") {
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(srtConv("Вот     пример , строки,в которой" +
    " используются знаки      препинания.После знаков должны стоять пробелы" +
    ", а перед знаками их быть не должно .    Если есть  ,  лишние подряд идущие пробелы," +
    " они должны быть устранены."));
    /*
Вот пример, строки, в которой используются знаки препинания.
После знаков должны стоять пробелы, а перед знаками их быть не должно.
Если есть, лишние подряд идущие пробелы, они должны быть устранены. 

*/