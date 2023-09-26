import React, { useContext} from 'react';
import AppContext from '../../context/AppContext';
import './FooterList.css';

function FooterList () {

  const { checkedList, setFilter, setClearCompleted } = useContext(AppContext);
  
  function handleSetFilter(event) {
    setFilter(event.target.id);

    event.target.parentElement.childNodes.forEach((item) => {
      item.classList.remove('list-option__clicked');
    });

    event.target.classList.add('list-option__clicked');
  }  

  return (
    <div className="footer__wrapper">
      <div className="footer">
        <p className="list-info">{checkedList.filter((a) => a === 'o' ? a : null).length} items left</p>

        <div className="list-options-desktop">

          <p className="list-option list-option__clicked" id="all" onClick={handleSetFilter}>All</p>
          <p className="list-option" id="active" onClick={handleSetFilter}>Active</p>
          <p className="list-option" id="completed" onClick={handleSetFilter}>Completed</p>

        </div>

        <p className="list-option" onClick={() => {setClearCompleted(true);}}> Clear Completed</p>
      </div>

      <div className="footer__mobile">
        <div className="list-options-mobile">
                    
          <p className="list-option list-option__clicked" id="all" onClick={handleSetFilter}>All</p>
          <p className="list-option" id="active" onClick={handleSetFilter}>Active</p>
          <p className="list-option" id="completed" onClick={handleSetFilter}>Completed</p>

        </div>
      </div>
    </div>
        
  );
}

export default FooterList;
