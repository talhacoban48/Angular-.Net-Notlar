let a: number;
a = 5

let b: string;
let c: boolean = false;
let d: any;
let e: number[] = [1,2,3,4]

let f: Array<number> = [1,2,3]
let g: any[] = ["1","2",3,4]

let h: [string, number, boolean] = ["a", 4, false]

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

//enum Payment {kredi, havale, kapidaOdeme, eft};
enum Payment {kredi=0, havale=1, kapidaOdeme=2, eft=3};

let kredi = Payment.kredi;
let havale = Payment.havale;
let kapidaOdeme = Payment.kapidaOdeme;
let eft = Payment.eft;

