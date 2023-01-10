import React, {useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Product} from '../components/';

const Home = () => {
  const {t} = useTranslation();
  const {following} = useData();
  const [products, setProducts] = useState(following);
  const {sizes} = useTheme();

  return (
    <Block>
      {/* character list */}
      <Block
        scroll
        paddingHorizontal={sizes.padding}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: sizes.l}}>
        <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
          {products?.map((product) => (
            <Product {...product} key={`card-${product?.id}`} />
          ))}
        </Block>
      </Block>
    </Block>
  );
};

export default Home;
