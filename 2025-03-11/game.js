'use strict'; // Aktiviert den strikten Modus, um häufige Fehler zu vermeiden


// 🔹 1. Variablen für den Spielstatus definieren
// 🔹 Globale Variablen für das Spiel
let output = ""; // Speichert Spielnachrichten
let spielerName, leben, maxLeben, gold, inventar; // Definiert die Spielerattribute

// 🔹 1. Spiel starten: Name eingeben, Leben & Gold zufällig bestimmen, Startinventar setzen
document.getElementById("startGame").addEventListener("click", function() {
    // 📝 TODO:
    // - Spieler nach seinem Namen fragen und in `spielerName` speichern (prompt())
    spielerName = prompt("Willkommen, Abenteurer! Wie lautet dein Name?");
    console.info('spielerName: ', spielerName);
    // - Maximalleben zufällig zwischen 10 und 30 setzen (Math.floor(Math.random() * 20) + 10)
    maxLeben = Math.floor(Math.random() * 20) + 10;
    console.info('maxLeben: ', maxLeben)
    // - Leben auf den maximalen Wert setzen
    leben = maxLeben;
    // - Start-Gold zufällig zwischen 10 und 60 setzen (Math.floor(Math.random() * 50) + 10)
    gold = Math.floor(Math.random() * 50) + 10;
    // - Ein Standard-Inventar mit `["Trank", "Seil", "Fackel"]` erstellen (Array)
    inventar = ["Trank", "Seil", "Fackel"];

    updatePlayerInfo(); // Aktualisiert die Spielerwerte im UI

    // 📝 TODO:
    // - Den Start-Button ausblenden (style.display = "none")
    document.getElementById("startGame").style.display = "none";
    // - Die Buttons für Reisen, Erkunden und Shop sichtbar machen (style.display = "inline-block" bzw. "block")
    document.getElementById('buttonDiv').style.display = "block";
    document.getElementById('travel').style.display = "inline-block";
});

// 🔹 2. Reisen: Der Spieler trifft auf eine Situation (Kampf, Flucht, Verhandlung)
document.getElementById("travel").addEventListener("click", function() {
    // 📝 TODO:
    // - Spieler nach seiner Aktion fragen (prompt()) → 1 = Kämpfen, 2 = Wegrennen, 3 = Verhandeln
    let action = prompt(" Du hast jemanden getroffen. Was möchtest du tun? 1 = Kämpfen, 2 = Wegrennen, 3 = Verhandeln");
    // - `switch-case` verwenden, um die Eingabe zu prüfen
    switch (action) {
        case "1":
            // 📝 TODO (Falls Kampf gewählt wird):
            output += "⚔️ Du hast dich für den Kampf entschieden! \n";
            // - Zufälligen Schaden berechnen (Math.floor(Math.random() * 10) + 1)
            let schaden = Math.floor(Math.random() * 10) + 1;
            // - Leben reduzieren (`leben -= schaden`)
            leben -= schaden;
            output += `Der Gegner ist tot. Du hast ${schaden} Schaden erlitten. 🩸 Deine verbleibende HP ${leben} \n`;
            break;
        case "2":
            // 📝 TODO (Falls Flucht gewählt wird):
            // - Eine Nachricht in `output` hinzufügen (+=)
            output += "🏃🏼‍♀️ Du bist weggelaufen. Glück gehabt! \n";
            break;
        case "3":
            // 📝 TODO (Falls Verhandlung gewählt wird):
            // - Gold um 10 erhöhen (`gold += 10`)
            output += "🛒 Du versuchst zu verhandeln ...  \n";
            gold += 10;
            output += `💰 Dein Gold hat sich auf ${gold} erhöht.\n`;
            break;
        default:
            // 📝 TODO (Falls ungültige Eingabe):
            // - Eine Fehlermeldung ausgeben
            output += "🤨 ungültige Wahl. Du stehst unschlüssig in der Gegend rum...\n";
    }
    updatePlayerInfo(); // Aktualisiert die Spielerwerte im UI

    // 📝 TODO:
    // - Die Buttons für Erkunden & Shop sichtbar machen (style.display = "inline-block")
    document.getElementById('explore').style.display = "inline-block";
    document.getElementById('shop').style.display = 'inline-block';
});

// 🔹 3. Gegend erkunden: Der Spieler kann Gold oder Items finden (oder nichts)
document.getElementById("explore").addEventListener("click", function() {
    // 📝 TODO:
    // - Ein Array mit möglichen Items erstellen: `["Schwert", "Amulett", "Zaubertrank", "Goldmünzen"]`
    let gefundeneItems = ["Schwert", "Amulett", "Zaubertrank", "Goldmünzen"];
    // - Eine zufällige Zahl zwischen 0 und 1 erzeugen (Math.random())
    let chance = Math.random();
    // - Falls die Zahl < 0.2 ist (20% Wahrscheinlichkeit), eine Nachricht ausgeben: "Du hast nichts gefunden"
    if(chance < 0.2) {
        output += "👁 Du hast die Gegend erkundet, aber nichts gefunden... \n";
    } else {
        // 📝 TODO (Falls ein Item gefunden wird):
        // - Zufälliges Item aus der Liste wählen (Math.floor(Math.random() * array.length))
        let zufallsItem = gefundeneItems[Math.floor(Math.random() * gefundeneItems.length)];
        if(zufallsItem === "Goldmünzen") {
            // - Falls "Goldmünzen" gefunden: `gold += 10`
            gold += 10;
            output += `💰 Du hast 10 Goldmünzen gefunden. Dein neuer Goldstand: ${gold}\n`;
        } else {
            // - Falls ein anderes Item gefunden: Inventar mit `push()` erweitern
            inventar.push(zufallsItem);
            output += `😎 Du hast ein ${zufallsItem} gefunden! Es wurde deinem Inventar hinzugefügt.\n`;
        }
    }
    updatePlayerInfo(); // Aktualisiert die Spielerwerte im UI
});

// 🔹 4. Händler besuchen: Heiltrank kaufen (falls genug Gold)
document.getElementById("shop").addEventListener("click", function() {
    // 📝 TODO:
    // - Prüfen, ob der Spieler mindestens 20 Gold hat (`if (gold >= 20)`)
    if(gold >= 20) {
        // - Falls ja, den Spieler fragen, ob er kaufen möchte (prompt())
        let kauf = prompt('🤑 Der Händler bietet dir einen Heiltrank für 20 Gold an. Kaufen (ja/nein).').toLowerCase();
        if(kauf === "ja") {
            // - Falls der Spieler kauft:
            //   - Gold um 20 reduzieren (`gold -= 20`)
            gold -= 20;
            //   - Inventar mit `push("Heiltrank")` erweitern
            inventar.push('Heiltrank');
            output += `🧃 Du hast einen Heiltrank gekauft. 💰  Gold: ${gold}\n`;
        } else {
            output += '🙊 du verlässt den Händler und kaufst nichts. \n';
        }
    } else {
        // - Falls kein Kauf oder nicht genug Gold: Eine entsprechende Meldung ausgeben
        output += "🙈 Du bist arm wie eine Kirchenmaus. Beschaff dir mehr Gold.\n";
    }

    updatePlayerInfo(); // Aktualisiert die Spielerwerte im UI
});

// 🔹 5. Heiltrank verwenden, falls verfügbar & Leben nicht voll
document.getElementById("usePotion").addEventListener("click", function() {
    // 📝 TODO:
    // - Prüfen, ob ein "Heiltrank" im Inventar ist (`inventar.includes("Heiltrank")`)
    let heiltrank = inventar.includes("Heiltrank");
    console.info(heiltrank);
    if(heiltrank && leben < maxLeben) {
        // - Falls ja:
        //   - Den Heiltrank aus dem Inventar entfernen (`splice()` oder `filter()`)
        // inventar = inventar.filter(item => item !== "Heiltrank"); // Entfernt alle Heiltränke
        inventar.splice(inventar.indexOf("Heiltrank"), 1); // Entfernt den ersten Heiltrank
        //   - Heilung berechnen (`Math.min(10, maxLeben - leben)`)
        let heilung = Math.floor(Math.random() * 10);
        //let heilung = Math.min(10, maxLeben - leben);
        //   - Leben um den Heilwert erhöhen (`leben += heilung`)
        leben += heilung;
        output += `🌡 Du hast einen Heiltrank verwendet und ${heilung} erhalten! ❣️ Gesundheit: ${leben}/${maxLeben}\n`;
    }

    updatePlayerInfo(); // Aktualisiert die Spielerwerte im UI
});

// 🔹 7. Spielerinformationen aktualisieren + Game Over prüfen
function updatePlayerInfo() {
    // Aktualisiert die Ausgabe des Spiels
    document.getElementById("output").innerText = output;
    // Zeigt die aktuellen Spielerwerte an
    document.getElementById("player-info").innerText = `🧙‍♂️ Willkommen, ${spielerName}!\n❤️ Leben: ${leben}/${maxLeben} | 💰 Gold: ${gold}\n🎒 Inventar: ${inventar.join(", ")}\n`;

    // Heiltrank-Button nur anzeigen, wenn ein Heiltrank im Inventar ist und das Leben nicht voll ist
    if (inventar.includes("Heiltrank") && leben < maxLeben) {
        document.getElementById("usePotion").style.display = "inline-block";
    } else {
        document.getElementById("usePotion").style.display = "none";
    }

    // Falls der Spieler stirbt -> Game Over
    if (leben <= 0) {
        output += "\n☠️ GAME OVER! Du bist gestorben...\n";
        document.getElementById("output").innerText = output;
        document.getElementById('buttonDiv').style.display = "none";
        document.getElementById("startGame").style.display = "inline-block"; // Spieler kann ein neues Spiel starten
    }

}
