import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'dnn-button',
  styleUrl: 'dnn-button.css',
  shadow: true,
})
export class DnnButton {

  /** Defines the type of button. */
  @Prop() type: "primary" | "secondary" | "tertiary" = "primary";

  /** If true, will reverse the button styles */
  @Prop() reversed: boolean = false;

  @Prop() size: "small" | "large" | undefined = undefined;

  private getButtonClasses(){
    let classes: string[] = [];
    classes.push(this.type);
    if (this.reversed)
    {
      classes.push("reversed");
    }

    if (this.size != undefined){
      classes.push(this.size);
    }

    return classes.join(" ");
  }

  render() {
    return (
      <Host>
        <button class={this.getButtonClasses()}>
          <slot></slot>
        </button>
      </Host>
    );
  }

}
