class AppElement extends HTMLElement {
    constructor(){
        super()
        console.log('Memory 1 cycle | do not is part of DOM')
    }

    connectedCallback(){
        console.log('In Dom 2 cycle| is part of DOM')
    }

    disconnectedCallback(){
        console.log('Bye DOM 3 cycle | is not part of the DOM')
    }
}

customElements.define('app-element', AppElement)

document.querySelector('app-element').remove()