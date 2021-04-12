import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='footer'>
        <div className='social'>
          <ul>
            <li>
              <a href={props.data ? props.data.email : '/'}>
                <i className='fa fa-envelope'></i>
              </a>
            </li>
            <li>
              <a href={props.data ? props.data.twitter : '/'}>
                <i className='fa fa-twitter'></i>
              </a>
            </li>
            <li>
              <a href={props.data ? props.data.linkedin : '/'}>
                <i className='fa fa-linkedin'></i>
              </a>
            </li>
          </ul>
        </div>
        <div className='container text-center'>
          <p>
            &copy; 2021 DecisionHub
          </p>
        </div>
      </div>
    </div>
  )
}
