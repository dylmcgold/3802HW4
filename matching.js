const regexes = {
    canadianPostalCode: /^[A-Z][0-9][A-Z] [0-9][A-Z][0-9]$/,
    visa: /^4[0-9]{12,15}$/,
    masterCard: /^.*$/,
    adaFloat: /^.*$/,
    notThreeEndingInOO: /^.*$/,
    divisibleBy32: /^.*$/,
    sevenThroughThirtyOne: /^.*$/,
    mLComment: /^.*$/,
    notFileForFirstNoLookAround: /^.*$/,
    notFileForFirstWithLookAround: /^.*$/,
    cOctal: /^0[0-7]*$/,
    restrictedFloatingPoint: /^[0-9]+\.?[0-9]*((E|e)?(\+|-)?[0-9]{1,3})?$/,
    palindrome2358: /^.*$/,
    noNegativeIntLits: /^.*$/,
    repeated: /^.*$/,
  }
  
  export function matches(name, string) {
    return regexes[name].test(string)
  }