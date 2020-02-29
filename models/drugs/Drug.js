import ClassicDrug from "./ClassicDrug";
import HerbalTea from "./HerbalTea";
import MagicPill from "./MagicPill";
import Fervex from "./Fervex";
import Dafalgan from "./Dafalgan";
import * as drugs from "./drugsList";

export default class Drug {
  constructor(name, ...args) {
    switch (name) {
      case drugs.HERBAL_TEA:
        return new HerbalTea(name, ...args);
      case drugs.MAGIC_PILL:
        return new MagicPill(name, ...args);
      case drugs.FERVEX:
        return new Fervex(name, ...args);
      case drugs.DAFALGAN:
        return new Dafalgan(name, ...args);
      default:
        return new ClassicDrug(name, ...args);
    }
  }
}
