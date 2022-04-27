const regexes = {
    canadianPostalCode: /^[A-Z][0-9][A-Z] [0-9][A-Z][0-9]$/,
    visa: /^4[0-9]{12,15}$/,
    masterCard: /^(5|2)\d{13}([1-9]{2}|82|00)$/,
    adaFloat: /^.*$/,
    notThreeEndingInOO: /^.*(?<!(o|O|\d))o?$/,
    divisibleBy32: /^(0|1)*(?<!1)$/,
    sevenThroughThirtyOne: /^.*$/,
    mLComment: /^.*$/,
    notFileForFirstNoLookAround: /^.*$/,
    notFileForFirstWithLookAround: /^.*$/,
    cOctal: /^0[0-7]*$/,
    restrictedFloatingPoint: /^[0-9]+\.?[0-9]*((E|e)?(\+|-)?[0-9]{1,3})?$/,
    palindrome2358: /^.*$/,
    noNegativeIntLits: /^.*$/,
    repeated: /^([a-z]*)\1$/,
  }
  
  export function matches(name, string) {
    return regexes[name].test(string)
  }