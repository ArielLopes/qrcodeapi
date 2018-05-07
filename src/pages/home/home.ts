import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QrCodeProvider } from '../../providers/qr-code/qr-code'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private qrCodeProvider: QrCodeProvider) {
  this.getProduto();
  }
 getProduto() {
   this.qrCodeProvider.getProduto().subscribe(data => console.log(data));
   
 }
 
}

