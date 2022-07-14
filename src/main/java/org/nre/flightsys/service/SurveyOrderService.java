package org.nre.flightsys.service;

import org.springframework.stereotype.Service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

@Service
public class SurveyOrderService {

    public static void takeOrder(String drinkItem, String foodItem, int id) throws IOException {

        File file = new File("src/main/resources/order.txt");
        if (!file.exists()) {
            file.createNewFile();
        }
        FileWriter fw = new FileWriter(file.getName(),true);
        BufferedWriter writer = new BufferedWriter(fw);

        writer.write(Integer.toString(id));
        writer.write(",");
        writer.write(drinkItem);
        writer.write(",");
        writer.write(foodItem);
        writer.write(",");
    }

    public static void submitSurvey(int rating1, int rating2, int rating3, String comment, int id) throws IOException {
        File file = new File("src/main/resources/survey.txt");
        if (!file.exists()) {
            file.createNewFile();
        }
        FileWriter fw = new FileWriter(file.getName(),true);
        BufferedWriter writer = new BufferedWriter(fw);

        writer.write(Integer.toString(id));
        writer.write(", ");
        writer.write(Integer.toString(rating1));
        writer.write(", ");
        writer.write(Integer.toString(rating2));
        writer.write(", ");
        writer.write(Integer.toString(rating3));
        writer.write(", ");
        writer.write(comment);
        writer.newLine();

        writer.close();
    }

}
