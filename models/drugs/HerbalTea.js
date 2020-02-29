import Drug from "./Drug";

export default class HerbalTea extends Drug {
  updateBenefitValue(benefit, expiresIn) {
    if (expiresIn < 0) {
      return benefit.add(2);
    }
    return benefit.add(1);
  }
}
