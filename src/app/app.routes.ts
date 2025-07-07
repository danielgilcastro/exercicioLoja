import { Routes } from '@angular/router';
import { VitrineComponent } from './components/vitrine/vitrine.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ContatoComponent } from './components/contato/contato.component';


export const routes: Routes = [

    {
        path: '',
        component: VitrineComponent
    },
    {
        path: 'produtos',
        component: ProdutosComponent
    },
    {
        path: 'contato',
        component: ContatoComponent
    }

];
