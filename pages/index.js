import Head from 'next/head'

import styles from '../styles/Home.module.css'
import ToDoList from '../components/ToDoList'
import AddTaskForm from '../components/AddTaskForm'
export default function Home() {


  const todoList = [{
    id: 1,
    name : "lavar ropa",
    description: "xdddxd"
  },
  {
    id: 2,
    name : "lavar rop2",
    description: "xdddxd"
  },
  {
    id: 3,
    name : "lavar rop2",
    description: "xdddxd"
  },
]


  return (
    <div className={styles.container}>
      <Head>
        <title>TODO App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to this app
        </h1>
        <AddTaskForm/>      
        <ToDoList todoList = {todoList}/>
        
      </main>

      
    </div>
  )
}

