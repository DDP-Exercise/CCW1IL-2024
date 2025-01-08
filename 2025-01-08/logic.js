"use strict";
// Array mit Pizzasorten
const pizzas = [
    "Margherita",
    "Salami",
    "Vegetaria",
    "Rustica",
    "Hawaii",
    "Verdura"
];
// Mehrdimensionales Array mit Größen und Preisen
const sizes = [
    ["klein", 5.99],
    ["mittel", 7.99],
    ["groß", 9.99]
];

// Dropdown für Pizzasorten selektieren
const pizzaSelect = document.getElementById('pizza');

// Dropdown für Größen selektieren
const sizeSelect = document.getElementById('size');

// Fügt die Pizzasorten in das Dropdown Menü ein
// für jeden Eintrag im Array pizzas wird der Wert in die
// lokale Variable gurke gespeichert
pizzas.forEach((gurke) => {
    // console.info(gurke)
    // Erstellt ein neues option Element
    const option = document.createElement('option');
    // Setzt den Value der Option auf den Pizza Namen
    option.value = gurke;
    // Setzt den angezeigten Text auf den Pizza Namen
    option.textContent = gurke;
    // console.info(option)
    // erweitert die Select Box (Dropdown) um das erstellte option HTML Tag
    pizzaSelect.appendChild(option);
})

// Fügt die Größen und Preise in das Dropdown-Menü ein
sizes.forEach(([size, price]) => {
    //console.info(size, price)
    const option = document.createElement('option');
    option.value = size;
    option.textContent = `Pizza ${size} um nur € ${price}`;
    // option.textContent = 'Pizza ' + size + ' um nur € ' + price;
    sizeSelect.appendChild(option);
})


// Fügt einen Klick Event Listener zum Bestellbutton hinzu
document.getElementById('order').addEventListener('click', () => {
    const selectedPizza = pizzaSelect.value;
    const selectedSize = sizeSelect.options[sizeSelect.selectedIndex].textContent;

    const output = document.getElementById('output');

    // Überprüft, ob eine Pizza und eine Größe ausgewählt wurden
    if (!selectedPizza || !selectedSize) {
        output.textContent = "Bitte wähle eine Pizza und eine Größe!"; // Zeigt eine Warnung an, wenn etwas fehlt
        return; // Beendet die Funktion, wenn die Validierung fehlschlägt
    }

    // Zeigt die Bestellung im HTML-Element an
    output.innerHTML = `Du hast eine <strong>${selectedPizza}</strong> Pizza bestellt in der Größe ${selectedSize}`;
})
