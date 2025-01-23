class myElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
    }

    static get observedAttributes(){
        return ['element', 'paragraph', 'img' ]
    }

    attributeChangedCallback(attribute, oldValue, newValue){
        // debugger
        if (attribute === 'element') {
            this.element = newValue
        }

        if (attribute === 'paragraph') {
            this.paragraph = newValue
        }

        if (attribute === 'img') {
            this.img = newValue
        }

        console.log('attribute => ', attribute)
    }

    getTemplate() {
        const template = document.createElement('template')
        template.innerHTML = `
            <section>
                <h2 class="title">${this.element}</h2>
                <div>
                    <p class="text">${this.paragraph}</p>
                    <img src="${this.img}" alt="">
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
                    color: firebrick;
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

