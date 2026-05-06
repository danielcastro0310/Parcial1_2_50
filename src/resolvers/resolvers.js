import { departments, regions } from '../data/colombiaData.js';

export const resolvers = {
  Query: {
    departmentById: (_, { id }) => {
      return departments.find(d => d.id === parseInt(id));
    },
    departmentByName: (_, { name }) => {
      return departments.find(d => d.name.toLowerCase() === name.toLowerCase());
    },
    allDepartments: () => {
      return departments;
    },
    departmentsByRegionId: (_, { regionId }) => {
      return departments.filter(d => d.regionId === parseInt(regionId));
    },
    departmentsByMinPopulation: (_, { minPopulation }) => {
      return departments.filter(d => d.population >= minPopulation);
    },
    regionById: (_, { id }) => {
      return regions.find(r => r.id === parseInt(id));
    },
    regionByName: (_, { name }) => {
      return regions.find(r => r.name.toLowerCase() === name.toLowerCase());
    },
    allRegions: () => {
      return regions;
    }
  },
  Department: {
    region: (parent) => {
      if (!parent.regionId) return null;
      return regions.find(r => r.id === parent.regionId);
    }
  },
  Region: {
    departments: (parent) => {
      return departments.filter(d => d.regionId === parent.id);
    }
  }
};