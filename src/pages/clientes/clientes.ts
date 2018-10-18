import { Component } from '@angular/core';
import { NavController, NavParams ,PopoverController, LoadingController} from 'ionic-angular';
import { ClientespopoverPage } from '../clientespopover/clientespopover';
import { SMS } from '@ionic-native/sms';

import { Http } from '@angular/http';

@Component({
	selector: 'page-list',
	templateUrl: 'clientes.html'

})
export class ClientesPage {
	data: Array<any>;
	res: {success: Boolean,msg : String,data: Array<any>};
	result: {total: number};
	constructor(private smsVar: SMS,public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,private http:Http,public loadingController: LoadingController) {
		this.getList();
	}
	getList(){
		let loader = this.loadingController.create({content:'Carregando dados...'});  
		loader.present();
		this.http.get('http://url/sms/app/controller/receber.php')
		.subscribe(
			data => this.data = data.json(),
			err => console.log(err),
			()=>loader.dismiss()
			)
	}

	clientesPopover(event) {
		let popover = this.popoverCtrl.create(ClientespopoverPage);
		popover.present({
			ev:event
		});
		popover.onDidDismiss(data => {
			if (data == 1 ) { this.getList(); }
			if (data == 2 ) { this.selectAll(); }
			if (data == 3 ) { this.loopsms(); }
		});
		
	}
	checkSMS(data) {
		this.http.get('http://url/sms/app/controller/atualizar.php?idsms=' + data.idsms)
		.subscribe(res=> {
			this.result=res.json();

			if (this.result.total) {
				this.sendSMS(data.telefone,data.texto)
			}
			else {
				alert("SMS ja foi enviado \n idsms: " + data.idsms + " nome: " + data.nome)			  
			}
			this.data.splice(this.data.indexOf(data),1)
		})
		
	}
	loopsms() {
		this.data.forEach((data) => {
			if (data.checked) {
				this.checkSMS(data);
			}
			
		}) 
	}
	sendSMS(telefone,texto){
		
		
		var options={
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
               intent: ''  // Opens Default sms app
              //intent: '' // Sends sms without opening default sms app
          }
      }
      this.smsVar.send(telefone, texto,options)
      .then(()=>{
      	console.log("success");
      },()=>{
      	alert("failed: " + telefone);
      });
  }
  
  
  selectAll(){
  	this.data.forEach((data) => {
  		if (!data.checked) {
  			data.checked=true;
  		}
  		else {
  			data.checked=false;
  		}
  		
  	}) 
  }
}
