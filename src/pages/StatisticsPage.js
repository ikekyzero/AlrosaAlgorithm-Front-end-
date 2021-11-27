import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useForm } from "react-hook-form";

function StatisticsPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <asdas></asdas>
    </Container>
  );
}

export default StatisticsPage;
