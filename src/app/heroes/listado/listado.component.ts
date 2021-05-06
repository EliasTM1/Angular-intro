import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {
  
  heroes: string[] = ['SpiderMan','IronMan','The Coon','Cptn Crunch Berry']
  heroeBorrado : string = ''
borrarComponente(){
    
    this.heroeBorrado = this.heroes.shift() || ''

}
}
