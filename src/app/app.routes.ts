// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Continue } from './pages/continue/continue';
import { NewGame } from './pages/new-game/new-game';
import { Load } from './pages/load/load';
import { Settings } from './pages/settings/settings';
import { About } from './pages/about/about';
import { Kostya } from './pages/kostya/kostya';

export const routes: Routes = [
  { path: '', redirectTo: 'new', pathMatch: 'full' },  // по умолчанию "Новая игра"
  { path: 'continue', component: Continue, title: 'Продолжить' },
  { path: 'new', component: NewGame, title: 'Новая игра' },
  { path: 'load', component: Load, title: 'Загрузить' },
  { path: 'settings', component: Settings, title: 'Параметры' },
  { path: 'about', component: About, title: 'О игре' },
  { path: 'kostya',component: Kostya, title: 'Костя' },
  { path: '**', redirectTo: 'new' }, // на случай опечаток в URL
];
