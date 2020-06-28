import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  
  constructor() { }

  imagePath: string = "../../../assets/imagens/produtos/";

  getProdutosPorcategoria(categoria: string): any[]{
    return [
      { imagem: this.imagePath + "Barriguinha de porco.png", texto: "Barriguinha de porco", preco: 50.10 },
      { imagem: this.imagePath + "Feijoada.jpg", texto: "Feijoada", preco: 15.25 },
      { imagem: this.imagePath + "Salada.png", texto: "Salada de feijão", preco: 27.30 },
      { imagem: this.imagePath + "Picanha ao forno.png", texto: "Picanha ao forno", preco: 45.00 },
      { imagem: this.imagePath + "Lombo com molho laranja.png", texto: "Lombo com molho laranja", preco: 65.15 },
      { imagem: this.imagePath + "Alcatra ao molho suino.png", texto: "Alcatra ao molho suíno", preco: 43.10 },
      { imagem: this.imagePath + "Bolo indiano.jpg", texto: "Bolo indiano", preco: 6.00 },
      { imagem: this.imagePath + "File de merluza.png", texto: "Filé de merluza", preco: 35.00 }
    ];
  }
}
