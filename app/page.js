'use client';

import { useEffect, useState } from 'react';
import Todo from '@/components/Todo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Home() {
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [todoData, setTodoData] = useState([]);

  const fetchTodos = async () => {
    const response = await axios('/api');
    toast.success(response.data.msg, {
      autoClose: 2000,
    });
    setTodoData(response.data.todos);
  };

  const deleteTodo = async (id) => {
    const response = await axios.delete('/api', {
      params: { mongoId: id },
    });
    toast.success(response.data.msg);
    fetchTodos();
  };

  const completeTodo = async (id) => {
    const response = await axios.put(
      '/api',
      {},
      {
        params: { mongoId: id },
      }
    );

    toast.success(response.data.msg);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((form) => ({ ...form, [name]: value }));
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // api code
      const response = await axios.post('/api', formData);
      // toast.success('Success Notification !');
      toast.success(response.data.msg);
      setFormData({ title: '', description: '' });
      fetchTodos();
    } catch (error) {
      toast.error('Error');
    }
  };
  return (
    <>
      <ToastContainer theme="dark" />
      <form
        className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-4 mx-auto"
        onSubmit={onSubmitHandler}
      >
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          className="w-full px-3 py-2 border-2 bg-slate-100"
          value={formData.title}
          onChange={onChangeHandler}
        />
        <textarea
          name="description"
          placeholder="Enter Description"
          cols="30"
          rows="3"
          className="w-full px-3 py-2 border-2 bg-slate-100"
          value={formData.description}
          onChange={onChangeHandler}
        ></textarea>
        <button
          type="submit"
          className="px-10 py-3 text-white bg-green-500 rounded-lg"
        >
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto w-[80%] max-w-[800px] mt-8 mx-auto">
        <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {todoData.map((item, index) => {
              return (
                <Todo
                  key={index}
                  id={index}
                  title={item.title}
                  description={item.description}
                  complete={item.isCompleted}
                  mongoId={item._id}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
