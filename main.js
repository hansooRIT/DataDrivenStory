let speciesMap = new Map();
let otherSpeciesMap = new Map();
let speciesStatusMap = new Map();


let dataset;
let xScale, yScale;
let xAxis, yAxis;
let xAxisGroup, yAxisGroup;

function rowConverter(row) {
    return {
        species: row.animal_type,
        breed: row.breed,
        condition: row.intake_condition,
        intake_type: row.intake_type,
        outcome_type: row.outcome_type,
    }
}

function generateSpeciesCount(dataset) {
    for (let i = 0; i < dataset.length; i++) {
        let row = dataset[i];
        if (speciesMap.has(row.species)) {
            speciesMap.set(row.species, speciesMap.get(row.species) + 1);
        }
        else {
            speciesMap.set(row.species, 1);
        }
    }   
}

/*
Plan

1. Create bar graphs displaying number of animals per species.
1a. Hovering over each graph will display a tooltip with the species name, and total number of animals in the shelter.
2. Upon clicking each graph, change display to a pie chart of animal outcomes.
    ie. Adopted, euthanized, etc.
2a. For the 'others' category, the display will change to be a bar graph specifying the different species. Upon clicking the specific charts, the behavior will be like the specified outcome in 2.

How to proceed

1. Create a rowConverter function to get each row of data in the csv as an object to manipulate.
2. Create separate functions to generate the appropriate data and populate maps/datasets.
    ie. With things marked as 'other' species, have an auxilary function populate a map with the different species from there.
3. Once I know all of that data is getting generated, create the graphs as needed.
*/

window.onload = function() {
  // do d3 stuff here...
    d3.csv('aac_intakes_outcomes_trimmed.csv', rowConverter)
        .then((d) => {
        dataset = d;
    });
}
