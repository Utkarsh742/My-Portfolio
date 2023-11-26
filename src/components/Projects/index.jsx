"use client";
import Link from 'next/link';
import './Projects.css';
import { useRouter } from 'next/navigation';

const Projects = () => {
    const router = useRouter();
    return (
        // <!-- projects section start -->
        <section className="projects" id="projects">
            <div className="max-width">
                <h2 className="title">My Projects</h2>
                <div className="carousel">
                    <Link className="card" href="https://www.codingminutes.com/" target='_blank'>
                        <div className="box">
                            <img src="https://media.licdn.com/dms/image/C4E0BAQEAQl3u0ZORzA/company-logo_200_200/0/1621488745232?e=2147483647&v=beta&t=99SVkg39359nvxemcpRGwAGHTaHBQbMY2XJkXt3PllA" alt="" />
                            <div className="text">Coding Minutes</div>
                            <p>
                                I, along with my co-worker developed the main website of Coding Minutes, an Edtech startup.
                                <br />
                            </p>
                        </div>
                    </Link>
                    <Link className="card" href="https://noobarmy.org/vulncon/" target='_blank'>
                        <div className="box">
                            <img style={{objectFit: "fill"}} src="/assets/vulncon.png" alt="" />
                            <div className="text">Vulncon 2021</div>
                            <p>
                                I, along with my co-workers developed the website of Vulncon 2021, a Cybersecurity Community.
                                <br />
                            </p>
                        </div>
                    </Link>
                    <Link className="card" href="https://admin-dashboard.utkarshdwivedi.in/" target='_blank'>
                        <div className="box">
                            <img style={{objectFit: "fill"}} src="https://www.upwork.com/catalog-images-resized/adb1e828777f219d76dfcb4d8ab29358/thumbnail-medium" alt="" />
                            <div className="text">Admin Dashboard</div>
                            <p>
                                Admin DashPro is a comprehensive dashboard that provides key financial metrics, sales, revenue, traffic and team details.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
