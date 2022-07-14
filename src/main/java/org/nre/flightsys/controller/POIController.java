package org.nre.flightsys.controller;

import org.nre.flightsys.model.Flight;
import org.nre.flightsys.model.POI;
import org.nre.flightsys.service.FlightService;
import org.nre.flightsys.service.POIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;
import java.util.List;


@RestController
public class POIController {
    @Autowired
    POIService POIService;

    @GetMapping("/search-pois")
    private POI[] searchPOIs(@RequestParam(value = "destination") String destination) throws FileNotFoundException {
       return POIService.getAllPOIs(destination);
    }

    @GetMapping("/search-pois-ordered")
    private POI[] searchPOIsOrder(@RequestParam(value = "destination") String destination, @RequestParam(value = "order") int order) throws FileNotFoundException {
        if(order == 1) return POIService.sortByAscending(POIService.getAllPOIs(destination));
        else return POIService.sortByDescending(POIService.getAllPOIs(destination));
    }

}