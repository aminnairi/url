import {isMatchingPath, getMatchingPathParameters} from "./index.js";

describe("index.js", () => {
  describe("isMatchingPath", () => {
    it("should succeed", () => {
      expect(isMatchingPath("/", "/")).toEqual(true);
    });

    it("should fail", () => {
      expect(isMatchingPath("/", "/users")).toEqual(false);
    });

    it("should fail if the first argument is not a string", () => {
      expect(isMatchingPath(null, "/users")).toEqual(false);
    });

    it("should fail if the second argument is not a string", () => {
      expect(isMatchingPath("/", null)).toEqual(false);
    });
  });

  describe("getMatchingPathParameters", () => {
    it("should return a parameters object if a parameterized route and its url match", () => {
      expect(getMatchingPathParameters("/users/:user", "/users/123")).toEqual({user: "123"});
    });

    it("should return a parameters object if a multi-parameterized route and its url match", () => {
      expect(getMatchingPathParameters("/users/:user/posts/:post", "/users/123/posts/456")).toEqual({user: "123", post: "456"});
    });

    it("should return an empty parameters object if a parameterized route does not match its url", () => {
      expect(getMatchingPathParameters("/users/:user", "/posts/123")).toEqual({});
    });

    it("should return an empty parameters object if the route is not parameterized and match its url", () => {
      expect(getMatchingPathParameters("/", "/")).toEqual({});
    });

    it("should return an empty object if the route is not parameterized and do not match its url", () => {
      expect(getMatchingPathParameters("/", "/users")).toEqual({});
    });

    it("should return an empty object if the first argument is not a string", () => {
      expect(getMatchingPathParameters(null, "/")).toEqual({});
    });

    it("should return an empty object if the second argument is not a string", () => {
      expect(getMatchingPathParameters("/", null)).toEqual({});
    });
  });
});
