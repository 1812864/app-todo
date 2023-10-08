import React, { useState } from 'react'
import './totalTable.css'
import { Table, Input, Dropdown, Button } from 'semantic-ui-react'
// eslint-disable-next-line no-unused-vars
import _ from 'lodash'

const TotalTable = ({ handleUpdate,handleChange, inputHandler, filteredData, value, statusTodo,deleteTask,setUpdatModal }) => {
  const handlOpenModalUpdate = () => {
    setUpdatModal(true)
  }

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>STT</Table.HeaderCell>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Tên</Table.HeaderCell>
          <Table.HeaderCell>Trạng thái</Table.HeaderCell>
          <Table.HeaderCell>Hành động</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell><Input onChange={inputHandler} ></Input></Table.Cell>
          <Table.Cell>
            <div className="home">
              <select value={value} onChange={handleChange}>
                <option>Tất cả</option>
                <option value="Hoạt động">Hoạt động</option>
                <option value="Ẩn">Ẩn</option>
              </select>
            </div>
          </Table.Cell>
          <Table.Cell></Table.Cell>
        </Table.Row>
        {filteredData.map((item, idx) =>
          <Table.Row>
            <Table.Cell>{item.stt}</Table.Cell>
            <Table.Cell>{item.id}</Table.Cell>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>
              {item.status ? null : <Button onClick={(e) => statusTodo(item.id)}>Ẩn</Button>}

              {item.status ? <Button onClick={(e) => statusTodo(item.id)}>Hoạt động</Button> : null}
            </Table.Cell>
            <Table.Cell><Button onClick={() =>{
              handlOpenModalUpdate();
              handleUpdate(item)
            }}>Sửa</Button><Button onClick={() => deleteTask(item.id)}>Xóa</Button></Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  )
}
export default TotalTable