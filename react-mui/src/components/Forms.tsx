import { Button, TextField } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;
const SimpleForm = (): JSX.Element => {
  const { handleSubmit, control } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function handleLogin(data: FormData) {
    alert(JSON.stringify(data));
  }
  return (
    <>
      <div
        style={{
          width: "300px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          
          
          
        }}
      >
        <div>
          <h1>Simple Form</h1>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <Controller
                render={({
                  field: { onChange, value },
                  fieldState: { error, invalid },
                }) => (
                  <TextField
                    label="Username"
                    size="small"
                    onChange={onChange}
                    value={value}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
                control={control}
                name="username"
              />

              <Controller
                render={({
                  field: { onChange, value },
                  fieldState: { error, invalid },
                }) => (
                  <TextField
                    label="Password"
                    size="small"
                    type="password"
                    onChange={onChange}
                    value={value}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
                control={control}
                name="password"
              />

              <Button variant="contained" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

function TestForm(): JSX.Element {
  return <div></div>;
}

export { SimpleForm, TestForm };
