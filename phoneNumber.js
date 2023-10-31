// Create a function testPhoneNumber 
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid
function testPhoneNumber(phoneNumberString) {
    const pattern = new RegExp(/^(\(?[0-9]{3}\)?)[-\s]([0-9]{3})[-\s]([0-9]{4})$/);
    if(pattern.test(phoneNumberString)) {
        console.log("Phone number is valid");
        return true;
    } else {
        console.log("Phone number is not valid");
        return false;
    }
}


// Explanation of RegExp
// ^      start of line
// \(     optional start parenthesis
// \d{3}  exactly 3 digit characters
// \)     optional end parenthesis
// [-\s]  one of a space or a dash
// \d{3}  exactly 3 digit characters
// [-\s]  one of a space or a dash
// \d{4}  exactly 4 digit characters
// $      end of line

// check testPhoneNumber
console.log(testPhoneNumber('(206) 333-4444')); // should return true
console.log(testPhoneNumber('(206) 33-4444')); // should return false, missing a digit


// 1. Create a function parsePhoneNumber that takes in a phoneNumber string 
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}
function parsePhoneNumber(phoneNumber) {
    const parts = /^(\(?[0-9]{3}\)?)[-\s]([0-9]{3})[-\s]([0-9]{4})$/.exec(phoneNumber);
    if (!parts) {
        return null;
    }
    parts[1] = parts[1].replace(/[()]/g,'');
    let phone = {};
    phone.areaCode = parts[1];
    phone.phoneNum = parts[2] + parts[3];
    return `areaCode: ${phone.areaCode}, phoneNumber: ${phone.phoneNum}`;
//    return `areaCode: ${parts[1]}, phoneNumber: ${parts[2]}${parts[3]}`;
};


// Check parsePhoneNumber
console.log(parsePhoneNumber('206-333-4444'));
// returns {areaCode: '206', phoneNumber: '3334444'}

console.log(parsePhoneNumber('(222) 422-5353'));
// returns {areaCode: '222', phoneNumber: '4225353'}