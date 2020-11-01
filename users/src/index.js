import usersList from "./components/usersList";
import userForm from "./components/userForm";
import "./styles/app.css";
import "./styles/alert.css";
import "./styles/form.css";
import "./styles/users.css";

usersList.render();
userForm.initForm(() => usersList.render());
