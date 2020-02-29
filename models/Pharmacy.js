import { FERVEX } from "./drugs/drugsList";

const oldSchoolAlgorithmDrugs = [FERVEX];

export default class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs = this.drugs.map(drug => {
      if (!oldSchoolAlgorithmDrugs.includes(drug.name)) {
        return drug.updateBenefitValue();
      }

      if (drug.benefit < 50) {
        drug.benefit = drug.benefit + 1;
        if (drug.name == FERVEX) {
          if (drug.expiresIn < 11) {
            if (drug.benefit < 50) {
              drug.benefit = drug.benefit + 1;
            }
          }
          if (drug.expiresIn < 6) {
            if (drug.benefit < 50) {
              drug.benefit = drug.benefit + 1;
            }
          }
        }
      }

      drug.expiresIn = drug.expiresIn - 1;
      if (drug.expiresIn < 0) {
        drug.benefit = drug.benefit - drug.benefit;
      }

      return drug;
    });

    return this.drugs;
  }
}
