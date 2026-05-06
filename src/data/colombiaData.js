
// Contexto 
// El proyecto utiliza dos elementos relacionados: En este caso pues son Departamentos y Regiones de Colombia. 
// Un departamento pertenece a una región específica y una región contiene muchos departamentos. 
// Y esta relación permite consultar que región pertenece un departamento o que departamentos tiene una región.

// Aca Tengo la data de los departamentos De Colombia.
export const departments = [
  {"id":1,"name":"Amazonas","description":"Amazonas es uno de los treinta y dos departamentos...","cityCapitalId":1,"municipalities":2,"surface":109665,"population":82068,"phonePrefix":"8","countryId":1,"regionId":4},
  {"id":2,"name":"Antioquia","description":"Antioquia es uno de los treinta y dos departamentos...","cityCapitalId":12,"municipalities":125,"surface":63612,"population":6887306,"phonePrefix":"4","countryId":1,"regionId":5},
  {"id":3,"name":"Arauca","description":"Arauca es uno de los treinta y dos departamentos...","cityCapitalId":143,"municipalities":7,"surface":23818,"population":304978,"phonePrefix":"7","countryId":1,"regionId":3},
  {"id":4,"name":"Atlántico","description":"El Atlántico es uno de los treinta y dos departamentos...","cityCapitalId":144,"municipalities":23,"surface":3388,"population":2804025,"phonePrefix":"5","countryId":1,"regionId":1},
  {"id":5,"name":"Bogotá","description":"Bogotá, oficialmente Bogotá, Distrito Capital...","cityCapitalId":167,"municipalities":1,"surface":1139,"population":8906342,"phonePrefix":"1","countryId":1,"regionId":5},
  {"id":6,"name":"Bolívar","description":"Bolívar es uno de los treinta y dos departamentos...","cityCapitalId":210,"municipalities":45,"surface":25978,"population":2236603,"phonePrefix":"5","countryId":1,"regionId":1},
  {"id":7,"name":"Boyacá","description":"Boyacá es uno de los treinta y dos departamentos...","cityCapitalId":217,"municipalities":123,"surface":23189,"population":1259601,"phonePrefix":"8","countryId":1,"regionId":5},
  {"id":8,"name":"Caldas","description":"Caldas es uno de los treinta y dos departamentos...","cityCapitalId":337,"municipalities":27,"surface":7888,"population":1036455,"phonePrefix":"6","countryId":1,"regionId":5},
  {"id":9,"name":"Caquetá","description":"Caquetá es uno de los treinta y dos departamentos...","cityCapitalId":364,"municipalities":16,"surface":88965,"population":419275,"phonePrefix":"8","countryId":1,"regionId":4},
  {"id":10,"name":"Casanare","description":"Casanare es uno de los treinta y dos departamentos...","cityCapitalId":380,"municipalities":19,"surface":44640,"population":442068,"phonePrefix":"8","countryId":1,"regionId":3},
  {"id":11,"name":"Cauca","description":"Cauca es uno de los treinta y dos departamentos...","cityCapitalId":399,"municipalities":41,"surface":29308,"population":1516018,"phonePrefix":"2","countryId":1,"regionId":2},
  {"id":12,"name":"Cesar","description":"Cesar es uno de los treinta y dos departamentos...","cityCapitalId":441,"municipalities":25,"surface":22905,"population":1341697,"phonePrefix":"4","countryId":1,"regionId":1},
  {"id":13,"name":"Chocó","description":"Chocó es uno de los treinta y dos departamentos...","cityCapitalId":467,"municipalities":31,"surface":46530,"population":553519,"phonePrefix":"4","countryId":1,"regionId":2},
  {"id":14,"name":"Córdoba","description":"Córdoba es uno de los 32 departamentos...","cityCapitalId":498,"municipalities":30,"surface":25020,"population":1856496,"phonePrefix":"4","countryId":1,"regionId":1},
  {"id":15,"name":"Cundinamarca","description":"Cundinamarca es uno de los 32 departamentos...","cityCapitalId":167,"municipalities":116,"surface":23071,"population":2473634,"phonePrefix":"1","countryId":1,"regionId":5},
  {"id":16,"name":"Guainía","description":"Guainía es uno de los treinta y dos departamentos...","cityCapitalId":644,"municipalities":2,"surface":72238,"population":52061,"phonePrefix":"8","countryId":1,"regionId":4},
  {"id":17,"name":"Guaviare","description":"Guaviare es uno de los treinta y dos departamentos...","cityCapitalId":654,"municipalities":4,"surface":53460,"population":90357,"phonePrefix":"8","countryId":1,"regionId":4},
  {"id":18,"name":"Huila","description":"Huila es uno de los treinta y dos departamentos...","cityCapitalId":657,"municipalities":37,"surface":19890,"population":1140932,"phonePrefix":"8","countryId":1,"regionId":5},
  {"id":19,"name":"La Guajira","description":"La Guajira es uno de los treinta y dos departamentos...","cityCapitalId":694,"municipalities":15,"surface":20848,"population":1002394,"phonePrefix":"5","countryId":1,"regionId":1},
  {"id":20,"name":"Magdalena","description":"Magdalena es uno de los treinta y dos departamentos...","cityCapitalId":709,"municipalities":30,"surface":23188,"population":1463427,"phonePrefix":"5","countryId":1,"regionId":1},
  {"id":21,"name":"Meta","description":"Meta es uno de los treinta y dos departamentos...","cityCapitalId":740,"municipalities":29,"surface":85635,"population":1080706,"phonePrefix":"8","countryId":1,"regionId":3},
  {"id":22,"name":"Nariño","description":"Nariño es uno de los treinta y dos departamentos...","cityCapitalId":769,"municipalities":64,"surface":33268,"population":1629181,"phonePrefix":"2","countryId":1,"regionId":2},
  {"id":23,"name":"Norte de Santander","description":"Norte de Santander es uno de los treinta y dos departamentos...","cityCapitalId":870,"municipalities":40,"surface":21658,"population":1651278,"phonePrefix":"7","countryId":1,"regionId":5},
  {"id":24,"name":"Putumayo","description":"Putumayo es uno de los treinta y dos departamentos...","cityCapitalId":872,"municipalities":13,"surface":24885,"population":369064,"phonePrefix":"8","countryId":1,"regionId":4},
  {"id":25,"name":"Quindío","description":"Quindío es uno de los treinta y dos departamentos...","cityCapitalId":885,"municipalities":12,"surface":1845,"population":569569,"phonePrefix":"6","countryId":1,"regionId":5},
  {"id":26,"name":"Risaralda","description":"Risaralda es uno de los treinta y dos departamentos...","cityCapitalId":897,"municipalities":14,"surface":4140,"population":977829,"phonePrefix":"6","countryId":1,"regionId":5},
  {"id":27,"name":"San Andrés y Providencia","description":"El archipiélago de San Andrés...","cityCapitalId":912,"municipalities":2,"surface":44,"population":65228,"phonePrefix":"8","countryId":1,"regionId":6},
  {"id":28,"name":"Santander","description":"Santander es uno de los treinta y dos departamentos...","cityCapitalId":915,"municipalities":87,"surface":30537,"population":2324090,"phonePrefix":"7","countryId":1,"regionId":5},
  {"id":29,"name":"Sucre","description":"Sucre es uno de los treinta y dos departamentos...","cityCapitalId":1000,"municipalities":26,"surface":10917,"population":972350,"phonePrefix":"5","countryId":1,"regionId":1},
  {"id":30,"name":"Tolima","description":"Tolima es uno de los treinta y dos departamentos...","cityCapitalId":1069,"municipalities":47,"surface":23562,"population":1346935,"phonePrefix":"8","countryId":1,"regionId":5},
  {"id":31,"name":"Valle del Cauca","description":"Valle del Cauca es uno de los treinta y dos departamentos...","cityCapitalId":1093,"municipalities":42,"surface":22140,"population":4589278,"phonePrefix":"2","countryId":1,"regionId":2},
  {"id":32,"name":"Vaupés","description":"Vaupés es uno de los treinta y dos departamentos...","cityCapitalId":1115,"municipalities":3,"surface":54135,"population":48932,"phonePrefix":"8","countryId":1,"regionId":4},
  {"id":33,"name":"Vichada","description":"Vichada es uno de los treinta y dos departamentos...","cityCapitalId":1121,"municipalities":4,"surface":100242,"population":115778,"phonePrefix":"8","countryId":1,"regionId":3}
];
// Y aca tengo la data de las regiones de Colombia.
export const regions = [
  {"id":1,"name":"Caribe","description":"La región caribe es una de las regiones más importantes del territorio Colombiano."},
  {"id":2,"name":"Pacífico","description":"La Región del Pacífico se ubica al occidente de Colombia."},
  {"id":3,"name":"Orinoquía","description":"La Orinoquia es una de las regiones más importantes del país."},
  {"id":4,"name":"Amazonía","description":"La región amazónica es la región de mayor tamaño en todo el país."},
  {"id":5,"name":"Andina","description":"La región Andina es la región con mayor desarrollo económico y social del país."},
  {"id":6,"name":"Insular","description":"La Región Insular cuenta con una serie de atractivos."}
];
