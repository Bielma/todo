import Head from 'next/head'

import styles from '../styles/Home.module.css'
import ToDoList from '../components/ToDoList'
import AddTaskForm from '../components/AddTaskForm'
import FilterForm from '../components/FilterForm'
export default function Home() {

    return ( 
        <div className = { styles.container }>
            <Head>
                <title > TODOS </title> 
                <link rel = "icon"
                    href = "/favicon.ico"/>
            </Head>

            <main className = { styles.main } >
                <FilterForm/>
                <h1 className = { styles.title }>
                To Do List
                </h1> 
                <p></p>
                <AddTaskForm />
                <ToDoList/>
            </main>
        </div>
    )
}