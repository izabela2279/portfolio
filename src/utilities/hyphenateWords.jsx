function hyphenateWords(str) {
  return str.replace(/\s/g, "-").toLowerCase()
}

export {hyphenateWords}