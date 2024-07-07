import logo from '/Images/logo.png'
import image from '/Images/image.png'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Login() {
    return (
        <>
            <div className="container-fluid">
                <div className="box">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="row margin">
                                <div className="logo">
                                    <img src={logo} alt="Logo" />
                                </div>
                                <div className="row d-flex justify-content-center align-items-center ">
                                    <label className='d-flex justify-content-center'><strong>Log into your account</strong></label>
                                </div>
                                <form>
                                    <label className="py-2">Enter Email</label>
                                    <input
                                        className="form-control py-2"
                                        type="text"
                                        placeholder="abc@gmail.com"
                                    />
                                    <label className="py-3">Enter Password</label>
                                    <input
                                        className="form-control py-2 "
                                        type="password"
                                        placeholder="**************"
                                    />
                                    <div className='d-flex justify-content-end mt-3'>
                                        <a href='#'>Forgot password?</a>
                                    </div>
                                    <div className='py-3'>
                                        <input className='button rounded'
                                            type="reset"
                                            value="Login"
                                        />
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <p>Don't have any account</p>
                                    </div>
                                    <div className=''>
                                        <NavLink to={'/signup'} className='signup rounded'>Signup now</NavLink>
                                        {/* <button className='signup rounded' >Signup now</button> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-8 back logo bg">
                            <img className='image ' src={image} alt='Image' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}