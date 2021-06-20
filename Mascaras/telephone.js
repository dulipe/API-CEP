export default function Phone(param) {
    return param
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{1})/, '$1')
      .replace(/(\d{5})(\d{4})/, '$1-$2')
}