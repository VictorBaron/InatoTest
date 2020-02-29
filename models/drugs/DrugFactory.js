import Drug from "./Drug";
import HerbalTea from "./HerbalTea";
import MagicPill from "./MagicPill";
import Fervex from "./Fervex";
import * as drugs from "./drugsList";

export default class DrugFactory {
  constructor(name, ...args) {
    switch (name) {
      case drugs.HERBAL_TEA:
        return new HerbalTea(name, ...args);
      case drugs.MAGIC_PILL:
        return new MagicPill(name, ...args);
      case drugs.FERVEX:
        return new Fervex(name, ...args);
      default:
        return new Drug(name, ...args);
    }
  }
}
