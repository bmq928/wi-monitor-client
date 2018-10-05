class Schema {
    constructor(name, template, controller, bindings = {}) {
        this.name = name
        this.options = {
            bindings,
            template,
            controller,
            controllerAs: 'self'
        }
    }
}

export default Schema