package org.nre.flightsys.controller;

import org.nre.flightsys.model.Flight;
import org.nre.flightsys.model.Order;
import org.nre.flightsys.model.POI;
import org.nre.flightsys.model.Survey;
import org.nre.flightsys.service.FlightService;
import org.nre.flightsys.service.LocalFlightsInfomation;
import org.nre.flightsys.service.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@CrossOrigin
@RestController
public class FlightController {

    @Autowired
    FlightService FlightService;

    LocalFlightsInfomation flights = new LocalFlightsInfomation();


//    //task5,task3
//    @GetMapping("/flights")
//    private List<Flight> getAllFlights() {
//        return FlightService.getAllFlights();
//    }
//
//    //delete in MY page as well as search result page
//    @DeleteMapping("/flights/{id}")
//    private void deleteFlight(@PathVariable("id") int id) {
//        FlightService.delete(id);
//    }
//
//    //save in MY page as well as search result page
//    @PostMapping("/flights")
//    private int saveFlight(@RequestBody Flight Flight) {
//        FlightService.saveOrUpdate(Flight);
//        return Flight.getId();
//    }

    @GetMapping("/all-cities")
    private List<String> getAllCities() throws FileNotFoundException {
        return LocalFlightsInfomation.getAllCities();
    }

    //task2
    @PostMapping("/login")
    private void login(@RequestBody List<String> info) {
        if(UserInfo.login(info.get(0), info.get(1))) {
            POI.setUser(info.get(0));
            Flight.setUser(info.get(0));
            Survey.setUser(info.get(0));
            Order.setUser(info.get(0));
        }
    }

    @PostMapping("/signup")
    private void signup(@RequestBody List<String> info) {
        if (UserInfo.signup(info.get(0), info.get(1))) {
            POI.setUser(info.get(0));
            Flight.setUser(info.get(0));
            Survey.setUser(info.get(0));
            Order.setUser(info.get(0));
        }
    }

    //task1
    @GetMapping("/search-flights")
    private Flight[] searchFlights(@RequestParam(value = "departure") String departure, @RequestParam(value = "destination") String destination) {
        Flight[] flights = new Flight[10];
        int price = FlightService.randomPrice();
        for (int i = 0; i < flights.length; i++) {
            Flight flight = new Flight();
            flight.setDeparture(departure);
            flight.setDestination(destination);
            flight.setArriving_time(FlightService.randomFlightTime()[1]);
            flight.setDeparture_time(FlightService.randomFlightTime()[0]);
            flight.setPrice(price + (int) (Math.random()*200));
            flights[i] = flight;
        }
        return flights;
    }

}
