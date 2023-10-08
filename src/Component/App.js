import '../Component/App.css'
import React, { useState } from 'react'
import SearchExampleStandard from './search/search';
import TotalTable from './totalTable/totalTable';
import AddAndResetButton from './addAndResetButton/addAndResetButton';
import UpdateModal from './updateModal/updateModal';

function App() {
  const todoList = [
    {
      id: 1,
      stt: 1,
      name: 'Trung',
      status: true
    },

    {
      id: 2,
      stt: 2,
      name: 'Vuong',
      status: true
    },

    {
      id: 3,
      stt: 3,
      name: 'Cuong',
      status: false
    },

    {
      id: 4,
      stt: 4,
      name: 'Anh',
      status: false
    }
  ]

  const [toDo, setToDo] = useState(todoList)
  const [updateData, setUpdateData] = useState('')
  const [newTask, setNewTask] = useState('')
  const [inputText, setInputText] = useState('')
  const [status, setStatus] = useState('')
  const [showModal, setShowModal] = useState(true)
  const [close, setClose] = useState(false)
  const [updateModal, setUpdatModal] = useState(false)


  const openModal = () => {
    setShowModal(!showModal)
  }

  const closeModal = () => {
    setClose(!close)
  }

  const filteredData = toDo.filter((el) => {
    if (inputText === '') {
      return el
    }
    else {
      return el.name.toLowerCase().includes(inputText)
    }
  })

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }

  const handleChange = (e) => {
    console.log('vo day');
    const dropdownHandler = e.target.value
    setUpdateData(dropdownHandler)
  }

  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id)
    setToDo(newTasks);
  }

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, stt: num, name: newTask, status: !status }
      setToDo([...toDo, newEntry])
      setNewTask('')
      setStatus('')
    }
  }

  const handleUpdate = (itemUpdate) => {
    console.log('itemUpdate',itemUpdate);
    let newTodos = [...toDo];
    newTodos[itemUpdate.id] = {
      ...itemUpdate,
      name: itemUpdate.name,
      status: itemUpdate.status
    }
    setUpdateData( newTodos[itemUpdate.id])
   // setToDo(newTodos)
  }

  const statusTodo = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  const changeTask = (e) => {
    console.log('eggggg',e);
    let newEntry = {
      id: updateData.id,
      name: e.name,
      stt: updateData.stt,
    }
    console.log('vo day');
    setUpdateData(newEntry);
  }

  const changeStatus = (e) => {
    let newEntry = {
      status: e.status
    }
    console.log('vo day');
    setUpdateData(newEntry);
  }

  const updateTask = () => {
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id );
    console.log('filterRecords',filterRecords);
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    console.log('vo day');
    setUpdateData('');
  }

  return (
    <div className="App">
      <SearchExampleStandard />
      {!updateModal ? <AddAndResetButton
        addTask={addTask}
        newTask={newTask}
        setNewTask={setNewTask}
        status={status}
        setStatus={setStatus}
        openModal={openModal}
        closeModal={closeModal}
        showModal={showModal}
        setTodo={setToDo}
        todoList={todoList}
      /> : <UpdateModal
        closeModal={closeModal}
        openModal={openModal}
        close={close}
        showModal={showModal}
        addTask={addTask}
        newTask={newTask}
        setNewTask={setNewTask}
        status={status}
        setStatus={setStatus}
        setTodo={setToDo}
        todoList={todoList}
        filteredData={filteredData}
        updateData={updateData}
        setUpdateData={setUpdateData}
        changeTask={changeTask}
        updateTask={updateTask}
        changeStatus={changeStatus}
      />}
      <TotalTable
        handleChange={handleChange}
        inputHandler={inputHandler}
        filteredData={filteredData}
        statusTodo={statusTodo}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
        openModal={openModal}
        setUpdatModal={setUpdatModal}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
