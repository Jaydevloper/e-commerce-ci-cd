import loginImg from "assets/imgs/login.png";
import ButtonRed from "components/buttons/button-red";
import InputText from "components/fields/input-text";
import Container from "container";
import { Field } from "formik";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <img
          src={loginImg}
          alt="Sign Up illustration"
          className="w-full max-w-[650px] "
        />

        <div className="max-w-[400px] w-[100%] ">
          <h1 className="text-4xl font-semibold">Create an account</h1>
          <p className="text-base mt-6 mb-12">Enter your details below</p>
          <Container.Form url="" name="" fields={[]}>
            {() => {
              return (
                <div className="flex flex-col gap-4">
                  <Field
                    rootClassName={"max-w-none input-text__login"}
                    name="username"
                    component={InputText}
                    placeholder="Name"
                    required
                  />
                  <Field
                    rootClassName={"max-w-none input-text__login"}
                    name="password"
                    type={"password"}
                    component={InputText}
                    placeholder="Password"
                    required
                  />
                  <ButtonRed htmlType="submit">Log In</ButtonRed>
                </div>
              );
            }}
          </Container.Form>
          <div className="flex gap-4 items-center justify-center mt-8">
            <p className="text-base  ">I don't have account?</p>
            <Link className="underline" to={"/sign-up"}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
