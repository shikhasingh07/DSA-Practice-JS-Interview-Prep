
export default function App() {
  return (
    <form
      action="https://questions.greatfrontend.com/api/questions/contact-form"
      method="POST"
    >
      <label>Name</label>
      <input type="text" name="name" />

      <label>Email</label>
      <input type="email" name="email" />

      <label>Message</label>
      <textarea name="message"></textarea>

      <button type="submit">Send</button>
    </form>
  );
}
