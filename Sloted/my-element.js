class myElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
    }

    getTemplate() {
        const template = document.createElement('template')
            template.innerHTML = `
            <section>
                <h1 class="title">
                    <slot name="title"></slot>
                </h1>
                <div>
                    <p class="text">
                        <slot name="bold"></slot>
                        <slot name="paragraph"></slot>
                    </p>
                </div>
            </section>
            
            ${this.getStyles()}
        `
        return template
    }

    getStyles() {
        return `
            <style>
                ::slotted(span){
                    font-size: 30px;
                    color: red;
                }
                
                ::slotted(.bold){
                    font-weight: bold;
                    color: aqua;
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

