import Link from 'next/link';
import './Skills.css';

const Skills = () => {
    return (
        //  skills section start 
        <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">My skills</h2>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text">My Skills and Self Learnings</div>
                        <p>I have acquired knowledge of Web Development through constantly updating myself with new and
                            improved ways of doing things.
                            <br />
                            I have knowledge of MySQL and experience in handling databases through MongoDB.
                        </p>
                        <Link href="https://www.linkedin.com/in/utkarshdwivedi742/" className='linkedIn' target='_blank'>Go to my LinkedIn</Link>
                    </div>
                    <div className="column right">
                        <div className="bars">
                            <div className="info">
                                <span>Java</span>
                                <span>80%</span>
                            </div>
                            <div className="line html"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Designing</span>
                                <span>60%</span>
                            </div>
                            <div className="line css"></div>
                        </div>
                        {/* <div className="bars">
                            <div className="info">
                                <span>Development</span>
                                <span>70%</span>
                            </div>
                            <div className="line js"></div>
                        </div> */}
                        <div className="bars">
                            <div className="info">
                                <span>React</span>
                                <span>80%</span>
                            </div>
                            <div className="line html"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Next</span>
                                <span>70%</span>
                            </div>
                            <div className="line mysql"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>React Native</span>
                                <span>70%</span>
                            </div>
                            <div className="line mysql"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Coding</span>
                                <span>70%</span>
                            </div>
                            <div className="line mysql"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
