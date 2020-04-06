import React, { Component } from 'react';
import SHOP_DATA from '../../data/shop.data';
import './Shop.scss';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
          {collections.map((collection) => {
            return (
              <CollectionPreview
                key={collection.id}
                title={collection.title}
                items={collection.items}
              />
            );
          })}
      </div>
    );
  }
}

export default Shop;
