 import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public heroeBorrado: string = '';

  borrarHeroe(){
    console.log('borrando...');
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
