import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import { plural, variants } from "../../utils";

function Controls({totalCost, basket, list, onClick}) {

  return (
    <div className='Controls'>
      <p className='Controls-basket'>В корзине:</p>
      <div className='Controls-cost'>{basket.length !== 0 ? `${basket.length} ${plural(basket.length,variants)} /  ${totalCost()}₽` : ' пусто'}</div>
      <button onClick={() => onClick()}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onAdd: PropTypes.func
};

Controls.defaultProps = {
  onAdd: () => {}
}

export default React.memo(Controls);
