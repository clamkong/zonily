import React from 'react';
import playbooks from '../data/mock/playbooks';
import CartItem from './CartItem';
import { Button } from 'semantic-ui-react';

export default class MyCartPage extends React.Component {
    render() {
        return (
            <div className="my-cart-page">
                <h2>My Cart</h2>
                <div className="my-cart-page-contents">
                    <div className="my-cart-page__left">
                        <div className="cart-section">
                            <h3>2 Playbooks in Cart</h3>
                            <div className="cart-contents">
                                {
                                    [playbooks[1], playbooks[2]].map((playbook) => {
                                        return (<CartItem
                                            key={playbook.id}
                                            name={playbook.name}
                                        />);
                                    })
                                }
                            </div>
                        </div>
                        <div className="saved-for-later-section">
                            <h3>Saved for Later</h3>
                            You have not saved any play books for later
                        </div>
                        <div className="wish-list-section">
                            <h3>Recently Wish Listed Playbooks</h3>
                            You have not wish listed any playbooks
                        </div>
                    </div>
                    <div className="my-cart-page__right">
                        <div className="cart-total-price">
                                <h2>Total:</h2>
                                $1000.00
                        </div>
                        <div className="cart-checkout-action">
                                <Button color="red">Checkout</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}