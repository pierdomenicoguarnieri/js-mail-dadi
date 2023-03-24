# Mail

## Consegna

**Mail**

Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

**Gioco dei dadi**

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

## Steps

Steps da seguire per il primo esercizio:

1. Creare un array con le email che sono accettate per accedere al gioco

2. Tramite un input type "email" acquisire l'email dell'utente.

3. All'interno di un ciclo for comparare l'email inserita con tutte le celle degli array. Ci potranno essere due esiti: 
    
    - L'email è presente nell'array delle email consentite:

        - Stampare a schermo un messaggio che comunichi l'esito positivo del controllo
        
        - Sbloccare l'accesso al **Gioco dei dadi**

    - L'email non è presente nell'array delle email consentite:

        - Stampare a schermo un messaggio che comunichi l'esito negativo del controllo.

Steps da seguire per il secondo esercizio:

1. Creare due variabili, una per il giocatore ed una per il computer

2. All'interno delle variabili assegnare un numero random da 1 a 6

3. Comparare i due numeri:

    - dadiGiocatore > dadiComputer: vince il giocatore

    - dadiGiocatore > dadiComputer: vince il computer

    - dadiGiocatore = dadiComputer: pareggio.

4. Stampare a schermo il risultato del gioco.

## Extras

1. Ho aggiunto la parte grafica del sito.

2. Ho aggiunto diverse classi per la gestione delle animazioni (come ad esempio l'immagine di caricamento, l'entrata in dissolvenza del testo, la scomparsa del sito quando viene inserita un'email errata).