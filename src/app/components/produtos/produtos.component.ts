import { Component } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-produtos',
  imports: [],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  constructor(public produtosService:ProdutosService){}

  

}
