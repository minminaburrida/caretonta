import { ImgComponent } from "../components/img/img.component";

export interface Producto{
  id: string;
  name: string;
  precio:number;
  img:ImgComponent;
}
