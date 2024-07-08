import style from "./Profile.module.css";
import clsx from "clsx";

const Profile = ({ name, tag, location, imgUrl, stats }) => {
  return (
    <div className={style.profile}>
      <div className={style.profileInfo}>
        <img className={style.profileImg} src={imgUrl} alt="User avatar" />
        <p className={style.profileTitle}>{name}</p>
        <p className={style.profileSubtitle}>{tag}</p>
        <p className={style.profileSubtitle}>{location}</p>
      </div>

      <ul className={style.profileList}>
        <li className={style.profileItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={clsx(style.profileItem, style.profileItemBorder)}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={style.profileItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
