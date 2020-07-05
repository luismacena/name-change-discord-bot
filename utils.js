const faker = require('faker')
const names = require('./names.json')

const randomName = () => names[Math.floor(Math.random() * names.length)]

const findName = () => faker.name.findName()

module.exports = {
    randomName,
    findName
}