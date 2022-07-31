class Carro {
    constructor(modelo) {
      this._modelo = modelo;
    }
  
    set modelo(string) {
      this._modelo = string;
    }
  
    get modelo(){
      return this._modelo;
    }
  
    ligar(){
      return `${this._modelo} está ligado.`;
    }
  
  }
  
  let car = new Carro('clio');
  car.name = 'wrx';
  let up = car.name.toUpperCase();
  let low = car.name.toLowerCase();

  console.log(up);
  console.log(low);
  car.name = 'clio';
  let up2 = `${car.name.charAt(0).toUpperCase()}${car.name.slice(1)}`;
  console.log(up2);