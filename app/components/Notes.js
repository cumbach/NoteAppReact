import React from 'react';
import Note from './Note';
import { connect } from 'react-redux'
import { addNote, editNote, deleteNote } from '../dux'

const mapStateToProps = (state) => ({
  notes: state.notes
})

const mapDispatchToProps = (dispatch) => ({
  onAdd: () => dispatch(addNote()),
  onEdit: (id, task) => dispatch(editNote(id, task)),
  onDelete: id => dispatch(deleteNote(id))
})

let Notes = ({
  notes,
  onAdd,
  onEdit,
  onDelete
}) => (
  <div>
    <button onClick={onAdd} >+</button>
    <ul className="notes">{notes.map(note =>
      <li className="note" key={note.id}>
        <Note
          task={note.task}
          onEdit={onEdit.bind(null, note.id)}
          onDelete={onDelete.bind(null, note.id)} />
      </li>
    )}</ul>
  </div>
)
Notes = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes)

export default Notes
