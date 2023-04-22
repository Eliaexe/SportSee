import React, { useState, useEffect } from 'react';
import GetTheData from './components/Fetch';
import Nutrition from './components/Nutrition';
import Greetings from './components/Greetings';
import DailyActivity from './components/DailyActivity'
import Statistic from './components/Statistics';
import SessionTime from './components/SessionTime';
import Score from './components/Score';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async (user) => {
      const result = await GetTheData(user);
      setData(result);
    };
    fetchData(12);
  }, []);

  let userData = data && data[0].userInfos
  let nutritionData = data && data[0].keyData;
  let statisticData = data && data[1]
  let sessionsTimeData = data && data[2].sessions
  let todayScoreData = data && data[0].todayScore

  return (
    <main className="App">
      {data && (
        <div className='chartsContainer'>
          <Greetings name={userData.firstName} objective={true} />

          <section className='bigColomn'>
            <DailyActivity data={data[3].sessions} />
            <div className='bottonRow'>
              <SessionTime data={sessionsTimeData}/>
              <Statistic data={statisticData}/>
              <Score data={todayScoreData} />
            </div>
          </section>
          <section className='smallColomn'>
            <Nutrition
                calories={nutritionData.calorieCount}
                proteines={nutritionData.proteinCount}
                glucides={nutritionData.carbohydrateCount}
                lipides={nutritionData.lipidCount}
                />
          </section>

        </div>
      )}
      <p>ciao</p>
    </main>
  );
}

export default App;
