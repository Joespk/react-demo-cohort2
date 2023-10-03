import { FormEvent, useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbarheading'
import Post from './components/Post'
import { PostDTO } from './type/dio'

const initialPosts: PostDTO[] = [
  {
    id: 1,
    userId: 1,
    title: "Let's learn React!",
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 2,
    userId: 2,
    title: 'How to install Node.js',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 3,
    userId: 3,
    title: 'Basic HTML',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 4,
    userId: 4,
    title: 'CSS',
    body: 'To understand how we provide styling for web pages\n To understand how CSS syntax\nDemonstrate how to apply CSS into HTML elements',
  },
]

function App() {
  const [posts, setPosts] = useState<PostDTO[]>(initialPosts)
  const [newTitle, setNewTitle] = useState<string>('')
  const [newBody, setNewBody] = useState<string>('')
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const currentPosts = [...posts]

    currentPosts.push({
      id: Math.floor(Math.random() * 1000),
      userId: Math.floor(Math.random() * 1000),
      title: newTitle,
      body: newBody,
    })

    setPosts(currentPosts)
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

        <button type="submit">Submit</button>
      </form>

      <div className="feed-container">
        {posts.map((postValue) => {
          return <Post key={postValue.id} post={postValue} />
        })}
      </div>
    </div>
  )
}

export default App
