export const trimStart = (textToTrim, text) => {
  if (text.startsWith(textToTrim)) {
    return text.slice(textToTrim.length);
  }

  return text;
};

export const trimEnd = (textToTrim, text) => {
  if (text.endsWith(textToTrim)) {
    return text.slice(0, -textToTrim.length);
  }

  return text;
};

export const trim = (textToTrim, text) => {
  return trimStart(textToTrim, trimEnd(textToTrim, text));
};
