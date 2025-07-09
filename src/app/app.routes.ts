import { Routes } from '@angular/router';
import { VitrineComponent } from './components/vitrine/vitrine.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { produtoGuardGuard } from './guards/produto-guard.guard';


export const routes: Routes = [

    {
        path: '',
        component: VitrineComponent
    },
    {
        path: 'produtos',
        component: ProdutosComponent,
        canActivate:[produtoGuardGuard]
    },
    {
        path: 'contato',
        component: ContatoComponent
    }

];
