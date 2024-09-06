"use client"
import { addtodo } from "@/store/todoSlice"
import { useState } from "react"
import toast from "react-hot-toast"
import { IoClose } from "react-icons/io5"
import { useDispatch } from "react-redux"
import TodoList from "./TodoList"



const TodoForm = () => {
      const dispatch = useDispatch()
      const [show, setShow] = useState("")

      const handleTodo = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
            e.preventDefault();

            if (show === "") {
                  toast.error("Please write your todo!")
            } else {
                  dispatch(addtodo({ _id: Math.random().toString(), todo: show }))
                  toast.success("Todo added successfully!")
                  setShow("")
            }
      }


      return (
            <div className="lg:mx-64 bg-slate-900 h-full text-white mt-8  rounded-md pb-8">
                  <div className="py-6">
                        <h1 className="text-center text-3xl text-gray-400 tracking-wide">Todo Application</h1>
                        <form onSubmit={handleTodo} className="text-center px-20 flex gap-4 items-center py-6">
                              <input
                                    value={show}
                                    onChange={(e) => setShow(e.target.value)}
                                    type="text"
                                    placeholder="Enter your todo..."
                                    className="lg:flex-1 pr-12 pl-5 py-4 placeholder:text-green-700 border border-gray-400 outline-none bg-transparent relative focus-visible:border-green-700 hover:border hover:border-green-700 duration-300"
                              />
                              <button className="pr-6 pl-6 py-4 border border-gray-400 outline-none bg-transparent text-gray-400 focus-visible:border-green-700 hover:border hover:border-green-700 duration-300 hover:text-green-700 uppercase">Add Todo</button>
                              {
                                    show && (
                                          <IoClose onClick={() => setShow("")} size={20} className="left-[1000px] top-[135px] absolute hover:text-red-500 cursor-pointer duration-300 text-gray-400" />
                                    )
                              }
                        </form>
                        <TodoList/>
                  </div>
            </div>





      )
}
export default TodoForm