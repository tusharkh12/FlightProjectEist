package org.nre.flightsys.service;

import org.nre.flightsys.model.Flight;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.*;

public class LocalFlightsInfomation {

    private List<Flight> flights = new ArrayList<>();
    private Map<Integer, String> airportmap = new HashMap<>();

    public LocalFlightsInfomation() {
        generateH();
        for (int i = 0; i < 5000; i++) {
            int departureNum = (int) (Math.random() * 53);
            int destinationNum = (int) (Math.random() * 24) + 53;
            if (departureNum == destinationNum) {
                destinationNum++;
            }
            Flight flight = new Flight();
            flight.setDeparture(airportmap.get(departureNum));
            flight.setDestination(airportmap.get(destinationNum));
            flight.setPrice((int) (Math.random() * 500) + 50);
            List<String> l = date_generator();
            flight.setDeparture_time(l.get(0));
            flight.setArriving_time(l.get(1));
            flights.add(flight);
        }
        for (int i = 5001; i < 9999; i++) {
            int departureNum = (int) (Math.random() * 24) + 53;
            int destinationNum = (int) (Math.random() * 53);
            if (departureNum == destinationNum) {
                destinationNum++;
            }
            Flight flight = new Flight();
            flight.setDeparture(airportmap.get(departureNum));
            flight.setDestination(airportmap.get(destinationNum));
            flight.setPrice((int) (Math.random() * 500) + 50);
            List<String> l = date_generator();
            flight.setDeparture_time(l.get(0));
            flight.setArriving_time(l.get(1));
            flights.add(flight);
        }
    }

    public static List<String> getAllCities() throws FileNotFoundException {

        Scanner scan = new Scanner(new FileReader("src/main/resources/airports.txt"));
        List<String> cities = new ArrayList<>();

        while (scan.hasNextLine()) {
            String line = scan.nextLine().split(",")[11];
            if (line.length() > 3) {
                String city = line.substring(1, line.length() - 1);
                if (!cities.contains(city)) {
                    cities.add(city);
                }
            }
        }
        scan.close();
        return cities;
    }

    public String generate_fn() {
        String str = "";
        for (int i = 0; i < 3; i++) {
            str = str + (char) (Math.random() * 26 + 'A');
        }
        str = str + ((int) (Math.random() * 8999) + 1000);
        return str;
    }

    public List<String> date_generator() {
        int dep_hour = (int) (Math.random() * 15) + 5;
        int des_hour = dep_hour + (int) (Math.random() * 3) + 1;
        int dep_min = (int) (Math.random() * 60);
        int des_min = (int) (Math.random() * 60);
        String dep = "" + dep_hour + ":" + dep_min;
        String des = "" + des_hour + ":" + des_min;
        List<String> ret = new ArrayList<>();
        ret.add(dep);
        ret.add(des);
        return ret;
    }

    public void generateH() {
        airportmap.put(1, "AAH");
        airportmap.put(2, "AOC");
        airportmap.put(3, "AGB");
        airportmap.put(4, "ZCD");
        airportmap.put(5, "BBH");
        airportmap.put(6, "BER");
        airportmap.put(7, "BYU");
        airportmap.put(8, "BBJ");
        airportmap.put(9, "BMK");
        airportmap.put(10, "BWE");
        airportmap.put(11, "BRE");
        airportmap.put(12, "CGN");
        airportmap.put(13, "FCN");
        airportmap.put(14, "DTM");
        airportmap.put(15, "DRS");
        airportmap.put(16, "DUS");
        airportmap.put(17, "MGL");
        airportmap.put(18, "EME");
        airportmap.put(19, "FRA");
        airportmap.put(20, "FDH");
        airportmap.put(21, "HHN");
        airportmap.put(22, "HAM");
        airportmap.put(23, "XFW");
        airportmap.put(24, "HAJ");
        airportmap.put(25, "HEI");
        airportmap.put(26, "HGL");
        airportmap.put(27, "HDF");
        airportmap.put(28, "HOQ");
        airportmap.put(29, "IGS");
        airportmap.put(30, "FKB");
        airportmap.put(31, "KSF");
        airportmap.put(32, "KEL");
        airportmap.put(33, "LHA");
        airportmap.put(34, "LEJ");
        airportmap.put(35, "LBC");
        airportmap.put(36, "CSO");
        airportmap.put(38, "MHG");
        airportmap.put(39, "FMM");
        airportmap.put(40, "MUC");
        airportmap.put(41, "FMO");
        airportmap.put(42, "FNB");
        airportmap.put(43, "NUE");
        airportmap.put(44, "PAD");
        airportmap.put(45, "REB");
        airportmap.put(46, "RLG");
        airportmap.put(47, "SCN");
        airportmap.put(48, "SGE");
        airportmap.put(49, "STR");
        airportmap.put(50, "AGE");
        airportmap.put(51, "NRN");
        airportmap.put(52, "GWT");
        airportmap.put(53, "ZQW");

        airportmap.put(54, "IST");//
        airportmap.put(55, "SVO");
        airportmap.put(56, "CDG");
        airportmap.put(57, "AMS");
        airportmap.put(58, "DME");
        airportmap.put(59, "MAD");
        airportmap.put(60, "LHR");
        airportmap.put(61, "BCN");
        airportmap.put(62, "LED");
        airportmap.put(63, "VKO");
        airportmap.put(64, "ORY");
        airportmap.put(65, "PMI");
        airportmap.put(66, "ATH");
        airportmap.put(67, "LIS");
        airportmap.put(68, "FCO");
        airportmap.put(69, "VIE");
        airportmap.put(70, "ZRH");
        airportmap.put(71, "MXP");
        airportmap.put(72, "OSL");
        airportmap.put(73, "BRU");
        airportmap.put(74, "CPH");
        airportmap.put(75, "AGP");
        airportmap.put(76, "DUB");
        airportmap.put(77, "ARN");

    }

    public List<Flight> getFlights() {
        return flights;
    }

    public String getCity(String AirportCode) throws FileNotFoundException {
        Scanner scan = new Scanner(new FileReader("src/main/java/org/arpit/java2blog/service/LocalFlightsInfomation.java"));

        while (scan.hasNextLine()) {
            Scanner inLine = new Scanner(scan.next()).useDelimiter(",");
            inLine.next();
            inLine.next();
            String city = inLine.next();
            inLine.next();
            String airportCode = inLine.next();
            if (AirportCode.equals(airportCode)) {
                scan.close();
                return city;
            }
        }
        scan.close();
        return "None Found";
    }

    public List<Flight> searchForFlights(String departure, String destination, String date) {
        List<Flight> result = new LinkedList<>();
        for (Flight flight :
                flights) {
            if (flight.getDeparture() == departure && flight.getDestination() == destination && date == date) {
                result.add(flight);
            }
        }
        result.sort((o1, o2) -> {
            if (o1.getPrice() < o2.getPrice()) {
                return 1;
            } else return -1;
        });
        return result;
    }
}
