interface Person {
  id?: number;
  name: string;
  age: number;
}

const pessoas: Person[] = [
  { name: "Fabiana Araújo", age: 33 },
  { name: "Gabriel Gomes", age: 25 },
  { name: "Fernando Henrique", age: 17 },
  { name: "Ana Luiza", age: 2 },
  { name: "Geralda do Nascimento", age: 93 },
  { name: "Miguel Souza", age: 70 },
  { name: "Antonio Miguel", age: 69 },
];

// 3 - Retorna os dados de uma pessoa pelo nome passado via parâmetros
function findByName(personsList: Person[], name: string): Person | undefined {
  return personsList.find((person) => person.name === name);
}

// 4 - Retorna um vetor com os nomes das pessoas
function personsNames(personsList: Person[]): string[] {
  const names = personsList.map((person) => {
    return person.name.split(" ")[0];
  });

  return names;
}

// 5 - Insere um id único para cada pessoa no vetor
function giveId(personsList: Person[]): Person[] {
  const persons = personsList.map((person, index) => {
    return {
      name: person.name,
      age: person.age,
      id: index + 1,
    };
  });

  return persons;
}

// 6 - Retorna os dados das pessoas para quem tem idade suficiente para tirar a primeira habilitação
function ageGreaterThan18(personsList: Person[]): Person[] {
  const persons = personsList.filter((person) => person.age >= 18);

  return persons;
}

// 7 - Retorna a média das idades das pessoas
function ageAverage(personsList: Person[]): number {
  const ageSum = personsList
    .map((person) => person.age)
    .reduce((accumulator, current) => {
      return accumulator + current;
    });

  return ageSum / personsList.length;
}
