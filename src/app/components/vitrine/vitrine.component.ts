import { Component } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vitrine',
  imports: [],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {

  constructor(
    public produtosService:ProdutosService,
    private router:Router
  ){}

  irParaProduto(produto:any){

    this.produtosService.produtoSendoVisto = produto

    this.router.navigate(['produtos'])


  }
  

}
