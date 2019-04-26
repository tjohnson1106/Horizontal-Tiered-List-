import * as React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { generate } from "shortid";
import { reorderRows } from "../reorder";
import { ColorType } from "../types";
import { AuthorList } from "./AuthorList";

const aId = generate();
const unrankedId = generate();

export const ColorMap = () => {
  const [rows, setRows] = React.useState([
    { id: aId, label: "a", urls: [] },
    {
      id: unrankedId,
      label: "unranked",
      urls: [
        "https://images.pexels.com/photos/2126090/pexels-photo-2126090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2105262/pexels-photo-2105262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ]
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
        {rows.map((row) => (
          <AuthorList
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
