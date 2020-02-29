export default class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs = this.drugs.map(drug => drug.updateForNextDay());
    return this.drugs;
  }
}
