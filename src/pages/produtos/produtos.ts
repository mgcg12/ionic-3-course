import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {
  public nomeDeUsuario: string = "Doge";
  public dataDoPost: string = "13 de maio de 2017, às 14h32";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  public soma(x:number, y:number){
  	alert(x + y);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
  }

}
