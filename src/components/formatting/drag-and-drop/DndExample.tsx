"use client";

import { useEffect, useState } from "react";
import { IoIosLock } from "react-icons/io";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import LoadingSkeleton from "@/components/loadingSkeleton/loadingSkeleton";

const STORAGE_KEY = "dragAndDropData";

const initialData = [
  {
    id: 0,
    components: [
      { id: 101, name: "Language" },
      { id: 102, name: "Experience", height: "h-[90px]" },
      { id: 103, name: "Education", height: "h-[90px]" },
    ],
  },
  {
    id: 1,
    components: [
      { id: 201, name: "Skills" },
      { id: 202, name: "Key Achievements" },
      { id: 203, name: "Certificate" },
      { id: 204, name: "Projects" },
      { id: 205, name: "Interest" },
    ],
  },
];

type propsType = {
  doubleColumn?: boolean | string
}

const DndExample = (props: propsType) => {
  const { doubleColumn } = props
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  const saveToLocalStorage = (updatedData: any) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    let newData = [...data];
    const sourceColIndex = newData.findIndex(col => col.id.toString() === source.droppableId);
    const destColIndex = newData.findIndex(col => col.id.toString() === destination.droppableId);

    if (sourceColIndex === -1 || destColIndex === -1) return;

    const [movedItem] = newData[sourceColIndex].components.splice(source.index, 1);
    newData[destColIndex].components.splice(destination.index, 0, movedItem);

    setData(newData);
    saveToLocalStorage(newData);
  };

  if (!data.length) return <LoadingSkeleton />;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={`grid  ${doubleColumn ? 'grid-cols-2 gap-4 transition-all duration-300' : 'grid-cols-1 transition-all duration-300 p-4 bg-gray-100 rounded-lg'}`}>
        {data.map((col) => (
          <Droppable key={col.id} droppableId={col.id.toString()} type="ITEM">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className={doubleColumn ? "p-4 bg-gray-100 rounded-lg" : ""}>
                {col.components.map((component, index) => (
                  <Draggable key={component.id} draggableId={component.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        className={`bg-gray-200 border rounded-lg p-3 mb-2 text-center cursor-pointer  hover:bg-gray-300 ${component.height}`}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        {component.name}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};
export default DndExample;
