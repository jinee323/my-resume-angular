import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Education } from './pages/education/education';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Experience } from './pages/experience/experience';
import { Certificates } from './pages/certificates/certificates';
import { Hobbies } from './pages/hobbies/hobbies';
import { Contact } from './pages/contact/contact';
import { Resume } from './pages/resume/resume';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'education', component: Education },
  { path: 'skills', component: Skills },
  { path: 'projects', component: Projects },
  { path: 'experience', component: Experience },
  { path: 'certificates', component: Certificates },
  { path: 'hobbies', component: Hobbies },
  { path: 'contact', component: Contact },
  { path: 'resume', component: Resume },
  { path: '**', redirectTo: '' },
];
