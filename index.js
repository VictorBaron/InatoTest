import Pharmacy from "./models/Pharmacy";
import DrugFactory from "./models/drugs/DrugFactory";

import fs from "fs";

const drugs = [
  new DrugFactory("Doliprane", 20, 30),
  new DrugFactory("Herbal Tea", 10, 5),
  new DrugFactory("Fervex", 5, 40),
  new DrugFactory("Magic Pill", 15, 40)
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log, err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
