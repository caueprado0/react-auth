import React from "react";
import SignContent from "src/components/signContent";
import SignImage from "src/components/signImage";
import SignForm from "src/components/signForm";
import signUpFigure from "src/styles/assets/signup-image.jpeg";
import SignFormGroup from "src/components/signFormGroup";

export default function signUp() {
  return (
    <SignContent>
      <div className="d-inline-block w-50">
        <SignForm title="Cadastra-se">
          <SignFormGroup
            id="username"
            label={{
              content: "person",
            }}
          >
            Username
          </SignFormGroup>
          <SignFormGroup
            id="password"
            type="password"
            label={{
              content: "lock",
            }}
          >
            Senha
          </SignFormGroup>
        </SignForm>
      </div>
      <div className="d-inline-block w-50">
        <SignImage
          image={{ src: signUpFigure, alt: "sign-up" }}
          link={{ to: "/sign-in", text: "Eu já possuo cadastro" }}
        />
      </div>
    </SignContent>
  );
}
