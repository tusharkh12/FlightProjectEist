package org.nre.flightsys.model;

public class POI {
    private int id;
    private String name;
    private int popularity;
    private static String user;

    public String getUser() {
        return user;
    }

    public static void setUser(String u) {
        user = u;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPopularity() {
        return popularity;
    }

    public void setPopularity(int popularity) {
        this.popularity = popularity;
    }

    public String toString() {
        return user + ", " + name + ", " + popularity + "\n";
    }
}
