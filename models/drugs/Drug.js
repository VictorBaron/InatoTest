import DrugFactory from "./DrugFactory";
import Benefit from "./misc/Benefit";

export default class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = new Benefit(benefit);
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
      this.benefit,
      updatedExpiresIn
    );
    return new DrugFactory(this.name, updatedExpiresIn, updatedBenefit);
  }
}
