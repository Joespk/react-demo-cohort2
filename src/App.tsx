import { FormEvent, useEffect, useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbarheading'
import Post from './components/Post'
import { CreatePostDTO, PostDTO } from './type/dio'
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState<PostDTO[] | null>(null)
  const [newTitle, setNewTitle] = useState<string>('')
  const [newBody, setNewBody] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        //const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        //const data = await res.json()

        //if (!res.ok) {
        //throw new Error('มันเอ๋อเล๋อ')
        //}

        const res = await axios.get<PostDTO[]>('https://jsonplaceholder.typicode.com/posts')
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const newRes: CreatePostDTO = {
        userId: Math.floor(Math.random() * 1000),
        title: newTitle,
        body: newBody,
      }
      await axios.post<PostDTO[]>('https://jsonplaceholder.typicode.com/posts', newRes, {
        headers: { 'Content-Type': 'application/json' },
      })
      console.log(newRes)
    } catch (err) {
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }

    setNewTitle('')
    setNewBody('')
  }

  return (
    <div className="App">
      <Navbar />
      <Greeting name="Joe" isLoggedIn={true} />
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" onChange={(e) => setNewTitle(e.target.value)} required />
        <label>Body</label>
        <input type="text" onChange={(e) => setNewBody(e.target.value)} required />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      <div className="feed-container">
        {posts &&
          posts.map((postValue) => {
            return <Post key={postValue.id} post={postValue} />
          })}
      </div>
    </div>
  )
}

export default App
