import React from 'react';
import { Button, Icon } from 'semantic-ui-react'

const ShoppingTile = () => (
    <div className="shopping-tile"> 
        <h2>Price</h2>
        <Button primary>Add to Cart</Button>
        <Button secondary>Buy Now</Button>
        <div className="share-section"> 
            <h3>Share via:</h3>
            <Button color="facebook">
                <Icon name="facebook" /> Facebook
            </Button>
            <Button color="twitter">
                <Icon name="twitter" /> Twitter
            </Button>
            <Button color="linkedin">
                <Icon name="linkedin" /> Linkedin
            </Button>
        </div>

    </div>
);

export default ShoppingTile;