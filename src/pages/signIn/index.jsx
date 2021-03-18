import React from "react";
import SignContent from "src/components/signContent";
import SignImage from "src/components/signImage";
import SignForm from "src/components/signForm";
import signInFigure from "src/styles/assets/signin-image.jpeg";
import SignFormGroup from "src/components/signFormGroup";

export default function signIn() {
  return (
    <SignContent>
      <div className="container p-0">
        <div className="row m-0 flex-lg-row-reverse">
          <div className="col-lg-6 col-md-12 p-0">
            <SignForm title="Entrar">
              <SignFormGroup
                id="username"
                label={{
                  content: "person",
                }}
              >
                Seu nome de usuário
              </SignFormGroup>
              <SignFormGroup
                id="password"
                type="password"
                label={{
                  content: "lock",
                }}
              >
                Sua senha
              </SignFormGroup>
              <SignFormGroup
                id="remember-me"
                invertedComponents={true}
                type="checkbox"
                label={{
                  value: "Lembre-me",
                }}
              />
            </SignForm>
          </div>
          <div className="col-lg-6 col-md-12 p-0 mt-4 mt-lg-0">
            <SignImage
              image={{ src: signInFigure, alt: "sign-in" }}
              link={{ to: "/sign-up", text: "Criar sua conta" }}
            />
          </div>
        </div>
      </div>
    </SignContent>
  );
}
