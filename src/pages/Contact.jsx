import React, { Suspense, useRef, useState } from 'react'
import Fox from '../models/Fox'
import Loader from '../component/Loader'
import { Canvas } from '@react-three/fiber'
import emailjs from '@emailjs/browser'
import useAlert from '../hooks/useAlert'
import Alert from '../component/Alert'
const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(null)
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const {alert, showAlert, hideAlert} = useAlert()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('hit')
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE,
      {
        from_name: form.name,
        to_name: 'Job',
        from_email: form.email,
        to_email: 'jobkilonzo95@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then(() => {
      setIsLoading(false)
      showAlert({show:true, text: 'Message send successfully', type: 'success'})
      setTimeout(()=> {
        hideAlert()
        setCurrentAnimation('idle')
        setForm({ name: '', email: '', message: '' })
      }, [3000])
     

    }).catch((error) => {
      console.log(error)
      showAlert({show:true, text: 'I didnt receive your message', type: 'danger'})
      setIsLoading(false)
      setCurrentAnimation('idle')
    })
  }
  const handleFocus = () => setCurrentAnimation('walk')
  const handleBlur = () => setCurrentAnimation('idle')
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>

      {alert.show && <Alert {...alert} />}
      
      
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form  onSubmit={handleSubmit} className='w-fill flex flex-col gap-7 mt-14'>
          <label className='text-black-500 font-semibold'>
            <input type="text"
              name='name'
              className='input'
              placeholder='Job'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur} />
          </label>
          <label className='text-black-500 font-semibold'>
            <input type="email"
              name='email'
              className='input'
              placeholder='job@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur} />
          </label>
          <label className='text-black-500 font-semibold'>
            <textarea
              name='message'
              className='textarea'
              rows={4}
              placeholder='Let me know how I can help you!'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur} />
          </label>

          <button type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleBlur}
            onBlur={handleBlur}>{isLoading ? 'Sending...' : 'Send Message'}</button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas

          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]} />
          </Suspense>
        </Canvas>
      </div>


    </section>
  )
}

export default Contact