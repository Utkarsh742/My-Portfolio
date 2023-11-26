import './Interests.css'
import { FaPaintBrush,FaChartLine,FaCode } from "react-icons/fa";
const Interests = () => {
  return (
    //  interests section start 
    <section className="interests" id="interests">
        <div className="max-width">
            <h2 className="title">My interests</h2>
            <div className="serv-content">
                <div className="card">
                    <div className="box">
                        <FaPaintBrush className='interestIcons'/>
                        <div className="text">Web Designing</div>
                        <p>
                            I love designing websites and upgrading myself by learning new skills and implementing them.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                    <FaChartLine className='interestIcons'/>
                        <div className="text">Learning new Things</div>
                        <p>
                            I believe in constantly updating myself by learning something new with practical
                            Implementations.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                    <FaCode className='interestIcons'/>
                        <div className="text">Competetive Coding</div>
                        <p>
                            In my free time I like to do some problem solving on various Competetive Coding platforms.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Interests
