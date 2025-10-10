// TODO: write code here

// comment this to pass build
const unusedVariable = "variable";

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}

console.log("app.js included");

let filmArray = [
  {
    "id": 26,
    "title": "Побег из Шоушенка",
    "imdb": 9.30,
    "year": 1994
  },
  {
    "id": 25,
    "title": "Крёстный отец",
    "imdb": 9.20,
    "year": 1972
  },
  {
    "id": 27,
    "title": "Крёстный отец 2",
    "imdb": 9.00,
    "year": 1974
  },
  {
    "id": 1047,
    "title": "Тёмный рыцарь",
    "imdb": 9.00,
    "year": 2008
  },
  {
    "id": 223,
    "title": "Криминальное чтиво",
    "imdb": 8.90,
    "year": 1994
  }
]
localStorage.setItem('filmArray', JSON.stringify(filmArray));
let storedFilms = JSON.parse(localStorage.getItem('filmArray'));

export function outputTitle() {
  for (let index = 0; index < 4; index++) {
    let cellEl1 = document.createElement('div');
    cellEl1.classList.add('A1');
    switch (index) {
      case 0: cellEl1.textContent = 'id';
      break;
      case 1: cellEl1.textContent = 'title';
      break;
      case 2: cellEl1.textContent = 'year';
      break;
      case 3: cellEl1.textContent = 'imdb';
      break;
    };
    let tableEl = document.querySelector('.table');
    tableEl.appendChild(cellEl1);
  };
}


export function outputFilms(arrayFilms) {
  for (const film of arrayFilms) {
    for (let index = 0; index < 4; index++) {
      let cellEl = document.createElement('div');
      cellEl.classList.add('A');
      switch (index) {
        case 0: cellEl.textContent = film.id;
        break;
        case 1: cellEl.textContent = film.title;
        break;
        case 2: cellEl.textContent = film.year;
        break;
        case 3: cellEl.textContent = film.imdb;
        break;
      };
      let tableEl = document.querySelector('.table');
      tableEl.appendChild(cellEl);
    }
  }
}

export function removeFilms () {
  let arrFilmEl = document.querySelectorAll('.A');
  for (let index = 0; index < (arrFilmEl.length*4); index++) {
  let filmEl = document.querySelector('.A');
    if (filmEl) {
      filmEl.remove();
    }
  }
}

export function sortFilm  (titleTable, arrayFilms, f) {
  console.log(typeof arrayFilms[0][titleTable] === "string");
  if (typeof arrayFilms[0][titleTable] === "string") {
    if (f === 1) {
      arrayFilms.sort((a,b) => a[titleTable].localeCompare(b[titleTable]));
      console.log(arrayFilms);
    } else {
        arrayFilms.sort((a,b) => b[titleTable].localeCompare(a[titleTable]));
        console.log(arrayFilms);
    }
  } else {
    if (f === 1) {
      arrayFilms.sort((a,b) => a[titleTable] - b[titleTable]);
      console.log(arrayFilms);
    } else {
      arrayFilms.sort((a,b) => b[titleTable] - a[titleTable]);
      console.log(arrayFilms);
    }  
  }
}

const keysArr = Object.keys(storedFilms[0]);
let arrNew = [...keysArr];
let n=1;
for (let ind = 0; ind < 4; ind++) {
  arrNew.splice(n, 0, keysArr[ind]);
  n=n+2;
}
[arrNew[4],arrNew[6]] = [arrNew[6],arrNew[4]];
[arrNew[5],arrNew[7]] = [arrNew[7],arrNew[5]];
// arrNew.splice(6,2);
// arrNew.splice(4,0,'year');
// arrNew.splice(4,0,'year');
console.log(arrNew);
outputTitle();
let flag = 1;
let index = -1;
const IntervalId = setInterval(() => {
  if (++index === arrNew.length) {
    index = -1;
  } else {
    removeFilms(); 
    console.log(arrNew[index]);
    sortFilm(arrNew[index], storedFilms, flag);
    outputFilms(storedFilms);
    flag = flag * (-1);
  }
}, 4000)
    
