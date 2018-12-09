package com.oliver.webexample.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api", method = { RequestMethod.GET })
public class ApiController {

  @RequestMapping("/data")
  public List<Object> getData() {
    return Collections.emptyList();
  }
}
