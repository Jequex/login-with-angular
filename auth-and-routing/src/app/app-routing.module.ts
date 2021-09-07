import { NgModule } from "@angular/core";
import { RouterModule, Routes, CanActivate } from "@angular/router";
import { AuthGuardService as AuthGuard } from "./services/auth-guard.service";

import { CreateAccountComponent } from "./create-account/create-account.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate : [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: CreateAccountComponent },
    {path: '**', redirectTo: 'dashboard'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}