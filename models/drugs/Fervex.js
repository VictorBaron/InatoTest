import Drug from "./Drug";

export default class Fervex extends Drug {
  updateBenefitValue(benefit, expiresIn) {
    if (expiresIn < 0) {
      return 0;
    }
    if (expiresIn >= 10) {
      return benefit.add(1);
    } else if (expiresIn >= 5) {
      return benefit.add(2);
    } else {
      return benefit.add(3);
    }
  }
}
