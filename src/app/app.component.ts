import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'PasswordGenerator';
  length : number = 0;
  includeLetters : boolean = false;
  includeNumbers : boolean = false;
  includeSymbols : boolean = false;
  password : string = '';

  onButtonClick() : void {
    const numbers : string = '1234567890';
    const letters : string = 'abcdefghijklmnopqrstuvwxyz';
    const symbols : string = '!"§$%&/()=?*#><_-';

    let validChars : string = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let generatedPassword : string = '';
    for (let i = 0; i < this.length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }
    this.password = generatedPassword;
  }

  onChangeLength(event: Event) : void {
    const target : number = parseInt((event.target as HTMLInputElement).value);
    if (!isNaN(target)) {
      this.length = target;
    }
  }

  onChangeUseLetters() : void {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() : void {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() : void {
    this.includeSymbols = !this.includeSymbols;
  }
}
