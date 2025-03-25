'use strict'; // Aktiviert den strikten Modus für bessere Fehlererkennung

// 🔹 1. Globale Variablen für den Spielstatus definieren
let output = ""; // Speichert Nachrichten für den Spieler
let spielerName, leben, maxLeben, gold, inventar; // Spielerattribute

// 🔹 Zufallszahl generieren (Pfeilfunktion)
// Aufgabe: Implementiere eine Funktion, die eine Zufallszahl zwischen min und max zurückgibt.
const getRandomNumber = (min, max) => {
    // Nutze Math.random(), um eine Zahl im Bereich [min, max] zu berechnen.
    // Verwende Math.floor(), um auf eine ganze Zahl abzurunden.
    // https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 🔹 Spiel starten (Funktion gespeichert in eine Konstante mit dem Namen startGame)
const startGame = function () {
    // 📝 1. Frage den Spieler nach seinem Namen (prompt()) und speichere ihn in `spielerName`
    spielerName = prompt("Willkommen, Abenteurer! Wie lautet dein Name?");

    // 📝 2. Bestimme eine zufällige maximale Lebensanzahl zwischen 10 und 30. Nutze die Funktion die eine Zufallszahl
    maxLeben = getRandomNumber(10, 30);
    console.log(maxLeben)

    // 📝 3. Setze `leben` auf den maximalen Wert
    leben = maxLeben;

    // 📝 4. Bestimme das Startgold (Zufallszahl zwischen 10 und 60). Nutze die Funktion die eine Zufallszahl
    gold = getRandomNumber(10, 60);

    // 📝 5. Initialisiere das Inventar mit den Startgegenständen ["Trank", "Seil", "Fackel"]
    inventar = ["Trank", "Seil", "Fackel"];

    // 📝 6. Rufe die `updatePlayerInfo()`-Funktion auf, um die Anzeige zu aktualisieren.
    updatePlayerInfo();

    // 📝 7. Blende den "Spiel starten"-Button aus und zeige die Aktionsbuttons an. (Ids: startGame, buttonDiv, travel)
    document.getElementById("startGame").style.display = "none";
    document.getElementById('buttonDiv').style.display = "block";
    document.getElementById('travel').style.display = 'inline-block';
}



// 🔹 Reisen (normale Funktion travel() mit switch-case)
function travel() {
    // 📝 Frage den Spieler, welche Aktion er ausführen will (Du hast jemanden getroffen. Was möchtest du tun? 1 = Kämpfen, 2 = Wegrennen, 3 = Verhandeln).
    let action = prompt(" Du hast jemanden getroffen. Was möchtest du tun? 1 = Kämpfen, 2 = Wegrennen, 3 = Verhandeln");

    // 📝 Nutze ein `switch-case`, um die Eingabe zu verarbeiten.
    switch (action) {
        case "1":       // Kampf
            // 📝 Berechne zufälligen Schaden zwischen 1 und 10.
            let schaden = getRandomNumber(1, 10);
            // 📝 Ziehe den Schaden von `leben` ab.
            leben -= schaden; // leben = leben - schaden;
            // 📝 Füge eine Nachricht zur `output`-Variable hinzu, die das Kampfergebnis beschreibt.
            output += `⚔️ Du hast gekämpft und ${schaden} Schaden erlitten. HP: ${leben} \n`;
            break;

        case "2":       // Flucht
            // 📝 Füge eine Nachricht zur `output`-Variable hinzu, das du weggelaufen bist.
            output += "🏃 Du bist weggelaufen! \n";
            break;

        case "3":       // Verhandeln
            // 📝 Erhöhe das `gold` um 10, wenn der Spieler verhandelt.
            gold += 10;
            // 📝 Füge eine Nachricht zur `output`-Variable hinzu, das du erfolgreich verhandelt hast und wie dein aktueller Goldstand ist
            output += `🛒 Du hast erfolgreich verhandelt! Gold: ${gold} \n`;
            break;

        default:
            // 📝 Füge eine Nachricht zur `output`-Variable hinzu, das du eine 🤨 Ungültige Wahl getroffen hast und du nichts tust
            output += "🤨 Ungültige Wahl. Du tust nichts. \n";
    }

    // 📝 Aktualisiere die Spieleranzeige.
    updatePlayerInfo();
    // 📝 Blende die Buttons ein (Ids: explore, shop)
    document.getElementById('explore').style.display = "inline-block";
    document.getElementById('shop').style.display = "inline-block";
}


// 🔹 Erkunden (Funktion explore mit Default-Werten possibleItems = ["Schwert", "Amulett", "Zaubertrank", "Goldmünzen"])
function explore(possibleItems = ["Schwert", "Amulett", "Zaubertrank", "Goldmünzen"]) {
    // 📝 1. Bestimme eine Zufallszahl zwischen 0 und 1 mit `Math.random()`
    let chance = Math.random();
    // 📝 2. Falls die Zahl kleiner als 0.2 ist, soll der Spieler nichts finden.
    if (chance < 0.2) {
    // 📝 Füge eine Nachricht zur `output`-Variable hinzu: Du hast nichts gefunden...\n
        output += "👁 Du hast nichts gefunden... \n";
    } else {            // Ansonsten
        // 📝 3. Wähle ein zufälliges Item aus `possibleItems`. Nutze die Funktion die eine Zufallszahl.
        let zufallsItem = possibleItems[getRandomNumber(0, possibleItems.length - 1)];

        // 📝 4. Falls es "Goldmünzen" sind, erhöhe das `gold` um 10.
        if(zufallsItem === "Goldmünzen") {
        gold += 10;
        // 📝 Füge eine Nachricht zur `output`-Variable hinzu: wieviel Gold du gefunden hast und was dein aktueller Goldstand ist
        output += `💰 Du hast Gold gefunden! Neues Gold: ${gold} \n`;
        } else {    // Ansonsten
            // 📝 5. Falls es ein anderes Item ist, füge es dem `inventar` hinzu.
            inventar.push(zufallsItem);
            // 📝 Füge eine Nachricht zur `output`-Variable hinzu: welches Item du gefunden hast
            output += `🎒 Du hast ein ${zufallsItem} gefunden! \n`;
        }
    }
    // 📝 6. Aktualisiere die Spieleranzeige.
    updatePlayerInfo();
}

// 🔹 Shop (Funktion visitShop mit Rest-Parametern ...items)
function visitShop(...items) {
    // 📝 1. Prüfe, ob der Spieler mindestens 20 Gold besitzt.
    if(gold >= 20) {
        // Frage den Spieler ob er für 20 Gold etwas kaufen möchte
        let kauf = prompt(`Der Händler bietet ${items.join(", ")} für 20 Gold an. Kaufen (ja/nein)?`);

        // Überarbeitung für zu Hause: User kann entscheiden was er kaufen möchten. Je nach Entscheidung Inventar erweitern (switch case)
        // 📝 2. Falls der Spieler "ja" sagt, reduziere das Gold und füge das erste Item hinzu und gib die Spielerinfo aus was du gekauft hast sowie deinen aktuellen Goldstand
        if (kauf === "ja") {
            gold -= 20;
            inventar.push(items[0]);
            output += `🛍 Du hast ${items[0]} gekauft! Gold: ${gold}`;
        } else {              // Ansonsten gib die Spielerinfo aus: Du hast nichts gekauft
            output += "🙊 Du hast nichts gekauft. \n";
        }

    } else {                // Ansonsten: gib die Spielerinfo aus das du nicht genug Gold hast
        output += "🙈 Du hast nicht genug Gold um einzukaufen";
    }
    // 📝 3. Aktualisiere die Spieleranzeige.
    updatePlayerInfo();
}

// 🔹 Heiltrank verwenden (Funktion usePotion)
function usePotion() {
    // 📝 1. Überprüfe, ob ein Heiltrank im Inventar ist und ob das Leben nicht bereits voll ist.
    // Falls kein Heiltrank vorhanden oder das Leben bereits auf Maximum ist, beende die Funktion.
    if(!inventar.includes("Heiltrank") || leben === maxLeben) return;

    // 📝 2. Durchlaufe alle übergebenen Argumente (Verwendung des `arguments`-Objekts).
    for (let i = 0; i < arguments.length; i++) {

        // 📝 3. Falls das aktuelle Argument "Heiltrank" ist, führe die Heilung aus.
        if(arguments[i] === "Heiltrank") {

            // 📝 4. Entferne einen Heiltrank aus dem Inventar.
            inventar.splice(inventar.indexOf("Heiltrank"), 1);

            // 📝 5. Berechne eine zufällige Heilung zwischen **2 und maximal 10 HP**.
            let heilung = getRandomNumber(2, 10);

            // 📝 6. Stelle sicher, dass das Leben **nicht über das maximale Leben hinausgeht**.
            leben = Math.min(leben + heilung, maxLeben);

            // 📝 7. Füge eine Nachricht zur Ausgabe hinzu, die die Heilung anzeigt sowie deinen aktuellen Gesundheitsstatus
            output += `🌡 Du hast einen Heiltrank verwendet und ${heilung} HP erhalten!`

            // 📝 8. Aktualisiere die Spieleranzeige.
            updatePlayerInfo();

            // 📝 9. Beende die Funktion nach der Heilung.
            return;
        }
    }
}




// 🔹 Spielerinformationen aktualisieren (hier müsst ihr nichts machen)
function updatePlayerInfo() {
    // 📝 1. Aktualisiere das Textfeld mit den gesammelten Nachrichten (`output`).
    document.getElementById('output').innerText = output;

    // 📝 2. Erstelle eine Kopie des Inventars, um es für die Anzeige zu bearbeiten.
    let inventarCopy = [...inventar]; // Verhindert, dass das Original-Inventar verändert wird.
    let inventarAnzeige = []; // Hier wird das formatierte Inventar gespeichert.

    // 📝 3. Durchlaufe das Inventar und zähle, wie oft jedes Item vorkommt.
    while (inventarCopy.length > 0) {
        let item = inventarCopy[0]; // 📝 Nimm das erste Item aus der Kopie.
        let count = inventarCopy.filter(i => i === item).length; // 📝 Zähle, wie oft es in der Liste vorkommt.

        // 📝 4. Falls ein Item mehrfach vorkommt, speichere es als "Anzahl × Itemname" in `inventarAnzeige`.
        // Falls es nur einmal vorkommt, speichere es einfach so.
        inventarAnzeige.push(count > 1 ? `${count} × ${item}` : item);

        // 📝 5. Entferne alle Instanzen dieses Items aus `inventarCopy`, damit es nicht doppelt gezählt wird.
        inventarCopy = inventarCopy.filter(i => i !== item);
    }

    // 📝 6. Aktualisiere die Anzeige der Spielerwerte (Leben, Gold, Inventar).
    document.getElementById("player-info").innerText =
        `🧙‍♂️ Willkommen, ${spielerName}!\n❤️ Leben: ${leben}/${maxLeben} | 💰 Gold: ${gold}\n🎒 Inventar: ${inventarAnzeige.join(", ")}\n`;

    // 📝 7. Zeige den "Heiltrank verwenden"-Button nur an, wenn der Spieler einen Heiltrank hat **und** sein Leben nicht voll ist.
    document.getElementById("usePotion").style.display =
        (inventar.includes("Heiltrank") && leben < maxLeben) ? "inline-block" : "none";

    // 📝 8. Falls der Spieler **keine Lebenspunkte** mehr hat, beende das Spiel.
    if (leben <= 0) {
        output += "\n☠️ GAME OVER! Du bist gestorben...\n"; // 📝 Füge die Game-Over-Nachricht zum `output` hinzu.
        document.getElementById("output").innerText = output; // 📝 Aktualisiere die Ausgabe.

        // 📝 Verstecke alle Buttons, damit der Spieler keine weiteren Aktionen ausführen kann.
        document.getElementById('buttonDiv').style.display = "none";

        // 📝 Blende den "Spiel starten"-Button wieder ein, damit der Spieler ein neues Spiel starten kann.
        document.getElementById("startGame").style.display = "inline-block";
    }
}


// 🔹 Spielerinformationen aktualisieren (anonyme Funktion in EventListener)

// 📝 1. Wenn der "Spiel starten"-Button geklickt wird, soll das Spiel gestartet werden.
document.getElementById("startGame").addEventListener("click", function() {
    startGame(); // 📝 Rufe die Funktion auf, um das Spiel zu initialisieren.
});

// 🔹 EventListener mit Pfeilfunktionen für verschiedene Aktionen (hier müsst ihr nichts machen)

// 📝 2. Wenn der Spieler auf "Reisen" klickt, soll die travel()-Funktion ausgeführt werden.
document.getElementById("travel").addEventListener("click", () => travel());

// 📝 3. Wenn der Spieler auf "Erkunden" klickt, soll die explore()-Funktion ausgeführt werden.
document.getElementById("explore").addEventListener("click", () => explore());

// 📝 4. Wenn der Spieler den Shop betritt, wird die visitShop()-Funktion aufgerufen.
// Der Shop bietet dabei einen Heiltrank und ein Magisches Amulett an.
document.getElementById("shop").addEventListener("click", () => visitShop("Heiltrank", "Magisches Amulett"));

// 📝 5. Wenn der Spieler auf "Heiltrank benutzen" klickt, wird die usePotion()-Funktion aufgerufen.
// Der übergebene Parameter stellt sicher, dass nur der Heiltrank verwendet wird.
document.getElementById("usePotion").addEventListener("click", () => usePotion("Heiltrank"));
