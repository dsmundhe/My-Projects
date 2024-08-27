import React, { useState, useEffect } from "react";

const BuildResume = () => {
  const [formData, setFormData] = useState(() => {
    // Load data from localStorage or set default values
    const savedData = localStorage.getItem("resumeData");
    return savedData ? JSON.parse(savedData) : {
      name: "",
      title: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      summary: "",
      experience: [],
      education: [],
      projects: [],
      achievements: "",
      skills: "",
      profilePic: null,
    };
  });

  const [experienceInput, setExperienceInput] = useState("");
  const [educationInput, setEducationInput] = useState({ degree: "", startYear: "", endYear: "" });
  const [projectInput, setProjectInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Save data to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddExperience = () => {
    const updatedExperience = [...formData.experience, experienceInput];
    setFormData({
      ...formData,
      experience: updatedExperience,
    });
    setExperienceInput("");
  };

  const handleAddEducation = () => {
    const updatedEducation = [...formData.education, educationInput];
    setFormData({
      ...formData,
      education: updatedEducation,
    });
    setEducationInput({ degree: "", startYear: "", endYear: "" });
  };

  const handleAddProject = () => {
    const updatedProjects = [...formData.projects, projectInput];
    setFormData({
      ...formData,
      projects: updatedProjects,
    });
    setProjectInput("");
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          profilePic: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleDeleteResume = () => {
    localStorage.removeItem("resumeData");
    setFormData({
      name: "",
      title: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      summary: "",
      experience: [],
      education: [],
      projects: [],
      achievements: "",
      skills: "",
      profilePic: null,
    });
    setIsSubmitted(false);
  };

  return (
    <div className="bg-gray-100 text-gray-900 p-6 md:p-12 lg:p-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-800 text-white p-8 relative">
          <h1 className="text-4xl font-bold">Resume Builder</h1>
          <div className="absolute top-8 right-8">
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="hidden"
              id="profilePicInput"
            />
            <label htmlFor="profilePicInput">
              <div className="w-20 h-20 bg-gray-200 rounded-full cursor-pointer overflow-hidden">
                {formData.profilePic ? (
                  <img src={formData.profilePic} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <span className="flex justify-center items-center h-full text-gray-600">Upload</span>
                )}
              </div>
            </label>
          </div>
        </div>

        <div className="p-8">
          {!isSubmitted ? (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3">Enter Your Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded"
                  />
                  <input
                    type="text"
                    name="title"
                    placeholder="Job Title"
                    value={formData.title}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded"
                  />
                  <input
                    type="text"
                    name="linkedin"
                    placeholder="LinkedIn Profile"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded"
                  />
                  <input
                    type="text"
                    name="github"
                    placeholder="GitHub Profile"
                    value={formData.github}
                    onChange={handleChange}
                    className="border border-gray-300 p-3 rounded"
                  />
                </div>

                <textarea
                  name="summary"
                  placeholder="Summary"
                  value={formData.summary}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 rounded mt-4 w-full"
                  rows="4"
                ></textarea>

                <div className="mt-4">
                  <label className="block text-gray-700 font-bold mb-2">Experience</label>
                  <input
                    type="text"
                    value={experienceInput}
                    onChange={(e) => setExperienceInput(e.target.value)}
                    placeholder="Add experience"
                    className="border border-gray-300 p-3 rounded w-full"
                  />
                  <button
                    type="button"
                    onClick={handleAddExperience}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                  >
                    Add Experience
                  </button>
                </div>

                <div className="mt-4">
                  <label className="block text-gray-700 font-bold mb-2">Education</label>
                  <input
                    type="text"
                    name="degree"
                    value={educationInput.degree}
                    onChange={(e) =>
                      setEducationInput({ ...educationInput, degree: e.target.value })
                    }
                    placeholder="Degree"
                    className="border border-gray-300 p-3 rounded w-full"
                  />
                  <input
                    type="text"
                    name="startYear"
                    value={educationInput.startYear}
                    onChange={(e) =>
                      setEducationInput({ ...educationInput, startYear: e.target.value })
                    }
                    placeholder="Start Year"
                    className="border border-gray-300 p-3 rounded mt-2 w-full"
                  />
                  <input
                    type="text"
                    name="endYear"
                    value={educationInput.endYear}
                    onChange={(e) =>
                      setEducationInput({ ...educationInput, endYear: e.target.value })
                    }
                    placeholder="End Year"
                    className="border border-gray-300 p-3 rounded mt-2 w-full"
                  />
                  <button
                    type="button"
                    onClick={handleAddEducation}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                  >
                    Add Education
                  </button>
                </div>

                <div className="mt-4">
                  <label className="block text-gray-700 font-bold mb-2">Projects</label>
                  <input
                    type="text"
                    value={projectInput}
                    onChange={(e) => setProjectInput(e.target.value)}
                    placeholder="Add project"
                    className="border border-gray-300 p-3 rounded w-full"
                  />
                  <button
                    type="button"
                    onClick={handleAddProject}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                  >
                    Add Project
                  </button>
                </div>

                <textarea
                  name="achievements"
                  placeholder="Achievements"
                  value={formData.achievements}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 rounded mt-4 w-full"
                  rows="4"
                ></textarea>

                <textarea
                  name="skills"
                  placeholder="Skills (comma-separated)"
                  value={formData.skills}
                  onChange={handleChange}
                  className="border border-gray-300 p-3 rounded mt-4 w-full"
                  rows="2"
                ></textarea>

                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded mt-6"
                >
                  Submit
                </button>
              </form>
            </section>
          ) : (
            // Display the resume
            <section>
              <div className="bg-gray-800 text-white p-8 relative">
                {formData.profilePic && (
                  <div className="absolute top-8 right-8 w-24 h-24 bg-white rounded-full overflow-hidden">
                    <img
                      src={formData.profilePic}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <h1 className="text-4xl font-bold">{formData.name || "John Doe"}</h1>
                <p className="text-lg mt-2">{formData.title || "Full Stack Developer"}</p>
                <p className="text-md mt-1">
                  Email: {formData.email || "john.doe@example.com"} | Phone: {formData.phone || "+123 456 7890"}
                </p>
                <p className="text-md mt-1">
                  LinkedIn: {formData.linkedin || "linkedin.com/in/johndoe"} | GitHub: {formData.github || "github.com/johndoe"}
                </p>
              </div>
              <div className="p-8">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-3">Summary</h2>
                  <p className="text-md leading-relaxed">
                    {formData.summary ||
                      "Experienced full-stack developer with a passion for creating dynamic and responsive web applications. Skilled in modern front-end and back-end technologies."}
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-3">Experience</h2>
                  {formData.experience.length > 0 ? (
                    formData.experience.map((exp, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="text-xl font-semibold">{exp}</h3>
                      </div>
                    ))
                  ) : (
                    <p className="text-md text-gray-600">No experience added.</p>
                  )}
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-3">Education</h2>
                  {formData.education.length > 0 ? (
                    formData.education.map((edu, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <p className="text-sm text-gray-600">
                          {edu.startYear} - {edu.endYear}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-md text-gray-600">No education added.</p>
                  )}
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-3">Projects</h2>
                  {formData.projects.length > 0 ? (
                    formData.projects.map((project, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="text-xl font-semibold">{project}</h3>
                      </div>
                    ))
                  ) : (
                    <p className="text-md text-gray-600">No projects added.</p>
                  )}
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-3">Achievements</h2>
                  <p className="text-md text-gray-600">
                    {formData.achievements || "No achievements added."}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-3">Skills</h2>
                  <div className="flex flex-wrap">
                    {formData.skills
                      ? formData.skills.split(",").map((skill, index) => (
                          <span
                            key={index}
                            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mt-2"
                          >
                            {skill.trim()}
                          </span>
                        ))
                      : "No skills added."}
                  </div>
                </section>

                <button
                  onClick={handleDeleteResume}
                  className="bg-red-500 text-white px-4 py-2 rounded mt-6"
                >
                  Delete Resume
                </button>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuildResume;