import Handlebars from 'handlebars'
const compiled = Handlebars.compile(template)

console.log(compiled({doesWhat: 'rocks'}))