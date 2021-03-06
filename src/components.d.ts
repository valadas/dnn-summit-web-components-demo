/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DnnButton {
        /**
          * If true will ask for confirmation before firing an event.
         */
        "confirm": boolean;
        /**
          * Disabled the button and sets it's disabled message.
         */
        "disable": (message: string) => Promise<void>;
        /**
          * Re-enables a disabled button.
         */
        "enable": () => Promise<void>;
        /**
          * If true, will reverse the button styles
         */
        "reversed": boolean;
        /**
          * Defines the size of the button.
         */
        "size": "small" | "large" | undefined;
        /**
          * Defines the type of button.
         */
        "type": "primary" | "secondary" | "tertiary";
    }
    interface DnnPaymentForm {
    }
}
declare global {
    interface HTMLDnnButtonElement extends Components.DnnButton, HTMLStencilElement {
    }
    var HTMLDnnButtonElement: {
        prototype: HTMLDnnButtonElement;
        new (): HTMLDnnButtonElement;
    };
    interface HTMLDnnPaymentFormElement extends Components.DnnPaymentForm, HTMLStencilElement {
    }
    var HTMLDnnPaymentFormElement: {
        prototype: HTMLDnnPaymentFormElement;
        new (): HTMLDnnPaymentFormElement;
    };
    interface HTMLElementTagNameMap {
        "dnn-button": HTMLDnnButtonElement;
        "dnn-payment-form": HTMLDnnPaymentFormElement;
    }
}
declare namespace LocalJSX {
    interface DnnButton {
        /**
          * If true will ask for confirmation before firing an event.
         */
        "confirm"?: boolean;
        /**
          * The confirmable action was approved.
         */
        "onConfirmed"?: (event: CustomEvent<any>) => void;
        /**
          * The confirmable action was declined.
         */
        "onDeclined"?: (event: CustomEvent<any>) => void;
        /**
          * If true, will reverse the button styles
         */
        "reversed"?: boolean;
        /**
          * Defines the size of the button.
         */
        "size"?: "small" | "large" | undefined;
        /**
          * Defines the type of button.
         */
        "type"?: "primary" | "secondary" | "tertiary";
    }
    interface DnnPaymentForm {
    }
    interface IntrinsicElements {
        "dnn-button": DnnButton;
        "dnn-payment-form": DnnPaymentForm;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dnn-button": LocalJSX.DnnButton & JSXBase.HTMLAttributes<HTMLDnnButtonElement>;
            "dnn-payment-form": LocalJSX.DnnPaymentForm & JSXBase.HTMLAttributes<HTMLDnnPaymentFormElement>;
        }
    }
}
