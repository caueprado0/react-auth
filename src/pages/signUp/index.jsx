import React from "react";
import SignContent from "src/components/signContent";
import SignImage from "src/components/signImage";
import SignForm from "src/components/signForm";
import signUpFigure from "src/styles/assets/signup-image.jpeg";
import SignFormGroup from "src/components/signFormGroup";
import SignCheckbox from "src/components/signCheckbox";

export default function signUp() {
  return (
    <SignContent>
      <div className="container p-0">
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <SignForm title="Cadastra-se">
              <SignFormGroup
                id="name"
                autoComplete="on"
                label={{
                  content: "person",
                }}
              >
                Seu nome
              </SignFormGroup>
              <SignFormGroup
                id="email"
                label={{
                  content: "email",
                }}
                autoComplete="new-email"
              >
                Seu e-mail
              </SignFormGroup>
              <SignFormGroup
                id="pass"
                type="password"
                autoComplete="new-password"
                label={{
                  content: "lock",
                }}
              >
                Senha
              </SignFormGroup>
              <SignFormGroup
                id="re_pass"
                type="password"
                label={{
                  outlined: true,
                  content: "lock",
                }}
              >
                Repita sua Senha
              </SignFormGroup>
              <SignCheckbox id="agree-term">
                Eu concordo com todos os Termos de Serviço
              </SignCheckbox>
            </SignForm>
          </div>
          <div className="col-lg-6 col-md-12 p-0 mt-4 mt-lg-0">
            <SignImage
              image={{ src: signUpFigure, alt: "sign-up" }}
              link={{ to: "/sign-in", text: "Eu já possuo cadastro" }}
            />
          </div>
        </div>
      </div>
    </SignContent>
  );
}
