import { Component, Input } from '@angular/core';
import { Producto } from '../../models/producto.model'
import { ImgComponent } from '../img/img.component';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {

      @Input() producto: Producto={id: '', name: '', img: new ImgComponent(), precio: 0};

  constructor(){}
}
