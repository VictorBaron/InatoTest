import Drug from "./Drug";
import { MAGIC_PILL } from "./drugsList";

export default class MagicPill extends Drug {
  constructor(name, expiresIn, benefit) {
    super(MAGIC_PILL, expiresIn, benefit);
  }

  updateExpiresIn(expiresIn) {
    return expiresIn;
  }

  updateBenefit(benefit) {
    return benefit.value;
  }
}
