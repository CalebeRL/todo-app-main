import React, { useContext, useEffect } from 'react';
import ListItem from '../ListItem/ListItem';
import AppContext from '../../context/AppContext';
import {DragDropContext, Droppable, Draggable} from '@hello-pangea/dnd';
import './BodyList.css';

function BodyList () {

  const { list, setList, checkedList, setCheckedList } = useContext(AppContext);

  useEffect(() => {
    
    if (list && checkedList) {
      setList(JSON.parse(localStorage.getItem('listData')));
      setCheckedList(JSON.parse(localStorage.getItem('checkedListData')));
    }

  }, []);

  useEffect(() => {

    if (list && list.length > 0) { 
      localStorage.setItem('listData', JSON.stringify(list));
    } 

    if (!list) {
      setList(['Start you todo list!']);
      setCheckedList(['o']);
    }

  }, [list]); 

  function handleOnDragEnd(result) {

    if(!result.destination) return;

    const itemsList = Array.from(list);
    const [reorderedItem] = itemsList.splice(result.source.index, 1);
    itemsList.splice(result.destination.index, 0, reorderedItem);

    const checkedItems = Array.from(checkedList);
    const [reorderedCheckedItem] = checkedItems.splice(result.source.index, 1);
    checkedItems.splice(result.destination.index, 0, reorderedCheckedItem);
    
    setCheckedList(checkedItems);
    setList(itemsList);
  }
  if (!list) {
    return (
      <h1>Alfacom</h1>
    );
  } else {
    return (
    
      <div className="body-list">

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="list">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {list.map((item, index) => {

                  return (
                    <Draggable key={item + index.toString()} draggableId={item + index.toString()} index={index}>
                      {(provided) => (
                        <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                          <ListItem data={item} key={index} id={index}></ListItem>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>

      </div> 

    );

  }
  
}

export default BodyList;
