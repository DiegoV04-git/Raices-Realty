import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/ContactForm.scss";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";


const ContactForm = ({ isOwnerForm = false }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ''
  });

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      user_phone: form.current.user_phone.value,
      message: form.current.message.value,
      ...(isOwnerForm && {
        property_type: form.current.property_type.value,
        operation_type: form.current.operation_type.value,
      })
    };

    try {
      // 1. Enviar email al cliente
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CLIENT,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      // 2. Enviar email al propietario
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_OWNER,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      setSubmitStatus({
        success: true,
        message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
      });
      form.current.reset();
    } catch (error) {
      console.error('Error enviando emails:', error);
      setSubmitStatus({
        success: false,
        message: 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente más tarde.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form">
      {submitStatus.message && (
          <div className={`submit-message ${submitStatus.success ? 'success' : 'error'}`}>
            {submitStatus.success ? (
              <>
                <FaCheckCircle className="status-icon success-icon" />
                <span>{submitStatus.message}</span>
              </>
            ) : (
              <>
                <FaTimesCircle className="status-icon error-icon" />
                <span>{submitStatus.message}</span>
              </>
            )}
          </div>
        )}
      
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Nombre Completo</label>
          <input 
            type="text" 
            id="name"
            name="user_name" 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input 
            type="email" 
            id="email"
            name="user_email" 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input 
            type="tel" 
            id="phone"
            name="user_phone"
          />
        </div>

        {isOwnerForm && (
          <>
            <div className="form-group">
              <label htmlFor="property-type">Tipo de Propiedad</label>
              <select id="property-type" name="property_type" required>
                <option value="">Seleccionar...</option>
                <option value="Casa">Casa</option>
                <option value="Departamento">Departamento</option>
                <option value="Oficina">Oficina</option>
                <option value="Terreno">Terreno</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="operation-type">Operación Deseada</label>
              <select id="operation-type" name="operation_type" required>
                <option value="">Seleccionar...</option>
                <option value="Venta">Venta</option>
                <option value="Renta">Renta</option>
                <option value="Ambas">Venta y Renta</option>
              </select>
            </div>
          </>
        )}
        
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea 
            id="message"
            name="message"
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <i className="fas fa-spinner fa-spin"></i> Enviando...
            </>
          ) : (
            'Enviar Mensaje'
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
