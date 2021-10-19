# Mall för inlämning laboration 1, 1dv610

## Checklista
  - [x] Jag har skrivit all kod och reflektioner själv. Jag har inte använt mig av andras kod för att lösa uppgiften.
  - [x] Mina testresultat är skrivna utifrån utförd testning ( och inte teoretiskt, "det bör fungera" :) )
  - [x] De enda statiska metoder eller funktioner utanför klasser som jag har är för att starta upp min testapplikation ex main(java).
  - [x] De enda bibliotek och färdiga klasser som används är sådana som måste användas (eller som används för att testa modulen).

## Egenskattning och mål
  - [ ] Jag är inte klar eftersom jag vet att jag saknar något. Då skall du inte lämna in!
  - [ ] Jag eftersträvar med denna inlämning godkänt betyg (E-D)
    - [ ] De flesta testfall fungerar (enstaka testfall kan misslyckas, tydligt vilka)
    - [ ] Koden är förberedd på återanvändning
    - [ ] All kod samt historik finns i git 
    - [ ] Reflektionerna är skrivna
    - [ ] Koden är läsbar
  - [x] Jag eftersträvar med denna inlämning högre betyg (C) och anser mig uppfylla alla extra krav för detta. 
    -[x] Jag är noga i min testning
    - [x] En del av testfallen är automatiserade (Tokenizer/Parser/PP), viss del kan vara manuellt testad.
    - [x] Det finns en tydlig beskrivning i hur mina moduler skall användas. 
    - [ ] Mina reflektioner visar tydligt att jag förstått bokens koncept.
  - [ ] Jag eftersträvar med denna inlämning högsta betyg (A-B) 
    - [ ] Sammanhängande reflektion som ger ett gott helhetsintryck och visar detaljerad förståelse för kodkvalitet.
    - [ ] Min kod är ... (pussar fingrar och gör smackljud)
    - [ ] Extrauppgift parser finns med som egen modul(er)


Förtydligande: Examinator kommer sätta betyg oberoende på vad ni anser. Att ha "saker" från högre betygsnivåer verkar positivt och kan väga upp brister i inlämningen.

## Komponenter och återanvändning
 * Länka in URL om du använder olika repositorier för dina olika komponenter. 
    - [Tokenizer](https://gitlab.lnu.se/1dv610/student/du222aa/l1)
    - [Parser](https://gitlab.lnu.se/1dv610/student/du222aa/l2)
    - [PrettyPrinter](https://github.com/davidheineback/prettyprinter)

 * Beskriv komponenterna och hur de skall användas.
     - [Parser README.md](./README.md)
     - [PrettyPrinter README.md](https://github.com/davidheineback/prettyprinter#readme)  

 * Beskriv hur du anpassat din kod och instruktioner för att någon annan programmerare skall kunna använda dina komponenter. Om du skrivit instruktioner för din användare länka till dessa. Om inte beskriv här hur någon skall göra.  
    - [Parser README.md](./README.md)
    - [PrettyPrinter README.md](https://github.com/davidheineback/prettyprinter#readme)  
    
 * Beskriv hur du säkerhetställt att beroendena mellan komponenterna är som beskrivs i laborationen. 
    - [Tokenizer](https://gitlab.lnu.se/1dv610/student/du222aa/l1) är ett NPM paket och helt oberoende av koden i [Parser](https://gitlab.lnu.se/1dv610/student/du222aa/l2) & [PrettyPrinter](https://github.com/davidheineback/prettyprinter)
    - Även [Parser](https://gitlab.lnu.se/1dv610/student/du222aa/l2) är ett NPM paket och parsningen sker i parse metoden på Document klassen och denna testas av de automatiska testerna helt utan att PrettyPrinter är inblandad.
    - [PrettyPrinter](https://github.com/davidheineback/prettyprinter) har beroende av Parser som installeras när man kör npm install.

## Beskrivning av min kod
Klassdiagramet visar de viktigaste klasserna ock dess relationer.  
Det viktigaste för att parsningen ska fungera är Document-klassen eftersom denna innehåller parse metoden.  
Inne i parse metoden skapar jag en Tokenizer vilket man skulle kunna skicka med som argument via konstruktorn i Document men eftersom jag vill vara den som har kontroll över vilken Tokenizer det är som används så valde jag istället att bygga in denna istället för att lägga den som parameter.  
Klassdiagrammet visar även att beroendet är så som beskrivits i uppgiften.


![Class-diagram](./img/class-diagram.jpeg)


## Hur jag testat
**Document** klassen med parsening och filtrering av olika typer av meningar är testat via automatiska tester. Se testrapport nedan:

### Testfall  
Tester kan köras via kommandot npm test.  

![TestReport](./img/testReport.png)

**PrettyPrinter** är testad manuellt så att färgkodning följer det i beskrivningen. Se resultat nedan:   

![Manuella Tester](./img/manualTest1.png)

![Manuella Tester](./img/manualTest2.png)

## Kapitelreflektioner för kapitel 2-11

### Kapitel 2 - Meaningful names
PrettyPrinter - Don't be cute.  
Sentences vs Sentence väldigt lika.  

### Kapitel 3 - Functions
Flera metoder på olika klasser som heter för att undvika Law of demeter.

### Kapitel 4 - Comments  
Använder endast jsdoc kommentarer på de viktagaste publika klasserna.

### Kapitel 5 - Formatting
If satser innehåller till viss del lång formattering i villkor.
Vertical openness kommer ganska av sig själv om man följer Functions kapitlet
"Each group of lines represents a complete thought"

### Kapitel 6 - Objects and Data Structures

### Kapitel 7 - Error Handling

### Kapitel 8 - Boundaries
Tredjepart i Tokenizer och readline från nodejs.

### Kapitel 9 - Unit Tests

### Kapitel 10 - Classes

### Kapitel 11 - Systems


## Laborationsreflektion
Reflektera över uppgiften utifrån din utveckling som programmerare. 
Vad har du lärt dig och vad ser du fram emot att lära dig?
