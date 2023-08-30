// aprendiendo angiular :v
/*
var   varname : type | type2 = value;
*/
const usuario : string | number = 'tonto';


const suma=(a:number, b:number)=>{return a + b;}
suma(3,2)


class tonta{
  // Atributos
  edad:number;
  name:string;
  url:string;
  // constructor para un tonto :v
  constructor(name:string, edad:number, url:string){
    this.name = name;
    this.edad = edad;
    this.url = url;
  }
}
// Crear objeto XD
const daisy = new tonta("DaisyTontuela", 20, "https://ih1.redbubble.net/image.375405990.3345/st,small,507x507-pad,600x600,f8f8f8.u6.jpg")

// :v
console.log(daisy.edad);
daisy.edad;
// daisy.edad
