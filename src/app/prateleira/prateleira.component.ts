import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-prateleira',
  templateUrl: './prateleira.component.html',
  styleUrls: ['./prateleira.component.scss']
})
export class PrateleiraComponent implements OnInit {
  produtos: any[];

  constructor(private service: ProdutosService) { }

  ngOnInit(): void {
    this.produtos = this.service.getProdutosPorcategoria(null);
  }
}
