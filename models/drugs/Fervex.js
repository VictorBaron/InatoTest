import Drug from "./Drug";
import { FERVEX } from "./drugsList";

export default class Fervex extends Drug {
  constructor(name, expiresIn, benefit) {
    super(FERVEX, expiresIn, benefit);
  }

  updateBenefit(benefit, expiresIn) {
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
