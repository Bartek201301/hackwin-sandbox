import { describe, expect, it } from "vitest";
import { greet, shout } from "./greeting";

describe("greet", () => {
  it("greets the given name", () => {
    expect(greet("Ada")).toBe("Hello, Ada!");
  });

  it("falls back to world for a blank name", () => {
    expect(greet("  ")).toBe("Hello, world!");
  });
});

describe("shout", () => {
  it("greets the given name in upper case", () => {
    expect(shout("Ada")).toBe("HELLO, ADA!");
  });

  it("falls back to world for a blank name", () => {
    expect(shout("  ")).toBe("HELLO, WORLD!");
  });
});
