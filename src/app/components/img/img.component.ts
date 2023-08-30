import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>;
  imgdefault = 'https://ih1.redbubble.net/image.375405990.3345/st,small,507x507-pad,600x600,f8f8f8.u6.jpg';
  counter = 0;
  constructor() {
    // antes de renderear
    // no correr cosas asincronas porque truena :V
    console.log('Constructor', 'imgValue =>', this.img);
    // this.img=''
  }
  ngOnInit(): void {
    // antes del render
    // corre solo una vez
    console.log('ngonInit', 'imgValue =>', this.img);
    window.setInterval(() => {this.counter++;console.log(`Contador ${this.counter}`)},1000);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // corre antes y durante el render
    console.log('ngonChanges', 'imgValue =>', this.img);
  }
  imgError() { this.img = this.imgdefault }
  imgloaded() {
    console.log('log hijo de la gran P');
    this.loaded.emit(this.img);
  }
  ngafterViewInit() {
    // corre despues del render
    // activa los hijos
    console.log('ngafterChanges', 'imgValue =>', this.img);

  }
  ngOnDestroy(): void { }
  // Destruye el item
  //   console.log('ngonDestroy', 'imgValue =>', this.img);
  // }
}
