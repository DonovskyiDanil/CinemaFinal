export const BASE_URL = 'http://localhost:4000/';

export const emptyMovie = {
  id: null,
  title: '',
  actors: [''],      
  directors: [''],   
  studios: [''],     
  poster: '',
};

export const emptyActor = {
  id: null,
  movies: [''],
  fullName: '',
  birthYear: '',
  nationality: '',
  image: '',
};

export const emptyDirector = {
  id: null,
  movies: [''],
  fullName: '',
  birthYear: '',
  nationality: '',
  image: '',
};
export const emptyStudio = {
  id: null,
  title: '',  
  logo: '',
  location: '',
  founded: '', 
  notableFilms: '', 
  awards: '', 
  typesOfProduction: '', 
  collaborations: '', 
};

export const nationalities = [
  'USA',
  'United Kingdom',
  'Canada',
  'France',
  'Australia',
  'Germany',
  'Ukraine',
  'Italy'
];
