import Drug from "./Drug";
import Benefit from "./misc/Benefit";

export default class ClassicDrug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateExpiresIn(expiresIn) {
    return expiresIn - 1;
  }

  updateBenefitValue(benefit, expiresIn) {
    if (expiresIn < 0) {
      return benefit.add(-2);
    }
    return benefit.add(-1);
  }

  updateForNextDay() {
    const updatedExpiresIn = this.updateExpiresIn(this.expiresIn);
    const updatedBenefit = this.updateBenefitValue(
      new Benefit(this.benefit),
      updatedExpiresIn
    );
    return new Drug(this.name, updatedExpiresIn, updatedBenefit);
  }
}
