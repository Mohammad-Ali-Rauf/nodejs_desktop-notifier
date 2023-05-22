import notifier from "node-notifier";
import moment from "moment";

let notificationTimeout;

// Function to send the notification
function sendNotification() {
  notifier.notify({
    title: 'Time to Code',
    message: "It's 9:00 AM. Time to start coding!",
    sound: true,
    wait: true,
  });
}

// Calculate the delay until the next 9:00 AM
function calculateDelay() {
  const now = moment();
  const target = moment().set({ hour: 9, minute: 0, second: 0 });
  const delay = target.diff(now);
  return delay;
}

// Schedule the notification
function scheduleNotification() {
  clearTimeout(notificationTimeout);
  const delay = calculateDelay();
  notificationTimeout = setTimeout(() => {
    sendNotification();
    scheduleNotification();
  }, delay);
}

scheduleNotification();
