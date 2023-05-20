import React, { useState, useEffect } from 'react';
import GetTheData from './components/utils/Fetch';
import Nutrition from './components/charts/Nutrition';
import Greetings from './components/Greetings';
import DailyActivity from './components/charts/DailyActivity'
import Statistic from './components/charts/Statistics';
import SessionTime from './components/charts/SessionTime';
import TopNav from './components/TopNav';
import Score from './components/charts/Score';
import './App.css';
import LeftNav from './components/LeftNav';
// import GetLocalData from './components/utils/LocalData';
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async (user) => {
      const APIresult = await GetTheData(user);
      // const localResult = await GetLocalData();
      setData(APIresult);
    };

    fetchData(12); // select user 12 or user 18
  }, []);

  let userData = data && data[0].userInfos
  let nutritionData = data && data[0].keyData;
  let statisticData = data && data[1]
  let sessionsTimeData = data && data[2].sessions
  let todayScoreData = data && data[0].todayScore
  return (
    <div className='app-container'>
      <TopNav />
      <main className='main-container'>
        <aside>
          <LeftNav />
        </aside>
          {data && (
            <div className='chartsContainer'>
          <Greetings name={userData.firstName} objective={true} />
            <div className='sections-container'>
            <section className='bigColomn'>
                <div className='daily-chart-container'>
                  <DailyActivity data={data[3].sessions} />
                </div>
                <div className='bottomRow'>
                  <SessionTime data={sessionsTimeData} />
                  <Statistic data={statisticData} />
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
        </div>
          )}
      </main>
    </div>
  );
}

export default App;
