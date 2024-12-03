import React from 'react';
// import 'index.css'
const Footer = () => {

    const handleform =e=>{
        e.preventDefault();
    }
    return (
        <div>
            <div className='min-h-[calc(100vh-510px)]'>

            </div>
            <footer className="footer footerBG text-amber-950 p-10">
                <nav>
                    <h4 className="footer-title font-bold ">Services</h4>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form onSubmit={handleform}>
                    <h6 className="text-2xl font-mono text-amber-900 font-bold">Connect with Us</h6>
                    <fieldset className="form-control w-80">
                        
                        <div className="flex flex-col items-start space-y-5">
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered border-amber-950 border-2
                                hover:border-amber-950 w-[350px]" />
                             <input
                                type="text"
                                placeholder="Email"
                                className="input border-amber-950 border-2
                                hover:border-amber-950 grow w-[350px]" input-bordered />
                             <input
                             
                                type="text"
                                placeholder="Message"
                                className="input  w-[350px] h-[130px]  border-amber-950 border-2
                                hover:border-amber-950" />

                            <button className="btn text-amber-950 hover:bg-amber-950 btn-outline hover:text-white">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;