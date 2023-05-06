/*
* Fetching the data from API
* @param {string} the user id
* @retuns {object} data
*
*/

const GetTheData = async (user) => {
  try {
    let url = 'http://localhost:3000/user/';
    let urlUserData = url + user + '/';
    const resUserData = await fetch(urlUserData);
    const resPerformanceData = await fetch(urlUserData + 'performance/');
    const resSessionTimeData = await fetch(urlUserData + 'average-sessions/');
    const resDailyActivityData = await fetch(urlUserData + 'activity/');

    if (resUserData.ok && resPerformanceData.ok && resSessionTimeData && resDailyActivityData) {
      const userData = await resUserData.json();
      const performanceData = await resPerformanceData.json();
      const sessionTimeData = await resSessionTimeData.json();
      const dailyActivityData = await resDailyActivityData.json();
      return [userData.data, performanceData.data, sessionTimeData.data, dailyActivityData.data ];
    } else {
      throw new Error('Error: ' + resUserData.status + ', ' + resPerformanceData.status + ', ' + resSessionTimeData.status + ', ' +resDailyActivityData);
    }
    
  } catch (err) {
    console.error(err);
  }
};

export default GetTheData;
