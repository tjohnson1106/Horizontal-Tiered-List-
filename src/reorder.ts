import { DraggableLocation } from "react-beautiful-dnd";

import { Row } from "./types";

export const reorder = (
  list: any[],
  startIndex: number,
  endIndex: number
): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const reorderRows = (
  rows: Row[],
  source: DraggableLocation,
  destination: DraggableLocation
) => {
  return rows;
  // const current = [...colors[source.droppableId]];
  // const next = [...colors[destination.droppableId]];
  // const target = current[source.index];
  // if (source.droppableId === destination.droppableId) {
  //   const reordered = reorder(current, source.index, destination.index);
  //   return {
  //     ...colors,
  //     [source.droppableId]: reordered
  //   };
  // }
  // // remove from original
  // current.splice(source.index, 1);
  // // insert into next
  // next.splice(destination.index, 0, target);
  // return {
  //   ...colors,
  //   [source.droppableId]: current,
  //   [destination.droppableId]: next
  // };
};
