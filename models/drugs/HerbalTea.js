import Drug from "./Drug";
import { HERBAL_TEA } from "./drugsList";

export default class HerbalTea extends Drug {
  constructor(name, expiresIn, benefit) {
    super(HERBAL_TEA, expiresIn, benefit);
  }

  updateBenefit(benefit) {
    if (benefit < 50) {
      return benefit + 1;
    }
    return benefit;
  }

  updateBenefitValue() {
    const updatedExpiresIn = this.updateExpiresIn(this.expiresIn);
    let updatedBenefit = this.updateBenefit(this.benefit);
    if (updatedExpiresIn < 0) {
      updatedBenefit = this.updateBenefit(updatedBenefit);
    }

    return new HerbalTea(this.name, updatedExpiresIn, updatedBenefit);
  }
}
