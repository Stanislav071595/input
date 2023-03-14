import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
    const [message, setMessage] = useState( [
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const addMessage = (title: string) => {
        let newMessage =  {message: title};
        setMessage([newMessage, ...message])
    }

    let [title, setTitle] = useState('')

    const onCLickButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }


    return (
        <div className="App">
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={onCLickButtonHandler}/>
        {
            message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })
        }
</div>
)
    ;
}

export default App;
