import TaskShow from './TaskShow';

function TaskList({ tasks }) {
    return (
        <div>
            {tasks.map((task, index) => {
                return <TaskShow key={index} task={task} />;
            })}
        </div>
    );
}

export default TaskList;
