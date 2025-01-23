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
                    <slot name="paragraph-1"></slot>
                </h1>
                <div>
                    <p class="text">
                        <slot name="paragraph-2"></slot>
                    </p>
                </div>
                <div class="bolt">
                    <slot name="paragraph-3"></slot>
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
                    display: inline-block;
                    width: 100%;
                    min-width: 300px;
                    max-width: 450px;
                    font-size: 20px;
                    background-color: lightgrey;        
                    margin-top: 5px;            
                }
                
                :host(.blue){
                    background-color: lightsteelblue;
                }
                
                :host([yellow]){
                    background-color: lightgoldenrodyellow;
                }
                
                :host([yellow]) h1, :host([yellow]) p{
                    background-color: aquamarine;
                }
                
                :host([yellow]) h1{
                    color: orange;
                }
                
                :host([yellow]) .bolt{
                    color: red;
                }
                
                :host-context(article.card){
                    display: block;
                    max-width: 100%
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

