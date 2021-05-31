import React from 'react';
import { Categories, PizzaBlock, SortPopup } from '../components';

import { useSelector, useDispatch } from 'react-redux';

import { setCategory } from '../redux/actions/filters';

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickIem={(index) => dispatch(setCategory(index))}
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
