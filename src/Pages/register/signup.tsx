import './signup.css';
import "./error.css";
import { eye } from "react-icons-kit/feather/eye";
import { Link } from 'react-router-dom';
import { Icon } from "react-icons-kit";
// import { toast } from 'react-toastify';
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { useFormik } from 'formik';
import { basicSchema } from '../../schemas';
// import { useNavigate } from 'react-router-dom';
import { FC, useState } from 'react';
import { GoogleBtn, Input, Logo, SignBtn } from '../../components/asset';

const Signup: FC = () => {

    // const navigate = useNavigate()

    // const handleSaveAuth = (fn: string, ln: string, email: string, ps: string) => {
    //     //save token id and first name to storage
    //     localStorage.setItem("fb/fn/", JSON.stringify(fn));
    //     localStorage.setItem("fb/ln/", JSON.stringify(ln));
    //     localStorage.setItem("fb/em/", JSON.stringify(email))
    //     localStorage.setItem("fb/ps/", JSON.stringify(ps))

    //     // get token and id from storage
    //     const authname = localStorage.getItem("fb/fn/");
    //     const ID = localStorage.getItem("fb/ps/");

    //     // navigate if auth token and id is not empty
    //     if (authname && ID !== "") {
    //         navigate("/");
    //     }
    //     return;
    // };

    const onSubmit = () => {
        console.log('hello');
    }

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        validationSchema: basicSchema,
        onSubmit
    });

    onSubmit()

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

    return (
        <section className="signup">
            <Logo />
            <h2>Create an account</h2>
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">First Name</label>
                <Input className={errors.firstName && touched.firstName ? "input-error" : ""} type='text' name='firstName' placeholder='First name here' onChange={handleChange} onBlur={handleBlur} value={values.firstName} id="firstName" />
                {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}

                <label htmlFor="name">Last Name</label>
                <Input className={errors.lastName && touched.lastName ? "input-error" : ""} type='text' name='lastName' placeholder='Last name here' onChange={handleChange} onBlur={handleBlur} value={values.lastName} id="lastName" />
                {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}

                <label htmlFor="email">Email</label>
                <Input type='email' name='email' placeholder='hello@example.com' className={errors.email && touched.email ? "input-error" : ""} onChange={handleChange} onBlur={handleBlur} value={values.email} id="email" />
                {errors.email && touched.email && <p className="error">{errors.email}</p>}

                <label htmlFor="password">Password</label>
                <div className='password'>
                    <Input className={errors.password && touched.password ? "input-error" : ""} type={type} placeholder="Password" name='password' onChange={handleChange} onBlur={handleBlur} value={values.password} id="password" />
                    <span onClick={handleToggle}>
                        <Icon icon={icon} size={18} />
                    </span>
                </div>
                {errors.password && touched.password && <p className="error">{errors.password}</p>}

                <p className='terms'>By continuing, you agree to our <span>terms of service.</span></p>

                <SignBtn disabled={isSubmitting} content={isSubmitting ? 'Signing Up...' : "Sign Up"} />
                <p className='rule'><span></span><small>or sign up with</small><span></span></p>

                <GoogleBtn content='Continue with Google' />

            </form>
            <p className='account'>Already have an account? <Link to='/login'>Sign in here</Link></p>
        </section>
    )
}

export default Signup;