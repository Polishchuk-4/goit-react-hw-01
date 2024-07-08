import style from "./FriendListItem.module.css";

const FriendListItem = ({ urlAvatar, name, isOnline }) => {
  return (
    <div className={style.friend}>
      <img
        className={style.friendImg}
        src={urlAvatar}
        alt="Avatar"
        width="48"
      />
      <p className={style.friendName}>{name}</p>
      <p className={isOnline ? style.friendOnline : style.friendOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
