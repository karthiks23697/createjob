import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Steps=(props)=>{
  const {stepsData} = props;
  const [jobTitle, setJobTitle] = useState(stepsData?stepsData.title: '');
  const [companyName, setCompanyName] = useState(stepsData?stepsData.companyName: '');
  const [industry, setIndustry] = useState(stepsData?stepsData.industry: '');
  const [location, setLocation] = useState(stepsData?stepsData.location: '');
  const [remoteType, setRemoteType] = useState(stepsData?stepsData.remoteType: '');
  const [expMin, setExpMin] = useState(stepsData?stepsData.experienceMin: '');
  const [expMax, setExpMax] = useState(stepsData?stepsData.experienceMax: '');
  const [salMin, setSalMin] = useState(stepsData?stepsData.salaryMin: '');
  const [salMax, setSalMax] = useState(stepsData?stepsData.salaryMax: '');
  const [totalEmp, setTotalEmp] = useState(stepsData?stepsData.totalEmployee: '');
  const [radioValue, setRadioValue] = useState(stepsData?stepsData.applyType: '');
  const [headLine, setHeadLine] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://643df81cc72fda4a0beaf4ea.mockapi.io/create-job', {
      title: jobTitle,
      companyName: companyName,
      industry: industry,
      location: location,
      remoteType: remoteType,
      experienceMin: expMin,
      experienceMax: expMax,
      salaryMin: salMin,
      salaryMax: salMax,
      totalEmployee: totalEmp,
      applyType: radioValue
    })
  };
return (
    <form  onSubmit={handleSubmit} id="applicationform" name ="applicationform" className="mx-auto mt-5 max-w-xl sm:mt-5">
        {!headLine &&
            <div>
                <div className="mx-auto flex mb-5 max-w-2xl ">
                    <h3 className="text-left  grid text-1xl font-bold  text-gray-900 sm:text-xl my-1 px-1 w-full md:w-1/2  lg:w-1/2">Create a job</h3>
                    <h3 className="text-right  grid text-xl font-bold   text-gray-900 sm:text-xl  my-1 px-1 w-full md:w-1/2 lg:w-1/2">Step1</h3>
                </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
                <label htmlFor="jobtitle" className="block text-sm font-semibold leading-6 text-gray-900">
                Job title<span class="required">*</span>
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="jobtitle"
                    id="jobtitle"
                    value={jobTitle}
                    onChange={(event) =>
                    setJobTitle(event.target.value)
                    }
                    autoComplete="organization"
                    placeholder="ex:UX UI Designer"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                Company Name<span class="required">*</span>
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="company"
                    id="company"
                    value={companyName}
                    onChange={(event) =>
                    setCompanyName(event.target.value)
                    }
                    autoComplete="organization"
                    placeholder="ex:Google"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="industry" className="block text-sm font-semibold leading-6 text-gray-900">
                Industry<span class="required">*</span>
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="industry"
                    id="industry"
                    value={industry}
                    onChange={(event) =>
                    setIndustry(event.target.value)
                    }
                    autoComplete="organization"
                    placeholder="ex:Information Technology"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required
                />
                </div>
            </div>
            <div>
                <label htmlFor="location" className="block text-sm font-semibold leading-6 text-gray-900">
                Location
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="location"
                    id="location"
                    value={location}
                    onChange={(event) =>
                    setLocation(event.target.value)
                    }
                    autoComplete="given-name"
                    placeholder="ex:Chennai"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div>
                <label htmlFor="remotetype" className="block text-sm font-semibold leading-6 text-gray-900">
                Remote Type
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="remotetype"
                    id="remotetype"
                    value={remoteType}
                    onChange={(event) =>
                    setRemoteType(event.target.value)
                    }
                    autoComplete="family-name"
                    placeholder="ex:In-office"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            </div>
            <div className="mx-auto  mt-5 max-w-2xl ">
                <button onClick={() => setHeadLine(true)}
                    type="submit"
                    className="content-end block w-auto rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 float-right"
                >
                    Next
                </button>
            </div>
            </div>
        }
        {headLine &&
            <div>
                <div className="mx-auto flex max-w-2xl ">
                    <h3 className="text-left  grid text-1xl font-bold  text-gray-900 sm:text-xl my-1 px-1 w-full md:w-1/2  lg:w-1/2">Create a job</h3>
                    <h3 className="text-right  grid text-xl font-bold   text-gray-900 sm:text-xl  my-1 px-1 w-full md:w-1/2 lg:w-1/2">Step2</h3>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                <label htmlFor="experience" className="block text-sm font-semibold leading-6 text-gray-900">
                Experience
                </label>
                <div className="mt-2.5">
                    <input
                    type="text"
                    name="experience"
                    id="experience"
                    value={expMin}
                    onChange={(event) =>
                        setExpMin(event.target.value)
                    }
                    autoComplete="given-name"
                    placeholder="Minimum"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>
                <div>
                <label htmlFor="experienceMAx" className="block text-sm font-semibold leading-6 text-gray-900">
                    
                </label>
                <div className="mt-2.5 custom-margin-top">
                    <input
                    type="text"
                    name="experienceMAx"
                    id="experienceMAx"
                    value={expMax}
                    onChange={(event) =>
                        setExpMax(event.target.value)
                    }
                    autoComplete="family-name"
                    placeholder="Maximum"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>
                <div>
                <label htmlFor="salarymin" className="block text-sm font-semibold leading-6 text-gray-900">
                Salary
                </label>
                <div className="mt-2.5">
                    <input
                    type="text"
                    name="salarymin"
                    id="salarymin"
                    value={salMin}
                    onChange={(event) =>
                        setSalMin(event.target.value)
                    }
                    autoComplete="given-name"
                    placeholder="Minimum"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>
                <div>
                <label htmlFor="salarymax" className="block text-sm font-semibold leading-6 text-gray-900">
                    
                </label>
                <div className="mt-2.5 custom-margin-top">
                    <input
                    type="text"
                    name="salarymax"
                    id="salarymax"
                    value={salMax}
                    onChange={(event) =>
                        setSalMax(event.target.value)
                    }
                    autoComplete="family-name"
                    placeholder="Maximum"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>
                <div className="sm:col-span-2">
                <label htmlFor="Totalemp" className="block text-sm font-semibold leading-6 text-gray-900">
                Total employee
                </label>
                <div className="mt-2.5">
                    <input
                    type="text"
                    name="Totalemp"
                    id="Totalemp"
                    value={totalEmp}
                    onChange={(event) =>
                        setTotalEmp(event.target.value)
                    }
                    autoComplete="organization"
                    placeholder="ex:1000"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>
                <div class="sm:col-span-2">
                <label htmlFor="applytype" className="block text-sm font-semibold leading-6 text-gray-900">
                    Apply Type
                </label>
                </div>
                <div class="flex">
                    <div className=" items-center">
                        <input id="list-radio-license" type="radio" value="Quick Apply" onChange={(event) =>
                        setRadioValue(event.target.value)} name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quick Apply </label>
                    </div>
                    <div className=" items-center">
                        <input id="list-radio-id" type="radio" value="External Apply" onChange={(event) =>
                        setRadioValue(event.target.value)} name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">External Apply</label>
                    </div>
                </div>
            </div>
            <div className="mx-auto  mt-5 max-w-2xl ">
                <button
                    type="submit"
                    className="content-end block w-auto rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 float-right"
                >
                    Save
                </button>
            </div>
        </div>
          
        }
    </form>
    );
}
    export default Steps;