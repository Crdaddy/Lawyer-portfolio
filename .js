const players = [
    {name:"David", position:Right winger},
    {name:"Eugene", position:Central Attacking Midfilder},
    {name:"Odegard", position:left back},
    {name:"Evans", position:Center back},
    {name:"Gasper", position:Attacking Midfilder},
    {name:"Ali", position:Left winger},
    {name:"Ogada", position:Right back},
    {name:"Frank", position:Defensive Midfilder},
    {name:"Shadrack", position:Central Forward},
    {name:"Edwin", position:Left winger},
    {name:"Abdi", position:Right winger},
    {name:"Allan", position:Central forward},
    {name:"Junior", position:Center back},
    {name:"Romeo", position:Left winger},
    {name:"Enock", position:Center back},
    {name:"Kim", position:Right wing back},
    {name:"Rooney", position:Right wing back}, 
];
const stadiums = [
    "Jogoo Grounds",
    "Showgrounds",
    "Jaba base",
    "Mutua grounds"
];
const playersList=
document.getElementById('player-list');
players.forEach(player =>{
    const div= document.createElement('div');
    div.className= 'player-card';
    div.innerHTML ='<h3>${player.name}<h3><p>${player.position}</p>';
    playersList.appendChild(div);
});
const stadiumList = document.getElementById('stadiums-list');
stadiums.forEach(stadium =>{
    const li = document.createElement('li');
    li.textContent = stadium;
    stadiumList.appendChild(li);
});