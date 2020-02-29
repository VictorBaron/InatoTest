import { HERBAL_TEA, FERVEX, MAGIC_PILL } from "./drugs/drugsList";
import Drug from "./drugs/Drug";
const specialDrugs = [HERBAL_TEA, FERVEX, MAGIC_PILL];

export default class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs = this.drugs.map(drug => {
      if (!specialDrugs.includes(drug.name)) {
        return drug.updateBenefitValue();
      }
      if (drug.name != HERBAL_TEA && drug.name != FERVEX) {
        if (drug.benefit > 0) {
          if (drug.name != MAGIC_PILL) {
            drug.benefit = drug.benefit - 1;
          }
        }
      } else {
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
      }
      if (drug.name != MAGIC_PILL) {
        drug.expiresIn = drug.expiresIn - 1;
      }
      if (drug.expiresIn < 0) {
        if (drug.name != HERBAL_TEA) {
          if (drug.name != FERVEX) {
            if (drug.benefit > 0) {
              if (drug.name != MAGIC_PILL) {
                drug.benefit = drug.benefit - 1;
              }
            }
          } else {
            drug.benefit = drug.benefit - drug.benefit;
          }
        } else {
          if (drug.benefit < 50) {
            drug.benefit = drug.benefit + 1;
          }
        }
      }

      return drug;
    });

    return this.drugs;
  }
}
