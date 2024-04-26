import css from "./Profile.module.css";

export default function Profile({ userData: { username, tag, location, avatar, stats } }) {
  return (
    <div className={css.userProfile}>
      <div className={css.userCard}>
        <img className={css.userImg}
           src= {avatar}
           alt= "User avatar"
        />
        <p className={css.userName}>{username}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>
      <ul className={css.userMenu}>
        <li className={css.userList}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.userList}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.userList}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}