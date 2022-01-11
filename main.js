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




let btn = document.getElementById('addMemberButton');

//esercizio di base



for (i = 0; i < team.length; i++){
  creazioneTeamCard(team[i])
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


//Aggiungere membri creati dall'utente da tasto add




function creazioneTeamCard2(){
  let nome = document.getElementById('name').value;
  let role = document.getElementById('role').value;
  let image = document.getElementById('image').value;

  svuotaForm();

  //oggetto da pushare nell'arrey
  let userCard ={
    nome : nome,
    role : role,
    image : image,
  }

  container.innerHTML += `
  <div class="team-card">
  <div class="card-image">
    <img
      src="${image}"
      alt=""
    />
  </div>
  <div class="card-text">
    <h3>${nome}</h3>
    <p>${role}</p>
  </div>
  `
  //pushiamo l'oggetto nel nostro array e vediamo se viene aggiunto
  team.push(userCard);
  console.log(team);
}


function svuotaForm(){
  document.getElementById("name").value = "";
  document.getElementById("role").value = "";
  document.getElementById("image").value = "" ;
}


btn.addEventListener("click", creazioneTeamCard2);






