
import {  Component, OnInit } from "@angular/core";
import { User } from "../shared/user.model";
import { Page } from "tns-core-modules/ui/page";
// import { LoginService } "../shared/loging.service"


@Component ({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    user: User;

    isLoggingIn = true;

    toogleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    constructor(
        private page: Page,
        // private userService: LoginService,
    ) {
        this.user = new User();
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    submit(){
        if(!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }

        if (this.isLoggingIn) {
            this.login();
        } else {
            this.singUp();
        }
    }

    login() {

    }

    singUp() {

    }


}




