import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  txtPassword: string = '';
  txtPasswordConfirm: string = '';
  mensaje: string = '';
  tipoMensaje:string =''
;  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async validar() {
    if (this.txtPasswordConfirm !== '' && this.txtPassword !== '') {
      if (this.txtPassword === this.txtPasswordConfirm) {
        this.mensaje = 'Las contraseñas coinciden!';
        this.tipoMensaje = 'exito';
      } else {
        this.mensaje = 'NO coinciden las contraseñas!';
        this.tipoMensaje = 'error';
      }
    } else {
      this.tipoMensaje = 'error';
      if (this.txtPassword === '' && this.txtPasswordConfirm !== '') {
        this.mensaje = 'El campo contraseña esta vacio, llenelo por favor!';
      } else if (this.txtPasswordConfirm === '' && this.txtPassword !== ''){
        this.mensaje = 'El campo de verificacion de contraseña esta vacio, llenelo por favor!';
      }else{
        this.mensaje = 'Debe llenar ambos campos de contraseña, llenelos por favor!';
      }
    }
    const alerta = await this.alertCtrl.create({
      backdropDismiss: false,
      header: '¡Alerta!',
      subHeader: 'Validacion de contraseñas',
      message: this.mensaje,
      buttons: [{
        text: 'Entendido',
        handler: () => {
          console.log('Validando contraseña!');
        },
        cssClass: 'blue'
      }
      ]
    });
    await alerta.present();
    this.limpiar();
  }

  limpiar() {
    console.log('Borrando campos de contraseñas');
    this.txtPassword = '';
    this.txtPasswordConfirm = '';
  }

}
