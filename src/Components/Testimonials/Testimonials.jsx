import React from 'react'
import  { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideFor = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBac = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };



    return (
        <div className='testimonials'>
            <img src={next_icon} alt='' className='next-btn' onClick={slideFor} />
            <img src={back_icon} alt='' className='back-btn' onClick={slideBac} />
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h5>Lisa</h5>
                                    <span>CEO, Company</span>
                                </div>
                            </div>
                            <p>In the heart of these contrasting landscapes, the lives of Veridian's urbanites and Eldora's villagers were interconnected by the threads of modernity and tradition. As the city thrived on innovation, the village embraced the time-honored customs that had withstood the test of time.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user2} alt="" />
                                <div>
                                    <h5>Kevin</h5>
                                    <span>CEO, Company</span>
                                </div>
                            </div>
                            <p>In the heart of these contrasting landscapes, the lives of Veridian's urbanites and Eldora's villagers were interconnected by the threads of modernity and tradition. As the city thrived on innovation, the village embraced the time-honored customs that had withstood the test of time.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user3} alt="" />
                                <div>
                                    <h5>katherine</h5>
                                    <span>CEO, Company</span>
                                </div>
                            </div>
                            <p>In the heart of these contrasting landscapes, the lives of Veridian's urbanites and Eldora's villagers were interconnected by the threads of modernity and tradition. As the city thrived on innovation, the village embraced the time-honored customs that had withstood the test of time.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user4} alt="" />
                                <div>
                                    <h5>Joe</h5>
                                    <span>CEO, Company</span>
                                </div>
                            </div>
                            <p>In the heart of these contrasting landscapes, the lives of Veridian's urbanites and Eldora's villagers were interconnected by the threads of modernity and tradition. As the city thrived on innovation, the village embraced the time-honored customs that had withstood the test of time.</p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )

}
export default Testimonials
