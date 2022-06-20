//Problem 7. Print a Deck of 52 Cards
let print=this.print||console.log;

for(let card=1; card<=13; card++){
    let lineOutput='';
    for(let suit=1; suit<=4; suit++){
        switch(card){
            case 1:
                lineOutput+='2';
                break;
            case 2:
                lineOutput+='3';
                break;
            case 3:
                lineOutput+='4';
                break;
            case 4:
                lineOutput+='5';
                break;
            case 5:
                lineOutput+='6';
                break;
            case 6:
                lineOutput+='7';
                break;
            case 7:
                lineOutput+='8';
                break;
            case 8:
                lineOutput+='9';
                break;
            case 9:
                lineOutput+='10';
                break;
            case 10:
                lineOutput+='J';
                break;
            case 11:
                lineOutput+='Q';
                break;
            case 12:
                lineOutput+='K';
                break;
            case 13:
                lineOutput+='A';
                break;
        }
        switch(suit){
            case 1:
                lineOutput+=' of spades, ';
                break;
            case 2:
                lineOutput+=' of clubs, ';
                break;
            case 3:
                lineOutput+=' of heards, ';
                break;
            case 4:
                lineOutput+=' of diamonds';
                break;
        }        
        
    }

    print(lineOutput);

}