import React, { useReducer, useState, FormEvent } from "react";
import "./Contact.css";

// ------------------------------
// ✅ Type Definitions
// ------------------------------
type State = {
  name: string;
  email: string;
  message: string;
  errors: {
    name?: string;
    email?: string;
    message?: string;
  };
};

type Action =
  | { type: "UPDATE_FIELD"; field: keyof Omit<State, "errors">; value: string }
  | { type: "SET_ERRORS"; errors: State["errors"] }
  | { type: "RESET" };

// ------------------------------
// ✅ Initial State and Reducer
// ------------------------------
const initialState: State = {
  name: "",
  email: "",
  message: "",
  errors: {},
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

// ------------------------------
// ✅ Contact Component
// ------------------------------
const Contact: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submitted, setSubmitted] = useState(false);

  // 🔍 Validate form fields
  const validate = (): State["errors"] => {
    const errors: State["errors"] = {};
    if (!state.name.trim()) errors.name = "Name is required.";
    if (!state.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      errors.email = "Invalid email address.";
    }
    if (!state.message.trim()) errors.message = "Message is required.";
    return errors;
  };

  // 📨 Handle submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errors = validate();
    dispatch({ type: "SET_ERRORS", errors });

    if (Object.keys(errors).length === 0) {
      const mailtoLink = `mailto:shivam7.dev@gmail.com?subject=Message from ${
        state.name
      }&body=${encodeURIComponent(state.message)}%0D%0A%0D%0AEmail: ${
        state.email
      }`;
      window.location.href = mailtoLink;

      setSubmitted(true);
      dispatch({ type: "RESET" });
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="contact-page">
      <h2 className="contact-title">Get in Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "name",
                value: e.target.value,
              })
            }
            placeholder="Your name"
          />
          {state.errors.name && (
            <span className="error">{state.errors.name}</span>
          )}
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
            placeholder="Your email"
          />
          {state.errors.email && (
            <span className="error">{state.errors.email}</span>
          )}
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={state.message}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "message",
                value: e.target.value,
              })
            }
            placeholder="Your message"
          />
          {state.errors.message && (
            <span className="error">{state.errors.message}</span>
          )}
        </label>

        <button type="submit">Send</button>

        {submitted && (
          <p className="success-message">
            Thanks! Your message has been prepared in your mail app.
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
