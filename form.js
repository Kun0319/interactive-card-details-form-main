// 設定輸入不符合的格式時顯示邊框紅色提醒 還有提醒標語
function must4() {
    let cardnumber = document.getElementById("cardnumber").value;
    let bordercolor = document.getElementById("cardnumber")
    if (cardnumber.length < 16) {
        console.log(document.getElementById("cardnumber"));
        bordercolor.style.borderColor = "red";
    } else if (cardnumber.length == 16) {
        bordercolor.style.borderColor = "black";
    }
}