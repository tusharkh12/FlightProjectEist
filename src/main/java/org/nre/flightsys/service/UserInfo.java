package org.nre.flightsys.service;

import java.util.HashMap;
import java.util.Map;

public class UserInfo {

    private static String currentUserEmail;

    private static Map<String, String> map;

    public String getCurrentUserEmail() {
        return currentUserEmail;
    }

    public void setCurrentUserEmail(String currentUserEmail) {
        this.currentUserEmail = currentUserEmail;
    }

    public static Map<String, String> getMap() {
        return map;
    }

    public static String getUser() {
        return currentUserEmail;
    }

    public static boolean login(String email, String passwort) {
        if (map.containsKey(email)) {
            if (map.get(email) == passwort) {
                currentUserEmail = email;
                return true;
            }
        }
        return false;
    }

    public static boolean signup(String email, String passwort) {
        if (map == null) {
            map = new HashMap<>();
        }
        if (map.containsKey(email)) {
            return false;
        } else {
            map.put(email, passwort);
            return true;
        }
    }

}
