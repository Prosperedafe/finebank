import { Input, Logo } from "../../components/asset"

export const ForgotPassword = () => {
    return (
        <section className="forgotpassword">
            <Logo />
            <h2>Forgot Password?</h2>
            <p>Enter your email address to get the password reset link.</p>
            <form>
                <label htmlFor="email">Email Address</label>
                <Input type='email' placeholder="hello@example.com" />
            </form>
        </section>
    )
}
