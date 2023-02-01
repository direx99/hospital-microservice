import React, { useEffect, useState } from 'react'
import axios from "axios";
import './doctorselect.css'
import { Stack } from '@mui/system';

export default function DoctorSelect() {
    const [materials, setmaterials] = useState([]);
    const [showForm, setShowForm] = useState(false)

    const [f_name, setFname] = useState("");
    const [l_name, setLname] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [telephone, setTelephone] = useState("");
    const [nic, setNic] = useState("");
    const [reg_method, setreg_method] = useState("Online");
    const [reg_date, setreg_date] = useState("");
    const [dob, setDob] = useState("");


    const [doctor, setDoctor] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState("");

    function sendData(e) {
        const newPatient = {
            f_name,
            l_name,
            gender,
            city,
            address,
            telephone,
            nic,
            reg_date,
            reg_method,
            dob
        }
        e.preventDefault();
        console.log(newPatient);
        axios.post("http://localhost:8077/patients", newPatient).then(() => {
            console.log("patient saved")

        })
    }

    useEffect(() => {
        axios
            .get("http://localhost:8099/doctors/")
            .then((res) => {
                setDoctor(res.data);
                console.log(res.data);

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);




    return (
        <div>

            {showForm ? (<div>
                <Stack direction='row' className='guestregform'>
                    <form>
                        <div className="guestform">
                            <Stack direction='column'>
                                <input type="text"
                                    placeholder='fname'
                                    value={f_name}
                                    onChange={(e) => { setFname(e.target.value); console.log(e.target.value) }}

                                />
                                <input type="text"
                                    placeholder='lname'
                                    value={l_name}
                                    onChange={(e) => { setLname(e.target.value); console.log(e.target.value) }}

                                />
                                <input type="text"
                                    placeholder='gender'
                                    value={gender}
                                    onChange={(e) => { setGender(e.target.value); console.log(e.target.value) }}

                                />
                                <input type="text"
                                    placeholder='city'
                                    value={city}
                                    onChange={(e) => { setCity(e.target.value); console.log(e.target.value) }}

                                />
                                <input type="text"
                                    placeholder='address'
                                    value={address}
                                    onChange={(e) => { setAddress(e.target.value); console.log(e.target.value) }}

                                />
                                <input type="text"
                                    placeholder='telephone'
                                    value={telephone}
                                    onChange={(e) => { setTelephone(e.target.value); console.log(e.target.value) }}

                                />
                                <input type="text"
                                    placeholder='nic'
                                    value={nic}
                                    onChange={(e) => { setNic(e.target.value); console.log(e.target.value) }}

                                />
                                <input type="date"
                                    placeholder='dob'
                                    value={dob}
                                    onChange={(e) => { setDob(e.target.value); console.log(e.target.value) }}

                                />
                                <input type="date"
                                    placeholder='reg_date'
                                    value={reg_date}
                                    onChange={(e) => { setreg_date(e.target.value); console.log(e.target.value) }}

                                />
                                <input type="submit" onClick={sendData} />
                            </Stack>
                        </div>
                    </form>
                </Stack>

            </div>) : (
                <div> <Stack direction='row' className='contaonerstack'>
                    <div className="leftcontainer">
                        <div>All Doctor</div>

                    </div>
                    <div className="maincontainer">
                        <Stack spacing={2} className='selectdoctordata'>
                            <div>Select Doctor</div>
                            <select className='docotorselect'
                                value={selectedDoctor}
                                onChange={(e) => { setSelectedDoctor(e.target.value); console.log(e.target.value) }}
                            >
                                <option>Select Doctor</option>
                                {doctor.map((doc, idx) => (<option>
                                    {doc.name}
                                </option>))}
                            </select>

                            <input type='date' className='dateselect'></input>
                            <Stack direction='row' className='buttongrp'>
                                <div className='clearbutton'>Clear</div>
                                <div className='nextbutton' onClick={() => setShowForm(true)}>Next</div>
                            </Stack>
                        </Stack>

                    </div>




                </Stack></div>)}


        </div>
    )
}
