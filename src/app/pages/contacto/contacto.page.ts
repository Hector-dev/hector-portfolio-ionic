/**
 * ============================================================
 * CONTACTO PAGE - Formulario de Contacto
 * ============================================================
 * Utiliza ReactiveFormsModule (FormBuilder + Validators).
 *
 * INTEGRACIÓN CON BACKEND FastAPI (pendiente):
 *   POST /api/v1/contacto
 *   Body: { nombre, email, asunto, mensaje }
 *   Response: { success: true, message_id: uuid }
 *
 * El endpoint almacenará el mensaje en la tabla `contacto_mensajes`
 * de PostgreSQL y enviará notificación por correo electrónico.
 * ============================================================
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MenuController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss']
})
export class ContactoPage implements OnInit {

  /** Formulario reactivo con validaciones */
  public contactForm!: FormGroup;

  /** Estado de envío para deshabilitar el botón */
  public isSubmitting = false;

  /** Datos de contacto directo */
  public contactInfo = [
    {
      icon: 'mail-outline',
      label: 'Email',
      value: 'hector@hectordev.local',
      color: 'primary'
    },
    {
      icon: 'logo-github',
      label: 'GitHub',
      value: 'github.com/hector-rodriguez',
      color: 'medium'
    },
    {
      icon: 'location-outline',
      label: 'Ubicación',
      value: 'Venezuela',
      color: 'success'
    },
    {
      icon: 'server-outline',
      label: 'Backend',
      value: 'FastAPI · PostgreSQL',
      color: 'secondary'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private menuCtrl: MenuController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  /** Inicializa el formulario con validadores */
  private initForm(): void {
    this.contactForm = this.fb.group({
      nombre: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(60)]
      ],
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      asunto: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(100)]
      ],
      mensaje: [
        '',
        [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]
      ]
    });
  }

  /** Getter rápido de controles para el template */
  get f() { return this.contactForm.controls; }

  /**
   * Envía el formulario.
   * TODO: Reemplazar el setTimeout con una llamada real a:
   *   this.http.post('https://api.hectordev.local/api/v1/contacto', body)
   */
  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { nombre, email, asunto, mensaje } = this.contactForm.value;
    const destinatario = 'hectorrdev@gmail.com';
    const subject = `[Contacto portafolio] ${asunto}`;
    const body = `Nombre: ${nombre}\nEmail: ${email}\nAsunto: ${asunto}\n\nMensaje:\n${mensaje}`;
    const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    this.isSubmitting = true;

    const loading = await this.loadingCtrl.create({
      message: 'Abriendo tu cliente de correo...',
      spinner: 'crescent',
      cssClass: 'custom-loading'
    });
    await loading.present();

    // Redirige al cliente de correo del usuario para enviar el mensaje a tu inbox.
    window.location.href = mailtoLink;

    await loading.dismiss();
    this.isSubmitting = false;

    const toast = await this.toastCtrl.create({
      message: '✅ Se preparó el correo para envío. Revisa tu cliente de email.',
      duration: 4500,
      position: 'bottom',
      color: 'success',
      buttons: [{ icon: 'close-outline', role: 'cancel' }]
    });
    await toast.present();

    this.contactForm.reset();
  }

  openMenu(): void {
    this.menuCtrl.open('main-menu');
  }
}
