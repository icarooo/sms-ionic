import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})

export class HomePage {

	data: Array<any>;
	res: {success: Boolean,msg : String,data: Array<any>};
	result: {total: number};
	
  constructor(public navCtrl: NavController,private http:Http,public loadingController: LoadingController) {
	this.getClientes();
  }
  getClientes() {
	let loader = this.loadingController.create({content:'Carregando dados...'});  
	loader.present();
	this.http.get('http://ipr.net.br/segunda-via/restfull/clientes')
      .subscribe(
	  data =>  this.data = JSON.parse(data.json().data) ,
	  err => console.log(err),
	  ()=> loader.dismiss()
	  )
  }
}
