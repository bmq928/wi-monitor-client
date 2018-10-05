function assignAllComponent(components, app) {
    components.forEach(c => {
        app.component(c.name, c.options)
    })
}

export default assignAllComponent