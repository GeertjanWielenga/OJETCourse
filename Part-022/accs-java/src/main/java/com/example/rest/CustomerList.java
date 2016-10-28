package com.example.rest;

import java.util.concurrent.CopyOnWriteArrayList;
import java.util.stream.Collectors;

public class CustomerList {
  private static final CopyOnWriteArrayList<Customer> cList = new CopyOnWriteArrayList<>();

  static {
    // Create list of customers
    cList.add(
        new Customer.CustomerBuilder().id()
        .firstName("George")
        .lastName("Washington")
        .email("gwash@example.com")
        .city("Mt Vernon")
        .state("VA")
        .birthday("1732-02-23")
        .build()
    );

    cList.add(
        new Customer.CustomerBuilder().id()
        .firstName("John")
        .lastName("Adams")
        .email("jadams@example.com")
        .city("Braintree")
        .state("MA")
        .birthday("1735-10-30")
        .build()
    );

    cList.add(
        new Customer.CustomerBuilder().id()
        .firstName("Thomas")
        .lastName("Jefferson")
        .email("tjeff@example.com")
        .city("CharlottesVille")
        .state("VA")
        .birthday("1743-04-13")
        .build()
    );

    cList.add(
        new Customer.CustomerBuilder().id()
        .firstName("James")
        .lastName("Madison")
        .email("jmad@example.com")
        .city("Orange")
        .state("VA")
        .birthday("1751-03-16")
        .build()
    );

    cList.add(
        new Customer.CustomerBuilder().id()
        .firstName("James")
        .lastName("Monroe")
        .email("jmo@example.com")
        .city("New York")
        .state("NY")
        .birthday("1758-04-28")
        .build()
    );

  }

  private CustomerList(){}

  public static CopyOnWriteArrayList<Customer> getInstance(){
    return cList;
  }

  public static void testList(){
    CopyOnWriteArrayList<Customer> list = CustomerList.getInstance();
    list.stream()
        .forEach(i -> System.out.println(i));
    String cString =
        list.stream()
        .map( c -> c.toString())
        .collect(Collectors.joining("\n"));
    System.out.println(cString);
  }

  public static void main(String[] args) {
    CustomerList.testList();
  }

}