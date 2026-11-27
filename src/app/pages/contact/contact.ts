import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formMessage = '';

  sendMessage(event: SubmitEvent, name: string) {
    event.preventDefault();

    this.formMessage = 'Thank you, ' + name + '! Your message has been received.';

    (event.target as HTMLFormElement).reset();
  }
}
