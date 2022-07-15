let score = 300;
let tasainteres = 0;
let total = 0;
let suma = 0;
let saldorestante = 0;
let cuotaM = 0;
if (score == 300 && score <= 619) {
    tasainteres = 0.25;
    total = saldorestante / tasainteres + cuotaM;
    console.log(total);
}
else if (score == 620 && score <= 649) {
    tasainteres = 0.15;
    total = saldorestante / tasainteres + cuotaM;
    console.log(total);
}
else if (score == 650 && score <= 749) {
    tasainteres = 0.08;
    total = saldorestante / tasainteres + cuotaM;
    console.log(total);
}
else if (score >= 750) {
    tasainteres = 0.05;
    total = saldorestante / tasainteres + cuotaM;
    console.log(total);
}
else {
    console.log("no cumple con los requisitos");
}
//# sourceMappingURL=interes.js.map