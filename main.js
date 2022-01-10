const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'img/wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'img/angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'img/walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'img/angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'img/scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'img/barbara-ramos-graphic-designer.jpg',
  },
];

console.log(team.length);
let container = document.querySelector(".team-container");

for (i = 0; i < team.length; i++){
  creazioneTeamCard()
}


function creazioneTeamCard(){
  container.innerHTML += `
  <div class="team-card">
  <div class="card-image">
    <img
      src="${team[i].image}"
      alt=""
    />
  </div>
  <div class="card-text">
    <h3>${team[i].name}</h3>
    <p>${team[i].role}</p>
  </div>
  `
}
