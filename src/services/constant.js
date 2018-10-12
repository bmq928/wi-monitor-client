import { ServiceSchema } from '../libs'

const name = 'constant'

function service() {
    return {
        WI_MOINTOR_BACKEND: 'http://localhost:3002'
    }
}

export default new ServiceSchema(name, service)