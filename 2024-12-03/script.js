// Globale Variablen für Eingaben und Kosten
let nameInput = 'unbekannt';
let age = 0;
let apples = 0;
let potatoes = 0;
let chocolates = 0;
let eggs = 0;
let luckyDiscount = false;
let totalCost = 0;

// Event Listener für den Berechnungsbutton
document.getElementById('calculateButton').addEventListener('click', function () {
    // Grundaufgabe: Werte aus den Eingabefeldern holen
    nameInput = document.getElementById('name').value.trim();
    age = parseInt(document.getElementById('age').value, 10);
    console.info(typeof document.getElementById('age').value)
    console.info(typeof parseInt(document.getElementById('age').value, 10))
    apples = parseInt(document.getElementById('apples').value, 10) || 0;
    potatoes = parseFloat(document.getElementById('potatoes').value) || 0;
    chocolates = parseInt(document.getElementById('chocolates').value, 10) || 0;
    eggs = parseInt(document.getElementById('eggs').value, 10) || 0;
    luckyDiscount = document.getElementById('luckyDiscount').checked;

    // Grundaufgabe: Preise berechnen
    const appleCost = apples * 0.5;
    let potatoCost = potatoes * 1.2;
    const chocolateCost = (chocolates - Math.floor(chocolates / 3)) * 0.8; // Jeder dritte gratis
    const eggDozens = Math.floor(eggs / 12);
    const singleEggs = eggs % 12;
    const eggCost = eggDozens * 2.5 + singleEggs * 0.25;

    // Advanced Aufgabe: Rabatt für Kartoffeln am Montag
    const today = new Date().getDay(); // 0 = Sonntag, 1 = Montag, ...
    if (today === 1) { // Montag
        potatoCost *= 0.9; // 10% Rabatt
    }

    // Grundaufgabe: Gesamtkosten berechnen
    totalCost = appleCost + potatoCost + chocolateCost + eggCost;

    // Grundaufgabe: Glückszahl-Rabatt
    let discount = 0;
    if (luckyDiscount && totalCost % 7 === 0) {
        discount = totalCost * 0.1; // 10% Rabatt
        totalCost -= discount;
    }

    // Advanced Aufgabe: Altersbasierte Rabatte
    let ageDiscount = 0; // Neuer Rabatt für das Alter
    if (age < 12) {
        ageDiscount = totalCost * 0.5; // 50% Rabatt für Kinder
        totalCost -= ageDiscount;
    } else if (age >= 65) {
        ageDiscount = totalCost * 0.2; // 20% Rabatt für Senioren
        totalCost -= ageDiscount;
    }

    // Ergebnis anzeigen
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Kundenname:</strong> ${nameInput || 'Unbekannt'}</p>
        <p><strong>Gesamtsumme vor Rabatten:</strong> ${(appleCost + potatoCost + chocolateCost + eggCost).toFixed(2)}€</p>
        <p><strong>Altersrabatt:</strong> ${ageDiscount.toFixed(2)}€</p>
        <p><strong>Glückszahl-Rabatt:</strong> ${discount.toFixed(2)}€</p>
        <p><strong>Endsumme:</strong> ${(totalCost).toFixed(2)}€</p>
        <p>Danke für deinen Einkauf im Supermarkt des Wahnsinns!</p>
    `;
});

// Live-Update der Gesamtkosten für Äpfel
document.getElementById('apples').addEventListener('input', updateCost);

function updateCost() {
    const applesInput = parseInt(document.getElementById('apples').value, 10) || 0;
    const totalCostDiv = document.getElementById('totalCost');

    // Validierung: Äpfel begrenzen
    if (applesInput > 50) {
        totalCostDiv.textContent = 'Es sind nur 50 Äpfel verfügbar!';
        totalCostDiv.style.color = 'red';
        return;
    }

    // Kosten live berechnen
    const appleCost = applesInput * 0.5;
    totalCostDiv.textContent = `Live-Kosten für Äpfel: ${appleCost.toFixed(2)}€`;
    totalCostDiv.style.color = 'green';
}
