import { useEffect } from "react";
import { DyteMeeting } from "@dytesdk/react-ui-kit";
import { useDyteClient } from "@dytesdk/react-web-core";
import axios from "axios";
const VideoMeeting = () => {
  const [meeting, initMeeting] = useDyteClient();
  //eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyYzU1NWM2LTMxMTItNDA5Ni1iZjRlLWNmYTI2NjI5ZTZkYiIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2OTQ2MzEwNjgsImV4cCI6MTcwMzI3MTA2OH0.XJlUVP0_DSMA2RUEawI6rSLDCu-UEl-rUFdTKBf9xYO523vah0lS1gXA5E27qP_e72y8hwEZu5-S8CH8aMHPJPBQnhP3HpvELb7KRZlumcjJV-UDBL6B0eyX6qldxYMgb28DFY9kGsy93LpNsjtLYZFS75waYLo4VILiBwUksLzxtlaLejNnvneC4yfKNIvaMQNqn9r7eSj-DtbtY3rvcZMqL_K1eZKp_b2RYsw542qRUozX1UHn4cjCf4fC2kftI7gXMP5Ec1YD5_3bHM20t2HyLHalOhE1ZpISSdhnLY7eNsRlPZs1JU5S6rl_VFP1H11NTtsvl1t6Juqifq5GXw
  //bbb3ac7c-3571-4fd5-a4e2-9b46192e2a7b
  //https://api.cluster.dyte.in/v1/organizations/fa2aeb12-2cf4-44e6-a3bd-b7dc513789ec/meetings/bbb3ac7c-3571-4fd5-a4e2-9b46192e2a7b/participant
  const headers = {
    "Content-Type": "application/json",
    Authorization: "f722086685ed1980df50",
  };
  const getToken = async () => {
    const url =
      "https://api.cluster.dyte.in/v1/organizations/771ff504-d776-41ea-8f69-cb260acfb93a/meetings/c4615b54-2959-4fce-8565-c871a6cab23c/participant";
    const res = await axios.post(
      url,
      {
        clientSpecificId: "123",
        userDetails: {
          name: "gg",
          picture:
            "https://d3tfdru9q5sbcz.cloudfront.net/2021/09/2024-300x180.png",
        },
      },
      { headers: headers, withCredentials: false }
    );

    console.log(res.data);
  };
  getToken();
  useEffect(() => {
    initMeeting({
      roomName: "cwtqkz-iewiln",
      authToken:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyYzU1NWM2LTMxMTItNDA5Ni1iZjRlLWNmYTI2NjI5ZTZkYiIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2OTQ2MzIwNTQsImV4cCI6MTcwMzI3MjA1NH0.Xcxt0dP2LZfvJC4qmPoHlJQV1R3Fw-ZPY6AHJlz89kKn16H4McZbUD48bnC3lXWwXCRv66ip-H08uX4ZofYifBhAj7mWC6TPnyz-CViAgDUI3KRELQ72dFEqainqY-dOUFpct-_P8cPQEVM8VwU_wNzc2-r4Ld3QV71rz-6GYaQ_Sg7tfdJkBiXA8SIlosyGzhBAcwxKuGDTzAK0amVOdw_oCEPRxbS2GeQsRhzLsTcIKT7NDt7K9Yeh7mUcJSUjeNxI66ZM0FkqDsnVbQeEJikXFLIDaLOV748_tkreaFmuCrxv8rdF0XSNRSTYc7_JVnwY0F_s0sh5l_ckxfhOmw",
      defaults: {
        audio: false,
        video: false,
      },
    });
  }, []);

  return <DyteMeeting meeting={meeting} />;
};

export default VideoMeeting;
