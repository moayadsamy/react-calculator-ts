import { createContext, useState } from "react";
import Mark from "../models/note";

export const AppContext = createContext<{
  marks: Mark[];
  addMark: (mark: Mark) => void;
  deleteMark: (mark: Mark) => void;
}>({
  marks: [],
  addMark: (mark: Mark) => {},
  deleteMark: (mark: Mark) => {},
});

export const AppContextProvider = (props: { children: React.ReactNode }) => {
  let [marks, setMarks] = useState<Mark[]>([]);

  let addMark = (mark: Mark) => {
    setMarks((prevState: Mark[]) => {
      return [mark, ...prevState];
    });
  };
  let deleteMark = (mark: Mark) => {
    let data = marks.filter((element) => mark._id != element._id);
    setMarks(data);
  };

  return (
    <AppContext.Provider
      value={{
        marks: marks,
        addMark: addMark,
        deleteMark: deleteMark,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
