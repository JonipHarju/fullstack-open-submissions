/* eslint-disable react/prop-types */
import "../index.css";
const Notifications = ({ message, notificationType }) => {
  const getNotificationStyle = () => {
    if (notificationType === "error") {
      return "errorNotification";
    } else if (notificationType === "success") {
      return "successNotification";
    }
  };
  return (
    <div className={getNotificationStyle()}>
      <p>{message}</p>
    </div>
  );
};

export default Notifications;
