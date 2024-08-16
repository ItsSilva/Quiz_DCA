//1.
const array1 = [
    {
        id: 0,
        name: 'Run',
        completed: false
    },
    {
        id: 1,
        name: 'Jump',
        completed: false
    },
    {
        id: 2,
        name: 'Swim',
        completed: false
    }
];
const arraysBaseInConditions = (elements, id) => {
    elements.forEach(element => {
        if(element.id === id){
            element.completed = true
        };
    });;
    return elements;
};
console.log(arraysBaseInConditions(array1, 1));

//2.
const array2 = [
    {
        city: 'Pasto',
        population: 10000
    },
    {
        city: 'Palmira',
        population: 50000
    },
    {
        city: 'Cali',
        population: 100000
    }
];
const maxValueObject = () => {
    let counter = array2[0];
    array2.forEach(element => {
        if(counter.population < element.population){
            counter = element
        } 
    })
    return counter
}
console.log(maxValueObject())