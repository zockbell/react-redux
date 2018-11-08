import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {

    const { inputValue, handleChange, handleSubmit, handleDelete, handleKeyDown } = props;

    return (
        <div>
            <input
                value = { inputValue } 
                onChange = { handleChange } 
                placeholder = "请输入关键字"
                onKeyDown = { handleKeyDown }
            />
            <button onClick={ handleSubmit }>提交</button>
            <ul>
                {
                    props.list.map((item, index) => {
                        return (
                            <li key={index} onClick={ handleDelete.bind(this,index) } style={{cursor: 'pointer'}}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )

}

// 将组件与store连接
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// stroe.dispatch, props
const mapDispatchToProps = (dispatch) => {
    return {
        // 监听输入框改变
        handleChange(e){
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
            // console.log(e.target.value);
        },

        // 添加提交
        handleSubmit(){
            const action = {
                type: 'add_todo_item'
            }
            dispatch(action);
        },

        // 回车提交
        handleKeyDown(e){
            if(e.keyCode === 13){
                // mapDispatchToProps.handleSubmit();
                const action = {
                    type: 'add_todo_item'
                }
                dispatch(action);
            }
        },

        // 删除
        handleDelete(index){
            // console.log(index);
            const action = {
                type: 'delete_todo_item',
                index
            }
            dispatch(action);
        },
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);