import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

        <h1>Hola mundo{{ titulo }}</h1>


        <button (click) = "acumular(1)">+1</button>

        <span>{{numero}}</span>

        <button (click) = "acumular(-1)">-1</button>

    `
})

export class ContadorComponent{

    public titulo: string = 'bases';
    public numero: number = 10;

    acumular( valor: number ){
        this.numero += valor;
    }
}