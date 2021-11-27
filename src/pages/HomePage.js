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
      <Container className="mt-3">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-100">
            <div className="d-inline-block mr-4">
              <label className="form-label">Количество боксов: </label>
              <Form.Control
                {...register("boxsize", { required: true })}
                type="number"
                name="boxsize"
                min="2"
                className="myform_number ml-2 d-inline-block"
              />
            </div>
            <div className="d-inline-block mr-4">
              <Form.Label>Загрузите dataset: </Form.Label>
              <Form.Control
                {...register("newfile", { required: true })}
                type="file"
                name="newfile"
                size="sm"
                className="myform_file d-inline-block ml-2"
              />
            </div>
            <button type="submit" className="btn btn-purple">
              Начать сортировку
            </button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default HomePage;
