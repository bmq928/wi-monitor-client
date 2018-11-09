import { ServiceSchema } from '../libs'

const name = 'events'

service.$inject = ['$rootScope']
function service($rootScope) {
  $rootScope.data = {
    idAgent: -1
  }


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
    $rootScope.data.idAgent = id
    console.log({id})
  }

  // const GET_AGENT_REQUEST = 'GET_AGENT_REQUEST'
  const GET_AGENT = 'GET_AGENT_RESPONSE'
  // const onRequestAgent = handler => {
  //   on(GET_AGENT_REQUEST, () => handler)
  // }
  // const getAgentRequest = () =>{
  //   emit(GET_AGENT_REQUEST, {})
  //   console.log('getAgentRequest')
  // }
  const getAgent = handler => {
    handler($rootScope.data.idAgent)
    // on(GET_AGENT, () => handler($rootScope.data.idAgent))
  }
  // const sendAgent = id => {
  //   emit(GET_AGENT_RESPONSE, id)
  //   console.log('sendAgent')
  // }


  
  return {
    onChangeAgent,
    changeAgent,
    // onRequestAgent,
    getAgent,
    // sendAgent,
    // getAgentRequest
  }
}

export default new ServiceSchema(name, service)
