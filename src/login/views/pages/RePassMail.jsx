import React from 'react'
import Button from "../components/Button";
import TitleText from "../components/TitleText";
import UlForm from "../components/UlForm";
import  { Form, FormGroup } from "../components/Form";
import { Link } from "react-router-dom";

// パスワード再設定用のメールを送信する
function RePassMail() {
  return (
    <Form>
    <FormGroup>
        <TitleText title = "パスワード再設定"/>
        <p>ご登録いただいたメールアドレスを入力してください。 <br></br>
          メールアドレス宛にパスワードの再設定のご案内のメールを送信いたします。</p>
        <UlForm form = "メールアドレス"/>
        <Link to={`/RePassMailComp`}><Button title = "送信する"></Button></Link>
        <div>
        <Link to={`/`}>ログインはこちら</Link>
        </div>
        </FormGroup>
        </Form>
  )
}

export default RePassMail