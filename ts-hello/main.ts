 class Point {

    constructor(private _x?: number, private _y?: number) {
    }

    draw() {
        console.log('X: ' + this._x + ' Y: ' + this._y);
    }

    get X() {            // getter
        return this._x;
    }

    set X(value) {       // setter
        if (value < 0 )
            throw new Error('value cannot be less than 0.');
        this._x = value;
    }
 }

 let point = new Point(1, 2);   // naplnujem hodnoty
 let x = point.X;  //  ziskavam hodnotu
 point.X = 10;    // naplnujem hodnotu
point.draw();   //  volam si funkciu




/*
    //  
    //  ARROW FUNCTION 
    //
*/

/* 
// 2. definujeme si v interface typy hodnot
interface Point {
    x: number,
    y: number
}

// 3. hodnoty sa spracuvaju 
let drawPoint = (point: Point) => {
   // ...
}

// or
//inline anotacion 
let drawPointAlternative = (point: { x: number, y: number }) => {
    // ...
}

// 1. vytvoríme si objekt s hodnotami
drawPoint({
    x: 1,
    y: 2
})
 */


/* 

// class "Point" like a obejct
class Point {
    // two fields
    // pridaním private v obkete dole pri pridani point.___ nedolni uz x len y
    private x: number;
    y: number;

    //kazdy class ma konstruktor
    construktor(x?: number, y?: number) {
        this.x = x;
        this.y = y; 
    }

    // one method
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

}



// object "point"
let point: Point = new Point();
point.
point.x = 3;
point.draw();




 */







/*
    //  
    //  INSTALATION TYPESCIPTU TO ANGULAR 
    //
*/

/* 
// instalacia typescrriptu
npm install -g typescript

// zistenie verzie
tsc  --version


// vytvorenie priecinka
mkdir ts-hello
 cd ts-hello\

// otvorilo nam subor vo visual studio code (ani som ho nevytvaral)
code main.ts

// kompiloval som .ts do klasickeho js
tsc main.ts

	: function log(message) {
    	:	console.log(message);
	: }
	:
	: var message = 'hello';
	: log(message);


//videl som zmenu ze sa to skompilovalo do js
code main.js

// vypisal som si vysledok
node main.js

    >> hello
    
*/

/*-----------------------------------------------------------------------------*/

/*
    //  
    //  TYPE OF VARIABLES 
    //
*/

/* 
// len cisla
let count = 5;
// všetky typy
let a;
// len cisla
let b: number;
let b: boolean;
let b: string;
// všetky typy
let b: any;
let b: number[] = [1, 2, 3];
let b: any[] = [1, true, 'a', false];


// pomocou enum si natypujem (vytvorím Color.Red( s hodnotou 0))
enum Color { Red = 0, Green = 1, Blue = 2, Purpure = 58 };

// pri napísaní Color. nám dá možnosti Green,..
let backgroun = Color.Purpure; 
*/

/*-----------------------------------------------------------------------------*/

/*
    //  
    //  INSTALATION TYPESCIPTU TO ANGULAR 
    //
*/

/* let message;
message = 'abc';

  let endsWithCC = message.endsWith('c');  //nemal by sa pouzivat zapis ak // object of type eny ( let message;)
  let endsWithC = (<string>message).endsWith('c');    // jeden sposob ako to zapísat
  let alternativeWay = (message as string).endsWith('c');     //druhy sposob ako to zapísat
 */

/*-----------------------------------------------------------------------------*/


 /*
    //  
    //  ARROW FUNCTION 
    //
*/

/* let martin = function(message) {
    console.log(message);
}

let ondro = (Message) => console.log(Message);
let nicol = () => console.log();
 */

 /*-----------------------------------------------------------------------------*/

// vypíse dve císla 
/* 
 class Point {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    }

    getDistance(another: Point) {
        //..
    }
 }

 let point = new Point;
point.draw();


 */







