import React from 'react'

const EditExpense = (props) => {
  console.log('props', props);
  return (
    <div>Editing the expense page with the id {props.match.params.id}</div>
  )
};

export default EditExpense;