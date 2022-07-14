package org.nre.flightsys.controller;

import org.nre.flightsys.service.SurveyOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class SurveyOrderController {
    @Autowired
    SurveyOrderService SurveyOrderService;

    @GetMapping("/order")
    private void takeOrder(@RequestParam("id") int id, @RequestParam("foodItem") String foodItem, @RequestParam("drinkItem") String drinkItem) throws IOException {
        SurveyOrderService.takeOrder(foodItem, drinkItem, id);
    }

    @GetMapping("/submit-survey")
    private void submitSurvey(@RequestParam("id") int id, @RequestParam("rating1") int rating1, @RequestParam("rating2") int rating2, @RequestParam("rating3") int rating3, @RequestParam("comment") String comment) throws IOException {
        SurveyOrderService.submitSurvey(rating1, rating2, rating3, comment, id);
    }

}
