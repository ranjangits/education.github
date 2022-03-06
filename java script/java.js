class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
    
        
 
            <a href='index.html' class="bas">HOME</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
        
            <a href='java.html' class="bas">JAVA</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            <a href='html.html' class="bas">HTML</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            <a href='css.html' class="bas">CSS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
     
        `

    }
}
customElements.define('my-header', MyHeader)


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        Copyright (c) 2022 Ranjan kumar 
        
        `

    }
}
customElements.define('my-footer', MyFooter)