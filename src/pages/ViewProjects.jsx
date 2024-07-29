import React, { useState, useEffect } from "react";
import axios from "axios";
const ViewProjects = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    fetchProjects();
  }, []);
  const fetchProjects = () => {
    axios.get("http://localhost:3000/api/project/").then((res) => {
      setProject(res.data);
    });
  };
  const deleteProject = (projectId) => {
    axios
      .delete(`http://localhost:3000/api/project/${projectId}`)
      .then((res) => {
        alert(res.data.message);
        fetchProjects();
      });
  };
  const frontendmentor = projects.filter((project)=>{
    return project.frontendMentor
  })
  const normalProjects = projects.filter((project) => {
      return !project.frontendMentor;
    });
  return (
    <div className="bg-purple-300">
      <div className="flex flex-col gap-9 items-center  py-9">
        <h1 className="text-xl font-bold">Projects</h1>
        {normalProjects.map((project) => (
          <div className="border-2 w-1/2 px-4 py-5 flex rounded-md bg-white/20 ">
            <div className="w-full">
              <div className="flex gap-9">
                <h1 className="w-1/3 font-bold text-lg">Project title: </h1>
                <p className="w-1/2"> {project.title}</p>
              </div>
              <div className="flex gap-9">
                <h1 className="w-1/3 font-bold text-lg">
                  Project Description:{" "}
                </h1>
                <h1 className="w-1/2">{project.desc}</h1>
              </div>
              <div className="flex gap-9">
                <h1 className="w-1/3 font-bold text-lg">Project Image: </h1>
                <h1>{project.image}</h1>
              </div>
              <div className="flex gap-9">
                <h1 className="w-1/3 font-bold text-lg">Project Link: </h1>
                <h1>{project.link}</h1>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <button
                className="border-2 px-2 py-3 w-[100px] rounded-md"
                onClick={() => {
                  deleteProject(project._id);
                }}
              >
                Delete
              </button>
              <button className="border-2 px-2 py-3 w-[100px] rounded-md">
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-9 items-center  py-9">
        <h1 className="text-xl font-bold">Frontend Mentor</h1>
        {frontendmentor.map((project) => (
          <div className="border-2 w-1/2 px-4 py-5 flex rounded-md bg-white/20 ">
            <div className="w-full">
              <div className="flex gap-9">
                <h1 className="w-1/3 font-bold text-lg">Project title: </h1>
                <p className="w-1/2"> {project.title}</p>
              </div>
              <div className="flex gap-9">
                <h1 className="w-1/3 font-bold text-lg">
                  Project Description:{" "}
                </h1>
                <h1 className="w-1/2">{project.desc}</h1>
              </div>
              <div className="flex gap-9">
                <h1 className="w-1/3 font-bold text-lg">Project Image: </h1>
                <h1>{project.image}</h1>
              </div>
              <div className="flex gap-9">
                <h1 className="w-1/3 font-bold text-lg">Project Link: </h1>
                <h1>{project.link}</h1>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <button
                className="border-2 px-2 py-3 w-[100px] rounded-md"
                onClick={() => {
                  deleteProject(project._id);
                }}
              >
                Delete
              </button>
              <button className="border-2 px-2 py-3 w-[100px] rounded-md">
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProjects;
