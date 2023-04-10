let btnOpenLoanCalculate = document.querySelector(".loanCalculate");
let btnOpenDepositCalculate = document.querySelector(".depositCalculate");

// sectii
let sectionCredit =document.querySelector(".credit_calculator");
let sectionDepozit = document.querySelector(".calculare_Depozit");

//butoane sectie credit
let sumaImprumutului = document.querySelector(".sumaImprumutului");
let valutaCredit = document.querySelector("#valuta");
let perioadaNum = document.querySelector(".terminCredit");
let perioadaLuna = document.querySelector("#perioadaRambursare");
let rataDobanzi = document.querySelector(".rataDobanzi");
let btnCalculeazaCredit = document.querySelector(".calculeaza");
let btnResetCredit = document.querySelector(".resetLoan");
let btnCloseCredit = document.querySelector("#closeLoan");
// text sectie credit
let textPlataLunara = document.querySelector(".sumaLunara");
let textSumaLaRambursare = document.querySelector(".sumaLaRambursare");

//butoane sectie depozit
let sumaDepozitului = document.querySelector(".sumaDepozitului");
let valutaDepozit = document.querySelector("#valuta");
let periodaDepozitNum = document.querySelector(".terminDepozit");
let perioadaDepozitLuna = document.querySelector("#perioadaDepozitare");
let procentDobanda = document.querySelector(".procentDobanda");
let btnCalculeazaDepozit = document.querySelector(".calculeazaDepozit");
let btnResetDepozit = document.querySelector(".resetDepozit");
let btnCloseDepozit = document.querySelector(".closeDepozit");
// text sectie depozit
let textVenitLunar = document.querySelector(".sumaVenitLunar");
let textVenitTotal = document.querySelector(".depozitLaRambursare")

 //fucntii 
const calculateRataLunara = (sumaCredit, rataDobanzi, terminCredit) => {
    let rataLunara = (sumaCredit/terminCredit) + sumaCredit*((rataDobanzi/100)/12);
    return Math.floor(rataLunara);
}
const calculateSumaReintoarsa = (rataLunara, terminCredit) => {
    let sumaLaReintoarcere = rataLunara*terminCredit;
    return sumaLaReintoarcere;
}

const calculateRataLunaraDepozit = (sumaDepozitului, procentDobanda) => {
    let procentLunar = procentDobanda/100/12;
    let venitLunar = procentLunar*sumaDepozitului;
    return venitLunar;
}

const calculateProfit = (sumaDepozitului, procentDobanda, terminDepozit) =>{
    let venitLunar = calculateRataLunaraDepozit(sumaDepozitului, procentDobanda);
    let profitTotal = venitLunar * terminDepozit + sumaDepozitului;
    return profitTotal;
}

//ascultatori
btnOpenLoanCalculate.addEventListener('click', function(){
    sectionCredit.classList.remove("hidden");
    console.log("click");
})
btnOpenDepositCalculate.addEventListener('click', function(){
    sectionDepozit.classList.remove("hidden")
    console.log("click");
})

btnCalculeazaCredit.addEventListener("click", function(){
    console.log("click");
    sumaImprumutului = Number(sumaImprumutului.value);
    terminCredit = Number(perioadaNum.value);
    valuta = valutaCredit.value;
    perioadaRambursare = (perioadaLuna.value);
    rataDobanzi = Number(rataDobanzi.value);
    let rataLunara = calculateRataLunara(sumaImprumutului, rataDobanzi, terminCredit);
    textPlataLunara.textContent = `${rataLunara} ${valuta}`;
    let sumaLaReintoarcere = calculateSumaReintoarsa(rataLunara, terminCredit);
    textSumaLaRambursare.textContent = `${sumaLaReintoarcere} ${valuta}`
        if(perioadaRambursare == "ani"){
            sumaLaReintoarcere = rataLunara*terminCredit*12;
        }
 })
btnResetCredit.addEventListener('click', function(){
    document.querySelector(".formCredit").reset();
    textPlataLunara.textContent = 0;
    textSumaLaRambursare.textContent = 0;
})
btnCloseCredit.addEventListener('click', function(){
    sectionCredit.classList.add("hidden");
    console.log("close");
})

btnCalculeazaDepozit.addEventListener("click", function(){
    console.log("calculeaza deposit");
    sumaDepozitului = Number(sumaDepozitului.value);
    terminDepozit = Number(periodaDepozitNum.value);
    valuta = valutaDepozit.value;
    perioadaDepozitare = perioadaDepozitLuna.value;
    procentDobanda = Number(procentDobanda.value);
    let rataLunaraDepozit = calculateRataLunaraDepozit(sumaDepozitului, procentDobanda, terminDepozit);
    textVenitLunar.textContent = `${rataLunaraDepozit} ${valuta}`;
    let depozitLaRambursare = calculateProfit(rataLunaraDepozit, terminDepozit, sumaDepozitului)
    textVenitTotal.textContent = `${depozitLaRambursare} ${valuta}`;
    if(perioadaDepozitare == "ani"){
        depozitLaRambursare = rataLunaraDepozit*terminDepozit + sumaDepozitului;
    }
})
btnResetDepozit.addEventListener('click', function(){
    document.querySelector(".formDepozit").reset();
    textVenitLunar.textContent = 0;
    textVenitTotal.textContent = 0;
})
btnCloseDepozit.addEventListener('click', function(){
    sectionDepozit.classList.add("hidden");
    console.log("close");
})
