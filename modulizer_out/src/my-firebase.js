import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-item/paper-item.js';
import './simple-expand-collapse.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class MyView6 extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
      :host {
        display: block;

        padding: 10px;
      }
      .circle-experiments{
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: #ffffff;
        border-radius: 50%;
        background: #c53929;
        font-size: 30px;
        line-height: 64px;
      }
    </style>




    <div class="card">
      <div class="circle-experiments">Fire</div>
      <h1>PolymerFire</h1>
      <a href="https://www.webcomponents.org/element/firebase/polymerfire">
<paper-button toggles="" raised="" class="custom green">PolymerFire</paper-button>  </a>


</div>
`;
  }

  static get is() { return 'my-view6'; }
}

window.customElements.define(MyView6.is, MyView6);
