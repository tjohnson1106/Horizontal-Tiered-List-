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
  const current = rows.find((x) => x.id === source.droppableId)!;
  const next = rows.find((x) => x.id === destination.droppableId)!;
  const target = current.urls[source.index];

  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current.urls, source.index, destination.index);
    return rows.map((x) =>
      x.id === current.id ? { ...x, urls: reordered } : x
    );
  }

  // remove from original
  current.urls.splice(source.index, 1);
  // insert into next
  next.urls.splice(destination.index, 0, target);
  return rows.map((x) => {
    if (current.id === x.id) {
      return {
        ...x,
        urls: current.urls
      };
    } else if (next.id === x.id) {
      return {
        ...x,
        urls: next.urls
      };
    }

    return x;
  });
};
