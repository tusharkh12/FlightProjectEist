package org.nre.flightsys.model;


public class Flight {

    private String departure;
    private String destination;
    private String departure_time;
    private String arriving_time;
    private static String user;
    private int price;

    public String getDeparture() {
        return departure;
    }

    public void setDeparture(String departure) {
        this.departure = departure;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getDeparture_time() {
        return departure_time;
    }

    public void setDeparture_time(String departure_time) {
        this.departure_time = departure_time;
    }

    public String getUser() {
        return user;
    }

    public String getArriving_time() {
        return arriving_time;
    }

    public void setArriving_time(String arriving_time) {
        this.arriving_time = arriving_time;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String toString() {
        return user + ", " + departure + ", " + destination + ", " + departure_time + ", " + arriving_time + "\n";
    }

    public static void setUser(String u) {
        user = u;
    }
}
