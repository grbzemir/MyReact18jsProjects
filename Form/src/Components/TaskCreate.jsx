import React, { useState } from "react";

function TaskCreate() {

    const [title, setTitle] = useState("");
    const [taskDesc, setTaskDesc] = useState("");



    const handleChange = (event) => {
        setTitle(event.target.value);
        event.preventDefault();
    }

    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value);
        event.preventDefault();
    }

    const handleSubmit = (event) => {
        // console.log("Submit");
        console.log(title, taskDesc);
        event.preventDefault();
        setTitle('');
        setTaskDesc('');
    }

    return (
        <div className="task-create">
            <h3>Lütfen Task Ekleyiniz</h3>
            <form className="task-form">
                <label className="task-label">Baslik</label>
                <input value={title} onChange={handleChange} className="task-input" />
                <label className="task-label">Task Giriniz</label>
                <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={5} />
                <button className="task-button" onClick={handleSubmit}>Oluştur</button>
            </form>
        </div>
    );
}

export default TaskCreate;