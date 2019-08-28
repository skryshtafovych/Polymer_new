/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import './shared-styles.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-item/paper-item.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class MyView3 extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
      :host {
        display: block;

        padding: 10px;
      }
    </style>


    <div class="card">
      <div class="circle">3</div>
      <h1>Stuff I wanna Try Android Libs</h1>
      <p>Dagger Android/Java dependency injector for Fragment and Activities. Wonder how this is different than archetectural components.</p>
      <a href="https://google.github.io/dagger/">
<paper-button toggles="" raised="" class="custom green">Dagger</paper-button>  </a>

<p>Architectural component guide by Googlers.</p><p>
<a href="https://developer.android.com/topic/libraries/architecture/">
<paper-button toggles="" raised="" class="custom green">Room/Observabels/LifeCycles</paper-button>  </a>

</p><p>Desktop Player for Google Play Music </p>
<a href="https://github.com/MarshallOfSound/Google-Play-Music-Desktop-Player-UNOFFICIAL">
<paper-button toggles="" raised="" class="custom green">Custom Google Play</paper-button>  </a>



    </div>
`;
  }

  static get is() { return 'my-view3'; }
}

window.customElements.define(MyView3.is, MyView3);
