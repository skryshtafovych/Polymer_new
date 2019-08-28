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
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class MyView2 extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
      :host {
        display: block;

        padding: 10px;
      }
    </style>



    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
          <div class="card-header card-header-success card-header-icon">
            <div class="card-icon">

                <h4>CA Lottery Android</h4>

            </div>
            <p class="card-category">300K Monthly Active.</p>
            <h4 class="card-title">1M Downloads.</h4>
          </div>
          <div class="card-footer">
            <div class="stats">
              <i class="material-icons"> 99.89% Crash Free.</i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
          <div class="card-header card-header-success card-header-icon">
            <div class="card-icon">
              <i class="material-icons">Github</i>
            </div>
            <p class="card-category">Stars</p>
            <h4 class="card-title">10</h4>
          </div>
          <div class="card-footer">
            <div class="stats">
              <i class="material-icons">Last Update </i>July 9th
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
          <div class="card-header card-header-danger card-header-icon">
            <div class="card-icon">
              <i class="material-icons">  <h4>Stack Overflow</h4></i>
            </div>
            <p class="card-category">Impact</p>
            <h4 class="card-title">12K</h4>
          </div>
          <div class="card-footer">
            <div class="stats">
              <i class="material-icons">Reputation</i> 75
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
          <div class="card-header card-header-info card-header-icon">
            <div class="card-icon">
              <i class="fa fa-twitter">Medium</i>
            </div>
            <p class="card-category">Post</p>
            <h4 class="card-title">3</h4>
          </div>
          <div class="card-footer">
            <div class="stats">
              <i class="material-icons">update</i> July 9th
            </div>
          </div>
        </div>
      </div>
    </div>




    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
          <div class="card-header card-header-success card-header-icon">
            <div class="card-icon">

                <h4>Awards</h4>

            </div>
            <p class="card-category">300K Monthly Active.</p>
            <h4 class="card-title">1M Downloads.</h4>
          </div>
          <div class="card-footer">
            <div class="stats">
              <i class="material-icons"></i> 99.89% Crash Free.
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
          <div class="card-header card-header-success card-header-icon">
            <div class="card-icon">
              <i class="material-icons">Best of CA</i>
            </div>
            <p class="card-category">Stars</p>
            <h4 class="card-title">10</h4>
          </div>
          <div class="card-footer">
            <div class="stats">
              <i class="material-icons">Last Update </i>July 9th
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
          <div class="card-header card-header-danger card-header-icon">
            <div class="card-icon">
              <i class="material-icons">  <h4>Hackathon</h4></i>
            </div>
            <p class="card-category">Impact</p>
            <h4 class="card-title">12K</h4>
          </div>
          <div class="card-footer">
            <div class="stats">
              <i class="material-icons">Reputation</i> 75
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
          <div class="card-header card-header-info card-header-icon">
            <div class="card-icon">
              <i class="fa fa-twitter"></i>
            </div>
            <p class="card-category">Followers</p>
            <h3 class="card-title">+245</h3>
          </div>
          <div class="card-footer">
            <div class="stats">
              <i class="material-icons">update</i> Just Updated
            </div>
          </div>
        </div>
      </div>
    </div>





    <div class="card">
      <h1>CA Lottery Android</h1>
      <p>1 Million downloads.</p>
      <p>Over 300k active users a month.</p>
      <p>99.89% Crash Free.</p>
    </div>
`;
  }

  static get is() { return 'my-view2'; }
}

window.customElements.define(MyView2.is, MyView2);
