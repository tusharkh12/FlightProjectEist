package org.nre.flightsys.model;

public class Survey {

    private static String user;

    private int starRating1;
    private int starRating2;
    private int starRating3;
    private String comment;

    public static String getUser() {
        return user;
    }

    public static void setUser(String user) {
        Survey.user = user;
    }

    public int getStarRating1() {
        return starRating1;
    }

    public void setStarRating1(int starRating1) {
        this.starRating1 = starRating1;
    }

    public int getStarRating2() {
        return starRating2;
    }

    public void setStarRating2(int starRating2) {
        this.starRating2 = starRating2;
    }

    public int getStarRating3() {
        return starRating3;
    }

    public void setStarRating3(int starRating3) {
        this.starRating3 = starRating3;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
