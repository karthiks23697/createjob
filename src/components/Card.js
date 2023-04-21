
import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Card=()=>

{
    const [responseData, setResponseData] = useState([]);

    const getDatafromMock = (event) => {
        event.preventDefault();
        axios.get('https://643df81cc72fda4a0beaf4ea.mockapi.io/create-job', {
          
        }).then(response => {
          setResponseData(response.data)
       })
    };
    const deleteDataMock = (event,data) => {
            event.preventDefault();
            axios.delete(`https://643df81cc72fda4a0beaf4ea.mockapi.io/create-job/${data.id}`, {
            
            }).then(response => {
            window.location.reload(true)
        })
    };
return (
	<div className="container my-12 mx-auto px-6 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-6">
					{responseData.map((data, i)=> { 
            return <div key={i} className="my-1 px-1 w-full md:w-1/2 lg:my-6 lg:px-6 lg:w-1/2">
                  <article className="overflow-hidden rounded-lg border-solid border-2 border-black-500 p-2 px-6 py-4">
                    <div className="flex ...">
                      <div className="flex-none ... w-auto">
                      <img className="pr-4 rounded w-auto" src="https://imgtr.ee/images/2023/04/21/0ue11.png" alt="imag" />
                      </div>
                      <div className="flex-auto w-64 ...">
                      <img className="pr-4 rounded w-10 float-right" src="https://www.freeiconspng.com/thumbs/edit-icon-png/edit-editor-pen-pencil-write-icon--4.png" alt="imag" />
                      <img className="pr-4 rounded w-11 float-right" src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png" alt="imag" onClick={e => deleteDataMock(e, data)} />
                      <h4 className="text-lg no-underline hover:underline text-black">{data.title}</h4>
                      <h6>{data.companyName}</h6>
                      <p className="text-slate-500">{data.location} ({data.remoteType})</p>
                      <h6 className="mt-2">Part-Time (9.00 am- 5.00 pm IST)</h6>
                      <h6>Experience ({data.experienceMin}-{data.experienceMax} years)</h6>
                      <h6>INR (£) {data.salaryMin} - {data.salaryMax} / Month</h6>
                      <h6 className="mb-3">{data.totalEmployee} employees</h6>
                      <div className="flex ">
                      <button className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white mr-2"> Apply Now</button>
                        <button className="rounded bg-white-500 border-solid border-2 border-black-500 hover:bg-white-700 py-2 px-4 text-blue"> External Apply</button>
                      </div>
                      </div>
                    </div>
                  </article>
              </div>
          })}
          </div>
          <button onClick={getDatafromMock}
            className="content-end block w-auto rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Card
          </button>
      </div>
	);
}


export default Card;
