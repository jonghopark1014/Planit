import axios from 'axios';

export const ServiceFindNotification = async userInfo => {
  try {
    const success = await axios.get(
      `https://i8b202.p.ssafy.io/api/notification`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },

        // 나중에는 베리어 형태로 바꿔주세요!
        // headers: {
        //   Authorization: `Bearer ${Login.userId}`,
        // },
      }
    );

    return success;
  } catch (err) {
    return false;
  }
};
