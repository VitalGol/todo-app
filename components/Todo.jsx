import React from 'react';

const Todo = ({
  id,
  title,
  description,
  complete,
  mongoId,
  deleteTodo,
  completeTodo,
}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-whit ${
          complete ? 'text-red-500' : ''
        }`}
      >
        {id + 1}
      </th>
      <td className={`px-6 py-4 ${complete ? 'line-through' : ''}`}>{title}</td>
      <td className={`px-6 py-4 ${complete ? 'line-through' : ''}`}>
        {description}
      </td>
      <td className="px-6 py-4">{complete ? 'Completed' : 'Pending'}</td>
      <td className="px-6 py-4 flex gap-1">
        <button
          className="bg-red-500 rounded px-4 py-2 text-white"
          onClick={() => deleteTodo(mongoId)}
        >
          Delete
        </button>
        {complete ? (
          ''
        ) : (
          <button
            className="bg-green-500 rounded px-4 py-2 text-white"
            onClick={() => completeTodo(mongoId)}
          >
            Done
          </button>
        )}
      </td>
    </tr>
  );
};

export default Todo;
