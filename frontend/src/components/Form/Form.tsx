import { useForm } from "./useForm";

const Form = () => {
  const {
    handleSubmit,
    subject,
    setSubject,
    courseNumber,
    setCourseNumber,
    description,
    setDescription,
  } = useForm();

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Novo Curso</h2>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Course Number (e.g., 033)"
        value={courseNumber}
        onChange={(e) => setCourseNumber(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Adicionar Curso</button>
    </form>
  );
};

export default Form;
