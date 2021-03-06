import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { AuthGuard } from './_guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profileEdit/profileEdit.component';
import { ProfileEditResolver } from './_resolvers/profileEdit.resolver';
import { ProfileEditLangResolver } from './_resolvers/profileEdit-lang.resolver';
import { FiendFriendsComponent } from './fiend-friends/fiend-friends.component';
import { MembersResolver } from './_resolvers/members.resolver';
import { MemberResolver } from './_resolvers/member.resolver';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MessengerComponent } from './messenger/messenger.component';
import { StartUpGuard } from './_guards/startup.guard';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    children: [
      { path: 'news', component: NewsComponent },
      { path: 'profile/:id', component: ProfileComponent, resolve: {user: MemberResolver}},
      { path: 'members', component: FiendFriendsComponent, resolve: {users : MembersResolver} },
      { path: 'profile', component: ProfileEditComponent, resolve: { user : ProfileEditResolver,
         languages: ProfileEditLangResolver } },
       { path: 'messenger', component: MessengerComponent }
    ]
  },
  {
    path: '',
    canActivate: [StartUpGuard],
    runGuardsAndResolvers: 'always',
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'contactUs', component: ContactUsComponent },

];
