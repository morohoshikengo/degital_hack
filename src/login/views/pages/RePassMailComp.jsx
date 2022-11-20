import React from 'react'
import Button from "../components/Button";
import TitleText from "../components/TitleText";
import UlForm from "../components/UlForm";
import  { Form, FormGroup } from "../components/Form";
import { Link } from "react-router-dom";

// パスワード再設定用のメール送信完了画面
function RePassMailComp() {
  return (
    <Form>
    <FormGroup>
        <TitleText title = "メール送信完了"/>
        <p>パスワード再設定用のメールを送信しました。 <br></br>
          記載された内容に従い、パスワード再設定を行ってください。</p>
        <Link to={`/RePassMail`}><Button title = "トップページへ"></Button></Link>
        <div>
        <Link to={`/`}>ログインはこちら</Link>
        </div>
        </FormGroup>
        </Form>
  )
}

export default RePassMailComp