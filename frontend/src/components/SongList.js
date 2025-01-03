import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

const SongList = ({ songs = [], playSong = () => {} } ) => {
  return (
    <Droppable droppableId="songList">
      {(provided) => (
        <ul
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="p-4 space-y-2 bg-transparent rounded-lg w-9/12 ml-4"
          style={{
            maxHeight: "400px",
            overflowY: "auto",
          }}
        >
          {songs.map((song, index) => (
            <Draggable key={String(song.id)} draggableId={String(song.id)} index={index}>
              {(provided) => (
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="flex items-center p-4 bg-transparent rounded-lg hover:bg-red-950 cursor-pointer"
                  onClick={() => playSong(song)}
                >
                  <p className="text-xs text-white font-semibold mr-10">{song.id}</p>
                  <img
                    src={song.artwork}
                    alt={song.title}
                    className="w-12 h-12 rounded-md mr-4"
                  />
                  <h2 className="font-semibold text-white ml-10">{song.title}</h2>
                  <p className="text-sm text-gray-400 ml-10">{song.artist}</p>
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default SongList;
