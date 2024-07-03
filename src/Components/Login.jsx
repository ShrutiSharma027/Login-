import logo from '/Images/logo.png'
import image from '/Images/image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { NavLink } from 'react-router-dom'
export default function Login() {
    return (
        <>
            <div className="container-fluid box  ">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="row">
                            <div className="logo">
                                <img src={logo} alt="Logo" />
                            </div>
                            <div className="row d-flex justify-content-center align-items-center ">
                                <label className='d-flex justify-content-center'><strong>Log into your account</strong></label>
                            </div>
                            <div>
                                <label className="py-2">Enter Email</label>
                                <input
                                    className="form-control py-2"
                                    type="text"
                                    placeholder="abc@gmail.com"
                                />
                                   <FontAwesomeIcon icon="fa-solid fa-envelope" />
                                <label className="py-3">Enter Password</label>
                                <input
                                    className="form-control py-2 "
                                    type="password"
                                    placeholder="**************"
                                />
                            </div>
                            <div className='d-flex justify-content-end mt-3'>
                                <a href='#'>Forgot password?</a>
                            </div>
                            <div className='py-3'>
                                <button className='button rounded'>Login now</button>
                            </div>
                            <hr></hr>
                            <div className='d-flex justify-content-center'>
                                <p>OR</p>
                            </div>
                            <div className=''>
                                <button className='signup rounded'>Signup now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8 back ">
                        <img className='image logo' src={image} alt='Image' />
                    </div>
                </div>
            </div>
        </>
    )
}