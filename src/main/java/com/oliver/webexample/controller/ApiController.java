package com.oliver.webexample.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.oliver.webexample.model.DataRecord;
import com.oliver.webexample.service.DataService;

@RestController
@RequestMapping(path = "/api", method = { RequestMethod.GET })
public class ApiController {

  @Autowired
  private DataService service;

  @RequestMapping("/data")
  public List<DataRecord> getData() throws IOException {
    return service.getData();
  }
}
