import React, {Component} from 'react';
import { CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  PaymentRequestButtonElement,
  IbanElement,
  IdealBankElement,
  StripeProvider,
  Elements,
  injectStripe} from 'react-stripe-elements';

const handleBlur = () => {
  console.log('[blur]');
};
const handleChange = (change) => {
  console.log('[change]', change);
};
const handleClick = () => {
  console.log('[click]');
};
const handleFocus = () => {
  console.log('[focus]');
};
const handleReady = () => {
  console.log('[ready]');
};

const createOptions = (fontSize: string, padding: ?string) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: '"raleway-bold", sans-serif',
        '::placeholder': {
          color: '#aab7c4',
        },
        ...(padding ? {padding} : {}),
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      playbook: document.getElementById('playbook').value
    });
    let response = await fetch("http://zonily-api.herokuapp.com/charges", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.ok) this.setState({complete: true});
  }

  render() {
    if (this.state.complete) return <h1>Pre-order Complete</h1>;

    return (
      <div className="checkout">
        <label>
          Name
          <input
            className="StripeElement StripeElement--empty stripe-input"
            id="name"
            type="text"
            placeholder="Jane Doe"
          required />
        </label>
        <label>
          Playbook Choice
          <input
            className="StripeElement StripeElement--empty stripe-input"
            id="playbook"
            type="text"
            placeholder="Bobabia and/or Go Fresh"
          required />
        </label>
        <label>
          Email
          <input
            className="StripeElement StripeElement--empty stripe-input"
            id="email"
            type="email"
            placeholder="jane.doe@example.com"
            required
          />
        </label>
        <label>
          Card number
          <CardNumberElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        <label>
          Expiration date
          <CardExpiryElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        <label className="smaller-label">
          CVC
          <CardCVCElement
            className='smaller-input'
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        <label className="smaller-label">
          Postal code
          <PostalCodeElement
            className='smaller-input'
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        <button onClick={this.submit}>Pre-order</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
