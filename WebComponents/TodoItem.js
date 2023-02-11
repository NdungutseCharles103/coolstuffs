class TodoItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          border-bottom: 1px solid #ccc;
        }
        :host([done]) {
          text-decoration: line-through;
        }
      </style>
      <input type="checkbox" />
      <slot></slot>
    `;
    this.$checkbox = this.shadowRoot.querySelector("input");
    this.$checkbox.addEventListener("change", this._onToggle.bind(this));
  }
  connectedCallback() {
    if (this.hasAttribute("done")) {
      this.$checkbox.setAttribute("checked", "");
    }
  }
  _onToggle() {
    this.dispatchEvent(
      new CustomEvent("toggle", {
        detail: {
          done: this.$checkbox.checked
        }
      })
    );
  }
}

customElements.define("todo-item", TodoItem);