package be.ruy.sakura.web_site.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NavigationController {

    @GetMapping("/enseignant")
    public String enseignant(){
        return "enseignant";
    }
}
