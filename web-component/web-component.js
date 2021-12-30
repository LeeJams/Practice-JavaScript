class CustomInput extends HTMLElement{

  //컴포넌트 만드는 틀
  connectedCallback() {

    this.render();

  }
  render(){
    let main = document.createElement('main');

    let label = document.createElement('label');
    label.innerHTML = '이름';
    main.appendChild(label);

    let input = document.createElement('input');
    main.appendChild(input);

    this.appendChild(main);
  }

  //재랜더링 기능
  static get observedAttributes(){
    return ['name']
  }

  attributeChangedCallback(){
    this.render
  }

  //Lit = Web component 쉬운 문법으로 만들어줌
}

customElements.define('custom-input', CustomInput);