import { Component, Host, h, Prop, EventEmitter, Event } from '@stencil/core';

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

  /** Defines the size of the button. */
  @Prop() size: "small" | "large" | undefined = undefined;

  /** If true will ask for confirmation before firing an event. */
  @Prop() confirm: boolean = false;

  /** The confirmable action was approved. */
  @Event() confirmed: EventEmitter;

  /** The confirmable action was declined. */
  @Event() declined: EventEmitter;

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

  private handleClick(): void {
    if (this.confirm){
      const result = window.confirm("Are you sure ?");
      if (result){
        this.confirmed.emit();
      }
      else{
        this.declined.emit();
      }
    }
  }

  render() {
    return (
      <Host>
        <button
          class={this.getButtonClasses()}
          onClick={() => this.handleClick()}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }

}
