import Drug from "./Drug";

export default class MagicPill extends Drug {
  updateExpiresIn(expiresIn) {
    return expiresIn;
  }

  updateBenefitValue(benefit) {
    return benefit.value;
  }
}
