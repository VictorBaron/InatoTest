import Drug from "./Drug";
import HerbalTea from "./HerbalTea";
import * as drugs from "./drugsList";

export default class DrugFactory {
  constructor(name, ...args) {
    switch (name) {
      case drugs.HERBAL_TEA:
        return new HerbalTea(name, ...args);
      default:
        return new Drug(name, ...args);
    }
  }
}
