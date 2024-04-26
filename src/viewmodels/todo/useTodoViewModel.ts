import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from '../../stores';
import moment from 'moment';
import {Enum, itemTodoType} from '../../utils';

const initialForm: itemTodoType = {
  id: '',
  title: '',
  time: '',
  priority: Enum.Priority.medium, // 0:low - 1:medium - 2: high
};

const AutoIncrementId = (array: Array<any>) =>
  Math.max(...array.map((o: any) => o.id), 0);

export const useTodoViewModel = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: {global: {todo: any}}) => state.global.todo);

  const [indexEdit, setIdEdit] = useState<number | null>(null);
  const [infoTask, setInfoTask] = useState<itemTodoType>(initialForm);
  const getList = () => {
    let tasks = [...data];
    tasks.sort((a: itemTodoType, b: itemTodoType) => b.priority - a.priority);
    return tasks;
  };

  const addItem = () => {
    const id = AutoIncrementId(data) + 1;
    const item: itemTodoType = {
      id: id,
      title: `Task ${id}`,
      time: moment(new Date()).add(2, 'days').format('DD/MM/YYYY'),
      priority: Enum.Priority.medium, // 0:low - 1:medium - 2: high
    };

    dispatch(Actions.global.todo.add(item));
  };

  const activeEdit = (index: number) => {
    setIdEdit(index);
  };

  const editItem = (item: itemTodoType) => {
    activeEdit(item.id);
    setInfoTask(item);
  };
  const getEditId = () => indexEdit;
  const removeItem = () => {};

  const setName = (value: string) => {
    setInfoTask(prev => ({...prev, title: value}));
  };
  const setDate = (value: string) => {
    setInfoTask(prev => ({...prev, time: value}));
  };
  const setPriority = (value: any) => {
    setInfoTask(prev => ({...prev, priority: value}));
  };
  const setSubmit = () => {
    if (indexEdit != null) {
      let _data:  {data: itemTodoType} = {
        data: infoTask,
      };

      dispatch(Actions.global.todo.update(_data));
    }

    setIdEdit(null);
    setInfoTask(initialForm);
  };
  const setDelete = () => {
    if (indexEdit != null && infoTask.id != '') {
      dispatch(Actions.global.todo.remove({id: infoTask.id}));
    }
    setIdEdit(null);
  };

  const editFunc = {
    info: infoTask,
    name: setName,
    date: setDate,
    priority: setPriority,
    delete: setDelete,
    submit: setSubmit,
  };

  return {
    getList,
    addItem,
    editItem,
    removeItem,
    getEditId,
    editFunc,
  };
};
