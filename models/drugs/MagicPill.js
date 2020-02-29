import ClassicDrug from "./ClassicDrug";

export default class MagicPill extends ClassicDrug {
  updateExpiresIn(expiresIn) {
    return expiresIn;
  }

  updateBenefitValue(benefit) {
    return benefit.value;
  }
}
