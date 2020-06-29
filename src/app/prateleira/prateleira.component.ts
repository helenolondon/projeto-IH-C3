import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { SisService } from '../sis.service';

@Component({
  selector: 'app-prateleira',
  templateUrl: './prateleira.component.html',
  styleUrls: ['./prateleira.component.scss']
})
export class PrateleiraComponent implements OnInit {
  produtos: any[];
  
  constructor(private service: ProdutosService, private sisService: SisService) { }

  showMenus(){
    return this.sisService.showMenus;
  }

  ngOnInit(): void {
    this.produtos = this.service.getProdutosPorcategoria(null);
  }
}
