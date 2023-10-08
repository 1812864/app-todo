import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import './addAndResetButton.css'

const AddAndResetButton = ({toDo, addTask, newTask, setNewTask,status,setStatus,closeModal,openModal,showModal,setTodo,todoList }) => {

    
    const onChangeAction = (e) => {
        let value = e.target.value
        setStatus(value)
    }
    const reset = () => {
        setTodo(todoList)
    }
    return (
        <div className='wrap-button'>
            {!showModal ? <div className='container-modal'>
                <h3 className='header-modal'>Thêm mới công việc</h3>
                <Form className='form-modal'>
                    <Form.Field>
                        <label>Tên công việc:</label>
                        <input placeholder='Nhập vào tên công việc' value={newTask}
                            onChange={(e) => setNewTask(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Trạng thái:</label>
                        <select value={status} onChange={onChangeAction}>
                            <option value={false}>Hoạt động</option>
                            <option value={true}>Ẩn</option>
                        </select>
                    </Form.Field>
                    <Button type='submit' onClick={addTask}>Xác nhận</Button>
                    <Button type='close' onClick={openModal}>Đóng</Button>
                </Form>
            </div> : ''}
            <Button onClick={openModal}>Thêm công việc</Button>
            <Button onClick={reset}>Reset</Button>
        </div>
    )
}
export default AddAndResetButton