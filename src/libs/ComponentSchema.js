class ComponentSchema {
    constructor(name, template, controller, bindings = {}, transclude = false) {
        this.name = name
        this.options = {
            bindings,
            template,
            controller,
            controllerAs: 'self'
        }
    }
}

export default ComponentSchema