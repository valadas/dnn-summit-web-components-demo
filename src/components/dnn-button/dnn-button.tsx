import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'dnn-button',
  styleUrl: 'dnn-button.css',
  shadow: true,
})
export class DnnButton {

  render() {
    return (
      <Host>
        <button>
          <slot></slot>
        </button>
      </Host>
    );
  }

}
