import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ToDoList from '../components/ToDoList'
import AddTaskForm from '../components/AddTaskForm'
import FilterForm from '../components/FilterForm'
import TodoCard from '../components/TodoCard'
import { connect } from 'react-redux';
import HeaderList from '../components/HeaderList'



function Home(props) {
    const {todoList, option, date} = props
    
    return (
        <>
            <Head>
                <title > TODOS </title>
                <link rel="icon"
                    href="/favicon.ico" />
            </Head>

            <main className="container" >
               <HeaderList/>   
              
                <ToDoList>
                    {
                        todoList.map(item =>
                            option === 'all' ?                                
                                <TodoCard  key={item.id} {...item}/>
                            : 
                            item.date === date &&
                            <TodoCard  key={item.id} {...item}/>
                        )

                    }
                </ToDoList>



            </main>
        
        </>
    )
}


const mapStateToProps = state => {
    return {
        todoList: state.todoList,
        option: state.option,
        date: state.date,
    }
}


export default connect(mapStateToProps, null)(Home);