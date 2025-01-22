const template = document.createElement('div')
template.innerHTML = `
    <style>
    .text{
    background-color: lavenderblush;
    } 
    p{
    color: rebeccapurple;
    }
</style>

    <p>Hello world with template variable </p>
    <p class="text">text in template</p>
`

class myElement extends HTMLElement {
    constructor() {
        super()
        console.log('Hello word!')

        this.p = document.createElement('p')

    }

    connectedCallback() {
        this.p.textContent = 'Hello world'
        this.appendChild(this.p)
        this.appendChild(template)
    }
}

customElements.define('my-element', myElement)

