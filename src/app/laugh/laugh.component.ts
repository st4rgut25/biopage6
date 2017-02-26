import {Component, Pipe, PipeTransform} from '@angular/core';
@Component({
	selector: 'my-app',
	templateUrl: 'laugh.component.html',
	styleUrls: ['./laugh.component.css']
})
export class LaughComponent { 

  demo = [
	{topic:'Politics',question:['How do we fix our bloated economy?','What do politicians and diapers have in common?'],answer:['We trim the Fiat','They should be changed regularly']},
	{topic:'Science',question:['What did Stephen Hawking say to the soprano?','What do astronomists eat for lunch?'],answer:['my ears hertz!','Jam,Peanuts,Lettuce']},
	{topic:'Technology',question:['What did the DNA say to the other DNA??','Why was the JavaScript developer sad? '],answer:['Do these genes make my butt look fat','Because he didnt Node how to Express himself']},
	{topic:'Sports',question:['What has 18 legs and catches flies??','Why cant Shaq shoot free-throws?'],answer:['A baseball team',"He'd rather dunk them"]}
		]

reveal(event,t,q){
	event.target.innerHTML = this.demo[t].answer[q];
}

}

