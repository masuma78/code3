import "./App.css";
import { useState } from "react";



// function App() {
//   console.log("I am being Re-Rendered");
//   // let counter = 10;
//   const [dynamicCounter, setDynamicCounter] = useState(200);
//   const [counter, setCounter] = useState(10);
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);

//   const increaseHandler = () => {
//     setDynamicCounter(dynamicCounter + 1);
//   };


//   const decreaseHandler = () => {
//     setDynamicCounter(dynamicCounter - 1);
//   };
//   const increaseHandler2 = () => {
//     setCounter(counter + 1);
//   };

//   const decreaseHandler2 = () => {
//     setCounter(counter - 1);
//   };
//   const changeHandler = (e) => {
//     setName(e.target.value);
//   };
//   const changeHandler2 = (e) => {
//     setAge(e.target.value);
//   };
  

//   return (
//     <div className="App">
//       <h2>The current value of the counter is {dynamicCounter}</h2>
//       <button onClick={() => increaseHandler(1)}>Increase By 1</button>
//       <button onClick={() => decreaseHandler(1)}>Decrease By 1</button>
//       <button onClick={() => setDynamicCounter(0)}>Reset</button>
//       <hr />  
//       <h2>The current value of the counter is {counter}</h2>
//       <button onClick={() => increaseHandler2(1)}>Increase By 1</button>
//       <button onClick={() => decreaseHandler2(1)}>Decrease By 1</button>
//       <hr />
//       <h2>The current name is {name}</h2>
//       <input type="text" onChange={changeHandler} />
//       <hr />
//       <h2>The current age is {age}</h2>
//       <input type="text" onChange={changeHandler2} />
//     </div>
//   );
// }

// function App () {

//   const [dynamicCounter, setDynamicCounter] = useState(200);
//   const [counter, setCounter] = useState(0);
  

//   const increaseHandler = (payload) => {
//     setDynamicCounter(dynamicCounter + payload);
//   };
//   const decreaseHandler = (payload) => {
//     setDynamicCounter(dynamicCounter - payload);
//   };
//   const increaseHandler2 = (payload) => {
//     setCounter(counter + payload);
//   };
//   const decreaseHandler2 = (payload) => {
//     setCounter(counter - payload);
//   };

//   return (
//     <div className="App">
//       <h2>The current value of the counter is{dynamicCounter}</h2>
//       <button onClick={() => increaseHandler(10)}>Increase By 1</button>
//       <button onClick={() => decreaseHandler(1)}>Decrease By 1</button>
//       <hr />
//       <h2>The current value of the counter is {counter}</h2>
//       <button onClick={() => increaseHandler2(1)}>Increase By 1</button>
//       <button onClick={() => decreaseHandler2(1)}>Decrease By 1</button>
//     </div>
//   )
// }


// New Code


const App = () => {
	const [noteTitle, setNoteTitle] = useState("");
	const [notes, setNotes] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableNote, setEditableNote] = useState(null);
	

	const createHandler = (event) => {
		event.preventDefault();
		if (!noteTitle) {
			return alert("Please Enter Note Title");
		}
		const newNote = {
			id: Date.now() + "",
			title: noteTitle,
		};

		setNotes([...notes, newNote]); //
		
		setNoteTitle("");
		
	};
	const removeHandler = (noteId) => {
		
		const newNotes = notes.filter((note) => note.id !== noteId);
	

		setNotes(newNotes);
		
	};

	const editHandler = (note) => {
		setEditMode(true);
		setNoteTitle(note.title);
		setEditableNote(note);
	};

	const updateHandler = (event) => {
		event.preventDefault();

		if (!noteTitle.trim()) {
			return alert("Please Enter Note Title");
		}
		const updatedNotesArray = notes.map((note) => {
			if (note.id === editableNote.id) {
				
				return {
					...note,
					title: noteTitle,
				};

				
			}

			return note;
		});
		

		setNotes(updatedNotesArray);
		setEditMode(false);
		setEditableNote(null);
		setNoteTitle("");
	};

	return (
		<div className="App">
			<form className="f1" onSubmit={editMode ? updateHandler : createHandler}>
				<input className="i1"
					type="text"
					value={noteTitle}
					onChange={(event) => setNoteTitle(event.target.value)}
				/>
				<button type="submit" className="b1">
					{editMode ? "Update Note" : "Add Note"}
				</button>
			</form>
			<ul className="note-list">
				{notes.map((note) => (
					<li key={note.id}>
						<span>{note.title}</span>
						<button className="b2" onClick={() => editHandler(note)}>Edit</button>
						<button className="b3" onClick={() => removeHandler(note.id)}>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;


