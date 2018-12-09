package com.oliver.webexample.service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.oliver.webexample.model.DataRecord;

@Service
public class DataService {
  @Value("${csv.path}")
  private String pathToFile;

  public List<DataRecord> getData() throws IOException {
    return loadAndParseData();
  }

  private List<DataRecord> loadAndParseData() throws IOException {
    Scanner scanner = null;
    try {
      scanner = new Scanner(new File(pathToFile));
      String[] header = scanner.nextLine().split("\\s*,\\s*", -1);
      List<DataRecord> result = new ArrayList<>();
      while (scanner.hasNextLine()) {
        final String line = scanner.nextLine();
        if (!line.isEmpty())
          result.add(fromRawData(line.split("\\s*,\\s*", header.length))); // limit keeps empty fragments
      }
      return result;
    } finally {
      if (scanner != null)
        scanner.close();
    }
  }

  private DataRecord fromRawData(String[] data) {
    DataRecord result = new DataRecord();
    if (!data[0].isEmpty())
      result.setWords(data[0]);
    if (!data[1].isEmpty())
      result.setScore(Integer.parseInt(data[1]));
    if (!data[2].isEmpty())
      result.setAvgScore(Float.parseFloat(data[2]));
    return result;
  }

}
