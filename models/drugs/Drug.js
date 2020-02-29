export default class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  decreaseExpiresIn(expiresIn) {
    return expiresIn - 1;
  }

  decreaseBenefit(benefit) {
    if (benefit > 0) {
      return benefit - 1;
    }
    return benefit;
  }

  updateBenefitValue() {
    const updatedExpiresIn = this.decreaseExpiresIn(this.expiresIn);
    let updatedBenefit = this.decreaseBenefit(this.benefit);
    if (updatedExpiresIn < 0) {
      updatedBenefit = this.decreaseBenefit(updatedBenefit);
    }

    return new Drug(this.name, updatedExpiresIn, updatedBenefit);
  }
}
