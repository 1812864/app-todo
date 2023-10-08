import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import './updateModal.css'

const UpdateModal = ({setUpdateData, changeStatus, updateData, editTodo, openModal, setTodo, todoList, updateTask, changeTask }) => {

    console.log('avccxcxc',updateData);
    const reset = () => {
        setTodo(todoList)
    }
    const [data] = useState({
        name: updateData.name,
        status: updateData.status
    })
    return (
        <div className='wrap-button'>
            <div className='container-modal'>
                <h3 className='header-modal'>Sửa công việc</h3>
                <Form className='form-modal' >
                    <Form.Field>
                        <label>Tên công việc:</label>
                        <input placeholder={'thay doi'} value={updateData && updateData.name}
                            onChange={(e) => changeTask({
                                ...data,
                                name: e.target.value
                            })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Trạng thái:</label>
                        <select value={!updateData.status} onChange={(e) => {
                            console.log(e.target.value);
                            changeStatus({
                                ...data,
                                status: e.target.value ? true : false
                            })
                        }}>
                            <option value={false}>Hoạt động</option>
                            <option value={true}>Ẩn</option>
                        </select>
                    </Form.Field>
                    <Button type='submit' onClick={updateTask}>Thay đổi</Button>
                    <Button type='close' onClick={openModal}>Đóng</Button>
                </Form>
            </div>
            <Button onClick={openModal}>Thêm công việc</Button>
            <Button onClick={reset}>Reset</Button>
        </div>
    )
}
export default UpdateModal