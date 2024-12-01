const template = (userData) => `
<div class="flex rounded-lg p-4 gap-x-3.5 fontColor-grayish-blue ${
  userData.isNewNotification ? "background-very-light-grayish-blue" : ""
}">
    <img class="w-10 h-10 rounded-full" src="${
      userData.avatarImg
    }" alt="avatar of ${userData.username}">

    <div class="flex w-full">
        <div>
          <span class="font-medium cursor-pointer fontColor-very-dark-blue mr-2 hovered-text transition-all">${
            userData.username
          }</span>${userData.notificationMessage}
          
          ${
            userData.postReacted
              ? '<span class="cursor-pointer font-semibold hovered-text transition-all">' +
                userData.postReacted +
                "</span>"
              : ""
          }

          ${
            userData.groupleft
              ? '<span class="cursor-pointer fontColor-blue font-medium hovered-text">' +
                userData.groupleft +
                "</span>"
              : ""
          }

          ${
            userData.groupJoined
              ? '<span class="cursor-pointer fontColor-blue font-medium hovered-text transition-all">' +
                userData.groupJoined +
                "</span>"
              : ""
          }

          ${
            userData.isNewNotification
              ? '<span class="background-red inline-block rounded-full w-2.5 h-2.5 "></span>'
              : ""
          }

          <span class="fontColor-grayish-blue block">${
            userData.postDated
          }</span>


          ${
            userData.privateMessage
              ? '<div class="rounded-md cursor-pointer px-4 py-5 mt-4 border-color-light-grayish-blue-2 box-text-hovered transition-all">' +
                userData.privateMessage +
                "</div>"
              : ""
          }
    
        </div>

        ${
          userData.imgCommented
            ? '<div class="flex justify-end flex-1"><img class="cursor-pointer w-10 h-10 rounded-md rounded-md img-hovered p-0.5" src="' +
              userData.imgCommented +
              '" alt="image commented"></div>'
            : ""
        }
    </div>
  </div>`;

export default template;
