import { PasswordChecker } from "../src/passwordChecker";

describe("PasswordChecker", () => {
  describe("check length > 8", () => {
    let passwordChecker = new PasswordChecker();

    it("should return false when given 0 characters", () => {
      const actual = passwordChecker.isValid("");

      expect(actual).toBe(false);
    });

    it("should return false when given 1 character", () => {
      const actual = passwordChecker.isValid("a");

      expect(actual).toBe(false);
    });

    it("should return false when given 2 characters", () => {
      const actual = passwordChecker.isValid("ab");

      expect(actual).toBe(false);
    });

    it("should return false when given 3 characters", () => {
      const actual = passwordChecker.isValid("abc");

      expect(actual).toBe(false);
    });

    it("should return false when given 4 characters", () => {
      const actual = passwordChecker.isValid("abcd");

      expect(actual).toBe(false);
    });

    it("should return false when given 5 characters", () => {
      const actual = passwordChecker.isValid("abcde");

      expect(actual).toBe(false);
    });

    it("should return false when given 6 characters", () => {
      const actual = passwordChecker.isValid("abcdef");

      expect(actual).toBe(false);
    });

    it("should return false when given 7 characters", () => {
      const actual = passwordChecker.isValid("abcdefg");

      expect(actual).toBe(false);
    });

    it("should return true when given 8 characters", () => {
      const actual = passwordChecker.isValid("abcdefgh");

      expect(actual).toBe(true);
    });

    it("should return true when given 9 characters", () => {
      const actual = passwordChecker.isValid("abcdefghi");

      expect(actual).toBe(true);
    });    
  });

  describe("check password contains special character", () => {
    let passwordChecker = new PasswordChecker();

    const actual = passwordChecker.isValid("edze%")
  })



});