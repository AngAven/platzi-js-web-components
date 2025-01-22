class myElement extends HTMLElement {
    constructor() {
        super()
    }

    getTemplate() {
        const template = document.createElement('template')
        template.innerHTML = `
        <section>
            <h2 class="text">Hello World javascript template</h2>
            <div>
                <p>Template element // most to be initialized in JavaScript</p>
            </div>
        </section>
        ${this.getStyles()}
        `
        return template
    }

    getStyles() {
        return `
            <style>
                h2{
                    color: aqua;
                } 
                p{
                    color: rebeccapurple;
                }
            </style>
        `
    }

    render() {
        this.appendChild(this.getTemplate().content.cloneNode(true))
        console.log(this.getTemplate())
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define('my-element', myElement)

