import React, { useState, useRef } from "react";
import axios from "axios";
const AddProject = () => {
  const handleOptionChange = (event) => {
    setProject({ ...project, frontendMentor: event.target.value });
  };
  const [project, setProject] = useState({
    title: "",
    desc: "",
    image: "",
    link: "",
    frontendMentor: null,
  });
  const [adding, setAdding] = useState(false)
  const reset = () => {
    setProject({
      title: "",
      desc: "",
      image: "",
      link: "",
      frontendMentor: null,
    });
  };
  const titleref = useRef(null);
  const descref = useRef(null);
  const imgref = useRef(null);
  const linkref = useRef(null);
  const yesRef = useRef(null);
  const noRef = useRef(null);

  const divStyle = "flex gap-9 items-center";
  const inputStyle = "border-2 focus:outline-none px-2 py-1 rounded-md w-1/2";
  const handleSubmit = () => {
    setAdding(true)
    console.log(project);
    const result = axios
      .post(
        "https://portfolio-admin-server.onrender.com/api/project/add",
        project
      )
      .then(() => {
        setAdding(false)
        alert("Project Added Successfully");
        titleref.current.value = "";
        descref.current.value = "";
        imgref.current.value = "";
        linkref.current.value = "";
        if (yesRef.current) yesRef.current.checked = false;
        if (noRef.current) noRef.current.checked = false;
        
      })
      .catch(() => {
        alert("Failed");
      });
  };
  return (
    <div className="flex items-center justify-center h-[90vh] flex-col bg-purple-300  ">
      <div className=" w-1/2 border-2 px-5 py-9 rounded-lg bg-white/20">
        <h1 className="font-bold text-3xl mb-9 text-center">Add Project</h1>

        <form className="flex flex-col gap-6">
          <div className={divStyle}>
            <label htmlFor="" className="w-1/4 font-semibold text-lg">
              Project title
            </label>
            <input
              ref={titleref}
              type="text"
              className={inputStyle}
              onChange={(event) => {
                setProject({ ...project, title: event.target.value });
              }}
            />
          </div>
          <div className={divStyle}>
            <label htmlFor="" className="w-1/4 font-semibold text-lg">
              Project description
            </label>
            <textarea
              ref={descref}
              type="text"
              rows={5}
              className={`${inputStyle}`}
              onChange={(event) => {
                setProject({ ...project, desc: event.target.value });
              }}
            />
          </div>
          <div className={divStyle}>
            <label htmlFor="" className="w-1/4 font-semibold text-lg">
              Project image
            </label>
            <input
              ref={imgref}
              type="text"
              className={inputStyle}
              onChange={(event) => {
                setProject({ ...project, image: event.target.value });
              }}
            />
          </div>
          <div className={divStyle}>
            <label htmlFor="" className="w-1/4 font-semibold text-lg">
              Project Live Link
            </label>
            <input
              ref={linkref}
              type="text"
              className={inputStyle}
              onChange={(event) => {
                setProject({ ...project, link: event.target.value });
              }}
            />
          </div>
          <div className="flex gap-9">
            <label className="w-1/4 font-semibold text-lg">
              Frontend Mentor
            </label>
            <label className="flex gap-2">
              <input
                type="radio"
                value="yes"
                ref={yesRef}
                checked={project.frontendMentor === "yes"}
                onChange={handleOptionChange}
              />
              <span>Yes</span>
            </label>
            <label className="flex gap-2">
              <input
                type="radio"
                value="no"
                ref={noRef}
                checked={project.frontendMentor === "no"}
                onChange={handleOptionChange}
              />
              <span>No</span>
            </label>
          </div>
          <div className="flex gap-9 justify-center">
            {!adding && (
              <button
                className="bg-slate-500 px-4 py-2 rounded-md text-white"
                type="button"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Add
              </button>
            )}
            {adding && (
              <div className="bg-slate-500 px-4 py-2 rounded-md text-white">
                Adding Project!!
              </div>
            )}
            <button
              className="bg-slate-500 px-4 py-2 rounded-md text-white"
              onClick={() => {
                reset();
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
