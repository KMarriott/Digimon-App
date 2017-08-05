
//evolution checks should return true or false

let greymon_check = (digimon) => {
  if(digimon.age>10)
  return true
}

let tyrannomon_check = (digimon) => {
  if(digimon.weight>10)
  return true
}

let agumon_json = {
  species: "Agumon",
  stage: "Child",
  image: "https://wikimon.net/images/2/28/Agumon_vpet_dv.gif",
  evolutions : {
    priority: [
    {name: "Greymon", data: greymon_json, check: greymon_check},
    {name: "Tyrannomon", data: tyrannomon_json, check: tyrannomon_check}
  ]
}


let greymon_json = {
  species: "Greymon",
  stage: "Adult",
  image: "https://wikimon.net/images/5/5c/Greymon_vpet_dv.gif",
  evolutions : {
    priority: [
    {name: "Greymon", data: greymon_json, check: false},
    {name: "Tyrannomon", data: tyrannomon_json, check: false}
  ]
}



let tyrannomon_json = {
  species: "Tyrannomon",
  stage: "Adult",
  image: "https://wikimon.net/images/2/29/Tyranomon_vpet_d3.gif"
  evolutions : {
    priority: [
    {name: "Greymon", data: greymon_json, check: false},
    {name: "Tyrannomon", data: tyrannomon_json, check: false}
  ]
},
}
