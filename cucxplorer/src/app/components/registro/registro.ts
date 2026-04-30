import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.html',
  styleUrls: ['./registro.scss'],
  standalone: false
})
export class RegistroComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Toda la inicialización debe ir dentro del constructor
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(5)]],
      isAlumno: [false],
      isProfesor: [false],
      isAdministrativo: [false],
      carrera: ['ing_computacion'],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  // Validador personalizado para que las contraseñas coincidan
  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : { 'mismatch': true };
  }

  // Getters para las validaciones visuales de la imagen
  get hasSpaces() { return /\s/.test(this.registroForm.get('username')?.value || ''); }
  get usernameLength() { return (this.registroForm.get('username')?.value || '').length >= 5; }
  get hasNumber() { return /\d/.test(this.registroForm.get('username')?.value || ''); }
  
  get pwdLength() { return (this.registroForm.get('password')?.value || '').length >= 8; }
  get pwdUpper() { return /[A-Z]/.test(this.registroForm.get('password')?.value || ''); }
  get pwdNumber() { return /\d/.test(this.registroForm.get('password')?.value || ''); }
  get pwdSpecial() { return /[!@#$%^&*(),.?":{}|<>]/.test(this.registroForm.get('password')?.value || ''); }

  onSubmit() {
    if (this.registroForm.valid) {
      console.log("Formulario enviado:", this.registroForm.value);
    }
  }
}