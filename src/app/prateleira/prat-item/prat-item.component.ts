import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prat-item',
  templateUrl: './prat-item.component.html',
  styleUrls: ['./prat-item.component.scss']
})
export class PratItemComponent implements OnInit {

  constructor() { }

  @Input("imagem") imagem: string;
  @Input("texto") texto: string;
  @Input("preco") preco: string;
  
  ngOnInit(): void {
  }

}
