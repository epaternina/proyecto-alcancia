import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'alcancia-proyecto';
  toppings = new FormControl();
  card1= true;
  card2= false;

  checked50 = false;
  checked100 = false;
  checked200 = false;
  checked500 = false;
  checked1000 = false;

  toppingList: string[] = ['$50', '$100', '$200', '$500', '$1000'];
  cantidadMonedas=0;
  cantidadDinero=0;
  MuestraMonedas50 = false;
  MuestraMonedas100 = false;
  MuestraMonedas200 = false;
  MuestraMonedas500 = false;
  MuestraMonedas1000 = false;

  MuestraDinero50 = false;
  MuestraDinero100 = false;
  MuestraDinero200 = false;
  MuestraDinero500 = false;
  MuestraDinero1000 = false;

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  moneda50 = 0;
  moneda100 = 0;
  moneda200 = 0;
  moneda500 = 0;
  moneda1000 = 0;
  vertical = false;
  tickInterval = 1;

  cantidad50 =0;
  cantidad100 =0;
  cantidad200 =0;
  cantidad500 =0;
  cantidad1000 =0;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);

    
    setTimeout(() => {
      this._snackBar.dismiss();
     },1300);

  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }


  insertar(){

    this.cantidad50 = this.cantidad50 + this.moneda50;
    this.moneda50 =0;
    this.cantidad100 = this.cantidad100 + this.moneda100;
    this.moneda100 =0;
    this.cantidad200 = this.cantidad200 + this.moneda200;
    this.moneda200 =0;
    this.cantidad500 = this.cantidad500 + this.moneda500;
    this.moneda500 =0;
    this.cantidad1000 = this.cantidad1000 + this.moneda1000;
    this.moneda1000 =0;

    
    this.calcularCantidadMonedas()
    this.calcularCantidadDinero();
    this.openSnackBar("ahorrado!","aceptar");
  }

  vaciar(){
    this.cantidad50 =0;
    this.cantidad100 =0;
    this.cantidad200 =0;
    this.cantidad500 =0;
    this.cantidad1000 =0;
    this.cantidadMonedas =0;
    this.cantidadDinero =0;

    this.openSnackBar("vaciado!","aceptar");
  }

calcularCantidadMonedas(){
this.cantidadMonedas = this.cantidad50 + 
                           this.cantidad100 + 
                           this.cantidad200 + 
                           this.cantidad500 +
                           this.cantidad1000;
}

  calcularCantidadDinero(){
    this.cantidadDinero = this.cantidad50*50 + 
                          this.cantidad100*100 + 
                          this.cantidad200*200 +
                          this.cantidad500*500 +
                          this.cantidad1000*1000;
  }

  somethingChanged(){
    this.MuestraMonedas50=false;
    this.MuestraMonedas100=false;
    this.MuestraMonedas200=false;
    this.MuestraMonedas500=false;
    this.MuestraMonedas1000=false;
    for (let index = 0; index < this.toppings.value.length; index++) {
        if(this.toppings.value[index]=='$50')
        this.MuestraMonedas50=true;

        if(this.toppings.value[index]=='$100')
        this.MuestraMonedas100=true;

        if(this.toppings.value[index]=='$200')
        this.MuestraMonedas200=true;

        if(this.toppings.value[index]=='$500')
        this.MuestraMonedas500=true;

        if(this.toppings.value[index]=='$1000')
        this.MuestraMonedas1000=true;
    }
  }



  somethingChangedDinero(){
    this.MuestraDinero50=false;
    this.MuestraDinero100=false;
    this.MuestraDinero200=false;
    this.MuestraDinero500=false;
    this.MuestraDinero1000=false;
    for (let index = 0; index < this.toppings.value.length; index++) {
        if(this.toppings.value[index]=='$50')
        this.MuestraDinero50=true;

        if(this.toppings.value[index]=='$100')
        this.MuestraDinero100=true;

        if(this.toppings.value[index]=='$200')
        this.MuestraDinero200=true;

        if(this.toppings.value[index]=='$500')
        this.MuestraDinero500=true;

        if(this.toppings.value[index]=='$1000')
        this.MuestraDinero1000=true;
    }
  }

  informacion(data:string){
    if(data=='card1'){
      this.card1= false;
      this.card2= true;
    }else{
      this.card1= true;
      this.card2= false;
    }
   
  }
}
