import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wavvy-wallet',
  templateUrl: './wavvy-wallet.component.html',
  styleUrls: ['./wavvy-wallet.component.scss']
})
export class WavvyWalletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projectItems: any[]=[
    {images : "../../assets/images/role.svg", text: "My Role", description: "UX/UI Designer"},
    {images : "../../assets/images/team.svg", text: "The Team", description: "1x UX/UI Designer", description2: "1x Front-end Developer", description3: "1x Back-end Developer"},
    {images : "../../assets/images/contributions.svg", text: "My Key Contributions", description: "Concept Ideation", description2: "Competitive Research", description3: "Prototyping", description4: "User Research", description5: "Interaction Design", description6: "Logo Design"},
    {images : "../../assets/images/tools.svg", text: "Tools Used", description: "Adobe XD", description2: "Adobe Illustrator"},
    {images : "../../assets/images/duration.svg", text: "Duration", description: "UX - one week", description2: "UI Design - two weeks"}
  ]

  approach: any[]=[
    {images : "../../assets/images/empathy.svg", text: "Empathize", description: "Background Research", description2: "Founder/user interviews", description3: "Competitor Analysis"},
    {images : "../../assets/images/specify.svg", text: "Specify", description: "Feature Prioritization", description2: "App Functionality"},
    {images : "../../assets/images/ideate.svg", text: "Ideate", description: "Lo-fi Sketches"},
    {images : "../../assets/images/prototype.svg", text: "Bring to Life", description: "Prototype Design"},
    {images : "../../assets/images/verify.svg", text: "Verify", description: "Prototype Testing", description2: "User Testing"},
  ]
}
