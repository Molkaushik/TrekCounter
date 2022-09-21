
let countEl = document.getElementById("count-el");
let trekCount = document.getElementById("trek-count");
let count = 0;
let totalTreks = 0;

function increment(){
    count += 1;
    countEl.textContent = count;
}

function save(){
    totalTreks += count;
    trekCount.textContent = "Total Treks: " + totalTreks;
    count = 0;
    countEl.textContent = 0;
}

function clearHist(){
    totalTreks = 0;
    trekCount.textContent = "Total Treks: 0";
}