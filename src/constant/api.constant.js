export const API_RESPONSE= {
	"request": {
		"type": "City",
		"query": "Tirunelveli, India",
		"language": "en",
		"unit": "m"
	},
	"location": {
		"name": "Tirunelveli",
		"country": "India",
		"region": "Tamil Nadu",
		"lat": "8.733",
		"lon": "77.700",
		"timezone_id": "Asia\/Kolkata",
		"localtime": "2024-08-16 17:18",
		"localtime_epoch": 1723828680,
		"utc_offset": "5.50"
	},
	"current": {
		"observation_time": "11:48 AM",
		"temperature": 32,
		"weather_code": 176,
		"weather_icons": [
			"https:\/\/cdn.worldweatheronline.com\/images\/wsymbols01_png_64\/wsymbol_0009_light_rain_showers.png"
		],
		"weather_descriptions": [
			"Patchy rain nearby"
		],
		"wind_speed": 13,
		"wind_degree": 270,
		"wind_dir": "W",
		"pressure": 1002,
		"precip": 0,
		"humidity": 57,
		"cloudcover": 84,
		"feelslike": 38,
		"uv_index": 7,
		"visibility": 10,
		"is_day": "yes"
	}
}

export const API_BASE_URL="https://api.weatherstack.com/"

export const API_KEY = "22d012ffdbc8917762ec4c73561039b7";

export const FORECAST ={
    "request": {
        "type": "City",
        "query": "New York, United States of America",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "New York",
        "country": "United States of America",
        "region": "New York",
        "lat": "40.714",
        "lon": "-74.006",
        "timezone_id": "America/New_York",
        "localtime": "2019-09-07 11:38",
        "localtime_epoch": 1567856280,
        "utc_offset": "-4.0"
    },
    "current": {
        "observation_time": "03:38 PM",
        "temperature": 18,
        "weather_code": 113,
        "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
        ],
        "weather_descriptions": [
            "Sunny"
        ],
        "wind_speed": 0,
        "wind_degree": 345,
        "wind_dir": "NNW",
        "pressure": 1011,
        "precip": 0,
        "humidity": 58,
        "cloudcover": 0,
        "feelslike": 18,
        "uv_index": 5,
        "visibility": 16
    },
    "forecast": {
        "2019-09-07": {
            "date": "2019-09-07",
            "date_epoch": 1567814400,
            "astro": {
                "sunrise": "06:28 AM",
                "sunset": "07:19 PM",
                "moonrise": "03:33 PM",
                "moonset": "12:17 AM",
                "moon_phase": "First Quarter",
                "moon_illumination": 54
            },
            "mintemp": 17,
            "maxtemp": 25,
            "avgtemp": 21,
            "totalsnow": 0,
            "sunhour": 10.3,
            "uv_index": 5,
            "hourly": [
                {
                    "time": "0",
                    "temperature": 18,
                    "wind_speed": 28,
                    "wind_degree": 15,
                    "wind_dir": "NNE",
                    "weather_code": 122,
                    "weather_icons": [
                        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
                    ],
                    "weather_descriptions": [
                        "Overcast"
                    ],
                    "precip": 0,
                    "humidity": 68,
                    "visibility": 10,
                    "pressure": 1008,
                    "cloudcover": 75,
                    "heatindex": 18,
                    "dewpoint": 12,
                    "windchill": 18,
                    "windgust": 35,
                    "feelslike": 18,
                    "chanceofrain": 0,
                    "chanceofremdry": 87,
                    "chanceofwindy": 0,
                    "chanceofovercast": 90,
                    "chanceofsunshine": 15,
                    "chanceoffrost": 0,
                    "chanceofhightemp": 0,
                    "chanceoffog": 0,
                    "chanceofsnow": 0,
                    "chanceofthunder": 0,
                    "uv_index": 0
                }
                // {   "time": "300", ...   },
                // {   "time": "600", ...   },
                // 6 more items
            ]
        }
    }
}


export const DEMO_RESPONSE={
    "request": {
        "type": "City",
        "query": "Tiruchendur, India",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "Tiruchendur",
        "country": "India",
        "region": "Tamil Nadu",
        "lat": "8.483",
        "lon": "78.117",
        "timezone_id": "Asia/Kolkata",
        "localtime": "2024-08-25 16:49",
        "localtime_epoch": 1724604540,
        "utc_offset": "5.50"
    },
    "current": {
        "observation_time": "11:19 AM",
        "temperature": 34,
        "weather_code": 113,
        "weather_icons": [
            "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
        ],
        "weather_descriptions": [
            "Sunny"
        ],
        "wind_speed": 30,
        "wind_degree": 284,
        "wind_dir": "WNW",
        "pressure": 1006,
        "precip": 0,
        "humidity": 42,
        "cloudcover": 8,
        "feelslike": 37,
        "uv_index": 8,
        "visibility": 10,
        "is_day": "yes"
    },
    "forecast": {
        "2024-08-24": {
            "date": "2024-08-24",
            "date_epoch": 1724457600,
            "astro": {
                "sunrise": "06:09 AM",
                "sunset": "06:30 PM",
                "moonrise": "10:19 PM",
                "moonset": "10:13 AM",
                "moon_phase": "Waning Gibbous",
                "moon_illumination": 76
            },
            "mintemp": 27,
            "maxtemp": 34,
            "avgtemp": 30,
            "totalsnow": 0,
            "sunhour": 12.2,
            "uv_index": 8
        }
    }
}