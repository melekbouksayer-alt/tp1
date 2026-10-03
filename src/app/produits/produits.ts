//import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  //imports: [CommonModule],
  selector: 'app-produits',
  
  templateUrl: './produits.html',
})
export class Produits {
    produits : string[]; //un tableau de chînes de caractères

    constructor() { 
    this.produits = ["PC Asus", "Imprimante Epson", "Tablette Samsung"]; 
   } 
}
