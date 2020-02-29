import Drug from "./Drug";

export default class Dafalgan extends Drug {
  updateBenefitValue(benefit, expiresIn) {
    if (expiresIn < 0) {
      return benefit.add(-4);
    }
    return benefit.add(-2);
  }
}
