 // 1-10. Sonlarning musbat, manfiy yoki nolga tengligini tekshirish
// 1-masala
let num1 = +prompt("1-masala")
if (num1 > 0) {
    console.log("1")
} 
// 2-masala
let num2 = +prompt("2-masala")
if (num2<0) {
    console.log("-1")
} else {
    console.log("0")
}
// 3-masala
let num3 = +prompt("3-masala")
if (num3==0) {
    console.log("1")
} else {
    console.log("0")
}
// 4-masala
let num4 = +prompt("4-masala")
if (num4>0 && num4>100) {
    console.log("1")
}
// 5-masala
let num5 = +prompt("5-masala")
if (num5<0 && num5<10) {
    console.log("-1")
}
// 6-masala
let num6 = +prompt("6-masala")
if (num6>0) {
    num6 = num6**2
    console.log(num6)
} else {
    console.log("0")
}
// 7-masala
let num7 = +prompt("7-masala")
if (num7<0) {
    num7 = -num7
    console.log(num7)
}
// 8-masala
let num8 = +prompt("8-masala")
if (num8==0) {
    console.log("10")
} else {
    console.log(num8)
}
// 9-masala
let num9 = +prompt("9-masala")
if (num9>1) {
    num9 = num9**3
    console.log(num9)
}
// 10-masala 
let num10 = +prompt("10-masala")
if (num10<0) {
    console.log("-10")
} else {
    console.log("10")
}
// 11-20. Juft va toq sonlar bilan ishlash
// 11-masala
let num11 = +prompt("11-masala")
if (num11%2==0) {
    console.log("2")
} else {
    console.log("1")
}
// 12-masala
let num12 = +prompt("12-masala")
if (num12%2==1) {
    console.log("3")
} else {
    console.log("4")
}
// 13-masala 
let num13 = +prompt("13-masala")
if (num13%2==0 && num13>10) {
    console.log("1")
}
// 14-masala
let num14 = +prompt("14-masala")
if (num14%2==1 && num14<0) {
    console.log("-1")
}
// 15-masala
let num15 = +prompt("15-masala")
if (num15%2==0 && num15%5==0) {
    console.log("100")
}
// 16-masala
let num16 = +prompt("16-masala")
if (num16%2==1) {
    num16 = num16**2
    console.log(num16)
}
// 17-masala
let num17 = +prompt("17-masala")
if (num17%2==0 && num17>0) {
    num17 = num17**3
    console.log(num17)
}
// 18-masala
let num18 = +prompt("18-masala")
if (num18%2==0 && num18>20) {
    console.log("50")
} else {
    console.log("-50")
}
// 19-masala
let num19 = +prompt("19-masala")
if (num19%2==1 && num19&7==0) {
    console.log("7")
}
// 20-masala
let num20 = +prompt("20-masala")
if (num20%2==0 && num20<0) {
    console.log("-20")
}
// 21-30. Ikki son o‘rtasidagi munosabatlarni tekshirish
// 21-masala
let num21_1 = +prompt("21.1-masala")
let num21_2 = +prompt("21.2-masala")
if (num21_1 == num21_2) {
    console.log("1")
} else {
    console.log("0")
}
// 22-masala
let num22_1 = +prompt("22.1-masala")
let num22_2 = +prompt("22.2-masala")
if (num22_1 > num22_2) {
    console.log("2")
} else {
    console.log("3")
}
// 23-masala
let num23_1 = +prompt("23.1-masala")
let num23_2 = +prompt("23.2-masala")
if (num23_1 < num23_2 && num23_1 > 0) {
    console.log("10")
}
// 24-masala
let num24_1 = +prompt("24.1-masala")
let num24_2 = +prompt("24.2-masala")
if (num24_1 > num24_2 && num24_1%2==1) {
    console.log("5")
}
// 25-masala
let num25_1 = +prompt("25.1-masala")
let num25_2 = +prompt("25.2-masala")
if (num25_1>0 && num25_2>0) {
    full = num25_1 + num25_2;
    console.log(full)
}
// 26-masala
let num26_1 = +prompt("26.1-masala")
let num26_2 = +prompt("26.2-masala")
if (num26_1 < num26_2 && num26_1%2==0) {
    console.log("-1")
}
// 27-masala
let num27_1 = +prompt("27.1-masala")
let num27_2 = +prompt("27.2-masala")
if (num27_1 == num27_2) {
    console.log("100")
} else {
    console.log("-100")
}
// 28-masala
let num28_1 = +prompt("28.1-masala")
let num28_2 = +prompt("28.2-masala")
if (num28_1%10==0 && num28_2%5==0) {
    console.log("50")
}
// 29-masala
let num29_1 = +prompt("29.1-masala")
let num29_2 = +prompt("29.2-masala")
if (num29_1== 2*num29_2) {
    console.log("2")
}
// 30-masala
let num30_1 = +prompt("30.1-masala")
let num30_2 = +prompt("30.2-masala")
if (num30_1 < num30_2 && num30_2%2==1) {
    console.log("-10")
}
// 31-40. Shartli kompleks tekshiruvlar
// 31-masala
let num31 = +prompt("31-masala")
if (num31>0 && num31%3==0) {
    console.log("3")
} else {
    console.log("0")
}
// 32-masala 
let num32 = +prompt("32-masala")
if (num32<0 && num32%2==0) {
    console.log("-2")
} 
// 33-masala
let num33 = +prompt("33-masala")
if (num33>0 && num33%5==0) {
    console.log("3")
} else {
    console.log("0")
} 
// 34-masala
let num34 = +prompt("34-masala")
num34_1 = num34**2
if (num34>0 && num34<10) {
console.log(num34_1)
}
// 35-masala
let num35 = +prompt("35-masala")
if (num35%2==0 && num35%4==0) {
    console.log("1")
}
// 36-masala
let num36 = +prompt("36-masala")
if (num36%2==1 && num36>15) {
    console.log("15")
}
// 37-masala
lrt num37 = +prompt("37-masala")
if (num37%6==0) {
    console.log("6")
} else {
    console.log("1")
}
// 38-masala
let num38 = +prompt("38-masala")
if (num38>0 && num38%7==0) {
    console.log("14")
}
// 39-masala 
let num39 = +prompt("39-masala")
if (num39>0 || num39==0) {
    console.log("0")
} else {
    console.log("-5")
}
// 40-masala
let num40 = +prompt("40-masala")
if (num40<0 && num40&2!=0) {
    console.log("-3")
}