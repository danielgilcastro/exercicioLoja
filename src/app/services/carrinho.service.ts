import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor() { }

  produtosDocarrinho:any = []

  adicionarAoCarrinho(produto:any){
    this.produtosDocarrinho.push(produto)
  }



}
