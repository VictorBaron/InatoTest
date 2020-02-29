import ClassicDrug from "./ClassicDrug";

export default class HerbalTea extends ClassicDrug {
  updateBenefitValue(benefit, expiresIn) {
    if (expiresIn < 0) {
      return benefit.add(2);
    }
    return benefit.add(1);
  }
}
