import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-resume',
  templateUrl: './app-resume.component.html',
  styleUrls: ['./app-resume.component.css']
})
export class AppResumeComponent implements OnInit {
	resume;
  message;
  initialSlide;
  slideContent;

  ngOnInit() {
    this.initialSlide = 0;

  	this.resume = [
		{company:'Heavy', position: 'Tech Contributor', Date:'October 2016 - December 2016','duties':['Identify, research and publish stories that will generate significant organic traffic','Manage all aspects of the publishing process on WordPress','Analyze data from Dataminr, Google AdWords and Google Trends to find trending topics']},
		{company:'Steele Consulting', position:'Media Coordinator', Date:'April 2013 - October 2015','duties':['Boosted organic traffic to website by 34 percent through SEO and revamped blog','Launched whatasteele radio, the podcast about entrepreneurship in real estate']},
		{company:'Wochit',position: 'Creator',Date:'April 2015 - October 2015','duties':['Produced videos that made our YouTube channel’s Top 25 for a subscriber base of over 25K people','Internally recognized twice for exceeding the threshold of videos created']},
		{company:'Inc.',position: 'Editorial Intern',Date:'March 2015 - June 2015','duties':['Created the 2015 Best in Class Awards page, a guide to the nation’s best designed products','Internally recognized twice for exceeding the threshold of videos created','Wrote 40 posts about start-up conferences, business executives, and national news']},
		{company:'The Chicago Tribune',position: 'Assistant Video Producer',Date:'Sept 2014 - Dec 2014','duties':['Shot & Produced breaking news videos and used Chartbeat to promote videos on landing page']}
  	]
    this.slideContent = this.resume[0]
}
  cycle(d){
    this.initialSlide += d
    console.log(this.initialSlide)
    if (this.initialSlide >= this.resume.length ){this.initialSlide -= 1}
    else if (this.initialSlide < 0){this.initialSlide += 1}
    else{
        this.slideContent = this.resume[this.initialSlide]}
  };


  }