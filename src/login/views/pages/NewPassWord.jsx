import React from 'react'
import Button from "../components/Button";
import TitleText from "../components/TitleText";
import UlForm from "../components/UlForm";
import  { Form, FormGroup } from "../components/Form";
import { Link } from "react-router-dom";

// メールからのリンクでこの画面に飛ぶ
// パスワード再設定画面

function NewPassWord() {
  return (
    <Form>
    <FormGroup>
        <TitleText title = "パスワード再設定"/>
        <UlForm form = "新しいパスワード"/>
        <UlForm form = "新しいパスワード(確認)"/>
        <Link to={`/`}><Button title = "設定する"></Button></Link>
        </FormGroup>
        </Form>
  )
}

export default NewPassWord