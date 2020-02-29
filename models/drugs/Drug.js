import DrugFactory from "./DrugFactory";

export default class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateExpiresIn(expiresIn) {
    return expiresIn - 1;
  }

  updateBenefit(benefit) {
    if (benefit > 0) {
      return benefit - 1;
    }
    return benefit;
  }

  updateBenefitValue() {
    const updatedExpiresIn = this.updateExpiresIn(this.expiresIn);
    let updatedBenefit = this.updateBenefit(this.benefit);
    if (updatedExpiresIn < 0) {
      updatedBenefit = this.updateBenefit(updatedBenefit);
    }

    return new DrugFactory(this.name, updatedExpiresIn, updatedBenefit);
  }
}
