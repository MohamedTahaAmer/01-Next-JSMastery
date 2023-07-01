"use client";
import { useState } from "react";

export default function MyForm() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform your form submission logic here
    // ...

    // Reset the form fields
    event.target.reset();
    setFormData({
      sd: " ...",
    });
  };

  const handleChange = (event) => {
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields */}
      <input
        type="text"
        name="field1"
        value={formData.field1}
        onChange={handleChange}
      />
      <input
        type="text"
        name="field2"
        value={formData.field2}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
