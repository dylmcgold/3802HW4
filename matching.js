const regexes = {
    canadianPostalCode: /^[A-Z][0-9][A-Z] [0-9][A-Z][0-9]$/,
    visa: /^4[0-9]{12,15}$/,
    masterCard: /^(5|2)\d{13}([1-9]{2}|82|00)$/,
    adaFloat: /^(\d+((\.\d+)*|(\d?_\d)|\d)*((E|e)(\+|-)?\d+)?|\d+(_\d+)*#[AaBbCcDdEeFf]((E|e)(\+|-)?\d+)?)$/,
    notThreeEndingInOO: /^.*(?<!(o|O|\d))o?$/,
    divisibleBy32: /^(0|1)*(?<!1)$/,
    sevenThroughThirtyOne: /^([7-9]|1[0-9]|2[0-9]|30|31)$/,
    mLComment: /^\(\*(\d|\*| |\()+\)/,
    notFileForFirstNoLookAround: /^(f?[A-Z]*|for[a-z]+|[a-z]+first|[a-z]+for|[a-z]file|file[a-z]+)$/,
    notFileForFirstWithLookAround: /^(?!for$|file$|first$).*/,
    cOctal: /^0[0-7]*$/,
    restrictedFloatingPoint: /^[0-9]+\.?[0-9]*((E|e)?(\+|-)?[0-9]{1,3})?$/,
    palindrome2358: /^(.)(?:(.)(?:(.)(?:(.)\4?\3|\3?)\2|\2?))?\1(?<!#|B)$/,
    noNegativeIntLits: /^\w( |\w)*(2-3\?)?$/,
    repeated: /^([a-z]*)\1$/,
  }
  
  export function matches(name, string) {
    return regexes[name].test(string)
  }