import { Routes } from '@angular/router';
import { LoginPageComponent } from '@pages/login/login-page.component';
import { ChatPageComponent } from '@pages/chat/chat-page.component';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'chatter', component: ChatPageComponent, canActivate: [AuthGuard] }
]