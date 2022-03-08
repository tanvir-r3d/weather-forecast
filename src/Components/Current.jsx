import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {API, API_KEY, FAHRENHEIT} from "../const";
import {CapitalContext} from "../Context/CapitalContext";
import {useSelector} from "react-redux";

const Current = () => {
    const {capital} = useContext(CapitalContext);
    const temperature = useSelector((state) => state.temperature.value);
    const [currentWeather, setCurrentWeather] = useState({
        current: {
            feelslike_c: "",
            feelslike_f: "",
            temp_c: "",
            condition: {
                text: "",
                icon: "",
            }
        },
        location: {
            country: "",
            name: "",
        }
    });
    console.log(temperature)
    const fetchCurrentWeather = async () => {
        const {data} = await axios.get(`${API}/current.json?key=${API_KEY}&q=${capital}`);
        setCurrentWeather({...data});
    };

    const handleTempChange = (e) => {
        console.log(e.target.checked);
    };

    useEffect(() => {
        fetchCurrentWeather();
    }, [capital])

    return (
        <>
            <section className="vh-100" style={{backgroundColor: '#f5f6f7'}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-10 col-lg-8 col-xl-6">

                            <div className="card bg-dark text-white" style={{borderRadius: '40px'}}>
                                <div className="bg-image" style={{borderRadius: '35px'}}>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                                        className="card-img"
                                        alt="weather"
                                    />
                                    <div className="mask" style={{backgroundColor: 'rgba(190, 216, 232, .5)'}}/>
                                </div>
                                <div className="card-img-overlay text-dark p-5">
                                    <h4 className="mb-0">{currentWeather.location.name}, {currentWeather.location.country}
                                        <img src={currentWeather.current.condition.icon} alt="" style={{width: "15%"}}/>
                                    </h4>
                                    <p className="display-2 my-3">{currentWeather.current.temp_c} °C</p>
                                    <p className="mb-2">Feels
                                        Like: <strong>{currentWeather.current.feelslike_c} °C</strong></p>
                                    <h5>{currentWeather.current.condition.text}</h5>
                                    <div className='custom-control custom-switch'>
                                        <input
                                            type='checkbox'
                                            className='custom-control-input'
                                            id='customSwitchesChecked'
                                            value={FAHRENHEIT}
                                            onChange={(e) => {
                                                handleTempChange(e)
                                            }}
                                        />
                                        <label className='custom-control-label' htmlFor='customSwitchesChecked'>
                                            Fahrenheit
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Current;