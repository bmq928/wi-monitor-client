import { ServiceSchema } from '../libs'

const name = 'events'

service.$inject = ['$rootScope']
function service($rootScope) {
  const emit = (eventName, data) => {
    $rootScope.$emit(eventName, data)
  }

  const on = (eventName, handler) => {
    $rootScope.$on(eventName, (e, data) => handler(data))
  }

  const CHANGE_AGENT = 'CHANGE_AGENT'
  const onChangeAgent = handler => {
    on(CHANGE_AGENT, handler)
  }

  const changeAgent = id => {
    emit(CHANGE_AGENT, id)
  }

  const GET_AGENT_REQUEST = 'GET_AGENT_REQUEST'
  const GET_AGENT_RESPONSE = 'GET_AGENT_RESPONSE'
  const onRequestAgent = handler => {
    on(GET_AGENT_REQUEST, () => handler)
  }
  const getAgent = handler => {
    emit(GET_AGENT_REQUEST, {})
    on(GET_AGENT_RESPONSE, handler)
  }
  const sendAgent = id => {
    emit(GET_AGENT_RESPONSE, id)
  }


  
  return {
    onChangeAgent,
    changeAgent,
    onRequestAgent,
    getAgent,
    sendAgent
  }
}

export default new ServiceSchema(name, service)
