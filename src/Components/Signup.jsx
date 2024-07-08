import logo from '/Images/logo.png'
import image from '/Images/image.png'
import { NavLink } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import * as Yup from 'yup'
export default function Singup() {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        cpassword: '',
    }
    //Signup Schema
    const signupschema = Yup.object({
        name: Yup.string().min(2).required("Please enter your name"),
        email: Yup.string().min(2).required("Please enter your email"),
        password: Yup.string().min(6).required("Please enter your password"),
    })
    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: signupschema,
        onSubmit: (values) => {
            console.log(values)
        }
    })
    return (
        <>
            <div className="container-fluid">
                <div className="box">
                    <div className="row">
                        <div className=" col-xs-12 col-sm-12 col-md-5 col-lg-4">
                            <div className="row margin">
                                <div className="logo">
                                    <img src={logo} alt="Logo" />
                                </div>
                                <div className="row d-flex justify-content-center align-items-center ">
                                    <label className='d-flex justify-content-center'><strong>Sign in to your account</strong></label>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <label className="py-2">Enter Name
                                        <input
                                            className="form-control py-2"
                                            type="text"
                                            placeholder="Shruti Sharma"
                                            id="name"
                                            name="name"
                                            // value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </label>
                                    <label className="text-danger">{errors.name && <p>{errors.name}</p>}</label>
                                    <label className="py-2">Enter Email
                                        <input
                                            className="form-control py-2"
                                            id="email"
                                            name="email"
                                            type="email"
                                            // value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="abc@gmail.com"
                                        />
                                    </label>
                                    <label className="text-danger">{errors.email && <p>{errors.email}</p>}</label>
                                    <label className="py-3">Enter Password
                                        <input
                                            className="form-control py-2 "
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="**************"
                                        />
                                    </label>
                                    <label className="text-danger">{errors.password && <p>{errors.password}</p>}</label>
                                    <div className='d-flex justify-content-end mt-3'>
                                        <a href='#'>Forgot password?</a>
                                    </div>
                                    <div className='py-3'>
                                        <input className='button rounded'
                                            type="reset"
                                            value="Signup"
                                        />
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <p>Already have an account?</p>
                                    </div>
                                    <div className=''>
                                        <NavLink to={'/'} className='signup rounded mb-3'>Login</NavLink>
                                        {/* <button className='signup rounded' >Signup now</button> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 back logo bg d-none d-md-block">
                            <img className='image ' src={image} alt='Image' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}