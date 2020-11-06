import usersList from "./components/usersList";
import userForm from "./components/userForm";
import "./styles/app.css";

usersList.render();
userForm.initForm(() => usersList.render());
