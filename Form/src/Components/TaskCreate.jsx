
function TaskCreate() {
    return (
        <div className="task-create">
            <h3>Lütfen Task Ekleyiniz</h3>
            <form className="task-form">
                <label className="task-label">Baslik</label>
                <input className="task-input" />
                <label className="task-label">Task Giriniz</label>
                <textarea className="task-input" rows={5} />
                <button className="task-button">Oluştur</button>
            </form>
        </div>
    );
}

export default TaskCreate;