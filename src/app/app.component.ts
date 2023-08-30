import { Component } from '@angular/core';
import { Producto } from './models/producto.model';
import { ImgComponent } from './components/img/img.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productos: Producto[] = [
    {
      id: '1',
      name: 'Tilina',
      img: new ImgComponent(),
      precio: 400
    }, {
      id: '2',
      name: 'Tonta',
      img: new ImgComponent(),
      precio: 300
    }, {
      id: '3',
      name: 'Papu',
      img: new ImgComponent(),
      precio: 3200
    }, {
      id: '4',
      name: 'MinMin AburridA',
      img: new ImgComponent(),
      precio: 560
    }
  ]
  perc=0;
  btnDisabled = false;
  tonta = {
    name: 'tontisima', edad: 20,
    url: "https://ih1.redbubble.net/image.375405990.3345/st,small,507x507-pad,600x600,f8f8f8.u6.jpg"
  };
  // funcion sin sentido porque al estar habilitado, se deshabilita y ya no se puede usar :v
  toggle() { this.btnDisabled = !this.btnDisabled; }
  // activa el boton xd
  activar() { this.btnDisabled = false; }
  // hace mas ruco a tu personaje
  ancianear() { this.tonta.edad += 1; }

  onscroll(e: Event) {
    const el = e.target as HTMLElement;
    const item = document.querySelector('.bar') as HTMLProgressElement;
    const c = document.querySelector('#p') as HTMLParagraphElement;

    const maxScroll = el.scrollHeight - el.clientHeight;
    const scrollPerc = (el.scrollTop / maxScroll) * 100;

    // Ensure the value is rounded or converted to an integer
    item.value = Math.round(scrollPerc);
    c.innerHTML = item.value.toString()+'%';
    console.log(scrollPerc); // Check the calculated percentage in the console
}

}

