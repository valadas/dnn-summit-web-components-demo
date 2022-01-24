import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'dnn-payment-form',
  styleUrl: 'dnn-payment-form.css',
  shadow: true,
})
export class DnnPaymentForm {

  @State() formData: {
    name: string;
    creditCard: string;
  } = {
    name: "",
    creditCard: "",
  }

  @State() paid: boolean = false;

  private payButton: HTMLDnnButtonElement;

  private handlePayment(): void {
    this.payButton.disable("Processing ...");
    console.log("Faking a payment for: ");
    console.log(this.formData);
    setTimeout(() => {
      this.paid = true;
    }, 3000);
  }

  render() {
    return (
      <Host>
        {!this.paid &&
          <div class="payment-form">
            <label>Name</label><br />
            <input
              type="text"
              value={this.formData.name}
              onInput={e => this.formData = {
                ...this.formData,
                name: (e.target as HTMLInputElement).value
              }}
            />
            {this.formData.name.length < 1 &&
              <p>* The name is required</p>
            }

            <br /><br />
            <label>Credit Card</label><br/>
            <input
              type="text"
              value={this.formData.creditCard}
              onInput={e => this.formData = {
                ...this.formData,
                creditCard: (e.target as HTMLInputElement).value,
              }}
            />
            {this.formData.creditCard.length < 1 &&
              <p>* The credit card number is required.</p>
            }

            <br /><br />
            {this.formData.name.length > 0 &&
            this.formData.creditCard.length > 0 &&
              <dnn-button
                size="large"
                ref={e => this.payButton = e}
                confirm
                onConfirmed={() => this.handlePayment()}
              >
                  Pay Now
              </dnn-button>
            }
          </div>
        }
        
        {this.paid &&
          <div class="thank-you">
            <p>Thanks for your payment !</p>
          </div>
        }
      </Host>
    );
  }
}
