package org.nre.flightsys.service;

import org.nre.flightsys.model.Flight;
import org.springframework.stereotype.Service;

import java.io.*;

@Service
public class FlightService {

////    backlog
//    task1.search Flights in dashboar(parameter:) return list of Flights
//    task2.login and have the userId(or email)
//    task3.click on more i,present poi weather or save and move unsave(Tushar)
//    task4.click on save(Tushars page) again...
//    task5.In "My" Page...get my fav poi and flight

    //    public List<Flight> getAllFlights() {
//        List<Flight> flights = new ArrayList<Flight>();
//        FavFlightRepository.findAll().forEach(flight -> {
//                    if (Objects.equals(flight.getUser(), UserInfo.getUser())) {
//                        flights.add(flight);
//                    }
//                }
//        );
//        return flights;
//    }
//    public String getAirport(String airportID) throws FileNotFoundException {
//        Scanner fileScanner = new Scanner(new FileReader(new File("airports.txt")));
//        String airportName;
//        String id;
//        while (fileScanner.hasNextLine()) {
//            String line = fileScanner.nextLine();
//            Scanner scan = new Scanner(line).useDelimiter(",");
//
//            while (scan.hasNext()) {
//                id = scan.next();
//                if (airportID == id) {
//                    airportName = scan.next();
//                    return airportName;
//                }
//
//            }
//        }
//        return "Not Found";
//    }
    public static int randomPrice() {
        return (int) (Math.random() * 1500);
    }

    public static void saveFlight(Flight flight) throws IOException {
        File file = new File("src/main/resources/favouriteFlights.txt");
        if (!file.exists()) {
            file.createNewFile();
        }
        FileWriter fw = new FileWriter(file.getName(),true);
        BufferedWriter writer = new BufferedWriter(fw);

        writer.write(flight.toString());

        writer.close();
    }
    public static String[] randomFlightTime() {
        String startTime1 = "0";
        String endTime1 = "0";
        String startTime2 = "0";
        String endTime2 = "0";

        int start1 = (int) (Math.random() * 24);
        int start2 = (start1 + (int) (Math.random() * 59));
        int end1 = (start1 + (int) (Math.random() * 18)) % 24;
        int end2 = (end1 + (int) (Math.random() * 59));
        if (start1 < 10) {
            startTime1 = "0" + start1;
        } else {
            startTime1 = start1 + "";
        }
        if (start2 < 10) {
            startTime2 = "0" + start2;
        } else {
            startTime2 = start2 + "";
        }
        if (end1 < 10) {
            endTime1 = "0" + end1;
        } else {
            endTime1 = end1 + "";
        }
        if (end2 < 10) {
            endTime2 = "0" + end2;
        } else {
            endTime2 = end2 + "";
        }

        return new String[]{startTime1 + ":" + startTime2, endTime1 + ":" + endTime2};
    }

//    public Flight getFlightById(int id) {
//        return FavFlightRepository.findById(id).get();
//    }
//
//    public void saveOrUpdate(Flight flight) {
//        flight.setUser(UserInfo.getUser());
//        FavFlightRepository.save(flight);
//    }
//
//    public void delete(int id) {
//        FavFlightRepository.deleteById(id);
//    }

}
