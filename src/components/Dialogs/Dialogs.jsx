import React from 'react'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import c from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const Dialogs = (props) => {

  let elementsDialogs = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)
  let elementMessages = props.state.messages.map(m => <Message message={m.message} />)
  let newMessage = React.createRef()

  let sendMessage = () => {
    let textMessage = newMessage.current.value
    alert(textMessage)
  }

  return (
    <div className={c.dialogs}>
      <nav className={c.items}>
        <ul>
          { elementsDialogs }
        </ul>
      </nav>
      <div className={c.messages}>
        { elementMessages }
        <div className={c.inputBlock}>
          <textarea ref={newMessage}></textarea>
          <button onClick={sendMessage}>send message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs