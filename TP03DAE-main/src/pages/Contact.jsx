import { useState } from 'react'
import { toast } from 'react-toastify'
import '../css/modules/components.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name) errs.name = 'Nombre requerido'
    if (!form.email || !form.email.includes('@')) errs.email = 'Email inválido'
    if (!form.message) errs.message = 'Mensaje requerido'
    return errs
  }

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      toast.success('Formulario enviado con éxito')
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <section className="form-section">
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <small>{errors.name}</small>}
        </div>
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <small>{errors.email}</small>}
        </div>
        <div>
          <label htmlFor="message">Mensaje</label>
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <small>{errors.message}</small>}
        </div>
        <button type="submit" className="btn">Enviar</button>
      </form>
    </section>
  )
}