import Project_prop from "./project_prop";
import {
  invoice,
  easymedi,
  braintumor,
  graphtheory
} from "../constants/Constant";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-3 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Project_prop
            title="Brain Tumor Classificaton from MRI scans"
            // para="Developed an AI and ML-driven tool for brain tumor identification, achieving a 95 percentage  accuracy rate and closing the healthcare gap to improve patient outcomes significantly.
            // "
            link="Working"
            img={braintumor}
            text="Python, Flask, Deep Learning Models, Machine Learning Models"
          />
          <Project_prop
            title="Invoice Management Application"
            // para="It is an application that distinguishes between customers and owners, providing specific privileges for data
            // modification"
            link="https://github.com/khushi-79/Smart-Invoice"
            img={invoice}
            text=".NET, MVC Architecture"
          />
          <Project_prop
            title="EASYMEDI PORTAL"
            // para="In SSIP Hackathon Azadi ka Amrut Mahotsav, made one portal for doctors to help them to manage database of patient with help of Health-card"
            link="https://github.com/khushi-79/Medical-data-sharing-for-planning"
            img={easymedi}
            text="DJango, SQLite, Python, Bootstrap"
            
          />
          <Project_prop
            title="GRAPH THEORY LEARNING MODULE            "
            // para="• This module helps to those who are not aware about graphs and its real life applications.It also have detailed explanation about various graphs
            // and things related to graph.
            // "
            link="https://github.com/khushi-79/Learning-Module-of-Graph-Theory"
            img={graphtheory}
            text="HTML, CSS, D3JS"
          />
        </div>
        <br></br>
        <a href="https://github.com/khushi-79"><h3 href="https://github.com/khushi-79" align="center" className="capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
               See More Projects On GitHub
              </h3></a>
      </div>
      
    </section>
  );
};
export default Projects;
