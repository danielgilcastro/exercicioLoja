import { Component } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-produtos',
  imports: [],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  constructor(
    public produtosService:ProdutosService,
    public carrinhoService:CarrinhoService
  ){}

  
  adicionarAoCarrinho(){

    this.carrinhoService.adicionarAoCarrinho(this.produtosService.produtoSendoVisto)
    

  }




  verCarrinho(){

    console.log(this.carrinhoService.produtosDocarrinho)

  }




}
