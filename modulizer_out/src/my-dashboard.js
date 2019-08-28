import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-item/paper-item.js';
import './simple-expand-collapse.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class MyView4 extends PolymerElement {
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
      <h1>DashBoard in Progress</h1>

      <simple-expand-collapse>
        <div class="content">
          Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea, id minim maiestatis incorrupte duo. Dolorum verterem ad ius, his et nullam verterem. Eu alia debet usu, an doming tritani est. Vix ad ponderum petentium suavitate, eum
          eu tempor populo, graece sententiae constituam vim ex. Cu torquatos reprimique neglegentur nec, voluptua periculis has ut, at eos discere deleniti sensibus. Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea,
          id minim maiestatis incorrupte duo. Dolorum verterem ad ius, his et nullam verterem. Eu alia debet usu, an doming tritani est. Vix ad ponderum petentium suavitate, eum eu tempor populo, graece sententiae constituam vim ex. Cu torquatos reprimique
          neglegentur nec, voluptua periculis has ut, at eos discere deleniti sensibus.
        </div>
      </simple-expand-collapse>




    </div>






      <div class="card card-chart">
        <div class="card-header card-header-success">
          <div class="ct-chart" id="dailySalesChart"></div>
        </div>
        <div class="card-body">
          <h4 class="card-title">Daily Sales</h4>
          <p class="card-category">
            <span class="text-success"><i class="fa fa-long-arrow-up"></i> 55% </span> increase in today sales.</p>
        </div>
        <div class="card-footer">
          <div class="stats">
            <i class="material-icons">access_time</i> updated 4 minutes ago
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header card-header-warning">
          <h4 class="card-title">Project Stats</h4>
          <p class="card-category">Started Projects stats and info</p>
        </div>
        <div class="card-body table-responsive">
          <table class="table table-hover">
            <thead class="text-warning">
              <tr><th>ID</th>
              <th>Name</th>
              <th>Technology</th>
              <th>Commit Count</th>
              <th>Star Count</th>
            </tr></thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Stepan Kryshtafovych</td>
                <td>Kotlin</td>
                <td>Ukraine</td>
                <td>0</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Stepan Kryshtafovych</td>
                <td>Java</td>
                <td>Ukraine</td>
                <td>0</td>

              </tr>
              <tr>
                <td>3</td>
                <td>Stepan Kryshtafovych</td>
                <td>Swift</td>
                <td>Ukraine</td>
                <td>0</td>

              </tr>
              <tr>
                <td>4</td>
                <td>Stepan Kryshtafovych</td>
                <td>XSS</td>
                <td>Ukraine</td>
                <td>0</td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
`;
  }

  static get is() { return 'my-view4'; }
}

window.customElements.define(MyView4.is, MyView4);
