class Carro {
    constructor(modelo) {
      this._modelo = modelo
    }
  
    set modelo(string) {
      this._modelo = string
    }
  
    get modelo(){
      return this._modelo
    }
  
    ligar(){
      return `${this._modelo} está ligado.`
    }
  
  }
  
  let car = new Carro('clio')
  car.name = 'WRX'
  console.log(car.name)
  




