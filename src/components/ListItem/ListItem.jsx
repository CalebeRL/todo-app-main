import React, { useContext, useRef, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import propTypes from 'prop-types';
import './ListItem.css';

function ListItem (props) {

  const { list, setList } = useContext(AppContext);
  const { checkedList, setCheckedList } = useContext(AppContext);
  const { filter } = useContext(AppContext);
  const { clearCompleted, setClearCompleted } = useContext(AppContext);
  const { theme } = useContext(AppContext);

  const checkboxRef = useRef(null);
  const contentRef = useRef(null);
  const listItemRef = useRef(null);

  
  useEffect(() => {
    const checkedId = checkboxRef.current.id;

    if (checkedList) {
      if (checkedList[checkedId] === 'x') {
        checkboxRef.current.checked = true;
        contentRef.current.classList.add('list-item-checked');
      } else if (checkedList[checkedId] === 'o') {
        checkboxRef.current.checked = false;
        contentRef.current.classList.remove('list-item-checked');
      }

      localStorage.setItem('checkedListData', JSON.stringify(checkedList));
    }
    
  }, [checkedList]);

  useEffect(() => {

    if (filter === 'completed') {
      listItemRef.current.classList.remove('hide');
      checkedList.filter((a, b) => (a === 'o' && parseInt(listItemRef.current.id) === b) ? listItemRef.current.classList.add('hide') : null);
    }

    else if (filter === 'active') {
      listItemRef.current.classList.remove('hide');
      checkedList.filter((a, b) => (a === 'x' && parseInt(listItemRef.current.id) === b) ? listItemRef.current.classList.add('hide') : null);
    }

    else if (filter === 'all') {
      listItemRef.current.classList.remove('hide');
    }

  }, [filter]);

  useEffect(() => {

    if (clearCompleted === true) {

      checkedList.forEach((a, b) => {

        if (a === 'x') {
          checkedList.splice(b, 1);
          list.splice(b, 1);
        }
      });

      setList([...list]);
      setCheckedList([...checkedList]);

    }
        
    setClearCompleted(false);

  }, [clearCompleted]);

  useEffect(() => {

  }, [theme]);

  function handleChange() {
    const checkedId = checkboxRef.current.id;

    if (checkboxRef.current.checked === true) {
      checkedList.splice(checkedId, 1, 'x');
    } else {
      checkedList.splice(checkedId, 1, 'o');
    }
        
    return (
      setCheckedList([...checkedList])
    );

  }

  function removeListItem() {

    const listId = listItemRef.current.id;
    const checkedId = checkboxRef.current.id;

    list.splice(listId, 1);
    checkedList.splice(checkedId, 1);

    localStorage.setItem('listData', JSON.stringify(list));

    setList([...list]);
    setCheckedList([...checkedList]);
  }

  return (

    <div className="list-item__wrapper" id={props.id} ref={listItemRef}>
      <div className="input-checkbox__wrapper">
        <input 
          className="input-checkbox" 
          type="checkbox"
          onChange={handleChange}
          ref={checkboxRef}
          id={props.id}
        />
      </div>
      <div className="list-item__content">
        <p ref={contentRef}>{props.data}</p>
        <div className="remove-icon" onClick={removeListItem}></div>
      </div>
    </div>

  );

}

export default ListItem;

ListItem.propTypes = {
  children: propTypes.any
}.isRequired;
