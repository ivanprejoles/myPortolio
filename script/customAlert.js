function customAlert(message, duration = 2000) {
    const alertContainer = document.createElement("div");
    alertContainer.style.position = "fixed";
    alertContainer.style.top = "50px";
    alertContainer.style.left = "50%";
    alertContainer.style.transform = "translate(-50%, 0)";
    alertContainer.style.backgroundColor = "#f2f2f2";
    alertContainer.style.padding = "20px";
    alertContainer.style.border = "1px solid #ddd";
    alertContainer.style.borderRadius = "5px";
    alertContainer.style.zIndex = "9999";

    const formattedMessage = message.replace(/\n/g, "<br>");
    alertContainer.innerHTML = formattedMessage;

    document.body.appendChild(alertContainer);

    setTimeout(function() {
      alertContainer.remove();
    }, duration);
}
function wholeData(data){
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.zIndex = "9999";

  const alertContainer = document.createElement("div");
  alertContainer.style.position = "absolute";
  alertContainer.style.top = "50%";
  alertContainer.style.left = "50%";
  alertContainer.style.transform = "translate(-50%, -50%)";
  alertContainer.style.backgroundColor = "#f2f2f2";
  alertContainer.style.padding = "20px";
  alertContainer.style.border = "1px solid #ddd";
  alertContainer.style.borderRadius = "5px";
  alertContainer.style.zIndex = "10000";

  const h3Element = document.createElement("h3");
  h3Element.innerText = data.title;

  const pDes = document.createElement("p");
  pDes.innerText = data.description;

  const closeAllButton = document.createElement("button");
  closeAllButton.innerText = "Close All";
  closeAllButton.style.marginTop = "10px";
  closeAllButton.addEventListener("click", () => {
    document.body.removeChild(overlay);
  });

  alertContainer.appendChild(h3Element);
  alertContainer.appendChild(pDes);
  alertContainer.appendChild(closeAllButton);

  overlay.appendChild(alertContainer);
  document.body.appendChild(overlay);
}