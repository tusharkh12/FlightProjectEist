package org.nre.flightsys.controller;

import org.nre.flightsys.service.SurveyOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class SurveyOrderController {
    @Autowired
    SurveyOrderService SurveyOrderService;

    @GetMapping("/order")
    private String takeOrder(@RequestParam("user") String user, @RequestParam("foodItem") String foodItem, @RequestParam("drinkItem") String drinkItem) {
        try {
            SurveyOrderService.takeOrder(foodItem, drinkItem, user);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return user;
        //return new String[]{foodItem, drinkItem, user};
    }

    @GetMapping("/submit-survey")
    private String submitSurvey(@RequestParam("user") String user, @RequestParam("rating1") int rating1, @RequestParam("rating2") int rating2, @RequestParam("rating3") int rating3, @RequestParam("comment") String comment) {
        try {
            SurveyOrderService.submitSurvey(rating1, rating2, rating3, comment, user);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return user;
        //return new String[]{Integer.toString(rating1), Integer.toString(rating2), Integer.toString(rating3), user};
    }

}
