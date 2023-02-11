import {useState, ChangeEvent, MouseEvent} from 'react'
import { Blog } from '../api/blogs'

const BlogForm = (props: Props) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(title);
    setTitle(e.target.value)
  }

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(description);
    setDescription(e.target.value)
  }

  const onSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // console.log('submit', title, description);
    const request = { title: title, description: description }
    const response = await fetch('/api/blogs', {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    setTitle('')
    setDescription('')

    console.log('Response is ...', response.json())
  }

  const onGet = async () => {
    const response = await fetch('/api/blogs', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log('Response is ...', response.json())
  }

  return(
    <div>
      <h1>BlogForm</h1>
      <form>
        <div>
          <label>Title</label>
          <input value={title} type="text" onChange={onChangeTitle}></input>
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={onChangeDescription}></textarea>
        </div>
        <button onClick={onSubmit}>Submit</button>
      </form>
      <button onClick={onGet}>Get</button>
      <ul>
        {props.data.map((v) => {
          return (
          <li key={v.id}>
            {v.title}: {v.description}
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BlogForm;
