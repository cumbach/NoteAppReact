import React from 'react';

export default class Lane extends React.Component {

  render() {
    return (
      <div>
        <h1>im a lane</h1>
      </div>
    )
  }
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     editing: false
  //   };
  // }

  // render() {
  //   return this.state.editing
  //         ? this.renderEdit()
  //         : this.renderLane()
  // }
  //
  // renderEdit = () => {
  //   return <input type="text"
  //     ref={
  //       (e) => e ? e.selectionStart = this.props.task.length : null
  //     }
  //     autoFocus={true}
  //     defaultValue={this.props.task}
  //     onBlur={this.finishEdit}
  //     onKeyPress={this.checkEnter} />;
  // };
  //
  // renderNote = () => {
  //   const onDelete = this.props.onDelete;
  //   return (
  //     <div onClick={this.edit}>
  //     <span className="task">{this.props.task}</span>
  //       {onDelete ? this.renderDelete() : null }
  //     </div>
  //   );
  // };
  //
  // renderDelete = () => {
  //   return <button className="delete-note" onClick={this.props.onDelete}>x</button>;
  // };
  //
  // edit = () => {
  //   this.setState({
  //     editing: true
  //   });
  // };
  //
  // checkEnter = (e) => {
  //   if(e.key === 'Enter') {
  //     this.finishEdit(e);
  //   }
  // };
  //
  // finishEdit = (e) => {
  //   const value = e.target.value;
  //
  //   if(this.props.onEdit) {
  //     this.props.onEdit(value);
  //     this.setState({
  //       editing: false
  //     });
  //   }
  // };

}