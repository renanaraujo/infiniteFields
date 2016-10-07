import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    inputs: Array<{ title: string, type: string, value: string }>;

    constructor(public navCtrl: NavController) {

        this.inputs = [
            { title: "teste", type: "text", value: "valor" },
            { title: "teste2", type: "text", value: "valor2" }
        ];
    }

    adicionarCampo() {
        this.inputs.push({ title: "teste", type: "text", value: "valor" });
    }

}
