import { Link } from "react-router-dom";
import Button from "../components/Button";
import TitleText from "../components/TitleText";
import UlForm from "../components/UlForm";
import  { Form, FormGroup } from "../components/Form";


// ログイン画面
const Login = () => {
  const OnClick = () =>{
    console.log("hohoho")
  }
  return (
    <>
    <Form>
    <FormGroup>
        <TitleText title = "ログイン"/>
        <UlForm form = "メールアドレス"/>
        <UlForm form = "パスワード"/>
        {/* ログイン処理はのちに追加予定 */}
        <Link to={`/Task`}><div><Button title = "ログイン"></Button></div></Link>
        <label className="check_lb">
          <input type="checkbox" />ログイン状態を保持する
          </label>
        <div>
        パスワード忘れた方は<Link to={`/RePassWord`}>こちら</Link>
        </div>
        </FormGroup>
        </Form>
    </>
  );
};

export default Login;