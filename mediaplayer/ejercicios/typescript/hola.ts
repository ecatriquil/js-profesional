let muted : boolean = true;

let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

let nombre: string = 'Emanuel'

let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
people.push('Emanuel');

let peopleAndNumbers: Array< string | number> = []
peopleAndNumbers.push(1);
peopleAndNumbers.push('Ricardo');

enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul'
}

let colorFavorito:Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`);


let comodin: any = 'Joker';
comodin = {type: 'Wildcard'}

let someObject: object = comodin;

function add(a: number, b:number): number{
    return a + b;
}

const sum = add(4,6);

function createAdder(a:number):(number) => number {
    return function(b:number){
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName: string = 'Smith'): string{
    return `${firstName} ${lastName}`;
}

const richard = fullName('Ricadito', 'Sanchez')
console.log(richard);



interface Rectangulo {
    ancho: number,
    alto: number,
    color?: Color
}

let rect: Rectangulo = {
    ancho:4,
    alto:6
}

function area(r:Rectangulo){
    return r.alto + r.ancho
}

const areaRect = area(rect);
console.log(areaRect);


rect.toString = function(){
    return this.color? `Un rectangulo ${this.color}` : 'Un rectangulo';
}