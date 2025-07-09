import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';

export const produtoGuardGuard: CanActivateFn = (route, state) => {

  const produtosService = inject(ProdutosService);
  

  if(produtosService.produtoSendoVisto){
    console.log("tem produto sendo visto")
    return true;
  }else{
    console.log("nao tem produto sendo visto")

    return false
  }

};
