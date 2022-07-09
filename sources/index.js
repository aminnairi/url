import {trim} from "./string.js";

export const isMatchingPath = (pattern, url) => {
  if (typeof pattern !== "string" || typeof url !== "string") {
    return false;
  }

  return (new RegExp(`^${trim("/", pattern).replace(/:(\w+)/g, "(?<$1>[^\/]+)")}$`).exec(trim("/", url))?.length ?? 0) !== 0;
};

export const getMatchingPathParameters = (pattern, url) => {
  if (typeof pattern !== "string" || typeof url !== "string") {
    return {};
  }

  return isMatchingPath(pattern, url) ? new RegExp(`^${trim("/", pattern).replace(/:(\w+)/g, "(?<$1>[^\/]+)")}$`).exec(trim("/", url)).groups ?? {} : {};
};
