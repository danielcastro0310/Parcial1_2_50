# Parcial1_2_50 - Daniel Santiago Espinosa Castro

## Datos
- Nombre: Daniel Santiago Espinosa Castro
- Codigo: 202114104
- Materia: Electiva 2 Desarrollo Web
- Parcial: Parcial 2 (Segundo 50%)
- Docente: Ing Jairo Riaño

## Contexto
Departamentos y Regiones de Colombia. Un departamento pertenece a una region y una region tiene muchos departamentos.

## Servidor
http://localhost:4000

## Queries disponibles

departmentById(id: ID!)

departmentByName(name: String!)

allDepartments

departmentsByRegionId(regionId: ID!)

departmentsByMinPopulation(minPopulation: Int!)

regionById(id: ID!)

regionByName(name: String!)

allRegions

## Ejemplos de uso

Obtener un departamento por ID:
{
  departmentById(id: 5) {
    name
    population
    region {
      name
    }
  }
}


Obtener departamentos de la region Andina:
{
  departmentsByRegionId(regionId: 5) {
    name
    population
  }
}


Obtener departamentos con mas de 2 millones de habitantes:
{
  departmentsByMinPopulation(minPopulation: 2000000) {
    name
    population
  }
}

## Fragments

BasicDepartment: id, name, description, population, municipalities, surface

FullDepartment: BasicDepartment + phonePrefix, regionId, region

BasicRegion: id, name, description

FullRegion: BasicRegion + departments


## Estructura del proyecto

Parcial1_2_50/

├── index.js

├── package.json

├── src/

│   ├── data/colombiaData.js

│   ├── resolvers/resolvers.js

│   ├── schema/schema.js

│   └── queries/clientQueries.graphql

└── README.md
