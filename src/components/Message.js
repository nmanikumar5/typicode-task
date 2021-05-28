import { useContext } from 'react'
import MessageContext from '../context/MessageContext';

const Message = () => {
    const messageMap = useContext(MessageContext);
    const variant = messageMap.isError ? 'danger' : 'success'

    return (

        <div className={`home alert alert-${variant}`}>
            {messageMap.message}
        </div>
    )
}

export default Message;