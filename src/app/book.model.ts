import {Avis} from './avis';


export class BookModel {
  public img: string;
  public description: string;
  public prix: number;
  public avis: Avis;

  constructor(img: string, desc: string, prix: number, avis: Avis) {
    this.img = img;
    this.description = desc;
    this.avis = avis;
    this.prix = prix;
  }
}
