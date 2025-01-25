class myElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
    }

    getTemplate() {
        const template = document.createElement('template')
        template.innerHTML = `
            <section>
                <h1 class="title"><slot name="title"></slot></h1>
                <div>
                    <p class="text">
                        <slot name="highlight" class="highlight"></slot>
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
                :host{
                    --primary-color: tomato;
                    --secondary-color: salmon;
                    --heading-primary: 20px;
                    --highlight: 40px;
                    --highlight-2: 45px;
                    display: inline-block;
                    width: 100%;
                    min-width: 300px;
                    max-width: 450px;   
                }
                
                section{
                    background: var(--primary-color);
                }
                
                section div {
                    background: var(--secondary-color);
                }
                
                h1{
                    font-size: var(--heading-primary);
                }
                
                .highlight{
                    font-weight: bold;
                }
                
                ::slotted(.highlight){
                    font-size: var(--highlight-2);
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