
// import { LoginContent } from "../contexts/AuthContext";
import { LogOut } from "../../services/logout";
import { LoginContent } from "../../contexts/AuthContext";
import { Button } from "react-bootstrap";
import { useContext } from "react";


export default function LogOutButton() {
	const [isLoggedIn, setIsLoggedIn] = useContext(LoginContent);
	

    const LogOutThePerson = () => {
        const ans = LogOut();
        console.log("ans",ans);
        setIsLoggedIn(false);
    }

	return (
        <Button variant="outline-dark" onClick={LogOutThePerson}>
            Logout
        </Button>
    );
}