import { deleteTodo, removeTodo } from "@/store/todoSlice";
import { State } from "@/type";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {

      const todo = useSelector((state: State) => state.todo.todoList)
      const dispatch = useDispatch()
      const [showRemove, setShowRemove] = useState(false)

      return (




            <div className="px-20">
                  <div className="border border-gray-400">

                        {todo?.length === 0 && (
                              <h1 className='text-center text-xl mt-7 tracking-wide'>
                                    Your todo list is Empty!
                              </h1>
                        )}
                        <div className="px-9 py-4">
                              {
                                    todo.map((item) => (
                                          <h1 className="flex p-3 px-4 mb-4 items-center mt-4 justify-between border  hover:border hover:border-green-700 duration-300 focus-visible:border-green-700 border-l-8 border-l-green-700 hover:border-l-8 hover:border-l-green-700 border-green-700">{item.todo}
                                                <AiFillDelete size={20} className="text-gray-400 hover:text-red-600 cursor-pointer duration-300" onClick={() => dispatch(deleteTodo(item._id), toast.success("Todo deleted successfully!"))} />
                                          </h1>
                                    ))
                              }
                        </div>
                  </div>
            </div>


      );
};

export default TodoList;