import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  hasSave = signal<boolean>(false);

constructor() {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    this.hasSave.set(!!localStorage.getItem('demo-save'));
  }
}
createFakeSave() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('demo-save', '1');
      this.hasSave.set(true);
    }
  }

  clearFakeSave() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.removeItem('demo-save');
      this.hasSave.set(false);
    }
  }
}