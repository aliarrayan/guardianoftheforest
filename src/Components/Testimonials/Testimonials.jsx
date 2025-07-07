import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    const tx = useRef(0); // Gantilah dari let tx

    const slideForward = () => {
        if (tx.current > -50) {
            tx.current -= 25;
            slider.current.style.transform = `translateX(${tx.current}%)`;
        }
    };

    const slideBackward = () => {
        if (tx.current < 0) {
            tx.current += 25;
            slider.current.style.transform = `translateX(${tx.current}%)`;
        }
    };

    return (
        <div className='testimonials'>
            <img src={back_icon} alt="Back" className='nav-icon back-btn' onClick={slideBackward} />
            <img src={next_icon} alt="Next" className='nav-icon next-btn' onClick={slideForward} />
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ducimus quasi magnam? Praesentium eum sapiente dignissimos, similique minus inventore provident sed minima ratione nostrum consequatur assumenda maxime voluptas, deleniti eveniet.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Papoy</h3>
                                    <span>Egypt, MSR</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ducimus quasi magnam? Praesentium eum sapiente dignissimos, similique minus inventore provident sed minima ratione nostrum consequatur assumenda maxime voluptas, deleniti eveniet.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Anak Pajak</h3>
                                    <span>Pare-Pare, IDN</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ducimus quasi magnam? Praesentium eum sapiente dignissimos, similique minus inventore provident sed minima ratione nostrum consequatur assumenda maxime voluptas, deleniti eveniet.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ducimus quasi magnam? Praesentium eum sapiente dignissimos, similique minus inventore provident sed minima ratione nostrum consequatur assumenda maxime voluptas, deleniti eveniet.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
