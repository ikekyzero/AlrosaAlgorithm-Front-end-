import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useForm } from "react-hook-form";
import axios, { post } from "axios";

function HomePage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    /*const url = "http://127.0.0.1:8000/wer";
    const formData = { file: data.newfile[0], boxsize: data.boxsize };
    return get(url, formData).then((response) => console.log(response));*/
  };
  return (
    <div className="center-form">
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-100">
            <label className="form-label">Количество боксов</label>
            <Form.Group className="mb-3 boxsize-input">
              <Form.Control
                {...register("boxsize", { required: true })}
                type="number"
                name="boxsize"
                min="2"
                className="myform_number"
              />
            </Form.Group>
          </div>
          <Form.Label>Загрузите excel-файл или json-файл</Form.Label>
          <Form.Group className="mb-3 file-input">
            <Form.Control
              {...register("newfile", { required: true })}
              type="file"
              name="newfile"
              size="sm"
              className="myform_file"
            />
          </Form.Group>
          <Button variant="warning" type="submit">
            Начать сортировку
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default HomePage;
