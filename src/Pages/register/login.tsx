import './login.css';
import "./error.css";
import { eye } from "react-icons-kit/feather/eye";
import { Link } from 'react-router-dom';
import { Icon } from "react-icons-kit";
import { toast } from 'react-toastify';
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { useFormik } from 'formik';
import { loginSchema } from '../../schemas';
import { Input, Logo } from "../../components/asset";
import { useState, FC } from 'react';
import { GoogleBtn, SignBtn } from '../../components/asset';

const Login: FC = () => {

    const [type, setType] = useState<string>("password");
    const [icon, setIcon] = useState<any>(eyeOff);

    const handleToggle = () => {
        if (type === "password") {
            setIcon(eye);
            setType("text");
        } else {
            setIcon(eyeOff);
            setType("password");
        }
    };

    const handleSaveAuth = (email: string, ps: string) => {
        //save token id and first name to storage
        localStorage.setItem("fb/em/", JSON.stringify(email))
        localStorage.setItem("fb/ps/", JSON.stringify(ps))

        // get token and id from storage
        const authname = localStorage.getItem("fb/em/");
        const ID = localStorage.getItem("fb/ps/");

        // navigate if auth token and id is not empty
        const redirect = () => {
            if (authname && ID !== "") {
                window.location.reload()
            }
        }
        setTimeout(redirect, 2000)
        return;
    };

    const checkStorage = () => {
        const ln = localStorage.getItem("fb/fn/");
        const fn = localStorage.getItem("fb/ln/");
        if (fn && ln !== null || undefined) {
            return true
        } else return false
    }

    const onSubmit = (values: any, actions: any) => {

        if (values !== "{}" && checkStorage() === true) {
            toast.success("Login  Succesful", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            const email = values.email;
            const password = values.password;
            handleSaveAuth(email, password);
            actions.resetForm();
        }
        else if (checkStorage() === false) {
            toast.error("Account Not found or Invalid login details. Please Create a new account or make sure you input your password correctly", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            actions.resetForm();
        }
    }

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit
    });

    return (
        <section className="login">
            <Logo />
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label style={{ marginBottom: ".7rem", display: "inline-block" }} htmlFor="email">Email Address</label><br />
                <Input type='email' name='email' placeholder='hello@example.com' className={errors.email && touched.email ? "input-error" : ""} onChange={handleChange} onBlur={handleBlur} value={values.email} id="email" />
                {errors.email && touched.email && <p className="error">{errors.email}</p>}

                <div className='password_label'>
                    <label htmlFor="password">Password</label>
                    <Link to='/forgotpassword'>Forgot Password?</Link>
                </div>

                <div className='password'>
                    <Input name='password' value={values.password} onBlur={handleBlur} onChange={handleChange} id="password" className={errors.password && touched.password ? "input-error" : ""} type={type} placeholder="Password" />
                    <span onClick={handleToggle}>
                        <Icon icon={icon} size={18} />
                    </span>
                </div>
                {errors.password && touched.password && <p className="error">{errors.password}</p>}

                <label htmlFor="checked">
                    <input type="checkbox" name="" id="" />
                    <span className="checkmark"></span>
                    Keep me signed in
                </label>

                <SignBtn disabled={isSubmitting} content={isSubmitting ? "Logging in..." : "Login"} />
            </form>
            <p><span></span><small>or sign up with</small><span></span></p>
            <GoogleBtn content='Continue with Google' />
            <Link to='/signup'>Create an account</Link>
        </section>
    )
}

export default Login;