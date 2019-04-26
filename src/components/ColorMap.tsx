import * as React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { generate } from "shortid";
import { reorderRows, reorder } from "../reorder";
import { AuthorList } from "./AuthorList";
import images from "../images.json";

const aId = generate();
const unrankedId = generate();

export const ColorMap = () => {
  const [rows, setRows] = React.useState([
    { id: aId, label: "a", urls: [] },
    {
      id: unrankedId,
      label: "unranked",
      urls: images
    }
  ]);

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) => {
        // dropped outside list
        if (!destination) {
          return;
        }

        setRows(reorderRows(rows, source, destination));
      }}
    >
      <div>
        <button
          onClick={() => {
            setRows([
              {
                id: generate(),
                label: "",
                urls: []
              },
              ...rows
            ]);
          }}
        >
          add row
        </button>
        {rows.map((row, i) => (
          <AuthorList
            onUp={() => setRows(reorder(rows, i, i - 1))}
            onDown={() => setRows(reorder(rows, i, i + 1))}
            internalScroll
            key={row.id}
            listId={row.id}
            listType="CARD"
            row={row}
          />
        ))}
      </div>
    </DragDropContext>
  );
};
