import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do'
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';

/*
  Generated class for the QrCodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrCodeProvider {
  basepath = "/api"

  private url: string = "https://testeqrcodeapp.herokuapp.com"

  constructor(private http: Http, 
    private _platform: Platform) {
      if(this._platform.is("cordova")){
        this.basepath = "https://testeqrcodeapp.herokuapp.com"
      
     }
    }
   

getProduto(){
 return this.http.get(this.basepath + "/produto")
  .do(res => console.log(res));

}
}
