import { FormEvent, useContext, useRef } from "react";
import { useDispatch } from "react-redux/es/exports";
import { AppContext } from "../context/app-context";
import MarkController from "../controllers/mark-controller";
import Mark from "../models/note";
import { markActions } from "../redux/mark-slice";

export default function CalculatorForm() {
  let nameRef = useRef<HTMLInputElement>(null);
  let midRef = useRef<HTMLInputElement>(null);
  let finalRef = useRef<HTMLInputElement>(null);
  let activitiesRef = useRef<HTMLInputElement>(null);

  //   let appContext = useContext(AppContext);

  let dispatch = useDispatch();

  let markController: MarkController = new MarkController();
  let onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    saveMark();
  };

  let saveMark = () => {
    let result = markController.store(
      nameRef.current?.value,
      midRef.current?.value,
      finalRef.current?.value,
      activitiesRef.current?.value
    );
    if (result) {
      //   appContext.addMark(
      //     new Mark(
      //       nameRef.current!.value,
      //       Number.parseFloat(midRef.current!.value),
      //       Number.parseFloat(finalRef.current!.value),
      //       Number.parseFloat(activitiesRef.current!.value),
      //       Date.now()
      //     )
      //   );

      let mark = new Mark(
        nameRef.current!.value,
        Number.parseFloat(midRef.current!.value),
        Number.parseFloat(finalRef.current!.value),
        Number.parseFloat(activitiesRef.current!.value),
        Date.now()
      );
      dispatch(markActions.addMark(mark))
      clear();
    } else {
      alert("Enter new mark data!");
    }
  };

  let clear = () => {
    nameRef.current!.value = "";
    midRef.current!.value = "";
    finalRef.current!.value = "";
    activitiesRef.current!.value = "";
  };
  return (
    <form className="marks-form" onSubmit={onSubmitHandler}>
      <div className="form-group">
        <label htmlFor="student-name" className="form-label">
          Student Name
        </label>
        <input
          type="text"
          id="student-name"
          name=""
          ref={nameRef}
          className="form-input"
          placeholder="Enter Student Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="mid-term" className="form-label">
          Mid Term
        </label>
        <input
          type="number"
          id="mid-term"
          name=""
          ref={midRef}
          className="form-input"
          placeholder="Enter Mark"
        />
      </div>
      <div className="form-group">
        <label htmlFor="final-term" className="form-label">
          Final
        </label>
        <input
          type="number"
          id="final-term"
          name=""
          ref={finalRef}
          className="form-input"
          placeholder="Enter Mark"
        />
      </div>
      <div className="form-group">
        <label htmlFor="activities" className="form-label">
          Activities
        </label>
        <input
          type="number"
          id="activities"
          name=""
          ref={activitiesRef}
          className="form-input"
          placeholder="Enter Mark"
        />
      </div>
      <button type="submit" className="form-btn">
        SAVE
      </button>
    </form>
  );
}
