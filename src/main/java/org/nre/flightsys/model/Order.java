package org.nre.flightsys.model;


public class Order {
    private static String user;

    private String foodItem;
    private String drinkItem;

    public static String getUser() {
        return user;
    }

    public static void setUser(String user) {
        Order.user = user;
    }

    public String getDrinkItem() {
        return drinkItem;
    }

    public void setDrinkItem(String drinkItem) {
        this.drinkItem = drinkItem;
    }

    public String getFoodItem() {
        return foodItem;
    }

    public void setFoodItem(String foodItem) {
        this.foodItem = foodItem;
    }
}
