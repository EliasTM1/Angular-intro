import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'Elias';
    edad: number = 27

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase()
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`
    }


    cambiarHeroe():void{
         this.nombre = 'SpiderMan'        
    }

    cambiarEdad():void{
        this.edad = 28
   }
}