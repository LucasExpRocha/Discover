const getFlagValue = require('./ExercicioExport')

console.log(`Olá ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)
