import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-form',
  template: `
  <div *ngIf="error" class="container-error bg-bg-error p-2 rounded-sm border border-br-error my-3 flex flex-col">
  <span class="font-bold text-txt-dark text-sm"> {{headerError}} </span>
  <span class="text-xs"> {{errorMessage}} </span>
</div>
  `
})
export class ErrorFormComponent {

  @Input() error: boolean = false;
  @Input() headerError: string = '' || 'error';
  @Input() errorMessage: string = '' || 'error message';

}
