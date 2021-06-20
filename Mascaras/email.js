export default function Email(param) {
    var re = /\S+@\S+\.\S+/;
    if (re.test(param) === false) {
        return 'Email invalido'
    } else {
        return param
    }
}

