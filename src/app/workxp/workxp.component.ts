import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workxp',
  templateUrl: './workxp.component.html',
  styleUrls: ['./workxp.component.css']
})
export class WorkxpComponent implements OnInit {
	samples;
	url;
  constructor() { }

  ngOnInit() {
  this.samples = [
    	{language:'d3js',works:['https://github.com/st4rgut22/mybiography/blob/master/src/assets/images/epa.gif','/assets/images/pets.gif']},
  		{language:'js',works:['/assets/images/light.gif','/assets/images/rot.gif']},
  		{language:'html',works:['/assets/images/coop.gif','/assets/images/juno.gif']}
  		];

  };


}
