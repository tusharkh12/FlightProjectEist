package org.nre.flightsys.service;

import org.nre.flightsys.model.POI;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

@Service
public class POIService {

    public static POI[] getAllPOIs(String destination) throws FileNotFoundException {
        Scanner scan = new Scanner(new FileReader("src/main/resources/pointsOfInterest.txt"));
        int n = 0;
        POI[] pois = new POI[10];

        while (scan.hasNextLine() && n < 10) {
            String[] line = scan.nextLine().split(",");
            String name = "";
            int popularity = 0;
            if (line[2].length() > 0) {
                popularity = Integer.valueOf(line[2].substring(1, 2));
            }
            if (line[1].length() > 0) {
                name = line[1];
            }
            if (line[0].length() > 0) {
                if (line[0].equals(destination)) {
                    POI poi = new POI();
                    poi.setName(name);
                    poi.setPopularity(popularity);
                    pois[n] = poi;
                    n++;
                }
            }
        }
        scan.close();
        return pois;
    }

    public static POI[] sortByDescending(POI[] pois) {
        Arrays.sort(pois, (o1, o2) -> {
            if (o1.getPopularity() < o2.getPopularity()) {
                return 1;
            } else return -1;
        });

        return pois;
    }

    public static POI[] sortByAscending(POI[] pois) {
        Arrays.sort(pois, (o1, o2) -> {
            if (o1.getPopularity() > o2.getPopularity()) {
                return 1;
            } else return -1;
        });

        return pois;
    }

    public static POI[] filter(POI[] pois, int threshold) {
        List<POI> ret = new ArrayList<>();
        Arrays.stream(pois).filter(o1 -> (o1.getPopularity() > threshold)).forEach(ret::add);
        return ret.toArray(new POI[0]);
    }

    public void savePOI(POI poi) throws IOException {
        File file = new File("src/main/resources/favouritePOIs.txt");
        if (!file.exists()) {
            file.createNewFile();
        }
        FileWriter fw = new FileWriter(file.getName(), true);
        BufferedWriter writer = new BufferedWriter(fw);

        writer.write(poi.toString());

        writer.close();
    }
}