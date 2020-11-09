class MyRange extends HTMLElement  {
  connectedCallback() {
    // super();
    // this.attachShadow({mode: 'open'}); // sets and returns 'this.shadowRoot'
    const id = this.hasAttribute('id') ? this.getAttribute('id') :  "default";
    // Create (nested) span elements

    this.setAttribute('class','row');

    const nameLabel = this.appendChild(document.createElement('label'));
    const range = this.appendChild(document.createElement('input'));
    const valLabel = this.appendChild(document.createElement('label'));
    this.range = range;
    this.valLabel = valLabel;
    console.log(this.getAttributeNames())
    for(var att of this.getAttributeNames())
    {
      console.log(att);
      range.setAttribute(att, this.getAttribute(att))
    }
    
    range.setAttribute('id', id+'Range')
    range.setAttribute('type', 'range')

    nameLabel.setAttribute('id', id+'Name');
    nameLabel.setAttribute('for', id+'Range');
    const name = this.hasAttribute('name') ? this.getAttribute('name') : 'Name';
    nameLabel.innerHTML = name;

    const val = this.hasAttribute('value') ? this.getAttribute('value') : '42';
    valLabel.setAttribute('id', id+'Val');
    valLabel.innerHTML = val;

    range.addEventListener('input', (e) => this.setVal(e.target.value));
  }

  setVal(val) {
    this.range.value = val;
    this.valLabel.innerHTML = val.toString();
  }

  getVal(val) {
    return this.range.value;
  }

  setListener(type, cb) {
    this.range.addEventListener(type, cb);
  }
}

customElements.define('my-range', MyRange);
