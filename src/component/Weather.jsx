import { useEffect, useState } from 'react';
import '../styles/Weather.css'

export default function Wheather({ data }) {
    const [formattedData, setFormattedData] = useState(null)
    const [time, setTime] = useState(null)

    useEffect(() => {
        setFormattedData(convertDate(data?.location?.localtime)?.formatedData);
        setTime(convertDate(data?.location?.localtime)?.time);
    }, [data])
    return <>
        <div className='wheather-container'>
            <div className='weather-inner-box' >
                <div className="time card">
                    <div className='title'>
                        {data?.location?.name}
                    </div>
                    {/* <div>{data?.location?.localtime}</div> */}
                    <div className='current-time'>{time}</div>
                    <div className='current-day'>{formattedData}</div>
                </div>
                <div className="current-weather card">
                    <div>
                        <div className='temperature'> 
                            <div >
                                <img src="https://img.icons8.com/?size=100&id=1414&format=png&color=000000" alt="temperature img" />
                                <div className='degree'>{data?.current?.temperature} &deg; C</div>
                            </div>
                            <div className='degree-Feeled'>Feels like : {data?.current?.feelslike} &deg; C</div>
                        </div>
                        <div className='weather-details'>
                            <div>
                            <img src="https://img.icons8.com/?size=100&id=2854&format=png&color=000000" alt="cloudcover" />
                        <div className='value'>{data?.current?.cloudcover}<span>%</span></div>
                            </div>
                        <div className='name'>Cloud cover</div>
                    </div>
                        <div className='weather-details'>
                            <div>
                            <img src="https://img.icons8.com/?size=100&id=1690&format=png&color=000000" alt="Pressure" />
                        <div className='value'>{data?.current?.pressure}<span>hPa</span></div>
                            </div>
                        <div className='name'>Pressure</div>
                    </div>

                    </div>
                    <div className='weather'>
                        <div>
                        <img src={data?.current?.weather_icons} alt="icon" />
                        <div className='weather_descriptions'>{data?.current?.weather_descriptions}</div>
                        </div>
                    </div>
                    <div>
                    <div className='weather-details'>
                        <div>                       
                             <img src="https://img.icons8.com/?size=100&id=1690&format=png&color=000000" alt="" />
                        <div className='value'>{data?.current?.humidity}<span>%</span></div></div>
                        <div className='name'>Humidity</div>
                    </div>
                    <div className='weather-details'>
                        <div>
                        <img src="https://img.icons8.com/?size=100&id=aTP_RPVthhrW&format=png&color=000000" alt="wind speed" />
                        <div className='value'>{data?.current?.wind_speed}<span>km/h</span></div>
                        </div>
                        <div className='name'>Wind speed</div>
                    </div>
                    <div className='weather-details'>
                        <div >
                        <img src="https://img.icons8.com/?size=100&id=YglZ9PzSN37C&format=png&color=000000" alt="uv image" />
                        <div className='value'>{data?.current?.uv_index}</div>
                        </div>
                        <div className='name'>UV</div>
                    </div>
                    </div>

                </div>
            </div>
            <div className='weather-inner-box' >
                <div></div>
                <div></div>
            </div>
        </div>
    </>
}
function convertDate(input) {
    // Validate input format
    if (!input.match(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/)) {
        throw new Error('Invalid input format. Please use YYYY-MM-DD HH:MM format.');
    }

    const [date, time] = input.split(' ');

    // Extract year, month, day, hours, and minutes
    const [year, monthNumber, day] = date.split('-');
    const [hours, minutes] = time.split(':');
    const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthAbbreviation = monthAbbreviations[monthNumber - 1];
    // Validate values (you can add more date validation if needed)
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        throw new Error('Invalid time values. Hours should be between 0 and 23, and minutes should be between 0 and 59.');
    }

    // Create a Date object for further processing (optional)
    const parsedDate = new Date(year, monthNumber - 1, day, hours, minutes);
    const dayOfWeek = parsedDate.toLocaleString('en-US', { weekday: 'long' });
    // return {

    //   year,
    //   month,
    //   day,
    //   hours,
    //   minutes,
    //   parsedDate, // Optional: parsed Date object
    // };
    let formatedData = `${dayOfWeek},${day} ${monthAbbreviation}`
    return {
        formatedData,
        time
    };
}