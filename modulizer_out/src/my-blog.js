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

import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/iron-icons/maps-icons.js';
import './simple-expand-collapse.js';
import './shared-styles.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

window.onload = function() {
  console.log("Test COnsole  ");
  getURLS();
  //getUSERS();
};


function setURLS(urls){

  document.getElementById("currenturlInUSE").innerHTML=urls
}


function getURLS() {
  console.log("Sup Dopie what do you see");

    fetch('https://github.com/skryshtafovych/fileDownload/edit/master/mysite_Blog.json', {
        method: 'get',
        headers: new Headers({'content-type': 'application/json'})
    }).then((res) => res.json())
        .then((data) => setURLS(JSON.stringify(data)))
        .catch((err) => console.log(err))
}




class MyView1 extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
      :host {
        display: block;

        padding: 10px;
      }

      img {
    float: right;
      }



    </style>

    <div id="currenturlInUSE"></div>


        <div class="card">
          <h2>3D Printed Cat Toy</h2>
          <h2> </h2>

          <h4>
            <p>
  3D  printing is the future no need to go to store to get your cat a new toy.
</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kc9OxUnsDsQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
          </h4>
        </div>



    <div class="card">
      <h2>Call Butler</h2>
      <h2> </h2>

      <h4>
        <p>If you need to automate any voice calling it becomes extremly simple if you already have a Trigger all you will need is to format a sentence that you would like a user to hear that use Twillio to accomplish the call.
</p><ul>
<li>Set-up Twillio Phone Number and enabel Voice</li>
<li>Configure Twillio API in Visual Studio</li>
<li>Set-up backend that responds with phrase you want user to hear</li>
</ul>

                    <img src="https://cdn-images-1.medium.com/max/800/1*wyMdAghs-Ba3hKAR-fh6RA.png" style="width:170px;height:170px;margin-left:15px;" class="img">

        <p></p>
      </h4>


      <a href="https://medium.com/@skryshtafovych/twitter-bot-in-minutes-with-azure-265d4092a1a">
<paper-button toggles="" raised="" class="custom green">Twitter Bot In Minutes</paper-button>  </a>
    </div>



    <div class="card">
      <h2>Twitter Bot in Minutes</h2>
      <h4>
        <p>If you need to create a twitter bot that Examines JSON and Post information to Facebook or Twitter  suggest trying Azure Logic Apps with the Simplicity of the UI and the massive amount of connectors out of the box. No need to customize is great help when trying to Prototype an Idea Below is link to My Medium Blog where you can find a detailed write up of the BOT.          <img src="https://cdn-images-1.medium.com/max/800/1*wyMdAghs-Ba3hKAR-fh6RA.png" style="width:170px;height:170px;margin-left:15px;" class="img">

        </p>
      </h4>


      <a href="https://medium.com/@skryshtafovych/twitter-bot-in-minutes-with-azure-265d4092a1a">
<paper-button toggles="" raised="" class="custom green">Twitter Bot In Minutes</paper-button>  </a>
    </div>



    <div class="card">
      <div class="circle">5</div>
      <h1>Google I/O Highlights </h1>
      <p>Talking with Gsuite experts at office hours was able to learn about new offering called   <a href="https://cloud.google.com/identity/">cloud identity</a> . If users only need view/read rights this is perfect solution since they dont take a seat in Gsuite so it ends up savign you money.</p>

      <a href="https://events.google.com/io/recap/">
<paper-button toggles="" raised="" class="custom green">I/O Recap</paper-button>  </a>
    </div>


    <div class="card">
      <div class="circle">4</div>
      <h1>New Section and Ideas done </h1>
      <a href="[[rootPath]]stuff">
<paper-button toggles="" raised="" class="custom green">Stuff Section</paper-button>  </a>
    </div>



    <div class="card">
      <div class="circle">3</div>
      <h1>Android TimeZone List</h1>
      <p>Here is a github gist I forked, took to long to find should have been documented somewhere better since Android handel time differently than Java</p>
      <a href="https://gist.github.com/skryshtafovych/5e3b2675b0f68288e7ae83fd1d16df2b">
<paper-button toggles="" raised="" class="custom green">Android Time Zone ids</paper-button>  </a>
    </div>



    <div class="card">
      <div class="circle">2</div>
      <h1>Android Colors</h1>
      <p>Android uses hexadecimal ARGB values, which are formatted as #AARRGGBB. The AA, represent the alpha channel. During UI design sometimes you want to add alpha channel(Opacity) to your colors. Instead of doing Math here is quick list for you referencing needs.If you want to do the math:
</p><hr>
<div class="row">




<simple-expand-collapse>
  <div class="content">
        <table class="table table-hover">
          <thead class="text-success">
            <tr><th>ID</th>
            <th>Steps</th>

          </tr></thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Take your opacity as a decimal value and multiply it by 255. So, if you have a block that is 50% opaque the decimal value would be .5. For example: .5 x 255 = 127.5</td>

            </tr>
            <tr>
              <td>2</td>
              <td>The fraction won’t convert to hexadecimal, so you must round your number up or down to the nearest whole number. For example: 127.5 rounds up to 128; 55.25 rounds down to 55.</td>

            </tr>
            <tr>
              <td>3</td>
              <td>Enter your decimal value in a decimal-to-hexadecimal converter, like http://www.binaryhexconverter.com/decimal-to-hex-converter, and convert your values.Add a zero if you get back a single value.</td>

            </tr>

              </tbody>
        </table>
  </div>
</simple-expand-collapse>
<a name="link_medium" href="https://medium.com/@skryshtafovych/android-transparency-hex-a57ad1e547ee">    <paper-button raised="" class="green">Medium Post</paper-button></a>
</div>





    </div>
    <div class="card">
      <div class="circle">1</div>
      <h1>Multiple Firebase Apps in One Project Android</h1>
      <p>For easy testing and seperation of data between your test accounts and production.</p>
        <a name="view1" href="[[rootPath]]view2"> <paper-button raised="" class="green">Test Link TO Work Tab</paper-button>
</a>
    <p>Google makes this very easy if you follow their guide or this one all you need is to Create Multiple apps within one Firebase Project this way you can name you projects similar you.project.name &amp; you.project.name.debug following this pattern and modifying you Gradel build file for release and debug config will allow you to quickly switch between testing you analytic changes and configuring new Firebase values</p>
    </div>
`;
  }


  static get is() { return 'my-view1'; }
}

window.customElements.define(MyView1.is, MyView1);
