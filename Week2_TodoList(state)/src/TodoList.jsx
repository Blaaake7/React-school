import React, { useState } from 'react'
import './TodoList.css';

export default function TodoList({title, content, handleDeleteBtn, handleChangeTodo, id}) {
    const [modify, setModify] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState(title);
    const [selectedContent, setSelectedContent] = useState(content);

    const handleModifyBtn = (e) => {
        setModify(true);
    }

    const handleModifyInput = () => {
        setModify(false);
        handleChangeTodo(selectedTitle, selectedContent, id);
    }

    return (
    modify ? 
    <div className='editMode'>
        <div className='editModeInput'>
            <input className='editInputTitle' type="text" placeholder='제목' value={selectedTitle} onChange={(e) => setSelectedTitle(e.target.value)}/> 
            <input className='editInputTodo' type="text" placeholder='내용' value={selectedContent} onChange={(e) => setSelectedContent(e.target.value)}/>
        </div>
            <button className='modifyBtn' onClick={handleModifyInput}><i className="fa-solid fa-check"></i></button>
        
    </div> : 
    <li key={id} id={id} className="listItem" > {title} : {content}
    <button className='modifyBtn' onClick={handleModifyBtn}><i className="fa-solid fa-pencil"></i></button>
    <button onClick={() => handleDeleteBtn(id)} className="deleteBtn"><i className="fa-solid fa-trash"></i></button></li>
  )
}
