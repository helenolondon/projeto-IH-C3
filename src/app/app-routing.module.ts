import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrateleiraComponent } from './prateleira/prateleira.component';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { MeusPedidosComponent } from './meus-pedidos/meus-pedidos.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';


const routes: Routes = [
  { path: 'prateleira', component: PrateleiraComponent },
  { path: 'meuspedidos', component: MeusPedidosComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrousuarios', component: CadastroUsuarioComponent },
  { path: '', redirectTo: 'prateleira', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
