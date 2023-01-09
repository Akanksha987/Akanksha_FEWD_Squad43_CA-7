import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'

const Body = () => {

    const [Books, setBooks] = useState([])
    const [Search, setSearch] = useState([])
 
    useEffect(() => {

        const config = {
            headers: {
                Authorization : "whatever-you-want"
            }
        }
        const url = `https://reactnd-books-api.udacity.com/books`
        axios.get(url, config)
        .then((res) => {
            console.log(res.data.books)
            setBooks(res.data.books)
            setSearch(res.data.books)
        }).catch(err => console.log(err))
    }, [])


    function onChangeHandler(elt) {
        let letters = []
        Books.forEach((e) => {
            if(e.title.toLowerCase().search(elt.target.value.toLowerCase()) >= 0){
                letters.push(e)
            }
        })
        console.log(letters)
        if(elt.target.value !== ""){
            setSearch(letters) 
        }
    }
    const length=Search.length
  return (

    <div className='container'>

        <div className='Search'>
            <input type="text" placeholder="Search " onChange={onChangeHandler} />
        </div>
         {length===0?<h1>"No books are available"</h1>:
         <div className='bookList'>
         {Search.map((book) => {
             return (
                     <div className='book'>
                         <div className='image'>
                             <img src={book.imageLinks.thumbnail} alt='Book' />
                         </div>
                         <div id='title'>
                             <h3>{book.title}</h3>
                             <h4>Author: {book.authors}</h4>
                         </div>
                         <div className='description'>
                             <button id='free'>Free</button>
                         </div>
                     </div>  
                     
             )
         })}
     </div>
         }
        
    </div>
  )
}

export default Body