import usersList from "./components/usersList";
import userForm from "./components/userForm";
import "./styles/app.css";

document.addEventListener("DOMContentLoaded", function (event) {
  usersList.render();
  userForm.initForm(function onCreate() {
    usersList.render();
  });
});
