import { Routes } from '@angular/router';
import { ProjectOutlineComponent } from './pages/project-outline/project-outline.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

export const routes: Routes = [
  { path: 'outline', component: ProjectOutlineComponent },
  { path: '', component: SidebarComponent },
];
