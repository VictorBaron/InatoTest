import Drug from "./Drug";
import { HERBAL_TEA } from "./drugsList";

export default class HerbalTea extends Drug {
  constructor(name, expiresIn, benefit) {
    super(HERBAL_TEA, expiresIn, benefit);
  }

  updateBenefit(benefit, expiresIn) {
    if (expiresIn < 0) {
      return benefit.add(2);
    }
    return benefit.add(1);
  }
}
