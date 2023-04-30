const GetTheData = async (user) => {
  try {
    let url = 'http://localhost:3000/user/';
    let urlUserData = url + user + '/';
    const resUserData = await fetch(urlUserData);
    const resPerformanceData = await fetch(urlUserData + 'performance/');
    const resSessionTime = await fetch(urlUserData + 'average-sessions/');
    const resDailyActivity = await fetch(urlUserData + 'activity/');

    if (resUserData.ok && resPerformanceData.ok && resSessionTime && resDailyActivity) {
      const userData = await resUserData.json();
      const performanceData = await resPerformanceData.json();
      const sessionTimeData = await resSessionTime.json();
      const dailyActivityData = await resDailyActivity.json();
      return [userData.data, performanceData.data, sessionTimeData.data, dailyActivityData.data ];
    } else {
      throw new Error('Error: ' + resUserData.status + ', ' + resPerformanceData.status);
    }
    
  } catch (err) {
    console.error(err);
  }
};

export default GetTheData;
