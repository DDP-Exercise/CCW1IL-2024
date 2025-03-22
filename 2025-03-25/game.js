'use strict'; // Aktiviert den strikten Modus für bessere Fehlererkennung

// 🔹 1. Globale Variablen für den Spielstatus definieren
let output = ""; // Speichert Nachrichten für den Spieler
let spielerName, leben, maxLeben, gold, inventar; // Spielerattribute

// 🔹 Zufallszahl generieren (Pfeilfunktion)
// Aufgabe: Implementiere eine Funktion, die eine Zufallszahl zwischen min und max zurückgibt.
const getRandomNumber = (min, max) => {
    // Nutze Math.random(), um eine Zahl im Bereich [min, max] zu berechnen.
    // Verwende Math.floor(), um auf eine ganze Zahl abzurunden.

};

// 🔹 Spiel starten (Funktion gespeichert in eine Konstante mit dem Namen startGame)

    // 📝 1. Frage den Spieler nach seinem Namen (prompt()) und speichere ihn in `spielerName`


    // 📝 2. Bestimme eine zufällige maximale Lebensanzahl zwischen 10 und 30. Nutze die Funktion die eine Zufallszahl


    // 📝 3. Setze `leben` auf den maximalen Wert


    // 📝 4. Bestimme das Startgold (Zufallszahl zwischen 10 und 60). Nutze die Funktion die eine Zufallszahl


    // 📝 5. Initialisiere das Inventar mit den Startgegenständen ["Trank", "Seil", "Fackel"]


    // 📝 6. Rufe die `updatePlayerInfo()`-Funktion auf, um die Anzeige zu aktualisieren.


    // 📝 7. Blende den "Spiel starten"-Button aus und zeige die Aktionsbuttons an. (Ids: startGame, buttonDiv, travel)





// 🔹 Reisen (normale Funktion travel() mit switch-case)

    // 📝 Frage den Spieler, welche Aktion er ausführen will (Du hast jemanden getroffen. Was möchtest du tun? 1 = Kämpfen, 2 = Wegrennen, 3 = Verhandeln).


    // 📝 Nutze ein `switch-case`, um die Eingabe zu verarbeiten.

         // Kampf
            // 📝 Berechne zufälligen Schaden zwischen 1 und 10.

            // 📝 Ziehe den Schaden von `leben` ab.

            // 📝 Füge eine Nachricht zur `output`-Variable hinzu, die das Kampfergebnis beschreibt.


         // Flucht
            // 📝 Füge eine Nachricht zur `output`-Variable hinzu, das du weggelaufen bist.


         // Verhandeln
            // 📝 Erhöhe das `gold` um 10, wenn der Spieler verhandelt.

            // 📝 Füge eine Nachricht zur `output`-Variable hinzu, das du erfolgreich verhandelt hast und wie dein aktueller Goldstand ist


        // default
            // 📝 Füge eine Nachricht zur `output`-Variable hinzu, das du eine 🤨 Ungültige Wahl getroffen hast und du nichts tust



    // 📝 Aktualisiere die Spieleranzeige.

    // 📝 Blende die Buttons ein (Ids: explore, shop)




// 🔹 Erkunden (Funktion explore mit Default-Werten possibleItems = ["Schwert", "Amulett", "Zaubertrank", "Goldmünzen"])

    // 📝 1. Bestimme eine Zufallszahl zwischen 0 und 1 mit `Math.random()`


    // 📝 2. Falls die Zahl kleiner als 0.2 ist, soll der Spieler nichts finden.

    // 📝 Füge eine Nachricht zur `output`-Variable hinzu: Du hast nichts gefunden...\n

    // Ansonsten
        // 📝 3. Wähle ein zufälliges Item aus `possibleItems`. Nutze die Funktion die eine Zufallszahl.


        // 📝 4. Falls es "Goldmünzen" sind, erhöhe das `gold` um 10.


        // 📝 Füge eine Nachricht zur `output`-Variable hinzu: wieviel Gold du gefunden hast und was dein aktueller Goldstand ist

        // Ansonsten

            // 📝 5. Falls es ein anderes Item ist, füge es dem `inventar` hinzu.

            // 📝 Füge eine Nachricht zur `output`-Variable hinzu: welches Item du gefunden hast




    // 📝 6. Aktualisiere die Spieleranzeige.



// 🔹 Shop (Funktion visitShop mit Rest-Parametern ...items)

    // 📝 1. Prüfe, ob der Spieler mindestens 20 Gold besitzt.

        // Frage den Spieler ob er für 20 Gold etwas kaufen möchte


        // 📝 2. Falls der Spieler "ja" sagt, reduziere das Gold und füge das erste Item hinzu und gib die Spielerinfo aus was du gekauft hast sowie deinen aktuellen Goldstand




        // Ansonsten gib die Spielerinfo aus: Du hast nichts gekauft



    // Ansonsten: gib die Spielerinfo aus das du nicht genug Gold hast




    // 📝 3. Aktualisiere die Spieleranzeige.



// 🔹 Heiltrank verwenden (Funktion usePotion)

    // 📝 1. Überprüfe, ob ein Heiltrank im Inventar ist und ob das Leben nicht bereits voll ist.
    // Falls kein Heiltrank vorhanden oder das Leben bereits auf Maximum ist, beende die Funktion.


    // 📝 2. Durchlaufe alle übergebenen Argumente (Verwendung des `arguments`-Objekts).


        // 📝 3. Falls das aktuelle Argument "Heiltrank" ist, führe die Heilung aus.


            // 📝 4. Entferne einen Heiltrank aus dem Inventar.


            // 📝 5. Berechne eine zufällige Heilung zwischen **2 und maximal 10 HP**.


            // 📝 6. Stelle sicher, dass das Leben **nicht über das maximale Leben hinausgeht**.


            // 📝 7. Füge eine Nachricht zur Ausgabe hinzu, die die Heilung anzeigt sowie deinen aktuellen Gesundheitsstatus


            // 📝 8. Aktualisiere die Spieleranzeige.


            // 📝 9. Beende die Funktion nach der Heilung.

        




// 🔹 Spielerinformationen aktualisieren (hier müsst ihr nichts machen)
function updatePlayerInfo() {
    // 📝 1. Aktualisiere das Textfeld mit den gesammelten Nachrichten (`output`).


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
