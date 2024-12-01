import getData from "./getData.js";
import template from "./template.js";

const render = (data) => {
  const templateConcat = data.reduce(
    (acc, data) => acc.concat(template(data)),
    ""
  );

  const newNotificationsQuantity = data.filter(
    (obj) => obj.isNewNotification === true
  ).length;

  document.getElementById("notifications-counter").textContent =
    newNotificationsQuantity;

  document.getElementById("notifications-container").innerHTML = templateConcat;
};

const updateNotificationsState = (data) => {
  document.getElementById("mark-readed").addEventListener("click", () => {
    const updatedUserData = data.map((obj) => {
      return {
        ...obj,
        isNewNotification: false,
      };
    });
    render(updatedUserData);
  });
};

const main = async (func) => {
  try {
    const userData = await func();
    render(userData);
    updateNotificationsState(userData);
  } catch (error) {
    console.log(error);
  }
};

main(getData);
