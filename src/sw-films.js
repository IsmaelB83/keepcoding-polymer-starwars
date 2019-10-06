/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class SwFilms extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div on-click='changeNameEventListener' class="card">
        <div id="nombre" class="circle">[[nombre]]</div>
        <h1>View One</h1>
        <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
        <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
      </div>
    `;
  }

  /**
   * Return de properties
   */
  static get properties() {
    return {
      nombre: {
        type: String, // String|Number|Boolean|Array|Object|Date
        value: 'Isma',
        // reflectToAttribute: true
      }
    }
  }

  /**
   * Web component constructor
   */
  constructor() {
    super();
  }
  
  /**
   * Web component conectado al DOM
   */
  connectedCallback() {
    super.connectedCallback()
    console.log('##########################');
    console.log('## ACCESO AL DOM DEL WC ##');
    // Acceso directo con el $. Sólo sirve para buscar elementos en el shadow DOM por ID
    console.log(this.$.number);
    // Esto no va a funcionar. el web component está en el shadow DOM, no en el DOM
    console.log(document.querySelector('.card')); 
    // Acceso a través del shadow DOM con funciones nativas del DOM (como query selector)
    console.log(this.shadowRoot.querySelector('.card'));
    console.log('##########################');
  }

  /**
   * Web component ready
   */
  ready () {
    super.ready()
  }

  /**
   * Estos dos no los utilizaremos
  disconnectedCallback() {
    super.disconnectedCallback()
    console.log('disconnectedCallback');
  }

  attributeChangedCallback () {
    super.attributeChangedCallback()
    console.log('attributeChangedCallback');
  }
   */

   /**
    * Interactuando con el shadow DOM
    */
   changeNameEventListener () {
     this.nombre = this.nombre === 'Isma' ? 'Tam' : 'Isma';
   }
}

window.customElements.define('sw-films', SwFilms);
