import React from 'react'
import Button from "../components/Button";
import TitleText from "../components/TitleText";
import UlForm from "../components/UlForm";
import  { Form, FormGroup } from "../components/Form";
import { Link } from "react-router-dom";

function RePassWord() {
  return (
    <Form>
    <FormGroup>
        <TitleText title = "パスワード再設定"/>
        <UlForm form = "現在のパスワード"/>
        <UlForm form = "新しいパスワード"/>
        <UlForm form = "新しいパスワード(確認)"/>
        <Link to={`/RePassMail`}><Button title = "設定する"></Button></Link>
        </FormGroup>
        </Form>
  )
}

export default RePassWord