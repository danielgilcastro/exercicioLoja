import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  minhavariavel = 'dentro de service';

  produtoSendoVisto:any = null


  produtos = [ 
    { id: 1, nome: 'Produto 1', preco: 100 , srcImg:"./img/img1.jpg"},
    { id: 2, nome: 'Produto 2', preco: 200 , srcImg:"./img/img2.jpg"},
    { id: 3, nome: 'Produto 3', preco: 300 , srcImg:"./img/img3.jpg"},
    { id: 4, nome: 'Produto 4', preco: 400 , srcImg:"./img/img4.jpg"},
    { id: 5, nome: 'Produto 5', preco: 500 , srcImg:"./img/img5.jpg"},
    { id: 6, nome: 'Produto 6', preco: 600 , srcImg:"./img/img6.jpg"},
    { id: 7, nome: 'Produto 7', preco: 700 , srcImg:"./img/img7.jpg"},
    { id: 8, nome: 'Produto 8', preco: 800 , srcImg:"./img/img8.jpg"},
    { id: 9, nome: 'Produto 9', preco: 900 , srcImg:"./img/img9.jpg"},
    { id: 10, nome: 'Produto 10', preco: 1000 , srcImg:"./img/img10.jpg"},
   ]



}
