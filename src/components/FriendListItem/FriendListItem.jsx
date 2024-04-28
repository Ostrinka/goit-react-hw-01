import css from "./FriendListItem.module.css";

import clsx from "clsx";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.friendCard}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(css.friendStatus, 
        isOnline ? css.online : css.offline
      )}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  )
}