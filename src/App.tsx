import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbarheading'
import Post from './components/Post'
import { PostDTO } from './type/dio'

const posts: PostDTO[] = [
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
  return (
    <div className="App">
      <Navbar />
      <Greeting name="Joe" greetingMsg="Hello!" isLoggedIn={true} />
      <div className="feed-container">
        {posts.map((postValue) => {
          return <Post key={postValue.id} post={postValue} />
        })}
      </div>
    </div>
  )
}

export default App
