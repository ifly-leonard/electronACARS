const fsuipc = require('fsuipc')

const fsuipcData = new fsuipc.FSUIPC()

fsuipcData.open()
    .then((fsuipcData) => {
        console.log(fsuipcData.add('aircraftType', 0x3D00, fsuipc.Type.String, 256))
    })
    .then((result) => {
        console.log(JSON.stringify(result))
        return fsuipcData.close()
    })
