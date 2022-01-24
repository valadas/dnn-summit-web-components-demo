import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'dnn-button',
  styleUrl: 'dnn-button.css',
  shadow: true,
})
export class DnnButton {

  /** Defines the type of button. */
  @Prop() type: "primary" | "secondary" | "tertiary" = "primary";

  render() {
    return (
      <Host>
        <button class={this.type}>
          <slot></slot>
        </button>
      </Host>
    );
  }

}
