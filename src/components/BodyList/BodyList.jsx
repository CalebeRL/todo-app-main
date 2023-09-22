import React, { useContext, useEffect } from 'react';
import ListItem from '../ListItem/ListItem';
import AppContext from '../../context/AppContext';
import {DragDropContext, Droppable, Draggable} from '@hello-pangea/dnd';
import './BodyList.css';

function BodyList () {

  const { list, setList } = useContext(AppContext);
  const { checkedList, setCheckedList } = useContext(AppContext);

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem('listData')));
    setCheckedList(JSON.parse(localStorage.getItem('checkedListData')));

    if (list.length === 0)  list.push('Start your todo list!');

  }, []);

  useEffect(() => {
    if (list.length !==0) { 
      localStorage.setItem('listData', JSON.stringify(list));
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


  return (
    <div className="body-list">

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {list.map((item, index) => {

                return (
                  <Draggable key={item} draggableId={item} index={index}>
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

export default BodyList;
