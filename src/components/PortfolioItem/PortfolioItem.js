import React from 'react';
import PropTypes from 'prop-types';
import './style';

const PortfolioItem = (props, context) => {
  const { theme: { colorPrimary, textAlternate } } = context;

  if (props.render) return props.render;
  else
    return (
      <div
        className="portfolio-item"
        style={{ backgroundColor: colorPrimary, color: textAlternate }}
      >
        <div className="portfolio-item__title">QikCircle Website</div>

        <div className="portfolio-item__desc">
         This is the main Website of my Previous Company Qik Rooms Pvt Ltd.
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-js" />
          <i className="fab fa-sass" />
          <i className="fab fa-html5" />
        </div>
        <div className="portfolio-item__links">
          <a href="http://www.qikcircle.com" target="_blank">Link</a>
        </div>
      </div>
    );
};

PortfolioItem.contextTypes = {
  theme: PropTypes.any
};

export default PortfolioItem;
