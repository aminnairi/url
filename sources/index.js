import {trim} from "./string.js";

export const isMatchingPath = (pattern, url) => (new RegExp(`^${trim("/", pattern).replace(/:(\w+)/g, "(?<$1>[^\/]+)")}$`).exec(trim("/", url))?.length ?? 0) !== 0;

export const getMatchingPathParameters = (pattern, url) => isMatchingPath(pattern, url) ? new RegExp(`^${trim("/", pattern).replace(/:(\w+)/g, "(?<$1>[^\/]+)")}$`).exec(trim("/", url)).groups ?? {} : {};
