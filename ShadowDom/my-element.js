class myElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
    }

    getTemplate() {
        const template = document.createElement('template')
            template.innerHTML = `
            <section>
                <h2 class="title">Hello World javascript template</h2>
                <div>
                    <p class="text">Text from template</p>
                </div>
            </section>
            ${this.getStyles()}
        `
        return template
    }

    getStyles() {
        return `
            <style>
                .title{
                    color: aqua;
                } 
                .text{
                    color: dodgerblue;
                }
            </style>
        `
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define('my-element', myElement)

