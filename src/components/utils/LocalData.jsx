/*
* Fetching the data from Local
* @param {string} the user id
* @retuns {object} data
*
*/

const GetLocalData = async () => {
    return (
        [{ "id": 23, 
            "userInfos": {
                "firstName": "Elia",
                "lastName": "Sidori",
                "age": 28 
            },
            "todayScore": 0.24, 
            "keyData": { 
                "calorieCount": 2200, 
                "proteinCount": 130, 
                "carbohydrateCount": 260, 
                "lipidCount": 70 
            } 
        }, 
        {   "userId": 23, 
            "kind": { 
                "1": "cardio", 
                "2": "energy", 
                "3": "endurance", 
                "4": "strength", 
                "5": "speed", 
                "6": "intensity" 
            }, 
            "data": [
                { "value": 70, "kind": 1 }, 
                { "value": 110, "kind": 2 }, 
                { "value": 130, "kind": 3 }, 
                { "value": 60, "kind": 4 }, 
                { "value": 190, "kind": 5 }, 
                { "value": 80, "kind": 6 }]
        },
        {
            "userId": 23,
            "sessions": [
                {
                    "day": 1,
                    "sessionLength": 40
                },
                {
                    "day": 2,
                    "sessionLength": 25
                },
                {
                    "day": 3,
                    "sessionLength": 35
                },
                {
                    "day": 4,
                    "sessionLength": 55
                },
                {
                    "day": 5,
                    "sessionLength": 0
                },
                {
                    "day": 6,
                    "sessionLength": 0
                },
                {
                    "day": 7,
                    "sessionLength": 70
                }
            ]
        },
        {
            "userId": 23,
            "sessions": [
                {
                    "day": "01",
                    "kilogram": 75,
                    "calories": 250
                },
                {
                    "day": "02",
                    "kilogram": 76,
                    "calories": 220
                },
                {
                    "day": "03",
                    "kilogram": 77,
                    "calories": 270
                },
                {
                    "day": "04",
                    "kilogram": 77,
                    "calories": 310
                },
                {
                    "day": "05",
                    "kilogram": 75,
                    "calories": 180
                },
                {
                    "day": "06",
                    "kilogram": 73,
                    "calories": 150
                },
                {
                    "day": "07",
                    "kilogram": 72,
                    "calories": 400
                }
            ]
        }
        ]
    )
}

export default GetLocalData