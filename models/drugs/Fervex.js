import Drug from "./Drug";
import { FERVEX } from "./drugsList";

export default class Fervex extends Drug {
  constructor(name, expiresIn, benefit) {
    super(FERVEX, expiresIn, benefit);
  }

  updateBenefit(benefit, expiresIn) {
    if (expiresIn < 0) {
      return 0;
    }
    if (expiresIn >= 10) {
      benefit++;
    } else if (expiresIn >= 5) {
      benefit = benefit + 2;
    } else {
      benefit = benefit + 3;
    }

    return benefit < 50 ? benefit : 50;
  }

  updateBenefitValue() {
    const updatedExpiresIn = this.updateExpiresIn(this.expiresIn);

    const updatedBenefit = this.updateBenefit(this.benefit, updatedExpiresIn);

    return new Fervex(this.name, updatedExpiresIn, updatedBenefit);
  }
}
