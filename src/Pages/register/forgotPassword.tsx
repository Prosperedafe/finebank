import './forgotpassword.css'
import { Link } from 'react-router-dom'
import { Input, Logo, SignBtn } from "../../components/asset"

const ForgotPassword = () => {
    return (
        <section className="forgotpassword">
            <div>
                <Logo />
                <h2>Forgot Password?</h2>
                <p>Enter your email address to get the password reset link.</p>
                <form>
                    <label htmlFor="email">Email Address</label>
                    <Input name='' value='email' onBlur='' onChange='' id="" className='' type='email' placeholder="hello@example.com" />
                    <SignBtn content='Password Reset' />
                </form>
                <Link to='/login'>Back to login</Link>
            </div>
        </section>
    )
}
export default ForgotPassword