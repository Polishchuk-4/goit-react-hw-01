import "./App.module.css";
import style from "./App.module.css";
import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";

import userData from "../userData.json";
import friends from "../friends.json";

function App() {
  return (
    <div className={style.app}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        imgUrl={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
