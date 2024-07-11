import logo from '/Images/logo.png'
import image from '/Images/image.png'
import { NavLink } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Yup from 'yup'
import { useFormik } from 'formik'

export const Login = () => {
    // Formik for validation
    const initialValues = {
        email: '',
        password: '',
    }
    //Login Schema
    const loginschema = Yup.object({
        email: Yup.string().min(2).required("Please enter your email "),
        password: Yup.string().min(6).required("Please enter password"),
    });
    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: loginschema,
        onSubmit: (values) => {
            console.log(values)
        }
    })


    return (
        <>
            <div className="container-fluid">
                <div className="box">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-5 ">
                            <div className="row margin">
                                <div className="logo">
                                    <img src={logo} alt="Logo" />
                                </div>
                                <div className="row d-flex justify-content-center align-items-center ">
                                    <label className='d-flex justify-content-center'><strong>Log into your account</strong></label>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <label className="py-2">Enter Email
                                        <input
                                            className="form-control form-control-lg bg-light round required"
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="abc@gmail.com"
                                            // value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            size={60}
                                        />
                                    </label>
                                    <label className="text-danger">{errors.email && <p>{errors.email}</p>}</label>
                                    <label className="py-3">Enter Password
                                        <input
                                            id='password'
                                            className="form-control form-control-lg bg-light round required"
                                            type="password"
                                            placeholder="**************"
                                            // value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            size={60}
                                        />
                                    </label>
                                    <label className="text-danger">{errors.password && <p>{errors.password}</p>}</label>
                                    <div className='d-flex justify-content-end mt-3'>
                                        <a href='#'>Forgot password?</a>
                                    </div>
                                    <div className='py-3'>
                                        <input
                                            className='button rounded'
                                            type="reset"
                                            value="Login"
                                        />
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <p>Don't have any account</p>
                                    </div>
                                    <div className=''>
                                        <NavLink to={'/signup'} className='signup rounded mb-3'>Signup now</NavLink>
                                        {/* <button className='signup rounded' >Signup now</button> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-7 back logo bg d-none d-md-block">
                            <img className='image ' src={image} alt='Image' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
