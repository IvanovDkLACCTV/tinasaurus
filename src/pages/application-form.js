import React from "react";
import Layout from "@theme/Layout";

export default function ApplicationForm() {
  return (
    <Layout>
      <form method="get">
        <h1>Оставьте заявку и наш менеджер с вами свяжется</h1>
        <div>
            <input name='name' type='input' id='input-name'></input>
            <input name='email' type='email' id='input-email'></input>
            <input name='submit' type='submit' id='input-submit'></input>
        </div>
      </form>
    </Layout>
  );
}

