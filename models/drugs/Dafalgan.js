import ClassicDrug from "./ClassicDrug";

export default class Dafalgan extends ClassicDrug {
  updateBenefitValue(benefit, expiresIn) {
    if (expiresIn < 0) {
      return benefit.add(-4);
    }
    return benefit.add(-2);
  }
}
