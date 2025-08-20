import React, { useEffect, useState } from "react";

const Card = () => {
  const [employee, setEmployee] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filteredEmp, setFilteredEmp] = useState([]);
  

  useEffect(() => {
    try {
        fetch("http://localhost:3000/employee")
          .then((response) => response.json())
          .then((response) => {
            setEmployee(response);
            setFilteredEmp(response)
          });
    } catch (error) {
        console.log("Exception Occured")
    }
  }, []);
  const onSearch=()=>{
        if(searchItem===""){
            setFilteredEmp(employee);
        }
        else{
            setFilteredEmp(employee.filter(emp=>emp.name.toLowerCase().includes(searchItem.toLowerCase())))
        }
  }
  useEffect(()=>{
    onSearch()
  },[searchItem])
  return (
    <>
    <strong>Search</strong> <input onChange={(e)=>setSearchItem(e.target.value)} className="border-2 rounded-sm" type="text" name="" id="" />
    <div className="grid grid-cols-4">
    {
        filteredEmp.map((emp,i)=>{
            return(
                <div key={i} className="border-2 m-2 w-[300px] items-start">
                    <p><strong>Name: </strong>{emp.name}</p>
                    <p><strong>Location: </strong>{emp.location}</p>
                    <p><strong>Designation: </strong>{emp.designation}</p>
                    <p><strong>Salary: </strong>{emp.salary}</p>
                </div>
            )
        })
    }
    </div>
    </>
  )
};

export default Card;
