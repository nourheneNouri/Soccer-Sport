//importation d'un module 
import { Component } from '@angular/core';
//Décorateur
@Component({
  selector: 'app-root', //appel d'un component dans un autre component 
  templateUrl: './app.component.html', //partie graphique 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';


  calcul(a: number, b: number) {
    return a + b
  }
  tabGrand(tab: any) {
    let max = tab[0];
    for (let i = 1; i < tab.length; i++) {
      if (max < tab[i]) {
        max = tab[i]
      }
    }
    return max;
  }
  messageAlert() {
    alert("bonjour")

  }

  NombreVoyelCons(tab: any) {
    let voyel = 0;
    let cons = 0;
    let msg = " ";
    for (let i = 0; i < tab.length; i++) {
      for (let j = 0; j < tab[i].length; j++) {
        
      if (tab[i][j] === 'a' || tab[i][j] === 'e' || tab[i][j] === 'i' || tab[i][j] === 'o' 
      || tab[i][j] === 'u'  || tab[i][j] === 'y') {
        voyel = voyel+1 ;
      } else {
        cons = cons +1;
      }}

      msg += 'element choisi ' + tab[i] + 'Nombre de voyelle ' + voyel + 'Nombre de cons' + cons;

    }
    return msg ;


  }



}
