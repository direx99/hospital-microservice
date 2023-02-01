import { Stack } from "@mui/system";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./alldocapo.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
export default function AllDocApo() {
  const [doctorData, setDoctorData] = useState([]);
  const [filterDoctor, setFilterDoctor] = useState("");
  const [filterdResualt, setFilterdResult] = useState([]);
const[selectSpecial,setSelectSpecial]=useState('');


  useEffect(() => {
    axios.get("http://localhost:8099/doctors/").then((res) => {
      setDoctorData(res.data);
    });
  }, [doctorData]);
  useEffect(() => {
    setFilterdResult(
      doctorData.filter((searchdata) =>
        (searchdata.firstName.toLowerCase().includes(filterDoctor.toLowerCase())
        ||
        searchdata.lastName.toLowerCase().includes(filterDoctor.toLowerCase()))
        &&
        searchdata.specialIn.toLowerCase().includes(selectSpecial.toLowerCase())

      )
    );
  }, [doctorData, filterDoctor,selectSpecial]);

  return (
    <div className="alldocapo">
      <Stack direction="row">
        <Stack>
          <div className="docsearchbarcon">
          <Stack direction='row'>

            <input
              type="text"
              className="docsearchbar"
              placeholder="serach..."
              value={filterDoctor}
              onChange={(e) => setFilterDoctor(e.target.value)}
            ></input>
                      <ManageSearchOutlinedIcon className="serchicondovtor"/>
                      </Stack>

          </div>

          </Stack>

        <Stack>
          <div className="specialselectcon">
            <select value={selectSpecial} onChange={(e)=>(setSelectSpecial(e.target.value))} className="specialselect">
              <option>specialize</option>
              <option value=''>any</option>
              <option value='OPD'>OPD</option>
              <option value='HEART'>HEART</option>


              <option></option>
            </select>
          </div>
        </Stack>
      </Stack>
     <div className="docliststack">
      {filterdResualt.map((doc, index) => (
        <Stack className="resultdoctorcard">
            <Stack className='docliststack' >
          <Stack direction="row" >
            <AccountCircleOutlinedIcon sx={{fontSize:'30pt'}} className="docotoprofileicon" />
            <Stack>
            <div className="doctordataname">Dr {doc.firstName} {doc.lastName}</div>
            <div className="doctordataspecial">Specialize in {doc.specialIn} </div>

            </Stack>
          </Stack>
</Stack>
        </Stack>
      ))}
      </div>
     
    </div>
  );
}
