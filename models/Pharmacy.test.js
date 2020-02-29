import Pharmacy from "./Pharmacy";
import Drug from "./drugs/Drug";
import * as drugs from "./drugs/drugsList";

describe("Pharmacy", () => {
  it("empty drugs list should return an empty list", () => {
    expect(new Pharmacy([]).updateBenefitValue()).toEqual([]);
  });

  describe("Classic drug", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 1, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 0, 2)]);
    });

    it("should decrease expiresIn, benefit should not go under 0", () => {
      expect(
        new Pharmacy([new Drug("test", 1, 0)]).updateBenefitValue()
      ).toEqual([new Drug("test", 0, 0)]);
    });

    describe("Expired", () => {
      it("should decrease the benefit twice and expiresIn", () => {
        expect(
          new Pharmacy([new Drug("test", 0, 5)]).updateBenefitValue()
        ).toEqual([new Drug("test", -1, 3)]);
      });

      it("should decrease expiresIn, benefit should not go under 0", () => {
        expect(
          new Pharmacy([new Drug("test", 0, 1)]).updateBenefitValue()
        ).toEqual([new Drug("test", -1, 0)]);
      });
    });
  });

  describe(drugs.HERBAL_TEA, () => {
    it("should increase the benefit and decrease expiresIn", () => {
      expect(
        new Pharmacy([new Drug(drugs.HERBAL_TEA, 1, 3)]).updateBenefitValue()
      ).toEqual([new Drug(drugs.HERBAL_TEA, 0, 4)]);
    });

    describe("Expired", () => {
      it("should increase the benefit twice and decrease expiresIn", () => {
        expect(
          new Pharmacy([new Drug(drugs.HERBAL_TEA, 0, 5)]).updateBenefitValue()
        ).toEqual([new Drug(drugs.HERBAL_TEA, -1, 7)]);
      });

      it("should decrease expiresIn, benefit should not go over 50", () => {
        expect(
          new Pharmacy([new Drug(drugs.HERBAL_TEA, 0, 49)]).updateBenefitValue()
        ).toEqual([new Drug(drugs.HERBAL_TEA, -1, 50)]);
      });
    });
  });

  describe(drugs.MAGIC_PILL, () => {
    it("should be left unchanged", () => {
      expect(
        new Pharmacy([new Drug(drugs.MAGIC_PILL, 1, 3)]).updateBenefitValue()
      ).toEqual([new Drug(drugs.MAGIC_PILL, 1, 3)]);
    });
  });

  describe(drugs.FERVEX, () => {
    describe("expires in more than 10 days", () => {
      it("should increase the benefit by 1 and decrease expiresIn", () => {
        expect(
          new Pharmacy([new Drug(drugs.FERVEX, 15, 3)]).updateBenefitValue()
        ).toEqual([new Drug(drugs.FERVEX, 14, 4)]);
      });
    });
    describe("expires between 10 and 5 days", () => {
      it("should increase the benefit by 2 and decrease expiresIn", () => {
        expect(
          new Pharmacy([new Drug(drugs.FERVEX, 10, 3)]).updateBenefitValue()
        ).toEqual([new Drug(drugs.FERVEX, 9, 5)]);
      });
    });
    describe("expires in less than 5 days", () => {
      it("should increase the benefit by 3 and decrease expiresIn", () => {
        expect(
          new Pharmacy([new Drug(drugs.FERVEX, 5, 3)]).updateBenefitValue()
        ).toEqual([new Drug(drugs.FERVEX, 4, 6)]);
      });

      it("should decrease expiresIn, benefit should not go over 50", () => {
        expect(
          new Pharmacy([new Drug(drugs.FERVEX, 2, 49)]).updateBenefitValue()
        ).toEqual([new Drug(drugs.FERVEX, 1, 50)]);
      });
    });
    describe("Expired", () => {
      it("should decrease expiresIn and drop benefit to 0", () => {
        expect(
          new Pharmacy([new Drug(drugs.FERVEX, 0, 3)]).updateBenefitValue()
        ).toEqual([new Drug(drugs.FERVEX, -1, 0)]);
      });
    });
  });

  describe(drugs.DAFALGAN, () => {
    it("should decrease the benefit twice and expiresIn once", () => {
      expect(
        new Pharmacy([new Drug(drugs.DAFALGAN, 1, 3)]).updateBenefitValue()
      ).toEqual([new Drug(drugs.DAFALGAN, 0, 1)]);
    });

    it("should decrease expiresIn, benefit should not go under 0", () => {
      expect(
        new Pharmacy([new Drug(drugs.DAFALGAN, 3, 1)]).updateBenefitValue()
      ).toEqual([new Drug(drugs.DAFALGAN, 2, 0)]);
    });

    describe("Expired", () => {
      it("should decrease expiresIn, benefit should decrease by 4", () => {
        expect(
          new Pharmacy([new Drug(drugs.DAFALGAN, 0, 5)]).updateBenefitValue()
        ).toEqual([new Drug(drugs.DAFALGAN, -1, 1)]);
      });
      it("should decrease expiresIn, benefit should not go under 0", () => {
        expect(
          new Pharmacy([new Drug(drugs.DAFALGAN, 0, 3)]).updateBenefitValue()
        ).toEqual([new Drug(drugs.DAFALGAN, -1, 0)]);
      });
    });
  });
});
