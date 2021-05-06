import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
    <!-- Instead of writing Js on the the template html we should always write all the logic inside the template on the typescript file -->

    <!-- Event Listeners are called with parenthesis but we should invoke functions from here. -->

    <h3>La base de es de: <strong>{{base}}</strong></h3>
    <button (click)='acumular(base)'>{{base}}</button>
    <!-- <button (click)='numero = numero - 1'>-1</button> -->
    <span>{{numero}}</span>
    <button (click)='acumular(-base)'>{{base}}</button>
    <!-- <button (click)='numero = numero + 1'>+1</button> -->
    `
})

export class ContadorComponent {
    public titulo: string = 'Contador APP';
    public numero: number = 200
    public base : number = 5

    acumular(valor : number){
        this.numero += this.base
    }
}